// js/chat.js
import { supabase } from './config.js';
let monitor = null, roomChannel = null, userStatusChannel = null;

function avatar(nome='?'){
  const ini = nome.split(' ').map(p=>p[0]).join('').slice(0,2).toUpperCase() || '?';
  return `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="100%" height="100%" fill="#d4a21e"/><text x="50%" y="54%" text-anchor="middle" font-family="Arial" font-size="86" font-weight="700" fill="#fff">${ini}</text></svg>`)}`;
}
function online(user){ const t = user?.lastUpdate || user?.lastupdate; return t && (Date.now()-new Date(t).getTime()<90000); }
async function getMe(){ const {data:{user}}=await supabase.auth.getUser(); return user; }
async function getUser(uid){ const {data}=await supabase.from('users').select('*').eq('uid',uid).single(); return data; }

async function marcarLidas(meuId, amigoId){
  await supabase.from('mensagens').update({ lida:true }).eq('de', amigoId).eq('para', meuId).eq('lida', false);
  await supabase.from('notificacoes').update({ lida:true }).eq('to_uid', meuId).eq('from_uid', amigoId).eq('tipo','mensagem').eq('lida',false);
}

async function carregarMensagens(meuId, amigoId){
  const box = document.getElementById('chat-messages');
  if (!box) return;
  const { data = [] } = await supabase.from('mensagens').select('*').or(`and(de.eq.${meuId},para.eq.${amigoId}),and(de.eq.${amigoId},para.eq.${meuId})`).order('createdat',{ascending:true});
  box.innerHTML = '';
  data.forEach(m => {
    const mine = m.de === meuId;
    const wrap = document.createElement('div');
    wrap.className = 'msg-wrap ' + (mine ? 'mine' : 'other');
    wrap.innerHTML = `<div class="msg-bubble">${(m.mensagem||'').replace(/</g,'&lt;')}</div>${mine?`<div class="msg-state">${m.lida?'✓✓ lido':'✓ enviado'}</div>`:''}`;
    box.appendChild(wrap);
  });
  box.scrollTop = box.scrollHeight;
  await marcarLidas(meuId, amigoId);
}

window.abrirChat = async function(amigoId, nome=''){ 
  document.getElementById('perfil-detalhado')?.remove();
  document.getElementById('janela-chat')?.remove();
  if (roomChannel) { supabase.removeChannel(roomChannel); roomChannel = null; }
  if (userStatusChannel) { supabase.removeChannel(userStatusChannel); userStatusChannel = null; }
  const me = await getMe(); if (!me) return;
  const amigo = await getUser(amigoId);
  const foto = amigo?.photoURL || amigo?.photourl || avatar(amigo?.name || nome || 'A');
  const win = document.createElement('div');
  win.id = 'janela-chat';
  win.className = 'chat-window';
  win.innerHTML = `<div class="chat-top"><button class="chat-back">←</button><img class="chat-avatar" src="${foto}"><div class="chat-head"><strong>${(amigo?.name || nome)}</strong><span id="chat-status">${online(amigo)?'Online':'Offline'}</span></div></div><div id="chat-messages" class="chat-messages"></div><div class="chat-emojis"><button data-e="😊">😊</button><button data-e="🙏">🙏</button><button data-e="🔥">🔥</button><button data-e="📖">📖</button><button data-e="❤️">❤️</button></div><div class="chat-bottom"><input id="chat-input" placeholder="Digite sua mensagem"><button id="chat-send">➤</button></div>`;
  document.body.appendChild(win);
  win.querySelector('.chat-back').addEventListener('click', ()=>window.fecharChatAtivo());
  win.querySelectorAll('.chat-emojis button').forEach(b=>b.addEventListener('click', ()=>{ const i=win.querySelector('#chat-input'); i.value += b.dataset.e; i.focus(); }));
  await carregarMensagens(me.id, amigoId);
  async function enviar(){
    const input = document.getElementById('chat-input');
    const texto = input?.value.trim();
    if (!texto) return;
    input.value='';
    await supabase.from('mensagens').insert({ de:me.id, para:amigoId, mensagem:texto, lida:false, createdat:new Date().toISOString() });
    await supabase.from('notificacoes').insert({ to_uid:amigoId, from_uid:me.id, tipo:'mensagem', mensagem:texto.slice(0,60), lida:false, created_at:new Date().toISOString() });
    await carregarMensagens(me.id, amigoId);
  }
  win.querySelector('#chat-send').addEventListener('click', enviar);
  win.querySelector('#chat-input').addEventListener('keydown', (e)=>{ if (e.key==='Enter') enviar(); });
  roomChannel = supabase.channel('room-'+[me.id,amigoId].sort().join('-'))
    .on('postgres_changes',{event:'*',schema:'public',table:'mensagens'}, async (payload)=>{
      const r = payload.new || payload.old; if (!r) return;
      const ok = (r.de===me.id && r.para===amigoId) || (r.de===amigoId && r.para===me.id);
      if (ok) await carregarMensagens(me.id, amigoId);
    }).subscribe();
  userStatusChannel = supabase.channel('chat-user-'+amigoId)
    .on('postgres_changes',{event:'UPDATE',schema:'public',table:'users',filter:`uid=eq.${amigoId}`}, (payload)=>{
      const el = document.getElementById('chat-status'); if (el) el.textContent = online(payload.new)?'Online':'Offline';
    }).subscribe();
}

window.fecharChatAtivo = function(){ document.getElementById('janela-chat')?.remove(); if (roomChannel) { supabase.removeChannel(roomChannel); roomChannel=null; } if (userStatusChannel) { supabase.removeChannel(userStatusChannel); userStatusChannel=null; } };

export function iniciarMonitorChat(user){
  if (monitor) supabase.removeChannel(monitor);
  if (!user) return;
  monitor = supabase.channel('monitor-notif-'+user.id)
    .on('postgres_changes',{event:'INSERT',schema:'public',table:'notificacoes',filter:`to_uid=eq.${user.id}`}, async (payload)=>{
      const n = payload.new; if (!n || n.lida) return;
      if ((n.tipo||'') === 'mensagem') {
        const from = await getUser(n.from_uid);
        const box = document.createElement('div');
        box.className = 'msg-toast';
        box.innerHTML = `<div class="msg-toast-title">✉ Msg</div><div class="msg-toast-body">${from?.name || 'Amigo'}: ${n.mensagem || ''}</div>`;
        box.addEventListener('click', ()=>{ box.remove(); window.abrirChat(n.from_uid, from?.name||'Amigo'); });
        document.body.appendChild(box); setTimeout(()=>box.remove(),8000);
      }
    }).subscribe();
}
