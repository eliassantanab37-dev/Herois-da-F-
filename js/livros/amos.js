const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const amos = {
    nome: "Amós",
    icone: "🌳",
    autor: "Amós",
   // background: "./imagens/amos_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "Julgamento das Nações Vizinhas",
            texto: `¹ As palavras de Amós, que estava entre os pastores de Tecoa, as quais viu a respeito de Israel, nos dias de Uzias, rei de Judá, e nos dias de Jeroboão, filho de Joás, rei de Israel, dois anos antes do terremoto.
² Ele disse: O Senhor bramará de Sião, e de Jerusalém fará ouvir a sua voz; os prados dos pastores prantearão, e secar-se-á o cume do Carmelo.
³ Assim diz o Senhor: Por três transgressões de Damasco, e por quatro, não retirarei o castigo, porque trilharam a Gileade com trilhos de ferro.
⁴ Por isso porei fogo à casa de Hazael, e ele consumirá os palácios de Ben-Hadade.
⁵ E quebrarei o ferrolho de Damasco, e exterminarei o morador do vale de Áven, e ao que tem o cetro de Bete-Éden; e o povo da Síria será levado em cativeiro a Quir, diz o Senhor.
⁶ Assim diz o Senhor: Por três transgressões de Gaza, e por quatro, não retirarei o castigo, porque levaram em cativeiro todos os cativos para os entregarem a Edom.
⁷ Por isso porei fogo ao muro de Gaza, e ele consumirá os seus palácios.
⁸ E exterminarei o morador de Asdode, e o que tem o cetro de Ascalom, e tornarei a minha mão contra Ecrom; e o restante dos filisteus perecerá, diz o Senhor Deus.
⁹ Assim diz o Senhor: Por três transgressões de Tiro, e por quatro, não retirarei o castigo, porque entregaram todos os cativos a Edom, e não se lembraram da aliança dos irmãos.
¹⁰ Por isso porei fogo ao muro de Tiro, e ele consumirá os seus palácios.
¹¹ Assim diz o Senhor: Por três transgressões de Edom, e por quatro, não retirarei o castigo, porque perseguiu a seu irmão à espada, e aniquilou as suas misericórdias; e a sua ira despedaçou eternamente, e conservou a sua indignação para sempre.
¹² Por isso porei fogo a Temã, e ele consumirá os palácios de Bozra.
¹³ Assim diz o Senhor: Por três transgressões dos filhos de Amom, e por quatro, não retirarei o castigo, porque fenderam o ventre às grávidas de Gileade, para dilatarem os seus termos.
¹⁴ Por isso porei fogo ao muro de Rabá, e ele consumirá os seus palácios, com alarido no dia da batalha, com tempestade no dia da tormenta.
¹⁵ E o seu rei irá para o cativeiro, ele e os seus príncipes juntamente, diz o Senhor.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era a ocupação de Amós antes de ser chamado para profetizar?",
                        opcoes: [
                            { numero: 1, texto: "Sacerdote em Jerusalém", correta: false },
                            { numero: 2, texto: "Pescador no Mar da Galiléia", correta: false },
                            { numero: 3, texto: "Entre os pastores de Tecoa", correta: true },
                            { numero: 4, texto: "Soldado do rei Uzias", correta: false }
                        ],
                        explicacao: "Amós 1:1 - As palavras de Amós, que estava entre os pastores de Tecoa...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por que o Senhor não retiraria o castigo de Damasco?",
                        opcoes: [
                            { numero: 1, texto: "Porque trilharam a Gileade com trilhos de ferro", correta: true },
                            { numero: 2, texto: "Porque roubaram o ouro do templo", correta: false },
                            { numero: 3, texto: "Porque adoraram deuses de pedra", correta: false },
                            { numero: 4, texto: "Porque impediram a passagem do povo", correta: false }
                        ],
                        explicacao: "Amós 1:3 - ...Por três transgressões de Damasco... porque trilharam a Gileade com trilhos de ferro.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor enviaria sobre o muro de Gaza para consumir os seus palácios?",
                        opcoes: [
                            { numero: 1, texto: "Uma grande inundação", correta: false },
                            { numero: 2, texto: "Um fogo", correta: true },
                            { numero: 3, texto: "Uma nuvem de gafanhotos", correta: false },
                            { numero: 4, texto: "Um exército estrangeiro", correta: false }
                        ],
                        explicacao: "Amós 1:7 - Por isso enviarei um fogo sobre o muro de Gaza, que consumirá os seus palácios.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "Julgamento de Moabe, Judá e Israel",
            texto: `¹ Assim diz o Senhor: Por três transgressões de Moabe, e por quatro, não retirarei o castigo, porque queimou os ossos do rei de Edom, até os tornar a cal.
² Por isso porei fogo a Moabe, e consumirá os palácios de Queriote; e Moabe morrerá com grande estrondo, com alarido, com som de trombeta.
³ E exterminarei o juiz do meio dele, e a todos os seus príncipes com ele matarei, diz o Senhor.
⁴ Assim diz o Senhor: Por três transgressões de Judá, e por quatro, não retirarei o castigo, porque rejeitaram a lei do Senhor, e não guardaram os seus estatutos, antes se deixaram enganar por suas próprias mentiras, após as quais andaram seus pais.
⁵ Por isso porei fogo a Judá, e ele consumirá os palácios de Jerusalém.
⁶ Assim diz o Senhor: Por três transgressões de Israel, e por quatro, não retirarei o castigo, porque vendem o justo por dinheiro, e o necessitado por um par de sapatos,
⁷ Suspirando pelo pó da terra, sobre a cabeça dos pobres, pervertem o caminho dos mansos; e um homem e seu pai entram à mesma moça, para profanarem o meu santo nome.
⁸ E se deitam junto a qualquer altar sobre roupas empenhadas, e na casa dos seus deuses bebem o vinho dos que tinham multado.
⁹ Todavia eu destruí diante dele o amorreu, cuja altura era como a altura dos cedros, e que era forte como os carvalhos; mas destruí o seu fruto por cima, e as suas raízes por baixo.
¹⁰ Também vos fiz subir da terra do Egito, e quarenta anos vos guiei no deserto, para que possuísseis a terra do amorreu.
¹¹ E dentre vossos filhos suscitei profetas, e dentre os vossos jovens nazireus. Não é isto assim, filhos de Israel? Diz o Senhor.
¹² Mas vós aos nazireus destes vinho a beber, e aos profetas ordenastes, dizendo: Não profetizareis.
¹³ Eis que eu vos apertarei no vosso lugar como se aperta um carro cheio de feixes.
¹⁴ Assim perecerá a fuga ao ágil; nem o forte corroborará a sua força, nem o poderoso livrará a sua vida.
¹⁵ E não ficará em pé o que maneja o arco, nem o ligeiro de pés se livrará, nem tampouco se livrará o que vai montado a cavalo.
¹⁶ E o mais corajoso entre os fortes fugirá nu naquele dia, diz o Senhor.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que Judá seria castigado, segundo o capítulo 2?",
                        opcoes: [
                            { numero: 1, texto: "Porque rejeitaram a lei do Senhor", correta: true },
                            { numero: 2, texto: "Porque não tinham exército", correta: false },
                            { numero: 3, texto: "Porque fugiram para o Egito", correta: false },
                            { numero: 4, texto: "Porque não plantaram as vinhas", correta: false }
                        ],
                        explicacao: "Amós 2:4 - ...porque rejeitaram a lei do Senhor, e não guardaram os seus estatutos...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por qual preço os ímpios de Israel vendiam o justo?",
                        opcoes: [
                            { numero: 1, texto: "Por trinta moedas de ouro", correta: false },
                            { numero: 2, texto: "Por um par de sapatos", correta: false },
                            { numero: 3, texto: "Por prata", correta: true },
                            { numero: 4, texto: "Por um campo de trigo", correta: false }
                        ],
                        explicacao: "Amós 2:6 - ...porquanto vendem o justo por prata, e o necessitado por um par de sapatos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor fez com o amorreu, cuja altura era como a dos cedros?",
                        opcoes: [
                            { numero: 1, texto: "Fê-lo rei sobre Israel", correta: false },
                            { numero: 2, texto: "Destruiu o seu fruto por cima e as suas raízes por baixo", correta: true },
                            { numero: 3, texto: "Levou-o para a Babilônia", correta: false },
                            { numero: 4, texto: "Escondeu-o numa caverna", correta: false }
                        ],
                        explicacao: "Amós 2:9 - Todavia eu destruí diante deles o amorreu... e destruí o seu fruto por cima, e as suas raízes por baixo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "A Responsabilidade de Israel",
            texto: ` ¹ Ouvi esta palavra que o Senhor fala contra vós, filhos de Israel, contra toda a família que fiz subir da terra do Egito, dizendo:
² De todas as famílias da terra só a vós vos tenho conhecido; portanto eu vos punirei por todas as vossas iniquidades.
³ Porventura andarão dois juntos, se não estiverem de acordo?
⁴ Rugirá o leão no bosque, sem que tenha presa? Levantará o leãozinho no seu covil a sua voz, se nada tiver apanhado?
⁵ Cairá a ave no laço em terra, se não houver armadilha para ela? Levantar-se-á da terra o laço, sem que tenha apanhado alguma coisa?
⁶ Tocar-se-á a trombeta na cidade, e o povo não estremecerá? Sucederá algum mal na cidade, sem que o Senhor o tenha feito?
⁷ Certamente o Senhor Deus não fará coisa alguma, sem ter revelado o seu segredo aos seus servos, os profetas.
⁸ Rugiu o leão, quem não temerá? Falou o Senhor Deus, quem não profetizará?
⁹ Fazei ouvir isso nos palácios de Asdode, e nos palácios da terra do Egito, e dizei: Ajuntai-vos sobre os montes de Samaria, e vede que grandes alvoroços há no meio dela, e como são oprimidos dentro dela.
¹⁰ Porque não sabem fazer o que é reto, diz o Senhor, aqueles que entesouram nos seus palácios a violência e a destruição.
¹¹ Portanto, o Senhor Deus diz assim: O inimigo virá, e cercará a terra, derrubará a tua fortaleza, e os teus palácios serão saqueados.
¹² Assim diz o Senhor: Como o pastor livra da boca do leão as duas pernas, ou um pedaço da orelha, assim serão livrados os filhos de Israel que habitam em Samaria, no canto da cama, e em Damasco, num leito.
¹³ Ouvi, e protestai contra a casa de Jacó, diz o Senhor Deus, o Deus dos Exércitos;
¹⁴ Pois no dia em que eu punir as transgressões de Israel, também castigarei os altares de Betel; e as pontas do altar serão cortadas, e cairão por terra.
¹⁵ E ferirei a casa de inverno juntamente com a casa de verão; e as casas de marfim perecerão, e as grandes casas terão fim, diz o Senhor.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Andarão dois juntos, se não estiverem...",
                        opcoes: [
                            { numero: 1, texto: "Com pressa?", correta: false },
                            { numero: 2, texto: "Armados?", correta: false },
                            { numero: 3, texto: "De acordo?", correta: true },
                            { numero: 4, texto: "Em silêncio?", correta: false }
                        ],
                        explicacao: "Amós 3:3 - Porventura andarão dois juntos, se não estiverem de acordo?",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor Deus não fará sem antes revelar o seu segredo?",
                        opcoes: [
                            { numero: 1, texto: "Sem o revelar aos seus servos, os profetas", correta: true },
                            { numero: 2, texto: "Sem avisar ao rei de Judá", correta: false },
                            { numero: 3, texto: "Sem tocar a trombeta no monte", correta: false },
                            { numero: 4, texto: "Sem enviar um anjo", correta: false }
                        ],
                        explicacao: "Amós 3:7 - Certamente o Senhor Deus não fará coisa alguma, sem ter revelado o seu segredo aos seus servos, os profetas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontecerá com as casas de marfim no dia do juízo?",
                        opcoes: [
                            { numero: 1, texto: "Serão dadas aos pobres", correta: false },
                            { numero: 2, texto: "Perecerão", correta: true },
                            { numero: 3, texto: "Ficarão ocultas", correta: false },
                            { numero: 4, texto: "Serão levadas para o mar", correta: false }
                        ],
                        explicacao: "Amós 3:15 - ...e as casas de marfim perecerão, e as grandes casas terão fim, diz o Senhor.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "A Falta de Arrependimento de Israel",
            texto: ` ¹ Ouvi esta palavra vós, vacas de Basã, que estais no monte de Samaria, que oprimis aos pobres, que esmagais os necessitados, que dizeis a vossos senhores: Dai cá, e bebamos.
² Jurou o Senhor Deus, pela sua santidade, que dias estão para vir sobre vós, em que vos levarão com ganchos e a vossos descendentes com anzóis de pesca.
³ E saireis pelas brechas, uma após outra, e sereis lançadas para Harmom, disse o Senhor.
⁴ Vinde a Betel, e transgredi; a Gilgal, e multiplicai as transgressões; e cada manhã trazei os vossos sacrifícios, e os vossos dízimos de três em três dias.
⁵ E oferecei o sacrifício de louvores do que é levedado, e apregoai as ofertas voluntárias, publicai-as; porque disso gostais, ó filhos de Israel, disse o Senhor Deus.
⁶ Por isso também vos dei limpeza de dentes em todas as vossas cidades, e falta de pão em todos os vossos lugares; contudo não vos convertestes a mim, disse o Senhor.
⁷ Além disso, retive de vós a chuva quando ainda faltavam três meses para a ceifa; e fiz que chovesse sobre uma cidade, e não chovesse sobre a outra cidade; sobre um campo choveu, mas o outro, sobre o qual não choveu, secou-se.
⁸ E andaram errantes duas ou três cidades, indo a outra cidade para beberem água, mas não se saciaram; contudo não vos convertestes a mim, disse o Senhor.
⁹ Feri-vos com queimadura, e com ferrugem; a multidão das vossas hortas, e das vossas vinhas, e das vossas figueiras, e das vossas oliveiras, comeu a locusta; contudo não vos convertestes a mim, disse o Senhor.
¹⁰ Enviei a peste contra vós, à maneira do Egito; os vossos jovens matei à espada, e os vossos cavalos deixei levar presos, e o mau cheiro dos vossos arraiais fiz subir às vossas narinas; contudo não vos convertestes a mim, disse o Senhor.
¹¹ Subverti a alguns dentre vós, como Deus subverteu a Sodoma e Gomorra, e vós fostes como um tição arrebatado do incêndio; contudo não vos convertestes a mim, disse o Senhor.
¹² Portanto, assim te farei, ó Israel! E porque isso te farei, prepara-te, ó Israel, para te encontrares com o teu Deus.
¹³ Porque eis aqui o que forma os montes, e cria o vento, e declara ao homem qual seja o seu pensamento, o que faz da manhã trevas, e pisa os altos da terra; o Senhor, o Deus dos Exércitos, é o seu nome.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor deu ao povo em todas as suas cidades, mas ainda assim não se converteram?",
                        opcoes: [
                            { numero: 1, texto: "Limpeza de dentes (fome)", correta: true },
                            { numero: 2, texto: "Muito ouro e prata", correta: false },
                            { numero: 3, texto: "Paz com os inimigos", correta: false },
                            { numero: 4, texto: "Roupas de linho fino", correta: false }
                        ],
                        explicacao: "Amós 4:6 - Por isso também vos dei limpeza de dentes em todas as vossas cidades, e falta de pão... contudo não vos convertestes a mim.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como o Senhor feriu as hortas e as vinhas de Israel?",
                        opcoes: [
                            { numero: 1, texto: "Com fogo e pedras", correta: false },
                            { numero: 2, texto: "Com inundação", correta: false },
                            { numero: 3, texto: "Com queima e ferrugem", correta: true },
                            { numero: 4, texto: "Com neve e gelo", correta: false }
                        ],
                        explicacao: "Amós 4:9 - Feri-vos com queima e com ferrugem; a multidão das vossas hortas... a lagarta a devorou.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Israel deve preparar-se para fazer, segundo o versículo 12?",
                        opcoes: [
                            { numero: 1, texto: "Preparar-se para a guerra", correta: false },
                            { numero: 2, texto: "Prepara-te para encontrares o teu Deus", correta: true },
                            { numero: 3, texto: "Preparar-se para a colheita", correta: false },
                            { numero: 4, texto: "Preparar-se para o exílio", correta: false }
                        ],
                        explicacao: "Amós 4:12 - ...prepara-te, ó Israel, para encontrares o teu Deus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "Lamentação e Chamado à Justiça",
            texto: `¹ Ouvi esta palavra, que levanto como uma lamentação sobre vós, ó casa de Israel.
² A virgem de Israel caiu, e não mais tornará a levantar-se; desamparada está na sua terra, não há quem a levante.
³ Porque assim diz o Senhor Deus: A cidade da qual saem mil conservará cem, e aquela da qual saem cem conservará dez, para a casa de Israel.
⁴ Porque assim diz o Senhor à casa de Israel: Buscai-me, e vivei.
⁵ Mas não busqueis a Betel, nem venhais a Gilgal, nem passeis a Berseba, porque Gilgal certamente será levada ao cativeiro, e Betel será desfeita em nada.
⁶ Buscai ao Senhor, e vivei, para que ele não irrompa na casa de José como um fogo, e a consuma, e não haja em Betel quem o apague.
⁷ Vós que converteis o juízo em alosna, e deitais por terra a justiça,
⁸ Procurai o que faz o Sete-Estrelo e o Órion e torna a sombra da noite em manhã, e faz escurecer o dia como a noite, que chama as águas do mar, e as derrama sobre a terra; o Senhor é o seu nome.
⁹ O que promove súbita destruição contra o forte; de modo que venha a destruição contra a fortaleza.
¹⁰ Odeiam na porta ao que os repreende, e abominam ao que fala sinceramente.
¹¹ Portanto, visto que pisais o pobre e dele exigis um tributo de trigo, edificastes casas de pedras lavradas, mas nelas não habitareis; vinhas desejáveis plantastes, mas não bebereis do seu vinho.
¹² Porque sei que são muitas as vossas transgressões e graves os vossos pecados; afligis o justo, tomais resgate, e rejeitais os necessitados na porta.
¹³ Portanto, o que for prudente guardará silêncio naquele tempo, porque o tempo será mau.
¹⁴ Buscai o bem, e não o mal, para que vivais; e assim o Senhor, o Deus dos Exércitos, estará convosco, como dizeis.
¹⁵ Odiai o mal, e amai o bem, e estabelecei na porta o juízo. Talvez o Senhor Deus dos Exércitos tenha piedade do remanescente de José.
¹⁶ Portanto, assim diz o Senhor, o Deus dos Exércitos, o Senhor: Em todas as ruas haverá pranto, e em todas as estradas dirão: Ai! Ai! E ao lavrador chamarão para choro, e para pranto os que souberem prantear.
¹⁷ E em todas as vinhas haverá pranto; porque passarei pelo meio de ti, diz o Senhor.
¹⁸ Ai daqueles que desejam o dia do Senhor! Para que quereis vós este dia do Senhor? Será de trevas e não de luz.
¹⁹ É como se um homem fugisse de diante do leão, e se encontrasse com ele o urso; ou como se entrando numa casa, a sua mão encostasse à parede, e fosse mordido por uma cobra.
²⁰ Não será, pois, o dia do Senhor trevas e não luz, e escuridão, sem que haja resplendor?
²¹ Odeio, desprezo as vossas festas, e as vossas assembleias solenes não me exalarão bom cheiro.
²² E ainda que me ofereçais holocaustos, ofertas de alimentos, não me agradarei delas; nem atentarei para as ofertas pacíficas de vossos animais gordos.
²³ Afasta de mim o estrépito dos teus cânticos; porque não ouvirei as melodias das tuas violas.
²⁴ Corra, porém, o juízo como as águas, e a justiça como o ribeiro impetuoso.
²⁵ Oferecestes-me vós sacrifícios e oblações no deserto por quarenta anos, ó casa de Israel?
²⁶ Antes levastes a tenda de vosso Moloque, e a estátua das vossas imagens, a estrela do vosso deus, que fizestes para vós mesmos.
²⁷ Portanto vos levarei cativos, para além de Damasco, diz o Senhor, cujo nome é o Deus dos Exércitos.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o povo deve buscar para que viva?",
                        opcoes: [
                            { numero: 1, texto: "Buscai ao Senhor", correta: true },
                            { numero: 2, texto: "Buscai auxílio no Egito", correta: false },
                            { numero: 3, texto: "Buscai o ouro de Ofir", correta: false },
                            { numero: 4, texto: "Buscai o descanso", correta: false }
                        ],
                        explicacao: "Amós 5:6 - Buscai ao Senhor, e vivei...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor odeia e despreza, segundo o versículo 21?",
                        opcoes: [
                            { numero: 1, texto: "As vossas festas", correta: true },
                            { numero: 2, texto: "As vossas colheitas", correta: false },
                            { numero: 3, texto: "Os vossos poços", correta: false },
                            { numero: 4, texto: "Os vossos rebanhos", correta: false }
                        ],
                        explicacao: "Amós 5:21 - Odeio, desprezo as vossas festas, e as vossas assembleias solenes não me darão nenhum prazer.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como deve correr o juízo e a justiça?",
                        opcoes: [
                            { numero: 1, texto: "Como um fogo que consome", correta: false },
                            { numero: 2, texto: "Como as águas e como um ribeiro impetuoso", correta: true },
                            { numero: 3, texto: "Como o vento no deserto", correta: false },
                            { numero: 4, texto: "Como o sol ao meio-dia", correta: false }
                        ],
                        explicacao: "Amós 5:24 - Corra, porém, o juízo como as águas, e a justiça como um ribeiro impetuoso.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "Ai dos que vivem despreocupados",
            texto: ` ¹ Ai dos que vivem sossegados em Sião, e dos que estão confiados no monte de Samaria, que têm nome entre as primeiras das nações, e aos quais vem a casa de Israel!
² Passai a Calne, e vede; e dali ide à grande Hamate; e depois descei a Gate dos filisteus; serão melhores que estes reinos? Ou maior o seu termo do que o vosso termo?
³ Ó vós que afastais o dia mau, e fazeis chegar o assento da violência.
⁴ Ai dos que dormem em camas de marfim, e se estendem sobre os seus leitos, e comem os cordeiros do rebanho, e os bezerros do meio do curral;
⁵ Que cantam ao som da viola, e inventam para si instrumentos musicais, assim como Davi;
⁶ Que bebem vinho em taças, e se ungem com o mais excelente óleo: mas não se afligem pela ruína de José;
⁷ Portanto agora irão em cativeiro entre os primeiros dos que forem levados cativos, e cessarão os festins dos banqueteadores.
⁸ Jurou o Senhor Deus por si mesmo, diz o Senhor, o Deus dos Exércitos: Abomino a soberba de Jacó, e odeio os seus palácios; por isso entregarei a cidade e tudo o que nela há.
⁹ E acontecerá que, se numa casa ficarem dez homens, morrerão.
¹⁰ Quando o tio de alguém, aquele que o queima, o tomar para levar-lhe os ossos para fora da casa, e disser ao que estiver no mais interior da casa: Está ainda alguém contigo? E este responder: Ninguém; então lhe dirá ele: Cala-te, porque não devemos fazer menção do nome do Senhor.
¹¹ Porque, eis que o Senhor ordena, e ferirá a casa grande de brechas, e a casa pequena de fendas.
¹² Porventura correrão cavalos sobre rocha? Lavrar-se-á nela com bois? Mas vós haveis tornado o juízo em fel, e o fruto da justiça em alosna;
¹³ Vós que vos alegrais do nada, vós que dizeis: Não é assim que por nossa própria força nos temos tornado poderosos?
¹⁴ Porque, eis que eu levantarei sobre vós, ó casa de Israel, uma nação, diz o Senhor, o Deus dos Exércitos, e oprimir-vos-á, desde a entrada de Hamate até ao ribeiro do deserto.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Ai dos que estão descansados em Sião e dos que confiam no monte de quê?",
                        opcoes: [
                            { numero: 1, texto: "Monte Horebe", correta: false },
                            { numero: 2, texto: "Monte Samaria", correta: true },
                            { numero: 3, texto: "Monte Sinai", correta: false },
                            { numero: 4, texto: "Monte Carmelo", correta: false }
                        ],
                        explicacao: "Amós 6:1 - Ai dos que estão descansados em Sião, e dos que confiam no monte de Samaria...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como o profeta descreve o luxo daqueles que não se afligem com a ruína de José?",
                        opcoes: [
                            { numero: 1, texto: "Dormem em tendas de seda", correta: false },
                            { numero: 2, texto: "Bebem água da chuva", correta: false },
                            { numero: 3, texto: "Ditam ordens ao povo", correta: false },
                            { numero: 4, texto: "Dormem em camas de marfim e comem cordeiros do rebanho", correta: true }
                        ],
                        explicacao: "Amós 6:4 - Que dormem em camas de marfim, e se estendem sobre os seus leitos, e comem os cordeiros do rebanho...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor Deus jurou por si mesmo que abomina?",
                        opcoes: [
                            { numero: 1, texto: "A soberba de Jacó", correta: true },
                            { numero: 2, texto: "As colheitas de trigo", correta: false },
                            { numero: 3, texto: "Os muros de Jerusalém", correta: false },
                            { numero: 4, texto: "O ouro do Egito", correta: false }
                        ],
                        explicacao: "Amós 6:8 - Jurou o Senhor Deus por si mesmo... Abomino a soberba de Jacó, e odeio os seus palácios...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        7: {
            titulo: "Três Visões e a Oposição a Amós",
            texto: ` ¹ O Senhor Deus assim me fez ver, e eis que ele formava gafanhotos no princípio do rebento da erva serôdia, e eis que era a erva serôdia depois de findas as ceifas do rei.
² E aconteceu que, tendo eles comido completamente a erva da terra, eu disse: Senhor Deus, perdoa, rogo-te; quem levantará a Jacó? Pois ele é pequeno.
³ Então o Senhor se arrependeu disso. Não acontecerá, disse o Senhor.
⁴ Assim me mostrou o Senhor Deus: Eis que o Senhor Deus clamava, para contender com fogo; este consumiu o grande abismo, e também devorou uma parte da terra.
⁵ Então eu disse: Senhor Deus, cessa, eu te peço; quem levantará a Jacó? Pois é pequeno.
⁶ E o Senhor se arrependeu disso. Nem isso acontecerá, disse o Senhor Deus.
⁷ Mostrou-me também assim: e eis que o Senhor estava sobre um muro, levantado a prumo; e tinha um prumo na sua mão.
⁸ E o Senhor me disse: Que vês tu, Amós? E eu disse: Um prumo. Então disse o Senhor: Eis que eu porei o prumo no meio do meu povo Israel; nunca mais passarei por ele.
⁹ Mas os altos de Isaque serão assolados, e destruídos os santuários de Israel; e levantar-me-ei com a espada contra a casa de Jeroboão.
¹⁰ Então Amazias, o sacerdote de Betel, mandou dizer a Jeroboão, rei de Israel: Amós tem conspirado contra ti, no meio da casa de Israel; a terra não poderá sofrer todas as suas palavras.
¹¹ Porque assim diz Amós: Jeroboão morrerá à espada, e Israel certamente será levado para fora da sua terra em cativeiro.
¹² Depois Amazias disse a Amós: Vai-te, ó vidente, e foge para a terra de Judá, e ali come o pão, e ali profetiza;
¹³ Mas em Betel daqui por diante não profetizes mais, porque é o santuário do rei e casa real.
¹⁴ E respondeu Amós, dizendo a Amazias: Eu não sou profeta, nem filho de profeta, mas boiadeiro, e cultivador de sicômoros.
¹⁵ Mas o Senhor me tirou de seguir o rebanho, e o Senhor me disse: Vai, e profetiza ao meu povo Israel.
¹⁶ Agora, pois, ouve a palavra do Senhor: Tu dizes: Não profetizes contra Israel, nem fales contra a casa de Isaque.
¹⁷ Portanto assim diz o Senhor: Tua mulher se prostituirá na cidade, e teus filhos e tuas filhas cairão à espada, e a tua terra será repartida a cordel, e tu morrerás na terra imunda, e Israel certamente será levado cativo para fora da sua terra.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual foi o objeto que o Senhor usou na visão para mostrar que não pouparia mais Israel?",
                        opcoes: [
                            { numero: 1, texto: "Uma corda de medir", correta: false },
                            { numero: 2, texto: "Um prumo", correta: true },
                            { numero: 3, texto: "Uma balança de ouro", correta: false },
                            { numero: 4, texto: "Uma espada flamejante", correta: false }
                        ],
                        explicacao: "Amós 7:8 - ...Eis que eu porei o prumo no meio do meu povo Israel; jamais passarei por ele.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem era o sacerdote de Betel que se opôs a Amós e o mandou fugir para Judá?",
                        opcoes: [
                            { numero: 1, texto: "Hilquias", correta: false },
                            { numero: 2, texto: "Zadoque", correta: false },
                            { numero: 3, texto: "Amazias", correta: true },
                            { numero: 4, texto: "Pasur", correta: false }
                        ],
                        explicacao: "Amós 7:10 - Então Amazias, o sacerdote de Betel, mandou dizer a Jeroboão, rei de Israel...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Amós colhia além de ser boieiro (pastor)?",
                        opcoes: [
                            { numero: 1, texto: "Figos bravos (sicômoros)", correta: true },
                            { numero: 2, texto: "Uvas doces", correta: false },
                            { numero: 3, texto: "Trigo e cevada", correta: false },
                            { numero: 4, texto: "Azeitonas", correta: false }
                        ],
                        explicacao: "Amós 7:14 - ...eu era boieiro, e colhedor de sicômoros.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        8: {
            titulo: "O Cesto de Frutos de Verão",
            texto: `¹ O Senhor Deus assim me fez ver: E eis aqui um cesto de frutos do verão.
² E disse: Que vês, Amós? E eu disse: Um cesto de frutos do verão. Então o Senhor me disse: Chegou o fim sobre o meu povo Israel; nunca mais passarei por ele.
³ Mas os cânticos do templo naquele dia serão gemidos, diz o Senhor Deus; multiplicar-se-ão os cadáveres; em todos os lugares serão lançados fora em silêncio.
⁴ Ouvi isto, vós que anelais o abatimento do necessitado; e destruís os miseráveis da terra,
⁵ Dizendo: Quando passará a lua nova, para vendermos o grão, e o sábado, para abrirmos os celeiros de trigo, diminuindo o efa, e aumentando o siclo, e procedendo dolosamente com balanças enganosas,
⁶ Para comprarmos os pobres por dinheiro, e os necessitados por um par de sapatos, e para vendermos o refugo do trigo?
⁷ Jurou o Senhor pela glória de Jacó: Eu não me esquecerei de todas as suas obras para sempre.
⁸ Por causa disto não estremecerá a terra, e não chorará todo aquele que nela habita? Certamente levantar-se-á toda ela como o grande rio, e será agitada, e baixará como o rio do Egito.
⁹ E sucederá que, naquele dia, diz o Senhor Deus, farei que o sol se ponha ao meio-dia, e a terra se entenebreça no dia claro.
¹⁰ E tornarei as vossas festas em luto, e todos os vossos cânticos em lamentações; e porei pano de saco sobre todos os lombos, e calva sobre toda cabeça; e farei que isso seja como luto por um filho único, e o seu fim como dia de amarguras.
¹¹ Eis que vêm dias, diz o Senhor Deus, em que enviarei fome sobre a terra; não fome de pão, nem sede de água, mas de ouvir as palavras do Senhor.
¹² E irão errantes de um mar até outro mar, e do norte até ao oriente; correrão por toda a parte, buscando a palavra do Senhor, mas não a acharão.
¹³ Naquele dia as virgens formosas e os jovens desmaiarão de sede.
¹⁴ Os que juram pela culpa de Samaria, dizendo: Vive o teu deus, ó Dã; e vive o caminho de Berseba; esses mesmos cairão, e não se levantarão jamais.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que representava o cesto de frutos de verão que o Senhor mostrou a Amós?",
                        opcoes: [
                            { numero: 1, texto: "Que o fim chegou sobre o povo de Israel", correta: true },
                            { numero: 2, texto: "Que haveria uma grande colheita", correta: false },
                            { numero: 3, texto: "Que a paz duraria muito tempo", correta: false },
                            { numero: 4, texto: "Que o templo seria reformado", correta: false }
                        ],
                        explicacao: "Amós 8:2 - ...E o Senhor me disse: Chegou o fim sobre o meu povo Israel; nunca mais passarei por ele.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "De que tipo de fome o Senhor fala no versículo 11?",
                        opcoes: [
                            { numero: 1, texto: "Fome de pão e sede de água", correta: false },
                            { numero: 2, texto: "Fome de ouro e prata", correta: false },
                            { numero: 3, texto: "Não fome de pão, mas de ouvir as palavras do Senhor", correta: true },
                            { numero: 4, texto: "Fome de justiça social", correta: false }
                        ],
                        explicacao: "Amós 8:11 - ...enviarei fome sobre a terra; não fome de pão, nem sede de água, mas de ouvir as palavras do Senhor.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como ficarão as formosas virgens e os jovens por causa dessa sede?",
                        opcoes: [
                            { numero: 1, texto: "Desfalecerão", correta: true },
                            { numero: 2, texto: "Ficarão mais fortes", correta: false },
                            { numero: 3, texto: "Cantarão hinos", correta: false },
                            { numero: 4, texto: "Fugirão para o Egito", correta: false }
                        ],
                        explicacao: "Amós 8:13 - Naquele dia as virgens formosas e os jovens desfalecerão de sede.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        9: {
            titulo: "Destruição e Restauração Final",
            texto: `¹ Vi o Senhor, que estava em pé sobre o altar; e me disse: Fere o capitel, e estremeçam os umbrais, e faze tudo em pedaços sobre a cabeça de todos eles; e eu matarei à espada até ao último deles; nenhum deles conseguirá fugir, nenhum deles escapará.
² Ainda que cavem até ao inferno, a minha mão os tirará dali; e, se subirem ao céu, dali os farei descer.
³ E, se se esconderem no cume do Carmelo, buscá-los-ei, e dali os tirarei; e, se dos meus olhos se ocultarem no fundo do mar, ali darei ordem à serpente, e ela os picará.
⁴ E, se forem em cativeiro diante de seus inimigos, ali darei ordem à espada que os mate; e eu porei os meus olhos sobre eles para o mal, e não para o bem.
⁵ Porque o Senhor Deus dos Exércitos é o que toca a terra, e ela se derrete, e todos os que habitam nela chorarão; e ela subirá toda como um rio, e abaixará como o rio do Egito.
⁶ Ele é o que edifica as suas câmaras superiores no céu, e fundou na terra a sua abóbada, e o que chama as águas do mar, e as derrama sobre a terra; o Senhor é o seu nome.
⁷ Não me sois, vós, ó filhos de Israel, como os filhos dos etíopes? diz o Senhor: Não fiz eu subir a Israel da terra do Egito, e aos filisteus de Caftor, e aos sírios de Quir?
⁸ Eis que os olhos do Senhor Deus estão contra este reino pecador, e eu o destruirei de sobre a face da terra; mas não destruirei de todo a casa de Jacó, diz o Senhor.
⁹ Porque eis que darei ordem, e sacudirei a casa de Israel entre todas as nações, assim como se sacode grão no crivo, sem que caia na terra um só grão.
¹⁰ Todos os pecadores do meu povo morrerão à espada, os que dizem: Não nos alcançará nem nos encontrará o mal.
¹¹ Naquele dia tornarei a levantar o tabernáculo caído de Davi, e repararei as suas brechas, e tornarei a levantar as suas ruínas, e o edificarei como nos dias da antiguidade;
¹² Para que possuam o restante de Edom, e todos os gentios que são chamados pelo meu nome, diz o Senhor, que faz essas coisas.
¹³ Eis que vêm dias, diz o Senhor, em que o que lavra alcançará ao que sega, e o que pisa as uvas ao que lança a semente; e os montes destilarão mosto, e todos os outeiros se derreterão.
¹⁴ E trarei do cativeiro meu povo Israel, e eles reedificarão as cidades assoladas, e nelas habitarão, e plantarão vinhas, e beberão o seu vinho, e farão pomares, e lhes comerão o fruto.
¹⁵ E plantá-los-ei na sua terra, e não serão mais arrancados da sua terra que lhes dei, diz o Senhor teu Deus.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Se cavarem até ao inferno ou subirem ao céu, o que acontecerá?",
                        opcoes: [
                            { numero: 1, texto: "Estarão seguros", correta: false },
                            { numero: 2, texto: "A mão do Senhor os tirará de lá", correta: true },
                            { numero: 3, texto: "Encontrarão o descanso", correta: false },
                            { numero: 4, texto: "Serão esquecidos", correta: false }
                        ],
                        explicacao: "Amós 9:2 - Ainda que cavem até ao inferno, a minha mão os tirará de lá; e, se subirem ao céu, dali os farei descer.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor promete levantar e restaurar naquele dia?",
                        opcoes: [
                            { numero: 1, texto: "A tenda caída de Davi", correta: true },
                            { numero: 2, texto: "O palácio de Salomão", correta: false },
                            { numero: 3, texto: "As muralhas de Jericó", correta: false },
                            { numero: 4, texto: "O trono de Jeroboão", correta: false }
                        ],
                        explicacao: "Amós 9:11 - Naquele dia levantarei a tenda de Davi, que caiu, e taparei as suas aberturas...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é a promessa sobre a permanência do povo na terra que Deus lhes deu?",
                        opcoes: [
                            { numero: 1, texto: "Serão expulsos novamente", correta: false },
                            { numero: 2, texto: "Viverão lá por mil anos", correta: false },
                            { numero: 3, texto: "Ficarão apenas enquanto obedecerem", correta: false },
                            { numero: 4, texto: "Nunca mais serão arrancados da sua terra", correta: true }
                        ],
                        explicacao: "Amós 9:15 - E plantá-los-ei na sua terra, e não serão mais arrancados da sua terra que lhes dei...",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};
