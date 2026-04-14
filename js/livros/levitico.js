// js/livros/levítico.js
// ═══════════════════════════════════════════════════════════════════════════════
// LIVRO: LEVÍTICO - O LIVRO DA LEI E SANTIDADE.
// ═══════════════════════════════════════════════════════════════════════════════

export const levitico= {
    // ───────────────────────────────────────────────────────────────────────────
    // 1. CONFIGURAÇÕES GERAIS (Aparecem no Card da Biblioteca)
    // ───────────────────────────────────────────────────────────────────────────
    nome: "Levítico",     // Nome que aparece no título
    icone: "📜",         // Emoji ou Ícone que aparece no card
    autor: "Moisés",      // Nome do autor que aparece abaixo do título
    
    // CAMINHO DA IMAGEM: Esta imagem fica no fundo quando o capítulo abre
    background: "./imagens/levitico_bg.jpg",

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
        // --- INÍCIO DO CAPÍTULO 1 (LEVÍTICO) ---
        1: {
            titulo: "As Leis do Holocausto",
            subtitulo: "O sacrifício de aroma agradável ao SENHOR",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E chamou o SENHOR a Moisés e falou com ele da tenda da congregação, dizendo:
² Fala aos filhos de Israel e dize-lhes: Quando algum de vós oferecer oferta ao SENHOR, oferecereis as vossas ofertas de gado, de vacas e de ovelhas.
³ Se a sua oferta for holocausto de gado, oferecerá macho sem mancha; à porta da tenda da congregação o oferecerá, de sua própria vontade, perante o SENHOR.
⁴ E porá a sua mão sobre a cabeça do holocausto, para que seja aceito por ele, para a sua expiação.
⁵ Depois, degolará o bezerro perante o SENHOR; e os filhos de Arão, os sacerdotes, oferecerão o sangue e espargirão o sangue em redor sobre o altar que está diante da porta da tenda da congregação.
⁶ Então, esfolará o holocausto e o partirá nos seus pedaços.
⁷ E os filhos de Arão, os sacerdotes, porão fogo sobre o altar e porão em ordem a lenha sobre o fogo.
⁸ Também os filhos de Arão, os sacerdotes, porão em ordem os pedaços, a cabeça e o redenho sobre a lenha que está no fogo em cima do altar.
⁹ Porém a sua fressura e as suas pernas se lavarão com água; e o sacerdote queimará tudo isso sobre o altar; holocausto é, oferta queimada, de cheiro suave ao SENHOR.
¹⁰ E, se a sua oferta for de gado miúdo, de ovelhas ou de cabras, para holocausto, oferecerá macho sem mancha.
¹¹ E o degolará ao lado do altar, para a banda do norte, perante o SENHOR; e os filhos de Arão, os sacerdotes, espargirão o seu sangue em redor sobre o altar.
¹² E o partirá nos seus pedaços, como também a sua cabeça e o seu redenho; e o sacerdote os porá em ordem sobre a lenha que está no fogo em cima do altar.
¹³ Porém a fressura e as pernas se lavarão com água; e o sacerdote oferecerá tudo e o queimará sobre o altar; holocausto é, oferta queimada, de cheiro suave ao SENHOR.
¹⁴ E, se a sua oferta ao SENHOR for holocausto de aves, oferecerá a sua oferta de rolas ou de pombinhos.
¹⁵ E o sacerdote a oferecerá sobre o altar, e lhe cerceará a cabeça, e a queimará sobre o altar; e o seu sangue será espremido na parede do altar.
¹⁶ E o seu papo com as suas penas tirará e o lançará junto ao altar, para a banda do oriente, no lugar da cinza;
¹⁷ e fendê-la-á pelas suas asas, porém não a partirá; e o sacerdote a queimará sobre o altar em cima da lenha que está no fogo; holocausto é, oferta queimada, de cheiro suave ao SENHOR.`,

            // O DESAFIO
            pergunta: {
                texto: "Se a oferta de holocausto de um homem fosse gado vacum, quais eram as duas condições principais para que o animal fosse aceito pelo SENHOR?",
                opcoes: [
                    { numero: 1, texto: "Deveria ser uma fêmea e ter menos de um ano", correta: false },
                    { numero: 2, texto: "Deveria ser um macho sem defeito", correta: true },
                    { numero: 3, texto: "Deveria ser um animal selvagem capturado", correta: false },
                    { numero: 4, texto: "Deveria ser o animal mais pesado do rebanho", correta: false }
                ],
                explicacao: "Levítico 1:3 - O animal para o holocausto deveria ser um macho sem qualquer defeito físico, oferecido voluntariamente à porta da tenda da congregação.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 2 ---
        2: {
            titulo: "As Ofertas de Cereais",
            subtitulo: "O sacrifício de manjares e o memorial de louvor",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E, quando alguma pessoa oferecer oferta de alimentos ao SENHOR, a sua oferta será de flor de farinha; e nela deitará azeite e porá incenso sobre ela.
² E a trará aos filhos de Arão, os sacerdotes, um dos quais tomará dela um punhado da flor de farinha e do seu azeite, com todo o seu incenso; e o sacerdote o queimará como o seu memorial sobre o altar; oferta queimada é, de cheiro suave ao SENHOR.
³ E o que sobejar da oferta de alimentos será de Arão e de seus filhos; coisa santíssima é, de ofertas queimadas ao SENHOR.
⁴ E, quando ofereceres oferta de alimentos, cozida no forno, será de bolos asmos de flor de farinha, amassados com azeite, e coscorões asmos, untados com azeite.
⁵ E, se a tua oferta for oferta de alimentos da caçoula, será de flor de farinha asma, amassada com azeite.
⁶ Em pedaços a partirás e sobre ela deitarás azeite; oferta de alimentos é.
⁷ E, se a tua oferta for oferta de alimentos da frigideira, far-se-á de flor de farinha com azeite.
⁸ Então, trarás a oferta de alimentos, que se fizer destas coisas, ao SENHOR; e se apresentará ao sacerdote, o qual a levará ao altar.
⁹ E o sacerdote tomará daquela oferta de alimentos o seu memorial e o queimará sobre o altar; oferta queimada é, de cheiro suave ao SENHOR.
¹⁰ E o que sobejar da oferta de alimentos será de Arão e de seus filhos; coisa santíssima é, de ofertas queimadas ao SENHOR.
¹¹ Nenhuma oferta de alimentos, que oferecerdes ao SENHOR, se fará com fermento; porque de nenhum fermento, nem de mel algum, queimareis oferta ao SENHOR.
¹² Deles oferecereis ao SENHOR por oferta das primícias; porém sobre o altar não subirão por cheiro suave.
¹³ E toda a oferta dos teus alimentos salgarás com sal; e não deixarás faltar à tua oferta de alimentos o sal do concerto do teu Deus; em toda a tua oferta oferecerás sal.
¹⁴ E, se ofereceres ao SENHOR oferta de alimentos das primícias, oferecerás, pela oferta de alimentos das tuas primícias, espigas verdes, tostadas no fogo; isto é, o grão debulhado de espigas cheias.
¹⁵ E sobre ela deitarás azeite e porás sobre ela incenso; oferta de alimentos é.
¹⁶ Assim, o sacerdote queimará o seu memorial do seu grão debulhado e do seu azeite, com todo o seu incenso; oferta queimada é ao SENHOR.`,

            // O DESAFIO
            pergunta: {
                texto: "Quais são os dois ingredientes que o SENHOR proibiu terminantemente de serem queimados em qualquer oferta de cereais feita por fogo?",
                opcoes: [
                    { numero: 1, texto: "Azeite e Incenso", correta: false },
                    { numero: 2, texto: "Sal e Grãos tostados", correta: false },
                    { numero: 3, texto: "Fermento e Mel", correta: true },
                    { numero: 4, texto: "Vinho e Vinagre", correta: false }
                ],
                explicacao: "Levítico 2:11 - Nenhuma oferta de cereais deveria ser preparada com fermento ou mel para ser queimada ao SENHOR, pois estes elementos simbolizavam corrupção ou prazer meramente carnal.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 3 ---
        3: {
            titulo: "As Ofertas de Paz",
            subtitulo: "O sacrifício de comunhão e a gordura das entranhas",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E, se a sua oferta for sacrifício pacífico, se a oferecer de gado, seja macho ou fêmea, a oferecerá sem mancha diante do SENHOR.
² E porá a sua mão sobre a cabeça da sua oferta e a degolará à porta da tenda da congregação; e os filhos de Arão, os sacerdotes, espargirão o sangue sobre o altar em redor.
³ Depois, oferecerá do sacrifício pacífico a oferta queimada ao SENHOR: a gordura que cobre as entranhas e toda a gordura que está sobre as entranhas,
⁴ e ambos os rins, e a gordura que está sobre eles e sobre as ilhargas, e o redenho que está sobre o fígado com os rins, os tirará.
⁵ E os filhos de Arão queimarão isso no altar, em cima do holocausto que estará sobre a lenha que está no fogo; oferta queimada é, de cheiro suave ao SENHOR.
⁶ E, se a sua oferta de gado miúdo for sacrifício pacífico ao SENHOR, seja macho ou fêmea, sem mancha a oferecerá.
⁷ Se oferecer um cordeiro por sua oferta, oferecê-lo-á perante o SENHOR.
⁸ E porá a sua mão sobre a cabeça da sua oferta e a degolará diante da tenda da congregação; e os filhos de Arão espargirão o seu sangue sobre o altar em redor.
⁹ Então, do sacrifício pacífico oferecerá ao SENHOR, por oferta queimada, a sua gordura, a cauda inteira, a qual tirará rente ao espinhaço, e a gordura que cobre as entranhas, e toda a gordura que está sobre as entranhas,
¹⁰ e ambos os rins, e a gordura que está sobre eles e sobre as ilhargas, e o redenho que está sobre o fígado com os rins, os tirará.
¹¹ E o sacerdote o queimará sobre o altar; alimento é da oferta queimada ao SENHOR.
¹² E, se a sua oferta for uma cabra, perante o SENHOR a oferecerá.
¹³ E porá a sua mão sobre a sua cabeça e a degolará diante da tenda da congregação; e os filhos de Arão espargirão o seu sangue sobre o altar em redor.
¹⁴ Depois, oferecerá dela a sua oferta, por oferta queimada ao SENHOR: a gordura que cobre as entranhas e toda a gordura que está sobre as entranhas,
¹⁵ e ambos os rins, e a gordura que está sobre eles e sobre as ilhargas, e o redenho que está sobre o fígado com os rins, os tirará.
¹⁶ E o sacerdote o queimará sobre o altar; alimento é da oferta queimada, de cheiro suave; toda a gordura será do SENHOR.
¹⁷ Estatuto perpétuo será pelas vossas gerações, em todas as vossas habitações: nenhuma gordura, nem sangue algum comereis.`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com o estatuto perpétuo estabelecido para as gerações de Israel, quais são as duas coisas que o povo jamais deveria comer?",
                opcoes: [
                    { numero: 1, texto: "O fígado e os rins", correta: false },
                    { numero: 2, texto: "A carne de animais velhos", correta: false },
                    { numero: 3, texto: "Toda a gordura e todo o sangue", correta: true },
                    { numero: 4, texto: "O couro e os ossos", correta: false }
                ],
                explicacao: "Levítico 3:16-17 - O SENHOR determinou que toda a gordura Lhe pertence e que o povo não deveria comer nem gordura nem sangue em suas habitações.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 4 (LEVÍTICO) ---
        4: {
            titulo: "As Ofertas pelo Pecado",
            subtitulo: "A expiação para erros involuntários do ungido, da congregação, do príncipe e do povo",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Falou mais o SENHOR a Moisés, dizendo:
² Fala aos filhos de Israel, dizendo: Quando uma alma pecar por erro contra alguns dos mandamentos do SENHOR, acerca do que se não deve fazer, e proceder contra algum deles;
³ se o sacerdote ungido pecar para escândalo do povo, oferecerá ao SENHOR, pelo seu pecado, que pecou, um novilho sem mancha, por expiação do pecado.
⁴ E trará o novilho à porta da tenda da congregação, perante o SENHOR, e porá a sua mão sobre a cabeça do novilho, e degolará o novilho perante o SENHOR.
⁵ Então, o sacerdote ungido tomará do sangue do novilho e o trará à tenda da congregação;
⁶ e o sacerdote molhará o seu dedo no sangue e daquele sangue espargirá sete vezes perante o SENHOR, diante do véu do santuário.
⁷ Também o sacerdote porá daquele sangue sobre as pontas do altar do incenso aromático, perante o SENHOR, que está na tenda da congregação; e todo o restante do sangue do novilho derramará à base do altar do holocausto, que está à porta da tenda da congregação.
⁸ E tirará toda a gordura do novilho da expiação: a gordura que cobre as entranhas e toda a gordura que está sobre as entranhas,
⁹ e ambos os rins, e a gordura que está sobre eles e sobre as ilhargas, e o redenho que está sobre o fígado com os rins, os tirará,
¹⁰ como se tira do boi do sacrifício pacífico; e o sacerdote os queimará sobre o altar do holocausto.
¹¹ Mas a pele do novilho, e toda a sua carne com a sua cabeça e as suas pernas, e as suas entranhas, e o seu esterco,
¹² enfim, o novilho todo levará fora do arraial a um lugar limpo, onde se lança a cinza, e o queimará com lenha no fogo; onde se lança a cinza, se queimará.
¹³ Mas, se toda a congregação de Israel errar, e o negócio for oculto aos olhos da congregação, e fizerem contra algum dos mandamentos do SENHOR o que se não deve fazer, e forem culpados,
¹⁴ e o pecado em que pecaram for notório, então, a congregação oferecerá um novilho por expiação do pecado e o trará diante da tenda da congregação.
¹⁵ E os anciãos da congregação porão as suas mãos sobre a cabeça do novilho perante o SENHOR; e degolar-se-á o novilho perante o SENHOR.
¹⁶ Então, o sacerdote ungido trará do sangue do novilho à tenda da congregação;
¹¹⁷ e o sacerdote molhará o seu dedo no sangue e o espargirá sete vezes perante o SENHOR, diante do véu.
¹⁸ E daquele sangue porá sobre as pontas do altar que está perante o SENHOR, na tenda da congregação; e todo o restante do sangue derramará à base do altar do holocausto, que está à porta da tenda da congregação.
¹⁹ E tirará dele toda a sua gordura e queimá-la-á sobre o altar.
²⁰ E fará a este novilho como fez ao novilho da expiação; assim lhe fará; e o sacerdote por eles fará expiação, e lhes será perdoado o pecado.
²¹ Depois, levará o novilho fora do arraial e o queimará como queimou o primeiro novilho; é expiação do pecado da congregação.
²² Quando um príncipe pecar, e por erro fizer contra algum dos mandamentos do SENHOR, seu Deus, o que se não deve fazer, e se fizer culpado;
²³ ou se o seu pecado, em que pecou, lhe for notificado, então, trará por sua oferta um bode tirado das cabras, macho sem mancha.
²⁴ E porá a sua mão sobre a cabeça do bode e o degolará no lugar onde se degola o holocausto, perante o SENHOR; expiação do pecado é.
²⁵ Depois, o sacerdote com o seu dedo tomará do sangue da expiação e o porá sobre as pontas do altar do holocausto; então, o restante do seu sangue derramará à base do altar do holocausto.
²⁶ Também queimará sobre o altar toda a sua gordura como a gordura do sacrifício pacífico; assim, o sacerdote por ele fará expiação do seu pecado, e este lhe será perdoado.
²⁷ E, se qualquer pessoa do povo da terra pecar por erro, fazendo contra algum dos mandamentos do SENHOR o que se não deve fazer, e se fizer culpada;
²⁸ ou se o seu pecado, em que pecou, lhe for notificado, então, trará por sua oferta uma cabra sem mancha, pelo seu pecado que pecou.
²⁹ E porá a sua mão sobre a cabeça da oferta da expiação e degolará a oferta da expiação no lugar do holocausto.
³⁰ Depois, o sacerdote com o seu dedo tomará do seu sangue e o porá sobre as pontas do altar do holocausto; e todo o restante do seu sangue derramará à base do altar.
³¹ E tirará toda a gordura, como se tira a gordura do sacrifício pacífico; e o sacerdote a queimará sobre o altar por cheiro suave ao SENHOR; e o sacerdote fará expiação por ela, e ser-lhe-á perdoado o pecado.
³² E, se trouxer uma cordeira por sua oferta pelo pecado, sem mancha a trará.
³³ E porá a sua mão sobre a cabeça da oferta da expiação e a degolará por expiação do pecado, no lugar onde se degola o holocausto.
³⁴ Depois, o sacerdote com o seu dedo tomará do sangue da expiação e o porá sobre as pontas do altar do holocausto; então, todo o restante do seu sangue derramará à base do altar.
³⁵ E tirará toda a sua gordura, como se tirou a gordura do cordeiro do sacrifício pacífico; e o sacerdote a queimará sobre o altar, em cima das ofertas queimadas ao SENHOR; assim, o sacerdote por ela fará expiação do seu pecado que pecou, e ser-lhe-á perdoado.`,

            // O DESAFIO
            pergunta: {
                texto: "Se todo o povo de Israel pecasse por ignorância e o erro ficasse oculto aos seus olhos, o que os anciãos da congregação deveriam fazer com o novilho diante do SENHOR?",
                opcoes: [
                    { numero: 1, texto: "Levar o animal para fora do arraial sem tocá-lo", correta: false },
                    { numero: 2, texto: "Pôr as mãos sobre a cabeça do novilho", correta: true },
                    { numero: 3, texto: "Dividir a carne entre todas as tribos", correta: false },
                    { numero: 4, texto: "Queimar o animal inteiro em uma praça pública", correta: false }
                ],
                explicacao: "Levítico 4:13-15 - Os anciãos, representando a congregação, deviam colocar as mãos sobre a cabeça do sacrifício, transferindo simbolicamente a culpa do povo para o animal.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 5 ---
        5: {
            titulo: "As Ofertas pela Culpa",
            subtitulo: "A restituição por transgressões específicas e a confissão de pecados",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E, quando alguma pessoa pecar, ouvindo a voz da maldição, sendo testemunha de um fato, por ter visto ou por ter sabido, se o não denunciar, levará a sua iniquidade.
² Ou, quando alguma pessoa tocar em alguma coisa imunda, seja corpo morto de besta imunda, seja corpo morto de animal imundo, seja corpo morto de réptil imundo, embora lhe fosse oculto, e se fizer imunda, então, será culpada.
³ Ou, quando tocar a imundícia de um homem, qualquer que seja a sua imundícia, com que se faça imundo, e lhe for oculto, e o souber depois, será culpada.
⁴ Ou, quando alguma pessoa jurar, proferindo temerariamente com os seus lábios, para fazer mal ou para fazer bem, em tudo o que o homem profere temerariamente com juramento, e lhe for oculto, e o souber depois, culpada será em uma destas coisas.
⁵ Será, pois, que, culpado sendo em uma destas coisas, confessará aquilo em que pecou.
⁶ E a sua expiação trará ao SENHOR pelo seu pecado que pecou: uma fêmea de gado miúdo, uma cordeira ou uma cabra, por expiação do pecado; e o sacerdote por ela fará expiação do seu pecado.
⁷ Mas, se a sua mão não alcançar gado miúdo, trará, em expiação da culpa do pecado que pecou, duas rolas ou dois pombinhos ao SENHOR: um para expiação do pecado e o outro para holocausto.
⁸ E os trará ao sacerdote, o qual oferecerá primeiro o que é para expiação do pecado; e com o seu dedo lhe cerceará a cabeça junto ao pescoço, mas não a fenderá;
⁹ e do sangue da expiação do pecado espargirá sobre a parede do altar; e o restante daquele sangue espremer-se-á à base do altar; expiação do pecado é.
¹⁰ E do outro fará holocausto, conforme o costume; assim, o sacerdote por ela fará expiação do seu pecado que pecou, e ser-lhe-á perdoado.
¹¹ Porém, se a sua mão não alcançar duas rolas ou dois pombinhos, então, aquele que pecou trará por sua oferta a décima parte de um efa de flor de farinha, para expiação do pecado; não deitará nela azeite, nem lhe porá incenso, porquanto é expiação do pecado.
¹² E a trará ao sacerdote, e o sacerdote dela tomará o seu punhado cheio, por seu memorial, e a queimará sobre o altar, em cima das ofertas queimadas ao SENHOR; expiação do pecado é.
¹³ Assim, o sacerdote por ela fará expiação do seu pecado que pecou em alguma destas coisas, e lhe será perdoado; e o que sobejar será do sacerdote, como a oferta de alimentos.
¹⁴ E falou o SENHOR a Moisés, dizendo:
¹⁵ Quando uma alma cometer uma transgressão e pecar por erro nas coisas sagradas do SENHOR, então, trará ao SENHOR, por sua expiação, um carneiro sem mancha do rebanho, conforme a tua estimação em siclos de prata, segundo o siclo do santuário, para expiação da culpa.
¹⁶ Assim, restituirá o que pecou nas coisas sagradas e ainda lhe acrescentará a quinta parte, e a dará ao sacerdote; assim, o sacerdote, com o carneiro da expiação da culpa, fará expiação por ela, e ser-lhe-á perdoado.
¹⁷ E, se alguma pessoa pecar e fizer contra algum de todos os mandamentos do SENHOR o que se não deve fazer, ainda que o não soubesse, contudo, será culpada e levará a sua iniquidade.
¹⁸ E trará um carneiro sem mancha do rebanho, conforme a tua estimação, para expiação da culpa, ao sacerdote; e o sacerdote por ela fará expiação do seu erro em que errou, não o sabendo, e ser-lhe-á perdoado.`,

            // O DESAFIO
            pergunta: {
                texto: "Se uma pessoa pecasse contra as coisas sagradas do SENHOR por ignorância, além do sacrifício de um carneiro, o que mais ela deveria fazer como restituição?",
                opcoes: [
                    { numero: 1, texto: "Jejuar por sete dias e sete noites", correta: false },
                    { numero: 2, texto: "Pagar o valor do dano e acrescentar a quinta parte dele", correta: true },
                    { numero: 3, texto: "Dar metade de seus bens aos pobres", correta: false },
                    { numero: 4, texto: "Pedir perdão público diante do sumo sacerdote", correta: false }
                ],
                explicacao: "Levítico 5:15-16 - A lei exigia a restituição plena do que foi defraudado das coisas sagradas, somada a uma multa de 20% (a quinta parte) entregue ao sacerdote.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 6 ---
        6: {
            titulo: "As Leis sobre os Sacrifícios",
            subtitulo: "Instruções específicas para os sacerdotes sobre o fogo do altar",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Falou mais o SENHOR a Moisés, dizendo:
² Quando alguma pessoa pecar, e cometer transgressão contra o SENHOR, e negar ao seu próximo o que se lhe deu em guarda, ou o que pôs na sua mão, ou o roubo, ou o que retém violentamente ao seu próximo;
³ ou que achou o perdido, e o negar com falso juramento, ou fizer alguma outra coisa de todas em que o homem costuma pecar;
⁴ será, pois, que, como pecou e ficou culpada, restituirá o roubo que roubou, ou o que reteve violentamente, ou o depósito que lhe foi dado em guarda, ou o perdido que achou,
⁵ ou tudo aquilo sobre que jurou falsamente; e o restituirá no seu cabedal e ainda sobre isso acrescentará a quinta parte; a quem pertence, lho dará no dia da sua expiação de culpa.
⁶ E a sua expiação trará ao SENHOR: um carneiro sem mancha do rebanho, conforme a tua estimação, para expiação da culpa, ao sacerdote.
⁷ E o sacerdote fará expiação por ela diante do SENHOR, e ser-lhe-á perdoado qualquer de todas as coisas que fez, em que se fez culpada.
⁸ Falou mais o SENHOR a Moisés, dizendo:
⁹ Dá ordem a Arão e a seus filhos, dizendo: Esta é a lei do holocausto: o holocausto será queimado sobre o altar toda a noite até pela manhã, e o fogo do altar arderá nele.
¹⁰ E o sacerdote vestirá a sua veste de linho, e vestirá os calções de linho sobre a sua carne, e levantará a cinza, quando o fogo houver consumido o holocausto sobre o altar, e a porá junto ao altar.
¹¹ Depois, despirá as suas vestes, e vestirá outras vestes, e levará a cinza fora do arraial para um lugar limpo.
¹² O fogo, pois, sobre o altar arderá nele, não se apagará; mas o sacerdote acenderá lenha nele cada manhã, e porá em ordem sobre ele o holocausto, e sobre ele queimará a gordura das ofertas pacíficas.
¹³ O fogo arderá continuamente sobre o altar; não se apagará.
¹⁴ E esta é a lei da oferta de alimentos: os filhos de Arão a oferecerão perante o SENHOR, diante do altar.
¹⁵ E dela tomará um punhado da flor de farinha da oferta e do seu azeite, e todo o incenso que estiver sobre a oferta de alimentos; então, o queimará sobre o altar, cheiro suave é, por seu memorial ao SENHOR.
¹⁶ E o restante dela comerão Arão e seus filhos; asmo se comerá no lugar santo; no pátio da tenda da congregação o comerão.
¹¹⁷ Coisa levedada não se cozerá; sua porção é que lhes dei das minhas ofertas queimadas; coisa santíssima é, como a expiação do pecado e como a expiação da culpa.
¹⁸ Todo varão entre os filhos de Arão comerá dela; estatuto perpétuo será para as vossas gerações das ofertas queimadas do SENHOR; tudo o que as tocar será santo.
¹⁹ Falou mais o SENHOR a Moisés, dizendo:
²⁰ Esta é a oferta de Arão e de seus filhos, que oferecerão ao SENHOR no dia em que forem ungidos: a décima parte de um efa de flor de farinha por oferta de alimentos contínua, a metade dela pela manhã e a outra metade dela à tarde.
²¹ Numa caçoula se fará com azeite; cozida a trarás; e os pedaços cozidos da oferta de alimentos oferecerás em cheiro suave ao SENHOR.
²² Também o sacerdote, que de entre seus filhos for ungido em seu lugar, fará o mesmo; estatuto perpétuo é do SENHOR; toda ela se queimará.
²³ Assim, toda oferta de alimentos do sacerdote será totalmente queimada; não se comerá.
²⁴ Falou mais o SENHOR a Moisés, dizendo:
²⁵ Fala a Arão e a seus filhos, dizendo: Esta é a lei da expiação do pecado: no lugar onde se degola o holocausto, se degolará a oferta pela expiação do pecado perante o SENHOR; coisa santíssima é.
²⁶ O sacerdote que a oferecer pelo pecado a comerá; no lugar santo se comerá, no pátio da tenda da congregação.
²⁷ Tudo o que tocar a sua carne será santo; e, quando o seu sangue for espargido sobre a veste de alguém, lavarás o que foi espargido no lugar santo.
²⁸ E o vaso de barro em que for cozida será quebrado; porém, se for cozida num vaso de cobre, esfregar-se-á e lavar-se-á com água.
²⁹ Todo varão entre os sacerdotes dela comerá; coisa santíssima é.
³⁰ Porém não se comerá nenhuma oferta pelo pecado, cujo sangue se traz à tenda da congregação, para expiar no santuário; no fogo se queimará.`,

            // O DESAFIO
            pergunta: {
                texto: "Qual é a instrução específica dada aos sacerdotes sobre o fogo que ardia sobre o altar do holocausto?",
                opcoes: [
                    { numero: 1, texto: "Deveria ser apagado todas as noites", correta: false },
                    { numero: 2, texto: "Deveria arder continuamente e nunca se apagar", correta: true },
                    { numero: 3, texto: "Só deveria ser aceso durante as festas", correta: false },
                    { numero: 4, texto: "Deveria ser renovado com fogo vindo de fora", correta: false }
                ],
                explicacao: "Levítico 6:12-13 - O SENHOR ordenou que o fogo no altar ardesse continuamente, simbolizando a prontidão e a perpetuidade do sacrifício e da presença de Deus.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 7 ---
        7: {
            titulo: "As Leis da Expiação e da Paz",
            subtitulo: "A porção dos sacerdotes e a proibição do consumo de sangue",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E esta é a lei da expiação da culpa; coisa santíssima é.
² No lugar onde degolam o holocausto, degolarão a oferta pela expiação da culpa, e o seu sangue se espargirá sobre o altar em redor.
³ E dela se oferecerá toda a sua gordura: a cauda e a gordura que cobre as entranhas;
⁴ e ambos os rins, e a gordura que está sobre eles e sobre as ilhargas, e o redenho que está sobre o fígado com os rins, os tirará.
⁵ E o sacerdote os queimará sobre o altar em oferta queimada ao SENHOR; expiação da culpa é.
⁶ Todo varão entre os sacerdotes a comerá; no lugar santo se comerá; coisa santíssima é.
⁷ Como a expiação pelo pecado, assim será a expiação da culpa; uma mesma lei haverá para elas: será do sacerdote que houver feito expiação com ela.
⁸ Também o sacerdote que oferecer o holocausto de alguém, o mesmo sacerdote terá para si a pele do holocausto que oferecer.
⁹ Como também toda oferta de alimentos que se cozer no forno, com tudo o que se preparar na caçoula e na frigideira, será do sacerdote que a oferecer.
¹⁰ Também toda oferta de alimentos amassada com azeite ou seca será de todos os filhos de Arão, tanto de um como de outro.
¹¹ E esta é a lei do sacrifício pacífico que se oferecerá ao SENHOR:
¹² Se o oferecer por oferta de louvor, com o sacrifício de louvor oferecerá bolos asmos amassados com azeite, e coscorões asmos untados com azeite, e bolos de flor de farinha cozidos, amassados com azeite.
¹³ Com os bolos oferecerá, por sua oferta, pão levedado, com o sacrifício de louvor de suas ofertas pacíficas.
¹⁴ E de toda a oferta oferecerá um deles por oferta alçada ao SENHOR, que será do sacerdote que espargir o sangue da oferta pacífica.
¹⁵ Mas a carne do sacrifício de louvor de suas ofertas pacíficas se comerá no dia do seu oferecimento; nada se deixará dela até à manhã.
¹⁶ E, se o sacrifício da sua oferta for voto ou oferta voluntária, no dia em que oferecer o seu sacrifício se comerá; e o que dele ficar também se comerá no dia seguinte.
¹⁷ E o que ainda ficar da carne do sacrifício ao terceiro dia será queimado no fogo.
¹⁸ Porque, se da carne do seu sacrifício pacífico se comer ao terceiro dia, aquele que a ofereceu não será aceito, nem lhe será imputado; coisa abominável será, e a pessoa que dela comer levará a sua iniquidade.
¹⁹ E a carne que tocar alguma coisa imunda não se comerá; com fogo será queimada; mas da outra carne, qualquer que estiver limpo comerá dela.
²⁰ Porém a pessoa que comer a carne do sacrifício pacífico, que é do SENHOR, tendo sobre si a sua imundícia, aquela pessoa será extirpada dos seus povos.
²¹ E, quando uma pessoa tocar alguma coisa imunda, como imundícia de homem, ou gado imundo, ou qualquer abominação imunda, e comer da carne do sacrifício pacífico, que é do SENHOR, aquela pessoa será extirpada dos seus povos.
²² Depois, falou o SENHOR a Moisés, dizendo:
²³ Fala aos filhos de Israel, dizendo: Nenhuma gordura de boi, nem de carneiro, nem de cabra comereis.
²⁴ Todavia, a gordura de corpo morto e a gordura do que é despedaçado por feras podem servir para qualquer outro uso, mas de maneira nenhuma a comereis.
²⁵ Porque qualquer que comer a gordura do animal, do qual se oferecer ao SENHOR oferta queimada, a pessoa que a comer será extirpada dos seus povos.
²⁶ E nenhum sangue comereis em todas as vossas habitações, quer de aves quer de gado.
²⁷ Toda pessoa que comer algum sangue, aquela pessoa será extirpada dos seus povos.
²⁸ Falou mais o SENHOR a Moisés, dizendo:
²⁹ Fala aos filhos de Israel, dizendo: Quem oferecer o seu sacrifício pacífico ao SENHOR trará a sua oferta ao SENHOR do seu sacrifício pacífico.
³⁰ As suas próprias mãos trarão as ofertas queimadas do SENHOR; a gordura do peito com o peito trará para movê-lo por oferta de movimento perante o SENHOR.
³¹ E o sacerdote queimará a gordura sobre o altar, porém o peito será de Arão e de seus filhos.
³² Também a espádua direita dareis ao sacerdote por oferta alçada dos vossos sacrifícios pacíficos.
³³ Aquele dos filhos de Arão que oferecer o sangue da oferta pacífica e a gordura, esse terá a espádua direita por sua porção.
³⁴ Porque o peito de movimento e a espádua alçada tomei dos filhos de Israel dos seus sacrifícios pacíficos e os dei a Arão, o sacerdote, e a seus filhos, por estatuto perpétuo dos filhos de Israel.
³⁵ Esta é a porção de Arão e a porção de seus filhos, das ofertas queimadas do SENHOR, no dia em que ele os apresentou para administrar o ofício sacerdotal ao SENHOR.
³⁶ O que o SENHOR ordenou que se lhes desse entre os filhos de Israel no dia em que os ungiu; estatuto perpétuo é pelas suas gerações.
³⁷ Esta é a lei do holocausto, e da oferta de alimentos, e da expiação do pecado, e da expiação da culpa, e da consagração, e do sacrifício pacífico,
³⁸ que o SENHOR ordenou a Moisés no monte Sinai, no dia em que ordenou aos filhos de Israel que oferecessem as suas ofertas ao SENHOR, no deserto de Sinai.`,

            // O DESAFIO
            pergunta: {
                texto: "Qual era a punição estabelecida para qualquer pessoa que comesse o sangue de qualquer ave ou animal?",
                opcoes: [
                    { numero: 1, texto: "Deveria pagar uma multa ao tabernáculo", correta: false },
                    { numero: 2, texto: "Deveria ser eliminada do seu povo", correta: true },
                    { numero: 3, texto: "Deveria ser açoitada publicamente", correta: false },
                    { numero: 4, texto: "Deveria ficar fora do arraial por um dia", correta: false }
                ],
                explicacao: "Levítico 7:26-27 - A lei era severa quanto ao sangue, pois a vida está no sangue; quem o consumisse enfrentaria a exclusão da comunidade da aliança.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 8 ---
        8: {
            titulo: "A Consagração de Arão e seus Filhos",
            subtitulo: "A unção sacerdotal e os sete dias à porta da tenda",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Falou mais o SENHOR a Moisés, dizendo:
² Toma a Arão, e a seus filhos com ele, e as vestes, e o óleo da unção, como também o novilho da expiação do pecado, e os dois carneiros, e o cesto dos pães asmos
³ e ajunta toda a congregação à porta da tenda da congregação.
⁴ Fez, pois, Moisés como o SENHOR lhe ordenara; e a congregação ajuntou-se à porta da tenda da congregação.
⁵ Então, disse Moisés à congregação: Isto é o que o SENHOR ordenou que se fizesse.
⁶ E Moisés fez chegar a Arão e a seus filhos e os lavou com água.
⁷ E vestiu-lhe a túnica, e cingiu-o com o cinto, e pôs sobre ele o manto; também pôs sobre ele o éfode, e cingiu-o com o cinto de obra esmerada do éfode, e o ajustou com ele.
⁸ Depois, pôs-lhe o peitoral, pondo no peitoral o Urim e o Tumim.
⁹ E pôs a mitra sobre a sua cabeça; e sobre a mitra, na sua frente, pôs a lâmina de ouro, a coroa da santidade, como o SENHOR ordenara a Moisés.
¹⁰ Então, Moisés tomou o óleo da unção, e ungiu o tabernáculo e tudo o que havia nele, e o santificou.
¹¹ E dele espargiu sete vezes sobre o altar e ungiu o altar e todos os seus utensílios, como também a pia e a sua base, para santificá-los.
¹² Depois, derramou do óleo da unção sobre a cabeça de Arão e ungiu-o, para santificá-lo.
¹³ Também Moisés fez chegar os filhos de Arão, e vestiu-lhes as túnicas, e cingiu-os com o cinto, e apertou-lhes as tiaras, como o SENHOR ordenara a Moisés.
¹⁴ Então, fez chegar o novilho da expiação do pecado; e Arão e seus filhos puseram as mãos sobre a cabeça do novilho da expiação do pecado;
¹⁵ e o degolou; e Moisés tomou o sangue e pôs dele com o seu dedo sobre as pontas do altar em redor e purificou o altar; depois, derramou o restante do sangue à base do altar e o santificou, para fazer expiação sobre ele.
¹⁶ Depois, tomou toda a gordura que estava sobre as entranhas, e o redenho do fígado, e os dois rins e a sua gordura; e Moisés os queimou sobre o altar.
¹⁷ Mas o novilho, com a sua pele, e a sua carne, e o seu esterco, queimou com fogo fora do arraial, como o SENHOR ordenara a Moisés.
¹⁸ Depois, fez chegar o carneiro do holocausto; e Arão e seus filhos puseram as mãos sobre a cabeça do carneiro;
¹⁹ e o degolou; e Moisés espargiu o sangue sobre o altar em redor.
²⁰ E partiu o carneiro nos seus pedaços; e Moisés queimou a cabeça, e os pedaços, e o redenho.
²¹ Porém as entranhas e as pernas lavou com água; e Moisés queimou todo o carneiro sobre o altar; holocausto de cheiro suave é, uma oferta queimada ao SENHOR, como o SENHOR ordenara a Moisés.
²² Depois, fez chegar o outro carneiro, o carneiro da consagração; e Arão e seus filhos puseram as mãos sobre a cabeça do carneiro;
²³ e o degolou; e Moisés tomou do seu sangue e o pôs sobre a ponta da orelha direita de Arão, e sobre o polegar da sua mão direita, e sobre o polegar do seu pé direito.
²⁴ E fez chegar os filhos de Arão, e Moisés pôs daquele sangue sobre a ponta da orelha direita deles, e sobre o polegar da sua mão direita, e sobre o polegar do seu pé direito; e Moisés espargiu o restante do sangue sobre o altar em redor.
²⁵ E tomou a gordura, e a cauda, e toda a gordura que estava sobre as entranhas, e o redenho do fígado, e ambos os rins, e a sua gordura, e a espádua direita.
²⁶ Também do cesto dos pães asmos, que estava diante do SENHOR, tomou um bolo asmo, e um bolo de pão azeitado, e um coscorão e os pôs sobre a gordura e sobre a espádua direita.
²⁷ E tudo pôs nas mãos de Arão e nas mãos de seus filhos; e os moveu por oferta de movimento perante o SENHOR.
²⁸ Depois, Moisés os tomou das suas mãos e os queimou no altar sobre o holocausto; consagrações são, por cheiro suave, oferta queimada ao SENHOR.
²⁹ E tomou Moisés o peito e moveu-o por oferta de movimento perante o SENHOR; aquela foi a porção de Moisés do carneiro da consagração, como o SENHOR ordenara a Moisés.
³⁰ Tomou Moisés também do óleo da unção e do sangue que estava sobre o altar e o espargiu sobre Arão e sobre as suas vestes, e sobre os seus filhos e sobre as vestes de seus filhos com ele; e santificou a Arão, e as suas vestes, e os seus filhos, e as vestes de seus filhos com ele.
³¹ E disse Moisés a Arão e a seus filhos: Cozei a carne à porta da tenda da congregação e ali a comereis com o pão que está no cesto da consagração, como tenho ordenado, dizendo: Arão e seus filhos a comerão.
³² Mas o que sobejar da carne e do pão queimareis com fogo.
³³ Também da porta da tenda da congregação não saireis por sete dias, até ao dia em que se cumprirem os dias da vossa consagração; porquanto por sete dias vos consagrarão.
³⁴ Como se fez neste dia, assim o SENHOR ordenou se fizesse, para fazer expiação por vós.
³⁵ Ficai, pois, à porta da tenda da congregação dia e noite por sete dias e guardai a ordenança do SENHOR, para que não morrais; porque assim me foi ordenado.
³⁶ E Arão e seus filhos fizeram todas as coisas que o SENHOR ordenara pela mão de Moisés.`,

            // O DESAFIO
            pergunta: {
                texto: "Durante o ritual de consagração, o que Moisés derramou sobre a cabeça de Arão para santificá-lo como Sumo Sacerdote?",
                opcoes: [
                    { numero: 1, texto: "O sangue do novilho da expiação", correta: false },
                    { numero: 2, texto: "Água pura da bacia de bronze", correta: false },
                    { numero: 3, texto: "O óleo da unção", correta: true },
                    { numero: 4, texto: "Cinzas de uma novilha ruiva", correta: false }
                ],
                explicacao: "Levítico 8:12 - Moisés derramou o óleo da unção sobre a cabeça de Arão para consagrá-lo, separando-o exclusivamente para o serviço do SENHOR.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 9 ---
        9: {
            titulo: "O Início do Ministério de Arão",
            subtitulo: "Os primeiros sacrifícios e a manifestação da glória de Deus",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E aconteceu, ao oitavo dia, que Moisés chamou a Arão, e a seus filhos, e aos anciãos de Israel.
² E disse a Arão: Toma um bezerro, para expiação do pecado, e um carneiro, para holocausto, ambos sem mancha, e oferece-os perante o SENHOR.
³ E falarás aos filhos de Israel, dizendo: Tomai um bode, para expiação do pecado, e um bezerro e um cordeiro, de um ano, sem mancha, para holocausto;
⁴ também um boi e um carneiro, para sacrifício pacífico, para sacrificar perante o SENHOR, e oferta de alimentos, amassada com azeite; porquanto hoje o SENHOR vos aparecerá.
⁵ Então, trouxeram o que ordenara Moisés, diante da tenda da congregação, e chegou-se toda a congregação e se pôs perante o SENHOR.
⁶ E disse Moisés: Esta coisa que o SENHOR ordenou fareis; e a glória do SENHOR vos aparecerá.
⁷ E disse Moisés a Arão: Chega-te ao altar, e faze a tua expiação pelo pecado e o teu holocausto; e faze expiação por ti e pelo povo; depois, faze a oferta do povo e faze expiação por eles, como ordenou o SENHOR.
⁸ Então, se chegou Arão ao altar e degolou o bezerro da expiação que era por si mesmo.
⁹ E os filhos de Arão trouxeram-lhe o sangue, e molhou o seu dedo no sangue, e o pôs sobre as pontas do altar; e o resto do sangue derramou à base do altar.
¹⁰ Mas a gordura, e os rins, e o redenho do fígado da expiação do pecado queimou sobre o altar, como o SENHOR ordenara a Moisés.
¹¹ Mas a carne e o couro queimou com fogo fora do arraial.
¹² Depois, degolou o holocausto, e os filhos de Arão lhe entregaram o sangue, e ele o espargiu sobre o altar em redor.
¹³ Também lhe entregaram o holocausto nos seus pedaços, com a cabeça; e queimou-o sobre o altar.
¹⁴ E lavou as entranhas e as pernas e as queimou sobre o holocausto no altar.
¹⁵ Depois, fez chegar a oferta do povo, e tomou o bode da expiação do pecado, que era pelo povo, e o degolou, e o ofereceu pelo pecado, como o primeiro.
¹⁶ Fez também chegar o holocausto e ofereceu-o segundo o rito.
¹¹⁷ E fez chegar a oferta de alimentos, e encheu a sua mão dela, e queimou-a sobre o altar, além do holocausto da manhã.
¹⁸ Depois, degolou o boi e o carneiro em sacrifício pacífico, que era pelo povo; e os filhos de Arão entregaram-lhe o sangue, que espargiu sobre o altar em redor,
¹⁹ como também a gordura do boi e do carneiro, a cauda, e o que cobre as entranhas, e os rins, e o redenho do fígado.
²⁰ E puseram a gordura sobre os peitos, e ele queimou a gordura sobre o altar;
²¹ mas os peitos e a espádua direita Arão moveu por oferta de movimento perante o SENHOR, como Moisés ordenara.
²² Depois, Arão levantou as suas mãos ao povo e o abençoou; e desceu de fazer a expiação do pecado, e o holocausto, e o sacrifício pacífico.
²³ Então, entraram Moisés e Arão na tenda da congregação; depois, saíram e abençoaram o povo; e a glória do SENHOR apareceu a todo o povo.
²⁴ Porque o fogo saiu de diante do SENHOR e consumiu o holocausto e a gordura sobre o altar; o que vendo todo o povo, jubilaram e caíram sobre os seus rostos.`,

            // O DESAFIO
            pergunta: {
                texto: "Após Arão e Moisés abençoarem o povo ao saírem da tenda da congregação, o que aconteceu para demonstrar que Deus aceitara os sacrifícios?",
                opcoes: [
                    { numero: 1, texto: "Começou a chover maná sobre o altar", correta: false },
                    { numero: 2, texto: "Saiu fogo de diante do SENHOR e consumiu o holocausto", correta: true },
                    { numero: 3, texto: "As colunas do tabernáculo se transformaram em ouro", correta: false },
                    { numero: 4, texto: "Ouviu-se uma voz vinda do céu aprovando Arão", correta: false }
                ],
                explicacao: "Levítico 9:23-24 - A aceitação divina foi visível e imediata: o fogo divino consumiu a oferta sobre o altar, levando o povo a gritar de alegria e prostrar-se.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 10 ---
        10: {
            titulo: "O Pecado de Nadabe e Abiú",
            subtitulo: "O fogo estranho e o julgamento imediato dos filhos de Arão",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E os filhos de Arão, Nadabe e Abiú, tomaram cada um o seu incensário, e puseram neles fogo, e puseram incenso sobre ele, e trouxeram fogo estranho perante a face do SENHOR, o que lhes não ordenara.
² Então, saiu fogo de diante do SENHOR e os consumiu; e morreram perante o SENHOR.
³ E disse Moisés a Arão: Isto é o que o SENHOR falou, dizendo: Serei santificado naqueles que se chegam a mim e serei glorificado diante de todo o povo. Porém Arão calou-se.
⁴ E Moisés chamou a Misael e a Elzafã, filhos de Uziel, tio de Arão, e disse-lhes: Chegai, tirai vossos irmãos de diante do santuário, para fora do arraial.
⁵ Então, chegaram e levaram-nos nas suas túnicas para fora do arraial, como Moisés tinha dito.
⁶ E Moisés disse a Arão e a seus filhos Eleazar e Itamar: Não descobrireis as vossas cabeças, nem rasgareis vossas vestes, para que não morrais, nem venha grande ira sobre toda a congregação; mas vossos irmãos, toda a casa de Israel, lamentem este incêndio que o SENHOR acendeu.
⁷ Nem saireis da porta da tenda da congregação, para que não morrais; porque está sobre vós o óleo da unção do SENHOR. E fizeram conforme a palavra de Moisés.
⁸ E falou o SENHOR a Arão, dizendo:
⁹ Vinho nem bebida forte tu e teus filhos contigo não bebereis, quando entrardes na tenda da congregação, para que não morrais; estatuto perpétuo será isso entre as vossas gerações,
¹⁰ para fazer diferença entre o santo e o profano e entre o imundo e o limpo,
¹¹ e para ensinar aos filhos de Israel todos os estatutos que o SENHOR lhes tem falado pela mão de Moisés.
¹² E disse Moisés a Arão, e a Eleazar, e a Itamar, seus filhos, que ficaram: Tomai a oferta de alimentos, a restante das ofertas queimadas do SENHOR, e comei-a sem fermento junto ao altar, porquanto coisa santíssima é.
¹³ Comê-la-eis, pois, no lugar santo; porque isto é a tua porção e a porção de teus filhos, das ofertas queimadas do SENHOR; porque assim me foi ordenado.
¹⁴ Também o peito da oferta de movimento e a espádua da oferta alçada comereis em lugar limpo, tu, e teus filhos, e tuas filhas contigo; porque foram dados por tua porção e por porção de teus filhos, dos sacrifícios pacíficos dos filhos de Israel.
¹⁵ A espádua alçada e o peito da oferta de movimento trarão com as ofertas queimadas da gordura, para mover por oferta de movimento perante o SENHOR; o que será por estatuto perpétuo para ti e para teus filhos contigo, como o SENHOR tem ordenado.
¹⁶ E Moisés buscou diligentemente o bode da expiação, e eis que já era queimado; portanto, indignou-se grandemente contra Eleazar e contra Itamar, os filhos que de Arão ficaram, dizendo:
¹⁷ Por que não comestes a expiação do pecado no lugar santo? Pois coisa santíssima é; e o SENHOR a deu a vós, para levardes a iniquidade da congregação, para fazer expiação por eles diante do SENHOR.
¹⁸ Eis que não se trouxe o seu sangue para dentro do santuário; certamente a devíeis ter comido no lugar santo, como eu tinha ordenado.
¹⁹ Então, disse Arão a Moisés: Eis que hoje ofereceram a sua expiação pelo pecado e o seu holocausto perante o SENHOR; e tais coisas me sucederam; se hoje comera a expiação do pecado, seria isso aceito aos olhos do SENHOR?
²⁰ E Moisés, ouvindo isso, deu-se por satisfeito.`,

            // O DESAFIO
            pergunta: {
                texto: "O que Nadabe e Abiú, filhos de Arão, fizeram de errado que resultou na morte imediata de ambos diante do SENHOR?",
                opcoes: [
                    { numero: 1, texto: "Entraram no Santíssimo sem as vestes sacerdotais", correta: false },
                    { numero: 2, texto: "Ofereceram fogo estranho que o SENHOR não lhes ordenara", correta: true },
                    { numero: 3, texto: "Recusaram-se a lavar as mãos na bacia de bronze", correta: false },
                    { numero: 4, texto: "Comeram da carne do sacrifício no momento proibido", correta: false }
                ],
                explicacao: "Levítico 10:1-2 - Eles trouxeram fogo não santificado ao altar, desobedecendo às instruções precisas de Deus, e foram consumidos pelo fogo que saiu de diante do SENHOR.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 11 ---
        11: {
            titulo: "Animais Limpos e Imundos",
            subtitulo: "A distinção entre o puro e o impuro na alimentação de Israel",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E falou o SENHOR a Moisés e a Arão, dizendo - lhes:
² Fala aos filhos de Israel, dizendo: Estes são os animais que comereis de todos os animais que há sobre a terra:
³ tudo o que tem unhas fendidas, e a fenda das unhas se divide em duas, e rumina, entre os animais, aquilo comereis.
⁴ Destes, porém, não comereis, dos que ruminam ou dos que têm unhas fendidas: o camelo, que rumina, mas não tem unhas fendidas; imundo vos será;
⁵ e o coelho, porque rumina, mas não tem unhas fendidas; imundo vos será;
⁶ e a lebre, porque rumina, mas não tem unhas fendidas; imunda vos será;
⁷ e o porco, porque tem unhas fendidas, e a fenda das unhas se divide em duas, mas não rumina; imundo vos será.
⁸ Da sua carne não comereis, nem tocureis no seu cadáver; imundos vos serão.
⁹ Isto comereis de tudo o que há nas águas: tudo o que tem barbatanas e escamas, nas águas, nos mares e nos ribeiros, aquilo comereis.
¹⁰ Mas tudo o que não tem barbatanas nem escamas, nos mares e nos ribeiros, de todo o enxame das águas e de toda a alma vivente que há nas águas, estes serão para vós abominação.
¹¹ Ser - vos - ão, pois, abominação; da sua carne não comereis e abominareis o seu cadáver.
¹² Tudo o que não tem barbatanas ou escamas, nas águas, será para vós abominação.
¹³ E estas abominareis entre as aves; não se comerão, serão abominação: a águia, e o quebrantosso, e o animal marinho,
¹⁴ e o milhano, e o abutre segundo a sua espécie,
¹⁵ todo corvo segundo a sua espécie,
¹⁶ e o avestruz, e o mocho, e a gaivota, e o gavião segundo a sua espécie,
¹⁷ e o bufo, e o mergulhão, e a coruja,
¹⁸ e o cisne, e o pelicano, e o abutre do Egito,
¹⁹ e a cegonha, a garça segundo a sua espécie, e a poupa, e o morcego.
²⁰ Todo inseto que voa, que anda sobre quatro pés, será para vós abominação.
²¹ Mas isto comereis de todo o inseto que voa, que anda sobre quatro pés: o que tiver pernas sobre os seus pés, para saltar com elas sobre a terra.
²² Deles, comereis estes: a locusta segundo a sua espécie, e o gafanhoto devorador segundo a sua espécie, e o grilo segundo a sua espécie, e o gafanhoto segundo a sua espécie.
²³ E todos os outros insetos que voam, que têm quatro pés, serão para vós abominação.
²⁴ E por estes sereis imundos: qualquer que tocar os seus cadáveres imundo será até à tarde.
²⁵ E qualquer que levar qualquer parte dos seus cadáveres lavará as suas vestes e será imundo até à tarde.
²⁶ Todo animal que tem unhas fendidas, mas a fenda não se divide em duas, e todo o que não rumina, vos serão imundos; qualquer que tocar neles será imundo.
²⁷ E todo animal que anda sobre as suas patas, entre todos os animais que andam a quatro pés, vos será imundo; qualquer que tocar os seus cadáveres será imundo até à tarde.
²⁸ E o que levar os seus cadáveres lavará as suas vestes e será imundo até à tarde; imundos vos serão.
²⁹ Estes também vos serão imundos entre os répteis que se arrastam sobre a terra: a doninha, e o rato, e o lagarto segundo a sua espécie,
³⁰ e o geco, e o crocodilo da terra, e a lagartixa, e o lagarto da areia, e o camaleão.
³¹ Estes vos serão imundos entre todos os répteis; qualquer que os tocar, estando eles mortos, será imundo até à tarde.
³² E tudo aquilo sobre o que cair alguma coisa deles, estando eles mortos, será imundo; seja vaso de madeira, ou veste, ou pele, ou saco, qualquer instrumento com que se faz obra, será metido na água e será imundo até à tarde; depois, será limpo.
³³ E todo vaso de barro, em que cair alguma coisa deles, tudo o que houver nele será imundo, e o vaso quebrareis.
³⁴ Todo alimento que se come, sobre o qual vier água de tal vaso, será imundo; e toda bebida que se bebe, em todo o vaso semelhante, será imunda.
³⁵ E tudo aquilo sobre o que cair alguma parte do seu cadáver será imundo: o forno e o fogão serão quebrados; imundos são, portanto vos serão imundos.
³⁶ Porém a fonte ou cisterna, em que há ajuntamento de águas, será limpa, mas o que tocar no seu cadáver será imundo.
³⁷ E, se do seu cadáver cair alguma coisa sobre alguma semente de semear, esta será limpa;
³⁸ mas, se for deitada água sobre a semente, e se do seu cadáver cair alguma coisa sobre ela, vos será imunda.
³⁹ E, se morrer algum dos animais que vos servem de alimento, quem tocar no seu cadáver será imundo até à tarde;
⁴⁰ e quem comer do seu cadáver lavará as suas vestes e será imundo até à tarde; e quem levar o seu cadáver lavará as suas vestes e será imundo até à tarde.
⁴¹ Também todo réptil que se arrasta sobre a terra será abominação; não se comerá.
⁴² Tudo o que anda sobre o ventre, e tudo o que anda sobre quatro pés, ou tudo o que tem muitos pés, entre todo o réptil que se arrasta sobre a terra, não comereis, porquanto são abominação.
⁴³ Não façais as vossas almas abomináveis por nenhum réptil que se arrasta, nem neles vos contamineis, para vos fazerdes imundos por eles.
⁴⁴ Porque eu sou o SENHOR, vosso Deus; portanto, vós vos santificareis e sereis santos, porque eu sou santo; e não contaminareis as vossas almas por nenhum réptil que se arrasta sobre a terra.
⁴⁵ Porque eu sou o SENHOR, que vos fiz subir da terra do Egito, para que eu seja vosso Deus, e para que sejais santos; porque eu sou santo.
⁴⁶ Esta é a lei dos animais, e das aves, e de toda alma vivente que se move nas águas, e de toda alma que se arrasta sobre a terra;
⁴⁷ para fazer diferença entre o imundo e o limpo; e entre os animais que se podem comer e os animais que não se podem comer.`,

            // O DESAFIO
            pergunta: {
                texto: "Quais são as duas características físicas obrigatórias para que um animal terrestre pudesse ser comido pelos filhos de Israel?",
                opcoes: [
                    { numero: 1, texto: "Ter chifres e comer apenas ervas verdes", correta: false },
                    { numero: 2, texto: "Ter a unha fendida (casco dividido) e ruminar", correta: true },
                    { numero: 3, texto: "Ter dentes fortes e ser veloz", correta: false },
                    { numero: 4, texto: "Ter quatro patas e viver em rebanhos", correta: false }
                ],
                explicacao: "Levítico 11:3 - O SENHOR estabeleceu critérios claros para a santidade alimentar: apenas animais que ruminam e possuem cascos completamente divididos eram considerados puros.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 12 ---
        12: {
            titulo: "A Purificação da Mulher após o Parto",
            subtitulo: "As leis sobre o tempo de resguardo e a oferta de purificação",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Falou mais o SENHOR a Moisés, dizendo:
² Fala aos filhos de Israel, dizendo: Se uma mulher conceber e tiver um varão, será imunda sete dias, assim como nos dias da separação da sua enfermidade será imunda.
³ E, no oitavo dia, se circuncidará a carne do seu prepúcio.
⁴ Depois, ficará ela trinta e três dias no sangue da sua purificação; nenhuma coisa santa tocará e não virá ao santuário até que se cumpram os dias da sua purificação.
⁵ Mas, se tiver uma fêmea, será imunda duas semanas, como na sua separação; depois, ficará sessenta e seis dias no sangue da sua purificação.
⁶ E, quando forem cumpridos os dias da sua purificação por filho ou por filha, trará um cordeiro de um ano para holocausto e um pombinho ou uma rola para expiação do pecado, à porta da tenda da congregação, ao sacerdote;
⁷ o qual o oferecerá perante o SENHOR e por ela fará expiação; e será limpa do fluxo do seu sangue; esta é a lei da que tiver varão ou fêmea.
⁸ Mas, se a sua mão não alcançar o que bastar para um cordeiro, então, tomará duas rolas ou dois pombinhos, um para o holocausto e outro para a expiação do pecado; assim, o sacerdote por ela fará expiação, e será limpa.`,

            // O DESAFIO
            pergunta: {
                texto: "Se uma mulher desse à luz um filho homem, por quantos dias ela permaneceria cerimonialmente impura antes de poder tocar em qualquer coisa sagrada?",
                opcoes: [
                    { numero: 1, texto: "Por 7 dias, seguidos de 33 dias de purificação", correta: true },
                    { numero: 2, texto: "Por 14 dias, seguidos de 66 dias de purificação", correta: false },
                    { numero: 3, texto: "Apenas pelo dia do nascimento", correta: false },
                    { numero: 4, texto: "Por 40 dias sem distinção de fases", correta: false }
                ],
                explicacao: "Levítico 12:2-4 - Para um menino, o tempo total era de 40 dias (7+33). No caso de uma menina, o tempo de purificação era dobrado, totalizando 80 dias.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 13 ---
        13: {
            titulo: "As Leis sobre a Lepra",
            subtitulo: "O diagnóstico das doenças de pele e das manchas em roupas",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E falou o SENHOR a Moisés e a Arão, dizendo:
² O homem, quando na pele da sua carne houver inchação, ou pústula, ou mancha lustrosa, e se tornar na pele da sua carne como praga de lepra, será levado a Arão, o sacerdote, ou a um de seus filhos, os sacerdotes.
³ E o sacerdote examinará a praga na pele da carne; se o pelo na praga se tornou branco, e a praga parecer mais profunda do que a pele da sua carne, praga de lepra é; o sacerdote, vendo-o, o declarará imundo.
⁴ Mas, se a mancha na pele da sua carne for branca, e não parecer mais profunda do que a pele, e o seu pelo se não tornou branco, então, o sacerdote encerrará o que tem a praga por sete dias.
⁵ E, ao sétimo dia, o sacerdote o examinará; e eis que, se a praga, ao seu parecer, parou, e a praga se não estendeu na pele, então, o sacerdote o encerrará por outros sete dias.
⁶ E o sacerdote, ao sétimo dia, o examinará outra vez; e eis que, se a praga se recolheu, e a praga se não estendeu na pele, então, o sacerdote o declarará limpo: é uma pústula; e lavará as suas vestes e será limpo.
⁷ Mas, se a pústula se estender muito na pele, depois que foi mostrado ao sacerdote para a sua purificação, será mostrado outra vez ao sacerdote.
⁸ E o sacerdote o examinará, e eis que, se a pústula se estendeu na pele, o sacerdote o declarará imundo: lepra é.
⁹ Quando no homem houver praga de lepra, será levado ao sacerdote.
¹⁰ E o sacerdote o examinará, e eis que, se houver inchação branca na pele, a qual tornou o pelo branco, e houver carne viva na inchação,
¹¹ lepra inveterada é na pele da sua carne; portanto, o sacerdote o declarará imundo; não o encerrará, porque imundo é.
¹² E, se a lepra florescer muito na pele e a lepra cobrir toda a pele do que tem a praga, desde a sua cabeça até aos seus pés, quanto podem ver os olhos do sacerdote,
¹³ então, o sacerdote examinará, e eis que, se a lepra cobriu toda a sua carne, declarará limpo o que tem a praga; tudo se tornou branco; limpo está.
¹⁴ Mas, no dia em que aparecer nela carne viva, será imundo.
¹⁵ Vendo, pois, o sacerdote a carne viva, declará-lo-á imundo; a carne viva é imunda: lepra é.
¹⁶ Ou, tornando a carne viva e mudando-se em branca, então, virá ao sacerdote,
¹¹⁷ e o sacerdote o examinará, e eis que, se a praga se mudou em branco, o sacerdote declarará limpo o que tem a praga; limpo está.
¹⁸ E, se a carne tiver na sua pele uma úlcera e esta sarar,
¹⁹ e no lugar da úlcera houver inchação branca ou mancha lustrosa, branca-avermelhada, mostrar-se-á ao sacerdote.
²⁰ E o sacerdote examinará, e eis que, se ela parecer mais funda do que a pele, e o seu pelo se tornou branco, o sacerdote o declarará imundo: praga de lepra é; brotou da úlcera.
²¹ E, se o sacerdote a examinar, e eis que nela não houver pelo branco, nem for mais funda do que a pele, mas se recolher, então, o sacerdote o encerrará por sete dias.
²² E, se ela se estender muito na pele, o sacerdote o declarará imundo: praga é.
²³ Mas, se a mancha lustrosa parar no seu lugar, não se estendendo, é queimadura da úlcera; o sacerdote, pois, o declarará limpo.
²⁴ Ou, quando na pele da carne houver queimadura de fogo, e a carne viva da queimadura se tornar em mancha lustrosa, branca-avermelhada ou branca,
²⁵ e o sacerdote a examinar, e eis que o pelo na mancha lustrosa se tornou branco, e ela parecer mais funda do que a pele, lepra é, que brotou da queimadura; e o sacerdote o declarará imundo: praga de lepra é.
²⁶ Mas, se o sacerdote a examinar, e eis que na mancha lustrosa não houver pelo branco, nem for mais funda do que a pele, mas se recolher, então, o sacerdote o encerrará por sete dias.
²⁷ Depois, o sacerdote o examinará ao sétimo dia; se ela se estender muito na pele, o sacerdote o declarará imundo: praga de lepra é.
²⁸ Mas, se a mancha lustrosa parar no seu lugar, não se estendendo na pele, mas se recolher, inchação da queimadura é; portanto, o sacerdote o declarará limpo, porque é sinal de queimadura.
²⁹ E, quando homem ou mulher tiver praga na cabeça ou na barba,
³⁰ e o sacerdote examinar a praga, e eis que ela parecer mais funda do que a pele, e nela houver pelo amarelo fino, o sacerdote o declarará imundo: é tinha; lepra da cabeça ou da barba é.
³¹ Mas, se o sacerdote, examinando a praga da tinha, vir que ela não parece mais funda do que a pele, e nela não houver pelo preto, então, o sacerdote encerrará o que tem a praga da tinha por sete dias.
³² E o sacerdote examinará a praga ao sétimo dia; e eis que, se a tinha se não estendeu, e nela não houver pelo amarelo, nem a tinha parecer mais funda do que a pele,
³³ então, se rapará; mas não rapará a tinha; e o sacerdote encerrará o que tem a tinha por outros sete dias.
³⁴ Depois, o sacerdote examinará a tinha ao sétimo dia; e eis que, se a tinha se não estendeu na pele, e ela não parecer mais funda do que a pele, o sacerdote o declarará limpo; e lavará as suas vestes e será limpo.
³⁵ Mas, se a tinha se estender muito na pele depois da sua purificação,
³⁶ então, o sacerdote o examinará, e eis que, se a tinha se estendeu na pele, o sacerdote não buscará pelo amarelo; imundo está.
³⁷ Mas, se a tinha, ao seu parecer, parou, e o pelo preto brotou nela, a tinha sarou; limpo está; o sacerdote, pois, o declarará limpo.
³⁸ E, quando homem ou mulher tiver manchas lustrosas na pele da sua carne, manchas brancas,
³⁹ então, o sacerdote examinará; e eis que, se na pele da sua carne houver manchas brancas baças, é sarda que brotou na pele; limpo está.
⁴⁰ E, quando a cabeça do homem se pelar, é calva; limpo está.
⁴¹ E, se a sua cabeça se pelar na banda da face, é meio-calvo; limpo está.
⁴² Mas, se na calva ou na meia-calva houver praga branca-avermelhada, lepra é, florescendo na sua calva ou na sua meia-calva.
⁴³ Então, o sacerdote o examinará; e eis que, se a inchação da praga na sua calva ou na sua meia-calva for branca-avermelhada, como o parecer da lepra na pele da carne,
⁴⁴ leproso é aquele homem; imundo está; o sacerdote o declarará totalmente imundo: na sua cabeça está a sua praga.
⁴⁵ Também as vestes do leproso, em quem está a praga, serão rasgadas, e a sua cabeça será descoberta, e cobrirá o lábio superior, e clamará: Imundo! Imundo!
⁴⁶ Todos os dias em que a praga estiver nele, será imundo; imundo está; habitará só; fora do arraial será a sua habitação.
⁴⁷ Quando também houver praga de lepra em alguma veste, quer em veste de lã, quer em veste de linho,
⁴⁸ quer na urdidura, quer na trama, de linho ou de lã, quer em pele, quer em qualquer obra de pele,
⁴⁹ e a praga for esverdeada ou avermelhada na veste, ou na pele, ou na urdidura, ou na trama, ou em qualquer objeto de pele, praga de lepra é; pelo que se mostrará ao sacerdote.
⁵⁰ E o sacerdote examinará a praga e encerrará o que tem a praga por sete dias.
⁵¹ Então, examinará a praga ao sétimo dia; se a praga se houver estendido na veste, ou na urdidura, ou na trama, ou na pele, para qualquer obra que se faça da pele, lepra roedora é; imunda está.
⁵² Pelo que se queimará aquela veste, ou a urdidura, ou a trama, quer de lã, quer de linho, ou qualquer objeto de pele em que houver a praga, porque lepra roedora é; com fogo se queimará.
⁵³ Mas, se o sacerdote a examinar, e eis que a praga se não estendeu na veste, ou na urdidura, ou na trama, ou em qualquer objeto de pele,
⁵⁴ então, o sacerdote ordenará que lavem aquilo em que havia a praga e o encerrará por outros sete dias.
⁵⁵ E o sacerdote examinará a praga, depois que for lavada, e eis que, se a praga não mudou o seu aspecto, nem a praga se estendeu, imundo está; com fogo o queimarás; roedura é no avesso ou no direito.
⁵⁶ Mas, se o sacerdote examinar, e eis que a praga se recolheu depois de lavada, então, a rasgará da veste, ou da pele, ou da urdidura, ou da trama.
⁵⁷ E, se ainda aparecer na veste, ou na urdidura, ou na trama, ou em qualquer objeto de pele, é lepra florescente; com fogo queimarás aquilo em que houver a praga.
⁵⁸ Mas a veste, ou a urdidura, ou a trama, ou qualquer objeto de pele que lavares, e de que a praga se retirar, se lavará segunda vez e será limpo.
⁵⁹ Esta é a lei da praga da lepra da veste de lã ou de linho, ou da urdidura, ou da trama, ou de qualquer objeto de pele, para declará-lo limpo ou para declará-lo imundo.`,

            // O DESAFIO
            pergunta: {
                texto: "Quem era a autoridade responsável por examinar uma pessoa com suspeita de lepra e declará-la limpa ou imunda?",
                opcoes: [
                    { numero: 1, texto: "O ancião da tribo correspondente", correta: false },
                    { numero: 2, texto: "O médico do acampamento", correta: false },
                    { numero: 3, texto: "O sacerdote (Arão ou um de seus filhos)", correta: true },
                    { numero: 4, texto: "Moisés, como o líder supremo", correta: false }
                ],
                explicacao: "Levítico 13:2-3 - Cabia exclusivamente ao sacerdote a função de examinar clinicamente a pele, os pelos e a profundidade da mancha para dar o diagnóstico ritual.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 14 ---
        14: {
            titulo: "A Purificação do Leproso",
            subtitulo: "Os rituais de restauração e a purificação de casas contaminadas",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Depois, falou o SENHOR a Moisés, dizendo:
² Esta será a lei do leproso no dia da sua purificação: será levado ao sacerdote;
³ e o sacerdote sairá fora do arraial e o examinará; e eis que, se a praga da lepra do leproso for sarada,
⁴ então, o sacerdote ordenará que, por aquele que se houver de purificar, se tomem duas aves vivas e limpas, e madeira de acácia, e carmesim, e hissopo.
⁵ Mandará também o sacerdote que se degole uma ave num vaso de barro sobre águas vivas.
⁶ E tomará a ave viva, e a madeira de acácia, e o carmesim, e o hissopo, e os molhará, com a ave viva, no sangue da ave que foi degolada sobre as águas vivas.
⁷ E, sobre aquele que se há de purificar da lepra, espargirá sete vezes; então, o declarará limpo e soltará a ave viva sobre a face do campo.
⁸ E aquele que se tem de purificar lavará as suas vestes, e rapará todo o seu pelo, e se lavará com água; assim será limpo; e, depois, entrará no arraial, porém ficará fora da sua tenda por sete dias.
⁹ E será que, ao sétimo dia, rapará todo o seu pelo, a cabeça, e a barba, e as sobrancelhas; sim, rapará todo o pelo, e lavará as suas vestes, e lavará a sua carne com água; assim será limpo.
¹⁰ E, ao oitavo dia, tomará dois cordeiros sem mancha, e uma cordeira de um ano sem mancha, e três décimas de flor de farinha para oferta de alimentos, amassada com azeite, e um log de azeite.
¹¹ E o sacerdote que faz a purificação apresentará o homem que se houver de purificar com aquelas coisas perante o SENHOR, à porta da tenda da congregação.
¹² E o sacerdote tomará um dos cordeiros e o oferecerá por expiação da culpa e o log de azeite; e os moverá por oferta de movimento perante o SENHOR.
¹³ Então, degolará o cordeiro no lugar onde se degola a oferta pelo pecado e o holocausto, no lugar santo; porque, como a expiação pelo pecado é para o sacerdote, assim a expiação da culpa; coisa santíssima é.
¹⁴ E o sacerdote tomará do sangue da expiação da culpa e o sacerdote o porá sobre a ponta da orelha direita daquele que se tem de purificar e sobre o polegar da sua mão direita e sobre o polegar do seu pé direito.
¹⁵ Também o sacerdote tomará do log de azeite e o derramará na palma da sua própria mão esquerda.
¹⁶ Então, o sacerdote molhará o seu dedo direito no azeite que está na sua mão esquerda e daquele azeite espargirá com o seu dedo sete vezes perante o SENHOR.
¹¹⁷ E do restante do azeite que está na sua mão o sacerdote porá sobre a ponta da orelha direita daquele que se tem de purificar, e sobre o polegar da sua mão direita, e sobre o polegar do seu pé direito, em cima do sangue da expiação da culpa.
¹⁸ E o restante do azeite que está na mão do sacerdote o porá sobre a cabeça daquele que se tem de purificar; assim, o sacerdote fará expiação por ele perante o SENHOR.
¹⁹ Também o sacerdote fará a expiação pelo pecado e fará expiação por aquele que se tem de purificar da sua imundícia; e, depois, degolará o holocausto.
²⁰ E o sacerdote oferecerá o holocausto e a oferta de alimentos sobre o altar; assim, o sacerdote fará expiação por ele, e será limpo.
²¹ Mas, se for pobre, e a sua mão não alcançar tanto, tomará um cordeiro para expiação da culpa, em oferta de movimento, para fazer expiação por ele, e uma décima de flor de farinha, amassada com azeite, para oferta de alimentos, e um log de azeite,
²² e duas rolas ou dois pombinhos, conforme alcançar a sua mão; e um será para expiação do pecado, e o outro, para holocausto.
²³ E, ao oitavo dia da sua purificação, os trará ao sacerdote, à porta da tenda da congregação, perante o SENHOR.
²⁴ E o sacerdote tomará o cordeiro da expiação da culpa e o log de azeite e o sacerdote os moverá por oferta de movimento perante o SENHOR.
²⁵ Então, degolará o cordeiro da expiação da culpa, e o sacerdote tomará do sangue da expiação da culpa e o porá sobre a ponta da orelha direita daquele que se tem de purificar e sobre o polegar da sua mão direita e sobre o polegar do seu pé direito.
²⁶ Também o sacerdote derramará do azeite na palma da sua própria mão esquerda.
²⁷ E com o seu dedo direito o sacerdote espargirá do azeite que está na sua mão esquerda sete vezes perante o SENHOR.
²⁸ Também o sacerdote porá do azeite que está na sua mão sobre a ponta da orelha direita daquele que se tem de purificar, e sobre o polegar da sua mão direita, e sobre o polegar do seu pé direito, no lugar do sangue da expiação da culpa.
²⁹ E o que ficar do azeite que está na mão do sacerdote o porá sobre a cabeça daquele que se tem de purificar, para fazer expiação por ele perante o SENHOR.
³⁰ Depois, oferecerá uma das rolas ou um dos pombinhos, conforme alcançar a sua mão;
³¹ o que alcançar a sua mão, um para expiação do pecado e o outro para holocausto, com a oferta de alimentos; assim, o sacerdote fará expiação por aquele que se tem de purificar perante o SENHOR.
³² Esta é a lei daquele em quem estiver a praga da lepra, cuja mão não alcançar o que pertence à sua purificação.
³³ Falou mais o SENHOR a Moisés e a Arão, dizendo:
³⁴ Quando tiverdes entrado na terra de Canaã, que vos dou em possessão, e eu puser a praga da lepra em alguma casa da terra da vossa possessão,
³⁵ virá aquele de quem for a casa e fará saber ao sacerdote, dizendo: Parece-me que há como que praga em minha casa.
³⁶ E o sacerdote ordenará que despejem a casa, antes que venha para examinar a praga, para que tudo o que está na casa não seja imundo; e, depois, virá o sacerdote para examinar a casa.
³⁷ E, examinando a praga, e eis que, se a praga estiver nas paredes da casa em covinhas verdes ou vermelhas, e parecerem mais fundas do que a parede,
³⁸ então, o sacerdote sairá da casa à porta da casa e encerrará a casa por sete dias.
³⁹ Depois, o sacerdote voltará ao sétimo dia e examinará; e eis que, se a praga se tiver estendido nas paredes da casa,
⁴⁰ então, o sacerdote ordenará que arranquem as pedras em que estiver a praga e que as lancem fora da cidade num lugar imundo.
⁴¹ E fará raspar a casa por dentro ao redor; e o pó que rasparem lançarão fora da cidade num lugar imundo.
⁴² Depois, tomarão outras pedras e as porão no lugar das primeiras pedras; e tomar-se-á outro barro e se rebocará a casa.
⁴³ Mas, se a praga tornar a brotar na casa, depois de arrancadas as pedras, e depois de raspada a casa, e depois de rebocada,
⁴⁴ então, o sacerdote entrará e examinará; e eis que, se a praga na casa se tem estendido, lepra roedora há na casa; imunda está.
⁴⁵ Derrubar-se-á, pois, a casa, as suas pedras, e a sua madeira, como também todo o barro da casa; e se levará tudo para fora da cidade a um lugar imundo.
⁴⁶ E o que entrar na casa, em qualquer dia em que estiver encerrada, será imundo até à tarde.
⁴⁷ Também o que se deitar na casa lavará as suas vestes; e o que comer na casa lavará as suas vestes.
⁴⁸ Mas, entrando o sacerdote e examinando, e eis que, se a praga se não tem estendido na casa depois que a casa foi rebocada, o sacerdote declarará a casa limpa, porque a praga está curada.
⁴⁹ Depois, tomará para purificar a casa duas aves, e madeira de acácia, e carmesim, e hissopo;
⁵⁰ e degolará uma ave num vaso de barro sobre águas vivas;
⁵¹ então, tomará a madeira de acácia, e o hissopo, e o carmesim, e a ave viva, e os molhará no sangue da ave degolada e nas águas vivas, e espargirá a casa sete vezes.
⁵² Assim, purificará a casa com o sangue da ave, e com as águas vivas, e com a ave viva, e com a madeira de acácia, e com o hissopo, e com o carmesim.
⁵³ Então, soltará a ave viva para fora da cidade, sobre a face do campo; assim, fará expiação pela casa, e será limpa.
⁵⁴ Esta é a lei de toda praga de lepra, e de tinha,
⁵⁵ e da lepra da veste, e da casa,
⁵⁶ e da inchação, e da pústula, e da mancha lustrosa,
⁵⁷ para ensinar quando qualquer coisa será imunda e quando será limpa. Esta é a lei da lepra.`,

            // O DESAFIO
            pergunta: {
                texto: "No ritual de purificação de um leproso que foi curado, o que o sacerdote deveria fazer com as duas aves vivas e limpas?",
                opcoes: [
                    { numero: 1, texto: "Queimar ambas sobre o altar do holocausto", correta: false },
                    { numero: 2, texto: "Matar uma em um vaso de barro e soltar a outra viva no campo", correta: true },
                    { numero: 3, texto: "Entregar ambas à família do purificado", correta: false },
                    { numero: 4, texto: "Soltar as duas aves simultaneamente em direção ao deserto", correta: false }
                ],
                explicacao: "Levítico 14:4-7 - Uma ave era sacrificada sobre águas correntes e a ave viva, molhada no sangue da primeira, era solta, simbolizando a liberdade e a vida retornando ao purificado.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 15 ---
        15: {
            titulo: "As Leis sobre Fluxos e Impurezas",
            subtitulo: "A higiene ritual e as emissões do corpo",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Falou mais o SENHOR a Moisés e a Arão, dizendo:
² Fala aos filhos de Israel e dize-lhes: Qualquer homem que tiver fluxo de sua carne, por causa do seu fluxo será imundo.
³ Esta, pois, será a sua imundícia por causa do seu fluxo: se a sua carne vaza o seu fluxo ou se a sua carne estanca o seu fluxo, esta é a sua imundícia.
⁴ Toda cama em que se deitar o que tiver fluxo será imunda; e toda coisa sobre que se assentar será imunda.
⁵ E qualquer que tocar a sua cama lavará as suas vestes, e se lavará com água, e será imundo até à tarde.
⁶ E aquele que se assentar sobre aquilo em que se assentou o que tem fluxo lavará as suas vestes, e se lavará com água, e será imundo até à tarde.
⁷ E aquele que tocar a carne do que tem fluxo lavará as suas vestes, e se lavará com água, e será imundo até à tarde.
⁸ Se o que tem fluxo cuspir sobre o limpo, este lavará as suas vestes, e se lavará com água, e será imundo até à tarde.
⁹ Também toda sela em que cavalgar o que tem fluxo será imunda.
¹⁰ E qualquer que tocar em alguma coisa que estiver debaixo dele será imundo até à tarde; e aquele que a levar lavará as suas vestes, e se lavará com água, e será imundo até à tarde.
¹¹ Também todo aquele em quem tocar o que tem fluxo, sem ter lavado as suas mãos com água, lavará as suas vestes, e se lavará com água, e será imundo até à tarde.
¹² E o vaso de barro em que tocar o que tem fluxo será quebrado; porém todo vaso de madeira será lavado com água.
¹³ Quando, pois, o que tem fluxo estiver limpo do seu fluxo, contar-se-ão sete dias para a sua purificação; e lavará as suas vestes, e lavará a sua carne em águas vivas, e será limpo.
¹⁴ E, ao oitavo dia, tomará duas rolas ou dois pombinhos, e virá perante o SENHOR, à porta da tenda da congregação, e os dará ao sacerdote.
¹⁵ E o sacerdote os oferecerá, um para expiação do pecado e o outro para holocausto; e, assim, o sacerdote fará por ele expiação do seu fluxo perante o SENHOR.
¹⁶ Também o homem, quando sair dele o sêmen da cópula, lavará toda a sua carne com água e será imundo até à tarde.
¹¹⁷ E toda veste e toda pele em que houver sêmen da cópula se lavarão com água e serão imundas até à tarde.
¹⁸ E a mulher com quem homem se deitar com sêmen da cópula, ambos se lavarão com água e serão imundos até à tarde.
¹⁹ Mas a mulher, quando tiver fluxo, e o seu fluxo de sangue estiver na sua carne, sete dias estará na sua separação, e qualquer que a tocar será imundo até à tarde.
²⁰ E tudo aquilo sobre o que ela se deitar durante a sua separação será imundo; e tudo sobre o que se assentar será imundo.
²¹ E qualquer que tocar a sua cama lavará as suas vestes, e se lavará com água, e será imundo até à tarde.
²² E qualquer que tocar alguma coisa sobre que ela se tiver assentado lavará as suas vestes, e se lavará com água, e será imundo até à tarde.
²³ Se também alguma coisa estiver sobre a cama ou sobre aquilo em que ela se assentou, se alguém a tocar, será imundo até à tarde.
²⁴ E, se algum homem se deitar com ela, e a sua imundícia estiver sobre ele, imundo será por sete dias; e toda cama sobre que se deitar será imunda.
²⁵ Também a mulher, quando tiver fluxo do seu sangue por muitos dias fora do tempo da sua separação, ou quando tiver fluxo de sangue além do tempo da sua separação, todos os dias do fluxo da sua imundícia será imunda, como nos dias da sua separação.
²⁶ Toda cama sobre que se deitar todos os dias do seu fluxo ser-lhe-á como a cama da sua separação; e toda coisa sobre que se assentar será imunda, conforme a imundícia da sua separação.
²⁷ E qualquer que as tocar será imundo; portanto, lavará as suas vestes, e se lavará com água, e será imundo até à tarde.
²⁸ Porém, quando estiver limpa do seu fluxo, então, se contarão sete dias, e depois será limpa.
²⁹ E, ao oitavo dia, tomará duas rolas ou dois pombinhos e os trará ao sacerdote, à porta da tenda da congregação.
³⁰ Então, o sacerdote oferecerá um para expiação do pecado e o outro para holocausto; e o sacerdote fará por ela expiação do fluxo da sua imundícia perante o SENHOR.
³¹ Assim, separareis os filhos de Israel das suas imundícias, para que não morram nas suas imundícias, contaminando o meu tabernáculo, que está no meio deles.
³² Esta é a lei daquele que tem o fluxo e daquele de quem sai o sêmen da cópula, para que por ele se faça imundo;
³³ como também daquela que padece o fluxo da sua separação, e daquele que tem o fluxo, seja homem ou mulher, e do homem que se deita com mulher imunda.`,

            // O DESAFIO
            pergunta: {
                texto: "O que acontecia com qualquer objeto ou cama em que uma pessoa com fluxo (enfermidade) se deitasse ou sentasse?",
                opcoes: [
                    { numero: 1, texto: "Deveria ser queimado imediatamente", correta: false },
                    { numero: 2, texto: "Tornava-se cerimonialmente imundo", correta: true },
                    { numero: 3, texto: "Deveria ser entregue aos levitas", correta: false },
                    { numero: 4, texto: "Ficava purificado pelo contato com o corpo", correta: false }
                ],
                explicacao: "Levítico 15:4 - A lei de pureza era extensiva: o estado de impureza de uma pessoa era transmitido aos objetos de uso pessoal, exigindo lavagem e tempo de espera.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 16 ---
        16: {
            titulo: "O Dia da Expiação (Yom Kippur)",
            subtitulo: "O ritual do Santíssimo, os bodes e o estatuto perpétuo",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E falou o SENHOR a Moisés, depois da morte dos dois filhos de Arão, que morreram quando se chegaram diante do SENHOR.
² Disse, pois, o SENHOR a Moisés: Dize a Arão, teu irmão, que não entre em todo o tempo no santuário, para dentro do véu, diante do propiciatório que está sobre a arca, para que não morra; porque eu aparecerei na nuvem sobre o propiciatório.
³ Com isto entrará Arão no santuário: com um novilho para expiação do pecado e um carneiro para holocausto.
⁴ Vestirá ele a túnica santa de linho, e terá calções de linho sobre a sua carne, e cingir-se-á com um cinto de linho, e cobrir-se-á com uma mitra de linho; estas são vestes santas; por isso, banhará a sua carne na água e as vestirá.
⁵ E da congregação dos filhos de Israel tomará dois bodes para expiação do pecado e um carneiro para holocausto.
⁶ E Arão oferecerá o novilho da expiação, que será para ele, e fará expiação por si e pela sua casa.
⁷ Também tomará ambos os bodes e os porá perante o SENHOR, à porta da tenda da congregação.
⁸ E Arão lançará sortes sobre os dois bodes: uma sorte pelo SENHOR e a outra sorte pelo bode emissário.
⁹ Então, Arão fará chegar o bode sobre o qual cair a sorte pelo SENHOR e o oferecerá para expiação do pecado.
¹⁰ Mas o bode sobre que cair a sorte para bode emissário apresentar-se-á vivo perante o SENHOR, para fazer expiação com ele, a fim de enviá-lo ao deserto como bode emissário.
¹¹ E Arão fará chegar o novilho da expiação, que será por si, e fará expiação por si e pela sua casa; e degolará o novilho da expiação que é por si mesmo.
¹² Tomará também o incensário cheio de brasas de fogo do altar, de diante do SENHOR, e os seus punhos cheios de incenso aromático moído e o levará para dentro do véu.
¹³ E porá o incenso sobre o fogo perante o SENHOR, e a nuvem do incenso cobrirá o propiciatório, que está sobre o Testemunho, para que não morra.
¹⁴ E tomará do sangue do novilho e, com o seu dedo, espargirá sobre a face do propiciatório, para a banda do oriente; e perante o propiciatório espargirá sete vezes do sangue com o seu dedo.
¹⁵ Depois, degolará o bode da expiação, que será pelo povo, e levará o seu sangue para dentro do véu; e fará com o seu sangue como fez com o sangue do novilho, e o espargirá sobre o propiciatório e perante a face do propiciatório.
¹⁶ Assim, fará expiação pelo santuário por causa das imundícias dos filhos de Israel e das suas transgressões, segundo todos os seus pecados; e assim fará pela tenda da congregação que reside com eles no meio das suas imundícias.
¹¹⁷ E nenhum homem estará na tenda da congregação quando ele entrar para fazer expiação no santuário, até que ele saia, depois de ter feito expiação por si, e pela sua casa, e por toda a congregação de Israel.
¹⁸ Então, sairá ao altar, que está perante o SENHOR, e fará expiação por ele; e tomará do sangue do novilho e do sangue do bode e o porá sobre as pontas do altar em redor.
¹⁹ E daquele sangue espargirá sobre ele com o seu dedo sete vezes, e o purificará, e o santificará das imundícias dos filhos de Israel.
²⁰ Havendo, pois, acabado de fazer expiação pelo santuário, e pela tenda da congregação, e pelo altar, então, fará chegar o bode vivo.
²¹ E Arão porá ambas as mãos sobre a cabeça do bode vivo e sobre ele confessará todas as iniquidades dos filhos de Israel e todas as suas transgressões, segundo todos os seus pecados; e os porá sobre a cabeça do bode e enviá-lo-á ao deserto, pela mão de um homem aparelhado para isso.
²² Assim, aquele bode levará sobre si todas as iniquidades deles à terra solitária; e enviará o bode ao deserto.
²³ Depois, Arão virá à tenda da congregação, e despirá as vestes de linho, que havia vestido quando entrara no santuário, e ali as deixará.
²⁴ E banhará a sua carne em água no lugar santo e vestirá as suas vestes; então, sairá e oferecerá o seu holocausto e o holocausto do povo, e fará expiação por si e pelo povo.
²⁵ Também queimará a gordura da expiação do pecado sobre o altar.
²⁶ E aquele que tiver levado o bode emissário lavará as suas vestes, e banhará a sua carne em água, e depois entrará no arraial.
²⁷ Mas o novilho da expiação e o bode da expiação, cujo sangue foi trazido para fazer expiação no santuário, levar-se-ão fora do arraial; e as suas peles, a sua carne e o seu esterco queimar-se-ão com fogo.
²⁸ E o que os queimar lavará as suas vestes, e banhará a sua carne em água, e depois entrará no arraial.
²⁹ E isto vos será por estatuto perpétuo: no sétimo mês, aos dez do mês, afligireis as vossas almas e nenhum trabalho fareis, nem o natural nem o estrangeiro que peregrina entre vós.
³⁰ Porque, naquele dia, se fará expiação por vós, para purificar-vos; e sereis purificados de todos os vossos pecados perante o SENHOR.
³¹ É um sábado de descanso para vós, e afligireis as vossas almas; isto é estatuto perpétuo.
³² E o sacerdote que for ungido, e que for consagrado para administrar o sacerdócio no lugar de seu pai, fará a expiação, havendo vestido as vestes de linho, as vestes santas.
³³ Assim, fará expiação pelo santo santuário; também fará expiação pela tenda da congregação e pelo altar; semelhante fará expiação pelos sacerdotes e por todo o povo da congregação.
³⁴ E isto vos será por estatuto perpétuo, para fazer expiação pelos filhos de Israel de todos os seus pecados, uma vez no ano. E fez Arão como o SENHOR ordenara a Moisés.`,

            // O DESAFIO
            pergunta: {
                texto: "No Dia da Expiação, o que Arão deveria fazer com os dois bodes apresentados à porta da tenda da congregação?",
                opcoes: [
                    { numero: 1, texto: "Sacrificar ambos como holocausto ao SENHOR", correta: false },
                    { numero: 2, texto: "Lançar sortes: um para o SENHOR e outro para o bode emissário (Azazel)", correta: true },
                    { numero: 3, texto: "Entregá-los como oferta de paz para o povo", correta: false },
                    { numero: 4, texto: "Queimar um no altar e soltar o outro no arraial", correta: false }
                ],
                explicacao: "Levítico 16:7-10 - O SENHOR ordenou o uso de sortes para distinguir o animal que seria sacrificado para expiação do pecado daquele que levaria as iniquidades de Israel para o deserto.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 17 ---
        17: {
            titulo: "O Lugar do Sacrifício e o Sangue",
            subtitulo: "A santidade do sangue e a centralidade do tabernáculo",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Falou mais o SENHOR a Moisés, dizendo:
² Fala a Arão, e a seus filhos, e a todos os filhos de Israel e dize-lhes: Esta é a palavra que o SENHOR ordenou, dizendo:
³ Qualquer homem da casa de Israel que degolar boi, ou cordeiro, ou cabra, no arraial, ou quem os degolar fora do arraial,
⁴ e os não trouxer à porta da tenda da congregação, para oferecer oferta ao SENHOR diante do tabernáculo do SENHOR, a tal homem será imputado o sangue; derramou sangue; pelo que tal homem será extirpado do seu povo;
⁵ para que os filhos de Israel, trazendo os seus sacrifícios, que oferecem sobre a face do campo, os tragam ao SENHOR, à porta da tenda da congregação, ao sacerdote, e os sacrifiquem por sacrifícios pacíficos ao SENHOR.
⁶ E o sacerdote espargirá o sangue sobre o altar do SENHOR, à porta da tenda da congregação, e queimará a gordura por cheiro suave ao SENHOR.
⁷ E nunca mais sacrificarão os seus sacrifícios aos demônios, após os quais eles se corrompem; isto ser-lhes-á por estatuto perpétuo nas suas gerações.
⁸ Dir-lhes-ás, pois: Qualquer homem da casa de Israel ou dos estrangeiros que peregrinam entre vós que oferecer holocausto ou sacrifício,
⁹ e o não trouxer à porta da tenda da congregação, para o oferecer ao SENHOR, o tal homem será extirpado dos seus povos.
¹⁰ E qualquer homem da casa de Israel ou dos estrangeiros que peregrinam entre vós que comer algum sangue, contra aquela alma que comer sangue eu porei a minha face e a extirparei do seu povo.
¹¹ Porque a alma da carne na sangue está, pelo que vo-lo tenho dado sobre o altar, para fazer expiação pelas vossas almas; porquanto é o sangue que fará expiação pela alma.
¹² Portanto, tenho dito aos filhos de Israel: Nenhuma alma de vós comerá sangue, nem o estrangeiro que peregrina entre vós comerá sangue.
¹³ Também qualquer homem dos filhos de Israel ou dos estrangeiros que peregrinam entre vós que caçar animal ou ave que se come derramará o seu sangue e o cobrirá com pó.
¹⁴ Porquanto a alma de toda a carne é o seu sangue; por isso, tenho dito aos filhos de Israel: Não comereis o sangue de nenhuma carne, porque a alma de toda a carne é o seu sangue; qualquer que o comer será extirpado.
¹⁵ E toda alma entre os naturais ou entre os estrangeiros que comer corpo morto ou despedaçado lavará as suas vestes, e se lavará com água, e será imunda até à tarde; depois, será limpa.
¹⁶ Mas, se as não lavar, nem banhar a sua carne, levará a sua iniquidade.`,

            // O DESAFIO
            pergunta: {
                texto: "Qual é a razão específica dada pelo SENHOR para a proibição absoluta de comer o sangue de qualquer carne?",
                opcoes: [
                    { numero: 1, texto: "Porque o sangue é impuro por natureza", correta: false },
                    { numero: 2, texto: "Porque a vida da carne está no sangue", correta: true },
                    { numero: 3, texto: "Porque o sangue atrai animais selvagens", correta: false },
                    { numero: 4, texto: "Porque o sangue pertence apenas aos sacerdotes", correta: false }
                ],
                explicacao: "Levítico 17:11 - O SENHOR declarou que a vida está no sangue e que Ele o deu sobre o altar para fazer expiação pelas almas; por isso, seu uso era estritamente sagrado.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 18 ---
        18: {
            titulo: "As Leis de Moralidade e Sexualidade",
            subtitulo: "A santidade nos relacionamentos e a proibição dos costumes egípcios e cananeus",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Falou mais o SENHOR a Moisés, dizendo:
² Fala aos filhos de Israel e dize-lhes: Eu sou o SENHOR, vosso Deus.
³ Não fareis segundo as obras da terra do Egito, em que habitastes, nem fareis segundo as obras da terra de Canaã, para onde vos levo, nem andareis nos seus estatutos.
⁴ Fareis conforme os meus juízos e os meus estatutos guardareis, para andardes neles. Eu sou o SENHOR, vosso Deus.
⁵ Portanto, os meus estatutos e os meus juízos guardareis; os quais, fazendo-os o homem, viverá neles. Eu sou o SENHOR.
⁶ Nenhum homem se chegará a qualquer parenta da sua carne, para descobrir a sua nudez. Eu sou o SENHOR.
⁷ Não descobrirás a nudez de teu pai e nudez de tua mãe; ela é tua mãe; não descobrirás a sua nudez.
⁸ Não descobrirás a nudez da mulher de teu pai; é nudez de teu pai.
⁹ A nudez da tua irmã, filha de teu pai ou filha de tua mãe, nascida em casa ou nascida fora, a sua nudez não descobrirás.
¹⁰ A nudez da filha do teu filho ou da filha da tua filha, a sua nudez não descobrirás; porque é tua nudez.
¹¹ A nudez da filha da mulher de teu pai, gerada de teu pai (ela é tua irmã), a sua nudez não descobrirás.
¹² A nudez da irmã de teu pai não descobrirás; ela é parenta de teu pai.
¹³ A nudez da irmã de tua mãe não descobrirás; pois ela é parenta de tua mãe.
¹⁴ A nudez do irmão de teu pai não descobrirás; não te chegarás à sua mulher; ela é tua tia.
¹⁵ A nudez de tua nora não descobrirás; ela é mulher de teu filho; não descobrirás a sua nudez.
¹⁶ A nudez da mulher de teu irmão não descobrirás; é a nudez de teu irmão.
¹¹⁷ A nudez de uma mulher e de sua filha não descobrirás; não tomarás a filha de seu filho, nem a filha de sua filha, para descobrir a sua nudez; parentas são; maldade é.
¹⁸ E não tomarás uma mulher com sua irmã, para fazê-la sua rival, descobrindo a sua nudez diante dela em sua vida.
¹¹⁹ E não te chegarás à mulher, para descobrir a sua nudez, enquanto estiver na separação da sua imundícia.
²⁰ Nem te deitarás com a mulher de teu próximo, para te contaminares com ela.
²¹ E da tua semente não darás para fazer passar pelo fogo perante Moleque; e não profanarás o nome de teu Deus. Eu sou o SENHOR.
²² Com varão se não deitará, como se fosse mulher; abominação é.
²³ Nem te deitarás com algum animal, para te contaminares com ele; nem a mulher se porá perante um animal, para ajuntar-se com ele; confusão é.
²⁴ Com nenhuma destas coisas vos contamineis, porque com todas estas coisas se contaminaram as nações que eu lanço fora de diante de vós.
²⁵ Pelo que a terra está contaminada; e eu visitei a sua iniquidade, e a terra vomitou os seus moradores.
²⁶ Porém vós guardareis os meus estatutos e os meus juízos, e nenhuma destas abominações fareis, nem o natural, nem o estrangeiro que peregrina entre vós;
²⁷ porque todas estas abominações fizeram os homens desta terra, que nela estavam antes de vós; e a terra foi contaminada.
²⁸ Para que a terra vos não vomite também, contaminando-a vós, como vomitou a nação que nela estava antes de vós.
²⁹ Porque qualquer que fizer alguma destas abominações, as almas que as fizerem serão extirpadas do seu povo.
³⁰ Guardai, pois, o meu mandamento, não fazendo nenhum dos costumes abomináveis que se fizeram antes de vós, e não vos contamineis com eles. Eu sou o SENHOR, vosso Deus.`,

            // O DESAFIO
            pergunta: {
                texto: "Ao estabelecer as leis sobre relacionamentos e conduta sexual, qual foi o motivo principal dado pelo SENHOR para que Israel não seguisse os costumes das terras do Egito e de Canaã?",
                opcoes: [
                    { numero: 1, texto: "Porque essas terras eram pobres e inférteis", correta: false },
                    { numero: 2, texto: "Eu sou o SENHOR, vosso Deus", correta: true },
                    { numero: 3, texto: "Para que o povo pudesse conquistar outras nações", correta: false },
                    { numero: 4, texto: "Porque os egípcios eram inimigos declarados", correta: false }
                ],
                explicacao: "Levítico 18:2-5 - A identidade de Israel como povo santo baseava-se na natureza de Deus. O cumprimento dos estatutos era o que os diferenciava das abominações praticadas pelos povos vizinhos.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 19 ---
        19: {
            titulo: "Leis de Santidade e Justiça",
            subtitulo: "O imperativo de ser santo e o amor ao próximo",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Falou mais o SENHOR a Moisés, dizendo:
² Fala a toda a congregação dos filhos de Israel e dize-lhes: Santos sereis, porque eu, o SENHOR, vosso Deus, sou santo.
³ Cada um temerá a sua mãe e a seu pai e guardará os meus sábados. Eu sou o SENHOR, vosso Deus.
⁴ Não vos virareis para os ídolos, nem fareis para vós deuses de fundição. Eu sou o SENHOR, vosso Deus.
⁵ E, quando sacrificardes sacrifício pacífico ao SENHOR, da vossa própria vontade o sacrificareis.
⁶ No dia em que o sacrificardes e no dia seguinte, se comerá; mas o que sobejar até ao terceiro dia será queimado com fogo.
⁷ E, se alguma coisa dele se comer ao terceiro dia, coisa abominável é; não será aceito.
⁸ E qualquer que o comer levará a sua iniquidade, porquanto profanou a santidade do SENHOR; pelo que a tal alma será extirpada dos seus povos.
⁹ Quando também seifardes a seifa da vossa terra, o canto do teu campo não segarás totalmente, nem as espigas caídas da tua seifa colherás.
¹⁰ Semelhantemente não rabiscarás a tua vinha, nem colherás os bagos caídos da tua vinha; deixá-los-ás ao pobre e ao estrangeiro. Eu sou o SENHOR, vosso Deus.
¹¹ Não furtareis, nem mentireis, nem usareis de falsidade cada um com o seu próximo;
¹² nem jurareis falso pelo meu nome, pois profanaríeis o nome do vosso Deus. Eu sou o SENHOR.
¹³ Não oprimirás o teu próximo, nem o roubarás; a paga do jornaleiro não ficará contigo até à manhã.
¹⁴ Não amaldiçoarás o surdo, nem porrás tropeço diante do cego; mas terás temor do teu Deus. Eu sou o SENHOR.
¹⁵ Não fareis injustiça no juízo; não aceitarás a pessoa do pobre, nem respeitarás o rosto do potente; com justiça julgarás o teu próximo.
¹⁶ Não andarás como mexeriqueiro entre o teu povo; não te porás contra o sangue do teu próximo. Eu sou o SENHOR.
¹⁷ Não aborrecerás a teu irmão no teu coração; não deixarás de repreender o teu próximo e por causa dele não levarás pecado.
¹⁸ Não te vingarás, nem guardarás ira contra os filhos do teu povo; mas amarás o teu próximo como a ti mesmo. Eu sou o SENHOR.
¹⁹ Guardareis os meus estatutos; não permitirás que se ajuntem gados de espécies diferentes; no teu campo, não semearás semente diversa; nem veste de diversos estofos, misturados, virá sobre ti.
²⁰ E, quando um homem se deitar com uma mulher que for serva desposada com outro homem, e não for resgatada, nem se lhe houver dado liberdade, então, serão açoitados; não morrerão, pois não era livre.
²¹ E, por expiação da sua culpa, trará ao SENHOR, à porta da tenda da congregação, um carneiro.
²² E, com o carneiro da expiação da culpa, o sacerdote fará expiação por ele perante o SENHOR, pelo seu pecado que pecou; e o seu pecado, que pecou, lhe será perdoado.
²³ E, quando tiverdes entrado na terra e plantardes toda sorte de árvore de comer, ser-vos-á incircunciso o seu fruto; três anos vos será incircunciso; dele não se comerá.
²⁴ Porém, no quarto ano, todo o seu fruto será santo, para dar louvores ao SENHOR.
²⁵ E, no quinto ano, comereis o seu fruto, para que vos faça crescer a sua novidade. Eu sou o SENHOR, vosso Deus.
²⁶ Não comereis coisa alguma com sangue; não agourareis, nem adivinhareis.
²⁷ Não cortareis o cabelo em redondo, nem danificareis a ponta da barba.
²⁸ Pelos mortos não dareis golpes na vossa carne; nem fareis marca alguma sobre vós. Eu sou o SENHOR.
²⁹ Não contaminarás a tua filha, fazendo-a prostituir-se; para que a terra não se prostitua, nem se encha de maldade.
³⁰ Guardareis os meus sábados e o meu santuário reverenciareis. Eu sou o SENHOR.
³¹ Não vos virareis para os adivinhadores e encantadores; não os busqueis, contaminando-vos com eles. Eu sou o SENHOR, vosso Deus.
³² Diante das cãs te levantarás, e honrarás a face do ancião, e terás temor do teu Deus. Eu sou o SENHOR.
³³ E, quando o estrangeiro peregrinar contigo na vossa terra, não o oprimireis.
³⁴ Como um natural entre vós será o estrangeiro que peregrina convosco; amá-lo-ás como a ti mesmo, pois estrangeiros fostes na terra do Egito. Eu sou o SENHOR, vosso Deus.
³⁵ Não fareis injustiça no juízo, nem na medida, nem no peso, nem na craveira.
³⁶ Balanças justas, pesos justos, efa justo e him justo tereis. Eu sou o SENHOR, vosso Deus, que vos tirei da terra do Egito.
³⁷ Guardareis, pois, todos os meus estatutos e todos os meus juízos e os fareis. Eu sou o SENHOR.`,

            // O DESAFIO
            pergunta: {
                texto: "Ao tratar das colheitas da terra, qual era a ordem do SENHOR para garantir o sustento dos pobres e dos estrangeiros?",
                opcoes: [
                    { numero: 1, texto: "Vender toda a colheita e distribuir o dinheiro", correta: false },
                    { numero: 2, texto: "Não colher totalmente os cantos do campo nem buscar os frutos caídos", correta: true },
                    { numero: 3, texto: "Entregar a décima parte da colheita aos levitas", correta: false },
                    { numero: 4, texto: "Trabalhar apenas seis horas por dia no campo", correta: false }
                ],
                explicacao: "Levítico 19:9-10 - A lei do rebusco era uma forma de assistência social divina: o que sobrava nos cantos ou caía ao chão pertencia por direito ao necessitado.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 20 ---
        20: {
            titulo: "Castigos para as Abominações",
            subtitulo: "A santidade do povo e as penalidades por desobediência moral",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `

¹ Falou mais o SENHOR a Moisés, dizendo:
² Também dirás aos filhos de Israel: Qualquer dos filhos de Israel, ou dos estrangeiros que peregrinam em Israel, que der da sua semente a Moleque, certamente morrerá; o povo da terra o apedrejará.
³ E eu porei a minha face contra esse homem e o extirparei do meio do seu povo, porquanto deu da sua semente a Moleque, para contaminar o meu santuário e profanar o meu santo nome.
⁴ E, se o povo da terra de alguma maneira esconder os olhos daquele homem, quando der da sua semente a Moleque, para não matarem,
⁵ então, eu porei a minha face contra aquele homem e contra a sua família e o extirparei do meio do seu povo, com todos os que se prostituem após ele, prostituindo-se após Moleque.
⁶ Quando uma alma se virar para os adivinhadores e encantadores, para se prostituir após eles, eu porei a minha face contra aquela alma e a extirparei do meio do seu povo.
⁷ Portanto, santificai-vos e sede santos, pois eu sou o SENHOR, vosso Deus.
⁸ E guardai os meus estatutos e cumpri-los. Eu sou o SENHOR que vos santifico.
⁹ Quando um homem amaldiçoar a seu pai ou a sua mãe, certamente morrerá; amaldiçoou a seu pai ou a sua mãe; o seu sangue é sobre ele.
¹⁰ Também o homem que adulterar com a mulher de outro, havendo adulterado com a mulher do seu próximo, certamente morrerá o adúltero e a adúltera.
¹¹ E o homem que se deitar com a mulher de seu pai descobriu a nudez de seu pai; ambos certamente morrerão; o seu sangue é sobre eles.
¹² Semelhantemente, quando um homem se deitar com a sua nora, ambos certamente morrerão; fizeram confusão; o seu sangue é sobre eles.
¹³ Quando também um homem se deitar com outro homem, como com mulher, ambos fizeram abominação; certamente morrerão; o seu sangue é sobre eles.
¹⁴ E, quando um homem tomar uma mulher e a sua mãe, maldade é; a ele e a elas queimarão com fogo, para que não haja maldade no meio de vós.
¹⁵ Quando também um homem se deitar com um animal, certamente morrerá; e matareis o animal.
¹⁶ Também a mulher que se chegar a algum animal, para ter ajuntamento com ele, matarás a mulher e o animal; certamente morrerão; o seu sangue é sobre eles.
¹¹⁷ E, quando um homem tomar a sua irmã, filha de seu pai ou filha de sua mãe, e ele vir a nudez dela, e ela vir a dele, torpeza é; portanto, serão extirpados aos olhos dos filhos do seu povo; descobriu a nudez de sua irmã; levarão a sua iniquidade.
¹⁸ E, quando um homem se deitar com uma mulher no tempo da sua enfermidade e descobrir a sua nudez, descobriu o seu fluxo, e ela descobriu o fluxo do seu sangue; ambos serão extirpados do meio do seu povo.
¹⁹ Também a nudez da irmã de tua mãe ou da irmã de teu pai não descobrirás; porquanto descobriu a sua parenta, levarão a sua iniquidade.
²⁰ Quando também um homem se deitar com a sua tia, descobriu a nudez de seu tio; seu pecado levarão; sem filhos morrerão.
²¹ E, quando um homem tomar a mulher de seu irmão, imundícia é; a nudez de seu irmão descobriu; sem filhos ficarão.
²² Guardai, pois, todos os meus estatutos e todos os meus juízos e cumpri-os, para que vos não vomite a terra, para onde vos levo para habitar nela.
²³ E não andeis nos estatutos das nações que eu lanço fora de diante de vós, porque fizeram todas estas coisas; portanto, me aborreci deles.
²⁴ E a vós vos tenho dito: Em posse herdareis a sua terra, e eu a darei a vós para herdá-la, terra que mana leite e mel. Eu sou o SENHOR, vosso Deus, que vos separei dos povos.
²⁵ Fareis, pois, diferença entre os animais limpos e os imundos e entre as aves imundas e as limpas; e as vossas almas não fareis abomináveis por causa dos animais, ou das aves, ou de tudo o que se arrasta sobre a terra, as quais coisas apartei de vós, para as terdes por imundas.
²⁶ E sereis para mim santos, porque eu, o SENHOR, sou santo e separei-vos dos povos, para serdes meus.
²⁷ Quando, pois, algum homem ou mulher em si tiver um espírito adivinhador ou for encantador, certamente morrerão; com pedras os apedrejarão; o seu sangue é sobre eles.`,

            // O DESAFIO
            pergunta: {
                texto: "Qual era a sentença estabelecida para qualquer israelita ou estrangeiro que oferecesse seus filhos ao deus Moloque?",
                opcoes: [
                    { numero: 1, texto: "Seria expulso do arraial para sempre", correta: false },
                    { numero: 2, texto: "Seria morto por apedrejamento pelo povo da terra", correta: true },
                    { numero: 3, texto: "Deveria oferecer sete novilhos como multa", correta: false },
                    { numero: 4, texto: "Teria que servir aos sacerdotes por toda a vida", correta: false }
                ],
                explicacao: "Levítico 20:2 - A adoração a Moloque, que envolvia sacrifícios infantis, era considerada uma profanação extrema do nome de Deus e punida com a morte direta pela comunidade.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 21 ---
        21: {
            titulo: "A Santidade dos Sacerdote",
            subtitulo: "Regras para o luto, casamento e integridade física dos ministros",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Depois, disse o SENHOR a Moisés: Fala aos sacerdotes, filhos de Arão, e dize-lhes: O sacerdote não se contaminará por causa de um morto entre o seu povo,
² salvo por seu parente mais chegado: por sua mãe, e por seu pai, e por seu filho, e por sua filha, e por seu irmão.
³ E por sua irmã virgem, chegada a ele, que ainda não teve marido, por ela também se contaminará.
⁴ Ele, sendo principal entre o seu povo, não se contaminará, para se profanar.
⁵ Não farão calva na sua cabeça e não raparão os cantos da sua barba, nem farão golpes na sua carne.
⁶ Santos serão a seu Deus e não profanarão o nome do seu Deus, porque oferecem as ofertas queimadas do SENHOR, o pão do seu Deus; portanto, serão santos.
⁷ Não tomarão mulher prostituta ou desonrada, nem tomarão mulher repelida de seu marido, pois santo é a seu Deus.
⁸ Portanto, o santificarás, porquanto oferece o pão do teu Deus; santo será para ti, pois eu, o SENHOR que vos santifica, sou santo.
⁹ E, quando a filha de um sacerdote se profanar, prostituindo-se, profana a seu pai; com fogo será queimada.
¹⁰ E o sumo sacerdote entre seus irmãos, sobre cuja cabeça foi derramado o óleo da unção e que for consagrado para vestir as vestes santas, não descobrirá a sua cabeça, nem rasgará as suas vestes.
¹¹ E não se chegará a cadáver algum, nem por seu pai, nem por sua mãe se contaminará.
¹² Nem sairá do santuário, para que não profane o santuário do seu Deus, pois a coroa do óleo da unção do seu Deus está sobre ele. Eu sou o SENHOR.
¹³ E ele tomará uma mulher na sua virgindade.
¹⁴ Viúva, ou repelida, ou desonrada, ou prostituta, estas não tomará; mas virgem do seu povo tomará por mulher.
¹⁵ E não profanará a sua semente entre o seu povo; porque eu sou o SENHOR que o santifica.
¹⁶ Falou mais o SENHOR a Moisés, dizendo:
¹⁷ Fala a Arão, dizendo: Ninguém da tua semente, nas suas gerações, em que houver algum defeito, se chegará a oferecer o pão do seu Deus.
¹⁸ Pois nenhum homem em que houver defeito se chegará: como homem cego, ou coxo, ou de nariz chato, ou de membros demasiadamente compridos,
¹⁹ ou homem que tiver o pé quebrado, ou a mão quebrada,
²⁰ ou corcovado, ou anão, ou que tiver belida no olho, ou sarna, ou impigens, ou que tiver testículo quebrado.
²¹ Nenhum homem da semente de Arão, o sacerdote, em que houver algum defeito, se chegará para oferecer as ofertas queimadas do SENHOR; defeito há nele; não se chegará para oferecer o pão do seu Deus.
²² O pão do seu Deus, das coisas santíssimas e das coisas santas, poderá comer.
²³ Porém até ao véu não entrará, nem se chegará ao altar, porquanto defeito há nele, para que não profane os meus santuários; porque eu sou o SENHOR que os santifico.
²⁴ E Moisés falou isto a Arão, e a seus filhos, e a todos os filhos de Israel.`,

            // O DESAFIO
            pergunta: {
                texto: "Quais eram as restrições impostas ao Sumo Sacerdote (aquele sobre cuja cabeça foi derramado o óleo da unção) em relação ao luto?",
                opcoes: [
                    { numero: 1, texto: "Deveria rasgar suas vestes por sete dias", correta: false },
                    { numero: 2, texto: "Não poderia descobrir a cabeça nem rasgar suas vestes, nem se aproximar de qualquer cadáver", correta: true },
                    { numero: 3, texto: "Poderia tocar apenas no corpo de seu pai ou mãe", correta: false },
                    { numero: 4, texto: "Deveria sair do santuário por trinta dias para purificação", correta: false }
                ],
                explicacao: "Levítico 21:10-12 - Por carregar a unção e a santidade do santuário, o Sumo Sacerdote tinha restrições de luto mais severas que os demais, não podendo profanar sua consagração nem pelo pai ou pela mãe.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 22 ---
        22: {
            titulo: "A Santidade das Coisas Sagradas",
            subtitulo: "Regras sobre quem pode comer as ofertas e a perfeição dos animais",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `

¹ Depois, falou o SENHOR a Moisés, dizendo:
² Fala a Arão e a seus filhos que se apartem das coisas santas dos filhos de Israel, que eles me santificam, para que não profanem o meu santo nome. Eu sou o SENHOR.
³ Dize-lhes: Qualquer que, entre as vossas gerações, de toda a vossa semente, se chegar às coisas santas que os filhos de Israel santificam ao SENHOR, tendo sobre si a sua imundícia, aquela alma será extirpada de diante da minha face. Eu sou o SENHOR.
⁴ Ninguém da semente de Arão que for leproso ou tiver fluxo comerá das coisas santas, até que seja limpo; como também o que tocar alguma coisa imunda por um morto ou o homem de que sair o sêmen da cópula;
⁵ ou qualquer que tocar algum réptil, pelo qual se faça imundo, ou algum homem, pelo qual se faça imundo, segundo toda a sua imundícia.
⁶ O homem que o tocar será imundo até à tarde e não comerá das coisas santas, mas banhará a sua carne em água.
⁷ E, posto o sol, então, será limpo e, depois, comerá das coisas santas, porque este é o seu pão.
⁸ O corpo morto e o que é despedaçado por feras não comerá, para se não contaminar com eles. Eu sou o SENHOR.
⁹ Guardarão, pois, o meu mandamento, para que por isso não levem pecado e morram nele, havendo-o profanado. Eu sou o SENHOR que os santifico.
¹⁰ Também nenhum estranho comerá das coisas santas; o hóspede do sacerdote, nem o seu jornaleiro comerão das coisas santas.
¹¹ Mas, quando o sacerdote comprar alguma alma com o seu dinheiro, esta comerá delas; e os que nascerem na sua casa, estes comerão do seu pão.
¹² E, quando a filha do sacerdote se casar com um homem estranho, ela não comerá da oferta alçada das coisas santas.
¹³ Mas, quando a filha do sacerdote for viúva ou repelida, e não tiver semente, e se houver tornado à casa de seu pai, como na sua mocidade, do pão de seu pai comerá; mas nenhum estranho comerá dele.
¹⁴ E, quando alguém, por erro, comer a coisa santa, sobre ela acrescentará a sua quinta parte e a dará ao sacerdote com a coisa santa.
¹⁵ Assim, não profanarão as coisas santas dos filhos de Israel, que oferecem ao SENHOR,
¹⁶ nem lhes farão levar a iniquidade da culpa, comendo as suas coisas santas; pois eu sou o SENHOR que as santifico.
¹¹⁷ Falou mais o SENHOR a Moisés, dizendo:
¹⁸ Fala a Arão, e a seus filhos, e a todos os filhos de Israel e dize-lhes: Qualquer que, da casa de Israel ou dos estrangeiros em Israel, oferecer a sua oferta, quer dos seus votos, quer das suas ofertas voluntárias, que oferecerem ao SENHOR em holocausto,
¹⁹ para que seja aceito, será macho sem mancha, de bois, ou de cordeiros, ou de cabras.
²⁰ Nenhuma coisa em que houver defeito oferecereis, porque não seria aceita a vosso favor.
²¹ E, quando alguém oferecer sacrifício pacífico ao SENHOR, separando um voto ou oferta voluntária, de bois ou de gado miúdo, sem mancha será, para que seja aceito; nenhum defeito haverá nele.
²² O cego, ou quebrado, ou aleijado, ou que tiver pústulas, ou sarna, ou impigens, estes não oferecereis ao SENHOR, nem deles poreis oferta queimada ao altar do SENHOR.
²³ Mas boi ou gado miúdo, com membros demasiadamente compridos ou curtos, poderás oferecer por oferta voluntária, mas por voto não será aceito.
²⁴ O que tiver testículos machucados, ou moídos, ou despedaçados, ou cortados, não oferecereis ao SENHOR; nem na vossa terra o fareis.
²⁵ Nem da mão do estrangeiro oferecereis o pão do vosso Deus, de todas estas coisas; porque a sua corrupção está nelas; defeito há nelas; não serão aceitas a vosso favor.
²⁶ Falou mais o SENHOR a Moisés, dizendo:
²⁷ Quando nascer boi, ou cordeiro, ou cabra, sete dias estará debaixo de sua mãe; e, desde o oitavo dia em diante, será aceito por oferta queimada ao SENHOR.
²⁸ Também boi ou gado miúdo não degolareis, a ele e a seu filho, num mesmo dia.
²⁹ E, quando oferecerdes sacrifício de louvores ao SENHOR, de vossa própria vontade o oferecereis.
³⁰ No mesmo dia se comerá; nada deixareis ficar até à manhã. Eu sou o SENHOR.
³¹ Pelo que guardareis os meus mandamentos e os cumprireis. Eu sou o SENHOR.
³² E não profanareis o meu santo nome, para que eu seja santificado no meio dos filhos de Israel. Eu sou o SENHOR que vos santifico,
³³ que vos tirei da terra do Egito, para vos ser por Deus. Eu sou o SENHOR.`,

            // O DESAFIO
            pergunta: {
                texto: "Se um estrangeiro ou um hóspede do sacerdote desejasse comer das ofertas sagradas, qual era a regra estabelecida pelo SENHOR?",
                opcoes: [
                    { numero: 1, texto: "Poderiam comer desde que lavassem as mãos", correta: false },
                    { numero: 2, texto: "Nenhum estrangeiro ou hóspede poderia comer delas", correta: true },
                    { numero: 3, texto: "Poderiam comer apenas as sobras do altar", correta: false },
                    { numero: 4, texto: "Poderiam comer se pagassem o valor da oferta", correta: false }
                ],
                explicacao: "Levítico 22:10 - As ofertas sagradas eram reservadas exclusivamente à família sacerdotal; estrangeiros, hóspedes ou servos assalariados não tinham permissão para consumi-las.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 23 ---
        23: {
            titulo: "As Festas Solenes do SENHOR",
            subtitulo: "O calendário sagrado: Sábado, Páscoa, Pentecostes, Trombetas, Expiação e Tabernáculos",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Depois, falou o SENHOR a Moisés, dizendo:
² Fala aos filhos de Israel e dize-lhes: As festas fixas do SENHOR, que proclamareis, serão santas convocações; estas são as minhas festas:
³ Seis dias se trabalhará, mas o sétimo dia será o sábado do descanso, santa convocação; nenhum trabalho fareis; sábado do SENHOR é em todas as vossas habitações.
⁴ Estas são as festas fixas do SENHOR, as santas convocações, que proclamareis no seu tempo determinado:
⁵ No mês primeiro, aos catorze do mês, pela tarde, é a Páscoa do SENHOR.
⁶ E aos quinze dias deste mês é a Festa dos Pães Asmos do SENHOR; sete dias comereis pães asmos.
⁷ No primeiro dia, tereis santa convocação; nenhum trabalho servil fareis;
⁸ mas sete dias oferecereis oferta queimada ao SENHOR; ao sétimo dia, haverá santa convocação; nenhum trabalho servil fareis.
⁹ E falou o SENHOR a Moisés, dizendo:
¹⁰ Fala aos filhos de Israel e dize-lhes: Quando houverdes entrado na terra, que vos hei de dar, e fizerdes a sua colheita, então, trareis um molho das primícias da vossa seifa ao sacerdote;
¹¹ e ele moverá o molho perante o SENHOR, para que sejais aceitos; ao dia seguinte do sábado, o sacerdote o moverá.
¹² E, no dia em que moverdes o molho, preparareis um cordeiro sem defeito, de um ano, para holocausto ao SENHOR.
¹³ E a sua oferta de alimentos será de duas décimas de flor de farinha, amassada com azeite, para oferta queimada em cheiro suave ao SENHOR, e a sua libação de vinho, a quarta parte de um him.
¹⁴ E não comereis pão, nem trigo torrado, nem espigas verdes, até àquele mesmo dia em que trouxerdes a oferta do vosso Deus; estatuto perpétuo é pelas vossas gerações, em todas as vossas habitações.
¹⁵ Depois, para vós contareis desde o dia seguinte ao sábado, desde o dia em que trouxerdes o molho da oferta de movimento; sete semanas inteiras serão.
¹⁶ Até ao dia seguinte ao sétimo sábado, contareis cinquenta dias; então, oferecereis nova oferta de alimentos ao SENHOR.
¹⁷ Das vossas habitações trareis dois pães de movimento; de duas décimas de flor de farinha serão, levedados se cozerão; primícias são ao SENHOR.
¹⁸ Também com o pão oferecereis sete cordeiros de um ano, sem defeito, e um novilho, e dois carneiros; holocausto serão ao SENHOR, com a sua oferta de alimentos e as suas libações, por oferta queimada de cheiro suave ao SENHOR.
¹⁹ Também oferecereis um bode para expiação do pecado e dois cordeiros de um ano para sacrifício pacífico.
²⁰ Então, o sacerdote os moverá com o pão das primícias por oferta de movimento perante o SENHOR, com os dois cordeiros; santos serão ao SENHOR para o sacerdote.
²¹ E, naquele mesmo dia, apregoareis que tereis santa convocação; nenhum trabalho servil fareis; estatuto perpétuo é em todas as vossas habitações, pelas vossas gerações.
²² E, quando seifardes a seifa da vossa terra, não acabarás de segar o canto do teu campo, nem colherás o que ficar da tua seifa; para o pobre e para o estrangeiro os deixarás. Eu sou o SENHOR, vosso Deus.
²³ E falou o SENHOR a Moisés, dizendo:
²⁴ Fala aos filhos de Israel, dizendo: No mês sétimo, ao primeiro do mês, tereis descanso, memorial de sonido de trombetas, santa convocação.
²⁵ Nenhum trabalho servil fareis, mas oferecereis oferta queimada ao SENHOR.
²⁶ Falou mais o SENHOR a Moisés, dizendo:
²⁷ Mas, aos dez deste mês sétimo, será o Dia da Expiação; tereis santa convocação e afligireis as vossas almas; e oferecereis oferta queimada ao SENHOR.
²⁸ E, naquele mesmo dia, nenhum trabalho fareis, porque é o Dia da Expiação, para fazer expiação por vós perante o SENHOR, vosso Deus.
²⁹ Porque toda alma que, naquele mesmo dia, se não afligir será extirpada dos seus povos.
³⁰ Também toda alma que, naquele mesmo dia, fizer algum trabalho, eu a tal alma destruirei do meio do seu povo.
³¹ Nenhum trabalho fareis; estatuto perpétuo é pelas vossas gerações em todas as vossas habitações.
³² Sábado de descanso vos será; então, afligireis as vossas almas; aos nove do mês, à tarde, duma tarde a outra tarde, celebrareis o vosso sábado.
³³ E falou o SENHOR a Moisés, dizendo:
³⁴ Fala aos filhos de Israel, dizendo: Aos quinze dias deste mês sétimo, será a Festa dos Tabernáculos ao SENHOR, por sete dias.
³⁵ Ao primeiro dia, haverá santa convocação; nenhum trabalho servil fareis.
³⁶ Sete dias oferecereis ofertas queimadas ao SENHOR; ao oitavo dia, tereis santa convocação e oferecereis ofertas queimadas ao SENHOR; dia de proibição é; nenhum trabalho servil fareis.
³⁷ Estas são as festas fixas do SENHOR, que apregoareis para santas convocações, para oferecer ao SENHOR oferta queimada, holocausto e oferta de alimentos, sacrifício e libações, cada qual em seu dia próprio;
³⁸ além dos sábados do SENHOR, e além das vossas dádivas, e além de todos os vossos votos, e além de todas as vossas ofertas voluntárias que dareis ao SENHOR.
³⁹ Porém, aos quinze dias do mês sétimo, quando houverdes colhido o fruto da terra, celebrareis a festa do SENHOR, por sete dias; ao primeiro dia, haverá descanso, e, ao oitavo dia, haverá descanso.
⁴⁰ E, no primeiro dia, tomareis para vós ramos de formosas árvores, palmas de palmeiras, ramos de árvores espessas e salgueiros de ribeiras; e vos alegrareis perante o SENHOR, vosso Deus, por sete dias.
⁴¹ E celebrareis esta festa ao SENHOR por sete dias cada ano; estatuto perpétuo é pelas vossas gerações; no mês sétimo a celebrareis.
⁴² Em tendas habitareis por sete dias; todos os naturais em Israel habitarão em tendas;
⁴³ para que saibam as vossas gerações que eu fiz habitar os filhos de Israel em tendas, quando os tirei da terra do Egito. Eu sou o SENHOR, vosso Deus.
⁴⁴ Assim, pronunciou Moisés as festas fixas do SENHOR aos filhos de Israel.`,

            // O DESAFIO
            pergunta: {
                texto: "Durante a Festa dos Tabernáculos (Cabanas), por quantos dias o povo de Israel deveria habitar em tendas feitas de ramos de boas árvores?",
                opcoes: [
                    { numero: 1, texto: "Por apenas um dia de descanso", correta: false },
                    { numero: 2, texto: "Por sete dias", correta: true },
                    { numero: 3, texto: "Por quarenta dias e noites", correta: false },
                    { numero: 4, texto: "Durante todo o mês do outono", correta: false }
                ],
                explicacao: "Levítico 23:40-42 - A celebração durava sete dias, servindo de lembrança para as gerações futuras de que o SENHOR fez Israel habitar em tendas ao saírem do Egito.",
                pontosGanhos: 20
            }
        },

        // --- INÍCIO DO CAPÍTULO 24 ---
        24: {
            titulo: "O Azeite, os Pães e a Lei de Talião",
            subtitulo: "A lâmpada contínua, os pães da proposição e a justiça divina",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E falou o SENHOR a Moisés, dizendo:
² Ordena aos filhos de Israel que te tragam azeite de oliveira, puro, batido, para a luminária, para acender as lâmpadas continuamente.
³ Fora do véu do Testemunho, na tenda da congregação, Arão as porá em ordem, desde a tarde até à manhã, perante o SENHOR continuamente; estatuto perpétuo é pelas vossas gerações.
⁴ Sobre o candelabro puro porá em ordem as lâmpadas perante o SENHOR continuamente.
⁵ Também tomarás flor de farinha e dela cozerás doze bolos; cada bolo será de duas décimas de efa.
⁶ E os porás em duas fileiras, seis em cada fileira, sobre a mesa pura, perante o SENHOR.
⁷ E sobre cada fileira porás incenso puro, para que seja, para o pão, por memorial; oferta queimada é ao SENHOR.
⁸ Em cada dia de sábado, isto se porá em ordem perante o SENHOR continuamente, da parte dos filhos de Israel, por concerto perpétuo.
⁹ E será de Arão e de seus filhos, os quais o comerão no lugar santo, porque coisa santíssima é para ele, das ofertas queimadas ao SENHOR, por estatuto perpétuo.
¹⁰ E saiu o filho de uma mulher israelita, o qual era filho de um homem egípcio, no meio dos filhos de Israel; e o filho da israelita e um homem israelita pelejaram no arraial.
¹¹ Então, o filho da mulher israelita blasfemou o nome do SENHOR e amaldiçoou, pelo que o trouxeram a Moisés; e o nome de sua mãe era Selomite, filha de Dibri, da tribo de Dã.
¹² E o puseram em guarda, até que se lhes declarasse a vontade do SENHOR.
¹³ E falou o SENHOR a Moisés, dizendo:
¹⁴ Leva o que tem amaldiçoado para fora do arraial; e todos os que o ouviram ponham as suas mãos sobre a sua cabeça; então, toda a congregação o apedrejará.
¹⁵ E aos filhos de Israel falarás, dizendo: Qualquer que amaldiçoar o seu Deus levará o seu pecado.
¹⁶ E aquele que blasfemar o nome do SENHOR certamente morrerá; toda a congregação certamente o apedrejará; assim o estrangeiro como o natural, blasfemando o nome do SENHOR, morrerá.
¹⁷ E quem ferir a algum homem de morte certamente morrerá.
¹⁸ Mas quem ferir um animal de morte o restituirá: vida por vida.
¹⁹ Quando também alguém causar defeito em seu próximo, como ele fez, assim lhe será feito:
²⁰ quebradura por quebradura, olho por olho, dente por dente; como ele deu o defeito a algum homem, assim se lhe dará a ele.
²¹ Quem, pois, ferir um animal de morte o restituirá; mas quem ferir um homem de morte morrerá.
²² Uma mesma lei tereis; assim será para o estrangeiro como para o natural; pois eu sou o SENHOR, vosso Deus.
²³ E falou Moisés aos filhos de Israel que levassem o que tinha amaldiçoado para fora do arraial e o apedrejassem com pedras; e fizeram os filhos de Israel como o SENHOR ordenara a Moisés.`,

            // O DESAFIO
            pergunta: {
                texto: "Quantos pães da proposição deveriam ser colocados sobre a mesa de ouro puro perante o SENHOR em cada sábado?",
                opcoes: [
                    { numero: 1, texto: "Sete pães, um para cada dia da semana", correta: false },
                    { numero: 2, texto: "Doze pães, dispostos em duas fileiras de seis", correta: true },
                    { numero: 3, texto: "Dez pães, representando os mandamentos", correta: false },
                    { numero: 4, texto: "Três pães, simbolizando a trindade", correta: false }
                ],
                explicacao: "Levítico 24:5-6 - Os doze pães representavam as doze tribos de Israel e eram renovados a cada sábado como um memorial perpétuo da aliança.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 25 ---
        25: {
            titulo: "O Ano Sabático e o Jubileu",
            subtitulo: "O descanso da terra e a redenção das propriedades",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E falou o SENHOR a Moisés, no monte Sinai, dizendo:
² Fala aos filhos de Israel e dize-lhes: Quando tiverdes entrado na terra que eu vos dou, a terra guardará um sábado ao SENHOR.
³ Seis anos semearás o teu campo, e seis anos podarás a tua vinha, e colherás a sua novidade.
⁴ Porém, ao sétimo ano, haverá sábado de descanso para a terra, um sábado ao SENHOR; não semearás o teu campo, nem podarás a tua vinha.
⁵ O que nascer de si mesmo da tua seifa não colherás e as uvas da tua vinha não vindimarás; ano de descanso será para a terra.
⁶ Mas os frutos do sábado da terra vos serão por alimento, a ti, e ao teu servo, e à tua serva, e ao teu jornaleiro, e ao estrangeiro que peregrina contigo;
⁷ e ao teu gado, e aos animais que estão na tua terra, toda a sua novidade será por alimento.
⁸ Também contarás sete sábados de anos, sete vezes sete anos, de maneira que os dias dos sete sábados de anos te serão quarenta e nove anos.
⁹ Então, no mês sétimo, aos dez do mês, farás passar a trombeta do jubileu; no Dia da Expiação, fareis passar a trombeta por toda a vossa terra.
¹⁰ E santificareis o ano quinquagésimo e apregoareis liberdade na terra a todos os seus moradores; jubileu vos será, e tornareis, cada um à sua possessão, e tornareis, cada um à sua família.
¹¹ O ano quinquagésimo vos será jubileu; não semeareis, nem colhereis o que nela nascer de si mesmo, nem nela vindimareis as uvas das vinhas não podadas.
¹² Porque jubileu é, santo será para vós; a novidade do campo comereis.
¹³ Neste ano do jubileu, tornareis cada um à sua possessão.
¹⁴ E, quando venderdes alguma coisa ao vosso próximo ou a comprardes da mão do vosso próximo, ninguém engane a seu irmão.
¹⁵ Conforme o número dos anos depois do jubileu, comprarás do teu próximo; e, conforme o número dos anos das colheitas, ele venderá a ti.
¹⁶ Conforme se multipliquem os anos, aumentarás o seu preço e, conforme a diminuição dos anos, abaixarás o seu preço; porque o número das colheitas é o que ele te vende.
¹⁷ Ninguém, pois, engane ao seu próximo; mas terás temor do teu Deus; porque eu sou o SENHOR, vosso Deus.
¹⁸ E fareis os meus estatutos, e guardareis os meus juízos, e os fareis; assim, habitareis seguros na terra.
¹⁹ E a terra dará o seu fruto, e comereis a fartar e nela habitareis seguros.
²⁰ E, se disserdes: Que comeremos no ano sétimo? Eis que não semearemos, nem colheremos a nossa novidade;
²¹ então, eu mandarei a minha bênção sobre vós no sexto ano, para que dê fruto por três anos.
²² E, no oitavo ano, semeareis e comereis da colheita velha até ao nono ano; até que venha a sua novidade, comereis a velha.
²³ Também a terra não se venderá em perpetuidade, porque a terra é minha; pois vós sois estrangeiros e peregrinos comigo.
²⁴ Portanto, em toda a terra da vossa possessão, dareis resgate à terra.
²⁵ Quando teu irmão empobrecer e vender alguma parte da sua possessão, então, virá o seu resgatador, seu parente, e resgatará o que vendeu seu irmão.
²⁶ E, se alguém não tiver resgatador, mas a sua mão alcançar e achar o suficiente para o seu resgate,
²⁷ então, contará os anos da sua venda e o que sobejar restituirá ao homem a quem a vendeu, e tornará à sua possessão.
²⁸ Mas, se a sua mão não alcançar o suficiente para lhe restituir, o que vendeu ficará na mão do comprador até ao ano do jubileu; mas, no jubileu, sairá, e ele tornará à sua possessão.
²⁹ E, quando alguém vender uma casa de habitação em cidade murada, o seu resgate será até que se cumpra o ano da sua venda; durante um ano inteiro, será o seu resgate.
³⁰ Mas, se, passado um ano inteiro, não for resgatada, então, a casa que estiver na cidade que tem muro ficará em perpetuidade ao que a comprou, pelas suas gerações; não sairá no jubileu.
³¹ Mas as casas das aldeias que não têm muro em roda serão estimadas como os campos da terra; para elas haverá resgate e sairão no jubileu.
³² Mas, quanto às cidades dos levitas, às casas das cidades da sua possessão, terão os levitas direito perpétuo de resgate.
³³ E, se alguém resgatar dos levitas, a casa vendida e a cidade da sua possessão sairão no jubileu; porque as casas das cidades dos levitas são a sua possessão no meio dos filhos de Israel.
³⁴ Mas o campo do arrabalde das suas cidades não se venderá, porque é possessão perpétua para eles.
³⁵ E, quando teu irmão empobrecer, e as suas mãos titubearem para contigo, sustentá-lo-ás como estrangeiro e peregrino, para que viva contigo.
³⁶ Não tomarás dele usura nem ganho; mas terás temor do teu Deus, para que teu irmão viva contigo.
³⁷ Não lhe darás teu dinheiro com usura, nem darás o teu mantimento por ganho.
³⁸ Eu sou o SENHOR, vosso Deus, que vos tirei da terra do Egito, para vos dar a terra de Canaã, para ser vosso Deus.
³⁹ Quando também teu irmão empobrecer, estando ele contigo, e se vender a ti, não o obrigarás a servir como escravo.
⁴⁰ Como jornaleiro, como peregrino estará contigo; até ao ano do jubileu te servirá;
⁴¹ então, sairá de ti, ele e seus filhos com ele, e tornará à sua família e à possessão de seus pais.
⁴² Porque são meus servos, que tirei da terra do Egito; não serão vendidos como escravos.
⁴³ Não assenhorearás dele com rigor, mas terás temor do teu Deus.
⁴⁴ E, quanto a teu escravo ou a tua escrava que tiveres, serão das nações que estão ao redor de vós; delas comprareis escravos e escravas.
⁴⁵ Também os comprareis dos filhos dos estrangeiros que peregrinam entre vós, e das suas famílias que estão convosco, que geraram na vossa terra; e vos serão por possessão.
⁴⁶ E deixá-los-eis por herança aos vossos filhos depois de vós, para herdarem a possessão; perpetuamente os fareis servir; mas sobre vossos irmãos, os filhos de Israel, cada um sobre o seu irmão, não vos assenhoreareis dele com rigor.
⁴⁷ E, se a mão do estrangeiro ou peregrino que está contigo alcançar riqueza, e teu irmão, que está com ele, empobrecer e se vender ao estrangeiro ou peregrino que está contigo, ou a alguém da linhagem da família do estrangeiro,
⁴⁸ depois que se vender, haverá resgate para ele; um de seus irmãos o poderá resgatar:
⁴⁹ ou seu tio, ou o filho de seu tio o poderá resgatar; ou um dos seus parentes, da sua família, o poderá resgatar; ou, se a sua mão alcançar, se resgatará a si mesmo.
⁵⁰ E contará com aquele que o comprou, desde o ano que se vendeu a ele até ao ano do jubileu; e o preço da sua venda será conforme o número dos anos; conforme os dias de um jornaleiro estará com ele.
⁵¹ Se ainda ficarem muitos anos, conforme eles restituirá, para o seu resgate, parte do dinheiro por que foi comprado.
⁵² E, se ainda ficarem poucos anos até ao ano do jubileu, então, contará com ele e, conforme os seus anos, restituirá o seu resgate.
⁵³ Como jornaleiro, de ano em ano, estará com ele; não se assenhoreará dele com rigor diante dos teus olhos.
⁵⁴ E, se se não resgatar por estes meios, sairá no ano do jubileu, ele e seus filhos com ele.
⁵⁵ Porque os filhos de Israel me são servos; meus servos são eles, que tirei da terra do Egito. Eu sou o SENHOR, vosso Deus.`,

            // O DESAFIO
            pergunta: {
                texto: "De quantos em quantos anos deveria ser celebrado o Ano do Jubileu, no qual as propriedades voltavam aos donos originais e os escravos eram libertos?",
                opcoes: [
                    { numero: 1, texto: "A cada 7 anos", correta: false },
                    { numero: 2, texto: "A cada 10 anos", correta: false },
                    { numero: 3, texto: "A cada 50 anos", correta: true },
                    { numero: 4, texto: "A cada 100 anos", correta: false }
                ],
                explicacao: "Levítico 25:8-10 - Após sete semanas de anos (49 anos), o quinquagésimo ano era santificado como Jubileu, um tempo de restauração total e liberdade em toda a terra.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 26 ---
        26: {
            titulo: "Bênçãos da Obediência e Castigos da Desobediência",
            subtitulo: "A escolha entre a prosperidade divina e as consequências da rebeldia",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Não fareis para vós ídolos, nem vos levantareis imagem de escultura, nem estátua, nem poreis pedra figurada na vossa terra, para inclinar-vos a ela; porque eu sou o SENHOR, vosso Deus.
² Guardareis os meus sábados e reverenciareis o meu santuário. Eu sou o SENHOR.
³ Se andardes nos meus estatutos, e guardardes os meus mandamentos, e os cumprirdes,
⁴ então, eu vos darei as vossas chuvas a seu tempo; e a terra dará a sua novidade, e a árvore do campo dará o seu fruto;
⁵ e a debulha se vos chegará à vindima, e a vindima se chegará à sementeira; e comereis o vosso pão a fartar e habitareis seguros na vossa terra.
⁶ Também darei paz na terra, e dormireis, e não haverá quem vos espante; e farei cessar os animais nocivos da terra, e pela vossa terra não passará espada.
⁷ E perseguireis os vossos inimigos, e cairão à espada diante de vós.
⁸ Cinco de vós perseguirão a um cento, e cem de vós perseguirão a dez mil; e os vossos inimigos cairão à espada diante de vós.
⁹ E para vós olharei, e vos farei crescer, e vos multiplicarei, e confirmarei o meu concerto convosco.
¹⁰ E comereis da colheita velha, há muito guardada, e tirareis fora a velha por causa da nova.
¹¹ E porei o meu tabernáculo no meio de vós, e a minha alma de vós não se enfadará.
¹² E andarei no meio de vós e eu vos serei por Deus, e vós me sereis por povo.
¹³ Eu sou o SENHOR, vosso Deus, que vos tirei da terra dos egípcios, para que não fôsseis seus escravos; e quebrei os timões do vosso jugo e vos fiz andar erguidos.
¹⁴ Mas, se me não ouvirdes, e não cumprirdes todos estes mandamentos,
¹⁵ e se rejeitardes os meus estatutos, e a vossa alma se enfadar dos meus juízos, não cumprindo todos os meus mandamentos, para anular o meu concerto,
¹⁶ então, eu também vos farei isto: porei sobre vós terror, a tísica e a ardente febre, que consumam os olhos e atormentem a alma; e semeareis em vão a vossa semente, porque os vossos inimigos a comerão.
¹⁷ E porei a minha face contra vós, e sereis feridos diante de vossos inimigos; e os que vos aborrecem se assenhorearão de vós, e fugireis sem ninguém vos perseguir.
¹⁸ E, se ainda com estas coisas me não ouvirdes, tornarei a castigar-vos sete vezes mais, por causa dos vossos pecados.
¹⁹ Porque quebrarei a soberba da vossa força; e farei que os vossos céus sejam como ferro e a vossa terra, como bronze.
²⁰ E debalde se gastará a vossa força; a vossa terra não dará a sua novidade, e as árvores da terra não darão o seu fruto.
²¹ E, se andardes contrariamente para comigo e não me quiserdes ouvir, trarei sobre vós sete vezes mais pragas, conforme os vossos pecados.
²² Porque enviarei entre vós as feras do campo, as quais vos desfilharão, e desfarão o vosso gado, e vos diminuirão; e os vossos caminhos serão desertos.
²³ E, se ainda com estas coisas não fordes castigados por mim, mas andardes contrariamente para comigo,
²⁴ eu também andarei contrariamente para convosco e eu mesmo vos ferirei sete vezes mais por causa dos vossos pecados.
²⁵ Porque trarei sobre vós a espada, que vingará a vingança do concerto; e ajuntados sereis nas vossas cidades; então, enviarei a peste entre vós, e sereis entregues na mão do inimigo.
²⁶ Quando eu vos quebrar o sustento do pão, dez mulheres cozerão o vosso pão num só forno e tornarão a dar o vosso pão por peso; e comereis, mas não vos fartareis.
²⁷ E, se com isto me não ouvirdes, mas andardes contrariamente para comigo,
²⁸ também eu para convosco andarei contrariamente em furor; e vos castigarei sete vezes mais por causa dos vossos pecados.
²⁹ Porque comereis a carne de vossos filhos e comereis a carne de vossas filhas.
³⁰ E destruirei os vossos altos, e desfarei as vossas imagens do sol, e lançarei os vossos cadáveres sobre os cadáveres dos vossos ídolos; a minha alma se enfadará de vós.
³¹ E porei as vossas cidades em deserto, e assolarei os vossos santuários, e não cheirarei o vosso cheiro suave.
³² E assolarei a terra, e se espantarão disso os vossos inimigos que nela morarem.
³³ E espalhar-vos-ei entre as nações e desembainharei a espada atrás de vós; e a vossa terra será assolada, e as vossas cidades serão desertas.
³⁴ Então, a terra folgará nos seus sábados, todos os dias da sua assolação, e vós estareis na terra dos vossos inimigos; então, a terra descansará e folgará nos seus sábados.
³⁵ Todos os dias da assolação descansará, porque não descansou nos vossos sábados, quando habitáveis nela.
³⁶ E, quanto aos que de vós ficarem, eu porei tal pavor no seu coração, nas terras dos seus inimigos, que o ruído de uma folha movida os perseguirá; e fugirão como quem foge da espada; e cairão sem ninguém os perseguir.
³⁷ E cairão uns sobre os outros, como diante da espada, sem ninguém os perseguir; e não podereis resistir diante dos vossos inimigos.
³⁸ E perecereis entre as nações, e a terra dos vossos inimigos vos consumirá.
³⁹ E aqueles que de vós ficarem se consumirão pela sua iniquidade nas terras dos vossos inimigos; e também pela iniquidade de seus pais com eles se consumirão.
⁴⁰ Então, confessarão a sua iniquidade e a iniquidade de seus pais, com as suas transgressões, com que transgrediram contra mim; como também confessarão que, porquanto andaram contrariamente para comigo,
⁴¹ eu também andei contrariamente para com eles e os levei à terra dos seus inimigos; se então o seu coração incircunciso se humilhar, e então tomarem por bem o castigo da sua iniquidade,
⁴² também eu me lembrarei do meu concerto com Jacó, e também do meu concerto com Isaque, e também do meu concerto com Abraão me lembrarei, e da terra me lembrarei.
⁴³ E a terra será deixada por eles e folgará nos seus sábados, sendo assolada por causa deles; e tomarão por bem o castigo da sua iniquidade, porquanto, e somente porquanto, rejeitaram os meus juízos e a sua alma se enfadou dos meus estatutos.
⁴⁴ E, ainda também com isto, estando eles na terra dos seus inimigos, não os rejeitarei, nem me enfadarei deles, para consumi-los e anular o meu concerto com eles, porque eu sou o SENHOR, vosso Deus.
⁴⁵ Antes, por amor deles, me lembrarei do concerto com os seus antepassados, que tirei da terra do Egito perante os olhos das nações, para lhes ser por Deus. Eu sou o SENHOR.
⁴⁶ Estes são os estatutos, e os juízos, e as leis que deu o SENHOR entre si e os filhos de Israel, no monte Sinai, pela mão de Moisés.`,

            // O DESAFIO
            pergunta: {
                texto: "Se o povo de Israel andasse nos estatutos do SENHOR, qual seria a promessa divina em relação à presença de Deus no meio deles?",
                opcoes: [
                    { numero: 1, texto: "Deus os visitaria uma vez por ano apenas", correta: false },
                    { numero: 2, texto: "Poria o Seu tabernáculo no meio deles e seria o seu Deus", correta: true },
                    { numero: 3, texto: "Eles nunca mais precisariam de sacerdotes", correta: false },
                    { numero: 4, texto: "O maná cairia do céu todos os dias para sempre", correta: false }
                ],
                explicacao: "Levítico 26:11-12 - A maior bênção da obediência era a habitação contínua da presença de Deus e a confirmação da aliança: 'Eu serei o vosso Deus, e vós sereis o meu povo'.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 27 ---
        27: {
            titulo: "Votos e Dízimos",
            subtitulo: "As avaliações de consagração e a santidade do dízimo",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Falou mais o SENHOR a Moisés, dizendo:
² Fala aos filhos de Israel e dize-lhes: Quando alguém fizer um voto especial ao SENHOR, segundo a tua avaliação serão as pessoas.
³ Se for a tua avaliação de um varão, da idade de vinte até aos sessenta anos, a tua avaliação será de cinquenta siclos de prata, segundo o siclo do santuário.
⁴ E, se for mulher, a tua avaliação será de trinta siclos.
⁵ E, se for de cinco anos até aos vinte, a tua avaliação será, pelo varão, de vinte siclos e, pela mulher, de dez siclos.
⁶ E, se for de um mês até aos cinco anos, a tua avaliação será, pelo varão, de cinco siclos de prata e, pela mulher, a tua avaliação será de três siclos de prata.
⁷ E, se for de sessenta anos e acima, pelo varão, a tua avaliação será de quinze siclos e, pela mulher, de dez siclos.
⁸ Mas, se for mais pobre do que a tua avaliação, apresentar-se-á perante o sacerdote, para que o sacerdote o avalie; conforme o que alcançar a mão do que fez o voto, o avaliará o sacerdote.
⁹ E, se for animal de que se oferece oferta ao SENHOR, tudo quanto dele se der ao SENHOR será santo.
¹⁰ Não o mudará, nem o trocará, bom por mau, ou mau por bom; mas, se de alguma maneira trocar animal por animal, assim um como o outro será santo.
¹¹ E, se for algum animal imundo, de que se não oferece oferta ao SENHOR, então, apresentará o animal perante o sacerdote.
¹² E o sacerdote o avaliará, seja bom ou seja mau; conforme a avaliação do sacerdote, assim será.
¹³ Mas, se de alguma maneira o resgatar, acrescentará a sua quinta parte sobre a tua avaliação.
¹⁴ E, quando alguém santificar a sua casa para ser santa ao SENHOR, o sacerdote a avaliará, seja boa ou seja má; como o sacerdote a avaliar; assim ficará.
¹⁵ Mas, se o que santificou resgatar a sua casa, então, acrescentará a sua quinta parte do dinheiro da tua avaliação sobre ela, e será sua.
¹⁶ Se também alguém santificar ao SENHOR alguma parte do campo da sua possessão, a tua avaliação será segundo a sua semente: um gômer de semente de cevada será por cinquenta siclos de prata.
¹⁷ Se ele santificar o seu campo desde o ano do jubileu, conforme a tua avaliação ficará.
¹⁸ Mas, se santificar o seu campo depois do jubileu, então, o sacerdote lhe contará o dinheiro conforme os anos que restam até ao ano do jubileu, e se abaterá da tua avaliação.
¹⁹ E, se aquele que santificou o campo de alguma maneira o resgatar, então, acrescentará a sua quinta parte do dinheiro da tua avaliação sobre ele, e ficará seu.
²⁰ Mas, se não resgatar o campo, ou se vender o campo a outro homem, nunca mais se resgatará.
²¹ Porém o campo, quando sair no jubileu, será santo ao SENHOR, como campo consagrado; a sua possessão será do sacerdote.
²² E, se santificar ao SENHOR o campo que comprou, o qual não for do campo da sua possessão,
²³ então, o sacerdote lhe contará o valor da tua avaliação até ao ano do jubileu; e, no mesmo dia, dará a tua avaliação por coisa santa ao SENHOR.
²⁴ No ano do jubileu, o campo tornará àquele de quem se comprou, àquele de quem era a possessão da terra.
²⁵ E toda a tua avaliação se fará conforme o siclo do santuário; o siclo será de vinte geras.
²⁶ Mas o primogênito de um animal, que por primogenitura pertence ao SENHOR, ninguém o santificará; seja boi ou gado miúdo, do SENHOR é.
²⁷ Mas, se for de um animal imundo, o resgatará segundo a tua avaliação e sobre ele acrescentará a sua quinta parte; e, se não se resgatar, vender-se-á segundo a tua avaliação.
²⁸ Todavia, nenhuma coisa consagrada que alguém consagrar ao SENHOR de tudo o que tem, de homem, ou de animal, ou do campo da sua possessão, se venderá, nem resgatará; toda coisa consagrada será santíssima ao SENHOR.
²⁹ Nenhuma coisa consagrada que for consagrada do homem se resgatará; certamente morrerá.
³⁰ Também todas as dízimas da terra, da semente da terra, do fruto das árvores, são do SENHOR; santas são ao SENHOR.
³¹ Mas, se alguém das suas dízimas resgatar alguma coisa, acrescentará a sua quinta parte sobre ela.
³² No que toca a todas as dízimas de vacas e de ovelhas, de tudo o que passar debaixo da vara, o dízimo será santo ao SENHOR.
³³ Não se examinará se é bom ou mau, nem o trocará; mas, se de alguma maneira o trocar, assim um como o outro será santo; não se resgatará.
³⁴ Estes são os mandamentos que o SENHOR ordenou a Moisés, para os filhos de Israel, no monte Sinai.`,

            // O DESAFIO
            pergunta: {
                texto: "Em relação ao dízimo do gado ou do rebanho, qual era a regra para identificar qual animal seria santo ao SENHOR?",
                opcoes: [
                    { numero: 1, texto: "O dono deveria escolher o melhor e mais gordo", correta: false },
                    { numero: 2, texto: "Tudo o que passasse debaixo da vara (o dízimo)", correta: true },
                    { numero: 3, texto: "Apenas os machos primogênitos", correta: false },
                    { numero: 4, texto: "Os animais que nascessem com manchas brancas", correta: false }
                ],
                explicacao: "Levítico 27:32-33 - O SENHOR determinou que cada décimo animal que passasse sob a vara de contagem seria consagrado, sem que o dono pudesse escolher entre o bom e o mau ou trocá-lo.",
                pontosGanhos: 20
            }
        },
      
        // --- INÍCIO DO CAPÍTULO 1 ---
       

        // 💡 DICA: Para adicionar o Capítulo 5, 6, 7... 
        // Basta copiar um bloco desses (do { até o },) e mudar o número e os textos.
        // Lembre-se de manter a vírgula entre eles!

} // Fim dos capítulos
};

console.log('✅ Livro de Gênesis (Módulo Completo) pronto para uso!');