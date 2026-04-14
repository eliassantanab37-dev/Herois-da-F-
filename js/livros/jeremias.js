const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const jeremias = {
    nome: "Jeremias",
    icone: "🏺",
    autor: "Jeremias",
    //background: "./imagens/jeremias_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },
    capitulos: {
        1: {
            titulo: "O Chamado do Profeta",
            texto: `¹ Palavras de Jeremias, filho de Hilquias, um dos sacerdotes que estavam em Anatote, na terra de Benjamim;
² Ao qual veio a palavra do Senhor, nos dias de Josias, filho de Amom, rei de Judá, no décimo terceiro ano do seu reinado.
³ E lhe veio também nos dias de Jeoiaquim, filho de Josias, rei de Judá, até ao fim do ano undécimo de Zedequias, filho de Josias, rei de Judá, até que Jerusalém foi levada em cativeiro no quinto mês.
⁴ Assim veio a mim a palavra do Senhor, dizendo:
⁵ Antes que te formasse no ventre te conheci, e antes que saísses da madre, te santifiquei; às nações te dei por profeta.
⁶ Então disse eu: Ah, Senhor Deus! Eis que não sei falar; porque ainda sou um menino.
⁷ Mas o Senhor me disse: Não digas: Eu sou um menino; porque a todos a quem eu te enviar, irás; e tudo quanto te mandar, falarás.
⁸ Não temas diante deles; porque estou contigo para te livrar, diz o Senhor.
⁹ E estendeu o Senhor a sua mão, e tocou-me na boca; e disse-me o Senhor: Eis que ponho as minhas palavras na tua boca;
¹⁰ Olha, ponho-te neste dia sobre as nações, e sobre os reinos, para arrancares, e para derrubares, e para destruíres, e para arruinares; e também para edificares e para plantares.
¹¹ Ainda veio a mim a palavra do Senhor, dizendo: Que é que vês, Jeremias? E eu disse: Vejo uma vara de amendoeira.
¹² E disse-me o Senhor: Viste bem; porque eu velo sobre a minha palavra para cumpri-la.
¹³ E veio a mim a palavra do Senhor segunda vez, dizendo: Que é que vês? E eu disse: Vejo uma panela a ferver, cuja face está para o lado do norte.
¹⁴ E disse-me o Senhor: Do norte se descobrirá o mal sobre todos os habitantes da terra.
¹⁵ Porque eis que eu convoco todas as famílias dos reinos do norte, diz o Senhor; e virão, e cada um porá o seu trono à entrada das portas de Jerusalém, e contra todos os seus muros em redor, e contra todas as cidades de Judá.
¹⁶ E eu pronunciarei contra eles os meus juízos, por causa de toda a sua malícia; pois me deixaram, e queimaram incenso a deuses estranhos, e se encurvaram diante das obras das suas mãos.
¹⁷ Tu, pois, cinge os teus lombos, e levanta-te, e dize-lhes tudo quanto eu te mandar; não te espantes diante deles, para que eu não te envergonhe diante deles.
¹⁸ Porque, eis que hoje te ponho por cidade forte, e por coluna de ferro, e por muros de bronze, contra toda a terra, contra os reis de Judá, contra os seus príncipes, contra os seus sacerdotes, e contra o povo da terra.
¹⁹ E pelejarão contra ti, mas não prevalecerão contra ti; porque eu sou contigo, diz o Senhor, para te livrar.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor disse a Jeremias sobre quando o conheceu?",
                        opcoes: [
                            { numero: 1, texto: "Quando ele começou a pregar", correta: false },
                            { numero: 2, texto: "Antes que fosse formado no ventre", correta: true },
                            { numero: 3, texto: "Quando ele se tornou adulto", correta: false },
                            { numero: 4, texto: "Após ele ter estudado as leis", correta: false }
                        ],
                        explicacao: "Jeremias 1:5 - Antes que te formasse no ventre te conheci, e antes que saísses da madre, te santifiquei.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual foi a desculpa de Jeremias ao ser chamado pelo Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Que ele era muito velho", correta: false },
                            { numero: 2, texto: "Que ele não tinha roupas adequadas", correta: false },
                            { numero: 3, texto: "Que ele era apenas uma criança e não sabia falar", correta: true },
                            { numero: 4, texto: "Que ele tinha medo dos reis", correta: false }
                        ],
                        explicacao: "Jeremias 1:6 - Então disse eu: Ah, Senhor DEUS! Eis que não sei falar; porque ainda sou uma criança.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quais foram as duas visões que Jeremias teve logo no seu chamado?",
                        opcoes: [
                            { numero: 1, texto: "Uma vara de amendoeira e uma panela a ferver", correta: true },
                            { numero: 2, texto: "Um cesto de figos e uma carruagem", correta: false },
                            { numero: 3, texto: "Sete vacas magras e espigas secas", correta: false },
                            { numero: 4, texto: "Um anjo com uma espada e um leão", correta: false }
                        ],
                        explicacao: "Jeremias 1:11,13 - Que vês tu, Jeremias? E eu disse: Vejo uma vara de amendoeira... Vejo uma panela a ferver.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "A Apostasia de Israel",
            texto: ` ¹ E veio a mim a palavra do Senhor, dizendo:
² Vai, e clama aos ouvidos de Jerusalém, dizendo: Assim diz o Senhor: Lembro-me de ti, da piedade da tua mocidade, e do amor do teu noivado, quando me seguias no deserto, numa terra que não se semeava.
³ Então Israel era santidade para o Senhor, e as primícias da sua novidade; todos os que o devoravam eram tidos por culpados; o mal vinha sobre eles, diz o Senhor.
⁴ Ouvi a palavra do Senhor, ó casa de Jacó, e todas as famílias da casa de Israel;
⁵ Assim diz o Senhor: Que injustiça acharam vossos pais em mim, para se afastarem de mim, indo após a vaidade, e tornando-se levianos?
⁶ E não disseram: Onde está o Senhor, que nos fez subir da terra do Egito, que nos guiou através do deserto, por uma terra árida, e de covas, por uma terra de sequidão e sombra de morte, por uma terra pela qual ninguém transitava, e na qual não morava homem algum?
⁷ E eu vos introduzi numa terra fértil, para comerdes o seu fruto e o seu bem; mas quando nela entrastes contaminastes a minha terra, e da minha herança fizestes uma abominação.
⁸ Os sacerdotes não disseram: Onde está o Senhor? E os que tratavam da lei não me conheciam, e os pastores prevaricavam contra mim, e os profetas profetizavam por Baal, e andaram após o que é de nenhum proveito.
⁹ Portanto ainda contenderei convosco, diz o Senhor; e até com os filhos de vossos filhos contenderei.
¹⁰ Pois, passai às ilhas de Quitim, e vede; e enviai a Quedar, e atentai bem, e vede se jamais sucedeu coisa semelhante.
¹¹ Houve alguma nação que trocasse os seus deuses, ainda que não fossem deuses? Todavia o meu povo trocou a sua glória por aquilo que é de nenhum proveito.
¹² Espantai-vos disto, ó céus, e horrorizai-vos! Ficai verdadeiramente desolados, diz o Senhor.
¹³ Porque o meu povo fez duas maldades: a mim me deixaram, o manancial de águas vivas, e cavaram cisternas, cisternas rotas, que não retêm águas.
¹⁴ Acaso é Israel um servo? É ele um escravo nascido em casa? Por que, pois, veio a ser presa?
¹⁵ Os filhos de leão rugiram sobre ele, levantaram a sua voz; e fizeram da sua terra uma desolação; as suas cidades se queimaram, e ninguém habita nelas.
¹⁶ Até os filhos de Nofe e de Tafnes te quebraram o alto da cabeça.
¹⁷ Porventura não fizeste isto a ti mesmo, deixando o Senhor teu Deus, no tempo em que ele te guiava pelo caminho?
¹⁸ Agora, pois, que te importa a ti o caminho do Egito, para beberes as águas de Sior? E que te importa a ti o caminho da Assíria, para beberes as águas do rio?
¹⁹ A tua malícia te castigará, e as tuas apostasias te repreenderão; sabe, pois, e vê, que mal e quão amargo é deixares ao Senhor teu Deus, e não teres em ti o meu temor, diz o Senhor Deus dos Exércitos.
²⁰ Quando eu já há muito quebrava o teu jugo, e rompia as tuas ataduras, dizias tu: Nunca mais transgredirei; contudo em todo o outeiro alto e debaixo de toda a árvore verde te andas encurvando e prostituindo-te .
²¹ Eu mesmo te plantei como vide excelente, uma semente inteiramente fiel; como, pois, te tornaste para mim uma planta degenerada como vide estranha?
²² Por isso, ainda que te laves com salitre, e amontoes sabão, a tua iniquidade está gravada diante de mim, diz o Senhor Deus.
²³ Como dizes logo: Não estou contaminada nem andei após os baalins? Vê o teu caminho no vale, conhece o que fizeste; dromedária ligeira és, que anda torcendo os seus caminhos.
²⁴ Jumenta montês, acostumada ao deserto, que, conforme o desejo da sua alma, sorve o vento, quem a deteria no seu cio? Todos os que a buscarem não se cansarão; no mês dela a acharão.
²⁵ Evita que o teu pé ande descalço, e a tua garganta tenha sede. Mas tu dizes: Não há esperança; porque amo os estranhos, após eles andarei.
²⁶ Como fica confundido o ladrão quando o apanham, assim se confundem os da casa de Israel; eles, os seus reis, os seus príncipes, e os seus sacerdotes, e os seus profetas,
²⁷ Que dizem ao pau: Tu és meu pai; e à pedra: Tu me geraste; porque me viraram as costas, e não o rosto; mas no tempo da sua angústia dirão: Levanta-te, e livra-nos.
²⁸ Onde, pois, estão os teus deuses, que fizeste para ti? Que se levantem, se te podem livrar no tempo da tua angústia; porque os teus deuses, ó Judá, são tão numerosos como as tuas cidades.
²⁹ Por que contendeis comigo? Todos vós transgredistes contra mim, diz o Senhor.
³⁰ Em vão castiguei os vossos filhos; eles não aceitaram a correção; a vossa espada devorou os vossos profetas como um leão destruidor.
³¹ Oh geração! Considerai vós a palavra do Senhor: Porventura tenho eu sido para Israel um deserto? Ou uma terra da mais espessa escuridão? Por que, pois, diz o meu povo: Temos determinado; não viremos mais a ti?
³² Porventura esquece-se a virgem dos seus enfeites, ou a noiva dos seus adornos? Todavia o meu povo se esqueceu de mim por inumeráveis dias.
³³ Por que ornamentas o teu caminho, para buscares o amor? Pois até às malignas ensinaste os teus caminhos.
³⁴ Até nas orlas dos teus vestidos se achou o sangue das almas dos inocentes e necessitados; não cavei para achar, pois se vê em todas estas coisas.
³⁵ E ainda dizes: Eu estou inocente; certamente a sua ira se desviou de mim. Eis que entrarei em juízo contigo, porquanto dizes: Não pequei.
³⁶ Por que te desvias tanto, mudando o teu caminho? Também do Egito serás envergonhada, como foste envergonhada da Assíria.
³⁷ Também daquele sairás com as mãos sobre a tua cabeça; porque o Senhor rejeitou a tua confiança, e não prosperarás com eles.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quais são os dois males que o povo de Deus cometeu, segundo o verso 13?",
                        opcoes: [
                            { numero: 1, texto: "Mentir e roubar no templo", correta: false },
                            { numero: 2, texto: "Deixar o manancial de águas vivas e cavar cisternas rotas", correta: true },
                            { numero: 3, texto: "Fugir para o Egito e queimar incenso", correta: false },
                            { numero: 4, texto: "Odiar o próximo e adorar o sol", correta: false }
                        ],
                        explicacao: "Jeremias 2:13 - Porque o meu povo fez duas maldades: a mim me deixaram, o manancial de águas vivas, e cavaram cisternas rotas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como o Senhor descreve a videira que Ele plantou originalmente?",
                        opcoes: [
                            { numero: 1, texto: "Uma videira brava", correta: false },
                            { numero: 2, texto: "Uma videira de uvas amargas", correta: false },
                            { numero: 3, texto: "Uma videira excelente, de semente inteiramente fiel", correta: true },
                            { numero: 4, texto: "Uma videira que secou rápido", correta: false }
                        ],
                        explicacao: "Jeremias 2:21 - Eu mesmo te plantei como uma videira excelente, uma semente inteiramente fiel.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o povo diz à madeira e à pedra, demonstrando sua idolatria?",
                        opcoes: [
                            { numero: 1, texto: "Tu és meu escravo", correta: false },
                            { numero: 2, texto: "Tu és meu pai e tu me geraste", correta: true },
                            { numero: 3, texto: "Tu és apenas decoração", correta: false },
                            { numero: 4, texto: "Tu és o ouro da terra", correta: false }
                        ],
                        explicacao: "Jeremias 2:27 - Que dizem ao pau: Tu és meu pai; e à pedra: Tu me geraste.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "Chamado ao Arrependimento",
            texto: ` ¹ Eles dizem: Se um homem despedir sua mulher, e ela o deixar, e se ajuntar a outro homem, porventura tornará ele outra vez para ela? Não se poluirá de todo aquela terra? Ora, tu te prostituíste com muitos amantes; mas ainda assim, torna para mim, diz o Senhor.
² Levanta os teus olhos aos altos, e vê: onde não te prostituíste? Nos caminhos te assentavas para eles, como o árabe no deserto; assim poluíste a terra com as tuas fornicações e com a tua malícia.
³ Por isso foram retiradas as chuvas, e não houve chuva serôdia; mas tu tens a fronte de uma prostituta, e não queres ter vergonha.
⁴ Ao menos desde agora não chamarás por mim, dizendo: Pai meu, tu és o guia da minha mocidade?
⁵ Conservará ele para sempre a sua ira? Ou a guardará continuamente? Eis que tens falado e feito quantas maldades pudeste.
⁶ Disse mais o Senhor nos dias do rei Josias: Viste o que fez a rebelde Israel? Ela foi a todo o monte alto, e debaixo de toda a árvore verde, e ali andou prostituindo-se.
⁷ E eu disse: Depois que fizer tudo isto, voltará para mim; mas não voltou; e viu isto a sua aleivosa irmã Judá.
⁸ E vi que, por causa de tudo isto, por ter cometido adultério a rebelde Israel, a despedi, e lhe dei a sua carta de divórcio, que a aleivosa Judá, sua irmã, não temeu; mas se foi e também ela mesma se prostituiu.
⁹ E sucedeu que pela fama da sua prostituição, contaminou a terra; porque adulterou com a pedra e com a madeira.
¹⁰ E, contudo, apesar de tudo isso a sua aleivosa irmã Judá não voltou para mim de todo o seu coração, mas falsamente, diz o Senhor.
¹¹ E o Senhor me disse: Já a rebelde Israel mostrou-se mais justa do que a aleivosa Judá.
¹² Vai, pois, e apregoa estas palavras para o lado norte, e dize: Volta, ó rebelde Israel, diz o Senhor, e não farei cair a minha ira sobre ti; porque misericordioso sou, diz o Senhor, e não conservarei para sempre a minha ira.
¹³ Somente reconhece a tua iniquidade, que transgrediste contra o Senhor teu Deus; e estendeste os teus caminhos aos estranhos, debaixo de toda a árvore verde, e não deste ouvidos à minha voz, diz o Senhor.
¹⁴ Convertei-vos, ó filhos rebeldes, diz o Senhor; pois eu vos desposei; e vos tomarei, a um de uma cidade, e a dois de uma família; e vos levarei a Sião.
¹⁵ E dar-vos-ei pastores segundo o meu coração, os quais vos apascentarão com conhecimento e com inteligência.
¹⁶ E sucederá que, quando vos multiplicardes e frutificardes na terra, naqueles dias, diz o Senhor, nunca mais se dirá: A arca da aliança do Senhor, nem lhes virá ao coração; nem dela se lembrarão, nem a visitarão; nem se fará outra.
¹⁷ Naquele tempo chamarão a Jerusalém o trono do Senhor, e todas as nações se ajuntarão a ela, em nome do Senhor, em Jerusalém; e nunca mais andarão segundo o propósito do seu coração maligno.
¹⁸ Naqueles dias andará a casa de Judá com a casa de Israel; e virão juntas da terra do norte, para a terra que dei em herança a vossos pais.
¹⁹ Mas eu dizia: Como te porei entre os filhos, e te darei a terra desejável, a excelente herança dos exércitos das nações? Mas eu disse: Tu me chamarás meu pai, e de mim não te desviarás.
²⁰ Deveras, como a mulher se aparta aleivosamente do seu marido, assim aleivosamente te houveste comigo, ó casa de Israel, diz o Senhor.
²¹ Nos lugares altos se ouviu uma voz, pranto e súplicas dos filhos de Israel; porquanto perverteram o seu caminho, e se esqueceram do Senhor seu Deus.
²² Voltai, ó filhos rebeldes, eu curarei as vossas rebeliões. Eis-nos aqui, vimos a ti; porque tu és o Senhor nosso Deus.
²³ Certamente em vão se confia nos outeiros e na multidão das montanhas; deveras no Senhor nosso Deus está a salvação de Israel.
²⁴ Porque a confusão devorou o trabalho de nossos pais desde a nossa mocidade; as suas ovelhas e o seu gado, os seus filhos e as suas filhas.
²⁵ Deitemo-nos em nossa vergonha; e cubra-nos a nossa confusão, porque pecamos contra o Senhor nosso Deus, nós e nossos pais, desde a nossa mocidade até o dia de hoje; e não demos ouvidos à voz do Senhor nosso Deus.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor promete dar ao Seu povo se eles se converterem?",
                        opcoes: [
                            { numero: 1, texto: "Pastores segundo o Seu coração", correta: true },
                            { numero: 2, texto: "Cidades muradas de ferro", correta: false },
                            { numero: 3, texto: "Exércitos imbatíveis", correta: false },
                            { numero: 4, texto: "Ouro da Arábia", correta: false }
                        ],
                        explicacao: "Jeremias 3:15 - E dar-vos-ei pastores segundo o meu coração, os quais vos apascentarão com ciência e com inteligência.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual cidade será chamada 'O Trono do Senhor' no tempo da restauração?",
                        opcoes: [
                            { numero: 1, texto: "Samaria", correta: false },
                            { numero: 2, texto: "Jerusalém", correta: true },
                            { numero: 3, texto: "Babilônia", correta: false },
                            { numero: 4, texto: "Hebrom", correta: false }
                        ],
                        explicacao: "Jeremias 3:17 - Naquele tempo chamarão a Jerusalém o trono do Senhor.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor pede para os filhos rebeldes fazerem?",
                        opcoes: [
                            { numero: 1, texto: "Voltarem para Ele", correta: true },
                            { numero: 2, texto: "Fugirem para o deserto", correta: false },
                            { numero: 3, texto: "Lutarem contra os caldeus", correta: false },
                            { numero: 4, texto: "Cobrarem impostos", correta: false }
                        ],
                        explicacao: "Jeremias 3:22 - Voltai, ó filhos rebeldes, eu curarei as vossas rebeldias.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "Ameaça de Invasão do Norte",
            texto: `¹ Se voltares, ó Israel, diz o Senhor, volta para mim; e se tirares as tuas abominações de diante de mim, não andarás mais vagueando,
² E jurarás: Vive o Senhor na verdade, no juízo e na justiça; e nele se bendirão as nações, e nele se gloriarão.
³ Porque assim diz o Senhor aos homens de Judá e a Jerusalém: Preparai para vós o campo de lavoura, e não semeeis entre espinhos.
⁴ Circuncidai-vos ao Senhor, e tirai os prepúcios do vosso coração, ó homens de Judá e habitantes de Jerusalém, para que o meu furor não venha a sair como fogo, e arda de modo que não haja quem o apague, por causa da malícia das vossas obras.
⁵ Anunciai em Judá, e fazei ouvir em Jerusalém, e dizei: Tocai a trombeta na terra, gritai em alta voz, dizendo: Ajuntai-vos, e entremos nas cidades fortificadas.
⁶ Arvorai a bandeira rumo a Sião, fugi, não vos detenhais; porque eu trago do norte um mal, e uma grande destruição.
⁷ Já um leão subiu da sua ramada, e um destruidor dos gentios; ele já partiu, e saiu do seu lugar para fazer da tua terra uma desolação, a fim de que as tuas cidades sejam destruídas, e ninguém habite nelas.
⁸ Por isto cingi-vos de sacos, lamentai, e uivai, porque o ardor da ira do Senhor não se desviou de nós.
⁹ E sucederá naquele tempo, diz o Senhor, que se desfará o coração do rei e o coração dos príncipes; e os sacerdotes pasmarão, e os profetas se maravilharão.
¹⁰ Então disse eu: Ah, Senhor Deus! Verdadeiramente enganaste grandemente a este povo e a Jerusalém, dizendo: Tereis paz; pois a espada penetra-lhe até à alma.
¹¹ Naquele tempo se dirá a este povo e a Jerusalém: Um vento seco das alturas do deserto veio ao caminho da filha do meu povo; não para padejar, nem para limpar;
¹² Mas um vento mais veemente virá da minha parte; agora também eu pronunciarei juízos contra eles.
¹³ Eis que virá subindo como nuvens e os seus carros como a tormenta; os seus cavalos serão mais ligeiros do que as águias; ai de nós, que somos assolados!
¹⁴ Lava o teu coração da malícia, ó Jerusalém, para que sejas salva; até quando permanecerão no meio de ti os pensamentos da tua iniquidade?
¹⁵ Porque uma voz anuncia desde Dã, e faz ouvir a calamidade desde o monte de Efraim.
¹⁶ Lembrai isto às nações; fazei ouvir contra Jerusalém, que vigias vêm de uma terra remota, e levantarão a sua voz contra as cidades de Judá.
¹⁷ Como os guardas de um campo, estão contra ela ao redor; porquanto ela se rebelou contra mim, diz o Senhor.
¹⁸ O teu caminho e as tuas obras te fizeram estas coisas; esta é a tua maldade, e amargosa é, que te chega até ao coração.
¹⁹ Ah, entranhas minhas, entranhas minhas! Estou com dores no meu coração! O meu coração se agita em mim. Não posso me calar; porque tu, ó minha alma, ouviste o som da trombeta e o alarido da guerra.
²⁰ Destruição sobre destruição se apregoa; porque já toda a terra está destruída; de repente foram destruídas as minhas tendas, e as minhas cortinas num momento.
²¹ Até quando verei a bandeira, e ouvirei a voz da trombeta?
²² Deveras o meu povo está louco, já não me conhece; são filhos néscios, e não entendidos; são sábios para fazer mal, mas não sabem fazer o bem.
²³ Observei a terra, e eis que era sem forma e vazia; também os céus, e não tinham a sua luz.
²⁴ Observei os montes, e eis que estavam tremendo; e todos os outeiros estremeciam.
²⁵ Observei, e eis que não havia homem algum; e todas as aves do céu tinham fugido.
²⁶ Vi também que a terra fértil era um deserto; e todas as suas cidades estavam derrubadas diante do Senhor, diante do furor da sua ira.
²⁷ Porque assim diz o Senhor: Toda esta terra será assolada; de todo, porém, não a consumirei.
²⁸ Por isto lamentará a terra, e os céus em cima se enegrecerão; porquanto assim o disse, assim o propus, e não me arrependi nem me desviarei disso.
²⁹ Ao clamor dos cavaleiros e dos flecheiros fugiram todas as cidades; entraram pelas matas e treparam pelos penhascos; todas as cidades ficaram abandonadas, e já ninguém habita nelas.
³⁰ Agora, pois, que farás, ó assolada? Ainda que te vistas de carmesim, ainda que te adornes com enfeites de ouro, ainda que te pintes em volta dos teus olhos, em vão te farias bela; os amantes te desprezam, e procuram tirar-te a vida.
³¹ Porquanto ouço uma voz, como a de uma mulher que está de parto, uma angústia como a de que está com dores de parto do primeiro filho; a voz da filha de Sião, ofegante, que estende as suas mãos, dizendo: Oh! Ai de mim agora, porque já a minha alma desmaia por causa dos assassinos.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o povo deve fazer com o seu campo antes de semear?",
                        opcoes: [
                            { numero: 1, texto: "Regar com água do mar", correta: false },
                            { numero: 2, texto: "Lavrar o campo e não semear entre espinhos", correta: true },
                            { numero: 3, texto: "Queimar toda a colheita", correta: false },
                            { numero: 4, texto: "Vender para estrangeiros", correta: false }
                        ],
                        explicacao: "Jeremias 4:3 - Lavrai para vós o campo lavrado, e não semeeis entre espinhos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "De onde vem o mal anunciado no verso 6?",
                        opcoes: [
                            { numero: 1, texto: "Do Sul", correta: false },
                            { numero: 2, texto: "Do Mar", correta: false },
                            { numero: 3, texto: "Do Norte", correta: true },
                            { numero: 4, texto: "Do Egito", correta: false }
                        ],
                        explicacao: "Jeremias 4:6 - ...porque eu trago um mal do norte, e uma grande destruição.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A que animal é comparado o destruidor das nações que subiu da sua malhada?",
                        opcoes: [
                            { numero: 1, texto: "Urso", correta: false },
                            { numero: 2, texto: "Leão", correta: true },
                            { numero: 3, texto: "Leopardo", correta: false },
                            { numero: 4, texto: "Lobo", correta: false }
                        ],
                        explicacao: "Jeremias 4:7 - Já um leão subiu da sua malhada, e um destruidor de nações partiu.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "A Corrupção Geral de Jerusalém",
            texto: ` ¹ Dai voltas às ruas de Jerusalém, e vede agora; e informai-vos, e buscai pelas suas praças, a ver se achais alguém, ou se há homem que pratique a justiça ou busque a verdade; e eu lhe perdoarei.
² E ainda que digam: Vive o Senhor, decerto falsamente juram.
³ Ah Senhor, porventura não atentam os teus olhos para a verdade? Feriste-os, e não lhes doeu; consumiste-os, e não quiseram receber a correção; endureceram as suas faces mais do que uma rocha; não quiseram voltar.
⁴ Eu, porém, disse: Deveras estes são pobres; são loucos, pois não sabem o caminho do Senhor, nem o juízo do seu Deus.
⁵ Irei aos grandes, e falarei com eles; porque eles sabem o caminho do Senhor, o juízo do seu Deus; mas estes juntamente quebraram o jugo, e romperam as ataduras.
⁶ Por isso um leão do bosque os feriu, um lobo dos desertos os assolará; um leopardo vigia contra as suas cidades; qualquer que sair delas será despedaçado; porque as suas transgressões se avolumam, multiplicaram-se as suas apostasias.
⁷ Como, vendo isto, te perdoaria? Teus filhos me deixam a mim e juram pelos que não são deuses; quando os fartei, então adulteraram, e em casa de meretrizes se ajuntaram em bandos.
⁸ Como cavalos bem fartos, levantam-se pela manhã, rinchando cada um à mulher do seu próximo.
⁹ Deixaria eu de castigar por estas coisas, diz o Senhor, ou não se vingaria a minha alma de uma nação como esta?
¹⁰ Subi aos seus muros, e destruí-os (porém não façais uma destruição final); tirai os seus ramos, porque não são do Senhor.
¹¹ Porque aleivosissimamente se houveram contra mim a casa de Israel e a casa de Judá, diz o Senhor.
¹² Negaram ao Senhor, e disseram: Não é ele; nem mal nos sobrevirá, nem veremos espada nem fome.
¹³ E até os profetas serão como vento, porque a palavra não está com eles; assim se lhes sucederá.
¹⁴ Portanto assim diz o Senhor Deus dos Exércitos: Porquanto disseste tal palavra, eis que converterei as minhas palavras na tua boca em fogo, e a este povo em lenha, eles serão consumidos.
¹⁵ Eis que trarei sobre vós uma nação de longe, ó casa de Israel, diz o Senhor; é uma nação robusta, é uma nação antiquíssima, uma nação cuja língua ignorarás, e não entenderás o que ela falar.
¹⁶ A sua aljava é como uma sepultura aberta; todos eles são poderosos.
¹⁷ E comerão a tua sega e o teu pão, que teus filhos e tuas filhas haviam de comer; comerão as tuas ovelhas e as tuas vacas; comerão a tua vide e a tua figueira; as tuas cidades fortificadas, em que confiavas, abatê-las-ão à espada.
¹⁸ Contudo, ainda naqueles dias, diz o Senhor, não farei de vós uma destruição final.
¹⁹ E sucederá que, quando disserdes: Por que nos fez o Senhor nosso Deus todas estas coisas? Então lhes dirás: Como vós me deixastes, e servistes a deuses estranhos na vossa terra, assim servireis a estrangeiros, em terra que não é vossa.
²⁰ Anunciai isto na casa de Jacó, e fazei-o ouvir em Judá, dizendo:
²¹ Ouvi agora isto, ó povo insensato, e sem coração, que tendes olhos e não vedes, que tendes ouvidos e não ouvis.
²² Porventura não me temereis a mim? Diz o Senhor; não temereis diante de mim, que pus a areia por limite ao mar, por ordenança eterna, que ele não traspassará? Ainda que se levantem as suas ondas, não prevalecerão; ainda que bramem, não a traspassarão.
²³ Mas este povo é de coração rebelde e pertinaz: rebelaram-se e foram-se.
²⁴ E não dizem no seu coração: Temamos agora ao Senhor nosso Deus, que dá chuva, a temporã e a tardia, ao seu tempo; e nos conserva as semanas determinadas da sega.
²⁵ As vossas iniquidades desviam estas coisas, e os vossos pecados apartam de vós o bem.
²⁶ Porque ímpios se acham entre o meu povo; andam espiando, como quem arma laços; põem armadilhas, com que prendem os homens.
²⁷ Como uma gaiola está cheia de pássaros, assim as suas casas estão cheias de engano; por isso se engrandeceram, e enriqueceram;
²⁸ Engordam-se, estão nédios, e ultrapassam até os feitos dos malignos; não julgam a causa do órfão; todavia prosperam; nem julgam o direito dos necessitados.
²⁹ Porventura não castigaria eu por causa destas coisas? Diz o Senhor; não me vingaria eu de uma nação como esta?
³⁰ Coisa espantosa e horrenda se anda fazendo na terra.
³¹ Os profetas profetizam falsamente, e os sacerdotes dominam pelas mãos deles, e o meu povo assim o deseja; mas que fareis ao fim disto
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor procurava nas ruas de Jerusalém para perdoar a cidade?",
                        opcoes: [
                            { numero: 1, texto: "Um homem que pratique a justiça e busque a verdade", correta: true },
                            { numero: 2, texto: "Dez mil moedas de prata", correta: false },
                            { numero: 3, texto: "Um novo exército", correta: false },
                            { numero: 4, texto: "Muros mais altos", correta: false }
                        ],
                        explicacao: "Jeremias 5:1 - ...se achardes um homem, se houver alguém que pratique a justiça e busque a verdade, e eu lhe perdoarei.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o povo disse sobre as ameaças dos profetas?",
                        opcoes: [
                            { numero: 1, texto: "Que eram palavras de Deus", correta: false },
                            { numero: 2, texto: "Que os profetas são vento e a palavra não está neles", correta: true },
                            { numero: 3, texto: "Que precisavam jejuar", correta: false },
                            { numero: 4, texto: "Que iriam fugir", correta: false }
                        ],
                        explicacao: "Jeremias 5:13 - E até os profetas serão como vento, porque a palavra não está com eles.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é a coisa espantosa e horrenda que se faz na terra, segundo o verso 30?",
                        opcoes: [
                            { numero: 1, texto: "Os profetas profetizam falsamente e os sacerdotes dominam por eles", correta: true },
                            { numero: 2, texto: "O deserto avançou sobre a cidade", correta: false },
                            { numero: 3, texto: "O povo parou de comer carne", correta: false },
                            { numero: 4, texto: "Os muros caíram sozinhos", correta: false }
                        ],
                        explicacao: "Jeremias 5:30-31 - Coisa espantosa e horrenda se faz na terra. Os profetas profetizam falsamente, e os sacerdotes dominam pelas mãos deles.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "Jerusalém Cercada de Males",
            texto: ` ¹ Fugi para salvação vossa, filhos de Benjamim, do meio de Jerusalém; e tocai a trombeta em Tecoa, e levantai um sinal de fogo sobre Bete-Haquerém; porque do lado norte surge um mal e uma grande destruição.
² À formosa e delicada assemelhei a filha de Sião.
³ Mas contra ela virão pastores com os seus rebanhos; levantarão contra ela tendas em redor, e cada um apascentará no seu lugar.
⁴ Preparai a guerra contra ela, levantai-vos, e subamos ao pino do meio-dia. Ai de nós! Já declina o dia, já se vão estendendo as sombras da tarde.
⁵ Levantai-vos, e subamos de noite, e destruamos os seus palácios.
⁶ Porque assim diz o Senhor dos Exércitos: Cortai árvores, e levantai trincheiras contra Jerusalém; esta é a cidade que há de ser castigada, só opressão há no meio dela.
⁷ Como a fonte produz as suas águas, assim ela produz a sua malícia; violência e estrago se ouvem nela; enfermidade e feridas há diante de mim continuamente.
⁸ Corrige-te, ó Jerusalém, para que a minha alma não se aparte de ti, para que não te torne em assolação e terra não habitada.
⁹ Assim diz o Senhor dos Exércitos: Diligentemente respigarão os resíduos de Israel como uma vinha; torna a tua mão, como o vindimador, aos cestos.
¹⁰ A quem falarei e testemunharei, para que ouça? Eis que os seus ouvidos estão incircuncisos, e não podem ouvir; eis que a palavra do Senhor é para eles coisa vergonhosa, e não gostam dela.
¹¹ Por isso estou cheio do furor do Senhor; estou cansado de o conter; derramá-lo-ei sobre os meninos pelas ruas e na reunião de todos os jovens; porque até o marido com a mulher serão presos, e o velho com o que está cheio de dias.
¹² E as suas casas passarão a outros, como também as suas herdades e as suas mulheres juntamente; porque estenderei a minha mão contra os habitantes desta terra, diz o Senhor.
¹³ Porque desde o menor deles até ao maior, cada um se dá à avareza; e desde o profeta até ao sacerdote, cada um usa de falsidade.
¹⁴ E curam superficialmente a ferida da filha do meu povo, dizendo: Paz, paz; quando não há paz.
¹⁵ Porventura envergonham-se de cometer abominação? Pelo contrário, de maneira nenhuma se envergonham, nem tampouco sabem que coisa é envergonhar-se; portanto cairão entre os que caem; no tempo em que eu os visitar, tropeçarão, diz o Senhor.
¹⁶ Assim diz o Senhor: Ponde-vos nos caminhos, e vede, e perguntai pelas veredas antigas, qual é o bom caminho, e andai por ele; e achareis descanso para as vossas almas; mas eles dizem: Não andaremos nele.
¹⁷ Também pus atalaias sobre vós, dizendo: Estai atentos ao som da trombeta; mas dizem: Não escutaremos.
¹⁸ Portanto ouvi, vós, nações; e informa-te tu, ó congregação, do que se faz entre eles!
¹⁹ Ouve tu, ó terra! Eis que eu trarei mal sobre este povo, o próprio fruto dos seus pensamentos; porque não estão atentos às minhas palavras, e rejeitam a minha lei.
²⁰ Para que, pois, me vem o incenso de Sabá e a melhor cana aromática de terras remotas? Vossos holocaustos não me agradam, nem me são suaves os vossos sacrifícios.
²¹ Portanto assim diz o Senhor: Eis que armarei tropeços a este povo; e tropeçarão neles pais e filhos juntamente; o vizinho e o seu companheiro perecerão.
²² Assim diz o Senhor: Eis que um povo vem da terra do norte, e uma grande nação se levantará das extremidades da terra.
²³ Arco e lança trarão; são cruéis, e não usarão de misericórdia; a sua voz rugirá como o mar, e em cavalos virão montados, dispostos como homens de guerra contra ti, ó filha de Sião.
²⁴ Ouvimos a sua fama, afrouxaram-se as nossas mãos; angústia nos tomou, e dores como as de parturiente.
²⁵ Não saiais ao campo, nem andeis pelo caminho; porque espada do inimigo e espanto há ao redor.
²⁶ Ó filha do meu povo, cinge-te de saco, e revolve-te na cinza; pranteia como por um filho único, pranto de amargura; porque de repente virá o destruidor sobre nós.
²⁷ Por torre de guarda te pus entre o meu povo, por fortaleza, para que soubesses e examinasses o seu caminho.
²⁸ Todos eles são os mais rebeldes, andam murmurando; são duros como bronze e ferro; todos eles são corruptores.
²⁹ Já o fole se queimou, o chumbo se consumiu com o fogo; em vão fundiu o fundidor tão diligentemente, pois os maus não são arrancados.
³⁰ Prata rejeitada lhes chamarão, porque o Senhor os rejeitou.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor ordena que o povo pergunte ao estar nos caminhos?",
                        opcoes: [
                            { numero: 1, texto: "Onde está o ouro escondido?", correta: false },
                            { numero: 2, texto: "Quais são as novas leis?", correta: false },
                            { numero: 3, texto: "Pelas veredas antigas, qual é o bom caminho", correta: true },
                            { numero: 4, texto: "Onde estão os profetas?", correta: false }
                        ],
                        explicacao: "Jeremias 6:16 - Ponde-vos nos caminhos, e vede, e perguntai pelas veredas antigas, qual é o bom caminho, e andai por ele.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como os profetas e sacerdotes curavam a ferida do povo?",
                        opcoes: [
                            { numero: 1, texto: "Dizendo: Paz, paz; não havendo paz", correta: true },
                            { numero: 2, texto: "Com remédios caros", correta: false },
                            { numero: 3, texto: "Através de orações sinceras", correta: false },
                            { numero: 4, texto: "Levando-os ao templo", correta: false }
                        ],
                        explicacao: "Jeremias 6:14 - E curam a ferida da filha do meu povo levemente, dizendo: Paz, paz; quando não há paz.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor diz sobre o incenso que vinha de Sabá?",
                        opcoes: [
                            { numero: 1, texto: "Para que me serve o incenso que vem de Sabá?", correta: true },
                            { numero: 2, texto: "Que era o cheiro mais doce", correta: false },
                            { numero: 3, texto: "Que deveriam trazer mais", correta: false },
                            { numero: 4, texto: "Que o incenso salvaria a cidade", correta: false }
                        ],
                        explicacao: "Jeremias 6:20 - Para que, pois, me vem o incenso de Sabá... Vossos holocaustos não me agradam.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        7: {
            titulo: "O Discurso no Templo",
            texto: ` ¹ A palavra que da parte do Senhor, veio a Jeremias, dizendo:
² Põe-te à porta da casa do Senhor, e proclama ali esta palavra, e dize: Ouvi a palavra do Senhor, todos de Judá, os que entrais por estas portas, para adorardes ao Senhor.
³ Assim diz o Senhor dos Exércitos, o Deus de Israel: Melhorai os vossos caminhos e as vossas obras, e vos farei habitar neste lugar.
⁴ Não vos fieis em palavras falsas, dizendo: Templo do Senhor, templo do Senhor, templo do Senhor é este.
⁵ Mas, se deveras melhorardes os vossos caminhos e as vossas obras; se deveras praticardes o juízo entre um homem e o seu próximo;
⁶ Se não oprimirdes o estrangeiro, e o órfão, e a viúva, nem derramardes sangue inocente neste lugar, nem andardes após outros deuses para vosso próprio mal,
⁷ Eu vos farei habitar neste lugar, na terra que dei a vossos pais, desde os tempos antigos e para sempre.
⁸ Eis que vós confiais em palavras falsas, que para nada vos aproveitam.
⁹ Porventura furtareis, e matareis, e adulterareis, e jurareis falsamente, e queimareis incenso a Baal, e andareis após outros deuses que não conhecestes,
¹⁰ E então vireis, e vos poreis diante de mim nesta casa, que se chama pelo meu nome, e direis: Fomos libertados para fazermos todas estas abominações?
¹¹ É pois esta casa, que se chama pelo meu nome, uma caverna de salteadores aos vossos olhos? Eis que eu, eu mesmo, vi isto, diz o Senhor.
¹² Mas ide agora ao meu lugar, que estava em Siló, onde, ao princípio, fiz habitar o meu nome, e vede o que lhe fiz, por causa da maldade do meu povo Israel.
¹³ Agora, pois, porquanto fazeis todas estas obras, diz o Senhor, e eu vos falei, madrugando, e falando, e não ouvistes, e chamei-vos, e não respondestes,
¹⁴ Farei também a esta casa, que se chama pelo meu nome, na qual confiais, e a este lugar, que vos dei a vós e a vossos pais, como fiz a Siló.
¹⁵ E lançar-vos-ei de diante de minha face, como lancei a todos os vossos irmãos, a toda a geração de Efraim.
¹⁶ Tu, pois, não ores por este povo, nem levantes por ele clamor ou oração, nem me supliques, porque eu não te ouvirei.
¹⁷ Porventura não vês tu o que andam fazendo nas cidades de Judá, e nas ruas de Jerusalém?
¹⁸ Os filhos apanham a lenha, e os pais acendem o fogo, e as mulheres preparam a massa, para fazerem bolos à rainha dos céus, e oferecem libações a outros deuses, para me provocarem à ira.
¹⁹ Acaso é a mim que eles provocam à ira? Diz o Senhor, e não a si mesmos, para confusão dos seus rostos?
²⁰ Portanto assim diz o Senhor Deus: Eis que a minha ira e o meu furor se derramarão sobre este lugar, sobre os homens e sobre os animais, e sobre as árvores do campo, e sobre os frutos da terra; e acender-se-á, e não se apagará.
²¹ Assim diz o Senhor dos Exércitos, o Deus de Israel: Ajuntai os vossos holocaustos aos vossos sacrifícios, e comei carne.
²² Porque nunca falei a vossos pais, no dia em que os tirei da terra do Egito, nem lhes ordenei coisa alguma acerca de holocaustos ou sacrifícios.
²³ Mas isto lhes ordenei, dizendo: Dai ouvidos à minha voz, e eu serei o vosso Deus, e vós sereis o meu povo; e andai em todo o caminho que eu vos mandar, para que vos vá bem.
²⁴ Mas não ouviram, nem inclinaram os seus ouvidos, mas andaram nos seus próprios conselhos, no propósito do seu coração malvado; e andaram para trás, e não para diante.
²⁵ Desde o dia em que vossos pais saíram da terra do Egito, até hoje, enviei-vos todos os meus servos, os profetas, todos os dias madrugando e enviando-os.
²⁶ Mas não me deram ouvidos, nem inclinaram os seus ouvidos, mas endureceram a sua cerviz, e fizeram pior do que seus pais.
²⁷ Dir-lhes-ás, pois, todas estas palavras, mas não te darão ouvidos; chamá-los-ás, mas não te responderão.
²⁸ E lhes dirás: Esta é a nação que não deu ouvidos à voz do Senhor seu Deus e não aceitou a correção; já pereceu a verdade, e foi cortada da sua boca.
²⁹ Corta o teu cabelo e lança-o de ti, e levanta um pranto sobre as alturas; porque já o Senhor rejeitou e desamparou a geração do seu furor.
³⁰ Porque os filhos de Judá fizeram o que era mau aos meus olhos, diz o Senhor; puseram as suas abominações na casa que se chama pelo meu nome, para contaminá-la.
³¹ E edificaram os altos de Tofete, que está no Vale do Filho de Hinom, para queimarem no fogo a seus filhos e a suas filhas, o que nunca ordenei, nem me subiu ao coração.
³² Portanto, eis que vêm dias, diz o Senhor, em que não se chamará mais Tofete, nem Vale do Filho de Hinom, mas o Vale da Matança; e enterrarão em Tofete, por não haver outro lugar.
³³ E os cadáveres deste povo servirão de pasto às aves dos céus e aos animais da terra; e ninguém os espantará.
³⁴ E farei cessar nas cidades de Judá, e nas ruas de Jerusalém, a voz de gozo, e a voz de alegria, a voz de esposo e a voz de esposa; porque a terra se tornará em desolação.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o povo não deveria confiar, dizendo 'Templo do Senhor é este'?",
                        opcoes: [
                            { numero: 1, texto: "Em palavras mentirosas", correta: true },
                            { numero: 2, texto: "Nas colunas de bronze", correta: false },
                            { numero: 3, texto: "Nos sacerdotes velhos", correta: false },
                            { numero: 4, texto: "No ouro do altar", correta: false }
                        ],
                        explicacao: "Jeremias 7:4 - Não confieis em palavras mentirosas, dizendo: Templo do Senhor, templo do Senhor, templo do Senhor é este.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A casa que se chama pelo nome de Deus tinha se tornado o quê aos olhos do povo?",
                        opcoes: [
                            { numero: 1, texto: "Cova de salteadores", correta: true },
                            { numero: 2, texto: "Uma fortaleza", correta: false },
                            { numero: 3, texto: "Um refúgio seguro", correta: false },
                            { numero: 4, texto: "Um mercado de escravos", correta: false }
                        ],
                        explicacao: "Jeremias 7:11 - Tornou-se, pois, esta casa... uma cova de salteadores aos vossos olhos?",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que as mulheres faziam nas cidades de Judá, segundo o verso 18?",
                        opcoes: [
                            { numero: 1, texto: "Preparavam bolos à Rainha dos Céus", correta: true },
                            { numero: 2, texto: "Limpavam as ruas", correta: false },
                            { numero: 3, texto: "Ensinavam a lei", correta: false },
                            { numero: 4, texto: "Trabalhavam a terra", correta: false }
                        ],
                        explicacao: "Jeremias 7:18 - ...e as mulheres amassam a farinha, para fazerem bolos à rainha dos céus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        8: {
            titulo: "O Povo Sem Arrependimento",
            texto: ` ¹ Naquele tempo, diz o Senhor, tirarão para fora das suas sepulturas os ossos dos reis de Judá, e os ossos dos seus príncipes, e os ossos dos sacerdotes, e os ossos dos profetas, e os ossos dos habitantes de Jerusalém;
² E expô-los-ão ao sol, e à lua, e a todo o exército do céu, a quem tinham amado, e a quem tinham servido, e após quem tinham ido, e a quem tinham buscado e diante de quem se tinham prostrado; não serão recolhidos nem sepultados; serão como esterco sobre a face da terra.
³ E será escolhida antes a morte do que a vida por todos os que restarem desta raça maligna, que ficarem em todos os lugares onde os lancei, diz o Senhor dos Exércitos.
⁴ Dize-lhes mais: Assim diz o Senhor: Porventura cairão e não se tornarão a levantar? Desviar-se-ão, e não voltarão?
⁵ Por que, pois, se desvia este povo de Jerusalém com uma apostasia tão contínua? Persiste no engano, não quer voltar.
⁶ Eu escutei e ouvi; não falam o que é reto, ninguém há que se arrependa da sua maldade, dizendo: Que fiz eu? Cada um se desvia na sua carreira, como um cavalo que arremete com ímpeto na batalha.
⁷ Até a cegonha no céu conhece os seus tempos determinados; e a rola, e o grou e a andorinha observam o tempo da sua arribação; mas o meu povo não conhece o juízo do Senhor.
⁸ Como, pois, dizeis: Nós somos sábios, e a lei do Senhor está conosco? Eis que em vão tem trabalhado a falsa pena dos escribas.
⁹ Os sábios são envergonhados, espantados e presos; eis que rejeitaram a palavra do Senhor; que sabedoria, pois, têm eles?
¹⁰ Portanto darei suas mulheres a outros, e os seus campos a novos possuidores; porque desde o menor até ao maior, cada um deles se dá à avareza; desde o profeta até ao sacerdote, cada um deles usa de falsidade.
¹¹ E curam a ferida da filha de meu povo levianamente, dizendo: Paz, paz; quando não há paz.
¹² Porventura envergonham-se de cometerem abominação? Não; de maneira nenhuma se envergonham, nem sabem que coisa é envergonhar-se; portanto cairão entre os que caem e tropeçarão no tempo em que eu os visitar, diz o Senhor.
¹³ Certamente os apanharei, diz o Senhor; já não há uvas na vide, nem figos na figueira, e até a folha caiu; e o que lhes dei passará deles.
¹⁴ Por que nos assentamos ainda? Juntai-vos e entremos nas cidades fortificadas, e ali pereçamos; pois já o Senhor nosso Deus nos destinou a perecer e nos deu a beber água de fel; porquanto pecamos contra o Senhor.
¹⁵ Espera-se a paz, mas não há bem; o tempo da cura, e eis o terror.
¹⁶ Já desde Dã se ouve o resfolegar dos seus cavalos, toda a terra treme ao som dos rinchos dos seus fortes; e vêm, e devoram a terra, e sua abundância, a cidade e os que habitam nela.
¹⁷ Porque eis que envio entre vós serpentes e basiliscos, contra os quais não há encantamento, e vos morderão, diz o Senhor.
¹⁸ Oh! Se eu pudesse consolar-me na minha tristeza! O meu coração desfalece em mim.
¹⁹ Eis a voz do clamor da filha do meu povo de terra mui remota; não está o Senhor em Sião? Não está nela o seu rei? Por que me provocaram à ira com as suas imagens de escultura, com vaidades estranhas?
²⁰ Passou a sega, findou o verão, e nós não estamos salvos.
²¹ Estou quebrantado pela ferida da filha do meu povo; ando de luto; o espanto se apoderou de mim.
²² Porventura não há bálsamo em Gileade? Ou não há lá médico? Por que, pois, não se realizou a cura da filha do meu povo?
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Até a cegonha no céu conhece o seu tempo; mas o povo de Deus não conhece o quê?",
                        opcoes: [
                            { numero: 1, texto: "As estrelas", correta: false },
                            { numero: 2, texto: "O juízo do Senhor", correta: true },
                            { numero: 3, texto: "O caminho de casa", correta: false },
                            { numero: 4, texto: "A voz dos profetas", correta: false }
                        ],
                        explicacao: "Jeremias 8:7 - Até a cegonha no céu conhece os seus tempos determinados... mas o meu povo não conhece o juízo do Senhor.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu com a colheita e o verão, segundo o lamento do povo no verso 20?",
                        opcoes: [
                            { numero: 1, texto: "Foi a melhor de todas", correta: false },
                            { numero: 2, texto: "Passou a sega, findou o verão, e não estamos salvos", correta: true },
                            { numero: 3, texto: "O verão trouxe chuva", correta: false },
                            { numero: 4, texto: "A colheita foi roubada", correta: false }
                        ],
                        explicacao: "Jeremias 8:20 - Passou a sega, findou o verão, e nós não estamos salvos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual bálsamo o profeta pergunta se não há em uma região específica?",
                        opcoes: [
                            { numero: 1, texto: "Bálsamo em Gileade", correta: true },
                            { numero: 2, texto: "Bálsamo no Egito", correta: false },
                            { numero: 3, texto: "Bálsamo no Líbano", correta: false },
                            { numero: 4, texto: "Bálsamo em Hebrom", correta: false }
                        ],
                        explicacao: "Jeremias 8:22 - Porventura não há bálsamo em Gileade? Ou não há lá médico?",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        9: {
            titulo: "Lamento pela Ruína de Judá",
            texto: `¹ Oh! Se a minha cabeça se tornasse em águas, e os meus olhos numa fonte de lágrimas! Então choraria de dia e de noite os mortos da filha do meu povo.
² Oh! Se tivesse no deserto uma estalagem de caminhantes! Então deixaria o meu povo, e me apartaria dele, porque todos eles são adúlteros, um bando de aleivosos.
³ E encurvam a língua como se fosse o seu arco, para a mentira; fortalecem-se na terra, mas não para a verdade; porque avançam de malícia em malícia, e a mim não me conhecem, diz o Senhor.
⁴ Guardai-vos cada um do seu próximo, e de irmão nenhum vos fieis; porque todo o irmão não faz mais do que enganar, e todo o próximo anda caluniando.
⁵ E zombará cada um do seu próximo, e não falam a verdade; ensinam a sua língua a falar a mentira, andam-se cansando em proceder perversamente.
⁶ A tua habitação está no meio do engano; pelo engano recusam conhecer-me, diz o Senhor.
⁷ Portanto assim diz o Senhor dos Exércitos: Eis que eu os fundirei e os provarei; pois, de que outra maneira procederia com a filha do meu povo?
⁸ Uma flecha mortífera é a língua deles; fala engano; com a sua boca fala cada um de paz com o seu próximo mas no seu coração arma-lhe ciladas.
⁹ Porventura por estas coisas não os castigaria? Diz o Senhor; ou não se vingaria a minha alma de nação tal como esta?
¹⁰ Pelos montes levantarei choro e pranto, e pelas pastagens do deserto lamentação; porque já estão queimadas, e ninguém passa por elas; nem se ouve mugido de gado; desde as aves dos céus, até os animais, andaram vagueando, e fugiram.
¹¹ E farei de Jerusalém montões de pedras, morada de chacais, e das cidades de Judá farei assolação, de sorte que não haja habitante.
¹² Quem é o homem sábio, que entenda isto? E a quem falou a boca do Senhor, para que o possa anunciar? Por que razão pereceu a terra, e se queimou como deserto, sem que ninguém passa por ela?
¹³ E disse o Senhor: Porque deixaram a minha lei, que pus perante eles, e não deram ouvidos à minha voz, nem andaram nela,
¹⁴ Antes andaram após o propósito do seu próprio coração, e após os baalins, como lhes ensinaram os seus pais.
¹⁵ Portanto assim diz o Senhor dos Exércitos, Deus de Israel: Eis que darei de comer losna a este povo, e lhe darei a beber água de fel.
¹⁶ E os espalharei entre gentios, que não conheceram, nem eles nem seus pais, e mandarei a espada após eles, até que venha a consumi-los.
¹⁷ Assim diz o Senhor dos Exércitos: Considerai, e chamai carpideiras que venham; e mandai procurar mulheres hábeis, para que venham.
¹⁸ E se apressem, e levantem o seu lamento sobre nós; e desfaçam-se em lágrimas os nossos olhos, e as nossas pálpebras destilem águas.
¹⁹ Porque uma voz de pranto se ouviu de Sião: Como estamos arruinados! Estamos mui envergonhados, porque deixamos a terra, e por terem eles lançado fora as nossas moradas.
²⁰ Ouvi, pois, vós, mulheres, a palavra do Senhor, e os vossos ouvidos recebam a palavra da sua boca; e ensinai o pranto a vossas filhas, e cada uma à sua vizinha a lamentação;
²¹ Porque a morte subiu pelas nossas janelas, e entrou em nossos palácios, para exterminar as crianças das ruas e os jovens das praças.
²² Fala: Assim diz o Senhor: Até os cadáveres dos homens jazerão como esterco sobre a face do campo, e como gavela atrás do segador, e não há quem a recolha.
²³ Assim diz o Senhor: Não se glorie o sábio na sua sabedoria, nem se glorie o forte na sua força; não se glorie o rico nas suas riquezas,
²⁴ Mas o que se gloriar, glorie-se nisto: em me entender e me conhecer, que eu sou o Senhor, que faço beneficência, juízo e justiça na terra; porque destas coisas me agrado, diz o Senhor.
²⁵ Eis que vêm dias, diz o Senhor, em que castigarei a todo o circuncidado com o incircunciso.
²⁶ Ao Egito, e a Judá, e a Edom, e aos filhos de Amom, e a Moabe, e a todos os que cortam os cantos do seu cabelo, que habitam no deserto; porque todas as nações são incircuncisas, e toda a casa de Israel é incircuncisa de coração.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o profeta desejava que seus olhos se tornassem para chorar dia e noite?",
                        opcoes: [
                            { numero: 1, texto: "Fontes de águas", correta: true },
                            { numero: 2, texto: "Chamas de fogo", correta: false },
                            { numero: 3, texto: "Luzes no deserto", correta: false },
                            { numero: 4, texto: "Pedras de gelo", correta: false }
                        ],
                        explicacao: "Jeremias 9:1 - Oh! se a minha cabeça se tornasse em águas, e os meus olhos em uma fonte de lágrimas!",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Em que o sábio, o forte e o rico não devem se gloriar?",
                        opcoes: [
                            { numero: 1, texto: "Em suas conquistas militares", correta: false },
                            { numero: 2, texto: "Na sabedoria, na força e nas riquezas", correta: true },
                            { numero: 3, texto: "Nos seus templos e altares", correta: false },
                            { numero: 4, texto: "Na descendência de Abraão", correta: false }
                        ],
                        explicacao: "Jeremias 9:23 - Não se glorie o sábio na sua sabedoria, nem se glorie o forte na sua força; não se glorie o rico nas suas riquezas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "No que deve se gloriar aquele que deseja se gloriar, segundo o verso 24?",
                        opcoes: [
                            { numero: 1, texto: "Em conhecer e entender ao Senhor", correta: true },
                            { numero: 2, texto: "Em cumprir toda a lei", correta: false },
                            { numero: 3, texto: "Em vencer os inimigos", correta: false },
                            { numero: 4, texto: "Em oferecer sacrifícios", correta: false }
                        ],
                        explicacao: "Jeremias 9:24 - Mas o que se gloriar, glorie-se nisto: em me entender e me conhecer.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        10: {
            titulo: "O Deus Verdadeiro e os Ídolos",
            texto: ` ¹ Ouvi a palavra que o Senhor vos fala a vós, ó casa de Israel.
² Assim diz o Senhor: Não aprendais o caminho dos gentios, nem vos espanteis dos sinais dos céus; porque com eles se atemorizam as nações.
³ Porque os costumes dos povos são vaidade; pois corta-se do bosque um madeiro, obra das mãos do artífice, feita com machado;
⁴ Com prata e com ouro o enfeitam, com pregos e com martelos o firmam, para que não se mova.
⁵ São como a palmeira, obra torneada, porém não podem falar; certamente são levados, porquanto não podem andar. Não tenhais receio deles, pois não podem fazer mal, nem tampouco têm poder de fazer bem.
⁶ Ninguém há semelhante a ti, ó Senhor; tu és grande, e grande o teu nome em poder.
⁷ Quem não te temeria a ti, ó Rei das nações? Pois isto só a ti pertence; porquanto entre todos os sábios das nações, e em todo o seu reino, ninguém há semelhante a ti.
⁸ Mas eles todos se embruteceram e tornaram-se loucos; ensino de vaidade é o madeiro.
⁹ Trazem prata batida de Társis e ouro de Ufaz, trabalho do artífice, e das mãos do fundidor; fazem suas roupas de azul e púrpura; obra de peritos são todos eles.
¹⁰ Mas o Senhor Deus é a verdade; ele mesmo é o Deus vivo e o Rei eterno; ao seu furor treme a terra, e as nações não podem suportar a sua indignação.
¹¹ Assim lhes direis: Os deuses que não fizeram os céus e a terra desaparecerão da terra e de debaixo deste céu.
¹² Ele fez a terra com o seu poder; ele estabeleceu o mundo com a sua sabedoria, e com a sua inteligência estendeu os céus.
¹³ Fazendo ele soar a sua voz, logo há rumor de águas no céu, e faz subir os vapores da extremidade da terra; faz os relâmpagos para a chuva, e dos seus tesouros faz sair o vento.
¹⁴ Todo o homem é embrutecido no seu conhecimento; envergonha-se todo o fundidor da sua imagem de escultura; porque sua imagem fundida é mentira, e nelas não há espírito.
¹⁵ Vaidade são, obra de enganos: no tempo da sua visitação virão a perecer.
¹⁶ Não é semelhante a estes aquele que é a porção de Jacó; porque ele é o que formou tudo, e Israel é a vara da sua herança: Senhor dos Exércitos é o seu nome.
¹⁷ Ajunta da terra a tua mercadoria, ó tu que habitas em lugar sitiado.
¹⁸ Porque assim diz o Senhor: Eis que desta vez arrojarei como se fora com uma funda aos moradores da terra, e os angustiarei, para que venham a achá-lo, dizendo:
¹⁹ Ai de mim por causa do meu quebrantamento! A minha chaga me causa grande dor; e eu havia dito: Certamente isto é enfermidade que eu poderei suportar.
²⁰ A minha tenda está destruída, e todas as minhas cordas se romperam; os meus filhos foram-se de mim, e não existem; ninguém há mais que estenda a minha tenda, nem que levante as minhas cortinas,
²¹ Porque os pastores se embruteceram, e não buscaram ao Senhor; por isso não prosperaram, e todos os seus rebanhos se espalharam.
²² Eis que vem uma voz de rumor, grande tremor da terra do norte, para fazer das cidades de Judá uma assolação, uma morada de chacais.
²³ Eu sei, ó Senhor, que não é do homem o seu caminho; nem do homem que caminha o dirigir os seus passos.
²⁴ Castiga-me, ó Senhor, porém com juízo, não na tua ira, para que não me reduzas a nada.
²⁵ Derrama a tua indignação sobre os gentios que não te conhecem, e sobre as gerações que não invocam o teu nome; porque devoraram a Jacó, e devoraram-no e consumiram-no, e assolaram a sua morada.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "A que são comparados os ídolos das nações no verso 5?",
                        opcoes: [
                            { numero: 1, texto: "A pedras pesadas", correta: false },
                            { numero: 2, texto: "A palmeiras trabalhadas (espantalhos)", correta: true },
                            { numero: 3, texto: "A nuvens sem chuva", correta: false },
                            { numero: 4, texto: "A sombras da noite", correta: false }
                        ],
                        explicacao: "Jeremias 10:5 - São como a palmeira, obra torneada, mas não podem falar; necessitam de quem os leve.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontece quando o Senhor faz ouvir a sua voz e há estrondo de águas no céu?",
                        opcoes: [
                            { numero: 1, texto: "Ele faz subir os vapores das extremidades da terra", correta: true },
                            { numero: 2, texto: "O sol se escurece", correta: false },
                            { numero: 3, texto: "As montanhas se movem", correta: false },
                            { numero: 4, texto: "O povo cai de joelhos", correta: false }
                        ],
                        explicacao: "Jeremias 10:13 - Fazendo ele ouvir a sua voz, grande estrondo de águas há nos céus, e faz subir os vapores da extremidade da terra.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o profeta reconhece sobre o caminho do homem no verso 23?",
                        opcoes: [
                            { numero: 1, texto: "Que o homem é livre para escolher", correta: false },
                            { numero: 2, texto: "Que não é do homem o seu caminho, nem do que caminha o dirigir os seus passos", correta: true },
                            { numero: 3, texto: "Que o homem sempre acerta", correta: false },
                            { numero: 4, texto: "Que o caminho é fácil", correta: false }
                        ],
                        explicacao: "Jeremias 10:23 - Eu sei, ó Senhor, que não é do homem o seu caminho; nem do homem que caminha o dirigir os seus passos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        11: {
            titulo: "A Aliança Quebrada",
            texto: ` ¹ A palavra que veio a Jeremias, da parte do Senhor, dizendo:
² Ouvi as palavras desta aliança, e falai aos homens de Judá, e aos habitantes de Jerusalém.
³ Dize-lhes pois: Assim diz o Senhor Deus de Israel: Maldito o homem que não escutar as palavras desta aliança,
⁴ Que ordenei a vossos pais no dia em que os tirei da terra do Egito, da fornalha de ferro, dizendo: Dai ouvidos à minha voz, e fazei conforme a tudo quanto vos mando; e vós sereis o meu povo, e eu serei o vosso Deus.
⁵ Para que confirme o juramento que fiz a vossos pais de dar-lhes uma terra que manasse leite e mel, como se vê neste dia. Então eu respondi, e disse: Amém, ó Senhor.
⁶ E disse-me o Senhor: Apregoa todas estas palavras nas cidades de Judá, e nas ruas de Jerusalém, dizendo: Ouvi as palavras desta aliança, e cumpri-as.
⁷ Porque deveras adverti a vossos pais, no dia em que os tirei da terra do Egito, até ao dia de hoje, madrugando, e protestando, e dizendo: Dai ouvidos à minha voz.
⁸ Mas não ouviram, nem inclinaram os seus ouvidos, antes andaram cada um conforme o propósito do seu coração malvado; por isso trouxe sobre eles todas as palavras desta aliança que lhes mandei que cumprissem, porém não cumpriram.
⁹ Disse-me mais o Senhor: Uma conspiração se achou entre os homens de Judá, entre os habitantes de Jerusalém.
¹⁰ Tornaram às maldades de seus primeiros pais, que não quiseram ouvir as minhas palavras; e eles andaram após outros deuses para os servir; a casa de Israel e a casa de Judá quebraram a minha aliança, que tinha feito com seus pais.
¹¹ Portanto assim diz o Senhor: Eis que trarei mal sobre eles, de que não poderão escapar; e clamarão a mim, mas eu não os ouvirei.
¹² Então irão as cidades de Judá e os habitantes de Jerusalém e clamarão aos deuses a quem eles queimaram incenso; estes, porém, de nenhum modo os livrarão no tempo do seu mal.
¹³ Porque, segundo o número das tuas cidades, são os teus deuses, ó Judá! E, segundo o número das ruas de Jerusalém, levantastes altares à impudência, altares para queimardes incenso a Baal.
¹⁴ Tu, pois, não ores por este povo, nem levantes por ele clamor nem oração; porque não os ouvirei no tempo em que eles clamarem a mim, por causa do seu mal.
¹⁵ Que direito tem a minha amada na minha casa, visto que com muitos tem cometido grande lascívia? Crês que os sacrifícios e as carnes santificadas poderão afastar de ti o mal? Então saltarias de prazer.
¹⁶ O Senhor chamou o teu nome de oliveira verde, formosa por seus deliciosos frutos, mas agora à voz de um grande tumulto acendeu fogo ao redor dela e se quebraram os seus ramos.
¹⁷ Porque o Senhor dos Exércitos, que te plantou, pronunciou contra ti o mal, pela maldade da casa de Israel e da casa de Judá, que para si mesma fizeram, pois me provocaram à ira, queimando incenso a Baal.
¹⁸ E o Senhor me fez saber, e assim o soube; então me fizeste ver as suas ações.
¹⁹ E eu era como um cordeiro, como um boi que levam à matança; porque não sabia que maquinavam propósitos contra mim, dizendo: Destruamos a árvore com o seu fruto, e cortemo-lo da terra dos viventes, e não haja mais memória do seu nome.
²⁰ Mas, ó Senhor dos Exércitos, justo Juiz, que provas as entranhas e o coração, veja eu a tua vingança sobre eles; pois a ti descobri a minha causa.
²¹ Portanto, assim diz o Senhor acerca dos homens de Anatote, que buscam a tua vida, dizendo: Não profetizes no nome do Senhor, para que não morras às nossas mãos.
²² Portanto, assim diz o Senhor dos Exércitos: Eis que eu os castigarei; os jovens morrerão à espada, os seus filhos e suas filhas morrerão de fome.
²³ E não haverá deles um remanescente, porque farei vir o mal sobre os homens de Anatote, no ano da sua visitação.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor mandou Jeremias dizer aos homens de Judá sobre a aliança?",
                        opcoes: [
                            { numero: 1, texto: "Maldito o homem que não ouvir as palavras desta aliança", correta: true },
                            { numero: 2, texto: "A aliança está suspensa", correta: false },
                            { numero: 3, texto: "A aliança agora é com o Egito", correta: false },
                            { numero: 4, texto: "Que a aliança não tinha importância", correta: false }
                        ],
                        explicacao: "Jeremias 11:3 - E dir-lhes-ás: Assim diz o Senhor Deus de Israel: Maldito o homem que não ouvir as palavras desta aliança.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Segundo o verso 13, qual era a quantidade de deuses em Judá?",
                        opcoes: [
                            { numero: 1, texto: "Apenas um", correta: false },
                            { numero: 2, texto: "O mesmo número que as suas cidades", correta: true },
                            { numero: 3, texto: "Doze, um para cada tribo", correta: false },
                            { numero: 4, texto: "Nenhum", correta: false }
                        ],
                        explicacao: "Jeremias 11:13 - Porque, segundo o número das tuas cidades, são os teus deuses, ó Judá.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que os homens de Anatote queriam fazer com Jeremias?",
                        opcoes: [
                            { numero: 1, texto: "Tirá-lo da terra dos viventes para que seu nome não fosse lembrado", correta: true },
                            { numero: 2, texto: "Torná-lo rei", correta: false },
                            { numero: 3, texto: "Dar-lhe riquezas", correta: false },
                            { numero: 4, texto: "Enviá-lo para a Babilônia", correta: false }
                        ],
                        explicacao: "Jeremias 11:19 - ...cortemo-lo da terra dos viventes, e não haja mais memória do seu nome.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        12: {
            titulo: "A Queixa de Jeremias",
            texto: `¹ Justo serias, ó Senhor, ainda que eu entrasse contigo num pleito; contudo falarei contigo dos teus juízos. Por que prospera o caminho dos ímpios, e vivem em paz todos os que procedem aleivosamente?
² Plantaste-os, e eles se enraizaram; crescem, dão também fruto; chegado estás à sua boca, porém longe de suas entranhas.
³ Mas tu, ó Senhor, me conheces, tu me vês, e provas o meu coração para contigo; arranca-os como as ovelhas para o matadouro, e dedica-os para o dia da matança.
⁴ Até quando lamentará a terra, e se secará a erva de todo o campo? Pela maldade dos que habitam nela, perecem os animais e as aves; porquanto dizem: Ele não verá o nosso fim.
⁵ Se te fatigas correndo com homens que vão a pé, como poderás competir com os cavalos? Se tão somente numa terra de paz estás confiado, como farás na enchente do Jordão?
⁶ Porque até os teus irmãos, e a casa de teu pai, eles próprios procedem deslealmente contigo; eles mesmos clamam após ti em altas vozes: Não te fies neles, ainda que te digam coisas boas.
⁷ Desamparei a minha casa, abandonei a minha herança; entreguei a amada da minha alma na mão de seus inimigos.
⁸ Tornou-se a minha herança para mim como leão numa floresta; levantou a sua voz contra mim, por isso eu a odiei.
⁹ A minha herança é para mim ave de rapina de várias cores. Andam as aves de rapina contra ela em redor. Vinde, pois, ajuntai todos os animais do campo, trazei-os para a devorarem.
¹⁰ Muitos pastores destruíram a minha vinha, pisaram o meu campo; tornaram em desolado deserto o meu campo desejado.
¹¹ Em desolação a puseram, e clama a mim na sua desolação; e toda a terra está desolada, porquanto não há ninguém que tome isso a sério.
¹² Sobre todos os lugares altos do deserto vieram destruidores; porque a espada do Senhor devora desde um extremo da terra até o outro; não há paz para nenhuma carne.
¹³ Semearam trigo, e segaram espinhos; cansaram-se, mas de nada se aproveitaram; envergonhados sereis das vossas colheitas, e por causa do ardor da ira do Senhor.
¹⁴ Assim diz o Senhor, acerca de todos os meus maus vizinhos, que tocam a minha herança, que fiz herdar ao meu povo Israel: Eis que os arrancarei da sua terra, e a casa de Judá arrancarei do meio deles.
¹⁵ E será que, depois de os haver arrancado, tornarei, e me compadecerei deles, e os farei voltar cada um à sua herança, e cada um à sua terra.
¹⁶ E será que, se diligentemente aprenderem os caminhos do meu povo, jurando pelo meu nome: Vive o Senhor, como ensinaram o meu povo a jurar por Baal; então edificar-se-ão no meio do meu povo.
¹⁷ Mas se não quiserem ouvir, totalmente arrancarei a tal nação, e a farei perecer, diz o Senhor. `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual pergunta Jeremias faz a Deus sobre o caminho dos ímpios?",
                        opcoes: [
                            { numero: 1, texto: "Por que eles são tão pobres?", correta: false },
                            { numero: 2, texto: "Por que prospera o caminho dos ímpios?", correta: true },
                            { numero: 3, texto: "Por que eles não falam?", correta: false },
                            { numero: 4, texto: "Quando eles morrerão?", correta: false }
                        ],
                        explicacao: "Jeremias 12:1 - Por que prospera o caminho dos ímpios, e vivem em paz todos os que procedem perfidamente?",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Se Jeremias se cansava correndo com homens a pé, como ele faria o quê?",
                        opcoes: [
                            { numero: 1, texto: "Como competiria com cavalos?", correta: true },
                            { numero: 2, texto: "Como atravessaria o mar?", correta: false },
                            { numero: 3, texto: "Como subiria montanhas?", correta: false },
                            { numero: 4, texto: "Como fugiria dos leões?", correta: false }
                        ],
                        explicacao: "Jeremias 12:5 - Se te fadigaste correndo com homens a pé, como poderás competir com cavalos?",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor faria com Seus 'maus vizinhos' se eles ensinassem Seu povo a jurar por Baal?",
                        opcoes: [
                            { numero: 1, texto: "Daria mais terras a eles", correta: false },
                            { numero: 2, texto: "Os arrancaria da sua terra", correta: true },
                            { numero: 3, texto: "Os tornaria sacerdotes", correta: false },
                            { numero: 4, texto: "Iria ignorá-los", correta: false }
                        ],
                        explicacao: "Jeremias 12:14 - Assim diz o Senhor acerca de todos os meus maus vizinhos... eis que os arrancarei da sua terra.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        13: {
            titulo: "O Cinto de Linho",
            texto: `¹ Assim me disse o Senhor: Vai, e compra um cinto de linho e põe-no sobre os teus lombos, mas não o coloques na água.
² E comprei o cinto, conforme a palavra do Senhor, e o pus sobre os meus lombos.
³ Então me veio a palavra do Senhor pela segunda vez, dizendo:
⁴ Toma o cinto que compraste, e que trazes sobre os teus lombos, e levanta-te; vai ao Eufrates, e esconde-o ali na fenda de uma rocha.
⁵ E fui, e escondi-o junto ao Eufrates, como o Senhor me havia ordenado.
⁶ Sucedeu, ao final de muitos dias, que me disse o Senhor: Levanta-te, vai ao Eufrates, e toma dali o cinto que te ordenei que o escondesses ali.
⁷ E fui ao Eufrates, e cavei, e tomei o cinto do lugar onde o havia escondido; e eis que o cinto tinha apodrecido, e para nada prestava.
⁸ Então veio a mim a palavra do Senhor, dizendo:
⁹ Assim diz o Senhor: Do mesmo modo farei apodrecer a soberba de Judá, e a muita soberba de Jerusalém.
¹⁰ Este povo maligno, que recusa ouvir as minhas palavras, que caminha segundo a dureza do seu coração, e anda após deuses alheios, para servi-los, e inclinar-se diante deles, será tal como este cinto, que para nada presta.
¹¹ Porque, como o cinto está pegado aos lombos do homem, assim eu liguei a mim toda a casa de Israel, e toda a casa de Judá, diz o Senhor, para me serem por povo, e por nome, e por louvor, e por glória; mas não deram ouvidos.
¹² Portanto, dize-lhes esta palavra: Assim diz o Senhor Deus de Israel: Todo o odre se encherá de vinho; e dir-te-ão: Porventura não sabemos nós muito bem que todo o odre se encherá de vinho?
¹³ Mas tu dize-lhes: Assim diz o Senhor: Eis que eu encherei de embriaguez a todos os habitantes desta terra, e aos reis da estirpe de Davi, que estão assentados sobre o seu trono, e aos sacerdotes, e aos profetas, e a todos os habitantes de Jerusalém.
¹⁴ E lhes farei em pedaços atirando uns contra os outros, e juntamente os pais com os filhos, diz o Senhor; não perdoarei, nem pouparei, nem terei deles compaixão, para que não os destrua.
¹⁵ Escutai, e inclinai os ouvidos; não vos ensoberbeçais; porque o Senhor falou.
¹⁶ Dai glória ao Senhor vosso Deus, antes que venha a escuridão e antes que tropecem vossos pés nos montes tenebrosos; antes que, esperando vós luz, ele a mude em sombra de morte, e a reduza à escuridão.
¹⁷ E, se isto não ouvirdes, a minha alma chorará em lugares ocultos, por causa da vossa soberba; e amargamente chorarão os meus olhos, e se desfarão em lágrimas, porquanto o rebanho do Senhor foi levado cativo.
¹⁸ Dize ao rei e à rainha: Humilhai-vos, e assentai-vos no chão; porque já caiu todo o ornato de vossas cabeças, a coroa da vossa glória.
¹⁹ As cidades do sul estão fechadas, e ninguém há que as abra; todo o Judá foi levado cativo, sim, inteiramente cativo.
²⁰ Levantai os vossos olhos, e vede os que vêm do norte; onde está o rebanho que se te deu, o rebanho da tua glória?
²¹ Que dirás, quando ele te castigar porque os ensinaste a serem capitães, e chefe sobre ti? Porventura não te tomarão as dores, como à mulher que está de parto?
²² Quando, pois, disseres no teu coração: Por que me sobrevieram estas coisas? Pela multidão das tuas maldades se descobriram as tuas saias, e os teus calcanhares sofrem violência.
²³ Porventura pode o etíope mudar a sua pele, ou o leopardo as suas manchas? Então podereis vós fazer o bem, sendo ensinados a fazer o mal.
²⁴ Assim os espalharei como o restolho, que passa com o vento do deserto.
²⁵ Esta será a tua sorte, a porção que te será medida por mim, diz o Senhor; pois te esqueceste de mim, e confiaste em mentiras.
²⁶ Assim também eu levantarei as tuas saias sobre o teu rosto; e aparecerá a tua ignomínia.
²⁷ Já vi as tuas abominações, e os teus adultérios, e os teus rinchos, e a enormidade da tua prostituição sobre os outeiros no campo; ai de ti, Jerusalém! Até quando ainda não te purificarás?
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor mandou Jeremias fazer com um cinto de linho para simbolizar Judá?",
                        opcoes: [
                            { numero: 1, texto: "Queimá-lo no altar", correta: false },
                            { numero: 2, texto: "Escondê-lo na fenda de uma rocha junto ao Eufrates", correta: true },
                            { numero: 3, texto: "Dá-lo de presente ao rei", correta: false },
                            { numero: 4, texto: "Lavá-lo sete vezes no Jordão", correta: false }
                        ],
                        explicacao: "Jeremias 13:4 - Toma o cinto... e levanta-te, vai ao Eufrates, e esconde-o ali na fenda de uma rocha.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Pode o etíope mudar a sua pele, ou o leopardo as suas manchas?",
                        opcoes: [
                            { numero: 1, texto: "Sim, com o tempo", correta: false },
                            { numero: 2, texto: "Não, e assim o povo acostumado a fazer o mal não pode fazer o bem", correta: true },
                            { numero: 3, texto: "Somente se Deus quiser", correta: false },
                            { numero: 4, texto: "Sim, se eles se arrependerem", correta: false }
                        ],
                        explicacao: "Jeremias 13:23 - Pode o etíope mudar a sua pele, ou o leopardo as suas manchas? Nesse caso também vós podereis fazer o bem, sendo ensinados a fazer o mal.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceria com o cinto após muitos dias escondido?",
                        opcoes: [
                            { numero: 1, texto: "Tornou-se mais brilhante", correta: false },
                            { numero: 2, texto: "Tinha apodrecido e para nada prestava", correta: true },
                            { numero: 3, texto: "Tinha sido roubado", correta: false },
                            { numero: 4, texto: "Transformou-se em ouro", correta: false }
                        ],
                        explicacao: "Jeremias 13:7 - ...e eis que o cinto tinha apodrecido, e para nada prestava.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        14: {
            titulo: "A Seca e a Falsa Profecia",
            texto: `¹ A palavra do Senhor, que veio a Jeremias, a respeito da grande seca.
² Anda chorando Judá, e as suas portas estão enfraquecidas; andam de luto até ao chão, e o clamor de Jerusalém vai subindo.
³ E os seus mais ilustres enviam os seus pequenos a buscar água; vão às cisternas, e não acham água; voltam com os seus cântaros vazios; envergonham-se e confundem-se, e cobrem as suas cabeças.
⁴ Por causa da terra que se fendeu, porque não há chuva sobre a terra, os lavradores se envergonham e cobrem as suas cabeças.
⁵ Porque até as cervas no campo têm as suas crias, e abandonam seus filhos, porquanto não há erva.
⁶ E os jumentos monteses se põem nos lugares altos, sorvem o vento como os chacais; desfalecem os seus olhos, porquanto não há erva.
⁷ Posto que as nossas maldades testificam contra nós, ó Senhor, age por amor do teu nome; porque as nossas rebeldias se multiplicaram; contra ti pecamos.
⁸ Ó esperança de Israel, e Redentor seu no tempo da angústia, por que serias como um estrangeiro na terra e como o viandante que se retira a passar a noite?
⁹ Por que serias como homem surpreendido, como poderoso que não pode livrar? Mas tu estás no meio de nós, ó Senhor, e nós somos chamados pelo teu nome; não nos desampares.
¹⁰ Assim diz o Senhor, acerca deste povo: Pois que tanto gostaram de andar errantes, e não retiveram os seus pés, por isso o Senhor não se agrada deles, mas agora se lembrará da iniquidade deles, e visitará os seus pecados.
¹¹ Disse-me mais o Senhor: Não rogues por este povo para seu bem.
¹² Quando jejuarem, não ouvirei o seu clamor, e quando oferecerem holocaustos e ofertas de alimentos, não me agradarei deles; antes eu os consumirei pela espada, e pela fome e pela peste.
¹³ Então disse eu: Ah! Senhor Deus, eis que os profetas lhes dizem: Não vereis espada, e não tereis fome; antes vos darei paz verdadeira neste lugar.
¹⁴ E disse-me o Senhor: Os profetas profetizam falsamente no meu nome; nunca os enviei, nem lhes dei ordem, nem lhes falei; visão falsa, e adivinhação, e vaidade, e o engano do seu coração é o que eles vos profetizam.
¹⁵ Portanto assim diz o Senhor acerca dos profetas que profetizam no meu nome, sem que eu os tenha mandado, e que dizem: Nem espada, nem fome haverá nesta terra: À espada e à fome, serão consumidos esses profetas.
¹⁶ E o povo a quem eles profetizam será lançado nas ruas de Jerusalém, por causa da fome e da espada; e não haverá quem os sepultem, tanto a eles, como as suas mulheres, e os seus filhos e as suas filhas; porque derramarei sobre eles a sua maldade.
¹⁷ Portanto lhes dirás esta palavra: Os meus olhos derramem lágrimas de noite e de dia, e não cessem; porque a virgem, filha do meu povo, está gravemente ferida, de chaga mui dolorosa.
¹⁸ Se eu saio ao campo, eis ali os mortos à espada, e, se entro na cidade, estão ali os debilitados pela fome; e até os profetas e os sacerdotes percorrem uma terra, que não conhecem.
¹⁹ Porventura já de todo rejeitaste a Judá? Ou repugna a tua alma a Sião? Por que nos feriste de tal modo que já não há cura para nós? Aguardamos a paz, e não aparece o bem; e o tempo da cura, e eis aqui turbação.
²⁰ Ah! Senhor! Conhecemos a nossa impiedade e a maldade de nossos pais; porque pecamos contra ti.
²¹ Não nos rejeites por amor do teu nome; não desonres o trono da tua glória; lembra-te, e não anules a tua aliança conosco.
²² Porventura há, entre as vaidades dos gentios, alguém que faça chover? Ou podem os céus dar chuvas? Não és tu, ó Senhor nosso Deus? Portanto em ti esperamos, pois tu fazes todas estas coisas.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que aconteceu com os nobres e seus servos durante a seca descrita?",
                        opcoes: [
                            { numero: 1, texto: "Encontraram águas no deserto", correta: false },
                            { numero: 2, texto: "Voltaram com seus vasos vazios e envergonhados", correta: true },
                            { numero: 3, texto: "Compraram água do Egito", correta: false },
                            { numero: 4, texto: "Cavaram poços profundos", correta: false }
                        ],
                        explicacao: "Jeremias 14:3 - E os seus nobres enviaram os seus pequenos a buscar água... voltaram com os seus vasos vazios.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor diz sobre os profetas que profetizam 'paz e não haverá fome'?",
                        opcoes: [
                            { numero: 1, texto: "Que eles serão recompensados", correta: false },
                            { numero: 2, texto: "Pela espada e pela fome serão consumidos esses profetas", correta: true },
                            { numero: 3, texto: "Que eles devem ser ouvidos", correta: false },
                            { numero: 4, texto: "Que eles estão apenas enganados", correta: false }
                        ],
                        explicacao: "Jeremias 14:15 - ...pela espada e pela fome serão consumidos esses profetas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por amor de que Jeremias pede que o Senhor não os desampare?",
                        opcoes: [
                            { numero: 1, texto: "Por amor das crianças", correta: false },
                            { numero: 2, texto: "Por amor do Seu nome", correta: true },
                            { numero: 3, texto: "Por amor do ouro do templo", correta: false },
                            { numero: 4, texto: "Por amor dos sacrifícios", correta: false }
                        ],
                        explicacao: "Jeremias 14:21 - Não nos rejeites por amor do teu nome; não aviltes o trono da tua glória.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        15: {
            titulo: "O Destino Inevitável",
            texto: `¹ Disse-me, porém, o Senhor: Ainda que Moisés e Samuel se pusessem diante de mim, não estaria a minha alma com este povo; lança-os de diante da minha face, e saiam.
² E será que, quando te disserem: Para onde iremos? Dir-lhes-ás: Assim diz o Senhor: Os que para a morte, para a morte, e os que para a espada, para a espada; e os que para a fome, para a fome; e os que para o cativeiro, para o cativeiro.
³ Porque visitá-los-ei com quatro gêneros de males, diz o Senhor: com espada para matar, e com cães, para os arrastarem, e com aves dos céus, e com animais da terra, para os devorarem e destruírem.
⁴ Entregá-los-ei ao desterro em todos os reinos da terra; por causa de Manassés, filho de Ezequias, rei de Judá, e por tudo quanto fez em Jerusalém.
⁵ Porque quem se compadeceria de ti, ó Jerusalém? Ou quem se entristeceria por ti? Ou quem se desviaria a perguntar pela tua paz?
⁶ Tu me deixaste, diz o Senhor, e tornaste-te para trás; por isso estenderei a minha mão contra ti, e te destruirei; já estou cansado de me arrepender.
⁷ E padejá-los-ei com a pá nas portas da terra; já desfilhei, e destruí o meu povo; não voltaram dos seus caminhos.
⁸ As suas viúvas mais se multiplicaram do que a areia dos mares; trouxe ao meio-dia um destruidor sobre a mãe dos jovens; fiz que caísse de repente sobre ela, e enchesse a cidade de terrores.
⁹ A que dava à luz sete se enfraqueceu; expirou a sua alma; pôs-se-lhe o sol sendo ainda de dia, confundiu-se, e envergonhou-se; e os que ficarem dela entregarei à espada, diante dos seus inimigos, diz o Senhor.
¹⁰ Ai de mim, minha mãe, por que me deste à luz homem de rixa e homem de contendas para toda a terra? Nunca lhes emprestei com usura, nem eles me emprestaram com usura, todavia cada um deles me amaldiçoa.
¹¹ Disse o Senhor: Decerto que o teu remanescente será para o bem; decerto, no tempo da calamidade, e no tempo da angústia, farei que o inimigo te dirija súplicas.
¹² Pode alguém quebrar o ferro, o ferro do norte, ou o aço?
¹³ As tuas riquezas e os teus tesouros entregarei sem preço ao saque; e isso por todos os teus pecados, mesmo em todos os teus limites.
¹⁴ E te farei passar aos teus inimigos numa terra que não conheces; porque o fogo se acendeu em minha ira, e sobre vós arderá;
¹⁵ Tu, ó Senhor, o sabes; lembra-te de mim, e visita-me, e vinga-me dos meus perseguidores; não me arrebates por tua longanimidade; sabe que por amor de ti tenho sofrido afronta.
¹⁶ Achando-se as tuas palavras, logo as comi, e a tua palavra foi para mim o gozo e alegria do meu coração; porque pelo teu nome sou chamado, ó Senhor Deus dos Exércitos.
¹⁷ Nunca me assentei na assembleia dos zombadores, nem me regozijei; por causa da tua mão me assentei solitário; pois me encheste de indignação.
¹⁸ Por que dura a minha dor continuamente, e a minha ferida me dói, e já não admite cura? Serias tu para mim como coisa mentirosa e como águas inconstantes?
¹⁹ Portanto assim diz o Senhor: Se tu voltares, então te trarei, e estarás diante de mim; e se apartares o precioso do vil, serás como a minha boca; tornem-se eles para ti, mas não voltes tu para eles.
²⁰ E eu te porei contra este povo como forte muro de bronze; e pelejarão contra ti, mas não prevalecerão contra ti; porque eu sou contigo para te guardar, para te livrar deles, diz o Senhor.
²¹ E arrebatar-te-ei da mão dos malignos, e livrar-te-ei da mão dos fortes.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Mesmo que estes dois homens se pusessem diante de Deus, Ele não se voltaria para o povo. Quem são?",
                        opcoes: [
                            { numero: 1, texto: "Abraão e Isaque", correta: false },
                            { numero: 2, texto: "Moisés e Samuel", correta: true },
                            { numero: 3, texto: "Davi e Salomão", correta: false },
                            { numero: 4, texto: "Elias e Eliseu", correta: false }
                        ],
                        explicacao: "Jeremias 15:1 - Ainda que Moisés e Samuel se pusessem diante de mim, não estaria a minha alma com este povo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jeremias fez com as palavras de Deus quando as achou?",
                        opcoes: [
                            { numero: 1, texto: "Escreveu-as na areia", correta: false },
                            { numero: 2, texto: "Escondeu-as do povo", correta: false },
                            { numero: 3, texto: "Comeu-as, e foram gozo e alegria ao coração", correta: true },
                            { numero: 4, texto: "Queimou-as no fogo", correta: false }
                        ],
                        explicacao: "Jeremias 15:16 - Achando-se as tuas palavras, logo as comi, e a tua palavra foi para mim o gozo e alegria do meu coração.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor promete fazer de Jeremias diante do povo rebelde?",
                        opcoes: [
                            { numero: 1, texto: "Um muro de bronze fortificado", correta: true },
                            { numero: 2, texto: "Um rei poderoso", correta: false },
                            { numero: 3, texto: "Um servo humilde", correta: false },
                            { numero: 4, texto: "Um fugitivo no deserto", correta: false }
                        ],
                        explicacao: "Jeremias 15:20 - E pôr-te-ei contra este povo como forte muro de bronze; e pelejarão contra ti, mas não prevalecerão.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        16: {
            titulo: "Sinais de Juízo",
            texto: `¹ E veio a mim a palavra do Senhor, dizendo:
² Não tomarás para ti mulher, nem terás filhos nem filhas neste lugar.
³ Porque assim diz o Senhor, acerca dos filhos e das filhas que nascerem neste lugar, acerca de suas mães, que os tiverem, e de seus pais que os gerarem nesta terra:
⁴ Morrerão de enfermidades dolorosas, e não serão pranteados nem sepultados; servirão de esterco sobre a face da terra; e pela espada e pela fome serão consumidos, e os seus cadáveres servirão de mantimento para as aves do céu e para os animais da terra.
⁵ Porque assim diz o Senhor: Não entres na casa do luto, nem vás a lamentar, nem te compadeças deles; porque deste povo, diz o Senhor, retirei a minha paz, benignidade e misericórdia.
⁶ E morrerão grandes e pequenos nesta terra, e não serão sepultados, e não os prantearão, nem se farão por eles incisões, nem por eles se raparão os cabelos.
⁷ E não se partirá pão para consolá-los por causa de seus mortos; nem lhes darão a beber do copo de consolação, pelo pai ou pela mãe de alguém.
⁸ Nem entres na casa do banquete, para te assentares com eles a comer e a beber.
⁹ Porque assim diz o Senhor dos Exércitos, o Deus de Israel: Eis que farei cessar, neste lugar, perante os vossos olhos, e em vossos dias, a voz de gozo e a voz de alegria, a voz do esposo e a voz da esposa.
¹⁰ E será que, quando anunciares a este povo todas estas palavras, e eles te disserem: Por que pronuncia o Senhor sobre nós todo este grande mal? E qual é a nossa iniquidade, e qual é o nosso pecado, que cometemos contra o Senhor nosso Deus?
¹¹ Então lhes dirás: Porquanto vossos pais me deixaram, diz o Senhor, e se foram após outros deuses, e os serviram, e se inclinaram diante deles, e a mim me deixaram, e a minha lei não a guardaram.
¹² E vós fizestes pior do que vossos pais; porque, eis que cada um de vós anda segundo o propósito do seu mau coração, para não me dar ouvidos a mim.
¹³ Portanto lançar-vos-ei fora desta terra, para uma terra que não conhecestes, nem vós nem vossos pais; e ali servireis a deuses alheios de dia e de noite, porque não usarei de misericórdia convosco.
¹⁴ Portanto, eis que dias vêm, diz o Senhor, em que nunca mais se dirá: Vive o Senhor, que fez subir os filhos de Israel da terra do Egito.
¹⁵ Mas: Vive o Senhor, que fez subir os filhos de Israel da terra do norte, e de todas as terras para onde os tinha lançado; porque eu os farei voltar à sua terra, a qual dei a seus pais.
¹⁶ Eis que mandarei muitos pescadores, diz o Senhor, os quais os pescarão; e depois enviarei muitos caçadores, os quais os caçarão de sobre todo o monte, e de sobre todo o outeiro, e até das fendas das rochas.
¹⁷ Porque os meus olhos estão sobre todos os seus caminhos; não se escondem da minha face, nem a sua maldade se encobre aos meus olhos.
¹⁸ E primeiramente pagarei em dobro a sua maldade e o seu pecado, porque profanaram a minha terra com os cadáveres das suas coisas detestáveis, e das suas abominações encheram a minha herança.
¹⁹ Ó Senhor, fortaleza minha, e força minha, e refúgio meu no dia da angústia; a ti virão os gentios desde os fins da terra, e dirão: Nossos pais herdaram só mentiras, e vaidade, em que não havia proveito.
²⁰ Porventura fará um homem deuses para si, que contudo não são deuses?
²¹ Portanto, eis que lhes farei conhecer, desta vez lhes farei conhecer a minha mão e o meu poder; e saberão que o meu nome é o Senhor.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor proibiu Jeremias de fazer neste capítulo como sinal?",
                        opcoes: [
                            { numero: 1, texto: "De pregar nas praças", correta: false },
                            { numero: 2, texto: "De casar e ter filhos e filhas naquele lugar", correta: true },
                            { numero: 3, texto: "De vestir linho", correta: false },
                            { numero: 4, texto: "De beber vinho", correta: false }
                        ],
                        explicacao: "Jeremias 16:2 - Não tomarás para ti mulher, nem terás filhos nem filhas neste lugar.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "De onde o Senhor diz que não se diria mais que Ele tirou os filhos de Israel?",
                        opcoes: [
                            { numero: 1, texto: "Da terra de Canaã", correta: false },
                            { numero: 2, texto: "Do deserto", correta: false },
                            { numero: 3, texto: "Da terra do Egito", correta: true },
                            { numero: 4, texto: "Das mãos de Saul", correta: false }
                        ],
                        explicacao: "Jeremias 16:14 - Portanto, eis que vêm dias, diz o Senhor, em que nunca mais se dirá: Vive o Senhor, que tirou os filhos de Israel da terra do Egito.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem o Senhor enviaria primeiro para pescar e caçar o Seu povo para o juízo?",
                        opcoes: [
                            { numero: 1, texto: "Anjos destruidores", correta: false },
                            { numero: 2, texto: "Muitos pescadores e muitos caçadores", correta: true },
                            { numero: 3, texto: "Feras do campo", correta: false },
                            { numero: 4, texto: "Gafanhotos e pestes", correta: false }
                        ],
                        explicacao: "Jeremias 16:16 - Eis que mandarei muitos pescadores... e depois mandarei muitos caçadores, os quais os caçarão de todo o monte.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        17: {
            titulo: "Confiança no Homem vs. Confiança em Deus",
            texto: `¹ O pecado de Judá está escrito com um ponteiro de ferro, com ponta de diamante, gravado na tábua do seu coração e nas pontas dos vossos altares;
² Como também seus filhos se lembram dos seus altares, e dos seus bosques, junto às árvores frondosas, sobre os altos outeiros.
³ Ó meu monte no campo! A tua riqueza e todos os teus tesouros darei por presa, como também os teus altos, por causa do pecado, em todos os teus termos.
⁴ Assim por ti mesmo te privarás da tua herança que te dei, e far-te-ei servir os teus inimigos, na terra que não conheces; porque o fogo que acendeste na minha ira arderá para sempre.
⁵ Assim diz o Senhor: Maldito o homem que confia no homem, e faz da carne o seu braço, e aparta o seu coração do Senhor!
⁶ Porque será como a tamargueira no deserto, e não verá quando vem o bem; antes morará nos lugares secos do deserto, na terra salgada e inabitável.
⁷ Bendito o homem que confia no Senhor, e cuja confiança é o Senhor.
⁸ Porque será como a árvore plantada junto às águas, que estende as suas raízes para o ribeiro, e não receia quando vem o calor, mas a sua folha fica verde; e no ano de sequidão não se preocupa, nem deixa de dar fruto.
⁹ Enganoso é o coração, mais do que todas as coisas, e perverso; quem o conhecerá?
¹⁰ Eu, o Senhor, esquadrinho o coração e provo as entranhas; e isto para dar a cada um segundo os seus caminhos e segundo o fruto das suas ações.
¹¹ Como a perdiz, que choca ovos que não pôs, assim é aquele que ajunta riquezas, mas não retamente; no meio de seus dias as deixará, e no seu fim será um insensato.
¹² Um trono de glória, posto bem alto desde o princípio, é o lugar do nosso santuário.
¹³ Ó Senhor, esperança de Israel, todos aqueles que te deixam serão envergonhados; os que se apartam de mim serão escritos sobre a terra; porque abandonam o Senhor, a fonte das águas vivas.
¹⁴ Cura-me, Senhor, e sararei; salva-me, e serei salvo; porque tu és o meu louvor.
¹⁵ Eis que eles me dizem: Onde está a palavra do Senhor? Venha agora.
¹⁶ Porém eu não me apressei em ser o pastor seguindo-te; nem tampouco desejei o dia da aflição, tu o sabes; o que saiu dos meus lábios está diante de tua face.
¹⁷ Não me sejas por espanto; meu refúgio és tu no dia do mal.
¹⁸ Envergonhem-se os que me perseguem, e não me envergonhe eu; assombrem-se eles, e não me assombre eu; traze sobre eles o dia do mal, e destrói-os com dobrada destruição.
¹⁹ Assim me disse o Senhor: Vai, e põe-te à porta dos filhos do povo, pela qual entram os reis de Judá, e pela qual saem; como também em todas as portas de Jerusalém.
²⁰ E dize-lhes: Ouvi a palavra do Senhor, vós, reis de Judá e todo o Judá, e todos os moradores de Jerusalém que entrais por estas portas.
²¹ Assim diz o Senhor: Guardai as vossas almas, e não tragais cargas no dia de sábado, nem as introduzais pelas portas de Jerusalém;
²² Nem tireis cargas de vossas casas no dia de sábado, nem façais obra alguma; antes santificai o dia de sábado, como eu ordenei a vossos pais.
²³ Mas não escutaram, nem inclinaram os seus ouvidos; antes endureceram a sua cerviz, para não ouvirem, e para não receberem correção.
²⁴ Mas se vós diligentemente me ouvirdes, diz o Senhor, não introduzindo cargas pelas portas desta cidade no dia de sábado, e santificardes o dia de sábado, não fazendo nele obra alguma,
²⁵ Então entrarão pelas portas desta cidade reis e príncipes, que se assentem sobre o trono de Davi, andando em carros e em cavalos; e eles e seus príncipes, os homens de Judá, e os moradores de Jerusalém; e esta cidade será habitada para sempre.
²⁶ E virão das cidades de Judá, e dos arredores de Jerusalém, e da terra de Benjamim, e das planícies, e das montanhas, e do sul, trazendo holocaustos, e sacrifícios, e ofertas de alimentos, e incenso, trazendo também sacrifícios de louvores à casa do Senhor.
²⁷ Mas, se não me ouvirdes, para santificardes o dia de sábado, e para não trazerdes carga alguma, quando entrardes pelas portas de Jerusalém no dia de sábado, então acenderei fogo nas suas portas, o qual consumirá os palácios de Jerusalém, e não se apagará.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Maldito o homem que confia no homem e faz de quem a sua força?",
                        opcoes: [
                            { numero: 1, texto: "Da sua riqueza", correta: false },
                            { numero: 2, texto: "Da carne o seu braço", correta: true },
                            { numero: 3, texto: "Dos seus cavalos", correta: false },
                            { numero: 4, texto: "Dos seus ídolos", correta: false }
                        ],
                        explicacao: "Jeremias 17:5 - Maldito o homem que confia no homem, e faz da carne o seu braço, e aparta o seu coração do Senhor!",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como é descrito o coração do homem no verso 9?",
                        opcoes: [
                            { numero: 1, texto: "Puro e santo", correta: false },
                            { numero: 2, texto: "Enganoso e desesperadamente corrupto", correta: true },
                            { numero: 3, texto: "Sábio e prudente", correta: false },
                            { numero: 4, texto: "Firme como a rocha", correta: false }
                        ],
                        explicacao: "Jeremias 17:9 - Enganoso é o coração, mais do que todas as coisas, e desesperadamente corrupto; quem o conhecerá?",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor ordena sobre o dia de sábado nas portas de Jerusalém?",
                        opcoes: [
                            { numero: 1, texto: "Que não carreguem cargas nem saiam das portas", correta: true },
                            { numero: 2, texto: "Que façam grandes feiras", correta: false },
                            { numero: 3, texto: "Que fechem as portas para sempre", correta: false },
                            { numero: 4, texto: "Que lutem contra os inimigos", correta: false }
                        ],
                        explicacao: "Jeremias 17:21 - Guardai as vossas almas, e não tragais cargas no dia de sábado, nem as introduzais pelas portas de Jerusalém.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        18: {
            titulo: "O Oleiro e o Barro",
            texto: `¹ A palavra do Senhor, que veio a Jeremias, dizendo:
² Levanta-te, e desce à casa do oleiro, e lá te farei ouvir as minhas palavras.
³ E desci à casa do oleiro, e eis que ele estava fazendo a sua obra sobre as rodas,
⁴ Como o vaso, que ele fazia de barro, quebrou-se na mão do oleiro, tornou a fazer dele outro vaso, conforme o que pareceu bem aos olhos do oleiro fazer.
⁵ Então veio a mim a palavra do Senhor, dizendo:
⁶ Não poderei eu fazer de vós como fez este oleiro, ó casa de Israel? diz o Senhor. Eis que, como o barro na mão do oleiro, assim sois vós na minha mão, ó casa de Israel.
⁷ No momento em que falar contra uma nação, e contra um reino para arrancar, e para derrubar, e para destruir,
⁸ Se a tal nação, porém, contra a qual falar se converter da sua maldade, também eu me arrependerei do mal que pensava fazer-lhe.
⁹ No momento em que falar de uma nação e de um reino, para edificar e para plantar,
¹⁰ Se fizer o mal diante dos meus olhos, não dando ouvidos à minha voz, então me arrependerei do bem que tinha falado que lhe faria.
¹¹ Ora, pois, fala agora aos homens de Judá, e aos moradores de Jerusalém, dizendo: Assim diz o Senhor: Eis que estou forjando mal contra vós; e projeto um plano contra vós; convertei-vos, pois, agora cada um do seu mau caminho, e melhorai os vossos caminhos e as vossas ações.
¹² Mas eles dizem: Não há esperança, porque andaremos segundo as nossas imaginações; e cada um fará segundo o propósito do seu mau coração.
¹³ Portanto, assim diz o Senhor: Perguntai agora entre os gentios quem ouviu tal coisa? Coisa mui horrenda fez a virgem de Israel.
¹⁴ Porventura a neve do Líbano deixará a rocha do campo ou esgotar-se-ão as águas frias que correm de terras estranhas?
¹⁵ Contudo o meu povo se tem esquecido de mim, queimando incenso à vaidade, que os fez tropeçar nos seus caminhos, e nas veredas antigas, para que andassem por veredas afastadas, não aplainadas;
¹⁶ Para fazerem da sua terra objeto de espanto e de perpétuos assobios; todo aquele que passar por ela se espantará, e meneará a sua cabeça;
¹⁷ Com vento oriental os espalharei diante do inimigo; mostrar-lhes-ei as costas e não o rosto, no dia da sua perdição.
¹⁸ Então disseram: Vinde, e maquinemos projetos contra Jeremias; porque não perecerá a lei do sacerdote, nem o conselho do sábio, nem a palavra do profeta; vinde e firamo-lo com a língua, e não atendamos a nenhuma das suas palavras.
¹⁹ Olha para mim, Senhor, e ouve a voz dos que contendem comigo.
²⁰ Porventura pagar-se-á mal por bem? Pois cavaram uma cova para a minha alma. Lembra-te de que eu compareci à tua presença, para falar a favor deles, e para desviar deles a tua indignação;
²¹ Portanto entrega seus filhos à fome, e entrega-os ao poder da espada, e sejam suas mulheres roubadas dos filhos, e fiquem viúvas; e seus maridos sejam feridos de morte, e os seus jovens sejam feridos à espada na peleja.
²² Ouça-se o clamor de suas casas, quando de repente trouxeres uma tropa sobre eles. Porquanto cavaram uma cova para prender-me e armaram laços aos meus pés.
²³ Mas tu, ó Senhor, sabes todo o seu conselho contra mim para matar-me; não perdoes a sua maldade, nem apagues o seu pecado de diante da tua face; mas tropecem diante de ti; trata-os assim no tempo da tua ira.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que aconteceu com o vaso que o oleiro estava fazendo quando se estragou na sua mão?",
                        opcoes: [
                            { numero: 1, texto: "Ele o jogou fora", correta: false },
                            { numero: 2, texto: "Ele o deixou quebrado no chão", correta: false },
                            { numero: 3, texto: "Tornou a fazer dele outro vaso, conforme bem lhe pareceu", correta: true },
                            { numero: 4, texto: "Ele tentou colar os pedaços", correta: false }
                        ],
                        explicacao: "Jeremias 18:4 - Como o vaso, que ele fazia de barro, se quebrou na mão do oleiro, tornou a fazer dele outro vaso, conforme o que pareceu bem aos seus olhos fazer.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A quem o Senhor compara a casa de Israel nas mãos do oleiro?",
                        opcoes: [
                            { numero: 1, texto: "Ao ouro", correta: false },
                            { numero: 2, texto: "Ao barro", correta: true },
                            { numero: 3, texto: "À água", correta: false },
                            { numero: 4, texto: "Ao fogo", correta: false }
                        ],
                        explicacao: "Jeremias 18:6 - Não poderei eu fazer de vós como fez este oleiro, ó casa de Israel? diz o Senhor. Eis que, como o barro na mão do oleiro, assim sois vós na minha mão.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o povo planejou contra Jeremias no verso 18?",
                        opcoes: [
                            { numero: 1, texto: "Dar-lhe um presente", correta: false },
                            { numero: 2, texto: "Ouvir atentamente suas palavras", correta: false },
                            { numero: 3, texto: "Tramar projetos contra ele e feri-lo com a língua", correta: true },
                            { numero: 4, texto: "Convidá-lo para o conselho", correta: false }
                        ],
                        explicacao: "Jeremias 18:18 - Diziam: Vinde, e maquinemos projetos contra Jeremias... vinde e firamo-lo com a língua.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        19: {
            titulo: "A Botija Quebrada",
            texto: `¹ Assim disse o Senhor: Vai, e compra uma botija de oleiro, e leva contigo alguns dos anciãos do povo e alguns dos anciãos dos sacerdotes;
² E sai ao Vale do Filho de Hinom, que está à entrada da porta do sol, e apregoa ali as palavras que eu te disser;
³ E dirás: Ouvi a palavra do Senhor, ó reis de Judá, e moradores de Jerusalém. Assim diz o Senhor dos Exércitos, o Deus de Israel: Eis que trarei um mal sobre este lugar, e quem quer que dele ouvir retinir-lhe-ão os ouvidos.
⁴ Porquanto me deixaram e alienaram este lugar, e nele queimaram incenso a outros deuses, que nunca conheceram, nem eles nem seus pais, nem os reis de Judá; e encheram este lugar de sangue de inocentes.
⁵ Porque edificaram os altos de Baal, para queimarem seus filhos no fogo em holocaustos a Baal; o que nunca lhes ordenei, nem falei, nem me veio ao pensamento.
⁶ Por isso eis que dias vêm, diz o Senhor, em que este lugar não se chamará mais Tofete, nem o Vale do Filho de Hinom, mas o Vale da Matança.
⁷ Porque dissiparei o conselho de Judá e de Jerusalém neste lugar, e os farei cair à espada diante de seus inimigos, e pela mão dos que buscam a vida deles; e darei os seus cadáveres para pasto às aves dos céus e aos animais da terra.
⁸ E farei esta cidade objeto de espanto e de assobio; todo aquele que passar por ela se espantará, e assobiará por causa de todas as suas pragas.
⁹ E lhes farei comer a carne de seus filhos e a carne de suas filhas, e comerá cada um a carne do seu amigo, no cerco e no aperto em que os apertarão os seus inimigos, e os que buscam a vida deles.
¹⁰ Então quebrarás a botija à vista dos homens que forem contigo.
¹¹ E dir-lhes-ás: Assim diz o Senhor dos Exércitos: Deste modo quebrarei eu a este povo, e a esta cidade, como se quebra o vaso do oleiro, que não pode mais refazer-se, e os enterrarão em Tofete, porque não haverá mais lugar para os enterrar.
¹² Assim farei a este lugar, diz o Senhor, e aos seus moradores; sim, para pôr a esta cidade como a Tofete.
¹³ E as casas de Jerusalém, e as casas dos reis de Judá, serão imundas como o lugar de Tofete, como também todas as casas, sobre cujos terraços queimaram incenso a todo o exército dos céus, e ofereceram libações a deuses estranhos.
¹⁴ Vindo, pois, Jeremias de Tofete onde o tinha enviado o Senhor a profetizar, se pôs em pé no átrio da casa do Senhor, e disse a todo o povo:
¹⁵ Assim diz o Senhor dos Exércitos, o Deus de Israel: Eis que trarei sobre esta cidade, e sobre todas as suas vilas, todo o mal que pronunciei contra ela, porquanto endureceram a sua cerviz, para não ouvirem as minhas palavras.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor mandou Jeremias comprar e quebrar diante dos anciãos?",
                        opcoes: [
                            { numero: 1, texto: "Uma botija de oleiro", correta: true },
                            { numero: 2, texto: "Um escudo de metal", correta: false },
                            { numero: 3, texto: "Um jugo de madeira", correta: false },
                            { numero: 4, texto: "Uma mesa de pedra", correta: false }
                        ],
                        explicacao: "Jeremias 19:1,10 - Assim diz o Senhor: Vai, e compra uma botija de oleiro... Então quebrarás a botija à vista dos homens que foram contigo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Onde Jeremias deveria levar os anciãos para anunciar o juízo?",
                        opcoes: [
                            { numero: 1, texto: "Ao cume do Monte Sinai", correta: false },
                            { numero: 2, texto: "Ao Vale do filho de Hinom", correta: true },
                            { numero: 3, texto: "À beira do Mar Morto", correta: false },
                            { numero: 4, texto: "Ao palácio real", correta: false }
                        ],
                        explicacao: "Jeremias 19:2 - E sai ao vale do filho de Hinom, que está à entrada da porta do sol, e apregoa ali as palavras que eu te direi.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por que aquele lugar não se chamaria mais Tofete, mas Vale da Matança?",
                        opcoes: [
                            { numero: 1, texto: "Por causa da falta de água", correta: false },
                            { numero: 2, texto: "Por causa da idolatria e do sangue de inocentes ali derramado", correta: true },
                            { numero: 3, texto: "Por causa de um terremoto", correta: false },
                            { numero: 4, texto: "Por causa de um acordo de paz", correta: false }
                        ],
                        explicacao: "Jeremias 19:6 - Portanto, eis que vêm dias, diz o Senhor, em que este lugar não se chamará mais Tofete... mas o Vale da Matança.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        20: {
            titulo: "Jeremias no Tronco e sua Queixa",
            texto: ` ¹ E Pasur, filho de Imer, o sacerdote, que havia sido nomeado presidente na casa do Senhor, ouviu a Jeremias, que profetizava estas palavras.
² E feriu Pasur ao profeta Jeremias, e o colocou no cepo que está na porta superior de Benjamim, na casa do Senhor.
³ E sucedeu que no dia seguinte Pasur tirou a Jeremias do cepo. Então disse-lhe Jeremias: O Senhor não chama o teu nome Pasur, mas, Terror por todos os lados.
⁴ Porque assim diz o Senhor: Eis que farei de ti um terror para ti mesmo, e para todos os teus amigos. Eles cairão à espada de seus inimigos, e teus olhos o verão. Entregarei todo o Judá na mão do rei de Babilônia; ele os levará presos a Babilônia, e feri-los-á à espada.
⁵ Também entregarei toda a riqueza desta cidade, e todo o seu trabalho, e todas as suas coisas preciosas, sim, todos os tesouros dos reis de Judá entregarei na mão de seus inimigos, e saqueá-los-ão, e tomá-los-ão e levá-los-ão a Babilônia.
⁶ E tu, Pasur, e todos os moradores da tua casa ireis para o cativeiro; e virás a Babilônia, e ali morrerás, e ali serás sepultado, tu, e todos os teus amigos, aos quais profetizaste falsamente.
⁷ Persuadiste-me, ó Senhor, e persuadido fiquei; mais forte foste do que eu, e prevaleceste; sirvo de escárnio todo o dia; cada um deles zomba de mim.
⁸ Porque desde que falo, grito, clamo: Violência e destruição; porque se tornou a palavra do Senhor um opróbrio e ludíbrio todo o dia.
⁹ Então disse eu: Não me lembrarei dele, e não falarei mais no seu nome; mas isso foi no meu coração como fogo ardente, encerrado nos meus ossos; e estou fatigado de sofrer, e não posso mais.
¹⁰ Porque ouvi a murmuração de muitos, terror de todos os lados: Denunciai, e o denunciaremos; todos os que têm paz comigo aguardam o meu manquejar, dizendo: Bem pode ser que se deixe persuadir; então prevaleceremos contra ele e nos vingaremos dele.
¹¹ Mas o Senhor está comigo como um valente temível; por isso tropeçarão os meus perseguidores, e não prevalecerão; ficarão muito confundidos; porque não se houveram prudentemente, terão uma confusão perpétua que nunca será esquecida.
¹² Tu, pois, ó Senhor dos Exércitos, que provas o justo, e vês as entranhas e o coração, permite que eu veja a tua vingança contra eles; pois já te revelei a minha causa.
¹³ Cantai ao Senhor, louvai ao Senhor; pois livrou a alma do necessitado da mão dos malfeitores.
¹⁴ Maldito o dia em que nasci; não seja bendito o dia em que minha mãe me deu à luz.
¹⁵ Maldito o homem que deu as novas a meu pai, dizendo: Nasceu-te um filho; alegrando-o com isso grandemente.
¹⁶ E seja esse homem como as cidades que o Senhor destruiu e não se arrependeu; e ouça clamor pela manhã, e ao tempo do meio-dia um alarido.
¹⁷ Por que não me matou na madre? Assim minha mãe teria sido a minha sepultura, e teria ficado grávida perpetuamente!
¹⁸ Por que saí da madre, para ver trabalho e tristeza, e para que os meus dias se consumam na vergonha?
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem era o sacerdote que feriu Jeremias e o colocou no tronco?",
                        opcoes: [
                            { numero: 1, texto: "Ananias", correta: false },
                            { numero: 2, texto: "Pasur", correta: true },
                            { numero: 3, texto: "Zadoke", correta: false },
                            { numero: 4, texto: "Caifás", correta: false }
                        ],
                        explicacao: "Jeremias 20:1-2 - E ouviu Pasur, filho de Imer, o sacerdote... que Jeremias profetizava estas palavras. E feriu Pasur ao profeta Jeremias, e o colocou no tronco.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Que nome o Senhor deu a Pasur por meio de Jeremias?",
                        opcoes: [
                            { numero: 1, texto: "Servo Fiel", correta: false },
                            { numero: 2, texto: "Magor-Missabibe (Terror por todos os lados)", correta: true },
                            { numero: 3, texto: "Príncipe da Paz", correta: false },
                            { numero: 4, texto: "Homem de Labores", correta: false }
                        ],
                        explicacao: "Jeremias 20:3 - ...o Senhor não chamou o teu nome Pasur, mas Magor-Missabibe.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A que Jeremias compara a palavra de Deus em seu coração quando ele tentava se calar?",
                        opcoes: [
                            { numero: 1, texto: "A uma brisa suave", correta: false },
                            { numero: 2, texto: "A um rio impetuoso", correta: false },
                            { numero: 3, texto: "A um fogo ardente encerrado nos seus ossos", correta: true },
                            { numero: 4, texto: "A uma pedra pesada", correta: false }
                        ],
                        explicacao: "Jeremias 20:9 - ...isso foi no meu coração como fogo ardente, encerrado nos meus ossos; e estou fatigado de sofrer, e não posso mais.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        21: {
            titulo: "Resposta ao Rei Zedequias",
            texto: ` ¹ A palavra que veio a Jeremias da parte do Senhor, quando o rei Zedequias lhe enviou a Pasur, filho de Malquias, e a Sofonias, filho de Maaseias, o sacerdote, dizendo:
² Pergunta agora por nós ao Senhor, por que Nabucodonosor, rei de Babilônia, guerreia contra nós; bem pode ser que o Senhor trate conosco segundo todas as suas maravilhas, e o faça retirar-se de nós.
³ Então Jeremias lhes disse: Assim direis a Zedequias:
⁴ Assim diz o Senhor Deus de Israel: Eis que virarei contra vós as armas de guerra, que estão nas vossas mãos, com que vós pelejais contra o rei de Babilônia, e contra os caldeus, que vos têm cercado de fora dos muros, e ajuntá-los-ei no meio desta cidade.
⁵ E eu pelejarei contra vós com mão estendida e com braço forte, e com ira, e com indignação e com grande furor.
⁶ E ferirei os habitantes desta cidade, assim os homens como os animais; de grande pestilência morrerão.
⁷ E depois disto, diz o Senhor, entregarei Zedequias, rei de Judá, e seus servos, e o povo, e os que desta cidade restarem da pestilência, e da espada, e da fome, na mão de Nabucodonosor, rei de Babilônia, e na mão de seus inimigos, e na mão dos que buscam a sua vida; e feri-los-á ao fio da espada; não os poupará, nem se compadecerá, nem terá misericórdia.
⁸ E a este povo dirás: Assim diz o Senhor: Eis que ponho diante de vós o caminho da vida e o caminho da morte.
⁹ O que ficar nesta cidade há de morrer à espada, ou de fome, ou de pestilência; mas o que sair, e se render aos caldeus, que vos têm cercado, viverá, e terá a sua vida por despojo.
¹⁰ Porque pus o meu rosto contra esta cidade para mal, e não para bem, diz o Senhor; na mão do rei de Babilônia se entregará, e ele queimá-la-á a fogo.
¹¹ E à casa do rei de Judá dirás: Ouvi a palavra do Senhor:
¹² Ó casa de Davi, assim diz o Senhor: Julgai pela manhã justamente, e livrai o espoliado da mão do opressor; para que não saia o meu furor como fogo, e se acenda, sem que haja quem o apague, por causa da maldade de vossas ações.
¹³ Eis que eu sou contra ti, ó moradora do vale, ó rocha da campina, diz o Senhor; contra vós que dizeis: Quem descerá contra nós? Ou quem entrará nas nossas moradas?
¹⁴ Eu vos castigarei segundo o fruto das vossas ações, diz o Senhor; e acenderei o fogo no seu bosque, que consumirá a tudo o que está em redor dela.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem enviou mensageiros a Jeremias para consultar o Senhor sobre Nabucodonosor?",
                        opcoes: [
                            { numero: 1, texto: "O rei Josias", correta: false },
                            { numero: 2, texto: "O rei Zedequias", correta: true },
                            { numero: 3, texto: "O rei Jeoaquim", correta: false },
                            { numero: 4, texto: "O rei Uzias", correta: false }
                        ],
                        explicacao: "Jeremias 21:1-2 - A palavra que do Senhor veio a Jeremias, quando o rei Zedequias lhe enviou Pasur... dizendo: Consulta agora ao Senhor por nós.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quais são os dois caminhos que o Senhor pôs diante do povo, segundo o verso 8?",
                        opcoes: [
                            { numero: 1, texto: "O caminho da riqueza e o da pobreza", correta: false },
                            { numero: 2, texto: "O caminho da vida e o caminho da morte", correta: true },
                            { numero: 3, texto: "O caminho do Egito e o da Babilônia", correta: false },
                            { numero: 4, texto: "O caminho da lei e o do sacrifício", correta: false }
                        ],
                        explicacao: "Jeremias 21:8 - E a este povo dirás: Assim diz o Senhor: Eis que ponho diante de vós o caminho da vida e o caminho da morte.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceria com quem ficasse na cidade e com quem saísse para os caldeus?",
                        opcoes: [
                            { numero: 1, texto: "Todos seriam salvos", correta: false },
                            { numero: 2, texto: "O que ficar morrerá; o que sair viverá e terá a sua vida por despojo", correta: true },
                            { numero: 3, texto: "O que sair morrerá; o que ficar será rei", correta: false },
                            { numero: 4, texto: "Ambos seriam levados cativos sem distinção", correta: false }
                        ],
                        explicacao: "Jeremias 21:9 - O que ficar nesta cidade morrerá... mas o que sair e se render aos caldeus... viverá.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        22: {
            titulo: "Juízos Contra os Reis de Judá",
            texto: ` ¹ Assim diz o Senhor: Desce à casa do rei de Judá, e anuncia ali esta palavra,
² E dize: Ouve a palavra do Senhor, ó rei de Judá, que te assentas no trono de Davi, tu, e os teus servos, o teu povo, que entrais por estas portas.
³ Assim diz o Senhor: Exercei o juízo e a justiça, e livrai o espoliado da mão do opressor; e não oprimais ao estrangeiro, nem ao órfão, nem à viúva; não façais violência, nem derrameis sangue inocente neste lugar.
⁴ Porque, se deveras cumprirdes esta palavra, entrarão pelas portas desta casa os reis que se assentarão em lugar de Davi sobre o seu trono, andando em carros e montados em cavalos, eles, e os seus servos, e o seu povo.
⁵ Mas, se não derdes ouvidos a estas palavras, por mim mesmo tenho jurado, diz o Senhor, que esta casa se tornará em assolação.
⁶ Porque assim diz o Senhor acerca da casa do rei de Judá: Tu és para mim Gileade, e a cabeça do Líbano; mas por certo que farei de ti um deserto e cidades desabitadas.
⁷ Porque preparei contra ti destruidores, cada um com as suas armas; e cortarão os teus cedros escolhidos, e lançá-los-ão no fogo.
⁸ E muitas nações passarão por esta cidade, e dirá cada um ao seu próximo: Por que procedeu o Senhor assim com esta grande cidade?
⁹ E dirão: Porque deixaram a aliança do Senhor seu Deus, e se inclinaram diante de outros deuses, e os serviram.
¹⁰ Não choreis o morto, nem o lastimeis; chorai abundantemente aquele que sai, porque nunca mais tornará nem verá a terra onde nasceu.
¹¹ Porque assim diz o Senhor acerca de Salum, filho de Josias, rei de Judá, que reinou em lugar de Josias, seu pai, e que saiu deste lugar: Nunca mais ali tornará.
¹² Mas no lugar para onde o levaram cativo ali morrerá, e nunca mais verá esta terra.
¹³ Ai daquele que edifica a sua casa com injustiça, e os seus aposentos sem direito, que se serve do serviço do seu próximo sem remunerá-lo, e não lhe dá o salário do seu trabalho.
¹⁴ Que diz: Edificarei para mim uma casa espaçosa, e aposentos largos; e que lhe abre janelas, forrando-a de cedro, e pintando-a de vermelhão.
¹⁵ Porventura reinarás tu, porque te encerras em cedro? Acaso teu pai não comeu e bebeu, e não praticou o juízo e a justiça? Por isso lhe sucedeu bem.
¹⁶ Julgou a causa do aflito e necessitado; então lhe sucedeu bem; porventura não é isto conhecer-me? Diz o Senhor.
¹⁷ Mas os teus olhos e o teu coração não atentam senão para a tua avareza, e para derramar sangue inocente, e para praticar a opressão, e a violência.
¹⁸ Portanto assim diz o Senhor acerca de Jeoiaquim, filho de Josias, rei de Judá: Não o lamentarão, dizendo: Ai, meu irmão, ou ai, minha irmã! Nem o lamentarão, dizendo: Ai, senhor, ou, ai, sua glória!
¹⁹ Em sepultura de jumento será sepultado, sendo arrastado e lançado para bem longe, fora das portas de Jerusalém.
²⁰ Sobe ao Líbano, e clama, e levanta a tua voz em Basã, e clama pelas passagens; porque estão destruídos todos os teus namorados.
²¹ Falei contigo na tua prosperidade, mas tu disseste: Não ouvirei. Este tem sido o teu caminho, desde a tua mocidade, pois nunca deste ouvidos à minha voz.
²² O vento apascentará a todos os teus pastores, e os teus namorados irão para o cativeiro; certamente então te confundirás, e te envergonharás por causa de toda a tua maldade.
²³ Ó tu, que habitas no Líbano e fazes o teu ninho nos cedros, quão lastimada serás quando te vierem as dores e os ais como da que está de parto.
²⁴ Vivo eu, diz o Senhor, que ainda que Conias, filho de Jeoiaquim, rei de Judá, fosse o anel do selo na minha mão direita, contudo dali te arrancaria.
²⁵ E entregar-te-ei na mão dos que buscam a tua vida, e na mão daqueles diante de quem tu temes, a saber, na mão de Nabucodonosor, rei de Babilônia, e na mão dos caldeus.
²⁶ E lançar-te-ei, a ti e à tua mãe que te deu à luz, para uma terra estranha, em que não nasceste, e ali morrereis.
²⁷ Mas à terra, para a qual eles com toda a alma desejam voltar, para lá não voltarão.
²⁸ É, pois, este homem Conias um ídolo desprezado e quebrado, ou um vaso de que ninguém se agrada? Por que razão foram arremessados fora, ele e a sua geração, e arrojados para uma terra que não conhecem?
²⁹ Ó terra, terra, terra! Ouve a palavra do Senhor.
³⁰ Assim diz o Senhor: Escrevei que este homem está privado de filhos, homem que não prosperará nos seus dias; porque nenhum da sua geração prosperará, para se assentar no trono de Davi, e reinar ainda em Judá.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor ordena aos reis de Judá fazerem no tribunal, segundo o verso 3?",
                        opcoes: [
                            { numero: 1, texto: "Aumentar os impostos para a guerra", correta: false },
                            { numero: 2, texto: "Praticar o juízo e a justiça, livrando o oprimido", correta: true },
                            { numero: 3, texto: "Fugir para o Egito imediatamente", correta: false },
                            { numero: 4, texto: "Construir novos ídolos de ouro", correta: false }
                        ],
                        explicacao: "Jeremias 22:3 - Assim diz o Senhor: Praticai o juízo e a justiça, e livrai o oprimido da mão do opressor.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por quem o povo não deveria chorar, mas sim chorar amargamente por outro?",
                        opcoes: [
                            { numero: 1, texto: "Não choreis pelo morto (Josias), mas chorai pelo que vai (Salum/Joacaz)", correta: true },
                            { numero: 2, texto: "Não choreis pelo rei, mas chorai pelos servos", correta: false },
                            { numero: 3, texto: "Não choreis pelo templo, mas chorai pela cidade", correta: false },
                            { numero: 4, texto: "Não choreis por Jeremias, mas chorai por vós", correta: false }
                        ],
                        explicacao: "Jeremias 22:10 - Não choreis o morto, nem o lastimeis; chorai amargamente aquele que sai; porque nunca mais voltará.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Com o sepultamento de qual animal o rei Jeoaquim seria sepultado?",
                        opcoes: [
                            { numero: 1, texto: "De um leão", correta: false },
                            { numero: 2, texto: "De um cordeiro", correta: false },
                            { numero: 3, texto: "De um jumento", correta: true },
                            { numero: 4, texto: "De um camelo", correta: false }
                        ],
                        explicacao: "Jeremias 22:19 - Com sepultura de jumento o sepultarão, arrastando-o e lançando-o para fora das portas de Jerusalém.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        23: {
            titulo: "O Renovo Justo e os Falsos Profetas",
            texto: `¹ Ai dos pastores que destroem e dispersam as ovelhas do meu pasto, diz o Senhor.
² Portanto assim diz o Senhor Deus de Israel, contra os pastores que apascentam o meu povo: Vós dispersastes as minhas ovelhas, e as afugentastes, e não as visitastes; eis que visitarei sobre vós a maldade das vossas ações, diz o Senhor.
³ E eu mesmo recolherei o restante das minhas ovelhas, de todas as terras para onde as tiver afugentado, e as farei voltar aos seus apriscos; e frutificarão, e se multiplicarão.
⁴ E levantarei sobre elas pastores que as apascentem, e nunca mais temerão, nem se assombrarão, e nem uma delas faltará, diz o Senhor.
⁵ Eis que vêm dias, diz o Senhor, em que levantarei a Davi um Renovo justo; e, sendo rei, reinará e agirá sabiamente, e praticará o juízo e a justiça na terra.
⁶ Nos seus dias Judá será salvo, e Israel habitará seguro; e este será o seu nome, com o qual Deus o chamará: o Senhor justiça nossa.
⁷ Portanto, eis que vêm dias, diz o Senhor, em que nunca mais dirão: Vive o Senhor, que fez subir os filhos de Israel da terra do Egito;
⁸ Mas: Vive o Senhor, que fez subir, e que trouxe a geração da casa de Israel da terra do norte, e de todas as terras para onde os tinha arrojado; e habitarão na sua terra.
⁹ Quanto aos profetas, já o meu coração está quebrantado dentro de mim; todos os meus ossos estremecem; sou como um homem embriagado, e como um homem vencido de vinho, por causa do Senhor, e por causa das suas santas palavras.
¹⁰ Porque a terra está cheia de adúlteros, e a terra chora por causa da maldição; os pastos do deserto se secam; porque a sua carreira é má, e a sua força não é reta.
¹¹ Porque tanto o profeta, como o sacerdote, estão contaminados; até na minha casa achei a sua maldade, diz o Senhor.
¹² Portanto o seu caminho lhes será como lugares escorregadios na escuridão; serão empurrados, e cairão nele; porque trarei sobre eles mal, no ano da sua visitação, diz o Senhor.
¹³ Nos profetas de Samaria bem vi loucura; profetizavam da parte de Baal, e faziam errar o meu povo Israel.
¹⁴ Mas nos profetas de Jerusalém vejo uma coisa horrenda: cometem adultérios, e andam com falsidade, e fortalecem as mãos dos malfeitores, para que não se convertam da sua maldade; eles têm-se tornado para mim como Sodoma, e os seus moradores como Gomorra.
¹⁵ Portanto assim diz o Senhor dos Exércitos acerca dos profetas: Eis que lhes darei a comer losna, e lhes farei beber águas de fel; porque dos profetas de Jerusalém saiu a contaminação sobre toda a terra.
¹⁶ Assim diz o Senhor dos Exércitos: Não deis ouvidos às palavras dos profetas, que entre vós profetizam; fazem-vos desvanecer; falam da visão do seu coração, não da boca do Senhor.
¹⁷ Dizem continuamente aos que me desprezam: O Senhor disse: Paz tereis; e a qualquer que anda segundo a dureza do seu coração, dizem: Não virá mal sobre vós.
¹⁸ Porque, quem esteve no conselho do Senhor, e viu, e ouviu a sua palavra? Quem esteve atento à sua palavra, e ouviu?
¹⁹ Eis que saiu com indignação a tempestade do Senhor; e uma tempestade penosa cairá cruelmente sobre a cabeça dos ímpios.
²⁰ Não se desviará a ira do Senhor, até que execute e cumpra os desígnios do seu coração; nos últimos dias entendereis isso claramente.
²¹ Não mandei esses profetas, contudo eles foram correndo; não lhes falei, contudo eles profetizaram.
²² Mas, se estivessem estado no meu conselho, então teriam feito o meu povo ouvir as minhas palavras, e o teriam feito voltar do seu mau caminho, e da maldade das suas ações.
²³ Porventura sou eu Deus de perto, diz o Senhor, e não também Deus de longe?
²⁴ Esconder-se-ia alguém em esconderijos, de modo que eu não o veja? Diz o Senhor. Porventura não encho eu os céus e a terra? Diz o Senhor.
²⁵ Tenho ouvido o que dizem aqueles profetas, profetizando mentiras em meu nome, dizendo: Sonhei, sonhei.
²⁶ Até quando sucederá isso no coração dos profetas que profetizam mentiras, e que só profetizam do engano do seu coração?
²⁷ Os quais cuidam fazer com que o meu povo se esqueça do meu nome pelos seus sonhos que cada um conta ao seu próximo, assim como seus pais se esqueceram do meu nome por causa de Baal.
²⁸ O profeta que tem um sonho conte o sonho; e aquele que tem a minha palavra, fale a minha palavra com verdade. Que tem a palha com o trigo? Diz o Senhor.
²⁹ Porventura a minha palavra não é como o fogo, diz o Senhor, e como um martelo que esmiúça a pedra?
³⁰ Portanto, eis que eu sou contra os profetas, diz o Senhor, que furtam as minhas palavras, cada um ao seu próximo.
³¹ Eis que eu sou contra os profetas, diz o Senhor, que usam de sua própria linguagem, e dizem: Ele disse.
³² Eis que eu sou contra os que profetizam sonhos mentirosos, diz o Senhor, e os contam, e fazem errar o meu povo com as suas mentiras e com as suas leviandades; pois eu não os enviei, nem lhes dei ordem; e não trouxeram proveito algum a este povo, diz o Senhor.
³³ Quando, pois, te perguntar este povo, ou qualquer profeta, ou sacerdote, dizendo: Qual é o peso do Senhor? Então lhe dirás: Este é o peso: Que vos deixarei, diz o Senhor.
³⁴ E, quanto ao profeta, e ao sacerdote, e ao povo, que disser: Peso do Senhor, eu castigarei o tal homem e a sua casa.
³⁵ Assim direis, cada um ao seu próximo, e cada um ao seu irmão: Que respondeu o Senhor? E que falou o Senhor?
³⁶ Mas nunca mais vos lembrareis do peso do Senhor; porque a cada um lhe servirá de peso a sua própria palavra; pois torceis as palavras do Deus vivo, do Senhor dos Exércitos, o nosso Deus.
³⁷ Assim dirás ao profeta: Que te respondeu o Senhor, e que falou o Senhor?
³⁸ Mas, porque dizeis: Peso do Senhor; assim o diz o Senhor: Porque dizeis esta palavra: Peso do Senhor, havendo-vos ordenado, dizendo: Não direis: Peso do Senhor;
³⁹ Por isso, eis que também eu me esquecerei totalmente de vós, e tirarei da minha presença, a vós e a cidade que vos dei a vós e a vossos pais;
⁴⁰ E porei sobre vós perpétuo opróbrio, e eterna vergonha, que não será esquecida.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Que nome será dado ao Renovo justo que reinará e prosperará?",
                        opcoes: [
                            { numero: 1, texto: "O Messias de Israel", correta: false },
                            { numero: 2, texto: "O SENHOR, JUSTIÇA NOSSA", correta: true },
                            { numero: 3, texto: "O Príncipe da Paz", correta: false },
                            { numero: 4, texto: "A Estrela de Jacó", correta: false }
                        ],
                        explicacao: "Jeremias 23:6 - ...e este será o seu nome, com o qual o chamarão: O SENHOR, JUSTIÇA NOSSA.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A que o Senhor compara a Sua palavra no verso 29?",
                        opcoes: [
                            { numero: 1, texto: "A um rio e a uma rocha", correta: false },
                            { numero: 2, texto: "Ao mel e ao favo", correta: false },
                            { numero: 3, texto: "Como fogo e como um martelo que esmiúça a penha", correta: true },
                            { numero: 4, texto: "A uma lâmpada e a uma luz", correta: false }
                        ],
                        explicacao: "Jeremias 23:29 - Porventura a minha palavra não é como fogo, diz o Senhor, e como um martelo que esmiúça a penha?",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor diz sobre o profeta que tem um sonho?",
                        opcoes: [
                            { numero: 1, texto: "Que ele conte o sonho, mas quem tem a Sua palavra, que a fale fielmente", correta: true },
                            { numero: 2, texto: "Que todos os sonhos são d'Ele", correta: false },
                            { numero: 3, texto: "Que os sonhos não têm valor", correta: false },
                            { numero: 4, texto: "Que deve guardá-lo para si", correta: false }
                        ],
                        explicacao: "Jeremias 23:28 - O profeta que teve um sonho conte o sonho; e aquele que tem a minha palavra, fale a minha palavra com verdade.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        24: {
            titulo: "Os Dois Cestos de Figos",
            texto: `¹ Fez-me o Senhor ver, e eis dois cestos de figos, postos diante do templo do Senhor, depois que Nabucodonosor, rei de Babilônia, levou em cativeiro a Jeconias, filho de Jeoiaquim, rei de Judá, e os príncipes de Judá, e os carpinteiros, e os ferreiros de Jerusalém, e os trouxe a Babilônia.
² Um cesto tinha figos muito bons, como os figos temporãos; mas o outro cesto tinha figos muito ruins, que não se podiam comer, de ruins que eram.
³ E disse-me o Senhor: Que vês tu, Jeremias? E eu disse: Figos: os figos bons, muito bons e os ruins, muito ruins, que não se podem comer, de ruins que são.
⁴ Então veio a mim a palavra do Senhor, dizendo:
⁵ Assim diz o Senhor, o Deus de Israel: Como a estes bons figos, assim também conhecerei aos de Judá, levados em cativeiro; os quais enviei deste lugar para a terra dos caldeus, para o seu bem.
⁶ Porei os meus olhos sobre eles, para o seu bem, e os farei voltar a esta terra, e edificá-los-ei, e não os destruirei; e plantá-los-ei, e não os arrancarei.
⁷ E dar-lhes-ei coração para que me conheçam, porque eu sou o Senhor; e ser-me-ão por povo, e eu lhes serei por Deus; porque se converterão a mim de todo o seu coração.
⁸ E como os figos ruins, que se não podem comer, de ruins que são (porque assim diz o Senhor), assim entregarei Zedequias, rei de Judá, e os seus príncipes, e o restante de Jerusalém, que ficou nesta terra, e os que habitam na terra do Egito.
⁹ E entregá-los-ei para que sejam um prejuízo, uma ofensa para todos os reinos da terra, um opróbrio e um provérbio, e um escárnio, e uma maldição em todos os lugares para onde eu os arrojar.
¹⁰ E enviarei entre eles a espada, a fome, e a peste, até que se consumam de sobre a terra que lhes dei a eles e a seus pais.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que havia nos dois cestos que o Senhor mostrou a Jeremias diante do templo?",
                        opcoes: [
                            { numero: 1, texto: "Trigo e cevada", correta: false },
                            { numero: 2, texto: "Figos muito bons e figos muito ruins", correta: true },
                            { numero: 3, texto: "Uvas doces e uvas amargas", correta: false },
                            { numero: 4, texto: "Pães frescos e pães bolorentos", correta: false }
                        ],
                        explicacao: "Jeremias 24:2 - Um cesto tinha figos muito bons... e o outro cesto tinha figos muito ruins, que não se podiam comer.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem os figos bons representavam na visão?",
                        opcoes: [
                            { numero: 1, texto: "Os que ficaram em Jerusalém", correta: false },
                            { numero: 2, texto: "Os cativos de Judá enviados para a terra dos caldeus para seu bem", correta: true },
                            { numero: 3, texto: "Os profetas fiéis", correta: false },
                            { numero: 4, texto: "As crianças de Israel", correta: false }
                        ],
                        explicacao: "Jeremias 24:5 - ...assim conhecerei os cativos de Judá... para seu bem.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor daria aos 'figos bons' (o povo exilado) no verso 7?",
                        opcoes: [
                            { numero: 1, texto: "Muito ouro e prata", correta: false },
                            { numero: 2, texto: "Um coração para que O conheçam", correta: true },
                            { numero: 3, texto: "Armas para vencer a guerra", correta: false },
                            { numero: 4, texto: "Terras em outros países", correta: false }
                        ],
                        explicacao: "Jeremias 24:7 - E dar-lhes-ei coração para que me conheçam, porque eu sou o Senhor.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        25: {
            titulo: "Os Setenta Anos de Cativeiro",
            texto: `¹ A palavra que veio a Jeremias acerca de todo o povo de Judá no quarto ano de Jeoiaquim, filho de Josias, rei de Judá (que é o primeiro ano de Nabucodonosor, rei de Babilônia),
² A qual anunciou o profeta Jeremias a todo o povo de Judá, e a todos os habitantes de Jerusalém, dizendo:
³ Desde o ano treze de Josias, filho de Amom, rei de Judá, até o dia de hoje, período de vinte e três anos, tem vindo a mim a palavra do Senhor, e vo-la tenho anunciado, madrugando e falando; mas vós não escutastes.
⁴ Também vos enviou o Senhor todos os seus servos, os profetas, madrugando e enviando-os, mas vós não escutastes, nem inclinastes os vossos ouvidos para ouvir,
⁵ Quando diziam: Convertei-vos agora cada um do seu mau caminho, e da maldade das suas ações, e habitai na terra que o Senhor vos deu, e a vossos pais, para sempre.
⁶ E não andeis após outros deuses para os servirdes, e para vos inclinardes diante deles, nem me provoqueis à ira com a obra de vossas mãos, para que não vos faça mal.
⁷ Porém não me destes ouvidos, diz o Senhor, mas me provocastes à ira com a obra de vossas mãos, para vosso mal.
⁸ Portanto assim diz o Senhor dos Exércitos: Visto que não escutastes as minhas palavras,
⁹ Eis que eu enviarei, e tomarei a todas as famílias do norte, diz o Senhor, como também a Nabucodonosor, rei de Babilônia, meu servo, e os trarei sobre esta terra, e sobre os seus moradores, e sobre todas estas nações em redor, e os destruirei totalmente, e farei que sejam objeto de espanto, e de assobio, e de perpétuas desolações.
¹⁰ E farei desaparecer dentre eles a voz de gozo, e a voz de alegria, a voz do esposo, e a voz da esposa, como também o som das mós, e a luz do candeeiro.
¹¹ E toda esta terra virá a ser um deserto e um espanto; e estas nações servirão ao rei de Babilônia setenta anos.
¹² Acontecerá, porém, que, quando se cumprirem os setenta anos, visitarei o rei de Babilônia, e esta nação, diz o Senhor, castigando a sua iniquidade, e a da terra dos caldeus; farei deles ruínas perpétuas.
¹³ E trarei sobre aquela terra todas as minhas palavras, que disse contra ela, a saber, tudo quanto está escrito neste livro, que profetizou Jeremias contra todas estas nações.
¹⁴ Porque também deles se servirão muitas nações e grandes reis; assim lhes retribuirei segundo os seus feitos, e segundo as obras das suas mãos.
¹⁵ Porque assim me disse o Senhor Deus de Israel: Toma da minha mão este copo do vinho do furor, e darás a beber dele a todas as nações, às quais eu te enviarei.
¹⁶ Para que bebam e tremam, e enlouqueçam, por causa da espada, que eu enviarei entre eles.
¹⁷ E tomei o copo da mão do Senhor, e dei a beber a todas as nações, às quais o Senhor me enviou;
¹⁸ A Jerusalém, e às cidades de Judá, e aos seus reis, e aos seus príncipes, para fazer deles uma desolação, um espanto, um assobio, e uma maldição, como hoje se vê;
¹⁹ A Faraó, rei do Egito, e a seus servos, e a seus príncipes, e a todo o seu povo;
²⁰ E a toda a mistura de povo, e a todos os reis da terra de Uz, e a todos os reis da terra dos filisteus, e a Ascalom, e a Gaza, e a Ecrom, e ao remanescente de Asdode,
²¹ E a Edom, e a Moabe, e aos filhos de Amom;
²² E a todos os reis de Tiro, e a todos os reis de Sidom; e aos reis das ilhas que estão além do mar;
²³ A Dedã, e a Tema, e a Buz e a todos os que estão nos lugares mais distantes.
²⁴ E a todos os reis da Arábia, e todos os reis do povo misto que habita no deserto;
²⁵ E a todos os reis de Zinri, e a todos os reis de Elão, e a todos os reis da Média;
²⁶ E a todos os reis do norte, os de perto, e os de longe, tanto um como o outro, e a todos os reinos do mundo, que estão sobre a face da terra, e o rei de Sesaque beberá depois deles.
²⁷ Pois lhes dirás: Assim diz o Senhor dos Exércitos, o Deus de Israel: Bebei, e embebedai-vos, e vomitai, e caí, e não torneis a levantar-vos, por causa da espada que eu vos enviarei.
²⁸ E será que, se não quiserem tomar o copo da tua mão para beber, então lhes dirás: Assim diz o Senhor dos Exércitos: Certamente bebereis.
²⁹ Porque, eis que na cidade que se chama pelo meu nome começo a castigar; e ficareis vós totalmente impunes? Não ficareis impunes, porque eu chamo a espada sobre todos os moradores da terra, diz o Senhor dos Exércitos.
³⁰ Tu, pois, lhes profetizarás todas estas palavras, e lhes dirás: O Senhor desde o alto bramirá, e fará ouvir a sua voz desde a morada da sua santidade; terrivelmente bramirá contra a sua habitação, com grito de alegria, como dos que pisam as uvas, contra todos os moradores da terra.
³¹ Chegará o estrondo até à extremidade da terra, porque o Senhor tem contenda com as nações, entrará em juízo com toda a carne; os ímpios entregará à espada, diz o Senhor.
³² Assim diz o Senhor dos Exércitos: Eis que o mal passa de nação para nação, e grande tormenta se levantará dos confins da terra.
³³ E serão os mortos do Senhor, naquele dia, desde uma extremidade da terra até à outra; não serão pranteados, nem recolhidos, nem sepultados; mas serão por esterco sobre a face da terra.
³⁴ Uivai, pastores, e clamai, e revolvei-vos na cinza, principais do rebanho, porque já se cumpriram os vossos dias para serdes mortos, e dispersos, e vós então caireis como um vaso precioso.
³⁵ E não haverá refúgio para os pastores, nem salvamento para os principais do rebanho.
³⁶ Voz de grito dos pastores, e uivos dos principais do rebanho; porque o Senhor está destruindo o pasto deles.
³⁷ Porque as suas malhadas pacíficas serão desarraigadas, por causa do furor da ira do Senhor.
³⁸ Deixou a sua tenda, como o filho de leão; porque a sua terra foi posta em desolação, por causa do furor do opressor, e por causa do furor da sua ira.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por quanto tempo Judá e as nações vizinhas serviriam ao rei da Babilônia?",
                        opcoes: [
                            { numero: 1, texto: "Quarenta anos", correta: false },
                            { numero: 2, texto: "Cem anos", correta: false },
                            { numero: 3, texto: "Setenta anos", correta: true },
                            { numero: 4, texto: "Doze anos", correta: false }
                        ],
                        explicacao: "Jeremias 25:11 - ...e estas nações servirão ao rei de Babilônia setenta anos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor mandou Jeremias entregar a todas as nações para beberem?",
                        opcoes: [
                            { numero: 1, texto: "Um cálice de vinho do Seu furor", correta: true },
                            { numero: 2, texto: "Água da vida", correta: false },
                            { numero: 3, texto: "Azeite de unção", correta: false },
                            { numero: 4, texto: "Vinagre amargo", correta: false }
                        ],
                        explicacao: "Jeremias 25:15 - Porque assim me disse o Senhor Deus de Israel: Toma da minha mão este cálice do vinho do meu furor, e dá-o a beber a todas as nações.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceria com a Babilônia (Sesaque) após os setenta anos?",
                        opcoes: [
                            { numero: 1, texto: "Ela governaria o mundo para sempre", correta: false },
                            { numero: 2, texto: "O Senhor a puniria e a tornaria em desolação perpétua", correta: true },
                            { numero: 3, texto: "Ela se converteria ao Senhor", correta: false },
                            { numero: 4, texto: "Ela seria destruída pelo Egito", correta: false }
                        ],
                        explicacao: "Jeremias 25:12 - ...visitarei sobre o rei de Babilônia... e farei dela desolações perpétuas.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        26: {
            titulo: "Jeremias Ameaçado de Morte",
            texto: ` ¹ No princípio do reinado de Jeoiaquim, filho de Josias, rei de Judá, veio esta palavra do Senhor, dizendo:
² Assim diz o Senhor: Põe-te no átrio da casa do Senhor e dize a todas as cidades de Judá, que vêm adorar na casa do Senhor, todas as palavras que te mandei que lhes dissesses; não omitas nenhuma palavra.
³ Bem pode ser que ouçam, e se convertam cada um do seu mau caminho, e eu me arrependa do mal que intento fazer-lhes por causa da maldade das suas ações.
⁴ Dize-lhes pois: Assim diz o Senhor: Se não me derdes ouvidos para andardes na minha lei, que pus diante de vós,
⁵ Para que ouvísseis as palavras dos meus servos, os profetas, que eu vos envio, madrugando e enviando, mas não ouvistes;
⁶ Então farei que esta casa seja como Siló, e farei desta cidade uma maldição para todas as nações da terra.
⁷ Os sacerdotes, e os profetas, e todo o povo, ouviram a Jeremias, falando estas palavras na casa do Senhor.
⁸ E sucedeu que, acabando Jeremias de dizer tudo quanto o Senhor lhe havia ordenado que dissesse a todo o povo, pegaram nele os sacerdotes, e os profetas, e todo o povo, dizendo: Certamente morrerás,
⁹ Por que profetizaste no nome do Senhor, dizendo: Como Siló será esta casa, e esta cidade será assolada, de sorte que não fique nenhum morador nela? E ajuntou-se todo o povo contra Jeremias, na casa do Senhor.
¹⁰ E, ouvindo os príncipes de Judá estas palavras, subiram da casa do rei à casa do Senhor, e se assentaram à entrada da porta nova do Senhor.
¹¹ Então falaram os sacerdotes e os profetas aos príncipes e a todo o povo, dizendo: Este homem é réu de morte, porque profetizou contra esta cidade, como ouvistes com os vossos ouvidos.
¹² E falou Jeremias a todos os príncipes e a todo o povo, dizendo: O Senhor me enviou a profetizar contra esta casa, e contra esta cidade, todas as palavras que ouvistes.
¹³ Agora, pois, melhorai os vossos caminhos e as vossas ações, e ouvi a voz do Senhor vosso Deus, e arrepender-se-á o Senhor do mal que falou contra vós.
¹⁴ Quanto a mim, eis que estou nas vossas mãos; fazei de mim conforme o que for bom e reto aos vossos olhos.
¹⁵ Sabei, porém, com certeza que, se me matardes, trareis sangue inocente sobre vós, e sobre esta cidade, e sobre os seus habitantes; porque, na verdade, o Senhor me enviou a vós, para dizer aos vossos ouvidos todas estas palavras.
¹⁶ Então disseram os príncipes, e todo o povo aos sacerdotes e aos profetas: Este homem não é réu de morte, porque em nome do Senhor, nosso Deus, nos falou.
¹⁷ Também se levantaram alguns homens dentre os anciãos da terra, e falaram a toda a congregação do povo, dizendo:
¹⁸ Miqueias, o morastita, profetizou nos dias de Ezequias, rei de Judá, e falou a todo o povo de Judá, dizendo: Assim disse o Senhor dos Exércitos: Sião será lavrada como um campo, e Jerusalém se tornará em montões de pedras, e o monte desta casa como os altos de um bosque.
¹⁹ Mataram-no, porventura, Ezequias, rei de Judá, e todo o Judá? Antes não temeu ao Senhor, e não implorou o favor do Senhor? E o Senhor não se arrependeu do mal que falara contra eles? Nós fazemos um grande mal contra as nossas almas.
²⁰ Também houve outro homem que profetizava em nome do Senhor, a saber: Urias, filho de Semaías de Quiriate-Jearim, o qual profetizou contra esta cidade, e contra esta terra, conforme todas as palavras de Jeremias.
²¹ E, ouvindo o rei Jeoiaquim, e todos os seus poderosos e todos os príncipes, as suas palavras, procurou o rei matá-lo; mas ouvindo isto, Urias temeu e fugiu, e foi para o Egito;
²² Mas o rei Jeoiaquim enviou alguns homens ao Egito, a saber: Elnatã, filho de Acbor, e outros homens com ele, ao Egito.
²³ Os quais tiraram a Urias do Egito, e o trouxeram ao rei Jeoiaquim, que o feriu à espada, e lançou o seu cadáver nas sepulturas dos filhos do povo.
²⁴ Porém a mão de Aicão, filho de Safã, foi com Jeremias, para que o não entregassem na mão do povo, para ser morto.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era a condição que Jeremias pregou para que o Senhor se arrependesse do mal planejado?",
                        opcoes: [
                            { numero: 1, texto: "Que cada um se convertesse do seu mau caminho", correta: true },
                            { numero: 2, texto: "Que doassem mais ao templo", correta: false },
                            { numero: 3, texto: "Que fizessem uma aliança com o Egito", correta: false },
                            { numero: 4, texto: "Que jejuassem por quarenta dias", correta: false }
                        ],
                        explicacao: "Jeremias 26:3 - Bem pode ser que ouçam, e se convertam cada um do seu mau caminho, e eu me arrependa do mal.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual profeta do tempo de Ezequias foi citado para defender Jeremias da morte?",
                        opcoes: [
                            { numero: 1, texto: "Isaías", correta: false },
                            { numero: 2, texto: "Miquéias, o morastita", correta: true },
                            { numero: 3, texto: "Amós", correta: false },
                            { numero: 4, texto: "Habacuque", correta: false }
                        ],
                        explicacao: "Jeremias 26:18 - Miquéias, o morastita, profetizou nos dias de Ezequias... e falou a todo o povo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem foi o homem que ajudou Jeremias para que não fosse entregue ao povo?",
                        opcoes: [
                            { numero: 1, texto: "Aicão, filho de Safã", correta: true },
                            { numero: 2, texto: "O rei Jeoaquim", correta: false },
                            { numero: 3, texto: "O sacerdote Pasur", correta: false },
                            { numero: 4, texto: "O profeta Urias", correta: false }
                        ],
                        explicacao: "Jeremias 26:24 - A mão de Aicão, filho de Safã, foi com Jeremias, para que o não entregassem nas mãos do povo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        27: {
            titulo: "O Sinal dos Jugos",
            texto: ` ¹ No princípio do reinado de Jeoiaquim, filho de Josias, rei de Judá, veio esta palavra a Jeremias da parte do Senhor, dizendo:
² Assim me disse o Senhor: Faze uns grilhões e jugos, e põe-nos ao teu pescoço.
³ E envia-os ao rei de Edom, e ao rei de Moabe, e ao rei dos filhos de Amom, e ao rei de Tiro, e ao rei de Sidom, pela mão dos mensageiros que vêm a Jerusalém a ter com Zedequias, rei de Judá.
⁴ E lhes ordenarás, que digam aos seus senhores: Assim diz o Senhor dos Exércitos, o Deus de Israel: Assim direis a vossos senhores:
⁵ Eu fiz a terra, o homem, e os animais que estão sobre a face da terra, com o meu grande poder, e com o meu braço estendido, e a dou a quem é reto aos meus olhos.
⁶ E agora eu entreguei todas estas terras na mão de Nabucodonosor, rei de Babilônia, meu servo; e ainda até os animais do campo lhe dei, para que o sirvam.
⁷ E todas as nações servirão a ele, e a seu filho, e ao filho de seu filho, até que também venha o tempo da sua própria terra, quando muitas nações e grandes reis se servirão dele.
⁸ E acontecerá que, se alguma nação e reino não servirem o mesmo Nabucodonosor, rei de Babilônia, e não puserem o seu pescoço debaixo do jugo do rei de Babilônia, a essa nação castigarei com espada, e com fome, e com peste, diz o Senhor, até que a consuma pela sua mão;
⁹ E vós não deis ouvidos aos vossos profetas, e aos vossos adivinhos, e aos vossos sonhos, e aos vossos agoureiros, e aos vossos encantadores, que vos falam, dizendo: Não servireis ao rei de Babilônia.
¹⁰ Porque mentiras vos profetizam, para vos mandarem para longe da vossa terra, e para que eu vos expulse dela, e pereçais.
¹¹ Mas a nação que colocar o seu pescoço sob o jugo do rei de Babilônia, e o servir, eu a deixarei na sua terra, diz o Senhor, e lavrá-la-á e habitará nela.
¹² E falei com Zedequias, rei de Judá, conforme todas estas palavras, dizendo: Colocai os vossos pescoços no jugo do rei de Babilônia, e servi-o, a ele e ao seu povo, e vivereis.
¹³ Por que morrerias tu e o teu povo, à espada, e à fome, e de peste, como o Senhor disse contra a nação que não servir ao rei de Babilônia?
¹⁴ E não deis ouvidos às palavras dos profetas, que vos falam, dizendo: Não servireis ao rei de Babilônia; porque vos profetizam mentiras.
¹⁵ Porque não os enviei, diz o Senhor, e profetizam falsamente em meu nome; para que eu vos lance fora, e pereçais, vós e os profetas que vos profetizam.
¹⁶ Também falei aos sacerdotes, e a todo este povo, dizendo: Assim diz o Senhor: Não deis ouvidos às palavras dos vossos profetas, que vos profetizam, dizendo: Eis que os utensílios da casa do Senhor cedo voltarão de Babilônia, porque vos profetizam mentiras.
¹⁷ Não lhes deis ouvidos, servi ao rei de Babilônia, e vivereis; por que se tornaria esta cidade em desolação?
¹⁸ Porém, se são profetas, e se há palavras do Senhor com eles, orem agora ao Senhor dos Exércitos, para que os utensílios que ficaram na casa do Senhor, e na casa do rei de Judá, e em Jerusalém, não vão para a Babilônia.
¹⁹ Porque assim diz o Senhor dos Exércitos acerca das colunas, e do mar, e das bases, e dos demais utensílios que ficaram na cidade,
²⁰ Os quais Nabucodonosor, rei de Babilônia, não levou, quando transportou de Jerusalém para Babilônia a Jeconias, filho de Jeoiaquim, rei de Judá, como também a todos os nobres de Judá e de Jerusalém;
²¹ Assim, pois, diz o Senhor dos Exércitos, o Deus de Israel, acerca dos utensílios que ficaram na casa do Senhor, e na casa do rei de Judá, e em Jerusalém:
²² À Babilônia serão levados, e ali ficarão até o dia em que eu os visitarei, diz o Senhor; então os farei subir, e os tornarei a trazer a este lugar.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor mandou Jeremias pôr sobre o seu pescoço?",
                        opcoes: [
                            { numero: 1, texto: "Uma corrente de ouro", correta: false },
                            { numero: 2, texto: "Ataduras e jugos", correta: true },
                            { numero: 3, texto: "Um manto de pele de ovelha", correta: false },
                            { numero: 4, texto: "Uma corda de linho", correta: false }
                        ],
                        explicacao: "Jeremias 27:2 - Assim me disse o Senhor: Faze para ti ataduras e jugos, e põe-nos ao teu pescoço.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A quem o Senhor chama de 'Meu servo' neste capítulo?",
                        opcoes: [
                            { numero: 1, texto: "Jeremias", correta: false },
                            { numero: 2, texto: "Nabucodonosor, rei de Babilônia", correta: true },
                            { numero: 3, texto: "Ciro, rei da Pérsia", correta: false },
                            { numero: 4, texto: "Davi", correta: false }
                        ],
                        explicacao: "Jeremias 27:6 - E agora eu entreguei todas estas terras na mão de Nabucodonosor, rei de Babilônia, meu servo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor aconselhou aos reis vizinhos e a Zedequias?",
                        opcoes: [
                            { numero: 1, texto: "Que lutassem até a morte", correta: false },
                            { numero: 2, texto: "Que metessem o pescoço no jugo do rei de Babilônia e vivessem", correta: true },
                            { numero: 3, texto: "Que fugissem para as montanhas", correta: false },
                            { numero: 4, texto: "Que pedissem ajuda ao Egito", correta: false }
                        ],
                        explicacao: "Jeremias 27:12 - ...Metei o vosso pescoço no jugo do rei de Babilônia, e servi-o a ele e ao seu povo, e vivereis.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        28: {
            titulo: "Jeremias contra Hananias",
            texto: ` ¹ E sucedeu no mesmo ano, no princípio do reinado de Zedequias, rei de Judá, no ano quarto, no mês quinto, que Hananias, filho de Azur, o profeta que era de Gibeom, me falou na casa do Senhor, na presença dos sacerdotes e de todo o povo, dizendo:
² Assim fala o Senhor dos Exércitos, o Deus de Israel, dizendo: Eu quebrei o jugo do rei de Babilônia.
³ Depois de passados dois anos completos, eu tornarei a trazer a este lugar todos os utensílios da casa do Senhor, que deste lugar tomou Nabucodonosor, rei de Babilônia, levando-os a Babilônia.
⁴ Também a Jeconias, filho de Jeoiaquim, rei de Judá, e a todos os do cativeiro de Judá, que entraram em Babilônia, eu tornarei a trazer a este lugar, diz o Senhor; porque quebrarei o jugo do rei de Babilônia.
⁵ Então falou o profeta Jeremias ao profeta Hananias, na presença dos sacerdotes, e na presença de todo o povo que estava na casa do Senhor.
⁶ Disse, pois, Jeremias, o profeta: Amém! Assim faça o Senhor; confirme o Senhor as tuas palavras, que profetizaste, e torne ele a trazer os utensílios da casa do Senhor, e todos os do cativeiro de Babilônia a este lugar.
⁷ Mas ouve agora esta palavra, que eu falo aos teus ouvidos e aos ouvidos de todo o povo:
⁸ Os profetas que houve antes de mim e antes de ti, desde a antiguidade, profetizaram contra muitas terras, e contra grandes reinos, acerca de guerra, e de mal, e de peste.
⁹ O profeta que profetizar de paz, quando se cumprir a palavra desse profeta, será conhecido como o profeta a quem o Senhor na verdade enviou.
¹⁰ Então Hananias, o profeta, tomou o jugo do pescoço do profeta Jeremias, e o quebrou.
¹¹ E falou Hananias na presença de todo o povo, dizendo: Assim diz o Senhor: Assim, passados dois anos completos, quebrarei o jugo de Nabucodonosor, rei de Babilônia, de sobre o pescoço de todas as nações. E Jeremias, o profeta, seguiu o seu caminho.
¹² Mas veio a palavra do Senhor a Jeremias, depois que Hananias, o profeta, quebrou o jugo de sobre o pescoço de Jeremias, o profeta, dizendo:
¹³ Vai, e fala a Hananias, dizendo: Assim diz o Senhor: Jugos de madeira quebraste, mas em vez deles farás jugos de ferro.
¹⁴ Porque assim diz o Senhor dos Exércitos, o Deus de Israel: Jugo de ferro pus sobre o pescoço de todas estas nações, para servirem a Nabucodonosor, rei de Babilônia, e servi-lo-ão, e até os animais do campo lhe dei.
¹⁵ E disse o profeta Jeremias ao profeta Hananias: Ouve agora, Hananias: Não te enviou o Senhor, mas tu fizeste que este povo confiasse em mentiras.
¹⁶ Portanto, assim diz o Senhor: Eis que te lançarei de sobre a face da terra; este ano morrerás, porque falaste em rebeldia contra o Senhor.
¹⁷ E morreu Hananias, o profeta, no mesmo ano, no sétimo mês.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o falso profeta Hananias fez com o jugo que estava no pescoço de Jeremias?",
                        opcoes: [
                            { numero: 1, texto: "Limpou-o com azeite", correta: false },
                            { numero: 2, texto: "Tirou-o e o quebrou", correta: true },
                            { numero: 3, texto: "Amarrou-o com cordas de ouro", correta: false },
                            { numero: 4, texto: "Escondeu-o no templo", correta: false }
                        ],
                        explicacao: "Jeremias 28:10 - Então Hananias, o profeta, tomou o jugo do pescoço do profeta Jeremias, e o quebrou.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Após Hananias quebrar o jugo de madeira, o que o Senhor mandou Jeremias fazer?",
                        opcoes: [
                            { numero: 1, texto: "Fazer jugos de ferro", correta: true },
                            { numero: 2, texto: "Fugir da cidade", correta: false },
                            { numero: 3, texto: "Calar-se para sempre", correta: false },
                            { numero: 4, texto: "Pedir desculpas ao rei", correta: false }
                        ],
                        explicacao: "Jeremias 28:13 - Vai, e fala a Hananias... Jugos de madeira quebraste, mas em vez deles farás jugos de ferro.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu com Hananias por ter pregado rebeldia contra o Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Foi coroado rei", correta: false },
                            { numero: 2, texto: "Morreu naquele mesmo ano", correta: true },
                            { numero: 3, texto: "Tornou-se discípulo de Jeremias", correta: false },
                            { numero: 4, texto: "Foi levado vivo para o céu", correta: false }
                        ],
                        explicacao: "Jeremias 28:17 - E morreu Hananias, o profeta, no mesmo ano, no sétimo mês.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        29: {
            titulo: "A Carta aos Exilados",
            texto: ` ¹ E estas são as palavras da carta que Jeremias, o profeta, enviou de Jerusalém, aos que restaram dos anciãos do cativeiro, como também aos sacerdotes, e aos profetas, e a todo o povo que Nabucodonosor havia deportado de Jerusalém para Babilônia
² (Depois que saíram de Jerusalém o rei Jeconias, e a rainha, e os eunucos, e os príncipes de Judá e Jerusalém, e os carpinteiros e ferreiros),
³ Pela mão de Elasa, filho de Safã, e de Gemarias, filho de Hilquias (os quais Zedequias, rei de Judá, tinha enviado a Babilônia, a Nabucodonosor, rei de Babilônia), dizendo:
⁴ Assim diz o Senhor dos Exércitos, o Deus de Israel, a todos os do cativeiro, os quais fiz transportar de Jerusalém para Babilônia:
⁵ Edificai casas e habitai-as; e plantai jardins, e comei o seu fruto.
⁶ Tomai mulheres e gerai filhos e filhas, e tomai mulheres para vossos filhos, e dai vossas filhas a maridos, para que tenham filhos e filhas; e multiplicai-vos ali, e não vos diminuais.
⁷ E procurai a paz da cidade, para onde vos fiz transportar em cativeiro, e orai por ela ao Senhor; porque na sua paz vós tereis paz.
⁸ Porque assim diz o Senhor dos Exércitos, o Deus de Israel: Não vos enganem os vossos profetas que estão no meio de vós, nem os vossos adivinhos, nem deis ouvidos aos vossos sonhos, que sonhais;
⁹ Porque eles vos profetizam falsamente em meu nome; não os enviei, diz o Senhor.
¹⁰ Porque assim diz o Senhor: Certamente que passados setenta anos em Babilônia, vos visitarei, e cumprirei sobre vós a minha boa palavra, tornando a trazer-vos a este lugar.
¹¹ Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais.
¹² Então me invocareis, e ireis, e orareis a mim, e eu vos ouvirei.
¹³ E buscar-me-eis, e me achareis, quando me buscardes com todo o vosso coração.
¹⁴ E serei achado de vós, diz o Senhor, e farei voltar os vossos cativos e congregar-vos-ei de todas as nações, e de todos os lugares para onde vos lancei, diz o Senhor, e tornarei a trazer-vos ao lugar de onde vos transportei.
¹⁵ Porque dizeis: O Senhor nos levantou profetas em Babilônia.
¹⁶ Porque assim diz o Senhor acerca do rei que se assenta no trono de Davi, e de todo o povo que habita nesta cidade, vossos irmãos, que não saíram conosco para o cativeiro.
¹⁷ Assim diz o Senhor dos Exércitos: Eis que enviarei entre eles a espada, a fome e a peste, e lhes farei como a figos podres que não se podem comer, de ruins que são.
¹⁸ E persegui-los-ei com a espada, com a fome, e com a peste; e dá-los-ei para deslocarem-se por todos os reinos da terra, para serem uma maldição, e um espanto, e um assobio, e um opróbrio entre todas as nações para onde os tiver lançado.
¹⁹ Porquanto não deram ouvidos às minhas palavras, diz o Senhor, mandando-lhes eu os meus servos, os profetas, madrugando e enviando; mas vós não escutastes, diz o Senhor.
²⁰ Vós, pois, ouvi a palavra do Senhor, todos os do cativeiro que enviei de Jerusalém a Babilônia.
²¹ Assim diz o Senhor dos Exércitos, o Deus de Israel, acerca de Acabe, filho de Colaías, e de Zedequias, filho de Maaseias, que vos profetizam falsamente em meu nome: Eis que os entregarei na mão de Nabucodonosor, rei de Babilônia, e ele os ferirá diante dos vossos olhos.
²² E todos os transportados de Judá, que estão em Babilônia, tomarão deles uma maldição, dizendo: O Senhor te faça como Zedequias, e como Acabe, os quais o rei de Babilônia assou no fogo;
²³ Porquanto fizeram loucura em Israel, e cometeram adultério com as mulheres dos seus vizinhos, e anunciaram falsamente, em meu nome uma palavra, que não lhes mandei, e eu o sei e sou testemunha disso, diz o Senhor.
²⁴ E a Semaías, o neelamita, falarás, dizendo:
²⁵ Assim fala o Senhor dos Exércitos, o Deus de Israel, dizendo: Porquanto tu enviaste no teu nome cartas a todo o povo que está em Jerusalém, como também a Sofonias, filho de Maaseias, o sacerdote, e a todos os sacerdotes, dizendo:
²⁶ O Senhor te pôs por sacerdote em lugar de Joiada, o sacerdote, para que sejas encarregado da casa do Senhor sobre todo o homem fanático, e que profetiza, para o lançares na prisão e no tronco.
²⁷ Agora, pois, por que não repreendeste a Jeremias, o anatotita, que vos profetiza?
²⁸ Porque até nos mandou dizer em Babilônia: Ainda o cativeiro muito há de durar; edificai casas, e habitai nelas; e plantai pomares, e comei o seu fruto.
²⁹ E leu Sofonias, o sacerdote, esta carta aos ouvidos de Jeremias, o profeta.
³⁰ E veio a palavra do Senhor a Jeremias, dizendo:
³¹ Manda a todos os do cativeiro, dizendo: Assim diz o Senhor acerca de Semaías, o neelamita: Porquanto Semaías vos profetizou, e eu não o enviei, e vos fez confiar em mentiras,
³² Portanto assim diz o Senhor: Eis que castigarei a Semaías, o neelamita, e a sua descendência; ele não terá ninguém que habite entre este povo, e não verá o bem que hei de fazer ao meu povo, diz o Senhor, porque falou em rebeldia contra o Senhor.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Jeremias aconselhou os exilados na Babilônia a fazerem?",
                        opcoes: [
                            { numero: 1, texto: "Edificar casas, plantar pomares e orar pela paz da cidade", correta: true },
                            { numero: 2, texto: "Fazer greve de fome", correta: false },
                            { numero: 3, texto: "Lutar contra os caldeus", correta: false },
                            { numero: 4, texto: "Não se casarem nunca", correta: false }
                        ],
                        explicacao: "Jeremias 29:5-7 - Edificai casas e habitai-as; plantai pomares... e procurai a paz da cidade, para onde vos fiz transportar.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é a famosa promessa de Deus sobre Seus pensamentos para o povo no verso 11?",
                        opcoes: [
                            { numero: 1, texto: "Pensamentos de destruição", correta: false },
                            { numero: 2, texto: "Pensamentos de paz, e não de mal, para vos dar o fim que esperais", correta: true },
                            { numero: 3, texto: "Pensamentos de riqueza imediata", correta: false },
                            { numero: 4, texto: "Pensamentos de esquecimento", correta: false }
                        ],
                        explicacao: "Jeremias 29:11 - Porque eu bem sei os pensamentos que tenho a vosso respeito... pensamentos de paz, e não de mal.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Segundo o verso 13, quando o povo encontraria o Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Quando fizessem muitos sacrifícios", correta: false },
                            { numero: 2, texto: "Quando O buscassem de todo o seu coração", correta: true },
                            { numero: 3, texto: "Somente após 100 anos", correta: false },
                            { numero: 4, texto: "Ao voltarem para Jerusalém", correta: false }
                        ],
                        explicacao: "Jeremias 29:13 - E buscar-me-eis, e me achareis, quando me buscardes com todo o vosso coração.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        30: {
            titulo: "Promessa de Restauração",
            texto: ` ¹ A palavra que do Senhor veio a Jeremias, dizendo:
² Assim falou o Senhor Deus de Israel, dizendo: Escreve num livro todas as palavras que te tenho falado.
³ Porque eis que vêm dias, diz o Senhor, em que farei voltar do cativeiro o meu povo Israel, e de Judá, diz o Senhor; e tornarei a trazê-los à terra que dei a seus pais, e a possuirão.
⁴ E estas são as palavras que disse o Senhor, acerca de Israel e de Judá.
⁵ Porque assim diz o Senhor: Ouvimos uma voz de tremor, de temor mas não de paz.
⁶ Perguntai, pois, e vede, se um homem pode dar à luz. Por que, pois, vejo a cada homem com as mãos sobre os lombos como a que está dando à luz? E por que se tornaram pálidos todos os rostos?
⁷ Ah! Porque aquele dia é tão grande, que não houve outro semelhante; e é tempo de angústia para Jacó; ele, porém, será salvo dela.
⁸ Porque será naquele dia, diz o Senhor dos Exércitos, que eu quebrarei o seu jugo de sobre o teu pescoço, e quebrarei os teus grilhões; e nunca mais se servirão dele os estrangeiros.
⁹ Mas servirão ao Senhor, seu Deus, como também a Davi, seu rei, que lhes levantarei.
¹⁰ Não temas, pois, tu, ó meu servo Jacó, diz o Senhor, nem te espantes, ó Israel; porque eis que te livrarei de terras de longe, e à tua descendência da terra do seu cativeiro; e Jacó voltará, e descansará, e ficará em sossego, e não haverá quem o atemorize.
¹¹ Porque eu sou contigo, diz o Senhor, para te salvar; porquanto darei fim a todas as nações entre as quais te espalhei; a ti, porém, não darei fim, mas castigar-te-ei com medida, e de todo não te terei por inocente.
¹² Porque assim diz o Senhor: A tua ferida é incurável; a tua chaga é dolorosa.
¹³ Não há quem defenda a tua causa para te aplicar curativo; não tens remédios que possam curar.
¹⁴ Todos os teus amantes se esqueceram de ti, e não perguntam por ti; porque te feri com ferida de inimigo, e com castigo de quem é cruel, pela grandeza da tua maldade e multidão de teus pecados.
¹⁵ Por que gritas por causa da tua ferida? Tua dor é incurável. Pela grandeza de tua maldade, e multidão de teus pecados, eu fiz estas coisas.
¹⁶ Por isso todos os que te devoram serão devorados; e todos os teus adversários irão, todos eles, para o cativeiro; e os que te roubam serão roubados, e a todos os que te despojam entregarei ao saque.
¹⁷ Porque te restaurarei a saúde, e te curarei as tuas chagas, diz o Senhor; porquanto te chamaram a repudiada, dizendo: É Sião, já ninguém pergunta por ela.
¹⁸ Assim diz o Senhor: Eis que farei voltar do cativeiro as tendas de Jacó, e apiedar-me-ei das suas moradas; e a cidade será reedificada sobre o seu montão, e o palácio permanecerá como habitualmente.
¹⁹ E sairá deles o louvor e a voz de júbilo; e multiplicá-los-ei, e não serão diminuídos, e glorificá-los-ei, e não serão apoucados.
²⁰ E seus filhos serão como na antiguidade, e a sua congregação será confirmada diante de mim; e castigarei todos os seus opressores.
²¹ E os seus nobres serão deles; e o seu governador sairá do meio deles, e o farei aproximar, e ele se chegará a mim; pois, quem de si mesmo se empenharia para chegar-se a mim? Diz o Senhor.
²² E ser-me-eis por povo, e eu vos serei por Deus.
²³ Eis que a tempestade do Senhor, a sua indignação, já saiu; uma tempestade varredora, cairá cruelmente sobre a cabeça dos ímpios.
²⁴ Não voltará atrás o furor da ira do Senhor, até que tenha executado e até que tenha cumprido os desígnios do seu coração; no fim dos dias entendereis isto.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como é chamado o tempo de grande angústia mencionado no verso 7?",
                        opcoes: [
                            { numero: 1, texto: "O dia de Faraó", correta: false },
                            { numero: 2, texto: "Tempo de angústia para Jacó", correta: true },
                            { numero: 3, texto: "O ano da seca", correta: false },
                            { numero: 4, texto: "A noite dos ídolos", correta: false }
                        ],
                        explicacao: "Jeremias 30:7 - Ah! porque aquele dia é tão grande, que não houve outro semelhante; e é tempo de angústia para Jacó; ele, porém, será salvo dela.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor faria com o jugo sobre o pescoço do povo naquele dia?",
                        opcoes: [
                            { numero: 1, texto: "Ele o quebraria e despedaçaria as ataduras", correta: true },
                            { numero: 2, texto: "Ele o tornaria mais pesado", correta: false },
                            { numero: 3, texto: "Ele o trocaria por um de ouro", correta: false },
                            { numero: 4, texto: "Ele o daria aos vizinhos", correta: false }
                        ],
                        explicacao: "Jeremias 30:8 - ...quebrarei o seu jugo de sobre o teu pescoço, e despedaçarei as tuas ataduras.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem o Senhor levantaria para ser o rei do povo restaurado?",
                        opcoes: [
                            { numero: 1, texto: "Davi, seu rei", correta: true },
                            { numero: 2, texto: "Um general babilônico", correta: false },
                            { numero: 3, texto: "Um sacerdote egípcio", correta: false },
                            { numero: 4, texto: "Ninguém, seriam sem rei", correta: false }
                        ],
                        explicacao: "Jeremias 30:9 - Mas servirão ao Senhor, seu Deus, como também a Davi, seu rei, que lhes levantarei.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        31: {
            titulo: "A Nova Aliança",
            texto: `¹ Naquele tempo, diz o Senhor, serei o Deus de todas as famílias de Israel, e elas serão o meu povo.
² Assim diz o Senhor: O povo dos que escaparam da espada achou graça no deserto. Israel mesmo, quando eu o fizer descansar.
³ Há muito que o Senhor me apareceu, dizendo: Porquanto com amor eterno te amei, por isso com benignidade te atraí.
⁴ Ainda te edificarei, e serás edificada, ó virgem de Israel! Ainda serás adornada com os teus tamboris, e sairás nas danças dos que se alegram.
⁵ Ainda plantarás vinhas nos montes de Samaria; os plantadores as plantarão e comerão como coisas comuns.
⁶ Porque haverá um dia em que gritarão os vigias sobre o monte de Efraim: Levantai-vos, e subamos a Sião, ao Senhor nosso Deus.
⁷ Porque assim diz o Senhor: Cantai sobre Jacó com alegria, e exultai por causa do chefe das nações; proclamai, cantai louvores, e dizei: Salva, Senhor, ao teu povo, o restante de Israel.
⁸ Eis que os trarei da terra do norte, e os congregarei das extremidades da terra; entre os quais haverá cegos e aleijados, grávidas e as de parto juntamente; em grande congregação voltarão para aqui.
⁹ Virão com choro, e com súplicas os levarei; guiá-los-ei aos ribeiros de águas, por caminho direito, no qual não tropeçarão, porque sou um pai para Israel, e Efraim é o meu primogênito.
¹⁰ Ouvi a palavra do Senhor, ó nações, e anunciai-a nas ilhas longínquas, e dizei: Aquele que espalhou a Israel o congregará e o guardará, como o pastor ao seu rebanho.
¹¹ Porque o Senhor resgatou a Jacó, e o livrou da mão do que era mais forte do que ele.
¹² Assim que virão, e exultarão no alto de Sião, e correrão aos bens do Senhor, ao trigo, e ao mosto, e ao azeite, e aos cordeiros e bezerros; e a sua alma será como um jardim regado, e nunca mais andarão tristes.
¹³ Então a virgem se alegrará na dança, como também os jovens e os velhos juntamente; e tornarei o seu pranto em alegria, e os consolarei, e lhes darei alegria em lugar de tristeza.
¹⁴ E saciarei a alma dos sacerdotes com gordura, e o meu povo se fartará dos meus bens, diz o Senhor.
¹⁵ Assim diz o Senhor: Uma voz se ouviu em Ramá, lamentação, choro amargo; Raquel chora seus filhos; não quer ser consolada quanto a seus filhos, porque já não existem.
¹⁶ Assim diz o Senhor: Reprime a tua voz de choro, e as lágrimas de teus olhos; porque há galardão para o teu trabalho, diz o Senhor, pois eles voltarão da terra do inimigo.
¹⁷ E há esperança quanto ao teu futuro, diz o Senhor, porque teus filhos voltarão para os seus termos.
¹⁸ Bem ouvi eu que Efraim se queixava, dizendo: Castigaste-me e fui castigado, como novilho ainda não domado; converte-me, e converter-me-ei, porque tu és o Senhor meu Deus.
¹⁹ Na verdade que, depois que me converti, tive arrependimento; e depois que fui instruído, bati na minha coxa; fiquei confuso, e também me envergonhei; porque suportei o opróbrio da minha mocidade.
²⁰ Não é Efraim para mim um filho precioso, criança das minhas delícias? Porque depois que falo contra ele, ainda me lembro dele solicitamente; por isso se comovem por ele as minhas entranhas; deveras me compadecerei dele, diz o Senhor.
²¹ Levanta para ti sinais, faze para ti altos marcos, aplica o teu coração à vereda, ao caminho por onde andaste; volta, pois, ó virgem de Israel, regressa a estas tuas cidades.
²² Até quando andarás errante, ó filha rebelde? Porque o Senhor criou uma coisa nova sobre a terra; uma mulher cercará a um homem.
²³ Assim diz o Senhor dos Exércitos, o Deus de Israel: Ainda dirão esta palavra na terra de Judá, e nas suas cidades, quando eu vos restaurar do seu cativeiro: O Senhor te abençoe, ó morada de justiça, ó monte de santidade!
²⁴ E nela habitarão Judá, e todas as suas cidades juntamente; como também os lavradores e os que pastoreiam o rebanho.
²⁵ Porque satisfiz a alma cansada, e toda a alma entristecida saciei.
²⁶ Nisto despertei, e olhei, e o meu sono foi doce para mim.
²⁷ Eis que dias vêm, diz o Senhor, em que semearei a casa de Israel, e a casa de Judá, com a semente de homens, e com a semente de animais.
²⁸ E será que, como velei sobre eles, para arrancar, e para derrubar, e para transtornar, e para destruir, e para afligir, assim velarei sobre eles, para edificar e para plantar, diz o Senhor.
²⁹ Naqueles dias nunca mais dirão: Os pais comeram uvas verdes, e os dentes dos filhos se embotaram.
³⁰ Mas cada um morrerá pela sua iniquidade; de todo o homem que comer as uvas verdes os dentes se embotarão.
³¹ Eis que dias vêm, diz o Senhor, em que farei uma aliança nova com a casa de Israel e com a casa de Judá.
³² Não conforme a aliança que fiz com seus pais, no dia em que os tomei pela mão, para os tirar da terra do Egito; porque eles invalidaram a minha aliança apesar de eu os haver desposado, diz o Senhor.
³³ Mas esta é a aliança que farei com a casa de Israel depois daqueles dias, diz o Senhor: Porei a minha lei no seu interior, e a escreverei no seu coração; e eu serei o seu Deus e eles serão o meu povo.
³⁴ E não ensinará mais cada um a seu próximo, nem cada um a seu irmão, dizendo: Conhecei ao Senhor; porque todos me conhecerão, desde o menor até ao maior deles, diz o Senhor; porque lhes perdoarei a sua maldade, e nunca mais me lembrarei dos seus pecados.
³⁵ Assim diz o Senhor, que dá o sol para luz do dia, e as ordenanças da lua e das estrelas para luz da noite, que agita o mar, bramando as suas ondas; o Senhor dos Exércitos é o seu nome.
³⁶ Se falharem estas ordenanças de diante de mim, diz o Senhor, deixará também a descendência de Israel de ser uma nação diante de mim para sempre.
³⁷ Assim disse o Senhor: Se puderem ser medidos os céus lá em cima, e sondados os fundamentos da terra cá em baixo, também eu rejeitarei toda a descendência de Israel, por tudo quanto fizeram, diz o Senhor.
³⁸ Eis que vêm dias, diz o Senhor, em que esta cidade será reedificada para o Senhor, desde a torre de Hananeel até à porta da esquina.
³⁹ E a linha de medir estender-se-á para diante dela, até ao outeiro de Garebe, e virar-se-á para Goa.
⁴⁰ E todo o vale dos cadáveres e da cinza, e todos os campos até ao ribeiro de Cedrom, até à esquina da porta dos cavalos para o oriente, serão consagrados ao Senhor; não se arrancará nem se derrubará mais eternamente.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Com que tipo de amor o Senhor declarou amar o Seu povo no verso 3?",
                        opcoes: [
                            { numero: 1, texto: "Com amor passageiro", correta: false },
                            { numero: 2, texto: "Com amor eterno", correta: true },
                            { numero: 3, texto: "Com amor severo", correta: false },
                            { numero: 4, texto: "Com amor condicional", correta: false }
                        ],
                        explicacao: "Jeremias 31:3 - ...Com amor eterno te amei, também com amabilidade te atraí.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Onde o Senhor poria a Sua lei na Nova Aliança?",
                        opcoes: [
                            { numero: 1, texto: "Em tábuas de pedra", correta: false },
                            { numero: 2, texto: "No interior do homem e escrita no seu coração", correta: true },
                            { numero: 3, texto: "Nos portões da cidade", correta: false },
                            { numero: 4, texto: "Apenas nos livros dos sacerdotes", correta: false }
                        ],
                        explicacao: "Jeremias 31:33 - ...Porei a minha lei no seu interior, e a escreverei no seu coração.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que não será mais necessário na Nova Aliança, segundo o verso 34?",
                        opcoes: [
                            { numero: 1, texto: "Ensinar cada um ao seu próximo dizendo: Conhecei ao Senhor", correta: true },
                            { numero: 2, texto: "Trabalhar para comer", correta: false },
                            { numero: 3, texto: "Oferecer incenso", correta: false },
                            { numero: 4, texto: "Morar em casas", correta: false }
                        ],
                        explicacao: "Jeremias 31:34 - E não ensinarão mais cada um a seu próximo... dizendo: Conhecei ao Senhor; porque todos me conhecerão.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        32: {
            titulo: "A Compra do Campo em Anatote",
            texto: ` ¹ A palavra que veio a Jeremias da parte do Senhor, no ano décimo de Zedequias, rei de Judá, o qual foi o décimo oitavo ano de Nabucodonosor.
² Ora, nesse tempo o exército do rei de Babilônia cercava Jerusalém; e Jeremias, o profeta, estava encerrado no pátio da guarda que estava na casa do rei de Judá;
³ Porque Zedequias, rei de Judá, o tinha encerrado, dizendo: Por que profetizas tu, dizendo: Assim diz o Senhor: Eis que entrego esta cidade na mão do rei de Babilônia, e ele a tomará;
⁴ E Zedequias, rei de Judá, não escapará das mãos dos caldeus; mas certamente será entregue na mão do rei de Babilônia, e com ele falará boca a boca, e os seus olhos verão os dele;
⁵ E ele levará Zedequias para Babilônia, e ali estará, até que eu o visite, diz o Senhor e, ainda que pelejeis contra os caldeus, não ganhareis?
⁶ Disse, pois, Jeremias: Veio a mim a palavra do Senhor, dizendo:
⁷ Eis que Hanameel, filho de Salum, teu tio, virá a ti dizendo: Compra para ti a minha herdade que está em Anatote, pois tens o direito de resgate para comprá-la.
⁸ Veio, pois, a mim Hanameel, filho de meu tio, segundo a palavra do Senhor, ao pátio da guarda, e me disse: Compra agora a minha herdade que está em Anatote, na terra de Benjamim; porque teu é o direito de herança, e tens o resgate; compra-a para ti. Então entendi que isto era a palavra do Senhor.
⁹ Comprei, pois, a herdade de Hanameel, filho de meu tio, a qual está em Anatote; e pesei-lhe o dinheiro, dezessete siclos de prata.
¹⁰ E assinei a escritura, e selei-a, e fiz confirmar por testemunhas; e pesei-lhe o dinheiro numa balança.
¹¹ E tomei a escritura da compra, selada segundo a lei e os estatutos, e a cópia aberta.
¹² E dei a escritura da compra a Baruque, filho de Nerias, filho de Maaseias, na presença de Hanameel, filho de meu tio e na presença das testemunhas, que subscreveram a escritura da compra, e na presença de todos os judeus que se assentavam no pátio da guarda.
¹³ E dei ordem a Baruque, na presença deles, dizendo:
¹⁴ Assim diz o Senhor dos Exércitos, o Deus de Israel: Toma estas escrituras, este auto de compra, tanto a selada, como a aberta, e coloca-as num vaso de barro, para que se possam conservar muitos dias.
¹⁵ Porque assim diz o Senhor dos Exércitos, o Deus de Israel: Ainda se comprarão casas, e campos, e vinhas nesta terra.
¹⁶ E depois que dei a escritura da compra a Baruque, filho de Nerias, orei ao Senhor, dizendo:
¹⁷ Ah Senhor Deus! Eis que tu fizeste os céus e a terra com o teu grande poder, e com o teu braço estendido; nada há que te seja demasiado difícil;
¹⁸ Tu que usas de benignidade com milhares, e retribuis a maldade dos pais ao seio dos filhos depois deles; o grande, o poderoso Deus cujo nome é o Senhor dos Exércitos;
¹⁹ Grande em conselho, e magnífico em obras; porque os teus olhos estão abertos sobre todos os caminhos dos filhos dos homens, para dar a cada um segundo os seus caminhos e segundo o fruto das suas obras;
²⁰ Tu puseste sinais e maravilhas na terra do Egito até ao dia de hoje, tanto em Israel, como entre os outros homens, e te fizeste um nome, o qual tu tens neste dia.
²¹ E tiraste o teu povo Israel da terra do Egito, com sinais e com maravilhas, e com mão forte, e com braço estendido, e com grande espanto,
²² E lhes deste esta terra, que juraste a seus pais que lhes havias de dar, terra que mana leite e mel.
²³ E entraram nela, e a possuíram, mas não obedeceram à tua voz, nem andaram na tua lei; tudo o que lhes mandaste que fizessem, eles não o fizeram; por isso ordenaste lhes sucedesse todo este mal.
²⁴ Eis aqui os valados; já vieram contra a cidade para tomá-la, e a cidade está entregue na mão dos caldeus, que pelejam contra ela, pela espada, pela fome e pela pestilência; e o que disseste se cumpriu, e eis aqui o estás presenciando.
²⁵ Contudo tu me disseste, ó Senhor Deus: Compra para ti o campo por dinheiro, e faze que o confirmem testemunhas, embora a cidade já esteja entregue na mão dos caldeus.
²⁶ Então veio a palavra do Senhor a Jeremias, dizendo:
²⁷ Eis que eu sou o Senhor, o Deus de toda a carne; acaso haveria alguma coisa demasiado difícil para mim?
²⁸ Portanto assim diz o Senhor: Eis que eu entrego esta cidade na mão dos caldeus, e na mão de Nabucodonosor, rei de Babilônia, e ele a tomará.
²⁹ E os caldeus, que pelejam contra esta cidade, entrarão nela, e pôr-lhe-ão fogo, e queimarão, as casas sobre cujos terraços queimaram incenso a Baal e ofereceram libações a outros deuses, para me provocarem à ira.
³⁰ Porque os filhos de Israel e os filhos de Judá não fizeram senão mal aos meus olhos, desde a sua mocidade; porque os filhos de Israel nada fizeram senão provocar-me à ira com as obras das suas mãos, diz o Senhor.
³¹ Porque para a minha ira e para o meu furor me tem sido esta cidade, desde o dia em que a edificaram, e até ao dia de hoje, para que a tirasse da minha presença;
³² Por causa de toda a maldade dos filhos de Israel, e dos filhos de Judá, que fizeram, para me provocarem à ira, eles e os seus reis, os seus príncipes, os seus sacerdotes, e os seus profetas, como também os homens de Judá e os moradores de Jerusalém.
³³ E viraram-me as costas, e não o rosto; ainda que eu os ensinava, madrugando e ensinando-os, contudo eles não deram ouvidos, para receberem o ensino.
³⁴ Antes puseram as suas abominações na casa que se chama pelo meu nome, para a profanarem.
³⁵ E edificaram os altos de Baal, que estão no Vale do Filho de Hinom, para fazerem passar seus filhos e suas filhas pelo fogo a Moloque; o que nunca lhes ordenei, nem veio ao meu coração, que fizessem tal abominação, para fazerem pecar a Judá.
³⁶ E por isso agora assim diz o Senhor, o Deus de Israel, acerca desta cidade, da qual vós dizeis: Já está dada na mão do rei de Babilônia, pela espada, pela fome, e pela pestilência:
³⁷ Eis que eu os congregarei de todas as terras, para onde os tenho lançado na minha ira, e no meu furor, e na minha grande indignação; e os tornarei a trazer a este lugar, e farei que habitem nele seguramente.
³⁸ E eles serão o meu povo, e eu lhes serei o seu Deus;
³⁹ E lhes darei um mesmo coração, e um só caminho, para que me temam todos os dias, para seu bem, e o bem de seus filhos, depois deles.
⁴⁰ E farei com eles uma aliança eterna de não me desviar de fazer-lhes o bem; e porei o meu temor nos seus corações, para que nunca se apartem de mim.
⁴¹ E alegrar-me-ei deles, fazendo-lhes bem; e plantá-los-ei nesta terra firmemente, com todo o meu coração e com toda a minha alma.
⁴² Porque assim diz o Senhor: Como eu trouxe sobre este povo todo este grande mal, assim eu trarei sobre ele todo o bem que lhes tenho declarado.
⁴³ E comprar-se-ão campos nesta terra, da qual vós dizeis: Está desolada, sem homens, sem animais; está entregue na mão dos caldeus.
⁴⁴ Comprarão campos por dinheiro, e assinarão as escrituras, e as selarão, e farão que confirmem testemunhas, na terra de Benjamim, e nos contornos de Jerusalém, e nas cidades de Judá, e nas cidades das montanhas, e nas cidades das planícies, e nas cidades do sul; porque os farei voltar do seu cativeiro, diz o Senhor.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor mandou Jeremias fazer enquanto ele estava preso no pátio da guarda?",
                        opcoes: [
                            { numero: 1, texto: "Comprar o campo de Hanameel, seu primo", correta: true },
                            { numero: 2, texto: "Cavar um túnel", correta: false },
                            { numero: 3, texto: "Escrever um novo livro", correta: false },
                            { numero: 4, texto: "Pedir perdão ao rei", correta: false }
                        ],
                        explicacao: "Jeremias 32:7-8 - Eis que Hanameel... virá a ti, dizendo: Compra para ti o meu campo que está em Anatote.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que a compra do campo simbolizava para o futuro de Israel?",
                        opcoes: [
                            { numero: 1, texto: "Que ainda se comprariam casas e campos naquela terra", correta: true },
                            { numero: 2, texto: "Que a terra seria deserta para sempre", correta: false },
                            { numero: 3, texto: "Que Jeremias ficaria rico", correta: false },
                            { numero: 4, texto: "Que o exército venceria a guerra", correta: false }
                        ],
                        explicacao: "Jeremias 32:15 - Porque assim diz o Senhor... Ainda se comprarão casas, e campos, e vinhas nesta terra.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é a pergunta retórica que o Senhor faz no verso 27?",
                        opcoes: [
                            { numero: 1, texto: "Haveria porventura alguma coisa difícil para mim?", correta: true },
                            { numero: 2, texto: "Por que estais chorando?", correta: false },
                            { numero: 3, texto: "Onde estão vossos deuses?", correta: false },
                            { numero: 4, texto: "Quem subirá ao céu?", correta: false }
                        ],
                        explicacao: "Jeremias 32:27 - Eis que eu sou o Senhor... haveria porventura alguma coisa difícil para mim?",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        33: {
            titulo: "Promessas de Paz e de Retorno",
            texto: `¹ E veio a palavra do Senhor a Jeremias, segunda vez, estando ele ainda encarcerado no pátio da guarda, dizendo:
² Assim diz o Senhor que faz isto, o Senhor que forma isto, para o estabelecer; o Senhor é o seu nome.
³ Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes que não sabes.
⁴ Porque assim diz o Senhor, o Deus de Israel, acerca das casas desta cidade, e das casas dos reis de Judá, que foram derrubadas com os aríetes e à espada.
⁵ Eles entraram a pelejar contra os caldeus, mas isso é para os encher de cadáveres de homens, que feri na minha ira e no meu furor; porquanto escondi o meu rosto desta cidade, por causa de toda a sua maldade.
⁶ Eis que eu trarei a ela saúde e cura, e os sararei, e lhes manifestarei abundância de paz e de verdade.
⁷ E removerei o cativeiro de Judá e o cativeiro de Israel, e os edificarei como ao princípio.
⁸ E os purificarei de toda a sua maldade com que pecaram contra mim; e perdoarei todas as suas maldades, com que pecaram e transgrediram contra mim;
⁹ E este lugar me servirá de nome, de gozo, de louvor, e de glória, entre todas as nações da terra, que ouvirem todo o bem que eu lhe faço; e espantar-se-ão e perturbar-se-ão por causa de todo o bem, e por causa de toda a paz que eu lhe dou.
¹⁰ Assim diz o Senhor: Neste lugar de que vós dizeis que está desolado, e sem homem, sem animal nas cidades de Judá, e nas ruas de Jerusalém, que estão assoladas, sem homem, sem morador, sem animal, ainda se ouvirá:
¹¹ A voz de gozo, e a voz de alegria, a voz do esposo e a voz da esposa, e a voz dos que dizem: Louvai ao Senhor dos Exércitos, porque bom é o Senhor, porque a sua benignidade dura para sempre; dos que trazem ofertas de ação de graças à casa do Senhor; pois farei voltar os cativos da terra como ao princípio, diz o Senhor.
¹² Assim diz o Senhor dos Exércitos: Ainda neste lugar, que está deserto, sem homem nem animal, e em todas as suas cidades, haverá uma morada de pastores, que façam repousar aos seus rebanhos.
¹³ Nas cidades das montanhas, nas cidades das planícies, e nas cidades do sul, e na terra de Benjamim, e nos contornos de Jerusalém, e nas cidades de Judá, ainda passarão os rebanhos pelas mãos dos contadores, diz o Senhor.
¹⁴ Eis que vêm dias, diz o Senhor, em que cumprirei a boa palavra que falei à casa de Israel e à casa de Judá;
¹⁵ Naqueles dias e naquele tempo farei brotar a Davi um Renovo de justiça, e ele fará juízo e justiça na terra.
¹⁶ Naqueles dias Judá será salvo e Jerusalém habitará seguramente; e este é o nome com o qual Deus a chamará: O Senhor é a nossa justiça.
¹⁷ Porque assim diz o Senhor: Nunca faltará a Davi homem que se assente sobre o trono da casa de Israel;
¹⁸ Nem aos sacerdotes levíticos faltará homem diante de mim, que ofereça holocausto, queime oferta de alimentos e faça sacrifício todos os dias.
¹⁹ E veio a palavra do Senhor a Jeremias, dizendo:
²⁰ Assim diz o Senhor: Se puderdes invalidar a minha aliança com o dia, e a minha aliança com a noite, de tal modo que não haja dia e noite a seu tempo,
²¹ Também se poderá invalidar a minha aliança com Davi, meu servo, para que não tenha filho que reine no seu trono; como também com os levitas, sacerdotes, meus ministros.
²² Como não se pode contar o exército dos céus, nem medir-se a areia do mar, assim multiplicarei a descendência de Davi, meu servo, e os levitas que ministram diante de mim.
²³ E veio ainda a palavra do Senhor a Jeremias, dizendo:
²⁴ Porventura não tens visto o que tem falado este povo, dizendo: As duas gerações, que o Senhor escolheu, agora as rejeitou? Assim desprezam o meu povo, como se não fora mais uma nação diante deles.
²⁵ Assim diz o Senhor: Se a minha aliança com o dia e com a noite não permanecer, e eu não puser as ordenanças dos céus e da terra,
²⁶ Também rejeitarei a descendência de Jacó, e de Davi, meu servo, para que não tome da sua descendência os que dominem sobre a descendência de Abraão, Isaque, e Jacó; porque removerei o seu cativeiro, e apiedar-me-ei deles.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor ordena a Jeremias fazer para que Ele lhe revele coisas grandes e firmes?",
                        opcoes: [
                            { numero: 1, texto: "Clama a mim", correta: true },
                            { numero: 2, texto: "Escreve num livro", correta: false },
                            { numero: 3, texto: "Sobe ao monte", correta: false },
                            { numero: 4, texto: "Jejuar por sete dias", correta: false }
                        ],
                        explicacao: "Jeremias 33:3 - Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes que não sabes.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que se ouviria novamente nas cidades de Judá e nas ruas de Jerusalém, segundo o verso 11?",
                        opcoes: [
                            { numero: 1, texto: "Voz de gozo, de alegria e a voz de noivo e de noiva", correta: true },
                            { numero: 2, texto: "Gritos de guerra", correta: false },
                            { numero: 3, texto: "Lamento de viúvas", correta: false },
                            { numero: 4, texto: "Silêncio absoluto", correta: false }
                        ],
                        explicacao: "Jeremias 33:11 - A voz de gozo, e a voz de alegria, a voz de noivo e a voz de noiva...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A que o Senhor compara a impossibilidade de quebrar a Sua aliança com Davi?",
                        opcoes: [
                            { numero: 1, texto: "À aliança com o dia e com a noite", correta: true },
                            { numero: 2, texto: "À firmeza das montanhas", correta: false },
                            { numero: 3, texto: "À profundidade do mar", correta: false },
                            { numero: 4, texto: "Ao brilho do ouro", correta: false }
                        ],
                        explicacao: "Jeremias 33:20-21 - Se puderdes invalidar a minha aliança com o dia, e a minha aliança com a noite... também se poderá invalidar a minha aliança com Davi.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        34: {
            titulo: "Advertência a Zedequias",
            texto: `¹ A palavra que do Senhor veio a Jeremias, quando Nabucodonosor, rei de Babilônia, e todo o seu exército, e todos os reinos da terra, que estavam sob o domínio da sua mão, e todos os povos, pelejavam contra Jerusalém, e contra todas as suas cidades, dizendo:
² Assim diz o Senhor, o Deus de Israel: Vai, e fala a Zedequias, rei de Judá, e dize-lhe: Assim diz o Senhor: Eis que eu entrego esta cidade na mão do rei de Babilônia, o qual queimá-la-á a fogo.
³ E tu não escaparás da sua mão, antes certamente serás preso e entregue na sua mão; e teus olhos verão os olhos do rei de Babilônia, e ele te falará boca a boca, e entrarás em Babilônia.
⁴ Todavia ouve a palavra do Senhor, ó Zedequias, rei de Judá; assim diz o Senhor acerca de ti: Não morrerás à espada.
⁵ Em paz morrerás, e conforme as queimas para teus pais, os reis precedentes, que foram antes de ti, assim queimarão para ti, e prantear-te-ão, dizendo: Ah, Senhor! Pois eu disse a palavra, diz o Senhor.
⁶ E falou Jeremias, o profeta, a Zedequias, rei de Judá, todas estas palavras, em Jerusalém,
⁷ Quando o exército do rei de Babilônia pelejava contra Jerusalém, e contra todas as cidades que restavam de Judá, contra Laquis e contra Azeca; porque estas fortes cidades foram as que ficaram dentre as cidades de Judá.
⁸ A palavra que do Senhor veio a Jeremias, depois que o rei Zedequias fez aliança com todo o povo que havia em Jerusalém, para lhes apregoar a liberdade;
⁹ Que cada um despedisse livre o seu servo, e cada um a sua serva, hebreu ou hebreia; de maneira que ninguém se fizesse servir deles, sendo judeus, seus irmãos.
¹⁰ E obedeceram todos os príncipes, e todo o povo que havia entrado na aliança, que cada um despedisse livre o seu servo, e cada um a sua serva, de maneira que não se fizessem mais servir deles; obedeceram, pois, e os soltaram,
¹¹ Mas depois se arrependeram, e fizeram voltar os servos e as servas que haviam despedido libertos, e os sujeitaram por servos e por servas.
¹² Veio, pois, a palavra do Senhor a Jeremias, da parte do Senhor, dizendo:
¹³ Assim diz o Senhor, Deus de Israel: Eu fiz aliança com vossos pais, no dia em que os tirei da terra do Egito, da casa da servidão, dizendo:
¹⁴ Ao fim de sete anos libertareis cada um a seu irmão hebreu, que te for vendido, e te houver servido seis anos, e despedi-lo-ás livre de ti; mas vossos pais não me ouviram, nem inclinaram os seus ouvidos.
¹⁵ E vos havíeis hoje arrependido, e fizestes o que é reto aos meus olhos, apregoando liberdade cada um ao seu próximo; e fizestes diante de mim uma aliança, na casa que se chama pelo meu nome;
¹⁶ Mudastes, porém, e profanastes o meu nome, e fizestes voltar cada um ao seu servo, e cada um à sua serva, os quais já tínheis despedido libertos conforme a vontade deles; e os sujeitastes, para que se vos fizessem servos e servas.
¹⁷ Portanto assim diz o Senhor: Vós não me ouvistes a mim, para apregoardes a liberdade, cada um ao seu irmão, e cada um ao seu próximo; pois eis que eu vos apregoo a liberdade, diz o Senhor, para a espada, para a pestilência, e para a fome; e farei que sejais espanto a todos os reinos da terra.
¹⁸ E entregarei os homens que transgrediram a minha aliança, que não cumpriram as palavras da aliança que fizeram diante de mim, com o bezerro, que dividiram em duas partes, e passaram pelo meio das suas porções;
¹⁹ A saber, os príncipes de Judá, e os príncipes de Jerusalém, os eunucos, e os sacerdotes, e todo o povo da terra que passou por meio das porções do bezerro;
²⁰ Entregá-los-ei, digo, na mão de seus inimigos, e na mão dos que procuram a sua morte, e os cadáveres deles servirão de alimento para as aves dos céus e para os animais da terra.
²¹ E até o rei Zedequias, rei de Judá, e seus príncipes entregarei na mão de seus inimigos e na mão dos que procuram a sua morte, a saber, na mão do exército do rei de Babilônia, que já se retirou de vós.
²² Eis que eu darei ordem, diz o Senhor, e os farei voltar a esta cidade, e pelejarão contra ela, e a tomarão, e a queimarão a fogo; e as cidades de Judá porei em assolação, de sorte que ninguém habite nelas.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual seria o fim do rei Zedequias, conforme a profecia no verso 5?",
                        opcoes: [
                            { numero: 1, texto: "Morreria em paz e seria queimado perfume para ele", correta: true },
                            { numero: 2, texto: "Morreria pela espada em batalha", correta: false },
                            { numero: 3, texto: "Seria levado ao Egito", correta: false },
                            { numero: 4, texto: "Fugiria para o deserto", correta: false }
                        ],
                        explicacao: "Jeremias 34:5 - Em paz morrerás, e como queimaram perfume a teus pais... assim o queimarão a ti.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual lei sobre escravos hebreus o povo de Jerusalém quebrou após terem feito um pacto?",
                        opcoes: [
                            { numero: 1, texto: "Libertá-los no sétimo ano", correta: true },
                            { numero: 2, texto: "Dar-lhes salários altos", correta: false },
                            { numero: 3, texto: "Não deixá-los trabalhar no sábado", correta: false },
                            { numero: 4, texto: "Ensiná-los a ler", correta: false }
                        ],
                        explicacao: "Jeremias 34:14 - Ao fim de sete anos libertareis cada um a seu irmão hebreu...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o povo fez com os escravos que haviam libertado pouco tempo antes?",
                        opcoes: [
                            { numero: 1, texto: "Fizeram-nos voltar e os sujeitaram a servidão", correta: true },
                            { numero: 2, texto: "Deram-lhes terras", correta: false },
                            { numero: 3, texto: "Expulsaram-nos da cidade", correta: false },
                            { numero: 4, texto: "Pediram-lhes perdão", correta: false }
                        ],
                        explicacao: "Jeremias 34:11 - Mas depois mudaram, e fizeram voltar os servos... e os sujeitaram a servidão.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        35: {
            titulo: "O Exemplo dos Recabitas",
            texto: ` ¹ A palavra que do Senhor veio a Jeremias, nos dias de Jeoiaquim, filho de Josias, rei de Judá, dizendo:
² Vai à casa dos recabitas, e fala com eles, e leva-os à casa do Senhor, a uma das câmaras e dá-lhes vinho a beber.
³ Então tomei a Jazanias, filho de Jeremias, filho de Habazinias, e a seus irmãos, e a todos os seus filhos, e a toda a casa dos recabitas;
⁴ E os levei à casa do Senhor, à câmara dos filhos de Hanã, filho de Jigdalias, homem de Deus, que estava junto à câmara dos príncipes, que ficava sobre a câmara de Maaseias, filho de Salum, guarda do vestíbulo;
⁵ E pus diante dos filhos da casa dos recabitas taças cheias de vinho, e copos, e disse-lhes: Bebei vinho.
⁶ Porém eles disseram: Não beberemos vinho, porque Jonadabe, filho de Recabe, nosso pai, nos ordenou, dizendo: Nunca jamais bebereis vinho, nem vós nem vossos filhos;
⁷ Não edificareis casa, nem semeareis semente, nem plantareis vinha, nem a possuireis; mas habitareis em tendas todos os vossos dias, para que vivais muitos dias sobre a face da terra, em que vós andais peregrinando.
⁸ Obedecemos, pois, à voz de Jonadabe, filho de Recabe, nosso pai, em tudo quanto nos ordenou; de maneira que não bebemos vinho em todos os nossos dias, nem nós, nem nossas mulheres, nem nossos filhos, nem nossas filhas;
⁹ Nem edificamos casas para nossa habitação; nem temos vinha, nem campo, nem semente.
¹⁰ Mas habitamos em tendas, e assim obedecemos e fazemos conforme tudo quanto nos ordenou Jonadabe, nosso pai.
¹¹ Sucedeu, porém, que, subindo Nabucodonosor, rei de Babilônia, a esta terra, dissemos: Vinde, e vamo-nos a Jerusalém, por causa do exército dos caldeus, e por causa do exército dos sírios; e assim ficamos em Jerusalém.
¹² Então veio a palavra do Senhor a Jeremias, dizendo:
¹³ Assim diz o Senhor dos Exércitos, o Deus de Israel: Vai, e dize aos homens de Judá e aos moradores de Jerusalém: Porventura nunca aceitareis instrução, para ouvirdes as minhas palavras? Diz o Senhor.
¹⁴ As palavras de Jonadabe, filho de Recabe, que ordenou a seus filhos que não bebessem vinho, foram guardadas; pois não beberam até este dia, antes obedeceram o mandamento de seu pai; a mim, porém, que vos tenho falado, madrugando e falando, não me ouvistes.
¹⁵ E enviando-os, e dizendo todos os meus servos, os profetas, madrugando, e enviando-os, e dizendo: Convertei-vos, agora, cada um do seu mau caminho, e fazei boas as vossas ações, e não sigais a outros deuses para servi-los; e assim ficareis na terra que vos dei a vós e a vossos pais; porém não inclinastes o vosso ouvido, nem me obedecestes a mim.
¹⁶ Visto que os filhos de Jonadabe, filho de Recabe, guardaram o mandamento de seu pai que ele lhes ordenou, mas este povo não me obedeceu,
¹⁷ Por isso assim diz o Senhor Deus dos Exércitos, o Deus de Israel: Eis que trarei sobre Judá, e sobre todos os moradores de Jerusalém, todo o mal que falei contra eles; pois lhes tenho falado, e não ouviram; e clamei a eles, e não responderam.
¹⁸ E à casa dos recabitas disse Jeremias: Assim diz o Senhor dos Exércitos, o Deus de Israel: Pois que obedecestes ao mandamento de Jonadabe, vosso pai, e guardastes todos os seus mandamentos, e fizestes conforme tudo quanto vos ordenou,
¹⁹ Portanto assim diz o Senhor dos Exércitos, Deus de Israel: Nunca faltará homem a Jonadabe, filho de Recabe, que esteja na minha presença todos os dias.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que os recabitas se recusaram a fazer quando Jeremias lhes ofereceu no templo?",
                        opcoes: [
                            { numero: 1, texto: "Beber vinho", correta: true },
                            { numero: 2, texto: "Comer carne", correta: false },
                            { numero: 3, texto: "Orar sentados", correta: false },
                            { numero: 4, texto: "Lutar contra Babilônia", correta: false }
                        ],
                        explicacao: "Jeremias 35:6 - Mas eles disseram: Não beberemos vinho, porque Jonadabe, filho de Recabe... nos ordenou.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual era o estilo de vida dos recabitas, conforme a ordem de seu pai?",
                        opcoes: [
                            { numero: 1, texto: "Não edificar casas, não semear e morar em tendas", correta: true },
                            { numero: 2, texto: "Construir grandes fortalezas", correta: false },
                            { numero: 3, texto: "Viver no palácio real", correta: false },
                            { numero: 4, texto: "Serem todos sacerdotes", correta: false }
                        ],
                        explicacao: "Jeremias 35:7 - Não edificareis casa, nem semeareis semente... mas habitareis em tendas todos os vossos dias.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual foi a recompensa prometida aos descendentes de Jonadabe pela sua obediência?",
                        opcoes: [
                            { numero: 1, texto: "Nunca faltaria homem que estivesse diante do Senhor", correta: true },
                            { numero: 2, texto: "Receberiam todo o ouro de Judá", correta: false },
                            { numero: 3, texto: "Seriam os novos reis", correta: false },
                            { numero: 4, texto: "Seriam levados ao Egito", correta: false }
                        ],
                        explicacao: "Jeremias 35:19 - Nunca faltará varão a Jonadabe, filho de Recabe, que assista diante da minha face todos os dias.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        36: {
            titulo: "O Rolo de Jeremias",
            texto: `¹ Sucedeu, pois, no ano quarto de Jeoiaquim, filho de Josias, rei de Judá, que veio esta palavra do Senhor a Jeremias, dizendo:
² Toma o rolo de um livro, e escreve nele todas as palavras que te tenho falado de Israel, e de Judá, e de todas as nações, desde o dia em que eu te falei, desde os dias de Josias até ao dia de hoje.
³ Porventura ouvirão os da casa de Judá todo o mal que eu intento fazer-lhes; para que cada qual se converta do seu mau caminho, e eu perdoe a sua maldade e o seu pecado.
⁴ Então Jeremias chamou a Baruque, filho de Nerias; e escreveu Baruque da boca de Jeremias no rolo de um livro todas as palavras do Senhor, que ele lhe tinha falado.
⁵ E Jeremias deu ordem a Baruque, dizendo: Eu estou encarcerado; não posso entrar na casa do Senhor.
⁶ Entra, pois, tu, e pelo rolo que escreveste da minha boca, lê as palavras do Senhor aos ouvidos do povo, na casa do Senhor, no dia de jejum; e também, aos ouvidos de todos os de Judá, que vêm das suas cidades, as lerás.
⁷ Pode ser que caia a sua súplica diante do Senhor, e se converta cada um do seu mau caminho; porque grande é a ira e o furor que o Senhor tem expressado contra este povo.
⁸ E fez Baruque, filho de Nerias, conforme tudo quanto lhe havia ordenado Jeremias, o profeta, lendo naquele livro as palavras do Senhor, na casa do Senhor.
⁹ E aconteceu, no quinto ano de Jeoiaquim, filho de Josias, rei de Judá, no mês nono, que apregoaram jejum diante do Senhor a todo o povo em Jerusalém, como também a todo o povo que vinha das cidades de Judá a Jerusalém.
¹⁰ Leu, pois, Baruque naquele livro as palavras de Jeremias, na casa do Senhor, na câmara de Gemarias, filho de Safã, o escriba, no átrio superior, à entrada da porta nova da casa do Senhor, aos ouvidos de todo o povo.
¹¹ E, ouvindo Micaías, filho de Gemarias, filho de Safã, todas as palavras do Senhor, daquele livro,
¹² Desceu à casa do rei, à câmara do escriba. E eis que todos os príncipes estavam ali assentados, a saber: Elisama, o escriba, e Delaías, filho de Semaías, e Elnatã, filho de Acbor, e Gemarias, filho de Safã, e Zedequias, filho de Hananias, e todos os outros príncipes.
¹³ E Micaías anunciou-lhes todas as palavras que ouvira, quando Baruque leu o livro, aos ouvidos do povo.
¹⁴ Então todos os príncipes mandaram Jeudi, filho de Netanias, filho de Selemias, filho de Cusi, a Baruque, para lhe dizer: O rolo que leste aos ouvidos do povo, toma-o na tua mão, e vem. E Baruque, filho de Nerias, tomou o rolo na sua mão, e foi ter com eles.
¹⁵ E disseram-lhe: Assenta-te agora, e lê-o aos nossos ouvidos. E leu Baruque aos ouvidos deles.
¹⁶ E sucedeu que, ouvindo eles todas aquelas palavras, voltaram-se temerosos uns para os outros, e disseram a Baruque: Sem dúvida alguma anunciaremos ao rei todas estas palavras.
¹⁷ E perguntaram a Baruque, dizendo: Declara-nos agora como escreveste da sua boca todas estas palavras.
¹⁸ E disse-lhes Baruque: Da sua boca ele me ditava todas estas palavras, e eu com tinta as escrevia no livro.
¹⁹ Então disseram os príncipes a Baruque: Vai, esconde-te, tu e Jeremias, e ninguém saiba onde estais.
²⁰ E foram ter com o rei ao átrio: mas depositaram o rolo na câmara de Elisama, o escriba, e anunciaram aos ouvidos do rei todas aquelas palavras.
²¹ Então enviou o rei a Jeudi, para que tomasse o rolo; e Jeudi tomou-o da câmara de Elisama, o escriba, e leu-o aos ouvidos do rei e aos ouvidos de todos os príncipes que estavam em torno do rei.
²² Ora, o rei estava assentado na casa de inverno, pelo nono mês; e diante dele estava um braseiro aceso.
²³ E sucedeu que, tendo Jeudi lido três ou quatro folhas, cortou-as com um canivete de escrivão, e lançou-as no fogo que havia no braseiro, até que todo o rolo se consumiu no fogo que estava sobre o braseiro.
²⁴ E não temeram, nem rasgaram as suas vestes, nem o rei, nem nenhum dos seus servos que ouviram todas aquelas palavras.
²⁵ E, posto que Elnatã, e Delaías, e Gemarias tivessem rogado ao rei que não queimasse o rolo, ele não lhes deu ouvidos.
²⁶ Antes deu ordem o rei a Jerameel, filho de Hamaleque, e a Seraías, filho de Azriel, e a Selemias, filho de Abdeel, que prendessem a Baruque, o escrivão, e a Jeremias, o profeta; mas o Senhor os escondera.
²⁷ Então veio a Jeremias a palavra do Senhor, depois que o rei queimara o rolo, com as palavras que Baruque escrevera da boca de Jeremias, dizendo:
²⁸ Toma ainda outro rolo, e escreve nele todas aquelas palavras que estavam no primeiro rolo, que queimou Jeoiaquim, rei de Judá.
²⁹ E a Jeoiaquim, rei de Judá, dirás: Assim diz o Senhor: Tu queimaste este rolo, dizendo: Por que escreveste nele, dizendo: Certamente virá o rei de Babilônia, e destruirá esta terra e fará cessar nela homens e animais?
³⁰ Portanto assim diz o Senhor, acerca de Jeoiaquim, rei de Judá: Não terá quem se assente sobre o trono de Davi, e será lançado o seu cadáver ao calor do dia, e à geada da noite.
³¹ E castigarei a sua iniquidade nele, e na sua descendência, e nos seus servos; e trarei sobre ele e sobre os moradores de Jerusalém, e sobre os homens de Judá, todo aquele mal que lhes tenho falado, e não ouviram.
³² Tomou, pois, Jeremias outro rolo, e deu-o a Baruque, filho de Nerias, o escrivão, o qual escreveu nele, da boca de Jeremias, todas as palavras do livro que Jeoiaquim, rei de Judá, tinha queimado no fogo; e ainda se lhes acrescentaram muitas palavras semelhantes.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem escreveu as palavras de Jeremias no rolo enquanto o profeta as ditava?",
                        opcoes: [
                            { numero: 1, texto: "Baruque, filho de Nerias", correta: true },
                            { numero: 2, texto: "Ezequiel", correta: false },
                            { numero: 3, texto: "O rei Jeoaquim", correta: false },
                            { numero: 4, texto: "Safã, o escrivão", correta: false }
                        ],
                        explicacao: "Jeremias 36:4 - Então chamou Jeremias a Baruque... e escreveu Baruque da boca de Jeremias todas as palavras do Senhor.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o rei Jeoaquim fez com o rolo após ouvir algumas colunas dele?",
                        opcoes: [
                            { numero: 1, texto: "Cortou-o com um canivete e o lançou no fogo", correta: true },
                            { numero: 2, texto: "Guardou-o na arca da aliança", correta: false },
                            { numero: 3, texto: "Mandou copiá-lo para todo o povo", correta: false },
                            { numero: 4, texto: "Começou a chorar e se arrependeu", correta: false }
                        ],
                        explicacao: "Jeremias 36:23 - E sucedeu que, tendo Jeudi lido três ou quatro colunas, cortou-o o rei com um canivete de escrivão, e lançou-o no fogo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Após o rolo ser queimado, o que o Senhor mandou Jeremias fazer?",
                        opcoes: [
                            { numero: 1, texto: "Tomar outro rolo e escrever nele todas as palavras anteriores", correta: true },
                            { numero: 2, texto: "Fugir para a Babilônia", correta: false },
                            { numero: 3, texto: "Calar-se por sete anos", correta: false },
                            { numero: 4, texto: "Lutar contra o rei", correta: false }
                        ],
                        explicacao: "Jeremias 36:28 - Toma ainda outro rolo, e escreve nele todas aquelas palavras que estavam no primeiro rolo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        37: {
            titulo: "Jeremias na Prisão",
            texto: `¹ E Zedequias, filho de Josias, a quem Nabucodonosor, rei de Babilônia, constituiu rei na terra de Judá, reinou em lugar de Conias, filho de Jeoiaquim.
² Mas nem ele, nem os seus servos, nem o povo da terra deram ouvidos às palavras do Senhor que falou pelo ministério de Jeremias, o profeta.
³ Contudo mandou o rei Zedequias a Jucal, filho de Selemias, e a Sofonias, filho de Maaseias, o sacerdote, ao profeta Jeremias, para lhe dizer: Roga agora por nós ao Senhor nosso Deus.
⁴ E entrava e saía Jeremias entre o povo, porque não o tinham posto na prisão.
⁵ E o exército de Faraó saíra do Egito; e quando os caldeus, que tinham sitiado Jerusalém, ouviram esta notícia, retiraram-se de Jerusalém.
⁶ Então veio a Jeremias, o profeta, a palavra do Senhor, dizendo:
⁷ Assim diz o Senhor, Deus de Israel: Assim direis ao rei de Judá, que vos enviou a mim para me consultar: Eis que o exército de Faraó, que saiu em vosso socorro, voltará para a sua terra no Egito.
⁸ E voltarão os caldeus, e pelejarão contra esta cidade, e a tomarão, e a queimarão a fogo.
⁹ Assim diz o Senhor: Não enganeis as vossas almas, dizendo: Sem dúvida se retirarão os caldeus de nós, pois não se retirarão.
¹⁰ Porque ainda que ferísseis a todo o exército dos caldeus, que peleja contra vós, e só ficassem deles homens feridos, cada um levantar-se-ia na sua tenda, e queimaria a fogo esta cidade.
¹¹ E sucedeu que, subindo de Jerusalém o exército dos caldeus, por causa do exército de Faraó,
¹² Saiu Jeremias de Jerusalém, a fim de ir à terra de Benjamim, para dali se separar no meio do povo.
¹³ Mas, estando ele à porta de Benjamim, achava-se ali um capitão da guarda, cujo nome era Jerias, filho de Selemias, filho de Hananias, o qual prendeu a Jeremias, o profeta, dizendo: Tu foges para os caldeus.
¹⁴ E Jeremias disse: Isso é falso, não fujo para os caldeus. Mas ele não lhe deu ouvidos; e assim Jerias prendeu a Jeremias, e o levou aos príncipes.
¹⁵ E os príncipes se iraram muito contra Jeremias, e o feriram; e puseram-no na prisão, na casa de Jônatas, o escrivão; porque a tinham transformado em cárcere.
¹⁶ Entrando, pois, Jeremias nas celas do calabouço, ali ficou muitos dias.
¹⁷ E mandou o rei Zedequias soltá-lo; e o rei lhe perguntou em sua casa, em segredo, e disse: Há porventura alguma palavra do Senhor? E disse Jeremias: Há. E disse ainda: Na mão do rei de Babilônia serás entregue.
¹⁸ Disse mais Jeremias ao rei Zedequias: Em que tenho pecado contra ti, e contra os teus servos, e contra este povo, para que me pusésseis na prisão?
¹⁹ Onde estão agora os vossos profetas, que vos profetizavam, dizendo: O rei de Babilônia não virá contra vós nem contra esta terra?
²⁰ Ora, pois, ouve agora, ó rei meu senhor: Seja aceita agora a minha súplica diante de ti, e não me deixes tornar à casa de Jônatas, o escriba, para que eu não venha a morrer ali.
²¹ Então ordenou o rei Zedequias que pusessem a Jeremias no átrio da guarda; e deram-lhe um pão cada dia, da rua dos padeiros, até que se acabou todo o pão da cidade; assim ficou Jeremias no átrio da guarda.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "De que Jeremias foi acusado quando tentava sair de Jerusalém para a terra de Benjamim?",
                        opcoes: [
                            { numero: 1, texto: "De desertar para os caldeus", correta: true },
                            { numero: 2, texto: "De roubar o templo", correta: false },
                            { numero: 3, texto: "De matar um guarda", correta: false },
                            { numero: 4, texto: "De ser um espião egípcio", correta: false }
                        ],
                        explicacao: "Jeremias 37:13 - ...estando ele à porta de Benjamim... Irias prendeu a Jeremias, dizendo: Tu foges para os caldeus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Onde os príncipes colocaram Jeremias após o açoitarem?",
                        opcoes: [
                            { numero: 1, texto: "Na casa de Jônatas, o escrivão, que tinham feito prisão", correta: true },
                            { numero: 2, texto: "No palácio do rei", correta: false },
                            { numero: 3, texto: "Em uma caverna no deserto", correta: false },
                            { numero: 4, texto: "Embaixo do altar", correta: false }
                        ],
                        explicacao: "Jeremias 37:15 - E os príncipes se iraram muito contra Jeremias... e puseram-no na prisão, na casa de Jônatas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o rei Zedequias mandou dar a Jeremias diariamente enquanto ele estava no pátio da guarda?",
                        opcoes: [
                            { numero: 1, texto: "Um pedaço de pão da rua dos padeiros", correta: true },
                            { numero: 2, texto: "Vinho e carne", correta: false },
                            { numero: 3, texto: "Mel e frutas", correta: false },
                            { numero: 4, texto: "Apenas água", correta: false }
                        ],
                        explicacao: "Jeremias 37:21 - ...e deram-lhe um pedaço de pão cada dia, da rua dos padeiros.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        38: {
            titulo: "Jeremias no Poço de Lama",
            texto: `¹ Ouviram, pois, Sefatias, filho de Matã, e Gedalias, filho de Pasur, e Jucal, filho de Selemias, e Pasur, filho de Malquias, as palavras que anunciava Jeremias a todo o povo, dizendo:
² Assim diz o Senhor: O que ficar nesta cidade morrerá à espada, de fome e de pestilência; mas o que sair aos caldeus viverá; porque a sua alma lhe será por despojo, e viverá.
³ Assim diz o Senhor: Esta cidade infalivelmente será entregue na mão do exército do rei de Babilônia, e ele a tomará.
⁴ E disseram os príncipes ao rei: Morra este homem, visto que ele assim enfraquece as mãos dos homens de guerra que restam nesta cidade, e as mãos de todo o povo, dizendo-lhes tais palavras; porque este homem não busca a paz para este povo, porém o mal.
⁵ E disse o rei Zedequias: Eis que ele está na vossa mão; porque o rei nada pode fazer contra vós.
⁶ Então tomaram a Jeremias, e o lançaram na cisterna de Malquias, filho do rei, que estava no átrio da guarda; e desceram a Jeremias com cordas; mas na cisterna não havia água, senão lama; e atolou-se Jeremias na lama.
⁷ E, ouvindo Ebede-Meleque, o etíope, um eunuco que então estava na casa do rei, que tinham posto a Jeremias na cisterna (estava, porém, o rei assentado à porta de Benjamim),
⁸ Logo Ebede-Meleque saiu da casa do rei, e falou ao rei, dizendo:
⁹ Ó rei, senhor meu, estes homens agiram mal em tudo quanto fizeram a Jeremias, o profeta, lançando-o na cisterna; decerto morrerá de fome no lugar onde se acha, pois não há mais pão na cidade.
¹⁰ Então deu ordem o rei a Ebede-Meleque, o etíope, dizendo: Toma contigo daqui trinta homens, e tira a Jeremias, o profeta, da cisterna, antes que morra.
¹¹ E tomou Ebede-Meleque os homens consigo, e foi à casa do rei, por debaixo da tesouraria, e tomou dali uns trapos velhos e rotos, e roupas velhas, e desceu-os a Jeremias na cisterna por meio de cordas.
¹² E disse Ebede-Meleque, o etíope, a Jeremias: Põe agora estes trapos velhos e rotos, já apodrecidos, nas axilas, calçando as cordas. E Jeremias assim o fez.
¹³ E puxaram a Jeremias com as cordas, e o alçaram da cisterna; e ficou Jeremias no átrio da guarda.
¹⁴ Então o rei Zedequias mandou trazer à sua presença Jeremias, o profeta, à terceira entrada da casa do Senhor; e disse o rei a Jeremias: Pergunto-te uma coisa, não me encubras nada.
¹⁵ E disse Jeremias a Zedequias: Se eu te declarar, porventura não me matarás? E se eu te aconselhar, não me ouvirás?
¹⁶ Então jurou o rei Zedequias a Jeremias, em segredo, dizendo: Vive o Senhor, que nos fez esta alma, que não te matarei nem te entregarei na mão destes homens que procuram a tua morte.
¹⁷ Então Jeremias disse a Zedequias: Assim diz o Senhor, Deus dos Exércitos, Deus de Israel: Se voluntariamente saíres aos príncipes do rei de Babilônia, então viverá a tua alma, e esta cidade não se queimará a fogo, e viverás tu e a tua casa.
¹⁸ Mas, se não saíres aos príncipes do rei de Babilônia, então será entregue esta cidade na mão dos caldeus, e queimá-la-ão a fogo, e tu não escaparás da mão deles.
¹⁹ E disse o rei Zedequias a Jeremias: Receio-me dos judeus, que se passaram para os caldeus; que estes me entreguem na mão deles, e escarneçam de mim.
²⁰ E disse Jeremias: Não te entregarão; ouve, peço-te, a voz do Senhor, conforme a qual eu te falo; e bem te irá, e viverá a tua alma.
²¹ Mas, se tu não quiseres sair, esta é a palavra que me mostrou o Senhor:
²² Eis que todas as mulheres que ficaram na casa do rei de Judá serão levadas aos príncipes do rei de Babilônia, e elas mesmas dirão: Teus pacificadores te incitaram e prevaleceram contra ti, mas agora que se atolaram os teus pés na lama, voltaram atrás.
²³ Assim que a todas as tuas mulheres e a teus filhos levarão aos caldeus, e nem tu escaparás da sua mão, antes pela mão do rei de Babilônia serás preso, e esta cidade será queimada a fogo.
²⁴ Então disse Zedequias a Jeremias: Ninguém saiba estas palavras, e não morrerás.
²⁵ E quando os príncipes, ouvindo que falei contigo, vierem a ti, e te disserem: Declara-nos agora o que disseste ao rei e o que ele te disse, não no-lo encubras, e não te mataremos;
²⁶ Então lhes dirás: Eu lancei a minha súplica diante do rei, que não me fizesse tornar à casa de Jônatas, para morrer ali.
²⁷ Vindo, pois, todos os príncipes a Jeremias, e interrogando-o, declarou-lhes todas as palavras que o rei lhe havia ordenado; e calados o deixaram, porque o assunto não foi revelado.
²⁸ E ficou Jeremias no átrio da guarda, até o dia em que Jerusalém foi tomada, e ainda ali estava quando Jerusalém foi tomada.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde os príncipes lançaram Jeremias para que ele morresse de fome?",
                        opcoes: [
                            { numero: 1, texto: "Em uma cisterna que tinha apenas lama", correta: true },
                            { numero: 2, texto: "Fora dos muros da cidade", correta: false },
                            { numero: 3, texto: "Em uma fornalha de fogo", correta: false },
                            { numero: 4, texto: "No mar morto", correta: false }
                        ],
                        explicacao: "Jeremias 38:6 - E lançaram-no na cisterna de Malquias... e na cisterna não havia água, senão lama; e Jeremias atolou-se na lama.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem foi o etíope que intercedeu por Jeremias diante do rei para tirá-lo da cisterna?",
                        opcoes: [
                            { numero: 1, texto: "Ebede-Meleque", correta: true },
                            { numero: 2, texto: "Ciro", correta: false },
                            { numero: 3, texto: "Baruque", correta: false },
                            { numero: 4, texto: "Guezi", correta: false }
                        ],
                        explicacao: "Jeremias 38:7-8 - E ouviu Ebede-Meleque, o etíope... que tinham posto a Jeremias na cisterna... e falou ao rei.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jeremias disse que aconteceria a Zedequias se ele se rendesse aos príncipes da Babilônia?",
                        opcoes: [
                            { numero: 1, texto: "Viveria ele e sua casa, e a cidade não seria queimada", correta: true },
                            { numero: 2, texto: "Seria morto imediatamente", correta: false },
                            { numero: 3, texto: "Seria coroado rei de todo o mundo", correta: false },
                            { numero: 4, texto: "Fugiria para o Egito com segurança", correta: false }
                        ],
                        explicacao: "Jeremias 38:17 - Se voluntariamente saíres aos príncipes do rei de Babilônia, então viverá a tua alma, e esta cidade não se queimará.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        39: {
            titulo: "A Queda de Jerusalém",
            texto: ` ¹ No ano nono de Zedequias, rei de Judá, no décimo mês, veio Nabucodonosor, rei de Babilônia, e todo o seu exército, contra Jerusalém, e a cercaram.
² No ano undécimo de Zedequias, no quarto mês, aos nove do mês, fez-se uma brecha na cidade.
³ Entraram nela todos os príncipes do rei de Babilônia, e pararam na porta do meio, a saber: Nergal-Sarezer, Sangar-Nebo, Sarsequim, Rabe-Saris, Nergal-Sarezer, Rabe-Mague, e todos os outros príncipes do rei de Babilônia.
⁴ E sucedeu que, vendo-os Zedequias, rei de Judá, e todos os homens de guerra, fugiram, saindo de noite da cidade, pelo caminho do jardim do rei, pela porta que está entre os dois muros; e seguiram pelo caminho da campina.
⁵ Mas o exército dos caldeus os perseguiu, e alcançou a Zedequias nas campinas de Jericó; e eles o prenderam, e fizeram-no subir a Nabucodonosor, rei de Babilônia, a Ribla, na terra de Hamate, e o rei o sentenciou.
⁶ E o rei de Babilônia matou em Ribla os filhos de Zedequias, diante dos seus olhos; também matou o rei de Babilônia a todos os nobres de Judá.
⁷ E cegou os olhos de Zedequias, e o atou com duas cadeias de bronze, para levá-lo a Babilônia.
⁸ E os caldeus incendiaram a casa do rei e as casas do povo, e derrubaram os muros de Jerusalém.
⁹ E o restante do povo, que ficou na cidade, e os desertores que se tinham passado para ele, e o restante do povo que ficou, Nebuzaradã, capitão da guarda, levou cativo para a Babilônia.
¹⁰ Porém os pobres dentre o povo, que não tinham nada, Nebuzaradã, capitão da guarda, deixou na terra de Judá; e deu-lhes vinhas e campos naquele dia.
¹¹ Mas Nabucodonosor, rei de Babilônia, havia ordenado acerca de Jeremias, a Nebuzaradã, capitão da guarda, dizendo:
¹² Toma-o, e põe sobre ele os teus olhos, e não lhe faças nenhum mal; antes como ele te disser, assim procederás com ele.
¹³ Por isso mandou Nebuzaradã, capitão da guarda, e Nebusazbã, Rabe-Saris, Nergal-Sarezer, Rabe-Mague, e todos os príncipes do rei de Babilônia,
¹⁴ Mandaram retirar a Jeremias do átrio da guarda, e o entregaram a Gedalias, filho de Aicão, filho de Safã, para que o levassem à casa; e ele habitou entre o povo.
¹⁵ Ora, tinha vindo a Jeremias a palavra do Senhor, estando ele ainda encarcerado no átrio da guarda, dizendo:
¹⁶ Vai, e fala a Ebede-Meleque, o etíope, dizendo: Assim diz o Senhor dos Exércitos, Deus de Israel: Eis que eu trarei as minhas palavras sobre esta cidade para mal e não para bem; e cumprir-se-ão diante de ti naquele dia.
¹⁷ A ti, porém, eu livrarei naquele dia, diz o Senhor, e não serás entregue na mão dos homens, a quem temes.
¹⁸ Porque certamente te livrarei, e não cairás à espada; mas a tua alma terás por despojo, porquanto confiaste em mim, diz o Senhor.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que aconteceu com os olhos do rei Zedequias após ele ser capturado?",
                        opcoes: [
                            { numero: 1, texto: "Foram curados por Deus", correta: false },
                            { numero: 2, texto: "O rei de Babilônia mandou cegá-lo", correta: true },
                            { numero: 3, texto: "Ele ficou cego de tanto chorar", correta: false },
                            { numero: 4, texto: "Foram cobertos com ouro", correta: false }
                        ],
                        explicacao: "Jeremias 39:7 - E cegou os olhos de Zedequias, e o atou com duas cadeias de bronze, para levá-lo à Babilônia.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Nabucodonosor mandou fazer com os muros de Jerusalém?",
                        opcoes: [
                            { numero: 1, texto: "Que fossem derrubados", correta: true },
                            { numero: 2, texto: "Que fossem pintados de azul", correta: false },
                            { numero: 3, texto: "Que fossem aumentados", correta: false },
                            { numero: 4, texto: "Que fossem guardados por anjos", correta: false }
                        ],
                        explicacao: "Jeremias 39:8 - E os caldeus queimaram a casa do rei... e derrubaram os muros de Jerusalém.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual ordem Nabucodonosor deu a Nabuzaradã sobre Jeremias?",
                        opcoes: [
                            { numero: 1, texto: "Para matá-lo", correta: false },
                            { numero: 2, texto: "Para não lhe fazer mal e cuidar dele", correta: true },
                            { numero: 3, texto: "Para levá-lo em correntes de ferro", correta: false },
                            { numero: 4, texto: "Para ignorá-lo completamente", correta: false }
                        ],
                        explicacao: "Jeremias 39:12 - Toma-o, e põe sobre ele os teus olhos, e não lhe faças mal algum; mas faze-lhe como ele te disser.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        40: {
            titulo: "Jeremias em Judá com Gedalias",
            texto: ` ¹ A palavra que veio a Jeremias da parte do Senhor, depois que Nebuzaradã, capitão da guarda, o deixara ir de Ramá, quando o tomou, estando ele atado com cadeias no meio de todos os do cativeiro de Jerusalém e de Judá, que foram levados cativos para Babilônia.
² Tomou o capitão da guarda a Jeremias, e disse-lhe: O Senhor teu Deus pronunciou este mal, contra este lugar.
³ E o Senhor o trouxe, e fez como havia falado; porque pecastes contra o Senhor, e não obedecestes à sua voz, portanto vos sucedeu isto.
⁴ Agora, pois, eis que te soltei hoje das cadeias que estavam sobre as tuas mãos. Se te apraz vir comigo para Babilônia, vem, e eu cuidarei de ti, mas se não te apraz vir comigo para Babilônia, deixa de vir. Olha, toda a terra está diante de ti; para onde parecer bom e reto aos teus olhos ir, para ali vai.
⁵ Mas, como ele ainda não tinha voltado, disse-lhe: Volta a Gedalias, filho de Aicão, filho de Safã, a quem o rei de Babilônia pôs sobre as cidades de Judá, e habita com ele no meio do povo; ou se para qualquer outra parte te aprouver ir, vai. E deu-lhe o capitão da guarda sustento para o caminho, e um presente, e o deixou ir.
⁶ Assim veio Jeremias a Gedalias, filho de Aicão, a Mizpá; e habitou com ele no meio do povo que havia ficado na terra.
⁷ Ouvindo, pois, todos os capitães dos exércitos, que estavam no campo, eles e os seus homens, que o rei de Babilônia tinha nomeado a Gedalias, filho de Aicão, governador da terra, e que lhe havia confiado os homens, e as mulheres, e os meninos, e os mais pobres da terra, que não foram levados cativos a Babilônia,
⁸ Vieram ter com Gedalias, a Mizpá; a saber: Ismael, filho de Netanias, e Joanã e Jônatas, filhos de Careá, e Seraías, filho de Tanumete, e os filhos de Efai, o netofatita, e Jezanias, filho de um maacatita, eles e os seus homens.
⁹ E jurou Gedalias, filho de Aicão, filho de Safã, a eles e aos seus homens, dizendo: Não temais servir aos caldeus; ficai na terra, e servi o rei de Babilônia, e bem vos irá.
¹⁰ Quanto a mim, eis que habito em Mizpá, para estar às ordens dos caldeus que vierem a nós; e vós recolhei o vinho, e as frutas de verão, e o azeite, e colocai-os nos vossos vasos, e habitai nas vossas cidades, que tomastes.
¹¹ Do mesmo modo todos os judeus que estavam em Moabe, e entre os filhos de Amom, e em Edom, e os que havia em todas aquelas terras, ouviram que o rei de Babilônia havia deixado alguns em Judá, e que havia posto sobre eles a Gedalias, filho de Aicão, filho de Safã,
¹² Então voltaram todos os judeus de todos os lugares, para onde foram lançados, e vieram à terra de Judá, a Gedalias, a Mizpá; e recolheram vinho e frutas do verão com muita abundância.
¹³ Joanã, filho de Careá, e todos os capitães dos exércitos, que estavam no campo, vieram a Gedalias, a Mizpá.
¹⁴ E disseram-lhe: Bem sabes que Baalis, rei dos filhos de Amom, enviou a Ismael, filho de Netanias, para tirar-te a vida. Mas, Gedalias, filho de Aicão, não lhes deu crédito.
¹⁵ Todavia Joanã, filho de Careá, falou a Gedalias em segredo, em Mizpá, dizendo: Irei agora, e ferirei a Ismael, filho de Netanias, sem que ninguém o saiba; por que razão te tiraria ele a vida, de modo que todos os judeus, que se têm congregado a ti, fossem dispersos, e perecesse o restante de Judá?
¹⁶ Mas disse Gedalias, filho de Aicão, a Joanã, filho de Careá: Não faças tal coisa; porque falas falsamente contra Ismael.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde Jeremias decidiu ficar após ser liberto por Nabuzaradã?",
                        opcoes: [
                            { numero: 1, texto: "Foi para a Babilônia morar no palácio", correta: false },
                            { numero: 2, texto: "Ficou com Gedalias, em Mispa, entre o povo que restou", correta: true },
                            { numero: 3, texto: "Fugiu para o deserto", correta: false },
                            { numero: 4, texto: "Foi para o Egito imediatamente", correta: false }
                        ],
                        explicacao: "Jeremias 40:6 - Foi-se, pois, Jeremias a Gedalias... e habitou com ele no meio do povo que ficara na terra.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem foi nomeado pelo rei de Babilônia como governador sobre as cidades de Judá?",
                        opcoes: [
                            { numero: 1, texto: "Baruque", correta: false },
                            { numero: 2, texto: "Gedalias, filho de Aicão", correta: true },
                            { numero: 3, texto: "Ismael", correta: false },
                            { numero: 4, texto: "Joanan", correta: false }
                        ],
                        explicacao: "Jeremias 40:5 - ...Gedalias, filho de Aicão... o qual o rei de Babilônia pôs sobre as cidades de Judá.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual aviso Joanan deu a Gedalias sobre Ismael, filho de Netanias?",
                        opcoes: [
                            { numero: 1, texto: "Que ele trazia presentes", correta: false },
                            { numero: 2, texto: "Que ele vinha para matá-lo", correta: true },
                            { numero: 3, texto: "Que ele queria ser seu servo", correta: false },
                            { numero: 4, texto: "Que ele estava doente", correta: false }
                        ],
                        explicacao: "Jeremias 40:14 - ...Não sabes tu que Baalis... enviou a Ismael... para te tirar a vida?",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        41: {
            titulo: "O Assassinato de Gedalias",
            texto: ` ¹ Sucedeu, porém, no mês sétimo, que veio Ismael, filho de Netanias, filho de Elisama, da descendência real, e com ele dez homens, príncipes do rei, a Gedalias, filho de Aicão, a Mizpá; e comeram pão juntos ali em Mizpá.
² E levantou-se Ismael, filho de Netanias, com os dez homens que estavam com ele, e feriram à espada a Gedalias, filho de Aicão, filho de Safã, matando assim aquele que o rei de Babilônia havia posto por governador sobre a terra.
³ Também matou Ismael a todos os judeus que com ele, com Gedalias, estavam em Mizpá, como também aos caldeus, homens de guerra, que se achavam ali.
⁴ Sucedeu, pois, no dia seguinte, depois que ele matara a Gedalias, sem ninguém o saber,
⁵ Que vieram homens de Siquém, de Siló, e de Samaria; oitenta homens, com a barba rapada, e as vestes rasgadas, e retalhando-se; e trazendo nas suas mãos ofertas e incenso, para levarem à casa do Senhor.
⁶ E, saindo-lhes ao encontro Ismael, filho de Netanias, desde Mizpá, ia chorando; e sucedeu que, encontrando-os lhes disse: Vinde a Gedalias, filho de Aicão.
⁷ Sucedeu, porém, que, entrando eles até ao meio da cidade, matou-os Ismael, filho de Netanias, e os lançou num poço, ele e os homens que estavam com ele.
⁸ Mas houve entre eles dez homens que disseram a Ismael: Não nos mates, porque temos, no campo, tesouros, trigo, cevada, azeite e mel. E ele por isso os deixou, e não os matou entre seus irmãos.
⁹ E o poço em que Ismael lançou todos os cadáveres dos homens que matou por causa de Gedalias é o mesmo que fez o rei Asa, por causa de Baasa, rei de Israel; foi esse mesmo que Ismael, filho de Netanias, encheu de mortos.
¹⁰ E Ismael levou cativo a todo o restante do povo que estava em Mizpá, isto é, as filhas do rei, e todo o povo que ficara em Mizpá, que Nebuzaradã, capitão da guarda, havia confiado a Gedalias, filho de Aicão; e levou-os cativos Ismael, filho de Netanias, e se foi para passar aos filhos de Amom.
¹¹ Ouvindo, pois, Joanã, filho de Careá, e todos os capitães dos exércitos que estavam com ele, todo o mal que havia feito Ismael, filho de Netanias,
¹² Tomaram todos os seus homens, e foram pelejar contra Ismael, filho de Netanias; e acharam-no ao pé das grandes águas que há em Gibeom.
¹³ E aconteceu que, vendo todo o povo, que estava com Ismael, a Joanã, filho de Careá, e a todos os capitães dos exércitos, que vinham com ele, se alegrou.
¹⁴ E todo o povo que Ismael levara cativo de Mizpá virou as costas, e voltou, e foi para Joanã, filho de Careá.
¹⁵ Mas Ismael, filho de Netanias, escapou com oito homens de diante de Joanã, e se foi para os filhos de Amom.
¹⁶ Então tomou Joanã, filho de Careá, e todos os capitães dos exércitos que estavam com ele, a todo o restante do povo que ele havia recobrado de Ismael, filho de Netanias, desde Mizpá, depois de haver matado a Gedalias, filho de Aicão, isto é, aos homens poderosos de guerra, e às mulheres, e aos meninos, e aos eunucos que havia recobrado de Gibeom.
¹⁷ E partiram, indo habitar em Gerute-Quimã, que está perto de Belém, para dali irem e entrarem no Egito,
¹⁸ Por causa dos caldeus; porque os temiam, por ter Ismael, filho de Netanias, matado a Gedalias, filho de Aicão, a quem o rei de Babilônia tinha feito governador sobre a terra.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Ismael fez com Gedalias enquanto comiam pão juntos em Mispa?",
                        opcoes: [
                            { numero: 1, texto: "Fez uma aliança de paz", correta: false },
                            { numero: 2, texto: "Levantou-se e feriu-o à espada, matando-o", correta: true },
                            { numero: 3, texto: "Pediu-lhe dinheiro", correta: false },
                            { numero: 4, texto: "Ensinou-lhe a lei", correta: false }
                        ],
                        explicacao: "Jeremias 41:2 - Levantou-se Ismael... e feriu a Gedalias... matando-o.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Ismael fez com os oitenta homens que vinham de Siquém e Samaria?",
                        opcoes: [
                            { numero: 1, texto: "Matou-os e os lançou em uma cisterna", correta: true },
                            { numero: 2, texto: "Deu-lhes comida e água", correta: false },
                            { numero: 3, texto: "Levou-os para o templo", correta: false },
                            { numero: 4, texto: "Mandou-os de volta para casa", correta: false }
                        ],
                        explicacao: "Jeremias 41:7 - ...Ismael, filho de Netanias, os matou, e os lançou no meio da cisterna.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Para onde o povo estava planejando fugir por medo dos caldeus?",
                        opcoes: [
                            { numero: 1, texto: "Para o Egito", correta: true },
                            { numero: 2, texto: "Para a Babilônia", correta: false },
                            { numero: 3, texto: "Para o Líbano", correta: false },
                            { numero: 4, texto: "Para a Síria", correta: false }
                        ],
                        explicacao: "Jeremias 41:17 - E foram, e habitaram em Gerute-Quimã... para irem ao Egito.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        42: {
            titulo: "O Conselho de Jeremias Contra a Ida ao Egito",
            texto: ` ¹ Então chegaram todos os capitães dos exércitos, e Joanã, filho de Careá, e Jezanias, filho de Hosaías, e todo o povo, desde o menor até ao maior,
² E disseram a Jeremias, o profeta: Aceita agora a nossa súplica diante de ti, e roga ao Senhor teu Deus, por nós e por todo este remanescente; porque de muitos restamos uns poucos, como nos veem os teus olhos;
³ Para que o Senhor teu Deus nos ensine o caminho por onde havemos de andar e aquilo que havemos de fazer.
⁴ E disse-lhes Jeremias, o profeta: Eu vos tenho ouvido; eis que orarei ao Senhor vosso Deus conforme as vossas palavras; e seja o que for que o Senhor vos responder eu vo-lo declararei; não vos ocultarei uma só palavra.
⁵ Então eles disseram a Jeremias: Seja o Senhor entre nós testemunha verdadeira e fiel, se não fizermos conforme toda a palavra com que te enviar a nós o Senhor teu Deus.
⁶ Seja ela boa, ou seja má, à voz do Senhor nosso Deus, a quem te enviamos, obedeceremos, para que nos suceda bem, obedecendo à voz do Senhor nosso Deus.
⁷ E sucedeu que ao fim de dez dias veio a palavra do Senhor a Jeremias.
⁸ Então chamou a Joanã, filho de Careá, e a todos os capitães dos exércitos, que havia com ele, e a todo o povo, desde o menor até ao maior,
⁹ E disse-lhes: Assim diz o Senhor, Deus de Israel, a quem me enviastes, para apresentar a vossa súplica diante dele:
¹⁰ Se de boa mente ficardes nesta terra, então vos edificarei, e não vos derrubarei; e vos plantarei, e não vos arrancarei; porque estou arrependido do mal que vos tenho feito.
¹¹ Não temais o rei de Babilônia, a quem vós temeis; não o temais, diz o Senhor, porque eu sou convosco, para vos salvar e para vos livrar da sua mão.
¹² E vos concederei misericórdia, para que ele tenha misericórdia de vós, e vos faça voltar à vossa terra.
¹³ Mas se vós disserdes: Não ficaremos nesta terra, não obedecendo à voz do Senhor vosso Deus,
¹⁴ Dizendo: Não, antes iremos à terra do Egito, onde não veremos guerra, nem ouviremos som de trombeta, nem teremos fome de pão, e ali ficaremos,
¹⁵ Nesse caso ouvi a palavra do Senhor, ó remanescente de Judá: Assim diz o Senhor dos Exércitos, Deus de Israel: Se vós absolutamente propuserdes a entrar no Egito, e entrardes para lá habitar,
¹⁶ Acontecerá que a espada que vós temeis vos alcançará ali na terra do Egito, e a fome que vós receais vos seguirá de perto no Egito, e ali morrereis.
¹⁷ Assim será com todos os homens que puseram os seus rostos para entrarem no Egito, a fim de lá habitarem: morrerão à espada, e de fome, e de peste; e deles não haverá quem reste e escape do mal que eu farei vir sobre eles.
¹⁸ Porque assim diz o Senhor dos Exércitos, Deus de Israel: Como se derramou a minha ira e a minha indignação sobre os habitantes de Jerusalém, assim se derramará a minha indignação sobre vós, quando entrardes no Egito; e sereis objeto de maldição, e de espanto, e de execração, e de opróbrio, e não vereis mais este lugar.
¹⁹ Falou o Senhor acerca de vós, ó remanescente de Judá! Não entreis no Egito; tende por certo que hoje testifiquei contra vós.
²⁰ Porque vos enganastes a vós mesmos, pois me enviastes ao Senhor vosso Deus, dizendo: Ora por nós ao Senhor nosso Deus; e conforme tudo o que disser o Senhor nosso Deus, declara-no-lo assim, e o faremos.
²¹ E vo-lo tenho declarado hoje; mas não destes ouvidos à voz do Senhor vosso Deus, em coisa alguma pela qual ele me enviou a vós.
²² Agora, pois, sabei por certo que morrereis à espada, de fome e de peste no mesmo lugar onde desejais ir, para lá morardes.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o povo pediu que Jeremias fizesse por eles após a morte de Gedalias?",
                        opcoes: [
                            { numero: 1, texto: "Que orasse ao Senhor para saber o caminho que deviam seguir", correta: true },
                            { numero: 2, texto: "Que os liderasse na guerra", correta: false },
                            { numero: 3, texto: "Que fugisse com eles", correta: false },
                            { numero: 4, texto: "Que pedisse ajuda à Babilônia", correta: false }
                        ],
                        explicacao: "Jeremias 42:3 - Para que o Senhor teu Deus nos anuncie o caminho por onde devemos andar e a coisa que devemos fazer.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual foi a resposta do Senhor sobre ficarem na terra de Judá?",
                        opcoes: [
                            { numero: 1, texto: "Se ficarem, Ele os edificaria e não os destruiria", correta: true },
                            { numero: 2, texto: "Que deviam ir para o Egito rapidamente", correta: false },
                            { numero: 3, texto: "Que todos seriam mortos ali", correta: false },
                            { numero: 4, texto: "Que deveriam se esconder em cavernas", correta: false }
                        ],
                        explicacao: "Jeremias 42:10 - Se voluntariamente ficardes nesta terra, então vos edificarei, e não vos derrubarei.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceria se eles teimassem em ir para o Egito?",
                        opcoes: [
                            { numero: 1, texto: "A espada, a fome e a peste os alcançariam ali", correta: true },
                            { numero: 2, texto: "Seriam a nação mais rica do mundo", correta: false },
                            { numero: 3, texto: "Viveriam em paz por muitos anos", correta: false },
                            { numero: 4, texto: "O Faraó os tornaria príncipes", correta: false }
                        ],
                        explicacao: "Jeremias 42:16 - Acontecerá que a espada que vós temeis ali vos alcançará na terra do Egito.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        43: {
            titulo: "A Fuga para o Egito",
            texto: ` ¹ E sucedeu que, acabando Jeremias de falar a todo o povo todas as palavras do Senhor seu Deus, com as quais o Senhor seu Deus lho havia enviado, para que lhes dissesse todas estas palavras,
² Então falaram Azarias, filho de Hosaías, e Joanã, filho de Careá, e todos os homens soberbos, dizendo a Jeremias: Tu dizes mentiras; o Senhor nosso Deus não te enviou a dizer: Não entreis no Egito, para ali habitar;
³ Mas Baruque, filho de Nerias, te incita contra nós, para entregar-nos na mão dos caldeus, para nos matarem, ou para nos levarem cativos para Babilônia.
⁴ Não obedeceu, pois, Joanã, filho de Careá, nem nenhum de todos os capitães dos exércitos, nem o povo todo, à voz do Senhor, para ficarem na terra de Judá.
⁵ Antes tomou Joanã, filho de Careá, e todos os capitães dos exércitos a todo o restante de Judá, que havia voltado dentre todas as nações, para onde haviam sido lançados, para morarem na terra de Judá;
⁶ Aos homens, e às mulheres, e aos meninos, e às filhas do rei, e a toda a alma que Nebuzaradã, capitão da guarda, deixara com Gedalias, filho de Aicão, filho de Safã; como também a Jeremias, o profeta, e a Baruque, filho de Nerias;
⁷ E entraram na terra do Egito, porque não obedeceram à voz do Senhor; e vieram até Tafnes.
⁸ Então veio a palavra do Senhor a Jeremias, em Tafnes, dizendo:
⁹ Toma na tua mão pedras grandes, e esconde-as no barro, no forno que está à entrada da casa de Faraó, em Tafnes, perante os olhos dos homens de Judá,
¹⁰ E dize-lhes: Assim diz o Senhor dos Exércitos, Deus de Israel: Eis que eu enviarei, e tomarei a Nabucodonosor, rei de Babilônia, meu servo, e porei o seu trono sobre estas pedras que escondi; e ele estenderá a sua tenda real sobre elas.
¹¹ E virá, e ferirá a terra do Egito; entregando para a morte, quem é para a morte; e quem é para o cativeiro, para o cativeiro; e quem é para a espada, para a espada.
¹² E lançarei fogo às casas dos deuses do Egito, e queimá-los-á, e levá-los-á cativos; e vestir-se-á da terra do Egito, como veste o pastor a sua roupa, e sairá dali em paz.
¹³ E quebrará as estátuas de Bete-Semes, que está na terra do Egito; e as casas dos deuses do Egito queimará a fogo.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem os homens soberbos acusaram de incitar Jeremias a não deixá-los ir ao Egito?",
                        opcoes: [
                            { numero: 1, texto: "Baruque, filho de Nerias", correta: true },
                            { numero: 2, texto: "O rei de Babilônia", correta: false },
                            { numero: 3, texto: "Ebede-Meleque", correta: false },
                            { numero: 4, texto: "Os sacerdotes de Judá", correta: false }
                        ],
                        explicacao: "Jeremias 43:3 - Mas Baruque, filho de Nerias, te incita contra nós, para nos entregares nas mãos dos caldeus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Para qual cidade do Egito o povo levou Jeremias e Baruque?",
                        opcoes: [
                            { numero: 1, texto: "Alexandria", correta: false },
                            { numero: 2, texto: "Tafnes", correta: true },
                            { numero: 3, texto: "Cairo", correta: false },
                            { numero: 4, texto: "Memphis", correta: false }
                        ],
                        explicacao: "Jeremias 43:7 - E entraram na terra do Egito... e chegaram até Tafnes.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jeremias deveria esconder na entrada da casa de Faraó em Tafnes?",
                        opcoes: [
                            { numero: 1, texto: "Grandes pedras cobertas com argamassa", correta: true },
                            { numero: 2, texto: "Um rolo de pergaminho", correta: false },
                            { numero: 3, texto: "Sua capa de profeta", correta: false },
                            { numero: 4, texto: "Moedas de prata", correta: false }
                        ],
                        explicacao: "Jeremias 43:9 - Toma na tua mão pedras grandes, e esconde-as com argamassa no telhal... à entrada da casa de Faraó em Tafnes.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        44: {
            titulo: "Julgamento dos Judeus no Egito",
            texto: `¹ A palavra que veio a Jeremias, acerca de todos os judeus, habitantes da terra do Egito, que habitavam em Migdol, e em Tafnes, e em Nofe, e na terra de Patros, dizendo:
² Assim diz o Senhor dos Exércitos, Deus de Israel: Vós vistes todo o mal que fiz vir sobre Jerusalém, e sobre todas as cidades de Judá; e eis que elas são hoje uma desolação, e ninguém habita nelas;
³ Por causa da maldade que fizeram, para me irarem, indo queimar incenso, e servir a deuses estranhos, que nunca conheceram, nem eles, nem vós, nem vossos pais.
⁴ E eu vos enviei todos os meus servos, os profetas, madrugando e enviando a dizer: Ora, não façais esta coisa abominável que odeio.
⁵ Mas eles não escutaram, nem inclinaram os seus ouvidos, para se converterem da sua maldade, para não queimarem incenso a outros deuses.
⁶ Derramou-se, pois, a minha indignação e a minha ira, e acendeu-se nas cidades de Judá, e nas ruas de Jerusalém, e elas tornaram-se em deserto e em desolação, como hoje se vê.
⁷ Agora, pois, assim diz o Senhor, Deus dos Exércitos, Deus de Israel: Por que fazeis vós tão grande mal contra as vossas almas, para vos desarraigardes, ao homem e à mulher, à criança e ao que mama, do meio de Judá, a fim de não deixardes remanescente algum;
⁸ Irando-me com as obras de vossas mãos, queimando incenso a deuses estranhos na terra do Egito, aonde vós entrastes para lá habitar; para que a vós mesmos vos desarraigueis, e para que sirvais de maldição, e de opróbrio entre todas as nações da terra?
⁹ Esquecestes já as maldades de vossos pais, e as maldades dos reis de Judá, e as maldades de suas mulheres, e as vossas maldades, e as maldades de vossas mulheres, que cometeram na terra de Judá, e nas ruas de Jerusalém?
¹⁰ Não se humilharam até ao dia de hoje, nem temeram, nem andaram na minha lei, nem nos meus estatutos, que pus diante de vós e diante de vossos pais.
¹¹ Portanto assim diz o Senhor dos Exércitos, Deus de Israel: Eis que eu ponho o meu rosto contra vós para mal, e para desarraigar a todo o Judá.
¹² E tomarei os que restam de Judá, os quais puseram os seus rostos para entrarem na terra do Egito, para lá habitar e todos eles serão consumidos na terra do Egito; cairão à espada, e de fome morrerão; consumir-se-ão, desde o menor até ao maior; à espada e de fome morrerão; e servirão de execração, e de espanto, e de maldição, e de opróbrio.
¹³ Porque castigarei os que habitam na terra do Egito, como castiguei Jerusalém, com a espada, com a fome e com a peste.
¹⁴ De maneira que da parte remanescente de Judá, que entrou na terra do Egito, para lá habitar, não haverá quem escape e fique para tornar à terra de Judá, à qual eles suspiram voltar para nela morar; porém não tornarão senão uns fugitivos.
¹⁵ Então responderam a Jeremias todos os homens que sabiam que suas mulheres queimavam incenso a deuses estranhos, e todas as mulheres que estavam presentes em grande multidão, como também todo o povo que habitava na terra do Egito, em Patros, dizendo:
¹⁶ Quanto à palavra que nos anunciaste em nome do Senhor, não obedeceremos a ti;
¹⁷ Mas certamente cumpriremos toda a palavra que saiu da nossa boca, queimando incenso à rainha dos céus, e oferecendo-lhe libações, como nós e nossos pais, nossos reis e nossos príncipes, temos feito, nas cidades de Judá, e nas ruas de Jerusalém; e então tínhamos fartura de pão, e andávamos alegres, e não víamos mal algum.
¹⁸ Mas desde que cessamos de queimar incenso à rainha dos céus, e de lhe oferecer libações, tivemos falta de tudo, e fomos consumidos pela espada e pela fome.
¹⁹ E quando nós queimávamos incenso à rainha dos céus, e lhe oferecíamos libações, acaso lhe fizemos bolos, para a adorar, e oferecemos-lhe libações sem nossos maridos?
²⁰ Então disse Jeremias a todo o povo, aos homens e às mulheres, e a todo o povo que lhe havia dado esta resposta, dizendo:
²¹ Porventura não se lembrou o Senhor, e não lhe veio ao coração o incenso que queimastes nas cidades de Judá e nas ruas de Jerusalém, vós e vossos pais, vossos reis e vossos príncipes, como também o povo da terra?
²² De maneira que o Senhor não podia por mais tempo sofrer a maldade das vossas ações, as abominações que cometestes; por isso se tornou a vossa terra em desolação, e em espanto, e em maldição, sem habitantes, como hoje se vê.
²³ Porque queimastes incenso, e porque pecastes contra o Senhor, e não obedecestes à voz do Senhor, e na sua lei, e nos seus estatutos, e nos seus testemunhos não andastes, por isso vos sucedeu este mal, como se vê neste dia.
²⁴ Disse mais Jeremias a todo o povo e a todas as mulheres: Ouvi a palavra do Senhor, vós, todo o Judá, que estais na terra do Egito.
²⁵ Assim fala o Senhor dos Exércitos, Deus de Israel, dizendo: Vós e vossas mulheres não somente falastes por vossa boca, senão também o cumpristes por vossas mãos, dizendo: Certamente cumpriremos os nossos votos que fizemos de queimar incenso à rainha dos céus e de lhe oferecer libações; confirmai, pois, os vossos votos, e perfeitamente cumpri-os.
²⁶ Portanto ouvi a palavra do Senhor, todo o Judá, que habitais na terra do Egito: Eis que eu juro pelo meu grande nome, diz o Senhor, que nunca mais será pronunciado o meu nome pela boca de nenhum homem de Judá em toda a terra do Egito dizendo: Vive o Senhor Deus!
²⁷ Eis que velarei sobre eles para mal, e não para bem; e serão consumidos todos os homens de Judá, que estão na terra do Egito, pela espada e pela fome, até que de todo se acabem.
²⁸ E os que escaparem da espada voltarão da terra do Egito à terra de Judá, poucos em número; e todo o restante de Judá, que entrou na terra do Egito, para habitar ali, saberá se subsistirá a minha palavra ou a sua.
²⁹ E isto vos servirá de sinal, diz o Senhor, que eu vos castigarei neste lugar, para que saibais que certamente subsistirão as minhas palavras contra vós para mal.
³⁰ Assim diz o Senhor: Eis que eu darei Faraó-Hofra, rei do Egito, na mão de seus inimigos, e na mão dos que procuram a sua morte; como entreguei Zedequias, rei de Judá, na mão de Nabucodonosor, rei de Babilônia, seu inimigo, e que procurava a sua morte.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "A quem o povo atribuía a fartura que tinham no passado, voltando a adorar agora no Egito?",
                        opcoes: [
                            { numero: 1, texto: "À Rainha dos Céus", correta: true },
                            { numero: 2, texto: "Aos deuses do Egito", correta: false },
                            { numero: 3, texto: "Ao Sol e à Lua", correta: false },
                            { numero: 4, texto: "Aos seus ancestrais", correta: false }
                        ],
                        explicacao: "Jeremias 44:17 - ...queimando incenso à rainha dos céus... porque então tínhamos fartura de pão, e estávamos bem.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual seria o sinal de que a palavra do Senhor contra o povo no Egito se cumpriria?",
                        opcoes: [
                            { numero: 1, texto: "A entrega do Faraó Hofra nas mãos de seus inimigos", correta: true },
                            { numero: 2, texto: "Um eclipse solar", correta: false },
                            { numero: 3, texto: "A seca do rio Nilo", correta: false },
                            { numero: 4, texto: "Um grande terremoto", correta: false }
                        ],
                        explicacao: "Jeremias 44:30 - Eis que eu entregarei o Faraó Hofra, rei do Egito, na mão de seus inimigos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem sobreviveria e voltaria da terra do Egito para Judá?",
                        opcoes: [
                            { numero: 1, texto: "Apenas um pequeno número que escapasse da espada", correta: true },
                            { numero: 2, texto: "Todos os que lá estavam", correta: false },
                            { numero: 3, texto: "Ninguém sobreviveria", correta: false },
                            { numero: 4, texto: "Apenas as mulheres e crianças", correta: false }
                        ],
                        explicacao: "Jeremias 44:28 - E os que escaparem da espada voltarão da terra do Egito à terra de Judá, poucos em número.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        45: {
            titulo: "Mensagem a Baruque",
            texto: ` ¹ A palavra que Jeremias, o profeta, falou a Baruque, filho de Nerias, quando este escrevia, num livro, estas palavras, da boca de Jeremias, no ano quarto de Jeoiaquim, filho de Josias, rei de Judá, dizendo:
² Assim diz o Senhor, Deus de Israel, acerca de ti, ó Baruque:
³ Disseste: Ai de mim agora, porque me acrescentou o Senhor tristeza sobre minha dor! Estou cansado do meu gemido, e não acho descanso.
⁴ Assim lhe dirás: Isto diz o Senhor: Eis que o que edifiquei eu derrubo, e o que plantei eu arranco, e isso em toda esta terra.
⁵ E procuras tu grandezas para ti mesmo? Não as procures; porque eis que trarei mal sobre toda a carne, diz o Senhor; porém te darei a tua alma por despojo, em todos os lugares para onde fores.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Baruque disse que o Senhor havia acrescentado à sua dor?",
                        opcoes: [
                            { numero: 1, texto: "Tristeza", correta: true },
                            { numero: 2, texto: "Dívidas", correta: false },
                            { numero: 3, texto: "Cegueira", correta: false },
                            { numero: 4, texto: "Inimigos", correta: false }
                        ],
                        explicacao: "Jeremias 45:3 - Disseste: Ai de mim agora! porque me acrescentou o Senhor tristeza à minha dor.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor ordena que Baruque não busque para si mesmo?",
                        opcoes: [
                            { numero: 1, texto: "Grandes coisas", correta: true },
                            { numero: 2, texto: "Vingança", correta: false },
                            { numero: 3, texto: "Muitas terras", correta: false },
                            { numero: 4, texto: "Um novo nome", correta: false }
                        ],
                        explicacao: "Jeremias 45:5 - E procuras tu grandezas para ti? Não as procures.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor daria a Baruque por despojo em todos os lugares por onde ele fosse?",
                        opcoes: [
                            { numero: 1, texto: "A sua vida", correta: true },
                            { numero: 2, texto: "Barras de ouro", correta: false },
                            { numero: 3, texto: "Sabedoria profunda", correta: false },
                            { numero: 4, texto: "Cavalos rápidos", correta: false }
                        ],
                        explicacao: "Jeremias 45:5 - ...mas dar-te-ei a tua vida por despojo, em todos os lugares para onde fores.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        46: {
            titulo: "Profecia Contra o Egito",
            texto: ` ¹ A palavra do Senhor, que veio a Jeremias, o profeta, contra os gentios,
² Acerca do Egito, contra o exército de Faraó-Neco, rei do Egito, que estava junto ao rio Eufrates em Carquemis, ao qual feriu Nabucodonosor, rei de Babilônia, no ano quarto de Jeoiaquim, filho de Josias, rei de Judá.
³ Preparai o escudo e o pavês, e chegai-vos para a peleja.
⁴ Selai os cavalos e montai, cavaleiros, e apresentai-vos com elmos; limpai as lanças, vesti-vos de couraças.
⁵ Por que razão vejo os medrosos voltando as costas? Os seus valentes estão abatidos, e vão fugindo, sem olharem para trás; terror há ao redor, diz o Senhor.
⁶ Não fuja o ligeiro, e não escape o valente; para o lado norte, junto à borda do rio Eufrates tropeçaram e caíram.
⁷ Quem é este que vem subindo como o Nilo, cujas águas se movem como os rios?
⁸ O Egito vem subindo como o Nilo, e como rios cujas águas se movem; e disse: Subirei, cobrirei a terra, destruirei a cidade, e os que nela habitam.
⁹ Subi, ó cavalos, e estrondeai, ó carros, e saiam os valentes; os etíopes, e os do Líbano, que manejam o escudo, e os lídios, que manejam e entesam o arco.
¹⁰ Porque este dia é o dia do Senhor Deus dos Exércitos, dia de vingança para ele se vingar dos seus adversários; e a espada devorará, e fartar-se-á, e embriagar-se-á com o sangue deles; porque o Senhor Deus dos Exércitos tem um sacrifício na terra do norte, junto ao rio Eufrates.
¹¹ Sobe a Gileade, e toma bálsamo, ó virgem filha do Egito; em vão multiplicas remédios, pois já não há cura para ti.
¹² As nações ouviram a tua vergonha, e a terra está cheia do teu clamor; porque o valente tropeçou com o valente e ambos caíram juntos.
¹³ A palavra que falou o Senhor a Jeremias, o profeta, acerca da vinda de Nabucodonosor, rei de Babilônia, para ferir a terra do Egito.
¹⁴ Anunciai no Egito, e fazei ouvir isto em Migdol; fazei também ouvi-lo em Nofe, e em Tafnes, dizei: Apresenta-te, e prepara-te; porque a espada já devorou o que está ao redor de ti.
¹⁵ Por que foram derrubados os teus valentes? Não puderam manter-se firmes, porque o Senhor os abateu.
¹⁶ Multiplicou os que tropeçavam; também caíram uns sobre os outros, e disseram: Levanta-te, e voltemos ao nosso povo, e à terra do nosso nascimento, por causa da espada que oprime.
¹⁷ Clamaram ali: Faraó rei do Egito é apenas um barulho; deixou passar o tempo assinalado.
¹⁸ Vivo eu, diz o rei, cujo nome é o Senhor dos Exércitos, que certamente como o Tabor entre os montes, e como o Carmelo junto ao mar, certamente assim ele virá.
¹⁹ Prepara os utensílios para ires ao cativeiro, ó moradora, filha do Egito; porque Nofe será tornada em desolação, e será incendiada, até que ninguém mais aí more.
²⁰ Bezerra mui formosa é o Egito; mas já vem a destruição, vem do norte.
²¹ Até os seus mercenários no meio dela são como bezerros cevados; mas também eles viraram as costas, fugiram juntos; não ficaram firmes; porque veio sobre eles o dia da sua ruína e o tempo do seu castigo.
²² A sua voz irá como a da serpente; porque marcharão com um exército, e virão contra ela com machados, como cortadores de lenha.
²³ Cortarão o seu bosque, diz o Senhor, embora seja impenetrável; porque se multiplicaram mais do que os gafanhotos; são inumeráveis.
²⁴ A filha do Egito será envergonhada; será entregue na mão do povo do norte.
²⁵ Diz o Senhor dos Exércitos, o Deus de Israel: Eis que eu castigarei a Amom de Nô, e a Faraó, e ao Egito, e aos seus deuses, e aos seus reis; ao próprio Faraó, e aos que nele confiam.
²⁶ E os entregarei na mão dos que procuram a sua morte, na mão de Nabucodonosor, rei de Babilônia, e na mão dos seus servos; mas depois será habitada, como nos dias antigos, diz o Senhor.
²⁷ Mas não temas tu, servo meu, Jacó, nem te espantes, ó Israel; porque eis que te livrarei mesmo de longe, como também a tua descendência da terra do seu cativeiro; e Jacó voltará, e descansará, e sossegará, e não haverá quem o atemorize.
²⁸ Tu não temas, servo meu, Jacó, diz o Senhor, porque estou contigo; porque porei termo a todas as nações entre as quais te lancei; mas a ti não darei fim, mas castigar-te-ei com justiça, e não te darei de todo por inocente.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde ocorreu a grande derrota do exército de Faraó Neco mencionada no início do capítulo?",
                        opcoes: [
                            { numero: 1, texto: "Junto ao rio Eufrates, em Carquemis", correta: true },
                            { numero: 2, texto: "Nas pirâmides de Gizé", correta: false },
                            { numero: 3, texto: "No Mar Vermelho", correta: false },
                            { numero: 4, texto: "Em Jerusalém", correta: false }
                        ],
                        explicacao: "Jeremias 46:2 - ...que estava junto ao rio Eufrates, em Carquemis; ao qual feriu Nabucodonosor.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A que o Egito é comparado quando sobe como um rio?",
                        opcoes: [
                            { numero: 1, texto: "Como o Nilo, cujas águas se movem como rios", correta: true },
                            { numero: 2, texto: "Como um mar de sangue", correta: false },
                            { numero: 3, texto: "Como uma fonte seca", correta: false },
                            { numero: 4, texto: "Como uma tempestade de areia", correta: false }
                        ],
                        explicacao: "Jeremias 46:7 - Quem é este que sobe como o Nilo, cujas águas se movem como rios? O Egito subiu como o Nilo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor diz a Jacó para não temer no final do capítulo?",
                        opcoes: [
                            { numero: 1, texto: "Não temas, servo meu, Jacó, porque eu sou contigo", correta: true },
                            { numero: 2, texto: "Não temas a fome", correta: false },
                            { numero: 3, texto: "Não temas o rei da Babilônia", correta: false },
                            { numero: 4, texto: "Não temas atravessar o mar", correta: false }
                        ],
                        explicacao: "Jeremias 46:28 - Tu não temas, servo meu, Jacó, diz o Senhor, porque estou contigo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        47: {
            titulo: "Profecia Contra os Filisteus",
            texto: `¹ A palavra do Senhor, que veio a Jeremias, o profeta, contra os filisteus, antes que Faraó ferisse a Gaza.
² Assim diz o Senhor: Eis que se levantam as águas do norte, e tornar-se-ão em torrente transbordante, e alagarão a terra e sua plenitude, a cidade, e os que nela habitam; e os homens clamarão, e todos os moradores da terra se lamentarão;
³ Ao ruído estrepitoso dos cascos dos seus fortes cavalos, ao barulho de seus carros, ao estrondo das suas rodas; os pais não atendem aos filhos, por causa da fraqueza das mãos;
⁴ Por causa do dia que vem, para destruir a todos os filisteus, para cortar de Tiro e de Sidom todo o restante que os socorra; porque o Senhor destruirá os filisteus, o remanescente da ilha de Caftor.
⁵ A calvície veio sobre Gaza, foi desarraigada Ascalom, com o restante do seu vale; até quando te retalharás?
⁶ Ah; espada do Senhor! Até quando deixarás de repousar? Volta para a tua bainha, descansa, e aquieta-te.
⁷ Mas como te aquietarás? Pois o Senhor deu ordem à espada contra Ascalom, e contra a praia do mar, para onde ele a enviou.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "De onde viriam as águas que inundariam a terra, segundo a profecia contra os filisteus?",
                        opcoes: [
                            { numero: 1, texto: "Do Norte", correta: true },
                            { numero: 2, texto: "Do Egito", correta: false },
                            { numero: 3, texto: "Do Mar Grande", correta: false },
                            { numero: 4, texto: "Das montanhas", correta: false }
                        ],
                        explicacao: "Jeremias 47:2 - Assim diz o Senhor: Eis que se levantam águas do norte, e tornar-se-ão em torrente transbordante.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quais cidades filisteias seriam destruídas conforme o verso 4?",
                        opcoes: [
                            { numero: 1, texto: "Tiro e Sidom (seus aliados) e Gaza e Ascalom", correta: true },
                            { numero: 2, texto: "Babilônia e Nínive", correta: false },
                            { numero: 3, texto: "Sodoma e Gomorra", correta: false },
                            { numero: 4, texto: "Damasco e Samaria", correta: false }
                        ],
                        explicacao: "Jeremias 47:4-5 - ...para destruir a todos os filisteus... Gaza rapou-se, Ascalom foi destruída.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o profeta pergunta à espada do Senhor no verso 6?",
                        opcoes: [
                            { numero: 1, texto: "Até quando não descansarás?", correta: true },
                            { numero: 2, texto: "Onde está o teu brilho?", correta: false },
                            { numero: 3, texto: "Quem te afiou?", correta: false },
                            { numero: 4, texto: "Por que feres o inocente?", correta: false }
                        ],
                        explicacao: "Jeremias 47:6 - Ah! Espada do Senhor! Até quando não descansarás? Volta para a tua bainha.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        48: {
            titulo: "Profecia Contra Moabe",
            texto: `¹ Contra Moabe, assim diz o Senhor dos Exércitos, Deus de Israel: Ai de Nebo, porque foi destruída; envergonhada está Quiriataim, já está tomada; Misgabe está envergonhada e desanimada.
² A glória de Moabe já não existe mais; em Hesbom tramaram mal contra ela, dizendo: Vinde, e exterminemo-la, para que não seja mais nação; também tu, ó Madmém, serás silenciada; a espada te perseguirá.
³ Voz de clamor de Horonaim; ruína e grande destruição!
⁴ Está destruída Moabe; seus filhinhos fizeram ouvir um clamor.
⁵ Porque pela subida de Luíte eles irão com choro contínuo; porque na descida de Horonaim os adversários de Moabe ouviram as angústias do grito da destruição.
⁶ Fugi, salvai a vossa vida; sede como a tamargueira no deserto;
⁷ Porque, por causa da tua confiança nas tuas obras, e nos teus tesouros, também tu serás tomada; e Quemós sairá para o cativeiro, os seus sacerdotes e os seus príncipes juntamente.
⁸ Porque virá o destruidor sobre cada uma das cidades, e nenhuma cidade escapará, e perecerá o vale, e destruir-se-á a campina; porque o Senhor o disse.
⁹ Dai asas a Moabe; porque voando sairá, e as suas cidades se tornarão em desolação, e ninguém morará nelas.
¹⁰ Maldito aquele que fizer a obra do Senhor fraudulosamente; e maldito aquele que retém a sua espada do sangue.
¹¹ Moabe esteve descansado desde a sua mocidade, e repousou nas suas borras, e não foi mudado de vasilha para vasilha, nem foi para o cativeiro; por isso conservou o seu sabor, e o seu cheiro não se alterou.
¹² Portanto, eis que dias vêm, diz o Senhor, em que lhe enviarei derramadores que o derramarão; e despejarão as suas vasilhas, e romperão os seus odres.
¹³ E Moabe terá vergonha de Quemós como a casa de Israel se envergonhou de Betel, sua confiança.
¹⁴ Como direis: Somos valentes e homens fortes para a guerra?
¹⁵ Moabe está destruído, e subiu das suas cidades, e os seus jovens escolhidos desceram à matança, diz o Rei, cujo nome é o Senhor dos Exércitos.
¹⁶ Está prestes a vir a calamidade de Moabe; e apressa-se muito a sua aflição.
¹⁷ Condoei-vos dele todos os que estais ao seu redor, e todos os que sabeis o seu nome; dizei: Como se quebrou a vara forte, o cajado formoso?
¹⁸ Desce da tua glória, e assenta-te em terra seca, ó moradora, filha de Dibom; porque o destruidor de Moabe subiu contra ti, e desfez as tuas fortalezas.
¹⁹ Põe-te no caminho, e espia, ó moradora de Aroer; pergunta ao que vai fugindo; e à que escapou dize: Que sucedeu?
²⁰ Moabe está envergonhado, porque foi quebrantado; lamentai e gritai; anunciai em Arnom que Moabe está destruído.
²¹ Também o julgamento veio sobre a terra da campina; sobre Holom, sobre Jaza, sobre Mefaate,
²² Sobre Dibom, sobre Nebo, sobre Bete-Diblataim,
²³ Sobre Quiriataim, sobre Bete-Gamul, sobre Bete-Meom,
²⁴ Sobre Queriote, e sobre Bozra; e até sobre todas as cidades da terra de Moabe, as de longe e as de perto.
²⁵ Já é cortado o poder de Moabe, e é quebrantado o seu braço, diz o Senhor.
²⁶ Embriagai-o, porque contra o Senhor se engrandeceu; e Moabe se revolverá no seu vômito, e ele também se tornará objeto de escárnio.
²⁷ Pois não foi também Israel objeto de escárnio? Porventura foi achado entre ladrões, para que sempre que fales dele, saltes de alegria?
²⁸ Deixai as cidades, e habitai no rochedo, ó moradores de Moabe; e sede como a pomba que se aninha nos lados da boca da caverna.
²⁹ Ouvimos da soberba de Moabe, que é soberbíssimo, como também da sua arrogância, e da sua vaidade, e da sua altivez e do seu orgulhoso coração.
³⁰ Eu conheço, diz o Senhor, a sua indignação, mas isso nada é; as suas mentiras nada farão.
³¹ Por isso gemerei por Moabe, sim, gritarei por todo o Moabe; pelos homens de Quir-Heres lamentarei;
³² Com o choro de Jazer chorar-te-ei, ó vide de Sibma; os teus ramos passaram o mar, chegaram até ao mar de Jazer; porém o destruidor caiu sobre os teus frutos do verão, e sobre a tua vindima.
³³ Tirou-se, pois, o folguedo e a alegria do campo fértil e da terra de Moabe; porque fiz cessar o vinho nos lagares; já não pisarão uvas com júbilo; o júbilo não será júbilo.
³⁴ Por causa do grito de Hesbom até Eleale e até Jaaz, se ouviu a sua voz desde Zoar até Horonaim, como bezerra de três anos; porque até as águas do Ninrim se tornarão em assolação.
³⁵ E farei cessar em Moabe, diz o Senhor, quem sacrifique nos altos, e queime incenso aos seus deuses.
³⁶ Por isso ressoará como flauta o meu coração por Moabe, também ressoará como flauta o meu coração pelos homens de Quir-Heres; porquanto a abundância que ajuntou se perdeu.
³⁷ Porque toda a cabeça será tosquiada, e toda a barba será diminuída; sobre todas as mãos haverá sarjaduras, e sobre os lombos, sacos.
³⁸ Sobre todos os telhados de Moabe e nas suas ruas haverá um pranto geral; porque quebrei a Moabe, como a um vaso que não agrada, diz o Senhor.
³⁹ Como está quebrantado! Como gritam! Como virou Moabe a cerviz envergonhado! Assim será Moabe objeto de escárnio e de desmaio, para todos que estão em redor dele.
⁴⁰ Porque assim diz o Senhor: Eis que voará como a águia, e estenderá as suas asas sobre Moabe.
⁴¹ São tomadas as cidades, e ocupadas as fortalezas; e naquele dia será o coração dos valentes de Moabe como o coração da mulher que está com dores de parto.
⁴² E Moabe será destruído, para que não seja povo; porque se engrandeceu contra o Senhor.
⁴³ Temor, e cova, e laço, vêm sobre ti, ó morador de Moabe, diz o Senhor.
⁴⁴ O que fugir do temor cairá na cova, e o que subir da cova ficará preso no laço; porque trarei sobre ele, sobre Moabe, o ano do seu castigo, diz o Senhor.
⁴⁵ Os que fugiam sem força pararam à sombra de Hesbom; pois saiu fogo de Hesbom, e a labareda do meio de Siom, e devorou o canto de Moabe e o alto da cabeça dos turbulentos.
⁴⁶ Ai de ti, Moabe! Pereceu o povo de Quemós; porque teus filhos ficaram cativos, e tuas filhas em cativeiro.
⁴⁷ Mas nos últimos dias farei voltar os cativos de Moabe, diz o Senhor. Até aqui o juízo de Moabe.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor diz sobre aquele que faz a Sua obra relaxadamente (negligenciadamente)?",
                        opcoes: [
                            { numero: 1, texto: "Será recompensado com pouco", correta: false },
                            { numero: 2, texto: "Maldito aquele que fizer a obra do Senhor relaxadamente", correta: true },
                            { numero: 3, texto: "Deve tentar novamente", correta: false },
                            { numero: 4, texto: "Não receberá punição", correta: false }
                        ],
                        explicacao: "Jeremias 48:10 - Maldito aquele que fizer a obra do Senhor relaxadamente; e maldito aquele que retiver a sua espada do sangue.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A que animal é comparada a descida do destruidor sobre Moabe no verso 40?",
                        opcoes: [
                            { numero: 1, texto: "A uma águia que voa e estende as asas", correta: true },
                            { numero: 2, texto: "A um leão que ruge", correta: false },
                            { numero: 3, texto: "A um leopardo veloz", correta: false },
                            { numero: 4, texto: "A uma serpente que morde", correta: false }
                        ],
                        explicacao: "Jeremias 48:40 - Porque assim diz o Senhor: Eis que voará como a águia, e estenderá as suas asas sobre Moabe.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor promete fazer com o cativeiro de Moabe nos últimos dias?",
                        opcoes: [
                            { numero: 1, texto: "Mantê-lo para sempre", correta: false },
                            { numero: 2, texto: "Restaurar o cativeiro de Moabe", correta: true },
                            { numero: 3, texto: "Esquecê-lo totalmente", correta: false },
                            { numero: 4, texto: "Entregá-lo aos gregos", correta: false }
                        ],
                        explicacao: "Jeremias 48:47 - Mas restaurarei o cativeiro de Moabe, nos últimos dias, diz o Senhor.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        49: {
            titulo: "Profecia Contra Diversas Nações",
            texto: `¹ Contra os filhos de Amom. Assim diz o Senhor: Acaso Israel não tem filhos, nem tem herdeiro? Por que, pois, herdou o rei deles a Gade e o seu povo habitou nas suas cidades?
² Portanto, eis que vêm dias, diz o Senhor, em que farei ouvir em Rabá dos filhos de Amom o alarido de guerra, e tornar-se-á num montão de ruínas, e os lugares da sua jurisdição serão queimados a fogo; e Israel herdará aos que o herdaram, diz o Senhor.
³ Lamenta, ó Hesbom, porque é destruída Ai; clamai, ó filhas de Rabá, cingi-vos de sacos, lamentai, e dai voltas pelos valados; porque o rei deles irá em cativeiro, juntamente com seus sacerdotes e os seus príncipes.
⁴ Por que te glorias nos vales, teus luxuriantes vales, ó filha rebelde, que confias nos teus tesouros, dizendo: Quem virá contra mim?
⁵ Eis que eu trarei temor sobre ti, diz o Senhor Deus dos Exércitos, de todos os que estão ao redor de ti; e sereis lançados fora cada um diante de si, e ninguém recolherá o desgarrado.
⁶ Mas depois disto farei voltar os cativos dos filhos de Amom, diz o Senhor.
⁷ Acerca de Edom. Assim diz o Senhor dos Exércitos: Acaso não há mais sabedoria em Temã? Pereceu o conselho dos entendidos? Corrompeu-se a sua sabedoria?
⁸ Fugi, voltai-vos, buscai profundezas para habitar, ó moradores de Dedã, porque eu trarei sobre ele a ruína de Esaú, no tempo em que o castiguei.
⁹ Se vindimadores viessem a ti, não deixariam rabiscos? Se ladrões de noite viessem, não te danificariam quanto lhes bastasse?
¹⁰ Mas eu despi a Esaú, descobri os seus esconderijos, e não se poderá esconder; foi destruída a sua descendência, como também seus irmãos e seus vizinhos, e ele já não existe.
¹¹ Deixa os teus órfãos, eu os guardarei em vida; e as tuas viúvas confiem em mim.
¹² Porque assim diz o Senhor: Eis que os que não estavam condenados a beber do copo, totalmente o beberão; e tu ficarias inteiramente impune? Não ficarás impune, mas certamente o beberás.
¹³ Porque por mim mesmo jurei, diz o Senhor, que Bozra servirá de espanto, de opróbrio, de assolação, e de maldição; e todas as suas cidades se tornarão em desolações perpétuas.
¹⁴ Ouvi novas vindas do Senhor, que um embaixador é enviado aos gentios, para lhes dizer: Ajuntai-vos, e vinde contra ela, e levantai-vos para a guerra.
¹⁵ Porque eis que te fiz pequeno entre os gentios, desprezado entre os homens.
¹⁶ Quanto à tua terribilidade, enganou-te a arrogância do teu coração, tu que habitas nas cavernas das rochas, que ocupas as alturas dos outeiros; ainda que eleves o teu ninho como a águia, de lá te derrubarei, diz o Senhor.
¹⁷ Assim servirá Edom de desolação; todo aquele que passar por ela se espantará, e assobiará por causa de todas as suas pragas.
¹⁸ Será como a destruição de Sodoma e Gomorra, e dos seus vizinhos, diz o Senhor; não habitará ninguém ali, nem morará nela filho de homem.
¹⁹ Eis que ele como leão subirá da enchente do Jordão contra a morada do forte; porque num momento o farei correr dali; e quem é o escolhido que porei sobre ela? Pois quem é semelhante a mim? E quem me fixará o tempo? E quem é o pastor que subsistirá perante mim?
²⁰ Portanto ouvi o conselho do Senhor, que ele decretou contra Edom, e os seus desígnios que ele intentou entre os moradores de Temã: Certamente os menores do rebanho serão arrastados; certamente ele assolará as suas moradas com eles.
²¹ A terra estremeceu com o estrondo da sua queda; e do seu grito, até ao Mar Vermelho se ouviu o som.
²² Eis que ele como águia subirá, e voará, e estenderá as suas asas contra Bozra; e o coração dos valentes de Edom naquele dia será como o coração da mulher que está com dores de parto.
²³ Acerca de Damasco. Envergonhou-se Hamate e Arpade, porquanto ouviram más novas, desmaiaram; no mar há angústia, não se pode sossegar.
²⁴ Enfraquecida está Damasco; virou as costas para fugir, e o tremor a tomou; angústia e dores a tomaram como da que está de parto.
²⁵ Como está abandonada a cidade do louvor, a cidade da minha alegria!
²⁶ Portanto cairão os seus jovens nas suas ruas; e todos os homens de guerra serão consumidos naquele dia, diz o Senhor dos Exércitos.
²⁷ E acenderei fogo no muro de Damasco, e consumirá os palácios de Ben-Hadade.
²⁸ Acerca de Quedar, e dos reinos de Hazor, que Nabucodonosor, rei de Babilônia, feriu. Assim diz o Senhor: Levantai-vos, subi contra Quedar, e destruí os filhos do oriente.
²⁹ Tomarão as suas tendas, os seus gados, as suas cortinas e todos os seus utensílios, e os seus camelos levarão para si; e lhes clamarão: Há medo por todos os lados.
³⁰ Fugi, desviai-vos para muito longe, buscai profundezas para habitar, ó moradores de Hazor, diz o Senhor; porque Nabucodonosor, rei de Babilônia, tomou conselho contra vós, e formou um desígnio contra vós.
³¹ Levantai-vos, subi contra uma nação tranquila, que habita confiadamente, diz o Senhor, que não tem portas, nem ferrolhos; habitam sós.
³² E os seus camelos serão para presa, e a multidão dos seus gados para despojo; e os espalharei a todo o vento, àqueles que estão nos lugares mais distantes, e de todos os seus lados lhes trarei a sua ruína, diz o Senhor.
³³ E Hazor se tornará em morada de chacais, em assolação para sempre; ninguém habitará ali, nem morará nela filho de homem.
³⁴ A palavra do Senhor, que veio a Jeremias, o profeta, contra Elão, no princípio do reinado de Zedequias, rei de Judá, dizendo:
³⁵ Assim diz o Senhor dos Exércitos: Eis que eu quebrarei o arco de Elão, o principal do seu poder.
³⁶ E trarei sobre Elão os quatro ventos dos quatro cantos dos céus, e os espalharei na direção de todos estes ventos; e não haverá nação aonde não cheguem os fugitivos de Elão.
³⁷ E farei que Elão tema diante de seus inimigos e diante dos que procuram a sua morte; e farei vir sobre eles o mal, o furor da minha ira, diz o Senhor; e enviarei após eles a espada, até que venha a consumi-los.
³⁸ E porei o meu trono em Elão; e destruirei dali o rei e os príncipes, diz o Senhor.
³⁹ Acontecerá, porém, nos últimos dias, que farei voltar os cativos de Elão, diz o Senhor.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor pergunta sobre Edom a respeito da sabedoria em Temã?",
                        opcoes: [
                            { numero: 1, texto: "Acaso já não há mais sabedoria em Temã?", correta: true },
                            { numero: 2, texto: "Onde estão os livros de Temã?", correta: false },
                            { numero: 3, texto: "Quem ensinou Temã?", correta: false },
                            { numero: 4, texto: "Por que Temã é tão rica?", correta: false }
                        ],
                        explicacao: "Jeremias 49:7 - Acaso não há mais sabedoria em Temã? Pereceu o conselho dos prudentes?",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A que animal o Senhor se compara ao subir contra Edom, como quem sobe da enchente do Jordão?",
                        opcoes: [
                            { numero: 1, texto: "A um urso", correta: false },
                            { numero: 2, texto: "A um leão", correta: true },
                            { numero: 3, texto: "A um búfalo", correta: false },
                            { numero: 4, texto: "A um lobo", correta: false }
                        ],
                        explicacao: "Jeremias 49:19 - Eis que como leão subirá da enchente do Jordão contra a morada forte.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual nação o Senhor diz que quebraria o seu arco, o principal da sua força?",
                        opcoes: [
                            { numero: 1, texto: "Elão", correta: true },
                            { numero: 2, texto: "Damasco", correta: false },
                            { numero: 3, texto: "Amom", correta: false },
                            { numero: 4, texto: "Hazor", correta: false }
                        ],
                        explicacao: "Jeremias 49:35 - Assim diz o Senhor dos Exércitos: Eis que eu quebrarei o arco de Elão, o principal do seu poder.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        50: {
            titulo: "Profecia Contra a Babilônia - Parte 1",
            texto: ` ¹ A palavra que falou o Senhor contra a Babilônia, contra a terra dos caldeus, por intermédio de Jeremias, o profeta.
² Anunciai entre as nações; e fazei ouvir, e arvorai um estandarte, fazei ouvir, não encubrais; dizei: Tomada está Babilônia, confundido está Bel, espatifado está Merodaque, confundidos estão os seus ídolos, e quebradas estão as suas imagens.
³ Porque subiu contra ela uma nação do norte, que fará da sua terra uma solidão, e não haverá quem nela habite; tanto os homens como os animais fugiram, e se foram.
⁴ Naqueles dias, e naquele tempo, diz o Senhor, os filhos de Israel virão, eles e os filhos de Judá juntamente; andando e chorando virão, e buscarão ao Senhor seu Deus.
⁵ Pelo caminho de Sião perguntarão, para ali voltarão os seus rostos, dizendo: Vinde, e unamo-nos ao Senhor, numa aliança eterna que nunca será esquecida.
⁶ Ovelhas perdidas têm sido o meu povo, os seus pastores as fizeram errar, para os montes as desviaram; de monte para outeiro andaram, esqueceram-se do lugar do seu repouso.
⁷ Todos os que as achavam as devoravam, e os seus adversários diziam: Culpa nenhuma teremos; porque pecaram contra o Senhor, a morada da justiça, sim, o Senhor, a esperança de seus pais.
⁸ Fugi do meio de Babilônia, e saí da terra dos caldeus, e sede como os bodes diante do rebanho.
⁹ Porque eis que eu suscitarei e farei subir contra a Babilônia uma congregação de grandes nações da terra do norte, e se prepararão contra ela; dali será tomada; as suas flechas serão como as de valente herói, nenhuma tornará sem efeito.
¹⁰ A Caldeia servirá de presa; todos os que a saquearam serão fartos, diz o Senhor.
¹¹ Porquanto vos alegrastes, e vos regozijastes, ó saqueadores da minha herança, porquanto vos engordastes como novilha no pasto, e mugistes como touros.
¹² Será mui confundida vossa mãe, ficará envergonhada a que vos deu à luz; eis que ela será a última das nações, um deserto, uma terra seca e uma solidão.
¹³ Por causa do furor do Senhor não será habitada, antes se tornará em total assolação; qualquer que passar por Babilônia se espantará, assobiará por todas as suas pragas.
¹⁴ Ordenai-vos contra Babilônia ao redor, todos os que armais arcos; atirai-lhe, não poupeis as flechas, porque pecou contra o Senhor.
¹⁵ Gritai contra ela ao redor, ela já se submeteu; caíram seus fundamentos, estão derrubados os seus muros; porque esta é a vingança do Senhor; vingai-vos dela; como ela fez, assim lhe fazei.
¹⁶ Arrancai de Babilônia o que semeia, e o que leva a foice no tempo da sega; por causa da espada aflitiva virar-se-á cada um para o seu povo, e fugirá cada um para a sua terra.
¹⁷ Cordeiro desgarrado é Israel; os leões o afugentaram; o primeiro a devorá-lo foi o rei da Assíria; e, por último Nabucodonosor, rei de Babilônia, lhe quebrou os ossos.
¹⁸ Portanto, assim diz o Senhor dos Exércitos, Deus de Israel: Eis que castigarei o rei de Babilônia, e a sua terra, como castiguei o rei da Assíria.
¹⁹ E farei tornar Israel para a sua morada, e ele pastará no Carmelo e em Basã; e fartar-se-á a sua alma no monte de Efraim e em Gileade.
²⁰ Naqueles dias, e naquele tempo, diz o Senhor, buscar-se-á a maldade de Israel, e não será achada; e os pecados de Judá, mas não se acharão; porque perdoarei os remanescentes que eu deixar.
²¹ Sobe contra a terra de Merataim, sim, contra ela, e contra os moradores de Pecode; assola e inteiramente destrói tudo após eles, diz o Senhor, e faze conforme tudo o que te mandei.
²² Estrondo de batalha há na terra, e de grande destruição.
²³ Como foi cortado e quebrado o martelo de toda a terra! Como se tornou Babilônia objeto de espanto entre as nações!
²⁴ Laços te armei, e também foste presa, ó Babilônia, e tu não o soubeste; foste achada, e também apanhada; porque contra o Senhor te entremeteste.
²⁵ O Senhor abriu o seu depósito, e tirou os instrumentos da sua indignação; porque o Senhor Deus dos Exércitos, tem uma obra a realizar na terra dos caldeus.
²⁶ Vinde contra ela dos confins da terra, abri os seus celeiros; fazei dela montões de ruínas, e destruí-a de todo; nada lhe fique de sobra.
²⁷ Matai a todos os seus novilhos, desçam a matança. Ai deles, porque veio o seu dia, o tempo do seu castigo!
²⁸ Eis a voz dos que fugiram e escaparam da terra de Babilônia, para anunciarem em Sião a vingança do Senhor nosso Deus, a vingança do seu templo.
²⁹ Convocai contra Babilônia os flecheiros, a todos os que armam arcos; acampai-vos contra ela em redor, ninguém escape dela; pagai-lhe conforme a sua obra, conforme tudo o que fez, fazei-lhe; porque se houve arrogantemente contra o Senhor, contra o Santo de Israel.
³⁰ Portanto, cairão os seus jovens nas suas ruas; e todos os seus homens de guerra serão desarraigados naquele dia, diz o Senhor.
³¹ Eis que eu sou contra ti, ó soberbo, diz o Senhor Deus dos Exércitos; porque veio o teu dia, o tempo em que te hei de castigar.
³² Então tropeçará o soberbo, e cairá, e ninguém haverá que o levante; e porei fogo nas suas cidades, o qual consumirá todos os seus arredores.
³³ Assim diz o Senhor dos Exércitos: Os filhos de Israel e os filhos de Judá foram oprimidos juntamente; e todos os que os levaram cativos os retiveram, não os quiseram soltar.
³⁴ Mas o seu Redentor é forte, o Senhor dos Exércitos é o seu nome; certamente pleiteará a causa deles, para dar descanso à terra, e inquietar os moradores de Babilônia.
³⁵ A espada virá sobre os caldeus, diz o Senhor, e sobre os moradores de Babilônia, e sobre os seus príncipes, e sobre os seus sábios.
³⁶ A espada virá sobre os mentirosos, e ficarão insensatos; a espada virá sobre os seus poderosos, e desfalecerão.
³⁷ A espada virá sobre os seus cavalos, e sobre os seus carros, e sobre toda a mistura de povos, que está no meio dela; e tornar-se-ão como mulheres; a espada virá sobre os seus tesouros, e serão saqueados.
³⁸ Cairá a seca sobre as suas águas, e secarão; porque é uma terra de imagens esculpidas, e pelos seus ídolos andam enfurecidos.
³⁹ Por isso habitarão nela as feras do deserto, com os animais selvagens das ilhas; também habitarão nela as avestruzes; e nunca mais será povoada, nem será habitada de geração em geração.
⁴⁰ Como quando Deus subverteu a Sodoma e a Gomorra, e as suas cidades vizinhas, diz o Senhor, assim ninguém habitará ali, nem morará nela filho de homem.
⁴¹ Eis que um povo vem do norte; uma grande nação e muitos reis se levantarão dos extremos da terra.
⁴² Armam-se de arco e lança; eles são cruéis, e não têm piedade; a sua voz bramará como o mar, e sobre cavalos cavalgarão, todos postos em ordem como um homem para a batalha, contra ti, ó filha de Babilônia.
⁴³ O rei de Babilônia ouviu a sua fama, e desfaleceram as suas mãos; a angústia se apoderou dele, dores como da que está de parto.
⁴⁴ Eis que ele como leão subirá da enchente do Jordão, contra a morada forte, porque num momento o farei correr dali; e quem é o escolhido que porei sobre ela? Porque quem é semelhante a mim, e quem me fixará o tempo? E quem é o pastor que poderá permanecer perante mim?
⁴⁵ Portanto ouvi o conselho do Senhor, que ele decretou contra Babilônia, e os seus desígnios que intentou contra a terra dos caldeus: certamente os pequenos do rebanho os arrastarão; certamente ele assolará as suas moradas sobre eles.
⁴⁶ Ao estrondo da tomada de Babilônia estremeceu a terra; e o grito se ouviu entre as nações.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que aconteceria com os ídolos de Babilônia (Bel e Merodaque) quando ela fosse tomada?",
                        opcoes: [
                            { numero: 1, texto: "Seriam adorados por todos", correta: false },
                            { numero: 2, texto: "Seriam envergonhados e despedaçados", correta: true },
                            { numero: 3, texto: "Seriam levados para Jerusalém", correta: false },
                            { numero: 4, texto: "Transformar-se-iam em cinzas", correta: false }
                        ],
                        explicacao: "Jeremias 50:2 - ...Anunciai e dizei: Tomada é Babilônia, confundido está Bel, despedaçado está Merodaque.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como o povo de Israel e Judá voltariam para buscar o Senhor, segundo o verso 4?",
                        opcoes: [
                            { numero: 1, texto: "Cantando e dançando", correta: false },
                            { numero: 2, texto: "Indo e chorando", correta: true },
                            { numero: 3, texto: "Montados em camelos", correta: false },
                            { numero: 4, texto: "Com armas nas mãos", correta: false }
                        ],
                        explicacao: "Jeremias 50:4 - Naqueles dias... os filhos de Israel e os filhos de Judá virão juntos, andando e chorando.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A que animal Babilônia é comparada como destruidora da herança do Senhor?",
                        opcoes: [
                            { numero: 1, texto: "A uma novilha que pisa a erva e a cavalos vigorosos", correta: true },
                            { numero: 2, texto: "A uma raposa no deserto", correta: false },
                            { numero: 3, texto: "A um corvo faminto", correta: false },
                            { numero: 4, texto: "A uma formiga", correta: false }
                        ],
                        explicacao: "Jeremias 50:11 - ...porque saltastes como novilha na erva, e rinchastes como cavalos vigorosos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        51: {
            titulo: "Profecia Contra a Babilônia - Parte 2",
            texto: ` ¹ Assim diz o Senhor: Eis que levantarei um vento destruidor contra Babilônia, e contra os que habitam no meio dos que se levantam contra mim.
² E enviarei padejadores contra Babilônia, que a padejarão, e despejarão a sua terra; porque virão contra ela em redor no dia da calamidade.
³ O flecheiro arme o seu arco contra o que arma o seu arco, e contra o que se exalta na sua couraça; e não perdoeis aos seus jovens; destruí a todo o seu exército.
⁴ E os mortos cairão na terra dos caldeus, e atravessados nas suas ruas.
⁵ Porque Israel e Judá não foram abandonados do seu Deus, do Senhor dos Exércitos, ainda que a sua terra esteja cheia de culpas contra o Santo de Israel.
⁶ Fugi do meio de Babilônia, e livrai cada um a sua alma, e não vos destruais na sua maldade; porque este é o tempo da vingança do Senhor; que lhe dará a sua recompensa.
⁷ Babilônia era um copo de ouro na mão do Senhor, o qual embriagava a toda a terra; do seu vinho beberam as nações; por isso as nações enlouqueceram.
⁸ Num momento caiu Babilônia, e ficou arruinada; lamentai por ela, tomai bálsamo para a sua dor, porventura sarará.
⁹ Queríamos curar Babilônia, porém ela não sarou; deixai-a, e vamo-nos cada um para a sua terra; porque o seu juízo chegou até ao céu, e se elevou até às mais altas nuvens.
¹⁰ O Senhor trouxe a nossa justiça à luz; vinde e contemos em Sião a obra do Senhor, nosso Deus.
¹¹ Aguçai as flechas, preparai os escudos; o Senhor despertou o espírito dos reis da Média; porque o seu intento é contra Babilônia para a destruir; porque esta é a vingança do Senhor, a vingança do seu templo.
¹² Arvorai um estandarte sobre os muros de Babilônia, reforçai a guarda, colocai sentinelas, preparai as ciladas; porque como o Senhor intentou, assim fez o que tinha falado contra os moradores de Babilônia.
¹³ Ó tu, que habitas sobre muitas águas, rica de tesouros, é chegado o teu fim, a medida da tua avareza.
¹⁴ Jurou o Senhor dos Exércitos por si mesmo, dizendo: Ainda que te enchi de homens, como de lagarta, contudo levantarão gritaria contra ti.
¹⁵ Ele fez a terra com o seu poder, e ordenou o mundo com a sua sabedoria, e estendeu os céus com o seu entendimento.
¹⁶ Fazendo ele ouvir a sua voz, grande estrondo de águas há nos céus, e faz subir os vapores desde o fim da terra; faz os relâmpagos com a chuva, e tira o vento dos seus tesouros,
¹⁷ Embrutecido é todo o homem, no seu conhecimento; envergonha-se todo o artífice da imagem de escultura; porque a sua imagem de fundição é mentira, e nelas não há espírito.
¹⁸ Vaidade são, obra de enganos; no tempo da sua visitação perecerão.
¹⁹ Não é semelhante a estes a porção de Jacó; porque ele é o que formou tudo; e Israel é a tribo da sua herança; o Senhor dos Exércitos é o seu nome.
²⁰ Tu és meu machado de batalha e minhas armas de guerra, e por meio de ti despedaçarei as nações e por ti destruirei os reis;
²¹ E por meio de ti despedaçarei o cavalo e o seu cavaleiro; e por meio de ti despedaçarei o carro e o que nele vai;
²² E por meio de ti despedaçarei o homem e a mulher, e por meio de ti despedaçarei o velho e o moço, e por meio de ti despedaçarei o jovem e a virgem;
²³ E por meio de ti despedaçarei o pastor e o seu rebanho, e por meio de ti despedaçarei o lavrador e a sua junta de bois, e por meio de ti despedaçarei os capitães e os magistrados.
²⁴ E pagarei a Babilônia, e a todos os moradores da Caldeia, toda a maldade que fizeram em Sião, aos vossos olhos, diz o Senhor.
²⁵ Eis-me aqui contra ti, ó monte destruidor, diz o Senhor, que destróis toda a terra; e estenderei a minha mão contra ti, e te revolverei das rochas, e farei de ti um monte de queima.
²⁶ E não tomarão de ti pedra para esquina, nem pedra para fundamentos, porque te tornarás em assolação perpétua, diz o Senhor.
²⁷ Arvorai um estandarte na terra, tocai a trombeta entre as nações, preparai as nações contra ela, convocai contra ela os reinos de Ararate, Mini, e Asquenaz; ordenai contra ela um capitão, fazei subir cavalos, como lagartas eriçadas.
²⁸ Preparai contra ela as nações, os reis da Média, os seus capitães, e todos os seus magistrados, e toda a terra do seu domínio.
²⁹ Então tremerá a terra, e doer-se-á, porque cada um dos desígnios do Senhor está firme contra Babilônia, para fazer da terra de Babilônia uma desolação, sem habitantes.
³⁰ Os poderosos de Babilônia cessaram de pelejar, ficaram nas fortalezas, desfaleceu a sua força, tornaram-se como mulheres; incendiaram as suas moradas, quebrados foram os seus ferrolhos.
³¹ Um correio correrá ao encontro de outro correio, e um mensageiro ao encontro de outro mensageiro, para anunciar ao rei de Babilônia que a sua cidade está tomada de todos os lados.
³² E os vaus estão ocupados, e os canaviais queimados a fogo; e os homens de guerra ficaram assombrados.
³³ Porque assim diz o Senhor dos Exércitos, o Deus de Israel: A filha de Babilônia é como uma eira, no tempo da debulha; ainda um pouco, e o tempo da sega lhe virá.
³⁴ Nabucodonosor, rei de Babilônia, devorou-me, colocou-me de lado, fez de mim um vaso vazio, como chacal me tragou, encheu o seu ventre das minhas delicadezas; lançou-me fora.
³⁵ A violência que se fez a mim e à minha carne venha sobre Babilônia, dirá a moradora de Sião; e o meu sangue caia sobre os moradores da Caldeia, dirá Jerusalém.
³⁶ Portanto, assim diz o Senhor: Eis que pleitearei a tua causa, e tomarei vingança por ti; e secarei o seu mar, e farei que se esgote o seu manancial.
³⁷ E Babilônia se tornará em montões, morada de chacais, espanto e assobio, sem que haja quem nela habite.
³⁸ Juntamente rugirão como filhos dos leões; bramarão como filhotes de leões.
³⁹ Estando eles excitados, lhes darei a sua bebida, e os embriagarei, para que andem saltando; porém dormirão um perpétuo sono, e não acordarão, diz o Senhor.
⁴⁰ Os farei descer como cordeiros à matança, como carneiros e bodes.
⁴¹ Como foi tomada Sesaque, e apanhada de surpresa a glória de toda a terra! Como se tornou Babilônia objeto de espanto entre as nações!
⁴² O mar subiu sobre Babilônia; com a multidão das suas ondas se cobriu.
⁴³ Tornaram-se as suas cidades em desolação, terra seca e deserta, terra em que ninguém habita, nem passa por ela filho de homem.
⁴⁴ E castigarei a Bel em Babilônia, e tirarei da sua boca o que tragou, e nunca mais concorrerão a ele as nações; também o muro de Babilônia caiu.
⁴⁵ Saí do meio dela, ó povo meu, e livrai cada um a sua alma do ardor da ira do Senhor.
⁴⁶ E para que porventura não se enterneça o vosso coração, e não temais pelo rumor que se ouvir na terra; porque virá num ano um rumor, e depois noutro ano outro rumor; e haverá violência na terra, dominador contra dominador.
⁴⁷ Portanto, eis que vêm dias, em que farei juízo sobre as imagens de escultura de Babilônia, e toda a sua terra será envergonhada, e todos os seus mortos cairão no meio dela.
⁴⁸ E os céus e a terra, com tudo quanto neles há, jubilarão sobre Babilônia; porque do norte lhe virão os destruidores, diz o Senhor.
⁴⁹ Como Babilônia fez cair mortos os de Israel, assim em Babilônia cairão os mortos de toda a terra.
⁵⁰ Vós, que escapastes da espada, ide-vos, não pareis; de longe lembrai-vos do Senhor, e suba Jerusalém a vossa mente.
⁵¹ Direis: Envergonhados estamos, porque ouvimos opróbrio; vergonha cobriu o nosso rosto, porquanto vieram estrangeiros contra os santuários da casa do Senhor.
⁵² Portanto, eis que vêm dias, diz o Senhor, em que farei juízo sobre as suas imagens de escultura; e gemerão os feridos em toda a sua terra.
⁵³ Ainda que Babilônia subisse aos céus, e ainda que fortificasse a altura da sua fortaleza, todavia de mim virão destruidores sobre ela, diz o Senhor.
⁵⁴ De Babilônia se ouve clamor de grande destruição da terra dos caldeus;
⁵⁵ Porque o Senhor tem destruído Babilônia, e tem feito perecer nela a sua grande voz; quando as suas ondas bramam como muitas águas, é emitido o ruído da sua voz.
⁵⁶ Porque o destruidor vem sobre ela, sobre Babilônia, e os seus poderosos serão presos, já estão quebrados os seus arcos; porque o Senhor, Deus das recompensas, certamente lhe retribuirá.
⁵⁷ E embriagarei os seus príncipes, e os seus sábios e os seus capitães, e os seus magistrados, e os seus poderosos; e dormirão um sono eterno, e não acordarão, diz o Rei, cujo nome é o Senhor dos Exércitos.
⁵⁸ Assim diz o Senhor dos Exércitos: Os largos muros de Babilônia serão totalmente derrubados, e as suas altas portas serão abrasadas pelo fogo; e trabalharão os povos em vão, e as nações no fogo, e eles se cansarão.
⁵⁹ A palavra que Jeremias, o profeta, mandou a Seraías, filho de Nerias, filho de Maaseias, indo ele com Zedequias, rei de Judá, a Babilônia, no quarto ano do seu reinado. E Seraías era o camareiro-mor.
⁶⁰ Escreveu, pois, Jeremias num livro todo o mal que havia de vir sobre Babilônia, a saber, todas estas palavras que estavam escritas contra Babilônia.
⁶¹ E disse Jeremias a Seraías: Quando chegares a Babilônia, verás e lerás todas estas palavras.
⁶² E dirás: Senhor, tu falaste contra este lugar, que o havias de desarraigar, até não ficar nele morador algum, nem homem nem animal, e que se tornaria em perpétua desolação.
⁶³ E será que, acabando tu de ler este livro, atar-lhe-ás uma pedra e lançá-lo-ás no meio do Eufrates.
⁶⁴ E dirás: Assim será afundada Babilônia, e não se levantará, por causa do mal que eu hei de trazer sobre ela; e eles se cansarão. Até aqui são as palavras de Jeremias.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "A que o Senhor compara a Babilônia em Sua mão para destruir as nações no verso 7?",
                        opcoes: [
                            { numero: 1, texto: "A um martelo de ferro", correta: false },
                            { numero: 2, texto: "A um copo de ouro", correta: true },
                            { numero: 3, texto: "A uma rede de pesca", correta: false },
                            { numero: 4, texto: "A um fogo consumidor", correta: false }
                        ],
                        explicacao: "Jeremias 51:7 - Um copo de ouro era a Babilônia na mão do Senhor, o qual embriagava a toda a terra.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jeremias mandou Seraías fazer com o livro das profecias após lê-lo em Babilônia?",
                        opcoes: [
                            { numero: 1, texto: "Atar-lhe uma pedra e lançá-lo no meio do Eufrates", correta: true },
                            { numero: 2, texto: "Entregá-lo ao rei Nabucodonosor", correta: false },
                            { numero: 3, texto: "Queimá-lo diante do povo", correta: false },
                            { numero: 4, texto: "Enterrá-lo no deserto", correta: false }
                        ],
                        explicacao: "Jeremias 51:63 - E será que, acabando de ler este livro, lhe atarás uma pedra e o lançarás no meio do Eufrates.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o lançamento do livro no rio simbolizava?",
                        opcoes: [
                            { numero: 1, texto: "Que Babilônia afundaria e não se levantaria mais", correta: true },
                            { numero: 2, texto: "Que a palavra de Deus seria esquecida", correta: false },
                            { numero: 3, texto: "Que o rio secaria", correta: false },
                            { numero: 4, texto: "Que haveria paz entre as nações", correta: false }
                        ],
                        explicacao: "Jeremias 51:64 - E dirás: Assim será afundada a Babilônia, e não se levantará.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        52: {
            titulo: "Apêndice Histórico",
            texto: ` ¹ Era Zedequias da idade de vinte e um anos quando começou a reinar, e reinou onze anos em Jerusalém; e o nome de sua mãe era Hamutal, filha de Jeremias, de Libna.
² E fez o que era mau aos olhos do Senhor, conforme tudo o que fizera Jeoiaquim.
³ Assim, por causa da ira do Senhor, contra Jerusalém e Judá, ele os lançou de diante dele, e Zedequias se rebelou contra o rei de Babilônia.
⁴ E aconteceu, que no ano nono do seu reinado, no décimo mês, no décimo dia do mês, veio Nabucodonosor, rei de Babilônia, contra Jerusalém, ele e todo o seu exército, e se acamparam contra ela, e levantaram contra ela trincheiras ao redor.
⁵ Assim esteve cercada a cidade, até ao undécimo ano do rei Zedequias.
⁶ No quarto mês, aos nove dias do mês, quando já a fome prevalecia na cidade, e o povo da terra não tinha pão,
⁷ Então foi aberta uma brecha na cidade, e todos os homens de guerra fugiram, e saíram da cidade de noite, pelo caminho da porta entre os dois muros, a qual estava perto do jardim do rei (porque os caldeus cercavam a cidade ao redor), e foram pelo caminho da campina.
⁸ Mas o exército dos caldeus perseguiu o rei, e alcançou a Zedequias nas campinas de Jericó, e todo o seu exército se espalhou, abandonando-o.
⁹ E prenderam o rei, e o fizeram subir ao rei de Babilônia, a Ribla, na terra de Hamate, o qual lhe pronunciou a sentença.
¹⁰ E o rei de Babilônia degolou os filhos de Zedequias à sua vista, e também degolou a todos os príncipes de Judá em Ribla.
¹¹ E cegou os olhos a Zedequias, e o atou com cadeias; e o rei de Babilônia o levou para Babilônia, e o conservou na prisão até o dia da sua morte.
¹² E no quinto mês, no décimo dia do mês, que era o décimo nono ano do rei Nabucodonosor, rei de Babilônia, Nebuzaradã, capitão da guarda, que assistia na presença do rei de Babilônia, veio a Jerusalém.
¹³ E queimou a casa do Senhor, e a casa do rei; e também a todas as casas de Jerusalém, e a todas as casas dos grandes ele as incendiou.
¹⁴ E todo o exército dos caldeus, que estava com o capitão da guarda, derrubou a todos os muros em redor de Jerusalém.
¹⁵ E dos mais pobres do povo, e a parte do povo, que tinha ficado na cidade, e os rebeldes que se haviam passado para o rei de Babilônia, e o mais da multidão, Nebuzaradã, capitão da guarda, levou presos.
¹⁶ Mas dos mais pobres da terra Nebuzaradã, capitão da guarda, deixou ficar alguns, para serem vinhateiros e lavradores.
¹⁷ Quebraram mais os caldeus as colunas de bronze, que estavam na casa do Senhor, e as bases, e o mar de bronze, que estavam na casa do Senhor, e levaram todo o bronze para Babilônia.
¹⁸ Também tomaram os caldeirões, e as pás, e as espevitadeiras, e as bacias, e as colheres, e todos os utensílios de bronze, com que se ministrava.
¹⁹ E tomou o capitão da guarda as bacias, e os braseiros, e as tigelas, e os caldeirões, e os castiçais, e as colheres, e os copos; tanto o que era de puro ouro, como o que era de prata maciça.
²⁰ Quanto às duas colunas, ao único mar, e aos doze bois de bronze, que estavam debaixo das bases, que fizera o rei Salomão para a casa do Senhor, o peso do bronze de todos estes utensílios era incalculável.
²¹ Quanto às colunas, a altura de cada uma era de dezoito côvados, e um fio de doze côvados a cercava; e era a sua espessura de quatro dedos, e era oca.
²² E havia sobre ela um capitel de bronze; e a altura do capitel era de cinco côvados; a rede e as romãs ao redor do capitel eram de bronze; e semelhante a esta era a segunda coluna, com as romãs.
²³ E havia noventa e seis romãs em cada lado; as romãs todas, em redor da rede, eram cem.
²⁴ Levou também o capitão da guarda a Seraías, o sacerdote chefe, e a Sofonias, o segundo sacerdote, e aos três guardas da porta.
²⁵ E da cidade tomou a um eunuco que tinha a seu cargo os homens de guerra, e a sete homens que estavam próximos à pessoa do rei, que se achavam na cidade, como também o escrivão-mor do exército, que alistava o povo da terra para a guerra, e a sessenta homens do povo da terra, que se achavam no meio da cidade.
²⁶ Tomando-os, pois, Nebuzaradã, capitão da guarda, levou-os ao rei de Babilônia, a Ribla.
²⁷ E o rei de Babilônia os feriu e os matou em Ribla, na terra de Hamate; assim Judá foi levado cativo para fora da sua terra.
²⁸ Este é o povo que Nabucodonosor levou cativo, no sétimo ano: três mil e vinte e três judeus.
²⁹ No ano décimo oitavo de Nabucodonosor, ele levou cativas de Jerusalém oitocentas e trinta e duas pessoas.
³⁰ No ano vinte e três de Nabucodonosor, Nebuzaradã, capitão da guarda, levou cativas, dos judeus, setecentas e quarenta e cinco pessoas; todas as pessoas foram quatro mil e seiscentas.
³¹ Sucedeu, pois, no ano trigésimo sétimo do cativeiro de Joaquim, rei de Judá, no duodécimo mês, aos vinte e cinco dias do mês, que Evil-Merodaque, rei de Babilônia, no primeiro ano do seu reinado, levantou a cabeça de Joaquim, rei de Judá, e tirou-o do cárcere;
³² E falou com ele benignamente, e pôs o seu trono acima dos tronos dos reis que estavam com ele em Babilônia;
³³ E lhe fez mudar as vestes da sua prisão; e passou a comer pão sempre na presença do rei, todos os dias da sua vida.
³⁴ E, quanto à sua alimentação, foi-lhe dada refeição contínua do rei de Babilônia, porção cotidiana, até o dia da sua morte, todos os dias da sua vida.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quantos anos tinha Zedequias quando começou a reinar e quanto tempo reinou?",
                        opcoes: [
                            { numero: 1, texto: "21 anos de idade e reinou 11 anos", correta: true },
                            { numero: 2, texto: "30 anos de idade e reinou 5 anos", correta: false },
                            { numero: 3, texto: "18 anos de idade e reinou 2 anos", correta: false },
                            { numero: 4, texto: "40 anos de idade e reinou 20 anos", correta: false }
                        ],
                        explicacao: "Jeremias 52:1 - Tinha Zedequias vinte e um anos de idade quando começou a reinar, e reinou onze anos em Jerusalém.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu com Joaquim, rei de Judá, no 37º ano do seu cativeiro?",
                        opcoes: [
                            { numero: 1, texto: "Ele morreu na prisão", correta: false },
                            { numero: 2, texto: "Evil-Merodaque o libertou e lhe deu lugar de honra", correta: true },
                            { numero: 3, texto: "Ele fugiu para o Egito", correta: false },
                            { numero: 4, texto: "Ele foi levado de volta para ser rei em Jerusalém", correta: false }
                        ],
                        explicacao: "Jeremias 52:31-32 - ...Evil-Merodaque... tirou da prisão a Joaquim... E falou com ele benignamente.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Joaquim recebeu do rei de Babilônia pelo resto de sua vida?",
                        opcoes: [
                            { numero: 1, texto: "Uma porção diária de comida (sustento)", correta: true },
                            { numero: 2, texto: "Um exército para comandar", correta: false },
                            { numero: 3, texto: "Muitas esposas", correta: false },
                            { numero: 4, texto: "Trabalho forçado nas minas", correta: false }
                        ],
                        explicacao: "Jeremias 52:34 - E, quanto ao seu sustento, foi-lhe dada pelo rei de Babilônia uma porção diária... até o dia da sua morte.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }    
};