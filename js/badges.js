import { supabase } from './config.js';
import { calcularNivelPorCapitulos, nowIso, payloadUsuarioCompat, sincronizarStats } from './app-core.js';

export const TOTAL_CAPS_LIVRO = {
  genesis: 50, exodo: 40, levitico: 27, numeros: 36, deuteronomio: 34, josue: 24, juizes: 21, rute: 4,
  primeiro_samuel: 31, segundo_samuel: 24, primeiro_reis: 22, segundo_reis: 25, primeiro_cronicas: 29,
  segundo_cronicas: 36, esdras: 10, neemias: 13, ester: 10, jo: 42, salmos: 150, proverbios: 31,
  eclesiastes: 12, cantares: 8, isaias: 66, jeremias: 52, lamentacoes: 5, ezequiel: 48, daniel: 12,
  oseias: 14, joel: 3, amos: 9, obadias: 1, jonas: 4, miqueias: 7, naum: 3, habacuque: 3, sofonias: 3,
  ageu: 2, zacarias: 14, malaquias: 4, mateus: 28, marcos: 16, lucas: 24, joao: 21, atos: 28, romanos: 16,
  primeiro_corintios: 16, segundo_corintios: 13, galatas: 6, efesios: 6, filipenses: 4, colossenses: 4,
  primeiro_tessalonicenses: 5, segunda_tessalonicenses: 3, primeira_timoteo: 6, segunda_timoteo: 4, tito: 3,
  filemon: 1, hebreus: 13, tiago: 5, primeira_pedro: 5, segunda_pedro: 3, primeira_joao: 5, segunda_joao: 1,
  terceira_joao: 1, judas: 1, apocalipse: 22
};
export const LIVROS_SISTEMA = Object.keys(TOTAL_CAPS_LIVRO);

const BADGES_PADRAO = [
  { codigo: 'primeiro_passo', nome: 'Primeiro Passo', descricao: 'Concluiu o primeiro capítulo', tipo: 'capitulos', meta: 1, pontos_bonus: 50, icone: '📖' },
  { codigo: 'dez_capitulos', nome: 'Dez Capítulos', descricao: 'Concluiu 10 capítulos', tipo: 'capitulos', meta: 10, pontos_bonus: 100, icone: '📚' },
  { codigo: 'cinquenta_capitulos', nome: 'Cinquenta Capítulos', descricao: 'Concluiu 50 capítulos', tipo: 'capitulos', meta: 50, pontos_bonus: 200, icone: '🌟' },
  { codigo: 'cem_capitulos', nome: 'Cem Capítulos', descricao: 'Concluiu 100 capítulos', tipo: 'capitulos', meta: 100, pontos_bonus: 300, icone: '🏆' },
  { codigo: 'tres_amigos', nome: 'Herói Social', descricao: 'Tenha 3 amigos aceitos', tipo: 'amigos', meta: 3, pontos_bonus: 120, icone: '👥' },
  { codigo: 'nivel_10', nome: 'Nível 10', descricao: 'Alcance o nível 10', tipo: 'nivel', meta: 10, pontos_bonus: 180, icone: '⚡' },
];

async function garantirBadgesBase() {
  const { data: existentes } = await supabase.from('badges').select('codigo');
  const set = new Set((existentes || []).map(x => x.codigo));
  const faltantes = BADGES_PADRAO.filter(b => !set.has(b.codigo));
  if (faltantes.length) {
    await supabase.from('badges').insert(faltantes.map(b => ({ ...b, ativa: true })));
  }
}

export async function atualizarBarraExpMenu(totalCaps) {
  const { nivel, expAtual } = calcularNivelPorCapitulos(totalCaps);
  const expTexto = document.getElementById('exp-texto');
  const expBar = document.getElementById('exp-bar-fill');
  const nivelNumero = document.getElementById('nivel-numero');
  if (expTexto) expTexto.textContent = `${expAtual}%`;
  if (expBar) expBar.style.width = `${expAtual}%`;
  if (nivelNumero) nivelNumero.textContent = String(nivel);
}

export async function atualizarExpAposLeitura(uid, totalCapitulosLidos) {
  const { nivel, expAtual } = calcularNivelPorCapitulos(totalCapitulosLidos);
  await supabase.from('users').update(payloadUsuarioCompat({
    nivel,
    expAtual,
    lastUpdate: nowIso()
  })).eq('uid', uid);
  await sincronizarStats(uid);
  atualizarBarraExpMenu(totalCapitulosLidos);
}

export async function verificarLivroCompleto(uid, livroChave) {
  const totalNecessario = TOTAL_CAPS_LIVRO[livroChave];
  if (!totalNecessario) return false;
  const { data } = await supabase.from('progresso').select('id').eq('uid', uid).eq('livro', livroChave).eq('concluido', true);
  return (data || []).length >= totalNecessario;
}

export async function verificarBadges(uid) {
  await garantirBadgesBase();
  const [{ data: badges }, { data: progresso }, { data: amigos }, { data: userRow }] = await Promise.all([
    supabase.from('badges').select('*').eq('ativa', true),
    supabase.from('progresso').select('livro,concluido').eq('uid', uid).eq('concluido', true),
    supabase.from('friends').select('id').eq('uid', uid).eq('status', 'accepted'),
    supabase.from('users').select('*').eq('uid', uid).maybeSingle()
  ]);

  const totalCap = (progresso || []).length;
  const userNivel = Number(userRow?.nivel || 1);
  const totalAmigos = (amigos || []).length;

  for (const badge of (badges || [])) {
    let conquistou = false;
    if (badge.tipo === 'capitulos') conquistou = totalCap >= Number(badge.meta || 0);
    if (badge.tipo === 'amigos') conquistou = totalAmigos >= Number(badge.meta || 0);
    if (badge.tipo === 'nivel') conquistou = userNivel >= Number(badge.meta || 0);
    if (!conquistou) continue;

    const { data: existe } = await supabase.from('user_badges').select('id,conquistada').eq('uid', uid).eq('badge_id', badge.id).maybeSingle();
    if (existe?.conquistada) continue;

    await supabase.from('user_badges').upsert({
      uid,
      badge_id: badge.id,
      progresso_atual: badge.meta || 0,
      conquistada: true,
      conquistada_em: nowIso(),
      createdat: nowIso()
    }, { onConflict: 'uid,badge_id' }).catch(() => null);

    const pontosAtuais = Number(userRow?.points || 0) + Number(badge.pontos_bonus || 0);
    await supabase.from('users').update(payloadUsuarioCompat({ points: pontosAtuais, lastUpdate: nowIso() })).eq('uid', uid);
  }

  await sincronizarStats(uid);
}

window.mostrarBadges = async function () {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;
  const bibleText = document.getElementById('bible-text');
  const readingView = document.getElementById('reading-view');
  if (!bibleText || !readingView) return;
  readingView.style.display = 'block';

  const [{ data: badges }, { data: userBadges }] = await Promise.all([
    supabase.from('badges').select('*').order('id'),
    supabase.from('user_badges').select('badge_id,conquistada,conquistada_em').eq('uid', user.id).eq('conquistada', true)
  ]);

  const unlocked = new Map((userBadges || []).map(b => [b.badge_id, b]));
  bibleText.innerHTML = `
    <div class="screen-card">
      <div class="screen-topbar">
        <button class="back-arrow" onclick="window.voltarHistorico()">←</button>
        <h2>🏆 Troféus</h2>
      </div>
      <div class="trophy-grid">
        ${(badges || []).map(b => `
          <div class="trophy-card ${unlocked.has(b.id) ? 'won' : ''}">
            <div class="trophy-icon">${b.icone || '🏅'}</div>
            <div class="trophy-name">${b.nome}</div>
            <div class="trophy-desc">${b.descricao || ''}</div>
            <div class="trophy-meta">${unlocked.has(b.id) ? 'Conquistado' : 'Bloqueado'}</div>
          </div>`).join('')}
      </div>
    </div>`;
};
