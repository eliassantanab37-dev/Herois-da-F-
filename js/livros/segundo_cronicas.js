// js/livros/segundo_cronicas.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const segundo_cronicas = {
    nome: "2 Crônicas",
    icone: "🏛️", 
    autor: "Esdras (tradição)",
    //background: "./imagens/segundo_cronicas_bg.jpg", 

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "A Sabedoria de Salomão",
            texto: `¹ Salomão, filho de Davi, fortaleceu-se no seu reino; e o Senhor seu Deus era com ele, e o engrandeceu sobremaneira.
² E falou Salomão a todo o Israel, aos capitães de mil e de cem, aos juízes e a todos os governadores em todo o Israel, chefes das famílias.
³ E foi Salomão, e toda a congregação com ele, ao alto que estava em Gibeom, porque ali estava a tenda da congregação de Deus, que Moisés, servo do Senhor, tinha feito no deserto.
⁴ Mas Davi tinha feito subir a arca de Deus de Quiriate-Jearim ao lugar que lhe preparara; porque lhe tinha armado uma tenda em Jerusalém.
⁵ Também o altar de cobre que tinha feito Bezaleel, filho de Uri, filho de Hur, estava ali diante do tabernáculo do Senhor; e Salomão e a congregação o buscavam.
⁶ E Salomão ofereceu ali sacrifícios perante o Senhor, sobre o altar de cobre que estava na tenda da congregação; e ofereceu sobre ele mil holocaustos.
⁷ Naquela mesma noite Deus apareceu a Salomão, e disse-lhe: Pede o que queres que eu te dê.
⁸ E Salomão disse a Deus: Tu usaste de grande benignidade com meu pai Davi, e a mim me fizeste rei em seu lugar.
⁹ Agora, pois, ó Senhor Deus, confirme-se a tua palavra, dada a meu pai Davi; porque tu me fizeste reinar sobre um povo numeroso como o pó da terra.
¹⁰ Dá-me, pois, agora, sabedoria e conhecimento, para que possa sair e entrar perante este povo; pois quem poderia julgar a este teu tão grande povo?
¹¹ Então Deus disse a Salomão: Porquanto houve isto no teu coração, e não pediste riquezas, bens, ou honra, nem a morte dos que te odeiam, nem tampouco pediste muitos dias de vida, mas pediste para ti sabedoria e conhecimento, para poderes julgar a meu povo, sobre o qual te constituí rei,
¹² Sabedoria e conhecimento te são dados; e te darei riquezas, bens e honra, quais não teve nenhum rei antes de ti, e nem depois de ti haverá.
¹³ Assim Salomão veio a Jerusalém, do alto que estava em Gibeom, de diante da tenda da congregação; e reinou sobre Israel.
¹⁴ E Salomão ajuntou carros e cavaleiros, e teve mil e quatrocentos carros, e doze mil cavaleiros; os quais pôs nas cidades dos carros, e junto ao rei em Jerusalém.
¹⁵ E fez o rei que houvesse ouro e prata em Jerusalém como pedras; e cedros em tanta abundância como sicômoros que há pelas campinas.
¹⁶ E os cavalos, que tinha Salomão, eram trazidos do Egito; e os mercadores do rei os recebiam em tropas, cada uma pelo seu preço.
¹⁷ E faziam subir e sair do Egito cada carro por seiscentos siclos de prata, e cada cavalo por cento e cinquenta; e assim, por meio deles eram para todos os reis dos heteus, e para os reis da Síria.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Salomão pediu a Deus quando o Senhor lhe apareceu em Gibeão?",
                        opcoes: [
                            { numero: 1, texto: "Vida longa", correta: false },
                            { numero: 2, texto: "A morte de seus inimigos", correta: false },
                            { numero: 3, texto: "Sabedoria e conhecimento para governar o povo", correta: true },
                            { numero: 4, texto: "Riquezas e glória", correta: false }
                        ],
                        explicacao: "2 Crônicas 1:10 - Dá-me, pois, agora, sabedoria e conhecimento, para que possa sair e entrar perante este povo...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Deus deu a Salomão, além da sabedoria que ele pediu?",
                        opcoes: [
                            { numero: 1, texto: "Riquezas, bens e honra", correta: true },
                            { numero: 2, texto: "Apenas a sabedoria", correta: false },
                            { numero: 3, texto: "Muitos cavalos do Egito", correta: false },
                            { numero: 4, texto: "Um exército imbatível", correta: false }
                        ],
                        explicacao: "2 Crônicas 1:12 - Sabedoria e conhecimento te são dados; e te darei riquezas, bens e honra...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "Preparativos para o Templo",
            texto: `¹ E determinou Salomão edificar uma casa ao nome do Senhor, como também uma casa para o seu reino.
² E designou Salomão setenta mil homens de carga, e oitenta mil que talhavam pedras na montanha, e três mil e seiscentos inspetores sobre eles.
³ E Salomão mandou dizer a Hirão, rei de Tiro: Como fizeste com Davi, meu pai, mandando-lhe cedros, para edificar uma casa em que morasse, assim também faze comigo.
⁴ Eis que estou para edificar uma casa ao nome do Senhor meu Deus, para lhe consagrar, para queimar perante ele incenso aromático, e para a apresentação contínua do pão da proposição, para os holocaustos da manhã e da tarde, nos sábados e nas luas novas, e nas festividades do Senhor nosso Deus; o que é obrigação perpétua de Israel.
⁵ E a casa que estou para edificar há de ser grande; porque o nosso Deus é maior do que todos os deuses.
⁶ Porém, quem seria capaz de lhe edificar uma casa, visto que os céus e até os céus dos céus o não podem conter? E quem sou eu, que lhe edificasse casa, salvo para queimar incenso perante ele?
⁷ Manda-me, pois, agora um homem hábil para trabalhar em ouro, em prata, em bronze, em ferro, em púrpura, em carmesim e em azul; e que saiba lavrar ao buril, juntamente com os peritos que estão comigo em Judá e em Jerusalém, os quais Davi, meu pai, preparou.
⁸ Manda-me também madeiras de cedro, de cipreste, e algumins do Líbano; porque bem sei eu que os teus servos sabem cortar madeira no Líbano; e eis que os meus servos estarão com os teus servos.
⁹ E isso para prepararem muita madeira; porque a casa que estou para fazer há de ser grande e maravilhosa.
¹⁰ E eis que a teus servos, os cortadores, que cortarem a madeira, darei vinte mil coros de trigo malhado, vinte mil coros de cevada, vinte mil batos de vinho e vinte mil batos de azeite.
¹¹ E Hirão, rei de Tiro, respondeu por escrito que enviou a Salomão, dizendo: Porque o Senhor tem amado o seu povo, te constituiu sobre ele rei.
¹² Disse mais Hirão: Bendito seja o Senhor Deus de Israel, que fez os céus e a terra; o que deu ao rei Davi um filho sábio, de grande prudência e entendimento, que edifique casa ao Senhor, e casa para o seu reino.
¹³ Agora, pois, envio um homem sábio de grande entendimento, a saber, Hirão Abiú.
¹⁴ Filho de uma mulher das filhas de Dã, e cujo pai foi homem de Tiro; este sabe trabalhar em ouro, em prata, em bronze, em ferro, em pedras e em madeira, em púrpura, em azul, e em linho fino, e em carmesim, e é hábil para toda a obra do buril, e para toda a espécie de invenções, qualquer coisa que se lhe propuser, juntamente com os teus peritos, e os peritos de Davi, meu senhor, teu pai.
¹⁵ Agora, pois, meu senhor, mande para os seus servos o trigo, a cevada, o azeite e o vinho, de que falou;
¹⁶ E nós cortaremos tanta madeira no Líbano, quanta houveres mister, e a traremos em jangadas pelo mar até Jope, e tu a farás subir a Jerusalém.
¹⁷ E Salomão contou todos os homens estrangeiros, que havia na terra de Israel, conforme o censo com que os contara Davi seu pai; e acharam-se cento e cinquenta e três mil e seiscentos.
¹⁸ E designou deles setenta mil carregadores, e oitenta mil cortadores na montanha; como também três mil e seiscentos inspetores, para fazerem trabalhar o povo.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "A qual rei Salomão pediu madeira de cedro, cipreste e sândalo?",
                        opcoes: [
                            { numero: 1, texto: "Rei do Egito", correta: false },
                            { numero: 2, texto: "Hurão (ou Hirão), rei de Tiro", correta: true },
                            { numero: 3, texto: "Rei dos Amonitas", correta: false },
                            { numero: 4, texto: "Rei da Babilônia", correta: false }
                        ],
                        explicacao: "2 Crônicas 2:3 - E Salomão mandou dizer a Hurão, rei de Tiro: Como fizeste com Davi meu pai... assim faze comigo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "A Construção no Monte Moriá",
            texto: ` ¹ E começou Salomão a edificar a casa do Senhor em Jerusalém, no monte Moriá, onde o Senhor aparecera a Davi seu pai, no lugar que Davi tinha preparado na eira de Ornã, o jebuseu.
² E começou a edificar no segundo mês, no segundo dia, no ano quarto do seu reinado.
³ E estes foram os fundamentos que Salomão pôs para edificar a casa de Deus: o comprimento em côvados, segundo a primeira medida, era de sessenta côvados, e a largura de vinte côvados.
⁴ E o pátio, que estava na frente, tinha vinte côvados de comprimento, segundo a largura da casa, e a altura era de cento e vinte; e por dentro o revestiu com ouro puro.
⁵ E a casa grande forrou com madeira de faia; e então a revestiu com ouro fino; e fez sobre ela palmas e cadeias.
⁶ Também a casa adornou de pedras preciosas, para ornamento; e o ouro era ouro de Parvaim.
⁷ Também na casa revestiu, com ouro, as traves, os umbrais, as suas paredes e as suas portas; e lavrou querubins nas paredes.
⁸ Fez mais a casa do lugar santíssimo, cujo comprimento, segundo a largura da casa, era de vinte côvados, e também a largura de vinte côvados; e revestiu-a de ouro fino, do peso de seiscentos talentos.
⁹ O peso dos pregos era de cinquenta siclos de ouro; e as câmaras cobriu de ouro.
¹⁰ Também fez na casa do lugar santíssimo dois querubins de obra móvel, e cobriu-os de ouro.
¹¹ E, quanto às asas dos querubins, o seu comprimento era de vinte côvados; a asa de um deles, de cinco côvados, e tocava na parede da casa; e a outra asa de cinco côvados, e tocava na asa do outro querubim.
¹² Também a asa do outro querubim era de cinco côvados, e tocava na parede da casa; era também a outra asa de cinco côvados, que tocava na asa do outro querubim.
¹³ E as asas destes querubins se estendiam vinte côvados; e estavam postos em pé, e os seus rostos virados para a casa.
¹⁴ Também fez o véu de azul, púrpura, carmesim e linho fino; e pôs sobre ele querubins;
¹⁵ Fez também, diante da casa, duas colunas de trinta e cinco côvados de altura; e o capitel, que estava sobre cada uma, era de cinco côvados.
¹⁶ Também fez cadeias no oráculo, e as pôs sobre as cabeças das colunas; fez também cem romãs, as quais pôs entre as cadeias.
¹⁷ E levantou as colunas diante do templo, uma à direita, e outra à esquerda; e chamou o nome da que estava à direita Jaquim, e o nome da que estava à esquerda Boaz.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Em que lugar específico Salomão começou a edificar a casa do Senhor?",
                        opcoes: [
                            { numero: 1, texto: "No Monte Sinai", correta: false },
                            { numero: 2, texto: "Em Belém", correta: false },
                            { numero: 3, texto: "No Monte Moriá, na eira de Ornã, o jebuseu", correta: true },
                            { numero: 4, texto: "No jardim do palácio", correta: false }
                        ],
                        explicacao: "2 Crônicas 3:1 - Começou Salomão a edificar a casa do Senhor em Jerusalém, no monte Moriá... na eira de Ornã, o jebuseu.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quais eram os nomes das duas grandes colunas colocadas à frente do Templo?",
                        opcoes: [
                            { numero: 1, texto: "Boaz e Joaquim", correta: false },
                            { numero: 2, texto: "Jaquim e Boaz", correta: true },
                            { numero: 3, texto: "Davi e Salomão", correta: false },
                            { numero: 4, texto: "Alfa e Ômega", correta: false }
                        ],
                        explicacao: "2 Crônicas 3:17 - E levantou as colunas diante do templo... e chamou o nome da que estava à direita Jaquim, e o da que estava à esquerda Boaz.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "O Mobiliário de Bronze e Ouro",
            texto: ` ¹ Também fez um altar de metal, de vinte côvados de comprimento, de vinte côvados de largura e de dez côvados de altura.
² Fez também o mar de fundição, de dez côvados de uma borda até a outra, totalmente redondo, e de cinco côvados de altura; cingia-o ao redor um cordão de trinta côvados.
³ E por baixo dele havia figuras de bois, que cingiam o mar ao redor, dez em cada côvado, contornando-o; e tinha duas fileiras de bois, fundidos juntamente com o mar.
⁴ E o mar estava posto sobre doze bois; três que olhavam para o norte, três que olhavam para o ocidente, três que olhavam para o sul e três que olhavam para o oriente; e o mar estava posto sobre eles; e as suas partes posteriores estavam todas para o lado de dentro.
⁵ E tinha um palmo de grossura, e a sua borda foi feita como a borda de um copo, ou como uma flor-de-lis, da capacidade de três mil batos.
⁶ Também fez dez pias; e pôs cinco à direita e cinco à esquerda, para lavarem nelas; o que pertencia ao holocausto o lavavam nelas; porém o mar era para que os sacerdotes se lavassem nele.
⁷ Fez também dez castiçais de ouro, segundo a sua forma, e pô-los no templo, cinco à direita, e cinco à esquerda.
⁸ Também fez dez mesas, e pô-las no templo, cinco à direita e cinco à esquerda; também fez cem bacias de ouro.
⁹ Fez mais o pátio dos sacerdotes, e o grande átrio; como também as portas para o pátio, de bronze revestiu as suas portas.
¹⁰ E pôs o mar ao lado direito, para o lado do oriente, na direção do sul.
¹¹ Também Hirão fez as caldeiras, as pás e as bacias. Assim acabou Hirão de fazer a obra, que fazia para o rei Salomão, na casa de Deus.
¹² As duas colunas, os globos, e os dois capitéis sobre as cabeças das colunas; e as duas redes, para cobrir os dois globos dos capitéis, que estavam sobre a cabeça das colunas.
¹³ E as quatrocentas romãs para as duas redes; duas carreiras de romãs para cada rede, para cobrirem os dois globos dos capitéis que estavam em cima das colunas.
¹⁴ Também fez as bases; e as pias pôs sobre as bases;
¹⁵ Um mar, e os doze bois debaixo dele;
¹⁶ Semelhantemente as caldeiras, as pás, os garfos e todos os seus utensílios, fez Hirão Abiú ao rei Salomão, para a casa do Senhor, de cobre polido.
¹⁷ Na campina do Jordão os fundiu o rei, na terra argilosa, entre Sucote e Zeredá.
¹⁸ E fez Salomão todos estes objetos em grande abundância, que não se podia averiguar o peso do cobre.
¹⁹ Fez também Salomão todos os objetos que eram para a casa de Deus, como também o altar de ouro, e as mesas, sobre as quais estavam os pães da proposição.
²⁰ E os castiçais com as suas lâmpadas de ouro finíssimo, para as acenderem segundo o costume, perante o oráculo.
²¹ E as flores, as lâmpadas e as tenazes eram de ouro, do mais finíssimo ouro.
²² Como também os apagadores, as bacias, as colheres e os incensários de ouro finíssimo; e quanto à entrada da casa, as suas portas de dentro do lugar santíssimo, e as portas da casa do templo, eram de ouro.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Para que servia o 'mar de fundição' (uma grande bacia de bronze) no pátio do Templo?",
                        opcoes: [
                            { numero: 1, texto: "Para guardar o ouro", correta: false },
                            { numero: 2, texto: "Para os sacerdotes se lavarem nele", correta: true },
                            { numero: 3, texto: "Para cozinhar a carne dos sacrifícios", correta: false },
                            { numero: 4, texto: "Para coletar água da chuva", correta: false }
                        ],
                        explicacao: "2 Crônicas 4:6 - ...mas o mar era para os sacerdotes se lavarem nele.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "A Arca entra no Templo e a Glória Desce",
            texto: ` ¹ Assim se acabou toda a obra que Salomão fez para a casa do Senhor; então trouxe Salomão as coisas que seu pai Davi havia consagrado, a prata, o ouro e todos os objetos, e pô-los entre os tesouros da casa de Deus.
² Então Salomão congregou em Jerusalém os anciãos de Israel, e todos os chefes das tribos, os chefes dos pais entre os filhos de Israel, para fazerem subir a arca da aliança do Senhor, da cidade de Davi, que é Sião.
³ E todos os homens de Israel se congregaram ao rei na ocasião da festa, que foi no sétimo mês.
⁴ E vieram todos os anciãos de Israel; e os levitas levantaram a arca.
⁵ E fizeram subir a arca, e a tenda da congregação, com todos os objetos sagrados, que estavam na tenda; os sacerdotes e os levitas os fizeram subir.
⁶ Então o rei Salomão e toda a congregação de Israel, que se tinha reunido com ele diante da arca, sacrificaram carneiros e bois, que não se podiam contar, nem numerar, por causa da sua abundância.
⁷ Assim trouxeram os sacerdotes a arca da aliança do Senhor ao seu lugar, ao oráculo da casa, ao lugar santíssimo, até debaixo das asas dos querubins.
⁸ Porque os querubins estendiam ambas as asas sobre o lugar da arca, e os querubins cobriam, por cima, a arca e os seus varais.
⁹ Então os varais sobressaíam para que as pontas dos varais da arca se vissem perante o oráculo, mas não se vissem de fora; e ali tem estado até ao dia de hoje.
¹⁰ Na arca não havia coisa alguma senão as duas tábuas, que Moisés tinha posto em Horebe, quando o Senhor fez aliança com os filhos de Israel, saindo eles do Egito.
¹¹ E sucedeu que, saindo os sacerdotes do santuário (porque todos os sacerdotes, que ali se acharam, se santificaram, sem respeitarem as suas turmas,
¹² E os levitas, que eram cantores, todos eles, de Asafe, de Hemã, de Jedutum, de seus filhos e de seus irmãos, vestidos de linho fino, com címbalos, com saltérios e com harpas, estavam em pé para o oriente do altar; e com eles até cento e vinte sacerdotes, que tocavam as trombetas).
¹³ E aconteceu que, quando eles uniformemente tocavam as trombetas, e cantavam, para fazerem ouvir uma só voz, bendizendo e louvando ao Senhor; e levantando eles a voz com trombetas, címbalos, e outros instrumentos musicais, e louvando ao Senhor, dizendo: Porque ele é bom, porque a sua benignidade dura para sempre, então a casa se encheu de uma nuvem, a saber, a casa do Senhor;
¹⁴ E os sacerdotes não podiam permanecer em pé, para ministrar, por causa da nuvem; porque a glória do Senhor encheu a casa de Deus.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que havia dentro da Arca quando ela foi colocada no Templo?",
                        opcoes: [
                            { numero: 1, texto: "O maná e a vara de Arão", correta: false },
                            { numero: 2, texto: "Nada, senão as duas tábuas que Moisés ali pusera em Horebe", correta: true },
                            { numero: 3, texto: "A coroa de Davi", correta: false },
                            { numero: 4, texto: "O Livro da Lei original", correta: false }
                        ],
                        explicacao: "2 Crônicas 5:10 - Na arca não havia coisa alguma senão as duas tábuas que Moisés ali pusera em Horebe...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu quando os cantores e músicos louvaram ao Senhor em uníssono?",
                        opcoes: [
                            { numero: 1, texto: "A casa se encheu de uma nuvem, a glória do Senhor", correta: true },
                            { numero: 2, texto: "Houve um grande silêncio", correta: false },
                            { numero: 3, texto: "Começou a chover", correta: false },
                            { numero: 4, texto: "O rei Salomão desmaiou", correta: false }
                        ],
                        explicacao: "2 Crônicas 5:13-14 - ...sucedeu que a casa se encheu de uma nuvem, a saber, a casa do Senhor... porque a glória do Senhor encheu a casa de Deus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },


        6: {
            titulo: "A Oração de Dedicação de Salomão",
            texto: `¹ Então falou Salomão: O Senhor disse que habitaria nas trevas.
² E eu te tenho edificado uma casa para morada, e um lugar para a tua eterna habitação.
³ Então o rei virou o seu rosto, e abençoou a toda a congregação de Israel, e toda a congregação de Israel estava em pé.
⁴ E ele disse: Bendito seja o Senhor Deus de Israel, que falou pela sua boca a Davi meu pai; e pelas suas mãos o cumpriu, dizendo:
⁵ Desde o dia em que tirei a meu povo da terra do Egito, não escolhi cidade alguma de todas as tribos de Israel, para edificar nela uma casa em que estivesse o meu nome; nem escolhi homem algum para ser líder do meu povo, Israel.
⁶ Porém escolhi a Jerusalém para que ali estivesse o meu nome; e escolhi a Davi, para que estivesse sobre o meu povo Israel.
⁷ Também Davi, meu pai, teve no seu coração o edificar uma casa ao nome do Senhor Deus de Israel.
⁸ Porém o Senhor disse a Davi, meu pai: Porquanto tiveste no teu coração o edificar uma casa ao meu nome, bem fizeste de ter isto no teu coração.
⁹ Contudo tu não edificarás a casa, mas teu filho, que há de proceder de teus lombos, esse edificará a casa ao meu nome.
¹⁰ Assim confirmou o Senhor a sua palavra, que falou; porque eu me levantei em lugar de Davi meu pai, e me assentei sobre o trono de Israel, como o Senhor disse, e edifiquei a casa ao nome do Senhor Deus de Israel.
¹¹ E pus nela a arca, em que está a aliança que o Senhor fez com os filhos de Israel.
¹² E pôs-se em pé, perante o altar do Senhor, na presença de toda a congregação de Israel, e estendeu as suas mãos.
¹³ Porque Salomão tinha feito uma plataforma de metal, de cinco côvados de comprimento, de cinco côvados de largura e de três côvados de altura, e a tinha posto no meio do pátio, e pôs-se em pé sobre ela, e ajoelhou-se em presença de toda a congregação de Israel, e estendeu as suas mãos para o céu.
¹⁴ E disse: Ó Senhor Deus de Israel, não há Deus semelhante a ti, nem nos céus nem na terra; que guardas a aliança e a beneficência aos teus servos que caminham perante ti de todo o seu coração.
¹⁵ Que guardaste ao teu servo Davi, meu pai, o que lhe falaste; porque tu pela tua boca o disseste, e pela tua mão o cumpriste, como se vê neste dia.
¹⁶ Agora, pois, Senhor Deus de Israel, guarda ao teu servo Davi, meu pai, o que falaste, dizendo: Nunca homem algum será cortado de diante de mim, que se assente sobre o trono de Israel; tão somente que teus filhos guardem seu caminho, andando na minha lei, como tu andaste diante de mim.
¹⁷ E agora, Senhor Deus de Israel, cumpra-se a tua palavra, que disseste ao teu servo Davi.
¹⁸ Mas, na verdade, habitará Deus com os homens na terra? Eis que os céus, e o céu dos céus, não te podem conter, quanto menos esta casa que tenho edificado?
¹⁹ Atende, pois, à oração do teu servo, e à sua súplica, ó Senhor meu Deus; para ouvires o clamor, e a oração, que o teu servo ora perante ti.
²⁰ Que os teus olhos estejam dia e noite abertos sobre esta casa, sobre o lugar de que disseste que ali porias o teu nome; para ouvires a oração que o teu servo orar neste lugar.
²¹ Ouve, pois, as súplicas do teu servo, e do teu povo Israel, que fizerem neste lugar; e ouve tu do lugar da tua habitação, desde os céus; ouve pois, e perdoa.
²² Quando alguém pecar contra o seu próximo, e lhe impuser juramento de maldição, fazendo-o jurar, e o juramento de maldição vier perante o teu altar, nesta casa,
²³ Ouve tu, então, desde os céus, e age e julga a teus servos, condenando ao ímpio, retribuindo o seu proceder sobre a sua cabeça; e justificando ao justo, dando-lhe segundo a sua justiça.
²⁴ Quando também o teu povo Israel for ferido diante do inimigo, por ter pecado contra ti, e eles se converterem, e confessarem o teu nome, e orarem e suplicarem perante ti nesta casa,
²⁵ Então, ouve tu desde os céus, e perdoa os pecados do teu povo Israel; e torna a levá-los à terra que lhes tens dado e a seus pais.
²⁶ Quando os céus se fecharem, e não houver chuva, por terem pecado contra ti, e orarem neste lugar, e confessarem teu nome, e se converterem dos seus pecados, quando tu os afligires,
²⁷ Então, ouve tu desde os céus, e perdoa o pecado de teus servos, e do teu povo Israel, ensinando-lhes o bom caminho, em que andem; e dá chuva sobre a tua terra, que deste ao teu povo em herança.
²⁸ Quando houver fome na terra, quando houver peste, quando houver queima de seara, ou ferrugem, gafanhotos, ou lagarta, cercando-a algum dos seus inimigos nas terras das suas portas, ou quando houver qualquer praga, ou qualquer enfermidade,
²⁹ Toda a oração, e toda a súplica, que qualquer homem fizer, ou todo o teu povo Israel, conhecendo cada um a sua praga, e a sua dor, e estendendo as suas mãos para esta casa,
³⁰ Então, ouve tu desde os céus, do assento da tua habitação, e perdoa, e dá a cada um conforme a todos os seus caminhos, segundo conheces o seu coração (pois só tu conheces o coração dos filhos dos homens),
³¹ A fim de que te temam, para andarem nos teus caminhos, todos os dias que viverem na terra que deste a nossos pais.
³² Assim também ao estrangeiro, que não for do teu povo Israel, quando vier de terras remotas por amor do teu grande nome, e da tua poderosa mão, e do teu braço estendido, vindo eles e orando nesta casa;
³³ Então, ouve tu desde os céus, do assento da tua habitação, e faze conforme a tudo o que o estrangeiro te suplicar; a fim de que todos os povos da terra conheçam o teu nome, e te temam, como o teu povo Israel; e a fim de saberem que pelo teu nome é chamada esta casa que edifiquei.
³⁴ Quando o teu povo sair à guerra contra os seus inimigos, pelo caminho que os enviares, e orarem a ti para o lado desta cidade que escolheste, e desta casa, que edifiquei ao teu nome,
³⁵ Ouve, então, desde os céus a sua oração, e a sua súplica, e faze-lhes justiça.
³⁶ Quando pecarem contra ti (pois não há homem que não peque), e tu te indignares contra eles, e os entregares diante do inimigo, para que os que os cativarem os levem em cativeiro para alguma terra, remota ou vizinha,
³⁷ E na terra, para onde forem levados em cativeiro, caírem em si, e se converterem, e na terra do seu cativeiro, a ti suplicarem, dizendo: Pecamos, perversamente procedemos e impiamente agimos;
³⁸ E se converterem a ti com todo o seu coração e com toda a sua alma, na terra do seu cativeiro, a que os levaram presos, e orarem para o lado da sua terra, que deste a seus pais, e para esta cidade que escolheste, e para esta casa que edifiquei ao teu nome,
³⁹ Ouve, então, desde os céus, do assento da tua habitação, a sua oração e as suas súplicas, e executa o seu direito; e perdoa ao teu povo que houver pecado contra ti.
⁴⁰ Agora, pois, ó meu Deus, estejam os teus olhos abertos, e os teus ouvidos atentos à oração deste lugar.
⁴¹ Levanta-te, pois, agora, Senhor Deus, para o teu repouso, tu e a arca da tua fortaleza; os teus sacerdotes, ó Senhor Deus, sejam vestidos de salvação, e os teus santos se alegrem do bem.
⁴² Ó Senhor Deus, não faças virar o rosto do teu ungido; lembra-te das misericórdias de Davi teu servo.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde Salomão se colocou para fazer a sua oração perante toda a congregação?",
                        opcoes: [
                            { numero: 1, texto: "Sentado no seu trono", correta: false },
                            { numero: 2, texto: "Sobre uma base de bronze, no meio do pátio", correta: true },
                            { numero: 3, texto: "Dentro do Lugar Santíssimo", correta: false },
                            { numero: 4, texto: "No topo das muralhas", correta: false }
                        ],
                        explicacao: "2 Crônicas 6:13 - Porque Salomão tinha feito uma base de bronze... e pôs-se nela em pé, e ajoelhou-se...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Salomão pediu que Deus fizesse quando o povo pecasse e se voltasse para o Templo em oração?",
                        opcoes: [
                            { numero: 1, texto: "Que os castigasse ainda mais", correta: false },
                            { numero: 2, texto: "Que ouvisse dos céus e perdoasse o seu pecado", correta: true },
                            { numero: 3, texto: "Que enviasse um novo rei", correta: false },
                            { numero: 4, texto: "Que mudasse o Templo de lugar", correta: false }
                        ],
                        explicacao: "2 Crônicas 6:21 - Ouve, pois, as suplicas... ouve tu do lugar da tua habitação, dos céus; e, ouvindo, perdoa.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        7: {
            titulo: "O Fogo do Céu e a Promessa de Deus",
            texto: ` 1 E acabando Salomão de orar, desceu o fogo do céu, e consumiu o holocausto e os sacrifícios; e a glória do Senhor encheu a casa.
2 E os sacerdotes não podiam entrar na casa do Senhor, porque a glória do Senhor tinha enchido a casa do Senhor.
3 E todos os filhos de Israel vendo descer o fogo, e a glória do Senhor sobre a casa, encurvaram-se com o rosto em terra sobre o pavimento, e adoraram e louvaram ao Senhor, dizendo: Porque ele é bom, porque a sua benignidade dura para sempre.
4 E o rei e todo o povo ofereciam sacrifícios perante o Senhor.
5 E o rei Salomão ofereceu sacrifícios de bois, vinte e dois mil, e de ovelhas, cento e vinte mil; e o rei e todo o povo consagraram a casa de Deus.
6 E os sacerdotes, serviam em seus ofícios; como também os levitas com os instrumentos musicais do Senhor, que o rei Davi tinha feito, para louvarem ao Senhor, porque a sua benignidade dura para sempre, quando Davi o louvava pelo ministério deles; e os sacerdotes tocavam as trombetas diante deles, e todo o Israel estava em pé.
7 E Salomão santificou o meio do átrio, que estava diante da casa do Senhor; porquanto ali tinha ele oferecido os holocaustos e a gordura dos sacrifícios pacíficos; porque no altar de metal, que Salomão tinha feito, não podia caber o holocausto, e a oferta de alimentos, e a gordura.
8 E, assim, naquele mesmo tempo celebrou Salomão a festa por sete dias e todo o Israel com ele, uma grande congregação, desde a entrada de Hamate, até ao rio do Egito.
9 E no dia oitavo realizaram uma assembleia solene; porque sete dias celebraram a consagração do altar, e sete dias a festa.
10 E no dia vigésimo terceiro do sétimo mês, despediu o povo para as suas tendas, alegres e de bom ânimo, pelo bem que o Senhor tinha feito a Davi, e a Salomão, e a seu povo Israel.
11 Assim Salomão acabou a casa do Senhor, e a casa do rei, e tudo quanto Salomão intentou fazer na casa do Senhor e na sua casa prosperamente o efetuou.
12 E o Senhor apareceu de noite a Salomão, e disse-lhe: Ouvi a tua oração, e escolhi para mim este lugar para casa de sacrifício.
13 Se eu fechar os céus, e não houver chuva; ou se ordenar aos gafanhotos que consumam a terra; ou se enviar a peste entre o meu povo;
14 E se o meu povo, que se chama pelo meu nome, se humilhar, e orar, e buscar a minha face e se converter dos seus maus caminhos, então eu ouvirei dos céus, e perdoarei os seus pecados, e sararei a sua terra.
15 Agora estarão abertos os meus olhos e atentos os meus ouvidos à oração deste lugar.
16 Porque agora escolhi e santifiquei esta casa, para que o meu nome esteja nela perpetuamente; e nela estarão fixos os meus olhos e o meu coração todos os dias.
17 E, quanto a ti, se andares diante de mim, como andou Davi teu pai, e fizeres conforme a tudo o que te ordenei, e guardares os meus estatutos e os meus juízos,
18 Também confirmarei o trono do teu reino, conforme a aliança que fiz com Davi, teu pai, dizendo: Não te faltará sucessor que domine em Israel.
19 Porém se vós vos desviardes, e deixardes os meus estatutos, e os meus mandamentos, que vos tenho proposto, e fordes, e servirdes a outros deuses, e vos prostrardes a eles,
20 Então os arrancarei da minha terra que lhes dei, e lançarei da minha presença esta casa que consagrei ao meu nome, e farei com que seja por provérbio e motejo entre todos os povos.
21 E desta casa, que é tão exaltada, qualquer que passar por ela se espantará e dirá: Por que fez o Senhor assim com esta terra e com esta casa?
22 E dirão: Porque deixaram ao Senhor Deus de seus pais, que os tirou da terra do Egito, e se deram a outros deuses, e se prostraram a eles, e os serviram; por isso ele trouxe sobre eles todo este mal.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que aconteceu assim que Salomão acabou de orar?",
                        opcoes: [
                            { numero: 1, texto: "Houve um grande terremoto", correta: false },
                            { numero: 2, texto: "Desceu fogo do céu e consumiu o holocausto e os sacrifícios", correta: true },
                            { numero: 3, texto: "O povo começou a chorar", correta: false },
                            { numero: 4, texto: "As portas do Templo se fecharam sozinhas", correta: false }
                        ],
                        explicacao: "2 Crônicas 7:1 - E acabando Salomão de orar, desceu o fogo do céu, e consumiu o holocausto e os sacrifícios...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Complete a famosa promessa: 'E se o meu povo, que se chama pelo meu nome, se humilhar, e orar, e buscar a minha face e...'",
                        opcoes: [
                            { numero: 1, texto: "...e fizer grandes ofertas'", correta: false },
                            { numero: 2, texto: "...e se converter dos seus maus caminhos'", correta: true },
                            { numero: 3, texto: "...e construir mais templos'", correta: false },
                            { numero: 4, texto: "...e cantar louvores'", correta: false }
                        ],
                        explicacao: "2 Crônicas 7:14 - E se o meu povo... se converter dos seus maus caminhos, então eu ouvirei dos céus, e perdoarei os seus pecados, e sararei a sua terra.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        8: {
            titulo: "As Edificações de Salomão",
            texto: ` ¹ E sucedeu, ao fim de vinte anos, nos quais Salomão edificou a casa do Senhor, e a sua própria casa,
² Que Salomão edificou as cidades que Hirão lhe tinha dado; e fez habitar nelas os filhos de Israel.
³ Depois foi Salomão a Hamate-Zobá, e a tomou.
⁴ Também edificou a Tadmor no deserto, e todas as cidades de provisões, que edificou em Hamate.
⁵ Edificou também a alta Bete-Horom, e a baixa Bete-Horom; cidades fortes, com muros, portas e ferrolhos;
⁶ Como também a Baalate, e todas as cidades de provisões, que Salomão tinha, e todas as cidades dos carros e as cidades dos cavaleiros; e tudo quanto, conforme ao seu desejo, Salomão quis edificar em Jerusalém, e no Líbano, e em toda a terra do seu domínio.
⁷ Quanto a todo o povo, que tinha ficado dos heteus, amorreus, perizeus, heveus e jebuseus, que não eram de Israel,
⁸ Dos seus filhos, que ficaram depois deles na terra, os quais os filhos de Israel não destruíram, Salomão os fez tributários, até ao dia de hoje.
⁹ Porém, dos filhos de Israel, Salomão não fez servos para sua obra (mas eram homens de guerra, chefes dos seus capitães, e capitães dos seus carros e cavaleiros),
¹⁰ Destes, pois, eram os chefes dos oficiais que o rei Salomão tinha, duzentos e cinquenta, que presidiam sobre o povo.
¹¹ E Salomão fez subir a filha de Faraó da cidade de Davi para a casa que lhe tinha edificado; porque disse: Minha mulher não morará na casa de Davi, rei de Israel, porquanto santos são os lugares nos quais entrou a arca do Senhor.
¹² Então Salomão ofereceu holocaustos ao Senhor, sobre o altar do Senhor, que tinha edificado diante do pórtico,
¹³ E isto segundo a ordem de cada dia, fazendo ofertas conforme o mandamento de Moisés, nos sábados e nas luas novas, e nas solenidades, três vezes no ano; na festa dos pães ázimos, na festa das semanas, e na festa das tendas.
¹⁴ Também, conforme à ordem de Davi seu pai, designou as turmas dos sacerdotes para seus ministérios, como também as dos levitas acerca dos seus cargos, para louvarem e ministrarem diante dos sacerdotes, segundo o que estava ordenado para cada dia, e os porteiros pelas suas turmas a cada porta; porque assim tinha mandado Davi, o homem de Deus.
¹⁵ E não se desviaram do mandado do rei aos sacerdotes e levitas, em negócio nenhum, nem acerca dos tesouros.
¹⁶ Assim se preparou toda a obra de Salomão, desde o dia da fundação da casa do Senhor, até se acabar; e assim se concluiu a casa do Senhor.
¹⁷ Então foi Salomão a Eziom-Geber, e a Elote, à praia do mar, na terra de Edom.
¹⁸ E enviou-lhe Hirão, por meio de seus servos, navios, e servos práticos do mar, e foram com os servos de Salomão a Ofir, e tomaram de lá quatrocentos e cinquenta talentos de ouro; e os trouxeram ao rei Salomão.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quantas vezes por ano Salomão oferecia holocaustos sobre o altar do Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Todos os dias", correta: false },
                            { numero: 2, texto: "Três vezes por ano (nas festas solenes)", correta: true },
                            { numero: 3, texto: "Apenas uma vez no ano", correta: false },
                            { numero: 4, texto: "Uma vez por mês", correta: false }
                        ],
                        explicacao: "2 Crônicas 8:13 - ...oferecendo segundo o dever de cada dia... nas três festas solenes do ano...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        9: {
            titulo: "A Rainha de Sabá e a Glória Final",
            texto: `¹ E ouvindo a rainha de Sabá a fama de Salomão, veio a Jerusalém, para provar Salomão com questões difíceis, com um grande séquito, e com camelos carregados de especiarias; ouro em abundância e pedras preciosas; e foi a Salomão, e falou com ele de tudo o que tinha no seu coração.
² E Salomão lhe respondeu a todas as suas questões; e não houve nada que Salomão não lhe pudesse esclarecer.
³ Vendo, pois, a rainha de Sabá a sabedoria de Salomão, e a casa que edificara;
⁴ E as iguarias da sua mesa, o assentar dos seus servos, o estar dos seus criados, e as vestes deles; e os seus copeiros e as vestes deles; e a sua subida pela qual ele chegava à casa do Senhor, ela ficou como fora de si.
⁵ Então disse ao rei: Era verdade a palavra que ouvi na minha terra acerca dos teus feitos e da tua sabedoria.
⁶ Porém não cria naquelas palavras, até que vim, e meus olhos o viram, e eis que não me disseram a metade da grandeza da tua sabedoria; sobrepujaste a fama que ouvi.
⁷ Bem-aventurados os teus homens, e bem-aventurados estes teus servos, que estão sempre diante de ti, e ouvem a tua sabedoria!
⁸ Bendito seja o Senhor teu Deus, que se agradou de ti para te colocar no seu trono como rei para o Senhor teu Deus; porque teu Deus ama a Israel, para estabelecê-lo perpetuamente; por isso te constituiu rei sobre eles para fazeres juízo e justiça.
⁹ E deu ao rei cento e vinte talentos de ouro, e especiarias em grande abundância, e pedras preciosas; e nunca houve tais especiarias, quais a rainha de Sabá deu ao rei Salomão.
¹⁰ E também os servos de Hirão e os servos de Salomão, que de Ofir tinham trazido ouro, trouxeram madeira de algumins, e pedras preciosas.
¹¹ E, da madeira de algumins, o rei fez balaústres, para a casa do Senhor, e para a casa do rei, como também harpas e saltérios para os cantores, quais nunca dantes se viram na terra de Judá.
¹² E o rei Salomão deu à rainha de Sabá tudo quanto ela desejou, e tudo quanto lhe pediu, mais do que ela mesma trouxera ao rei. Assim voltou e foi para a sua terra, ela e os seus servos.
¹³ E o peso do ouro, que vinha em um ano a Salomão, era de seiscentos e sessenta e seis talentos de ouro,
¹⁴ Afora o que os negociantes e mercadores traziam; também todos os reis da Arábia, e os governadores da mesma terra traziam a Salomão ouro e prata.
¹⁵ Também fez o rei Salomão duzentos paveses de ouro batido; para cada pavês destinou seiscentos siclos de ouro batido.
¹⁶ Como também trezentos escudos de ouro batido; para cada escudo destinou trezentos siclos de ouro; e Salomão os pôs na casa do bosque do Líbano.
¹⁷ Fez mais o rei um grande trono de marfim, e o revestiu de ouro puro.
¹⁸ E o trono tinha seis degraus, e um estrado de ouro, que eram ligados ao trono, e encostos de ambos os lados no lugar do assento; e dois leões estavam junto aos encostos.
¹⁹ E doze leões estavam ali de ambos os lados, sobre os seis degraus; outro tal não se fez em nenhum reino.
²⁰ Também todas as taças do rei Salomão eram de ouro, e todos os vasos da casa do bosque do Líbano, de ouro puro; a prata reputava-se por nada nos dias de Salomão.
²¹ Porque, indo os navios do rei com os servos de Hirão, a Társis, voltavam os navios de Társis, uma vez em três anos, e traziam ouro e prata, marfim, macacos e pavões.
²² Assim excedeu o rei Salomão a todos os reis da terra, em riquezas e sabedoria.
²³ E todos os reis da terra buscavam a presença de Salomão, para ouvirem a sabedoria que Deus tinha posto no seu coração.
²⁴ E cada um trazia o seu presente, vasos de prata, e vasos de ouro, e roupas, armaduras, especiarias, cavalos e mulas; assim faziam de ano em ano.
²⁵ Teve também Salomão quatro mil estrebarias para os cavalos de seus carros, e doze mil cavaleiros; e colocou-os nas cidades dos carros, e junto ao rei em Jerusalém.
²⁶ E dominava sobre todos os reis, desde o rio até à terra dos filisteus, e até ao termo do Egito.
²⁷ Também o rei fez que houvesse prata em Jerusalém como pedras, e cedros em tanta abundância como os sicômoros que há pelas campinas.
²⁸ E do Egito e de todas aquelas terras traziam cavalos a Salomão.
²⁹ Os demais atos de Salomão, tanto os primeiros como os últimos, porventura não estão escritos no livro das crônicas de Natã, o profeta, e na profecia de Aías, o silonita, e nas visões de Ido, o vidente, acerca de Jeroboão, filho de Nebate?
³⁰ E reinou Salomão em Jerusalém quarenta anos sobre todo o Israel.
³¹ E dormiu Salomão com seus pais, e o sepultaram na cidade de Davi seu pai; e Roboão, seu filho, reinou em seu lugar.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que a Rainha de Sabá disse após ver a sabedoria e a prosperidade de Salomão?",
                        opcoes: [
                            { numero: 1, texto: "Que ela era mais sábia que ele", correta: false },
                            { numero: 2, texto: "Que não lhe contaram nem a metade da grandeza da sua sabedoria", correta: true },
                            { numero: 3, texto: "Que Israel era um povo pobre", correta: false },
                            { numero: 4, texto: "Que o Templo era pequeno", correta: false }
                        ],
                        explicacao: "2 Crônicas 9:6 - ...e eis que não me contaram a metade da grandeza da tua sabedoria; sobrepujaste a fama que ouvi.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quanto tempo reinou Salomão em Jerusalém sobre todo o Israel?",
                        opcoes: [
                            { numero: 1, texto: "Vinte anos", correta: false },
                            { numero: 2, texto: "Sessenta anos", correta: false },
                            { numero: 3, texto: "Quarenta anos", correta: true },
                            { numero: 4, texto: "Sete anos", correta: false }
                        ],
                        explicacao: "2 Crônicas 9:30 - E reinou Salomão em Jerusalém quarenta anos sobre todo o Israel.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        10: {
            titulo: "Roboão e a Divisão do Reino",
            texto: ` ¹ E foi Roboão a Siquém, porque todo o Israel tinha vindo a Siquém para fazê-lo rei.
² Sucedeu que, ouvindo-o Jeroboão, filho de Nebate (o qual estava então no Egito para onde fugira da presença do rei Salomão), voltou do Egito,
³ Porque enviaram a ele, e o chamaram; e vieram, Jeroboão e todo o Israel, e falaram a Roboão dizendo:
⁴ Teu pai fez duro o nosso jugo; agora, pois, alivia tu a dura servidão de teu pai, e o pesado jugo que nos impôs, e nós te serviremos.
⁵ E ele lhes disse: Daqui a três dias voltai a mim. Então o povo se foi.
⁶ E tomou Roboão conselho com os anciãos, que estiveram perante Salomão seu pai, enquanto viveu, dizendo: Como aconselhais vós que se responda a este povo?
⁷ E eles lhe falaram, dizendo: Se te fizeres benigno e afável para com este povo, e lhes falares boas palavras, todos os dias serão teus servos.
⁸ Porém ele deixou o conselho que os anciãos lhe deram; e tomou conselho com os jovens, que haviam crescido com ele, e estavam perante ele.
⁹ E disse-lhes: Que aconselhais vós, que respondamos a este povo, que me falou, dizendo: Alivia o jugo que teu pai nos impôs?
¹⁰ E os jovens, que com ele haviam crescido, lhe falaram, dizendo: Assim dirás a este povo, que te falou, dizendo: Teu pai agravou o nosso jugo, tu porém alivia-nos; assim, pois, lhe falarás: O meu dedo mínimo é mais grosso do que os lombos de meu pai.
¹¹ Assim que, se meu pai vos carregou de um jugo pesado, eu ainda aumentarei o vosso jugo; meu pai vos castigou com açoites, porém eu vos castigarei com escorpiões.
¹² Veio, pois, Jeroboão, e todo o povo, ao terceiro dia, a Roboão, como o rei havia ordenado, dizendo: Voltai a mim ao terceiro dia.
¹³ E o rei lhes respondeu asperamente; porque o rei Roboão deixara o conselho dos anciãos.
¹⁴ E falou-lhes conforme o conselho dos jovens, dizendo: Meu pai agravou o vosso jugo, porém eu o aumentarei mais; meu pai vos castigou com açoites, porém eu vos castigarei com escorpiões.
¹⁵ Assim o rei não deu ouvidos ao povo, porque esta mudança vinha de Deus, para que o Senhor confirmasse a sua palavra, a qual falara pelo ministério de Aías, o silonita, a Jeroboão, filho de Nebate.
¹⁶ Vendo, pois, todo o Israel, que o rei não lhe dava ouvidos, tornou-lhe o povo a responder, dizendo: Que parte temos nós com Davi? Já não temos herança no filho de Jessé. Cada um à sua tenda, ó Israel! Olha agora pela tua casa, ó Davi. Assim todo o Israel se foi para as suas tendas.
¹⁷ Porém, quanto aos filhos de Israel, que habitavam nas cidades de Judá, sobre eles reinou Roboão.
¹⁸ Então o rei Roboão enviou a Hadorão, que tinha cargo dos tributos; porém os filhos de Israel o apedrejaram, e ele morreu. Então o rei Roboão se esforçou para subir ao seu carro, e fugiu para Jerusalém.
¹⁹ Assim se rebelaram os israelitas contra a casa de Davi, até ao dia de hoje.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual conselho Roboão seguiu: o dos anciãos ou o dos jovens que cresceram com ele?",
                        opcoes: [
                            { numero: 1, texto: "O conselho dos anciãos", correta: false },
                            { numero: 2, texto: "O conselho dos jovens", correta: true },
                            { numero: 3, texto: "Não seguiu conselho nenhum", correta: false },
                            { numero: 4, texto: "O conselho de sua mãe", correta: false }
                        ],
                        explicacao: "2 Crônicas 10:8 - Porém ele deixou o conselho que os anciãos lhe deram, e aconselhou-se com os jovens que haviam crescido com ele...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como Roboão respondeu ao povo que pedia alívio na carga de trabalho?",
                        opcoes: [
                            { numero: 1, texto: "Com bondade e mansidão", correta: false },
                            { numero: 2, texto: "Com dureza, dizendo que seu dedo mínimo seria mais grosso que os lombos de seu pai", correta: true },
                            { numero: 3, texto: "Dando-lhes liberdade total", correta: false },
                            { numero: 4, texto: "Prometendo baixar os impostos", correta: false }
                        ],
                        explicacao: "2 Crônicas 10:10 - ...Meu dedo mínimo é mais grosso do que os lombos de meu pai.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/segundo_cronicas.js (Parte 3: Capítulos 11-15)

        11: {
            titulo: "O Fortalecimento de Judá",
            texto: ` ¹ Vindo, pois, Roboão a Jerusalém, reuniu, da casa de Judá e Benjamim, cento e oitenta mil escolhidos, destros na guerra, para pelejarem contra Israel, e para restituírem o reino a Roboão.
² Porém a palavra do Senhor veio a Semaías, homem de Deus, dizendo:
³ Fala a Roboão, filho de Salomão, rei de Judá, e a todo o Israel, em Judá e Benjamim, dizendo:
⁴ Assim diz o Senhor: Não subireis, nem pelejareis contra os vossos irmãos; volte cada um à sua casa; porque de mim proveio isto. E ouviram as palavras do Senhor, e desistiram de ir contra Jeroboão.
⁵ E Roboão habitou em Jerusalém; e para defesa, edificou cidades em Judá.
⁶ Edificou, pois, a Belém, a Etã, e a Tecoa,
⁷ E a Bete-Zur, a Socó, a Adulão,
⁸ E a Gate, a Maressa, a Zife,
⁹ E a Adoraim, a Laquis, e a Azeca,
¹⁰ E a Zorá, a Aijalom, e a Hebrom, que estavam em Judá e em Benjamim; cidades fortes.
¹¹ E fortificou estas fortalezas e pôs nelas capitães, e armazéns de víveres, de azeite, e de vinho.
¹² E pôs em cada cidade paveses e lanças; fortificou-as grandemente; e Judá e Benjamim pertenceram-lhe.
¹³ Também os sacerdotes e os levitas, que havia em todo o Israel, se reuniram a ele de todos os seus termos.
¹⁴ Porque os levitas deixaram os seus arrabaldes, e a sua possessão, e vieram a Judá e a Jerusalém, porque Jeroboão e seus filhos os lançaram fora para que não ministrassem ao Senhor.
¹⁵ E ele constituiu para si sacerdotes, para os altos, para os demônios, e para os bezerros, que fizera.
¹⁶ Depois desses também, de todas as tribos de Israel, os que deram o seu coração a buscarem ao Senhor Deus de Israel, vieram a Jerusalém, para oferecerem sacrifícios ao Senhor Deus de seus pais.
¹⁷ Assim fortaleceram o reino de Judá e corroboraram a Roboão, filho de Salomão, por três anos; porque três anos andaram no caminho de Davi e Salomão.
¹⁸ E Roboão tomou para si, por mulher, a Maalate, filha de Jerimote, filho de Davi; e Abiail, filha de Eliabe, filho de Jessé.
¹⁹ A qual lhe deu filhos: Jeús, Samarias e Zaã.
²⁰ E depois dela tomou a Maaca, filha de Absalão; esta lhe deu Abias, Atai, Ziza e Selomite.
²¹ E amava Roboão mais a Maaca, filha de Absalão, do que a todas as suas outras mulheres e concubinas; porque ele tinha tomado dezoito mulheres, e sessenta concubinas; e gerou vinte e oito filhos, e sessenta filhas.
²² E Roboão designou Abias, filho de Maaca, para ser chefe e líder entre os seus irmãos, porque queria fazê-lo rei.
²³ E usou de prudência, e de todos os seus filhos, alguns espalhou por todas as terras de Judá, e Benjamim, por todas as cidades fortes; e deu-lhes víveres em abundância; e lhes procurou muitas mulheres.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que os sacerdotes e levitas de todo o Israel deixaram suas terras e foram para Judá e Jerusalém?",
                        opcoes: [
                            { numero: 1, texto: "Porque Jeroboão os expulsou e estabeleceu seus próprios sacerdotes para os ídolos", correta: true },
                            { numero: 2, texto: "Por causa de uma grande seca no norte", correta: false },
                            { numero: 3, texto: "Para visitar parentes", correta: false },
                            { numero: 4, texto: "Porque Jerusalém era mais rica", correta: false }
                        ],
                        explicacao: "2 Crônicas 11:14 - Porque os levitas deixaram os seus arredores... pois Jeroboão e seus filhos os lançaram fora...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        12: {
            titulo: "A Invasão de Sisaque",
            texto: `¹ Sucedeu que, havendo Roboão confirmado o reino, e havendo-se fortalecido, deixou a lei do Senhor, e com ele todo o Israel.
² E sucedeu que, no quinto ano do rei Roboão, Sisaque, rei do Egito, subiu contra Jerusalém (porque tinham transgredido contra o Senhor)
³ Com mil e duzentos carros e com sessenta mil cavaleiros; e era inumerável o povo que vinha com ele do Egito, de líbios, suquitas e etíopes.
⁴ E tomou as cidades fortificadas, que Judá tinha; e chegou até Jerusalém.
⁵ Então veio Semaías, o profeta, a Roboão e aos príncipes de Judá que se ajuntaram em Jerusalém por causa de Sisaque, e disse-lhes: Assim diz o Senhor: Vós me deixastes a mim, por isso também eu vos deixei na mão de Sisaque.
⁶ Então se humilharam os príncipes de Israel, e o rei, e disseram: O Senhor é justo.
⁷ Vendo, pois, o Senhor que se humilhavam, veio a palavra do Senhor a Semaías, dizendo: Humilharam-se, não os destruirei; antes em breve lhes darei algum socorro, para que o meu furor não se derrame sobre Jerusalém, por mão de Sisaque.
⁸ Porém serão seus servos; para que conheçam a diferença da minha servidão e da servidão dos reinos da terra.
⁹ Subiu, pois, Sisaque, rei do Egito, contra Jerusalém, e tomou os tesouros da casa do Senhor, e os tesouros da casa do rei; levou tudo; também tomou os escudos de ouro, que Salomão fizera.
¹⁰ E fez o rei Roboão em lugar deles escudos de cobre, e os entregou na mão dos chefes da guarda, que guardavam a porta da casa do rei.
¹¹ E todas as vezes que o rei entrava na casa do Senhor, vinham os da guarda, e os levavam; depois tornavam a pô-los na câmara da guarda.
¹² E humilhando-se ele, a ira do Senhor se desviou dele, para que não o destruísse de todo; porque em Judá ainda havia boas coisas.
¹³ Fortificou-se, pois, o rei Roboão em Jerusalém, e reinou; porque Roboão era da idade de quarenta e um anos, quando começou a reinar; e reinou dezessete anos em Jerusalém, a cidade que o Senhor escolheu, dentre todas as tribos de Israel, para pôr ali o seu nome; e era o nome de sua mãe Naamá, amonita.
¹⁴ E fez o que era mau; porquanto não preparou o seu coração para buscar ao Senhor.
¹⁵ Os atos, pois, de Roboão, assim os primeiros, como os últimos, porventura não estão escritos nos livros de Semaías, o profeta, e de Ido, o vidente, na relação das genealogias? E houve guerras entre Roboão e Jeroboão em todos os seus dias.
¹⁶ E Roboão dormiu com seus pais, e foi sepultado na cidade de Davi; e Abias, seu filho, reinou em seu lugar.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem foi o rei do Egito que subiu contra Jerusalém porque Roboão transgrediu contra o Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Faraó Neco", correta: false },
                            { numero: 2, texto: "Sisaque", correta: true },
                            { numero: 3, texto: "Tutancâmon", correta: false },
                            { numero: 4, texto: "Ramsés", correta: false }
                        ],
                        explicacao: "2 Crônicas 12:2 - E sucedeu que... subiu Sisaque, rei do Egito, contra Jerusalém, porque tinham transgredido contra o Senhor.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o exército egípcio levou do Templo e da casa do rei?",
                        opcoes: [
                            { numero: 1, texto: "Apenas as roupas do rei", correta: false },
                            { numero: 2, texto: "Os tesouros e os escudos de ouro que Salomão fizera", correta: true },
                            { numero: 3, texto: "A Arca da Aliança", correta: false },
                            { numero: 4, texto: "Nada, pois Deus os impediu", correta: false }
                        ],
                        explicacao: "2 Crônicas 12:9 - ...levou os tesouros da casa do Senhor... também levou os escudos de ouro que Salomão fizera.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        13: {
            titulo: "O Reinado de Abias",
            texto: ` ¹ No ano décimo oitavo do rei Jeroboão, Abias começou a reinar sobre Judá.
² Três anos reinou em Jerusalém; e era o nome de sua mãe Micaía, filha de Uriel de Gibeá; e houve guerra entre Abias e Jeroboão.
³ E Abias ordenou a peleja com um exército de valentes guerreiros, quatrocentos mil homens escolhidos; e Jeroboão dispôs contra ele a batalha com oitocentos mil homens escolhidos, todos homens corajosos.
⁴ E pôs-se Abias em pé em cima do monte de Zemaraim, que está na montanha de Efraim, e disse: Ouvi-me, Jeroboão e todo o Israel:
⁵ Porventura não vos convém saber que o Senhor Deus de Israel deu para sempre a Davi a soberania sobre Israel, a ele e a seus filhos, por uma aliança de sal?
⁶ Contudo levantou-se Jeroboão, filho de Nebate, servo de Salomão, filho de Davi, e se rebelou contra seu senhor.
⁷ E ajuntaram-se a ele homens vadios, filhos de Belial; e fortificaram-se contra Roboão, filho de Salomão, sendo Roboão ainda jovem, e terno de coração, e não lhes podia resistir.
⁸ E agora julgais que podeis resistir ao reino do Senhor, que está na mão dos filhos de Davi, visto que sois uma grande multidão, e tendes convosco os bezerros de ouro que Jeroboão vos fez para deuses.
⁹ Não lançastes vós fora os sacerdotes do Senhor, os filhos de Arão, e os levitas, e não fizestes para vós sacerdotes, como os povos das outras terras? Qualquer que vem a consagrar-se com um novilho e sete carneiros logo se faz sacerdote daqueles que não são deuses.
¹⁰ Porém, quanto a nós, o Senhor é nosso Deus, e nunca o deixamos; e os sacerdotes que ministram ao Senhor são filhos de Arão, e os levitas se ocupam na sua obra.
¹¹ E queimam ao Senhor cada manhã e cada tarde holocaustos, incenso aromático, com os pães da proposição sobre a mesa pura, e o candelabro de ouro, e as suas lâmpadas para se acenderem cada tarde, porque nós temos cuidado do serviço do Senhor nosso Deus; porém vós o deixastes.
¹² E eis que Deus está conosco, à nossa frente, como também os seus sacerdotes, tocando com as trombetas, para dar alarme contra vós. Ó filhos de Israel, não pelejeis contra o Senhor Deus de vossos pais; porque não prosperareis.
¹³ Mas Jeroboão armou uma emboscada, para dar sobre eles pela retaguarda; de maneira que estavam em frente de Judá e a emboscada por detrás deles.
¹⁴ Então Judá olhou, e eis que tinham que pelejar por diante e por detrás; então clamaram ao Senhor; e os sacerdotes tocaram as trombetas.
¹⁵ E os homens de Judá gritaram; e sucedeu que, gritando os homens de Judá, Deus feriu a Jeroboão e a todo o Israel diante de Abias e de Judá.
¹⁶ E os filhos de Israel fugiram de diante de Judá; e Deus os entregou na sua mão.
¹⁷ De maneira que Abias e o seu povo fizeram grande matança entre eles; porque caíram feridos de Israel quinhentos mil homens escolhidos.
¹⁸ E foram humilhados os filhos de Israel naquele tempo; e os filhos de Judá prevaleceram, porque confiaram no Senhor Deus de seus pais.
¹⁹ E Abias perseguiu Jeroboão; e tomou-lhe cidades: a Betel com os lugares da sua jurisdição, e a Jesana com os lugares da sua jurisdição, e a Efrom com os lugares da sua jurisdição.
²⁰ E Jeroboão não recobrou mais o seu poder nos dias de Abias; porém o Senhor o feriu, e morreu.
²¹ Abias, porém, se fortificou, e tomou para si catorze mulheres, e gerou vinte e dois filhos e dezesseis filhas.
²² Os demais atos de Abias, tanto os seus caminhos como as suas palavras, estão escritos na história do profeta Ido.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual foi o argumento de Abias para dizer que o Reino de Judá venceria o de Jeroboão?",
                        opcoes: [
                            { numero: 1, texto: "Que eles tinham mais soldados", correta: false },
                            { numero: 2, texto: "Que os sacerdotes e o Senhor estavam com Judá, enquanto Israel seguia bezerros de ouro", correta: true },
                            { numero: 3, texto: "Que eles eram mais altos", correta: false },
                            { numero: 4, texto: "Que o muro de Jerusalém era impenetrável", correta: false }
                        ],
                        explicacao: "2 Crônicas 13:10-12 - Mas, quanto a nós, o Senhor é nosso Deus... e eis que Deus está conosco, à nossa frente...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        14: {
            titulo: "O Reinado de Asa e a Vitória contra os Etíopes",
            texto: ` ¹ E Abias dormiu com seus pais, e o sepultaram na cidade de Davi, e Asa, seu filho, reinou em seu lugar; nos seus dias esteve a terra em paz dez anos.
² E Asa fez o que era bom e reto aos olhos do Senhor seu Deus.
³ Porque tirou os altares dos deuses estranhos, e os altos; e quebrou as imagens, e cortou os bosques.
⁴ E mandou a Judá que buscasse ao Senhor Deus de seus pais, e que observasse a lei e o mandamento.
⁵ Também tirou de todas as cidades de Judá os altos e as imagens; e sob ele o reino esteve em paz.
⁶ E edificou cidades fortificadas em Judá; porque a terra estava quieta, e não havia guerra contra ele naqueles anos; porquanto o Senhor lhe dera repouso.
⁷ Disse, pois, a Judá: Edifiquemos estas cidades, e cerquemo-las de muros e torres, portas e ferrolhos, enquanto a terra ainda é nossa, pois buscamos ao Senhor nosso Deus; buscamo-lo, e deu-nos repouso de todos os lados. Edificaram, pois, e prosperaram.
⁸ Tinha Asa um exército de trezentos mil de Judá, que traziam pavês e lança; e duzentos e oitenta mil de Benjamim, que traziam escudo e atiravam com arco; todos estes eram homens valentes.
⁹ E Zerá, o etíope, saiu contra eles, com um exército de um milhão e com trezentos carros, e chegou até Maressa.
¹⁰ Então Asa saiu contra ele; e ordenaram a batalha no vale de Zefatá, junto a Maressa.
¹¹ E Asa clamou ao Senhor seu Deus, e disse: Senhor, nada para ti é ajudar, quer o poderoso quer o de nenhuma força; ajuda-nos, pois, Senhor nosso Deus, porque em ti confiamos, e no teu nome viemos contra esta multidão. Senhor, tu és nosso Deus, não prevaleça contra ti o homem.
¹² E o Senhor feriu os etíopes diante de Asa e diante de Judá; e os etíopes fugiram.
¹³ E Asa, e o povo que estava com ele os perseguiram até Gerar, e caíram tantos dos etíopes, que já não havia neles resistência alguma; porque foram destruídos diante do Senhor, e diante do seu exército; e levaram dali mui grande despojo.
¹⁴ E feriram todas as cidades nos arredores de Gerar, porque o terror do Senhor veio sobre elas; e saquearam todas as cidades, porque havia nelas muita presa.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era o tamanho do exército de Zerá, o etíope, que veio contra o rei Asa?",
                        opcoes: [
                            { numero: 1, texto: "Dez mil homens", correta: false },
                            { numero: 2, texto: "Cinquenta mil homens", correta: false },
                            { numero: 3, texto: "Um milhão de homens e trezentos carros", correta: true },
                            { numero: 4, texto: "Cem mil homens", correta: false }
                        ],
                        explicacao: "2 Crônicas 14:9 - E Zerá, o etíope, saiu contra eles, com um exército de um milhão de homens, e trezentos carros...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Asa fez com os altares estranhos e as imagens que havia em Judá?",
                        opcoes: [
                            { numero: 1, texto: "Aumentou o tamanho deles", correta: false },
                            { numero: 2, texto: "Tirou-os e quebrou as estátuas", correta: true },
                            { numero: 3, texto: "Escondeu-os no palácio", correta: false },
                            { numero: 4, texto: "Não fez nada", correta: false }
                        ],
                        explicacao: "2 Crônicas 14:3 - Porque tirou os altares dos deuses estranhos... e quebrou as estátuas...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        15: {
            titulo: "A Reforma de Asa",
            texto: ` ¹ Então veio o Espírito de Deus sobre Azarias, filho de Odede.
² E saiu ao encontro de Asa, e disse-lhe: Ouvi-me, Asa, e todo o Judá e Benjamim: O Senhor está convosco, enquanto vós estais com ele, e, se o buscardes, o achareis; porém, se o deixardes, vos deixará.
³ E Israel esteve por muitos dias sem o verdadeiro Deus, e sem sacerdote que o ensinasse, e sem lei.
⁴ Mas quando na sua angústia voltaram para o Senhor Deus de Israel, e o buscaram, o acharam.
⁵ E naqueles tempos não havia paz, nem para o que saía, nem para o que entrava, mas muitas perturbações sobre todos os habitantes daquelas terras.
⁶ Porque nação contra nação e cidade contra cidade se despedaçavam; porque Deus os perturbara com toda a angústia.
⁷ Mas esforçai-vos, e não desfaleçam as vossas mãos; porque a vossa obra tem uma recompensa.
⁸ Ouvindo, pois, Asa estas palavras, e a profecia do profeta Odede, cobrou ânimo e tirou as abominações de toda a terra, de Judá e de Benjamim, como também das cidades que tomara nas montanhas de Efraim, e renovou o altar do Senhor, que estava diante do pórtico do Senhor.
⁹ E reuniu a todo o Judá, e Benjamim, e com eles os estrangeiros de Efraim e Manassés, e de Simeão; porque muitos de Israel tinham passado a ele, vendo que o Senhor seu Deus era com ele.
¹⁰ E ajuntaram-se em Jerusalém no terceiro mês; no ano décimo quinto do reinado de Asa.
¹¹ E no mesmo dia ofereceram em sacrifício ao Senhor, do despojo que trouxeram, setecentos bois e sete mil ovelhas.
¹² E entraram na aliança para buscarem o Senhor Deus de seus pais, com todo o seu coração, e com toda a sua alma;
¹³ E de que todo aquele que não buscasse ao Senhor Deus de Israel, morresse; assim o menor como o maior, tanto o homem como a mulher.
¹⁴ E juraram ao Senhor, em alta voz, com júbilo e com trombetas e cornetas.
¹⁵ E todo o Judá se alegrou deste juramento; porque de todo o seu coração juraram, e de toda a sua vontade o buscaram, e o acharam; e o Senhor lhes deu repouso ao redor.
¹⁶ E também a Maaca, sua mãe, o rei Asa depôs, para que não fosse mais rainha, porquanto fizera um horrível ídolo, a Aserá; e Asa destruiu o seu horrível ídolo, e o despedaçou, e o queimou junto ao ribeiro de Cedrom.
¹⁷ Os altos, porém, não foram tirados de Israel; contudo o coração de Asa foi perfeito todos os seus dias.
¹⁸ E trouxe, à casa de Deus, as coisas consagradas por seu pai, e as coisas que ele mesmo tinha consagrado: prata, ouro e vasos.
¹⁹ E não houve guerra até ao ano trigésimo quinto do reinado de Asa.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Asa fez com sua mãe (ou avó) Maaca por ela ter feito um ídolo abominável?",
                        opcoes: [
                            { numero: 1, texto: "Deu-lhe mais poder", correta: false },
                            { numero: 2, texto: "Expulsou-a do país", correta: false },
                            { numero: 3, texto: "Depôs-a de ser rainha e destruiu o seu ídolo", correta: true },
                            { numero: 4, texto: "Ignorou o que ela fez", correta: false }
                        ],
                        explicacao: "2 Crônicas 15:16 - E também a Maaca... o rei Asa depôs de ser rainha, porquanto fizera um abominável ídolo...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual foi a profecia de Azarias que motivou Asa a renovar a aliança com Deus?",
                        opcoes: [
                            { numero: 1, texto: "O Senhor está convosco, enquanto vós estais com ele", correta: true },
                            { numero: 2, texto: "Judá será destruída amanhã", correta: false },
                            { numero: 3, texto: "Não façam nenhuma reforma", correta: false },
                            { numero: 4, texto: "Ouro é mais importante que fé", correta: false }
                        ],
                        explicacao: "2 Crônicas 15:2 - ...O Senhor está convosco, enquanto vós estais com ele, e, se o buscardes, o achareis...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/segundo_cronicas.js (Parte 4: Capítulos 16-20)

        16: {
            titulo: "O Erro de Asa e o seu Fim",
            texto: `¹ No trigésimo sexto ano do reinado de Asa, Baasa, rei de Israel, subiu contra Judá e edificou a Ramá, para não deixar ninguém sair, nem chegar a Asa, rei de Judá.
² Então Asa tirou a prata e o ouro dos tesouros da casa do Senhor, e da casa do rei; e enviou servos a Ben-Hadade, rei da Síria, que habitava em Damasco, dizendo:
³ Acordo há entre mim e ti, como houve entre meu pai e o teu; eis que te envio prata e ouro; vai, pois, e anula o teu acordo com Baasa, rei de Israel, para que se retire de sobre mim.
⁴ E Ben-Hadade deu ouvidos ao rei Asa, e enviou os capitães dos seus exércitos, contra as cidades de Israel, e eles feriram a Ijom, a Dã, a Abel-Maim, e a todas as cidades-armazéns de Naftali.
⁵ E sucedeu que, ouvindo-o Baasa, deixou de edificar a Ramá, e não continuou a sua obra.
⁶ Então o rei Asa tomou a todo o Judá, e levaram as pedras de Ramá, e a sua madeira, com que Baasa edificara; e com elas edificou a Geba e a Mizpá.
⁷ Naquele mesmo tempo veio Hanani, o vidente, a Asa, rei de Judá, e disse-lhe: Porquanto confiaste no rei da Síria, e não confiaste no Senhor teu Deus, por isso o exército do rei da Síria escapou da tua mão.
⁸ Porventura não foram os etíopes e os líbios um grande exército, com muitíssimos carros e cavaleiros? Confiando tu, porém, no Senhor, ele os entregou nas tuas mãos.
⁹ Porque, quanto ao Senhor, seus olhos passam por toda a terra, para mostrar-se forte para com aqueles cujo coração é perfeito para com ele; nisto, pois, procedeste loucamente porque desde agora haverá guerras contra ti.
¹⁰ Porém Asa se indignou contra o vidente, e lançou-o na casa do tronco; porque estava enfurecido contra ele, por causa disto; também Asa, no mesmo tempo, oprimiu a alguns do povo.
¹¹ E eis que os atos de Asa, tanto os primeiros, como os últimos, estão escritos no livro dos reis de Judá e Israel.
¹² E, no ano trinta e nove do seu reinado, Asa caiu doente de seus pés, a sua doença era em extremo grave; contudo, na sua enfermidade, não buscou ao Senhor, mas antes os médicos.
¹³ E Asa dormiu com seus pais; e morreu no ano quarenta e um do seu reinado.
¹⁴ E o sepultaram no seu sepulcro, que tinha cavado para si na cidade de Davi, havendo-o deitado na cama, que se enchera de perfumes e especiarias preparadas segundo a arte dos perfumistas; e, destas coisas fizeram-lhe uma grande queima.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "A quem Asa recorreu para pedir ajuda contra Baasa, rei de Israel, em vez de confiar no Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Ao rei do Egito", correta: false },
                            { numero: 2, texto: "A Ben-Hadade, rei da Síria", correta: true },
                            { numero: 3, texto: "Aos filisteus", correta: false },
                            { numero: 4, texto: "Ao profeta Hanani", correta: false }
                        ],
                        explicacao: "2 Crônicas 16:2 - Então Asa tirou a prata e o ouro... e enviou a Ben-Hadade, rei da Síria...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual doença Asa teve nos seus pés no fim da sua vida, na qual ele buscou os médicos e não ao Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Lepra", correta: false },
                            { numero: 2, texto: "Paralisia", correta: false },
                            { numero: 3, texto: "Uma enfermidade muito grave", correta: true },
                            { numero: 4, texto: "Cegueira", correta: false }
                        ],
                        explicacao: "2 Crônicas 16:12 - E caiu Asa doente de seus pés... contudo, na sua enfermidade não buscou ao Senhor, mas aos médicos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        17: {
            titulo: "O Bom Reinado de Josafá",
            texto: ` ¹ E Jeosafá, seu filho, reinou em seu lugar; e fortificou-se contra Israel.
² E pôs soldados em todas as cidades fortificadas de Judá, e estabeleceu guarnições na terra de Judá, como também nas cidades de Efraim, que Asa seu pai tinha tomado.
³ E o Senhor era com Jeosafá; porque andou nos primeiros caminhos de Davi seu pai, e não buscou a Baalins.
⁴ Antes buscou ao Deus de seu pai, andou nos seus mandamentos, e não segundo as obras de Israel.
⁵ E o Senhor confirmou o reino na sua mão, e todo o Judá deu presentes a Jeosafá, o qual teve riquezas e glória em abundância.
⁶ E exaltou-se o seu coração nos caminhos do Senhor e, ainda mais, tirou os altos e os bosques de Judá.
⁷ E no terceiro ano do seu reinado enviou ele os seus príncipes, a Bene-Hail, a Obadias, a Zacarias, a Natanael e a Micaías, para ensinarem nas cidades de Judá.
⁸ E com eles os levitas, Semaías, Netanias, Zebadias, Asael, Semiramote, Jônatas, Adonias, Tobias e Tobe-Adonias e, com estes levitas, os sacerdotes, Elisama e Jeorão.
⁹ E ensinaram em Judá, levando consigo o livro da lei do Senhor; e foram a todas as cidades de Judá, ensinando entre o povo.
¹⁰ E veio o temor do Senhor sobre todos os reinos das terras, que estavam ao redor de Judá, e não guerrearam contra Jeosafá.
¹¹ E alguns dentre os filisteus traziam presentes a Jeosafá, e prata como tributo; também os árabes lhe trouxeram gado miúdo; sete mil e setecentos carneiros, e sete mil e setecentos bodes.
¹² Cresceu, pois, Jeosafá grandemente em extremo e edificou fortalezas e cidades de provisões em Judá.
¹³ E teve muitas obras nas cidades de Judá, e homens de guerra e valentes, em Jerusalém.
¹⁴ E este é o número deles segundo as suas casas paternas; em Judá eram capitães dos milhares: o chefe Adna, e com ele trezentos mil homens valentes;
¹⁵ E depois dele o capitão Joanã, e com ele duzentos e oitenta mil;
¹⁶ E depois Amasias, filho de Zicri, que voluntariamente se entregou ao Senhor, e com ele duzentos mil homens valentes;
¹⁷ E de Benjamim, Eliada, homem valente, e com ele duzentos mil, armados de arco e de escudo;
¹⁸ E depois dele Jozabade, e com ele cento e oitenta mil, armados para a guerra.
¹⁹ Estes estavam no serviço do rei; afora os que o rei tinha posto nas cidades fortes por todo o Judá.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Josafá enviou por todas as cidades de Judá para ensinar o povo?",
                        opcoes: [
                            { numero: 1, texto: "Príncipes, levitas e sacerdotes com o Livro da Lei do Senhor", correta: true },
                            { numero: 2, texto: "Cobradores de impostos", correta: false },
                            { numero: 3, texto: "Apenas soldados", correta: false },
                            { numero: 4, texto: "Estátuas de bronze", correta: false }
                        ],
                        explicacao: "2 Crônicas 17:9 - E ensinaram em Judá, levando consigo o livro da lei do Senhor...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        18: {
            titulo: "Josafá e Acabe",
            texto: `¹ Tinha, pois, Jeosafá riquezas e glória em abundância, e aparentou-se com Acabe.
² E depois de alguns anos desceu ele para Acabe em Samaria; e Acabe matou ovelhas e bois em abundância, para ele e para o povo que vinha com ele; e o persuadiu a subir com ele a Ramote de Gileade.
³ Porque Acabe, rei de Israel, disse a Jeosafá, rei de Judá: Irás tu comigo a Ramote de Gileade? E ele lhe disse: Como tu és, serei eu; e o meu povo, como o teu povo; iremos contigo à guerra.
⁴ Disse mais Jeosafá ao rei de Israel: Peço-te, consulta hoje a palavra do Senhor.
⁵ Então o rei de Israel reuniu os profetas, quatrocentos homens, e disse-lhes: Iremos à guerra contra Ramote de Gileade, ou deixarei de ir? E eles disseram: Sobe; porque Deus a entregará na mão do rei.
⁶ Disse, porém, Jeosafá: Não há ainda aqui algum profeta do Senhor, para que o consultemos?
⁷ Então o rei de Israel disse a Jeosafá: Ainda há um homem por quem podemos consultar ao Senhor; porém eu o odeio, porque nunca profetiza de mim o que é bom, senão sempre o mau; este é Micaías, filho de Inlá. E disse Jeosafá: Não fale o rei assim.
⁸ Então o rei de Israel chamou um oficial, e disse: Traze aqui depressa a Micaías, filho de Inlá.
⁹ E o rei de Israel, e Jeosafá, rei de Judá, estavam assentados cada um no seu trono, vestidos com suas roupas reais, e estavam assentados na praça à entrada da porta de Samaria; e todos os profetas profetizavam na sua presença.
¹⁰ E Zedequias, filho de Quenaaná, fez para si uns chifres de ferro, e disse: Assim diz o Senhor: Com estes ferirás aos sírios, até de todo os consumires.
¹¹ E todos os profetas profetizavam o mesmo, dizendo: Sobe a Ramote de Gileade, e triunfarás; porque o Senhor a dará na mão do rei.
¹² E o mensageiro, que foi chamar a Micaías, falou-lhe, dizendo: Eis que as palavras dos profetas, a uma voz, predizem coisas boas para o rei; seja, pois, também a tua palavra como a de um deles, e fala o que é bom.
¹³ Porém Micaías disse: Vive o Senhor, que o que meu Deus me disser, isso falarei.
¹⁴ Vindo, pois, ele ao rei, este lhe disse: Micaías, iremos a Ramote de Gileade à guerra, ou deixaremos de ir? E ele disse: Subi, e triunfarás; e serão dados na vossa mão.
¹⁵ E o rei lhe disse: Até quantas vezes, te conjurarei, para que não me fales senão a verdade em nome do Senhor?
¹⁶ Então disse ele: Vi a todo o Israel disperso pelos montes, como ovelhas que não têm pastor; e disse o Senhor: Estes não têm senhor; torne cada um em paz para sua casa.
¹⁷ Então o rei de Israel disse a Jeosafá: Não te disse eu, que ele não profetizaria de mim o que é bom, porém sempre o mal?
¹⁸ Disse mais: Ouvi, pois, a palavra do Senhor: Vi ao Senhor assentado no seu trono, e todo o exército celestial em pé à sua mão direita, e à sua esquerda.
¹⁹ E disse o Senhor: Quem persuadirá a Acabe rei de Israel, para que suba, e caia em Ramote de Gileade? Um dizia desta maneira, e outro de outra.
²⁰ Então saiu um espírito e se apresentou diante do Senhor, e disse: Eu o persuadirei. E o Senhor lhe disse: Com quê?
²¹ E ele disse: Eu sairei, e serei um espírito de mentira na boca de todos os seus profetas. E disse o Senhor: Tu o persuadirás, e ainda prevalecerás; sai, e faze-o assim.
²² Agora, pois, eis que o Senhor pôs um espírito de mentira na boca destes teus profetas; e o Senhor falou o mal a teu respeito.
²³ Então Zedequias, filho de Quenaaná, chegando-se, feriu a Micaías no queixo, e disse: Por que caminho passou de mim o Espírito do Senhor para falar a ti?
²⁴ E disse Micaías: Eis que o verás naquele dia, quando andares de câmara em câmara, para te esconderes.
²⁵ Então disse o rei de Israel: Tomai a Micaías, e tornai a levá-lo a Amom, o governador da cidade, e a Joás, filho do rei.
²⁶ E direis: Assim diz o rei: Colocai este homem na casa do cárcere; e sustentai-o com pão de angústia, e com água de angústia, até que eu volte em paz.
²⁷ E disse Micaías: Se voltares em paz, o Senhor não tem falado por mim. Disse mais: Ouvi, povos todos!
²⁸ Subiram, pois, o rei de Israel e Jeosafá, rei de Judá, a Ramote de Gileade.
²⁹ E disse o rei de Israel a Jeosafá: Disfarçando-me eu, então entrarei na peleja; tu, porém, veste as tuas roupas reais. Disfarçou-se, pois, o rei de Israel, e entraram na peleja.
³⁰ Deu ordem, porém, o rei da Síria aos capitães dos carros que tinha, dizendo: Não pelejareis nem contra pequeno, nem contra grande; senão só contra o rei de Israel.
³¹ Sucedeu que, vendo os capitães dos carros a Jeosafá, disseram: Este é o rei de Israel, e o cercaram para pelejar; porém Jeosafá clamou, e o Senhor o ajudou. E Deus os desviou dele.
³² Porque sucedeu que, vendo os capitães dos carros, que não era o rei de Israel, deixaram de segui-lo.
³³ Então um homem armou o arco e atirou a esmo, e feriu o rei de Israel entre as junturas e a couraça; então disse ao carreteiro: Dá volta, e tira-me do exército, porque estou gravemente ferido.
³⁴ E aquele dia cresceu a peleja, mas o rei de Israel susteve-se em pé no carro defronte dos sírios até à tarde; e morreu ao tempo do pôr do sol.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual profeta avisou que a batalha de Acabe e Josafá contra Ramote-Gileade seria um fracasso?",
                        opcoes: [
                            { numero: 1, texto: "Elias", correta: false },
                            { numero: 2, texto: "Micaías, filho de Inlá", correta: true },
                            { numero: 3, texto: "Eliseu", correta: false },
                            { numero: 4, texto: "Isaías", correta: false }
                        ],
                        explicacao: "2 Crônicas 18:16 - Então disse ele: Vi a todo o Israel disperso pelos montes, como ovelhas que não têm pastor...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        19: {
            titulo: "As Reformas Judiciais de Josafá",
            texto: ` ¹ E Jeosafá, rei de Judá, voltou em paz à sua casa em Jerusalém.
² E Jeú, filho de Hanani, o vidente, saiu ao encontro do rei Jeosafá e lhe disse: Devias tu ajudar ao ímpio, e amar aqueles que odeiam ao Senhor? Por isso virá sobre ti grande ira da parte do Senhor.
³ Boas coisas contudo se acharam em ti; porque tiraste os bosques da terra, e preparaste o teu coração para buscar a Deus.
⁴ Habitou, pois, Jeosafá em Jerusalém; e tornou a passar pelo povo desde Berseba até as montanhas de Efraim, e fez com que tornassem ao Senhor Deus de seus pais.
⁵ E estabeleceu juízes na terra, em todas as cidades fortificadas de Judá, de cidade em cidade.
⁶ E disse aos juízes: Vede o que fazeis; porque não julgais da parte do homem, senão da parte do Senhor, e ele está convosco quando julgardes.
⁷ Agora, pois, seja o temor do Senhor convosco; guardai-o, e fazei-o; porque não há no Senhor nosso Deus iniquidade nem acepção de pessoas, nem aceitação de suborno.
⁸ E também estabeleceu Jeosafá em Jerusalém a alguns dos levitas e dos sacerdotes e dos chefes dos pais de Israel sobre o juízo do Senhor, e sobre as causas judiciais; e voltaram a Jerusalém.
⁹ E deu-lhes ordem, dizendo: Assim fazei no temor do Senhor, com fidelidade, e com coração íntegro.
¹⁰ E em toda a diferença que vier a vós de vossos irmãos que habitam nas suas cidades, entre sangue e sangue, entre lei e mandamento, entre estatutos e juízos, admoestai-os, que não se façam culpados para com o Senhor, e não venha grande ira sobre vós, e sobre vossos irmãos; fazei assim, e não vos fareis culpados.
¹¹ E eis que Amarias, o sumo sacerdote, presidirá sobre vós em todo o negócio do Senhor; e Zebadias, filho de Ismael, líder da casa de Judá, em todo o negócio do rei; também os oficiais, os levitas, estão perante vós; esforçai-vos, pois, e fazei-o; e o Senhor será com os bons.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Que instrução Josafá deu aos juízes que estabeleceu em Judá?",
                        opcoes: [
                            { numero: 1, texto: "Que julgassem para agradar o rei", correta: false },
                            { numero: 2, texto: "Vede o que fazeis; porque não julgais da parte do homem, mas da parte do Senhor", correta: true },
                            { numero: 3, texto: "Que cobrassem por cada julgamento", correta: false },
                            { numero: 4, texto: "Que fossem severos apenas com os pobres", correta: false }
                        ],
                        explicacao: "2 Crônicas 19:6 - E disse aos juízes: Vede o que fazeis; porque não julgais da parte do homem, mas da parte do Senhor...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        20: {
            titulo: "A Vitória pelo Louvor no Vale de Beraca",
            texto: `¹ E sucedeu que, depois disto, os filhos de Moabe, e os filhos de Amom, e com eles outros dos amonitas, vieram à peleja contra Jeosafá.
² Então vieram alguns que avisaram a Jeosafá, dizendo: Vem contra ti uma grande multidão dalém do mar e da Síria; e eis que já estão em Hazazom-Tamar, que é En-Gedi.
³ Então Jeosafá temeu, e pôs-se a buscar o Senhor, e apregoou jejum em todo o Judá.
⁴ E Judá se ajuntou, para pedir socorro ao Senhor; também de todas as cidades de Judá vieram para buscar ao Senhor.
⁵ E pôs-se Jeosafá em pé na congregação de Judá e de Jerusalém, na casa do Senhor, diante do pátio novo.
⁶ E disse: Ah! Senhor Deus de nossos pais, porventura não és tu Deus nos céus? Não és tu que dominas sobre todos os reinos das nações? Na tua mão há força e potência, e não há quem te possa resistir.
⁷ Porventura, ó nosso Deus, não lançaste fora os moradores desta terra de diante do teu povo Israel, e não a deste para sempre à descendência de Abraão, teu amigo?
⁸ E habitaram nela e edificaram-te nela um santuário ao teu nome, dizendo:
⁹ Se algum mal nos sobrevier, espada, juízo, peste, ou fome, nós nos apresentaremos diante desta casa e diante de ti, pois teu nome está nesta casa, e clamaremos a ti na nossa angústia, e tu nos ouvirás e livrarás.
¹⁰ Agora, pois, eis que os filhos de Amom, e de Moabe e os das montanhas de Seir, pelos quais não permitiste passar a Israel, quando vinham da terra do Egito, mas deles se desviaram e não os destruíram,
¹¹ Eis que nos dão o pago, vindo para lançar-nos fora da tua herança, que nos fizeste herdar.
¹² Ah! Nosso Deus, porventura não os julgarás? Porque em nós não há força perante esta grande multidão que vem contra nós, e não sabemos o que faremos; porém os nossos olhos estão postos em ti.
¹³ E todo o Judá estava em pé perante o Senhor, como também as suas crianças, as suas mulheres, e os seus filhos.
¹⁴ Então veio o Espírito do Senhor, no meio da congregação, sobre Jaaziel, filho de Zacarias, filho de Benaia, filho de Jeiel, filho de Matanias, levita, dos filhos de Asafe,
¹⁵ E disse: Dai ouvidos todo o Judá, e vós, moradores de Jerusalém, e tu, ó rei Jeosafá; assim o Senhor vos diz: Não temais, nem vos assusteis por causa desta grande multidão; pois a peleja não é vossa, mas de Deus.
¹⁶ Amanhã descereis contra eles; eis que sobem pela ladeira de Ziz, e os achareis no fim do vale, diante do deserto de Jeruel.
¹⁷ Nesta batalha não tereis que pelejar; postai-vos, ficai parados, e vede a salvação do Senhor para convosco, ó Judá e Jerusalém. Não temais, nem vos assusteis; amanhã saí-lhes ao encontro, porque o Senhor será convosco.
¹⁸ Então Jeosafá se prostrou com o rosto em terra, e todo o Judá e os moradores de Jerusalém se lançaram perante o Senhor, adorando ao Senhor.
¹⁹ E levantaram-se os levitas, dos filhos dos coatitas, e dos filhos dos coratitas, para louvarem ao Senhor Deus de Israel, com voz muito alta.
²⁰ E pela manhã cedo se levantaram e saíram ao deserto de Tecoa; e, ao saírem, Jeosafá pôs-se em pé, e disse: Ouvi-me, ó Judá, e vós, moradores de Jerusalém: Crede no Senhor vosso Deus, e estareis seguros; crede nos seus profetas, e prosperareis;
²¹ E aconselhou-se com o povo, e ordenou cantores para o Senhor, que louvassem à Majestade santa, saindo diante dos armados, e dizendo: Louvai ao Senhor porque a sua benignidade dura para sempre.
²² E, quando começaram a cantar e a dar louvores, o Senhor pôs emboscadas contra os filhos de Amom e de Moabe e os das montanhas de Seir, que vieram contra Judá, e foram desbaratados.
²³ Porque os filhos de Amom e de Moabe se levantaram contra os moradores das montanhas de Seir, para os destruir e exterminar; e, acabando eles com os moradores de Seir, ajudaram uns aos outros a destruir-se.
²⁴ Nisso chegou Judá à atalaia do deserto; e olharam para a multidão, e eis que eram corpos mortos, que jaziam em terra, e nenhum escapou.
²⁵ E vieram Jeosafá e o seu povo para saquear os seus despojos, e acharam entre eles riquezas e cadáveres em abundância, assim como objetos preciosos; e tomaram para si tanto, que não podiam levar; e três dias saquearam o despojo, porque era muito.
²⁶ E ao quarto dia se ajuntaram no vale de Beraca; pois ali louvaram ao Senhor. Por isso chamaram aquele lugar o vale de Beraca, até ao dia de hoje.
²⁷ Então voltaram todos os homens de Judá e de Jerusalém, e Jeosafá à frente deles, e tornaram a Jerusalém com alegria; porque o Senhor os alegrara sobre os seus inimigos.
²⁸ E vieram a Jerusalém com saltérios, com harpas e com trombetas, para a casa do Senhor.
²⁹ E veio o temor de Deus sobre todos os reinos daquelas terras, ouvindo eles que o Senhor havia pelejado contra os inimigos de Israel.
³⁰ E o reino de Jeosafá ficou quieto; e o seu Deus lhe deu repouso ao redor.
³¹ E Jeosafá reinou sobre Judá; era da idade de trinta e cinco anos quando começou a reinar e vinte e cinco anos reinou em Jerusalém; e o nome de sua mãe era Azuba, filha de Sili.
³² E andou no caminho de Asa, seu pai, e não se desviou dele, fazendo o que era reto aos olhos do Senhor.
³³ Contudo os altos não foram tirados porque o povo não tinha ainda disposto o seu coração para com o Deus de seus pais.
³⁴ Ora, o restante dos atos de Jeosafá, assim, desde os primeiros até os últimos, eis que está escrito nas notas de Jeú, filho de Hanani, que as inseriu no livro dos reis de Israel.
³⁵ Porém, depois disto, Jeosafá, rei de Judá, se aliou com Acazias, rei de Israel, que procedeu com toda a impiedade.
³⁶ E aliou-se com ele, para fazerem navios que fossem a Társis; e fizeram os navios em Eziom-Geber.
³⁷ Porém Eliezer, filho de Dodava, de Maressa, profetizou contra Jeosafá, dizendo: Porquanto te aliaste com Acazias, o Senhor despedaçou as tuas obras. E os navios se quebraram, e não puderam ir a Társis.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Josafá fez primeiro quando soube que uma grande multidão vinha contra ele?",
                        opcoes: [
                            { numero: 1, texto: "Fugiu para o Egito", correta: false },
                            { numero: 2, texto: "Pôs-se a buscar o Senhor e apregoou jejum em todo o Judá", correta: true },
                            { numero: 3, texto: "Mandou construir mais armas", correta: false },
                            { numero: 4, texto: "Pediu ajuda aos filisteus", correta: false }
                        ],
                        explicacao: "2 Crônicas 20:3 - Então Josafá temeu, e pôs-se a buscar o Senhor, e apregoou jejum em todo o Judá.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem Josafá colocou à frente do exército para marchar contra os inimigos?",
                        opcoes: [
                            { numero: 1, texto: "Os arqueiros mais habilidosos", correta: false },
                            { numero: 2, texto: "Cantores que louvassem ao Senhor com trajes santos", correta: true },
                            { numero: 3, texto: "Os carros de guerra de Salomão", correta: false },
                            { numero: 4, texto: "Ele mesmo, sozinho", correta: false }
                        ],
                        explicacao: "2 Crônicas 20:21 - ...ordenou cantores para o Senhor, que louvassem a santidade... indo estes diante do exército...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu quando os cantores começaram a cantar e a louvar?",
                        opcoes: [
                            { numero: 1, texto: "Os inimigos se renderam", correta: false },
                            { numero: 2, texto: "O Senhor pôs emboscadas contra os inimigos e eles foram desbaratados entre si", correta: true },
                            { numero: 3, texto: "Caiu fogo do céu sobre Judá", correta: false },
                            { numero: 4, texto: "As cordas das harpas se quebraram", correta: false }
                        ],
                        explicacao: "2 Crônicas 20:22 - E, ao tempo que começaram com júbilo e louvor, o Senhor pôs emboscadas contra os filhos de Amom e de Moabe...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/segundo_cronicas.js (Parte 5: Capítulos 21-25)

        21: {
            titulo: "O Terrível Reinado de Jorão",
            texto: `¹ Depois Jeosafá dormiu com seus pais, e foi sepultado com seus pais na cidade de Davi; e Jeorão, seu filho, reinou em seu lugar.
² E teve irmãos, filhos de Jeosafá: Azarias, Jeiel, Zacarias, Asarias, Micael e Sefatias; todos estes foram filhos de Jeosafá, rei de Israel.
³ E seu pai lhes deu muitos presentes de prata, de ouro e de coisas preciosíssimas, juntamente com cidades fortificadas em Judá; porém, o reino, deu a Jeorão, porquanto era o primogênito.
⁴ E, subindo Jeorão ao reino de seu pai, e havendo-se fortificado, matou a todos os seus irmãos à espada, como também a alguns dos príncipes de Israel.
⁵ Da idade de trinta e dois anos era Jeorão, quando começou a reinar; e reinou oito anos em Jerusalém.
⁶ E andou no caminho dos reis de Israel, como fazia a casa de Acabe; porque tinha a filha de Acabe por mulher; e fazia o que era mau aos olhos do Senhor.
⁷ Porém o Senhor não quis destruir a casa de Davi, em atenção à aliança que tinha feito com Davi; e porque também tinha falado que lhe daria por todos os dias uma lâmpada, a ele e a seus filhos.
⁸ Nos seus dias se revoltaram os edomitas contra o mando de Judá, e constituíram para si um rei.
⁹ Por isso Jeorão passou adiante com os seus príncipes, e todos os carros com ele; levantou-se de noite, e feriu aos edomeus, que o tinham cercado, como também aos capitães dos carros.
¹⁰ Todavia os edomitas se revoltaram contra o mando de Judá até ao dia de hoje; então no mesmo tempo Libna se revoltou contra o seu mando; porque deixara ao Senhor Deus de seus pais.
¹¹ Ele também fez altos nos montes de Judá; e fez com que se corrompessem os moradores de Jerusalém, e até a Judá impeliu a isso.
¹² Então lhe veio um escrito da parte de Elias, o profeta, que dizia: Assim diz o Senhor Deus de Davi teu pai: Porquanto não andaste nos caminhos de Jeosafá, teu pai, e nos caminhos de Asa, rei de Judá,
¹³ Mas andaste no caminho dos reis de Israel, e fizeste prostituir a Judá e aos moradores de Jerusalém, segundo a prostituição da casa de Acabe, e também mataste a teus irmãos da casa de teu pai, melhores do que tu;
¹⁴ Eis que o Senhor ferirá com um grande flagelo ao teu povo, aos teus filhos, às tuas mulheres e a todas as tuas fazendas.
¹⁵ Tu também terás grande enfermidade por causa de uma doença em tuas entranhas, até que elas saiam, de dia em dia, por causa do mal.
¹⁶ Despertou, pois, o Senhor, contra Jeorão o espírito dos filisteus e dos árabes, que estavam do lado dos etíopes.
¹⁷ Estes subiram a Judá, e deram sobre ela, e levaram todos os bens que se achou na casa do rei, como também a seus filhos e a suas mulheres; de modo que não lhe deixaram filho algum, senão a Jeoacaz, o mais moço de seus filhos.
¹⁸ E depois de tudo isto o Senhor o feriu nas suas entranhas com uma enfermidade incurável.
¹⁹ E sucedeu que, depois de muito tempo, ao fim de dois anos, saíram-lhe as entranhas por causa da doença; e morreu daquela grave enfermidade; e o seu povo não lhe queimou aroma como queimara a seus pais.
²⁰ Era da idade de trinta e dois anos quando começou a reinar, e reinou oito anos em Jerusalém; e foi sem deixar de si saudades; e sepultaram-no na cidade de Davi, porém não nos sepulcros dos reis. `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Jorão fez com todos os seus irmãos assim que se estabeleceu no reino?",
                        opcoes: [
                            { numero: 1, texto: "Deu-lhes cidades para governar", correta: false },
                            { numero: 2, texto: "Matou-os a todos à espada", correta: true },
                            { numero: 3, texto: "Enviou-os para o exílio", correta: false },
                            { numero: 4, texto: "Nomeou-os sacerdotes", correta: false }
                        ],
                        explicacao: "2 Crônicas 21:4 - ...matou a todos os seus irmãos à espada, como também a alguns dos príncipes de Israel.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Que castigo físico o profeta Elias profetizou que Jorão sofreria por seus pecados?",
                        opcoes: [
                            { numero: 1, texto: "Ficaria cego", correta: false },
                            { numero: 2, texto: "Teria uma enfermidade nas entranhas que sairiam para fora", correta: true },
                            { numero: 3, texto: "Perderia o movimento das mãos", correta: false },
                            { numero: 4, texto: "Sua pele ficaria branca como a neve", correta: false }
                        ],
                        explicacao: "2 Crônicas 21:15 - Tu também terás uma grande enfermidade nas tuas entranhas... até que saiam dia após dia.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        22: {
            titulo: "Acazias e a Tirania de Atalia",
            texto: ` ¹ E os moradores de Jerusalém, em lugar de Jeorão, fizeram rei a Acazias, seu filho mais moço, porque a tropa, que viera com os árabes ao arraial, tinha matado a todos os mais velhos. Assim reinou Acazias, filho de Jeorão, rei de Judá.
² Era Acazias da idade de quarenta e dois anos, quando começou a reinar, e reinou um ano em Jerusalém; e era o nome de sua mãe Atalia, filha de Onri.
³ Também ele andou nos caminhos da casa de Acabe, porque sua mãe era sua conselheira, para proceder impiamente.
⁴ E fez o que era mau aos olhos do Senhor, como a casa de Acabe, porque eles eram seus conselheiros depois da morte de seu pai, para a sua perdição.
⁵ Também andou nos conselhos deles, e foi com Jorão, filho de Acabe, rei de Israel, à peleja contra Hazael, rei da Síria, junto a Ramote de Gileade; e os sírios feriram a Jorão.
⁶ E voltou para curar-se em Jizreel, das feridas que lhe fizeram em Ramá, pelejando contra Hazael, rei da Síria; e Acazias, filho de Jeorão, rei de Judá, desceu para ver a Jorão, filho de Acabe, em Jizreel, porque estava doente.
⁷ Foi, pois, da vontade de Deus, que Acazias, para sua ruína, visitasse Jorão; porque chegando ele, saiu com Jorão contra Jeú, filho de Ninsi, a quem o Senhor tinha ungido para desarraigar a casa de Acabe.
⁸ E sucedeu que, executando Jeú juízo contra a casa de Acabe, achou os príncipes de Judá e os filhos dos irmãos de Acazias, que serviam a Acazias, e os matou.
⁹ Depois buscou a Acazias (porque se tinha escondido em Samaria), e o alcançaram, e o trouxeram a Jeú, e o mataram, e o sepultaram; porque disseram: Filho é de Jeosafá, que buscou ao Senhor com todo o seu coração. E já não tinha a casa de Acazias ninguém que tivesse força para reter o reino.
¹⁰ Vendo, pois, Atalia, mãe de Acazias, que seu filho era morto, levantou-se e destruiu toda a descendência real da casa de Judá.
¹¹ Porém Jeosabeate, filha do rei, tomou a Joás, filho de Acazias, furtando-o dentre os filhos do rei, aos quais matavam, e o pôs com a sua ama na câmara dos leitos; assim Jeosabeate, filha do rei Jeorão, mulher do sacerdote Joiada (porque era irmã de Acazias), o escondeu de Atalia, de modo que ela não o matou.
¹² E esteve com eles seis anos escondido na casa de Deus; e Atalia reinou sobre a terra.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Atalia fez quando viu que seu filho Acazias estava morto?",
                        opcoes: [
                            { numero: 1, texto: "Chorou por muitos dias", correta: false },
                            { numero: 2, texto: "Levantou-se e destruiu toda a descendência real da casa de Judá", correta: true },
                            { numero: 3, texto: "Fugiu para Samaria", correta: false },
                            { numero: 4, texto: "Entregou o trono aos levitas", correta: false }
                        ],
                        explicacao: "2 Crônicas 22:10 - Vendo, pois, Atalia... que seu filho era morto, levantou-se e destruiu toda a descendência real...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem escondeu o pequeno Joás para salvá-lo da matança de Atalia?",
                        opcoes: [
                            { numero: 1, texto: "A rainha de Sabá", correta: false },
                            { numero: 2, texto: "Jeoseba, filha do rei", correta: true },
                            { numero: 3, texto: "Uma serva egípcia", correta: false },
                            { numero: 4, texto: "O profeta Eliseu", correta: false }
                        ],
                        explicacao: "2 Crônicas 22:11 - Mas Jeoseba... tomou a Joás... e o escondeu de Atalia, de modo que ela não o matasse.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        23: {
            titulo: "A Revolta contra Atalia e a Coroação de Joás",
            texto: ` ¹ Porém no sétimo ano Joiada se animou, e tomou consigo em aliança os chefes de cem, a Azarias, filho de Jeroão, a Ismael, filho de Joanã, a Azarias, filho de Obede, a Maaseias, filho de Adaías, e a Elisafate, filho de Zicri.
² Estes percorreram a Judá e ajuntaram os levitas de todas as cidades de Judá e os chefes dos pais de Israel, e vieram para Jerusalém.
³ E toda aquela congregação fez aliança com o rei na casa de Deus; e Joiada lhes disse: Eis que o filho do rei reinará, como o Senhor falou a respeito dos filhos de Davi.
⁴ Isto é o que haveis de fazer; uma terça parte de vós, ou seja, dos sacerdotes e dos levitas que entram no sábado, serão guardas das portas;
⁵ E uma terça parte estará na casa do rei; e a outra terça parte à porta do fundamento; e todo o povo estará nos pátios da casa do Senhor.
⁶ Porém ninguém entre na casa do Senhor, senão os sacerdotes e os levitas que ministram; estes entrarão, porque são santos; mas todo o povo fará a guarda diante do Senhor.
⁷ E os levitas cercarão o rei de todos os lados, cada um com as suas armas na mão; e qualquer que entrar na casa será morto; porém vós estareis com o rei, quando entrar e quando sair.
⁸ E fizeram os levitas e todo o Judá conforme a tudo o que ordenara o sacerdote Joiada; e tomou cada um os seus homens, tanto os que entravam no sábado como os que saíam no sábado; porque o sacerdote Joiada não tinha despedido as turmas.
⁹ Também o sacerdote Joiada deu aos capitães de cem as lanças, os escudos e as rodelas que foram do rei Davi, os quais estavam na casa de Deus.
¹⁰ E dispôs todo o povo, a cada um com as suas armas na mão, desde o lado direito da casa até o lado esquerdo da casa, do lado do altar e da casa, em redor do rei.
¹¹ Então tiraram para fora ao filho do rei, e lhe puseram a coroa; deram-lhe o testemunho, e o fizeram rei; e Joiada e seus filhos o ungiram, e disseram: Viva o rei!
¹² Ouvindo, pois, Atalia a voz do povo que concorria e louvava o rei, veio ao povo, à casa do Senhor.
¹³ E olhou, e eis que o rei estava junto à coluna, à entrada, e os príncipes e as trombetas junto ao rei; e todo o povo da terra estava alegre e tocava as trombetas; e também os cantores tocavam instrumentos musicais, e dirigiam o cantar de louvores; então Atalia rasgou os seus vestidos, e clamou: Traição, traição!
¹⁴ Porém o sacerdote Joiada trouxe para fora os centuriões que estavam postos sobre o exército e disse-lhes: Tirai-a para fora das fileiras, e o que a seguir, morrerá à espada; porque dissera o sacerdote: Não a mateis na casa do Senhor.
¹⁵ E lançaram mão dela; e ela foi pelo caminho da entrada da porta dos cavalos, à casa do rei, e ali a mataram.
¹⁶ E Joiada fez aliança entre si e o povo e o rei, para que fossem o povo do Senhor.
¹⁷ Depois todo o povo entrou na casa de Baal, e a derrubaram, e quebraram os seus altares, e as suas imagens, e a Matã, sacerdote de Baal, mataram diante dos altares.
¹⁸ E Joiada ordenou os ofícios na casa do Senhor, sob a direção dos sacerdotes levitas a quem Davi designara na casa do Senhor, para oferecerem os holocaustos do Senhor, como está escrito na lei de Moisés, com alegria e com canto, conforme a instituição de Davi.
¹⁹ E pôs porteiros às portas da casa do Senhor, para que nela não entrasse ninguém imundo em coisa alguma.
²⁰ E tomou os centuriões, os poderosos, os que tinham domínio entre o povo e todo o povo da terra, e conduziram o rei da casa do Senhor, e entraram na casa do rei passando pela porta maior, e assentaram o rei sobre o trono do reino.
²¹ E todo o povo da terra se alegrou, e a cidade ficou em paz, depois que mataram a Atalia à espada.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual sacerdote liderou o movimento para coroar Joás e derrubar Atalia?",
                        opcoes: [
                            { numero: 1, texto: "Zadoque", correta: false },
                            { numero: 2, texto: "Joiada", correta: true },
                            { numero: 3, texto: "Hilquias", correta: false },
                            { numero: 4, texto: "Elias", correta: false }
                        ],
                        explicacao: "2 Crônicas 23:1 - No sétimo ano, Joiada se esforçou e tomou consigo em aliança os capitães de cem...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        24: {
            titulo: "O Reinado e a Reforma de Joás",
            texto: `¹ Tinha Joás sete anos de idade quando começou a reinar, e quarenta anos reinou em Jerusalém; e era o nome da sua mãe Zíbia, de Berseba.
² E fez Joás o que era reto aos olhos do Senhor, todos os dias do sacerdote Joiada.
³ E tomou-lhe Joiada duas mulheres, e gerou filhos e filhas.
⁴ E, depois disto, Joás resolveu renovar a casa do Senhor.
⁵ Reuniu, pois, os sacerdotes e os levitas, e disse-lhes: Saí pelas cidades de Judá, e levantai dinheiro de todo o Israel para reparar a casa do vosso Deus de ano em ano; e vós, apressai este negócio. Porém os levitas não se apressaram.
⁶ E o rei chamou a Joiada, o chefe, e disse-lhe: Por que não requereste dos levitas, que trouxessem de Judá e de Jerusalém o tributo que Moisés, servo do Senhor, ordenou à congregação de Israel, para a tenda do testemunho?
⁷ Porque, sendo Atalia ímpia, seus filhos arruinaram a casa de Deus, e até todas as coisas sagradas da casa do Senhor empregaram em Baalins.
⁸ E o rei, pois, deu ordem e fizeram um cofre, e o puseram fora, à porta da casa do Senhor.
⁹ E publicou-se em Judá e em Jerusalém que trouxessem ao Senhor o tributo de Moisés, o servo de Deus, ordenado a Israel no deserto.
¹⁰ Então todos os príncipes e todo o povo se alegraram, e o trouxeram e o lançaram no cofre, até que ficou cheio.
¹¹ E sucedia que, quando levavam o cofre pelas mãos dos levitas, segundo o mandado do rei, e vendo-se que já havia muito dinheiro, vinha o escrivão do rei, e o oficial do sumo sacerdote, e esvaziavam o cofre, e tomavam-no e levavam-no de novo ao seu lugar; assim faziam de dia em dia, e ajuntaram dinheiro em abundância.
¹² O qual o rei e Joiada davam aos que tinham o encargo da obra do serviço da casa do Senhor; e contrataram pedreiros e carpinteiros, para renovarem a casa do Senhor; como também ferreiros e serralheiros, para repararem a casa do Senhor.
¹³ E os que tinham o encargo da obra faziam com que o trabalho de reparação fosse crescendo pelas suas mãos; e restauraram a casa de Deus no seu estado, e a fortaleceram.
¹⁴ E, depois de acabarem, trouxeram ao rei e a Joiada o resto do dinheiro, e dele fizeram utensílios para a casa do Senhor, objetos para ministrar e oferecer, colheres, vasos de ouro e de prata. E continuamente sacrificaram holocaustos na casa do Senhor, todos os dias de Joiada.
¹⁵ E envelheceu Joiada, e morreu farto de dias; era da idade de cento e trinta anos quando morreu.
¹⁶ E o sepultaram na cidade de Davi com os reis; porque tinha feito bem em Israel, e para com Deus e a sua casa.
¹⁷ Porém, depois da morte de Joiada vieram os príncipes de Judá e prostraram-se perante o rei; e o rei os ouviu.
¹⁸ E deixaram a casa do Senhor Deus de seus pais, e serviram às imagens do bosque e aos ídolos. Então, por causa desta sua culpa, veio grande ira sobre Judá e Jerusalém.
¹⁹ Porém enviou profetas entre eles, para os reconduzir ao Senhor, os quais protestaram contra eles; mas eles não deram ouvidos.
²⁰ E o Espírito de Deus revestiu a Zacarias, filho do sacerdote Joiada, o qual se pôs em pé acima do povo, e lhes disse: Assim diz Deus: Por que transgredis os mandamentos do Senhor, de modo que não possais prosperar? Porque deixastes ao Senhor, também ele vos deixará.
²¹ E eles conspiraram contra ele, e o apedrejaram por mandado do rei, no pátio da casa do Senhor.
²² Assim o rei Joás não se lembrou da beneficência que Joiada, pai de Zacarias, lhe fizera; porém matou-lhe o filho, o qual, morrendo, disse: O Senhor o verá, e o requererá.
²³ E sucedeu que, decorrido um ano, o exército da Síria subiu contra ele; e vieram a Judá e a Jerusalém, e destruíram dentre o povo a todos os seus príncipes; e enviaram todo o seu despojo ao rei de Damasco.
²⁴ Porque ainda que o exército dos sírios viera com poucos homens, contudo o Senhor entregou na sua mão um exército mui numeroso, porquanto deixaram ao Senhor Deus de seus pais. Assim executaram juízos contra Joás.
²⁵ E, quando os sírios se retiraram, deixaram-no gravemente ferido; então seus servos conspiraram contra ele por causa do sangue dos filhos do sacerdote Joiada, e o feriram na sua cama, e morreu; e o sepultaram na cidade de Davi, porém não o sepultaram nos sepulcros dos reis.
²⁶ Estes, pois, foram os que conspiraram contra ele; Zabade, filho de Simeate, a amonita, e Jeozabade, filho de Sinrite, a moabita.
²⁷ E, quanto a seus filhos, e à grandeza do cargo que se lhe impôs, e à restauração da casa de Deus, eis que estão escritos no livro da história dos reis; e Amazias, seu filho, reinou em seu lugar.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Joás decidiu fazer com a Casa do Senhor (Templo)?",
                        opcoes: [
                            { numero: 1, texto: "Derrubá-la", correta: false },
                            { numero: 2, texto: "Renovar a casa do Senhor", correta: true },
                            { numero: 3, texto: "Transformá-la em um palácio", correta: false },
                            { numero: 4, texto: "Vender o seu ouro", correta: false }
                        ],
                        explicacao: "2 Crônicas 24:4 - E sucedeu, depois disto, que Joás resolveu renovar a casa do Senhor.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu com Joás após a morte do sacerdote Joiada?",
                        opcoes: [
                            { numero: 1, texto: "Ele se tornou ainda mais fiel", correta: false },
                            { numero: 2, texto: "Deixou a casa do Senhor e serviu a ídolos", correta: true },
                            { numero: 3, texto: "Morreu de velhice imediatamente", correta: false },
                            { numero: 4, texto: "Aposentou-se", correta: false }
                        ],
                        explicacao: "2 Crônicas 24:17-18 - ...deixaram a casa do Senhor... e serviram às imagens de escultura e aos ídolos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        25: {
            titulo: "O Reinado de Amazias",
            texto: `¹ Era Amazias da idade de vinte e cinco anos, quando começou a reinar, e reinou vinte e nove anos em Jerusalém; e era o nome de sua mãe Joadã, de Jerusalém.
² E fez o que era reto aos olhos do Senhor, porém não com inteireza de coração.
³ Sucedeu que, sendo-lhe o reino já confirmado, matou a seus servos que mataram o rei seu pai;
⁴ Porém não matou os filhos deles; mas fez segundo está escrito na lei, no livro de Moisés, como o Senhor ordenou, dizendo: Não morrerão os pais pelos filhos, nem os filhos pelos pais; mas cada um morrerá pelo seu pecado.
⁵ E Amazias reuniu a Judá e os pôs segundo as casas dos pais, sob capitães de milhares, e sob capitães de cem, por todo o Judá e Benjamim; e os contou, de vinte anos para cima, e achou deles trezentos mil escolhidos que podiam sair à guerra, e manejar lança e escudo.
⁶ Também de Israel tomou a soldo cem mil homens valentes, por cem talentos de prata.
⁷ Porém um homem de Deus veio a ele, dizendo: Ó rei, não deixes ir contigo o exército de Israel; porque o Senhor não é com Israel, a saber com os filhos de Efraim.
⁸ Se quiseres ir, faze-o assim, esforça-te para a peleja. Deus, porém, te fará cair diante do inimigo; porque força há em Deus para ajudar e para fazer cair.
⁹ E disse Amazias ao homem de Deus: Que se fará, pois, dos cem talentos de prata que dei às tropas de Israel? E disse o homem de Deus: Mais tem o Senhor que te dar do que isso.
¹⁰ Então separou Amazias as tropas que lhe tinham vindo de Efraim, para que se fossem ao seu lugar; por isso se acendeu a sua ira contra Judá, e voltaram para as suas casas ardendo em ira.
¹¹ Esforçou-se, pois, Amazias, e conduziu o seu povo, e foi ao Vale do Sal; onde feriu a dez mil dos filhos de Seir.
¹² Também os filhos de Judá prenderam vivos dez mil, e os levaram ao cume da rocha; e do mais alto da rocha os lançaram abaixo, e todos se despedaçaram.
¹³ Porém os homens das tropas que Amazias despedira, para que não fossem com ele à peleja, deram sobre as cidades de Judá desde Samaria, até Bete-Horom; e feriram deles três mil, e saquearam grande despojo.
¹⁴ E sucedeu que, depois que Amazias veio da matança dos edomitas e trouxe consigo os deuses dos filhos de Seir, tomou-os por seus deuses, e prostrou-se diante deles, e queimou-lhes incenso.
¹⁵ Então a ira do Senhor se acendeu contra Amazias, e mandou-lhe um profeta que lhe disse: Por que buscaste deuses deste povo, os quais não livraram o seu próprio povo da tua mão?
¹⁶ E sucedeu que, falando ele ao rei, este lhe respondeu: Puseram-te por conselheiro do rei? Cala-te! Por que haveria de ser ferido? Então parou o profeta, e disse: Bem vejo eu que já Deus deliberou destruir-te; porquanto fizeste isto, e não deste ouvidos ao meu conselho.
¹⁷ E, tendo tomado conselho, Amazias, rei de Judá, mandou dizer a Jeoás, filho de Jeoacaz, filho de Jeú, rei de Israel: Vem, vejamo-nos face a face.
¹⁸ Porém Jeoás, rei de Israel, mandou dizer a Amazias, rei de Judá: O cardo que estava no Líbano mandou dizer ao cedro que estava no Líbano: Dá tua filha por mulher a meu filho; porém os animais do campo, que estavam no Líbano passaram e pisaram o cardo.
¹⁹ Tu dizes: Eis que tenho ferido os edomitas; e elevou-se o teu coração, para te gloriares; agora, pois, fica em tua casa; por que te entremeterias no mal, para caíres tu e Judá contigo?
²⁰ Porém Amazias não lhe deu ouvidos, porque isto vinha de Deus, para entregá-los na mão dos seus inimigos; porquanto buscaram os deuses dos edomitas.
²¹ E Jeoás, rei de Israel, subiu; e ele e Amazias, rei de Judá, viram-se face a face em Bete-Semes, que está em Judá.
²² E Judá foi ferido diante de Israel; e fugiu cada um para a sua tenda.
²³ E Jeoás, rei de Israel, prendeu a Amazias, rei de Judá, filho de Joás, o filho de Jeoacaz, em Bete-Semes, e o trouxe a Jerusalém; e derrubou o muro de Jerusalém, desde a porta de Efraim até à porta da esquina, quatrocentos côvados.
²⁴ Também tomou todo o ouro, a prata, e todos os utensílios que se acharam na casa de Deus com Obede-Edom, e os tesouros da casa do rei, e os reféns; e voltou para Samaria.
²⁵ E viveu Amazias, filho de Joás, rei de Judá, depois da morte de Jeoás, filho de Jeoacaz, rei de Israel, quinze anos.
²⁶ Quanto ao mais dos atos de Amazias, tanto os primeiros como os últimos, eis que, porventura, não estão escritos no livro dos reis de Judá e de Israel?
²⁷ E desde o tempo em que Amazias se desviou do Senhor, conspiraram contra ele em Jerusalém, porém ele fugiu para Laquis; mas perseguiram-no até Laquis, e o mataram ali.
²⁸ E trouxeram-no sobre cavalos e sepultaram-no com seus pais na cidade de Judá.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Amazias contratou cem mil homens de Israel por cem talentos de prata, mas o que o homem de Deus lhe disse?",
                        opcoes: [
                            { numero: 1, texto: "Que ele deveria contratar mais cem mil", correta: false },
                            { numero: 2, texto: "Que o Senhor não era com Israel e ele deveria despedi-los", correta: true },
                            { numero: 3, texto: "Que a prata era falsa", correta: false },
                            { numero: 4, texto: "Que ele seria o rei de todo o mundo", correta: false }
                        ],
                        explicacao: "2 Crônicas 25:7 - ...Ó rei, não venha contigo o exército de Israel; porque o Senhor não é com Israel...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/segundo_cronicas.js (Parte 6: Capítulos 26-30)

        26: {
            titulo: "O Reinado de Uzias",
            texto: `¹ Então todo o povo de Judá tomou a Uzias, que tinha dezesseis anos, e o fizeram rei em lugar de Amazias seu pai.
² Este edificou a Elote, e a restituiu a Judá, depois que o rei dormiu com seus pais.
³ Tinha Uzias dezesseis anos quando começou a reinar, e cinquenta e dois anos reinou em Jerusalém; e era o nome de sua mãe Jecolia, de Jerusalém.
⁴ E fez o que era reto aos olhos do Senhor; conforme a tudo o que fizera Amazias seu pai.
⁵ Porque deu-se a buscar a Deus nos dias de Zacarias, que era entendido nas visões de Deus; e nos dias em que buscou ao Senhor, Deus o fez prosperar.
⁶ Porque saiu e guerreou contra os filisteus, e quebrou o muro de Gate, o muro de Jabne, e o muro de Asdode; e edificou cidades em Asdode, e entre os filisteus.
⁷ E Deus o ajudou contra os filisteus e contra os árabes que habitavam em Gur-Baal, e contra os meunitas.
⁸ E os amonitas deram presentes a Uzias; e o seu nome foi espalhado até à entrada do Egito, porque se fortificou altamente.
⁹ Também Uzias edificou torres em Jerusalém, à porta da esquina, e à porta do vale, e à porta do ângulo, e as fortificou.
¹⁰ Também edificou torres no deserto, e cavou muitos poços, porque tinha muito gado, tanto nos vales como nas campinas; tinha lavradores, e vinhateiros, nos montes e nos campos férteis; porque era amigo da agricultura.
¹¹ Tinha também Uzias um exército de homens destros na guerra, que saíam à guerra em tropas, segundo o número da resenha feita por mão de Jeiel, o escrivão, e Maaseias, oficial, sob a direção de Hananias, um dos capitães do rei.
¹² O total dos chefes dos pais, homens valentes, era de dois mil e seiscentos.
¹³ E debaixo das suas ordens havia um exército guerreiro de trezentos e sete mil e quinhentos homens, que faziam a guerra com força belicosa, para ajudar o rei contra os inimigos.
¹⁴ E preparou Uzias, para todo o exército, escudos, lanças, capacetes, couraças e arcos, e até fundas para atirar pedras.
¹⁵ Também fez em Jerusalém máquinas da invenção de engenheiros, que estivessem nas torres e nos cantos, para atirarem flechas e grandes pedras; e propagou a sua fama até muito longe; porque foi maravilhosamente ajudado, até que se fortificou.
¹⁶ Mas, havendo-se já fortificado, exaltou-se o seu coração até se corromper; e transgrediu contra o Senhor seu Deus, porque entrou no templo do Senhor para queimar incenso no altar do incenso.
¹⁷ Porém o sacerdote Azarias entrou após ele, e com ele oitenta sacerdotes do Senhor, homens valentes.
¹⁸ E resistiram ao rei Uzias, e lhe disseram: A ti, Uzias, não compete queimar incenso perante o Senhor, mas aos sacerdotes, filhos de Arão, que são consagrados para queimar incenso; sai do santuário, porque transgrediste; e não será isto para honra tua da parte do Senhor Deus.
¹⁹ Então Uzias se indignou; e tinha o incensário na sua mão para queimar incenso. Indignando-se ele, pois, contra os sacerdotes, a lepra lhe saiu à testa perante os sacerdotes, na casa do Senhor, junto ao altar do incenso.
²⁰ Então o sumo sacerdote Azarias olhou para ele, como também todos os sacerdotes, e eis que já estava leproso na sua testa, e apressadamente o lançaram fora; e até ele mesmo se deu pressa a sair, visto que o Senhor o ferira.
²¹ Assim ficou leproso o rei Uzias até ao dia da sua morte; e morou, por ser leproso, numa casa separada, porque foi excluído da casa do Senhor. E Jotão, seu filho, tinha o encargo da casa do rei, julgando o povo da terra.
²² Quanto ao mais dos atos de Uzias, tanto os primeiros como os últimos, o profeta Isaías, filho de Amós, o escreveu.
²³ E dormiu Uzias com seus pais, e o sepultaram com seus pais no campo do sepulcro que era dos reis; porque disseram: Leproso é. E Jotão, seu filho, reinou em seu lugar.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que aconteceu com Uzias quando ele, movido pelo orgulho, tentou queimar incenso no Templo (função exclusiva dos sacerdotes)?",
                        opcoes: [
                            { numero: 1, texto: "Ele foi coroado novamente", correta: false },
                            { numero: 2, texto: "A lepra lhe saiu na testa imediatamente", correta: true },
                            { numero: 3, texto: "Ele caiu em sono profundo", correta: false },
                            { numero: 4, texto: "O Templo se transformou em ouro", correta: false }
                        ],
                        explicacao: "2 Crônicas 26:19 - ...a lepra lhe saiu na testa perante os sacerdotes, na casa do Senhor...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Uzias ficou famoso por suas invenções militares. O que ele colocou nas torres de Jerusalém?",
                        opcoes: [
                            { numero: 1, texto: "Lanças de fogo", correta: false },
                            { numero: 2, texto: "Espelhos gigantes", correta: false },
                            { numero: 3, texto: "Máquinas para atirar flechas e grandes pedras", correta: true },
                            { numero: 4, texto: "Sinos de alerta", correta: false }
                        ],
                        explicacao: "2 Crônicas 26:15 - Também fez em Jerusalém máquinas... para atirarem flechas e grandes pedras.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        27: {
            titulo: "O Reinado de Jotão",
            texto: ` ¹ Tinha Jotão vinte e cinco anos de idade, quando começou a reinar, e reinou dezesseis anos em Jerusalém; e era o nome de sua mãe Jerusa, filha de Zadoque.
² E fez o que era reto aos olhos do Senhor, conforme a tudo o que fizera Uzias, seu pai, exceto que não entrou no templo do Senhor. E o povo ainda se corrompia.
³ Ele edificou a porta superior da casa do Senhor, e também edificou muitas obras sobre o muro de Ofel.
⁴ Também edificou cidades nas montanhas de Judá, e edificou castelos e torres nos bosques.
⁵ Ele também guerreou contra o rei dos filhos de Amom, e prevaleceu sobre eles, de modo que os filhos de Amom naquele ano lhe deram cem talentos de prata, e dez mil coros de trigo, e dez mil de cevada; isto lhe trouxeram os filhos de Amom também no segundo e no terceiro ano.
⁶ Assim se fortificou Jotão, porque dirigiu os seus caminhos na presença do Senhor seu Deus.
⁷ Ora, o restante dos atos de Jotão, e todas as suas guerras e os seus caminhos, eis que estão escritos no livro dos reis de Israel e de Judá.
⁸ Tinha vinte e cinco anos de idade, quando começou a reinar, e reinou dezesseis anos em Jerusalém.
⁹ E dormiu Jotão com seus pais, e sepultaram-no na cidade de Davi; e Acaz, seu filho, reinou em seu lugar.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que o rei Jotão se tornou poderoso perante o Senhor seu Deus?",
                        opcoes: [
                            { numero: 1, texto: "Porque preparou os seus caminhos diante do Senhor", correta: true },
                            { numero: 2, texto: "Porque tinha muito ouro", correta: false },
                            { numero: 3, texto: "Porque nunca saiu para a guerra", correta: false },
                            { numero: 4, texto: "Porque construiu muitas estátuas", correta: false }
                        ],
                        explicacao: "2 Crônicas 27:6 - Assim Jotão se tornou poderoso, porque preparou os seus caminhos diante do Senhor seu Deus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        28: {
            titulo: "A Impiedade de Acaz",
            texto: ` ¹ Tinha Acaz vinte anos de idade, quando começou a reinar, e dezesseis anos reinou em Jerusalém; e não fez o que era reto aos olhos do Senhor, como Davi, seu pai.
² Antes andou nos caminhos dos reis de Israel, e, além disso, fez imagens fundidas a Baalins.
³ Também queimou incenso no vale do filho de Hinom, e queimou a seus filhos no fogo, conforme as abominações dos gentios que o Senhor tinha expulsado de diante dos filhos de Israel.
⁴ Também sacrificou, e queimou incenso nos altos e nos outeiros, como também debaixo de toda a árvore verde.
⁵ Por isso o Senhor seu Deus o entregou na mão do rei dos sírios, os quais o feriram, e levaram dele em cativeiro uma grande multidão de presos, que trouxeram a Damasco; também foi entregue na mão do rei de Israel, o qual lhe infligiu grande derrota.
⁶ Porque Peca, filho de Remalias, matou em Judá, num só dia, cento e vinte mil, todos homens valentes; porquanto deixaram ao Senhor Deus de seus pais.
⁷ E Zicri, homem valente de Efraim, matou a Maasias, filho do rei, e a Azricão, o mordomo, e a Elcana, o segundo depois do rei.
⁸ E os filhos de Israel levaram presos de seus irmãos duzentos mil, mulheres, filhos e filhas; e também saquearam deles grande despojo, que levaram para Samaria.
⁹ Mas estava ali um profeta do Senhor, cujo nome era Odede, o qual saiu ao encontro do exército que vinha para Samaria, e lhe disse: Eis que, irando-se o Senhor Deus de vossos pais contra Judá, os entregou na vossa mão, e vós os matastes com uma raiva tal, que chegou até aos céus.
¹⁰ E agora vós cuidais em sujeitar a vós os filhos de Judá e Jerusalém, como cativos e cativas; porventura não sois vós mesmos culpados contra o Senhor vosso Deus?
¹¹ Agora, pois, ouvi-me, e tornai a enviar os prisioneiros que trouxestes cativos de vossos irmãos; porque o ardor da ira do Senhor está sobre vós.
¹² Então se levantaram alguns homens dentre os cabeças dos filhos de Efraim, a saber, Azarias, filho de Joanã, Berequias, filho de Mesilemote, Jeizquias, filho de Salum, e Amasa, filho de Hadlai, contra os que voltavam da batalha.
¹³ E lhes disseram: Não fareis entrar aqui estes cativos, porque, além da nossa culpa contra o Senhor, vós intentais acrescentar mais a nossos pecados e a nossas culpas, sendo que já temos grande culpa, e já o ardor da ira está sobre Israel.
¹⁴ Então os homens armados deixaram os cativos e o despojo diante dos príncipes e de toda a congregação.
¹⁵ E os homens que foram apontados por seus nomes se levantaram, e tomaram os cativos, e vestiram do despojo a todos os que dentre eles estavam nus; e vestiram-nos, e calçaram-nos, e deram-lhes de comer e de beber, e os ungiram, e a todos os que estavam fracos levaram sobre jumentos, e conduziram-nos a Jericó, à cidade das palmeiras, a seus irmãos. Depois voltaram para Samaria.
¹⁶ Naquele tempo o rei Acaz mandou pedir aos reis da Assíria que o ajudassem.
¹⁷ Porque outra vez os edomitas vieram, e feriram a Judá, e levaram presos em cativeiro.
¹⁸ Também os filisteus deram sobre as cidades da campina e do sul de Judá, e tomaram a Bete-Semes, e a Aijalom, e a Gederote e a Socó, e os lugares da sua jurisdição, e a Timna, e os lugares da sua jurisdição, e a Ginzo, e os lugares da sua jurisdição; e habitaram ali.
¹⁹ Porque o Senhor humilhou a Judá por causa de Acaz, rei de Israel; porque este se houve desenfreadamente em Judá, havendo prevaricado grandemente contra o Senhor.
²⁰ E veio a ele Tiglate-Pileser, rei da Assíria; porém o pôs em aperto, e não o fortaleceu.
²¹ Porque Acaz tomou despojos da casa do Senhor, e da casa do rei, e dos príncipes, e os deu ao rei da Assíria; porém não o ajudou.
²² E ao tempo em que este o apertou, então ainda mais transgrediu contra o Senhor, tal era o rei Acaz.
²³ Porque sacrificou aos deuses de Damasco, que o feriram e disse: Visto que os deuses dos reis da Síria os ajudam, eu lhes sacrificarei, para que me ajudem a mim. Porém eles foram a sua ruína, e de todo o Israel.
²⁴ E ajuntou Acaz os utensílios da casa de Deus, e fez em pedaços os utensílios da casa de Deus, e fechou as portas da casa do Senhor, e fez para si altares em todos os cantos de Jerusalém.
²⁵ Também em cada cidade de Judá fez altos para queimar incenso a outros deuses; assim provocou à ira o Senhor Deus de seus pais.
²⁶ Ora, o restante dos seus atos e de todos os seus caminhos, tanto os primeiros como os últimos, eis que estão escritos no livro dos reis de Judá e de Israel.
²⁷ E dormiu Acaz com seus pais, e o sepultaram na cidade, em Jerusalém; porém não o puseram nos sepulcros dos reis de Israel; e Ezequias, seu filho, reinou em seu lugar.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o rei Acaz fez com as portas da casa do Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Pintou-as de dourado", correta: false },
                            { numero: 2, texto: "Fechou-as totalmente", correta: true },
                            { numero: 3, texto: "Aumentou o tamanho delas", correta: false },
                            { numero: 4, texto: "Trocou-as por portas de ferro", correta: false }
                        ],
                        explicacao: "2 Crônicas 28:24 - ...e fechou as portas da casa do Senhor, e fez para si altares em todos os cantos de Jerusalém.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        29: {
            titulo: "Ezequias Purifica o Templo",
            texto: ` ¹ Tinha Ezequias vinte e cinco anos de idade, quando começou a reinar, e reinou vinte e nove anos em Jerusalém; e era o nome de sua mãe Abia, filha de Zacarias.
² E fez o que era reto aos olhos do Senhor, conforme a tudo quanto fizera Davi, seu pai.
³ Ele, no primeiro ano do seu reinado, no primeiro mês, abriu as portas da casa do Senhor, e as reparou.
⁴ E trouxe os sacerdotes, e os levitas, e ajuntou-os na praça oriental,
⁵ E lhes disse: Ouvi-me, ó levitas, santificai-vos agora, e santificai a casa do Senhor Deus de vossos pais, e tirai do santuário a imundícia.
⁶ Porque nossos pais transgrediram, e fizeram o que era mau aos olhos do Senhor nosso Deus, e o deixaram, e desviaram os seus rostos do tabernáculo do Senhor, e lhe deram as costas.
⁷ Também fecharam as portas do alpendre, e apagaram as lâmpadas, e não queimaram incenso nem ofereceram holocaustos no santuário ao Deus de Israel.
⁸ Por isso veio grande ira do Senhor sobre Judá e Jerusalém, e os entregou à perturbação, à assolação, e ao escárnio, como vós o estais vendo com os vossos olhos.
⁹ Porque eis que nossos pais caíram à espada, e nossos filhos, e nossas filhas, e nossas mulheres; por isso estiveram em cativeiro.
¹⁰ Agora me tem vindo ao coração, que façamos uma aliança com o Senhor Deus de Israel, para que se desvie de nós o ardor da sua ira.
¹¹ Agora, filhos meus, não sejais negligentes; pois o Senhor vos tem escolhido para estardes diante dele para o servirdes, e para serdes seus ministros e queimadores de incenso.
¹² Então se levantaram os levitas, Maate, filho de Amasai, e Joel, filho de Azarias, dos filhos dos coatitas; e dos filhos de Merari, Quis, filho de Abdi, e Azarias, filho de Jealelel; e dos gersonitas, Joá, filho de Zima, e Éden, filho de Joá;
¹³ E dentre os filhos de Elisafã, Sinri e Jeuel; dentre os filhos de Asafe, Zacarias e Matanias;
¹⁴ E dentre os filhos de Hemam, Jeuel e Simei; e dentre os filhos de Jedutum, Semaías e Uziel.
¹⁵ E ajuntaram a seus irmãos, e santificaram-se e vieram conforme ao mandado do rei, pelas palavras do Senhor, para purificarem a casa do Senhor.
¹⁶ E os sacerdotes entraram na casa do Senhor, para a purificar, e tiraram para fora, ao pátio da casa do Senhor, toda a imundícia que acharam no templo do Senhor; e os levitas a tomaram, para a levarem para fora, ao ribeiro de Cedrom.
¹⁷ Começaram, pois, a santificar no primeiro dia, do primeiro mês; e ao oitavo dia do mês vieram ao alpendre do Senhor, e santificaram a casa do Senhor em oito dias; e no dia décimo sexto do primeiro mês acabaram.
¹⁸ Então foram ter com o rei Ezequias, e disseram: Já purificamos toda a casa do Senhor, como também o altar do holocausto com todos os seus utensílios e a mesa da proposição com todos os seus utensílios.
¹⁹ Também todos os objetos que o rei Acaz no seu reinado lançou fora, na sua transgressão, já preparamos e santificamos; e eis que estão diante do altar do Senhor.
²⁰ Então o rei Ezequias se levantou de madrugada, e reuniu os líderes da cidade, e subiu à casa do Senhor.
²¹ E trouxeram sete novilhos e sete carneiros, e sete cordeiros e sete bodes, para sacrifício pelo pecado, pelo reino, e pelo santuário, e por Judá, e disse aos filhos de Arão, os sacerdotes, que os oferecessem sobre o altar do Senhor.
²² E eles mataram os bois, e os sacerdotes tomaram o sangue e o aspergiram sobre o altar; também mataram os carneiros, e aspergiram o sangue sobre o altar; semelhantemente mataram os cordeiros, e aspergiram o sangue sobre o altar.
²³ Então trouxeram os bodes para sacrifício pelo pecado, perante o rei e a congregação, e lhes impuseram as suas mãos.
²⁴ E os sacerdotes os mataram, e com o seu sangue fizeram expiação do pecado sobre o altar, para reconciliar a todo o Israel; porque o rei tinha ordenado que se fizesse aquele holocausto e sacrifício pelo pecado, por todo o Israel.
²⁵ E pôs os levitas na casa do Senhor com címbalos, com saltérios, e com harpas, conforme ao mandado de Davi e de Gade, o vidente do rei, e do profeta Natã; porque este mandado veio do Senhor, por mão de seus profetas.
²⁶ Estavam, pois, os levitas em pé com os instrumentos de Davi, e os sacerdotes com as trombetas.
²⁷ E Ezequias deu ordem que oferecessem o holocausto sobre o altar; e ao tempo em que começou o holocausto, começou também o canto do Senhor, com as trombetas e com os instrumentos de Davi, rei de Israel.
²⁸ E toda a congregação se prostrou, quando entoavam o canto, e as trombetas eram tocadas; tudo isto até o holocausto se acabar.
²⁹ E acabando de o oferecer, o rei e todos quantos com ele se achavam se prostraram e adoraram.
³⁰ Então o rei Ezequias e os príncipes disseram aos levitas que louvassem ao Senhor com as palavras de Davi, e de Asafe, o vidente. E o louvaram com alegria e se inclinaram e adoraram.
³¹ E respondeu Ezequias, dizendo: Agora vos consagrastes a vós mesmos ao Senhor; chegai-vos e trazei sacrifícios e ofertas de louvor à casa do Senhor. E a congregação trouxe sacrifícios e ofertas de louvor, e todos os dispostos de coração trouxeram holocaustos.
³² E o número dos holocaustos, que a congregação trouxe, foi de setenta bois, cem carneiros, duzentos cordeiros; tudo isto em holocausto para o Senhor.
³³ Houve, também, de coisas consagradas, seiscentos bois e três mil ovelhas.
³⁴ Eram, porém, os sacerdotes mui poucos, e não podiam esfolar a todos os holocaustos; pelo que seus irmãos os levitas os ajudaram, até a obra se acabar, e até que os outros sacerdotes se santificaram; porque os levitas foram mais retos de coração, para se santificarem, do que os sacerdotes.
³⁵ E houve também holocaustos em abundância, com a gordura das ofertas pacíficas, e com as ofertas de libação para os holocaustos. Assim se restabeleceu o ministério da casa do Senhor.
³⁶ E Ezequias, e todo o povo se alegraram, por causa daquilo que Deus tinha preparado para o povo; porque apressadamente se fez esta obra.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Em qual ano do seu reinado Ezequias abriu as portas da casa do Senhor e as reparou?",
                        opcoes: [
                            { numero: 1, texto: "No décimo ano", correta: false },
                            { numero: 2, texto: "No primeiro ano, no primeiro mês", correta: true },
                            { numero: 3, texto: "No último ano de sua vida", correta: false },
                            { numero: 4, texto: "Após vencer os assírios", correta: false }
                        ],
                        explicacao: "2 Crônicas 29:3 - No primeiro ano do seu reinado, no primeiro mês, abriu as portas da casa do Senhor e as reparou.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Ezequias ordenou que os levitas fizessem com a imundícia retirada do santuário?",
                        opcoes: [
                            { numero: 1, texto: "Que a enterrassem no deserto", correta: false },
                            { numero: 2, texto: "Que a levassem para fora, ao ribeiro de Cedrom", correta: true },
                            { numero: 3, texto: "Que a queimassem dentro do Templo", correta: false },
                            { numero: 4, texto: "Que a guardassem em vasos", correta: false }
                        ],
                        explicacao: "2 Crônicas 29:16 - ...e levaram toda a imundícia... para fora, ao ribeiro de Cedrom.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        30: {
            titulo: "A Celebração da Páscoa",
            texto: `¹ Depois disto Ezequias enviou mensageiros por todo o Israel e Judá, e escreveu também cartas a Efraim e a Manassés para que viessem à casa do Senhor em Jerusalém, para celebrarem a páscoa ao Senhor Deus de Israel.
² Porque o rei tivera conselho com os seus príncipes, e com toda a congregação em Jerusalém, para celebrarem a páscoa no segundo mês.
³ Porquanto não a puderam celebrar no tempo próprio, porque não se tinham santificado sacerdotes em número suficiente, e o povo não se tinha ajuntado em Jerusalém.
⁴ E isto pareceu bem aos olhos do rei, e de toda a congregação.
⁵ E ordenaram que se fizesse passar pregão por todo o Israel, desde Berseba até Dã, para que viessem a celebrar a páscoa ao Senhor Deus de Israel, em Jerusalém; porque muitos não a tinham celebrado como estava escrito.
⁶ Foram, pois, os correios com as cartas, do rei e dos seus príncipes, por todo o Israel e Judá, segundo o mandado do rei, dizendo: Filhos de Israel, convertei-vos ao Senhor Deus de Abraão, de Isaque e de Israel; para que ele se volte para o restante de vós que escapou da mão dos reis da Assíria.
⁷ E não sejais como vossos pais e como vossos irmãos, que transgrediram contra o Senhor Deus de seus pais, pelo que os entregou à desolação como vedes.
⁸ Não endureçais agora a vossa cerviz, como vossos pais; dai a mão ao Senhor, e vinde ao seu santuário que ele santificou para sempre, e servi ao Senhor vosso Deus, para que o ardor da sua ira se desvie de vós.
⁹ Porque, em vos convertendo ao Senhor, vossos irmãos e vossos filhos acharão misericórdia perante os que os levaram cativos, e tornarão a esta terra; porque o Senhor vosso Deus é misericordioso e compassivo, e não desviará de vós o seu rosto, se vos converterdes a ele.
¹⁰ E os correios foram passando de cidade em cidade, pela terra de Efraim e Manassés até Zebulom; porém riram-se e zombaram deles.
¹¹ Todavia alguns de Aser, e de Manassés, e de Zebulom, se humilharam, e vieram a Jerusalém.
¹² E a mão de Deus esteve com Judá, dando-lhes um só coração, para fazerem o mandado do rei e dos príncipes, conforme a palavra do Senhor.
¹³ E ajuntou-se em Jerusalém muito povo, para celebrar a festa dos pães ázimos, no segundo mês; uma congregação mui grande.
¹⁴ E levantaram-se, e tiraram os altares que havia em Jerusalém; também tiraram todos os altares de incenso, e os lançaram no ribeiro de Cedrom.
¹⁵ Então sacrificaram a páscoa no dia décimo quarto do segundo mês; e os sacerdotes e levitas se envergonharam e se santificaram e trouxeram holocaustos à casa do Senhor.
¹⁶ E puseram-se no seu posto, segundo o seu costume, conforme a lei de Moisés, o homem de Deus; e os sacerdotes aspergiram o sangue, tomando-o da mão dos levitas.
¹⁷ Porque havia muitos na congregação que não se tinham santificado; por isso os levitas tinham o encargo de matarem os cordeiros da páscoa por todo aquele que não estava limpo, para o santificarem ao Senhor.
¹⁸ Porque uma multidão do povo, muitos de Efraim e Manassés, Issacar e Zebulom, não se tinham purificado, e contudo comeram a páscoa, não como está escrito; porém Ezequias orou por eles, dizendo: O Senhor, que é bom, perdoa todo aquele
¹⁹ Que tem preparado o seu coração para buscar ao Senhor Deus, o Deus de seus pais, ainda que não esteja purificado segundo a purificação do santuário.
²⁰ E ouviu o Senhor a Ezequias, e sarou o povo.
²¹ E os filhos de Israel, que se acharam em Jerusalém, celebraram a festa dos pães ázimos sete dias com grande alegria; e os levitas e os sacerdotes louvaram ao Senhor de dia em dia, com estrondosos instrumentos ao Senhor.
²² E Ezequias falou benignamente a todos os levitas, que tinham bom entendimento no conhecimento do Senhor; e comeram as ofertas da solenidade por sete dias, oferecendo ofertas pacíficas, e louvando ao Senhor Deus de seus pais.
²³ E, tendo toda a congregação conselho para celebrarem outros sete dias, celebraram ainda sete dias com alegria.
²⁴ Porque Ezequias, rei de Judá, ofereceu à congregação mil novilhos e sete mil ovelhas; e os príncipes ofereceram à congregação mil novilhos e dez mil ovelhas; e os sacerdotes se santificaram em grande número.
²⁵ E alegraram-se, toda a congregação de Judá, e os sacerdotes, e os levitas, toda a congregação de todos os que vieram de Israel, como também os estrangeiros que vieram da terra de Israel e os que habitavam em Judá.
²⁶ E houve grande alegria em Jerusalém; porque desde os dias de Salomão, filho de Davi, rei de Israel, tal não houve em Jerusalém.
²⁷ Então os sacerdotes e os levitas se levantaram e abençoaram o povo; e a sua voz foi ouvida; porque a sua oração chegou até à santa habitação de Deus, até aos céus.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Ezequias enviou cartas a todo o Israel e Judá convidando o povo para qual festa?",
                        opcoes: [
                            { numero: 1, texto: "Festa do Natal", correta: false },
                            { numero: 2, texto: "A Páscoa do Senhor", correta: true },
                            { numero: 3, texto: "Festa da Colheita", correta: false },
                            { numero: 4, texto: "Aniversário do Rei", correta: false }
                        ],
                        explicacao: "2 Crônicas 30:1 - Depois disto, Ezequias enviou mensageiros por todo o Israel e Judá... para celebrarem a páscoa ao Senhor Deus de Israel.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como reagiram muitas pessoas das tribos do Norte (Efraim, Manassés e Zebulom) ao convite dos mensageiros de Ezequias?",
                        opcoes: [
                            { numero: 1, texto: "Aceitaram imediatamente", correta: false },
                            { numero: 2, texto: "Riram-se e zombaram deles", correta: true },
                            { numero: 3, texto: "Ficaram com medo", correta: false },
                            { numero: 4, texto: "Não entenderam a mensagem", correta: false }
                        ],
                        explicacao: "2 Crônicas 30:10 - ...porém riram-se e zombaram deles.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/segundo_cronicas.js (Parte Final: Capítulos 31-36)

        31: {
            titulo: "A Generosidade do Povo",
            texto: ` 
            ¹ E acabando tudo isto, todos os israelitas que ali se achavam saíram às cidades de Judá e quebraram as estátuas, cortaram os bosques, e derrubaram os altos e altares por toda Judá e Benjamim, como também em Efraim e Manassés, até que tudo destruíram; então tornaram todos os filhos de Israel, cada um para sua possessão, para as cidades deles.
² E estabeleceu Ezequias as turmas dos sacerdotes e levitas, segundo as suas turmas, a cada um segundo o seu ministério; aos sacerdotes e levitas para o holocausto e para as ofertas pacíficas, para ministrarem, louvarem, e cantarem, às portas dos arraiais do Senhor.
³ Também estabeleceu a parte da fazenda do rei para os holocaustos; para os holocaustos da manhã e da tarde, e para os holocaustos dos sábados, e das luas novas, e das solenidades; como está escrito na lei do Senhor.
⁴ E ordenou ao povo, que morava em Jerusalém, que desse a parte dos sacerdotes e levitas, para que eles pudessem se dedicar à lei do Senhor.
⁵ E, depois que se divulgou esta ordem, os filhos de Israel trouxeram muitas primícias de trigo, mosto, azeite, mel, e de todo o produto do campo; também os dízimos de tudo trouxeram em abundância.
⁶ E os filhos de Israel e de Judá, que habitavam nas cidades de Judá, também trouxeram dízimos dos bois e das ovelhas, e dízimos das coisas dedicadas que foram consagradas ao Senhor seu Deus; e fizeram muitos montões.
⁷ No terceiro mês começaram a fazer os primeiros montões; e no sétimo mês acabaram.
⁸ Vindo, pois, Ezequias e os príncipes, e vendo aqueles montões, bendisseram ao Senhor e ao seu povo Israel.
⁹ E perguntou Ezequias aos sacerdotes e aos levitas acerca daqueles montões.
¹⁰ E Azarias, o sumo sacerdote da casa de Zadoque, lhe respondeu, dizendo: Desde que se começou a trazer estas ofertas à casa do Senhor, temos comido e temos fartado, e ainda sobejou em abundância; porque o Senhor abençoou ao seu povo, e sobejou esta abastança.
¹¹ Então ordenou Ezequias que se preparassem câmaras na casa do Senhor, e as prepararam.
¹² Ali recolheram fielmente as ofertas, e os dízimos, e as coisas consagradas; e tinham cargo disto Conanias, o levita principal, e Simei, seu irmão, o segundo.
¹³ E Jeiel, Azarias, Naate, Asael, Jerimote, Jozabade, Eliel, Ismaquias, Maate, e Benaia, eram superintendentes sob a direção de Conanias e Simei, seu irmão, por mandado do rei Ezequias, e de Azarias, líder da casa de Deus.
¹⁴ E Coré, filho de Imna, o levita, porteiro do lado do oriente, estava encarregado das ofertas voluntárias que se faziam a Deus, para distribuir as ofertas alçadas do Senhor e as coisas santíssimas.
¹⁵ E debaixo das suas ordens estavam Éden, Miniamim, Jesua, Semaías, Amarias e Secanias, nas cidades dos sacerdotes, para distribuírem com fidelidade a seus irmãos, segundo as suas turmas, tanto aos pequenos como aos grandes;
¹⁶ Exceto os que estavam contados pelas genealogias dos homens, da idade de três anos para cima, a todos os que entravam na casa do Senhor, para a obra de cada dia no seu dia, pelo seu ministério nas suas guardas, segundo as suas turmas.
¹⁷ Quanto ao registro dos sacerdotes foi ele feito segundo as suas famílias, e o dos levitas, da idade de vinte anos para cima, foi feito segundo as suas guardas nas suas turmas;
¹⁸ Como também conforme às genealogias, com todas as suas crianças, suas mulheres, e seus filhos, e suas filhas, por toda a congregação. Porque com fidelidade estes se santificavam nas coisas consagradas.
¹⁹ Também dentre os filhos de Arão, os sacerdotes, que estavam nos campos dos arrabaldes das suas cidades, em cada cidade, havia homens que foram designados pelos seus nomes para distribuírem as porções a todo o homem entre os sacerdotes e a todos os que estavam contados entre os levitas.
²⁰ E assim fez Ezequias em todo o Judá; e fez o que era bom, e reto, e verdadeiro, perante o Senhor seu Deus.
²¹ E toda a obra que começou no serviço da casa de Deus, e na lei, e nos mandamentos, para buscar a seu Deus, ele a fez de todo o seu coração, e prosperou.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que aconteceu quando Ezequias ordenou que o povo desse a porção dos sacerdotes e levitas?",
                        opcoes: [
                            { numero: 1, texto: "O povo reclamou e não deu nada", correta: false },
                            { numero: 2, texto: "Trouxeram em abundância as primícias e o dízimo de tudo, formando grandes montões", correta: true },
                            { numero: 3, texto: "O rei teve que confiscar os bens", correta: false },
                            { numero: 4, texto: "Os sacerdotes recusaram a oferta", correta: false }
                        ],
                        explicacao: "2 Crônicas 31:5-6 - ...os filhos de Israel e de Judá trouxeram também o dízimo... e fizeram montões e montões.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        32: {
            titulo: "O Livramento contra Senaqueribe",
            texto: ` ¹ Depois destas coisas e desta verdade, veio Senaqueribe, rei da Assíria, e entrou em Judá, e acampou-se contra as cidades fortificadas, e intentou apoderar-se delas.
² Vendo, pois, Ezequias que Senaqueribe vinha, e que estava resolvido contra Jerusalém,
³ Teve conselho com os seus príncipes e os seus homens valentes, para que se tapassem as fontes das águas que havia fora da cidade; e eles o ajudaram.
⁴ Assim muito povo se ajuntou, e tapou todas as fontes, como também o ribeiro que se estendia pelo meio da terra, dizendo: Por que viriam os reis da Assíria, e achariam tantas águas?
⁵ E ele se animou, e edificou todo o muro quebrado até às torres, e levantou o outro muro por fora; e fortificou a Milo na cidade de Davi, e fez armas e escudos em abundância.
⁶ E pôs capitães de guerra sobre o povo, e reuniu-os na praça da porta da cidade, e falou-lhes ao coração, dizendo:
⁷ Esforçai-vos, e tende bom ânimo; não temais, nem vos espanteis, por causa do rei da Assíria, nem por causa de toda a multidão que está com ele, porque há um maior conosco do que com ele.
⁸ Com ele está o braço de carne, mas conosco o Senhor nosso Deus, para nos ajudar, e para guerrear nossas batalhas. E o povo descansou nas palavras de Ezequias, rei de Judá.
⁹ Depois disto Senaqueribe, rei da Assíria, enviou os seus servos a Jerusalém (ele porém estava diante de Laquis, com todas as suas forças), a Ezequias, rei de Judá, e a todo o Judá que estava em Jerusalém, dizendo:
¹⁰ Assim diz Senaqueribe, rei da Assíria: Em que confiais vós, para vos deixardes sitiar em Jerusalém?
¹¹ Porventura não vos incita Ezequias, para vos entregar para morrerdes à fome e à sede, dizendo: O Senhor nosso Deus nos livrará das mãos do rei da Assíria?
¹² Não é Ezequias o mesmo que tirou os seus altos e os seus altares, e falou a Judá e a Jerusalém, dizendo: Diante de um único altar vos prostrareis, e sobre ele queimareis incenso?
¹³ Não sabeis vós o que eu e meus pais fizemos a todos os povos das terras? Porventura puderam de qualquer maneira os deuses das nações daquelas terras livrar o seu país da minha mão?
¹⁴ Qual é, de todos os deuses daquelas nações que meus pais destruíram, o que pôde livrar o seu povo da minha mão, para que vosso Deus vos possa livrar da minha mão?
¹⁵ Agora, pois, não vos engane Ezequias, nem vos incite assim, nem lhe deis crédito; porque nenhum deus de nação alguma, nem de reino algum, pôde livrar o seu povo da minha mão, nem da mão de meus pais; quanto menos vos poderá livrar o vosso Deus da minha mão?
¹⁶ Também seus servos falaram ainda mais contra o Senhor Deus, e contra Ezequias, o seu servo.
¹⁷ Escreveu também cartas, para blasfemar do Senhor Deus de Israel, e para falar contra ele, dizendo: Assim como os deuses das nações das terras não livraram o seu povo da minha mão, assim também o Deus de Ezequias não livrará o seu povo da minha mão.
¹⁸ E clamaram em alta voz em judaico contra o povo de Jerusalém, que estava em cima do muro, para os atemorizar e os perturbar, para que tomassem a cidade.
¹⁹ E falaram do Deus de Jerusalém, como dos deuses dos povos da terra, obras das mãos dos homens.
²⁰ Porém o rei Ezequias e o profeta Isaías, filho de Amós, oraram contra isso, e clamaram ao céu.
²¹ Então o Senhor enviou um anjo que destruiu a todos os homens valentes, e os líderes, e os capitães no arraial do rei da Assíria; e envergonhado voltou à sua terra; e, entrando na casa de seu deus, alguns dos seus próprios filhos, o mataram ali à espada.
²² Assim livrou o Senhor a Ezequias, e aos moradores de Jerusalém, da mão de Senaqueribe, rei da Assíria, e da mão de todos; e de todos os lados os guiou.
²³ E muitos traziam a Jerusalém presentes ao Senhor, e coisas preciosíssimas a Ezequias, rei de Judá, de modo que depois disto foi exaltado perante os olhos de todas as nações.
²⁴ Naqueles dias Ezequias adoeceu mortalmente; e orou ao Senhor, o qual lhe falou, e lhe deu um sinal.
²⁵ Mas não correspondeu Ezequias ao benefício que lhe fora feito; porque o seu coração se exaltou; por isso veio grande ira sobre ele, e sobre Judá e Jerusalém.
²⁶ Ezequias, porém, se humilhou pela exaltação do seu coração, ele e os habitantes de Jerusalém; e a grande ira do Senhor não veio sobre eles, nos dias de Ezequias.
²⁷ E teve Ezequias riquezas e glória em grande abundância; proveu-se de tesouraria para prata, ouro, pedras preciosas, especiarias, escudos, e toda a espécie de objetos desejáveis.
²⁸ Também de armazéns para a colheita do trigo, e do vinho, e do azeite; e de estrebarias para toda a espécie de animais e de currais para os rebanhos.
²⁹ Edificou também cidades, e possuiu ovelhas e vacas em abundância; porque Deus lhe tinha dado muitíssimas possessões.
³⁰ Também o mesmo Ezequias tapou o manancial superior das águas de Giom, e as fez correr por baixo para o ocidente da cidade de Davi; porque Ezequias prosperou em todas as suas obras.
³¹ Contudo, no tocante aos embaixadores dos príncipes de Babilônia, que foram enviados a ele, a perguntarem acerca do prodígio que se fez naquela terra, Deus o desamparou, para prová-lo, para saber tudo o que havia no seu coração.
³² Quanto aos demais atos de Ezequias, e as suas boas obras, eis que estão escritos na visão do profeta Isaías, filho de Amós, e no livro dos reis de Judá e de Israel.
³³ E dormiu Ezequias com seus pais, e o sepultaram no mais alto dos sepulcros dos filhos de Davi; e todo o Judá e os habitantes de Jerusalém lhe fizeram honras na sua morte; e Manassés, seu filho, reinou em seu lugar.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Ezequias encorajou o povo diante da invasão assíria?",
                        opcoes: [
                            { numero: 1, texto: "Dizendo que os assírios eram fracos", correta: false },
                            { numero: 2, texto: "Com ele está o braço de carne, mas conosco o Senhor nosso Deus", correta: true },
                            { numero: 3, texto: "Prometendo ouro aos soldados", correta: false },
                            { numero: 4, texto: "Mostrando as novas muralhas", correta: false }
                        ],
                        explicacao: "2 Crônicas 32:8 - Com ele está o braço de carne, mas conosco o Senhor nosso Deus, para nos ajudar...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        33: {
            titulo: "Manassés: Do Pecado ao Arrependimento",
            texto: `¹ Tinha Manassés doze anos de idade, quando começou a reinar, e cinquenta e cinco anos reinou em Jerusalém.
² E fez o que era mau aos olhos do Senhor, conforme às abominações dos gentios que o Senhor lançara fora de diante dos filhos de Israel.
³ Porque tornou a edificar os altos que Ezequias, seu pai, tinha derrubado; e levantou altares aos Baalins, e fez bosques, e prostrou-se diante de todo o exército dos céus, e o serviu.
⁴ E edificou altares na casa do Senhor, da qual o Senhor tinha falado: Em Jerusalém estará o meu nome eternamente.
⁵ Edificou altares a todo o exército dos céus, em ambos os átrios da casa do Senhor.
⁶ Fez ele também passar seus filhos pelo fogo no vale do filho de Hinom, e usou de adivinhações e de agouros, e de feitiçarias, e consultou adivinhos e encantadores, e fez muitíssimo mal aos olhos do Senhor, para o provocar à ira.
⁷ Também pôs uma imagem de escultura do ídolo que tinha feito, na casa de Deus, da qual Deus tinha falado a Davi e a Salomão seu filho: Nesta casa e em Jerusalém, que escolhi de todas as tribos de Israel, porei o meu nome para sempre.
⁸ E nunca mais removerei o pé de Israel da terra que destinei a vossos pais; contanto que tenham cuidado de fazer tudo o que eu lhes ordenei, conforme a toda a lei, e estatutos, e juízos, dados pela mão de Moisés.
⁹ E Manassés tanto fez errar a Judá e aos moradores de Jerusalém, que fizeram pior do que as nações que o Senhor tinha destruído de diante dos filhos de Israel.
¹⁰ E falou o Senhor a Manassés e ao seu povo, porém não deram ouvidos.
¹¹ Assim o Senhor trouxe sobre eles os capitães do exército do rei da Assíria, os quais prenderam a Manassés com ganchos e, amarrando-o com cadeias, o levaram para Babilônia.
¹² E ele, angustiado, orou deveras ao Senhor seu Deus, e humilhou-se muito perante o Deus de seus pais;
¹³ E fez-lhe oração, e Deus se aplacou para com ele, e ouviu a sua súplica, e tornou a trazê-lo a Jerusalém, ao seu reino. Então conheceu Manassés que o Senhor era Deus.
¹⁴ E depois disto edificou o muro de fora da cidade de Davi, ao ocidente de Giom, no vale, e à entrada da porta do peixe, e ao redor de Ofel, e o levantou muito alto; também pôs capitães de guerra em todas as cidades fortificadas de Judá.
¹⁵ E tirou da casa do Senhor os deuses estranhos e o ídolo, como também todos os altares que tinha edificado no monte da casa do Senhor, e em Jerusalém, e os lançou fora da cidade.
¹⁶ E reparou o altar do Senhor e ofereceu sobre ele sacrifícios de ofertas pacíficas e de louvor; e ordenou a Judá que servisse ao Senhor Deus de Israel.
¹⁷ Contudo o povo ainda sacrificava nos altos, mas somente ao Senhor seu Deus.
¹⁸ O restante dos atos de Manassés, e a sua oração ao seu Deus, e as palavras dos videntes que lhe falaram no nome do Senhor Deus de Israel, eis que estão nas crônicas dos reis de Israel.
¹⁹ E a sua oração, e como Deus se aplacou para com ele, e todo o seu pecado, e a sua transgressão, e os lugares onde edificou altos, e pôs bosques e imagens de escultura, antes que se humilhasse, eis que estão escritos nos livros dos videntes.
²⁰ E dormiu Manassés com seus pais, e o sepultaram em sua casa. Amom, seu filho, reinou em seu lugar.
²¹ Tinha Amom vinte e dois anos de idade quando começou a reinar, e dois anos reinou em Jerusalém.
²² E fez o que era mau aos olhos do Senhor, como havia feito Manassés, seu pai; porque Amom sacrificou a todas as imagens de escultura que Manassés, seu pai tinha feito, e as serviu.
²³ Mas não se humilhou perante o Senhor, como Manassés, seu pai, se humilhara; antes multiplicou Amom os seus delitos.
²⁴ E conspiraram contra ele os seus servos, e o mataram em sua casa.
²⁵ Porém o povo da terra feriu a todos quantos conspiraram contra o rei Amom; e o povo da terra fez reinar em seu lugar a Josias, seu filho.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que aconteceu com Manassés enquanto estava preso com ganchos e cadeias na Babilônia?",
                        opcoes: [
                            { numero: 1, texto: "Ele morreu na prisão", correta: false },
                            { numero: 2, texto: "Ele se humilhou muito perante Deus e orou, e Deus o ouviu", correta: true },
                            { numero: 3, texto: "Ele amaldiçoou a Israel", correta: false },
                            { numero: 4, texto: "Ele fugiu da prisão", correta: false }
                        ],
                        explicacao: "2 Crônicas 33:12-13 - E ele, angustiado, orou deveras ao Senhor seu Deus, e humilhou-se muito...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        34: {
            titulo: "Josias e o Livro Achado",
            texto: `¹ Tinha Josias oito anos quando começou a reinar, e trinta e um anos reinou em Jerusalém.
² E fez o que era reto aos olhos do Senhor; e andou nos caminhos de Davi, seu pai, sem se desviar deles nem para a direita nem para a esquerda.
³ Porque no oitavo ano do seu reinado, sendo ainda moço, começou a buscar o Deus de Davi, seu pai; e no duodécimo ano começou a purificar a Judá e a Jerusalém, dos altos, e dos bosques, e das imagens de escultura e de fundição.
⁴ E derrubaram perante ele os altares de Baalins; e despedaçou as imagens, que estavam acima deles; e os bosques, e as imagens de escultura e de fundição quebrou e reduziu a pó, e o aspergiu sobre as sepulturas dos que lhes tinham sacrificado.
⁵ E os ossos dos sacerdotes queimou sobre os seus altares; e purificou a Judá e a Jerusalém.
⁶ O mesmo fez nas cidades de Manassés, e de Efraim, e de Simeão, e ainda até Naftali, em seus lugares assolados ao redor.
⁷ E, tendo derrubado os altares, e os bosques, e as imagens de escultura, até reduzi-los a pó, e tendo despedaçado todas as imagens em toda a terra de Israel, então voltou para Jerusalém.
⁸ E no ano décimo oitavo do seu reinado, havendo já purificado a terra e a casa, enviou a Safã, filho de Azalias, e a Maaseias, governador da cidade, e a Joá, filho de Joacaz, cronista, para repararem a casa do Senhor seu Deus.
⁹ E foram a Hilquias, sumo sacerdote, e deram o dinheiro que se tinha trazido à casa de Deus, e que os levitas, que guardavam a entrada tinham recebido da mão de Manassés, e de Efraim, e de todo o restante de Israel, como também de todo o Judá e Benjamim, e dos habitantes de Jerusalém.
¹⁰ E eles o entregaram aos que tinham o encargo da obra, e superintendiam a casa do Senhor; e estes o deram aos que faziam a obra, e trabalhavam na casa do Senhor, para consertarem e repararem a casa.
¹¹ E deram-no aos carpinteiros e aos edificadores, para comprarem pedras lavradas, e madeiras para as junturas e para servirem de vigas para as casas que os reis de Judá tinham destruído.
¹² E estes homens trabalhavam fielmente na obra; e os superintendentes sobre eles eram: Jaate e Obadias, levitas, dos filhos de Merari, como também Zacarias e Mesulão, dos filhos dos coatitas, para adiantarem a obra; e todos os levitas que eram entendidos em instrumentos de música.
¹³ Estavam também sobre os carregadores e dirigiam todos os que trabalhavam em alguma obra; e dentre os levitas havia escrivães, oficiais e porteiros.
¹⁴ E, tirando eles o dinheiro que se tinha trazido à casa do Senhor, Hilquias, o sacerdote, achou o livro da lei do Senhor, dada pela mão de Moisés.
¹⁵ E Hilquias respondeu, e disse a Safã, o escrivão: Achei o livro da lei na casa do Senhor. E Hilquias deu o livro a Safã.
¹⁶ E Safã levou o livro ao rei, e deu-lhe conta, dizendo: Teus servos fazem tudo quanto se lhes encomendou.
¹⁷ E ajuntaram o dinheiro que se achou na casa do Senhor, e o deram na mão dos superintendentes e na mão dos que faziam a obra.
¹⁸ Além disto, Safã, o escrivão, fez saber ao rei, dizendo: O sacerdote Hilquias entregou-me um livro. E Safã leu nele perante o rei.
¹⁹ Sucedeu que, ouvindo o rei as palavras da lei, rasgou as suas vestes.
²⁰ E o rei ordenou a Hilquias, e a Aicão, filho de Safã, e a Abdom, filho de Mica, e a Safã, o escrivão, e a Asaías, servo do rei, dizendo:
²¹ Ide, consultai ao Senhor por mim, e pelos que restam em Israel e em Judá, sobre as palavras deste livro que se achou; porque grande é o furor do Senhor, que se derramou sobre nós; porquanto nossos pais não guardaram a palavra do Senhor, para fazerem conforme a tudo quanto está escrito neste livro.
²² Então Hilquias, e os enviados do rei, foram ter com a profetisa Hulda, mulher de Salum, filho de Tocate, filho de Harás, guarda das vestimentas (e habitava ela em Jerusalém na segunda parte); e falaram-lhe a esse respeito.
²³ E ela lhes disse: Assim diz o Senhor Deus de Israel: Dizei ao homem que vos enviou a mim:
²⁴ Assim diz o Senhor: Eis que trarei mal sobre este lugar, e sobre os seus habitantes, a saber, todas as maldições que estão escritas no livro que se leu perante o rei de Judá.
²⁵ Porque me deixaram, e queimaram incenso perante outros deuses, para me provocarem à ira com todas as obras das suas mãos; portanto o meu furor se derramou sobre este lugar, e não se apagará.
²⁶ Porém ao rei de Judá, que vos enviou a consultar ao Senhor, assim lhe direis: Assim diz o Senhor Deus de Israel, quanto às palavras que ouviste:
²⁷ Porquanto o teu coração se enterneceu, e te humilhaste perante Deus, ouvindo as suas palavras contra este lugar, e contra os seus habitantes, e te humilhaste perante mim, e rasgaste as tuas vestes, e choraste perante mim, também eu te ouvi, diz o Senhor.
²⁸ Eis que te reunirei a teus pais, e tu serás recolhido ao teu sepulcro em paz, e os teus olhos não verão todo o mal que hei de trazer sobre este lugar e sobre os seus habitantes. E tornaram com esta resposta ao rei.
²⁹ Então o rei mandou reunir todos os anciãos de Judá e Jerusalém.
³⁰ E o rei subiu à casa do Senhor, com todos os homens de Judá, e os habitantes de Jerusalém, e os sacerdotes, e os levitas, e todo o povo, desde o maior até ao menor; e ele leu aos ouvidos deles todas as palavras do livro da aliança que fora achado na casa do Senhor.
³¹ E pôs-se o rei em pé em seu lugar, e fez aliança perante o Senhor, para seguirem ao Senhor, e para guardar os seus mandamentos, e os seus testemunhos, e os seus estatutos, com todo o seu coração, e com toda a sua alma, cumprindo as palavras da aliança, que estão escritas naquele livro.
³² E fez com que todos quantos se achavam em Jerusalém e em Benjamim o firmassem; e os habitantes de Jerusalém fizeram conforme a aliança de Deus, o Deus de seus pais.
³³ E Josias tirou todas as abominações de todas as terras que eram dos filhos de Israel; e a todos quantos se achavam em Israel obrigou a que servissem ao Senhor seu Deus. Enquanto ele viveu não se desviaram de seguir o Senhor, o Deus de seus pais.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Com quantos anos Josias começou a reinar e com quantos começou a buscar a Deus?",
                        opcoes: [
                            { numero: 1, texto: "Reinou com 20 e buscou com 30", correta: false },
                            { numero: 2, texto: "Reinou com 8 e no oitavo ano (aos 16) começou a buscar ao Senhor", correta: true },
                            { numero: 3, texto: "Reinou com 15 e buscou com 15", correta: false },
                            { numero: 4, texto: "Reinou com 12 e buscou com 20", correta: false }
                        ],
                        explicacao: "2 Crônicas 34:1-3 - Tinha Josias oito anos quando começou a reinar... no oitavo ano do seu reinado... começou a buscar o Deus de Davi.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        35: {
            titulo: "A Páscoa de Josias",
            texto: `¹ Então Josias celebrou a páscoa ao Senhor em Jerusalém; e mataram o cordeiro da páscoa no décimo quarto dia do primeiro mês.
² E estabeleceu os sacerdotes nos seus cargos, e os animou ao ministério da casa do Senhor.
³ E disse aos levitas que ensinavam a todo o Israel e estavam consagrados ao Senhor: Ponde a arca sagrada na casa que edificou Salomão, filho de Davi, rei de Israel; não tereis mais esta carga aos ombros; agora servi ao Senhor vosso Deus, e ao seu povo Israel.
⁴ E preparai-vos segundo as vossas casas paternas e segundo as vossas turmas, conforme à prescrição de Davi, rei de Israel, e a de Salomão, seu filho.
⁵ E estai no santuário segundo as divisões das casas paternas de vossos irmãos, os filhos do povo; e haja para cada divisão uma parte de uma família de levitas.
⁶ E imolai a páscoa, e santificai-vos, e preparai-a para vossos irmãos, fazendo conforme a palavra do Senhor, dada pela mão de Moisés.
⁷ E ofereceu Josias, aos filhos do povo, cordeiros e cabritos do rebanho, todos para os sacrifícios da páscoa, em número de trinta mil, por todos os que ali se achavam, e de bois três mil; isto era da fazenda do rei.
⁸ Também apresentaram os seus príncipes ofertas voluntárias ao povo, aos sacerdotes e aos levitas: Hilquias, e Zacarias, e Jeiel, líderes da casa de Deus, deram aos sacerdotes para os sacrifícios da páscoa duas mil e seiscentas reses de gado miúdo, e trezentos bois.
⁹ E Conanias, e Semaías, e Natanael, seus irmãos, como também Hasabias, e Jeiel, e Jozabade, chefe dos levitas, apresentaram aos levitas, para os sacrifícios da páscoa, cinco mil reses de gado miúdo, e quinhentos bois.
¹⁰ Assim se preparou o serviço, e puseram-se os sacerdotes nos seus postos, e os levitas nas suas turmas, conforme a ordem do rei,
¹¹ Então imolaram a páscoa; e os sacerdotes aspergiram o sangue recebido das mãos dos levitas que esfolavam as reses.
¹² E puseram de parte os holocaustos para os darem aos filhos do povo, segundo as divisões das casas paternas, para o oferecerem ao Senhor, como está escrito no livro de Moisés; e assim fizeram com os bois.
¹³ E assaram a páscoa no fogo, segundo o rito; e as ofertas sagradas cozeram em panelas, e em caldeirões e em sertãs; e prontamente as repartiram entre todo o povo.
¹⁴ Depois prepararam para si e para os sacerdotes; porque os sacerdotes, filhos de Arão, se ocuparam até à noite com o sacrifício dos holocaustos e da gordura; por isso os levitas prepararam para si e para os sacerdotes, filhos de Arão.
¹⁵ E os cantores, filhos de Asafe, estavam no seu posto, segundo o mandado de Davi, e de Asafe, e de Hemã, e de Jedutum, vidente do rei, como também os porteiros a cada porta; não necessitaram de se desviarem do seu ministério; porquanto seus irmãos, os levitas, preparavam o necessário para eles.
¹⁶ Assim se estabeleceu todo o serviço do Senhor naquele dia, para celebrar a páscoa, e oferecer holocaustos sobre o altar do Senhor, segundo a ordem do rei Josias.
¹⁷ E os filhos de Israel que ali se acharam celebraram a páscoa naquele tempo, e a festa dos pães ázimos, durante sete dias.
¹⁸ Nunca, pois, se celebrou tal páscoa em Israel, desde os dias do profeta Samuel; nem nenhum rei de Israel celebrou tal páscoa como a que celebrou Josias com os sacerdotes, e levitas, e todo o Judá e Israel, que ali se acharam, e os habitantes de Jerusalém.
¹⁹ No décimo oitavo ano do reinado de Josias se celebrou esta páscoa.
²⁰ Depois de tudo isto, havendo Josias já preparado o templo, subiu Neco, rei do Egito, para guerrear contra Carquemis, junto ao Eufrates; e Josias lhe saiu ao encontro.
²¹ Então ele lhe mandou mensageiros, dizendo: Que tenho eu contigo, rei de Judá? Não é contra ti que venho hoje, mas contra a casa que me faz guerra; e disse Deus que me apressasse; guarda-te de te opores a Deus, que é comigo, para que ele não te destrua.
²² Porém Josias não virou dele o seu rosto, antes se disfarçou, para pelejar contra ele; e não deu ouvidos às palavras de Neco, que saíram da boca de Deus; antes veio pelejar no vale de Megido.
²³ E os flecheiros atiraram contra o rei Josias. Então o rei disse a seus servos: Tirai-me daqui, porque estou gravemente ferido.
²⁴ E seus servos o tiraram do carro, e o levaram no segundo carro que tinha, e o trouxeram a Jerusalém; e morreu, e o sepultaram nos sepulcros de seus pais; e todo o Judá e Jerusalém prantearam a Josias.
²⁵ E Jeremias fez uma lamentação sobre Josias; e todos os cantores e cantoras, nas suas lamentações, têm falado de Josias, até ao dia de hoje; porque as estabeleceram por estatuto em Israel; e eis que estão escritas nas lamentações.
²⁶ Quanto ao mais dos atos de Josias, e as suas boas obras, conforme o que está escrito na lei do Senhor,
²⁷ E os seus atos, tanto os primeiros como os últimos, eis que estão escritos no livro dos reis de Israel e de Judá.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como foi descrita a Páscoa celebrada por Josias em Jerusalém?",
                        opcoes: [
                            { numero: 1, texto: "Foi uma festa pequena", correta: false },
                            { numero: 2, texto: "Nunca se celebrara tal páscoa em Israel desde os dias do profeta Samuel", correta: true },
                            { numero: 3, texto: "Foi igual a todas as outras", correta: false },
                            { numero: 4, texto: "O povo não quis participar", correta: false }
                        ],
                        explicacao: "2 Crônicas 35:18 - Nunca, pois, se celebrou tal páscoa em Israel, desde os dias do profeta Samuel...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        36: {
            titulo: "O Cativeiro e o Decreto de Ciro",
            texto: ` ¹ Então o povo da terra tomou a Jeoacaz, filho de Josias, e o fez rei em lugar de seu pai, em Jerusalém.
² Tinha Jeoacaz a idade de vinte e três anos, quando começou a reinar; e três meses reinou em Jerusalém,
³ Porque o rei do Egito o depôs em Jerusalém, e condenou a terra à contribuição de cem talentos de prata e um talento de ouro.
⁴ E o rei do Egito pôs a Eliaquim, irmão de Jeoacaz, rei sobre Judá e Jerusalém, e mudou-lhe o nome em Jeoiaquim; mas a seu irmão Jeoacaz tomou Neco, e levou-o para o Egito.
⁵ Tinha Jeoiaquim vinte e cinco anos de idade, quando começou a reinar, e reinou onze anos em Jerusalém; e fez o que era mau aos olhos do Senhor seu Deus.
⁶ Subiu, pois, contra ele Nabucodonosor, rei de Babilônia, e o amarrou com cadeias, para o levar a Babilônia.
⁷ Também alguns dos vasos da casa do Senhor levou Nabucodonosor a Babilônia, e pô-los no seu templo em Babilônia.
⁸ Quanto ao mais dos atos de Jeoiaquim, e as abominações que fez, e o mais que se achou nele, eis que estão escritos no livro dos reis de Israel e de Judá; e Joaquim, seu filho, reinou em seu lugar.
⁹ Tinha Joaquim a idade de oito anos, quando começou a reinar; e reinou três meses e dez dias em Jerusalém; e fez o que era mau aos olhos do Senhor.
¹⁰ E no decurso de um ano enviou o rei Nabucodonosor, e mandou trazê-lo a Babilônia, com os mais preciosos vasos da casa do Senhor; e pôs a Zedequias, seu irmão, rei sobre Judá e Jerusalém.
¹¹ Tinha Zedequias a idade de vinte e um anos, quando começou a reinar; e onze anos reinou em Jerusalém.
¹² E fez o que era mau aos olhos do Senhor seu Deus; nem se humilhou perante o profeta Jeremias, que falava da parte do Senhor.
¹³ Além disto, também se rebelou contra o rei Nabucodonosor, que o tinha ajuramentado por Deus. Mas endureceu a sua cerviz, e tanto se obstinou no seu coração, que não se converteu ao Senhor Deus de Israel.
¹⁴ Também todos os chefes dos sacerdotes e o povo aumentavam de mais em mais as transgressões, segundo todas as abominações dos gentios; e contaminaram a casa do Senhor, que ele tinha santificado em Jerusalém.
¹⁵ E o Senhor Deus de seus pais, falou-lhes constantemente por intermédio dos mensageiros, porque se compadeceu do seu povo e da sua habitação.
¹⁶ Eles, porém, zombaram dos mensageiros de Deus, e desprezaram as suas palavras, e mofaram dos seus profetas; até que o furor do Senhor tanto subiu contra o seu povo, que mais nenhum remédio houve.
¹⁷ Porque fez subir contra eles o rei dos caldeus, o qual matou os seus jovens à espada, na casa do seu santuário, e não teve piedade nem dos jovens, nem das donzelas, nem dos velhos, nem dos decrépitos; a todos entregou na sua mão.
¹⁸ E todos os vasos da casa de Deus, grandes e pequenos, os tesouros da casa do Senhor, e os tesouros do rei e dos seus príncipes, tudo levou para Babilônia.
¹⁹ E queimaram a casa de Deus, e derrubaram os muros de Jerusalém, e todos os seus palácios queimaram a fogo, destruindo também todos os seus preciosos vasos.
²⁰ E os que escaparam da espada levou para Babilônia; e fizeram-se servos dele e de seus filhos, até ao tempo do reino da Pérsia.
²¹ Para que se cumprisse a palavra do Senhor, pela boca de Jeremias, até que a terra se agradasse dos seus sábados; todos os dias da assolação repousou, até que os setenta anos se cumpriram.
²² Porém, no primeiro ano de Ciro, rei da Pérsia (para que se cumprisse a palavra do Senhor pela boca de Jeremias), despertou o Senhor o espírito de Ciro, rei da Pérsia, o qual fez passar pregão por todo o seu reino, como também por escrito, dizendo:
²³ Assim diz Ciro, rei da Pérsia: O Senhor Deus dos céus me deu todos os reinos da terra, e me encarregou de lhe edificar uma casa em Jerusalém, que está em Judá. Quem há entre vós, de todo o seu povo, o Senhor seu Deus seja com ele, e suba.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quanto tempo a terra de Judá descansou em desolação para cumprir a palavra do Senhor por Jeremias?",
                        opcoes: [
                            { numero: 1, texto: "Quarenta anos", correta: false },
                            { numero: 2, texto: "Setenta anos", correta: true },
                            { numero: 3, texto: "Cem anos", correta: false },
                            { numero: 4, texto: "Dez anos", correta: false }
                        ],
                        explicacao: "2 Crônicas 36:21 - ...até que a terra se agradou dos seus sábados... até que os setenta anos se cumpriram.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Ciro, rei da Pérsia, proclamou no final do livro?",
                        opcoes: [
                            { numero: 1, texto: "Que todos deveriam ser persas", correta: false },
                            { numero: 2, texto: "Que o Senhor o encarregou de Lhe edificar uma casa em Jerusalém", correta: true },
                            { numero: 3, texto: "Que Jerusalém seria destruída para sempre", correta: false },
                            { numero: 4, texto: "Que ele era um deus", correta: false }
                        ],
                        explicacao: "2 Crônicas 36:23 - ...O Senhor Deus dos céus... me encarregou de lhe edificar uma casa em Jerusalém...",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};