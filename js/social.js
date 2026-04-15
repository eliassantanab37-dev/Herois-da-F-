// js/social.js
import { supabase } from './config.js';

const lista = document.getElementById('lista-amigos-sidebar');
const resultados = document.getElementById('sidebar-search-results');
const input = document.getElementById('sidebar-search-input');
let chFriends = null, chNotif = null, heartbeatTimer = null;

function campo(u, ...keys){ for (const k of keys) if (u && u[k] != null) return u[k]; return null; }
function avatar(nome='?'){
  const ini = nome.split(' ').map(p=>p[0]).join('').slice(0,2).toUpperCase() || '?';
  return `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="100%" height="100%" fill="#d4a21e"/><text x="50%" y="54%" text-anchor="middle" font-family="Arial" font-size="86" font-weight="700" fill="#fff">${ini}</text></svg>`)}`;
}
function isOnline(v){ const t = campo(v,'lastUpdate','lastupdate'); if (!t) return false; return Date.now() - new Date(t).getTime() < 90000; }
function idade(data){ if (!data) return '—'; const d = new Date(data); if (isNaN(d)) return '—'; const hoje = new Date(); let i = hoje.getFullYear()-d.getFullYear(); const m = hoje.getMonth()-d.getMonth(); if (m < 0 || (m===0 && hoje.getDate() < d.getDate())) i--; return i; }

async function heartbeat(uid){ await supabase.from('users').update({ lastUpdate:new Date().toISOString(), lastupdate:new Date().toISOString() }).eq('uid',uid); }

export function iniciarSocial(user){
  if (chFriends) supabase.removeChannel(chFriends);
  if (chNotif) supabase.removeChannel(chNotif);
  if (heartbeatTimer) clearInterval(heartbeatTimer);
  if (!user) return;
  recarregarSidebar(user.id);
  initBusca(user.id);
  heartbeat(user.id);
  heartbeatTimer = setInterval(() => heartbeat(user.id), 45000);
  chFriends = supabase.channel('friends-'+user.id)
    .on('postgres_changes',{event:'*',schema:'public',table:'friends'},()=>recarregarSidebar(user.id))
    .on('postgres_changes',{event:'*',schema:'public',table:'users'},()=>recarregarSidebar(user.id))
    .subscribe();
  chNotif = supabase.channel('social-notif-'+user.id)
    .on('postgres_changes',{event:'*',schema:'public',table:'notificacoes',filter:`to_uid=eq.${user.id}`},()=>recarregarSidebar(user.id))
    .subscribe();

  document.getElementById('user-profile-pic')?.addEventListener('click', ()=>window.verPerfilDetalhado(user.id));
  document.getElementById('btn-perfil-menu')?.addEventListener('click', ()=>window.verPerfilDetalhado(user.id));
}

async function recarregarSidebar(uid){
  if (!lista) return;
  const { data: pendentes = [] } = await supabase.from('friends').select('uid, friend_uid, status').eq('friend_uid', uid).eq('status','pending');
  const { data: meus = [] } = await supabase.from('friends').select('friend_uid, status').eq('uid', uid).eq('status','accepted').limit(1000);
  const ids = [...new Set(meus.map(x=>x.friend_uid))];
  const { data: users = [] } = ids.length ? await supabase.from('users').select('*').in('uid', ids) : {data:[]};
  const { data: notifs = [] } = await supabase.from('notificacoes').select('*').eq('to_uid', uid).eq('lida', false).order('created_at', {ascending:false});
  lista.innerHTML = '';

  // pending requests first
  for (const p of pendentes) {
    const { data: fromUser } = await supabase.from('users').select('*').eq('uid', p.uid).maybeSingle();
    if (!fromUser) continue;
    const div = document.createElement('div');
    div.className = 'friend-row pending-row';
    div.innerHTML = `<div class="friend-main"><img class="friend-avatar" src="${campo(fromUser,'photoURL','photourl') || avatar(fromUser.name)}"><div class="friend-text"><strong>Pedido de ${fromUser.name}</strong><span class="friend-meta">✉ aguardando decisão</span></div></div><div class="friend-actions"><button class="mini-btn gold" data-acc="${fromUser.uid}">Aceitar</button><button class="mini-btn red" data-rec="${fromUser.uid}">Recusar</button></div>`;
    lista.appendChild(div);
  }

  const notifMsg = new Set(notifs.filter(n => (n.tipo||'') === 'mensagem' || (n.mensagem||'').toLowerCase().includes('msg')).map(n => n.from_uid));
  const sorted = users.sort((a,b)=>{
    const ao = isOnline(a), bo = isOnline(b);
    if (notifMsg.has(a.uid) && !notifMsg.has(b.uid)) return -1;
    if (!notifMsg.has(a.uid) && notifMsg.has(b.uid)) return 1;
    if (ao && !bo) return -1;
    if (!ao && bo) return 1;
    return String(a.name||'').localeCompare(String(b.name||''), 'pt-BR');
  }).slice(0,10);

  if (!pendentes.length && !sorted.length) {
    lista.innerHTML = '<div class="friend-empty">Nenhum amigo ainda.</div>';
    return;
  }

  for (const u of sorted) {
    const online = isOnline(u);
    const div = document.createElement('div');
    div.className = 'friend-row';
    div.innerHTML = `<div class="friend-main"><div class="friend-avatar-wrap"><img class="friend-avatar" src="${campo(u,'photoURL','photourl') || avatar(u.name)}"><span class="status-dot ${online?'online':'offline'}"></span>${notifMsg.has(u.uid)?'<span class="msg-badge">✉</span>':''}</div><div class="friend-text"><strong>${u.name || 'Herói'}</strong><span class="friend-meta">${online?'Online':'Offline'} · ${Number(u.points)||0} pts</span></div></div>`;
    div.addEventListener('click', ()=> notifMsg.has(u.uid) ? window.abrirChat(u.uid, u.name) : window.verPerfilDetalhado(u.uid));
    lista.appendChild(div);
  }

  lista.querySelectorAll('[data-acc]').forEach(b=>b.addEventListener('click', async (e)=>{ e.stopPropagation(); await aceitarPedido(uid, b.dataset.acc); }));
  lista.querySelectorAll('[data-rec]').forEach(b=>b.addEventListener('click', async (e)=>{ e.stopPropagation(); await recusarPedido(uid, b.dataset.rec); }));
}

function initBusca(meuUid){
  if (!input || input.dataset.ready === '1') return;
  input.dataset.ready = '1';
  input.placeholder = 'Buscar amigo';
  input.addEventListener('input', async ()=>{
    const termo = input.value.trim();
    if (termo.length < 2) { resultados.innerHTML=''; return; }
    const { data: encontrados = [] } = await supabase.from('users').select('*').ilike('name', `%${termo}%`).limit(20);
    const { data: friends = [] } = await supabase.from('friends').select('friend_uid,status').eq('uid', meuUid);
    const map = new Map(friends.map(f=>[f.friend_uid, f.status]));
    resultados.innerHTML = '';
    encontrados.filter(u=>u.uid !== meuUid).forEach(u=>{
      const status = map.get(u.uid);
      const card = document.createElement('div');
      card.className = 'search-user-row';
      card.innerHTML = `<img class="search-avatar" src="${campo(u,'photoURL','photourl') || avatar(u.name)}"><div class="search-user-text"><strong>${u.name || 'Herói'}</strong><span>${Number(u.points)||0} pts</span></div><div class="search-actions">${status==='accepted'?'<button class="mini-btn dark act-msg">Mensagem</button>':status==='pending'?'<button class="mini-btn dark" disabled>Pendente</button>':'<button class="mini-btn gold act-add">+Amigo</button>'}</div>`;
      card.querySelector('.act-add')?.addEventListener('click', (e)=>{e.stopPropagation(); window.enviarPedidoAmizade(u.uid,u.name);});
      card.querySelector('.act-msg')?.addEventListener('click', (e)=>{e.stopPropagation(); window.abrirChat(u.uid,u.name);});
      card.addEventListener('click', ()=>window.verPerfilDetalhado(u.uid));
      resultados.appendChild(card);
    });
  });
}

async function dadosPerfil(uid, viewerId){
  const [{data:userData},{data:accepted},{data:minePending},{data:chapters},{data:trophies}] = await Promise.all([
    supabase.from('users').select('*').eq('uid',uid).single(),
    supabase.from('friends').select('id').eq('uid',viewerId).eq('friend_uid',uid).eq('status','accepted').maybeSingle(),
    supabase.from('friends').select('id').eq('uid',viewerId).eq('friend_uid',uid).eq('status','pending').maybeSingle(),
    supabase.from('progresso').select('id').eq('uid',uid).eq('concluido',true),
    supabase.from('user_badges').select('id').eq('uid',uid).eq('conquistada',true)
  ]);
  return { userData, jaAmigo: !!accepted, pendente: !!minePending, livrosLidos:(chapters||[]).length, trofeus:(trophies||[]).length };
}

window.verPerfilDetalhado = async function(uid){
  document.getElementById('perfil-detalhado')?.remove();
  const overlay = document.createElement('div');
  overlay.id = 'perfil-detalhado';
  overlay.className = 'perfil-overlay';
  overlay.innerHTML = `<div class="perfil-modal loading">Carregando...</div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', (e)=>{ if (e.target === overlay) overlay.remove(); });
  const { data:{user} } = await supabase.auth.getUser();
  if (!user) return overlay.remove();
  const { userData, jaAmigo, pendente, livrosLidos, trofeus } = await dadosPerfil(uid, user.id);
  if (!userData) return overlay.remove();
  const me = uid === user.id;
  const nome = userData.name || 'Herói';
  const foto = campo(userData,'photoURL','photourl') || avatar(nome);
  const nivel = Number(campo(userData,'nivel')) || 1;
  overlay.innerHTML = `<div class="perfil-modal"><button class="perfil-close">×</button><button class="perfil-back">←</button><div class="perfil-photo-wrap"><img class="perfil-photo" src="${foto}"></div><div class="perfil-name">${nome}</div><div class="perfil-points">${Number(userData.points)||0} pts</div><div class="perfil-grid"><div><span>Nível</span><strong>${nivel}</strong></div><div><span>Idade</span><strong>${idade(userData.data_nascimento)}</strong></div><div><span>Livros lidos</span><strong>${livrosLidos}</strong></div><div><span>Troféus</span><strong>${trofeus}</strong></div></div><div class="perfil-actions"><button id="perfil-badges-btn" class="glass-btn dark">Troféus</button>${me?'<button id="perfil-mudar-foto" class="glass-btn gold">Mudar foto</button>':jaAmigo?`<button id="perfil-msg-btn" class="glass-btn gold">Enviar mesg</button>`:pendente?'<button class="glass-btn dark" disabled>Pendente</button>':`<button id="perfil-add-btn" class="glass-btn gold">+Amigo</button>`}</div><div id="perfil-extra"></div></div>`;
  overlay.querySelector('.perfil-close')?.addEventListener('click', ()=>overlay.remove());
  overlay.querySelector('.perfil-back')?.addEventListener('click', ()=>overlay.remove());
  overlay.querySelector('#perfil-mudar-foto')?.addEventListener('click', ()=>document.getElementById('foto-input')?.click());
  overlay.querySelector('#perfil-msg-btn')?.addEventListener('click', ()=>{ overlay.remove(); window.abrirChat(uid, nome); });
  overlay.querySelector('#perfil-add-btn')?.addEventListener('click', ()=>window.enviarPedidoAmizade(uid, nome));
  overlay.querySelector('#perfil-badges-btn')?.addEventListener('click', ()=>window.mostrarBadges?.());
}

window.enviarPedidoAmizade = async function(amigoId, nome=''){ 
  const { data:{user} } = await supabase.auth.getUser(); if (!user) return;
  await supabase.from('friends').upsert({ uid:user.id, friend_uid:amigoId, status:'pending', created_at:new Date().toISOString() }, { onConflict:'uid,friend_uid' });
  await supabase.from('notificacoes').insert({ to_uid:amigoId, from_uid:user.id, tipo:'pedido_amizade', mensagem:`Pedido de amizade de ${nome || 'um usuário'}`, lida:false, created_at:new Date().toISOString() });
  alerta('Pedido enviado com sucesso');
  recarregarSidebar(user.id);
}

async function aceitarPedido(meuUid, fromUid){
  await supabase.from('friends').upsert([
    { uid: fromUid, friend_uid: meuUid, status:'accepted', created_at:new Date().toISOString() },
    { uid: meuUid, friend_uid: fromUid, status:'accepted', created_at:new Date().toISOString() }
  ], { onConflict:'uid,friend_uid' });
  await supabase.from('notificacoes').update({ lida:true }).eq('to_uid', meuUid).eq('from_uid', fromUid).eq('tipo','pedido_amizade');
  await recarregarSidebar(meuUid);
}
async function recusarPedido(meuUid, fromUid){
  await supabase.from('friends').delete().eq('uid', fromUid).eq('friend_uid', meuUid).eq('status','pending');
  await supabase.from('notificacoes').update({ lida:true }).eq('to_uid', meuUid).eq('from_uid', fromUid).eq('tipo','pedido_amizade');
  await recarregarSidebar(meuUid);
}

function alerta(texto){
  const a = document.createElement('div'); a.className='side-alert'; a.textContent=texto; document.body.appendChild(a); setTimeout(()=>a.remove(),1800);
}
