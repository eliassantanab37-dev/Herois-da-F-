// js/auth.js
// ═══════════════════════════════════════════════════════════
// AUTENTICAÇÃO — LOGIN, REGISTRO, RECUPERAR SENHA, LISTENER
// Compatível com o index atual
// ═══════════════════════════════════════════════════════════

import { supabase } from './config.js';

// Cropper carregado sob demanda
async function getCropModal() {
    const { abrirCropModal } = await import('./cropper.js');
    return abrirCropModal;
}

// ── ELEMENTOS DOM ──────────────────────────────────────────
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
const btnRecuperar = document.getElementById('btn-recuperar-senha');
const btnSair      = document.getElementById('btn-sair-menu');

// ── INPUT DE FOTO GLOBAL ───────────────────────────────────
const inputFoto = document.getElementById('foto-input');

if (inputFoto) {
    inputFoto.addEventListener('change', async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const isUpdateMode = inputFoto.getAttribute('data-update-mode') === 'true';
        const { data: { user } } = await supabase.auth.getUser();

        if (!isUpdateMode || !user) {
            inputFoto.value = '';
            return;
        }

        try {
            const abrirCropModal = await getCropModal();
            const base64 = await abrirCropModal(file);

            const { error } = await supabase
                .from('users')
                .update({ photoURL: base64 })
                .eq('uid', user.id);

            if (error) throw error;

            if (userProfilePic) {
                userProfilePic.innerHTML = `
                    <img src="${base64}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">
                `;
            }
        } catch (_) {
            // cancelado
        } finally {
            inputFoto.removeAttribute('data-update-mode');
            inputFoto.value = '';
        }
    });
}

// ── MONITORAR DADOS DO USUÁRIO ─────────────────────────────
let _realtimeChannel = null;

export function iniciarListenerUsuario(user) {
    if (_realtimeChannel) {
        supabase.removeChannel(_realtimeChannel);
        _realtimeChannel = null;
    }

    if (!user) {
        if (userHeader) userHeader.innerHTML = '';
        return;
    }

    _carregarDadosUsuario(user.id);

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

    if (window.carregarListaLivros) {
        window.carregarListaLivros();
    }
}

async function _carregarDadosUsuario(uid) {
    try {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('uid', uid)
            .single();

        if (error) throw error;
        if (data) _renderizarUsuario(data);
    } catch (erro) {
        console.error('[auth] Erro ao carregar usuário:', erro);
    }
}

let _ultimaFoto = null;
let _ultimoNome = null;
let _ultimosPts = null;

function _renderizarUsuario(userData) {
    if (!userData) return;

    const fotoUrl = userData.photoURL || 'https://i.imgur.com/6VBx3io.png';
    const nome    = userData.name || '';
    const pts     = userData.points || 0;
    const nivel   = userData.nivel || 1;

    if (fotoUrl === _ultimaFoto && nome === _ultimoNome && pts === _ultimosPts) return;

    _ultimaFoto = fotoUrl;
    _ultimoNome = nome;
    _ultimosPts = pts;

    if (userHeader) {
        userHeader.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <img src="${fotoUrl}" style="width:32px; height:32px; border-radius:50%; object-fit:cover; border:1px solid #d4af37;">
                <div class="header-data">
                    <span style="font-size:0.9rem;">${nome}</span>
                    <span class="pts-tag">${pts} pts</span>
                </div>
            </div>
        `;
    }

    if (userNameDisplay) {
        userNameDisplay.setAttribute('data-full-name', nome);
        userNameDisplay.innerText = nome.length > 8 ? nome.slice(0, 8) : nome;
    }

    if (userPointsDisplay) {
        userPointsDisplay.innerText = `${pts} pts`;
    }

    if (userProfilePic) {
        userProfilePic.innerHTML = `
            <img src="${fotoUrl}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">
        `;
    }

    const nivelEl = document.getElementById('nivel-numero');
    if (nivelEl) nivelEl.textContent = nivel;
}

// ── HELPERS ────────────────────────────────────────────────
function mostrarErro(mensagem) {
    alert('❌ ' + mensagem);
}

function mostrarSucesso(mensagem) {
    alert('✅ ' + mensagem);
}

function traduzirErro(msg) {
    if (!msg) return null;
    if (msg.includes('already registered')) return 'Este e-mail já está cadastrado.';
    if (msg.includes('Invalid login credentials')) return 'E-mail ou senha incorretos.';
    if (msg.includes('Password should be')) return 'Senha fraca. Use pelo menos 8 caracteres.';
    if (msg.includes('Unable to validate')) return 'E-mail inválido.';
    if (msg.includes('Network')) return 'Sem conexão com a internet.';
    return null;
}

function validarDataNascimento(data) {
    if (!data) return false;

    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;
    if (!regex.test(data)) return false;

    const [dia, mes, ano] = data.split('/').map(Number);
    const dataObj = new Date(ano, mes - 1, dia);

    return (
        dataObj.getFullYear() === ano &&
        dataObj.getMonth() === mes - 1 &&
        dataObj.getDate() === dia
    );
}

function formatarDataParaBanco(dataBR) {
    const [dia, mes, ano] = dataBR.split('/');
    return `${ano}-${mes}-${dia}`;
}

// ── CADASTRO ───────────────────────────────────────────────
if (btnRegistrar) {
    btnRegistrar.addEventListener('click', async () => {
        const nome  = document.getElementById('reg-nome')?.value.trim() || '';
        const email = document.getElementById('reg-email')?.value.trim() || '';
        const senha = document.getElementById('reg-senha')?.value || '';
        const data  = document.getElementById('reg-data-nascimento')?.value.trim() || '';

        if (!nome || !email || !senha || !data) {
            return mostrarErro('Preencha nome, e-mail, senha e data de nascimento');
        }

        if (nome.length > 12) {
            return mostrarErro('O nome deve ter no máximo 12 caracteres');
        }

        if (senha.length < 8) {
            return mostrarErro('A senha deve ter no mínimo 8 caracteres');
        }

        if (!validarDataNascimento(data)) {
            return mostrarErro('Digite a data no formato dd/mm/aaaa');
        }

        btnRegistrar.disabled = true;
        btnRegistrar.innerText = 'INICIANDO...';

        try {
            const { data: authData, error } = await supabase.auth.signUp({
                email,
                password: senha
            });

            if (error) throw error;

            const user = authData.user;
            if (!user) throw new Error('Usuário não retornado no cadastro');

            const { error: insertError } = await supabase
                .from('users')
                .insert({
                    uid: user.id,
                    name: nome,
                    email: email,
                    data_nascimento: formatarDataParaBanco(data),
                    photoURL: null,
                    points: 0,
                    nivel: 1,
                    expAtual: 0,
                    createdAt: new Date().toISOString(),
                    lastUpdate: new Date().toISOString()
                });

            if (insertError) throw insertError;

            mostrarSucesso('Conta criada com sucesso! Agora entre no jogo.');

            const campoNome = document.getElementById('reg-nome');
            const campoEmail = document.getElementById('reg-email');
            const campoSenha = document.getElementById('reg-senha');
            const campoData = document.getElementById('reg-data-nascimento');

            if (campoNome) campoNome.value = '';
            if (campoEmail) campoEmail.value = '';
            if (campoSenha) campoSenha.value = '';
            if (campoData) campoData.value = '';

            if (tabEntrar) tabEntrar.click();
        } catch (erro) {
            mostrarErro(traduzirErro(erro.message) || erro.message);
        } finally {
            btnRegistrar.disabled = false;
            btnRegistrar.innerText = 'INICIAR JORNADA';
        }
    });
}

// ── LOGIN ──────────────────────────────────────────────────
if (btnEntrar) {
    btnEntrar.addEventListener('click', async () => {
        const email = document.getElementById('login-email')?.value.trim() || '';
        const senha = document.getElementById('login-senha')?.value || '';

        if (!email || !senha) {
            return mostrarErro('Preencha e-mail e senha');
        }

        btnEntrar.disabled = true;
        btnEntrar.innerText = 'ENTRANDO...';

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password: senha
            });

            if (error) throw error;
        } catch (_) {
            mostrarErro('E-mail ou senha incorretos');
        } finally {
            btnEntrar.disabled = false;
            btnEntrar.innerText = 'ENTRAR NO JOGO';
        }
    });
}

// ── RECUPERAR SENHA ────────────────────────────────────────
if (btnRecuperar) {
    btnRecuperar.addEventListener('click', async () => {
        const email = document.getElementById('login-email')?.value.trim() || '';

        if (!email) {
            return mostrarErro('Digite seu e-mail no campo de login primeiro');
        }

        btnRecuperar.disabled = true;
        btnRecuperar.innerText = 'ENVIANDO...';

        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: window.location.origin
            });

            if (error) throw error;

            mostrarSucesso('E-mail de recuperação enviado com sucesso!');
        } catch (erro) {
            mostrarErro(traduzirErro(erro.message) || erro.message);
        } finally {
            btnRecuperar.disabled = false;
            btnRecuperar.innerText = 'Recuperar Senha';
        }
    });
}

// ── LOGOUT ─────────────────────────────────────────────────
if (btnSair) {
    btnSair.addEventListener('click', async () => {
        if (confirm('Deseja sair da conta?')) {
            if (_realtimeChannel) {
                supabase.removeChannel(_realtimeChannel);
                _realtimeChannel = null;
            }
            await supabase.auth.signOut();
        }
    });
}

// ── ABAS ───────────────────────────────────────────────────
if (tabEntrar) {
    tabEntrar.addEventListener('click', () => {
        if (formEntrar) formEntrar.style.display = 'block';
        if (formCadastrar) formCadastrar.style.display = 'none';
        tabEntrar.classList.add('active');
        if (tabCadastrar) tabCadastrar.classList.remove('active');
    });
}

if (tabCadastrar) {
    tabCadastrar.addEventListener('click', () => {
        if (formCadastrar) formCadastrar.style.display = 'block';
        if (formEntrar) formEntrar.style.display = 'none';
        tabCadastrar.classList.add('active');
        if (tabEntrar) tabEntrar.classList.remove('active');
    });
}

// ── MÁSCARA DA DATA ────────────────────────────────────────
const inputData = document.getElementById('reg-data-nascimento');

if (inputData) {
    inputData.addEventListener('input', (e) => {
        let valor = e.target.value.replace(/\D/g, '').slice(0, 8);

        if (valor.length > 4) {
            valor = `${valor.slice(0, 2)}/${valor.slice(2, 4)}/${valor.slice(4)}`;
        } else if (valor.length > 2) {
            valor = `${valor.slice(0, 2)}/${valor.slice(2)}`;
        }

        e.target.value = valor;
    });
}