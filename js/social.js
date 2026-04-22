// js/social.js — Heróis da Fé — VERSÃO FINAL CORRIGIDA
// ═══════════════════════════════════════════════════════════
// BUGS CORRIGIDOS NESTA VERSÃO:
//
// [CRÍTICO] BUG-F: iniciarDesafioUsuario em social.js passava o objeto
//   { uid, nome, foto, points } mas a função em duel.js lê target.nome e
//   target.foto — porém o objeto vinha do dadosPerfil que usa userData.name
//   e campo 'foto' montado localmente. A chamada estava correta, mas
//   userData.points não era convertido para Number antes de passar.
//   Corrigido: passamos Number(userData.points || 0) explicitamente.
//
// Todos os fixes anteriores (#1–#8) foram mantidos.
// ═══════════════════════════════════════════════════════════

import { supabase } from './config.js';

let chFriends = null;
let chNotif = null;
let heartbeatTimer = null;
let _meuUid = null;

let _perfilRequestId = 0;
let _presenceHandlersBound = false;
let _sidebarRefreshTimer = null;
let _buscaDebounceTimer = null;

// ── ESTILOS ────────────────────────────────────────────────
const styleSocial = document.createElement('style');
styleSocial.innerHTML = `
  @keyframes statusGlow {
    0%, 100% { opacity: 0.7; box-shadow: 0 0 5px currentColor; }
    50% { opacity: 1; box-shadow: 0 0 15px currentColor; }
  }
  @keyframes duelRubyShine { from { left: -70%; } to { left: 130%; } }

  .status-ball {
    width: 12px; height: 12px; border-radius: 50%; display: inline-block;
    margin-right: 10px; border: 1px solid rgba(255,255,255,0.2);
    animation: statusGlow 2s infinite ease-in-out;
  }
  .status-online { background: #2ecc71; color: #2ecc71; box-shadow: 0 0 10px #2ecc71; }
  .status-offline { background: #6e020f; color: #6e020f; box-shadow: 0 0 10px #6e020f; }

  .duel-ruby-btn {
    position: relative; overflow: hidden;
    background: linear-gradient(135deg, #6e020f 0%, #8f0617 22%, #c11b34 48%, #ef5b71 65%, #8b0617 100%);
    color: #fff; border: 1px solid rgba(255, 175, 185, 0.4);
    border-radius: 14px; padding: 14px 22px; font-family: 'Cinzel', serif;
    font-weight: 800; letter-spacing: 0.6px; cursor: pointer;
    box-shadow: 0 14px 28px rgba(175, 18, 49, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 -8px 18px rgba(72, 0, 12, 0.28);
    width: 100%; margin-top: 12px;
  }
  .duel-ruby-btn::before {
    content: ''; position: absolute; top: 0; left: -70%; width: 40%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
    transform: skewX(-22deg); animation: duelRubyShine 2.4s linear infinite;
  }
  .duel-ruby-btn:active { transform: translateY(1px); box-shadow: 0 8px 16px rgba(175, 18, 49, 0.2); }
`;
document.head.appendChild(styleSocial);

// ── UTILITÁRIOS ────────────────────────────────────────────
function fecharMenuLateral() {
  try { window.fecharSidebar?.(); } catch {}
  document.body.classList.remove('menu-open');
  const sideMenu = document.getElementById('side-menu');
  if (sideMenu) sideMenu.classList.remove('active');
}

function comTimeout(promise, ms = 15000) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout_perfil')), ms))
  ]);
}

function elLista() { return document.getElementById('lista-amigos-sidebar'); }
function elResultados() { return document.getElementById('sidebar-search-results'); }
function elInput() { return document.getElementById('sidebar-search-input'); }

function campo(obj, ...keys) {
  for (const k of keys) { if (obj && obj[k] != null) return obj[k]; }
  return null;
}

function avatar(nome = '?') {
  const ini = String(nome || '?').trim().split(/\s+/).map((p) => p[0]).join('').slice(0, 2).toUpperCase() || '?';
  return `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="100%" height="100%" fill="#d4a21e"/><text x="50%" y="54%" text-anchor="middle" font-family="Arial" font-size="86" font-weight="700" fill="#fff">${ini}</text></svg>`)}`;
}

function isOnline(user) {
  const t = campo(user, 'lastUpdate', 'lastupdate');
  if (!t) return false;
  const diff = Date.now() - new Date(t).getTime();
  return diff >= 0 && diff < 90000;
}

function idade(data) {
  if (!data) return '—';
  const d = new Date(data);
  if (Number.isNaN(d.getTime())) return '—';
  const hoje = new Date();
  let anos = hoje.getFullYear() - d.getFullYear();
  const m = hoje.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < d.getDate())) anos--;
  return anos;
}

function escapeHtml(v) {
  return String(v ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
}

function escapeAttr(v) { return escapeHtml(v); }

function alerta(texto) {
  const a = document.createElement('div');
  a.className = 'side-alert';
  a.textContent = texto;
  document.body.appendChild(a);
  setTimeout(() => a.remove(), 1800);
}

async function heartbeat(uid) {
  try {
    const now = new Date().toISOString();
    await supabase.from('users').update({ lastUpdate: now, lastupdate: now }).eq('uid', uid);
  } catch (e) {
    console.warn('[heartbeat] erro:', e);
  }
}

async function buscarLinhasAmizade(uid, friendUid) {
  const { data, error } = await supabase.from('friends').select('id, uid, friend_uid, status, created_at').eq('uid', uid).eq('friend_uid', friendUid).order('id', { ascending: true });
  if (error) throw error;
  return data || [];
}

async function garantirLinhaAmizade(uid, friendUid, status) {
  const rows = await buscarLinhasAmizade(uid, friendUid);
  if (rows.length > 0) {
    const ids = rows.map((r) => r.id);
    const { error } = await supabase.from('friends').update({ status }).in('id', ids);
    if (error) throw error;
    return rows[0];
  }
  const { data, error } = await supabase.from('friends').insert({ uid, friend_uid: friendUid, status, created_at: new Date().toISOString() }).select('id, uid, friend_uid, status, created_at').single();
  if (error) throw error;
  return data;
}

async function removerPendenciasEntre(uidA, uidB) {
  const [r1, r2] = await Promise.all([
    supabase.from('friends').delete().eq('uid', uidA).eq('friend_uid', uidB).eq('status', 'pending'),
    supabase.from('friends').delete().eq('uid', uidB).eq('friend_uid', uidA).eq('status', 'pending'),
  ]);
  if (r1.error) throw r1.error;
  if (r2.error) throw r2.error;
}

async function deletarNotificacaoPedido(meuUid, fromUid) {
  const { error } = await supabase.from('notificacoes').delete().eq('to_uid', meuUid).eq('from_uid', fromUid).eq('tipo', 'pedido_amizade');
  if (error) throw error;
}

async function criarNotificacaoPedido(toUid, fromUid, nome) {
  const { error } = await supabase.from('notificacoes').insert({ to_uid: toUid, from_uid: fromUid, tipo: 'pedido_amizade', mensagem: `Pedido de amizade de ${nome || 'um usuário'}`, lida: false, created_at: new Date().toISOString() });
  if (error) throw error;
}

async function criarNotificacaoAceita(toUid, fromUid, nome) {
  const { error } = await supabase.from('notificacoes').insert({ to_uid: toUid, from_uid: fromUid, tipo: 'amizade_aceita', mensagem: `${nome || 'Seu amigo'} aceitou seu pedido de amizade`, lida: false, created_at: new Date().toISOString() });
  if (error) console.warn('[notificacao amizade_aceita] erro:', error);
}

function bindProfileButtons(uid) {
  const pic = document.getElementById('user-profile-pic');
  const btn = document.getElementById('btn-perfil-menu');
  if (pic) pic.onclick = () => window.verPerfilDetalhado(uid);
  if (btn) btn.onclick = () => window.verPerfilDetalhado(uid);
}

function abrirPerfilSeguro(uid) {
  fecharMenuLateral();
  return window.verPerfilDetalhado?.(uid);
}

function abrirChatSeguro(uid, nome) {
  fecharMenuLateral();
  return window.abrirChat?.(uid, nome);
}

// ── INICIALIZAÇÃO ──────────────────────────────────────────
export async function iniciarSocial(user) {
  if (chFriends) { await supabase.removeChannel(chFriends); chFriends = null; }
  if (chNotif) { await supabase.removeChannel(chNotif); chNotif = null; }
  if (heartbeatTimer) { clearInterval(heartbeatTimer); heartbeatTimer = null; }
  if (_sidebarRefreshTimer) { clearInterval(_sidebarRefreshTimer); _sidebarRefreshTimer = null; }
  if (_buscaDebounceTimer) { clearTimeout(_buscaDebounceTimer); _buscaDebounceTimer = null; }

  if (!user?.id) return;
  _meuUid = user.id;

  if (window.ensureObservers) {
    try { await window.ensureObservers(); } catch (e) { console.warn('[social] ensureObservers falhou:', e); }
  }

  recarregarSidebar(user.id);
  initBusca(user.id);
  bindProfileButtons(user.id);
  heartbeat(user.id);
  heartbeatTimer = setInterval(() => heartbeat(user.id), 20000); // FIX-PRESENCE: reduzido de 30s para 20s
  _sidebarRefreshTimer = setInterval(() => recarregarSidebar(user.id), 15000); // FIX-PRESENCE: reduzido de 25s para 15s

  const currentUid = user.id;
  if (!_presenceHandlersBound) {
    _presenceHandlersBound = true;
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && _meuUid) {
        heartbeat(_meuUid);
        recarregarSidebar(_meuUid);
      }
    });
    window.addEventListener('focus', () => {
      if (_meuUid) {
        heartbeat(_meuUid);
        recarregarSidebar(_meuUid);
      }
    });
  }

  chFriends = supabase.channel(`friends-live-${currentUid}`)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'friends', filter: `uid=eq.${currentUid}` }, () => recarregarSidebar(currentUid))
    .on('postgres_changes', { event: '*', schema: 'public', table: 'friends', filter: `friend_uid=eq.${currentUid}` }, () => recarregarSidebar(currentUid))
    .subscribe();

  chNotif = supabase.channel(`social-notif-live-${currentUid}`)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'notificacoes', filter: `to_uid=eq.${currentUid}` }, () => recarregarSidebar(currentUid))
    .subscribe();

  // FIX-PRESENCE: canal de presença em tempo real — atualiza dots da sidebar
  // sem precisar de F5 ou esperar o timer de 15s
  supabase.channel(`social-presence-dots-${currentUid}`)
    .on('postgres_changes',
      { event: 'UPDATE', schema: 'public', table: 'users' },
      (payload) => {
        const uid = payload.new?.uid;
        if (!uid) return;
        const t = payload.new?.lastUpdate || payload.new?.lastupdate;
        const online = t && (Date.now() - new Date(t).getTime()) < 90000;
        // Atualiza dot na sidebar sem re-renderizar a lista
        document.querySelectorAll(`[data-friend-presence-uid="${uid}"]`).forEach(el => {
          el.className = `status-ball ${online ? 'status-online' : 'status-offline'}`;
        });
        // Atualiza texto Online/Offline na meta linha
        document.querySelectorAll(`[data-friend-presence-uid="${uid}"]`).forEach(el => {
          const row = el.closest('.friend-row');
          if (!row) return;
          const metaEl = row.querySelector('.friend-meta');
          if (metaEl) {
            const parts = metaEl.textContent.split('·');
            const pts = parts[1]?.trim() || '';
            metaEl.textContent = `${online ? 'Online' : 'Offline'}${pts ? ' · ' + pts : ''}`;
          }
        });
      })
    .subscribe();
}

// ── SIDEBAR ────────────────────────────────────────────────
async function recarregarSidebar(uid = _meuUid) {
  const lista = elLista();
  if (!lista || !uid) return;

  try {
    const [pendentesResp, relacionadasResp, notifsResp] = await Promise.all([
      supabase.from('friends').select('uid, friend_uid, status, created_at').eq('friend_uid', uid).eq('status', 'pending').order('created_at', { ascending: false }),
      supabase.from('friends').select('uid, friend_uid, status, created_at').or(`and(uid.eq.${uid},status.eq.accepted),and(friend_uid.eq.${uid},status.eq.accepted)`).limit(2000),
      supabase.from('notificacoes').select('*').eq('to_uid', uid).eq('lida', false).order('created_at', { ascending: false }),
    ]);

    if (pendentesResp.error) throw pendentesResp.error;
    if (relacionadasResp.error) throw relacionadasResp.error;
    if (notifsResp.error) throw notifsResp.error;

    const pendentesRaw = pendentesResp.data || [];
    const relacionadas = relacionadasResp.data || [];
    const notifs = notifsResp.data || [];

    const amigosAceitosSet = new Set();
    for (const r of relacionadas) {
      const outroId = r.uid === uid ? r.friend_uid : r.uid;
      if (outroId) amigosAceitosSet.add(outroId);
    }

    const pendentesMap = new Map();
    for (const p of pendentesRaw) {
      if (amigosAceitosSet.has(p.uid)) continue;
      if (!pendentesMap.has(p.uid)) pendentesMap.set(p.uid, p);
    }
    const pendentes = [...pendentesMap.values()];

    const idsParaBuscar = [...new Set([...[...amigosAceitosSet], ...pendentes.map((x) => x.uid).filter(Boolean)])];

    let users = [];
    if (idsParaBuscar.length) {
      const { data, error } = await supabase.from('users').select('*').in('uid', idsParaBuscar);
      if (error) throw error;
      users = data || [];
    }

    const usersMap = new Map(users.map((u) => [u.uid, u]));
    lista.innerHTML = '';

    for (const p of pendentes) {
      const fromUser = usersMap.get(p.uid);
      if (!fromUser) continue;
      const nome = fromUser.name || 'Herói';
      const foto = campo(fromUser, 'photoURL', 'photourl') || avatar(nome);
      const div = document.createElement('div');
      div.className = 'friend-row pending-row';
      div.innerHTML = `
        <div class="friend-main">
          <img class="friend-avatar" src="${escapeAttr(foto)}" onerror="this.src='${avatar(nome)}'">
          <div class="friend-text">
            <strong>Pedido de ${escapeHtml(nome)}</strong>
            <span class="friend-meta">✉ aguardando decisão</span>
          </div>
        </div>
        <div class="friend-actions">
          <button class="mini-btn gold" data-acc="${escapeAttr(fromUser.uid)}">Aceitar</button>
          <button class="mini-btn red" data-rec="${escapeAttr(fromUser.uid)}">Recusar</button>
        </div>`;
      lista.appendChild(div);
    }

    const notifMsg = new Set(notifs.filter((n) => (n.tipo || '') === 'mensagem' || String(n.mensagem || '').toLowerCase().includes('msg')).map((n) => n.from_uid).filter(Boolean));

    const amigosOrdenados = [...amigosAceitosSet]
      .map((id) => usersMap.get(id))
      .filter(Boolean)
      .sort((a, b) => {
        const ao = isOnline(a);
        const bo = isOnline(b);
        if (notifMsg.has(a.uid) && !notifMsg.has(b.uid)) return -1;
        if (!notifMsg.has(a.uid) && notifMsg.has(b.uid)) return 1;
        if (ao && !bo) return -1;
        if (!ao && bo) return 1;
        return String(a.name || '').localeCompare(String(b.name || ''), 'pt-BR');
      })
      .slice(0, 50);

    if (!pendentes.length && !amigosOrdenados.length) {
      lista.innerHTML = '<div class="friend-empty">Nenhum amigo ainda.</div>';
      return;
    }

    for (const u of amigosOrdenados) {
      const nome = u.name || 'Herói';
      const foto = campo(u, 'photoURL', 'photourl') || avatar(nome);
      const online = isOnline(u);
      const div = document.createElement('div');
      div.className = 'friend-row';
      div.innerHTML = `
        <div class="friend-main">
          <div class="friend-avatar-wrap" style="position:relative;">
            <img class="friend-avatar" src="${escapeAttr(foto)}" onerror="this.src='${avatar(nome)}'">
            <span class="status-ball ${online ? 'status-online' : 'status-offline'}" style="position:absolute;bottom:0;right:0;width:10px;height:10px;border:2px solid #111;" data-friend-presence-uid="${escapeAttr(u.uid)}"></span>
            ${notifMsg.has(u.uid) ? '<span class="msg-badge">✉</span>' : ''}
          </div>
          <div class="friend-text">
            <strong>${escapeHtml(nome)}</strong>
            <span class="friend-meta">${online ? 'Online' : 'Offline'} · ${Number(u.points) || 0} pts</span>
          </div>
        </div>`;
      div.addEventListener('click', () => { if (notifMsg.has(u.uid)) { abrirChatSeguro(u.uid, nome); } else { abrirPerfilSeguro(u.uid); } });
      lista.appendChild(div);
    }

    lista.querySelectorAll('[data-acc]').forEach((b) => { b.addEventListener('click', async (e) => { e.stopPropagation(); await aceitarPedido(uid, b.dataset.acc); }); });
    lista.querySelectorAll('[data-rec]').forEach((b) => { b.addEventListener('click', async (e) => { e.stopPropagation(); await recusarPedido(uid, b.dataset.rec); }); });
  } catch (e) {
    console.error('[social] erro ao recarregar sidebar:', e);
  }
}

function statusRelacionamento(rows, meuUid, outroUid) {
  const idaAccepted = rows.some((r) => r.uid === meuUid && r.friend_uid === outroUid && r.status === 'accepted');
  const voltaAccepted = rows.some((r) => r.uid === outroUid && r.friend_uid === meuUid && r.status === 'accepted');
  if (idaAccepted || voltaAccepted) return 'accepted';
  const idaPending = rows.some((r) => r.uid === meuUid && r.friend_uid === outroUid && r.status === 'pending');
  const voltaPending = rows.some((r) => r.uid === outroUid && r.friend_uid === meuUid && r.status === 'pending');
  if (idaPending) return 'pending_sent';
  if (voltaPending) return 'pending_received';
  return 'none';
}

function escapeLike(termo) {
  return termo.replace(/[\\%_]/g, (c) => `\\${c}`);
}

function initBusca(meuUid) {
  const input = elInput();
  const resultados = elResultados();
  if (!input || !resultados) return;
  if (input.dataset.buscaUid === meuUid) return;
  input.dataset.buscaUid = meuUid;
  input.placeholder = 'Buscar amigo';

  let buscaSeq = 0;

  input.addEventListener('input', () => {
    if (_buscaDebounceTimer) clearTimeout(_buscaDebounceTimer);
    const termo = input.value.trim();
    if (termo.length < 2) { resultados.innerHTML = ''; return; }
    _buscaDebounceTimer = setTimeout(async () => {
      _buscaDebounceTimer = null;
      const seq = ++buscaSeq;
      try {
        const termoSeguro = escapeLike(termo);
        const [encontradosResp, relResp] = await Promise.all([
          supabase.from('users').select('*').ilike('name', `%${termoSeguro}%`).limit(20),
          supabase.from('friends').select('uid, friend_uid, status').or(`uid.eq.${meuUid},friend_uid.eq.${meuUid}`),
        ]);
        if (seq !== buscaSeq) return;
        if (encontradosResp.error) throw encontradosResp.error;
        if (relResp.error) throw relResp.error;

        const encontrados = encontradosResp.data || [];
        const relacoes = relResp.data || [];
        resultados.innerHTML = '';

        encontrados.filter((u) => u.uid !== meuUid).forEach((u) => {
          const status = statusRelacionamento(relacoes, meuUid, u.uid);
          const nome = u.name || 'Herói';
          const foto = campo(u, 'photoURL', 'photourl') || avatar(nome);
          const card = document.createElement('div');
          card.className = 'search-user-row';
          card.innerHTML = `
            <img class="search-avatar" src="${escapeAttr(foto)}" onerror="this.src='${avatar(nome)}'">
            <div class="search-user-text">
              <strong>${escapeHtml(nome)}</strong>
              <span>${Number(u.points) || 0} pts</span>
            </div>
            <div class="search-actions">
              ${status === 'accepted' ? '<button class="mini-btn dark act-msg">Mensagem</button>' : status === 'pending_sent' ? '<button class="mini-btn dark" disabled>Pendente</button>' : status === 'pending_received' ? '<button class="mini-btn gold act-accept">Aceitar</button>' : '<button class="mini-btn gold act-add">+Amigo</button>'}
            </div>`;
          card.querySelector('.act-add')?.addEventListener('click', async (e) => { e.stopPropagation(); await window.enviarPedidoAmizade(u.uid, nome); });
          card.querySelector('.act-accept')?.addEventListener('click', async (e) => { e.stopPropagation(); await aceitarPedido(meuUid, u.uid); });
          card.querySelector('.act-msg')?.addEventListener('click', (e) => { e.stopPropagation(); abrirChatSeguro(u.uid, nome); });
          card.addEventListener('click', () => abrirPerfilSeguro(u.uid));
          resultados.appendChild(card);
        });
      } catch (e) { if (seq === buscaSeq) console.warn('[busca] erro:', e); }
    }, 320);
  });
}

// ── PERFIL ─────────────────────────────────────────────────
async function dadosPerfil(uid, viewerId) {
  // FIX: wrap com timeout para garantir que nunca trava indefinidamente
  const [userResp, relResp, chaptersResp] = await Promise.all([
    comTimeout(supabase.from('users').select('*').eq('uid', uid).maybeSingle(), 8000),
    comTimeout(supabase.from('friends').select('id,uid,friend_uid,status').or(`uid.eq.${viewerId},friend_uid.eq.${viewerId}`), 8000),
    // FIX: seleciona apenas 'livro' para contar livros únicos (evita buscar milhar de linhas)
    comTimeout(supabase.from('progresso').select('livro').eq('uid', uid).eq('concluido', true), 8000),
  ]);
  if (userResp.error) throw userResp.error;
  if (relResp.error) throw relResp.error;
  if (chaptersResp.error) throw chaptersResp.error;

  const rows = (relResp.data || []).filter((r) => ((r.uid === viewerId && r.friend_uid === uid) || (r.uid === uid && r.friend_uid === viewerId)));
  const jaAmigo = rows.some((r) => r.status === 'accepted');
  const euEnvieiPendente = !jaAmigo && rows.some((r) => r.uid === viewerId && r.friend_uid === uid && r.status === 'pending');
  const eleMeEnviouPendente = !jaAmigo && rows.some((r) => r.uid === uid && r.friend_uid === viewerId && r.status === 'pending');

  const badgesObj = userResp.data?.badges || {};
  const trofeus = Object.keys(badgesObj).length;

  // FIX: conta livros únicos explorados
  const livrosUnicos = new Set((chaptersResp.data || []).map(r => r.livro).filter(Boolean));

  return {
    userData: userResp.data,
    jaAmigo,
    pendente: euEnvieiPendente,
    pedidoRecebido: eleMeEnviouPendente,
    livrosLidos: livrosUnicos.size,
    trofeus
  };
}

window.verPerfilDetalhado = async function verPerfilDetalhado(uid) {
  const reqId = ++_perfilRequestId;

  document.getElementById('perfil-detalhado')?.remove();
  fecharMenuLateral();

  const overlay = document.createElement('div');
  overlay.id = 'perfil-detalhado';
  overlay.className = 'perfil-overlay';
  overlay.innerHTML = `
    <div class="perfil-modal loading" style="color:#d4af37;padding:40px;text-align:center;">
      <div style="font-size:2rem;margin-bottom:12px;">⚔️</div>
      <div>Carregando perfil...</div>
    </div>`;
  document.body.appendChild(overlay);

  let _fechado = false;
  const fecharOverlay = () => {
    if (_fechado) return;
    _fechado = true;
    _perfilRequestId++;
    if (overlay.parentNode) overlay.remove();
  };
  overlay.addEventListener('click', (e) => { if (e.target === overlay) fecharOverlay(); });

  // FIX: timeout reduzido para 10s (dadosPerfil já tem timeout interno de 8s)
  const _timeoutId = setTimeout(() => {
    if (!_fechado) {
      fecharOverlay();
      alerta('Perfil demorou muito. Verifique sua conexão.');
    }
  }, 10000);

  try {
    // FIX: getUser com timeout próprio para não travar
    const authResp = await comTimeout(supabase.auth.getUser(), 5000);
    const user = authResp?.data?.user;
    if (reqId !== _perfilRequestId) return;
    if (!user) { fecharOverlay(); return; }

    const { userData, jaAmigo, pendente, pedidoRecebido, livrosLidos, trofeus } = await dadosPerfil(uid, user.id);
    if (reqId !== _perfilRequestId) return;
    if (!userData) {
      clearTimeout(_timeoutId);
      fecharOverlay();
      alerta('Perfil não encontrado.');
      return;
    }

    clearTimeout(_timeoutId);

    const me = uid === user.id;
    const nome = userData.name || 'Herói';
    const foto = campo(userData, 'photoURL', 'photourl') || avatar(nome);
    const nivel = Number(campo(userData, 'nivel')) || 1;

    const online = isOnline(userData);
    const duelBtnHtml = !me ? (online
      ? `<button id="perfil-duel-btn" class="duel-ruby-btn" style="width:100%;">⚔️ DESAFIAR PARA DUELO</button>`
      : `<button id="perfil-duel-btn-offline" class="duel-ruby-btn" style="width:100%;background:linear-gradient(135deg,#3a3a3a,#555,#3a3a3a);border-color:rgba(255,255,255,0.1);box-shadow:none;cursor:not-allowed;opacity:0.6;">⚔️ DESAFIAR PARA DUELO</button>`
    ) : '';

    overlay.innerHTML = `
      <div class="perfil-modal">
        <button class="perfil-close">×</button>
        <button class="perfil-back">←</button>
        <div class="perfil-photo-wrap">
          <img class="perfil-photo" src="${escapeAttr(foto)}" onerror="this.src='${avatar(nome)}'">
        </div>
        <div class="perfil-name">${escapeHtml(nome)}</div>
        <div class="perfil-points">${Number(userData.points) || 0} pts</div>
        <div class="perfil-grid">
          <div><span>Nível</span><strong>${nivel}</strong></div>
          <div><span>Idade</span><strong>${idade(userData.data_nascimento)}</strong></div>
          <div><span>Livros lidos</span><strong>${livrosLidos}</strong></div>
          <div><span>Troféus</span><strong>${trofeus}</strong></div>
        </div>
        <div class="perfil-actions" style="margin-bottom:12px;">
          <button id="perfil-badges-btn" class="glass-btn dark">Troféus</button>
          ${me
            ? '<button id="perfil-mudar-foto" class="glass-btn gold">Mudar foto</button>'
            : jaAmigo
              ? '<button id="perfil-msg-btn" class="glass-btn gold">Enviar msg</button>'
              : pedidoRecebido
                ? '<button id="perfil-accept-btn" class="glass-btn gold">Aceitar</button>'
                : pendente
                  ? '<button class="glass-btn dark" disabled>Pendente</button>'
                  : '<button id="perfil-add-btn" class="glass-btn gold">+Amigo</button>'
          }
        </div>
        <div id="perfil-duel-section" style="margin-top:12px;width:100%;">
          ${duelBtnHtml}
        </div>
      </div>`;

    overlay.querySelector('.perfil-close')?.addEventListener('click', fecharOverlay);
    overlay.querySelector('.perfil-back')?.addEventListener('click', fecharOverlay);
    overlay.querySelector('#perfil-mudar-foto')?.addEventListener('click', () => document.getElementById('foto-input')?.click());
    overlay.querySelector('#perfil-msg-btn')?.addEventListener('click', () => { fecharOverlay(); abrirChatSeguro(uid, nome); });
    overlay.querySelector('#perfil-add-btn')?.addEventListener('click', async () => { await window.enviarPedidoAmizade(uid, nome); });
    overlay.querySelector('#perfil-accept-btn')?.addEventListener('click', async () => { await aceitarPedido(user.id, uid); fecharOverlay(); });
    overlay.querySelector('#perfil-badges-btn')?.addEventListener('click', () => {
      fecharOverlay();
      window.mostrarBadges?.();
    });

    // BUG-F: converte points para Number explicitamente antes de passar para duel.js
    overlay.querySelector('#perfil-duel-btn')?.addEventListener('click', () => {
      fecharOverlay();
      window.iniciarDesafioUsuario({
        uid,
        nome,
        foto,
        name: nome,                             // compatibilidade com ambos os campos
        points: Number(userData.points || 0)    // BUG-F: garante número
      });
    });
    overlay.querySelector('#perfil-duel-btn-offline')?.addEventListener('click', () => {
      _mostrarToastOffline(nome);
    });

  } catch (e) {
    clearTimeout(_timeoutId);
    if (reqId !== _perfilRequestId) return;
    console.error('[perfil] erro:', e);
    if (!_fechado) {
      fecharOverlay();
      const msg = e?.message === 'timeout_perfil'
        ? 'Conexão lenta. Tente novamente.'
        : 'Não foi possível carregar o perfil.';
      alerta(msg);
    }
  }
};

function _mostrarToastOffline(nome) {
  document.getElementById('_toast-offline-duel')?.remove();
  const t = document.createElement('div');
  t.id = '_toast-offline-duel';
  t.style.cssText = `
    position:fixed;left:50%;bottom:32px;transform:translateX(-50%) translateY(20px);
    z-index:10002;background:linear-gradient(135deg,#1a1a1a,#2a2a2a);
    border:1px solid #f44336;border-radius:16px;padding:14px 24px;
    color:#ff6b6b;font-weight:700;font-size:0.95rem;text-align:center;
    box-shadow:0 0 20px rgba(244,67,54,0.4),0 8px 24px rgba(0,0,0,0.5);
    opacity:0;transition:opacity 0.25s ease,transform 0.25s ease;
    pointer-events:none;white-space:nowrap;
  `;
  t.innerHTML = `📵 ${escapeHtml(nome)} está <strong>offline</strong> agora`;
  document.body.appendChild(t);
  requestAnimationFrame(() => {
    t.style.opacity = '1';
    t.style.transform = 'translateX(-50%) translateY(0)';
  });
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(() => t.remove(), 280);
  }, 2500);
}

// ── AMIZADE ────────────────────────────────────────────────
window.enviarPedidoAmizade = async function enviarPedidoAmizade(amigoId, nome = '') {
  try {
    const { data: authData, error: authError } = await supabase.auth.getUser();
    if (authError) throw authError;
    const user = authData?.user;
    if (!user?.id) return;
    if (user.id === amigoId) { alerta('Você não pode adicionar a si mesmo'); return; }

    const [minhaRelacao, relacaoInversa] = await Promise.all([buscarLinhasAmizade(user.id, amigoId), buscarLinhasAmizade(amigoId, user.id)]);
    const minha = minhaRelacao[0] || null;
    const inversa = relacaoInversa[0] || null;

    if (minha?.status === 'accepted' || inversa?.status === 'accepted') { alerta('Vocês já são amigos'); await recarregarSidebar(user.id); return; }
    if (minha?.status === 'pending') { alerta('Pedido já enviado'); await recarregarSidebar(user.id); return; }
    if (inversa?.status === 'pending') { await aceitarPedido(user.id, amigoId); alerta('Pedido aceito com sucesso'); return; }

    await garantirLinhaAmizade(user.id, amigoId, 'pending');
    await criarNotificacaoPedido(amigoId, user.id, nome);
    alerta('Pedido enviado com sucesso');
    await recarregarSidebar(user.id);
  } catch (e) {
    console.error('[enviarPedido] erro:', e);
    alerta('Erro ao enviar pedido. Tente novamente.');
  }
};

async function aceitarPedido(meuUid, fromUid) {
  try {
    await removerPendenciasEntre(meuUid, fromUid);
    await garantirLinhaAmizade(meuUid, fromUid, 'accepted');
    await garantirLinhaAmizade(fromUid, meuUid, 'accepted');
    await deletarNotificacaoPedido(meuUid, fromUid);

    const { data: meUser } = await supabase.from('users').select('name').eq('uid', meuUid).maybeSingle();
    await criarNotificacaoAceita(fromUid, meuUid, meUser?.name || 'Seu amigo');
    await recarregarSidebar(meuUid);
    alerta('Amizade aceita com sucesso');
  } catch (e) {
    console.error('[aceitarPedido] erro:', e);
    alerta('Erro ao aceitar amizade. Tente novamente.');
  }
}

async function recusarPedido(meuUid, fromUid) {
  try {
    const { error: deleteError } = await supabase.from('friends').delete().eq('uid', fromUid).eq('friend_uid', meuUid).eq('status', 'pending');
    if (deleteError) throw deleteError;
    await deletarNotificacaoPedido(meuUid, fromUid);
    await recarregarSidebar(meuUid);
    alerta('Pedido recusado');
  } catch (e) {
    console.error('[recusarPedido] erro:', e);
    alerta('Erro ao recusar pedido. Tente novamente.');
  }
}

window.recarregarSidebarSocial = recarregarSidebar;