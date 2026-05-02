// js/auth.js — Heróis da Fé
// ═══════════════════════════════════════════════════════════
// NOVAS FUNCIONALIDADES ADICIONADAS:
//  1. obterUsuarioAtualCompleto()    — busca dados completos do usuário logado
//  2. registrarEntradaUsuario()      — insere log em public.logs_acesso
//  3. registrarSaidaUsuario()        — atualiza saida_data_hora no log
//  4. mostrarBoasVindas()            — toast de boas-vindas (1x por sessão)
//  5. verificarAniversarioUsuario()  — verifica se hoje é aniversário
//  6. mostrarAnimacaoAniversario()   — modal com confetes de aniversário
// ═══════════════════════════════════════════════════════════

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

// ══════════════════════════════════════════════════════════════════════════════
// ── Helpers gerais ─────────────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════════════

function val(v, ...keys){ for(const k of keys){ if(v && v[k] != null) return v[k]; } return null; }

// ── Proteção contra injeção de HTML nos nomes de usuário ──────────────────
function escaparHTML(texto = '') {
  return String(texto)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

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
  const emailLogin = document.getElementById('login-email')?.value.trim();
  if (emailLogin && forgotEmailInput) forgotEmailInput.value = emailLogin;
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

// ══════════════════════════════════════════════════════════════════════════════
// ── NOVA FUNÇÃO: obterUsuarioAtualCompleto ─────────────────────────────────
// Busca dados completos do usuário logado (auth + tabela users)
// Retorna: { uid, nome, email, data_nascimento, photourl } ou null
// ══════════════════════════════════════════════════════════════════════════════
export async function obterUsuarioAtualCompleto() {
  try {
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) return null;

    // Busca dados completos na tabela public.users
    const { data: perfil, error: perfilError } = await supabase
      .from('users')
      .select('uid, name, email, data_nascimento, photourl, photoURL, points, nivel')
      .eq('uid', user.id)
      .maybeSingle();

    if (perfilError) {
      console.warn('[obterUsuarioAtualCompleto] erro ao buscar perfil:', perfilError);
    }

    // Monta nome com fallbacks em cascata
    const nome =
      perfil?.name ||
      user.user_metadata?.name ||
      user.user_metadata?.full_name ||
      user.email?.split('@')[0] ||
      'Herói';

    return {
      uid:             user.id,
      nome,
      email:           perfil?.email || user.email || '',
      data_nascimento: perfil?.data_nascimento || null,
      photourl:        perfil?.photoURL || perfil?.photourl || null,
      points:          perfil?.points || 0,
      nivel:           perfil?.nivel || 1,
    };
  } catch (e) {
    console.error('[obterUsuarioAtualCompleto] erro inesperado:', e);
    return null;
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// ── NOVA FUNÇÃO: registrarEntradaUsuario ───────────────────────────────────
// Insere um registro em public.logs_acesso e salva o id no localStorage.
// Evita duplicatas verificando se já existe log_acesso_id no localStorage.
// ══════════════════════════════════════════════════════════════════════════════
export async function registrarEntradaUsuario() {
  try {
    const usuario = await obterUsuarioAtualCompleto();
    if (!usuario) return;

    // ── Passo 1: consulta o banco como fonte principal ─────────────────────
    // Busca o log mais recente desse usuário que ainda está aberto (sem saída).
    // Isso resolve o caso em que o usuário fechou o navegador sem clicar em
    // "Sair" e o log_acesso_id ficou "preso" no localStorage com ID antigo.
    const { data: logAberto, error: erroConsulta } = await supabase
      .from('logs_acesso')
      .select('id, entrada_data_hora')
      .eq('uid', usuario.uid)
      .is('saida_data_hora', null)
      .order('entrada_data_hora', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (erroConsulta) {
      console.warn('[logs_acesso] Erro ao consultar log aberto:', erroConsulta);
    }

    if (logAberto?.id) {
      // ── Passo 2a: existe log aberto no banco ────────────────────────────
      // Verifica se é recente (menos de 30 minutos) para reutilizar.
      // Logs com mais de 30 min provavelmente são de sessão anterior órfã.
      const entradaMs   = new Date(logAberto.entrada_data_hora).getTime();
      const agoraMs     = Date.now();
      const diffMinutos = (agoraMs - entradaMs) / 1000 / 60;

      if (diffMinutos < 30) {
        // Reutiliza o log aberto recente — não cria duplicata
        localStorage.setItem('log_acesso_id', logAberto.id);
        console.log('[logs_acesso] Reutilizando log aberto recente. ID:', logAberto.id);
        return;
      }

      // Log aberto mas antigo (sessão órfã): registra saída nele e cria novo
      console.log('[logs_acesso] Log órfão encontrado (> 30 min). Fechando e criando novo.');
      await supabase
        .from('logs_acesso')
        .update({ saida_data_hora: new Date().toISOString() })
        .eq('id', logAberto.id);
    }

    // ── Passo 2b: não existe log aberto válido — cria um novo ──────────────
    const { data: novoLog, error: erroInsert } = await supabase
      .from('logs_acesso')
      .insert({
        uid:        usuario.uid,
        nome:       usuario.nome,
        email:      usuario.email,
        user_agent: navigator.userAgent,
        // entrada_data_hora tem DEFAULT now() no banco — não precisamos enviar
      })
      .select('id')
      .single();

    if (erroInsert) {
      console.warn('[logs_acesso] Erro ao criar novo log de entrada:', erroInsert);
      return;
    }

    if (novoLog?.id) {
      localStorage.setItem('log_acesso_id', novoLog.id);
      console.log('[logs_acesso] Nova entrada registrada. ID:', novoLog.id);
    }
  } catch (e) {
    console.error('[logs_acesso] Erro inesperado ao registrar entrada:', e);
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// ── NOVA FUNÇÃO: registrarSaidaUsuario ────────────────────────────────────
// Atualiza saida_data_hora no registro de log e remove do localStorage.
// Deve ser chamada ANTES de supabase.auth.signOut().
// ══════════════════════════════════════════════════════════════════════════════
export async function registrarSaidaUsuario() {
  try {
    const logId = localStorage.getItem('log_acesso_id');
    if (!logId) {
      console.log('[logs_acesso] Nenhum log de entrada encontrado para registrar saída.');
      return;
    }

    const { error } = await supabase
      .from('logs_acesso')
      .update({ saida_data_hora: new Date().toISOString() })
      .eq('id', logId);

    if (error) {
      console.warn('[logs_acesso] Erro ao registrar saída:', error);
    } else {
      console.log('[logs_acesso] Saída registrada para o log:', logId);
    }

    // Remove do localStorage independentemente de erro no banco
    localStorage.removeItem('log_acesso_id');
  } catch (e) {
    console.error('[logs_acesso] Erro inesperado ao registrar saída:', e);
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// ── NOVA FUNÇÃO: mostrarBoasVindas ─────────────────────────────────────────
// Exibe uma mensagem de boas-vindas suave apenas UMA vez por sessão.
// Usa sessionStorage para controlar a exibição.
// ══════════════════════════════════════════════════════════════════════════════
export async function mostrarBoasVindas(nome) {
  try {
    // Evita repetir a mensagem na mesma sessão do navegador
    if (sessionStorage.getItem('boas_vindas_mostrada')) return;
    sessionStorage.setItem('boas_vindas_mostrada', '1');

    const nomeSeguro = escaparHTML(nome || 'Herói');

    // Injeta estilos do toast de boas-vindas (se ainda não existir)
    if (!document.getElementById('style-boas-vindas')) {
      const style = document.createElement('style');
      style.id = 'style-boas-vindas';
      style.innerHTML = `
        @keyframes boasVindasEntrada {
          0%   { opacity: 0; transform: translate(-50%, -60%) scale(0.85); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes boasVindasSaida {
          0%   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -40%) scale(0.9); }
        }
        .boas-vindas-overlay {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 99999;
          background: linear-gradient(135deg, rgba(15,10,5,0.98), rgba(30,20,5,0.98));
          border: 2px solid #d4a21e;
          border-radius: 20px;
          padding: 36px 40px;
          text-align: center;
          box-shadow: 0 0 40px rgba(212,162,30,0.5), 0 0 80px rgba(212,162,30,0.15);
          min-width: 300px;
          max-width: 90vw;
          animation: boasVindasEntrada 0.5s cubic-bezier(0.17,0.89,0.32,1.28) forwards;
          font-family: 'Poppins', 'Arial', sans-serif;
        }
        .boas-vindas-overlay.saindo {
          animation: boasVindasSaida 0.4s ease forwards;
        }
        .boas-vindas-icone {
          font-size: 2.8rem;
          margin-bottom: 10px;
        }
        .boas-vindas-titulo {
          color: #d4a21e;
          font-size: 1.05rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .boas-vindas-nome {
          color: #ffffff;
          font-size: 1.55rem;
          font-weight: 700;
          margin-bottom: 10px;
          text-shadow: 0 0 12px rgba(212,162,30,0.6);
        }
        .boas-vindas-mensagem {
          color: rgba(255,255,255,0.75);
          font-size: 0.92rem;
          line-height: 1.5;
        }
        .boas-vindas-barra {
          height: 3px;
          background: #d4a21e;
          border-radius: 99px;
          margin-top: 18px;
          transform-origin: left;
          animation: boasVindasBarra 3.5s linear forwards;
        }
        @keyframes boasVindasBarra {
          from { transform: scaleX(1); }
          to   { transform: scaleX(0); }
        }
      `;
      document.head.appendChild(style);
    }

    // Cria o elemento de boas-vindas
    const el = document.createElement('div');
    el.className = 'boas-vindas-overlay';
    el.innerHTML = `
      <div class="boas-vindas-icone">🙏</div>
      <div class="boas-vindas-titulo">Bem-vindo de volta</div>
      <div class="boas-vindas-nome">${nomeSeguro}</div>
      <div class="boas-vindas-mensagem">Que Deus abençoe sua leitura!</div>
      <div class="boas-vindas-barra"></div>
    `;

    document.body.appendChild(el);

    // Remove após 3.8s com animação de saída
    setTimeout(() => {
      el.classList.add('saindo');
      setTimeout(() => el.remove(), 450);
    }, 3500);

  } catch (e) {
    console.warn('[mostrarBoasVindas] erro:', e);
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// ── NOVA FUNÇÃO: verificarAniversarioUsuario ───────────────────────────────
// Compara dia e mês de data_nascimento com a data atual.
// Retorna true se hoje for o aniversário do usuário.
// ══════════════════════════════════════════════════════════════════════════════
export function verificarAniversarioUsuario(data_nascimento) {
  if (!data_nascimento) return false;
  try {
    const hoje = new Date();
    // data_nascimento vem do banco no formato 'YYYY-MM-DD'
    const [, mesNasc, diaNasc] = data_nascimento.split('-').map(Number);
    const diaHoje = hoje.getDate();
    const mesHoje = hoje.getMonth() + 1; // getMonth() retorna 0-11
    return diaNasc === diaHoje && mesNasc === mesHoje;
  } catch (e) {
    console.warn('[verificarAniversarioUsuario] erro ao verificar data:', e);
    return false;
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// ── NOVA FUNÇÃO: mostrarAnimacaoAniversario ────────────────────────────────
// Exibe um modal bonito com confetes apenas UMA vez no dia do aniversário.
// Usa localStorage com a data atual como chave para controlar a exibição.
// ══════════════════════════════════════════════════════════════════════════════
export async function mostrarAnimacaoAniversario(nome) {
  try {
    // Gera chave única para hoje — só mostra 1x por dia
    const hoje = new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'
    const chaveStorage = `aniversario_mostrado_${hoje}`;
    if (localStorage.getItem(chaveStorage)) return;
    localStorage.setItem(chaveStorage, '1');

    const nomeSeguro = escaparHTML(nome || 'Herói');

    // Injeta estilos do modal de aniversário
    if (!document.getElementById('style-aniversario')) {
      const style = document.createElement('style');
      style.id = 'style-aniversario';
      style.innerHTML = `
        @keyframes anivEntrada {
          0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.7) rotate(-3deg); }
          80%  { transform: translate(-50%, -50%) scale(1.05) rotate(1deg); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
        }
        @keyframes anivSaida {
          to { opacity: 0; transform: translate(-50%, -50%) scale(0.85); }
        }
        @keyframes anivBrilho {
          0%, 100% { box-shadow: 0 0 30px rgba(212,162,30,0.6), 0 0 60px rgba(212,162,30,0.2); }
          50%      { box-shadow: 0 0 50px rgba(212,162,30,0.9), 0 0 100px rgba(212,162,30,0.35); }
        }
        @keyframes anivTexto {
          0%, 100% { text-shadow: 0 0 10px #fff, 0 0 20px #d4a21e; }
          50%      { text-shadow: 0 0 20px #fff, 0 0 40px #ffdf00, 0 0 60px #ff8c00; }
        }
        @keyframes confete {
          0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(120vh) rotate(720deg); opacity: 0; }
        }
        .aniv-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          z-index: 99998;
          backdrop-filter: blur(4px);
        }
        .aniv-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 99999;
          background: linear-gradient(160deg, #1a0e00, #2c1a00, #1a0e00);
          border: 3px solid #d4a21e;
          border-radius: 24px;
          padding: 40px 36px;
          text-align: center;
          min-width: 300px;
          max-width: 88vw;
          animation: anivEntrada 0.7s cubic-bezier(0.17,0.89,0.32,1.28) forwards,
                     anivBrilho 2.5s ease-in-out 0.7s infinite;
          font-family: 'Poppins', 'Arial', sans-serif;
        }
        .aniv-modal.saindo {
          animation: anivSaida 0.4s ease forwards;
        }
        .aniv-emoji-topo {
          font-size: 3.2rem;
          margin-bottom: 6px;
        }
        .aniv-titulo {
          color: #d4a21e;
          font-size: 1.6rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          animation: anivTexto 2s ease-in-out infinite;
          margin-bottom: 4px;
        }
        .aniv-nome {
          color: #ffffff;
          font-size: 1.35rem;
          font-weight: 700;
          margin: 8px 0;
        }
        .aniv-mensagem {
          color: rgba(255,255,255,0.8);
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 12px 0 20px;
        }
        .aniv-btn-fechar {
          background: linear-gradient(135deg, #d4a21e, #f0c040);
          color: #000;
          border: none;
          border-radius: 10px;
          padding: 10px 28px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          letter-spacing: 1px;
          transition: transform 0.15s;
        }
        .aniv-btn-fechar:hover { transform: scale(1.04); }
        .confete-item {
          position: fixed;
          top: -10px;
          width: 10px;
          height: 10px;
          border-radius: 2px;
          z-index: 100000;
          pointer-events: none;
          animation: confete linear forwards;
        }
      `;
      document.head.appendChild(style);
    }

    // ── Cria confetes coloridos ──────────────────────────────────────────────
    const coresConfete = ['#d4a21e', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#fd79a8', '#a29bfe'];
    const fragmento = document.createDocumentFragment();
    for (let i = 0; i < 60; i++) {
      const c = document.createElement('div');
      c.className = 'confete-item';
      const duracao  = 2.5 + Math.random() * 2;
      const delay    = Math.random() * 1.5;
      const cor      = coresConfete[Math.floor(Math.random() * coresConfete.length)];
      const tamanho  = 6 + Math.random() * 10;
      c.style.cssText = `
        left: ${Math.random() * 100}vw;
        background: ${cor};
        width: ${tamanho}px;
        height: ${tamanho}px;
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        animation-duration: ${duracao}s;
        animation-delay: ${delay}s;
        opacity: 0;
      `;
      fragmento.appendChild(c);
    }
    document.body.appendChild(fragmento);

    // Remove confetes após o fim
    setTimeout(() => {
      document.querySelectorAll('.confete-item').forEach(c => c.remove());
    }, 5500);

    // ── Cria backdrop e modal ─────────────────────────────────────────────────
    const backdrop = document.createElement('div');
    backdrop.className = 'aniv-backdrop';

    const modal = document.createElement('div');
    modal.className = 'aniv-modal';
    modal.innerHTML = `
      <div class="aniv-emoji-topo">🎂🎉🎊</div>
      <div class="aniv-titulo">Feliz Aniversário!</div>
      <div class="aniv-nome">${nomeSeguro}</div>
      <div class="aniv-mensagem">
        Que Deus te abençoe grandemente<br>
        neste novo ciclo de vida!<br>
        <span style="font-size:1.4rem;">🙏✨</span>
      </div>
      <button class="aniv-btn-fechar" id="btn-fechar-aniversario">AMÉM! GLÓRIA!</button>
    `;

    document.body.appendChild(backdrop);
    document.body.appendChild(modal);

    function fecharAniversario() {
      modal.classList.add('saindo');
      backdrop.style.opacity = '0';
      backdrop.style.transition = 'opacity 0.4s';
      setTimeout(() => { modal.remove(); backdrop.remove(); }, 420);
    }

    document.getElementById('btn-fechar-aniversario')?.addEventListener('click', fecharAniversario);
    backdrop.addEventListener('click', fecharAniversario);

    // Fecha automaticamente após 12 segundos se o usuário não clicar
    setTimeout(fecharAniversario, 12000);

    // Lança confetes via library canvas-confetti, se disponível
    if (window.confetti) {
      setTimeout(() => {
        window.confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 }, colors: coresConfete });
      }, 300);
    }

  } catch (e) {
    console.warn('[mostrarAnimacaoAniversario] erro:', e);
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// ── FUNÇÃO CENTRAL: executarAcoesPosSessao ─────────────────────────────────
// Chamada após login confirmado ou ao detectar sessão já autenticada.
// Executa em ordem: log de entrada → boas-vindas → aniversário.
// O parâmetro `ehLoginNovo` evita que o log seja duplicado ao detectar sessão.
// ══════════════════════════════════════════════════════════════════════════════
async function executarAcoesPosSessao() {
  try {
    const usuario = await obterUsuarioAtualCompleto();
    if (!usuario) return;

    // 1. Registra entrada (função já protege contra duplicatas via localStorage)
    await registrarEntradaUsuario();

    // 2. Boas-vindas (apenas 1x por sessão via sessionStorage)
    await mostrarBoasVindas(usuario.nome);

    // 3. Verifica e exibe animação de aniversário (apenas 1x por dia)
    if (verificarAniversarioUsuario(usuario.data_nascimento)) {
      // Aguarda um pouco para não sobrepor com as boas-vindas
      setTimeout(() => mostrarAnimacaoAniversario(usuario.nome), 4200);
    }
  } catch (e) {
    console.warn('[executarAcoesPosSessao] erro:', e);
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// ── Criar / atualizar perfil no banco ──────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════════════
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

// ══════════════════════════════════════════════════════════════════════════════
// ── Listener de usuário ────────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════════════
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

// ══════════════════════════════════════════════════════════════════════════════
// ── Cadastro ───────────────────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════════════
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
    // As ações pós-sessão (log, boas-vindas) serão disparadas pelo onAuthStateChange
  } catch (e) { toast(traduzirErro(e.message), false); } finally { btnRegistrar.disabled = false; }
});

// ══════════════════════════════════════════════════════════════════════════════
// ── Login ──────────────────────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════════════
btnEntrar?.addEventListener('click', async () => {
  const email = document.getElementById('login-email')?.value.trim() || '';
  const senha = document.getElementById('login-senha')?.value || '';
  if (!email || !senha) return toast('Preencha e-mail e senha.', false);
  btnEntrar.disabled = true;
  try {
    const { error } = await supabase.auth.signInWithPassword({ email, password: senha });
    if (error) throw error;
    // As ações pós-sessão (log, boas-vindas) serão disparadas pelo onAuthStateChange
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
      redirectTo: 'https://www.heroisdafe.app.br/'
    });
    if (error) throw error;
    _setForgotMsg('✅ Link de recuperação enviado para seu e-mail.', 'sucesso');
    btnEnviarLink.textContent = 'ENVIADO!';
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

// ══════════════════════════════════════════════════════════════════════════════
// ── Sair do jogo ──────────────────────────────────────────────────────────
// ALTERADO: agora registra saída no log ANTES de fazer signOut
// ══════════════════════════════════════════════════════════════════════════════
btnSair?.addEventListener('click', async () => {
  try {
    await pararListenerUsuario();
    // NOVO: registra saída no log de acesso antes de deslogar
    await registrarSaidaUsuario();
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

// ══════════════════════════════════════════════════════════════════════════════
// ── LISTENER GLOBAL DE AUTH STATE ─────────────────────────────────────────
// Detecta login, cadastro e sessão já existente ao abrir o app.
// Dispara as ações pós-sessão (log de entrada, boas-vindas, aniversário).
// ══════════════════════════════════════════════════════════════════════════════
supabase.auth.onAuthStateChange(async (event, session) => {
  console.log('[auth] evento:', event);

  if (session?.user) {
    // Inicia o listener de dados do usuário na UI
    await iniciarListenerUsuario(session.user);

    // Executa ações pós-sessão apenas nos eventos de login/início de sessão
    // SIGNED_IN  → login explícito ou retorno de link mágico
    // INITIAL_SESSION → sessão já existente ao abrir o app
    if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') {
      // Usa setTimeout para não bloquear o fluxo de auth
      setTimeout(() => executarAcoesPosSessao(), 800);
    }
  } else {
    // Usuário deslogado: limpa o id do log do localStorage
    // (caso o logout tenha ocorrido de forma inesperada, sem clicar em "sair")
    localStorage.removeItem('log_acesso_id');
  }
});
