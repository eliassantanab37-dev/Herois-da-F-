// js/livros/segunda_timoteo.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const segunda_timoteo = {
    nome: "2 Timóteo",
    icone: "⚔️", // Ícone sugerindo o bom combate
    autor: "Paulo",
   // background: "./imagens/2timoteo_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "O Espírito de Poder e Amor",
            texto: `¹ Paulo, apóstolo de Jesus Cristo, pela vontade de Deus, segundo a promessa da vida que está em Cristo Jesus,
² A Timóteo, meu amado filho: Graça, misericórdia, e paz da parte de Deus Pai, e da de Cristo Jesus, Senhor nosso.
³ Dou graças a Deus, a quem desde os meus antepassados sirvo com uma consciência pura, de que sem cessar faço memória de ti nas minhas orações noite e dia;
⁴ Desejando muito ver-te, lembrando-me das tuas lágrimas, para me encher de gozo;
⁵ Trazendo à memória a fé não fingida que em ti há, a qual habitou primeiro em tua avó Loide, e em tua mãe Eunice, e estou certo de que também habita em ti.
⁶ Por cujo motivo te lembro que despertes o dom de Deus que existe em ti pela imposição das minhas mãos.
⁷ Porque Deus não nos deu o espírito de temor, mas de fortaleza, e de amor, e de moderação.
⁸ Portanto, não te envergonhes do testemunho de nosso Senhor, nem de mim, que sou prisioneiro seu; antes participa das aflições do evangelho segundo o poder de Deus,
⁹ Que nos salvou, e chamou com uma santa vocação; não segundo as nossas obras, mas segundo o seu próprio propósito e graça que nos foi dada em Cristo Jesus antes dos tempos dos séculos;
¹⁰ E que é manifesta agora pela aparição de nosso Salvador Jesus Cristo, o qual aboliu a morte, e trouxe à luz a vida e a incorrupção pelo evangelho;
¹¹ Para o que fui constituído pregador, e apóstolo, e doutor dos gentios.
¹² Por cuja causa padeço também isto, mas não me envergonho; porque eu sei em quem tenho crido, e estou certo de que é poderoso para guardar o meu depósito até àquele dia.
¹³ Conserva o modelo das sãs palavras que de mim tens ouvido, na fé e no amor que há em Cristo Jesus.
¹⁴ Guarda o bom depósito pelo Espírito Santo que habita em nós.
¹⁵ Bem sabes isto, que os que estão na Ásia todos se apartaram de mim; entre os quais foram Figelo e Hermógenes.
¹⁶ O Senhor conceda misericórdia à casa de Onesíforo, porque muitas vezes me recreou, e não se envergonhou das minhas cadeias.
¹⁷ Antes, vindo ele a Roma, com muito cuidado me procurou e me achou.
¹⁸ O Senhor lhe conceda que naquele dia ache misericórdia diante do Senhor. E, quanto me ajudou em Éfeso, melhor o sabes tu. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Que tipo de espírito Deus nos deu, segundo o versículo 7?",
                        opcoes: [
                            { numero: 1, texto: "De temor e covardia", correta: false },
                            { numero: 2, texto: "De fortaleza, de amor e de moderação", correta: true },
                            { numero: 3, texto: "De dúvida e incerteza", correta: false },
                            { numero: 4, texto: "De tristeza profunda", correta: false }
                        ],
                        explicacao: "2 Timóteo 1:7 - Porque Deus não nos deu o espírito de temor, mas de fortaleza, e de amor, e de moderação.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "O Bom Soldado de Cristo",
            texto: ` ¹ Tu, pois, meu filho, fortifica-te na graça que há em Cristo Jesus.
² E o que de mim, entre muitas testemunhas, ouviste, confia-o a homens fiéis, que sejam idôneos para também ensinarem os outros.
³ Tu pois, sofre as aflições, como bom soldado de Jesus Cristo.
⁴ Ninguém que milita se embaraça com negócios desta vida, a fim de agradar àquele que o alistou para a guerra.
⁵ E, se alguém também milita, não é coroado se não militar legitimamente.
⁶ O lavrador que trabalha deve ser o primeiro a gozar dos frutos.
⁷ Considera o que digo, e o Senhor te dê entendimento em tudo.
⁸ Lembra-te de que Jesus Cristo, que é da descendência de Davi, ressuscitou dentre os mortos, segundo o meu evangelho;
⁹ Por isso sofro trabalhos e até prisões, como um malfeitor; mas a palavra de Deus não está presa.
¹⁰ Portanto, tudo sofro por amor dos escolhidos, para que também eles alcancem a salvação que está em Cristo Jesus com glória eterna.
¹¹ Palavra fiel é esta: que, se morrermos com ele, também com ele viveremos;
¹² Se sofrermos, também com ele reinaremos; se o negarmos, também ele nos negará;
¹³ Se formos infiéis, ele permanece fiel; não pode negar-se a si mesmo.
¹⁴ Traze estas coisas à memória, ordenando-lhes diante do Senhor que não tenham contendas de palavras, que para nada aproveitam e são para perversão dos ouvintes.
¹⁵ Procura apresentar-te a Deus aprovado, como obreiro que não tem de que se envergonhar, que maneja bem a palavra da verdade.
¹⁶ Mas evita os falatórios profanos, porque produzirão maior impiedade.
¹⁷ E a palavra desses roerá como gangrena; entre os quais são Himeneu e Fileto;
¹⁸ Os quais se desviaram da verdade, dizendo que a ressurreição era já feita, e perverteram a fé de alguns.
¹⁹ Todavia o fundamento de Deus fica firme, tendo este selo: O Senhor conhece os que são seus, e qualquer que profere o nome de Cristo aparte-se da iniquidade.
²⁰ Ora, numa grande casa não somente há vasos de ouro e de prata, mas também de pau e de barro; uns para honra, outros, porém, para desonra.
²¹ De sorte que, se alguém se purificar destas coisas, será vaso para honra, santificado e idôneo para uso do Senhor, e preparado para toda a boa obra.
²² Foge também das paixões da mocidade; e segue a justiça, a fé, o amor, e a paz com os que, com um coração puro, invocam o Senhor.
²³ E rejeita as questões loucas, e sem instrução, sabendo que produzem contendas.
²⁴ E ao servo do Senhor não convém contender, mas sim, ser manso para com todos, apto para ensinar, sofredor;
²⁵ Instruindo com mansidão os que resistem, a ver se porventura Deus lhes dará arrependimento para conhecerem a verdade,
²⁶ E tornarem a despertar, desprendendo-se dos laços do diabo, em que à vontade dele estão presos. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Paulo descreve o compromisso de um soldado de Cristo?",
                        opcoes: [
                            { numero: 1, texto: "Ninguém que milita se embaraça com negócios desta vida", correta: true },
                            { numero: 2, texto: "O soldado deve buscar riquezas primeiro", correta: false },
                            { numero: 3, texto: "O soldado deve evitar o sofrimento a todo custo", correta: false },
                            { numero: 4, texto: "Não há necessidade de disciplina", correta: false }
                        ],
                        explicacao: "2 Timóteo 2:4 - Ninguém que milita se embaraça com negócios desta vida, a fim de agradar àquele que o alistou para a guerra.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o obreiro deve fazer para ser aprovado diante de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Manejar bem a palavra da verdade", correta: true },
                            { numero: 2, texto: "Ganhar todas as discussões", correta: false },
                            { numero: 3, texto: "Esconder suas falhas dos outros", correta: false },
                            { numero: 4, texto: "Focar apenas em tradições humanas", correta: false }
                        ],
                        explicacao: "2 Timóteo 2:15 - Procura apresentar-te a Deus aprovado, como obreiro que não tem de que se envergonhar, que maneja bem a palavra da verdade.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "A Utilidade da Escritura",
            texto: `¹ Sabe, porém, isto: que nos últimos dias sobrevirão tempos trabalhosos.
² Porque haverá homens amantes de si mesmos, avarentos, presunçosos, soberbos, blasfemos, desobedientes a pais e mães, ingratos, profanos,
³ Sem afeto natural, irreconciliáveis, caluniadores, intemperantes, cruéis, sem amor para com os bons,
⁴ Traidores, obstinados, orgulhosos, mais amigos dos deleites do que amigos de Deus,
⁵ Tendo aparência de piedade, mas negando a eficácia dela. Destes afasta-te.
⁶ Porque deste número são os que se introduzem pelas casas, e levam cativas mulheres néscias carregadas de pecados, levadas de várias concupiscências;
⁷ Que aprendem sempre, e nunca podem chegar ao conhecimento da verdade.
⁸ E, como Janes e Jambres resistiram a Moisés, assim também estes resistem à verdade, sendo homens corruptos de entendimento e réprobos quanto à fé.
⁹ Não irão, porém, avante; porque a todos será manifesto o seu desvario, como também o foi o daqueles.
¹⁰ Tu, porém, tens seguido a minha doutrina, modo de viver, intenção, fé, longanimidade, amor, paciência,
¹¹ Perseguições e aflições tais quais me aconteceram em Antioquia, em Icônio, e em Listra; quantas perseguições sofri, e o Senhor de todas me livrou;
¹² E também todos os que piamente querem viver em Cristo Jesus padecerão perseguições.
¹³ Mas os homens maus e enganadores irão de mal para pior, enganando e sendo enganados.
¹⁴ Tu, porém, permanece naquilo que aprendeste, e de que foste inteirado, sabendo de quem o tens aprendido,
¹⁵ E que desde a tua meninice sabes as sagradas Escrituras, que podem fazer-te sábio para a salvação, pela fé que há em Cristo Jesus.
¹⁶ Toda a Escritura é divinamente inspirada, e proveitosa para ensinar, para repreender, para corrigir, para instruir em justiça;
¹⁷ Para que o homem de Deus seja perfeito, e perfeitamente instruído para toda a boa obra. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como será o caráter dos homens nos 'últimos dias'?",
                        opcoes: [
                            { numero: 1, texto: "Amantes de si mesmos, avarentos, presunçosos, soberbos", correta: true },
                            { numero: 2, texto: "Todos serão santos e humildes", correta: false },
                            { numero: 3, texto: "Não haverá mudanças no comportamento humano", correta: false },
                            { numero: 4, texto: "Os homens serão menos egoístas", correta: false }
                        ],
                        explicacao: "2 Timóteo 3:2 - Porque haverá homens amantes de si mesmos, avarentos, presunçosos, soberbos, blasfemos...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Toda a Escritura é divinamente inspirada e proveitosa para quê?",
                        opcoes: [
                            { numero: 1, texto: "Ensinar, redarguir, corrigir, instruir em justiça", correta: true },
                            { numero: 2, texto: "Apenas para fins históricos", correta: false },
                            { numero: 3, texto: "Para entreter os leitores", correta: false },
                            { numero: 4, texto: "Somente para os líderes da igreja", correta: false }
                        ],
                        explicacao: "2 Timóteo 3:16 - Toda a Escritura é divinamente inspirada, e proveitosa para ensinar, para redarguir, para corrigir, para instruir em justiça.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "O Combate e a Coroa",
            texto: ` ¹ Conjuro-te, pois, diante de Deus, e do Senhor Jesus Cristo, que há de julgar os vivos e os mortos, na sua vinda e no seu reino,
² Que pregues a palavra, instes a tempo e fora de tempo, corrijas, repreendas, exortes, com toda a longanimidade e doutrina.
³ Porque virá tempo em que não suportarão a sã doutrina; mas, tendo coceira nos ouvidos, amontoarão para si doutores conforme as suas próprias concupiscências;
⁴ E desviarão os ouvidos da verdade, voltando às fábulas.
⁵ Mas tu, sê sóbrio em tudo, sofre as aflições, faze a obra de um evangelista, cumpre o teu ministério.
⁶ Porque eu já estou sendo oferecido por aspersão de sacrifício, e o tempo da minha partida está próximo.
⁷ Combati o bom combate, acabei a carreira, guardei a fé.
⁸ Desde agora, a coroa da justiça me está guardada, a qual o Senhor, justo juiz, me dará naquele dia; e não somente a mim, mas também a todos os que amarem a sua vinda.
⁹ Procura vir ter comigo depressa,
¹⁰ Porque Demas me desamparou, amando o presente século, e foi para Tessalônica, Crescente para Galácia, Tito para Dalmácia.
¹¹ Só Lucas está comigo. Toma Marcos, e traze-o contigo, porque me é muito útil para o ministério.
¹² Também enviei Tíquico a Éfeso.
¹³ Quando vieres, traze a capa que deixei em Trôade, em casa de Carpo, e os livros, principalmente os pergaminhos.
¹⁴ Alexandre, o latoeiro, causou-me muitos males; o Senhor lhe pague segundo as suas obras.
¹⁵ Tu, guarda-te também dele, porque resistiu muito às nossas palavras.
¹⁶ Ninguém me assistiu na minha primeira defesa, antes todos me desampararam. Que isto lhes não seja imputado.
¹⁷ Mas o Senhor assistiu-me e fortaleceu-me, para que por mim fosse cumprida a pregação, e todos os gentios a ouvissem; e fiquei livre da boca do leão.
¹⁸ E o Senhor me livrará de toda a má obra, e guardar-me-á para o seu reino celestial; a quem seja glória para todo o sempre. Amém.
¹⁹ Saúda a Prisca e a Áquila, e à casa de Onesíforo.
²⁰ Erasto ficou em Corinto, e deixei Trófimo doente em Mileto.
²¹ Procura vir antes do inverno. Êubulo, e Prudente, e Lino, e Cláudia, e todos os irmãos te saúdam.
²² O Senhor Jesus Cristo seja com o teu espírito. A graça seja convosco. Amém. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é o famoso testemunho de Paulo ao fim de sua vida?",
                        opcoes: [
                            { numero: 1, texto: "Combati o bom combate, acabei a carreira, guardei a fé", correta: true },
                            { numero: 2, texto: "Deveria ter viajado menos", correta: false },
                            { numero: 3, texto: "Ainda tenho muitas dúvidas", correta: false },
                            { numero: 4, texto: "Fui o homem mais rico de Roma", correta: false }
                        ],
                        explicacao: "2 Timóteo 4:7 - Combati o bom combate, acabei a carreira, guardei a fé.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que está guardado para Paulo no céu?",
                        opcoes: [
                            { numero: 1, texto: "A coroa da justiça", correta: true },
                            { numero: 2, texto: "Um grande tesouro em moedas", correta: false },
                            { numero: 3, texto: "Uma estátua de mármore", correta: false },
                            { numero: 4, texto: "Nada, ele não tinha certeza", correta: false }
                        ],
                        explicacao: "2 Timóteo 4:8 - Desde agora, a coroa da justiça me está guardada, a qual o Senhor, justo juiz, me dará naquele dia.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};