// js/bible.js — Migrado para Supabase
// ═══════════════════════════════════════════════════════════

import { supabase } from './config.js';

// ── IMPORTAÇÕES DOS LIVROS (mantidas intactas) ─────────────
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

// ── OBJETO UNIFICADO ───────────────────────────────────────
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

// ── FUNÇÕES DE BUSCA ───────────────────────────────────────
export function obterTodosOsLivros() {
    return Object.entries(bible).map(([chave, livro]) => ({
        chave,
        nome: livro.nome,
        icone: livro.icone,
        background: livro.background,
        totalCapitulos: Object.keys(livro.capitulos).length
    }));
}

// ── LISTAR LIVROS ──────────────────────────────────────────
window.carregarListaLivros = function () {
    const livros      = obterTodosOsLivros();
    const container   = document.getElementById('bible-text');
    const readingView = document.getElementById('reading-view');
    const authBox     = document.getElementById('auth-container');

    if (authBox)      authBox.style.display      = 'none';
    if (readingView)  readingView.style.display   = 'block';

    container.innerHTML = '<h2 class="titulo-sessao" style="text-align:center; color:#d4af37; font-family:Cinzel; margin-bottom:20px;">Escolha sua Jornada</h2>';

    const searchWrapper = document.createElement('div');
    searchWrapper.style.cssText = 'display:flex; justify-content:center; margin-bottom:25px; padding:0 20px;';
    searchWrapper.innerHTML = `
        <div style="position:relative; width:100%; max-width:400px;">
            <span style="position:absolute; left:14px; top:50%; transform:translateY(-50%); font-size:1rem; pointer-events:none;">🔍</span>
            <input id="bible-search-input" type="text" placeholder="Pesquisar livro..." autocomplete="off"
                style="width:100%; box-sizing:border-box; padding:10px 16px 10px 40px; background:#1a1a1a; border:1.5px solid #d4af37; border-radius:25px; color:#f1e7d0; font-size:0.95rem; outline:none; font-family:Poppins,sans-serif; transition:border-color 0.2s,box-shadow 0.2s;"
                onfocus="this.style.boxShadow='0 0 0 3px rgba(212,175,55,0.25)'"
                onblur="this.style.boxShadow='none'">
        </div>`;
    container.appendChild(searchWrapper);

    const grid = document.createElement('div');
    grid.id = 'bible-grid';
    grid.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fill,minmax(150px,1fr)); gap:20px; padding:20px; max-width:1000px; margin:0 auto;';

    const semResultado = document.createElement('p');
    semResultado.id = 'bible-sem-resultado';
    semResultado.style.cssText = 'display:none; text-align:center; color:#888; font-family:Poppins,sans-serif; font-size:0.95rem; padding:40px 20px; width:100%;';
    semResultado.textContent = 'Nenhum livro encontrado.';

    function criarCard(livro) {
        const card = document.createElement('div');
        card.dataset.nome = livro.nome.toLowerCase();
        card.style.cssText = `aspect-ratio:1/1; background-image:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.8)),url('${livro.background}'); background-size:cover; background-position:center; border:2px solid #d4af37; border-radius:12px; display:flex; flex-direction:column; align-items:center; justify-content:center; cursor:pointer; transition:transform 0.3s; text-align:center; padding:10px;`;
        card.onmouseover = () => card.style.transform = 'scale(1.05)';
        card.onmouseout  = () => card.style.transform = 'scale(1)';
        card.innerHTML   = `<div style="font-size:2.5rem; margin-bottom:10px;">${livro.icone}</div><h3 style="color:#fff; margin:0; font-size:1.1rem; font-family:Cinzel;">${livro.nome}</h3><span style="color:#d4af37; font-size:0.8rem;">${livro.totalCapitulos} Caps</span>`;
        card.onclick = () => window.abrirLivro(livro.chave);
        return card;
    }

    livros.forEach(livro => grid.appendChild(criarCard(livro)));
    container.appendChild(grid);
    container.appendChild(semResultado);

    const input = document.getElementById('bible-search-input');
    input.addEventListener('input', () => {
        const termo  = input.value.trim().toLowerCase();
        const cards  = grid.querySelectorAll('div[data-nome]');
        let visiveis = 0;
        cards.forEach(card => {
            const aparece = card.dataset.nome.includes(termo);
            card.style.display = aparece ? '' : 'none';
            if (aparece) visiveis++;
        });
        semResultado.style.display = visiveis === 0 ? 'block' : 'none';
    });
};

// ── ABRIR LIVRO (com progresso do Supabase) ────────────────
window.abrirLivro = async function (chaveLivro) {
    const livro = bible[chaveLivro];
    if (!livro) return;

    const { data: { user } } = await supabase.auth.getUser();
    let capitulosConcluidos = {};

    if (user) {
        try {
            const { data } = await supabase
                .from('progresso')
                .select('capitulo, concluido')
                .eq('uid', user.id)
                .eq('livro', chaveLivro);

            (data || []).forEach(r => {
                capitulosConcluidos[r.capitulo] = { concluido: r.concluido };
            });
        } catch (e) { console.error('Erro ao carregar progresso:', e); }
    }

    const container = document.getElementById('bible-text');
    container.innerHTML = `
        <div style="padding:20px; text-align:center;">
            <button onclick="window.carregarListaLivros()" class="btn-mission" style="margin-bottom:20px;">⬅ Voltar aos Livros</button>
            <h2 style="color:#d4af37; font-family:'Cinzel';">${livro.nome}</h2>
        </div>`;

    const grid = document.createElement('div');
    grid.style.cssText = 'display:grid; grid-template-columns:repeat(auto-fill,minmax(75px,1fr)); gap:12px; padding:20px;';

    Object.keys(livro.capitulos).forEach(num => {
        const estaLido = capitulosConcluidos[num]?.concluido === true;
        const btn = document.createElement('button');
        if (estaLido) {
            btn.style.cssText = 'padding:15px; border:2px solid #2ecc71; background:rgba(46,204,113,0.2); color:#2ecc71; cursor:pointer; border-radius:8px; font-weight:bold; backdrop-filter:blur(5px); box-shadow:0 0 10px rgba(46,204,113,0.3);';
            btn.innerHTML = `${num}<br><span style="font-size:10px;">✅</span>`;
        } else {
            btn.style.cssText = 'padding:15px; border:1px solid #d4af37; background:#1a1a1a; color:#d4af37; cursor:pointer; border-radius:8px;';
            btn.innerText = num;
        }
        btn.onclick = () => window.exibirCapitulo(chaveLivro, num);
        grid.appendChild(btn);
    });

    container.appendChild(grid);
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

console.log('✅ Bíblia configurada com Supabase!');
