// js/duel.js — Heróis da Fé — versão sem revanche e com pontos em tempo real

import { supabase } from './config.js';

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

// ── BANCO DE QUESTÕES ──────────────────────────────────────
// ── BANCO DE QUESTÕES CORRIGIDO ──────────────────────────────
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
  {id:'q061',p:'Quem foi o sucessor de Moisés?',a:['Josué','Arão','Calebe','Samuel'],c:0},
  {id:'q062',p:'Quem interpretou os sonhos do faraó no Egito?',a:['José','Daniel','Moisés','Abraão'],c:0},
  {id:'q063',p:'Qual apóstolo era irmão de Pedro?',a:['André','João','Tiago','Mateus'],c:0},
  {id:'q064',p:'Quem foi jogado na fornalha ardente?',a:['Sadraque, Mesaque e Abede-Nego','Daniel','Isaías','Jeremias'],c:0},
  {id:'q065',p:'Quem escreveu a maioria das cartas do Novo Testamento?',a:['Paulo','Pedro','João','Tiago'],c:0},
  {id:'q066',p:'Quem construiu uma arca para salvar sua família?',a:['Noé','Abraão','Moisés','Davi'],c:0},
  {id:'q067',p:'Qual discípulo era chamado de “gêmeo”?',a:['Tomé','Pedro','João','Tiago'],c:0},
  {id:'q068',p:'Quem foi vendido por 20 moedas de prata?',a:['José','Judas','Davi','Esaú'],c:0},
  {id:'q069',p:'Qual profeta confrontou os profetas de Baal?',a:['Elias','Eliseu','Isaías','Jeremias'],c:0},
  {id:'q070',p:'Quem foi o homem mais sábio da Bíblia?',a:['Salomão','Davi','Moisés','Daniel'],c:0},
  {id:'q071',p:'Quem foi o primeiro homem assassinado?',a:['Abel','Caim','Sete','Noé'],c:0},
  {id:'q072',p:'Quem escreveu o livro de Salmos?',a:['Davi','Salomão','Moisés','Isaías'],c:0},
  {id:'q073',p:'Quem foi a esposa de Abraão?',a:['Sara','Rebeca','Raquel','Lea'],c:0},
  {id:'q074',p:'Quem foi pai de João Batista?',a:['Zacarias','José','Pedro','Simão'],c:0},
  {id:'q075',p:'Quem construiu o muro de Jerusalém?',a:['Neemias','Esdras','Josué','Davi'],c:0},
  {id:'q076',p:'Quem foi o primeiro mártir?',a:['Estêvão','Paulo','Pedro','João'],c:0},
  {id:'q077',p:'Quem foi levado ao céu sem morrer?',a:['Enoque','Abraão','Davi','Isaías'],c:0},
  {id:'q078',p:'Quem foi pai de Davi?',a:['Jessé','Saul','Samuel','Salomão'],c:0},
  {id:'q079',p:'Qual discípulo era médico?',a:['Lucas','Pedro','Paulo','Tiago'],c:0},
  {id:'q080',p:'Quem escreveu Provérbios?',a:['Salomão','Davi','Moisés','Elias'],c:0},
  {id:'q081',p:'Quem guiou o povo na travessia do Jordão?',a:['Josué','Moisés','Arão','Calebe'],c:0},
  {id:'q082',p:'Quem foi o primeiro sumo sacerdote?',a:['Arão','Moisés','Samuel','Eli'],c:0},
  {id:'q083',p:'Quem teve um sonho com uma escada até o céu?',a:['Jacó','José','Abraão','Moisés'],c:0},
  {id:'q084',p:'Quem escreveu o livro de Hebreus?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q085',p:'Quem foi o juiz mais forte de Israel?',a:['Sansão','Gideão','Débora','Samuel'],c:0},
  {id:'q086',p:'Quem liderou a batalha contra os midianitas com 300 homens?',a:['Gideão','Josué','Davi','Saul'],c:0},
  {id:'q087',p:'Quem foi o rei que construiu o templo?',a:['Salomão','Davi','Ezequias','Josias'],c:0},
  {id:'q088',p:'Quem foi lançado numa cisterna?',a:['Jeremias','Isaías','Ezequiel','Daniel'],c:0},
  {id:'q089',p:'Quem foi o rei após Saul?',a:['Davi','Salomão','Josias','Ezequias'],c:0},
  {id:'q090',p:'Quem escreveu o evangelho de Mateus?',a:['Mateus','Pedro','Paulo','João'],c:0},
  {id:'q091',p:'Quem escreveu o evangelho de Marcos?',a:['Marcos','Lucas','João','Mateus'],c:0},
  {id:'q092',p:'Quem escreveu o evangelho de Lucas?',a:['Lucas','Marcos','João','Mateus'],c:0},
  {id:'q093',p:'Quem escreveu o evangelho de João?',a:['João','Pedro','Paulo','Tiago'],c:0},
  {id:'q094',p:'Quem foi chamado de amigo de Deus?',a:['Abraão','Moisés','Davi','Isaías'],c:0},
  {id:'q095',p:'Quem foi rei quando Jesus nasceu?',a:['Herodes','Pilatos','César','Félix'],c:0},
  {id:'q096',p:'Quem era the pai de Isaque?',a:['Abraão','Jacó','José','Davi'],c:0},
  {id:'q097',p:'Quem era o filho de Isaque?',a:['Jacó','José','Davi','Moisés'],c:0},
  {id:'q098',p:'Quem lutou com um anjo?',a:['Jacó','Abraão','Moisés','Josué'],c:0},
  {id:'q099',p:'Quem traiu Jesus?',a:['Judas','Pedro','João','Tiago'],c:0},
  {id:'q100',p:'Quem negou Jesus três vezes?',a:['Pedro','João','Tomé','Mateus'],c:0},
  {id:'q101',p:'Quem viu Jesus ressuscitado primeiro?',a:['Maria Madalena','Pedro','João','Tomé'],c:0},
  {id:'q102',p:'Quem foi o rei mais jovem?',a:['Josias','Davi','Salomão','Saul'],c:0},
  {id:'q103',p:'Quem construiu o tabernáculo?',a:['Moisés','Davi','Salomão','Josué'],c:0},
  {id:'q104',p:'Quem guiou Israel no deserto?',a:['Moisés','Arão','Josué','Calebe'],c:0},
  {id:'q105',p:'Quem era irmão de Moisés?',a:['Arão','Josué','Davi','Samuel'],c:0},
  {id:'q106',p:'Quem foi a irmã de Moisés?',a:['Miriã','Sara','Rebeca','Raquel'],c:0},
  {id:'q107',p:'Quem foi pai de Salomão?',a:['Davi','Saul','Samuel','Elias'],c:0},
  {id:'q108',p:'Quem foi mãe de Samuel?',a:['Ana','Sara','Rebeca','Raquel'],c:0},
  {id:'q109',p:'Quem foi o profeta que chorou?',a:['Jeremias','Isaías','Ezequiel','Daniel'],c:0},
  {id:'q110',p:'Quem foi o discípulo amado?',a:['João','Pedro','Tiago','André'],c:0},
  {id:'q111',p:'Quem foi o primeiro rei?',a:['Saul','Davi','Salomão','Josias'],c:0},
  {id:'q112',p:'Quem derrotou os filisteus com uma pedra?',a:['Davi','Saul','Josué','Samuel'],c:0},
  {id:'q113',p:'Quem escreveu Eclesiastes?',a:['Salomão','Davi','Moisés','Isaías'],c:0},
  {id:'q114',p:'Quem foi o profeta do fogo do céu?',a:['Elias','Eliseu','Isaías','Jeremias'],c:0},
  {id:'q115',p:'Quem multiplicou o azeite da viúva?',a:['Eliseu','Elias','Isaías','Daniel'],c:0},
  {id:'q116',p:'Quem foi levado ao céu em redemoinho?',a:['Elias','Eliseu','Moisés','Abraão'],c:0},
  {id:'q117',p:'Quem escreveu o livro de Daniel?',a:['Daniel','Isaías','Jeremias','Ezequiel'],c:0},
  {id:'q118',p:'Quem escreveu o livro de Isaías?',a:['Isaías','Jeremias','Ezequiel','Daniel'],c:0},
  {id:'q119',p:'Quem escreveu o livro de Jeremias?',a:['Jeremias','Isaías','Ezequiel','Daniel'],c:0},
  {id:'q120',p:'Quem escreveu o livro de Ezequiel?',a:['Ezequiel','Isaías','Jeremias','Daniel'],c:0},
  {id:'q121',p:'Quem foi o primeiro diácono?',a:['Estêvão','Filipe','Paulo','Pedro'],c:0},
  {id:'q122',p:'Quem evangelizou o eunuco?',a:['Filipe','Paulo','Pedro','João'],c:0},
  {id:'q123',p:'Quem foi convertido na estrada de Damasco?',a:['Paulo','Pedro','João','Tiago'],c:0},
  {id:'q124',p:'Quem escreveu Romanos?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q125',p:'Quem escreveu Atos?',a:['Lucas','Paulo','Pedro','João'],c:0},
  {id:'q126',p:'Quem escreveu Hebreus?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q127',p:'Quem foi pescador?',a:['Pedro','Paulo','Lucas','Mateus'],c:0},
  {id:'q128',p:'Quem era cobrador de impostos?',a:['Mateus','Pedro','João','Tiago'],c:0},
  {id:'q129',p:'Quem andou sobre as águas?',a:['Pedro','João','Tiago','André'],c:0},
  {id:'q130',p:'Quem duvidou da ressurreição?',a:['Tomé','Pedro','João','Tiago'],c:0},
  {id:'q131',p:'Quem escreveu Tiago?',a:['Tiago','Pedro','João','Paulo'],c:0},
  {id:'q132',p:'Quem escreveu Pedro?',a:['Pedro','João','Paulo','Lucas'],c:0},
  {id:'q133',p:'Quem escreveu João?',a:['João','Pedro','Paulo','Lucas'],c:0},
  {id:'q134',p:'Quem escreveu Judas?',a:['Judas','Pedro','João','Paulo'],c:0},
  {id:'q135',p:'Quem escreveu Filipenses?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q136',p:'Quem escreveu Efésios?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q137',p:'Quem escreveu Colossenses?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q138',p:'Quem escreveu Tessalonicenses?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q139',p:'Quem escreveu Timóteo?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q140',p:'Quem escreveu Tito?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q141',p:'Quem escreveu Filemom?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q142',p:'Quem escreveu Lucas?',a:['Lucas','Pedro','Paulo','João'],c:0},
  {id:'q143',p:'Quem escreveu Marcos?',a:['Marcos','Lucas','João','Mateus'],c:0},
  {id:'q144',p:'Quem escreveu Mateus?',a:['Mateus','Pedro','João','Lucas'],c:0},
  {id:'q145',p:'Quem era chamado de rocha?',a:['Pedro','João','Paulo','Tiago'],c:0},
  {id:'q146',p:'Quem foi irmão de Jesus?',a:['Tiago','Pedro','João','Paulo'],c:0},
  {id:'q147',p:'Quem foi sumo sacerdote que julgou Jesus?',a:['Caifás','Pilatos','Herodes','Félix'],c:0},
  {id:'q148',p:'Quem condenou Jesus?',a:['Pilatos','Herodes','Caifás','Félix'],c:0},
  {id:'q149',p:'Quem zombou de Jesus?',a:['Soldados','Pedro','João','Paulo'],c:0},
  {id:'q150',p:'Quem ajudou a carregar a cruz?',a:['Simão Cireneu','Pedro','João','Paulo'],c:0},
  {id:'q151',p:'Quem pediu o corpo de Jesus?',a:['José de Arimateia','Pedro','João','Paulo'],c:0},
  {id:'q152',p:'Quem preparou o corpo de Jesus?',a:['Nicodemos','Pedro','João','Paulo'],c:0},
  {id:'q153',p:'Quem guardou o túmulo?',a:['Soldados','Pedro','João','Paulo'],c:0},
  {id:'q154',p:'Quem viu o túmulo vazio?',a:['Maria Madalena','Pedro','João','Tomé'],c:0},
  {id:'q155',p:'Quem correu ao túmulo?',a:['Pedro','Paulo','Tiago','André'],c:0},
  {id:'q156',p:'Quem reconheceu Jesus no caminho de Emaús?',a:['Discípulos','Pedro','João','Paulo'],c:0},
  {id:'q157',p:'Quem recebeu o Espírito Santo primeiro?',a:['Apóstolos','Fariseus','Romanos','Reis'],c:0},
  {id:'q158',p:'Quem pregou em Pentecostes?',a:['Pedro','Paulo','João','Tiago'],c:0},
  {id:'q159',p:'Quem escreveu Atos dos Apóstolos?',a:['Lucas','Paulo','Pedro','João'],c:0},
  {id:'q160',p:'Quem foi perseguido antes de se converter?',a:['Paulo','Pedro','João','Tiago'],c:0},
  {id:'q161',p:'Quem foi discípulo de Paulo?',a:['Timóteo','Pedro','João','Tiago'],c:0},
  {id:'q162',p:'Quem foi companheiro de Paulo?',a:['Silas','Pedro','João','Tiago'],c:0},
  {id:'q163',p:'Quem escreveu Coríntios?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q164',p:'Quem escreveu Gálatas?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q165',p:'Quem escreveu Efésios?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q166',p:'Quem escreveu Filipenses?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q167',p:'Quem escreveu Colossenses?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q168',p:'Quem escreveu Tessalonicenses?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q169',p:'Quem escreveu Timóteo?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q170',p:'Quem escreveu Tito?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q171',p:'Quem escreveu Filemom?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q172',p:'Quem escreveu Hebreus?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q173',p:'Quem escreveu Tiago?',a:['Tiago','Pedro','João','Paulo'],c:0},
  {id:'q174',p:'Quem escreveu 1 Pedro?',a:['Pedro','João','Paulo','Lucas'],c:0},
  {id:'q175',p:'Quem escreveu 2 Pedro?',a:['Pedro','João','Paulo','Lucas'],c:0},
  {id:'q176',p:'Quem escreveu 1 João?',a:['João','Pedro','Paulo','Lucas'],c:0},
  {id:'q177',p:'Quem escreveu 2 João?',a:['João','Pedro','Paulo','Lucas'],c:0},
  {id:'q178',p:'Quem escreveu 3 João?',a:['João','Pedro','Paulo','Lucas'],c:0},
  {id:'q179',p:'Quem escreveu Judas?',a:['Judas','Pedro','João','Paulo'],c:0},
  {id:'q180',p:'Quem escreveu Apocalipse?',a:['João','Pedro','Paulo','Lucas'],c:0},
  {id:'q181',p:'Quem foi o primeiro casal?',a:['Adão e Eva','Abraão e Sara','Isaque e Rebeca','Jacó e Raquel'],c:0},
  {id:'q182',p:'Quem foi o primeiro filho de Adão?',a:['Caim','Abel','Sete','Noé'],c:0},
  {id:'q183',p:'Quem agradou a Deus com oferta?',a:['Abel','Caim','Noé','Abraão'],c:0},
  {id:'q184',p:'Quem construiu a torre de Babel?',a:['Homens','Deus','Anjos','Profetas'],c:0},
  {id:'q185',p:'Quem confundiu as línguas?',a:['Deus','Homens','Anjos','Profetas'],c:0},
  {id:'q186',p:'Quem foi chamado para sair da sua terra?',a:['Abraão','Moisés','Davi','José'],c:0},
  {id:'q187',p:'Quem quase sacrificou seu filho?',a:['Abraão','Moisés','Davi','Noé'],c:0},
  {id:'q188',p:'Quem era esposa de Isaque?',a:['Rebeca','Sara','Raquel','Lea'],c:0},
  {id:'q189',p:'Quem era esposa de Jacó?',a:['Raquel','Sara','Rebeca','Ana'],c:0},
  {id:'q190',p:'Quem trabalhou 7 anos por amor?',a:['Jacó','José','Davi','Moisés'],c:0},
  {id:'q191',p:'Quem foi vendido por seus irmãos?',a:['José','Davi','Moisés','Esaú'],c:0},
  {id:'q192',p:'Quem governou o Egito depois de Faraó?',a:['José','Moisés','Arão','Davi'],c:0},
  {id:'q193',p:'Quem libertou o povo do Egito?',a:['Moisés','Josué','Arão','Davi'],c:0},
  {id:'q194',p:'Quem falou com Deus na sarça?',a:['Moisés','Josué','Davi','Abraão'],c:0},
  {id:'q195',p:'Quem abriu o mar?',a:['Moisés','Josué','Arão','Davi'],c:0},
  {id:'q196',p:'Quem recebeu a lei?',a:['Moisés','Josué','Arão','Davi'],c:0},
  {id:'q197',p:'Quem fez o bezerro de ouro?',a:['Arão','Moisés','Josué','Davi'],c:0},
  {id:'q198',p:'Quem viu a terra prometida de longe?',a:['Moisés','Josué','Calebe','Arão'],c:0},
  {id:'q199',p:'Quem entrou na terra prometida?',a:['Josué','Moisés','Arão','Davi'],c:0},
  {id:'q200',p:'Quem derrubou Jericó?',a:['Josué','Moisés','Davi','Saul'],c:0},
  {id:'q201',p:'Quem foi juiz forte?',a:['Sansão','Gideão','Samuel','Davi'],c:0},
  {id:'q202',p:'Quem teve 300 homens?',a:['Gideão','Josué','Davi','Saul'],c:0},
  {id:'q203',p:'Quem foi rei ungido por Samuel?',a:['Davi','Saul','Salomão','Josias'],c:0},
  {id:'q204',p:'Quem tocava harpa?',a:['Davi','Saul','Samuel','Josué'],c:0},
  {id:'q205',p:'Quem construiu o templo?',a:['Salomão','Davi','Josué','Saul'],c:0},
  {id:'q206',p:'Quem pediu sabedoria?',a:['Salomão','Davi','Saul','Josué'],c:0},
  {id:'q207',p:'Quem visitou Salomão?',a:['Rainha de Sabá','Ester','Débora','Sara'],c:0},
  {id:'q208',p:'Quem foi dividido em dois reinos?',a:['Israel','Egito','Roma','Babilônia'],c:0},
  {id:'q209',p:'Quem foi levado cativo?',a:['Israel','Egito','Roma','Babilônia'],c:0},
  {id:'q210',p:'Quem foi profeta do fogo?',a:['Elias','Eliseu','Isaías','Jeremias'],c:0},
  {id:'q211',p:'Quem sucedeu Elias?',a:['Eliseu','Isaías','Jeremias','Daniel'],c:0},
  {id:'q212',p:'Quem foi jogado na cova?',a:['Daniel','José','Davi','Elias'],c:0},
  {id:'q213',p:'Quem interpretou sonhos na Babilônia?',a:['Daniel','José','Elias','Isaías'],c:0},
  {id:'q214',p:'Quem escreveu Isaías?',a:['Isaías','Jeremias','Ezequiel','Daniel'],c:0},
  {id:'q215',p:'Quem escreveu Jeremias?',a:['Jeremias','Isaías','Ezequiel','Daniel'],c:0},
  {id:'q216',p:'Quem escreveu Ezequiel?',a:['Ezequiel','Isaías','Jeremias','Daniel'],c:0},
  {id:'q217',p:'Quem viu ossos secos?',a:['Ezequiel','Isaías','Jeremias','Daniel'],c:0},
  {id:'q218',p:'Quem foi rainha corajosa?',a:['Ester','Rute','Sara','Débora'],c:0},
  {id:'q219',p:'Quem foi fiel a sogra?',a:['Rute','Ester','Sara','Débora'],c:0},
  {id:'q220',p:'Quem julgou Israel sendo mulher?',a:['Débora','Rute','Ester','Sara'],c:0},
  {id:'q221',p:'Quem foi pai de João Batista?',a:['Zacarias','José','Pedro','Paulo'],c:0},
  {id:'q222',p:'Quem anunciou o nascimento de Jesus?',a:['Anjo Gabriel','Miguel','Pedro','Paulo'],c:0},
  {id:'q223',p:'Onde Jesus nasceu?',a:['Belém','Jerusalém','Nazaré','Egito'],c:0},
  {id:'q224',p:'Quem visitou Jesus bebê?',a:['Magos','Pastores','Reis','Fariseus'],c:0},
  {id:'q225',p:'Quem tentou matar Jesus bebê?',a:['Herodes','Pilatos','César','Faraó'],c:0},
  {id:'q226',p:'Onde Jesus cresceu?',a:['Nazaré','Belém','Jerusalém','Egito'],c:0},
  {id:'q227',p:'Quem batizou Jesus?',a:['João Batista','Pedro','Paulo','Tiago'],c:0},
  {id:'q228',p:'Quantos discípulos Jesus tinha?',a:['12','10','7','70'],c:0},
  {id:'q229',p:'Quem andou sobre as águas?',a:['Pedro','João','Tiago','André'],c:0},
  {id:'q230',p:'Quem multiplicou pães?',a:['Jesus','Pedro','Paulo','João'],c:0},
  {id:'q231',p:'Quem ressuscitou Lázaro?',a:['Jesus','Pedro','Paulo','João'],c:0},
  {id:'q232',p:'Quem chorou por Lázaro?',a:['Jesus','Pedro','João','Paulo'],c:0},
  {id:'q233',p:'Quem traiu Jesus?',a:['Judas','Pedro','João','Tiago'],c:0},
  {id:'q234',p:'Quem negou Jesus?',a:['Pedro','João','Tiago','André'],c:0},
  {id:'q235',p:'Quem julgou Jesus?',a:['Pilatos','Herodes','Caifás','Félix'],c:0},
  {id:'q236',p:'Quem ajudou a carregar a cruz?',a:['Simão','Pedro','João','Paulo'],c:0},
  {id:'q237',p:'Quem morreu na cruz com Jesus?',a:['Ladrões','Apóstolos','Fariseus','Romanos'],c:0},
  {id:'q238',p:'Quem ressuscitou Jesus?',a:['Deus','Pedro','João','Paulo'],c:0},
  {id:'q239',p:'Quem viu o túmulo vazio?',a:['Maria Madalena','Pedro','João','Tomé'],c:0},
  {id:'q240',p:'Quem duvidou?',a:['Tomé','Pedro','João','Tiago'],c:0},
  {id:'q241',p:'Quem pregou em Pentecostes?',a:['Pedro','Paulo','João','Tiago'],c:0},
  {id:'q242',p:'Quem foi apedrejado?',a:['Estêvão','Paulo','Pedro','João'],c:0},
  {id:'q243',p:'Quem se converteu na estrada?',a:['Paulo','Pedro','João','Tiago'],c:0},
  {id:'q244',p:'Quem escreveu Romanos?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q245',p:'Quem escreveu Atos?',a:['Lucas','Paulo','Pedro','João'],c:0},
  {id:'q246',p:'Quem viajou com Paulo?',a:['Silas','Pedro','João','Tiago'],c:0},
  {id:'q247',p:'Quem foi preso várias vezes?',a:['Paulo','Pedro','João','Tiago'],c:0},
  {id:'q248',p:'Quem foi para Patmos?',a:['João','Pedro','Paulo','Tiago'],c:0},
  {id:'q249',p:'Quem escreveu Apocalipse?',a:['João','Pedro','Paulo','Lucas'],c:0},
  {id:'q250',p:'Quem viu o céu aberto?',a:['João','Pedro','Paulo','Tiago'],c:0},
  {id:'q251',p:'Quem foi discípulo amado?',a:['João','Pedro','Tiago','André'],c:0},
  {id:'q252',p:'Quem era pescador?',a:['Pedro','Paulo','Lucas','Mateus'],c:0},
  {id:'q253',p:'Quem era cobrador de impostos?',a:['Mateus','Pedro','João','Tiago'],c:0},
  {id:'q254',p:'Quem escreveu Mateus?',a:['Mateus','Pedro','João','Lucas'],c:0},
  {id:'q255',p:'Quem escreveu Marcos?',a:['Marcos','Lucas','João','Mateus'],c:0},
  {id:'q256',p:'Quem escreveu Lucas?',a:['Lucas','Pedro','Paulo','João'],c:0},
  {id:'q257',p:'Quem escreveu João?',a:['João','Pedro','Paulo','Lucas'],c:0},
  {id:'q258',p:'Quem escreveu Hebreus?',a:['Paulo','Pedro','João','Lucas'],c:0},
  {id:'q259',p:'Quem escreveu Tiago?',a:['Tiago','Pedro','João','Paulo'],c:0},
  {id:'q260',p:'Quem escreveu Judas?',a:['Judas','Pedro','João','Paulo'],c:0}
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
  const { error } = await supabase.rpc('aplicar_pontos_duelo', { p_duelo_id: duelId });
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
  injectStyles();
  cleanupTimer();
  removeOverlay('.duel-arena');

  if (_closedFinalDuels.has(duel.id)) return;

  _duelStateCache = duel;
  _currentDuelId = duel.id;

  const me = await getMe();
  const p1 = await getUser(duel.player1_uid);
  const p2 = await getUser(duel.player2_uid);
  const winner = duel.winner_uid ? await getUser(duel.winner_uid) : null;

  let ov = document.getElementById('duel-final-overlay');
  if (!ov) {
    ov = document.createElement('div');
    ov.id = 'duel-final-overlay';
    ov.className = 'duel-final';
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