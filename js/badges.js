import { supabase } from './config.js';

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
  primeira_joao: 5, segunda_joao: 1, terceira_joao: 1, judas: 1, apocalipse: 22,
};

export const LIVROS_SISTEMA = Object.keys(TOTAL_CAPS_LIVRO);

const BADGES_BASE = {
  primeiro_passo: { nome: 'Primeiro Passo', pontos: 50, condicao: (s) => s.totalCaps >= 1 },
  dez_capitulos: { nome: 'Dez Capítulos', pontos: 50, condicao: (s) => s.totalCaps >= 10 },
  cinquenta_capitulos: { nome: 'Cinquenta Capítulos', pontos: 50, condicao: (s) => s.totalCaps >= 50 },
  cem_capitulos: { nome: 'Cem Capítulos', pontos: 50, condicao: (s) => s.totalCaps >= 100 },
  primeiro_livro: { nome: 'Primeiro Livro', pontos: 200, condicao: (s) => s.totalLivrosCompletos >= 1 },
  biblia_completa: { nome: 'Herói da Fé Eterno', pontos: 1000, condicao: (s) => s.totalLivrosCompletos >= LIVROS_SISTEMA.length },
};

function setMenuValue(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

export function calcularExpELevel(totalCapLidos) {
  const nivel = Math.floor(totalCapLidos / 10) + 1;
  const expAtual = (totalCapLidos % 10) * 10;
  return { nivel, expAtual };
}

export function atualizarBarraExpMenu(totalCapLidosOuPorcentagem = 0) {
  const total = Number(totalCapLidosOuPorcentagem || 0);
  const { nivel, expAtual } = total > 100 ? calcularExpELevel(total) : { nivel: null, expAtual: Math.max(0, Math.min(100, total)) };
  const fill = document.getElementById('exp-bar-fill');
  if (fill) fill.style.width = `${expAtual}%`;
  setMenuValue('exp-texto', `${expAtual}%`);
  if (nivel !== null) setMenuValue('nivel-numero', `${nivel}`);
}

async function contarConcluidos(uid) {
  const { data, error } = await supabase
    .from('progresso')
    .select('livro, capitulo, concluido')
    .eq('uid', uid)
    .eq('concluido', true);

  if (error) throw error;

  const capsPorLivro = {};
  for (const row of data || []) {
    const livro = row.livro;
    if (!capsPorLivro[livro]) capsPorLivro[livro] = new Set();
    capsPorLivro[livro].add(Number(row.capitulo));
  }

  let totalCaps = 0;
  let totalLivrosCompletos = 0;
  for (const livro of LIVROS_SISTEMA) {
    const lidos = capsPorLivro[livro]?.size || 0;
    totalCaps += lidos;
    if (lidos >= (TOTAL_CAPS_LIVRO[livro] || Infinity)) totalLivrosCompletos += 1;
  }

  return { totalCaps, totalLivrosCompletos, capsPorLivro };
}

export async function atualizarExpAposLeitura(uid, totalCapitulosLidos = null) {
  let totalCaps = totalCapitulosLidos;
  if (totalCaps == null) {
    ({ totalCaps } = await contarConcluidos(uid));
  }

  const { nivel, expAtual } = calcularExpELevel(totalCaps);
  const { data: before } = await supabase.from('users').select('nivel').eq('uid', uid).single();
  const nivelAnterior = before?.nivel || 1;

  await supabase
    .from('users')
    .update({ nivel, expAtual, expatual: expAtual, lastupdate: new Date().toISOString(), lastUpdate: new Date().toISOString() })
    .eq('uid', uid);

  atualizarBarraExpMenu(totalCaps);
  window.dispatchEvent(new CustomEvent('exp_atualizada', { detail: { totalCaps, nivel, expAtual } }));

  if (nivel > nivelAnterior) {
    await exibirAnimacaoLevelUp(nivel);
  }

  return { nivel, expAtual, totalCaps };
}

export async function sincronizarUserStats(uid) {
  const { totalCaps, totalLivrosCompletos } = await contarConcluidos(uid);
  const { data: userData } = await supabase.from('users').select('badges').eq('uid', uid).single();
  const badgesMap = userData?.badges || {};
  const totalBadges = Object.keys(badgesMap).length;

  await supabase.from('user_stats').upsert({
    uid,
    total_capitulos_concluidos: totalCaps,
    total_livros_concluidos: totalLivrosCompletos,
    trofeus_total: totalBadges,
    badges_total: totalBadges,
    lastupdate: new Date().toISOString(),
  }, { onConflict: 'uid' });

  return { totalCaps, totalLivrosCompletos, totalBadges };
}

export async function verificarLivroCompleto(uid, livroChave) {
  const { capsPorLivro } = await contarConcluidos(uid);
  const concluido = (capsPorLivro[livroChave]?.size || 0) >= (TOTAL_CAPS_LIVRO[livroChave] || Infinity);
  await sincronizarUserStats(uid);
  return concluido;
}

export async function verificarBadges(uid) {
  const { totalCaps, totalLivrosCompletos } = await contarConcluidos(uid);
  const { data: userData } = await supabase.from('users').select('points, badges').eq('uid', uid).single();
  const badgesAtuais = userData?.badges || {};

  let pontosBonus = 0;
  const novosCodigos = [];
  for (const [codigo, badge] of Object.entries(BADGES_BASE)) {
    if (!badgesAtuais[codigo] && badge.condicao({ totalCaps, totalLivrosCompletos })) {
      badgesAtuais[codigo] = { desbloqueado: true, data: new Date().toISOString() };
      pontosBonus += badge.pontos;
      novosCodigos.push(codigo);
    }
  }

  if (novosCodigos.length > 0) {
    await supabase.from('users').update({
      badges: badgesAtuais,
      points: (userData?.points || 0) + pontosBonus,
      lastupdate: new Date().toISOString(),
      lastUpdate: new Date().toISOString(),
    }).eq('uid', uid);

    const { data: cadastrados } = await supabase.from('badges').select('id,codigo').in('codigo', novosCodigos);
    const badgeByCodigo = new Map((cadastrados || []).map((b) => [b.codigo, b.id]));
    const inserts = [];
    for (const codigo of novosCodigos) {
      const badgeId = badgeByCodigo.get(codigo);
      if (badgeId) {
        inserts.push({
          uid,
          badge_id: badgeId,
          progresso_atual: totalCaps,
          conquistada: true,
          conquistada_em: new Date().toISOString(),
        });
      }
    }
    if (inserts.length) {
      await supabase.from('user_badges').upsert(inserts, { onConflict: 'uid,badge_id' }).catch(() => {});
    }
  }

  await sincronizarUserStats(uid);
  return { totalCaps, totalLivrosCompletos, novosCodigos };
}

async function exibirAnimacaoLevelUp(nivel) {
  const el = document.createElement('div');
  el.style.cssText = 'position:fixed;inset:0;display:flex;align-items:center;justify-content:center;z-index:100000;background:rgba(0,0,0,.55);backdrop-filter:blur(6px);';
  el.innerHTML = `<div style="padding:28px 34px;border-radius:24px;border:2px solid #d4af37;background:linear-gradient(135deg,rgba(26,26,22,.96),rgba(8,8,8,.96));box-shadow:0 0 30px rgba(212,175,55,.35);text-align:center;font-family:Cinzel,serif;"><div style="font-size:2rem;color:#fff">✨ LEVEL UP ✨</div><div style="font-size:1.2rem;color:#d4af37;margin-top:8px">Nível ${nivel}</div></div>`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2200);
}

window.mostrarBadges = window.mostrarBadges || (async function () {
  const box = document.getElementById('bible-text');
  if (!box) return;
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;
  const { data } = await supabase.from('users').select('badges').eq('uid', user.id).single();
  const badges = data?.badges || {};
  box.innerHTML = `<div style="max-width:760px;margin:0 auto;padding:24px"><button onclick="window.carregarListaLivros()" class="btn-mission" style="margin-bottom:18px">← Voltar</button><h2 style="color:#d4af37;font-family:Cinzel">Troféus</h2><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:14px;margin-top:18px">${Object.keys(BADGES_BASE).map((k)=>`<div style="padding:18px;border-radius:18px;border:1px solid ${badges[k] ? '#d4af37' : '#333'};background:${badges[k] ? 'rgba(212,175,55,.12)' : 'rgba(255,255,255,.03)'};color:${badges[k] ? '#fff' : '#777'}"><strong>${BADGES_BASE[k].nome}</strong><div style="margin-top:8px">${badges[k] ? '✅ Conquistado' : '🔒 Bloqueado'}</div></div>`).join('')}</div></div>`;
});
