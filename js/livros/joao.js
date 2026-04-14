// js/livros/joao.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const joao = {
    nome: "João",
    icone: "🦅",
    autor: "João",
    background: "./imagens/joao_bg.jpg", 

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "O Verbo se fez Carne",
            texto: `¹ No princípio, era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.
² Ele estava no princípio com Deus.
³ Todas as coisas foram feitas por ele, e sem ele nada do que foi feito se fez.
⁴ Nele, estava a vida e a vida era a luz dos homens;
⁵ e a luz resplandece nas trevas, e as trevas não a compreenderam.
⁶ Houve um homem enviado de Deus, cujo nome era João.
⁷ Este veio para testemunho para que testificasse da luz, para que todos cressem por ele.
⁸ Não era ele a luz, mas veio para que testificasse da luz.
⁹ Ali estava a luz verdadeira, que alumia a todo homem que vem ao mundo,
¹⁰ estava no mundo, e o mundo foi feito por ele e o mundo não o conheceu.
¹¹ Veio para o que era seu, e os seus não o receberam.
¹² Mas a todos quantos o receberam deu-lhes o poder de serem feitos filhos de Deus: aos que creem no seu nome,
¹³ os quais não nasceram do sangue, nem da vontade da carne, nem da vontade do varão, mas de Deus.
¹⁴ E o Verbo se fez carne e habitou entre nós, e vimos a sua glória, como a glória do Unigênito do Pai, cheio de graça e de verdade.
¹⁵ João testificou dele e clamou, dizendo: Este era aquele de quem eu dizia: o que vem depois de mim é antes de mim, porque foi primeiro do que eu.
¹⁶ E todos nós recebemos também da sua plenitude, com graça sobre graça.
¹⁷ Porque a lei foi dada por Moisés; a graça e a verdade vieram por Jesus Cristo.
¹⁸ Deus nunca foi visto por alguém. O Filho unigênito, que está no seio do Pai, este o fez conhecer.
¹⁹ E este é o testemunho de João, quando os judeus mandaram de Jerusalém sacerdotes e levitas para que lhe perguntassem: Quem és tu?
²⁰ E confessou e não negou; confessou: Eu não sou o Cristo.
²¹ E perguntaram-lhe: Então, quem és, pois? És tu Elias? E disse: Não sou. És tu o profeta? E respondeu: Não.
²² Disseram-lhe, pois: Quem és, para que demos resposta àqueles que nos enviaram? Que dizes de ti mesmo?
²³ Disse: Eu sou a voz do que clama no deserto: Endireitai o caminho do Senhor, como disse o profeta Isaías.
²⁴ E os que tinham sido enviados eram dos fariseus,
²⁵ e perguntaram-lhe, e disseram-lhe: Por que batizas, pois, se tu não és o Cristo, nem Elias, nem o profeta?
²⁶ João respondeu-lhes, dizendo: Eu batizo com água, mas, no meio de vós, está um a quem vós não conheceis.
²⁷ Este é aquele que vem após mim, que foi antes de mim, do qual eu não sou digno de desatar as correias das sandálias.
²⁸ Essas coisas aconteceram em Betânia, do outro lado do Jordão, onde João estava batizando.
²⁹ No dia seguinte, João viu a Jesus, que vinha para ele, e disse: Eis o Cordeiro de Deus, que tira o pecado do mundo.
³⁰ Este é aquele do qual eu disse: após mim vem um homem que foi antes de mim, porque já era primeiro do que eu.
³¹ E eu não o conhecia, mas, para que ele fosse manifestado a Israel, vim eu, por isso, batizando com água.
³² E João testificou, dizendo: Eu vi o Espírito descer do céu como uma pomba e repousar sobre ele.
³³ E eu não o conhecia, mas o que me mandou a batizar com água, esse me disse: Sobre aquele que vires descer o Espírito e sobre ele repousar, esse é o que batiza com o Espírito Santo.
³⁴ E eu vi e tenho testificado que este é o Filho de Deus.
³⁵ No dia seguinte João estava outra vez ali, na companhia de dois dos seus discípulos.
³⁶ E, vendo passar a Jesus, disse: Eis aqui o Cordeiro de Deus.
³⁷ E os dois discípulos ouviram-no dizer isso e seguiram a Jesus.
³⁸ E Jesus, voltando-se e vendo que eles o seguiam, disse-lhes: Que buscais? E eles disseram: Rabi (que, traduzido, quer dizer Mestre), onde moras?
³⁹ Ele lhes disse: Vinde e vede. Foram, e viram onde morava, e ficaram com ele aquele dia; e era já quase a hora décima.
⁴⁰ Era André, irmão de Simão Pedro, um dos dois que ouviram aquilo de João e o haviam seguido.
⁴¹ Este achou primeiro a seu irmão Simão e disse-lhe: Achamos o Messias (que, traduzido, é o Cristo).
⁴² E levou-o a Jesus. E, olhando Jesus para ele, disse: Tu és Simão, filho de Jonas;tu serás chamado Cefas (que quer dizer Pedro).
⁴³ No dia seguinte, quis Jesus ir à Galileia, e achou a Filipe, e disse-lhe: Segue-me.
⁴⁴ E Filipe era de Betsaida, cidade de André e de Pedro.
⁴⁵ Filipe achou Natanael e disse-lhe: Havemos achado aquele de quem Moisés escreveu na Lei e de quem escreveram os Profetas: Jesus de Nazaré, filho de José.
⁴⁶ Disse-lhe Natanael: Pode vir alguma coisa boa de Nazaré? Disse-lhe Filipe: Vem e vê.
⁴⁷ Jesus viu Natanael vir ter com ele e disse dele: Eis aqui um verdadeiro israelita, em quem não há dolo.
⁴⁸ Disse-lhe Natanael: De onde me conheces tu? Jesus respondeu e disse-lhe: Antes que Filipe te chamasse, te vi eu estando tu debaixo da figueira.
⁴⁹ Natanael respondeu e disse-lhe: Rabi, tu és o Filho de Deus, tu és o Rei de Israel.
⁵⁰ Jesus respondeu e disse-lhe: Porque te disse: vi-te debaixo da figueira, crês? Coisas maiores do que estas verás.
⁵¹ E disse-lhe: Na verdade, na verdade vos digoque, daqui em diante, vereis o céu  
51 E disse-lhe: Na verdade, na verdade vos digo que, daqui em diante, vereis o céu aberto e os anjos de Deus subindo e descendo sobre o Filho do Homem.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como João Batista se descreveu quando perguntaram quem ele era?",
                        opcoes: [
                            { numero: 1, texto: "Eu sou o Messias esperado", correta: false },
                            { numero: 2, texto: "A voz do que clama no deserto", correta: true },
                            { numero: 3, texto: "O profeta Elias ressuscitado", correta: false },
                            { numero: 4, texto: "Um anjo enviado por Deus", correta: false }
                        ],
                        explicacao: "João 1:23 - Ele citou Isaías dizendo ser a voz que prepara o caminho.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que André disse a Simão Pedro após encontrar Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Vem ver um grande mestre", correta: false },
                            { numero: 2, texto: "Encontramos o Rei de Roma", correta: false },
                            { numero: 3, texto: "Vem pescar conosco", correta: false },
                            { numero: 4, texto: "Achamos o Messias", correta: true }
                        ],
                        explicacao: "João 1:41 - André foi o primeiro a levar Pedro a Jesus chamando-o de Messias.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus disse a Natanael que o fez crer?",
                        opcoes: [
                            { numero: 1, texto: "Que ele seria um grande rei", correta: false },
                            { numero: 2, texto: "Que o viu debaixo da figueira", correta: true },
                            { numero: 3, texto: "Que conhecia seu pai", correta: false },
                            { numero: 4, texto: "Que faria um milagre na hora", correta: false }
                        ],
                        explicacao: "João 1:48 - Jesus o viu antes mesmo de Filipe o chamar.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "As Bodas de Caná",
            texto: `¹ E, ao terceiro dia, fizeram-se umas bodas em Caná da Galileia; e estava ali a mãe de Jesus.
² E foi também convidado Jesus e os seus discípulos para as bodas.
³ E, faltando vinho, a mãe de Jesus lhe disse: Não têm vinho.
⁴ Disse-lhe Jesus: Mulher, que tenho eu contigo? Ainda não é chegada a minha hora.
⁵ Sua mãe disse aos serventes: Fazei tudo quanto ele vos disser.
⁶ E estavam ali postas seis talhas de pedra, para as purificações dos judeus, e em cada uma cabiam dois ou três almudes.
⁷ Disse-lhes Jesus: Enchei de água essas talhas. E encheram-nas até em cima.
⁸ E disse-lhes: Tirai agora, e levai ao mestre-sala. E levaram.
⁹ E, logo que o mestre-sala provou a água feita vinho (não sabendo de onde viera, se bem que o sabiam os serventes que tinham tirado a água), chamou o mestre-sala ao esposo,
¹⁰ E disse-lhe: Todo o homem põe primeiro o vinho bom e, quando já têm bebido bem, então o inferior; mas tu guardaste até agora o bom vinho.
¹¹ Jesus principiou assim os seus sinais em Caná da Galileia, e manifestou a sua glória; e os seus discípulos creram nele.
¹² Depois disto desceu a Cafarnaum, ele, e sua mãe, e seus irmãos, e seus discípulos; e ficaram ali não muitos dias.
¹³ E estava próxima a páscoa dos judeus, e Jesus subiu a Jerusalém.
¹⁴ E achou no templo os que vendiam bois, e ovelhas, e pombos, e os cambistas assentados.
¹⁵ E tendo feito um açoite de cordões, lançou todos fora do templo, também os bois e ovelhas; e espalhou o dinheiro dos cambistas, e derrubou as mesas;
¹⁶ E disse aos que vendiam pombos: Tirai daqui estes, e não façais da casa de meu Pai casa de venda.
¹⁷ E os seus discípulos lembraram-se do que está escrito: O zelo da tua casa me devorou.
¹⁸ Responderam, pois, os judeus, e disseram-lhe: Que sinal nos mostras para fazeres isto?
¹⁹ Jesus respondeu, e disse-lhes: Destruí este templo, e em três dias o levantarei.
²⁰ Disseram, pois, os judeus: Em quarenta e seis anos foi edificado este templo, e tu o levantarás em três dias?
²¹ Mas ele falava do templo do seu corpo.
²² Quando, pois, ressuscitou dentre os mortos, os seus discípulos lembraram-se de que lhes dissera isto; e creram na Escritura, e na palavra que Jesus tinha dito.
²³ E, estando ele em Jerusalém pela páscoa, durante a festa, muitos, vendo os sinais que fazia, creram no seu nome.
²⁴ Mas o mesmo Jesus não confiava neles, porque a todos conhecia;
²⁵ E não necessitava de que alguém testificasse do homem, porque ele bem sabia o que havia no homem. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual foi o primeiro milagre de Jesus registrado por João?",
                        opcoes: [
                            { numero: 1, texto: "Cura de um leproso", correta: false },
                            { numero: 2, texto: "Caminhar sobre o mar", correta: false },
                            { numero: 3, texto: "Transformar água em vinho", correta: true },
                            { numero: 4, texto: "Multiplicação de pães", correta: false }
                        ],
                        explicacao: "João 2:11 - Este foi o princípio dos sinais de Jesus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus usou para expulsar os vendedores do templo?",
                        opcoes: [
                            { numero: 1, texto: "Um chicote de cordas", correta: true },
                            { numero: 2, texto: "Uma espada de ferro", correta: false },
                            { numero: 3, texto: "Apenas o olhar", correta: false },
                            { numero: 4, texto: "Um cajado de madeira", correta: false }
                        ],
                        explicacao: "João 2:15 - Ele fez um azorrague de cordas e os lançou fora.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Em quantos dias Jesus disse que levantaria o templo (referindo-se ao seu corpo)?",
                        opcoes: [
                            { numero: 1, texto: "Um dia", correta: false },
                            { numero: 2, texto: "Sete dias", correta: false },
                            { numero: 3, texto: "Três dias", correta: true },
                            { numero: 4, texto: "Quarenta dias", correta: false }
                        ],
                        explicacao: "João 2:19 - Jesus falava da sua ressurreição ao terceiro dia.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "Nicodemos e o Novo Nascimento",
            texto: `¹ E havia entre os fariseus um homem, chamado Nicodemos, príncipe dos judeus.
² Este foi ter de noite com Jesus, e disse-lhe: Rabi, bem sabemos que és Mestre, vindo de Deus; porque ninguém pode fazer estes sinais que tu fazes, se Deus não for com ele.
³ Jesus respondeu, e disse-lhe: Na verdade, na verdade te digo que aquele que não nascer de novo, não pode ver o reino de Deus.
⁴ Disse-lhe Nicodemos: Como pode um homem nascer, sendo velho? Pode, porventura, tornar a entrar no ventre de sua mãe, e nascer?
⁵ Jesus respondeu: Na verdade, na verdade te digo que aquele que não nascer da água e do Espírito, não pode entrar no reino de Deus.
⁶ O que é nascido da carne é carne, e o que é nascido do Espírito é espírito.
⁷ Não te maravilhes de te ter dito: Necessário vos é nascer de novo.
⁸ O vento assopra onde quer, e ouves a sua voz, mas não sabes de onde vem, nem para onde vai; assim é todo aquele que é nascido do Espírito.
⁹ Nicodemos respondeu, e disse-lhe: Como pode ser isso?
¹⁰ Jesus respondeu, e disse-lhe: Tu és mestre de Israel, e não sabes isto?
¹¹ Na verdade, na verdade te digo que nós dizemos o que sabemos, e testificamos o que vimos; e não aceitais o nosso testemunho.
¹² Se vos falei de coisas terrestres, e não crestes, como crereis, se vos falar das celestiais?
¹³ Ora, ninguém subiu ao céu, senão o que desceu do céu, o Filho do homem, que está no céu.
¹⁴ E, como Moisés levantou a serpente no deserto, assim importa que o Filho do homem seja levantado;
¹⁵ Para que todo aquele que nele crê não pereça, mas tenha a vida eterna.
¹⁶ Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.
¹⁷ Porque Deus enviou o seu Filho ao mundo, não para que condenasse o mundo, mas para que o mundo fosse salvo por ele.
¹⁸ Quem crê nele não é condenado; mas quem não crê já está condenado, porquanto não crê no nome do unigênito Filho de Deus.
¹⁹ E a condenação é esta: Que a luz veio ao mundo, e os homens amaram mais as trevas do que a luz, porque as suas obras eram más.
²⁰ Porque todo aquele que faz o mal odeia a luz, e não vem para a luz, para que as suas obras não sejam reprovadas.
²¹ Mas quem pratica a verdade vem para a luz, a fim de que as suas obras sejam manifestas, porque são feitas em Deus.
²² Depois disto foi Jesus com os seus discípulos para a terra da Judeia; e estava ali com eles, e batizava.
²³ Ora, João batizava também em Enom, junto a Salim, porque havia ali muitas águas; e vinham ali, e eram batizados.
²⁴ Porque ainda João não tinha sido lançado na prisão.
²⁵ Houve então uma questão entre os discípulos de João e os judeus acerca da purificação.
²⁶ E foram ter com João, e disseram-lhe: Rabi, aquele que estava contigo além do Jordão, do qual tu deste testemunho, ei-lo batizando, e todos vão ter com ele.
²⁷ João respondeu, e disse: O homem não pode receber coisa alguma, se não lhe for dada do céu.
²⁸ Vós mesmos me sois testemunhas de que disse: Eu não sou o Cristo, mas sou enviado adiante dele.
²⁹ Aquele que tem a esposa é o esposo; mas o amigo do esposo, que lhe assiste e o ouve, alegra-se muito com a voz do esposo. Assim, pois, já este meu gozo está cumprido.
³⁰ É necessário que ele cresça e que eu diminua.
³¹ Aquele que vem de cima é sobre todos; aquele que vem da terra é da terra e fala da terra. Aquele que vem do céu é sobre todos.
³² E aquilo que ele viu e ouviu isso testifica; e ninguém aceita o seu testemunho.
³³ Aquele que aceitou o seu testemunho, esse confirmou que Deus é verdadeiro.
³⁴ Porque aquele que Deus enviou fala as palavras de Deus; pois não lhe dá Deus o Espírito por medida.
³⁵ O Pai ama o Filho, e todas as coisas entregou nas suas mãos.
³⁶ Aquele que crê no Filho tem a vida eterna; mas aquele que não crê no Filho não verá a vida, mas a ira de Deus sobre ele permanece. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Para ser salvo, Jesus disse que é necessário nascer de quê?",
                        opcoes: [
                            { numero: 1, texto: "Da vontade do homem", correta: false },
                            { numero: 2, texto: "Da água e do Espírito", correta: true },
                            { numero: 3, texto: "Das boas obras", correta: false },
                            { numero: 4, texto: "Da linhagem de Abraão", correta: false }
                        ],
                        explicacao: "João 3:5 - O novo nascimento é uma obra espiritual.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu com a serpente no deserto, que Jesus comparou consigo mesmo?",
                        opcoes: [
                            { numero: 1, texto: "Ela foi enterrada", correta: false },
                            { numero: 2, texto: "Ela fugiu do povo", correta: false },
                            { numero: 3, texto: "Ela foi escondida", correta: false },
                            { numero: 4, texto: "Ela foi levantada por Moisés", correta: true }
                        ],
                        explicacao: "João 3:14 - Assim como a serpente foi levantada, o Filho do Homem também seria.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Segundo João 3:16, o que Deus deu ao mundo por amor?",
                        opcoes: [
                            { numero: 1, texto: "O Seu Filho Unigênito", correta: true },
                            { numero: 2, texto: "Riquezas e tesouros", correta: false },
                            { numero: 3, texto: "As tábuas da lei", correta: false },
                            { numero: 4, texto: "Um novo exército", correta: false }
                        ],
                        explicacao: "João 3:16 - A prova do amor de Deus foi a entrega de Jesus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "A Mulher Samaritana",
            texto: `¹ E quando o Senhor entendeu que os fariseus tinham ouvido que Jesus fazia e batizava mais discípulos do que João
² (Ainda que Jesus mesmo não batizava, mas os seus discípulos),
³ Deixou a Judeia, e foi outra vez para a Galileia.
⁴ E era-lhe necessário passar por Samaria.
⁵ Foi, pois, a uma cidade de Samaria, chamada Sicar, junto da herdade que Jacó tinha dado a seu filho José.
⁶ E estava ali a fonte de Jacó. Jesus, pois, cansado do caminho, assentou-se assim junto da fonte. Era isto quase à hora sexta.
⁷ Veio uma mulher de Samaria tirar água. Disse-lhe Jesus: Dá-me de beber.
⁸ Porque os seus discípulos tinham ido à cidade comprar comida.
⁹ Disse-lhe, pois, a mulher samaritana: Como, sendo tu judeu, me pedes de beber a mim, que sou mulher samaritana? (porque os judeus não se comunicam com os samaritanos).
¹⁰ Jesus respondeu, e disse-lhe: Se tu conheceras o dom de Deus, e quem é o que te diz: Dá-me de beber, tu lhe pedirias, e ele te daria água viva.
¹¹ Disse-lhe a mulher: Senhor, tu não tens com que a tirar, e o poço é fundo; onde, pois, tens a água viva?
¹² És tu maior do que o nosso pai Jacó, que nos deu o poço, bebendo ele próprio dele, e os seus filhos, e o seu gado?
¹³ Jesus respondeu, e disse-lhe: Qualquer que beber desta água tornará a ter sede;
¹⁴ Mas aquele que beber da água que eu lhe der nunca terá sede, porque a água que eu lhe der se fará nele uma fonte de água que salte para a vida eterna.
¹⁵ Disse-lhe a mulher: Senhor, dá-me dessa água, para que não mais tenha sede, e não venha aqui tirá-la.
¹⁶ Disse-lhe Jesus: Vai, chama o teu marido, e vem cá.
¹⁷ A mulher respondeu, e disse: Não tenho marido. Disse-lhe Jesus: Disseste bem: Não tenho marido;
¹⁸ Porque tiveste cinco maridos, e o que agora tens não é teu marido; isto disseste com verdade.
¹⁹ Disse-lhe a mulher: Senhor, vejo que és profeta.
²⁰ Nossos pais adoraram neste monte, e vós dizeis que é em Jerusalém o lugar onde se deve adorar.
²¹ Disse-lhe Jesus: Mulher, crê-me que a hora vem, em que nem neste monte nem em Jerusalém adorareis o Pai.
²² Vós adorais o que não sabeis; nós adoramos o que sabemos porque a salvação vem dos judeus.
²³ Mas a hora vem, e agora é, em que os verdadeiros adoradores adorarão o Pai em espírito e em verdade; porque o Pai procura a tais que assim o adorem.
²⁴ Deus é Espírito, e importa que os que o adoram o adorem em espírito e em verdade.
²⁵ A mulher disse-lhe: Eu sei que o Messias (que se chama o Cristo) vem; quando ele vier, nos anunciará tudo.
²⁶ Jesus disse-lhe: Eu o sou, eu que falo contigo.
²⁷ E nisto vieram os seus discípulos, e maravilharam-se de que estivesse falando com uma mulher; todavia nenhum lhe disse: Que perguntas? Ou: Por que falas com ela?
²⁸ Deixou, pois, a mulher o seu cântaro, e foi à cidade, e disse àqueles homens:
²⁹ Vinde, vede um homem que me disse tudo quanto tenho feito. Porventura não é este o Cristo?
³⁰ Saíram, pois, da cidade, e foram ter com ele.
³¹ E entretanto os seus discípulos lhe rogaram, dizendo: Rabi, come.
³² Ele, porém, lhes disse: Uma comida tenho para comer, que vós não conheceis.
³³ Então os discípulos diziam uns aos outros: Trouxe-lhe, porventura, alguém algo de comer?
³⁴ Jesus disse-lhes: A minha comida é fazer a vontade daquele que me enviou, e realizar a sua obra.
³⁵ Não dizeis vós que ainda há quatro meses até que venha a ceifa? Eis que eu vos digo: Levantai os vossos olhos, e vede as terras, que já estão brancas para a ceifa.
³⁶ E o que ceifa recebe galardão, e ajunta fruto para a vida eterna; para que, assim o que semeia como o que ceifa, ambos se regozijem.
³⁷ Porque nisto é verdadeiro o ditado, que um é o que semeia, e outro o que ceifa.
³⁸ Eu vos enviei a ceifar onde vós não trabalhastes; outros trabalharam, e vós entrastes no seu trabalho.
³⁹ E muitos dos samaritanos daquela cidade creram nele, pela palavra da mulher, que testificou: Disse-me tudo quanto tenho feito.
⁴⁰ Indo, pois, ter com ele os samaritanos, rogaram-lhe que ficasse com eles; e ficou ali dois dias.
⁴¹ E muitos mais creram nele, por causa da sua palavra.
⁴² E diziam à mulher: Já não é pelo teu dito que nós cremos; porque nós mesmos o temos ouvido, e sabemos que este é verdadeiramente o Cristo, o Salvador do mundo.
⁴³ E dois dias depois partiu dali, e foi para a Galileia.
⁴⁴ Porque Jesus mesmo testificou que um profeta não tem honra na sua própria pátria.
⁴⁵ Chegando, pois, à Galileia, os galileus o receberam, vistas todas as coisas que fizera em Jerusalém, no dia da festa; porque também eles tinham ido à festa.
⁴⁶ Segunda vez foi Jesus a Caná da Galileia, onde da água fizera vinho. E havia ali um oficial do rei, cujo filho estava enfermo em Cafarnaum.
⁴⁷ Ouvindo este que Jesus vinha da Judeia para a Galileia, foi ter com ele, e rogou-lhe que descesse, e curasse o seu filho, porque já estava à morte.
⁴⁸ Então Jesus lhe disse: Se não virdes sinais e milagres, não crereis.
⁴⁹ Disse-lhe o oficial: Senhor, desce, antes que meu filho morra.
⁵⁰ Disse-lhe Jesus: Vai, o teu filho vive. E o homem creu na palavra que Jesus lhe disse, e partiu.
⁵¹ E descendo ele logo, saíram-lhe ao encontro os seus servos, e lhe anunciaram, dizendo: O teu filho vive.
⁵² Perguntou-lhes, pois, a que hora se achara melhor. E disseram-lhe: Ontem às sete horas a febre o deixou.
⁵³ Entendeu, pois, o pai que era aquela hora a mesma em que Jesus lhe disse: O teu filho vive; e creu ele, e toda a sua casa.
⁵⁴ Jesus, novamente, fez este segundo milagre, quando ia da Judeia para a Galileia. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde Jesus estava sentado quando encontrou a samaritana?",
                        opcoes: [
                            { numero: 1, texto: "Na porta da cidade", correta: false },
                            { numero: 2, texto: "Junto à fonte de Jacó", correta: true },
                            { numero: 3, texto: "No jardim de uma casa", correta: false },
                            { numero: 4, texto: "Embaixo de uma palmeira", correta: false }
                        ],
                        explicacao: "João 4:6 - Cansado da viagem, Jesus sentou-se à beira do poço.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "De que forma Deus deve ser adorado, segundo Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Apenas com cânticos", correta: false },
                            { numero: 2, texto: "Com sacrifícios caros", correta: false },
                            { numero: 3, texto: "Apenas em Jerusalém", correta: false },
                            { numero: 4, texto: "Em espírito e em verdade", correta: true }
                        ],
                        explicacao: "João 4:24 - Deus procura adoradores que o adorem em espírito.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que a mulher deixou para trás ao correr para a cidade?",
                        opcoes: [
                            { numero: 1, texto: "O seu cântaro", correta: true },
                            { numero: 2, texto: "Suas sandálias", correta: false },
                            { numero: 3, texto: "Suas moedas", correta: false },
                            { numero: 4, texto: "Seu manto", correta: false }
                        ],
                        explicacao: "João 4:28 - Deixou o cântaro para anunciar que achou o Messias.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "O Tanque de Betesda",
            texto: `¹ Depois disto havia uma festa entre os judeus, e Jesus subiu a Jerusalém.
² Ora, em Jerusalém há, próximo à porta das ovelhas, um tanque, chamado em hebreu Betesda, o qual tem cinco alpendres.
³ Nestes jazia grande multidão de enfermos, cegos, mancos e ressecados, esperando o movimento da água.
⁴ Porquanto um anjo descia em certo tempo ao tanque, e agitava a água; e o primeiro que ali descia, depois do movimento da água, sarava de qualquer enfermidade que tivesse.
⁵ E estava ali um homem que, havia trinta e oito anos, se achava enfermo.
⁶ E Jesus, vendo este deitado, e sabendo que estava neste estado havia muito tempo, disse-lhe: Queres ficar são?
⁷ O enfermo respondeu-lhe: Senhor, não tenho homem algum que, quando a água é agitada, me ponha no tanque; mas, enquanto eu vou, desce outro antes de mim.
⁸ Jesus disse-lhe: Levanta-te, toma o teu leito, e anda.
⁹ Logo aquele homem ficou são; e tomou o seu leito, e andava. E aquele dia era sábado.
¹⁰ Então os judeus disseram àquele que tinha sido curado: É sábado, não te é lícito levar o leito.
¹¹ Ele respondeu-lhes: Aquele que me curou, ele próprio disse: Toma o teu leito, e anda.
¹² Perguntaram-lhe, pois: Quem é o homem que te disse: Toma o teu leito, e anda?
¹³ E o que fora curado não sabia quem era; porque Jesus se havia retirado, em razão de naquele lugar haver grande multidão.
¹⁴ Depois Jesus encontrou-o no templo, e disse-lhe: Eis que já estás são; não peques mais, para que não te suceda alguma coisa pior.
¹⁵ E aquele homem foi, e anunciou aos judeus que Jesus era o que o curara.
¹⁶ E por esta causa os judeus perseguiram a Jesus, e procuravam matá-lo, porque fazia estas coisas no sábado.
¹⁷ E Jesus lhes respondeu: Meu Pai trabalha até agora, e eu trabalho também.
¹⁸ Por isso, pois, os judeus ainda mais procuravam matá-lo, porque não só quebrantava o sábado, mas também dizia que Deus era seu próprio Pai, fazendo-se igual a Deus.
¹⁹ Mas Jesus respondeu, e disse-lhes: Na verdade, na verdade vos digo que o Filho por si mesmo não pode fazer coisa alguma, se o não vir fazer o Pai; porque tudo quanto ele faz, o Filho o faz igualmente.
²⁰ Porque o Pai ama o Filho, e mostra-lhe tudo o que faz; e ele lhe mostrará maiores obras do que estas, para que vos maravilheis.
²¹ Pois, assim como o Pai ressuscita os mortos, e os vivifica, assim também o Filho vivifica aqueles que quer.
²² E também o Pai a ninguém julga, mas deu ao Filho todo o juízo;
²³ Para que todos honrem o Filho, como honram o Pai. Quem não honra o Filho, não honra o Pai que o enviou.
²⁴ Na verdade, na verdade vos digo que quem ouve a minha palavra, e crê naquele que me enviou, tem a vida eterna, e não entrará em condenação, mas passou da morte para a vida.
²⁵ Em verdade, em verdade vos digo que vem a hora, e agora é, em que os mortos ouvirão a voz do Filho de Deus, e os que a ouvirem viverão.
²⁶ Porque, como o Pai tem a vida em si mesmo, assim deu também ao Filho ter a vida em si mesmo;
²⁷ E deu-lhe o poder de também exercer o juízo, porque é o Filho do homem.
²⁸ Não vos maravilheis disto; porque vem a hora em que todos os que estão nos sepulcros ouvirão a sua voz.
²⁹ E os que fizeram o bem sairão para a ressurreição da vida; e os que fizeram o mal para a ressurreição da condenação.
³⁰ Eu não posso de mim mesmo fazer coisa alguma. Como ouço, assim julgo; e o meu juízo é justo, porque não busco a minha vontade, mas a vontade do Pai que me enviou.
³¹ Se eu testifico de mim mesmo, o meu testemunho não é verdadeiro.
³² Há outro que testifica de mim, e sei que o testemunho que ele dá de mim é verdadeiro.
³³ Vós mandastes mensageiros a João, e ele deu testemunho da verdade.
³⁴ Eu, porém, não recebo testemunho de homem; mas digo isto, para que vos salveis.
³⁵ Ele era a candeia que ardia e iluminava, e vós quisestes alegrar-vos por um pouco de tempo com a sua luz.
³⁶ Mas eu tenho maior testemunho do que o de João; porque as obras que o Pai me deu para realizar, as mesmas obras que eu faço, testificam de mim, que o Pai me enviou.
³⁷ E o Pai, que me enviou, ele mesmo testificou de mim. Vós nunca ouvistes a sua voz, nem vistes o seu parecer.
³⁸ E a sua palavra não permanece em vós, porque naquele que ele enviou não credes vós.
³⁹ Examinais as Escrituras, porque vós cuidais ter nelas a vida eterna, e são elas que de mim testificam;
⁴⁰ E não quereis vir a mim para terdes vida.
⁴¹ Eu não recebo glória dos homens;
⁴² Mas bem vos conheço, que não tendes em vós o amor de Deus.
⁴³ Eu vim em nome de meu Pai, e não me aceitais; se outro vier em seu próprio nome, a esse aceitareis.
⁴⁴ Como podeis vós crer, recebendo honra uns dos outros, e não buscando a honra que vem só de Deus?
⁴⁵ Não cuideis que eu vos hei de acusar para com o Pai. Há um que vos acusa, Moisés, em quem vós esperais.
⁴⁶ Porque, se vós crêsseis em Moisés, creríeis em mim; porque de mim escreveu ele.
⁴⁷ Mas, se não credes nos seus escritos, como crereis nas minhas palavras? 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por quantos anos o homem no tanque estava doente?",
                        opcoes: [
                            { numero: 1, texto: "Sete anos", correta: false },
                            { numero: 2, texto: "Trinta e oito anos", correta: true },
                            { numero: 3, texto: "Doze anos", correta: false },
                            { numero: 4, texto: "Vinte e cinco anos", correta: false }
                        ],
                        explicacao: "João 5:5 - O homem esperava por cura há quase quatro décadas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontecia no tanque quando a água era movida?",
                        opcoes: [
                            { numero: 1, texto: "A água ficava quente", correta: false },
                            { numero: 2, texto: "O primeiro a entrar sarava", correta: true },
                            { numero: 3, texto: "A água desaparecia", correta: false },
                            { numero: 4, texto: "Surgiam peixes no local", correta: false }
                        ],
                        explicacao: "João 5:4 - Um anjo descia e movia a água para cura.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem Jesus disse que testificava (dava testemunho) d'Ele?",
                        opcoes: [
                            { numero: 1, texto: "Os imperadores romanos", correta: false },
                            { numero: 2, texto: "Os sacerdotes do templo", correta: false },
                            { numero: 3, texto: "As Escrituras", correta: true },
                            { numero: 4, texto: "Os filósofos gregos", correta: false }
                        ],
                        explicacao: "João 5:39 - As Escrituras são as que dão testemunho de Jesus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "A Multiplicação e o Pão da Vida",
            texto: `¹ Depois disto partiu Jesus para o outro lado do mar da Galileia, que é o de Tiberíades.
² E grande multidão o seguia, porque via os sinais que operava sobre os enfermos.
³ E Jesus subiu ao monte, e assentou-se ali com os seus discípulos.
⁴ E a páscoa, a festa dos judeus, estava próxima.
⁵ Então Jesus, levantando os olhos, e vendo que uma grande multidão vinha ter com ele, disse a Filipe: Onde compraremos pão, para estes comerem?
⁶ Mas dizia isto para o experimentar; porque ele bem sabia o que havia de fazer.
⁷ Filipe respondeu-lhe: Duzentos dinheiros de pão não lhes bastarão, para que cada um deles tome um pouco.
⁸ E um dos seus discípulos, André, irmão de Simão Pedro, disse-lhe:
⁹ Está aqui um rapaz que tem cinco pães de cevada e dois peixinhos; mas que é isto para tantos?
¹⁰ E disse Jesus: Mandai assentar os homens. E havia muita relva naquele lugar. Assentaram-se, pois, os homens em número de quase cinco mil.
¹¹ E Jesus tomou os pães e, havendo dado graças, repartiu-os pelos discípulos, e os discípulos pelos que estavam assentados; e igualmente também dos peixes, quanto eles queriam.
¹² E, quando estavam saciados, disse aos seus discípulos: Recolhei os pedaços que sobejaram, para que nada se perca.
¹³ Recolheram-nos, pois, e encheram doze cestos de pedaços dos cinco pães de cevada, que sobejaram aos que haviam comido.
¹⁴ Vendo, pois, aqueles homens o milagre que Jesus tinha feito, diziam: Este é verdadeiramente o Profeta que devia vir ao mundo.
¹⁵ Sabendo, pois, Jesus que haviam de vir arrebatá-lo, para o fazerem rei, tornou a retirar-se, ele só, para o monte.
¹⁶ E, quando veio a tarde, os seus discípulos desceram para o mar.
¹⁷ E, entrando no barco, atravessaram o mar em direção a Cafarnaum; e era já escuro, e ainda Jesus não tinha vindo a eles.
¹⁸ E o mar se levantou, porque um grande vento assoprava.
¹⁹ E, tendo navegado uns vinte e cinco ou trinta estádios, viram a Jesus, andando sobre o mar e aproximando-se do barco; e temeram.
²⁰ Mas ele lhes disse: Sou eu, não temais.
²¹ Então eles de boa mente o receberam no barco; e logo o barco chegou à terra para onde iam.
²² No dia seguinte, a multidão que estava do outro lado do mar, vendo que não havia ali mais do que um barquinho, a não ser aquele no qual os seus discípulos haviam entrado, e que Jesus não entrara com os seus discípulos naquele barquinho, mas que os seus discípulos tinham ido sozinhos
²³ (Contudo, outros barquinhos tinham chegado de Tiberíades, perto do lugar onde comeram o pão, havendo o Senhor dado graças).
²⁴ Vendo, pois, a multidão que Jesus não estava ali nem os seus discípulos, entraram eles também nos barcos, e foram a Cafarnaum, em busca de Jesus.
²⁵ E, achando-o no outro lado do mar, disseram-lhe: Rabi, quando chegaste aqui?
²⁶ Jesus respondeu-lhes, e disse: Na verdade, na verdade vos digo que me buscais, não pelos sinais que vistes, mas porque comestes do pão e vos saciastes.
²⁷ Trabalhai, não pela comida que perece, mas pela comida que permanece para a vida eterna, a qual o Filho do homem vos dará; porque a este o Pai, Deus, o selou.
²⁸ Disseram-lhe, pois: Que faremos para executarmos as obras de Deus?
²⁹ Jesus respondeu, e disse-lhes: A obra de Deus é esta: Que creiais naquele que ele enviou.
³⁰ Disseram-lhe, pois: Que sinal, pois, fazes tu, para que o vejamos, e creiamos em ti? Que operas tu?
³¹ Nossos pais comeram o maná no deserto, como está escrito: Deu-lhes a comer o pão do céu.
³² Disse-lhes, pois, Jesus: Na verdade, na verdade vos digo: Moisés não vos deu o pão do céu; mas meu Pai vos dá o verdadeiro pão do céu.
³³ Porque o pão de Deus é aquele que desce do céu e dá vida ao mundo.
³⁴ Disseram-lhe, pois: Senhor, dá-nos sempre desse pão.
³⁵ E Jesus lhes disse: Eu sou o pão da vida; aquele que vem a mim não terá fome, e quem crê em mim nunca terá sede.
³⁶ Mas já vos disse que também vós me vistes, e contudo não credes.
³⁷ Todo o que o Pai me dá virá a mim; e o que vem a mim de maneira nenhuma o lançarei fora.
³⁸ Porque eu desci do céu, não para fazer a minha vontade, mas a vontade daquele que me enviou.
³⁹ E a vontade do Pai que me enviou é esta: Que nenhum de todos aqueles que me deu, eu perca, mas que o ressuscite no último dia.
⁴⁰ Porquanto a vontade daquele que me enviou é esta: Que todo aquele que vê o Filho, e crê nele, tenha a vida eterna; e eu o ressuscitarei no último dia.
⁴¹ Murmuravam, pois, dele os judeus, porque dissera: Eu sou o pão que desceu do céu.
⁴² E diziam: Não é este Jesus, o filho de José, cujo pai e mãe nós conhecemos? Como, pois, diz ele: Desci do céu?
⁴³ Respondeu, pois, Jesus, e disse-lhes: Não murmureis entre vós.
⁴⁴ Ninguém pode vir a mim, se o Pai que me enviou o não trouxer; e eu o ressuscitarei no último dia.
⁴⁵ Está escrito nos profetas: E serão todos ensinados por Deus. Portanto, todo aquele que do Pai ouviu e aprendeu vem a mim.
⁴⁶ Não que alguém visse ao Pai, a não ser aquele que é de Deus; este tem visto ao Pai.
⁴⁷ Na verdade, na verdade vos digo que aquele que crê em mim tem a vida eterna.
⁴⁸ Eu sou o pão da vida.
⁴⁹ Vossos pais comeram o maná no deserto, e morreram.
⁵⁰ Este é o pão que desce do céu, para que o que dele comer não morra.
⁵¹ Eu sou o pão vivo que desceu do céu; se alguém comer deste pão, viverá para sempre; e o pão que eu der é a minha carne, que eu darei pela vida do mundo.
⁵² Disputavam, pois, os judeus entre si, dizendo: Como nos pode dar este a sua carne a comer?
⁵³ Jesus, pois, lhes disse: Na verdade, na verdade vos digo que, se não comerdes a carne do Filho do homem, e não beberdes o seu sangue, não tereis vida em vós mesmos.
⁵⁴ Quem come a minha carne e bebe o meu sangue tem a vida eterna, e eu o ressuscitarei no último dia.
⁵⁵ Porque a minha carne verdadeiramente é comida, e o meu sangue verdadeiramente é bebida.
⁵⁶ Quem come a minha carne e bebe o meu sangue permanece em mim e eu nele.
⁵⁷ Assim como o Pai, que vive, me enviou, e eu vivo pelo Pai, assim, quem de mim se alimenta, também viverá por mim.
⁵⁸ Este é o pão que desceu do céu; não como de vossos pais, que comeram o maná e morreram; quem comer este pão viverá para sempre.
⁵⁹ Ele disse estas coisas na sinagoga, ensinando em Cafarnaum.
⁶⁰ Muitos, pois, dos seus discípulos, ouvindo isto, disseram: Duro é este discurso; quem o pode ouvir?
⁶¹ Sabendo, pois, Jesus em si mesmo que os seus discípulos murmuravam disto, disse-lhes: Isto escandaliza-vos?
⁶² Que seria, pois, se vísseis subir o Filho do homem para onde primeiro estava?
⁶³ O espírito é o que vivifica, a carne para nada aproveita; as palavras que eu vos digo são espírito e vida.
⁶⁴ Mas há alguns de vós que não creem. Porque bem sabia Jesus, desde o princípio, quem eram os que não criam, e quem era o que o havia de entregar.
⁶⁵ E dizia: Por isso eu vos disse que ninguém pode vir a mim, se por meu Pai não lhe for concedido.
⁶⁶ Desde então muitos dos seus discípulos tornaram para trás, e já não andavam com ele.
⁶⁷ Então disse Jesus aos doze: Quereis vós também retirar-vos?
⁶⁸ Respondeu-lhe, pois, Simão Pedro: Senhor, para quem iremos nós? Tu tens as palavras da vida eterna.
⁶⁹ E nós temos crido e conhecido que tu és o Cristo, o Filho do Deus vivente.
⁷⁰ Respondeu-lhe Jesus: Não vos escolhi a vós os doze? E um de vós é um diabo.
⁷¹ E isto dizia ele de Judas Iscariotes, filho de Simão; porque este o havia de entregar, sendo um dos doze. 
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Com o que o menino contribuiu para alimentar a multidão?",
                        opcoes: [
                            { numero: 1, texto: "Dez pães e um peixe", correta: false },
                            { numero: 2, texto: "Dois pães e cinco peixes", correta: false },
                            { numero: 3, texto: "Sete pães e dois peixes", correta: false },
                            { numero: 4, texto: "Cinco pães de cevada e dois peixinhos", correta: true }
                        ],
                        explicacao: "João 6:9 - Foi o pouco nas mãos de Jesus que alimentou a todos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como os discípulos viram Jesus vindo ao encontro deles no mar?",
                        opcoes: [
                            { numero: 1, texto: "Andando sobre as águas", correta: true },
                            { numero: 2, texto: "Em um barco rápido", correta: false },
                            { numero: 3, texto: "Nadando no meio da tempestade", correta: false },
                            { numero: 4, texto: "Voando sobre as nuvens", correta: false }
                        ],
                        explicacao: "João 6:19 - Eles tiveram medo ao ver Jesus sobre o mar.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus declarou ser n'Ele mesmo?",
                        opcoes: [
                            { numero: 1, texto: "O Mel de Israel", correta: false },
                            { numero: 2, texto: "O Pão da Vida", correta: true },
                            { numero: 3, texto: "O Trigo do Templo", correta: false },
                            { numero: 4, texto: "A Água Salgada", correta: false }
                        ],
                        explicacao: "João 6:35 - Jesus satisfaz a fome espiritual.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        7: {
            titulo: "Jesus na Festa dos Tabernáculos",
            texto: ` ¹ E depois disto Jesus andava pela Galileia, e já não queria andar pela Judeia, pois os judeus procuravam matá-lo.
² E estava próxima a festa dos judeus, a dos tabernáculos.
³ Disseram-lhe, pois, seus irmãos: Sai daqui, e vai para a Judeia, para que também os teus discípulos vejam as obras que fazes.
⁴ Porque não há ninguém que procure ser conhecido que faça coisa alguma em oculto. Se fazes estas coisas, manifesta-te ao mundo.
⁵ Porque nem mesmo seus irmãos criam nele.
⁶ Disse-lhes, pois, Jesus: Ainda não é chegado o meu tempo, mas o vosso tempo sempre está pronto.
⁷ O mundo não vos pode odiar, mas ele me odeia a mim, porquanto dele testifico que as suas obras são más.
⁸ Subi vós a esta festa; eu não subo ainda a esta festa, porque ainda o meu tempo não está cumprido.
⁹ E, havendo-lhes dito isto, ficou na Galileia.
¹⁰ Mas, quando seus irmãos já tinham subido à festa, então subiu ele também, não manifestamente, mas como em oculto.
¹¹ Ora, os judeus procuravam-no na festa, e diziam: Onde está ele?
¹² E havia grande murmuração entre a multidão a respeito dele. Diziam alguns: Ele é bom. E outros diziam: Não, antes engana o povo.
¹³ Todavia ninguém falava dele abertamente, por medo dos judeus.
¹⁴ Mas, no meio da festa subiu Jesus ao templo, e ensinava.
¹⁵ E os judeus maravilhavam-se, dizendo: Como sabe este letras, não as tendo aprendido?
¹⁶ Jesus lhes respondeu, e disse: A minha doutrina não é minha, mas daquele que me enviou.
¹⁷ Se alguém quiser fazer a vontade dele, pela mesma doutrina conhecerá se ela é de Deus, ou se eu falo de mim mesmo.
¹⁸ Quem fala de si mesmo busca a sua própria glória; mas o que busca a glória daquele que o enviou, esse é verdadeiro, e não há nele injustiça.
¹⁹ Não vos deu Moisés a lei? E nenhum de vós observa a lei. Por que procurais matar-me?
²⁰ A multidão respondeu, e disse: Tens demônio; quem procura matar-te?
²¹ Respondeu Jesus, e disse-lhes: Fiz uma só obra, e todos vos maravilhais.
²² Pelo motivo de que Moisés vos deu a circuncisão (não que fosse de Moisés, mas dos pais), e no sábado circuncidais um homem.
²³ Se o homem recebe a circuncisão no sábado, para que a lei de Moisés não seja quebrantada, indignais-vos contra mim, porque no sábado curei de todo um homem?
²⁴ Não julgueis segundo a aparência, mas julgai segundo a reta justiça.
²⁵ Então alguns dos de Jerusalém diziam: Não é este o que procuram matar?
²⁶ E ei-lo aí está falando abertamente, e nada lhe dizem. Porventura sabem verdadeiramente os príncipes que de fato este é o Cristo?
²⁷ Todavia bem sabemos de onde este é; mas, quando vier o Cristo, ninguém saberá de onde ele é.
²⁸ Clamava, pois, Jesus no templo, ensinando, e dizendo: Vós conheceis-me, e sabeis de onde sou; e eu não vim de mim mesmo, mas aquele que me enviou é verdadeiro, o qual vós não conheceis.
²⁹ Mas eu conheço-o, porque dele sou e ele me enviou.
³⁰ Procuravam, pois, prendê-lo, mas ninguém lançou mão dele, porque ainda não era chegada a sua hora.
³¹ E muitos da multidão creram nele, e diziam: Quando o Cristo vier, fará ainda mais sinais do que os que este tem feito?
³² Os fariseus ouviram que a multidão murmurava dele estas coisas; e os fariseus e os principais sacerdotes mandaram servidores para o prenderem.
³³ Disse-lhes, pois, Jesus: Ainda um pouco de tempo estou convosco, e depois vou para aquele que me enviou.
³⁴ Vós me buscareis, e não me achareis; e onde eu estou, vós não podeis vir.
³⁵ Disseram, pois, os judeus uns para os outros: Para onde irá este, que o não acharemos? Irá porventura para os dispersos entre os gregos, e ensinará os gregos?
³⁶ Que palavra é esta que disse: Buscar-me-eis, e não me achareis; e: Aonde eu estou vós não podeis ir?
³⁷ E no último dia, o grande dia da festa, Jesus pôs-se em pé, e clamou, dizendo: Se alguém tem sede, venha a mim, e beba.
³⁸ Quem crê em mim, como diz a Escritura, rios de água viva correrão do seu ventre.
³⁹ E isto disse ele do Espírito que haviam de receber os que nele cressem; porque o Espírito Santo ainda não fora dado, por ainda Jesus não ter sido glorificado.
⁴⁰ Então muitos da multidão, ouvindo esta palavra, diziam: Verdadeiramente este é o Profeta.
⁴¹ Outros diziam: Este é o Cristo; mas diziam outros: Vem, pois, o Cristo da Galileia?
⁴² Não diz a Escritura que o Cristo vem da descendência de Davi, e de Belém, da aldeia de onde era Davi?
⁴³ Assim entre o povo havia dissensão por causa dele.
⁴⁴ E alguns deles queriam prendê-lo, mas ninguém lançou mão dele.
⁴⁵ E os servidores foram ter com os principais sacerdotes e fariseus; e eles lhes perguntaram: Por que não o trouxestes?
⁴⁶ Responderam os servidores: Nunca homem algum falou assim como este homem.
⁴⁷ Responderam-lhes, pois, os fariseus: Também vós fostes enganados?
⁴⁸ Creu nele porventura algum dos principais ou dos fariseus?
⁴⁹ Mas esta multidão, que não sabe a lei, é maldita.
⁵⁰ Nicodemos, que era um deles (o que de noite fora ter com Jesus), disse-lhes:
⁵¹ Porventura condena a nossa lei um homem sem primeiro o ouvir e ter conhecimento do que faz?
⁵² Responderam eles, e disseram-lhe: És tu também da Galileia? Examina, e verás que da Galileia nenhum profeta surgiu.
⁵³ E cada um foi para sua casa. 
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que os oficiais não prenderam Jesus no templo?",
                        opcoes: [
                            { numero: 1, texto: "Porque tiveram medo da multidão", correta: false },
                            { numero: 2, texto: "Porque Ele fugiu rápido", correta: false },
                            { numero: 3, texto: "Nunca homem algum falou como este homem", correta: true },
                            { numero: 4, texto: "Porque não o encontraram", correta: false }
                        ],
                        explicacao: "João 7:46 - As palavras de Jesus impressionaram os guardas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus convidou quem tivesse sede a fazer?",
                        opcoes: [
                            { numero: 1, texto: "Vá ao poço de Jacó", correta: false },
                            { numero: 2, texto: "Venha a mim e beba", correta: true },
                            { numero: 3, texto: "Procure os sacerdotes", correta: false },
                            { numero: 4, texto: "Ore pedindo chuva", correta: false }
                        ],
                        explicacao: "João 7:37 - Jesus prometeu rios de água viva.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem defendeu Jesus no conselho, pedindo que o ouvissem antes de julgar?",
                        opcoes: [
                            { numero: 1, texto: "Pedro", correta: false },
                            { numero: 2, texto: "Pilatos", correta: false },
                            { numero: 3, texto: "João", correta: false },
                            { numero: 4, texto: "Nicodemos", correta: true }
                        ],
                        explicacao: "João 7:50-51 - Nicodemos pediu justiça legal para Jesus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        8: {
            titulo: "A Luz do Mundo e a Verdade",
            texto: `¹ Jesus, porém, foi para o Monte das Oliveiras.
² E pela manhã cedo tornou para o templo, e todo o povo vinha ter com ele, e, assentando-se, os ensinava.
³ E os escribas e fariseus trouxeram-lhe uma mulher apanhada em adultério;
⁴ E, pondo-a no meio, disseram-lhe: Mestre, esta mulher foi apanhada, no próprio ato, adulterando.
⁵ E na lei nos mandou Moisés que as tais sejam apedrejadas. Tu, pois, que dizes?
⁶ Isto diziam eles, tentando-o, para que tivessem de que o acusar. Mas Jesus, inclinando-se, escrevia com o dedo na terra.
⁷ E, como insistissem, perguntando-lhe, endireitou-se, e disse-lhes: Aquele que de entre vós está sem pecado seja o primeiro que atire pedra contra ela.
⁸ E, tornando a inclinar-se, escrevia na terra.
⁹ Porém ouvindo eles isto, acusados pela consciência, saíram um a um, a começar pelos mais velhos até aos últimos; ficou só Jesus e a mulher que estava no meio.
¹⁰ E, endireitando-se Jesus, e não vendo ninguém mais do que a mulher, disse-lhe: Mulher, onde estão aqueles teus acusadores? Ninguém te condenou?
¹¹ E ela disse: Ninguém, Senhor. E disse-lhe Jesus: Nem eu também te condeno; vai-te, e não peques mais.
¹² Falou-lhes, pois, Jesus outra vez, dizendo: Eu sou a luz do mundo; quem me segue não andará em trevas, mas terá a luz da vida.
¹³ Disseram-lhe, pois, os fariseus: Tu testificas de ti mesmo; o teu testemunho não é verdadeiro.
¹⁴ Respondeu Jesus, e disse-lhes: Ainda que eu testifico de mim mesmo, o meu testemunho é verdadeiro, porque sei de onde vim, e para onde vou; mas vós não sabeis de onde venho, nem para onde vou.
¹⁵ Vós julgais segundo a carne; eu a ninguém julgo.
¹⁶ E, se na verdade julgo, o meu juízo é verdadeiro, porque não sou eu só, mas eu e o Pai que me enviou.
¹⁷ E na vossa lei está também escrito que o testemunho de dois homens é verdadeiro.
¹⁸ Eu sou o que testifico de mim mesmo, e de mim testifica também o Pai que me enviou.
¹⁹ Disseram-lhe, pois: Onde está teu Pai? Jesus respondeu: Não me conheceis a mim, nem a meu Pai; se vós me conhecêsseis a mim, também conheceríeis a meu Pai.
²⁰ Estas palavras disse Jesus no lugar do tesouro, ensinando no templo, e ninguém o prendeu, porque ainda não era chegada a sua hora.
²¹ Disse-lhes, pois, Jesus outra vez: Eu retiro-me, e buscar-me-eis, e morrereis no vosso pecado. Para onde eu vou, não podeis vós vir.
²² Diziam, pois, os judeus: Porventura quererá matar-se a si mesmo, pois diz: Para onde eu vou não podeis vir?
²³ E dizia-lhes: Vós sois de baixo, eu sou de cima; vós sois deste mundo, eu não sou deste mundo.
²⁴ Por isso vos disse que morrereis em vossos pecados, porque se não crerdes que eu sou, morrereis em vossos pecados.
²⁵ Disseram-lhe, pois: Quem és tu? Jesus lhes disse: Isso mesmo que já desde o princípio vos disse.
²⁶ Muito tenho que dizer e julgar de vós, mas aquele que me enviou é verdadeiro; e o que dele tenho ouvido, isso falo ao mundo.
²⁷ Mas não entenderam que ele lhes falava do Pai.
²⁸ Disse-lhes, pois, Jesus: Quando levantardes o Filho do homem, então conhecereis quem eu sou, e que nada faço por mim mesmo; mas estas coisas falo como meu Pai me ensinou.
²⁹ E aquele que me enviou está comigo. O Pai não me tem deixado só, porque eu faço sempre o que lhe agrada.
³⁰ Dizendo ele estas coisas, muitos creram nele.
³¹ Jesus dizia, pois, aos judeus que criam nele: Se vós permanecerdes na minha palavra, verdadeiramente sereis meus discípulos;
³² E conhecereis a verdade, e a verdade vos libertará.
³³ Responderam-lhe: Somos descendência de Abraão, e nunca servimos a ninguém; como dizes tu: Sereis livres?
³⁴ Respondeu-lhes Jesus: Em verdade, em verdade vos digo que todo aquele que comete pecado é servo do pecado.
³⁵ Ora o servo não fica para sempre em casa; o Filho fica para sempre.
³⁶ Se, pois, o Filho vos libertar, verdadeiramente sereis livres.
³⁷ Bem sei que sois descendência de Abraão; contudo, procurais matar-me, porque a minha palavra não entra em vós.
³⁸ Eu falo do que vi junto de meu Pai, e vós fazeis o que também vistes junto de vosso pai.
³⁹ Responderam, e disseram-lhe: Nosso pai é Abraão. Jesus disse-lhes: Se fôsseis filhos de Abraão, faríeis as obras de Abraão.
⁴⁰ Mas agora procurais matar-me, a mim, homem que vos tem dito a verdade que de Deus tem ouvido; Abraão não fez isto.
⁴¹ Vós fazeis as obras de vosso pai. Disseram-lhe, pois: Nós não somos nascidos de fornicação; temos um Pai, que é Deus.
⁴² Disse-lhes, pois, Jesus: Se Deus fosse o vosso Pai, certamente me amaríeis, pois que eu saí, e vim de Deus; não vim de mim mesmo, mas ele me enviou.
⁴³ Por que não entendeis a minha linguagem? Por não poderdes ouvir a minha palavra.
⁴⁴ Vós tendes por pai ao diabo, e quereis satisfazer os desejos de vosso pai. Ele foi homicida desde o princípio, e não se firmou na verdade, porque não há verdade nele. Quando ele profere mentira, fala do que lhe é próprio, porque é mentiroso, e pai da mentira.
⁴⁵ Mas, porque vos digo a verdade, não me credes.
⁴⁶ Quem dentre vós me convence de pecado? E se vos digo a verdade, por que não me credes?
⁴⁷ Quem é de Deus escuta as palavras de Deus; por isso vós não as escutais, porque não sois de Deus.
⁴⁸ Responderam, pois, os judeus, e disseram-lhe: Não dizemos nós bem que és samaritano, e que tens demônio?
⁴⁹ Jesus respondeu: Eu não tenho demônio, antes honro a meu Pai, e vós me desonrais.
⁵⁰ Eu, porém, não busco a minha glória; há quem a busque, e julgue.
⁵¹ Em verdade, em verdade vos digo que, se alguém guardar a minha palavra, nunca verá a morte.
⁵² Disseram-lhe, pois, os judeus: Agora conhecemos que tens demônio. Morreu Abraão e os profetas; e tu dizes: Se alguém guardar a minha palavra, nunca provará a morte.
⁵³ És tu maior do que o nosso pai Abraão, que morreu? E também os profetas morreram. Quem te fazes tu ser?
⁵⁴ Jesus respondeu: Se eu me glorifico a mim mesmo, a minha glória não é nada; quem me glorifica é meu Pai, o qual dizeis que é vosso Deus.
⁵⁵ E vós não o conheceis, mas eu conheço-o. E, se disser que o não conheço, serei mentiroso como vós; mas conheço-o e guardo a sua palavra.
⁵⁶ Abraão, vosso pai, exultou por ver o meu dia, e viu-o, e alegrou-se.
⁵⁷ Disseram-lhe, pois, os judeus: Ainda não tens cinquenta anos, e viste Abraão?
⁵⁸ Disse-lhes Jesus: Em verdade, em verdade vos digo que antes que Abraão existisse, eu sou.
⁵⁹ Então pegaram em pedras para lhe atirarem; mas Jesus ocultou-se, e saiu do templo, passando pelo meio deles, e assim se retirou. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Jesus disse à mulher adúltera após todos irem embora?",
                        opcoes: [
                            { numero: 1, texto: "Vá e não peques mais", correta: true },
                            { numero: 2, texto: "Traga uma oferta", correta: false },
                            { numero: 3, texto: "Você deve ser julgada", correta: false },
                            { numero: 4, texto: "Fale com os fariseus", correta: false }
                        ],
                        explicacao: "João 8:11 - Jesus perdoou e ordenou uma mudança de vida.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontece com quem conhece a verdade, segundo Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Ficará rico", correta: false },
                            { numero: 2, texto: "Será perseguido", correta: false },
                            { numero: 3, texto: "A verdade o libertará", correta: true },
                            { numero: 4, texto: "Viverá para sempre na terra", correta: false }
                        ],
                        explicacao: "João 8:32 - A liberdade real vem através do conhecimento da verdade.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem Jesus chamou de 'pai da mentira'?",
                        opcoes: [
                            { numero: 1, texto: "Herodes", correta: false },
                            { numero: 2, texto: "Pilatos", correta: false },
                            { numero: 3, texto: "Os discípulos", correta: false },
                            { numero: 4, texto: "O Diabo", correta: true }
                        ],
                        explicacao: "João 8:44 - A mentira é a natureza própria do diabo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        9: {
            titulo: "O Cego de Nascença",
            texto: `¹ E, passando Jesus, viu um homem cego de nascença.
² E os seus discípulos lhe perguntaram, dizendo: Rabi, quem pecou, este ou seus pais, para que nascesse cego?
³ Jesus respondeu: Nem ele pecou nem seus pais; mas foi assim para que se manifestem nele as obras de Deus.
⁴ Convém que eu faça as obras daquele que me enviou, enquanto é dia; a noite vem, quando ninguém pode trabalhar.
⁵ Enquanto estou no mundo, sou a luz do mundo.
⁶ Tendo dito isto, cuspiu na terra, e com a saliva fez lodo, e untou com o lodo os olhos do cego.
⁷ E disse-lhe: Vai, lava-te no tanque de Siloé (que significa o Enviado). Foi, pois, e lavou-se, e voltou vendo.
⁸ Então os vizinhos, e aqueles que dantes tinham visto que era cego, diziam: Não é este aquele que estava assentado e mendigava?
⁹ Uns diziam: É este. E outros: Parece-se com ele. Ele dizia: Sou eu.
¹⁰ Diziam-lhe, pois: Como se te abriram os olhos?
¹¹ Ele respondeu, e disse: O homem, chamado Jesus, fez lodo, e untou-me os olhos, e disse-me: Vai ao tanque de Siloé, e lava-te. Então fui, e lavei-me, e vi.
¹² Disseram-lhe, pois: Onde está ele? Respondeu: Não sei.
¹³ Levaram, pois, aos fariseus o que dantes era cego.
¹⁴ E era sábado quando Jesus fez o lodo e lhe abriu os olhos.
¹⁵ Tornaram, pois, também os fariseus a perguntar-lhe como vira, e ele lhes disse: Pôs-me lodo sobre os olhos, lavei-me, e vejo.
¹⁶ Então alguns dos fariseus diziam: Este homem não é de Deus, pois não guarda o sábado. Diziam outros: Como pode um homem pecador fazer tais sinais? E havia dissensão entre eles.
¹⁷ Tornaram, pois, a dizer ao cego: Tu, que dizes daquele que te abriu os olhos? E ele respondeu: Que é profeta.
¹⁸ Os judeus, porém, não creram, a seu respeito, que tivesse sido cego, e que agora visse, enquanto não chamaram os pais do que agora via.
¹⁹ E perguntaram-lhes, dizendo: É este o vosso filho, que vós dizeis ter nascido cego? Como, pois, vê agora?
²⁰ Seus pais lhes responderam, e disseram: Sabemos que este é o nosso filho, e que nasceu cego;
²¹ Mas como agora vê, não sabemos; ou quem lhe tenha aberto os olhos, não sabemos. Tem idade, perguntai-lho a ele mesmo; e ele falará por si mesmo.
²² Seus pais disseram isto, porque temiam os judeus. Porquanto já os judeus tinham resolvido que, se alguém confessasse ser ele o Cristo, fosse expulso da sinagoga.
²³ Por isso é que seus pais disseram: Tem idade, perguntai-lho a ele mesmo.
²⁴ Chamaram, pois, pela segunda vez o homem que tinha sido cego, e disseram-lhe: Dá glória a Deus; nós sabemos que esse homem é pecador.
²⁵ Respondeu ele pois, e disse: Se é pecador, não sei; uma coisa sei, é que, havendo eu sido cego, agora vejo.
²⁶ E tornaram a dizer-lhe: Que te fez ele? Como te abriu os olhos?
²⁷ Respondeu-lhes: Já vo-lo disse, e não ouvistes; para que o quereis tornar a ouvir? Quereis vós porventura fazer-vos também seus discípulos?
²⁸ Então o injuriaram, e disseram: Discípulo dele sejas tu; nós, porém, somos discípulos de Moisés.
²⁹ Nós bem sabemos que Deus falou a Moisés, mas este não sabemos de onde é.
³⁰ O homem respondeu, e disse-lhes: Nisto, pois, está a maravilha, que vós não saibais de onde ele é, e contudo me abrisse os olhos.
³¹ Ora, nós sabemos que Deus não ouve a pecadores; mas, se alguém é temente a Deus, e faz a sua vontade, a esse ouve.
³² Desde o princípio do mundo nunca se ouviu que alguém abrisse os olhos a um cego de nascença.
³³ Se este não fosse de Deus, nada poderia fazer.
³⁴ Responderam eles, e disseram-lhe: Tu és nascido todo em pecados, e nos ensinas a nós? E expulsaram-no.
³⁵ Jesus ouviu que o tinham expulsado e, encontrando-o, disse-lhe: Crês tu no Filho de Deus?
³⁶ Ele respondeu, e disse: Quem é ele, Senhor, para que nele creia?
³⁷ E Jesus lhe disse: Tu já o tens visto, e é aquele que fala contigo.
³⁸ Ele disse: Creio, Senhor. E o adorou.
³⁹ E disse-lhe Jesus: Eu vim a este mundo para juízo, a fim de que os que não veem vejam, e os que veem sejam cegos.
⁴⁰ E aqueles dos fariseus, que estavam com ele, ouvindo isto, disseram-lhe: Também nós somos cegos?
⁴¹ Disse-lhes Jesus: Se fôsseis cegos, não teríeis pecado; mas como agora dizeis: Vemos; por isso o vosso pecado permanece. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Jesus usou para ungir os olhos do cego?",
                        opcoes: [
                            { numero: 1, texto: "Lodo feito de saliva e terra", correta: true },
                            { numero: 2, texto: "Azeite ungido", correta: false },
                            { numero: 3, texto: "Um pano com vinagre", correta: false },
                            { numero: 4, texto: "Água da chuva", correta: false }
                        ],
                        explicacao: "João 9:6 - Ele untou os olhos do cego com o lodo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Em qual tanque o cego foi mandado se lavar?",
                        opcoes: [
                            { numero: 1, texto: "Tanque de Betesda", correta: false },
                            { numero: 2, texto: "Tanque de Siloé", correta: true },
                            { numero: 3, texto: "Tanque de Salomão", correta: false },
                            { numero: 4, texto: "Tanque de Gibeão", correta: false }
                        ],
                        explicacao: "João 9:7 - Siloé significa 'Enviado'.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o cego respondeu aos fariseus quando questionado sobre Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Ele é um pecador", correta: false },
                            { numero: 2, texto: "Não sei quem Ele é", correta: false },
                            { numero: 3, texto: "Uma coisa sei: eu era cego e agora vejo", correta: true },
                            { numero: 4, texto: "Ele é um soldado romano", correta: false }
                        ],
                        explicacao: "João 9:25 - O testemunho dele foi baseado na experiência pessoal.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        10: {
            titulo: "O Bom Pastor",
            texto: `¹ Na verdade, na verdade vos digo que aquele que não entra pela porta no curral das ovelhas, mas sobe por outra parte, é ladrão e salteador.
² Aquele, porém, que entra pela porta é o pastor das ovelhas.
³ A este o porteiro abre, e as ovelhas ouvem a sua voz, e chama pelo nome às suas ovelhas, e as traz para fora.
⁴ E, quando tira para fora as suas ovelhas, vai adiante delas, e as ovelhas o seguem, porque conhecem a sua voz.
⁵ Mas de modo nenhum seguirão o estranho, antes fugirão dele, porque não conhecem a voz dos estranhos.
⁶ Jesus disse-lhes esta parábola; mas eles não entenderam o que era que lhes dizia.
⁷ Tornou, pois, Jesus a dizer-lhes: Em verdade, em verdade vos digo que eu sou a porta das ovelhas.
⁸ Todos quantos vieram antes de mim são ladrões e salteadores; mas as ovelhas não os ouviram.
⁹ Eu sou a porta; se alguém entrar por mim, salvar-se-á, e entrará, e sairá, e achará pastagens.
¹⁰ O ladrão não vem senão a roubar, a matar, e a destruir; eu vim para que tenham vida, e a tenham com abundância.
¹¹ Eu sou o bom Pastor; o bom Pastor dá a sua vida pelas ovelhas.
¹² Mas o mercenário, e o que não é pastor, de quem não são as ovelhas, vê vir o lobo, e deixa as ovelhas, e foge; e o lobo as arrebata e dispersa as ovelhas.
¹³ Ora, o mercenário foge, porque é mercenário, e não tem cuidado das ovelhas.
¹⁴ Eu sou o bom Pastor, e conheço as minhas ovelhas, e das minhas sou conhecido.
¹⁵ Assim como o Pai me conhece a mim, também eu conheço o Pai, e dou a minha vida pelas ovelhas.
¹⁶ Ainda tenho outras ovelhas que não são deste aprisco; também me convém agregar estas, e elas ouvirão a minha voz, e haverá um rebanho e um Pastor.
¹⁷ Por isto o Pai me ama, porque dou a minha vida para tornar a tomá-la.
¹⁸ Ninguém ma tira de mim, mas eu de mim mesmo a dou; tenho poder para a dar, e poder para tornar a tomá-la. Este mandamento recebi de meu Pai.
¹⁹ Tornou, pois, a haver divisão entre os judeus por causa destas palavras.
²⁰ E muitos deles diziam: Tem demônio, e está fora de si; por que o ouvis?
²¹ Diziam outros: Estas palavras não são de endemoninhado. Pode, porventura, um demônio abrir os olhos aos cegos?
²² E em Jerusalém havia a festa da dedicação, e era inverno.
²³ E Jesus andava passeando no templo, no alpendre de Salomão.
²⁴ Rodearam-no, pois, os judeus, e disseram-lhe: Até quando terás a nossa alma suspensa? Se tu és o Cristo, dize-nos abertamente.
²⁵ Respondeu-lhes Jesus: Já vo-lo tenho dito, e não o credes. As obras que eu faço, em nome de meu Pai, essas testificam de mim.
²⁶ Mas vós não credes porque não sois das minhas ovelhas, como já vo-lo tenho dito.
²⁷ As minhas ovelhas ouvem a minha voz, e eu conheço-as, e elas me seguem;
²⁸ E dou-lhes a vida eterna, e nunca hão de perecer, e ninguém as arrebatará da minha mão.
²⁹ Meu Pai, que mas deu, é maior do que todos; e ninguém pode arrebatá-las da mão de meu Pai.
³⁰ Eu e o Pai somos um.
³¹ Os judeus pegaram então outra vez em pedras para o apedrejar.
³² Respondeu-lhes Jesus: Tenho-vos mostrado muitas obras boas procedentes de meu Pai; por qual destas obras me apedrejais?
³³ Os judeus responderam, dizendo-lhe: Não te apedrejamos por alguma obra boa, mas pela blasfêmia e porque, sendo tu homem, te fazes Deus a ti mesmo.
³⁴ Respondeu-lhes Jesus: Não está escrito na vossa lei: Eu disse: Sois deuses?
³⁵ Pois, se chamou-os deuses àqueles a quem a palavra de Deus foi dirigida, e a Escritura não pode ser anulada,
³⁶ Àquele a quem o Pai santificou, e enviou ao mundo, vós dizeis: Blasfemas, porque disse: Sou Filho de Deus?
³⁷ Se não faço as obras de meu Pai, não me acrediteis.
³⁸ Mas, se as faço, e não credes em mim, crede nas obras; para que conheçais e acrediteis que o Pai está em mim e eu nele.
³⁹ Procuravam, pois, prendê-lo outra vez, mas ele escapou-se de suas mãos,
⁴⁰ E retirou-se outra vez para além do Jordão, para o lugar onde João tinha primeiramente batizado; e ali ficou.
⁴¹ E muitos iam ter com ele, e diziam: Na verdade João não fez sinal algum, mas tudo quanto João disse deste era verdade.
⁴² E muitos ali creram nele. 
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que as ovelhas conhecem do seu pastor?",
                        opcoes: [
                            { numero: 1, texto: "O seu rosto", correta: false },
                            { numero: 2, texto: "As suas roupas", correta: false },
                            { numero: 3, texto: "A sua voz", correta: true },
                            { numero: 4, texto: "O seu cajado", correta: false }
                        ],
                        explicacao: "João 10:4 - Elas o seguem porque conhecem a sua voz.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Jesus disse que o ladrão vem apenas para quê?",
                        opcoes: [
                            { numero: 1, texto: "Roubar, matar e destruir", correta: true },
                            { numero: 2, texto: "Dormir no curral", correta: false },
                            { numero: 3, texto: "Levar a lã das ovelhas", correta: false },
                            { numero: 4, texto: "Conversar com o pastor", correta: false }
                        ],
                        explicacao: "João 10:10 - O propósito do inimigo é a destruição.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem Jesus disse que não cuida das ovelhas quando vê o lobo?",
                        opcoes: [
                            { numero: 1, texto: "O dono das ovelhas", correta: false },
                            { numero: 2, texto: "O mercenário (assalariado)", correta: true },
                            { numero: 3, texto: "O filho do pastor", correta: false },
                            { numero: 4, texto: "Os anjos", correta: false }
                        ],
                        explicacao: "João 10:12 - O mercenário foge porque não tem compromisso com as ovelhas.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        11: {
            titulo: "A Morte e Ressurreição de Lázaro",
            texto: ` ¹ Estava, porém, enfermo um certo Lázaro, de Betânia, aldeia de Maria e de sua irmã Marta.
² E Maria era aquela que tinha ungido o Senhor com unguento, e lhe tinha enxugado os pés com os seus cabelos, cujo irmão Lázaro estava enfermo.
³ Mandaram-lhe, pois, suas irmãs dizer: Senhor, eis que está enfermo aquele que tu amas.
⁴ E Jesus, ouvindo isto, disse: Esta enfermidade não é para morte, mas para glória de Deus, para que o Filho de Deus seja glorificado por ela.
⁵ Ora, Jesus amava a Marta, e a sua irmã, e a Lázaro.
⁶ Quando ouviu, pois, que estava enfermo, ficou ainda dois dias no lugar onde estava.
⁷ Então, depois disto, disse aos seus discípulos: Vamos outra vez para a Judeia.
⁸ Disseram-lhe os discípulos: Rabi, ainda agora os judeus procuravam apedrejar-te, e tornas para lá?
⁹ Jesus respondeu: Não há doze horas no dia? Se alguém andar de dia, não tropeça, porque vê a luz deste mundo;
¹⁰ Mas, se andar de noite, tropeça, porque nele não há luz.
¹¹ Assim falou; e depois disso disse-lhes: Lázaro, o nosso amigo, dorme, mas vou despertá-lo do sono.
¹² Disseram, pois, os seus discípulos: Senhor, se dorme, estará salvo.
¹³ Mas Jesus dizia isto da sua morte; eles, porém, cuidavam que falava do repouso do sono.
¹⁴ Então pois, Jesus disse-lhes claramente: Lázaro está morto;
¹⁵ E folgo, por amor de vós, de que eu lá não estivesse, para que acrediteis; mas vamos ter com ele.
¹⁶ Disse, pois, Tomé, chamado Dídimo, aos condiscípulos: Vamos nós também, para morrermos com ele.
¹⁷ Chegando, pois, Jesus, achou que já havia quatro dias que estava na sepultura.
¹⁸ (Ora Betânia distava de Jerusalém quase quinze estádios.)
¹⁹ E muitos dos judeus tinham ido consolar a Marta e a Maria, acerca de seu irmão.
²⁰ Ouvindo, pois, Marta que Jesus vinha, saiu-lhe ao encontro; Maria, porém, ficou assentada em casa.
²¹ Disse, pois, Marta a Jesus: Senhor, se tu estivesses aqui, meu irmão não teria morrido.
²² Mas também agora sei que tudo quanto pedires a Deus, Deus to concederá.
²³ Disse-lhe Jesus: Teu irmão há de ressuscitar.
²⁴ Disse-lhe Marta: Eu sei que há de ressuscitar na ressurreição do último dia.
²⁵ Disse-lhe Jesus: Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá;
²⁶ E todo aquele que vive, e crê em mim, nunca irá morrer. Crês tu isto?
²⁷ Disse-lhe ela: Sim, Senhor, creio que tu és o Cristo, o Filho de Deus, que havia de vir ao mundo.
²⁸ E, dito isto, partiu, e chamou em segredo a Maria, sua irmã, dizendo: O Mestre está cá, e chama-te.
²⁹ Ela, ouvindo isto, levantou-se logo, e foi ter com ele.
³⁰ (Pois, Jesus ainda não tinha chegado à aldeia, mas estava no lugar onde Marta o encontrara.)
³¹ Vendo, pois, os judeus, que estavam com ela em casa e a consolavam, que Maria apressadamente se levantara e saíra, seguiram-na, dizendo: Vai ao sepulcro para chorar ali.
³² Tendo, pois, Maria chegado aonde Jesus estava, e vendo-o, lançou-se aos seus pés, dizendo-lhe: Senhor, se tu estivesses aqui, meu irmão não teria morrido.
³³ Jesus pois, quando a viu chorar, e também chorando os judeus que com ela vinham, moveu-se muito em espírito, e perturbou-se.
³⁴ E disse: Onde o pusestes? Disseram-lhe: Senhor, vem, e vê.
³⁵ Jesus chorou.
³⁶ Disseram, pois, os judeus: Vede como o amava.
³⁷ E alguns deles disseram: Não podia ele, que abriu os olhos ao cego, fazer também com que este não morresse?
³⁸ Jesus, pois, movendo-se outra vez muito em si mesmo, veio ao sepulcro; e era uma caverna, e tinha uma pedra posta sobre ela.
³⁹ Disse Jesus: Tirai a pedra. Marta, irmã do defunto, disse-lhe: Senhor, já cheira mal, porque é já de quatro dias.
⁴⁰ Disse-lhe Jesus: Não te tenho dito que, se creres, verás a glória de Deus?
⁴¹ Tiraram, pois, a pedra de onde o defunto jazia. E Jesus, levantando os olhos para cima, disse: Pai, graças te dou, por me haveres ouvido.
⁴² Eu bem sei que sempre me ouves, mas eu disse isto por causa da multidão que está em redor, para que creiam que tu me enviaste.
⁴³ E, tendo dito isto, clamou com grande voz: Lázaro, sai para fora.
⁴⁴ E o que fora defunto saiu, tendo as mãos e os pés ligados com faixas, e o seu rosto envolto num lenço. Disse-lhes Jesus: Desligai-o, e deixai-o ir.
⁴⁵ Muitos, pois, dentre os judeus que tinham vindo a Maria, e que tinham visto o que Jesus fizera, creram nele.
⁴⁶ Mas alguns deles foram ter com os fariseus, e disseram-lhes o que Jesus tinha feito.
⁴⁷ Depois os principais sacerdotes e os fariseus formaram conselho, e diziam: Que faremos? Porquanto este homem faz muitos sinais.
⁴⁸ Se o deixamos assim, todos crerão nele, e virão os romanos, e tirar-nos-ão o nosso lugar e a nação.
⁴⁹ E Caifás, um deles que era sumo sacerdote naquele ano, lhes disse: Vós nada sabeis,
⁵⁰ Nem considerais que nos convém que um homem morra pelo povo, e que não pereça toda a nação.
⁵¹ Ora ele não disse isto de si mesmo, mas, sendo o sumo sacerdote naquele ano, profetizou que Jesus devia morrer pela nação.
⁵² E não somente pela nação, mas também para reunir em um corpo os filhos de Deus que andavam dispersos.
⁵³ Desde aquele dia, pois, consultavam-se para o matarem.
⁵⁴ Jesus, pois, já não andava manifestamente entre os judeus, mas retirou-se dali para a terra junto do deserto, para uma cidade chamada Efraim; e ali ficou com os seus discípulos.
⁵⁵ E estava próxima a páscoa dos judeus, e muitos daquela região subiram a Jerusalém antes da páscoa para se purificarem.
⁵⁶ Buscavam, pois, a Jesus, e diziam uns aos outros, estando no templo: Que vos parece? Não virá à festa?
⁵⁷ Ora, os principais sacerdotes e os fariseus tinham dado ordem para que, se alguém soubesse onde ele estava, o denunciasse, para o prenderem. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era o nome das duas irmãs de Lázaro?",
                        opcoes: [
                            { numero: 1, texto: "Maria e Madalena", correta: false },
                            { numero: 2, texto: "Marta e Joana", correta: false },
                            { numero: 3, texto: "Maria e Marta", correta: true },
                            { numero: 4, texto: "Marta e Elizabete", correta: false }
                        ],
                        explicacao: "João 11:1 - Elas moravam na aldeia de Betânia.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual foi a frase que Jesus disse antes de chamar Lázaro para fora?",
                        opcoes: [
                            { numero: 1, texto: "Eu sou a ressurreição e a vida", correta: true },
                            { numero: 2, texto: "Tudo está consumado", correta: false },
                            { numero: 3, texto: "Lázaro, acorde do sono", correta: false },
                            { numero: 4, texto: "Onde vocês o puseram?", correta: false }
                        ],
                        explicacao: "João 11:25 - Jesus mostra sua autoridade sobre a morte.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus fez ao ver Maria e os judeus chorando?",
                        opcoes: [
                            { numero: 1, texto: "Ele sorriu", correta: false },
                            { numero: 2, texto: "Jesus chorou", correta: true },
                            { numero: 3, texto: "Ele ficou com raiva", correta: false },
                            { numero: 4, texto: "Ele foi embora", correta: false }
                        ],
                        explicacao: "João 11:35 - É o versículo mais curto, mostrando a humanidade de Jesus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        12: {
            titulo: "A Unção em Betânia",
            texto: `¹ Foi, pois, Jesus seis dias antes da páscoa a Betânia, onde estava Lázaro, o que falecera, e a quem ressuscitara dentre os mortos.
² Fizeram-lhe, pois, ali uma ceia, e Marta servia, e Lázaro era um dos que estavam à mesa com ele.
³ Então Maria, tomando um arrátel de unguento de nardo puro, de muito preço, ungiu os pés de Jesus, e enxugou-lhe os pés com os seus cabelos; e encheu-se a casa do cheiro do unguento.
⁴ Então, um dos seus discípulos, Judas Iscariotes, filho de Simão, o que havia de traí-lo, disse:
⁵ Por que não se vendeu este unguento por trezentos dinheiros e não se deu aos pobres?
⁶ Ora, ele disse isto, não pelo cuidado que tivesse dos pobres, mas porque era ladrão e tinha a bolsa, e tirava o que ali se lançava.
⁷ Disse, pois, Jesus: Deixai-a; para o dia da minha sepultura guardou isto;
⁸ Porque os pobres sempre os tendes convosco, mas a mim nem sempre me tendes.
⁹ E muita gente dos judeus soube que ele estava ali; e foram, não só por causa de Jesus, mas também para ver a Lázaro, a quem ressuscitara dentre os mortos.
¹⁰ E os principais sacerdotes tomaram deliberação para matar também a Lázaro;
¹¹ Porque muitos dos judeus, por causa dele, iam e criam em Jesus.
¹² No dia seguinte, ouvindo uma grande multidão, que viera à festa, que Jesus vinha a Jerusalém,
¹³ Tomaram ramos de palmeiras, e saíram-lhe ao encontro, e clamavam: Hosana! Bendito o Rei de Israel que vem em nome do Senhor.
¹⁴ E achou Jesus um jumentinho, e assentou-se sobre ele, como está escrito:
¹⁵ Não temas, ó filha de Sião; eis que o teu Rei vem assentado sobre o filho de uma jumenta.
¹⁶ Os seus discípulos, porém, não entenderam isto no princípio; mas, quando Jesus foi glorificado, então se lembraram de que isto estava escrito dele, e que isto lhe fizeram.
¹⁷ A multidão, pois, que estava com ele quando Lázaro foi chamado da sepultura, testificava que ele o ressuscitara dentre os mortos.
¹⁸ Por isso também a multidão lhe saiu ao encontro, porque tinham ouvido que ele fizera este sinal.
¹⁹ Disseram, pois, os fariseus entre si: Vedes que nada aproveitais? Eis que toda a gente vai após ele.
²⁰ Ora, havia alguns gregos, entre os que tinham subido a adorar no dia da festa.
²¹ Estes, pois, dirigiram-se a Filipe, que era de Betsaida da Galileia, e rogaram-lhe, dizendo: Senhor, queríamos ver a Jesus.
²² Filipe foi dizê-lo a André, e então André e Filipe o disseram a Jesus.
²³ E Jesus lhes respondeu, dizendo: É chegada a hora em que o Filho do homem há de ser glorificado.
²⁴ Na verdade, na verdade vos digo que, se o grão de trigo, caindo na terra, não morrer, fica ele só; mas se morrer, dá muito fruto.
²⁵ Quem ama a sua vida perdê-la-á, e quem neste mundo odeia a sua vida, guardá-la-á para a vida eterna.
²⁶ Se alguém me serve, siga-me, e onde eu estiver, ali estará também o meu servo. E, se alguém me servir, meu Pai o honrará.
²⁷ Agora a minha alma está perturbada; e que direi eu? Pai, salva-me desta hora; mas para isto vim a esta hora.
²⁸ Pai, glorifica o teu nome. Então veio uma voz do céu que dizia: Já o tenho glorificado, e outra vez o glorificarei.
²⁹ Ora, a multidão que ali estava, e que a ouvira, dizia que havia sido um trovão. Outros diziam: Um anjo lhe falou.
³⁰ Respondeu Jesus, e disse: Não veio esta voz por amor de mim, mas por amor de vós.
³¹ Agora é o juízo deste mundo; agora será expulso o príncipe deste mundo.
³² E eu, quando for levantado da terra, todos atrairei a mim.
³³ E dizia isto, significando de que morte havia de morrer.
³⁴ Respondeu-lhe a multidão: Nós temos ouvido da lei, que o Cristo permanece para sempre; e como dizes tu que convém que o Filho do homem seja levantado? Quem é esse Filho do homem?
³⁵ Disse-lhes, pois, Jesus: A luz ainda está convosco por um pouco de tempo. Andai enquanto tendes luz, para que as trevas não vos apanhem; pois quem anda nas trevas não sabe para onde vai.
³⁶ Enquanto tendes luz, crede na luz, para que sejais filhos da luz. Estas coisas disse Jesus e, retirando-se, ocultou-se deles.
³⁷ E, ainda que tinha feito tantos sinais diante deles, não criam nele;
³⁸ Para que se cumprisse a palavra do profeta Isaías, que diz: Senhor, quem creu na nossa pregação? E a quem foi revelado o braço do Senhor?
³⁹ Por isso não podiam crer, então Isaías disse outra vez:
⁴⁰ Cegou-lhes os olhos, e endureceu-lhes o coração, a fim de que não vejam com os olhos, e compreendam no coração, e se convertam, e eu os cure.
⁴¹ Isaías disse isto quando viu a sua glória e falou dele.
⁴² Apesar de tudo, até muitos dos principais creram nele; mas não o confessavam por causa dos fariseus, para não serem expulsos da sinagoga.
⁴³ Porque amavam mais a glória dos homens do que a glória de Deus.
⁴⁴ E Jesus clamou, e disse: Quem crê em mim, crê, não em mim, mas naquele que me enviou.
⁴⁵ E quem me vê a mim, vê aquele que me enviou.
⁴⁶ Eu sou a luz que vim ao mundo, para que todo aquele que crê em mim não permaneça nas trevas.
⁴⁷ E se alguém ouvir as minhas palavras, e não crer, eu não o julgo; porque eu vim, não para julgar o mundo, mas para salvar o mundo.
⁴⁸ Quem me rejeitar a mim, e não receber as minhas palavras, já tem quem o julgue; a palavra que tenho pregado, essa o há de julgar no último dia.
⁴⁹ Porque eu não tenho falado de mim mesmo; mas o Pai, que me enviou, ele me deu mandamento sobre o que hei de dizer e sobre o que hei de falar.
⁵⁰ E sei que o seu mandamento é a vida eterna. Portanto, o que eu falo, falo-o como o Pai me tem dito. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem reclamou do desperdício do perfume caro usado em Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Pedro", correta: false },
                            { numero: 2, texto: "Judas Iscariotes", correta: true },
                            { numero: 3, texto: "Lázaro", correta: false },
                            { numero: 4, texto: "Caifás", correta: false }
                        ],
                        explicacao: "João 12:4-5 - Judas queria que o valor fosse para o dinheiro que ele roubava.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A qual animal Jesus montou ao entrar em Jerusalém?",
                        opcoes: [
                            { numero: 1, texto: "Um jumentinho", correta: true },
                            { numero: 2, texto: "Um cavalo branco", correta: false },
                            { numero: 3, texto: "Um camelo", correta: false },
                            { numero: 4, texto: "Um cordeiro", correta: false }
                        ],
                        explicacao: "João 12:14-15 - Cumprindo a profecia de Zacarias.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Jesus comparou sua morte a qual elemento da natureza?",
                        opcoes: [
                            { numero: 1, texto: "Uma folha que cai", correta: false },
                            { numero: 2, texto: "Um grão de trigo que morre para dar fruto", correta: true },
                            { numero: 3, texto: "Uma pedra que rola", correta: false },
                            { numero: 4, texto: "Uma nuvem que passa", correta: false }
                        ],
                        explicacao: "João 12:24 - A morte de Jesus geraria vida para muitos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        13: {
            titulo: "O Lava-pés e a Traição",
            texto: ` ¹ Ora, antes da festa da páscoa, sabendo Jesus que já era chegada a sua hora de passar deste mundo para o Pai, como havia amado os seus, que estavam no mundo, amou-os até o fim.
² E, acabada a ceia, tendo já o diabo posto no coração de Judas Iscariotes, filho de Simão, que o traísse,
³ Jesus, sabendo que o Pai tinha depositado nas suas mãos todas as coisas, e que havia saído de Deus e ia para Deus,
⁴ Levantou-se da ceia, tirou as vestes, e, tomando uma toalha, cingiu-se.
⁵ Depois deitou água numa bacia, e começou a lavar os pés aos discípulos, e a enxugar-lhos com a toalha com que estava cingido.
⁶ Aproximou-se, pois, de Simão Pedro, que lhe disse: Senhor, tu lavas-me os pés a mim?
⁷ Respondeu Jesus, e disse-lhe: O que eu faço não o sabes tu agora, mas tu o saberás depois.
⁸ Disse-lhe Pedro: Nunca me lavarás os pés. Respondeu-lhe Jesus: Se eu te não lavar, não tens parte comigo.
⁹ Disse-lhe Simão Pedro: Senhor, não só os meus pés, mas também as mãos e a cabeça.
¹⁰ Disse-lhe Jesus: Aquele que está lavado não necessita de lavar senão os pés, pois no mais todo está limpo. Ora vós estais limpos, mas não todos.
¹¹ Porque bem sabia ele quem o havia de trair; por isso disse: Nem todos estais limpos.
¹² Então, depois que lhes lavou os pés, e tomou as suas vestes, e se assentou outra vez à mesa, disse-lhes: Entendeis o que vos tenho feito?
¹³ Vós me chamais Mestre e Senhor, e dizeis bem, porque eu o sou.
¹⁴ Ora, se eu, Senhor e Mestre, vos lavei os pés, vós deveis também lavar os pés uns aos outros.
¹⁵ Porque eu vos dei o exemplo, para que, como eu vos fiz, façais vós também.
¹⁶ Na verdade, na verdade vos digo que não é o servo maior do que o seu senhor, nem o enviado maior do que aquele que o enviou.
¹⁷ Se sabeis estas coisas, bem-aventurados sois se as fizerdes.
¹⁸ Não falo de todos vós; eu bem sei os que tenho escolhido; mas para que se cumpra a Escritura: O que come o pão comigo, levantou contra mim o seu calcanhar.
¹⁹ Desde agora vo-lo digo, antes que aconteça, para que, quando acontecer, acrediteis que eu sou.
²⁰ Na verdade, na verdade vos digo: Se alguém receber o que eu enviar, me recebe a mim, e quem me recebe a mim, recebe aquele que me enviou.
²¹ Tendo Jesus dito isto, turbou-se em espírito, e afirmou, dizendo: Na verdade, na verdade vos digo que um de vós me há de trair.
²² Então os discípulos olhavam uns para os outros, duvidando de quem ele falava.
²³ Ora, um de seus discípulos, aquele a quem Jesus amava, estava reclinado no seio de Jesus.
²⁴ Então Simão Pedro fez sinal a este, para que perguntasse quem era aquele de quem ele falava.
²⁵ E, inclinando-se ele sobre o peito de Jesus, disse-lhe: Senhor, quem é?
²⁶ Jesus respondeu: É aquele a quem eu der o bocado molhado. E, molhando o bocado, o deu a Judas Iscariotes, filho de Simão.
²⁷ E, após o bocado, entrou nele Satanás. Disse-lhe, pois, Jesus: O que fazes, faze-o depressa.
²⁸ E nenhum dos que estavam assentados à mesa compreendeu a que propósito lhe dissera isto.
²⁹ Porque, como Judas tinha a bolsa, pensavam alguns que Jesus lhe tinha dito: Compra o que nos é necessário para a festa; ou que desse alguma coisa aos pobres.
³⁰ E, tendo ele tomado o bocado, saiu logo. E era já noite.
³¹ Tendo ele, pois, saído, disse Jesus: Agora é glorificado o Filho do homem, e Deus é glorificado nele.
³² Se Deus é glorificado nele, também Deus o glorificará em si mesmo, e logo o há de glorificar.
³³ Filhinhos, ainda por um pouco estou convosco. Vós me buscareis, mas, como tenho dito aos judeus: Para onde eu vou não podeis vós ir; eu vo-lo digo também agora.
³⁴ Um novo mandamento vos dou: Que vos ameis uns aos outros; como eu vos amei a vós, que também vós uns aos outros vos ameis.
³⁵ Nisto todos conhecerão que sois meus discípulos, se vos amardes uns aos outros.
³⁶ Disse-lhe Simão Pedro: Senhor, para onde vais? Jesus lhe respondeu: Para onde eu vou não podes agora seguir-me, mas depois me seguirás.
³⁷ Disse-lhe Pedro: Senhor, por que não posso seguir-te agora? Por ti darei a minha vida.
³⁸ Respondeu-lhe Jesus: Tu darás a tua vida por mim? Na verdade, na verdade te digo que não cantará o galo enquanto não me tiveres negado três vezes.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Jesus usou para enxugar os pés dos discípulos?",
                        opcoes: [
                            { numero: 1, texto: "Suas próprias vestes", correta: false },
                            { numero: 2, texto: "Um lenço de seda", correta: false },
                            { numero: 3, texto: "Uma toalha com que estava cingido", correta: true },
                            { numero: 4, texto: "Um pedaço de lã", correta: false }
                        ],
                        explicacao: "João 13:5 - Ele assumiu a posição de servo humilde.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual sinal Jesus deu para identificar quem o trairia?",
                        opcoes: [
                            { numero: 1, texto: "Um beijo no rosto", correta: false },
                            { numero: 2, texto: "Dar um bocado de pão molhado", correta: true },
                            { numero: 3, texto: "Apontar com o dedo", correta: false },
                            { numero: 4, texto: "Falar o nome em voz alta", correta: false }
                        ],
                        explicacao: "João 13:26 - Ele deu o bocado a Judas Iscariotes.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual foi o 'Novo Mandamento' que Jesus deu?",
                        opcoes: [
                            { numero: 1, texto: "Que guardem o sábado", correta: false },
                            { numero: 2, texto: "Que amem uns aos outros como Ele nos amou", correta: true },
                            { numero: 3, texto: "Que orem três vezes ao dia", correta: false },
                            { numero: 4, texto: "Que jejuem toda semana", correta: false }
                        ],
                        explicacao: "João 13:34 - O amor é a marca dos discípulos de Jesus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        14: {
            titulo: "O Consolador Prometido",
            texto: `¹ Não se turbe o vosso coração; credes em Deus, crede também em mim.
² Na casa de meu Pai há muitas moradas; se não fosse assim, eu vo-lo teria dito. Vou preparar-vos lugar.
³ E quando eu for, e vos preparar lugar, virei outra vez, e vos levarei para mim mesmo, para que onde eu estiver estejais vós também.
⁴ Mesmo vós sabeis para onde vou, e conheceis o caminho.
⁵ Disse-lhe Tomé: Senhor, nós não sabemos para onde vais; e como podemos saber o caminho?
⁶ Disse-lhe Jesus: Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senão por mim.
⁷ Se vós me conhecêsseis a mim, também conheceríeis a meu Pai; e já desde agora o conheceis, e o tendes visto.
⁸ Disse-lhe Filipe: Senhor, mostra-nos o Pai, o que nos basta.
⁹ Disse-lhe Jesus: Estou há tanto tempo convosco, e não me tendes conhecido, Filipe? Quem me vê a mim vê o Pai; e como dizes tu: Mostra-nos o Pai?
¹⁰ Não crês tu que eu estou no Pai, e que o Pai está em mim? As palavras que eu vos digo não as digo de mim mesmo, mas o Pai, que está em mim, é quem faz as obras.
¹¹ Crede-me que estou no Pai, e o Pai em mim; crede-me, ao menos, por causa das mesmas obras.
¹² Na verdade, na verdade vos digo que aquele que crê em mim também fará as obras que eu faço, e as fará maiores do que estas, porque eu vou para meu Pai.
¹³ E tudo quanto pedirdes em meu nome eu o farei, para que o Pai seja glorificado no Filho.
¹⁴ Se pedirdes alguma coisa em meu nome, eu o farei.
¹⁵ Se me amais, guardai os meus mandamentos.
¹⁶ E eu rogarei ao Pai, e ele vos dará outro Consolador, para que fique convosco para sempre;
¹⁷ O Espírito de verdade, que o mundo não pode receber, porque não o vê nem o conhece; mas vós o conheceis, porque habita convosco, e estará em vós.
¹⁸ Não vos deixarei órfãos; voltarei para vós.
¹⁹ Ainda um pouco, e o mundo não me verá mais, mas vós me vereis; porque eu vivo, e vós vivereis.
²⁰ Naquele dia conhecereis que estou em meu Pai, e vós em mim, e eu em vós.
²¹ Aquele que tem os meus mandamentos e os guarda esse é o que me ama; e aquele que me ama será amado de meu Pai, e eu o amarei, e me manifestarei a ele.
²² Disse-lhe Judas (não o Iscariotes): Senhor, de onde vem que te hás de manifestar a nós, e não ao mundo?
²³ Jesus respondeu, e disse-lhe: Se alguém me ama, guardará a minha palavra, e meu Pai o amará, e viremos para ele, e faremos nele morada.
²⁴ Quem não me ama não guarda as minhas palavras; ora, a palavra que ouvistes não é minha, mas do Pai que me enviou.
²⁵ Tenho-vos dito isto, estando convosco.
²⁶ Mas aquele Consolador, o Espírito Santo, que o Pai enviará em meu nome, esse vos ensinará todas as coisas, e vos fará lembrar de tudo quanto vos tenho dito.
²⁷ Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize.
²⁸ Ouvistes que eu vos disse: Vou, e venho para vós. Se me amásseis, certamente exultaríeis porque eu disse: Vou para o Pai; porque meu Pai é maior do que eu.
²⁹ Eu vo-lo disse agora antes que aconteça, para que, quando acontecer, vós acrediteis.
³⁰ Já não falarei muito convosco, porque se aproxima o príncipe deste mundo, e nada tem em mim;
³¹ Mas é para que o mundo saiba que eu amo o Pai, e que faço como o Pai me mandou. Levantai-vos, vamo-nos daqui. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Jesus disse haver na casa de seu Pai?",
                        opcoes: [
                            { numero: 1, texto: "Muitas moradas", correta: true },
                            { numero: 2, texto: "Tesouros de ouro", correta: false },
                            { numero: 3, texto: "Anjos guerreiros", correta: false },
                            { numero: 4, texto: "Um grande banquete", correta: false }
                        ],
                        explicacao: "João 14:2 - Ele foi preparar lugar para nós.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como Jesus se definiu para o discípulo Tomé?",
                        opcoes: [
                            { numero: 1, texto: "Eu sou a Porta", correta: false },
                            { numero: 2, texto: "Eu sou a Videira", correta: false },
                            { numero: 3, texto: "Eu sou o Caminho, a Verdade e a Vida", correta: true },
                            { numero: 4, texto: "Eu sou a Estrela da Manhã", correta: false }
                        ],
                        explicacao: "João 14:6 - Ninguém vem ao Pai senão por Ele.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é o nome do Consolador que Jesus prometeu enviar?",
                        opcoes: [
                            { numero: 1, texto: "Anjo Gabriel", correta: false },
                            { numero: 2, texto: "O Espírito Santo", correta: true },
                            { numero: 3, texto: "Elias", correta: false },
                            { numero: 4, texto: "Moisés", correta: false }
                        ],
                        explicacao: "João 14:26 - O Espírito ensinaria todas as coisas.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        15: {
            titulo: "A Videira e os Ramos",
            texto: `¹ Eu sou a videira verdadeira, e meu Pai é o lavrador.
² Toda a vara em mim, que não dá fruto, a tira; e limpa toda aquela que dá fruto, para que dê mais fruto.
³ Vós já estais limpos, pela palavra que vos tenho falado.
⁴ Estai em mim, e eu em vós; como a vara de si mesma não pode dar fruto, se não estiver na videira, assim também vós, se não estiverdes em mim.
⁵ Eu sou a videira, vós as varas; quem está em mim, e eu nele, esse dá muito fruto; porque sem mim nada podeis fazer.
⁶ Se alguém não estiver em mim, será lançado fora, como a vara, e secará; e os colhem e lançam no fogo, e ardem.
⁷ Se vós estiverdes em mim, e as minhas palavras estiverem em vós, pedireis tudo o que quiserdes, e vos será feito.
⁸ Nisto é glorificado meu Pai, que deis muito fruto; e assim sereis meus discípulos.
⁹ Como o Pai me amou, também eu vos amei a vós; permanecei no meu amor.
¹⁰ Se guardardes os meus mandamentos, permanecereis no meu amor; do mesmo modo que eu tenho guardado os mandamentos de meu Pai, e permaneço no seu amor.
¹¹ Tenho-vos dito isto, para que o meu gozo permaneça em vós, e o vosso gozo seja completo.
¹² O meu mandamento é este: Que vos ameis uns aos outros, assim como eu vos amei.
¹³ Ninguém tem maior amor do que este, de dar alguém a sua vida pelos seus amigos.
¹⁴ Vós sereis meus amigos, se fizerdes o que eu vos mando.
¹⁵ Já vos não chamarei servos, porque o servo não sabe o que faz o seu senhor; mas tenho-vos chamado amigos, porque tudo quanto ouvi de meu Pai vos tenho feito conhecer.
¹⁶ Não me escolhestes vós a mim, mas eu vos escolhi a vós, e vos nomeei, para que vades e deis fruto, e o vosso fruto permaneça; a fim de que tudo quanto em meu nome pedirdes ao Pai ele vo-lo conceda.
¹⁷ Isto vos mando: Que vos ameis uns aos outros.
¹⁸ Se o mundo vos odeia, sabei que, primeiro do que a vós, me odiou a mim.
¹⁹ Se vós fôsseis do mundo, o mundo amaria o que era seu, mas porque não sois do mundo, antes eu vos escolhi do mundo, por isso é que o mundo vos odeia.
²⁰ Lembrai-vos da palavra que vos disse: Não é o servo maior do que o seu senhor. Se a mim me perseguiram, também vos perseguirão a vós; se guardaram a minha palavra, também guardarão a vossa.
²¹ Mas tudo isto vos farão por causa do meu nome, porque não conhecem aquele que me enviou.
²² Se eu não viera, nem lhes houvera falado, não teriam pecado, mas agora não têm desculpa do seu pecado.
²³ Aquele que me odeia, odeia também a meu Pai.
²⁴ Se eu entre eles não fizesse tais obras, quais nenhum outro tem feito, não teriam pecado; mas agora, viram-nas e me odiaram a mim e a meu Pai.
²⁵ Mas é para que se cumpra a palavra que está escrita na sua lei: Odiaram-me sem causa.
²⁶ Mas, quando vier o Consolador, que eu da parte do Pai vos hei de enviar, aquele Espírito de verdade, que procede do Pai, ele testificará de mim.
²⁷ E vós também testificareis, pois estivestes comigo desde o princípio. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem é o lavrador da videira verdadeira?",
                        opcoes: [
                            { numero: 1, texto: "Jesus", correta: false },
                            { numero: 2, texto: "O Pai", correta: true },
                            { numero: 3, texto: "Os discípulos", correta: false },
                            { numero: 4, texto: "Os anjos", correta: false }
                        ],
                        explicacao: "João 15:1 - Jesus é a videira e o Pai é o agricultor.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontece com a vara que não dá fruto?",
                        opcoes: [
                            { numero: 1, texto: "É cortada e lançada no fogo", correta: true },
                            { numero: 2, texto: "É amarrada com força", correta: false },
                            { numero: 3, texto: "É regada mais vezes", correta: false },
                            { numero: 4, texto: "Fica na videira para sempre", correta: false }
                        ],
                        explicacao: "João 15:6 - A vara seca não tem utilidade na videira.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como Jesus passou a chamar os discípulos em vez de 'servos'?",
                        opcoes: [
                            { numero: 1, texto: "Guerreiros", correta: false },
                            { numero: 2, texto: "Amigos", correta: true },
                            { numero: 3, texto: "Alunos", correta: false },
                            { numero: 4, texto: "Mestres", correta: false }
                        ],
                        explicacao: "João 15:15 - Porque Ele revelou a eles tudo o que ouviu do Pai.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        16: {
            titulo: "A Obra do Espírito Santo",
            texto: `¹ Tenho-vos dito estas coisas para que vos não escandalizeis.
² Expulsar-vos-ão das sinagogas; vem mesmo a hora em que qualquer que vos matar cuidará fazer um serviço a Deus.
³ E isto vos farão, porque não conheceram ao Pai nem a mim.
⁴ Mas tenho-vos dito isto, a fim de que, quando chegar aquela hora, vos lembreis de que já vo-lo tinha dito. E eu não vos disse isto desde o princípio, porque estava convosco.
⁵ E agora vou para aquele que me enviou; e nenhum de vós me pergunta: Para onde vais?
⁶ Antes, porque isto vos tenho dito, o vosso coração se encheu de tristeza.
⁷ Todavia digo-vos a verdade, que vos convém que eu vá; porque, se eu não for, o Consolador não virá a vós; mas, quando eu for, vo-lo enviarei.
⁸ E, quando ele vier, convencerá o mundo do pecado, e da justiça e do juízo.
⁹ Do pecado, porque não creem em mim;
¹⁰ Da justiça, porque vou para meu Pai, e não me vereis mais;
¹¹ E do juízo, porque já o príncipe deste mundo está julgado.
¹² Ainda tenho muito que vos dizer, mas vós não o podeis suportar agora.
¹³ Mas, quando vier aquele, o Espírito de verdade, ele vos guiará em toda a verdade; porque não falará de si mesmo, mas dirá tudo o que tiver ouvido, e vos anunciará o que há de vir.
¹⁴ Ele me glorificará, porque há de receber do que é meu, e vo-lo há de anunciar.
¹⁵ Tudo quanto o Pai tem é meu; por isso vos disse que há de receber do que é meu e vo-lo há de anunciar.
¹⁶ Um pouco, e não me vereis; e outra vez um pouco, e ver-me-eis; porquanto vou para o Pai.
¹⁷ Então alguns dos seus discípulos disseram uns aos outros: Que é isto que nos diz? Um pouco, e não me vereis; e outra vez um pouco, e ver-me-eis; e: Porquanto vou para o Pai?
¹⁸ Diziam, pois: Que quer dizer isto: Um pouco? Não sabemos o que diz.
¹⁹ Conheceu, pois, Jesus que o queriam interrogar, e disse-lhes: Indagais entre vós acerca disto que disse: Um pouco, e não me vereis, e outra vez um pouco, e ver-me-eis?
²⁰ Na verdade, na verdade vos digo que vós chorareis e vos lamentareis, e o mundo se alegrará, e vós estareis tristes, mas a vossa tristeza se converterá em alegria.
²¹ A mulher, quando está para dar à luz, sente tristeza, porque é chegada a sua hora; mas, depois de ter dado à luz a criança, já não se lembra da aflição, pelo prazer de haver nascido um homem no mundo.
²² Assim também vós agora, na verdade, tendes tristeza; mas outra vez vos verei, e o vosso coração se alegrará, e a vossa alegria ninguém vo-la tirará.
²³ E naquele dia nada me perguntareis. Na verdade, na verdade vos digo que tudo quanto pedirdes a meu Pai, em meu nome, ele vo-lo há de dar.
²⁴ Até agora nada pedistes em meu nome; pedi, e recebereis, para que o vosso gozo se cumpra.
²⁵ Disse-vos isto por parábolas; chega, porém, a hora em que não vos falarei mais por parábolas, mas abertamente vos falarei acerca do Pai.
²⁶ Naquele dia pedireis em meu nome, e não vos digo que eu rogarei por vós ao Pai;
²⁷ Pois o mesmo Pai vos ama, visto como vós me amastes, e crestes que saí de Deus.
²⁸ Saí do Pai, e vim ao mundo; outra vez deixo o mundo, e vou para o Pai.
²⁹ Disseram-lhe os seus discípulos: Eis que agora falas abertamente, e não dizes parábola alguma.
³⁰ Agora conhecemos que sabes tudo, e não precisas de que alguém te interrogue. Por isso cremos que saíste de Deus.
³¹ Respondeu-lhes Jesus: Credes agora?
³² Eis que chega a hora, e já se aproxima, em que vós sereis dispersos cada um para sua parte, e me deixareis só; mas não estou só, porque o Pai está comigo.
³³ Tenho-vos dito isto, para que em mim tenhais paz; no mundo tereis aflições, mas tende bom ânimo, eu venci o mundo 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "De quais três coisas o Espírito Santo convenceria o mundo?",
                        opcoes: [
                            { numero: 1, texto: "Do pecado, da justiça e do juízo", correta: true },
                            { numero: 2, texto: "Da morte, da vida e do amor", correta: false },
                            { numero: 3, texto: "Da fome, da sede e da guerra", correta: false },
                            { numero: 4, texto: "Da lei, da fé e da esperança", correta: false }
                        ],
                        explicacao: "João 16:8 - É a missão principal do Espírito no mundo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus disse que os discípulos teriam no mundo?",
                        opcoes: [
                            { numero: 1, texto: "Apenas alegrias", correta: false },
                            { numero: 2, texto: "Grandes riquezas", correta: false },
                            { numero: 3, texto: "Aflições", correta: true },
                            { numero: 4, texto: "Sorte constante", correta: false }
                        ],
                        explicacao: "João 16:33 - No mundo tereis aflições, mas tende bom ânimo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por que era bom que Jesus fosse embora para o céu?",
                        opcoes: [
                            { numero: 1, texto: "Para que o Consolador viesse", correta: true },
                            { numero: 2, texto: "Para os discípulos descansarem", correta: false },
                            { numero: 3, texto: "Para Ele poder dormir", correta: false },
                            { numero: 4, texto: "Para a guerra acabar", correta: false }
                        ],
                        explicacao: "João 16:7 - A vinda do Espírito dependia da ascensão de Jesus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        17: {
            titulo: "A Oração Sacerdotal",
            texto: `¹ Jesus falou assim e, levantou seus olhos ao céu, e disse: Pai, é chegada a hora; glorifica a teu Filho, para que também o teu Filho te glorifique a ti;
² Assim como lhe deste poder sobre toda a carne, para que dê a vida eterna a todos quantos lhe deste.
³ E a vida eterna é esta: que te conheçam, a ti só, por único Deus verdadeiro, e a Jesus Cristo, a quem enviaste.
⁴ Eu glorifiquei-te na terra, tendo consumado a obra que me deste a fazer.
⁵ E agora glorifica-me tu, ó Pai, junto de ti mesmo, com aquela glória que tinha contigo antes que o mundo existisse.
⁶ Manifestei o teu nome aos homens que do mundo me deste; eram teus, e tu mos deste, e guardaram a tua palavra.
⁷ Agora já têm conhecido que tudo quanto me deste provém de ti;
⁸ Porque lhes dei as palavras que tu me deste; e eles as receberam, e têm verdadeiramente conhecido que saí de ti, e creram que me enviaste.
⁹ Eu rogo por eles; não rogo pelo mundo, mas por aqueles que me deste, porque são teus.
¹⁰ E todas as minhas coisas são tuas, e as tuas coisas são minhas; e neles sou glorificado.
¹¹ E eu já não estou mais no mundo, mas eles estão no mundo, e eu vou para ti. Pai santo, guarda em teu nome aqueles que me deste, para que sejam um, assim como nós.
¹² Estando eu com eles no mundo, guardava-os em teu nome. Tenho guardado aqueles que tu me deste, e nenhum deles se perdeu, senão o filho da perdição, para que a Escritura se cumprisse.
¹³ Mas agora vou para ti, e digo isto no mundo, para que tenham a minha alegria completa em si mesmos.
¹⁴ Dei-lhes a tua palavra, e o mundo os odiou, porque não são do mundo, assim como eu não sou do mundo.
¹⁵ Não peço que os tires do mundo, mas que os livres do mal.
¹⁶ Não são do mundo, como eu do mundo não sou.
¹⁷ Santifica-os na tua verdade; a tua palavra é a verdade.
¹⁸ Assim como tu me enviaste ao mundo, também eu os enviei ao mundo.
¹⁹ E por eles me santifico a mim mesmo, para que também eles sejam santificados na verdade.
²⁰ E não rogo somente por estes, mas também por aqueles que pela sua palavra hão de crer em mim;
²¹ Para que todos sejam um, como tu, ó Pai, o és em mim, e eu em ti; que também eles sejam um em nós, para que o mundo creia que tu me enviaste.
²² E eu dei-lhes a glória que a mim me deste, para que sejam um, como nós somos um.
²³ Eu neles, e tu em mim, para que eles sejam perfeitos em unidade, e para que o mundo conheça que tu me enviaste a mim, e que os tens amado a eles como me tens amado a mim.
²⁴ Pai, aqueles que me deste quero que, onde eu estiver, também eles estejam comigo, para que vejam a minha glória que me deste; porque tu me amaste antes da fundação do mundo.
²⁵ Pai justo, o mundo não te conheceu; mas eu te conheci, e estes conheceram que tu me enviaste a mim.
²⁶ E eu lhes fiz conhecer o teu nome, e lho farei conhecer mais, para que o amor com que me tens amado esteja neles, e eu neles esteja. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que é a vida eterna, segundo a oração de Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Viver mil anos", correta: false },
                            { numero: 2, texto: "Não ter nenhuma dor", correta: false },
                            { numero: 3, texto: "Conhecer o único Deus verdadeiro e a Jesus", correta: true },
                            { numero: 4, texto: "Ter poderes celestiais", correta: false }
                        ],
                        explicacao: "João 17:3 - A vida eterna é um relacionamento de conhecimento com Deus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Pelo que Jesus orou em relação ao mundo?",
                        opcoes: [
                            { numero: 1, texto: "Para que os discípulos fossem tirados do mundo", correta: false },
                            { numero: 2, texto: "Para que o mundo fosse destruído", correta: false },
                            { numero: 3, texto: "Para que fossem guardados do mal no mundo", correta: true },
                            { numero: 4, texto: "Para que o mundo ficasse rico", correta: false }
                        ],
                        explicacao: "João 17:15 - Jesus pede proteção, não isolamento.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual foi o pedido principal de Jesus para a igreja (os que creriam)?",
                        opcoes: [
                            { numero: 1, texto: "Que fossem todos um", correta: true },
                            { numero: 2, texto: "Que fossem todos fortes", correta: false },
                            { numero: 3, texto: "Que falassem todas as línguas", correta: false },
                            { numero: 4, texto: "Que nunca tivessem dúvidas", correta: false }
                        ],
                        explicacao: "João 17:21 - A unidade é o testemunho para que o mundo creia.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        18: {
            titulo: "A Prisão e o Interrogatório",
            texto: `¹ Tendo Jesus dito isto, saiu com os seus discípulos para além do ribeiro de Cedrom, onde havia um jardim, no qual ele entrou e seus discípulos.
² E Judas, que o traía, também conhecia aquele lugar, porque Jesus muitas vezes se ajuntava ali com os seus discípulos.
³ Tendo, pois, Judas recebido a coorte e oficiais dos principais sacerdotes e fariseus, veio para ali com lanternas, e tochas e armas.
⁴ Sabendo, pois, Jesus todas as coisas que sobre ele haviam de vir, adiantou-se, e disse-lhes: A quem buscais?
⁵ Responderam-lhe: A Jesus Nazareno. Disse-lhes Jesus: Sou eu. E Judas, que o traía, estava com eles.
⁶ Quando, pois, lhes disse: Sou eu, recuaram, e caíram por terra.
⁷ Tornou-lhes, pois, a perguntar: A quem buscais? E eles disseram: A Jesus Nazareno.
⁸ Jesus respondeu: Já vos disse que sou eu; se, pois, me buscais a mim, deixai ir estes;
⁹ Para que se cumprisse a palavra que tinha dito: Dos que me deste nenhum deles perdi.
¹⁰ Então Simão Pedro, que tinha espada, desembainhou-a, e feriu o servo do sumo sacerdote, cortando-lhe a orelha direita. E o nome do servo era Malco.
¹¹ Mas Jesus disse a Pedro: Põe a tua espada na bainha; não beberei eu o cálice que o Pai me deu?
¹² Então a coorte, e o tribuno, e os servos dos judeus prenderam a Jesus e o amarraram.
¹³ E conduziram-no primeiramente a Anás, por ser sogro de Caifás, que era o sumo sacerdote daquele ano.
¹⁴ Ora, Caifás era quem tinha aconselhado aos judeus que convinha que um homem morresse pelo povo.
¹⁵ E Simão Pedro e outro discípulo seguiam a Jesus. E este discípulo era conhecido do sumo sacerdote, e entrou com Jesus na sala do sumo sacerdote.
¹⁶ E Pedro estava da parte de fora, à porta. Saiu então o outro discípulo que era conhecido do sumo sacerdote, e falou à porteira, levando Pedro para dentro.
¹⁷ Então a porteira disse a Pedro: Não és tu também dos discípulos deste homem? Disse ele: Não sou.
¹⁸ Ora, estavam ali os servos e os servidores, que tinham feito brasas, e se aquentavam, porque fazia frio; e com eles estava Pedro, aquentando-se também.
¹⁹ E o sumo sacerdote interrogou Jesus acerca dos seus discípulos e da sua doutrina.
²⁰ Jesus lhe respondeu: Eu falei abertamente ao mundo; eu sempre ensinei na sinagoga e no templo, onde os judeus sempre se ajuntam, e nada disse em oculto.
²¹ Para que me perguntas a mim? Pergunta aos que ouviram o que é que lhes ensinei; eis que eles sabem o que eu lhes tenho dito.
²² E, tendo dito isto, um dos servidores que ali estavam, deu uma bofetada em Jesus, dizendo: Assim respondes ao sumo sacerdote?
²³ Respondeu-lhe Jesus: Se falei mal, dá testemunho do mal; e, se bem, por que me feres?
²⁴ E Anás mandou-o, amarrado, ao sumo sacerdote Caifás.
²⁵ E Simão Pedro estava ali, e aquentava-se. Disseram-lhe, pois: Não és também tu um dos seus discípulos? Ele negou, e disse: Não sou.
²⁶ E um dos servos do sumo sacerdote, parente daquele a quem Pedro cortara a orelha, disse: Não te vi eu no horto com ele?
²⁷ E Pedro negou outra vez, e logo o galo cantou.
²⁸ Depois levaram Jesus da casa de Caifás para a audiência. E era pela manhã cedo. E não entraram na audiência, para não se contaminarem, mas poderem comer a páscoa.
²⁹ Então Pilatos saiu fora e disse-lhes: Que acusação trazeis contra este homem?
³⁰ Responderam, e disseram-lhe: Se este não fosse malfeitor, não to entregaríamos.
³¹ Disse-lhes, pois, Pilatos: Levai-o vós, e julgai-o segundo a vossa lei. Disseram-lhe então os judeus: A nós não nos é lícito matar pessoa alguma.
³² (Para que se cumprisse a palavra que Jesus tinha dito, significando de que morte havia de morrer.)
³³ Tornou, pois, a entrar Pilatos na audiência, e chamou a Jesus, e disse-lhe: Tu és o Rei dos Judeus?
³⁴ Respondeu-lhe Jesus: Tu dizes isso de ti mesmo, ou disseram-to outros de mim?
³⁵ Pilatos respondeu: Porventura sou eu judeu? A tua nação e os principais sacerdotes entregaram-te a mim. Que fizeste?
³⁶ Respondeu Jesus: O meu reino não é deste mundo; se o meu reino fosse deste mundo, pelejariam os meus servos, para que eu não fosse entregue aos judeus; mas agora o meu reino não é daqui.
³⁷ Disse-lhe, pois, Pilatos: Logo tu és rei? Jesus respondeu: Tu dizes que eu sou rei. Eu para isso nasci, e para isso vim ao mundo, a fim de dar testemunho da verdade. Todo aquele que é da verdade ouve a minha voz.
³⁸ Disse-lhe Pilatos: Que é a verdade? E, dizendo isto, tornou a ir ter com os judeus, e disse-lhes: Não acho nele crime algum.
³⁹ Mas vós tendes por costume que eu vos solte alguém pela páscoa. Quereis, pois, que vos solte o Rei dos Judeus?
⁴⁰ Então todos tornaram a clamar, dizendo: Este não, mas Barrabás. E Barrabás era um salteador. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era o nome do servo que Pedro feriu no jardim?",
                        opcoes: [
                            { numero: 1, texto: "Malco", correta: true },
                            { numero: 2, texto: "Caifás", correta: false },
                            { numero: 3, texto: "Pilatos", correta: false },
                            { numero: 4, texto: "Anás", correta: false }
                        ],
                        explicacao: "João 18:10 - Pedro cortou a orelha direita de Malco.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quantas vezes Pedro negou Jesus antes do galo cantar?",
                        opcoes: [
                            { numero: 1, texto: "Uma vez", correta: false },
                            { numero: 2, texto: "Duas vezes", correta: false },
                            { numero: 3, texto: "Três vezes", correta: true },
                            { numero: 4, texto: "Sete vezes", correta: false }
                        ],
                        explicacao: "João 18:27 - Conforme Jesus havia profetizado.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem os judeus escolheram libertar no lugar de Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Barrabás", correta: true },
                            { numero: 2, texto: "Judas", correta: false },
                            { numero: 3, texto: "Lázaro", correta: false },
                            { numero: 4, texto: "Pedro", correta: false }
                        ],
                        explicacao: "João 18:40 - Barrabás era um salteador (criminoso).",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        19: {
            titulo: "Crucificação e Morte",
            texto: ` ¹ Pilatos, pois, tomou então a Jesus, e o açoitou.
² E os soldados, tecendo uma coroa de espinhos, lha puseram sobre a cabeça, e lhe vestiram roupa de púrpura.
³ E diziam: Salve, Rei dos Judeus. E davam-lhe bofetadas.
⁴ Então Pilatos saiu outra vez fora, e disse-lhes: Eis aqui vo-lo trago fora, para que saibais que não acho nele crime algum.
⁵ Saiu, pois, Jesus fora, levando a coroa de espinhos e roupa de púrpura. E disse-lhes Pilatos: Eis aqui o homem.
⁶ Quando viram-no, pois, os principais sacerdotes e os servos, clamaram, dizendo: Crucifica-o, crucifica-o. Disse-lhes Pilatos: Tomai-o vós, e crucificai-o; porque eu nenhum crime acho nele.
⁷ Responderam-lhe os judeus: Nós temos uma lei e, segundo a nossa lei, deve morrer, porque se fez Filho de Deus.
⁸ E Pilatos, quando ouviu esta palavra, mais atemorizado ficou.
⁹ E entrou outra vez na audiência, e disse a Jesus: De onde és tu? Mas Jesus não lhe deu resposta.
¹⁰ Disse-lhe, pois, Pilatos: Não me falas a mim? Não sabes tu que tenho poder para te crucificar e tenho poder para te soltar?
¹¹ Respondeu Jesus: Nenhum poder terias contra mim, se de cima não te fosse dado; mas aquele que me entregou a ti maior pecado tem.
¹² Desde então Pilatos procurava soltá-lo; mas os judeus clamavam, dizendo: Se soltas este, não és amigo de César; qualquer que se faz rei é contra César.
¹³ Ouvindo, pois, Pilatos este dito, levou Jesus para fora, e assentou-se no tribunal, no lugar chamado Litóstrotos, e em hebraico Gabatá.
¹⁴ E era a preparação da páscoa, e quase à hora sexta; e disse aos judeus: Eis aqui o vosso Rei.
¹⁵ Mas eles bradaram: Tira, tira, crucifica-o. Disse-lhes Pilatos: Hei de crucificar o vosso Rei? Responderam os principais sacerdotes: Não temos rei, senão César.
¹⁶ Então, consequentemente entregou-lho, para que fosse crucificado. E tomaram a Jesus, e o levaram.
¹⁷ E, levando ele às costas a sua cruz, saiu para o lugar chamado Caveira, que em hebraico se chama Gólgota,
¹⁸ Onde o crucificaram, e com ele outros dois, um de cada lado, e Jesus no meio.
¹⁹ E Pilatos escreveu também um título, e pô-lo em cima da cruz; e nele estava escrito: jesus nazareno, o rei dos judeus.
²⁰ E muitos dos judeus leram este título; porque o lugar onde Jesus estava crucificado era próximo da cidade; e estava escrito em hebraico, grego e latim.
²¹ Diziam, pois, os principais sacerdotes dos judeus a Pilatos: Não escrevas, O Rei dos Judeus, mas que ele disse: Sou o Rei dos Judeus.
²² Respondeu Pilatos: O que escrevi, escrevi.
²³ Tendo, pois, os soldados crucificado a Jesus, tomaram as suas vestes, e fizeram quatro partes, para cada soldado uma parte; e também a túnica. A túnica, porém, tecida toda de alto a baixo, não tinha costura.
²⁴ Disseram, pois, uns aos outros: Não a rasguemos, mas lancemos sortes sobre ela, para ver de quem será. Para que se cumprisse a Escritura que diz: Repartiram entre si as minhas vestes, e sobre a minha vestidura lançaram sortes. Os soldados, pois, fizeram estas coisas.
²⁵ E junto à cruz de Jesus estava sua mãe, e a irmã de sua mãe, Maria mulher de Clopas, e Maria Madalena.
²⁶ Ora Jesus, vendo ali sua mãe, e que o discípulo a quem ele amava estava presente, disse a sua mãe: Mulher, eis aí o teu filho.
²⁷ Depois disse ao discípulo: Eis aí tua mãe. E desde aquela hora o discípulo a recebeu em sua casa.
²⁸ Depois disso, sabendo Jesus que já todas as coisas estavam terminadas, para que a Escritura se cumprisse, disse: Tenho sede.
²⁹ Estava, pois, ali um vaso cheio de vinagre. E encheram de vinagre uma esponja, e, pondo-a num hissopo, lha chegaram à boca.
³⁰ E, quando Jesus tomou o vinagre, disse: Está consumado. E, inclinando a cabeça, entregou o espírito.
³¹ Os judeus, pois, para que no sábado não ficassem os corpos na cruz, visto como era a preparação (pois era grande o dia de sábado), rogaram a Pilatos que se lhes quebrassem as pernas, e fossem tirados.
³² Foram, pois, os soldados, e, na verdade, quebraram as pernas ao primeiro, e ao outro que como ele fora crucificado;
³³ Mas, vindo a Jesus, e vendo-o já morto, não lhe quebraram as pernas.
³⁴ Contudo um dos soldados lhe furou o lado com uma lança, e logo saiu sangue e água.
³⁵ E aquele que o viu testificou, e o seu testemunho é verdadeiro; e sabe que é verdade o que diz, para que também vós o creiais.
³⁶ Porque isto aconteceu para que se cumprisse a Escritura, que diz: Nenhum dos seus ossos será quebrado.
³⁷ E novamente diz outra Escritura: Verão aquele que traspassaram.
³⁸ Depois disto, José de Arimateia (o que era discípulo de Jesus, mas oculto, por medo dos judeus) rogou a Pilatos que lhe permitisse tirar o corpo de Jesus. E Pilatos lho permitiu. Então foi e tirou o corpo de Jesus.
³⁹ E foi também Nicodemos (aquele que anteriormente se dirigira de noite a Jesus), levando quase cem arráteis de um composto de mirra e aloés.
⁴⁰ Tomaram, pois, o corpo de Jesus e o envolveram em lençóis com as especiarias, como é costume dos judeus, na preparação para o sepulcro.
⁴¹ E havia um jardim naquele lugar onde fora crucificado, e no horto um sepulcro novo, em que ainda ninguém havia sido posto.
⁴² Ali, pois (por causa da preparação dos judeus, e por estar perto aquele sepulcro), puseram a Jesus. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que os soldados fizeram com a túnica de Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Rasgaram em quatro partes", correta: false },
                            { numero: 2, texto: "Lançaram sortes sobre ela", correta: true },
                            { numero: 3, texto: "Queimaram no fogo", correta: false },
                            { numero: 4, texto: "Deram para Maria", correta: false }
                        ],
                        explicacao: "João 19:24 - Ela não tinha costura, por isso não a rasgaram.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quais foram as últimas palavras de Jesus na cruz?",
                        opcoes: [
                            { numero: 1, texto: "Está consumado", correta: true },
                            { numero: 2, texto: "Pai, me ajude", correta: false },
                            { numero: 3, texto: "Eu voltarei", correta: false },
                            { numero: 4, texto: "Adeus a todos", correta: false }
                        ],
                        explicacao: "João 19:30 - Ele cumpriu toda a obra da redenção.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem ajudou José de Arimateia a preparar o corpo de Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Pedro", correta: false },
                            { numero: 2, texto: "Nicodemos", correta: true },
                            { numero: 3, texto: "João", correta: false },
                            { numero: 4, texto: "Lázaro", correta: false }
                        ],
                        explicacao: "João 19:39 - Nicodemos trouxe quase cem libras de mirra e aloés.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        20: {
            titulo: "A Ressurreição",
            texto: ` ¹ E no primeiro dia da semana, Maria Madalena foi ao sepulcro de madrugada, sendo ainda escuro, e viu a pedra tirada do sepulcro.
² Correu, pois, e foi a Simão Pedro, e ao outro discípulo, a quem Jesus amava, e disse-lhes: Levaram o Senhor do sepulcro, e não sabemos onde o puseram.
³ Então Pedro saiu com o outro discípulo, e foram ao sepulcro.
⁴ E os dois corriam juntos, mas o outro discípulo correu mais apressadamente do que Pedro, e chegou primeiro ao sepulcro.
⁵ E, abaixando-se, viu no chão os lençóis; todavia não entrou.
⁶ Chegou, pois, Simão Pedro, que o seguia, e entrou no sepulcro, e viu no chão os lençóis,
⁷ E que o lenço, que tinha estado sobre a sua cabeça, não estava com os lençóis, mas enrolado num lugar à parte.
⁸ Então entrou também o outro discípulo, que chegara primeiro ao sepulcro, e viu, e creu.
⁹ Porque ainda não sabiam a Escritura, que era necessário que ressuscitasse dentre os mortos.
¹⁰ Tornaram, pois, os discípulos para casa.
¹¹ E Maria estava chorando fora, junto ao sepulcro. Estando ela, pois, chorando, abaixou-se para o sepulcro.
¹² E viu dois anjos vestidos de branco, assentados onde jazera o corpo de Jesus, um à cabeceira e outro aos pés.
¹³ E disseram-lhe eles: Mulher, por que choras? Ela lhes disse: Porque levaram o meu Senhor, e não sei onde o puseram.
¹⁴ E, tendo dito isto, voltou-se para trás, e viu Jesus em pé, mas não sabia que era Jesus.
¹⁵ Disse-lhe Jesus: Mulher, por que choras? Quem buscas? Ela, cuidando que era o jardineiro, disse-lhe: Senhor, se tu o levaste, dize-me onde o puseste, e eu o levarei.
¹⁶ Disse-lhe Jesus: Maria! Ela, voltando-se, disse-lhe: Raboni, que quer dizer: Mestre.
¹⁷ Disse-lhe Jesus: Não me detenhas, porque ainda não subi para meu Pai, mas vai para meus irmãos, e dize-lhes que eu subo para meu Pai e vosso Pai, meu Deus e vosso Deus.
¹⁸ Maria Madalena foi e anunciou aos discípulos que vira o Senhor, e que ele lhe dissera isto.
¹⁹ Chegada, pois, a tarde daquele dia, o primeiro da semana, e cerradas as portas onde os discípulos, com medo dos judeus, se tinham ajuntado, chegou Jesus, e pôs-se no meio, e disse-lhes: Paz seja convosco.
²⁰ E, dizendo isto, mostrou-lhes as suas mãos e o lado. De sorte que os discípulos se alegraram, vendo o Senhor.
²¹ Disse-lhes, pois, Jesus outra vez: Paz seja convosco; assim como o Pai me enviou, também eu vos envio a vós.
²² E, havendo dito isto, assoprou sobre eles e disse-lhes: Recebei o Espírito Santo.
²³ Àqueles a quem perdoardes os pecados lhes são perdoados; e àqueles a quem os retiverdes lhes são retidos.
²⁴ Ora, Tomé, um dos doze, chamado Dídimo, não estava com eles quando veio Jesus.
²⁵ Disseram-lhe, pois, os outros discípulos: Vimos o Senhor. Mas ele disse-lhes: Se eu não vir o sinal dos cravos em suas mãos, e não puser o meu dedo no lugar dos cravos, e não puser a minha mão no seu lado, de maneira nenhuma o crerei.
²⁶ E oito dias depois estavam outra vez os seus discípulos dentro, e com eles Tomé. Chegou Jesus, estando as portas fechadas, e apresentou-se no meio, e disse: Paz seja convosco.
²⁷ Depois disse a Tomé: Põe aqui o teu dedo, e vê as minhas mãos; e chega a tua mão, e põe-na no meu lado; e não sejas incrédulo, mas crente.
²⁸ E Tomé respondeu, e disse-lhe: Senhor meu, e Deus meu!
²⁹ Disse-lhe Jesus: Porque me viste, Tomé, creste; bem-aventurados os que não viram e creram.
³⁰ Jesus, pois, operou também em presença de seus discípulos muitos outros sinais, que não estão escritos neste livro.
³¹ Estes, porém, foram escritos para que creiais que Jesus é o Cristo, o Filho de Deus, e para que, crendo, tenhais vida em seu nome. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem foi a primeira pessoa a ver Jesus ressuscitado?",
                        opcoes: [
                            { numero: 1, texto: "Maria Madalena", correta: true },
                            { numero: 2, texto: "Simão Pedro", correta: false },
                            { numero: 3, texto: "João", correta: false },
                            { numero: 4, texto: "Maria, mãe de Jesus", correta: false }
                        ],
                        explicacao: "João 20:14-16 - Ela o reconheceu quando Ele a chamou pelo nome.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus soprou sobre os discípulos ao aparecer para eles?",
                        opcoes: [
                            { numero: 1, texto: "Poeira do deserto", correta: false },
                            { numero: 2, texto: "O Espírito Santo", correta: true },
                            { numero: 3, texto: "Fogo do céu", correta: false },
                            { numero: 4, texto: "Ar fresco", correta: false }
                        ],
                        explicacao: "João 20:22 - Ele disse: Recebei o Espírito Santo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual discípulo não estava presente na primeira aparição?",
                        opcoes: [
                            { numero: 1, texto: "Tomé", correta: true },
                            { numero: 2, texto: "André", correta: false },
                            { numero: 3, texto: "Filipe", correta: false },
                            { numero: 4, texto: "Mateus", correta: false }
                        ],
                        explicacao: "João 20:24 - Por isso ele duvidou da ressurreição no início.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        21: {
            titulo: "Restauração de Pedro",
            texto: `¹ Depois disto manifestou-se Jesus outra vez aos discípulos junto do mar de Tiberíades; e manifestou-se assim:
² Estavam juntos Simão Pedro, e Tomé, chamado Dídimo, e Natanael, que era de Caná da Galileia, os filhos de Zebedeu, e outros dois dos seus discípulos.
³ Disse-lhes Simão Pedro: Vou pescar. Dizem-lhe eles: Também nós vamos contigo. Foram, e subiram logo para o barco, e naquela noite nada apanharam.
⁴ E, sendo já manhã, Jesus se apresentou na praia, mas os discípulos não conheceram que era Jesus.
⁵ Disse-lhes, pois, Jesus: Filhos, tendes alguma coisa de comer? Responderam-lhe: Não.
⁶ E ele lhes disse: Lançai a rede para o lado direito do barco, e achareis. Lançaram-na, pois, e já não a podiam tirar, pela multidão dos peixes.
⁷ Então aquele discípulo, a quem Jesus amava, disse a Pedro: É o Senhor. E, quando Simão Pedro ouviu que era o Senhor, cingiu-se com a túnica (porque estava nu) e lançou-se ao mar.
⁸ E os outros discípulos foram com o barco (porque não estavam distantes da terra senão quase duzentos côvados), levando a rede cheia de peixes.
⁹ Logo que desceram para terra, viram ali brasas, e um peixe posto em cima, e pão.
¹⁰ Disse-lhes Jesus: Trazei dos peixes que agora apanhastes.
¹¹ Simão Pedro subiu e puxou a rede para terra, cheia de cento e cinquenta e três grandes peixes e, sendo tantos, não se rompeu a rede.
¹² Disse-lhes Jesus: Vinde, comei. E nenhum dos discípulos ousava perguntar-lhe: Quem és tu? Sabendo que era o Senhor.
¹³ Chegou, pois, Jesus, e tomou o pão, e deu-lhes e, semelhantemente o peixe.
¹⁴ E já era a terceira vez que Jesus se manifestava aos seus discípulos, depois de ter ressuscitado dentre os mortos.
¹⁵ E, depois de terem jantado, disse Jesus a Simão Pedro: Simão, filho de Jonas, amas-me mais do que estes? E ele respondeu: Sim, Senhor, tu sabes que te amo. Disse-lhe: Apascenta os meus cordeiros.
¹⁶ Tornou a dizer-lhe segunda vez: Simão, filho de Jonas, amas-me? Disse-lhe: Sim, Senhor, tu sabes que te amo. Disse-lhe: Apascenta as minhas ovelhas.
¹⁷ Disse-lhe terceira vez: Simão, filho de Jonas, amas-me? Simão entristeceu-se por lhe ter dito terceira vez: Amas-me? E disse-lhe: Senhor, tu sabes tudo; tu sabes que eu te amo. Jesus disse-lhe: Apascenta as minhas ovelhas.
¹⁸ Na verdade, na verdade te digo que, quando eras mais moço, te cingias a ti mesmo, e andavas por onde querias; mas, quando já fores velho, estenderás as tuas mãos, e outro te cingirá, e te levará para onde tu não queiras.
¹⁹ E disse isto, significando com que morte havia ele de glorificar a Deus. E, dito isto, disse-lhe: Segue-me.
²⁰ E Pedro, voltando-se, viu que o seguia aquele discípulo a quem Jesus amava, e que na ceia se recostara também sobre o seu peito, e que dissera: Senhor, quem é que te há de trair?
²¹ Vendo Pedro a este, disse a Jesus: Senhor, e deste que será?
²² Disse-lhe Jesus: Se eu quero que ele fique até que eu venha, que te importa a ti? Segue-me tu.
²³ Divulgou-se, pois, entre os irmãos este dito, que aquele discípulo não havia de morrer. Jesus, porém, não lhe disse que não morreria, mas: Se eu quero que ele fique até que eu venha, que te importa a ti?
²⁴ Este é o discípulo que testifica destas coisas e as escreveu; e sabemos que o seu testemunho é verdadeiro.
²⁵ Há, porém, ainda muitas outras coisas que Jesus fez; e se cada uma das quais fosse escrita, cuido que nem ainda o mundo todo poderia conter os livros que se escrevessem. Amém. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quantos peixes grandes foram pegos na rede após a ordem de Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Cento e cinquenta e três", correta: true },
                            { numero: 2, texto: "Setenta", correta: false },
                            { numero: 3, texto: "Doze", correta: false },
                            { numero: 4, texto: "Cinquenta", correta: false }
                        ],
                        explicacao: "João 21:11 - A rede não se rompeu apesar da quantidade.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus estava preparando na praia para os discípulos?",
                        opcoes: [
                            { numero: 1, texto: "Uma rede nova", correta: false },
                            { numero: 2, texto: "Brasas com peixe e pão", correta: true },
                            { numero: 3, texto: "Um novo barco", correta: false },
                            { numero: 4, texto: "Um altar de pedras", correta: false }
                        ],
                        explicacao: "João 21:9 - Jesus já tinha o alimento pronto para eles.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus ordenou que Pedro fizesse após ele dizer que o amava?",
                        opcoes: [
                            { numero: 1, texto: "Apascenta as minhas ovelhas", correta: true },
                            { numero: 2, texto: "Volte a pescar peixes", correta: false },
                            { numero: 3, texto: "Vá para Roma imediatamente", correta: false },
                            { numero: 4, texto: "Construa um templo", correta: false }
                        ],
                        explicacao: "João 21:17 - Jesus comissionou Pedro ao cuidado pastoral.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};