// js/social.js — PRONTO v2
// Corrige:
// 1. Pedido some ao aceitar amizade
// 2. Amigo passa para a lista de amigos
// 3. Pending não aparece se já existir accepted
// 4. Sidebar fica resiliente mesmo com dados antigos no banco
// 5. Busca e perfil respeitam amizade aceita antes de pending

import { supabase } from './config.js';

let chFriends = null;
let chNotif = null;
let heartbeatTimer = null;
let _meuUid = null;


let _perfilRequestId = 0;
let _presenceHandlersBound = false;

function fecharMenuLateral() {
  try { window.fecharSidebar?.(); } catch {}
  document.body.classList.remove('menu-open');
  const sideMenu = document.getElementById('side-menu');
  if (sideMenu) sideMenu.classList.remove('active');
}

function comTimeout(promise, ms = 8000) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout_perfil')), ms))
  ]);
}


function elLista() {
  return document.getElementById('lista-amigos-sidebar');
}

function elResultados() {
  return document.getElementById('sidebar-search-results');
}

function elInput() {
  return document.getElementById('sidebar-search-input');
}

function campo(obj, ...keys) {
  for (const k of keys) {
    if (obj && obj[k] != null) return obj[k];
  }
  return null;
}

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

function isOnline(user) {
  const t = campo(user, 'lastUpdate', 'lastupdate');
  if (!t) return false;
  const diff = Date.now() - new Date(t).getTime();
  return diff >= 0 && diff < 180000;
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
  return String(v ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function escapeAttr(v) {
  return escapeHtml(v);
}



(function injectPerfilDuelStyle(){
  if (document.getElementById('perfil-duelo-style')) return;
  const s = document.createElement('style');
  s.id = 'perfil-duelo-style';
  s.textContent = `
    .perfil-grid.gold-grid div span{color:#d4af37 !important;font-weight:600}
    .perfil-grid.gold-grid div strong{color:#f6d875 !important;font-weight:800}
    .perfil-actions.perfil-actions-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .perfil-actions.perfil-actions-grid + .perfil-actions.perfil-actions-grid{margin-top:12px}
    .duel-ruby-profile{
      position:relative;overflow:hidden;
      background:linear-gradient(135deg,#6e020f 0%,#8f0617 22%,#c11b34 48%,#ef5b71 65%,#8b0617 100%) !important;
      border:1px solid rgba(255,175,185,.38) !important;
      color:#fff !important;
      box-shadow:0 12px 28px rgba(175,18,49,.34), inset 0 1px 0 rgba(255,255,255,.22), inset 0 -8px 18px rgba(72,0,12,.28);
    }
    .duel-ruby-profile::before{
      content:'';position:absolute;top:0;left:-70%;width:40%;height:100%;
      background:linear-gradient(90deg,transparent,rgba(255,255,255,.38),transparent);
      transform:skewX(-22deg);animation:duelSweep 2.3s linear infinite;
    }
    @keyframes duelSweep{from{left:-70%}to{left:130%}}
  `;
  document.head.appendChild(s);
})();

function alerta(texto) {
  const a = document.createElement('div');
  a.className = 'side-alert';
  a.textContent = texto;
  document.body.appendChild(a);
  setTimeout(() => a.remove(), 1800);
}

async function heartbeat(uid) {
  try {
    await supabase
      .from('users')
      .update({
        lastUpdate: new Date().toISOString(),
        lastupdate: new Date().toISOString(),
      })
      .eq('uid', uid);
  } catch (e) {
    console.warn('[heartbeat] erro:', e);
  }
}

async function buscarLinhasAmizade(uid, friendUid) {
  const { data, error } = await supabase
    .from('friends')
    .select('id, uid, friend_uid, status, created_at')
    .eq('uid', uid)
    .eq('friend_uid', friendUid)
    .order('id', { ascending: true });

  if (error) throw error;
  return data || [];
}

async function garantirLinhaAmizade(uid, friendUid, status) {
  const rows = await buscarLinhasAmizade(uid, friendUid);

  if (rows.length > 0) {
    const ids = rows.map((r) => r.id);
    const { error } = await supabase
      .from('friends')
      .update({ status })
      .in('id', ids);

    if (error) throw error;
    return rows[0];
  }

  const { data, error } = await supabase
    .from('friends')
    .insert({
      uid,
      friend_uid: friendUid,
      status,
      created_at: new Date().toISOString(),
    })
    .select('id, uid, friend_uid, status, created_at')
    .single();

  if (error) throw error;
  return data;
}

async function removerPendenciasEntre(uidA, uidB) {
  const [r1, r2] = await Promise.all([
    supabase
      .from('friends')
      .delete()
      .eq('uid', uidA)
      .eq('friend_uid', uidB)
      .eq('status', 'pending'),

    supabase
      .from('friends')
      .delete()
      .eq('uid', uidB)
      .eq('friend_uid', uidA)
      .eq('status', 'pending'),
  ]);

  if (r1.error) throw r1.error;
  if (r2.error) throw r2.error;
}

async function marcarNotificacoesLidas(meuUid, fromUid, tipo = 'pedido_amizade') {
  const { error } = await supabase
    .from('notificacoes')
    .update({ lida: true })
    .eq('to_uid', meuUid)
    .eq('from_uid', fromUid)
    .eq('tipo', tipo);

  if (error) throw error;
}

async function criarNotificacaoPedido(toUid, fromUid, nome) {
  const { error } = await supabase.from('notificacoes').insert({
    to_uid: toUid,
    from_uid: fromUid,
    tipo: 'pedido_amizade',
    mensagem: `Pedido de amizade de ${nome || 'um usuário'}`,
    lida: false,
    created_at: new Date().toISOString(),
  });

  if (error) throw error;
}

async function criarNotificacaoAceita(toUid, fromUid, nome) {
  const { error } = await supabase.from('notificacoes').insert({
    to_uid: toUid,
    from_uid: fromUid,
    tipo: 'amizade_aceita',
    mensagem: `${nome || 'Seu amigo'} aceitou seu pedido de amizade`,
    lida: false,
    created_at: new Date().toISOString(),
  });

  if (error) {
    console.warn('[notificacao amizade_aceita] erro:', error);
  }
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

export function iniciarSocial(user) {
  if (chFriends) {
    supabase.removeChannel(chFriends);
    chFriends = null;
  }

  if (chNotif) {
    supabase.removeChannel(chNotif);
    chNotif = null;
  }

  if (heartbeatTimer) {
    clearInterval(heartbeatTimer);
    heartbeatTimer = null;
  }

  if (!user?.id) return;

  _meuUid = user.id;

  recarregarSidebar(user.id);
  initBusca(user.id);
  bindProfileButtons(user.id);
  heartbeat(user.id);
  heartbeatTimer = setInterval(() => heartbeat(user.id), 45000);

  if (!_presenceHandlersBound) {
    _presenceHandlersBound = true;
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && _meuUid) heartbeat(_meuUid);
    });
    window.addEventListener('focus', () => {
      if (_meuUid) heartbeat(_meuUid);
    });
  }

  chFriends = supabase
    .channel(`friends-live-${user.id}`)
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'friends', filter: `uid=eq.${user.id}` },
      () => recarregarSidebar(user.id)
    )
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'friends', filter: `friend_uid=eq.${user.id}` },
      () => recarregarSidebar(user.id)
    )
    .on(
      'postgres_changes',
      { event: 'UPDATE', schema: 'public', table: 'users', filter: `uid=eq.${user.id}` },
      () => recarregarSidebar(user.id)
    )
    .subscribe();

  chNotif = supabase
    .channel(`social-notif-live-${user.id}`)
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'notificacoes',
        filter: `to_uid=eq.${user.id}`,
      },
      () => recarregarSidebar(user.id)
    )
    .subscribe();
}

async function recarregarSidebar(uid = _meuUid) {
  const lista = elLista();
  if (!lista || !uid) return;

  try {
    const [pendentesResp, relacionadasResp, notifsResp] = await Promise.all([
      supabase
        .from('friends')
        .select('uid, friend_uid, status, created_at')
        .eq('friend_uid', uid)
        .eq('status', 'pending')
        .order('created_at', { ascending: false }),

      supabase
        .from('friends')
        .select('uid, friend_uid, status, created_at')
        .or(`and(uid.eq.${uid},status.eq.accepted),and(friend_uid.eq.${uid},status.eq.accepted)`)
        .limit(200),

      supabase
        .from('notificacoes')
        .select('*')
        .eq('to_uid', uid)
        .eq('lida', false)
        .order('created_at', { ascending: false }),
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

    const idsParaBuscar = [
      ...new Set([
        ...[...amigosAceitosSet],
        ...pendentes.map((x) => x.uid).filter(Boolean),
      ]),
    ];

    let users = [];
    if (idsParaBuscar.length) {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .in('uid', idsParaBuscar);

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

    const notifMsg = new Set(
      notifs
        .filter((n) => (n.tipo || '') === 'mensagem' || String(n.mensagem || '').toLowerCase().includes('msg'))
        .map((n) => n.from_uid)
        .filter(Boolean)
    );

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
      .slice(0, 10);

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
          <div class="friend-avatar-wrap">
            <img class="friend-avatar" src="${escapeAttr(foto)}" onerror="this.src='${avatar(nome)}'">
            <span class="status-dot ${online ? 'online' : 'offline'}"></span>
            ${notifMsg.has(u.uid) ? '<span class="msg-badge">✉</span>' : ''}
          </div>
          <div class="friend-text">
            <strong>${escapeHtml(nome)}</strong>
            <span class="friend-meta">${online ? 'Online' : 'Offline'} · ${Number(u.points) || 0} pts</span>
          </div>
        </div>`;

      div.addEventListener('click', () => {
        if (notifMsg.has(u.uid)) {
          abrirChatSeguro(u.uid, nome);
        } else {
          abrirPerfilSeguro(u.uid);
        }
      });

      lista.appendChild(div);
    }

    lista.querySelectorAll('[data-acc]').forEach((b) => {
      b.addEventListener('click', async (e) => {
        e.stopPropagation();
        await aceitarPedido(uid, b.dataset.acc);
      });
    });

    lista.querySelectorAll('[data-rec]').forEach((b) => {
      b.addEventListener('click', async (e) => {
        e.stopPropagation();
        await recusarPedido(uid, b.dataset.rec);
      });
    });
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
  // Escapa caracteres especiais do ilike para evitar queries quebradas
  return termo.replace(/[\\%_]/g, (c) => `\\${c}`);
}

function initBusca(meuUid) {
  const input = elInput();
  const resultados = elResultados();
  if (!input || !resultados) return;

  // Usa atributo no elemento para evitar duplicar listeners mesmo se
  // initBusca for chamada várias vezes (sidebar fecha/abre, reload social, etc.)
  if (input.dataset.buscaUid === meuUid) return;
  input.dataset.buscaUid = meuUid;

  input.placeholder = 'Buscar amigo';

  let debounceTimer = null;
  // Contador de request: só renderiza o resultado da última busca disparada
  let buscaSeq = 0;

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    const termo = input.value.trim();

    if (termo.length < 2) {
      resultados.innerHTML = '';
      return;
    }

    debounceTimer = setTimeout(async () => {
      // Captura o seq desta busca antes de qualquer await
      const seq = ++buscaSeq;

      try {
        const termoSeguro = escapeLike(termo);

        const [encontradosResp, relResp] = await Promise.all([
          supabase.from('users').select('*').ilike('name', `%${termoSeguro}%`).limit(20),
          supabase
            .from('friends')
            .select('uid, friend_uid, status')
            .or(`uid.eq.${meuUid},friend_uid.eq.${meuUid}`),
        ]);

        // Se já foi disparada uma busca mais nova, descarta este resultado
        if (seq !== buscaSeq) return;

        if (encontradosResp.error) throw encontradosResp.error;
        if (relResp.error) throw relResp.error;

        const encontrados = encontradosResp.data || [];
        const relacoes = relResp.data || [];

        resultados.innerHTML = '';

        encontrados
          .filter((u) => u.uid !== meuUid)
          .forEach((u) => {
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
                ${status === 'accepted'
                  ? '<button class="mini-btn dark act-msg">Mensagem</button>'
                  : status === 'pending_sent'
                    ? '<button class="mini-btn dark" disabled>Pendente</button>'
                    : status === 'pending_received'
                      ? '<button class="mini-btn gold act-accept">Aceitar</button>'
                      : '<button class="mini-btn gold act-add">+Amigo</button>'}
              </div>`;

            card.querySelector('.act-add')?.addEventListener('click', async (e) => {
              e.stopPropagation();
              await window.enviarPedidoAmizade(u.uid, nome);
            });

            card.querySelector('.act-accept')?.addEventListener('click', async (e) => {
              e.stopPropagation();
              await aceitarPedido(meuUid, u.uid);
            });

            card.querySelector('.act-msg')?.addEventListener('click', (e) => {
              e.stopPropagation();
              abrirChatSeguro(u.uid, nome);
            });

            card.addEventListener('click', () => abrirPerfilSeguro(u.uid));
            resultados.appendChild(card);
          });
      } catch (e) {
        if (seq === buscaSeq) {
          console.warn('[busca] erro:', e);
        }
      }
    }, 320);
  });
}


async function dadosPerfil(uid, viewerId) {
  const [userResp, viewerResp, relResp, chaptersResp, trophiesResp, versosResp] = await Promise.all([
    supabase.from('users').select('*').eq('uid', uid).maybeSingle(),
    supabase.from('users').select('points').eq('uid', viewerId).maybeSingle(),
    supabase
      .from('friends')
      .select('id,uid,friend_uid,status')
      .or(`uid.eq.${viewerId},friend_uid.eq.${viewerId}`),
    supabase.from('progresso').select('id').eq('uid', uid).eq('concluido', true),
    supabase.from('user_badges').select('id').eq('uid', uid).eq('conquistada', true),
    supabase.from('versos_lidos').select('id', { count: 'exact', head: true }).eq('uid', uid).eq('lido', true),
  ]);

  if (userResp.error) throw userResp.error;
  if (viewerResp.error) throw viewerResp.error;
  if (relResp.error) throw relResp.error;
  if (chaptersResp.error) throw chaptersResp.error;
  if (trophiesResp.error) throw trophiesResp.error;
  if (versosResp.error) throw versosResp.error;

  const rows = (relResp.data || []).filter((r) => {
    return (
      (r.uid === viewerId && r.friend_uid === uid) ||
      (r.uid === uid && r.friend_uid === viewerId)
    );
  });

  const jaAmigo = rows.some((r) => r.status === 'accepted');
  const euEnvieiPendente = !jaAmigo && rows.some((r) => r.uid === viewerId && r.friend_uid === uid && r.status === 'pending');
  const eleMeEnviouPendente = !jaAmigo && rows.some((r) => r.uid === uid && r.friend_uid === viewerId && r.status === 'pending');

  return {
    userData: userResp.data,
    viewerPoints: Number(viewerResp.data?.points || 0),
    jaAmigo,
    pendente: euEnvieiPendente,
    pedidoRecebido: eleMeEnviouPendente,
    livrosLidos: (chaptersResp.data || []).length,
    trofeus: (trophiesResp.data || []).length,
    versosLidos: typeof versosResp.count === 'number' ? versosResp.count : 0,
  };
}

window.verPerfilDetalhado = async function verPerfilDetalhado(uid) {
  const reqId = ++_perfilRequestId;

  document.getElementById('perfil-detalhado')?.remove();
  fecharMenuLateral();

  const overlay = document.createElement('div');
  overlay.id = 'perfil-detalhado';
  overlay.className = 'perfil-overlay';
  overlay.innerHTML = '<div class="perfil-modal loading" style="color:#d4af37; padding:40px; text-align:center;">Carregando...</div>';
  document.body.appendChild(overlay);

  const fecharOverlay = () => {
    if (overlay && overlay.parentNode) overlay.remove();
  };

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) fecharOverlay();
  });

  try {
    const authResp = await comTimeout(supabase.auth.getUser(), 6000);
    const user = authResp?.data?.user;
    if (!user) {
      fecharOverlay();
      return;
    }

    let { userData, viewerPoints, jaAmigo, pendente, pedidoRecebido, livrosLidos, trofeus, versosLidos } = await comTimeout(dadosPerfil(uid, user.id), 8000);

    try {
      const { data: freshUser } = await supabase
        .from('users')
        .select('*')
        .eq('uid', uid)
        .maybeSingle();
      if (freshUser) userData = freshUser;
    } catch {}

    if (reqId !== _perfilRequestId) {
      fecharOverlay();
      return;
    }

    if (!userData) {
      fecharOverlay();
      return;
    }

    const me = uid === user.id;
    const nome = userData.name || 'Herói';
    const foto = campo(userData, 'photoURL', 'photourl') || avatar(nome);
    const nivel = Number(campo(userData, 'nivel')) || 1;
    const pontosOponente = Number(userData.points || 0);
    const onlineAgora = isOnline(userData);
    const podeDesafiar = !me && onlineAgora && viewerPoints >= 100 && pontosOponente >= 100;
    const motivoDesafio = !onlineAgora
      ? 'Offline'
      : viewerPoints < 100
        ? 'Você precisa de 100 pts'
        : pontosOponente < 100
          ? 'Oponente sem 100 pts'
          : '';

    const acaoPrincipal = me
      ? '<button id="perfil-mudar-foto" class="glass-btn gold">Mudar foto</button>'
      : jaAmigo
        ? '<button id="perfil-msg-btn" class="glass-btn gold">Enviar msg</button>'
        : pedidoRecebido
          ? '<button id="perfil-accept-btn" class="glass-btn gold">Aceitar</button>'
          : pendente
            ? '<button class="glass-btn dark" disabled>Pendente</button>'
            : '<button id="perfil-add-btn" class="glass-btn gold">+Amigo</button>';

    overlay.innerHTML = `
      <div class="perfil-modal">
        <button class="perfil-close">×</button>
        <button class="perfil-back">←</button>
        <div class="perfil-photo-wrap">
          <img class="perfil-photo" src="${escapeAttr(foto)}" onerror="this.src='${avatar(nome)}'">
        </div>
        <div class="perfil-name" style="color:#f8e7a6">${escapeHtml(nome)}</div>
        <div class="perfil-points" style="color:#d4af37">${pontosOponente} pts</div>
        <div class="perfil-grid gold-grid">
          <div><span>Nível</span><strong>${nivel}</strong></div>
          <div><span>Versos lidos</span><strong>${versosLidos}</strong></div>
          <div><span>Livros lidos</span><strong>${livrosLidos}</strong></div>
          <div><span>Troféus</span><strong>${trofeus}</strong></div>
        </div>
        <div class="perfil-actions perfil-actions-grid">
          <button id="perfil-badges-btn" class="glass-btn dark">Troféus</button>
          ${acaoPrincipal}
        </div>
        ${!me ? `<div class="perfil-actions perfil-actions-grid">${podeDesafiar ? '<button id="perfil-duel-btn" class="glass-btn duel-ruby-profile">Desafiar</button>' : `<button class="glass-btn dark" disabled>${escapeHtml(motivoDesafio)}</button>`}</div>` : ''}
        <div id="perfil-extra"></div>
      </div>`;

    overlay.querySelector('.perfil-close')?.addEventListener('click', fecharOverlay);
    overlay.querySelector('.perfil-back')?.addEventListener('click', fecharOverlay);
    overlay.querySelector('#perfil-mudar-foto')?.addEventListener('click', () => document.getElementById('foto-input')?.click());
    overlay.querySelector('#perfil-msg-btn')?.addEventListener('click', () => {
      fecharOverlay();
      abrirChatSeguro(uid, nome);
    });
    overlay.querySelector('#perfil-add-btn')?.addEventListener('click', async () => {
      await window.enviarPedidoAmizade(uid, nome);
    });
    overlay.querySelector('#perfil-accept-btn')?.addEventListener('click', async () => {
      await aceitarPedido(user.id, uid);
      fecharOverlay();
    });
    overlay.querySelector('#perfil-badges-btn')?.addEventListener('click', () => window.mostrarBadges?.());
    overlay.querySelector('#perfil-duel-btn')?.addEventListener('click', () => {
      fecharOverlay();
      window.iniciarDesafioUsuario?.({ uid, nome, foto, points: pontosOponente });
    });
  } catch (e) {
    console.error('[perfil] erro:', e);
    fecharOverlay();
    alerta('Não foi possível carregar o perfil. Tente novamente.');
  }
};


window.enviarPedidoAmizade = async function enviarPedidoAmizade(amigoId, nome = '') {
  try {
    const { data: authData, error: authError } = await supabase.auth.getUser();
    if (authError) throw authError;

    const user = authData?.user;
    if (!user?.id) return;

    if (user.id === amigoId) {
      alerta('Você não pode adicionar a si mesmo');
      return;
    }

    const [minhaRelacao, relacaoInversa] = await Promise.all([
      buscarLinhasAmizade(user.id, amigoId),
      buscarLinhasAmizade(amigoId, user.id),
    ]);

    const minha = minhaRelacao[0] || null;
    const inversa = relacaoInversa[0] || null;

    if (minha?.status === 'accepted' || inversa?.status === 'accepted') {
      alerta('Vocês já são amigos');
      await recarregarSidebar(user.id);
      return;
    }

    if (minha?.status === 'pending') {
      alerta('Pedido já enviado');
      await recarregarSidebar(user.id);
      return;
    }

    if (inversa?.status === 'pending') {
      await aceitarPedido(user.id, amigoId);
      alerta('Pedido aceito com sucesso');
      return;
    }

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
    await marcarNotificacoesLidas(meuUid, fromUid, 'pedido_amizade');

    const { data: meUser } = await supabase
      .from('users')
      .select('name')
      .eq('uid', meuUid)
      .maybeSingle();

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
    const { error: deleteError } = await supabase
      .from('friends')
      .delete()
      .eq('uid', fromUid)
      .eq('friend_uid', meuUid)
      .eq('status', 'pending');

    if (deleteError) throw deleteError;

    await marcarNotificacoesLidas(meuUid, fromUid, 'pedido_amizade');
    await recarregarSidebar(meuUid);
    alerta('Pedido recusado');
  } catch (e) {
    console.error('[recusarPedido] erro:', e);
    alerta('Erro ao recusar pedido. Tente novamente.');
  }
}

window.recarregarSidebarSocial = recarregarSidebar;