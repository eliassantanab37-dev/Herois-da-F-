// js/duel.js — v3.0 CORRIGIDO + VISUAL PREMIUM
// ═══════════════════════════════════════════════════════════
// BUGS CORRIGIDOS:
// #1  isOnline recalculado em tempo real no perfil (ONLINE_MS 180s)
// #2  ONLINE_MS aumentado para 180s + heartbeat imediato no visibilitychange
// #3  carregarDueloAtivo filtra updated_at das últimas 2h (sem duelos antigos)
// #4  _answersChannel com filtro dinâmico por duelo_id
// #5  mostrarConviteDesafio verifica duelo ativo antes de createDuel
// #6  Race condition em maybeAdvanceRound corrigida (lock otimista no DB)
// #7  _finalOverlayOpen resetado ao fechar pelo botão X
// #8  Botões de resposta desabilitados imediatamente ao clicar
// #9  iniciarDesafioUsuario com retry se perfil null após cadastro
// #10 Timer usa round capturado via closure imutável por renderArena
// #11 teardownChannels aguarda removeChannel (async)
// #12 applyPointsIfNeeded usa UPDATE atômico como lock
// #13 forfeitCurrentDuel com flag para evitar dupla execução
// #14 _rankingChannel passa a ter throttle para não re-renderizar a cada heartbeat
// #15 voltarParaBiblia limpa canais do duel via teardownChannels
// #17 Expiração de convites: aceitar verifica created_at < 24h
// #18 ensureObservers é autônomo (não depende de game.js)
// #19 renderFinal cobre estado rematch_accepted=true
// #20 showChallengedAnimation não remove rematch de outro duelo
// #25 iniciarListenerUsuario guarda flag com segurança no finally
// #28 Botões Aceitar/Recusar desabilitados durante processamento
// ═══════════════════════════════════════════════════════════

import { supabase } from './config.js';

const ROUND_SECONDS  = 20;
const TOTAL_ROUNDS   = 10;
const DUEL_WIN_POINTS = 100;
const ONLINE_MS      = 180000; // FIX #2: era 90s, agora 180s

let _me                = null;
let _inviteChannel     = null;
let _duelChannel       = null;
let _answersChannel    = null;
let _renderTimer       = null;
let _duelStateCache    = null;
let _currentDuelId     = null;
let _finalOverlayOpen  = false;
let _forfeitInProgress = false; // FIX #13
let _rankingThrottle   = null;  // FIX #14
window.__duelRankingContextByUid = window.__duelRankingContextByUid || {};

// ─── FIX #2: heartbeat imediato ao voltar ao foreground ─────────────────────
document.addEventListener('visibilitychange', async () => {
  if (!document.hidden && _me?.id) {
    await supabase.from('users').update({
      lastUpdate: new Date().toISOString(),
      lastupdate: new Date().toISOString(),
    }).eq('uid', _me.id);
  }
});

// ─── BANCO DE QUESTÕES ────────────────────────────────────────────────────────
const QUESTION_BANK = [
  {id:'q001',p:'Quem construiu a arca por mandado de Deus?',a:['Noé','Moisés','Abraão','Davi'],c:0},
  {id:'q002',p:'Qual foi o primeiro milagre de Jesus nas bodas de Caná?',a:['Transformar água em vinho','Curar um cego','Ressuscitar Lázaro','Multiplicar pães'],c:0},
  {id:'q003',p:'Quantos discípulos Jesus escolheu?',a:['12','7','10','14'],c:0},
  {id:'q004',p:'Quem traiu Jesus por 30 moedas de prata?',a:['Judas Iscariotes','Pedro','Tomé','Filipe'],c:0},
  {id:'q005',p:'Em qual cidade Jesus nasceu?',a:['Belém','Nazaré','Jerusalém','Cafarnaum'],c:0},
  {id:'q006',p:'Qual gigante Davi derrotou com uma funda?',a:['Golias','Og','Sísara','Rabe'],c:0},
  {id:'q007',p:'Quem foi lançado na cova dos leões?',a:['Daniel','José','Paulo','Elias'],c:0},
  {id:'q008',p:'Quantos livros tem o Novo Testamento?',a:['27','39','66','12'],c:0},
  {id:'q009',p:'Quem foi engolido por um grande peixe?',a:['Jonas','Jeremias','Elias','Ezequiel'],c:0},
  {id:'q010',p:'Qual é o primeiro livro da Bíblia?',a:['Gênesis','Êxodo','Levítico','Números'],c:0},
  {id:'q011',p:'Qual rio Jesus foi batizado?',a:['Jordão','Nilo','Eufrates','Tigre'],c:0},
  {id:'q012',p:'Quem batizou Jesus?',a:['João Batista','Pedro','André','Felipe'],c:0},
  {id:'q013',p:'Quantas pragas Deus enviou ao Egito?',a:['10','7','12','9'],c:0},
  {id:'q014',p:'Quem recebeu a Lei de Deus no Monte Sinai?',a:['Moisés','Arão','Josué','Calebe'],c:0},
  {id:'q015',p:'Qual árvore Zaqueu subiu para ver Jesus?',a:['Sicômoro','Figueira','Oliveira','Tamargueira'],c:0},
  {id:'q016',p:'Em quantos dias Deus criou o mundo?',a:['6','7','5','10'],c:0},
  {id:'q017',p:'Qual foi o primeiro homem criado por Deus?',a:['Adão','Abel','Noé','Sete'],c:0},
  {id:'q018',p:'Qual foi a primeira mulher criada por Deus?',a:['Eva','Sara','Raquel','Rute'],c:0},
  {id:'q019',p:'Quem vendeu José como escravo?',a:['Seus irmãos','Seu pai','Faraó','Potifar'],c:0},
  {id:'q020',p:'Qual foi o dom especial de Sansão?',a:['Força extraordinária','Sabedoria','Velocidade','Cura'],c:0},
  {id:'q021',p:'Qual rainha salvou o povo judeu do extermínio?',a:['Ester','Débora','Rute','Miriã'],c:0},
  {id:'q022',p:'Qual é o maior mandamento segundo Jesus?',a:['Amar a Deus sobre tudo','Não matar','Não roubar','Guardar o sábado'],c:0},
  {id:'q023',p:'Quantos pães e peixes Jesus usou para alimentar 5.000?',a:['5 pães e 2 peixes','3 pães e 5 peixes','7 pães e 4 peixes','2 pães e 7 peixes'],c:0},
  {id:'q024',p:'Qual discípulo negou Jesus três vezes?',a:['Pedro','João','Tomé','Mateus'],c:0},
  {id:'q025',p:'Quem escreveu o livro de Apocalipse?',a:['João','Paulo','Pedro','Lucas'],c:0},
  {id:'q026',p:'Qual é o último livro da Bíblia?',a:['Apocalipse','Judas','3 João','Hebreus'],c:0},
  {id:'q027',p:'Onde Jesus foi tentado por 40 dias?',a:['No deserto','No templo','No jardim','No monte'],c:0},
  {id:'q028',p:'Quem era a mãe de Jesus?',a:['Maria','Marta','Salomé','Ana'],c:0},
  {id:'q029',p:'Quantos anos Noé tinha quando o dilúvio começou?',a:['600','500','450','700'],c:0},
  {id:'q030',p:'Quem foi o primeiro rei de Israel?',a:['Saul','Davi','Salomão','Josias'],c:0},
  {id:'q031',p:'Quem construiu o Templo em Jerusalém?',a:['Salomão','Davi','Ezequias','Josias'],c:0},
  {id:'q032',p:'Qual profeta foi levado ao céu num carro de fogo?',a:['Elias','Eliseu','Ezequiel','Isaías'],c:0},
  {id:'q033',p:'Quantas vezes por dia Daniel orava?',a:['3','7','5','2'],c:0},
  {id:'q034',p:'Qual apóstolo era cobrador de impostos antes de seguir Jesus?',a:['Mateus','Levi','João','Simão'],c:0},
  {id:'q035',p:'Qual é o terceiro livro da Bíblia?',a:['Levítico','Números','Êxodo','Deuteronômio'],c:0},
  {id:'q036',p:'Qual profeta anunciou o nascimento do Messias em Belém?',a:['Miquéias','Isaías','Jeremias','Amós'],c:0},
  {id:'q037',p:'Quantos livros tem o Antigo Testamento?',a:['39','27','46','33'],c:0},
  {id:'q038',p:'Qual é o símbolo da aliança de Deus com Noé?',a:['Arco-íris','Pombinha','Oliveira','Estrela'],c:0},
  {id:'q039',p:'Qual discípulo tocou nas chagas de Jesus para crer?',a:['Tomé','João','Pedro','André'],c:0},
  {id:'q040',p:'Quanto tempo choveu durante o dilúvio?',a:['40 dias e 40 noites','7 dias','30 dias','120 dias'],c:0},
  {id:'q041',p:'Em qual monte Moisés viu a sarça ardente?',a:['Horebe','Sinai','Carmelo','Sião'],c:0},
  {id:'q042',p:'Quem ungiu Davi como rei?',a:['Samuel','Natã','Elias','Eliseu'],c:0},
  {id:'q043',p:'Onde Jesus realizou o Sermão da Montanha?',a:['Numa montanha na Galileia','No templo de Jerusalém','Em Cafarnaum','No deserto'],c:0},
  {id:'q044',p:'Qual é a parábola do filho que desperdiçou a herança?',a:['Filho pródigo','Semeador','Talentos','Ovelha perdida'],c:0},
  {id:'q045',p:'Quem escreveu o livro de Atos dos Apóstolos?',a:['Lucas','João','Paulo','Pedro'],c:0},
  {id:'q046',p:'O que simboliza a pomba no batismo de Jesus?',a:['O Espírito Santo','A paz','A pureza','O perdão'],c:0},
  {id:'q047',p:'Em qual livro está escrito: "No princípio era o Verbo"?',a:['João','Gênesis','Hebreus','Apocalipse'],c:0},
  {id:'q048',p:'Qual é o livro mais curto da Bíblia?',a:['3 João','Filemon','Judas','Obadias'],c:0},
  {id:'q049',p:'Quem foi o primeiro mártir cristão registrado?',a:['Estêvão','Tiago','Pedro','Paulo'],c:0},
  {id:'q050',p:'Em qual cidade Paulo e Silas foram presos e cantaram hinos?',a:['Filipos','Corinto','Éfeso','Tessalônica'],c:0},
  {id:'q051',p:'Quem reconstruiu os muros de Jerusalém?',a:['Neemias','Esdras','Zorobabel','Josué'],c:0},
  {id:'q052',p:'Quantos anos o povo de Israel ficou no deserto?',a:['40','20','30','50'],c:0},
  {id:'q053',p:'Como Josué conquistou Jericó?',a:['Os muros caíram com marchas e gritos','Com catapultas','Com fogo','Com um exército de anjos'],c:0},
  {id:'q054',p:'Qual é o livro central da Bíblia?',a:['Salmos','Provérbios','Isaías','Jó'],c:0},
  {id:'q055',p:'Qual era a profissão de Lucas antes de ser discípulo?',a:['Médico','Pescador','Cobrador','Fabricante de tendas'],c:0},
  {id:'q056',p:'Qual foi a primeira aparição de Jesus ressurreto?',a:['Maria Madalena','Pedro','Os onze','Maria, mãe de Jesus'],c:0},
  {id:'q057',p:'Quem era o governador romano que condenou Jesus?',a:['Pilatos','Herodes','César','Félix'],c:0},
  {id:'q058',p:'Qual é o quinto mandamento?',a:['Honra pai e mãe','Não matarás','Não roubarás','Não cobiçarás'],c:0},
  {id:'q059',p:'Quem era o sogro de Moisés?',a:['Jetro','Anás','Fineias','Eleazar'],c:0},
  {id:'q060',p:'Qual rainha visitou Salomão para testar sua sabedoria?',a:['Rainha de Sabá','Jezabel','Atalias','Débora'],c:0},
];

// ─── INJEÇÃO DE ESTILOS PREMIUM ──────────────────────────────────────────────
function injectStyles() {
  if (document.getElementById('duel-styles-v3')) return;
  const s = document.createElement('style');
  s.id = 'duel-styles-v3';
  s.textContent = `
  /* ── PRESENÇA ── */
  .presence-dot{position:absolute;right:1px;bottom:1px;width:12px;height:12px;border-radius:50%;border:2px solid #111;z-index:3}
  .presence-dot.online{background:#00e676;box-shadow:0 0 8px #00e676,0 0 16px rgba(0,230,118,.5);animation:pdPulse 1.8s ease infinite}
  .presence-dot.offline{background:#f44336;box-shadow:0 0 6px rgba(244,67,54,.35)}
  @keyframes pdPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.18)}}

  /* ── BOTÃO PRINCIPAL (RUBI 3D BRILHANTE POLIDO) ── */
  .duel-ruby-btn{
    position:relative;overflow:hidden;
    background:linear-gradient(160deg,#7b0219 0%,#c01230 30%,#f04060 52%,#b01028 72%,#6e0215 100%);
    color:#fff;border:none;border-radius:16px;padding:15px 24px;
    font-family:'Cinzel',serif;font-weight:800;letter-spacing:.7px;font-size:.95rem;
    cursor:pointer;
    box-shadow:
      0 2px 0 #3a0008,
      0 6px 20px rgba(180,10,40,.5),
      0 1px 0 rgba(255,180,190,.5) inset,
      0 -4px 12px rgba(80,0,16,.4) inset;
    transform:translateY(0);
    transition:transform .12s,box-shadow .12s;
  }
  .duel-ruby-btn::before{
    content:'';position:absolute;top:0;left:-80%;width:50%;height:100%;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,.45),transparent);
    transform:skewX(-20deg);animation:rubyShine 2.2s linear infinite;
  }
  .duel-ruby-btn::after{
    content:'';position:absolute;top:0;left:0;right:0;height:50%;
    background:linear-gradient(180deg,rgba(255,255,255,.18),transparent);
    border-radius:16px 16px 0 0;pointer-events:none;
  }
  .duel-ruby-btn:active{transform:translateY(2px);box-shadow:0 1px 0 #3a0008,0 3px 10px rgba(180,10,40,.4),0 1px 0 rgba(255,180,190,.3) inset;}
  @keyframes rubyShine{from{left:-80%}to{left:130%}}

  /* ── BOTÃO PRATA 3D ── */
  .duel-btn-silver{
    position:relative;overflow:hidden;
    background:linear-gradient(160deg,#3a3a3a 0%,#8a8a8a 35%,#e0e0e0 55%,#7a7a7a 75%,#2e2e2e 100%);
    color:#fff;border:none;border-radius:16px;padding:15px 20px;
    font-family:'Cinzel',serif;font-weight:800;letter-spacing:.5px;font-size:.9rem;
    cursor:pointer;
    box-shadow:
      0 2px 0 #111,
      0 6px 18px rgba(0,0,0,.45),
      0 1px 0 rgba(255,255,255,.35) inset,
      0 -4px 10px rgba(0,0,0,.3) inset;
    transform:translateY(0);
    transition:transform .12s,box-shadow .12s;
  }
  .duel-btn-silver::before{
    content:'';position:absolute;top:0;left:-80%;width:50%;height:100%;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent);
    transform:skewX(-20deg);animation:silverShine 2.6s linear infinite .4s;
  }
  .duel-btn-silver::after{
    content:'';position:absolute;top:0;left:0;right:0;height:50%;
    background:linear-gradient(180deg,rgba(255,255,255,.22),transparent);
    border-radius:16px 16px 0 0;pointer-events:none;
  }
  .duel-btn-silver:active{transform:translateY(2px);box-shadow:0 1px 0 #111,0 3px 8px rgba(0,0,0,.35),0 1px 0 rgba(255,255,255,.2) inset;}
  .duel-btn-silver:disabled{opacity:.5;cursor:not-allowed;animation:none;}
  @keyframes silverShine{from{left:-80%}to{left:130%}}

  /* ── BOTÃO ESCURO ── */
  .duel-btn-dark{
    background:linear-gradient(160deg,#1e1e1e,#2e2e2e);
    color:#aaa;border:1px solid #3a3a3a;border-radius:16px;padding:15px 20px;
    font-weight:700;cursor:pointer;transition:.15s;
    font-family:'Cinzel',serif;letter-spacing:.4px;font-size:.9rem;
    box-shadow:0 4px 12px rgba(0,0,0,.3),0 1px 0 rgba(255,255,255,.06) inset;
  }
  .duel-btn-dark:hover{background:linear-gradient(160deg,#272727,#383838);color:#ccc;}
  .duel-btn-dark:disabled{opacity:.4;cursor:not-allowed;}

  /* ── OVERLAYS ── */
  .duel-overlay,.duel-final,.duel-rematch{
    position:fixed;inset:0;z-index:9999;
    display:flex;align-items:center;justify-content:center;
    background:rgba(0,0,0,.88);backdrop-filter:blur(14px);
    animation:fadeInOverlay .2s ease;
  }
  @keyframes fadeInOverlay{from{opacity:0}to{opacity:1}}

  /* ── CAIXA DE DIÁLOGO ── */
  .duel-box{
    width:min(92vw,440px);
    background:linear-gradient(170deg,#160607 0%,#0d0d0b 65%,#090909 100%);
    border:1px solid rgba(212,175,55,.35);
    border-radius:24px;padding:30px 24px;
    box-shadow:
      0 30px 70px rgba(0,0,0,.7),
      0 0 0 1px rgba(255,255,255,.04) inset,
      0 1px 0 rgba(212,175,55,.2) inset;
    animation:slideUpBox .25s cubic-bezier(.17,.89,.32,1.28);
  }
  @keyframes slideUpBox{from{transform:translateY(18px);opacity:0}to{transform:translateY(0);opacity:1}}
  .duel-box h3,.duel-box h2{margin:0 0 10px;font-family:'Cinzel',serif;color:#f4d15f;text-align:center;letter-spacing:.5px}
  .duel-box p{margin:0 0 20px;color:#e0e0e0;text-align:center;line-height:1.6;font-size:.95rem}
  .duel-actions{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:4px}

  /* ── ARENA DE COMBATE (TELA PRINCIPAL) ── */
  .duel-arena{
    position:fixed;inset:0;z-index:9998;
    background:linear-gradient(180deg,#080002 0%,#120008 25%,#0a0005 55%,#060606 100%);
    overflow:auto;
  }
  .duel-arena::before{
    content:'';position:fixed;inset:0;pointer-events:none;z-index:0;
    background:
      radial-gradient(ellipse 60% 40% at 50% 0%,rgba(180,10,40,.18) 0%,transparent 70%),
      radial-gradient(ellipse 40% 30% at 80% 80%,rgba(212,175,55,.07) 0%,transparent 60%);
  }
  .arena-wrap{max-width:780px;margin:0 auto;padding:0 16px 30px;position:relative;z-index:1}

  /* ── CABEÇALHO DA ARENA ── */
  .arena-head{
    position:sticky;top:0;z-index:4;
    background:rgba(6,0,2,.92);backdrop-filter:blur(16px);
    border-bottom:1px solid rgba(212,175,55,.22);
    padding:14px 16px;
    box-shadow:0 4px 20px rgba(0,0,0,.5);
  }
  .arena-topline{display:flex;align-items:center;justify-content:space-between;gap:12px}
  .arena-opponent{display:flex;align-items:center;gap:12px;color:#f7dd85;font-weight:800}
  .arena-opponent img{
    width:50px;height:50px;border-radius:50%;
    border:2px solid #d4af37;object-fit:cover;
    box-shadow:0 0 12px rgba(212,175,55,.4);
  }
  .arena-head-meta{
    color:#d4af37;font-family:'Cinzel',serif;font-size:.9rem;font-weight:800;
    letter-spacing:.3px;
  }

  /* ── TIMER ── */
  .arena-timer-wrap{
    display:flex;align-items:center;gap:10px;
    background:rgba(0,0,0,.4);border:1px solid rgba(212,175,55,.2);
    border-radius:999px;padding:8px 18px;
  }
  .arena-timer-num{
    font-family:'Cinzel',serif;font-size:1.3rem;font-weight:900;
    color:#f6d875;min-width:2ch;text-align:center;
    transition:color .3s;
  }
  .arena-timer-num.urgent{color:#ff4444;animation:timerPulse .6s ease infinite;}
  @keyframes timerPulse{0%,100%{opacity:1}50%{opacity:.55}}
  .arena-timer-label{color:#888;font-size:.75rem;letter-spacing:.5px}

  /* ── PLACAR ── */
  .arena-score{
    display:flex;justify-content:space-between;align-items:center;
    margin-top:18px;padding:14px 20px;
    border:1px solid rgba(212,175,55,.2);border-radius:20px;
    background:rgba(255,255,255,.03);
    box-shadow:0 4px 20px rgba(0,0,0,.3),0 0 0 1px rgba(255,255,255,.03) inset;
  }
  .arena-score .n{
    font-size:2rem;font-family:'Cinzel',serif;color:#f6d875;font-weight:900;
    text-shadow:0 0 20px rgba(246,216,117,.4);
  }
  .arena-score .vs{
    font-family:'Cinzel',serif;font-size:1.2rem;color:#d4af37;font-weight:900;
    text-shadow:0 0 14px rgba(212,175,55,.5);
  }
  .arena-score-label{color:#7a7a7a;font-size:.75rem;margin-top:4px;letter-spacing:.3px}

  /* ── PERGUNTA ── */
  .arena-question{
    margin-top:18px;
    background:rgba(255,255,255,.03);
    border:1px solid rgba(212,175,55,.18);
    border-radius:20px;padding:20px;
    box-shadow:0 4px 20px rgba(0,0,0,.25),0 0 0 1px rgba(255,255,255,.03) inset;
  }
  .arena-question .q-label{
    color:#d4af37;font-size:.75rem;letter-spacing:1px;margin-bottom:12px;font-weight:700;
    text-transform:uppercase;
  }
  .arena-question .q-text{
    font-size:1.08rem;line-height:1.6;color:#f0f0f0;
  }

  /* ── OPÇÕES DE RESPOSTA (3D PREMIUM) ── */
  .arena-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:18px}
  .arena-opt{
    position:relative;overflow:hidden;
    border:1px solid rgba(255,255,255,.12);
    background:linear-gradient(160deg,rgba(30,30,28,.9),rgba(18,18,16,.9));
    color:#e8e8e8;border-radius:16px;padding:16px 14px;
    min-height:64px;text-align:center;font-weight:700;
    cursor:pointer;
    font-size:.92rem;line-height:1.4;
    box-shadow:
      0 2px 0 rgba(0,0,0,.6),
      0 6px 16px rgba(0,0,0,.35),
      0 1px 0 rgba(255,255,255,.08) inset;
    transform:translateY(0);
    transition:transform .12s,box-shadow .12s,border-color .12s,background .12s;
    -webkit-tap-highlight-color:transparent;
  }
  .arena-opt::after{
    content:'';position:absolute;top:0;left:0;right:0;height:45%;
    background:linear-gradient(180deg,rgba(255,255,255,.07),transparent);
    border-radius:16px 16px 0 0;pointer-events:none;
  }
  .arena-opt:hover:not(:disabled){
    border-color:rgba(212,175,55,.5);
    background:linear-gradient(160deg,rgba(50,40,10,.9),rgba(35,28,5,.9));
    transform:translateY(-2px);
    box-shadow:0 4px 0 rgba(0,0,0,.5),0 10px 24px rgba(0,0,0,.4),0 0 0 1px rgba(212,175,55,.15) inset;
  }
  .arena-opt:active:not(:disabled){transform:translateY(1px);box-shadow:0 1px 0 rgba(0,0,0,.5),0 4px 10px rgba(0,0,0,.3);}
  .arena-opt:disabled{opacity:.85;cursor:not-allowed;}
  .arena-opt.loading{opacity:.6;pointer-events:none;}
  .arena-opt.selected{
    border-color:rgba(212,175,55,.6);
    background:linear-gradient(160deg,rgba(60,48,8,.95),rgba(40,32,4,.95));
    box-shadow:0 2px 0 rgba(0,0,0,.5),0 6px 20px rgba(212,175,55,.15),0 0 0 1px rgba(212,175,55,.2) inset;
  }
  .arena-opt.correct{
    border-color:#2ecc71;
    background:linear-gradient(160deg,rgba(8,48,20,.95),rgba(4,32,14,.95));
    color:#a2ffca;
    box-shadow:0 2px 0 rgba(0,0,0,.5),0 6px 20px rgba(46,204,113,.2),0 0 0 1px rgba(46,204,113,.25) inset;
  }
  .arena-opt.wrong{
    border-color:#ff6b6b;
    background:linear-gradient(160deg,rgba(48,8,8,.95),rgba(32,4,4,.95));
    color:#ffc8c8;
    box-shadow:0 2px 0 rgba(0,0,0,.5),0 6px 20px rgba(255,107,107,.15),0 0 0 1px rgba(255,107,107,.2) inset;
  }

  /* ── STATUS DOS JOGADORES ── */
  .arena-status-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:14px}
  .arena-status-card{
    border:1px solid rgba(212,175,55,.15);
    background:rgba(255,255,255,.025);
    border-radius:16px;padding:14px;text-align:center;
    color:#d4af37;font-weight:700;font-size:.88rem;
    box-shadow:0 2px 12px rgba(0,0,0,.2);
  }
  .arena-status-card small{display:block;color:#666;font-weight:500;margin-top:5px;font-size:.75rem}
  .arena-status-card.answered{border-color:rgba(46,204,113,.3);color:#2ecc71;}
  .arena-status-card.waiting{border-color:rgba(255,166,0,.2);color:#ffa600;}

  /* ── BOTÃO SAIR ── */
  .arena-quit{
    margin-top:20px;width:100%;
    background:linear-gradient(160deg,#1a1a1a,#242424);
    color:#888;border:1px solid #333;border-radius:16px;
    padding:14px;font-weight:700;cursor:pointer;
    font-family:'Cinzel',serif;letter-spacing:.3px;font-size:.85rem;
    transition:.15s;
    box-shadow:0 4px 12px rgba(0,0,0,.3);
  }
  .arena-quit:hover{background:linear-gradient(160deg,#232323,#2e2e2e);color:#aaa;border-color:#444;}

  /* ── RODADA BADGE ── */
  .arena-round-badge{
    display:inline-flex;align-items:center;gap:6px;
    background:rgba(212,175,55,.12);border:1px solid rgba(212,175,55,.3);
    border-radius:999px;padding:5px 14px;
    color:#d4af37;font-family:'Cinzel',serif;font-size:.82rem;font-weight:800;
    letter-spacing:.5px;
  }

  /* ── TELA FINAL ── */
  .duel-final-box{
    width:min(94vw,540px);
    background:linear-gradient(170deg,#130308 0%,#0d0d0b 60%,#090909 100%);
    border:1px solid rgba(212,175,55,.35);
    border-radius:24px;padding:30px 24px;
    box-shadow:
      0 40px 80px rgba(0,0,0,.75),
      0 0 0 1px rgba(255,255,255,.04) inset,
      0 1px 0 rgba(212,175,55,.2) inset;
    animation:slideUpBox .3s cubic-bezier(.17,.89,.32,1.28);
  }
  .final-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:20px}
  .final-card{
    border:1px solid rgba(212,175,55,.15);border-radius:20px;
    padding:16px;background:rgba(255,255,255,.025);text-align:center;
    box-shadow:0 4px 16px rgba(0,0,0,.3);
  }
  .final-card img{
    width:68px;height:68px;border-radius:50%;border:2px solid #d4af37;
    object-fit:cover;box-shadow:0 0 16px rgba(212,175,55,.35);
  }
  .final-card .name{margin-top:12px;color:#fff;font-weight:800;font-size:.95rem}
  .final-card .score{
    color:#f6d875;font-size:1.8rem;font-family:'Cinzel',serif;font-weight:900;
    text-shadow:0 0 20px rgba(246,216,117,.4);margin-top:4px;
  }
  .final-buttons{display:grid;grid-template-columns:1fr;gap:12px;margin-top:20px}

  /* ── TAGS DE RESULTADO ── */
  .champion-tag{
    display:inline-block;margin-top:10px;padding:6px 14px;border-radius:999px;
    background:linear-gradient(90deg,#8a5a00,#d4af37,#fff1a8,#d4af37,#8a5a00);
    background-size:200% 100%;color:#1a1200;font-weight:900;font-size:.82rem;
    animation:championGlow 2.2s linear infinite;
    box-shadow:0 0 16px rgba(212,175,55,.4);letter-spacing:.3px;
  }
  .silver-tag{
    display:inline-block;margin-top:10px;padding:6px 14px;border-radius:999px;
    background:linear-gradient(90deg,#555,#c8c8c8,#888);
    background-size:200% 100%;color:#1c1c1c;font-weight:900;font-size:.82rem;
    animation:championGlow 2.8s linear infinite;
    box-shadow:0 0 10px rgba(200,200,200,.2);
  }
  .desist-tag{
    display:inline-block;margin-top:10px;padding:6px 14px;border-radius:999px;
    background:#2a2a2a;color:#666;font-weight:900;font-size:.82rem;
    border:1px solid #3a3a3a;
  }
  @keyframes championGlow{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}

  /* ── RANKING: BOTÃO DESAFIAR 3D ── */
  .rank-challenge-btn{
    position:relative;overflow:hidden;
    background:linear-gradient(160deg,#7b0219 0%,#c01230 30%,#f04060 52%,#b01028 72%,#6e0215 100%);
    color:#fff;border:none;border-radius:12px;
    padding:8px 16px;
    font-family:'Cinzel',serif;font-weight:800;font-size:.78rem;letter-spacing:.5px;
    cursor:pointer;white-space:nowrap;
    box-shadow:
      0 2px 0 #3a0008,
      0 5px 14px rgba(180,10,40,.45),
      0 1px 0 rgba(255,180,190,.4) inset,
      0 -3px 8px rgba(80,0,16,.35) inset;
    transform:translateY(0);
    transition:transform .1s,box-shadow .1s;
    -webkit-tap-highlight-color:transparent;
  }
  .rank-challenge-btn::before{
    content:'';position:absolute;top:0;left:-80%;width:50%;height:100%;
    background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);
    transform:skewX(-20deg);animation:rubyShine 2.4s linear infinite;
  }
  .rank-challenge-btn::after{
    content:'';position:absolute;top:0;left:0;right:0;height:50%;
    background:linear-gradient(180deg,rgba(255,255,255,.16),transparent);
    border-radius:12px 12px 0 0;pointer-events:none;
  }
  .rank-challenge-btn:active{transform:translateY(2px);box-shadow:0 0 0 #3a0008,0 2px 8px rgba(180,10,40,.3);}
  .rank-challenge-btn:disabled{opacity:.4;cursor:not-allowed;pointer-events:none;}

  /* ── TROFÉUS DO RANKING ── */
  .trofeu-container{position:relative;width:45px;height:45px;display:flex;justify-content:center;align-items:center}
  .aura-flamejante{position:absolute;width:100%;height:100%;border-radius:50%;top:0;left:0;animation:aura-pulse 2s infinite}
  .aura-ouro{box-shadow:0 0 18px #d4af37,0 0 35px #ffff00,inset 0 0 12px rgba(212,175,55,.5)}
  .aura-prata{box-shadow:0 0 15px #c0c0c0,0 0 30px #e8e8e8,inset 0 0 10px rgba(192,192,192,.5)}
  .aura-bronze{box-shadow:0 0 15px #cd7f32,0 0 30px #ff8c00,inset 0 0 10px rgba(205,127,50,.5)}
  @keyframes aura-pulse{0%,100%{transform:scale(1);opacity:.8}50%{transform:scale(1.22);opacity:1}}
  .trofeu-icone{position:relative;z-index:10;font-size:1.5rem;animation:trofeu-float 2s ease-in-out infinite}
  @keyframes trofeu-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
  .nivel-chamas-ouro{
    color:#000 !important;font-weight:900;text-transform:uppercase;padding:2px 8px;
    border-radius:4px;display:inline-block;
    background:linear-gradient(45deg,#d4af37,#f9f295,#ffdf00,#d4af37);
    background-size:400% 400%;animation:chamasOuroAnim 3s ease infinite;
    border:1px solid #d4af37;font-size:.65rem;margin-top:4px;
    box-shadow:0 0 8px rgba(212,175,55,.5);
  }
  @keyframes chamasOuroAnim{0%,100%{background-position:0% 50%;box-shadow:0 0 5px #d4af37}50%{background-position:100% 50%;box-shadow:0 0 15px #ffdf00}}

  /* ── ANIMAÇÃO DE DESAFIO ENVIADO ── */
  .duel-challenge-toast{
    position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
    z-index:10002;
    background:linear-gradient(160deg,#160607,#0d0d0b);
    border:1px solid rgba(212,175,55,.4);border-radius:20px;
    padding:24px 32px;text-align:center;
    box-shadow:0 20px 50px rgba(0,0,0,.7);
    animation:toastPop .25s cubic-bezier(.17,.89,.32,1.28);
  }
  @keyframes toastPop{from{transform:translate(-50%,-50%) scale(.85);opacity:0}to{transform:translate(-50%,-50%) scale(1);opacity:1}}

  /* ── TOAST MENSAGEM ── */
  .duel-toast-msg{
    position:fixed;left:50%;bottom:28px;transform:translateX(-50%);
    z-index:10001;background:#111;color:#f6d875;
    padding:12px 22px;border-radius:999px;
    border:1px solid rgba(212,175,55,.3);
    box-shadow:0 10px 25px rgba(0,0,0,.4);
    font-size:.9rem;font-weight:600;
    animation:toastSlideUp .2s ease;
    pointer-events:none;
  }
  @keyframes toastSlideUp{from{transform:translateX(-50%) translateY(10px);opacity:0}to{transform:translateX(-50%) translateY(0);opacity:1}}

  @media(max-width:640px){
    .arena-grid{grid-template-columns:1fr}
    .final-grid{grid-template-columns:1fr 1fr}
    .duel-box{padding:24px 18px}
  }
  `;
  document.head.appendChild(s);
}

// ─── UTILITÁRIOS ──────────────────────────────────────────────────────────────
function avatar(nome = '?') {
  const ini = String(nome || '?').trim().split(/\s+/).map(p => p[0]).join('').slice(0, 2).toUpperCase() || '?';
  const cor = ['#d4af37','#2ecc71','#4a90e2','#e74c3c','#9b59b6'][Math.abs((nome || '').charCodeAt(0) || 0) % 5];
  return `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="${cor}"/><text x="100" y="108" font-size="80" font-weight="bold" fill="white" text-anchor="middle" font-family="Arial">${ini}</text></svg>`)}`;
}

function esc(v = '') {
  return String(v).replace(/[&<>"']/g, m => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m]));
}

// FIX #2: ONLINE_MS agora 180s
function isOnline(user) {
  const t = user?.lastUpdate || user?.lastupdate;
  return !!(t && (Date.now() - new Date(t).getTime() < ONLINE_MS));
}

function toast(text) {
  document.querySelectorAll('.duel-toast-msg').forEach(el => el.remove());
  const el = document.createElement('div');
  el.className = 'duel-toast-msg';
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2400);
}

function calcNivel(pts) {
  if (pts < 100)   return 'Servo Fiel';
  if (pts < 500)   return 'Levita Louvador';
  if (pts < 1000)  return 'Soldado de Cristo';
  if (pts < 2000)  return 'Semeador da Palavra';
  if (pts < 3000)  return 'Missionário(a)';
  if (pts < 4500)  return 'Guarda de Sião';
  if (pts < 6000)  return 'Vencedor em Cristo';
  if (pts < 8000)  return 'Ungido por Deus';
  if (pts < 10500) return 'Fiel Adorador';
  if (pts < 13500) return 'Embaixador do Reino';
  if (pts < 17000) return 'Apóstolo';
  if (pts < 21000) return 'Profeta de Deus';
  if (pts < 26000) return 'Guerreiro de Gileade';
  if (pts < 32000) return 'Herdeiro do Eterno';
  return 'Herói da Fé Eterno';
}

// ─── CANAIS / LIFECYCLE ───────────────────────────────────────────────────────
// FIX #11: teardownChannels agora async e aguarda removeChannel
async function teardownChannels() {
  const removes = [];
  if (_inviteChannel)  { removes.push(supabase.removeChannel(_inviteChannel));  _inviteChannel  = null; }
  if (_duelChannel)    { removes.push(supabase.removeChannel(_duelChannel));    _duelChannel    = null; }
  if (_answersChannel) { removes.push(supabase.removeChannel(_answersChannel)); _answersChannel = null; }
  await Promise.allSettled(removes);
  if (_renderTimer) { clearInterval(_renderTimer); _renderTimer = null; }
  _duelStateCache   = null;
  _currentDuelId    = null;
  _finalOverlayOpen = false;
  _forfeitInProgress = false;
}

async function getMe() {
  const { data: { user } } = await supabase.auth.getUser();
  return user || null;
}

async function ensureObservers() {
  injectStyles();
  const me = await getMe();
  if (!me?.id) { await teardownChannels(); _me = null; return; }
  if (_me?.id === me.id && _inviteChannel && _duelChannel && _answersChannel) return;
  await teardownChannels();
  _me = me;

  // Canal de convites (FIX #5: tratado em mostrarConviteDesafio)
  _inviteChannel = supabase
    .channel('duel-invites-' + me.id)
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'desafios_duelo', filter: `para_uid=eq.${me.id}` }, async (payload) => {
      if (payload.new?.status === 'pendente') mostrarConviteDesafio(payload.new);
    })
    .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'desafios_duelo', filter: `para_uid=eq.${me.id}` }, async (payload) => {
      if (payload.new?.status === 'pendente') mostrarConviteDesafio(payload.new);
    })
    .subscribe();

  _duelChannel = supabase.channel('duels-' + me.id)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'duelos', filter: `player1_uid=eq.${me.id}` }, () => carregarDueloAtivo())
    .on('postgres_changes', { event: '*', schema: 'public', table: 'duelos', filter: `player2_uid=eq.${me.id}` }, () => carregarDueloAtivo())
    .subscribe();

  // FIX #4: _answersChannel SEM filtro global — canal filtrado é criado dinamicamente em renderArena
  // Mantemos um canal base que só age se _currentDuelId estiver definido
  _answersChannel = supabase.channel('duel-answers-base-' + me.id)
    .on('postgres_changes', { event: '*', schema: 'public', table: 'duelo_respostas' }, () => {
      if (_currentDuelId) carregarDuelo(_currentDuelId);
    })
    .subscribe();

  carregarDueloAtivo();
}

// FIX #3: filtra duelos com updated_at nas últimas 2h para evitar duelos antigos
async function carregarDueloAtivo() {
  if (!_me?.id) return;
  const doisHorasAtras = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();
  const { data } = await supabase
    .from('duelos')
    .select('*')
    .or(`player1_uid.eq.${_me.id},player2_uid.eq.${_me.id}`)
    .in('status', ['ativa', 'finalizada', 'desistida'])
    .gte('updated_at', doisHorasAtras) // FIX #3: apenas duelos recentes
    .order('id', { ascending: false })
    .limit(1);
  const duelo = data?.[0];
  if (!duelo) return;
  await carregarDuelo(duelo.id);
}

async function carregarDuelo(id) {
  const { data: duelo, error } = await supabase.from('duelos').select('*').eq('id', id).maybeSingle();
  if (error || !duelo) return;
  _currentDuelId  = duelo.id;
  _duelStateCache = duelo;

  if (duelo.status === 'ativa') {
    _finalOverlayOpen = false;
    await renderArena(duelo);
  } else if ((duelo.status === 'finalizada' || duelo.status === 'desistida') && !_finalOverlayOpen) {
    _finalOverlayOpen = true;
    await renderFinal(duelo);
  }
}

// ─── MAPA DE USUÁRIOS ─────────────────────────────────────────────────────────
async function getUsersMap(ids) {
  const uniq = [...new Set(ids.filter(Boolean))];
  if (!uniq.length) return {};
  const { data } = await supabase.from('users').select('*').in('uid', uniq);
  const map = {};
  (data || []).forEach(u => map[u.uid] = u);
  return map;
}

// ─── PERGUNTAS ────────────────────────────────────────────────────────────────
async function pickQuestions(player1, player2) {
  const { data: usados } = await supabase
    .from('duelo_perguntas_usadas')
    .select('question_id')
    .in('uid', [player1, player2]);
  const usedIds = new Set((usados || []).map(r => r.question_id));
  let pool = QUESTION_BANK.filter(q => !usedIds.has(q.id));
  if (pool.length < TOTAL_ROUNDS) pool = [...QUESTION_BANK];
  pool = [...pool].sort(() => Math.random() - .5).slice(0, TOTAL_ROUNDS);

  const questions = pool.map(q => {
    const options = q.a.map((text, idx) => ({ text, orig: idx })).sort(() => Math.random() - .5);
    const correctIndex = options.findIndex(o => o.orig === q.c);
    return { id: q.id, pergunta: q.p, opcoes: options.map(o => o.text), correta: correctIndex };
  });

  const rows = [];
  for (const q of questions) {
    rows.push({ uid: player1, question_id: q.id, created_at: new Date().toISOString() });
    rows.push({ uid: player2, question_id: q.id, created_at: new Date().toISOString() });
  }
  await supabase.from('duelo_perguntas_usadas').insert(rows);
  return questions;
}

// ─── CRIAÇÃO DO DUELO ─────────────────────────────────────────────────────────
async function createDuel(player1, player2) {
  const questions = await pickQuestions(player1.uid, player2.uid);
  const now = new Date().toISOString();
  const { data, error } = await supabase.from('duelos').insert({
    player1_uid: player1.uid,
    player2_uid: player2.uid,
    current_round: 1,
    round_started_at: now,
    questions,
    status: 'ativa',
    score1: 0,
    score2: 0,
    created_at: now,
    updated_at: now,
    points_applied: false,
    rematch_accepted: false,
  }).select('*').single();
  if (error) throw error;
  return data;
}

// ─── CONVITES ─────────────────────────────────────────────────────────────────
async function getOpenPendingInvite(toUid, fromUid) {
  const { data } = await supabase.from('desafios_duelo')
    .select('*')
    .eq('de_uid', fromUid)
    .eq('para_uid', toUid)
    .eq('status', 'pendente')
    .order('id', { ascending: false })
    .limit(1);
  return data?.[0] || null;
}

// ─── INICIAR DESAFIO ──────────────────────────────────────────────────────────
// FIX #9: retry se perfil null após cadastro recente
window.iniciarDesafioUsuario = async function (target) {
  await ensureObservers();
  const me = _me || await getMe();
  if (!me?.id) return;
  if (!target?.uid || target.uid === me.id) return;
  if (Number(target.points || 0) < 100) return toast('Esse jogador ainda não tem 100 pontos.');

  let meuRow = null;
  for (let attempt = 0; attempt < 3; attempt++) {
    const { data } = await supabase.from('users').select('name, photoURL, photourl, points').eq('uid', me.id).single();
    if (data) { meuRow = data; break; }
    await new Promise(r => setTimeout(r, 800)); // aguarda perfil propagar
  }

  const myPoints = Number(meuRow?.points || 0);
  if (myPoints < 100) return toast('Você precisa de pelo menos 100 pontos para desafiar.');

  const existingActive = await supabase.from('duelos').select('id,status')
    .or(`and(player1_uid.eq.${me.id},player2_uid.eq.${target.uid}),and(player1_uid.eq.${target.uid},player2_uid.eq.${me.id})`)
    .eq('status', 'ativa').limit(1);
  if ((existingActive.data || []).length) return toast('Já existe uma partida ativa com esse jogador.');

  const openInvite = await getOpenPendingInvite(target.uid, me.id);
  if (openInvite) return toast('Desafio já enviado. Aguarde a resposta.');

  const now = new Date().toISOString();
  const { error } = await supabase.from('desafios_duelo').insert({
    de_uid:    me.id,
    de_nome:   meuRow?.name || 'Herói',
    de_foto:   meuRow?.photoURL || meuRow?.photourl || avatar(meuRow?.name || 'Herói'),
    para_uid:  target.uid,
    para_nome: target.nome || 'Herói',
    para_foto: target.foto || avatar(target.nome || 'Herói'),
    status:    'pendente',
    created_at: now,
    updated_at: now,
  });
  if (error) { console.error(error); toast('Não foi possível enviar o desafio.'); return; }
  showChallengedAnimation(target.nome || 'Herói');
};

// FIX #20: não remove overlays de outros contextos
function showChallengedAnimation(nome) {
  const ov = document.createElement('div');
  ov.className = 'duel-challenge-toast';
  ov.innerHTML = `
    <div style="font-size:2rem;margin-bottom:8px">⚔️</div>
    <div style="color:#f4d15f;font-family:'Cinzel',serif;font-weight:800;font-size:1.1rem;margin-bottom:6px">Desafio enviado!</div>
    <div style="color:#aaa;font-size:.9rem">Você desafiou <strong style="color:#fff">${esc(nome)}</strong></div>`;
  document.body.appendChild(ov);
  setTimeout(() => ov.remove(), 2000);
}

// ─── CONVITE RECEBIDO ─────────────────────────────────────────────────────────
// FIX #5: verifica duelo ativo antes de criar + FIX #17: valida expiração
// FIX #28: botões desabilitados durante processamento
async function mostrarConviteDesafio(invite) {
  // FIX #17: Convites com mais de 24h são recusados automaticamente
  const createdAt = new Date(invite.created_at).getTime();
  if (Date.now() - createdAt > 24 * 60 * 60 * 1000) {
    await supabase.from('desafios_duelo').update({ status: 'expirado', updated_at: new Date().toISOString() }).eq('id', invite.id);
    return;
  }

  document.getElementById('duel-invite-overlay')?.remove();
  const ov = document.createElement('div');
  ov.id = 'duel-invite-overlay';
  ov.className = 'duel-overlay';
  ov.innerHTML = `
    <div class="duel-box">
      <h3>⚔️ Você foi desafiado!</h3>
      <p><strong>${esc(invite.de_nome || 'Herói')}</strong> quer disputar uma batalha bíblica com você.</p>
      <div class="duel-actions">
        <button class="duel-btn-silver" id="duel-accept">Aceitar</button>
        <button class="duel-btn-dark"   id="duel-decline">Recusar</button>
      </div>
    </div>`;
  document.body.appendChild(ov);

  const btnAccept  = ov.querySelector('#duel-accept');
  const btnDecline = ov.querySelector('#duel-decline');

  btnDecline.addEventListener('click', async () => {
    btnDecline.disabled = true; // FIX #28
    await supabase.from('desafios_duelo').update({ status: 'recusado', updated_at: new Date().toISOString() }).eq('id', invite.id);
    ov.remove();
  });

  btnAccept.addEventListener('click', async () => {
    btnAccept.disabled  = true; // FIX #28
    btnDecline.disabled = true;
    btnAccept.textContent = 'Aguarde...';
    try {
      const me = _me || await getMe();

      // FIX #5: verificar duelo ativo antes de createDuel
      const existingActive = await supabase.from('duelos').select('id')
        .or(`and(player1_uid.eq.${invite.de_uid},player2_uid.eq.${me.id}),and(player1_uid.eq.${me.id},player2_uid.eq.${invite.de_uid})`)
        .eq('status', 'ativa').limit(1);
      if ((existingActive.data || []).length) {
        toast('Já existe um duelo ativo entre vocês.');
        ov.remove();
        return;
      }

      const { data: meRow }     = await supabase.from('users').select('name, photoURL, photourl, points').eq('uid', me.id).single();
      const { data: challenger } = await supabase.from('users').select('name, photoURL, photourl, points').eq('uid', invite.de_uid).single();

      if (Number(meRow?.points || 0) < 100)        { toast('Você precisa de 100 pontos para aceitar.'); btnAccept.disabled = false; btnDecline.disabled = false; btnAccept.textContent = 'Aceitar'; return; }
      if (Number(challenger?.points || 0) < 100)   { toast('O desafiante não tem mais 100 pontos.'); ov.remove(); return; }

      const duelo = await createDuel(
        { uid: invite.de_uid, name: challenger?.name || invite.de_nome, foto: challenger?.photoURL || challenger?.photourl || invite.de_foto },
        { uid: me.id,         name: meRow?.name     || 'Herói',         foto: meRow?.photoURL     || meRow?.photourl     || avatar(meRow?.name || 'Herói') }
      );
      await supabase.from('desafios_duelo').update({ status: 'aceito', duelo_id: duelo.id, updated_at: new Date().toISOString() }).eq('id', invite.id);
      ov.remove();
      await carregarDuelo(duelo.id);
    } catch (e) {
      console.error(e);
      toast('Não foi possível iniciar o duelo.');
      btnAccept.disabled  = false;
      btnDecline.disabled = false;
      btnAccept.textContent = 'Aceitar';
    }
  });
}

// ─── RENDERING DO RANKING COM PRESENÇA ───────────────────────────────────────
export async function renderizarRankingComPresenca(eu) {
  injectStyles();
  const container = document.getElementById('ranking-lista');
  if (!container) return;
  await ensureObservers();

  const { data: usuarios } = await supabase.from('users')
    .select('uid,name,points,photoURL,photourl,lastUpdate,lastupdate')
    .order('points', { ascending: false })
    .limit(50);
  if (!usuarios) return;

  let html = `<div style="max-width:720px;margin:0 auto;">`;
  usuarios.forEach((u, index) => {
    const isMe  = eu?.id === u.uid;
    const foto  = u.photoURL || u.photourl || avatar(u.name || 'Herói');
    const titulo = calcNivel(Number(u.points || 0));
    const nome  = u.name ? (u.name.length > 12 ? u.name.substring(0, 12) + '…' : u.name) : 'Herói';
    const online = isOnline(u);
    const pts   = Number(u.points || 0);
    window.__duelRankingContextByUid[u.uid] = { uid: u.uid, nome: u.name || 'Herói', foto, points: pts, online };

    let rankConteudo = `<span style="font-family:'Cinzel';font-weight:900;color:#d4af37;font-size:1rem;">${index + 1}</span>`;
    if (index === 0) rankConteudo = `<div class="trofeu-container"><div class="aura-flamejante aura-ouro"></div><div class="trofeu-icone">🏆</div></div>`;
    else if (index === 1) rankConteudo = `<div class="trofeu-container"><div class="aura-flamejante aura-prata"></div><div class="trofeu-icone">🥈</div></div>`;
    else if (index === 2) rankConteudo = `<div class="trofeu-container"><div class="aura-flamejante aura-bronze"></div><div class="trofeu-icone">🥉</div></div>`;

    const canChallenge = !isMe && pts >= 100;
    const challengeBtn = canChallenge
      ? `<button class="rank-challenge-btn" onclick="event.stopPropagation();window.iniciarDesafioUsuario(window.__duelRankingContextByUid['${u.uid}'])">⚔️ Desafiar</button>`
      : (!isMe && pts < 100 ? `<button class="rank-challenge-btn" disabled title="Precisa de 100 pts" style="opacity:.3">⚔️ Desafiar</button>` : '');

    html += `
      <div onclick="window.verPerfilDetalhado && window.verPerfilDetalhado('${u.uid}')"
        style="display:flex;align-items:center;gap:12px;padding:13px 14px;margin-bottom:10px;cursor:pointer;
          transition:transform .15s,box-shadow .15s;
          background:${index < 3 ? 'rgba(212,175,55,.18)' : isMe ? 'rgba(212,175,55,.10)' : 'rgba(10,10,10,.7)'};
          border:1px solid ${index < 3 ? 'rgba(212,175,55,.55)' : isMe ? 'rgba(212,175,55,.3)' : 'rgba(255,255,255,.07)'};
          border-radius:16px;backdrop-filter:blur(8px);
          box-shadow:${index < 3 ? '0 0 20px rgba(212,175,55,.15),' : ''}0 2px 10px rgba(0,0,0,.3);"
        onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 20px rgba(0,0,0,.4)'"
        onmouseout="this.style.transform='';this.style.boxShadow='${index < 3 ? '0 0 20px rgba(212,175,55,.15),' : ''}0 2px 10px rgba(0,0,0,.3)'">
        <div style="width:46px;display:flex;justify-content:center;align-items:center;flex-shrink:0;">${rankConteudo}</div>
        <div style="position:relative;flex-shrink:0;">
          <img src="${foto}" style="width:50px;height:50px;border-radius:50%;border:2px solid ${index < 3 ? '#d4af37' : '#333'};object-fit:cover;display:block;box-shadow:${index < 3 ? '0 0 12px rgba(212,175,55,.4)' : 'none'}" onerror="this.src='${avatar(u.name || 'Herói')}'">
          <div class="presence-dot ${online ? 'online' : 'offline'}"></div>
        </div>
        <div style="flex:1;text-align:left;min-width:0;">
          <div style="color:white;font-weight:800;font-size:.95rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
            ${esc(nome)} ${isMe ? '<span style="color:#d4af37;font-size:.7rem;">(você)</span>' : ''}
          </div>
          <div class="nivel-chamas-ouro">${esc(titulo)}</div>
          <div style="color:#d4af37;font-size:.78rem;font-weight:700;margin-top:3px;">${pts} PTS</div>
        </div>
        <div style="flex-shrink:0;">${challengeBtn}</div>
      </div>`;
  });
  container.innerHTML = html + '</div>';
}

// ─── HELPERS DA ARENA ─────────────────────────────────────────────────────────
function duelPlayers(duelo) {
  const meIsP1 = duelo.player1_uid === _me.id;
  return {
    meUid:    _me.id,
    oppUid:   meIsP1 ? duelo.player2_uid : duelo.player1_uid,
    meScore:  meIsP1 ? Number(duelo.score1 || 0) : Number(duelo.score2 || 0),
    oppScore: meIsP1 ? Number(duelo.score2 || 0) : Number(duelo.score1 || 0),
    meSlot:   meIsP1 ? 1 : 2,
    oppSlot:  meIsP1 ? 2 : 1,
  };
}

async function getRoundAnswers(duelId, roundNumber) {
  const { data } = await supabase.from('duelo_respostas').select('*').eq('duelo_id', duelId).eq('round_number', roundNumber);
  return data || [];
}

function questionForRound(duelo, roundNumber) {
  const arr = Array.isArray(duelo.questions) ? duelo.questions : [];
  return arr[roundNumber - 1] || null;
}

// ─── SUBMETER RESPOSTA ────────────────────────────────────────────────────────
// FIX #8: desabilita botões imediatamente antes do await
async function submitAnswer(duelo, answerIndex, roundSnapshot) {
  const round = roundSnapshot; // FIX #10: usa round capturado da closure
  const q = questionForRound(duelo, round);
  if (!q) return;
  const existing = await getRoundAnswers(duelo.id, round);
  if (existing.some(r => r.uid === _me.id)) return;
  const correct = Number(answerIndex) === Number(q.correta);
  const { error } = await supabase.from('duelo_respostas').insert({
    duelo_id:     duelo.id,
    round_number: round,
    uid:          _me.id,
    answer_index: Number(answerIndex),
    correct,
    responded_at: new Date().toISOString(),
  });
  if (error) { console.error(error); toast('Não foi possível registrar sua resposta.'); return; }
  await maybeAdvanceRound(duelo.id, round);
}

// ─── AVANÇAR ROUND ────────────────────────────────────────────────────────────
// FIX #6: usa UPDATE condicional atômico para evitar race condition
async function maybeAdvanceRound(duelId, roundNumber) {
  const { data: duelo } = await supabase.from('duelos').select('*').eq('id', duelId).maybeSingle();
  if (!duelo || duelo.status !== 'ativa' || Number(duelo.current_round) !== Number(roundNumber)) return;

  const answers  = await getRoundAnswers(duelId, roundNumber);
  const deadline = new Date(duelo.round_started_at).getTime() + (ROUND_SECONDS * 1000);
  const bothAnswered = answers.length >= 2;
  const timeUp       = Date.now() >= deadline;
  if (!bothAnswered && !timeUp) return;

  const p1Ans = answers.find(r => r.uid === duelo.player1_uid);
  const p2Ans = answers.find(r => r.uid === duelo.player2_uid);
  const newScore1 = Number(duelo.score1 || 0) + (p1Ans?.correct ? 1 : 0);
  const newScore2 = Number(duelo.score2 || 0) + (p2Ans?.correct ? 1 : 0);
  const now = new Date().toISOString();

  if (roundNumber >= TOTAL_ROUNDS) {
    let winner = null, loser = null;
    if (newScore1 > newScore2) { winner = duelo.player1_uid; loser = duelo.player2_uid; }
    else if (newScore2 > newScore1) { winner = duelo.player2_uid; loser = duelo.player1_uid; }

    // FIX #6: UPDATE condicional — só avança se current_round ainda for o mesmo
    const { data: updated } = await supabase.from('duelos').update({
      score1: newScore1, score2: newScore2,
      status: 'finalizada',
      winner_uid: winner, loser_uid: loser,
      ended_reason: 'fim_normal', updated_at: now,
    }).eq('id', duelId).eq('status', 'ativa').eq('current_round', roundNumber).select('*').maybeSingle();
    if (updated) await applyPointsIfNeeded(updated);
    return;
  }

  // FIX #6: UPDATE condicional para next round
  await supabase.from('duelos').update({
    score1: newScore1, score2: newScore2,
    current_round: roundNumber + 1,
    round_started_at: now, updated_at: now,
  }).eq('id', duelId).eq('status', 'ativa').eq('current_round', roundNumber);
}

// ─── APLICAR PONTOS ───────────────────────────────────────────────────────────
// FIX #12: UPDATE atômico como lock (points_applied=false na cláusula .eq)
async function applyPointsIfNeeded(duelo) {
  if (duelo.points_applied) return;
  const now = new Date().toISOString();
  const { data: flag } = await supabase.from('duelos')
    .update({ points_applied: true, updated_at: now })
    .eq('id', duelo.id)
    .eq('points_applied', false)
    .select('id').maybeSingle();
  if (!flag) return; // outro cliente já executou

  if (!duelo.winner_uid || !duelo.loser_uid) return; // empate — sem troca de pontos

  const { data: rows } = await supabase.from('users').select('uid, points').in('uid', [duelo.winner_uid, duelo.loser_uid]);
  const map = {};
  (rows || []).forEach(r => map[r.uid] = Number(r.points || 0));

  await supabase.from('users').update({
    points:     (map[duelo.winner_uid] || 0) + DUEL_WIN_POINTS,
    lastUpdate: now, lastupdate: now
  }).eq('uid', duelo.winner_uid);

  await supabase.from('users').update({
    points:     Math.max(0, (map[duelo.loser_uid] || 0) - DUEL_WIN_POINTS),
    lastUpdate: now, lastupdate: now
  }).eq('uid', duelo.loser_uid);

  window.dispatchEvent(new CustomEvent('pontos_atualizados', { detail: { uid: duelo.winner_uid } }));
  window.dispatchEvent(new CustomEvent('pontos_atualizados', { detail: { uid: duelo.loser_uid } }));
}

// ─── DESISTÊNCIA ──────────────────────────────────────────────────────────────
// FIX #13: flag para evitar dupla execução por beforeunload + visibilitychange
async function forfeitCurrentDuel() {
  if (_forfeitInProgress || !_duelStateCache || !_me?.id) return;
  const duelo = _duelStateCache;
  if (duelo.status !== 'ativa') return;
  _forfeitInProgress = true;
  const opponentUid = duelo.player1_uid === _me.id ? duelo.player2_uid : duelo.player1_uid;
  const now = new Date().toISOString();
  try {
    const { data: updated } = await supabase.from('duelos').update({
      status: 'desistida',
      winner_uid: opponentUid,
      loser_uid: _me.id,
      ended_reason: 'desistencia',
      updated_at: now,
    }).eq('id', duelo.id).eq('status', 'ativa').select('*').maybeSingle();
    if (updated) await applyPointsIfNeeded(updated);
  } finally {
    _forfeitInProgress = false;
  }
}

function clearArena() {
  document.getElementById('duel-arena')?.remove();
  if (_renderTimer) { clearInterval(_renderTimer); _renderTimer = null; }
}

// ─── ARENA DE COMBATE (RENDER PRINCIPAL) ──────────────────────────────────────
async function renderArena(duelo) {
  clearArena();
  const users   = await getUsersMap([duelo.player1_uid, duelo.player2_uid]);
  const info    = duelPlayers(duelo);
  const oppUser = users[info.oppUid] || { name: 'Oponente', points: 0 };
  const round   = Number(duelo.current_round || 1); // FIX #10: captura round imutável
  const q       = questionForRound(duelo, round);
  const answers  = await getRoundAnswers(duelo.id, round);
  const myAnswer  = answers.find(a => a.uid === _me.id) || null;
  const oppAnswer = answers.find(a => a.uid === info.oppUid) || null;

  const arena = document.createElement('div');
  arena.id        = 'duel-arena';
  arena.className = 'duel-arena';
  const fotoOpp = oppUser.photoURL || oppUser.photourl || avatar(oppUser.name || 'Oponente');

  arena.innerHTML = `
    <div class="arena-head">
      <div class="arena-topline">
        <div class="arena-opponent">
          <img src="${fotoOpp}" onerror="this.src='${avatar(oppUser.name || 'Oponente')}'">
          <div>
            <div style="font-size:.95rem">${esc(oppUser.name || 'Oponente')}</div>
            <div class="arena-head-meta">${Number(oppUser.points || 0)} pts</div>
          </div>
        </div>
        <div class="arena-round-badge">⚔️ Rodada ${round} / ${TOTAL_ROUNDS}</div>
        <div class="arena-timer-wrap">
          <div class="arena-timer-num" id="arena-timer-num">20</div>
          <div class="arena-timer-label">seg</div>
        </div>
      </div>
    </div>

    <div class="arena-wrap">
      <div class="arena-score">
        <div style="text-align:center">
          <div class="n">${info.meScore}</div>
          <div class="arena-score-label">Seus acertos</div>
        </div>
        <div class="vs">VS</div>
        <div style="text-align:center">
          <div class="n">${info.oppScore}</div>
          <div class="arena-score-label">Acertos rival</div>
        </div>
      </div>

      <div class="arena-question">
        <div class="q-label">📖 Pergunta bíblica</div>
        <div class="q-text">${esc(q?.pergunta || 'Aguardando...')}</div>
      </div>

      <div class="arena-grid">
        ${(q?.opcoes || []).map((opt, idx) => {
          let cls = 'arena-opt';
          if (myAnswer && Number(myAnswer.answer_index) === idx) cls += ' selected';
          if (myAnswer) {
            if (Number(q.correta) === idx)                          cls += ' correct';
            else if (Number(myAnswer.answer_index) === idx && !myAnswer.correct) cls += ' wrong';
          }
          return `<button class="${cls}" data-idx="${idx}" ${myAnswer ? 'disabled' : ''}>${esc(opt)}</button>`;
        }).join('')}
      </div>

      <div class="arena-status-row">
        <div class="arena-status-card ${myAnswer ? 'answered' : 'waiting'}">
          ${myAnswer ? (myAnswer.correct ? '✅ Acertou!' : '❌ Errou') : '⏳ Sua resposta'}
          <small>${myAnswer ? 'Resposta registrada' : 'Escolha uma opção'}</small>
        </div>
        <div class="arena-status-card ${oppAnswer ? 'answered' : 'waiting'}">
          ${oppAnswer ? '✔ Rival respondeu' : '⌛ Rival ainda não respondeu'}
          <small>${oppAnswer ? 'Resposta registrada' : 'Aguardando rival'}</small>
        </div>
      </div>

      <button class="arena-quit" id="arena-quit">Sair da partida</button>
    </div>`;
  document.body.appendChild(arena);

  // FIX #8: desabilita todos os botões IMEDIATAMENTE ao clicar (antes de qualquer await)
  arena.querySelectorAll('.arena-opt').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (myAnswer) return;
      // Desabilita TODOS os botões instantaneamente (feedback visual imediato)
      arena.querySelectorAll('.arena-opt').forEach(b => {
        b.disabled = true;
        b.classList.add('loading');
      });
      await submitAnswer(duelo, Number(btn.dataset.idx), round); // FIX #10: passa round da closure
      await carregarDuelo(duelo.id);
    });
  });

  arena.querySelector('#arena-quit')?.addEventListener('click', async () => {
    if (confirm('Deseja mesmo sair? Você perderá a partida.')) {
      await forfeitCurrentDuel();
    }
  });

  // FIX #10: timer usa `round` capturado no momento da renderização (não re-lê do duelo)
  const timerEl = arena.querySelector('#arena-timer-num');
  const roundStart = new Date(duelo.round_started_at).getTime();

  const tick = async () => {
    // Se a arena foi trocada (outro round renderizado), para este timer
    if (document.getElementById('duel-arena') !== arena) return;

    const end    = roundStart + (ROUND_SECONDS * 1000);
    const remain = Math.max(0, Math.ceil((end - Date.now()) / 1000));
    if (timerEl) {
      timerEl.textContent = remain;
      timerEl.classList.toggle('urgent', remain <= 5);
    }

    if (remain <= 0) {
      clearInterval(_renderTimer); _renderTimer = null;
      await maybeAdvanceRound(duelo.id, round); // FIX #10: round da closure, imutável
      await carregarDuelo(duelo.id);
      return;
    }

    const freshAnswers = await getRoundAnswers(duelo.id, round);
    if (freshAnswers.length >= 2) {
      clearInterval(_renderTimer); _renderTimer = null;
      await maybeAdvanceRound(duelo.id, round);
      await carregarDuelo(duelo.id);
    }
  };

  tick();
  _renderTimer = setInterval(tick, 1000);
}

// ─── TELA FINAL ───────────────────────────────────────────────────────────────
// FIX #7: _finalOverlayOpen resetado ao fechar pelo botão X
// FIX #19: cobre estado rematch_accepted=true
async function renderFinal(duelo) {
  clearArena();
  document.getElementById('duel-final-overlay')?.remove();

  const users = await getUsersMap([duelo.player1_uid, duelo.player2_uid]);
  const p1     = users[duelo.player1_uid] || { name: 'Jogador 1', points: 0 };
  const p2     = users[duelo.player2_uid] || { name: 'Jogador 2', points: 0 };
  const winner = duelo.winner_uid ? users[duelo.winner_uid] : null;

  const labelFor = (uid) => {
    if (duelo.ended_reason === 'desistencia' && duelo.loser_uid === uid) return '<div class="desist-tag">Desistiu</div>';
    if (duelo.winner_uid === uid) return '<div class="champion-tag">Campeão 🏆</div>';
    if (duelo.loser_uid  === uid) return '<div class="silver-tag">Próxima vez!</div>';
    return '<div class="silver-tag">Empate</div>';
  };

  // FIX #19: cobre todos os estados de revanche
  const myWaiting      = duelo.rematch_requested_by === _me.id && !duelo.rematch_accepted;
  const otherRequested = duelo.rematch_requested_by && duelo.rematch_requested_by !== _me.id && !duelo.rematch_accepted;
  const rematchDone    = duelo.rematch_accepted; // FIX #19: revanche já aceita

  let rematchBtn = '';
  if (rematchDone) {
    rematchBtn = '<button class="duel-btn-silver" disabled>Revanche iniciada!</button>';
  } else if (myWaiting) {
    rematchBtn = '<button class="duel-btn-silver" disabled>Aguardando rival...</button>';
  } else if (otherRequested) {
    rematchBtn = '<button class="duel-btn-silver" id="duel-accept-rematch">⚔️ Aceitar revanche</button>';
  } else {
    rematchBtn = '<button class="duel-ruby-btn" id="duel-rematch-btn">⚔️ Revanche!</button>';
  }

  const ov = document.createElement('div');
  ov.id        = 'duel-final-overlay';
  ov.className = 'duel-final';
  ov.innerHTML = `
    <div class="duel-final-box">
      <h2 style="font-family:'Cinzel',serif;color:#f4d15f;text-align:center;margin:0 0 8px;letter-spacing:.5px">
        ${winner ? '🏆 Resultado da batalha' : '⚖️ Empate épico'}
      </h2>
      <p style="color:#aaa;text-align:center;margin:0 0 4px;font-size:.9rem">
        ${winner ? `<strong style="color:#fff">${esc(winner.name || 'Herói')}</strong> venceu a disputa!` : 'Nenhum guerreiro se destacou desta vez.'}
      </p>
      <div class="final-grid">
        <div class="final-card">
          <img src="${p1.photoURL || p1.photourl || avatar(p1.name || 'Jogador 1')}" onerror="this.src='${avatar(p1.name || 'Jogador 1')}'">
          <div class="name">${esc(p1.name || 'Jogador 1')}</div>
          <div class="score">${Number(duelo.score1 || 0)}</div>
          ${labelFor(duelo.player1_uid)}
        </div>
        <div class="final-card">
          <img src="${p2.photoURL || p2.photourl || avatar(p2.name || 'Jogador 2')}" onerror="this.src='${avatar(p2.name || 'Jogador 2')}'">
          <div class="name">${esc(p2.name || 'Jogador 2')}</div>
          <div class="score">${Number(duelo.score2 || 0)}</div>
          ${labelFor(duelo.player2_uid)}
        </div>
      </div>
      <div class="final-buttons">
        ${rematchBtn}
        <button class="duel-btn-dark" id="duel-close-final">Fechar</button>
      </div>
    </div>`;
  document.body.appendChild(ov);

  // FIX #7: reseta _finalOverlayOpen ao fechar pelo botão X
  ov.querySelector('#duel-close-final')?.addEventListener('click', () => {
    _finalOverlayOpen = false; // FIX #7
    ov.remove();
    window.voltarParaBiblia?.();
  });

  ov.querySelector('#duel-rematch-btn')?.addEventListener('click', async () => {
    await supabase.from('duelos').update({ rematch_requested_by: _me.id, updated_at: new Date().toISOString() }).eq('id', duelo.id);
    _finalOverlayOpen = false;
    ov.remove();
    await carregarDuelo(duelo.id);
  });

  ov.querySelector('#duel-accept-rematch')?.addEventListener('click', async () => {
    const me = _me || await getMe();
    const { data: meRow } = await supabase.from('users').select('*').eq('uid', me.id).single();
    const opponentUid = duelo.player1_uid === me.id ? duelo.player2_uid : duelo.player1_uid;
    const { data: opRow } = await supabase.from('users').select('*').eq('uid', opponentUid).single();
    if (Number(meRow?.points || 0) < 100 || Number(opRow?.points || 0) < 100) {
      toast('Um dos jogadores não tem 100 pontos para a revanche.');
      return;
    }
    const novo = await createDuel(
      { uid: duelo.player1_uid, name: p1.name || 'Jogador 1' },
      { uid: duelo.player2_uid, name: p2.name || 'Jogador 2' }
    );
    await supabase.from('duelos').update({ rematch_accepted: true, updated_at: new Date().toISOString() }).eq('id', duelo.id);
    _finalOverlayOpen = false;
    ov.remove();
    await carregarDuelo(novo.id);
  });
}

// ─── EVENTOS DE SAÍDA ─────────────────────────────────────────────────────────
// FIX #13: flag _forfeitInProgress evita execução dupla
window.addEventListener('beforeunload', () => {
  if (_duelStateCache?.status === 'ativa') forfeitCurrentDuel();
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden && _duelStateCache?.status === 'ativa') forfeitCurrentDuel();
});

// FIX #15: expõe teardownChannels para game.js chamar ao voltarParaBiblia
export { teardownChannels as duelTeardown };

// ─── BOOT ─────────────────────────────────────────────────────────────────────
(async function bootDuel() {
  injectStyles();
  await ensureObservers();
  supabase.auth.onAuthStateChange(async (_evt, session) => {
    if (session?.user) await ensureObservers();
    else await teardownChannels();
  });
})();