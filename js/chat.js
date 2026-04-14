// js/chat.js — Migrado para Supabase
// ═══════════════════════════════════════════════════════════
// SISTEMA DE CHAT — tempo real, notificações e leitura
// ═══════════════════════════════════════════════════════════

import { supabase } from './config.js';

window.chatAtivo = null;
let currentRoomId = null;
let currentChatChannel = null;
let currentNotifChannel = null;
let currentUserRowChannel = null;
let monitorNotifChannel = null;
let _knownNotifIds = new Set();

function getChatRoomId(uid1, uid2) {
  return uid1 < uid2 ? `${uid1}_${uid2}` : `${uid2}_${uid1}`;
}

function isChatBetween(row, a, b) {
  return (
    (row.from_uid === a && row.to_uid === b) ||
    (row.from_uid === b && row.to_uid === a)
  );
}

async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user || null;
}

async function getUserByUid(uid) {
  const { data } = await supabase.from('users').select('uid, name, photoURL, lastUpdate').eq('uid', uid).single();
  return data || null;
}

function formatStatus(lastUpdate) {
  if (!lastUpdate) return { text: '<span style="color:#777;">● Offline</span>', color: '#555' };
  const diff = Date.now() - new Date(lastUpdate).getTime();
  const online = diff < 90000;
  return online
    ? { text: '<span style="color:#2ecc71;">● Online agora</span>', color: '#2ecc71' }
    : { text: '<span style="color:#777;">● Offline</span>', color: '#555' };
}

window.tocarBipi = function () {
  try {
    const ctx  = new (window.AudioContext || window.webkitAudioContext)();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.value = 800; osc.type = 'sine';
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    osc.start(); osc.stop(ctx.currentTime + 0.12);
  } catch (_) {}
};

async function salvarNotificacaoPendente(destinatarioId, remetenteId, nomeRemetente, texto) {
  await supabase.from('notificacoes').insert({
    to_uid: destinatarioId,
    from_uid: remetenteId,
    nome: nomeRemetente,
    preview: texto.substring(0, 60),
    lida: false
  });
}

async function marcarNotificacaoComoLida(meuId, amigoId) {
  await supabase
    .from('notificacoes')
    .update({ lida: true })
    .eq('to_uid', meuId)
    .eq('from_uid', amigoId)
    .eq('lida', false);
}

function exibirNotificacao(amigoId, nomeAmigo, preview) {
  document.getElementById(`notif-${amigoId}`)?.remove();
  const box = document.createElement('div');
  box.id = `notif-${amigoId}`;
  box.style.cssText = `
    position:fixed; bottom:20px; right:20px; background:#1a1a1a; color:#d4af37;
    padding:15px; border-radius:12px; z-index:10000; cursor:pointer;
    border:2px solid #d4af37; box-shadow:0 5px 20px rgba(0,0,0,0.5);
    font-family:'Poppins'; max-width:300px; animation:slideUp 0.4s ease;
  `;
  box.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
      <strong>📬 ${nomeAmigo}</strong>
      <span onclick="event.stopPropagation(); this.parentElement.parentElement.remove();"
        style="color:#555; font-size:1.1rem; cursor:pointer; padding:0 4px;">✕</span>
    </div>
    <div style="color:white; font-size:0.85rem;">${preview || ''}${(preview || '').length >= 60 ? '…' : ''}</div>
    <div style="color:#555; font-size:0.7rem; margin-top:6px;">Toque para responder</div>
  `;
  box.onclick = () => { window.abrirChat(amigoId, nomeAmigo); box.remove(); };
  document.body.appendChild(box);
  setTimeout(() => box?.remove(), 8000);
}

function renderizarMensagem(m, meuId) {
  const isMe = m.from_uid === meuId;

  const wrapper = document.createElement('div');
  wrapper.style.cssText = `display:flex; flex-direction:column; align-items:${isMe ? 'flex-end' : 'flex-start'}; margin-bottom:4px;`;

  const bolha = document.createElement('div');
  bolha.style.cssText = `
    max-width:75%; padding:10px 14px;
    border-radius:${isMe ? '18px 18px 4px 18px' : '18px 18px 18px 4px'};
    background:${isMe ? '#d4af37' : '#2a2a2a'};
    color:${isMe ? '#000' : '#f1e7d0'};
    font-size:0.92rem; line-height:1.4; word-break:break-word;
    box-shadow:0 2px 6px rgba(0,0,0,0.3);
  `;
  bolha.innerText = m.mensagem || '';
  wrapper.appendChild(bolha);

  if (isMe) {
    const status = document.createElement('div');
    status.id = `status-msg-${m.id}`;
    status.style.cssText = 'font-size:0.65rem; color:#888; margin-top:3px; margin-right:4px;';
    status.innerHTML = m.lida
      ? `<span style="color:#d4af37;">✓✓ lido</span>`
      : `<span>✓ enviado</span>`;
    wrapper.appendChild(status);
  }

  return wrapper;
}

async function carregarMensagens(meuId, amigoId) {
  const msgContainer = document.getElementById('chat-messages');
  if (!msgContainer) return;

  const { data: msgs } = await supabase
    .from('chat')
    .select('*')
    .or(`and(from_uid.eq.${meuId},to_uid.eq.${amigoId}),and(from_uid.eq.${amigoId},to_uid.eq.${meuId})`)
    .order('ts', { ascending: true });

  msgContainer.innerHTML = '';
  (msgs || []).forEach((m) => msgContainer.appendChild(renderizarMensagem(m, meuId)));
  msgContainer.scrollTop = msgContainer.scrollHeight;

  await supabase
    .from('chat')
    .update({ lida: true })
    .eq('from_uid', amigoId)
    .eq('to_uid', meuId)
    .eq('lida', false);
}

function limparCanaisChat() {
  if (currentChatChannel) { supabase.removeChannel(currentChatChannel); currentChatChannel = null; }
  if (currentNotifChannel) { supabase.removeChannel(currentNotifChannel); currentNotifChannel = null; }
  if (currentUserRowChannel) { supabase.removeChannel(currentUserRowChannel); currentUserRowChannel = null; }
}

window.abrirChat = async function (amigoId, nomeAmigo) {
  const user = await getCurrentUser();
  if (!user) return;

  const meuId = user.id;
  const roomId = getChatRoomId(meuId, amigoId);
  currentRoomId = roomId;

  await marcarNotificacaoComoLida(meuId, amigoId);

  if (window.chatAtivo?.roomId === roomId) {
    document.getElementById('chat-input')?.focus();
    return;
  }

  limparCanaisChat();
  document.getElementById('janela-chat')?.remove();

  window.chatAtivo = { amigoId, nomeAmigo, roomId };

  const amigo = await getUserByUid(amigoId);
  const fotoAmigo = amigo?.photoURL || 'https://i.imgur.com/6VBx3io.png';
  const statusInfo = formatStatus(amigo?.lastUpdate);

  const chatWin = document.createElement('div');
  chatWin.id = 'janela-chat';
  chatWin.className = 'chat-window';
  chatWin.innerHTML = `
    <div style="background:#2d241c; border-bottom:2px solid #d4af37; color:#d4af37; padding:12px 15px; display:flex; align-items:center; gap:12px;">
      <button onclick="window.fecharChatAtivo()" style="background:none; border:none; color:#d4af37; cursor:pointer; font-size:1.8rem; line-height:1;">←</button>
      <div style="position:relative;">
        <img id="chat-foto-amigo" src="${fotoAmigo}" style="width:45px; height:45px; border-radius:50%; border:2px solid #d4af37; object-fit:cover;" onerror="this.src='https://i.imgur.com/6VBx3io.png'">
        <div id="chat-bolinha-status" style="position:absolute; bottom:1px; right:1px; width:12px; height:12px; border-radius:50%; background:${statusInfo.color}; border:2px solid #2d241c;"></div>
      </div>
      <div style="flex:1;">
        <div style="font-family:'Cinzel'; font-weight:bold; font-size:1.05rem; letter-spacing:1px;">${(nomeAmigo || '').toUpperCase()}</div>
        <div id="chat-status-texto" style="font-size:0.72rem; font-family:'Poppins'; color:#aaa;">${statusInfo.text}</div>
      </div>
      <div style="font-family:'Cinzel'; font-size:0.55rem; opacity:0.4; text-align:right;">HEBREUS 11:1</div>
    </div>

    <div id="chat-messages" style="flex:1; overflow-y:auto; padding:16px 14px; display:flex; flex-direction:column; gap:6px; background:#120c06;"></div>

    <div style="padding:12px 15px; background:#2d241c; display:flex; gap:10px; align-items:center; border-top:1px solid #4a3b2b;">
      <input type="text" id="chat-input" placeholder="Digite sua mensagem…" autocomplete="off" style="flex:1; padding:12px 18px; border-radius:30px; border:1px solid #4a3b2b; background:#1a120b; color:#f1e7d0; outline:none; font-size:1rem;">
      <button id="chat-send" style="background:#d4af37; border:none; width:48px; height:48px; border-radius:50%; cursor:pointer; display:flex; justify-content:center; align-items:center; box-shadow:0 4px 10px rgba(0,0,0,0.3); font-size:1.2rem;">🕊️</button>
    </div>
  `;
  document.body.appendChild(chatWin);

  await carregarMensagens(meuId, amigoId);

  currentChatChannel = supabase
    .channel('chat-room-' + roomId)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'chat' }, async (payload) => {
      const row = payload.new || payload.old;
      if (!row || !isChatBetween(row, meuId, amigoId)) return;
      await carregarMensagens(meuId, amigoId);
    })
    .subscribe();

  currentNotifChannel = supabase
    .channel('notif-chat-' + roomId)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'notificacoes', filter: `to_uid=eq.${meuId}` }, async (payload) => {
      const row = payload.new || payload.old;
      if (!row || row.from_uid !== amigoId) return;
      await marcarNotificacaoComoLida(meuId, amigoId);
    })
    .subscribe();

  currentUserRowChannel = supabase
    .channel('friend-user-' + amigoId)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'users', filter: `uid=eq.${amigoId}` }, (payload) => {
      const row = payload.new;
      if (!row) return;
      const img = document.getElementById('chat-foto-amigo');
      if (img && row.photoURL) img.src = row.photoURL;
      const status = formatStatus(row.lastUpdate);
      const bolinha = document.getElementById('chat-bolinha-status');
      const texto = document.getElementById('chat-status-texto');
      if (bolinha) bolinha.style.background = status.color;
      if (texto) texto.innerHTML = status.text;
    })
    .subscribe();

  const input = document.getElementById('chat-input');
  const btnSend = document.getElementById('chat-send');

  const acaoEnviar = async () => {
    const texto = input.value.trim();
    if (!texto) return;
    input.value = '';

    const meuUser = await getUserByUid(meuId);
    const meuNomeReal = meuUser?.name || 'Herói';

    const { error } = await supabase.from('chat').insert({
      from_uid: meuId,
      to_uid: amigoId,
      mensagem: texto,
      lida: false
    });
    if (error) {
      console.error('[chat] erro ao enviar:', error);
      return;
    }

    await salvarNotificacaoPendente(amigoId, meuId, meuNomeReal, texto);
  };

  btnSend.onclick = acaoEnviar;
  input.onkeypress = (e) => { if (e.key === 'Enter') acaoEnviar(); };

  setTimeout(() => input.focus(), 300);
};

window.fecharChatAtivo = async function () {
  limparCanaisChat();
  document.getElementById('janela-chat')?.remove();
  window.chatAtivo = null;
  currentRoomId = null;
};

export function iniciarMonitorChat(user) {
  if (monitorNotifChannel) {
    supabase.removeChannel(monitorNotifChannel);
    monitorNotifChannel = null;
  }
  if (!user) return;

  // Busca inicial de notificações não lidas
  carregarNotificacoesPendentes(user.id);

  monitorNotifChannel = supabase
    .channel('monitor-notifs-' + user.id)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'notificacoes', filter: `to_uid=eq.${user.id}` }, async (payload) => {
      const row = payload.new;
      if (!row || row.lida) return;
      if (_knownNotifIds.has(row.id)) return;
      _knownNotifIds.add(row.id);

      if (window.chatAtivo?.amigoId === row.from_uid) {
        await marcarNotificacaoComoLida(user.id, row.from_uid);
        return;
      }

      const remetente = await getUserByUid(row.from_uid);
      exibirNotificacao(row.from_uid, row.nome || remetente?.name || 'Herói', row.preview || 'Nova mensagem');
      window.tocarBipi();
    })
    .subscribe();
}

async function carregarNotificacoesPendentes(meuId) {
  const { data: rows } = await supabase
    .from('notificacoes')
    .select('*')
    .eq('to_uid', meuId)
    .eq('lida', false)
    .order('ts', { ascending: false });

  for (const notif of (rows || [])) {
    _knownNotifIds.add(notif.id);
    if (window.chatAtivo?.amigoId === notif.from_uid) {
      await marcarNotificacaoComoLida(meuId, notif.from_uid);
      continue;
    }
    const remetente = await getUserByUid(notif.from_uid);
    exibirNotificacao(notif.from_uid, notif.nome || remetente?.name || 'Herói', notif.preview || 'Nova mensagem');
  }
}

const style = document.createElement('style');
style.textContent = `
  @keyframes slideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
`;
document.head.appendChild(style);

console.log('✅ Sistema de Chat (Supabase) carregado!');
