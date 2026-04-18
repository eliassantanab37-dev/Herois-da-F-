
import { supabase } from './config.js';

const ROUND_SECONDS = 20;
const TOTAL_ROUNDS = 10;
const DUEL_WIN_POINTS = 100;
const ONLINE_MS = 90000;

let _me = null;
let _inviteChannel = null;
let _duelChannel = null;
let _answersChannel = null;
let _renderTimer = null;
let _duelStateCache = null;
let _currentDuelId = null;
let _finalOverlayOpen = false;
window.__duelRankingContextByUid = window.__duelRankingContextByUid || {};

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
  {id:'q047',p:'Em qual livro está escrito: “No princípio era o Verbo”?',a:['João','Gênesis','Hebreus','Apocalipse'],c:0},
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
  {id:'q060',p:'Qual rainha visitou Salomão para testar sua sabedoria?',a:['Rainha de Sabá','Jezabel','Atalias','Débora'],c:0}
];

function injectStyles(){
  if (document.getElementById('duel-styles-final')) return;
  const s = document.createElement('style');
  s.id = 'duel-styles-final';
  s.textContent = `
  .presence-dot{position:absolute;right:1px;bottom:1px;width:12px;height:12px;border-radius:50%;border:2px solid #111;z-index:3}
  .presence-dot.online{background:#00e676;box-shadow:0 0 8px #00e676,0 0 16px rgba(0,230,118,.5);animation:pdPulse 1.8s ease infinite}
  .presence-dot.offline{background:#f44336;box-shadow:0 0 8px rgba(244,67,54,.35)}
  @keyframes pdPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.14)}}
  .duel-ruby-btn{position:relative;overflow:hidden;background:linear-gradient(135deg,#6e020f 0%,#8f0617 22%,#c11b34 48%,#ef5b71 65%,#8b0617 100%);color:#fff;border:1px solid rgba(255,175,185,.4);border-radius:14px;padding:14px 22px;font-family:'Cinzel',serif;font-weight:800;letter-spacing:.6px;cursor:pointer;box-shadow:0 14px 28px rgba(175,18,49,.28),inset 0 1px 0 rgba(255,255,255,.22),inset 0 -8px 18px rgba(72,0,12,.28)}
  .duel-ruby-btn::before{content:'';position:absolute;top:0;left:-70%;width:40%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.35),transparent);transform:skewX(-22deg);animation:duelRubyShine 2.4s linear infinite}
  @keyframes duelRubyShine{from{left:-70%}to{left:130%}}
  .duel-overlay,.duel-final,.duel-rematch{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.82);backdrop-filter:blur(10px)}
  .duel-box{width:min(92vw,420px);background:linear-gradient(170deg,#160607 0%,#0d0d0d 70%);border:1px solid rgba(212,175,55,.28);border-radius:22px;padding:28px 22px;box-shadow:0 24px 60px rgba(0,0,0,.6)}
  .duel-box h3,.duel-box h2{margin:0 0 8px;font-family:'Cinzel',serif;color:#f4d15f;text-align:center}
  .duel-box p{margin:0 0 18px;color:#f5f5f5;text-align:center;line-height:1.5}
  .duel-actions{display:grid;grid-template-columns:1fr 1fr;gap:12px}
  .duel-btn-silver{position:relative;overflow:hidden;background:linear-gradient(135deg,rgba(52,52,52,.95),rgba(130,130,130,.95) 48%,rgba(235,235,235,.98) 60%,rgba(84,84,84,.96));color:#fff;border:1px solid rgba(255,255,255,.15);border-radius:14px;padding:14px 18px;font-weight:800;cursor:pointer;box-shadow:0 14px 24px rgba(0,0,0,.24),inset 0 1px 0 rgba(255,255,255,.18)}
  .duel-btn-silver::before{content:'';position:absolute;top:0;left:-70%;width:40%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.45),transparent);transform:skewX(-22deg);animation:silverShine 2.4s linear infinite}
  @keyframes silverShine{from{left:-70%}to{left:130%}}
  .duel-btn-dark{background:#232323;color:#b5b5b5;border:1px solid #3b3b3b;border-radius:14px;padding:14px 18px;font-weight:700;cursor:pointer}
  .duel-arena{position:fixed;inset:0;z-index:9998;background:linear-gradient(180deg,#0a0000 0%,#130505 30%,#070707 100%);overflow:auto}
  .duel-arena .arena-wrap{max-width:760px;margin:0 auto;padding:0 14px 24px}
  .arena-head{position:sticky;top:0;z-index:4;background:rgba(0,0,0,.78);backdrop-filter:blur(10px);border-bottom:1px solid rgba(212,175,55,.25);padding:14px}
  .arena-topline{display:flex;align-items:center;justify-content:space-between;gap:10px}
  .arena-opponent{display:flex;align-items:center;gap:10px;color:#f7dd85;font-weight:800}
  .arena-opponent img{width:48px;height:48px;border-radius:50%;border:2px solid #d4af37;object-fit:cover}
  .arena-head-meta{color:#d4af37;font-family:'Cinzel',serif;font-size:.95rem;font-weight:800}
  .arena-question{margin-top:18px;background:rgba(255,255,255,.04);border:1px solid rgba(212,175,55,.2);border-radius:18px;padding:18px;color:#fff}
  .arena-question .q-label{color:#d4af37;font-size:.8rem;letter-spacing:.5px;margin-bottom:10px;font-weight:700}
  .arena-question .q-text{font-size:1.1rem;line-height:1.55}
  .arena-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px}
  .arena-opt{border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#fff;border-radius:14px;padding:14px 12px;min-height:60px;text-align:center;font-weight:700;cursor:pointer;transition:.18s}
  .arena-opt:hover:not(:disabled){border-color:#d4af37;background:rgba(212,175,55,.12)}
  .arena-opt:disabled{opacity:.92;cursor:not-allowed}
  .arena-opt.selected{border-color:#d4af37;background:rgba(212,175,55,.14)}
  .arena-opt.correct{border-color:#2ecc71;background:rgba(46,204,113,.18);color:#a2ffca}
  .arena-opt.wrong{border-color:#ff6b6b;background:rgba(255,107,107,.12);color:#ffc8c8}
  .arena-status-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:14px}
  .arena-status-card{border:1px solid rgba(212,175,55,.18);background:rgba(255,255,255,.03);border-radius:14px;padding:12px;text-align:center;color:#d4af37;font-weight:700}
  .arena-status-card small{display:block;color:#9e9e9e;font-weight:500;margin-top:6px}
  .arena-timer{margin-top:16px;text-align:center;color:#f6d875;font-family:'Cinzel',serif;font-size:1.2rem;font-weight:900}
  .arena-score{display:flex;justify-content:space-between;align-items:center;margin-top:16px;padding:12px 16px;border:1px solid rgba(212,175,55,.18);border-radius:16px;background:rgba(255,255,255,.03)}
  .arena-score .n{font-size:1.8rem;font-family:'Cinzel',serif;color:#f6d875}
  .arena-quit{margin-top:18px;width:100%;background:#262626;color:#c8c8c8;border:1px solid #3a3a3a;border-radius:14px;padding:13px;font-weight:700;cursor:pointer}
  .champion-tag{display:inline-block;margin-top:8px;padding:6px 12px;border-radius:999px;background:linear-gradient(90deg,#a46c00,#d4af37,#fff1a8,#d4af37,#a46c00);background-size:200% 100%;color:#1a1200;font-weight:900;animation:championGlow 2.2s linear infinite;box-shadow:0 0 14px rgba(212,175,55,.35)}
  @keyframes championGlow{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  .silver-tag{display:inline-block;margin-top:8px;padding:6px 12px;border-radius:999px;background:linear-gradient(90deg,#676767,#d9d9d9,#8f8f8f);background-size:200% 100%;color:#1c1c1c;font-weight:900;animation:championGlow 2.2s linear infinite}
  .desist-tag{display:inline-block;margin-top:8px;padding:6px 12px;border-radius:999px;background:#d2d2d2;color:#4d4d4d;font-weight:900}
  .final-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:18px}
  .final-card{border:1px solid rgba(212,175,55,.18);border-radius:18px;padding:14px;background:rgba(255,255,255,.03);text-align:center}
  .final-card img{width:64px;height:64px;border-radius:50%;border:2px solid #d4af37;object-fit:cover}
  .final-card .name{margin-top:10px;color:#fff;font-weight:800}
  .final-card .score{color:#f6d875;font-size:1.6rem;font-family:'Cinzel',serif;font-weight:900}
  .final-buttons{display:grid;grid-template-columns:1fr;gap:12px;margin-top:18px}
  @media (max-width:640px){.arena-grid{grid-template-columns:1fr}.final-grid{grid-template-columns:1fr 1fr}}
  `;
  document.head.appendChild(s);
}

function avatar(nome='?'){
  const ini = String(nome||'?').trim().split(/\s+/).map(p=>p[0]).join('').slice(0,2).toUpperCase() || '?';
  const cor = ['#d4af37','#2ecc71','#4a90e2','#e74c3c','#9b59b6'][Math.abs((nome||'').charCodeAt(0)||0)%5];
  return `data:image/svg+xml;base64,${btoa(`<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="${cor}"/><text x="100" y="108" font-size="80" font-weight="bold" fill="white" text-anchor="middle" font-family="Arial">${ini}</text></svg>`)}`;
}
function esc(v=''){return String(v).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
function isOnline(user){const t=user?.lastUpdate||user?.lastupdate; return !!(t && (Date.now()-new Date(t).getTime()<ONLINE_MS));}
function sleep(ms){return new Promise(r=>setTimeout(r,ms));}

function calcNivel(pts){
  if (pts < 100) return 'Servo Fiel';
  if (pts < 500) return 'Levita Louvador';
  if (pts < 1000) return 'Soldado de Cristo';
  if (pts < 2000) return 'Semeador da Palavra';
  if (pts < 3000) return 'Missionário(a)';
  if (pts < 4500) return 'Guarda de Sião';
  if (pts < 6000) return 'Vencedor em Cristo';
  if (pts < 8000) return 'Ungido por Deus';
  if (pts < 10500) return 'Fiel Adorador';
  if (pts < 13500) return 'Embaixador do Reino';
  if (pts < 17000) return 'Apóstolo';
  if (pts < 21000) return 'Profeta de Deus';
  if (pts < 26000) return 'Guerreiro de Gileade';
  if (pts < 32000) return 'Herdeiro do Eterno';
  return 'Herói da Fé Eterno';
}

function teardownChannels(){
  if (_inviteChannel) { supabase.removeChannel(_inviteChannel); _inviteChannel = null; }
  if (_duelChannel) { supabase.removeChannel(_duelChannel); _duelChannel = null; }
  if (_answersChannel) { supabase.removeChannel(_answersChannel); _answersChannel = null; }
  if (_renderTimer) { clearInterval(_renderTimer); _renderTimer = null; }
  _duelStateCache = null;
  _currentDuelId = null;
  _finalOverlayOpen = false;
}

async function getMe(){
  const { data: { user } } = await supabase.auth.getUser();
  return user || null;
}

async function ensureObservers(){
  injectStyles();
  const me = await getMe();
  if (!me?.id) { teardownChannels(); _me=null; return; }
  if (_me?.id === me.id && _inviteChannel && _duelChannel && _answersChannel) return;
  teardownChannels();
  _me = me;

  _inviteChannel = supabase
    .channel('duel-invites-'+me.id)
    .on('postgres_changes',{event:'INSERT',schema:'public',table:'desafios_duelo',filter:`para_uid=eq.${me.id}`}, async (payload)=>{
      if (payload.new?.status === 'pendente') mostrarConviteDesafio(payload.new);
    })
    .on('postgres_changes',{event:'UPDATE',schema:'public',table:'desafios_duelo',filter:`para_uid=eq.${me.id}`}, async (payload)=>{
      if (payload.new?.status === 'pendente') mostrarConviteDesafio(payload.new);
    })
    .subscribe();

  const duelFilter = `player1_uid=eq.${me.id}`;
  const duelFilter2 = `player2_uid=eq.${me.id}`;
  _duelChannel = supabase.channel('duels-'+me.id)
    .on('postgres_changes',{event:'*',schema:'public',table:'duelos',filter:duelFilter}, ()=> carregarDueloAtivo())
    .on('postgres_changes',{event:'*',schema:'public',table:'duelos',filter:duelFilter2}, ()=> carregarDueloAtivo())
    .subscribe();

  _answersChannel = supabase.channel('duel-answers-'+me.id)
    .on('postgres_changes',{event:'*',schema:'public',table:'duelo_respostas'}, ()=> {
      if (_currentDuelId) carregarDuelo(_currentDuelId);
    })
    .subscribe();

  carregarDueloAtivo();
}

async function carregarDueloAtivo(){
  if (!_me?.id) return;
  const { data } = await supabase
    .from('duelos')
    .select('*')
    .or(`player1_uid.eq.${_me.id},player2_uid.eq.${_me.id}`)
    .in('status',['ativa','finalizada','desistida'])
    .order('id',{ascending:false})
    .limit(1);
  const duelo = data?.[0];
  if (!duelo) return;
  await carregarDuelo(duelo.id);
}

async function carregarDuelo(id){
  const { data: duelo, error } = await supabase.from('duelos').select('*').eq('id', id).maybeSingle();
  if (error || !duelo) return;
  _currentDuelId = duelo.id;
  _duelStateCache = duelo;

  if (duelo.status === 'ativa') {
    _finalOverlayOpen = false;
    await renderArena(duelo);
  } else if ((duelo.status === 'finalizada' || duelo.status === 'desistida') && !_finalOverlayOpen) {
    _finalOverlayOpen = true;
    await renderFinal(duelo);
  }
}

async function getUsersMap(ids){
  const uniq = [...new Set(ids.filter(Boolean))];
  if (!uniq.length) return {};
  const { data } = await supabase.from('users').select('*').in('uid', uniq);
  const map = {};
  (data || []).forEach(u => map[u.uid]=u);
  return map;
}

async function pickQuestions(player1, player2){
  const { data: usados } = await supabase
    .from('duelo_perguntas_usadas')
    .select('question_id')
    .in('uid', [player1, player2]);
  const usedIds = new Set((usados || []).map(r=>r.question_id));
  let pool = QUESTION_BANK.filter(q => !usedIds.has(q.id));
  if (pool.length < TOTAL_ROUNDS) pool = [...QUESTION_BANK];
  pool = [...pool].sort(()=>Math.random()-0.5).slice(0, TOTAL_ROUNDS);
  const questions = pool.map((q) => {
    const options = q.a.map((text, idx) => ({ text, orig: idx })).sort(()=>Math.random()-0.5);
    const correctIndex = options.findIndex(o => o.orig === q.c);
    return { id: q.id, pergunta: q.p, opcoes: options.map(o => o.text), correta: correctIndex };
  });
  const rows = [];
  for (const q of questions){
    rows.push({uid:player1, question_id:q.id, created_at:new Date().toISOString()});
    rows.push({uid:player2, question_id:q.id, created_at:new Date().toISOString()});
  }
  await supabase.from('duelo_perguntas_usadas').insert(rows);
  return questions;
}

async function createDuel(player1, player2){
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

async function getOpenPendingInvite(toUid, fromUid){
  const { data } = await supabase.from('desafios_duelo').select('*').eq('de_uid', fromUid).eq('para_uid', toUid).eq('status','pendente').order('id',{ascending:false}).limit(1);
  return data?.[0] || null;
}

window.iniciarDesafioUsuario = async function(target){
  await ensureObservers();
  const me = _me || await getMe();
  if (!me?.id) return;
  if (!target?.uid || target.uid === me.id) return;
  if (Number(target.points || 0) < 100) return toast('Esse jogador ainda não tem 100 pontos.');

  const { data: meuRow } = await supabase.from('users').select('name, photoURL, photourl, points').eq('uid', me.id).single();
  const myPoints = Number(meuRow?.points || 0);
  if (myPoints < 100) return toast('Você precisa de pelo menos 100 pontos para desafiar.');

  const existingActive = await supabase.from('duelos').select('id,status').or(`and(player1_uid.eq.${me.id},player2_uid.eq.${target.uid}),and(player1_uid.eq.${target.uid},player2_uid.eq.${me.id})`).eq('status','ativa').limit(1);
  if ((existingActive.data || []).length) return toast('Já existe uma partida ativa com esse jogador.');

  const openInvite = await getOpenPendingInvite(target.uid, me.id);
  if (openInvite) return toast('Desafio já enviado.');

  const now = new Date().toISOString();
  const payload = {
    de_uid: me.id,
    de_nome: meuRow?.name || 'Herói',
    de_foto: meuRow?.photoURL || meuRow?.photourl || avatar(meuRow?.name || 'Herói'),
    para_uid: target.uid,
    para_nome: target.nome || 'Herói',
    para_foto: target.foto || avatar(target.nome || 'Herói'),
    status: 'pendente',
    created_at: now,
    updated_at: now,
  };
  const { error } = await supabase.from('desafios_duelo').insert(payload);
  if (error) { console.error(error); toast('Não foi possível enviar o desafio.'); return; }
  showChallengedAnimation(target.nome || 'Herói');
};

function showChallengedAnimation(nome){
  document.querySelector('.duel-rematch')?.remove();
  const ov = document.createElement('div');
  ov.className = 'duel-rematch';
  ov.innerHTML = `<div class="duel-box"><h2>⚔️ Desafio enviado</h2><p>Você desafiou <strong>${esc(nome)}</strong>.</p></div>`;
  document.body.appendChild(ov);
  setTimeout(()=> ov.remove(), 1600);
}

function toast(text){
  const el = document.createElement('div');
  el.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:10001;background:#111;color:#f6d875;padding:12px 18px;border-radius:999px;border:1px solid rgba(212,175,55,.3);box-shadow:0 10px 20px rgba(0,0,0,.35)';
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(), 2000);
}

async function mostrarConviteDesafio(invite){
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
        <button class="duel-btn-dark" id="duel-decline">Recusar</button>
      </div>
    </div>`;
  document.body.appendChild(ov);
  ov.querySelector('#duel-decline')?.addEventListener('click', async ()=>{
    await supabase.from('desafios_duelo').update({status:'recusado',updated_at:new Date().toISOString()}).eq('id', invite.id);
    ov.remove();
  });
  ov.querySelector('#duel-accept')?.addEventListener('click', async ()=>{
    try {
      const me = _me || await getMe();
      const { data: meRow } = await supabase.from('users').select('name, photoURL, photourl, points').eq('uid', me.id).single();
      if (Number(meRow?.points || 0) < 100) { toast('Você precisa de 100 pontos para aceitar.'); return; }
      const { data: challenger } = await supabase.from('users').select('name, photoURL, photourl, points').eq('uid', invite.de_uid).single();
      if (Number(challenger?.points || 0) < 100) { toast('O desafiante não tem mais 100 pontos.'); return; }
      const duelo = await createDuel(
        { uid: invite.de_uid, name: challenger?.name || invite.de_nome, foto: challenger?.photoURL || challenger?.photourl || invite.de_foto },
        { uid: me.id, name: meRow?.name || 'Herói', foto: meRow?.photoURL || meRow?.photourl || avatar(meRow?.name || 'Herói') }
      );
      await supabase.from('desafios_duelo').update({status:'aceito', duelo_id: duelo.id, updated_at:new Date().toISOString()}).eq('id', invite.id);
      ov.remove();
      await carregarDuelo(duelo.id);
    } catch (e) { console.error(e); toast('Não foi possível iniciar o duelo.'); }
  });
}

export async function renderizarRankingComPresenca(eu){
  injectStyles();
  const container = document.getElementById('ranking-lista');
  if (!container) return;
  await ensureObservers();
  const { data: usuarios } = await supabase.from('users').select('uid,name,points,photoURL,photourl,lastUpdate,lastupdate').order('points',{ascending:false}).limit(50);
  if (!usuarios) return;
  let html = `<div style="max-width:700px;margin:0 auto;">`;
  usuarios.forEach((u, index) => {
    const isMe = eu?.id === u.uid;
    const foto = u.photoURL || u.photourl || avatar(u.name || 'Herói');
    const titulo = calcNivel(Number(u.points || 0));
    const nome = u.name ? (u.name.length > 12 ? u.name.substring(0,12)+'…' : u.name) : 'Herói';
    const online = isOnline(u);
    window.__duelRankingContextByUid[u.uid] = { uid:u.uid, nome:u.name || 'Herói', foto, points:Number(u.points || 0), online };
    let rankConteudo = index + 1;
    if (index === 0) rankConteudo = `<div class="trofeu-container"><div class="aura-flamejante aura-ouro"></div><div class="trofeu-icone">🏆</div></div>`;
    else if (index === 1) rankConteudo = `<div class="trofeu-container"><div class="aura-flamejante aura-prata"></div><div class="trofeu-icone">🥈</div></div>`;
    else if (index === 2) rankConteudo = `<div class="trofeu-container"><div class="aura-flamejante aura-bronze"></div><div class="trofeu-icone">🥉</div></div>`;
    html += `
      <div onclick="window.verPerfilDetalhado('${u.uid}')" style="display:flex;align-items:center;gap:12px;padding:12px;margin-bottom:10px;cursor:pointer;transition:transform .2s;background:${index < 3 ? 'rgba(212,175,55,0.25)' : isMe ? 'rgba(212,175,55,0.15)' : 'rgba(0,0,0,0.4)'};border:1px solid ${index < 3 ? '#d4af37' : '#333'};border-radius:12px;backdrop-filter:blur(5px);" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
        <div style="width:45px;display:flex;justify-content:center;align-items:center;font-family:'Cinzel';font-weight:bold;color:#d4af37;">${rankConteudo}</div>
        <div style="position:relative;flex-shrink:0;">
          <img src="${foto}" style="width:48px;height:48px;border-radius:50%;border:2px solid #d4af37;object-fit:cover;display:block" onerror="this.src='${avatar(u.name || 'Herói')}'">
          <div class="presence-dot ${online ? 'online' : 'offline'}"></div>
        </div>
        <div style="flex:1;text-align:left;">
          <div style="color:white;font-weight:bold;">${esc(nome)} ${isMe ? '<span style="color:#d4af37;font-size:.75rem;">(você)</span>' : ''}</div>
          <div class="nivel-chamas-ouro">${esc(titulo)}</div>
          <div style="color:#d4af37;font-size:.8rem;font-weight:bold;margin-top:2px;">${Number(u.points || 0)} PTS</div>
        </div>
      </div>`;
  });
  container.innerHTML = html + '</div>';
}

function duelPlayers(duelo){
  const meIsP1 = duelo.player1_uid === _me.id;
  return {
    meUid: _me.id,
    oppUid: meIsP1 ? duelo.player2_uid : duelo.player1_uid,
    meScore: meIsP1 ? Number(duelo.score1 || 0) : Number(duelo.score2 || 0),
    oppScore: meIsP1 ? Number(duelo.score2 || 0) : Number(duelo.score1 || 0),
    meSlot: meIsP1 ? 1 : 2,
    oppSlot: meIsP1 ? 2 : 1,
  };
}

async function getRoundAnswers(duelId, roundNumber){
  const { data } = await supabase.from('duelo_respostas').select('*').eq('duelo_id', duelId).eq('round_number', roundNumber);
  return data || [];
}

function questionForRound(duelo, roundNumber){
  const arr = Array.isArray(duelo.questions) ? duelo.questions : [];
  return arr[roundNumber - 1] || null;
}

async function submitAnswer(duelo, answerIndex){
  const info = duelPlayers(duelo);
  const round = Number(duelo.current_round || 1);
  const q = questionForRound(duelo, round);
  if (!q) return;
  const existing = await getRoundAnswers(duelo.id, round);
  if (existing.some(r => r.uid === _me.id)) return;
  const correct = Number(answerIndex) === Number(q.correta);
  const { error } = await supabase.from('duelo_respostas').insert({
    duelo_id: duelo.id,
    round_number: round,
    uid: _me.id,
    answer_index: Number(answerIndex),
    correct,
    responded_at: new Date().toISOString(),
  });
  if (error) { console.error(error); toast('Não foi possível registrar sua resposta.'); return; }
  await maybeAdvanceRound(duelo.id, round);
}

async function maybeAdvanceRound(duelId, roundNumber){
  const { data: duelo } = await supabase.from('duelos').select('*').eq('id', duelId).maybeSingle();
  if (!duelo || duelo.status !== 'ativa' || Number(duelo.current_round) !== Number(roundNumber)) return;
  const answers = await getRoundAnswers(duelId, roundNumber);
  const deadline = new Date(duelo.round_started_at).getTime() + (ROUND_SECONDS * 1000);
  const bothAnswered = answers.length >= 2;
  const timeUp = Date.now() >= deadline;
  if (!bothAnswered && !timeUp) return;

  const p1Ans = answers.find(r => r.uid === duelo.player1_uid);
  const p2Ans = answers.find(r => r.uid === duelo.player2_uid);
  const add1 = p1Ans?.correct ? 1 : 0;
  const add2 = p2Ans?.correct ? 1 : 0;
  const newScore1 = Number(duelo.score1 || 0) + add1;
  const newScore2 = Number(duelo.score2 || 0) + add2;
  const now = new Date().toISOString();

  if (roundNumber >= TOTAL_ROUNDS) {
    let status = 'finalizada';
    let winner = null;
    let loser = null;
    if (newScore1 > newScore2) { winner = duelo.player1_uid; loser = duelo.player2_uid; }
    else if (newScore2 > newScore1) { winner = duelo.player2_uid; loser = duelo.player1_uid; }
    const { data: updated } = await supabase.from('duelos').update({
      score1: newScore1,
      score2: newScore2,
      status,
      winner_uid: winner,
      loser_uid: loser,
      ended_reason: 'fim_normal',
      updated_at: now,
    }).eq('id', duelId).eq('status', 'ativa').eq('current_round', roundNumber).select('*').maybeSingle();
    if (updated) await applyPointsIfNeeded(updated);
    return;
  }

  await supabase.from('duelos').update({
    score1: newScore1,
    score2: newScore2,
    current_round: roundNumber + 1,
    round_started_at: now,
    updated_at: now,
  }).eq('id', duelId).eq('status', 'ativa').eq('current_round', roundNumber);
}

async function applyPointsIfNeeded(duelo){
  if (duelo.points_applied) return;
  const now = new Date().toISOString();
  const { data: flag } = await supabase.from('duelos').update({ points_applied: true, updated_at: now }).eq('id', duelo.id).eq('points_applied', false).select('id').maybeSingle();
  if (!flag) return;

  if (!duelo.winner_uid || !duelo.loser_uid) return; // empate

  const { data: rows } = await supabase.from('users').select('uid, points').in('uid', [duelo.winner_uid, duelo.loser_uid]);
  const map = {};
  (rows || []).forEach(r => map[r.uid] = Number(r.points || 0));
  await supabase.from('users').update({ points: (map[duelo.winner_uid] || 0) + DUEL_WIN_POINTS, lastUpdate: now, lastupdate: now }).eq('uid', duelo.winner_uid);
  await supabase.from('users').update({ points: Math.max(0, (map[duelo.loser_uid] || 0) - DUEL_WIN_POINTS), lastUpdate: now, lastupdate: now }).eq('uid', duelo.loser_uid);
  window.dispatchEvent(new CustomEvent('pontos_atualizados', { detail: { uid: duelo.winner_uid } }));
  window.dispatchEvent(new CustomEvent('pontos_atualizados', { detail: { uid: duelo.loser_uid } }));
}

async function forfeitCurrentDuel(){
  if (!_duelStateCache || !_me?.id) return;
  const duelo = _duelStateCache;
  if (duelo.status !== 'ativa') return;
  const opponentUid = duelo.player1_uid === _me.id ? duelo.player2_uid : duelo.player1_uid;
  const now = new Date().toISOString();
  const { data: updated } = await supabase.from('duelos').update({
    status: 'desistida',
    winner_uid: opponentUid,
    loser_uid: _me.id,
    ended_reason: 'desistencia',
    updated_at: now,
  }).eq('id', duelo.id).eq('status','ativa').select('*').maybeSingle();
  if (updated) await applyPointsIfNeeded(updated);
}

function clearArena(){
  document.getElementById('duel-arena')?.remove();
  if (_renderTimer) { clearInterval(_renderTimer); _renderTimer = null; }
}

async function renderArena(duelo){
  clearArena();
  const users = await getUsersMap([duelo.player1_uid, duelo.player2_uid]);
  const info = duelPlayers(duelo);
  const meUser = users[_me.id] || { name:'Você', points:0 };
  const oppUser = users[info.oppUid] || { name:'Oponente', points:0 };
  const q = questionForRound(duelo, Number(duelo.current_round || 1));
  const answers = await getRoundAnswers(duelo.id, Number(duelo.current_round || 1));
  const myAnswer = answers.find(a => a.uid === _me.id) || null;
  const oppAnswer = answers.find(a => a.uid === info.oppUid) || null;

  const arena = document.createElement('div');
  arena.id = 'duel-arena';
  arena.className = 'duel-arena';
  const fotoOpp = oppUser.photoURL || oppUser.photourl || avatar(oppUser.name || 'Oponente');
  const roundsLeft = Number(duelo.current_round || 1);
  arena.innerHTML = `
    <div class="arena-head">
      <div class="arena-topline">
        <div class="arena-opponent">
          <img src="${fotoOpp}" onerror="this.src='${avatar(oppUser.name || 'Oponente')}'">
          <div>
            <div>${esc(oppUser.name || 'Oponente')}</div>
            <div class="arena-head-meta">${Number(oppUser.points || 0)} pts · Rodada ${roundsLeft}</div>
          </div>
        </div>
        <div class="arena-head-meta">20s</div>
      </div>
    </div>
    <div class="arena-wrap">
      <div class="arena-score">
        <div style="text-align:center"><div class="n">${info.meScore}</div><div style="color:#9f9f9f">Seus acertos</div></div>
        <div style="color:#d4af37;font-family:'Cinzel';font-size:1.4rem">VS</div>
        <div style="text-align:center"><div class="n">${info.oppScore}</div><div style="color:#9f9f9f">Acertos rival</div></div>
      </div>
      <div class="arena-question">
        <div class="q-label">Pergunta bíblica</div>
        <div class="q-text">${esc(q?.pergunta || 'Aguardando pergunta...')}</div>
      </div>
      <div class="arena-grid">
        ${(q?.opcoes || []).map((opt, idx) => {
          let cls = 'arena-opt';
          if (myAnswer && Number(myAnswer.answer_index) === idx) cls += ' selected';
          if (myAnswer) {
            if (Number(q.correta) === idx) cls += ' correct';
            else if (Number(myAnswer.answer_index) === idx && !myAnswer.correct) cls += ' wrong';
          }
          return `<button class="${cls}" data-idx="${idx}" ${myAnswer ? 'disabled' : ''}>${esc(opt)}</button>`;
        }).join('')}
      </div>
      <div class="arena-status-row">
        <div class="arena-status-card">${myAnswer ? (myAnswer.correct ? 'Acertou' : 'Errou') : 'Sua resposta pendente'}<small>${myAnswer ? 'Resposta travada' : 'Você ainda pode escolher'}</small></div>
        <div class="arena-status-card">${oppAnswer ? 'Oponente respondeu' : 'Oponente ainda não respondeu'}<small>${oppAnswer ? 'Resposta registrada' : 'Aguardando rival'}</small></div>
      </div>
      <div class="arena-timer" id="arena-timer"></div>
      <button class="arena-quit" id="arena-quit">Sair da partida</button>
    </div>`;
  document.body.appendChild(arena);

  arena.querySelectorAll('.arena-opt').forEach(btn => {
    btn.addEventListener('click', async ()=>{
      if (myAnswer) return;
      await submitAnswer(duelo, Number(btn.dataset.idx));
      await carregarDuelo(duelo.id);
    });
  });
  arena.querySelector('#arena-quit')?.addEventListener('click', async ()=>{
    await forfeitCurrentDuel();
  });

  const timerEl = arena.querySelector('#arena-timer');
  const tick = async () => {
    const end = new Date(duelo.round_started_at).getTime() + (ROUND_SECONDS * 1000);
    const remain = Math.max(0, Math.ceil((end - Date.now()) / 1000));
    if (timerEl) timerEl.textContent = `Tempo restante: ${remain}s`;
    if (remain <= 0) {
      clearInterval(_renderTimer); _renderTimer = null;
      await maybeAdvanceRound(duelo.id, Number(duelo.current_round || 1));
      await carregarDuelo(duelo.id);
    } else {
      const freshAnswers = await getRoundAnswers(duelo.id, Number(duelo.current_round || 1));
      if (freshAnswers.length >= 2) {
        clearInterval(_renderTimer); _renderTimer = null;
        await maybeAdvanceRound(duelo.id, Number(duelo.current_round || 1));
        await carregarDuelo(duelo.id);
      }
    }
  };
  tick();
  _renderTimer = setInterval(tick, 1000);
}

async function renderFinal(duelo){
  clearArena();
  document.getElementById('duel-final-overlay')?.remove();
  const users = await getUsersMap([duelo.player1_uid, duelo.player2_uid]);
  const p1 = users[duelo.player1_uid] || { name:'Jogador 1', points:0 };
  const p2 = users[duelo.player2_uid] || { name:'Jogador 2', points:0 };
  const winner = duelo.winner_uid ? users[duelo.winner_uid] : null;
  const meIsWinner = duelo.winner_uid === _me.id;

  const labelFor = (uid) => {
    if (duelo.ended_reason === 'desistencia' && duelo.loser_uid === uid) return '<div class="desist-tag">Desistiu</div>';
    if (duelo.winner_uid === uid) return '<div class="champion-tag">Campeão</div>';
    if (duelo.loser_uid === uid) return '<div class="silver-tag">Não foi dessa vez</div>';
    return '<div class="silver-tag">Empate</div>';
  };

  const ov = document.createElement('div');
  ov.id = 'duel-final-overlay';
  ov.className = 'duel-final';
  const myWaiting = duelo.rematch_requested_by === _me.id && !duelo.rematch_accepted;
  const otherRequested = duelo.rematch_requested_by && duelo.rematch_requested_by !== _me.id && !duelo.rematch_accepted;
  ov.innerHTML = `
    <div class="duel-box" style="width:min(94vw,520px)">
      <h2>${winner ? '🏆 Resultado da partida' : '⚖️ Empate'}</h2>
      <p>${winner ? `${esc(winner.name || 'Herói')} venceu a disputa.` : 'Ninguém venceu desta vez.'}</p>
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
        ${myWaiting ? '<button class="duel-btn-silver" disabled>Aguarde...</button>' : otherRequested ? '<button class="duel-btn-silver" id="duel-accept-rematch">Aceitar</button>' : '<button class="duel-btn-silver" id="duel-rematch-btn">Outra partida</button>'}
        <button class="duel-btn-dark" id="duel-close-final">Fechar</button>
      </div>
    </div>`;
  document.body.appendChild(ov);
  ov.querySelector('#duel-close-final')?.addEventListener('click', ()=> { ov.remove(); window.voltarParaBiblia?.(); });
  ov.querySelector('#duel-rematch-btn')?.addEventListener('click', async ()=> {
    await supabase.from('duelos').update({ rematch_requested_by: _me.id, updated_at: new Date().toISOString() }).eq('id', duelo.id);
    ov.remove();
    _finalOverlayOpen = false;
    await carregarDuelo(duelo.id);
  });
  ov.querySelector('#duel-accept-rematch')?.addEventListener('click', async ()=> {
    const me = _me || await getMe();
    const { data: meRow } = await supabase.from('users').select('*').eq('uid', me.id).single();
    const opponentUid = duelo.player1_uid === me.id ? duelo.player2_uid : duelo.player1_uid;
    const { data: opRow } = await supabase.from('users').select('*').eq('uid', opponentUid).single();
    if (Number(meRow?.points || 0) < 100 || Number(opRow?.points || 0) < 100) { toast('Um dos jogadores não tem 100 pontos para a revanche.'); return; }
    const novo = await createDuel({uid:duelo.player1_uid,name:(users[duelo.player1_uid]?.name||'Jogador 1')},{uid:duelo.player2_uid,name:(users[duelo.player2_uid]?.name||'Jogador 2')});
    await supabase.from('duelos').update({ rematch_accepted: true, updated_at: new Date().toISOString() }).eq('id', duelo.id);
    ov.remove();
    _finalOverlayOpen = false;
    await carregarDuelo(novo.id);
  });
}

window.addEventListener('beforeunload', ()=> { if (_duelStateCache?.status === 'ativa') { forfeitCurrentDuel(); } });
document.addEventListener('visibilitychange', ()=> { if (document.hidden && _duelStateCache?.status === 'ativa') { forfeitCurrentDuel(); } });

(async function bootDuel(){
  injectStyles();
  await ensureObservers();
  supabase.auth.onAuthStateChange(async (_evt, session) => {
    if (session?.user) await ensureObservers();
    else teardownChannels();
  });
})();