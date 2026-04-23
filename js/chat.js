// js/chat.js — Heróis da Fé — VERSÃO COMPLETA
// ═══════════════════════════════════════════════════════════
// NOVIDADES NESTA VERSÃO:
// ✅ Push Notifications: registro de SW, permissão, subscribe, endpoint salvo
// ✅ Áudio: bolha longa grafite 3D com animação de brilho
// ✅ Botão de gravar: redesign grafite 3D premium
// ✅ Envio de imagens: upload, preview, render, modal, notificação
// ✅ Animações suaves nas mensagens (fade + slide)
// ✅ Polimento geral do composer
// ═══════════════════════════════════════════════════════════

import { supabase } from './config.js';

// ── CHAVE PÚBLICA VAPID — substitua pela sua ───────────────
// Gere em: https://vapidkeys.com/ ou com web-push npm package
const VAPID_PUBLIC_KEY = 'BF6dghwl5LhuZDAIeca3HsiK_xrThnbnpUSrAnZhQhkIgN9a9aKoDY2lW6M38wHDEmnRWhha8rwRVOPCJ9Sp238';

let monitor = null;
let roomChannel = null;
let userStatusChannel = null;
let chatAbertoCom = null;
let chatLoadToken = 0;
let chatOutsideClickHandler = null;

// ── ÁUDIO ──────────────────────────────────────────────────
let mediaRecorder = null;
let audioChunks = [];
let recordingTimer = null;
let recordingSeconds = 0;
const BUCKET_AUDIOS = 'chat-audios';

// ── IMAGENS ────────────────────────────────────────────────
const BUCKET_IMAGENS = 'chat-imagens';

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

// ── ESTILOS INJETADOS ──────────────────────────────────────
(function injectChatStyles() {
  const id = 'chat-styles-v11';
  if (document.getElementById(id)) return;
  const s = document.createElement('style');
  s.id = id;
  s.textContent = `
    /* ── Animação de entrada das mensagens ── */
    @keyframes msgFadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .msg-wrap {
      animation: msgFadeIn 0.22s ease both;
    }

    /* ── Animação brilho correndo grafite ── */
    @keyframes grafiteShine {
      0%   { left: -60%; }
      100% { left: 130%; }
    }

    /* ── Player de áudio — bolha longa grafite 3D ── */
    .msg-audio-player {
      display: flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(160deg, #3a3a3a 0%, #2a2a2a 35%, #1e1e1e 65%, #2c2c2c 100%);
      border: 1px solid rgba(255,255,255,0.10);
      border-radius: 50px;
      padding: 10px 16px 10px 12px;
      min-width: 200px;
      max-width: 280px;
      width: 100%;
      box-shadow:
        0 6px 18px rgba(0,0,0,0.55),
        inset 0 1px 0 rgba(255,255,255,0.12),
        inset 0 -3px 8px rgba(0,0,0,0.3);
      position: relative;
      overflow: hidden;
    }
    .msg-audio-player::before {
      content: '';
      position: absolute;
      top: 0; left: -60%;
      width: 38%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.13), transparent);
      transform: skewX(-18deg);
      animation: grafiteShine 2.8s linear infinite;
      pointer-events: none;
    }

    /* Botão play/pause */
    .msg-audio-play-btn {
      flex-shrink: 0;
      width: 36px; height: 36px;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.18);
      background: linear-gradient(145deg, #4a4a4a, #222);
      box-shadow:
        0 4px 10px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.18),
        inset 0 -3px 6px rgba(0,0,0,0.3);
      color: #e8e8e8;
      font-size: 0.85rem;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: box-shadow 0.15s, transform 0.1s;
    }
    .msg-audio-play-btn:hover {
      box-shadow:
        0 4px 14px rgba(212,175,55,0.22),
        inset 0 1px 0 rgba(255,255,255,0.24),
        inset 0 -3px 6px rgba(0,0,0,0.3);
    }
    .msg-audio-play-btn:active {
      transform: scale(0.94);
    }

    /* Barra de progresso */
    .msg-audio-bar {
      flex: 1;
      height: 5px;
      background: rgba(255,255,255,0.08);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.4);
    }
    .msg-audio-progress {
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, #a0a0a0, #d4af37 80%, #fff);
      border-radius: 10px;
      transition: width 0.1s linear;
      box-shadow: 0 0 6px rgba(212,175,55,0.4);
    }

    /* Duração */
    .msg-audio-dur {
      flex-shrink: 0;
      font-size: 0.7rem;
      color: #aaa;
      font-weight: 600;
      letter-spacing: 0.03em;
      min-width: 32px;
      text-align: right;
    }

    /* ── Botão de gravar — grafite 3D ── */
    .chat-audio-btn {
      flex-shrink: 0;
      width: 44px; height: 44px;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.16);
      background: linear-gradient(145deg, #484848 0%, #2e2e2e 50%, #1a1a1a 100%);
      box-shadow:
        0 5px 14px rgba(0,0,0,0.55),
        inset 0 1px 0 rgba(255,255,255,0.16),
        inset 0 -4px 8px rgba(0,0,0,0.35);
      color: #ddd;
      font-size: 1.15rem;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      position: relative; overflow: hidden;
      transition: box-shadow 0.15s, transform 0.1s;
    }
    .chat-audio-btn::before {
      content: '';
      position: absolute;
      top: 0; left: -60%;
      width: 40%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
      transform: skewX(-18deg);
      animation: grafiteShine 2.5s linear infinite;
      pointer-events: none;
    }
    .chat-audio-btn:hover {
      box-shadow:
        0 6px 18px rgba(212,175,55,0.2),
        inset 0 1px 0 rgba(255,255,255,0.22),
        inset 0 -4px 8px rgba(0,0,0,0.35);
    }
    .chat-audio-btn:active,
    .chat-audio-btn.gravando {
      background: linear-gradient(145deg, #5a2020 0%, #3a1010 50%, #1a0808 100%);
      border-color: rgba(231,76,60,0.4);
      box-shadow:
        0 4px 16px rgba(231,76,60,0.35),
        inset 0 1px 0 rgba(255,120,100,0.2),
        inset 0 -4px 8px rgba(0,0,0,0.4);
      transform: scale(0.96);
    }
    .chat-audio-btn svg {
      width: 20px; height: 20px;
      fill: #ddd;
      pointer-events: none;
    }

    /* ── Botão enviar — grafite 3D idêntico ao de áudio ── */
    .chat-send {
      flex-shrink: 0;
      width: 44px; height: 44px;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.16);
      background: linear-gradient(145deg, #484848 0%, #2e2e2e 50%, #1a1a1a 100%);
      box-shadow:
        0 5px 14px rgba(0,0,0,0.55),
        inset 0 1px 0 rgba(255,255,255,0.16),
        inset 0 -4px 8px rgba(0,0,0,0.35);
      color: #ddd;
      font-size: 1rem;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      position: relative; overflow: hidden;
      transition: box-shadow 0.15s, transform 0.1s;
    }
    .chat-send::before {
      content: '';
      position: absolute;
      top: 0; left: -60%;
      width: 40%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
      transform: skewX(-18deg);
      animation: grafiteShine 2.5s linear infinite;
      pointer-events: none;
    }
    .chat-send:hover {
      box-shadow:
        0 6px 18px rgba(212,175,55,0.2),
        inset 0 1px 0 rgba(255,255,255,0.22),
        inset 0 -4px 8px rgba(0,0,0,0.35);
    }
    .chat-send:active {
      transform: scale(0.96);
      box-shadow:
        0 3px 10px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.12),
        inset 0 -4px 8px rgba(0,0,0,0.4);
    }
    .chat-send:disabled { opacity: 0.4; cursor: not-allowed; }
    .chat-send-icon { font-size: 1rem; color: #ddd; pointer-events: none; line-height: 1; }

    /* ── Linha do composer — garante textarea à esq, botões à dir ── */
    .chat-bottom {
      display: flex;
      align-items: flex-end;
      gap: 8px;
      padding: 6px 8px 6px 8px;
      width: 100%;
    }
    .chat-input-wrap {
      flex: 1;
      min-width: 0;
    }

    /* ── Coluna direita: imagem (ao lado do textarea) + áudio/enviar ── */
    .chat-right-col {
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: center;
      flex-shrink: 0;
      margin-left: auto;
    }

    /* ── Botão anexar imagem ── */
    .chat-image-btn {
      flex-shrink: 0;
      width: 44px; height: 44px;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.14);
      background: linear-gradient(145deg, #424242 0%, #2a2a2a 50%, #181818 100%);
      box-shadow:
        0 4px 12px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.14),
        inset 0 -4px 8px rgba(0,0,0,0.3);
      color: #ccc;
      font-size: 1.1rem;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: box-shadow 0.15s, transform 0.1s;
    }
    .chat-image-btn:hover {
      box-shadow: 0 4px 14px rgba(212,175,55,0.18), inset 0 1px 0 rgba(255,255,255,0.2);
    }
    .chat-image-btn:active { transform: scale(0.94); }

    /* ── Preview de imagem antes do envio ── */
    .chat-img-preview-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      background: rgba(255,255,255,0.04);
      border-radius: 12px;
      margin: 0 8px 6px;
      border: 1px solid rgba(255,255,255,0.08);
    }
    .chat-img-preview-thumb {
      width: 52px; height: 52px;
      object-fit: cover;
      border-radius: 8px;
      border: 1px solid rgba(255,255,255,0.1);
    }
    .chat-img-preview-info {
      flex: 1;
      font-size: 0.78rem;
      color: #aaa;
    }
    .chat-img-preview-remove {
      background: none; border: none;
      color: #e74c3c; font-size: 1.1rem; cursor: pointer;
      padding: 4px; border-radius: 50%;
    }

    /* ── Skeleton/loading ── */
    @keyframes shimmer {
      0% { background-position: -300px 0; }
      100% { background-position: 300px 0; }
    }
    .msg-sending-skeleton {
      height: 44px; border-radius: 24px;
      background: linear-gradient(90deg, #2a2a2a 25%, #383838 50%, #2a2a2a 75%);
      background-size: 600px 100%;
      animation: shimmer 1.2s infinite linear;
      max-width: 200px;
    }

    /* ── Imagem na bolha ── */
    .msg-img-bubble {
      max-width: 220px;
      border-radius: 14px;
      overflow: hidden;
      cursor: pointer;
      border: 1px solid rgba(255,255,255,0.1);
      box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      transition: transform 0.15s;
    }
    .msg-img-bubble:hover { transform: scale(1.02); }
    .msg-img-bubble img {
      width: 100%; display: block;
    }

    /* ── Modal de imagem ampliada ── */
    .img-modal-overlay {
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.92);
      z-index: 20000;
      display: flex; align-items: center; justify-content: center;
      animation: msgFadeIn 0.18s ease;
    }
    .img-modal-close {
      position: absolute; top: 20px; right: 20px;
      background: rgba(255,255,255,0.1); border: none;
      color: #fff; font-size: 1.6rem; cursor: pointer;
      border-radius: 50%; width: 44px; height: 44px;
      display: flex; align-items: center; justify-content: center;
    }
    .img-modal-img {
      max-width: 92vw; max-height: 88vh;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.7);
    }
  `;
  document.head.appendChild(s);
})();

// ── PUSH NOTIFICATIONS ─────────────────────────────────────
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0)));
}

export async function inicializarPushNotifications(userId) {
  try {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      console.info('[push] Navegador não suporta push notifications.');
      return;
    }

    // Registra o service worker se ainda não registrado
    let reg = await navigator.serviceWorker.getRegistration('/');
    if (!reg) {
      reg = await navigator.serviceWorker.register('/sw.js');
      console.info('[push] Service Worker registrado.');
    }

    // Pede permissão ao usuário
    const perm = await Notification.requestPermission();
    if (perm !== 'granted') {
      console.info('[push] Permissão de notificação negada.');
      return;
    }

    // Inscreve no Push Manager
    const sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
    });

    const subJson = sub.toJSON();
    const endpoint = subJson.endpoint;
    const p256dh  = subJson.keys?.p256dh || '';
    const auth    = subJson.keys?.auth    || '';

    // Salva no banco (upsert — evita duplicatas)
    const { error } = await supabase.from('push_subscriptions').upsert({
      uid: userId,
      endpoint,
      p256dh,
      auth,
      created_at: new Date().toISOString(),
    }, { onConflict: 'endpoint' });

    if (error) console.warn('[push] Erro ao salvar subscription:', error);
    else console.info('[push] Subscription salva com sucesso.');
  } catch (e) {
    console.warn('[push] Erro ao inicializar push:', e);
  }
}

// ── UTILITÁRIOS GERAIS ─────────────────────────────────────
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

function getChatWindow() { return document.getElementById('janela-chat'); }
function getChatMessagesBox() { return document.getElementById('chat-messages'); }

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
  win?.querySelector('#chat-emoji-panel')?.classList.add('hidden');
}

function alternarPainelEmoji(win) {
  win?.querySelector('#chat-emoji-panel')?.classList.toggle('hidden');
}

function configurarCliqueFora(win) {
  if (chatOutsideClickHandler) {
    document.removeEventListener('click', chatOutsideClickHandler, true);
    chatOutsideClickHandler = null;
  }
  chatOutsideClickHandler = (e) => {
    const panel  = win?.querySelector('#chat-emoji-panel');
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
  await supabase.from('mensagens').update({ lida: true })
    .eq('de', amigoId).eq('para', meuId).eq('lida', false);
  await supabase.from('notificacoes').update({ lida: true })
    .eq('to_uid', meuId).eq('from_uid', amigoId).eq('tipo', 'mensagem').eq('lida', false);
}

// ── UTILITÁRIOS DE ÁUDIO ───────────────────────────────────
function formatarSegundos(s) {
  const m = Math.floor(s / 60);
  const seg = Math.floor(s % 60);
  return `${m}:${String(seg).padStart(2, '0')}`;
}

// SVG do microfone premium
const MIC_SVG = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3z"/>
  <path d="M17 11a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.93V21h2v-3.07A7 7 0 0 0 19 11h-2z"/>
</svg>`;

function atualizarBotaoAudio(btn, gravando, segundos = 0) {
  if (gravando) {
    btn.classList.add('gravando');
    btn.title = `Gravando... ${formatarSegundos(segundos)} (solte para enviar)`;
    btn.innerHTML = `<span style="color:#ff6b6b;font-size:0.72rem;font-weight:700;letter-spacing:0.02em;">⏺ ${formatarSegundos(segundos)}</span>`;
  } else {
    btn.classList.remove('gravando');
    btn.title = 'Segure para gravar áudio';
    btn.innerHTML = MIC_SVG;
  }
}

function pararTimer() {
  if (recordingTimer) { clearInterval(recordingTimer); recordingTimer = null; }
  recordingSeconds = 0;
}

// ── UPLOAD ÁUDIO ───────────────────────────────────────────
async function uploadAudio(blob, meuId) {
  const ext  = blob.type.includes('ogg') ? 'ogg' : 'webm';
  const nome = `${meuId}/${Date.now()}.${ext}`;
  const { error } = await supabase.storage.from(BUCKET_AUDIOS)
    .upload(nome, blob, { contentType: blob.type, upsert: false });
  if (error) throw error;
  return supabase.storage.from(BUCKET_AUDIOS).getPublicUrl(nome).data.publicUrl;
}

async function enviarMensagemAudio(blob, duracao, meuId, amigoId) {
  try {
    const url   = await uploadAudio(blob, meuId);
    const agora = new Date().toISOString();

    const { error: msgError } = await supabase.from('mensagens').insert({
      de: meuId, para: amigoId,
      mensagem: '🎙️ Mensagem de voz',
      tipo: 'audio', audio_url: url,
      audio_duracao: Math.round(duracao),
      lida: false, createdat: agora,
    });
    if (msgError) throw msgError;

    await supabase.from('notificacoes').insert({
      to_uid: amigoId, from_uid: meuId,
      tipo: 'mensagem', mensagem: '🎙️ Mensagem de voz',
      lida: false, created_at: agora,
    });

    await carregarMensagens(meuId, amigoId);
  } catch (e) {
    console.error('[chat] erro ao enviar áudio:', e);
    alert('Não foi possível enviar o áudio. Verifique sua conexão.');
  }
}

// ── UPLOAD IMAGEM ──────────────────────────────────────────
async function uploadImagem(file, meuId) {
  const ext  = file.name.split('.').pop() || 'jpg';
  const nome = `${meuId}/${Date.now()}.${ext}`;
  const { error } = await supabase.storage.from(BUCKET_IMAGENS)
    .upload(nome, file, { contentType: file.type, upsert: false });
  if (error) throw error;
  return supabase.storage.from(BUCKET_IMAGENS).getPublicUrl(nome).data.publicUrl;
}

async function enviarMensagemImagem(file, meuId, amigoId, win) {
  const box = getChatMessagesBox();

  // Skeleton de loading
  const skeleton = document.createElement('div');
  skeleton.className = 'msg-wrap mine';
  skeleton.innerHTML = `<div class="msg-bubble-wrap"><div class="msg-sending-skeleton"></div></div>`;
  box?.appendChild(skeleton);
  scrollChatParaBaixo();

  try {
    const url   = await uploadImagem(file, meuId);
    const agora = new Date().toISOString();

    const { error: msgError } = await supabase.from('mensagens').insert({
      de: meuId, para: amigoId,
      mensagem: '📷 Imagem',
      tipo: 'imagem', image_url: url,
      lida: false, createdat: agora,
    });
    if (msgError) throw msgError;

    await supabase.from('notificacoes').insert({
      to_uid: amigoId, from_uid: meuId,
      tipo: 'mensagem', mensagem: '📷 Imagem enviada',
      lida: false, created_at: agora,
    });

    skeleton.remove();
    await carregarMensagens(meuId, amigoId);
  } catch (e) {
    skeleton.remove();
    console.error('[chat] erro ao enviar imagem:', e);
    alert('Não foi possível enviar a imagem. Verifique sua conexão.');
  }
}

// ── MODAL DE IMAGEM AMPLIADA ───────────────────────────────
function abrirModalImagem(src) {
  document.getElementById('_img-modal')?.remove();
  const overlay = document.createElement('div');
  overlay.id = '_img-modal';
  overlay.className = 'img-modal-overlay';
  overlay.innerHTML = `
    <button class="img-modal-close" aria-label="Fechar">×</button>
    <img class="img-modal-img" src="${escapeHtml(src)}" alt="Imagem">
  `;
  overlay.querySelector('.img-modal-close').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}

// ── GRAVAÇÃO DE ÁUDIO ──────────────────────────────────────
function configurarGravacaoAudio(win, meuId, amigoId) {
  const btn = win.querySelector('#chat-audio-btn');
  if (!btn) return;
  btn.innerHTML = MIC_SVG;

  let iniciouGravacao = false;
  let startTime = 0;

  async function iniciarGravacao() {
    if (iniciouGravacao) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunks = [];
      const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/ogg';
      mediaRecorder = new MediaRecorder(stream, { mimeType });

      mediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) audioChunks.push(e.data); };

      mediaRecorder.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        const duracao = (Date.now() - startTime) / 1000;
        if (duracao < 0.5 || audioChunks.length === 0) {
          pararTimer(); atualizarBotaoAudio(btn, false); return;
        }
        const blob = new Blob(audioChunks, { type: mimeType });
        pararTimer(); atualizarBotaoAudio(btn, false);
        btn.disabled = true;
        btn.innerHTML = '⏳';
        await enviarMensagemAudio(blob, duracao, meuId, amigoId);
        btn.disabled = false;
        atualizarBotaoAudio(btn, false);
      };

      mediaRecorder.start();
      startTime = Date.now();
      iniciouGravacao = true;
      recordingSeconds = 0;
      atualizarBotaoAudio(btn, true, 0);

      recordingTimer = setInterval(() => {
        recordingSeconds++;
        atualizarBotaoAudio(btn, true, recordingSeconds);
        if (recordingSeconds >= 120) pararGravacao();
      }, 1000);
    } catch (e) {
      console.error('[chat] erro ao acessar microfone:', e);
      alert('Não foi possível acessar o microfone. Verifique as permissões do navegador.');
    }
  }

  function pararGravacao() {
    if (!iniciouGravacao) return;
    if (mediaRecorder && mediaRecorder.state === 'recording') mediaRecorder.stop();
    iniciouGravacao = false;
  }

  btn.addEventListener('touchstart',  (e) => { e.preventDefault(); iniciarGravacao(); }, { passive: false });
  btn.addEventListener('touchend',    (e) => { e.preventDefault(); pararGravacao(); },  { passive: false });
  btn.addEventListener('touchcancel', (e) => { e.preventDefault(); pararGravacao(); },  { passive: false });
  btn.addEventListener('mousedown',   (e) => { e.preventDefault(); iniciarGravacao(); });
  btn.addEventListener('mouseup',     () => pararGravacao());
  btn.addEventListener('mouseleave',  () => pararGravacao());
}

// ── RENDERIZAR MENSAGEM ────────────────────────────────────
function renderMensagem(m, meuId) {
  const mine = m.de === meuId;
  const wrap = document.createElement('div');
  wrap.className = 'msg-wrap ' + (mine ? 'mine' : 'other');

  let conteudo = '';

  if (m.tipo === 'audio' && m.audio_url) {
    conteudo = `
      <div class="msg-audio-player">
        <button class="msg-audio-play-btn" data-url="${escapeHtml(m.audio_url)}" title="Reproduzir áudio">▶</button>
        <div class="msg-audio-bar">
          <div class="msg-audio-progress"></div>
        </div>
        <span class="msg-audio-dur">${m.audio_duracao ? formatarSegundos(m.audio_duracao) : '🎙️'}</span>
      </div>
    `;
  } else if (m.tipo === 'imagem' && m.image_url) {
    conteudo = `
      <div class="msg-img-bubble">
        <img src="${escapeHtml(m.image_url)}" alt="Imagem" loading="lazy" onerror="this.style.display='none'">
      </div>
    `;
  } else {
    conteudo = `<div class="msg-bubble">${escapeHtml(m.mensagem || '').replace(/\n/g, '<br>')}</div>`;
  }

  wrap.innerHTML = `
    <div class="msg-bubble-wrap">
      ${conteudo}
      <div class="msg-meta">
        ${mine ? `<span class="msg-state">${m.lida ? '✓✓ lido' : '✓ enviado'}</span>` : ''}
      </div>
    </div>
  `;

  // Player de áudio interativo
  const playBtn = wrap.querySelector('.msg-audio-play-btn');
  if (playBtn) {
    let audio  = null;
    let tocando = false;
    const bar  = wrap.querySelector('.msg-audio-progress');
    const dur  = wrap.querySelector('.msg-audio-dur');

    playBtn.addEventListener('click', () => {
      if (!audio) {
        audio = new Audio(playBtn.dataset.url);
        audio.addEventListener('timeupdate', () => {
          if (!audio.duration) return;
          if (bar) bar.style.width = ((audio.currentTime / audio.duration) * 100) + '%';
          if (dur) dur.textContent = formatarSegundos(audio.duration - audio.currentTime);
        });
        audio.addEventListener('ended', () => {
          tocando = false;
          playBtn.textContent = '▶';
          if (bar) bar.style.width = '0%';
          if (dur && m.audio_duracao) dur.textContent = formatarSegundos(m.audio_duracao);
        });
      }
      if (tocando) {
        audio.pause(); tocando = false; playBtn.textContent = '▶';
      } else {
        audio.play(); tocando = true; playBtn.textContent = '⏸';
      }
    });
  }

  // Clique na imagem → modal
  const imgBubble = wrap.querySelector('.msg-img-bubble');
  if (imgBubble) {
    imgBubble.addEventListener('click', () => {
      const src = imgBubble.querySelector('img')?.src;
      if (src) abrirModalImagem(src);
    });
  }

  return wrap;
}

async function carregarMensagens(meuId, amigoId) {
  const token = ++chatLoadToken;
  const box   = getChatMessagesBox();
  if (!box) return;

  const { data = [], error } = await supabase
    .from('mensagens').select('*')
    .or(`and(de.eq.${meuId},para.eq.${amigoId}),and(de.eq.${amigoId},para.eq.${meuId})`)
    .order('createdat', { ascending: true });

  if (error) { console.error('[chat] erro ao carregar mensagens:', error); return; }
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
  data.forEach((m) => box.appendChild(renderMensagem(m, meuId)));
  scrollChatParaBaixo();
  await marcarLidas(meuId, amigoId);
}

// ── PAINEL DE EMOJIS ───────────────────────────────────────
function montarPainelEmoji(win) {
  const panel = win.querySelector('#chat-emoji-panel');
  if (!panel) return;
  panel.innerHTML = `
    <div class="chat-emoji-panel-head">
      <span>Emojis</span><small>${EMOJIS_CHAT.length} opções</small>
    </div>
    <div class="chat-emoji-grid">
      ${EMOJIS_CHAT.map((e) => `<button type="button" class="chat-emoji-item" data-emoji="${e}">${e}</button>`).join('')}
    </div>
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
  textarea.style.height = Math.min(Math.max(textarea.scrollHeight, 96), 180) + 'px';
}

// ── ABRIR CHAT ─────────────────────────────────────────────
window.abrirChat = async function (amigoId, nome = '') {
  document.getElementById('perfil-detalhado')?.remove();
  document.getElementById('janela-chat')?.remove();

  if (roomChannel)      { supabase.removeChannel(roomChannel); roomChannel = null; }
  if (userStatusChannel){ supabase.removeChannel(userStatusChannel); userStatusChannel = null; }
  limparCliqueFora();

  const me = await getMe();
  if (!me) return;

  const amigo     = await getUser(amigoId);
  const nomeAmigo = amigo?.name || nome || 'Amigo';
  const foto      = amigo?.photoURL || amigo?.photourl || avatar(nomeAmigo);

  chatAbertoCom = amigoId;
  removerToastsDoContato(amigoId);

  const statusTexto = online(amigo) ? 'Online' : 'Offline';
  const statusCss   = statusClass(amigo);

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

      <!-- Preview de imagem selecionada -->
      <div id="chat-img-preview" style="display:none;"></div>

      <div class="chat-bottom">
        <div class="chat-input-wrap">
          <textarea id="chat-input" rows="4" placeholder="Digite sua mensagem" autocomplete="off"></textarea>
        </div>

        <input id="chat-image-input" type="file" accept="image/*" style="display:none;">

        <!-- Coluna direita grudada na borda: imagem, áudio, enviar -->
        <div class="chat-right-col">
          <button id="chat-image-btn" class="chat-image-btn" type="button" title="Enviar imagem" aria-label="Enviar imagem">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM8.5 13.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5z"/>
            </svg>
          </button>
          <button id="chat-audio-btn" class="chat-audio-btn" type="button" title="Segure para gravar áudio"></button>
          <button id="chat-send" class="chat-send" type="button" aria-label="Enviar">
            <span class="chat-send-icon">➤</span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(win);

  montarPainelEmoji(win);
  configurarCliqueFora(win);
  configurarGravacaoAudio(win, me.id, amigoId);

  const input     = win.querySelector('#chat-input');
  const imageBtn  = win.querySelector('#chat-image-btn');
  const imageInput= win.querySelector('#chat-image-input');
  const previewEl = win.querySelector('#chat-img-preview');

  autoResizeTextarea(input);
  input?.addEventListener('input', () => autoResizeTextarea(input));

  // ── Seleção de imagem ──
  let imagemSelecionada = null;

  imageBtn?.addEventListener('click', () => imageInput?.click());

  imageInput?.addEventListener('change', () => {
    const file = imageInput.files?.[0];
    if (!file) return;
    imagemSelecionada = file;

    const objectUrl = URL.createObjectURL(file);
    previewEl.style.display = 'flex';
    previewEl.innerHTML = `
      <div class="chat-img-preview-wrap">
        <img class="chat-img-preview-thumb" src="${objectUrl}" alt="Preview">
        <div class="chat-img-preview-info">${escapeHtml(file.name)}</div>
        <button class="chat-img-preview-remove" id="chat-img-remove" title="Remover">×</button>
      </div>
    `;
    win.querySelector('#chat-img-remove')?.addEventListener('click', () => {
      imagemSelecionada = null;
      imageInput.value  = '';
      previewEl.style.display = 'none';
      previewEl.innerHTML = '';
      URL.revokeObjectURL(objectUrl);
    });
  });

  win.querySelector('.chat-back')?.addEventListener('click', () => window.fecharChatAtivo());
  win.querySelector('#chat-emoji-toggle')?.addEventListener('click', (e) => {
    e.stopPropagation(); alternarPainelEmoji(win);
  });
  win.querySelector('#chat-messages')?.addEventListener('click', () => fecharPainelEmoji(win));

  await carregarMensagens(me.id, amigoId);

  // ── Enviar mensagem (texto ou imagem) ──
  async function enviar() {
    // Envio de imagem tem prioridade se selecionada
    if (imagemSelecionada) {
      const file = imagemSelecionada;
      imagemSelecionada = null;
      imageInput.value  = '';
      previewEl.style.display = 'none';
      previewEl.innerHTML = '';
      fecharPainelEmoji(win);
      await enviarMensagemImagem(file, me.id, amigoId, win);
      return;
    }

    const texto = input?.value.trim();
    if (!texto) return;

    const sendBtn = win.querySelector('#chat-send');
    if (sendBtn) sendBtn.disabled = true;

    input.value = '';
    autoResizeTextarea(input);
    fecharPainelEmoji(win);

    const agora = new Date().toISOString();

    const { error: msgError } = await supabase.from('mensagens').insert({
      de: me.id, para: amigoId,
      mensagem: texto,
      lida: false, createdat: agora,
    });

    if (msgError) {
      console.error('[chat] erro ao enviar mensagem:', msgError);
      if (sendBtn) sendBtn.disabled = false;
      return;
    }

    await supabase.from('notificacoes').insert({
      to_uid: amigoId, from_uid: me.id,
      tipo: 'mensagem', mensagem: texto.slice(0, 120),
      lida: false, created_at: agora,
    });

    await carregarMensagens(me.id, amigoId);
    if (sendBtn) sendBtn.disabled = false;
  }

  win.querySelector('#chat-send')?.addEventListener('click', enviar);
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); enviar(); }
  });

  // ── Realtime ──
  roomChannel = supabase
    .channel('room-' + [me.id, amigoId].sort().join('-'))
    .on('postgres_changes', { event: '*', schema: 'public', table: 'mensagens' }, async (payload) => {
      const r = payload.new || payload.old;
      if (!r) return;
      const ok = (r.de === me.id && r.para === amigoId) || (r.de === amigoId && r.para === me.id);
      if (!ok || !chatEstaAbertoCom(amigoId)) return;
      await carregarMensagens(me.id, amigoId);
    })
    .subscribe();

  userStatusChannel = supabase
    .channel('chat-user-' + amigoId)
    .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'users', filter: `uid=eq.${amigoId}` }, (payload) => {
      const el = document.getElementById('chat-status');
      if (!el) return;
      el.textContent = online(payload.new) ? 'Online' : 'Offline';
      el.classList.remove('online', 'offline');
      el.classList.add(online(payload.new) ? 'online' : 'offline');
    })
    .subscribe();
};

window.fecharChatAtivo = function () {
  if (mediaRecorder && mediaRecorder.state === 'recording') mediaRecorder.stop();
  pararTimer();
  document.getElementById('janela-chat')?.remove();
  chatAbertoCom = null;
  chatLoadToken++;
  limparCliqueFora();
  if (roomChannel)      { supabase.removeChannel(roomChannel); roomChannel = null; }
  if (userStatusChannel){ supabase.removeChannel(userStatusChannel); userStatusChannel = null; }
};

// ── MONITOR DE NOTIFICAÇÕES ────────────────────────────────
export function iniciarMonitorChat(user) {
  if (monitor) { supabase.removeChannel(monitor); monitor = null; }
  if (!user) return;

  monitor = supabase
    .channel('monitor-notif-' + user.id)
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'notificacoes', filter: `to_uid=eq.${user.id}` }, async (payload) => {
      const n = payload.new;
      if (!n || n.lida) return;
      if ((n.tipo || '') !== 'mensagem') return;

      const from      = await getUser(n.from_uid);
      const nomeFrom  = from?.name || 'Amigo';

      if (chatEstaAbertoCom(n.from_uid)) {
        await carregarMensagens(user.id, n.from_uid);
        removerToastsDoContato(n.from_uid);
        return;
      }

      removerToastsDoContato(n.from_uid);

      const box = document.createElement('div');
      box.className       = 'msg-toast';
      box.dataset.fromUid = n.from_uid;

      // Ícone baseado no tipo
      const tipoIcone = (n.mensagem || '').startsWith('🎙️') ? '🎙️'
                      : (n.mensagem || '').startsWith('📷') ? '📷'
                      : '✉';

      box.innerHTML = `
        <div class="msg-toast-title">${tipoIcone} Msg</div>
        <div class="msg-toast-body">${escapeHtml(nomeFrom)}: ${escapeHtml(n.mensagem || '')}</div>
      `;

      box.addEventListener('click', () => { box.remove(); window.abrirChat(n.from_uid, nomeFrom); });
      document.body.appendChild(box);
      setTimeout(() => box.remove(), 8000);
    })
    .subscribe();
}