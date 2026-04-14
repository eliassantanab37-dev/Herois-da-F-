const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const miqueias = {
    nome: "Miqueias",
    icone: "⚖️",
    autor: "Miqueias",
   // background: "./imagens/miqueias_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "Julgamento sobre Samaria e Judá",
            texto: ` ¹ Palavra do Senhor, que veio a Miqueias, morastita, nos dias de Jotão, Acaz e Ezequias, reis de Judá, a qual ele viu sobre Samaria e Jerusalém.
² Ouvi, todos os povos, presta atenção, ó terra, e tudo o que nela há; e seja o Senhor Deus testemunha contra vós, o Senhor, desde o seu santo templo.
³ Porque eis que o Senhor está para sair do seu lugar, e descerá, e andará sobre as alturas da terra.
⁴ E os montes debaixo dele se derreterão, e os vales se fenderão, como a cera diante do fogo, como as águas que se precipitam num abismo.
⁵ Tudo isto por causa da transgressão de Jacó, e dos pecados da casa de Israel. Qual é a transgressão de Jacó? Não é Samaria? E quais os altos de Judá? Não é Jerusalém?
⁶ Por isso farei de Samaria um montão de pedras do campo, uma terra de plantar vinhas, e farei rolar as suas pedras no vale, e descobrirei os seus fundamentos.
⁷ E todas as suas imagens de escultura serão despedaçadas, e todas as suas ofertas serão queimadas pelo fogo, e de todos os seus ídolos eu farei uma assolação; porque pela paga de prostituta os ajuntou, e para a paga de prostituta voltarão.
⁸ Por isso lamentarei, e gemerei, andarei despojado e nu; farei lamentação como de chacais, e pranto como de avestruzes.
⁹ Porque a sua chaga é incurável, porque chegou até Judá; estendeu-se até à porta do meu povo, até Jerusalém.
¹⁰ Não o anuncieis em Gate, nem choreis muito; revolve-te no pó, na casa de Afra.
¹¹ Passa, ó moradora de Safir, em vergonhosa nudez; a moradora de Zaanã não saiu; o pranto de Bete-Ezel tirará de vós a sua posição.
¹² Porque a moradora de Marote sofre pelo bem; porque desceu do Senhor o mal até à porta de Jerusalém.
¹³ Ata os animais ligeiros ao carro, ó moradora de Laquis; esta foi o princípio do pecado para a filha de Sião, porque em ti se acharam as transgressões de Israel.
¹⁴ Por isso darás presentes a Moresete-Gate; as casas de Aczibe se tornarão em engano para os reis de Israel.
¹⁵ Ainda trarei a ti, ó moradora de Maressa, aquele que te possuirá; chegará até Adulão a glória de Israel.
¹⁶ Faze-te calva, e tosquia-te, por causa dos filhos das tuas delícias; alarga a tua calva como a águia, porque de ti foram levados cativos.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Em quais reinados Miqueias profetizou?",
                        opcoes: [
                            { numero: 1, texto: "Davi, Salomão e Roboão", correta: false },
                            { numero: 2, texto: "Jotão, Acaz e Ezequias", correta: true },
                            { numero: 3, texto: "Josias e Joaquim", correta: false },
                            { numero: 4, texto: "Uzias e Jeroboão II", correta: false }
                        ],
                        explicacao: "Miqueias 1:1 - Palavra do Senhor que veio a Miqueias... nos dias de Jotão, Acaz e Ezequias...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor faria de Samaria devido aos seus pecados?",
                        opcoes: [
                            { numero: 1, texto: "Um jardim cercado de muros", correta: false },
                            { numero: 2, texto: "Uma fortaleza impenetrável", correta: false },
                            { numero: 3, texto: "Um montão de pedras do campo", correta: true },
                            { numero: 4, texto: "Um porto para navios", correta: false }
                        ],
                        explicacao: "Miqueias 1:6 - Por isso farei de Samaria um montão de pedras do campo...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Até onde chegou a chaga incurável de Israel?",
                        opcoes: [
                            { numero: 1, texto: "Até os confins do Egito", correta: false },
                            { numero: 2, texto: "Até à porta de Jerusalém", correta: true },
                            { numero: 3, texto: "Apenas até o monte Carmelo", correta: false },
                            { numero: 4, texto: "Até a Babilônia", correta: false }
                        ],
                        explicacao: "Miqueias 1:9 - Porque a sua chaga é incurável... estendeu-se até à porta do meu povo, até Jerusalém.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "A Opinião dos Opressores",
            texto: ` 1 Ai daqueles que nas suas camas intentam a iniquidade, e maquinam o mal; à luz da alva o praticam, porque está no poder da sua mão!
2 E cobiçam campos, e roubam-nos, cobiçam casas, e arrebatam-nas; assim fazem violência a um homem e à sua casa, a uma pessoa e à sua herança.
3 Portanto, assim diz o Senhor: Eis que projeto um mal contra esta família, do qual não tirareis os vossos pescoços, e não andareis tão altivos, porque o tempo será mau.
4 Naquele dia se levantará sobre vós um provérbio, e se lamentará pranto lastimoso, dizendo: Nós estamos inteiramente desolados; a porção do meu povo ele a troca; como me despoja! Tira os nossos campos e os reparte!
5 Portanto, não terás tu na congregação do Senhor quem lance o cordel pela sorte.
6 Não profetizeis aos que profetizam; eles não profetizarão para eles, pois não se apartará a sua vergonha.
7 Ó vós que sois chamados casa de Jacó, porventura encurtou-se o Espírito do Senhor? São estas as suas obras? E não é assim que fazem bem as minhas palavras ao que anda retamente?
8 Mas ontem, se levantou o meu povo como inimigo; de sobre a vestidura tirastes a capa daqueles que passavam seguros, como homens que voltavam da guerra.
9 Lançastes fora as mulheres do meu povo, da casa das suas delícias; das suas crianças tirastes para sempre a minha glória.
10 Levantai-vos, e ide-vos, porque este não é lugar de descanso; por causa da imundícia que traz destruição, sim, destruição enorme.
11 Se houver alguém que, andando com espírito de falsidade, mentir, dizendo: Eu te profetizarei sobre o vinho e a bebida forte; será esse tal o profeta deste povo.
12 Certamente te ajuntarei todo, ó Jacó; certamente congregarei o restante de Israel; pô-los-ei todos juntos, como ovelhas de Bozra; como o rebanho no meio do seu pasto, farão estrondo por causa da multidão dos homens.
13 Subirá diante deles o que abrirá o caminho; eles romperão, e entrarão pela porta, e sairão por ela; e o rei irá adiante deles, e o Senhor à testa deles.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que fazem aqueles que maquinam o mal em seus leitos quando amanhece?",
                        opcoes: [
                            { numero: 1, texto: "Arrependem-se do pensamento", correta: false },
                            { numero: 2, texto: "O executam, por estar no poder da sua mão", correta: true },
                            { numero: 3, texto: "Fazem orações de gratidão", correta: false },
                            { numero: 4, texto: "Dormem até o meio-dia", correta: false }
                        ],
                        explicacao: "Miqueias 2:1 - ...À luz da manhã o executam, porque está no poder da sua mão.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Que tipo de profeta o povo do capítulo 2 aceitaria?",
                        opcoes: [
                            { numero: 1, texto: "Um que profetizasse de vinho e bebida forte", correta: true },
                            { numero: 2, texto: "Um que pregasse a lei de Moisés", correta: false },
                            { numero: 3, texto: "Um que falasse a verdade com dureza", correta: false },
                            { numero: 4, texto: "Um que pedisse sacrifícios de animais", correta: false }
                        ],
                        explicacao: "Miqueias 2:11 - Se houver alguém que... mentir, dizendo: Eu te profetizarei de vinho e de bebida forte; tal será o profeta deste povo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por que o profeta diz 'Levantai-vos, e ide-vos' no versículo 10?",
                        opcoes: [
                            { numero: 1, texto: "Porque a terra estava em festa", correta: false },
                            { numero: 2, texto: "Porque o lugar de descanso não era ali, devido à corrupção", correta: true },
                            { numero: 3, texto: "Porque o exército inimigo chegou", correta: false },
                            { numero: 4, texto: "Porque o templo estava fechado", correta: false }
                        ],
                        explicacao: "Miqueias 2:10 - Levantai-vos, e ide-vos, porque este não é o lugar de descanso; por causa da corrupção que destrói...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "A Maldade dos Chefes e Profetas",
            texto: `¹ E disse eu: Ouvi, peço-vos, ó chefes de Jacó, e vós, príncipes da casa de Israel; não é a vós que pertence saber o juízo?
² A vós que odiais o bem, e amais o mal, que arrancais a pele de cima deles, e a carne de cima dos seus ossos;
³ E que comeis a carne do meu povo, e lhes arrancais a pele, e lhes esmiuçais os ossos, e os repartis como para a panela e como carne dentro do caldeirão.
⁴ Então clamarão ao Senhor, mas não os ouvirá; antes esconderá deles a sua face naquele tempo, visto que eles fizeram mal nas suas obras.
⁵ Assim diz o Senhor acerca dos profetas que fazem errar o meu povo, que mordem com os seus dentes, e clamam paz; mas contra aquele que nada lhes dá na boca preparam guerra.
⁶ Portanto, se vos fará noite sem visão, e tereis trevas sem adivinhação, e pôr-se-á o sol sobre os profetas, e o dia sobre eles se enegrecerá.
⁷ E os videntes se envergonharão, e os adivinhadores se confundirão; sim, todos eles cobrirão os seus lábios, porque não haverá resposta de Deus.
⁸ Mas eu estou cheio do poder do Espírito do Senhor, e de juízo e de força, para anunciar a Jacó a sua transgressão e a Israel o seu pecado.
⁹ Ouvi agora isto, vós, chefes da casa de Jacó, e príncipes da casa de Israel, que abominais o juízo e perverteis tudo o que é direito,
¹⁰ Edificando a Sião com sangue, e a Jerusalém com iniquidade.
¹¹ Os seus chefes dão as sentenças por suborno, e os seus sacerdotes ensinam por interesse, e os seus profetas adivinham por dinheiro; e ainda se encostam ao Senhor, dizendo: Não está o Senhor no meio de nós? Nenhum mal nos sobrevirá.
¹² Portanto, por causa de vós, Sião será lavrada como um campo, e Jerusalém se tornará em montões de pedras, e o monte desta casa como os altos de um bosque.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Miqueias descreve a crueldade dos príncipes de Israel?",
                        opcoes: [
                            { numero: 1, texto: "Como pastores que cuidam das ovelhas", correta: false },
                            { numero: 2, texto: "Como quem arranca a pele e a carne dos ossos do povo", correta: true },
                            { numero: 3, texto: "Como reis que constroem bibliotecas", correta: false },
                            { numero: 4, texto: "Como juízes que não recebem visitas", correta: false }
                        ],
                        explicacao: "Miqueias 3:2-3 - ...que deles arrancais a pele... e comeis a carne do meu povo...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceria com os profetas que faziam o povo errar?",
                        opcoes: [
                            { numero: 1, texto: "Teriam visões de ouro", correta: false },
                            { numero: 2, texto: "Seriam exaltados pelo rei", correta: false },
                            { numero: 3, texto: "Teriam noite sem visão e trevas sem adivinhação", correta: true },
                            { numero: 4, texto: "Fugiriam para o deserto", correta: false }
                        ],
                        explicacao: "Miqueias 3:6 - Portanto, se vos fará noite sem visão, e tereis trevas sem adivinhação...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por qual motivo os chefes de Jerusalém davam as sentenças?",
                        opcoes: [
                            { numero: 1, texto: "Por amor à justiça", correta: false },
                            { numero: 2, texto: "Por medo de Deus", correta: false },
                            { numero: 3, texto: "Por suborno", correta: true },
                            { numero: 4, texto: "Por tradição familiar", correta: false }
                        ],
                        explicacao: "Miqueias 3:11 - Os seus chefes dão as sentenças por suborno...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
    4: {
            titulo: "O Reinado Universal do Senhor",
            texto: `¹ Mas nos últimos dias acontecerá que o monte da casa do Senhor será estabelecido no cume dos montes, e se elevará sobre os outeiros, e a ele afluirão os povos.
² E irão muitas nações, e dirão: Vinde, e subamos ao monte do Senhor, e à casa do Deus de Jacó, para que nos ensine os seus caminhos, e andemos pelas suas veredas; porque de Sião sairá a lei, e de Jerusalém a palavra do Senhor.
³ E julgará entre muitos povos, e castigará nações poderosas e longínquas, e converterão as suas espadas em pás, e as suas lanças em foices; uma nação não levantará a espada contra outra nação, nem aprenderão mais a guerra.
⁴ Mas assentar-se-á cada um debaixo da sua videira, e debaixo da sua figueira, e não haverá quem os espante, porque a boca do Senhor dos Exércitos o disse.
⁵ Porque todos os povos andam, cada um em nome do seu deus; mas nós andaremos em nome do Senhor nosso Deus, para todo o sempre.
⁶ Naquele dia, diz o Senhor, congregarei a que coxeava, e recolherei a que tinha sido expulsa, e a que eu tinha maltratado.
⁷ E da que coxeava farei um remanescente, e da que tinha sido arrojada para longe, uma nação poderosa; e o Senhor reinará sobre eles no monte Sião, desde agora e para sempre.
⁸ E a ti, ó torre do rebanho, fortaleza da filha de Sião, a ti virá; sim, a ti virá o primeiro domínio, o reino da filha de Jerusalém.
⁹ E agora, por que fazes tão grande pranto? Não há em ti rei? Pereceu o teu conselheiro? Apoderou-se de ti a dor, como da que está de parto?
¹⁰ Sofre dores, e trabalha, para dar à luz, ó filha de Sião, como a que está de parto, porque agora sairás da cidade, e morarás no campo, e virás até Babilônia; ali, porém, serás livrada; ali te remirá o Senhor da mão de teus inimigos.
¹¹ Agora se congregaram muitas nações contra ti, que dizem: Seja profanada, e vejam os nossos olhos o seu desejo sobre Sião.
¹² Mas não sabem os pensamentos do Senhor, nem entendem o seu conselho; porque as ajuntou como gavelas numa eira.
¹³ Levanta-te e trilha, ó filha de Sião; porque eu farei de ferro o teu chifre, e farei de bronze as tuas unhas; e esmiuçarás a muitos povos, e o seu ganho será consagrado ao Senhor, e os seus bens ao Senhor de toda a terra.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que as nações farão com as suas espadas e lanças nos últimos dias?",
                        opcoes: [
                            { numero: 1, texto: "Converterão em relhas de arado e foices", correta: true },
                            { numero: 2, texto: "Guardarão em museus de guerra", correta: false },
                            { numero: 3, texto: "Derrubará os muros de Jerusalém", correta: false },
                            { numero: 4, texto: "Levarão para o deserto", correta: false }
                        ],
                        explicacao: "Miqueias 4:3 - ...converterão as suas espadas em relhas de arado e as suas lanças em foices...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como cada homem se assentará no tempo de paz prometido?",
                        opcoes: [
                            { numero: 1, texto: "Embaixo de grandes palácios", correta: false },
                            { numero: 2, texto: "Debaixo da sua videira e da sua figueira", correta: true },
                            { numero: 3, texto: "À mesa com o rei", correta: false },
                            { numero: 4, texto: "Nas portas da cidade", correta: false }
                        ],
                        explicacao: "Miqueias 4:4 - Mas assentar-se-á cada um debaixo da sua videira, e debaixo da sua figueira...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Para onde a filha de Sião seria levada antes de ser libertada?",
                        opcoes: [
                            { numero: 1, texto: "Egito", correta: false },
                            { numero: 2, texto: "Assíria", correta: false },
                            { numero: 3, texto: "Babilônia", correta: true },
                            { numero: 4, texto: "Tarsis", correta: false }
                        ],
                        explicacao: "Miqueias 4:10 - ...porque agora sairás da cidade... e virás até Babilônia; ali serás libertada...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "O Nascimento do Messias em Belém",
            texto: ` ¹ Agora ajunta-te em tropas, ó filha de tropas; pôr-se-á cerco contra nós; ferirão com a vara na face ao juiz de Israel.
² E tu, Belém Efrata, posto que pequena entre os milhares de Judá, de ti me sairá o que governará em Israel, e cujas saídas são desde os tempos antigos, desde os dias da eternidade.
³ Portanto os entregará até ao tempo em que a que está de parto tiver dado à luz; então o restante de seus irmãos voltará aos filhos de Israel.
⁴ E ele permanecerá, e apascentará ao povo na força do Senhor, na excelência do nome do Senhor seu Deus; e eles permanecerão, porque agora será engrandecido até aos fins da terra.
⁵ E este será a nossa paz; quando a Assíria vier à nossa terra, e quando pisar em nossos palácios, levantaremos contra ela sete pastores e oito príncipes dentre os homens.
⁶ Esses consumirão a terra da Assíria à espada, e a terra de Ninrode nas suas entradas. Assim nos livrará da Assíria, quando vier à nossa terra, e quando calcar os nossos termos.
⁷ E o remanescente de Jacó estará no meio de muitos povos, como orvalho da parte do Senhor, como chuvisco sobre a erva, que não espera pelo homem, nem aguarda a filhos de homens.
⁸ E o restante de Jacó estará entre os gentios, no meio de muitos povos, como um leão entre os animais do bosque, como um leãozinho entre os rebanhos de ovelhas, o qual, quando passar, pisará e despedaçará, sem que haja quem as livre.
⁹ A tua mão se exaltará sobre os teus adversários; e todos os teus inimigos serão exterminados.
¹⁰ E sucederá naquele dia, diz o Senhor, que eu exterminarei do meio de ti os teus cavalos, e destruirei os teus carros.
¹¹ E destruirei as cidades da tua terra, e derrubarei todas as tuas fortalezas;
¹² E exterminarei as feitiçarias da tua mão; e não terás adivinhadores;
¹³ E destruirei do meio de ti as tuas imagens de escultura e as tuas estátuas; e tu não te inclinarás mais diante da obra das tuas mãos.
¹⁴ E arrancarei os teus bosques do meio de ti; e destruirei as tuas cidades.
¹⁵ E com ira e com furor farei vingança sobre os gentios que não ouvem.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "De qual cidade sairia aquele que havia de ser o Senhor em Israel?",
                        opcoes: [
                            { numero: 1, texto: "Nazaré", correta: false },
                            { numero: 2, texto: "Jerusalém", correta: false },
                            { numero: 3, texto: "Belém Efrata", correta: true },
                            { numero: 4, texto: "Jope", correta: false }
                        ],
                        explicacao: "Miqueias 5:2 - E tu, Belém Efrata... de ti me sairá o que homem de ser Guia em Israel...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "As saídas do futuro Governador são desde quando?",
                        opcoes: [
                            { numero: 1, texto: "Desde os tempos antigos, desde os dias da eternidade", correta: true },
                            { numero: 2, texto: "Desde o reinado de Davi", correta: false },
                            { numero: 3, texto: "Desde a saída do Egito", correta: false },
                            { numero: 4, texto: "Desde a fundação do Templo", correta: false }
                        ],
                        explicacao: "Miqueias 5:2 - ...e cujas saídas são desde os tempos antigos, desde os dias da eternidade.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O restante de Jacó será, no meio de muitos povos, como o quê?",
                        opcoes: [
                            { numero: 1, texto: "Como um muro de pedra", correta: false },
                            { numero: 2, texto: "Como o orvalho do Senhor", correta: true },
                            { numero: 3, texto: "Como o vento do deserto", correta: false },
                            { numero: 4, texto: "Como o ouro puro", correta: false }
                        ],
                        explicacao: "Miqueias 5:7 - E o restante de Jacó estará no meio de muitos povos, como um orvalho do Senhor...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "A Queixa do Senhor contra Israel",
            texto: ` ¹ Ouvi agora o que diz o Senhor: Levanta-te, contende com os montes, e ouçam os outeiros a tua voz.
² Ouvi, montes, a demanda do Senhor, e vós, fortes fundamentos da terra; porque o Senhor tem uma demanda com o seu povo, e com Israel entrará em juízo.
³ Ó povo meu; que te tenho feito? E com que te enfadei? Testifica contra mim.
⁴ Pois te fiz subir da terra do Egito, e da casa da servidão te remi; e enviei adiante de ti a Moisés, Arão e Miriã.
⁵ Povo meu, lembra-te agora do que consultou Balaque, rei de Moabe, e o que lhe respondeu Balaão, filho de Beor, e do que aconteceu desde Sitim até Gilgal, para que conheças as justiças do Senhor.
⁶ Com que me apresentarei ao Senhor, e me inclinarei diante do Deus altíssimo? Apresentar-me-ei diante dele com holocaustos, com bezerros de um ano?
⁷ Agradar-se-á o Senhor de milhares de carneiros, ou de dez mil ribeiros de azeite? Darei o meu primogênito pela minha transgressão, o fruto do meu ventre pelo pecado da minha alma?
⁸ Ele te declarou, ó homem, o que é bom; e que é o que o Senhor pede de ti, senão que pratiques a justiça, e ames a benignidade, e andes humildemente com o teu Deus?
⁹ A voz do Senhor clama à cidade e o que é sábio verá o teu nome. Ouvi a vara, e quem a ordenou.
¹⁰ Ainda há na casa do ímpio tesouros da impiedade, e medida escassa, que é detestável?
¹¹ Seria eu limpo com balanças falsas, e com uma bolsa de pesos enganosos?
¹² Porque os seus ricos estão cheios de violência, e os seus habitantes falam mentiras e a sua língua é enganosa na sua boca.
¹³ Assim eu também te enfraquecerei, ferindo-te e assolando-te por causa dos teus pecados.
¹⁴ Tu comerás, mas não te fartarás, e a tua humilhação estará no meio de ti; removerás os teus bens mas não livrarás; e aquilo que livrares, eu o entregarei à espada.
¹⁵ Tu semearás, mas não segarás; pisarás a azeitona, mas não te ungirás com azeite; e pisarás o mosto, mas não beberás vinho.
¹⁶ Porque se observam os estatutos de Onri, e toda a obra da casa de Acabe, e andais nos conselhos deles; para que eu te faça uma desolação, e dos seus habitantes um assobio; assim trareis sobre vós o opróbrio do meu povo.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor pede para o povo fazer diante dos montes?",
                        opcoes: [
                            { numero: 1, texto: "Levanta-te, pleiteia a tua causa diante dos montes", correta: true },
                            { numero: 2, texto: "Esconde-te nas cavernas", correta: false },
                            { numero: 3, texto: "Canta louvores ao Senhor", correta: false },
                            { numero: 4, texto: "Oferece sacrifícios de gado", correta: false }
                        ],
                        explicacao: "Miqueias 6:1 - ...Levanta-te, pleiteia a tua causa diante dos montes...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor requer de ti, senão que?",
                        opcoes: [
                            { numero: 1, texto: "Que construas um novo templo", correta: false },
                            { numero: 2, texto: "Que dês todos os teus bens", correta: false },
                            { numero: 3, texto: "Que dês dízimos de tudo", correta: false },
                            { numero: 4, texto: "Pratiques a justiça, ames a benevolência e andes humildemente", correta: true }
                        ],
                        explicacao: "Miqueias 6:8 - ...o que é que o Senhor pede de ti, senão que pratiques a justiça, e ames a benevolência, e andes humildemente com o teu Deus?",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quais estatutos Israel estava guardando que causariam a sua assolação?",
                        opcoes: [
                            { numero: 1, texto: "Os estatutos de Onri e as obras de Acabe", correta: true },
                            { numero: 2, texto: "As leis de Moisés", correta: false },
                            { numero: 3, texto: "Os decretos de Davi", correta: false },
                            { numero: 4, texto: "Os conselhos dos anciãos", correta: false }
                        ],
                        explicacao: "Miqueias 6:16 - Porque se guardam os estatutos de Onri, e toda a obra da casa de Acabe...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        7: {
            titulo: "A Corrupção Social e a Misericórdia de Deus",
            texto: ` ¹ Ai de mim! Porque estou feito como as colheitas de frutas do verão, como os rabiscos da vindima; não há cacho de uvas para comer, nem figos temporãos que a minha alma deseja.
² Já pereceu da terra o homem piedoso, e não há entre os homens um que seja justo; todos armam ciladas para sangue; cada um caça a seu irmão com a rede,
³ As suas mãos fazem diligentemente o mal; assim demanda o príncipe, e o juiz julga pela recompensa, e o grande fala da corrupção da sua alma, e assim todos eles tecem o mal.
⁴ O melhor deles é como um espinho; o mais reto é pior do que a sebe de espinhos; veio o dia dos teus vigias, veio o dia da tua punição; agora será a sua confusão.
⁵ Não creiais no amigo, nem confieis no vosso guia; daquela que repousa no teu seio, guarda as portas da tua boca.
⁶ Porque o filho despreza ao pai, a filha se levanta contra sua mãe, a nora contra sua sogra, os inimigos do homem são os da sua própria casa.
⁷ Eu, porém, olharei para o Senhor; esperarei no Deus da minha salvação; o meu Deus me ouvirá.
⁸ Ó inimiga minha, não te alegres a meu respeito; ainda que eu tenha caído, levantar-me-ei; se morar nas trevas, o Senhor será a minha luz.
⁹ Sofrerei a ira do Senhor, porque pequei contra ele, até que julgue a minha causa, e execute o meu direito; ele me tirará para a luz, e eu verei a sua justiça.
¹⁰ E a minha inimiga verá isso, e cobri-la-á a vergonha, que me diz: Onde está o Senhor teu Deus? Os meus olhos a contemplarão; agora será ela pisada como a lama das ruas.
¹¹ No dia em que reedificar os teus muros, nesse dia estará longe e dilatado o estatuto.
¹² Naquele dia virá a ti, desde a Assíria e das cidades fortificadas, e das cidades fortificadas até ao rio, e do mar até ao mar, e da montanha até à montanha.
¹³ Mas esta terra será posta em desolação, por causa dos seus moradores, por causa do fruto das suas obras.
¹⁴ Apascenta o teu povo com a tua vara, o rebanho da tua herança, que habita a sós, no bosque, no meio do Carmelo; apascentem-se em Basã e Gileade, como nos dias do passado.
¹⁵ Eu lhes mostrarei maravilhas, como nos dias da tua saída da terra do Egito.
¹⁶ As nações o verão, e envergonhar-se-ão, por causa de todo o seu poder; porão a mão sobre a boca, e os seus ouvidos ficarão surdos.
¹⁷ Lamberão o pó como serpente, como vermes da terra, tremendo, sairão dos seus esconderijos; com pavor virão ao Senhor nosso Deus, e terão medo de ti.
¹⁸ Quem é Deus semelhante a ti, que perdoa a iniquidade, e que passa por cima da rebelião do restante da sua herança? Ele não retém a sua ira para sempre, porque tem prazer na sua benignidade.
¹⁹ Tornará a apiedar-se de nós; sujeitará as nossas iniquidades, e tu lançarás todos os seus pecados nas profundezas do mar.
²⁰ Darás a Jacó a fidelidade, e a Abraão a benignidade, que juraste a nossos pais desde os dias antigos.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Em quem o profeta diz que porá os seus olhos em meio à corrupção?",
                        opcoes: [
                            { numero: 1, texto: "No rei de Judá", correta: false },
                            { numero: 2, texto: "Olharei para o Senhor e esperarei no Deus da minha salvação", correta: true },
                            { numero: 3, texto: "Nas muralhas de Sião", correta: false },
                            { numero: 4, texto: "Nos exércitos estrangeiros", correta: false }
                        ],
                        explicacao: "Miqueias 7:7 - Eu, porém, olharei para o Senhor; esperarei no Deus da minha salvação...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Deus fará com os nossos pecados segundo o versículo 19?",
                        opcoes: [
                            { numero: 1, texto: "Escreverá num livro", correta: false },
                            { numero: 2, texto: "Lançará todos os nossos pecados nas profundezas do mar", correta: true },
                            { numero: 3, texto: "Mostrará a todas as nações", correta: false },
                            { numero: 4, texto: "Deixará sobre os nossos ombros", correta: false }
                        ],
                        explicacao: "Miqueias 7:19 - ...e lançarás todos os seus pecados nas profundezas do mar.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por que Deus perdoa a iniquidade e se esquece da transgressão?",
                        opcoes: [
                            { numero: 1, texto: "Porque ele se deleita na benignidade", correta: true },
                            { numero: 2, texto: "Porque o povo é muito numeroso", correta: false },
                            { numero: 3, texto: "Porque as ofertas são agradáveis", correta: false },
                            { numero: 4, texto: "Porque ele não tem outra escolha", correta: false }
                        ],
                        explicacao: "Miqueias 7:18 - Quem é Deus semelhante a ti... porque ele se deleita na benignidade.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};