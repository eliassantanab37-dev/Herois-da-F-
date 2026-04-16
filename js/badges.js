// js/badges.js
// ═══════════════════════════════════════════════════════════
// SISTEMA DE TROFÉUS ÉPICO — Migrado para Supabase
// ═══════════════════════════════════════════════════════════

import { supabase } from './config.js';

// ── TOTAL DE CAPÍTULOS POR LIVRO ───────────────────────────
export const TOTAL_CAPS_LIVRO = {
    genesis: 50, exodo: 40, levitico: 27, numeros: 36, deuteronomio: 34,
    josue: 24, juizes: 21, rute: 4, primeiro_samuel: 31, segundo_samuel: 24,
    primeiro_reis: 22, segundo_reis: 25, primeiro_cronicas: 29, segundo_cronicas: 36,
    esdras: 10, neemias: 13, ester: 10, jo: 42, salmos: 150, proverbios: 31,
    eclesiastes: 12, cantares: 8, isaias: 66, jeremias: 52, lamentacoes: 5,
    ezequiel: 48, daniel: 12, oseias: 14, joel: 3, amos: 9, obadias: 1,
    jonas: 4, miqueias: 7, naum: 3, habacuque: 3, sofonias: 3, ageu: 2,
    zacarias: 14, malaquias: 4, mateus: 28, marcos: 16, lucas: 24, joao: 21,
    atos: 28, romanos: 16, primeiro_corintios: 16, segundo_corintios: 13,
    galatas: 6, efesios: 6, filipenses: 4, colossenses: 4,
    primeiro_tessalonicenses: 5, segunda_tessalonicenses: 3,
    primeira_timoteo: 6, segunda_timoteo: 4, tito: 3, filemon: 1,
    hebreus: 13, tiago: 5, primeira_pedro: 5, segunda_pedro: 3,
    primeira_joao: 5, segunda_joao: 1, terceira_joao: 1, judas: 1, apocalipse: 22
};

export const LIVROS_SISTEMA = Object.keys(TOTAL_CAPS_LIVRO);

const NOMES_LIVROS = {
    genesis: 'Gênesis', exodo: 'Êxodo', levitico: 'Levítico', numeros: 'Números',
    deuteronomio: 'Deuteronômio', josue: 'Josué', juizes: 'Juízes', rute: 'Rute',
    primeiro_samuel: '1º Samuel', segundo_samuel: '2º Samuel',
    primeiro_reis: '1º Reis', segundo_reis: '2º Reis',
    primeiro_cronicas: '1º Crônicas', segundo_cronicas: '2º Crônicas',
    esdras: 'Esdras', neemias: 'Neemias', ester: 'Ester', jo: 'Jó',
    salmos: 'Salmos', proverbios: 'Provérbios', eclesiastes: 'Eclesiastes',
    cantares: 'Cantares', isaias: 'Isaías', jeremias: 'Jeremias',
    lamentacoes: 'Lamentações', ezequiel: 'Ezequiel', daniel: 'Daniel',
    oseias: 'Oséias', joel: 'Joel', amos: 'Amós', obadias: 'Obadias',
    jonas: 'Jonas', miqueias: 'Miquéias', naum: 'Naum', habacuque: 'Habacuque',
    sofonias: 'Sofonias', ageu: 'Ageu', zacarias: 'Zacarias', malaquias: 'Malaquias',
    mateus: 'Mateus', marcos: 'Marcos', lucas: 'Lucas', joao: 'João',
    atos: 'Atos', romanos: 'Romanos', primeiro_corintios: '1ª Coríntios',
    segundo_corintios: '2ª Coríntios', galatas: 'Gálatas', efesios: 'Efésios',
    filipenses: 'Filipenses', colossenses: 'Colossenses',
    primeiro_tessalonicenses: '1ª Tessalonicenses', segunda_tessalonicenses: '2ª Tessalonicenses',
    primeira_timoteo: '1ª Timóteo', segunda_timoteo: '2ª Timóteo',
    tito: 'Tito', filemon: 'Filemon', hebreus: 'Hebreus', tiago: 'Tiago',
    primeira_pedro: '1ª Pedro', segunda_pedro: '2ª Pedro',
    primeira_joao: '1ª João', segunda_joao: '2ª João', terceira_joao: '3ª João',
    judas: 'Judas', apocalipse: 'Apocalipse'
};

// ── TROFÉUS BASE ───────────────────────────────────────────
const BADGES_BASE = {
    primeiro_passo:       { nome: 'Primeiro Passo',       icone: '📖', descricao: 'Complete sua primeira leitura',             pontos: 50,   categoria: 'iniciacao',  condicao: (s) => s.leituras >= 1 },
    dez_capitulos:        { nome: 'Dez Capítulos',        icone: '📚', descricao: 'Complete 10 capítulos',                     pontos: 50,   categoria: 'exploracao', condicao: (s) => s.leituras >= 10 },
    cinquenta_capitulos:  { nome: 'Cinquenta Capítulos',  icone: '📜', descricao: 'Complete 50 capítulos',                     pontos: 50,   categoria: 'exploracao', condicao: (s) => s.leituras >= 50 },
    cem_capitulos:        { nome: 'Cem Capítulos',        icone: '🗺️', descricao: 'Complete 100 capítulos',                    pontos: 50,   categoria: 'exploracao', condicao: (s) => s.leituras >= 100 },
    duzentos_capitulos:   { nome: 'Duzentos Capítulos',   icone: '🌟', descricao: 'Complete 200 capítulos',                    pontos: 100,  categoria: 'exploracao', condicao: (s) => s.leituras >= 200 },
    quinhentos_capitulos: { nome: 'Quinhentos Capítulos', icone: '⚡', descricao: 'Complete 500 capítulos',                    pontos: 200,  categoria: 'exploracao', condicao: (s) => s.leituras >= 500 },
    explorador:           { nome: 'Explorador',           icone: '🔭', descricao: 'Leia ao menos 1 cap de cada livro',         pontos: 50,   categoria: 'exploracao', condicao: (s) => s.livrosLidos >= LIVROS_SISTEMA.length },
    cem_pontos:           { nome: 'Centímetro',           icone: '⭐', descricao: 'Acumule 100 pontos',                        pontos: 50,   categoria: 'pontuacao',  condicao: (s) => s.pontos >= 100 },
    mil_pontos:           { nome: 'Quilômetro',           icone: '💫', descricao: 'Acumule 1000 pontos',                       pontos: 50,   categoria: 'pontuacao',  condicao: (s) => s.pontos >= 1000 },
    cinco_mil_pontos:     { nome: 'Milênio',              icone: '✨', descricao: 'Acumule 5000 pontos',                       pontos: 50,   categoria: 'pontuacao',  condicao: (s) => s.pontos >= 5000 },
    dez_mil_pontos:       { nome: 'Legião de Ouro',       icone: '🌙', descricao: 'Acumule 10000 pontos',                      pontos: 100,  categoria: 'pontuacao',  condicao: (s) => s.pontos >= 10000 },
    primeiro_amigo:       { nome: 'Companhia',            icone: '👤', descricao: 'Adicione seu primeiro amigo',               pontos: 50,   categoria: 'social',     condicao: (s) => s.amigos >= 1 },
    cinco_amigos:         { nome: 'Comunidade',           icone: '👥', descricao: 'Tenha 5 amigos',                            pontos: 50,   categoria: 'social',     condicao: (s) => s.amigos >= 5 },
    nivel_5:              { nome: 'Herói Ascendente',     icone: '🏆', descricao: 'Alcance o nível 5',                         pontos: 50,   categoria: 'niveis',     condicao: (s) => s.nivel >= 5 },
    nivel_10:             { nome: 'Patriarca Espiritual', icone: '👑', descricao: 'Alcance o nível 10',                        pontos: 50,   categoria: 'niveis',     condicao: (s) => s.nivel >= 10 },
    nivel_25:             { nome: 'Ancião da Fé',         icone: '🕊️', descricao: 'Alcance o nível 25',                        pontos: 100,  categoria: 'niveis',     condicao: (s) => s.nivel >= 25 },
    nivel_50:             { nome: 'Herói Lendário',       icone: '⚔️', descricao: 'Alcance o nível 50',                        pontos: 200,  categoria: 'niveis',     condicao: (s) => s.nivel >= 50 },
    biblia_completa:      { nome: 'Herói da Fé Eterno',   icone: '✝️', descricao: 'Leia todos os livros completos',            pontos: 1000, categoria: 'especial',   condicao: (s) => s.livrosCompletos >= LIVROS_SISTEMA.length },
};

// ── TROFÉUS POR LIVRO ──────────────────────────────────────
const BADGES_LIVROS = {};
for (const chave of LIVROS_SISTEMA) {
    BADGES_LIVROS[`livro_${chave}`] = {
        nome:      `${NOMES_LIVROS[chave]} Completo`,
        icone:     '📕',
        descricao: `Leia TODOS os ${TOTAL_CAPS_LIVRO[chave]} capítulos de ${NOMES_LIVROS[chave]}`,
        pontos:    200,
        categoria: 'livros',
        livroChave: chave,
        condicao: (s) => (s.livrosCompletos_map || {})[chave] === true
    };
}

export const BADGES = { ...BADGES_BASE, ...BADGES_LIVROS };

// ── EXP E LEVEL ────────────────────────────────────────────
export function calcularExpELevel(totalCapLidos) {
    const nivel    = Math.floor(totalCapLidos / 10) + 1;
    const expAtual = (totalCapLidos % 10) * 10;
    return { nivel, expAtual };
}

export async function atualizarExpAposLeitura(uid, totalCapitulosLidos) {
    const { nivel, expAtual } = calcularExpELevel(totalCapitulosLidos);

    const { data: userData } = await supabase.from('users').select('nivel').eq('uid', uid).single();
    const nivelAnterior = userData?.nivel || 1;

    await supabase.from('users').update({ nivel, expAtual }).eq('uid', uid);

    if (nivel > nivelAnterior) {
        await exibirAnimacaoLevelUp(nivel);
    }
}

// ── VERIFICAR LIVRO COMPLETO ───────────────────────────────
export async function verificarLivroCompleto(uid, livroChave) {
    const totalReal = TOTAL_CAPS_LIVRO[livroChave];
    if (!totalReal) return false;

    const { data: caps, error } = await supabase
        .from('progresso')
        .select('capitulo')
        .eq('uid', uid)
        .eq('livro', livroChave)
        .eq('concluido', true);

    if (error) throw error;

    const lidosUnicos = new Set((caps || []).map(c => Number(c.capitulo)).filter(Boolean)).size;
    if (lidosUnicos >= totalReal) {
        await verificarBadges(uid, livroChave);
        return true;
    }
    return false;
}

// ── VERIFICAR E ENTREGAR TROFÉUS ───────────────────────────
export async function verificarBadges(uid, livroRecem_completado = null) {
    if (!uid) {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;
        uid = user.id;
    }

    try {
        const [{ data: userData }, { data: amigosData }, { data: progData }] = await Promise.all([
            supabase.from('users').select('*').eq('uid', uid).single(),
            supabase.from('friends').select('friend_uid').eq('uid', uid),
            supabase.from('progresso').select('livro, concluido').eq('uid', uid)
        ]);

        const badgesAtuais = userData?.badges || {};
        const progresso    = {};
        (progData || []).forEach(r => {
            if (!progresso[r.livro]) progresso[r.livro] = [];
            progresso[r.livro].push(r);
        });

        const livrosCompletos_map = {};
        let livrosCompletos = 0;
        let totalCapLidos   = 0;

        for (const livroChave of LIVROS_SISTEMA) {
            const caps  = progresso[livroChave] || [];
            const lidos = caps.filter(c => c.concluido).length;
            totalCapLidos += lidos;
            const completo = lidos >= (TOTAL_CAPS_LIVRO[livroChave] || Infinity);
            livrosCompletos_map[livroChave] = completo;
            if (completo) livrosCompletos++;
        }

        const { nivel } = calcularExpELevel(totalCapLidos);
        const amigos    = amigosData?.length || 0;

        const stats = {
            pontos:    userData?.points || 0,
            nivel,
            leituras:  totalCapLidos,
            livrosLidos: Object.keys(progresso).filter(l => progresso[l].some(c => c.concluido)).length,
            livrosCompletos,
            livrosCompletos_map,
            amigos
        };

        const badgesParaChegar = [...Object.entries(BADGES_BASE)];
        if (livroRecem_completado) {
            const badgeKey = `livro_${livroRecem_completado}`;
            if (BADGES_LIVROS[badgeKey]) badgesParaChegar.push([badgeKey, BADGES_LIVROS[badgeKey]]);
        }

        const novos = badgesParaChegar.filter(([key, badge]) => !badgesAtuais[key] && badge.condicao(stats));
        if (novos.length === 0) return;

        const totalPontos = novos.reduce((acc, [, b]) => acc + b.pontos, 0);
        const novosBadges = { ...badgesAtuais };
        for (const [key] of novos) {
            novosBadges[key] = { desbloqueado: true, data: Date.now() };
        }

        await supabase.from('users').update({
            badges: novosBadges,
            points: (userData?.points || 0) + totalPontos
        }).eq('uid', uid);

        for (const [key, badge] of novos) {
            await exibirTrofeuImediato({ badgeKey: key, ...badge });
        }

        // O canal realtime do index.html já cuida de atualizar pontos, nível,
        // header e barra de EXP automaticamente após o update no banco.
        // Dispara evento extra para garantir atualização imediata da EXP local.
        window.dispatchEvent(new CustomEvent('pontos_atualizados', { detail: { uid } }));
    } catch (e) {
        console.error('Erro verificarBadges:', e);
    }
}

// ── SOM DE FOGOS ───────────────────────────────────────────
function tocarSomFogos() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        function disparo(delay, freq, dur) {
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.frequency.setValueAtTime(freq * 0.3, ctx.currentTime + delay);
            osc.frequency.exponentialRampToValueAtTime(freq * 2.5, ctx.currentTime + delay + 0.05);
            gain.gain.setValueAtTime(0.3, ctx.currentTime + delay);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.12);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(ctx.currentTime + delay); osc.stop(ctx.currentTime + delay + 0.12);
            const bufSize = ctx.sampleRate * dur;
            const buf  = ctx.createBuffer(1, bufSize, ctx.sampleRate);
            const d    = buf.getChannelData(0);
            for (let i = 0; i < bufSize; i++) d[i] = Math.random() * 2 - 1;
            const noise = ctx.createBufferSource(); noise.buffer = buf;
            const filt = ctx.createBiquadFilter(); filt.type = 'bandpass'; filt.frequency.value = 600 + Math.random() * 1400; filt.Q.value = 0.4;
            const gn = ctx.createGain();
            gn.gain.setValueAtTime(0.5, ctx.currentTime + delay + 0.15);
            gn.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.15 + dur);
            noise.connect(filt); filt.connect(gn); gn.connect(ctx.destination);
            noise.start(ctx.currentTime + delay + 0.15); noise.stop(ctx.currentTime + delay + 0.15 + dur);
        }
        disparo(0.0, 440, 0.6); disparo(0.3, 550, 0.5); disparo(0.55, 660, 0.7);
        disparo(0.8, 330, 0.6); disparo(1.1, 770, 0.5); disparo(1.4, 500, 0.8);
    } catch(e) { /* áudio não disponível */ }
}

// ── SOM DE LEVEL UP ────────────────────────────────────────
function tocarSomLevelUp() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        function nota(freq, inicio, dur, vol = 0.3, tipo = 'square') {
            const osc = ctx.createOscillator(); const gain = ctx.createGain();
            osc.type = tipo; osc.frequency.value = freq;
            gain.gain.setValueAtTime(0, ctx.currentTime + inicio);
            gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + inicio + 0.02);
            gain.gain.setValueAtTime(vol, ctx.currentTime + inicio + dur - 0.05);
            gain.gain.linearRampToValueAtTime(0, ctx.currentTime + inicio + dur);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(ctx.currentTime + inicio); osc.stop(ctx.currentTime + inicio + dur);
        }
        nota(261.6, 0.0, 0.12); nota(293.7, 0.13, 0.12); nota(329.6, 0.26, 0.12);
        nota(392.0, 0.39, 0.12); nota(523.2, 0.52, 0.38); nota(659.2, 0.52, 0.38, 0.15);
        nota(783.9, 0.52, 0.38, 0.10); nota(1400, 0.52, 0.4, 0.06, 'sine');
    } catch(e) { /* áudio não disponível */ }
}

// ── EXIBIR TROFÉU ──────────────────────────────────────────
function exibirTrofeuImediato(item) {
    return new Promise(resolve => {
        document.getElementById(`trofeu-overlay-${item.badgeKey}`)?.remove();
        tocarSomFogos();
        if (window.confetti) {
            setTimeout(() => window.confetti({ particleCount: 80,  spread: 60,  origin: { y: 0.5 }, colors: ['#d4af37','#fff','#ffdf00'] }), 100);
            setTimeout(() => window.confetti({ particleCount: 60,  angle: 60,   spread: 55, origin: { x: 0, y: 0.6 }, colors: ['#d4af37','#ffdf00'] }), 400);
            setTimeout(() => window.confetti({ particleCount: 60,  angle: 120,  spread: 55, origin: { x: 1, y: 0.6 }, colors: ['#d4af37','#ffdf00'] }), 700);
        }
        const overlay = document.createElement('div');
        overlay.id = `trofeu-overlay-${item.badgeKey}`;
        overlay.style.cssText = `position:fixed; inset:0; background:rgba(0,0,0,0.85); display:flex; align-items:center; justify-content:center; z-index:99999; backdrop-filter:blur(8px); animation:fadeInOverlay 0.5s ease;`;
        overlay.innerHTML = `
            <div id="trofeu-card-${item.badgeKey}" style="background:linear-gradient(135deg,#1a1200,#2d2400); border:3px solid #d4af37; border-radius:20px; padding:40px 50px; text-align:center; max-width:380px; width:90%; cursor:pointer; animation:trofeuEntrada 0.6s cubic-bezier(0.17,0.89,0.32,1.28) forwards, brilhoPulsante 2s 0.6s infinite; box-shadow:0 0 40px rgba(212,175,55,0.5),0 0 80px rgba(212,175,55,0.2);">
                <div style="font-size:5rem; margin-bottom:15px; animation:floatIcon 2s ease-in-out infinite;">${item.icone}</div>
                <div style="color:#d4af37; font-family:'Cinzel'; font-size:0.8rem; letter-spacing:3px; margin-bottom:8px;">TROFÉU DESBLOQUEADO!</div>
                <h2 style="color:white; font-family:'Cinzel'; margin:0 0 10px 0; font-size:1.4rem;">${item.nome}</h2>
                <div style="background:linear-gradient(90deg,#d4af37,#ffdf00,#d4af37); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; font-size:2rem; font-weight:900; font-family:'Cinzel'; animation:shimmer 1.5s linear infinite; margin:15px 0;">+${item.pontos} pts</div>
                <div style="color:#888; font-size:0.8rem; margin-top:15px;">👆 Toque para continuar</div>
            </div>`;
        document.body.appendChild(overlay);
        overlay.onclick = () => {
            const card = document.getElementById(`trofeu-card-${item.badgeKey}`);
            if (card) { card.style.animation = 'trofeuSaida 0.4s ease forwards'; setTimeout(() => { overlay.remove(); resolve(); }, 450); }
            else { overlay.remove(); resolve(); }
        };
        setTimeout(() => { overlay?.remove(); resolve(); }, 8000);
    });
}

// ── ANIMAÇÃO LEVEL UP ──────────────────────────────────────
function calcularNomePorNivel(nivel) {
    if (nivel < 5)  return 'Servo Fiel';
    if (nivel < 10) return 'Levita Louvador';
    if (nivel < 15) return 'Soldado de Cristo';
    if (nivel < 20) return 'Semeador da Palavra';
    if (nivel < 25) return 'Missionário(a)';
    if (nivel < 30) return 'Guarda de Sião';
    if (nivel < 35) return 'Vencedor em Cristo';
    if (nivel < 40) return 'Ungido por Deus';
    if (nivel < 45) return 'Fiel Adorador';
    if (nivel < 50) return 'Embaixador do Reino';
    if (nivel < 55) return 'Apóstolo';
    if (nivel < 60) return 'Profeta de Deus';
    if (nivel < 65) return 'Guerreiro de Gileade';
    if (nivel < 70) return 'Herdeiro do Eterno';
    return 'Herói da Fé Eterno';
}

function exibirAnimacaoLevelUp(nivel) {
    return new Promise(resolve => {
        tocarSomLevelUp();
        if (window.confetti) {
            setTimeout(() => window.confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 }, colors: ['#d4af37','#fff','#ffdf00','#4a90e2'] }), 200);
            setTimeout(() => window.confetti({ particleCount: 100, angle: 75,  spread: 80, origin: { x: 0.1, y: 0.4 }, colors: ['#d4af37','#ffdf00'] }), 600);
            setTimeout(() => window.confetti({ particleCount: 100, angle: 105, spread: 80, origin: { x: 0.9, y: 0.4 }, colors: ['#d4af37','#ffdf00'] }), 900);
        }
        const nomeNivel = calcularNomePorNivel(nivel);
        const overlay   = document.createElement('div');
        overlay.style.cssText = `position:fixed; inset:0; background:rgba(0,0,0,0.92); display:flex; align-items:center; justify-content:center; z-index:99998; backdrop-filter:blur(12px); animation:fadeInOverlay 0.4s ease; cursor:pointer;`;
        overlay.innerHTML = `
            <div style="text-align:center; animation:trofeuEntrada 0.7s cubic-bezier(0.17,0.89,0.32,1.28);">
                <div style="font-size:4rem; margin-bottom:10px; animation:floatIcon 2s ease-in-out infinite;">⚡</div>
                <div style="color:#888; font-family:'Cinzel'; font-size:0.85rem; letter-spacing:4px; margin-bottom:5px;">SUBIU DE NÍVEL!</div>
                <div style="font-family:'Cinzel'; font-size:4.5rem; font-weight:900; background:linear-gradient(135deg,#d4af37,#fff,#ffdf00,#d4af37); -webkit-background-clip:text; -webkit-text-fill-color:transparent; animation:shimmer 1.5s linear infinite; margin:8px 0;">NÍVEL ${nivel}</div>
                <div style="color:#d4af37; font-family:'Cinzel'; font-size:1.15rem; font-weight:bold; letter-spacing:2px; margin-top:5px; text-shadow:0 0 15px rgba(212,175,55,0.8);">${nomeNivel}</div>
                <div style="width:180px; height:4px; margin:20px auto 0; background:linear-gradient(90deg,transparent,#d4af37,transparent); border-radius:2px;"></div>
                <div style="color:#555; font-size:0.82rem; margin-top:18px; font-family:'Poppins';">Toque para continuar</div>
            </div>`;
        document.body.appendChild(overlay);
        overlay.onclick = () => { overlay.remove(); resolve(); };
        setTimeout(() => { overlay?.remove(); resolve(); }, 7000);
    });
}

// ── GALERIA DE TROFÉUS ─────────────────────────────────────
window.mostrarBadges = async function () {
    const bibleText   = document.getElementById('bible-text');
    const readingView = document.getElementById('reading-view');
    const { data: { user } } = await supabase.auth.getUser();
    if (!user || !bibleText) return;

    if (readingView) readingView.style.display = 'block';
    bibleText.innerHTML = '<div style="text-align:center; padding:60px; color:#d4af37; font-family:Cinzel;">Carregando troféus...</div>';

    const { data: userData } = await supabase.from('users').select('badges').eq('uid', user.id).single();
    const badgesDesbloqueados = userData?.badges || {};
    const totalDesbloqueados  = Object.keys(badgesDesbloqueados).length;
    const totalBadges         = Object.keys(BADGES).length;

    const categorias = {
        especial:   { nome: '✝️ Especial',         badges: [] },
        livros:     { nome: '📕 Livros Completos',  badges: [] },
        iniciacao:  { nome: '🚀 Iniciação',          badges: [] },
        exploracao: { nome: '🗺️ Exploração',         badges: [] },
        pontuacao:  { nome: '⭐ Pontuação',          badges: [] },
        social:     { nome: '👥 Social',             badges: [] },
        niveis:     { nome: '👑 Níveis',             badges: [] },
    };

    for (const [key, badge] of Object.entries(BADGES)) {
        const cat = categorias[badge.categoria];
        if (cat) cat.badges.push({ ...badge, key, desbloqueado: !!badgesDesbloqueados[key] });
    }

    let html = `
        <div style="max-width:960px; margin:0 auto; padding:20px 15px 60px;">
            <div style="text-align:center; margin-bottom:35px;">
                <h2 style="color:#d4af37; font-family:'Cinzel'; font-size:2rem; margin:0;">🏆 SALA DE TROFÉUS</h2>
                <p style="color:#888; margin:10px 0 0 0;">${totalDesbloqueados} / ${totalBadges} desbloqueados</p>
                <div style="max-width:400px; margin:15px auto 0; background:rgba(255,255,255,0.1); border-radius:8px; height:10px; overflow:hidden;">
                    <div style="background:linear-gradient(90deg,#d4af37,#ffdf00); height:100%; width:${Math.round(totalDesbloqueados / totalBadges * 100)}%; transition:width 0.5s;"></div>
                </div>
            </div>`;

    for (const [, cat] of Object.entries(categorias)) {
        if (cat.badges.length === 0) continue;
        html += `<h3 style="color:#d4af37; font-family:'Cinzel'; border-left:4px solid #d4af37; padding-left:12px; margin:30px 0 15px;">${cat.nome}</h3>
            <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(130px,1fr)); gap:12px; margin-bottom:10px;">`;
        for (const badge of cat.badges) {
            html += `<div title="${badge.descricao}" style="background:${badge.desbloqueado ? 'rgba(212,175,55,0.15)' : 'rgba(0,0,0,0.5)'}; border:2px solid ${badge.desbloqueado ? '#d4af37' : '#222'}; border-radius:12px; padding:14px 10px; text-align:center; opacity:${badge.desbloqueado ? '1' : '0.4'}; transition:transform 0.2s; ${badge.desbloqueado ? 'box-shadow:0 0 12px rgba(212,175,55,0.25);' : ''}" onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'">
                <div style="font-size:2.4rem; margin-bottom:8px; filter:${badge.desbloqueado ? 'none' : 'grayscale(100%)'}">${badge.icone}</div>
                <p style="color:${badge.desbloqueado ? 'white' : '#666'}; font-weight:bold; font-size:0.78rem; margin:0; text-transform:uppercase; line-height:1.2;">${badge.nome}</p>
                <p style="color:#d4af37; font-size:0.75rem; margin:6px 0 0; font-weight:700;">${badge.desbloqueado ? '✅ ' : '🔒 '}+${badge.pontos} pts</p>
                ${!badge.desbloqueado ? `<p style="color:#444; font-size:0.65rem; margin:4px 0 0; line-height:1.3;">${badge.descricao}</p>` : ''}
            </div>`;
        }
        html += `</div>`;
    }

    html += `<div style="text-align:center; margin-top:40px;"><button onclick="window.carregarListaLivros()" style="background:#d4af37; color:black; border:none; padding:12px 35px; border-radius:8px; font-weight:bold; cursor:pointer; font-family:'Cinzel';">← Voltar à Bíblia</button></div></div>`;
    bibleText.innerHTML = html;
};

// ── BARRA DE EXP NO MENU ───────────────────────────────────
export function atualizarBarraExpMenu(totalCapLidos) {
    const { nivel, expAtual } = calcularExpELevel(totalCapLidos);
    const expBar   = document.getElementById('exp-bar-fill');
    const expTexto = document.getElementById('exp-texto');
    const nivelNum = document.getElementById('nivel-numero');
    if (expBar)   expBar.style.width   = `${expAtual}%`;
    if (expTexto) expTexto.textContent = `${expAtual}%`;
    if (nivelNum) nivelNum.textContent = nivel;
}

// ── CSS DAS ANIMAÇÕES ──────────────────────────────────────
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOverlay  { from{opacity:0} to{opacity:1} }
    @keyframes trofeuEntrada  { from{transform:scale(0.4) rotate(-8deg);opacity:0} to{transform:scale(1) rotate(0);opacity:1} }
    @keyframes trofeuSaida    { to{transform:scale(1.3);opacity:0} }
    @keyframes brilhoPulsante { 0%,100%{box-shadow:0 0 30px rgba(212,175,55,0.4),0 0 60px rgba(212,175,55,0.1)} 50%{box-shadow:0 0 60px rgba(212,175,55,0.8),0 0 100px rgba(212,175,55,0.3)} }
    @keyframes floatIcon      { 0%,100%{transform:translateY(0) rotate(0)} 50%{transform:translateY(-10px) rotate(5deg)} }
    @keyframes shimmer        { 0%{background-position:0% center} 100%{background-position:200% center} }
`;
document.head.appendChild(style);

console.log('✅ Sistema de Troféus carregado!');