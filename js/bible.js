import { supabase } from './config.js';

import { genesis } from './livros/genesis.js';
import { exodo } from './livros/exodo.js';
import { levitico } from './livros/levitico.js';
import { numeros } from './livros/numeros.js';
import { deuteronomio } from './livros/deuteronomio.js';
import { josue } from './livros/josue.js';
import { juizes } from './livros/juizes.js';
import { rute } from './livros/rute.js';
import { primeiro_samuel } from './livros/primeiro_samuel.js';
import { segundo_samuel } from './livros/segundo_samuel.js';
import { primeiro_reis } from './livros/primeiro_reis.js';
import { segundo_reis } from './livros/segundo_reis.js';
import { primeiro_cronicas } from './livros/primeiro_cronicas.js';
import { segundo_cronicas } from './livros/segundo_cronicas.js';
import { esdras } from './livros/esdras.js';
import { neemias } from './livros/neemias.js';
import { ester } from './livros/ester.js';
import { jo } from './livros/jo.js';
import { salmos } from './livros/salmos.js';
import { proverbios } from './livros/proverbios.js';
import { eclesiastes } from './livros/eclesiastes.js';
import { cantares } from './livros/cantares.js';
import { isaias } from './livros/isaias.js';
import { jeremias } from './livros/jeremias.js';
import { lamentacoes } from './livros/lamentacoes.js';
import { ezequiel } from './livros/ezequiel.js';
import { daniel } from './livros/daniel.js';
import { oseias } from './livros/oseias.js';
import { joel } from './livros/joel.js';
import { amos } from './livros/amos.js';
import { obadias } from './livros/obadias.js';
import { jonas } from './livros/jonas.js';
import { miqueias } from './livros/miqueias.js';
import { naum } from './livros/naum.js';
import { habacuque } from './livros/habacuque.js';
import { sofonias } from './livros/sofonias.js';
import { ageu } from './livros/ageu.js';
import { zacarias } from './livros/zacarias.js';
import { malaquias } from './livros/malaquias.js';
import { mateus } from './livros/mateus.js';
import { marcos } from './livros/marcos.js';
import { lucas } from './livros/lucas.js';
import { joao } from './livros/joao.js';
import { atos } from './livros/atos.js';
import { romanos } from './livros/romanos.js';
import { primeiro_corintios } from './livros/primeiro_corintios.js';
import { segundo_corintios } from './livros/segundo_corintios.js';
import { galatas } from './livros/galatas.js';
import { efesios } from './livros/efesios.js';
import { filipenses } from './livros/filipenses.js';
import { colossenses } from './livros/colossenses.js';
import { primeiro_tessalonicenses } from './livros/primeiro_tessalonicenses.js';
import { segunda_tessalonicenses } from './livros/segunda_tessalonicenses.js';
import { primeira_timoteo } from './livros/primeira_timoteo.js';
import { segunda_timoteo } from './livros/segunda_timoteo.js';
import { tito } from './livros/tito.js';
import { filemon } from './livros/filemon.js';
import { hebreus } from './livros/hebreus.js';
import { tiago } from './livros/tiago.js';
import { primeira_pedro } from './livros/primeira_pedro.js';
import { segunda_pedro } from './livros/segunda_pedro.js';
import { primeira_joao } from './livros/primeira_joao.js';
import { segunda_joao } from './livros/segunda_joao.js';
import { terceira_joao } from './livros/terceira_joao.js';
import { judas } from './livros/judas.js';
import { apocalipse } from './livros/apocalipse.js';

export const bible = {
  genesis, exodo, levitico, numeros, deuteronomio, josue, juizes, rute, primeiro_samuel, segundo_samuel,
  primeiro_reis, segundo_reis, primeiro_cronicas, segundo_cronicas, esdras, neemias, ester, jo, salmos,
  proverbios, eclesiastes, cantares, isaias, jeremias, lamentacoes, ezequiel, daniel, oseias, joel, amos,
  obadias, jonas, miqueias, naum, habacuque, sofonias, ageu, zacarias, malaquias, mateus, marcos, lucas,
  joao, atos, romanos, primeiro_corintios, segundo_corintios, galatas, efesios, filipenses, colossenses,
  primeiro_tessalonicenses, segunda_tessalonicenses, primeira_timoteo, segunda_timoteo, tito, filemon,
  hebreus, tiago, primeira_pedro, segunda_pedro, primeira_joao, segunda_joao, terceira_joao, judas, apocalipse
};

export function obterTodosOsLivros() {
  return Object.entries(bible).map(([chave, livro]) => ({
    chave,
    nome: livro.nome,
    icone: livro.icone,
    background: livro.background,
    totalCapitulos: Object.keys(livro.capitulos).length
  }));
}

window.carregarListaLivros = function () {
  const livros = obterTodosOsLivros();
  const container = document.getElementById('bible-text');
  const readingView = document.getElementById('reading-view');
  if (!container || !readingView) return;
  readingView.style.display = 'block';

  container.innerHTML = `
    <div class="screen-card">
      <div class="screen-topbar">
        <button class="back-arrow" onclick="window.confirmarSaida()">←</button>
        <h2>📖 Bíblia</h2>
      </div>
      <div class="book-search-wrap">
        <input id="bible-search-input" class="search-input" placeholder="Pesquisar livro...">
      </div>
      <div id="bible-grid" class="books-grid"></div>
    </div>`;
  const grid = document.getElementById('bible-grid');
  livros.forEach(livro => {
    const card = document.createElement('button');
    card.className = 'book-card';
    card.dataset.nome = livro.nome.toLowerCase();
    card.innerHTML = `<div class="book-icon">${livro.icone}</div><div class="book-title">${livro.nome}</div><div class="book-sub">${livro.totalCapitulos} caps</div>`;
    card.onclick = () => window.abrirLivro(livro.chave);
    grid.appendChild(card);
  });

  const input = document.getElementById('bible-search-input');
  input.oninput = () => {
    const termo = input.value.trim().toLowerCase();
    [...grid.children].forEach(c => c.style.display = c.dataset.nome.includes(termo) ? '' : 'none');
  };
};

window.abrirLivro = async function (chaveLivro) {
  const livro = bible[chaveLivro];
  if (!livro) return;
  const { data: { user } } = await supabase.auth.getUser();
  const progresso = {};
  if (user) {
    const { data } = await supabase.from('progresso').select('capitulo,concluido').eq('uid', user.id).eq('livro', chaveLivro);
    (data || []).forEach(x => { progresso[String(x.capitulo)] = !!x.concluido; });
  }

  const container = document.getElementById('bible-text');
  container.innerHTML = `
    <div class="screen-card">
      <div class="screen-topbar">
        <button class="back-arrow" onclick="window.voltarHistorico()">←</button>
        <h2>${livro.nome}</h2>
      </div>
      <div class="chapter-grid" id="chapter-grid"></div>
    </div>`;
  const grid = document.getElementById('chapter-grid');
  Object.keys(livro.capitulos).forEach(num => {
    const b = document.createElement('button');
    b.className = `chapter-btn ${progresso[String(num)] ? 'done' : ''}`;
    b.innerHTML = `${num}${progresso[String(num)] ? '<span>✓</span>' : ''}`;
    b.onclick = () => window.exibirCapitulo(chaveLivro, String(num));
    grid.appendChild(b);
  });
};
