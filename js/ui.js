const sideMenu = document.getElementById('side-menu');
const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const navBiblia = document.getElementById('nav-biblia');

const pilha = [];

function viewSnapshot() {
  const bibleText = document.getElementById('bible-text');
  return bibleText ? bibleText.innerHTML : '';
}

export function pushHistory() {
  const html = viewSnapshot();
  if (html) pilha.push(html);
  history.pushState({ appScreen: true, depth: pilha.length }, '');
}

window.pushHistory = pushHistory;

window.voltarHistorico = function () {
  if (pilha.length) {
    const html = pilha.pop();
    const bibleText = document.getElementById('bible-text');
    if (bibleText) bibleText.innerHTML = html;
    return;
  }
  if (window.carregarListaLivros) window.carregarListaLivros();
};

window.confirmarSaida = function () {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="glass-panel confirm-box">
      <h3>Deseja sair do jogo?</h3>
      <button class="glass-btn gold full" id="confirm-exit">Sair para login</button>
      <button class="glass-btn gray full" id="cancel-exit">Cancelar</button>
    </div>`;
  document.body.appendChild(overlay);
  overlay.querySelector('#confirm-exit').onclick = async () => {
    sessionStorage.removeItem('herois_login_liberado');
    location.reload();
  };
  overlay.querySelector('#cancel-exit').onclick = () => overlay.remove();
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
};

openBtn?.addEventListener('click', () => sideMenu?.classList.add('active'));
closeBtn?.addEventListener('click', () => sideMenu?.classList.remove('active'));
navBiblia?.addEventListener('click', () => window.carregarListaLivros?.());

window.addEventListener('popstate', () => {
  const modal = document.getElementById('perfil-detalhado') || document.getElementById('janela-chat');
  if (modal) {
    modal.remove();
    return;
  }
  if (pilha.length) {
    window.voltarHistorico();
  } else {
    window.confirmarSaida();
  }
});
