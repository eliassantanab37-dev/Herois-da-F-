const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const obadias = {
    nome: "Obadias",
    icone: "🦅",
    autor: "Obadias",
    //background: "./imagens/obadias_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "A Profecia contra Edom",
            texto: ` ¹ Visão de Obadias: Assim diz o Senhor Deus a respeito de Edom: Temos ouvido a pregação do Senhor, e foi enviado aos gentios um emissário, dizendo: Levantai-vos, e levantemo-nos contra ela para a guerra.
² Eis que te fiz pequeno entre os gentios; tu és muito desprezado.
³ A soberba do teu coração te enganou, como o que habita nas fendas das rochas, na sua alta morada, que diz no seu coração: Quem me derrubará em terra?
⁴ Se te elevares como águia, e puseres o teu ninho entre as estrelas, dali te derrubarei, diz o Senhor.
⁵ Se viessem a ti ladrões, ou assaltantes de noite (como estás destruído!), não furtariam o que lhes bastasse? Se a ti viessem os vindimadores, não deixariam algumas uvas?
⁶ Como foram rebuscados os bens de Esaú! Como foram investigados os seus tesouros escondidos!
⁷ Todos os teus confederados te levaram até a fronteira; os que gozam da tua paz te enganaram, prevaleceram contra ti; os que comem o teu pão puseram debaixo de ti uma armadilha; não há nele entendimento.
⁸ Porventura não acontecerá naquele dia, diz o Senhor, que farei perecer os sábios de Edom, e o entendimento do monte de Esaú?
⁹ E os teus poderosos, ó Temã, estarão atemorizados, para que do monte de Esaú seja cada um exterminado pela matança.
¹⁰ Por causa da violência feita a teu irmão Jacó, cobrir-te-á a confusão, e serás exterminado para sempre.
¹¹ No dia em que o confrontaste, no dia em que estranhos levaram cativo o seu exército, e os estrangeiros entravam pelas suas portas, e lançaram sortes sobre Jerusalém, tu eras também como um deles.
¹² Mas tu não devias olhar com prazer para o dia de teu irmão, no dia do seu infortúnio; nem alegrar-te sobre os filhos de Judá, no dia da sua ruína; nem alargar a tua boca, no dia da angústia;
¹³ Nem entrar pela porta do meu povo, no dia da sua calamidade; sim, tu não devias olhar satisfeito o seu mal, no dia da sua calamidade; nem lançar mão dos seus bens, no dia da sua calamidade;
¹⁴ Nem parar nas encruzilhadas, para exterminares os que escapassem; nem entregar os que lhe restassem, no dia da angústia.
¹⁵ Porque o dia do Senhor está perto, sobre todos os gentios; como tu fizeste, assim se fará contigo; a tua recompensa voltará sobre a tua cabeça.
¹⁶ Porque, como vós bebestes no meu santo monte, assim beberão também de contínuo todos os gentios; beberão, e sorverão, e serão como se nunca tivessem sido.
¹⁷ Mas no monte Sião haverá livramento, e ele será santo; e os da casa de Jacó possuirão as suas herdades.
¹⁸ E a casa de Jacó será fogo, e a casa de José uma chama, e a casa de Esaú palha; e se acenderão contra eles, e os consumirão; e ninguém mais restará da casa de Esaú, porque o Senhor o falou.
¹⁹ E os do sul possuirão o monte de Esaú, e os das planícies, os filisteus; possuirão também os campos de Efraim, e os campos de Samaria; e Benjamim possuirá a Gileade.
²⁰ E os cativos deste exército, dos filhos de Israel, possuirão os cananeus, até Zarefate; e os cativos de Jerusalém, que estão em Sefarade, possuirão as cidades do sul.
²¹ E subirão salvadores ao monte Sião, para julgarem o monte de Esaú; e o reino será do Senhor.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde os edomitas habitavam, o que os fazia sentir seguros e soberbos?",
                        opcoes: [
                            { numero: 1, texto: "Nas fendas das penhascos, no seu alto assento", correta: true },
                            { numero: 2, texto: "Em ilhas distantes no mar", correta: false },
                            { numero: 3, texto: "Debbaixo da terra em túneis", correta: false },
                            { numero: 4, texto: "Em grandes cidades muradas no deserto", correta: false }
                        ],
                        explicacao: "Obadias 1:3 - A soberba do teu coração te enganou, como quem habita nas fendas das penhascos, no seu alto assento...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceria com Edom, mesmo que subissem como a águia e pusessem o ninho entre as estrelas?",
                        opcoes: [
                            { numero: 1, texto: "Dali o Senhor os derrubaria", correta: true },
                            { numero: 2, texto: "Eles dominariam o mundo", correta: false },
                            { numero: 3, texto: "Eles seriam protegidos pelos anjos", correta: false },
                            { numero: 4, texto: "Eles seriam levados para outra terra", correta: false }
                        ],
                        explicacao: "Obadias 1:4 - Se te elevares como águia, e puseres o teu ninho entre as estrelas, dali te derribarei, diz o Senhor.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por causa de que tipo de violência contra seu irmão Jacó, Edom seria coberto de vergonha?",
                        opcoes: [
                            { numero: 1, texto: "Por roubar o gado", correta: false },
                            { numero: 2, texto: "Por queimar as plantações", correta: false },
                            { numero: 3, texto: "Pela violência contra o seu irmão Jacó", correta: true },
                            { numero: 4, texto: "Por fechar os poços de água", correta: false }
                        ],
                        explicacao: "Obadias 1:10 - Por causa da violência contra o teu irmão Jacó, cobrir-te-á a confusão, e serás exterminado para sempre.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};