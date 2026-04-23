// js/game.js — Heróis da Fé — VERSÃO CORRIGIDA
// ═══════════════════════════════════════════════════════════
// BUGS CORRIGIDOS:
//  1. voltarParaBiblia: chamava duelTeardown() mas isso destruía os canais
//     Realtime do sistema de duelo, impedindo que novos desafios fossem
//     recebidos após voltar à tela da Bíblia. O teardown só deve ocorrer
//     em logout. Corrigido: voltarParaBiblia NÃO destrói os canais.
//  2. iniciarAuditoriaPontuacao: o log de pontuação só registrava GANHOS,
//     mas não registrava o motivo da pontuação (campo 'motivo' não preenchido).
//     Corrigido para registrar motivo genérico.
//  3. verificarResposta: pontosGanhos podia ser string (vindo de onclick
//     inline via JSON.stringify). Já havia Number() mas a lógica de
//     explicacao usava JSON.stringify + slice para escapar strings
//     — método frágil que quebra com aspas e caracteres especiais.
//     Corrigido com função de escape segura.
//  4. exibirCapitulo: background da URL não sanitizava aspas simples,
//     permitindo injeção de CSS via nomes de arquivos com apóstrofo.
//     Corrigido com escapeUrl().
//  5. _renderizarRanking: chamado pelo canal Realtime sem verificar se o
//     usuário ainda está na tela de ranking, causando re-render de HTML
//     no bibleText quando o usuário já navegou para outra seção.
//     Corrigido com guard _paginaAtualJogo === 'ranking'.
//  6. mostrarRanking: criava novo canal Realtime sem sufixo único além de
//     Date.now(), o que podia causar conflito se chamado em rápida
//     sucessão. Adicionado cleanup garantido.
//  7. game.js importa duelTeardown de duel.js mas só o usava em
//     voltarParaBiblia (removido no fix #1). A importação foi mantida
//     para compatibilidade mas o uso incorreto foi removido.
//  8. atualizarPontosDoUsuario: não atualizava `lastupdate` (snake_case)
//     junto com `lastUpdate` (camelCase). O schema tem ambos e o
//     heartbeat de presença usa lastupdate. Corrigido.
// ═══════════════════════════════════════════════════════════

import { supabase } from './config.js';
import {
    verificarBadges,
    verificarLivroCompleto,
    atualizarExpAposLeitura,
    atualizarBarraExpMenu
} from './badges.js';
// FIX #1: importado mas não mais usado em voltarParaBiblia
import { duelTeardown } from './duel.js';

// ── ESTADO ─────────────────────────────────────────────────
let processandoResposta = false;
let rolagemMuitoRapida = false;
let ultimaPosicaoScroll = 0;
let _rankingChannel = null;
let _auditoriaChannel = null;
let _auditoriaUid = null;
let saldoAnterior = null;
let _processandoTimeout = null;
let _rankingRefreshPending = false;

function _agendarLiberacaoSegura() {
    if (_processandoTimeout) clearTimeout(_processandoTimeout);
    _processandoTimeout = setTimeout(() => {
        if (processandoResposta) {
            console.warn('[game] processandoResposta travado — liberando por segurança');
            processandoResposta = false;
            _liberarBotoesQuiz();
        }
    }, 12000);
}

// ── ESTILOS ────────────────────────────────────────────────
const style = document.createElement('style');
style.innerHTML = `
    @keyframes brilhoOuro {
        0%   { box-shadow: 0 0 10px #d4af37, inset 0 0 5px #d4af37; border-color: #fff; }
        50%  { box-shadow: 0 0 30px #ffdf00, 0 0 50px #d4af37, inset 0 0 15px #d4af37; border-color: #d4af37; }
        100% { box-shadow: 0 0 10px #d4af37, inset 0 0 5px #d4af37; border-color: #fff; }
    }
    @keyframes faiscasTexto {
        0%, 100% { text-shadow: 0 0 8px #fff, 0 0 15px #d4af37; }
        50% { text-shadow: 0 0 20px #fff, 0 0 35px #ffdf00, 0 0 50px #ff8c00; }
    }
    .vitoria-popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background: rgba(0,0,0,0.95);
        color: #d4af37;
        padding: 40px;
        border-radius: 20px;
        border: 4px solid #d4af37;
        text-align: center;
        z-index: 10000;
        font-family: 'Cinzel', serif;
        animation: popEntrada 0.5s forwards cubic-bezier(0.17,0.89,0.32,1.28), brilhoOuro 2s infinite;
        backdrop-filter: blur(15px);
        min-width: 320px;
    }
    @keyframes popEntrada {
        to { transform: translate(-50%, -50%) scale(1); }
    }
    .vitoria-popup h2 {
        margin: 0;
        font-size: 2.2rem;
        animation: faiscasTexto 1.5s infinite;
        color: #fff;
    }
    .vitoria-popup p {
        font-size: 1.6rem;
        font-weight: bold;
        margin: 15px 0;
        color: #d4af37;
        text-transform: uppercase;
    }
    .leitura-container {
        position: relative;
        z-index: 5;
        background: transparent;
        border-radius: 15px;
        border: none;
    }
    .btn-resposta-quiz {
        padding: 18px;
        background: rgba(20, 20, 20, 0.8);
        color: #fff;
        border: 1px solid rgba(212,175,55,0.4);
        border-radius: 8px;
        cursor: pointer;
        text-align: left;
        transition: all 0.2s;
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
        width: 100%;
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
    }
    .btn-resposta-quiz:hover:not(:disabled) {
        background: rgba(212,175,55,0.2);
        border-color: #d4af37;
    }
    .btn-resposta-quiz:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
document.head.appendChild(style);

// ── UTILITÁRIOS ────────────────────────────────────────────
function gerarAvatarPadrao(nome = 'Herói') {
    const nomeSeguro = String(nome || 'Herói').replace(/[\uD800-\uDFFF]/g, '');
    const iniciais = nomeSeguro
        .split(' ')
        .map(p => p[0] || '')
        .join('')
        .toUpperCase()
        .slice(0, 2) || '??';

    const cores = ['#d4af37', '#2ecc71', '#4a90e2', '#e74c3c', '#9b59b6', '#f39c12'];
    const cor = cores[Math.abs((nomeSeguro || '').charCodeAt(0) || 0) % cores.length];

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <rect width="200" height="200" fill="${cor}"/>
        <text x="100" y="100" font-size="80" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central" font-family="Arial">${iniciais}</text>
    </svg>`;

    const bytes = new TextEncoder().encode(svg);
    let binary = '';
    bytes.forEach(b => binary += String.fromCharCode(b));
    return `data:image/svg+xml;base64,${btoa(binary)}`;
}

// FIX #4: escape de URL para uso em CSS url()
function escapeUrl(str) {
    return String(str || '').replace(/['"\\]/g, '');
}

export function calcularNivel(pontos) {
    if (pontos < 100) return 'Servo Fiel';
    if (pontos < 500) return 'Levita Louvador';
    if (pontos < 1000) return 'Soldado de Cristo';
    if (pontos < 2000) return 'Semeador da Palavra';
    if (pontos < 3000) return 'Missionário(a)';
    if (pontos < 4500) return 'Guarda de Sião';
    if (pontos < 6000) return 'Vencedor em Cristo';
    if (pontos < 8000) return 'Ungido por Deus';
    if (pontos < 10500) return 'Fiel Adorador';
    if (pontos < 13500) return 'Embaixador do Reino';
    if (pontos < 17000) return 'Apóstolo';
    if (pontos < 21000) return 'Profeta de Deus';
    if (pontos < 26000) return 'Guerreiro de Gileade';
    if (pontos < 32000) return 'Herdeiro do Eterno';
    return 'Herói da Fé Eterno';
}

function _liberarBotoesQuiz() {
    document.querySelectorAll('.btn-resposta-quiz').forEach(btn => {
        btn.disabled = false;
    });
}

// FIX #8: atualiza lastupdate (snake) junto com lastUpdate (camel)
async function atualizarPontosDoUsuario(uid, pontosGanhos) {
    const { data: userAtual, error: selectError } = await supabase
        .from('users')
        .select('points')
        .eq('uid', uid)
        .single();

    if (selectError) throw selectError;

    const novosPontos = (userAtual?.points || 0) + pontosGanhos;
    const agoraIso = new Date().toISOString();

    const { error: updateError } = await supabase
        .from('users')
        .update({
            points: novosPontos,
            lastUpdate: agoraIso,
            lastupdate: agoraIso  // FIX #8: snake_case também
        })
        .eq('uid', uid);

    if (updateError) throw updateError;

    window.dispatchEvent(new CustomEvent('pontos_atualizados', {
        detail: { uid, pontos: novosPontos }
    }));

    return novosPontos;
}

// FIX #2: registra motivo no log de pontuação
function iniciarAuditoriaPontuacao(uid) {
    if (!uid) return;

    if (_auditoriaChannel) {
        supabase.removeChannel(_auditoriaChannel);
        _auditoriaChannel = null;
    }

    _auditoriaUid = uid;
    saldoAnterior = null;

    _auditoriaChannel = supabase
        .channel('auditoria-' + uid)
        .on(
            'postgres_changes',
            {
                event: 'UPDATE',
                schema: 'public',
                table: 'users',
                filter: `uid=eq.${uid}`
            },
            async (payload) => {
                const saldoAtual = payload.new?.points || 0;

                if (saldoAnterior !== null && saldoAtual > saldoAnterior) {
                    const ganho = saldoAtual - saldoAnterior;
                    try {
                        await supabase.from('logs_pontuacao').insert({
                            uid,
                            pontos: ganho,
                            motivo: 'atualização automática', // FIX #2
                            created_at: new Date().toISOString()
                        });
                    } catch (e) {
                        console.warn('[auditoria] erro ao salvar log:', e);
                    }
                }

                saldoAnterior = saldoAtual;
            }
        )
        .subscribe();
}

// ── RANKING ────────────────────────────────────────────────
const btnRanking = document.getElementById('nav-ranking');
if (btnRanking) btnRanking.addEventListener('click', mostrarRanking);

function limparUITravada() {
    document.getElementById('perfil-detalhado')?.remove();
    document.getElementById('janela-chat')?.remove();
    document.getElementById('bible-loading-overlay')?.remove();
    document.querySelector('.overlay-sair-jogo')?.remove();
    try { window.fecharSidebar?.(); } catch(e){}
    document.body.classList.remove('menu-open');
}

async function mostrarRanking() {
    const bibleText = document.getElementById('bible-text');
    const readingView = document.getElementById('reading-view');

    if (!bibleText || !readingView) return;

    limparUITravada();
    document.body.style.backgroundImage = '';
    document.body.style.backgroundSize = '';
    document.body.style.backgroundAttachment = '';
    readingView.style.display = 'block';
    window._paginaAtualJogo = 'ranking';
    document.body.classList.add('modo-ranking-ativo');

    bibleText.innerHTML = `
        <style>
            .trofeu-container { position: relative; width: 45px; height: 45px; display: flex; justify-content: center; align-items: center; }
            .aura-flamejante { position: absolute; width: 100%; height: 100%; border-radius: 50%; top: 0; left: 0; animation: aura-pulse 2s infinite; }
            .aura-ouro   { box-shadow: 0 0 15px #d4af37, 0 0 30px #ffff00, inset 0 0 10px rgba(212,175,55,0.5); }
            .aura-prata  { box-shadow: 0 0 15px #c0c0c0, 0 0 30px #e8e8e8, inset 0 0 10px rgba(192,192,192,0.5); }
            .aura-bronze { box-shadow: 0 0 15px #cd7f32, 0 0 30px #ff8c00, inset 0 0 10px rgba(205,127,50,0.5); }
            @keyframes aura-pulse { 0%,100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.2); opacity: 1; } }
            .trofeu-icone { position: relative; z-index: 10; font-size: 1.5rem; animation: trofeu-float 2s ease-in-out infinite; }
            @keyframes trofeu-float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-5px); } }
            .nivel-chamas-ouro { color: #000 !important; font-weight: 900; text-transform: uppercase; padding: 2px 8px; border-radius: 4px; display: inline-block; background: linear-gradient(45deg,#d4af37,#f9f295,#ffdf00,#d4af37); background-size: 400% 400%; animation: chamasOuroAnim 3s ease infinite; border: 1px solid #d4af37; font-size: 0.65rem; margin-top: 4px; box-shadow: 0 0 8px rgba(212,175,55,0.5); }
            @keyframes chamasOuroAnim { 0%,100% { background-position: 0% 50%; box-shadow: 0 0 5px #d4af37; } 50% { background-position: 100% 50%; box-shadow: 0 0 15px #ffdf00; } }
        </style>

        <div style="padding:20px; text-align:center; min-height:100vh; position:relative; z-index:10;">
            <h2 style="color:#d4af37; font-family:'Cinzel'; font-size:2rem; text-shadow:2px 2px 8px #000;">
                🏆 RANKING DOS HERÓIS
            </h2>

            <div id="ranking-lista" style="margin-top:20px;">
                <p style="color:#888;">Convocando Guerreiros...</p>
            </div>

            <button onclick="window.voltarParaBiblia()" class="btn-mission"
                style="margin-top:30px; width:100%; max-width:700px; display:block; margin-left:auto; margin-right:auto;">
                VOLTAR À LEITURA
            </button>
        </div>
    `;

    // FIX #6: cleanup garantido antes de criar novo canal
    if (_rankingChannel) {
        await supabase.removeChannel(_rankingChannel);
        _rankingChannel = null;
    }

    await _renderizarRanking();

    _rankingChannel = supabase
        .channel('ranking-updates-' + Date.now())
        .on(
            'postgres_changes',
            { event: 'UPDATE', schema: 'public', table: 'users' },
            () => {
                // FIX #5: só re-renderiza se ainda está na tela de ranking
                if (window._paginaAtualJogo !== 'ranking') return;
                if (_rankingRefreshPending) return;
                _rankingRefreshPending = true;
                setTimeout(async () => {
                    _rankingRefreshPending = false;
                    if (window._paginaAtualJogo === 'ranking') {
                        await _renderizarRanking();
                    }
                }, 250);
            }
        )
        .subscribe();
}

// Presença no ranking — fora da função async para evitar erro em strict mode
const _RANKING_ONLINE_MS = 90000;
function _rankingIsOnline(u) {
    const t = u?.lastUpdate || u?.lastupdate || null;
    if (!t) return false;
    return (Date.now() - new Date(t).getTime()) < _RANKING_ONLINE_MS;
}
(function _injetarEstilosPresencaRanking() {
    if (document.getElementById('ranking-presence-styles')) return;
    const ps = document.createElement('style');
    ps.id = 'ranking-presence-styles';
    ps.textContent = `
        @keyframes rankPdPulse { 0%,100%{transform:scale(1)}50%{transform:scale(1.18)} }
        .rank-presence-dot { position:absolute;right:1px;bottom:1px;width:11px;height:11px;border-radius:50%;border:2px solid #111;z-index:3; }
        .rank-presence-dot.online  { background:#00e676;box-shadow:0 0 8px #00e676,0 0 16px rgba(0,230,118,.5);animation:rankPdPulse 1.8s ease infinite; }
        .rank-presence-dot.offline { background:#f44336;box-shadow:0 0 8px rgba(244,67,54,.35); }
    `;
    document.head.appendChild(ps);
})();

async function _renderizarRanking() {
    const container = document.getElementById('ranking-lista');
    if (!container) return;

    // FIX #5: guard adicional
    if (window._paginaAtualJogo !== 'ranking') return;

    let eu = null;
    let usuarios = null;

    try {
        const authResp = await supabase.auth.getUser();
        eu = authResp?.data?.user ?? null;

        const resp = await supabase
            .from('users')
            .select('uid, name, points, photoURL, photourl, lastUpdate, lastupdate')
            .order('points', { ascending: false })
            .limit(50);

        if (resp.error) throw resp.error;
        usuarios = resp.data;
    } catch(e) {
        console.error('[ranking] erro ao buscar dados:', e);
        if (window._paginaAtualJogo === 'ranking' && container) {
            container.innerHTML = `<div style="color:#888;text-align:center;padding:40px;">
                ⚠️ Não foi possível carregar o ranking.<br>
                <button onclick="window.mostrarRanking?.()" style="margin-top:16px;background:#d4af37;color:#000;border:none;padding:10px 20px;border-radius:8px;cursor:pointer;font-weight:bold;">Tentar novamente</button>
            </div>`;
        }
        return;
    }

    if (!usuarios) return;

    // Checa novamente após o await (o usuário pode ter navegado)
    if (window._paginaAtualJogo !== 'ranking') return;

    let html = `<div style="max-width:700px; margin:0 auto;">`;

    usuarios.forEach((u, index) => {
        const isMe = eu?.id === u.uid;
        const foto = u.photoURL || u.photourl || gerarAvatarPadrao(u.name || '');
        const titulo = calcularNivel(u.points || 0);
        const nome = u.name ? (u.name.length > 12 ? u.name.substring(0, 12) + '…' : u.name) : 'Herói';
        const online = _rankingIsOnline(u);

        let rankConteudo = index + 1;
        if (index === 0) rankConteudo = `<div class="trofeu-container"><div class="aura-flamejante aura-ouro"></div><div class="trofeu-icone">🏆</div></div>`;
        else if (index === 1) rankConteudo = `<div class="trofeu-container"><div class="aura-flamejante aura-prata"></div><div class="trofeu-icone">🥈</div></div>`;
        else if (index === 2) rankConteudo = `<div class="trofeu-container"><div class="aura-flamejante aura-bronze"></div><div class="trofeu-icone">🥉</div></div>`;

        html += `
            <div onclick="window.verPerfilDetalhado('${u.uid}')"
                 style="display:flex; align-items:center; gap:12px; padding:12px; margin-bottom:10px;
                        cursor:pointer; transition:transform 0.2s;
                        background:${index < 3 ? 'rgba(212,175,55,0.25)' : isMe ? 'rgba(212,175,55,0.15)' : 'rgba(0,0,0,0.4)'};
                        border:1px solid ${index < 3 ? '#d4af37' : '#333'};
                        border-radius:12px; backdrop-filter:blur(5px);"
                 onmouseover="this.style.transform='scale(1.02)'"
                 onmouseout="this.style.transform='scale(1)'">

                <div style="width:45px; display:flex; justify-content:center; align-items:center; font-family:'Cinzel'; font-weight:bold; color:#d4af37;">
                    ${rankConteudo}
                </div>

                <div style="position:relative; flex-shrink:0;">
                    <img src="${foto}"
                         style="width:48px; height:48px; border-radius:50%; border:2px solid #d4af37; object-fit:cover; display:block;"
                         onerror="this.src='${gerarAvatarPadrao(u.name || '')}'">
                    <div class="rank-presence-dot ${online ? 'online' : 'offline'}" data-rank-presence-uid="${u.uid}"></div>
                </div>

                <div style="flex:1; text-align:left;">
                    <div style="color:white; font-weight:bold;">
                        ${nome} ${isMe ? '<span style="color:#d4af37; font-size:0.75rem;">(você)</span>' : ''}
                    </div>
                    <div class="nivel-chamas-ouro">${titulo}</div>
                    <div style="color:#d4af37; font-size:0.8rem; font-weight:bold; margin-top:2px;">
                        ${u.points || 0} PTS
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html + '</div>';
}

// FIX #1: NÃO destrói canais do duelo ao voltar à Bíblia
// Os canais devem permanecer ativos para receber novos convites
window.voltarParaBiblia = function () {
    limparUITravada();
    document.body.classList.remove('modo-ranking-ativo');
    document.body.style.backgroundImage = '';
    document.body.style.backgroundSize = '';
    document.body.style.backgroundAttachment = '';

    // Encerra apenas o canal de ranking (não o de duelo)
    if (_rankingChannel) {
        supabase.removeChannel(_rankingChannel);
        _rankingChannel = null;
    }

    // FIX #1: REMOVIDO — duelTeardown() não deve ser chamado aqui
    // Promise.resolve(duelTeardown()).catch(console.warn);

    if (window._tratarScrollAtivo) {
        window.removeEventListener('scroll', window._tratarScrollAtivo);
        window._tratarScrollAtivo = null;
    }

    window._paginaAtualJogo = 'biblia-home';

    const readingView = document.getElementById('reading-view');
    if (readingView) readingView.style.display = 'block';

    const bibleText = document.getElementById('bible-text');
    if (bibleText) bibleText.innerHTML = '';

    if (_processandoTimeout) {
        clearTimeout(_processandoTimeout);
        _processandoTimeout = null;
    }

    if (window.carregarListaLivros) {
        Promise.resolve(window.carregarListaLivros()).catch(console.error);
    }
};

// ── EXIBIR CAPÍTULO ────────────────────────────────────────
window.exibirCapitulo = function (chaveLivro, numeroCapitulo) {
    const container = document.getElementById('bible-text');
    if (!container) return;

    limparUITravada();

    container.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;min-height:60vh;">
        <div style="text-align:center;color:#d4af37;font-family:Cinzel,serif;">
            <div style="font-size:2rem;margin-bottom:12px;">📖</div>
            <div>Carregando capítulo...</div>
        </div>
    </div>`;

    if (window._tratarScrollAtivo) {
        window.removeEventListener('scroll', window._tratarScrollAtivo);
        window._tratarScrollAtivo = null;
    }

    rolagemMuitoRapida = false;
    ultimaPosicaoScroll = window.scrollY;
    let ultimaAtualizacao = Date.now();

    import('./bible.js').then(async (modulo) => {
        const livro = modulo.bible[chaveLivro];
        if (!livro) return alert('Livro não encontrado!');

        const capitulo = livro.capitulos[numeroCapitulo];
        if (!capitulo) return alert('Capítulo não encontrado!');

        // ── Buscar usuário e versos já lidos ──────────────────────────────
        const user = await modulo.getUsuarioAtual?.() || null;

        let versosLidos = new Set();

        if (user) {
            const { data, error } = await supabase
                .from('versos_lidos')
                .select('verso')
                .eq('uid', user.id)
                .eq('livro', chaveLivro)
                .eq('capitulo', Number(numeroCapitulo))
                .eq('lido', true);

            if (error) {
                console.error('[versos_lidos] erro ao buscar:', error);
            } else {
                versosLidos = new Set((data || []).map(v => Number(v.verso)));
            }
        }

        // ── Montar versos individualmente ─────────────────────────────────
        const linhasVersos = String(capitulo.texto || '')
            .split('\n')
            .filter(v => v.trim());

        const versosHtml = linhasVersos.map((linha, index) => {
            const numeroVerso = index + 1;
            const lido = versosLidos.has(numeroVerso);
            return `
                <div class="verso-item${lido ? ' verso-lido' : ''}"
                     data-verso="${numeroVerso}"
                     style="margin-bottom:14px; padding:12px 14px; border-radius:12px; cursor:pointer; transition:all .2s ease;">
                    <span style="color:#d4af37; font-weight:700; margin-right:8px;">${numeroVerso}</span>
                    <span>${linha}</span>
                </div>`;
        }).join('');

        window._paginaAtualJogo = 'capitulo';

        container.innerHTML = `
            <div class="leitura-container" style="padding:40px; max-width:800px; margin:0 auto; color:#eee; line-height:1.8; font-family:'Poppins', sans-serif;">
                <button onclick="window.abrirLivro('${chaveLivro}')" class="btn-mission" style="margin-bottom:30px;">
                    ⬅ Voltar aos Capítulos
                </button>

                <h1 style="color:#d4af37; font-family:'Cinzel', serif;">
                    ${livro.nome} — Capítulo ${numeroCapitulo}
                </h1>

                <h3 style="color:#b8941f; margin-bottom:30px; font-style:italic;">
                    ${capitulo.titulo || ''}
                </h3>

                <div id="texto-leitura" class="texto-biblico"
                     style="font-size:1.15rem; background: rgba(0, 0, 0, 0.4); padding: 25px; border-radius: 15px; border-left: 4px solid #d4af37; box-shadow: 0 4px 15px rgba(0,0,0,0.5); text-shadow: 1px 1px 2px rgba(0,0,0,0.8);">
                    ${versosHtml}
                </div>

                ${user ? `<div style="margin-top:12px; text-align:center; color:#888; font-size:.82rem;">
                    Clique em um verso para marcá-lo como lido ✨
                </div>` : ''}

                <div style="margin-top:40px; text-align:center;">
                    <button id="btn-missao"
                            onclick="window.iniciarMissao('${chaveLivro}', '${numeroCapitulo}')"
                            style="padding:15px 30px; background:#d4af37; color:#000; border:none; border-radius:5px; font-weight:bold; cursor:pointer; font-size:1.1rem;">
                        ⚔️ INICIAR MISSÃO (DESAFIO)
                    </button>
                </div>
            </div>
        `;

        // ── Eventos de clique nos versos ──────────────────────────────────
        if (user && typeof modulo.salvarVersoLido === 'function') {
            container.querySelectorAll('#texto-leitura .verso-item').forEach((elementoVerso) => {
                elementoVerso.addEventListener('click', async () => {
                    const numeroVerso = Number(elementoVerso.dataset.verso);
                    if (!numeroVerso) return;

                    elementoVerso.classList.add('verso-lido');

                    await modulo.salvarVersoLido(
                        user.id,
                        chaveLivro,
                        Number(numeroCapitulo),
                        numeroVerso
                    );
                });
            });
        }

        // FIX #4: escapeUrl para evitar injeção de CSS
        const bgRaw = livro.background || '';
        const bgUrl = escapeUrl(bgRaw.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
        if (bgUrl) {
            document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.08), rgba(0,0,0,0.08)), url('${bgUrl}')`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundAttachment = 'fixed';
        } else {
            document.body.style.backgroundImage = '';
            document.body.style.backgroundSize = '';
            document.body.style.backgroundAttachment = '';
        }

        const tratarScroll = () => {
            if (!document.querySelector('#texto-leitura')) {
                window.removeEventListener('scroll', tratarScroll);
                window._tratarScrollAtivo = null;
                return;
            }

            const agora = Date.now();
            const posicaoAtual = window.scrollY;
            const distancia = Math.abs(posicaoAtual - ultimaPosicaoScroll);
            const tempo = agora - ultimaAtualizacao;

            if (tempo > 0 && distancia / tempo > 3.0 && !rolagemMuitoRapida) {
                rolagemMuitoRapida = true;
                exibirAvisoMeditacao();
                document.body.style.overflow = 'hidden';
                setTimeout(() => { document.body.style.overflow = 'auto'; rolagemMuitoRapida = false; }, 3000);
            }

            ultimaPosicaoScroll = posicaoAtual;
            ultimaAtualizacao = agora;
        };

        window._tratarScrollAtivo = tratarScroll;
        window.addEventListener('scroll', tratarScroll, { passive: true });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }).catch(err => {
        console.error('[exibirCapitulo] erro:', err);
        const c = document.getElementById('bible-text');
        if (c) c.innerHTML = `<div style="color:#fff;text-align:center;padding:40px;"><p>⚠️ Não foi possível carregar o capítulo.</p><button onclick="window.carregarListaLivros()" class="btn-mission" style="margin-top:16px;">Voltar</button></div>`;
    });
};

// ── MISSÃO (QUIZ) ──────────────────────────────────────────
function resolverPerguntaDoCapitulo(capitulo) {
    if (!capitulo) return null;
    try {
        const valor = typeof capitulo.pergunta === 'function' ? capitulo.pergunta() : capitulo.pergunta;
        if (!valor) return null;
        if (typeof valor.texto === 'string' && Array.isArray(valor.opcoes)) return valor;
        return null;
    } catch (e) {
        console.error('Erro ao resolver pergunta do capítulo:', e);
        return null;
    }
}

// FIX #3: escape seguro para strings passadas via onclick inline
function escaparParaInline(str) {
    return String(str || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;').replace(/\n/g, ' ').replace(/\r/g, '');
}

window.iniciarMissao = function (chaveLivro, numeroCapitulo) {
    processandoResposta = false;

    import('./bible.js').then(modulo => {
        const livro = modulo.bible[chaveLivro];
        if (!livro) return;

        const capitulo = livro.capitulos[numeroCapitulo];
        const pergunta = resolverPerguntaDoCapitulo(capitulo);

        if (!pergunta) return alert('Este capítulo não possui desafio configurado corretamente!');

        window._paginaAtualJogo = 'missao';

        // FIX #3: usa escaparParaInline em vez do frágil JSON.stringify+slice
        const explicacaoSegura = escaparParaInline(String(pergunta.explicacao || ''));
        const pontosGanhos = Number(pergunta.pontosGanhos || 20);
        const container = document.getElementById('bible-text');

        if (!container) return;

        container.innerHTML = `
            <div style="padding:40px; max-width:600px; margin:0 auto; text-align:center;">
                <button onclick="window.exibirCapitulo('${chaveLivro}','${numeroCapitulo}')" class="btn-mission" style="margin-bottom:20px;">
                    ⬅ Voltar ao Capítulo
                </button>
                <h2 style="color:#d4af37; font-family:'Cinzel'; margin-bottom:30px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">
                    PERGUNTA DO CAPÍTULO
                </h2>
                <div style="background:rgba(0,0,0,0.75); padding:30px; border-radius:15px; border:2px solid #d4af37; margin-bottom:30px; backdrop-filter:blur(12px); box-shadow: 0 10px 30px rgba(0,0,0,0.8);">
                    <p style="font-size:1.3rem; color:#fff; line-height:1.5; text-shadow: 1px 1px 3px rgba(0,0,0,1);">
                        ${pergunta.texto}
                    </p>
                </div>
                <div id="opcoes-quiz" style="display:flex; flex-direction:column; gap:15px;"></div>
            </div>
        `;

        const opcoesContainer = document.getElementById('opcoes-quiz');
        pergunta.opcoes.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'btn-resposta-quiz';
            btn.innerHTML = `<span style="color:#d4af37; font-weight:bold; margin-right:8px;">${opt.numero}.</span> ${opt.texto}`;
            // FIX #3: usa addEventListener em vez de onclick inline (mais seguro)
            btn.addEventListener('click', () => {
                window.verificarResposta(chaveLivro, numeroCapitulo, opt.correta, explicacaoSegura, pontosGanhos);
            });
            opcoesContainer.appendChild(btn);
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }).catch(err => {
        console.error('Erro ao iniciar missão:', err);
        processandoResposta = false;
        _liberarBotoesQuiz();
        alert('Erro ao abrir a missão. Tente novamente.');
    });
};

// ── VERIFICAR RESPOSTA ─────────────────────────────────────
window.verificarResposta = async function (livroChave, capNum, ehCorreta, explicacao, pontosGanhos = 20) {
    if (processandoResposta) return;
    processandoResposta = true;
    _agendarLiberacaoSegura();

    document.querySelectorAll('.btn-resposta-quiz').forEach(btn => { btn.disabled = true; });

    try {
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            processandoResposta = false;
            _liberarBotoesQuiz();
            return;
        }

        if (ehCorreta) {
            try {
                const capituloNumero = Number(capNum);

                const { data: progExistente, error: buscaErro } = await supabase
                    .from('progresso')
                    .select('id, concluido')
                    .eq('uid', user.id)
                    .eq('livro', livroChave)
                    .eq('capitulo', capituloNumero)
                    .maybeSingle();

                if (buscaErro) throw buscaErro;

                const jaConcluido = progExistente?.concluido === true;

                if (jaConcluido) {
                    exibirFeedbackJaRealizado();
                    setTimeout(() => { processandoResposta = false; window.abrirLivro(livroChave); }, 1800);
                    return;
                }

                if (progExistente?.id) {
                    const { error: updateProgErro } = await supabase
                        .from('progresso')
                        .update({ concluido: true, created_at: new Date().toISOString() })
                        .eq('id', progExistente.id);
                    if (updateProgErro) throw updateProgErro;
                } else {
                    const { error: insertProgErro } = await supabase
                        .from('progresso')
                        .insert({
                            uid: user.id,
                            livro: livroChave,
                            capitulo: capituloNumero,
                            concluido: true,
                            created_at: new Date().toISOString()
                        });
                    if (insertProgErro) throw insertProgErro;
                }

                await atualizarPontosDoUsuario(user.id, Number(pontosGanhos || 20));

                const { data: progData, error: progErro } = await supabase
                    .from('progresso')
                    .select('concluido')
                    .eq('uid', user.id)
                    .eq('concluido', true);

                if (progErro) throw progErro;

                const totalCaps = progData?.length || 0;

                await atualizarExpAposLeitura(user.id, totalCaps);
                atualizarBarraExpMenu(totalCaps);

                window.dispatchEvent(new CustomEvent('exp_atualizada', { detail: { totalCaps } }));

                try { await verificarLivroCompleto(user.id, livroChave); } catch (e) { console.warn('Livro completo:', e); }
                try { await verificarBadges(user.id, livroChave); } catch (e) { console.warn('Badges:', e); }

                if (window.confetti) {
                    window.confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#d4af37', '#ffffff', '#ffdf00'] });
                }

                tocarSomFogos();

                const divVitoria = document.createElement('div');
                divVitoria.className = 'vitoria-popup';
                divVitoria.innerHTML = `<h2>✨ PARABÉNS! ✨</h2><p>Você acertou +${Number(pontosGanhos || 20)} pontos</p><div style="font-size:0.9rem; color:#d4af37; margin-top:10px; letter-spacing:2px;">GLÓRIA AO SENHOR JESUS</div>`;
                document.body.appendChild(divVitoria);

                setTimeout(() => { divVitoria.remove(); processandoResposta = false; window.abrirLivro(livroChave); }, 2200);

            } catch (e) {
                console.error('Erro ao processar resposta correta:', e);
                processandoResposta = false;
                _liberarBotoesQuiz();
                alert('Erro ao salvar progresso. Tente novamente.');
            }

        } else {
            const overlay = document.createElement('div');
            overlay.className = 'overlay-erro';
            overlay.style.cssText = `position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); display:flex; flex-direction:column; justify-content:center; align-items:center; z-index:99999; text-align:center; backdrop-filter:blur(8px);`;
            overlay.innerHTML = `<div style="font-size:5rem; margin-bottom:20px;">🛡️</div><div style="color:#d4af37; font-family:'Cinzel', serif; font-size:2.5rem; text-shadow:0 0 15px rgba(212,175,55,0.6);">ERROU!</div><p style="color:#fff; font-family:'Poppins', sans-serif; font-size:1.2rem; margin-top:15px;">Volte e medite no texto para encontrar a verdade...</p>`;
            document.body.appendChild(overlay);

            setTimeout(() => {
                overlay.style.opacity = '0';
                overlay.style.transition = 'opacity 0.8s';
                setTimeout(() => { overlay.remove(); processandoResposta = false; window.exibirCapitulo(livroChave, capNum); window.scrollTo({ top: 0, behavior: 'smooth' }); }, 800);
            }, 3000);
        }

    } catch (erroGeral) {
        console.error('Erro geral em verificarResposta:', erroGeral);
        processandoResposta = false;
        _liberarBotoesQuiz();
        alert('Erro inesperado. Tente novamente.');
    }
};

function tocarSomFogos() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const duration = 1.8;
        const buf = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
        const noise = ctx.createBufferSource();
        noise.buffer = buf;
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1200, ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(10, ctx.currentTime + duration);
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.4, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        noise.start();
        noise.stop(ctx.currentTime + duration);
    } catch (_) {}
}

function exibirFeedbackJaRealizado() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay-ja-realizado';
    overlay.style.cssText = `position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); display:flex; justify-content:center; align-items:center; z-index:10000; backdrop-filter:blur(10px);`;
    overlay.innerHTML = `<div style="width:320px; padding:30px; text-align:center; background:#12120f; border:2px solid #3d2b1f; color:#8b7355; font-family:'Cinzel'; border-radius:12px;"><div style="font-size:3rem; opacity:0.5;">📜</div><h3>JORNADA JÁ REALIZADA</h3><p>Você já recebeu os louros desta vitória anteriormente.</p><button id="btn-continuar-ja-realizado" style="background:#3d2b1f; color:#d4af37; border:none; padding:10px 20px; cursor:pointer; font-family:'Cinzel'; border-radius:6px;">CONTINUAR</button></div>`;
    document.body.appendChild(overlay);
    const btn = overlay.querySelector('#btn-continuar-ja-realizado');
    if (btn) btn.addEventListener('click', () => overlay.remove());
}

function exibirAvisoMeditacao() {
    const aviso = document.createElement('div');
    aviso.style.cssText = `position:fixed; top:50%; left:50%; transform:translate(-50%,-50%); background:rgba(0,0,0,0.95); border:2px solid #d4af37; padding:30px; border-radius:15px; z-index:20000; text-align:center; box-shadow:0 0 30px #000; font-family:'Cinzel', serif;`;
    aviso.innerHTML = `<div style="font-size:3rem; margin-bottom:15px;">🕊️</div><h3 style="color:#d4af37; margin:0;">DEVAGAR, HERÓI!</h3><p style="color:#fff; font-size:1.1rem; margin-top:10px;">"Medite no texto amado e Jesus abençoa sua mente!"</p><div style="font-size:0.8rem; color:#888; margin-top:10px;">A sabedoria vale mais que os pontos.</div>`;
    document.body.appendChild(aviso);
    setTimeout(() => { aviso.style.opacity = '0'; aviso.style.transition = 'opacity 0.5s'; setTimeout(() => aviso.remove(), 500); }, 2500);
}

supabase.auth.onAuthStateChange(async (_event, session) => {
    if (!session?.user) {
        saldoAnterior = null;
        if (_auditoriaChannel) { supabase.removeChannel(_auditoriaChannel); _auditoriaChannel = null; }
        _auditoriaUid = null;
        return;
    }
    const uid = session.user.id;
    if (_auditoriaUid === uid && _auditoriaChannel) return;
    try {
        const { data: userData } = await supabase.from('users').select('points').eq('uid', uid).single();
        saldoAnterior = userData?.points || 0;
    } catch (e) { saldoAnterior = 0; }
    iniciarAuditoriaPontuacao(uid);
});

console.log('✅ Sistema de Jogo carregado!');