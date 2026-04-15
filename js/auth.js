import { supabase } from './config.js';
import { payloadUsuarioCompat, normalizarUsuario, gerarAvatarPadrao, nowIso } from './app-core.js';

const userHeader = document.getElementById('user-header-info');
const userNameDisplay = document.getElementById('user-name-display');
const userPointsDisplay = document.getElementById('user-points-display');
const userProfilePic = document.getElementById('user-profile-pic');
const tabEntrar = document.getElementById('tab-entrar');
const tabCadastrar = document.getElementById('tab-cadastrar');
const formEntrar = document.getElementById('form-entrar');
const formCadastrar = document.getElementById('form-cadastrar');
const btnEntrar = document.getElementById('btn-entrar');
const btnRegistrar = document.getElementById('btn-registrar');
const btnRecuperar = document.getElementById('btn-recuperar-senha');
const btnSair = document.getElementById('btn-sair-menu');
const inputFoto = document.getElementById('foto-input');

let canalUsuario = null;

function traduzirErro(msg) {
  const texto = String(msg || '');
  if (texto.includes('already registered')) return 'Este e-mail já está cadastrado.';
  if (texto.includes('Invalid login credentials')) return 'E-mail ou senha incorretos.';
  if (texto.includes('Email not confirmed')) return 'Confirmação de e-mail pendente no Supabase.';
  if (texto.includes('Password should be')) return 'A senha precisa ter pelo menos 8 caracteres.';
  return texto || 'Erro inesperado.';
}

function mostrarErro(msg) { alert('❌ ' + msg); }
function mostrarSucesso(msg) { alert('✅ ' + msg); }

function validarDataNascimento(data) {
  const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;
  if (!regex.test(data || '')) return false;
  const [dia, mes, ano] = data.split('/').map(Number);
  const d = new Date(ano, mes - 1, dia);
  return d.getFullYear() === ano && d.getMonth() === mes - 1 && d.getDate() === dia;
}

function formatarDataParaBanco(dataBR) {
  const [dia, mes, ano] = dataBR.split('/');
  return `${ano}-${mes}-${dia}`;
}

async function getCropModal() {
  const { abrirCropModal } = await import('./cropper.js');
  return abrirCropModal;
}

async function criarOuAtualizarPerfil(user, nome, email, dataNascimentoBanco) {
  const base = payloadUsuarioCompat({
    uid: user.id,
    name: nome,
    email,
    data_nascimento: dataNascimentoBanco,
    photoURL: null,
    points: 0,
    nivel: 1,
    expAtual: 0,
    badges: {},
    createdAt: nowIso(),
    lastUpdate: nowIso()
  });

  const { data: existente, error } = await supabase.from('users').select('*').eq('uid', user.id).maybeSingle();
  if (error) throw error;

  if (existente) {
    const updatePayload = payloadUsuarioCompat({
      name: nome,
      email,
      data_nascimento: dataNascimentoBanco,
      lastUpdate: nowIso()
    });
    const { error: upError } = await supabase.from('users').update(updatePayload).eq('uid', user.id);
    if (upError) throw upError;
  } else {
    const { error: inError } = await supabase.from('users').insert(base);
    if (inError) throw inError;
  }

  await supabase.from('user_stats').upsert({
    uid: user.id,
    createdat: nowIso(),
    lastupdate: nowIso()
  }, { onConflict: 'uid' });
}

function renderizarUsuario(rawRow) {
  const row = normalizarUsuario(rawRow);
  const foto = row.photoURL || gerarAvatarPadrao(row.name);

  if (userHeader) {
    userHeader.innerHTML = `
      <div class="header-user-inline">
        <img src="${foto}" alt="Foto" class="header-avatar">
        <div class="header-user-text">
          <div>${row.name}</div>
          <div class="pts-tag">${row.points} pts</div>
        </div>
      </div>`;
  }

  if (userNameDisplay) userNameDisplay.textContent = row.name;
  if (userPointsDisplay) userPointsDisplay.textContent = `${row.points} pts`;
  if (userProfilePic) userProfilePic.innerHTML = `<img src="${foto}" alt="Foto do usuário">`;

  document.getElementById('nivel-numero')?.replaceChildren(document.createTextNode(String(row.nivel)));
  document.getElementById('exp-texto')?.replaceChildren(document.createTextNode(`${row.expAtual}%`));
  const expBar = document.getElementById('exp-bar-fill');
  if (expBar) expBar.style.width = `${row.expAtual}%`;
}

async function carregarUsuario(uid) {
  const { data, error } = await supabase.from('users').select('*').eq('uid', uid).maybeSingle();
  if (!error && data) renderizarUsuario(data);
}

export function iniciarListenerUsuario(user) {
  pararListenerUsuario();
  if (!user) return;
  carregarUsuario(user.id);

  canalUsuario = supabase.channel('user-live-' + user.id)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'users', filter: `uid=eq.${user.id}` }, payload => {
      if (payload.new) renderizarUsuario(payload.new);
    })
    .subscribe();
}

export function pararListenerUsuario() {
  if (canalUsuario) {
    supabase.removeChannel(canalUsuario);
    canalUsuario = null;
  }
}

if (tabEntrar && tabCadastrar) {
  tabEntrar.onclick = () => {
    tabEntrar.classList.add('active');
    tabCadastrar.classList.remove('active');
    formEntrar.style.display = 'block';
    formCadastrar.style.display = 'none';
  };
  tabCadastrar.onclick = () => {
    tabCadastrar.classList.add('active');
    tabEntrar.classList.remove('active');
    formCadastrar.style.display = 'block';
    formEntrar.style.display = 'none';
  };
}

if (btnRegistrar) {
  btnRegistrar.onclick = async () => {
    const nome = document.getElementById('reg-nome')?.value.trim() || '';
    const email = document.getElementById('reg-email')?.value.trim() || '';
    const senha = document.getElementById('reg-senha')?.value || '';
    const data = document.getElementById('reg-data-nascimento')?.value.trim() || '';
    if (!nome || !email || !senha || !data) return mostrarErro('Preencha todos os campos.');
    if (nome.length > 12) return mostrarErro('O nome deve ter no máximo 12 caracteres.');
    if (senha.length < 8) return mostrarErro('A senha deve ter no mínimo 8 caracteres.');
    if (!validarDataNascimento(data)) return mostrarErro('Digite a data no formato dd/mm/aaaa.');

    btnRegistrar.disabled = true;
    try {
      const { data: signData, error } = await supabase.auth.signUp({ email, password: senha });
      if (error) throw error;

      let user = signData.user;
      if (!signData.session) {
        const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({ email, password: senha });
        if (loginError) throw loginError;
        user = loginData.user;
      }
      await criarOuAtualizarPerfil(user, nome, email, formatarDataParaBanco(data));
      sessionStorage.setItem('herois_login_liberado', 'true');
      mostrarSucesso('Cadastro concluído.');
      window.location.reload();
    } catch (e) {
      mostrarErro(traduzirErro(e.message));
    } finally {
      btnRegistrar.disabled = false;
    }
  };
}

if (btnEntrar) {
  btnEntrar.onclick = async () => {
    const email = document.getElementById('login-email')?.value.trim() || '';
    const senha = document.getElementById('login-senha')?.value || '';
    if (!email || !senha) return mostrarErro('Digite e-mail e senha.');

    btnEntrar.disabled = true;
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password: senha });
      if (error) throw error;
      sessionStorage.setItem('herois_login_liberado', 'true');
      await carregarUsuario(data.user.id);
      window.location.reload();
    } catch (e) {
      mostrarErro(traduzirErro(e.message));
    } finally {
      btnEntrar.disabled = false;
    }
  };
}

if (btnRecuperar) {
  btnRecuperar.onclick = async () => {
    const email = document.getElementById('login-email')?.value.trim() || '';
    if (!email) return mostrarErro('Digite seu e-mail.');
    const redirectTo = `${window.location.origin}${window.location.pathname}`;
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo });
    if (error) mostrarErro(traduzirErro(error.message));
    else mostrarSucesso('E-mail de recuperação enviado.');
  };
}

if (btnSair) {
  btnSair.onclick = async () => {
    sessionStorage.removeItem('herois_login_liberado');
    await supabase.auth.signOut();
    window.location.reload();
  };
}

if (inputFoto) {
  inputFoto.addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    try {
      const abrirCropModal = await getCropModal();
      const base64 = await abrirCropModal(file);
      const payload = payloadUsuarioCompat({ photoURL: base64, lastUpdate: nowIso() });
      const { error } = await supabase.from('users').update(payload).eq('uid', user.id);
      if (error) throw error;
      renderizarUsuario({ uid: user.id, photoURL: base64 });
      const toast = document.createElement('div');
      toast.className = 'glass-toast';
      toast.textContent = 'Foto atualizada';
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2200);
    } catch {
      // cancelado
    } finally {
      inputFoto.value = '';
      inputFoto.removeAttribute('data-update-mode');
    }
  });
}
