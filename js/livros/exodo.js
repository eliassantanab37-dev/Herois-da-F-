// js/livros/êxodo.js
// ═══════════════════════════════════════════════════════════════════════════════
// LIVRO: ÊXODO - O LIVRO DA FUGA
// ═══════════════════════════════════════════════════════════════════════════════

export const exodo = {
    // ───────────────────────────────────────────────────────────────────────────
    // 1. CONFIGURAÇÕES GERAIS (Aparecem no Card da Biblioteca)
    // ───────────────────────────────────────────────────────────────────────────
    nome: "Êxodo",     // Nome que aparece no título
    icone: "📜",         // Emoji ou Ícone que aparece no card
    autor: "Moisés",      // Nome do autor que aparece abaixo do título

    // CAMINHO DA IMAGEM: Esta imagem fica no fundo quando o capítulo abre
    background: "./imagens/exodo_bg.jpg",

    // SISTEMA DE SOM: Toca quando o Herói acerta a pergunta
    tocarSomVitoria: function () {
        try {
            // Você pode trocar este link por um arquivo local: './sons/vitoria.mp3'
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação do usuário.'));
        } catch (e) { console.error('Erro ao carregar som:', e); }
    },

    // ───────────────────────────────────────────────────────────────────────────
    // 2. CONTEÚDO DOS CAPÍTULOS (O coração do seu App)
    // ───────────────────────────────────────────────────────────────────────────
    capitulos: {

        // CAPÍTULO 1: A CRIAÇÃO
        // ┌──────────────────────────────────────────────────────────────────┐
        // │ ESTRUTURA VAZIA - PREENCHA COM OS TEXTOS BÍBLICOS              │
        // └──────────────────────────────────────────────────────────────────┘
        // --- INÍCIO DO LIVRO DE ÊXODO ---
        1: {
            titulo: "A Aflição de Israel no Egito",
            subtitulo: "O crescimento do povo e o decreto de Faraó",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `¹ Estes, pois, são os nomes dos filhos de Israel que entraram no Egito com Jacó; cada um entrou com sua casa:
² Rúben, Simeão, Levi e Judá;
³ Issacar, Zebulom e Benjamim;
⁴ Dã e Naftali, Gade e Aser.
⁵ Todas as almas, pois, que descenderam de Jacó foram setenta; José, porém, estava no Egito.
⁶ Sendo, pois, morto José, e todos os seus irmãos, e toda aquela geração,
⁷ os filhos de Israel frutificaram, e aumentaram muito, e multiplicaram-se, e foram fortalecidos grandemente; de maneira que a terra se encheu deles.
⁸ Depois, levantou-se um novo rei sobre o Egito, que não conhecera a José;
⁹ o qual disse ao seu povo: Eis que o povo dos filhos de Israel é muito e mais poderoso do que nós.
¹⁰ Eia, usemos sabiamente para com ele, para que não se multiplique, e aconteça que, vindo guerra, ele também se ajunte com os nossos inimigos, e peleje contra nós, e suba da terra.
¹¹ E puseram sobre eles maiorais de tributos, para os afligirem com suas cargas. Porque edificaram a Faraó cidades de tesouros, Pitom e Ramessés.
¹² Mas, quanto mais os afligiam, tanto mais se multiplicavam e tanto mais cresciam; de maneira que se enfadavam por causa dos filhos de Israel.
¹³ E os egípcios faziam servir os filhos de Israel com dureza;
¹⁴ assim, lhes fizeram amargar a vida com dura servidão, em barro e em tijolos, e com todo o trabalho no campo; com todo o seu serviço, em que os serviam com dureza.
¹⁵ E falou o rei do Egito às parteiras das hebreias (das quais o nome de uma era Sifrá, e o nome da outra Puá),
¹⁶ e disse: Quando ajudardes no parto as hebreias e as virdes sobre os assentos, se for filho, matai-o; mas, se for filha, então, viva.
¹⁷ As parteiras, porém, temeram a Deus e não fizeram como o rei do Egito lhes dissera; antes, conservavam os meninos com vida.
¹⁸ Então, o rei do Egito chamou as parteiras e disse-lhes: Por que fizestes isso e guardastes os meninos com vida?
¹⁹ E as parteiras disseram a Faraó: É que as mulheres hebreias não são como as egípcias; porque são vigorosas e dão à luz antes que a parteira venha a elas.
²⁰ Portanto, Deus fez bem às parteiras. E o povo se aumentou e se fortaleceu muito.
²¹ E aconteceu que, como as parteiras temeram a Deus, estabeleceu-lhes casas.
²² Então, ordenou Faraó a todo o seu povo, dizendo: A todo filho que nascer lançareis no rio, mas a toda filha guardareis com vida.`,

            // O DESAFIO
            pergunta: {
                texto: "Quais eram os nomes das duas parteiras das hebreias que desobedeceram a ordem de Faraó para preservar a vida dos meninos?",
                opcoes: [
                    { numero: 1, texto: "Lia e Raquel", correta: false },
                    { numero: 2, texto: "Sifrá e Puá", correta: true },
                    { numero: 3, texto: "Miriã e Joquebede", correta: false },
                    { numero: 4, texto: "Asenate e Zípora", correta: false }
                ],
                explicacao: "Êxodo 1:15 - Sifrá e Puá foram as parteiras que, por temerem a Deus, arriscaram suas vidas para não cumprir o infanticídio ordenado pelo rei do Egito.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 2 ---
        2: {
            titulo: "O Nascimento e a Fuga de Moisés",
            subtitulo: "Do palácio de Faraó ao deserto de Midiã",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `¹ E foi um homem da casa de Levi e casou com uma filha de Levi.
² E a mulher concebeu, e deu à luz um filho, e, vendo que era formoso, escondeu-o três meses.
³ Não podendo, porém, mais escondê-lo, tomou uma arca de juncos e a untou com betume e pez; e, pondo nela o menino, a pôs nos juncos à borda do rio.
⁴ E a irmã do menino pôs-se de longe, para saber o que lhe havia de acontecer.
⁵ E a filha de Faraó desceu a lavar-se no rio, e as suas donzelas passeavam pela borda do rio; e ela viu a arca no meio dos juncos, e enviou a sua criada, e a tomou.
⁶ E, abrindo-a, viu o menino, e eis que o menino chorava; e moveu-se de compaixão dele e disse: Dos meninos dos hebreus é este.
⁷ Então, disse sua irmã à filha de Faraó: Irei eu a chamar uma ama das hebreias, que crie este menino para ti?
⁸ E a filha de Faraó disse-lhe: Vai. E foi-se a moça e chamou a mãe do menino.
⁹ Então, lhe disse a filha de Faraó: Leva este menino e cria-mo; eu te darei teu salário. E a mulher tomou o menino e criou-o.
¹⁰ E, sendo o menino já grande, ela o trouxe à filha de Faraó, a qual o adotou por filho e chamou o seu nome Moisés, e disse: Porque das águas o tenho tirado.
¹¹ E aconteceu naqueles dias que, sendo Moisés já grande, saiu a seus irmãos e atentou nas suas cargas; e viu que um egípcio feria a um hebreu, um de seus irmãos.
¹² E olhou a uma e a outra banda, e, vendo que ninguém havia ali, feriu ao egípcio, e escondeu-o na areia.
¹³ E tornou a sair no dia seguinte, e eis que dois homens hebreus pelejavam; e disse ao injusto: Por que feres o teu próximo?
¹⁴ O qual disse: Quem te tem posto a ti por maia e juiz sobre nós? Pensas matar-me, como mataste o egípcio? Então, temeu Moisés e disse: Certamente o negócio se descobriu.
¹⁵ E ouviu Faraó este negócio e procurou matar a Moisés; mas Moisés fugiu de diante da face de Faraó e habitou na terra de Midiã, e assentou-se junto a um poço.
¹⁶ E o sacerdote de Midiã tinha sete filhas, as quais vieram a tirar água, e encheram as pias para dar de beber ao rebanho de seu pai.
¹⁷ Então, vieram os pastores e lançaram-nas dali; Moisés, porém, levantou-se, e defendeu-as, e deu de beber ao rebanho delas.
¹⁸ E, vindo elas a Reuel, seu pai, ele disse: Por que viestes hoje tão depressa?
¹⁹ E elas disseram: Um homem egípcio nos livrou da mão dos pastores, e também nos tirou água em abundância, e deu de beber ao rebanho.
²⁰ E disse a suas filhas: E onde está ele? Por que deixastes o homem? Chamai-o para que coma pão.
²¹ E Moisés consentiu em morar com aquele homem; e ele deu a Moisés sua filha Zípora,
²² a qual deu à luz um filho, e ele chamou o seu nome Gérson, porque disse: Peregrino fui em terra estranha.
²³ E aconteceu, depois de muitos dias, que morreu o rei do Egito; e os filhos de Israel suspiravam por causa da servidão e clamavam; e o seu clamor subiu a Deus por causa da servidão.
²⁴ E ouviu Deus o seu gemido e lembrou-se Deus do seu concerto com Abraão, com Isaque e com Jacó;
²⁵ e viu Deus os filhos de Israel e conheceu-os Deus`,

            // O DESAFIO
            pergunta: {
                texto: "Qual o significado do nome 'Moisés', conforme explicado pela filha de Faraó ao adotá-lo?",
                opcoes: [
                    { numero: 1, texto: "Príncipe do Egito", correta: false },
                    { numero: 2, texto: "Aquele que foi salvo pelo cesto", correta: false },
                    { numero: 3, texto: "Porque das águas o tenho tirado", correta: true },
                    { numero: 4, texto: "Filho da promessa", correta: false }
                ],
                explicacao: "Êxodo 2:10 - A filha de Faraó deu-lhe o nome de Moisés (do egípcio 'Moshe', que soa como o verbo hebraico para 'tirar') justificando que o havia retirado das águas do rio.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 3 ---
        3: {
            titulo: "A Sarça Ardente e o Chamado de Moisés",
            subtitulo: "A revelação do Nome Divino no Monte Horebe",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E apascentava Moisés o rebanho de Jetro, seu sogro, sacerdote em Midiã; e levou o rebanho atrás do deserto e veio ao monte de Deus, a Horebe.
² E apareceu-lhe o Anjo do SENHOR em uma chama de fogo do meio de uma sarça; e olhou, e eis que a sarça ardia no fogo, e a sarça não se consumia.
³ E Moisés disse: Agora me virarei para lá e verei esta grande visão, por que a sarça se não queima.
⁴ E vendo o SENHOR que se virava para ver, bradou Deus a ele do meio da sarça e disse: Moisés! Moisés! E ele disse: Eis-me aqui.
⁵ E disse: Não te chegues para cá; tira os sapatos de teus pés; porque o lugar em que tu estás é terra santa.
⁶ Disse mais: Eu sou o Deus de teu pai, o Deus de Abraão, o Deus de Isaque e o Deus de Jacó. E Moisés encobriu o seu rosto, porque temeu olhar para Deus.
⁷ E disse o SENHOR: Tenho visto atentamente a aflição do meu povo, que está no Egito, e tenho ouvido o seu clamor por causa dos seus exatores, porque conheci as suas dores.
⁸ Portanto, desci para livrá-lo da mão dos egípcios e para fazê-lo subir daquela terra a uma terra boa e larga, a uma terra que mana leite e mel; ao lugar do cananeu, e do heteu, e do amorreu, e do ferezeu, e do heveu, e do jebuseu.
⁹ E agora, eis que o clamor dos filhos de Israel chegou a mim, e também tenho visto a opressão com que os egípcios os oprimem.
¹⁰ Vem agora, pois, e eu te enviarei a Faraó, para que tires o meu povo, os filhos de Israel, do Egito.
¹¹ Então, Moisés disse a Deus: Quem sou eu, que vá a Faraó e tire do Egito os filhos de Israel?
¹² E disse: Certamente eu serei contigo; e isto te será por sinal de que eu te enviei: Quando houveres tirado este povo do Egito, servireis a Deus neste monte.
¹³ Então, disse Moisés a Deus: Eis que, quando eu vier aos filhos de Israel e lhes disser: O Deus de vossos pais me enviou a vós; e eles me disserem: Qual é o seu nome? Que lhes direi?
¹⁴ E disse Deus a Moisés: EU SOU O QUE SOU. Disse mais: Assim dirás aos filhos de Israel: EU SOU me enviou a vós.
¹⁵ E Deus disse mais a Moisés: Assim dirás aos filhos de Israel: O SENHOR, o Deus de vossos pais, o Deus de Abraão, o Deus de Isaque e o Deus de Jacó, me enviou a vós; este é meu nome eternamente, e este é meu memorial de geração em geração.
¹⁶ Vai, ajunta os anciãos de Israel e dize-lhes: O SENHOR, o Deus de vossos pais, o Deus de Abraão, de Isaque e de Jacó, me apareceu, dizendo: Certamente vos visitei e vi o que vos foi feito no Egito;
¹⁷ portanto, eu disse: Far-vos-ei subir da aflição do Egito para a terra do cananeu, e do heteu, e do amorreu, e do ferezeu, e do heveu, e do jebuseu, a uma terra que mana leite e mel.
¹⁸ E ouvirão a tua voz; e irás, tu e os anciãos de Israel, ao rei do Egito e dir-lhe-eis: O SENHOR, o Deus dos hebreus, nos encontrou; portanto, agora iremos caminho de três dias ao deserto, para que sacrifiquemos ao SENHOR, nosso Deus.
¹⁹ Eu sei, porém, que o rei do Egito não vos deixará ir, nem ainda por uma mão forte.
²⁰ Porque estenderei a minha mão e ferirei o Egito com todas as minhas maravilhas que farei no meio dele; depois vos deixará ir.
²¹ E eu darei a este povo graça aos olhos dos egípcios; e acontecerá que, quando sairdes, não saireis vazios,
²² porque cada mulher pedirá à sua vizinha e à sua hóspeda vasos de prata, e vasos de ouro, e vestes, os quais poreis sobre vossos filhos e sobre vossas filhas; e despojareis os egípcios.`,

            // O DESAFIO
            pergunta: {
                texto: "Quando Moisés perguntou qual nome deveria dizer aos filhos de Israel, como Deus se identificou a ele do meio da sarça?",
                opcoes: [
                    { numero: 1, texto: "Eu sou o Deus do Egito", correta: false },
                    { numero: 2, texto: "EU SOU O QUE SOU", correta: true },
                    { numero: 3, texto: "O Deus que castiga os opressores", correta: false },
                    { numero: 4, texto: "O Rei de Israel", correta: false }
                ],
                explicacao: "Êxodo 3:14 - Deus revelou-se a Moisés com o nome 'EU SOU O QUE SOU' (Ehyeh asher Ehyeh), indicando Sua existência eterna, autoexistente e fiel à aliança.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 4 ---
        4: {
            titulo: "Os Sinais e a Volta ao Egito",
            subtitulo: "A vara de Deus, a ajuda de Arão e o retorno de Moisés",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Então, respondeu Moisés e disse: Mas eis que não me crerão, nem ouvirão a minha voz, porque dirão: O SENHOR não te apareceu.
² E o SENHOR lhe disse: Que é isso na tua mão? E ele disse: Uma vara.
³ E ele disse: Lança-a na terra. E ele a lançou na terra, e tornou-se em cobra; e Moisés fugia dela.
⁴ Então, disse o SENHOR a Moisés: Estende a mão e pega-lhe pela cauda. E estendeu a mão, e pegou-lhe pela cauda, e tornou-se em vara na sua mão;
⁵ para que creiam que te apareceu o SENHOR, Deus de seus pais, o Deus de Abraão, o Deus de Isaque e o Deus de Jacó.
⁶ E disse-lhe mais o SENHOR: Mete agora a mão no teu seio. E meteu a mão no seu seio; e, quando a tirou, eis que a sua mão estava leprosa, branca como a neve.
⁷ E disse: Torna a meter a mão no teu seio. E tornou a meter a mão no seu seio; depois, tirou-a do seu seio, e eis que se tornara como a sua outra carne.
⁸ E acontecerá que, se não te crerem, nem ouvirem a voz do primeiro sinal, crerão à voz do último sinal;
⁹ e acontecerá que, se não crerem a estes dois sinais, nem ouvirem a tua voz, tomarás das águas do rio e as derramarás na terra seca; e as águas que tomares do rio se tornarão em sangue sobre a terra seca.
¹⁰ Então, disse Moisés ao SENHOR: Ah! Senhor! eu não sou eloquente, nem de ontem nem de anteontem, nem ainda desde que tens falado ao teu servo; porque sou pesado de boca e pesado de língua.
¹¹ E disse-lhe o SENHOR: Quem fez a boca do homem? Ou quem fez o mudo, ou o surdo, ou o que vê, ou o cego? Não sou eu, o SENHOR?
¹² Vai, pois, agora, e eu serei com a tua boca e te ensinarei o que hás de falar.
¹³ Ele, porém, disse: Ah! Senhor! envia pela mão daquele a quem tu hás de enviar.
¹⁴ Então, se acendeu a ira do SENHOR contra Moisés, e disse: Não é Arão, o levita, teu irmão? Eu sei que ele falará muito bem; e também eis que ele sairá ao teu encontro e, vendo-te, se alegrará em seu coração.
¹⁵ E tu lhe falarás e porás as palavras na sua boca; e eu serei com a tua boca e com a sua boca, ensinando-vos o que haveis de fazer.
¹⁶ E ele falará por ti ao povo; e acontecerá que ele te será por boca, e tu lhe serás por Deus.
¹⁷ Toma, pois, esta vara na tua mão, com que farás os sinais.
¹⁸ Então, foi Moisés, e tornou a Jetro, seu sogro, e disse-lhe: Deixa-me ir, peço-te, e voltar a meus irmãos, que estão no Egito, para ver se ainda vivem. Então, Jetro disse a Moisés: Vai em paz.
¹⁹ Disse também o SENHOR a Moisés, em Midiã: Vai, torna ao Egito, porque todos os homens que procuravam a tua morte morreram.
²⁰ Tomou, pois, Moisés sua mulher e seus filhos, e os levou sobre um jumento, e tornou à terra do Egito; e Moisés tomou a vara de Deus na sua mão.
²¹ E disse o SENHOR a Moisés: Quando voltares ao Egito, vê que faças diante de Faraó todas as maravilhas que tenho posto na tua mão; mas eu endurecerei o seu coração, para que não deixe ir o povo.
²² Então, dirás a Faraó: Assim diz o SENHOR: Israel é meu filho, meu primogênito.
²³ E eu te tenho dito: Deixa ir o meu filho, para que me sirva; mas tu recusaste deixá-lo ir; eis que eu matarei a teu filho, o teu primogênito.
²⁴ E aconteceu no caminho, numa estalagem, que o SENHOR o encontrou e o quis matar.
²⁵ Então, Zípora tomou uma pedra aguda, e circuncidou o prepúcio de seu filho, e lançou-o a seus pés, e disse: Certamente tu és para mim um esposo sanguinário.
²⁶ E desviou-se dele. Então, disse ela: Esposo sanguinário, por causa da circuncisão.
²⁷ Disse também o SENHOR a Arão: Vai ao encontro de Moisés ao deserto. E foi e encontrou-o no monte de Deus, e beijou-o.
²⁸ E Moisés anunciou a Arão todas as palavras do SENHOR, com que o enviara, e todos os sinais que lhe mandara.
²⁹ Então, foram Moisés e Arão e ajuntaram todos os anciãos dos filhos de Israel.
³⁰ E Arão falou todas as palavras que o SENHOR falara a Moisés e fez os sinais perante os olhos do povo.
³¹ E o povo creu; e ouviram que o SENHOR visitava os filhos de Israel e que via a sua aflição; então, inclinaram-se e adoraram.`,

            // O DESAFIO
            pergunta: {
                texto: "Diante da reclamação de Moisés sobre não ser eloquente, quem Deus designou para ser o seu porta-voz (a sua 'boca') perante o povo e Faraó?",
                opcoes: [
                    { numero: 1, texto: "Josué, o guerreiro", correta: false },
                    { numero: 2, texto: "Jetro, seu sogro", correta: false },
                    { numero: 3, texto: "Arão, o levita", correta: true },
                    { numero: 4, texto: "Zípora, sua esposa", correta: false }
                ],
                explicacao: "Êxodo 4:14-16 - Deus escolheu Arão, irmão de Moisés, para falar por ele, enquanto Moisés receberia as palavras diretamente de Deus.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 5 ---
        5: {
            titulo: "O Primeiro Confronto com Faraó",
            subtitulo: "O aumento da servidão e a crise de liderança",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Depois, foram Moisés e Arão e disseram a Faraó: Assim diz o SENHOR, Deus de Israel: Deixa ir o meu povo, para que me celebre uma festa no deserto.
² Então, disse Faraó: Quem é o SENHOR, cuja voz eu ouvirei, para deixar ir Israel? Não conheço o SENHOR, nem tampouco deixarei ir Israel.
³ E eles disseram: O Deus dos hebreus nos encontrou; portanto, deixa-nos ir caminho de três dias ao deserto, para que sacrifiquemos ao SENHOR, nosso Deus, para que não venha sobre nós com peste ou com espada.
⁴ Então, disse-lhes o rei do Egito: Moisés e Arão, por que fazeis cessar o povo das suas obras? Ide às vossas cargas.
⁵ Disse também Faraó: Eis que o povo da terra já é muito, e vós o fazeis descansar das suas cargas.
⁶ Portanto, deu ordem Faraó, naquele mesmo dia, aos exatores do povo e aos seus oficiais, dizendo:
⁷ Daqui em diante não torneis a dar palha ao povo, para fazer tijolos, como antes; eles mesmos vão e ajuntem palha para si.
⁸ E lhes imporeis a conta dos tijolos que faziam antes; nada diminuireis dela; porque estão ociosos; por isso, clamam, dizendo: Vamos, sacrifiquemos ao nosso Deus.
⁹ Agrave-se o serviço sobre estes homens, para que se ocupem nele e não confiem em palavras de mentira.
¹⁰ Então, saíram os exatores do povo e seus oficiais e falaram ao povo, dizendo: Assim diz Faraó: Eu não vos darei palha;
¹¹ ide vós mesmos e tomai palha onde a puderdes achar; porém nada se diminuirá do vosso serviço.
¹² Então, o povo se espalhou por toda a terra do Egito, a colher restolho em lugar de palha.
¹³ E os exatores os apertavam, dizendo: Acabai vossa obra, a tarefa de cada dia, como quando havia palha.
¹⁴ E foram açoitados os oficiais dos filhos de Israel, que os exatores de Faraó tinham posto sobre eles, dizendo: Por que não acabastes vossa tarefa, fazendo tijolos como antes, assim também ontem e hoje?
¹⁵ Pelo que foram os oficiais dos filhos de Israel e clamaram a Faraó, dizendo: Por que fazes assim a teus servos?
¹⁶ Palha não se dá a teus servos, e dizem-nos: Fazei tijolos; e eis que teus servos são açoitados; porém o teu povo é o culpado.
¹⁷ Mas ele disse: Estais ociosos, estais ociosos; por isso, dizeis: Vamos, sacrifiquemos ao SENHOR.
¹⁸ Ide, pois, agora, e trabalhai; palha não se vos dará, e dareis a conta dos tijolos.
¹⁹ Então, viram os oficiais dos filhos de Israel que estavam em aflição, porquanto se dizia: Nada diminuireis dos vossos tijolos, da tarefa de cada dia.
²⁰ E encontraram a Moisés e a Arão, que estavam esperando por eles, quando saíam de Faraó.
²¹ E disseram-lhes: O SENHOR atente sobre vós e julgue isso, porquanto fizestes cheirar mal o nosso nome diante de Faraó e diante de seus servos, dando-lhes espada na mão para nos matar.
²² Então, tornou Moisés ao SENHOR e disse: Senhor, por que fizeste mal a este povo? Por que me enviaste?
²³ Porque, desde que entrei a Faraó para falar em teu nome, ele tem maltratado a este povo; e tu de nenhuma sorte livraste o teu povo.`,

            // O DESAFIO
            pergunta: {
                texto: "Qual foi a medida punitiva que Faraó impôs aos israelitas após o pedido de Moisés para que o povo fosse ao deserto?",
                opcoes: [
                    { numero: 1, texto: "Dobrou a quantidade de tijolos exigida", correta: false },
                    { numero: 2, texto: "Parou de fornecer palha, mas manteve a mesma meta de tijolos", correta: true },
                    { numero: 3, texto: "Expulsou os anciãos de Israel para o deserto", correta: false },
                    { numero: 4, texto: "Confiscou todo o gado dos hebreus", correta: false }
                ],
                explicacao: "Êxodo 5:7-8 - Faraó ordenou que não se desse mais palha ao povo para o fabrico de tijolos, exigindo que eles mesmos a colhessem sem diminuir a produção diária.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 6 ---
        6: {
            titulo: "A Promessa de Libertação e a Genealogia",
            subtitulo: "A reafirmação da Aliança e a linhagem de Moisés e Arão",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Então, disse o SENHOR a Moisés: Agora verás o que hei de fazer a Faraó; porque por uma mão poderosa os deixará ir, sim, por uma mão poderosa os lançará fora da sua terra.
² Falou mais Deus a Moisés e disse: Eu sou o SENHOR.
³ E eu apareci a Abraão, a Isaque e a Jacó como o Deus Todo-Poderoso; mas pelo meu nome, o SENHOR, não lhes fui perfeitamente conhecido.
⁴ E também estabeleci o meu concerto com eles, para dar-lhes a terra de Canaã, a terra de suas peregrinações, na qual foram peregrinos.
⁵ E também tenho ouvido o gemido dos filhos de Israel, aos quais os egípcios fazem servir, e lembrei-me do meu concerto.
⁶ Portanto, dize aos filhos de Israel: Eu sou o SENHOR, e vos tirarei de debaixo das cargas dos egípcios, e vos livrarei da sua servidão, e vos resgatarei com braço estendido e com grandes juízos;
⁷ e eu vos tomarei por meu povo e serei vosso Deus; e sabereis que eu sou o SENHOR, vosso Deus, que vos tiro de debaixo das cargas dos egípcios;
⁸ e vos levarei à terra acerca da qual levantei a minha mão, jurando que a daria a Abraão, a Isaque e a Jacó, e vo-la darei por herança, eu, o SENHOR.
⁹ Deste modo, falou Moisés aos filhos de Israel; porém eles não ouviram a Moisés, por causa da ânsia de espírito e da dura servidão.
¹⁰ Falou mais o SENHOR a Moisés, dizendo:
¹¹ Entra, fala a Faraó, rei do Egito, que deixe ir os filhos de Israel da sua terra.
¹² Porém Moisés falou perante o SENHOR, dizendo: Eis que os filhos de Israel não me têm ouvido; como, pois, me ouvirá Faraó? E eu sou incircunciso de lábios.
¹³ Assim, falou o SENHOR a Moisés e a Arão e deu-lhes mandamento para os filhos de Israel e para Faraó, rei do Egito, para que tirassem os filhos de Israel da terra do Egito.
¹⁴ Estes são os cabeças das casas de seus pais: os filhos de Rúben, primogênito de Israel: Enoque, e Palu, Hezrom e Carmi; estas são as famílias de Rúben.
¹⁵ E os filhos de Simeão: Jemuel, e Jamim, e Oade, e Jaquim, e Zoar, e Saul, filho de uma mulher cananeia; estas são as famílias de Simeão.
¹⁶ E estes são os nomes dos filhos de Levi, segundo as suas gerações: Gérson, Coate e Merari; e os anos da vida de Levi foram cento e trinta e sete anos.
¹⁷ Os filhos de Gérson: Libni e Simei, segundo as suas famílias.
¹⁸ E os filhos de Coate: Anrão, e Isar, e Hebrom, e Uziel; e os anos da vida de Coate foram cento e trinta e três anos.
¹⁹ E os filhos de Merari: Mali e Musi; estas são as famílias de Levi, segundo as suas gerações.
²⁰ E Anrão tomou por mulher a Joquebede, sua tia, e ela lhe deu a Arão e a Moisés; e os anos da vida de Anrão foram cento e trinta e sete anos.
²¹ E os filhos de Isar: Corá, e Nefegue, e Zicri.
²² E os filhos de Uziel: Misael, e Elzafã, e Sitri.
²³ E Arão tomou por mulher a Eliseba, filha de Aminadabe, irmã de Naassom; e ela lhe deu Nadabe, e Abiú, Eleazar e Itamar.
²⁴ E os filhos de Corá: Assir, e Elcana, e Abiasafe; estas são as famílias dos coraítas.
²⁵ E Eleazar, filho de Arão, tomou para si uma das filhas de Putiel por mulher, e ela lhe deu a Fineias; estes são os cabeças dos pais dos levitas, segundo as suas famílias.
²⁶ Estes são Arão e Moisés, aos quais o SENHOR disse: Tirai os filhos de Israel da terra do Egito, segundo os seus exércitos.
²⁷ Estes são os que falaram a Faraó, rei do Egito, para tirarem do Egito os filhos de Israel; estes são Moisés e Arão.
²⁸ E aconteceu que, naquele dia, quando o SENHOR falou a Moisés na terra do Egito,
²⁹ falou o SENHOR a Moisés, dizendo: Eu sou o SENHOR; dize a Faraó, rei do Egito, tudo o que eu te digo a ti.
³⁰ Então, disse Moisés perante o SENHOR: Eis que eu sou incircunciso de lábios; como, pois, Faraó me ouvirá?`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com a genealogia apresentada neste capítulo, quem foram os pais de Arão e Moisés?",
                opcoes: [
                    { numero: 1, texto: "Anrão e Joquebede", correta: true },
                    { numero: 2, texto: "Eleazar e Eliseba", correta: false },
                    { numero: 3, texto: "Coate e Sara", correta: false },
                    { numero: 4, texto: "Jacó e Lia", correta: false }
                ],
                explicacao: "Êxodo 6:20 - O texto identifica Anrão e Joquebede, ambos da tribo de Levi, como os pais biológicos de Arão e Moisés.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 7 ---
        7: {
            titulo: "O Início dos Sinais e a Primeira Praga",
            subtitulo: "A vara de Arão e as águas transformadas em sangue",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Então, disse o SENHOR a Moisés: Vê que te tenho posto por deus sobre Faraó, e Arão, teu irmão, será o teu profeta.
² Tu falarás tudo o que eu te ordenar; e Arão, teu irmão, falará a Faraó, que deixe ir os filhos de Israel da sua terra.
³ Eu, porém, endurecerei o coração de Faraó e multiplicarei na terra do Egito os meus sinais e as minhas maravilhas.
⁴ Faraó, porém, não vos ouvirá; então, porei a minha mão sobre o Egito e tirarei os meus exércitos, o meu povo, os filhos de Israel, da terra do Egito, com grandes juízos.
⁵ E os egípcios saberão que eu sou o SENHOR, quando estender a minha mão sobre o Egito e tirar os filhos de Israel do meio deles.
⁶ Assim fizeram Moisés e Arão; como o SENHOR lhes ordenara, assim fizeram.
⁷ E Moisés era da idade de oitenta anos, e Arão, da idade de oitenta e três anos, quando falaram a Faraó.
⁸ E o SENHOR falou a Moisés e a Arão, dizendo:
⁹ Quando Faraó vos falar, dizendo: Mostrai um milagre, dirás a Arão: Toma a tua vara e lança-a diante de Faraó; e ela se tornará em serpente.
¹⁰ Então, Moisés e Arão foram a Faraó e fizeram assim como o SENHOR ordenara; e Arão lançou a sua vara diante de Faraó e diante de seus servos, e tornou-se em serpente.
¹¹ E Faraó também chamou os sábios e encantadores; e os magos do Egito fizeram também o mesmo com os seus encantamentos;
¹² porque cada um lançou sua vara, e tornaram-se em serpentes; mas a vara de Arão tragou as varas deles.
¹³ Porém o coração de Faraó se endureceu, e não os ouviu, como o SENHOR tinha dito.
¹⁴ E disse o SENHOR a Moisés: O coração de Faraó está endurecido; recusa deixar ir o povo.
¹⁵ Vai pela manhã a Faraó; eis que ele sairá às águas; põe-te diante dele à margem do rio; e toma na tua mão a vara que se tornou em cobra.
¹⁶ E dir-lhe-ás: O SENHOR, Deus dos hebreus, me enviou a ti, dizendo: Deixa ir o meu povo, para que me sirva no deserto; porém eis que até agora não tens ouvido.
¹⁷ Assim diz o SENHOR: Nisto conhecerás que eu sou o SENHOR: Eis que com a vara que tenho na mão ferirei as águas que estão no rio, e converter-se-ão em sangue.
¹⁸ E os peixes que estão no rio morrerão, e o rio cheirará mal; e os egípcios terão nojo de beber água do rio.
¹⁹ Disse mais o SENHOR a Moisés: Dize a Arão: Toma a tua vara e estende a tua mão sobre as águas dos egípcios, sobre os seus rios, sobre os seus canais, e sobre os seus lagos, e sobre todo o ajuntamento das suas águas, para que se tornem em sangue; e haja sangue em toda a terra do Egito, assim nos vasos de madeira como nos de pedra.
²⁰ E Moisés e Arão fizeram assim como o SENHOR ordenara; e levantou a vara e feriu as águas que estavam no rio, diante dos olhos de Faraó e diante dos olhos de seus servos; e todas as águas que estavam no rio se tornaram em sangue.
²¹ E os peixes que estavam no rio morreram, e o rio cheirou mal; e os egípcios não podiam beber água do rio; e houve sangue por toda a terra do Egito.
²² Porém os magos do Egito fizeram também o mesmo com seus encantamentos; de maneira que o coração de Faraó se endureceu, e não os ouviu, como o SENHOR tinha dito.
²³ E virou-se Faraó e foi para sua casa; nem ainda nisto pôs o seu coração.
²⁴ E todos os egípcios cavaram poços junto ao rio, para beber água; porque não podiam beber das águas do rio.
²⁵ Assim se cumpriram sete dias, depois que o SENHOR ferira o rio.`,

            // O DESAFIO
            pergunta: {
                texto: "Após a vara de Arão se transformar em serpente diante de Faraó, o que aconteceu quando os magos do Egito fizeram o mesmo com seus encantamentos?",
                opcoes: [
                    { numero: 1, texto: "As serpentes dos magos fugiram para o deserto", correta: false },
                    { numero: 2, texto: "A vara de Arão tragou as varas (serpentes) dos magos", correta: true },
                    { numero: 3, texto: "Faraó ficou com medo e deixou o povo ir imediatamente", correta: false },
                    { numero: 4, texto: "As águas do rio se tornaram em sangue naquele momento", correta: false }
                ],
                explicacao: "Êxodo 7:12 - Embora os magos tenham replicado o sinal, a supremacia de Deus foi demonstrada quando a vara de Arão devorou as varas dos egípcios.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 8 ---
        8: {
            titulo: "Rãs, Piolhos e Moscas",
            subtitulo: "O reconhecimento dos magos e a separação de Gósen",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Depois, disse o SENHOR a Moisés: Entra a Faraó e dize-lhe: Assim diz o SENHOR: Deixa ir o meu povo, para que me sirva.
² E, se recusares deixá-lo ir, eis que ferirei com rãs todos os teus termos.
³ E o rio criará rãs em abundância, que subirão e entrarão em tua casa, e no teu aposento, e sobre o teu leito, e na casa de teus servos, e sobre o teu povo, e nos teus fornos, e nas tuas amassadeiras.
⁴ E as rãs subirão sobre ti, e sobre o teu povo, e sobre todos os teus servos.
⁵ Disse mais o SENHOR a Moisés: Dize a Arão: Estende a tua mão com a tua vara sobre os rios, sobre os canais e sobre os lagos, e faze subir rãs sobre a terra do Egito.
⁶ E Arão estendeu a sua mão sobre as águas do Egito, e subiram rãs e cobriram a terra do Egito.
⁷ Então, os magos fizeram o mesmo com seus encantamentos e fizeram subir rãs sobre a terra do Egito.
⁸ Então, chamou Faraó a Moisés e a Arão e disse: Rogai ao SENHOR que tire as rãs de mim e do meu povo; depois deixarei ir o povo, para que sacrifiquem ao SENHOR.
⁹ E disse Moisés a Faraó: Glorifica-me, dizendo quando rogarei por ti, e por teus servos, e por teu povo, para que as rãs sejam destruídas de ti e das tuas casas e fiquem somente no rio.
¹⁰ E ele disse: Amanhã. E Moisés disse: Seja conforme a tua palavra, para que saibas que ninguém há como o SENHOR, nosso Deus.
¹¹ E as rãs apartar-se-ão de ti, e das tuas casas, e dos teus servos, e do teu povo; somente ficarão no rio.
¹² Então, saíram Moisés e Arão da presença de Faraó; e Moisés clamou ao SENHOR acerca das rãs que tinha posto sobre Faraó.
¹³ E o SENHOR fez conforme a palavra de Moisés; e morreram as rãs nas casas, nos pátios e nos campos.
¹⁴ E ajuntaram-nas em montões, e a terra cheirou mal.
¹⁵ Vendo, porém, Faraó que havia alívio, endureceu o seu coração e não os ouviu, como o SENHOR tinha dito.
¹⁶ Disse mais o SENHOR a Moisés: Dize a Arão: Estende a tua vara e fere o pó da terra, para que se torne em piolhos por toda a terra do Egito.
¹⁷ E fizeram assim; e Arão estendeu a sua mão com a sua vara e feriu o pó da terra, e houve piolhos nos homens e no gado; todo o pó da terra se tornou em piolhos em toda a terra do Egito.
¹⁸ E os magos fizeram assim com seus encantamentos, para produzirem piolhos, porém não puderam; e havia piolhos nos homens e no gado.
¹⁹ Então, disseram os magos a Faraó: Isto é o dedo de Deus. Porém o coração de Faraó se endureceu, e não os ouviu, como o SENHOR tinha dito.
²⁰ Disse mais o SENHOR a Moisés: Levanta-te pela manhã cedo e põe-te diante de Faraó; eis que ele sairá às águas; e dize-lhe: Assim diz o SENHOR: Deixa ir o meu povo, para que me sirva.
²¹ Porque, se não deixares ir o meu povo, eis que enviarei enxames de moscas sobre ti, e sobre os teus servos, e sobre o teu povo, e nas tuas casas; e as casas dos egípcios se encherão destes enxames, como também a terra em que eles estiverem.
²² E, naquele dia, separarei a terra de Gósen, em que meu povo habita, para que nela não haja enxames de moscas; para que saibas que eu sou o SENHOR no meio desta terra.
²³ E porei separação entre o meu povo e o teu povo; amanhã se fará este sinal.
²⁴ E o SENHOR assim fez; e vieram grandes enxames de moscas à casa de Faraó, e às casas dos seus servos, e sobre toda a terra do Egito; a terra foi corrompida destes enxames.
²⁵ Então, chamou Faraó a Moisés e a Arão e disse: Ide, sacrificai a vosso Deus nesta terra.
²⁶ E Moisés disse: Não convém que façamos assim, porque sacrificaríamos ao SENHOR, nosso Deus, a abominação dos egípcios; eis que, se sacrificarmos a abominação dos egípcios perante os seus olhos, não nos apedrejarão eles?
²⁷ Deixa-nos ir caminho de três dias ao deserto, para que sacrifiquemos ao SENHOR, nosso Deus, como ele nos disser.
²⁸ Então, disse Faraó: Eu vos deixarei ir, para que sacrifiqueis ao SENHOR, vosso Deus, no deserto; somente que, indo, não vades longe; orai também por mim.
²⁹ E disse Moisés: Eis que saio da tua presença e orarei ao SENHOR; e amanhã os enxames de moscas se apartarão de Faraó, e dos seus servos, e do seu povo; somente que Faraó não mais proceda enganosamente, não deixando ir o povo para sacrificar ao SENHOR.
³⁰ Então, saiu Moisés da presença de Faraó e orou ao SENHOR.
³¹ E fez o SENHOR conforme a palavra de Moisés; e apartou os enxames de moscas de Faraó, dos seus servos e do seu povo; não ficou uma só.
³² Mas endureceu Faraó ainda esta vez o seu coração e não deixou ir o povo.`,

            // O DESAFIO
            pergunta: {
                texto: "A partir de qual praga os magos do Egito não conseguiram mais imitar os sinais de Deus e declararam: 'Isto é o dedo de Deus'?",
                opcoes: [
                    { numero: 1, texto: "A praga das rãs", correta: false },
                    { numero: 2, texto: "A praga dos piolhos", correta: true },
                    { numero: 3, texto: "A praga das moscas", correta: false },
                    { numero: 4, texto: "A praga do sangue", correta: false }
                ],
                explicacao: "Êxodo 8:18-19 - Os magos tentaram produzir piolhos com seus encantamentos, mas falharam, reconhecendo que aquele poder vinha diretamente de Deus.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 9 ---
        9: {
            titulo: "Peste, Úlceras e a Chuva de Pedras",
            subtitulo: "O julgamento sobre os animais, a saúde e as plantações",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Depois, o SENHOR disse a Moisés: Entra a Faraó e dize-lhe: Assim diz o SENHOR, o Deus dos hebreus: Deixa ir o meu povo, para que me sirva.
² Porque, se recusares deixá-los ir e ainda os detiveres,
³ eis que a mão do SENHOR será sobre o teu gado, que está no campo, sobre os cavalos, sobre os jumentos, sobre os camelos, sobre os bois e sobre as ovelhas, com pestilência gravíssima.
⁴ E o SENHOR fará separação entre o gado de Israel e o gado do Egito, para que nada morra de tudo o que for dos filhos de Israel.
⁵ E o SENHOR assinalou certo tempo, dizendo: Amanhã fará o SENHOR esta coisa na terra.
⁶ E o SENHOR fez esta coisa no dia seguinte, e todo o gado dos egípcios morreu; porém, do gado dos filhos de Israel, não morreu um só.
⁷ E Faraó mandou ver, e eis que do gado de Israel não morrera nem um só; porém o coração de Faraó se endureceu, e não deixou ir o povo.
⁸ Então, disse o SENHOR a Moisés e a Arão: Tomai vossas mãos cheias de cinza de forno, e Moisés a espalhe para o céu diante dos olhos de Faraó;
⁹ e tornar-se-á em pó miúdo sobre toda a terra do Egito, e se tornará em úlcera que arrebente em gomos nos homens e no gado, por toda a terra do Egito.
¹⁰ E eles tomaram a cinza do forno e puseram-se diante de Faraó, e Moisés a espalhou para o céu; e tornou-se em úlcera que arrebentava em gomos nos homens e no gado.
¹¹ De maneira que os magos não podiam parar diante de Moisés, por causa das úlceras; porque havia úlceras nos magos e em todos os egípcios.
¹² Porém o SENHOR endureceu o coração de Faraó, e não os ouviu, como o SENHOR tinha dito a Moisés.
¹³ Depois, disse o SENHOR a Moisés: Levanta-te pela manhã cedo, e põe-te diante de Faraó, e dize-lhe: Assim diz o SENHOR, o Deus dos hebreus: Deixa ir o meu povo, para que me sirva.
¹⁴ Porque esta vez enviarei todas as minhas pragas sobre o teu coração, e sobre os teus servos, e sobre o teu povo, para que saibas que não há outro como eu em toda a terra.
¹⁵ Porque agora tenho estendido a minha mão, para te ferir a ti e ao teu povo com pestilência, e para que sejas destruído da terra;
¹⁶ mas, deveras, para isto te mantive, para mostrar o meu poder em ti e para que o meu nome seja anunciado em toda a terra.
¹⁷ Tu ainda te engrandeces contra o meu povo, para não os deixar ir?
¹⁸ Eis que amanhã, por este tempo, farei chover saraiva mui grave, qual nunca houve no Egito, desde o dia em que foi fundado até agora.
¹⁹ Agora, pois, manda recolher o teu gado e tudo o que tens no campo; porque toda criatura que se achar no campo e não se recolher à casa, a saraiva cairá sobre ela, e morrerá.
²⁰ Quem dos servos de Faraó temia a palavra do SENHOR, fez fugir os seus servos e o seu gado para as casas;
²¹ mas aquele que não tinha o coração posto na palavra do SENHOR deixou os seus servos e o seu gado no campo.
²² Então, disse o SENHOR a Moisés: Estende a tua mão para o céu, e haja saraiva em toda a terra do Egito, sobre os homens, e sobre o gado, e sobre toda a erva do campo na terra do Egito.
²³ E Moisés estendeu a sua vara para o céu, e o SENHOR deu trovões e saraiva, e fogo corria pela terra; e o SENHOR fez chover saraiva sobre a terra do Egito.
²⁴ E havia saraiva e fogo misturado com a saraiva, mui grave, qual nunca houve em toda a terra do Egito, desde que veio a ser uma nação.
²⁵ E a saraiva feriu, em toda a terra do Egito, tudo quanto havia no campo, desde os homens até aos animais; também a saraiva feriu toda a erva do campo e quebrou todas as árvores do campo.
²⁶ Somente na terra de Gósen, onde estavam os filhos de Israel, não havia saraiva.
²⁷ Então, Faraó mandou chamar a Moisés e a Arão e disse-lhes: Esta vez pequei; o SENHOR é justo, mas eu e o meu povo somos ímpios.
²⁸ Orai ao SENHOR; pois que bastam estes grandes trovões e esta saraiva; e eu vos deixarei ir, e não ficareis mais aqui.
²⁹ Então, lhe disse Moisés: Em saindo eu da cidade, estenderei as minhas mãos ao SENHOR; os trovões cessarão, e não haverá mais saraiva; para que saibas que a terra é do SENHOR.
³⁰ Todavia, quanto a ti e aos teus servos, eu sei que ainda não temereis diante do SENHOR Deus.
³¹ E o linho e a cevada foram feridos, porque a cevada já estava na espiga, e o linho, na flor.
³² Mas o trigo e o centeio não foram feridos, porque estavam cobertos.
³³ Saiu, pois, Moisés da presença de Faraó e da cidade e estendeu as suas mãos ao SENHOR; e cessaram os trovões e a saraiva, e a chuva não caiu mais sobre a terra.
³⁴ Vendo Faraó que a chuva, e a saraiva, e os trovões cessaram, continuou a pecar e endureceu o seu coração, ele e os seus servos.
³⁵ Assim, o coração de Faraó se endureceu, e não deixou ir os filhos de Israel, como o SENHOR tinha dito por Moisés.`,

            // O DESAFIO
            pergunta: {
                texto: "Durante a praga da saraiva (chuva de pedras), o que aconteceu com a terra de Gósen, onde habitavam os filhos de Israel?",
                opcoes: [
                    { numero: 1, texto: "Foi atingida apenas por uma chuva leve", correta: false },
                    { numero: 2, texto: "Nela não houve saraiva", correta: true },
                    { numero: 3, texto: "Foi destruída juntamente com o Egito", correta: false },
                    { numero: 4, texto: "As pedras de gelo se transformaram em pão", correta: false }
                ],
                explicacao: "Êxodo 9:26 - O texto bíblico enfatiza a distinção divina, relatando que somente na terra de Gósen não caiu a chuva de pedras e fogo.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 10 ---
        10: {
            titulo: "Gafanhotos e Trevas Espessas",
            subtitulo: "A destruição da vegetação e a escuridão sobre o Egito",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Depois, disse o SENHOR a Moisés: Entra a Faraó, porque tenho endurecido o seu coração e o coração de seus servos, para fazer estes meus sinais no meio deles,
² e para que contes aos ouvidos de teus filhos e dos filhos de teus filhos as coisas que fiz no Egito e os meus sinais que tenho feito entre eles; para que saibais que eu sou o SENHOR.
³ Assim, foram Moisés e Arão a Faraó e disseram-lhe: Assim diz o SENHOR, o Deus dos hebreus: Até quando recusarás humilhar-te diante de mim? Deixa ir o meu povo, para que me sirva.
⁴ Porque, se ainda recusares deixar ir o meu povo, eis que amanhã trarei gafanhotos aos teus termos.
⁵ E cobrirão a face da terra, de modo que não se poderá ver a terra; e eles comerão o resto do que escapou, o que vos ficou da saraiva; também comerão toda árvore que vos nasce no campo;
⁶ e encherão as tuas casas, e as casas de todos os teus servos, e as casas de todos os egípcios, qual nunca viram teus pais, nem os pais de teus pais, desde o dia em que se acharam na terra até o dia de hoje. E virou-se e saiu da presença de Faraó.
⁷ E os servos de Faraó disseram-lhe: Até quando este homem nos será por laço? Deixa ir os homens, para que sirvam ao SENHOR, seu Deus; sabes porventura ainda que o Egito está destruído?
⁸ Então, Moisés e Arão foram levados outra vez a Faraó, e ele disse-lhes: Ide, servi ao SENHOR, vosso Deus. Quais são os que hão de ir?
⁹ E Moisés disse: Havemos de ir com os nossos jovens, e com os nossos velhos, e com os nossos filhos, e com as nossas filhas, e com as nossas ovelhas, e com os nossos bois havemos de ir; porque temos de celebrar uma festa ao SENHOR.
¹⁰ Então, ele lhes disse: Seja o SENHOR assim convosco, como eu vos deixarei ir a vós e a vossos filhos; vede que há mal diante da vossa face.
¹¹ Não será assim; ide agora vós, homens, e servi ao SENHOR; pois isso é o que pedistes. E os lançaram da presença de Faraó.
¹² Então, disse o SENHOR a Moisés: Estende a tua mão sobre a terra do Egito, para que venham gafanhotos sobre a terra do Egito e comam toda a erva da terra, tudo o que deixou a saraiva.
¹³ Então, estendeu Moisés sua vara sobre a terra do Egito, e o SENHOR trouxe sobre a terra um vento oriental todo aquele dia e toda aquela noite; e aconteceu que, vindo a manhã, o vento oriental trouxe os gafanhotos.
¹⁴ E subiram os gafanhotos sobre toda a terra do Egito e assentaram-se sobre todos os termos do Egito; mui gravosos foram; antes destes nunca houve tais gafanhotos, nem depois deles virão outros tais.
¹⁵ Porque cobriram a face de toda a terra, de modo que a terra se escureceu; e comeram toda a erva da terra e todo o fruto das árvores que deixara a saraiva; e não ficou verde algum nas árvores, nem na erva do campo, em toda a terra do Egito.
¹⁶ Então, Faraó se apressou a chamar a Moisés e a Arão e disse: Pequei contra o SENHOR, vosso Deus, e contra vós.
¹⁷ Agora, pois, peço-vos que perdoeis o meu pecado somente desta vez e rogueis ao SENHOR, vosso Deus, que tire de mim somente esta morte.
¹⁸ E saiu da presença de Faraó e orou ao SENHOR.
¹¹⁹ Então, o SENHOR trouxe um vento ocidental fortíssimo, o qual levantou os gafanhotos e os lançou no mar Vermelho; não ficou um só gafanhoto em todos os termos do Egito.
²⁰ O SENHOR, porém, endureceu o coração de Faraó, e este não deixou ir os filhos de Israel.
²¹ Então, disse o SENHOR a Moisés: Estende a tua mão para o céu, e haverá trevas sobre a terra do Egito, trevas que se apalpem.
²² E Moisés estendeu a sua mão para o céu, e houve trevas espessas em toda a terra do Egito por três dias.
²³ Não viu um ao outro, e ninguém se levantou do seu lugar por três dias; mas todos os filhos de Israel tinham luz em suas habitações.
²⁴ Então, Faraó chamou a Moisés e disse: Ide, servi ao SENHOR; somente fiquem vossas ovelhas e vossos bois; vão também convosco as vossas crianças.
²⁵ Moisés, porém, disse: Tu também nos tens de dar em nossas mãos sacrifícios e holocaustos, que ofereçamos ao SENHOR, nosso Deus.
²⁶ E também o nosso gado há de ir conosco, nem uma unha ficará; porque daquele havemos de tomar para servir ao SENHOR, nosso Deus; porque não sabemos com que havemos de servir ao SENHOR, até que cheguemos lá.
²⁷ O SENHOR, porém, endureceu o coração de Faraó, e este não os quis deixar ir.
²⁸ E disse-lhe Faraó: Vai-te de mim! Guarda-te que não vejas mais o meu rosto; porque, no dia em que vires o meu rosto, morrerás.
²⁹ E disse Moisés: Bem disseste; eu não verei mais o teu rosto.`,

            // O DESAFIO
            pergunta: {
                texto: "Durante a nona praga, por quanto tempo as trevas cobriram a terra do Egito, impedindo que os egípcios vissem uns aos outros ou se levantassem de seus lugares?",
                opcoes: [
                    { numero: 1, texto: "Sete dias", correta: false },
                    { numero: 2, texto: "Um dia inteiro", correta: false },
                    { numero: 3, texto: "Três dias", correta: true },
                    { numero: 4, texto: "Quarenta dias", correta: false }
                ],
                explicacao: "Êxodo 10:22-23 - O texto relata que houve trevas espessas por três dias em todo o Egito, enquanto os filhos de Israel tinham luz em suas habitações.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 11 ---
        11: {
            titulo: "O Anúncio da Décima Praga",
            subtitulo: "A última advertência e a distinção final",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E o SENHOR disse a Moisés: Ainda uma praga trarei sobre Faraó e sobre o Egito; depois, vos deixará ir daqui; e, quando vos deixar ir totalmente, a toda a pressa vos lançará daqui.
² Fala agora aos ouvidos do povo, e que cada homem peça ao seu vizinho, e cada mulher à sua vizinha, objetos de prata e objetos de ouro.
³ E o SENHOR deu graça ao povo aos olhos dos egípcios; também o homem Moisés era mui grande na terra do Egito, aos olhos dos servos de Faraó e aos olhos do povo.
⁴ Disse mais Moisés: Assim o SENHOR tem dito: À meia-noite, eu sairei pelo meio do Egito;
⁵ e todo primogênito na terra do Egito morrerá, desde o primogênito de Faraó, que se assenta sobre o seu trono, até ao primogênito da serva que está detrás da mó, e todo primogênito dos animais.
⁶ E haverá grande clamor em toda a terra do Egito, qual nunca houve nem haverá jamais.
⁷ Mas, contra todos os filhos de Israel, nem ainda um cão moverá a sua língua, desde os homens até aos animais, para que saibais que o SENHOR fez diferença entre os egípcios e os israelitas.
⁸ Então, todos estes teus servos descerão a mim e se inclinarão diante de mim, dizendo: Sai tu e todo o povo que te segue as pegadas; e, depois disto, sairei. E saiu da presença de Faraó em grande ira.
⁹ O SENHOR dissera a Moisés: Faraó não vos ouvirá, para que as minhas maravilhas se multipliquem na terra do Egito.
¹⁰ E Moisés e Arão fizeram todas estas maravilhas diante de Faraó; mas o SENHOR endureceu o coração de Faraó, que não deixou ir os filhos de Israel da sua terra.`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com a advertência de Moisés, a que horas o SENHOR passaria pelo meio do Egito para ferir os primogênitos?",
                opcoes: [
                    { numero: 1, texto: "Ao amanhecer", correta: false },
                    { numero: 2, texto: "Ao pôr do sol", correta: false },
                    { numero: 3, texto: "À meia-noite", correta: true },
                    { numero: 4, texto: "Ao meio-dia", correta: false }
                ],
                explicacao: "Êxodo 11:4 - Moisés anunciou que, à meia-noite, o SENHOR sairia pelo meio do Egito para executar o juízo final sobre os primogênitos.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 12 ---
        12: {
            titulo: "A Instituição da Páscoa e o Êxodo",
            subtitulo: "A décima praga e a saída do Egito após 430 anos",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E falou o SENHOR a Moisés e a Arão na terra do Egito, dizendo:
² Este mês vos será o princípio dos meses; este vos será o primeiro dos meses do ano.
³ Falai a toda a congregação de Israel, dizendo: Aos dez deste mês, tome cada um para si um cordeiro, segundo as casas dos pais, um cordeiro para cada casa.
⁴ Mas, se a casa for pequena demais para um cordeiro, então, tome - o com o seu vizinho perto de sua casa, conforme o número das almas; conforme o comer de cada um, fareis a conta conforme o cordeiro.
⁵ O cordeiro, ou cabrito, será sem mácula, um macho de um ano, o qual tomareis das ovelhas ou das cabras;
⁶ e o guardareis até ao décimo quarto dia deste mês, e todo o ajuntamento da congregação de Israel o sacrificará à tarde.
⁷ E tomarão do sangue e pô - lo - ão em ambas as ombreiras e na verga da porta, nas casas em que o comerem.
⁸ E aquela noite comerão a carne assada no fogo, com pães asmos; com ervas amargosas a comerão.
⁹ Não comereis dele nada cru, nem cozido em água, senão assado ao fogo; a cabeça com os pés e com a fressura.
¹⁰ E nada dele deixareis até amanhã; mas o que dele ficar até amanhã, queimareis no fogo.
¹¹ Assim, pois, o comereis: os vossos lombos cingidos, os vossos sapatos nos pés, e o vosso cajado na mão; e o comereis apressadamente; esta é a Páscoa do SENHOR.
¹² E eu passarei pela terra do Egito esta noite e ferirei todo primogênito na terra do Egito, desde os homens até aos animais; e sobre todos os deuses do Egito farei juízos.Eu sou o SENHOR.
¹³ E aquele sangue vos será por sinal nas casas em que estiverdes; vendo eu o sangue, passarei por cima de vós, e não haverá entre vós praga de mortandade, quando eu ferir a terra do Egito.
¹⁴ E este dia vos será por memória, e celebrá - lo - eis por festa ao SENHOR; nas vossas gerações o celebrareis por estatuto perpétuo.
¹⁵ Sete dias comereis pães asmos; ao primeiro dia, tirareis o fermento das vossas casas; porque qualquer que comer pão levedado, desde o primeiro dia até ao sétimo dia, aquela alma será cortada de Israel.
¹⁶ E, ao primeiro dia, haverá santa convocação; também, ao sétimo dia, tereis santa convocação; nenhuma obra se fará neles, senão o que cada alma houver de comer; isso somente podereis fazer.
¹⁷ Guardai, pois, a Festa dos Pães Asmos, porque naquele mesmo dia tirei vossos exércitos da terra do Egito; pelo que guardareis este dia nas vossas gerações por estatuto perpétuo.
¹⁸ No primeiro mês, aos catorze dias do mês, à tarde, comereis pães asmos até vinte e um do mês à tarde.
¹⁹ Por sete dias, não se ache nenhum fermento nas vossas casas; porque qualquer que comer pão levedado, aquela alma será cortada da congregação de Israel, assim o estrangeiro como o natural da terra.
²⁰ Nenhuma coisa levedada comereis; em todas as vossas habitações comereis pães asmos.
²¹ Chamou, pois, Moisés a todos os anciãos de Israel e disse - lhes: Escolhei, e tomai vós cordeiros para vossas famílias, e sacrificai a Páscoa.
²² Então, tomai um molho de hissopo, e molhai - o no sangue que estiver na bacia, e ponde - o na verga da porta e em ambas as ombreiras, do sangue que estiver na bacia; porém nenhum de vós saia da porta da sua casa até à manhã.
²³ Porque o SENHOR passará para ferir aos egípcios, porém, quando vir o sangue na verga da porta e em ambas as ombreiras, o SENHOR passará aquela porta e não deixará o destruidor entrar em vossas casas para vos ferir.
²⁴ Portanto, guardai isto por estatuto para vós e para vossos filhos, para sempre.
²⁵ E acontecerá que, quando entrardes na terra que o SENHOR vos dará, como tem dito, guardareis este culto.
²⁶ E acontecerá que, quando vossos filhos vos disserem: Que culto é este vosso ?
²⁷ Então, direis: Este é o sacrifício da Páscoa do SENHOR, que passou as casas dos filhos de Israel no Egito, quando feriu aos egípcios e livrou as nossas casas.Então, o povo inclinou - se e adorou.
²⁸ E foram os filhos de Israel e fizeram isso; como o SENHOR ordenara a Moisés e a Arão, assim fizeram.
²⁹ E aconteceu, à meia - noite, que o SENHOR feriu todos os primogênitos na terra do Egito, desde o primogênito de Faraó, que se assentava em seu trono, até ao primogênito do cativo que estava no cárcere, e todos os primogênitos dos animais.
³⁰ E Faraó levantou - se de noite, ele, e todos os seus servos, e todos os egípcios; e havia grande clamor no Egito, porque não havia casa em que não houvesse um morto.
³¹ Então, chamou a Moisés e a Arão de noite e disse: Levantai - vos, saí do meio do meu povo, assim vós como os filhos de Israel; e ide, servi ao SENHOR, como tendes dito.
³² Levai também convosco as vossas ovelhas e as vossas vacas, como tendes dito; e ide e abençoai - me também a mim.
³³ E os egípcios apertavam ao povo, apressando - se para lançá - los fora da terra; porque diziam: Todos seremos mortos.
³⁴ E o povo tomou a sua massa, antes que levedasse, e as suas amassadeiras atadas em seus vestidos sobre os seus ombros.
³⁵ Fizeram, pois, os filhos de Israel conforme a palavra de Moisés e pediram aos egípcios objetos de prata, e objetos de ouro, e vestidos.
³⁶ E o SENHOR deu graça ao povo aos olhos dos egípcios, e estes lhes davam o que pediam; e despojaram os egípcios.
³⁷ Assim, partiram os filhos de Israel de Ramessés para Sucote, cerca de seiscentos mil a pé, somente de homens, sem contar as crianças.
³⁸ E subiu também com eles muita mistura de gente, e ovelhas, e vacas, e muitíssimo gado.
³⁹ E cozeram bolos asmos da massa que levaram do Egito, porque não se tinha levedado, porquanto foram lançados fora do Egito e não se puderam deter, nem prepararam para si comida.
⁴⁰ Ora, o tempo que os filhos de Israel habitaram no Egito foi de quatrocentos e trinta anos.
⁴¹ E aconteceu que, passados os quatrocentos e trinta anos, naquele mesmo dia, todos os exércitos do SENHOR saíram da terra do Egito.
⁴² Esta noite se guardará ao SENHOR, porque nela os tirou da terra do Egito; esta é a noite do SENHOR, que devem guardar todos os filhos de Israel nas suas gerações.
⁴³ Disse mais o SENHOR a Moisés e a Arão: Esta é a ordenança da Páscoa: nenhum estrangeiro comerá dela.
⁴⁴ Porém todo servo de qualquer, comprado por dinheiro, depois que o houveres circuncidado, então, comerá dela.
⁴⁵ O estrangeiro e o assalariado não comerão dela.
⁴⁶ Numa casa se comerá; não levarás daquela carne fora da casa, nem dela quebrareis osso algum.
⁴⁷ Toda a congregação de Israel o fará.
⁴⁸ Porém, se algum estrangeiro se hospedar contigo e quiser celebrar a Páscoa ao SENHOR, seja - lhe circuncidado todo macho, e, então, chegará a celebrá - la, e será como o natural da terra; mas nenhum incircunciso comerá dela.
⁴⁹ Uma mesma lei haja para o natural e para o estrangeiro que peregrinar entre vós.
⁵⁰ E todos os filhos de Israel o fizeram; como o SENHOR ordenara a Moisés e a Arão, assim fizeram.
⁵¹ E aconteceu naquele mesmo dia que o SENHOR tirou os filhos de Israel da terra do Egito, segundo os seus exércitos.`,

            // O DESAFIO
            pergunta: {
                texto: "Qual erva deveria ser utilizada, segundo a instrução de Moisés, para molhar no sangue do cordeiro e marcar as vergas e ombreiras das portas?",
                opcoes: [
                    { numero: 1, texto: "Sândalo", correta: false },
                    { numero: 2, texto: "Arruda", correta: false },
                    { numero: 3, texto: "Hissopo", correta: true },
                    { numero: 4, texto: "Zimbro", correta: false }
                ],
                explicacao: "Êxodo 12:22 - O povo foi instruído a tomar um molho de hissopo, mergulhá-lo no sangue que estava na bacia e marcar as entradas das casas para proteção contra o destruidor.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 13 ---
        13: {
            titulo: "A Consagração dos Primogênitos e a Coluna de Nuvem",
            subtitulo: "A saída estratégica e a guia divina no deserto",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Então, falou o SENHOR a Moisés, dizendo:
² Santifica-me todo primogênito, todo o que abrir a madre entre os filhos de Israel, de homens e de animais; meu é.
³ E Moisés disse ao povo: Lembrai-vos deste mesmo dia, em que saístes do Egito, da casa da servidão; pois com mão forte o SENHOR vos tirou daqui; portanto, não comereis pão levedado.
⁴ Hoje, no mês de abibe, vós saís.
⁵ E acontecerá que, quando o SENHOR te houver introduzido na terra dos cananeus, e dos heteus, e dos amorreus, e dos heveus, e dos jebuseus, a qual jurou a teus pais que te daria, terra que mana leite e mel, guardarás este culto neste mês.
⁶ Sete dias comerás pães asmos, e ao sétimo dia haverá festa ao SENHOR.
⁷ Pães asmos se comerão sete dias, e o levedado não se verá contigo, nem ainda fermento se verá em todos os teus termos.
⁸ E naquele mesmo dia farás saber a teu filho, dizendo: Isto é pelo que o SENHOR me fez, quando eu saí do Egito.
⁹ E te será por sinal sobre tua mão e por memorial entre teus olhos; para que a lei do SENHOR esteja em tua boca; porquanto com mão forte o SENHOR te tirou do Egito.
¹⁰ Portanto, tu guardarás este estatuto a seu tempo, de ano em ano.
¹¹ Também acontecerá que, quando o SENHOR te houver introduzido na terra dos cananeus, como jurou a ti e a teus pais, quando te a houver dado,
¹² apartarás para o SENHOR tudo o que abrir a madre, e tudo o que abrir a madre do que tiveres de animais; os machos serão do SENHOR.
¹³ Porém tudo o que abrir a madre do jumento resgatarás com um cordeiro; e, se o não resgatares, cortar-lhe-ás a cabeça; mas todo primogênito do homem entre teus filhos resgatarás.
¹⁴ E acontecerá que, quando teu filho te perguntar no futuro, dizendo: Que é isto? Dir-lhe-ás: O SENHOR nos tirou com mão forte do Egito, da casa da servidão.
¹⁵ Porque sucedeu que, endurecendo-se Faraó, para não nos deixar ir, o SENHOR matou todos os primogênitos na terra do Egito, desde o primogênito do homem até ao primogênito dos animais; por isso, eu sacrifico ao SENHOR todos os machos que abrem a madre; mas a todo primogênito de meus filhos eu resgato.
¹⁶ E será por sinal sobre tua mão e por frontais entre os teus olhos; porque o SENHOR nos tirou do Egito com mão forte.
¹⁷ E aconteceu que, quando Faraó deixou ir o povo, Deus não os levou pelo caminho da terra dos filisteus, que estava mais perto; porque Deus disse: Para que, porventura, o povo não se arrependa, vendo a guerra, e volte ao Egito.
¹⁸ Mas Deus fez rodear o povo pelo caminho do deserto do mar Vermelho; e armados subiram os filhos de Israel da terra do Egito.
¹⁹ E Moisés levou consigo os ossos de José, porquanto havia este estreitamente ajuramentado aos filhos de Israel, dizendo: Certamente Deus vos visitará; fazei, pois, subir daqui os meus ossos convosco.
²⁰ Assim, partiram de Sucote e acamparam-se em Etã, à entrada do deserto.
²¹ E o SENHOR ia adiante deles, de dia numa coluna de nuvem, para os guiar pelo caminho, e de noite numa coluna de fogo, para os iluminar, para que caminhassem de dia e de noite.
²² Nunca tirou de diante do povo a coluna de nuvem, de dia, nem a coluna de fogo, de noite.`,

            // O DESAFIO
            pergunta: {
                texto: "De que maneira o SENHOR guiava o povo de Israel pelo caminho, durante o dia e durante a noite, após a saída do Egito?",
                opcoes: [
                    { numero: 1, texto: "Por meio de mensageiros montados a cavalo", correta: false },
                    { numero: 2, texto: "Através de uma coluna de nuvem de dia e uma coluna de fogo de noite", correta: true },
                    { numero: 3, texto: "Seguindo as estrelas e o sol", correta: false },
                    { numero: 4, texto: "Apenas pela orientação verbal de Moisés", correta: false }
                ],
                explicacao: "Êxodo 13:21-22 - O texto descreve a presença visível de Deus guiando o povo: uma coluna de nuvem para o caminho de dia e uma coluna de fogo para iluminar a noite.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 14 ---
        14: {
            titulo: "A Travessia do Mar Vermelho",
            subtitulo: "O livramento final e a destruição do exército de Faraó",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Então, falou o SENHOR a Moisés, dizendo:
² Fala aos filhos de Israel que voltem e que se acampem diante de Pi-Hairote, entre Migdol e o mar, diante de Baal-Zefom; em frente dele assentareis o campo junto ao mar.
³ Então, Faraó dirá dos filhos de Israel: Estão embaraçados na terra, o deserto os encerrou.
⁴ E eu endurecerei o coração de Faraó, para que os persiga, e serei glorificado em Faraó e em todo o seu exército; e saberão os egípcios que eu sou o SENHOR. E eles fizeram assim.
⁵ Sendo, pois, anunciado ao rei do Egito que o povo fugia, mudou-se o coração de Faraó e dos seus servos contra o povo, e disseram: Por que fizemos isso, havendo deixado ir a Israel, para que nos não sirva?
⁶ E aprontou o seu carro e tomou consigo o seu povo.
⁷ E tomou seiscentos carros escolhidos, e todos os carros do Egito, e capitães sobre eles todos.
⁸ Porque o SENHOR endureceu o coração de Faraó, rei do Egito, para que perseguisse os filhos de Israel; porém os filhos de Israel saíram com alta mão.
⁹ E os egípcios perseguiram-nos, todos os cavalos e carros de Faraó, e os seus cavaleiros, e o seu exército e alcançaram-nos acampados junto ao mar, perto de Pi-Hairote, diante de Baal-Zefom.
¹⁰ E, chegando Faraó, os filhos de Israel levantaram seus olhos, e eis que os egípcios vinham atrás deles, e temeram muito; então, os filhos de Israel clamaram ao SENHOR.
¹¹ E disseram a Moisés: Não havia sepulcros no Egito, para nos tirares de lá, para que morramos neste deserto? Por que nos fizeste isto, que nos tiraste do Egito?
¹² Não é esta a palavra que te falámos no Egito, dizendo: Deixa-nos, para que sirvamos aos egípcios? Pois melhor nos fora servir aos egípcios do que morrermos no deserto.
¹³ Moisés, porém, disse ao povo: Não temais; estai quietos e vede o livramento do SENHOR, que hoje vos fará; porque aos egípcios, que hoje vistes, nunca mais vereis para sempre.
¹⁴ O SENHOR pelejará por vós, e vós vos calareis.
¹⁵ Então, disse o SENHOR a Moisés: Por que clamas a mim? Dize aos filhos de Israel que caminhem.
¹⁶ E tu, levanta a tua vara, e estende a tua mão sobre o mar, e fende-o, para que os filhos de Israel passem pelo meio do mar em seco.
¹⁷ E eis que endurecerei o coração dos egípcios para que entrem após eles; e eu serei glorificado em Faraó, e em todo o seu exército, nos seus carros e nos seus cavaleiros.
¹⁸ E os egípcios saberão que eu sou o SENHOR, quando for glorificado em Faraó, nos seus carros e nos seus cavaleiros.
¹⁹ E o anjo de Deus, que ia diante do exército de Israel, se retirou e ia atrás deles; também a coluna de nuvem se retirou de diante deles e se pôs atrás deles.
²⁰ E ia entre o campo dos egípcios e o campo de Israel; e a nuvem era trevas para aqueles e para estes esclarecia a noite; de maneira que em toda a noite não se aproximou um do outro.
²¹ Então, Moisés estendeu a sua mão sobre o mar, e o SENHOR fez retirar o mar por um forte vento oriental toda aquela noite; e o mar tornou-se em seco, e as águas foram fendidas.
²² E os filhos de Israel entraram pelo meio do mar em seco; e as águas lhes foram como muro à sua direita e à sua esquerda.
²³ E os egípcios perseguiram-nos e entraram atrás deles todos os cavalos de Faraó, os seus carros e os seus cavaleiros, até ao meio do mar.
²⁴ E aconteceu que, na vigília daquela manhã, o SENHOR, na coluna de fogo e de nuvem, espreitou o campo dos egípcios e alvoroçou o campo dos egípcios.
²⁵ E tirou-lhes as rodas dos seus carros e fê-los andar dificultosamente; então, disseram os egípcios: Fujamos de diante de Israel, porque o SENHOR peleja por eles contra os egípcios.
²⁶ E disse o SENHOR a Moisés: Estende a tua mão sobre o mar, para que as águas tornem sobre os egípcios, sobre os seus carros e sobre os seus cavaleiros.
²⁷ Então, Moisés estendeu a sua mão sobre o mar, e o mar retomou a sua força ao amanhecer, e os egípcios fugiram ao seu encontro; e o SENHOR derribou os egípcios no meio do mar.
²⁸ Porque as águas, tornando, cobriram os carros e os cavaleiros de todo o exército de Faraó, que atrás deles havia entrado no mar; nem ainda um deles ficou.
²⁹ Mas os filhos de Israel caminharam pelo meio do mar em seco; e as águas foram-lhes como muro à sua direita e à sua esquerda.
³⁰ Assim, o SENHOR livrou Israel naquele dia da mão dos egípcios; e Israel viu os egípcios mortos na praia do mar.
³¹ E viu Israel a grande mão que o SENHOR mostrara aos egípcios; e temeu o povo ao SENHOR e creu no SENHOR e em Moisés, seu servo.`,

            // O DESAFIO
            pergunta: {
                texto: "O que aconteceu com os carros de Faraó durante a perseguição no meio do mar, antes que as águas retornassem sobre eles?",
                opcoes: [
                    { numero: 1, texto: "Os cavalos se assustaram com o vento oriental", correta: false },
                    { numero: 2, texto: "O SENHOR tirou as rodas dos carros, fazendo-os andar dificultosamente", correta: true },
                    { numero: 3, texto: "Os carros ficaram atolados em areia movediça", correta: false },
                    { numero: 4, texto: "Os soldados egípcios abandonaram os carros para fugir a pé", correta: false }
                ],
                explicacao: "Êxodo 14:25 - O texto relata que, na vigília da manhã, o SENHOR interveio tirando as rodas dos carros egípcios, o que levou os próprios perseguidores a reconhecerem que Deus pelejava por Israel.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 15 ---
        15: {
            titulo: "O Cântico de Moisés e as Águas de Mara",
            subtitulo: "A celebração da vitória e a primeira prova no deserto",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Então, cantou Moisés e os filhos de Israel este cântico ao SENHOR; e falaram, dizendo: Cantarei ao SENHOR, porque gloriosamente se magnificou; lançou no mar o cavalo e o seu cavaleiro.
² O SENHOR é a minha força e o meu cântico; ele se tem tornado a minha salvação; ele é o meu Deus, portanto lhe farei uma habitação; ele é o Deus de meu pai, por isso o exaltarei.
³ O SENHOR é homem de guerra; SENHOR é o seu nome.
⁴ Lançou no mar os carros de Faraó e o seu exército; e os seus escolhidos príncipes afogaram-se no mar Vermelho.
⁵ Os abismos os cobriram; desceram às profundezas como pedra.
⁶ A tua destra, ó SENHOR, se tem glorificado em potência; a tua destra, ó SENHOR, despedaçou o inimigo.
⁷ E, com a grandeza da tua excelência, derribaste os que se levantaram contra ti; enviaste o teu furor, que os consumiu como restolho.
⁸ E, com o sopro das tuas narinas, amontoaram-se as águas; as correntes pararam como montão; os abismos coalharam-se no coração do mar.
⁹ O inimigo dizia: Perseguirei, alcançarei, repartirei o despojo; fartar-se-á deles a minha alma, arrancarei a minha espada, a minha mão os destruirá.
¹⁰ Sopraste com o teu vento, o mar os cobriu; afundaram-se como chumbo em águas impetuosas.
¹¹ Ó SENHOR, quem é como tu entre os deuses? Quem é como tu, glorificado em santidade, terrível em louvores, operando maravilhas?
¹² Estendeste a tua destra, e a terra os tragou.
¹³ Tu, com a tua beneficência, guiaste a este povo, que remiste; com a tua força o levaste à habitação da tua santidade.
¹⁴ Os povos o ouvirão, eles tremerão; uma dor apoderar-se-á dos moradores da Filístia.
¹⁵ Então, os príncipes de Edom se pasmarão; dos poderosos de Moabe se apoderará um tremor; derreter-se-ão todos os moradores de Canaã.
¹⁶ Espanto e pavor cairá sobre eles; pela grandeza do teu braço emudecerão como pedra; até que o teu povo tenha passado, ó SENHOR, até que passe este povo que adquiriste.
¹⁷ Tu os introduzirás e os plantarás no monte da tua herança, no lugar que tu, ó SENHOR, aparelhaste para a tua habitação, no santuário, ó Senhor, que as tuas mãos estabeleceram.
¹⁸ O SENHOR reinará eterna e perpetuamente.
¹⁹ Porque os cavalos de Faraó, com os seus carros e com os seus cavaleiros, entraram no mar, e o SENHOR fez tornar as águas do mar sobre eles; mas os filhos de Israel passaram em seco pelo meio do mar.
²⁰ Então, Miriã, a profetisa, a irmã de Arão, tomou o tamboril na sua mão, e todas as mulheres saíram atrás dela com tamboris e com danças.
²¹ E Miriã lhes respondia: Cantai ao SENHOR, porque gloriosamente se magnificou e lançou no mar o cavalo com o seu cavaleiro.
²² Depois, fez Moisés partir os israelitas do mar Vermelho, e saíram ao deserto de Sur; e caminharam três dias no deserto e não acharam água.
²³ Então, chegaram a Mara; mas não puderam beber as águas de Mara, porque eram amargas; por isso, chamou-se o seu nome Mara.
²⁴ E o povo murmurou contra Moisés, dizendo: Que havemos de beber?
²⁵ E ele clamou ao SENHOR, e o SENHOR mostrou-lhe um lenho que lançou nas águas, e as águas se tornaram doces; ali lhes deu estatutos e uma ordenação e ali os provou.
²⁶ E disse: Se ouvires atento a voz do SENHOR, teu Deus, e fizeres o que é reto diante de seus olhos, e inclinares os teus ouvidos aos seus mandamentos, e guardares todos os seus estatutos, nenhuma das enfermidades porei sobre ti, que pus sobre o Egito; porque eu sou o SENHOR, que te sara.
²⁷ Então, vieram a Elim, e havia ali doze fontes de água e setenta palmeiras; e acamparam-se ali junto das águas.`,

            // O DESAFIO
            pergunta: {
                texto: "Após três dias de caminhada no deserto de Sur sem achar água, o povo chegou a um lugar onde as águas eram amargas. O que Moisés usou para tornar essas águas doces?",
                opcoes: [
                    { numero: 1, texto: "Sua vara de pastor", correta: false },
                    { numero: 2, texto: "Um punhado de sal", correta: false },
                    { numero: 3, texto: "Um lenho (pedaço de madeira) mostrado pelo SENHOR", correta: true },
                    { numero: 4, texto: "Ouro tomado dos egípcios", correta: false }
                ],
                explicacao: "Êxodo 15:25 - Ao clamar ao SENHOR, Moisés recebeu a instrução de lançar um lenho nas águas de Mara, o que as tornou potáveis para o povo.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 16 ---
        16: {
            titulo: "O Maná e as Codornizes",
            subtitulo: "A provisão divina de alimento e a instituição do Sábado",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E, partidos de Elim, toda a congregação dos filhos de Israel veio ao deserto de Sim, que está entre Elim e Sinai, aos quinze dias do mês segundo, depois que saíram da terra do Egito.
² E toda a congregação dos filhos de Israel murmurou contra Moisés e contra Arão no deserto.
³ E os filhos de Israel disseram-lhes: Quem dera que tivéssemos morrido por mão do SENHOR na terra do Egito, quando estávamos sentados junto às panelas de carne, quando comíamos pão até fartar! Porque nos tendes tirado para este deserto, para matardes de fome a toda esta multidão.
⁴ Então, disse o SENHOR a Moisés: Eis que vos farei chover pão dos céus, e o povo sairá e colherá cada dia a porção para cada dia, para que eu o prove se anda em minha lei ou não.
⁵ E acontecerá, ao sexto dia, que prepararão o que colherem; e será o dobro do que colhem cada dia.
⁶ Então, disseram Moisés e Arão a todos os filhos de Israel: À tarde sabereis que o SENHOR vos tirou da terra do Egito,
⁷ e amanhã vereis a glória do SENHOR, porquanto ouviu as vossas murmurações contra o SENHOR; e quem somos nós, para que murmureis contra nós?
⁸ Disse mais Moisés: Isso será quando o SENHOR, à tarde, vos der carne para comer e, pela manhã, pão a fartar, porquanto o SENHOR ouviu as vossas murmurações, com que murmurais contra ele; e quem somos nós? As vossas murmurações não são contra nós, mas contra o SENHOR.
⁹ Disse depois Moisés a Arão: Dize a toda a congregação dos filhos de Israel: Chegai-vos à presença do SENHOR, porque ouviu as vossas murmurações.
¹⁰ E aconteceu que, quando falou Arão a toda a congregação dos filhos de Israel, olharam para o deserto, e eis que a glória do SENHOR apareceu na nuvem.
¹¹ E o SENHOR falou a Moisés, dizendo:
¹² Tenho ouvido as murmurações dos filhos de Israel; fala-lhes, dizendo: Entre as duas tardes, comereis carne, e, pela manhã, vos fartareis de pão, e sabereis que eu sou o SENHOR, vosso Deus.
¹³ E aconteceu que, à tarde, subiram codornizes e cobriram o arraial; e, pela manhã, jazia o orvalho ao redor do arraial.
¹⁴ E, alçado que foi o orvalho caído, eis que sobre a face do deserto estava uma coisa miúda, redonda, miúda como a geada sobre a terra.
¹⁵ E, vendo-a os filhos de Israel, disseram uns aos outros: Que é isto? Porque não sabiam o que era. Disse-lhes, pois, Moisés: Este é o pão que o SENHOR vos deu para comer.
¹⁶ Esta é a palavra que o SENHOR tem mandado: Colhei dele cada um conforme o que pode comer, um ômer por cabeça, segundo o número das vossas almas; cada um tomará para os que se acharem na sua tenda.
¹⁷ E os filhos de Israel fizeram assim; e colheram, uns mais e outros menos.
¹⁸ Porém, medindo-o com o ômer, não sobejava ao que colhera muito, nem faltava ao que colhera pouco; cada um colheu conforme o que podia comer.
¹⁹ E disse-lhes Moisés: Ninguém deixe dele para amanhã.
²⁰ Eles, porém, não deram ouvidos a Moisés; antes, alguns deixaram dele para o dia seguinte; e criou bichos e cheirava mal; e Moisés indignou-se contra eles.
²¹ Colhiam-no, pois, cada manhã, cada um conforme o que podia comer; porque, aquecendo o sol, derretia-se.
²² E aconteceu que, ao sexto dia, colheram pão em dobro, dois ômeres para cada um; e todos os príncipes da congregação vieram e contaram-no a Moisés.
²³ E ele disse-lhes: Isto é o que o SENHOR tem dito: Amanhã é repouso, o santo sábado do SENHOR; o que quiserdes cozer no forno, cozei-o, e o que quiserdes cozer em água, cozei-o em água; e tudo o que sobejar guardai para vós, em depósito para amanhã.
²⁴ E guardaram-no até ao dia seguinte, como Moisés tinha mandado; e não cheirou mal, nem houve nele bicho algum.
²⁵ Então, disse Moisés: Comei-o hoje, porquanto hoje é o sábado do SENHOR; hoje não o achareis no campo.
²⁶ Seis dias o colhereis, mas o sétimo dia é o sábado; nele não haverá.
²⁷ E aconteceu, ao sétimo dia, que alguns do povo saíram para colher, mas não o acharam.
²⁸ Então, disse o SENHOR a Moisés: Até quando recusareis guardar os meus mandamentos e as minhas leis?
²⁹ Vede, visto que o SENHOR vos deu o sábado, por isso ele, ao sexto dia, vos dá pão para dois dias; cada um fique no seu lugar, ninguém saia do seu lugar ao sétimo dia.
³⁰ Assim, repousou o povo ao sétimo dia.
³¹ E chamou a casa de Israel o seu nome maná; e era como semente de coentro branco, e o seu sabor como bolos de mel.
³² E disse Moisés: Esta é a palavra que o SENHOR tem mandado: Encherás um ômer dele e guardá-lo-ás para as vossas gerações, para que vejam o pão que vos dei a comer neste deserto, quando eu vos tirei da terra do Egito.
³³ Disse também Moisés a Arão: Toma um vaso, e põe nele um ômer cheio de maná, e coloca-o diante do SENHOR, em guarda para as vossas gerações.
³⁴ Como o SENHOR ordenara a Moisés, assim Arão o pôs diante do Testemunho, em guarda.
³⁵ E comeram os filhos de Israel maná quarenta anos, até que entraram em terra habitada; comeram maná até que chegaram aos termos da terra de Canaã.
³⁶ E um ômer é a décima parte de um efa.`,

            // O DESAFIO
            pergunta: {
                texto: "Qual era a aparência e o sabor do maná, o 'pão do céu' que Deus enviou aos israelitas no deserto?",
                opcoes: [
                    { numero: 1, texto: "Como grãos de trigo dourados e sabor de azeite", correta: false },
                    { numero: 2, texto: "Como semente de coentro branco e sabor de bolos de mel", correta: true },
                    { numero: 3, texto: "Como pequenas pedras vermelhas e sabor de frutas silvestres", correta: false },
                    { numero: 4, texto: "Como folhas verdes e sabor de ervas amargas", correta: false }
                ],
                explicacao: "Êxodo 16:31 - O texto descreve o maná como semelhante à semente de coentro branco, com um sabor adocicado comparado a bolos de mel.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 17 ---
        17: {
            titulo: "Água da Rocha e a Vitória contra Amaleque",
            subtitulo: "O milagre em Refidim e a primeira batalha de Israel",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Depois, toda a congregação dos filhos de Israel partiu do deserto de Sim pelas suas jornadas, segundo o mandamento do SENHOR, e acamparam-se em Refidim; e não havia ali água para o povo beber.
² Então, contendeu o povo com Moisés e disse: Dá-nos água para beber. E Moisés lhes disse: Por que contendeis comigo? Por que tentais ao SENHOR?
³ Tendo, pois, ali o povo sede de água, o povo murmurou contra Moisés e disse: Por que nos fizeste subir do Egito, para nos matares de sede, a nós, e aos nossos filhos, e ao nosso gado?
⁴ E clamou Moisés ao SENHOR, dizendo: Que farei a este povo? Daqui a pouco me apedrejarão.
⁵ Então, disse o SENHOR a Moisés: Passa diante do povo e toma contigo alguns dos anciãos de Israel; e toma na tua mão a tua vara, com que feriste o rio, e vai.
⁶ Eis que eu estarei ali diante de ti sobre a rocha, em Horebe, e tu ferirás a rocha, e dela sairão águas, e o povo beberá. E Moisés assim fez, diante dos olhos dos anciãos de Israel.
⁷ E chamou o nome daquele lugar Massá e Meribá, por causa da contenda dos filhos de Israel e porque tentaram ao SENHOR, dizendo: Está o SENHOR no meio de nós, ou não?
⁸ Então, veio Amaleque e pelejou contra Israel em Refidim.
⁹ Pelo que disse Moisés a Josué: Escolhe-nos homens, e sai, e peleja contra Amaleque; amanhã, eu estarei sobre o cume do outeiro, e a vara de Deus estará na minha mão.
¹⁰ E fez Josué como Moisés lhe dissera, pelejando contra Amaleque; mas Moisés, Arão e Hur subiram ao cume do outeiro.
¹¹ E acontecia que, quando Moisés levantava a sua mão, Israel prevalecia; mas, quando ele abaixava a sua mão, Amaleque prevalecia.
¹² Porém as mãos de Moisés eram pesadas; por isso, tomaram uma pedra e a puseram debaixo dele, para assentar-se sobre ela; e Arão e Hur sustentaram as suas mãos, um de um lado, e o outro, do outro; assim ficaram as suas mãos firmes até ao pôr do sol.
¹³ E, assim, Josué desfez a Amaleque e a seu povo a fio de espada.
¹⁴ Então, disse o SENHOR a Moisés: Escreve isto para memória num livro e relata-o aos ouvidos de Josué; que eu inteiramente riscarei a memória de Amaleque de debaixo dos céus.
¹⁵ E Moisés edificou um altar e chamou o seu nome: O SENHOR É MINHA BANDEIRA.
¹⁶ E disse: Porquanto jurou o SENHOR, haverá guerra do SENHOR contra Amaleque de geração em geração.`,

            // O DESAFIO
            pergunta: {
                texto: "Durante a batalha contra Amaleque, quem foram as duas pessoas que sustentaram as mãos de Moisés para que Israel prevalecesse?",
                opcoes: [
                    { numero: 1, texto: "Josué e Calebe", correta: false },
                    { numero: 2, texto: "Arão e Hur", correta: true },
                    { numero: 3, texto: "Jetro e Eleazar", correta: false },
                    { numero: 4, texto: "Simeão e Levi", correta: false }
                ],
                explicacao: "Êxodo 17:12 - Como as mãos de Moisés pesavam, Arão e Hur as sustentaram, um de cada lado, garantindo a vitória de Josué sobre Amaleque.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 18 ---
        18: {
            titulo: "O Conselho de Jetro",
            subtitulo: "A organização da justiça e a descentralização do poder",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Ora, Jetro, sacerdote de Midiã, sogro de Moisés, ouviu todas as coisas que Deus tinha feito a Moisés e a Israel, seu povo; como o SENHOR tinha tirado a Israel do Egito.
² E Jetro, sogro de Moisés, tomou a Zípora, mulher de Moisés, depois que ele a enviara,
³ com seus dois filhos, dos quais um se chamava Gérson, porque disse: Peregrino fui em terra estranha;
⁴ e o outro se chamava Eliézer, porque disse: O Deus de meu pai foi minha ajuda e me livrou da espada de Faraó.
⁵ Vindo, pois, Jetro, sogro de Moisés, com seus filhos e com sua mulher, a Moisés no deserto, ao monte de Deus, onde se tinha acampado,
⁶ disse a Moisés: Eu, teu sogro Jetro, venho a ti, com tua mulher e seus dois filhos com ela.
⁷ Então, saiu Moisés ao encontro de seu sogro, e inclinou-se, e beijou-o; e perguntaram um ao outro como estavam e entraram na tenda.
⁸ E Moisés contou a seu sogro todas as coisas que o SENHOR tinha feito a Faraó e aos egípcios por amor de Israel, e todo o trabalho que lhes sobreveio no caminho, e como o SENHOR os livrara.
⁹ E alegrou-se Jetro de todo o bem que o SENHOR tinha feito a Israel, livrando-o da mão dos egípcios.
¹⁰ E Jetro disse: Bendito seja o SENHOR, que vos livrou da mão dos egípcios e da mão de Faraó; que livrou a este povo de debaixo da mão dos egípcios.
¹¹ Agora sei que o SENHOR é maior que todos os deuses; porque na coisa em que se ensoberbeceram, os sobrepujou.
¹² Então, Jetro, sogro de Moisés, tomou holocausto e sacrifícios para Deus; e veio Arão e todos os anciãos de Israel, para comerem pão com o sogro de Moisés diante de Deus.
¹³ E aconteceu que, ao outro dia, assentou-se Moisés para julgar o povo; e o povo estava em pé diante de Moisés desde a manhã até à tarde.
¹⁴ Vendo, pois, o sogro de Moisés tudo o que ele fazia ao povo, disse: Que é isto que tu fazes ao povo? Por que te assentas só, e todo o povo está em pé diante de ti, desde a manhã até à tarde?
¹⁵ Então, disse Moisés a seu sogro: É porque este povo vem a mim para consultar a Deus.
¹⁶ Quando tem algum negócio, vem a mim, para que eu julgue entre um e outro e lhes declare os estatutos de Deus e as suas leis.
¹⁷ O sogro de Moisés, porém, lhe disse: Não é bom o que fazes.
¹⁸ Totalmente desfalecerás, assim tu como este povo que está contigo; porque este negócio é mui pesado para ti; tu só não o podes fazer.
¹¹⁹ Ouve agora a minha voz; eu te aconselharei, e Deus será contigo. Sê tu pelo povo diante de Deus e leva tu as causas a Deus;
²⁰ e declara-lhes os estatutos e as leis e faze-lhes saber o caminho em que devem andar e a obra que devem fazer.
²¹ E tu, dentre todo o povo, procura homens capazes, tementes a Deus, homens de verdade, que aborreçam a avareza; e põe-nos sobre eles por maiorais de mil, maiorais de cem, maiorais de cinquenta e maiorais de dez;
²² para que julguem este povo em todo o tempo; e será que todo negócio grave tragam a ti, mas todo negócio pequeno eles o julguem; assim, a ti mesmo te aliviarás da carga, e eles a levarão contigo.
²³ Se isto fizeres, e Deus mo mandar, poderás, então, subsistir; assim também todo este povo chegará em paz ao seu lugar.
²⁴ E Moisés deu ouvidos à voz de seu sogro e fez tudo quanto tinha dito.
²⁵ E escolheu Moisés homens capazes de todo o Israel e os pôs por cabeças sobre o povo: maiorais de mil, maiorais de cem, maiorais de cinquenta e maiorais de dez.
²⁶ E eles julgaram o povo em todo o tempo; o negócio difícil traziam a Moisés, e todo negócio pequeno julgavam eles.
²⁷ Então, despediu Moisés o seu sogro, e este se foi à sua terra.`,

            // O DESAFIO
            pergunta: {
                texto: "Qual foi o conselho dado por Jetro a Moisés para evitar o esgotamento ao julgar as causas do povo?",
                opcoes: [
                    { numero: 1, texto: "Que o povo resolvesse seus próprios problemas sem juízes", correta: false },
                    { numero: 2, texto: "Que Moisés dedicasse apenas uma hora por dia ao julgamento", correta: false },
                    { numero: 3, texto: "Que escolhesse homens capazes para julgar causas menores, ficando apenas com as difíceis", correta: true },
                    { numero: 4, texto: "Que Arão assumisse toda a responsabilidade jurídica", correta: false }
                ],
                explicacao: "Êxodo 18:21-22 - Jetro sugeriu a criação de uma hierarquia de juízes (sobre mil, cem, cinquenta e dez) para que Moisés não ficasse sobrecarregado com todos os negócios do povo.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 19 ---
        19: {
            titulo: "A Chegada ao Sinai e a Teofania",
            subtitulo: "A preparação do povo para o encontro com a glória de Deus",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Ao terceiro mês da saída dos filhos de Israel da terra do Egito, no mesmo dia, vieram ao deserto de Sinai.
² Porque partiram de Refidim, e vieram ao deserto de Sinai, e acamparam-se no deserto; Israel, pois, ali se acampou defronte do monte.
³ E subiu Moisés a Deus, e o SENHOR o chamou do monte, dizendo: Assim dirás à casa de Jacó e anunciarás aos filhos de Israel:
⁴ Vós tendes visto o que fiz aos egípcios, como vos levei sobre asas de águias e vos trouxe a mim.
⁵ Agora, pois, se diligentemente ouvirdes a minha voz e guardardes o meu concerto, então, sereis a minha propriedade peculiar dentre todos os povos; porque toda a terra é minha.
⁶ E vós me sereis um reino sacerdotal e o povo santo. Estas são as palavras que falarás aos filhos de Israel.
⁷ E veio Moisés, e chamou os anciãos do povo, e expôs diante deles todas estas palavras que o SENHOR lhe tinha ordenado.
⁸ Então, todo o povo respondeu a uma voz e disse: Tudo o que o SENHOR tem falado faremos. E relatou Moisés ao SENHOR as palavras do povo.
⁹ E disse o SENHOR a Moisés: Eis que eu virei a ti numa nuvem espessa, para que o povo ouça, falando eu contigo, e para que também te creiam para sempre. Porque Moisés tinha anunciado as palavras do seu povo ao SENHOR.
¹⁰ Disse também o SENHOR a Moisés: Vai ao povo e santifica-os hoje e amanhã, e lavem eles os seus vestidos,
¹¹ e estejam prontos para o terceiro dia; porquanto, no terceiro dia, o SENHOR descerá diante dos olhos de todo o povo sobre o monte Sinai.
¹² E marcarás limites ao povo em redor, dizendo: Guardai-vos, não subais ao monte, nem toqueis o seu termo; todo aquele que tocar o monte morrerá certamente.
¹³ Nenhuma mão tocará nele, porque certamente será apedrejado ou asseteado; quer seja animal, quer seja homem, não viverá; soando a buzina longamente, então, subirão ao monte.
¹⁴ Então, Moisés desceu do monte ao povo e santificou o povo; e lavaram os seus vestidos.
¹⁵ E disse ao povo: Estai prontos para o terceiro dia; e não vos chegueis a mulher.
¹⁶ E aconteceu que, ao terceiro dia, ao amanhecer, houve trovões e relâmpagos sobre o monte, e uma espessa nuvem, e um sonido de buzina mui forte, de maneira que estremeceu todo o povo que estava no arraial.
¹⁷ E Moisés levou o povo fora do arraial ao encontro de Deus; e puseram-se ao pé do monte.
¹⁸ E todo o monte Sinai fumegava, porque o SENHOR descera sobre ele em fogo; e a sua fumaça subiu como fumaça de um forno, e todo o monte tremia grandemente.
¹⁹ E o sonido da buzina ia crescendo em grande maneira; Moisés falava, e Deus lhe respondia em voz alta.
²⁰ E, descendo o SENHOR sobre o monte Sinai, sobre o cume do monte, chamou o SENHOR a Moisés ao cume do monte; e Moisés subiu.
²¹ E disse o SENHOR a Moisés: Desce, protesta ao povo que não traspasse os limites para ver o SENHOR, para que muitos deles não pereçam.
²² E também os sacerdotes, que se chegam ao SENHOR, se hão de santificar, para que o SENHOR não se lance sobre eles.
²³ Então, disse Moisés ao SENHOR: O povo não poderá subir ao monte Sinai; porque tu nos protestaste, dizendo: Marca limites ao redor do monte e santifica-o.
²⁴ E disse-lhe o SENHOR: Vai, desce; depois, subirás tu, e Arão contigo; os sacerdotes, porém, e o povo não traspassem os limites para subir ao SENHOR, para que não se lance sobre eles.
²⁵ Então, Moisés desceu ao povo e disse-lhes isso.`,

            // O DESAFIO
            pergunta: {
                texto: "Quais foram as manifestações físicas que ocorreram no Monte Sinai ao amanhecer do terceiro dia, quando o SENHOR desceu sobre ele?",
                opcoes: [
                    { numero: 1, texto: "Um terremoto silencioso e uma chuva suave", correta: false },
                    { numero: 2, texto: "Trovões, relâmpagos, uma nuvem espessa e um forte som de buzina", correta: true },
                    { numero: 3, texto: "Um eclipse solar e um vento impetuoso", correta: false },
                    { numero: 4, texto: "Uma tempestade de areia que cobriu todo o arraial", correta: false }
                ],
                explicacao: "Êxodo 19:16 - O texto descreve sinais aterrorizantes de poder (trovões, relâmpagos e fumaça) que fizeram todo o povo estremecer diante da presença divina no monte.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 20 ---
        20: {
            titulo: "Os Dez Mandamentos",
            subtitulo: "A entrega da Lei Moral e as diretrizes para o culto",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Então, falou Deus todas estas palavras, dizendo:
² Eu sou o SENHOR, teu Deus, que te tirei da terra do Egito, da casa da servidão.
³ Não terás outros deuses diante de mim.
⁴ Não farás para ti imagem de escultura, nem semelhança alguma do que há em cima nos céus, nem em baixo na terra, nem nas águas debaixo da terra.
⁵ Não te encurvarás a elas nem as servirás; porque eu, o SENHOR, teu Deus, sou Deus zeloso, que visito a maldade dos pais nos filhos até à terceira e quarta geração daqueles que me aborrecem
⁶ e faço misericórdia em milhares aos que me amam e guardam os meus mandamentos.
⁷ Não tomarás o nome do SENHOR, teu Deus, em vão; porque o SENHOR não terá por inocente o que tomar o seu nome em vão.
⁸ Lembra-te do dia do sábado, para o santificar.
⁹ Seis dias trabalharás e farás toda a tua obra,
¹⁰ mas o sétimo dia é o sábado do SENHOR, teu Deus; não farás nenhuma obra, nem tu, nem teu filho, nem tua filha, nem o teu servo, nem a tua serva, nem o teu animal, nem o estrangeiro que está dentro das tuas portas.
¹¹ Porque em seis dias fez o SENHOR os céus e a terra, o mar e tudo o que neles há e ao sétimo dia descansou; portanto, abençoou o SENHOR o dia do sábado e o santificou.
¹² Honra a teu pai e a tua mãe, para que se prolonguem os teus dias na terra que o SENHOR, teu Deus, te dá.
¹³ Não matarás.
¹⁴ Não adulterarás.
¹⁵ Não furtarás.
¹⁶ Não dirás falso testemunho contra o teu próximo.
¹⁷ Não cobiçarás a casa do teu próximo; não cobiçarás a mulher do teu próximo, nem o seu servo, nem a sua serva, nem o seu boi, nem o seu jumento, nem coisa alguma do teu próximo.
¹⁸ E todo o povo viu os trovões, e os relâmpagos, e o sonido da buzina, e o monte fumegando; e o povo, vendo isso, retirou-se e pôs-se de longe.
¹⁹ E disseram a Moisés: Fala tu conosco, e ouviremos; e não fale Deus conosco, para que não morramos.
²⁰ E disse Moisés ao povo: Não temais, que Deus veio para vos provar e para que o seu temor esteja diante de vós, para que não pequeis.
²¹ E o povo estava de longe; Moisés, porém, se chegou à escuridade onde Deus estava.
²² Então, disse o SENHOR a Moisés: Assim dirás aos filhos de Israel: Vós tendes visto que eu falei convosco dos céus.
²³ Não fareis outros deuses comigo; deuses de prata ou deuses de ouro não fareis para vós.
²⁴ Um altar de terra me farás e sobre ele sacrificarás os teus holocaustos, e as tuas ofertas pacíficas, e as tuas ovelhas, e os teus bois; em todo lugar onde eu fizer celebrar a memória do meu nome, virei a ti e te abençoarei.
²⁵ E, se me fizeres um altar de pedras, não o farás de pedras lavradas; porque, se sobre ele levantares o teu cinzel, o profanarás.
²⁶ Ao meu altar também não subirás por degraus, para que a tua nudez se não descubra diante dele.`,

            // O DESAFIO
            pergunta: {
                texto: "Qual é o primeiro mandamento com promessa, que garante a prolongação dos dias na terra para aquele que o cumpre?",
                opcoes: [
                    { numero: 1, texto: "Não terás outros deuses diante de mim", correta: false },
                    { numero: 2, texto: "Lembra-te do dia do sábado, para o santificar", correta: false },
                    { numero: 3, texto: "Honra a teu pai e a tua mãe", correta: true },
                    { numero: 4, texto: "Não dirás falso testemunho", correta: false }
                ],
                explicacao: "Êxodo 20:12 - O mandamento de honrar pai e mãe é acompanhado pela promessa de que os dias do obediente se prolongarão na terra dada pelo SENHOR.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 21 ---
        21: {
            titulo: "As Leis Civis e os Direitos dos Servos",
            subtitulo: "Estatutos sobre a servidão, crimes capitais e danos físicos",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Estes são os estatutos que lhes proporás:
² Se comprares um servo hebreu, seis anos servirá; mas, ao sétimo, sairá forro, de graça.
³ Se entrou só com o seu corpo, só com o seu corpo sairá; se era homem casado, sairá sua mulher com ele.
⁴ Se seu senhor lhe houver dado uma mulher, e ela lhe houver dado filhos ou filhas, a mulher e seus filhos serão do seu senhor, e ele sairá só com o seu corpo.
⁵ Mas, se aquele servo expressamente disser: Eu amo a meu senhor, e a minha mulher, e a meus filhos, não quero sair forro;
⁶ então, seu senhor o levará aos juízes, e o fará chegar à porta, ou ao umbral da porta, e seu senhor lhe furará a orelha com uma sovela; e ele o servirá para sempre.
⁷ E, se um homem vender sua filha para ser serva, não sairá como saem os servos.
⁸ Se ela não agradar aos olhos de seu senhor, e ele não se desposar com ela, fará que se resgate; não poderá vendê-la a um povo estranho, agindo deslealmente com ela.
⁹ Mas, se a desposar com seu filho, fará com ela conforme o direito das filhas.
¹⁰ Se lhe tomar outra, não diminuirá o mantimento desta, nem a sua veste, nem o seu direito conjugal.
¹¹ E, se lhe não fizer estas três coisas, sairá de graça, sem dar dinheiro.
¹² Quem ferir a outro, de modo que morra, certamente morrerá.
¹³ Porém, se lhe não armou cilada, mas Deus o entregou nas suas mãos, ordenar-te-ei um lugar para onde ele fugirá.
¹⁴ Mas, se algum se ensoberbecer contra o seu próximo, matando-o com fraude, tirá-lo-ás do meu altar para que morra.
¹⁵ O que ferir a seu pai ou a sua mãe certamente morrerá.
¹⁶ E o que furtar algum homem e o vender, ou for achado na sua mão, certamente morrerá.
¹⁷ E o que amaldiçoar a seu pai ou a sua mãe certamente morrerá.
¹⁸ E, se alguns homens pelejarem, ferindo um ao outro com pedra ou com o punho, e este não morrer, mas cair na cama;
¹⁹ se ele tornar a levantar-se e andar fora sobre o seu bordão, então, aquele que o feriu será absolvido; somente lhe pagará o tempo que perdeu e o fará curar-se totalmente.
²⁰ Se alguém ferir a seu servo ou a sua serva com pau, e morrer debaixo da sua mão, certamente será castigado;
²¹ porém, se ficar vivo por um ou dois dias, não será castigado, porque é seu dinheiro.
²² Se alguns homens pelejarem, e ferirem uma mulher grávida, e forem causa de que aborte, porém não houver morte, certamente aquele que feriu será multado conforme o que lhe impuser o marido da mulher e pagará diante dos juízes.
²³ Mas, se houver morte, então, darás vida por vida,
²⁴ olho por olho, dente por dente, mão por mão, pé por pé,
²⁵ queimadura por queimadura, ferida por ferida, golpe por golpe.
²⁶ E, quando alguém ferir o olho do seu servo ou o olho da sua serva e o danificar, o deixará ir forro pelo seu olho.
²⁷ E, se tirar o dente do seu servo ou o dente da sua serva, o deixará ir forro pelo seu dente.
²⁸ E, se algum boi escornar homem ou mulher, que morra, o boi será apedrejado certamente, e a sua carne se não comerá; mas o dono do boi será absolvido.
²⁹ Mas, se o boi dantes era escornador, e seu dono foi disso avisado e não o guardou, matando homem ou mulher, o boi será apedrejado, e também o seu dono morrerá.
³⁰ Se lhe for imposto resgate, então, dará por resgate da sua vida tudo quanto lhe for imposto,
³¹ quer tenha escornado um filho, quer tenha escornado uma filha; conforme este estatuto lhe será feito.
³² Se o boi escornar um servo ou uma serva, dar-se-ão trinta siclos de prata ao seu senhor, e o boi será apedrejado.
³³ Se alguém abrir uma cova ou se alguém cavar uma cova e não a cobrir, e nela cair boi ou jumento,
³⁴ o dono da cova o pagará, pagará dinheiro ao seu dono; mas o morto será seu.
³⁵ Se o boi de algum ferir o boi do seu próximo, e este morrer, então, venderão o boi vivo e repartirão o dinheiro dele, e também o morto repartirão entre si.
³⁶ Mas, se foi notório que aquele boi dantes era escornador, e seu dono não o guardou, certamente pagará boi por boi; porém o morto será seu.`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com as leis sobre a servidão, o que deveria ser feito a um servo hebreu que escolhesse voluntariamente permanecer com seu senhor para sempre por amor à sua família?",
                opcoes: [
                    { numero: 1, texto: "Deveria receber um selo real em seu braço", correta: false },
                    { numero: 2, texto: "Seu senhor deveria lhe furar a orelha com uma sovela contra a porta", correta: true },
                    { numero: 3, texto: "Deveria raspar a cabeça e trocar de vestes", correta: false },
                    { numero: 4, texto: "Deveria pagar uma taxa aos juízes da cidade", correta: false }
                ],
                explicacao: "Êxodo 21:5-6 - O servo que declarasse amar seu senhor e sua família seria levado aos juízes e teria a orelha furada na porta como sinal de servidão perpétua.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 22 ---
        22: {
            titulo: "Leis sobre Propriedade e Responsabilidade Social",
            subtitulo: "Restituição, proteção aos vulneráveis e santidade",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Se alguém furtar boi ou ovelha e o degolar ou vender, por um boi pagará cinco bois, e por uma ovelha, quatro ovelhas.
² Se o ladrão for achado minando, e for ferido, e morrer, o que o feriu não será culpado do sangue.
³ Se o sol houver saído sobre ele, haverá culpa de sangue; o ladrão fará restituição total; e, se não tiver com que pagar, será vendido pelo seu furto.
⁴ Se o furto for achado vivo na sua mão, seja boi, ou jumento, ou ovelha, pagará o dobro.
⁵ Se alguém pastar um campo ou vinha e soltar o seu animal para comer no campo de outro, o melhor do seu próprio campo e o melhor da sua própria vinha pagará.
⁶ Se sair fogo, e pegar nos espinhos, e queimar a meda de trigo, ou a seara, ou o campo, aquele que acendeu o fogo pagará totalmente o queimado.
⁷ Se alguém der a seu próximo dinheiro ou objetos a guardar, e isso for furtado da casa daquele homem, o ladrão, se for achado, pagará o dobro.
⁸ Se o ladrão não for achado, então, o dono da casa será levado diante dos juízes, a ver se não meteu a sua mão nos bens do seu próximo.
⁹ Sobre todo negócio de fraude, sobre boi, sobre jumento, sobre gado miúdo, sobre vestido, sobre toda coisa perdida, de que alguém disser que é sua, a causa de ambos virá perante os juízes; aquele a quem condenarem os juízes pagará o dobro ao seu próximo.
¹⁰ Se alguém der a seu próximo a guardar um jumento, ou boi, ou ovelha, ou algum animal, e morrer, ou ficar aleijado, ou for afugentado, ninguém o vendo,
¹¹ então, haverá juramento do SENHOR entre ambos, de que não meteu a sua mão nos bens do seu próximo; e seu dono o aceitará, e o outro não o pagará.
¹² Mas, se lhe for furtado, o pagará ao seu dono.
¹³ Se for despedaçado, trá-lo-á em testemunho e não pagará o despedaçado.
¹⁴ E, se alguém pedir emprestado a seu próximo algum animal, e for aleijado ou morrer, não estando presente o seu dono, certamente o pagará.
¹⁵ Se o seu dono estava presente, não o pagará; se foi alugado, o aluguel será por ele.
¹⁶ Se alguém enganar alguma virgem, que não for desposada, e se deitar com ela, certamente a dotará e tomará por sua mulher.
¹⁷ Se seu pai inteiramente recusar dar-lha, pagará ele em dinheiro conforme o dote das virgens.
¹⁸ A feiticeira não deixarás viver.
¹⁹ Todo aquele que se deitar com animal certamente morrerá.
²⁰ O que sacrificar a qualquer deus, a não ser só ao SENHOR, será morto.
²¹ O estrangeiro não afligirás, nem o oprimirás; pois estrangeiros fostes na terra do Egito.
²² A nenhuma viúva nem órfão afligireis.
²³ Se de alguma maneira os afligirdes, e eles clamarem a mim, eu certamente ouvirei o seu clamor.
²⁴ E a minha ira se acenderá, e vos matarei à espada; e vossas mulheres ficarão viúvas, e vossos filhos, órfãos.
²⁵ Se emprestares dinheiro ao meu povo, ao pobre que está contigo, não te haverás com ele como um usurário; não lhe imporeis usura.
²⁶ Se tomares em penhor o vestido do teu próximo, lho restituirás antes do pôr do sol.
²⁷ Porque aquela é a sua única cobertura e o vestido da sua pele; em que se deitaria ele? Acontecerá, pois, que, quando clamar a mim, eu o ouvirei, porque sou misericordioso.
²⁸ Aos juízes não amaldiçoarás, nem ao príncipe do teu povo dirás mal.
²⁹ As tuas primícias e os teus licores não retardarás; o primogênito de teus filhos me darás.
³⁰ Assim farás dos teus bois e das tuas ovelhas: sete dias estarão com a mãe, e ao oitavo dia mo darás.
³¹ E ser-me-eis homens santos; e não comereis carne despedaçada no campo; aos cães a lançareis.`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com as leis de restituição, se alguém furtar um boi e o degolar ou vender, quantos bois deverá pagar de volta como compensação?",
                opcoes: [
                    { numero: 1, texto: "Dois bois", correta: false },
                    { numero: 2, texto: "Três bois", correta: false },
                    { numero: 3, texto: "Quatro bois", correta: false },
                    { numero: 4, texto: "Cinco bois", correta: true }
                ],
                explicacao: "Êxodo 22:1 - A lei estabelece uma escala de restituição severa para o furto de gado: cinco bois por um boi e quatro ovelhas por uma ovelha.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 23 ---
        23: {
            titulo: "Leis de Justiça, o Sábado da Terra e as Três Festas",
            subtitulo: "A ética no julgamento e a promessa do Anjo guia",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Não admitirás falso rumor e não porás a tua mão com o ímpio, para seres testemunha falsa.
² Não seguirás a multidão para fazeres o mal; nem numa demanda falarás, tomando parte com a maioria para perverter o direito.
³ Nem ao pobre favorecerás na sua demanda.
⁴ Se encontrares o boi do teu inimigo ou o seu jumento, desgarrado, sem falta lho reconduzirás.
⁵ Se vires o jumento daquele que te aborrece deitado debaixo da sua carga, deixarás pois de ajudá-lo? Certamente o ajudarás a levantá-lo.
⁶ Não perverterás o direito do teu pobre na sua demanda.
⁷ De palavras de falsidade te afastarás e não matarás o inocente e o justo; porque não justificarei o ímpio.
⁸ Também peitas não tomarás; porque a peita cega os que têm vista e perverte as palavras dos justos.
⁹ Também não oprimirás o estrangeiro; pois vós conheceis o coração do estrangeiro, pois fostes estrangeiros na terra do Egito.
¹⁰ Também seis anos semearás a tua terra e recolherás os seus frutos;
¹¹ mas, ao sétimo, a deixarás descansar e não a cultivarás, para que os pobres do teu povo comam, e do que sobejar comam os animais do campo. Assim farás com a tua vinha e com o teu olival.
¹² Seis dias farás a tua obra, mas, ao sétimo dia, descansarás; para que descanse o teu boi e o teu jumento; e para que tome alento o filho da tua serva e o estrangeiro.
¹³ E em tudo o que vos tenho dito, guardai-vos; e do nome de outros deuses nem vos lembreis, nem se ouça da vossa boca.
¹⁴ Três vezes no ano me celebrareis festa.
¹⁵ A Festa dos Pães Asmos guardarás; sete dias comerás pães asmos, como te tenho ordenado, ao tempo apontado no mês de abibe; porque nele saíste do Egito; e ninguém apareça vazio diante de mim;
¹⁶ e a Festa da Sega, dos primeiros frutos do teu trabalho, que houveres semeado no campo, e a Festa da Colheita, à saída do ano, quando tiveres colhido do campo o teu trabalho.
¹⁷ Três vezes no ano todos os teus varões aparecerão diante do Senhor Jeová.
¹⁸ Não oferecerás o sangue do meu sacrifício com pão levedado; nem ficará a gordura da minha festa passar a noite até amanhã.
¹⁹ As primícias dos primeiros frutos da tua terra trarás à casa do SENHOR, teu Deus; não cozerás o cabrito no leite de sua mãe.
²⁰ Eis que eu envio um Anjo diante de ti, para que te guarde pelo caminho e te leve ao lugar que te tenho preparado.
²¹ Guarda-te diante dele, e ouve a sua voz, e não o provoques à ira; porque não perdoará a vossa rebeldia; porque o meu nome está nele.
²² Mas, se diligentemente ouvires a sua voz e fizeres tudo o que eu disser, então, serei inimigo dos teus inimigos e adversário dos teus adversários.
²³ Porque o meu Anjo irá diante de ti e te levará aos amorreus, e aos heteus, e aos ferezeus, e aos cananeus, e aos heveus, e aos jebuseus; e eu os destruirei.
²⁴ Não te inclinarás diante dos seus deuses, nem os servirás, nem farás conforme as suas obras; antes, os destruirás totalmente e quebrarás de todo as suas estátuas.
²⁵ E servireis ao SENHOR, vosso Deus, e ele abençoará o vosso pão e a vossa água; e eu tirarei do meio de ti as enfermidades.
²⁶ Não haverá alguma que aborte, nem estéril na tua terra; o número dos teus dias cumprirei.
²⁷ Enviarei o meu terror diante de ti, desconfortando a todo o povo aonde entrares, e farei que todos os teus inimigos te voltem as costas.
²⁸ Também enviarei vespas diante de ti, que lancem fora os heveus, os cananeus e os heteus de diante de ti.
²⁹ Num só ano os não lançarei fora de diante de ti, para que a terra se não torne em deserto, e as feras do campo se não multipliquem contra ti.
³⁰ Pouco a pouco os lançarei de diante de ti, até que te multipliques e possuas a terra por herança.
³¹ E porei os teus termos desde o mar Vermelho até ao mar dos filisteus, e desde o deserto até ao rio; porque darei nas tuas mãos os moradores da terra, para que os lances fora de diante de ti.
³² Não farás concerto algum com eles ou com os seus deuses.
³³ Na tua terra não habitarão, para que não te façam pecar contra mim; se servires aos seus deuses, certamente isso te será por laço.`,

            // O DESAFIO
            pergunta: {
                texto: "Segundo os estatutos de conservação da terra, o que deveria ser feito com o campo, a vinha e o olival após seis anos de semeadura e colheita?",
                opcoes: [
                    { numero: 1, texto: "Deveriam ser queimados para renovar o solo", correta: false },
                    { numero: 2, texto: "Deveriam ser vendidos para estrangeiros", correta: false },
                    { numero: 3, texto: "Deveriam descansar no sétimo ano sem cultivo", correta: true },
                    { numero: 4, texto: "Deveriam ser plantados com sementes diferentes", correta: false }
                ],
                explicacao: "Êxodo 23:10-11 - A lei estabelece o descanso sabático da terra no sétimo ano, para que os pobres do povo e os animais do campo pudessem comer do que nela crescesse espontaneamente.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 24 ---
        24: {
            titulo: "A Selagem da Aliança",
            subtitulo: "O sangue do pacto e a subida de Moisés ao cume do monte",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Depois, disse a Moisés: Sobe ao SENHOR, tu, e Arão, e Nadabe, e Abiú, e setenta dos anciãos de Israel; e inclinai-vos de longe.
² E só Moisés se chegará ao SENHOR; mas eles não se cheguem, nem o povo suba com ele.
³ Veio, pois, Moisés e contou ao povo todas as palavras do SENHOR e todos os estatutos; então, todo o povo respondeu a uma voz e disse: Todas as palavras que o SENHOR tem falado faremos.
⁴ E Moisés escreveu todas as palavras do SENHOR, e levantou-se pela manhã cedo, e edificou um altar ao pé do monte e doze colunas, segundo as doze tribos de Israel.
⁵ E enviou jovens dos filhos de Israel, que ofereceram holocaustos e sacrificaram ao SENHOR sacrifícios pacíficos de bezerros.
⁶ E Moisés tomou a metade do sangue e a pôs em bacias; e a outra metade do sangue espargiu sobre o altar.
⁷ E tomou o livro do concerto e o leu aos ouvidos do povo, e eles disseram: Tudo o que o SENHOR tem falado faremos e obedeceremos.
⁸ Então, tomou Moisés aquele sangue, e espargiu-o sobre o povo, e disse: Eis aqui o sangue do concerto que o SENHOR tem feito convosco sobre todas estas palavras.
⁹ E subiram Moisés e Arão, Nadabe e Abiú, e setenta dos anciãos de Israel.
¹⁰ E viram o Deus de Israel, e debaixo de seus pés havia como uma obra de pedra de safira e como o parecer do céu na sua claridade.
¹¹ Porém não estendeu a sua mão sobre os escolhidos dos filhos de Israel; mas viram a Deus, e comeram, e beberam.
¹² Então, disse o SENHOR a Moisés: Sobe a mim ao monte e fica lá; e dar-te-ei tábuas de pedra, e a lei, e os mandamentos que tenho escrito, para os ensinar.
¹³ E levantou-se Moisés com Josué, seu servidor; e subiu Moisés ao monte de Deus.
¹⁴ E disse aos anciãos: Esperai-nos aqui, até que tornemos a vós; e eis que Arão e Hur ficam convosco; quem tiver algum negócio se chegará a eles.
¹⁵ E, subindo Moisés ao monte, a nuvem cobriu o monte.
¹⁶ E a glória do SENHOR repousou sobre o monte Sinai, e a nuvem o cobriu por seis dias; e, ao sétimo dia, chamou o SENHOR a Moisés do meio da nuvem.
¹⁷ E o parecer da glória do SENHOR era como um fogo consumidor no cume do monte, aos olhos dos filhos de Israel.
¹⁸ E Moisés entrou no meio da nuvem, depois que subiu ao monte; e Moisés esteve no monte quarenta dias e quarenta noites.`,

            // O DESAFIO
            pergunta: {
                texto: "Por quanto tempo Moisés permaneceu no Monte Sinai quando subiu para receber as tábuas de pedra com a Lei e os mandamentos?",
                opcoes: [
                    { numero: 1, texto: "Sete dias e sete noites", correta: false },
                    { numero: 2, texto: "Três dias e três noites", correta: false },
                    { numero: 3, texto: "Quarenta dias e quarenta noites", correta: true },
                    { numero: 4, texto: "Doze dias e doze noites", correta: false }
                ],
                explicacao: "Êxodo 24:18 - O texto relata que Moisés entrou pelo meio da nuvem e esteve no monte quarenta dias e quarenta noites.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 25 ---
        25: {
            titulo: "As Ofertas para o Tabernáculo",
            subtitulo: "As instruções para a Arca, a Mesa e o Candeeiro",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Então, falou o SENHOR a Moisés, dizendo:
² Fala aos filhos de Israel que me tragam uma oferta alçada; de todo homem cujo coração se mover voluntariamente, dele tomareis a minha oferta alçada.
³ E esta é a oferta alçada que tomareis deles: ouro, e prata, e cobre,
⁴ e azul, e púrpura, e carmesim, e linho fino, e pelos de cabras,
⁵ e peles de carneiros tintas de vermelho, e peles de texugos, e madeira de acácia,
⁶ e azeite para a luz, e especiarias para o óleo da unção, e especiarias para o incenso aromático,
⁷ e pedras de sardônica, e pedras de engaste para o éfode e para o peitoral.
⁸ E me farão um santuário, e habitarei no meio deles.
⁹ Conforme tudo o que eu te mostrar para o modelo do tabernáculo e para o modelo de todos os seus pertences, assim mesmo o fareis.
¹⁰ Também farão uma arca de madeira de acácia; o seu comprimento será de dois côvados e meio, e a sua largura, de um côvado e meio, e a sua altura, de um côvado e meio.
¹¹ E cobri-la-ás de ouro puro; por dentro e por fora a cobrirás; e farás sobre ela uma coroa de ouro ao redor;
¹² e fundirás para ela quatro argolas de ouro e as porás nos seus quatro cantos, duas argolas num lado dela e duas argolas no outro lado dela.
¹³ E farás varas de madeira de acácia e as cobrirás com ouro.
¹⁴ E meterás as varas nas argolas, aos lados da arca, para se levar com elas a arca.
¹⁵ As varas estarão nas argolas da arca, não se tirarão dela.
¹⁶ Depois, porás na arca o Testemunho, que eu te darei.
¹⁷ Também farás um propiciatório de ouro puro; o seu comprimento será de dois côvados e meio, e a sua largura, de um côvado e meio.
¹⁸ Farás também dois querubins de ouro; de ouro batido os farás, nas duas extremidades do propiciatório.
¹⁹ Farás um querubim na extremidade de uma parte e o outro querubim na extremidade da outra parte; de uma só peça com o propiciatório fareis os querubins nas duas extremidades dele.
²⁰ Os querubins estenderão as suas asas por cima, cobrindo com as suas asas o propiciatório; as suas faces defronte uma da outra; as faces dos querubins olharão para o propiciatório.
²¹ E porás o propiciatório em cima da arca, depois que houveres posto na arca o Testemunho, que eu te darei.
²² E ali virei a ti e falarei contigo de cima do propiciatório, do meio dos dois querubins (que estão sobre a arca do Testemunho), tudo o que eu te ordenar para os filhos de Israel.
²³ Também farás uma mesa de madeira de acácia; o seu comprimento será de dois côvados, e a sua largura, de um côvado, e a sua altura, de um côvado e meio.
²⁴ E cobri-la-ás com ouro puro e farás uma coroa de ouro ao redor.
²⁵ Também lhe farás uma moldura ao redor, da largura de quatro dedos, e farás uma coroa de ouro ao redor da moldura.
²⁶ Também lhe farás quatro argolas de ouro; e porás as argolas nos quatro cantos que estão nos seus quatro pés.
²⁷ Defronte da moldura estarão as argolas, como lugares para as varas, para levar a mesa.
²⁸ Farás, pois, estas varas de madeira de acácia e cobri-la-ás com ouro; e levar-se-á com elas a mesa.
²⁹ Também farás os seus pratos, e as suas colheres, e as suas cobertas, e as suas tigelas com que se hão de oferecer os sacrifícios; de ouro puro os farás.
³⁰ E sobre a mesa porás os pães da proposição perante a minha face continuamente.
³¹ Também farás um castiçal de ouro puro; de ouro batido se fará este castiçal; o seu pé, as suas hastes, os seus copos, os seus botões e as suas flores serão de uma só peça com ele.
³² E seis hastes sairão dos seus lados: três hastes do castiçal de um lado dele e três hastes do castiçal do outro lado dele.
³³ Num braço, haverá três copos a modo de amêndoas, um botão e uma flor; e, no outro braço, três copos a modo de amêndoas, um botão e uma flor; assim serão as seis hastes que saem do castiçal.
³⁴ Mas no castiçal mesmo haverá quatro copos a modo de amêndoas, com seus botões e com suas flores;
³⁵ e um botão debaixo de duas hastes que saem dele; e ainda um botão debaixo de duas hastes que saem dele; e ainda um botão debaixo de duas hastes que saem dele; assim serão as seis hastes que saem do castiçal.
³⁶ Os seus botões e as suas hastes serão de uma mesma peça com ele; tudo será de uma só peça, de ouro puro batido.
³⁷ Também lhe farás sete lâmpadas; as quais se acenderão para alumiar defronte dele.
³⁸ Os seus espevitadores e os seus cinzeiros serão de ouro puro.
³⁹ De um talento de ouro puro se fará, com todos estes utensílios.
⁴⁰ Atenta, pois, que o faças conforme o seu modelo, que te foi mostrado no monte.`,

            // O DESAFIO
            pergunta: {
                texto: "De que material deveriam ser feitas as tábuas da Arca do Testemunho, da Mesa dos Pães e das varas para transportá-las?",
                opcoes: [
                    { numero: 1, texto: "Madeira de Carvalho", correta: false },
                    { numero: 2, texto: "Madeira de Acácia (Cetim)", correta: true },
                    { numero: 3, texto: "Cedro do Líbano", correta: false },
                    { numero: 4, texto: "Oliveira brava", correta: false }
                ],
                explicacao: "Êxodo 25:10, 23 - O SENHOR especificou o uso da madeira de acácia, que deveria ser revestida de ouro puro para os móveis sagrados.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 26 ---
        26: {
            titulo: "O Tabernáculo e suas Cortinas",
            subtitulo: "A estrutura das tendas e o Véu do Santuário",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ O tabernáculo farás de dez cortinas de linho fino torcido, e azul, e púrpura, e carmesim; com querubins de obra esmerada as farás.
² O comprimento de uma cortina será de vinte e oito côvados, e a largura de uma cortina, de quatro côvados; todas estas cortinas serão de uma medida.
³ Cinco cortinas se enlaçarão uma com a outra; e as outras cinco cortinas se enlaçarão uma com a outra.
⁴ E farás laçadas de azul na orla da última cortina, na juntura; assim também farás na orla da extremidade da outra cortina, na segunda juntura.
⁵ Cinquenta laçadas farás numa cortina e cinquenta laçadas farás na extremidade da cortina que está na segunda juntura; as laçadas estarão travadas uma com a outra.
⁶ Farás também cinquenta colchetes de ouro e ajuntarás as cortinas uma com a outra com os colchetes, e o tabernáculo será um todo.
⁷ Farás também cortinas de pelos de cabras para servirem de tenda sobre o tabernáculo; onze cortinas farás.
² O comprimento de uma cortina será de trinta côvados, e a largura de uma cortina, de quatro côvados; estas onze cortinas serão de uma medida.
⁹ E ajuntarás cinco destas cortinas à parte e as outras seis cortinas também à parte; e dobrarás a sexta cortina à frente da tenda.
¹⁰ E farás cinquenta laçadas na orla da última cortina, na juntura; e outras cinquenta laçadas na orla da cortina que está na segunda juntura.
¹¹ Farás também cinquenta colchetes de cobre e meterás os colchetes nas laçadas, e assim ajuntarás a tenda, para que seja uma só.
¹² E o que sobejar das cortinas da tenda, a saber, a metade da cortina que sobejar, penderá sobre as costas do tabernáculo.
¹³ E um côvado de um lado e um côvado do outro lado, do que sobejar no comprimento das cortinas da tenda, penderá sobre os lados do tabernáculo de um e de outro lado, para cobri-lo.
¹⁴ Farás também à tenda uma coberta de peles de carneiros tintas de vermelho e outra coberta de peles de texugos por cima.
¹⁵ Farás também as tábuas para o tabernáculo de madeira de acácia, que se ponham em pé.
¹⁶ O comprimento de uma tábua será de dez côvados, e a largura de cada tábua, de um côvado e meio.
¹⁷ Duas couceiras haverá em cada tábua, travadas uma com a outra; assim farás em todas as tábuas do tabernáculo.
¹⁸ E farás as tábuas para o tabernáculo assim: vinte tábuas para o lado do sul.
¹⁹ Farás também quarenta bases de prata debaixo das vinte tábuas: duas bases debaixo de uma tábua para as suas duas couceiras e duas bases debaixo de outra tábua para as suas duas couceiras.
²⁰ Também para o outro lado do tabernáculo, para a banda do norte, vinte tábuas,
²¹ com as suas quarenta bases de prata: duas bases debaixo de uma tábua e duas bases debaixo de outra tábua.
²² E para o lado do tabernáculo, para o ocidente, farás seis tábuas.
²³ Farás também duas tábuas para os cantos do tabernáculo, nos dois lados.
²⁴ E por baixo serão unidas e também em cima serão unidas com uma argola; assim se fará com as duas tábuas; ambas serão para os dois cantos.
²⁵ Assim, haverá oito tábuas com as suas bases de prata, a saber, dezasseis bases: duas bases debaixo de uma tábua e duas bases debaixo de outra tábua.
²⁶ Farás também cinco barras de madeira de acácia para as tábuas de um lado do tabernáculo,
²⁷ e cinco barras para as tábuas do outro lado do tabernáculo; como também cinco barras para as tábuas do lado do tabernáculo, para os dois lados do ocidente.
²⁸ E a barra do meio passará pelo meio das tábuas, de uma extremidade à outra.
²⁹ E cobrirás de ouro as tábuas e farás de ouro as suas argolas, para os lugares das barras; e também as barras cobrirás de ouro.
³⁰ Então, levantarás o tabernáculo conforme o modelo que te foi mostrado no monte.
³¹ Depois, farás um véu de azul, e púrpura, e carmesim, e linho fino torcido; com querubins de obra esmerada se fará.
³² E pô-lo-ás sobre quatro colunas de madeira de acácia, cobertas de ouro; os seus colchetes serão de ouro, sobre quatro bases de prata.
³³ Pendurarás o véu debaixo dos colchetes e porás a arca do Testemunho ali dentro do véu; e o véu vos fará separação entre o Lugar Santo e o Lugar Santíssimo.
³⁴ E porás o propiciatório sobre a arca do Testemunho no Lugar Santíssimo.
³⁵ E a mesa porás fora do véu, e o castiçal, defronte da mesa, ao lado do tabernáculo, para o sul; e a mesa porás ao lado do norte.
³⁶ Farás também para a porta da tenda uma coberta de azul, e púrpura, e carmesim, e linho fino torcido, de obra de bordador.
³⁷ E farás para esta coberta cinco colunas de madeira de acácia e as cobrirás de ouro; os seus colchetes serão de ouro, e fundirás para elas cinco bases de cobre.`,

            // O DESAFIO
            pergunta: {
                texto: "O Véu, feito de azul, púrpura, carmesim e linho fino torcido, deveria separar quais compartimentos do Tabernáculo?",
                opcoes: [
                    { numero: 1, texto: "O Átrio exterior e o Lugar Santo", correta: false },
                    { numero: 2, texto: "O Lugar Santo e o Lugar Santíssimo", correta: true },
                    { numero: 3, texto: "A Mesa dos Pães e o Altar de Incenso", correta: false },
                    { numero: 4, texto: "O acampamento e a entrada da tenda", correta: false }
                ],
                explicacao: "Êxodo 26:33 - O véu servia para fazer separação entre o Lugar Santo e o Lugar Santíssimo (Santo dos Santos), onde ficava a Arca.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 27 ---
        27: {
            titulo: "O Altar de Bronze e o Átrio",
            subtitulo: "A construção do lugar de sacrifício e os limites do tabernáculo",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Farás também o altar de madeira de acácia; de cinco côvados será o comprimento, e de cinco côvados, a largura (o altar será quadrado), e de três côvados, a sua altura.
² E farás as suas pontas nos seus quatro cantos; as suas pontas serão do mesmo; e o cobrirás de cobre.
³ Farás também os seus vasos para recolher a sua cinza, e as suas pás, e as suas bacias, e os seus garfos, e os seus braseiros; todos os seus vasos farás de cobre.
⁴ Farás também para ele um crivo de rede de cobre e farás à rede quatro argolas de cobre nos seus quatro cantos.
⁵ E pô-la-ás debaixo do cerco do altar para baixo, para que a rede chegue até ao meio do altar.
⁶ Farás também varas para o altar, varas de madeira de acácia, e as cobrirás de cobre.
⁷ E as varas se meterão nas argolas, de maneira que as varas estejam de ambos os lados do altar quando for levado.
⁸ Oco, de tábuas, o farás; como se te mostrou no monte, assim o farão.
⁹ Farás também o pátio do tabernáculo; ao lado do sul, para o meio-dia, o pátio terá cortinas de linho fino torcido; o comprimento de cada lado será de cem côvados.
¹⁰ As suas vinte colunas e as suas vinte bases serão de cobre; os colchetes das colunas e as suas faixas serão de prata.
¹¹ Assim também ao lado do norte haverá cortinas de cem côvados de comprimento; e as suas vinte colunas e as suas vinte bases serão de cobre; os colchetes das colunas e as suas faixas serão de prata.
¹² E na largura do pátio para o lado do ocidente haverá cortinas de cinquenta côvados; as suas colunas, dez, e as suas bases, dez.
¹³ E a largura do pátio para o lado do levante, para o oriente, será de cinquenta côvados.
¹⁴ De maneira que haja quinze côvados de cortinas de um lado; as suas colunas, três, e as suas bases, três.
¹⁵ E quinze côvados de cortinas do outro lado; as suas colunas, três, e as suas bases, três.
¹⁶ E à porta do pátio haverá uma coberta de vinte côvados, de azul, e púrpura, e carmesim, e linho fino torcido, de obra de bordador; as suas colunas, quatro, e as suas bases, quatro.
¹⁷ Todas as colunas do pátio ao redor serão cingidas de faixas de prata; os seus colchetes serão de prata, mas as suas bases, de cobre.
¹⁸ O comprimento do pátio será de cem côvados, e a largura, de cinquenta por cada lado, e a altura, de cinco côvados, de linho fino torcido; mas as suas bases serão de cobre.
¹⁹ Todos os utensílios do tabernáculo em todo o seu serviço, e todos os seus pregos, e todos os pregos do pátio serão de cobre.
²⁰ Tu, pois, ordenarás aos filhos de Israel que te tragam azeite de oliveira puro, batido, para o luminário, para fazer arder as lâmpadas continuamente.
²¹ Na tenda da congregação, fora do véu que está diante do Testemunho, Arão e seus filhos as porão em ordem, desde a tarde até pela manhã, perante o SENHOR; este será um estatuto perpétuo para os filhos de Israel, nas suas gerações.`,

            // O DESAFIO
            pergunta: {
                texto: "De que material deveriam ser feitos todos os utensílios do Altar de Holocausto, como caldeiras, pás, bacias e garfos?",
                opcoes: [
                    { numero: 1, texto: "Ouro batido", correta: false },
                    { numero: 2, texto: "Prata de lei", correta: false },
                    { numero: 3, texto: "Cobre (Bronze)", correta: true },
                    { numero: 4, texto: "Ferro fundido", correta: false }
                ],
                explicacao: "Êxodo 27:3 - O SENHOR ordenou que todos os vasos e utensílios destinados ao serviço do altar fossem fabricados de cobre (bronze).",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 28 ---
        28: {
            titulo: "As Vestes Sacerdotais",
            subtitulo: "A consagração de Arão e seus filhos para o ministério",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Depois, tu faze chegar a ti a Arão, teu irmão, e a seus filhos com ele, do meio dos filhos de Israel, para me administrarem o ofício sacerdotal, a saber: Arão, Nadabe, e Abiú, Eleazar, e Itamar, os filhos de Arão.
² E farás vestes santas a Arão, teu irmão, para glória e ornamento.
³ Falarás também a todos os que são sábios de coração, a quem eu tenho enchido do espírito de sabedoria, que façam vestes a Arão para santificá-lo, para que me administre o ofício sacerdotal.
⁴ Estas, pois, são as vestes que farão: um peitoral, e um éfode, e um manto, e uma túnica bordada, uma mitra e um cinto; farão, pois, vestes santas a Arão, teu irmão, e a seus filhos, para me administrarem o ofício sacerdotal.
⁵ E tomarão o ouro, e o azul, e a púrpura, e o carmesim, e o linho fino,
⁶ e farão o éfode de ouro, e de azul, e de púrpura, e de carmesim, e de linho fino torcido, de obra esmerada.
⁷ Terá duas ombreiras, que se ajuntem às suas duas extremidades, e assim se ajuntará.
⁸ E o cinto de obra esmerada do éfode, que estará sobre ele, será da sua mesma obra, de ouro, de azul, e de púrpura, e de carmesim, e de linho fino torcido.
⁹ E tomarás duas pedras de sardônica e gravarás nelas os nomes dos filhos de Israel.
¹⁰ Seis dos seus nomes numa pedra e os outros seis nomes na outra pedra, conforme as suas gerações.
¹¹ Conforme a obra do lapidário, como a gravura de um selo, gravarás estas duas pedras com os nomes dos filhos de Israel; engastadas em ouro as farás.
¹² E porás as duas pedras nas ombreiras do éfode, por pedras de memória para os filhos de Israel; e Arão levará os seus nomes diante do SENHOR, sobre ambos os seus ombros, por memória.
¹³ Farás também engastes de ouro,
¹⁴ e duas cadeias de ouro puro; de obra de trancinha as farás, de obra de fio torcido; e as cadeias de obra de trancinha porás nos engastes.
¹⁵ Farás também o peitoral do juízo de obra esmerada, conforme a obra do éfode o farás; de ouro, de azul, e de púrpura, e de carmesim, e de linho fino torcido o farás.
¹⁶ Quadrado e dobrado, será de um palmo o seu comprimento, e de um palmo, a sua largura.
¹⁷ E o encherás de pedras de engaste, com quatro ordens de pedras: a ordem de um sárdio, de um topázio e de uma carbúncula; esta será a primeira ordem;
¹⁸ e a segunda ordem será de uma esmeralda, de uma safira e de um diamante;
¹⁹ e a terceira ordem será de um jacinto, de uma ágata e de uma ametista;
²⁰ e a quarta ordem será de uma turquesa, de uma sardônica e de um jaspe; engastadas em ouro serão nos seus assentamentos.
²¹ E serão aquelas pedras conforme os nomes dos filhos de Israel, doze segundo os seus nomes; serão esculpidas como selos, cada uma com o seu nome, para as doze tribos.
²² Também farás para o peitoral cadeias de obra de trancinha, de fio torcido de ouro puro.
²³ Também farás para o peitoral duas argolas de ouro e porás as duas argolas nas duas extremidades do peitoral.
²⁴ Então, porás as duas cadeias de fio torcido de ouro nas duas argolas, nas extremidades do peitoral.
²⁵ E as duas extremidades das duas cadeias de fio torcido porás nos dois engastes e as porás nas ombreiras do éfode, pela frente dele.
²⁶ Farás também duas argolas de ouro e as porás nas duas extremidades do peitoral, na sua borda que está junto ao éfode por dentro.
²⁷ Farás também duas argolas de ouro e as porás nas duas ombreiras do éfode, abaixo, na frente dele, defronte da sua juntura, sobre o cinto de obra esmerada do éfode.
²⁸ E ligarão o peitoral com as suas argolas às argolas do éfode com um cordão de azul, para que esteja sobre o cinto de obra esmerada do éfode; e nunca se separará o peitoral do éfode.
²⁹ Assim, Arão levará os nomes dos filhos de Israel no peitoral do juízo sobre o seu coração, quando entrar no santuário, por memória diante do SENHOR continuamente.
³⁰ Também porás no peitoral do juízo o Urim e o Tumim, para que estejam sobre o coração de Arão, quando entrar diante do SENHOR; assim, Arão levará o juízo dos filhos de Israel sobre o seu coração diante do SENHOR continuamente.
³¹ Também farás o manto do éfode, todo de azul.
³² E a abertura da cabeça estará no meio dele; esta abertura terá uma borda de obra tecida ao redor; como a abertura de uma cota de malha será nela, para que se não rompa.
³³ E nas suas abas farás romãs de azul, e de púrpura, e de carmesim, ao redor das suas abas; e campainhas de ouro no meio delas ao redor.
³⁴ Uma campainha de ouro e uma romã, outra campainha de ouro e outra romã haverá nas abas do manto ao redor.
³⁵ E estará sobre Arão quando ministrar, para que se ouça o seu som, quando entrar no santuário diante do SENHOR e quando sair, para que não morra.
³⁶ Também farás uma lâmina de ouro puro e nela gravarás como as gravuras de selos: SANTIDADE AO SENHOR.
³⁷ E pô-la-ás com um cordão de azul, de maneira que esteja na mitra; sobre a frente da mitra estará.
³⁸ E estará sobre a testa de Arão, para que Arão leve a iniquidade das coisas santas, que os filhos de Israel santificarem em todas as ofertas de suas coisas santas; e estará continuamente sobre a sua testa, para que tenham aceitação diante do SENHOR.
³⁹ Também tecerás a túnica de linho fino; também farás uma mitra de linho fino; mas o cinto farás de obra de bordador.
⁴⁰ Também farás túnicas aos filhos de Arão e far-lhes-ás cintos; também lhes farás tiaras para glória e ornamento.
⁴¹ E vestirás com eles a Arão, teu irmão, e também a seus filhos; e os ungirás, e consagrarás, e santificarás, para que me administrem o ofício sacerdotal.
⁴² Faze-lhes também calções de linho, para cobrirem a carne nua; serão dos lombos até às coxas.
⁴³ E estarão sobre Arão e sobre seus filhos, quando entrarem na tenda da congregação ou quando se chegarem ao altar para ministrar no santuário, para que não levem iniquidade e morram; isto será estatuto perpétuo para ele e para a sua semente depois dele.`,

            // O DESAFIO
            pergunta: {
                texto: "O que deveria estar gravado na lâmina de ouro puro fixada na mitra de Arão, sobre a sua testa?",
                opcoes: [
                    { numero: 1, texto: "O SENHOR é Um", correta: false },
                    { numero: 2, texto: "SANTIDADE AO SENHOR", correta: true },
                    { numero: 3, texto: "Justiça e Juízo", correta: false },
                    { numero: 4, texto: "O Deus de Israel", correta: false }
                ],
                explicacao: "Êxodo 28:36-37 - Uma lâmina de ouro puro deveria ser gravada como selo com os dizeres 'SANTIDADE AO SENHOR' e colocada sobre a mitra de Arão.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 29 ---
        29: {
            titulo: "A Consagração dos Sacerdote",
            subtitulo: "Rituais de sacrifício, unção e a santificação de Arão e seus filhos",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Isto é o que lhes farás, para os santificar, para que me administrem o ofício sacerdotal: Toma um novilho e dois carneiros sem mácula;
² e pães asmos, e bolos asmos, amassados com azeite, e coscorões asmos, untados com azeite (de flor de farinha de trigo os farás);
³ e os porás num cesto e os trarás no cesto, com o novilho e os dois carneiros.
⁴ Então, farás chegar a Arão e a seus filhos à porta da tenda da congregação e os lavarás com água.
⁵ Depois, tomarás as vestes, e vestirás a Arão da túnica e do manto do éfode, e do éfode mesmo, e do peitoral, e o cingirás com o cinto de obra esmerada do éfode.
⁶ E a mitra porás sobre a sua cabeça; e a coroa da santidade porás sobre a mitra.
⁷ E tomarás o óleo da unção, e o derramarás sobre a sua cabeça, e o ungirás.
⁸ Depois, farás chegar a seus filhos, e lhes vestirás as túnicas,
⁹ e os cingirás com o cinto, a Arão e a seus filhos, e lhes atarás as tiaras, para que tenham o sacerdócio por estatuto perpétuo, e consagrarás a Arão e a seus filhos.
¹⁰ E farás chegar o novilho diante da tenda da congregação, e Arão e seus filhos porão as mãos sobre a cabeça do novilho.
¹¹ E degolarás o novilho perante o SENHOR, à porta da tenda da congregação.
¹² Depois, tomarás do sangue do novilho e o porás com o teu dedo sobre as pontas do altar; e todo o sangue restante derramarás à base do altar.
¹³ Também tomarás toda a gordura que cobre as entranhas, e o redenho do fígado, e ambos os rins, e a gordura que houver neles e queimá-los-ás sobre o altar;
¹⁴ mas a carne do novilho, e a sua pele, e o seu esterco queimarás com fogo fora do arraial; é sacrifício pelo pecado.
¹⁵ Depois, tomarás um carneiro, e Arão e seus filhos porão as mãos sobre a cabeça do carneiro.
¹⁶ E degolarás o carneiro, e tomarás o seu sangue, e o espargirás sobre o altar ao redor.
¹¹⁷ E partirás o carneiro em seus pedaços, e lavarás as suas entranhas e as suas pernas, e as porás sobre os seus pedaços e sobre a sua cabeça.
¹⁸ Assim, queimarás todo o carneiro sobre o altar; é um holocausto para o SENHOR, um cheiro suave; uma oferta queimada ao SENHOR.
¹⁹ Depois, tomarás o outro carneiro, e Arão e seus filhos porão as mãos sobre a cabeça do carneiro.
²⁰ E degolarás o carneiro, e tomarás do seu sangue, e o porás sobre a ponta da orelha direita de Arão e sobre a ponta da orelha direita de seus filhos, como também sobre o polegar da sua mão direita e sobre o polegar do seu pé direito; e o sangue restante espargirás sobre o altar ao redor.
²¹ Então, tomarás do sangue que estará sobre o altar e do óleo da unção e o espargirás sobre Arão e sobre as suas vestes, e sobre seus filhos e sobre as vestes de seus filhos com ele; para que ele seja santificado, e as suas vestes, e seus filhos, e as vestes de seus filhos com ele.
²² Depois, tomarás do carneiro a gordura, e a cauda, e a gordura que cobre as entranhas, e o redenho do fígado, e ambos os rins com a gordura que houver neles, e a espádua direita (porque é carneiro das consagrações),
²³ e um pão, e um bolo de pão azeitado, e um coscorão do cesto dos pães asmos que estão diante do SENHOR.
²⁴ E tudo porás nas mãos de Arão e nas mãos de seus filhos; e, por oferta de movimento, os moverás perante o SENHOR.
²⁵ Depois, os tomarás das suas mãos e os queimarás no altar sobre o holocausto, por cheiro suave perante o SENHOR; é oferta queimada ao SENHOR.
²⁶ E tomarás o peito do carneiro das consagrações, que é de Arão, e o moverás por oferta de movimento perante o SENHOR; e isto será a tua porção.
²⁷ E santificarás o peito da oferta de movimento e a espádua da oferta alçada, que foi movida e alçada do carneiro das consagrações, que for de Arão e de seus filhos.
²⁸ E isto será para Arão e para seus filhos por estatuto perpétuo dos filhos de Israel; porque é oferta alçada; e a oferta alçada será dos filhos de Israel, dos seus sacrifícios pacíficos; a sua oferta alçada será para o SENHOR.
²⁹ E as vestes santas, que são de Arão, serão de seus filhos depois dele, para serem ungidos com elas e para serem consagrados com elas.
³⁰ Sete dias as vestirá aquele que de seus filhos for sacerdote em seu lugar, quando entrar na tenda da congregação para ministrar no santuário.
³¹ E tomarás o carneiro das consagrações e cozerás a sua carne no lugar santo.
³² E Arão e seus filhos comerão a carne deste carneiro e o pão que está no cesto à porta da tenda da congregação.
³³ E comerão as coisas com que for feita expiação, para consagrá-los e para santificá-los; mas o estranho delas não comerá, porque são santas.
³⁴ E, se sobejar alguma coisa da carne das consagrações ou do pão até pela manhã, o que sobejar queimarás com fogo; não se comerá, porque é santo.
³⁵ Assim, pois, farás a Arão e a seus filhos conforme tudo o que eu te tenho ordenado; por sete dias os consagrarás.
³⁶ Também cada dia prepararás um novilho por sacrifício pelo pecado para as expiações e purificarás o altar, fazendo expiação sobre ele; e o ungirás para santificá-lo.
³⁷ Sete dias farás expiação pelo altar e o santificarás; e o altar será santíssimo; tudo o que tocar o altar será santo.
³⁸ Isto, pois, é o que oferecerás sobre o altar: dois cordeiros de um ano, cada dia, continuamente.
³⁹ Um cordeiro oferecerás pela manhã e o outro cordeiro oferecerás à tarde.
⁴⁰ Com um cordeiro, a décima parte de flor de farinha, misturada com a quarta parte de um him de azeite batido, e para libação a quarta parte de um him de vinho.
⁴¹ E o outro cordeiro oferecerás à tarde e com ele farás como com a oferta da manhã e como com a sua libação, por cheiro suave; oferta queimada é ao SENHOR.
⁴² Este será o holocausto contínuo por vossas gerações, à porta da tenda da congregação, perante o SENHOR, onde vos colerei, para falar contigo ali.
⁴³ E ali virei aos filhos de Israel, para que por minha glória sejam santificados.
⁴⁴ E santificarei a tenda da congregação e o altar; também santificarei a Arão e a seus filhos, para que me administrem o ofício sacerdotal.
⁴⁵ E habitarei no meio dos filhos de Israel e lhes serei por Deus.
⁴⁶ E saberão que eu sou o SENHOR, seu Deus, que os tenho tirado da terra do Egito, para habitar no meio deles; eu, o SENHOR, seu Deus.`,

            // O DESAFIO
            pergunta: {
                texto: "Durante o ritual de consagração, em quais partes específicas do corpo de Arão e de seus filhos deveria ser colocado o sangue do carneiro da consagração?",
                opcoes: [
                    { numero: 1, texto: "Na testa e no peito", correta: false },
                    { numero: 2, texto: "Na ponta da orelha direita, no polegar da mão direita e no polegar do pé direito", correta: true },
                    { numero: 3, texto: "Nas palmas das mãos e nas plantas dos pés", correta: false },
                    { numero: 4, texto: "Nos ombros e sobre os rins", correta: false }
                ],
                explicacao: "Êxodo 29:20 - O sangue do carneiro da consagração deveria ser aplicado nessas extremidades do corpo como símbolo de santificação integral para o serviço.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 30 ---
        30: {
            titulo: "O Altar de Incenso e o Recenseamento",
            subtitulo: "O incenso sagrado, o resgate das almas e a bacia de bronze",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E farás um altar para queimar o incenso; de madeira de acácia o farás.
² O seu comprimento será de um côvado, e a sua largura, de um côvado (será quadrado); e de dois côvados, a sua altura; as suas pontas serão do mesmo.
³ E o cobrirás de ouro puro, o seu teto, e as suas paredes ao redor, e as suas pontas; e lhe farás uma coroa de ouro ao redor.
⁴ Também lhe farás duas argolas de ouro debaixo da sua coroa; nos seus dois cantos as farás, de ambos os seus lados; e serão para lugares das varas, para levá-lo com elas.
⁵ E as varas farás de madeira de acácia e as cobrirás com ouro.
⁶ E o porás diante do véu que está junto à arca do Testemunho, diante do propiciatório que está sobre o Testemunho, onde virei a ti.
⁷ E Arão queimará sobre ele incenso aromático; cada manhã, quando preparar as lâmpadas, o queimará.
⁸ E, acendendo Arão as lâmpadas à tarde, o queimará; este será incenso contínuo perante o SENHOR nas vossas gerações.
⁹ Não oferecereis sobre ele incenso estranho, nem holocausto, nem oferta de alimentos; nem tampouco derramareis sobre ele libações.
¹⁰ E, uma vez no ano, Arão fará expiação sobre as suas pontas com o sangue do sacrifício das expiações do pecado; uma vez no ano, fará expiação sobre ele nas vossas gerações; santíssimo é ao SENHOR.
¹¹ E falou o SENHOR a Moisés, dizendo:
¹² Quando tomares a soma dos filhos de Israel, conforme a sua conta, cada um deles dará ao SENHOR o resgate da sua alma, quando os contares; para que não haja neles praga nenhuma, quando os contares.
¹³ Todo aquele que passar pelo arrolamento dará isto: meio siclo, segundo o siclo do santuário (o siclo é de vinte geras); a metade de um siclo é a oferta ao SENHOR.
¹⁴ Qualquer que passar pelo arrolamento, de vinte anos para cima, dará a oferta ao SENHOR.
¹⁵ O rico não aumentará, e o pobre não diminuirá do meio siclo, quando derem a oferta ao SENHOR, para fazer expiação por vossas almas.
¹⁶ E tomarás o dinheiro das expiações dos filhos de Israel e o darás ao serviço da tenda da congregação; e será para memória aos filhos de Israel diante do SENHOR, para fazer expiação por vossas almas.
¹⁷ E falou o SENHOR a Moisés, dizendo:
¹⁸ Farás também uma pia de cobre com a sua base de cobre, para lavar; e a porás entre a tenda da congregação e o altar e nela porás água.
¹⁹ E Arão e seus filhos nela lavarão as suas mãos e os seus pés.
²⁰ Quando entrarem na tenda da congregação, lavar-se-ão com água, para que não morram, ou quando se chegarem ao altar para ministrar, para acender a oferta queimada ao SENHOR.
²¹ Lavarão, pois, as mãos e os pés, para que não morram; e isto lhes será por estatuto perpétuo, a ele e à sua semente nas suas gerações.
²² Falou mais o SENHOR a Moisés, dizendo:
²³ Tu, pois, toma para ti das principais especiarias: da mais pura mirra, quinhentos siclos; e de canela aromática, a metade, a saber, duzentos e cinquenta siclos; e de cálamo aromático, duzentos e cinquenta siclos;
²⁴ e de cássia, quinhentos siclos, segundo o siclo do santuário; e de azeite de oliveiras, um him.
²⁵ E disto farás o óleo da santa unção, o perfume composto segundo a obra do perfumista; este será o óleo da santa unção.
²⁶ E com ele ungirás a tenda da congregação, e a arca do Testemunho,
²⁷ e a mesa com todos os seus utensílios, e o castiçal com os seus utensílios, e o altar do incenso,
²⁸ e o altar do holocausto com todos os seus utensílios, e a pia com a sua base.
²⁹ Assim santificarás estas coisas, para que sejam santíssimas; tudo o que as tocar será santo.
³⁰ Também ungirás a Arão e a seus filhos e os santificarás para me administrarem o ofício sacerdotal.
³¹ E falarás aos filhos de Israel, dizendo: Este me será o óleo da santa unção nas vossas gerações.
³² Não se ungirá com ele a carne do homem, nem fareis outro semelhante conforme a sua composição; santo é e será santo para vós.
³³ O homem que compuser tal perfume como este, ou que dele puser sobre um estranho, será extirpado dos seus povos.
³⁴ Disse mais o SENHOR a Moisés: Toma especiarias aromáticas, estoraque, e onicha, e gálbano aromático, e incenso puro; de igual peso será tudo.
³⁵ E disto farás incenso, um perfume segundo a obra do perfumista, temperado com sal, puro e santo.
³⁶ E dele moerás um pouco, mui miúdo, e o porás diante do Testemunho, na tenda da congregação, onde virei a ti; coisa santíssima vos será.
³⁷ Porém o incenso que fareis conforme a composição deste, não o fareis para vós mesmos; santo te será para o SENHOR.
³⁸ O homem que fizer tal como este para cheirar será extirpado dos seus povos.`,

            // O DESAFIO
            pergunta: {
                texto: "Ao fazer o recenseamento dos filhos de Israel, qual era o valor do resgate que cada homem, rico ou pobre, deveria dar ao SENHOR?",
                opcoes: [
                    { numero: 1, texto: "Um siclo de ouro", correta: false },
                    { numero: 2, texto: "Meio siclo de prata", correta: true },
                    { numero: 3, texto: "Dois pombinhos", correta: false },
                    { numero: 4, texto: "Um décimo da colheita", correta: false }
                ],
                explicacao: "Êxodo 30:13-15 - O texto estabelece que todo aquele que passasse pelo arrolamento deveria dar meio siclo de prata como oferta ao SENHOR para o serviço do tabernáculo.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 31 ---
        31: {
            titulo: "Os Artífices do Tabernáculo",
            subtitulo: "A escolha de Bezalel e Aoliabe e o sinal do Sábado",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Depois, falou o SENHOR a Moisés, dizendo:
² Eis que eu tenho chamado por nome a Bezalel, o filho de Uri, filho de Hur, da tribo de Judá,
³ e o enchi do Espírito de Deus, de sabedoria, e de entendimento, e de ciência em todo artifício,
⁴ para inventar invenções, e trabalhar em ouro, e em prata, e em cobre,
⁵ e em lavramento de pedras para engastar, e em entalhe de madeira, para trabalhar em todo artifício.
⁶ E eis que eu tenho posto com ele a Aoliabe, o filho de Aisamaque, da tribo de Dã, e tenho dado sabedoria ao coração de todo aquele que é sábio de coração, para que façam tudo o que te tenho ordenado:
⁷ a tenda da congregação, e a arca do Testemunho, e o propiciatório que estará sobre ela, e todos os móveis da tenda,
⁸ e a mesa com os seus utensílios, e o castiçal puro com todos os seus utensílios, e o altar do incenso,
⁹ e o altar do holocausto com todos os seus utensílios, e a pia com a sua base,
¹⁰ e as vestes do ministério, e as vestes santas de Arão, o sacerdote, e as vestes de seus filhos, para administrarem o ofício sacerdotal,
¹¹ e o óleo da unção, e o incenso aromático para o santuário; farão conforme tudo o que te tenho ordenado.
¹² Falou mais o SENHOR a Moisés, dizendo:
¹³ Tu, pois, fala aos filhos de Israel, dizendo: Certamente guardareis meus sábados; porquanto isso é um sinal entre mim e vós nas vossas gerações; para que saibais que eu sou o SENHOR, que vos santifica.
¹⁴ Portanto, guardareis o sábado, porque santo é para vós; aquele que o profanar certamente morrerá; porque qualquer que nele fizer alguma obra, aquela alma será eliminada do meio do seu povo.
¹⁵ Seis dias se trabalhará, porém o sétimo dia é o sábado do repouso, santo ao SENHOR; qualquer que no dia do sábado fizer obra, certamente morrerá.
¹⁶ Guardarão, pois, o sábado os filhos de Israel, celebrando-o nas suas gerações por concerto perpétuo.
¹⁷ Entre mim e os filhos de Israel será um sinal para sempre; porque em seis dias fez o SENHOR os céus e a terra, e, ao sétimo dia, descansou, e tomou alento.
¹⁸ E deu a Moisés (quando acabou de falar com ele no monte Sinai) as duas tábuas do Testemunho, tábuas de pedra, escritas pelo dedo de Deus.`,

            // O DESAFIO
            pergunta: {
                texto: "Quem foi o homem da tribo de Judá que o SENHOR encheu do Espírito de Deus, em sabedoria e entendimento, para inventar invenções e trabalhar em ouro, prata e cobre?",
                opcoes: [
                    { numero: 1, texto: "Calebe, filho de Jefoné", correta: false },
                    { numero: 2, texto: "Bezalel, filho de Uri", correta: true },
                    { numero: 3, texto: "Aoliabe, filho de Aisamaque", correta: false },
                    { numero: 4, texto: "Eleazar, o sacerdote", correta: false }
                ],
                explicacao: "Êxodo 31:2-5 - Bezalel foi designado nominalmente pelo SENHOR e capacitado divinamente com perícia artística para executar toda a obra do Tabernáculo.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 32 ---
        32: {
            titulo: "O Bezerro de Ouro",
            subtitulo: "A apostasia do povo e a intercessão de Moisés",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Mas, vendo o povo que Moisés tardava em descer do monte, ajuntou-se o povo a Arão e disse-lhe: Levanta-te, faze-nos deuses que vão adiante de nós; porque quanto a este Moisés, a este homem que nos tirou da terra do Egito, não sabemos o que lhe sucedeu.
² E Arão lhes disse: Tirai as arrecadas de ouro que estão nas orelhas de vossas mulheres, e de vossos filhos, e de vossas filhas e trazei-mas.
³ Então, todo o povo tirou as arrecadas de ouro que estavam nas suas orelhas, e as trouxeram a Arão,
⁴ e ele as tomou das suas mãos, e formou o ouro com um buril, e fez dele um bezerro de fundição. Então, disseram: Estes são teus deuses, ó Israel, que te tiraram da terra do Egito.
⁵ E Arão, vendo isso, edificou um altar diante dele; e Arão apregoou e disse: Amanhã será festa ao SENHOR.
⁶ E, no dia seguinte, madrugaram, e ofereceram holocaustos, e trouxeram ofertas pacíficas; e o povo assentou-se a comer e a beber; depois, levantaram-se a folgar.
⁷ Então, disse o SENHOR a Moisés: Vai, desce; porque o teu povo, que fizeste subir da terra do Egito, se corrompeu,
⁸ e depressa se desviaram do caminho que eu lhes tinha ordenado; fizeram para si um bezerro de fundição, e perante ele se inclinaram, e sacrificaram-lhe, e disseram: Estes são os teus deuses, ó Israel, que te tiraram da terra do Egito.
⁹ Disse mais o SENHOR a Moisés: Tenho visto a este povo, e eis que é povo de dura cerviz.
¹⁰ Agora, pois, deixa-me, para que o meu furor se acenda contra eles, e os consuma; e eu farei de ti uma grande nação.
¹¹ Moisés, porém, suplicou ao SENHOR, seu Deus, e disse: Por que, ó SENHOR, se acende o teu furor contra o teu povo, que tiraste da terra do Egito com grande força e com forte mão?
¹² Por que hão de falar os egípcios, dizendo: Para mal os tirou, para matá-los nos montes e para consumi-los da face da terra? Torna-te do furor da tua ira e arrepende-te deste mal contra o teu povo.
¹³ Lembra-te de Abraão, de Isaque e de Israel, teus servos, aos quais por ti mesmo tens jurado e lhes tens dito: Multiplicarei a vossa semente como as estrelas do céu e darei à vossa semente toda esta terra de que tenho falado, para que a possuam por herança eternamente.
¹⁴ Então, o SENHOR arrependeu-se do mal que dissera que havia de fazer ao seu povo.
¹⁵ E voltou Moisés e desceu do monte com as duas tábuas do Testemunho na sua mão, tábuas escritas de ambas as bandas; de uma e de outra banda escritas estavam.
¹⁶ E aquelas tábuas eram obra de Deus; também a escritura era a mesma escritura de Deus, esculpida nas tábuas.
¹⁷ E, ouvindo Josué a voz do povo que jubilava, disse a Moisés: Alarido de guerra há no arraial.
¹⁸ Porém ele disse: Não é alarido dos vitoriosos, nem alarido dos vencidos, mas o alarido dos que cantam eu ouço.
¹⁹ E aconteceu que, chegando ele ao arraial e vendo o bezerro e as danças, acendeu-se o furor de Moisés, e arremessou as tábuas das suas mãos, e quebrou-as ao pé do monte,
²⁰ e tomou o bezerro que tinham feito, e queimou-o no fogo, moendo-o até que se tornou em pó; e o espargiu sobre as águas e deu-o a beber aos filhos de Israel.
²¹ E Moisés disse a Arão: Que te tem feito este povo, que sobre ele trouxeste tamanho pecado?
²² Então, disse Arão: Não se acenda a ira do meu senhor; tu sabes que este povo é inclinado ao mal;
²³ e eles me disseram: Faze-nos deuses que vão adiante de nós; porque não sabemos que sucedeu a este Moisés, a este homem que nos tirou da terra do Egito.
²⁴ Então, eu lhes disse: Quem tem ouro, arranque-o. E mo deram, e eu o lancei no fogo, e saiu este bezerro.
²⁵ E, vendo Moisés que o povo estava despido, porque Arão o havia despido para vergonha entre os seus inimigos,
²⁶ pôs-se Moisés em pé à porta do arraial e disse: Quem é do SENHOR, venha a mim. Então, se ajuntaram a ele todos os filhos de Levi.
²⁷ E disse-lhes: Assim diz o SENHOR, o Deus de Israel: Cada um ponha a sua espada sobre a sua coxa; e passai e tornai pelo arraial de porta em porta, e mate cada um a seu irmão, e cada um a seu amigo, e cada um a seu próximo.
²⁸ E os filhos de Levi fizeram conforme a palavra de Moisés; e caíram do povo aquele dia uns três mil homens.
²⁹ Porquanto Moisés tinha dito: Consagrai hoje as vossas mãos ao SENHOR, porquanto cada um será contra o seu filho e contra o seu irmão; e isto para que ele vos dê hoje bênção.
³⁰ E aconteceu que, no dia seguinte, Moisés disse ao povo: Vós pecastes grande pecado; agora, porém, subirei ao SENHOR; porventura, farei propiciação por vosso pecado.
³¹ Assim, tornou Moisés ao SENHOR e disse: Ora, este povo pecou grande pecado, fazendo para si deuses de ouro.
³² Agora, pois, perdoa o seu pecado; se não, risca-me, peço-te, do teu livro, que tens escrito.
³³ Então, disse o SENHOR a Moisés: Aquele que pecar contra mim, a este riscarei eu do meu livro.
³⁴ Vai, pois, agora, guia este povo para onde te tenho dito; eis que o meu Anjo irá adiante de ti; porém, no dia da minha visitação, visitarei neles o seu pecado.
³⁵ Assim, feriu o SENHOR o povo, por ter feito o bezerro que Arão fabricara.`,

            // O DESAFIO
            pergunta: {
                texto: "Ao descer do monte e ver o povo dançando ao redor do bezerro de ouro, o que Moisés fez com as duas tábuas do Testemunho que trazia nas mãos?",
                opcoes: [
                    { numero: 1, texto: "Escondeu-as em uma caverna", correta: false },
                    { numero: 2, texto: "Entregou-as a Josué para que as guardasse", correta: false },
                    { numero: 3, texto: "Arremessou-as das suas mãos e quebrou-as ao pé do monte", correta: true },
                    { numero: 4, texto: "Levantou-as para que o povo se arrependesse", correta: false }
                ],
                explicacao: "Êxodo 32:19 - Tomado de indignação ao ver a idolatria do povo, Moisés lançou as tábuas de pedra, quebrando-as, simbolizando o rompimento da aliança.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 33 ---
        33: {
            titulo: "A Presença de Deus e a Glória de Moisés",
            subtitulo: "A intercessão de Moisés e a revelação parcial da face do SENHOR",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Disse mais o SENHOR a Moisés: Vai, sobe daqui, tu e o povo que fizeste subir da terra do Egito, à terra de que jurei a Abraão, a Isaque e a Jacó, dizendo: À tua semente a darei.
² E enviarei um Anjo adiante de ti e lançarei fora os cananeus, e os amorreus, e os heteus, e os ferezeus, e os heveus, e os jebuseus,
³ a uma terra que mana leite e mel; porque eu não subirei no meio de ti, porquanto és povo de dura cerviz, para que te não consuma eu no caminho.
⁴ E, ouvindo o povo esta má notícia, entristeceram-se, e nenhum deles pôs sobre si os seus atavios.
⁵ Porquanto o SENHOR tinha dito a Moisés: Dize aos filhos de Israel: És povo de dura cerviz; se por um momento subir no meio de ti, te consumirei; porém agora tira de ti os teus atavios, para que eu saiba o que te hei de fazer.
⁶ Então, os filhos de Israel se despojaram dos seus atavios, ao pé do monte Horebe.
⁷ E tomou Moisés a tenda, e a estendeu para si fora do arraial, distanciada do arraial, e chamou-lhe a tenda da congregação; e aconteceu que todo aquele que buscava o SENHOR saía à tenda da congregação, que estava fora do arraial.
⁸ E acontecia que, saindo Moisés à tenda, todo o povo se levantava, e cada um ficava em pé à porta da sua tenda; e olhavam para Moisés pelas costas, até ele entrar na tenda.
⁹ E acontecia que, entrando Moisés na tenda, descia a coluna de nuvem, e punha-se à porta da tenda; e o SENHOR falava com Moisés.
¹⁰ E, vendo todo o povo a coluna de nuvem que estava à porta da tenda, todo o povo se levantava, e cada um, à porta da sua tenda, se inclinava.
¹¹ E falava o SENHOR a Moisés face a face, como qualquer fala com o seu amigo; depois, tornava ao arraial; mas o seu servidor, o jovem Josué, filho de Num, nunca se apartava do meio da tenda.
¹² E Moisés disse ao SENHOR: Eis que tu me dizes: Faz subir a este povo, porém não me fazes saber a quem hás de enviar comigo; e tu disseste: Conheço-te por teu nome, também achaste graça aos meus olhos.
¹³ Agora, pois, se tenho achado graça aos teus olhos, rogo-te que agora me faças saber o teu caminho, e conhecer-te-ei, para que ache graça aos teus olhos; e atenta que esta nação é o teu povo.
¹⁴ Disse, pois: Irá a minha presença contigo para te fazer descansar.
¹⁵ Então, disse-lhe: Se a tua presença não for conosco, não nos faças subir daqui.
¹⁶ Como, pois, se saberá agora que tenho achado graça aos teus olhos, eu e o teu povo? Acaso, não é por andares tu conosco, de modo que sejamos separados, eu e o teu povo, de todos os povos que há sobre a face da terra?
¹⁷ Então, disse o SENHOR a Moisés: Farei também isto, que tens dito; porquanto achaste graça aos meus olhos; e te conheço por teu nome.
¹⁸ Então, ele disse: Rogo-te que me mostres a tua glória.
¹⁹ Porém ele disse: Eu farei passar toda a minha bondade por diante de ti e apregoarei o nome do SENHOR diante de ti; e terei misericórdia de quem eu tiver misericórdia e me compadecerei de quem eu me compadecer.
²⁰ E disse mais: Não poderás ver a minha face, porquanto homem nenhum verá a minha face e viverá.
²¹ Disse mais o SENHOR: Eis aqui um lugar junto a mim; ali te porás sobre a penha.
²² E acontecerá que, quando a minha glória passar, te porei numa fenda da penha e te cobrirei com a minha mão, até que eu haja passado.
²³ E, havendo eu tirado a minha mão, me verás pelas costas; mas a minha face não se verá.`,

            // O DESAFIO
            pergunta: {
                texto: "Quando Moisés pediu para ver a glória do SENHOR, onde Deus o colocou para que ele pudesse ser protegido enquanto Sua glória passava?",
                opcoes: [
                    { numero: 1, texto: "No cume da montanha mais alta", correta: false },
                    { numero: 2, texto: "Em uma fenda da peña (rocha)", correta: true },
                    { numero: 3, texto: "Dentro do Tabernáculo da Congregação", correta: false },
                    { numero: 4, texto: "Atrás de uma coluna de fogo", correta: false }
                ],
                explicacao: "Êxodo 33:22 - O SENHOR disse que colocaria Moisés em uma fenda da rocha e o cobriria com Sua mão até que tivesse passado, pois homem nenhum poderia ver Sua face e viver.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 34 ---
        34: {
            titulo: "A Renovação da Aliança",
            subtitulo: "As novas tábuas da Lei e o rosto resplandecente de Moisés",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `

¹ Então, disse o SENHOR a Moisés: Lavra duas tábuas de pedra, como as primeiras; e eu escreverei nas tábuas as palavras que estavam nas primeiras tábuas, que tu quebraste.
² E prepara-te para amanhã, para que subas pela manhã ao monte Sinai e te ponhas ali diante de mim no cume do monte.
³ E ninguém suba contigo, e ninguém apareça em todo o monte; nem ovelhas nem bois se apascentem defronte do monte.
⁴ Então, Moisés lavrou duas tábuas de pedra, como as primeiras; e levantou-se pela manhã cedo e subiu ao monte Sinai, como o SENHOR lhe tinha ordenado; e levou as duas tábuas de pedra na sua mão.
⁵ E o SENHOR desceu numa nuvem e se pôs ali junto a ele; e ele apregoou o nome do SENHOR.
⁶ Passando, pois, o SENHOR perante a sua face, clamou: SENHOR, o SENHOR Deus, misericordioso e piedoso, tardio em irar-se e grande em beneficência e verdade;
⁷ que guarda a beneficência em milhares; que perdoa a iniquidade, e a transgressão, e o pecado; que ao culpado não tem por inocente; que visita a iniquidade dos pais sobre os filhos e sobre os filhos dos filhos até à terceira e quarta geração.
⁸ E Moisés apressou-se, e inclinou a cabeça à terra, e adorou,
⁹ e disse: Senhor, se agora tenho achado graça aos teus olhos, vá agora o Senhor no meio de nós; porque este é povo de dura cerviz; e perdoa a nossa iniquidade e o nosso pecado e toma-nos por tua herança.
¹⁰ Então, disse: Eis que eu faço um concerto; farei diante de todo o teu povo maravilhas que nunca foram feitas em toda a terra, nem entre nação alguma; de maneira que todo este povo, em cujo meio tu estás, veja a obra do SENHOR; porque coisa terrível é o que eu faço contigo.
¹¹ Guarda o que eu te ordeno hoje; eis que eu lançarei fora de diante de ti os amorreus, e os cananeus, e os heteus, e os ferezeus, e os heveus, e os jebuseus.
¹² Guarda-te que não faças concerto com os moradores da terra aonde hás de entrar; para que não seja por laço no meio de ti.
¹³ Mas os seus altares transtornareis, e as suas estátuas quebrareis, e os seus bosques cortareis.
¹⁴ Porque não te inclinarás diante de outro deus; pois o nome do SENHOR é Zeloso; Deus zeloso é ele;
¹⁵ para que não faças concerto com os moradores da terra, e não se corrompam após os seus deuses, nem sacrifiquem aos seus deuses, e algum te convide, e comas dos seus sacrifícios,
¹⁶ e tomes mulheres de suas filhas para os teus filhos, e suas filhas, corrompendo-se após os seus deuses, façam que também teus filhos se corrompam após os seus deuses.
¹⁷ Não farás para ti deuses de fundição.
¹⁸ A Festa dos Pães Asmos guardarás; sete dias comerás pães asmos, como te tenho ordenado, ao tempo apontado no mês de abibe; porque no mês de abibe saíste do Egito.
¹⁹ Tudo o que abre a madre meu é; até todo o teu gado, que seja macho, abrindo a madre de vacas e de ovelhas.
²⁰ O burro, porém, que abrir a madre, resgatarás com um cordeiro; mas, se o não resgatares, cortar-lhe-ás a cabeça; todo primogênito de teus filhos resgatarás. E ninguém aparecerá vazio diante de mim.
²¹ Seis dias trabalharás, mas, ao sétimo dia, descansarás; na aradura e na sega descansarás.
²² Também guardarás a Festa das Semanas, que é a das primícias da sega do trigo, e a Festa da Colheita no fim do ano.
²³ Três vezes no ano todos os teus varões aparecerão perante o Senhor JEOVÁ, Deus de Israel;
²⁴ porque eu lançarei as nações de diante de ti e alargarei o teu termo; ninguém cobiçará a tua terra, quando subires para aparecer três vezes no ano diante do SENHOR, teu Deus.
²⁵ Não oferecerás o sangue do meu sacrifício com pão levedado, nem o sacrifício da Festa da Páscoa ficará da noite para a manhã.
²⁶ As primícias dos primeiros frutos da tua terra trarás à casa do SENHOR, teu Deus; não cozerás o cabrito no leite de sua mãe.
²⁷ Disse mais o SENHOR a Moisés: Escreve estas palavras; porque, conforme o teor destas palavras, tenho feito concerto contigo e com Israel.
²⁸ E esteve ali com o SENHOR quarenta dias e quarenta noites; não comeu pão, nem bebeu água, e escreveu nas tábuas as palavras do concerto, os dez mandamentos.
²⁹ E aconteceu que, descendo Moisés do monte Sinai (e Moisés trazia as duas tábuas do Testemunho em sua mão, quando desceu do monte), Moisés não sabia que a pele do seu rosto resplandecia, depois que falara com ele.
³⁰ Olhando, pois, Arão e todos os filhos de Israel para Moisés, eis que a pele do seu rosto resplandecia; por isso, temeram chegar-se a ele.
³¹ Então, Moisés os chamou, e Arão e todos os príncipes da congregação tornaram a ele; e Moisés lhes falou.
³² Depois, chegaram também todos os filhos de Israel, e ele lhes ordenou tudo o que o SENHOR falara com ele no monte Sinai.
³³ Assim que acabou Moisés de falar com eles, pôs um véu sobre o seu rosto.
³⁴ Porém, entrando Moisés perante o SENHOR, para falar com ele, tirava o véu até que saía; e, saindo, falava aos filhos de Israel o que lhe era ordenado.
³⁵ Assim, pois, viam os filhos de Israel o rosto de Moisés, e que a pele do rosto de Moisés resplandecia; e tornava Moisés a pôr o véu sobre o seu rosto, até que entrava para falar com ele.`,

            // O DESAFIO
            pergunta: {
                texto: "O que aconteceu com a aparência física de Moisés após ele descer do Monte Sinai pela segunda vez, trazendo as novas tábuas do Testemunho?",
                opcoes: [
                    { numero: 1, texto: "Seus cabelos ficaram brancos como a neve", correta: false },
                    { numero: 2, texto: "A pele do seu rosto resplandecia (brilhava)", correta: true },
                    { numero: 3, texto: "Ele parecia muito mais jovem do que antes", correta: false },
                    { numero: 4, texto: "Seu corpo estava cercado por uma nuvem de fumaça", correta: false }
                ],
                explicacao: "Êxodo 34:29-30 - Por ter falado com o SENHOR, a pele do rosto de Moisés emitia um brilho tão intenso que os filhos de Israel tiveram medo de se aproximar dele.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 35 ---
        35: {
            titulo: "As Ofertas Voluntárias e os Construtores",
            subtitulo: "A prontidão do coração do povo e a convocação dos artífices",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Então, Moisés convocou toda a congregação dos filhos de Israel e disse-lhes: Estas são as palavras que o SENHOR ordenou que se fizessem.
² Seis dias se trabalhará, mas o sétimo dia vos será santo, o sábado do repouso ao SENHOR; todo aquele que nele fizer qualquer obra morrerá.
³ Não acendereis fogo em nenhuma das vossas habitações no dia do sábado.
⁴ Falou mais Moisés a toda a congregação dos filhos de Israel, dizendo: Esta é a palavra que o SENHOR ordenou, dizendo:
⁵ Tomai entre vós uma oferta para o SENHOR; cada um, cujo coração é voluntariamente disposto, a trará por oferta alçada ao SENHOR: ouro, e prata, e cobre,
⁶ e azul, e púrpura, e carmesim, e linho fino, e pelos de cabras,
⁷ e peles de carneiros tintas de vermelho, e peles de texugos, e madeira de acácia,
⁸ e azeite para a luminária, e especiarias para o óleo da unção, e para o incenso aromático,
⁹ e pedras de sardônica, e pedras de engaste para o éfode e para o peitoral.
¹⁰ E venham todos os sábios de coração entre vós e façam tudo o que o SENHOR tem ordenado:
¹¹ o tabernáculo, a sua tenda e a sua coberta, os seus colchetes e as suas tábuas, as suas barras, as suas colunas e as suas bases;
¹² a arca e as suas varas, o propiciatório e o véu de cobertura;
¹³ a mesa e as suas varas, e todos os seus utensílios, e os pães da proposição;
¹⁴ e o castiçal da luminária, e os seus utensílios, e as suas lâmpadas, e o azeite para a luminária;
¹⁵ e o altar do incenso e as suas varas, e o óleo da unção, e o incenso aromático, e a coberta da porta à entrada do tabernáculo;
¹⁶ o altar do holocausto e o crivo de cobre, as suas varas e todos os seus utensílios, a pia e a sua base;
¹¹⁷ as cortinas do pátio, as suas colunas e as suas bases, e a coberta da porta do pátio;
¹⁸ as estacas do tabernáculo, e as estacas do pátio, e as suas cordas;
¹⁹ as vestes do ministério para ministrar no santuário, as vestes santas de Arão, o sacerdote, e as vestes de seus filhos, para administrarem o ofício sacerdotal.
²⁰ Então, toda a congregação dos filhos de Israel saiu da presença de Moisés.
²¹ E veio todo homem, a quem o seu coração moveu, e todo aquele cujo espírito voluntariamente o excitou, e trouxeram a oferta alçada ao SENHOR para a obra da tenda da congregação, e para todo o seu serviço, e para as vestes santas.
²² E vieram homens e mulheres, todos quantos foram dispostos de coração; trouxeram fivelas, e pendentes, e anéis, e braceletes, todos os vasos de ouro; e todo homem oferecia oferta de ouro ao SENHOR.
²³ E todo homem que se achou com azul, e púrpura, e carmesim, e linho fino, e pelos de cabras, e peles de carneiros tintas de vermelho, e peles de texugos, os trazia.
²⁴ Todo aquele que oferecia oferta alçada de prata ou de cobre trazia a oferta alçada ao SENHOR; e todo aquele que se achava com madeira de acácia a trazia para toda a obra do serviço.
²⁵ E todas as mulheres sábias de coração fiavam com as suas mãos e traziam o fiado, o azul, e a púrpura, e o carmesim, e o linho fino.
²⁶ E todas as mulheres, cujo coração as moveu em sabedoria, fiavam os pelos de cabras.
²⁷ E os príncipes traziam pedras de sardônica, e pedras de engaste para o éfode e para o peitoral,
²⁸ e especiarias, e azeite para a luminária, e para o óleo da unção, e para o incenso aromático.
²⁹ Todos os homens e mulheres, cujo coração voluntariamente se moveu a trazer para toda a obra que o SENHOR ordenara se fizesse pela mão de Moisés, o trouxeram; os filhos de Israel trouxeram oferta voluntária ao SENHOR.
³⁰ E disse Moisés aos filhos de Israel: Eis que o SENHOR tem chamado por nome a Bezalel, filho de Uri, filho de Hur, da tribo de Judá.
³¹ E o Espírito de Deus o encheu de sabedoria, entendimento e ciência em todo artifício,
³² e para inventar invenções, para trabalhar em ouro, e em prata, e em cobre,
³³ e em artifício de pedras para engastar, e em artifício de madeira, para trabalhar em toda obra de invenção.
³⁴ Também lhe tem posto no coração o ensinar a outros, a ele e a Aoliabe, filho de Aisamaque, da tribo de Dã.
³⁵ Encheu-os de sabedoria do coração, para fazer toda obra de mestre, e a mais engenhosa, e a do bordador, em azul, e em púrpura, e em carmesim, e em linho fino, e a do tecelão; fazendo toda obra e inventando invenções.`,

            // O DESAFIO
            pergunta: {
                texto: "Quem eram as pessoas que trouxeram ofertas de ouro, pedras preciosas, linho e madeira para a obra do Tabernáculo?",
                opcoes: [
                    { numero: 1, texto: "Somente os príncipes e anciãos das tribos", correta: false },
                    { numero: 2, texto: "Apenas os homens que possuíam bens de valor", correta: false },
                    { numero: 3, texto: "Todos cujo coração os moveu e cujo espírito os estimulou", correta: true },
                    { numero: 4, texto: "Os sacerdotes que recolheram as taxas obrigatórias", correta: false }
                ],
                explicacao: "Êxodo 35:21-22 - O texto enfatiza que as ofertas foram voluntárias, vindas de homens e mulheres cujos corações estavam dispostos a contribuir para a obra do SENHOR.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 36 ---
        36: {
            titulo: "A Execução da Obra e a Generosidade do Povo",
            subtitulo: "O excesso de ofertas e o início da construção das cortinas",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Assim, trabalharam Bezalel, e Aoliabe, e todo homem sábio de coração a quem o SENHOR dera sabedoria e entendimento, para saberem como haviam de fazer toda a obra para o serviço do santuário, conforme tudo o que o SENHOR havia ordenado.
² Porque Moisés chamou a Bezalel, e a Aoliabe, e a todo homem sábio de coração, em cujo coração o SENHOR tinha posto sabedoria, a todo aquele a quem o seu coração moveu para se chegar à obra para fazê-la.
³ Estes, pois, receberam de Moisés toda a oferta alçada que trouxeram os filhos de Israel para a obra do serviço do santuário, para fazê-la; e eles ainda lhe traziam cada manhã ofertas voluntárias.
⁴ De sorte que vieram todos os sábios que faziam toda a obra do santuário, cada um da obra que fazia,
⁵ e falaram a Moisés, dizendo: O povo traz muito mais do que basta para o serviço da obra que o SENHOR ordenou se fizesse.
⁶ Então, mandou Moisés que pregoassem pelo arraial, dizendo: Nenhum homem nem mulher faça mais obra alguma para a oferta alçada do santuário. Assim, o povo foi proibido de trazer mais.
⁷ Porque a matéria que tinham era bastante para toda a obra que se havia de fazer e ainda sobejava.
⁸ Assim, todo homem sábio de coração, entre os que faziam a obra, fez o tabernáculo de dez cortinas de linho fino torcido, e azul, e púrpura, e carmesim; com querubins de obra esmerada as fez.
⁹ O comprimento de uma cortina era de vinte e oito côvados, e a largura de uma cortina, de quatro côvados; todas as cortinas eram de uma medida.
¹⁰ E ajuntou cinco cortinas uma com a outra e as outras cinco cortinas ajuntou uma com a outra.
¹¹ E fez laçadas de azul na orla da última cortina, na juntura; assim também fez na orla da extremidade da outra cortina, na segunda juntura.
¹² Cinquenta laçadas fez numa cortina e cinquenta laçadas fez na extremidade da cortina que estava na segunda juntura; as laçadas estavam travadas uma com a outra.
¹³ Fez também cinquenta colchetes de ouro e ajuntou as cortinas uma com a outra com os colchetes; assim, o tabernáculo foi um todo.
¹⁴ Fez também cortinas de pelos de cabras para a tenda sobre o tabernáculo; onze cortinas as fez.
¹⁵ O comprimento de uma cortina era de trinta côvados, e a largura de uma cortina, de quatro côvados; estas onze cortinas eram de uma medida.
¹⁶ E ajuntou cinco cortinas à parte e outras seis cortinas à parte.
¹⁷ E fez cinquenta laçadas na orla da última cortina, na juntura; e outras cinquenta laçadas fez na orla da cortina que estava na segunda juntura.
¹⁸ Fez também cinquenta colchetes de cobre para ajuntar a tenda, para que fosse um todo.
¹⁹ Fez também para a tenda uma coberta de peles de carneiros tintas de vermelho; e outra coberta de peles de texugos por cima.
²⁰ Fez também as tábuas para o tabernáculo de madeira de acácia, que se punham em pé.
²¹ O comprimento de uma tábua era de dez côvados, e a largura de cada tábua, de um côvado e meio.
²² Cada tábua tinha duas couceiras, travadas uma com a outra; assim fez em todas as tábuas do tabernáculo.
²³ Assim, pois, fez as tábuas para o tabernáculo: vinte tábuas para o lado do sul.
²⁴ E fez quarenta bases de prata debaixo das vinte tábuas: duas bases debaixo de uma tábua para as suas duas couceiras e duas bases debaixo de outra tábua para as suas duas couceiras.
²⁵ Também para o outro lado do tabernáculo, para a banda do norte, fez vinte tábuas,
²⁶ com as suas quarenta bases de prata: duas bases debaixo de uma tábua e duas bases debaixo de outra tábua.
²⁷ E para o lado do tabernáculo, para o ocidente, fez seis tábuas.
²⁸ Fez também duas tábuas para os cantos do tabernáculo, nos dois lados.
²⁹ E estavam unidas por baixo e também em cima eram unidas com uma argola; assim fez com ambas elas nos dois cantos.
³⁰ Assim, havia oito tábuas com as suas bases de prata, a saber, dezasseis bases: duas bases debaixo de uma tábua e duas bases debaixo de outra tábua.
³¹ Fez também barras de madeira de acácia: cinco para as tábuas de um lado do tabernáculo,
³² e cinco barras para as tábuas do outro lado do tabernáculo, e cinco barras para as tábuas do tabernáculo, para os dois lados do ocidente.
³³ E fez que a barra do meio passasse pelo meio das tábuas, de uma extremidade à outra.
³⁴ E cobriu de ouro as tábuas e fez de ouro as suas argolas, para os lugares das barras; e também as barras cobriu de ouro.
³⁵ Depois, fez o véu de azul, e púrpura, e carmesim, e linho fino torcido; de obra esmerada o fez com querubins.
³⁶ E fez-lhe quatro colunas de madeira de acácia e as cobriu de ouro; e os seus colchetes fez de ouro e fundiu-lhe quatro bases de prata.
³⁷ Fez também para a porta da tenda a coberta de azul, e púrpura, e carmesim, e linho fino torcido, de obra de bordador,
³⁸ com as suas cinco colunas e os seus colchetes; e as suas cabeças e as suas faixas cobriu de ouro; e as suas cinco bases eram de cobre.`,

            // O DESAFIO
            pergunta: {
                texto: "O que Moisés precisou ordenar ao povo de Israel após ser informado pelos artífices sobre a quantidade de materiais trazidos?",
                opcoes: [
                    { numero: 1, texto: "Que trouxessem mais ouro para as colunas", correta: false },
                    { numero: 2, texto: "Que parassem de trazer ofertas, pois já havia o suficiente", correta: true },
                    { numero: 3, texto: "Que começassem a trabalhar na fundição", correta: false },
                    { numero: 4, texto: "Que organizassem as ofertas por tribos", correta: false }
                ],
                explicacao: "Êxodo 36:5-6 - O povo trouxe tanto material que os sábios disseram a Moisés que havia mais do que o necessário, e ele proclamou que ninguém mais fizesse obra para a oferta do santuário.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 37 ---
        37: {
            titulo: "A Confecção dos Móveis Sagrados",
            subtitulo: "Bezalel molda a Arca, a Mesa, o Candeeiro e o Altar de Incenso",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Fez também Bezalel a arca de madeira de acácia; o seu comprimento era de dois côvados e meio; e a sua largura, de um côvado e meio; e a sua altura, de um côvado e meio.
² E cobriu-a de ouro puro por dentro e por fora; e fez-lhe uma coroa de ouro ao redor;
³ e fundiu-lhe quatro argolas de ouro aos seus quatro cantos: num lado, duas, e no outro lado, duas argolas;
⁴ e fez varas de madeira de acácia e as cobriu de ouro;
⁵ e meteu as varas pelas argolas aos lados da arca, para se levar a arca.
⁶ Fez também o propiciatório de ouro puro; o seu comprimento era de dois côvados e meio, e a sua largura, de um côvado e meio.
⁷ Fez também dois querubins de ouro; de ouro batido os fez, às duas extremidades do propiciatório;
⁸ um querubim à extremidade de uma parte, e o outro querubim à extremidade da outra parte; de uma só peça com o propiciatório fez os querubins às duas extremidades dele.
⁹ E os querubins estendiam as asas por cima, cobrindo com as asas o propiciatório; os seus rostos estavam defronte um do outro; os rostos dos querubins olhavam para o propiciatório.
¹⁰ Fez também a mesa de madeira de acácia; o seu comprimento era de dois côvados, e a sua largura, de um côvado, e a sua altura, de um côvado e meio.
¹¹ E cobriu-a de ouro puro e fez-lhe uma coroa de ouro ao redor.
¹² Fez-lhe também uma moldura ao redor da largura de quatro dedos; e fez uma coroa de ouro ao redor da moldura.
¹³ Fundiu-lhe também quatro argolas de ouro e pôs as argolas aos quatro cantos que estavam nos seus quatro pés.
¹⁴ Defronte da moldura estavam as argolas, como lugares para as varas, para levar a mesa.
¹⁵ Fez também as varas de madeira de acácia e as cobriu de ouro, para levar a mesa.
¹⁶ Também fez de ouro puro os utensílios que haviam de estar sobre a mesa: os seus pratos, e as suas colheres, e as suas taças, e as suas galhetas com que se haviam de oferecer as libações.
¹⁷ Fez também o castiçal de ouro puro; de ouro batido fez o castiçal; o seu pé e a sua haste, os seus copos, os seus botões e as suas flores eram de uma só peça com ele.
¹⁸ E seis hastes saíam dos seus lados: três hastes do castiçal de um lado dele e três hastes do castiçal do outro lado dele.
¹⁹ Num braço, estavam três copos a modo de amêndoas, um botão e uma flor; e, no outro braço, três copos a modo de amêndoas, um botão e uma flor; assim eram as seis hastes que saíam do castiçal.
²⁰ Mas, no castiçal mesmo, havia quatro copos a modo de amêndoas com os seus botões e com as suas flores;
²¹ e um botão debaixo de duas hastes que saíam dele; e outro botão debaixo de duas hastes que saíam dele; e outro botão debaixo de duas hastes que saíam dele; assim eram as seis hastes que saíam dele.
²² Os seus botões e as suas hastes eram de uma só peça com ele; tudo era uma peça batida de ouro puro.
²³ Fez-lhe também as suas sete lâmpadas; os seus espevitadores e os seus cinzeiros eram de ouro puro.
²⁴ De um talento de ouro puro o fez, com todos os seus utensílios.
²⁵ E fez o altar do incenso de madeira de acácia; o seu comprimento era de um côvado, e a sua largura, de um côvado (era quadrado); e de dois côvados, a sua altura; as suas pontas eram de uma só peça com ele.
²⁶ E cobriu-o de ouro puro, o seu teto, e as suas paredes ao redor, e as suas pontas; e fez-lhe uma coroa de ouro ao redor.
²⁷ Fez-lhe também duas argolas de ouro debaixo da sua coroa, nos seus dois cantos, de ambos os seus lados, para nelas meter as varas, para levá-lo com elas.
²⁸ E as varas fez de madeira de acácia e as cobriu de ouro.
²⁹ Também fez o óleo santo da unção e o incenso aromático, puro, segundo a obra do perfumista.`,

            // O DESAFIO
            pergunta: {
                texto: "De que material Bezalel fez o Candeeiro (Menorá) e seus utensílios, como as espevitadeiras e os apagadores?",
                opcoes: [
                    { numero: 1, texto: "Prata purificada sete vezes", correta: false },
                    { numero: 2, texto: "Cobre polido do Egito", correta: false },
                    { numero: 3, texto: "Ouro puro batido", correta: true },
                    { numero: 4, texto: "Madeira de acácia revestida de ouro", correta: false }
                ],
                explicacao: "Êxodo 37:17, 23-24 - Diferente da Arca e da Mesa, que tinham base de madeira, o Candeeiro e seus sete braços foram feitos inteiramente de uma só peça de ouro puro batido.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 38 ---
        38: {
            titulo: "O Altar de Holocausto e o Átrio",
            subtitulo: "A bacia de bronze e o inventário dos metais preciosos",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Fez também o altar do holocausto de madeira de acácia; de cinco côvados era o seu comprimento, e de cinco côvados, a sua largura (era quadrado), e de três côvados, a sua altura.
² E fez-lhe as suas pontas nos seus quatro cantos; as suas pontas eram de uma só peça com ele; e cobriu-o de cobre.
³ Fez também todos os utensílios do altar: os cinzeiros, e as pás, e as bacias, e os garfos, e os braseiros; todos os seus utensílios fez de cobre.
⁴ Fez também para o altar um crivo de cobre, de obra de rede, debaixo do seu cerco, que chegava até ao meio dele.
⁵ E fundiu quatro argolas às quatro extremidades do crivo de cobre, para os lugares das varas.
⁶ E fez as varas de madeira de acácia e as cobriu de cobre.
⁷ E meteu as varas pelas argolas aos lados do altar, para com elas se levar; oco e de tábuas o fez.
⁸ Fez também a pia de cobre com a sua base de cobre, dos espelhos das mulheres que se ajuntavam à porta da tenda da congregação.
⁹ Fez também o pátio: ao lado do sul, para o meio-dia, as cortinas do pátio eram de linho fino torcido, de cem côvados.
¹⁰ As suas vinte colunas e as suas vinte bases eram de cobre; os colchetes das colunas e as suas faixas eram de prata.
¹¹ E, ao lado do norte, cortinas de cem côvados; as suas vinte colunas e as suas vinte bases eram de cobre; os colchetes das colunas e as suas faixas eram de prata.
¹² E, ao lado do ocidente, cortinas de cinquenta côvados; as suas dez colunas e as suas dez bases; os colchetes das colunas e as suas faixas eram de prata.
¹³ E, ao lado do oriente, para o levante, cortinas de cinquenta côvados.
¹⁴ As cortinas de um lado da porta eram de quinze côvados, com as suas três colunas e as suas três bases.
¹⁵ E do outro lado da porta do pátio, de ambas as bandas, eram cortinas de quinze côvados, com as suas três colunas e as suas três bases.
¹⁶ Todas as cortinas do pátio ao redor eram de linho fino torcido.
¹¹⁷ E as bases das colunas eram de cobre; os colchetes das colunas e as suas faixas eram de prata; e o revestimento das suas cabeças era de prata; e todas as colunas do pátio eram cingidas de prata.
¹⁸ E a coberta da porta do pátio era de obra de bordador, de azul, e de púrpura, e de carmesim, e de linho fino torcido; e o comprimento era de vinte côvados, e a altura, na largura, de cinco côvados, conforme as cortinas do pátio.
¹⁹ E as suas quatro colunas e as suas quatro bases eram de cobre; os seus colchetes de prata, e o revestimento das suas cabeças e as suas faixas de prata.
²⁰ E todas as estacas do tabernáculo e do pátio ao redor eram de cobre.
²¹ Esta é a conta do tabernáculo, do tabernáculo do Testemunho, que por ordem de Moisés foi contado para o ministério dos levitas, pela mão de Itamar, filho de Arão, o sacerdote.
²² Fez, pois, Bezalel, filho de Uri, filho de Hur, da tribo de Judá, tudo quanto o SENHOR ordenara a Moisés.
²³ E com ele Aoliabe, filho de Aisamaque, da tribo de Dã, um mestre de obras, e engenheiro, e bordador em azul, e em púrpura, e em carmesim, e em linho fino.
²⁴ Todo o ouro gasto na obra, em toda a obra do santuário, a saber, o ouro da oferta, foi vinte e nove talentos e setecentos e trinta siclos, segundo o siclo do santuário.
²⁵ E a prata dos arrolados da congregação foi cem talentos e mil setecentos e setenta e cinco siclos, segundo o siclo do santuário:
²⁶ um beka para cada cabeça, isto é, meio siclo, segundo o siclo do santuário, de todo aquele que passava aos arrolados, da idade de vinte anos para cima, que foram seiscentos e três mil quinhentos e cinquenta.
²⁷ E houve cem talentos de prata para fundir as bases do santuário e as bases do véu; para as cem bases, cem talentos; um talento para cada base.
²⁸ E dos mil setecentos e setenta e cinco siclos fez os colchetes para as colunas, e cobriu as suas cabeças, e as cingiu de faixas.
²⁹ E o cobre da oferta foi setenta talentos e dois mil e quatrocentos siclos.
³⁰ E dele fez as bases da porta da tenda da congregação, e o altar de cobre, e o crivo de cobre para ele, e todos os utensílios do altar,
³¹ e as bases do pátio ao redor, e as bases da porta do pátio, e todas as estacas do tabernáculo, e todas as estacas do pátio ao redor.`,

            // O DESAFIO
            pergunta: {
                texto: "De onde veio o bronze utilizado para fazer a bacia de bronze e a sua base para o serviço do Tabernáculo?",
                opcoes: [
                    { numero: 1, texto: "Dos espelhos das mulheres que se ajuntavam à porta da tenda", correta: true },
                    { numero: 2, texto: "De tributos cobrados dos estrangeiros", correta: false },
                    { numero: 3, texto: "Das sobras das fundições do Egito", correta: false },
                    { numero: 4, texto: "Das armas dos inimigos vencidos em Refidim", correta: false }
                ],
                explicacao: "Êxodo 38:8 - O texto relata especificamente que a bacia de bronze foi feita dos espelhos das mulheres que ministravam à porta da tenda da congregação.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 39 ---
        39: {
            titulo: "A Confecção das Vestes e o Exame Final",
            subtitulo: "O Éfode, o Peitoral e a entrega da obra a Moisés",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Fizeram também de azul, e de púrpura, e de carmesim as vestes do ministério para ministrar no santuário; também fizeram as vestes santas para Arão, como o SENHOR ordenara a Moisés.
² Assim, fez o éfode de ouro, e de azul, e de púrpura, e de carmesim, e de linho fino torcido.
³ E estenderam as lâminas de ouro, e as cortaram em fios, para as tecer entre o azul, e entre a púrpura, e entre o carmesim, e entre o linho fino, de obra esmerada.
⁴ Fizeram-lhe ombreiras que se ajuntassem; nas suas duas extremidades se ajuntava.
⁵ E o cinto de obra esmerada do éfode, que estava sobre ele, era da sua mesma obra, de ouro, de azul, e de púrpura, e de carmesim, e de linho fino torcido, como o SENHOR ordenara a Moisés.
⁶ Também prepararam as pedras de sardônica, engastadas em engastes de ouro, gravadas com gravuras de selo, com os nomes dos filhos de Israel.
⁷ E pô-las sobre as ombreiras do éfode por pedras de memória para os filhos de Israel, como o SENHOR ordenara a Moisés.
⁸ Fez-se também o peitoral de obra esmerada, conforme a obra do éfode, de ouro, de azul, e de púrpura, e de carmesim, e de linho fino torcido.
⁹ Quadrado era; dobrado fizeram o peitoral; o seu comprimento era de um palmo, e a sua largura, de um palmo, dobrado.
¹⁰ E encheram-no de quatro ordens de pedras: a ordem de um sárdio, de um topázio e de uma carbúncula; esta era a primeira ordem.
¹¹ E a segunda ordem, de uma esmeralda, de uma safira e de um diamante.
¹² E a terceira ordem, de um jacinto, de uma ágata e de uma ametista.
¹³ E a quarta ordem, de uma turquesa, de uma sardônica e de um jaspe; engastadas eram em engastes de ouro nos seus assentos.
¹⁴ E as pedras eram conforme os nomes dos filhos de Israel, doze segundo os seus nomes; gravadas como selos, cada uma com o seu nome, para as doze tribos.
¹⁵ Fizeram também para o peitoral cadeias de obra de trancinha, de fio torcido de ouro puro.
¹⁶ Também fizeram dois engastes de ouro e duas argolas de ouro; e puseram as duas argolas nas duas extremidades do peitoral.
¹⁷ E puseram as duas cadeias de fio torcido de ouro nas duas argolas, nas extremidades do peitoral.
¹⁸ E as duas extremidades das duas cadeias de fio torcido puseram nos dois engastes; e as puseram sobre as ombreiras do éfode, na frente dele.
¹⁹ Também fizeram duas argolas de ouro e as puseram nas duas extremidades do peitoral, na sua borda, que estava junto ao éfode, por dentro.
²⁰ Fizeram também outras duas argolas de ouro e as puseram nas duas ombreiras do éfode, abaixo, na frente dele, defronte da sua juntura, sobre o cinto de obra esmerada do éfode.
²¹ E ligaram o peitoral com as suas argolas às argolas do éfode com um cordão de azul, para que estivesse sobre o cinto de obra esmerada do éfode, e o peitoral se não apartasse do éfode, como o SENHOR ordenara a Moisés.
²² E fez o manto do éfode de obra tecida, todo de azul.
²³ E a abertura do manto estava no meio dele, como a abertura de uma cota de malha; e a abertura tinha uma borda ao redor, para que se não rompesse.
²⁴ E nas abas do manto fizeram romãs de azul, e de púrpura, e de carmesim, de fio torcido.
²⁵ Fizeram também campainhas de ouro puro, pondo as campainhas no meio das romãs nas abas do manto, ao redor, entre as romãs:
²⁶ uma campainha e uma romã, outra campainha e outra romã nas abas do manto ao redor, para ministrar, como o SENHOR ordenara a Moisés.
²⁷ Fizeram também as túnicas de linho fino, de obra tecida, para Arão e para seus filhos.
²⁸ E a mitra de linho fino, e o ornamento das tiaras de linho fino, e os calções de linho fino torcido.
²⁹ E o cinto de linho fino torcido, e de azul, e de púrpura, e de carmesim, de obra de bordador, como o SENHOR ordenara a Moisés.
³⁰ Fizeram também a lâmina da coroa da santidade de ouro puro, e nela escreveram com gravura de selo: SANTIDADE AO SENHOR.
³¹ E puseram nela um cordão de azul, para a atar em cima à mitra, como o SENHOR ordenara a Moisés.
³² Assim se acabou toda a obra do tabernáculo da tenda da congregação; e os filhos de Israel fizeram conforme tudo o que o SENHOR ordenara a Moisés; assim o fizeram.
³³ E trouxeram o tabernáculo a Moisés, a tenda e todos os seus móveis, os seus colchetes, as suas tábuas, as suas barras, e as suas colunas, e as suas bases;
³⁴ e a coberta de peles de carneiro tintas de vermelho, e a coberta de peles de texugo, e o véu de cobertura;
³⁵ a arca do Testemunho, e as suas varas, e o propiciatório;
³⁶ a mesa com todos os seus utensílios e os pães da proposição;
³⁷ o castiçal puro com as suas lâmpadas (as lâmpadas postas em ordem), e todos os seus utensílios, e o azeite para a luminária;
³⁸ e o altar de ouro, e o óleo da unção, e o incenso aromático, e a coberta da porta da tenda;
³⁹ o altar de cobre, e o seu crivo de cobre, as suas varas e todos os seus utensílios, a pia e a sua base;
⁴⁰ as cortinas do pátio, as suas colunas, e as suas bases, e a coberta da porta do pátio, as suas cordas, e as suas estacas, e todos os utensílios do serviço do tabernáculo, para a tenda da congregação;
⁴¹ as vestes do ministério para ministrar no santuário, e as vestes santas de Arão, o sacerdote, e as vestes de seus filhos, para administrarem o ofício sacerdotal.
⁴² Conforme tudo o que o SENHOR ordenara a Moisés, assim fizeram os filhos de Israel toda a obra.
⁴³ E viu Moisés toda a obra, e eis que a tinham feito; como o SENHOR ordenara, assim a fizeram; então, Moisés os abençoou.`,

            // O DESAFIO
            pergunta: {
                texto: "O que o texto relata que Moisés fez após examinar toda a obra e ver que os filhos de Israel a tinham feito conforme o SENHOR ordenara?",
                opcoes: [
                    { numero: 1, texto: "Ordenou que as tribos celebrassem", correta: false },
                    { numero: 2, texto: "Moisés os abençoou", correta: true },
                    { numero: 3, texto: "Escreveu os nomes dos artífices na tenda", correta: false },
                    { numero: 4, texto: "Ofereceu um sacrifício de gratidão imediato", correta: false }
                ],
                explicacao: "Êxodo 39:43 - Ao ver que toda a obra do Tabernáculo e seus utensílios estavam prontos e exatos segundo o modelo, Moisés abençoou o povo.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 40 ---
        40: {
            titulo: "A Ereção do Tabernáculo e a Glória",
            subtitulo: "A montagem final, a unção dos móveis e a nuvem que enche a tenda",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E falou o SENHOR a Moisés, dizendo:
² No primeiro dia do primeiro mês, levantarás o tabernáculo da tenda da congregação.
³ E porás nele a arca do Testemunho e cobrirás a arca com o véu.
⁴ Depois, trarás a mesa e porás em ordem o que se deve pôr em ordem nela; também trarás o castiçal e acenderás as suas lâmpadas.
⁵ E porás o altar de ouro para o incenso diante da arca do Testemunho; então, pendurarás a coberta da porta do tabernáculo.
⁶ Porás também o altar do holocausto diante da porta do tabernáculo da tenda da congregação.
⁷ E porás a pia entre a tenda da congregação e o altar e nela porás água.
⁸ Depois, porás o pátio ao redor e pendurarás a coberta da porta do pátio.
⁹ Então, tomarás o óleo da unção, e ungirás o tabernáculo e tudo o que há nele; e o santificarás com todos os seus móveis, e será santo.
¹⁰ Também ungirás o altar do holocausto e todos os seus utensílios; e santificarás o altar; e o altar será santíssimo.
¹¹ Então, ungirás a pia e a sua base e a santificarás.
¹² Farás também chegar a Arão e a seus filhos à porta da tenda da congregação e os lavarás com água.
¹³ E vestirás a Arão as vestes santas, e o ungirás, e o santificarás, para que me administre o ofício sacerdotal.
¹⁴ Também farás chegar a seus filhos, e lhes vestirás as túnicas,
¹⁵ e os ungirás como ungiste a seu pai, para que me administrem o ofício sacerdotal, e a sua unção lhes será por sacerdócio perpétuo nas suas gerações.
¹⁶ E Moisés fez conforme tudo o que o SENHOR lhe ordenara; assim o fez.
¹⁷ E aconteceu no primeiro mês, no ano segundo, ao primeiro dia do mês, que o tabernáculo foi levantado.
¹⁸ Moisés, pois, levantou o tabernáculo, e pôs as suas bases, e armou as suas tábuas, e meteu nele as suas barras, e levantou as suas colunas.
¹⁹ E estendeu a tenda sobre o tabernáculo e pôs a coberta da tenda sobre ela, em cima, como o SENHOR ordenara a Moisés.
²⁰ E tomou o Testemunho, e pô-lo na arca, e meteu as varas na arca; e pôs o propiciatório sobre a arca, em cima.
²¹ E trouxe a arca ao tabernáculo, e pendurou o véu de cobertura, e cobriu a arca do Testemunho, como o SENHOR ordenara a Moisés.
²² Pôs também a mesa na tenda da congregação, ao lado do tabernáculo, para o norte, fora do véu.
²³ E sobre ela pôs em ordem os pães perante o SENHOR, como o SENHOR ordenara a Moisés.
²⁴ Pôs também no tabernáculo o castiçal na tenda da congregação, defronte da mesa, ao lado do sul.
²⁵ E acendeu as lâmpadas perante o SENHOR, como o SENHOR ordenara a Moisés.
²⁶ E pôs o altar de ouro na tenda da congregação, diante do véu.
²⁷ E acendeu sobre ele o incenso aromático, como o SENHOR ordenara a Moisés.
²⁸ Pendurou também a coberta da porta do tabernáculo.
²⁹ E pôs o altar do holocausto à porta do tabernáculo da tenda da congregação e ofereceu sobre ele holocausto e oferta de alimentos, como o SENHOR ordenara a Moisés.
³⁰ Pôs também a pia entre a tenda da congregação e o altar e nela pôs água para lavar.
³¹ E nela Moisés, e Arão, e seus filhos lavaram as suas mãos e os seus pés.
³² Quando entravam na tenda da congregação e quando se chegavam ao altar, lavavam-se, como o SENHOR ordenara a Moisés.
³³ Levantou também o pátio ao redor do tabernáculo e do altar e pendurou a coberta da porta do pátio. Assim, Moisés acabou a obra.
³⁴ Então, a nuvem cobriu a tenda da congregação, e a glória do SENHOR encheu o tabernáculo.
³⁵ E Moisés não podia entrar na tenda da congregação, porquanto a nuvem ficava sobre ela, e a glória do SENHOR enchia o tabernáculo.
³⁶ Quando, pois, a nuvem se levantava de sobre o tabernáculo, os filhos de Israel caminhavam em todas as suas jornadas.
³⁷ Se a nuvem, porém, se não levantava, não caminhavam, até ao dia em que ela se levantava.
³⁸ Porquanto a nuvem do SENHOR estava de dia sobre o tabernáculo, e o fogo estava de noite sobre ele, perante os olhos de toda a casa de Israel, em todas as suas jornadas.`,

            // O DESAFIO
            pergunta: {
                texto: "O que aconteceu com a Tenda da Congregação e o Tabernáculo assim que Moisés acabou de levantar toda a obra?",
                opcoes: [
                    { numero: 1, texto: "Um grande terremoto abalou o acampamento", correta: false },
                    { numero: 2, texto: "A nuvem cobriu a tenda e a glória do SENHOR encheu o tabernáculo", correta: true },
                    { numero: 3, texto: "O fogo do céu desceu e consumiu o maná", correta: false },
                    { numero: 4, texto: "As tábuas da lei começaram a brilhar intensamente", correta: false }
                ],
                explicacao: "Êxodo 40:34-35 - A manifestação da presença de Deus foi tão poderosa que a nuvem cobriu a tenda e a glória do SENHOR encheu o local, de modo que nem Moisés podia entrar.",
                pontosGanhos: 20
            }
        },

        // ⬇️ CONTINUE COM OS DEMAIS CAPÍTULOS...
        // Você pode copiar e colar a estrutura acima e adaptar para cada capítulo
        // Capítulos 6 a 50...
    } // Fim dos capítulos
};

console.log('✅ Livro de Gênesis (Módulo Completo) pronto para uso!');