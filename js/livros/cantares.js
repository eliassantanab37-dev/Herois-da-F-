// js/livros/cantares.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const cantares = {
    nome: "Cantares",
    icone: "🌹",
    autor: "Salomão",
    //background: "./imagens/cantares_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "O Beijo e o Amor",
            texto: ` ¹ Cântico dos cânticos, que é de Salomão.
² Beije-me ele com os beijos da sua boca; porque melhor é o teu amor do que o vinho.
³ Suave é o aroma dos teus unguentos; como o unguento derramado é o teu nome; por isso as virgens te amam.
⁴ Leva-me tu; correremos após ti. O rei me introduziu nas suas câmaras; em ti nos regozijaremos e nos alegraremos; do teu amor nos lembraremos, mais do que do vinho; os retos te amam.
⁵ Eu sou morena, porém formosa, ó filhas de Jerusalém, como as tendas de Quedar, como as cortinas de Salomão.
⁶ Não olheis para o eu ser morena, porque o sol resplandeceu sobre mim; os filhos de minha mãe indignaram-se contra mim, puseram-me por guarda das vinhas; a minha vinha, porém, não guardei.
⁷ Dize-me, ó tu, a quem ama a minha alma: Onde apascentas o teu rebanho, onde o fazes descansar ao meio-dia; pois por que razão seria eu como a que anda errante junto aos rebanhos de teus companheiros?
⁸ Se tu não o sabes, ó mais formosa entre as mulheres, sai-te pelas pisadas do rebanho, e apascenta as tuas cabras junto às moradas dos pastores.
⁹ Às éguas dos carros de Faraó te comparo, ó meu amor.
¹⁰ Formosas são as tuas faces entre os teus enfeites, o teu pescoço com os colares.
¹¹ Enfeites de ouro te faremos, com incrustações de prata.
¹² Enquanto o rei está assentado à sua mesa, o meu nardo exala o seu perfume.
¹³ O meu amado é para mim como um ramalhete de mirra, posto entre os meus seios.
¹⁴ Como um ramalhete de hena nas vinhas de En-Gedi é para mim o meu amado.
¹⁵ Eis que és formosa, ó meu amor, eis que és formosa; os teus olhos são como os das pombas.
¹⁶ Eis que és formoso, ó amado meu, e também amável; o nosso leito é verde.
¹⁷ As traves da nossa casa são de cedro, as nossas varandas de cipreste.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "A que o amado compara o amor da sua amada no capítulo 1?",
                        opcoes: [
                            { numero: 1, texto: "Ao mel silvestre", correta: false },
                            { numero: 2, texto: "A um jardim fechado", correta: false },
                            { numero: 3, texto: "É melhor do que o vinho", correta: true },
                            { numero: 4, texto: "Ao ouro de Ofir", correta: false }
                        ],
                        explicacao: "Cantares 1:2 - Beije-me ele com os beijos da sua boca; porque melhor é o teu amor do que o vinho.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como a amada se descreve em relação à sua cor?",
                        opcoes: [
                            { numero: 1, texto: "Eu sou branca e loira", correta: false },
                            { numero: 2, texto: "Eu sou morena (escura), porém formosa", correta: true },
                            { numero: 3, texto: "Eu sou pálida como a lua", correta: false },
                            { numero: 4, texto: "Eu sou morena e triste", correta: false }
                        ],
                        explicacao: "Cantares 1:5 - Eu sou morena, porém formosa, ó filhas de Jerusalém, como as tendas de Quedar.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Onde o amado apascenta o seu rebanho ao meio-dia?",
                        opcoes: [
                            { numero: 1, texto: "Nas cavernas de Engedi", correta: false },
                            { numero: 2, texto: "No topo das montanhas", correta: false },
                            { numero: 3, texto: "No deserto de Judá", correta: false },
                            { numero: 4, texto: "Entre os pastos, ao lado das tendas dos pastores", correta: true }
                        ],
                        explicacao: "Cantares 1:7-8 - Dize-me... onde apascentas, onde o fazes descansar ao meio-dia... sai pelas pisadas do rebanho.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "A Rosa de Sarom",
            texto: `¹ Eu sou a rosa de Sarom, o lírio dos vales.
² Qual o lírio entre os espinhos, tal é meu amor entre as filhas.
³ Qual a macieira entre as árvores do bosque, tal é o meu amado entre os filhos; desejo muito a sua sombra, e debaixo dela me assento; e o seu fruto é doce ao meu paladar.
⁴ Levou-me à casa do banquete, e o seu estandarte sobre mim era o amor.
⁵ Sustentai-me com passas, confortai-me com maçãs, porque desfaleço de amor.
⁶ A sua mão esquerda esteja debaixo da minha cabeça, e a sua mão direita me abrace.
⁷ Conjuro-vos, ó filhas de Jerusalém, pelas gazelas e cervas do campo, que não acordeis nem desperteis o meu amor, até que queira.
⁸ Esta é a voz do meu amado; ei-lo aí, que já vem saltando sobre os montes, pulando sobre os outeiros.
⁹ O meu amado é semelhante ao gamo, ou ao filho do veado; eis que está detrás da nossa parede, olhando pelas janelas, espreitando pelas grades.
¹⁰ O meu amado fala e me diz: Levanta-te, meu amor, formosa minha, e vem.
¹¹ Porque eis que passou o inverno; a chuva cessou, e se foi;
¹² Aparecem as flores na terra, o tempo de cantar chega, e a voz da rola ouve-se em nossa terra.
¹³ A figueira já deu os seus figos verdes, e as vides em flor exalam o seu aroma; levanta-te, meu amor, formosa minha, e vem.
¹⁴ Pomba minha, que andas pelas fendas das penhas, no oculto das ladeiras, mostra-me a tua face, faze-me ouvir a tua voz, porque a tua voz é doce, e a tua face graciosa.
¹⁵ Apanhai-nos as raposas, as raposinhas, que fazem mal às vinhas, porque as nossas vinhas estão em flor.
¹⁶ O meu amado é meu, e eu sou dele; ele apascenta o seu rebanho entre os lírios.
¹⁷ Até que refresque o dia, e fujam as sombras, volta, amado meu; faze-te semelhante ao gamo ou ao filho dos veados sobre os montes de Beter.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como a amada se autodenomina no início do capítulo 2?",
                        opcoes: [
                            { numero: 1, texto: "Eu sou a rosa de Sarom, o lírio dos vales", correta: true },
                            { numero: 2, texto: "Eu sou a videira verdadeira", correta: false },
                            { numero: 3, texto: "Eu sou a oliveira do monte", correta: false },
                            { numero: 4, texto: "Eu sou a palmeira do deserto", correta: false }
                        ],
                        explicacao: "Cantares 2:1 - Eu sou a rosa de Sarom, o lírio dos vales.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o amado diz que passou e se foi, chamando a amada para sair?",
                        opcoes: [
                            { numero: 1, texto: "A guerra", correta: false },
                            { numero: 2, texto: "O tempo de sofrimento", correta: false },
                            { numero: 3, texto: "O inverno e a chuva", correta: true },
                            { numero: 4, texto: "A escuridão da noite", correta: false }
                        ],
                        explicacao: "Cantares 2:11 - Porque eis que passou o inverno; a chuva cessou, e se foi.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que as pequenas raposas fazem, segundo o versículo 15?",
                        opcoes: [
                            { numero: 1, texto: "Fogem dos caçadores", correta: false },
                            { numero: 2, texto: "Dormem nas covas", correta: false },
                            { numero: 3, texto: "Uivam para a lua", correta: false },
                            { numero: 4, texto: "Faziam danos nas vinhas", correta: true }
                        ],
                        explicacao: "Cantares 2:15 - Apanhai-nos as raposas, as raposinhas, que fazem danos nas vinhas.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "O Cortejo de Salomão",
            texto: ` ¹ De noite, em minha cama, busquei aquele a quem ama a minha alma; busquei-o, e não o achei.
² Levantar-me-ei, pois, e rodearei a cidade; pelas ruas e pelas praças buscarei aquele a quem ama a minha alma; busquei-o, e não o achei.
³ Acharam-me os guardas, que rondavam pela cidade; eu lhes perguntei: Vistes aquele a quem ama a minha alma?
⁴ Apartando-me eu um pouco deles, logo achei aquele a quem ama a minha alma; agarrei-me a ele, e não o larguei, até que o introduzi em casa de minha mãe, na câmara daquela que me gerou.
⁵ Conjuro-vos, ó filhas de Jerusalém, pelas gazelas e cervas do campo, que não acordeis, nem desperteis o meu amor, até que queira.
⁶ Quem é esta que sobe do deserto, como colunas de fumaça, perfumada de mirra, de incenso, e de todos os pós dos mercadores?
⁷ Eis que é a liteira de Salomão; sessenta valentes estão ao redor dela, dos valentes de Israel;
⁸ Todos armados de espadas, destros na guerra; cada um com a sua espada à cinta por causa dos temores noturnos.
⁹ O rei Salomão fez para si uma carruagem de madeira do Líbano.
¹⁰ Fez-lhe as colunas de prata, o estrado de ouro, o assento de púrpura, o interior revestido com amor, pelas filhas de Jerusalém.
¹¹ Saí, ó filhas de Sião, e contemplai ao rei Salomão com a coroa com que o coroou sua mãe no dia do seu desposório e no dia do júbilo do seu coração
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que a amada fez durante a noite em sua cama?",
                        opcoes: [
                            { numero: 1, texto: "Dormiu profundamente", correta: false },
                            { numero: 2, texto: "Buscou aquele a quem ama a sua alma", correta: true },
                            { numero: 3, texto: "Escreveu poemas", correta: false },
                            { numero: 4, texto: "Orou pelos seus pais", correta: false }
                        ],
                        explicacao: "Cantares 3:1 - De noite, em minha cama, busquei aquele a quem ama a minha alma.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quantos valentes estavam ao redor da liteira (carruagem) de Salomão?",
                        opcoes: [
                            { numero: 1, texto: "Doze valentes", correta: false },
                            { numero: 2, texto: "Cem valentes", correta: false },
                            { numero: 3, texto: "Sessenta valentes", correta: true },
                            { numero: 4, texto: "Mil valentes", correta: false }
                        ],
                        explicacao: "Cantares 3:7 - Eis que é a liteira de Salomão; sessenta valentes estão ao redor dela.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "De que madeira o rei Salomão fez para si uma carruagem?",
                        opcoes: [
                            { numero: 1, texto: "Madeira de acácia", correta: false },
                            { numero: 2, texto: "Madeira de carvalho", correta: false },
                            { numero: 3, texto: "Madeira de oliveira", correta: false },
                            { numero: 4, texto: "Madeira do Líbano (cedro)", correta: true }
                        ],
                        explicacao: "Cantares 3:9 - O rei Salomão fez para si uma carruagem de madeira do Líbano.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "A Beleza da Noiva",
            texto: `¹ Eis que és formosa, meu amor, eis que és formosa; os teus olhos são como os das pombas entre as tuas tranças; o teu cabelo é como o rebanho de cabras que pastam no monte de Gileade.
² Os teus dentes são como o rebanho das ovelhas tosquiadas, que sobem do lavadouro, e das quais todas produzem gêmeos, e nenhuma há estéril entre elas.
³ Os teus lábios são como um fio de escarlate, e o teu falar é agradável; a tua fronte é qual um pedaço de romã entre os teus cabelos.
⁴ O teu pescoço é como a torre de Davi, edificada para pendurar armas; mil escudos pendem dela, todos broquéis de poderosos.
⁵ Os teus dois seios são como dois filhos gêmeos da gazela, que se apascentam entre os lírios.
⁶ Até que refresque o dia, e fujam as sombras, irei ao monte da mirra, e ao outeiro do incenso.
⁷ Tu és toda formosa, meu amor, e em ti não há mancha.
⁸ Vem comigo do Líbano, ó minha esposa, vem comigo do Líbano; olha desde o cume de Amana, desde o cume de Senir e de Hermom, desde os covis dos leões, desde os montes dos leopardos.
⁹ Enlevaste-me o coração, minha irmã, minha esposa; enlevaste-me o coração com um dos teus olhares, com um colar do teu pescoço.
¹⁰ Que belos são os teus amores, minha irmã, esposa minha! Quanto melhor é o teu amor do que o vinho! E o aroma dos teus unguentos do que o de todas as especiarias!
¹¹ Favos de mel manam dos teus lábios, minha esposa! Mel e leite estão debaixo da tua língua, e o cheiro dos teus vestidos é como o cheiro do Líbano.
¹² Jardim fechado és tu, minha irmã, esposa minha, manancial fechado, fonte selada.
¹³ Os teus renovos são um pomar de romãs, com frutos excelentes, o cipreste com o nardo.
¹⁴ O nardo, e o açafrão, o cálamo, e a canela, com toda a sorte de árvores de incenso, a mirra e aloés, com todas as principais especiarias.
¹⁵ És a fonte dos jardins, poço das águas vivas, que correm do Líbano!
¹⁶ Levanta-te, vento norte, e vem tu, vento sul; assopra no meu jardim, para que destilem os seus aromas. Ah! Entre o meu amado no seu jardim, e coma os seus frutos excelentes!
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "A que o amado compara os dentes da sua amada?",
                        opcoes: [
                            { numero: 1, texto: "A um rebanho de ovelhas tosquiadas que sobem do lavadouro", correta: true },
                            { numero: 2, texto: "A pérolas brancas", correta: false },
                            { numero: 3, texto: "A pedras de mármore", correta: false },
                            { numero: 4, texto: "A grãos de trigo", correta: false }
                        ],
                        explicacao: "Cantares 4:2 - Os teus dentes são como o rebanho das ovelhas tosquiadas, que sobem do lavadouro.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O amado diz que os lábios da amada são como um fio de quê?",
                        opcoes: [
                            { numero: 1, texto: "Fio de ouro", correta: false },
                            { numero: 2, texto: "Fio de seda", correta: false },
                            { numero: 3, texto: "Fio de escarlata", correta: true },
                            { numero: 4, texto: "Fio de linho", correta: false }
                        ],
                        explicacao: "Cantares 4:3 - Os teus lábios são como um fio de escarlata, e o teu falar é doce.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como o amado descreve a amada no versículo 7, em termos de perfeição?",
                        opcoes: [
                            { numero: 1, texto: "Quase perfeita", correta: false },
                            { numero: 2, texto: "Bonita aos olhos de muitos", correta: false },
                            { numero: 3, texto: "Tu és toda formosa, amada minha, e em ti não há mancha", correta: true },
                            { numero: 4, texto: "A mais bela entre as irmãs", correta: false }
                        ],
                        explicacao: "Cantares 4:7 - Tu és toda formosa, meu amor, e em ti não há mancha.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "O Encontro e o Desejo",
            texto: ` ¹ Já entrei no meu jardim, minha irmã, minha esposa; colhi a minha mirra com a minha especiaria, comi o meu favo com o meu mel, bebi o meu vinho com o meu leite; comei, amigos, bebei abundantemente, ó amados.
² Eu dormia, mas o meu coração velava; e eis a voz do meu amado que está batendo: abre-me, minha irmã, meu amor, pomba minha, imaculada minha, porque a minha cabeça está cheia de orvalho, os meus cabelos das gotas da noite.
³ Já despi a minha roupa; como a tornarei a vestir? Já lavei os meus pés; como os tornarei a sujar?
⁴ O meu amado pôs a sua mão pela fresta da porta, e as minhas entranhas estremeceram por amor dele.
⁵ Eu me levantei para abrir ao meu amado, e as minhas mãos gotejavam mirra, e os meus dedos mirra com doce aroma, sobre as aldravas da fechadura.
⁶ Eu abri ao meu amado, mas já o meu amado tinha se retirado, e tinha ido; a minha alma desfaleceu quando ele falou; busquei-o e não o achei, chamei-o e não me respondeu.
⁷ Acharam-me os guardas que rondavam pela cidade; espancaram-me, feriram-me, tiraram-me o manto os guardas dos muros.
⁸ Conjuro-vos, ó filhas de Jerusalém, que, se achardes o meu amado, lhe digais que estou enferma de amor.
⁹ Que é o teu amado mais do que outro amado, ó tu, a mais formosa entre as mulheres? Que é o teu amado mais do que outro amado, que tanto nos conjuras?
¹⁰ O meu amado é branco e rosado; ele é o primeiro entre dez mil.
¹¹ A sua cabeça é como o ouro mais apurado, os seus cabelos são crespos, pretos como o corvo.
¹² Os seus olhos são como os das pombas junto às correntes das águas, lavados em leite, postos em engaste.
¹³ As suas faces são como um canteiro de bálsamo, como flores perfumadas; os seus lábios são como lírios gotejando mirra com doce aroma.
¹⁴ As suas mãos são como anéis de ouro engastados de berilo; o seu ventre como alvo marfim, coberto de safiras.
¹⁵ As suas pernas como colunas de mármore, colocadas sobre bases de ouro puro; o seu aspecto como o Líbano, excelente como os cedros.
¹⁶ A sua boca é muitíssimo suave; sim, ele é totalmente desejável. Tal é o meu amado, e tal o meu amigo, ó filhas de Jerusalém.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que a amada diz que aconteceu com o seu coração quando o amado falou?",
                        opcoes: [
                            { numero: 1, texto: "Ficou endurecido", correta: false },
                            { numero: 2, texto: "A minha alma saiu (desfaleceu) quando ele falou", correta: true },
                            { numero: 3, texto: "Encheu-se de raiva", correta: false },
                            { numero: 4, texto: "Parou de bater", correta: false }
                        ],
                        explicacao: "Cantares 5:6 - Eu abri ao meu amado... a minha alma saiu quando ele falou.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como são as mãos do amado descritas pelas amada?",
                        opcoes: [
                            { numero: 1, texto: "Mãos de trabalhador", correta: false },
                            { numero: 2, texto: "Como anéis de ouro engastados de berilo", correta: true },
                            { numero: 3, texto: "Mãos fortes como o bronze", correta: false },
                            { numero: 4, texto: "Mãos brancas como a neve", correta: false }
                        ],
                        explicacao: "Cantares 5:14 - As suas mãos são como anéis de ouro engastados de berilo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "De que cor é o cabelo do amado, segundo a descrição da amada?",
                        opcoes: [
                            { numero: 1, texto: "Preto como o corvo", correta: true },
                            { numero: 2, texto: "Loiro como o trigo", correta: false },
                            { numero: 3, texto: "Branco como a lã", correta: false },
                            { numero: 4, texto: "Ruivo como o fogo", correta: false }
                        ],
                        explicacao: "Cantares 5:11 - A sua cabeça é como o ouro mais apurado, os seus cabelos são crespos, pretos como o corvo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "A Formosura da Noiva",
            texto: `¹ Para onde foi o teu amado, ó mais formosa entre as mulheres? Para onde se retirou o teu amado, para que o busquemos contigo?
² O meu amado desceu ao seu jardim, aos canteiros de bálsamo, para apascentar nos jardins e para colher os lírios.
³ Eu sou do meu amado, e o meu amado é meu; ele apascenta entre os lírios.
⁴ Formosa és, meu amor, como Tirza, aprazível como Jerusalém, terrível como um exército com bandeiras.
⁵ Desvia de mim os teus olhos, porque eles me dominam. O teu cabelo é como o rebanho das cabras que aparecem em Gileade.
⁶ Os teus dentes são como o rebanho de ovelhas que sobem do lavadouro, e das quais todas produzem gêmeos, e não há estéril entre elas.
⁷ Como um pedaço de romã, assim são as tuas faces entre os teus cabelos.
⁸ Sessenta são as rainhas, e oitenta as concubinas, e as virgens sem número.
⁹ Porém uma é a minha pomba, a minha imaculada, a única de sua mãe, e a mais querida daquela que a deu à luz; viram-na as filhas e chamaram-na bem-aventurada, as rainhas e as concubinas louvaram-na.
¹⁰ Quem é esta que aparece como a alva do dia, formosa como a lua, brilhante como o sol, terrível como um exército com bandeiras?
¹¹ Desci ao jardim das nogueiras, para ver os frutos do vale, a ver se floresciam as vides e brotavam as romãzeiras.
¹² Antes de eu o sentir, me pôs a minha alma nos carros do meu nobre povo.
¹³ Volta, volta, ó Sulamita, volta, volta, para que nós te vejamos. Por que olhais para a Sulamita como para as fileiras de dois exércitos?
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "A quem o amado compara a sua amada, dizendo que ela é 'terrível como um exército com bandeiras'?",
                        opcoes: [
                            { numero: 1, texto: "À rainha de Sabá", correta: false },
                            { numero: 2, texto: "À alva do dia, formosa como a lua e pura como o sol", correta: true },
                            { numero: 3, texto: "Às muralhas de Jerusalém", correta: false },
                            { numero: 4, texto: "Às carruagens de faraó", correta: false }
                        ],
                        explicacao: "Cantares 6:10 - Quem é esta que aparece como a alva do dia, formosa como a lua, pura como o sol, terrível como um exército com bandeiras?",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quantas eram as rainhas e concubinas mencionadas no capítulo 6?",
                        opcoes: [
                            { numero: 1, texto: "Sete rainhas e dez concubinas", correta: false },
                            { numero: 2, texto: "Vinte rainhas e quarenta concubinas", correta: false },
                            { numero: 3, texto: "Sessenta são as rainhas, e oitenta as concubinas", correta: true },
                            { numero: 4, texto: "Cem rainhas e mil concubinas", correta: false }
                        ],
                        explicacao: "Cantares 6:8 - Sessenta são as rainhas, e oitenta as concubinas, e as virgens sem número.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como o amado descreve a exclusividade de sua amada no versículo 9?",
                        opcoes: [
                            { numero: 1, texto: "Uma entre muitas", correta: false },
                            { numero: 2, texto: "Apenas mais uma virgem", correta: false },
                            { numero: 3, texto: "Minha pomba, minha imaculada, é a única", correta: true },
                            { numero: 4, texto: "A mais rica das filhas", correta: false }
                        ],
                        explicacao: "Cantares 6:9 - Mas uma só é a minha pomba, a minha imaculada; ela é a única de sua mãe.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        7: {
            titulo: "A Perfeição da Amada",
            texto: `¹ Quão formosos são os teus pés nos sapatos, ó filha do príncipe! Os contornos de tuas coxas são como joias, trabalhadas por mãos de artista.
² O teu umbigo como uma taça redonda, a que não falta bebida; o teu ventre como montão de trigo, cercado de lírios.
³ Os teus dois seios como dois filhos gêmeos de gazela.
⁴ O teu pescoço como a torre de marfim; os teus olhos como as piscinas de Hesbom, junto à porta de Bate-Rabim; o teu nariz como torre do Líbano, que olha para Damasco.
⁵ A tua cabeça sobre ti é como o monte Carmelo, e os cabelos da tua cabeça como a púrpura; o rei está preso nas galerias.
⁶ Quão formosa, e quão aprazível és, ó amor em delícias!
⁷ A tua estatura é semelhante à palmeira; e os teus seios são semelhantes aos cachos de uvas.
⁸ Dizia eu: Subirei à palmeira, pegarei em seus ramos; e então os teus seios serão como os cachos na vide, e o cheiro da tua respiração como o das maçãs.
⁹ E a tua boca como o bom vinho para o meu amado, que se bebe suavemente, e faz com que falem os lábios dos que dormem.
¹⁰ Eu sou do meu amado, e ele me tem afeição.
¹¹ Vem, ó amado meu, saiamos ao campo, passemos as noites nas aldeias.
¹² Levantemo-nos de manhã para ir às vinhas, vejamos se florescem as vides, se já aparecem as tenras uvas, se já brotam as romãzeiras; ali te darei os meus amores.
¹³ As mandrágoras exalam o seu perfume, e às nossas portas há todo o gênero de excelentes frutos, novos e velhos; ó amado meu, eu os guardei para ti.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como são descritos os passos da amada no início do capítulo 7?",
                        opcoes: [
                            { numero: 1, texto: "Quão formosos são os teus pés nas sandálias, ó filha de príncipe!", correta: true },
                            { numero: 2, texto: "Passos lentos como os da gazela", correta: false },
                            { numero: 3, texto: "Pés descalços sobre a areia", correta: false },
                            { numero: 4, texto: "Passos pesados como os do guerreiro", correta: false }
                        ],
                        explicacao: "Cantares 7:1 - Quão formosos são os teus pés nas sandálias, ó filha de príncipe!",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A que é comparada a estatura da amada no versículo 7?",
                        opcoes: [
                            { numero: 1, texto: "A um cedro do Líbano", correta: false },
                            { numero: 2, texto: "A uma torre de vigia", correta: false },
                            { numero: 3, texto: "A uma palmeira", correta: true },
                            { numero: 4, texto: "A uma videira carregada", correta: false }
                        ],
                        explicacao: "Cantares 7:7 - A tua estatura é semelhante à palmeira, e os teus seios aos cachos de uvas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Para onde a amada convida o amado a ir para ver se as videiras florescem?",
                        opcoes: [
                            { numero: 1, texto: "Para dentro do palácio", correta: false },
                            { numero: 2, texto: "Para as cidades estrangeiras", correta: false },
                            { numero: 3, texto: "Para as praças de Jerusalém", correta: false },
                            { numero: 4, texto: "Para o campo e para as aldeias", correta: true }
                        ],
                        explicacao: "Cantares 7:11-12 - Vem, ó amado meu, saiamos ao campo, pernoitemos nas aldeias... vejamos se florescem as vides.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        8: {
            titulo: "A Força do Amor",
            texto: ` ¹ Ah! Quem me dera que foras como meu irmão, que mamou aos seios de minha mãe! Quando te encontrasse lá fora, beijar-te-ia, e não me desprezariam!
² Levar-te-ia e te introduziria na casa de minha mãe, e tu me ensinarias; eu te daria a beber do vinho aromático e do mosto das minhas romãs.
³ A sua mão esquerda esteja debaixo da minha cabeça, e a sua direita me abrace.
⁴ Conjuro-vos, ó filhas de Jerusalém, que não acordeis nem desperteis o meu amor, até que queira.
⁵ Quem é esta que sobe do deserto, e vem encostada ao seu amado? Debaixo da macieira te despertei, ali esteve tua mãe com dores; ali esteve com dores aquela que te deu à luz.
⁶ Põe-me como selo sobre o teu coração, como selo sobre o teu braço, porque o amor é forte como a morte, e duro como a sepultura o ciúme; as suas brasas são brasas de fogo, com veementes labaredas.
⁷ As muitas águas não podem apagar este amor, nem os rios afogá-lo; ainda que alguém desse todos os bens de sua casa pelo amor, certamente o desprezariam.
⁸ Temos uma irmã pequena, que ainda não tem seios; que faremos a esta nossa irmã, no dia em que dela se falar?
⁹ Se ela for um muro, edificaremos sobre ela um palácio de prata; e, se ela for uma porta, cercá-la-emos com tábuas de cedro.
¹⁰ Eu sou um muro, e os meus seios são como as suas torres; então eu era aos seus olhos como aquela que acha paz.
¹¹ Teve Salomão uma vinha em Baal-Hamom; entregou-a a uns guardas; e cada um lhe trazia pelo seu fruto mil peças de prata.
¹² A minha vinha, que me pertence, está diante de mim; as mil peças de prata são para ti, ó Salomão, e duzentas para os que guardam o seu fruto.
¹³ Ó tu, que habitas nos jardins, os companheiros estão atentos para ouvir a tua voz; faze-me, pois, também ouvi-la.
¹⁴ Vem depressa, amado meu, e faze-te semelhante ao gamo ou ao filho dos veados sobre os montes dos aromas.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como é descrito o amor em relação à morte no capítulo 8?",
                        opcoes: [
                            { numero: 1, texto: "O amor é mais fraco que a morte", correta: false },
                            { numero: 2, texto: "O amor foge da morte", correta: false },
                            { numero: 3, texto: "O amor é forte como a morte", correta: true },
                            { numero: 4, texto: "O amor não conhece a morte", correta: false }
                        ],
                        explicacao: "Cantares 8:6 - Põe-me como selo sobre o teu coração... porque o amor é forte como a morte.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que as muitas águas não podem fazer contra o amor?",
                        opcoes: [
                            { numero: 1, texto: "Não podem apagá-lo, nem os rios afogá-lo", correta: true },
                            { numero: 2, texto: "Podem esfriá-lo com o tempo", correta: false },
                            { numero: 3, texto: "Podem levá-lo para longe", correta: false },
                            { numero: 4, texto: "Podem escondê-lo nas profundezas", correta: false }
                        ],
                        explicacao: "Cantares 8:7 - As muitas águas não podem apagar este amor, nem os rios afogá-lo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceria se alguém desse todos os bens de sua casa pelo amor?",
                        opcoes: [
                            { numero: 1, texto: "Seria muito admirado", correta: false },
                            { numero: 2, texto: "Seria desprezado", correta: true },
                            { numero: 3, texto: "Conseguiria comprar o amor", correta: false },
                            { numero: 4, texto: "Ficaria pobre e feliz", correta: false }
                        ],
                        explicacao: "Cantares 8:7 - Se alguém desse todos os bens de sua casa pelo amor, certamente o desprezariam.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    } // Fecha a chave de 'capitulos'
}; // Fecha o objeto 'cantares'