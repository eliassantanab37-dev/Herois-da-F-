import { supabase } from './config.js';

export const XP_POR_CAPITULO = 10;
export const PONTOS_POR_ACERTO = 20;
export const MAX_AMIGOS = 1000;

export function nowIso() {
  return new Date().toISOString();
}

export function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
}

export function normalizarUsuario(row = {}) {
  return {
    uid: row.uid,
    name: row.name || 'Herói',
    email: row.email || '',
    dataNascimento: row.data_nascimento || null,
    photoURL: row.photoURL || row.photourl || null,
    points: Number(row.points || 0),
    nivel: Number(row.nivel || 1),
    expAtual: Number(row.expAtual ?? row.expatual ?? 0),
    badgesJson: row.badges || {},
    lastUpdate: row.lastUpdate || row.lastupdate || null,
  };
}

export function payloadUsuarioCompat(payload = {}) {
  const merged = { ...payload };
  if ('photoURL' in merged && !('photourl' in merged)) merged.photourl = merged.photoURL;
  if ('photourl' in merged && !('photoURL' in merged)) merged.photoURL = merged.photourl;
  if ('expAtual' in merged && !('expatual' in merged)) merged.expatual = merged.expAtual;
  if ('expatual' in merged && !('expAtual' in merged)) merged.expAtual = merged.expatual;
  if ('lastUpdate' in merged && !('lastupdate' in merged)) merged.lastupdate = merged.lastUpdate;
  if ('lastupdate' in merged && !('lastUpdate' in merged)) merged.lastUpdate = merged.lastupdate;
  if ('createdAt' in merged && !('createdat' in merged)) merged.createdat = merged.createdAt;
  if ('createdat' in merged && !('createdAt' in merged)) merged.createdAt = merged.createdat;
  return merged;
}

export function gerarAvatarPadrao(nome = 'Herói') {
  const iniciais = nome.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]).join('').toUpperCase() || 'H';
  const cores = ['#d4af37', '#2ecc71', '#4a90e2', '#e74c3c', '#9b59b6', '#f39c12'];
  const cor = cores[Math.abs((nome || '').charCodeAt(0) || 0) % cores.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240"><rect width="240" height="240" rx="32" fill="${cor}"/><text x="120" y="132" font-size="92" font-weight="700" fill="white" text-anchor="middle" font-family="Arial">${iniciais}</text></svg>`;
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
}

export function calcularIdade(dataNascimento) {
  if (!dataNascimento) return '—';
  const d = new Date(dataNascimento);
  if (Number.isNaN(d.getTime())) return '—';
  const hoje = new Date();
  let idade = hoje.getFullYear() - d.getFullYear();
  const m = hoje.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < d.getDate())) idade--;
  return idade >= 0 ? idade : '—';
}

export function calcularNivelPorCapitulos(totalCapitulos) {
  const caps = Number(totalCapitulos || 0);
  return {
    nivel: Math.floor(caps / 10) + 1,
    expAtual: (caps % 10) * XP_POR_CAPITULO
  };
}

export function isOnline(lastUpdate) {
  if (!lastUpdate) return false;
  return Date.now() - new Date(lastUpdate).getTime() < 90000;
}

export async function getCurrentAuthUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user || null;
}

export async function buscarUsuario(uid) {
  const { data } = await supabase.from('users').select('*').eq('uid', uid).maybeSingle();
  return data ? normalizarUsuario(data) : null;
}

export async function atualizarHeartbeat(uid) {
  const ts = nowIso();
  await supabase.from('users').update(payloadUsuarioCompat({ lastUpdate: ts })).eq('uid', uid);
}

export async function obterResumoUsuario(uid) {
  const [{ data: userRow }, { data: progressoRows }, { data: badgeRows }] = await Promise.all([
    supabase.from('users').select('*').eq('uid', uid).maybeSingle(),
    supabase.from('progresso').select('livro,capitulo,concluido').eq('uid', uid).eq('concluido', true),
    supabase.from('user_badges').select('badge_id,conquistada').eq('uid', uid).eq('conquistada', true)
  ]);

  const user = normalizarUsuario(userRow || {});
  const caps = progressoRows || [];
  const livros = new Set(caps.map(r => r.livro));
  return {
    user,
    livrosLidos: livros.size,
    capitulosLidos: caps.length,
    trofeus: (badgeRows || []).length
  };
}

export async function sincronizarStats(uid) {
  const resumo = await obterResumoUsuario(uid);
  await supabase.from('user_stats').upsert({
    uid,
    total_livros_concluidos: resumo.livrosLidos,
    total_capitulos_concluidos: resumo.capitulosLidos,
    trofeus_total: resumo.trofeus,
    badges_total: resumo.trofeus,
    lastupdate: nowIso()
  }, { onConflict: 'uid' });
  return resumo;
}

export function escapeHtml(texto = '') {
  return String(texto)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function shineButton(text, classes = '', id = '') {
  return `<button ${id ? `id="${id}"` : ''} class="glass-btn ${classes}">${text}</button>`;
}
