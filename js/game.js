import { supabase } from './config.js';
import { atualizarBarraExpMenu, atualizarExpAposLeitura, verificarBadges } from './badges.js';
import { escapeHtml, gerarAvatarPadrao, getCurrentAuthUser, nowIso, payloadUsuarioCompat } from './app-core.js';
import { bible } from './bible.js';

let rankingChannel = null;
let processing = false;

async function atualizarPontos(uid, pontosGanhos) {
  const { data } = await supabase.from('users').select('points').eq('uid', uid).maybeSingle();
  const novos = Number(data?.points || 0) + Number(pontosGanhos || 0);
  await supabase.from('users').update(payloadUsuarioCompat({ points: novos, lastUpdate: nowIso() })).eq('uid', uid);
}

async function totalCapitulos(uid) {
  const { data } = await supabase.from('progresso').select('id').eq('uid', uid).eq('concluido', true);
  return (data || []).length;
}

async function renderRanking() {
  const box = document.getElementById('ranking-list');
  if (!box) return;
  const me = await getCurrentAuthUser();
  const { data } = await supabase.from('users').select('*').order('points', { ascending: false }).limit(50);
  box.innerHTML = (data || []).map((u, i) => {
    const foto = u.photoURL || u.photourl || gerarAvatarPadrao(u.name);
    return `<button class="rank-item" onclick="window.verPerfilDetalhado('${u.uid}')">
      <div class="rank-pos">${i + 1}</div>
      <img src="${foto}" class="rank-avatar" alt="">
      <div class="rank-meta">
        <div class="rank-name">${escapeHtml(u.name || 'Herói')} ${me?.id === u.uid ? '<span>(você)</span>' : ''}</div>
        <div class="rank-points">${u.points || 0} pts</div>
      </div>
    </button>`;
  }).join('');
}

window.mostrarRanking = async function () {
  const bibleText = document.getElementById('bible-text');
  const readingView = document.getElementById('reading-view');
  readingView.style.display = 'block';
  bibleText.innerHTML = `
    <div class="screen-card">
      <div class="screen-topbar">
        <button class="back-arrow" onclick="window.voltarHistorico()">←</button>
        <h2>🏆 Ranking</h2>
      </div>
      <div id="ranking-list"></div>
    </div>`;
  if (rankingChannel) supabase.removeChannel(rankingChannel);
  await renderRanking();
  rankingChannel = supabase.channel('ranking-live')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'users' }, renderRanking)
    .subscribe();
};

window.exibirCapitulo = function (chaveLivro, numeroCapitulo) {
  const livro = bible[chaveLivro];
  const cap = livro?.capitulos?.[numeroCapitulo];
  if (!livro || !cap) return;
  const container = document.getElementById('bible-text');
  container.innerHTML = `
    <div class="screen-card reading-card">
      <div class="screen-topbar">
        <button class="back-arrow" onclick="window.voltarHistorico()">←</button>
        <h2>${livro.nome} ${numeroCapitulo}</h2>
      </div>
      <div class="chapter-title">${escapeHtml(cap.titulo || '')}</div>
      <div id="texto-leitura" class="chapter-text">${String(cap.texto || '').replaceAll('\n', '<br>')}</div>
      <div class="chapter-action-wrap">
        <button class="glass-btn gold" onclick="window.iniciarMissao('${chaveLivro}','${numeroCapitulo}')">Responder pergunta</button>
      </div>
    </div>`;
};

window.iniciarMissao = function (chaveLivro, numeroCapitulo) {
  const livro = bible[chaveLivro];
  const cap = livro?.capitulos?.[numeroCapitulo];
  const p = cap?.pergunta;
  if (!p) return;
  const container = document.getElementById('bible-text');
  container.innerHTML = `
    <div class="screen-card">
      <div class="screen-topbar">
        <button class="back-arrow" onclick="window.voltarHistorico()">←</button>
        <h2>Desafio</h2>
      </div>
      <div class="quiz-question">${escapeHtml(p.texto)}</div>
      <div class="quiz-options">
        ${p.opcoes.map(opt => `<button class="quiz-option" onclick="window.verificarResposta('${chaveLivro}','${numeroCapitulo}',${opt.correta ? 'true' : 'false'})"><strong>${opt.numero}.</strong> ${escapeHtml(opt.texto)}</button>`).join('')}
      </div>
    </div>`;
};

window.verificarResposta = async function (livroChave, capNum, correta) {
  if (processing) return;
  processing = true;
  const user = await getCurrentAuthUser();
  if (!user) return;

  if (correta) {
    await supabase.from('progresso').upsert({
      uid: user.id,
      livro: livroChave,
      capitulo: Number(capNum),
      concluido: true,
      created_at: nowIso()
    }, { onConflict: 'uid,livro,capitulo' }).catch(async () => {
      const { data } = await supabase.from('progresso').select('id').eq('uid', user.id).eq('livro', livroChave).eq('capitulo', Number(capNum)).maybeSingle();
      if (data?.id) await supabase.from('progresso').update({ concluido: true }).eq('id', data.id);
      else await supabase.from('progresso').insert({ uid: user.id, livro: livroChave, capitulo: Number(capNum), concluido: true });
    });

    await atualizarPontos(user.id, 20);
    const total = await totalCapitulos(user.id);
    await atualizarExpAposLeitura(user.id, total);
    await verificarBadges(user.id);
    atualizarBarraExpMenu(total);

    const toast = document.createElement('div');
    toast.className = 'glass-toast';
    toast.textContent = 'Capítulo concluído +20 pts';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2200);
    window.abrirLivro(livroChave);
  } else {
    const toast = document.createElement('div');
    toast.className = 'glass-toast error';
    toast.textContent = 'Resposta errada. O capítulo não foi marcado.';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2200);
    window.exibirCapitulo(livroChave, capNum);
  }
  processing = false;
};

document.getElementById('nav-ranking')?.addEventListener('click', () => window.mostrarRanking());
