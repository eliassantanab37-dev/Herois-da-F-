// js/social.js — Migrado para Supabase
// ═══════════════════════════════════════════════════════════

import { supabase } from './config.js';

const listaAmigosSidebar = document.getElementById('lista-amigos-sidebar');

function gerarAvatarPadrao(nome) {
  const iniciais = nome ? nome.split(' ').map(p => p[0]).join('').toUpperCase().slice(0, 2) : '??';
  const cores    = ['#d4af37', '#2ecc71', '#4a90e2', '#e74c3c', '#9b59b6', '#f39c12'];
  const cor      = cores[Math.abs((nome || '').charCodeAt(0) || 0) % cores.length];
  const svg      = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="${cor}"/><text x="100" y="100" font-size="80" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central" font-family="Arial">${iniciais}</text></svg>`;
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
}

let _channelAmigos = null;
let _channelNotif = null;
let _heartbeatTimer = null;
let _recarregarDebounce = null;

function isOnline(lastUpdate) {
  if (!lastUpdate) return false;
  return (Date.now() - new Date(lastUpdate).getTime()) < 90000;
}

async function heartbeat(uid) {
  await supabase.from('users').update({ lastUpdate: new Date().toISOString() }).eq('uid', uid);
}

export function iniciarSocial(user) {
  if (_channelAmigos) { supabase.removeChannel(_channelAmigos); _channelAmigos = null; }
  if (_channelNotif) { supabase.removeChannel(_channelNotif); _channelNotif = null; }
  if (_heartbeatTimer) { clearInterval(_heartbeatTimer); _heartbeatTimer = null; }
  if (!user) return;

  _recarregarSidebar(user.id);
  heartbeat(user.id);
  _heartbeatTimer = setInterval(() => heartbeat(user.id), 45000);
  window.addEventListener('beforeunload', () => heartbeat(user.id));

  const recarregar = () => {
    clearTimeout(_recarregarDebounce);
    _recarregarDebounce = setTimeout(() => _recarregarSidebar(user.id), 250);
  };

  _channelAmigos = supabase
    .channel('social-friends-' + user.id)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'friends', filter: `uid=eq.${user.id}` }, recarregar)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'users' }, recarregar)
    .subscribe();

  _channelNotif = supabase
    .channel('social-notifs-' + user.id)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'notificacoes', filter: `to_uid=eq.${user.id}` }, recarregar)
    .subscribe();

  const pic = document.getElementById('user-profile-pic');
  if (pic) {
    pic.style.cursor = 'pointer';
    pic.onclick = () => window.verPerfilDetalhado(user.id);
  }

  inicializarBuscaSidebar(user);
}

async function _recarregarSidebar(uid) {
  if (!listaAmigosSidebar) return;

  const { data: amigos } = await supabase.from('friends').select('friend_uid').eq('uid', uid);
  listaAmigosSidebar.innerHTML = '';

  if (!amigos || amigos.length === 0) {
    listaAmigosSidebar.innerHTML = '<p style="color:#666; font-size:0.8rem; text-align:center; margin-top:20px;">Procure heróis para adicionar!</p>';
    return;
  }

  const amigosIds = amigos.map(a => a.friend_uid);
  const [{ data: dadosAmigos }, { data: notifs }] = await Promise.all([
    supabase.from('users').select('uid, name, points, photoURL, lastUpdate').in('uid', amigosIds),
    supabase.from('notificacoes').select('from_uid').eq('to_uid', uid).eq('lida', false)
  ]);

  const notifSet = new Set((notifs || []).map(n => n.from_uid));
  const ordenados = (dadosAmigos || []).sort((a, b) => {
    const pesoA = (isOnline(a.lastUpdate) ? 10 : 0) + (notifSet.has(a.uid) ? 5 : 0);
    const pesoB = (isOnline(b.lastUpdate) ? 10 : 0) + (notifSet.has(b.uid) ? 5 : 0);
    return pesoB - pesoA;
  });

  ordenados.forEach(u => renderizarAmigoSidebar(u.uid, u, isOnline(u.lastUpdate), notifSet.has(u.uid)));
}

function renderizarAmigoSidebar(amigoId, amigoData, online, temMsgNaoLida) {
  const foto = amigoData.photoURL || gerarAvatarPadrao(amigoData.name);
  const statusCor = online ? '#2ecc71' : '#555';

  const div = document.createElement('div');
  div.style.cssText = `display:flex; align-items:center; gap:10px; padding:10px; cursor:pointer; border-radius:8px; transition:background 0.2s; background:${temMsgNaoLida ? 'rgba(212,175,55,0.12)' : online ? 'rgba(46,204,113,0.05)' : 'rgba(0,0,0,0.2)'}; margin-bottom:5px; border-left:3px solid ${temMsgNaoLida ? '#d4af37' : 'transparent'};`;
  div.innerHTML = `
    <div style="position:relative; flex-shrink:0;">
      <img src="${foto}" style="width:40px; height:40px; border-radius:50%; object-fit:cover; border:2px solid ${temMsgNaoLida ? '#d4af37' : statusCor};" onerror="this.src='https://i.imgur.com/6VBx3io.png'">
      <div style="position:absolute; bottom:0; right:0; width:11px; height:11px; background:${statusCor}; border-radius:50%; border:2px solid #111;"></div>
      ${temMsgNaoLida ? `<div style="position:absolute; top:-4px; right:-4px; background:#d4af37; color:#000; width:18px; height:18px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:0.65rem; font-weight:bold; border:2px solid #111; animation:pulse-badge 1.5s infinite;">✉</div>` : ''}
    </div>
    <div style="flex:1; min-width:0;">
      <p style="color:${temMsgNaoLida ? '#d4af37' : 'white'}; margin:0; font-weight:${temMsgNaoLida ? '700' : '500'}; font-size:0.85rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${amigoData.name}</p>
      <p style="color:#888; margin:2px 0 0 0; font-size:0.7rem;">${online ? '<span style="color:#2ecc71;">● Online</span>' : '● Offline'} · ${amigoData.points || 0} pts</p>
    </div>
    ${temMsgNaoLida ? `<div style="background:#d4af37; color:#000; padding:4px 8px; border-radius:12px; font-size:0.7rem; font-weight:bold; white-space:nowrap;">💬 Nova</div>` : ''}`;

  div.onclick = () => temMsgNaoLida ? window.abrirChat(amigoId, amigoData.name) : window.verPerfilDetalhado(amigoId);
  div.onmouseover = () => div.style.background = 'rgba(212,175,55,0.2)';
  div.onmouseout = () => div.style.background = temMsgNaoLida ? 'rgba(212,175,55,0.12)' : online ? 'rgba(46,204,113,0.05)' : 'rgba(0,0,0,0.2)';

  listaAmigosSidebar.appendChild(div);
}

function inicializarBuscaSidebar(user) {
  const input = document.getElementById('sidebar-search-input');
  const resultados = document.getElementById('sidebar-search-results');
  if (!input || !resultados) return;

  let debounceTimer;

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    const termo = input.value.trim();
    if (termo.length < 2) { resultados.innerHTML = ''; return; }
    resultados.innerHTML = `<p style="color:#555; font-size:0.75rem; text-align:center; margin:8px 0;">Buscando...</p>`;

    debounceTimer = setTimeout(async () => {
      const [{ data: encontrados }, { data: amigosData }] = await Promise.all([
        supabase.from('users').select('uid, name, points, photoURL').ilike('name', `%${termo}%`).limit(20),
        supabase.from('friends').select('friend_uid').eq('uid', user.id)
      ]);

      resultados.innerHTML = '';
      const amigosSet = new Set((amigosData || []).map(a => a.friend_uid));

      (encontrados || []).forEach(u => {
        if (u.uid === user.id) return;
        const foto = u.photoURL || gerarAvatarPadrao(u.name);
        const jaAmigo = amigosSet.has(u.uid);

        const card = document.createElement('div');
        card.style.cssText = `display:flex; align-items:center; gap:10px; padding:10px; margin-top:8px; background:#1a1a1a; border:1px solid #2a2a2a; border-radius:10px; transition:border 0.2s;`;
        card.onmouseover = () => card.style.borderColor = '#d4af37';
        card.onmouseout = () => card.style.borderColor = '#2a2a2a';

        card.innerHTML = `
          <img src="${foto}" style="width:38px; height:38px; border-radius:50%; object-fit:cover; border:2px solid #333; flex-shrink:0;" onerror="this.src='https://i.imgur.com/6VBx3io.png'">
          <div style="flex:1; min-width:0;">
            <p style="color:white; margin:0; font-size:0.83rem; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${u.name}</p>
            <p style="color:#888; margin:2px 0 0 0; font-size:0.7rem;">${u.points || 0} pts</p>
          </div>
          <div style="display:flex; gap:6px; flex-shrink:0;">
            ${!jaAmigo
              ? `<button class="btn-add-amigo" data-uid="${u.uid}" data-nome="${u.name}" style="background:#2ecc71; color:white; border:none; padding:6px 10px; border-radius:6px; font-size:0.75rem; font-weight:bold; cursor:pointer;">➕</button>`
              : `<button class="btn-chat-amigo" data-uid="${u.uid}" data-nome="${u.name}" style="background:#d4af37; color:black; border:none; padding:6px 10px; border-radius:6px; font-size:0.75rem; font-weight:bold; cursor:pointer;">💬</button>`}
            <button class="btn-ver-perfil" data-uid="${u.uid}" style="background:#333; color:#d4af37; border:none; padding:6px 10px; border-radius:6px; font-size:0.75rem; cursor:pointer;">👤</button>
          </div>`;
        resultados.appendChild(card);
      });

      resultados.querySelectorAll('.btn-add-amigo').forEach(btn => {
        btn.onclick = () => { window.adicionarAmigo(btn.dataset.uid, btn.dataset.nome); input.value = ''; resultados.innerHTML = ''; };
      });
      resultados.querySelectorAll('.btn-chat-amigo').forEach(btn => {
        btn.onclick = () => { window.abrirChat(btn.dataset.uid, btn.dataset.nome); input.value = ''; resultados.innerHTML = ''; };
      });
      resultados.querySelectorAll('.btn-ver-perfil').forEach(btn => {
        btn.onclick = () => { window.verPerfilDetalhado(btn.dataset.uid); };
      });

      if (!resultados.children.length) {
        resultados.innerHTML = `<p style="color:#555; font-size:0.75rem; text-align:center; margin:8px 0;">Nenhum herói encontrado.</p>`;
      }
    }, 300);
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !resultados.contains(e.target)) {
      resultados.innerHTML = '';
      input.value = '';
    }
  });
}

window.verPerfilDetalhado = async function (uid) {
  document.getElementById('perfil-detalhado')?.remove();

  const overlay = document.createElement('div');
  overlay.id = 'perfil-detalhado';
  overlay.style.cssText = `position:fixed; inset:0; background:rgba(0,0,0,0.85); z-index:99999; display:flex; align-items:center; justify-content:center; padding:20px; box-sizing:border-box; backdrop-filter:blur(4px); animation:fadeIn 0.25s ease;`;
  overlay.innerHTML = '<div style="color:#d4af37; font-size:2rem;">⏳</div>';
  document.body.appendChild(overlay);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) { overlay.remove(); return; }

  const [{ data: userData }, { data: amigoData }] = await Promise.all([
    supabase.from('users').select('*').eq('uid', uid).single(),
    supabase.from('friends').select('friend_uid').eq('uid', user.id).eq('friend_uid', uid).single()
  ]);

  if (!userData) { overlay.remove(); return; }

  const isMe = user.id === uid;
  const jaAmigo = !!amigoData;
  const foto = userData.photoURL || gerarAvatarPadrao(userData.name);
  const nivel = userData.nivel || 1;

  overlay.innerHTML = `
    <div style="background:#141412; border:2px solid #d4af37; border-radius:18px; padding:28px 24px; width:100%; max-width:380px; text-align:center; position:relative; box-shadow:0 0 40px rgba(212,175,55,0.25);">
      <button onclick="document.getElementById('perfil-detalhado').remove()" style="position:absolute; top:12px; right:14px; background:none; border:none; color:#555; font-size:1.5rem; cursor:pointer; line-height:1;">×</button>
      <div style="position:relative; width:110px; height:110px; margin:0 auto 14px;">
        <img src="${foto}" style="width:100%; height:100%; border-radius:50%; border:3px solid #d4af37; object-fit:cover;" onerror="this.src='https://i.imgur.com/6VBx3io.png'">
      </div>
      <h2 style="color:#d4af37; margin:8px 0 4px; font-family:'Cinzel'; font-size:1.3rem;">${userData.name}</h2>
      <p style="color:#888; margin:4px 0 18px;">Nível ${nivel} · ${userData.points || 0} pts</p>
      <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
        ${isMe ? `<button id="modal-btn-mudar-foto" onclick="window._abrirCropPerfil()" style="flex:1; background:#d4af37; color:black; border:none; padding:11px; border-radius:8px; font-weight:bold; cursor:pointer; min-width:120px;">📷 Mudar Foto</button>` : ''}
        ${!isMe && !jaAmigo ? `<button onclick="window.adicionarAmigo('${uid}','${userData.name}')" style="flex:1; background:#2ecc71; color:white; border:none; padding:11px; border-radius:8px; font-weight:bold; cursor:pointer;">➕ Adicionar</button>` : ''}
        ${!isMe && jaAmigo ? `<button onclick="window.abrirChat('${uid}','${userData.name}')" style="flex:1; background:#d4af37; color:black; border:none; padding:11px; border-radius:8px; font-weight:bold; cursor:pointer;">💬 Conversar</button><button onclick="window.removerAmigo('${uid}')" style="flex:1; background:#ff5555; color:white; border:none; padding:11px; border-radius:8px; font-weight:bold; cursor:pointer;">✕ Remover</button>` : ''}
      </div>
    </div>`;
}

window.fecharMenuPerfil = function () { document.getElementById('perfil-detalhado')?.remove(); };
window._abrirCropPerfil = function () {
  const inputFoto = document.getElementById('foto-input');
  if (!inputFoto) return;
  inputFoto.setAttribute('data-update-mode', 'true');
  inputFoto.click();
};

window.adicionarAmigo = async function (amigoId) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;
  await supabase.from('friends').upsert([{ uid: user.id, friend_uid: amigoId }, { uid: amigoId, friend_uid: user.id }], { onConflict: 'uid,friend_uid' });
  window.verPerfilDetalhado(amigoId);
};

window.removerAmigo = async function (amigoId) {
  if (!confirm('Deseja remover este herói da sua lista?')) return;
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;
  await Promise.all([
    supabase.from('friends').delete().eq('uid', user.id).eq('friend_uid', amigoId),
    supabase.from('friends').delete().eq('uid', amigoId).eq('friend_uid', user.id)
  ]);
  window.verPerfilDetalhado(amigoId);
};

const s = document.createElement('style');
s.textContent = `@keyframes pulse-badge{0%,100%{transform:scale(1)}50%{transform:scale(1.25)}} @keyframes fadeIn{from{opacity:0}to{opacity:1}}`;
document.head.appendChild(s);
