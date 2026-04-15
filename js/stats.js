import { supabase } from './config.js';
import { calcularNivelPorCapitulos, sincronizarStats } from './app-core.js';

async function calcularEstatisticas(uid) {
  const [{ data: userRow }, { data: friends }, { data: progresso }, { data: conquistas }] = await Promise.all([
    supabase.from('users').select('*').eq('uid', uid).maybeSingle(),
    supabase.from('friends').select('id').eq('uid', uid).eq('status', 'accepted'),
    supabase.from('progresso').select('livro,capitulo,concluido').eq('uid', uid).eq('concluido', true),
    supabase.from('user_badges').select('id').eq('uid', uid).eq('conquistada', true)
  ]);
  const caps = progresso || [];
  const livros = new Set(caps.map(r => r.livro));
  const nivelCalc = calcularNivelPorCapitulos(caps.length);
  return {
    pontos: Number(userRow?.points || 0),
    nivel: Number(userRow?.nivel || nivelCalc.nivel),
    expAtual: Number(userRow?.expAtual ?? userRow?.expatual ?? nivelCalc.expAtual),
    totalLeituras: caps.length,
    totalLivros: livros.size,
    amigos: (friends || []).length,
    badges: (conquistas || []).length
  };
}

window.mostrarEstatisticas = async function () {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;
  await sincronizarStats(user.id);
  const s = await calcularEstatisticas(user.id);
  const bibleText = document.getElementById('bible-text');
  const readingView = document.getElementById('reading-view');
  readingView.style.display = 'block';
  bibleText.innerHTML = `
    <div class="screen-card">
      <div class="screen-topbar">
        <button class="back-arrow" onclick="window.voltarHistorico()">←</button>
        <h2>📊 Estatísticas</h2>
      </div>
      <div class="stats-grid">
        <div class="stat-card"><strong>${s.pontos}</strong><span>Pontos</span></div>
        <div class="stat-card"><strong>${s.nivel}</strong><span>Nível</span></div>
        <div class="stat-card"><strong>${s.expAtual}%</strong><span>EXP atual</span></div>
        <div class="stat-card"><strong>${s.totalLeituras}</strong><span>Capítulos lidos</span></div>
        <div class="stat-card"><strong>${s.totalLivros}</strong><span>Livros lidos</span></div>
        <div class="stat-card"><strong>${s.badges}</strong><span>Troféus</span></div>
        <div class="stat-card"><strong>${s.amigos}</strong><span>Amigos</span></div>
      </div>
    </div>`;
};
