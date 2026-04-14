// js/livros/tito.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const tito = {
    nome: "Tito",
    icone: "🏝️", // Ícone sugerindo a ilha de Creta onde Tito estava
    autor: "Paulo",
    //background: "./imagens/tito_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "Presbíteros e a Sã Doutrina",
            texto: ` ¹ Paulo, servo de Deus, e apóstolo de Jesus Cristo, segundo a fé dos eleitos de Deus, e o conhecimento da verdade, que é segundo a piedade,
² Em esperança da vida eterna, a qual Deus, que não pode mentir, prometeu antes dos tempos dos séculos;
³ Mas a seu tempo manifestou a sua palavra pela pregação que me foi confiada segundo o mandamento de Deus, nosso Salvador;
⁴ A Tito, meu verdadeiro filho, segundo a fé comum: Graça, misericórdia, e paz da parte de Deus Pai, e da do Senhor Jesus Cristo, nosso Salvador.
⁵ Por esta causa te deixei em Creta, para que pusesses em boa ordem as coisas que ainda restam, e de cidade em cidade estabelecesses presbíteros, como já te mandei:
⁶ Aquele que for irrepreensível, marido de uma mulher, que tenha filhos fiéis, que não possam ser acusados de dissolução nem são desobedientes.
⁷ Porque é necessário que o bispo seja irrepreensível, como mordomo da casa de Deus, não soberbo, nem iracundo, nem dado ao vinho, nem espancador, nem cobiçoso de torpe ganância;
⁸ Mas dado à hospitalidade, amigo do bem, moderado, justo, santo, temperante;
⁹ Retendo firme a fiel palavra, que é conforme a doutrina, para que seja poderoso, tanto para admoestar com a sã doutrina, como para convencer os contradizentes.
¹⁰ Porque há muitos desordenados, faladores, vãos e enganadores, principalmente os da circuncisão,
¹¹ Aos quais convém tapar a boca; homens que transtornam casas inteiras ensinando o que não convém, por torpe ganância.
¹² Um deles, seu próprio profeta, disse: Os cretenses são sempre mentirosos, bestas ruins, ventres preguiçosos.
¹³ Este testemunho é verdadeiro. Portanto, repreende-os severamente, para que sejam sãos na fé.
¹⁴ Não dando ouvidos às fábulas judaicas, nem aos mandamentos de homens que se desviam da verdade.
¹⁵ Todas as coisas são puras para os puros, mas nada é puro para os contaminados e infiéis; antes o seu entendimento e consciência estão contaminados.
¹⁶ Confessam que conhecem a Deus, mas negam-no com as obras, sendo abomináveis, e desobedientes, e reprovados para toda a boa obra. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por qual motivo Paulo deixou Tito na ilha de Creta?",
                        opcoes: [
                            { numero: 1, texto: "Para que pusesse em ordem as coisas restantes e estabelecesse presbíteros", correta: true },
                            { numero: 2, texto: "Para que ele pudesse tirar férias", correta: false },
                            { numero: 3, texto: "Para construir um novo porto", correta: false },
                            { numero: 4, texto: "Para aprender a língua local", correta: false }
                        ],
                        explicacao: "Tito 1:5 - Por esta causa te deixei em Creta, para que pusesses em boa ordem as coisas que ainda restam, e de cidade em cidade estabelecesses presbíteros.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como Paulo descreve o caráter dos cretenses, citando um de seus profetas?",
                        opcoes: [
                            { numero: 1, texto: "Sempre mentirosos, feras ruins, ventres preguiçosos", correta: true },
                            { numero: 2, texto: "Pessoas extremamente bondosas e trabalhadoras", correta: false },
                            { numero: 3, texto: "Os melhores navegadores do mundo", correta: false },
                            { numero: 4, texto: "Gente muito espiritual e humilde", correta: false }
                        ],
                        explicacao: "Tito 1:12 - Um deles, seu próprio profeta, disse: Os cretenses são sempre mentirosos, feras ruins, ventres preguiçosos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "A Conduta Cristã",
            texto: ` ¹ Tu, porém, fala o que convém à sã doutrina.
² Os velhos, que sejam sóbrios, graves, prudentes, sãos na fé, no amor, e na paciência;
³ As mulheres idosas, semelhantemente, que sejam sérias no seu viver, como convém a santas, não caluniadoras, não dadas a muito vinho, mestras no bem;
⁴ Para que ensinem as mulheres novas a serem prudentes, a amarem seus maridos, a amarem seus filhos,
⁵ A serem moderadas, puras, boas donas de casa, sujeitas a seus maridos, a fim de que a palavra de Deus não seja blasfemada.
⁶ Exorta semelhantemente os jovens a que sejam moderados.
⁷ Em tudo te dá por exemplo de boas obras; na doutrina mostra incorrupção, gravidade, sinceridade,
⁸ Linguagem sã e irrepreensível, para que o adversário se envergonhe, não tendo nenhum mal que dizer de vós.
⁹ Exorta os servos a que se sujeitem a seus senhores, e em tudo agradem, não contradizendo,
¹⁰ Não defraudando, antes mostrando toda a boa lealdade, para que em tudo sejam ornamento da doutrina de Deus, nosso Salvador.
¹¹ Porque a graça salvadora de Deus se há manifestado a todos os homens,
¹² Ensinando-nos que, renunciando à impiedade e às concupiscências mundanas, vivamos neste presente século sóbria, e justa, e piamente,
¹³ Aguardando a bem-aventurada esperança e o aparecimento da glória do grande Deus e nosso Salvador Jesus Cristo;
¹⁴ O qual se deu a si mesmo por nós para nos remir de toda a iniquidade, e purificar para si um povo seu especial, zeloso de boas obras.
¹⁵ Fala disto, e exorta e repreende com toda a autoridade. Ninguém te despreze. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que a graça de Deus nos ensina a renunciar?",
                        opcoes: [
                            { numero: 1, texto: "A impiedade e as concupiscências mundanas", correta: true },
                            { numero: 2, texto: "O trabalho e o descanso", correta: false },
                            { numero: 3, texto: "A leitura dos livros", correta: false },
                            { numero: 4, texto: "Apenas as amizades antigas", correta: false }
                        ],
                        explicacao: "Tito 2:11-12 - Porque a graça de Deus se há manifestado... Ensinando-nos que, renunciando à impiedade e às concupiscências mundanas, vivamos neste presente século sóbria, e justa, e piamente.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que devemos aguardar enquanto vivemos de forma justa?",
                        opcoes: [
                            { numero: 1, texto: "A bem-aventurada esperança e o aparecimento da glória de Cristo", correta: true },
                            { numero: 2, texto: "O fim de todos os governos", correta: false },
                            { numero: 3, texto: "Apenas a nossa velhice", correta: false },
                            { numero: 4, texto: "O acúmulo de bens", correta: false }
                        ],
                        explicacao: "Tito 2:13 - Aguardando a bem-aventurada esperança e o aparecimento da glória do grande Deus e nosso Senhor Jesus Cristo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "Boas Obras e a Misericórdia",
            texto: ` ¹ Admoesta-os a que se sujeitem aos principados e autoridades, que lhes obedeçam, e estejam preparados para toda a boa obra;
² Que a ninguém infamem, nem sejam contenciosos, mas modestos, mostrando toda a mansidão para com todos os homens.
³ Porque também nós éramos noutro tempo insensatos, desobedientes, extraviados, servindo a várias concupiscências e deleites, vivendo em malícia e inveja, odiosos, odiando-nos uns aos outros.
⁴ Mas quando apareceu a benignidade e amor de Deus, nosso Salvador, para com os homens,
⁵ Não pelas obras de justiça que houvéssemos feito, mas segundo a sua misericórdia, nos salvou pela lavagem da regeneração e da renovação do Espírito Santo,
⁶ Que abundantemente ele derramou sobre nós por Jesus Cristo nosso Salvador;
⁷ Para que, sendo justificados pela sua graça, sejamos feitos herdeiros segundo a esperança da vida eterna.
⁸ Fiel é a palavra, e isto quero que deveras afirmes, para que os que creem em Deus procurem aplicar-se às boas obras; estas coisas são boas e proveitosas aos homens.
⁹ Mas não entres em questões loucas, genealogias e contendas, e nos debates acerca da lei; porque são coisas inúteis e vãs.
¹⁰ Ao homem herege, depois de uma e outra admoestação, evita-o,
¹¹ Sabendo que esse tal está pervertido, e peca, estando já em si mesmo condenado.
¹² Quando te enviar Ártemas, ou Tíquico, procura vir ter comigo a Nicópolis; porque deliberei invernar ali.
¹³ Acompanha com muito cuidado Zenas, doutor da lei, e Apolo, para que nada lhes falte.
¹⁴ E os nossos aprendam também a aplicar-se às boas obras, nas coisas necessárias, para que não sejam infrutuosos.
¹⁵ Saúdam-te todos os que estão comigo. Saúda tu os que nos amam na fé. A graça seja com vós todos. Amém. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Segundo o capítulo 3, fomos salvos por causa de obras de justiça que fizemos?",
                        opcoes: [
                            { numero: 1, texto: "Não, mas segundo a sua misericórdia", correta: true },
                            { numero: 2, texto: "Sim, fomos salvos porque fomos bons", correta: false },
                            { numero: 3, texto: "Fomos salvos por nossa inteligência", correta: false },
                            { numero: 4, texto: "A salvação depende apenas do batismo", correta: false }
                        ],
                        explicacao: "Tito 3:5 - Não pelas obras de justiça que houvéssemos feito, mas segundo a sua misericórdia, nos salvou pelo lavar da regeneração e da renovação do Espírito Santo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Paulo recomenda fazer com o homem que é faccioso (herético), após a primeira e segunda admoestação?",
                        opcoes: [
                            { numero: 1, texto: "Evita-o", correta: true },
                            { numero: 2, texto: "Debate com ele todos os dias", correta: false },
                            { numero: 3, texto: "Torna-o líder da igreja", correta: false },
                            { numero: 4, texto: "Ignora o que ele diz", correta: false }
                        ],
                        explicacao: "Tito 3:10 - Ao homem faccioso, depois da primeira e segunda admoestação, evita-o.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};