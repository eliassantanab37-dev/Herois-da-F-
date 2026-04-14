// js/livros/romanos.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const romanos = {
    nome: "Romanos",
    icone: "⚖️",
    autor: "Paulo",
    background: "./imagens/romanos_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "O Evangelho e a Culpa da Humanidade",
            texto: ` ¹ Paulo, servo de Jesus Cristo, chamado para apóstolo, separado para o evangelho de Deus.
² O qual antes prometeu pelos seus profetas nas santas escrituras,
³ Acerca de seu Filho, que nasceu da descendência de Davi segundo a carne,
⁴ Declarado Filho de Deus em poder, segundo o Espírito de santificação, pela ressurreição dos mortos, Jesus Cristo, nosso Senhor,
⁵ Pelo qual recebemos a graça e o apostolado, para a obediência da fé entre todas as gentes pelo seu nome,
⁶ Entre as quais sois também vós chamados para serdes de Jesus Cristo.
⁷ A todos os que estais em Roma, amados de Deus, chamados santos: Graça a vós e paz de Deus nosso Pai, e do Senhor Jesus Cristo.
⁸ Primeiramente dou graças ao meu Deus por Jesus Cristo, acerca de vós todos, porque em todo o mundo é anunciada a vossa fé.
⁹ Porque Deus, a quem sirvo em meu espírito, no evangelho de seu Filho, me é testemunha de como incessantemente faço menção de vós,
¹⁰ Pedindo sempre em minhas orações que nalgum tempo, pela vontade de Deus, se me ofereça boa ocasião de ir ter convosco.
¹¹ Porque desejo ver-vos, para vos comunicar algum dom espiritual, a fim de que sejais confortados;
¹² Isto é, para que juntamente convosco eu seja consolado pela fé mútua, assim vossa como minha.
¹³ Não quero, porém, irmãos, que ignoreis que muitas vezes propus ir ter convosco (mas até agora tenho sido impedido) para também ter entre vós algum fruto, como também entre os demais gentios.
¹⁴ Eu sou devedor, tanto a gregos como a bárbaros, tanto a sábios como a ignorantes.
¹⁵ E assim, quanto está em mim, estou pronto para também vos anunciar o evangelho, a vós que estais em Roma.
¹⁶ Porque não me envergonho do evangelho de Cristo, pois é o poder de Deus para salvação de todo aquele que crê; primeiro do judeu, e também do grego.
¹⁷ Porque nele se descobre a justiça de Deus de fé em fé, como está escrito: Mas o justo viverá pela fé.
¹⁸ Porque do céu se manifesta a ira de Deus sobre toda a impiedade e injustiça dos homens, que detêm a verdade em injustiça.
¹⁹ Porquanto o que de Deus se pode conhecer neles se manifesta, porque Deus lho manifestou.
²⁰ Porque as suas coisas invisíveis, desde a criação do mundo, tanto o seu eterno poder, como a sua divindade, se entendem, e claramente se veem pelas coisas que estão criadas, para que eles fiquem inescusáveis;
²¹ Porquanto, tendo conhecido a Deus, não o glorificaram como Deus, nem lhe deram graças, antes em seus discursos se desvaneceram, e o seu coração insensato se obscureceu.
²² Dizendo-se sábios, tornaram-se loucos.
²³ E mudaram a glória do Deus incorruptível em semelhança da imagem de homem corruptível, e de aves, e de quadrúpedes, e de répteis.
²⁴ Por isso também Deus os entregou às concupiscências de seus corações, à imundícia, para desonrarem seus corpos entre si;
²⁵ Pois estes mudaram a verdade de Deus em mentira, e honraram e serviram mais a criatura do que o Criador, que é bendito eternamente. Amém.
²⁶ Por isso Deus os abandonou às paixões infames. Porque até as suas mulheres mudaram o uso natural, no contrário à natureza.
²⁷ E, semelhantemente, também os homens, deixando o uso natural da mulher, se inflamaram em sua sensualidade uns para com os outros, homens com homens, cometendo torpeza e recebendo em si mesmos a recompensa que convinha ao seu erro.
²⁸ E, como eles não se importaram de ter conhecimento de Deus, assim Deus os entregou a um sentimento perverso, para fazerem coisas que não convêm;
²⁹ Estando cheios de toda a iniquidade, fornicação, malícia, avareza, maldade; cheios de inveja, homicídio, contenda, engano, malignidade;
³⁰ Sendo murmuradores, difamadores, aborrecedores de Deus, injuriadores, soberbos, presunçosos, inventores de males, desobedientes aos pais e às mães;
³¹ Néscios, infiéis nos contratos, sem afeição natural, irreconciliáveis, sem misericórdia;
³² Os quais, conhecendo o juízo de Deus (que são dignos de morte os que tais coisas praticam), não somente as fazem, mas também se agradam dos que as fazem. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Paulo se descreve logo no primeiro versículo de Romanos 1?",
                        opcoes: [
                            { numero: 1, texto: "Servo de Jesus Cristo, chamado para ser apóstolo", correta: true },
                            { numero: 2, texto: "O menor dos pecadores", correta: false },
                            { numero: 3, texto: "Mestre das nações", correta: false },
                            { numero: 4, texto: "Prisioneiro em Roma", correta: false }
                        ],
                        explicacao: "Romanos 1:1 - Paulo, servo de Jesus Cristo, chamado para apóstolo, separado para o evangelho de Deus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Segundo Romanos 1:17, como o justo viverá?",
                        opcoes: [
                            { numero: 1, texto: "Pelas obras da lei", correta: false },
                            { numero: 2, texto: "Pela sua própria força", correta: false },
                            { numero: 3, texto: "Pela fé", correta: true },
                            { numero: 4, texto: "Pela sabedoria dos homens", correta: false }
                        ],
                        explicacao: "Romanos 1:17 - Porque nele se descobre a justiça de Deus de fé em fé, como está escrito: Mas o justo viverá da fé.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Paulo afirma ser o 'poder de Deus para salvação de todo aquele que crê'?",
                        opcoes: [
                            { numero: 1, texto: "A filosofia grega", correta: false },
                            { numero: 2, texto: "O cumprimento dos ritos", correta: false },
                            { numero: 3, texto: "A força política", correta: false },
                            { numero: 4, texto: "O evangelho de Cristo", correta: true }
                        ],
                        explicacao: "Romanos 1:16 - Porque não me envergonho do evangelho de Cristo, pois é o poder de Deus para salvação de todo aquele que crê.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "O Justo Juízo de Deus",
            texto: ` ¹ Portanto, és inescusável quando julgas, ó homem, quem quer que sejas, porque te condenas a ti mesmo naquilo em que julgas a outro; pois tu, que julgas, fazes o mesmo.
² E bem sabemos que o juízo de Deus é segundo a verdade sobre os que tais coisas fazem.
³ E tu, ó homem, que julgas os que fazem tais coisas, cuidas que, fazendo-as tu, escaparás ao juízo de Deus?
⁴ Ou desprezas tu as riquezas da sua benignidade, e paciência e longanimidade, ignorando que a benignidade de Deus te leva ao arrependimento?
⁵ Mas, segundo a tua dureza e teu coração impenitente, entesouras ira para ti no dia da ira e da manifestação do juízo de Deus;
⁶ O qual recompensará cada um segundo as suas obras; a saber:
⁷ A vida eterna aos que, com perseverança em fazer bem, procuram glória, honra e incorrupção;
⁸ Mas a indignação e a ira aos que são contenciosos, desobedientes à verdade e obedientes à iniquidade;
⁹ Tribulação e angústia sobre toda a alma do homem que faz o mal; primeiramente do judeu e também do grego;
¹⁰ Glória, porém, e honra e paz a qualquer que pratica o bem; primeiramente ao judeu e também ao grego;
¹¹ Porque, para com Deus, não há acepção de pessoas.
¹² Porque todos os que sem lei pecaram, sem lei também perecerão; e todos os que sob a lei pecaram, pela lei serão julgados.
¹³ Porque os que ouvem a lei não são justos diante de Deus, mas os que praticam a lei hão de ser justificados.
¹⁴ Porque, quando os gentios, que não têm lei, fazem naturalmente as coisas que são da lei, não tendo eles lei, para si mesmos são lei;
¹⁵ Os quais mostram a obra da lei escrita em seus corações, testificando juntamente a sua consciência, e os seus pensamentos, quer acusando-os, quer defendendo-os;
¹⁶ No dia em que Deus há de julgar os segredos dos homens, por Jesus Cristo, segundo o meu evangelho.
¹⁷ Eis que tu que tens por sobrenome judeu, e repousas na lei, e te glorias em Deus;
¹⁸ E sabes a sua vontade e aprovas as coisas excelentes, sendo instruído por lei;
¹⁹ E confias que és guia dos cegos, luz dos que estão em trevas,
²⁰ Instrutor dos néscios, mestre de crianças, que tens a forma da ciência e da verdade na lei;
²¹ Tu, pois, que ensinas a outro, não te ensinas a ti mesmo? Tu, que pregas que não se deve furtar, furtas?
²² Tu, que dizes que não se deve adulterar, adulteras? Tu, que abominas os ídolos, cometes sacrilégio?
²³ Tu, que te glorias na lei, desonras a Deus pela transgressão da lei?
²⁴ Porque, como está escrito, o nome de Deus é blasfemado entre os gentios por causa de vós.
²⁵ Porque a circuncisão é, na verdade, proveitosa, se tu guardares a lei; mas, se tu és transgressor da lei, a tua circuncisão se torna em incircuncisão.
²⁶ Se, pois, a incircuncisão guardar os preceitos da lei, porventura a incircuncisão não será reputada como circuncisão?
²⁷ E a incircuncisão que por natureza o é, se cumpre a lei, não te julgará porventura a ti, que pela letra e circuncisão és transgressor da lei?
²⁸ Porque não é judeu o que o é exteriormente, nem é circuncisão a que o é exteriormente na carne.
²⁹ Mas é judeu o que o é no interior, e circuncisão a que é do coração, no espírito, não na letra; cujo louvor não provém dos homens, mas de Deus. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Segundo Romanos 2, Deus faz acepção de pessoas?",
                        opcoes: [
                            { numero: 1, texto: "Sim, apenas para os judeus", correta: false },
                            { numero: 2, texto: "Não há acepção de pessoas para com Deus", correta: true },
                            { numero: 3, texto: "Sim, para os que têm mais conhecimento", correta: false },
                            { numero: 4, texto: "Apenas para os romanos", correta: false }
                        ],
                        explicacao: "Romanos 2:11 - Porque, para com Deus, não há acepção de pessoas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Onde está escrita a obra da lei no coração dos gentios, segundo o capítulo 2?",
                        opcoes: [
                            { numero: 1, texto: "Em tábuas de pedra", correta: false },
                            { numero: 2, texto: "Nos livros de história", correta: false },
                            { numero: 3, texto: "Nos seus corações", correta: true },
                            { numero: 4, texto: "Nas leis civis de Roma", correta: false }
                        ],
                        explicacao: "Romanos 2:15 - Os quais mostram a obra da lei escrita em seus corações.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem é o verdadeiro judeu, de acordo com o ensino de Paulo em Romanos 2:29?",
                        opcoes: [
                            { numero: 1, texto: "Aquele que nasceu em Israel", correta: false },
                            { numero: 2, texto: "Aquele que fala hebraico", correta: false },
                            { numero: 3, texto: "Aquele que guarda todos os ritos externos", correta: false },
                            { numero: 4, texto: "Aquele que o é no interior, e a circuncisão é a do coração", correta: true }
                        ],
                        explicacao: "Romanos 2:29 - Mas é judeu o que o é no interior, e circuncisão a do coração, no espírito.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "A Universalidade do Pecado",
            texto: ` ¹ Qual é, pois, a vantagem do judeu? Ou qual a utilidade da circuncisão?
² Muita, em toda a maneira, porque, primeiramente, as palavras de Deus lhe foram confiadas.
³ Pois quê? Se alguns foram incrédulos, a sua incredulidade aniquilará a fidelidade de Deus?
⁴ De maneira nenhuma; sempre seja Deus verdadeiro, e todo o homem mentiroso; como está escrito: Para que sejas justificado em tuas palavras, e venças quando fores julgado.
⁵ E, se a nossa injustiça for causa da justiça de Deus, que diremos? Porventura será Deus injusto, trazendo ira sobre nós? (Falo como homem.)
⁶ De maneira nenhuma; de outro modo, como julgará Deus o mundo?
⁷ Mas, se pela minha mentira abundou mais a verdade de Deus para glória sua, por que sou eu ainda julgado também como pecador?
⁸ E por que não dizemos (como somos blasfemados, e como alguns dizem que dizemos): Façamos males, para que venham bens? A condenação desses é justa.
⁹ Pois quê? Somos nós mais excelentes? De maneira nenhuma, pois já dantes demonstramos que, tanto judeus como gregos, todos estão debaixo do pecado;
¹⁰ Como está escrito: Não há um justo, nem um sequer.
¹¹ Não há ninguém que entenda; não há ninguém que busque a Deus.
¹² Todos se extraviaram, e juntamente se fizeram inúteis. Não há quem faça o bem, não há nem um só.
¹³ A sua garganta é um sepulcro aberto; com as suas línguas tratam enganosamente; peçonha de áspides está debaixo de seus lábios;
¹⁴ Cuja boca está cheia de maldição e amargura.
¹⁵ Os seus pés são ligeiros para derramar sangue.
¹⁶ Em seus caminhos há destruição e miséria;
¹⁷ E não conheceram o caminho da paz.
¹⁸ Não há temor de Deus diante de seus olhos.
¹⁹ Ora, nós sabemos que tudo o que a lei diz, aos que estão debaixo da lei o diz, para que toda a boca esteja fechada e todo o mundo seja condenável diante de Deus.
²⁰ Por isso nenhuma carne será justificada diante dele pelas obras da lei, porque pela lei vem o conhecimento do pecado.
²¹ Mas agora se manifestou sem a lei a justiça de Deus, tendo o testemunho da lei e dos profetas;
²² Isto é, a justiça de Deus pela fé em Jesus Cristo para todos e sobre todos os que creem; porque não há diferença.
²³ Porque todos pecaram e destituídos estão da glória de Deus;
²⁴ Sendo justificados gratuitamente pela sua graça, pela redenção que há em Cristo Jesus.
²⁵ Ao qual Deus propôs para propiciação pela fé no seu sangue, para demonstrar a sua justiça pela remissão dos pecados dantes cometidos, sob a paciência de Deus;
²⁶ Para demonstração da sua justiça neste tempo presente, para que ele seja justo e justificador daquele que tem fé em Jesus.
²⁷ Onde está logo a vanglória? É excluída. Por qual lei? Das obras? Não; mas pela lei da fé.
²⁸ Concluímos, pois, que o homem é justificado pela fé sem as obras da lei.
²⁹ É porventura Deus somente dos judeus? E não o é também dos gentios? Também dos gentios, certamente,
³⁰ Visto que Deus é um só, que justifica pela fé a circuncisão, e por meio da fé a incircuncisão.
³¹ Anulamos, pois, a lei pela fé? De maneira nenhuma, antes estabelecemos a lei. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Segundo Romanos 3:10, quantos justos existem por si mesmos?",
                        opcoes: [
                            { numero: 1, texto: "Nenhum, nem um sequer", correta: true },
                            { numero: 2, texto: "Apenas os profetas", correta: false },
                            { numero: 3, texto: "Somente os apóstolos", correta: false },
                            { numero: 4, texto: "Cerca de dez em cada cidade", correta: false }
                        ],
                        explicacao: "Romanos 3:10 - Como está escrito: Não há um justo, nem um sequer.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é a condição de todos os homens em relação à glória de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Todos são dignos por natureza", correta: false },
                            { numero: 2, texto: "Todos pecaram e destituídos estão da glória de Deus", correta: true },
                            { numero: 3, texto: "Alguns pecaram, outros não", correta: false },
                            { numero: 4, texto: "A glória de Deus não se aplica aos homens", correta: false }
                        ],
                        explicacao: "Romanos 3:23 - Porque todos pecaram e destituídos estão da glória de Deus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como o homem é justificado perante Deus, segundo Romanos 3:28?",
                        opcoes: [
                            { numero: 1, texto: "Pela guarda estrita do sábado", correta: false },
                            { numero: 2, texto: "Pelas boas obras sociais", correta: false },
                            { numero: 3, texto: "Pelo sacrifício de animais", correta: false },
                            { numero: 4, texto: "Pela fé, sem as obras da lei", correta: true }
                        ],
                        explicacao: "Romanos 3:28 - Concluímos, pois, que o homem é justificado pela fé sem as obras da lei.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "O Exemplo de Abraão",
            texto: ` ¹ Que diremos, pois, ter alcançado Abraão, nosso pai segundo a carne?
² Porque, se Abraão foi justificado pelas obras, tem de que se gloriar, mas não diante de Deus.
³ Pois, que diz a Escritura? Creu Abraão em Deus, e isso lhe foi imputado como justiça.
⁴ Ora, àquele que faz qualquer obra não lhe é imputado o galardão segundo a graça, mas segundo a dívida.
⁵ Mas, àquele que não pratica, mas crê naquele que justifica o ímpio, a sua fé lhe é imputada como justiça.
⁶ Assim também Davi declara bem-aventurado o homem a quem Deus imputa a justiça sem as obras, dizendo:
⁷ Bem-aventurados aqueles cujas maldades são perdoadas, e cujos pecados são cobertos.
⁸ Bem-aventurado o homem a quem o Senhor não imputa o pecado.
⁹ Vem, pois, esta bem-aventurança sobre a circuncisão somente, ou também sobre a incircuncisão? Porque dizemos que a fé foi imputada como justiça a Abraão.
¹⁰ Como lhe foi, pois, imputada? Estando na circuncisão ou na incircuncisão? Não na circuncisão, mas na incircuncisão.
¹¹ E recebeu o sinal da circuncisão, selo da justiça da fé, quando estava na incircuncisão, para que fosse pai de todos os que creem, estando eles também na incircuncisão; a fim de que também a justiça lhes seja imputada;
¹² E fosse pai da circuncisão, daqueles que não somente são da circuncisão, mas que também andam nas pisadas daquela fé que teve nosso pai Abraão, que tivera na incircuncisão.
¹³ Porque a promessa de que havia de ser herdeiro do mundo não foi feita pela lei a Abraão, ou à sua posteridade, mas pela justiça da fé.
¹⁴ Porque, se os que são da lei são herdeiros, logo a fé é vã e a promessa é aniquilada.
¹⁵ Porque a lei opera a ira. Porque onde não há lei também não há transgressão.
¹⁶ Portanto, é pela fé, para que seja segundo a graça, a fim de que a promessa seja firme a toda a posteridade, não somente à que é da lei, mas também à que é da fé que teve Abraão, o qual é pai de todos nós,
¹⁷ (Como está escrito: Por pai de muitas nações te constituí) perante aquele no qual creu, a saber, Deus, o qual vivifica os mortos, e chama as coisas que não são como se já fossem.
¹⁸ O qual, em esperança, creu contra a esperança, tanto que ele tornou-se pai de muitas nações, conforme o que lhe fora dito: Assim será a tua descendência.
¹⁹ E não enfraquecendo na fé, não atentou para o seu próprio corpo já amortecido, pois era já de quase cem anos, nem tampouco para o amortecimento do ventre de Sara.
²⁰ E não duvidou da promessa de Deus por incredulidade, mas foi fortificado na fé, dando glória a Deus,
²¹ E estando certíssimo de que o que ele tinha prometido também era poderoso para o fazer.
²² Assim isso lhe foi também imputado como justiça.
²³ Ora, não só por causa dele está escrito, que lhe fosse tomado em conta,
²⁴ Mas também por nós, a quem será tomado em conta, os que cremos naquele que dentre os mortos ressuscitou a Jesus nosso Senhor;
²⁵ O qual por nossos pecados foi entregue, e ressuscitou para nossa justificação. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que foi imputado a Abraão como justiça?",
                        opcoes: [
                            { numero: 1, texto: "O fato de ele ter crido em Deus", correta: true },
                            { numero: 2, texto: "Sua saída de Ur dos Caldeus", correta: false },
                            { numero: 3, texto: "Sua riqueza e gado", correta: false },
                            { numero: 4, texto: "Sua descendência numerosa", correta: false }
                        ],
                        explicacao: "Romanos 4:3 - Pois, que diz a Escritura? Creu Abraão a Deus, e isso lhe foi imputado como justiça.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Abraão foi justificado quando estava na circuncisão ou na incircuncisão?",
                        opcoes: [
                            { numero: 1, texto: "Na circuncisão", correta: false },
                            { numero: 2, texto: "Na incircuncisão", correta: true },
                            { numero: 3, texto: "Após a morte de Isaque", correta: false },
                            { numero: 4, texto: "No momento em que entrou em Canaã", correta: false }
                        ],
                        explicacao: "Romanos 4:10 - Como, pois, lhe foi imputada? Estando na circuncisão ou na incircuncisão? Não na circuncisão, mas na incircuncisão.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como Paulo descreve a fé de Abraão em relação à esperança?",
                        opcoes: [
                            { numero: 1, texto: "Ele esperou apenas no que via", correta: false },
                            { numero: 2, texto: "Ele duvidou da promessa", correta: false },
                            { numero: 3, texto: "Ele não teve esperança", correta: false },
                            { numero: 4, texto: "Ele creu contra a esperança", correta: true }
                        ],
                        explicacao: "Romanos 4:18 - O qual, em esperança, creu contra a esperança, para vir a ser pai de muitas nações.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "Resultados da Justificação",
            texto: `¹ Tendo sido, pois, justificados pela fé, temos paz com Deus, por nosso Senhor Jesus Cristo;
² Pelo qual também temos entrada pela fé a esta graça, na qual estamos firmes, e nos gloriamos na esperança da glória de Deus.
³ E não somente isto, mas também nos gloriamos nas tribulações; sabendo que a tribulação produz a paciência,
⁴ E a paciência a experiência, e a experiência a esperança.
⁵ E a esperança não traz confusão, porquanto o amor de Deus está derramado em nossos corações pelo Espírito Santo que nos foi dado.
⁶ Porque Cristo, estando nós ainda fracos, morreu a seu tempo pelos ímpios.
⁷ Porque apenas alguém morrerá por um justo; pois poderá ser que pelo bom alguém ouse morrer.
⁸ Mas Deus prova o seu amor para conosco, em que Cristo morreu por nós, sendo nós ainda pecadores.
⁹ Logo muito mais agora, tendo sido justificados pelo seu sangue, seremos por ele salvos da ira.
¹⁰ Porque se nós, sendo inimigos, fomos reconciliados com Deus pela morte de seu Filho, muito mais, tendo sido já reconciliados, seremos salvos pela sua vida.
¹¹ E não somente isto, mas também nos gloriamos em Deus por nosso Senhor Jesus Cristo, pelo qual agora alcançamos a reconciliação.
¹² Portanto, como por um homem entrou o pecado no mundo, e pelo pecado a morte, assim também a morte passou a todos os homens por isso que todos pecaram.
¹³ Porque até à lei estava o pecado no mundo, mas o pecado não é imputado, não havendo lei.
¹⁴ No entanto, a morte reinou desde Adão até Moisés, até sobre aqueles que não tinham pecado à semelhança da transgressão de Adão, o qual é a figura daquele que havia de vir.
¹⁵ Mas não é assim o dom gratuito como a ofensa. Porque, se pela ofensa de um morreram muitos, muito mais a graça de Deus, e o dom pela graça, que é de um só homem, Jesus Cristo, abundou sobre muitos.
¹⁶ E não foi assim o dom como a ofensa, por um só que pecou. Porque o juízo veio de uma só ofensa, na verdade, para condenação, mas o dom gratuito veio de muitas ofensas para justificação.
¹⁷ Porque, se pela ofensa de um só, a morte reinou por esse, muito mais os que recebem a abundância da graça, e do dom da justiça, reinarão em vida por um só, Jesus Cristo.
¹⁸ Pois assim como por uma só ofensa veio o juízo sobre todos os homens para condenação, assim também por um só ato de justiça veio a graça sobre todos os homens para justificação de vida.
¹⁹ Porque, como pela desobediência de um só homem, muitos foram feitos pecadores, assim pela obediência de um muitos serão feitos justos.
²⁰ Veio, porém, a lei para que a ofensa abundasse; mas, onde o pecado abundou, superabundou a graça;
²¹ Para que, assim como o pecado reinou na morte, também a graça reinasse pela justiça para a vida eterna, por Jesus Cristo nosso Senhor. 
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que temos com Deus sendo justificados pela fé?",
                        opcoes: [
                            { numero: 1, texto: "Paz com Deus, por nosso Senhor Jesus Cristo", correta: true },
                            { numero: 2, texto: "Dúvidas sobre o futuro", correta: false },
                            { numero: 3, texto: "Isenção de qualquer sofrimento", correta: false },
                            { numero: 4, texto: "Riquezas materiais imediatas", correta: false }
                        ],
                        explicacao: "Romanos 5:1 - Sendo, pois, justificados pela fé, temos paz com Deus, por nosso Senhor Jesus Cristo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como Deus prova o seu amor para conosco, segundo Romanos 5:8?",
                        opcoes: [
                            { numero: 1, texto: "Dando-nos uma vida longa", correta: false },
                            { numero: 2, texto: "Cristo morreu por nós, sendo nós ainda pecadores", correta: true },
                            { numero: 3, texto: "Respondendo a todas as orações como queremos", correta: false },
                            { numero: 4, texto: "Evitando que o homem peque", correta: false }
                        ],
                        explicacao: "Romanos 5:8 - Mas Deus prova o seu amor para conosco, em que Cristo morreu por nós, sendo nós ainda pecadores.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por intermédio de quem entrou o pecado no mundo?",
                        opcoes: [
                            { numero: 1, texto: "Por um só homem (Adão)", correta: true },
                            { numero: 2, texto: "Por um grupo de anjos", correta: false },
                            { numero: 3, texto: "Pela serpente sozinha", correta: false },
                            { numero: 4, texto: "Pelo rei Herodes", correta: false }
                        ],
                        explicacao: "Romanos 5:12 - Portanto, como por um homem entrou o pecado no mundo, e pelo pecado a morte...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "Mortos para o Pecado, Vivos para Deus",
            texto: ` ¹ Que diremos pois? Permaneceremos no pecado, para que a graça abunde?
² De modo nenhum. Nós, que estamos mortos para o pecado, como viveremos ainda nele?
³ Ou não sabeis que todos quantos fomos batizados em Jesus Cristo fomos batizados na sua morte?
⁴ De sorte que fomos sepultados com ele pelo batismo na morte; para que, como Cristo foi ressuscitado dentre os mortos, pela glória do Pai, assim andemos nós também em novidade de vida.
⁵ Porque, se fomos plantados juntamente com ele na semelhança da sua morte, também o seremos na da sua ressurreição;
⁶ Sabendo isto, que o nosso homem velho foi com ele crucificado, para que o corpo do pecado seja desfeito, para que não sirvamos mais ao pecado.
⁷ Porque aquele que está morto está justificado do pecado.
⁸ Ora, se já morremos com Cristo, cremos que também com ele viveremos;
⁹ Sabendo que, tendo sido Cristo ressuscitado dentre os mortos, já não morre; a morte não mais tem domínio sobre ele.
¹⁰ Pois, quanto a ter morrido, de uma vez morreu para o pecado; mas, quanto a viver, vive para Deus.
¹¹ Assim também vós considerai-vos certamente mortos para o pecado, mas vivos para Deus em Cristo Jesus nosso Senhor.
¹² Não reine, portanto, o pecado em vosso corpo mortal, para lhe obedecerdes em suas concupiscências;
¹³ Nem tampouco apresenteis os vossos membros ao pecado por instrumentos de iniquidade; mas apresentai-vos a Deus, como vivos dentre mortos, e os vossos membros a Deus, como instrumentos de justiça.
¹⁴ Porque o pecado não terá domínio sobre vós, pois não estais debaixo da lei, mas debaixo da graça.
¹⁵ Pois quê? Pecaremos porque não estamos debaixo da lei, mas debaixo da graça? De modo nenhum.
¹⁶ Não sabeis vós que a quem vos apresentardes por servos para lhe obedecer, sois servos daquele a quem obedeceis, ou do pecado para a morte, ou da obediência para a justiça?
¹⁷ Mas graças a Deus que, tendo sido servos do pecado, obedecestes de coração à forma de doutrina a que fostes entregues.
¹⁸ E, libertados do pecado, fostes feitos servos da justiça.
¹⁹ Falo como homem, pela fraqueza da vossa carne; pois que, assim como apresentastes os vossos membros para servirem à imundícia, e à maldade para maldade, assim apresentai agora os vossos membros para servirem à justiça para santificação.
²⁰ Porque, quando éreis servos do pecado, estáveis livres da justiça.
²¹ E que fruto tínheis então das coisas de que agora vos envergonhais? Porque o fim delas é a morte.
²² Mas agora, libertados do pecado, e feitos servos de Deus, tendes o vosso fruto para santificação, e por fim a vida eterna.
²³ Porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna, por Cristo Jesus nosso Senhor. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que acontece conosco no batismo em relação à morte de Cristo?",
                        opcoes: [
                            { numero: 1, texto: "Somos apenas lavados da sujeira física", correta: false },
                            { numero: 2, texto: "Ficamos famosos", correta: false },
                            { numero: 3, texto: "Somos batizados na sua morte", correta: true },
                            { numero: 4, texto: "Recebemos um novo nome civil", correta: false }
                        ],
                        explicacao: "Romanos 6:3 - Ou não sabeis que todos quantos fomos batizados em Jesus Cristo fomos batizados na sua morte?",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é o salário do pecado segundo Romanos 6:23?",
                        opcoes: [
                            { numero: 1, texto: "A pobreza", correta: false },
                            { numero: 2, texto: "A morte", correta: true },
                            { numero: 3, texto: "A tristeza passageira", correta: false },
                            { numero: 4, texto: "O cansaço", correta: false }
                        ],
                        explicacao: "Romanos 6:23 - Porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O pecado deve ter domínio sobre o crente?",
                        opcoes: [
                            { numero: 1, texto: "Sim, até a morte", correta: false },
                            { numero: 2, texto: "Não, pois não estais debaixo da lei, mas da graça", correta: true },
                            { numero: 3, texto: "Apenas se o crente permitir", correta: false },
                            { numero: 4, texto: "Sim, nos dias de fraqueza", correta: false }
                        ],
                        explicacao: "Romanos 6:14 - Porque o pecado não terá domínio sobre vós, pois não estais debaixo da lei, mas debaixo da graça.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        7: {
            titulo: "A Luta contra a Carne",
            texto: `¹ Não sabeis vós, irmãos (pois que falo aos que sabem a lei), que a lei tem domínio sobre o homem por todo o tempo que vive?
² Porque a mulher que está sujeita ao marido, enquanto ele viver, está-lhe ligada pela lei; mas, morto o marido, está livre da lei do marido.
³ De sorte que, vivendo o marido, será chamada adúltera se for de outro homem; mas, morto o marido, livre está da lei, e assim não será adúltera, se for de outro marido.
⁴ Assim, meus irmãos, também vós estais mortos para a lei pelo corpo de Cristo, para que sejais de outro, daquele que ressuscitou dentre os mortos, a fim de que demos fruto para Deus.
⁵ Porque, quando estávamos na carne, as paixões dos pecados, que são pela lei, operavam em nossos membros para darem fruto para a morte.
⁶ Mas agora temos sido libertados da lei, tendo morrido para aquilo em que estávamos retidos; para que sirvamos em novidade de espírito, e não na velhice da letra.
⁷ Que diremos pois? É a lei pecado? De modo nenhum. Mas eu não conheci o pecado senão pela lei; porque eu não conheceria a concupiscência, se a lei não dissesse: Não cobiçarás.
⁸ Mas o pecado, tomando ocasião pelo mandamento, operou em mim toda a concupiscência; porquanto sem a lei estava morto o pecado.
⁹ E eu, nalgum tempo, vivia sem lei, mas, vindo o mandamento, reviveu o pecado, e eu morri.
¹⁰ E o mandamento que era para vida, achei eu que me era para morte.
¹¹ Porque o pecado, tomando ocasião pelo mandamento, me enganou, e por ele me matou.
¹² E assim a lei é santa, e o mandamento santo, justo e bom.
¹³ Logo tornou-se-me o bom em morte? De modo nenhum; mas o pecado, para que se mostrasse pecado, operou em mim a morte pelo bem; a fim de que pelo mandamento o pecado se fizesse excessivamente maligno.
¹⁴ Porque bem sabemos que a lei é espiritual; mas eu sou carnal, vendido sob o pecado.
¹⁵ Porque o que faço não o aprovo; pois o que quero isso não faço, mas o que aborreço isso faço.
¹⁶ E, se faço o que não quero, consinto com a lei, que é boa.
¹⁷ De maneira que agora já não sou eu que faço isto, mas o pecado que habita em mim.
¹⁸ Porque eu sei que em mim, isto é, na minha carne, não habita bem algum; e com efeito o querer está em mim, mas não consigo realizar o bem.
¹⁹ Porque não faço o bem que quero, mas o mal que não quero esse faço.
²⁰ Ora, se eu faço o que não quero, já o não faço eu, mas o pecado que habita em mim.
²¹ Acho então esta lei em mim, que, quando quero fazer o bem, o mal está comigo.
²² Porque, segundo o homem interior, tenho prazer na lei de Deus;
²³ Mas vejo nos meus membros outra lei, que batalha contra a lei do meu entendimento, e me prende debaixo da lei do pecado que está nos meus membros.
²⁴ Miserável homem que eu sou! Quem me livrará do corpo desta morte?
²⁵ Dou graças a Deus por Jesus Cristo nosso Senhor. Assim que eu mesmo com o entendimento sirvo à lei de Deus, mas com a carne à lei do pecado. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "A lei é pecado?",
                        opcoes: [
                            { numero: 1, texto: "De modo nenhum! Mas eu não conheci o pecado senão pela lei", correta: true },
                            { numero: 2, texto: "Sim, a lei foi feita para pecar", correta: false },
                            { numero: 3, texto: "A lei é indiferente", correta: false },
                            { numero: 4, texto: "Apenas a lei de Moisés é pecado", correta: false }
                        ],
                        explicacao: "Romanos 7:7 - Que diremos, pois? É a lei pecado? De modo nenhum! Mas eu não conheci o pecado senão pela lei.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Paulo diz sobre o bem que quer fazer?",
                        opcoes: [
                            { numero: 1, texto: "Que ele sempre consegue fazer o bem", correta: false },
                            { numero: 2, texto: "Que o bem é fácil de praticar", correta: false },
                            { numero: 3, texto: "Porque não faço o bem que quero, mas o mal que não quero, esse faço", correta: true },
                            { numero: 4, texto: "Que o bem e o mal são a mesma coisa", correta: false }
                        ],
                        explicacao: "Romanos 7:19 - Porque não faço o bem que quero, mas o mal que não quero, esse faço.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual exclamação de angústia Paulo faz no versículo 24?",
                        opcoes: [
                            { numero: 1, texto: "Miserável homem que eu sou! quem me livrará do corpo desta morte?", correta: true },
                            { numero: 2, texto: "Como sou forte em mim mesmo!", correta: false },
                            { numero: 3, texto: "Estou feliz com minha natureza", correta: false },
                            { numero: 4, texto: "Adeus mundo cruel", correta: false }
                        ],
                        explicacao: "Romanos 7:24 - Miserável homem que eu sou! quem me livrará do corpo desta morte?",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        8: {
            titulo: "A Vida no Espírito",
            texto: ` ¹ Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus, que não andam segundo a carne, mas segundo o Espírito.
² Porque a lei do Espírito de vida, em Cristo Jesus, me livrou da lei do pecado e da morte.
³ Porquanto o que era impossível à lei, visto como estava enferma pela carne, Deus, enviando o seu Filho em semelhança da carne do pecado, pelo pecado condenou o pecado na carne;
⁴ Para que a justiça da lei se cumprisse em nós, que não andamos segundo a carne, mas segundo o Espírito.
⁵ Porque os que são segundo a carne inclinam-se para as coisas da carne; mas os que são segundo o Espírito para as coisas do Espírito.
⁶ Porque a inclinação da carne é morte; mas a inclinação do Espírito é vida e paz.
⁷ Porquanto a inclinação da carne é inimizade contra Deus, pois não é sujeita à lei de Deus, nem, em verdade, o pode ser.
⁸ Portanto, os que estão na carne não podem agradar a Deus.
⁹ Vós, porém, não estais na carne, mas no Espírito, se é que o Espírito de Deus habita em vós. Mas, se alguém não tem o Espírito de Cristo, esse tal não é dele.
¹⁰ E, se Cristo está em vós, o corpo, na verdade, está morto por causa do pecado, mas o espírito vive por causa da justiça.
¹¹ E, se o Espírito daquele que dentre os mortos ressuscitou a Jesus habita em vós, aquele que dentre os mortos ressuscitou a Cristo também vivificará os vossos corpos mortais, pelo seu Espírito que em vós habita.
¹² De maneira que, irmãos, somos devedores, não à carne para viver segundo a carne.
¹³ Porque, se viverdes segundo a carne, morrereis; mas, se pelo Espírito mortificardes as obras do corpo, vivereis.
¹⁴ Porque todos os que são guiados pelo Espírito de Deus, esses são filhos de Deus.
¹⁵ Porque não recebestes o espírito de escravidão, para outra vez estardes em temor, mas recebestes o Espírito de adoção de filhos, pelo qual clamamos: Aba, Pai.
¹⁶ O próprio Espírito testifica com o nosso espírito que somos filhos de Deus.
¹⁷ E, se nós somos filhos, somos logo herdeiros também, verdadeiramente herdeiros de Deus, e co-herdeiros de Cristo: se é certo que com ele padecemos, para que também com ele sejamos glorificados.
¹⁸ Porque para mim tenho por certo que as aflições deste tempo presente não são para comparar com a glória que em nós há de ser revelada.
¹⁹ Porque a ardente expectação da criatura espera a manifestação dos filhos de Deus.
²⁰ Porque a criação ficou sujeita à vaidade, não por sua vontade, mas por causa do que a sujeitou,
²¹ Na esperança de que também a mesma criatura será libertada da servidão da corrupção, para a liberdade da glória dos filhos de Deus.
²² Porque sabemos que toda a criação geme e está juntamente com dores de parto até agora.
²³ E não só ela, mas nós mesmos, que temos as primícias do Espírito, também gememos em nós mesmos, esperando a adoção, a saber, a redenção do nosso corpo.
²⁴ Porque em esperança fomos salvos. Ora a esperança que se vê não é esperança; porque o que alguém vê como também o esperará?
²⁵ Mas, se esperamos o que não vemos, com paciência o esperamos.
²⁶ E da mesma maneira também o Espírito ajuda as nossas fraquezas; porque não sabemos o que havemos de pedir como convém, mas o mesmo Espírito intercede por nós com gemidos inexprimíveis.
²⁷ E aquele que examina os corações sabe qual é a intenção do Espírito; e é ele que segundo Deus intercede pelos santos.
²⁸ E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.
²⁹ Porque os que dantes conheceu também os predestinou para serem conformes à imagem de seu Filho, a fim de que ele seja o primogênito entre muitos irmãos.
³⁰ E aos que predestinou a estes também chamou; e aos que chamou a estes também justificou; e aos que justificou a estes também glorificou.
³¹ Que diremos, pois, a estas coisas? Se Deus é por nós, quem será contra nós?
³² Aquele que nem mesmo a seu próprio Filho poupou, antes o entregou por todos nós, como nos não dará também com ele todas as coisas?
³³ Quem intentará acusação contra os escolhidos de Deus? É Deus quem os justifica.
³⁴ Quem é que condena? Pois é Cristo quem morreu, ou antes quem ressuscitou dentre os mortos, o qual está à direita de Deus, e o que também intercede por nós.
³⁵ Quem nos separará do amor de Cristo? A tribulação, ou a angústia, ou a perseguição, ou a fome, ou a nudez, ou o perigo, ou a espada?
³⁶ Como está escrito: Por amor de ti somos entregues à morte todo o dia; somos reputados como ovelhas para o matadouro.
³⁷ Mas em todas estas coisas somos mais do que vencedores, por aquele que nos amou.
³⁸ Porque estou certo de que, nem a morte, nem a vida, nem os anjos, nem os principados, nem as potestades, nem o presente, nem o porvir,
³⁹ Nem a altura, nem a profundidade, nem alguma outra criatura nos poderá separar do amor de Deus, que está em Cristo Jesus nosso Senhor. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Há alguma condenação para os que estão em Cristo Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Sim, para os que falham", correta: false },
                            { numero: 2, texto: "Agora, pois, nenhuma condenação há", correta: true },
                            { numero: 3, texto: "Depende do dia", correta: false },
                            { numero: 4, texto: "Apenas condenação parcial", correta: false }
                        ],
                        explicacao: "Romanos 8:1 - Portanto, agora, nenhuma condenação há para os que estão em Cristo Jesus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontece com todas as coisas para aqueles que amam a Deus?",
                        opcoes: [
                            { numero: 1, texto: "Tornam-se difíceis", correta: false },
                            { numero: 2, texto: "Ficam na mesma", correta: false },
                            { numero: 3, texto: "Todas as coisas contribuem juntamente para o bem", correta: true },
                            { numero: 4, texto: "Desaparecem com o tempo", correta: false }
                        ],
                        explicacao: "Romanos 8:28 - E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que pode nos separar do amor de Cristo?",
                        opcoes: [
                            { numero: 1, texto: "A morte e a vida", correta: false },
                            { numero: 2, texto: "Os anjos ou principados", correta: false },
                            { numero: 3, texto: "A fome ou a nudez", correta: false },
                            { numero: 4, texto: "Nenhuma criatura nos poderá separar", correta: true }
                        ],
                        explicacao: "Romanos 8:39 - Nem a altura, nem a profundidade, nem alguma outra criatura nos poderá separar do amor de Deus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // Continuação de js/livros/romanos.js (Capítulos 9 a 16)

        9: {
            titulo: "A Eleição de Israel",
            texto: ` ¹ Em Cristo digo a verdade, não minto (dando-me testemunho a minha consciência no Espírito Santo):
² Que tenho grande tristeza e contínua dor no meu coração.
³ Porque eu mesmo poderia desejar ser anátema de Cristo, por amor de meus irmãos, que são meus parentes segundo a carne;
⁴ Que são israelitas, dos quais é a adoção de filhos, e a glória, e as alianças, e a lei, e o culto, e as promessas;
⁵ Dos quais são os pais, e dos quais é Cristo segundo a carne, o qual é sobre todos, Deus bendito eternamente. Amém.
⁶ Não que a palavra de Deus haja faltado, porque nem todos os que são de Israel são de Israel;
⁷ Nem por serem descendência de Abraão são todos filhos; mas: Em Isaque será chamada a tua descendência.
⁸ Isto é, não são os filhos da carne que são filhos de Deus, mas os filhos da promessa são contados como descendência.
⁹ Porque a palavra da promessa é esta: Por este tempo virei, e Sara terá um filho.
¹⁰ E não somente esta, mas também Rebeca, quando concebeu de um, de Isaque, nosso pai;
¹¹ Porque, não tendo eles ainda nascido, nem tendo feito bem ou mal (para que o propósito de Deus, segundo a eleição, ficasse firme, não por causa das obras, mas por aquele que chama),
¹² Foi-lhe dito a ela: O maior servirá ao menor.
¹³ Como está escrito: Amei a Jacó, e odiei a Esaú.
¹⁴ Que diremos pois? Que há injustiça da parte de Deus? De maneira nenhuma.
¹⁵ Pois diz a Moisés: Compadecer-me-ei de quem me compadecer, e terei misericórdia de quem eu tiver misericórdia.
¹⁶ Assim, pois, isto não depende do que quer, nem do que corre, mas de Deus, que se compadece.
¹⁷ Porque diz a Escritura a Faraó: Para isto mesmo te levantei; para em ti mostrar o meu poder, e para que o meu nome seja anunciado em toda a terra.
¹⁸ Logo, pois, compadece-se de quem quer, e endurece a quem quer.
¹⁹ Dir-me-ás então: Por que se queixa ele ainda? Porquanto, quem tem resistido à sua vontade?
²⁰ Mas, ó homem, quem és tu, que a Deus replicas? Porventura a coisa formada dirá ao que a formou: Por que me fizeste assim?
²¹ Ou não tem o oleiro poder sobre o barro, para da mesma massa fazer um vaso para honra e outro para desonra?
²² E que direis se Deus, querendo mostrar a sua ira, e dar a conhecer o seu poder, suportou com muita paciência os vasos da ira, preparados para a perdição;
²³ Para que também desse a conhecer as riquezas da sua glória nos vasos de misericórdia, que para glória já dantes preparou,
²⁴ Os quais somos nós, a quem também chamou, não só dentre os judeus, mas também dentre os gentios?
²⁵ Como também diz em Oseias: Chamarei meu povo ao que não era meu povo; e amada à que não era amada.
²⁶ E sucederá que no lugar em que lhes foi dito: Vós não sois meu povo; aí serão chamados filhos do Deus vivo.
²⁷ Também Isaías clama acerca de Israel: Ainda que o número dos filhos de Israel seja como a areia do mar, o remanescente é que será salvo.
²⁸ Porque ele completará a obra e abreviá-la-á em justiça; porque o Senhor fará breve a obra sobre a terra.
²⁹ E como antes disse Isaías: Se o Senhor dos Exércitos nos não deixara descendência, teríamos nos tornado como Sodoma, e teríamos sido feitos como Gomorra.
³⁰ Que diremos pois? Que os gentios, que não buscavam a justiça, alcançaram a justiça? Sim, mas a justiça que é pela fé.
³¹ Mas Israel, que buscava a lei da justiça, não chegou à lei da justiça.
³² Por quê? Porque não foi pela fé, mas como que pelas obras da lei; pois tropeçaram na pedra de tropeço;
³³ Como está escrito: Eis que eu ponho em Sião uma pedra de tropeço, e uma rocha de escândalo; e todo aquele que crer nela não será confundido. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Sobre quem Deus diz que terá misericórdia, segundo Romanos 9:15?",
                        opcoes: [
                            { numero: 1, texto: "Sobre quem Ele quiser ter misericórdia", correta: true },
                            { numero: 2, texto: "Apenas sobre os que nunca erraram", correta: false },
                            { numero: 3, texto: "Sobre os que pagam dízimos", correta: false },
                            { numero: 4, texto: "Sobre os que nasceram em Roma", correta: false }
                        ],
                        explicacao: "Romanos 9:15 - Pois diz a Moisés: Terei misericórdia de quem eu tiver misericórdia.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como Paulo descreve a soberania de Deus usando a figura do oleiro?",
                        opcoes: [
                            { numero: 1, texto: "O barro pode questionar o oleiro", correta: false },
                            { numero: 2, texto: "O oleiro não tem poder sobre o barro", correta: false },
                            { numero: 3, texto: "O oleiro tem poder sobre o barro para fazer um vaso para honra e outro para desonra", correta: true },
                            { numero: 4, texto: "O barro faz a si mesmo", correta: false }
                        ],
                        explicacao: "Romanos 9:21 - Ou não tem o oleiro poder sobre o barro, para da mesma massa fazer um vaso para honra e outro para desonra?",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é a 'pedra de tropeço' mencionada no final do capítulo 9?",
                        opcoes: [
                            { numero: 1, texto: "A estátua de César", correta: false },
                            { numero: 2, texto: "Cristo (em Sião)", correta: true },
                            { numero: 3, texto: "O muro do templo", correta: false },
                            { numero: 4, texto: "A lei de Moisés", correta: false }
                        ],
                        explicacao: "Romanos 9:33 - Eis que eu ponho em Sião uma pedra de tropeço e uma rocha de escândalo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        10: {
            titulo: "A Salvação para Todos",
            texto: ` ¹ Irmãos, o bom desejo do meu coração e a oração a Deus por Israel é para sua salvação.
² Porque lhes dou testemunho de que têm zelo de Deus, mas não com entendimento.
³ Porquanto, não conhecendo a justiça de Deus, e procurando estabelecer a sua própria justiça, não se sujeitaram à justiça de Deus.
⁴ Porque o fim da lei é Cristo para justiça de todo aquele que crê.
⁵ Ora, Moisés descreve a justiça que é pela lei, dizendo: O homem que fizer estas coisas viverá por elas.
⁶ Mas a justiça que é pela fé diz assim: Não digas em teu coração: Quem subirá ao céu? (isto é, a trazer do alto a Cristo.)
⁷ Ou: Quem descerá ao abismo? (isto é, a tornar a trazer dentre os mortos a Cristo.)
⁸ Mas que diz? A palavra está junto de ti, na tua boca e no teu coração; esta é a palavra da fé, que pregamos,
⁹ A saber: Se com a tua boca confessares ao Senhor Jesus, e em teu coração creres que Deus o ressuscitou dentre os mortos, serás salvo.
¹⁰ Visto que com o coração se crê para a justiça, e com a boca se faz confissão para a salvação.
¹¹ Porque a Escritura diz: Todo aquele que nele crer não será confundido.
¹² Porquanto não há diferença entre judeu e grego; porque um mesmo é o Senhor de todos, rico para com todos os que o invocam.
¹³ Porque todo aquele que invocar o nome do Senhor será salvo.
¹⁴ Como, pois, invocarão aquele em quem não creram? E como crerão naquele de quem não ouviram? E como ouvirão, se não há quem pregue?
¹⁵ E como pregarão, se não forem enviados? Como está escrito: Quão formosos os pés dos que anunciam o evangelho de paz; dos que trazem alegres novas de boas coisas.
¹⁶ Mas nem todos têm obedecido ao evangelho; pois Isaías diz: Senhor, quem creu na nossa pregação?
¹⁷ De sorte que a fé é pelo ouvir, e o ouvir pela palavra de Deus.
¹⁸ Mas digo: Porventura não ouviram? Sim, por certo, pois por toda a terra saiu a voz deles, e as suas palavras até aos confins do mundo.
¹⁹ Mas digo: Porventura Israel não o soube? Primeiramente diz Moisés: Eu vos porei em ciúmes com aqueles que não são povo, com gente insensata vos provocarei à ira.
²⁰ E Isaías ousadamente diz: Fui achado pelos que não me buscavam, fui manifestado aos que por mim não perguntavam.
²¹ Mas para Israel diz: Todo o dia estendi as minhas mãos a um povo rebelde e contradizente. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que é necessário fazer com a boca e o coração para ser salvo, segundo Romanos 10:9?",
                        opcoes: [
                            { numero: 1, texto: "Cantar hinos e bater palmas", correta: false },
                            { numero: 2, texto: "Confessar a Jesus com a boca e crer no coração que Deus o ressuscitou", correta: true },
                            { numero: 3, texto: "Gritar o nome de Israel", correta: false },
                            { numero: 4, texto: "Ficar em silêncio absoluto", correta: false }
                        ],
                        explicacao: "Romanos 10:9 - A saber: Se com a tua boca confessares ao Senhor Jesus, e em teu coração creres que Deus o ressuscitou dos mortos, serás salvo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "De onde vem a fé, de acordo com Romanos 10:17?",
                        opcoes: [
                            { numero: 1, texto: "Dos sonhos", correta: false },
                            { numero: 2, texto: "Do estudo da ciência", correta: false },
                            { numero: 3, texto: "De ouvir a palavra de Deus", correta: true },
                            { numero: 4, texto: "Da vontade humana", correta: false }
                        ],
                        explicacao: "Romanos 10:17 - De sorte que a fé é pelo ouvir, e o ouvir pela palavra de Deus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem será salvo, segundo a promessa citada no versículo 13?",
                        opcoes: [
                            { numero: 1, texto: "Aquele que invocar o nome do Senhor", correta: true },
                            { numero: 2, texto: "Aquele que for perfeito", correta: false },
                            { numero: 3, texto: "Apenas os descendentes de Levi", correta: false },
                            { numero: 4, texto: "Aquele que conhecer toda a história de Roma", correta: false }
                        ],
                        explicacao: "Romanos 10:13 - Porque todo aquele que invocar o nome do Senhor será salvo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        11: {
            titulo: "A Oliveira e a Graça",
            texto: ` ¹ Digo, pois: Porventura rejeitou Deus o seu povo? De modo nenhum; porque também eu sou israelita, da descendência de Abraão, da tribo de Benjamim.
² Deus não rejeitou o seu povo, que antes conheceu. Ou não sabeis o que a Escritura diz de Elias, como fala a Deus contra Israel, dizendo:
³ Senhor, mataram os teus profetas, e destruíram os teus altares; e só eu fiquei, e buscam a minha alma?
⁴ Mas que lhe diz a resposta divina? Reservei para mim sete mil homens, que não dobraram os joelhos a Baal.
⁵ Assim, pois, também agora neste tempo ficou um remanescente, segundo a eleição da graça.
⁶ Mas se é por graça, já não é pelas obras; de outra maneira, a graça já não é graça. Se, porém, é pelas obras, já não é mais graça; de outra maneira a obra já não é obra.
⁷ Pois quê? O que Israel buscava não o alcançou; mas os eleitos o alcançaram, e os outros foram endurecidos.
⁸ Como está escrito: Deus lhes deu espírito de profundo sono, olhos para não verem, e ouvidos para não ouvirem, até ao dia de hoje.
⁹ E Davi diz: Torne-se-lhes a sua mesa em laço, e em armadilha, e em tropeço, por sua retribuição;
¹⁰ Escureçam-se-lhes os olhos para não verem, e encurvem-se-lhes continuamente as costas.
¹¹ Digo, pois: Porventura tropeçaram, para que caíssem? De modo nenhum, mas pela sua queda veio a salvação aos gentios, para os incitar ao ciúmes.
¹² E se a sua queda é a riqueza do mundo, e a sua diminuição a riqueza dos gentios, quanto mais a sua plenitude!
¹³ Porque convosco falo, gentios, que, enquanto for apóstolo dos gentios, exalto o meu ministério;
¹⁴ Para ver se de alguma maneira posso incitar ao ciúmes os da minha carne e salvar alguns deles.
¹⁵ Porque, se a sua rejeição é a reconciliação do mundo, qual será a sua admissão, senão a vida dentre os mortos?
¹⁶ E, se as primícias são santas, também a massa o é; se a raiz é santa, também os ramos o são.
¹⁷ E se alguns dos ramos foram quebrados, e tu, sendo oliveira brava, foste enxertado em lugar deles, e feito participante da raiz e da seiva da oliveira,
¹⁸ Não te glories contra os ramos; e, se contra eles te gloriares, não és tu que sustentas a raiz, mas a raiz a ti.
¹⁹ Dirás, pois: Os ramos foram quebrados, para que eu fosse enxertado.
²⁰ Está bem; pela sua incredulidade foram quebrados, e tu estás em pé pela fé. Então não te ensoberbeças, mas teme.
²¹ Porque, se Deus não poupou os ramos naturais, teme que não te poupe a ti também.
²² Considera, pois, a bondade e a severidade de Deus: para com os que caíram, severidade; mas para contigo, benignidade, se permaneceres na sua benignidade; de outra maneira também tu serás cortado.
²³ E também eles, se não permanecerem na incredulidade, serão enxertados; porque poderoso é Deus para os tornar a enxertar.
²⁴ Porque, se tu foste cortado da natural oliveira brava e, contra a natureza, enxertado na boa oliveira, quanto mais esses, que são naturais, serão enxertados na sua própria oliveira!
²⁵ Porque não quero, irmãos, que ignoreis este segredo (para que não sejais sábios em vós mesmos): que o endurecimento veio em parte sobre Israel, até que a plenitude dos gentios haja entrado.
²⁶ E assim todo o Israel será salvo, como está escrito: De Sião virá o Libertador, e desviará de Jacó as impiedades.
²⁷ E esta será a minha aliança com eles, quando eu tirar os seus pecados.
²⁸ Assim que, quanto ao evangelho, são inimigos por causa de vós; mas, quanto à eleição, amados por causa dos pais.
²⁹ Porque os dons e a vocação de Deus são sem arrependimento.
³⁰ Porque assim como vós também antigamente fostes desobedientes a Deus, mas agora alcançastes misericórdia pela desobediência deles,
³¹ Assim também estes agora foram desobedientes, para também alcançarem misericórdia pela misericórdia a vós demonstrada.
³² Porque Deus encerrou a todos debaixo da desobediência, para com todos usar de misericórdia.
³³ Ó profundidade das riquezas, tanto da sabedoria, como do conhecimento de Deus! Quão insondáveis são os seus juízos, e quão inescrutáveis os seus caminhos!
³⁴ Porque, quem compreendeu a mente do Senhor? Ou quem foi seu conselheiro?
³⁵ Ou quem lhe deu primeiro a ele, para que lhe seja recompensado?
³⁶ Porque dele e por ele, e para ele, são todas as coisas; glória, pois, a ele eternamente. Amém. 
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual figura Paulo usa para descrever a inclusão dos gentios no povo de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Um zambujeiro (oliveira brava) enxertado", correta: true },
                            { numero: 2, texto: "Uma videira seca", correta: false },
                            { numero: 3, texto: "Um campo de trigo e joio", correta: false },
                            { numero: 4, texto: "Uma rede cheia de peixes", correta: false }
                        ],
                        explicacao: "Romanos 11:17 - ...e tu, sendo zambujeiro, foste enxertado em lugar deles.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Deus rejeitou o seu povo (Israel)?",
                        opcoes: [
                            { numero: 1, texto: "Sim, totalmente", correta: false },
                            { numero: 2, texto: "De modo nenhum!", correta: true },
                            { numero: 3, texto: "Apenas os mais pobres", correta: false },
                            { numero: 4, texto: "Somente durante o exílio", correta: false }
                        ],
                        explicacao: "Romanos 11:1 - Digo, pois: Porventura rejeitou Deus o seu povo? De modo nenhum!",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como Paulo termina o capítulo 11, ao falar da sabedoria de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Com uma exclamação sobre a profundidade das riquezas de Deus", correta: true },
                            { numero: 2, texto: "Com um lamento", correta: false },
                            { numero: 3, texto: "Com uma lista de pecados", correta: false },
                            { numero: 4, texto: "Com uma ordem militar", correta: false }
                        ],
                        explicacao: "Romanos 11:33 - Ó profundidade das riquezas, tanto da sabedoria, como da ciência de Deus!",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        12: {
            titulo: "Deveres Cristãos e o Culto Racional",
            texto: ` ¹ Rogo-vos, pois, irmãos, pela compaixão de Deus, que apresenteis os vossos corpos em sacrifício vivo, santo e agradável a Deus, que é o vosso culto racional.
² E não sejais conformados com este mundo, mas sede transformados pela renovação do vosso entendimento, para que experimenteis qual seja a boa, agradável, e perfeita vontade de Deus.
³ Porque pela graça que me é dada, digo a cada um dentre vós que não pense de si mesmo além do que convém; antes, pense com moderação, conforme a medida da fé que Deus repartiu a cada um.
⁴ Porque assim como em um corpo temos muitos membros, e nem todos os membros têm a mesma operação,
⁵ Assim nós, que somos muitos, somos um só corpo em Cristo, mas individualmente somos membros uns dos outros.
⁶ De modo que, tendo diferentes dons, segundo a graça que nos é dada, se é profecia, seja ela segundo a medida da fé;
⁷ Se é ministério, seja em ministrar; se é ensinar, haja dedicação ao ensino;
⁸ Ou o que exorta, use esse dom em exortar; o que reparte, faça-o com liberalidade; o que preside, com cuidado; o que exercita misericórdia, com alegria.
⁹ O amor seja não fingido. Aborrecei o mal e apegai-vos ao bem.
¹⁰ Amai-vos cordialmente uns aos outros com amor fraternal, preferindo-vos em honra uns aos outros.
¹¹ Não sejais vagarosos no cuidado; sede fervorosos no espírito, servindo ao Senhor;
¹² Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração;
¹³ Comunicai com os santos nas suas necessidades, segui a hospitalidade;
¹⁴ Abençoai aos que vos perseguem, abençoai, e não amaldiçoeis.
¹⁵ Alegrai-vos com os que se alegram; e chorai com os que choram;
¹⁶ Sede unânimes entre vós; não ambicioneis coisas altas, mas acomodai-vos às humildes; não sejais sábios em vós mesmos;
¹⁷ A ninguém torneis mal por mal; procurai as coisas honestas, perante todos os homens.
¹⁸ Se for possível, quanto estiver em vós, tende paz com todos os homens.
¹⁹ Não vos vingueis a vós mesmos, amados, mas dai lugar à ira, porque está escrito: Minha é a vingança; eu recompensarei, diz o Senhor.
²⁰ Portanto, se o teu inimigo tiver fome, dá-lhe de comer; se tiver sede, dá-lhe de beber; porque, fazendo isto, amontoarás brasas de fogo sobre a sua cabeça.
²¹ Não te deixes vencer do mal, mas vence o mal com o bem. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como devemos apresentar nossos corpos a Deus, segundo Romanos 12:1?",
                        opcoes: [
                            { numero: 1, texto: "Como sacrifício vivo, santo e agradável a Deus", correta: true },
                            { numero: 2, texto: "Deitados no chão do templo", correta: false },
                            { numero: 3, texto: "Vestidos de ouro", correta: false },
                            { numero: 4, texto: "Apenas uma vez por ano", correta: false }
                        ],
                        explicacao: "Romanos 12:1 - ...apresenteis os vossos corpos em sacrifício vivo, santo e agradável a Deus, que é o vosso culto racional.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Paulo diz sobre o mundo neste capítulo?",
                        opcoes: [
                            { numero: 1, texto: "Que devemos ser iguais a ele", correta: false },
                            { numero: 2, texto: "Não vos conformeis com este mundo", correta: true },
                            { numero: 3, texto: "Que o mundo é a nossa única casa", correta: false },
                            { numero: 4, texto: "Que não devemos trabalhar no mundo", correta: false }
                        ],
                        explicacao: "Romanos 12:2 - E não vos conformeis com este mundo, mas transformai-vos pela renovação do vosso entendimento.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como devemos reagir ao mal, segundo Romanos 12:21?",
                        opcoes: [
                            { numero: 1, texto: "Pagando o mal com o mal", correta: false },
                            { numero: 2, texto: "Fugindo para as montanhas", correta: false },
                            { numero: 3, texto: "Não te deixes vencer do mal, mas vence o mal com o bem", correta: true },
                            { numero: 4, texto: "Ignorando que o mal existe", correta: false }
                        ],
                        explicacao: "Romanos 12:21 - Não te deixes vencer do mal, mas vence o mal com o bem.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        13: {
            titulo: "Autoridades e Amor ao Próximo",
            texto: ` ¹ Toda a alma esteja sujeita às autoridades superiores; porque não há autoridade que não venha de Deus; e as autoridades que há foram ordenadas por Deus.
² Por isso quem resiste à autoridade resiste à ordenação de Deus; e os que resistem trarão sobre si mesmos a condenação.
³ Porque os magistrados não são terror para as boas obras, mas para as más. Queres tu, pois, não temer à autoridade? Faze o bem, e terás louvor dela.
⁴ Porque ela é ministro de Deus para teu bem. Mas, se fizeres o mal, teme, pois não traz em vão a espada; porque é ministro de Deus, e vingador para castigar o que faz o mal.
⁵ Portanto é necessário que lhe estejais sujeitos, não somente pelo castigo, mas também pela consciência.
⁶ Por esta razão também pagais tributos, porque são ministros de Deus, atendendo sempre a isto mesmo.
⁷ Portanto, dai a cada um o que deveis: a quem tributo, tributo; a quem imposto, imposto; a quem temor, temor; a quem honra, honra.
⁸ A ninguém devais coisa alguma, a não ser o amor com que vos ameis uns aos outros; porque quem ama aos outros cumpriu a lei.
⁹ Com efeito: Não adulterarás, não matarás, não furtarás, não darás falso testemunho, não cobiçarás; e se há algum outro mandamento, nesta palavra se resume: Amarás ao teu próximo como a ti mesmo.
¹⁰ O amor não faz mal ao próximo. De sorte que o cumprimento da lei é o amor.
¹¹ E isto digo, conhecendo o tempo, que já é hora de despertarmos do sono; porque a nossa salvação está agora mais perto de nós do que quando aceitamos a fé.
¹² A noite é avançada, e o dia está próximo. Rejeitemos, pois, as obras das trevas, e vistamo-nos das armas da luz.
¹³ Andemos honestamente, como de dia; não em glutonarias, nem em bebedeiras, nem em desonestidades, nem em dissoluções, nem em contendas e inveja.
¹⁴ Mas revesti-vos do Senhor Jesus Cristo, e não tenhais cuidado da carne em suas concupiscências. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Paulo ensina sobre as autoridades superiores?",
                        opcoes: [
                            { numero: 1, texto: "Toda alma esteja sujeita às autoridades superiores", correta: true },
                            { numero: 2, texto: "Devemos nos rebelar contra todas", correta: false },
                            { numero: 3, texto: "Só devemos obedecer se gostarmos delas", correta: false },
                            { numero: 4, texto: "As autoridades não vêm de Deus", correta: false }
                        ],
                        explicacao: "Romanos 13:1 - Toda a alma esteja sujeita às potestades superiores; porque não há potestade que não venha de Deus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é o cumprimento da lei, segundo Romanos 13:10?",
                        opcoes: [
                            { numero: 1, texto: "O conhecimento técnico", correta: false },
                            { numero: 2, texto: "O amor", correta: true },
                            { numero: 3, texto: "O sacrifício de animais", correta: false },
                            { numero: 4, texto: "O jejum", correta: false }
                        ],
                        explicacao: "Romanos 13:10 - O amor não faz mal ao próximo. De sorte que o cumprimento da lei é o amor.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Paulo diz sobre as 'obras das trevas'?",
                        opcoes: [
                            { numero: 1, texto: "Que devemos rejeitá-las e vestir as armas da luz", correta: true },
                            { numero: 2, texto: "Que elas são necessárias à noite", correta: false },
                            { numero: 3, texto: "Que são apenas brincadeiras", correta: false },
                            { numero: 4, texto: "Que não existem mais", correta: false }
                        ],
                        explicacao: "Romanos 13:12 - A noite é passada, e o dia é chegado. Rejeitemos, pois, as obras das trevas, e vistamo-nos das armas da luz.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        14: {
            titulo: "A Tolerância com os Fracos",
            texto: ` ¹ Ora, quanto ao que está enfermo na fé, recebei-o, não em contendas sobre dúvidas.
² Porque um crê que de tudo se pode comer, e outro, que é fraco, come legumes.
³ O que come não despreze o que não come; e o que não come, não julgue o que come; porque Deus o recebeu por seu.
⁴ Quem és tu, que julgas o servo alheio? Para seu próprio senhor ele está em pé ou cai. Mas estará firme, porque poderoso é Deus para o firmar.
⁵ Um faz diferença entre dia e dia, mas outro julga iguais todos os dias. Cada um esteja inteiramente seguro em sua própria mente.
⁶ Aquele que faz caso do dia, para o Senhor o faz e o que não faz caso do dia para o Senhor o não faz. O que come, para o Senhor come, porque dá graças a Deus; e o que não come, para o Senhor não come, e dá graças a Deus.
⁷ Porque nenhum de nós vive para si, e nenhum morre para si.
⁸ Porque, se vivemos, para o Senhor vivemos; se morremos, para o Senhor morremos. De sorte que, ou vivamos ou morramos, somos do Senhor.
⁹ Porque foi para isto que morreu Cristo, e ressurgiu, e tornou a viver, para ser Senhor, tanto dos mortos, como dos vivos.
¹⁰ Mas tu, por que julgas teu irmão? Ou tu, também, por que desprezas teu irmão? Pois todos havemos de comparecer ante o tribunal de Cristo.
¹¹ Porque está escrito: Como eu vivo, diz o Senhor, que todo o joelho se dobrará a mim, e toda a língua confessará a Deus.
¹² De maneira que cada um de nós dará conta de si mesmo a Deus.
¹³ Assim que não nos julguemos mais uns aos outros; antes seja o vosso propósito não pôr tropeço ou escândalo ao irmão.
¹⁴ Eu sei, e estou certo no Senhor Jesus, que nenhuma coisa é de si mesma imunda, a não ser para aquele que a tem por imunda; para esse é imunda.
¹⁵ Mas, se por causa da comida se contrista teu irmão, já não andas conforme o amor. Não destruas por causa da tua comida aquele por quem Cristo morreu.
¹⁶ Não seja, pois, blasfemado o vosso bem;
¹⁷ Porque o reino de Deus não é comida nem bebida, mas justiça, e paz, e alegria no Espírito Santo.
¹⁸ Porque quem nisto serve a Cristo agradável é a Deus e aceito aos homens.
¹⁹ Sigamos, pois, as coisas que servem para a paz e para a edificação de uns para com os outros.
²⁰ Não destruas por causa da comida a obra de Deus. É verdade que tudo é limpo, mas mal vai para o homem que come com escândalo.
²¹ Bom é não comer carne, nem beber vinho, nem fazer outras coisas em que teu irmão tropece, ou se escandalize, ou se enfraqueça.
²² Tens tu fé? Tem-na em ti mesmo diante de Deus. Bem-aventurado aquele que não se condena a si mesmo naquilo que aprova.
²³ Mas aquele que tem dúvidas, se come está condenado, porque não come por fé; e tudo o que não é de fé é pecado. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como devemos tratar aquele que é fraco na fé?",
                        opcoes: [
                            { numero: 1, texto: "Expulsá-lo da igreja", correta: false },
                            { numero: 2, texto: "Recebê-lo, mas não para discutir opiniões", correta: true },
                            { numero: 3, texto: "Rir de suas dúvidas", correta: false },
                            { numero: 4, texto: "Obrigá-lo a ser forte", correta: false }
                        ],
                        explicacao: "Romanos 14:1 - Ora, quanto ao que está enfermo na fé, recebei-o, mas não para contender em questões.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "De que consiste o reino de Deus, segundo Romanos 14:17?",
                        opcoes: [
                            { numero: 1, texto: "Comida e bebida", correta: false },
                            { numero: 2, texto: "Justiça, paz e alegria no Espírito Santo", correta: true },
                            { numero: 3, texto: "Roupas e calçados", correta: false },
                            { numero: 4, texto: "Ouro e prata", correta: false }
                        ],
                        explicacao: "Romanos 14:17 - Porque o reino de Deus não é comida nem bebida, mas justiça, e paz, e alegria no Espírito Santo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem dará conta de si mesmo a Deus?",
                        opcoes: [
                            { numero: 1, texto: "Cada um de nós", correta: true },
                            { numero: 2, texto: "Apenas os pastores", correta: false },
                            { numero: 3, texto: "Ninguém", correta: false },
                            { numero: 4, texto: "Somente os romanos", correta: false }
                        ],
                        explicacao: "Romanos 14:12 - De maneira que cada um de nós dará conta de si mesmo a Deus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        15: {
            titulo: "O Exemplo de Cristo e a Missão aos Gentios",
            texto: ` 1 Mas nós, que somos fortes, devemos suportar as fraquezas dos fracos, e não agradar a nós mesmos.
2 Portanto cada um de nós agrade ao seu próximo no que é bom para edificação.
3 Porque também Cristo não agradou a si mesmo, mas, como está escrito: Sobre mim caíram as injúrias dos que te injuriavam.
4 Porque tudo o que dantes foi escrito, para nosso ensino foi escrito, para que pela paciência e consolação das Escrituras tenhamos esperança.
5 Ora, o Deus de paciência e consolação vos conceda o mesmo sentimento uns para com os outros, segundo Cristo Jesus,
6 Para que concordes, a uma boca, glorifiqueis ao Deus e Pai de nosso Senhor Jesus Cristo.
7 Portanto recebei-vos uns aos outros, como também Cristo nos recebeu para glória de Deus.
8 Digo, pois, que Jesus Cristo foi ministro da circuncisão, por causa da verdade de Deus, para confirmar as promessas feitas aos pais;
9 E para que os gentios glorifiquem a Deus pela sua misericórdia, como está escrito: Portanto eu te louvarei entre os gentios, e cantarei ao teu nome.
10 E outra vez diz: Alegrai-vos, gentios, com o seu povo.
11 E outra vez: Louvai ao Senhor, todos os gentios, e celebrai-o todos os povos.
12 Outra vez diz Isaías: Uma raiz em Jessé haverá, e naquele que se levantar para reger os gentios, os gentios esperarão.
13 Ora o Deus de esperança vos encha de todo o gozo e paz em crença, para que abundeis em esperança pelo poder do Espírito Santo.
14 Eu próprio, meus irmãos, certo estou, a respeito de vós, que vós mesmos estais cheios de bondade, cheios de todo o conhecimento, podendo admoestar-vos uns aos outros.
15 Mas, irmãos, em parte vos escrevi mais ousadamente, como para vos trazer outra vez isto à memória, pela graça que por Deus me foi dada;
16 Que seja ministro de Jesus Cristo para os gentios, ministrando o evangelho de Deus, para que seja agradável a oferta dos gentios, santificada pelo Espírito Santo.
17 De sorte que tenho glória em Jesus Cristo nas coisas que pertencem a Deus.
18 Porque não ousarei dizer coisa alguma, que Cristo por mim não tenha feito, para fazer obedientes os gentios, por palavra e por obras;
19 Pelo poder dos sinais e prodígios, e pelo poder do Espírito de Deus; de maneira que desde Jerusalém, e arredores, até ao Ilírico, tenho pregado o evangelho de Cristo.
20 E desta maneira me esforcei por anunciar o evangelho, não onde Cristo foi nomeado, para não edificar sobre fundamento alheio;
21 Antes, como está escrito: Aqueles a quem não foi anunciado, o verão, e os que não ouviram o entenderão.
22 Por isso também muitas vezes tenho sido impedido de ir ter convosco.
23 Mas agora, não tendo mais lugar nestas regiões, e tendo já há muitos anos grande desejo de ir ter convosco,
24 Quando partir para Espanha irei ter convosco; pois espero que de passagem vos verei, e que para lá seja encaminhado por vós, depois de primeiro em parte me satisfazer de vossa companhia.
25 Mas agora vou a Jerusalém para ministrar aos santos.
26 Porque pareceu bem à Macedônia e à Acaia fazerem uma coleta para os pobres dentre os santos que estão em Jerusalém.
27 Isto lhes pareceu bem, como devedores que são para com eles. Porque, se os gentios foram participantes dos seus bens espirituais, devem também ministrar-lhes os temporais.
28 Assim que, concluído isto, e havendo-lhes consignado este fruto, de lá, passando por vós, irei à Espanha.
29 E bem sei que, indo ter convosco, chegarei com a plenitude da bênção do evangelho de Cristo.
30 E rogo-vos, irmãos, por nosso Senhor Jesus Cristo e pelo amor do Espírito, que combatais comigo nas vossas orações por mim a Deus;
31 Para que seja livre dos rebeldes que estão na Judeia, e que esta minha administração, que em Jerusalém faço, seja bem aceita pelos santos;
32 A fim de que, pela vontade de Deus, chegue a vós com alegria, e possa recrear-me convosco.
33 E o Deus de paz seja com todos vós. Amém.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que os fortes devem fazer em relação às fraquezas dos fracos?",
                        opcoes: [
                            { numero: 1, texto: "Suportar as fraquezas dos fracos", correta: true },
                            { numero: 2, texto: "Ignorar que eles existem", correta: false },
                            { numero: 3, texto: "Agradar a si mesmos primeiro", correta: false },
                            { numero: 4, texto: "Criticar publicamente", correta: false }
                        ],
                        explicacao: "Romanos 15:1 - Mas nós, que somos fortes, devemos suportar as fraquezas dos fracos, e não agradar a nós mesmos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Para que foram escritas as coisas que dantes foram escritas (Antigo Testamento)?",
                        opcoes: [
                            { numero: 1, texto: "Para nossa consolação e esperança", correta: true },
                            { numero: 2, texto: "Apenas para curiosidade histórica", correta: false },
                            { numero: 3, texto: "Para serem descartadas", correta: false },
                            { numero: 4, texto: "Para confundir o leitor", correta: false }
                        ],
                        explicacao: "Romanos 15:4 - Porque tudo que dantes foi escrito, para nosso ensino foi escrito, para que pela paciência e consolação das Escrituras tenhamos esperança.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Para qual cidade Paulo planejava ir após passar por Roma?",
                        opcoes: [
                            { numero: 1, texto: "Espanha", correta: true },
                            { numero: 2, texto: "Egito", correta: false },
                            { numero: 3, texto: "Babilônia", correta: false },
                            { numero: 4, texto: "Índia", correta: false }
                        ],
                        explicacao: "Romanos 15:24 - Quando partir para a Espanha, irei ter convosco.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        16: {
            titulo: "Saudações Finais",
            texto: ` ¹ Recomendo-vos, pois, Febe, nossa irmã, a qual é serva na igreja que está em Cencreia,
² Para que a recebais no Senhor, como convém aos santos, e a ajudeis em qualquer coisa que de vós necessitar; porque tem hospedado a muitos, como também a mim mesmo.
³ Saudai a Priscila e a Áquila, meus cooperadores em Cristo Jesus,
⁴ Os quais pela minha vida expuseram as suas cabeças; o que não só eu lhes agradeço, mas também todas as igrejas dos gentios.
⁵ Saudai também a igreja que está em sua casa. Saudai a Epêneto, meu amado, que é as primícias da Acaia em Cristo.
⁶ Saudai a Maria, que trabalhou muito por nós.
⁷ Saudai a Andrônico e a Júnias, meus parentes e meus companheiros na prisão, os quais se distinguiram entre os apóstolos e que foram antes de mim em Cristo.
⁸ Saudai a Amplias, meu amado no Senhor.
⁹ Saudai a Urbano, nosso cooperador em Cristo, e a Estáquis, meu amado.
¹⁰ Saudai a Apeles, aprovado em Cristo. Saudai aos da família de Aristóbulo.
¹¹ Saudai a Herodião, meu parente. Saudai aos da família de Narciso, os que estão no Senhor.
¹² Saudai a Trifena e a Trifosa, as quais trabalham no Senhor. Saudai à amada Pérside, a qual muito trabalhou no Senhor.
¹³ Saudai a Rufo, eleito no Senhor, e a sua mãe e minha.
¹⁴ Saudai a Asíncrito, a Flegonte, a Hermes, a Pátrobas, a Hermas, e aos irmãos que estão com eles.
¹⁵ Saudai a Filólogo e a Júlia, a Nereu e a sua irmã, e a Olimpas, e a todos os santos que com eles estão.
¹⁶ Saudai-vos uns aos outros com santo ósculo. As igrejas de Cristo vos saúdam.
¹⁷ E rogo-vos, irmãos, que noteis os que promovem dissensões e escândalos contra a doutrina que aprendestes; desviai-vos deles.
¹⁸ Porque os tais não servem a nosso Senhor Jesus Cristo, mas ao seu ventre; e com suaves palavras e lisonjas enganam os corações dos simples.
¹⁹ Quanto à vossa obediência, é ela conhecida de todos. Comprazo-me, pois, em vós; e quero que sejais sábios no bem, mas simples no mal.
²⁰ E o Deus de paz esmagará em breve Satanás debaixo dos vossos pés. A graça de nosso Senhor Jesus Cristo seja convosco. Amém.
²¹ Saúdam-vos Timóteo, meu cooperador, e Lúcio, Jasom e Sosípatro, meus parentes.
²² Eu, Tércio, que esta carta escrevi, vos saúdo no Senhor.
²³ Saúda-vos Gaio, meu hospedeiro, e de toda a igreja. Saúda-vos Erasto, procurador da cidade, e também o irmão Quarto.
²⁴ A graça de nosso Senhor Jesus Cristo seja com todos vós. Amém.
²⁵ Ora, àquele que é poderoso para vos confirmar segundo o meu evangelho e a pregação de Jesus Cristo, conforme a revelação do mistério que desde tempos eternos esteve oculto,
²⁶ Mas que se manifestou agora, e se notificou pelas Escrituras dos profetas, segundo o mandamento do Deus eterno, a todas as nações para obediência da fé;
²⁷ Ao Deus único, sábio, seja a glória por Jesus Cristo para todo o sempre. Amém. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem era a irmã recomendada por Paulo que servia na igreja de Cencreia?",
                        opcoes: [
                            { numero: 1, texto: "Febe", correta: true },
                            { numero: 2, texto: "Lídia", correta: false },
                            { numero: 3, texto: "Maria", correta: false },
                            { numero: 4, texto: "Marta", correta: false }
                        ],
                        explicacao: "Romanos 16:1 - Recomendo-vos, pois, a nossa irmã Febe, a qual serve na igreja que está em Cencreia.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Paulo diz que Deus fará com Satanás em breve?",
                        opcoes: [
                            { numero: 1, texto: "Esmagará Satanás debaixo dos vossos pés", correta: true },
                            { numero: 2, texto: "O levará para passear", correta: false },
                            { numero: 3, texto: "O transformará em anjo", correta: false },
                            { numero: 4, texto: "Fará um acordo com ele", correta: false }
                        ],
                        explicacao: "Romanos 16:20 - E o Deus de paz esmagará em breve Satanás debaixo dos vossos pés.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como os irmãos deveriam saudar uns aos outros?",
                        opcoes: [
                            { numero: 1, texto: "Com ósculo (beijo) santo", correta: true },
                            { numero: 2, texto: "Com um aperto de mão", correta: false },
                            { numero: 3, texto: "Apenas com um aceno", correta: false },
                            { numero: 4, texto: "Sem se tocarem", correta: false }
                        ],
                        explicacao: "Romanos 16:16 - Saudai-vos uns aos outros com santo ósculo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};