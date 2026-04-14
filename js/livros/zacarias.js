const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const zacarias = {
    nome: "Zacarias",
    icone: "🏹",
    autor: "Zacarias",
    //background: "./imagens/zacarias_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "Chamado ao Arrependimento e Visões",
            texto: ` ¹ No oitavo mês do segundo ano de Dario veio a palavra do Senhor ao profeta Zacarias, filho de Baraquias, filho de Ido, dizendo:
² O Senhor se irou fortemente contra vossos pais.
³ Portanto dize-lhes: Assim diz o Senhor dos Exércitos: Tornai-vos para mim, diz o Senhor dos Exércitos, e eu me tornarei para vós, diz o Senhor dos Exércitos.
⁴ E não sejais como vossos pais, aos quais clamavam os primeiros profetas, dizendo: Assim diz o Senhor dos Exércitos: Convertei-vos agora dos vossos maus caminhos e das vossas más obras; mas não ouviram, nem me escutaram, diz o Senhor.
⁵ Vossos pais, onde estão? E os profetas, viverão eles para sempre?
⁶ Contudo as minhas palavras e os meus estatutos, que eu ordenei aos profetas, meus servos, não alcançaram a vossos pais? E eles voltaram, e disseram: Assim como o Senhor dos Exércitos fez tenção de nos tratar, segundo os nossos caminhos, e segundo as nossas obras, assim ele nos tratou.
⁷ Aos vinte e quatro dias do mês undécimo (que é o mês de Sebate), no segundo ano de Dario, veio a palavra do Senhor ao profeta Zacarias, filho de Baraquias, filho de Ido, dizendo:
⁸ Olhei de noite, e vi um homem montado num cavalo vermelho; e ele estava parado entre as murtas que estavam na baixada; e atrás dele estavam cavalos vermelhos, malhados e brancos.
⁹ E eu disse: Senhor meu, quem são estes? E disse-me o anjo que falava comigo: Eu te mostrarei quem são estes.
¹⁰ Então respondeu o homem que estava entre as murtas, e disse: Estes são os que o Senhor tem enviado para percorrerem a terra.
¹¹ E eles responderam ao anjo do Senhor, que estava entre as murtas, e disseram: Nós já percorremos a terra, e eis que toda a terra está tranquila e quieta.
¹² Então o anjo do Senhor respondeu, e disse: Ó Senhor dos Exércitos, até quando não terás compaixão de Jerusalém, e das cidades de Judá, contra as quais estiveste irado estes setenta anos?
¹³ E respondeu o Senhor ao anjo, que falava comigo, com palavras boas, palavras consoladoras.
¹⁴ E o anjo que falava comigo disse-me: Clama, dizendo: Assim diz o Senhor dos Exércitos: Com grande zelo estou zelando por Jerusalém e por Sião.
¹⁵ E com grande indignação estou irado contra os gentios em descanso; porque eu estava pouco indignado, mas eles agravaram o mal.
¹⁶ Portanto, assim diz o Senhor: Voltei-me para Jerusalém com misericórdia; nela será edificada a minha casa, diz o Senhor dos Exércitos, e o cordel será estendido sobre Jerusalém:
¹⁷ Clama outra vez, dizendo: Assim diz o Senhor dos Exércitos: As minhas cidades ainda aumentarão e prosperarão; porque o Senhor ainda consolará a Sião e ainda escolherá a Jerusalém.
¹⁸ E levantei os meus olhos, e vi, e eis quatro chifres.
¹⁹ E eu disse ao anjo que falava comigo: Que são estes? E ele me disse: Estes são os chifres que dispersaram a Judá, a Israel e a Jerusalém.
²⁰ E o Senhor me mostrou quatro carpinteiros.
²¹ Então eu disse: Que vêm estes fazer? E ele falou, dizendo: Estes são os chifres que dispersaram a Judá, de maneira que ninguém pôde levantar a sua cabeça; estes, pois, vieram para os amedrontarem, para derrubarem os chifres dos gentios que levantaram o seu poder contra a terra de Judá, para a espalharem.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor dos Exércitos disse para o povo fazer para que Ele se tornasse para eles?",
                        opcoes: [
                            { numero: 1, texto: "Fazer grandes sacrifícios", correta: false },
                            { numero: 2, texto: "Tornai-vos para mim", correta: true },
                            { numero: 3, texto: "Construir muros altos", correta: false },
                            { numero: 4, texto: "Cantar hinos de guerra", correta: false }
                        ],
                        explicacao: "Zacarias 1:3 - ...Tornai-vos para mim, diz o Senhor dos Exércitos, e eu me tornarei para vós...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Na visão noturna de Zacarias, em que tipo de cavalo estava montado o homem entre as murteiras?",
                        opcoes: [
                            { numero: 1, texto: "Um cavalo branco", correta: false },
                            { numero: 2, texto: "Um cavalo preto", correta: false },
                            { numero: 3, texto: "Um cavalo baio", correta: false },
                            { numero: 4, texto: "Um cavalo vermelho", correta: true }
                        ],
                        explicacao: "Zacarias 1:8 - Vi de noite, e eis um homem montado num cavalo vermelho...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quantos chifres Zacarias viu que dispersaram a Judá, Israel e Jerusalém?",
                        opcoes: [
                            { numero: 1, texto: "Quatro chifres", correta: true },
                            { numero: 2, texto: "Sete chifres", correta: false },
                            { numero: 3, texto: "Dois chifres", correta: false },
                            { numero: 4, texto: "Dez chifres", correta: false }
                        ],
                        explicacao: "Zacarias 1:18-19 - ...Eis quatro chifres. E eu disse ao anjo... O que são estes? E ele me disse: Estes são os chifres que dispersaram a Judá...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "A Medição de Jerusalém",
            texto: ` ¹ Tornei a levantar os meus olhos, e vi, e eis um homem que tinha na mão um cordel de medir.
² E eu disse: Para onde vais tu? E ele me disse: Vou medir Jerusalém, para ver qual é a sua largura e qual o seu comprimento.
³ E eis que saiu o anjo que falava comigo, e outro anjo lhe saiu ao encontro.
⁴ E disse-lhe: Corre, fala a este jovem, dizendo: Jerusalém será habitada como as aldeias sem muros, por causa da multidão dos homens e dos animais que haverá nela.
⁵ Pois eu, diz o Senhor, serei para ela um muro de fogo em redor, e para glória estarei no meio dela.
⁶ Ah, ah! Fugi agora da terra do norte, diz o Senhor, porque vos espalhei pelos quatro ventos do céu, diz o Senhor.
⁷ Ah! Sião! Escapa, tu, que habitas com a filha de Babilônia.
⁸ Porque assim diz o Senhor dos Exércitos: Depois da glória ele me enviou às nações que vos despojaram; porque aquele que tocar em vós toca na menina do seu olho.
⁹ Porque eis aí levantarei a minha mão sobre eles, e eles virão a ser a presa daqueles que os serviram; assim sabereis vós que o Senhor dos Exércitos me enviou.
¹⁰ Exulta, e alegra-te ó filha de Sião, porque eis que venho, e habitarei no meio de ti, diz o Senhor.
¹¹ E naquele dia muitas nações se ajuntarão ao Senhor, e serão o meu povo, e habitarei no meio de ti e saberás que o Senhor dos Exércitos me enviou a ti.
¹² Então o Senhor herdará a Judá como sua porção na terra santa, e ainda escolherá a Jerusalém.
¹³ Cala-te, toda a carne, diante do Senhor, porque ele se levantou da sua santa morada.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o homem que Zacarias viu tinha na mão?",
                        opcoes: [
                            { numero: 1, texto: "Uma espada de ouro", correta: false },
                            { numero: 2, texto: "Um cordel de medir", correta: true },
                            { numero: 3, texto: "Uma tocha acesa", correta: false },
                            { numero: 4, texto: "Um livro aberto", correta: false }
                        ],
                        explicacao: "Zacarias 2:1 - Levantei os meus olhos... e vi um homem que tinha na mão um cordel de medir.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como Jerusalém seria habitada, segundo a promessa do versículo 4?",
                        opcoes: [
                            { numero: 1, texto: "Como as aldeias sem muros", correta: true },
                            { numero: 2, texto: "Como uma fortaleza fechada", correta: false },
                            { numero: 3, texto: "Como um acampamento militar", correta: false },
                            { numero: 4, texto: "Como uma ilha no mar", correta: false }
                        ],
                        explicacao: "Zacarias 2:4 - ...Jerusalém será habitada como as aldeias sem muros, por causa da multidão dos homens e dos animais...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor seria para Jerusalém ao seu redor?",
                        opcoes: [
                            { numero: 1, texto: "Um muro de fogo", correta: true },
                            { numero: 2, texto: "Um fosso de água", correta: false },
                            { numero: 3, texto: "Uma nuvem de fumaça", correta: false },
                            { numero: 4, texto: "Uma montanha de ferro", correta: false }
                        ],
                        explicacao: "Zacarias 2:5 - E eu, diz o Senhor, lhe serei um muro de fogo em redor...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "O Sumo Sacerdote Josué e o Renovo",
            texto: ` ¹ E ele mostrou-me o sumo sacerdote Josué, o qual estava diante do anjo do Senhor, e Satanás estava à sua mão direita, para se lhe opor.
² Mas o Senhor disse a Satanás: O Senhor te repreenda, ó Satanás, sim, o Senhor, que escolheu Jerusalém, te repreenda; não é este um tição tirado do fogo?
³ Josué, vestido de vestes sujas, estava diante do anjo.
⁴ Então respondeu, aos que estavam diante dele, dizendo: Tirai-lhe estas vestes sujas. E a Josué disse: Eis que tenho feito com que passe de ti a tua iniquidade, e te vestirei de vestes finas.
⁵ E disse eu: Ponham-lhe uma mitra limpa sobre a sua cabeça. E puseram uma mitra limpa sobre a sua cabeça, e vestiram-no das roupas; e o anjo do Senhor estava em pé.
⁶ E o anjo do Senhor protestou a Josué, dizendo:
⁷ Assim diz o Senhor dos Exércitos: Se andares nos meus caminhos, e se observares a minha ordenança, também tu julgarás a minha casa, e também guardarás os meus átrios, e te darei livre acesso entre os que estão aqui.
⁸ Ouve, pois, Josué, sumo sacerdote, tu e os teus companheiros que se assentam diante de ti, porque são homens portentosos; eis que eu farei vir o meu servo, o renovo.
⁹ Porque eis aqui a pedra que pus diante de Josué; sobre esta pedra única estão sete olhos; eis que eu esculpirei a sua escultura, diz o Senhor dos Exércitos, e tirarei a iniquidade desta terra num só dia.
¹⁰ Naquele dia, diz o Senhor dos Exércitos, cada um de vós convidará o seu próximo para debaixo da videira e para debaixo da figueira.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem estava à mão direita do sumo sacerdote Josué para se lhe opor?",
                        opcoes: [
                            { numero: 1, texto: "O anjo do Senhor", correta: false },
                            { numero: 2, texto: "Zorobabel", correta: false },
                            { numero: 3, texto: "Satanás", correta: true },
                            { numero: 4, texto: "O profeta Zacarias", correta: false }
                        ],
                        explicacao: "Zacarias 3:1 - ...e Satanás estava à sua mão direita, para se lhe opor.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o anjo ordenou que tirassem de Josué?",
                        opcoes: [
                            { numero: 1, texto: "A sua coroa", correta: false },
                            { numero: 2, texto: "As suas vestes sujas", correta: true },
                            { numero: 3, texto: "As suas sandálias", correta: false },
                            { numero: 4, texto: "O seu cajado", correta: false }
                        ],
                        explicacao: "Zacarias 3:4 - ...Tirai-lhe estas vestes sujas. E a ele lhe disse: Eis que tenho feito com que passe de ti a tua iniquidade...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é o nome do servo que o Senhor prometeu trazer no versículo 8?",
                        opcoes: [
                            { numero: 1, texto: "O Renovo", correta: true },
                            { numero: 2, texto: "O Construtor", correta: false },
                            { numero: 3, texto: "O Libertador", correta: false },
                            { numero: 4, texto: "O Ungido", correta: false }
                        ],
                        explicacao: "Zacarias 3:8 - ...porque eis que eu farei vir o meu servo, o Renovo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "O Castiçal de Ouro e as Oliveiras",
            texto: ` ¹ E o anjo que falava comigo voltou, e despertou-me, como a um homem que é despertado do seu sono,
² E disse-me: Que vês? E eu disse: Olho, e eis que vejo um castiçal todo de ouro, e um vaso de azeite no seu topo, com as suas sete lâmpadas; e sete canudos, um para cada uma das lâmpadas que estão no seu topo.
³ E, por cima dele, duas oliveiras, uma à direita do vaso de azeite, e outra à sua esquerda.
⁴ E respondi, dizendo ao anjo que falava comigo: Senhor meu, que é isto?
⁵ Então respondeu o anjo que falava comigo, dizendo-me: Não sabes tu o que é isto? E eu disse: Não, senhor meu.
⁶ E respondeu-me, dizendo: Esta é a palavra do Senhor a Zorobabel, dizendo: Não por força nem por violência, mas sim pelo meu Espírito, diz o Senhor dos Exércitos.
⁷ Quem és tu, ó grande monte? Diante de Zorobabel tornar-te-ás uma campina; porque ele trará a pedra angular com aclamações: Graça, graça a ela.
⁸ E a palavra do Senhor veio novamente a mim, dizendo:
⁹ As mãos de Zorobabel têm lançado os alicerces desta casa; também as suas mãos a acabarão, para que saibais que o Senhor dos Exércitos me enviou a vós.
¹⁰ Porque, quem despreza o dia das coisas pequenas? Pois esses se alegrarão, vendo o prumo na mão de Zorobabel; esses são os sete olhos do Senhor, que percorrem por toda a terra.
¹¹ Respondi mais, dizendo-lhe: Que são as duas oliveiras à direita e à esquerda do castiçal?
¹² E, respondendo-lhe outra vez, disse: Que são aqueles dois ramos de oliveira, que estão junto aos dois tubos de ouro, e que vertem de si azeite dourado?
¹³ E ele me falou, dizendo: Não sabes tu o que é isto? E eu disse: Não, senhor meu.
¹⁴ Então ele disse: Estes são os dois ungidos, que estão diante do Senhor de toda a terra.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Não por força nem por violência, mas por quê, diz o Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Pela sabedoria dos homens", correta: false },
                            { numero: 2, texto: "Pelo meu Espírito", correta: true },
                            { numero: 3, texto: "Pelo fio da espada", correta: false },
                            { numero: 4, texto: "Pela abundância de ouro", correta: false }
                        ],
                        explicacao: "Zacarias 4:6 - ...Não por força nem por violência, mas pelo meu Espírito, diz o Senhor dos Exércitos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem lançou os fundamentos da casa e também a acabaria?",
                        opcoes: [
                            { numero: 1, texto: "Josué", correta: false },
                            { numero: 2, texto: "Zacarias", correta: false },
                            { numero: 3, texto: "Ciro", correta: false },
                            { numero: 4, texto: "As mãos de Zorobabel", correta: true }
                        ],
                        explicacao: "Zacarias 4:9 - As mãos de Zorobabel têm lançado os fundamentos desta casa, também as suas mãos a acabarão...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que representam as duas oliveiras ao lado do castiçal?",
                        opcoes: [
                            { numero: 1, texto: "Os dois ungidos que assistem junto ao Senhor de toda a terra", correta: true },
                            { numero: 2, texto: "Os reinos de Judá e Israel", correta: false },
                            { numero: 3, texto: "Moisés e Elias", correta: false },
                            { numero: 4, texto: "A lei e os profetas", correta: false }
                        ],
                        explicacao: "Zacarias 4:14 - Então ele disse: Estes são os dois ungidos, que estão assistindo junto ao Senhor de toda a terra.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "O Rolo Volante e o Efa",
            texto: `¹ E voltei-me e levantei os meus olhos, e olhei, e eis um rolo voante.
² E disse-me o anjo: Que vês? E eu disse: Vejo um rolo voante, que tem vinte côvados de comprido e dez côvados de largo.
³ Então disse-me: Esta é a maldição que sairá pela face de toda a terra; porque qualquer que furtar será desarraigado, conforme está estabelecido de um lado do rolo; como também qualquer que jurar falsamente, será desarraigado, conforme está estabelecido do outro lado do rolo.
⁴ Eu a farei sair, disse o Senhor dos Exércitos, e ela entrará na casa do ladrão, e na casa do que jurar falsamente pelo meu nome; e permanecerá no meio da sua casa, e a consumirá juntamente com a sua madeira e com as suas pedras.
⁵ E saiu o anjo, que falava comigo, e disse-me: Levanta agora os teus olhos, e vê que é isto que sai.
⁶ E eu disse: Que é isto? E ele disse: Isto é um efa que sai. Disse ainda: Este é o aspecto deles em toda a terra.
⁷ E eis que foi levantado um talento de chumbo, e uma mulher estava assentada no meio do efa.
⁸ E ele disse: Esta é a impiedade. E a lançou dentro do efa; e lançou sobre a boca deste o peso de chumbo.
⁹ E levantei os meus olhos, e vi, e eis que saíram duas mulheres; e traziam vento nas suas asas, pois tinham asas como as da cegonha; e levantaram o efa entre a terra e o céu.
¹⁰ Então eu disse ao anjo que falava comigo: Para onde levam elas o efa?
¹¹ E ele me disse: Para lhe edificarem uma casa na terra de Sinar; e, estando ela acabada, ele será posto ali na sua base.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Zacarias viu voando na sua sexta visão?",
                        opcoes: [
                            { numero: 1, texto: "Uma águia gigante", correta: false },
                            { numero: 2, texto: "Um rolo volante", correta: true },
                            { numero: 3, texto: "Uma carruagem de fogo", correta: false },
                            { numero: 4, texto: "Um anjo com uma trombeta", correta: false }
                        ],
                        explicacao: "Zacarias 5:1-2 - ...E disse-me: Que vês? E eu disse: Vejo um rolo volante...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que estava assentado dentro do efa (medida)?",
                        opcoes: [
                            { numero: 1, texto: "Uma mulher", correta: true },
                            { numero: 2, texto: "Um leão", correta: false },
                            { numero: 3, texto: "Ouro e prata", correta: false },
                            { numero: 4, texto: "Pedras preciosas", correta: false }
                        ],
                        explicacao: "Zacarias 5:7 - ...e eis que uma mulher estava assentada no meio do efa.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Para onde as duas mulheres com asas de cegonha levaram o efa para lhe edificar uma casa?",
                        opcoes: [
                            { numero: 1, texto: "Para o Egito", correta: false },
                            { numero: 2, texto: "Para Jerusalém", correta: false },
                            { numero: 3, texto: "Para a terra de Sinear (Babilônia)", correta: true },
                            { numero: 4, texto: "Para as ilhas do mar", correta: false }
                        ],
                        explicacao: "Zacarias 5:11 - E ele me disse: Para lhe edificar uma casa na terra de Sinear...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
6: {
            titulo: "Os Quatro Carros e a Coroação de Josué",
            texto: `¹ E outra vez levantei os meus olhos, e vi, e eis que quatro carros saiam dentre dois montes, e estes montes eram montes de bronze.
² No primeiro carro eram cavalos vermelhos, e no segundo carro, cavalos pretos,
³ E no terceiro carro, cavalos brancos, e no quarto carro, cavalos malhados, todos eram fortes.
⁴ E respondi, dizendo ao anjo que falava comigo: Que é isto, senhor meu?
⁵ E o anjo respondeu, dizendo-me: Estes são os quatro espíritos dos céus, saindo donde estavam perante o Senhor de toda a terra.
⁶ O carro em que estão os cavalos pretos, sai para a terra do norte, e os brancos saem atrás deles, e os malhados saem para a terra do sul.
⁷ E os cavalos fortes saíam, e procuravam ir por diante, para percorrerem a terra. E ele disse: Ide, percorrei a terra. E percorreram a terra.
⁸ E chamou-me, e falou-me, dizendo: Eis que aqueles que saíram para a terra do norte fizeram repousar o meu Espírito na terra do norte.
⁹ E a palavra do Senhor veio a mim, dizendo:
¹⁰ Toma dos que foram levados cativos, a saber, de Heldai, de Tobias e de Jedaías, os quais vieram de Babilônia, e vem tu no mesmo dia, e entra na casa de Josias, filho de Sofonias.
¹¹ Toma, digo, prata e ouro, e faze coroas, e põe-nas na cabeça do sumo sacerdote Josué, filho de Jozadaque.
¹² E fala-lhe, dizendo: Assim fala o Senhor dos Exércitos, dizendo: Eis aqui o homem cujo nome é renovo; ele brotará do seu lugar, e edificará o templo do Senhor.
¹³ Ele mesmo edificará o templo do Senhor, e ele levará a glória; assentar-se-á no seu trono e dominará, e será sacerdote no seu trono, e conselho de paz haverá entre ambos os ofícios.
¹⁴ E estas coroas serão para Helém, e para Tobias, e para Jedaías, e para Hem, filho de Sofonias, como um memorial no templo do Senhor.
¹⁵ E aqueles que estão longe virão, e edificarão no templo do Senhor, e vós sabereis que o Senhor dos Exércitos me tem enviado a vós; e isto sucederá assim, se diligentemente ouvirdes a voz do Senhor vosso Deus.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que representam os quatro carros que saíram do meio de dois montes de bronze?",
                        opcoes: [
                            { numero: 1, texto: "Os quatro ventos do céu", correta: true },
                            { numero: 2, texto: "As quatro estações do ano", correta: false },
                            { numero: 3, texto: "Os quatro cantos do templo", correta: false },
                            { numero: 4, texto: "Os quatro rios do Éden", correta: false }
                        ],
                        explicacao: "Zacarias 6:5 - E o anjo respondeu... Estes são os quatro ventos do céu, que saem de onde assistiam junto ao Senhor de toda a terra.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Zacarias deveria colocar na cabeça do sumo sacerdote Josué?",
                        opcoes: [
                            { numero: 1, texto: "Um turbante de linho", correta: false },
                            { numero: 2, texto: "Cinzas de sacrifício", correta: false },
                            { numero: 3, texto: "Coroas de prata e de ouro", correta: true },
                            { numero: 4, texto: "Um véu sagrado", correta: false }
                        ],
                        explicacao: "Zacarias 6:11 - Toma, digo, prata e ouro, e faze coroas, e põe-nas na cabeça do sumo sacerdote Josué...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Onde o homem cujo nome é 'Renovo' edificará o templo?",
                        opcoes: [
                            { numero: 1, texto: "No templo do Senhor", correta: true },
                            { numero: 2, texto: "No alto do monte Sinai", correta: false },
                            { numero: 3, texto: "No deserto da Judeia", correta: false },
                            { numero: 4, texto: "Em solo estrangeiro", correta: false }
                        ],
                        explicacao: "Zacarias 6:12 - ...Eis aqui o homem cujo nome é Renovo... ele edificará o templo do Senhor.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        7: {
            titulo: "A Desobediência e o Jejum",
            texto: ` ¹ Aconteceu, no quarto ano do rei Dario, que a palavra do Senhor veio a Zacarias, no quarto dia do nono mês, que é Quisleu.
² Quando o povo enviou Sarezer e Régen-Meleque, e os seus homens, à casa de Deus, para suplicarem o favor do Senhor,
³ E para dizerem aos sacerdotes, que estavam na casa do Senhor dos Exércitos, profetas, dizendo: Chorarei eu no quinto mês, fazendo abstinência, como tenho feito por tantos anos?
⁴ Então a palavra do Senhor dos Exércitos veio a mim, dizendo:
⁵ Fala a todo o povo desta terra, e aos sacerdotes, dizendo: Quando jejuastes, e pranteastes, no quinto e no sétimo mês, durante estes setenta anos, porventura, foi mesmo para mim que jejuastes?
⁶ Ou quando comestes, e quando bebestes, não foi para vós mesmos que comestes e bebestes?
⁷ Não foram estas as palavras que o Senhor pregou pelo ministério dos primeiros profetas, quando Jerusalém estava habitada e em paz, com as suas cidades ao redor dela, e o sul e a campina eram habitados?
⁸ E a palavra do Senhor veio a Zacarias, dizendo:
⁹ Assim falou o Senhor dos Exércitos, dizendo: Executai juízo verdadeiro, mostrai piedade e misericórdia cada um para com seu irmão.
¹⁰ E não oprimais a viúva, nem o órfão, nem o estrangeiro, nem o pobre, nem intente cada um, em seu coração, o mal contra o seu irmão.
¹¹ Eles, porém, não quiseram escutar, e deram-me o ombro rebelde, e ensurdeceram os seus ouvidos, para que não ouvissem.
¹² Sim, fizeram os seus corações como pedra de diamante, para que não ouvissem a lei, nem as palavras que o Senhor dos Exércitos enviara pelo seu Espírito por intermédio dos primeiros profetas; daí veio a grande ira do Senhor dos Exércitos.
¹³ E aconteceu que, assim como ele clamou e eles não ouviram, também eles clamaram, e eu não ouvi, diz o Senhor dos Exércitos.
¹⁴ Assim os espalhei com um turbilhão por entre todas as nações, que eles não conheceram, e a terra foi assolada atrás deles, de sorte que ninguém passava por ela, nem se voltava; porque fizeram da terra desejada uma desolação.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o povo fez com os corações para não ouvirem a lei e as palavras do Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Fizeram-nos como pedra de diamante", correta: true },
                            { numero: 2, texto: "Esconderam-nos no pó", correta: false },
                            { numero: 3, texto: "Tornaram-nos como cera", correta: false },
                            { numero: 4, texto: "Quebraram-nos em pedaços", correta: false }
                        ],
                        explicacao: "Zacarias 7:12 - Sim, fizeram os seus corações como pedra de diamante, para que não ouvissem a lei...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual era o juízo verdadeiro que o Senhor ordenou aos seus antepassados?",
                        opcoes: [
                            { numero: 1, texto: "Executai juízo verdadeiro e mostrai piedade e misericórdia", correta: true },
                            { numero: 2, texto: "Oferecei sacrifícios de manhã", correta: false },
                            { numero: 3, texto: "Guardai as portas da cidade", correta: false },
                            { numero: 4, texto: "Pagai tributo aos reis", correta: false }
                        ],
                        explicacao: "Zacarias 7:9 - ...Executai juízo verdadeiro, mostrai piedade e misericórdia cada um a seu irmão.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por que o Senhor não ouviu quando o povo clamou?",
                        opcoes: [
                            { numero: 1, texto: "Porque Ele estava descansando", correta: false },
                            { numero: 2, texto: "Porque eles não ouviram quando Ele clamou", correta: true },
                            { numero: 3, texto: "Porque o clamor foi baixo", correta: false },
                            { numero: 4, texto: "Porque o templo estava fechado", correta: false }
                        ],
                        explicacao: "Zacarias 7:13 - E aconteceu que, como ele clamou e eles não ouviram, assim também eles clamarão e eu não ouvirei...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        8: {
            titulo: "A Promessa de Restauração de Jerusalém",
            texto: ` ¹ Depois veio a mim a palavra do Senhor dos Exércitos, dizendo:
² Assim diz o Senhor dos Exércitos: Zelei por Sião com grande zelo, e com grande indignação zelei por ela.
³ Assim diz o Senhor: Voltarei para Sião, e habitarei no meio de Jerusalém; e Jerusalém chamar-se-á a cidade da verdade, e o monte do Senhor dos Exércitos, o monte santo.
⁴ Assim diz o Senhor dos Exércitos: Ainda nas praças de Jerusalém habitarão velhos e velhas; levando cada um, na mão, o seu cajado, por causa da sua muita idade.
⁵ E as ruas da cidade se encherão de meninos e meninas, brincando nas suas ruas.
⁶ Assim diz o Senhor dos Exércitos: Se isto for maravilhoso aos olhos do restante deste povo naqueles dias, será também maravilhoso aos meus olhos? Diz o Senhor dos Exércitos.
⁷ Assim diz o Senhor dos Exércitos: Eis que salvarei o meu povo da terra do oriente e da terra do ocidente;
⁸ E trá-los-ei, e habitarão no meio de Jerusalém; e eles serão o meu povo, e eu lhes serei o seu Deus em verdade e em justiça.
⁹ Assim diz o Senhor dos Exércitos: Esforcem-se as vossas mãos, ó vós que nestes dias ouvistes estas palavras da boca dos profetas, que estiveram no dia em que foi posto o fundamento da casa do Senhor dos Exércitos, para que o templo fosse edificado.
¹⁰ Porque antes destes dias não tem havido salário para os homens, nem lhes davam ganhos os animais; nem havia paz para o que entrava nem para o que saía, por causa do inimigo, porque eu incitei a todos os homens, cada um contra o seu próximo.
¹¹ Mas agora não serei para com o restante deste povo como nos primeiros dias, diz o Senhor dos Exércitos.
¹² Porque haverá semente de prosperidade; a vide dará o seu fruto, e a terra dará a sua novidade, e os céus darão o seu orvalho; e farei que o restante deste povo herde tudo isto.
¹³ E há de suceder, ó casa de Judá, e casa de Israel, que, assim como fostes uma maldição entre os gentios, assim vos salvarei, e sereis uma bênção; não temais, esforcem-se as vossas mãos.
¹⁴ Porque assim diz o Senhor dos Exércitos: Como pensei fazer-vos mal, quando vossos pais me provocaram à ira, diz o Senhor dos Exércitos, e não me arrependi,
¹⁵ Assim tornei a pensar nestes dias fazer o bem a Jerusalém e à casa de Judá; não temais.
¹⁶ Estas são as coisas que deveis fazer: Falai a verdade cada um com o seu próximo; executai juízo de verdade e de paz nas vossas portas.
¹⁷ E nenhum de vós pense mal no seu coração contra o seu próximo, nem ameis o juramento falso; porque todas estas são coisas que eu odeio, diz o Senhor.
¹⁸ E a palavra do Senhor dos Exércitos veio a mim, dizendo:
¹⁹ Assim diz o Senhor dos Exércitos: O jejum do quarto, e o jejum do quinto, e o jejum do sétimo, e o jejum do décimo mês será para a casa de Judá gozo, alegria, e festividades solenes; amai, pois, a verdade e a paz.
²⁰ Assim diz o Senhor dos Exércitos: Ainda sucederá que virão os povos e os habitantes de muitas cidades.
²¹ E os habitantes de uma cidade irão à outra, dizendo: Vamos depressa suplicar o favor do Senhor, e buscar o Senhor dos Exércitos; eu também irei.
²² Assim virão muitos povos e poderosas nações, a buscar em Jerusalém ao Senhor dos Exércitos, e a suplicar o favor do Senhor.
²³ Assim diz o Senhor dos Exércitos: Naquele dia sucederá que pegarão dez homens, de todas as línguas das nações, pegarão, sim, na orla das vestes de um judeu, dizendo: Iremos convosco, porque temos ouvido que Deus está convosco.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Jerusalém será chamada quando o Senhor habitar no meio dela?",
                        opcoes: [
                            { numero: 1, texto: "A Cidade de Ouro", correta: false },
                            { numero: 2, texto: "A Cidade de Davi", correta: false },
                            { numero: 3, texto: "A Cidade da Verdade", correta: true },
                            { numero: 4, texto: "A Cidade dos Anjos", correta: false }
                        ],
                        explicacao: "Zacarias 8:3 - ...Jerusalém chamar-se-á a cidade da verdade, e o monte do Senhor dos Exércitos, o monte santo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem se assentará nas praças de Jerusalém no tempo da paz?",
                        opcoes: [
                            { numero: 1, texto: "Apenas os soldados", correta: false },
                            { numero: 2, texto: "Velhos e velhas, cada um com o seu bordão na mão", correta: true },
                            { numero: 3, texto: "Os reis das nações vizinhas", correta: false },
                            { numero: 4, texto: "Os mercadores de Tarsis", correta: false }
                        ],
                        explicacao: "Zacarias 8:4 - ...Ainda nas praças de Jerusalém habitarão velhos e velhas, levando cada um na mão o seu bordão...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quantos homens, de todas as línguas, agarrarão a orla da veste de um judeu?",
                        opcoes: [
                            { numero: 1, texto: "Sete homens", correta: false },
                            { numero: 2, texto: "Dois homens", correta: false },
                            { numero: 3, texto: "Cem homens", correta: false },
                            { numero: 4, texto: "Dez homens", correta: true }
                        ],
                        explicacao: "Zacarias 8:23 - ...pegarão dez homens, de todas as línguas das nações, na orla da veste de um judeu...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        9: {
            titulo: "O Rei Prometido e a Salvação",
            texto: `¹ O peso da palavra do Senhor contra a terra de Hadraque, e Damasco, o seu repouso; porque o olhar do homem, e de todas as tribos de Israel, se volta para o Senhor.
² E também Hamate que confina com ela, e Tiro e Sidom, ainda que sejam mais sábias.
³ E Tiro edificou para si fortalezas, e amontoou prata como o pó, e ouro fino como a lama das ruas.
⁴ Eis que o Senhor a despojará e ferirá no mar a sua força, e ela será consumida pelo fogo.
⁵ Ascalom o verá e temerá; também Gaza, e terá grande dor; igualmente Ecrom; porque a sua esperança será confundida; e o rei de Gaza perecerá, e Ascalom não será habitada.
⁶ E um bastardo habitará em Asdode, e exterminarei a soberba dos filisteus.
⁷ E da sua boca tirarei o seu sangue, e dentre os seus dentes as suas abominações; e ele também ficará como um remanescente para o nosso Deus; e será como governador em Judá, e Ecrom como um jebuseu.
⁸ E acampar-me-ei ao redor da minha casa, contra o exército, para que ninguém passe, nem volte; para que não passe mais sobre eles o opressor; porque agora vi com os meus olhos.
⁹ Alegra-te muito, ó filha de Sião; exulta, ó filha de Jerusalém; eis que o teu rei virá a ti, justo e Salvador, pobre, e montado sobre um jumento, e sobre um jumentinho, filho de jumenta.
¹⁰ E de Efraim destruirei os carros, e de Jerusalém os cavalos; e o arco de guerra será destruído, e ele anunciará paz aos gentios; e o seu domínio se estenderá de mar a mar, e desde o rio até às extremidades da terra.
¹¹ Ainda quanto a ti, por causa do sangue da tua aliança, libertei os teus presos da cova em que não havia água.
¹² Voltai à fortaleza, ó presos de esperança; também hoje vos anuncio que vos restaurarei em dobro.
¹³ Porque curvei Judá para mim, enchi com Efraim o arco; suscitarei a teus filhos, ó Sião, contra os teus filhos, ó Grécia! E pôr-te-ei, ó Sião, como a espada de um poderoso.
¹⁴ E o Senhor será visto sobre eles, e as suas flechas sairão como o relâmpago; e o Senhor Deus soará a trombeta, e irá com os redemoinhos do sul.
¹⁵ O Senhor dos Exércitos os amparará; eles devorarão, depois que os tiverem sujeitado, as pedras da funda; também beberão e farão barulho como excitados pelo vinho; e encher-se-ão como bacias de sacrifício, como os cantos do altar.
¹⁶ E o Senhor seu Deus naquele dia os salvará, como ao rebanho do seu povo: porque como pedras de uma coroa eles resplandecerão na sua terra.
¹⁷ Porque, quão grande é a sua bondade! E quão grande é a sua formosura! O trigo fará florescer os jovens e o mosto as virgens. `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o Rei de Jerusalém viria até ela, segundo a profecia do versículo 9?",
                        opcoes: [
                            { numero: 1, texto: "Em uma carruagem de fogo", correta: false },
                            { numero: 2, texto: "Montado sobre um jumento, sobre um poltro", correta: true },
                            { numero: 3, texto: "Caminhando sobre as águas", correta: false },
                            { numero: 4, texto: "Montado em um cavalo branco", correta: false }
                        ],
                        explicacao: "Zacarias 9:9 - ...eis que o teu rei virá a ti, justo e salvador, pobre, e montado sobre um jumento, e sobre um poltro...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O Senhor libertou os presos da cativeiro pelo sangue de quê?",
                        opcoes: [
                            { numero: 1, texto: "Pelo sangue da sua aliança", correta: true },
                            { numero: 2, texto: "Pelo sangue de cordeiros", correta: false },
                            { numero: 3, texto: "Pelo sangue dos mártires", correta: false },
                            { numero: 4, texto: "Pelo sangue da guerra", correta: false }
                        ],
                        explicacao: "Zacarias 9:11 - Quanto a ti também, pelo sangue da tua aliança, tirei os teus presos da cova...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como o Senhor salvará o seu povo naquele dia?",
                        opcoes: [
                            { numero: 1, texto: "Como o rebanho do seu povo", correta: true },
                            { numero: 2, texto: "Como uma manada de leões", correta: false },
                            { numero: 3, texto: "Como areia do mar", correta: false },
                            { numero: 4, texto: "Como estrelas do céu", correta: false }
                        ],
                        explicacao: "Zacarias 9:16 - E o Senhor seu Deus os salvará naquele dia, como o rebanho do seu povo...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        10: {
            titulo: "A Promessa de Chuva e a Redenção",
            texto: `1 Pedi ao Senhor chuva no tempo da chuva serôdia, sim, ao Senhor que faz relâmpagos; e lhes dará chuvas abundantes, e a cada um erva no campo.
2 Porque os ídolos têm falado vaidade, e os adivinhos têm visto mentira, e contam sonhos falsos; com vaidade consolam, por isso seguem o seu caminho como ovelhas; estão aflitos, porque não há pastor.
3 Contra os pastores se acendeu a minha ira, e castigarei os bodes; mas o Senhor dos Exércitos visitará o seu rebanho, a casa de Judá, e os fará como o seu majestoso cavalo na peleja.
4 Dele sairá a pedra de esquina, dele a estaca, dele o arco de guerra, dele juntamente sairá todo o opressor.
5 E serão como poderosos que na batalha esmagam ao inimigo no lodo das ruas; e eles lutarão, porque o Senhor estará com eles; e confundirão os que andam montados em cavalos.
6 E fortalecerei a casa de Judá, e salvarei a casa de José, e os farei voltar, porque me compadeci deles; e serão como se eu não os tivera rejeitado, porque eu sou o Senhor seu Deus, e os ouvirei.
7 E os de Efraim serão como um poderoso, e o seu coração se alegrará como pelo vinho; e os seus filhos o verão, e se alegrarão; o seu coração se regozijará no Senhor.
8 Eu lhes assobiarei, e os ajuntarei, porque eu os tenho remido; e multiplicar-se-ão como antes se tinham multiplicado.
9 Ainda que os espalhei por entre os povos, eles se lembrarão de mim em lugares remotos; e viverão com seus filhos, e voltarão.
10 Porque eu os farei voltar da terra do Egito, e os congregarei da Assíria; e trá-los-ei à terra de Gileade e do Líbano, e não se achará lugar bastante para eles.
11 E ele passará pelo mar com angústia, e ferirá as ondas no mar, e todas as profundezas do Nilo se secarão; então será derrubada a soberba da Assíria, e o cetro do Egito se retirará.
12 E eu os fortalecerei no Senhor, e andarão no seu nome, diz o Senhor. `,
            get pergunta() {
                return sortear([
                    {
                        texto: "A quem o povo deve pedir chuva no tempo da chuva serôdia?",
                        opcoes: [
                            { numero: 1, texto: "Aos ídolos da terra", correta: false },
                            { numero: 2, texto: "Aos adivinhos", correta: false },
                            { numero: 3, texto: "Ao Senhor", correta: true },
                            { numero: 4, texto: "Aos reis de Judá", correta: false }
                        ],
                        explicacao: "Zacarias 10:1 - Pedi ao Senhor chuva no tempo da chuva serôdia...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "De quem sai a pedra de esquina e a estaca?",
                        opcoes: [
                            { numero: 1, texto: "De Judá", correta: true },
                            { numero: 2, texto: "De Efraim", correta: false },
                            { numero: 3, texto: "Do Egito", correta: false },
                            { numero: 4, texto: "Da Babilônia", correta: false }
                        ],
                        explicacao: "Zacarias 10:4 - Dele sairá a pedra de esquina, dele a estaca, dele o arco de guerra...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontecerá com o orgulho da Assíria e o cetro do Egito?",
                        opcoes: [
                            { numero: 1, texto: "Serão exaltados", correta: false },
                            { numero: 2, texto: "Será derribado e se retirará", correta: true },
                            { numero: 3, texto: "Serão comprados com ouro", correta: false },
                            { numero: 4, texto: "Permanecerão para sempre", correta: false }
                        ],
                        explicacao: "Zacarias 10:11 - ...e o orgulho da Assíria será derribado, e o cetro do Egito se retirará.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
11: {
            titulo: "Os Dois Cajados e o Bom Pastor",
            texto: ` ¹ Abre, ó Líbano, as tuas portas para que o fogo consuma os teus cedros.
² Geme, ó cipreste, porque o cedro caiu, porque os mais poderosos são destruídos; gemei, ó carvalhos de Basã, porque o bosque forte é derrubado.
³ Voz de uivo dos pastores! Porque a sua glória é destruída; voz de bramido dos filhos de leões, porque foi destruída a soberba do Jordão.
⁴ Assim diz o Senhor meu Deus: Apascenta as ovelhas da matança,
⁵ Cujos possuidores as matam, e não se têm por culpados; e cujos vendedores dizem: Louvado seja o Senhor, porque tenho enriquecido; e os seus pastores não têm piedade delas.
⁶ Certamente não terei mais piedade dos moradores desta terra, diz o Senhor; mas, eis que entregarei os homens cada um na mão do seu próximo e na mão do seu rei; eles ferirão a terra, e eu não os livrarei da sua mão.
⁷ Eu, pois, apascentei as ovelhas da matança, as pobres ovelhas do rebanho. Tomei para mim duas varas: a uma chamei Graça, e à outra chamei União; e apascentei as ovelhas.
⁸ E destruí os três pastores num mês; porque a minha alma se impacientou deles, e também a alma deles se enfastiou de mim.
⁹ E eu disse: Não vos apascentarei mais; o que morrer, morra; e o que for destruído, seja destruído; e as que restarem comam cada uma a carne da outra.
¹⁰ E tomei a minha vara Graça, e a quebrei, para desfazer a minha aliança, que tinha estabelecido com todos estes povos.
¹¹ E foi desfeita naquele dia; e assim conheceram os pobres do rebanho, que me respeitavam, que isto era palavra do Senhor.
¹² Porque eu lhes disse: Se parece bem aos vossos olhos, dai-me o meu salário e, se não, deixai-o. E pesaram o meu salário, trinta moedas de prata.
¹³ O Senhor, pois, disse-me: Arroja isso ao oleiro, esse belo preço em que fui avaliado por eles. E tomei as trinta moedas de prata, e as arrojei ao oleiro, na casa do Senhor.
¹⁴ Então quebrei a minha segunda vara União, para romper a irmandade entre Judá e Israel.
¹⁵ E o Senhor disse-me: Toma ainda para ti o instrumento de um pastor insensato.
¹⁶ Porque, eis que suscitarei um pastor na terra, que não cuidará das que estão perecendo, não buscará a pequena, e não curará a ferida, nem apascentará a sã; mas comerá a carne da gorda, e lhe despedaçará as unhas.
¹⁷ Ai do pastor inútil, que abandona o rebanho! A espada cairá sobre o seu braço e sobre o seu olho direito; e o seu braço completamente se secará, e o seu olho direito completamente se escurecerá.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual foi o preço pago pelo trabalho do pastor, que depois foi lançado ao oleiro?",
                        opcoes: [
                            { numero: 1, texto: "Cinquenta moedas de ouro", correta: false },
                            { numero: 2, texto: "Trinta moedas de prata", correta: true },
                            { numero: 3, texto: "Dez talentos de bronze", correta: false },
                            { numero: 4, texto: "Cem ovelhas brancas", correta: false }
                        ],
                        explicacao: "Zacarias 11:12 - ...E pesaram o meu salário, trinta moedas de prata.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quais eram os nomes dos dois cajados que o pastor tomou para apascentar o rebanho?",
                        opcoes: [
                            { numero: 1, texto: "Justiça e Juízo", correta: false },
                            { numero: 2, texto: "Vida e Morte", correta: false },
                            { numero: 3, texto: "Suavidade e Ataduras", correta: true },
                            { numero: 4, texto: "Cajado e Bordão", correta: false }
                        ],
                        explicacao: "Zacarias 11:7 - ...E tomei para mim dois cajados: a um chamei Suavidade, e ao outro chamei Ataduras...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu com o cajado chamado 'Suavidade'?",
                        opcoes: [
                            { numero: 1, texto: "Foi quebrado para anular a aliança com todos os povos", correta: true },
                            { numero: 2, texto: "Foi transformado em uma cetro de ouro", correta: false },
                            { numero: 3, texto: "Foi perdido no deserto", correta: false },
                            { numero: 4, texto: "Foi entregue ao novo rei", correta: false }
                        ],
                        explicacao: "Zacarias 11:10 - E tomei o meu cajado Suavidade, e o quebrei, para anular a minha aliança...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        12: {
            titulo: "A Libertação e o Arrependimento de Jerusalém",
            texto: `¹ Peso da palavra do Senhor sobre Israel: Fala o Senhor, o que estende o céu, e que funda a terra, e que forma o espírito do homem dentro dele.
² Eis que eu farei de Jerusalém um copo de tremor para todos os povos em redor, e também para Judá, durante o cerco contra Jerusalém.
³ E acontecerá naquele dia que farei de Jerusalém uma pedra pesada para todos os povos; todos os que a carregarem certamente serão despedaçados; e ajuntar-se-á contra ela todo o povo da terra.
⁴ Naquele dia, diz o Senhor, ferirei de espanto a todos os cavalos, e de loucura os que montam neles; mas sobre a casa de Judá abrirei os meus olhos, e ferirei de cegueira a todos os cavalos dos povos.
⁵ Então os governadores de Judá dirão no seu coração: Os habitantes de Jerusalém são a minha força no Senhor dos Exércitos, seu Deus.
⁶ Naquele dia porei os governadores de Judá como um braseiro ardente no meio da lenha, e como um facho de fogo entre gavelas; e à direita e à esquerda consumirão a todos os povos em redor, e Jerusalém será habitada outra vez no seu lugar, em Jerusalém;
⁷ E o Senhor salvará primeiramente as tendas de Judá, para que a glória da casa de Davi e a glória dos habitantes de Jerusalém não seja exaltada sobre Judá.
⁸ Naquele dia o Senhor protegerá os habitantes de Jerusalém; e o mais fraco dentre eles naquele dia será como Davi, e a casa de Davi será como Deus, como o anjo do Senhor diante deles.
⁹ E acontecerá naquele dia, que procurarei destruir todas as nações que vierem contra Jerusalém;
¹⁰ Mas sobre a casa de Davi, e sobre os habitantes de Jerusalém, derramarei o Espírito de graça e de súplicas; e olharão para mim, a quem traspassaram; e prantearão sobre ele, como quem pranteia pelo filho unigênito; e chorarão amargamente por ele, como se chora amargamente pelo primogênito.
¹¹ Naquele dia será grande o pranto em Jerusalém, como o pranto de Hadade-Rimom no vale de Megido.
¹² E a terra pranteará, cada família à parte: a família da casa de Davi à parte, e suas mulheres à parte; e a família da casa de Natã à parte, e suas mulheres à parte;
¹³ A família da casa de Levi à parte, e suas mulheres à parte; a família de Simei à parte, e suas mulheres à parte.
¹⁴ Todas as mais famílias remanescentes, cada família à parte, e suas mulheres à parte.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Em que o Senhor tornará Jerusalém para todos os povos em redor?",
                        opcoes: [
                            { numero: 1, texto: "Um jardim de delícias", correta: false },
                            { numero: 2, texto: "Um copo de tremor", correta: true },
                            { numero: 3, texto: "Uma fonte de águas doces", correta: false },
                            { numero: 4, texto: "Uma planície deserta", correta: false }
                        ],
                        explicacao: "Zacarias 12:2 - Eis que eu farei de Jerusalém um copo de tremor para todos os povos em redor...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Naquele dia, Jerusalém será para todos os povos como o quê?",
                        opcoes: [
                            { numero: 1, texto: "Uma rede de pesca", correta: false },
                            { numero: 2, texto: "Uma pedra pesada", correta: true },
                            { numero: 3, texto: "Um muro de palha", correta: false },
                            { numero: 4, texto: "Uma coroa de flores", correta: false }
                        ],
                        explicacao: "Zacarias 12:3 - E acontecerá naquele dia que farei de Jerusalém uma pedra pesada para todos os povos...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o povo fará quando olhar para aquele a quem traspassaram?",
                        opcoes: [
                            { numero: 1, texto: "Fugirão com medo", correta: false },
                            { numero: 2, texto: "Prantearão e chorarão amargamente por ele", correta: true },
                            { numero: 3, texto: "Farão uma grande festa", correta: false },
                            { numero: 4, texto: "Não o reconhecerão", correta: false }
                        ],
                        explicacao: "Zacarias 12:10 - ...e olharão para mim, a quem traspassaram; e o prantearão como quem pranteia por um unigênito...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        13: {
            titulo: "A Fonte para a Purificação",
            texto: ` ¹ Naquele dia haverá uma fonte aberta para a casa de Davi, e para os habitantes de Jerusalém, para purificação do pecado e da imundícia.
² E acontecerá naquele dia, diz o Senhor dos Exércitos, que tirarei da terra os nomes dos ídolos, e deles não haverá mais memória; e também farei sair da terra os profetas e o espírito da impureza.
³ E acontecerá que, quando alguém ainda profetizar, seu pai e sua mãe, que o geraram, lhe dirão: Não viverás, porque falaste mentira em nome do Senhor; e seu pai e sua mãe, que o geraram, o traspassarão quando profetizar.
⁴ E acontecerá naquele dia que os profetas se envergonharão, cada um da sua visão, quando profetizarem; nem mais se vestirão de manto de pelos, para mentirem.
⁵ Mas dirão: Não sou profeta, sou lavrador da terra; porque certo homem ensinou-me a guardar o gado desde a minha mocidade.
⁶ E se alguém lhe disser: Que feridas são estas nas tuas mãos? Dirá ele: São feridas com que fui ferido em casa dos meus amigos.
⁷ Ó espada, desperta-te contra o meu pastor, e contra o homem que é o meu companheiro, diz o Senhor dos Exércitos. Fere ao pastor, e espalhar-se-ão as ovelhas; mas volverei a minha mão sobre os pequenos.
⁸ E acontecerá em toda a terra, diz o Senhor, que as duas partes dela serão extirpadas, e expirarão; mas a terceira parte restará nela.
⁹ E farei passar esta terceira parte pelo fogo, e a purificarei, como se purifica a prata, e a provarei, como se prova o ouro. Ela invocará o meu nome, e eu a ouvirei; direi: É meu povo; e ela dirá: O Senhor é o meu Deus.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que será aberto para a casa de Davi para purificação do pecado e da imundícia?",
                        opcoes: [
                            { numero: 1, texto: "Uma grande porta", correta: false },
                            { numero: 2, texto: "Um livro sagrado", correta: false },
                            { numero: 3, texto: "Uma fonte", correta: true },
                            { numero: 4, texto: "Um novo altar", correta: false }
                        ],
                        explicacao: "Zacarias 13:1 - Naquele dia haverá uma fonte aberta para a casa de Davi...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontecerá com as ovelhas quando o pastor for ferido?",
                        opcoes: [
                            { numero: 1, texto: "Elas se dispersarão", correta: true },
                            { numero: 2, texto: "Elas ficarão protegidas no curral", correta: false },
                            { numero: 3, texto: "Elas seguirão o novo pastor", correta: false },
                            { numero: 4, texto: "Elas lutarão contra os lobos", correta: false }
                        ],
                        explicacao: "Zacarias 13:7 - ...fere o pastor, e as ovelhas se dispersarão...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como o Senhor provará a terça parte que restar na terra?",
                        opcoes: [
                            { numero: 1, texto: "Como se prova o ouro e a prata no fogo", correta: true },
                            { numero: 2, texto: "Como se prova o trigo na peneira", correta: false },
                            { numero: 3, texto: "Como se prova a força de um soldado", correta: false },
                            { numero: 4, texto: "Como se prova a doçura do mel", correta: false }
                        ],
                        explicacao: "Zacarias 13:9 - E farei passar esta terceira parte pelo fogo, e a purificarei, como se purifica a prata...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        14: {
            titulo: "O Reinado de Deus e a Festa dos Tabernáculos",
            texto: ` ¹ Eis que vem o dia do Senhor, em que teus despojos se repartirão no meio de ti.
² Porque eu ajuntarei todas as nações para a peleja contra Jerusalém; e a cidade será tomada, e as casas serão saqueadas, e as mulheres forçadas; e metade da cidade sairá para o cativeiro, mas o restante do povo não será extirpado da cidade.
³ E o Senhor sairá, e pelejará contra estas nações, como pelejou, sim, no dia da batalha.
⁴ E naquele dia estarão os seus pés sobre o monte das Oliveiras, que está defronte de Jerusalém para o oriente; e o monte das Oliveiras será fendido pelo meio, para o oriente e para o ocidente, e haverá um vale muito grande; e metade do monte se apartará para o norte, e a outra metade dele para o sul.
⁵ E fugireis pelo vale dos meus montes, pois o vale dos montes chegará até Azel; e fugireis assim como fugistes de diante do terremoto nos dias de Uzias, rei de Judá. Então virá o Senhor meu Deus, e todos os santos contigo.
⁶ E acontecerá naquele dia, que não haverá preciosa luz, nem espessa escuridão.
⁷ Mas será um dia conhecido do Senhor; nem dia nem noite será; mas acontecerá que ao cair da tarde haverá luz.
⁸ Naquele dia também acontecerá que sairão de Jerusalém águas vivas, metade delas para o mar oriental, e metade delas para o mar ocidental; no verão e no inverno sucederá isto.
⁹ E o Senhor será rei sobre toda a terra; naquele dia um será o Senhor, e um será o seu nome.
¹⁰ Toda a terra em redor se tornará em planície, desde Geba até Rimom, ao sul de Jerusalém, e ela será exaltada, e habitada no seu lugar, desde a porta de Benjamim até ao lugar da primeira porta, até à porta da esquina, e desde a torre de Hananeel até aos lagares do rei.
¹¹ E habitarão nela, e não haverá mais destruição, porque Jerusalém habitará segura.
¹² E esta será a praga com que o Senhor ferirá a todos os povos que guerrearam contra Jerusalém: a sua carne apodrecerá, estando eles postados de pé, e lhes apodrecerão os olhos nas suas órbitas, e a língua lhes apodrecerá na sua boca.
¹³ Naquele dia também acontecerá que haverá da parte do Senhor uma grande perturbação entre eles; porque cada um pegará na mão do seu próximo, e cada um levantará a mão contra a mão do seu próximo.
¹⁴ E também Judá pelejará em Jerusalém, e as riquezas de todos os gentios serão ajuntadas ao redor, ouro e prata e roupas em grande abundância.
¹⁵ Assim será também a praga dos cavalos, dos mulos, dos camelos e dos jumentos e de todos os animais que estiverem naqueles arraiais, como foi esta praga.
¹⁶ E acontecerá que, todos os que restarem de todas as nações que vieram contra Jerusalém, subirão de ano em ano para adorar o Rei, o Senhor dos Exércitos, e para celebrarem a festa dos tabernáculos.
¹⁷ E acontecerá que, se alguma das famílias da terra não subir a Jerusalém, para adorar o Rei, o Senhor dos Exércitos, não virá sobre ela a chuva.
¹⁸ E, se a família dos egípcios não subir, nem vier, não virá sobre ela a chuva; virá sobre eles a praga com que o Senhor ferirá os gentios que não subirem a celebrar a festa dos tabernáculos.
¹⁹ Este será o castigo do pecado dos egípcios e o castigo do pecado de todas as nações que não subirem a celebrar a festa dos tabernáculos.
²⁰ Naquele dia será gravado sobre as campainhas dos cavalos: santidade ao Senhor; e as panelas na casa do Senhor serão como as bacias diante do altar.
²¹ E todas as panelas em Jerusalém e Judá serão consagradas ao Senhor dos Exércitos, e todos os que sacrificarem virão, e delas tomarão, e nelas cozerão. E naquele dia não haverá mais cananeu na casa do Senhor dos Exércitos.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde estarão os pés do Senhor naquele dia, diante de Jerusalém?",
                        opcoes: [
                            { numero: 1, texto: "Sobre o Monte Sinai", correta: false },
                            { numero: 2, texto: "Sobre o Monte das Oliveiras", correta: true },
                            { numero: 3, texto: "Sobre o Monte Carmelo", correta: false },
                            { numero: 4, texto: "Sobre o Monte Hermom", correta: false }
                        ],
                        explicacao: "Zacarias 14:4 - E naquele dia estarão os seus pés sobre o monte das Oliveiras, que está defronte de Jerusalém...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que sairá de Jerusalém naquele dia, metade para o mar oriental e metade para o ocidental?",
                        opcoes: [
                            { numero: 1, texto: "Águas vivas", correta: true },
                            { numero: 2, texto: "Lava vulcânica", correta: false },
                            { numero: 3, texto: "Uma nuvem de glória", correta: false },
                            { numero: 4, texto: "Carruagens de guerra", correta: false }
                        ],
                        explicacao: "Zacarias 14:8 - Acontecerá também naquele dia que sairão de Jerusalém águas vivas...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual festa todas as nações que restarem deverão subir para celebrar em Jerusalém?",
                        opcoes: [
                            { numero: 1, texto: "Festa da Páscoa", correta: false },
                            { numero: 2, texto: "Festa do Pentecostes", correta: false },
                            { numero: 3, texto: "Festa das Trombetas", correta: false },
                            { numero: 4, texto: "Festa dos Tabernáculos", correta: true }
                        ],
                        explicacao: "Zacarias 14:16 - ...todos os que restarem... subirão de ano em ano para adorarem o Rei... e para celebrarem a festa dos tabernáculos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};