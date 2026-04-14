// js/livros/esdras.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const esdras = {
    nome: "Esdras",
    icone: "🏗️", 
    autor: "Esdras",
    //background: "./imagens/esdras_bg.jpg", 

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "O Decreto de Ciro",
            texto: `¹ No primeiro ano de Ciro, rei da Pérsia (para que se cumprisse a palavra do Senhor, pela boca de Jeremias), despertou o Senhor o espírito de Ciro, rei da Pérsia, o qual fez passar pregão por todo o seu reino, como também por escrito, dizendo:
² Assim diz Ciro, rei da Pérsia: O Senhor Deus dos céus me deu todos os reinos da terra, e me encarregou de lhe edificar uma casa em Jerusalém, que está em Judá.
³ Quem há entre vós, de todo o seu povo, seja seu Deus com ele, e suba a Jerusalém, que está em Judá, e edifique a casa do Senhor Deus de Israel (ele é o Deus) que está em Jerusalém.
⁴ E todo aquele que ficar atrás em algum lugar em que andar peregrinando, os homens do seu lugar o ajudarão com prata, com ouro, com bens, e com gados, além das dádivas voluntárias para a casa de Deus, que está em Jerusalém.
⁵ Então se levantaram os chefes dos pais de Judá e Benjamim, e os sacerdotes e os levitas, com todos aqueles cujo espírito Deus despertou, para subirem a edificar a casa do Senhor, que está em Jerusalém.
⁶ E todos os que habitavam nos arredores lhes firmaram as mãos com vasos de prata, com ouro, com bens e com gado, e com coisas preciosas; além de tudo o que voluntariamente se deu.
⁷ Também o rei Ciro tirou os utensílios da casa do Senhor, que Nabucodonosor tinha trazido de Jerusalém, e que tinha posto na casa de seus deuses.
⁸ Estes tirou Ciro, rei da Pérsia, pela mão de Mitredate, o tesoureiro, que os entregou contados a Sesbazar, príncipe de Judá.
⁹ E este é o número deles: trinta travessas de ouro, mil travessas de prata, vinte e nove facas,
¹⁰ Trinta bacias de ouro, mais outras quatrocentas e dez bacias de prata, e mil outros utensílios.
¹¹ Todos os utensílios de ouro e de prata foram cinco mil e quatrocentos; todos estes levou Sesbazar, quando os do cativeiro subiram de Babilônia para Jerusalém.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Ciro, rei da Pérsia, devolveu aos exilados para que levassem de volta a Jerusalém?",
                        opcoes: [
                            { numero: 1, texto: "As armas de Saul", correta: false },
                            { numero: 2, texto: "Os utensílios da casa do Senhor que Nabucodonosor tinha trazido", correta: true },
                            { numero: 3, texto: "A Arca da Aliança", correta: false },
                            { numero: 4, texto: "Estátuas persas", correta: false }
                        ],
                        explicacao: "Esdras 1:7 - Também o rei Ciro tirou os utensílios da casa do Senhor, que Nabucodonosor tinha trazido de Jerusalém...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "O Número dos que Voltaram",
            texto: ` ¹ Estes são os filhos da província, que subiram do cativeiro, dentre os exilados, que Nabucodonosor, rei de Babilônia, tinha transportado a Babilônia, e tornaram a Jerusalém e a Judá, cada um para a sua cidade;
² Os quais vieram com Zorobabel, Jesua, Neemias, Seraías, Reelaías, Mardoqueu, Bilsã, Mizpar, Bigvai, Reum e Baaná. O número dos homens do povo de Israel:
³ Os filhos de Parós, dois mil cento e setenta e dois.
⁴ Os filhos de Sefatias, trezentos e setenta e dois.
⁵ Os filhos de Ará, setecentos e setenta e cinco.
⁶ Os filhos de Paate-Moabe, dos filhos de Jesuá-Joabe, dois mil oitocentos e doze.
⁷ Os filhos de Elão, mil duzentos e cinquenta e quatro.
⁸ Os filhos de Zatu, novecentos e quarenta e cinco.
⁹ Os filhos de Zacai, setecentos e sessenta.
¹⁰ Os filhos de Bani, seiscentos e quarenta e dois.
¹¹ Os filhos de Bebai, seiscentos e vinte e três.
¹² Os filhos de Azgade, mil duzentos e vinte e dois.
¹³ Os filhos de Adonicão, seiscentos e sessenta e seis.
¹⁴ Os filhos de Bigvai, dois mil e cinquenta e seis.
¹⁵ Os filhos de Adim, quatrocentos e cinquenta e quatro.
¹⁶ Os filhos de Ater, de Ezequias, noventa e oito.
¹⁷ Os filhos de Bezai, trezentos e vinte e três.
¹⁸ Os filhos de Jora, cento e doze.
¹⁹ Os filhos de Hasum, duzentos e vinte e três.
²⁰ Os filhos de Gibar, noventa e cinco.
²¹ Os filhos de Belém, cento e vinte e três.
²² Os homens de Netofá, cinquenta e seis.
²³ Os homens de Anatote, cento e vinte e oito.
²⁴ Os filhos de Azmavete, quarenta e dois.
²⁵ Os filhos de Quiriate-Arim, Quefira e Beerote, setecentos e quarenta e três.
²⁶ Os filhos de Ramá, e de Geba, seiscentos e vinte e um.
²⁷ Os homens de Micmás, cento e vinte e dois.
²⁸ Os homens de Betel e de Ai, duzentos e vinte e três.
²⁹ Os filhos de Nebo, cinquenta e dois.
³⁰ Os filhos de Magbis, cento e cinquenta e seis.
³¹ Os filhos do outro Elão, mil duzentos e cinquenta e quatro.
³² Os filhos de Harim, trezentos e vinte.
³³ Os filhos de Lode, de Hadide e de Ono, setecentos e vinte e cinco.
³⁴ Os filhos de Jericó, trezentos e quarenta e cinco.
³⁵ Os filhos de Senaá, três mil seiscentos e trinta.
³⁶ Os sacerdotes: os filhos de Jedaías, da casa de Jesuá, novecentos e setenta e três.
³⁷ Os filhos de Imer, mil e cinquenta e dois.
³⁸ Os filhos de Pasur, mil duzentos e quarenta e sete.
³⁹ Os filhos de Harim, mil e dezessete.
⁴⁰ Os levitas: os filhos de Jesuá e Cadmiel, dos filhos de Hodavias, setenta e quatro.
⁴¹ Os cantores: os filhos de Asafe, cento e vinte e oito.
⁴² Os filhos dos porteiros: os filhos de Salum, os filhos de Ater, os filhos de Talmom, os filhos de Acube, os filhos de Hatita, os filhos de Sobai; ao todo, cento e trinta e nove.
⁴³ Os netinins: os filhos de Zia, os filhos de Hasufa, os filhos de Tabaote,
⁴⁴ Os filhos de Querós, os filhos de Siá, os filhos de Padom,
⁴⁵ Os filhos de Lebaná, os filhos de Hagaba, os filhos de Acube,
⁴⁶ Os filhos de Hagabe, os filhos de Sanlai, os filhos de Hanã,
⁴⁷ Os filhos de Gidel, os filhos de Gaar, os filhos de Reaías,
⁴⁸ Os filhos de Rezim, os filhos de Necoda, os filhos de Gazão,
⁴⁹ Os filhos de Uzá, os filhos de Paseá, os filhos de Besai,
⁵⁰ Os filhos de Asna, os filhos de Meunim, os filhos de Nefussim,
⁵¹ Os filhos de Bacbuque, os filhos de Hacufa, os filhos de Harur,
⁵² Os filhos de Bazlute, os filhos de Meída, os filhos de Harsa,
⁵³ Os filhos de Barcos, os filhos de Sísera, os filhos de Tama.
⁵⁴ Os filhos de Neziá, os filhos de Hatifa.
⁵⁵ Os filhos dos servos de Salomão; os filhos de Sotai, os filhos de Soferete, os filhos de Peruda,
⁵⁶ Os filhos de Jaalá, os filhos de Darcom, os filhos de Gidel,
⁵⁷ Os filhos de Sefatias, os filhos de Hatil, os filhos de Poquerete-Hazebaim, os filhos de Ami.
⁵⁸ Todos os netinins, e os filhos dos servos de Salomão, trezentos e noventa e dois.
⁵⁹ Também estes subiram de Tel-Melá e Tel-Harsa, Querube, Adã e Imer; porém não puderam provar que as suas famílias e a sua linhagem eram de Israel:
⁶⁰ Os filhos de Delaías, os filhos de Tobias, os filhos de Necoda, seiscentos e cinquenta e dois.
⁶¹ E dos filhos dos sacerdotes: os filhos de Habaías, os filhos de Coz, os filhos de Barzilai, que tomou mulher das filhas de Barzilai, o gileadita, e que foi chamado do seu nome.
⁶² Estes procuraram o seu registro entre os que estavam arrolados nas genealogias, mas não se acharam nelas; assim, por imundos, foram excluídos do sacerdócio.
⁶³ E o governador lhes disse que não comessem das coisas consagradas, até que houvesse sacerdote com Urim e com Tumim.
⁶⁴ Toda esta congregação junta foi de quarenta e dois mil trezentos e sessenta,
⁶⁵ Afora os seus servos e as suas servas, que foram sete mil trezentos e trinta e sete; também tinha duzentos cantores e cantoras.
⁶⁶ Os seus cavalos, setecentos e trinta e seis; os seus mulos, duzentos e quarenta e cinco;
⁶⁷ Os seus camelos, quatrocentos e trinta e cinco; os jumentos, seis mil setecentos e vinte.
⁶⁸ E alguns dos chefes dos pais, vindo à casa do Senhor, que habita em Jerusalém, deram ofertas voluntárias para a casa de Deus, para a estabelecerem no seu lugar.
⁶⁹ Conforme as suas posses, deram para o tesouro da obra, em ouro, sessenta e uma mil dracmas, e em prata cinco mil libras, e cem vestes sacerdotais.
⁷⁰ E habitaram os sacerdotes e os levitas, e alguns do povo, tanto os cantores, como os porteiros, e os netinins, nas suas cidades; como também todo o Israel nas suas cidades.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era o número total da congregação que voltou do exílio para Jerusalém?",
                        opcoes: [
                            { numero: 1, texto: "Doze mil pessoas", correta: false },
                            { numero: 2, texto: "Quarenta e duas mil, trezentas e sessenta pessoas", correta: true },
                            { numero: 3, texto: "Cem mil pessoas", correta: false },
                            { numero: 4, texto: "Setecentas pessoas", correta: false }
                        ],
                        explicacao: "Esdras 2:64 - Toda esta congregação junta foi de quarenta e dois mil trezentos e sessenta.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "Reconstrução do Altar e Alicerces",
            texto: ` ¹ Chegando, pois, o sétimo mês, e estando os filhos de Israel já nas cidades, ajuntou-se o povo, como um só homem, em Jerusalém.
² E levantou-se Jesuá, filho de Jozadaque, e seus irmãos, os sacerdotes, e Zorobabel, filho de Sealtiel, e seus irmãos, e edificaram o altar do Deus de Israel, para oferecerem sobre ele holocaustos, como está escrito na lei de Moisés, o homem de Deus.
³ E firmaram o altar sobre as suas bases, porque o terror estava sobre eles, por causa dos povos das terras; e ofereceram sobre ele holocaustos ao Senhor, holocaustos pela manhã e à tarde.
⁴ E celebraram a festa dos tabernáculos, como está escrito; ofereceram holocaustos cada dia, por ordem, conforme ao rito, cada coisa em seu dia.
⁵ E depois disto o holocausto contínuo, e os das luas novas e de todas as solenidades consagradas ao Senhor; como também de qualquer que oferecia oferta voluntária ao Senhor;
⁶ Desde o primeiro dia do sétimo mês começaram a oferecer holocaustos ao Senhor; porém ainda não estavam postos os fundamentos do templo do Senhor.
⁷ Deram, pois, o dinheiro aos pedreiros e carpinteiros, como também comida e bebida, e azeite aos sidônios, e aos tírios, para trazerem do Líbano madeira de cedro ao mar, para Jope, segundo a concessão que lhes tinha feito Ciro, rei da Pérsia.
⁸ E no segundo ano da sua vinda à casa de Deus em Jerusalém, no segundo mês, Zorobabel, filho de Sealtiel, e Jesuá, filho de Jozadaque, e os outros seus irmãos, os sacerdotes e os levitas, e todos os que vieram do cativeiro a Jerusalém, começaram a obra da casa do Senhor, e constituíram os levitas da idade de vinte anos para cima, para que a dirigissem.
⁹ Então se levantou Jesuá, seus filhos, e seus irmãos, Cadmiel e seus filhos, os filhos de Judá, como um só homem, para dirigirem os que faziam a obra na casa de Deus, bem como os filhos de Henadade, seus filhos e seus irmãos, os levitas.
¹⁰ Quando, pois, os edificadores lançaram os alicerces do templo do Senhor, então apresentaram-se os sacerdotes, já vestidos e com trombetas, e os levitas, filhos de Asafe, com címbalos, para louvarem ao Senhor conforme à instituição de Davi, rei de Israel.
¹¹ E cantavam juntos por grupo, louvando e rendendo graças ao Senhor, dizendo: porque é bom; porque a sua benignidade dura para sempre sobre Israel. E todo o povo jubilou com altas vozes, quando louvaram ao Senhor, pela fundação da casa do Senhor.
¹² Porém muitos dos sacerdotes, e levitas e chefes dos pais, já idosos, que viram a primeira casa, choraram em altas vozes quando à sua vista foram lançados os fundamentos desta casa; mas muitos levantaram as vozes com júbilo e com alegria.
¹³ De maneira que não discernia o povo as vozes do júbilo de alegria das vozes do choro do povo; porque o povo jubilava com tão altas vozes, que o som se ouvia de muito longe.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual foi a reação do povo quando os construtores lançaram os alicerces do Templo do Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Todos ficaram em silêncio", correta: false },
                            { numero: 2, texto: "Muitos jubilaram com alegria, mas muitos anciãos choraram em altas vozes", correta: true },
                            { numero: 3, texto: "O povo ficou com medo", correta: false },
                            { numero: 4, texto: "Houve uma grande revolta", correta: false }
                        ],
                        explicacao: "Esdras 3:12 - ...muitos dos sacerdotes... que tinham visto a primeira casa, choraram em altas vozes... e muitos jubilaram com alegria.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "A Oposição à Obra",
            texto: ` ¹ Ouvindo, pois, os adversários de Judá e Benjamim que os que voltaram do cativeiro edificavam o templo ao Senhor Deus de Israel,
² Chegaram-se a Zorobabel e aos chefes dos pais, e disseram-lhes: Deixai-nos edificar convosco, porque, como vós, buscaremos a vosso Deus; como também já lhe sacrificamos desde os dias de Esar-Hadom, rei da Assíria, que nos fez subir aqui.
³ Porém Zorobabel, e Jesuá, e os outros chefes dos pais de Israel lhes disseram: Não convém que nós e vós edifiquemos casa a nosso Deus; mas nós sozinhos a edificaremos ao Senhor Deus de Israel, como nos ordenou o rei Ciro, rei da Pérsia.
⁴ Todavia o povo da terra debilitava as mãos do povo de Judá, e inquietava-os no edificar.
⁵ E alugaram contra eles conselheiros, para frustrarem o seu plano, todos os dias de Ciro, rei da Pérsia, até ao reinado de Dario, rei da Pérsia.
⁶ No reinado de Assuero, no princípio do seu reinado, escreveram uma acusação contra os habitantes de Judá e de Jerusalém.
⁷ E nos dias de Artaxerxes escreveram Bislão, Mitredate, Tabeel, e os outros seus companheiros, a Artaxerxes, rei da Pérsia; e a carta estava escrita em caracteres siríacos, e na língua siríaca.
⁸ Escreveram, pois, Reum, o chanceler, e Sinsai, o escrivão, uma carta contra Jerusalém, ao rei Artaxerxes, do teor seguinte:
⁹ Então escreveu Reum, o chanceler, e Sinsai, o escrivão, e os outros seus companheiros, os dinaítas, afarsaquitas, tarpelitas, afarsitas, arquevitas, babilônios, susanquitas, deavitas, elamitas,
¹⁰ E os outros povos, que o grande e afamado Asnapar transportou, e que fez habitar na cidade de Samaria, e nas demais províncias dalém do rio, em tal tempo.
¹¹ Este, pois, é o teor da carta que mandaram ao rei Artaxerxes: Teus servos, os homens dalém do rio, em tal tempo.
¹² Saiba o rei que os judeus, que subiram de ti, vieram a nós em Jerusalém, e reedificam aquela rebelde e malvada cidade, e vão restaurando os seus muros, e reparando os seus fundamentos.
¹³ Agora saiba o rei que, se aquela cidade se reedificar, e os muros se restaurarem, eles não pagarão os direitos, os tributos e os pedágios; e assim se danificará a fazenda dos reis.
¹⁴ Agora, pois, porquanto somos assalariados do palácio, e não nos convém ver a desonra do rei, por isso mandamos avisar ao rei,
¹⁵ Para que se busque no livro das crônicas de teus pais. E acharás no livro das crônicas, e saberás que aquela foi uma cidade rebelde, e danosa aos reis e províncias, e que nela houve rebelião em tempos antigos; por isso foi aquela cidade destruída.
¹⁶ Nós, pois, fazemos notório ao rei que, se aquela cidade se reedificar, e os seus muros se restaurarem, sucederá que não terás porção alguma deste lado do rio.
¹⁷ E o rei enviou esta resposta a Reum, o chanceler, e a Sinsai, o escrivão, e aos demais seus companheiros, que habitavam em Samaria; como também aos demais que estavam dalém do rio: Paz! Em tal tempo.
¹⁸ A carta que nos enviastes foi explicitamente lida diante de mim.
¹⁹ E, ordenando-o eu, buscaram e acharam, que de tempos antigos aquela cidade se levantou contra os reis, e nela se têm feito rebelião e sedição.
²⁰ Também houve reis poderosos sobre Jerusalém que dalém do rio dominaram em todo o lugar, e se lhes pagaram direitos, tributos e pedágios.
²¹ Agora, pois, dai ordem para impedirdes aqueles homens, a fim de que não se edifique aquela cidade, até que eu dê uma ordem.
²² E guardai-vos de serdes remissos nisto; por que cresceria o dano para prejuízo dos reis?
²³ Então, depois que a cópia da carta do rei Artaxerxes foi lida perante Reum, e Sinsai, o escrivão, e seus companheiros, apressadamente foram eles a Jerusalém, aos judeus, e os impediram à força e com violência.
²⁴ Então cessou a obra da casa de Deus, que estava em Jerusalém; e cessou até ao ano segundo do reinado de Dario, rei da Pérsia.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que os adversários de Judá fizeram para impedir a construção após terem seu pedido de ajuda negado?",
                        opcoes: [
                            { numero: 1, texto: "Alugaram conselheiros para frustrar o plano deles", correta: true },
                            { numero: 2, texto: "Derrubaram os muros à noite", correta: false },
                            { numero: 3, texto: "Daram presentes ao rei", correta: false },
                            { numero: 4, texto: "Mudaram-se para o Egito", correta: false }
                        ],
                        explicacao: "Esdras 4:5 - E alugaram contra eles conselheiros, para frustrarem o seu plano...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "Ageu e Zacarias Animam o Povo",
            texto: `¹ E os profetas Ageu e Zacarias, filho de Ido, profetizaram aos judeus que estavam em Judá, e em Jerusalém; em nome do Deus de Israel lhes profetizaram.
² Então se levantaram Zorobabel, filho de Sealtiel, e Jesuá, filho de Jozadaque, e começaram a edificar a casa de Deus, que está em Jerusalém; e com eles os profetas de Deus, que os ajudavam.
³ Naquele tempo vieram a eles Tatenai, governador dalém do rio, e Setar-Bozenai, e os seus companheiros, e disseram-lhes assim: Quem vos deu ordem para reedificardes esta casa, e restaurardes este muro?
⁴ Disseram-lhes, mais: E quais são os nomes dos homens que construíram este edifício?
⁵ Porém os olhos de Deus estavam sobre os anciãos dos judeus, e não os impediram, até que o negócio chegasse a Dario, e viesse resposta por carta sobre isso.
⁶ Cópia da carta que Tatenai, o governador dalém do rio, com Setar-Bozenai e os seus companheiros, os afarsaquitas, que estavam dalém do rio, enviaram ao rei Dario.
⁷ Enviaram-lhe uma carta, na qual estava escrito: Toda a paz ao rei Dario.
⁸ Seja notório ao rei, que nós fomos à província de Judá, à casa do grande Deus, a qual se edifica com grandes pedras, e a madeira já está sendo posta nas paredes; e esta obra vai sendo feita com diligência, e se adianta em suas mãos.
⁹ Então perguntamos aos anciãos, e assim lhes dissemos: Quem vos deu ordem para reedificardes esta casa, e restaurardes este muro?
¹⁰ Além disso, lhes perguntamos também pelos seus nomes, para tos declararmos; para que te pudéssemos escrever os nomes dos homens que entre eles são os chefes.
¹¹ E esta foi a resposta que nos deram: Nós somos servos do Deus dos céus e da terra, e reedificamos a casa que há muitos anos foi edificada; porque um grande rei de Israel a edificou e a terminou.
¹² Mas depois que nossos pais provocaram à ira o Deus dos céus, ele os entregou nas mãos de Nabucodonosor, rei de Babilônia, o caldeu, o qual destruiu esta casa, e transportou o povo para Babilônia.
¹³ Porém, no primeiro ano de Ciro, rei de Babilônia, o rei Ciro deu ordem para que esta casa de Deus se reedificasse.
¹⁴ E até os utensílios de ouro e prata, da casa de Deus, que Nabucodonosor tomou do templo que estava em Jerusalém e os levou para o templo de Babilônia, o rei Ciro os tirou do templo de Babilônia, e foram dados a um homem cujo nome era Sesbazar, a quem nomeou governador.
¹⁵ E disse-lhe: Toma estes utensílios, vai e leva-os ao templo que está em Jerusalém, e faze reedificar a casa de Deus, no seu lugar.
¹⁶ Então veio este Sesbazar, e pôs os fundamentos da casa de Deus, que está em Jerusalém, e desde então para cá se está reedificando, e ainda não está acabada.
¹⁷ Agora, pois, se parece bem ao rei, busque-se na casa dos tesouros do rei, que está em Babilônia, se é verdade que se deu uma ordem pelo rei Ciro para reedificar esta casa de Deus em Jerusalém; e sobre isto nos faça saber a vontade do rei.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quais profetas ajudaram e profetizaram aos judeus para que retomassem a obra do Templo?",
                        opcoes: [
                            { numero: 1, texto: "Elias e Eliseu", correta: false },
                            { numero: 2, texto: "Isaías e Jeremias", correta: false },
                            { numero: 3, texto: "Ageu e Zacarias", correta: true },
                            { numero: 4, texto: "Daniel e Ezequiel", correta: false }
                        ],
                        explicacao: "Esdras 5:1 - E os profetas Ageu e Zacarias... profetizaram aos judeus que estavam em Judá e em Jerusalém.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "A Conclusão e Dedicação do Templo",
            texto: ` ¹ Então o rei Dario deu ordem, e buscaram nos arquivos, onde se guardavam os tesouros em Babilônia.
² E em Acmeta, no palácio, que está na província de Média, se achou um rolo, e nele estava escrito um memorial que dizia assim:
³ No primeiro ano do rei Ciro, o rei Ciro estabeleceu o seguinte decreto: A casa de Deus, em Jerusalém, se reedificará para lugar em que se ofereçam sacrifícios, e seus fundamentos serão firmes; a sua altura de sessenta côvados, e a sua largura de sessenta côvados;
⁴ Com três carreiras de grandes pedras, e uma carreira de madeira nova; e a despesa se fará da casa do rei.
⁵ Além disso, os utensílios de ouro e de prata da casa de Deus, que Nabucodonosor transportou do templo que estava em Jerusalém, e levou para Babilônia, serão restituídos, para que voltem ao seu lugar, ao templo que está em Jerusalém, e serão postos na casa de Deus.
⁶ Agora, pois, Tatenai, governador dalém do rio, Setar-Bozenai, e os seus companheiros, os afarsaquitas, que habitais dalém do rio, apartai-vos dali.
⁷ Deixai que se faça a obra desta casa de Deus; que o governador dos judeus e os anciãos dos judeus edifiquem esta casa de Deus no seu lugar.
⁸ Também por mim se decreta o que haveis de fazer com os anciãos dos judeus, para a reedificação desta casa de Deus, a saber: que da fazenda do rei, dos tributos dalém do rio se pague prontamente a despesa a estes homens, para que não interrompam a obra.
⁹ E o que for necessário, como bezerros, carneiros, e cordeiros, para holocaustos ao Deus dos céus, trigo, sal, vinho e azeite, segundo o rito dos sacerdotes que estão em Jerusalém, dê-se-lhes, de dia em dia, para que não haja falta.
¹⁰ Para que ofereçam sacrifícios de cheiro suave ao Deus dos céus, e orem pela vida do rei e de seus filhos.
¹¹ Também por mim se decreta que todo o homem que mudar este decreto, se arrancará um madeiro da sua casa, e, levantado, o pendurarão nele, e da sua casa se fará por isso um monturo.
¹² O Deus, pois, que fez habitar ali o seu nome derrube a todos os reis e povos que estenderem a sua mão para mudar o decreto e para destruir esta casa de Deus, que está em Jerusalém. Eu, Dario, baixei o decreto; com diligência se faça.
¹³ Então Tatenai, o governador dalém do rio, Setar-Bozenai e os seus companheiros, assim fizeram diligentemente, conforme ao que decretara o rei Dario.
¹⁴ E os anciãos dos judeus iam edificando e prosperando pela profecia do profeta Ageu, e de Zacarias, filho de Ido. E edificaram e terminaram a obra conforme ao mandado do Deus de Israel, e conforme ao decreto de Ciro e Dario, e de Artaxerxes, rei da Pérsia.
¹⁵ E acabou-se esta casa no terceiro dia do mês de Adar, no sexto ano do reinado do rei Dario.
¹⁶ E os filhos de Israel, os sacerdotes, os levitas, e o restante dos filhos do cativeiro, fizeram a dedicação desta casa de Deus com alegria.
¹⁷ E ofereceram para a dedicação desta casa de Deus cem novilhos, duzentos carneiros, quatrocentos cordeiros, e doze cabritos por expiação do pecado de todo o Israel; segundo o número das tribos de Israel.
¹⁸ E puseram os sacerdotes nas suas turmas e os levitas nas suas divisões, para o ministério de Deus, em Jerusalém, conforme ao que está escrito no livro de Moisés.
¹⁹ E os filhos do cativeiro celebraram a páscoa no dia catorze do primeiro mês.
²⁰ Porque os sacerdotes e levitas se purificaram como se fossem um só homem, todos estavam limpos; e mataram o cordeiro da páscoa para todos os filhos do cativeiro, e para seus irmãos, os sacerdotes, e para si mesmos.
²¹ Assim comeram a páscoa os filhos de Israel que tinham voltado do cativeiro, com todos os que com eles se apartaram da imundícia dos gentios da terra, para buscarem o Senhor Deus de Israel;
²² E celebraram a festa dos pães ázimos por sete dias com alegria; porque o Senhor os tinha alegrado, e tinha mudado o coração do rei da Assíria a favor deles, para lhes fortalecer as mãos na obra da casa de Deus, o Deus de Israel.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Em qual mês o Segundo Templo foi finalmente acabado, sob o reinado de Dario?",
                        opcoes: [
                            { numero: 1, texto: "No mês de Adar", correta: true },
                            { numero: 2, texto: "No mês de Nisã", correta: false },
                            { numero: 3, texto: "No mês de Elul", correta: false },
                            { numero: 4, texto: "No mês de Tisri", correta: false }
                        ],
                        explicacao: "Esdras 6:15 - E acabou-se esta casa no dia terceiro do mês de Adar...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como o povo celebrou a dedicação da casa de Deus e a Páscoa?",
                        opcoes: [
                            { numero: 1, texto: "Com muito choro", correta: false },
                            { numero: 2, texto: "Com alegria, pois o Senhor os tinha alegrado", correta: true },
                            { numero: 3, texto: "Em silêncio absoluto", correta: false },
                            { numero: 4, texto: "Apenas com jejum", correta: false }
                        ],
                        explicacao: "Esdras 6:22 - E celebraram a festa dos pães ázimos sete dias com alegria; porque o Senhor os tinha alegrado...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        7: {
            titulo: "Esdras Chega a Jerusalém",
            texto: ` ¹ E passadas estas coisas no reinado de Artaxerxes, rei da Pérsia, Esdras, filho de Seraías, filho de Azarias, filho de Hilquias,
² Filho de Salum, filho de Zadoque, filho de Aitube,
³ Filho de Amarias, filho de Azarias, filho de Meraiote,
⁴ Filho de Zeraquias, filho de Uzi, filho de Buqui,
⁵ Filho de Abisua, filho de Fineias, filho de Eleazar, filho de Arão, o sumo sacerdote;
⁶ Este Esdras subiu de Babilônia; e era escriba hábil na lei de Moisés, que o Senhor Deus de Israel tinha dado; e, segundo a mão do Senhor seu Deus, que estava sobre ele, o rei lhe deu tudo quanto lhe pedira.
⁷ Também subiram a Jerusalém alguns dos filhos de Israel, dos sacerdotes, dos levitas, dos cantores, dos porteiros e dos netineus, no sétimo ano do rei Artaxerxes.
⁸ E no quinto mês chegou a Jerusalém, no sétimo ano deste rei.
⁹ Pois no primeiro dia do primeiro mês foi o princípio da partida de Babilônia; e no primeiro dia do quinto mês chegou a Jerusalém, segundo a boa mão do seu Deus sobre ele.
¹⁰ Porque Esdras tinha preparado o seu coração para buscar a lei do Senhor e para cumpri-la e para ensinar em Israel os seus estatutos e os seus juízos.
¹¹ Esta é, pois, a cópia da carta que o rei Artaxerxes deu ao sacerdote Esdras, o escriba das palavras dos mandamentos do Senhor, e dos seus estatutos sobre Israel:
¹² Artaxerxes, rei dos reis, ao sacerdote Esdras, escriba da lei do Deus do céu, paz perfeita, em tal tempo.
¹³ Por mim se decreta que no meu reino todo aquele do povo de Israel, e dos seus sacerdotes e levitas, que quiser ir contigo a Jerusalém, vá.
¹⁴ Porquanto és enviado da parte do rei e dos seus sete conselheiros para fazeres inquirição a respeito de Judá e de Jerusalém, conforme à lei do teu Deus, que está na tua mão;
¹⁵ E para levares a prata e o ouro que o rei e os seus conselheiros voluntariamente deram ao Deus de Israel, cuja habitação está em Jerusalém;
¹⁶ E toda a prata e o ouro que achares em toda a província de Babilônia, com as ofertas voluntárias do povo e dos sacerdotes, que voluntariamente oferecerem, para a casa de seu Deus, que está em Jerusalém.
¹⁷ Portanto diligentemente comprarás com este dinheiro novilhos, carneiros, cordeiros, com as suas ofertas de alimentos, e as suas libações, e as oferecerás sobre o altar da casa de vosso Deus, que está em Jerusalém.
¹⁸ Também o que a ti e a teus irmãos bem parecer fazerdes do restante da prata e do ouro, o fareis conforme a vontade do vosso Deus.
¹⁹ E os utensílios que te foram dados para o serviço da casa de teu Deus, restitui-os perante o Deus de Jerusalém.
²⁰ E tudo mais que for necessário para a casa de teu Deus, que te convenha dar, dá-lo-ás da casa dos tesouros do rei.
²¹ E por mim mesmo, o rei Artaxerxes, se decreta a todos os tesoureiros que estão dalém do rio que tudo quanto vos pedir o sacerdote Esdras, escriba da lei do Deus dos céus, prontamente se faça.
²² Até cem talentos de prata, e até cem coros de trigo, e até cem batos de vinho, e até cem batos de azeite; e sal à vontade.
²³ Tudo quanto se ordenar, segundo o mandado do Deus do céu, prontamente se faça para a casa do Deus do céu; pois, para que haveria grande ira sobre o reino do rei e de seus filhos?
²⁴ Também vos fazemos saber acerca de todos os sacerdotes e levitas, cantores, porteiros, netineus e ministros desta casa de Deus, que não será lícito impor-lhes, nem tributo, nem contribuição, nem renda.
²⁵ E tu, Esdras, conforme a sabedoria do teu Deus, que possues, nomeia magistrados e juízes, que julguem a todo o povo que está dalém do rio, a todos os que sabem as leis do teu Deus; e ao que não as sabe, lhe ensinarás.
²⁶ E todo aquele que não observar a lei do teu Deus e a lei do rei, seja julgado prontamente; quer seja morte, quer desterro, quer multa sobre os seus bens, quer prisão.
²⁷ Bendito seja o Senhor Deus de nossos pais, que tal inspirou ao coração do rei, para ornar a casa do Senhor, que está em Jerusalém.
²⁸ E que estendeu para mim a sua benignidade perante o rei e os seus conselheiros e todos os príncipes poderosos do rei. Assim me animei, segundo a mão do Senhor meu Deus sobre mim, e ajuntei dentre Israel alguns chefes para subirem comigo.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "A que Esdras tinha preparado o seu coração?",
                        opcoes: [
                            { numero: 1, texto: "Para ser o novo rei de Israel", correta: false },
                            { numero: 2, texto: "Para buscar a lei do Senhor, para a cumprir e para ensinar", correta: true },
                            { numero: 3, texto: "Para lutar nas guerras contra os persas", correta: false },
                            { numero: 4, texto: "Para acumular tesouros no templo", correta: false }
                        ],
                        explicacao: "Esdras 7:10 - Porque Esdras tinha preparado o seu coração para buscar a lei do Senhor e para a cumprir e para ensinar em Israel os seus estatutos...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        8: {
            titulo: "A Jornada e o Jejum",
            texto: ` ¹ Estes, pois, são os chefes das casas paternas e esta a genealogia dos que subiram comigo de Babilônia no reinado do rei Artaxerxes:
² Dos filhos de Fineias, Gérson; dos filhos de Itamar, Daniel; dos filhos de Davi, Hatus;
³ Dos filhos de Secanias, e dos filhos de Parós, Zacarias, e com ele, segundo a genealogia, se contaram até cento e cinquenta homens.
⁴ Dos filhos de Paate-Moabe, Elioenai, filho de Zacarias, e com ele duzentos homens.
⁵ Dos filhos de Secanias, o filho de Jeaziel, e com ele trezentos homens.
⁶ E dos filhos de Adim, Ebede, filho de Jônatas, e com ele cinquenta homens.
⁷ E dos filhos de Elão, Jesaías, filho de Atalias, e com ele setenta homens.
⁸ E dos filhos de Sefatias, Zebadias, filho de Micael, e com ele oitenta homens.
⁹ Dos filhos de Joabe, Obadias, filho de Jeiel, e com ele duzentos e dezoito homens.
¹⁰ E dos filhos de Selomite, o filho de Josifias, e com ele cento e sessenta homens.
¹¹ E dos filhos de Bebai, Zacarias, o filho de Bebai, e com ele vinte e oito homens.
¹² E dos filhos de Azgade, Joanã, o filho de Hacatã, e com ele cento e dez homens.
¹³ E dos últimos filhos de Adonicão, cujos nomes eram estes: Elifelete, Jeiel e Semaías, e com eles sessenta homens.
¹⁴ E dos filhos de Bigvai, Utai e Zabude, e com eles setenta homens.
¹⁵ E ajuntei-os perto do rio que vai a Aava, e ficamos ali acampados três dias. Então atentei para o povo e para os sacerdotes, e não achei ali nenhum dos filhos de Levi.
¹⁶ Enviei, pois, Eliezer, Ariel, Semaías, Elnatã, Jaribe, Elnatã, Natã, Zacarias e Mesulão, os chefes; como também a Joiaribe, e a Elnatã, que eram entendidos.
¹⁷ E enviei-os com mandado a Ido, o chefe no local chamado Casifia; e falei a eles o que deveriam dizer a Ido e aos seus irmãos, os netineus, no local chamado Casifia, que nos trouxessem ministros para a casa do nosso Deus.
¹⁸ E trouxeram-nos, segundo a boa mão de Deus sobre nós, um homem entendido, dos filhos de Mali, filho de Levi, filho de Israel, a saber: Serebias, com os seus filhos e irmãos, dezoito;
¹⁹ E a Hasabias, e com ele Jesaías, dos filhos de Merari, com seus irmãos e os filhos deles, vinte;
²⁰ E dos netineus que Davi e os príncipes deram para o ministério dos levitas, duzentos e vinte netineus; que foram todos mencionados por seus nomes.
²¹ Então apregoei ali um jejum junto ao rio Aava, para nos humilharmos diante da face de nosso Deus, para lhe pedirmos caminho seguro para nós, para nossos filhos e para todos os nossos bens.
²² Porque tive vergonha de pedir ao rei exército e cavaleiros para nos defenderem do inimigo pelo caminho; porquanto tínhamos falado ao rei, dizendo: A mão do nosso Deus é sobre todos os que o buscam, para o bem deles; mas o seu poder e a sua ira contra todos os que o deixam.
²³ Nós, pois, jejuamos, e pedimos isto ao nosso Deus, e moveu-se pelas nossas orações.
²⁴ Então separei doze dos chefes dos sacerdotes: Serebias, Hasabias, e com eles dez dos seus irmãos.
²⁵ E pesei-lhes a prata, o ouro e os vasos; que eram a oferta para a casa de nosso Deus, que ofereceram o rei, os seus conselheiros, os seus príncipes e todo o Israel que ali se achou.
²⁶ E pesei em suas mãos seiscentos e cinquenta talentos de prata, e em vasos de prata cem talentos, e cem talentos de ouro,
²⁷ E vinte bacias de ouro, de mil dracmas, e dois vasos de bom metal lustroso, tão precioso como ouro.
²⁸ E disse-lhes: Vós sois santos ao Senhor, e são santos estes utensílios, como também esta prata e este ouro, oferta voluntária, oferecida ao Senhor Deus de vossos pais.
²⁹ Vigiai, pois, e guardai-os até que os peseis na presença dos chefes dos sacerdotes e dos levitas, e dos chefes dos pais de Israel, em Jerusalém, nas câmaras da casa do Senhor.
³⁰ Então os sacerdotes e os levitas receberam o peso da prata, do ouro e dos utensílios, para os trazerem a Jerusalém, à casa de nosso Deus.
³¹ E partimos do rio Aava, no dia doze do primeiro mês, para irmos a Jerusalém; e a mão do nosso Deus estava sobre nós, e livrou-nos da mão dos inimigos, e dos que nos armavam ciladas pelo caminho.
³² E chegamos a Jerusalém, e repousamos ali três dias.
³³ E no quarto dia se pesou a prata, o ouro e os utensílios, na casa do nosso Deus, por mão de Meremote, filho do sacerdote Urias; e com ele Eleazar, filho de Fineias, e com eles Jozabade, filho de Jesuá, e Noadias, filho de Binui, levitas.
³⁴ Tudo foi contado e pesado; e todo o peso foi registrado na mesma ocasião.
³⁵ E os exilados, que vieram do cativeiro, ofereceram holocaustos ao Deus de Israel: doze novilhos por todo o Israel, noventa e seis carneiros, setenta e sete cordeiros, e doze bodes em sacrifício pelo pecado; tudo em holocausto ao Senhor.
³⁶ Então deram as ordens do rei aos seus sátrapas, e aos governadores dalém do rio; e estes ajudaram o povo e a casa de Deus.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Esdras apregoou junto ao rio Ava antes de seguir viagem?",
                        opcoes: [
                            { numero: 1, texto: "Uma grande batalha", correta: false },
                            { numero: 2, texto: "Um jejum para pedirem a Deus caminho direito", correta: true },
                            { numero: 3, texto: "Um concurso de música", correta: false },
                            { numero: 4, texto: "Uma feira de trocas", correta: false }
                        ],
                        explicacao: "Esdras 8:21 - Então apregoei ali um jejum junto ao rio Ava, para nos humilharmos diante da face de nosso Deus...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        9: {
            titulo: "A Oração de Confissão de Esdras",
            texto: ` ¹ Acabadas, pois, estas coisas, chegaram-se a mim os príncipes, dizendo: O povo de Israel, os sacerdotes e os levitas, não se têm separado dos povos destas terras, seguindo as abominações dos cananeus, dos heteus, dos perizeus, dos jebuseus, dos amonitas, dos moabitas, dos egípcios, e dos amorreus.
² Porque tomaram das suas filhas para si e para seus filhos, e assim se misturou a linhagem santa com os povos dessas terras; e até os príncipes e magistrados foram os primeiros nesta transgressão.
³ E, ouvindo eu tal coisa, rasguei as minhas vestes e o meu manto, e arranquei os cabelos da minha cabeça e da minha barba, e sentei-me atônito.
⁴ Então se ajuntaram a mim todos os que tremiam das palavras do Deus de Israel por causa da transgressão dos do cativeiro; porém eu permaneci sentado atônito até ao sacrifício da tarde.
⁵ E perto do sacrifício da tarde me levantei da minha aflição, havendo já rasgado as minhas vestes e o meu manto, e me pus de joelhos, e estendi as minhas mãos para o Senhor meu Deus;
⁶ E disse: Meu Deus! Estou confuso e envergonhado, para levantar a ti a minha face, meu Deus; porque as nossas iniquidades se multiplicaram sobre a nossa cabeça, e a nossa culpa tem crescido até aos céus.
⁷ Desde os dias de nossos pais até ao dia de hoje estamos em grande culpa, e por causa das nossas iniquidades somos entregues, nós e nossos reis e os nossos sacerdotes, na mão dos reis das terras, à espada, ao cativeiro, e ao roubo, e à confusão do rosto, como hoje se vê.
⁸ E agora, por um pequeno momento, se manifestou a graça da parte do Senhor, nosso Deus, para nos deixar alguns que escapem, e para dar-nos uma estaca no seu santo lugar; para nos iluminar os olhos, ó Deus nosso, e para nos dar um pouco de vida na nossa servidão.
⁹ Porque somos servos; porém na nossa servidão não nos desamparou o nosso Deus; antes estendeu sobre nós a sua benignidade perante os reis da Pérsia, para que nos desse vida, para levantarmos a casa do nosso Deus, e para restaurarmos as suas assolações; e para que nos desse uma parede de proteção em Judá e em Jerusalém.
¹⁰ Agora, pois, ó nosso Deus, que diremos depois disto? Pois deixamos os teus mandamentos,
¹¹ Os quais mandaste pelo ministério de teus servos, os profetas, dizendo: A terra em que entrais para a possuir, terra imunda é pelas imundícias dos povos das terras, pelas suas abominações com que, na sua corrupção a encheram, de uma extremidade à outra.
¹² Agora, pois, vossas filhas não dareis a seus filhos, e suas filhas não tomareis para vossos filhos, e nunca procurareis a sua paz e o seu bem; para que sejais fortes, e comais o bem da terra, e a deixeis por herança a vossos filhos para sempre.
¹³ E depois de tudo o que nos tem sucedido por causa das nossas más obras, e da nossa grande culpa, porquanto tu, ó nosso Deus, impediste que fôssemos destruídos, por causa da nossa iniquidade, e ainda nos deste um remanescente como este;
¹⁴ Tornaremos, pois, agora a violar os teus mandamentos e a aparentar-nos com os povos destas abominações? Não te indignarias tu assim contra nós até de todo nos consumir, até que não ficasse remanescente nem quem escapasse?
¹⁵ Ah! Senhor Deus de Israel, justo és, pois ficamos qual um remanescente que escapou, como hoje se vê; eis que estamos diante de ti, na nossa culpa, porque ninguém há que possa estar na tua presença, por causa disto.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual pecado do povo deixou Esdras atônito e com as vestes rasgadas?",
                        opcoes: [
                            { numero: 1, texto: "O povo parou de trabalhar", correta: false },
                            { numero: 2, texto: "Misturaram a linhagem santa com os povos das terras (casamentos mistos)", correta: true },
                            { numero: 3, texto: "Roubaram o ouro do templo", correta: false },
                            { numero: 4, texto: "Não quiseram celebrar a páscoa", correta: false }
                        ],
                        explicacao: "Esdras 9:2 - Porque tomaram das suas filhas para si e para seus filhos, e assim se misturou a linhagem santa...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        10: {
            titulo: "A Reforma e o Arrependimento",
            texto: `¹ E enquanto Esdras orava, e fazia confissão, chorando e prostrando-se diante da casa de Deus, ajuntou-se a ele, de Israel, uma mui grande congregação de homens, mulheres e crianças; pois o povo chorava com grande choro.
² Então Secanias, filho de Jeiel, um dos filhos de Elão, tomou a palavra e disse a Esdras: Nós temos transgredido contra o nosso Deus, e casamos com mulheres estrangeiras dentre os povos da terra, mas, no tocante a isto, ainda há esperança para Israel.
³ Agora, pois, façamos aliança com o nosso Deus de que despediremos todas as mulheres, e os que delas são nascidos, conforme ao conselho do meu senhor, e dos que tremem ao mandado do nosso Deus; e faça-se conforme a lei.
⁴ Levanta-te, pois, porque te pertence este negócio, e nós seremos contigo; esforça-te, e age.
⁵ Então Esdras se levantou, e ajuramentou os chefes dos sacerdotes e dos levitas, e a todo o Israel, de que fariam conforme a esta palavra; e eles juraram.
⁶ E Esdras se levantou de diante da casa de Deus, e entrou na câmara de Joanã, filho de Eliasibe; e, chegando lá, não comeu pão, e nem bebeu água; porque lamentava pela transgressão dos do cativeiro.
⁷ E fizeram passar pregão por Judá e Jerusalém, a todos os que vieram do cativeiro, para que se ajuntassem em Jerusalém.
⁸ E que todo aquele que em três dias não viesse, segundo o conselho dos príncipes e dos anciãos, toda a sua fazenda se poria em interdito, e ele seria separado da congregação dos do cativeiro.
⁹ Então todos os homens de Judá e Benjamim em três dias se ajuntaram em Jerusalém; era o nono mês, aos vinte dias do mês; e todo o povo se assentou na praça da casa de Deus, tremendo por este negócio e por causa das grandes chuvas.
¹⁰ Então se levantou Esdras, o sacerdote, e disse-lhes: Vós tendes transgredido, e casastes com mulheres estrangeiras, aumentando a culpa de Israel.
¹¹ Agora, pois, fazei confissão ao Senhor Deus de vossos pais, e fazei a sua vontade; e apartai-vos dos povos das terras, e das mulheres estrangeiras.
¹² E respondeu toda a congregação, e disse em altas vozes: Assim seja, conforme às tuas palavras nos convém fazer.
¹³ Porém o povo é muito, e também é tempo de grandes chuvas, e não se pode estar aqui fora; nem é obra de um dia nem de dois, porque somos muitos os que transgredimos neste negócio.
¹⁴ Ora, ponham-se os nossos líderes, por toda a congregação sobre este negócio; e todos os que em nossas cidades casaram com mulheres estrangeiras venham em tempos apontados, e com eles os anciãos de cada cidade, e os seus juízes, até que desviemos de nós o ardor da ira do nosso Deus, por esta causa.
¹⁵ Porém, somente Jônatas, filho de Asael, e Jaseías, filho de Ticva, se opuseram a isto; e Mesulão, e Sabetai, levita, os ajudaram.
¹⁶ E assim o fizeram os que voltaram do cativeiro; e o sacerdote Esdras e os homens, chefes dos pais, segundo a casa de seus pais, e todos pelos seus nomes, foram apontados; e assentaram-se no primeiro dia do décimo mês, para inquirirem neste negócio.
¹⁷ E no primeiro dia do primeiro mês acabaram de tratar com todos os homens que casaram com mulheres estrangeiras.
¹⁸ E acharam-se dos filhos dos sacerdotes que casaram com mulheres estrangeiras: Dos filhos de Jesuá, filho de Jozadaque, e seus irmãos, Maaseias, e Eliezer, e Jaribe, e Gedalias.
¹⁹ E deram as suas mãos prometendo que despediriam suas mulheres; e, achando-se culpados, ofereceram um carneiro do rebanho pelo seu delito.
²⁰ E dos filhos de Imer: Hanani e Zebadias.
²¹ E dos filhos de Harim: Maaseias, Elias, Semaías, Jeiel e Uzias.
²² E dos filhos de Pasur: Elioenai, Maaseias, Ismael, Netanel, Jozabade e Eleasa.
²³ E dos levitas: Jozabade, Simei, Quelaías (este é Quelita), Petaías, Judá e Eliezer.
²⁴ E dos cantores: Eliasibe; e dos porteiros: Salum, Telém e Uri.
²⁵ E de Israel, dos filhos de Parós: Ramias, Jezias, Malquias, Miamim, Eleazar, Malquias e Benaia.
²⁶ E dos filhos de Elão: Matanias, Zacarias, Jeiel, Abdi, Jeremote e Elias.
²⁷ E dos filhos de Zatu: Elioenai, Eliasibe, Matanias, Jeremote, Zabade e Aziza.
²⁸ E dos filhos de Bebai: Joanã, Hananias, Zabai e Atlai.
²⁹ E, dos filhos de Bani: Mesulão, Maluque, Adaías, Jasube, Seal, Ramot.
³⁰ E dos filhos de Paate-Moabe: Adna, Quelal, Benaia, Maseias, Matanias, Bezalel, Binui e Manassés.
³¹ E, dos filhos de Harim: Eliezer, Issias, Malquias, Semaías, Simeão,
³² Benjamim, Maluque, Semarias.
³³ Dos filhos de Hasum: Matenai, Matatá, Zabade, Elifelete, Jeremai, Manassés e Simei.
³⁴ Dos filhos de Bani: Maadai, Anrão, e Uel,
³⁵ Benaia, Bedias, Queluí,
³⁶ Vanias, Meremote, Eliasibe,
³⁷ Matanias, Matnai e Jaasai,
³⁸ E Bani, Binui, Simei,
³⁹ E Selemias, Natã e Adaías,
⁴⁰ Macnadbai, Sasai, Sarai,
⁴¹ Azareel, Selemias, Semarias,
⁴² Salum, Amarias e José.
⁴³ Dos filhos de Nebo: Jeiel, Matitias, Zabade, Zebina, Jadai, Joel e Benaia.
⁴⁴ Todos estes tomaram mulheres estrangeiras; e alguns deles tinham mulheres de quem tiveram filhos. `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que aconteceu enquanto Esdras orava e fazia confissão diante da casa de Deus?",
                        opcoes: [
                            { numero: 1, texto: "O povo fugiu com medo", correta: false },
                            { numero: 2, texto: "Ajuntou-se a ele uma grande congregação que chorava com grande choro", correta: true },
                            { numero: 3, texto: "O rei Artaxerxes apareceu", correta: false },
                            { numero: 4, texto: "Houve um eclipse", correta: false }
                        ],
                        explicacao: "Esdras 10:1 - E orando Esdras, e fazendo confissão... ajuntou-se a ele... uma mui grande congregação; porque o povo chorava com grande choro.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};