// js/auth.js
import { supabase } from './config.js';

async function getCropModal() {
  const { abrirCropModal } = await import('./cropper.js');
  return abrirCropModal;
}

const userHeader          = document.getElementById('user-header-info');
const userNameDisplay     = document.getElementById('user-name-display');
const userPointsDisplay   = document.getElementById('user-points-display');
const userProfilePic      = document.getElementById('user-profile-pic');
const tabEntrar           = document.getElementById('tab-entrar');
const tabCadastrar        = document.getElementById('tab-cadastrar');
const formEntrar          = document.getElementById('form-entrar');
const formCadastrar       = document.getElementById('form-cadastrar');
const btnEntrar           = document.getElementById('btn-entrar');
const btnRegistrar        = document.getElementById('btn-registrar');
const btnRecuperar        = document.getElementById('btn-recuperar-senha');
const btnSair             = document.getElementById('btn-sair-menu');
const inputFoto           = document.getElementById('foto-input');

// ── Elementos da tela de recuperação ──────────────────────────────────────
const forgotBox           = document.getElementById('forgot-password-box');
const forgotEmailInput    = document.getElementById('forgot-email');
const btnEnviarLink       = document.getElementById('btn-enviar-link-recuperacao');
const btnVoltarLogin      = document.getElementById('btn-voltar-login-recuperacao');
const forgotMsg           = document.getElementById('forgot-password-message');

let realtimeChannel = null;
let listenerUsuarioIniciando = false;
let listenerUsuarioUidAtual  = null;

// ── Helpers gerais ─────────────────────────────────────────────────────────
function val(v, ...keys){ for(const k of keys){ if(v && v[k] != null) return v[k]; } return null; }

function avatar(nome='?'){
  const ini = nome.split(' ').map(p=>p[0]).join('').slice(0,2).toUpperCase() || '?';
  return `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="100%" height="100%" fill="#d4a21e"/><text x="50%" y="54%" text-anchor="middle" font-family="Arial" font-size="86" font-weight="700" fill="#fff">${ini}</text></svg>`)}`;
}

function traduzirErro(msg=''){
  const t = String(msg);
  if (t.includes('Invalid login credentials')) return 'E-mail ou senha incorretos.';
  if (t.includes('already registered'))        return 'Este e-mail já está cadastrado.';
  if (t.includes('Email not confirmed'))        return 'E-mail ainda não confirmado.';
  return t || 'Ocorreu um erro.';
}

function toast(msg, ok=true){ alert((ok?'✅ ':'❌ ') + msg); }
function validarDataNascimento(data){ return /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/.test(data); }
function formatarDataParaBanco(dataBR){ const [d,m,a] = dataBR.split('/'); return `${a}-${m}-${d}`; }

function somenteDigitos(v=''){ return String(v).replace(/\D/g,'').slice(0,8); }
function formatarInputDataNascimento(v=''){
  const d = somenteDigitos(v);
  if (d.length <= 2) return d;
  if (d.length <= 4) return `${d.slice(0,2)}/${d.slice(2)}`;
  return `${d.slice(0,2)}/${d.slice(2,4)}/${d.slice(4,8)}`;
}
function aplicarMascaraDataNascimento(input){
  if (!input) return;
  const aplicar = () => { input.value = formatarInputDataNascimento(input.value); };
  input.addEventListener('input',  aplicar);
  input.addEventListener('blur',   aplicar);
  input.addEventListener('paste',  () => setTimeout(aplicar, 0));
  aplicar();
}

// ── Navegação entre telas de auth ──────────────────────────────────────────
function _esconderTodasAsTelas() {
  if (formEntrar)   formEntrar.style.display   = 'none';
  if (formCadastrar) formCadastrar.style.display = 'none';
  if (forgotBox)    forgotBox.style.display     = 'none';
  document.getElementById('reset-password-box')?.style.setProperty('display','none');
}

function mostrarFormLogin() {
  _esconderTodasAsTelas();
  if (formEntrar) formEntrar.style.display = 'block';
  tabEntrar?.classList.add('active');
  tabCadastrar?.classList.remove('active');
}

function mostrarForgotBox() {
  _esconderTodasAsTelas();
  if (forgotBox) forgotBox.style.display = 'flex';
  // Copia e-mail do campo de login se já estiver preenchido
  const emailLogin = document.getElementById('login-email')?.value.trim();
  if (emailLogin && forgotEmailInput) forgotEmailInput.value = emailLogin;
  // Limpa mensagem anterior
  _setForgotMsg('', '');
  if (btnEnviarLink) {
    btnEnviarLink.disabled   = false;
    btnEnviarLink.textContent = 'ENVIAR LINK';
  }
}

// ── Mensagem animada na tela de recuperação ────────────────────────────────
function _setForgotMsg(texto, tipo = '') {
  if (!forgotMsg) return;
  forgotMsg.textContent = texto;
  forgotMsg.className   = '';
  if (texto) {
    forgotMsg.classList.add('visible');
    if (tipo === 'sucesso') forgotMsg.classList.add('msg-sucesso');
    if (tipo === 'erro')    forgotMsg.classList.add('msg-erro');
  }
}

// ── Criar / atualizar perfil no banco ──────────────────────────────────────
async function criarOuAtualizarPerfil(user, nome, email, dataNascimentoBanco){
  const payload = {
    uid: user.id, name: nome, email,
    data_nascimento: dataNascimentoBanco,
    photourl: null, photoURL: null,
    points: 0, nivel: 1, expatual: 0, expAtual: 0,
    createdat: new Date().toISOString(), createdAt: new Date().toISOString(),
    lastupdate: new Date().toISOString(), lastUpdate: new Date().toISOString(),
    badges: {}
  };
  const { data: row } = await supabase.from('users').select('uid').eq('uid', user.id).maybeSingle();
  if (row) {
    const { error } = await supabase.from('users').update({
      name: nome, email, data_nascimento: dataNascimentoBanco,
      lastupdate: new Date().toISOString(), lastUpdate: new Date().toISOString()
    }).eq('uid', user.id);
    if (error) throw error;
  } else {
    const { error } = await supabase.from('users').insert(payload);
    if (error) throw error;
  }
}

// ── Listener de usuário ────────────────────────────────────────────────────
export async function iniciarListenerUsuario(user) {
  if (!user?.id) return;
  if (listenerUsuarioIniciando) return;
  listenerUsuarioIniciando = true;
  try {
    if (realtimeChannel) {
      await supabase.removeChannel(realtimeChannel);
      realtimeChannel = null;
    }
    listenerUsuarioUidAtual = user.id;
    try { await carregarDadosUsuario(user.id); } catch(e) { console.warn('[iniciarListenerUsuario] carregarDados err:', e); }
    realtimeChannel = supabase
      .channel(`user-ui-${user.id}`)
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'users', filter: `uid=eq.${user.id}` },
        (payload) => {
          if (listenerUsuarioUidAtual !== user.id) return;
          if (payload?.new) renderizarUsuario(payload.new);
        }
      )
      .subscribe((status) => { console.log('[user-ui] status:', status); });
  } catch (e) {
    console.error('[iniciarListenerUsuario] erro:', e);
  } finally {
    listenerUsuarioIniciando = false;
  }
}

export async function pararListenerUsuario() {
  listenerUsuarioUidAtual = null;
  if (realtimeChannel) {
    await supabase.removeChannel(realtimeChannel);
    realtimeChannel = null;
  }
}

async function carregarDadosUsuario(uid){
  const { data } = await supabase.from('users').select('*').eq('uid', uid).single();
  if (data) renderizarUsuario(data);
}

function renderizarUsuario(u){
  const nome  = val(u,'name') || 'Herói';
  const pts   = Number(val(u,'points')) || 0;
  const foto  = val(u,'photoURL','photourl') || avatar(nome);
  const nivel = Number(val(u,'nivel')) || 1;
  if (userHeader)       userHeader.innerHTML = `<div class="top-user-inline"><img src="${foto}" class="top-user-avatar"><div class="top-user-text"><strong>${nome}</strong><span>${pts} pts</span></div></div>`;
  if (userNameDisplay)  userNameDisplay.textContent  = nome;
  if (userPointsDisplay) userPointsDisplay.textContent = `${pts} pts`;
  if (userProfilePic)   userProfilePic.innerHTML = `<img src="${foto}" alt="foto">`;
  const n = document.getElementById('nivel-numero');
  if (n) n.textContent = String(nivel);
}

// ── Máscara data de nascimento ─────────────────────────────────────────────
const inputDataNascimentoCadastro = document.getElementById('reg-data-nascimento');
aplicarMascaraDataNascimento(inputDataNascimentoCadastro);

// ── Foto de perfil ─────────────────────────────────────────────────────────
if (inputFoto) {
  inputFoto.addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    try {
      const abrirCropModal = await getCropModal();
      const base64 = await abrirCropModal(file);
      await supabase.from('users').update({
        photourl: base64, photoURL: base64,
        lastupdate: new Date().toISOString(), lastUpdate: new Date().toISOString()
      }).eq('uid', user.id);
      const fx = document.createElement('div');
      fx.className   = 'foto-updated-toast';
      fx.textContent = 'Foto atualizada';
      document.body.appendChild(fx);
      setTimeout(() => fx.remove(), 1800);
    } catch (e) {} finally { inputFoto.value = ''; }
  });
}

// ── Cadastro ───────────────────────────────────────────────────────────────
btnRegistrar?.addEventListener('click', async () => {
  const nome  = document.getElementById('reg-nome')?.value.trim() || '';
  const email = document.getElementById('reg-email')?.value.trim() || '';
  const senha = document.getElementById('reg-senha')?.value || '';
  const data  = document.getElementById('reg-data-nascimento')?.value.trim() || '';
  if (!nome || !email || !senha || !data) return toast('Preencha todos os campos.', false);
  if (nome.length > 12)  return toast('O nome deve ter no máximo 12 caracteres.', false);
  if (senha.length < 8)  return toast('A senha deve ter no mínimo 8 caracteres.', false);
  if (!validarDataNascimento(data)) return toast('Digite a data no formato dd/mm/aaaa.', false);
  btnRegistrar.disabled = true;
  try {
    const dataNascimentoBanco = formatarDataParaBanco(data);
    const { data: authData, error } = await supabase.auth.signUp({ email, password: senha });
    if (error) throw error;
    let user = authData.user;
    if (!authData.session) {
      const login = await supabase.auth.signInWithPassword({ email, password: senha });
      if (login.error) throw login.error;
      user = login.data.user;
    }
    await criarOuAtualizarPerfil(user, nome, email, dataNascimentoBanco);
  } catch (e) { toast(traduzirErro(e.message), false); } finally { btnRegistrar.disabled = false; }
});

// ── Login ──────────────────────────────────────────────────────────────────
btnEntrar?.addEventListener('click', async () => {
  const email = document.getElementById('login-email')?.value.trim() || '';
  const senha = document.getElementById('login-senha')?.value || '';
  if (!email || !senha) return toast('Preencha e-mail e senha.', false);
  btnEntrar.disabled = true;
  try {
    const { error } = await supabase.auth.signInWithPassword({ email, password: senha });
    if (error) throw error;
  } catch (e) { toast(traduzirErro(e.message), false); } finally { btnEntrar.disabled = false; }
});

// ── Recuperar Senha — ABRE a tela de forgot, não envia direto ─────────────
btnRecuperar?.addEventListener('click', () => {
  mostrarForgotBox();
});

// ── Enviar link de recuperação ─────────────────────────────────────────────
btnEnviarLink?.addEventListener('click', async () => {
  const email = forgotEmailInput?.value.trim() || '';
  if (!email) {
    _setForgotMsg('Digite seu e-mail para continuar.', 'erro');
    return;
  }
  btnEnviarLink.disabled   = true;
  btnEnviarLink.textContent = 'ENVIANDO...';
  _setForgotMsg('');
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}${window.location.pathname}`
    });
    if (error) throw error;
    _setForgotMsg('✅ Link de recuperação enviado para seu e-mail.', 'sucesso');
    btnEnviarLink.textContent = 'ENVIADO!';
    // mantém botão desabilitado para evitar reenvio acidental
  } catch (e) {
    _setForgotMsg(traduzirErro(e.message), 'erro');
    btnEnviarLink.disabled   = false;
    btnEnviarLink.textContent = 'ENVIAR LINK';
  }
});

// ── Voltar para o login a partir da tela de recuperação ───────────────────
btnVoltarLogin?.addEventListener('click', () => {
  mostrarFormLogin();
});

// ── Sair do jogo ──────────────────────────────────────────────────────────
btnSair?.addEventListener('click', async () => {
  try {
    await pararListenerUsuario();
    await supabase.auth.signOut();
    window.location.reload();
  } catch (e) { toast('Não foi possível sair da conta.', false); }
});

// ── Abas Entrar / Cadastrar ────────────────────────────────────────────────
tabEntrar?.addEventListener('click', () => {
  if (formEntrar)   formEntrar.style.display   = 'block';
  if (formCadastrar) formCadastrar.style.display = 'none';
  if (forgotBox)    forgotBox.style.display     = 'none';
  tabEntrar.classList.add('active');
  tabCadastrar?.classList.remove('active');
  document.getElementById('reset-password-box')?.style.setProperty('display','none');
});

tabCadastrar?.addEventListener('click', () => {
  if (formCadastrar) formCadastrar.style.display = 'block';
  if (formEntrar)    formEntrar.style.display    = 'none';
  if (forgotBox)     forgotBox.style.display     = 'none';
  tabCadastrar.classList.add('active');
  tabEntrar?.classList.remove('active');
  document.getElementById('reset-password-box')?.style.setProperty('display','none');
});
