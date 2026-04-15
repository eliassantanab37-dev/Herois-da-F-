import { supabase } from './config.js';
import { buscarUsuario, escapeHtml, gerarAvatarPadrao, getCurrentAuthUser, isOnline, nowIso } from './app-core.js';

let channelMensagens = null;
let channelNotifs = null;
let channelStatus = null;
let channelMonitor = null;

function limparCanais() {
  [channelMensagens, channelNotifs, channelStatus, channelMonitor].forEach(ch => ch && supabase.removeChannel(ch));
  channelMensagens = null;
  channelNotifs = null;
  channelStatus = null;
}

function statusTexto(last) {
  return isOnline(last) ? '● Online' : '● Offline';
}

async function marcarMensagensLidas(meuId, amigoId) {
  await supabase.from('mensagens').update({ lida: true }).eq('de', amigoId).eq('para', meuId).eq('lida', false);
  await supabase.from('notificacoes').update({ lida: true }).eq('to_uid', meuId).eq('from_uid', amigoId).eq('tipo', 'mensagem').eq('lida', false);
}

async function renderMensagens(meuId, amigoId) {
  const painel = document.getElementById('chat-messages');
  if (!painel) return;
  const { data } = await supabase
    .from('mensagens')
    .select('*')
    .or(`and(de.eq.${meuId},para.eq.${amigoId}),and(de.eq.${amigoId},para.eq.${meuId})`)
    .order('createdat', { ascending: true });

  painel.innerHTML = '';
  (data || []).forEach(m => {
    const isMe = m.de === meuId;
    const row = document.createElement('div');
    row.className = `msg-row ${isMe ? 'me' : 'other'}`;
    row.innerHTML = `
      <div class="msg-bubble ${isMe ? 'me' : 'other'}">${escapeHtml(m.mensagem || '')}</div>
      <div class="msg-status">${isMe ? (m.lida ? '✓✓ lido' : '✓ enviado') : ''}</div>`;
    painel.appendChild(row);
  });
  painel.scrollTop = painel.scrollHeight;
  await marcarMensagensLidas(meuId, amigoId);
}

function emojiBar() {
  const emojis = ['😀','😂','❤️','🙏','🔥','👏','😊','😎','✨','📖'];
  return `<div id="chat-emoji-bar" class="emoji-bar">${emojis.map(e => `<button type="button" data-emoji="${e}">${e}</button>`).join('')}</div>`;
}

window.abrirChat = async function (amigoId, nomeAmigo = 'Amigo') {
  const me = await getCurrentAuthUser();
  if (!me) return;
  document.getElementById('janela-chat')?.remove();

  const amigo = await buscarUsuario(amigoId);
  const foto = amigo?.photoURL || gerarAvatarPadrao(nomeAmigo);
  const status = statusTexto(amigo?.lastUpdate);

  const box = document.createElement('div');
  box.id = 'janela-chat';
  box.className = 'chat-window glass-panel';
  box.innerHTML = `
    <div class="chat-header">
      <button class="back-arrow" onclick="window.fecharChatAtivo()">←</button>
      <img id="chat-foto-amigo" src="${foto}" class="chat-avatar" alt="">
      <div class="chat-header-text">
        <div class="chat-title">${escapeHtml(nomeAmigo)}</div>
        <div id="chat-status-texto" class="chat-subtitle">${status}</div>
      </div>
    </div>
    <div id="chat-messages" class="chat-messages"></div>
    ${emojiBar()}
    <div class="chat-footer">
      <button id="chat-emoji-toggle" class="glass-btn gray mini">☺</button>
      <input id="chat-input" class="chat-input" placeholder="Escreva sua mensagem">
      <button id="chat-send" class="glass-btn gold mini">Enviar</button>
    </div>`;
  document.body.appendChild(box);

  await renderMensagens(me.id, amigoId);

  const emojiToggle = document.getElementById('chat-emoji-toggle');
  const emoji = document.getElementById('chat-emoji-bar');
  const input = document.getElementById('chat-input');
  const send = document.getElementById('chat-send');
  emojiToggle.onclick = () => emoji.classList.toggle('open');
  emoji.querySelectorAll('button').forEach(btn => btn.onclick = () => { input.value += btn.dataset.emoji; input.focus(); });

  const enviar = async () => {
    const texto = input.value.trim();
    if (!texto) return;
    input.value = '';
    await supabase.from('mensagens').insert({
      de: me.id,
      para: amigoId,
      mensagem: texto,
      lida: false,
      createdat: nowIso()
    });
    await supabase.from('notificacoes').insert({
      to_uid: amigoId,
      from_uid: me.id,
      tipo: 'mensagem',
      mensagem: texto.slice(0, 100),
      lida: false,
      created_at: nowIso()
    });
    await renderMensagens(me.id, amigoId);
  };
  send.onclick = enviar;
  input.onkeydown = (e) => { if (e.key === 'Enter') enviar(); };

  channelMensagens = supabase.channel('mensagens-room-' + me.id + '-' + amigoId)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'mensagens' }, async payload => {
      const row = payload.new || payload.old;
      if (!row) return;
      const pertence = (row.de === me.id && row.para === amigoId) || (row.de === amigoId && row.para === me.id);
      if (pertence) await renderMensagens(me.id, amigoId);
    }).subscribe();

  channelStatus = supabase.channel('status-chat-' + amigoId)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'users', filter: `uid=eq.${amigoId}` }, payload => {
      const row = payload.new;
      document.getElementById('chat-status-texto')?.replaceChildren(document.createTextNode(statusTexto(row.lastUpdate || row.lastupdate)));
      const img = document.getElementById('chat-foto-amigo');
      if (img && (row.photoURL || row.photourl)) img.src = row.photoURL || row.photourl;
    }).subscribe();
};

window.fecharChatAtivo = function () {
  document.getElementById('janela-chat')?.remove();
  limparCanais();
};

function exibirToastMensagem(amigoId, nome, texto) {
  document.getElementById(`notif-${amigoId}`)?.remove();
  const n = document.createElement('div');
  n.id = `notif-${amigoId}`;
  n.className = 'message-toast';
  n.innerHTML = `<div class="message-toast-title">✉ ${escapeHtml(nome)}</div><div class="message-toast-text">${escapeHtml(texto)}</div>`;
  n.onclick = () => { window.abrirChat(amigoId, nome); n.remove(); };
  document.body.appendChild(n);
  setTimeout(() => n.remove(), 7000);
}

export function iniciarMonitorChat(user) {
  if (!user) return;
  if (channelMonitor) supabase.removeChannel(channelMonitor);

  channelMonitor = supabase.channel('chat-monitor-' + user.id)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'notificacoes', filter: `to_uid=eq.${user.id}` }, async payload => {
      const row = payload.new;
      if (!row || row.lida || row.tipo !== 'mensagem') return;
      const remetente = await buscarUsuario(row.from_uid);
      exibirToastMensagem(row.from_uid, remetente?.name || 'Amigo', row.mensagem || 'Nova mensagem');
    }).subscribe();
}
