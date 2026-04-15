// js/ui.js
// ═══════════════════════════════════════════════════════════
// GERENCIADOR DE INTERFACE - MENUS E NAVEGAÇÃO
// ═══════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────
// ELEMENTOS DOM
// ───────────────────────────────────────────────────────────
const sideMenu = document.getElementById('side-menu');
const openBtn  = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const navBiblia  = document.getElementById('nav-biblia');
const navRanking = document.getElementById('nav-ranking');

// ───────────────────────────────────────────────────────────
// CONTROLE DE Z-INDEX DO SIDEBAR
// O sidebar recua (fica atrás) quando um modal é aberto
// e volta ao normal quando o modal é fechado.
// ───────────────────────────────────────────────────────────
const Z_SIDEBAR_NORMAL  = 1000;
const Z_SIDEBAR_RECUADO = 50;

// Seletores de tudo que pode abrir NA FRENTE do menu
const SELETORES_MODAIS = [
    '#perfil-detalhado',
    '#crop-overlay',
    '.chat-window',
    '.alerta-leitura',
    '.vitoria-popup',
    '.overlay-erro',
];

function setSidebarZ(z) {
    if (!sideMenu) return;
    sideMenu.style.setProperty('z-index', String(z), 'important');
}

function algumModalAberto() {
    for (const sel of SELETORES_MODAIS) {
        const el = document.querySelector(sel);
        if (!el) continue;
        const s = window.getComputedStyle(el);
        if (s.display !== 'none' && s.visibility !== 'hidden' && parseFloat(s.opacity) > 0) {
            return true;
        }
    }
    return false;
}

function sincronizarZSidebar() {
    if (algumModalAberto()) {
        setSidebarZ(Z_SIDEBAR_RECUADO);
    } else {
        setSidebarZ(Z_SIDEBAR_NORMAL);
    }
}

// MutationObserver — detecta qualquer modal abrindo/fechando no DOM
// ⚠️ Ignora mudanças dentro do perfil/foto para não criar loop com o onValue do Firebase
const domObserver = new MutationObserver((mutations) => {
    // Filtra mutações que vieram de dentro do sidebar de perfil (foto, nome, pts)
    // para não entrar em loop quando o auth.js atualiza o innerHTML
    const ehMudancaInternaSidebar = mutations.every((m) => {
        const alvo = m.target;
        return (
            alvo.id === 'user-profile-pic'   ||
            alvo.id === 'user-name-display'  ||
            alvo.id === 'user-points-display'||
            alvo.id === 'user-header-info'   ||
            alvo.closest?.('#user-profile-pic')  ||
            alvo.closest?.('#user-header-info')
        );
    });
    if (ehMudancaInternaSidebar) return;
    sincronizarZSidebar();
});
domObserver.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['style', 'class'],
});

// ───────────────────────────────────────────────────────────
// MENU LATERAL — ABRIR / FECHAR
// ───────────────────────────────────────────────────────────
if (openBtn) {
    openBtn.addEventListener('click', () => {
        sideMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
        sincronizarZSidebar();
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        sideMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Clique em botão DENTRO do menu:
// NÃO fecha mais o sidebar — apenas recua o z-index
// (o MutationObserver vai detectar o modal abrindo e recuar automaticamente)
if (sideMenu) {
    sideMenu.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn || btn.id === 'close-menu' || btn.id === 'btn-sair-menu') return;
        // Pequeno delay para o modal ter tempo de ser inserido no DOM
        setTimeout(sincronizarZSidebar, 80);
    });
}

// Fechar ao clicar fora do menu (só quando nenhum modal estiver aberto)
document.addEventListener('click', (e) => {
    if (!sideMenu || !sideMenu.classList.contains('active')) return;
    if (algumModalAberto()) return; // não fecha se há modal aberto
    if (!sideMenu.contains(e.target) && openBtn && !openBtn.contains(e.target)) {
        sideMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ───────────────────────────────────────────────────────────
// NAVEGAÇÃO PRINCIPAL
// ───────────────────────────────────────────────────────────
if (navBiblia) {
    navBiblia.addEventListener('click', () => {
        if (window.carregarListaLivros) window.carregarListaLivros();
    });
}

// ───────────────────────────────────────────────────────────
// ANIMAÇÕES DO SIDEBAR
// ───────────────────────────────────────────────────────────
const styleEl = document.createElement('style');
styleEl.textContent = `
    @keyframes slideInLeft {
        from { transform: translateX(-100%); opacity: 0; }
        to   { transform: translateX(0);     opacity: 1; }
    }
    @keyframes slideOutLeft {
        from { transform: translateX(0);     opacity: 1; }
        to   { transform: translateX(-100%); opacity: 0; }
    }
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to   { transform: translateX(0);     opacity: 1; }
    }
    @keyframes subirESumir {
        0%   { opacity: 0; transform: translate(-50%, -20%) scale(0.5); }
        20%  { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        80%  { opacity: 1; transform: translate(-50%, -60%) scale(1);   }
        100% { opacity: 0; transform: translate(-50%, -100%) scale(0.8);}
    }
    #side-menu.active {
        animation: slideInLeft 0.3s ease;
    }
`;
document.head.appendChild(styleEl);

// ───────────────────────────────────────────────────────────
// FEEDBACK VISUAL — SPINNER
// ───────────────────────────────────────────────────────────
export function mostrarLoadingSpinner(parentElement = null) {
    const spinner = document.createElement('div');
    spinner.id = 'loading-spinner';
    spinner.style.cssText = `
        position: fixed; top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99999;
    `;
    spinner.innerHTML = `
        <div style="
            width: 60px; height: 60px;
            border: 4px solid #333;
            border-top: 4px solid #d4af37;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        "></div>
        <style>@keyframes spin { to { transform: rotate(360deg); } }</style>
    `;
    document.body.appendChild(spinner);
    return () => { const el = document.getElementById('loading-spinner'); if (el) el.remove(); };
}

// ───────────────────────────────────────────────────────────
// RESPONSIVIDADE
// ───────────────────────────────────────────────────────────
function handleResize() {
    if (window.innerWidth > 768 && sideMenu) {
        sideMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}
window.addEventListener('resize', handleResize);

console.log("✅ UI carregado!");