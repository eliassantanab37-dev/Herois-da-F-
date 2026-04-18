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
  // Pentateuco
  genesis, exodo, levitico, numeros, deuteronomio,
  // Históricos
  josue, juizes, rute, primeiro_samuel, segundo_samuel,
  primeiro_reis, segundo_reis, primeiro_cronicas, segundo_cronicas, esdras,
  neemias, ester, 
  // Poéticos
  jo, salmos, proverbios, eclesiastes, cantares,
  // Profetas Maiores
  isaias, jeremias, lamentacoes, ezequiel, daniel,
  // Profetas Menores
  oseias, joel, amos, obadias, jonas,
  miqueias, naum, habacuque, sofonias, ageu,
  zacarias, malaquias,
  // Evangelhos e Atos
  mateus, marcos, lucas, joao, atos,
  // Cartas de Paulo
  romanos, primeiro_corintios, segundo_corintios, galatas, efesios,
  filipenses, colossenses, primeiro_tessalonicenses, segunda_tessalonicenses, primeira_timoteo,
  segunda_timoteo, tito, filemon,
  // Outras Cartas e Apocalipse
  hebreus, tiago, primeira_pedro, segunda_pedro, primeira_joao,
  segunda_joao, terceira_joao, judas, apocalipse,
};

function safe(text) {
  return String(text || '').replace(/[&<>"']/g, (m) => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m]));
}

// ── ESTILOS 3D VIDRO OURO ─────────────────────────────────────────────────────
(function injectGlassStyles() {
  if (document.getElementById('bible-glass-styles')) return;
  const s = document.createElement('style');
  s.id = 'bible-glass-styles';
  s.textContent = `
    /* ── Botão de livro: vidro ouro 3D ── */
    .btn-livro-glass {
      position: relative;
      border-radius: 22px !important;
      border: none !important;
      outline: none;
      cursor: pointer;
      overflow: hidden;
      transform: translateY(0) scale(1);
      transition: transform 0.18s cubic-bezier(.34,1.56,.64,1),
                  box-shadow 0.18s ease;

      /* Fundo vidro escuro */
      background: linear-gradient(
        145deg,
        rgba(255,230,120,0.13) 0%,
        rgba(212,175,55,0.07) 40%,
        rgba(10,8,3,0.72) 100%
      ) !important;

      /* Borda ouro suave */
      box-shadow:
        0 2px 0 1px rgba(255,220,80,0.55),          /* borda topo brilhante */
        0 6px 0 0   rgba(80,55,5,0.9),               /* borda fundo escura (profundidade) */
        0 8px 28px  rgba(0,0,0,0.55),                /* sombra externa */
        inset 0 1px 0 rgba(255,245,180,0.35),        /* reflexo topo interno */
        inset 0 -2px 6px rgba(0,0,0,0.5);            /* sombra fundo interno */

      backdrop-filter: blur(12px) !important;
      -webkit-backdrop-filter: blur(12px) !important;

      /* texto sempre branco */
      color: #fff !important;
      text-align: center;
    }

    /* Reflexo de vidro: camada superior brilhante */
    .btn-livro-glass::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 48%;
      border-radius: 22px 22px 50% 50% / 22px 22px 30% 30%;
      background: linear-gradient(
        180deg,
        rgba(255,255,220,0.22) 0%,
        rgba(255,255,255,0.05) 100%
      );
      pointer-events: none;
      z-index: 2;
    }

    /* Reflexo secundário ouro nas bordas */
    .btn-livro-glass::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 22px;
      border: 1.5px solid transparent;
      background: linear-gradient(
        135deg,
        rgba(255,230,100,0.6) 0%,
        rgba(212,175,55,0.15) 35%,
        rgba(0,0,0,0) 65%,
        rgba(212,175,55,0.25) 100%
      ) border-box;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box,
                    linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
      pointer-events: none;
      z-index: 3;
    }

    .btn-livro-glass:hover {
      transform: translateY(-3px) scale(1.025);
      box-shadow:
        0 2px 0 1px rgba(255,230,100,0.75),
        0 9px 0 0   rgba(80,55,5,0.9),
        0 14px 36px rgba(0,0,0,0.6),
        0 0 22px    rgba(212,175,55,0.3),
        inset 0 1px 0 rgba(255,245,180,0.45),
        inset 0 -2px 6px rgba(0,0,0,0.5);
    }

    .btn-livro-glass:active {
      transform: translateY(3px) scale(0.98);
      box-shadow:
        0 1px 0 1px rgba(255,220,80,0.4),
        0 2px 0 0   rgba(80,55,5,0.9),
        0 4px 12px  rgba(0,0,0,0.55),
        inset 0 2px 8px rgba(0,0,0,0.6);
    }

    /* Variante LIDO: vidro verde esmeralda */
    .btn-livro-glass.lido {
      background: linear-gradient(
        145deg,
        rgba(80,220,140,0.18) 0%,
        rgba(46,204,113,0.09) 40%,
        rgba(5,20,10,0.75) 100%
      ) !important;
      box-shadow:
        0 2px 0 1px rgba(100,255,160,0.55),
        0 6px 0 0   rgba(5,60,25,0.9),
        0 8px 28px  rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(150,255,200,0.3),
        inset 0 -2px 6px rgba(0,0,0,0.5);
    }
    .btn-livro-glass.lido::after {
      background: linear-gradient(
        135deg,
        rgba(100,255,160,0.6) 0%,
        rgba(46,204,113,0.15) 35%,
        rgba(0,0,0,0) 65%,
        rgba(46,204,113,0.25) 100%
      ) border-box;
    }
    .btn-livro-glass.lido:hover {
      box-shadow:
        0 2px 0 1px rgba(100,255,160,0.75),
        0 9px 0 0   rgba(5,60,25,0.9),
        0 14px 36px rgba(0,0,0,0.55),
        0 0 22px    rgba(46,204,113,0.35),
        inset 0 1px 0 rgba(150,255,200,0.4),
        inset 0 -2px 6px rgba(0,0,0,0.5);
    }

    /* Textos internos sempre brancos */
    .btn-livro-glass * { color: #fff !important; }
    .btn-livro-glass .cap-nome  { color: #fff !important; font-weight: 700; }
    .btn-livro-glass .cap-status-lido   { color: #9effd1 !important; font-weight: 700; }
    .btn-livro-glass .cap-status-nlido  { color: #fff !important; }
    .btn-livro-glass .livro-progress    { color: #ffe994 !important; }
    .btn-livro-glass .livro-pct-lido    { color: #fff !important; font-weight: 700; }
    .btn-livro-glass .livro-pct-ok      { color: #9effd1 !important; font-weight: 700; }

    /* Spinner de carregamento (evita tela preta) */
    #bible-loading-overlay {
      position: fixed; inset: 0; z-index: 9999;
      display: flex; align-items: center; justify-content: center;
      background: rgba(0,0,0,0.7);
      backdrop-filter: blur(6px);
    }
    #bible-loading-overlay .spinner {
      width: 52px; height: 52px;
      border: 4px solid rgba(212,175,55,0.25);
      border-top-color: #d4af37;
      border-radius: 50%;
      animation: spin 0.75s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  `;
  document.head.appendChild(s);
})();

// ── LOADING OVERLAY (evita tela preta durante carregamento) ──────────────────
function mostrarLoading() {
  removerLoading();
  const el = document.createElement('div');
  el.id = 'bible-loading-overlay';
  el.innerHTML = '<div class="spinner"></div>';
  document.body.appendChild(el);
}
function removerLoading() {
  document.getElementById('bible-loading-overlay')?.remove();
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
  if (!container) return;
  if (readingView) readingView.style.display = 'block';
  window._paginaAtualJogo = 'biblia-home';
  document.getElementById('perfil-detalhado')?.remove();
  document.getElementById('janela-chat')?.remove();
  window.fecharSidebar?.();
  document.body.classList.remove('menu-open');

  mostrarLoading();

  try {
    const { data: { user } } = await supabase.auth.getUser();
    const progressMap = await getProgressMap(user?.id);
    const books = getBooks();

    const cards = books.map((livro) => {
      const lidos = progressMap[livro.chave]?.size || 0;
      const total = livro.totalCapitulos;
      const pct = total ? Math.round((lidos / total) * 100) : 0;
      const completo = lidos >= total && total > 0;
      return `
        <button
          type="button"
          onclick="window.abrirLivro('${livro.chave}')"
          data-book-card
          data-book-name="${safe(livro.nome.toLowerCase())}"
          class="btn-livro-glass${completo ? ' lido' : ''}"
          style="padding:18px 14px;min-height:180px;">
          <div style="font-size:2rem;margin-bottom:10px;position:relative;z-index:4;">${livro.icone}</div>
          <div style="font-family:Cinzel,serif;font-size:1.15rem;font-weight:700;line-height:1.2;position:relative;z-index:4;" class="cap-nome">${safe(livro.nome)}</div>
          <div style="margin-top:14px;font-size:.92rem;position:relative;z-index:4;" class="livro-progress">${lidos}/${total} capítulos</div>
          <div style="margin-top:2px;font-size:.9rem;position:relative;z-index:4;" class="${completo ? 'livro-pct-ok' : 'livro-pct-lido'}">${pct}% concluído ${completo ? '✅' : ''}</div>
        </button>`;
    }).join('');

    container.innerHTML = `
      <div style="max-width:1360px;margin:0 auto;padding:18px 14px 40px;">
        <h2 style="font-family:Cinzel,serif;color:#fff;margin:0 0 18px;font-size:2.1rem;">Escolha sua Jornada</h2>
        <div style="max-width:360px;position:relative;margin-bottom:20px;">
          <span style="position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:1rem;">🔎</span>
          <input id="bible-search-input" type="text" placeholder="Pesquisar livro..."
            style="width:100%;padding:12px 16px 12px 40px;border-radius:24px;border:1px solid rgba(212,175,55,.7);background:rgba(255,255,255,.08);color:#fff;outline:none;">
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
  } catch (e) {
    console.error('[carregarListaLivros]', e);
    container.innerHTML = `<div style="color:#fff;text-align:center;padding:40px;">
      <p style="font-size:1.2rem;">⚠️ Erro ao carregar. Tente recarregar a página.</p>
      <button onclick="window.carregarListaLivros()" class="btn-mission" style="margin-top:16px;">Tentar novamente</button>
    </div>`;
  } finally {
    removerLoading();
  }
};

window.abrirLivro = async function abrirLivro(chaveLivro) {
  const livro = bible[chaveLivro];
  const container = document.getElementById('bible-text');
  if (!livro || !container) return;

  window._paginaAtualJogo = 'livro';
  document.getElementById('perfil-detalhado')?.remove();
  document.getElementById('janela-chat')?.remove();
  window.fecharSidebar?.();
  document.body.classList.remove('menu-open');

  mostrarLoading();

  try {
    const { data: { user } } = await supabase.auth.getUser();
    const progressMap = await getProgressMap(user?.id);
    const lidosSet = progressMap[chaveLivro] || new Set();
    const totalCaps = Object.keys(livro.capitulos || {}).length;
    const totalLidos = lidosSet.size;
    const pct = totalCaps ? Math.round((totalLidos / totalCaps) * 100) : 0;

    const chapters = Object.keys(livro.capitulos).map((num) => {
      const n = Number(num);
      const lido = lidosSet.has(n);
      return `
        <button
          type="button"
          onclick="window.exibirCapitulo('${chaveLivro}', ${n})"
          class="btn-livro-glass${lido ? ' lido' : ''}"
          style="padding:16px 8px;min-height:86px;">
          <div style="font-size:1.3rem;font-weight:800;position:relative;z-index:4;" class="cap-nome">${n}</div>
          <div style="margin-top:8px;font-size:.78rem;font-weight:700;position:relative;z-index:4;"
               class="${lido ? 'cap-status-lido' : 'cap-status-nlido'}">${lido ? '✓ lido' : 'não lido'}</div>
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
  } catch (e) {
    console.error('[abrirLivro]', e);
    container.innerHTML = `<div style="color:#fff;text-align:center;padding:40px;">
      <p>⚠️ Erro ao carregar o livro.</p>
      <button onclick="window.carregarListaLivros()" class="btn-mission" style="margin-top:16px;">Voltar</button>
    </div>`;
  } finally {
    removerLoading();
  }
};