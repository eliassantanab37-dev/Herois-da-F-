// js/livros/hebreus.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const hebreus = {
    nome: "Hebreus",
    icone: "📜",
    autor: "Desconhecido",
    //background: "./imagens/hebreus_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "A Superioridade do Filho",
            texto: ` 1 Havendo Deus antigamente falado muitas vezes, e de muitas maneiras, aos pais, pelos profetas, a nós falou-nos nestes últimos dias pelo Filho,
2 A quem constituiu herdeiro de tudo, por quem fez também o mundo.
3 O qual, sendo o resplendor da sua glória, e a expressa imagem da sua pessoa, e sustentando todas as coisas pela palavra do seu poder, havendo feito por si mesmo a purificação dos nossos pecados, assentou-se à destra da majestade nas alturas;
4 Feito tanto mais excelente do que os anjos, quanto herdou mais excelente nome do que eles.
5 Porque, a qual dos anjos disse jamais: Tu és meu Filho, hoje te gerei? E outra vez: Eu lhe serei por Pai, e ele me será por Filho?
6 E outra vez, quando introduz no mundo o primogênito, diz: E todos os anjos de Deus o adorem.
7 E, em verdade quanto aos anjos, diz: Que faz dos seus anjos espíritos, e de seus ministros labareda de fogo.
8 Mas, do Filho, diz: Ó Deus, o teu trono subsiste pelos séculos dos séculos; cetro de equidade é o cetro do teu reino.
9 Amaste a justiça e odiaste a iniquidade; por isso Deus, o teu Deus, te ungiu com óleo de alegria mais do que a teus companheiros.
10 E: Tu, Senhor, no princípio fundaste a terra, e os céus são obra de tuas mãos.
11 Eles perecerão, mas tu permanecerás; e todos eles, como roupa, envelhecerão,
12 E como um manto os enrolarás, e serão mudados. Mas tu és o mesmo, e os teus anos não acabarão.
13 E a qual dos anjos disse jamais: Assenta-te à minha destra, até que ponha a teus inimigos por escabelo de teus pés?
14 Não são porventura todos eles espíritos ministradores, enviados para servir a favor daqueles que hão de herdar a salvação?

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Deus falou antigamente aos pais, pelos profetas?",
                        opcoes: [
                            { numero: 1, texto: "Muitas vezes e de muitas maneiras", correta: true },
                            { numero: 2, texto: "Apenas por sonhos", correta: false },
                            { numero: 3, texto: "Uma única vez", correta: false },
                            { numero: 4, texto: "Através de cartas", correta: false }
                        ],
                        explicacao: "Hebreus 1:1 - Havendo Deus antigamente falado muitas vezes, e de muitas maneiras, aos pais, pelos profetas...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Segundo o capítulo 1, quem é o Filho em relação a Deus?",
                        opcoes: [
                            { numero: 1, texto: "O resplendor da sua glória e a expressa imagem da sua pessoa", correta: true },
                            { numero: 2, texto: "Apenas um anjo superior", correta: false },
                            { numero: 3, texto: "Um profeta como os outros", correta: false },
                            { numero: 4, texto: "Uma criatura sem poder", correta: false }
                        ],
                        explicacao: "Hebreus 1:3 - O qual, sendo o resplendor da sua glória, e a expressa imagem da sua pessoa...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "A Salvação e a Humanidade de Cristo",
            texto: ` ¹ Portanto, convém-nos atentar com mais diligência para as coisas que já temos ouvido, para que em tempo algum nos desviemos delas.
² Porque, se a palavra falada pelos anjos permaneceu firme, e toda a transgressão e desobediência recebeu a justa retribuição,
³ Como escaparemos nós, se não atentarmos para uma tão grande salvação, a qual, começando a ser anunciada pelo Senhor, foi-nos depois confirmada pelos que a ouviram;
⁴ Testificando também Deus com eles, por sinais, e milagres, e várias maravilhas e dons do Espírito Santo, distribuídos por sua vontade?
⁵ Porque não foi aos anjos que sujeitou o mundo futuro, de que falamos.
⁶ Mas em certo lugar testificou alguém, dizendo: Que é o homem, para que dele te lembres? Ou o filho do homem, para que o visites?
⁷ Tu o fizeste um pouco menor do que os anjos, de glória e de honra o coroaste, e o constituíste sobre as obras de tuas mãos;
⁸ Todas as coisas lhe sujeitaste debaixo dos pés. Ora, visto que lhe sujeitou todas as coisas, nada deixou que lhe não esteja sujeito. Mas agora ainda não vemos que todas as coisas lhe estejam sujeitas.
⁹ Vemos, porém, coroado de glória e de honra aquele Jesus que fora feito um pouco menor do que os anjos, por causa da paixão da morte, para que, pela graça de Deus, provasse a morte por todos.
¹⁰ Porque convinha que aquele, para quem são todas as coisas, e mediante quem tudo existe, trazendo muitos filhos à glória, consagrasse pelas aflições o Príncipe da salvação deles.
¹¹ Porque, assim o que santifica, como os que são santificados, são todos de um; por cuja causa não se envergonha de lhes chamar irmãos,
¹² Dizendo: Anunciarei o teu nome a meus irmãos, cantar-te-ei louvores no meio da congregação.
¹³ E outra vez: Porei nele a minha confiança. E outra vez: Eis-me aqui a mim, e aos filhos que Deus me deu.
¹⁴ E, visto como os filhos participam da carne e do sangue, também ele participou das mesmas coisas, para que pela morte aniquilasse o que tinha o império da morte, isto é, o diabo;
¹⁵ E livrasse todos os que, com medo da morte, estavam por toda a vida sujeitos à servidão.
¹⁶ Porque, na verdade, ele não tomou os anjos, mas tomou a descendência de Abraão.
¹⁷ Por isso convinha que em tudo fosse semelhante aos irmãos, para ser misericordioso e fiel sumo sacerdote naquilo que é de Deus, para expiar os pecados do povo.
¹⁸ Porque naquilo que ele mesmo, sendo tentado, padeceu, pode socorrer aos que são tentados. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que importa que nos apeguemos com mais firmeza às coisas ouvidas?",
                        opcoes: [
                            { numero: 1, texto: "Para que não nos desviemos delas", correta: true },
                            { numero: 2, texto: "Para ganhar dinheiro", correta: false },
                            { numero: 3, texto: "Para agradar aos judeus", correta: false },
                            { numero: 4, texto: "Para sermos mais inteligentes", correta: false }
                        ],
                        explicacao: "Hebreus 2:1 - Portanto, convém-nos atentar com mais diligência para as coisas que já temos ouvido, para que em tempo algum nos desviemos delas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por que Jesus se tornou semelhante aos homens (carne e sangue)?",
                        opcoes: [
                            { numero: 1, texto: "Para que pela morte aniquilasse o que tinha o império da morte", correta: true },
                            { numero: 2, texto: "Apenas para conhecer a vida na terra", correta: false },
                            { numero: 3, texto: "Porque ele não tinha escolha", correta: false },
                            { numero: 4, texto: "Para fugir do céu por um tempo", correta: false }
                        ],
                        explicacao: "Hebreus 2:14 - ...também ele participou das mesmas coisas, para que pela morte aniquilasse o que tinha o império da morte, a saber, o diabo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "Cristo é Superior a Moisés",
            texto: ` ¹ Por isso, irmãos santos, participantes da vocação celestial, considerai a Cristo Jesus, apóstolo e sumo sacerdote da nossa confissão,
² Sendo fiel ao que o constituiu, como também o foi Moisés em toda a sua casa.
³ Porque ele é tido por digno de tanto maior glória do que Moisés, quanto maior honra do que a casa tem aquele que a edificou.
⁴ Porque toda a casa é edificada por alguém, mas o que edificou todas as coisas é Deus.
⁵ E, na verdade, Moisés foi fiel em toda a sua casa, como servo, para testemunho das coisas que se haviam de anunciar;
⁶ Mas Cristo, como Filho, sobre a sua própria casa; a qual casa somos nós, se tão somente conservarmos firme a confiança e a glória da esperança até ao fim.
⁷ Portanto, como diz o Espírito Santo: Se ouvirdes hoje a sua voz,
⁸ Não endureçais os vossos corações, como na provocação, no dia da tentação no deserto.
⁹ Onde vossos pais me tentaram, me provaram, e viram por quarenta anos as minhas obras.
¹⁰ Por isso me indignei contra esta geração, e disse: Estes sempre erram em seu coração, e não conheceram os meus caminhos.
¹¹ Assim jurei na minha ira que não entrarão no meu repouso.
¹² Vede, irmãos, que nunca haja em qualquer de vós um coração mau e infiel, para se apartar do Deus vivo.
¹³ Antes, exortai-vos uns aos outros todos os dias, durante o tempo que se chama Hoje, para que nenhum de vós se endureça pelo engano do pecado;
¹⁴ Porque nos tornamos participantes de Cristo, se retivermos firmemente o princípio da nossa confiança até ao fim.
¹⁵ Enquanto se diz: Hoje, se ouvirdes a sua voz, não endureçais os vossos corações, como na provocação.
¹⁶ Porque, havendo-a alguns ouvido, o provocaram; mas não todos os que saíram do Egito por meio de Moisés.
¹⁷ Mas com quem se indignou por quarenta anos? Não foi porventura com os que pecaram, cujos corpos caíram no deserto?
¹⁸ E a quem jurou que não entrariam no seu repouso, senão aos que foram desobedientes?
¹⁹ E vemos que não puderam entrar por causa da sua incredulidade. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem é considerado fiel em toda a casa de Deus como servo?",
                        opcoes: [
                            { numero: 1, texto: "Moisés", correta: true },
                            { numero: 2, texto: "Davi", correta: false },
                            { numero: 3, texto: "Arão", correta: false },
                            { numero: 4, texto: "Josué", correta: false }
                        ],
                        explicacao: "Hebreus 3:5 - E, na verdade, Moisés foi fiel em toda a sua casa, como servo...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o autor diz para não fazermos se ouvirmos a voz de Deus hoje?",
                        opcoes: [
                            { numero: 1, texto: "Não endureçais os vossos corações", correta: true },
                            { numero: 2, texto: "Não anoteis as palavras", correta: false },
                            { numero: 3, texto: "Devemos fugir", correta: false },
                            { numero: 4, texto: "Devemos pedir provas", correta: false }
                        ],
                        explicacao: "Hebreus 3:15 - Enquanto se diz: Hoje, se ouvirdes a sua voz, não endureçais os vossos corações...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "O Descanso e a Palavra de Deus",
            texto: ` ¹ Temamos, pois, que, porventura, deixada a promessa de entrar no seu repouso, pareça que algum de vós fica para trás.
² Porque também a nós foram pregadas as boas novas, como a eles, mas a palavra da pregação nada lhes aproveitou, porquanto não estava misturada com a fé naqueles que a ouviram.
³ Porque nós, os que temos crido, entramos no repouso, tal como disse: Assim jurei na minha ira que não entrarão no meu repouso; embora as suas obras estivessem acabadas desde a fundação do mundo.
⁴ Porque em certo lugar disse assim do dia sétimo: E repousou Deus de todas as suas obras no sétimo dia.
⁵ E outra vez neste lugar: Não entrarão no meu repouso.
⁶ Visto, pois, que resta que alguns entrem nele, e que aqueles a quem primeiro foram pregadas as boas novas não entraram por causa da desobediência,
⁷ Determina outra vez um certo dia, Hoje, dizendo por Davi, muito tempo depois, como está dito: Hoje, se ouvirdes a sua voz, não endureçais os vossos corações.
⁸ Porque, se Josué lhes houvesse dado repouso, não falaria depois disso de outro dia.
⁹ Portanto, resta ainda um repouso para o povo de Deus.
¹⁰ Porque aquele que entrou no seu repouso, ele próprio repousou de suas obras, como Deus das suas.
¹¹ Procuremos, pois, entrar naquele repouso, para que ninguém caia no mesmo exemplo de desobediência.
¹² Porque a palavra de Deus é viva e eficaz, e mais penetrante do que espada alguma de dois gumes, e penetra até à divisão da alma e do espírito, e das juntas e medulas, e é apta para discernir os pensamentos e intenções do coração.
¹³ E não há criatura alguma encoberta diante dele; antes todas as coisas estão nuas e patentes aos olhos daquele com quem temos de tratar.
¹⁴ Visto que temos um grande sumo sacerdote, Jesus, Filho de Deus, que penetrou nos céus, retenhamos firmemente a nossa confissão.
¹⁵ Porque não temos um sumo sacerdote que não possa compadecer-se das nossas fraquezas; porém, um que, como nós, em tudo foi tentado, mas sem pecado.
¹⁶ Cheguemos, pois, com confiança ao trono da graça, para que possamos alcançar misericórdia e achar graça, a fim de sermos ajudados em tempo oportuno. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que resta para o povo de Deus, segundo o versículo 9?",
                        opcoes: [
                            { numero: 1, texto: "Um repouso (descanso)", correta: true },
                            { numero: 2, texto: "Muito trabalho escravo", correta: false },
                            { numero: 3, texto: "Apenas sofrimento", correta: false },
                            { numero: 4, texto: "Uma longa caminhada", correta: false }
                        ],
                        explicacao: "Hebreus 4:9 - Portanto, resta ainda um repouso para o povo de Deus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como é descrita a Palavra de Deus no capítulo 4?",
                        opcoes: [
                            { numero: 1, texto: "Viva e eficaz, mais penetrante do que espada alguma de dois gumes", correta: true },
                            { numero: 2, texto: "Um livro de histórias mortas", correta: false },
                            { numero: 3, texto: "Confusa e difícil", correta: false },
                            { numero: 4, texto: "Apenas um código civil", correta: false }
                        ],
                        explicacao: "Hebreus 4:12 - Porque a palavra de Deus é viva e eficaz, e mais penetrante do que espada alguma de dois gumes...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "O Sumo Sacerdote Segundo Melquisedeque",
            texto: ` ¹ Porque todo o sumo sacerdote, tomado dentre os homens, é constituído a favor dos homens nas coisas concernentes a Deus, para que ofereça dons e sacrifícios pelos pecados;
² E possa compadecer-se ternamente dos ignorantes e errados; pois também ele mesmo está rodeado de fraqueza.
³ E por esta causa deve ele, tanto pelo povo, como também por si mesmo, fazer oferta pelos pecados.
⁴ E ninguém toma para si esta honra, senão o que é chamado por Deus, como Arão.
⁵ Assim também Cristo não se glorificou a si mesmo, para se fazer sumo sacerdote, mas aquele que lhe disse: Tu és meu Filho, hoje te gerei.
⁶ Como também diz, noutro lugar: Tu és sacerdote eternamente, segundo a ordem de Melquisedeque.
⁷ O qual, nos dias da sua carne, oferecendo, com grande clamor e lágrimas, orações e súplicas ao que o podia livrar da morte, foi ouvido quanto ao que temia.
⁸ Ainda que era Filho, aprendeu a obediência, por aquilo que padeceu.
⁹ E, sendo ele consumado, veio a ser a causa da eterna salvação para todos os que lhe obedecem;
¹⁰ Chamado por Deus sumo sacerdote, segundo a ordem de Melquisedeque.
¹¹ Do qual muito temos que dizer, de difícil interpretação; porquanto vos fizestes negligentes para ouvir.
¹² Porque, devendo já ser mestres pelo tempo, ainda necessitais de que se vos torne a ensinar quais sejam os primeiros rudimentos das palavras de Deus; e vos haveis feito tais que necessitais de leite, e não de sólido mantimento.
¹³ Porque qualquer que ainda se alimenta de leite não está experimentado na palavra da justiça, porque é menino.
¹⁴ Mas o mantimento sólido é para os perfeitos, os quais, em razão do costume, têm os sentidos exercitados para discernir tanto o bem como o mal. 
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Jesus foi chamado por Deus, segundo o capítulo 5?",
                        opcoes: [
                            { numero: 1, texto: "Sumo sacerdote, segundo a ordem de Melquisedeque", correta: true },
                            { numero: 2, texto: "Levita da tribo de Judá", correta: false },
                            { numero: 3, texto: "Rei apenas de Israel", correta: false },
                            { numero: 4, texto: "Um anjo guardião", correta: false }
                        ],
                        explicacao: "Hebreus 5:10 - Chamado por Deus sumo sacerdote, segundo a ordem de Melquisedeque.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Cristo tornou-se a causa da eterna salvação para quem?",
                        opcoes: [
                            { numero: 1, texto: "Para todos os que lhe obedecem", correta: true },
                            { numero: 2, texto: "Apenas para os apóstolos", correta: false },
                            { numero: 3, texto: "Para quem conhece a lei de cor", correta: false },
                            { numero: 4, texto: "Para ninguém", correta: false }
                        ],
                        explicacao: "Hebreus 5:9 - E, sendo ele consumado, veio a ser a causa da eterna salvação para todos os que lhe obedecem.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "A Esperança como Âncora",
            texto: ` ¹ Por isso, deixando os rudimentos da doutrina de Cristo, prossigamos até à perfeição, não lançando de novo o fundamento do arrependimento de obras mortas e de fé em Deus,
² E da doutrina dos batismos, e da imposição das mãos, e da ressurreição dos mortos, e do juízo eterno.
³ E isto faremos, se Deus o permitir.
⁴ Porque é impossível que os que já uma vez foram iluminados, e provaram o dom celestial, e se tornaram participantes do Espírito Santo,
⁵ E provaram a boa palavra de Deus, e os poderes do século futuro,
⁶ E recaíram, sejam outra vez renovados para arrependimento; pois assim, quanto a eles, de novo crucificam o Filho de Deus, e o expõem ao vitupério.
⁷ Porque a terra que embebe a chuva, que muitas vezes cai sobre ela, e produz erva proveitosa para aqueles por quem é lavrada, recebe a bênção de Deus;
⁸ Mas a que produz espinhos e abrolhos, é reprovada, e perto está da maldição; o seu fim é ser queimada.
⁹ Mas de vós, ó amados, esperamos coisas melhores, e coisas que acompanham a salvação, ainda que assim falamos.
¹⁰ Porque Deus não é injusto para se esquecer da vossa obra, e do trabalho do amor que para com o seu nome mostrastes, enquanto servistes aos santos; e ainda servis.
¹¹ Mas desejamos que cada um de vós mostre o mesmo cuidado, para completa certeza da esperança até o fim;
¹² Para que vos não façais negligentes, mas sejais imitadores dos que pela fé e paciência herdam as promessas.
¹³ Porque, quando Deus fez a promessa a Abraão, como não tinha outro maior por quem jurasse, jurou por si mesmo,
¹⁴ Dizendo: Certamente, abençoando te abençoarei, e multiplicando te multiplicarei.
¹⁵ E assim, esperando com paciência, alcançou a promessa.
¹⁶ Porque os homens certamente juram por alguém superior a eles, e o juramento para confirmação é, para eles, o fim de toda a contenda.
¹⁷ Por isso, querendo Deus mostrar mais abundantemente a imutabilidade do seu conselho aos herdeiros da promessa, se interpôs com juramento;
¹⁸ Para que por duas coisas imutáveis, nas quais é impossível que Deus minta, tenhamos a firme consolação, nós, os que pomos o nosso refúgio em reter a esperança proposta;
¹⁹ A qual temos como âncora da alma, segura e firme, e que penetra até ao interior do véu,
²⁰ Onde Jesus, nosso precursor, entrou por nós, feito eternamente sumo sacerdote, segundo a ordem de Melquisedeque 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que é impossível que Deus faça?",
                        opcoes: [
                            { numero: 1, texto: "Que Deus minta", correta: true },
                            { numero: 2, texto: "Que Deus perdoe", correta: false },
                            { numero: 3, texto: "Que Deus mude", correta: false },
                            { numero: 4, texto: "Que Deus julgue", correta: false }
                        ],
                        explicacao: "Hebreus 6:18 - Para que por duas coisas imutáveis, nas quais é impossível que Deus minta...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que temos como 'âncora da alma', segura e firme?",
                        opcoes: [
                            { numero: 1, texto: "A esperança que entra até ao interior do véu", correta: true },
                            { numero: 2, texto: "O nosso dinheiro", correta: false },
                            { numero: 3, texto: "A nossa inteligência", correta: false },
                            { numero: 4, texto: "A proteção dos anjos", correta: false }
                        ],
                        explicacao: "Hebreus 6:19 - A qual temos como âncora da alma, segura e firme, e que penetra até ao interior do véu.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        7: {
            titulo: "O Sacerdócio Superior",
            texto: ` ¹ Porque este Melquisedeque, que era rei de Salém, sacerdote do Deus Altíssimo, e que saiu ao encontro de Abraão quando ele regressava da matança dos reis, e o abençoou;
² A quem também Abraão deu o dízimo de tudo, e primeiramente é, por interpretação, rei de justiça, e depois também rei de Salém, que é rei de paz;
³ Sem pai, sem mãe, sem genealogia, não tendo princípio de dias nem fim de vida, mas sendo feito semelhante ao Filho de Deus, permanece sacerdote para sempre.
⁴ Considerai, pois, quão grande era este, a quem até o patriarca Abraão deu os dízimos dos despojos.
⁵ E os que dentre os filhos de Levi recebem o sacerdócio têm ordem, segundo a lei, de tomar o dízimo do povo, isto é, de seus irmãos, ainda que tenham saído dos lombos de Abraão.
⁶ Mas aquele, cuja genealogia não é contada entre eles, tomou dízimos de Abraão, e abençoou o que tinha as promessas.
⁷ Ora, sem contradição alguma, o menor é abençoado pelo maior.
⁸ E aqui certamente tomam dízimos homens que morrem; ali, porém, aquele de quem se testifica que vive.
⁹ E, por assim dizer, por meio de Abraão, até Levi, que recebe dízimos, pagou dízimos.
¹⁰ Porque ainda ele estava nos lombos de seu pai quando Melquisedeque lhe saiu ao encontro.
¹¹ De sorte que, se a perfeição fosse pelo sacerdócio levítico (porque sob ele o povo recebeu a lei), que necessidade havia mais de que outro sacerdote se levantasse, segundo a ordem de Melquisedeque, e não fosse chamado segundo a ordem de Arão?
¹² Porque, mudando-se o sacerdócio, necessariamente se faz também mudança da lei.
¹³ Porque aquele de quem estas coisas se dizem pertence a outra tribo, da qual ninguém serviu ao altar,
¹⁴ Visto ser manifesto que nosso Senhor procedeu de Judá, e concernente a essa tribo nunca Moisés falou de sacerdócio.
¹⁵ E muito mais manifesto é ainda, se à semelhança de Melquisedeque se levantar outro sacerdote,
¹⁶ Que não foi feito segundo a lei do mandamento carnal, mas segundo o poder da vida incorruptível.
¹⁷ Porque ele assim testifica: Tu és sacerdote eternamente, segundo a ordem de Melquisedeque.
¹⁸ Porque o precedente mandamento é ab-rogado por causa da sua fraqueza e inutilidade
¹⁹ (Pois a lei nenhuma coisa aperfeiçoou) e desta sorte é introduzida uma melhor esperança, pela qual chegamos a Deus.
²⁰ E visto como não é sem prestar juramento (porque certamente aqueles, sem juramento, foram feitos sacerdotes,
²¹ Mas este com juramento por aquele que lhe disse: Jurou o Senhor, e não se arrependerá; tu és sacerdote eternamente segundo a ordem de Melquisedeque),
²² De tanto melhor aliança Jesus foi feito fiador.
²³ E, na verdade, aqueles foram feitos sacerdotes em grande número, porque pela morte foram impedidos de permanecer,
²⁴ Mas este, porque permanece eternamente, tem um sacerdócio perpétuo.
²⁵ Portanto, pode também salvar perfeitamente os que por ele se chegam a Deus, vivendo sempre para interceder por eles.
²⁶ Porque nos convinha tal sumo sacerdote, santo, inocente, imaculado, separado dos pecadores, e feito mais sublime do que os céus;
²⁷ Que não necessitasse, como os sumos sacerdotes, de oferecer cada dia sacrifícios, primeiramente por seus próprios pecados, e depois pelos do povo; porque isto fez ele, uma vez, oferecendo-se a si mesmo.
²⁸ Porque a lei constitui sumos sacerdotes a homens fracos, mas a palavra do juramento, que veio depois da lei, constitui ao Filho, perfeito para sempre. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "De que tribo nasceu o nosso Senhor, da qual Moisés nada falou sobre sacerdócio?",
                        opcoes: [
                            { numero: 1, texto: "Tribo de Judá", correta: true },
                            { numero: 2, texto: "Tribo de Levi", correta: false },
                            { numero: 3, texto: "Tribo de Benjamim", correta: false },
                            { numero: 4, texto: "Tribo de Dã", correta: false }
                        ],
                        explicacao: "Hebreus 7:14 - Porque manifesto é que o nosso Senhor procedeu de Judá, e em relação a essa tribo nunca Moisés falou de sacerdócio.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus é capaz de fazer com aqueles que por ele se chegam a Deus?",
                        opcoes: [
                            { numero: 1, texto: "Salvar perfeitamente, vivendo sempre para interceder por eles", correta: true },
                            { numero: 2, texto: "Salvar apenas em parte", correta: false },
                            { numero: 3, texto: "Julgá-los sem misericórdia", correta: false },
                            { numero: 4, texto: "Ignorar suas petições", correta: false }
                        ],
                        explicacao: "Hebreus 7:25 - Portanto, pode também salvar perfeitamente os que por ele se chegam a Deus...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        8: {
            titulo: "A Nova Aliança",
            texto: `¹ Ora, a suma do que temos dito é que temos um sumo sacerdote tal, que está assentado nos céus à destra do trono da majestade,
² Ministro do santuário, e do verdadeiro tabernáculo, o qual o Senhor fundou, e não o homem.
³ Porque todo o sumo sacerdote é constituído para oferecer dons e sacrifícios; por isso era necessário que este também tivesse alguma coisa que oferecer.
⁴ Ora, se ele estivesse na terra, nem tampouco sacerdote seria, havendo ainda sacerdotes que oferecem dons segundo a lei,
⁵ Os quais servem de exemplo e sombra das coisas celestiais, como Moisés divinamente foi avisado, estando já para acabar o tabernáculo; porque foi dito: Olha, faze tudo conforme o modelo que no monte se te mostrou.
⁶ Mas agora alcançou ele ministério tanto mais excelente, quanto é mediador de uma melhor aliança que está confirmada em melhores promessas.
⁷ Porque, se aquela primeira fora irrepreensível, nunca se teria buscado lugar para a segunda.
⁸ Porque, repreendendo-os, lhes diz: Eis que virão dias, diz o Senhor, em que com a casa de Israel e com a casa de Judá estabelecerei uma nova aliança,
⁹ Não segundo a aliança que fiz com seus pais no dia em que os tomei pela mão, para os tirar da terra do Egito; como não permaneceram naquela minha aliança, eu para eles não atentei, diz o Senhor.
¹⁰ Porque esta é a aliança que depois daqueles dias farei com a casa de Israel, diz o Senhor; porei as minhas leis no seu entendimento, e em seu coração as escreverei; e eu lhes serei por Deus, e eles me serão por povo;
¹¹ E não ensinará cada um a seu próximo, nem cada um ao seu irmão, dizendo: Conhece o Senhor; porque todos me conhecerão, desde o menor deles até ao maior.
¹² Porque serei misericordioso para com suas iniquidades, e de seus pecados e de suas iniquidades não me lembrarei mais.
¹³ Dizendo Nova aliança, envelheceu a primeira. Ora, o que foi tornado velho, e se envelhece, perto está de acabar. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde Deus poria as suas leis na Nova Aliança?",
                        opcoes: [
                            { numero: 1, texto: "No entendimento e no coração", correta: true },
                            { numero: 2, texto: "Em novas tábuas de pedra", correta: false },
                            { numero: 3, texto: "Apenas nos livros dos escribas", correta: false },
                            { numero: 4, texto: "Em monumentos", correta: false }
                        ],
                        explicacao: "Hebreus 8:10 - Porei as minhas leis no seu entendimento, e em seu coração as escreverei...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        9: {
            titulo: "O Sacrifício de Sangue",
            texto: `¹ Ora, também a primeira tinha ordenanças de culto divino, e um santuário terrestre.
² Porque um tabernáculo estava preparado, o primeiro, em que havia o candelabro, e a mesa, e os pães da proposição; ao que se chama o santuário.
³ Mas depois do segundo véu estava o tabernáculo que se chama o santo dos santos,
⁴ Que tinha o incensário de ouro, e a arca da aliança, coberta de ouro toda em redor; em que estava um vaso de ouro, que continha o maná, e a vara de Arão, que tinha florescido, e as tábuas da aliança;
⁵ E sobre a arca os querubins da glória, que faziam sombra no propiciatório; das quais coisas não falaremos agora particularmente.
⁶ Ora, estando estas coisas assim preparadas, a todo o tempo entravam os sacerdotes no primeiro tabernáculo, cumprindo os serviços;
⁷ Mas, no segundo, só o sumo sacerdote, uma vez no ano, não sem sangue, que oferecia por si mesmo e pelos pecados por ignorância do povo;
⁸ Dando nisto a entender o Espírito Santo que ainda o caminho do santuário não estava descoberto enquanto se conservava em pé o primeiro tabernáculo,
⁹ Que é uma alegoria para o tempo presente, em que se oferecem dons e sacrifícios que, quanto à consciência, não podem aperfeiçoar aquele que faz o serviço;
¹⁰ Consistindo somente em comidas, e bebidas, e várias abluções e justificações da carne, impostas até ao tempo da correção.
¹¹ Mas, vindo Cristo, o sumo sacerdote dos bens futuros, por um maior e mais perfeito tabernáculo, não feito por mãos, isto é, não desta criação,
¹² Nem por sangue de bodes e bezerros, mas por seu próprio sangue, entrou uma vez no santuário, havendo efetuado uma eterna redenção.
¹³ Porque, se o sangue dos touros e bodes, e a cinza de uma novilha aspergida sobre os imundos, os santifica, quanto à purificação da carne,
¹⁴ Quanto mais o sangue de Cristo, que pelo Espírito eterno se ofereceu a si mesmo imaculado a Deus, purificará as vossas consciências das obras mortas, para servirdes ao Deus vivo?
¹⁵ E por isso é Mediador de um novo testamento, para que, intervindo a morte para remissão das transgressões que havia debaixo do primeiro testamento, os chamados recebam a promessa da herança eterna.
¹⁶ Porque onde há testamento, é necessário que intervenha a morte do testador.
¹⁷ Porque um testamento tem força onde houve morte; ou terá ele algum valor enquanto o testador vive?
¹⁸ Por isso também o primeiro não foi consagrado sem sangue;
¹⁹ Porque, havendo Moisés anunciado a todo o povo todos os mandamentos segundo a lei, tomou o sangue dos bezerros e dos bodes, com água, lã purpúrea e hissopo, e aspergiu tanto o mesmo livro como todo o povo,
²⁰ Dizendo: Este é o sangue do testamento que Deus vos tem mandado.
²¹ E semelhantemente aspergiu com sangue o tabernáculo e todos os vasos do ministério.
²² E quase todas as coisas, segundo a lei, se purificam com sangue; e sem derramamento de sangue não há remissão.
²³ De sorte que era bem necessário que as figuras das coisas que estão no céu assim se purificassem; mas as próprias coisas celestiais com sacrifícios melhores do que estes.
²⁴ Porque Cristo não entrou num santuário feito por mãos, figura do verdadeiro, porém no mesmo céu, para agora comparecer por nós perante a face de Deus;
²⁵ Nem também para a si mesmo se oferecer muitas vezes, como o sumo sacerdote cada ano entra no santuário com sangue alheio;
²⁶ De outra maneira, necessário lhe fora padecer muitas vezes desde a fundação do mundo. Mas agora na consumação dos séculos uma vez se manifestou, para aniquilar o pecado pelo sacrifício de si mesmo.
²⁷ E, como aos homens está ordenado morrerem uma vez, vindo depois disso o juízo,
²⁸ Assim também Cristo, oferecendo-se uma vez para levar os pecados de muitos, aparecerá segunda vez, sem pecado, aos que o esperam para salvação. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que não há sem derramamento de sangue, segundo Hebreus 9:22?",
                        opcoes: [
                            { numero: 1, texto: "Remissão (perdão)", correta: true },
                            { numero: 2, texto: "Pobreza", correta: false },
                            { numero: 3, texto: "Conhecimento", correta: false },
                            { numero: 4, texto: "Poder político", correta: false }
                        ],
                        explicacao: "Hebreus 9:22 - ...e sem derramamento de sangue não há remissão.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quantas vezes Cristo se ofereceu para tirar os pecados de muitos?",
                        opcoes: [
                            { numero: 1, texto: "Uma vez", correta: true },
                            { numero: 2, texto: "Todos os anos", correta: false },
                            { numero: 3, texto: "Sete vezes", correta: false },
                            { numero: 4, texto: "Mil vezes", correta: false }
                        ],
                        explicacao: "Hebreus 9:28 - Assim também Cristo, oferecendo-se uma vez para tirar os pecados de muitos...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        10: {
            titulo: "O Novo e Vivo Caminho",
            texto: ` ¹ Porque tendo a lei a sombra dos bens futuros, e não a imagem exata das coisas, nunca, pelos mesmos sacrifícios que continuamente se oferecem cada ano, pode aperfeiçoar os que a eles se chegam.
² Doutra maneira, teriam deixado de se oferecer, porque, purificados uma vez os ministrantes, nunca mais teriam consciência de pecado.
³ Nesses sacrifícios, porém, cada ano se faz comemoração dos pecados,
⁴ Porque é impossível que o sangue dos touros e dos bodes tire os pecados.
⁵ Por isso, entrando no mundo, diz: Sacrifício e oferta não quiseste, mas corpo me preparaste;
⁶ Holocaustos e oblações pelo pecado não te agradaram.
⁷ Então disse: Eis aqui venho (no princípio do livro está escrito de mim), para fazer, ó Deus, a tua vontade.
⁸ Como acima diz: Sacrifício e oferta, e holocaustos e oblações pelo pecado não quiseste, nem te agradaram (os quais se oferecem segundo a lei).
⁹ Então disse: Eis aqui venho, para fazer, ó Deus, a tua vontade. Tira o primeiro, para estabelecer o segundo.
¹⁰ Na qual vontade temos sido santificados pela oblação do corpo de Jesus Cristo, feita uma vez.
¹¹ E assim todo o sacerdote aparece cada dia, ministrando e oferecendo muitas vezes os mesmos sacrifícios, que nunca podem tirar os pecados;
¹² Mas este, havendo oferecido para sempre um único sacrifício pelos pecados, está assentado à destra de Deus,
¹³ Daqui em diante esperando até que os seus inimigos sejam postos por escabelo de seus pés.
¹⁴ Porque com uma só oblação aperfeiçoou para sempre os que são santificados.
¹⁵ E também o Espírito Santo no-lo testifica, porque depois de haver dito:
¹⁶ Esta é a aliança que farei com eles depois daqueles dias, diz o Senhor: Porei as minhas leis em seus corações, e as escreverei em seus entendimentos; acrescenta:
¹⁷ E jamais me lembrarei de seus pecados e de suas iniquidades.
¹⁸ Ora, onde há remissão destes, não há mais oblação pelo pecado.
¹⁹ Tendo, pois, irmãos, ousadia para entrar no santuário, pelo sangue de Jesus,
²⁰ Pelo novo e vivo caminho que ele nos consagrou, pelo véu, isto é, pela sua carne,
²¹ E tendo um grande sacerdote sobre a casa de Deus,
²² Cheguemo-nos com verdadeiro coração, em inteira certeza de fé, tendo os corações purificados da má consciência, e o corpo lavado com água limpa,
²³ Retenhamos firmes a confissão da nossa esperança; porque fiel é o que prometeu.
²⁴ E consideremo-nos uns aos outros, para nos estimularmos ao amor e às boas obras,
²⁵ Não deixando nossa mútua congregação, como é costume de alguns, antes admoestando-nos uns aos outros; e tanto mais, quanto vedes que se vai aproximando aquele dia.
²⁶ Porque, se pecarmos voluntariamente, depois de termos recebido o conhecimento da verdade, já não resta mais sacrifício pelos pecados,
²⁷ Mas uma certa expectação horrível de juízo, e ardor de fogo, que há de devorar os adversários.
²⁸ Quebrantando alguém a lei de Moisés, morre sem misericórdia, só pela palavra de duas ou três testemunhas.
²⁹ De quanto maior castigo cuidais vós será julgado merecedor aquele que pisar o Filho de Deus, e tiver por profano o sangue da aliança com que foi santificado, e fizer agravo ao Espírito da graça?
³⁰ Porque bem conhecemos aquele que disse: Minha é a vingança, eu darei a recompensa, diz o Senhor. E outra vez: O Senhor julgará o seu povo.
³¹ Horrenda coisa é cair nas mãos do Deus vivo.
³² Lembrai-vos, porém, dos dias passados, em que, depois de serdes iluminados, suportastes grande combate de aflições.
³³ Em parte fostes feitos espetáculo com vitupérios e tribulações, e em parte fostes participantes com os que assim foram tratados.
³⁴ Porque também vos compadecestes das minhas prisões, e com alegria recebestes o roubo dos vossos bens, sabendo que em vós mesmos tendes nos céus uma possessão melhor e permanente.
³⁵ Não rejeiteis, pois, a vossa confiança, que tem grande e avultado galardão.
³⁶ Porque necessitais de paciência, para que, depois de haverdes feito a vontade de Deus, possais alcançar a promessa.
³⁷ Porque ainda um pouquinho de tempo, e o que há de vir virá, e não tardará.
³⁸ Mas o justo viverá pela fé; e, se alguém se retirar, a minha alma não tem prazer nele.
³⁹ Nós, porém, não somos daqueles que se retiram para a perdição, mas daqueles que creem para a conservação da alma. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Paulo recomenda não deixarmos de fazer, como é costume de alguns?",
                        opcoes: [
                            { numero: 1, texto: "Não deixando a nossa congregação", correta: true },
                            { numero: 2, texto: "Não deixando de trabalhar", correta: false },
                            { numero: 3, texto: "Não deixando de viajar", correta: false },
                            { numero: 4, texto: "Não deixando de ler jornais", correta: false }
                        ],
                        explicacao: "Hebreus 10:25 - Não deixando a nossa congregação, como é costume de alguns, antes admoestando-nos uns aos outros...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como devemos nos aproximar de Deus agora?",
                        opcoes: [
                            { numero: 1, texto: "Com verdadeiro coração, em inteira certeza de fé", correta: true },
                            { numero: 2, texto: "Com medo e pavor", correta: false },
                            { numero: 3, texto: "Apenas por rituais", correta: false },
                            { numero: 4, texto: "De forma casual", correta: false }
                        ],
                        explicacao: "Hebreus 10:22 - Cheguemo-nos com verdadeiro coração, em inteira certeza de fé...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        11: {
            titulo: "Os Heróis da Fé",
            texto: `¹ Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que não se veem.
² Porque por ela os antigos alcançaram testemunho.
³ Pela fé entendemos que os mundos pela palavra de Deus foram criados; de maneira que aquilo que se vê não foi feito do que é aparente.
⁴ Pela fé Abel ofereceu a Deus maior sacrifício do que Caim, pelo qual alcançou testemunho de que era justo, dando Deus testemunho dos seus dons, e por ela, depois de morto, ainda fala.
⁵ Pela fé Enoque foi trasladado para não ver a morte, e não foi achado, porque Deus o trasladara; visto como antes da sua trasladação alcançou testemunho de que agradara a Deus.
⁶ Ora, sem fé é impossível agradar-lhe; porque é necessário que aquele que se aproxima de Deus creia que ele existe, e que é galardoador dos que o buscam.
⁷ Pela fé Noé, divinamente avisado das coisas que ainda não se viam, temeu e, para salvação da sua família, preparou a arca, pela qual condenou o mundo, e foi feito herdeiro da justiça que é segundo a fé.
⁸ Pela fé Abraão, sendo chamado, obedeceu, indo para um lugar que havia de receber por herança; e saiu, sem saber para onde ia.
⁹ Pela fé habitou na terra da promessa, como em terra alheia, morando em cabanas com Isaque e Jacó, herdeiros com ele da mesma promessa.
¹⁰ Porque esperava a cidade que tem fundamentos, da qual o artífice e construtor é Deus.
¹¹ Pela fé também a mesma Sara recebeu o poder de conceber, e deu à luz já fora da idade; porquanto teve por fiel aquele que o tinha prometido.
¹² Por isso também de um, e esse já amortecido, descenderam tantos, em multidão, como as estrelas do céu, e como a areia inumerável que está na praia do mar.
¹³ Todos estes morreram na fé, sem terem recebido as promessas; mas vendo-as de longe, e crendo-as e abraçando-as, confessaram que eram estrangeiros e peregrinos na terra.
¹⁴ Porque, os que isto dizem, claramente mostram que buscam uma pátria.
¹⁵ E se, na verdade, se lembrassem daquela de onde haviam saído, teriam oportunidade de tornar.
¹⁶ Mas agora desejam uma melhor, isto é, a celestial. Por isso também Deus não se envergonha deles, de se chamar seu Deus, porque já lhes preparou uma cidade.
¹⁷ Pela fé ofereceu Abraão a Isaque, quando foi provado; sim, aquele que recebera as promessas ofereceu o seu unigênito.
¹⁸ Sendo-lhe dito: Em Isaque será chamada a tua descendência, considerou que Deus era poderoso para até dentre os mortos o ressuscitar;
¹⁹ E daí também em figura ele o recobrou.
²⁰ Pela fé Isaque abençoou Jacó e Esaú, no tocante às coisas futuras.
²¹ Pela fé Jacó, próximo da morte, abençoou cada um dos filhos de José, e adorou encostado à ponta do seu cajado.
²² Pela fé José, próximo da morte, fez menção da saída dos filhos de Israel, e deu ordem acerca de seus ossos.
²³ Pela fé Moisés, já nascido, foi escondido três meses por seus pais, porque viram que era um menino formoso; e não temeram o mandamento do rei.
²⁴ Pela fé Moisés, sendo já grande, recusou ser chamado filho da filha de Faraó,
²⁵ Escolhendo antes ser maltratado com o povo de Deus, do que por um pouco de tempo ter o gozo do pecado;
²⁶ Tendo por maiores riquezas o vitupério de Cristo do que os tesouros do Egito; porque tinha em vista a recompensa.
²⁷ Pela fé deixou o Egito, não temendo a ira do rei; porque ficou firme, como vendo o invisível.
²⁸ Pela fé celebrou a páscoa e a aspersão do sangue, para que o destruidor dos primogênitos lhes não tocasse.
²⁹ Pela fé passaram o Mar Vermelho, como por terra seca; o que intentando os egípcios, se afogaram.
³⁰ Pela fé caíram os muros de Jericó, sendo rodeados durante sete dias.
³¹ Pela fé Raabe, a meretriz, não pereceu com os incrédulos, acolhendo em paz os espias.
³² E que mais direi? Faltar-me-ia o tempo contando de Gideão, e de Baraque, e de Sansão, e de Jefté, e de Davi, e de Samuel e dos profetas,
³³ Os quais pela fé venceram reinos, praticaram a justiça, alcançaram promessas, fecharam as bocas dos leões,
³⁴ Apagaram a força do fogo, escaparam do fio da espada, da fraqueza tiraram forças, na batalha se esforçaram, puseram em fuga os exércitos dos estranhos.
³⁵ As mulheres receberam pela ressurreição os seus mortos; uns foram torturados, não aceitando o seu livramento, para alcançarem uma melhor ressurreição;
³⁶ E outros experimentaram escárnios e açoites, e até cadeias e prisões.
³⁷ Foram apedrejados, serrados, tentados, mortos ao fio da espada; andaram vestidos de peles de ovelhas e de cabras, desamparados, aflitos e maltratados
³⁸ (Dos quais o mundo não era digno), errantes pelos desertos, e montes, e pelas covas e cavernas da terra.
³⁹ E todos estes, tendo tido testemunho pela fé, não alcançaram a promessa,
⁴⁰ Provendo Deus alguma coisa melhor a nosso respeito, para que eles sem nós não fossem aperfeiçoados. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que é a fé, segundo a definição do capítulo 11?",
                        opcoes: [
                            { numero: 1, texto: "O firme fundamento das coisas que se esperam, e a prova das que se não vêem", correta: true },
                            { numero: 2, texto: "Uma incerteza sobre o futuro", correta: false },
                            { numero: 3, texto: "Um sentimento passageiro", correta: false },
                            { numero: 4, texto: "Crer apenas no que se toca", correta: false }
                        ],
                        explicacao: "Hebreus 11:1 - Ora, a fé é o firme fundamento das coisas que se esperam...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Sem o que é impossível agradar a Deus?",
                        opcoes: [
                            { numero: 1, texto: "Sem fé", correta: true },
                            { numero: 2, texto: "Sem dinheiro", correta: false },
                            { numero: 3, texto: "Sem viagens", correta: false },
                            { numero: 4, texto: "Sem fama", correta: false }
                        ],
                        explicacao: "Hebreus 11:6 - Ora, sem fé é impossível agradar-lhe...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        12: {
            titulo: "Olhando para Jesus",
            texto: ` ¹ Portanto nós também, pois que estamos rodeados de uma tão grande nuvem de testemunhas, deixemos todo o embaraço, e o pecado que tão de perto nos rodeia, e corramos com paciência a carreira que nos está proposta,
² Olhando para Jesus, autor e consumador da fé, o qual, pelo gozo que lhe estava proposto, suportou a cruz, desprezando a afronta, e assentou-se à destra do trono de Deus.
³ Considerai, pois, aquele que suportou tais contradições dos pecadores contra si mesmo, para que não enfraqueçais, desfalecendo em vossos ânimos.
⁴ Ainda não resististes até ao sangue, combatendo contra o pecado.
⁵ E já vos esquecestes da exortação que argumenta convosco como filhos: Filho meu, não desprezes a correção do Senhor, e não desmaies quando por ele fores repreendido;
⁶ Porque o Senhor corrige o que ama, e açoita a qualquer que recebe por filho.
⁷ Se suportais a correção, Deus vos trata como filhos; porque, que filho há a quem o pai não corrija?
⁸ Mas, se estais sem disciplina, da qual todos são feitos participantes, sois então bastardos, e não filhos.
⁹ Além do que, tivemos nossos pais segundo a carne, para nos corrigirem, e nós os reverenciamos; não nos sujeitaremos muito mais ao Pai dos espíritos, para vivermos?
¹⁰ Porque aqueles, na verdade, por um pouco de tempo, nos corrigiam como bem lhes parecia; mas este, para nosso proveito, para sermos participantes da sua santidade.
¹¹ E, na verdade, toda a correção, ao presente, não parece ser de gozo, senão de tristeza, mas depois produz um fruto pacífico de justiça nos exercitados por ela.
¹² Portanto, tornai a levantar as mãos cansadas, e os joelhos desconjuntados,
¹³ E fazei veredas direitas para os vossos pés, para que o que manqueja não se desvie inteiramente, antes seja sarado.
¹⁴ Segui a paz com todos, e a santificação, sem a qual ninguém verá o Senhor;
¹⁵ Tendo cuidado de que ninguém se prive da graça de Deus, e de que nenhuma raiz de amargura, brotando, vos perturbe, e por ela muitos se contaminem.
¹⁶ E ninguém seja fornicador, ou profano, como Esaú, que por uma refeição vendeu o seu direito de primogenitura.
¹⁷ Porque bem sabeis que, querendo ele ainda depois herdar a bênção, foi rejeitado, porque não achou lugar de arrependimento, ainda que com lágrimas o buscou.
¹⁸ Porque não chegastes ao monte palpável, aceso em fogo, e à escuridão, e às trevas, e à tempestade,
¹⁹ E ao sonido da trombeta, e à voz das palavras, a qual os que a ouviram pediram que se lhes não falasse mais;
²⁰ Porque não podiam suportar o que se lhes mandava: Se até um animal tocar o monte será apedrejado ou passado com um dardo.
²¹ E tão terrível era a visão, que Moisés disse: Estou todo assombrado, e tremendo.
²² Mas chegastes ao monte Sião, e à cidade do Deus vivo, à Jerusalém celestial, e aos muitos milhares de anjos;
²³ À universal assembleia e igreja dos primogênitos, que estão inscritos nos céus, e a Deus, o juiz de todos, e aos espíritos dos justos aperfeiçoados;
²⁴ E a Jesus, o Mediador de uma nova aliança, e ao sangue da aspersão, que fala melhor do que o de Abel.
²⁵ Vede que não rejeiteis ao que fala; porque, se não escaparam aqueles que rejeitaram o que na terra os advertia, muito menos nós, se nos desviarmos daquele que é dos céus;
²⁶ A voz do qual moveu então a terra, mas agora anunciou, dizendo: Ainda uma vez comoverei, não só a terra, senão também o céu.
²⁷ E esta palavra: Ainda uma vez, mostra a mudança das coisas móveis, como coisas feitas, para que as imóveis permaneçam.
²⁸ Por isso, tendo recebido um reino que não pode ser abalado, retenhamos a graça, pela qual sirvamos a Deus agradavelmente, com reverência e piedade;
²⁹ Porque o nosso Deus é um fogo consumidor. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Para quem devemos olhar enquanto corremos a nossa carreira?",
                        opcoes: [
                            { numero: 1, texto: "Olhando para Jesus, autor e consumador da fé", correta: true },
                            { numero: 2, texto: "Olhando para os nossos próprios pés", correta: false },
                            { numero: 3, texto: "Olhando para os erros dos outros", correta: false },
                            { numero: 4, texto: "Olhando para o passado", correta: false }
                        ],
                        explicacao: "Hebreus 12:2 - Olhando para Jesus, autor e consumador da fé...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Deus faz com o filho a quem ama?",
                        opcoes: [
                            { numero: 1, texto: "Corrige (disciplina)", correta: true },
                            { numero: 2, texto: "Deixa fazer o que quiser", correta: false },
                            { numero: 3, texto: "Ignora seus erros", correta: false },
                            { numero: 4, texto: "O abandona", correta: false }
                        ],
                        explicacao: "Hebreus 12:6 - Porque o Senhor corrige o que ama, e açoita a qualquer que recebe por filho.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        13: {
            titulo: "Sacrifício de Louvor",
            texto: ` ¹ Permaneça o amor fraternal.
² Não vos esqueçais da hospitalidade, porque por ela alguns, não o sabendo, hospedaram anjos.
³ Lembrai-vos dos presos, como se estivésseis presos com eles, e dos maltratados, como sendo-o vós mesmos também no corpo.
⁴ Venerado seja entre todos o matrimônio e o leito sem mácula; porém, aos fornicadores, e aos adúlteros, Deus os julgará.
⁵ Sejam vossos costumes sem avareza, contentando-vos com o que tendes; porque ele disse: Não te deixarei, nem te desampararei.
⁶ E assim com confiança ousemos dizer: O Senhor é o meu ajudador, e não temerei o que me possa fazer o homem.
⁷ Lembrai-vos dos vossos pastores, que vos falaram a palavra de Deus, a fé dos quais imitai, atentando para a sua maneira de viver.
⁸ Jesus Cristo é o mesmo, ontem, e hoje, e eternamente.
⁹ Não vos deixeis levar em redor por doutrinas várias e estranhas, porque bom é que o coração se fortifique com graça, e não com alimentos que de nada aproveitaram aos que a eles se entregaram.
¹⁰ Temos um altar, de que não têm direito de comer os que servem ao tabernáculo.
¹¹ Porque os corpos dos animais, cujo sangue é, pelo pecado, trazido pelo sumo sacerdote para o santuário, são queimados fora do arraial.
¹² E por isso também Jesus, para santificar o povo pelo seu próprio sangue, padeceu fora da porta.
¹³ Saiamos, pois, a ele fora do arraial, levando o seu vitupério.
¹⁴ Porque não temos aqui cidade permanente, mas buscamos a futura.
¹⁵ Portanto, ofereçamos sempre por ele a Deus sacrifício de louvor, isto é, o fruto dos lábios que confessam o seu nome.
¹⁶ E não vos esqueçais da beneficência e comunicação, porque com tais sacrifícios Deus se agrada.
¹⁷ Obedecei a vossos pastores, e sujeitai-vos a eles; porque velam por vossas almas, como aqueles que hão de dar conta delas; para que o façam com alegria e não gemendo, porque isso não vos seria útil.
¹⁸ Orai por nós, porque confiamos que temos boa consciência, como aqueles que em tudo querem portar-se honestamente.
¹⁹ E rogo-vos com instância que assim o façais, para que eu mais depressa vos seja restituído.
²⁰ Ora, o Deus de paz, que pelo sangue da aliança eterna tornou a trazer dos mortos a nosso Senhor Jesus, grande pastor das ovelhas,
²¹ Vos aperfeiçoe em toda a boa obra, para fazerdes a sua vontade, operando em vós o que perante ele é agradável por Jesus Cristo, ao qual seja glória para todo o sempre. Amém.
²² Rogo-vos, porém, irmãos, que suporteis a palavra desta exortação; porque abreviadamente vos escrevi.
²³ Sabei que já está solto o irmão Timóteo, com o qual, se ele vier depressa, vos verei.
²⁴ Saudai a todos os vossos chefes e a todos os santos. Os da Itália vos saúdam.
²⁵ A graça seja com todos vós. Amém. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Paulo diz sobre a imutabilidade de Jesus Cristo?",
                        opcoes: [
                            { numero: 1, texto: "Jesus Cristo é o mesmo, ontem, e hoje, e eternamente", correta: true },
                            { numero: 2, texto: "Jesus muda conforme a época", correta: false },
                            { numero: 3, texto: "Jesus não é o mesmo de antigamente", correta: false },
                            { numero: 4, texto: "A personalidade de Jesus evoluiu", correta: false }
                        ],
                        explicacao: "Hebreus 13:8 - Jesus Cristo é o mesmo, ontem, e hoje, e eternamente.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Não vos esqueçais da hospitalidade, porque por ela alguns, não o sabendo, hospedaram:",
                        opcoes: [
                            { numero: 1, texto: "Anjos", correta: true },
                            { numero: 2, texto: "Reis", correta: false },
                            { numero: 3, texto: "Soldados", correta: false },
                            { numero: 4, texto: "Ladrões", correta: false }
                        ],
                        explicacao: "Hebreus 13:2 - Não vos esqueçais da hospitalidade, porque por ela alguns, não o sabendo, hospedaram anjos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};