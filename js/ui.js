// js/ui.js
const sideMenu = document.getElementById('side-menu');
const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const navBiblia = document.getElementById('nav-biblia');
const navRanking = document.getElementById('nav-ranking');

function closeSidebar(){
  if(!sideMenu) return;
  sideMenu.classList.remove('active');
  document.body.classList.remove('menu-open');
}
function openSidebar(){
  if(!sideMenu) return;
  sideMenu.style.display = 'block';
  sideMenu.classList.add('active');
  document.body.classList.add('menu-open');
}

window.fecharSidebar = closeSidebar;
window.abrirSidebar = openSidebar;

openBtn?.addEventListener('click', openSidebar);
closeBtn?.addEventListener('click', closeSidebar);

document.addEventListener('click', (e) => {
  if (!sideMenu?.classList.contains('active')) return;
  if (e.target.closest('#perfil-detalhado, #janela-chat, #crop-overlay, .overlay-sair-jogo')) return;
  if (sideMenu.contains(e.target) || openBtn?.contains(e.target)) return;
  closeSidebar();
});

navBiblia?.addEventListener('click', () => {
  closeSidebar();
  window.voltarParaBiblia?.();
});

navRanking?.addEventListener('click', () => {
  closeSidebar();
});

const style = document.createElement('style');
style.textContent = `
@keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
#side-menu.active{animation:fadeUp .25s ease}
`;
document.head.appendChild(style);

let sairArmed = false;
function mostrarConfirmacaoSaida(){
  document.querySelector('.overlay-sair-jogo')?.remove();
  const ov = document.createElement('div');
  ov.className = 'overlay-sair-jogo';
  ov.innerHTML = `<div class="exit-box"><div class="exit-title">Deseja sair do jogo?</div><div class="exit-actions"><button id="confirmar-sair-jogo" class="glass-btn gold">Sair</button><button id="cancelar-sair-jogo" class="glass-btn dark">Cancelar</button></div></div>`;
  document.body.appendChild(ov);
  ov.querySelector('#confirmar-sair-jogo')?.addEventListener('click', () => document.getElementById('btn-sair-menu')?.click());
  ov.querySelector('#cancelar-sair-jogo')?.addEventListener('click', () => ov.remove());
}

window.addEventListener('popstate', () => {
  if (document.getElementById('perfil-detalhado')) return document.getElementById('perfil-detalhado').remove();
  if (document.getElementById('janela-chat')) return window.fecharChatAtivo?.();
  if (sideMenu?.classList.contains('active')) return closeSidebar();
  const reading = document.getElementById('reading-view');
  const auth = document.getElementById('auth-container');
  if (reading && reading.style.display === 'block' && auth && auth.style.display === 'none') {
    if (window._paginaAtualJogo && window._paginaAtualJogo !== 'biblia-home') {
      window.voltarParaBiblia?.();
      return;
    }
    if (!sairArmed) {
      sairArmed = true;
      mostrarConfirmacaoSaida();
      setTimeout(() => { sairArmed = false; }, 2500);
      history.pushState({page:'jogo'}, '');
    }
  }
});

console.log('UI carregado');
