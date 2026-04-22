// js/livros/neemias.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const neemias = {
    nome: "Neemias",
    icone: "🧱", 
    autor: "Neemias",
    //background: "./imagens/neemias_bg.jpg", 

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "A Oração de Neemias",
            texto: ` 1 As palavras de Neemias, filho de Hacalias. E sucedeu no mês de Quislev, no ano vigésimo, estando eu em Susã, a fortaleza,
2 Que veio Hanani, um de meus irmãos, ele e alguns de Judá; e perguntei-lhes pelos judeus que escaparam, e que restaram do cativeiro, e acerca de Jerusalém.
3 E disseram-me: Os restantes, que ficaram do cativeiro, lá na província estão em grande miséria e desprezo; e o muro de Jerusalém fendido e as suas portas queimadas a fogo.
4 E sucedeu que, ouvindo eu estas palavras, assentei-me e chorei, e lamentei por alguns dias; e estive jejuando e orando perante o Deus dos céus.
5 E disse: Ah! Senhor Deus dos céus, Deus grande e temido! Que guarda a aliança e a benignidade para com aqueles que o amam e guardam os seus mandamentos;
6 Estejam, pois, atentos os teus ouvidos e os teus olhos abertos, para ouvires a oração do teu servo, que eu hoje faço perante ti, dia e noite, pelos filhos de Israel, teus servos; e faço confissão pelos pecados dos filhos de Israel, que temos cometido contra ti; também eu e a casa de meu pai temos pecado.
7 De todo nos corrompemos contra ti, e não guardamos os mandamentos, nem os estatutos, nem os juízos, que ordenaste a Moisés, teu servo.
8 Lembra-te, pois, da palavra que ordenaste a Moisés, teu servo, dizendo: Vós transgredireis, e eu vos espalharei entre os povos.
9 E vós vos convertereis a mim, e guardareis os meus mandamentos, e os cumprireis; então, ainda que os vossos rejeitados estejam na extremidade do céu, de lá os ajuntarei e os trarei ao lugar que tenho escolhido para ali fazer habitar o meu nome.
10 Eles são teus servos e o teu povo que resgataste com a tua grande força e com a tua forte mão.
11 Ah! Senhor, estejam, pois, atentos os teus ouvidos à oração do teu servo, e à oração dos teus servos que desejam temer o teu nome; e faze prosperar hoje o teu servo, e dá-lhe graça perante este homem. Então era eu copeiro do rei.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual notícia Neemias recebeu que o fez chorar, lamentar e jejuar por dias?",
                        opcoes: [
                            { numero: 1, texto: "Que o rei estava doente", correta: false },
                            { numero: 2, texto: "Que os muros de Jerusalém estavam fendidos e suas portas queimadas a fogo", correta: true },
                            { numero: 3, texto: "Que ele seria exilado", correta: false },
                            { numero: 4, texto: "Que o Templo fora destruído novamente", correta: false }
                        ],
                        explicacao: "Neemias 1:3-4 - ...o muro de Jerusalém está fendido e as suas portas queimadas a fogo... assentei-me e chorei...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "O Rei Autoriza a Viagem",
            texto: `¹ Sucedeu, pois, no mês de Nisã, no ano vigésimo do rei Artaxerxes, que estava posto vinho diante dele, e eu peguei o vinho e o dei ao rei; porém eu nunca estivera triste diante dele.
² E o rei me disse: Por que está triste o teu rosto, pois não estás doente? Não é isto senão tristeza de coração; então temi sobremaneira.
³ E disse ao rei: Viva o rei para sempre! Como não estaria triste o meu rosto, estando a cidade, o lugar dos sepulcros de meus pais, assolada, e tendo sido consumidas as suas portas a fogo?
⁴ E o rei me disse: Que me pedes agora? Então orei ao Deus dos céus,
⁵ E disse ao rei: Se é do agrado do rei, e se o teu servo é aceito em tua presença, peço-te que me envies a Judá, à cidade dos sepulcros de meus pais, para que eu a reedifique.
⁶ Então o rei me disse, estando a rainha assentada junto a ele: Quanto durará a tua viagem, e quando voltarás? E aprouve ao rei enviar-me, apontando-lhe eu um certo tempo.
⁷ Disse mais ao rei: Se ao rei parece bem, deem-se-me cartas para os governadores dalém do rio, para que me permitam passar até que chegue a Judá.
⁸ Como também uma carta para Asafe, guarda da floresta do rei, para que me dê madeira para cobrir as portas do paço da casa, para o muro da cidade e para a casa em que eu houver de entrar. E o rei mas deu, segundo a boa mão de Deus sobre mim.
⁹ Então fui aos governadores dalém do rio, e dei-lhes as cartas do rei; e o rei tinha enviado comigo capitães do exército e cavaleiros.
¹⁰ O que ouvindo Sambalate, o horonita, e Tobias, o servo amonita, lhes desagradou extremamente que alguém viesse a procurar o bem dos filhos de Israel.
¹¹ E cheguei a Jerusalém, e estive ali três dias.
¹² E de noite me levantei, eu e poucos homens comigo, e não declarei a ninguém o que o meu Deus me pôs no coração para fazer em Jerusalém; e não havia comigo animal algum, senão aquele em que estava montado.
¹³ E de noite saí pela porta do vale, e para o lado da fonte do dragão, e para a porta do monturo, e contemplei os muros de Jerusalém, que estavam fendidos, e as suas portas, que tinham sido consumidas pelo fogo.
¹⁴ E passei à porta da fonte, e ao tanque do rei; e não havia lugar por onde pudesse passar o animal em que estava montado.
¹⁵ Ainda, de noite subi pelo ribeiro e contemplei o muro; e, virando entrei pela porta do vale; assim voltei.
¹⁶ E não souberam os magistrados aonde eu fora nem o que eu fazia; porque ainda nem aos judeus, nem aos sacerdotes, nem aos nobres, nem aos magistrados, nem aos mais que faziam a obra, até então tinha declarado coisa alguma.
¹⁷ Então lhes disse: Bem vedes vós a miséria em que estamos, que Jerusalém está assolada, e que as suas portas têm sido queimadas a fogo; vinde, pois, e reedifiquemos o muro de Jerusalém, e não sejamos mais um opróbrio.
¹⁸ Então lhes declarei como a mão do meu Deus me fora favorável, como também as palavras do rei, que ele me tinha dito; então disseram: Levantemo-nos, e edifiquemos. E esforçaram as suas mãos para o bem.
¹⁹ O que ouvindo Sambalate, o horonita, e Tobias, o servo amonita, e Gesém, o árabe, zombaram de nós, e desprezaram-nos, e disseram: Que é isto que fazeis? Quereis rebelar-vos contra o rei?
²⁰ Então lhes respondi, e disse: O Deus dos céus é o que nos fará prosperar: e nós, seus servos, nos levantaremos e edificaremos; mas vós não tendes parte, nem justiça, nem memória em Jerusalém.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era a função de Neemias na corte do rei Artaxerxes?",
                        opcoes: [
                            { numero: 1, texto: "Guarda-costas", correta: false },
                            { numero: 2, texto: "Copeiro", correta: true },
                            { numero: 3, texto: "Escriba", correta: false },
                            { numero: 4, texto: "Cozinheiro", correta: false }
                        ],
                        explicacao: "Neemias 1:11 - ...porque eu era copeiro do rei.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Neemias fez antes de responder ao rei sobre o que desejava?",
                        opcoes: [
                            { numero: 1, texto: "Pediu conselho aos amigos", correta: false },
                            { numero: 2, texto: "Orou ao Deus dos céus", correta: true },
                            { numero: 3, texto: "Consultou um mapa", correta: false },
                            { numero: 4, texto: "Pediu dinheiro", correta: false }
                        ],
                        explicacao: "Neemias 2:4 - ...Então orei ao Deus dos céus e disse ao rei...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "A Organização do Trabalho",
            texto: ` ¹ E levantou-se Eliasibe, o sumo sacerdote, com os seus irmãos, os sacerdotes, e reedificaram a porta das ovelhas, a qual consagraram; e levantaram as suas portas, e até à torre de Meá consagraram, e até à torre de Hananel.
² E junto a ele edificaram os homens de Jericó; também ao seu lado edificou Zacur, filho de Inri.
³ E à porta do peixe edificaram os filhos de Hassenaá; a qual emadeiraram, e levantaram as suas portas com as suas fechaduras e os seus ferrolhos.
⁴ E ao seu lado reparou Meremote, filho de Urias, o filho de Coz; e ao seu lado reparou Mesulão, filho de Berequias, o filho de Mesezabeel; e ao seu lado reparou Zadoque, filho de Baana.
⁵ E ao seu lado repararam os tecoítas; porém os seus nobres não submeteram a cerviz ao serviço de seu Senhor.
⁶ E a porta velha repararam-na Joiada, filho de Paseia, e Mesulão, filho de Besodias; estes a emadeiraram, e levantaram as suas portas com as suas fechaduras e os seus ferrolhos.
⁷ E ao seu lado repararam Melatias, o gibeonita, e Jadom, meronotita, homens de Gibeom e Mizpá, que pertenciam ao domínio do governador dalém do rio.
⁸ Ao seu lado reparou Uziel, filho de Haraías, um dos ourives; e ao seu lado reparou Hananias, filho de um dos boticários; e fortificaram a Jerusalém até ao muro largo.
⁹ E ao seu lado reparou Refaías, filho de Hur, líder da metade de Jerusalém.
¹⁰ E ao seu lado reparou Jedaías, filho de Harumafe, e defronte de sua casa e ao seu lado reparou Hatus, filho de Hasabneias.
¹¹ A outra porção reparou Malquias, filho de Harim, e Hasube, filho de Paate-Moabe; como também a torre dos fornos.
¹² E ao seu lado reparou Salum, filho de Haloés, líder da outra meia parte de Jerusalém, ele e suas filhas.
¹³ A porta do vale reparou-a Hanum e os moradores de Zanoa; estes a edificaram, e lhe levantaram as portas com as suas fechaduras e os seus ferrolhos, como também mil côvados do muro, até a porta do monturo.
¹⁴ E a porta do monturo reparou-a Malquias, filho de Recabe, líder do distrito de Bete-Haquerém; este a edificou, e lhe levantou as portas com as suas fechaduras e os seus ferrolhos.
¹⁵ E a porta da fonte reparou-a Salum, filho de Col-Hoze, líder do distrito de Mizpá; este a edificou, e a cobriu, e lhe levantou as portas com as suas fechaduras e os seus ferrolhos, como também o muro do tanque de Hasselá, ao pé do jardim do rei, e até aos degraus que descem da cidade de Davi.
¹⁶ Depois dele edificou Neemias, filho de Azbuque, líder da metade de Bete-Zur, até defronte dos sepulcros de Davi, até ao tanque artificial e até à casa dos valentes.
¹⁷ Depois dele repararam os levitas, Reum, filho de Bani; ao seu lado reparou Hasabias, líder da metade de Queila, no seu distrito.
¹⁸ Depois dele repararam seus irmãos, Bavai, filho de Henadade, líder da outra meia parte de Queila.
¹⁹ Ao seu lado reparou Ezer, filho de Jesuá, líder de Mizpá, outra porção, defronte da subida à casa das armas, à esquina.
²⁰ Depois dele reparou com grande ardor Baruque, filho de Zabai, outra medida, desde a esquina até à porta da casa de Eliasibe, o sumo sacerdote.
²¹ Depois dele reparou Meremote, filho de Urias, o filho de Coz, outra porção, desde a porta da casa de Eliasibe, até à extremidade da casa de Eliasibe.
²² E depois dele repararam os sacerdotes que habitavam na campina.
²³ Depois reparou Benjamim e Hasube, defronte da sua casa; depois dele reparou Azarias, filho de Maaseias, o filho de Ananias, junto à sua casa.
²⁴ Depois dele reparou Binui, filho de Henadade, outra porção, desde a casa de Azarias até à esquina, e até ao canto.
²⁵ Palal, filho de Uzai, reparou defronte da esquina, e a torre que sai da casa real superior, que está junto ao pátio da prisão; depois dele Pedaías, filho de Parós.
²⁶ Ora, os netineus habitavam em Ofel, até defronte da porta das águas, para o oriente, e até à torre alta.
²⁷ Depois repararam os tecoítas outra porção, defronte da torre grande e alta, e até ao muro de Ofel.
²⁸ Desde acima da porta dos cavalos repararam os sacerdotes, cada um defronte da sua casa.
²⁹ Depois deles reparou Zadoque, filho de Imer, defronte da sua casa; e depois dele reparou Semaías, filho de Secanias, guarda da porta oriental.
³⁰ Depois dele reparou Hananias, filho de Selemias, e Hanum, filho de Zalafe, o sexto, outra porção; depois dele reparou Mesulão, filho de Berequias, defronte da sua câmara.
³¹ Depois dele reparou Malquias, filho de um ourives, até à casa dos netineus e mercadores, defronte da porta de Mifcade, e até à câmara do canto.
³² E entre a câmara do canto e a porta das ovelhas, repararam os ourives e os mercadores.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Neemias organizou a reconstrução dos muros?",
                        opcoes: [
                            { numero: 1, texto: "Contratou apenas estrangeiros", correta: false },
                            { numero: 2, texto: "Distribuiu famílias e grupos para repararem trechos específicos, muitas vezes defronte de suas casas", correta: true },
                            { numero: 3, texto: "Ele construiu tudo sozinho", correta: false },
                            { numero: 4, texto: "O sorteio decidiu quem trabalharia", correta: false }
                        ],
                        explicacao: "Neemias 3 descreve diversas famílias e oficiais trabalhando 'defronte da sua casa' ou em portas específicas.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "Resistência e Vigilância",
            texto: `¹ E sucedeu que, ouvindo Sambalate que edificávamos o muro, ardeu em ira, e se indignou muito; e escarneceu dos judeus.
² E falou na presença de seus irmãos, e do exército de Samaria, e disse: Que fazem estes fracos judeus? Permitir-se-lhes-á isto? Sacrificarão? Acabá-lo-ão num só dia? Vivificarão dos montões do pó as pedras que foram queimadas?
³ E estava com ele Tobias, o amonita, e disse: Ainda que edifiquem, contudo, vindo uma raposa, derrubará facilmente o seu muro de pedra.
⁴ Ouve, ó nosso Deus, que somos tão desprezados, e torna o seu opróbrio sobre a sua cabeça, e dá-os por presa, na terra do cativeiro.
⁵ E não cubras a sua iniquidade, e não se risque de diante de ti o seu pecado, pois que te irritaram na presença dos edificadores.
⁶ Porém edificamos o muro, e todo o muro se fechou até sua metade; porque o coração do povo se inclinava a trabalhar.
⁷ E sucedeu que, ouvindo Sambalate e Tobias, e os árabes, os amonitas, e os asdoditas, que tanto ia crescendo a reparação dos muros de Jerusalém, que já as roturas se começavam a tapar, iraram-se sobremodo,
⁸ E ligaram-se entre si todos, para virem guerrear contra Jerusalém, e para os desviarem do seu intento.
⁹ Porém nós oramos ao nosso Deus e pusemos uma guarda contra eles, de dia e de noite, por causa deles.
¹⁰ Então disse Judá: Já desfaleceram as forças dos carregadores, e o pó é muito, e nós não poderemos edificar o muro.
¹¹ Disseram, porém, os nossos inimigos: Nada saberão disto, nem verão, até que entremos no meio deles, e os matemos; assim faremos cessar a obra.
¹² E sucedeu que, vindo os judeus que habitavam entre eles, dez vezes nos disseram: De todos os lugares, tornarão contra nós.
¹³ Então pus guardas nos lugares baixos por detrás do muro e nos altos; e pus ao povo pelas suas famílias com as suas espadas, com as suas lanças, e com os seus arcos.
¹⁴ E olhei, e levantei-me, e disse aos nobres, aos magistrados, e ao restante do povo: Não os temais; lembrai-vos do grande e temível Senhor, e pelejai pelos vossos irmãos, vossos filhos, vossas filhas, vossas mulheres e vossas casas.
¹⁵ E sucedeu que, ouvindo os nossos inimigos que já o sabíamos, e que Deus tinha dissipado o conselho deles, todos voltamos ao muro, cada um à sua obra.
¹⁶ E sucedeu que, desde aquele dia, metade dos meus servos trabalhava na obra, e metade deles tinha as lanças, os escudos, os arcos e as couraças; e os líderes estavam por detrás de toda a casa de Judá.
¹⁷ Os que edificavam o muro, os que traziam as cargas e os que carregavam, cada um com uma das mãos fazia a obra e na outra tinha as armas.
¹⁸ E os edificadores cada um trazia a sua espada cingida aos lombos, e edificavam; e o que tocava a trombeta estava junto comigo.
¹⁹ E disse eu aos nobres, aos magistrados e ao restante do povo: Grande e extensa é a obra, e nós estamos apartados do muro, longe uns dos outros.
²⁰ No lugar onde ouvirdes o som da trombeta, ali vos ajuntareis conosco; o nosso Deus pelejará por nós.
²¹ Assim trabalhávamos na obra; e metade deles tinha as lanças desde a subida da alva até ao sair das estrelas.
²² Também naquele tempo disse ao povo: Cada um com o seu servo fique em Jerusalém, para que à noite nos sirvam de guarda, e de dia na obra.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como os trabalhadores se protegiam enquanto reconstruíam os muros sob ameaça?",
                        opcoes: [
                            { numero: 1, texto: "Fugiam quando viam os inimigos", correta: false },
                            { numero: 2, texto: "Com uma mão faziam a obra e na outra tinham a arma", correta: true },
                            { numero: 3, texto: "Construíam apenas à noite", correta: false },
                            { numero: 4, texto: "Pagavam tributos para não serem atacados", correta: false }
                        ],
                        explicacao: "Neemias 4:17 - ...com uma mão faziam a obra e na outra tinham as armas.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "Neemias Contra a Exploração",
            texto: ` ¹ Foi, porém, grande o clamor do povo e de suas mulheres, contra os judeus, seus irmãos.
² Porque havia quem dizia: Nós, nossos filhos e nossas filhas, somos muitos; então tomemos trigo, para que comamos e vivamos.
³ Também havia quem dizia: As nossas terras, as nossas vinhas e as nossas casas empenhamos, para tomarmos trigo nesta fome.
⁴ Também havia quem dizia: Tomamos emprestado dinheiro até para o tributo do rei, sobre as nossas terras e as nossas vinhas.
⁵ Agora, pois, a nossa carne é como a carne de nossos irmãos, e nossos filhos como seus filhos; e eis que sujeitamos nossos filhos e nossas filhas para serem servos; e até algumas de nossas filhas são tão sujeitas, que já não estão no poder de nossas mãos; e outros têm as nossas terras e as nossas vinhas.
⁶ Ouvindo eu, pois, o seu clamor, e estas palavras, muito me indignei.
⁷ E considerei comigo mesmo no meu coração; depois pelejei com os nobres e com os magistrados, e disse-lhes: Sois usurários cada um para com seu irmão. E convoquei contra eles uma grande assembleia.
⁸ E disse-lhes: Nós resgatamos os judeus, nossos irmãos, que foram vendidos às nações, segundo nossas posses; e vós outra vez venderíeis a vossos irmãos, ou vender-se-iam a nós? Então se calaram, e não acharam que responder.
⁹ Disse mais: Não é bom o que fazeis; porventura não andaríeis no temor do nosso Deus, por causa do opróbrio das nações, os nossos inimigos?
¹⁰ Também eu, meus irmãos e meus servos, a juros lhes temos emprestado dinheiro e trigo. Deixemos este ganho.
¹¹ Restituí-lhes hoje, vos peço, as suas terras, as suas vinhas, os seus olivais e as suas casas; como também a centésima parte do dinheiro, do trigo, do mosto e do azeite, que vós exigis deles.
¹² Então disseram: Restituir-lhes-emos, e nada procuraremos deles; faremos assim como dizes. Então chamei os sacerdotes, e os fiz jurar que fariam conforme a esta palavra.
¹³ Também sacudi as minhas vestes, e disse: Assim sacuda Deus todo o homem da sua casa e do seu trabalho que não confirmar esta palavra, e assim seja sacudido e vazio. E toda a congregação disse: Amém! E louvaram ao Senhor; e o povo fez conforme a esta palavra.
¹⁴ Também desde o dia em que me mandou que eu fosse seu governador na terra de Judá, desde o ano vinte, até ao ano trinta e dois do rei Artaxerxes, doze anos, nem eu nem meus irmãos comemos o pão do governador.
¹⁵ Mas os primeiros governadores, que foram antes de mim, oprimiram o povo, e tomaram-lhe pão e vinho e, além disso, quarenta siclos de prata, como também os seus servos dominavam sobre o povo; porém eu assim não fiz, por causa do temor de Deus.
¹⁶ Como também na obra deste muro fiz reparação, e terra nenhuma compramos; e todos os meus servos se ajuntaram ali à obra.
¹⁷ Também dos judeus e dos magistrados, cento e cinquenta homens, e os que vinham a nós dentre as nações que estão ao redor de nós, se punham à minha mesa.
¹⁸ E o que se preparava para cada dia era um boi e seis ovelhas escolhidas; também aves se me preparavam e, de dez em dez dias, muito vinho de todas as espécies; e nem por isso exigi o pão do governador, porquanto a servidão deste povo era grande.
¹⁹ Lembra-te de mim para bem, ó meu Deus, e de tudo quanto fiz a este povo.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Que atitude Neemias tomou contra os nobres que cobravam juros abusivos de seus irmãos pobres?",
                        opcoes: [
                            { numero: 1, texto: "Ignorou a situação", correta: false },
                            { numero: 2, texto: "Repreendeu-os e exigiu a restituição das terras e dos juros", correta: true },
                            { numero: 3, texto: "Aumentou os juros", correta: false },
                            { numero: 4, texto: "Pediu que o rei os prendesse", correta: false }
                        ],
                        explicacao: "Neemias 5:11-12 - Restitui-lhes hoje... as suas terras... Então disseram: Restituiremos...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "O Muro é Concluído",
            texto: `¹ Sucedeu que, ouvindo Sambalate, Tobias, Gesém, o árabe, e o resto dos nossos inimigos, que eu tinha edificado o muro, e que nele já não havia brecha alguma, ainda que até este tempo não tinha posto as portas nos portais,
² Sambalate e Gesém mandaram dizer-me: Vem, e congreguemo-nos juntamente nas aldeias, no vale de Ono. Porém intentavam fazer-me mal.
³ E enviei-lhes mensageiros a dizer: Faço uma grande obra, de modo que não poderei descer; por que cessaria esta obra, enquanto eu a deixasse, e fosse ter convosco?
⁴ E do mesmo modo enviaram a mim quatro vezes; e da mesma forma lhes respondi.
⁵ Então Sambalate ainda pela quinta vez me enviou seu servo com uma carta aberta na sua mão;
⁶ E na qual estava escrito: Entre os gentios se ouviu, e Gasmu diz: Tu e os judeus intentais rebelar-vos, então edificas o muro; e tu te farás rei deles segundo estas palavras;
⁷ E que puseste profetas, para pregarem de ti em Jerusalém, dizendo: Este é rei em Judá; de modo que o rei o ouvirá, segundo estas palavras; vem, pois, agora, e consultemos juntamente.
⁸ Porém eu mandei dizer-lhe: De tudo o que dizes coisa nenhuma sucedeu; mas tu, do teu coração, o inventas.
⁹ Porque todos eles procuravam atemorizar-nos, dizendo: As suas mãos largarão a obra, e não se efetuará. Agora, pois, ó Deus, fortalece as minhas mãos.
¹⁰ E, entrando eu em casa de Semaías, filho de Delaías, o filho de Meetabel (que estava encerrado), disse ele: Vamos juntamente à casa de Deus, ao meio do templo, e fechemos as portas do templo; porque virão matar-te; sim, de noite virão matar-te.
¹¹ Porém eu disse: Um homem como eu fugiria? E quem há, como eu, que entre no templo para que viva? De maneira nenhuma entrarei.
¹² E percebi que não era Deus quem o enviara; mas esta profecia falou contra mim, porquanto Tobias e Sambalate o subornaram.
¹³ Para isto o subornaram, para me atemorizar, e para que assim fizesse, e pecasse, para que tivessem alguma causa para me infamarem, e assim me vituperarem.
¹⁴ Lembra-te, meu Deus, de Tobias e de Sambalate, conforme a estas suas obras, e também da profetisa Noadia, e dos mais profetas que procuraram atemorizar-me.
¹⁵ Acabou-se, pois, o muro aos vinte e cinco do mês de Elul; em cinquenta e dois dias.
¹⁶ E sucedeu que, ouvindo-o todos os nossos inimigos, todos os povos que havia em redor de nós temeram, e abateram-se muito a seus próprios olhos; porque reconheceram que o nosso Deus fizera esta obra.
¹⁷ Também naqueles dias alguns nobres de Judá escreveram muitas cartas que iam para Tobias; e as cartas de Tobias vinham para eles.
¹⁸ Porque muitos em Judá lhe eram ajuramentados, porque era genro de Secanias filho de Ará; e seu filho Joanã se casara com a filha de Mesulão, filho de Berequias.
¹⁹ Também as suas boas ações contavam perante mim, e as minhas palavras transmitiam a ele; portanto Tobias escrevia cartas para me atemorizar.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Em quantos dias o muro de Jerusalém foi finalmente acabado?",
                        opcoes: [
                            { numero: 1, texto: "Um ano", correta: false },
                            { numero: 2, texto: "Cinquenta e dois dias", correta: true },
                            { numero: 3, texto: "Cem dias", correta: false },
                            { numero: 4, texto: "Sete dias", correta: false }
                        ],
                        explicacao: "Neemias 6:15 - Acabou-se, pois, o muro aos vinte e cinco de Elul; em cinquenta e dois dias.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },

        7: {
            titulo: "O Registro dos Exilados",
            texto: `¹ Sucedeu que, depois que o muro foi edificado, eu levantei as portas; e foram estabelecidos os porteiros, os cantores e os levitas.
² Eu nomeei a Hanani, meu irmão, e a Hananias, líder da fortaleza, sobre Jerusalém; porque ele era homem fiel e temente a Deus, mais do que muitos.
³ E disse-lhes: Não se abram as portas de Jerusalém até que o sol aqueça, e enquanto os que assistirem ali permanecerem, fechem as portas, e vós trancai-as; e ponham-se guardas dos moradores de Jerusalém, cada um na sua guarda, e cada um diante da sua casa.
⁴ E era a cidade larga de espaço, e grande, porém pouco povo havia dentro dela; e ainda as casas não estavam edificadas.
⁵ Então o meu Deus me pôs no coração que ajuntasse os nobres, os magistrados e o povo, para registrar as genealogias; e achei o livro da genealogia dos que subiram primeiro e nele estava escrito o seguinte:
⁶ Estes são os filhos da província, que subiram do cativeiro dos exilados, que transportara Nabucodonosor, rei de Babilônia; e voltaram para Jerusalém e para Judá, cada um para a sua cidade;
⁷ Os quais vieram com Zorobabel, Jesuá, Neemias, Azarias, Raamias, Naamani, Mordecai, Bilsã, Misperete, Bigvai, Neum, e Baaná; este é o número dos homens do povo de Israel.
⁸ Foram os filhos de Parós, dois mil, cento e setenta e dois.
⁹ Os filhos de Sefatias, trezentos e setenta e dois.
¹⁰ Os filhos de Ará, seiscentos e cinquenta e dois.
¹¹ Os filhos de Paate-Moabe, dos filhos de Jesuá e de Joabe, dois mil, oitocentos e dezoito.
¹² Os filhos de Elão, mil, duzentos e cinquenta e quatro.
¹³ Os filhos de Zatu, oitocentos e quarenta e cinco.
¹⁴ Os filhos de Zacai, setecentos e sessenta.
¹⁵ Os filhos de Binui, seiscentos e quarenta e oito.
¹⁶ Os filhos de Bebai, seiscentos e vinte e oito.
¹⁷ Os filhos de Azgade, dois mil, trezentos e vinte e dois.
¹⁸ Os filhos de Adonicão, seiscentos e sessenta e sete.
¹⁹ Os filhos de Bigvai, dois mil e sessenta e sete.
²⁰ Os filhos de Adim, seiscentos e cinquenta e cinco.
²¹ Os filhos de Ater, de Ezequias, noventa e oito.
²² Os filhos de Hassum, trezentos e vinte e oito.
²³ Os filhos de Bezai, trezentos e vinte e quatro.
²⁴ Os filhos de Harife, cento e doze.
²⁵ Os filhos de Gibeom, noventa e cinco.
²⁶ Os homens de Belém e de Netofa, cento e oitenta e oito.
²⁷ Os homens de Anatote, cento e vinte e oito.
²⁸ Os homens de Bete-Azmavete, quarenta e dois.
²⁹ Os homens de Quiriate-Jearim, Quefira e Beerote, setecentos e quarenta e três.
³⁰ Os homens de Ramá e Geba, seiscentos e vinte e um.
³¹ Os homens de Micmás, cento e vinte e dois.
³² Os homens de Betel e Ai, cento e vinte e três.
³³ Os homens do outro Nebo, cinquenta e dois.
³⁴ Os filhos do outro Elão, mil, duzentos e cinquenta e quatro:
³⁵ Os filhos de Harim, trezentos e vinte.
³⁶ Os filhos de Jericó, trezentos e quarenta e cinco.
³⁷ Os filhos de Lode, Hadide e Ono, setecentos e vinte e um.
³⁸ Os filhos de Senaá, três mil, novecentos e trinta.
³⁹ Os sacerdotes: Os filhos de Jedaías, da casa de Jesuá, novecentos e setenta e três.
⁴⁰ Os filhos de Imer, mil e cinquenta e dois.
⁴¹ Os filhos de Pasur, mil, duzentos e quarenta e sete.
⁴² Os filhos de Harim, mil e dezessete.
⁴³ Os levitas: Os filhos de Jesuá, de Cadmiel, dos filhos de Hodeva, setenta e quatro.
⁴⁴ Os cantores: Os filhos de Asafe, cento e quarenta e oito.
⁴⁵ Os porteiros: Os filhos de Salum, os filhos de Ater, os filhos de Talmom, os filhos de Acube, os filhos de Hatita, os filhos de Sobai, cento e trinta e oito.
⁴⁶ Os netineus: Os filhos de Zia, os filhos de Hasufa, os filhos de Tabaote,
⁴⁷ Os filhos de Queros, os filhos de Sia, os filhos de Padom,
⁴⁸ Os filhos de Lebana, os filhos de Hagaba, os filhos de Salmai,
⁴⁹ Os filhos de Hanã, os filhos de Gidel, os filhos de Gaar,
⁵⁰ Os filhos de Reaías, os filhos de Rezim, os filhos de Necoda,
⁵¹ Os filhos de Gazão, os filhos de Uzá, os filhos de Paseá,
⁵² Os filhos de Besai, os filhos de Meunim, os filhos de Nefussim,
⁵³ Os filhos de Bacbuque, os filhos de Hacufa, os filhos de Harur,
⁵⁴ Os filhos de Bazlite, os filhos de Meída, os filhos de Harsa,
⁵⁵ Os filhos de Barcos, os filhos de Sísera, os filhos de Tamá,
⁵⁶ Os filhos de Neziá, os filhos de Hatifa.
⁵⁷ Os filhos dos servos de Salomão, os filhos de Sotai, os filhos de Soferete, os filhos de Perida,
⁵⁸ Os filhos de Jaala, os filhos de Darcom, os filhos de Gidel,
⁵⁹ Os filhos de Sefatias, os filhos de Hatil, os filhos de Poquerete-Hazebaim, os filhos de Amom.
⁶⁰ Todos os netineus e os filhos dos servos de Salomão, trezentos e noventa e dois.
⁶¹ Também estes subiram de Tel-Melá, e Tel-Harsa, Querube, Adom, Imer; porém não puderam provar que a casa de seus pais e a sua linhagem, eram de Israel.
⁶² Os filhos de Delaías, os filhos de Tobias, os filhos de Necoda, seiscentos e quarenta e dois.
⁶³ E dos sacerdotes: os filhos de Habaías, os filhos de Coz, os filhos de Barzilai, que tomara uma mulher das filhas de Barzilai, o gileadita, e que foi chamado do seu nome.
⁶⁴ Estes buscaram o seu registro nos livros genealógicos, porém não se achou; então, como imundos, foram excluídos do sacerdócio.
⁶⁵ E o governador lhes disse que não comessem das coisas sagradas, até que se apresentasse o sacerdote com Urim e Tumim.
⁶⁶ Toda esta congregação junta foi de quarenta e dois mil, trezentos e sessenta,
⁶⁷ Afora os seus servos e as suas servas, que foram sete mil, trezentos e trinta e sete; e tinham duzentos e quarenta e cinco cantores e cantoras.
⁶⁸ Os seus cavalos, setecentos e trinta e seis; os seus mulos, duzentos e quarenta e cinco.
⁶⁹ Camelos, quatrocentos e trinta e cinco; jumentos, seis mil, setecentos e vinte.
⁷⁰ E uma parte dos chefes dos pais contribuíram para a obra. O governador deu para o tesouro, em ouro, mil dracmas, cinquenta bacias, e quinhentas e trinta vestes sacerdotais.
⁷¹ E alguns mais dos chefes dos pais contribuíram para o tesouro da obra, em ouro, vinte mil dracmas, e em prata, duas mil e duzentas libras.
⁷² E o que deu o restante do povo foi, em ouro, vinte mil dracmas, e em prata, duas mil libras; e sessenta e sete vestes sacerdotais.
⁷³ E habitaram os sacerdotes, os levitas, os porteiros, os cantores, alguns do povo, os netineus, e todo o Israel nas suas cidades. `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Neemias encontrou que o ajudou a organizar o povo por genealogias?",
                        opcoes: [
                            { numero: 1, texto: "Um mapa do tesouro", correta: false },
                            { numero: 2, texto: "O livro da genealogia dos que subiram primeiro", correta: true },
                            { numero: 3, texto: "Uma carta do rei Artaxerxes", correta: false },
                            { numero: 4, texto: "As chaves da cidade", correta: false }
                        ],
                        explicacao: "Neemias 7:5 - ...E achei o livro da genealogia dos que subiram primeiro...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        8: {
            titulo: "Esdras Lê a Lei",
            texto: `¹ E chegado o sétimo mês, e estando os filhos de Israel nas suas cidades, todo o povo se ajuntou como um só homem, na praça, diante da porta das águas; e disseram a Esdras, o escriba, que trouxesse o livro da lei de Moisés, que o Senhor tinha ordenado a Israel.
² E Esdras, o sacerdote, trouxe a lei perante a congregação, tanto de homens como de mulheres, e todos os que podiam ouvir com entendimento, no primeiro dia do sétimo mês.
³ E leu no livro diante da praça, que está diante da porta das águas, desde a alva até ao meio-dia, perante homens e mulheres, e os que podiam entender; e os ouvidos de todo o povo estavam atentos ao livro da lei.
⁴ E Esdras, o escriba, estava sobre um púlpito de madeira, que fizeram para aquele fim; e estava em pé junto a ele, à sua mão direita, Matitias, Sema, Anaías, Urias, Hilquias e Maaseias; e à sua mão esquerda, Pedaías, Misael, Melquias, Hasum, Hasbadana, Zacarias e Mesulão.
⁵ E Esdras abriu o livro perante à vista de todo o povo; porque estava acima de todo o povo; e, abrindo-o ele, todo o povo se pôs em pé.
⁶ E Esdras louvou ao Senhor, o grande Deus; e todo o povo respondeu: Amém, Amém! Levantando as suas mãos; e inclinaram suas cabeças, e adoraram ao Senhor, com os rostos em terra.
⁷ E Jesuá, Bani, Serebias, Jamim, Acube, Sabetai, Hodias, Maaseias, Quelita, Azarias, Jozabade, Hanã, Pelaías, e os levitas ensinavam o povo na lei; e o povo estava no seu lugar.
⁸ E leram no livro, na lei de Deus; e declarando, e explicando o sentido, faziam que, lendo, se entendesse.
⁹ E Neemias, que era o governador, e o sacerdote Esdras, o escriba, e os levitas que ensinavam ao povo, disseram a todo o povo: Este dia é consagrado ao Senhor vosso Deus, então não vos lamenteis, nem choreis. Porque todo o povo chorava, ouvindo as palavras da lei.
¹⁰ Disse-lhes mais: Ide, comei as gorduras, e bebei as doçuras, e enviai porções aos que não têm nada preparado para si; porque este dia é consagrado ao nosso Senhor; portanto não vos entristeçais; porque a alegria do Senhor é a vossa força.
¹¹ E os levitas fizeram calar a todo o povo, dizendo: Calai-vos; porque este dia é santo; por isso não vos entristeçais.
¹² Então todo o povo se foi a comer, a beber, a enviar porções e a fazer grande regozijo; porque entenderam as palavras que lhes fizeram saber.
¹³ E no dia seguinte ajuntaram-se os chefes dos pais de todo o povo, os sacerdotes e os levitas, a Esdras, o escriba; e isto para atentarem nas palavras da lei.
¹⁴ E acharam escrito na lei que o Senhor ordenara, pelo ministério de Moisés, que os filhos de Israel habitassem em cabanas, na solenidade da festa, no sétimo mês.
¹⁵ Assim publicaram, e fizeram passar pregão por todas as suas cidades, e em Jerusalém, dizendo: Saí ao monte, e trazei ramos de oliveiras, e ramos de oliveiras bravas, e ramos de murtas, e ramos de palmeiras, e ramos de árvores espessas, para fazer cabanas, como está escrito.
¹⁶ Saiu, pois, o povo, e os trouxeram, e fizeram para si cabanas, cada um no seu terraço, nos seus pátios, e nos átrios da casa de Deus, na praça da porta das águas, e na praça da porta de Efraim.
¹⁷ E toda a congregação dos que voltaram do cativeiro fizeram cabanas, e habitaram nas cabanas, porque nunca fizeram assim os filhos de Israel, desde os dias de Jesua, filho de Num, até àquele dia; e houve mui grande alegria.
¹⁸ E, de dia em dia, Esdras leu no livro da lei de Deus, desde o primeiro dia até ao derradeiro; e celebraram a solenidade da festa sete dias, e no oitavo dia, houve uma assembleia solene, segundo o rito.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o povo fez quando Esdras abriu o Livro da Lei diante de todos?",
                        opcoes: [
                            { numero: 1, texto: "Todo o povo se pôs em pé", correta: true },
                            { numero: 2, texto: "Todos começaram a cantar", correta: false },
                            { numero: 3, texto: "O povo foi para casa", correta: false },
                            { numero: 4, texto: "Os soldados prenderam Esdras", correta: false }
                        ],
                        explicacao: "Neemias 8:5 - E Esdras abriu o livro perante os olhos de todo o povo... e, abrindo-o ele, todo o povo se pôs em pé.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual frase Neemias disse para consolar o povo que chorava ao ouvir a Lei?",
                        opcoes: [
                            { numero: 1, texto: "Não se preocupem com o pecado", correta: false },
                            { numero: 2, texto: "A alegria do Senhor é a vossa força", correta: true },
                            { numero: 3, texto: "O muro nos protegerá", correta: false },
                            { numero: 4, texto: "Trabalhem mais e chorem menos", correta: false }
                        ],
                        explicacao: "Neemias 8:10 - ...não vos entristeçais; porque a alegria do Senhor é a vossa força.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        9: {
            titulo: "Confissão e Arrependimento",
            texto: ` ¹ E os que selaram foram: Neemias, o governador, filho de Hacalias, e Zedequias,
² Seraías, Azarias, Jeremias,
³ Pasur, Amarias, Malquias,
⁴ Hatus, Sebanias, Maluque,
⁵ Harim, Meremote, Obadias,
⁶ Daniel, Ginetom, Baruque,
⁷ Mesulão, Abias, Miamim,
⁸ Maazias, Bilgai, Semaías; estes eram os sacerdotes.
⁹ E os levitas: Jesuá, filho de Azanias, Binui, dos filhos de Henadade, Cadmiel,
¹⁰ E seus irmãos: Sebanias, Hodias, Quelita, Pelaías, Hanã,
¹¹ Mica, Reobe, Hasabias,
¹² Zacur, Serebias, Sebanias,
¹³ Hodias, Bani e Beninu.
¹⁴ Os chefes do povo: Parós, Paate-Moabe, Elão, Zatu, Bani,
¹⁵ Buni, Azgade, Bebai,
¹⁶ Adonias, Bigvai, Adim,
¹⁷ Ater, Ezequias, Azur,
¹⁸ Hodias, Hasum, Bezai,
¹⁹ Harife, Anatote, Nebai,
²⁰ Magpias, Mesulão, Hezir,
²¹ Mesezabeel, Zadoque, Jadua,
²² Pelatias, Hanã, Anaías,
²³ Oseias, Hananias, Hassube,
²⁴ Haloés, Pilha, Sobeque,
²⁵ Reum, Hasabná, Maaseias,
²⁶ E Aías, Hanã, Anã,
²⁷ Maluque, Harim e Baaná.
²⁸ E o restante do povo, os sacerdotes, os levitas, os porteiros, os cantores, os netineus, todos os que se tinham separado dos povos das terras para a lei de Deus, suas mulheres, seus filhos e suas filhas, todos os que tinham conhecimento e entendimento,
²⁹ Firmemente aderiram a seus irmãos os mais nobres dentre eles, e convieram num anátema e num juramento, de que andariam na lei de Deus, que foi dada pelo ministério de Moisés, servo de Deus; e de que guardariam e cumpririam todos os mandamentos do Senhor nosso Senhor, e os seus juízos e os seus estatutos;
³⁰ E que não daríamos as nossas filhas aos povos da terra, nem tomaríamos as filhas deles para os nossos filhos.
³¹ E que, trazendo os povos da terra no dia de sábado qualquer mercadoria, e qualquer grão para venderem, nada compraríamos deles no sábado, nem no dia santificado; e no sétimo ano deixaríamos descansar a terra, e perdoaríamos toda e qualquer cobrança.
³² Também sobre nós pusemos preceitos, impondo-nos cada ano a terça parte de um siclo, para o ministério da casa do nosso Deus;
³³ Para os pães da proposição, para a contínua oferta de alimentos, e para o contínuo holocausto dos sábados, das luas novas, para as festas solenes, para as coisas sagradas, e para os sacrifícios pelo pecado, para expiação de Israel, e para toda a obra da casa do nosso Deus.
³⁴ Também lançamos sortes entre os sacerdotes, levitas, e o povo, acerca da oferta da lenha que se havia de trazer à casa do nosso Deus, segundo as casas de nossos pais, a tempos determinados, de ano em ano, para se queimar sobre o altar do Senhor nosso Deus, como está escrito na lei.
³⁵ Que também traríamos as primícias da nossa terra, e as primícias de todos os frutos de todas as árvores, de ano em ano, à casa do Senhor.
³⁶ E os primogênitos dos nossos filhos, e os do nosso gado, como está escrito na lei; e que os primogênitos do nosso gado e das nossas ovelhas traríamos à casa do nosso Deus, aos sacerdotes, que ministram na casa do nosso Deus.
³⁷ E que as primícias da nossa massa, as nossas ofertas alçadas, o fruto de toda a árvore, o mosto e o azeite, traríamos aos sacerdotes, às câmaras da casa do nosso Deus; e os dízimos da nossa terra aos levitas; e que os levitas receberiam os dízimos em todas as cidades, da nossa lavoura.
³⁸ E que o sacerdote, filho de Arão, estaria com os levitas quando os levitas recebessem os dízimos, e que os levitas trariam os dízimos dos dízimos à casa do nosso Deus, às câmaras da casa do tesouro.
³⁹ Porque àquelas câmaras os filhos de Israel e os filhos de Levi devem trazer ofertas alçadas do grão, do mosto e do azeite; porquanto ali estão os vasos do santuário, como também os sacerdotes que ministram, os porteiros e os cantores; e que assim não desampararíamos a casa do nosso Deus.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Durante a grande assembleia de confissão, o que os levitas relembraram em sua longa oração?",
                        opcoes: [
                            { numero: 1, texto: "Apenas as vitórias de Davi", correta: false },
                            { numero: 2, texto: "A história de Israel, desde Abraão até o cativeiro, destacando a misericórdia de Deus", correta: true },
                            { numero: 3, texto: "Como construir muros", correta: false },
                            { numero: 4, texto: "Leis de comércio estrangeiro", correta: false }
                        ],
                        explicacao: "Neemias 9 contém uma das orações mais longas da Bíblia, recapitulando a história da fidelidade de Deus e a rebeldia de Israel.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        10: {
            titulo: "O Compromisso do Povo",
            texto: ` ¹ E os líderes do povo habitaram em Jerusalém, porém o restante do povo lançou sortes, para tirar um de dez, que habitasse na santa cidade de Jerusalém, e as nove partes nas outras cidades.
² E o povo bendisse a todos os homens que voluntariamente se ofereciam para habitar em Jerusalém.
³ E estes são os chefes da província, que habitaram em Jerusalém; porém nas cidades de Judá habitou cada um na sua possessão, nas suas cidades, Israel, os sacerdotes, os levitas, os netineus, e os filhos dos servos de Salomão.
⁴ Habitaram, pois, em Jerusalém alguns dos filhos de Judá e dos filhos de Benjamim. Dos filhos de Judá, Ataías, filho de Uzias, filho de Zacarias, filho de Amarias, filho de Sefatias, filho de Maalaleel, dos filhos de Perez;
⁵ E Maaseias, filho de Baruque, filho de Col-Hoze, filho de Hazaías, filho de Adaías, filho de Joiaribe, filho de Zacarias, filho de Siloni.
⁶ Todos os filhos de Perez, que habitaram em Jerusalém, foram quatrocentos e sessenta e oito homens valentes.
⁷ E estes são os filhos de Benjamim: Salu, filho de Mesulão, filho de Joede, filho de Pedaías, filho de Colaías, filho de Maaseias, filho de Itiel, filho de Jesaías.
⁸ E depois dele Gabai e Salai, ao todo novecentos e vinte e oito.
⁹ E Joel, filho de Zicri, superintendente sobre eles; e Judá, filho de Senua, o segundo sobre a cidade.
¹⁰ Dos sacerdotes: Jedaías, filho de Joiaribe, Jaquim,
¹¹ Seraías, filho de Hilquias, filho de Mesulão, filho de Zadoque, filho de Meraiote, filho de Aitube, líder da casa de Deus,
¹² E seus irmãos, que faziam a obra na casa, oitocentos e vinte e dois; e Adaías, filho de Jeroão, filho de Pelalias, filho de Anzi, filho de Zacarias, filho de Pasur, filho de Malquias,
¹³ E seus irmãos, chefes dos pais, duzentos e quarenta e dois; e Amassai, filho de Azareel, filho de Azai, filho de Mesilemote, filho de Imer,
¹⁴ E os irmãos deles, homens valentes, cento e vinte e oito, e superintendente sobre eles Zabdiel, filho de Gedolim.
¹⁵ E dos levitas: Semaías, filho de Hassube, filho de Azricão, filho de Hasabias, filho de Buni;
¹⁶ E Sabetai, e Jozabade, dos chefes dos levitas, presidiam sobre a obra de fora da casa de Deus.
¹⁷ E Matanias, filho de Mica, filho de Zabdi, filho de Asafe, o chefe, que iniciava as ações de graças na oração, e Bacbuquias, o segundo de seus irmãos; depois Abda, filho de Samua, filho de Galal, filho de Jedutum.
¹⁸ Todos os levitas na santa cidade, foram duzentos e oitenta e quatro.
¹⁹ E os porteiros, Acube, Talmom, com seus irmãos, os guardas das portas, cento e setenta e dois.
²⁰ E o restante de Israel, dos sacerdotes e levitas, habitou em todas as cidades de Judá, cada um na sua herança.
²¹ E os netineus, habitaram em Ofel; e Zia e Gispa presidiam sobre os netineus.
²² E o superintendente dos levitas em Jerusalém foi Uzi, filho de Bani, filho de Hasabias, filho de Matanias, filho de Mica; dos filhos de Asafe, os cantores, ao serviço da casa de Deus.
²³ Porque havia um mandado do rei acerca deles, e uma certa regra para os cantores, cada qual no seu dia.
²⁴ E Petaías, filho de Mesezabeel, dos filhos de Zerá, filho de Judá, estava à mão do rei, em todos os negócios do povo.
²⁵ E quanto às aldeias, com as suas terras, alguns dos filhos de Judá habitaram em Quiriate-Arba e nos lugares da sua jurisdição, e em Dibom, e nos lugares da sua jurisdição, e em Jecabzeel e nas suas aldeias,
²⁶ E em Jesuá, e em Molada, e em Bete-Pelete,
²⁷ E em Hazar-Sual, e em Berseba e nos lugares da sua jurisdição,
²⁸ E em Ziclague, em Mecona e nos lugares da sua jurisdição,
²⁹ E em En-Rimom, em Zorá e em Jarmute,
³⁰ Em Zanoa, Adulão e nas suas aldeias, em Laquis e nas suas terras, em Azaca e nos lugares da sua jurisdição. Acamparam-se desde Berseba até ao vale de Hinom.
³¹ E os filhos de Benjamim habitaram desde Geba, em Micmás, Aia, Betel e nos lugares da sua jurisdição,
³² E em Anatote, em Nobe, em Ananias,
³³ Em Hazor, em Ramá, em Gitaim,
³⁴ Em Hadide, em Zeboim, em Nebalate,
³⁵ Em Lode e em Ono, no vale dos artífices,
³⁶ E alguns dos levitas habitaram nas divisões de Judá e de Benjamim.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual foi o compromisso selado pelos príncipes, levitas e sacerdotes?",
                        opcoes: [
                            { numero: 1, texto: "Andar na lei de Deus e não abandonar a sua casa", correta: true },
                            { numero: 2, texto: "Mudar-se para a Pérsia", correta: false },
                            { numero: 3, texto: "Não pagar mais impostos", correta: false },
                            { numero: 4, texto: "Eleger um novo rei", correta: false }
                        ],
                        explicacao: "Neemias 10:29-39 descreve a firme aliança de obedecer aos mandamentos e cuidar do serviço do Templo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        11: {
            titulo: "Os Habitantes de Jerusalém",
            texto: ` ¹ Estes são sacerdotes e levitas que subiram com Zorobabel, filho de Sealtiel, e com Jesuá: Seraías, Jeremias, Esdras,
² Amarias, Maluque, Hatus,
³ Secanias, Reum, Meremote,
⁴ Ido, Ginetoi, Abias,
⁵ Miamim, Maadias, Bilga,
⁶ Semaías, Joiaribe, Jedaías,
⁷ Salu, Amoque, Hilquias, Jedaías; estes foram os chefes dos sacerdotes e de seus irmãos, nos dias de Jesuá.
⁸ E os levitas: Jesuá, Binui, Cadmiel, Serebias, Judá, Matanias; este e seus irmãos dirigiam os louvores.
⁹ E Bacbuquias e Uni, seus irmãos, estavam defronte deles, nas guardas.
¹⁰ E Jesuá gerou a Joiaquim, e Joiaquim gerou a Eliasibe, e Eliasibe gerou a Joiada,
¹¹ E Joiada gerou a Jônatas, e Jônatas gerou a Jadua.
¹² E nos dias de Joiaquim foram sacerdotes, chefes dos pais: de Seraías, Meraías; de Jeremias, Hananias;
¹³ De Esdras, Mesulão; de Amarias, Joanã;
¹⁴ De Maluqui, Jônatas; de Sebanias, José;
¹⁵ De Harim, Adna; de Meraiote, Helcai;
¹⁶ De Ido, Zacarias; de Ginetom, Mesulão.
¹⁷ De Abias, Zicri; de Miamim e de Moadias, Piltai;
¹⁸ De Bilga, Samua; de Semaías, Jônatas;
¹⁹ E de Joiaribe, Matenai; de Jedaías, Uzi;
²⁰ De Salai, Calai; de Amoque, Éber;
²¹ De Hilquias, Hasabias; de Jedaías, Natanael.
²² Dos levitas, nos dias de Eliasibe, foram inscritos como chefes de pais, Joiada, Joanã e Jadua; como também os sacerdotes, até ao reinado de Dario, o persa.
²³ Os filhos de Levi foram inscritos, como chefes de pais, no livro das crônicas, até aos dias de Joanã, filho de Eliasibe.
²⁴ Foram, pois, os chefes dos levitas: Hasabias, Serabias, e Jesuá, filho de Cadmiel; e seus irmãos estavam defronte deles, para louvarem e darem graças, segundo o mandado de Davi, homem de Deus; guarda contra guarda.
²⁵ Matanias, Bacbuquias, Obadias, Mesulão, Talmom e Acube, eram porteiros, que faziam a guarda às tesourarias das portas.
²⁶ Estes viveram nos dias de Jeoiaquim, filho de Jesuá, o filho de Jozadaque; como também nos dias de Neemias, o governador, e do sacerdote Esdras, o escriba.
²⁷ E na dedicação dos muros de Jerusalém buscaram os levitas de todos os seus lugares, para trazê-los a Jerusalém, a fim de fazerem a dedicação com alegria, com louvores e com canto, saltérios, címbalos e com harpas.
²⁸ E assim ajuntaram os filhos dos cantores, tanto da campina dos arredores de Jerusalém, como das aldeias de Netofati;
²⁹ Como também da casa de Gilgal, e dos campos de Geba, e Azmavete; porque os cantores edificaram para si aldeias nos arredores de Jerusalém.
³⁰ E purificaram-se os sacerdotes e os levitas; e logo purificaram o povo, as portas e o muro.
³¹ Então fiz subir os príncipes de Judá sobre o muro, e ordenei dois grandes coros em procissão, um à mão direita sobre o muro do lado da porta do monturo.
³² E após ele ia Hosaías, e a metade dos príncipes de Judá.
³³ E Azarias, Esdras e Mesulão,
³⁴ Judá, Benjamim, Semaías e Jeremias.
³⁵ E dos filhos dos sacerdotes, com trombetas: Zacarias, filho de Jônatas, filho de Semaías, filho de Matanias, filho de Micaías, filho de Zacur, filho de Asafe.
³⁶ E seus irmãos, Semaías, e Azareel, Milalai, Gilalai, Maai, Natanael, Judá e Hanani, com os instrumentos musicais de Davi, homem de Deus; e Esdras, o escriba, ia adiante deles.
³⁷ Indo assim para a porta da fonte, defronte deles, subiram as escadas da cidade de Davi, onde começa a subida do muro, desde cima da casa de Davi, até à porta das águas, do lado do oriente.
³⁸ E o segundo coro ia em frente, e eu após ele; e a metade do povo ia sobre o muro, desde a torre dos fornos, até à muralha larga;
³⁹ E desde a porta de Efraim, passaram por cima da porta velha, e da porta do peixe, e pela torre de Hananeel e a torre de Meá, até à porta das ovelhas; e pararam à porta da prisão.
⁴⁰ Então ambos os coros pararam na casa de Deus; como também eu, e a metade dos magistrados comigo.
⁴¹ E os sacerdotes Eliaquim, Maaseias, Miniamim, Micaías, Elioenai, Zacarias e Hananias, com trombetas.
⁴² Como também, Maaseias, Semaías, Eleazar, Uzi, Joanã, Malquias, Elão e Ezer; e faziam-se ouvir os cantores, juntamente com Jezraías, o seu superintendente.
⁴³ E ofereceram, no mesmo dia, grandes sacrifícios e se alegraram; porque Deus os alegrara com grande alegria; e até as mulheres e os meninos se alegraram, de modo que a alegria de Jerusalém se ouviu até de longe.
⁴⁴ Também no mesmo dia se nomearam homens sobre as câmaras, dos tesouros, das ofertas alçadas, das primícias, dos dízimos, para ajuntarem nelas, dos campos das cidades, as partes da lei para os sacerdotes e para os levitas; porque Judá estava alegre por causa dos sacerdotes e dos levitas que assistiam ali.
⁴⁵ E observava os preceitos do seu Deus, e os da purificação; como também os cantores e porteiros, conforme ao mandado de Davi e de seu filho Salomão.
⁴⁶ Porque já nos dias de Davi e Asafe, desde a antiguidade, havia chefes dos cantores, e dos cânticos de louvores e de ação de graças a Deus.
⁴⁷ Por isso todo o Israel, já nos dias de Zorobabel e nos dias de Neemias, dava aos cantores e aos porteiros as porções de cada dia; e santificavam as porções aos levitas, e os levitas as santificavam aos filhos de Arão.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como foi decidido quem moraria na cidade de Jerusalém, já que a terra era grande mas o povo era pouco?",
                        opcoes: [
                            { numero: 1, texto: "Pela força física", correta: false },
                            { numero: 2, texto: "Lançando sortes para que um de cada dez habitasse na cidade santa", correta: true },
                            { numero: 3, texto: "Pela riqueza de cada família", correta: false },
                            { numero: 4, texto: "Ninguém quis morar lá", correta: false }
                        ],
                        explicacao: "Neemias 11:1 - ...o resto do povo lançou sortes, para trazer um de dez para que habitasse na santa cidade de Jerusalém.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        12: {
            titulo: "Dedicação dos Muros",
            texto: ` ¹ Naquele dia leu-se no livro de Moisés, aos ouvidos do povo; e achou-se escrito nele que os amonitas e os moabitas não entrassem jamais na congregação de Deus,
² Porquanto não tinham saído ao encontro dos filhos de Israel com pão e água; antes contra eles assalariaram a Balaão para os amaldiçoar; porém o nosso Deus converteu a maldição em bênção.
³ Sucedeu, pois, que, ouvindo eles esta lei, apartaram de Israel todo o elemento misto.
⁴ Ora, antes disto, Eliasibe, sacerdote, que presidia sobre a câmara da casa do nosso Deus, se tinha aparentado com Tobias;
⁵ E fizera-lhe uma câmara grande, onde dantes se depositavam as ofertas de alimentos, o incenso, os utensílios, os dízimos do grão, do mosto e do azeite, que se ordenaram para os levitas, cantores e porteiros, como também a oferta alçada para os sacerdotes.
⁶ Mas durante tudo isto não estava eu em Jerusalém, porque no ano trinta e dois de Artaxerxes, rei de Babilônia, fui ter com o rei; mas após alguns dias tornei a alcançar licença do rei.
⁷ E voltando a Jerusalém, compreendi o mal que Eliasibe fizera para Tobias, fazendo-lhe uma câmara nos pátios da casa de Deus.
⁸ O que muito me desagradou; de sorte que lancei todos os móveis da casa de Tobias fora da câmara.
⁹ E, ordenando-o eu, purificaram as câmaras; e tornei a trazer para ali os utensílios da casa de Deus, com as ofertas de alimentos e o incenso.
¹⁰ Também entendi que os quinhões dos levitas não se lhes davam, de maneira que os levitas e os cantores, que faziam a obra, tinham fugido cada um para a sua terra.
¹¹ Então contendi com os magistrados, e disse: Por que se desamparou a casa de Deus? Porém eu os ajuntei, e os restaurei no seu posto.
¹² Então todo o Judá trouxe os dízimos do grão, do mosto e do azeite aos celeiros.
¹³ E por tesoureiros pus sobre os celeiros a Selemias, o sacerdote, e a Zadoque, o escrivão e a Pedaías, dentre os levitas; e com eles Hanã, filho de Zacur, o filho de Matanias; porque foram achados fiéis; e se lhes encarregou a eles a distribuição para seus irmãos.
¹⁴ Por isto, Deus meu, lembra-te de mim e não risques as beneficências que eu fiz à casa de meu Deus e às suas observâncias.
¹⁵ Naqueles dias vi em Judá os que pisavam lagares ao sábado e traziam feixes que carregavam sobre os jumentos; como também vinho, uvas e figos, e toda a espécie de cargas, que traziam a Jerusalém no dia de sábado; e protestei contra eles no dia em que vendiam mantimentos.
¹⁶ Também habitavam em Jerusalém tírios que traziam peixe e toda a mercadoria, que vendiam no sábado aos filhos de Judá, e em Jerusalém.
¹⁷ E contendi com os nobres de Judá, e lhes disse: Que mal é este que fazeis, profanando o dia de sábado?
¹⁸ Porventura não fizeram vossos pais assim, e não trouxe o nosso Deus todo este mal sobre nós e sobre esta cidade? E vós ainda mais acrescentais o ardor de sua ira sobre Israel, profanando o sábado.
¹⁹ Sucedeu, pois, que, dando já sombra nas portas de Jerusalém antes do sábado, ordenei que as portas fossem fechadas; e mandei que não as abrissem até passado o sábado; e pus às portas alguns de meus servos, para que nenhuma carga entrasse no dia de sábado.
²⁰ Então os negociantes e os vendedores de toda a mercadoria passaram a noite fora de Jerusalém, uma ou duas vezes.
²¹ Protestei, pois, contra eles, e lhes disse: Por que passais a noite defronte do muro? Se outra vez o fizerdes, hei de lançar mão de vós. Daquele tempo em diante não vieram no sábado.
²² Também disse aos levitas que se purificassem, e viessem guardar as portas, para santificar o dia do sábado. Nisto também, Deus meu, lembra-te de mim e perdoa-me segundo a abundância da tua benignidade.
²³ Vi também naqueles dias judeus que tinham casado com mulheres asdoditas, amonitas e moabitas.
²⁴ E seus filhos falavam meio asdodita, e não podiam falar judaico, senão segundo a língua de cada povo.
²⁵ E contendi com eles, e os amaldiçoei e espanquei alguns deles, e lhes arranquei os cabelos, e os fiz jurar por Deus, dizendo: Não dareis mais vossas filhas a seus filhos, e não tomareis mais suas filhas, nem para vossos filhos nem para vós mesmos.
²⁶ Porventura não pecou nisto Salomão, rei de Israel, não havendo entre muitas nações rei semelhante a ele, e sendo ele amado de seu Deus, e pondo-o Deus rei sobre todo o Israel? E contudo as mulheres estrangeiras o fizeram pecar.
²⁷ E dar-vos-íamos nós ouvidos, para fazermos todo este grande mal, prevaricando contra o nosso Deus, casando com mulheres estrangeiras?
²⁸ Também um dos filhos de Joiada, filho de Eliasibe, o sumo sacerdote, era genro de Sambalate, o horonita, por isso o afugentei de mim.
²⁹ Lembra-te deles, Deus meu, pois contaminaram o sacerdócio, como também a aliança do sacerdócio e dos levitas.
³⁰ Assim os limpei de todo o estrangeiro, e designei os cargos dos sacerdotes e dos levitas, cada um na sua obra.
³¹ Como também para com as ofertas de lenha em tempos determinados, e para com as primícias; lembra-te de mim, Deus meu, para bem.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Neemias organizou o louvor na dedicação dos muros?",
                        opcoes: [
                            { numero: 1, texto: "Com dois grandes coros que caminhavam sobre o muro em direções opostas", correta: true },
                            { numero: 2, texto: "Com um desfile de cavalos", correta: false },
                            { numero: 3, texto: "Em silêncio total", correta: false },
                            { numero: 4, texto: "Apenas com sacrifícios de animais", correta: false }
                        ],
                        explicacao: "Neemias 12:31 - Então fiz subir os príncipes de Judá sobre o muro, e ordenei dois grandes coros...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        13: {
            titulo: "As Reformas Finais de Neemias",
            texto: `1 Naquele dia, leu-se no livro de Moisés aos ouvidos do povo; e achou-se escrito nele que os amonitas e os moabitas não entrassem jamais na congregação de Deus,
2 porquanto não tinham saído ao encontro dos filhos de Israel com pão e água; antes, assalariaram contra eles a Balaão para os amaldiçoar, ainda que o nosso Deus converteu a maldição em bênção.
3 Sucedeu, pois, que, ouvindo eles esta lei, apartaram de Israel toda mistura.
4 Ora, antes disso, Eliasibe, sacerdote, que presidia sobre a câmara da Casa do nosso Deus, se tinha aparentado com Tobias;
5 e fizera-lhe uma câmara grande, onde dantes se metiam as ofertas de manjares, o incenso, os utensílios e os dízimos do grão, do mosto e do azeite, que se ordenaram para os levitas, e cantores, e porteiros, como também a oferta alçada para os sacerdotes.
6 Mas, durante tudo isso, não estava eu em Jerusalém, porque, no ano trinta e dois de Artaxerxes, rei de Babilônia, vim eu ter com o rei; mas, ao cabo de alguns dias, tornei a alcançar licença do rei.
7 E vim a Jerusalém e compreendi o mal que Eliasibe fizera para beneficiar a Tobias, fazendo-lhe uma câmara nos pátios da Casa de Deus,
8 o que muito me desagradou; de sorte que lancei todos os móveis da casa de Tobias fora da câmara.
9 E, ordenando-o eu, purificaram as câmaras; e tornei a trazer para ali os utensílios da casa de Deus, com as ofertas de alimentos e o incenso.
10 Também entendi que o quinhão dos levitas se lhes não dava, de maneira que os levitas e os cantores, que faziam a obra, tinham fugido cada um para a sua terra.
11 Então, contendi com os magistrados e disse: Por que se desamparou a Casa de Deus? Porém eu os ajuntei e os restaurei no seu posto.
12 Então, todo o Judá trouxe os dízimos do grão, e do mosto, e do azeite aos celeiros.
13 E por tesoureiros pus sobre os celeiros a Selemias, o sacerdote, e a Zadoque, o escrivão, e a Pedaías, dentre os levitas; e com eles Hanã, filho de Zacur, filho de Matanias; porque se tinham achado fiéis, e se lhes encarregou a eles a distribuição para seus irmãos.
14 (Por isto, Deus meu, lembra-te de mim e não risques as beneficências que eu fiz à Casa de meu Deus e às suas guardas.)
15 Naqueles dias, vi em Judá os que pisavam lagares ao sábado e traziam feixes que carregavam sobre os jumentos; como também vinho, uvas e figos e toda casta de cargas, que traziam a Jerusalém no dia de sábado; e protestei contra eles no dia em que vendiam mantimentos.
16 Também tírios habitavam dentro e traziam peixe e toda mercadoria, que no sábado vendiam aos filhos de Judá e em Jerusalém.
17 E contendi com os nobres de Judá e lhes disse: Que mal é este que fazeis, profanando o dia de sábado?
18 Porventura, não fizeram vossos pais assim, e nosso Deus não trouxe todo este mal sobre nós e sobre esta cidade? E vós ainda mais acrescentais o ardor de sua ira sobre Israel, profanando o sábado.
19 Sucedeu, pois, que, dando as portas de Jerusalém já sombra antes do sábado, ordenando-o eu, as portas se fecharam; e mandei que não as abrissem até passado o sábado; e pus às portas alguns de meus moços, para que nenhuma carga entrasse no dia de sábado.
20 Então, os negociantes e os vendedores de toda mercadoria passaram a noite fora de Jerusalém, uma ou duas vezes.
21 Protestei, pois, contra eles e lhes disse: Por que passais a noite defronte do muro? Se outra vez o fizerdes, hei de lançar mão sobre vós. Daquele tempo em diante, não vieram no sábado.
22 Também disse aos levitas que se purificassem e viessem guardar as portas, para santificar o sábado. (Nisso também, Deus meu, lembra-te de mim; e perdoa-me segundo a abundância da tua benignidade.)
23 Vi também, naqueles dias, judeus que tinham casado com mulheres asdoditas, amonitas e moabitas.
24 E seus filhos falavam meio asdodita e não podiam falar judaico, senão segundo a língua de cada povo.
25 E contendi com eles, e os amaldiçoei, e espanquei alguns deles, e lhes arranquei os cabelos, e os fiz jurar por Deus, dizendo: Não dareis mais vossas filhas a seus filhos e não tomareis mais suas filhas, nem para vossos filhos nem para vós mesmos.
26 Porventura, não pecou nisso Salomão, rei de Israel, não havendo entre muitas nações rei semelhante a ele, e sendo amado de seu Deus, e pondo-o Deus rei sobre todo o Israel? E, contudo, as mulheres estranhas o fizeram pecar.
27 E dar-vos-íamos nós ouvidos, para fazermos todo este grande mal, prevaricando contra o nosso Deus, casando com mulheres estranhas?
28 Também um dos filhos de Joiada, filho de Eliasibe, o sumo sacerdote, era genro de Sambalate, o horonita, pelo que o afugentei de mim.
29 Lembra-te deles, Deus meu, pois contaminaram o sacerdócio, como também o concerto do sacerdócio e dos levitas.
30 Assim, os alimpei de todos os estranhos e designei os cargos dos sacerdotes e dos levitas, cada um na sua obra,
31 como também para as ofertas da lenha em tempos determinados e para as primícias. Lembra-te de mim, Deus meu, para o bem. `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual zelo Neemias demonstrou em relação ao dia de Sábado?",
                        opcoes: [
                            { numero: 1, texto: "Ele permitiu o comércio livre", correta: false },
                            { numero: 2, texto: "Ordenou que as portas de Jerusalém fossem fechadas antes do sábado e não se abrissem até que passasse", correta: true },
                            { numero: 3, texto: "Trabalhou normalmente no sábado", correta: false },
                            { numero: 4, texto: "Mudou o sábado para o domingo", correta: false }
                        ],
                        explicacao: "Neemias 13:19 - ...mandei que as portas se fechassem... e não se abrissem até passado o sábado.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};