import { supabase } from './config.js';
import {
  MAX_AMIGOS, atualizarHeartbeat, buscarUsuario, calcularIdade, escapeHtml,
  gerarAvatarPadrao, getCurrentAuthUser, isOnline, obterResumoUsuario, nowIso
} from './app-core.js';

const listaAmigosSidebar = document.getElementById('lista-amigos-sidebar');
const resultadosBusca = document.getElementById('sidebar-search-results');
const inputBusca = document.getElementById('sidebar-search-input');

let canalFriends = null;
let canalNotifs = null;
let canalUsers = null;
let hbTimer = null;

function fecharOverlayPerfil() {
  document.getElementById('perfil-detalhado')?.remove();
}

function abrirOverlay(html) {
  fecharOverlayPerfil();
  document.getElementById('side-menu')?.classList.remove('active');
  const overlay = document.createElement('div');
  overlay.id = 'perfil-detalhado';
  overlay.className = 'modal-overlay';
  overlay.innerHTML = html;
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
  document.body.appendChild(overlay);
}

async function obterAmigos(uid) {
  const { data } = await supabase.from('friends').select('friend_uid,status,created_at').eq('uid', uid);
  return data || [];
}

async function obterPendencias(uid) {
  const { data } = await supabase.from('notificacoes').select('*').eq('to_uid', uid).eq('lida', false).order('created_at', { ascending: false });
  return data || [];
}

async function carregarSidebar(uid) {
  if (!listaAmigosSidebar) return;
  const [amigosRows, notifRows] = await Promise.all([obterAmigos(uid), obterPendencias(uid)]);
  const accepted = amigosRows.filter(a => a.status === 'accepted');
  const pendentesRecebidos = notifRows.filter(n => n.tipo === 'pedido_amizade');
  const notifMsg = notifRows.filter(n => n.tipo === 'mensagem');

  if (!accepted.length && !pendentesRecebidos.length && !notifMsg.length) {
    listaAmigosSidebar.innerHTML = '<div class="empty-state small">Sua lista está vazia.</div>';
    return;
  }

  const ids = [...new Set([
    ...accepted.map(a => a.friend_uid),
    ...pendentesRecebidos.map(n => n.from_uid),
    ...notifMsg.map(n => n.from_uid)
  ])];

  const { data: users } = await supabase.from('users').select('*').in('uid', ids);
  const byId = new Map((users || []).map(u => [u.uid, u]));
  const notifMap = new Map();
  notifMsg.forEach(n => notifMap.set(n.from_uid, n));

  const cards = [];

  pendentesRecebidos.forEach(n => {
    const u = byId.get(n.from_uid);
    if (!u) return;
    cards.push(renderCard('pedido', u, false, false, n));
  });

  accepted
    .map(a => byId.get(a.friend_uid))
    .filter(Boolean)
    .sort((a, b) => {
      const ao = isOnline(a.lastUpdate || a.lastupdate) ? 1 : 0;
      const bo = isOnline(b.lastUpdate || b.lastupdate) ? 1 : 0;
      if (notifMap.has(a.uid) !== notifMap.has(b.uid)) return notifMap.has(b.uid) ? 1 : -1;
      if (ao !== bo) return bo - ao;
      return String(a.name || '').localeCompare(String(b.name || ''));
    })
    .slice(0, 10)
    .forEach(u => {
      cards.push(renderCard('amigo', u, isOnline(u.lastUpdate || u.lastupdate), notifMap.has(u.uid), notifMap.get(u.uid)));
    });

  listaAmigosSidebar.innerHTML = '';
  cards.forEach(c => listaAmigosSidebar.appendChild(c));
}

function renderCard(tipo, row, online, hasMsg, extra) {
  const user = {
    uid: row.uid,
    name: row.name || 'Herói',
    points: row.points || 0,
    photoURL: row.photoURL || row.photourl || gerarAvatarPadrao(row.name)
  };
  const card = document.createElement('div');
  card.className = 'friend-card';
  if (tipo === 'pedido') card.classList.add('pending-card');
  if (hasMsg) card.classList.add('has-msg');
  const statusColor = online ? '#4ef7a0' : '#ff6666';

  if (tipo === 'pedido') {
    card.innerHTML = `
      <div class="friend-main">
        <img src="${user.photoURL}" class="friend-avatar" alt="">
        <div class="friend-meta">
          <div class="friend-name">✉ ${escapeHtml(user.name)}</div>
          <div class="friend-sub">Pedido de amizade pendente</div>
        </div>
      </div>
      <div class="friend-actions-mini">
        <button class="glass-btn gold mini">Aceitar</button>
        <button class="glass-btn red mini">Recusar</button>
      </div>`;
    const [aceitar, recusar] = card.querySelectorAll('button');
    aceitar.onclick = () => responderPedido(extra.id, extra.from_uid, true);
    recusar.onclick = () => responderPedido(extra.id, extra.from_uid, false);
    return card;
  }

  card.innerHTML = `
    <div class="friend-main">
      <div class="avatar-wrap">
        <img src="${user.photoURL}" class="friend-avatar" alt="">
        <span class="status-dot" style="background:${statusColor}"></span>
        ${hasMsg ? '<span class="msg-pulse">✉</span>' : ''}
      </div>
      <div class="friend-meta">
        <div class="friend-name">${escapeHtml(user.name)}</div>
        <div class="friend-sub">${online ? 'Online' : 'Offline'} · ${user.points} pts ${hasMsg ? '· msg' : ''}</div>
      </div>
    </div>`;
  card.onclick = () => hasMsg ? window.abrirChat(user.uid, user.name) : window.verPerfilDetalhado(user.uid);
  return card;
}

async function responderPedido(notifId, fromUid, aceitar) {
  const me = await getCurrentAuthUser();
  if (!me) return;
  if (aceitar) {
    await supabase.from('friends').upsert([
      { uid: me.id, friend_uid: fromUid, status: 'accepted', created_at: nowIso() },
      { uid: fromUid, friend_uid: me.id, status: 'accepted', created_at: nowIso() }
    ], { onConflict: 'uid,friend_uid' }).catch(async () => {
      await supabase.from('friends').update({ status: 'accepted' }).eq('uid', me.id).eq('friend_uid', fromUid);
      await supabase.from('friends').update({ status: 'accepted' }).eq('uid', fromUid).eq('friend_uid', me.id);
    });
  } else {
    await supabase.from('friends').delete().eq('uid', me.id).eq('friend_uid', fromUid);
  }
  await supabase.from('notificacoes').update({ lida: true }).eq('id', notifId);
  await carregarSidebar(me.id);
}

async function buscarAmigos(termo, myUid) {
  const { data } = await supabase.from('users').select('*').ilike('name', `%${termo}%`).limit(15);
  const friends = await obterAmigos(myUid);
  const set = new Set(friends.filter(f => f.status === 'accepted').map(f => f.friend_uid));
  resultadosBusca.innerHTML = '';
  (data || []).filter(u => u.uid !== myUid).forEach(u => {
    const foto = u.photoURL || u.photourl || gerarAvatarPadrao(u.name);
    const card = document.createElement('div');
    card.className = 'search-card';
    card.innerHTML = `
      <img src="${foto}" class="search-avatar" alt="">
      <div class="search-info">
        <div class="search-name">${escapeHtml(u.name || 'Herói')}</div>
        <div class="search-sub">${u.points || 0} pts</div>
      </div>
      <div class="search-actions">
        <button class="glass-btn gray mini">Perfil</button>
        ${set.has(u.uid) ? '<button class="glass-btn gold mini">Msg</button>' : '<button class="glass-btn gold mini">+Amigo</button>'}
      </div>`;
    const buttons = card.querySelectorAll('button');
    buttons[0].onclick = (e) => { e.stopPropagation(); window.verPerfilDetalhado(u.uid); };
    buttons[1].onclick = async (e) => {
      e.stopPropagation();
      if (set.has(u.uid)) window.abrirChat(u.uid, u.name);
      else await enviarPedidoAmizade(u.uid);
    };
    resultadosBusca.appendChild(card);
  });
  if (!resultadosBusca.innerHTML) resultadosBusca.innerHTML = '<div class="empty-state small">Nenhum amigo encontrado.</div>';
}

async function enviarPedidoAmizade(destinoUid) {
  const me = await getCurrentAuthUser();
  if (!me) return;
  const { data: meus } = await supabase.from('friends').select('id').eq('uid', me.id);
  if ((meus || []).length >= MAX_AMIGOS) {
    alert('Limite de 1000 amigos atingido.');
    return;
  }
  await supabase.from('friends').upsert({ uid: me.id, friend_uid: destinoUid, status: 'pending', created_at: nowIso() }, { onConflict: 'uid,friend_uid' });
  await supabase.from('notificacoes').insert({
    to_uid: destinoUid,
    from_uid: me.id,
    tipo: 'pedido_amizade',
    mensagem: 'Pedido de amizade',
    lida: false,
    created_at: nowIso()
  });
  const toast = document.createElement('div');
  toast.className = 'glass-toast';
  toast.textContent = 'Pedido enviado com sucesso';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2200);
}


window.verPerfilDetalhado = async function (uid) {
  const me = await getCurrentAuthUser();
  if (!me) return;
  const [resumo, friendsRows, badgesRows] = await Promise.all([
    obterResumoUsuario(uid),
    supabase.from('friends').select('status').eq('uid', me.id).eq('friend_uid', uid).maybeSingle(),
    supabase.from('user_badges').select('badge_id').eq('uid', uid).eq('conquistada', true)
  ]);
  const jaAmigo = friendsRows.data?.status === 'accepted';
  const isMe = me.id === uid;
  const idade = calcularIdade(resumo.user.dataNascimento);
  const foto = resumo.user.photoURL || gerarAvatarPadrao(resumo.user.name);

  abrirOverlay(`
    <div class="profile-modal glass-panel">
      <div class="screen-topbar">
        <button class="back-arrow" onclick="window.fecharMenuPerfil()">←</button>
        <h2>Perfil</h2>
      </div>
      <div class="profile-body">
        <img src="${foto}" class="profile-photo-large" alt="">
        <div class="profile-name">${escapeHtml(resumo.user.name)}</div>
        <div class="profile-list">
          <div><span>Nome</span><strong>${escapeHtml(resumo.user.name)}</strong></div>
          <div><span>Nível</span><strong>${resumo.user.nivel}</strong></div>
          <div><span>Idade</span><strong>${idade}</strong></div>
          <div><span>Livros lidos</span><strong>${resumo.livrosLidos}</strong></div>
          <div><span>Troféus conquistados</span><strong>${(badgesRows.data || []).length}</strong></div>
        </div>
        ${isMe ? '<button id="btn-mudar-foto-perfil" class="glass-btn gold full">Mudar foto</button>' : ''}
        <div class="profile-actions">
          <button id="btn-ver-trofeus-perfil" class="glass-btn gray full">Troféus</button>
          ${isMe ? '' : (jaAmigo ? `<button id="btn-msg-perfil" class="glass-btn gold full">Enviar mesg</button>` : `<button id="btn-add-perfil" class="glass-btn gold full">+Amigo</button>`)}
        </div>
      </div>
    </div>`);

  document.getElementById('btn-ver-trofeus-perfil')?.addEventListener('click', () => window.abrirTrofeusDePerfil(uid));

  if (isMe) {
    document.getElementById('btn-mudar-foto-perfil')?.addEventListener('click', () => {
      const input = document.getElementById('foto-input');
      input?.setAttribute('data-update-mode', 'true');
      input?.click();
    });
  } else if (jaAmigo) {
    document.getElementById('btn-msg-perfil')?.addEventListener('click', () => window.abrirChat(uid, resumo.user.name));
  } else {
    document.getElementById('btn-add-perfil')?.addEventListener('click', () => window.adicionarAmigo(uid));
  }
};

window.abrirTrofeusDePerfil = async function (uid) {
  const [{ data: userRow }, { data: badgeRows }, { data: unlocked }] = await Promise.all([
    supabase.from('users').select('*').eq('uid', uid).maybeSingle(),
    supabase.from('badges').select('*').order('id'),
    supabase.from('user_badges').select('badge_id').eq('uid', uid).eq('conquistada', true)
  ]);
  const unlockedSet = new Set((unlocked || []).map(x => x.badge_id));
  abrirOverlay(`
    <div class="profile-modal glass-panel">
      <div class="screen-topbar">
        <button class="back-arrow" onclick="window.verPerfilDetalhado('${uid}')">←</button>
        <h2>Troféus</h2>
      </div>
      <div class="trophy-grid">
        ${(badgeRows || []).map(b => `<div class="trophy-card ${unlockedSet.has(b.id) ? 'won' : ''}">
          <div class="trophy-icon">${b.icone || '🏅'}</div>
          <div class="trophy-name">${escapeHtml(b.nome)}</div>
          <div class="trophy-desc">${escapeHtml(b.descricao || '')}</div>
        </div>`).join('')}
      </div>
    </div>`);
};

window.fecharMenuPerfil = fecharOverlayPerfil;

window.adicionarAmigo = async function (amigoId) {
  await enviarPedidoAmizade(amigoId);
};

export function iniciarSocial(user) {
  if (!user) return;
  if (canalFriends) supabase.removeChannel(canalFriends);
  if (canalNotifs) supabase.removeChannel(canalNotifs);
  if (canalUsers) supabase.removeChannel(canalUsers);
  if (hbTimer) clearInterval(hbTimer);

  carregarSidebar(user.id);
  atualizarHeartbeat(user.id);
  hbTimer = setInterval(() => atualizarHeartbeat(user.id), 45000);

  canalFriends = supabase.channel('friends-live-' + user.id)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'friends', filter: `uid=eq.${user.id}` }, () => carregarSidebar(user.id))
    .subscribe();

  canalNotifs = supabase.channel('notif-live-' + user.id)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'notificacoes', filter: `to_uid=eq.${user.id}` }, () => carregarSidebar(user.id))
    .subscribe();

  canalUsers = supabase.channel('users-live-sidebar-' + user.id)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'users' }, () => carregarSidebar(user.id))
    .subscribe();

  document.getElementById('user-profile-pic')?.addEventListener('click', () => window.verPerfilDetalhado(user.id));

  if (inputBusca && resultadosBusca) {
    let timer = null;
    inputBusca.placeholder = 'Buscar amigo';
    inputBusca.oninput = () => {
      clearTimeout(timer);
      const termo = inputBusca.value.trim();
      if (termo.length < 2) {
        resultadosBusca.innerHTML = '';
        return;
      }
      timer = setTimeout(() => buscarAmigos(termo, user.id), 250);
    };
  }
}
