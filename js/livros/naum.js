const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const naum = {
    nome: "Naum",
    icone: "📜",     
    autor: "Naum",
   // background: "./imagens/naum_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "A Majestade e a Ira de Deus contra Nínive",
            texto: `¹ Peso de Nínive. Livro da visão de Naum, o elcosita.
² O Senhor é Deus zeloso e vingador; o Senhor é vingador e cheio de furor; o Senhor toma vingança contra os seus adversários, e guarda a ira contra os seus inimigos.
³ O Senhor é tardio em irar-se, mas grande em poder, e ao culpado não tem por inocente; o Senhor tem o seu caminho na tormenta e na tempestade, e as nuvens são o pó dos seus pés.
⁴ Ele repreende ao mar, e o faz secar, e esgota todos os rios; desfalecem Basã e o Carmelo, e a flor do Líbano murcha.
⁵ Os montes tremem perante ele, e os outeiros se derretem; e a terra se levanta na sua presença; e o mundo, e todos os que nele habitam.
⁶ Quem parará diante do seu furor, e quem persistirá diante do ardor da sua ira? A sua cólera se derramou como um fogo, e as rochas foram por ele derrubadas.
⁷ O Senhor é bom, ele serve de fortaleza no dia da angústia, e conhece os que confiam nele.
⁸ E com uma inundação transbordante acabará de uma vez com o seu lugar; e as trevas perseguirão os seus inimigos.
⁹ Que pensais vós contra o Senhor? Ele mesmo vos consumirá de todo; não se levantará por duas vezes a angústia.
¹⁰ Porque ainda que eles se entrelacem como os espinhos, e se saturem de vinho como bêbados, serão inteiramente consumidos como palha seca.
¹¹ De ti saiu um que maquinou o mal contra o Senhor, um conselheiro vil.
¹² Assim diz o Senhor: Por mais seguros que estejam, e por mais numerosos que sejam, ainda assim serão exterminados, e ele passará; eu te afligi, mas não te afligirei mais.
¹³ Mas agora quebrarei o seu jugo de sobre ti, e romperei os teus laços.
¹⁴ Contra ti, porém, o Senhor deu ordem que não haja mais linhagem do teu nome; da casa dos teus deuses exterminarei as imagens de escultura e de fundição; ali farei o teu sepulcro, porque és vil.
¹⁵ Eis sobre os montes os pés do que traz as boas novas, do que anuncia a paz! Celebra as tuas festas, ó Judá, cumpre os teus votos, porque o ímpio não tornará mais a passar por ti; ele é inteiramente exterminado. 
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O Senhor é tardio em irar-se, mas grande em quê?",
                        opcoes: [
                            { numero: 1, texto: "Em poder", correta: true },
                            { numero: 2, texto: "Em paciência", correta: false },
                            { numero: 3, texto: "Em silêncio", correta: false },
                            { numero: 4, texto: "Em riquezas", correta: false }
                        ],
                        explicacao: "Naum 1:3 - O Senhor é tardio em irar-se, mas grande em poder...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor é para os que confiam nele no dia da angústia?",
                        opcoes: [
                            { numero: 1, texto: "Uma nuvem passageira", correta: false },
                            { numero: 2, texto: "Uma fortaleza", correta: true },
                            { numero: 3, texto: "Um juiz severo", correta: false },
                            { numero: 4, texto: "Um fogo consumidor", correta: false }
                        ],
                        explicacao: "Naum 1:7 - O Senhor é bom, uma fortaleza no dia da angústia, e conhece os que confiam nele.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Sobre o que estão os pés daquele que traz boas novas sobre os montes?",
                        opcoes: [
                            { numero: 1, texto: "Sobre as brasas", correta: false },
                            { numero: 2, texto: "Sobre os montes", correta: true },
                            { numero: 3, texto: "Sobre as águas", correta: false },
                            { numero: 4, texto: "Sobre o vale", correta: false }
                        ],
                        explicacao: "Naum 1:15 - Eis sobre os montes os pés do que traz boas novas, do que anuncia a paz!",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "O Cerco e a Queda de Nínive",
            texto: ` ¹ O destruidor subiu contra ti. Guarda tua fortaleza, vigia o caminho, fortalece os lombos, reforça muito o teu poder.
² Porque o Senhor restaurará a excelência de Jacó como a excelência de Israel; porque os saqueadores os despojaram, e destruíram os seus ramos.
³ Os escudos dos seus fortes serão vermelhos, os homens valorosos estarão vestidos de escarlate, os carros como tochas flamejantes no dia da sua preparação, e os ciprestes serão terrivelmente abalados.
⁴ Os carros correrão furiosamente nas ruas, colidirão um contra o outro nos largos caminhos; o seu aspecto será como o de tochas, correrão como relâmpagos.
⁵ Ele se lembrará dos seus valentes; eles, porém, tropeçarão na sua marcha; apressar-se-ão para chegar ao seu muro, quando o amparo for preparado.
⁶ As portas dos rios se abrirão, e o palácio será dissolvido.
⁷ É decretado: ela será levada cativa, conduzida para cima; e as suas servas a acompanharão, gemendo como pombas, batendo em seus peitos.
⁸ Nínive desde que existiu tem sido como um tanque de águas, porém elas agora vazam. Parai, parai, clamar-se-á; mas ninguém olhará para trás.
⁹ Saqueai a prata, saqueai o ouro, porque não têm fim as provisões, riquezas há de todo o gênero de bens desejáveis.
¹⁰ Vazia, esgotada e devastada está; derrete-se o coração, e tremem os joelhos, e em todos os lombos há dor, e os rostos de todos eles se enegrecem.
¹¹ Onde está agora o covil dos leões, e as pastagens dos leõezinhos, onde passeava o leão velho, e o filhote do leão, sem haver ninguém que os espantasse?
¹² O leão arrebatava o que bastava para os seus filhotes, e estrangulava a presa para as suas leoas, e enchia de presas as suas cavernas, e os seus covis de rapina.
¹³ Eis que eu estou contra ti, diz o Senhor dos Exércitos, e queimarei na fumaça os teus carros, e a espada devorará os teus leõezinhos, e arrancarei da terra a tua presa, e não se ouvirá mais a voz dos teus mensageiros.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como são descritos os carros de guerra que correm pelas ruas?",
                        opcoes: [
                            { numero: 1, texto: "Como tochas acesas e relâmpagos", correta: true },
                            { numero: 2, texto: "Como nuvens de poeira", correta: false },
                            { numero: 3, texto: "Como barcos no rio", correta: false },
                            { numero: 4, texto: "Como ventos do deserto", correta: false }
                        ],
                        explicacao: "Naum 2:4 - Os carros fustigam nas ruas... o seu parecer é como o de tochas, correm como relâmpagos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontece com as portas dos rios segundo o versículo 6?",
                        opcoes: [
                            { numero: 1, texto: "São trancadas com ferro", correta: false },
                            { numero: 2, texto: "São abertas e o palácio é dissolvido", correta: true },
                            { numero: 3, texto: "São protegidas por guardas", correta: false },
                            { numero: 4, texto: "São queimadas pelo fogo", correta: false }
                        ],
                        explicacao: "Naum 2:6 - As portas dos rios se abrem, e o palácio é dissolvido.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Nínive era comparada a um tanque de águas, mas o que o povo faz agora?",
                        opcoes: [
                            { numero: 1, texto: "Eles mergulham", correta: false },
                            { numero: 2, texto: "Eles clamam por chuva", correta: false },
                            { numero: 3, texto: "Eles fogem", correta: true },
                            { numero: 4, texto: "Eles bebem", correta: false }
                        ],
                        explicacao: "Naum 2:8 - Nínive, desde que existiu, tem sido como um tanque de águas, mas agora eles fogem.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "A Ruína Total de Nínive",
            texto: `¹ Ai da cidade ensanguentada! Ela está toda cheia de mentiras e de rapina; não se aparta dela o roubo.
² Estrépito de açoite há, e o barulho do ruído das rodas; e os cavalos atropelam, e carros vão saltando.
³ O cavaleiro levanta a espada flamejante, como a lança relampejante, e ali haverá uma multidão de mortos, e abundância de cadáveres, e não terão fim os defuntos; tropeçarão nos seus corpos;
⁴ Por causa da multidão dos pecados da meretriz mui graciosa, da mestra das feitiçarias, que vendeu as nações com as suas fornicações, e as famílias pelas suas feitiçarias.
⁵ Eis que eu estou contra ti, diz o Senhor dos Exércitos; e levantarei a tua saia sobre a tua face, e às nações mostrarei a tua nudez, e aos reinos a tua vergonha.
⁶ E lançarei sobre ti coisas abomináveis, e envergonhar-te-ei, e pôr-te-ei como espetáculo.
⁷ E há de ser que, todos os que te virem, fugirão de ti, e dirão: Nínive está destruída, quem terá compaixão dela? Donde te buscarei consoladores?
⁸ És tu melhor do que Nô-Amom, que está assentada entre os canais, cercada de águas, tendo por esplanada o mar, e ainda o mar por muralha?
⁹ Etiópia e Egito eram a sua força, e não tinha fim; Pute e Líbia foram o seu socorro.
¹⁰ Todavia foi levada cativa para o desterro; também os seus filhos foram despedaçados nas entradas de todas as ruas, e sobre os seus nobres lançaram sortes, e todos os seus grandes foram presos com grilhões.
¹¹ Tu também serás embriagada, e te esconderás; também buscarás força por causa do inimigo.
¹² Todas as tuas fortalezas serão como figueiras com figos temporãos; se os sacodem, caem na boca do que os há de comer.
¹³ Eis que o teu povo no meio de ti são como mulheres; as portas da tua terra estarão de todo abertas aos teus inimigos; o fogo consumirá os teus ferrolhos.
¹⁴ Tira águas para o cerco, reforça as tuas fortalezas; entra no lodo, e pisa o barro, pega a forma para os tijolos.
¹⁵ O fogo ali te consumirá, a espada te exterminará; consumir-te-á, como a locusta. Multiplica-te como a locusta, multiplica-te como os gafanhotos.
¹⁶ Multiplicaste os teus negociantes mais do que as estrelas do céu; a locusta se espalhará e voará.
¹⁷ Os teus príncipes são como os gafanhotos, e os teus capitães como os gafanhotos grandes, que se acampam nas sebes nos dias de frio; em subindo o sol voam, de sorte que não se sabe mais o lugar onde estão.
¹⁸ Os teus pastores dormirão, ó rei da Assíria, os teus ilustres repousarão, o teu povo se espalhará pelos montes, sem que haja quem o ajunte.
¹⁹ Não há cura para a tua ferida, a tua chaga é dolorosa. Todos os que ouvirem a tua fama baterão as palmas sobre ti; porque, sobre quem não passou continuamente a tua malícia?
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como é chamada a cidade de Nínive no início do capítulo 3?",
                        opcoes: [
                            { numero: 1, texto: "Cidade santa", correta: false },
                            { numero: 2, texto: "Cidade sanguinária", correta: true },
                            { numero: 3, texto: "Cidade de ouro", correta: false },
                            { numero: 4, texto: "Cidade de refúgio", correta: false }
                        ],
                        explicacao: "Naum 3:1 - Ai da cidade sanguinária! Ela está toda cheia de mentiras e de rapina...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual cidade famosa pelo seu poder foi usada como exemplo de queda para Nínive?",
                        opcoes: [
                            { numero: 1, texto: "Babilônia", correta: false },
                            { numero: 2, texto: "No-Amom (Tebas)", correta: true },
                            { numero: 3, texto: "Sodoma", correta: false },
                            { numero: 4, texto: "Tiro", correta: false }
                        ],
                        explicacao: "Naum 3:8 - És tu melhor do que No-Amom, que estava assentada entre os canais do Nilo...?",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que as pessoas fazem ao ouvir as notícias sobre a queda de Nínive?",
                        opcoes: [
                            { numero: 1, texto: "Choram de tristeza", correta: false },
                            { numero: 2, texto: "Batem palmas sobre ela", correta: true },
                            { numero: 3, texto: "Fazem jejum", correta: false },
                            { numero: 4, texto: "Fogem para o mar", correta: false }
                        ],
                        explicacao: "Naum 3:19 - ...todos os que ouvirem a tua fama baterão as palmas sobre ti...",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};