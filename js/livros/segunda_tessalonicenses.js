// js/livros/segunda_tessalonicenses.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const segunda_tessalonicenses = {
    nome: "2ª Tessalonicenses",
    icone: "⚖️", // Ícone sugerindo o justo juízo de Deus
    autor: "Paulo",
    //background: "./imagens/2tessalonicenses_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "O Justo Juízo de Deus",
            texto: `¹ Paulo, e Silvano, e Timóteo, à igreja dos tessalonicenses, em Deus nosso Pai, e no Senhor Jesus Cristo:
² Graça e paz a vós da parte de Deus nosso Pai, e da do Senhor Jesus Cristo.
³ Sempre devemos, irmãos, dar graças a Deus por vós, como é justo, porque a vossa fé cresce muitíssimo e o amor de cada um de todos vós aumenta de uns para com os outros,
⁴ De maneira que nós mesmos nos gloriamos de vós nas igrejas de Deus por causa da vossa paciência e fé, e em todas as vossas perseguições e aflições que suportais;
⁵ Prova clara do justo juízo de Deus, para que sejais havidos por dignos do reino de Deus, pelo qual também padeceis;
⁶ Se de fato é justo diante de Deus que dê em paga tribulação aos que vos atribulam,
⁷ E a vós, que sois atribulados, descanso conosco, quando se manifestar o Senhor Jesus desde o céu com os anjos do seu poder,
⁸ Com labareda de fogo, tomando vingança dos que não conhecem a Deus e dos que não obedecem ao evangelho de nosso Senhor Jesus Cristo;
⁹ Os quais, por castigo, padecerão eterna perdição, longe da face do Senhor e da glória do seu poder,
¹⁰ Quando vier para ser glorificado nos seus santos, e para se fazer admirável naquele dia em todos os que creem (porquanto o nosso testemunho foi crido entre vós).
¹¹ Por isso também rogamos sempre por vós, para que o nosso Deus vos faça dignos da sua vocação, e cumpra todo o desejo da sua bondade, e a obra da fé com poder;
¹² Para que o nome de nosso Senhor Jesus Cristo seja em vós glorificado, e vós nele, segundo a graça de nosso Deus e do Senhor Jesus Cristo. 
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Paulo diz que é justo da parte de Deus em relação aos que atribulam os fiéis?",
                        opcoes: [
                            { numero: 1, texto: "Dar-lhes riquezas", correta: false },
                            { numero: 2, texto: "Pagar com tribulação aos que vos atribulam", correta: true },
                            { numero: 3, texto: "Ignorar suas ações", correta: false },
                            { numero: 4, texto: "Premiar a todos igualmente", correta: false }
                        ],
                        explicacao: "2 Tessalonicenses 1:6 - Se de fato é justo diante de Deus que ele dê em paga tribulação aos que vos atribulam.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como o Senhor Jesus se manifestará desde o céu?",
                        opcoes: [
                            { numero: 1, texto: "Em silêncio total", correta: false },
                            { numero: 2, texto: "Com os anjos do seu poder, em labareda de fogo", correta: true },
                            { numero: 3, texto: "Como um homem comum e sem brilho", correta: false },
                            { numero: 4, texto: "Apenas em uma visão secreta", correta: false }
                        ],
                        explicacao: "2 Tessalonicenses 1:7-8 - ...quando se manifestar o Senhor Jesus desde o céu com os anjos do seu poder, em labareda de fogo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "O Homem do Pecado",
            texto: ` ¹ ORA, irmãos, rogamo-vos, pela vinda de nosso Senhor Jesus Cristo, e pela nossa reunião com ele,
² Que não vos movais facilmente do vosso entendimento, nem vos perturbeis, quer por espírito, quer por palavra, quer por epístola, como de nós, como se o dia de Cristo estivesse já perto.
³ Ninguém de maneira alguma vos engane; porque não será assim sem que antes venha a apostasia, e se manifeste o homem do pecado, o filho da perdição,
⁴ O qual se opõe, e se levanta contra tudo o que se chama Deus, ou se adora; de sorte que se assentará, como Deus, no templo de Deus, querendo parecer Deus.
⁵ Não vos lembrais de que estas coisas vos dizia quando ainda estava convosco?
⁶ E agora vós sabeis o que o detém, para que a seu próprio tempo seja manifestado.
⁷ Porque já o mistério da injustiça opera; somente há um que agora o retém até que do meio seja tirado;
⁸ E então será revelado o iníquo, a quem o Senhor desfará pelo Espírito da sua boca, e aniquilará pelo esplendor da sua vinda;
⁹ A esse cuja vinda é segundo a eficácia de Satanás, com todo o poder, e sinais e prodígios de mentira,
¹⁰ E com todo o engano da injustiça para os que perecem, porque não receberam o amor da verdade para se salvarem.
¹¹ E por isso Deus lhes enviará a operação do erro, para que creiam a mentira;
¹² Para que sejam julgados todos os que não creram a verdade, antes tiveram prazer na iniquidade.
¹³ Mas devemos sempre dar graças a Deus por vós, irmãos amados do Senhor, por vos ter Deus elegido desde o princípio para a salvação, em santificação do Espírito, e fé da verdade;
¹⁴ Para o que pelo nosso evangelho vos chamou, para alcançardes a glória de nosso Senhor Jesus Cristo.
¹⁵ Então, irmãos, estai firmes e retende as tradições que vos foram ensinadas, seja por palavra, seja por epístola nossa.
¹⁶ E o próprio nosso Senhor Jesus Cristo e nosso Deus e Pai, que nos amou, e em graça nos deu uma eterna consolação e boa esperança,
¹⁷ Console os vossos corações, e vos confirme em toda a boa palavra e obra. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que deve acontecer antes do dia do Senhor, para que ninguém seja enganado?",
                        opcoes: [
                            { numero: 1, texto: "Que venha primeiro a apostasia e se manifeste o homem do pecado", correta: true },
                            { numero: 2, texto: "Que todos se tornem cristãos", correta: false },
                            { numero: 3, texto: "Que a paz mundial seja estabelecida", correta: false },
                            { numero: 4, texto: "Que o templo seja destruído novamente", correta: false }
                        ],
                        explicacao: "2 Tessalonicenses 2:3 - Ninguém de maneira alguma vos engane; porque não será assim sem que antes venha a apostasia, e se manifeste o homem do pecado, o filho da perdição.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como o Senhor desfará o 'iníquo' quando ele se manifestar?",
                        opcoes: [
                            { numero: 1, texto: "Com exércitos humanos", correta: false },
                            { numero: 2, texto: "Com o sopro da sua boca e pelo esplendor da sua vinda", correta: true },
                            { numero: 3, texto: "Através de um longo processo judicial", correta: false },
                            { numero: 4, texto: "O iníquo nunca será desfeito", correta: false }
                        ],
                        explicacao: "2 Tessalonicenses 2:8 - E então será revelado o iníquo, a quem o Senhor desfará pelo assopro da sua boca, e aniquilará pelo esplendor da sua vinda.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "O Dever de Trabalhar",
            texto: ` ¹ No demais, irmãos, rogai por nós, para que a palavra do Senhor tenha livre curso e seja glorificada, como também o é entre vós;
² E para que sejamos livres de homens dissolutos e maus; porque a fé não é de todos.
³ Mas fiel é o Senhor, que vos confirmará, e guardará do maligno.
⁴ E confiamos quanto a vós no Senhor, que não só fazeis como fareis o que vos mandamos.
⁵ Ora o Senhor encaminhe os vossos corações no amor de Deus, e na paciência de Cristo.
⁶ Mandamo-vos, porém, irmãos, em nome de nosso Senhor Jesus Cristo, que vos aparteis de todo o irmão que anda desordenadamente, e não segundo a tradição que de nós recebeu.
⁷ Porque vós mesmos sabeis como convém imitar-nos, pois que não nos portamos desordenadamente entre vós,
⁸ Nem de graça comemos o pão de homem algum, mas com trabalho e fadiga, trabalhando noite e dia, para não sermos pesados a nenhum de vós.
⁹ Não porque não tivéssemos autoridade, mas para vos dar em nós mesmos exemplo, para nos imitardes.
¹⁰ Porque, quando ainda estávamos convosco, vos mandamos isto, que, se alguém não quiser trabalhar, não coma também.
¹¹ Porquanto ouvimos que alguns entre vós andam desordenadamente, não trabalhando, antes fazendo coisas vãs.
¹² A esses tais, porém, mandamos, e exortamos por nosso Senhor Jesus Cristo, que, trabalhando com sossego, comam o seu próprio pão.
¹³ E vós, irmãos, não vos canseis de fazer o bem.
¹⁴ Mas, se alguém não obedecer à nossa palavra por esta carta, notai o tal, e não vos mistureis com ele, para que se envergonhe.
¹⁵ Todavia não o tenhais como inimigo, mas admoestai-o como irmão.
¹⁶ Ora, o mesmo Senhor da paz vos dê sempre paz de toda a maneira. O Senhor seja com todos vós.
¹⁷ Saudação da minha própria mão, de mim, Paulo, que é o sinal em todas as epístolas; assim escrevo.
¹⁸ A graça de nosso Senhor Jesus Cristo seja com todos vós. Amém. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era a regra que Paulo dava quando estava entre os tessalonicenses sobre o trabalho?",
                        opcoes: [
                            { numero: 1, texto: "Todos devem descansar sempre", correta: false },
                            { numero: 2, texto: "Se alguém não quiser trabalhar, não coma também", correta: true },
                            { numero: 3, texto: "A igreja deve sustentar a todos sem distinção", correta: false },
                            { numero: 4, texto: "Apenas os líderes devem trabalhar", correta: false }
                        ],
                        explicacao: "2 Tessalonicenses 3:10 - Porque, quando ainda estávamos convosco, vos mandamos isto, que, se alguém não quiser trabalhar, não coma também.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Paulo diz para não fazermos em relação à prática do bem?",
                        opcoes: [
                            { numero: 1, texto: "Não vos canseis de fazer o bem", correta: true },
                            { numero: 2, texto: "Façam o bem apenas aos amigos", correta: false },
                            { numero: 3, texto: "Cobrem por cada boa ação realizada", correta: false },
                            { numero: 4, texto: "O bem é desnecessário se houver fé", correta: false }
                        ],
                        explicacao: "2 Tessalonicenses 3:13 - E vós, irmãos, não vos canseis de fazer o bem.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};