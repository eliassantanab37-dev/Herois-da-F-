// js/livros/atos.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const atos = {
    nome: "Atos",
    icone: "🔥",
    autor: "Lucas",
    background: "./imagens/atos_bg.jpg", 

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "A Ascensão e a Escolha de Matias",
            texto: `¹ Fiz o primeiro tratado, ó Teófilo, acerca de tudo que Jesus começou, não só a fazer, mas a ensinar,
² Até ao dia em que foi recebido em cima, depois de ter dado mandamentos, pelo Espírito Santo, aos apóstolos que escolhera;
³ Aos quais também, depois de ter padecido, se apresentou vivo, com muitas provas infalíveis, sendo visto por eles por espaço de quarenta dias, e falando das coisas concernentes ao reino de Deus.
⁴ E, estando com eles, determinou-lhes que não se ausentassem de Jerusalém, mas que esperassem a promessa do Pai, que, disse ele, de mim ouvistes.
⁵ Porque, na verdade, João batizou com água, mas vós sereis batizados com o Espírito Santo, não muito depois destes dias.
⁶ Aqueles, pois, que se haviam reunido perguntaram-lhe, dizendo: Senhor, restaurarás tu neste tempo o reino a Israel?
⁷ E disse-lhes: Não vos pertence saber os tempos ou as estações que o Pai estabeleceu pelo seu próprio poder.
⁸ Mas recebereis o poder do Espírito Santo, que há de vir sobre vós; e ser-me-eis testemunhas, tanto em Jerusalém como em toda a Judeia e Samaria, e até aos confins da terra.
⁹ E, quando dizia isto, vendo-o eles, foi elevado às alturas, e uma nuvem o recebeu, ocultando-o a seus olhos.
¹⁰ E, estando com os olhos fitos no céu, enquanto ele subia, eis que junto deles se puseram dois homens vestidos de branco.
¹¹ Os quais lhes disseram: Homens galileus, por que estais olhando para o céu? Esse Jesus, que dentre vós foi recebido em cima no céu, há de vir assim como para o céu o vistes ir.
¹² Então voltaram para Jerusalém, do monte chamado das Oliveiras, o qual está perto de Jerusalém, à distância do caminho de um sábado.
¹³ E, entrando, subiram ao cenáculo, onde habitavam Pedro e Tiago, João e André, Filipe e Tomé, Bartolomeu e Mateus, Tiago, filho de Alfeu, Simão, o Zelote, e Judas, irmão de Tiago.
¹⁴ Todos estes perseveravam unanimemente em oração e súplicas, com as mulheres, e Maria mãe de Jesus, e com seus irmãos.
¹⁵ E naqueles dias, levantando-se Pedro no meio dos discípulos (ora a multidão junta era de quase cento e vinte pessoas) disse:
¹⁶ Homens irmãos, convinha que se cumprisse a Escritura que o Espírito Santo predisse pela boca de Davi, acerca de Judas, que foi o guia daqueles que prenderam a Jesus;
¹⁷ Porque foi contado conosco e alcançou sorte neste ministério.
¹⁸ Ora, este adquiriu um campo com o galardão da iniquidade; e, precipitando-se, rebentou pelo meio, e todas as suas entranhas se derramaram.
¹⁹ E foi notório a todos os que habitam em Jerusalém; de maneira que na sua própria língua esse campo se chama Aceldama, isto é, Campo de Sangue.
²⁰ Porque no livro dos Salmos está escrito: Fique deserta a sua habitação, e não haja quem nela habite, e: Tome outro o seu bispado.
²¹ É necessário, pois, que, dos homens que conviveram conosco todo o tempo em que o Senhor Jesus entrou e saiu dentre nós,
²² Começando desde o batismo de João até ao dia em que de entre nós foi recebido em cima, um deles se faça conosco testemunha da sua ressurreição.
²³ E apresentaram dois: José, chamado Barsabás, que tinha por sobrenome o Justo, e Matias.
²⁴ E, orando, disseram: Tu, Senhor, conhecedor dos corações de todos, mostra qual destes dois tens escolhido,
²⁵ Para que tome parte neste ministério e apostolado, de que Judas se desviou, para ir para o seu próprio lugar.
²⁶ E, lançando-lhes sortes, caiu a sorte sobre Matias. E por voto comum foi contado com os onze apóstolos. `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Segundo Atos 1, qual era o nome do homem a quem Lucas dedicou este livro?",
                        opcoes: [
                            { numero: 1, texto: "Cornélio", correta: false },
                            { numero: 2, texto: "Teófilo", correta: true },
                            { numero: 3, texto: "Apolos", correta: false },
                            { numero: 4, texto: "Barnabé", correta: false }
                        ],
                        explicacao: "Atos 1:1 - Fiz o primeiro tratado, ó Teófilo, acerca de tudo que Jesus começou a fazer.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quantos dias Jesus apareceu aos discípulos após a sua ressurreição?",
                        opcoes: [
                            { numero: 1, texto: "Sete dias", correta: false },
                            { numero: 2, texto: "Doze dias", correta: false },
                            { numero: 3, texto: "Quarenta dias", correta: true },
                            { numero: 4, texto: "Cinquenta dias", correta: false }
                        ],
                        explicacao: "Atos 1:3 - Apresentou-se vivo, por muitos sinais, sendo visto por eles por espaço de quarenta dias.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem foi escolhido para ocupar o lugar de Judas Iscariotes entre os apóstolos?",
                        opcoes: [
                            { numero: 1, texto: "Matias", correta: true },
                            { numero: 2, texto: "Paulo", correta: false },
                            { numero: 3, texto: "José Barsabás", correta: false },
                            { numero: 4, texto: "Estêvão", correta: false }
                        ],
                        explicacao: "Atos 1:26 - E, deitando-lhes sortes, caiu a sorte sobre Matias.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "O Pentecostes",
            texto: ` ¹ E, cumprindo-se o dia de Pentecostes, estavam todos concordemente no mesmo lugar;
² E de repente veio do céu um som, como de um vento veemente e impetuoso, e encheu toda a casa em que estavam assentados.
³ E foram vistas por eles línguas repartidas, como que de fogo, as quais pousaram sobre cada um deles.
⁴ E todos foram cheios do Espírito Santo, e começaram a falar noutras línguas, conforme o Espírito lhes concedia que falassem.
⁵ E em Jerusalém estavam habitando judeus, homens religiosos, de todas as nações que estão debaixo do céu.
⁶ E, quando aquele som ocorreu, ajuntou-se uma multidão, e estava confusa, porque cada um os ouvia falar na sua própria língua.
⁷ E todos pasmavam e se maravilhavam, dizendo uns aos outros: Pois quê! Não são galileus todos esses homens que estão falando?
⁸ Como, pois, os ouvimos, cada um, na nossa própria língua em que somos nascidos?
⁹ Partos e medos, elamitas e os que habitam na Mesopotâmia, Judeia, Capadócia, Ponto e Ásia,
¹⁰ E Frígia e Panfília, Egito e partes da Líbia, junto a Cirene, e forasteiros romanos, tanto judeus como prosélitos,
¹¹ Cretenses e árabes, todos nós temos ouvido em nossas próprias línguas falar das grandezas de Deus.
¹² E todos se maravilhavam e estavam perplexos, dizendo uns para os outros: Que quer isto dizer?
¹³ E outros, zombando, diziam: Estão cheios de mosto.
¹⁴ Pedro, porém, pondo-se em pé com os onze, levantou a sua voz, e disse-lhes: Homens judeus, e todos os que habitais em Jerusalém, seja-vos isto notório, e escutai as minhas palavras.
¹⁵ Estes homens não estão embriagados, como vós pensais, sendo a terceira hora do dia.
¹⁶ Mas isto é o que foi dito pelo profeta Joel:
¹⁷ E nos últimos dias acontecerá, diz Deus, que do meu Espírito derramarei sobre toda a carne; E os vossos filhos e as vossas filhas profetizarão, os vossos jovens terão visões, e os vossos velhos sonharão sonhos;
¹⁸ E também do meu Espírito derramarei sobre os meus servos e sobre as minhas servas naqueles dias, e profetizarão;
¹⁹ E farei aparecer prodígios em cima, no céu; e sinais embaixo na terra, sangue, fogo e vapor de fumo.
²⁰ O sol se converterá em trevas, e a lua em sangue, antes de chegar o grande e glorioso dia do Senhor;
²¹ E acontecerá que todo aquele que invocar o nome do Senhor será salvo.
²² Homens israelitas, escutai estas palavras: A Jesus Nazareno, homem aprovado por Deus entre vós com maravilhas, prodígios e sinais, que Deus por ele fez no meio de vós, como vós mesmos bem sabeis;
²³ A este que vos foi entregue pelo determinado conselho e presciência de Deus, prendestes, crucificastes e matastes pelas mãos de injustos;
²⁴ Ao qual Deus ressuscitou, desfazendo as dores da morte, pois não era possível que fosse retido por ela;
²⁵ Porque dele disse Davi: Sempre via diante de mim o Senhor, porque está à minha direita, para que eu não seja abalado;
²⁶ Por isso se alegrou o meu coração, e a minha língua exultou; e ainda a minha carne há de repousar em esperança;
²⁷ Pois não deixarás a minha alma no inferno, nem permitirás que o teu Santo veja a corrupção;
²⁸ Fizeste-me conhecidos os caminhos da vida; com a tua face me encherás de júbilo.
²⁹ Homens irmãos, seja-me lícito dizer-vos livremente acerca do patriarca Davi, que ele morreu e foi sepultado, e entre nós está até hoje a sua sepultura.
³⁰ Sendo, pois, profeta e sabendo que Deus lhe havia prometido com juramento que do fruto de seus lombos, segundo a carne, levantaria o Cristo, para o assentar sobre o seu trono,
³¹ E antevendo isto, disse da ressurreição de Cristo, que a sua alma não foi deixada no inferno, nem a sua carne viu a corrupção.
³² Deus ressuscitou a este Jesus, do que todos nós somos testemunhas.
³³ De sorte que, exaltado pela destra de Deus, e tendo recebido do Pai a promessa do Espírito Santo, derramou isto que vós agora vedes e ouvis.
³⁴ Porque Davi não subiu aos céus, mas ele próprio diz: Disse o Senhor ao meu Senhor: Assenta-te à minha direita,
³⁵ Até que ponha os teus inimigos por escabelo de teus pés.
³⁶ Saiba, pois, com certeza toda a casa de Israel que a esse Jesus, a quem vós crucificastes, Deus o fez Senhor e Cristo.
³⁷ E, ouvindo eles isto, compungiram-se em seu coração, e perguntaram a Pedro e aos demais apóstolos: Que faremos, homens irmãos?
³⁸ E disse-lhes Pedro: Arrependei-vos, e cada um de vós seja batizado em nome de Jesus Cristo, em remissão de pecados; e recebereis o dom do Espírito Santo;
³⁹ Porque a promessa vos diz respeito a vós, a vossos filhos, e a todos os que estão longe, a tantos quantos Deus nosso Senhor chamar.
⁴⁰ E com muitas outras palavras isto testificava, e os exortava, dizendo: Salvai-vos desta geração perversa.
⁴¹ De sorte que foram batizados os que de bom grado receberam a sua palavra; e naquele dia agregaram-se quase três mil almas,
⁴² E perseveravam na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações.
⁴³ E em toda a alma havia temor, e muitas maravilhas e sinais se faziam pelos apóstolos.
⁴⁴ E todos os que criam estavam juntos, e tinham tudo em comum.
⁴⁵ E vendiam suas propriedades e bens, e repartiam com todos, segundo cada um havia de mister.
⁴⁶ E, perseverando unânimes todos os dias no templo, e partindo o pão em casa, comiam juntos com alegria e singeleza de coração,
⁴⁷ Louvando a Deus, e caindo na graça de todo o povo. E todos os dias acrescentava o Senhor à igreja aqueles que se haviam de salvar.  `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que apareceu sobre a cabeça de cada um no dia de Pentecostes?",
                        opcoes: [
                            { numero: 1, texto: "Uma coroa de ouro", correta: false },
                            { numero: 2, texto: "Línguas repartidas, como que de fogo", correta: true },
                            { numero: 3, texto: "Uma pomba branca", correta: false },
                            { numero: 4, texto: "Um halo de luz", correta: false }
                        ],
                        explicacao: "Atos 2:3 - E apareceram repartidas umas línguas como que de fogo, as quais pousaram sobre cada um deles.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Avia quantas pessoas no dia de petencostes reunidos?",
                        opcoes: [
                            { numero: 1, texto: "12", correta: false },
                            { numero: 2, texto: "160", correta: false },
                            { numero: 3, texto: "10", correta: false },
                            { numero: 4, texto: "120", correta: true }
                        ],
                        explicacao: ".",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quantas almas foram batizadas após a primeira pregação de Pedro?",
                        opcoes: [
                            { numero: 1, texto: "Cerca de três mil", correta: true },
                            { numero: 2, texto: "Cerca de quinhentas", correta: false },
                            { numero: 3, texto: "Exatamente cem", correta: false },
                            { numero: 4, texto: "Mil e duzentas", correta: false }
                        ],
                        explicacao: "Atos 2:41 - E naquele dia agregaram-se quase três mil almas.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "A Cura do Coxo na Porta Formosa",
            texto: ` ¹ E Pedro e João subiam juntos ao templo à hora da oração, a nona.
² E era trazido um homem que desde o ventre de sua mãe era coxo, o qual todos os dias punham à porta do templo, chamada Formosa, para pedir esmola aos que entravam no templo.
³ O qual, vendo a Pedro e a João que iam entrando no templo, pediu que lhe dessem uma esmola.
⁴ E Pedro, com João, fitando os olhos nele, disse: Olha para nós.
⁵ E olhou para eles, esperando receber deles alguma coisa.
⁶ E disse Pedro: Não tenho prata nem ouro; mas o que tenho isso te dou. Em nome de Jesus Cristo, o Nazareno, levanta-te e anda.
⁷ E, tomando-o pela mão direita, o levantou, e logo os seus pés e artelhos se firmaram.
⁸ E, saltando ele, pôs-se em pé, e andou, e entrou com eles no templo, andando, e saltando, e louvando a Deus.
⁹ E todo o povo o viu andar e louvar a Deus;
¹⁰ E conheciam-no, pois era ele o que se assentava a pedir esmola à porta Formosa do templo; e ficaram cheios de pasmo e assombro, pelo que lhe acontecera.
¹¹ E, apegando-se o coxo, que fora curado, a Pedro e João, todo o povo correu atônito para junto deles, ao alpendre chamado de Salomão.
¹² E quando Pedro viu isto, disse ao povo: Homens israelitas, por que vos maravilhais disto? Ou, por que olhais tanto para nós, como se por nosso próprio poder ou santidade fizéssemos andar este homem?
¹³ O Deus de Abraão, de Isaque e de Jacó, o Deus de nossos pais, glorificou a seu filho Jesus, a quem vós entregastes e perante a face de Pilatos negastes, tendo ele determinado que fosse solto.
¹⁴ Mas vós negastes o Santo e o Justo, e pedistes que se vos desse um homem homicida.
¹⁵ E matastes o Príncipe da vida, ao qual Deus ressuscitou dentre os mortos, do que nós somos testemunhas.
¹⁶ E pela fé no seu nome fez o seu nome fortalecer a este que vedes e conheceis; sim, a fé que vem por ele, deu a este, na presença de todos vós, esta perfeita saúde.
¹⁷ E agora, irmãos, eu sei que o fizestes por ignorância, como também os vossos príncipes.
¹⁸ Mas Deus assim cumpriu o que já dantes pela boca de todos os seus profetas havia anunciado; que o Cristo havia de padecer.
¹⁹ Arrependei-vos, pois, e convertei-vos, para que sejam apagados os vossos pecados, e para que venham assim os tempos do refrigério pela presença do Senhor,
²⁰ E envie ele a Jesus Cristo, que já dantes vos foi pregado.
²¹ O qual convém que o céu contenha até aos tempos da restauração de tudo, dos quais Deus falou pela boca de todos os seus santos profetas, desde o princípio.
²² Porque Moisés disse aos pais: O Senhor vosso Deus levantará de entre vossos irmãos um profeta semelhante a mim; a ele ouvireis em tudo quanto vos disser.
²³ E acontecerá que toda a alma que não escutar esse profeta será exterminada dentre o povo.
²⁴ Sim, e todos os profetas, desde Samuel, todos quantos depois falaram, também predisseram estes dias.
²⁵ Vós sois os filhos dos profetas e da aliança que Deus fez com nossos pais, dizendo a Abraão: Na tua descendência serão benditas todas as famílias da terra.
²⁶ Ressuscitando Deus a seu Filho Jesus, primeiro o enviou a vós, para que nisso vos abençoasse, no apartar, a cada um de vós, das vossas maldades. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Pedro disse que não possuía ao falar com o coxo?",
                        opcoes: [
                            { numero: 1, texto: "Fé e esperança", correta: false },
                            { numero: 2, texto: "Prata nem ouro", correta: true },
                            { numero: 3, texto: "Cajado nem alforje", correta: false },
                            { numero: 4, texto: "Pão nem vinho", correta: false }
                        ],
                        explicacao: "Atos 3:6 - E disse Pedro: Não tenho prata nem ouro; mas o que tenho isso te dou.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual era o nome da porta do templo onde o coxo ficava?",
                        opcoes: [
                            { numero: 1, texto: "Porta das Ovelhas", correta: false },
                            { numero: 2, texto: "Porta de Davi", correta: false },
                            { numero: 3, texto: "Porta Formosa", correta: true },
                            { numero: 4, texto: "Porta Estreita", correta: false }
                        ],
                        explicacao: "Atos 3:2 - ...o qual punham todos os dias à porta do templo, chamada Formosa.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Para onde o homem curado entrou com Pedro e João?",
                        opcoes: [
                            { numero: 1, texto: "Para o templo", correta: true },
                            { numero: 2, texto: "Para a sua casa", correta: false },
                            { numero: 3, texto: "Para o deserto", correta: false },
                            { numero: 4, texto: "Para o palácio de Herodes", correta: false }
                        ],
                        explicacao: "Atos 3:8 - E, saltando ele, pôs-se em pé, e andou, e entrou com eles no templo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "A Prisão e a Oração dos Apóstolos",
            texto: ` ¹ E, estando eles falando ao povo, sobrevieram os sacerdotes, e o capitão do templo, e os saduceus,
² Doendo-se muito de que ensinassem o povo, e anunciassem em Jesus a ressurreição dentre os mortos.
³ E lançaram mão deles, e os colocaram na prisão até ao dia seguinte, pois já era tarde.
⁴ Muitos, porém, dos que ouviram a palavra creram, e chegou o número desses homens a quase cinco mil.
⁵ E aconteceu, no dia seguinte, reunirem-se em Jerusalém os seus principais, os anciãos, os escribas,
⁶ E Anás, o sumo sacerdote, e Caifás, e João, e Alexandre, e todos quantos havia da linhagem do sumo sacerdote.
⁷ E, pondo-os no meio, perguntaram: Com que poder ou em nome de quem fizestes isto?
⁸ Então Pedro, cheio do Espírito Santo, lhes disse: Principais do povo, e vós, anciãos de Israel,
⁹ Visto que hoje somos interrogados acerca do benefício feito a um homem enfermo, e do modo como foi curado,
¹⁰ Seja conhecido de vós todos, e de todo o povo de Israel, que em nome de Jesus Cristo, o Nazareno, aquele a quem vós crucificastes e a quem Deus ressuscitou dentre os mortos, em nome desse é que este está são diante de vós.
¹¹ Ele é a pedra que foi rejeitada por vós, os edificadores, a qual foi posta por cabeça de esquina.
¹² E em nenhum outro há salvação, porque também debaixo do céu nenhum outro nome há, dado entre os homens, pelo qual devamos ser salvos.
¹³ Então eles, vendo a ousadia de Pedro e João, e informados de que eram homens sem letras e indoutos, maravilharam-se e reconheceram que eles haviam estado com Jesus.
¹⁴ E, vendo estar com eles o homem que fora curado, nada tinham que dizer em contrário.
¹⁵ Todavia, mandando-os sair fora do conselho, conferenciaram entre si,
¹⁶ Dizendo: Que havemos de fazer a estes homens? Porque a todos os que habitam em Jerusalém é manifesto que por eles foi feito um sinal notório, e não o podemos negar;
¹⁷ Mas, para que não se divulgue mais entre o povo, ameacemo-los rigorosamente para que não falem mais nesse nome a homem algum.
¹⁸ E, chamando-os, disseram-lhes que absolutamente não falassem, nem ensinasem, no nome de Jesus.
¹⁹ Respondendo, porém, Pedro e João, lhes disseram: Julgai vós se é justo, diante de Deus, ouvir-vos antes a vós do que a Deus;
²⁰ Porque não podemos deixar de falar do que temos visto e ouvido.
²¹ Mas eles ainda os ameaçaram mais e, não achando motivo para os castigar, deixaram-nos ir, por causa do povo; porque todos glorificavam a Deus pelo que acontecera;
²² Pois tinha mais de quarenta anos o homem em quem se operara aquele milagre de saúde.
²³ E, soltos eles, foram para os seus, e contaram tudo o que lhes disseram os principais sacerdotes e os anciãos.
²⁴ E, ouvindo eles isto, unânimes levantaram a voz a Deus, e disseram: Senhor, tu és o Deus que fizeste o céu, e a terra, e o mar e tudo o que neles há;
²⁵ Que disseste pela boca de Davi, teu servo: Por que bramaram os gentios, e os povos pensaram coisas vãs?
²⁶ Levantaram-se os reis da terra, e os príncipes se ajuntaram à uma, contra o Senhor e contra o seu Ungido.
²⁷ Porque verdadeiramente contra o teu santo Filho Jesus, que tu ungiste, se ajuntaram, não só Herodes, mas Pôncio Pilatos, com os gentios e os povos de Israel;
²⁸ Para fazerem tudo o que a tua mão e o teu conselho tinham anteriormente determinado que se havia de fazer.
²⁹ Agora, pois, ó Senhor, olha para as suas ameaças, e concede aos teus servos que falem com toda a ousadia a tua palavra;
³⁰ Enquanto estendes a tua mão para curar, e para que se façam sinais e prodígios pelo nome de teu santo Filho Jesus.
³¹ E, tendo orado, moveu-se o lugar em que estavam reunidos; e todos foram cheios do Espírito Santo, e anunciavam com ousadia a palavra de Deus.
³² E era um o coração e a alma da multidão dos que criam, e ninguém dizia que coisa alguma do que possuía era sua própria, mas todas as coisas lhes eram comuns.
³³ E os apóstolos davam, com grande poder, testemunho da ressurreição do Senhor Jesus, e em todos eles havia abundante graça.
³⁴ Não havia, pois, entre eles necessitado algum; porque todos os que possuíam herdades ou casas, vendendo-as, traziam o preço do que fora vendido, e o depositavam aos pés dos apóstolos.
³⁵ E repartia-se a cada um, segundo a necessidade que cada um tinha.
³⁶ Então José, chamado pelos apóstolos Barnabé (que, traduzido, é filho da consolação), levita, natural de Chipre,
³⁷ Possuindo uma herdade, vendeu-a, e trouxe o preço, e o depositou aos pés dos apóstolos. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que as autoridades notaram em Pedro e João que os deixou admirados?",
                        opcoes: [
                            { numero: 1, texto: "Sua grande riqueza", correta: false },
                            { numero: 2, texto: "Sua oposição a Roma", correta: false },
                            { numero: 3, texto: "Sua ousadia, sendo homens sem letras e indoutos", correta: true },
                            { numero: 4, texto: "Sua habilidade com armas", correta: false }
                        ],
                        explicacao: "Atos 4:13 - Então eles, vendo a ousadia de Pedro e João... maravilharam-se.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual era o apelido de José, um levita de Chipre, que significa Filho da Consolação?",
                        opcoes: [
                            { numero: 1, texto: "Barnabé", correta: true },
                            { numero: 2, texto: "Silas", correta: false },
                            { numero: 3, texto: "Marcos", correta: false },
                            { numero: 4, texto: "Lúcio", correta: false }
                        ],
                        explicacao: "Atos 4:36 - José, a quem os apóstolos puseram o sobrenome de Barnabé.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu com o lugar onde estavam reunidos após a oração?",
                        opcoes: [
                            { numero: 1, texto: "Ficou em silêncio", correta: false },
                            { numero: 2, texto: "Incendiou-se", correta: false },
                            { numero: 3, texto: "Foi inundado", correta: false },
                            { numero: 4, texto: "Tremeu", correta: true }
                        ],
                        explicacao: "Atos 4:31 - E, tendo orado, moveu-se (tremeu) o lugar em que estavam reunidos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "Ananias, Safira e o Livramento da Prisão",
            texto: ` ¹ Mas um certo homem chamado Ananias, com Safira, sua mulher, vendeu uma propriedade,
² E reteve parte do preço, sabendo-o também sua mulher; e, levando uma parte, a depositou aos pés dos apóstolos.
³ Disse então Pedro: Ananias, por que encheu Satanás o teu coração, para que mentisses ao Espírito Santo, e retivesses parte do preço da herdade?
⁴ Guardando-a não ficava para ti? E, vendida, não estava em teu poder? Por que formaste este desígnio em teu coração? Não mentiste aos homens, mas a Deus.
⁵ E Ananias, ouvindo estas palavras, caiu e expirou. E um grande temor veio sobre todos os que isto ouviram.
⁶ E, levantando-se os moços, cobriram o morto e, transportando-o para fora, o sepultaram.
⁷ E, passando um espaço quase de três horas, entrou também sua mulher, não sabendo o que havia acontecido.
⁸ E disse-lhe Pedro: Dize-me, vendestes por tanto aquela herdade? E ela disse: Sim, por tanto.
⁹ Então Pedro lhe disse: Por que é que entre vós vos concertastes para tentar o Espírito do Senhor? Eis aí à porta os pés dos que sepultaram o teu marido, e também te levarão a ti.
¹⁰ E logo caiu aos seus pés, e expirou. E, entrando os moços, acharam-na morta, e levando-a para fora, a sepultaram junto de seu marido.
¹¹ E houve um grande temor em toda a igreja, e em todos os que ouviram estas coisas.
¹² E muitos sinais e prodígios eram feitos entre o povo pelas mãos dos apóstolos. E estavam todos unanimemente no alpendre de Salomão.
¹³ Dos outros, porém, ninguém ousava ajuntar-se a eles; mas o povo tinha-os em grande estima.
¹⁴ E a multidão dos que criam no Senhor, tanto homens como mulheres, crescia cada vez mais.
¹⁵ De sorte que transportavam os enfermos para as ruas, e os punham em leitos e em macas para que ao menos a sombra de Pedro, quando este passasse, cobrisse alguns deles.
¹⁶ E até das cidades circunvizinhas concorria muita gente a Jerusalém, conduzindo enfermos e atormentados de espíritos imundos; os quais eram todos curados.
¹⁷ E, levantando-se o sumo sacerdote, e todos os que estavam com ele (e eram eles da seita dos saduceus), encheram-se de inveja,
¹⁸ E lançaram mão dos apóstolos, e os puseram na prisão pública.
¹⁹ Mas de noite um anjo do Senhor abriu as portas da prisão e, tirando-os para fora, disse:
²⁰ Ide e apresentai-vos no templo, e dizei ao povo todas as palavras desta vida.
²¹ E, ouvindo eles isto, entraram de manhã cedo no templo, e ensinavam. Chegando, porém, o sumo sacerdote e os que estavam com ele, convocaram o conselho, e a todos os anciãos dos filhos de Israel, e enviaram ao cárcere, para que de lá os trouxessem.
²² Mas, tendo lá ido os servidores, não os acharam na prisão e, voltando, lho anunciaram,
²³ Dizendo: Achamos realmente o cárcere fechado, com toda a segurança, e os guardas, que estavam fora, diante das portas; mas, quando abrimos, ninguém achamos dentro.
²⁴ Então o sumo sacerdote, o capitão do templo e os chefes dos sacerdotes, ouvindo estas palavras, estavam perplexos acerca deles e do que viria a ser aquilo.
²⁵ E, chegando um, anunciou-lhes, dizendo: Eis que os homens que encerrastes na prisão estão em pé no templo e ensinam ao povo.
²⁶ Então foi o capitão com os servidores, e os trouxe, não com violência (porque temiam ser apedrejados pelo povo).
²⁷ E, trazendo-os, os apresentaram ao conselho. E o sumo sacerdote os interrogou,
²⁸ Dizendo: Não vos admoestamos nós expressamente que não ensinásseis nesse nome? E eis que enchestes Jerusalém dessa vossa doutrina, e quereis lançar sobre nós o sangue desse homem.
²⁹ Porém, respondendo Pedro e os apóstolos, disseram: Mais importa obedecer a Deus do que aos homens.
³⁰ O Deus de nossos pais ressuscitou a Jesus, ao qual vós matastes, suspendendo-o no madeiro.
³¹ Deus com a sua destra o elevou a Príncipe e Salvador, para dar a Israel o arrependimento e a remissão dos pecados.
³² E nós somos testemunhas acerca destas palavras, nós e também o Espírito Santo, que Deus deu àqueles que lhe obedecem.
³³ E, ouvindo eles isto, se enfureciam, e deliberaram matá-los.
³⁴ Mas, levantando-se no conselho um certo fariseu, chamado Gamaliel, doutor da lei, venerado por todo o povo, mandou que por um pouco levassem para fora os apóstolos;
³⁵ E disse-lhes: Homens israelitas, acautelai-vos a respeito do que haveis de fazer a estes homens,
³⁶ Porque antes destes dias levantou-se Teudas, dizendo ser alguém; a este se ajuntou o número de uns quatrocentos homens; o qual foi morto, e todos os que lhe deram ouvidos foram dispersos e reduzidos a nada.
³⁷ Depois deste levantou-se Judas, o galileu, nos dias do alistamento, e levou muito povo após si; mas também este pereceu, e todos os que lhe deram ouvidos foram dispersos.
³⁸ E agora digo-vos: Dai de mão a estes homens, e deixai-os, porque, se este conselho ou esta obra é de homens, se desfará,
³⁹ Mas, se é de Deus, não podereis desfazê-la; para que não aconteça serdes também achados combatendo contra Deus.
⁴⁰ E concordaram com ele. E, chamando os apóstolos, e tendo-os açoitado, mandaram que não falassem no nome de Jesus, e os deixaram ir.
⁴¹ Retiraram-se, pois, da presença do conselho, regozijando-se de terem sido julgados dignos de padecer afronta pelo seu nome.
⁴² E todos os dias, no templo e nas casas, não cessavam de ensinar, e de anunciar a Jesus Cristo. 
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual foi o pecado de Ananias e Safira?",
                        opcoes: [
                            { numero: 1, texto: "Não quiseram vender a herdade", correta: false },
                            { numero: 2, texto: "Mentiram ao Espírito Santo sobre o preço da venda", correta: true },
                            { numero: 3, texto: "Roubaram o templo", correta: false },
                            { numero: 4, texto: "Abandonaram a fé", correta: false }
                        ],
                        explicacao: "Atos 5:3 - Por que encheu Satanás o teu coração, para que mentisses ao Espírito Santo?",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem abriu as portas da prisão para os apóstolos durante a noite?",
                        opcoes: [
                            { numero: 1, texto: "Um anjo do Senhor", correta: true },
                            { numero: 2, texto: "Um guarda piedoso", correta: false },
                            { numero: 3, texto: "O povo de Jerusalém", correta: false },
                            { numero: 4, texto: "Nicodemos", correta: false }
                        ],
                        explicacao: "Atos 5:19 - Mas de noite um anjo do Senhor abriu as portas da prisão.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual doutor da lei aconselhou o conselho a deixar os apóstolos em paz?",
                        opcoes: [
                            { numero: 1, texto: "Saulo de Tarso", correta: false },
                            { numero: 2, texto: "Caifás", correta: false },
                            { numero: 3, texto: "Gamaliel", correta: true },
                            { numero: 4, texto: "Anás", correta: false }
                        ],
                        explicacao: "Atos 5:34 - Levantando-se no conselho um fariseu, chamado Gamaliel.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "A Escolha dos Sete Diáconos",
            texto: ` ¹ Ora, naqueles dias, crescendo o número dos discípulos, houve uma murmuração dos gregos contra os hebreus, porque as suas viúvas eram desprezadas no ministério cotidiano.
² E os doze, convocando a multidão dos discípulos, disseram: Não é razoável que nós deixemos a palavra de Deus e sirvamos às mesas.
³ Escolhei, pois, irmãos, dentre vós, sete homens de boa reputação, cheios do Espírito Santo e de sabedoria, aos quais constituamos sobre esta necessidade.
⁴ Mas nós perseveraremos na oração e no ministério da palavra.
⁵ E este parecer contentou a toda a multidão, e elegeram Estêvão, homem cheio de fé e do Espírito Santo, e Filipe, e Prócoro, e Nicanor, e Timão, e Parmenas e Nicolau, prosélito de Antioquia;
⁶ E os apresentaram ante os apóstolos, e estes, orando, lhes impuseram as mãos.
⁷ E crescia a palavra de Deus, e em Jerusalém se multiplicava muito o número dos discípulos, e grande parte dos sacerdotes obedecia à fé.
⁸ E Estêvão, cheio de fé e de poder, fazia prodígios e grandes sinais entre o povo.
⁹ E levantaram-se alguns que eram da sinagoga chamada dos libertinos, e dos cireneus e dos alexandrinos, e dos que eram da Cilícia e da Ásia, e disputavam com Estêvão.
¹⁰ E não podiam resistir à sabedoria, e ao Espírito com que falava.
¹¹ Então subornaram uns homens, para que dissessem: Ouvimos-lhe proferir palavras blasfemas contra Moisés e contra Deus.
¹² E excitaram o povo, os anciãos e os escribas; e, investindo contra ele, o arrebataram e o levaram ao conselho.
¹³ E apresentaram falsas testemunhas, que diziam: Este homem não cessa de proferir palavras blasfemas contra este santo lugar e a lei;
¹⁴ Porque nós lhe ouvimos dizer que esse Jesus Nazareno há de destruir este lugar e mudar os costumes que Moisés nos deu.
¹⁵ Então todos os que estavam assentados no conselho, fixando os olhos nele, viram o seu rosto como o rosto de um anjo. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que os sete homens foram escolhidos em Atos 6?",
                        opcoes: [
                            { numero: 1, texto: "Para liderar o exército", correta: false },
                            { numero: 2, texto: "Para servir às mesas e cuidar das viúvas", correta: true },
                            { numero: 3, texto: "Para escrever os evangelhos", correta: false },
                            { numero: 4, texto: "Para viajar a Roma", correta: false }
                        ],
                        explicacao: "Atos 6:2-3 - Não é razoável que deixemos a palavra de Deus e sirvamos às mesas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como era o rosto de Estêvão diante do conselho?",
                        opcoes: [
                            { numero: 1, texto: "Como o rosto de um anjo", correta: true },
                            { numero: 2, texto: "Cheio de lágrimas", correta: false },
                            { numero: 3, texto: "Pálido de medo", correta: false },
                            { numero: 4, texto: "Escuro como a noite", correta: false }
                        ],
                        explicacao: "Atos 6:15 - ...viram o seu rosto como o rosto de um anjo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual era a característica principal pedida para os sete homens escolhidos?",
                        opcoes: [
                            { numero: 1, texto: "Que fossem os mais velhos", correta: false },
                            { numero: 2, texto: "Que fossem ricos", correta: false },
                            { numero: 3, texto: "Que tivessem estudado em Atenas", correta: false },
                            { numero: 4, texto: "Cheios do Espírito Santo e de sabedoria", correta: true }
                        ],
                        explicacao: "Atos 6:3 - Escolhei sete homens... cheios do Espírito Santo e de sabedoria.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        7: {
            titulo: "O Discurso e Martírio de Estêvão",
            texto: ` ¹ E disse o sumo sacerdote: Porventura é isto assim?
² E ele disse: Homens, irmãos, e pais, ouvi. O Deus da glória apareceu a nosso pai Abraão, estando na Mesopotâmia, antes de habitar em Harã,
³ E disse-lhe: Sai da tua terra e dentre a tua parentela, e dirige-te à terra que eu te mostrar.
⁴ Então saiu da terra dos caldeus, e habitou em Harã. E dali, depois que seu pai faleceu, Deus o trouxe para esta terra em que habitais agora.
⁵ E não lhe deu nela herança, nem ainda o espaço de um pé; mas prometeu que lhe daria a posse dela, e depois dele, à sua descendência, não tendo ele ainda filho.
⁶ E falou Deus assim: Que a sua descendência seria peregrina em terra alheia, e a sujeitariam à escravidão, e a maltratariam por quatrocentos anos.
⁷ E eu julgarei a nação que os tiver escravizado, disse Deus. E depois disto sairão e me servirão neste lugar.
⁸ E deu-lhe a aliança da circuncisão; e assim gerou a Isaque, e o circuncidou ao oitavo dia; e Isaque a Jacó; e Jacó aos doze patriarcas.
⁹ E os patriarcas, movidos de inveja, venderam José para o Egito; mas Deus era com ele.
¹⁰ E livrou-o de todas as suas tribulações, e lhe deu graça e sabedoria ante Faraó, rei do Egito, que o constituiu governador sobre o Egito e toda a sua casa.
¹¹ Sobreveio então a todo o país do Egito e de Canaã fome e grande tribulação; e nossos pais não achavam alimentos.
¹² Mas tendo ouvido Jacó que no Egito havia trigo, enviou ali nossos pais, a primeira vez.
¹³ E na segunda vez foi José conhecido por seus irmãos, e a linhagem de José foi manifesta a Faraó.
¹⁴ E José mandou chamar a seu pai Jacó, e a toda a sua parentela, que era de setenta e cinco almas.
¹⁵ E Jacó desceu ao Egito, e morreu, ele e nossos pais;
¹⁶ E foram transportados para Siquém, e depositados na sepultura que Abraão comprara por certa soma de dinheiro aos filhos de Emor, pai de Siquém.
¹⁷ Aproximando-se, porém, o tempo da promessa que Deus tinha feito a Abraão, o povo cresceu e se multiplicou no Egito;
¹⁸ Até que se levantou outro rei, que não conhecia a José.
¹⁹ Esse, usando de astúcia contra a nossa linhagem, maltratou nossos pais, a ponto de os fazer enjeitar as suas crianças, para que não se multiplicassem.
²⁰ Nesse tempo nasceu Moisés, e era mui formoso, e foi criado três meses em casa de seu pai.
²¹ E, sendo enjeitado, tomou-o a filha de Faraó, e o criou como seu filho.
²² E Moisés foi instruído em toda a ciência dos egípcios; e era poderoso em suas palavras e obras.
²³ E, quando completou a idade de quarenta anos, veio-lhe ao coração ir visitar seus irmãos, os filhos de Israel.
²⁴ E, vendo maltratado um deles, o defendeu, e vingou o ofendido, matando o egípcio.
²⁵ E ele cuidava que seus irmãos entenderiam que Deus lhes havia de dar a liberdade pela sua mão; mas eles não entenderam.
²⁶ E no dia seguinte, pelejando eles, foi por eles visto, e quis levá-los à paz, dizendo: Homens, sois irmãos; por que vos agravais um ao outro?
²⁷ E o que ofendia o seu próximo o repeliu, dizendo: Quem te constituiu príncipe e juiz sobre nós?
²⁸ Queres tu matar-me, como ontem mataste o egípcio?
²⁹ E a esta palavra fugiu Moisés, e esteve como estrangeiro na terra de Midiã, onde gerou dois filhos.
³⁰ E, completados quarenta anos, apareceu-lhe o anjo do Senhor no deserto do monte Sinai, numa chama de fogo no meio de uma sarça.
³¹ Então Moisés, quando viu isto, se maravilhou da visão; e, aproximando-se para observar, foi-lhe dirigida a voz do Senhor,
³² Dizendo: Eu sou o Deus de teus pais, o Deus de Abraão, e o Deus de Isaque, e o Deus de Jacó. E Moisés, todo trêmulo, não ousava olhar.
³³ E disse-lhe o Senhor: Tira as sandálias dos teus pés, porque o lugar em que estás é terra santa.
³⁴ Tenho visto atentamente a aflição do meu povo que está no Egito, e ouvi os seus gemidos, e desci a livrá-los. Agora, pois, vem, e enviar-te-ei ao Egito.
³⁵ A este Moisés, ao qual haviam negado, dizendo: Quem te constituiu príncipe e juiz? A este enviou Deus como príncipe e libertador, pela mão do anjo que lhe aparecera na sarça.
³⁶ Foi este que os conduziu para fora, fazendo prodígios e sinais na terra do Egito, e no Mar Vermelho, e no deserto, por quarenta anos.
³⁷ Este é aquele Moisés que disse aos filhos de Israel: O Senhor vosso Deus vos levantará dentre vossos irmãos um profeta como eu; a ele ouvireis.
³⁸ Este é o que esteve entre a congregação no deserto, com o anjo que lhe falava no monte Sinai, e com nossos pais, o qual recebeu as palavras de vida para no-las dar.
³⁹ Ao qual nossos pais não quiseram obedecer, antes o rejeitaram e em seu coração se tornaram ao Egito,
⁴⁰ Dizendo a Arão: Faze-nos deuses que vão adiante de nós; porque a esse Moisés, que nos tirou da terra do Egito, não sabemos o que lhe aconteceu.
⁴¹ E naqueles dias fizeram o bezerro, e ofereceram sacrifícios ao ídolo, e se alegraram nas obras das suas mãos.
⁴² Mas Deus se afastou, e os abandonou a que servissem ao exército do céu, como está escrito no livro dos profetas: Porventura me oferecestes vítimas e sacrifícios no deserto por quarenta anos, ó casa de Israel?
⁴³ Antes tomastes o tabernáculo de Moloque, e a estrela do vosso deus Renfã, figuras que vós fizestes para as adorar. Transportar-vos-ei, pois, para além da Babilônia.
⁴⁴ Estava entre nossos pais no deserto o tabernáculo do testemunho, como ordenara aquele que disse a Moisés que o fizesse segundo o modelo que tinha visto.
⁴⁵ O qual, nossos pais, recebendo-o também, o levaram com Josué quando entraram na posse das nações que Deus lançou para fora da presença de nossos pais, até aos dias de Davi,
⁴⁶ Que achou graça diante de Deus, e pediu que pudesse achar tabernáculo para o Deus de Jacó.
⁴⁷ E Salomão lhe edificou casa;
⁴⁸ Mas o Altíssimo não habita em templos feitos por mãos de homens, como diz o profeta:
⁴⁹ O céu é o meu trono, e a terra o estrado dos meus pés. Que casa me edificareis? diz o Senhor, ou qual é o lugar do meu repouso?
⁵⁰ Porventura não fez a minha mão todas estas coisas?
⁵¹ Homens de dura cerviz, e incircuncisos de coração e ouvido, vós sempre resistis ao Espírito Santo; assim vós sois como vossos pais.
⁵² A qual dos profetas não perseguiram vossos pais? Até mataram os que anteriormente anunciaram a vinda do Justo, do qual vós agora fostes traidores e homicidas;
⁵³ Vós, que recebestes a lei por ordenação dos anjos, e não a guardastes.
⁵⁴ E, ouvindo eles isto, enfureciam-se em seus corações, e rangiam os dentes contra ele.
⁵⁵ Mas ele, estando cheio do Espírito Santo, fixando os olhos no céu, viu a glória de Deus, e Jesus, que estava à direita de Deus;
⁵⁶ E disse: Eis que vejo os céus abertos, e o Filho do homem, que está em pé à mão direita de Deus.
⁵⁷ Mas eles gritaram com grande voz, taparam os seus ouvidos, e arremeteram unânimes contra ele.
⁵⁸ E, expulsando-o da cidade, o apedrejavam. E as testemunhas depuseram as suas capas aos pés de um jovem chamado Saulo.
⁵⁹ E apedrejaram a Estêvão que em invocação dizia: Senhor Jesus, recebe o meu espírito
⁶⁰ E, pondo-se de joelhos, clamou com grande voz: Senhor, não lhes imputes este pecado. E, tendo dito isto, adormeceu.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Estêvão viu no céu antes de morrer?",
                        opcoes: [
                            { numero: 1, texto: "Apenas nuvens", correta: false },
                            { numero: 2, texto: "A glória de Deus, e Jesus à direita de Deus", correta: true },
                            { numero: 3, texto: "O profeta Elias", correta: false },
                            { numero: 4, texto: "Um trono vazio", correta: false }
                        ],
                        explicacao: "Atos 7:55 - ...viu a glória de Deus, e Jesus, que estava à direita de Deus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como Estêvão foi morto?",
                        opcoes: [
                            { numero: 1, texto: "Decapitado", correta: false },
                            { numero: 2, texto: "Crucificado", correta: false },
                            { numero: 3, texto: "Apedrejado", correta: true },
                            { numero: 4, texto: "Afogado", correta: false }
                        ],
                        explicacao: "Atos 7:59 - E apedrejavam a Estêvão, que em invocação dizia: Senhor Jesus, recebe o meu espírito.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Aos pés de qual jovem as testemunhas deixaram suas vestes?",
                        opcoes: [
                            { numero: 1, texto: "Filipe", correta: false },
                            { numero: 2, texto: "Timóteo", correta: false },
                            { numero: 3, texto: "Saulo", correta: true },
                            { numero: 4, texto: "Silas", correta: false }
                        ],
                        explicacao: "Atos 7:58 - ...puseram as suas vestes aos pés de um jovem chamado Saulo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        8: {
            titulo: "Filipe em Samaria e o Etíope",
            texto: ` ¹ E também Saulo consentiu na morte dele. E fez-se naquele dia uma grande perseguição contra a igreja que estava em Jerusalém; e todos foram dispersos pelas terras da Judeia e de Samaria, exceto os apóstolos.
² E uns homens piedosos foram enterrar Estêvão, e fizeram sobre ele grande pranto.
³ E Saulo assolava a igreja, entrando pelas casas; e, arrastando homens e mulheres, os encerrava na prisão.
⁴ Mas os que andavam dispersos iam por toda a parte, anunciando a palavra.
⁵ E, descendo Filipe à cidade de Samaria lhes pregava a Cristo.
⁶ E as multidões unanimemente prestavam atenção ao que Filipe dizia, porque ouviam e viam os sinais que ele fazia;
⁷ Pois que os espíritos imundos saíam de muitos que os tinham, clamando em alta voz; e muitos paralíticos e coxos eram curados.
⁸ E havia grande alegria naquela cidade.
⁹ E estava ali um certo homem, chamado Simão, que anteriormente exercera naquela cidade a arte mágica, e tinha iludido o povo de Samaria, dizendo que era uma grande personagem;
¹⁰ Ao qual todos atendiam, desde o menor até ao maior, dizendo: Este é o grande poder de Deus.
¹¹ E atendiam-no, porque já desde muito tempo os havia iludido com artes mágicas.
¹² Mas, como cressem em Filipe, que lhes pregava acerca do reino de Deus, e do nome de Jesus Cristo, se batizavam, tanto homens como mulheres.
¹³ E creu até o próprio Simão; e, sendo batizado, ficou de contínuo com Filipe; e, vendo os sinais e as grandes maravilhas que se faziam, estava atônito.
¹⁴ Os apóstolos, pois, que estavam em Jerusalém, ouvindo que Samaria recebera a palavra de Deus, enviaram para lá Pedro e João.
¹⁵ Os quais, tendo descido, oraram por eles para que recebessem o Espírito Santo
¹⁶ (Porque sobre nenhum deles tinha ainda descido; mas somente eram batizados em nome do Senhor Jesus).
¹⁷ Então lhes impuseram as mãos, e receberam o Espírito Santo.
¹⁸ E Simão, vendo que pela imposição das mãos dos apóstolos era dado o Espírito Santo, lhes ofereceu dinheiro,
¹⁹ Dizendo: Dai-me também a mim esse poder, para que aquele sobre quem eu puser as mãos receba o Espírito Santo.
²⁰ Mas disse-lhe Pedro: O teu dinheiro seja contigo para perdição, pois cuidaste que o dom de Deus se alcança por dinheiro.
²¹ Tu não tens parte nem sorte nesta palavra, porque o teu coração não é reto diante de Deus.
²² Arrepende-te, pois, dessa tua iniquidade, e ora a Deus, para que porventura te seja perdoado o pensamento do teu coração;
²³ Pois vejo que estás em fel de amargura, e em laço de iniquidade.
²⁴ Respondendo, porém, Simão, disse: Orai vós por mim ao Senhor, para que nada do que dissestes venha sobre mim.
²⁵ Tendo eles, pois, testificado e falado a palavra do Senhor, voltaram para Jerusalém e em muitas aldeias dos samaritanos anunciaram o evangelho.
²⁶ E o anjo do Senhor falou a Filipe, dizendo: Levanta-te, e vai para o lado do sul, ao caminho que desce de Jerusalém para Gaza, que está deserta.
²⁷ E levantou-se, e foi; e eis que um homem etíope, eunuco, mordomo-mor de Candace, rainha dos etíopes, o qual era superintendente de todos os seus tesouros, e tinha ido a Jerusalém para adoração,
²⁸ Regressava e, assentado no seu carro, lia o profeta Isaías.
²⁹ E disse o Espírito a Filipe: Chega-te, e ajunta-te a esse carro.
³⁰ E, correndo Filipe, ouviu que lia o profeta Isaías, e disse: Entendes tu o que lês?
³¹ E ele disse: Como poderei entender, se alguém não me ensinar? E rogou a Filipe que subisse e com ele se assentasse.
³² E o lugar da Escritura que lia era este: Foi levado como a ovelha para o matadouro; e, como está mudo o cordeiro diante do que o tosquia, assim não abriu a sua boca.
³³ Na sua humilhação foi tirado o seu julgamento; e quem contará a sua geração? Porque a sua vida é tirada da terra.
³⁴ E, respondendo o eunuco a Filipe, disse: Rogo-te, de quem diz isto o profeta? De si mesmo, ou de algum outro?
³⁵ Então Filipe, abrindo a sua boca, e começando nesta Escritura, lhe anunciou a Jesus.
³⁶ E, indo eles caminhando, chegaram a uma certa água, e disse o eunuco: Eis aqui água; que impede que eu seja batizado?
³⁷ E disse Filipe: É lícito, se crês de todo o coração. E, respondendo ele, disse: Creio que Jesus Cristo é o Filho de Deus.
³⁸ E mandou parar o carro, e desceram ambos à água, tanto Filipe como o eunuco, e o batizou.
³⁹ E, quando saíram da água, o Espírito do Senhor arrebatou a Filipe, e não o viu mais o eunuco; e, jubiloso, continuou o seu caminho.
⁴⁰ E Filipe se achou em Azoto e, indo passando, anunciava o evangelho em todas as cidades, até que chegou a Cesareia. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Simão, o mago, tentou comprar com dinheiro?",
                        opcoes: [
                            { numero: 1, texto: "O dom de Deus (imposição de mãos)", correta: true },
                            { numero: 2, texto: "Uma igreja em Samaria", correta: false },
                            { numero: 3, texto: "O perdão de seus pecados", correta: false },
                            { numero: 4, texto: "A liberdade de Pedro", correta: false }
                        ],
                        explicacao: "Atos 8:18-19 - Ofereceu-lhes dinheiro, dizendo: Dai-me também a mim esse poder.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual livro do Antigo Testamento o eunuco etíope estava lendo?",
                        opcoes: [
                            { numero: 1, texto: "Gênesis", correta: false },
                            { numero: 2, texto: "Salmos", correta: false },
                            { numero: 3, texto: "Isaías", correta: true },
                            { numero: 4, texto: "Ezequiel", correta: false }
                        ],
                        explicacao: "Atos 8:30 - E, correndo Filipe, ouviu que lia o profeta Isaías.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu com Filipe logo após batizar o etíope?",
                        opcoes: [
                            { numero: 1, texto: "Ele foi preso", correta: false },
                            { numero: 2, texto: "Ele voltou para Jerusalém a pé", correta: false },
                            { numero: 3, texto: "O Espírito do Senhor o arrebatou", correta: true },
                            { numero: 4, texto: "Ele ficou morando na Etiópia", correta: false }
                        ],
                        explicacao: "Atos 8:39 - ...o Espírito do Senhor arrebatou a Filipe, e não o viu mais o eunuco.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        9: {
            titulo: "A Conversão de Saulo",
            texto: ` ¹ E Saulo, respirando ainda ameaças e mortes contra os discípulos do Senhor, dirigiu-se ao sumo sacerdote.
² E pediu-lhe cartas para Damasco, para as sinagogas, a fim de que, se encontrasse alguns deste Caminho, quer homens quer mulheres, os conduzisse presos a Jerusalém.
³ E, indo no caminho, aconteceu que, chegando perto de Damasco, subitamente o cercou um resplendor de luz do céu.
⁴ E, caindo em terra, ouviu uma voz que lhe dizia: Saulo, Saulo, por que me persegues?
⁵ E ele disse: Quem és, Senhor? E disse o Senhor: Eu sou Jesus, a quem tu persegues. Duro é para ti recalcitrar contra os aguilhões.
⁶ E ele, tremendo e atônito, disse: Senhor, que queres que eu faça? E disse-lhe o Senhor: Levanta-te, e entra na cidade, e lá te será dito o que te convém fazer.
⁷ E os homens, que iam com ele, pararam espantados, ouvindo a voz, mas não vendo ninguém.
⁸ E Saulo levantou-se da terra, e, abrindo os olhos, não via a ninguém. E, guiando-o pela mão, o conduziram a Damasco.
⁹ E esteve três dias sem ver, e não comeu nem bebeu.
¹⁰ E havia em Damasco um certo discípulo chamado Ananias; e disse-lhe o Senhor em visão: Ananias! E ele respondeu: Eis-me aqui, Senhor.
¹¹ E disse-lhe o Senhor: Levanta-te, e vai à rua chamada Direita, e pergunta em casa de Judas por um homem de Tarso chamado Saulo; pois eis que ele está orando;
¹² E numa visão ele viu que entrava um homem chamado Ananias, e punha sobre ele a mão, para que tornasse a ver.
¹³ E respondeu Ananias: Senhor, a muitos ouvi acerca deste homem, quantos males tem feito aos teus santos em Jerusalém;
¹⁴ E aqui tem poder dos principais sacerdotes para prender a todos os que invocam o teu nome.
¹⁵ Disse-lhe, porém, o Senhor: Vai, porque este é para mim um vaso escolhido, para levar o meu nome diante dos gentios, e dos reis e dos filhos de Israel.
¹⁶ E eu lhe mostrarei quanto deve padecer pelo meu nome.
¹⁷ E Ananias foi, e entrou na casa e, impondo-lhe as mãos, disse: Irmão Saulo, o Senhor Jesus, que te apareceu no caminho por onde vinhas, me enviou, para que tornes a ver e sejas cheio do Espírito Santo.
¹⁸ E logo lhe caíram dos olhos como que umas escamas, e imediatamente recuperou a vista; e, levantando-se, foi batizado.
¹⁹ E, tendo comido, ficou confortado. E esteve Saulo alguns dias com os discípulos que estavam em Damasco.
²⁰ E logo nas sinagogas pregava a Cristo, que este é o Filho de Deus.
²¹ E todos os que o ouviam estavam atônitos, e diziam: Não é este o que em Jerusalém perseguia os que invocavam este nome, e para isso veio aqui, para os levar presos aos principais sacerdotes?
²² Saulo, porém, se esforçava muito mais, e confundia os judeus que habitavam em Damasco, provando que aquele era o Cristo.
²³ E, tendo passado muitos dias, os judeus tomaram conselho entre si para o matar.
²⁴ Mas as suas ciladas vieram ao conhecimento de Saulo; e como eles guardavam as portas, tanto de dia como de noite, para poderem tirar-lhe a vida,
²⁵ Tomando-o de noite os discípulos o desceram, dentro de um cesto, pelo muro.
²⁶ E, quando Saulo chegou a Jerusalém, procurava ajuntar-se aos discípulos, mas todos o temiam, não crendo que fosse discípulo.
²⁷ Então Barnabé, tomando-o consigo, o trouxe aos apóstolos, e lhes contou como no caminho ele vira ao Senhor e lhe falara, e como em Damasco falara ousadamente no nome de Jesus.
²⁸ E andava com eles em Jerusalém, entrando e saindo,
²⁹ E falava ousadamente no nome do Senhor Jesus. Falava e também disputava contra os gregos, mas eles procuravam matá-lo.
³⁰ Sabendo-o, porém, os irmãos, o acompanharam até Cesareia, e o enviaram a Tarso.
³¹ Assim, pois, as igrejas em toda a Judeia, e Galileia e Samaria tinham paz, e eram edificadas; e se multiplicavam, andando no temor do Senhor e consolação do Espírito Santo.
³² E aconteceu que, passando Pedro por toda a parte, veio também aos santos que habitavam em Lida.
³³ E achou ali certo homem, chamado Eneias, jazendo numa cama havia oito anos, o qual era paralítico.
³⁴ E disse-lhe Pedro: Eneias, Jesus Cristo te dá saúde; levanta-te e faze a tua cama. E logo se levantou.
³⁵ E viram-no todos os que habitavam em Lida e Sarona, os quais se converteram ao Senhor.
³⁶ E havia em Jope uma discípula chamada Tabita, que traduzido se diz Dorcas. Esta estava cheia de boas obras e esmolas que fazia.
³⁷ E aconteceu naqueles dias que, enfermando ela, morreu; e, tendo-a lavado, a depositaram num quarto alto.
³⁸ E, como Lida era perto de Jope, ouvindo os discípulos que Pedro estava ali, lhe mandaram dois homens, rogando-lhe que não se demorasse em vir ter com eles.
³⁹ E, levantando-se Pedro, foi com eles; e quando chegou o levaram ao quarto alto, e todas as viúvas o rodearam, chorando e mostrando as túnicas e roupas que Dorcas fizera quando estava com elas.
⁴⁰ Mas Pedro, fazendo sair a todos, pôs-se de joelhos e orou: e, voltando-se para o corpo, disse: Tabita, levanta-te. E ela abriu os olhos, e, vendo a Pedro, assentou-se.
⁴¹ E ele, dando-lhe a mão, a levantou e, chamando os santos e as viúvas, apresentou-lha viva.
⁴² E foi isto notório por toda a Jope, e muitos creram no Senhor.
⁴³ E ficou muitos dias em Jope, com um certo Simão curtidor. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Para qual cidade Saulo estava indo quando viu a grande luz?",
                        opcoes: [
                            { numero: 1, texto: "Roma", correta: false },
                            { numero: 2, texto: "Damasco", correta: true },
                            { numero: 3, texto: "Antioquia", correta: false },
                            { numero: 4, texto: "Éfeso", correta: false }
                        ],
                        explicacao: "Atos 9:3 - E, seguindo ele caminho, aconteceu que, chegando perto de Damasco...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem Deus enviou para orar por Saulo para que ele recuperasse a vista?",
                        opcoes: [
                            { numero: 1, texto: "Ananias", correta: true },
                            { numero: 2, texto: "Pedro", correta: false },
                            { numero: 3, texto: "Barnabé", correta: false },
                            { numero: 4, texto: "Tiago", correta: false }
                        ],
                        explicacao: "Atos 9:10 - E havia em Damasco um certo discípulo chamado Ananias.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como Saulo escapou de Damasco quando os judeus queriam matá-lo?",
                        opcoes: [
                            { numero: 1, texto: "Disfarçado de soldado", correta: false },
                            { numero: 2, texto: "Pelo telhado das casas", correta: false },
                            { numero: 3, texto: "Descido por um cesto pelo muro", correta: true },
                            { numero: 4, texto: "Escondido em um barco", correta: false }
                        ],
                        explicacao: "Atos 9:25 - ...tomando-o de noite os discípulos, o desceram pelo muro, dentro de um cesto.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        10: {
            titulo: "Pedro e Cornélio",
            texto: `  ¹ E havia em Cesareia um homem por nome Cornélio, centurião da coorte chamada italiana,
² Piedoso e temente a Deus, com toda a sua casa, o qual fazia muitas esmolas ao povo, e de contínuo orava a Deus.
³ Este, quase à hora nona do dia, viu claramente numa visão um anjo de Deus, que se dirigia para ele e dizia-lhe: Cornélio.
⁴ O qual, fixando os olhos nele, e muito atemorizado, disse: Que é, Senhor? E disse-lhe: As tuas orações e as tuas esmolas têm subido para memória diante de Deus;
⁵ Agora, pois, envia homens a Jope, e manda chamar a Simão, que tem por sobrenome Pedro.
⁶ Este está hospedado com um certo Simão curtidor, que tem a sua casa junto do mar. Ele te dirá o que deves fazer.
⁷ E, retirando-se o anjo que falava com Cornélio, chamou dois dos seus criados, e a um piedoso soldado dos que estavam ao seu serviço.
⁸ E, havendo-lhes contado tudo, os enviou a Jope.
⁹ E no dia seguinte, indo eles seu caminho, e estando já perto da cidade, subiu Pedro ao terraço para orar, quase à hora sexta.
¹⁰ E tendo fome, quis comer; e, enquanto lho preparavam, sobreveio-lhe um arrebatamento de sentidos,
¹¹ E viu o céu aberto, e que descia a ele um vaso, como se fosse um grande lençol atado pelas quatro pontas, e vindo para a terra.
¹² No qual havia de todos os animais quadrúpedes e feras e répteis da terra, e aves do céu.
¹³ E foi-lhe dirigida uma voz: Levanta-te, Pedro, mata e come.
¹⁴ Mas Pedro disse: De modo nenhum, Senhor, porque nunca comi coisa alguma comum e imunda.
¹⁵ E segunda vez lhe disse a voz: Não faças tu comum ao que Deus purificou.
¹⁶ E aconteceu isto por três vezes; e o vaso tornou a recolher-se ao céu.
¹⁷ E estando Pedro duvidando entre si acerca do que seria aquela visão que tinha visto, eis que os homens que foram enviados por Cornélio pararam à porta, perguntando pela casa de Simão.
¹⁸ E, chamando, perguntaram se Simão, que tinha por sobrenome Pedro, morava ali.
¹⁹ E, pensando Pedro naquela visão, disse-lhe o Espírito: Eis que três homens te buscam.
²⁰ Levanta-te pois, desce, e vai com eles, não duvidando; porque eu os enviei.
²¹ E, descendo Pedro para junto dos homens que lhe foram enviados por Cornélio, disse: Eis que sou eu a quem procurais; qual é a causa por que estais aqui?
²² E eles disseram: Cornélio, o centurião, homem justo e temente a Deus, e que tem bom testemunho de toda a nação dos judeus, foi avisado por um santo anjo para que te chamasse a sua casa, e ouvisse as tuas palavras.
²³ Então, chamando-os para dentro, os recebeu em casa. E no dia seguinte foi Pedro com eles, e foram com ele alguns irmãos de Jope.
²⁴ E no dia imediato chegaram a Cesareia. E Cornélio os estava esperando, tendo já convidado os seus parentes e amigos mais íntimos.
²⁵ E aconteceu que, entrando Pedro, saiu Cornélio a recebê-lo, e, prostrando-se a seus pés o adorou.
²⁶ Mas Pedro o levantou, dizendo: Levanta-te, que eu também sou homem.
²⁷ E, falando com ele, entrou, e achou muitos que ali se haviam ajuntado.
²⁸ E disse-lhes: Vós bem sabeis que não é lícito a um homem judeu ajuntar-se ou chegar-se a estrangeiros; mas Deus mostrou-me que a nenhum homem chame comum ou imundo.
²⁹ Por isso, sendo chamado, vim sem contradizer. Pergunto, pois, por que razão mandastes chamar-me?
³⁰ E disse Cornélio: Há quatro dias estava eu em jejum até esta hora, orando em minha casa à hora nona.
³¹ E eis que diante de mim se apresentou um homem com vestes resplandecentes, e disse: Cornélio, a tua oração foi ouvida, e as tuas esmolas estão em memória diante de Deus.
³² Envia, pois, a Jope, e manda chamar Simão, o que tem por sobrenome Pedro; este está hospedado em casa de Simão o curtidor, junto do mar, e ele, vindo, te falará.
³³ E logo mandei chamar-te, e bem fizeste em vir. Agora, pois, estamos todos presentes diante de Deus, para ouvir tudo quanto por Deus te é mandado.
³⁴ E, abrindo Pedro a boca, disse: Reconheço por verdade que Deus não faz acepção de pessoas;
³⁵ Mas que lhe é agradável aquele que, em qualquer nação, o teme e faz o que é justo.
³⁶ A palavra que ele enviou aos filhos de Israel, anunciando a paz por Jesus Cristo (este é o Senhor de todos);
³⁷ Esta palavra, vós bem sabeis, veio por toda a Judeia, começando pela Galileia, depois do batismo que João pregou;
³⁸ Como Deus ungiu a Jesus de Nazaré com o Espírito Santo e com poder; o qual andou fazendo bem, e curando a todos os oprimidos do diabo, porque Deus era com ele.
³⁹ E nós somos testemunhas de todas as coisas que fez, tanto na terra da Judeia como em Jerusalém; ao qual mataram, pendurando-o num madeiro.
⁴⁰ A este ressuscitou Deus ao terceiro dia, e fez que se manifestasse,
⁴¹ Não a todo o povo, mas às testemunhas que Deus antes ordenara; a nós, que comemos e bebemos juntamente com ele, depois que ressuscitou dentre os mortos.
⁴² E nos mandou pregar ao povo, e testificar que ele é o que por Deus foi constituído juiz dos vivos e dos mortos.
⁴³ A este dão testemunho todos os profetas, de que todos os que nele creem receberão o perdão dos pecados pelo seu nome.
⁴⁴ E, dizendo Pedro ainda estas palavras, caiu o Espírito Santo sobre todos os que ouviam a palavra.
⁴⁵ E os fiéis que eram da circuncisão, todos quantos tinham vindo com Pedro, maravilharam-se de que o dom do Espírito Santo se derramasse também sobre os gentios.
⁴⁶ Porque os ouviam falar línguas, e magnificar a Deus.
⁴⁷ Respondeu, então, Pedro: Pode alguém porventura recusar a água, para que não sejam batizados estes, que também receberam como nós o Espírito Santo?
⁴⁸ E mandou que fossem batizados em nome do Senhor. Então rogaram-lhe que ficasse com eles por alguns dias. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era a profissão de Cornélio?",
                        opcoes: [
                            { numero: 1, texto: "Pescador", correta: false },
                            { numero: 2, texto: "Centurião romano", correta: true },
                            { numero: 3, texto: "Carpinteiro", correta: false },
                            { numero: 4, texto: "Tendeiro", correta: false }
                        ],
                        explicacao: "Atos 10:1 - ...um homem por nome Cornélio, centurião da coorte chamada Italiana.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Pedro viu descer do céu em sua visão em Jope?",
                        opcoes: [
                            { numero: 1, texto: "Um grande lençol com animais", correta: true },
                            { numero: 2, texto: "Uma espada de fogo", correta: false },
                            { numero: 3, texto: "Sete trombetas", correta: false },
                            { numero: 4, texto: "Um anjo com um livro", correta: false }
                        ],
                        explicacao: "Atos 10:11 - ...e que descia um objeto, como um grande lençol atado pelas quatro pontas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu enquanto Pedro ainda falava na casa de Cornélio?",
                        opcoes: [
                            { numero: 1, texto: "Caiu o Espírito Santo sobre todos os que ouviam", correta: true },
                            { numero: 2, texto: "Houve um terremoto", correta: false },
                            { numero: 3, texto: "Os soldados prenderam Pedro", correta: false },
                            { numero: 4, texto: "Começou a chover", correta: false }
                        ],
                        explicacao: "Atos 10:44 - E, dizendo Pedro ainda estas palavras, caiu o Espírito Santo sobre todos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        11: {
            titulo: "A Igreja em Antioquia",
            texto: `1 E ouviram os apóstolos, e os irmãos que estavam na Judeia, que também os gentios tinham recebido a palavra de Deus.
2 E, subindo Pedro a Jerusalém, disputavam com ele os que eram da circuncisão,
3 Dizendo: Entraste em casa de homens incircuncisos, e comeste com eles.
4 Mas Pedro começou a fazer-lhes uma exposição por ordem, dizendo:
5 Estando eu orando na cidade de Jope, tive, num arrebatamento dos sentidos, uma visão; via um vaso, como um grande lençol atado pelas quatro pontas, que descia do céu e vinha até junto de mim.
6 E, pondo nele os olhos, considerei, e vi animais da terra, quadrúpedes, e feras, e répteis e aves do céu.
7 E ouvi uma voz que me dizia: Levanta-te, Pedro; mata e come.
8 Mas eu disse: De maneira nenhuma, Senhor; pois, nunca em minha boca entrou coisa alguma comum ou imunda.
9 Mas a voz respondeu-me do céu segunda vez: Não chames tu comum ao que Deus purificou.
10 E sucedeu isto por três vezes; e tudo tornou a recolher-se ao céu.
11 E eis que, na mesma hora, pararam, junto da casa em que eu estava, três homens que me foram enviados de Cesareia.
12 E disse-me o Espírito que fosse com eles, nada duvidando; e também estes seis irmãos foram comigo, e entramos em casa daquele homem;
13 E contou-nos como vira em pé um anjo em sua casa, e lhe dissera: Envia homens a Jope, e manda chamar a Simão, que tem por sobrenome Pedro,
14 O qual te dirá palavras com que te salves, tu e toda a tua casa.
15 E, quando comecei a falar, caiu sobre eles o Espírito Santo, como também sobre nós ao princípio.
16 E lembrei-me do dito do Senhor, quando disse: João certamente batizou com água; mas vós sereis batizados com o Espírito Santo.
17 Portanto, se Deus lhes deu o mesmo dom que a nós, quando havemos crido no Senhor Jesus Cristo, quem era então eu, para que pudesse resistir a Deus?
18 E, ouvindo estas coisas, apaziguaram-se, e glorificaram a Deus, dizendo: Na verdade até aos gentios deu Deus o arrependimento para a vida.
19 E os que foram dispersos pela perseguição que sucedeu por causa de Estêvão caminharam até à Fenícia, Chipre e Antioquia, não anunciando a ninguém a palavra, senão somente aos judeus.
20 E havia entre eles alguns homens cíprios e cirenenses, os quais entrando em Antioquia falaram aos gregos, anunciando o Senhor Jesus.
21 E a mão do Senhor era com eles; e grande número creu e se converteu ao Senhor.
22 E chegou a fama destas coisas aos ouvidos da igreja que estava em Jerusalém; e enviaram Barnabé a Antioquia.
23 O qual, quando chegou, e viu a graça de Deus, se alegrou, e exortou a todos a que permanecessem no Senhor, com propósito de coração;
24 Porque era homem de bem e cheio do Espírito Santo e de fé. E muita gente se uniu ao Senhor.
25 E partiu Barnabé para Tarso, a buscar Saulo; e, achando-o, o conduziu para Antioquia.
26 E sucedeu que todo um ano se reuniram naquela igreja, e ensinaram muita gente; e em Antioquia foram os discípulos, pela primeira vez, chamados cristãos.
27 E naqueles dias desceram profetas de Jerusalém para Antioquia.
28 E, levantando-se um deles, por nome Ágabo, dava a entender pelo Espírito, que haveria uma grande fome em todo o mundo, e isso aconteceu no tempo de Cláudio César.
29 E os discípulos determinaram mandar, cada um conforme o que pudesse, socorro aos irmãos que habitavam na Judeia.
30 O que eles com efeito fizeram, enviando-o aos anciãos por mão de Barnabé e de Saulo.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Em qual cidade os discípulos foram chamados 'cristãos' pela primeira vez?",
                        opcoes: [
                            { numero: 1, texto: "Jerusalém", correta: false },
                            { numero: 2, texto: "Roma", correta: false },
                            { numero: 3, texto: "Antioquia", correta: true },
                            { numero: 4, texto: "Éfeso", correta: false }
                        ],
                        explicacao: "Atos 11:26 - Em Antioquia foram os discípulos, pela primeira vez, chamados cristãos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem os apóstolos enviaram a Antioquia para ver o que estava acontecendo?",
                        opcoes: [
                            { numero: 1, texto: "Barnabé", correta: true },
                            { numero: 2, texto: "Pedro", correta: false },
                            { numero: 3, texto: "João", correta: false },
                            { numero: 4, texto: "Mateus", correta: false }
                        ],
                        explicacao: "Atos 11:22 - ...e enviaram Barnabé a Antioquia.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual profeta previu uma grande fome em todo o mundo?",
                        opcoes: [
                            { numero: 1, texto: "Ágabo", correta: true },
                            { numero: 2, texto: "Silas", correta: false },
                            { numero: 3, texto: "Judas", correta: false },
                            { numero: 4, texto: "Lúcio", correta: false }
                        ],
                        explicacao: "Atos 11:28 - E, levantando-se um deles, por nome Ágabo, dava a entender pelo Espírito...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        12: {
            titulo: "A Morte de Tiago e a Prisão de Pedro",
            texto: ` 1 E por aquele mesmo tempo o rei Herodes estendeu as mãos sobre alguns da igreja, para os maltratar;
2 E matou à espada Tiago, irmão de João.
3 E, vendo que isso agradara aos judeus, continuou, mandando prender também a Pedro. E eram os dias dos ázimos.
4 E, havendo-o prendido, o encerrou na prisão, entregando-o a quatro quaternos de soldados, para que o guardassem, querendo apresentá-lo ao povo depois da páscoa.
5 Pedro, pois, era guardado na prisão; mas a igreja fazia contínua oração por ele a Deus.
6 E quando Herodes estava para o fazer comparecer, nessa mesma noite estava Pedro dormindo entre dois soldados, ligado com duas cadeias, e os guardas diante da porta guardavam a prisão.
7 E eis que sobreveio o anjo do Senhor, e resplandeceu uma luz na prisão; e, tocando a Pedro no lado, o despertou, dizendo: Levanta-te depressa. E caíram-lhe das mãos as cadeias.
8 E disse-lhe o anjo: Cinge-te, e ata as tuas sandálias. E ele assim o fez. Disse-lhe mais: Lança às costas a tua capa, e segue-me.
9 E, saindo, o seguia. E não sabia que era real o que estava sendo feito pelo anjo, mas cuidava que via alguma visão.
10 E, quando passaram a primeira e segunda guardas, chegaram à porta de ferro, que dá para a cidade, a qual se lhes abriu por si mesma; e, tendo saído, percorreram uma rua, e logo o anjo se apartou dele.
11 E Pedro, tornando a si, disse: Agora sei verdadeiramente que o Senhor enviou o seu anjo, e me livrou da mão de Herodes, e de tudo o que o povo dos judeus esperava.
12 E, considerando ele nisto, foi à casa de Maria, mãe de João, que tinha por sobrenome Marcos, onde muitos estavam reunidos e oravam.
13 E, batendo Pedro à porta do pátio, uma menina chamada Rode saiu a escutar;
14 E, conhecendo a voz de Pedro, de gozo não abriu a porta, mas, correndo para dentro, anunciou que Pedro estava à porta.
15 E disseram-lhe: Estás fora de ti. Mas ela afirmava que assim era. E diziam: É o seu anjo.
16 Mas Pedro perseverava em bater e, quando abriram, viram-no, e se espantaram.
17 E acenando-lhes ele com a mão para que se calassem, contou-lhes como o Senhor o tirara da prisão, e disse: Anunciai isto a Tiago e aos irmãos. E, saindo, partiu para outro lugar.
18 E, sendo já dia, houve não pouco alvoroço entre os soldados sobre o que seria feito de Pedro.
19 E, quando Herodes o procurou e o não achou, feita inquirição aos guardas, mandou-os justiçar. E, partindo da Judeia para Cesareia, ficou ali.
20 E Herodes estava irritado com os de Tiro e de Sidom; mas estes, vindo de comum acordo ter com ele, e obtendo a amizade de Blasto, que era o camarista do rei, pediam paz; porquanto o seu país se abastecia do país do rei.
21 E num dia designado, vestindo Herodes as vestes reais, estava assentado no tribunal e lhes fez um discurso.
22 E o povo exclamava: Voz de Deus, e não de homem.
23 E no mesmo instante feriu-o o anjo do Senhor, porque não deu glória a Deus e, comido de bichos, expirou.
24 E a palavra de Deus crescia e se multiplicava.
25 E Barnabé e Saulo, havendo terminado aquele serviço, voltaram de Jerusalém, levando também consigo a João, que tinha por sobrenome Marcos.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual apóstolo o rei Herodes mandou matar à espada?",
                        opcoes: [
                            { numero: 1, texto: "João", correta: false },
                            { numero: 2, texto: "Tiago, irmão de João", correta: true },
                            { numero: 3, texto: "André", correta: false },
                            { numero: 4, texto: "Filipe", correta: false }
                        ],
                        explicacao: "Atos 12:2 - E matou à espada Tiago, irmão de João.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual era o nome da serva que ouviu a voz de Pedro à porta?",
                        opcoes: [
                            { numero: 1, texto: "Rode", correta: true },
                            { numero: 2, texto: "Lídia", correta: false },
                            { numero: 3, texto: "Priscila", correta: false },
                            { numero: 4, texto: "Tabita", correta: false }
                        ],
                        explicacao: "Atos 12:13 - E, batendo Pedro à porta do pátio, saiu uma menina chamada Rode.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como o rei Herodes morreu em Cesareia?",
                        opcoes: [
                            { numero: 1, texto: "Em uma batalha", correta: false },
                            { numero: 2, texto: "De velhice", correta: false },
                            { numero: 3, texto: "Foi comido de bichos", correta: true },
                            { numero: 4, texto: "Afogado no mar", correta: false }
                        ],
                        explicacao: "Atos 12:23 - ...e, comido de bichos, expirou.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        13: {
            titulo: "A Primeira Viagem Missionária de Paulo",
            texto: ` 1 E na igreja que estava em Antioquia havia alguns profetas e doutores, a saber: Barnabé e Simeão chamado Níger, e Lúcio, cireneu, e Manaém, que fora criado com Herodes o tetrarca, e Saulo.
2 E, servindo eles ao Senhor, e jejuando, disse o Espírito Santo: Apartai-me a Barnabé e a Saulo para a obra a que os tenho chamado.
3 Então, jejuando e orando, e pondo sobre eles as mãos, os despediram.
4 E assim estes, enviados pelo Espírito Santo, desceram a Selêucia e dali navegaram para Chipre.
5 E, chegados a Salamina, anunciavam a palavra de Deus nas sinagogas dos judeus; e tinham também a João como cooperador.
6 E, havendo atravessado a ilha até Pafos, acharam um certo judeu mágico, falso profeta, chamado Barjesus,
7 O qual estava com o procônsul Sérgio Paulo, homem prudente. Este, chamando a si Barnabé e Saulo, procurava muito ouvir a palavra de Deus.
8 Mas resistia-lhes Elimas, o encantador (porque assim se interpreta o seu nome), procurando apartar da fé o procônsul.
9 Todavia Saulo, que também se chama Paulo, cheio do Espírito Santo, e fixando os olhos nele,
10 Disse: Ó filho do diabo, cheio de todo o engano e de toda a malícia, inimigo de toda a justiça, não cessarás de perturbar os retos caminhos do Senhor?
11 Eis aí, pois, agora contra ti a mão do Senhor, e ficarás cego, sem ver o sol por algum tempo. E no mesmo instante a escuridão e as trevas caíram sobre ele e, andando à roda, buscava a quem o guiasse pela mão.
12 Então o procônsul, vendo o que havia acontecido, creu, maravilhado da doutrina do Senhor.
13 E, partindo de Pafos, Paulo e os que estavam com ele chegaram a Perge, da Panfília. Mas João, apartando-se deles, voltou para Jerusalém.
14 E eles, saindo de Perge, chegaram a Antioquia, da Pisídia, e, entrando na sinagoga, num dia de sábado, assentaram-se;
15 E, depois da lição da lei e dos profetas, lhes mandaram dizer os principais da sinagoga: Homens irmãos, se tendes alguma palavra de consolação para o povo, falai.
16 E, levantando-se Paulo, e pedindo silêncio com a mão, disse: Homens israelitas, e os que temeis a Deus, ouvi:
17 O Deus deste povo de Israel escolheu a nossos pais, e exaltou o povo, sendo eles estrangeiros na terra do Egito; e com braço poderoso os tirou dela;
18 E suportou os seus costumes no deserto por espaço de quase quarenta anos.
19 E, destruindo a sete nações na terra de Canaã, deu-lhes por sorte a terra deles.
20 E, depois disto, por quase quatrocentos e cinquenta anos, lhes deu juízes, até ao profeta Samuel.
21 E depois pediram um rei, e Deus lhes deu por quarenta anos, a Saul filho de Quis, homem da tribo de Benjamim.
22 E, quando este foi retirado, levantou-lhes como rei a Davi, ao qual também deu testemunho, e disse: Achei a Davi, filho de Jessé, homem conforme o meu coração, que executará toda a minha vontade.
23 Da descendência deste, conforme a promessa, levantou Deus a Jesus para Salvador de Israel;
24 Tendo primeiramente João, antes da vinda dele, pregado a todo o povo de Israel o batismo de arrependimento.
25 Mas João, quando completava a carreira, disse: Quem pensais vós que eu sou? Eu não sou o Cristo; mas eis que após mim vem aquele a quem não sou digno de desatar as sandálias dos pés.
26 Homens irmãos, filhos da geração de Abraão, e os que dentre vós temem a Deus, a vós vos é enviada a palavra desta salvação.
27 Por não terem conhecido a este, os que habitavam em Jerusalém, e os seus príncipes, condenaram-no, cumprindo assim as vozes dos profetas que se leem todos os sábados.
28 E, embora não achassem alguma causa de morte, pediram a Pilatos que ele fosse morto.
29 E, havendo eles cumprido todas as coisas que dele estavam escritas, tirando-o do madeiro, o puseram na sepultura;
30 Mas Deus o ressuscitou dentre os mortos.
31 E ele por muitos dias foi visto pelos que subiram com ele da Galileia a Jerusalém, e são suas testemunhas para com o povo.
32 E nós vos anunciamos que a promessa que foi feita aos pais, Deus a cumpriu a nós, seus filhos, ressuscitando a Jesus;
33 Como também está escrito no salmo segundo: Meu Filho és tu, hoje te gerei.
34 E que o ressuscitaria dentre os mortos, para nunca mais tornar à corrupção, disse-o assim: As santas e fiéis bênçãos de Davi vos darei.
35 Por isso também em outro salmo diz: Não permitirás que o teu santo veja corrupção.
36 Porque, na verdade, tendo Davi no seu tempo servido conforme a vontade de Deus, dormiu, foi posto junto de seus pais e viu a corrupção.
37 Mas aquele a quem Deus ressuscitou nenhuma corrupção viu.
38 Seja-vos, pois, notório, homens irmãos, que por este se vos anuncia a remissão dos pecados.
39 E de tudo o que, pela lei de Moisés, não pudestes ser justificados, por ele é justificado todo aquele que crê.
40 Vede, pois, que não venha sobre vós o que está dito nos profetas:
41 Vede, ó desprezadores, e espantai-vos e desaparecei; porque opero uma obra em vossos dias, obra tal que não crereis, se alguém vo-la contar.
42 E, saídos os judeus da sinagoga, os gentios rogaram que no sábado seguinte lhes fossem ditas as mesmas coisas.
43 E, despedida a sinagoga, muitos dos judeus e dos prosélitos religiosos seguiram Paulo e Barnabé; os quais, falando-lhes, os exortavam a que permanecessem na graça de Deus.
44 E no sábado seguinte ajuntou-se quase toda a cidade para ouvir a palavra de Deus.
45 Então os judeus, vendo a multidão, encheram-se de inveja e contradiziam o que Paulo falava, contradizendo e blasfemando.
46 Mas Paulo e Barnabé, usando de ousadia, disseram: Era mister que a vós se vos pregasse primeiro a palavra de Deus; mas, visto que a rejeitais, e não vos julgais dignos da vida eterna, eis que nos voltamos para os gentios;
47 Porque o Senhor assim no-lo mandou: Eu te pus para luz dos gentios, a fim de que sejas para salvação até os confins da terra.
48 E os gentios, ouvindo isto, alegraram-se, e glorificavam a palavra do Senhor; e creram todos quantos estavam ordenados para a vida eterna.
49 E a palavra do Senhor se divulgava por toda aquela província.
50 Mas os judeus incitaram algumas mulheres religiosas e honestas, e os principais da cidade, e levantaram perseguição contra Paulo e Barnabé, e os lançaram fora dos seus termos.
51 Sacudindo, porém, contra eles o pó dos seus pés, partiram para Icônio.
52 E os discípulos estavam cheios de alegria e do Espírito Santo.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem o Espírito Santo separou para a obra em Antioquia?",
                        opcoes: [
                            { numero: 1, texto: "Pedro e João", correta: false },
                            { numero: 2, texto: "Barnabé e Saulo", correta: true },
                            { numero: 3, texto: "Silas e Timóteo", correta: false },
                            { numero: 4, texto: "Marcos e Lucas", correta: false }
                        ],
                        explicacao: "Atos 13:2 - Disse o Espírito Santo: Apartai-me a Barnabé e a Saulo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu com Elimas, o mago, que se opunha a Paulo?",
                        opcoes: [
                            { numero: 1, texto: "Ficou mudo", correta: false },
                            { numero: 2, texto: "Caiu morto", correta: false },
                            { numero: 3, texto: "Ficou cego por algum tempo", correta: true },
                            { numero: 4, texto: "Tornou-se apóstolo", correta: false }
                        ],
                        explicacao: "Atos 13:11 - ...serás cego, e não verás o sol por algum tempo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem deixou Paulo e Barnabé e voltou para Jerusalém?",
                        opcoes: [
                            { numero: 1, texto: "João Marcos", correta: true },
                            { numero: 2, texto: "Silas", correta: false },
                            { numero: 3, texto: "Lúcio", correta: false },
                            { numero: 4, texto: "Timóteo", correta: false }
                        ],
                        explicacao: "Atos 13:13 - ...apartando-se deles João (Marcos), voltou para Jerusalém.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        14: {
            titulo: "A Obra em Icônio, Listra e Derbe",
            texto: ` ¹ E aconteceu que em Icônio entraram juntos na sinagoga dos judeus, e falaram de tal modo que creu uma grande multidão, não só de judeus mas de gregos.
² Mas os judeus incrédulos incitaram e irritaram, contra os irmãos, os ânimos dos gentios.
³ Detiveram-se, pois, muito tempo, falando ousadamente acerca do Senhor, o qual dava testemunho à palavra da sua graça, permitindo que por suas mãos se fizessem sinais e prodígios.
⁴ E dividiu-se a multidão da cidade; e uns eram pelos judeus, e outros pelos apóstolos.
⁵ E havendo um motim, tanto dos judeus como dos gentios, com os seus principais, para os insultarem e apedrejarem,
⁶ Sabendo-o eles, fugiram para Listra e Derbe, cidades de Licaônia, e para a província circunvizinha;
⁷ E ali pregavam o evangelho.
⁸ E estava assentado em Listra certo homem leso dos pés, coxo desde o ventre de sua mãe, o qual nunca tinha andado.
⁹ Este ouviu falar Paulo, que, fixando nele os olhos, e vendo que tinha fé para ser curado,
¹⁰ Disse em voz alta: Levanta-te direito sobre teus pés. E ele saltou e andou.
¹¹ E as multidões, vendo o que Paulo fizera, levantaram a sua voz, dizendo em língua licaônica: Fizeram-se os deuses semelhantes aos homens, e desceram até nós.
¹² E chamavam Júpiter a Barnabé, e Mercúrio a Paulo; porque este era o que falava.
¹³ E o sacerdote de Júpiter, cujo templo estava em frente da cidade, trazendo para a entrada da porta touros e grinaldas, queria com a multidão sacrificar-lhes.
¹⁴ Ouvindo, porém, isto os apóstolos Barnabé e Paulo, rasgaram as suas vestes, e saltaram para o meio da multidão, clamando,
¹⁵ E dizendo: Senhores, por que fazeis essas coisas? Nós também somos homens como vós, sujeitos às mesmas paixões, e vos anunciamos que vos convertais dessas vaidades ao Deus vivo, que fez o céu, e a terra, o mar, e tudo quanto há neles;
¹⁶ O qual nos tempos passados deixou andar todas as nações em seus próprios caminhos.
¹⁷ E contudo, não se deixou a si mesmo sem testemunho, beneficiando-vos lá do céu, dando-nos chuvas e tempos frutíferos, enchendo de mantimento e de alegria os nossos corações.
¹⁸ E, dizendo isto, com dificuldade impediram que as multidões lhes sacrificassem.
¹⁹ Sobrevieram, porém, uns judeus de Antioquia e de Icônio que, tendo convencido a multidão, apedrejaram a Paulo e o arrastaram para fora da cidade, cuidando que estava morto.
²⁰ Mas, rodeando-o os discípulos, levantou-se, e entrou na cidade, e no dia seguinte saiu com Barnabé para Derbe.
²¹ E, tendo anunciado o evangelho naquela cidade e feito muitos discípulos, voltaram para Listra, e Icônio e Antioquia,
²² Confirmando os ânimos dos discípulos, exortando-os a permanecer na fé, pois que por muitas tribulações nos importa entrar no reino de Deus.
²³ E, havendo-lhes, por comum consentimento, eleito anciãos em cada igreja, orando com jejuns, os encomendaram ao Senhor em quem haviam crido.
²⁴ Passando depois por Pisídia, dirigiram-se a Panfília.
²⁵ E, tendo anunciado a palavra em Perge, desceram a Atália.
²⁶ E dali navegaram para Antioquia, de onde tinham sido encomendados à graça de Deus para a obra que já haviam cumprido.
²⁷ E, quando chegaram e reuniram a igreja, relataram quão grandes coisas Deus fizera por eles, e como abrira aos gentios a porta da fé.
²⁸ E ficaram ali não pouco tempo com os discípulos. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o povo de Listra chamou Barnabé e Paulo após a cura de um coxo?",
                        opcoes: [
                            { numero: 1, texto: "Anjos do Senhor", correta: false },
                            { numero: 2, texto: "Reis de Israel", correta: false },
                            { numero: 3, texto: "Júpiter e Mercúrio (deuses)", correta: true },
                            { numero: 4, texto: "Mágicos romanos", correta: false }
                        ],
                        explicacao: "Atos 14:12 - E chamavam a Barnabé Júpiter, e a Paulo, Mercúrio.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu com Paulo em Listra por causa dos judeus de Antioquia?",
                        opcoes: [
                            { numero: 1, texto: "Foi apedrejado e arrastado para fora da cidade", correta: true },
                            { numero: 2, texto: "Recebeu uma coroa de flores", correta: false },
                            { numero: 3, texto: "Foi eleito governador", correta: false },
                            { numero: 4, texto: "Fugiu em um cavalo", correta: false }
                        ],
                        explicacao: "Atos 14:19 - ...apedrejaram a Paulo e o arrastaram para fora da cidade.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Paulo e Barnabé constituíam em cada igreja antes de partir?",
                        opcoes: [
                            { numero: 1, texto: "Muros de proteção", correta: false },
                            { numero: 2, texto: "Anciãos (presbíteros)", correta: true },
                            { numero: 3, texto: "Escolas de latim", correta: false },
                            { numero: 4, texto: "Exércitos", correta: false }
                        ],
                        explicacao: "Atos 14:23 - E, havendo-lhes por comum consentimento eleito anciãos em cada igreja...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        
        15: {
            titulo: "O Concílio em Jerusalém",
            texto: `1 Então alguns que tinham descido da Judeia ensinavam assim os irmãos: Se não vos circuncidardes conforme o uso de Moisés, não podeis salvar-vos.
2 Tendo tido Paulo e Barnabé não pequena discussão e contenda contra eles, resolveu-se que Paulo e Barnabé, e alguns outros dentre eles, subissem a Jerusalém, aos apóstolos e aos anciãos, sobre aquela questão.
3 E eles, sendo acompanhados pela igreja, passavam pela Fenícia e por Samaria, contando a conversão dos gentios; e davam grande alegria a todos os irmãos.
4 E, quando chegaram a Jerusalém, foram recebidos pela igreja e pelos apóstolos e anciãos, e lhes anunciaram quão grandes coisas Deus tinha feito com eles.
5 Alguns, porém, da seita dos fariseus, que tinham crido, se levantaram, dizendo que era mister circuncidá-los e mandar-lhes que guardassem a lei de Moisés.
6 Congregaram-se, pois, os apóstolos e os anciãos para considerar este assunto.
7 E, havendo grande contenda, levantou-se Pedro e disse-lhes: Homens irmãos, bem sabeis que já há muito tempo Deus me elegeu dentre nós, para que os gentios ouvissem da minha boca a palavra do evangelho, e cressem.
8 E Deus, que conhece os corações, lhes deu testemunho, dando-lhes o Espírito Santo, assim como também a nós;
9 E não fez diferença alguma entre eles e nós, purificando os seus corações pela fé.
10 Agora, pois, por que tentais a Deus, pondo sobre a cerviz dos discípulos um jugo que nem nossos pais nem nós pudemos suportar?
11 Mas cremos que seremos salvos pela graça do Senhor Jesus Cristo, como eles também.
12 Então toda a multidão se calou e escutava a Barnabé e a Paulo, que contavam quão grandes sinais e prodígios Deus havia feito por meio deles entre os gentios.
13 E, havendo-se eles calado, respondeu Tiago, dizendo: Homens irmãos, ouvi-me:
14 Simão relatou como primeiramente Deus visitou os gentios, para tomar deles um povo para o seu nome.
15 E com isto concordam as palavras dos profetas; como está escrito:
16 Depois disto voltarei, e reedificarei o tabernáculo de Davi, que está caído, levantá-lo-ei das suas ruínas, e tornarei a edificá-lo.
17 Para que o restante dos homens busque ao Senhor, e todos os gentios, sobre os quais o meu nome é invocado, diz o Senhor, que faz todas estas coisas,
18 Conhecidas são a Deus, desde o princípio do mundo, todas as suas obras.
19 Por isso julgo que não se deve perturbar aqueles, dentre os gentios, que se convertem a Deus.
20 Mas escrever-lhes que se abstenham das contaminações dos ídolos, da fornicação, do que é sufocado e do sangue.
21 Porque Moisés, desde os tempos antigos, tem em cada cidade quem o pregue, e cada sábado é lido nas sinagogas.
22 Então pareceu bem aos apóstolos e aos anciãos, com toda a igreja, eleger homens dentre eles e enviá-los com Paulo e Barnabé a Antioquia, a saber: Judas, chamado Barsabás, e Silas, homens distintos entre os irmãos.
23 E por intermédio deles escreveram o seguinte: Os apóstolos, e os anciãos e os irmãos, aos irmãos dentre os gentios que estão em Antioquia, e Síria e Cilícia, saúde.
24 Porquanto ouvimos que alguns que saíram dentre nós vos perturbaram com palavras, e transtornaram as vossas almas, dizendo que deveis circuncidar-vos e guardar a lei, não lhes tendo nós dado mandamento,
25 Pareceu-nos bem, reunidos concordemente, eleger alguns homens e enviá-los a vós com os nossos amados Barnabé e Paulo,
26 Homens que já expuseram as suas vidas pelo nome de nosso Senhor Jesus Cristo.
27 Enviamos, portanto, Judas e Silas, os quais por palavra vos anunciarão também as mesmas coisas.
28 Na verdade pareceu bem ao Espírito Santo e a nós, não vos impor mais encargo algum, senão estas coisas necessárias:
29 Que vos abstenhais das coisas sacrificadas aos ídolos, e do sangue, e da carne sufocada, e da fornicação, das quais coisas bem fazeis se vos guardardes. Bem vos vá.
30 Tendo eles então se despedido, partiram para Antioquia e, ajuntando a multidão, entregaram a carta.
31 E, quando a leram, alegraram-se pela exortação.
32 Depois Judas e Silas, que também eram profetas, exortaram e confirmaram os irmãos com muitas palavras.
33 E, detendo-se ali algum tempo, os irmãos os deixaram voltar em paz para os apóstolos;
34 Mas pareceu bem a Silas ficar ali.
35 E Paulo e Barnabé ficaram em Antioquia, ensinando e pregando, com muitos outros, a palavra do Senhor.
36 E alguns dias depois, disse Paulo a Barnabé: Tornemos a visitar nossos irmãos por todas as cidades em que já anunciamos a palavra do Senhor, para ver como estão.
37 E Barnabé aconselhava que tomassem consigo a João, chamado Marcos.
38 Mas a Paulo parecia razoável que não tomassem consigo aquele que desde a Panfília se tinha apartado deles e não os acompanhou naquela obra.
39 E tal contenda houve entre eles, que se apartaram um do outro. Barnabé, levando consigo a Marcos, navegou para Chipre.
40 E Paulo, tendo escolhido a Silas, partiu, encomendado pelos irmãos à graça de Deus.
41 E passou pela Síria e Cilícia, confirmando as igrejas.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual foi a decisão principal do Concílio de Jerusalém sobre os gentios?",
                        opcoes: [
                            { numero: 1, texto: "Que deveriam ser circuncidados", correta: false },
                            { numero: 2, texto: "Que não se lhes impusesse maior encargo além do que era necessário", correta: true },
                            { numero: 3, texto: "Que deveriam morar em Israel", correta: false },
                            { numero: 4, texto: "Que não poderiam ser batizados", correta: false }
                        ],
                        explicacao: "Atos 15:28 - Pareceu bem ao Espírito Santo e a nós não vos impor mais encargo algum.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem causou uma discussão entre Paulo e Barnabé, levando-os a se separarem?",
                        opcoes: [
                            { numero: 1, texto: "João Marcos", correta: true },
                            { numero: 2, texto: "Timóteo", correta: false },
                            { numero: 3, texto: "Silas", correta: false },
                            { numero: 4, texto: "Lucas", correta: false }
                        ],
                        explicacao: "Atos 15:37-39 - Barnabé queria levar João Marcos, mas Paulo não achava justo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem Paulo escolheu para acompanhá-lo em sua viagem após se separar de Barnabé?",
                        opcoes: [
                            { numero: 1, texto: "Mateus", correta: false },
                            { numero: 2, texto: "Pedro", correta: false },
                            { numero: 3, texto: "Silas", correta: true },
                            { numero: 4, texto: "Apolos", correta: false }
                        ],
                        explicacao: "Atos 15:40 - E Paulo, escolhendo a Silas, partiu encomendado pelos irmãos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        16: {
            titulo: "Lídia e o Carcereiro de Filipos",
            texto: `¹ E chegou a Derbe e Listra. E eis que estava ali um certo discípulo por nome Timóteo, filho de uma judia que era crente, mas de pai grego;
² Do qual davam bom testemunho os irmãos que estavam em Listra e em Icônio.
³ Paulo quis que este fosse com ele; e tomando-o, o circuncidou, por causa dos judeus que estavam naqueles lugares; porque todos sabiam que seu pai era grego.
⁴ E, quando iam passando pelas cidades, lhes entregavam, para serem observados, os decretos que haviam sido estabelecidos pelos apóstolos e anciãos em Jerusalém.
⁵ De sorte que as igrejas eram confirmadas na fé, e cada dia cresciam em número.
⁶ E, passando pela Frígia e pela província da Galácia, foram impedidos pelo Espírito Santo de anunciar a palavra na Ásia.
⁷ E, quando chegaram a Mísia, intentavam ir para Bitínia, mas o Espírito não lho permitiu.
⁸ E, tendo passado por Mísia, desceram a Trôade.
⁹ E Paulo teve de noite uma visão, em que se apresentou um homem da Macedônia, e lhe rogou, dizendo: Passa à Macedônia, e ajuda-nos.
¹⁰ E, logo depois desta visão, procuramos partir para a Macedônia, concluindo que o Senhor nos chamava para lhes anunciarmos o evangelho.
¹¹ E, navegando de Trôade, fomos correndo em caminho direito para a Samotrácia e, no dia seguinte, para Neápolis;
¹² E dali para Filipos, que é a primeira cidade desta parte da Macedônia, e é uma colônia; e estivemos alguns dias nesta cidade.
¹³ E no dia de sábado saímos fora das portas, para a beira do rio, onde se costumava fazer oração; e, assentando-nos, falamos às mulheres que ali se ajuntaram.
¹⁴ E uma certa mulher, chamada Lídia, vendedora de púrpura, da cidade de Tiatira, e que servia a Deus, nos ouvia, e o Senhor lhe abriu o coração para que estivesse atenta ao que Paulo dizia.
¹⁵ E, depois que foi batizada, ela e a sua casa, nos rogou, dizendo: Se haveis julgado que eu seja fiel ao Senhor, entrai em minha casa, e ficai ali. E nos constrangeu a isso.
¹⁶ E aconteceu que, indo nós à oração, nos saiu ao encontro uma jovem, que tinha espírito de adivinhação, a qual, adivinhando, dava grande lucro aos seus senhores.
¹⁷ Esta, seguindo a Paulo e a nós, clamava, dizendo: Estes homens, que nos anunciam o caminho da salvação, são servos do Deus Altíssimo.
¹⁸ E isto fez ela por muitos dias. Mas Paulo, perturbado, voltou-se e disse ao espírito: Em nome de Jesus Cristo, te mando que saias dela. E na mesma hora saiu.
¹⁹ E, vendo seus senhores que a esperança do seu lucro estava perdida, prenderam Paulo e Silas, e os levaram à praça, à presença dos magistrados.
²⁰ E, apresentando-os aos magistrados, disseram: Estes homens, sendo judeus, perturbaram a nossa cidade,
²¹ E nos expõem costumes que não nos é lícito receber nem praticar, visto que somos romanos.
²² E a multidão se levantou unida contra eles, e os magistrados, rasgando-lhes as vestes, mandaram açoitá-los com varas.
²³ E, havendo-lhes dado muitos açoites, os lançaram na prisão, mandando ao carcereiro que os guardasse com segurança.
²⁴ O qual, tendo recebido tal ordem, os lançou no cárcere interior, e lhes segurou os pés no tronco.
²⁵ E, perto da meia-noite, Paulo e Silas oravam e cantavam hinos a Deus, e os outros presos os escutavam.
²⁶ E de repente sobreveio um tão grande terremoto, que os alicerces do cárcere se moveram, e logo se abriram todas as portas, e foram soltas as prisões de todos.
²⁷ E, acordando o carcereiro, e vendo abertas as portas da prisão, tirou a espada, e quis matar-se, cuidando que os presos já tinham fugido.
²⁸ Mas Paulo clamou com grande voz, dizendo: Não te faças nenhum mal, que todos aqui estamos.
²⁹ E, pedindo luz, saltou dentro e, todo trêmulo, se prostrou ante Paulo e Silas.
³⁰ E, tirando-os para fora, disse: Senhores, que é necessário que eu faça para ser salvo?
³¹ E eles disseram: Crê no Senhor Jesus Cristo e serás salvo, tu e a tua casa.
³² E lhe pregavam a palavra do Senhor, e a todos os que estavam em sua casa.
³³ E, tomando-os ele consigo naquela mesma hora da noite, lavou-lhes os vergões; e logo foi batizado, ele e todos os seus.
³⁴ E, levando-os à sua casa, lhes pôs a mesa; e alegrou-se de que com toda a sua casa havia crido em Deus.
³⁵ E, sendo já dia, os magistrados mandaram quadrilheiros, dizendo: Soltai aqueles homens.
³⁶ E o carcereiro anunciou a Paulo estas palavras, dizendo: Os magistrados mandaram que vos soltasse; agora, pois, saí e ide em paz.
³⁷ Mas Paulo lhes replicou: Açoitaram-nos publicamente e, sem sermos condenados, sendo homens romanos, nos lançaram na prisão, e agora encobertamente nos lançam fora? Não será assim; mas venham eles mesmos e tirem-nos para fora.
³⁸ E os quadrilheiros foram dizer aos magistrados estas palavras; e eles temeram, ouvindo que eram romanos.
³⁹ E, vindo, lhes dirigiram súplicas; e, tirando-os para fora, lhes pediram que saíssem da cidade.
⁴⁰ E, saindo da prisão, entraram em casa de Lídia e, vendo os irmãos, os confortaram, e depois partiram. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Paulo e Silas faziam na prisão por volta da meia-noite?",
                        opcoes: [
                            { numero: 1, texto: "Planejavam uma fuga", correta: false },
                            { numero: 2, texto: "Dormiam profundamente", correta: false },
                            { numero: 3, texto: "Oravam e cantavam hinos a Deus", correta: true },
                            { numero: 4, texto: "Discutiam com os guardas", correta: false }
                        ],
                        explicacao: "Atos 16:25 - Perto da meia-noite, Paulo e Silas oravam e cantavam hinos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual foi a resposta de Paulo ao carcereiro que perguntou como ser salvo?",
                        opcoes: [
                            { numero: 1, texto: "Trabalhe duro e seja bom", correta: false },
                            { numero: 2, texto: "Crê no Senhor Jesus Cristo e serás salvo", correta: true },
                            { numero: 3, texto: "Pague as dívidas do templo", correta: false },
                            { numero: 4, texto: "Fuja da cidade agora", correta: false }
                        ],
                        explicacao: "Atos 16:31 - Crê no Senhor Jesus Cristo e serás salvo, tu e a tua casa.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual era a profissão de Lídia, a primeira convertida na Europa?",
                        opcoes: [
                            { numero: 1, texto: "Vendedora de púrpura", correta: true },
                            { numero: 2, texto: "Costureira de tendas", correta: false },
                            { numero: 3, texto: "Escrava do templo", correta: false },
                            { numero: 4, texto: "Pescadora", correta: false }
                        ],
                        explicacao: "Atos 16:14 - Uma mulher chamada Lídia, vendedora de púrpura, da cidade de Tiatira.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        17: {
            titulo: "Em Atenas e o Deus Desconhecido",
            texto: ` ¹ E passando por Anfípolis e Apolônia, chegaram a Tessalônica, onde havia uma sinagoga de judeus.
² E Paulo, como tinha por costume, foi ter com eles; e por três sábados disputou com eles sobre as Escrituras,
³ Expondo e demonstrando que convinha que Cristo padecesse e ressuscitasse dentre os mortos. E este Jesus, que vos anuncio, dizia ele, é o Cristo.
⁴ E alguns deles creram, e ajuntaram-se com Paulo e Silas; e também uma grande multidão de gregos religiosos, e não poucas mulheres principais.
⁵ Mas os judeus desobedientes, movidos de inveja, tomaram consigo alguns homens perversos, dentre os vadios e, ajuntando o povo, alvoroçaram a cidade, e assaltando a casa de Jasom, procuravam trazê-los para junto do povo.
⁶ E, não os achando, trouxeram Jasom e alguns irmãos à presença dos magistrados da cidade, clamando: Estes que têm alvoroçado o mundo, chegaram também aqui;
⁷ Os quais Jasom recolheu; e todos estes procedem contra os decretos de César, dizendo que há outro rei, Jesus.
⁸ E alvoroçaram a multidão e os principais da cidade, que ouviram estas coisas.
⁹ Tendo, porém, recebido satisfação de Jasom e dos demais, os soltaram.
¹⁰ E logo os irmãos enviaram de noite Paulo e Silas a Bereia; e eles, chegando lá, foram à sinagoga dos judeus.
¹¹ Ora, estes foram mais nobres do que os que estavam em Tessalônica, porque de bom grado receberam a palavra, examinando cada dia nas Escrituras se estas coisas eram assim.
¹² De sorte que creram muitos deles, e também mulheres gregas da classe nobre, e não poucos homens.
¹³ Mas, logo que os judeus de Tessalônica souberam que a palavra de Deus também era anunciada por Paulo em Bereia, foram lá, e excitaram as multidões.
¹⁴ No mesmo instante os irmãos mandaram a Paulo que fosse até ao mar, mas Silas e Timóteo ficaram ali.
¹⁵ E os que acompanhavam Paulo o levaram até Atenas, e, recebendo ordem para que Silas e Timóteo fossem ter com ele o mais depressa possível, partiram.
¹⁶ E, enquanto Paulo os esperava em Atenas, o seu espírito se agitava em si mesmo, vendo a cidade tão entregue à idolatria.
¹⁷ De sorte que disputava na sinagoga com os judeus e religiosos, e todos os dias na praça com os que se apresentavam.
¹⁸ E alguns dos filósofos epicureus e estoicos contendiam com ele; e uns diziam: Que quer dizer este tagarela? E outros: Parece que é pregador de deuses estranhos; porque lhes anunciava a Jesus e a ressurreição.
¹⁹ E tomando-o, o levaram ao Areópago, dizendo: Poderemos nós saber que nova doutrina é essa de que falas?
²⁰ Pois coisas estranhas nos trazes aos ouvidos; queremos, pois, saber o que vem a ser isto
²¹ (Pois todos os atenienses e estrangeiros residentes, de nenhuma outra coisa se ocupavam, senão de dizer e ouvir alguma novidade).
²² E, estando Paulo no meio do Areópago, disse: Homens atenienses, em tudo vos vejo como sendo um tanto supersticiosos;
²³ Porque, passando eu e vendo os vossos santuários, achei também um altar em que estava escrito: ao deus desconhecido. Esse, pois, que vós honrais, não o conhecendo, é o que eu vos anuncio.
²⁴ O Deus que fez o mundo e tudo que nele há, sendo Senhor do céu e da terra, não habita em templos feitos por mãos de homens;
²⁵ Nem tampouco é servido por mãos de homens, como que necessitando de alguma coisa; pois ele mesmo é quem dá a todos a vida, e a respiração, e todas as coisas;
²⁶ E de um só sangue fez toda a geração dos homens, para habitar sobre toda a face da terra, determinando os tempos já dantes ordenados, e os limites da sua habitação;
²⁷ Para que buscassem ao Senhor, se porventura, tateando, o pudessem achar; ainda que não está longe de cada um de nós;
²⁸ Porque nele vivemos, e nos movemos, e existimos; como também alguns dos vossos poetas disseram: Pois somos também sua geração.
²⁹ Sendo nós, pois, geração de Deus, não havemos de cuidar que a Divindade seja semelhante ao ouro, ou à prata, ou à pedra esculpida por artifício e imaginação dos homens.
³⁰ Mas Deus, não tendo em conta os tempos da ignorância, ordena agora a todos os homens, e em todo o lugar, que se arrependam;
³¹ Porquanto tem determinado um dia em que com justiça há de julgar o mundo, por meio do homem que destinou; e disso deu certeza a todos, ressuscitando-o dentre os mortos.
³² E, como ouviram falar da ressurreição dos mortos, uns escarneciam, e outros diziam: Acerca disso te ouviremos outra vez.
³³ E assim Paulo saiu do meio deles.
³⁴ Todavia, chegando alguns homens a ele, creram; entre os quais foi Dionísio, areopagita, uma mulher por nome Dâmaris, e com eles outros. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que os crentes de Bereia foram considerados mais nobres?",
                        opcoes: [
                            { numero: 1, texto: "Porque eram muito ricos", correta: false },
                            { numero: 2, texto: "Porque lutaram contra Roma", correta: false },
                            { numero: 3, texto: "Porque falavam muitas línguas", correta: false },
                            { numero: 4, texto: "Porque examinavam as Escrituras todos os dias", correta: true }
                        ],
                        explicacao: "Atos 17:11 - ...examinando cada dia as Escrituras se estas coisas eram assim.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Paulo viu escrito em um altar em Atenas?",
                        opcoes: [
                            { numero: 1, texto: "Ao Deus Desconhecido", correta: true },
                            { numero: 2, texto: "A Júpiter e Marte", correta: false },
                            { numero: 3, texto: "Ao Rei dos Judeus", correta: false },
                            { numero: 4, texto: "À Grande Diana", correta: false }
                        ],
                        explicacao: "Atos 17:23 - Achei um altar em que estava escrito: AO DEUS DESCONHECIDO.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual era o nome do lugar em Atenas onde Paulo pregou para os filósofos?",
                        opcoes: [
                            { numero: 1, texto: "Coliseu", correta: false },
                            { numero: 2, texto: "Areópago", correta: true },
                            { numero: 3, texto: "Sinagoga", correta: false },
                            { numero: 4, texto: "Fórum", correta: false }
                        ],
                        explicacao: "Atos 17:19 - E, tomando-o, o levaram ao Areópago.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        18: {
            titulo: "Paulo em Corinto",
            texto: `1 E depois disto partiu Paulo de Atenas, e chegou a Corinto.
2 E, achando um certo judeu por nome Áquila, natural do Ponto, que havia pouco tinha vindo da Itália, e Priscila, sua mulher(pois Cláudio tinha mandado que todos os judeus saíssem de Roma), ajuntou- se com eles,
        3 E, como era do mesmo ofício, ficou com eles, e trabalhava; pois tinham por ofício fazer tendas.
4 E todos os sábados disputava na sinagoga, e convencia a judeus e gregos.
5 E, quando Silas e Timóteo desceram da Macedônia, foi Paulo impulsionado no espírito, testificando aos judeus que Jesus era o Cristo.
6 Mas, resistindo e blasfemando eles, sacudiu as vestes, e disse- lhes: O vosso sangue seja sobre a vossa cabeça; eu estou limpo, e desde agora parto para os gentios.
7 E, saindo dali, entrou em casa de um homem chamado Justo, que servia a Deus, e cuja casa estava junto da sinagoga.
8 E Crispo, principal da sinagoga, creu no Senhor com toda a sua casa; e muitos dos coríntios, ouvindo- o, creram e foram batizados.
9 E disse o Senhor em visão de noite a Paulo: Não temas, mas fala, e não te cales;
10 Porque eu sou contigo, e ninguém lançará mão de ti para te fazer mal, pois tenho muito povo nesta cidade.
11 E ficou ali um ano e seis meses, ensinando entre eles a palavra de Deus.
12 Mas, sendo Gálio procônsul da Acaia, levantaram - se os judeus concordemente contra Paulo, e o levaram ao tribunal,
    13 Dizendo: Este persuade os homens a servir a Deus contra a lei.
14 E, querendo Paulo abrir a boca, disse Gálio aos judeus: Se houvesse, ó judeus, algum agravo ou crime enorme, com razão vos sofreria,
    15 Mas, se a questão é de palavras, e de nomes, e da lei que entre vós há, vede - o vós mesmos; porque eu não quero ser juiz dessas coisas.
16 E expulsou - os do tribunal.
17 Então todos os gregos agarraram Sóstenes, principal da sinagoga, e o feriram diante do tribunal; e a Gálio nada destas coisas o incomodava.
18 E Paulo, ficando ainda ali muitos dias, despediu - se dos irmãos, e dali navegou para a Síria, e com ele Priscila e Áquila, tendo rapado a cabeça em Cencreia, porque tinha voto.
19 E chegou a Éfeso, e deixou - os ali; mas ele, entrando na sinagoga, disputava com os judeus.
20 E, rogando - lhe eles que ficasse com eles por mais algum tempo, não consentiu nisso.
21 Antes se despediu deles, dizendo: É - me de todo preciso celebrar a festividade que vem em Jerusalém; mas querendo Deus, outra vez voltarei a vós.E partiu de Éfeso.
22 E, chegando a Cesareia, subiu a Jerusalém e, saudando a igreja, desceu a Antioquia.
23 E, estando ali algum tempo, partiu, passando sucessivamente pela província da Galácia e da Frígia, confirmando a todos os discípulos.
24 E chegou a Éfeso um certo judeu chamado Apolo, natural de Alexandria, homem eloquente e poderoso nas Escrituras.
25 Este era instruído no caminho do Senhor e, fervoroso de espírito, falava e ensinava diligentemente as coisas do Senhor, conhecendo somente o batismo de João.
26 Ele começou a falar ousadamente na sinagoga; e, quando o ouviram Priscila e Áquila, o levaram consigo e lhe declararam mais precisamente o caminho de Deus.
27 Querendo ele passar à Acaia, o animaram os irmãos, e escreveram aos discípulos que o recebessem; o qual, tendo chegado, aproveitou muito aos que pela graça criam.
28 Porque com grande veemência, convencia publicamente os judeus, mostrando pelas Escrituras que Jesus era o Cristo.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Com quem Paulo trabalhava fazendo tendas em Corinto?",
                        opcoes: [
                            { numero: 1, texto: "Pedro e André", correta: false },
                            { numero: 2, texto: "Barnabé e Silas", correta: false },
                            { numero: 3, texto: "Áquila e Priscila", correta: true },
                            { numero: 4, texto: "Lucas e Timóteo", correta: false }
                        ],
                        explicacao: "Atos 18:2-3 - E, como era do mesmo ofício, ficou com eles, e trabalhava; pois tinham por ofício fazer tendas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por quanto tempo Paulo ficou em Corinto ensinando a palavra?",
                        opcoes: [
                            { numero: 1, texto: "Três meses", correta: false },
                            { numero: 2, texto: "Um ano e seis meses", correta: true },
                            { numero: 3, texto: "Sete anos", correta: false },
                            { numero: 4, texto: "Quarenta dias", correta: false }
                        ],
                        explicacao: "Atos 18:11 - E ficou ali um ano e seis meses, ensinando entre eles a palavra de Deus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem era o judeu eloquente e instruído nas Escrituras que chegou a Éfeso?",
                        opcoes: [
                            { numero: 1, texto: "Apolos", correta: true },
                            { numero: 2, texto: "Estêvão", correta: false },
                            { numero: 3, texto: "Cornélio", correta: false },
                            { numero: 4, texto: "Ananias", correta: false }
                        ],
                        explicacao: "Atos 18:24 - Chegou a Éfeso um judeu chamado Apolos... homem eloquente e poderoso nas Escrituras.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        19: {
            titulo: "O Alvoroço em Éfeso",
            texto: `¹ E sucedeu que, enquanto Apolo estava em Corinto, Paulo, tendo passado por todas as regiões superiores, chegou a Éfeso; e achando ali alguns discípulos,
² Disse-lhes: Recebestes vós já o Espírito Santo quando crestes? E eles disseram-lhe: Nós nem ainda ouvimos que haja Espírito Santo.
³ Perguntou-lhes, então: Em que sois batizados então? E eles disseram: No batismo de João.
⁴ Mas Paulo disse: Certamente João batizou com o batismo de arrependimento, dizendo ao povo que cresse no que após ele havia de vir, isto é, em Jesus Cristo.
⁵ E os que ouviram foram batizados em nome do Senhor Jesus.
⁶ E, impondo-lhes Paulo as mãos, veio sobre eles o Espírito Santo; e falavam línguas, e profetizavam.
⁷ E estes eram, ao todo, uns doze homens.
⁸ E, entrando na sinagoga, falou ousadamente por espaço de três meses, disputando e persuadindo-os acerca do reino de Deus.
⁹ Mas, como alguns deles se endurecessem e não obedecessem, falando mal do Caminho perante a multidão, retirou-se deles, e separou os discípulos, disputando todos os dias na escola de um certo Tirano.
¹⁰ E durou isto por espaço de dois anos; de tal maneira que todos os que habitavam na Ásia ouviram a palavra do Senhor Jesus, assim judeus como gregos.
¹¹ E Deus pelas mãos de Paulo fazia maravilhas extraordinárias.
¹² De sorte que até os lenços e aventais se levavam do seu corpo aos enfermos, e as enfermidades fugiam deles, e os espíritos malignos saíam.
¹³ E alguns dos exorcistas judeus ambulantes tentavam invocar o nome do Senhor Jesus sobre os que tinham espíritos malignos, dizendo: Esconjuro-vos por Jesus a quem Paulo prega.
¹⁴ E os que faziam isto eram sete filhos de Ceva, judeu, principal dos sacerdotes.
¹⁵ Respondendo, porém, o espírito maligno, disse: Conheço a Jesus, e bem sei quem é Paulo; mas vós quem sois?
¹⁶ E, saltando neles o homem que tinha o espírito maligno, e assenhoreando-se deles, pôde mais do que eles; de tal maneira que, nus e feridos, fugiram daquela casa.
¹⁷ E foi isto notório a todos os que habitavam em Éfeso, tanto judeus como gregos; e caiu temor sobre todos eles, e o nome do Senhor Jesus era engrandecido.
¹⁸ E muitos dos que tinham crido vinham, confessando e publicando os seus feitos.
¹⁹ Também muitos dos que seguiam artes mágicas trouxeram os seus livros, e os queimaram na presença de todos e, feita a conta do seu preço, acharam que montava a cinquenta mil peças de prata.
²⁰ Assim a palavra do Senhor crescia poderosamente e prevalecia.
²¹ E, cumpridas estas coisas, Paulo propôs, em espírito, ir a Jerusalém, passando pela Macedônia e pela Acaia, dizendo: Depois que houver estado ali, importa-me ver também Roma.
²² E, enviando à Macedônia dois daqueles que o serviam, Timóteo e Erasto, ficou ele por algum tempo na Ásia.
²³ E, naquele mesmo tempo, houve um não pequeno alvoroço acerca do Caminho.
²⁴ Porque um certo ourives da prata, por nome Demétrio, que fazia de prata nichos de Diana, dava não pouco lucro aos artífices,
²⁵ Aos quais, havendo-os ajuntado com os oficiais de obras semelhantes, disse: Senhores, vós bem sabeis que deste ofício temos a nossa prosperidade;
²⁶ E bem vedes e ouvis que não só em Éfeso, mas até quase em toda a Ásia, este Paulo tem convencido e afastado uma grande multidão, dizendo que não são deuses os que se fazem com as mãos.
²⁷ E não somente há o perigo de que a nossa profissão caia em descrédito, mas também de que o próprio templo da grande deusa Diana seja estimado em nada, vindo a ser destruída a majestade daquela que toda a Ásia e o mundo veneram.
²⁸ E, ouvindo-o, encheram-se de ira, e clamaram, dizendo: Grande é a Diana dos efésios.
²⁹ E encheu-se de confusão toda a cidade e, unânimes, correram ao teatro, arrebatando a Gaio e a Aristarco, macedônios, companheiros de Paulo na viagem.
³⁰ E, querendo Paulo apresentar-se ao povo, não lho permitiram os discípulos.
³¹ E também alguns dos principais da Ásia, que eram seus amigos, lhe rogaram que não se apresentasse no teatro.
³² Uns, pois, clamavam de uma maneira, outros de outra, porque o ajuntamento era confuso; e os mais deles não sabiam por que causa se tinham ajuntado.
³³ Então tiraram Alexandre dentre a multidão, impelindo-o os judeus para diante; e Alexandre, acenando com a mão, queria dar razão disto ao povo.
³⁴ Mas quando conheceram que era judeu, todos unanimemente levantaram a voz, clamando por espaço de quase duas horas: Grande é a Diana dos efésios.
³⁵ Então o escrivão da cidade, tendo apaziguado a multidão, disse: Homens efésios, qual é o homem que não sabe que a cidade dos efésios é a guardadora do templo da grande deusa Diana, e da imagem que desceu de Júpiter?
³⁶ Ora, não podendo isto ser contraditado, convém que vos aplaqueis e nada façais temerariamente;
³⁷ Porque estes homens que aqui trouxestes nem são sacrílegos nem blasfemam da vossa deusa.
³⁸ Mas, se Demétrio e os artífices que estão com ele têm alguma coisa contra alguém, há audiências e há procônsules; que se acusem uns aos outros;
³⁹ E, se de alguma outra coisa demandais, averiguar-se-á em legítima assembleia.
⁴⁰ Na verdade até corremos perigo de que, por hoje, sejamos acusados de sedição, não havendo causa alguma com que possamos justificar este concurso.
⁴¹ E, tendo dito isto, despediu a assembleia. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que aconteceu quando Paulo impôs as mãos sobre os discípulos em Éfeso?",
                        opcoes: [
                            { numero: 1, texto: "Eles ficaram mudos", correta: false },
                            { numero: 2, texto: "Eles fugiram de medo", correta: false },
                            { numero: 3, texto: "Vieram sobre eles o Espírito Santo, e falavam línguas", correta: true },
                            { numero: 4, texto: "Eles foram presos por Roma", correta: false }
                        ],
                        explicacao: "Atos 19:6 - ...veio sobre eles o Espírito Santo; e falavam línguas, e profetizavam.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual era a deusa que os efésios adoravam e que causou o alvoroço?",
                        opcoes: [
                            { numero: 1, texto: "Atena", correta: false },
                            { numero: 2, texto: "Diana (ou Artemisa)", correta: true },
                            { numero: 3, texto: "Vênus", correta: false },
                            { numero: 4, texto: "Hera", correta: false }
                        ],
                        explicacao: "Atos 19:28 - ...encheram-se de ira, e clamaram, dizendo: Grande é a Diana dos efésios.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Deus fazia pelas mãos de Paulo que curava doentes à distância?",
                        opcoes: [
                            { numero: 1, texto: "Mandava cartas ungidas", correta: false },
                            { numero: 2, texto: "Sua sombra curava as pessoas", correta: false },
                            { numero: 3, texto: "Levavam lenços e aventais do seu corpo", correta: true },
                            { numero: 4, texto: "Ele soprava para o vento", correta: false }
                        ],
                        explicacao: "Atos 19:12 - De sorte que até os lenços e aventais se levavam do seu corpo aos enfermos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        20: {
            titulo: "A Ressurreição de Êutico",
            texto: `¹ E, depois que cessou o alvoroço, Paulo chamou a si os discípulos e, abraçando-os, saiu para ir à Macedônia.
² E, havendo andado por aquelas terras, exortando-os com muitas palavras, veio à Grécia.
³ E, passando ali três meses, e sendo-lhe pelos judeus postas ciladas, como tivesse de navegar para a Síria, determinou voltar pela Macedônia.
⁴ E acompanhou-o, até à Ásia, Sópater, de Bereia, e, dos de Tessalônica, Aristarco, e Segundo, e Gaio de Derbe, e Timóteo, e, dos da Ásia, Tíquico e Trófimo.
⁵ Estes, indo adiante, nos esperaram em Trôade.
⁶ E, depois dos dias dos pães ázimos, navegamos de Filipos, e em cinco dias fomos ter com eles a Trôade, onde estivemos sete dias.
⁷ E no primeiro dia da semana, ajuntando-se os discípulos para partir o pão, Paulo, que havia de partir no dia seguinte, falava com eles; e prolongou a prática até à meia-noite.
⁸ E havia muitas luzes no cenáculo onde estavam juntos.
⁹ E, estando um certo jovem, por nome Êutico, assentado numa janela, caiu do terceiro andar abaixo, tomado de um sono profundo que lhe sobreveio durante o extenso discurso de Paulo; e foi levantado morto.
¹⁰ Paulo, porém, descendo, inclinou-se sobre ele e, abraçando-o, disse: Não vos perturbeis, que a sua alma nele está.
¹¹ E subindo, e partindo o pão, e comendo, ainda lhes falou largamente até à alvorada; e assim partiu.
¹² E levaram vivo o jovem, e ficaram não pouco consolados.
¹³ Nós, porém, subindo antes ao navio, navegamos até Assôs, onde devíamos receber a Paulo, porque assim o ordenara, indo ele por terra.
¹⁴ E, logo que se ajuntou conosco em Assôs, o recebemos, e fomos a Mitilene.
¹⁵ E, navegando dali, chegamos no dia seguinte defronte de Quios, e no outro aportamos a Samos e, ficando em Trogílio, chegamos no dia seguinte a Mileto.
¹⁶ Porque já Paulo tinha determinado passar ao largo de Éfeso, para não gastar tempo na Ásia. Apressava-se, pois, para estar, se lhe fosse possível, em Jerusalém no dia de Pentecostes.
¹⁷ E de Mileto mandou a Éfeso, a chamar os anciãos da igreja.
¹⁸ E, logo que chegaram junto dele, disse-lhes: Vós bem sabeis, desde o primeiro dia em que entrei na Ásia, como em todo esse tempo me portei no meio de vós,
¹⁹ Servindo ao Senhor com toda a humildade, e com muitas lágrimas e tentações, que pelas ciladas dos judeus me sobrevieram;
²⁰ Como nada, que útil seja, deixei de vos anunciar, e ensinar publicamente e pelas casas,
²¹ Testificando, tanto a judeus como a gregos, o arrependimento para com Deus, e a fé em nosso Senhor Jesus Cristo.
²² E agora, eis que, ligado eu pelo espírito, vou para Jerusalém, não sabendo o que lá me há de acontecer,
²³ Senão o que o Espírito Santo de cidade em cidade me revela, dizendo que me esperam prisões e tribulações.
²⁴ Mas de nada faço questão, nem tenho a minha vida por preciosa, contanto que cumpra com alegria a minha carreira, e o ministério que recebi do Senhor Jesus, para dar testemunho do evangelho da graça de Deus.
²⁵ E agora, eis que eu sei, que todos vós, por quem passei pregando o reino de Deus, não vereis mais o meu rosto.
²⁶ Portanto, no dia de hoje, vos protesto que estou limpo do sangue de todos.
²⁷ Porque nunca deixei de vos anunciar todo o conselho de Deus.
²⁸ Olhai, pois, por vós, e por todo o rebanho sobre que o Espírito Santo vos constituiu bispos, para apascentardes a igreja de Deus, que ele resgatou com seu próprio sangue.
²⁹ Porque eu sei isto que, depois da minha partida, entrarão no meio de vós lobos cruéis, que não pouparão ao rebanho;
³⁰ E que de entre vós mesmos se levantarão homens que falarão coisas perversas, para atraírem os discípulos após si.
³¹ Portanto, vigiai, lembrando-vos de que durante três anos, não cessei, noite e dia, de admoestar com lágrimas a cada um de vós.
³² Agora, pois, irmãos, encomendo-vos a Deus e à palavra da sua graça; a ele que é poderoso para vos edificar e dar herança entre todos os santificados.
³³ De ninguém cobicei a prata, nem o ouro, nem o vestuário.
³⁴ Sim, vós mesmos sabeis que para o que me era necessário a mim, e aos que estão comigo, estas mãos me serviram.
³⁵ Tenho-vos mostrado em tudo que, trabalhando assim, é necessário auxiliar os enfermos, e recordar as palavras do Senhor Jesus, que disse: Mais bem-aventurada coisa é dar do que receber.
³⁶ E, havendo dito isto, pôs-se de joelhos, e orou com todos eles.
³⁷ E levantou-se um grande pranto entre todos e, lançando-se ao pescoço de Paulo, o beijavam,
³⁸ Entristecendo-se muito, principalmente pela palavra que dissera, que não veriam mais o seu rosto. E acompanharam-no até o navio. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que aconteceu com o jovem Êutico enquanto Paulo pregava?",
                        opcoes: [
                            { numero: 1, texto: "Adormeceu e caiu do terceiro andar", correta: true },
                            { numero: 2, texto: "Foi batizado nas águas", correta: false },
                            { numero: 3, texto: "Discutiu com os anciãos", correta: false },
                            { numero: 4, texto: "Tornou-se um soldado", correta: false }
                        ],
                        explicacao: "Atos 20:9 - ...atropelado pelo sono, caiu do terceiro andar abaixo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Para qual cidade Paulo estava indo, sabendo que o esperavam prisões e tribulações?",
                        opcoes: [
                            { numero: 1, texto: "Tarso", correta: false },
                            { numero: 2, texto: "Jerusalém", correta: true },
                            { numero: 3, texto: "Alexandria", correta: false },
                            { numero: 4, texto: "Atenas", correta: false }
                        ],
                        explicacao: "Atos 20:22 - E agora, eis que, ligado eu pelo espírito, vou para Jerusalém.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual frase de Jesus (não registrada nos Evangelhos) Paulo citou aos anciãos?",
                        opcoes: [
                            { numero: 1, texto: "Mais bem-aventurada coisa é dar do que receber", correta: true },
                            { numero: 2, texto: "Quem não trabalha não come", correta: false },
                            { numero: 3, texto: "O tempo é curto para o pecador", correta: false },
                            { numero: 4, texto: "Amai a vossa pátria acima de tudo", correta: false }
                        ],
                        explicacao: "Atos 20:35 - ...recordar as palavras do Senhor Jesus, que disse: Mais bem-aventurada coisa é dar do que receber.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        21: {
            titulo: "Prisão em Jerusalém",
            texto: `¹ E aconteceu que, separando- nos deles, navegamos e fomos correndo caminho direito, e chegamos a Cós, e no dia seguinte a Rodes, de onde passamos a Pátara.
² E, achando um navio, que ia para a Fenícia, embarcamos nele, e partimos.
³ E, indo já à vista de Chipre, deixando - a à esquerda, navegamos para a Síria e chegamos a Tiro; porque o navio havia de descarregar ali sua carga.
⁴ E, achando discípulos, ficamos ali sete dias; e eles pelo Espírito diziam a Paulo que não subisse a Jerusalém.
⁵ E, havendo passado ali aqueles dias, saímos, e seguimos nosso caminho, acompanhando - nos todos, com suas mulheres e filhos até fora da cidade; e, postos de joelhos na praia, oramos.
⁶ E, despedindo - nos uns dos outros, subimos ao navio; e eles voltaram para suas casas.
⁷ E nós, concluída a navegação de Tiro, viemos a Ptolemaida; e, havendo saudado os irmãos, ficamos com eles um dia.
⁸ E no dia seguinte, partindo dali Paulo, e nós que com ele estávamos, chegamos a Cesareia; e, entrando em casa de Filipe, o evangelista, que era um dos sete, ficamos com ele.
⁹ E tinha este quatro filhas virgens, que profetizavam.
¹⁰ E, demorando - nos ali por muitos dias, chegou da Judeia um profeta, por nome Ágabo;
¹¹ E, vindo ter conosco, tomou a cinta de Paulo, e ligando - se os seus próprios pés e mãos, disse: Isto diz o Espírito Santo: Assim ligarão os judeus em Jerusalém o homem de quem é esta cinta, e o entregarão nas mãos dos gentios.
¹² E, ouvindo nós isto, rogamos - lhe, tanto nós como os que eram daquele lugar, que não subisse a Jerusalém.
¹³ Mas Paulo respondeu: Que fazeis vós, chorando e magoando - me o coração ? Porque eu estou pronto não só a ser ligado, mas ainda a morrer em Jerusalém pelo nome do Senhor Jesus.
¹⁴ E, como não podíamos convencê - lo, nos aquietamos, dizendo: Faça - se a vontade do Senhor.
¹⁵ E depois daqueles dias, havendo feito os nossos preparativos, subimos a Jerusalém.
¹⁶ E foram também conosco alguns discípulos de Cesareia, levando consigo um certo Mnasom, cíprio, discípulo antigo, com quem havíamos de hospedar - nos.
¹⁷ E, logo que chegamos a Jerusalém, os irmãos nos receberam de muito boa vontade.
¹⁸ E no dia seguinte, Paulo entrou conosco em casa de Tiago, e todos os anciãos vieram ali.
¹⁹ E, havendo - os saudado, contou - lhes por miúdo o que por seu ministério Deus fizera entre os gentios.
²⁰ E, ouvindo - o eles, glorificaram ao Senhor, e disseram - lhe: Bem vês, irmão, quantos milhares de judeus há que creem, e todos são zeladores da lei.
²¹ E já acerca de ti foram informados de que ensinas todos os judeus que estão entre os gentios a apartarem - se de Moisés, dizendo que não devem circuncidar seus filhos, nem andar segundo o costume da lei.
²² Que faremos pois ? Em todo o caso é necessário que a multidão se ajunte; porque terão ouvido que já és vindo.
²³ Faze, pois, isto que te dizemos: Temos quatro homens que fizeram voto.
²⁴ Toma estes contigo, e santifica - te com eles, e faze por eles os gastos para que rapem a cabeça, e todos ficarão sabendo que nada há daquilo de que foram informados acerca de ti, mas que também tu mesmo andas guardando a lei.
²⁵ Todavia, quanto aos que creem dos gentios, já nós havemos escrito, e achado por bem, que nada disto observem; mas que só se guardem do que se sacrifica aos ídolos, e do sangue, e do sufocado e da fornicação.
²⁶ Então Paulo, tomando consigo aqueles homens, entrou no dia seguinte no templo, já santificado com eles, anunciando serem já cumpridos os dias da purificação; e ficou ali até se oferecer por cada um deles a oferta.
²⁷ E quando os sete dias estavam quase a terminar, os judeus da Ásia, vendo - o no templo, alvoroçaram todo o povo e lançaram mão dele,
²⁸ Clamando: Homens israelitas, acudi; este é o homem que por todas as partes ensina a todos contra o povo e contra a lei, e contra este lugar; e, demais disto, introduziu também no templo os gregos, e profanou este santo lugar.
²⁹ Porque antes tinham visto com ele na cidade a Trófimo de Éfeso, o qual pensavam que Paulo introduzira no templo.
³⁰ E alvoroçou - se toda a cidade, e houve grande concurso de povo; e, pegando Paulo, o arrastaram para fora do templo, e logo as portas se fecharam.
³¹ E, procurando eles matá - lo, chegou ao tribuno da coorte o aviso de que Jerusalém estava toda em confusão;
³² O qual, tomando logo consigo soldados e centuriões, correu para eles.E, quando viram o tribuno e os soldados, cessaram de ferir a Paulo.
³³ Então, aproximando - se o tribuno, o prendeu e o mandou atar com duas cadeias, e lhe perguntou quem era e o que tinha feito.
³⁴ E na multidão uns clamavam de uma maneira, outros de outra; mas, como nada podia saber ao certo, por causa do alvoroço, mandou conduzi - lo para a fortaleza.
³⁵ E sucedeu que, chegando às escadas, os soldados tiveram de lhe pegar por causa da violência da multidão.
³⁶ Porque a multidão do povo o seguia, clamando: Mata - o!
³⁷ E, quando iam a introduzir Paulo na fortaleza, disse Paulo ao tribuno: É - me permitido dizer - te alguma coisa ? E ele disse: Sabes o grego ?
³⁸ Não és tu porventura aquele egípcio que antes destes dias fez uma sedição e levou ao deserto quatro mil salteadores ?
³⁹ Mas Paulo lhe disse: Na verdade que sou um homem judeu, cidadão de Tarso, cidade não pouco célebre na Cilícia; rogo - te, porém, que me permitas falar ao povo.
⁴⁰ E, havendo - lho permitido, Paulo, pondo - se em pé nas escadas, fez sinal com a mão ao povo; e, feito grande silêncio, falou - lhes em língua hebraica, dizendo: 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o profeta Ágabo fez com o cinto de Paulo?",
                        opcoes: [
                            { numero: 1, texto: "Deu de presente a Lucas", correta: false },
                            { numero: 2, texto: "Ligou os seus próprios pés e mãos", correta: true },
                            { numero: 3, texto: "Queimou em sacrifício", correta: false },
                            { numero: 4, texto: "Lavou-o no rio", correta: false }
                        ],
                        explicacao: "Atos 21:11 - ...ligando-se os seus próprios pés e mãos, disse: Isto diz o Espírito Santo: Assim ligarão os judeus em Jerusalém o varão de quem é este cinto.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por que o povo em Jerusalém começou um alvoroço contra Paulo no templo?",
                        opcoes: [
                            { numero: 1, texto: "Porque ele roubou o tesouro", correta: false },
                            { numero: 2, texto: "Pensaram que ele introduzira gregos no templo", correta: true },
                            { numero: 3, texto: "Porque ele se sentou no trono", correta: false },
                            { numero: 4, texto: "Porque ele não pagou os impostos", correta: false }
                        ],
                        explicacao: "Atos 21:28-29 - ...e demais disto introduziu também no templo os gregos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem salvou Paulo de ser morto pela multidão?",
                        opcoes: [
                            { numero: 1, texto: "O tribuno da coorte com soldados", correta: true },
                            { numero: 2, texto: "O apóstolo Pedro", correta: false },
                            { numero: 3, texto: "Barnabé", correta: false },
                            { numero: 4, texto: "Um anjo visível", correta: false }
                        ],
                        explicacao: "Atos 21:32 - O qual, tomando logo soldados e centuriões, correu para eles.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        22: {
            titulo: "A Defesa de Paulo",
            texto: ` 1 Homens, irmãos e pais, ouvi agora a minha defesa perante vós
2 (E, quando ouviram falar-lhes em língua hebraica, maior silêncio guardaram). E disse:
3 Quanto a mim, sou judeu, nascido em Tarso da Cilícia, e nesta cidade criado aos pés de Gamaliel, instruído conforme a verdade da lei de nossos pais, zeloso de Deus, como todos vós hoje sois.
4 E persegui este Caminho até à morte, prendendo, e pondo em prisões, tanto homens como mulheres,
5 Como também o sumo sacerdote me é testemunha, e todo o conselho dos anciãos. E, recebendo destes cartas para os irmãos, fui a Damasco, para trazer amarrados para Jerusalém aqueles que ali estivessem, a fim de que fossem castigados.
6 Ora, aconteceu que, indo eu já de caminho, e chegando perto de Damasco, quase ao meio-dia, de repente me rodeou uma grande luz do céu.
7 E caí por terra, e ouvi uma voz que me dizia: Saulo, Saulo, por que me persegues?
8 E eu respondi: Quem és, Senhor? E disse-me: Eu sou Jesus Nazareno, a quem tu persegues.
9 E os que estavam comigo viram, em verdade, a luz, e se atemorizaram muito, mas não entenderam a voz daquele que falava comigo.
10 Então disse eu: Senhor, que farei? E o Senhor disse-me: Levanta-te, e vai a Damasco, e ali se te dirá tudo o que te é ordenado fazer.
11 E, como eu não via, por causa do esplendor daquela luz, fui levado pela mão dos que estavam comigo, e cheguei a Damasco.
12 E um certo Ananias, homem piedoso conforme a lei, que tinha bom testemunho de todos os judeus que ali moravam,
13 Vindo ter comigo, e apresentando-se, disse-me: Saulo, irmão, recobra a vista. E naquela mesma hora o vi.
14 E ele disse: O Deus de nossos pais de antemão te designou para que conheças a sua vontade, e vejas aquele Justo e ouças a voz da sua boca.
15 Porque hás de ser sua testemunha para com todos os homens do que tens visto e ouvido.
16 E agora por que te deténs? Levanta-te, e batiza-te, e lava os teus pecados, invocando o nome do Senhor.
17 E aconteceu que, tornando eu para Jerusalém, quando orava no templo, fui arrebatado para fora de mim.
18 E vi aquele que me dizia: Dá-te pressa e sai apressadamente de Jerusalém; porque não receberão o teu testemunho acerca de mim.
19 E eu disse: Senhor, eles bem sabem que eu lançava na prisão e açoitava nas sinagogas os que criam em ti.
20 E quando o sangue de Estêvão, tua testemunha, se derramava, também eu estava presente, e consentia na sua morte, e guardava as capas dos que o matavam.
21 E disse-me: Vai, porque hei de enviar-te aos gentios de longe.
22 E ouviram-no até esta palavra, e levantaram a voz, dizendo: Tira da terra um tal homem, porque não convém que viva.
23 E, clamando eles, e arrojando de si as vestes, e lançando pó para o ar,
24 O tribuno mandou que o levassem para a fortaleza, dizendo que o examinassem com açoites, para saber por que causa assim clamavam contra ele.
25 E, quando o estavam atando com correias, disse Paulo ao centurião que ali estava: É-vos lícito açoitar um romano, sem ser condenado?
26 E, ouvindo isto, o centurião foi, e anunciou ao tribuno, dizendo: Vê o que vais fazer, porque este homem é romano.
27 E, vindo o tribuno, disse-lhe: Dize-me, és tu romano? E ele disse: Sim.
28 E respondeu o tribuno: Eu com grande soma de dinheiro alcancei este direito de cidadão. Paulo disse: Mas eu o sou de nascimento.
29 E logo dele se apartaram os que o haviam de examinar; e até o tribuno teve temor, quando soube que era romano, visto que o tinha ligado.
30 E no dia seguinte, querendo saber ao certo a causa por que era acusado pelos judeus, soltou-o das prisões, e mandou vir os principais sacerdotes, e todo o seu conselho; e, trazendo Paulo, o apresentou diante deles.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Em que língua Paulo falou ao povo de Jerusalém para que fizessem silêncio?",
                        opcoes: [
                            { numero: 1, texto: "Latim", correta: false },
                            { numero: 2, texto: "Grego", correta: false },
                            { numero: 3, texto: "Língua hebraica", correta: true },
                            { numero: 4, texto: "Egípcio", correta: false }
                        ],
                        explicacao: "Atos 22:2 - E, quando ouviram falar-lhes em língua hebraica, maior silêncio guardaram.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem foi o mestre de Paulo em Jerusalém?",
                        opcoes: [
                            { numero: 1, texto: "Nicodemos", correta: false },
                            { numero: 2, texto: "Gamaliel", correta: true },
                            { numero: 3, texto: "Herodes", correta: false },
                            { numero: 4, texto: "Caifás", correta: false }
                        ],
                        explicacao: "Atos 22:3 - ...instruído aos pés de Gamaliel, conforme a perfeição da lei de nossos pais.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que impediu o centurião de açoitar Paulo?",
                        opcoes: [
                            { numero: 1, texto: "Paulo ser um cidadão romano", correta: true },
                            { numero: 2, texto: "A falta de cordas", correta: false },
                            { numero: 3, texto: "Uma ordem direta do Imperador", correta: false },
                            { numero: 4, texto: "O choro de Paulo", correta: false }
                        ],
                        explicacao: "Atos 22:25 - É-vos lícito açoitar um romano, sem ser condenado?",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        23: {
            titulo: "O Conluio contra Paulo",
            texto: ` ¹ E, pondo Paulo os olhos no conselho, disse: Homens irmãos, até ao dia de hoje tenho andado diante de Deus com toda a boa consciência.
² Mas o sumo sacerdote, Ananias, mandou aos que estavam junto dele que o ferissem na boca.
³ Então Paulo lhe disse: Deus te ferirá, parede branqueada; tu estás aqui assentado para julgar-me conforme a lei, e contra a lei me mandas ferir?
⁴ E os que ali estavam disseram: Injurias o sumo sacerdote de Deus?
⁵ E Paulo disse: Não sabia, irmãos, que era o sumo sacerdote; porque está escrito: Não dirás mal do príncipe do teu povo.
⁶ E Paulo, sabendo que uma parte era de saduceus e outra de fariseus, clamou no conselho: Homens irmãos, eu sou fariseu, filho de fariseu; no tocante à esperança e ressurreição dos mortos sou julgado.
⁷ E, havendo dito isto, houve dissensão entre os fariseus e saduceus; e a multidão se dividiu.
⁸ Porque os saduceus dizem que não há ressurreição, nem anjo, nem espírito; mas os fariseus reconhecem uma e outra coisa.
⁹ E originou-se um grande clamor; e, levantando-se os escribas da parte dos fariseus, contendiam, dizendo: Nenhum mal achamos neste homem, e, se algum espírito ou anjo lhe falou, não lutemos contra Deus.
¹⁰ E, havendo grande dissensão, o tribuno, temendo que Paulo fosse despedaçado por eles, mandou descer a tropa, para que o tirassem do meio deles, e o levassem para a fortaleza.
¹¹ E na noite seguinte, apresentando-se-lhe o Senhor, disse: Paulo, tem ânimo; porque, como de mim testificaste em Jerusalém, assim importa que testifiques também em Roma.
¹² E, quando já era dia, alguns dos judeus fizeram uma conspiração, e juraram, dizendo que não comeriam nem beberiam enquanto não matassem a Paulo.
¹³ E eram mais de quarenta os que fizeram esta conjuração.
¹⁴ E estes foram ter com os principais sacerdotes e anciãos, e disseram: Conjuramo-nos, sob pena de maldição, a nada provarmos até que matemos a Paulo.
¹⁵ Agora, pois, vós, com o conselho, notificai ao tribuno que vo-lo traga amanhã, como que querendo saber mais alguma coisa de seus negócios, e, antes que chegue, estaremos prontos para o matar.
¹⁶ E o filho da irmã de Paulo, tendo ouvido acerca desta cilada, foi, e entrou na fortaleza, e o anunciou a Paulo.
¹⁷ E Paulo, chamando a si um dos centuriões, disse: Leva este jovem ao tribuno, porque tem alguma coisa que lhe comunicar.
¹⁸ Tomando-o ele, pois, o levou ao tribuno, e disse: O preso Paulo, chamando-me a si, rogou-me que trouxesse este jovem, que tem alguma coisa para dizer-te.
¹⁹ E o tribuno, tomando-o pela mão, e pondo-se à parte, perguntou-lhe em particular: Que tens que me contar?
²⁰ E disse ele: Os judeus se concertaram rogar-te que amanhã leves Paulo ao conselho, como que tendo de inquirir dele mais alguma coisa ao certo.
²¹ Mas tu não os creias; porque mais de quarenta homens de entre eles lhe andam armando ciladas; os quais se obrigaram, sob pena de maldição, a não comer nem beber até que o tenham morto; e já estão preparados, esperando de ti promessa.
²² Então o tribuno despediu o jovem, mandando-lhe que a ninguém dissesse que lhe havia contado aquilo.
²³ E, chamando dois centuriões, lhes disse: Aprontai para as três horas da noite duzentos soldados, e setenta de cavalaria, e duzentos arqueiros para irem até Cesareia;
²⁴ E aparelhai animais, para que, pondo neles a Paulo, o levem salvo ao presidente Félix.
²⁵ E escreveu uma carta, que continha isto:
²⁶ Cláudio Lísias, a Félix, potentíssimo presidente, saúde.
²⁷ Esse homem foi preso pelos judeus; e, estando já a ponto de ser morto por eles, sobrevim eu com a tropa, e o livrei, informado de que era romano.
²⁸ E, querendo saber a causa por que o acusavam, o levei ao seu conselho.
²⁹ E achei que o acusavam de algumas questões da sua lei; mas que nenhum crime havia nele digno de morte ou de prisão.
³⁰ E, sendo-me notificado que os judeus haviam de armar ciladas a esse homem, logo to enviei, mandando também aos acusadores que perante ti digam o que tiverem contra ele. Passa bem.
³¹ Tomando, pois, os soldados a Paulo, como lhe fora mandado, o trouxeram de noite a Antipátride.
³² E no dia seguinte, deixando aos de cavalo irem com ele, tornaram à fortaleza.
³³ Os quais, logo que chegaram a Cesareia, e entregaram a carta ao presidente, lhe apresentaram Paulo.
³⁴ E o presidente, lida a carta, perguntou de que província era; e, sabendo que era da Cilícia,
³⁵ Disse: Ouvir-te-ei, quando também aqui vierem os teus acusadores. E mandou que o guardassem no pretório de Herodes 
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual foi a divisão que ocorreu entre o conselho quando Paulo falou sobre a ressurreição?",
                        opcoes: [
                            { numero: 1, texto: "Entre gregos e judeus", correta: false },
                            { numero: 2, texto: "Entre ricos e pobres", correta: false },
                            { numero: 3, texto: "Entre fariseus e saduceus", correta: true },
                            { numero: 4, texto: "Entre romanos e escravos", correta: false }
                        ],
                        explicacao: "Atos 23:7 - ...houve dissensão entre os fariseus e saduceus; e a multidão se dividiu.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quantos judeus juraram não comer nem beber até matar Paulo?",
                        opcoes: [
                            { numero: 1, texto: "Setenta homens", correta: false },
                            { numero: 2, texto: "Doze homens", correta: false },
                            { numero: 3, texto: "Mais de quarenta", correta: true },
                            { numero: 4, texto: "Cerca de cem", correta: false }
                        ],
                        explicacao: "Atos 23:13 - E eram mais de quarenta os que tinham feito esta conjuração.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem avisou Paulo e o tribuno sobre a emboscada?",
                        opcoes: [
                            { numero: 1, texto: "O filho da irmã de Paulo (seu sobrinho)", correta: true },
                            { numero: 2, texto: "O apóstolo Pedro", correta: false },
                            { numero: 3, texto: "Um soldado arrependido", correta: false },
                            { numero: 4, texto: "O próprio rei Herodes", correta: false }
                        ],
                        explicacao: "Atos 23:16 - E o filho da irmã de Paulo, tendo ouvido a cilada, foi...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        24: {
            titulo: "Paulo perante Félix",
            texto: ` 1 E, cinco dias depois, o sumo sacerdote Ananias desceu com os anciãos, e um certo Tértulo, orador, os quais compareceram perante o presidente contra Paulo.
2 E, sendo chamado, Tértulo começou a acusá-lo, dizendo: Visto como por ti temos tanta paz e por tua prudência se fazem a este povo muitos e louváveis serviços,
3 Sempre e em todo o lugar, ó potentíssimo Félix, com todo o agradecimento o queremos reconhecer.
4 Mas, para que não te detenha muito, rogo-te que, conforme a tua equidade, nos ouças por pouco tempo.
5 Temos achado que este homem é uma peste, e promotor de sedições entre todos os judeus, por todo o mundo; e o principal defensor da seita dos nazarenos;
6 O qual intentou também profanar o templo; e nós o prendemos, e conforme a nossa lei o quisemos julgar.
7 Mas, sobrevindo o tribuno Lísias, no-lo tirou de entre as mãos com grande violência,
8 Mandando aos seus acusadores que viessem a ti; e dele tu mesmo, examinando-o, poderás entender tudo o de que o acusamos.
9 E também os judeus consentiam, dizendo serem estas coisas assim.
10 Paulo, porém, fazendo-lhe o presidente sinal que falasse, respondeu: Porque sei que já vai para muitos anos que desta nação és juiz, com tanto melhor ânimo respondo por mim.
11 Pois bem podes saber que não há mais de doze dias que subi a Jerusalém a adorar;
12 E não me acharam no templo falando com alguém, nem amotinando o povo nas sinagogas, nem na cidade.
13 Nem tampouco podem provar as coisas de que agora me acusam.
14 Mas confesso-te isto que, conforme aquele Caminho que chamam seita, assim sirvo ao Deus de nossos pais, crendo tudo quanto está escrito na lei e nos profetas.
15 Tendo esperança em Deus, como estes mesmos também esperam, de que há de haver ressurreição de mortos, assim dos justos como dos injustos.
16 E por isso procuro sempre ter uma consciência sem ofensa, tanto para com Deus como para com os homens.
17 Ora, muitos anos depois, vim trazer à minha nação esmolas e ofertas.
18 Nisto me acharam já santificado no templo, não em ajuntamentos, nem com alvoroços, uns certos judeus da Ásia,
19 Os quais convinha que estivessem presentes perante ti, e me acusassem, se alguma coisa contra mim tivessem.
20 Ou digam estes mesmos, se acharam em mim alguma iniquidade, quando compareci perante o conselho,
21 A não ser estas palavras que, estando entre eles, clamei: Hoje sou julgado por vós acerca da ressurreição dos mortos.
22 Então Félix, havendo ouvido estas coisas, lhes pôs dilação, dizendo: Havendo-me informado melhor deste Caminho, quando o tribuno Lísias tiver descido, então tomarei inteiro conhecimento dos vossos negócios.
23 E mandou ao centurião que o guardasse em prisão, tratando-o com brandura, e que a ninguém dos seus proibisse servi-lo ou vir ter com ele.
24 E alguns dias depois, vindo Félix com sua mulher Drusila, que era judia, mandou chamar a Paulo, e ouviu-o acerca da fé em Cristo.
25 E, tratando ele da justiça, e da temperança, e do juízo vindouro, Félix, amedrontado, respondeu: Por agora vai-te, e em tendo oportunidade te chamarei.
26 Esperando ao mesmo tempo que Paulo lhe desse dinheiro, para que o soltasse; pelo que também muitas vezes o mandava chamar, e falava com ele.
27 Mas, passados dois anos, Félix teve por sucessor a Pórcio Festo; e, querendo Félix comprazer aos judeus, deixou a Paulo preso.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem era o orador que acusou Paulo perante o governador Félix?",
                        opcoes: [
                            { numero: 1, texto: "Tértulo", correta: true },
                            { numero: 2, texto: "Festo", correta: false },
                            { numero: 3, texto: "Agripa", correta: false },
                            { numero: 4, texto: "Pilatos", correta: false }
                        ],
                        explicacao: "Atos 24:1 - ...com um certo orador chamado Tértulo, os quais compareceram perante o governador contra Paulo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Sobre o que Paulo falou que deixou Félix amedrontado?",
                        opcoes: [
                            { numero: 1, texto: "Sobre os impostos de Roma", correta: false },
                            { numero: 2, texto: "Sobre a justiça, a temperança e o juízo vindouro", correta: true },
                            { numero: 3, texto: "Sobre a beleza de Jerusalém", correta: false },
                            { numero: 4, texto: "Sobre as guerras antigas", correta: false }
                        ],
                        explicacao: "Atos 24:25 - E, dissertando ele acerca da justiça, e da temperança, e do juízo vindouro, Félix, espavorido...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por quanto tempo Paulo ficou preso sob o governo de Félix?",
                        opcoes: [
                            { numero: 1, texto: "Dois anos", correta: true },
                            { numero: 2, texto: "Três meses", correta: false },
                            { numero: 3, texto: "Sete dias", correta: false },
                            { numero: 4, texto: "Um ano", correta: false }
                        ],
                        explicacao: "Atos 24:27 - Mas, passados dois anos, teve Félix por sucessor a Pórcio Festo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        25: {
            titulo: "Paulo apela para César",
            texto: ` ¹ Entrando, pois, Festo na província, subiu dali a três dias de Cesareia a Jerusalém.
² E o sumo sacerdote e os principais dos judeus compareceram perante ele contra Paulo, e lhe rogaram,
³ Pedindo como favor contra ele que o fizesse vir a Jerusalém, armando ciladas para o matarem no caminho.
⁴ Mas Festo respondeu que Paulo estava guardado em Cesareia, e que ele brevemente partiria para lá.
⁵ Os que, pois, disse, dentre vós, têm poder, desçam comigo e, se neste homem houver algum crime, acusem-no.
⁶ E, havendo-se demorado entre eles mais de dez dias, desceu a Cesareia; e no dia seguinte, assentando-se no tribunal, mandou que trouxessem Paulo.
⁷ E, chegando ele, rodearam-no os judeus que haviam descido de Jerusalém, trazendo contra Paulo muitas e graves acusações, que não podiam provar.
⁸ Mas ele, em sua defesa, disse: Eu não pequei em coisa alguma contra a lei dos judeus, nem contra o templo, nem contra César.
⁹ Todavia Festo, querendo comprazer aos judeus, respondendo a Paulo, disse: Queres tu subir a Jerusalém, e ser lá perante mim julgado acerca destas coisas?
¹⁰ Mas Paulo disse: Estou perante o tribunal de César, onde convém que seja julgado; não fiz agravo algum aos judeus, como tu muito bem sabes.
¹¹ Se fiz algum agravo, ou cometi alguma coisa digna de morte, não recuso morrer; mas, se nada há das coisas de que estes me acusam, ninguém me pode entregar a eles; apelo para César.
¹² Então Festo, tendo falado com o conselho, respondeu: Apelaste para César? Para César irás.
¹³ E, passados alguns dias, o rei Agripa e Berenice vieram a Cesareia, a saudar Festo.
¹⁴ E, como ali ficassem muitos dias, Festo contou ao rei os negócios de Paulo, dizendo: Um certo homem foi deixado por Félix aqui preso,
¹⁵ Por cujo respeito os principais sacerdotes e os anciãos dos judeus, estando eu em Jerusalém, compareceram perante mim, pedindo sentença contra ele.
¹⁶ Aos quais respondi não ser costume dos romanos entregar algum homem à morte, sem que o acusado tenha presentes os seus acusadores, e possa defender-se da acusação.
¹⁷ De sorte que, chegando eles aqui juntos, no dia seguinte, sem demora alguma, assentado no tribunal, mandei que trouxessem o homem.
¹⁸ Acerca do qual, estando presentes os acusadores, nenhuma coisa apontaram daquelas que eu suspeitava.
¹⁹ Tinham, porém, contra ele algumas questões acerca da sua própria superstição, e de um tal Jesus, morto, que Paulo afirmava viver.
²⁰ E, estando eu perplexo acerca da inquirição desta causa, disse se queria ir a Jerusalém, e lá ser julgado acerca destas coisas.
²¹ E, apelando Paulo para que fosse reservado ao conhecimento de Augusto, mandei que o guardassem até que o envie a César.
²² Então Agripa disse a Festo: Bem quisera eu também ouvir esse homem. E ele disse: Amanhã o ouvirás.
²³ E, no dia seguinte, vindo Agripa e Berenice, com muito aparato, entraram no auditório com os tribunos e homens principais da cidade, sendo trazido Paulo por mandado de Festo.
²⁴ E Festo disse: Rei Agripa, e todos os senhores que estais presentes conosco; aqui vedes um homem de quem toda a multidão dos judeus me tem falado, tanto em Jerusalém como aqui, clamando que não convém que viva mais.
²⁵ Mas, achando eu que nenhuma coisa digna de morte fizera, e apelando ele mesmo também para Augusto, tenho determinado enviar-lho.
²⁶ Do qual não tenho coisa alguma certa que escreva ao meu senhor, e por isso perante vós o trouxe, principalmente perante ti, ó rei Agripa, para que, depois de interrogado, tenha alguma coisa que escrever.
²⁷ Porque me parece contra a razão enviar um preso, e não notificar contra ele as acusações 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Para quem Paulo apelou quando estava perante Festo?",
                        opcoes: [
                            { numero: 1, texto: "Para o Sumo Sacerdote", correta: false },
                            { numero: 2, texto: "Para o Rei Agripa", correta: false },
                            { numero: 3, texto: "Para César", correta: true },
                            { numero: 4, texto: "Para o povo de Israel", correta: false }
                        ],
                        explicacao: "Atos 25:11 - Apelo para César.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual rei chegou a Cesareia para saudar Festo e ouvir Paulo?",
                        opcoes: [
                            { numero: 1, texto: "Rei Agripa", correta: true },
                            { numero: 2, texto: "Rei Herodes Antipas", correta: false },
                            { numero: 3, texto: "Rei Davi", correta: false },
                            { numero: 4, texto: "Rei Salomão", correta: false }
                        ],
                        explicacao: "Atos 25:13 - ...o rei Agripa e Berenice vieram a Cesareia, a saudar Festo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Festo disse sobre Paulo ao rei Agripa?",
                        opcoes: [
                            { numero: 1, texto: "Que ele era um grande rei", correta: false },
                            { numero: 2, texto: "Que não achava nele crime de morte", correta: true },
                            { numero: 3, texto: "Que ele deveria ser executado logo", correta: false },
                            { numero: 4, texto: "Que ele era muito rico", correta: false }
                        ],
                        explicacao: "Atos 25:25 - Mas eu achei que nenhuma coisa digna de morte fizera.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        26: {
            titulo: "Paulo perante o Rei Agripa",
            texto: ` ¹ Depois Agripa disse a Paulo: É permitido a ti que te defendas. Então Paulo, estendendo a mão em sua defesa, respondeu:
² Tenho-me por feliz, ó rei Agripa, de que perante ti me haja hoje de defender de todas as coisas de que sou acusado pelos judeus;
³ Mormente sabendo eu que tens conhecimento de todos os costumes e questões que há entre os judeus; por isso te rogo que me ouças com paciência.
⁴ Quanto à minha vida, desde a mocidade, como decorreu desde o princípio entre os da minha nação, em Jerusalém, todos os judeus a conhecem,
⁵ Sabendo de mim desde o princípio (se o quiserem testificar), que, conforme a mais severa seita da nossa religião, vivi fariseu.
⁶ E agora pela esperança da promessa que por Deus foi feita a nossos pais estou aqui e sou julgado.
⁷ À qual as nossas doze tribos esperam chegar, servindo a Deus continuamente, noite e dia. Por esta esperança, ó rei Agripa, eu sou acusado pelos judeus.
⁸ Pois quê? Julga-se coisa incrível entre vós que Deus ressuscite os mortos?
⁹ Bem tinha eu imaginado que contra o nome de Jesus Nazareno devia eu praticar muitos atos;
¹⁰ O que também fiz em Jerusalém. E, havendo recebido autorização dos principais sacerdotes, encerrei muitos dos santos nas prisões; e quando os matavam eu dava o meu voto contra eles.
¹¹ E, castigando-os muitas vezes por todas as sinagogas, os obriguei a blasfemar. E, enfurecido demasiadamente contra eles, até nas cidades estranhas os persegui.
¹² Sobre o que, indo então a Damasco, com poder e comissão dos principais sacerdotes,
¹³ Ao meio-dia, ó rei, vi no caminho uma luz do céu, que excedia o esplendor do sol, cuja claridade me envolveu a mim e aos que iam comigo.
¹⁴ E, caindo nós todos por terra, ouvi uma voz que me falava, e em língua hebraica dizia: Saulo, Saulo, por que me persegues? Dura coisa te é recalcitrar contra os aguilhões.
¹⁵ E disse eu: Quem és, Senhor? E ele respondeu: Eu sou Jesus, a quem tu persegues;
¹⁶ Mas levanta-te e põe-te sobre teus pés, porque te apareci por isto, para te pôr por ministro e testemunha tanto das coisas que tens visto como daquelas pelas quais te aparecerei ainda;
¹⁷ Livrando-te deste povo, e dos gentios, a quem agora te envio,
¹⁸ Para lhes abrires os olhos, e das trevas os converteres à luz, e do poder de Satanás a Deus; a fim de que recebam a remissão de pecados, e herança entre os que são santificados pela fé em mim.
¹⁹ Por isso, ó rei Agripa, não fui desobediente à visão celestial.
²⁰ Antes anunciei primeiramente aos que estão em Damasco e em Jerusalém, e por toda a terra da Judeia, e aos gentios, que se arrependessem e se convertessem a Deus, fazendo obras dignas de arrependimento.
²¹ Por causa disto os judeus lançaram mão de mim no templo, e procuraram matar-me.
²² Mas, alcançando socorro de Deus, ainda até ao dia de hoje permaneço dando testemunho tanto a pequenos como a grandes, não dizendo nada mais do que o que os profetas e Moisés disseram que devia acontecer,
²³ Isto é, que o Cristo devia padecer, e sendo o primeiro da ressurreição dentre os mortos, devia anunciar a luz a este povo e aos gentios.
²⁴ E, dizendo ele isto em sua defesa, disse Festo em alta voz: Estás louco, Paulo; as muitas letras te fazem delirar.
²⁵ Mas ele disse: Não deliro, ó potentíssimo Festo; antes digo palavras de verdade e de um são juízo.
²⁶ Porque o rei, diante de quem também falo com ousadia, sabe estas coisas, pois não creio que nada disto lhe é oculto; porque isto não se fez em qualquer canto.
²⁷ Crês tu nos profetas, ó rei Agripa? Bem sei que crês.
²⁸ E disse Agripa a Paulo: Por pouco me persuades a me fazer cristão!
²⁹ E disse Paulo: Prouvera a Deus que, ou por pouco ou por muito, não somente tu, mas também todos quantos hoje me estão ouvindo, se tornassem tais qual eu sou, exceto estas cadeias.
³⁰ E, dizendo ele isto, levantou-se o rei, o presidente, e Berenice, e os que com eles estavam assentados.
³¹ E, apartando-se dali falavam uns com os outros, dizendo: Este homem nada fez digno de morte ou de prisões.
³² E Agripa disse a Festo: Bem podia soltar-se este homem, se não houvera apelado para César. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Rei Agripa disse a Paulo após ouvir seu testemunho?",
                        opcoes: [
                            { numero: 1, texto: "Por pouco me queres persuadir a que me faça cristão", correta: true },
                            { numero: 2, texto: "Você é um homem louco", correta: false },
                            { numero: 3, texto: "Vou te soltar agora mesmo", correta: false },
                            { numero: 4, texto: "Nunca ouvi falar de Jesus", correta: false }
                        ],
                        explicacao: "Atos 26:28 - E disse Agripa a Paulo: Por pouco me queres persuadir a que me faça cristão.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "De acordo com Paulo, o que Jesus lhe disse no caminho de Damasco sobre o seu propósito?",
                        opcoes: [
                            { numero: 1, texto: "Para ele se tornar um soldado romano", correta: false },
                            { numero: 2, texto: "Para ele fugir para o deserto", correta: false },
                            { numero: 3, texto: "Para abrir os olhos aos gentios e convertê-los", correta: true },
                            { numero: 4, texto: "Para reconstruir o templo", correta: false }
                        ],
                        explicacao: "Atos 26:18 - Para lhes abrires os olhos, e das trevas os converteres à luz.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Paulo disse que aconteceu com ele no caminho de Damasco ao meio-dia?",
                        opcoes: [
                            { numero: 1, texto: "Viu uma luz do céu que excedia o esplendor do sol", correta: true },
                            { numero: 2, texto: "Ouviu um trovão muito forte", correta: false },
                            { numero: 3, texto: "Encontrou um grupo de anjos", correta: false },
                            { numero: 4, texto: "Houve um eclipse total", correta: false }
                        ],
                        explicacao: "Atos 26:13 - Vi no caminho uma luz do céu, que excedia o esplendor do sol.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        27: {
            titulo: "O Naufrágio",
            texto: ` ¹ E, como se determinou que havíamos de navegar para a Itália, entregaram Paulo, e alguns outros presos, a um centurião por nome Júlio, da coorte augusta.
² E, embarcando nós em um navio adramitino, prestes a navegar pelos lugares da costa da Ásia, partimos estando conosco Aristarco, macedônio, de Tessalônica.
³ E chegamos no dia seguinte a Sidom, e Júlio, tratando Paulo humanamente, lhe permitiu ir ver os amigos, para que cuidassem dele.
⁴ E, partindo dali, fomos navegando abaixo de Chipre, porque os ventos eram contrários.
⁵ E, tendo atravessado o mar, ao longo da Cilícia e Panfília, chegamos a Mirra, na Lícia.
⁶ E, achando ali o centurião um navio de Alexandria, que navegava para a Itália, nos fez embarcar nele.
⁷ E, como por muitos dias navegássemos vagarosamente, havendo chegado apenas defronte de Cnido, não nos permitindo o vento ir mais adiante, navegamos abaixo de Creta, junto de Salmone.
⁸ E, costeando-a dificilmente, chegamos a um lugar chamado Bons Portos, perto do qual estava a cidade de Laseia.
⁹ E, passado muito tempo, e sendo já perigosa a navegação, pois, também o jejum já tinha passado, Paulo os admoestava,
¹⁰ Dizendo-lhes: Senhores, vejo que a navegação há de ser incômoda, e com muito dano, não só para o navio e carga, mas também para as nossas vidas.
¹¹ Mas o centurião cria mais no piloto e no mestre, do que no que dizia Paulo.
¹² E, como aquele porto não era cômodo para invernar, os mais deles foram de parecer que se partisse dali para ver se podiam chegar a Fenice, que é um porto de Creta que olha para o lado do vento sudoeste e noroeste, e invernar ali.
¹³ E, soprando o sul brandamente, lhes pareceu terem já o que desejavam e, fazendo-se de vela, foram de muito perto costeando Creta.
¹⁴ Mas não muito depois deu nela um pé de vento, chamado Euroaquilão.
¹⁵ E, sendo o navio arrebatado, e não podendo navegar contra o vento, dando de mão a tudo, nos deixamos ir à toa.
¹⁶ E, correndo abaixo de uma pequena ilha chamada Clauda, apenas pudemos ganhar o batel.
¹⁷ E, levado este para cima, usaram de todos os meios, cingindo o navio; e, temendo darem à costa na Sirte, amainadas as velas, assim foram à toa.
¹⁸ E, andando nós agitados por uma veemente tempestade, no dia seguinte aliviaram o navio.
¹⁹ E ao terceiro dia nós mesmos, com as nossas próprias mãos, lançamos ao mar a armação do navio.
²⁰ E, não aparecendo, havia já muitos dias, nem sol nem estrelas, e caindo sobre nós uma não pequena tempestade, fugiu-nos toda a esperança de nos salvarmos.
²¹ E, havendo já muito que não se comia, então Paulo, pondo-se em pé no meio deles, disse: Fora, na verdade, razoável, ó senhores, ter-me ouvido a mim e não partir de Creta, e assim evitariam este incômodo e esta perda.
²² Mas agora vos admoesto a que tenhais bom ânimo, porque não se perderá a vida de nenhum de vós, mas somente o navio.
²³ Porque esta mesma noite o anjo de Deus, de quem eu sou, e a quem sirvo, esteve comigo,
²⁴ Dizendo: Paulo, não temas; importa que sejas apresentado a César, e eis que Deus te deu todos quantos navegam contigo.
²⁵ Portanto, ó senhores, tende bom ânimo; porque creio em Deus, que há de acontecer assim como a mim me foi dito.
²⁶ É, contudo, necessário irmos dar numa ilha.
²⁷ E, quando chegou a décima quarta noite, sendo impelidos de um e outro lado no mar Adriático, lá pela meia-noite suspeitaram os marinheiros que estavam próximos de alguma terra.
²⁸ E, lançando o prumo, acharam vinte braças; e, passando um pouco mais adiante, tornando a lançar o prumo, acharam quinze braças.
²⁹ E, temendo ir dar em alguns lugares rochosos, lançaram da popa quatro âncoras, desejando que viesse o dia.
³⁰ Procurando, porém, os marinheiros fugir do navio, e tendo já deitado o batel ao mar, como que querendo lançar as âncoras pela proa,
³¹ Disse Paulo ao centurião e aos soldados: Se estes não ficarem no navio, não podereis salvar-vos.
³² Então os soldados cortaram os cabos do batel, e o deixaram cair.
³³ E, entretanto que o dia vinha, Paulo exortava a todos a que comessem alguma coisa, dizendo: É já hoje o décimo quarto dia que esperais, e permaneceis sem comer, não havendo provado nada.
³⁴ Portanto, exorto-vos a que comais alguma coisa, pois é para a vossa saúde; porque nem um cabelo cairá da cabeça de qualquer de vós.
³⁵ E, havendo dito isto, tomando o pão, deu graças a Deus na presença de todos; e, partindo-o, começou a comer.
³⁶ E, tendo já todos bom ânimo, puseram-se também a comer.
³⁷ E éramos ao todo, no navio, duzentas e setenta e seis almas.
³⁸ E, refeitos com a comida, aliviaram o navio, lançando o trigo ao mar.
³⁹ E, sendo já dia, não conheceram a terra; enxergaram, porém, uma enseada que tinha praia, e consultaram-se sobre se deveriam encalhar nela o navio.
⁴⁰ E, levantando as âncoras, deixaram-no ir ao mar, largando também as amarras do leme; e, alçando a vela maior ao vento, dirigiram-se para a praia.
⁴¹ Dando, porém, num lugar de dois mares, encalharam ali o navio; e, fixa a proa, ficou imóvel, mas a popa abria-se com a força das ondas.
⁴² Então a ideia dos soldados foi que matassem os presos para que nenhum fugisse, escapando a nado.
⁴³ Mas o centurião, querendo salvar a Paulo, lhes estorvou este intento; e mandou que os que pudessem nadar se lançassem primeiro ao mar, e se salvassem em terra;
⁴⁴ E os demais, uns em tábuas e outros em coisas do navio. E assim aconteceu que todos chegaram à terra a salvo. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era o nome do vento tempestuoso que deu no navio?",
                        opcoes: [
                            { numero: 1, texto: "Euroaquilão", correta: true },
                            { numero: 2, texto: "Siroco", correta: false },
                            { numero: 3, texto: "Mistral", correta: false },
                            { numero: 4, texto: "Levante", correta: false }
                        ],
                        explicacao: "Atos 27:14 - ...levantou-se logo um vento tempestuoso, chamado Euroaquilão.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quantas pessoas estavam no navio durante o naufrágio?",
                        opcoes: [
                            { numero: 1, texto: "Cento e vinte", correta: false },
                            { numero: 2, texto: "Duascentas e setenta e seis", correta: true },
                            { numero: 3, texto: "Cinquenta", correta: false },
                            { numero: 4, texto: "Mil", correta: false }
                        ],
                        explicacao: "Atos 27:37 - E éramos ao todo, no navio, duzentas e setenta e seis almas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Paulo fez com o pão perante todos antes do navio se quebrar?",
                        opcoes: [
                            { numero: 1, texto: "Jogou ao mar", correta: false },
                            { numero: 2, texto: "Deu graças a Deus e começou a comer", correta: true },
                            { numero: 3, texto: "Escondeu para si", correta: false },
                            { numero: 4, texto: "Vendeu aos soldados", correta: false }
                        ],
                        explicacao: "Atos 27:35 - ...tomando o pão, deu graças a Deus na presença de todos; e, partindo-o, começou a comer.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        28: {
            titulo: "Paulo em Malta e em Roma",
            texto: ` ¹ E, havendo escapado, então souberam que a ilha se chamava Malta.
² E os bárbaros usaram conosco de não pouca humanidade; porque, acendendo uma grande fogueira, nos recolheram a todos por causa da chuva que caía, e por causa do frio.
³ E, havendo Paulo ajuntado uma quantidade de vides, e pondo-as no fogo, uma víbora, fugindo do calor, lhe acometeu a mão.
⁴ E os bárbaros, vendo-lhe a víbora pendurada na mão, diziam uns aos outros: Certamente este homem é homicida, visto como, escapando do mar, a justiça não o deixa viver.
⁵ Mas, sacudindo ele a víbora no fogo, não sofreu nenhum mal.
⁶ E eles esperavam que viesse a inchar ou a cair morto de repente; mas tendo esperado já muito, e vendo que nenhum incômodo lhe sobrevinha, mudando de parecer, diziam que era um deus.
⁷ E ali, próximo daquele lugar, havia umas herdades que pertenciam ao principal da ilha, por nome Públio, o qual nos recebeu e hospedou benignamente por três dias.
⁸ E aconteceu estar de cama enfermo de febre e disenteria o pai de Públio, que Paulo foi ver, e, havendo orado, pôs as mãos sobre ele, e o curou.
⁹ Feito, pois, isto, vieram também ter com ele os demais que na ilha tinham enfermidades, e sararam.
¹⁰ Os quais nos distinguiram também com muitas honras; e, havendo de navegar, nos proveram das coisas necessárias.
¹¹ E três meses depois partimos num navio de Alexandria que invernara na ilha, o qual tinha por insígnia Castor e Pólux.
¹² E, chegando a Siracusa, ficamos ali três dias.
¹³ De onde, indo costeando, viemos a Régio; e soprando, um dia depois, um vento do sul, chegamos no segundo dia a Potéoli.
¹⁴ Onde, achando alguns irmãos, nos rogaram que por sete dias ficássemos com eles; e depois nos dirigimos a Roma.
¹⁵ E de lá, ouvindo os irmãos novas de nós, nos saíram ao encontro à Praça de Ápio e às Três Vendas, e Paulo, vendo-os, deu graças a Deus e tomou ânimo.
¹⁶ E, logo que chegamos a Roma, o centurião entregou os presos ao capitão da guarda; mas a Paulo se lhe permitiu morar por conta própria, com o soldado que o guardava.
¹⁷ E aconteceu que, três dias depois, Paulo convocou os principais dos judeus e, juntos eles, lhes disse: Homens irmãos, não havendo eu feito nada contra o povo, ou contra os ritos paternos, vim contudo preso desde Jerusalém, entregue nas mãos dos romanos;
¹⁸ Os quais, havendo-me examinado, queriam soltar-me, por não haver em mim crime algum de morte.
¹⁹ Mas, opondo-se os judeus, foi-me forçoso apelar para César, não tendo, contudo, de que acusar a minha nação.
²⁰ Por esta causa vos chamei, para vos ver e falar; porque pela esperança de Israel estou com esta cadeia.
²¹ Então eles lhe disseram: Nós não recebemos acerca de ti carta alguma da Judeia, nem veio aqui algum dos irmãos, que nos anunciasse ou dissesse de ti mal algum.
²² No entanto bem quiséramos ouvir de ti o que sentes; porque, quanto a esta seita, notório nos é que em toda a parte se fala contra ela.
²³ E, havendo-lhe eles assinalado um dia, muitos foram ter com ele à pousada, aos quais declarava com bom testemunho o reino de Deus, e procurava persuadi-los à fé em Jesus, tanto pela lei de Moisés como pelos profetas, desde a manhã até à tarde.
²⁴ E alguns criam no que se dizia; mas outros não criam.
²⁵ E, como ficaram entre si discordes, despediram-se, dizendo Paulo esta palavra: Bem falou o Espírito Santo a nossos pais pelo profeta Isaías,
²⁶ Dizendo: Vai a este povo, e dize: De ouvido ouvireis, e de maneira nenhuma entendereis; e, vendo vereis, e de maneira nenhuma percebereis.
²⁷ Porquanto o coração deste povo está endurecido, e com os ouvidos ouviram pesadamente, e fecharam os olhos, para que nunca com os olhos vejam, nem com os ouvidos ouçam, nem do coração entendam, e se convertam, e eu os cure.
²⁸ Seja-vos, pois, notório que esta salvação de Deus é enviada aos gentios, e eles a ouvirão.
²⁹ E, havendo ele dito estas palavras, partiram os judeus, tendo entre si grande contenda.
³⁰ E Paulo ficou dois anos inteiros na sua própria habitação que alugara, e recebia todos quantos vinham vê-lo;
³¹ Pregando o reino de Deus, e ensinando com toda a liberdade as coisas pertencentes ao Senhor Jesus Cristo, sem impedimento algum. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que aconteceu com Paulo enquanto ele colhia gravetos em Malta?",
                        opcoes: [
                            { numero: 1, texto: "Uma víbora prendeu-se à sua mão", correta: true },
                            { numero: 2, texto: "Ele encontrou ouro", correta: false },
                            { numero: 3, texto: "Caiu em um poço", correta: false },
                            { numero: 4, texto: "Foi atacado por um leão", correta: false }
                        ],
                        explicacao: "Atos 28:3 - ...uma víbora, fugindo do calor, lhe acometeu a mão.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por quanto tempo Paulo permaneceu em sua própria casa alugada em Roma?",
                        opcoes: [
                            { numero: 1, texto: "Três meses", correta: false },
                            { numero: 2, texto: "Um ano", correta: false },
                            { numero: 3, texto: "Dois anos inteiros", correta: true },
                            { numero: 4, texto: "Quarenta dias", correta: false }
                        ],
                        explicacao: "Atos 28:30 - E Paulo ficou dois anos inteiros na sua própria habitação que alugara.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Paulo fazia enquanto estava preso em sua casa em Roma?",
                        opcoes: [
                            { numero: 1, texto: "Pregava o reino de Deus com toda a liberdade", correta: true },
                            { numero: 2, texto: "Trabalhava como escravo", correta: false },
                            { numero: 3, texto: "Ficava em silêncio absoluto", correta: false },
                            { numero: 4, texto: "Escrevia apenas sobre o mar", correta: false }
                        ],
                        explicacao: "Atos 28:31 - Pregando o reino de Deus... com toda a liberdade, sem impedimento algum.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};