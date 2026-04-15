// js/bible.js — Corrigido para capítulos em vidro ouro e marcação visual
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
import { primeira_pedro } from './livros/primeira_pedro.js';
import { segunda_pedro } from './livros/segunda_pedro.js';
import { tiago } from './livros/tiago.js';
import { primeira_joao } from './livros/primeira_joao.js';
import { segunda_joao } from './livros/segunda_joao.js';
import { terceira_joao } from './livros/terceira_joao.js';
import { judas } from './livros/judas.js';
import { apocalipse } from './livros/apocalipse.js';

export const bible = {
  genesis, exodo, levitico, numeros, deuteronomio, josue, juizes, rute,
  primeiro_samuel, segundo_samuel, primeiro_reis, segundo_reis,
  primeiro_cronicas, segundo_cronicas, esdras, neemias, ester, jo,
  salmos, proverbios, eclesiastes, cantares, isaias, jeremias, lamentacoes,
  ezequiel, daniel, oseias, joel, amos, obadias, jonas, miqueias, naum,
  habacuque, sofonias, ageu, zacarias, malaquias, mateus, marcos, lucas,
  joao, atos, romanos, primeiro_corintios, segundo_corintios, galatas,
  efesios, filipenses, colossenses, primeiro_tessalonicenses,
  segunda_tessalonicenses, primeira_timoteo, segunda_timoteo, tito,
  filemon, hebreus, tiago, primeira_pedro, segunda_pedro,
  primeira_joao, segunda_joao, terceira_joao, judas, apocalipse,
};

export function obterTodosOsLivros() {
  return Object.entries(bible).map(([chave, livro]) => ({
    chave,
    nome: livro.nome,
    icone: livro.icone,
    background: livro.background,
    totalCapitulos: Object.keys(livro.capitulos).length,
  }));
}

async function carregarMapaProgresso(uid) {
  const mapa = {};
  if (!uid) return mapa;
  const { data } = await supabase
    .from('progresso')
    .select('livro, capitulo, concluido')
    .eq('uid', uid)
    .eq('concluido', true);

  for (const row of data || []) {
    if (!mapa[row.livro]) mapa[row.livro] = new Set();
    mapa[row.livro].add(String(row.capitulo));
  }
  return mapa;
}

function totalCapitulosLivro(chaveLivro) {
  return Object.keys(bible[chaveLivro]?.capitulos || {}).length;
}

window.carregarListaLivros = async function () {
  const livros = obterTodosOsLivros();
  const container = document.getElementById('bible-text');
  const readingView = document.getElementById('reading-view');
  const authBox = document.getElementById('auth-container');
  if (!container) return;

  if (authBox) authBox.style.display = 'none';
  if (readingView) readingView.style.display = 'block';

  const { data: { user } } = await supabase.auth.getUser();
  const progressoMapa = await carregarMapaProgresso(user?.id || null);

  container.innerHTML = `
    <div class="bible-home-wrap">
      <h2 class="titulo-sessao bible-home-title">Escolha sua Jornada</h2>
      <div class="bible-search-wrap">
        <div class="bible-search-box">
          <span class="bible-search-ico">🔍</span>
          <input id="bible-search-input" type="text" placeholder="Pesquisar livro..." autocomplete="off">
        </div>
      </div>
      <div id="bible-grid" class="bible-books-grid"></div>
      <p id="bible-sem-resultado" class="bible-empty-state" style="display:none;">Nenhum livro encontrado.</p>
    </div>`;

  const grid = document.getElementById('bible-grid');

  for (const livro of livros) {
    const lidos = progressoMapa[livro.chave]?.size || 0;
    const total = livro.totalCapitulos;
    const completo = lidos >= total && total > 0;
    const porcentagem = Math.min(100, Math.round((lidos / total) * 100)) || 0;

    const card = document.createElement('button');
    card.className = `bible-book-card${completo ? ' completed' : ''}`;
    card.dataset.nome = livro.nome.toLowerCase();
    card.innerHTML = `
      <div class="book-card-bg" style="background-image:linear-gradient(rgba(0,0,0,0.54),rgba(0,0,0,0.74)),url('${livro.background}')"></div>
      <div class="book-card-content">
        <div class="book-card-icon">${livro.icone}</div>
        <h3>${livro.nome}</h3>
        <div class="book-card-meta">${lidos}/${total} capítulos</div>
        <div class="book-progress-mini"><span style="width:${porcentagem}%;"></span></div>
        <div class="book-progress-text">${completo ? 'Livro concluído ✅' : `${porcentagem}% concluído`}</div>
      </div>`;
    card.onclick = () => window.abrirLivro(livro.chave);
    grid.appendChild(card);
  }

  const input = document.getElementById('bible-search-input');
  const semResultado = document.getElementById('bible-sem-resultado');
  input?.addEventListener('input', () => {
    const termo = (input.value || '').trim().toLowerCase();
    const cards = [...grid.querySelectorAll('.bible-book-card')];
    let visiveis = 0;
    for (const card of cards) {
      const ok = card.dataset.nome.includes(termo);
      card.style.display = ok ? '' : 'none';
      if (ok) visiveis++;
    }
    semResultado.style.display = visiveis ? 'none' : 'block';
  });
};

window.abrirLivro = async function (chaveLivro) {
  const livro = bible[chaveLivro];
  if (!livro) return;

  const { data: { user } } = await supabase.auth.getUser();
  let capitulosConcluidos = new Set();

  if (user) {
    const { data } = await supabase
      .from('progresso')
      .select('capitulo, concluido')
      .eq('uid', user.id)
      .eq('livro', chaveLivro)
      .eq('concluido', true);

    capitulosConcluidos = new Set((data || []).map(r => String(r.capitulo)));
  }

  const totalCaps = Object.keys(livro.capitulos).length;
  const lidos = capitulosConcluidos.size;
  const completo = lidos >= totalCaps && totalCaps > 0;
  const progressoPct = Math.min(100, Math.round((lidos / totalCaps) * 100)) || 0;

  const container = document.getElementById('bible-text');
  if (!container) return;

  container.innerHTML = `
    <div class="chapter-view-wrap">
      <button onclick="window.carregarListaLivros()" class="back-gold-btn">← Voltar aos livros</button>
      <div class="chapter-book-head">
        <h2>${livro.nome}</h2>
        <div class="chapter-book-sub">${completo ? 'Livro concluído ✅' : `${lidos} de ${totalCaps} capítulos lidos`}</div>
        <div class="chapter-progress-bar"><span style="width:${progressoPct}%;"></span></div>
      </div>
      <div class="chapter-grid" id="chapter-grid"></div>
    </div>`;

  const grid = document.getElementById('chapter-grid');

  for (const num of Object.keys(livro.capitulos)) {
    const estaLido = capitulosConcluidos.has(String(num));
    const btn = document.createElement('button');
    btn.className = `chapter-tile${estaLido ? ' done' : ''}`;
    btn.innerHTML = `
      <span class="chapter-number">${num}</span>
      <span class="chapter-done">${estaLido ? '✓ lido' : ''}</span>`;
    btn.onclick = () => window.exibirCapitulo(chaveLivro, num);
    grid.appendChild(btn);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

console.log('✅ Bíblia configurada com grid de capítulos corrigido');
