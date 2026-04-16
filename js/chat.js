// js/chat.js
import { supabase } from './config.js';

let monitor = null;
let roomChannel = null;
let userStatusChannel = null;
let chatAbertoCom = null;
let chatLoadToken = 0;

const EMOJIS_CHAT = [
  '😀','😁','😂','🤣','😃','😄',
  '😅','😆','😉','😊','😋','😎',
  '😍','🥰','😘','😗','😙','😚',
  '☺️','🙂','🙃','😇','🤩','🥳',
  '😏','🧐','🤔','🫡','🤨','😐',
  '😑','😶','🙄','😌','😴','😜',
  '🤭','🥹','😭','😮','😢','😅',
  '🤠','😵','🤯','😺','🙏','🙌',
  '👏','👋','👍','👎','👊','👌',
  '🤙','💪','🦾','🤝','🤞','🤟',
  '🫶','🤲','🫂','🙋','☝️','👇',
  '👆','👉','👈','❤️','🧡','💛',
  '💚','💙','💜','🤎','🖤','🤍',
  '💖','💝','✨','🔥','🌟','⭐',
  '💫','💥','⚡','💯','⚔️','🛡️',
  '🏹','🗡️','🪓','⛓️','⚒️','⚓',
  '🔱','👑','💎','🏆','🏅','🥇',
  '🪙','💰','🗝️','📜','📖','🕯️',
  '🪔','🔔','📯','🎺','🏛️','⛪',
  '✝️','🛐','🦁','🦅','🕊️','🐑',
  '🐟','🐍','🐎','🐫','🐂','🌿',
  '🍀','🍃','🌻','🌺','🌹','🌸',
  '🌱','🌍','☀️','🌙','☁️','🌊',
  '⛰️','🌈','💧','🍞','🥖','🍇',
  '🍯','🍷','🍎','🌽','☕','🎉',
  '🎊','🎯','🎁','🎶','🎵','💡',
  '📍','📩','💬','✅','❗','🚀',
  '🛸'
];
function escapeHtml(texto = '') {
  return String(texto)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function avatar(nome = '?') {
  const ini = String(nome || '?')
    .split(' ')
    .map(p => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || '?';

  return `data:image/svg+xml;base64,${btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <rect width="100%" height="100%" fill="#d4a21e"/>
      <text x="50%" y="54%" text-anchor="middle" font-family="Arial" font-size="86" font-weight="700" fill="#fff">${ini}</text>
    </svg>`
  )}`;
}

function online(user) {
  const t = user?.lastUpdate || user?.lastupdate;
  return !!(t && (Date.now() - new Date(t).getTime() < 90000));
}

async function getMe() {
  const { data: { user } } = await supabase.auth.getUser();
  return user || null;
}

async function getUser(uid) {
  const { data } = await supabase.from('users').select('*').eq('uid', uid).single();
  return data || null;
}

function getChatWindow() {
  return document.getElementById('janela-chat');
}

function getChatMessagesBox() {
  return document.getElementById('chat-messages');
}

function chatEstaAbertoCom(uid) {
  const win = getChatWindow();
  return !!(win && chatAbertoCom && chatAbertoCom === uid);
}

function removerToastsDoContato(uid) {
  document.querySelectorAll(`.msg-toast[data-from-uid="${uid}"]`).forEach(el => el.remove());
}

function scrollChatParaBaixo() {
  const box = getChatMessagesBox();
  if (!box) return;
  box.scrollTop = box.scrollHeight;
}

async function marcarLidas(meuId, amigoId) {
  await supabase
    .from('mensagens')
    .update({ lida: true })
    .eq('de', amigoId)
    .eq('para', meuId)
    .eq('lida', false);

  await supabase
    .from('notificacoes')
    .update({ lida: true })
    .eq('to_uid', meuId)
    .eq('from_uid', amigoId)
    .eq('tipo', 'mensagem')
    .eq('lida', false);
}

async function carregarMensagens(meuId, amigoId) {
  const token = ++chatLoadToken;
  const box = getChatMessagesBox();
  if (!box) return;

  const { data = [], error } = await supabase
    .from('mensagens')
    .select('*')
    .or(`and(de.eq.${meuId},para.eq.${amigoId}),and(de.eq.${amigoId},para.eq.${meuId})`)
    .order('createdat', { ascending: true });

  if (error) {
    console.error('[chat] erro ao carregar mensagens:', error);
    return;
  }

  if (token !== chatLoadToken) return;

  const win = getChatWindow();
  if (!win || chatAbertoCom !== amigoId) return;

  box.innerHTML = '';

  data.forEach(m => {
    const mine = m.de === meuId;
    const wrap = document.createElement('div');
    wrap.className = 'msg-wrap ' + (mine ? 'mine' : 'other');

    wrap.innerHTML = `
      <div class="msg-bubble">${escapeHtml(m.mensagem || '')}</div>
      ${mine ? `<div class="msg-state">${m.lida ? '✓✓ lido' : '✓ enviado'}</div>` : ''}
    `;

    box.appendChild(wrap);
  });

  scrollChatParaBaixo();
  await marcarLidas(meuId, amigoId);
}

function montarPainelEmoji(win) {
  const panel = win.querySelector('#chat-emoji-panel');
  if (!panel) return;

  panel.innerHTML = EMOJIS_CHAT.map(e => {
    return `<button type="button" class="chat-emoji-item" data-emoji="${e}">${e}</button>`;
  }).join('');

  panel.querySelectorAll('.chat-emoji-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = win.querySelector('#chat-input');
      if (!input) return;
      input.value += btn.dataset.emoji || '';
      input.focus();
    });
  });
}

function togglePainelEmoji(win, forceOpen = null) {
  const panel = win.querySelector('#chat-emoji-panel');
  if (!panel) return;

  const abrir = forceOpen === null ? panel.classList.contains('hidden') : !!forceOpen;
  panel.classList.toggle('hidden', !abrir);
}

window.abrirChat = async function (amigoId, nome = '') {
  document.getElementById('perfil-detalhado')?.remove();
  document.getElementById('janela-chat')?.remove();

  if (roomChannel) {
    supabase.removeChannel(roomChannel);
    roomChannel = null;
  }

  if (userStatusChannel) {
    supabase.removeChannel(userStatusChannel);
    userStatusChannel = null;
  }

  const me = await getMe();
  if (!me) return;

  const amigo = await getUser(amigoId);
  const nomeAmigo = amigo?.name || nome || 'Amigo';
  const foto = amigo?.photoURL || amigo?.photourl || avatar(nomeAmigo);

  chatAbertoCom = amigoId;
  removerToastsDoContato(amigoId);

  const win = document.createElement('div');
  win.id = 'janela-chat';
  win.className = 'chat-window';
  win.innerHTML = `
    <div class="chat-top">
      <button class="chat-back" type="button">←</button>
      <img class="chat-avatar" src="${foto}" alt="${escapeHtml(nomeAmigo)}">
      <div class="chat-head">
        <strong>${escapeHtml(nomeAmigo)}</strong>
        <span id="chat-status">${online(amigo) ? 'Online' : 'Offline'}</span>
      </div>
    </div>

    <div id="chat-messages" class="chat-messages"></div>

    <div class="chat-actions-bar">
      <button id="chat-emoji-toggle" class="chat-action-btn" type="button" title="Emojis">😊</button>
    </div>

    <div id="chat-emoji-panel" class="chat-emoji-panel hidden"></div>

    <div class="chat-bottom">
      <input id="chat-input" placeholder="Digite sua mensagem" autocomplete="off">
      <button id="chat-send" type="button">➤</button>
    </div>
  `;

  document.body.appendChild(win);

  montarPainelEmoji(win);

  win.querySelector('.chat-back')?.addEventListener('click', () => window.fecharChatAtivo());

  win.querySelector('#chat-emoji-toggle')?.addEventListener('click', () => {
    togglePainelEmoji(win);
  });

  win.querySelector('#chat-messages')?.addEventListener('click', () => {
    togglePainelEmoji(win, false);
  });

  await carregarMensagens(me.id, amigoId);

  async function enviar() {
    const input = win.querySelector('#chat-input');
    const texto = input?.value.trim();
    if (!texto) return;

    input.value = '';
    togglePainelEmoji(win, false);

    const agora = new Date().toISOString();

    const { error: msgError } = await supabase.from('mensagens').insert({
      de: me.id,
      para: amigoId,
      mensagem: texto,
      lida: false,
      createdat: agora
    });

    if (msgError) {
      console.error('[chat] erro ao enviar mensagem:', msgError);
      return;
    }

    const { error: notifError } = await supabase.from('notificacoes').insert({
      to_uid: amigoId,
      from_uid: me.id,
      tipo: 'mensagem',
      mensagem: texto.slice(0, 120),
      lida: false,
      created_at: agora
    });

    if (notifError) {
      console.warn('[chat] erro ao criar notificação:', notifError);
    }

    await carregarMensagens(me.id, amigoId);
  }

  win.querySelector('#chat-send')?.addEventListener('click', enviar);

  win.querySelector('#chat-input')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') enviar();
  });

  roomChannel = supabase
    .channel('room-' + [me.id, amigoId].sort().join('-'))
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'mensagens' },
      async (payload) => {
        const r = payload.new || payload.old;
        if (!r) return;

        const ok =
          (r.de === me.id && r.para === amigoId) ||
          (r.de === amigoId && r.para === me.id);

        if (!ok) return;
        if (!chatEstaAbertoCom(amigoId)) return;

        await carregarMensagens(me.id, amigoId);
      }
    )
    .subscribe();

  userStatusChannel = supabase
    .channel('chat-user-' + amigoId)
    .on(
      'postgres_changes',
      {
        event: 'UPDATE',
        schema: 'public',
        table: 'users',
        filter: `uid=eq.${amigoId}`
      },
      (payload) => {
        const el = document.getElementById('chat-status');
        if (el) el.textContent = online(payload.new) ? 'Online' : 'Offline';
      }
    )
    .subscribe();
};

window.fecharChatAtivo = function () {
  document.getElementById('janela-chat')?.remove();
  chatAbertoCom = null;
  chatLoadToken++;

  if (roomChannel) {
    supabase.removeChannel(roomChannel);
    roomChannel = null;
  }

  if (userStatusChannel) {
    supabase.removeChannel(userStatusChannel);
    userStatusChannel = null;
  }
};

export function iniciarMonitorChat(user) {
  if (monitor) {
    supabase.removeChannel(monitor);
    monitor = null;
  }

  if (!user) return;

  monitor = supabase
    .channel('monitor-notif-' + user.id)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'notificacoes',
        filter: `to_uid=eq.${user.id}`
      },
      async (payload) => {
        const n = payload.new;
        if (!n || n.lida) return;
        if ((n.tipo || '') !== 'mensagem') return;

        const from = await getUser(n.from_uid);
        const nomeFrom = from?.name || 'Amigo';

        // FIX: se o chat já estiver aberto com essa pessoa,
        // atualiza a conversa por dentro e NÃO mostra toast fora.
        if (chatEstaAbertoCom(n.from_uid)) {
          await carregarMensagens(user.id, n.from_uid);
          removerToastsDoContato(n.from_uid);
          return;
        }

        removerToastsDoContato(n.from_uid);

        const box = document.createElement('div');
        box.className = 'msg-toast';
        box.dataset.fromUid = n.from_uid;
        box.innerHTML = `
          <div class="msg-toast-title">✉ Msg</div>
          <div class="msg-toast-body">${escapeHtml(nomeFrom)}: ${escapeHtml(n.mensagem || '')}</div>
        `;

        box.addEventListener('click', () => {
          box.remove();
          window.abrirChat(n.from_uid, nomeFrom);
        });

        document.body.appendChild(box);
        setTimeout(() => box.remove(), 8000);
      }
    )
    .subscribe();
}