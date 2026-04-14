const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const joel = {
    nome: "Joel",
    icone: "🦗",
    autor: "Joel",
  //  background: "./imagens/joel_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "A Devaste dos Gafanhotos",
            texto: `¹ Palavra do Senhor, que foi dirigida a Joel, filho de Petuel.
² Ouvi isto, vós anciãos, e escutai, todos os moradores da terra: Porventura isto aconteceu em vossos dias, ou nos dias de vossos pais?
³ Fazei sobre isto uma narração a vossos filhos, e vossos filhos a seus filhos, e os filhos destes à outra geração.
⁴ O que ficou da lagarta, o gafanhoto o comeu, e o que ficou do gafanhoto, a locusta o comeu, e o que ficou da locusta, o pulgão o comeu.
⁵ Despertai-vos, bêbados, e chorai; gemei, todos os que bebeis vinho, por causa do mosto, porque tirado é da vossa boca.
⁶ Porque subiu contra a minha terra uma nação poderosa e sem número; os seus dentes são dentes de leão, e têm queixadas de um leão velho.
⁷ Fez da minha vide uma assolação, e tirou a casca da minha figueira; despiu-a toda, e a lançou por terra; os seus ramos se embranqueceram.
⁸ Lamenta como a virgem que está cingida de saco, pelo marido da sua mocidade.
⁹ Foi cortada a oferta de alimentos e a libação da casa do Senhor; os sacerdotes, ministros do Senhor, estão entristecidos.
¹⁰ O campo está assolado, e a terra triste; porque o trigo está destruído, o mosto se secou, o azeite acabou.
¹¹ Envergonhai-vos, lavradores, gemei, vinhateiros, sobre o trigo e a cevada; porque a colheita do campo pereceu.
¹² A vide se secou, a figueira se murchou, a romeira também, e a palmeira e a macieira; todas as árvores do campo se secaram, e já não há alegria entre os filhos dos homens.
¹³ Cingi-vos e lamentai-vos, sacerdotes; gemei, ministros do altar; entrai e passai a noite vestidos de saco, ministros do meu Deus; porque a oferta de alimentos, e a libação, foram cortadas da casa de vosso Deus.
¹⁴ Santificai um jejum, convocai uma assembleia solene, congregai os anciãos, e todos os moradores desta terra, na casa do Senhor vosso Deus, e clamai ao Senhor.
¹⁵ Ai do dia! Porque o dia do Senhor está perto, e virá como uma assolação do Todo-Poderoso.
¹⁶ Porventura o mantimento não está cortado de diante de nossos olhos, a alegria e o regozijo da casa de nosso Deus?
¹⁷ As sementes apodreceram debaixo dos seus torrões, os celeiros foram assolados, os armazéns derrubados, porque se secou o trigo.
¹⁸ Como geme o animal! As manadas de gados estão confusas, porque não têm pasto; também os rebanhos de ovelhas estão perecendo.
¹⁹ A ti, ó Senhor, clamo, porque o fogo consumiu os pastos do deserto, e a chama abrasou todas as árvores do campo.
²⁰ Também todos os animais do campo bramam a ti; porque as correntes de água se secaram, e o fogo consumiu os pastos do deserto.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quais são os quatro tipos de cortadores mencionados que devoraram a terra?",
                        opcoes: [
                            { numero: 1, texto: "O lagarto, a aranha, a formiga e o escorpião", correta: false },
                            { numero: 2, texto: "A locusta, o gafanhoto, o pulgão e a lagarta", correta: true },
                            { numero: 3, texto: "O vento, o fogo, a seca e a inundação", correta: false },
                            { numero: 4, texto: "O leão, o urso, o leopardo e o lobo", correta: false }
                        ],
                        explicacao: "Joel 1:4 - O que ficou da lagarta, o comeu o gafanhoto... o que ficou do gafanhoto, o comeu a locusta...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A quem o profeta convoca para chorar e uivar por causa da vide e da figueira?",
                        opcoes: [
                            { numero: 1, texto: "Aos soldados do exército", correta: false },
                            { numero: 2, texto: "Aos mercadores de ouro", correta: false },
                            { numero: 3, texto: "Aos bêbedos e aos que bebem vinho", correta: true },
                            { numero: 4, texto: "Aos marinheiros do mar", correta: false }
                        ],
                        explicacao: "Joel 1:5 - Despertai, bêbedos, e chorai; uivai, todos os que bebeis vinho...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o profeta ordena que os sacerdotes façam diante da assolação?",
                        opcoes: [
                            { numero: 1, texto: "Cingi-vos e lamentai-vos; passai a noite vestidos de saco", correta: true },
                            { numero: 2, texto: "Construam novos altares de pedra", correta: false },
                            { numero: 3, texto: "Fujam para as cidades vizinhas", correta: false },
                            { numero: 4, texto: "Preparem um banquete real", correta: false }
                        ],
                        explicacao: "Joel 1:13 - Cingi-vos e lamentai-vos, sacerdotes... passai a noite vestidos de saco...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "O Dia do Senhor e o Derramamento do Espírito",
            texto: ` ¹ Tocai a trombeta em Sião, e clamai em alta voz no meu santo monte; tremam todos os moradores da terra, porque o dia do Senhor vem, já está perto;
² Dia de trevas e de escuridão; dia de nuvens e densas trevas, como a alva espalhada sobre os montes; povo grande e poderoso, qual nunca houve desde o tempo antigo, nem depois dele haverá pelos anos adiante, de geração em geração.
³ Diante dele um fogo consome, e atrás dele uma chama abrasa; a terra diante dele é como o jardim do Éden, mas atrás dele um desolado deserto; sim, nada lhe escapará.
⁴ A sua aparência é como a de cavalos; e como cavaleiros assim correm.
⁵ Como o estrondo de carros, irão saltando sobre os cumes dos montes, como o ruído da chama de fogo que consome a pragana, como um povo poderoso, posto em ordem para o combate.
⁶ Diante dele temerão os povos; todos os rostos se tornarão enegrecidos.
⁷ Como valentes correrão, como homens de guerra subirão os muros; e marchará cada um no seu caminho e não se desviará da sua fileira.
⁸ Ninguém apertará a seu irmão; marchará cada um pelo seu caminho; sobre a mesma espada se arremessarão, e não serão feridos.
⁹ Irão pela cidade, correrão pelos muros, subirão às casas, entrarão pelas janelas como o ladrão.
¹⁰ Diante dele tremerá a terra, abalar-se-ão os céus; o sol e a lua se enegrecerão, e as estrelas retirarão o seu resplendor.
¹¹ E o Senhor levantará a sua voz diante do seu exército; porque muitíssimo grande é o seu arraial; porque poderoso é, executando a sua palavra; porque o dia do Senhor é grande e mui temível, e quem o poderá suportar?
¹² Ainda assim, agora mesmo diz o Senhor: Convertei-vos a mim de todo o vosso coração; e isso com jejuns, e com choro, e com pranto.
¹³ E rasgai o vosso coração, e não as vossas vestes, e convertei-vos ao Senhor vosso Deus; porque ele é misericordioso, e compassivo, e tardio em irar-se, e grande em benignidade, e se arrepende do mal.
¹⁴ Quem sabe se não se voltará e se arrependerá, e deixará após si uma bênção, em oferta de alimentos e libação para o Senhor vosso Deus?
¹⁵ Tocai a trombeta em Sião, santificai um jejum, convocai uma assembleia solene.
¹⁶ Congregai o povo, santificai a congregação, ajuntai os anciãos, congregai as crianças, e os que mamam; saia o noivo da sua recâmara, e a noiva do seu aposento.
¹⁷ Chorem os sacerdotes, ministros do Senhor, entre o alpendre e o altar, e digam: Poupa a teu povo, ó Senhor, e não entregues a tua herança ao opróbrio, para que os gentios o dominem; por que diriam entre os povos: Onde está o seu Deus?
¹⁸ Então o Senhor se mostrou zeloso da sua terra, e compadeceu-se do seu povo.
¹⁹ E o Senhor, respondendo, disse ao seu povo: Eis que vos envio o trigo, e o mosto, e o azeite, e deles sereis fartos, e vos não entregarei mais ao opróbrio entre os gentios.
²⁰ Mas removerei para longe de vós o exército do norte, e lançá-lo-ei em uma terra seca e deserta; a sua frente para o mar oriental, e a sua retaguarda para o mar ocidental; e subirá o seu mau cheiro, e subirá a sua podridão; porque fez grandes coisas.
²¹ Não temas, ó terra: regozija-te e alegra-te, porque o Senhor fez grandes coisas.
²² Não temais, animais do campo, porque os pastos do deserto reverdecerão, porque o arvoredo dará o seu fruto, a vide e a figueira darão a sua força.
²³ E vós, filhos de Sião, regozijai-vos e alegrai-vos no Senhor vosso Deus, porque ele vos dará em justa medida a chuva temporã; fará descer a chuva no primeiro mês, a temporã e a serôdia.
²⁴ E as eiras se encherão de trigo, e os lagares transbordarão de mosto e de azeite.
²⁵ E restituir-vos-ei os anos que comeu o gafanhoto, a locusta, e o pulgão e a lagarta, o meu grande exército que enviei contra vós.
²⁶ E comereis abundantemente e vos fartareis, e louvareis o nome do Senhor vosso Deus, que procedeu para convosco maravilhosamente; e o meu povo nunca mais será envergonhado.
²⁷ E vós sabereis que eu estou no meio de Israel, e que eu sou o Senhor vosso Deus, e que não há outro; e o meu povo nunca mais será envergonhado.
²⁸ E há de ser que, depois derramarei o meu Espírito sobre toda a carne, e vossos filhos e vossas filhas profetizarão, os vossos velhos terão sonhos, os vossos jovens terão visões.
²⁹ E também sobre os servos e sobre as servas naqueles dias derramarei o meu Espírito.
³⁰ E mostrarei prodígios no céu, e na terra, sangue e fogo, e colunas de fumaça.
³¹ O sol se converterá em trevas, e a lua em sangue, antes que venha o grande e terrível dia do Senhor.
³² E há de ser que todo aquele que invocar o nome do Senhor será salvo; porque no monte Sião e em Jerusalém haverá livramento, assim como disse o Senhor, e entre os sobreviventes, aqueles que o Senhor chamar.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor ordena fazer em Sião para anunciar o Seu dia?",
                        opcoes: [
                            { numero: 1, texto: "Acendei uma fogueira no monte", correta: false },
                            { numero: 2, texto: "Tocai a trombeta e dai voz de rebate", correta: true },
                            { numero: 3, texto: "Fechai as portas da cidade", correta: false },
                            { numero: 4, texto: "Cantai hinos de vitória", correta: false }
                        ],
                        explicacao: "Joel 2:1 - Tocai a trombeta em Sião, e dai voz de rebate no meu santo monte...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Segundo o versículo 13, o que o povo deve rasgar em vez das suas vestes?",
                        opcoes: [
                            { numero: 1, texto: "Os seus pergaminhos", correta: false },
                            { numero: 2, texto: "As cortinas do templo", correta: false },
                            { numero: 3, texto: "As redes de pesca", correta: false },
                            { numero: 4, texto: "O seu coração", correta: true }
                        ],
                        explicacao: "Joel 2:13 - E rasgai o vosso coração, e não as vossas vestes, e convertei-vos ao Senhor vosso Deus...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontecerá nos últimos dias segundo a promessa de Joel 2:28?",
                        opcoes: [
                            { numero: 1, texto: "Derramarei o meu Espírito sobre toda a carne", correta: true },
                            { numero: 2, texto: "Haverá fartura de ouro em Jerusalém", correta: false },
                            { numero: 3, texto: "O sol brilhará sete vezes mais", correta: false },
                            { numero: 4, texto: "O mar se tornará em terra seca", correta: false }
                        ],
                        explicacao: "Joel 2:28 - E há de ser que, depois, derramarei o meu Espírito sobre toda a carne...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "O Julgamento das Nações",
            texto: ` ¹ Porque, eis que naqueles dias, e naquele tempo, em que removerei o cativeiro de Judá e de Jerusalém,
² Congregarei todas as nações, e as farei descer ao vale de Jeosafá; e ali com elas entrarei em juízo, por causa do meu povo, e da minha herança, Israel, a quem elas espalharam entre as nações e repartiram a minha terra.
³ E lançaram sortes sobre o meu povo, e deram um menino por uma meretriz, e venderam uma menina por vinho, para beberem.
⁴ E também que tendes vós comigo, Tiro e Sidom, e todas as regiões da Filístia? É tal o pago que vós me dais? Pois se me pagais assim, bem depressa vos farei tornar a vossa paga sobre a vossa cabeça.
⁵ Visto como levastes a minha prata e o meu ouro, e as minhas coisas desejáveis e formosas pusestes nos vossos templos.
⁶ E vendestes os filhos de Judá e os filhos de Jerusalém aos filhos dos gregos, para os apartar para longe dos seus termos.
⁷ Eis que eu os suscitarei do lugar para onde os vendestes, e farei tornar a vossa paga sobre a vossa própria cabeça.
⁸ E venderei vossos filhos e vossas filhas na mão dos filhos de Judá, que os venderão aos sabeus, a um povo distante, porque o Senhor o disse.
⁹ Proclamai isto entre os gentios; preparai a guerra, suscitai os fortes; cheguem-se, subam todos os homens de guerra.
¹⁰ Forjai espadas das vossas enxadas, e lanças das vossas foices; diga o fraco: Eu sou forte.
¹¹ Ajuntai-vos, e vinde, todos os gentios em redor, e congregai-vos. Ó Senhor, faze descer ali os teus fortes;
¹² Suscitem-se os gentios, e subam ao vale de Jeosafá; pois ali me assentarei para julgar todos os gentios em redor.
¹³ Lançai a foice, porque já está madura a seara; vinde, descei, porque o lagar está cheio, e os vasos dos lagares transbordam, porque a sua malícia é grande.
¹⁴ Multidões, multidões no vale da decisão; porque o dia do Senhor está perto, no vale da decisão.
¹⁵ O sol e a lua se enegrecerão, e as estrelas retirarão o seu resplendor.
¹⁶ E o Senhor bramará de Sião, e de Jerusalém fará ouvir a sua voz; e os céus e a terra tremerão, mas o Senhor será o refúgio do seu povo, e a fortaleza dos filhos de Israel.
¹⁷ E vós sabereis que eu sou o Senhor vosso Deus, que habito em Sião, o meu santo monte; e Jerusalém será santa; estranhos não passarão mais por ela.
¹⁸ E há de ser que, naquele dia, os montes destilarão mosto, e os outeiros manarão leite, e todos os rios de Judá estarão cheios de águas; e sairá uma fonte, da casa do Senhor, e regará o vale de Sitim.
¹⁹ O Egito se fará uma desolação, e Edom se fará um deserto assolado, por causa da violência que fizeram aos filhos de Judá, em cuja terra derramaram sangue inocente.
²⁰ Mas Judá será habitada para sempre, e Jerusalém de geração em geração.
²¹ E purificarei o sangue dos que eu não tinha purificado; porque o Senhor habitará em Sião.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Para onde o Senhor levará todas as nações para as julgar?",
                        opcoes: [
                            { numero: 1, texto: "Para o cume do Monte Sinai", correta: false },
                            { numero: 2, texto: "Para o Vale de Josafá", correta: true },
                            { numero: 3, texto: "Para as margens do rio Jordão", correta: false },
                            { numero: 4, texto: "Para as ruas de Babilônia", correta: false }
                        ],
                        explicacao: "Joel 3:2 - Congregarei todas as nações, e as farei descer ao vale de Josafá; e ali com elas entrarei em juízo...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que os lavradores deveriam fazer com as suas relhas de arado e foices?",
                        opcoes: [
                            { numero: 1, texto: "Escondê-las debaixo da terra", correta: false },
                            { numero: 2, texto: "Forjai espadas e lanças", correta: true },
                            { numero: 3, texto: "Dá-las aos pobres", correta: false },
                            { numero: 4, texto: "Limpá-las para a colheita", correta: false }
                        ],
                        explicacao: "Joel 3:10 - Forjai espadas das vossas relhas de arado, e lanças das vossas foices...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o fraco deve dizer, segundo Joel 3:10?",
                        opcoes: [
                            { numero: 1, texto: "Eu sou forte", correta: true },
                            { numero: 2, texto: "Eu preciso de ajuda", correta: false },
                            { numero: 3, texto: "Eu vou descansar", correta: false },
                            { numero: 4, texto: "Eu sou pequeno", correta: false }
                        ],
                        explicacao: "Joel 3:10 - ...diga o fraco: Eu sou forte.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};