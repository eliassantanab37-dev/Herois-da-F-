import { supabase } from './config.js';
import { atualizarBarraExpMenu, atualizarExpAposLeitura, verificarBadges, verificarLivroCompleto } from './badges.js';

const QUIZ_POINTS = 20;
let processandoResposta = false;

function gerarAvatarPadrao(nome = 'Herói') {
  const iniciais = nome.split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase();
  return `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128"><rect width="100%" height="100%" fill="#d4af37"/><text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" font-size="46" fill="#111" font-family="Arial">${iniciais}</text></svg>`)}`;
}

export function calcularNivel(pontos) {
  if (pontos < 100) return 'Servo Fiel';
  if (pontos < 500) return 'Levita Louvador';
  if (pontos < 1000) return 'Soldado de Cristo';
  if (pontos < 2000) return 'Semeador da Palavra';
  if (pontos < 3000) return 'Missionário(a)';
  return 'Herói da Fé';
}

async function atualizarPontosDoUsuario(uid, pontosGanhos, motivo) {
  const { data: userAtual, error } = await supabase.from('users').select('points').eq('uid', uid).single();
  if (error) throw error;
  const novosPontos = (userAtual?.points || 0) + pontosGanhos;

  await supabase.from('users').update({
    points: novosPontos,
    lastupdate: new Date().toISOString(),
    lastUpdate: new Date().toISOString(),
  }).eq('uid', uid);

  await supabase.from('logs_pontuacao').insert({
    uid,
    pontos: pontosGanhos,
    motivo,
    created_at: new Date().toISOString(),
  }).catch(() => {});

  const pontosEl = document.getElementById('user-points-display');
  if (pontosEl) pontosEl.textContent = `${novosPontos} pts`;
  return novosPontos;
}

function exibirMensagem(html, bg = 'rgba(8,8,8,.92)', remover = 2200) {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;display:flex;align-items:center;justify-content:center;z-index:100000;background:rgba(0,0,0,.5);backdrop-filter:blur(5px);';
  overlay.innerHTML = `<div style="max-width:420px;width:92%;padding:26px 24px;border-radius:24px;border:2px solid #d4af37;background:${bg};box-shadow:0 0 30px rgba(212,175,55,.25);text-align:center;font-family:Poppins,sans-serif;color:#fff;">${html}</div>`;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.remove(), remover);
}

window.exibirCapitulo = async function exibirCapitulo(chaveLivro, numeroCapitulo) {
  const container = document.getElementById('bible-text');
  if (!container) return;
  const modulo = await import('./bible.js');
  const livro = modulo.bible[chaveLivro];
  const capitulo = livro?.capitulos?.[numeroCapitulo];
  if (!livro || !capitulo) return;

  const texto = String(capitulo.texto || '').replace(/\n/g, '<br>');
  const subtitulo = capitulo.titulo ? `<div style="color:#d7b765;font-style:italic;margin-bottom:22px">${capitulo.titulo}</div>` : '';

  container.innerHTML = `
    <div style="max-width:980px;margin:0 auto;padding:18px 14px 42px;">
      <button type="button" onclick="window.abrirLivro('${chaveLivro}')" class="btn-mission" style="margin-bottom:18px">← Voltar aos Capítulos</button>
      <h1 style="font-family:Cinzel,serif;color:#d4af37;margin:0 0 8px;font-size:2.2rem">${livro.nome} — Capítulo ${numeroCapitulo}</h1>
      ${subtitulo}
      <div id="texto-leitura" class="texto-biblico" style="background:transparent;color:#fff;font-size:1.15rem;line-height:1.95;padding:8px 2px;text-shadow:0 0 10px rgba(0,0,0,.95),2px 2px 4px rgba(0,0,0,1),-2px -2px 4px rgba(0,0,0,1);">
        ${texto}
      </div>
      <div style="text-align:center;margin-top:34px;">
        <button type="button" onclick="window.iniciarMissao('${chaveLivro}', ${Number(numeroCapitulo)})" class="btn-mission gold-shine" style="padding:15px 28px;font-size:1rem">RESPONDER PERGUNTA</button>
      </div>
    </div>`;
};

function obterQuiz(capitulo, livroNome, numeroCapitulo) {
  const pergunta = capitulo.pergunta || capitulo.questao || `Você terminou a leitura com atenção de ${livroNome} capítulo ${numeroCapitulo}?`;
  const correta = capitulo.respostaCorreta ?? capitulo.resposta ?? capitulo.correta ?? 0;
  let alternativas = capitulo.alternativas || capitulo.opcoes;

  if (!Array.isArray(alternativas) || alternativas.length < 2) {
    alternativas = ['Sim, li com atenção', 'Não, quero ler novamente'];
  }

  let indiceCorreto = Number(correta);
  if (!Number.isFinite(indiceCorreto) || indiceCorreto < 0 || indiceCorreto >= alternativas.length) {
    indiceCorreto = 0;
  }

  return { pergunta, alternativas, indiceCorreto };
}

window.iniciarMissao = async function iniciarMissao(chaveLivro, capNum) {
  const modulo = await import('./bible.js');
  const livro = modulo.bible[chaveLivro];
  const capitulo = livro?.capitulos?.[capNum];
  const container = document.getElementById('bible-text');
  if (!livro || !capitulo || !container) return;

  const quiz = obterQuiz(capitulo, livro.nome, capNum);
  const botoes = quiz.alternativas.map((alt, idx) => `
    <button type="button" onclick="window.responderPergunta('${chaveLivro}', ${Number(capNum)}, ${idx === quiz.indiceCorreto})"
      style="width:100%;text-align:left;padding:14px 16px;border-radius:16px;border:1px solid rgba(212,175,55,.65);background:linear-gradient(135deg,rgba(27,24,12,.92),rgba(10,10,10,.96));color:#fff;cursor:pointer;font-size:1rem;">${alt}</button>`).join('');

  container.innerHTML = `
    <div style="max-width:820px;margin:0 auto;padding:18px 14px 42px;">
      <button type="button" onclick="window.exibirCapitulo('${chaveLivro}', ${Number(capNum)})" class="btn-mission" style="margin-bottom:18px">← Voltar ao Capítulo</button>
      <div style="border:1.5px solid #d4af37;border-radius:24px;background:linear-gradient(135deg,rgba(24,22,12,.94),rgba(8,8,8,.97));padding:24px;box-shadow:0 0 28px rgba(212,175,55,.18);">
        <div style="color:#d4af37;font-family:Cinzel,serif;font-size:1.6rem;margin-bottom:12px">Pergunta do Capítulo</div>
        <div style="color:#fff;font-size:1.15rem;line-height:1.7;margin-bottom:18px">${quiz.pergunta}</div>
        <div style="display:grid;gap:12px;">${botoes}</div>
      </div>
    </div>`;
};

window.responderPergunta = async function responderPergunta(livroChave, capNum, ehCorreta) {
  if (processandoResposta) return;
  processandoResposta = true;

  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      processandoResposta = false;
      return;
    }

    if (!ehCorreta) {
      exibirMensagem('<div style="font-size:1.65rem;color:#ff9f9f;font-family:Cinzel,serif">Resposta errada</div><div style="margin-top:10px;color:#fff">Esse capítulo não foi marcado como lido.</div>', 'rgba(24,8,8,.94)');
      setTimeout(() => {
        processandoResposta = false;
        window.exibirCapitulo(livroChave, capNum);
      }, 2200);
      return;
    }

    const { data: existente } = await supabase
      .from('progresso')
      .select('id, concluido')
      .eq('uid', user.id)
      .eq('livro', livroChave)
      .eq('capitulo', Number(capNum))
      .maybeSingle();

    const jaConcluido = existente?.concluido === true;

    if (!jaConcluido) {
      await supabase.from('progresso').upsert({
        uid: user.id,
        livro: livroChave,
        capitulo: Number(capNum),
        concluido: true,
        created_at: new Date().toISOString(),
      }, { onConflict: 'uid,livro,capitulo' });

      await atualizarPontosDoUsuario(user.id, QUIZ_POINTS, `Capítulo ${livroChave} ${capNum}`);
    }

    const { data: concluidos } = await supabase.from('progresso').select('capitulo').eq('uid', user.id).eq('concluido', true);
    const totalCaps = concluidos?.length || 0;
    await atualizarExpAposLeitura(user.id, totalCaps);
    atualizarBarraExpMenu(totalCaps);
    await verificarLivroCompleto(user.id, livroChave);
    await verificarBadges(user.id);

    if (window.confetti) {
      window.confetti({ particleCount: 130, spread: 68, origin: { y: 0.62 }, colors: ['#d4af37', '#fff', '#2ecc71'] });
    }

    exibirMensagem(`<div style="font-size:1.75rem;color:#fff;font-family:Cinzel,serif">✨ PARABÉNS ✨</div><div style="margin-top:10px;color:#d4af37;font-size:1.1rem">${jaConcluido ? 'Capítulo já concluído antes' : `+${QUIZ_POINTS} pontos`}</div><div style="margin-top:8px;color:#fff">Capítulo marcado como lido.</div>`);

    setTimeout(() => {
      processandoResposta = false;
      window.abrirLivro(livroChave);
    }, 2400);
  } catch (erro) {
    console.error('Erro ao responder pergunta:', erro);
    processandoResposta = false;
    exibirMensagem('<div style="color:#ffb1b1">Erro ao salvar progresso.</div>', 'rgba(24,8,8,.94)', 2000);
  }
};

window.voltarParaBiblia = function voltarParaBiblia() {
  if (window.carregarListaLivros) window.carregarListaLivros();
};

async function _renderizarRanking() {
  const container = document.getElementById('ranking-container');
  const readingView = document.getElementById('reading-view');
  if (!container) return;
  if (readingView) readingView.style.display = 'none';
  container.style.display = 'block';

  const { data: { user: eu } } = await supabase.auth.getUser();
  const { data: usuarios } = await supabase.from('users').select('uid,name,points,photourl,photoURL').order('points', { ascending: false }).limit(50);
  const rows = (usuarios || []).map((u, i) => {
    const foto = u.photoURL || u.photourl || gerarAvatarPadrao(u.name || 'Herói');
    return `<div onclick="window.verPerfilDetalhado && window.verPerfilDetalhado('${u.uid}')" style="display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:18px;border:1px solid rgba(212,175,55,.5);background:${eu?.id===u.uid?'rgba(212,175,55,.16)':'rgba(255,255,255,.04)'};cursor:pointer;">
      <div style="width:34px;text-align:center;color:#d4af37;font-weight:800">${i+1}</div>
      <img src="${foto}" style="width:48px;height:48px;border-radius:50%;object-fit:cover;border:2px solid #d4af37">
      <div style="flex:1"><div style="color:#fff;font-weight:700">${u.name || 'Herói'}</div><div style="color:#d4af37">${u.points || 0} pts</div></div>
      <div style="color:#bbb">${calcularNivel(u.points || 0)}</div>
    </div>`;
  }).join('');

  container.innerHTML = `<div style="max-width:860px;margin:0 auto;padding:20px 14px 40px"><button onclick="window.voltarParaBiblia()" class="btn-mission" style="margin-bottom:18px">← Voltar</button><h2 style="color:#d4af37;font-family:Cinzel">Ranking</h2><div style="display:grid;gap:12px;margin-top:18px">${rows}</div></div>`;
}

const btnRanking = document.getElementById('nav-ranking');
if (btnRanking && !btnRanking.dataset.boundRanking) {
  btnRanking.dataset.boundRanking = '1';
  btnRanking.addEventListener('click', _renderizarRanking);
}
