// js/challenges.js — Migrado para Supabase
// ═══════════════════════════════════════════════════════════

import { supabase } from './config.js';

const DESAFIOS = {
    semana_1: { id: 'semana_1', titulo: 'Iniciante Bíblico',    descricao: 'Complete 5 leituras nesta semana',              meta: 5,   tipo: 'leituras',              recompensa: 50,  icone: '📚' },
    semana_2: { id: 'semana_2', titulo: 'Explorador de Livros', descricao: 'Leia capítulos de 4 livros diferentes',         meta: 4,   tipo: 'livros_diferentes',     recompensa: 75,  icone: '🗺️' },
    semana_3: { id: 'semana_3', titulo: 'Leitor Dedicado',      descricao: 'Leia todos os dias durante 7 dias',             meta: 7,   tipo: 'dias_consecutivos',     recompensa: 100, icone: '🔥' },
    semana_4: { id: 'semana_4', titulo: 'Herói Social',         descricao: 'Tenha pelo menos 3 amigos na plataforma',       meta: 3,   tipo: 'leituras_com_amigos',   recompensa: 60,  icone: '👥' },
    semana_5: { id: 'semana_5', titulo: 'Conquistador de Pontos', descricao: 'Acumule 100 pontos nesta semana',             meta: 100, tipo: 'pontos',                recompensa: 50,  icone: '⭐' },
};

window.mostrarDesafios = async function () {
    const bibleText   = document.getElementById('bible-text');
    const readingView = document.getElementById('reading-view');
    const { data: { user } } = await supabase.auth.getUser();

    if (!user)      { alert('Você precisa estar logado!'); return; }
    if (!bibleText) return;

    if (readingView) readingView.style.display = 'block';
    bibleText.innerHTML = '<div style="text-align:center; padding:60px; color:#d4af37; font-family:Cinzel;">Carregando desafios...</div>';

    const { data: desafioData } = await supabase.from('desafios').select('*').eq('uid', user.id);
    const progresso = {};
    (desafioData || []).forEach(d => { progresso[d.desafio_id] = d; });

    let html = `
        <div style="max-width:800px; margin:0 auto; padding:20px;">
            <div style="text-align:center; margin-bottom:40px;">
                <h2 style="color:#d4af37; font-family:'Cinzel'; font-size:2rem; margin:0;">🎯 DESAFIOS SEMANAIS</h2>
                <p style="color:#888; margin:10px 0 0 0;">Complete desafios e ganhe pontos extras!</p>
            </div>
            <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:20px;">`;

    for (const [key, desafio] of Object.entries(DESAFIOS)) {
        const prog       = progresso[key] || { progresso: 0, concluido: false };
        const percentual = Math.min(100, (prog.progresso / desafio.meta) * 100);
        const concluido  = prog.concluido === true;

        html += `
            <div style="background:linear-gradient(135deg,#1a1a1a 0%,#0d0d0d 100%); border:2px solid ${concluido ? '#2ecc71' : '#d4af37'}; border-radius:12px; padding:20px; position:relative; overflow:hidden;">
                <div style="position:absolute; top:0; left:0; height:100%; width:${percentual}%; background:rgba(212,175,55,0.1);"></div>
                <div style="position:relative; z-index:1;">
                    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:15px;">
                        <span style="font-size:2rem;">${desafio.icone}</span>
                        ${concluido ? '<span style="color:#2ecc71; font-weight:bold;">✓ COMPLETO</span>' : ''}
                    </div>
                    <h3 style="color:white; margin:0 0 8px 0; font-size:1.1rem;">${desafio.titulo}</h3>
                    <p style="color:#888; margin:0 0 15px 0; font-size:0.9rem;">${desafio.descricao}</p>
                    <div style="background:rgba(255,255,255,0.1); border-radius:8px; height:8px; margin-bottom:10px; overflow:hidden;">
                        <div style="background:linear-gradient(90deg,#d4af37,#ffff00); height:100%; width:${percentual}%;"></div>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="color:#d4af37; font-weight:bold; font-size:0.9rem;">${Math.min(prog.progresso, desafio.meta)} / ${desafio.meta}</span>
                        <span style="color:#2ecc71; font-weight:bold;">+${desafio.recompensa} pts</span>
                    </div>
                </div>
            </div>`;
    }

    html += `
            </div>
            <div style="text-align:center; margin-top:40px;">
                <button onclick="window.carregarListaLivros()" style="background:#d4af37; color:black; border:none; padding:12px 30px; border-radius:8px; font-weight:bold; cursor:pointer; transition:all 0.3s;" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 0 20px rgba(212,175,55,0.5)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                    ← Voltar à Bíblia
                </button>
            </div>
        </div>`;

    bibleText.innerHTML = html;
};

export async function atualizarProgressoDesafio(desafioId, valor = 1) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    try {
        const desafio = DESAFIOS[desafioId];
        if (!desafio) return;

        const { data: atual } = await supabase.from('desafios').select('*').eq('uid', user.id).eq('desafio_id', desafioId).single();
        if (atual?.concluido === true) return;

        const novoProgresso = (atual?.progresso || 0) + valor;
        const concluido     = novoProgresso >= desafio.meta;

        await supabase.from('desafios').upsert({
            uid: user.id, desafio_id: desafioId,
            progresso: novoProgresso, concluido,
            updated_at: new Date().toISOString()
        }, { onConflict: 'uid,desafio_id' });

        if (concluido) {
            const { data: u } = await supabase.from('users').select('points').eq('uid', user.id).single();
            const pontosAtualizados = (u?.points || 0) + desafio.recompensa;
            const agoraIso = new Date().toISOString();

            await supabase.from('users').update({
                points: pontosAtualizados,
                lastUpdate: agoraIso,
                lastupdate: agoraIso
            }).eq('uid', user.id);

            window.dispatchEvent(new CustomEvent('pontos_atualizados', {
                detail: { uid: user.id, pontos: pontosAtualizados }
            }));

            _dispararFogos();
            _mostrarMensagem(`🎉 Desafio completo! +${desafio.recompensa} pts!`);
        }
    } catch (erro) {
        console.error('Erro ao atualizar desafio:', erro);
    }
}

function _dispararFogos() {
    if (!window.confetti) return;
    const end = Date.now() + 2000;
    (function frame() {
        window.confetti({ particleCount: 5, angle: 60,  spread: 55, origin: { x: 0 }, colors: ['#d4af37','#ffff00','#fff'] });
        window.confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#d4af37','#ffff00','#fff'] });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());
}

function _mostrarMensagem(texto) {
    const msg = document.createElement('div');
    msg.style.cssText = `position:fixed; top:20px; left:50%; transform:translateX(-50%); background:#2ecc71; color:white; padding:15px 25px; border-radius:8px; z-index:9999; animation:slideDown 0.3s ease; font-family:'Poppins',sans-serif; font-weight:600;`;
    msg.textContent = texto;
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
}

const s = document.createElement('style');
s.textContent = `@keyframes slideDown { from{opacity:0;transform:translateX(-50%) translateY(-20px);}to{opacity:1;transform:translateX(-50%) translateY(0);} }`;
document.head.appendChild(s);

console.log('✅ Módulo de Desafios carregado!');
