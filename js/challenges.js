window.mostrarDesafios = async function () {
  const bibleText = document.getElementById('bible-text');
  const readingView = document.getElementById('reading-view');
  if (!bibleText || !readingView) return;
  readingView.style.display = 'block';
  bibleText.innerHTML = `
    <div class="screen-card">
      <div class="screen-topbar">
        <button class="back-arrow" onclick="window.voltarHistorico()">←</button>
        <h2>🎯 Desafios</h2>
      </div>
      <div class="empty-state">O módulo de desafios foi deixado seguro para não quebrar o jogo enquanto o banco principal roda com amigos, ranking, chat, progresso e troféus.</div>
    </div>`;
};
