// js/chat.js
import { supabase } from './config.js';

let monitor = null;
let roomChannel = null;
let userStatusChannel = null;
let chatAbertoCom = null;
let chatLoadToken = 0;
let chatOutsideClickHandler = null;

const EMOJIS_CHAT = [
  '😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊',
  '😋','😎','😍','🥰','😘','😗','😙','😚','☺️','🙂',
  '🙃','😇','🤩','🥳','😏','🧐','🤔','🫡','🤨','😐',
  '😑','😶','🙄','😌','😴','😜','🤭','🥹','😭','😮',
  '😢','🤠','😵','🤯','😺','🙏','🙌','👏','👋','👍',
  '👎','👊','👌','🤙','💪','🦾','🤝','🤞','🤟','🫶',
  '🤲','🫂','🙋','☝️','👇','👆','👉','👈','❤️','🧡',
  '💛','💚','💙','💜','🤎','🖤','🤍','💖','💝','✨',
  '🔥','🌟','⭐','💫','💥','⚡','💯','⚔️','🛡️','🏹',
  '🗡️','🪓','⚒️','🔱','👑','💎','🏆','📜','📖','🕊️'
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
    .map((p) => p[0])
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

function statusClass(user) {
  return online(user) ? 'online' : 'offline';
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
  document.querySelectorAll(`.msg-toast[data-from-uid="${uid}"]`).forEach((el) => el.remove());
}

function scrollChatParaBaixo() {
  const box = getChatMessagesBox();
  if (!box) return;
  box.scrollTop = box.scrollHeight;
}

function fecharPainelEmoji(win) {
  const panel = win?.querySelector('#chat-emoji-panel');
  if (!panel) return;
  panel.classList.add('hidden');
}

function alternarPainelEmoji(win) {
  const panel = win?.querySelector('#chat-emoji-panel');
  if (!panel) return;
  panel.classList.toggle('hidden');
}

function configurarCliqueFora(win) {
  if (chatOutsideClickHandler) {
    document.removeEventListener('click', chatOutsideClickHandler, true);
    chatOutsideClickHandler = null;
  }

  chatOutsideClickHandler = (e) => {
    const panel = win?.querySelector('#chat-emoji-panel');
    const toggle = win?.querySelector('#chat-emoji-toggle');
    if (!panel || !toggle) return;
    if (panel.classList.contains('hidden')) return;
    if (panel.contains(e.target) || toggle.contains(e.target)) return;
    fecharPainelEmoji(win);
  };

  document.addEventListener('click', chatOutsideClickHandler, true);
}

function limparCliqueFora() {
  if (chatOutsideClickHandler) {
    document.removeEventListener('click', chatOutsideClickHandler, true);
    chatOutsideClickHandler = null;
  }
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

  if (!data.length) {
    box.innerHTML = `
      <div class="chat-empty">
        <div class="chat-empty-icon">💬</div>
        <div class="chat-empty-title">Conversa iniciada</div>
        <div class="chat-empty-text">Envie uma mensagem e comece esse momento especial da jornada.</div>
      </div>
    `;
    return;
  }

  box.innerHTML = '';

  data.forEach((m) => {
    const mine = m.de === meuId;
    const wrap = document.createElement('div');
    wrap.className = 'msg-wrap ' + (mine ? 'mine' : 'other');

    wrap.innerHTML = `
      <div class="msg-bubble-wrap">
        <div class="msg-bubble">${escapeHtml(m.mensagem || '').replace(/\n/g, '<br>')}</div>
        <div class="msg-meta">
          ${mine ? `<span class="msg-state">${m.lida ? '✓✓ lido' : '✓ enviado'}</span>` : ''}
        </div>
      </div>
    `;

    box.appendChild(wrap);
  });

  scrollChatParaBaixo();
  await marcarLidas(meuId, amigoId);
}

function montarPainelEmoji(win) {
  const panel = win.querySelector('#chat-emoji-panel');
  if (!panel) return;

  const botoes = EMOJIS_CHAT.map((emoji) => {
    return `<button type="button" class="chat-emoji-item" data-emoji="${emoji}" aria-label="Inserir ${emoji}">${emoji}</button>`;
  }).join('');

  panel.innerHTML = `
    <div class="chat-emoji-panel-head">
      <span>Emojis</span>
      <small>${EMOJIS_CHAT.length} opções</small>
    </div>
    <div class="chat-emoji-grid">${botoes}</div>
  `;

  panel.querySelectorAll('.chat-emoji-item').forEach((btn) => {
    btn.addEventListener('click', () => {
      const input = win.querySelector('#chat-input');
      if (!input) return;
      input.value += btn.dataset.emoji || '';
      input.dispatchEvent(new Event('input'));
      input.focus();
    });
  });
}

function autoResizeTextarea(textarea) {
  if (!textarea) return;
  textarea.style.height = 'auto';
  const min = 96;
  const max = 180;
  textarea.style.height = Math.min(Math.max(textarea.scrollHeight, min), max) + 'px';
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

  limparCliqueFora();

  const me = await getMe();
  if (!me) return;

  const amigo = await getUser(amigoId);
  const nomeAmigo = amigo?.name || nome || 'Amigo';
  const foto = amigo?.photoURL || amigo?.photourl || avatar(nomeAmigo);

  chatAbertoCom = amigoId;
  removerToastsDoContato(amigoId);

  const statusTexto = online(amigo) ? 'Online' : 'Offline';
  const statusCss = statusClass(amigo);

  const win = document.createElement('div');
  win.id = 'janela-chat';
  win.className = 'chat-window';
  win.innerHTML = `
    <div class="chat-top">
      <button class="chat-back" type="button" aria-label="Voltar">←</button>
      <img class="chat-avatar" src="${foto}" alt="${escapeHtml(nomeAmigo)}">
      <div class="chat-head">
        <strong>${escapeHtml(nomeAmigo)}</strong>
        <span id="chat-status" class="${statusCss}">${statusTexto}</span>
      </div>
    </div>

    <div id="chat-messages" class="chat-messages"></div>

    <div class="chat-composer-shell">
      <div class="chat-actions-bar">
        <button id="chat-emoji-toggle" class="chat-action-btn" type="button" title="Emojis" aria-label="Abrir emojis">😊</button>
      </div>

      <div id="chat-emoji-panel" class="chat-emoji-panel hidden"></div>

      <div class="chat-bottom">
        <div class="chat-input-wrap">
          <textarea id="chat-input" rows="4" placeholder="Digite sua mensagem" autocomplete="off"></textarea>
        </div>
        <button id="chat-send" class="chat-send" type="button" aria-label="Enviar">
          <span class="chat-send-icon">➤</span>
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(win);

  montarPainelEmoji(win);
  configurarCliqueFora(win);

  const input = win.querySelector('#chat-input');
  autoResizeTextarea(input);
  input?.addEventListener('input', () => autoResizeTextarea(input));

  win.querySelector('.chat-back')?.addEventListener('click', () => window.fecharChatAtivo());

  win.querySelector('#chat-emoji-toggle')?.addEventListener('click', (e) => {
    e.stopPropagation();
    alternarPainelEmoji(win);
  });

  win.querySelector('#chat-messages')?.addEventListener('click', () => fecharPainelEmoji(win));

  await carregarMensagens(me.id, amigoId);

  async function enviar() {
    const texto = input?.value.trim();
    if (!texto) return;

    const sendBtn = win.querySelector('#chat-send');
    if (sendBtn) sendBtn.disabled = true;

    input.value = '';
    autoResizeTextarea(input);
    fecharPainelEmoji(win);

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
      if (sendBtn) sendBtn.disabled = false;
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
    if (sendBtn) sendBtn.disabled = false;
  }

  win.querySelector('#chat-send')?.addEventListener('click', enviar);

  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      enviar();
    }
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
        if (!el) return;
        el.textContent = online(payload.new) ? 'Online' : 'Offline';
        el.classList.remove('online', 'offline');
        el.classList.add(online(payload.new) ? 'online' : 'offline');
      }
    )
    .subscribe();
};

window.fecharChatAtivo = function () {
  document.getElementById('janela-chat')?.remove();
  chatAbertoCom = null;
  chatLoadToken++;
  limparCliqueFora();

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
