// js/auth.js
// ═══════════════════════════════════════════════════════════
// AUTENTICAÇÃO — LOGIN, REGISTRO, LISTENER DE DADOS
// ● onAuthStateChange do Supabase no index.html (evita loop)
// ● iniciarListenerUsuario() chamado SOMENTE pelo index.html
// ● Upload de foto de perfil via foto-input global
// ═══════════════════════════════════════════════════════════

import { supabase, CONFIG } from './config.js';

// Cropper carregado sob demanda
async function getCropModal() {
    const { abrirCropModal } = await import('./cropper.js');
    return abrirCropModal;
}

// ── ELEMENTOS DOM ──────────────────────────────────────────
const authBox           = document.getElementById('auth-container');
const readingView       = document.getElementById('reading-view');
const userHeader        = document.getElementById('user-header-info');
const userNameDisplay   = document.getElementById('user-name-display');
const userPointsDisplay = document.getElementById('user-points-display');
const userProfilePic    = document.getElementById('user-profile-pic');

const tabEntrar     = document.getElementById('tab-entrar');
const tabCadastrar  = document.getElementById('tab-cadastrar');
const formEntrar    = document.getElementById('form-entrar');
const formCadastrar = document.getElementById('form-cadastrar');

const btnEntrar    = document.getElementById('btn-entrar');
const btnRegistrar = document.getElementById('btn-registrar');
const btnSair      = document.getElementById('btn-sair-menu');

// ── INPUT DE FOTO GLOBAL ───────────────────────────────────
const inputFoto = document.getElementById('foto-input');
if (inputFoto) {
    inputFoto.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const isUpdateMode = inputFoto.getAttribute('data-update-mode') === 'true';
        const { data: { user } } = await supabase.auth.getUser();
        if (!isUpdateMode || !user) { inputFoto.value = ''; return; }

        try {
            const abrirCropModal = await getCropModal();
            const base64 = await abrirCropModal(file);

            await supabase.from('users').update({ photoURL: base64 }).eq('uid', user.id);

            if (userProfilePic) {
                userProfilePic.innerHTML = `<img src="${base64}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
            }
        } catch (_) {
            // Crop cancelado
        } finally {
            inputFoto.removeAttribute('data-update-mode');
            inputFoto.value = '';
        }
    });
}

// ── MONITORAR DADOS DO USUÁRIO ─────────────────────────────
let _realtimeChannel = null;

export function iniciarListenerUsuario(user) {
    // Remove listener anterior
    if (_realtimeChannel) {
        supabase.removeChannel(_realtimeChannel);
        _realtimeChannel = null;
    }

    if (!user) {
        if (userHeader) userHeader.innerHTML = '';
        return;
    }

    // Carrega dados iniciais
    _carregarDadosUsuario(user.id);

    // Escuta mudanças em tempo real na tabela users
    _realtimeChannel = supabase
        .channel('user-changes-' + user.id)
        .on('postgres_changes', {
            event: '*',
            schema: 'public',
            table: 'users',
            filter: `uid=eq.${user.id}`
        }, (payload) => {
            _renderizarUsuario(payload.new);
        })
        .subscribe();

    // Garante que a Bíblia seja carregada ao entrar
    if (window.carregarListaLivros) window.carregarListaLivros();
}

async function _carregarDadosUsuario(uid) {
    const { data } = await supabase.from('users').select('*').eq('uid', uid).single();
    if (data) _renderizarUsuario(data);
}

let _ultimaFoto = null, _ultimoNome = null, _ultimosPts = null;

function _renderizarUsuario(userData) {
    if (!userData) return;

    const fotoUrl = userData.photoURL || 'https://i.imgur.com/6VBx3io.png';
    const nome    = userData.name    || '';
    const pts     = userData.points  || 0;
    const nivel   = userData.nivel   || 1;

    if (fotoUrl === _ultimaFoto && nome === _ultimoNome && pts === _ultimosPts) return;
    _ultimaFoto = fotoUrl; _ultimoNome = nome; _ultimosPts = pts;

    if (userHeader) {
        userHeader.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <img src="${fotoUrl}" style="width:32px; height:32px; border-radius:50%; object-fit:cover; border:1px solid #d4af37;">
                <div class="header-data">
                    <span style="font-size:0.9rem;">${nome}</span>
                    <span class="pts-tag">${pts} pts</span>
                </div>
            </div>`;
    }

    if (userNameDisplay) {
        userNameDisplay.setAttribute('data-full-name', nome);
        userNameDisplay.innerText = nome.length > 8 ? nome.slice(0, 8) : nome;
    }
    if (userPointsDisplay) userPointsDisplay.innerText = `${pts} pts`;

    if (userProfilePic) {
        userProfilePic.innerHTML = `<img src="${fotoUrl}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
    }

    const nivelEl = document.getElementById('nivel-numero');
    if (nivelEl) nivelEl.textContent = nivel;
}

// ── CADASTRO ───────────────────────────────────────────────
if (btnRegistrar) {
    btnRegistrar.addEventListener('click', async () => {
        const nome  = document.getElementById('reg-nome')?.value.trim()  || '';
        const email = document.getElementById('reg-email')?.value.trim() || '';
        const senha = document.getElementById('reg-senha')?.value        || '';

        if (!nome || !email || !senha) return mostrarErro('Preencha nome, e-mail e senha');

        btnRegistrar.disabled  = true;
        btnRegistrar.innerText = 'Criando conta...';

        try {
            const { data, error } = await supabase.auth.signUp({ email, password: senha });
            if (error) throw error;

            const user = data.user;
            await supabase.from('users').insert({
                uid:        user.id,
                name:       nome,
                email:      email,
                photoURL:   null,
                points:     0,
                nivel:      1,
                expAtual:   0,
                createdAt:  new Date().toISOString(),
                lastUpdate: new Date().toISOString()
            });

            mostrarSucesso('Bem-vindo, Herói da Fé!');
        } catch (erro) {
            mostrarErro(traduzirErro(erro.message) || erro.message);
        } finally {
            btnRegistrar.disabled  = false;
            btnRegistrar.innerText = 'CRIAR HERÓI';
        }
    });
}

// ── LOGIN ──────────────────────────────────────────────────
if (btnEntrar) {
    btnEntrar.addEventListener('click', async () => {
        const email = document.getElementById('login-email')?.value.trim() || '';
        const senha = document.getElementById('login-senha')?.value        || '';
        if (!email || !senha) return mostrarErro('Preencha e-mail e senha');

        btnEntrar.disabled  = true;
        btnEntrar.innerText = 'Entrando...';

        try {
            const { error } = await supabase.auth.signInWithPassword({ email, password: senha });
            if (error) throw error;
        } catch (erro) {
            mostrarErro('E-mail ou senha incorretos');
        } finally {
            btnEntrar.disabled  = false;
            btnEntrar.innerText = 'ENTRAR NA MISSÃO';
        }
    });
}

// ── LOGOUT ─────────────────────────────────────────────────
if (btnSair) {
    btnSair.addEventListener('click', async () => {
        if (confirm('Deseja sair da conta?')) {
            if (_realtimeChannel) { supabase.removeChannel(_realtimeChannel); _realtimeChannel = null; }
            await supabase.auth.signOut();
        }
    });
}

// ── ABAS ───────────────────────────────────────────────────
if (tabEntrar) {
    tabEntrar.addEventListener('click', () => {
        formEntrar.style.display    = 'block';
        formCadastrar.style.display = 'none';
        tabEntrar.classList.add('active');
        tabCadastrar.classList.remove('active');
    });
}
if (tabCadastrar) {
    tabCadastrar.addEventListener('click', () => {
        formCadastrar.style.display = 'block';
        formEntrar.style.display    = 'none';
        tabCadastrar.classList.add('active');
        tabEntrar.classList.remove('active');
    });
}

// ── HELPERS ────────────────────────────────────────────────
function mostrarErro(m)    { alert('❌ ' + m); }
function mostrarSucesso(m) { alert('✅ ' + m); }

function traduzirErro(msg) {
    if (!msg) return null;
    if (msg.includes('already registered'))   return 'Este e-mail já está cadastrado.';
    if (msg.includes('Invalid login'))        return 'E-mail ou senha incorretos.';
    if (msg.includes('Password should be'))   return 'Senha fraca. Use pelo menos 6 caracteres.';
    if (msg.includes('Unable to validate'))   return 'E-mail inválido.';
    if (msg.includes('Network'))              return 'Sem conexão com a internet.';
    return null;
}
