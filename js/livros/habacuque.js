const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const habacuque = {
    nome: "Habacuque",
      icone: "📜",
    autor: "Habacuque",
    //background: "./imagens/habacuque_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "As Queixas de Habacuque",
            texto: `¹ O peso que viu o profeta Habacuque.
² Até quando, Senhor, clamarei eu, e tu não me escutarás? Gritar-te-ei: Violência! E não salvarás?
³ Por que razão me mostras a iniquidade, e me fazes ver a opressão? Pois que a destruição e a violência estão diante de mim, havendo também quem suscite a contenda e o litígio.
⁴ Por esta causa a lei se afrouxa, e o juízo nunca se manifesta; porque o ímpio cerca o justo, e o juízo se manifesta torcido.
⁵ Vede entre os gentios e olhai, e maravilhai-vos, e admirai-vos; porque realizarei em vossos dias uma obra que vós não crereis, quando for contada.
⁶ Porque eis que suscito os caldeus, nação amarga e impetuosa, que marcha sobre a largura da terra, para apoderar-se de moradas que não são suas.
⁷ Horrível e terrível é; dela mesma sairá o seu juízo e a sua dignidade.
⁸ E os seus cavalos são mais ligeiros do que os leopardos, e mais espertos do que os lobos à tarde; os seus cavaleiros espalham-se por toda parte; os seus cavaleiros virão de longe; voarão como águias que se apressam a devorar.
⁹ Eles todos virão para fazer violência; os seus rostos buscarão o vento oriental, e reunirão os cativos como areia.
¹⁰ E escarnecerão dos reis, e dos príncipes farão zombaria; eles se rirão de todas as fortalezas, porque amontoarão terra, e as tomarão.
¹¹ Então muda a sua mente, e seguirá, e se fará culpado, atribuindo este seu poder ao seu deus.
¹² Não és tu desde a eternidade, ó Senhor meu Deus, meu Santo? Nós não morreremos. Ó Senhor, para juízo o puseste, e tu, ó Rocha, o fundaste para castigar.
¹³ Tu és tão puro de olhos, que não podes ver o mal, e a opressão não podes contemplar. Por que olhas para os que procedem aleivosamente, e te calas quando o ímpio devora aquele que é mais justo do que ele?
¹⁴ E por que farias os homens como os peixes do mar, como os répteis, que não têm quem os governe?
¹⁵ Ele a todos levantará com o anzol, apanhá-los-á com a sua rede, e os ajuntará na sua rede varredoura; por isso ele se alegrará e se regozijará.
¹⁶ Por isso sacrificará à sua rede, e queimará incenso à sua varredoura; porque com elas engordou a sua porção, e engrossou a sua comida.
¹⁷ Porventura por isso esvaziará a sua rede e não terá piedade de matar as nações continuamente?
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é a pergunta inicial que o profeta faz ao Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Até quando, Senhor, clamarei eu, e tu não me ouvirás?", correta: true },
                            { numero: 2, texto: "Por que as águas do mar se agitam?", correta: false },
                            { numero: 3, texto: "Onde estão os teus anjos?", correta: false },
                            { numero: 4, texto: "Quando voltarei para Jerusalém?", correta: false }
                        ],
                        explicacao: "Habacuque 1:2 - Até quando, Senhor, clamarei eu, e tu não me ouvirás?...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Que nação amarga e apressada o Senhor estava levantando para o juízo?",
                        opcoes: [
                            { numero: 1, texto: "Os Egípcios", correta: false },
                            { numero: 2, texto: "Os Filisteus", correta: false },
                            { numero: 3, texto: "Os Caldeus (Babilônios)", correta: true },
                            { numero: 4, texto: "Os Gregos", correta: false }
                        ],
                        explicacao: "Habacuque 1:6 - Porque eis que levanto os caldeus, nação amarga e apressada...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como são descritos os cavalos dessa nação invasora?",
                        opcoes: [
                            { numero: 1, texto: "Mais lentos que camelos", correta: false },
                            { numero: 2, texto: "Como brisa suave", correta: false },
                            { numero: 3, texto: "Pretos como o carvão", correta: false },
                            { numero: 4, texto: "Mais ligeiros do que os leopardos", correta: true }
                        ],
                        explicacao: "Habacuque 1:8 - E os seus cavalos são mais ligeiros do que os leopardos...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "A Resposta de Deus e os 'Ais'",
            texto: `¹ Sobre a minha guarda estarei, e sobre a fortaleza me apresentarei e vigiarei, para ver o que falará a mim, e o que eu responderei quando eu for repreendido.
² Então o Senhor me respondeu, e disse: Escreve a visão e torna-a bem legível sobre tábuas, para que a possa ler quem passa correndo.
³ Porque a visão é ainda para o tempo determinado, mas se apressa para o fim, e não enganará; se tardar, espera-o, porque certamente virá, não tardará.
⁴ Eis que a sua alma está orgulhosa, não é reta nele; mas o justo pela sua fé viverá.
⁵ Tanto mais que, por ser dado ao vinho é desleal; homem soberbo que não permanecerá; que alarga como o inferno a sua alma; e é como a morte que não se farta, e ajunta a si todas as nações, e congrega a si todos os povos.
⁶ Não levantarão, pois, todos estes contra ele uma parábola e um provérbio sarcástico contra ele? E se dirá: Ai daquele que multiplica o que não é seu! (Até quando?) e daquele que carrega sobre si dívidas!
⁷ Porventura não se levantarão de repente teus usurários, e não despertarão os que te farão tremer, e não lhes servirás tu de despojo?
⁸ Porquanto despojaste a muitas nações, todos os demais povos te despojarão a ti, por causa do sangue dos homens, e da violência feita à terra, à cidade, e a todos os que nela habitam.
⁹ Ai daquele que, para a sua casa, ajunta cobiçosamente bens mal adquiridos, para pôr o seu ninho no alto, a fim de se livrar do poder do mal!
¹⁰ Vergonha maquinaste para a tua casa; destruindo tu a muitos povos, pecaste contra a tua alma.
¹¹ Porque a pedra clamará da parede, e a trave lhe responderá do madeiramento.
¹² Ai daquele que edifica a cidade com sangue, e que funda a cidade com iniquidade!
¹³ Porventura não vem do Senhor dos Exércitos que os povos trabalhem pelo fogo e os homens se cansem em vão?
¹⁴ Porque a terra se encherá do conhecimento da glória do Senhor, como as águas cobrem o mar.
¹⁵ Ai daquele que dá de beber ao seu companheiro! Ai de ti, que adicionas à bebida o teu furor, e o embebedas para ver a sua nudez!
¹⁶ Serás farto de ignomínia em lugar de honra; bebe tu também, e sê como um incircunciso; o cálice da mão direita do Senhor voltará a ti, e ignomínia cairá sobre a tua glória.
¹⁷ Porque a violência cometida contra o Líbano te cobrirá, e a destruição das feras te amedrontará, por causa do sangue dos homens, e da violência feita à terra, à cidade, e a todos os que nela habitam.
¹⁸ Que aproveita a imagem de escultura, depois que a esculpiu o seu artífice? Ela é imagem de fundição que ensina mentira, para que quem a formou confie na sua obra, fazendo ídolos mudos?
¹⁹ Ai daquele que diz ao pau: Acorda! E à pedra muda: Desperta! Pode isso ensinar? Eis que está coberta de ouro e de prata, mas dentro dela não há espírito algum.
²⁰ Mas o Senhor está no seu santo templo; cale-se diante dele toda a terra.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor ordena que o profeta faça com a visão?",
                        opcoes: [
                            { numero: 1, texto: "Que a conte apenas aos reis", correta: false },
                            { numero: 2, texto: "Escreve a visão e torna-a bem legível sobre tábuas", correta: true },
                            { numero: 3, texto: "Que a mantenha em segredo", correta: false },
                            { numero: 4, texto: "Que a queime no altar", correta: false }
                        ],
                        explicacao: "Habacuque 2:2 - ...Escreve a visão e torna-a bem legível sobre tábuas...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Segundo o versículo 4, o justo viverá pelo quê?",
                        opcoes: [
                            { numero: 1, texto: "Pelas suas obras", correta: false },
                            { numero: 2, texto: "Pela sua força", correta: false },
                            { numero: 3, texto: "Pela sua fé", correta: true },
                            { numero: 4, texto: "Pela lei de Moisés", correta: false }
                        ],
                        explicacao: "Habacuque 2:4 - ...mas o justo pela sua fé viverá.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Onde o Senhor está, para que toda a terra se cale diante dele?",
                        opcoes: [
                            { numero: 1, texto: "No seu santo templo", correta: true },
                            { numero: 2, texto: "Nas nuvens do céu", correta: false },
                            { numero: 3, texto: "No meio do mar", correta: false },
                            { numero: 4, texto: "Nos montes de Judá", correta: false }
                        ],
                        explicacao: "Habacuque 2:20 - Mas o Senhor está no seu santo templo; cale-se diante dele toda a terra.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "A Oração de Habacuque",
            texto: `¹ Oração do profeta Habacuque sobre Sigionote.
² Ouvi, Senhor, a tua palavra, e temi; aviva, ó Senhor, a tua obra no meio dos anos, no meio dos anos faze-a conhecida; na tua ira lembra-te da misericórdia.
³ Deus veio de Temã, e do monte de Parã o Santo (Selá). A sua glória cobriu os céus, e a terra encheu-se do seu louvor.
⁴ E o resplendor se fez como a luz, raios brilhantes saíam da sua mão, e ali estava o esconderijo da sua força.
⁵ Adiante dele ia a peste, e brasas ardentes saíam dos seus passos.
⁶ Parou, e mediu a terra; olhou, e separou as nações; e os montes perpétuos foram esmiuçados; os outeiros eternos se abateram, porque os caminhos eternos lhe pertencem.
⁷ Vi as tendas de Cusã em aflição; tremiam as cortinas da terra de Midiã.
⁸ Acaso é contra os rios, Senhor, que estás irado? É contra os ribeiros a tua ira, ou contra o mar o teu furor, visto que andas montado sobre os teus cavalos, e nos teus carros de salvação?
⁹ Descoberto se movimentou o teu arco; os juramentos feitos às tribos foram uma palavra segura. (Selá.) Tu fendeste a terra com rios.
¹⁰ Os montes te viram, e tremeram; a inundação das águas passou; o abismo deu a sua voz, levantou ao alto as suas mãos.
¹¹ O sol e a lua pararam nas suas moradas; andaram à luz das tuas flechas, ao resplendor do relâmpago da tua lança.
¹² Com indignação marchaste pela terra, com ira trilhaste os gentios.
¹³ Tu saíste para salvação do teu povo, para salvação do teu ungido; tu feriste a cabeça da casa do ímpio, descobrindo o alicerce até ao pescoço. (Selá.)
¹⁴ Tu traspassaste com as suas próprias lanças a cabeça das suas vilas; eles me acometeram tempestuosos para me espalharem; alegravam-se, como se estivessem para devorar o pobre em segredo.
¹⁵ Tu com os teus cavalos marchaste pelo mar, pela massa de grandes águas.
¹⁶ Ouvindo-o eu, o meu ventre se comoveu, à sua voz tremeram os meus lábios; entrou a podridão nos meus ossos, e estremeci dentro de mim; no dia da angústia descansarei, quando subir contra o povo que invadirá com suas tropas.
¹⁷ Porque ainda que a figueira não floresça, nem haja fruto na vide; ainda que decepcione o produto da oliveira, e os campos não produzam mantimento; ainda que as ovelhas da malhada sejam arrebatadas, e nos currais não haja gado;
¹⁸ Todavia eu me alegrarei no Senhor; exultarei no Deus da minha salvação.
¹⁹ O Senhor Deus é a minha força, e fará os meus pés como os das cervas, e me fará andar sobre as minhas alturas. (Para o cantor-mor sobre os meus instrumentos de corda).
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o profeta pede ao Senhor que avive no meio dos anos?",
                        opcoes: [
                            { numero: 1, texto: "A sua obra", correta: true },
                            { numero: 2, texto: "O fogo do altar", correta: false },
                            { numero: 3, texto: "O reinado de Judá", correta: false },
                            { numero: 4, texto: "A colheita do trigo", correta: false }
                        ],
                        explicacao: "Habacuque 3:2 - ...aviva, ó Senhor, a tua obra no meio dos anos...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Ainda que a figueira não floresça e não haja fruto na vide, o que o profeta fará?",
                        opcoes: [
                            { numero: 1, texto: "Fugirá para o deserto", correta: false },
                            { numero: 2, texto: "Se alegrará no Senhor e no Deus da sua salvação", correta: true },
                            { numero: 3, texto: "Reclamará da sua sorte", correta: false },
                            { numero: 4, texto: "Procurará outros deuses", correta: false }
                        ],
                        explicacao: "Habacuque 3:17-18 - Porque ainda que a figueira não floresça... Todavia eu me alegrarei no Senhor...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O Senhor Deus é a minha força, e fará os meus pés como os de quem?",
                        opcoes: [
                            { numero: 1, texto: "Como os da águia", correta: false },
                            { numero: 2, texto: "Como os do leão", correta: false },
                            { numero: 3, texto: "Como os das cervas", correta: true },
                            { numero: 4, texto: "Como os do cavalo", correta: false }
                        ],
                        explicacao: "Habacuque 3:19 - O Senhor Deus é a minha força, e fará os meus pés como os das cervas...",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};