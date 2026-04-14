const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const lamentacoes = {
    nome: "Lamentações",
    icone: "😢",
    autor: "Jeremias",
    //background: "./imagens/lamentacoes_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },
    capitulos: {
        1: {
            titulo: "A Miséria de Jerusalém",
            texto: `¹ Como está sentada solitária aquela cidade, antes tão populosa! Tornou-se como viúva, a que era grande entre as nações! A que era princesa entre as províncias, tornou-se tributária!
² Chora amargamente de noite, e as suas lágrimas lhe correm pelas faces; não tem quem a console entre todos os seus amantes; todos os seus amigos se houveram aleivosamente com ela, tornaram-se seus inimigos.
³ Judá passou em cativeiro por causa da aflição, e por causa da grande servidão; ela habita entre os gentios, não acha descanso; todos os seus perseguidores a alcançam entre as suas dificuldades.
⁴ Os caminhos de Sião pranteiam, porque não há quem venha à festa solene; todas as suas portas estão desoladas; os seus sacerdotes suspiram; as suas virgens estão tristes, e ela mesma tem amargura.
⁵ Os seus adversários têm sido feitos chefes, os seus inimigos prosperam; porque o Senhor a afligiu, por causa da multidão das suas transgressões; os seus filhinhos foram para o cativeiro na frente do adversário.
⁶ E da filha de Sião já se foi toda a sua formosura; os seus príncipes ficaram sendo como corços que não acham pasto e caminham sem força adiante do perseguidor.
⁷ Lembra-se Jerusalém, nos dias da sua aflição e dos seus exílios, de todas as suas mais queridas coisas, que tivera desde os tempos antigos; quando caía o seu povo na mão do adversário, e não havia quem a socorresse; os adversários a viram, e fizeram escárnio da sua ruína.
⁸ Jerusalém gravemente pecou, por isso se fez errante; todos os que a honravam, a desprezaram, porque viram a sua nudez; ela também suspira e volta para trás.
⁹ A sua imundícia está nas suas saias; nunca se lembrou do seu fim; por isso foi pasmosamente abatida, não tem consolador; vê, Senhor, a minha aflição, porque o inimigo se tem engrandecido.
¹⁰ Estendeu o adversário a sua mão a todas as coisas mais preciosas dela; pois ela viu entrar no seu santuário os gentios, acerca dos quais mandaste que não entrassem na tua congregação.
¹¹ Todo o seu povo anda suspirando, buscando o pão; deram as suas coisas mais preciosas a troco de mantimento para restaurarem a alma; vê, Senhor, e contempla, que sou desprezível.
¹² Não vos comove isto a todos vós que passais pelo caminho? Atendei, e vede, se há dor como a minha dor, que veio sobre mim, com que o Senhor me afligiu, no dia do furor da sua ira.
¹³ Desde o alto enviou fogo a meus ossos, o qual se assenhoreou deles; estendeu uma rede aos meus pés, fez-me voltar para trás, fez-me assolada e enferma todo o dia.
¹⁴ O jugo das minhas transgressões está atado pela sua mão; elas estão entretecidas, subiram sobre o meu pescoço, e ele abateu a minha força; entregou-me o Senhor nas mãos daqueles a quem não posso resistir.
¹⁵ O Senhor atropelou todos os meus poderosos no meio de mim; convocou contra mim uma assembleia, para esmagar os meus jovens; o Senhor pisou como num lagar a virgem filha de Judá.
¹⁶ Por estas coisas eu ando chorando; os meus olhos, os meus olhos se desfazem em águas; porque se afastou de mim o consolador que devia restaurar a minha alma; os meus filhos estão assolados, porque prevaleceu o inimigo.
¹⁷ Estende Sião as suas mãos, não há quem a console; mandou o Senhor acerca de Jacó que lhe fossem inimigos os que estão em redor dele; Jerusalém é entre eles como uma mulher imunda.
¹⁸ Justo é o Senhor, pois me rebelei contra o seu mandamento; ouvi, pois, todos os povos, e vede a minha dor; as minhas virgens e os meus jovens foram levados para o cativeiro.
¹⁹ Chamei os meus amantes, mas eles me enganaram; os meus sacerdotes e os meus anciãos expiraram na cidade; enquanto buscavam para si mantimento, para restaurarem a sua alma.
²⁰ Olha, Senhor, porque estou angustiada; turbadas estão as minhas entranhas; o meu coração está transtornado dentro de mim, porque gravemente me rebelei; fora me desfilhou a espada, em casa está a morte.
²¹ Ouviram que eu suspiro, mas não tenho quem me console; todos os meus inimigos que souberam do meu mal folgam, porque tu o fizeste; mas, em trazendo tu o dia que apregoaste, serão como eu.
²² Venha toda a sua maldade diante de ti, e faze-lhes como me fizeste a mim por causa de todas as minhas transgressões; porque os meus suspiros são muitos, e o meu coração está desfalecido.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como a cidade de Jerusalém é descrita no primeiro versículo após ter sido outrora populosa?",
                        opcoes: [
                            { numero: 1, texto: "Como um jardim regado", correta: false },
                            { numero: 2, texto: "Como uma viúva", correta: true },
                            { numero: 3, texto: "Como uma fortaleza inexpugnável", correta: false },
                            { numero: 4, texto: "Como um campo de trigo", correta: false }
                        ],
                        explicacao: "Lamentações 1:1 - Como jaz solitária aquela cidade outrora tão populosa! Tornou-se como viúva.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu com os amigos de Jerusalém durante a sua aflição?",
                        opcoes: [
                            { numero: 1, texto: "Todos a ajudaram com mantimentos", correta: false },
                            { numero: 2, texto: "Todos a desprezaram e tornaram-se seus inimigos", correta: true },
                            { numero: 3, texto: "Enviaram exércitos para protegê-la", correta: false },
                            { numero: 4, texto: "Oraram por ela no templo", correta: false }
                        ],
                        explicacao: "Lamentações 1:2 - Entre todos os seus amantes, não há quem a console; todos os seus amigos a desprezaram.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "A Ira do Senhor",
            texto: `¹ Como cobriu o Senhor de nuvens na sua ira a filha de Sião! Derrubou do céu à terra a glória de Israel, e não se lembrou do escabelo de seus pés, no dia da sua ira.
² Devorou o Senhor todas as moradas de Jacó, e não se apiedou; derrubou no seu furor as fortalezas da filha de Judá, e abateu-as até à terra; profanou o reino e os seus príncipes.
³ No furor da sua ira cortou toda a força de Israel; retirou para trás a sua destra de diante do inimigo; e ardeu contra Jacó, como labareda de fogo que consome em redor.
⁴ Armou o seu arco como inimigo, firmou a sua destra como adversário, e matou tudo o que era formoso à vista; derramou a sua indignação como fogo na tenda da filha de Sião.
⁵ Tornou-se o Senhor como inimigo; devorou a Israel, devorou a todos os seus palácios, destruiu as suas fortalezas; e multiplicou na filha de Judá a lamentação e a tristeza.
⁶ E arrancou o seu tabernáculo com violência, como se fosse o de uma horta; destruiu o lugar da sua congregação; o Senhor, em Sião, pôs em esquecimento a festa solene e o sábado, e na indignação da sua ira rejeitou com desprezo o rei e o sacerdote.
⁷ Rejeitou o Senhor o seu altar, detestou o seu santuário; entregou na mão do inimigo os muros dos seus palácios; deram gritos na casa do Senhor, como em dia de festa solene.
⁸ Intentou o Senhor destruir o muro da filha de Sião; estendeu o cordel sobre ele, não retirou a sua mão destruidora; fez gemer o antemuro e o muro; estão eles juntamente enfraquecidos.
⁹ As suas portas caíram por terra; ele destruiu e quebrou os seus ferrolhos; o seu rei e os seus príncipes estão entre os gentios, onde não há lei, nem os seus profetas acham visão alguma do Senhor.
¹⁰ Estão sentados na terra, silenciosos, os anciãos da filha de Sião; lançam pó sobre as suas cabeças, cingiram sacos; as virgens de Jerusalém abaixam as suas cabeças até à terra.
¹¹ Já se consumiram os meus olhos com lágrimas, turbadas estão as minhas entranhas, o meu fígado se derramou pela terra por causa do quebrantamento da filha do meu povo; pois desfalecem o menino e a criança de peito pelas ruas da cidade.
¹² Ao desfalecerem, como feridos, pelas ruas da cidade, ao exalarem as suas almas no regaço de suas mães, perguntam a elas: Onde está o trigo e o vinho?
¹³ Que testemunho te trarei? A quem te compararei, ó filha de Jerusalém? A quem te assemelharei, para te consolar, ó virgem filha de Sião? Porque grande como o mar é a tua quebradura; quem te sarará?
¹⁴ Os teus profetas viram para ti, vaidade e loucura, e não manifestaram a tua maldade, para impedirem o teu cativeiro; mas viram para ti cargas vãs e motivos de expulsão.
¹⁵ Todos os que passam pelo caminho batem palmas, assobiam e meneiam as suas cabeças sobre a filha de Jerusalém, dizendo: É esta a cidade que denominavam: Perfeita em formosura, gozo de toda a terra?
¹⁶ Todos os teus inimigos abrem as suas bocas contra ti, assobiam, e rangem os dentes; dizem: Devoramo-la; certamente este é o dia que esperávamos; achamo-lo, vimo-lo.
¹⁷ Fez o Senhor o que intentou; cumpriu a sua palavra, que ordenou desde os dias da antiguidade; derrubou, e não se apiedou; fez que o inimigo se alegrasse por tua causa, exaltou o poder dos teus adversários.
¹⁸ O coração deles clamou ao Senhor: Ó muralha da filha de Sião, corram as tuas lágrimas como um ribeiro, de dia e de noite; não te dês descanso, nem parem as meninas de teus olhos.
¹⁹ Levanta-te, clama de noite no princípio das vigias; derrama o teu coração como águas diante da presença do Senhor; levanta a ele as tuas mãos, pela vida de teus filhinhos, que desfalecem de fome à entrada de todas as ruas.
²⁰ Vê, ó Senhor, e considera a quem fizeste assim! Hão de comer as mulheres o fruto de si mesmas, as crianças que trazem nos braços? Ou matar-se-á no santuário do Senhor o sacerdote e o profeta?
²¹ Jazem por terra pelas ruas o moço e o velho, as minhas virgens e os meus jovens vieram a cair à espada; tu os mataste no dia da tua ira; mataste e não te apiedaste.
²² Convocaste os meus temores em redor como num dia de solenidade; não houve no dia da ira do Senhor quem escapasse, ou ficasse; aqueles que eu trouxe nas mãos e sustentei, o meu inimigo os consumiu.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor fez com o Seu santuário em Sua indignação?",
                        opcoes: [
                            { numero: 1, texto: "Rejeitou o Seu altar e abominou o Seu santuário", correta: true },
                            { numero: 2, texto: "Cobriu-o de ouro puro", correta: false },
                            { numero: 3, texto: "Multiplicou os sacerdotes nele", correta: false },
                            { numero: 4, texto: "Escondeu-o dos caldeus", correta: false }
                        ],
                        explicacao: "Lamentações 2:7 - Rejeitou o Senhor o seu altar, abominou o seu santuário.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que as crianças e os bebês pediam enquanto desfaleciam nas ruas?",
                        opcoes: [
                            { numero: 1, texto: "Ouro e prata", correta: false },
                            { numero: 2, texto: "Onde está o trigo e o vinho?", correta: true },
                            { numero: 3, texto: "Onde está o nosso pai?", correta: false },
                            { numero: 4, texto: "Levem-nos ao Egito", correta: false }
                        ],
                        explicacao: "Lamentações 2:12 - Dizem a suas mães: Onde há trigo e vinho? quando desfalecem como feridos nas ruas.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "Esperança na Aflição",
            texto: `¹ Eu sou aquele homem que viu a aflição pela vara do seu furor.
² Ele me guiou e me fez andar em trevas e não na luz.
³ Deveras fez virar e revirar a sua mão contra mim o dia todo.
⁴ Fez envelhecer a minha carne e a minha pele, quebrou os meus ossos.
⁵ Edificou contra mim, e me cercou de fel e trabalho.
⁶ Assentou-me em lugares tenebrosos, como os que estavam mortos há muito.
⁷ Cercou-me de uma sebe, e não posso sair; agravou os meus grilhões.
⁸ Ainda quando clamo e grito, ele exclui a minha oração.
⁹ Fechou os meus caminhos com pedras lavradas, fez tortuosas as minhas veredas.
¹⁰ Fez-se-me como urso de emboscada, um leão em esconderijos.
¹¹ Desviou os meus caminhos, e fez-me em pedaços; deixou-me assolado.
¹² Armou o seu arco, e me pôs como alvo à flecha.
¹³ Fez entrar nas minhas entranhas as flechas da sua aljava.
¹⁴ Fui feito um objeto de escárnio para todo o meu povo, e a sua canção todo o dia.
¹⁵ Fartou-me de amarguras, embriagou-me de absinto.
¹⁶ Quebrou com cascalho os meus dentes, abaixou-me na cinza.
¹⁷ E afastaste da paz a minha alma; esqueci-me do bem.
¹⁸ Então disse eu: Já pereceu a minha força, como também a minha esperança no Senhor.
¹⁹ Lembra-te da minha aflição e do meu pranto, do absinto e do fel.
²⁰ Minha alma certamente disto se lembra, e se abate dentro de mim.
²¹ Disto me recordarei na minha mente; por isso esperarei.
²² As misericórdias do Senhor são a causa de não sermos consumidos, porque as suas misericórdias não têm fim;
²³ Novas são cada manhã; grande é a tua fidelidade.
²⁴ A minha porção é o Senhor, diz a minha alma; portanto esperarei nele.
²⁵ Bom é o Senhor para os que esperam por ele, para a alma que o busca.
²⁶ Bom é ter esperança, e aguardar em silêncio a salvação do Senhor.
²⁷ Bom é para o homem suportar o jugo na sua mocidade.
²⁸ Assente-se solitário e fique em silêncio; porquanto Deus o pôs sobre ele.
²⁹ Ponha a sua boca no pó; talvez ainda haja esperança.
³⁰ Dê a sua face ao que o fere; farte-se de afronta.
³¹ Pois o Senhor não rejeitará para sempre.
³² Pois, ainda que entristeça a alguém, usará de compaixão, segundo a grandeza das suas misericórdias.
³³ Porque não aflige nem entristece de bom grado aos filhos dos homens.
³⁴ Pisar debaixo dos seus pés a todos os presos da terra,
³⁵ Perverter o direito do homem perante a face do Altíssimo,
³⁶ Subverter ao homem no seu pleito, não o veria o Senhor?
³⁷ Quem é aquele que diz, e assim acontece, quando o Senhor o não mande?
³⁸ Porventura da boca do Altíssimo não sai tanto o mal como o bem?
³⁹ De que se queixa, pois, o homem vivente? Queixe-se cada um dos seus pecados.
⁴⁰ Esquadrinhemos os nossos caminhos, e provemo-los, e voltemos para o Senhor.
⁴¹ Levantemos os nossos corações com as mãos para Deus nos céus, dizendo:
⁴² Nós transgredimos, e fomos rebeldes; por isso tu não perdoaste.
⁴³ Cobriste-te de ira, e nos perseguiste; mataste, não perdoaste.
⁴⁴ Cobriste-te de nuvens, para que não passe a nossa oração.
⁴⁵ Como escória e refugo nos puseste no meio dos povos.
⁴⁶ Todos os nossos inimigos abriram contra nós a sua boca.
⁴⁷ Temor e laço vieram sobre nós, assolação e destruição.
⁴⁸ Torrentes de água derramaram os meus olhos, por causa da destruição da filha do meu povo.
⁴⁹ Os meus olhos choram, e não cessam, porque não há descanso,
⁵⁰ Até que o Senhor atente e veja desde os céus.
⁵¹ Os meus olhos entristecem a minha alma, por causa de todas as filhas da minha cidade.
⁵² Como ave me caçam os que, sem causa, são meus inimigos.
⁵³ Cortaram-me a vida na masmorra, e lançaram pedras sobre mim.
⁵⁴ Águas correram sobre a minha cabeça; eu disse: Estou cortado.
⁵⁵ Invoquei o teu nome, Senhor, desde a mais profunda masmorra.
⁵⁶ Ouviste a minha voz; não escondas o teu ouvido ao meu suspiro, ao meu clamor.
⁵⁷ Tu te aproximaste no dia em que te invoquei; disseste: Não temas.
⁵⁸ Pleiteaste, Senhor, as causas da minha alma, remiste a minha vida.
⁵⁹ Viste, Senhor, a injustiça que me fizeram; julga a minha causa.
⁶⁰ Viste toda a sua vingança, todos os seus pensamentos contra mim,
⁶¹ Ouviste a sua afronta, Senhor, todos os seus pensamentos contra mim,
⁶² Os lábios dos que se levantam contra mim e os seus desígnios me são contrários todo o dia.
⁶³ Observa-os ao assentarem-se e ao levantarem-se; eu sou a sua música.
⁶⁴ Tu lhes darás recompensa, Senhor, conforme a obra das suas mãos.
⁶⁵ Tu lhes darás ânsia de coração, maldição tua sobre eles.
⁶⁶ Na tua ira os perseguirás, e os destruirás de debaixo dos céus do Senhor.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que não somos consumidos, segundo o profeta no verso 22?",
                        opcoes: [
                            { numero: 1, texto: "Por causa da nossa força", correta: false },
                            { numero: 2, texto: "Pelas misericórdias do Senhor", correta: true },
                            { numero: 3, texto: "Porque as muralhas eram fortes", correta: false },
                            { numero: 4, texto: "Por causa do ouro oferecido", correta: false }
                        ],
                        explicacao: "Lamentações 3:22 - As misericórdias do Senhor são a causa de não sermos consumidos, porque as suas compaixões não têm fim.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o profeta diz sobre a fidelidade de Deus e as Suas misericórdias?",
                        opcoes: [
                            { numero: 1, texto: "Que elas se renovam a cada manhã", correta: true },
                            { numero: 2, texto: "Que elas duram apenas um ano", correta: false },
                            { numero: 3, texto: "Que são difíceis de encontrar", correta: false },
                            { numero: 4, texto: "Que são apenas para os reis", correta: false }
                        ],
                        explicacao: "Lamentações 3:23 - Novas são cada manhã; grande é a tua fidelidade.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que é bom para o homem, segundo o verso 27?",
                        opcoes: [
                            { numero: 1, texto: "Ter muita riqueza", correta: false },
                            { numero: 2, texto: "Levar o jugo na sua mocidade", correta: true },
                            { numero: 3, texto: "Viver sem problemas", correta: false },
                            { numero: 4, texto: "Gobernar muitas nações", correta: false }
                        ],
                        explicacao: "Lamentações 3:27 - Bom é para o homem suportar o jugo na sua mocidade.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "O Contraste do Castigo",
            texto: `¹ Como se escureceu o ouro! Como se mudou o ouro puro e bom! Como estão espalhadas as pedras do santuário sobre cada rua!
² Os preciosos filhos de Sião, avaliados a puro ouro, como são agora reputados por vasos de barro, obra das mãos do oleiro!
³ Até os chacais abaixam o peito, dão de mamar aos seus filhos; mas a filha do meu povo tornou-se cruel como os avestruzes no deserto.
⁴ A língua do que mama fica pegada pela sede ao seu paladar; os meninos pedem pão, e ninguém lho reparte.
⁵ Os que comiam comidas finas agora desfalecem nas ruas; os que se criaram em carmesim abraçam monturos.
⁶ Porque maior é a iniquidade da filha do meu povo do que o pecado de Sodoma, a qual foi subvertida como num momento, sem que mãos lhe tocassem.
⁷ Os seus nobres eram mais puros do que a neve, mais brancos do que o leite, mais vermelhos de corpo do que os rubis, e mais polidos do que a safira.
⁸ Mas agora escureceu-se o seu aspecto mais do que o negrume; não são conhecidos nas ruas; a sua pele se lhes pegou aos ossos, secou-se, tornou-se como um pau.
⁹ Os mortos à espada foram mais ditosos do que os mortos à fome; porque estes morreram lentamente, por falta dos frutos dos campos.
¹⁰ As mãos das mulheres compassivas cozeram seus próprios filhos; serviram-lhes de alimento na destruição da filha do meu povo.
¹¹ Deu o Senhor cumprimento ao seu furor; derramou o ardor da sua ira, e acendeu fogo em Sião, que consumiu os seus fundamentos.
¹² Não creram os reis da terra, nem todos os moradores do mundo, que entrasse o adversário e o inimigo pelas portas de Jerusalém.
¹³ Foi por causa dos pecados dos profetas, das maldades dos seus sacerdotes, que derramaram o sangue dos justos no meio dela.
¹⁴ Vagueiam como cegos nas ruas, andam contaminados de sangue; de tal sorte que ninguém pode tocar nas suas roupas.
¹⁵ Desviai-vos, imundos! gritavam-lhes; desviai-vos, desviai-vos, não toqueis! quando fugiram e também andaram errantes, dizia-se entre os gentios: Nunca mais morarão aqui.
¹⁶ A face indignada do Senhor os espalhou, ele nunca mais tornará a olhar para eles; não respeitaram a pessoa dos sacerdotes, nem se compadeceram dos velhos.
¹⁷ Os nossos olhos desfaleciam, esperando o nosso vão socorro; olhávamos atentamente para uma nação que não nos podia livrar.
¹⁸ Espiaram os nossos passos, de maneira que não podíamos andar pelas nossas ruas; está chegado o nosso fim, estão cumpridos os nossos dias, porque é vindo o nosso fim.
¹⁹ Os nossos perseguidores foram mais ligeiros do que as águias dos céus; sobre os montes nos perseguiram, no deserto nos armaram ciladas.
²⁰ O fôlego das nossas narinas, o ungido do Senhor, foi preso nas suas covas; dele dizíamos: Debaixo da sua sombra viveremos entre os gentios.
²¹ Regozija-te e alegra-te, ó filha de Edom, que habitas na terra de Uz; o cálice passará também para ti; embebedar-te-ás, e te descobrirás.
²² O castigo da tua maldade está consumado, ó filha de Sião; ele nunca mais te levará para o cativeiro; ele visitará a tua maldade, ó filha de Edom, descobrirá os teus pecados.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "A que eram comparados os preciosos filhos de Sião e a que são comparados agora?",
                        opcoes: [
                            { numero: 1, texto: "Eram como ouro puro, agora como vasos de barro", correta: true },
                            { numero: 2, texto: "Eram como leões, agora como cordeiros", correta: false },
                            { numero: 3, texto: "Eram como estrelas, agora como cinzas", correta: false },
                            { numero: 4, texto: "Eram como cedros, agora como erva seca", correta: false }
                        ],
                        explicacao: "Lamentações 4:2 - Os preciosos filhos de Sião, comparáveis ao ouro puro, como são agora reputados por vasos de barro!",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual situação terrível aconteceu com as mães durante o cerco?",
                        opcoes: [
                            { numero: 1, texto: "Esconderam-se em cavernas", correta: false },
                            { numero: 2, texto: "Cozeram os seus próprios filhos para lhes servirem de alimento", correta: true },
                            { numero: 3, texto: "Fugiram todas para Moabe", correta: false },
                            { numero: 4, texto: "Daram todo o seu ouro aos caldeus", correta: false }
                        ],
                        explicacao: "Lamentações 4:10 - As mãos das mulheres piedosas cozeram seus próprios filhos; estes lhes serviram de alimento.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "Oração por Restauração",
            texto: `¹ Lembra-te, Senhor, do que nos tem sucedido; considera, e olha o nosso opróbrio.
² A nossa herança passou a estrangeiros, e as nossas casas a forasteiros.
³ Órfãos somos sem pai, nossas mães são como viúvas.
⁴ A nossa água por dinheiro a bebemos, por preço vem a nossa lenha.
⁵ Os nossos perseguidores estão sobre os nossos pescoços; estamos cansados, e não temos descanso.
⁶ Aos egípcios e aos assírios estendemos as mãos, para nos fartarem de pão.
⁷ Nossos pais pecaram, e já não existem; e nós levamos as suas maldades.
⁸ Servos dominam sobre nós; ninguém há que nos livre da sua mão.
⁹ Com perigo de nossas vidas trazemos o nosso pão, por causa da espada do deserto.
¹⁰ Nossa pele se queimou como um forno, por causa do ardor da fome.
¹¹ Forçaram as mulheres em Sião, as virgens nas cidades de Judá.
¹² Os príncipes foram enforcados pelas mãos deles; as faces dos velhos não foram reverenciadas.
¹³ Aos jovens obrigaram a moer, e os meninos caíram debaixo das cargas de lenha.
¹⁴ Os velhos já não estão mais às portas, os jovens já deixaram a sua música.
¹⁵ Cessou o gozo de nosso coração; converteu-se em lamentação a nossa dança.
¹⁶ Caiu a coroa da nossa cabeça; ai de nós! Porque pecamos.
¹⁷ Por isso desmaiou o nosso coração; por isso se escureceram os nossos olhos.
¹⁸ Pelo monte de Sião, que está assolado, andam as raposas.
¹⁹ Tu, Senhor, permaneces eternamente, e o teu trono subsiste de geração em geração.
²⁰ Por que te esquecerias de nós para sempre? Por que nos desampararias por tanto tempo?
²¹ Converte-nos a ti, Senhor, e seremos convertidos; renova os nossos dias como dantes.
²² Mas tu nos rejeitaste totalmente. Tu estás muito enfurecido contra nós.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o povo perdeu, conforme o lamento no verso 15?",
                        opcoes: [
                            { numero: 1, texto: "Cessou o gozo de nosso coração; a nossa dança converteu-se em lamentação", correta: true },
                            { numero: 2, texto: "Perderam apenas as suas casas", correta: false },
                            { numero: 3, texto: "Perderam o apetite", correta: false },
                            { numero: 4, texto: "Perderam o medo dos inimigos", correta: false }
                        ],
                        explicacao: "Lamentações 5:15 - Cessou o gozo de nosso coração; converteu-se em lamentação a nossa dança.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é o pedido final do profeta ao Senhor no verso 21?",
                        opcoes: [
                            { numero: 1, texto: "Dá-nos mais ouro", correta: false },
                            { numero: 2, texto: "Converte-nos a ti, Senhor... renova os nossos dias como dantes", correta: true },
                            { numero: 3, texto: "Destrói todos os babilônios agora", correta: false },
                            { numero: 4, texto: "Leva-nos para o deserto", correta: false }
                        ],
                        explicacao: "Lamentações 5:21 - Converte-nos a ti, Senhor, e seremos convertidos; renova os nossos dias como dantes.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};