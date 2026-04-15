import { supabase } from './config.js';

let monitor = null;
let roomChannel = null;
let userStatusChannel = null;
let activeChatKey = null;
let enviarEmAndamento = false;

const EMOJIS_PREMIUM = [
  '😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊',
  '🙂','🙃','😍','🥰','😘','😗','😙','😚','🤗','🤩',
  '😎','🥳','😇','🙏','🙌','👏','💪','🔥','✨','🌟',
  '⚡','💛','🧡','❤️','💙','💚','🤍','🤎','💜','🖤',
  '💖','💫','💎','👑','🏆','🎉','🎊','🎯','🎵','🎶',
  '📖','📜','🕊️','⛪','✝️','🌿','🍞','🍇','🌈','☀️',
  '🌙','⭐','🛡️','⚔️','🏹','🦁','🦅','🐑','🐟','🌊',
  '🌻','🌺','🌹','🍀','🍃','☕','🍯','🍷','🥖','🫶',
  '🤝','🤍','🤲','🫂','😌','🤔','🥹','😭','😴','🤭',
  '🙈','🙌','🙋','🫡','💬','📩','🕯️','🪔','🪙','🏅'
];

function avatar(nome = '?') {
  const ini = String(nome || '?')
    .trim()
    .split(/\s+/)
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || '?';

  return `data:image/svg+xml;base64,${btoa(
    `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="100%" height="100%" fill="#d4a21e"/><text x="50%" y="54%" text-anchor="middle" font-family="Arial" font-size="86" font-weight="700" fill="#fff">${ini}</text></svg>`
  )}`;
}

function online(user) {
  const t = user?.lastUpdate || user?.lastupdate;
  return !!(t && Date.now() - new Date(t).getTime() < 90000);
}

function escapeHtml(text = '') {
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function formatarHora(iso) {
  try {
    return new Date(iso).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  } catch {
    return '';
  }
}

async function getMe() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

async function getUser(uid) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('uid', uid)
    .maybeSingle();

  if (error) {
    console.warn('[chat] erro ao buscar usuário:', error);
  }

  return data;
}

function closeSidebarIfOpen() {
  try {
    window.fecharSidebar?.();
  } catch {}
  document.body.classList.remove('menu-open');
}

async function removeChannelSafe(channel) {
  if (!channel) return;
  try {
    await supabase.removeChannel(channel);
  } catch (e) {
    console.warn('[chat] erro ao remover canal:', e);
  }
}

async function cleanupChatChannels() {
  await removeChannelSafe(roomChannel);
  await removeChannelSafe(userStatusChannel);
  roomChannel = null;
  userStatusChannel = null;
}

function syncSendButton(win) {
  const input = win?.querySelector('#chat-input');
  const sendBtn = win?.querySelector('#chat-send');
  if (!input || !sendBtn) return;

  const hasText = !!input.value.trim();
  sendBtn.disabled = !hasText || enviarEmAndamento;
}

function toggleEmojiPanel(forceState) {
  const panel = document.getElementById('chat-emoji-panel');
  const toggle = document.getElementById('chat-emoji-toggle');
  if (!panel || !toggle) return;

  const shouldOpen = typeof forceState === 'boolean'
    ? forceState
    : !panel.classList.contains('open');

  panel.classList.toggle('open', shouldOpen);
  toggle.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
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
  const box = document.getElementById('chat-messages');
  if (!box) return;

  const { data = [], error } = await supabase
    .from('mensagens')
    .select('*')
    .or(`and(de.eq.${meuId},para.eq.${amigoId}),and(de.eq.${amigoId},para.eq.${meuId})`)
    .order('createdat', { ascending: true });

  if (error) {
    console.error('[chat] erro ao carregar mensagens:', error);
    box.innerHTML = '<div class="chat-empty">Não foi possível carregar as mensagens.</div>';
    return;
  }

  if (!data.length) {
    box.innerHTML = `
      <div class="chat-empty">
        <div class="chat-empty-icon">💬</div>
        <div class="chat-empty-title">Conversa iniciada</div>
        <div class="chat-empty-text">Envie uma mensagem bonita para começar.</div>
      </div>`;
  } else {
    box.innerHTML = '';
    data.forEach((m) => {
      const mine = m.de === meuId;
      const wrap = document.createElement('div');
      wrap.className = `msg-wrap ${mine ? 'mine' : 'other'}`;
      wrap.innerHTML = `
        <div class="msg-bubble-wrap">
          <div class="msg-bubble">${escapeHtml(m.mensagem || '').replace(/\n/g, '<br>')}</div>
          <div class="msg-meta">
            <span class="msg-time">${formatarHora(m.createdat)}</span>
            ${mine ? `<span class="msg-state">${m.lida ? '✓✓ lido' : '✓ enviado'}</span>` : ''}
          </div>
        </div>`;
      box.appendChild(wrap);
    });
  }

  box.scrollTop = box.scrollHeight;
  await marcarLidas(meuId, amigoId);
}

function montarEmojiGrid(win) {
  const grid = win.querySelector('#chat-emoji-grid');
  const input = win.querySelector('#chat-input');
  if (!grid || !input) return;

  grid.innerHTML = '';
  EMOJIS_PREMIUM.forEach((emoji) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chat-emoji-item';
    btn.textContent = emoji;
    btn.setAttribute('aria-label', `Inserir ${emoji}`);
    btn.addEventListener('click', () => {
      const start = input.selectionStart ?? input.value.length;
      const end = input.selectionEnd ?? input.value.length;
      const before = input.value.slice(0, start);
      const after = input.value.slice(end);
      input.value = `${before}${emoji}${after}`;
      input.focus();
      const cursor = start + emoji.length;
      input.setSelectionRange(cursor, cursor);
      syncSendButton(win);
    });
    grid.appendChild(btn);
  });
}

async function enviarMensagem(win, me, amigoId) {
  const input = win.querySelector('#chat-input');
  const sendBtn = win.querySelector('#chat-send');
  if (!input || !sendBtn) return;

  const texto = input.value.trim();
  if (!texto || enviarEmAndamento) return;

  enviarEmAndamento = true;
  syncSendButton(win);
  sendBtn.classList.add('is-sending');

  try {
    input.value = '';

    const { error: msgError } = await supabase.from('mensagens').insert({
      de: me.id,
      para: amigoId,
      mensagem: texto,
      lida: false,
      createdat: new Date().toISOString(),
    });

    if (msgError) throw msgError;

    const { error: notifError } = await supabase.from('notificacoes').insert({
      to_uid: amigoId,
      from_uid: me.id,
      tipo: 'mensagem',
      mensagem: texto.slice(0, 60),
      lida: false,
      created_at: new Date().toISOString(),
    });

    if (notifError) {
      console.warn('[chat] erro ao criar notificação:', notifError);
    }

    await carregarMensagens(me.id, amigoId);
  } catch (e) {
    console.error('[chat] erro ao enviar:', e);
    alert('Não foi possível enviar sua mensagem agora.');
  } finally {
    enviarEmAndamento = false;
    sendBtn.classList.remove('is-sending');
    syncSendButton(win);
    input.focus();
  }
}

window.abrirChat = async function abrirChat(amigoId, nome = '') {
  document.getElementById('perfil-detalhado')?.remove();
  document.getElementById('janela-chat')?.remove();
  closeSidebarIfOpen();
  await cleanupChatChannels();

  const me = await getMe();
  if (!me) return;

  const amigo = await getUser(amigoId);
  const amigoNome = amigo?.name || nome || 'Amigo';
  const foto = amigo?.photoURL || amigo?.photourl || avatar(amigoNome);
  activeChatKey = `${[me.id, amigoId].sort().join('-')}`;

  const win = document.createElement('div');
  win.id = 'janela-chat';
  win.className = 'chat-window';
  win.innerHTML = `
    <div class="chat-glow"></div>
    <div class="chat-top">
      <button type="button" class="chat-back" aria-label="Voltar">←</button>
      <img class="chat-avatar" src="${foto}" alt="Avatar de ${escapeHtml(amigoNome)}" onerror="this.src='${avatar(amigoNome)}'">
      <div class="chat-head">
        <strong>${escapeHtml(amigoNome)}</strong>
        <span id="chat-status" class="${online(amigo) ? 'online' : 'offline'}">${online(amigo) ? 'Online' : 'Offline'}</span>
      </div>
    </div>

    <div id="chat-messages" class="chat-messages">
      <div class="chat-empty">
        <div class="chat-empty-icon">✨</div>
        <div class="chat-empty-title">Carregando conversa...</div>
      </div>
    </div>

    <div class="chat-composer-shell">
      <div class="chat-toolbar">
        <button type="button" id="chat-emoji-toggle" class="chat-emoji-toggle" aria-expanded="false" aria-label="Abrir emojis">😊</button>
      </div>

      <div id="chat-emoji-panel" class="chat-emoji-panel" aria-hidden="true">
        <div class="chat-emoji-panel-head">
          <span>Emojis</span>
          <small>${EMOJIS_PREMIUM.length} opções</small>
        </div>
        <div id="chat-emoji-grid" class="chat-emoji-grid"></div>
      </div>

      <div class="chat-bottom">
        <div class="chat-input-wrap">
          <input id="chat-input" maxlength="500" placeholder="Digite sua mensagem" autocomplete="off">
        </div>
        <button type="button" id="chat-send" class="chat-send" aria-label="Enviar mensagem" disabled>
          <span class="chat-send-icon">➤</span>
        </button>
      </div>
    </div>`;

  document.body.appendChild(win);

  const input = win.querySelector('#chat-input');
  const sendBtn = win.querySelector('#chat-send');
  const emojiToggle = win.querySelector('#chat-emoji-toggle');

  montarEmojiGrid(win);

  win.querySelector('.chat-back')?.addEventListener('click', () => window.fecharChatAtivo());
  emojiToggle?.addEventListener('click', () => toggleEmojiPanel());
  document.addEventListener('click', handleOutsideEmojiClick, true);

  input?.addEventListener('input', () => syncSendButton(win));
  input?.addEventListener('focus', () => syncSendButton(win));
  input?.addEventListener('keydown', async (e) => {
    if (e.key === 'Escape') toggleEmojiPanel(false);
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      await enviarMensagem(win, me, amigoId);
    }
  });

  sendBtn?.addEventListener('click', async () => {
    await enviarMensagem(win, me, amigoId);
  });

  await carregarMensagens(me.id, amigoId);
  syncSendButton(win);

  roomChannel = supabase
    .channel(`room-${activeChatKey}`)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'mensagens' }, async (payload) => {
      const row = payload.new || payload.old;
      if (!row) return;
      const ok = (row.de === me.id && row.para === amigoId) || (row.de === amigoId && row.para === me.id);
      if (ok && document.getElementById('janela-chat')) {
        await carregarMensagens(me.id, amigoId);
      }
    })
    .subscribe();

  userStatusChannel = supabase
    .channel(`chat-user-${amigoId}`)
    .on('postgres_changes', {
      event: 'UPDATE',
      schema: 'public',
      table: 'users',
      filter: `uid=eq.${amigoId}`,
    }, (payload) => {
      const el = document.getElementById('chat-status');
      if (!el) return;
      const on = online(payload.new);
      el.textContent = on ? 'Online' : 'Offline';
      el.classList.toggle('online', on);
      el.classList.toggle('offline', !on);
    })
    .subscribe();

  setTimeout(() => input?.focus(), 40);
};

function handleOutsideEmojiClick(e) {
  const panel = document.getElementById('chat-emoji-panel');
  const toggle = document.getElementById('chat-emoji-toggle');
  if (!panel || !toggle) return;
  if (panel.contains(e.target) || toggle.contains(e.target)) return;
  toggleEmojiPanel(false);
}

window.fecharChatAtivo = async function fecharChatAtivo() {
  document.removeEventListener('click', handleOutsideEmojiClick, true);
  document.getElementById('janela-chat')?.remove();
  enviarEmAndamento = false;
  activeChatKey = null;
  await cleanupChatChannels();
};

export function iniciarMonitorChat(user) {
  if (monitor) supabase.removeChannel(monitor);
  if (!user) return;

  monitor = supabase
    .channel(`monitor-notif-${user.id}`)
    .on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'notificacoes',
      filter: `to_uid=eq.${user.id}`,
    }, async (payload) => {
      const n = payload.new;
      if (!n || n.lida || (n.tipo || '') !== 'mensagem') return;

      const from = await getUser(n.from_uid);
      const box = document.createElement('div');
      box.className = 'msg-toast';
      box.innerHTML = `
        <div class="msg-toast-title">✉ Nova mensagem</div>
        <div class="msg-toast-body">${escapeHtml(from?.name || 'Amigo')}: ${escapeHtml(n.mensagem || '')}</div>`;
      box.addEventListener('click', async () => {
        box.remove();
        await window.abrirChat(n.from_uid, from?.name || 'Amigo');
      });
      document.body.appendChild(box);
      setTimeout(() => box.remove(), 8000);
    })
    .subscribe();
}
