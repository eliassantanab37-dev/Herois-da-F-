// js/stats.js — Migrado para Supabase
// ═══════════════════════════════════════════════════════════

import { supabase } from './config.js';
import { TOTAL_CAPS_LIVRO, LIVROS_SISTEMA, calcularExpELevel } from './badges.js';

async function calcularEstatisticas(uid) {
    // FIX-S1: destructuring direto de Promise.all explodia com TypeError se alguma
    // query retornasse erro (data seria undefined). Agora capturamos individualmente.
    const [resUser, resAmigos, resProg] = await Promise.all([
        supabase.from('users').select('*').eq('uid', uid).single(),
        supabase.from('friends').select('friend_uid').eq('uid', uid),
        supabase.from('progresso').select('livro, concluido').eq('uid', uid)
    ]);
    if (resUser.error) throw resUser.error;
    const userData  = resUser.data;
    const amigosData = resAmigos.data;
    const progData   = resProg.data;

    const livros        = new Set();
    const livroDetalhes = {};
    let totalLeituras   = 0;
    let livrosCompletos = 0;

    const progPorLivro = {};
    (progData || []).forEach(r => {
        if (!progPorLivro[r.livro]) progPorLivro[r.livro] = [];
        progPorLivro[r.livro].push(r);
    });

    for (const [livroChave, caps] of Object.entries(progPorLivro)) {
        const lidos = caps.filter(c => c.concluido).length;
        if (lidos > 0) {
            livros.add(livroChave);
            livroDetalhes[livroChave] = lidos;
            totalLeituras += lidos;
        }
        const totalReal = TOTAL_CAPS_LIVRO[livroChave];
        // FIX #27: só conta como completo se tiver totalReal definido E lidos atingiram esse total
        if (totalReal && lidos >= totalReal) livrosCompletos++;
    }

    const { nivel, expAtual } = calcularExpELevel(totalLeituras);

    return {
        pontos: userData?.points || 0,
        nivel,
        expAtual,
        totalLeituras,
        totalLivros:   livros.size,
        livrosCompletos,
        livroDetalhes,
        amigos: amigosData?.length || 0,
        badges: Object.keys(userData?.badges || {}).length
    };
}

window.mostrarEstatisticas = async function () {
    const bibleText   = document.getElementById('bible-text');
    const readingView = document.getElementById('reading-view');
    const { data: { user } } = await supabase.auth.getUser();

    if (!user)      { alert('Você precisa estar logado!'); return; }
    if (!bibleText) return;

    if (readingView) readingView.style.display = 'block';
    bibleText.innerHTML = '<div style="text-align:center; padding:60px; color:#d4af37; font-family:Cinzel;">Carregando estatísticas...</div>';

    const stats       = await calcularEstatisticas(user.id);
    const totalLivros = LIVROS_SISTEMA.length;

    const cards = [
        { valor: stats.pontos,          label: 'Pontos Totais',         bg: 'linear-gradient(135deg,#d4af37,#ffff00)', cor: 'black' },
        { valor: stats.nivel,           label: 'Nível Atual',           bg: 'linear-gradient(135deg,#4a90e2,#357abd)', cor: 'white', extra: `${stats.expAtual}% para próx.` },
        { valor: stats.totalLeituras,   label: 'Capítulos Lidos',       bg: 'linear-gradient(135deg,#2ecc71,#27ae60)', cor: 'white' },
        { valor: stats.totalLivros,     label: 'Livros Explorados',     bg: 'linear-gradient(135deg,#e74c3c,#c0392b)', cor: 'white' },
        { valor: stats.livrosCompletos, label: 'Livros Completos',      bg: 'linear-gradient(135deg,#f39c12,#d68910)', cor: 'white' },
        { valor: stats.amigos,          label: 'Amigos na Fé',          bg: 'linear-gradient(135deg,#9b59b6,#8e44ad)', cor: 'white' },
        { valor: stats.badges,          label: 'Troféus Desbloqueados', bg: 'linear-gradient(135deg,#1abc9c,#16a085)', cor: 'white' },
    ];

    let html = `
        <div style="max-width:900px; margin:0 auto; padding:20px;">
            <div style="text-align:center; margin-bottom:40px;">
                <h2 style="color:#d4af37; font-family:'Cinzel'; font-size:2rem; margin:0;">📊 SUAS ESTATÍSTICAS</h2>
                <p style="color:#888; margin:10px 0 0 0;">Acompanhe seu progresso espiritual</p>
            </div>
            <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:15px; margin-bottom:40px;">`;

    for (const card of cards) {
        html += `<div style="background:${card.bg}; border-radius:12px; padding:20px; text-align:center; color:${card.cor};"><div style="font-size:2.5rem; font-weight:bold;">${card.valor}</div><div style="margin-top:8px; font-weight:600; font-size:0.9rem;">${card.label}</div>${card.extra ? `<div style="font-size:0.8rem; margin-top:6px; opacity:0.85;">${card.extra}</div>` : ''}</div>`;
    }

    html += `</div>`;

    const topLivros = Object.entries(stats.livroDetalhes).sort(([,a],[,b]) => b - a).slice(0, 8);
    if (topLivros.length > 0) {
        html += `<div style="background:rgba(20,20,18,0.8); border:2px solid #d4af37; border-radius:12px; padding:20px; margin-bottom:40px;"><h3 style="color:#d4af37; margin-top:0;">📖 Livros Mais Lidos</h3><div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(130px,1fr)); gap:12px;">`;
        for (const [livro, count] of topLivros) {
            const nomeFormatado = livro.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            html += `<div style="background:rgba(255,255,255,0.05); border:1px solid #333; border-radius:8px; padding:12px; text-align:center;"><div style="font-size:1.5rem; margin-bottom:8px;">📕</div><div style="color:white; font-weight:bold; font-size:0.8rem; margin-bottom:6px;">${nomeFormatado}</div><div style="color:#d4af37; font-size:1.8rem; font-weight:bold;">${count}</div><div style="color:#888; font-size:0.75rem; margin-top:4px;">cap${count !== 1 ? 's' : ''}</div></div>`;
        }
        html += `</div></div>`;
    }

    const expPct    = stats.expAtual;
    const livrosPct = Math.round((stats.totalLivros / totalLivros) * 100);
    const compPct   = Math.round((stats.livrosCompletos / totalLivros) * 100);

    html += `
        <div style="background:rgba(20,20,18,0.8); border:2px solid #d4af37; border-radius:12px; padding:20px; margin-bottom:40px;">
            <h3 style="color:#d4af37; margin-top:0;">⏳ Progresso</h3>
            <div style="margin-bottom:18px;"><div style="display:flex; justify-content:space-between; margin-bottom:6px;"><span style="color:#ccc;">EXP — Próximo Nível</span><span style="color:#d4af37;">${expPct}%</span></div><div style="background:rgba(255,255,255,0.1); border-radius:8px; height:10px; overflow:hidden;"><div style="background:linear-gradient(90deg,#d4af37,#ffdf00); height:100%; width:${expPct}%;"></div></div></div>
            <div style="margin-bottom:18px;"><div style="display:flex; justify-content:space-between; margin-bottom:6px;"><span style="color:#ccc;">Livros Explorados</span><span style="color:#d4af37;">${stats.totalLivros} / ${totalLivros}</span></div><div style="background:rgba(255,255,255,0.1); border-radius:8px; height:10px; overflow:hidden;"><div style="background:linear-gradient(90deg,#2ecc71,#27ae60); height:100%; width:${livrosPct}%;"></div></div></div>
            <div><div style="display:flex; justify-content:space-between; margin-bottom:6px;"><span style="color:#ccc;">Livros Completos</span><span style="color:#d4af37;">${stats.livrosCompletos} / ${totalLivros}</span></div><div style="background:rgba(255,255,255,0.1); border-radius:8px; height:10px; overflow:hidden;"><div style="background:linear-gradient(90deg,#f39c12,#d68910); height:100%; width:${compPct}%;"></div></div></div>
        </div>

        <div style="background:rgba(212,175,55,0.1); border:2px solid #d4af37; border-radius:12px; padding:20px; margin-bottom:40px;">
            <h3 style="color:#d4af37; margin-top:0;">💡 Dicas para Crescer</h3>
            <ul style="color:#ccc; line-height:2; padding-left:20px; margin:0;">
                <li>📚 Leia capítulos de livros diferentes para ganhar badges</li>
                <li>🔥 Mantenha a consistência — leia todos os dias!</li>
                <li>👥 Adicione amigos para desbloquear achievements sociais</li>
                <li>🎯 Complete desafios semanais para ganhar pontos extras</li>
                <li>🏆 Complete um livro inteiro para ganhar 200 pts de troféu</li>
            </ul>
        </div>

        <div style="text-align:center; margin-bottom:40px;">
            <button onclick="window.carregarListaLivros()" style="background:#d4af37; color:black; border:none; padding:12px 30px; border-radius:8px; font-weight:bold; cursor:pointer; font-size:1rem;">← Voltar à Bíblia</button>
        </div>
    </div>`;

    bibleText.innerHTML = html;
};

export { calcularEstatisticas };
console.log('✅ Módulo de Estatísticas carregado!');