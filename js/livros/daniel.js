const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const daniel = {
    nome: "Daniel",
    icone: "🦁",
    autor: "Daniel",
   // background: "./imagens/daniel_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "A Fidelidade de Daniel e Seus Amigos",
            texto: `¹ No ano terceiro do reinado de Jeoiaquim, rei de Judá, veio Nabucodonosor, rei de Babilônia, a Jerusalém, e a sitiou.
² E o Senhor entregou nas suas mãos a Jeoiaquim, rei de Judá, e uma parte dos utensílios da casa de Deus, e ele os levou para a terra de Sinar, para a casa do seu deus, e pôs os utensílios na casa do tesouro do seu deus.
³ E disse o rei a Aspenaz, chefe dos seus eunucos, que trouxesse alguns dos filhos de Israel, e da linhagem real e dos príncipes,
⁴ Jovens em quem não houvesse defeito algum, de boa aparência, e instruídos em toda a sabedoria, e doutos em ciência, e entendidos no conhecimento, e que tivessem habilidade para assistirem no palácio do rei, e que lhes ensinassem as letras e a língua dos caldeus.
⁵ E o rei lhes determinou a porção diária, das iguarias do rei, e do vinho que ele bebia, e que assim fossem mantidos por três anos, para que no fim destes pudessem estar diante do rei.
⁶ E entre eles se achavam, dos filhos de Judá, Daniel, Hananias, Misael e Azarias;
⁷ E o chefe dos eunucos lhes pôs outros nomes, a saber: a Daniel pôs o de Beltessazar, e a Hananias o de Sadraque, e a Misael o de Mesaque, e a Azarias o de Abednego.
⁸ E Daniel propôs no seu coração não se contaminar com a porção das iguarias do rei, nem com o vinho que ele bebia; portanto pediu ao chefe dos eunucos que lhe permitisse não se contaminar.
⁹ Ora, Deus fez com que Daniel achasse graça e misericórdia diante do chefe dos eunucos.
¹⁰ E disse o chefe dos eunucos a Daniel: Tenho medo do meu senhor, o rei, que determinou a vossa comida e a vossa bebida; pois por que veria ele os vossos rostos mais tristes do que os dos outros jovens da vossa idade? Assim porias em perigo a minha cabeça para com o rei.
¹¹ Então disse Daniel ao despenseiro a quem o chefe dos eunucos havia constituído sobre Daniel, Hananias, Misael e Azarias:
¹² Experimenta, peço-te, os teus servos dez dias, e que se nos deem legumes a comer, e água a beber.
¹³ Então se examine diante de ti a nossa aparência, e a aparência dos jovens que comem a porção das iguarias do rei; e, conforme vires, procederás para com os teus servos.
¹⁴ E ele consentiu isto, e os experimentou dez dias.
¹⁵ E, ao fim dos dez dias, apareceram os seus semblantes melhores, e eles estavam mais gordos de carne do que todos os jovens que comiam das iguarias do rei.
¹⁶ Assim o despenseiro tirou-lhes a porção das iguarias, e o vinho de que deviam beber, e lhes dava legumes.
¹⁷ Quanto a estes quatro jovens, Deus lhes deu o conhecimento e a inteligência em todas as letras, e sabedoria; mas a Daniel deu entendimento em toda a visão e sonhos.
¹⁸ E ao fim dos dias, em que o rei tinha falado que os trouxessem, o chefe dos eunucos os trouxe diante de Nabucodonosor.
¹⁹ E o rei falou com eles; e entre todos eles não foram achados outros tais como Daniel, Hananias, Misael e Azarias; portanto ficaram assistindo diante do rei.
²⁰ E em toda a matéria de sabedoria e de discernimento, sobre o que o rei lhes perguntou, os achou dez vezes mais doutos do que todos os magos astrólogos que havia em todo o seu reino.
²¹ E Daniel permaneceu até ao primeiro ano do rei Ciro.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual decisão Daniel tomou em seu coração?",
                        opcoes: [
                            { numero: 1, texto: "Fugir da Babilônia", correta: false },
                            { numero: 2, texto: "Não se contaminar com as iguarias do rei", correta: true },
                            { numero: 3, texto: "Aprender a língua dos caldeus", correta: false },
                            { numero: 4, texto: "Mudar seu nome", correta: false }
                        ],
                        explicacao: "Daniel 1:8 - E Daniel assentou no seu coração não se contaminar com a porção das iguarias do rei...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual foi a dieta que Daniel pediu para ser testada por dez dias?",
                        opcoes: [
                            { numero: 1, texto: "Pão e água", correta: false },
                            { numero: 2, texto: "Frutos e vinho", correta: false },
                            { numero: 3, texto: "Legumes e água", correta: true },
                            { numero: 4, texto: "Carne e mel", correta: false }
                        ],
                        explicacao: "Daniel 1:12 - Experimenta... dez dias; e que se nos deem legumes a comer e água a beber.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como o rei Nabucodonosor achou os quatro jovens em sabedoria?",
                        opcoes: [
                            { numero: 1, texto: "Dez vezes mais doutos que os magos", correta: true },
                            { numero: 2, texto: "Igual aos caldeus", correta: false },
                            { numero: 3, texto: "Um pouco acima da média", correta: false },
                            { numero: 4, texto: "Incapazes de entender visões", correta: false }
                        ],
                        explicacao: "Daniel 1:20 - ...os achou dez vezes mais doutos do que todos os magos e astrólogos...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "O Sonho de Nabucodonosor",
            texto: `¹ E no segundo ano do reinado de Nabucodonosor, Nabucodonosor teve sonhos; e o seu espírito se perturbou, e passou-se-lhe o sono.
² Então o rei mandou chamar os magos, os astrólogos, os encantadores e os caldeus, para que declarassem ao rei os seus sonhos; e eles vieram e se apresentaram diante do rei.
³ E o rei lhes disse: Tive um sonho; e para saber o sonho está perturbado o meu espírito.
⁴ E os caldeus disseram ao rei em aramaico: Ó rei, vive eternamente! Dize o sonho a teus servos, e daremos a interpretação.
⁵ Respondeu o rei, e disse aos caldeus: O assunto me tem escapado; se não me fizerdes saber o sonho e a sua interpretação, sereis despedaçados, e as vossas casas serão feitas um monturo;
⁶ Mas se vós me declarardes o sonho e a sua interpretação, recebereis de mim dádivas, recompensas e grande honra; portanto declarai-me o sonho e a sua interpretação.
⁷ Responderam segunda vez, e disseram: Diga o rei o sonho a seus servos, e daremos a sua interpretação.
⁸ Respondeu o rei, e disse: Percebo muito bem que vós quereis ganhar tempo; porque vedes que o assunto me tem escapado.
⁹ De modo que, se não me fizerdes saber o sonho, uma só sentença será a vossa; pois vós preparastes palavras mentirosas e perversas para as proferirdes na minha presença, até que se mude o tempo; portanto dizei-me o sonho, para que eu entenda que me podeis dar a sua interpretação.
¹⁰ Responderam os caldeus na presença do rei, e disseram: Não há ninguém sobre a terra que possa declarar a palavra ao rei; pois nenhum rei há, grande ou dominador, que requeira coisas semelhantes de algum mago, ou astrólogo, ou caldeu.
¹¹ Porque o assunto que o rei requer é difícil; e ninguém há que o possa declarar diante do rei, senão os deuses, cuja morada não é com a carne.
¹² Por isso o rei muito se irou e enfureceu; e ordenou que matassem a todos os sábios de Babilônia.
¹³ E saiu o decreto, segundo o qual deviam ser mortos os sábios; e buscaram a Daniel e aos seus companheiros, para que fossem mortos.
¹⁴ Então Daniel falou avisada e prudentemente a Arioque, capitão da guarda do rei, que tinha saído para matar os sábios de Babilônia.
¹⁵ Respondeu, e disse a Arioque, capitão do rei: Por que se apressa tanto o decreto da parte do rei? Então Arioque explicou o caso a Daniel.
¹⁶ E Daniel entrou; e pediu ao rei que lhe desse tempo, para que lhe pudesse dar a interpretação.
¹⁷ Então Daniel foi para a sua casa, e fez saber o caso a Hananias, Misael e Azarias, seus companheiros;
¹⁸ Para que pedissem misericórdia ao Deus do céu, sobre este mistério, a fim de que Daniel e seus companheiros não perecessem, juntamente com o restante dos sábios da Babilônia.
¹⁹ Então foi revelado o mistério a Daniel numa visão de noite; então Daniel louvou o Deus do céu.
²⁰ Falou Daniel, dizendo: Seja bendito o nome de Deus de eternidade a eternidade, porque dele são a sabedoria e a força;
²¹ E ele muda os tempos e as estações; ele remove os reis e estabelece os reis; ele dá sabedoria aos sábios e conhecimento aos entendidos.
²² Ele revela o profundo e o escondido; conhece o que está em trevas, e com ele mora a luz.
²³ Ó Deus de meus pais, eu te dou graças e te louvo, porque me deste sabedoria e força; e agora me fizeste saber o que te pedimos, porque nos fizeste saber este assunto do rei.
²⁴ Por isso Daniel foi ter com Arioque, ao qual o rei tinha constituído para matar os sábios de Babilônia; entrou, e disse-lhe assim: Não mates os sábios de Babilônia; introduze-me na presença do rei, e declararei ao rei a interpretação.
²⁵ Então Arioque depressa introduziu a Daniel na presença do rei, e disse-lhe assim: Achei um homem dentre os cativos de Judá, o qual fará saber ao rei a interpretação.
²⁶ Respondeu o rei, e disse a Daniel (cujo nome era Beltessazar): Podes tu fazer-me saber o sonho que tive e a sua interpretação?
²⁷ Respondeu Daniel na presença do rei, dizendo: O segredo que o rei requer, nem sábios, nem astrólogos, nem magos, nem adivinhos o podem declarar ao rei;
²⁸ Mas há um Deus no céu, o qual revela os mistérios; ele, pois, fez saber ao rei Nabucodonosor o que há de acontecer nos últimos dias; o teu sonho e as visões da tua cabeça que tiveste na tua cama são estes:
²⁹ Estando tu, ó rei, na tua cama, subiram os teus pensamentos, acerca do que há de ser depois disto. Aquele, pois, que revela os mistérios te fez saber o que há de ser.
³⁰ E a mim me foi revelado esse mistério, não porque haja em mim mais sabedoria que em todos os viventes, mas para que a interpretação se fizesse saber ao rei, e para que entendesses os pensamentos do teu coração.
³¹ Tu, ó rei, estavas vendo, e eis aqui uma grande estátua; esta estátua, que era imensa, cujo esplendor era excelente, e estava em pé diante de ti; e a sua aparência era terrível.
³² A cabeça daquela estátua era de ouro fino; o seu peito e os seus braços de prata; o seu ventre e as suas coxas de cobre;
³³ As pernas de ferro; os seus pés em parte de ferro e em parte de barro.
³⁴ Estavas vendo isto, quando uma pedra foi cortada, sem auxílio de mão, a qual feriu a estátua nos pés de ferro e de barro, e os esmiuçou.
³⁵ Então foi juntamente esmiuçado o ferro, o barro, o bronze, a prata e o ouro, os quais se fizeram como pragana das eiras do estio, e o vento os levou, e não se achou lugar algum para eles; mas a pedra, que feriu a estátua, se tornou grande monte, e encheu toda a terra.
³⁶ Este é o sonho; também a sua interpretação diremos na presença do rei.
³⁷ Tu, ó rei, és rei de reis; a quem o Deus do céu tem dado o reino, o poder, a força, e a glória.
³⁸ E onde quer que habitem os filhos de homens, na tua mão entregou os animais do campo, e as aves do céu, e fez que reinasse sobre todos eles; tu és a cabeça de ouro.
³⁹ E depois de ti se levantará outro reino, inferior ao teu; e um terceiro reino, de bronze, o qual dominará sobre toda a terra.
⁴⁰ E o quarto reino será forte como ferro; pois, como o ferro, esmiúça e quebra tudo; como o ferro que quebra todas as coisas, assim ele esmiuçará e fará em pedaços.
⁴¹ E, quanto ao que viste dos pés e dos dedos, em parte de barro de oleiro, e em parte de ferro, isso será um reino dividido; contudo haverá nele alguma coisa da firmeza do ferro, pois viste o ferro misturado com barro de lodo.
⁴² E como os dedos dos pés eram em parte de ferro e em parte de barro, assim por uma parte o reino será forte, e por outra será frágil.
⁴³ Quanto ao que viste do ferro misturado com barro de lodo, misturar-se-ão com semente humana, mas não se ligarão um ao outro, assim como o ferro não se mistura com o barro.
⁴⁴ Mas, nos dias desses reis, o Deus do céu levantará um reino que não será jamais destruído; e este reino não passará a outro povo; esmiuçará e consumirá todos esses reinos, mas ele mesmo subsistirá para sempre,
⁴⁵ Da maneira que viste que do monte foi cortada uma pedra, sem auxílio de mãos, e ela esmiuçou o ferro, o bronze, o barro, a prata e o ouro; o grande Deus fez saber ao rei o que há de ser depois disto. Certo é o sonho, e fiel a sua interpretação.
⁴⁶ Então o rei Nabucodonosor caiu sobre a sua face, e adorou a Daniel, e ordenou que lhe oferecessem uma oblação e perfumes suaves.
⁴⁷ Respondeu o rei a Daniel, e disse: Certamente o vosso Deus é Deus dos deuses, e o Senhor dos reis e revelador de mistérios, pois pudeste revelar este mistério.
⁴⁸ Então o rei engrandeceu a Daniel, e lhe deu muitas e grandes dádivas, e o pôs por governador de toda a província de Babilônia, como também o fez chefe dos governadores sobre todos os sábios de Babilônia.
⁴⁹ E pediu Daniel ao rei, e constituiu ele sobre os negócios da província de Babilônia a Sadraque, Mesaque e Abednego; mas Daniel permaneceu na porta do rei.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o rei exigiu que os sábios fizessem para não serem mortos?",
                        opcoes: [
                            { numero: 1, texto: "Construíssem um templo", correta: false },
                            { numero: 2, texto: "Fizessem um sacrifício", correta: false },
                            { numero: 3, texto: "Contassem o sonho e a sua interpretação", correta: true },
                            { numero: 4, texto: "Orassem ao Deus de Israel", correta: false }
                        ],
                        explicacao: "Daniel 2:5 - ...se me não fizerdes saber o sonho e a sua interpretação, sereis despedaçados.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "De que material era feita a cabeça da estátua no sonho?",
                        opcoes: [
                            { numero: 1, texto: "Ouro", correta: true },
                            { numero: 2, texto: "Prata", correta: false },
                            { numero: 3, texto: "Bronze", correta: false },
                            { numero: 4, texto: "Ferro", correta: false }
                        ],
                        explicacao: "Daniel 2:32 - A cabeça daquela estátua era de ouro fino...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que destruiu a estátua no sonho do rei?",
                        opcoes: [
                            { numero: 1, texto: "Um terremoto", correta: false },
                            { numero: 2, texto: "Uma pedra cortada sem mãos", correta: true },
                            { numero: 3, texto: "Um incêndio", correta: false },
                            { numero: 4, texto: "O vento do deserto", correta: false }
                        ],
                        explicacao: "Daniel 2:34 - Estavas vendo isto, quando uma pedra foi cortada, sem mãos, a qual feriu a estátua nos pés...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "A Fornalha de Fogo Ardente",
            texto:`¹ O rei Nabucodonosor fez uma estátua de ouro, cuja altura era de sessenta côvados, e a sua largura de seis côvados; levantou-a no campo de Dura, na província de Babilônia.
² Então o rei Nabucodonosor mandou reunir os príncipes, os prefeitos, os governadores, os conselheiros, os tesoureiros, os juízes, os capitães, e todos os oficiais das províncias, para que viessem à consagração da estátua que o rei Nabucodonosor tinha levantado.
³ Então se reuniram os príncipes, os prefeitos e governadores, os capitães, os juízes, os tesoureiros, os conselheiros, e todos os oficiais das províncias, à consagração da estátua que o rei Nabucodonosor tinha levantado; e estavam em pé diante da imagem que Nabucodonosor tinha levantado.
⁴ E o arauto apregoava em alta voz: Ordena-se a vós, ó povos, nações e línguas:
⁵ Quando ouvirdes o som da trombeta, da flauta, da harpa, da sambuca, do saltério, da gaita de foles, e de toda a espécie de música, prostrar-vos-eis, e adorareis a estátua de ouro que o rei Nabucodonosor tem levantado.
⁶ E qualquer que não se prostrar e não a adorar, será na mesma hora lançado dentro da fornalha de fogo ardente.
⁷ Portanto, no mesmo instante em que todos os povos ouviram o som da trombeta, da flauta, da harpa, da sambuca, do saltério e de toda a espécie de música, prostraram-se todos os povos, nações e línguas, e adoraram a estátua de ouro que o rei Nabucodonosor tinha levantado.
⁸ Por isso, no mesmo instante chegaram perto alguns caldeus, e acusaram os judeus.
⁹ E responderam, dizendo ao rei Nabucodonosor: Ó rei, vive eternamente!
¹⁰ Tu, ó rei, fizeste um decreto, pelo qual todo homem que ouvisse o som da trombeta, da flauta, da harpa, da sambuca, do saltério, e da gaita de foles, e de toda a espécie de música, se prostrasse e adorasse a estátua de ouro;
¹¹ E, qualquer que não se prostrasse e adorasse, seria lançado dentro da fornalha de fogo ardente.
¹² Há uns homens judeus, os quais constituíste sobre os negócios da província de Babilônia: Sadraque, Mesaque e Abednego; estes homens, ó rei, não fizeram caso de ti; a teus deuses não servem, nem adoram a estátua de ouro que levantaste.
¹³ Então Nabucodonosor, com ira e furor, mandou trazer a Sadraque, Mesaque e Abednego. E trouxeram a estes homens perante o rei.
¹⁴ Falou Nabucodonosor, e lhes disse: É de propósito, ó Sadraque, Mesaque e Abednego, que vós não servis a meus deuses nem adorais a estátua de ouro que levantei?
¹⁵ Agora, pois, se estais prontos, quando ouvirdes o som da trombeta, da flauta, da harpa, da sambuca, do saltério, da gaita de foles, e de toda a espécie de música, para vos prostrardes e adorardes a estátua que fiz, bom é; mas, se não a adorardes, sereis lançados, na mesma hora, dentro da fornalha de fogo ardente. E quem é o Deus que vos poderá livrar das minhas mãos?
¹⁶ Responderam Sadraque, Mesaque e Abednego, e disseram ao rei Nabucodonosor: Não necessitamos de te responder sobre este assunto.
¹⁷ Eis que o nosso Deus, a quem nós servimos, é que nos pode livrar; ele nos livrará da fornalha de fogo ardente, e da tua mão, ó rei.
¹⁸ E, se não, fica sabendo ó rei, que não serviremos a teus deuses nem adoraremos a estátua de ouro que levantaste.
¹⁹ Então Nabucodonosor se encheu de furor, e mudou-se o aspecto do seu semblante contra Sadraque, Mesaque e Abednego; falou, e ordenou que a fornalha se aquecesse sete vezes mais do que se costumava aquecer.
²⁰ E ordenou aos homens mais poderosos, que estavam no seu exército, que atassem a Sadraque, Mesaque e Abednego, para lançá-los na fornalha de fogo ardente.
²¹ Então estes homens foram atados, vestidos com as suas capas, suas túnicas, e seus chapéus, e demais roupas, e foram lançados dentro da fornalha de fogo ardente.
²² E, porque a palavra do rei era urgente, e a fornalha estava sobremaneira quente, a chama do fogo matou aqueles homens que carregaram a Sadraque, Mesaque, e Abednego.
²³ E estes três homens, Sadraque, Mesaque e Abednego, caíram atados dentro da fornalha de fogo ardente.
²⁴ Então o rei Nabucodonosor se espantou, e se levantou depressa; falou, dizendo aos seus conselheiros: Não lançamos nós, dentro do fogo, três homens atados? Responderam e disseram ao rei: É verdade, ó rei.
²⁵ Respondeu, dizendo: Eu, porém, vejo quatro homens soltos, que andam passeando dentro do fogo, sem sofrer nenhum dano; e o aspecto do quarto é semelhante ao Filho de Deus.
²⁶ Então chegando-se Nabucodonosor à porta da fornalha de fogo ardente, falou, dizendo: Sadraque, Mesaque e Abednego, servos do Deus Altíssimo, saí e vinde! Então Sadraque, Mesaque e Abednego saíram do meio do fogo.
²⁷ E reuniram-se os príncipes, os capitães, os governadores e os conselheiros do rei e, contemplando estes homens, viram que o fogo não tinha tido poder algum sobre os seus corpos; nem um só cabelo da sua cabeça se tinha queimado, nem as suas capas se mudaram, nem cheiro de fogo tinha passado sobre eles.
²⁸ Falou Nabucodonosor, dizendo: Bendito seja o Deus de Sadraque, Mesaque e Abednego, que enviou o seu anjo, e livrou os seus servos, que confiaram nele, pois violaram a palavra do rei, preferindo entregar os seus corpos, para que não servissem nem adorassem algum outro deus, senão o seu Deus.
²⁹ Por mim, pois, é feito um decreto, pelo qual todo o povo, e nação e língua que disser blasfêmia contra o Deus de Sadraque, Mesaque e Abednego, seja despedaçado, e as suas casas sejam feitas um monturo; porquanto não há outro Deus que possa livrar como este.
³⁰ Então o rei fez prosperar a Sadraque, Mesaque e Abednego, na província de Babilônia.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era o sinal para que todos se prostrassem diante da estátua?",
                        opcoes: [
                            { numero: 1, texto: "O pôr do sol", correta: false },
                            { numero: 2, texto: "O som da buzina, pífaro, harpa e outros instrumentos", correta: true },
                            { numero: 3, texto: "Um grito do rei", correta: false },
                            { numero: 4, texto: "O toque de um sino", correta: false }
                        ],
                        explicacao: "Daniel 3:5 - Quando ouvirdes o som da buzina, do pífaro, da harpa... prostrar-vos-eis...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quantos homens o rei viu passeando dentro do fogo?",
                        opcoes: [
                            { numero: 1, texto: "Três", correta: false },
                            { numero: 2, texto: "Dois", correta: false },
                            { numero: 3, texto: "Cinco", correta: false },
                            { numero: 4, texto: "Quatro", correta: true }
                        ],
                        explicacao: "Daniel 3:25 - ...Eu vejo quatro homens soltos, que andam passeando dentro do fogo...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Com quem o rei comparou o aspecto do quarto homem na fornalha?",
                        opcoes: [
                            { numero: 1, texto: "Um anjo do palácio", correta: false },
                            { numero: 2, texto: "O filho de Deus", correta: true },
                            { numero: 3, texto: "Um gigante", correta: false },
                            { numero: 4, texto: "Um espírito da Babilônia", correta: false }
                        ],
                        explicacao: "Daniel 3:25 - ...e o aspecto do quarto é semelhante ao filho de Deus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "A Humilhação de Nabucodonosor",
            texto: ` ¹ Nabucodonosor rei, a todos os povos, nações e línguas, que moram em toda a terra: Paz vos seja multiplicada.
² Pareceu-me bem fazer conhecidos os sinais e maravilhas que Deus, o Altíssimo, tem feito para comigo.
³ Quão grandes são os seus sinais, e quão poderosas as suas maravilhas! O seu reino é um reino sempiterno, e o seu domínio de geração em geração.
⁴ Eu, Nabucodonosor, estava sossegado em minha casa, e próspero no meu palácio.
⁵ Tive um sonho, que me espantou; e estando eu na minha cama, as imaginações e as visões da minha cabeça me turbaram.
⁶ Por isso expedi um decreto, para que fossem introduzidos à minha presença todos os sábios de Babilônia, para que me fizessem saber a interpretação do sonho.
⁷ Então entraram os magos, os astrólogos, os caldeus e os adivinhadores, e eu contei o sonho diante deles; mas não me fizeram saber a sua interpretação.
⁸ Mas por fim entrou na minha presença Daniel, cujo nome é Beltessazar, segundo o nome do meu deus, e no qual há o espírito dos deuses santos; e eu lhe contei o sonho, dizendo:
⁹ Beltessazar, mestre dos magos, pois eu sei que há em ti o espírito dos deuses santos, e nenhum mistério te é difícil, dize-me as visões do meu sonho que tive e a sua interpretação.
¹⁰ Eis, pois, as visões da minha cabeça, estando eu na minha cama: Eu estava assim olhando, e vi uma árvore no meio da terra, cuja altura era grande;
¹¹ Crescia esta árvore, e se fazia forte, de maneira que a sua altura chegava até ao céu; e era vista até aos confins da terra.
¹² A sua folhagem era formosa, e o seu fruto abundante, e havia nela sustento para todos; debaixo dela os animais do campo achavam sombra, e as aves do céu faziam morada nos seus ramos, e toda a carne se mantinha dela.
¹³ Estava vendo isso nas visões da minha cabeça, estando eu na minha cama; e eis que um vigia, um santo, descia do céu,
¹⁴ Clamando fortemente, e dizendo assim: Derrubai a árvore, e cortai-lhe os ramos, sacudi as suas folhas, espalhai o seu fruto; afugentem-se os animais de debaixo dela, e as aves dos seus ramos.
¹⁵ Mas deixai na terra o tronco com as suas raízes, atada com cadeias de ferro e de bronze, na erva do campo; e seja molhado do orvalho do céu, e seja a sua porção com os animais na erva da terra;
¹⁶ Seja mudado o seu coração, para que não seja mais coração de homem, e lhe seja dado coração de animal; e passem sobre ele sete tempos.
¹⁷ Esta sentença é por decreto dos vigias, e esta ordem por mandado dos santos, a fim de que conheçam os viventes que o Altíssimo tem domínio sobre o reino dos homens, e o dá a quem quer, e até ao mais humilde dos homens constitui sobre ele.
¹⁸ Este sonho eu, rei Nabucodonosor vi. Tu, pois, Beltessazar, dize a interpretação, porque todos os sábios do meu reino não puderam fazer-me saber a sua interpretação, mas tu podes; pois há em ti o espírito dos deuses santos.
¹⁹ Então Daniel, cujo nome era Beltessazar, esteve atônito por uma hora, e os seus pensamentos o turbavam; falou, pois, o rei, dizendo: Beltessazar, não te espante o sonho, nem a sua interpretação. Respondeu Beltessazar, dizendo: Senhor meu, seja o sonho contra os que te têm ódio, e a sua interpretação aos teus inimigos.
²⁰ A árvore que viste, que cresceu, e se fez forte, cuja altura chegava até ao céu, e que foi vista por toda a terra;
²¹ Cujas folhas eram formosas, e o seu fruto abundante, e em que para todos havia sustento, debaixo da qual moravam os animais do campo, e em cujos ramos habitavam as aves do céu;
²² És tu, ó rei, que cresceste, e te fizeste forte; a tua grandeza cresceu, e chegou até ao céu, e o teu domínio até à extremidade da terra.
²³ E quanto ao que viu o rei, um vigia, um santo, que descia do céu, e dizia: Cortai a árvore, e destruí-a, mas o tronco com as suas raízes deixai na terra, e atada com cadeias de ferro e de bronze, na erva do campo; e seja molhado do orvalho do céu, e a sua porção seja com os animais do campo, até que passem sobre ele sete tempos;
²⁴ Esta é a interpretação, ó rei; e este é o decreto do Altíssimo, que virá sobre o rei, meu senhor:
²⁵ Serás tirado dentre os homens, e a tua morada será com os animais do campo, e te farão comer erva como os bois, e serás molhado do orvalho do céu; e passar-se-ão sete tempos por cima de ti; até que conheças que o Altíssimo tem domínio sobre o reino dos homens, e o dá a quem quer.
²⁶ E quanto ao que foi falado, que deixassem o tronco com as raízes da árvore, o teu reino voltará para ti, depois que tiveres conhecido que o céu reina.
²⁷ Portanto, ó rei, aceita o meu conselho, e põe fim aos teus pecados, praticando a justiça, e às tuas iniquidades, usando de misericórdia com os pobres, pois, talvez se prolongue a tua tranquilidade.
²⁸ Todas estas coisas vieram sobre o rei Nabucodonosor.
²⁹ Ao fim de doze meses, quando passeava no palácio real de Babilônia,
³⁰ Falou o rei, dizendo: Não é esta a grande Babilônia que eu edifiquei para a casa real, com a força do meu poder, e para glória da minha magnificência?
³¹ Ainda estava a palavra na boca do rei, quando caiu uma voz do céu: A ti se diz, ó rei Nabucodonosor: Passou de ti o reino.
³² E serás tirado dentre os homens, e a tua morada será com os animais do campo; far-te-ão comer erva como os bois, e passar-se-ão sete tempos sobre ti, até que conheças que o Altíssimo domina sobre o reino dos homens, e o dá a quem quer.
³³ Na mesma hora se cumpriu a palavra sobre Nabucodonosor, e foi tirado dentre os homens, e comia erva como os bois, e o seu corpo foi molhado do orvalho do céu, até que lhe cresceu pelo, como as penas da águia, e as suas unhas como as das aves.
³⁴ Mas ao fim daqueles dias eu, Nabucodonosor, levantei os meus olhos ao céu, e tornou-me a vir o entendimento, e eu bendisse o Altíssimo, e louvei e glorifiquei ao que vive para sempre, cujo domínio é um domínio sempiterno, e cujo reino é de geração em geração.
³⁵ E todos os moradores da terra são reputados em nada, e segundo a sua vontade ele opera com o exército do céu e os moradores da terra; não há quem possa estorvar a sua mão, e lhe diga: Que fazes?
³⁶ No mesmo tempo tornou a mim o meu entendimento, e para a dignidade do meu reino tornou-me a vir a minha majestade e o meu resplendor; e buscaram-me os meus conselheiros e os meus senhores; e fui restabelecido no meu reino, e a minha glória foi aumentada.
³⁷ Agora, pois, eu, Nabucodonosor, louvo, exalço e glorifico ao Rei do céu; porque todas as suas obras são verdade, e os seus caminhos juízo, e pode humilhar aos que andam na soberba.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "No sonho da árvore, o que foi ordenado que fizessem com ela?",
                        opcoes: [
                            { numero: 1, texto: "Que a regassem mais", correta: false },
                            { numero: 2, texto: "Que a derrubassem, mas deixassem o tronco com as raízes", correta: true },
                            { numero: 3, texto: "Que a queimassem completamente", correta: false },
                            { numero: 4, texto: "Que mudassem seus frutos", correta: false }
                        ],
                        explicacao: "Daniel 4:14-15 - Derrubai a árvore... Mas deixai o tronco com as suas raízes na terra...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por quanto tempo o rei Nabucodonosor viveu como os animais do campo?",
                        opcoes: [
                            { numero: 1, texto: "Sete dias", correta: false },
                            { numero: 2, texto: "Um ano", correta: false },
                            { numero: 3, texto: "Sete tempos", correta: true },
                            { numero: 4, texto: "Dez meses", correta: false }
                        ],
                        explicacao: "Daniel 4:23 - ...até que passem sobre ele sete tempos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o rei fazia quando sua razão lhe foi tirada?",
                        opcoes: [
                            { numero: 1, texto: "Comia erva como os bois", correta: true },
                            { numero: 2, texto: "Limpava o templo", correta: false },
                            { numero: 3, texto: "Dormia no telhado", correta: false },
                            { numero: 4, texto: "Gritava pelos sábios", correta: false }
                        ],
                        explicacao: "Daniel 4:33 - ...e comia erva como os bois, e o seu corpo foi molhado do orvalho do céu...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "A Escrita na Parede",
            texto: ` 1 O rei Belsazar deu um grande banquete a mil dos seus senhores, e bebeu vinho na presença dos mil.
2 Havendo Belsazar provado o vinho, mandou trazer os vasos de ouro e de prata, que Nabucodonosor, seu pai, tinha tirado do templo que estava em Jerusalém, para que bebessem neles o rei, os seus príncipes, as suas mulheres e concubinas.
3 Então trouxeram os vasos de ouro, que foram tirados do templo da casa de Deus, que estava em Jerusalém, e beberam neles o rei, os seus príncipes, as suas mulheres e concubinas.
4 Beberam o vinho, e deram louvores aos deuses de ouro, de prata, de bronze, de ferro, de madeira, e de pedra.
5 Na mesma hora apareceram uns dedos de mão de homem, e escreviam, defronte do castiçal, na caiadura da parede do palácio real; e o rei via a parte da mão que estava escrevendo.
6 Mudou-se então o semblante do rei, e os seus pensamentos o turbaram; as juntas dos seus lombos se relaxaram, e os seus joelhos batiam um no outro.
7 E gritou o rei com força, que se introduzissem os astrólogos, os caldeus e os adivinhadores; e falou o rei, dizendo aos sábios de Babilônia: Qualquer que ler este escrito, e me declarar a sua interpretação, será vestido de púrpura, e trará uma cadeia de ouro ao pescoço e, no reino, será o terceiro governante.
8 Então entraram todos os sábios do rei; mas não puderam ler o escrito, nem fazer saber ao rei a sua interpretação.
9 Então o rei Belsazar perturbou-se muito, e mudou-se-lhe o semblante; e os seus senhores estavam sobressaltados.
10 A rainha, por causa das palavras do rei e dos seus senhores, entrou na casa do banquete, e respondeu, dizendo: Ó rei, vive para sempre! Não te perturbem os teus pensamentos, nem se mude o teu semblante.
11 Há no teu reino um homem, no qual há o espírito dos deuses santos; e nos dias de teu pai se achou nele luz, e inteligência, e sabedoria, como a sabedoria dos deuses; e teu pai, o rei Nabucodonosor, sim, teu pai, o rei, o constituiu mestre dos magos, dos astrólogos, dos caldeus e dos adivinhadores;
12 Porquanto se achou neste Daniel um espírito excelente, e conhecimento, e entendimento, interpretando sonhos e explicando enigmas, e resolvendo dúvidas, ao qual o rei pôs o nome de Beltessazar. Chame-se, pois, agora Daniel, e ele dará a interpretação.
13 Então Daniel foi introduzido à presença do rei. Falou o rei, dizendo a Daniel: És tu aquele Daniel, um dos filhos dos cativos de Judá, que o rei, meu pai, trouxe de Judá?
14 Tenho ouvido dizer a teu respeito que o espírito dos deuses está em ti, e que em ti se acham a luz, e o entendimento e a excelente sabedoria.
15 Agora mesmo foram introduzidos à minha presença os sábios e os astrólogos, para lerem este escrito, e me fazerem saber a sua interpretação; mas não puderam dar a interpretação destas palavras.
16 Eu, porém, tenho ouvido dizer de ti que podes dar interpretação e resolver dúvidas. Agora, se puderes ler este escrito, e fazer-me saber a sua interpretação, serás vestido de púrpura, e terás cadeia de ouro ao pescoço e no reino serás o terceiro governante.
17 Então respondeu Daniel, e disse na presença do rei: As tuas dádivas fiquem contigo, e dá os teus prêmios a outro; contudo lerei ao rei o escrito, e far-lhe-ei saber a interpretação.
18 Ó rei! Deus, o Altíssimo, deu a Nabucodonosor, teu pai, o reino, e a grandeza, e a glória, e a majestade.
19 E por causa da grandeza, que lhe deu, todos os povos, nações e línguas tremiam e temiam diante dele; a quem queria matava, e a quem queria conservava em vida; e a quem queria engrandecia, e a quem queria abatia.
20 Mas quando o seu coração se exaltou, e o seu espírito se endureceu em soberba, foi derrubado do seu trono real, e passou dele a sua glória.
21 E foi tirado dentre os filhos dos homens, e o seu coração foi feito semelhante ao dos animais, e a sua morada foi com os jumentos monteses; fizeram-no comer a erva como os bois, e do orvalho do céu foi molhado o seu corpo, até que conheceu que Deus, o Altíssimo, tem domínio sobre o reino dos homens, e a quem quer constitui sobre ele.
22 E tu, Belsazar, que és seu filho, não humilhaste o teu coração, ainda que soubeste tudo isto.
23 E te levantaste contra o Senhor do céu, pois foram trazidos à tua presença os vasos da casa dele, e tu, os teus senhores, as tuas mulheres e as tuas concubinas, bebestes vinho neles; além disso, deste louvores aos deuses de prata, de ouro, de bronze, de ferro, de madeira e de pedra, que não veem, não ouvem, nem sabem; mas a Deus, em cuja mão está a tua vida, e de quem são todos os teus caminhos, a ele não glorificaste.
24 Então dele foi enviada aquela parte da mão, que escreveu este escrito.
25 Este, pois, é o escrito que se escreveu: mene, mene, tequel, ufarsim.
26 Esta é a interpretação daquilo: mene: Contou Deus o teu reino, e o acabou.
27 tequel: Pesado foste na balança, e foste achado em falta.
28 peres: Dividido foi o teu reino, e dado aos medos e aos persas.
29 Então mandou Belsazar que vestissem a Daniel de púrpura, e que lhe pusessem uma cadeia de ouro ao pescoço, e proclamassem a respeito dele que havia de ser o terceiro no governo do seu reino.
30 Naquela noite foi morto Belsazar, rei dos caldeus.
31 E Dario, o medo, ocupou o reino, sendo da idade de sessenta e dois anos.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quais utensílios Belsazar usou profanamente em seu banquete?",
                        opcoes: [
                            { numero: 1, texto: "Os vasos de ouro e prata do templo de Jerusalém", correta: true },
                            { numero: 2, texto: "As taças de bronze da Pérsia", correta: false },
                            { numero: 3, texto: "Os pratos de barro dos pobres", correta: false },
                            { numero: 4, texto: "O trono de seu pai", correta: false }
                        ],
                        explicacao: "Daniel 5:2 - ...mandou trazer os vasos de ouro e de prata que Nabucodonosor... tinha tirado do templo...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que apareceu e escreveu na parede do palácio?",
                        opcoes: [
                            { numero: 1, texto: "Uma sombra", correta: false },
                            { numero: 2, texto: "Um anjo com espada", correta: false },
                            { numero: 3, texto: "Dedos de mão de homem", correta: true },
                            { numero: 4, texto: "Uma labareda de fogo", correta: false }
                        ],
                        explicacao: "Daniel 5:5 - Na mesma hora apareceram uns dedos de mão de homem, e escreviam...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual era o significado da palavra TEQUEL na interpretação de Daniel?",
                        opcoes: [
                            { numero: 1, texto: "Contou Deus o teu reino", correta: false },
                            { numero: 2, texto: "Pesado foste na balança, e foste achado em falta", correta: true },
                            { numero: 3, texto: "Dividido foi o teu reino", correta: false },
                            { numero: 4, texto: "Foste ungido rei", correta: false }
                        ],
                        explicacao: "Daniel 5:27 - TEQUEL: Pesado foste na balança, e foste achado em falta.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },

        6: {
            titulo: "Daniel na Cova dos Leões",
            texto: `¹ E pareceu bem a Dario constituir sobre o reino cento e vinte príncipes, que estivessem sobre todo o reino;
² E sobre eles três presidentes, dos quais Daniel era um, aos quais estes príncipes dessem conta, para que o rei não sofresse dano.
³ Então o mesmo Daniel sobrepujou a estes presidentes e príncipes; porque nele havia um espírito excelente; e o rei pensava constituí-lo sobre todo o reino.
⁴ Então os presidentes e os príncipes procuravam achar ocasião contra Daniel a respeito do reino; mas não podiam achar ocasião ou culpa alguma; porque ele era fiel, e não se achava nele nenhum erro nem culpa.
⁵ Então estes homens disseram: Nunca acharemos ocasião alguma contra este Daniel, se não a acharmos contra ele na lei do seu Deus.
⁶ Então estes presidentes e príncipes foram juntos ao rei, e disseram-lhe assim: Ó rei Dario, vive para sempre!
⁷ Todos os presidentes do reino, os capitães e príncipes, conselheiros e governadores, concordaram em promulgar um edito real e confirmar a proibição que qualquer que, por espaço de trinta dias, fizer uma petição a qualquer deus, ou a qualquer homem, e não a ti, ó rei, seja lançado na cova dos leões.
⁸ Agora, pois, ó rei, confirma a proibição, e assina o edito, para que não seja mudado, conforme a lei dos medos e dos persas, que não se pode revogar.
⁹ Por esta razão o rei Dario assinou o edito e a proibição.
¹⁰ Daniel, pois, quando soube que o edito estava assinado, entrou em sua casa (ora havia no seu quarto janelas abertas do lado de Jerusalém), e três vezes no dia se punha de joelhos, e orava, e dava graças diante do seu Deus, como também antes costumava fazer.
¹¹ Então aqueles homens foram juntos, e acharam a Daniel orando e suplicando diante do seu Deus.
¹² Então se apresentaram ao rei e, a respeito do edito real, disseram-lhe: Porventura não assinaste o edito, pelo qual todo o homem que fizesse uma petição a qualquer deus, ou a qualquer homem, por espaço de trinta dias, e não a ti, ó rei, fosse lançado na cova dos leões? Respondeu o rei, dizendo: Esta palavra é certa, conforme a lei dos medos e dos persas, que não se pode revogar.
¹³ Então responderam ao rei, dizendo-lhe: Daniel, que é dos filhos dos cativos de Judá, não tem feito caso de ti, ó rei, nem do edito que assinaste, antes três vezes por dia faz a sua oração.
¹⁴ Ouvindo então o rei essas palavras, ficou muito penalizado, e a favor de Daniel propôs dentro do seu coração livrá-lo; e até ao pôr do sol trabalhou para salvá-lo.
¹⁵ Então aqueles homens foram juntos ao rei, e disseram-lhe: Sabe, ó rei, que é lei dos medos e dos persas que nenhum edito ou decreto, que o rei estabeleça, se pode mudar.
¹⁶ Então o rei ordenou que trouxessem a Daniel, e lançaram-no na cova dos leões. E, falando o rei, disse a Daniel: O teu Deus, a quem tu continuamente serves, ele te livrará.
¹⁷ E foi trazida uma pedra e posta sobre a boca da cova; e o rei a selou com o seu anel e com o anel dos seus senhores, para que não se mudasse a sentença acerca de Daniel.
¹⁸ Então o rei se dirigiu para o seu palácio, e passou a noite em jejum, e não deixou trazer à sua presença instrumentos de música; e fugiu dele o sono.
¹⁹ Pela manhã, ao romper do dia, levantou-se o rei, e foi com pressa à cova dos leões.
²⁰ E, chegando-se à cova, chamou por Daniel com voz triste; e disse o rei a Daniel: Daniel, servo do Deus vivo, dar-se-ia o caso que o teu Deus, a quem tu continuamente serves, tenha podido livrar-te dos leões?
²¹ Então Daniel falou ao rei: Ó rei, vive para sempre!
²² O meu Deus enviou o seu anjo, e fechou a boca dos leões, para que não me fizessem dano, porque foi achada em mim inocência diante dele; e também contra ti, ó rei, não tenho cometido delito algum.
²³ Então o rei muito se alegrou em si mesmo, e mandou tirar a Daniel da cova. Assim foi tirado Daniel da cova, e nenhum dano se achou nele, porque crera no seu Deus.
²⁴ E ordenou o rei, e foram trazidos aqueles homens que tinham acusado a Daniel, e foram lançados na cova dos leões, eles, seus filhos e suas mulheres; e ainda não tinham chegado ao fundo da cova quando os leões se apoderaram deles, e lhes esmigalharam todos os ossos.
²⁵ Então o rei Dario escreveu a todos os povos, nações e línguas que moram em toda a terra: A paz vos seja multiplicada.
²⁶ Da minha parte é feito um decreto, pelo qual em todo o domínio do meu reino os homens tremam e temam perante o Deus de Daniel; porque ele é o Deus vivo e que permanece para sempre, e o seu reino não se pode destruir, e o seu domínio durará até o fim.
²⁷ Ele salva, livra, e opera sinais e maravilhas no céu e na terra; ele salvou e livrou Daniel do poder dos leões.
²⁸ Este Daniel, pois, prosperou no reinado de Dario, e no reinado de Ciro, o persa.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que os presidentes e príncipes não achavam ocasião alguma contra Daniel?",
                        opcoes: [
                            { numero: 1, texto: "Porque ele era protegido pelo rei", correta: false },
                            { numero: 2, texto: "Porque ele era fiel e não se achava nele vício nem culpa", correta: true },
                            { numero: 3, texto: "Porque ele fugia das reuniões", correta: false },
                            { numero: 4, texto: "Porque ele era muito forte fisicamente", correta: false }
                        ],
                        explicacao: "Daniel 6:4 - ...porque ele era fiel, e não se achava nele nenhum vício nem culpa.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quantas vezes por dia Daniel orava de joelhos em seu quarto?",
                        opcoes: [
                            { numero: 1, texto: "Uma vez", correta: false },
                            { numero: 2, texto: "Sete vezes", correta: false },
                            { numero: 3, texto: "Cinco vezes", correta: false },
                            { numero: 4, texto: "Três vezes", correta: true }
                        ],
                        explicacao: "Daniel 6:10 - ...três vezes no dia se punha de joelhos, e orava, e dava graças diante do seu Deus...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o rei disse a Daniel quando ele foi lançado na cova dos leões?",
                        opcoes: [
                            { numero: 1, texto: "O teu Deus, a quem tu continuamente serves, ele te livre", correta: true },
                            { numero: 2, texto: "Adeus, meu fiel amigo", correta: false },
                            { numero: 3, texto: "Espero que os leões não tenham fome", correta: false },
                            { numero: 4, texto: "Tu deverias ter obedecido ao meu decreto", correta: false }
                        ],
                        explicacao: "Daniel 6:16 - ...Disse o rei a Daniel: O teu Deus, a quem tu continuamente serves, ele te livre.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        7: {
            titulo: "A Visão dos Quatro Animais",
            texto: ` ¹ No primeiro ano de Belsazar, rei de Babilônia, teve Daniel um sonho e visões da sua cabeça quando estava na sua cama; escreveu logo o sonho, e relatou a suma das coisas.
² Falou Daniel, e disse: Eu estava olhando na minha visão da noite, e eis que os quatro ventos do céu agitavam o mar grande.
³ E quatro animais grandes, diferentes uns dos outros, subiam do mar.
⁴ O primeiro era como leão, e tinha asas de águia; enquanto eu olhava, foram-lhe arrancadas as asas, e foi levantado da terra, e posto em pé como um homem, e foi-lhe dado um coração de homem.
⁵ Continuei olhando, e eis aqui o segundo animal, semelhante a um urso, o qual se levantou de um lado, tendo na boca três costelas entre os seus dentes; e foi-lhe dito assim: Levanta-te, devora muita carne.
⁶ Depois disto, eu continuei olhando, e eis aqui outro, semelhante a um leopardo, e tinha quatro asas de ave nas suas costas; tinha também este animal quatro cabeças, e foi-lhe dado domínio.
⁷ Depois disto eu continuei olhando nas visões da noite, e eis aqui o quarto animal, terrível e espantoso, e muito forte, o qual tinha dentes grandes de ferro; ele devorava e fazia em pedaços, e pisava aos pés o que sobejava; era diferente de todos os animais que apareceram antes dele, e tinha dez chifres.
⁸ Estando eu a considerar os chifres, eis que, entre eles subiu outro chifre pequeno, diante do qual três dos primeiros chifres foram arrancados; e eis que neste chifre havia olhos, como os de homem, e uma boca que falava grandes coisas.
⁹ Eu continuei olhando, até que foram postos uns tronos, e um ancião de dias se assentou; a sua veste era branca como a neve, e o cabelo da sua cabeça como a pura lã; e seu trono era de chamas de fogo, e as suas rodas de fogo ardente.
¹⁰ Um rio de fogo manava e saía de diante dele; milhares de milhares o serviam, e milhões de milhões assistiam diante dele; assentou-se o juízo, e abriram-se os livros.
¹¹ Então estive olhando, por causa da voz das grandes palavras que o chifre proferia; estive olhando até que o animal foi morto, e o seu corpo desfeito, e entregue para ser queimado pelo fogo;
¹² E, quanto aos outros animais, foi-lhes tirado o domínio; todavia foi-lhes prolongada a vida até certo espaço de tempo.
¹³ Eu estava olhando nas minhas visões da noite, e eis que vinha nas nuvens do céu um como o filho do homem; e dirigiu-se ao ancião de dias, e o fizeram chegar até ele.
¹⁴ E foi-lhe dado o domínio, e a honra, e o reino, para que todos os povos, nações e línguas o servissem; o seu domínio é um domínio eterno, que não passará, e o seu reino tal, que não será destruído.
¹⁵ Quanto a mim, Daniel, o meu espírito foi abatido dentro do corpo, e as visões da minha cabeça me perturbaram.
¹⁶ Cheguei-me a um dos que estavam perto, e pedi-lhe a verdade acerca de tudo isto. E ele me disse, e fez-me saber a interpretação das coisas.
¹⁷ Estes grandes animais, que são quatro, são quatro reis, que se levantarão da terra.
¹⁸ Mas os santos do Altíssimo receberão o reino, e o possuirão para todo o sempre, e de eternidade em eternidade.
¹⁹ Então tive desejo de conhecer a verdade a respeito do quarto animal, que era diferente de todos os outros, muito terrível, cujos dentes eram de ferro e as suas unhas de bronze; que devorava, fazia em pedaços e pisava aos pés o que sobrava;
²⁰ E também a respeito dos dez chifres que tinha na cabeça, e do outro que subiu, e diante do qual caíram três, isto é, daquele chifre que tinha olhos, e uma boca que falava grandes coisas, e cujo parecer era mais robusto do que o dos seus companheiros.
²¹ Eu olhava, e eis que este chifre fazia guerra contra os santos, e prevaleceu contra eles.
²² Até que veio o ancião de dias, e fez justiça aos santos do Altíssimo; e chegou o tempo em que os santos possuíram o reino.
²³ Disse assim: O quarto animal será o quarto reino na terra, o qual será diferente de todos os reinos; e devorará toda a terra, e a pisará aos pés, e a fará em pedaços.
²⁴ E, quanto aos dez chifres, daquele mesmo reino se levantarão dez reis; e depois deles se levantará outro, o qual será diferente dos primeiros, e abaterá a três reis.
²⁵ E proferirá palavras contra o Altíssimo, e destruirá os santos do Altíssimo, e cuidará em mudar os tempos e a lei; e eles serão entregues na sua mão, por um tempo, e tempos, e a metade de um tempo.
²⁶ Mas o juízo será estabelecido, e eles tirarão o seu domínio, para o destruir e para o desfazer até ao fim.
²⁷ E o reino, e o domínio, e a majestade dos reinos debaixo de todo o céu serão dados ao povo dos santos do Altíssimo; o seu reino será um reino eterno, e todos os domínios o servirão, e lhe obedecerão.
²⁸ Aqui terminou o assunto. Quanto a mim, Daniel, os meus pensamentos muito me perturbaram, e mudou-se em mim o meu semblante; mas guardei o assunto no meu coração.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Na visão de Daniel, como era o primeiro animal que subia do mar?",
                        opcoes: [
                            { numero: 1, texto: "Como um urso com três costelas na boca", correta: false },
                            { numero: 2, texto: "Como um leopardo com quatro asas", correta: false },
                            { numero: 3, texto: "Como um leão e tinha asas de águia", correta: true },
                            { numero: 4, texto: "Terrível, espantoso e muito forte", correta: false }
                        ],
                        explicacao: "Daniel 7:4 - O primeiro era como leão, e tinha asas de águia...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A quem foi dado o domínio, a honra e o reino na visão celestial?",
                        opcoes: [
                            { numero: 1, texto: "Aos reis da terra", correta: false },
                            { numero: 2, texto: "Ao Filho do Homem", correta: true },
                            { numero: 3, texto: "Aos quatro animais", correta: false },
                            { numero: 4, texto: "Ao pequeno chifre", correta: false }
                        ],
                        explicacao: "Daniel 7:14 - E foi-lhe dado o domínio, e a honra, e o reino, para que todos os povos... o servissem.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que representam os quatro grandes animais que Daniel viu?",
                        opcoes: [
                            { numero: 1, texto: "Quatro ilhas no oceano", correta: false },
                            { numero: 2, texto: "Quatro anos de fome", correta: false },
                            { numero: 3, texto: "Quatro ventos do céu", correta: false },
                            { numero: 4, texto: "Quatro reis que se levantarão da terra", correta: true }
                        ],
                        explicacao: "Daniel 7:17 - Estes grandes animais, que são quatro, são quatro reis, que se levantarão da terra.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        8: {
            titulo: "O Carneiro e o Bode",
            texto: `¹ No ano terceiro do reinado do rei Belsazar apareceu-me uma visão, a mim, Daniel, depois daquela que me apareceu no princípio.
² E vi na visão; e sucedeu que, quando vi, eu estava na cidadela de Susã, na província de Elão; vi, pois, na visão, que eu estava junto ao rio Ulai.
³ E levantei os meus olhos, e vi, e eis que um carneiro estava diante do rio, o qual tinha dois chifres; e os dois chifres eram altos, mas um era mais alto do que o outro; e o mais alto subiu por último.
⁴ Vi que o carneiro dava marradas para o ocidente, e para o norte e para o sul; e nenhum dos animais lhe podia resistir; nem havia quem pudesse livrar-se da sua mão; e ele fazia conforme a sua vontade, e se engrandecia.
⁵ E, estando eu considerando, eis que um bode vinha do ocidente sobre a face de toda a terra, mas sem tocar no chão; e aquele bode tinha um chifre notável entre os olhos.
⁶ E dirigiu-se ao carneiro que tinha os dois chifres, ao qual eu tinha visto em pé diante do rio, e correu contra ele no ímpeto da sua força.
⁷ E vi-o chegar perto do carneiro, enfurecido contra ele, e ferindo-o quebrou-lhe os dois chifres, pois não havia força no carneiro para lhe resistir, e o bode o lançou por terra, e o pisou aos pés; não houve quem pudesse livrar o carneiro da sua mão.
⁸ E o bode se engrandeceu sobremaneira; mas, estando na sua maior força, aquele grande chifre foi quebrado; e no seu lugar subiram outros quatro também notáveis, para os quatro ventos do céu.
⁹ E de um deles saiu um chifre muito pequeno, o qual cresceu muito para o sul, e para o oriente, e para a terra formosa.
¹⁰ E se engrandeceu até contra o exército do céu; e a alguns do exército, e das estrelas, lançou por terra, e os pisou.
¹¹ E se engrandeceu até contra o príncipe do exército; e por ele foi tirado o sacrifício contínuo, e o lugar do seu santuário foi lançado por terra.
¹² E um exército foi dado contra o sacrifício contínuo, por causa da transgressão; e lançou a verdade por terra, e o fez, e prosperou.
¹³ Depois ouvi um santo que falava; e disse outro santo àquele que falava: Até quando durará a visão do sacrifício contínuo, e da transgressão assoladora, para que sejam entregues o santuário e o exército, a fim de serem pisados?
¹⁴ E ele me disse: Até duas mil e trezentas tardes e manhãs; e o santuário será purificado.
¹⁵ E aconteceu que, havendo eu, Daniel, tido a visão, procurei o significado, e eis que se apresentou diante de mim como que uma semelhança de homem.
¹⁶ E ouvi uma voz de homem entre as margens do Ulai, a qual gritou, e disse: Gabriel, dá a entender a este a visão.
¹⁷ E veio perto de onde eu estava; e, vindo ele, me amedrontei, e caí sobre o meu rosto; mas ele me disse: Entende, filho do homem, porque esta visão acontecerá no fim do tempo.
¹⁸ E, estando ele falando comigo, caí adormecido com o rosto em terra; ele, porém, me tocou, e me fez estar em pé.
¹⁹ E disse: Eis que te farei saber o que há de acontecer no último tempo da ira; pois isso pertence ao tempo determinado do fim.
²⁰ Aquele carneiro que viste com dois chifres são os reis da Média e da Pérsia,
²¹ Mas o bode peludo é o rei da Grécia; e o grande chifre que tinha entre os olhos é o primeiro rei;
²² O ter sido quebrado, levantando-se quatro em lugar dele, significa que quatro reinos se levantarão da mesma nação, mas não com a força dele.
²³ Mas, no fim do seu reinado, quando acabarem os prevaricadores, se levantará um rei, feroz de semblante, e será entendido em adivinhações.
²⁴ E se fortalecerá o seu poder, mas não pela sua própria força; e destruirá maravilhosamente, e prosperará, e fará o que lhe aprouver; e destruirá os poderosos e o povo santo.
²⁵ E pelo seu entendimento também fará prosperar o engano na sua mão; e no seu coração se engrandecerá, e destruirá a muitos que vivem em segurança; e se levantará contra o Príncipe dos príncipes, mas sem mão será quebrado.
²⁶ E a visão da tarde e da manhã que foi falada, é verdadeira. Tu, porém, cerra a visão, porque se refere a dias muito distantes.
²⁷ E eu, Daniel, enfraqueci, e estive enfermo alguns dias; então levantei-me e tratei do negócio do rei. E espantei-me acerca da visão, e não havia quem a entendesse.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Na visão junto ao rio Ulai, quem representava o carneiro com dois chifres?",
                        opcoes: [
                            { numero: 1, texto: "Os reis da Média e da Pérsia", correta: true },
                            { numero: 2, texto: "O rei da Grécia", correta: false },
                            { numero: 3, texto: "O império de Babilônia", correta: false },
                            { numero: 4, texto: "O reino do Egito", correta: false }
                        ],
                        explicacao: "Daniel 8:20 - Aquele carneiro que viste com dois chifres são os reis da Média e da Pérsia.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu com o grande chifre do bode quando ele se tornou muito forte?",
                        opcoes: [
                            { numero: 1, texto: "Ele cresceu até o céu", correta: false },
                            { numero: 2, texto: "Ele se quebrou", correta: true },
                            { numero: 3, texto: "Ele brilhou como o sol", correta: false },
                            { numero: 4, texto: "Ele se transformou em ouro", correta: false }
                        ],
                        explicacao: "Daniel 8:8 - E o bode se engrandeceu sobremaneira; mas, estando na sua maior força, aquele grande chifre se quebrou...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual anjo foi enviado para explicar a visão a Daniel?",
                        opcoes: [
                            { numero: 1, texto: "Miguel", correta: false },
                            { numero: 2, texto: "Rafael", correta: false },
                            { numero: 3, texto: "Gabriel", correta: true },
                            { numero: 4, texto: "Uriel", correta: false }
                        ],
                        explicacao: "Daniel 8:16 - ...Gabriel, dá a entender a este a visão.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        9: {
            titulo: "A Oração de Daniel e as 70 Semanas",
            texto: `¹ No ano primeiro de Dario, filho de Assuero, da linhagem dos medos, o qual foi constituído rei sobre o reino dos caldeus,
² No primeiro ano do seu reinado, eu, Daniel, entendi pelos livros que o número dos anos, de que falara o Senhor ao profeta Jeremias, em que haviam de cumprir-se as desolações de Jerusalém, era de setenta anos.
³ E eu dirigi o meu rosto ao Senhor Deus, para o buscar com oração e súplicas, com jejum, e saco e cinza.
⁴ E orei ao Senhor meu Deus, e confessei, e disse: Ah! Senhor! Deus grande e tremendo, que guardas a aliança e a misericórdia para com os que te amam e guardam os teus mandamentos;
⁵ Pecamos, e cometemos iniquidades, e procedemos impiamente, e fomos rebeldes, apartando-nos dos teus mandamentos e dos teus juízos;
⁶ E não demos ouvidos aos teus servos, os profetas, que em teu nome falaram aos nossos reis, aos nossos príncipes, e a nossos pais, como também a todo o povo da terra.
⁷ A ti, ó Senhor, pertence a justiça, mas a nós a confusão de rosto, como hoje se vê; aos homens de Judá, e aos moradores de Jerusalém, e a todo o Israel, aos de perto e aos de longe, em todas as terras por onde os tens lançado, por causa das suas rebeliões que cometeram contra ti.
⁸ Ó Senhor, a nós pertence a confusão de rosto, aos nossos reis, aos nossos príncipes, e a nossos pais, porque pecamos contra ti.
⁹ Ao Senhor, nosso Deus, pertencem a misericórdia, e o perdão; pois nos rebelamos contra ele,
¹⁰ E não obedecemos à voz do Senhor, nosso Deus, para andarmos nas suas leis, que nos deu por intermédio de seus servos, os profetas.
¹¹ Sim, todo o Israel transgrediu a tua lei, desviando-se para não obedecer à tua voz; por isso a maldição e o juramento, que estão escritos na lei de Moisés, servo de Deus, se derramaram sobre nós; porque pecamos contra ele.
¹² E ele confirmou a sua palavra, que falou contra nós, e contra os nossos juízes que nos julgavam, trazendo sobre nós um grande mal; porquanto debaixo de todo o céu nunca se fez como se tem feito em Jerusalém.
¹³ Como está escrito na lei de Moisés, todo este mal nos sobreveio; apesar disso, não suplicamos à face do Senhor nosso Deus, para nos convertermos das nossas iniquidades, e para nos aplicarmos à tua verdade.
¹⁴ Por isso o Senhor vigiou sobre o mal, e o trouxe sobre nós; porque justo é o Senhor, nosso Deus, em todas as suas obras, que fez, pois não obedecemos à sua voz.
¹⁵ Agora, pois, ó Senhor, nosso Deus, que tiraste o teu povo da terra do Egito com mão poderosa, e ganhaste para ti nome, como hoje se vê; temos pecado, temos procedido impiamente.
¹⁶ Ó Senhor, segundo todas as tuas justiças, aparte-se a tua ira e o teu furor da tua cidade de Jerusalém, do teu santo monte; porque por causa dos nossos pecados, e por causa das iniquidades de nossos pais, tornou-se Jerusalém e o teu povo um opróbrio para todos os que estão em redor de nós.
¹⁷ Agora, pois, ó Deus nosso, ouve a oração do teu servo, e as suas súplicas, e sobre o teu santuário assolado faze resplandecer o teu rosto, por amor do Senhor.
¹⁸ Inclina, ó Deus meu, os teus ouvidos, e ouve; abre os teus olhos, e olha para a nossa desolação, e para a cidade que é chamada pelo teu nome, porque não lançamos as nossas súplicas perante a tua face fiados em nossas justiças, mas em tuas muitas misericórdias.
¹⁹ Ó Senhor, ouve; ó Senhor, perdoa; ó Senhor, atende-nos e age sem tardar; por amor de ti mesmo, ó Deus meu; porque a tua cidade e o teu povo são chamados pelo teu nome.
²⁰ Estando eu ainda falando e orando, e confessando o meu pecado, e o pecado do meu povo Israel, e lançando a minha súplica perante a face do Senhor, meu Deus, pelo monte santo do meu Deus,
²¹ Estando eu, digo, ainda falando na oração, o homem Gabriel, que eu tinha visto na minha visão ao princípio, veio, voando rapidamente, e tocou-me, à hora do sacrifício da tarde.
²² Ele me instruiu, e falou comigo, dizendo: Daniel, agora saí para fazer-te entender o sentido.
²³ No princípio das tuas súplicas, saiu a ordem, e eu vim, para to declarar, porque és mui amado; considera, pois, a palavra, e entende a visão.
²⁴ Setenta semanas estão determinadas sobre o teu povo, e sobre a tua santa cidade, para cessar a transgressão, e para dar fim aos pecados, e para expiar a iniquidade, e trazer a justiça eterna, e selar a visão e a profecia, e para ungir o Santíssimo.
²⁵ Sabe e entende: desde a saída da ordem para restaurar, e para edificar a Jerusalém, até ao Messias, o Príncipe, haverá sete semanas, e sessenta e duas semanas; as ruas e o muro se reedificarão, mas em tempos angustiosos.
²⁶ E depois das sessenta e duas semanas será cortado o Messias, mas não para si mesmo; e o povo do príncipe, que há de vir, destruirá a cidade e o santuário, e o seu fim será com uma inundação; e até ao fim haverá guerra; estão determinadas as assolações.
²⁷ E ele firmará aliança com muitos por uma semana; e na metade da semana fará cessar o sacrifício e a oblação; e sobre a asa das abominações virá o assolador, e isso até à consumação; e o que está determinado será derramado sobre o assolador.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Em qual livro Daniel entendeu que o cativeiro de Jerusalém duraria 70 anos?",
                        opcoes: [
                            { numero: 1, texto: "Livro de Isaías", correta: false },
                            { numero: 2, texto: "Livro do profeta Jeremias", correta: true },
                            { numero: 3, texto: "Livro de Ezequiel", correta: false },
                            { numero: 4, texto: "Livro de Gênesis", correta: false }
                        ],
                        explicacao: "Daniel 9:2 - ...entendi pelos livros que o número dos anos... era de setenta anos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como Daniel buscou ao Senhor Deus antes de receber a revelação?",
                        opcoes: [
                            { numero: 1, texto: "Com festas e cânticos", correta: false },
                            { numero: 2, texto: "Viajando para Jerusalém", correta: false },
                            { numero: 3, texto: "Dormindo e descansando", correta: false },
                            { numero: 4, texto: "Com oração, súplicas, jejum, saco e cinza", correta: true }
                        ],
                        explicacao: "Daniel 9:3 - E eu dirigi o meu rosto ao Senhor Deus, para o buscar com oração e súplicas, com jejum, e saco e cinza.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quantas semanas foram determinadas sobre o povo e a cidade santa?",
                        opcoes: [
                            { numero: 1, texto: "Setenta semanas", correta: true },
                            { numero: 2, texto: "Sete semanas", correta: false },
                            { numero: 3, texto: "Quarenta semanas", correta: false },
                            { numero: 4, texto: "Doze semanas", correta: false }
                        ],
                        explicacao: "Daniel 9:24 - Setenta semanas estão determinadas sobre o teu povo, e sobre a tua santa cidade...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        10: {
            titulo: "A Visão do Homem Vestido de Linho",
            texto: `¹ No terceiro ano de Ciro, rei da Pérsia, foi revelada uma palavra a Daniel, cujo nome era chamado Beltessazar; a palavra era verdadeira e envolvia grande conflito; e ele entendeu esta palavra, e tinha entendimento da visão.
² Naqueles dias eu, Daniel, estive triste por três semanas.
³ Alimento desejável não comi, nem carne nem vinho entraram na minha boca, nem me ungi com unguento, até que se cumpriram as três semanas.
⁴ E no dia vinte e quatro do primeiro mês eu estava à borda do grande rio Hidequel;
⁵ E levantei os meus olhos, e olhei, e eis um homem vestido de linho, e os seus lombos cingidos com ouro fino de Ufaz;
⁶ E o seu corpo era como berilo, e o seu rosto parecia um relâmpago, e os seus olhos como tochas de fogo, e os seus braços e os seus pés brilhavam como bronze polido; e a voz das suas palavras era como a voz de uma multidão.
⁷ E só eu, Daniel, tive aquela visão. Os homens que estavam comigo não a viram; contudo caiu sobre eles um grande temor, e fugiram, escondendo-se.
⁸ Fiquei, pois, eu só, a contemplar esta grande visão, e não ficou força em mim; transmudou-se o meu semblante em corrupção, e não tive força alguma.
⁹ Contudo ouvi a voz das suas palavras; e, ouvindo o som das suas palavras, eu caí sobre o meu rosto num profundo sono, com o meu rosto em terra.
¹⁰ E eis que certa mão me tocou, e fez com que me movesse sobre os meus joelhos e sobre as palmas das minhas mãos.
¹¹ E me disse: Daniel, homem muito amado, entende as palavras que vou te dizer, e levanta-te sobre os teus pés, porque a ti sou enviado. E, falando ele comigo esta palavra, levantei-me tremendo.
¹² Então me disse: Não temas, Daniel, porque desde o primeiro dia em que aplicaste o teu coração a compreender e a humilhar-te perante o teu Deus, são ouvidas as tuas palavras; e eu vim por causa das tuas palavras.
¹³ Mas o príncipe do reino da Pérsia me resistiu vinte e um dias, e eis que Miguel, um dos primeiros príncipes, veio para ajudar-me, e eu fiquei ali com os reis da Pérsia.
¹⁴ Agora vim, para fazer-te entender o que há de acontecer ao teu povo nos derradeiros dias; porque a visão é ainda para muitos dias.
¹⁵ E, falando ele comigo estas palavras, abaixei o meu rosto para a terra, e emudeci.
¹⁶ E eis que alguém, semelhante aos filhos dos homens, tocou-me os lábios; então abri a minha boca, e falei, dizendo àquele que estava em pé diante de mim: senhor meu, por causa da visão sobrevieram-me dores, e não me ficou força alguma.
¹⁷ Como, pois, pode o servo do meu senhor falar com o meu senhor? Porque, quanto a mim, desde agora não resta força em mim, e nem fôlego ficou em mim.
¹⁸ E aquele, que tinha aparência de um homem, tocou-me outra vez, e fortaleceu-me.
¹⁹ E disse: Não temas, homem muito amado, paz seja contigo; anima-te, sim, anima-te. E, falando ele comigo, fiquei fortalecido, e disse: Fala, meu senhor, porque me fortaleceste.
²⁰ E ele disse: Sabes por que eu vim a ti? Agora, pois, tornarei a pelejar contra o príncipe dos persas; e, saindo eu, eis que virá o príncipe da Grécia.
²¹ Mas eu te declararei o que está registrado na escritura da verdade; e ninguém há que me anime contra aqueles, senão Miguel, vosso príncipe.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Durante quantos dias Daniel esteve pranteando e sem comer manjar desejável?",
                        opcoes: [
                            { numero: 1, texto: "Sete dias", correta: false },
                            { numero: 2, texto: "Três semanas inteiras", correta: true },
                            { numero: 3, texto: "Quarenta dias", correta: false },
                            { numero: 4, texto: "Dez dias", correta: false }
                        ],
                        explicacao: "Daniel 10:2 - Naqueles dias eu, Daniel, estive pranteando por três semanas inteiras.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem ajudou o anjo na luta contra o príncipe do reino da Pérsia?",
                        opcoes: [
                            { numero: 1, texto: "Miguel, um dos primeiros príncipes", correta: true },
                            { numero: 2, texto: "O rei Ciro", correta: false },
                            { numero: 3, texto: "Os exércitos de Israel", correta: false },
                            { numero: 4, texto: "Ninguém, ele lutou sozinho", correta: false }
                        ],
                        explicacao: "Daniel 10:13 - ...mas eis que Miguel, um dos primeiros príncipes, veio ajudar-me...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Junto a qual grande rio Daniel estava quando teve a visão?",
                        opcoes: [
                            { numero: 1, texto: "Rio Eufrates", correta: false },
                            { numero: 2, texto: "Rio Nilo", correta: false },
                            { numero: 3, texto: "Rio Jordão", correta: false },
                            { numero: 4, texto: "Rio Tigre (Hidequel)", correta: true }
                        ],
                        explicacao: "Daniel 10:4 - ...estava eu à borda do grande rio Hidequel.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        11: {
            titulo: "Reis do Norte e do Sul",
            texto: ` ¹ Eu, pois, no primeiro ano de Dario, o medo, levantei-me para animá-lo e fortalecê-lo.
² E agora te declararei a verdade: Eis que ainda três reis estarão na Pérsia, e o quarto acumulará grandes riquezas, mais do que todos; e, tornando-se forte, por suas riquezas, suscitará a todos contra o reino da Grécia.
³ Depois se levantará um rei valente, que reinará com grande domínio, e fará o que lhe aprouver.
⁴ Mas, estando ele em pé, o seu reino será quebrado, e será repartido para os quatro ventos do céu; mas não para a sua posteridade, nem tampouco segundo o seu domínio com que reinou, porque o seu reino será arrancado, e passará a outros que não eles.
⁵ E será forte o rei do sul; mas um dos seus príncipes será mais forte do que ele, e reinará poderosamente; seu domínio será grande.
⁶ Mas, ao fim de alguns anos, eles se aliarão; e a filha do rei do sul virá ao rei do norte para fazer um tratado; mas ela não reterá a força do seu braço; nem ele persistirá, nem o seu braço, porque ela será entregue, e os que a tiverem trazido, e aquele que a gerou, e o que a fortalecia naqueles tempos.
⁷ Mas de um renovo das raízes dela um se levantará em seu lugar, e virá com o exército, e entrará na fortaleza do rei do norte, e operará contra eles, e prevalecerá.
⁸ Também os seus deuses com as suas imagens de fundição, com os seus objetos preciosos de prata e ouro, levará cativos para o Egito; e por alguns anos ele persistirá contra o rei do norte.
⁹ E entrará no reino o rei do sul, e tornará para a sua terra.
¹⁰ Mas seus filhos intervirão e reunirão uma multidão de grandes forças; e virá apressadamente e inundará, e passará adiante; e, voltando levará a guerra até a sua fortaleza.
¹¹ Então o rei do sul se exasperará, e sairá, e pelejará contra ele, contra o rei do norte; este porá em campo grande multidão, e aquela multidão será entregue na sua mão.
¹² A multidão será tirada e o seu coração se elevará; mas ainda que derrubará muitos milhares, contudo não prevalecerá.
¹³ Porque o rei do norte tornará, e porá em campo uma multidão maior do que a primeira, e ao fim dos tempos, isto é, de anos, virá à pressa com grande exército e com muitas riquezas.
¹⁴ E, naqueles tempos, muitos se levantarão contra o rei do sul; e os violentos dentre o teu povo se levantarão para cumprir a visão, mas eles cairão.
¹⁵ E o rei do norte virá, e levantará baluartes, e tomará a cidade forte; e os braços do sul não poderão resistir, nem o seu povo escolhido, pois não haverá força para resistir.
¹⁶ O que, pois, há de vir contra ele fará segundo a sua vontade, e ninguém poderá resistir diante dele; e estará na terra gloriosa, e por sua mão haverá destruição.
¹⁷ E dirigirá o seu rosto, para vir com a potência de todo o seu reino, e com ele os retos, assim ele fará; e lhe dará uma filha das mulheres, para corrompê-la; ela, porém, não subsistirá, nem será para ele.
¹⁸ Depois virará o seu rosto para as ilhas, e tomará muitas; mas um príncipe fará cessar o seu opróbrio contra ele, e ainda fará recair sobre ele o seu opróbrio.
¹⁹ Virará então o seu rosto para as fortalezas da sua própria terra, mas tropeçará, e cairá, e não será achado.
²⁰ E em seu lugar se levantará quem fará passar um arrecadador pela glória do reino; mas em poucos dias será quebrantado, e isto sem ira e sem batalha.
²¹ Depois se levantará em seu lugar um homem vil, ao qual não tinham dado a dignidade real; mas ele virá caladamente, e tomará o reino com engano.
²² E com os braços de uma inundação serão varridos de diante dele; e serão quebrantados, como também o príncipe da aliança.
²³ E, depois do concerto com ele, usará de engano; e subirá, e se tornará forte com pouca gente.
²⁴ Virá também caladamente aos lugares mais férteis da província, e fará o que nunca fizeram seus pais, nem os pais de seus pais; repartirá entre eles a presa e os despojos, e os bens, e formará os seus projetos contra as fortalezas, mas por certo tempo.
²⁵ E suscitará a sua força e a sua coragem contra o rei do sul com um grande exército; e o rei do sul se envolverá na guerra com um grande e mui poderoso exército; mas não subsistirá, porque maquinarão projetos contra ele.
²⁶ E os que comerem os seus alimentos o destruirão; e o exército dele será arrasado, e cairão muitos mortos.
²⁷ Também estes dois reis terão o coração atento para fazerem o mal, e a uma mesma mesa falarão a mentira; mas isso não prosperará, porque ainda verá o fim no tempo determinado.
²⁸ Então tornará para a sua terra com muitos bens, e o seu coração será contra a santa aliança; e fará o que lhe aprouver, e tornará para a sua terra.
²⁹ No tempo determinado tornará a vir em direção do sul; mas não será na última vez como foi na primeira.
³⁰ Porque virão contra ele navios de Quitim, que lhe causarão tristeza; e voltará, e se indignará contra a santa aliança, e fará o que lhe aprouver; voltará e atenderá aos que tiverem abandonado a santa aliança.
³¹ E braços serão colocados sobre ele, que profanarão o santuário e a fortaleza, e tirarão o sacrifício contínuo, estabelecendo abominação desoladora.
³² E aos violadores da aliança ele com lisonjas perverterá, mas o povo que conhece ao seu Deus se tornará forte e fará proezas.
³³ E os entendidos entre o povo ensinarão a muitos; todavia cairão pela espada, e pelo fogo, e pelo cativeiro, e pelo roubo, por muitos dias.
³⁴ E, caindo eles, serão ajudados com pequeno socorro; mas muitos se ajuntarão a eles com lisonjas.
³⁵ E alguns dos entendidos cairão, para serem provados, purificados, e embranquecidos, até ao fim do tempo, porque será ainda para o tempo determinado.
³⁶ E este rei fará conforme a sua vontade, e levantar-se-á, e engrandecer-se-á sobre todo deus; e contra o Deus dos deuses falará coisas espantosas, e será próspero, até que a ira se complete; porque aquilo que está determinado será feito.
³⁷ E não terá respeito ao Deus de seus pais, nem terá respeito ao amor das mulheres, nem a deus algum, porque sobre tudo se engrandecerá.
³⁸ Mas em seu lugar honrará a um deus das forças; e a um deus a quem seus pais não conheceram honrará com ouro, e com prata, e com pedras preciosas, e com coisas agradáveis.
³⁹ Com o auxílio de um deus estranho agirá contra as poderosas fortalezas; aos que o reconhecerem multiplicará a honra, e os fará reinar sobre muitos, e repartirá a terra por preço.
⁴⁰ E, no fim do tempo, o rei do sul lutará com ele, e o rei do norte se levantará contra ele com carros, e com cavaleiros, e com muitos navios; e entrará nas suas terras e as inundará, e passará.
⁴¹ E entrará na terra gloriosa, e muitos países cairão, mas da sua mão escaparão estes: Edom e Moabe, e os chefes dos filhos de Amom.
⁴² E estenderá a sua mão contra os países, e a terra do Egito não escapará.
⁴³ E apoderar-se-á dos tesouros de ouro e de prata e de todas as coisas preciosas do Egito; e os líbios e os etíopes o seguirão.
⁴⁴ Mas os rumores do oriente e do norte o espantarão; e sairá com grande furor, para destruir e extirpar a muitos.
⁴⁵ E armará as tendas do seu palácio entre o mar grande e o monte santo e glorioso; mas chegará ao seu fim, e não haverá quem o socorra.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Contra quem se levantará o quarto rei da Pérsia mencionado na visão?",
                        opcoes: [
                            { numero: 1, texto: "Contra o reino da Grécia", correta: true },
                            { numero: 2, texto: "Contra os caldeus", correta: false },
                            { numero: 3, texto: "Contra o Egito", correta: false },
                            { numero: 4, texto: "Contra as ilhas do mar", correta: false }
                        ],
                        explicacao: "Daniel 11:2 - ...e, tornado forte por suas riquezas, agitará todos contra o reino da Grécia.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontecerá ao reino do rei valente quando ele se levantar?",
                        opcoes: [
                            { numero: 1, texto: "Será herdado por seus filhos", correta: false },
                            { numero: 2, texto: "Permanecerá unido por séculos", correta: false },
                            { numero: 3, texto: "Será quebrado e repartido para os quatro ventos do céu", correta: true },
                            { numero: 4, texto: "Será destruído por um fogo", correta: false }
                        ],
                        explicacao: "Daniel 11:4 - Mas, estando ele em pé, o seu reino será quebrado, e repartido para os quatro ventos do céu...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como o povo que conhece ao seu Deus se portará diante das abominações?",
                        opcoes: [
                            { numero: 1, texto: "Ficará em silêncio", correta: false },
                            { numero: 2, texto: "Se esforçará e fará proezas", correta: true },
                            { numero: 3, texto: "Fugirá para as montanhas", correta: false },
                            { numero: 4, texto: "Se renderá ao rei do norte", correta: false }
                        ],
                        explicacao: "Daniel 11:32 - ...mas o povo que conhece ao seu Deus se esforçará e fará proezas.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        12: {
            titulo: "O Tempo do Fim",
            texto: `¹ E naquele tempo se levantará Miguel, o grande príncipe, que se levanta a favor dos filhos do teu povo, e haverá um tempo de angústia, qual nunca houve, desde que houve nação até àquele tempo; mas naquele tempo livrar-se-á o teu povo, todo aquele que for achado escrito no livro.
² E muitos dos que dormem no pó da terra ressuscitarão, uns para vida eterna, e outros para vergonha e desprezo eterno.
³ Os que forem sábios, pois, resplandecerão como o fulgor do firmamento; e os que a muitos ensinam a justiça, como as estrelas sempre e eternamente.
⁴ E tu, Daniel, encerra estas palavras e sela este livro, até ao fim do tempo; muitos correrão de uma parte para outra, e o conhecimento se multiplicará.
⁵ Então eu, Daniel, olhei, e eis que estavam em pé outros dois, um deste lado, à beira do rio, e o outro do outro lado, à beira do rio.
⁶ E ele disse ao homem vestido de linho, que estava sobre as águas do rio: Quando será o fim destas maravilhas?
⁷ E ouvi o homem vestido de linho, que estava sobre as águas do rio, o qual levantou ao céu a sua mão direita e a sua mão esquerda, e jurou por aquele que vive eternamente que isso seria para um tempo, tempos e metade do tempo, e quando tiverem acabado de espalhar o poder do povo santo, todas estas coisas serão cumpridas.
⁸ Eu, pois, ouvi, mas não entendi; por isso eu disse: Senhor meu, qual será o fim destas coisas?
⁹ E ele disse: Vai, Daniel, porque estas palavras estão fechadas e seladas até ao tempo do fim.
¹⁰ Muitos serão purificados, e embranquecidos, e provados; mas os ímpios procederão impiamente, e nenhum dos ímpios entenderá, mas os sábios entenderão.
¹¹ E desde o tempo em que o sacrifício contínuo for tirado, e posta a abominação desoladora, haverá mil duzentos e noventa dias.
¹² Bem-aventurado o que espera e chega até mil trezentos e trinta e cinco dias.
¹³ Tu, porém, vai até ao fim; porque descansarás, e te levantarás na tua herança, no fim dos dias.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem é o grande príncipe que se levanta a favor dos filhos do povo de Daniel?",
                        opcoes: [
                            { numero: 1, texto: "Gabriel", correta: false },
                            { numero: 2, texto: "Ciro", correta: false },
                            { numero: 3, texto: "Miguel", correta: true },
                            { numero: 4, texto: "Dário", correta: false }
                        ],
                        explicacao: "Daniel 12:1 - E naquele tempo se levantará Miguel, o grande príncipe, que se levanta pelos filhos do teu povo...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontecerá com muitos dos que dormem no pó da terra?",
                        opcoes: [
                            { numero: 1, texto: "Serão esquecidos para sempre", correta: false },
                            { numero: 2, texto: "Ressuscitarão, uns para a vida eterna, e outros para vergonha e desprezo eterno", correta: true },
                            { numero: 3, texto: "Ficarão guardados em cavernas", correta: false },
                            { numero: 4, texto: "Tornar-se-ão anjos", correta: false }
                        ],
                        explicacao: "Daniel 12:2 - E muitos dos que dormem no pó da terra ressuscitarão, uns para a vida eterna, e outros para vergonha e desprezo eterno.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Daniel deveria fazer com as palavras e o livro até o tempo do fim?",
                        opcoes: [
                            { numero: 1, texto: "Ler em voz alta para todos", correta: false },
                            { numero: 2, texto: "Entregar aos sacerdotes", correta: false },
                            { numero: 3, texto: "Queimar após ler", correta: false },
                            { numero: 4, texto: "Cerrar as palavras e selar o livro", correta: true }
                        ],
                        explicacao: "Daniel 12:4 - E tu, Daniel, cerra estas palavras e sela este livro, até ao fim do tempo...",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};