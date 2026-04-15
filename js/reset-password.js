// js/reset-password.js
import { supabase } from './config.js';

const authContainer = document.getElementById('auth-container');
const formEntrar = document.getElementById('form-entrar');
const formCadastrar = document.getElementById('form-cadastrar');
const tabEntrar = document.getElementById('tab-entrar');
const tabCadastrar = document.getElementById('tab-cadastrar');

const resetBox = document.getElementById('reset-password-box');
const newPasswordInput = document.getElementById('reset-nova-senha');
const confirmPasswordInput = document.getElementById('reset-confirmar-senha');
const resetButton = document.getElementById('btn-resetar-senha');
const cancelButton = document.getElementById('btn-cancelar-reset');
const resetMessage = document.getElementById('reset-password-message');

function setMessage(texto, tipo = 'normal') {
    if (!resetMessage) return;
    resetMessage.textContent = texto;

    if (tipo === 'erro') {
        resetMessage.style.color = '#ff8f8f';
    } else if (tipo === 'sucesso') {
        resetMessage.style.color = '#9ff0b4';
    } else {
        resetMessage.style.color = '#cdbf8a';
    }
}

function isRecoveryHash() {
    const hash = window.location.hash || '';
    return hash.includes('type=recovery') || hash.includes('access_token=');
}

function showResetScreen() {
    if (!authContainer || !resetBox) return;

    authContainer.style.display = 'block';
    resetBox.style.display = 'block';

    if (formEntrar) formEntrar.style.display = 'none';
    if (formCadastrar) formCadastrar.style.display = 'none';

    if (tabEntrar) tabEntrar.classList.remove('active');
    if (tabCadastrar) tabCadastrar.classList.remove('active');

    setMessage('Digite sua nova senha para concluir a recuperação.');
}

function hideResetScreen() {
    if (!resetBox) return;
    resetBox.style.display = 'none';

    if (formEntrar) formEntrar.style.display = 'block';
    if (formCadastrar) formCadastrar.style.display = 'none';

    if (tabEntrar) tabEntrar.classList.add('active');
    if (tabCadastrar) tabCadastrar.classList.remove('active');
}

async function tryPrepareRecoveryScreen() {
    if (!isRecoveryHash()) return;

    showResetScreen();

    await new Promise((resolve) => setTimeout(resolve, 700));

    const { data, error } = await supabase.auth.getSession();

    if (error) {
        console.error('[reset-password] Erro ao obter sessão:', error);
    }

    if (!data?.session) {
        setMessage('Link de recuperação inválido ou expirado. Peça um novo e-mail de recuperação.', 'erro');
    }
}

if (cancelButton) {
    cancelButton.addEventListener('click', async () => {
        try {
            await supabase.auth.signOut();
        } catch (_) {}

        hideResetScreen();
        window.history.replaceState({}, '', `${window.location.pathname}${window.location.search}`);
    });
}

if (resetButton) {
    resetButton.addEventListener('click', async () => {
        const senha = newPasswordInput?.value || '';
        const confirmar = confirmPasswordInput?.value || '';

        if (!senha || !confirmar) {
            return setMessage('Preencha os dois campos de senha.', 'erro');
        }

        if (senha.length < 8) {
            return setMessage('A nova senha deve ter pelo menos 8 caracteres.', 'erro');
        }

        if (senha !== confirmar) {
            return setMessage('As senhas não coincidem.', 'erro');
        }

        resetButton.disabled = true;
        resetButton.textContent = 'SALVANDO...';
        setMessage('Atualizando sua senha...');

        try {
            const { data: sessionData } = await supabase.auth.getSession();

            if (!sessionData?.session) {
                throw new Error('Sessão de recuperação não encontrada. Abra novamente o link enviado por e-mail.');
            }

            const { error } = await supabase.auth.updateUser({
                password: senha
            });

            if (error) throw error;

            setMessage('Senha alterada com sucesso! Agora você já pode entrar com a nova senha.', 'sucesso');

            if (newPasswordInput) newPasswordInput.value = '';
            if (confirmPasswordInput) confirmPasswordInput.value = '';

            await supabase.auth.signOut();

            setTimeout(() => {
                hideResetScreen();
                window.history.replaceState({}, '', `${window.location.pathname}${window.location.search}`);
            }, 1500);
        } catch (erro) {
            console.error('[reset-password] Erro ao atualizar senha:', erro);
            setMessage(erro.message || 'Não foi possível alterar a senha.', 'erro');
        } finally {
            resetButton.disabled = false;
            resetButton.textContent = 'SALVAR NOVA SENHA';
        }
    });
}

supabase.auth.onAuthStateChange((event) => {
    if (event === 'PASSWORD_RECOVERY') {
        showResetScreen();
    }
});

window.addEventListener('load', async () => {
    await tryPrepareRecoveryScreen();
});