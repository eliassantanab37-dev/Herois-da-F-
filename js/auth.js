// js/auth.js
// ═══════════════════════════════════════════════════════════
// AUTENTICAÇÃO — LOGIN, CADASTRO, RECUPERAR SENHA, LISTENER
// Fluxo final:
// - Criou conta → entra direto
// - Login → entra direto
// - Abrir o app depois → não entra automático
// - Recuperação de senha compatível com reset-password.js
// - Mostra erro real
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
const btnPerfilMenu = document.getElementById('btn-perfil-menu');

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
                .update({
                    photoURL: base64,
                    lastUpdate: new Date().toISOString(),
            lastupdate: new Date().toISOString(),
                    lastupdate: new Date().toISOString()
                })
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
            if (payload?.new) _renderizarUsuario(payload.new);
        })
        .subscribe((status) => {
            if (status === 'CHANNEL_ERROR') {
                console.warn('[auth] Erro no canal realtime do usuário.');
            }
        });

    if (window.carregarListaLivros) {
        window.carregarListaLivros();
    }
}

export function pararListenerUsuario() {
    if (_realtimeChannel) {
        supabase.removeChannel(_realtimeChannel);
        _realtimeChannel = null;
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

    document.body.dataset.currentUid = userData.uid || '';

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
    if (!msg) return 'Ocorreu um erro inesperado.';

    const texto = String(msg);

    if (texto.includes('already registered') || texto.includes('User already registered')) {
        return 'Este e-mail já está cadastrado.';
    }

    if (texto.includes('Invalid login credentials')) {
        return 'E-mail ou senha incorretos.';
    }

    if (texto.includes('Email not confirmed')) {
        return 'Seu e-mail ainda não foi confirmado. Desative a confirmação obrigatória no Supabase se quiser entrar logo após criar a conta.';
    }

    if (texto.includes('Password should be')) {
        return 'Senha fraca. Use pelo menos 8 caracteres.';
    }

    if (texto.includes('Unable to validate')) {
        return 'E-mail inválido.';
    }

    if (texto.includes('Network')) {
        return 'Sem conexão com a internet.';
    }

    if (texto.includes('Email rate limit exceeded')) {
        return 'Muitas tentativas. Aguarde um pouco e tente novamente.';
    }

    if (texto.includes('duplicate key value')) {
        return 'Esse cadastro já existe.';
    }

    if (texto.includes('JWT')) {
        return 'Sessão inválida. Tente entrar novamente.';
    }

    return texto;
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

async function criarOuAtualizarPerfil(user, nome, email, dataNascimentoBanco) {
    const payload = {
        uid: user.id,
        name: nome,
        email,
        data_nascimento: dataNascimentoBanco,
        photoURL: null,
        points: 0,
        nivel: 1,
        expAtual: 0,
        badges: {},
        createdAt: new Date().toISOString(),
        lastUpdate: new Date().toISOString(),
            lastupdate: new Date().toISOString(),
                    lastupdate: new Date().toISOString()
    };

    const { data: existente, error: existenteError } = await supabase
        .from('users')
        .select('uid')
        .eq('uid', user.id)
        .maybeSingle();

    if (existenteError) throw existenteError;

    if (existente) {
        const { error: updateError } = await supabase
            .from('users')
            .update({
                name: nome,
                email,
                data_nascimento: dataNascimentoBanco,
                lastUpdate: new Date().toISOString(),
            lastupdate: new Date().toISOString(),
                    lastupdate: new Date().toISOString()
            })
            .eq('uid', user.id);

        if (updateError) throw updateError;
        return;
    }

    const { error: insertError } = await supabase
        .from('users')
        .insert(payload);

    if (insertError) throw insertError;
}

function liberarEntradaNoJogo() { return true; }

function bloquearEntradaNoJogo() { return true; }

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
            const dataNascimentoBanco = formatarDataParaBanco(data);

            const { data: authData, error } = await supabase.auth.signUp({
                email,
                password: senha
            });

            if (error) throw error;

            let user = authData?.user || null;
            const sessionJaCriada = !!authData?.session;

            if (user) {
                await criarOuAtualizarPerfil(user, nome, email, dataNascimentoBanco);
            }

            if (!sessionJaCriada) {
                const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
                    email,
                    password: senha
                });

                if (loginError) throw loginError;
                user = loginData?.user || user;
            }

            if (!user) {
                throw new Error('Não foi possível iniciar a sessão após o cadastro.');
            }

            await criarOuAtualizarPerfil(user, nome, email, dataNascimentoBanco);

            liberarEntradaNoJogo();

            const campoNome = document.getElementById('reg-nome');
            const campoEmail = document.getElementById('reg-email');
            const campoSenha = document.getElementById('reg-senha');
            const campoData = document.getElementById('reg-data-nascimento');

            if (campoNome) campoNome.value = '';
            if (campoEmail) campoEmail.value = '';
            if (campoSenha) campoSenha.value = '';
            if (campoData) campoData.value = '';

            mostrarSucesso('Conta criada com sucesso! Entrando no jogo...');

            setTimeout(() => {
                window.location.href = window.location.pathname;
            }, 250);
        } catch (erro) {
            console.error('[auth] Erro no cadastro:', erro);
            mostrarErro(traduzirErro(erro.message));
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

            liberarEntradaNoJogo();

            setTimeout(() => {
                window.location.href = window.location.pathname;
            }, 200);
        } catch (erro) {
            console.error('[auth] Erro no login:', erro);
            mostrarErro(traduzirErro(erro.message));
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
            const redirectUrl = `${window.location.origin}${window.location.pathname}`;

            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: redirectUrl
            });

            if (error) throw error;

            mostrarSucesso('E-mail de recuperação enviado com sucesso! Abra o link do e-mail para criar uma nova senha.');
        } catch (erro) {
            console.error('[auth] Erro ao recuperar senha:', erro);
            mostrarErro(traduzirErro(erro.message));
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
            try {
                pararListenerUsuario();
                bloquearEntradaNoJogo();
                await supabase.auth.signOut();
                window.location.href = window.location.pathname;
            } catch (erro) {
                console.error('[auth] Erro ao sair:', erro);
                mostrarErro('Não foi possível sair da conta.');
            }
        }
    });
}

if (btnPerfilMenu) {
    btnPerfilMenu.addEventListener('click', async () => {
        const uid = document.body.dataset.currentUid;
        if (!uid || typeof window.verPerfilDetalhado !== 'function') return;
        document.getElementById('side-menu')?.classList.remove('active');
        document.body.style.overflow = 'auto';
        window.verPerfilDetalhado(uid);
    });
}

// ── ABAS ───────────────────────────────────────────────────
if (tabEntrar) {
    tabEntrar.addEventListener('click', () => {
        const resetBox = document.getElementById('reset-password-box');
        if (resetBox) resetBox.style.display = 'none';

        if (formEntrar) formEntrar.style.display = 'block';
        if (formCadastrar) formCadastrar.style.display = 'none';

        tabEntrar.classList.add('active');
        if (tabCadastrar) tabCadastrar.classList.remove('active');
    });
}

if (tabCadastrar) {
    tabCadastrar.addEventListener('click', () => {
        const resetBox = document.getElementById('reset-password-box');
        if (resetBox) resetBox.style.display = 'none';

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