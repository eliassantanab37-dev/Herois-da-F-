export function verificarAberturaPorPush() {
  const params = new URLSearchParams(window.location.search);
  const chatUid = params.get('chat');
  if (!chatUid) return;

  const novaUrl = window.location.pathname;
  history.replaceState({}, '', novaUrl);

  setTimeout(async () => {
    if (typeof window.abrirChat === 'function') {
      await window.abrirChat(chatUid);
    }
  }, 800);
}