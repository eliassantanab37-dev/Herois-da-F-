// js/livros/primeira_joao.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const primeira_joao = {
    nome: "1 João",
    icone: "❤️",
    autor: "João",
  //  background: "./imagens/1joao_bg.jpg", 

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "Deus é Luz",
            texto: ` ¹ O que era desde o princípio, o que ouvimos, o que vimos com os nossos olhos, o que temos contemplado, e as nossas mãos tocaram da Palavra da vida
² (Porque a vida foi manifestada, e nós a vimos, e testificamos dela, e vos anunciamos a vida eterna, que estava com o Pai, e nos foi manifestada);
³ O que vimos e ouvimos, isso vos anunciamos, para que também tenhais comunhão conosco; e a nossa comunhão é com o Pai, e com seu Filho Jesus Cristo.
⁴ Estas coisas vos escrevemos, para que o vosso gozo se cumpra.
⁵ E esta é a mensagem que dele ouvimos, e vos anunciamos: Que Deus é luz, e não há nele trevas nenhumas.
⁶ Se dissermos que temos comunhão com ele, e andarmos em trevas, mentimos, e não praticamos a verdade.
⁷ Mas, se andarmos na luz, como ele na luz está, temos comunhão uns com os outros, e o sangue de Jesus Cristo, seu Filho, nos purifica de todo o pecado.
⁸ Se dissermos que não temos pecado, enganamo-nos a nós mesmos, e não há verdade em nós.
⁹ Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados, e nos purificar de toda a injustiça.
¹⁰ Se dissermos que não pecamos, fazemo-lo mentiroso, e a sua palavra não está em nós.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é a mensagem central que João anuncia no capítulo 1?",
                        opcoes: [
                            { numero: 1, texto: "Que a lei é superior à graça", correta: false },
                            { numero: 2, texto: "Que o mundo será destruído pela água", correta: false },
                            { numero: 3, texto: "Que Deus é luz, e não há nele trevas nenhumas", correta: true },
                            { numero: 4, texto: "Que a luz só existe no sol", correta: false }
                        ],
                        explicacao: "1 João 1:5 - Deus é luz, e não há nele trevas nenhumas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o sangue de Jesus Cristo faz por nós?",
                        opcoes: [
                            { numero: 1, texto: "Apenas nos dá conhecimento", correta: false },
                            { numero: 2, texto: "Nos torna imunes a doenças físicas", correta: false },
                            { numero: 3, texto: "Nos dá poder político", correta: false },
                            { numero: 4, texto: "Nos purifica de todo o pecado", correta: true }
                        ],
                        explicacao: "1 João 1:7 - ...e o sangue de Jesus Cristo, seu Filho, nos purifica de todo o pecado.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Deus é para nos perdoar se confessarmos nossos pecados?",
                        opcoes: [
                            { numero: 1, texto: "Ele é severo e punitivo", correta: false },
                            { numero: 2, texto: "Fiel e justo", correta: true },
                            { numero: 3, texto: "Indiferente aos nossos erros", correta: false },
                            { numero: 4, texto: "Um juiz que não perdoa", correta: false }
                        ],
                        explicacao: "1 João 1:9 - Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "O Advogado e o Mundo",
            texto: `¹ Meus filhinhos, estas coisas vos escrevo, para que não pequeis; e, se alguém pecar, temos um Advogado para com o Pai, Jesus Cristo, o justo.
² E ele é a propiciação pelos nossos pecados, e não somente pelos nossos, mas também pelos de todo o mundo.
³ E nisto sabemos que o conhecemos: Se guardarmos os seus mandamentos.
⁴ Aquele que diz: Eu conheço-o, e não guarda os seus mandamentos, é mentiroso, e nele não está a verdade.
⁵ Mas qualquer que guarda a sua palavra, o amor de Deus está nele verdadeiramente aperfeiçoado; nisto conhecemos que estamos nele.
⁶ Aquele que diz que está nele, também deve andar como ele andou.
⁷ Irmãos, não vos escrevo mandamento novo, mas o mandamento antigo, que desde o princípio tivestes. Este mandamento antigo é a palavra que desde o princípio ouvistes.
⁸ Outra vez vos escrevo um mandamento novo, que é verdadeiro nele e em vós; porque vão passando as trevas, e já a verdadeira luz ilumina.
⁹ Aquele que diz que está na luz, e odeia a seu irmão, até agora está em trevas.
¹⁰ Aquele que ama a seu irmão está na luz, e nele não há escândalo.
¹¹ Mas aquele que odeia a seu irmão está em trevas, e anda em trevas, e não sabe para onde deva ir; porque as trevas lhe cegaram os olhos.
¹² Filhinhos, escrevo-vos, porque pelo seu nome vos são perdoados os pecados.
¹³ Pais, escrevo-vos, porque conhecestes aquele que é desde o princípio. Jovens, escrevo-vos, porque vencestes o maligno. Eu vos escrevo, filhos, porque conhecestes o Pai.
¹⁴ Eu vos escrevi, pais, porque já conhecestes aquele que é desde o princípio. Eu vos escrevi, jovens, porque sois fortes, e a palavra de Deus está em vós, e já vencestes o maligno.
¹⁵ Não ameis o mundo, nem o que no mundo há. Se alguém ama o mundo, o amor do Pai não está nele.
¹⁶ Porque tudo o que há no mundo, a concupiscência da carne, a concupiscência dos olhos e a soberba da vida, não é do Pai, mas do mundo.
¹⁷ E o mundo passa, e a sua concupiscência; mas aquele que faz a vontade de Deus permanece para sempre.
¹⁸ Filhinhos, é já a última hora; e, como ouvistes que vem o anticristo, também agora muitos se têm feito anticristos, por onde conhecemos que é já a última hora.
¹⁹ Saíram de nós, mas não eram de nós; porque, se fossem de nós, ficariam conosco; mas isto é para que se manifestasse que não são todos de nós.
²⁰ E vós tendes a unção do Santo, e sabeis todas as coisas.
²¹ Não vos escrevi porque não soubésseis a verdade, mas porque a sabeis, e porque nenhuma mentira é da verdade.
²² Quem é o mentiroso, senão aquele que nega que Jesus é o Cristo? É o anticristo esse mesmo que nega o Pai e o Filho.
²³ Qualquer que nega o Filho, também não tem o Pai; mas aquele que confessa o Filho, tem também o Pai.
²⁴ Portanto, o que desde o princípio ouvistes permaneça em vós. Se em vós permanecer o que desde o princípio ouvistes, também permanecereis no Filho e no Pai.
²⁵ E esta é a promessa que ele nos fez: A vida eterna.
²⁶ Estas coisas vos escrevi acerca dos que vos enganam.
²⁷ E a unção que vós recebestes dele, fica em vós, e não tendes necessidade de que alguém vos ensine; mas, como a sua unção vos ensina todas as coisas, e é verdadeira, e não é mentira, como ela vos ensinou, assim nele permanecereis.
²⁸ E agora, filhinhos, permanecei nele; para que, quando ele se manifestar, tenhamos confiança, e não sejamos confundidos por ele na sua vinda.
²⁹ Se sabeis que ele é justo, sabeis que todo aquele que pratica a justiça é nascido dele.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem temos como Advogado junto ao Pai?",
                        opcoes: [
                            { numero: 1, texto: "Os profetas antigos", correta: false },
                            { numero: 2, texto: "Os anjos do céu", correta: false },
                            { numero: 3, texto: "Jesus Cristo, o justo", correta: true },
                            { numero: 4, texto: "A nossa própria justiça", correta: false }
                        ],
                        explicacao: "1 João 2:1 - ...se alguém pecar, temos um Advogado para com o Pai, Jesus Cristo, o justo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontece com aquele que diz que está na luz, mas odeia a seu irmão?",
                        opcoes: [
                            { numero: 1, texto: "Está em plena luz", correta: false },
                            { numero: 2, texto: "É um exemplo de fé", correta: false },
                            { numero: 3, texto: "Não deve se preocupar", correta: false },
                            { numero: 4, texto: "Até agora está nas trevas", correta: true }
                        ],
                        explicacao: "1 João 2:9 - Aquele que diz que está na luz, e odeia a seu irmão, até agora está nas trevas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O mundo passa e a sua concupiscência, mas o que permanece para sempre?",
                        opcoes: [
                            { numero: 1, texto: "As riquezas da terra", correta: false },
                            { numero: 2, texto: "Aquele que faz a vontade de Deus", correta: true },
                            { numero: 3, texto: "A fama dos homens", correta: false },
                            { numero: 4, texto: "As construções de pedra", correta: false }
                        ],
                        explicacao: "1 João 2:17 - E o mundo passa, e a sua concupiscência; mas aquele que faz a vontade de Deus permanece para sempre.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "Filhos de Deus e o Amor",
            texto: ` ¹ Vede quão grande amor nos tem concedido o Pai, que fôssemos chamados filhos de Deus. Por isso o mundo não nos conhece; porque não o conhece a ele.
² Amados, agora somos filhos de Deus, e ainda não é manifestado o que havemos de ser. Mas sabemos que, quando ele se manifestar, seremos semelhantes a ele; porque assim como é o veremos.
³ E qualquer que nele tem esta esperança purifica-se a si mesmo, como também ele é puro.
⁴ Qualquer que pratica o pecado, também transgride a lei; porque o pecado é a transgressão da lei.
⁵ E bem sabeis que ele se manifestou para tirar os nossos pecados; e nele não há pecado.
⁶ Qualquer que permanece nele não pratica o pecado; qualquer que permanece em pecado não o viu nem o conheceu.
⁷ Filhinhos, ninguém vos engane. Quem pratica justiça é justo, assim como ele é justo.
⁸ Quem pratica o pecado é do diabo; porque o diabo peca desde o princípio. Para isto o Filho de Deus se manifestou: Para desfazer as obras do diabo.
⁹ Qualquer que é nascido de Deus não permanece em pecado; porque a sua semente permanece nele; e não pode pecar, porque é nascido de Deus.
¹⁰ Nisto são manifestos os filhos de Deus, e os filhos do diabo. Qualquer que não pratica a justiça, e não ama a seu irmão, não é de Deus.
¹¹ Porque esta é a mensagem que ouvistes desde o princípio: Que nos amemos uns aos outros.
¹² Não como Caim, que era do maligno, e matou a seu irmão. E por que causa o matou? Porque as suas obras eram más e as de seu irmão justas.
¹³ Meus irmãos, não vos maravilheis, se o mundo vos odeia.
¹⁴ Nós sabemos que passamos da morte para a vida, porque amamos os irmãos. Quem não ama a seu irmão permanece na morte.
¹⁵ Qualquer que odeia a seu irmão é homicida. E vós sabeis que nenhum homicida tem a vida eterna permanecendo nele.
¹⁶ Conhecemos o amor nisto: que ele deu a sua vida por nós, e nós devemos dar a vida pelos irmãos.
¹⁷ Quem, pois, tiver bens do mundo, e, vendo o seu irmão necessitado, lhe cerrar as suas entranhas, como reside nele o amor de Deus?
¹⁸ Meus filhinhos, não amemos de palavra, nem de língua, mas em obra e em verdade.
¹⁹ E nisto conhecemos que somos da verdade, e diante dele estaremos seguros em nossos corações;
²⁰ Porque, se o nosso coração nos condena, maior é Deus do que o nosso coração, e conhece todas as coisas.
²¹ Amados, se o nosso coração não nos condena, temos confiança para com Deus;
²² E qualquer coisa que lhe pedirmos, dele a receberemos, porque guardamos os seus mandamentos, e fazemos o que é agradável à sua vista.
²³ E o seu mandamento é este: Que creiamos no nome de seu Filho Jesus Cristo, e nos amemos uns aos outros, segundo nos deu mandamento.
²⁴ E aquele que guarda os seus mandamentos nele está, e ele nele. E nisto conhecemos que ele está em nós, pelo Espírito que nos tem dado.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Que grande amor o Pai nos concedeu?",
                        opcoes: [
                            { numero: 1, texto: "Sermos os mais ricos do mundo", correta: false },
                            { numero: 2, texto: "Sermos chamados filhos de Deus", correta: true },
                            { numero: 3, texto: "Não termos mais problemas", correta: false },
                            { numero: 4, texto: "Vivermos sem trabalhar", correta: false }
                        ],
                        explicacao: "1 João 3:1 - Vede quão grande amor nos tem concedido o Pai, que fôssemos chamados filhos de Deus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como devemos amar, segundo o versículo 18?",
                        opcoes: [
                            { numero: 1, texto: "Apenas com intenções", correta: false },
                            { numero: 2, texto: "Somente aos domingos", correta: false },
                            { numero: 3, texto: "Não amemos de palavra, nem de língua, mas por obra e em verdade", correta: true },
                            { numero: 4, texto: "Apenas quem nos trata bem", correta: false }
                        ],
                        explicacao: "1 João 3:18 - Meus filhinhos, não amemos de palavra, nem de língua, mas por obra e em verdade.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que é aquele que odeia a seu irmão, segundo João?",
                        opcoes: [
                            { numero: 1, texto: "Um homem livre", correta: false },
                            { numero: 2, texto: "Um sábio", correta: false },
                            { numero: 3, texto: "Um confuso", correta: false },
                            { numero: 4, texto: "Um homicida", correta: true }
                        ],
                        explicacao: "1 João 3:15 - Qualquer que odeia a seu irmão é homicida.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "Deus é Amor",
            texto: ` ¹ Amados, não creiais a todo o espírito, mas provai se os espíritos são de Deus, porque já muitos falsos profetas se têm levantado no mundo.
² Nisto conhecereis o Espírito de Deus: Todo o espírito que confessa que Jesus Cristo veio em carne é de Deus;
³ E todo o espírito que não confessa que Jesus Cristo veio em carne não é de Deus; mas este é o espírito do anticristo, do qual já ouvistes que há de vir, e eis que já agora está no mundo.
⁴ Filhinhos, sois de Deus, e já os tendes vencido; porque maior é o que está em vós do que o que está no mundo.
⁵ Do mundo são, por isso falam do mundo, e o mundo os ouve.
⁶ Nós somos de Deus; aquele que conhece a Deus ouve-nos; aquele que não é de Deus não nos ouve. Nisto conhecemos nós o espírito da verdade e o espírito do erro.
⁷ Amados, amemo-nos uns aos outros; porque o amor é de Deus; e qualquer que ama é nascido de Deus e conhece a Deus.
⁸ Aquele que não ama não conhece a Deus; porque Deus é amor.
⁹ Nisto se manifestou o amor de Deus para conosco: Que Deus enviou seu Filho unigênito ao mundo, para que por ele vivamos.
¹⁰ Nisto está o amor, não em que nós tenhamos amado a Deus, mas em que ele nos amou a nós, e enviou seu Filho para propiciação pelos nossos pecados.
¹¹ Amados, se Deus assim nos amou, também nós devemos amar uns aos outros.
¹² Ninguém jamais viu a Deus; se nos amamos uns aos outros, Deus está em nós, e em nós é perfeito o seu amor.
¹³ Nisto conhecemos que estamos nele, e ele em nós, pois que nos deu do seu Espírito.
¹⁴ E vimos, e testificamos que o Pai enviou seu Filho para Salvador do mundo.
¹⁵ Qualquer que confessar que Jesus é o Filho de Deus, Deus está nele, e ele em Deus.
¹⁶ E nós conhecemos, e cremos no amor que Deus nos tem. Deus é amor; e quem está em amor está em Deus, e Deus nele.
¹⁷ Nisto é perfeito o amor para conosco, para que no dia do juízo tenhamos confiança; porque, qual ele é, somos nós também neste mundo.
¹⁸ No amor não há temor, antes o perfeito amor lança fora o temor; porque o temor tem consigo a pena, e o que teme não é perfeito em amor.
¹⁹ Nós o amamos porque ele nos amou primeiro.
²⁰ Se alguém diz: Eu amo a Deus, e odeia a seu irmão, é mentiroso. Pois quem não ama a seu irmão, ao qual viu, como pode amar a Deus, a quem não viu?
²¹ E dele temos este mandamento: Que quem ama a Deus, ame também a seu irmão.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Aquele que não ama, não conhece a Deus, porque:",
                        opcoes: [
                            { numero: 1, texto: "Deus é justiça apenas", correta: false },
                            { numero: 2, texto: "Deis é poder", correta: false },
                            { numero: 3, texto: "Deus é amor", correta: true },
                            { numero: 4, texto: "Deus é mistério", correta: false }
                        ],
                        explicacao: "1 João 4:8 - Aquele que não ama não conhece a Deus; porque Deus é amor.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que lança fora o medo, segundo o capítulo 4?",
                        opcoes: [
                            { numero: 1, texto: "A coragem humana", correta: false },
                            { numero: 2, texto: "A força física", correta: false },
                            { numero: 3, texto: "O dinheiro", correta: false },
                            { numero: 4, texto: "O perfeito amor", correta: true }
                        ],
                        explicacao: "1 João 4:18 - No amor não há temor, antes o perfeito amor lança fora o temor.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Nós amamos a Deus porque:",
                        opcoes: [
                            { numero: 1, texto: "Temos medo do inferno", correta: false },
                            { numero: 2, texto: "Ele nos amou primeiro", correta: true },
                            { numero: 3, texto: "Somos obrigados pela lei", correta: false },
                            { numero: 4, texto: "Vimos sinais no céu", correta: false }
                        ],
                        explicacao: "1 João 4:19 - Nós o amamos a ele porque ele nos amou primeiro.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "A Vitória da Fé",
            texto: ` ¹ Todo aquele que crê que Jesus é o Cristo, é nascido de Deus; e todo aquele que ama ao que o gerou também ama ao que dele é nascido.
² Nisto conhecemos que amamos os filhos de Deus, quando amamos a Deus e guardamos os seus mandamentos.
³ Porque este é o amor de Deus: Que guardemos os seus mandamentos; e os seus mandamentos não são pesados.
⁴ Porque todo o que é nascido de Deus vence o mundo; e esta é a vitória que vence o mundo, a nossa fé.
⁵ Quem é que vence o mundo, senão aquele que crê que Jesus é o Filho de Deus?
⁶ Este é aquele que veio por água e sangue, isto é, Jesus Cristo; não só por água, mas por água e por sangue. E o Espírito é o que testifica, porque o Espírito é a verdade.
⁷ Porque três são os que testificam no céu: o Pai, a Palavra, e o Espírito Santo; e estes três são um.
⁸ E três são os que testificam na terra: o Espírito, e a água e o sangue; e estes três concordam num.
⁹ Se recebemos o testemunho dos homens, o testemunho de Deus é maior; porque o testemunho de Deus é este, que de seu Filho testificou.
¹⁰ Quem crê no Filho de Deus, em si mesmo tem o testemunho; quem a Deus não crê mentiroso o fez, porquanto não creu no testemunho que Deus de seu Filho deu.
¹¹ E o testemunho é este: que Deus nos deu a vida eterna; e esta vida está em seu Filho.
¹² Quem tem o Filho tem a vida; quem não tem o Filho de Deus não tem a vida.
¹³ Estas coisas vos escrevi, os que credes no nome do Filho de Deus, para que saibais que tendes a vida eterna, e para que creiais no nome do Filho de Deus.
¹⁴ E esta é a confiança que temos nele, que, se pedirmos alguma coisa, segundo a sua vontade, ele nos ouve.
¹⁵ E, se sabemos que nos ouve em tudo o que pedimos, sabemos que alcançamos as petições que lhe fizemos.
¹⁶ Se alguém vir pecar seu irmão, pecado que não é para morte, orará, e Deus lhe dará a vida, àqueles que não pecarem para morte. Há pecado para morte, e por esse não digo que ore.
¹⁷ Toda a iniquidade é pecado, e há pecado que não é para morte.
¹⁸ Sabemos que todo aquele que é nascido de Deus não peca; mas o que de Deus é gerado conserva-se a si mesmo, e o maligno não lhe toca.
¹⁹ Sabemos que somos de Deus, e que todo o mundo jaz no maligno.
²⁰ E sabemos que já o Filho de Deus é vindo, e nos deu entendimento para que conheçamos ao Verdadeiro; e no que é Verdadeiro estamos, isto é, em seu Filho Jesus Cristo. Este é o verdadeiro Deus e a vida eterna.
²¹ Filhinhos, guardai-vos dos ídolos. Amém.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que é a vitória que vence o mundo?",
                        opcoes: [
                            { numero: 1, texto: "A nossa inteligência", correta: false },
                            { numero: 2, texto: "A nossa força", correta: false },
                            { numero: 3, texto: "A nossa fé", correta: true },
                            { numero: 4, texto: "O nosso trabalho", correta: false }
                        ],
                        explicacao: "1 João 5:4 - ...e esta é a vitória que vence o mundo, a nossa fé.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem tem o Filho tem o quê?",
                        opcoes: [
                            { numero: 1, texto: "Muitas dúvidas", correta: false },
                            { numero: 2, texto: "Apenas uma religião", correta: false },
                            { numero: 3, texto: "Fama entre os homens", correta: false },
                            { numero: 4, texto: "A vida", correta: true }
                        ],
                        explicacao: "1 João 5:12 - Quem tem o Filho tem a vida; quem não tem o Filho de Deus não tem a vida.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Para que João escreveu estas coisas aos que creem no nome do Filho de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Para que fiquem confusos", correta: false },
                            { numero: 2, texto: "Para que saibais que tendes a vida eterna", correta: true },
                            { numero: 3, texto: "Para que peçam mais dinheiro", correta: false },
                            { numero: 4, texto: "Para que viajem para Jerusalém", correta: false }
                        ],
                        explicacao: "1 João 5:13 - Estas coisas vos escrevi... para que saibais que tendes a vida eterna...",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};