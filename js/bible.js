import { supabase } from './config.js';
import { TOTAL_CAPS_LIVRO } from './badges.js';

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

function safe(text) {
  return String(text || '').replace(/[&<>"']/g, (m) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m]));
}

function cardGlass(base = '#d4af37') {
  return `background:linear-gradient(135deg,rgba(42,32,7,.86),rgba(19,19,16,.88));border:1.5px solid ${base};box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 10px 24px rgba(0,0,0,.28);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);`;
}

async function getProgressMap(uid) {
  if (!uid) return {};
  const { data } = await supabase.from('progresso').select('livro,capitulo,concluido').eq('uid', uid).eq('concluido', true);
  const map = {};
  for (const row of data || []) {
    map[row.livro] ||= new Set();
    map[row.livro].add(Number(row.capitulo));
  }
  return map;
}

function getBooks() {
  return Object.entries(bible).map(([chave, livro]) => ({
    chave,
    nome: livro.nome,
    icone: livro.icone || '📖',
    background: livro.background || '',
    totalCapitulos: Object.keys(livro.capitulos || {}).length,
  }));
}

window.carregarListaLivros = async function carregarListaLivros() {
  const container = document.getElementById('bible-text');
  const readingView = document.getElementById('reading-view');
  const ranking = document.getElementById('ranking-container');
  if (!container) return;
  if (readingView) readingView.style.display = 'block';
  if (ranking) ranking.style.display = 'none';

  const { data: { user } } = await supabase.auth.getUser();
  const progressMap = await getProgressMap(user?.id);
  const books = getBooks();

  const cards = books.map((livro) => {
    const lidos = progressMap[livro.chave]?.size || 0;
    const total = livro.totalCapitulos;
    const pct = total ? Math.round((lidos / total) * 100) : 0;
    const completo = lidos >= total && total > 0;
    return `
      <button type="button" onclick="window.abrirLivro('${livro.chave}')" data-book-card data-book-name="${safe(livro.nome.toLowerCase())}"
        style="${cardGlass(completo ? '#2ecc71' : '#d4af37')};border-radius:20px;padding:18px 14px;text-align:center;cursor:pointer;transition:transform .22s ease, box-shadow .22s ease;border-color:${completo ? '#2ecc71' : '#d4af37'};min-height:180px;color:#fff;">
        <div style="font-size:2rem;margin-bottom:10px">${livro.icone}</div>
        <div style="font-family:Cinzel,serif;font-size:1.25rem;font-weight:700;line-height:1.2">${safe(livro.nome)}</div>
        <div style="margin-top:14px;color:#f1dfaa;font-size:.98rem">${lidos}/${total} capítulos</div>
        <div style="margin-top:2px;color:${completo ? '#99f2b5' : '#fff'};font-size:.95rem;font-weight:700">${pct}% concluído ${completo ? '✅' : ''}</div>
      </button>`;
  }).join('');

  container.innerHTML = `
    <div style="max-width:1360px;margin:0 auto;padding:18px 14px 40px;">
      <h2 style="font-family:Cinzel,serif;color:#fff;margin:0 0 18px;font-size:2.1rem;">Escolha sua Jornada</h2>
      <div style="max-width:360px;position:relative;margin-bottom:20px;">
        <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:1rem;">🔎</span>
        <input id="bible-search-input" type="text" placeholder="Pesquisar livro..." style="width:100%;padding:12px 16px 12px 40px;border-radius:24px;border:1px solid rgba(212,175,55,.7);background:rgba(255,255,255,.08);color:#fff;outline:none;">
      </div>
      <div id="bible-books-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(185px,1fr));gap:14px;">${cards}</div>
      <div id="bible-no-results" style="display:none;color:#bbb;text-align:center;padding:30px 0;">Nenhum livro encontrado.</div>
    </div>`;

  const input = document.getElementById('bible-search-input');
  if (input) {
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      let visible = 0;
      container.querySelectorAll('[data-book-card]').forEach((el) => {
        const show = el.getAttribute('data-book-name').includes(q);
        el.style.display = show ? '' : 'none';
        if (show) visible += 1;
      });
      const no = document.getElementById('bible-no-results');
      if (no) no.style.display = visible ? 'none' : 'block';
    });
  }
};

window.abrirLivro = async function abrirLivro(chaveLivro) {
  const livro = bible[chaveLivro];
  const container = document.getElementById('bible-text');
  if (!livro || !container) return;

  const { data: { user } } = await supabase.auth.getUser();
  const progressMap = await getProgressMap(user?.id);
  const lidosSet = progressMap[chaveLivro] || new Set();
  const totalCaps = Object.keys(livro.capitulos || {}).length;
  const totalLidos = lidosSet.size;
  const pct = totalCaps ? Math.round((totalLidos / totalCaps) * 100) : 0;

  const chapters = Object.keys(livro.capitulos).map((num) => {
    const n = Number(num);
    const lido = lidosSet.has(n);
    return `<button type="button" onclick="window.exibirCapitulo('${chaveLivro}', ${n})"
      style="${cardGlass(lido ? '#2ecc71' : '#d4af37')};border-radius:16px;padding:16px 8px;cursor:pointer;color:#fff;min-height:86px;border-color:${lido ? '#2ecc71' : '#d4af37'};transition:transform .2s ease, box-shadow .2s ease;">
        <div style="font-size:1.3rem;font-weight:800;">${n}</div>
        <div style="margin-top:8px;font-size:.78rem;color:${lido ? '#bff8cf' : '#e9d38c'};font-weight:700;">${lido ? '✓ lido' : 'não lido'}</div>
      </button>`;
  }).join('');

  container.innerHTML = `
    <div style="max-width:1380px;margin:0 auto;padding:18px 14px 40px;">
      <button type="button" onclick="window.carregarListaLivros()" class="btn-mission" style="margin-bottom:20px">← Voltar aos Livros</button>
      <div style="text-align:center;margin-bottom:24px;">
        <h2 style="font-family:Cinzel,serif;color:#d4af37;font-size:2.4rem;margin:0;">${safe(livro.nome)}</h2>
        <div style="margin-top:12px;color:#fff;font-size:1.2rem;font-weight:700;">${totalLidos} de ${totalCaps} capítulos lidos (${pct}%)</div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(90px,1fr));gap:12px;">${chapters}</div>
    </div>`;
};

const navBiblia = document.getElementById('nav-biblia');
if (navBiblia && !navBiblia.dataset.boundBible) {
  navBiblia.dataset.boundBible = '1';
  navBiblia.addEventListener('click', () => window.carregarListaLivros());
}
