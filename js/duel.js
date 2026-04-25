// js/duel.js — Heróis da Fé — versão sem revanche e com pontos em tempo real

import { supabase } from './config.js';
import { verificarBadgesDuelo } from './badges.js';

// ── CONSTANTES ─────────────────────────────────────────────
const ROUND_SECONDS = 20;
const TOTAL_ROUNDS = 10;
const DUEL_WIN_POINTS = 100;
const ONLINE_MS = 90000;
const INVITE_TTL_MS = 30000;

// ── ESTADO GLOBAL ──────────────────────────────────────────
let _me = null;
let _inviteChannel = null;
let _inviteSentChannel = null;
let _duelChannel = null;
let _answersChannel = null;
let _presenceChannel = null;
let _renderTimer = null;
let _invitePollTimer = null;
let _duelStateCache = null;
let _currentDuelId = null;
let _answerSubmitting = false;
let _aceitando = false;
let _ensureMutex = Promise.resolve();
const _advancingLocks = new Set();
const _closedFinalDuels = new Set();
let _visibilityHandler = null;
// Anti-spam: impede envio de mais de 1 convite para o mesmo alvo em 30s
const _lastInviteCount = {};

// ── BANCO DE QUESTÕES ──────────────────────────────────────
// ── BANCO DE QUESTÕES CORRIGIDO ──────────────────────────────
const QUESTION_BANK = [
  {id:'q001',p:'Quem construiu a arca por mandado de Deus?',a:['Moisés','Abraão','Noé','Davi'],c:2},
  {id:'q002',p:'Qual foi o primeiro milagre de Jesus nas bodas de Caná?',a:['Curar um cego','Transformar água em vinho','Ressuscitar Lázaro','Multiplicar pães'],c:1},
  {id:'q003',p:'Quantos discípulos Jesus escolheu?',a:['7','10','14','12'],c:3},
  {id:'q004',p:'Quem traiu Jesus por 30 moedas de prata?',a:['Pedro','Judas Iscariotes','Tomé','Filipe'],c:1},
  {id:'q005',p:'Em qual cidade Jesus nasceu?',a:['Nazaré','Jerusalém','Belém','Cafarnaum'],c:2},
  {id:'q006',p:'Qual gigante Davi derrotou com uma funda?',a:['Og','Golias','Sísara','Rabe'],c:1},
  {id:'q007',p:'Quem foi lançado na cova dos leões?',a:['Daniel','José','Paulo','Elias'],c:0},
  {id:'q008',p:'Quantos livros tem o Novo Testamento?',a:['39','66','27','12'],c:2},
  {id:'q009',p:'Quem foi engolido por um grande peixe?',a:['Jeremias','Jonas','Elias','Ezequiel'],c:1},
  {id:'q010',p:'Qual é o primeiro livro da Bíblia?',a:['Êxodo','Levítico','Gênesis','Números'],c:2},
  {id:'q011',p:'Qual rio Jesus foi batizado?',a:['Nilo','Jordão','Eufrates','Tigre'],c:1},
  {id:'q012',p:'Quem batizou Jesus?',a:['Pedro','André','João Batista','Felipe'],c:2},
  {id:'q013',p:'Quantas pragas Deus enviou ao Egito?',a:['7','12','10','9'],c:2},
  {id:'q014',p:'Quem recebeu a Lei de Deus no Monte Sinai?',a:['Arão','Moisés','Josué','Calebe'],c:1},
  {id:'q015',p:'Qual árvore Zaqueu subiu para ver Jesus?',a:['Sicômoro','Figueira','Oliveira','Tamargueira'],c:0},
  {id:'q016',p:'Em quantos dias Deus criou o mundo?',a:['7','5','10','6'],c:3},
  {id:'q017',p:'Qual foi o primeiro homem criado por Deus?',a:['Abel','Noé','Adão','Sete'],c:2},
  {id:'q018',p:'Qual foi a primeira mulher criada por Deus?',a:['Sara','Eva','Raquel','Rute'],c:1},
  {id:'q019',p:'Quem vendeu José como escravo?',a:['Seu pai','Faraó','Potifar','Seus irmãos'],c:3},
  {id:'q020',p:'Qual foi o dom especial de Sansão?',a:['Força extraordinária','Sabedoria','Velocidade','Cura'],c:0},
  {id:'q021',p:'Qual rainha salvou o povo judeu do extermínio?',a:['Débora','Ester','Rute','Miriã'],c:1},
  {id:'q022',p:'Qual é o maior mandamento segundo Jesus?',a:['Não matar','Não roubar','Amar a Deus sobre tudo','Guardar o sábado'],c:2},
  {id:'q023',p:'Quantos pães e peixes Jesus usou para alimentar 5.000?',a:['5 pães e 2 peixes','3 pães e 5 peixes','7 pães e 4 peixes','2 pães e 7 peixes'],c:0},
  {id:'q024',p:'Qual discípulo negou Jesus três vezes?',a:['João','Tomé','Mateus','Pedro'],c:3},
  {id:'q025',p:'Quem escreveu o livro de Apocalipse?',a:['João','Paulo','Pedro','Lucas'],c:0},
  {id:'q026',p:'Qual é o último livro da Bíblia?',a:['Judas','3 João','Apocalipse','Hebreus'],c:2},
  {id:'q027',p:'Onde Jesus foi tentado por 40 dias?',a:['No templo','No deserto','No jardim','No monte'],c:1},
  {id:'q028',p:'Quem era a mãe de Jesus?',a:['Maria','Marta','Salomé','Ana'],c:0},
  {id:'q029',p:'Quantos anos Noé tinha quando o dilúvio começou?',a:['500','450','700','600'],c:3},
  {id:'q030',p:'Quem foi o primeiro rei de Israel?',a:['Saul','Davi','Salomão','Josias'],c:0},
  {id:'q031',p:'Quem construiu o Templo em Jerusalém?',a:['Davi','Salomão','Ezequias','Josias'],c:1},
  {id:'q032',p:'Qual profeta foi levado ao céu num carro de fogo?',a:['Elias','Eliseu','Ezequiel','Isaías'],c:0},
  {id:'q033',p:'Quantas vezes por dia Daniel orava?',a:['7','3','5','2'],c:1},
  {id:'q034',p:'Qual apóstolo era cobrador de impostos antes de seguir Jesus?',a:['Levi','João','Mateus','Simão'],c:2},
  {id:'q035',p:'Qual é o terceiro livro da Bíblia?',a:['Números','Êxodo','Levítico','Deuteronômio'],c:2},
  {id:'q036',p:'Qual profeta anunciou o nascimento do Messias em Belém?',a:['Isaías','Miquéias','Jeremias','Amós'],c:1},
  {id:'q037',p:'Quantos livros tem o Antigo Testamento?',a:['39','27','46','33'],c:0},
  {id:'q038',p:'Qual é o símbolo da aliança de Deus com Noé?',a:['Pombinha','Arco-íris','Oliveira','Estrela'],c:1},
  {id:'q039',p:'Qual discípulo tocou nas chagas de Jesus para crer?',a:['João','Tomé','Pedro','André'],c:1},
  {id:'q040',p:'Quanto tempo choveu durante o dilúvio?',a:['7 dias','30 dias','120 dias','40 dias e 40 noites'],c:3},
  {id:'q041',p:'Em qual monte Moisés viu a sarça ardente?',a:['Horebe','Sinai','Carmelo','Sião'],c:0},
  {id:'q042',p:'Quem ungiu Davi como rei?',a:['Samuel','Natã','Elias','Eliseu'],c:0},
  {id:'q043',p:'Onde Jesus realizou o Sermão da Montanha?',a:['Numa montanha na Galileia','No templo de Jerusalém','Em Cafarnaum','No deserto'],c:0},
  {id:'q044',p:'Qual é a parábola do filho que desperdiçou a herança?',a:['Semeador','Filho pródigo','Talentos','Ovelha perdida'],c:1},
  {id:'q045',p:'Quem escreveu o livro de Atos dos Apóstolos?',a:['João','Paulo','Pedro','Lucas'],c:3},
  {id:'q046',p:'O que simboliza a pomba no batismo de Jesus?',a:['O Espírito Santo','A paz','A pureza','O perdão'],c:0},
  {id:'q047',p:'Em qual livro está escrito: "No princípio era o Verbo"?',a:['Gênesis','Hebreus','João','Apocalipse'],c:2},
  {id:'q048',p:'Qual é o livro mais curto da Bíblia?',a:['3 João','Filemon','Judas','Obadias'],c:0},
  {id:'q049',p:'Quem foi o primeiro mártir cristão registrado?',a:['Tiago','Pedro','Estêvão','Paulo'],c:2},
  {id:'q050',p:'Em qual cidade Paulo e Silas foram presos e cantaram hinos?',a:['Filipos','Corinto','Éfeso','Tessalônica'],c:0},
  {id:'q051',p:'Quem reconstruiu os muros de Jerusalém?',a:['Esdras','Neemias','Zorobabel','Josué'],c:1},
  {id:'q052',p:'Quantos anos o povo de Israel ficou no deserto?',a:['20','30','50','40'],c:3},
  {id:'q053',p:'Como Josué conquistou Jericó?',a:['Com catapultas','Os muros caíram com marchas e gritos','Com fogo','Com um exército de anjos'],c:1},
  {id:'q054',p:'Qual é o livro central da Bíblia?',a:['Salmos','Provérbios','Isaías','Jó'],c:0},
  {id:'q055',p:'Qual era a profissão de Lucas antes de ser discípulo?',a:['Pescador','Cobrador','Médico','Fabricante de tendas'],c:2},
  {id:'q056',p:'Qual foi a primeira aparição de Jesus ressurreto?',a:['Pedro','Maria Madalena','Os onze','Maria, mãe de Jesus'],c:1},
  {id:'q057',p:'Quem era o governador romano que condenou Jesus?',a:['Herodes','César','Pilatos','Félix'],c:2},
  {id:'q058',p:'Qual é o quinto mandamento?',a:['Não matarás','Honra pai e mãe','Não roubarás','Não cobiçarás'],c:1},
  {id:'q059',p:'Quem era o sogro de Moisés?',a:['Anás','Jetro','Fineias','Eleazar'],c:1},
  {id:'q060',p:'Qual rainha visitou Salomão para testar sua sabedoria?',a:['Jezabel','Atalias','Débora','Rainha de Sabá'],c:3},
  {id:'q061',p:'Quem foi o sucessor de Moisés?',a:['Arão','Calebe','Josué','Samuel'],c:2},
  {id:'q062',p:'Quem interpretou os sonhos do faraó no Egito?',a:['Daniel','José','Moisés','Abraão'],c:1},
  {id:'q063',p:'Qual apóstolo era irmão de Pedro?',a:['João','Tiago','Mateus','André'],c:3},
  {id:'q064',p:'Quem foi jogado na fornalha ardente?',a:['Daniel','Isaías','Sadraque, Mesaque e Abede-Nego','Jeremias'],c:2},
  {id:'q065',p:'Quem escreveu a maioria das cartas do Novo Testamento?',a:['Paulo','Pedro','João','Tiago'],c:0},
  {id:'q066',p:'Quem construiu uma arca para salvar sua família?',a:['Abraão','Noé','Moisés','Davi'],c:1},
  {id:'q067',p:'Qual discípulo era chamado de “gêmeo”?',a:['Pedro','João','Tiago','Tomé'],c:3},
  {id:'q068',p:'Quem foi vendido por 20 moedas de prata?',a:['Judas','Davi','José','Esaú'],c:2},
  {id:'q069',p:'Qual profeta confrontou os profetas de Baal?',a:['Eliseu','Elias','Isaías','Jeremias'],c:1},
  {id:'q070',p:'Quem foi o homem mais sábio da Bíblia?',a:['Davi','Moisés','Daniel','Salomão'],c:3},
  {id:'q071',p:'Quem foi o primeiro homem assassinado?',a:['Caim','Abel','Sete','Noé'],c:1},
  {id:'q072',p:'Quem escreveu o livro de Salmos?',a:['Salomão','Davi','Moisés','Isaías'],c:1},
  {id:'q073',p:'Quem foi a esposa de Abraão?',a:['Rebeca','Raquel','Sara','Lea'],c:2},
  {id:'q074',p:'Quem foi pai de João Batista?',a:['José','Zacarias','Pedro','Simão'],c:1},
  {id:'q075',p:'Quem construiu o muro de Jerusalém?',a:['Esdras','Josué','Davi','Neemias'],c:3},
  {id:'q076',p:'Quem foi o primeiro mártir?',a:['Paulo','Estêvão','Pedro','João'],c:1},
  {id:'q077',p:'Quem foi levado ao céu sem morrer?',a:['Enoque','Abraão','Davi','Isaías'],c:0},
  {id:'q078',p:'Quem foi pai de Davi?',a:['Saul','Samuel','Jessé','Salomão'],c:2},
  {id:'q079',p:'Qual discípulo era médico?',a:['Pedro','Lucas','Paulo','Tiago'],c:1},
  {id:'q080',p:'Quem escreveu Provérbios?',a:['Davi','Moisés','Salomão','Elias'],c:2},
  {id:'q081',p:'Quem guiou o povo na travessia do Jordão?',a:['Moisés','Josué','Arão','Calebe'],c:1},
  {id:'q082',p:'Quem foi o primeiro sumo sacerdote?',a:['Moisés','Samuel','Arão','Eli'],c:2},
  {id:'q083',p:'Quem teve um sonho com uma escada até o céu?',a:['José','Jacó','Abraão','Moisés'],c:1},
  {id:'q084',p:'Quem escreveu o livro de Hebreus?',a:['Pedro','João','Lucas','Paulo'],c:3},
  {id:'q085',p:'Quem foi o juiz mais forte de Israel?',a:['Gideão','Débora','Samuel','Sansão'],c:3},
  {id:'q086',p:'Quem liderou a batalha contra os midianitas com 300 homens?',a:['Josué','Gideão','Davi','Saul'],c:1},
  {id:'q087',p:'Quem foi o rei que construiu o templo?',a:['Davi','Ezequias','Salomão','Josias'],c:2},
  {id:'q088',p:'Quem foi lançado numa cisterna?',a:['Isaías','Jeremias','Ezequiel','Daniel'],c:1},
  {id:'q089',p:'Quem foi o rei após Saul?',a:['Salomão','Josias','Ezequias','Davi'],c:3},
  {id:'q090',p:'Quem escreveu o evangelho de Mateus?',a:['Pedro','Paulo','Mateus','João'],c:2},
  {id:'q091',p:'Quem escreveu o evangelho de Marcos?',a:['Lucas','João','Mateus','Marcos'],c:3},
  {id:'q092',p:'Quem escreveu o evangelho de Lucas?',a:['Marcos','João','Lucas','Mateus'],c:2},
  {id:'q093',p:'Quem escreveu o evangelho de João?',a:['João','Pedro','Paulo','Tiago'],c:0},
  {id:'q094',p:'Quem foi chamado de amigo de Deus?',a:['Moisés','Davi','Isaías','Abraão'],c:3},
  {id:'q095',p:'Quem foi rei quando Jesus nasceu?',a:['Pilatos','Herodes','César','Félix'],c:1},
  {id:'q096',p:'Quem era the pai de Isaque?',a:['Jacó','José','Abraão','Davi'],c:2},
  {id:'q097',p:'Quem era o filho de Isaque?',a:['José','Davi','Moisés','Jacó'],c:3},
  {id:'q098',p:'Quem lutou com um anjo?',a:['Abraão','Jacó','Moisés','Josué'],c:1},
  {id:'q099',p:'Quem traiu Jesus?',a:['Pedro','João','Tiago','Judas'],c:3},
  {id:'q100',p:'Quem negou Jesus três vezes?',a:['João','Tomé','Pedro','Mateus'],c:2},
  {id:'q101',p:'Quem viu Jesus ressuscitado primeiro?',a:['Maria Madalena','Pedro','João','Tomé'],c:0},
  {id:'q102',p:'Quem foi o rei mais jovem?',a:['Davi','Salomão','Josias','Saul'],c:2},
  {id:'q103',p:'Quem construiu o tabernáculo?',a:['Davi','Moisés','Salomão','Josué'],c:1},
  {id:'q104',p:'Quem guiou Israel no deserto?',a:['Arão','Josué','Moisés','Calebe'],c:2},
  {id:'q105',p:'Quem era irmão de Moisés?',a:['Josué','Davi','Arão','Samuel'],c:2},
  {id:'q106',p:'Quem foi a irmã de Moisés?',a:['Sara','Miriã','Rebeca','Raquel'],c:1},
  {id:'q107',p:'Quem foi pai de Salomão?',a:['Saul','Samuel','Elias','Davi'],c:3},
  {id:'q108',p:'Quem foi mãe de Samuel?',a:['Sara','Rebeca','Ana','Raquel'],c:2},
  {id:'q109',p:'Quem foi o profeta que chorou?',a:['Isaías','Ezequiel','Daniel','Jeremias'],c:3},
  {id:'q110',p:'Quem foi o discípulo amado?',a:['Pedro','Tiago','André','João'],c:3},
  {id:'q111',p:'Quem foi o primeiro rei?',a:['Davi','Saul','Salomão','Josias'],c:1},
  {id:'q112',p:'Quem derrotou os filisteus com uma pedra?',a:['Saul','Josué','Davi','Samuel'],c:2},
  {id:'q113',p:'Quem escreveu Eclesiastes?',a:['Davi','Moisés','Isaías','Salomão'],c:3},
  {id:'q114',p:'Quem foi o profeta do fogo do céu?',a:['Elias','Eliseu','Isaías','Jeremias'],c:0},
  {id:'q115',p:'Quem multiplicou o azeite da viúva?',a:['Elias','Isaías','Eliseu','Daniel'],c:2},
  {id:'q116',p:'Quem foi levado ao céu em redemoinho?',a:['Eliseu','Elias','Moisés','Abraão'],c:1},
  {id:'q117',p:'Quem escreveu o livro de Daniel?',a:['Isaías','Daniel','Jeremias','Ezequiel'],c:1},
  {id:'q118',p:'Quem escreveu o livro de Isaías?',a:['Jeremias','Isaías','Ezequiel','Daniel'],c:1},
  {id:'q119',p:'Quem escreveu o livro de Jeremias?',a:['Isaías','Ezequiel','Jeremias','Daniel'],c:2},
  {id:'q120',p:'Quem escreveu o livro de Ezequiel?',a:['Ezequiel','Isaías','Jeremias','Daniel'],c:0},
  {id:'q121',p:'Quem foi o primeiro diácono?',a:['Filipe','Estêvão','Paulo','Pedro'],c:1},
  {id:'q122',p:'Quem evangelizou o eunuco?',a:['Paulo','Pedro','João','Filipe'],c:3},
  {id:'q123',p:'Quem foi convertido na estrada de Damasco?',a:['Pedro','João','Paulo','Tiago'],c:2},
  {id:'q124',p:'Quem escreveu Romanos?',a:['Pedro','Paulo','João','Lucas'],c:1},
  {id:'q125',p:'Quem escreveu Atos?',a:['Lucas','Paulo','Pedro','João'],c:0},
  {id:'q126',p:'Quem escreveu Hebreus?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q127',p:'Quem foi pescador?',a:['Paulo','Pedro','Lucas','Mateus'],c:1},
  {id:'q128',p:'Quem era cobrador de impostos?',a:['Mateus','Pedro','João','Tiago'],c:0},
  {id:'q129',p:'Quem andou sobre as águas?',a:['João','Tiago','André','Pedro'],c:3},
  {id:'q130',p:'Quem duvidou da ressurreição?',a:['Pedro','Tomé','João','Tiago'],c:1},
  {id:'q131',p:'Quem escreveu Tiago?',a:['Pedro','Tiago','João','Paulo'],c:1},
  {id:'q132',p:'Quem escreveu Pedro?',a:['João','Paulo','Pedro','Lucas'],c:2},
  {id:'q133',p:'Quem escreveu João?',a:['Pedro','João','Paulo','Lucas'],c:1},
  {id:'q134',p:'Quem escreveu Judas?',a:['Judas','Pedro','João','Paulo'],c:0},
  {id:'q135',p:'Quem escreveu Filipenses?',a:['Pedro','João','Paulo','Lucas'],c:2},
  {id:'q136',p:'Quem escreveu Efésios?',a:['Pedro','João','Lucas','Paulo'],c:3},
  {id:'q137',p:'Quem escreveu Colossenses?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q138',p:'Quem escreveu Tessalonicenses?',a:['Pedro','João','Lucas','Paulo'],c:3},
  {id:'q139',p:'Quem escreveu Timóteo?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q140',p:'Quem escreveu Tito?',a:['Pedro','João','Paulo','Lucas'],c:2},
  {id:'q141',p:'Quem escreveu Filemom?',a:['Pedro','João','Lucas','Paulo'],c:3},
  {id:'q142',p:'Quem escreveu Lucas?',a:['Pedro','Lucas','Paulo','João'],c:1},
  {id:'q143',p:'Quem escreveu Marcos?',a:['Marcos','Lucas','João','Mateus'],c:0},
  {id:'q144',p:'Quem escreveu Mateus?',a:['Mateus','Pedro','João','Lucas'],c:0},
  {id:'q145',p:'Quem era chamado de rocha?',a:['João','Paulo','Tiago','Pedro'],c:3},
  {id:'q146',p:'Quem foi irmão de Jesus?',a:['Tiago','Pedro','João','Paulo'],c:0},
  {id:'q147',p:'Quem foi sumo sacerdote que julgou Jesus?',a:['Pilatos','Herodes','Caifás','Félix'],c:2},
  {id:'q148',p:'Quem condenou Jesus?',a:['Herodes','Pilatos','Caifás','Félix'],c:1},
  {id:'q149',p:'Quem zombou de Jesus?',a:['Pedro','Soldados','João','Paulo'],c:1},
  {id:'q150',p:'Quem ajudou a carregar a cruz?',a:['Pedro','João','Simão Cireneu','Paulo'],c:2},
  {id:'q151',p:'Quem pediu o corpo de Jesus?',a:['Pedro','José de Arimateia','João','Paulo'],c:1},
  {id:'q152',p:'Quem preparou o corpo de Jesus?',a:['Nicodemos','Pedro','João','Paulo'],c:0},
  {id:'q153',p:'Quem guardou o túmulo?',a:['Pedro','João','Paulo','Soldados'],c:3},
  {id:'q154',p:'Quem viu o túmulo vazio?',a:['Pedro','Maria Madalena','João','Tomé'],c:1},
  {id:'q155',p:'Quem correu ao túmulo?',a:['Pedro','Paulo','Tiago','André'],c:0},
  {id:'q156',p:'Quem reconheceu Jesus no caminho de Emaús?',a:['Pedro','Discípulos','João','Paulo'],c:1},
  {id:'q157',p:'Quem recebeu o Espírito Santo primeiro?',a:['Fariseus','Apóstolos','Romanos','Reis'],c:1},
  {id:'q158',p:'Quem pregou em Pentecostes?',a:['Paulo','João','Pedro','Tiago'],c:2},
  {id:'q159',p:'Quem escreveu Atos dos Apóstolos?',a:['Paulo','Pedro','João','Lucas'],c:3},
  {id:'q160',p:'Quem foi perseguido antes de se converter?',a:['Pedro','João','Paulo','Tiago'],c:2},
  {id:'q161',p:'Quem foi discípulo de Paulo?',a:['Pedro','Timóteo','João','Tiago'],c:1},
  {id:'q162',p:'Quem foi companheiro de Paulo?',a:['Silas','Pedro','João','Tiago'],c:0},
  {id:'q163',p:'Quem escreveu Coríntios?',a:['Pedro','João','Paulo','Lucas'],c:2},
  {id:'q164',p:'Quem escreveu Gálatas?',a:['Pedro','João','Lucas','Paulo'],c:3},
  {id:'q165',p:'Quem escreveu Efésios?',a:['Pedro','Paulo','João','Lucas'],c:1},
  {id:'q166',p:'Quem escreveu Filipenses?',a:['Pedro','João','Lucas','Paulo'],c:3},
  {id:'q167',p:'Quem escreveu Colossenses?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q168',p:'Quem escreveu Tessalonicenses?',a:['Pedro','João','Lucas','Paulo'],c:3},
  {id:'q169',p:'Quem escreveu Timóteo?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q170',p:'Quem escreveu Tito?',a:['Pedro','João','Paulo','Lucas'],c:2},
  {id:'q171',p:'Quem escreveu Filemom?',a:['Pedro','João','Lucas','Paulo'],c:3},
  {id:'q172',p:'Quem escreveu Hebreus?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q173',p:'Quem escreveu Tiago?',a:['Tiago','Pedro','João','Paulo'],c:0},
  {id:'q174',p:'Quem escreveu 1 Pedro?',a:['João','Paulo','Pedro','Lucas'],c:2},
  {id:'q175',p:'Quem escreveu 2 Pedro?',a:['Pedro','João','Paulo','Lucas'],c:0},
  {id:'q176',p:'Quem escreveu 1 João?',a:['Pedro','Paulo','Lucas','João'],c:3},
  {id:'q177',p:'Quem escreveu 2 João?',a:['Pedro','João','Paulo','Lucas'],c:1},
  {id:'q178',p:'Quem escreveu 3 João?',a:['João','Pedro','Paulo','Lucas'],c:0},
  {id:'q179',p:'Quem escreveu Judas?',a:['Pedro','João','Judas','Paulo'],c:2},
  {id:'q180',p:'Quem escreveu Apocalipse?',a:['João','Pedro','Paulo','Lucas'],c:0},
  {id:'q181',p:'Quem foi o primeiro casal?',a:['Abraão e Sara','Adão e Eva','Isaque e Rebeca','Jacó e Raquel'],c:1},
  {id:'q182',p:'Quem foi o primeiro filho de Adão?',a:['Abel','Sete','Noé','Caim'],c:3},
  {id:'q183',p:'Quem agradou a Deus com oferta?',a:['Caim','Noé','Abel','Abraão'],c:2},
  {id:'q184',p:'Quem construiu a torre de Babel?',a:['Deus','Homens','Anjos','Profetas'],c:1},
  {id:'q185',p:'Quem confundiu as línguas?',a:['Homens','Deus','Anjos','Profetas'],c:1},
  {id:'q186',p:'Quem foi chamado para sair da sua terra?',a:['Moisés','Davi','Abraão','José'],c:2},
  {id:'q187',p:'Quem quase sacrificou seu filho?',a:['Moisés','Abraão','Davi','Noé'],c:1},
  {id:'q188',p:'Quem era esposa de Isaque?',a:['Sara','Raquel','Rebeca','Lea'],c:2},
  {id:'q189',p:'Quem era esposa de Jacó?',a:['Sara','Rebeca','Ana','Raquel'],c:3},
  {id:'q190',p:'Quem trabalhou 7 anos por amor?',a:['José','Davi','Jacó','Moisés'],c:2},
  {id:'q191',p:'Quem foi vendido por seus irmãos?',a:['Davi','José','Moisés','Esaú'],c:1},
  {id:'q192',p:'Quem governou o Egito depois de Faraó?',a:['Moisés','Arão','José','Davi'],c:2},
  {id:'q193',p:'Quem libertou o povo do Egito?',a:['Moisés','Josué','Arão','Davi'],c:0},
  {id:'q194',p:'Quem falou com Deus na sarça?',a:['Josué','Davi','Abraão','Moisés'],c:3},
  {id:'q195',p:'Quem abriu o mar?',a:['Josué','Arão','Moisés','Davi'],c:2},
  {id:'q196',p:'Quem recebeu a lei?',a:['Josué','Moisés','Arão','Davi'],c:1},
  {id:'q197',p:'Quem fez o bezerro de ouro?',a:['Arão','Moisés','Josué','Davi'],c:0},
  {id:'q198',p:'Quem viu a terra prometida de longe?',a:['Josué','Calebe','Moisés','Arão'],c:2},
  {id:'q199',p:'Quem entrou na terra prometida?',a:['Josué','Moisés','Arão','Davi'],c:0},
  {id:'q200',p:'Quem derrubou Jericó?',a:['Moisés','Davi','Josué','Saul'],c:2},
  {id:'q201',p:'Quem foi juiz forte?',a:['Gideão','Sansão','Samuel','Davi'],c:1},
  {id:'q202',p:'Quem teve 300 homens?',a:['Josué','Davi','Gideão','Saul'],c:2},
  {id:'q203',p:'Quem foi rei ungido por Samuel?',a:['Davi','Saul','Salomão','Josias'],c:1},
  {id:'q204',p:'Quem tocava harpa?',a:['Saul','Samuel','Davi','Josué'],c:2},
  {id:'q205',p:'Quem construiu o templo?',a:['Davi','Salomão','Josué','Saul'],c:1},
  {id:'q206',p:'Quem pediu sabedoria?',a:['Davi','Saul','Salomão','Josué'],c:2},
  {id:'q207',p:'Quem visitou Salomão?',a:['Rainha de Sabá','Ester','Débora','Sara'],c:0},
  {id:'q208',p:'Quem foi dividido em dois reinos?',a:['Egito','Roma','Babilônia','Israel'],c:3},
  {id:'q209',p:'Quem foi levado cativo?',a:['Israel','Egito','Roma','Babilônia'],c:0},
  {id:'q210',p:'Quem foi profeta do fogo?',a:['Eliseu','Isaías','Elias','Jeremias'],c:2},
  {id:'q211',p:'Quem sucedeu Elias?',a:['Isaías','Jeremias','Eliseu','Daniel'],c:2},
  {id:'q212',p:'Quem foi jogado na cova?',a:['José','Davi','Elias','Daniel'],c:3},
  {id:'q213',p:'Quem interpretou sonhos na Babilônia?',a:['José','Daniel','Elias','Isaías'],c:1},
  {id:'q214',p:'Quem escreveu Isaías?',a:['Isaías','Jeremias','Ezequiel','Daniel'],c:0},
  {id:'q215',p:'Quem escreveu Jeremias?',a:['Isaías','Jeremias','Ezequiel','Daniel'],c:1},
  {id:'q216',p:'Quem escreveu Ezequiel?',a:['Isaías','Jeremias','Ezequiel','Daniel'],c:2},
  {id:'q217',p:'Quem viu ossos secos?',a:['Isaías','Jeremias','Daniel','Ezequiel'],c:3},
  {id:'q218',p:'Quem foi rainha corajosa?',a:['Rute','Ester','Sara','Débora'],c:1},
  {id:'q219',p:'Quem foi fiel a sogra?',a:['Ester','Sara','Débora','Rute'],c:3},
  {id:'q220',p:'Quem julgou Israel sendo mulher?',a:['Débora','Rute','Ester','Sara'],c:0},
  {id:'q221',p:'Quem foi pai de João Batista?',a:['José','Pedro','Zacarias','Paulo'],c:2},
  {id:'q222',p:'Quem anunciou o nascimento de Jesus?',a:['Miguel','Anjo Gabriel','Pedro','Paulo'],c:1},
  {id:'q223',p:'Onde Jesus nasceu?',a:['Jerusalém','Nazaré','Belém','Egito'],c:2},
  {id:'q224',p:'Quem visitou Jesus bebê?',a:['Pastores','Magos','Reis','Fariseus'],c:1},
  {id:'q225',p:'Quem tentou matar Jesus bebê?',a:['Pilatos','César','Faraó','Herodes'],c:3},
  {id:'q226',p:'Onde Jesus cresceu?',a:['Belém','Jerusalém','Egito','Nazaré'],c:3},
  {id:'q227',p:'Quem batizou Jesus?',a:['Pedro','João Batista','Paulo','Tiago'],c:1},
  {id:'q228',p:'Quantos discípulos Jesus tinha?',a:['10','7','12','70'],c:2},
  {id:'q229',p:'Quem andou sobre as águas?',a:['João','Tiago','André','Pedro'],c:3},
  {id:'q230',p:'Quem multiplicou pães?',a:['Pedro','Paulo','João','Jesus'],c:3},
  {id:'q231',p:'Quem ressuscitou Lázaro?',a:['Pedro','Jesus','Paulo','João'],c:1},
  {id:'q232',p:'Quem chorou por Lázaro?',a:['Pedro','João','Jesus','Paulo'],c:2},
  {id:'q233',p:'Quem traiu Jesus?',a:['Pedro','João','Judas','Tiago'],c:2},
  {id:'q234',p:'Quem negou Jesus?',a:['João','Pedro','Tiago','André'],c:1},
  {id:'q235',p:'Quem julgou Jesus?',a:['Pilatos','Herodes','Caifás','Félix'],c:0},
  {id:'q236',p:'Quem ajudou a carregar a cruz?',a:['Pedro','Simão','João','Paulo'],c:1},
  {id:'q237',p:'Quem morreu na cruz com Jesus?',a:['Ladrões','Apóstolos','Fariseus','Romanos'],c:0},
  {id:'q238',p:'Quem ressuscitou Jesus?',a:['Pedro','João','Deus','Paulo'],c:2},
  {id:'q239',p:'Quem viu o túmulo vazio?',a:['Maria Madalena','Pedro','João','Tomé'],c:0},
  {id:'q240',p:'Quem duvidou?',a:['Pedro','João','Tiago','Tomé'],c:3},
  {id:'q241',p:'Quem pregou em Pentecostes?',a:['Paulo','João','Pedro','Tiago'],c:2},
  {id:'q242',p:'Quem foi apedrejado?',a:['Paulo','Pedro','Estêvão','João'],c:2},
  {id:'q243',p:'Quem se converteu na estrada?',a:['Pedro','Paulo','João','Tiago'],c:1},
  {id:'q244',p:'Quem escreveu Romanos?',a:['Pedro','João','Lucas','Paulo'],c:3},
  {id:'q245',p:'Quem escreveu Atos?',a:['Paulo','Pedro','Lucas','João'],c:2},
  {id:'q246',p:'Quem viajou com Paulo?',a:['Pedro','Silas','João','Tiago'],c:1},
  {id:'q247',p:'Quem foi preso várias vezes?',a:['Pedro','João','Paulo','Tiago'],c:2},
  {id:'q248',p:'Quem foi para Patmos?',a:['João','Pedro','Paulo','Tiago'],c:0},
  {id:'q249',p:'Quem escreveu Apocalipse?',a:['Pedro','Paulo','João','Lucas'],c:2},
  {id:'q250',p:'Quem viu o céu aberto?',a:['Pedro','Paulo','João','Tiago'],c:2},
  {id:'q251',p:'Quem foi discípulo amado?',a:['Pedro','Tiago','André','João'],c:3},
  {id:'q252',p:'Quem era pescador?',a:['Paulo','Pedro','Lucas','Mateus'],c:1},
  {id:'q253',p:'Quem era cobrador de impostos?',a:['Pedro','João','Mateus','Tiago'],c:2},
  {id:'q254',p:'Quem escreveu Mateus?',a:['Mateus','Pedro','João','Lucas'],c:0},
  {id:'q255',p:'Quem escreveu Marcos?',a:['Lucas','João','Mateus','Marcos'],c:3},
  {id:'q256',p:'Quem escreveu Lucas?',a:['Pedro','Paulo','João','Lucas'],c:3},
  {id:'q257',p:'Quem escreveu João?',a:['Pedro','João','Paulo','Lucas'],c:1},
  {id:'q258',p:'Quem escreveu Hebreus?',a:['Pedro','João','Lucas','Paulo'],c:3},
  {id:'q259',p:'Quem escreveu Tiago?',a:['Tiago','Pedro','João','Paulo'],c:0},
  {id:'q260',p:'Quem escreveu Judas?',a:['Pedro','João','Paulo','Judas'],c:3},
  {id:'q361',p:'Qual o nome do monte onde a arca de Noé repousou?',a:['Sinai','Ararate','Horebe','Sião'],c:1},
  {id:'q362',p:'Quem foi a mãe de João Batista?',a:['Ana','Maria','Isabel','Marta'],c:2},
  {id:'q363',p:'Qual discípulo era conhecido como o Zelote?',a:['Simão','Judas','Tiago','Mateus'],c:0},
  {id:'q364',p:'Quantas vezes ao dia os sacerdotes rodeavam Jericó no último dia?',a:['1 vez','3 vezes','12 vezes','7 vezes'],c:3},
  {id:'q365',p:'Qual era o nome do mar onde Jesus acalmou a tempestade?',a:['Mar Morto','Mar da Galileia','Mar Vermelho','Mar Grande'],c:1},
  {id:'q366',p:'Quem era o sumo sacerdote quando Jesus foi preso?',a:['Caifás','Anás','Pilatos','Gamaliel'],c:0},
  {id:'q367',p:'Quantas virgens eram prudentes na parábola de Jesus?',a:['10','7','5','3'],c:2},
  {id:'q368',p:'Quem foi o sucessor do rei Davi?',a:['Absalão','Salomão','Adonias','Saul'],c:1},
  {id:'q369',p:'Qual profeta viu um vale de ossos secos ganhando vida?',a:['Isaías','Jeremias','Daniel','Ezequiel'],c:3},
  {id:'q370',p:'Quem foi o homem que pediu o corpo de Jesus para o sepultamento?',a:['Nicodemos','Lázaro','José de Arimateia','João'],c:2},
  {id:'q371',p:'Qual o nome da cidade onde os discípulos foram chamados de cristãos pela primeira vez?',a:['Jerusalém','Antioquia','Roma','Éfeso'],c:1},
  {id:'q372',p:'Quem escreveu a carta aos Romanos?',a:['Pedro','Tiago','João','Paulo'],c:3},
  {id:'q373',p:'Qual o nome do anjo que anunciou o nascimento de Jesus a Maria?',a:['Miguel','Rafael','Gabriel','Uriel'],c:2},
  {id:'q374',p:'Quantos dias Lázaro estava morto quando Jesus o ressuscitou?',a:['1 dia','4 dias','3 dias','7 dias'],c:1},
  {id:'q375',p:'Quem era a irmã de Moisés e Arão?',a:['Miriã','Sara','Raquel','Rute'],c:0},
  {id:'q376',p:'Qual era a profissão de Amós antes de ser profeta?',a:['Pescador','Sacerdote','Boieiro e colhedor de sicômoros','Carpinteiro'],c:2},
  {id:'q377',p:'Quem foi o rei que mandou lançar Daniel na cova dos leões?',a:['Nabucodonosor','Dário','Ciro','Belsazar'],c:1},
  {id:'q378',p:'Qual apóstolo substituiu Judas Iscariotes?',a:['Barnabé','Silas','Matias','Estêvão'],c:2},
  {id:'q379',p:'Qual era a cor do cavalo que simboliza a fome no Apocalipse?',a:['Branco','Vermelho','Preto','Amarelo'],c:2},
  {id:'q380',p:'Quem foi o profeta que ungiu o rei Saul?',a:['Natã','Samuel','Elias','Eliseu'],c:1},
  {id:'q381',p:'Qual foi o presente que Jacó deu a José que causou inveja nos irmãos?',a:['Um anel de ouro','Uma túnica colorida','Uma espada','Um rebanho'],c:1},
  {id:'q382',p:'Onde Moisés morreu?',a:['Monte Sinai','Monte Nebo','Egito','Canaã'],c:1},
  {id:'q383',p:'Qual discípulo de Jesus era cobrador de impostos?',a:['Pedro','André','Mateus','Filipe'],c:2},
  {id:'q384',p:'Quem foi a primeira mulher de Jacó?',a:['Raquel','Lea','Bila','Zilpa'],c:1},
  {id:'q385',p:'Qual o nome do jardim onde Jesus orou antes de ser preso?',a:['Éden','Getsemani','Gólgota','Betânia'],c:1},
  {id:'q386',p:'Quem subiu numa árvore para ver Jesus passar?',a:['Bartimeu','Lázaro','Zaqueu','Nicodemos'],c:2},
  {id:'q387',p:'Qual praga do Egito afetou apenas os primogênitos?',a:['Gafanhotos','Trevas','Rãs','Morte dos primogênitos'],c:3},
  {id:'q388',p:'Quem era o pai de Salomão?',a:['Saul','Davi','Samuel','Natã'],c:1},
  {id:'q389',p:'Quantas tribos formavam a nação de Israel?',a:['10','12','7','3'],c:1},
  {id:'q390',p:'Quem foi levado para o Egito e tornou-se governador?',a:['Moisés','Abraão','José','Jacó'],c:2},
  {id:'q391',p:'Quem derrotou o gigante Golias?',a:['Saul','Samuel','Davi','Jônatas'],c:2},
  {id:'q392',p:'Qual o nome do primeiro homem?',a:['Caim','Abel','Adão','Sete'],c:2},
  {id:'q393',p:'Qual profeta foi alimentado por corvos?',a:['Eliseu','Isaías','Ezequiel','Elias'],c:3},
  {id:'q394',p:'Quantos livros tem a Bíblia toda (versão protestante)?',a:['66','73','39','27'],c:0},
  {id:'q395',p:'Quem foi a mulher que escondeu os espias em Jericó?',a:['Raabe','Rute','Débora','Dalila'],c:0},
  {id:'q396',p:'Quem escreveu os Salmos?',a:['Moisés','Salomão','Davi e outros','Paulo'],c:2},
  {id:'q397',p:'Qual é o último livro do Antigo Testamento?',a:['Malaquias','Gênesis','Apocalipse','Mateus'],c:0},
  {id:'q398',p:'Quem foi o discípulo que negou Jesus 3 vezes?',a:['João','Judas','Pedro','Tomé'],c:2},
  {id:'q399',p:'Em que dia da criação Deus criou o homem?',a:['3º dia','1º dia','7º dia','6º dia'],c:3},
  {id:'q400',p:'Quem foi o profeta que falou com uma mula?',a:['Balaão','Samuel','Elias','Ezequiel'],c:0},
  {id:'q401',p:'Quem liderou o povo de Israel após a morte de Moisés?',a:['Calebe','Arão','Josué','Eleazar'],c:2},
  {id:'q402',p:'Quem foi a rainha que salvou os judeus da destruição na Pérsia?',a:['Vasti','Ester','Jezabel','Atalia'],c:1},
  {id:'q403',p:'Qual o nome do filho de Abraão com a serva Agar?',a:['Isaque','Jacó','Ismael','Esaú'],c:2},
  {id:'q404',p:'Quem foi o apóstolo que viu a visão do Apocalipse na ilha de Patmos?',a:['Paulo','Pedro','Tiago','João'],c:3},
  {id:'q405',p:'Qual o menor livro da Bíblia (por número de palavras)?',a:['Judas','3 João','Filemon','Obadias'],c:1},
  {id:'q406',p:'Qual o nome da cidade onde Jesus cresceu?',a:['Belém','Jerusalém','Nazaré','Jericó'],c:2},
  {id:'q407',p:'Quem foi o primeiro mártir cristão?',a:['Tiago','Pedro','Estêvão','Paulo'],c:2},
  {id:'q408',p:'Como se chamava o pai de Isaque?',a:['Jacó','Ló','Noé','Abraão'],c:3},
  {id:'q409',p:'Quantos discípulos Jesus enviou para pregar de dois em dois?',a:['12','70','50','100'],c:1},
  {id:'q410',p:'Qual o nome do marido de Rute?',a:['Boaz','Malon','Quiliom','Elimeleque'],c:0},
  {id:'q411',p:'Quem foi o homem que viveu mais tempo na Bíblia?',a:['Noé','Adão','Matusalém','Enoque'],c:2},
  {id:'q412',p:'Qual mar Moisés abriu para o povo passar?',a:['Mar da Galileia','Mar Morto','Mar Grande','Mar Vermelho'],c:3},
  {id:'q413',p:'O que Deus providenciou para Abraão sacrificar no lugar de Isaque?',a:['Um cordeiro','Um bezerro','Um pombo','Um bode'],c:0},
  {id:'q414',p:'Quem foi o juiz que teve sua força tirada pelo corte do cabelo?',a:['Gideão','Sansão','Samuel','Jefté'],c:1},
  {id:'q415',p:'Quem foi a mãe de Samuel?',a:['Ana','Penina','Isabel','Maria'],c:0},
  {id:'q416',p:'Quantas moedas de prata Judas recebeu para trair Jesus?',a:['10','20','30','50'],c:2},
  {id:'q417',p:'Quem escreveu o livro de Atos dos Apóstolos?',a:['Mateus','Marcos','Lucas','João'],c:2},
  {id:'q418',p:'Qual era a profissão de Paulo?',a:['Pescador','Médico','Fabricante de tendas','Carpinteiro'],c:2},
  {id:'q419',p:'Quem foi a sogra de Rute?',a:['Noemi','Orfa','Sara','Ana'],c:0},
  {id:'q420',p:'Qual o nome do lugar onde Jesus foi crucificado?',a:['Getsêmani','Gólgota','Betânia','Monte das Oliveiras'],c:1},
  {id:'q421',p:'Qual discípulo duvidou da ressurreição de Jesus?',a:['Pedro','João','Tiago','Tomé'],c:3},
  {id:'q422',p:'Quantos pães e peixes Jesus usou para alimentar 5000 homens?',a:['7 pães e 2 peixes','5 pães e 2 peixes','3 pães e 5 peixes','2 pães e 5 peixes'],c:1},
  {id:'q423',p:'Quem foi o homem que lutou com um anjo até o amanhecer?',a:['Abraão','Isaque','Jacó','José'],c:2},
  {id:'q424',p:'Qual foi o sinal que Deus deu de que nunca mais destruiria a terra por água?',a:['Uma pomba','O arco-íris','Uma nuvem','O sol'],c:1},
  {id:'q425',p:'Quem foi jogado em uma cisterna pelos seus próprios irmãos?',a:['Benjamim','José','Judá','Rúben'],c:1},
  {id:'q426',p:'Qual era a profissão de Pedro antes de seguir Jesus?',a:['Cobrador de impostos','Carpinteiro','Pescador','Pastor'],c:2},
  {id:'q427',p:'Quem foi o rei que pediu sabedoria a Deus?',a:['Saul','Davi','Salomão','Josias'],c:2},
  {id:'q428',p:'Qual o nome do rio onde Jesus foi batizado?',a:['Nilo','Eufrates','Tigre','Jordão'],c:3},
  {id:'q429',p:'Qual é o primeiro mandamento?',a:['Honrar pai e mãe','Não matar','Não roubar','Amar a Deus sobre todas as coisas'],c:3},
  {id:'q430',p:'Quem foi o profeta levado ao céu em um redemoinho?',a:['Elias','Eliseu','Isaías','Daniel'],c:0},
  {id:'q431',p:'Qual era a cidade das palmeiras?',a:['Jerusalém','Nazaré','Jericó','Belém'],c:2},
  {id:'q432',p:'Quantos foram os espias enviados a Canaã por Moisés?',a:['2','7','10','12'],c:3},
  {id:'q433',p:'Quem era o pai de João e Tiago?',a:['Zebedeu','Zacarias','Zaqueu','Zebulom'],c:0},
  {id:'q434',p:'O que a mulher de Ló virou ao olhar para trás?',a:['Pedra','Pó','Estátua de sal','Fumaça'],c:2},
  {id:'q435',p:'Qual o nome da montanha onde Moisés recebeu os Dez Mandamentos?',a:['Monte Carmelo','Monte Nebo','Monte Sinai','Monte das Oliveiras'],c:2},
  {id:'q436',p:'Quem foi o cego curado por Jesus na saída de Jericó?',a:['Lázaro','Zaqueu','Bartimeu','Nicodemos'],c:2},
  {id:'q437',p:'Quantos anos Jesus tinha quando começou seu ministério?',a:['12','20','30','33'],c:2},
  {id:'q438',p:'Qual discípulo é chamado de "Filho do Trovão" junto com seu irmão?',a:['Pedro','André','João','Tomé'],c:2},
  {id:'q439',p:'Quem foi a mulher de Abraão?',a:['Raquel','Sara','Rebeca','Rute'],c:1},
  {id:'q440',p:'O que caiu do céu para alimentar os israelitas no deserto?',a:['Pão','Maná','Mel','Codornizes'],c:1},
  {id:'q441',p:'Quem era o sogro de Moisés?',a:['Arão','Jetro','Potifar','Labão'],c:1},
  {id:'q442',p:'Qual o nome do irmão gêmeo de Jacó?',a:['José','Ismael','Esaú','Isaque'],c:2},
  {id:'q443',p:'Quem foi engolido por um grande peixe?',a:['Jonas','Daniel','Noé','Elias'],c:0},
  {id:'q444',p:'Qual o nome da torre que os homens tentaram construir para chegar ao céu?',a:['Torre de Davi','Torre de Babel','Torre de Siloé','Torre de Vigia'],c:1},
  {id:'q445',p:'Quem foi a primeira pessoa a ser criada por Deus?',a:['Eva','Caim','Adão','Noé'],c:2},
  {id:'q446',p:'Quem foi o rei que viu a escrita na parede durante um banquete?',a:['Nabucodonosor','Belsazar','Dário','Ciro'],c:1},
  {id:'q447',p:'Quantas igrejas recebem cartas no início do livro de Apocalipse?',a:['3','5','7','12'],c:2},
  {id:'q448',p:'Quem era o gigante que Davi derrotou?',a:['Og','Golias','Analeque','Sísara'],c:1},
  {id:'q449',p:'Qual o nome do filho de Davi que se rebelou contra ele?',a:['Salomão','Absalão','Adonias','Amnon'],c:1},
  {id:'q450',p:'Quem foi vendido pelos irmãos como escravo?',a:['Benjamim','Rúben','José','Judá'],c:2},
  {id:'q451',p:'Qual o nome da esposa de Isaque?',a:['Sara','Raquel','Rebeca','Lea'],c:2},
  {id:'q452',p:'Quem foi o profeta que desafiou os profetas de Baal no Monte Carmelo?',a:['Eliseu','Elias','Isaías','Jeremias'],c:1},
  {id:'q453',p:'Quem escreveu a maioria dos livros do Novo Testamento?',a:['Pedro','João','Lucas','Paulo'],c:3},
  {id:'q454',p:'Quantas pragas Deus enviou ao Egito?',a:['3','7','10','12'],c:2},
  {id:'q455',p:'Qual o nome do pai de Davi?',a:['Saul','Samuel','Jessé','Salomão'],c:2},
  {id:'q456',p:'Quem foi o rei que mandou matar os bebês em Belém quando Jesus nasceu?',a:['Herodes','Pilatos','Agripa','César'],c:0},
  {id:'q457',p:'Qual o nome da mulher que ungiu os pés de Jesus com nardo puro?',a:['Marta','Maria Madalena','Maria (irmã de Lázaro)','Salomé'],c:2},
  {id:'q458',p:'O que simboliza o pão na Santa Ceia?',a:['A vida','O corpo de Cristo','O sacrifício','A união'],c:1},
  {id:'q459',p:'Quantos dias e noites choveu no dilúvio?',a:['7 dias','40 dias','120 dias','365 dias'],c:1},
  {id:'q460',p:'Quem foi o discípulo que Jesus amava?',a:['Pedro','Tiago','João','André'],c:2},
  {id:'q461',p:'Qual o nome do jardim onde viviam Adão e Eva?',a:['Getsêmani','Paraíso','Éden','Canaã'],c:2},
  {id:'q462',p:'Quem matou Abel?',a:['Adão','Sete','Enoque','Caim'],c:3},
  {id:'q463',p:'O que Noé construiu por ordem de Deus?',a:['Um templo','Uma torre','Uma arca','Um altar'],c:2},
  {id:'q464',p:'Qual o nome do filho de Abraão e Sara?',a:['Ismael','Isaque','Jacó','José'],c:1},
  {id:'q465',p:'Quem mudou o nome de Jacó para Israel?',a:['Abraão','Isaque','Um anjo de Deus','Ele mesmo'],c:2},
  {id:'q466',p:'Qual o nome do mar que os israelitas atravessaram a pé enxuto?',a:['Mar da Galileia','Mar Morto','Mar Vermelho','Mar Mediterrâneo'],c:2},
  {id:'q467',p:'Quem recebeu as tábuas da lei no Monte Sinai?',a:['Arão','Josué','Moisés','Samuel'],c:2},
  {id:'q468',p:'Quem foi o primeiro rei de Israel?',a:['Davi','Salomão','Saul','Samuel'],c:2},
  {id:'q469',p:'Quem escreveu o livro de Salmos (a maioria)?',a:['Salomão','Moisés','Davi','Asafe'],c:2},
  {id:'q470',p:'Quem foi lançado na cova dos leões?',a:['Daniel','José','Estêvão','Elias'],c:0},
  {id:'q471',p:'Onde Jesus nasceu?',a:['Nazaré','Jerusalém','Belém','Jericó'],c:2},
  {id:'q472',p:'Quem batizou Jesus?',a:['Pedro','Tiago','João Batista','André'],c:2},
  {id:'q473',p:'Quantos apóstolos Jesus tinha?',a:['7','10','12','70'],c:2},
  {id:'q474',p:'Quem traiu Jesus?',a:['Pedro','Tomé','Judas Iscariotes','João'],c:2},
  {id:'q475',p:'Qual o nome do governador que lavou as mãos no julgamento de Jesus?',a:['Herodes','Félix','Pôncio Pilatos','Festo'],c:2},
  {id:'q476',p:'Em qual dia Jesus ressuscitou?',a:['Sábado','Sexta-feira','Domingo','Segunda-feira'],c:2},
  {id:'q477',p:'Quem subiu ao céu num carro de fogo?',a:['Elias','Eliseu','Isaías','Jeremias'],c:0},
  {id:'q478',p:'Quem foi o homem mais sábio da Bíblia?',a:['Davi','Salomão','Josias','Daniel'],c:1},
  {id:'q479',p:'Quem construiu o primeiro templo em Jerusalém?',a:['Davi','Ezequias','Josias','Salomão'],c:3},
  {id:'q480',p:'Quem foi a mãe de Jesus?',a:['Isabel','Marta','Maria','Ana'],c:2},
  {id:'q481',p:'Quem liderou a conquista de Jericó?',a:['Moisés','Calebe','Josué','Gideão'],c:2},
  {id:'q482',p:'Quem foi o juiz que derrotou os midianitas com 300 homens?',a:['Sansão','Baraque','Gideão','Jefté'],c:2},
  {id:'q483',p:'Quem era o gigante que Davi matou?',a:['Og','Golias','Sísara','Aquis'],c:1},
  {id:'q484',p:'Quem foi a rainha que visitou Salomão?',a:['Ester','Jezabel','Rainha de Sabá','Atalia'],c:2},
  {id:'q485',p:'Qual profeta foi engolido por um grande peixe?',a:['Jonas','Amós','Miquéias','Oséias'],c:0},
  {id:'q486',p:'Quem foi o primeiro mártir cristão?',a:['Pedro','Paulo','Estêvão','Tiago'],c:2},
  {id:'q487',p:'Quem se converteu na estrada para Damasco?',a:['Pedro','Barnabé','Saulo (Paulo)','Silas'],c:2},
  {id:'q488',p:'Quantas vezes Pedro negou Jesus?',a:['1','2','3','7'],c:2},
  {id:'q489',p:'Qual o nome do último livro da Bíblia?',a:['Judas','Apocalipse','Hebreus','Apocalipse de Pedro'],c:1},
  {id:'q490',p:'Quem escreveu o livro de Apocalipse?',a:['Paulo','Pedro','Tiago','João'],c:3},
  {id:'q491',p:'O que caiu do céu para alimentar o povo no deserto?',a:['Pão','Carne','Maná','Frutas'],c:2},
  {id:'q492',p:'Quem quase sacrificou seu filho Isaque?',a:['Abraão','Jacó','Noé','Ló'],c:0},
  {id:'q493',p:'Quantos dias durou a chuva do dilúvio?',a:['7','30','40','120'],c:2},
  {id:'q494',p:'Quem foi vendido como escravo para o Egito pelos irmãos?',a:['Benjamim','José','Judá','Rúben'],c:1},
  {id:'q495',p:'Qual o nome da esposa de Ló que virou estátua de sal?',a:['Não tem nome registrado','Sara','Raquel','Rute'],c:0},
  {id:'q496',p:'Quem foi o homem que viveu mais tempo na Bíblia?',a:['Noé','Matusalém','Enoque','Adão'],c:1},
  {id:'q497',p:'Como se chamava a sogra de Rute?',a:['Noemi','Orfa','Ana','Isabel'],c:0},
  {id:'q498',p:'Quem era o profeta do exílio que viu ossos secos?',a:['Isaías','Jeremias','Ezequiel','Daniel'],c:2},
  {id:'q499',p:'Qual praga fez os israelitas marcarem as portas com sangue?',a:['Trevas','Gafanhotos','Morte dos primogênitos','Rãs'],c:2},
  {id:'q500',p:'Qual o nome do lugar onde Jesus orou antes de ser preso?',a:['Getsêmani','Gólgota','Betânia','Monte Sinai'],c:0},
  {id:'q501',p:'Quem era a irmã de Moisés?',a:['Sara','Miriã','Raquel','Rebeca'],c:1},
  {id:'q502',p:'O que Moisés usou para ferir a rocha e sair água?',a:['Uma espada','Uma pedra','Um cajado','A mão'],c:2},
  {id:'q503',p:'Qual o nome do discípulo que duvidou da ressurreição?',a:['Pedro','João','Tiago','Tomé'],c:3},
  {id:'q504',p:'Quantas virgens eram prudentes na parábola?',a:['3','5','7','10'],c:1},
  {id:'q505',p:'Quem era o marido de Maria, mãe de Jesus?',a:['Zacarias','José','Joaquim','João'],c:1},
  {id:'q506',p:'Qual a profissão de Jesus antes do ministério?',a:['Pescador','Carpinteiro','Pastor','Agricultor'],c:1},
  {id:'q507',p:'Quem pediu o corpo de Jesus para sepultar?',a:['Nicodemos','Lázaro','José de Arimateia','João'],c:2},
  {id:'q508',p:'O que os magos do oriente trouxeram para Jesus?',a:['Ouro, Prata e Bronze','Ouro, Incenso e Mirra','Roupas, Comida e Vinho','Joias e Perfumes'],c:1},
  {id:'q509',p:'Quem foi ressuscitado por Jesus após 4 dias?',a:['Filha de Jairo','Filho da viúva de Naim','Lázaro','Tabita'],c:2},
  {id:'q510',p:'Quem era o pai de João Batista?',a:['Zacarias','José','Zebedeu','Zaqueu'],c:0},
  {id:'q511',p:'Qual discípulo era cobrador de impostos?',a:['Pedro','André','Mateus','Filipe'],c:2},
  {id:'q512',p:'Onde Jesus multiplicou os pães e peixes?',a:['Jerusalém','Nazaré','Deserto (perto de Betsaida)','Belém'],c:2},
  {id:'q513',p:'Quantas moedas de prata Judas recebeu?',a:['10','20','30','50'],c:2},
  {id:'q514',p:'Qual o primeiro milagre de Jesus?',a:['Curar um cego','Transformar água em vinho','Andar sobre as águas','Ressuscitar um morto'],c:1},
  {id:'q515',p:'Qual apóstolo escreveu a carta aos Romanos?',a:['Pedro','João','Paulo','Tiago'],c:2},
  {id:'q516',p:'Quem foi a rainha que salvou seu povo na Pérsia?',a:['Vasti','Ester','Jezabel','Atalia'],c:1},
  {id:'q517',p:'Quem interpretou o sonho do Faraó no Egito?',a:['Moisés','Daniel','José','Arão'],c:2},
  {id:'q518',p:'O que Jacó viu num sonho ligando a terra ao céu?',a:['Uma nuvem','Uma escada','Um arco-íris','Uma luz'],c:1},
  {id:'q519',p:'Quem era o sucessor do profeta Elias?',a:['Isaías','Eliseu','Samuel','Amós'],c:1},
  {id:'q520',p:'Quem foi jogado na fornalha ardente?',a:['Daniel','Sadraque, Mesaque e Abede-Nego','Elias','Moisés'],c:1},
  {id:'q521',p:'Qual o nome da cidade cujos muros caíram?',a:['Babilônia','Nínive','Jericó','Jerusalém'],c:2},
  {id:'q522',p:'Quantos espias foram enviados a Canaã por Moisés?',a:['2','7','10','12'],c:3},
  {id:'q523',p:'Quem quase matou o próprio filho em sacrifício?',a:['Noé','Jacó','Abraão','Isaque'],c:2},
  {id:'q524',p:'Qual o sinal da aliança de Deus com Noé?',a:['Uma pomba','Um arco-íris','Uma estrela','O sol'],c:1},
  {id:'q525',p:'Quem escreveu o livro de Atos dos Apóstolos?',a:['Mateus','Marcos','Lucas','João'],c:2},
  {id:'q526',p:'Quem era o mestre de Paulo?',a:['Gamaliel','Pedro','Barnabé','Nicodemos'],c:0},
  {id:'q527',p:'Quantas pragas Deus enviou ao Egito?',a:['7','10','12','3'],c:1},
  {id:'q528',p:'Quem foi a primeira pessoa a ver Jesus ressuscitado?',a:['Pedro','João','Maria Madalena','Tiago'],c:2},
  {id:'q529',p:'Quem foi o sucessor de Moisés?',a:['Arão','Josué','Calebe','Eleazar'],c:1},
  {id:'q530',p:'Qual o nome da mulher que cortou o cabelo de Sansão?',a:['Raabe','Dalila','Jezabel','Ester'],c:1},
  {id:'q531',p:'Qual era a profissão de Paulo?',a:['Pescador','Médico','Fabricante de tendas','Escultor'],c:2},
  {id:'q532',p:'Qual mar Jesus acalmou?',a:['Mar Vermelho','Mar Morto','Mar da Galileia','Mar Grande'],c:2},
  {id:'q533',p:'Quem subiu numa árvore para ver Jesus?',a:['Nicodemos','Bartimeu','Zaqueu','Lázaro'],c:2},
  {id:'q534',p:'Quantos dias Jesus jejuou no deserto?',a:['7','12','40','100'],c:2},
  {id:'q535',p:'Quem foi o profeta que fugiu de Deus num navio?',a:['Elias','Jonas','Isaías','Daniel'],c:1},
  {id:'q536',p:'Qual era a arma de Davi contra Golias?',a:['Uma espada','Uma lança','Uma funda e pedras','Um arco e flecha'],c:2},
  {id:'q537',p:'Quem foi o pai de Salomão?',a:['Saul','Davi','Samuel','Josias'],c:1},
  {id:'q538',p:'Onde Moisés recebeu os 10 mandamentos?',a:['Monte Nebo','Monte Sinai','Monte das Oliveiras','Monte Carmelo'],c:1},
  {id:'q539',p:'Quem foi o primeiro rei de Israel?',a:['Saul','Davi','Salomão','Josué'],c:0},
  {id:'q540',p:'Qual discípulo andou sobre as águas com Jesus?',a:['João','Tiago','Pedro','André'],c:2},
  {id:'q541',p:'Qual o nome do filho mais novo de Jacó?',a:['José','Benjamim','Judá','Levi'],c:1},
  {id:'q542',p:'O que a pomba trouxe a Noé na arca?',a:['Um ramo de oliveira','Uma uva','Um peixe','Nada'],c:0},
  {id:'q543',p:'Quem era o sogro de Moisés?',a:['Labão','Jetro','Potifar','Arão'],c:1},
  {id:'q544',p:'Qual apóstolo era médico?',a:['Mateus','João','Lucas','Marcos'],c:2},
  {id:'q545',p:'Quem ungiu Davi como rei?',a:['Saul','Samuel','Natã','Gad'],c:1},
  {id:'q546',p:'Quantas pedras Davi pegou no ribeiro?',a:['1','3','5','7'],c:2},
  {id:'q547',p:'Quem foi a bisavó de Davi?',a:['Rute','Ester','Sara','Débora'],c:0},
  {id:'q548',p:'Qual o nome da torre que Deus confundiu as línguas?',a:['Torre de Davi','Torre de Vigia','Torre de Babel','Torre de Siloé'],c:2},
  {id:'q549',p:'Quem escreveu Eclesiastes?',a:['Davi','Moisés','Salomão','Isaías'],c:2},
  {id:'q550',p:'Quem foi o profeta que desafiou Baal no Monte Carmelo?',a:['Eliseu','Elias','Jeremias','Amós'],c:1},
  {id:'q551',p:'Quantos anos o povo ficou no deserto?',a:['20','40','50','100'],c:1},
  {id:'q552',p:'Quem foi levado ao céu vivo sem morrer?',a:['Enoque','Abraão','Noé','Davi'],c:0},
  {id:'q553',p:'O que simboliza o Espírito Santo no batismo de Jesus?',a:['Fogo','Vento','Uma pomba','Água'],c:2},
  {id:'q554',p:'Quem escreveu o livro de Provérbios?',a:['Davi','Salomão','Moisés','Daniel'],c:1},
  {id:'q555',p:'Onde Paulo foi picado por uma víbora?',a:['Chipre','Creta','Malta','Roma'],c:2},
  {id:'q556',p:'Quem foi a mulher juíza em Israel?',a:['Débora','Rute','Ester','Dalila'],c:0},
  {id:'q557',p:'Quantos salmos existem na Bíblia?',a:['100','119','150','200'],c:2},
  {id:'q558',p:'Qual era a profissão de Mateus?',a:['Pescador','Carpinteiro','Publicano (Cobrador de impostos)','Pastor'],c:2},
  {id:'q559',p:'Quem foi o sucessor de Elias?',a:['Eliseu','Isaías','Daniel','Amós'],c:0},
  {id:'q560',p:'Qual o nome do anjo que apareceu a Maria?',a:['Miguel','Rafael','Gabriel','Uriel'],c:2},
  {id:'q561',p:'Qual o nome do mar onde os discípulos pescavam quando Jesus apareceu após a ressurreição?',a:['Mar Morto','Mar Vermelho','Mar de Tiberíades','Mar Mediterrâneo'],c:2},
  {id:'q562',p:'Quem foi o profeta que sucedeu a Moisés na liderança?',a:['Calebe','Josué','Arão','Eleazar'],c:1},
  {id:'q563',p:'Em qual cidade Paulo nasceu?',a:['Jerusalém','Roma','Tarso','Antioquia'],c:2},
  {id:'q564',p:'Qual era o nome do jardim onde Jesus suou gotas de sangue?',a:['Éden','Getsemani','Gólgota','Betânia'],c:1},
  {id:'q565',p:'Quem foi o rei que mandou Daniel para a cova dos leões?',a:['Nabucodonosor','Ciro','Dário','Belsazar'],c:2},
  {id:'q566',p:'Qual o nome da mulher que escondeu os espias em Jericó?',a:['Raabe','Rute','Débora','Dalila'],c:0},
  {id:'q567',p:'Quantas virgens eram loucas na parábola de Jesus?',a:['10','3','5','7'],c:2},
  {id:'q568',p:'Quem foi o discípulo que substituiu Judas Iscariotes?',a:['Barnabé','Matias','Silas','Estêvão'],c:1},
  {id:'q569',p:'Qual o nome do monte onde Elias desafiou os profetas de Baal?',a:['Sinai','Nebo','Carmelo','Hermom'],c:2},
  {id:'q570',p:'Quem era o companheiro de Paulo na prisão em Filipos?',a:['Pedro','Barnabé','Silas','Timóteo'],c:2},
  {id:'q571',p:'Qual praga transformou as águas do Egito em sangue?',a:['Primeira','Terceira','Quinta','Sétima'],c:0},
  {id:'q572',p:'Quem foi a mãe de João Batista?',a:['Maria','Ana','Isabel','Marta'],c:2},
  {id:'q573',p:'Qual o nome do gigante que Davi derrotou?',a:['Og','Golias','Analeque','Sísara'],c:1},
  {id:'q574',p:'Quem foi o homem que pediu para caminhar sobre as águas com Jesus?',a:['João','Tiago','André','Pedro'],c:3},
  {id:'q575',p:'Quantas vezes ao dia Daniel orava voltado para Jerusalém?',a:['1','3','5','7'],c:1},
  {id:'q576',p:'Quem foi o sucessor do rei Saul?',a:['Salomão','Samuel','Davi','Jônatas'],c:2},
  {id:'q577',p:'Qual era a profissão de Lucas?',a:['Pescador','Médico','Cobrador de impostos','Carpinteiro'],c:1},
  {id:'q578',p:'Quem subiu numa árvore para ver Jesus?',a:['Bartimeu','Lázaro','Zaqueu','Nicodemos'],c:2},
  {id:'q579',p:'Qual o nome do lugar onde Jesus foi crucificado?',a:['Betânia','Gólgota','Nazaré','Belém'],c:1},
  {id:'q580',p:'Quem foi o profeta levado ao céu num redemoinho?',a:['Elias','Eliseu','Isaías','Daniel'],c:0},
  {id:'q581',p:'Qual o nome da sogra de Rute?',a:['Sara','Ana','Noemi','Isabel'],c:2},
  {id:'q582',p:'Quantos capítulos tem o livro de Salmos?',a:['100','119','150','120'],c:2},
  {id:'q583',p:'Quem foi o rei que viu a escrita na parede?',a:['Nabucodonosor','Belsazar','Ciro','Dário'],c:1},
  {id:'q584',p:'Qual o nome do irmão de Maria e Marta que Jesus ressuscitou?',a:['Simão','Judas','Lázaro','Zaqueu'],c:2},
  {id:'q585',p:'Quem escreveu a maioria dos livros do Novo Testamento?',a:['Pedro','João','Lucas','Paulo'],c:3},
  {id:'q586',p:'Qual o nome do rio onde Jesus foi batizado?',a:['Nilo','Eufrates','Tigre','Jordão'],c:3},
  {id:'q587',p:'Quem foi a rainha que visitou Salomão?',a:['Vasti','Ester','Rainha de Sabá','Jezabel'],c:2},
  {id:'q588',p:'Qual o nome da cidade onde Jesus cresceu?',a:['Nazaré','Belém','Jerusalém','Jericó'],c:0},
  {id:'q589',p:'Quem foi o primeiro homem criado por Deus?',a:['Caim','Abel','Adão','Sete'],c:2},
  {id:'q590',p:'Quantas pragas Deus enviou ao Egito?',a:['3','7','10','12'],c:2},
  {id:'q591',p:'Quem foi o profeta engolido por um grande peixe?',a:['Jonas','Amós','Miquéias','Oséias'],c:0},
  {id:'q592',p:'Qual o nome da torre que Deus confundiu as línguas?',a:['Torre de Davi','Torre de Babel','Torre de Siloé','Torre de Vigia'],c:2},
  {id:'q593',p:'Quem quase sacrificou seu filho Isaque?',a:['Abraão','Jacó','Noé','Ló'],c:0},
  {id:'q594',p:'Qual o nome do anjo que apareceu a Maria?',a:['Miguel','Gabriel','Rafael','Uriel'],c:1},
  {id:'q595',p:'Quem foi o homem que viveu 969 anos?',a:['Noé','Adão','Matusalém','Enoque'],c:2},
  {id:'q596',p:'Quantos livros tem o Novo Testamento?',a:['39','27','66','12'],c:1},
  {id:'q597',p:'Quem foi a primeira pessoa a ver Jesus ressuscitado?',a:['Pedro','João','Maria Madalena','Tiago'],c:2},
  {id:'q598',p:'Qual o nome do filho de Davi que construiu o Templo?',a:['Absalão','Salomão','Adonias','Amnon'],c:1},
  {id:'q599',p:'O que caiu do céu para alimentar o povo no deserto?',a:['Pão','Carne','Maná','Frutas'],c:2},
  {id:'q600',p:'Quem foi o discípulo que duvidou da ressurreição?',a:['Pedro','Tomé','Tiago','João'],c:1},
  {id:'q601',p:'Qual o nome do monte onde Moisés recebeu a Lei?',a:['Horebe','Sinai','Nebo','Sião'],c:1},
  {id:'q602',p:'Quem foi o sucessor de Elias?',a:['Isaías','Eliseu','Samuel','Daniel'],c:1},
  {id:'q603',p:'Qual a profissão de Pedro?',a:['Carpinteiro','Pescador','Cobrador de impostos','Pastor'],c:1},
  {id:'q604',p:'Quem era o marido de Maria, mãe de Jesus?',a:['Zacarias','Joaquim','José','João'],c:2},
  {id:'q605',p:'Quantas moedas de prata Judas recebeu para trair Jesus?',a:['10','20','30','50'],c:2},
  {id:'q606',p:'Quem foi o primeiro mártir cristão?',a:['Tiago','Pedro','Paulo','Estêvão'],c:3},
  {id:'q607',p:'Qual o nome da cidade onde os muros caíram?',a:['Babilônia','Jericó','Nínive','Jerusalém'],c:1},
  {id:'q608',p:'Quem escreveu o livro de Apocalipse?',a:['Paulo','Pedro','Tiago','João'],c:3},
  {id:'q609',p:'O que a mulher de Ló virou ao olhar para trás?',a:['Pedra','Estátua de sal','Pó','Fumaça'],c:1},
  {id:'q610',p:'Quem foi o rei que pediu sabedoria a Deus?',a:['Davi','Saul','Salomão','Josias'],c:2},
  {id:'q611',p:'Qual o nome do lugar onde Adão e Eva moravam?',a:['Getsêmani','Paraíso','Éden','Canaã'],c:2},
  {id:'q612',p:'Quem matou Golias?',a:['Saul','Samuel','Davi','Jônatas'],c:2},
  {id:'q613',p:'Qual praga foi a última no Egito?',a:['Gafanhotos','Trevas','Morte dos primogênitos','Rãs'],c:2},
  {id:'q614',p:'Quem foi levado por Deus sem morrer?',a:['Enoque','Abraão','Noé','Davi'],c:0},
  {id:'q615',p:'Quantas virgens eram prudentes na parábola?',a:['10','7','5','3'],c:2},
  {id:'q616',p:'Quem era o pai de Davi?',a:['Saul','Samuel','Jessé','Salomão'],c:2},
  {id:'q617',p:'Qual o primeiro milagre de Jesus?',a:['Curar um cego','Transformar água em vinho','Andar sobre as águas','Ressuscitar um morto'],c:1},
  {id:'q618',p:'Quem foi vendido pelos irmãos como escravo?',a:['Jacó','José','Judá','Benjamim'],c:1},
  {id:'q619',p:'Quantos dias Jesus jejuou no deserto?',a:['7','12','40','100'],c:2},
  {id:'q620',p:'Qual o nome da mulher que cortou o cabelo de Sansão?',a:['Raabe','Dalila','Jezabel','Ester'],c:1},
  {id:'q621',p:'Quem escreveu o livro de Atos?',a:['Mateus','Marcos','Lucas','João'],c:2},
  {id:'q622',p:'O que simboliza o Espírito Santo no batismo de Jesus?',a:['Fogo','Vento','Uma pomba','Água'],c:2},
  {id:'q623',p:'Quem era o sogro de Moisés?',a:['Arão','Jetro','Potifar','Labão'],c:1},
  {id:'q624',p:'Qual apóstolo era cobrador de impostos?',a:['Pedro','André','Mateus','Filipe'],c:2},
  {id:'q625',p:'Quantas pedras Davi pegou no ribeiro?',a:['1','3','5','7'],c:2},
  {id:'q626',p:'Quem foi o profeta que desafiou Baal no Carmelo?',a:['Eliseu','Elias','Isaías','Jeremias'],c:1},
  {id:'q627',p:'Onde Jesus nasceu?',a:['Nazaré','Jerusalém','Belém','Jericó'],c:2},
  {id:'q628',p:'Quem quase matou Abel?',a:['Adão','Sete','Enoque','Caim'],c:3},
  {id:'q629',p:'Qual o nome do filho de Abraão com Sara?',a:['Ismael','Isaque','Jacó','José'],c:1},
  {id:'q630',p:'Quem liderou o povo no Mar Vermelho?',a:['Arão','Josué','Moisés','Samuel'],c:2},
  {id:'q631',p:'Qual o menor livro da Bíblia?',a:['Judas','3 João','Filemon','Obadias'],c:1},
  {id:'q632',p:'Quem foi a rainha que salvou os judeus na Pérsia?',a:['Vasti','Ester','Jezabel','Atalia'],c:1},
  {id:'q633',p:'O que Noé construiu?',a:['Templo','Torre','Arca','Altar'],c:2},
  {id:'q634',p:'Quem foi o homem que lutou com um anjo?',a:['Abraão','Isaque','Jacó','José'],c:2},
  {id:'q635',p:'Qual o nome do filho mais novo de Jacó?',a:['José','Benjamim','Judá','Levi'],c:1},
  {id:'q636',p:'Quantos dias durou a chuva do dilúvio?',a:['7','30','40','120'],c:2},
  {id:'q637',p:'Quem era o pai de João e Tiago?',a:['Zebedeu','Zacarias','Zaqueu','Zebulom'],c:0},
  {id:'q638',p:'O que a pomba trouxe a Noé?',a:['Ramo de oliveira','Uva','Peixe','Nada'],c:0},
  {id:'q639',p:'Quem foi o sucessor de Saul?',a:['Samuel','Salomão','Davi','Jônatas'],c:2},
  {id:'q640',p:'Qual mar Moisés abriu?',a:['Galileia','Morto','Vermelho','Mediterrâneo'],c:2},
  {id:'q641',p:'Quem foi jogado na cisterna?',a:['José','Davi','Daniel','Benjamim'],c:0},
  {id:'q642',p:'Quantas tribos tinha Israel?',a:['10','12','7','3'],c:1},
  {id:'q643',p:'Quem foi o pai de Salomão?',a:['Saul','Davi','Samuel','Natã'],c:1},
  {id:'q644',p:'Qual o nome do irmão gêmeo de Jacó?',a:['José','Esaú','Ismael','Isaque'],c:1},
  {id:'q645',p:'Quem escreveu Provérbios?',a:['Davi','Salomão','Moisés','Isaías'],c:1},
  {id:'q646',p:'O que caiu do céu no deserto?',a:['Pão','Carne','Maná','Mel'],c:2},
  {id:'q647',p:'Quem era o sogro de Jacó?',a:['Isaque','Abraão','Labão','Potifar'],c:2},
  {id:'q648',p:'Quantos apóstolos Jesus escolheu?',a:['7','10','12','70'],c:2},
  {id:'q649',p:'Quem foi batizado por João Batista?',a:['Pedro','Paulo','Jesus','Tiago'],c:2},
  {id:'q650',p:'Qual o último livro da Bíblia?',a:['Judas','Apocalipse','Hebreus','Malaquias'],c:1},
  {id:'q651',p:'Quem subiu numa figueira para ver Jesus?',a:['Nicodemos','Bartimeu','Zaqueu','Lázaro'],c:2},
  {id:'q652',p:'Quantos dias Lázaro estava morto?',a:['1','3','4','7'],c:2},
  {id:'q653',p:'Quem era a mãe de Samuel?',a:['Ana','Penina','Isabel','Maria'],c:0},
  {id:'q654',p:'Qual o primeiro mandamento?',a:['Não matar','Honrar pai e mãe','Amar a Deus sobre tudo','Não roubar'],c:2},
  {id:'q655',p:'Quem foi o juiz mais forte?',a:['Gideão','Sansão','Samuel','Jefté'],c:1},
  {id:'q656',p:'Onde Jesus foi crucificado?',a:['Gólgota','Betânia','Monte Sinai','Getsemani'],c:0},
  {id:'q657',p:'Quem negou Jesus 3 vezes?',a:['Judas','Tomé','Pedro','João'],c:2},
  {id:'q658',p:'Qual o menor livro do Antigo Testamento?',a:['Malaquias','Ageu','Obadias','Oséias'],c:2},
  {id:'q659',p:'Quem ungiu Davi rei?',a:['Saul','Samuel','Natã','Gad'],c:1},
  {id:'q660',p:'O que a mulher de Ló virou?',a:['Pedra','Estátua de sal','Cinza','Pó'],c:1},
  {id:'q661',p:'Quem foi o profeta que ungiu Saul?',a:['Samuel','Natã','Elias','Eliseu'],c:0},
  {id:'q662',p:'Onde Moisés recebeu os 10 mandamentos?',a:['Nebo','Sinai','Carmelo','Sião'],c:1},
  {id:'q663',p:'Quem foi o primeiro rei?',a:['Davi','Salomão','Saul','Josias'],c:2},
  {id:'q664',p:'Qual mar Jesus acalmou?',a:['Vermelho','Morto','Galileia','Mediterrâneo'],c:2},
  {id:'q665',p:'Quem escreveu a carta aos Romanos?',a:['Pedro','João','Paulo','Tiago'],c:2},
  {id:'q666',p:'Quem quase matou o filho em sacrifício?',a:['Noé','Abraão','Jacó','Davi'],c:1},
  {id:'q667',p:'Quantas pragas teve o Egito?',a:['7','10','12','15'],c:1},
  {id:'q668',p:'Quem foi o profeta engolido pelo peixe?',a:['Jonas','Amós','Elias','Daniel'],c:0},
  {id:'q669',p:'Qual o nome da torre da confusão das línguas?',a:['Babel','Davi','Siloé','Jerusalém'],c:0},
  {id:'q670',p:'Quem viveu 969 anos?',a:['Noé','Adão','Matusalém','Enoque'],c:2},
  {id:'q671',p:'Quem foi o sucessor de Moisés?',a:['Arão','Josué','Calebe','Samuel'],c:1},
  {id:'q672',p:'Quem era o pai de Isaque?',a:['Jacó','Ló','Noé','Abraão'],c:3},
  {id:'q673',p:'Qual discípulo duvidou da ressurreição?',a:['Pedro','Tomé','João','Tiago'],c:1},
  {id:'q674',p:'Quem subiu ao céu no redemoinho?',a:['Elias','Eliseu','Isaías','Jeremias'],c:0},
  {id:'q675',p:'Quem foi a mãe de Jesus?',a:['Ana','Isabel','Maria','Marta'],c:2},
  {id:'q676',p:'Quantos apóstolos tinha Jesus?',a:['10','12','14','70'],c:1},
  {id:'q677',p:'Quem traiu Jesus?',a:['Pedro','João','Judas','Mateus'],c:2},
  {id:'q678',p:'Em que cidade Jesus nasceu?',a:['Nazaré','Belém','Jerusalém','Jericó'],c:1},
  {id:'q679',p:'Quem foi o primeiro homem?',a:['Abel','Adão','Caim','Sete'],c:1},
  {id:'q680',p:'Quem construiu a arca?',a:['Moisés','Abraão','Noé','Davi'],c:2},
  {id:'q681',p:'Qual o primeiro milagre de Jesus?',a:['Cura','Vinho','Pães','Andar na água'],c:1},
  {id:'q682',p:'O que Noé usou para fazer a arca?',a:['Cedro','Gofer (madeira)',' Carvalho','Pinheiro'],c:1},
  {id:'q683',p:'Quem foi o homem mais sábio?',a:['Davi','Salomão','Daniel','Josias'],c:1},
  {id:'q684',p:'Quem matou Golias?',a:['Saul','Samuel','Davi','Jônatas'],c:2},
  {id:'q685',p:'Qual o nome da esposa de Isaque?',a:['Sara','Raquel','Rebeca','Lea'],c:2},
  {id:'q686',p:'Quem foi levado por Deus sem morrer?',a:['Enoque','Noé','Abraão','Davi'],c:0},
  {id:'q687',p:'Quem foi vendido pelos irmãos?',a:['Jacó','José','Judá','Benjamim'],c:1},
  {id:'q688',p:'Quantos dias Jesus jejuou?',a:['7','12','40','100'],c:2},
  {id:'q689',p:'Quem cortou o cabelo de Sansão?',a:['Raabe','Dalila','Jezabel','Atalia'],c:1},
  {id:'q690',p:'Quem escreveu Atos?',a:['Mateus','Marcos','Lucas','João'],c:2},
  {id:'q691',p:'Qual o sinal do Espírito Santo no batismo?',a:['Fogo','Pomba','Vento','Água'],c:1},
  {id:'q692',p:'Quem foi o sucessor de Elias?',a:['Isaías','Eliseu','Samuel','Amós'],c:1},
  {id:'q693',p:'Onde Jesus foi crucificado?',a:['Gólgota','Betânia','Monte das Oliveiras','Nazaré'],c:0},
  {id:'q694',p:'Quantas moedas Judas ganhou?',a:['10','20','30','50'],c:2},
  {id:'q695',p:'Quem foi o primeiro mártir?',a:['Paulo','Pedro','Estêvão','Tiago'],c:2},
  {id:'q696',p:'Quem era o sogro de Moisés?',a:['Jetro','Arão','Labão','Potifar'],c:0},
  {id:'q697',p:'Quem era o cobrador de impostos?',a:['Pedro','André','Mateus','Filipe'],c:2},
  {id:'q698',p:'Qual o último livro da Bíblia?',a:['Judas','Apocalipse','Hebreus','Tiago'],c:1},
  {id:'q699',p:'Quem subiu na árvore para ver Jesus?',a:['Zaqueu','Nicodemos','Bartimeu','Lázaro'],c:0},
  {id:'q700',p:'Quem ressuscitou após 4 dias?',a:['Filha de Jairo','Lázaro','Tabita','Estêvão'],c:1},
  {id:'q701',p:'Qual o primeiro mandamento?',a:['Honrar pais','Não matar','Amar a Deus','Não roubar'],c:2},
  {id:'q702',p:'Quem foi o juiz mais forte?',a:['Gideão','Sansão','Samuel','Jefté'],c:1},
  {id:'q703',p:'O que a mulher de Ló virou?',a:['Pedra','Sal','Pó','Fumaça'],c:1},
  {id:'q704',p:'Quem ungiu Davi?',a:['Saul','Samuel','Natã','Gad'],c:1},
  {id:'q705',p:'Quem quase matou Abel?',a:['Adão','Caim','Sete','Enoque'],c:1},
  {id:'q706',p:'Quem quase sacrificou o filho?',a:['Noé','Abraão','Jacó','Davi'],c:1},
  {id:'q707',p:'Qual mar Moisés abriu?',a:['Galileia','Morto','Vermelho','Mediterrâneo'],c:2},
  {id:'q708',p:'Quem interpretou o sonho do Faraó?',a:['José','Daniel','Moisés','Arão'],c:0},
  {id:'q709',p:'Qual o nome do filho de Abraão e Sara?',a:['Ismael','Isaque','Jacó','José'],c:1},
  {id:'q710',p:'Quem liderou Jericó?',a:['Moisés','Josué','Calebe','Arão'],c:1},
  {id:'q711',p:'Quem foi jogado na cova dos leões?',a:['Daniel','José','Estêvão','Elias'],c:0},
  {id:'q712',p:'Quantas virgens eram prudentes?',a:['5','7','10','12'],c:0},
  {id:'q713',p:'Quem era o pai de Davi?',a:['Saul','Samuel','Jessé','Salomão'],c:2},
  {id:'q714',p:'Qual discípulo negou Jesus?',a:['Pedro','João','Judas','Tomé'],c:0},
  {id:'q715',p:'Qual a profissão de Paulo?',a:['Pescador','Tendas','Médico','Escultor'],c:1},
  {id:'q716',p:'Quem foi a bisavó de Davi?',a:['Rute','Ester','Sara','Rebeca'],c:0},
  {id:'q717',p:'Quem escreveu Provérbios?',a:['Davi','Salomão','Moisés','Daniel'],c:1},
  {id:'q718',p:'Quem lutou com o anjo?',a:['Abraão','Isaque','Jacó','José'],c:2},
  {id:'q719',p:'Qual o nome do rio do batismo de Jesus?',a:['Nilo','Jordão','Eufrates','Tigre'],c:1},
  {id:'q720',p:'O que caía do céu no deserto?',a:['Pão','Carne','Maná','Mel'],c:2},
  {id:'q721',p:'Quem foi o profeta que desafiou Baal?',a:['Elias','Eliseu','Isaías','Daniel'],c:0},
  {id:'q722',p:'Quem era o sogro de Jacó?',a:['Isaque','Labão','Abraão','Potifar'],c:1},
  {id:'q723',p:'Quem viu a sarça ardente?',a:['Josué','Moisés','Arão','Samuel'],c:1},
  {id:'q724',p:'Onde Jesus multiplicou os pães?',a:['Jerusalém','Deserto','Nazaré','Belém'],c:1},
  {id:'q725',p:'Quem era a rainha da Pérsia?',a:['Ester','Vasti','Jezabel','Atalia'],c:0},
  {id:'q726',p:'Quem subiu ao céu vivo?',a:['Enoque','Noé','Abraão','Davi'],c:0},
  {id:'q727',p:'Quantos capítulos tem Salmos?',a:['100','150','120','119'],c:1},
  {id:'q728',p:'Quem escreveu Apocalipse?',a:['Paulo','João','Pedro','Tiago'],c:1},
  {id:'q729',p:'Quem viu o vale de ossos secos?',a:['Isaías','Ezequiel','Jeremias','Daniel'],c:1},
  {id:'q730',p:'Quem foi o sucessor de Saul?',a:['Samuel','Davi','Salomão','Josias'],c:1},
  {id:'q731',p:'Qual mar Jesus andou sobre as águas?',a:['Vermelho','Morto','Galileia','Mediterrâneo'],c:2},
  {id:'q732',p:'Quem era o pai de Isaque?',a:['Abraão','Jacó','José','Ló'],c:0},
  {id:'q733',p:'Quem era a mãe de Samuel?',a:['Ana','Penina','Isabel','Maria'],c:0},
  {id:'q734',p:'Quem era o marido de Rute?',a:['Boaz','Malon','Elimeleque','Quiliom'],c:0},
  {id:'q735',p:'Qual discípulo era médico?',a:['Mateus','Marcos','Lucas','João'],c:2},
  {id:'q736',p:'Quem foi jogado na fornalha?',a:['Daniel','Sadraque','Moisés','Elias'],c:1},
  {id:'q737',p:'Quem viu a escrita na parede?',a:['Belsazar','Nabucodonosor','Dário','Ciro'],c:0},
  {id:'q738',p:'Quem quase matou Isaque?',a:['Jacó','Abraão','Ló','Noé'],c:1},
  {id:'q739',p:'Qual o nome do anjo de Maria?',a:['Gabriel','Miguel','Rafael','Uriel'],c:0},
  {id:'q740',p:'Quantos dias Lázaro morreu?',a:['3','4','7','1'],c:1},
  {id:'q741',p:'Quem liderou o povo após Moisés?',a:['Josué','Calebe','Arão','Samuel'],c:0},
  {id:'q742',p:'Quem era a sogra de Rute?',a:['Noemi','Orfa','Sara','Ana'],c:0},
  {id:'q743',p:'O que a pomba trouxe a Noé?',a:['Ramo','Uva','Peixe','Nada'],c:0},
  {id:'q744',p:'Quem era o gigante de Davi?',a:['Golias','Og','Sísara','Aquis'],c:0},
  {id:'q745',p:'Quem foi vendido pelos irmãos?',a:['José','Benjamim','Jacó','Judá'],c:0},
  {id:'q746',p:'Quem escreveu Romanos?',a:['Paulo','Pedro','João','Tiago'],c:0},
  {id:'q747',p:'Quem era a mulher juíza?',a:['Débora','Rute','Ester','Sara'],c:0},
  {id:'q748',p:'Quem negou Jesus 3 vezes?',a:['Pedro','João','Judas','Tomé'],c:0},
  {id:'q749',p:'Quantas virgens eram loucas?',a:['5','7','10','3'],c:0},
  {id:'q750',p:'Quem foi o primeiro mártir?',a:['Estêvão','Tiago','Pedro','Paulo'],c:0},
  {id:'q751',p:'Quem quase matou Abel?',a:['Caim','Sete','Adão','Enoque'],c:0},
  {id:'q752',p:'Quem batizou Jesus?',a:['João Batista','André','Pedro','Tiago'],c:0},
  {id:'q753',p:'Quantas moedas Judas recebeu?',a:['30','20','50','10'],c:0},
  {id:'q754',p:'Qual o primeiro milagre de Jesus?',a:['Vinho','Cura','Pães','Andar'],c:0},
  {id:'q755',p:'O que caiu do céu no deserto?',a:['Maná','Pão','Carne','Mel'],c:0},
  {id:'q756',p:'Quem era o pai de João e Tiago?',a:['Zebedeu','Zacarias','Zaqueu','Zebulom'],c:0},
  {id:'q757',p:'Quem quase sacrificou o filho?',a:['Abraão','Noé','Jacó','Davi'],c:0},
  {id:'q758',p:'Quem viu a sarça ardente?',a:['Moisés','Josué','Arão','Samuel'],c:0},
  {id:'q759',p:'Quem foi jogado na cova?',a:['Daniel','José','Estêvão','Elias'],c:0},
  {id:'q760',p:'Quem viu ossos secos?',a:['Ezequiel','Isaías','Jeremias','Daniel'],c:0},
];

// ── ESTILOS ────────────────────────────────────────────────
function injectStyles() {
  if (document.getElementById('duel-styles-final')) return;

  const s = document.createElement('style');
  s.id = 'duel-styles-final';
  s.textContent = `
  @keyframes silverShine { from { left: -70%; } to { left: 130%; } }
  @keyframes championGlow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
  @keyframes pdPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.14); } }
  @keyframes arenaFadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes badgePop { 0% { opacity:0; transform:translate(-50%,-50%) scale(.7); } 18% { opacity:1; transform:translate(-50%,-50%) scale(1.08); } 30% { transform:translate(-50%,-50%) scale(1); } 72% { opacity:1; } 100% { opacity:0; transform:translate(-50%,-50%) scale(.9); } }
  @keyframes loaderSpin { to { transform: rotate(360deg); } }
  @keyframes oppFlash { 0%,100% { background:rgba(255,255,255,.03); border-color:rgba(212,175,55,.18); } 40% { background:rgba(46,204,113,.14); border-color:rgba(46,204,113,.55); } }

  .presence-dot { position: absolute; right: 1px; bottom: 1px; width: 12px; height: 12px; border-radius: 50%; border: 2px solid #111; z-index: 3; }
  .presence-dot.online { background: #00e676; box-shadow: 0 0 8px #00e676, 0 0 16px rgba(0,230,118,.5); animation: pdPulse 1.8s ease infinite; }
  .presence-dot.offline { background: #f44336; box-shadow: 0 0 8px rgba(244,67,54,.35); }

  .duel-overlay, .duel-final {
    position: fixed; inset: 0; display: flex; align-items: center; justify-content: center;
    background: rgba(0,0,0,.82); backdrop-filter: blur(10px);
  }
  .duel-overlay { z-index: 9999; }
  .duel-final { z-index: 10000; }

  .duel-box {
    width: min(94vw, 520px);
    background: linear-gradient(170deg, #160607 0%, #0d0d0d 70%);
    border: 1px solid rgba(212,175,55,.28);
    border-radius: 22px; padding: 28px 22px;
    box-shadow: 0 24px 60px rgba(0,0,0,.6);
  }

  .duel-box h2 {
    margin: 0 0 8px;
    font-family: 'Cinzel', serif;
    color: #f4d15f;
    text-align: center;
  }

  .duel-box p {
    margin: 0 0 18px;
    color: #f5f5f5;
    text-align: center;
    line-height: 1.5;
  }

  .duel-btn-silver {
    position: relative; overflow: hidden;
    background: linear-gradient(135deg, #a0a0a0, #ffffff, #a0a0a0);
    color: #1a1a1a; border: 1px solid #fff; border-radius: 14px;
    padding: 14px 18px; font-weight: 900; cursor: pointer; width: 100%;
  }
  .duel-btn-silver::before {
    content: ''; position: absolute; top: 0; left: -70%;
    width: 40%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.8), transparent);
    transform: skewX(-22deg); animation: silverShine 2.4s linear infinite;
  }
  .duel-btn-silver:disabled { opacity: .55; cursor: not-allowed; }

  .duel-btn-matte-red {
    background: #8b1e28; color: #fff; border: 1px solid #6b141d;
    border-radius: 14px; padding: 14px 18px; font-weight: 700; cursor: pointer; width: 100%;
  }

  .duel-btn-dark {
    background: #232323; color: #b5b5b5; border: 1px solid #3b3b3b;
    border-radius: 14px; padding: 14px 18px; font-weight: 700; cursor: pointer; width: 100%;
  }

  .duel-arena {
    position: fixed; inset: 0; z-index: 9998;
    background: linear-gradient(180deg, #0a0000 0%, #130505 30%, #070707 100%);
    overflow: auto;
    animation: arenaFadeIn 220ms ease both;
  }

  /* Loader de sincronização */
  .duel-sync-loader {
    position: fixed; inset: 0; z-index: 10100;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    background: rgba(0,0,0,.72); backdrop-filter: blur(8px);
    gap: 14px;
  }
  .duel-sync-loader .spin {
    width: 38px; height: 38px; border-radius: 50%;
    border: 3px solid rgba(212,175,55,.2); border-top-color: #d4af37;
    animation: loaderSpin .75s linear infinite;
  }
  .duel-sync-loader .lbl {
    color: #f4d15f; font-family: 'Cinzel', serif; font-weight: 700; font-size: .9rem;
    letter-spacing: .5px;
  }

  /* Badge de rodada */
  .duel-round-badge {
    position: fixed; top: 50%; left: 50%; z-index: 10090;
    transform: translate(-50%,-50%) scale(1);
    background: linear-gradient(135deg, #1a0a00, #2e1a00);
    border: 2px solid #d4af37;
    border-radius: 20px; padding: 18px 36px; text-align: center;
    box-shadow: 0 0 40px rgba(212,175,55,.35);
    pointer-events: none;
    animation: badgePop 700ms ease forwards;
  }
  .duel-round-badge .rb-label { color: #d4af37; font-size: .78rem; letter-spacing: 1px; font-weight: 700; }
  .duel-round-badge .rb-num { color: #f6d875; font-family: 'Cinzel', serif; font-size: 2rem; font-weight: 900; line-height: 1.1; }

  /* Flash no card do oponente */
  .arena-status-card.opp-flash { animation: oppFlash .9s ease; }

  .duel-arena .arena-wrap { max-width: 760px; margin: 0 auto; padding: 0 14px 24px; }

  .arena-head {
    position: sticky; top: 0; z-index: 4; background: rgba(0,0,0,.78);
    backdrop-filter: blur(10px); border-bottom: 1px solid rgba(212,175,55,.25); padding: 14px;
  }

  .arena-topline { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
  .arena-opponent { display: flex; align-items: center; gap: 10px; color: #f7dd85; font-weight: 800; }
  .arena-opponent img { width: 48px; height: 48px; border-radius: 50%; border: 2px solid #d4af37; object-fit: cover; }
  .arena-head-meta { color: #d4af37; font-family: 'Cinzel', serif; font-size: .95rem; font-weight: 800; }

  .arena-question {
    margin-top: 18px; background: rgba(255,255,255,.04);
    border: 1px solid rgba(212,175,55,.2);
    border-radius: 18px; padding: 18px; color: #fff;
  }

  .arena-question .q-label { color: #d4af37; font-size: .8rem; letter-spacing: .5px; margin-bottom: 10px; font-weight: 700; }
  .arena-question .q-text { font-size: 1.1rem; line-height: 1.55; }

  .arena-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px; }

  .arena-opt {
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(255,255,255,.05); color: #fff;
    border-radius: 14px; padding: 14px 12px; min-height: 60px;
    text-align: center; font-weight: 700; cursor: pointer; transition: .18s;
  }

  .arena-opt:hover:not(:disabled) { border-color: #d4af37; background: rgba(212,175,55,.12); }
  .arena-opt:disabled { opacity: .92; cursor: not-allowed; }
  .arena-opt.selected { border-color: #d4af37; background: rgba(212,175,55,.14); }

  .arena-status-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 14px; }

  .arena-status-card {
    border: 1px solid rgba(212,175,55,.18);
    background: rgba(255,255,255,.03);
    border-radius: 14px; padding: 12px; text-align: center; color: #d4af37; font-weight: 700;
  }

  .arena-status-card small { display: block; color: #9e9e9e; font-weight: 500; margin-top: 6px; }

  .arena-timer { margin-top: 16px; text-align: center; color: #f6d875; font-family: 'Cinzel', serif; font-size: 1.2rem; font-weight: 900; }

  .arena-score {
    display: flex; justify-content: space-between; align-items: center;
    margin-top: 16px; padding: 12px 16px; border: 1px solid rgba(212,175,55,.18);
    border-radius: 16px; background: rgba(255,255,255,.03);
  }

  .arena-score .n { font-size: 1.8rem; font-family: 'Cinzel', serif; color: #f6d875; }

  .arena-quit {
    margin-top: 18px; width: 100%; background: #262626; color: #c8c8c8;
    border: 1px solid #3a3a3a; border-radius: 14px; padding: 13px; font-weight: 700; cursor: pointer;
  }

  .champion-tag {
    display: inline-block; margin-top: 8px; padding: 6px 12px; border-radius: 999px;
    background: linear-gradient(90deg, #a46c00, #d4af37, #fff1a8, #d4af37, #a46c00);
    background-size: 200% 100%; color: #1a1200; font-weight: 900;
    animation: championGlow 2.2s linear infinite; box-shadow: 0 0 14px rgba(212,175,55,.35);
  }

  .silver-tag {
    display: inline-block; margin-top: 8px; padding: 6px 12px; border-radius: 999px;
    background: linear-gradient(90deg, #676767, #d9d9d9, #8f8f8f);
    background-size: 200% 100%; color: #1c1c1c; font-weight: 900;
    animation: championGlow 2.2s linear infinite;
  }

  .desist-tag {
    display: inline-block; margin-top: 8px; padding: 6px 12px; border-radius: 999px;
    background: #d2d2d2; color: #4d4d4d; font-weight: 900;
  }

  .final-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 18px; }

  .final-card {
    border: 1px solid rgba(212,175,55,.18); border-radius: 18px; padding: 14px;
    background: rgba(255,255,255,.03); text-align: center;
  }

  .final-card img { width: 64px; height: 64px; border-radius: 50%; border: 2px solid #d4af37; object-fit: cover; }
  .final-card .name { margin-top: 10px; color: #fff; font-weight: 800; }
  .final-card .score { color: #f6d875; font-size: 1.6rem; font-family: 'Cinzel', serif; font-weight: 900; }

  .final-buttons { display: grid; grid-template-columns: 1fr; gap: 12px; margin-top: 18px; }

  @media (max-width: 640px) {
    .arena-grid { grid-template-columns: 1fr; }
    .final-grid { grid-template-columns: 1fr 1fr; }
  }
  `;
  document.head.appendChild(s);
}

// ── UTILITÁRIOS ────────────────────────────────────────────
function avatar(nome = '?') {
  const ini = String(nome || '?').trim().split(/\s+/).map(p => p[0]).join('').slice(0, 2).toUpperCase() || '?';
  const cor = ['#d4af37', '#2ecc71', '#4a90e2', '#e74c3c', '#9b59b6'][Math.abs((nome || '').charCodeAt(0) || 0) % 5];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="${cor}"/><text x="100" y="108" font-size="80" font-weight="bold" fill="white" text-anchor="middle" font-family="Arial">${ini}</text></svg>`;
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
}

function esc(v = '') {
  return String(v).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

function toast(msg, ok = true) {
  try {
    const el = document.createElement('div');
    el.style.cssText = `
      position:fixed;left:50%;bottom:24px;transform:translateX(-50%);
      z-index:10050;background:${ok ? '#102814' : '#2a1010'};
      color:${ok ? '#9df4ac' : '#ffb2b2'};
      border:1px solid ${ok ? 'rgba(46,204,113,.4)' : 'rgba(255,107,107,.35)'};
      border-radius:14px;padding:12px 16px;font-weight:700;
      box-shadow:0 12px 24px rgba(0,0,0,.35)
    `;
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2400);
  } catch {
    alert(msg);
  }
}

function removeOverlay(sel) {
  document.querySelector(sel)?.remove();
}

// ── LOADER / BADGE ─────────────────────────────────────────
function showLoader(label = 'Sincronizando duelo...') {
  hideLoader();
  const el = document.createElement('div');
  el.className = 'duel-sync-loader';
  el.id = 'duel-sync-loader';
  el.innerHTML = `<div class="spin"></div><div class="lbl">${esc(label)}</div>`;
  document.body.appendChild(el);
}

function hideLoader() {
  document.getElementById('duel-sync-loader')?.remove();
}

function showRoundBadge(roundNumber, total = TOTAL_ROUNDS) {
  document.querySelector('.duel-round-badge')?.remove();
  const el = document.createElement('div');
  el.className = 'duel-round-badge';
  el.innerHTML = `<div class="rb-label">⚔️ NOVA RODADA</div><div class="rb-num">${roundNumber} de ${total}</div>`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 700);
}

function cleanupTimer() {
  if (_renderTimer) {
    clearInterval(_renderTimer);
    _renderTimer = null;
  }
}

function normalizeQuestion(q = {}) {
  const opcoes = Array.isArray(q.opcoes) ? q.opcoes : Array.isArray(q.a) ? q.a : [];
  const corretaRaw = (q.correta ?? q.c);
  return {
    id: q.id || '',
    pergunta: q.pergunta || q.p || '',
    opcoes,
    correta: Number.isFinite(Number(corretaRaw)) ? Number(corretaRaw) : 0
  };
}

function normalizeQuestionList(arr = []) {
  return (Array.isArray(arr) ? arr : [])
    .map(normalizeQuestion)
    .filter(q => q && q.pergunta && Array.isArray(q.opcoes) && q.opcoes.length);
}

function getMyUid() {
  return _me?.id || null;
}

function isOnline(user) {
  const t = user?.lastUpdate || user?.lastupdate;
  if (!t) return false;
  const diff = Date.now() - new Date(t).getTime();
  return diff >= 0 && diff < ONLINE_MS;
}

function qIndex(roundNumber) {
  return Math.max(0, Number(roundNumber || 1) - 1);
}

function getOpponentUid(duel, myUid = getMyUid()) {
  if (!duel || !myUid) return null;
  return duel.player1_uid === myUid ? duel.player2_uid : duel.player1_uid;
}

function duelScoreForMe(duel, myUid = getMyUid()) {
  if (!duel || !myUid) return { me: 0, opp: 0 };
  const meIsP1 = duel.player1_uid === myUid;
  return {
    me: Number(meIsP1 ? duel.score1 : duel.score2) || 0,
    opp: Number(meIsP1 ? duel.score2 : duel.score1) || 0
  };
}

function cleanupRealtime(name) {
  const map = {
    _inviteChannel,
    _inviteSentChannel,
    _duelChannel,
    _answersChannel,
    _presenceChannel
  };

  const ch = map[name];
  if (!ch) return;

  try { supabase.removeChannel(ch); } catch {}

  if (name === '_inviteChannel') _inviteChannel = null;
  if (name === '_inviteSentChannel') _inviteSentChannel = null;
  if (name === '_duelChannel') _duelChannel = null;
  if (name === '_answersChannel') _answersChannel = null;
  if (name === '_presenceChannel') _presenceChannel = null;
}

function duelTeardownInternal() {
  cleanupTimer();

  if (_invitePollTimer) {
    clearInterval(_invitePollTimer);
    _invitePollTimer = null;
  }

  // Remove listener de visibilidade se existir
  if (_visibilityHandler) {
    document.removeEventListener('visibilitychange', _visibilityHandler);
    _visibilityHandler = null;
  }

  cleanupRealtime('_duelChannel');
  cleanupRealtime('_answersChannel');

  removeOverlay('.duel-overlay');
  removeOverlay('.duel-arena');
  removeOverlay('.duel-final');
  removeOverlay('#duel-final-overlay');
  removeOverlay('.duel-round-badge');
  hideLoader();

  // Limpa o ID do duelo fechado do Set para permitir novos duelos
  if (_currentDuelId) {
    _closedFinalDuels.delete(_currentDuelId);
  }

  _duelStateCache = null;
  _currentDuelId = null;
  _answerSubmitting = false;
  _aceitando = false;
}

// ── AUTH / USUÁRIO ─────────────────────────────────────────
async function getMe() {
  if (_me) return _me;
  const { data: { user } } = await supabase.auth.getUser();
  _me = user || null;
  return _me;
}

async function getUser(uid) {
  const { data } = await supabase.from('users').select('*').eq('uid', uid).single();
  return data || null;
}

function atualizarPontosNaTela(userRow) {
  const pontos = Number(userRow?.points || 0);

  const el1 = document.getElementById('user-points-display');
  if (el1) el1.textContent = `${pontos} pontos`;

  const el2 = document.getElementById('user-points');
  if (el2) el2.textContent = pontos;

  const el3 = document.getElementById('top-user-points');
  if (el3) el3.textContent = `${pontos} pontos`;

  const el4 = document.getElementById('user-points-display-top');
  if (el4) el4.textContent = `${pontos} pontos`;

  if (typeof window.renderizarUsuario === 'function') {
    try { window.renderizarUsuario(userRow); } catch {}
  }
}

// ── CONVITES ───────────────────────────────────────────────
async function limparConvitesPendentesEntre(uidA, uidB) {
  try {
    await supabase
      .from('desafios_duelo')
      .update({ status: 'expirado', updated_at: new Date().toISOString() })
      .or(`and(de_uid.eq.${uidA},para_uid.eq.${uidB},status.eq.pendente),and(de_uid.eq.${uidB},para_uid.eq.${uidA},status.eq.pendente)`);
  } catch (e) {
    console.warn('[duel] limparConvitesPendentesEntre:', e);
  }
}

async function expirarConvitesAntigos(uid) {
  try {
    const limite = new Date(Date.now() - INVITE_TTL_MS).toISOString();
    await supabase
      .from('desafios_duelo')
      .update({ status: 'expirado', updated_at: new Date().toISOString() })
      .eq('para_uid', uid)
      .eq('status', 'pendente')
      .lt('created_at', limite);
  } catch (e) {
    console.warn('[duel] expirarConvitesAntigos:', e);
  }
}

async function buscarConvitePendenteRecente(uid) {
  const limite = new Date(Date.now() - INVITE_TTL_MS).toISOString();

  const { data, error } = await supabase
    .from('desafios_duelo')
    .select('*')
    .eq('para_uid', uid)
    .eq('status', 'pendente')
    .gte('created_at', limite)
    .order('created_at', { ascending: false })
    .limit(1);

  if (error) {
    console.warn('[duel] buscarConvitePendenteRecente:', error);
    return null;
  }

  return data?.[0] || null;
}

async function fetchInviteById(inviteId) {
  const { data, error } = await supabase
    .from('desafios_duelo')
    .select('*')
    .eq('id', inviteId)
    .single();

  if (error) throw error;
  return data;
}

async function insertInvite(fromUser, toUser) {
  const payload = {
    de_uid: fromUser.uid,
    de_nome: fromUser.nome,
    de_foto: fromUser.foto,
    para_uid: toUser.uid,
    para_nome: toUser.nome,
    para_foto: toUser.foto,
    status: 'pendente',
    updated_at: new Date().toISOString()
  };

  const { data, error } = await supabase
    .from('desafios_duelo')
    .insert(payload)
    .select('*')
    .single();

  if (error) throw error;
  return data;
}

async function updateInvite(inviteId, patch = {}) {
  const { data, error } = await supabase
    .from('desafios_duelo')
    .update({ ...patch, updated_at: new Date().toISOString() })
    .eq('id', inviteId)
    .select('*')
    .single();

  if (error) throw error;
  return data;
}

// ── PERGUNTAS USADAS ───────────────────────────────────────
async function getUsedQuestionIds(uid) {
  const { data, error } = await supabase
    .from('duelo_perguntas_usadas')
    .select('question_id')
    .eq('uid', uid);

  if (error) {
    console.warn('[duel] getUsedQuestionIds erro:', error);
    return [];
  }

  return (data || []).map(r => r.question_id);
}

async function clearUsedQuestions(uid) {
  const { error } = await supabase
    .from('duelo_perguntas_usadas')
    .delete()
    .eq('uid', uid);

  if (error) console.warn('[duel] clearUsedQuestions erro:', error);
}

async function markUsedQuestions(uid, ids = []) {
  if (!ids.length) return;
  const rows = ids.map(question_id => ({ uid, question_id }));
  const { error } = await supabase.from('duelo_perguntas_usadas').insert(rows);
  if (error) console.warn('[duel] markUsedQuestions erro:', error);
}

async function pickQuestions(uid1, uid2, total = TOTAL_ROUNDS) {
  let used1 = await getUsedQuestionIds(uid1);
  let used2 = await getUsedQuestionIds(uid2);

  let pool = QUESTION_BANK.filter(q => !used1.includes(q.id) && !used2.includes(q.id));

  if (pool.length < total) {
    if (QUESTION_BANK.filter(q => !used1.includes(q.id)).length < total) {
      await clearUsedQuestions(uid1);
      used1 = [];
    }
    if (QUESTION_BANK.filter(q => !used2.includes(q.id)).length < total) {
      await clearUsedQuestions(uid2);
      used2 = [];
    }
    pool = QUESTION_BANK.filter(q => !used1.includes(q.id) && !used2.includes(q.id));
  }

  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const picked = shuffled.slice(0, total).map(normalizeQuestion);

  await markUsedQuestions(uid1, picked.map(q => q.id));
  await markUsedQuestions(uid2, picked.map(q => q.id));

  return picked;
}

// ── DUELOS / CRUD ──────────────────────────────────────────
async function createDuel(fromUser, toUser) {
  const questions = await pickQuestions(fromUser.uid, toUser.uid, TOTAL_ROUNDS);

  const payload = {
    player1_uid: fromUser.uid,
    player2_uid: toUser.uid,
    status: 'ativa',
    current_round: 1,
    round_started_at: new Date().toISOString(),
    questions,
    score1: 0,
    score2: 0,
    winner_uid: null,
    loser_uid: null,
    ended_reason: null,
    points_applied: false,
    stats_applied: false,
    updated_at: new Date().toISOString()
  };

  const { data, error } = await supabase
    .from('duelos')
    .insert(payload)
    .select('*')
    .single();

  if (error) throw error;
  return data;
}

async function fetchDuel(duelId) {
  const { data, error } = await supabase
    .from('duelos')
    .select('*')
    .eq('id', duelId)
    .single();

  if (error) throw error;
  if (data) data.questions = normalizeQuestionList(data.questions);
  return data;
}

async function submitAnswerRow(duelId, roundNumber, uid, answerIndex, correct) {
  const payload = {
    duelo_id: duelId,
    round_number: roundNumber,
    uid,
    answer_index: answerIndex,
    correct,
    responded_at: new Date().toISOString()
  };

  const { error } = await supabase.from('duelo_respostas').insert(payload);
  if (error) throw error;
}

async function fetchRoundAnswers(duelId, roundNumber) {
  const { data, error } = await supabase
    .from('duelo_respostas')
    .select('*')
    .eq('duelo_id', duelId)
    .eq('round_number', roundNumber);

  if (error) throw error;
  return data || [];
}

async function hasAnswered(duelId, roundNumber, uid) {
  const { data, error } = await supabase
    .from('duelo_respostas')
    .select('id')
    .eq('duelo_id', duelId)
    .eq('round_number', roundNumber)
    .eq('uid', uid)
    .maybeSingle();

  if (error) throw error;
  return !!data;
}

async function safeAdvanceRound(duel, roundNumber, score1, score2, ended = false, endedReason = null, winnerUid = null, loserUid = null) {
  const patch = {
    score1,
    score2,
    updated_at: new Date().toISOString()
  };

  if (ended) {
    patch.status = 'finalizada';
    patch.ended_reason = endedReason;
    patch.winner_uid = winnerUid;
    patch.loser_uid = loserUid;
  } else {
    patch.current_round = roundNumber + 1;
    patch.round_started_at = new Date().toISOString();
  }

  const { data, error } = await supabase
    .from('duelos')
    .update(patch)
    .eq('id', duel.id)
    .eq('current_round', roundNumber)
    .select('*')
    .maybeSingle();

  if (error) throw error;
  if (!data) return null;

  data.questions = normalizeQuestionList(data.questions);
  return data;
}

async function finishByGiveUp(duel, quitterUid) {
  const winnerUid = duel.player1_uid === quitterUid ? duel.player2_uid : duel.player1_uid;
  const loserUid = quitterUid;

  const patch = {
    status: 'finalizada',
    winner_uid: winnerUid,
    loser_uid: loserUid,
    ended_reason: 'desistencia',
    updated_at: new Date().toISOString()
  };

  const { data, error } = await supabase
    .from('duelos')
    .update(patch)
    .eq('id', duel.id)
    .select('*')
    .single();

  if (error) throw error;

  data.questions = normalizeQuestionList(data.questions);
  return data;
}

async function aplicarPontosDueloNoServidor(duelId) {
  const dueloIdNum = Number(duelId);
  if (!dueloIdNum) { console.warn('[duel] aplicarPontosDueloNoServidor: duelId inválido:', duelId); return; }
  const { error } = await supabase.rpc('aplicar_pontos_duelo', { p_duelo_id: dueloIdNum });
  if (error) {
    console.warn('[duel] rpc aplicar_pontos_duelo erro:', error);
  }
}

// ── RENDER CONVITE ─────────────────────────────────────────
function renderInviteModal(invite) {
  removeOverlay('.duel-overlay');
  injectStyles();

  const ov = document.createElement('div');
  ov.className = 'duel-overlay';

  const fromNome = invite.de_nome || 'Jogador';

  const createdMs = new Date(invite.created_at || Date.now()).getTime();
  const restanteMs = Math.max(0, INVITE_TTL_MS - (Date.now() - createdMs));

  if (restanteMs <= 0) {
    supabase
      .from('desafios_duelo')
      .update({ status: 'expirado', updated_at: new Date().toISOString() })
      .eq('id', invite.id)
      .eq('status', 'pendente')
      .then(() => {})
      .catch(() => {});
    return;
  }

  const expireTimer = setTimeout(async () => {
    try {
      await supabase
        .from('desafios_duelo')
        .update({ status: 'expirado', updated_at: new Date().toISOString() })
        .eq('id', invite.id)
        .eq('status', 'pendente');
    } catch {}
    ov.remove();
  }, restanteMs);

  ov.innerHTML = `
    <div class="duel-box">
      <h2>⚔️ DESAFIO RECEBIDO!</h2>
      <p><strong>${esc(fromNome)}</strong> quer lutar!</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <button id="duel-accept-btn" class="duel-btn-silver">Aceitar</button>
        <button id="duel-reject-btn" class="duel-btn-matte-red">Recusar</button>
      </div>
      <div id="duel-invite-status" style="margin-top:14px;text-align:center;color:#f4d15f;font-weight:700;"></div>
    </div>
  `;

  document.body.appendChild(ov);

  const btnAccept = ov.querySelector('#duel-accept-btn');
  const btnReject = ov.querySelector('#duel-reject-btn');
  const status = ov.querySelector('#duel-invite-status');

  btnReject.onclick = async () => {
    try {
      btnAccept.disabled = true;
      btnReject.disabled = true;
      status.textContent = 'Recusando...';
      await updateInvite(invite.id, { status: 'recusado' });
      clearTimeout(expireTimer);
      ov.remove();
      toast('Convite recusado.', true);
    } catch (e) {
      console.error('[duel] reject invite erro:', e);
      status.textContent = 'Erro ao recusar.';
      btnAccept.disabled = false;
      btnReject.disabled = false;
    }
  };

  btnAccept.onclick = async () => {
    if (_aceitando) return;
    _aceitando = true;

    try {
      btnAccept.disabled = true;
      btnReject.disabled = true;
      btnAccept.textContent = 'Iniciando...';
      status.textContent = 'Verificando convite...';

      const currentInvite = await fetchInviteById(invite.id);
      if (!currentInvite || currentInvite.status !== 'pendente') {
        status.textContent = 'Esse convite já não está mais disponível.';
        setTimeout(() => ov.remove(), 1200);
        return;
      }

      const me = await getMe();
      const meRow = await getUser(me.id);
      const oppRow = await getUser(currentInvite.de_uid);

      if (Number(meRow?.points || 0) < 100 || Number(oppRow?.points || 0) < 100) {
        status.textContent = 'Um dos jogadores não tem 100 pontos.';
        btnAccept.disabled = false;
        btnReject.disabled = false;
        btnAccept.textContent = 'Aceitar';
        _aceitando = false;
        return;
      }

      const fromUser = {
        uid: currentInvite.de_uid,
        nome: currentInvite.de_nome || oppRow?.name || 'Jogador',
        foto: currentInvite.de_foto || oppRow?.photoURL || oppRow?.photourl || avatar(currentInvite.de_nome || oppRow?.name || 'J')
      };

      const toUser = {
        uid: me.id,
        nome: currentInvite.para_nome || meRow?.name || 'Jogador',
        foto: currentInvite.para_foto || meRow?.photoURL || meRow?.photourl || avatar(currentInvite.para_nome || meRow?.name || 'J')
      };

      status.textContent = 'Criando batalha...';
      showLoader('Criando batalha...');
      const duel = await createDuel(fromUser, toUser);

      await updateInvite(invite.id, {
        status: 'aceito',
        duelo_id: duel.id
      });
      hideLoader();

      clearTimeout(expireTimer);
      _closedFinalDuels.delete(duel.id);
      ov.remove();

      // Pequeno delay para garantir que o realtime do convidante receba o UPDATE antes de abrir
      await new Promise(r => setTimeout(r, 400));
      await openDuelArena(duel.id);
    } catch (e) {
      console.error('[duel] accept invite erro:', e);
      hideLoader();
      clearTimeout(expireTimer);
      status.textContent = 'Erro ao iniciar.';
      btnAccept.disabled = false;
      btnReject.disabled = false;
      btnAccept.textContent = 'Aceitar';
    } finally {
      _aceitando = false;
    }
  };
}

// ── ARENA ──────────────────────────────────────────────────
async function renderArena(duel) {
  injectStyles();
  removeOverlay('.duel-arena');
  cleanupTimer();

  _duelStateCache = duel;
  _currentDuelId = duel.id;
  _closedFinalDuels.delete(duel.id);

  if (duel.status === 'finalizada') {
    await renderFinal(duel);
    return;
  }

  const me = await getMe();
  const myUid = me.id;
  const meAnswered = await hasAnswered(duel.id, duel.current_round, myUid).catch(() => false);
  const opponentUid = getOpponentUid(duel, myUid);
  const opponentUser = await getUser(opponentUid);
  const score = duelScoreForMe(duel, myUid);
  const questions = normalizeQuestionList(duel.questions);
  const q = normalizeQuestion(questions[qIndex(duel.current_round)]);

  if (!q?.pergunta || !Array.isArray(q.opcoes) || !q.opcoes.length) {
    console.error('[duel] pergunta inválida:', duel.current_round, q);
    cleanupTimer(); // garante que nenhum timer fique solto
    toast('Erro ao carregar a pergunta do duelo.', false);
    return;
  }

  const arena = document.createElement('div');
  arena.className = 'duel-arena';

  arena.innerHTML = `
    <div class="arena-wrap">
      <div class="arena-head">
        <div class="arena-topline">
          <div class="arena-opponent">
            <div style="position:relative;">
              <img src="${esc(opponentUser?.photoURL || opponentUser?.photourl || avatar(opponentUser?.name || 'O'))}" alt="oponente">
              <span class="presence-dot ${isOnline(opponentUser) ? 'online' : 'offline'}"></span>
            </div>
            <div>
              <div>${esc(opponentUser?.name || 'Oponente')}</div>
              <div style="font-size:.75rem;color:${isOnline(opponentUser) ? '#95efba' : '#b5b5b5'};">${isOnline(opponentUser) ? 'Online' : 'Offline'}</div>
            </div>
          </div>
          <div class="arena-head-meta">Rodada ${duel.current_round}/${TOTAL_ROUNDS}</div>
        </div>
      </div>

      <div class="arena-question">
        <div class="q-label">PERGUNTA BÍBLICA</div>
        <div class="q-text">${esc(q.pergunta)}</div>

        <div id="arena-options" class="arena-grid">
          ${q.opcoes.map((op, i) => `
            <button class="arena-opt" data-index="${i}" ${meAnswered ? 'disabled' : ''}>${esc(op)}</button>
          `).join('')}
        </div>

        <div class="arena-status-row">
          <div class="arena-status-card">
            ${meAnswered ? '✅ Você já respondeu' : '⌛ Aguardando sua resposta'}
            <small>Seu status nesta rodada</small>
          </div>
          <div class="arena-status-card" id="opp-status-card">
            ⌛ Aguardando adversário
            <small>Status do oponente</small>
          </div>
        </div>

        <div class="arena-timer" id="arena-timer"></div>

        <div class="arena-score">
          <div>
            <div style="color:#aaa;font-size:.8rem;">Seus pontos</div>
            <div class="n">${score.me}</div>
          </div>
          <div style="text-align:right;">
            <div style="color:#aaa;font-size:.8rem;">Pontos do oponente</div>
            <div class="n">${score.opp}</div>
          </div>
        </div>

        <button id="arena-quit-btn" class="arena-quit">Desistir do duelo</button>
      </div>
    </div>
  `;

  document.body.appendChild(arena);

  const startedAtMs = duel.round_started_at ? new Date(duel.round_started_at).getTime() : Date.now();
  const deadlineMs = startedAtMs + ROUND_SECONDS * 1000;
  const timerEl = arena.querySelector('#arena-timer');
  const oppStatusCard = arena.querySelector('#opp-status-card');
  const optionButtons = [...arena.querySelectorAll('.arena-opt')];

  const answers = await fetchRoundAnswers(duel.id, duel.current_round).catch(() => []);
  const oppAnswered = answers.some(a => a.uid === opponentUid);
  if (oppAnswered) {
    oppStatusCard.innerHTML = `✅ Adversário já respondeu<small>Status do oponente</small>`;
  }

  // Status visual de "você já respondeu" — atualiza card imediatamente
  const myStatusCard = arena.querySelector('.arena-status-card');
  function markMyAnswered(selectedBtn) {
    optionButtons.forEach(b => { b.disabled = true; });
    if (selectedBtn) selectedBtn.classList.add('selected');
    if (myStatusCard) {
      myStatusCard.innerHTML = `✅ Resposta enviada!<small>Aguardando adversário...</small>`;
    }
  }
  if (meAnswered && myStatusCard) {
    myStatusCard.innerHTML = `✅ Resposta enviada!<small>Aguardando adversário...</small>`;
  }

  optionButtons.forEach(btn => {
    btn.onclick = async () => {
      if (_answerSubmitting || meAnswered) return;
      _answerSubmitting = true;
      const idx = Number(btn.dataset.index);

      try {
        markMyAnswered(btn);
        await submitAnswer(duel.id, duel.current_round, idx);
      } catch (e) {
        console.error('[duel] submitAnswer click erro:', e);
        toast('Erro ao enviar resposta.', false);
        optionButtons.forEach(b => { b.disabled = !!meAnswered; });
        btn.classList.remove('selected');
        if (myStatusCard) myStatusCard.innerHTML = `⌛ Aguardando sua resposta<small>Seu status nesta rodada</small>`;
      } finally {
        _answerSubmitting = false;
      }
    };
  });

  arena.querySelector('#arena-quit-btn').onclick = async () => {
    const ok = confirm('Deseja desistir deste duelo?');
    if (!ok) return;

    try {
      const finalDuel = await finishByGiveUp(duel, myUid);
      await aplicarPontosDueloNoServidor(finalDuel.id);
      await atualizarDueloStats(finalDuel);
      await renderFinal(finalDuel);
    } catch (e) {
      console.error('[duel] give up erro:', e);
      toast('Erro ao desistir do duelo.', false);
    }
  };

  let _timerFired = false;

  const tick = async () => {
    const sec = Math.max(0, Math.ceil((deadlineMs - Date.now()) / 1000));
    if (timerEl) timerEl.textContent = `Tempo: ${sec}s`;

    if (sec <= 0 && !_timerFired) {
      _timerFired = true;
      cleanupTimer();
      try {
        await advanceIfRoundFinished(duel.id, duel.current_round);
      } catch (e) {
        console.warn('[duel] advance on timer erro:', e);
      }
    }
  };

  // Proteção: quando a aba volta do fundo, recalcula e tenta avançar se já expirou
  if (_visibilityHandler) {
    document.removeEventListener('visibilitychange', _visibilityHandler);
  }
  _visibilityHandler = async () => {
    if (document.visibilityState !== 'visible') return;
    const remaining = deadlineMs - Date.now();
    if (remaining <= 0 && !_timerFired) {
      _timerFired = true;
      cleanupTimer();
      try {
        await advanceIfRoundFinished(duel.id, duel.current_round);
      } catch (e) {
        console.warn('[duel] visibilitychange advance erro:', e);
      }
    }
  };
  document.addEventListener('visibilitychange', _visibilityHandler);

  cleanupTimer(); // garante nenhum timer fantasma antes de criar
  tick();
  _renderTimer = setInterval(tick, 250);
}

async function submitAnswer(duelId, roundNumber, answerIndex) {
  const me = await getMe();
  const duel = await fetchDuel(duelId);

  if (duel.status === 'finalizada') {
    await renderFinal(duel);
    return;
  }

  const already = await hasAnswered(duelId, roundNumber, me.id);
  if (already) return;

  const q = normalizeQuestion(duel.questions[qIndex(roundNumber)]);
  if (!q?.pergunta || !Array.isArray(q.opcoes) || typeof q.correta !== 'number') {
    throw new Error('Pergunta inválida no duelo.');
  }

  const correct = Number(q.correta) === Number(answerIndex);
  await submitAnswerRow(duelId, roundNumber, me.id, answerIndex, correct);
  await advanceIfRoundFinished(duelId, roundNumber);
}

async function advanceIfRoundFinished(duelId, roundNumber) {
  const lockKey = `${duelId}:${roundNumber}`;
  if (_advancingLocks.has(lockKey)) return;
  _advancingLocks.add(lockKey);

  try {
    const duel = await fetchDuel(duelId);
    if (!duel) return;

    if (duel.status === 'finalizada') {
      await renderFinal(duel);
      return;
    }

    if (Number(duel.current_round) !== Number(roundNumber)) return;

    const answers = await fetchRoundAnswers(duelId, roundNumber);
    const p1Ans = answers.find(a => a.uid === duel.player1_uid);
    const p2Ans = answers.find(a => a.uid === duel.player2_uid);

    const startedAtMs = duel.round_started_at ? new Date(duel.round_started_at).getTime() : Date.now();
    const expired = Date.now() >= startedAtMs + ROUND_SECONDS * 1000;

    if (!(expired || (p1Ans && p2Ans))) return;

    const score1 = Number(duel.score1 || 0) + (p1Ans?.correct ? 10 : 0);
    const score2 = Number(duel.score2 || 0) + (p2Ans?.correct ? 10 : 0);

    if (Number(roundNumber) >= TOTAL_ROUNDS) {
      let winnerUid = null;
      let loserUid = null;

      if (score1 > score2) {
        winnerUid = duel.player1_uid;
        loserUid = duel.player2_uid;
      } else if (score2 > score1) {
        winnerUid = duel.player2_uid;
        loserUid = duel.player1_uid;
      }

      showLoader('Finalizando duelo...');
      const updated = await safeAdvanceRound(
        duel,
        roundNumber,
        score1,
        score2,
        true,
        'normal',
        winnerUid,
        loserUid
      );
      hideLoader();

      if (!updated) {
        // Outro cliente finalizou primeiro — busca estado real e exibe
        const fresh = await fetchDuel(duelId);
        if (fresh) await renderFinal(fresh);
        return;
      }

      // Só aplica pontos se ainda não foram aplicados (evita dupla pontuação)
      if (!updated.points_applied) {
        await aplicarPontosDueloNoServidor(updated.id);
      }
      // Só aplica stats o cliente que venceu a corrida do safeAdvanceRound
      // atualizarDueloStats tem sua própria trava atômica no banco (stats_applied)
      await atualizarDueloStats(updated);
      await renderFinal(updated);
      return;
    }

    showLoader('Avançando rodada...');
    const updated = await safeAdvanceRound(
      duel,
      roundNumber,
      score1,
      score2,
      false
    );
    hideLoader();

    if (!updated) {
      // Outro cliente avançou primeiro — busca estado atual e re-renderiza
      const fresh = await fetchDuel(duelId);
      if (fresh && fresh.status !== 'finalizada') {
        showRoundBadge(fresh.current_round);
        await new Promise(r => setTimeout(r, 260)); // aguarda badge desaparecer parcialmente
        await renderArena(fresh);
      } else if (fresh) {
        await renderFinal(fresh);
      }
      return;
    }

    showRoundBadge(updated.current_round);
    await new Promise(r => setTimeout(r, 260));
    await renderArena(updated);
  } catch (e) {
    hideLoader();
    console.warn('[duel] advanceIfRoundFinished erro:', e);
  } finally {
    _advancingLocks.delete(lockKey);
  }
}

// ── FINAL ──────────────────────────────────────────────────
function labelForFinal(duel, uid) {
  const winnerUid = duel.winner_uid || null;
  const reason = duel.ended_reason || 'normal';

  if (reason === 'desistencia' && duel.loser_uid === uid) {
    return '<div class="desist-tag">Desistiu</div>';
  }

  if (!winnerUid) {
    return '<div class="silver-tag">Empate ⚖️</div>';
  }

  if (winnerUid === uid) {
    return '<div class="champion-tag">Campeão +100</div>';
  }

  return '<div class="silver-tag">-100 pontos</div>';
}

async function renderFinal(duel) {
  // Trava principal: não renderiza se já foi fechado ou já está exibido
  if (_closedFinalDuels.has(duel.id)) return;
  const jaExibido = document.getElementById('duel-final-overlay');
  if (jaExibido && jaExibido.dataset.duelId === duel.id) return;

  injectStyles();
  cleanupTimer();
  removeOverlay('.duel-arena');

  _duelStateCache = duel;
  _currentDuelId = duel.id;

  const me = await getMe();
  const p1 = await getUser(duel.player1_uid);
  const p2 = await getUser(duel.player2_uid);
  const winner = duel.winner_uid ? await getUser(duel.winner_uid) : null;

  // Tocar som de resultado (só uma vez por duelo por cliente)
  if (!_closedFinalDuels.has(duel.id)) {
    if (!duel.winner_uid) {
      tocarSomEmpate();
    } else if (me?.id === duel.winner_uid) {
      tocarSomVitoriaPartida();
      if (window.confetti) {
        setTimeout(() => window.confetti({ particleCount: 180, spread: 80, origin: { y: 0.5 }, colors: ['#d4af37','#fff','#ffdf00','#ff0000'] }), 200);
        setTimeout(() => window.confetti({ particleCount: 100, angle: 60, spread: 60, origin: { x: 0, y: 0.6 }, colors: ['#d4af37','#ffdf00'] }), 500);
        setTimeout(() => window.confetti({ particleCount: 100, angle: 120, spread: 60, origin: { x: 1, y: 0.6 }, colors: ['#d4af37','#ffdf00'] }), 800);
      }
    } else {
      tocarSomDerrota();
    }
  }

  let ov = document.getElementById('duel-final-overlay');
  if (!ov) {
    ov = document.createElement('div');
    ov.id = 'duel-final-overlay';
    ov.className = 'duel-final';
    ov.dataset.duelId = duel.id;
    document.body.appendChild(ov);
  }

  ov.innerHTML = `
    <div class="duel-box">
      <h2>${winner ? '🏁 DUELO ENCERRADO' : '⚖️ EMPATE!'}</h2>
      <p>${winner ? `<strong>${esc(winner?.name || 'Herói')}</strong> venceu a disputa.` : 'Nenhum herói venceu desta vez.'}</p>

      <div class="final-grid">
        <div class="final-card">
          <img src="${esc(p1?.photoURL || p1?.photourl || avatar(p1?.name || 'P1'))}" alt="p1">
          <div class="name">${esc(p1?.name || 'Jogador 1')}</div>
          <div class="score">${Number(duel.score1 || 0)}</div>
          ${labelForFinal(duel, duel.player1_uid)}
        </div>

        <div class="final-card">
          <img src="${esc(p2?.photoURL || p2?.photourl || avatar(p2?.name || 'P2'))}" alt="p2">
          <div class="name">${esc(p2?.name || 'Jogador 2')}</div>
          <div class="score">${Number(duel.score2 || 0)}</div>
          ${labelForFinal(duel, duel.player2_uid)}
        </div>
      </div>

      <div class="final-buttons">
        <button id="duel-close-final" class="duel-btn-dark">Fechar</button>
      </div>
    </div>
  `;

  ov.querySelector('#duel-close-final')?.addEventListener('click', () => {
    _closedFinalDuels.add(duel.id);
    ov.remove();
    _duelStateCache = duel;
    _currentDuelId = duel.id;
    window.voltarParaBiblia?.();
  });
}

// ── OBSERVERS ──────────────────────────────────────────────
async function openDuelArena(duelId) {
  showLoader('Abrindo arena...');
  const duel = await fetchDuel(duelId);
  _closedFinalDuels.delete(duelId);
  await ensureObservers(duelId);
  hideLoader();
  await renderArena(duel);

  // Re-sync de segurança: 600ms depois, busca estado atual
  // Cobre o caso raro de "pra mim abriu, pro outro não"
  setTimeout(async () => {
    try {
      if (_currentDuelId !== duelId) return; // já mudou de duelo
      const fresh = await fetchDuel(duelId);
      if (!fresh) return;
      fresh.questions = normalizeQuestionList(fresh.questions);

      // Só re-renderiza se a rodada ou status mudou desde que abrimos
      const cachedRound = Number(_duelStateCache?.current_round || 0);
      const freshRound = Number(fresh.current_round || 0);
      if (fresh.status === 'finalizada' && !_closedFinalDuels.has(fresh.id)) {
        await renderFinal(fresh);
      } else if (freshRound > cachedRound) {
        await renderArena(fresh);
      }
    } catch (e) {
      console.warn('[duel] resync após abertura:', e);
    }
  }, 600);
}

async function ensureObservers(duelId = null) {
  _ensureMutex = _ensureMutex.then(async () => {
    injectStyles();
    const me = await getMe();
    if (!me) return;

    if (!_inviteChannel) {
      _inviteChannel = supabase
        .channel(`duel-invites-${me.id}`)
        .on('postgres_changes', {
          event: 'INSERT',
          schema: 'public',
          table: 'desafios_duelo',
          filter: `para_uid=eq.${me.id}`
        }, async (payload) => {
          const row = payload.new;
          if (!row || row.status !== 'pendente') return;
          renderInviteModal(row);
        })
        .on('postgres_changes', {
          event: 'UPDATE',
          schema: 'public',
          table: 'desafios_duelo',
          filter: `para_uid=eq.${me.id}`
        }, async (payload) => {
          const row = payload.new;
          if (!row) return;
          if (row.status === 'pendente') renderInviteModal(row);
          if (row.status === 'aceito' && row.duelo_id) {
            _closedFinalDuels.delete(row.duelo_id);
            removeOverlay('.duel-overlay');
            await openDuelArena(row.duelo_id);
          }
          if (row.status === 'recusado') {
            removeOverlay('.duel-overlay');
          }
        })
        .subscribe();
    }

    if (!_inviteSentChannel) {
      _inviteSentChannel = supabase
        .channel(`duel-invites-sent-${me.id}`)
        .on('postgres_changes', {
          event: 'UPDATE',
          schema: 'public',
          table: 'desafios_duelo',
          filter: `de_uid=eq.${me.id}`
        }, async (payload) => {
          const row = payload.new;
          if (!row) return;
          if (row.status === 'aceito' && row.duelo_id) {
            _closedFinalDuels.delete(row.duelo_id);
            await openDuelArena(row.duelo_id);
          }
          if (row.status === 'recusado') {
            toast('Seu convite de duelo foi recusado.', false);
          }
        })
        .subscribe();
    }

    try {
      await expirarConvitesAntigos(me.id);
      const pendente = await buscarConvitePendenteRecente(me.id);
      if (pendente && !document.querySelector('.duel-overlay') && !document.querySelector('.duel-arena')) {
        renderInviteModal(pendente);
      }
    } catch (e) {
      console.warn('[duel] checagem inicial de convites:', e);
    }

    if (_invitePollTimer) clearInterval(_invitePollTimer);
    _invitePollTimer = setInterval(async () => {
      try {
        if (document.querySelector('.duel-overlay') || document.querySelector('.duel-arena')) return;
        await expirarConvitesAntigos(me.id);
        const pendente = await buscarConvitePendenteRecente(me.id);
        if (pendente) renderInviteModal(pendente);
      } catch (e) {
        console.warn('[duel] poll convite:', e);
      }
    }, 3000);

    if (duelId) {
      cleanupRealtime('_duelChannel');
      cleanupRealtime('_answersChannel');

      _duelChannel = supabase
        .channel(`duel-main-${duelId}-${Date.now()}`)
        .on('postgres_changes', {
          event: 'UPDATE',
          schema: 'public',
          table: 'duelos',
          filter: `id=eq.${duelId}`
        }, async (payload) => {
          const row = payload.new;
          if (!row) return;
          row.questions = normalizeQuestionList(row.questions);

          // Só atualiza cache se a linha recebida é mais recente (evita estado antigo sobrescrever)
          const cachedRound = Number(_duelStateCache?.current_round || 0);
          const newRound = Number(row.current_round || 0);
          if (_duelStateCache && _duelStateCache.id === row.id && newRound < cachedRound) return;

          _duelStateCache = row;
          _currentDuelId = row.id;

          if (row.status === 'finalizada') {
            if (!_closedFinalDuels.has(row.id)) {
              await renderFinal(row);
            }
          } else {
            _closedFinalDuels.delete(row.id);
            await renderArena(row);
          }
        })
        .subscribe();

      _answersChannel = supabase
        .channel(`duel-answers-${duelId}-${Date.now()}`)
        .on('postgres_changes', {
          event: 'INSERT',
          schema: 'public',
          table: 'duelo_respostas',
          filter: `duelo_id=eq.${duelId}`
        }, async (payload) => {
          const row = payload.new;
          if (!row) return;
          try {
            const duel = await fetchDuel(duelId);
            if (duel.status === 'finalizada') {
              if (!_closedFinalDuels.has(duel.id)) {
                await renderFinal(duel);
              }
            } else {
              // Apenas tenta avançar — o _duelChannel cuida do re-render via realtime
              await advanceIfRoundFinished(duelId, row.round_number);
              // Atualiza status do oponente na tela sem re-renderizar tudo
              const me2 = await getMe();
              if (row.uid !== me2?.id) {
                const oppCard = document.getElementById('opp-status-card');
                if (oppCard && duel.current_round === row.round_number) {
                  oppCard.innerHTML = `✅ Adversário respondeu!<small>Status do oponente</small>`;
                  oppCard.classList.remove('opp-flash');
                  // Força reflow para reiniciar a animação
                  void oppCard.offsetWidth;
                  oppCard.classList.add('opp-flash');
                }
              }
            }
          } catch (e) {
            console.warn('[duel] answers observer erro:', e);
          }
        })
        .subscribe();
    }

    if (!_presenceChannel) {
      _presenceChannel = supabase
        .channel(`duel-users-presence`)
        .on('postgres_changes', {
          event: 'UPDATE',
          schema: 'public',
          table: 'users'
        }, payload => {
          const row = payload.new;
          if (!row?.uid) return;

          const online = isOnline(row);

          document.querySelectorAll(`[data-user-presence-uid="${row.uid}"]`).forEach(dot => {
            dot.classList.remove('online', 'offline');
            dot.classList.add(online ? 'online' : 'offline');
          });

          if (_duelStateCache) {
            const oppUid = getOpponentUid(_duelStateCache, getMyUid());
            if (oppUid === row.uid) {
              document.querySelectorAll('.presence-dot').forEach(dot => {
                dot.classList.remove('online', 'offline');
                dot.classList.add(online ? 'online' : 'offline');
              });
            }
          }

          if (row.uid === getMyUid()) {
            atualizarPontosNaTela(row);
          }
        })
        .subscribe();
    }
  });

  return _ensureMutex;
}

// ── API PÚBLICA ────────────────────────────────────────────
window.iniciarDesafioUsuario = async function(target) {
  try {
    await ensureObservers();

    const me = _me || await getMe();
    if (!me?.id) {
      toast('Você precisa estar logado.', false);
      return false;
    }

    if (!target?.uid) {
      toast('Usuário inválido.', false);
      return false;
    }

    if (target.uid === me.id) {
      toast('Você não pode desafiar a si mesmo.', false);
      return false;
    }

    const meDb = await getUser(me.id);
    const meuPontos = Number(meDb?.points || 0);
    if (meuPontos < 100) {
      toast('Você precisa ter pelo menos 100 pontos para desafiar.', false);
      return false;
    }

    const targetDb = await getUser(target.uid);
    if (!isOnline(targetDb)) {
      toast('Só é possível desafiar jogadores online.', false);
      return false;
    }

    if (Number(targetDb?.points || 0) < 100) {
      toast('Esse jogador precisa ter pelo menos 100 pontos.', false);
      return false;
    }

    await limparConvitesPendentesEntre(me.id, target.uid);

    // Anti-spam: não conta nem envia mais de 1 convite para o mesmo alvo em 30s
    const _spamKey = `${me.id}_${target.uid}`;
    if (_lastInviteCount[_spamKey] && Date.now() - _lastInviteCount[_spamKey] < 30000) {
      toast('Aguarde 30 segundos para desafiar esse jogador novamente.', false);
      return false;
    }
    _lastInviteCount[_spamKey] = Date.now();

    const fromUser = {
      uid: me.id,
      nome: meDb?.name || 'Jogador',
      foto: meDb?.photoURL || meDb?.photourl || avatar(meDb?.name || 'J')
    };

    const toUser = {
      uid: target.uid,
      nome: target.nome || targetDb?.name || 'Jogador',
      foto: target.foto || targetDb?.photoURL || targetDb?.photourl || avatar(target.nome || targetDb?.name || 'J')
    };

    await insertInvite(fromUser, toUser);
    toast('Convite de duelo enviado!', true);
    try { await incrementarDesafiosEnviados(me.id); } catch (e) { console.warn('[duel] desafios_enviados:', e); }

    setTimeout(async () => {
      try {
        await supabase
          .from('desafios_duelo')
          .update({ status: 'expirado', updated_at: new Date().toISOString() })
          .eq('de_uid', me.id)
          .eq('para_uid', target.uid)
          .eq('status', 'pendente');
      } catch (e) {
        console.warn('[duel] erro ao expirar convite automaticamente:', e);
      }
    }, INVITE_TTL_MS);

    return true;
  } catch (e) {
    console.error('[duel] iniciarDesafioUsuario erro:', e);
    toast('Erro ao enviar convite de duelo.', false);
    return false;
  }
};

window.duelEnsureObservers = ensureObservers;
window.ensureObservers = ensureObservers;

export async function duelTeardown() {
  duelTeardownInternal();
}

// ── SAÍDA DA ABA / JANELA ──────────────────────────────────
window.addEventListener('beforeunload', async () => {
  try {
    if (!_currentDuelId || !_duelStateCache || _duelStateCache.status === 'finalizada') return;

    const me = await getMe();
    if (!me) return;

    const row = _duelStateCache;
    if (!row?.id) return;

    const supabaseUrl = supabase?.supabaseUrl || supabase?.storageUrl?.replace('/storage/v1', '') || '';
    const anonKey = supabase?.supabaseKey || supabase?.headers?.apikey || '';

    const url = `${supabaseUrl}/rest/v1/duelos?id=eq.${row.id}`;
    const body = JSON.stringify({
      status: 'finalizada',
      winner_uid: row.player1_uid === me.id ? row.player2_uid : row.player1_uid,
      loser_uid: me.id,
      ended_reason: 'desistencia',
      updated_at: new Date().toISOString()
    });

    if (window.fetch && anonKey) {
      fetch(url, {
        method: 'PATCH',
        keepalive: true,
        headers: {
          'Content-Type': 'application/json',
          'apikey': anonKey,
          'Authorization': `Bearer ${anonKey}`,
          'Prefer': 'return=minimal'
        },
        body
      }).catch(() => {});
    } else if (navigator.sendBeacon) {
      navigator.sendBeacon(url, new Blob([body], { type: 'application/json' }));
    }
  } catch {}
});

// ── BOOT ────────────────────────────────────────────────────
(async function bootDuel() {
  try {
    injectStyles();
    await ensureObservers();
  } catch (e) {
    console.warn('[duel] boot erro:', e);
  }
})();
// ── SONS DA ARENA ──────────────────────────────────────────
function tocarSomVitoriaPartida() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const t = ctx.currentTime;
    // Fanfarra de vitória épica
    const notas = [
      [523.25, 0.00, 0.12, 0.28, 'square'],
      [659.25, 0.13, 0.12, 0.25, 'square'],
      [783.99, 0.26, 0.18, 0.22, 'square'],
      [1046.5, 0.44, 0.35, 0.30, 'square'],
      [880.00, 0.44, 0.35, 0.15, 'sine'],
      [1174.7, 0.44, 0.35, 0.10, 'sine'],
    ];
    notas.forEach(([freq, delay, dur, vol, type]) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, t + delay);
      gain.gain.linearRampToValueAtTime(vol, t + delay + 0.03);
      gain.gain.setValueAtTime(vol, t + delay + dur - 0.05);
      gain.gain.linearRampToValueAtTime(0, t + delay + dur);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(t + delay); osc.stop(t + delay + dur + 0.05);
    });
    // Ruído de fogos
    [0.1, 0.35, 0.55].forEach(delay => {
      const bufLen = Math.floor(ctx.sampleRate * 0.18);
      const buf = ctx.createBuffer(1, bufLen, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < bufLen; i++) d[i] = Math.random() * 2 - 1;
      const noise = ctx.createBufferSource(); noise.buffer = buf;
      const filt = ctx.createBiquadFilter(); filt.type = 'bandpass';
      filt.frequency.value = 800 + Math.random() * 1200; filt.Q.value = 0.5;
      const gn = ctx.createGain();
      gn.gain.setValueAtTime(0.35, t + delay);
      gn.gain.exponentialRampToValueAtTime(0.001, t + delay + 0.18);
      noise.connect(filt); filt.connect(gn); gn.connect(ctx.destination);
      noise.start(t + delay); noise.stop(t + delay + 0.22);
    });
  } catch (_) {}
}

function tocarSomDerrota() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const t = ctx.currentTime;
    // Sequência descendente triste
    [[392.0, 0.00, 0.18], [349.2, 0.19, 0.18], [293.7, 0.38, 0.22], [246.9, 0.60, 0.5]].forEach(([freq, delay, dur]) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.20, t + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, t + delay + dur);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(t + delay); osc.stop(t + delay + dur + 0.05);
    });
  } catch (_) {}
}

function tocarSomEmpate() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const t = ctx.currentTime;
    [[440, 0.00, 0.2], [440, 0.22, 0.2], [370, 0.44, 0.4]].forEach(([freq, delay, dur]) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.15, t + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, t + delay + dur);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(t + delay); osc.stop(t + delay + dur + 0.05);
    });
  } catch (_) {}
}

// ── APLICAR RESULTADO VIA RPC ──────────────────────────────
// A RPC aplicar_resultado_duelo no Supabase é SECURITY DEFINER,
// transacional e idempotente — marca stats_applied=true na primeira
// chamada; chamadas subsequentes são no-op. Elimina race conditions
// e problemas de RLS ao tentar atualizar stats do adversário.
async function atualizarDueloStats(duel) {
  try {
    // Garante que winner_uid e loser_uid estão presentes antes de chamar a RPC
    if (!duel.winner_uid && !duel.loser_uid && duel.ended_reason !== 'empate') {
      console.warn('[duelo_stats] atualizarDueloStats: winner_uid/loser_uid ausentes, abortando RPC');
      return;
    }
    // bigint no banco — p_duelo_id deve ser Number, nunca string nem UUID
    const dueloIdNum = Number(duel.id);
    if (!dueloIdNum) { console.warn('[duelo_stats] duel.id inválido:', duel.id); return; }
    const { error } = await supabase.rpc('aplicar_resultado_duelo', {
      p_duelo_id: dueloIdNum
    });
    if (error) {
      console.error('[duelo_stats] erro ao aplicar resultado via RPC:', error);
      return;
    }

    // Badges: chamar apenas após RPC confirmar stats gravados
    const uids = [duel.winner_uid, duel.loser_uid].filter(Boolean);
    // Em empate, usa player1/player2
    if (!duel.winner_uid) {
      uids.push(duel.player1_uid, duel.player2_uid);
    }
    const uidsUnicos = [...new Set(uids.filter(Boolean))];
    for (const uid of uidsUnicos) {
      try { await verificarBadgesDuelo(uid); } catch (e) { console.warn('[duel] badge check erro:', e); }
    }
  } catch (e) {
    console.warn('[duel] atualizarDueloStats erro:', e);
  }
}

async function incrementarDesafiosEnviados(uid) {
  if (!uid) return;
  try {
    const { data: userRow } = await supabase.from('users').select('name, photoURL, photourl').eq('uid', uid).single();
    const nome = userRow?.name || 'Herói';
    const foto = userRow?.photoURL || userRow?.photourl || '';

    // Upsert: cria linha se não existir, incrementa se já existir
    // O incremento de desafios_enviados não pode ser atômico via upsert puro no JS,
    // mas a trava é mínima (convites, não vitórias) — usamos select+update com guard
    const { data: atual } = await supabase.from('duelo_stats').select('desafios_enviados').eq('uid', uid).maybeSingle();

    if (!atual) {
      await supabase.from('duelo_stats').insert({
        uid, nome_usuario: nome, foto_usuario: foto,
        vitorias: 0, derrotas: 0, empates: 0, duelos_total: 0,
        desafios_enviados: 1,
        sequencia_vitorias: 0, maior_sequencia_vitorias: 0,
        pontos_vitoria: 0, updatedat: new Date().toISOString()
      });
    } else {
      await supabase.from('duelo_stats').update({
        nome_usuario: nome, foto_usuario: foto,
        desafios_enviados: (atual.desafios_enviados || 0) + 1,
        updatedat: new Date().toISOString()
      }).eq('uid', uid);
    }
    // Verificar badges de desafios (lock por uid já protege concorrência local)
    try { await verificarBadgesDuelo(uid); } catch (e) {}
  } catch (e) {
    console.warn('[duel] incrementarDesafiosEnviados erro:', e);
  }
}