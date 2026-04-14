// js/livros/múmeros.js
// ═══════════════════════════════════════════════════════════════════════════════
// LIVRO: ÊXODO - O LIVRO DA FUGA
// ═══════════════════════════════════════════════════════════════════════════════

export const numeros = {
    // ───────────────────────────────────────────────────────────────────────────
    // 1. CONFIGURAÇÕES GERAIS (Aparecem no Card da Biblioteca)
    // ───────────────────────────────────────────────────────────────────────────
    nome: "Números",     // Nome que aparece no título
    icone: "📜",         // Emoji ou Ícone que aparece no card
    autor: "Moisés",      // Nome do autor que aparece abaixo do título
    
    // CAMINHO DA IMAGEM: Esta imagem fica no fundo quando o capítulo abre
    background: "./imagens/numeros_bg.jpg", 

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
        // --- INÍCIO DO LIVRO DE NÚMEROS ---
        // --- CAPÍTULO 1 ---
        1: {
            titulo: "O Recenseamento de Israel",
            subtitulo: "A contagem dos homens aptos para a guerra no deserto",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Falou mais o SENHOR a Moisés, no deserto de Sinai, na tenda da congregação, no primeiro dia do mês segundo, no segundo ano da sua saída da terra do Egito, dizendo:
² Tomai a soma de toda a congregação dos filhos de Israel, segundo as suas famílias, segundo a casa de seus pais, conforme o número dos nomes de todo o varão, cabeça por cabeça;
³ da idade de vinte anos para cima, todos os que em Israel podem sair à guerra, a esses contareis segundo os seus exércitos, tu e Arão.
⁴ Estará convosco de cada tribo um homem que seja cabeça da casa de seus pais.
⁵ Estes, pois, são os nomes dos homens que estarão convosco: de Rúben, Elizur, filho de Sedeur;
⁶ de Simeão, Selumiel, filho de Zurisadai;
⁷ de Judá, Naassom, filho de Aminadabe;
⁸ de Issacar, Netanel, filho de Zuar;
⁹ de Zebulom, Eliabe, filho de Helom;
¹⁰ dos filhos de José: de Efraim, Elisama, filho de Amiude; de Manassés, Gamaliel, filho de Pedazur;
¹¹ de Benjamim, Abidã, filho de Gideoni;
¹² de Dã, Aiezer, filho de Amisadai;
¹³ de Aser, Pagiel, filho de Ocrã;
¹⁴ de Gade, Eliasafe, filho de Deuel;
¹⁵ de Naftali, Aíra, filho de Enã.
¹⁶ Estes foram os chamados da congregação, os príncipes das tribos de seus pais, os cabeças dos milhares de Israel.
¹⁷ Então, tomaram Moisés e Arão a estes homens, que foram declarados pelos seus nomes,
¹⁸ e congregaram toda a congregação no primeiro dia do mês segundo, e declararam a sua descendência segundo as suas famílias, segundo a casa de seus pais, conforme o número dos nomes, da idade de vinte anos para cima, cabeça por cabeça.
¹⁹ Como o SENHOR ordenara a Moisés, assim os contou no deserto de Sinai.
²⁰ Foram, pois, os filhos de Rúben, o primogênito de Israel, as suas gerações, pelas suas famílias, segundo a casa de seus pais, conforme o número dos nomes, cabeça por cabeça, todo varão de vinte anos para cima, todos os que podiam sair à guerra,
²¹ foram contados deles, da tribo de Rúben, quarenta e seis mil e quinhentos.
²² Dos filhos de Simeão, as suas gerações, pelas suas famílias, segundo a casa de seus pais, os que foram contados dele, conforme o número dos nomes, cabeça por cabeça, todo varão de vinte anos para cima, todos os que podiam sair à guerra,
²³ foram contados deles, da tribo de Simeão, cinquenta e nove mil e trezentos.
²⁴ Dos filhos de Gade, as suas gerações, pelas suas famílias, segundo a casa de seus pais, conforme o número dos nomes, de vinte anos para cima, todos os que podiam sair à guerra,
²⁵ foram contados deles, da tribo de Gade, quarenta e cinco mil seiscentos e cinquenta.
²⁶ Dos filhos de Judá, as suas gerações, pelas suas famílias, segundo a casa de seus pais, conforme o número dos nomes, de vinte anos para cima, todos os que podiam sair à guerra,
²⁷ foram contados deles, da tribo de Judá, setenta e quatro mil e seiscentos.
²⁸ Dos filhos de Issacar, as suas gerações, pelas suas famílias, segundo a casa de seus pais, conforme o número dos nomes, de vinte anos para cima, todos os que podiam sair à guerra,
²⁹ foram contados deles, da tribo de Issacar, cinquenta e quatro mil e quatrocentos.
³⁰ Dos filhos de Zebulom, as suas gerações, pelas suas famílias, segundo a casa de seus pais, conforme o número dos nomes, de vinte anos para cima, todos os que podiam sair à guerra,
³¹ foram contados deles, da tribo de Zebulom, cinquenta e sete mil e quatrocentos.
³² Dos filhos de José, dos filhos de Efraim, as suas gerações, pelas suas famílias, segundo a casa de seus pais, conforme o número dos nomes, de vinte anos para cima, todos os que podiam sair à guerra,
³³ foram contados deles, da tribo de Efraim, quarenta mil e quinhentos.
³⁴ Dos filhos de Manassés, as suas gerações, pelas suas famílias, segundo a casa de seus pais, conforme o número dos nomes, de vinte anos para cima, todos os que podiam sair à guerra,
³⁵ foram contados deles, da tribo de Manassés, trinta e dois mil e duzentos.
³⁶ Dos filhos de Benjamim, as suas gerações, pelas suas famílias, segundo a casa de seus pais, conforme o número dos nomes, de vinte anos para cima, todos os que podiam sair à guerra,
³⁷ foram contados deles, da tribo de Benjamim, trinta e cinco mil e quatrocentos.
³⁸ Dos filhos de Dã, as suas gerações, pelas suas famílias, segundo a casa de seus pais, conforme o número dos nomes, de vinte anos para cima, todos os que podiam sair à guerra,
³⁹ foram contados deles, da tribo de Dã, sessenta e dois mil e setecentos.
⁴⁰ Dos filhos de Aser, as suas gerações, pelas suas famílias, segundo a casa de seus pais, conforme o número dos nomes, de vinte anos para cima, todos os que podiam sair à guerra,
⁴¹ foram contados deles, da tribo de Aser, quarenta e um mil e quinhentos.
⁴² Dos filhos de Naftali, as suas gerações, pelas suas famílias, segundo a casa de seus pais, conforme o número dos nomes, de vinte anos para cima, todos os que podiam sair à guerra,
⁴³ foram contados deles, da tribo de Naftali, cinquenta e três mil e quatrocentos.
⁴⁴ Estes foram os contados, que contaram Moisés e Arão, e os príncipes de Israel, doze homens, cada um era pela casa de seus pais.
⁴⁵ Assim foram todos os contados dos filhos de Israel, segundo a casa de seus pais, de vinte anos para cima, todos os que em Israel podiam sair à guerra;
⁴⁶ todos os contados foram seiscentos e três mil quinhentos e cinquenta.
⁴⁷ Mas os levitas, segundo a tribo de seus pais, não foram contados entre eles,
⁴⁸ porquanto o SENHOR tinha falado a Moisés, dizendo:
⁴⁹ Somente não contarás a tribo de Levi, nem tomarás a soma deles entre os filhos de Israel.
⁵⁰ Mas tu põe os levitas sobre o tabernáculo do Testemunho, e sobre todos os seus utensílios, e sobre tudo o que lhe pertence; eles levarão o tabernáculo e todos os seus utensílios, e eles o administrarão, e acampar-se-ão ao redor do tabernáculo.
⁵¹ E, quando o tabernáculo partir, os levitas o desarmarão; e, quando o tabernáculo assentar no arraial, os levitas o armarão; e o estranho que se chegar morrerá.
⁵² E os filhos de Israel assentarão as suas tendas, cada um no seu esquadrão e cada um junto à sua bandeira, segundo os seus exércitos.
⁵³ Mas os levitas se acamparão ao redor do tabernáculo do Testemunho, para que não haja indignação sobre a congregação dos filhos de Israel; pelo que os levitas terão o cuidado da guarda do tabernáculo do Testemunho.
⁵⁴ Assim fizeram os filhos de Israel; conforme tudo o que o SENHOR ordenara a Moisés, assim o fizeram.`,

            // O DESAFIO
            pergunta: {
                texto: "No primeiro censo realizado no deserto do Sinai, qual era a idade mínima exigida para que um homem fosse contado entre os aptos para sair à guerra?",
                opcoes: [
                    { numero: 1, texto: "De 12 anos para cima", correta: false },
                    { numero: 2, texto: "De 18 anos para cima", correta: false },
                    { numero: 3, texto: "De 20 anos para cima", correta: true },
                    { numero: 4, texto: "De 30 anos para cima", correta: false }
                ],
                explicacao: "Números 1:2-3 - O SENHOR ordenou que Moisés e Arão contassem todos os homens de Israel, de vinte anos para cima, que pudessem carregar armas.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 2 ---
        2: {
            titulo: "A Ordem do Acampamento",
            subtitulo: "A disposição das tribos ao redor do Tabernáculo",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E falou o SENHOR a Moisés e a Arão, dizendo:
² Os filhos de Israel assentarão as suas tendas, cada um debaixo da sua bandeira, com as insígnias da casa de seus pais; ao redor, defronte da tenda da congregação, se acamparão.
³ Os que se acamparem ao oriente, para o nascente, serão os da bandeira do exército de Judá, segundo os seus esquadrões; e Naassom, filho de Aminadabe, será príncipe dos filhos de Judá.
⁴ E o seu exército, com os seus contados, são setenta e quatro mil e seiscentos.
⁵ E junto a ele se acampará a tribo de Issacar; e Netanel, filho de Zuar, será príncipe dos filhos de Issacar.
⁶ E o seu exército, com os seus contados, são cinquenta e quatro mil e quatrocentos.
⁷ Depois, a tribo de Zebulom; e Eliabe, filho de Helom, será príncipe dos filhos de Zebulom.
⁸ E o seu exército, com os seus contados, são cinquenta e sete mil e quatrocentos.
⁹ Todos os contados do exército de Judá são cento e oitenta e seis mil e quatrocentos, segundo os seus esquadrões; estes marcharão primeiro.
¹⁰ A bandeira do exército de Rúben, segundo os seus esquadrões, estará para a banda do sul; e Elizur, filho de Sedeur, será príncipe dos filhos de Rúben.
¹¹ E o seu exército, com os seus contados, são quarenta e seis mil e quinhentos.
¹² E junto a ele se acampará a tribo de Simeão; e Selumiel, filho de Zurisadai, será príncipe dos filhos de Simeão.
¹³ E o seu exército, com os seus contados, são cinquenta e nove mil e trezentos.
¹⁴ Depois, a tribo de Gade; e Eliasafe, filho de Reuel, será príncipe dos filhos de Gade.
¹⁵ E o seu exército, com os seus contados, são quarenta e cinco mil seiscentos e cinquenta.
¹⁶ Todos os contados do exército de Rúben são cento e cinquenta e um mil quatrocentos e cinquenta, segundo os seus esquadrões; e estes marcharão em segundo lugar.
¹¹⁷ Então, partirá a tenda da congregação com o exército dos levitas no meio dos exércitos; como se acamparem, assim marcharão, cada um no seu lugar, segundo as suas bandeiras.
¹⁸ A bandeira do exército de Efraim, segundo os seus esquadrões, estará para a banda do ocidente; e Elisama, filho de Amiude, será príncipe dos filhos de Efraim.
¹¹⁹ E o seu exército, com os seus contados, são quarenta mil e quinhentos.
²⁰ E junto a ele a tribo de Manassés; e Gamaliel, filho de Pedazur, será príncipe dos filhos de Manassés.
²¹ E o seu exército, com os seus contados, são trinta e dois mil e duzentos.
²² Depois, a tribo de Benjamim; e Abidã, filho de Gideoni, será príncipe dos filhos de Benjamim.
²³ E o seu exército, com os seus contados, são trinta e cinco mil e quatrocentos.
²⁴ Todos os contados do exército de Efraim são cento e oito mil e cem, segundo os seus esquadrões; e estes marcharão em terceiro lugar.
²⁵ A bandeira do exército de Dã estará para a banda do norte, segundo os seus esquadrões; e Aiezer, filho de Amisadai, será príncipe dos filhos de Dã.
²⁶ E o seu exército, com os seus contados, são sessenta e dois mil e setecentos.
²⁷ E junto a ele se acampará a tribo de Aser; e Pagiel, filho de Ocrã, será príncipe dos filhos de Aser.
²⁸ E o seu exército, com os seus contados, são quarenta e um mil e quinhentos.
²⁹ Depois, a tribo de Naftali; e Aíra, filho de Enã, será príncipe dos filhos de Naftali.
³⁰ E o seu exército, com os seus contados, são cinquenta e três mil e quatrocentos.
³¹ Todos os contados do exército de Dã são cento e cinquenta e sete mil e seiscentos; estes marcharão no último lugar, segundo as suas bandeiras.
³² Estes são os contados dos filhos de Israel, segundo a casa de seus pais; todos os contados dos exércitos, segundo os seus esquadrões, foram seiscentos e três mil quinhentos e cinquenta.
³³ Mas os levitas não foram contados entre os filhos de Israel, como o SENHOR ordenara a Moisés.
³⁴ E os filhos de Israel fizeram conforme tudo o que o SENHOR ordenara a Moisés; assim se acamparam segundo as suas bandeiras e assim marcharam, cada um segundo as suas famílias, segundo a casa de seus pais.`,

            // O DESAFIO
            pergunta: {
                texto: "Qual tribo deveria acampar ao lado nascente (oriente), sendo a primeira a marchar quando a nuvem se levantasse?",
                opcoes: [
                    { numero: 1, texto: "A tribo de Rúben", correta: false },
                    { numero: 2, texto: "A tribo de Judá", correta: true },
                    { numero: 3, texto: "A tribo de Efraim", correta: false },
                    { numero: 4, texto: "A tribo de Dã", correta: false }
                ],
                explicacao: "Números 2:3-9 - Judá liderava o primeiro esquadrão ao oriente, marchando à frente das demais tribos com Issacar e Zebulom.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 3 ---
        3: {
            titulo: "Os Levitas e os Primogênitos",
            subtitulo: "A linhagem de Arão e a substituição dos primogênitos",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E estas são as gerações de Arão e de Moisés, no dia em que o SENHOR falou com Moisés no monte Sinai.
² E estes são os nomes dos filhos de Arão: o primogênito, Nadabe; depois, Abiú, Eleazar e Itamar.
³ Estes são os nomes dos filhos de Arão, os sacerdotes ungidos, cujas mãos foram consagradas para sacerdotizar.
⁴ Mas Nadabe e Abiú morreram perante o SENHOR, quando ofereceram fogo estranho perante o SENHOR no deserto de Sinai, e não tiveram filhos; porém Eleazar e Itamar exerceram o sacerdócio diante de Arão, seu pai.
⁵ E falou o SENHOR a Moisés, dizendo:
⁶ Faze chegar a tribo de Levi e põe-na diante de Arão, o sacerdote, para que o sirvam,
⁷ e guardem a sua guarda e a guarda de toda a congregação, diante da tenda da congregação, para administrar o ministério do tabernáculo,
⁸ e guardem todos os utensílios da tenda da congregação e a guarda dos filhos de Israel, para administrar o ministério do tabernáculo.
⁹ Darás, pois, os levitas a Arão e a seus filhos; dentre os filhos de Israel lhes são dados em dádiva.
¹⁰ Mas a Arão e a seus filhos ordenarás que guardem o seu sacerdócio, e o estranho que se chegar morrerá.
¹¹ E falou o SENHOR a Moisés, dizendo:
¹² E eu, eis que tenho tomado os levitas do meio dos filhos de Israel, em lugar de todo o primogênito que abre a madre, entre os filhos de Israel; e os levitas serão meus.
¹³ Porque todo primogênito é meu; desde o dia em que feri a todo primogênito na terra do Egito, santifiquei para mim todo primogênito em Israel, desde o homem até ao animal; meus serão. Eu sou o SENHOR.
¹⁴ Falou mais o SENHOR a Moisés no deserto de Sinai, dizendo:
¹⁵ Conta os filhos de Levi, segundo a casa de seus pais, pelas suas famílias; contarás a todo varão da idade de um mês para cima.
¹⁶ E Moisés os contou conforme o mandado do SENHOR, como lhe fora ordenado.
¹⁷ Estes, pois, foram os filhos de Levi pelos seus nomes: Gérson, Coate e Merari.
¹⁸ E estes são os nomes dos filhos de Gérson pelas suas famílias: Libni e Simei.
¹⁹ E os filhos de Coate pelas suas famílias: Anrão, Izar, Hebrom e Uziel.
²⁰ E os filhos de Merari pelas suas famílias: Mali e Musi; estas são as famílias dos levitas, segundo a casa de seus pais.
²¹ De Gérson é a família dos libnitas e a família dos simeítas; estas são as famílias dos gersonitas.
²² Os seus contados, conforme o número de todo varão da idade de um mês para cima, sim, os seus contados eram sete mil e quinhentos.
²³ As famílias dos gersonitas se acamparão atrás do tabernáculo, ao ocidente.
²⁴ E o príncipe da casa paterna dos gersonitas será Eliasafe, filho de Lael.
²⁵ E a guarda dos filhos de Gérson na tenda da congregação será o tabernáculo, e a tenda, e a sua coberta, e o anteparo da porta da tenda da congregação,
²⁶ e as cortinas do pátio, e o anteparo da porta do pátio que está junto ao tabernáculo e junto ao altar em redor, como também as suas cordas para todo o seu serviço.
²⁷ E de Coate é a família dos anramitas, e a família dos izaritas, e a família dos hebronitas, e a família dos uzielitas; estas são as famílias dos coatitas.
²⁸ Conforme o número de todo varão da idade de um mês para cima, eram oito mil e seiscentos, que tinham a guarda do santuário.
²⁹ As famílias dos filhos de Coate se acamparão ao lado do tabernáculo, para a banda do sul.
³⁰ E o príncipe da casa paterna das famílias dos coatitas será Elisafã, filho de Uziel.
³¹ E a sua guarda será a arca, e a mesa, e o candelabro, e os altares, e os utensílios do santuário com que ministram, e o anteparo com todo o seu serviço.
³² E o príncipe dos príncipes de Levi será Eleazar, filho de Arão, o sacerdote; terá a superintendência sobre os que têm a guarda do santuário.
³³ De Merari é a família dos malitas e a família dos musitas; estas são as famílias de Merari.
³⁴ E os seus contados, conforme o número de todo varão de um mês para cima, eram seis mil e duzentos.
³⁵ E o príncipe da casa paterna das famílias de Merari será Zuriel, filho de Abiail; acampar-se-ão ao lado do tabernáculo, para a banda do norte.
³⁶ E por designação da guarda dos filhos de Merari se darão as tábuas do tabernáculo, e os seus varais, e as suas colunas, e as suas bases, e todos os seus utensílios, com todo o seu serviço,
³⁷ e as colunas do pátio em redor, e as suas bases, e as suas estacas, e as suas cordas.
³⁸ E os que se acamparem diante do tabernáculo, para a banda do oriente, diante da tenda da congregação, para o nascente, serão Moisés e Arão, com seus filhos, tendo a guarda do santuário para guarda dos filhos de Israel; e o estranho que se chegar morrerá.
³⁹ Todos os contados dos levitas, que contou Moisés e Arão, por mandado do SENHOR, segundo as suas famílias, todo varão de um mês para cima, foram vinte e dois mil.
⁴⁰ E disse o SENHOR a Moisés: Conta todo primogênito varão dos filhos de Israel, da idade de um mês para cima, e toma o número dos seus nomes.
⁴¹ E para mim tomarás os levitas (eu sou o SENHOR) em lugar de todo primogênito dos filhos de Israel; e o gado dos levitas em lugar de todos os primogênitos entre o gado dos filhos de Israel.
⁴² E contou Moisés, como o SENHOR lhe ordenara, todos os primogênitos entre os filhos de Israel.
⁴³ E todos os primogênitos varões, pelo número dos nomes, da idade de um mês para cima, segundo os seus contados, foram vinte e dois mil duzentos e setenta e três.
⁴⁴ Falou mais o SENHOR a Moisés, dizendo:
⁴⁵ Toma os levitas em lugar de todo primogênito entre os filhos de Israel e o gado dos levitas em lugar do seu gado; porquanto os levitas serão meus. Eu sou o SENHOR.
⁴⁶ Por resgate, pois, dos duzentos e setenta e três que sobejam dos primogênitos dos filhos de Israel sobre os levitas,
⁴⁷ tomarás cinco siclos por cabeça; conforme o siclo do santuário os tomarás, a vinte geras o siclo.
⁴⁸ E darás a Arão e a seus filhos o dinheiro do resgate dos que sobejam entre eles.
⁴⁹ Então, Moisés tomou o dinheiro do resgate dos que sobejavam sobre os que foram resgatados pelos levitas.
⁵⁰ Dos primogênitos dos filhos de Israel tomou o dinheiro: mil trezentos e sessenta e cinco siclos, conforme o siclo do santuário.
⁵¹ E deu Moisés o dinheiro dos resgatados a Arão e a seus filhos, conforme o mandado do SENHOR, como o SENHOR ordenara a Moisés.`,

            // O DESAFIO
            pergunta: {
                texto: "Quem o SENHOR tomou para Si dentre os filhos de Israel, em lugar de todos os primogênitos que abrem a madre?",
                opcoes: [
                    { numero: 1, texto: "Os anciãos de cada tribo", correta: false },
                    { numero: 2, texto: "Os levitas", correta: true },
                    { numero: 3, texto: "Os filhos de Josué", correta: false },
                    { numero: 4, texto: "Os profetas do deserto", correta: false }
                ],
                explicacao: "Números 3:12 - O SENHOR declarou que os levitas seriam Seus em substituição aos primogênitos de Israel, para servirem no ministério do Tabernáculo.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 4 ---
        4: {
            titulo: "Os Deveres dos Coatitas, Gersonitas e Meraritas",
            subtitulo: "O transporte do Tabernáculo e os limites de idade para o serviço",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E falou o SENHOR a Moisés e a Arão, dizendo:
² Toma a soma dos filhos de Coate, do meio dos filhos de Levi, pelas suas famílias, segundo a casa de seus pais;
³ da idade de trinta anos para cima até aos cinquenta anos, de todos os que entram no serviço, para fazerem o trabalho na tenda da congregação.
⁴ Este será o serviço dos filhos de Coate na tenda da congregação: as coisas santíssimas.
⁵ E Arão e seus filhos virão, quando partir o arraial, e tirarão o véu do anteparo, e com ele cobrirão a arca do Testemunho.
⁶ E porão sobre ela uma coberta de peles de texugos, e estenderão por cima um pano, todo de azul, e lhe porão os seus varais.
⁷ Também sobre a mesa da proposição estenderão um pano de azul; e sobre ela porão os pratos, e as colheres, e as taças, e os jarros para as libações; também o pão contínuo estará sobre ela.
⁸ Depois, estenderão sobre eles um pano de carmesim e, com uma coberta de peles de texugos, o cobrirão e lhe porão os seus varais.
⁹ Então, tomarão um pano de azul e cobrirão o candelabro da luminária, e as suas lâmpadas, e os seus espevitadores, e os seus cinzeiros, e todos os seus vasos de azeite com que o servem.
¹⁰ E porão a ele e a todos os seus utensílios uma coberta de peles de texugos e o porão sobre os varais.
¹¹ E sobre o altar de ouro estenderão um pano de azul, e com uma coberta de peles de texugos o cobrirão, e lhe porão os seus varais.
¹² Também tomarão todos os utensílios do ministério com que ministram no santuário; e os porão num pano de azul, e os cobrirão com uma coberta de peles de texugos, e os porão sobre os varais.
¹³ E tirarão as cinzas do altar e sobre ele estenderão um pano de púrpura.
¹⁴ E sobre ele porão todos os seus utensílios com que o servem: os seus braseiros, os seus garfos, e as suas pás, e as suas bacias, todos os utensílios do altar; e sobre ele estenderão uma coberta de peles de texugos e lhe porão os seus varais.
¹⁵ Havendo, pois, Arão e seus filhos, ao partir do arraial, acabado de cobrir o santuário e todos os utensílios do santuário, então, os filhos de Coate virão para levá-lo; mas nas coisas santas não tocarão, para que não morram; este é o cargo dos filhos de Coate na tenda da congregação.
¹⁶ E o cargo de Eleazar, filho de Arão, o sacerdote, será o azeite da luminária, e o incenso aromático, e a oferta contínua de alimentos, e o óleo da unção; o cargo de todo o tabernáculo e de tudo o que nele há, ou no santuário, ou nos seus utensílios.
¹⁷ E falou o SENHOR a Moisés e a Arão, dizendo:
¹⁸ Não cortareis a tribo das famílias dos coatitas, do meio dos levitas;
¹⁹ para que vivam e não morram, chegando-se eles às coisas santíssimas: Arão e seus filhos virão e porão a cada um no seu serviço e no seu cargo.
²⁰ Mas os filhos de Coate não virão para ver, quando se envolverem as coisas santas, para que não morram.
²¹ Falou mais o SENHOR a Moisés, dizendo:
²² Toma a soma dos filhos de Gérson, também segundo a casa de seus pais, segundo as suas famílias;
²³ de trinta anos para cima até aos cinquenta anos os contarás, de todos os que entram no serviço, para fazerem o serviço na tenda da congregação.
²⁴ Este será o serviço das famílias dos gersonitas: para servirem e para levarem.
²⁵ Levarão, pois, as cortinas do tabernáculo, e a tenda da congregação, e a sua coberta, e a coberta de peles de texugos que está sobre ela, e o anteparo da porta da tenda da congregação,
²⁶ e as cortinas do pátio, e o anteparo da porta do pátio que está junto ao tabernáculo e junto ao altar em redor, e as suas cordas, e todos os utensílios com que o servem, e tudo o que para eles se fizer; assim servirão.
²⁷ Segundo o mandado de Arão e de seus filhos, será todo o serviço dos filhos dos gersonitas em toda a sua carga e em todo o seu serviço; e lhes designareis as suas guardas por toda a sua carga.
²⁸ Este é o serviço das famílias dos filhos dos gersonitas na tenda da congregação; e a sua guarda será pela mão de Itamar, filho de Arão, o sacerdote.
²⁹ Quanto aos filhos de Merari, os contarás segundo as suas famílias, segundo a casa de seus pais;
³⁰ de trinta anos para cima até aos cinquenta anos os contarás, de todos os que entram no serviço, para fazerem o serviço na tenda da congregação.
³¹ Este, pois, será o cargo da sua carga, segundo todo o seu serviço na tenda da congregação: as tábuas do tabernáculo, e os seus varais, e as suas colunas, e as suas bases;
³² e as colunas do pátio em redor, e as suas bases, e as suas estacas, e as suas cordas, com todos os seus utensílios e com todo o seu serviço; e pelos seus nomes contareis os utensílios do cargo da sua carga.
³³ Este é o serviço das famílias dos filhos de Merari, segundo todo o seu serviço na tenda da congregação, pela mão de Itamar, filho de Arão, o sacerdote.
³⁴ E Moisés, e Arão, e os príncipes da congregação contaram os filhos dos coatitas, segundo as suas famílias e segundo a casa de seus pais;
³⁵ de trinta anos para cima até aos cinquenta anos, de todos os que entravam no serviço para o trabalho na tenda da congregação;
³⁶ e foram os seus contados, segundo as suas famílias, dois mil setecentos e cinquenta.
³⁷ Estes são os contados das famílias dos coatitas, de todos os que serviam na tenda da congregação; os quais contaram Moisés e Arão, conforme o mandado do SENHOR, pela mão de Moisés.
³⁸ Semelhantemente os contados dos filhos de Gérson, segundo as suas famílias e segundo a casa de seus pais,
³⁹ de trinta anos para cima até aos cinquenta anos, de todos os que entravam no serviço para o trabalho na tenda da congregação;
⁴⁰ foram os seus contados, segundo as suas famílias, segundo a casa de seus pais, dois mil seiscentos e trinta.
⁴¹ Estes são os contados das famílias dos filhos de Gérson, de todos os que serviam na tenda da congregação; os quais contaram Moisés e Arão, conforme o mandado do SENHOR.
⁴² E os contados das famílias dos filhos de Merari, segundo as suas famílias, segundo a casa de seus pais,
⁴³ de trinta anos para cima até aos cinquenta anos, de todos os que entravam no serviço para o trabalho na tenda da congregação;
⁴⁴ foram os seus contados, segundo as suas famílias, três mil e duzentos.
⁴⁵ Estes são os contados das famílias dos filhos de Merari; os quais contaram Moisés e Arão, conforme o mandado do SENHOR, pela mão de Moisés.
⁴⁶ Todos os contados dos levitas, que contaram Moisés, e Arão, e os príncipes de Israel, segundo as suas famílias e segundo a casa de seus pais,
⁴⁷ de trinta anos para cima até aos cinquenta anos, de todos os que entravam a fazer o trabalho do serviço e o trabalho da carga na tenda da congregação;
⁴⁸ foram os seus contados oito mil quinhentos e oitenta.
⁴⁹ Conforme o mandado do SENHOR, pela mão de Moisés, os contou, a cada um segundo o seu serviço e conforme a sua carga; assim foram os contados dele, como o SENHOR ordenara a Moisés.`,

            // O DESAFIO
            pergunta: {
                texto: "Qual era a faixa etária estabelecida para os filhos de Coate que deveriam realizar o serviço de carregar as coisas santíssimas do Tabernáculo?",
                opcoes: [
                    { numero: 1, texto: "Dos 20 aos 50 anos", correta: false },
                    { numero: 2, texto: "Dos 30 aos 50 anos", correta: true },
                    { numero: 3, texto: "Dos 25 aos 60 anos", correta: false },
                    { numero: 4, texto: "Apenas após completarem 40 anos", correta: false }
                ],
                explicacao: "Números 4:2-3 - Para o trabalho pesado de transporte e montagem do Tabernáculo, o SENHOR estabeleceu que os levitas servissem no vigor de sua idade, dos 30 aos 50 anos.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 5 ---
        5: {
            titulo: "A Pureza do Arraial e a Prova do Ciúme",
            subtitulo: "A exclusão dos impuros e a lei sobre a infidelidade conjugal",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E falou o SENHOR a Moisés, dizendo:
² Ordena aos filhos de Israel que lancem fora do arraial a todo leproso, e a todo o que padece fluxo, e a todos os imundos por causa de algum morto.
³ Desde o homem até à mulher os lançareis; fora do arraial os lançareis, para que não contaminem os seus arraiais, no meio dos quais eu habito.
⁴ E os filhos de Israel fizeram assim e os lançaram fora do arraial; como o SENHOR falara a Moisés, assim fizeram os filhos de Israel.
⁵ Falou mais o SENHOR a Moisés, dizendo:
⁶ Fala aos filhos de Israel: Quando homem ou mulher fizer algum de todos os pecados humanos, cometendo transgressões contra o SENHOR, tal alma culpada é.
⁷ E confessarão o seu pecado que fizeram; então, restituirá pela sua culpa a sua soma total, e sobre ela acrescentará a sua quinta parte, e a dará àquele contra quem pecou.
⁸ Mas, se aquele homem não tiver resgatador, a quem se restitua a culpa, a culpa que se restituir ao SENHOR será do sacerdote, além do carneiro da expiação pelo qual se fizer expiação por ele.
⁹ Semelhantemente, toda oferta de todas as coisas santificadas dos filhos de Israel, que trouxerem ao sacerdote, será sua.
¹⁰ E as coisas santificadas de cada um serão suas; o que alguém der ao sacerdote será dele.
¹¹ Falou mais o SENHOR a Moisés, dizendo:
¹² Fala aos filhos de Israel e dize-lhes: Quando a mulher de alguém se desviar e cometer transgressão contra ele,
¹³ e algum homem se deitar com ela, e for oculto aos olhos de seu marido, e ela se tiver ocultado (sendo ela contaminada), e contra ela não houver testemunha, nem for apanhada no ato,
¹⁴ e o espírito de ciúmes vier sobre ele, e tiver ciúmes de sua mulher, por ela se haver contaminado, ou o espírito de ciúmes vier sobre ele, e tiver ciúmes de sua mulher, não se havendo ela contaminado,
¹⁵ então, aquele homem trará a sua mulher perante o sacerdote e trará a sua oferta por ela: uma décima de efa de farinha de cevada, sobre a qual não deitará azeite, nem sobre ela porá incenso, porquanto é oferta de manjares de ciúmes, oferta de memorização, que traz a iniquidade em memória.
¹⁶ E o sacerdote a fará chegar e a porá perante a face do SENHOR.
¹⁷ E o sacerdote tomará água santa num vaso de barro; também tomará o sacerdote do pó que houver no chão do tabernáculo e o deitará na água.
¹⁸ Então, o sacerdote apresentará a mulher perante o SENHOR e descobrirá a cabeça da mulher; e a oferta de manjares de memorização, que é a oferta de manjares de ciúmes, porá sobre as suas mãos, e a água amarga, que traz consigo a maldição, estará na mão do sacerdote.
¹⁹ E o sacerdote a fará jurar e dirá à mulher: Se ninguém se deitou contigo e se não te desviaste para a imundícia, apartando-te de teu marido, destas águas amargas, amaldiçoantes, serás livre.
²⁰ Mas, se te desviaste, apartando-te de teu marido, e se te contaminaste, e algum homem, fora de teu marido, se deitou contigo,
²¹ então, o sacerdote fará jurar a mulher com o juramento da maldição; e o sacerdote dirá à mulher: O SENHOR te ponha por maldição e por juramento no meio do teu povo, fazendo o SENHOR que se te trespasse a coxa e que se te inche o ventre;
²² e esta água amaldiçoante entre nas tuas entranhas, para te fazer inchar o ventre e te fazer traspassar a coxa. Então, a mulher dirá: Amém! Amém!
²³ Depois, o sacerdote escreverá estas maldições num livro e com a água amarga as apagará.
²⁴ E a água amarga, amaldiçoante, dará a beber à mulher; e a água amaldiçoante entrará nela para amargor.
²⁵ E o sacerdote tomará a oferta de manjares de ciúmes da mão da mulher, e moverá a oferta de manjares perante o SENHOR, e a trará ao altar.
²⁶ Também o sacerdote tomará um punhado da oferta de manjares, da sua memorização, e sobre o altar o queimará; e, depois, dará a beber a água à mulher.
²⁷ E, havendo-lhe dado a beber aquela água, acontecerá que, se ela se tiver contaminado e contra seu marido tiver cometido transgressão, a água amaldiçoante entrará nela para amargor, e o seu ventre se inchará, e a sua coxa se traspassará; e aquela mulher será por maldição no meio do seu povo.
²⁸ E, se a mulher se não tiver contaminado, mas estiver limpa, então, será livre e conceberá semente.
²⁹ Esta é a lei dos ciúmes, quando a mulher, em poder de seu marido, se desviar e se contaminar;
³⁰ ou quando sobre o homem vier o espírito de ciúmes, e tiver ciúmes de sua mulher, apresente a mulher perante o SENHOR, e o sacerdote nela execute toda esta lei.
³¹ E o homem será livre da iniquidade, mas a mulher levará a sua iniquidade.`,

            // O DESAFIO
            pergunta: {
                texto: "Na 'lei dos ciúmes', o que o sacerdote deveria dar para a mulher beber para provar sua inocência ou culpa?",
                opcoes: [
                    { numero: 1, texto: "Vinho misturado com mel", correta: false },
                    { numero: 2, texto: "Água amarga que traz a maldição (com pó do chão do tabernáculo)", correta: true },
                    { numero: 3, texto: "Azeite santo de unção", correta: false },
                    { numero: 4, texto: "Sangue de um cordeiro imolado", correta: false }
                ],
                explicacao: "Números 5:17-24 - O ritual envolvia água santa em um vaso de barro misturada com o pó do chão do tabernáculo e as palavras da maldição escritas e apagadas na água.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 6 ---
        6: {
            titulo: "O Voto de Nazireado e a Bênção Sacerdotal",
            subtitulo: "A consagração especial e a oração de Arão sobre os filhos de Israel",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Falou mais o SENHOR a Moisés, dizendo:
² Fala aos filhos de Israel e dize-lhes: Quando um homem ou mulher se tiver separado, fazendo voto de nazireu, para se separar para o SENHOR,
³ de vinho e de bebida forte se apartará; vinagre de vinho ou vinagre de bebida forte não beberá; nem beberá alguma beberagem de uvas; nem uvas frescas nem secas comerá.
⁴ Todos os dias do seu nazireato, não comerá de coisa alguma que se faz da vinha, desde os caroços até às cascas.
⁵ Todos os dias do voto do seu nazireato, navalha não passará sobre a sua cabeça; até que se cumpram os dias em que se separou para o SENHOR, santo será, deixando crescer as guedelhas do cabelo da sua cabeça.
⁶ Todos os dias em que se separar para o SENHOR, não chegará a corpo morto.
⁷ Por seu pai, ou por sua mãe, por seu irmão, ou por sua irmã, por eles se não contaminará, quando morrerem; porquanto o nazireato do seu Deus está sobre a sua cabeça.
⁸ Todos os dias do seu nazireato, santo será ao SENHOR.
⁹ E, se alguém morrer junto a ele subitamente, e contaminar a cabeça do seu nazireato, então, no dia da sua purificação, rapará a sua cabeça, ao sétimo dia a rapará.
¹⁰ E, ao oitavo dia, trará duas rolas ou dois pombinhos ao sacerdote, à porta da tenda da congregação;
¹¹ e o sacerdote oferecerá um para expiação do pecado e o outro para holocausto; e fará expiação por ele, do que pecou no corpo morto; assim, naquele mesmo dia, santificará a sua cabeça.
¹² Então, separará os dias do seu nazireato ao SENHOR e para expiação da culpa trará um cordeiro de um ano; e os dias antecedentes serão perdidos, porquanto o seu nazireato foi contaminado.
¹³ E esta é a lei do nazireu: no dia em que se cumprirem os dias do seu nazireato, trá-lo-ão à porta da tenda da congregação.
¹⁴ E ele oferecerá a sua oferta ao SENHOR, um cordeiro de um ano, sem defeito, em holocausto, e uma cordeira de um ano, sem defeito, para expiação do pecado, e um carneiro sem defeito por oferta pacífica;
¹⁵ e um cesto de pães asmos, bolos de flor de farinha amassados com azeite e coscorões asmos untados com azeite, com a sua oferta de manjares e as suas libações.
¹⁶ E o sacerdote os trará perante o SENHOR e oferecerá a sua expiação do pecado e o seu holocausto;
¹⁷ e oferecerá o carneiro em sacrifício pacífico ao SENHOR, com o cesto dos pães asmos; e o sacerdote oferecerá a sua oferta de manjares e a sua libação.
¹⁸ Então, o nazireu, à porta da tenda da congregação, rapará a cabeça do seu nazireato, e tomará o cabelo da cabeça do seu nazireato, e o porá sobre o fogo que está debaixo do sacrifício pacífico.
¹⁹ Depois, o sacerdote tomará a espádua cozida do carneiro, e um bolo asmo do cesto, e um coscorão asmo e os porá nas mãos do nazireu, depois de haver rapado a cabeça do seu nazireato.
²⁰ E o sacerdote os moverá por oferta de movimento perante o SENHOR; isto é santo para o sacerdote, juntamente com o peito da oferta de movimento e com a espádua da oferta alçada; e, depois, o nazireu pode beber vinho.
²¹ Esta é a lei do nazireu que fizer voto da sua oferta ao SENHOR pelo seu nazireato, além do que suas posses alcançarem; segundo o seu voto, que fizer, assim fará conforme a lei do seu nazireato.
²² E falou o SENHOR a Moisés, dizendo:
²³ Fala a Arão e a seus filhos, dizendo: Assim abençoareis os filhos de Israel, dizendo-lhes:
²⁴ O SENHOR te abençoe e te guarde;
²⁵ o SENHOR faça resplandecer o seu rosto sobre ti e tenha misericórdia de ti;
²⁶ o SENHOR sobre ti levante o seu rosto e te dê a paz.
²⁷ Assim, porão o meu nome sobre os filhos de Israel, e eu os abençoarei.`,

            // O DESAFIO
            pergunta: {
                texto: "Quais eram as três restrições principais impostas a quem fizesse um voto de nazireu para se separar ao SENHOR?",
                opcoes: [
                    { numero: 1, texto: "Não comer carne, não beber água e não dormir", correta: false },
                    { numero: 2, texto: "Não beber vinho ou produtos da videira, não passar navalha na cabeça e não se aproximar de um cadáver", correta: true },
                    { numero: 3, texto: "Não falar com estrangeiros, não vestir linho e não comer mel", correta: false },
                    { numero: 4, texto: "Não sair do tabernáculo, não casar e não possuir bens", correta: false }
                ],
                explicacao: "Números 6:3-7 - O nazireu era alguém consagrado de forma única. A abstinência de vinho, o cabelo comprido e a pureza em relação aos mortos simbolizavam sua separação total para Deus.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 7 ---
        // --- INÍCIO DO CAPÍTULO 7 ---
        7: {
            titulo: "As ofertas dos príncipes para a dedicação do Tabernáculo",
            subtitulo: "A generosidade das tribos e a organização do transporte sagrado",

            texto: `
¹ E aconteceu que, no dia em que Moisés acabou de levantar o tabernáculo, e o ungiu, e o santificou, e todos os seus utensílios, e também o altar e todos os seus pertences, e os ungiu e santificou,
² os príncipes de Israel, os cabeças da casa de seus pais, que eram os príncipes das tribos, que estavam sobre os que foram contados, ofereceram,
³ e trouxeram a sua oferta perante o SENHOR: seis carros cobertos e doze bois; por dois príncipes, um carro, e para cada um, um boi; e os trouxeram diante do tabernáculo.
⁴ E falou o SENHOR a Moisés, dizendo:
⁵ Toma-os deles, e serão para servir no ministério da tenda da congregação; e os darás aos levitas, a cada qual segundo o seu ministério.
⁶ Assim, Moisés tomou os carros e os bois e os deu aos levitas.
⁷ Dois carros e quatro bois deu aos filhos de Gérson, segundo o seu ministério;
⁸ e quatro carros e oito bois deu aos filhos de Merari, segundo o seu ministério, debaixo da mão de Itamar, filho de Arão, o sacerdote.
⁹ Mas aos filhos de Coate nada deu, porquanto a seu cargo estava o santuário, e o levavam aos ombros.
¹⁰ E ofereceram os príncipes para a dedicação do altar, no dia em que foi ungido; ofereceram, pois, os príncipes a sua oferta diante do altar.
¹¹ E disse o SENHOR a Moisés: Cada príncipe oferecerá a sua oferta no seu dia, para a dedicação do altar.
¹² O que, pois, no primeiro dia ofereceu a sua oferta foi Naassom, filho de Aminadabe, pela tribo de Judá.
¹³ E a sua oferta foi um prato de prata do peso de cento e trinta siclos, uma bacia de prata de setenta siclos, segundo o siclo do santuário; ambos cheios de flor de farinha, amassada com azeite, para oferta de manjares;
¹⁴ uma taça de dez siclos de ouro, cheia de incenso;
¹⁵ um novilho, um carneiro, um cordeiro de um ano, para holocausto;
¹⁶ um bode, para expiação do pecado;
¹⁷ e, para sacrifício pacífico, dois bois, cinco carneiros, cinco bodes, cinco cordeiros de um ano; esta foi a oferta de Naassom, filho de Aminadabe.
¹⁸ No segundo dia ofereceu Natanael, filho de Zuar, príncipe de Issacar.
¹⁹ E a sua oferta foi um prato de prata do peso de cento e trinta siclos, uma bacia de prata de setenta siclos, segundo o siclo do santuário; ambos cheios de flor de farinha, amassada com azeite, para oferta de manjares;
²⁰ uma taça de dez siclos de ouro, cheia de incenso;
²¹ um novilho, um carneiro, um cordeiro de um ano, para holocausto;
²² um bode, para expiação do pecado;
²³ e, para sacrifício pacífico, dois bois, cinco carneiros, cinco bodes, cinco cordeiros de um ano; esta foi a oferta de Natanael, filho de Zuar.
²⁴ No terceiro dia ofereceu o príncipe dos filhos de Zebulom, Eliabe, filho de Helom.
²⁵ A sua oferta foi um prato de prata do peso de cento e trinta siclos, uma bacia de prata de setenta siclos, segundo o siclo do santuário; ambos cheios de flor de farinha, amassada com azeite, para oferta de manjares;
²⁶ uma taça de dez siclos de ouro, cheia de incenso;
²⁷ um novilho, um carneiro, um cordeiro de um ano, para holocausto;
²⁸ um bode, para expiação do pecado;
²⁹ e, para sacrifício pacífico, dois bois, cinco carneiros, cinco bodes, cinco cordeiros de um ano; esta foi a oferta de Eliabe, filho de Helom.
³⁰ No quarto dia ofereceu o príncipe dos filhos de Rúben, Elizur, filho de Sedeur.
³¹ A sua oferta foi um prato de prata do peso de cento e trinta siclos, uma bacia de prata de setenta siclos, segundo o siclo do santuário; ambos cheios de flor de farinha, amassada com azeite, para oferta de manjares;
³² uma taça de dez siclos de ouro, cheia de incenso;
³³ um novilho, um carneiro, um cordeiro de um ano, para holocausto;
³⁴ um bode, para expiação do pecado;
³⁵ e, para sacrifício pacífico, dois bois, cinco carneiros, cinco bodes, cinco cordeiros de um ano; esta foi a oferta de Elizur, filho de Sedeur.
³⁶ No quinto dia ofereceu o príncipe dos filhos de Simeão, Selumiel, filho de Zurisadai.
³⁷ A sua oferta foi um prato de prata do peso de cento e trinta siclos, uma bacia de prata de setenta siclos, segundo o siclo do santuário; ambos cheios de flor de farinha, amassada com azeite, para oferta de manjares;
³⁸ uma taça de dez siclos de ouro, cheia de incenso;
³⁹ um novilho, um carneiro, um cordeiro de um ano, para holocausto;
⁴⁰ um bode, para expiação do pecado;
⁴¹ e, para sacrifício pacífico, dois bois, cinco carneiros, cinco bodes, cinco cordeiros de um ano; esta foi a oferta de Selumiel, filho de Zurisadai.
⁴² No sexto dia ofereceu o príncipe dos filhos de Gade, Eliasafe, filho de Deuel.
⁴³ A sua oferta foi um prato de prata do peso de cento e trinta siclos, uma bacia de prata de setenta siclos, segundo o siclo do santuário; ambos cheios de flor de farinha, amassada com azeite, para oferta de manjares;
⁴⁴ uma taça de dez siclos de ouro, cheia de incenso;
⁴⁵ um novilho, um carneiro, um cordeiro de um ano, para holocausto;
⁴⁶ um bode, para expiação do pecado;
⁴⁷ e, para sacrifício pacífico, dois bois, cinco carneiros, cinco bodes, cinco cordeiros de um ano; esta foi a oferta de Eliasafe, filho de Deuel.
⁴⁸ No sétimo dia ofereceu o príncipe dos filhos de Efraim, Elisama, filho de Amiúde.
⁴⁹ A sua oferta foi um prato de prata do peso de cento e trinta siclos, uma bacia de prata de setenta siclos, segundo o siclo do santuário; ambos cheios de flor de farinha, amassada com azeite, para oferta de manjares;
⁵⁰ uma taça de dez siclos de ouro, cheia de incenso;
⁵¹ um novilho, um carneiro, um cordeiro de um ano, para holocausto;
⁵² um bode, para expiação do pecado;
⁵³ e, para sacrifício pacífico, dois bois, cinco carneiros, cinco bodes, cinco cordeiros de um ano; esta foi a oferta de Elisama, filho de Amiúde.
⁵⁴ No oitavo dia ofereceu o príncipe dos filhos de Manassés, Gamaliel, filho de Pedazur.
⁵⁵ A sua oferta foi um prato de prata do peso de cento e trinta siclos, uma bacia de prata de setenta siclos, segundo o siclo do santuário; ambos cheios de flor de farinha, amassada com azeite, para oferta de manjares;
⁵⁶ uma taça de dez siclos de ouro, cheia de incenso;
⁵⁷ um novilho, um carneiro, um cordeiro de um ano, para holocausto;
⁵⁸ um bode, para expiação do pecado;
⁵⁹ e, para sacrifício pacífico, dois bois, cinco carneiros, cinco bodes, cinco cordeiros de um ano; esta foi a oferta de Gamaliel, filho de Pedazur.
⁶⁰ No nono dia ofereceu o príncipe dos filhos de Benjamim, Abidã, filho de Gideoni.
⁶¹ A sua oferta foi um prato de prata do peso de cento e trinta siclos, uma bacia de prata de setenta siclos, segundo o siclo do santuário; ambos cheios de flor de farinha, amassada com azeite, para oferta de manjares;
⁶² uma taça de dez siclos de ouro, cheia de incenso;
⁶³ um novilho, um carneiro, um cordeiro de um ano, para holocausto;
⁶⁴ um bode, para expiação do pecado;
⁶⁵ e, para sacrifício pacífico, dois bois, cinco carneiros, cinco bodes, cinco cordeiros de um ano; esta foi a oferta de Abidã, filho de Gideoni.
⁶⁶ No décimo dia ofereceu o príncipe dos filhos de Dã, Aiezer, filho de Amisadai.
⁶⁷ A sua oferta foi um prato de prata do peso de cento e trinta siclos, uma bacia de prata de setenta siclos, segundo o siclo do santuário; ambos cheios de flor de farinha, amassada com azeite, para oferta de manjares;
⁶⁸ uma taça de dez siclos de ouro, cheia de incenso;
⁶⁹ um novilho, um carneiro, um cordeiro de um ano, para holocausto;
⁷⁰ um bode, para expiação do pecado;
⁷¹ e, para sacrifício pacífico, dois bois, cinco carneiros, cinco bodes, cinco cordeiros de um ano; esta foi a oferta de Aiezer, filho de Amisadai.
⁷² No undécimo dia ofereceu o príncipe dos filhos de Aser, Pagiel, filho de Ocrã.
⁷³ A sua oferta foi um prato de prata do peso de cento e trinta siclos, uma bacia de prata de setenta siclos, segundo o siclo do santuário; ambos cheios de flor de farinha, amassada com azeite, para oferta de manjares;
⁷⁴ uma taça de dez siclos de ouro, cheia de incenso;
⁷⁵ um novilho, um carneiro, um cordeiro de um ano, para holocausto;
⁷⁶ um bode, para expiação do pecado;
⁷⁷ e, para sacrifício pacífico, dois bois, cinco carneiros, cinco bodes, cinco cordeiros de um ano; esta foi a oferta de Pagiel, filho de Ocrã.
⁷⁸ No duodécimo dia ofereceu o príncipe dos filhos de Naftali, Airá, filho de Enã.
⁷⁹ A sua oferta foi um prato de prata do peso de cento e trinta siclos, uma bacia de prata de setenta siclos, segundo o siclo do santuário; ambos cheios de flor de farinha, amassada com azeite, para oferta de manjares;
⁸⁰ uma taça de dez siclos de ouro, cheia de incenso;
⁸¹ um novilho, um carneiro, um cordeiro de um ano, para holocausto;
⁸² um bode, para expiação do pecado;
⁸³ e, para sacrifício pacífico, dois bois, cinco carneiros, cinco bodes, cinco cordeiros de um ano; esta foi a oferta de Airá, filho de Enã.
⁸⁴ Esta foi a consagração do altar, feita pelos príncipes de Israel, no dia em que foi ungido: doze pratos de prata, doze bacias de prata, doze taças de ouro;
⁸⁵ cada prato de prata de cento e trinta siclos, e cada bacia de setenta; toda a prata dos vasos foi dois mil e quatrocentos siclos, segundo o siclo do santuário;
⁸⁶ doze taças de ouro cheias de incenso, cada taça de dez siclos, segundo o siclo do santuário; todo o ouro das taças foi de cento e vinte siclos;
⁸⁷ todos os animais para holocausto foram doze novilhos, doze carneiros, doze cordeiros de um ano, com a sua oferta de manjares, e doze bodes para expiação do pecado;
⁸⁸ e todos os animais para sacrifício pacífico foram vinte e quatro novilhos, sessenta carneiros, sessenta bodes, sessenta cordeiros de um ano; esta foi a consagração do altar, depois que foi ungido.
⁸⁹ E, quando Moisés entrava na tenda da congregação para falar com o SENHOR, então ouvia a voz que lhe falava de cima do propiciatório, que estava sobre a arca do testemunho entre os dois querubins; assim ele lhe falava.
`,

            // O DESAFIO
            pergunta: {
                texto: "Durante quantos dias os príncipes de Israel trouxeram suas ofertas para a dedicação do altar, apresentando um príncipe a cada dia?",
                opcoes: [
                    { numero: 1, texto: "Por sete dias", correta: false },
                    { numero: 2, texto: "Por dez dias", correta: false },
                    { numero: 3, texto: "Por doze dias", correta: true },
                    { numero: 4, texto: "Por quarenta dias", correta: false }
                ],
                explicacao: "Números 7:11-84 - Cada uma das doze tribos, representada por seu príncipe, trouxe ofertas idênticas de prata, ouro, animais e incenso ao longo de doze dias consecutivos.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 8 ---
        // --- INÍCIO DO CAPÍTULO 8 ---
        8: {
            titulo: "As Lâmpadas e a Consagração dos Levitas",
            subtitulo: "A iluminação do Candelabro e a purificação dos servos do Tabernáculo",

            texto: `
¹ E falou o SENHOR a Moisés, dizendo:
² Fala a Arão, e dize-lhe: Quando acenderes as lâmpadas, as sete lâmpadas alumiarão para o espaço em frente do candelabro.
³ E Arão fez assim; para o espaço em frente do candelabro acendeu as suas lâmpadas, como o SENHOR ordenara a Moisés.
⁴ E era esta a obra do candelabro, de ouro batido; desde o seu pé até às suas flores era de ouro batido; conforme ao modelo que o SENHOR mostrara a Moisés, assim ele fez o candelabro.
⁵ E falou o SENHOR a Moisés, dizendo:
⁶ Toma os levitas do meio dos filhos de Israel, e purifica-os;
⁷ e assim lhes farás, para os purificar: Esparge sobre eles a água da expiação; e sobre toda a sua carne farão passar a navalha, e lavarão as suas vestes, e se purificarão.
⁸ Então tomarão um novilho, com a sua oferta de manjares de flor de farinha amassada com azeite; e tomarás outro novilho para expiação do pecado.
⁹ E farás chegar os levitas perante a tenda da congregação; e ajuntarás toda a congregação dos filhos de Israel.
¹⁰ Farás, pois, chegar os levitas perante o SENHOR; e os filhos de Israel porão as suas mãos sobre os levitas.
¹¹ E Arão oferecerá os levitas por oferta de movimento perante o SENHOR, da parte dos filhos de Israel; e serão para servirem no ministério do SENHOR.
¹² E os levitas porão as suas mãos sobre a cabeça dos novilhos; então sacrifica tu um para expiação do pecado, e o outro para holocausto ao SENHOR, para fazer expiação pelos levitas.
¹³ E porás os levitas perante Arão, e perante os seus filhos, e os oferecerás por oferta de movimento ao SENHOR.
¹⁴ E separarás os levitas do meio dos filhos de Israel, para que os levitas sejam meus.
¹⁵ E depois disso os levitas entrarão para servirem na tenda da congregação; e tu os purificarás, e por oferta de movimento os oferecerás.
¹⁶ Porquanto eles me são dados de presente do meio dos filhos de Israel; em lugar de todo aquele que abre a madre, do primogênito de cada um dos filhos de Israel, para mim os tomei.
¹⁷ Porque meu é todo o primogênito entre os filhos de Israel, tanto dos homens como dos animais; no dia em que, na terra do Egito, feri a todo o primogênito, os santifiquei para mim.
¹⁸ E tomei os levitas em lugar de todo o primogênito entre os filhos de Israel.
¹⁹ E os levitas, dados em presente a Arão e a seus filhos, do meio dos filhos de Israel, entreguei para exercerem o ministério dos filhos de Israel na tenda da congregação, e para fazerem expiação pelos filhos de Israel, para que não haja praga entre os filhos de Israel, chegando-se os filhos de Israel ao santuário.
²⁰ E assim fizeram Moisés e Arão, e toda a congregação dos filhos de Israel, com os levitas; conforme a tudo o que o SENHOR ordenara a Moisés no tocante aos levitas, assim os filhos de Israel lhes fizeram.
²¹ E os levitas se purificaram, e lavaram as suas vestes, e Arão os ofereceu por oferta de movimento perante o SENHOR, e Arão fez expiação por eles, para purificá-los.
²² E depois disso entraram os levitas, para exercerem o seu ministério na tenda da congregação, perante Arão e perante os seus filhos; como o SENHOR ordenara a Moisés acerca dos levitas, assim lhes fizeram.
²³ E falou o SENHOR a Moisés, dizendo:
²⁴ Isto é o que pertence aos levitas: Da idade de vinte e cinco anos para cima entrarão para servirem no ministério da tenda da congregação;
²⁵ mas desde a idade de cinquenta anos sairão do serviço do ministério, e nunca mais servirão;
²⁶ porém com os seus irmãos servirão na tenda da congregação, para guardarem o que lhes está entregue; mas o ministério não exercerão; assim farás com os levitas quanto aos seus deveres.
`,

            // O DESAFIO
            pergunta: {
                texto: "Ao preparar as sete lâmpadas do candelabro de ouro batido, para qual direção Arão deveria fazer com que elas alumiassem?",
                opcoes: [
                    { numero: 1, texto: "Para o teto do Tabernáculo", correta: false },
                    { numero: 2, texto: "Para o espaço em frente ao candelabro", correta: true },
                    { numero: 3, texto: "Para a Arca da Aliança", correta: false },
                    { numero: 4, texto: "Para a porta de entrada", correta: false }
                ],
                explicacao: "Números 8:2-3 - O SENHOR instruiu que as sete lâmpadas fossem posicionadas de modo a iluminar o espaço à frente do candelabro, garantindo luz contínua no Lugar Santo.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 9 ---
        9: {
            titulo: "A Segunda Páscoa e a Nuvem Guia",
            subtitulo: "A celebração no deserto e o sinal para marchar ou acampar",

            texto: `
¹ E falou o SENHOR a Moisés no deserto de Sinai, no ano segundo da sua saída da terra do Egito, no primeiro mês, dizendo:
² Celebrem os filhos de Israel a páscoa a seu tempo determinado.
³ No dia catorze deste mês, pela tarde, a seu tempo determinado a celebrareis; segundo todos os seus estatutos, e segundo todos os seus ritos, a celebrareis.
⁴ Falou, pois, Moisés aos filhos de Israel que celebrassem a páscoa.
⁵ Então celebraram a páscoa no dia catorze do primeiro mês, pela tarde, no deserto de Sinai; conforme a tudo o que o SENHOR ordenara a Moisés, assim fizeram os filhos de Israel.
⁶ E houve alguns que estavam imundos por causa do corpo de um homem morto, e não podiam celebrar a páscoa naquele dia; por isso chegaram-se perante Moisés e perante Arão naquele mesmo dia;
⁷ e aqueles homens disseram-lhe: Imundos estamos nós pelo corpo de um homem morto; por que seríamos privados de oferecer a oferta do SENHOR a seu tempo determinado no meio dos filhos de Israel?
⁸ E disse-lhes Moisés: Esperai, e ouvirei o que o SENHOR ordenará de vós.
⁹ Então falou o SENHOR a Moisés, dizendo:
¹⁰ Fala aos filhos de Israel, dizendo: Quando algum de vós, ou das vossas gerações, for imundo por causa de corpo morto, ou se achar em jornada longe de vós, contudo ainda celebrará a páscoa ao SENHOR.
¹¹ No segundo mês, no dia catorze à tarde, a celebrarão; com pães ázimos e ervas amargas a comerão.
¹² Dela nada deixarão até à manhã, e dela não quebrarão osso algum; segundo todo o estatuto da páscoa a celebrarão.
¹³ Porém o homem que for limpo, e não estiver em jornada, e deixar de celebrar a páscoa, a tal alma será extirpada do seu povo; porquanto não ofereceu a oferta do SENHOR a seu tempo determinado; tal homem levará o seu pecado.
¹⁴ E, quando um estrangeiro peregrinar entre vós, e também celebrar a páscoa ao SENHOR, segundo o estatuto da páscoa e segundo o seu rito a celebrará; um mesmo estatuto haverá para vós, assim para o estrangeiro como para o natural da terra.
¹⁵ E no dia em que foi levantado o tabernáculo, a nuvem cobriu o tabernáculo sobre a tenda do testemunho; e à tarde estava sobre o tabernáculo com uma aparência de fogo até à manhã.
¹⁶ Assim era de contínuo: a nuvem o cobria, e de noite havia aparência de fogo.
¹⁷ Mas sempre que a nuvem se levantava de sobre a tenda, os filhos de Israel partiam; e no lugar onde a nuvem parava, ali os filhos de Israel se acampavam.
¹⁸ Segundo a ordem do SENHOR, os filhos de Israel partiam, e segundo a ordem do SENHOR se acampavam; todos os dias em que a nuvem parava sobre o tabernáculo, ficavam acampados.
¹⁹ E, quando a nuvem se detinha muitos dias sobre o tabernáculo, então os filhos de Israel cumpriam o mandado do SENHOR, e não partiam.
²⁰ E, quando a nuvem ficava poucos dias sobre o tabernáculo, segundo a ordem do SENHOR se acampavam, e segundo a ordem do SENHOR partiam.
²¹ E, quando a nuvem ficava desde a tarde até à manhã, e a nuvem se levantava pela manhã, então partiam; quer de dia quer de noite que a nuvem se levantasse, partiam.
²² Ou quando a nuvem sobre o tabernáculo se detinha dois dias, ou um mês, ou um ano, ficando sobre ele, então os filhos de Israel se acampavam, e não partiam; e, levantando-se ela, partiam.
²³ Segundo a ordem do SENHOR se acampavam, e segundo a ordem do SENHOR partiam; cumpriam o mandado do SENHOR, conforme à ordem do SENHOR pela mão de Moisés.
`,

            // O DESAFIO
            pergunta: {
                texto: "O que o SENHOR determinou para as pessoas que estivessem impuras ou em viagem e não pudessem celebrar a Páscoa no tempo determinado?",
                opcoes: [
                    { numero: 1, texto: "Ficariam proibidas de celebrar a Páscoa naquele ano", correta: false },
                    { numero: 2, texto: "Deveriam celebrá-la no mês seguinte, no dia quatorze", correta: true },
                    { numero: 3, texto: "Deveriam pagar uma multa ao tabernáculo", correta: false },
                    { numero: 4, texto: "Poderiam celebrar em qualquer dia, individualmente", correta: false }
                ],
                explicacao: "Números 9:10-11 - Deus estabeleceu a 'Segunda Páscoa' no segundo mês, garantindo que mesmo os impedidos por motivos legítimos pudessem cumprir o estatuto sagrado.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 10 ---
        10: {
            titulo: "As Trombetas de Prata e a Partida do Sinai",
            subtitulo: "O sinal para a convocação e o início da jornada rumo a Canaã",

            texto: `
¹ Falou mais o SENHOR a Moisés, dizendo:
² Faze-te duas trombetas de prata; de obra batida as farás, e elas te servirão para a convocação da congregação, e para a partida dos arraiais.
³ E, quando as tocarem, toda a congregação se ajuntará a ti à porta da tenda da congregação.
⁴ Mas, quando tocar uma só, a ti se congregarão os príncipes, os cabeças dos milhares de Israel.
⁵ Quando tocardes a rebate, partirão os arraiais que estão acampados do lado do oriente.
⁶ Mas, quando a segunda vez tocardes a rebate, partirão os arraiais que estão acampados do lado do sul; a rebate tocarão para as suas partidas.
⁷ Porém, ajuntando a congregação, tocarão, mas não a rebate.
⁸ E os filhos de Arão, sacerdotes, tocarão as trombetas; e isto vos será por estatuto perpétuo nas vossas gerações.
⁹ E, quando na vossa terra sairdes a pelejar contra o inimigo, que vos oprimir, também tocarão a rebate com as trombetas, e perante o SENHOR vosso Deus haverá memória de vós, e sereis salvos de vossos inimigos.
¹⁰ Semelhantemente, no dia da vossa alegria e nas vossas solemnidades, e nos princípios dos vossos meses, também tocarão as trombetas sobre os vossos holocaustos, e sobre os sacrifícios das vossas ofertas pacíficas, e vos serão por memória diante de vosso Deus: Eu sou o SENHOR vosso Deus.
¹¹ E aconteceu no ano segundo, no mês segundo, aos vinte do mês, que a nuvem se levantou de sobre o tabernáculo do testemunho.
¹² E os filhos de Israel partiram das suas jornadas do deserto de Sinai; e a nuvem parou no deserto de Parã.
¹³ Assim partiram pela primeira vez segundo a ordem do SENHOR pela mão de Moisés.
¹⁴ Porque primeiramente partiu o esquadrão do arraial dos filhos de Judá segundo os seus exércitos; e sobre o seu exército estava Naassom, filho de Aminadabe.
¹⁵ E sobre o exército da tribo dos filhos de Issacar, Natanael, filho de Zuar.
¹⁶ E sobre o exército da tribo dos filhos de Zebulom, Eliabe, filho de Helom.
¹⁷ Então desarmaram o tabernáculo, e os filhos de Gérson e os filhos de Merari partiram, levando o tabernáculo.
¹⁸ Depois partiu o esquadrão do arraial de Rúben segundo os seus exércitos; e sobre o seu exército estava Elizur, filho de Sedeur.
¹⁹ E sobre o exército da tribo dos filhos de Simeão, Selumiel, filho de Zurisadai.
²⁰ E sobre o exército da tribo dos filhos de Gade, Eliasafe, filho de Deuel.
²¹ Então partiram os coatitas, levando o santuário; e os outros levantavam o tabernáculo, até que estes viessem.
²² Depois partiu o esquadrão do arraial dos filhos de Efraim segundo os seus exércitos; e sobre o seu exército estava Elisama, filho de Amiúde.
²³ E sobre o exército da tribo dos filhos de Manassés, Gamaliel, filho de Pedazur.
²⁴ E sobre o exército da tribo dos filhos de Benjamim, Abidã, filho de Gideoni.
²⁵ Então partiu o esquadrão do arraial dos filhos de Dã, a retaguarda de todos os arraiais, segundo os seus exércitos; e sobre o seu exército estava Aiezer, filho de Amisadai.
²⁶ E sobre o exército da tribo dos filhos de Aser, Pagiel, filho de Ocrã.
²⁷ E sobre o exército da tribo dos filhos de Naftali, Airá, filho de Enã.
²⁸ Assim eram as partidas dos filhos de Israel segundo os seus exércitos, quando partiam.
²⁹ Disse então Moisés a Hobabe, filho de Reuel, o midianita, sogro de Moisés: Nós caminhamos para aquele lugar de que o SENHOR disse: Vo-lo darei; vai conosco e te faremos bem; porque o SENHOR falou bem sobre Israel.
³⁰ Porém ele lhe disse: Não irei; antes irei à minha terra e à minha parentela.
³¹ E disse ele: Ora, não nos deixes; porque tu sabes como acampamos no deserto; e nos servirás de guia.
³² E há de ser que, vindo tu conosco, e sucedendo o bem que o SENHOR nos fizer, também nós te faremos bem.
³³ Assim partiram do monte do SENHOR caminho de três dias; e a arca da aliança do SENHOR partiu diante deles caminho de três dias, para lhes buscar lugar de descanso.
³⁴ E a nuvem do SENHOR ia sobre eles de dia, quando partiam do arraial.
³⁵ Acontecendo, pois, que, partindo a arca, Moisés dizia: Levanta-te, SENHOR, e dissipados sejam os teus inimigos, e fujam diante de ti os que te odeiam.
³⁶ E, pousando ela, dizia: Volta, ó SENHOR, para os muitos milhares de Israel.
`,

            // O DESAFIO
            pergunta: {
                texto: "Para que finalidade específica o SENHOR ordenou a Moisés que fizesse duas trombetas de prata de obra batida?",
                opcoes: [
                    { numero: 1, texto: "Apenas para tocar durante os sacrifícios", correta: false },
                    { numero: 2, texto: "Para a convocação da congregação e para a partida dos arraiais", correta: true },
                    { numero: 3, texto: "Para anunciar a chegada de estrangeiros", correta: false },
                    { numero: 4, texto: "Para comemorar o aniversário de Moisés", correta: false }
                ],
                explicacao: "Números 10:2 - As trombetas de prata eram instrumentos de comunicação divina e militar, servindo para organizar o movimento e as assembleias de Israel.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 11 ---
        11: {
            titulo: "O Fogo de Taberá e a Reclamação pela Carne",
            subtitulo: "A murmuração do povo, os setenta anciãos e as codornizes",

            texto: `
¹ E aconteceu que, queixando-se o povo, era mal aos ouvidos do SENHOR; porque o SENHOR ouviu-o, e a sua ira se acendeu, e o fogo do SENHOR ardeu entre eles e consumiu os que estavam na última parte do arraial.
² Então o povo clamou a Moisés, e Moisés orou ao SENHOR, e o fogo se apagou.
³ Pelo que chamou aquele lugar Taberá, porquanto o fogo do SENHOR acendera entre eles.
⁴ E o vulgo, que estava no meio deles, veio a ter grande desejo; pelo que os filhos de Israel tornaram a chorar, e disseram: Quem nos dará carne a comer?
⁵ Lembramo-nos dos peixes que no Egito comíamos de graça; e dos pepinos, e dos melões, e dos porros, e das cebolas, e dos alhos.
⁶ Mas agora a nossa alma se seca; coisa nenhuma há senão este maná diante dos nossos olhos.
⁷ E era o maná como semente de coentro, e a sua cor como a cor de bdélio.
⁸ Espalhava-se o povo e o colhia, e em moinhos o moía, ou num gral o pisava, e em panelas o cozia, e dele fazia bolos; e o seu sabor era como o sabor de azeite fresco.
⁹ E, quando o orvalho descia de noite sobre o arraial, o maná descia sobre ele.
¹⁰ Então Moisés ouviu chorar o povo pelas suas famílias, cada qual à porta da sua tenda; e a ira do SENHOR grandemente se acendeu, e pareceu mal aos olhos de Moisés.
¹¹ E disse Moisés ao SENHOR: Por que fizeste mal a teu servo, e por que não achei graça aos teus olhos, visto que puseste sobre mim a carga de todo este povo?
¹² Concebi eu porventura todo este povo? Gerei-o eu para que me dissesses: Leva-o ao teu colo, como a ama leva a criança que mama, à terra que juraste a seus pais?
¹³ Donde teria eu carne para dar a todo este povo? Porquanto choram diante de mim, dizendo: Dá-nos carne a comer.
¹⁴ Eu sozinho não posso levar a todo este povo, porque muito pesado é para mim.
¹⁵ E se assim fazes comigo, mata-me, peço-te, se achei graça aos teus olhos, e não vejo o meu mal.
¹⁶ E disse o SENHOR a Moisés: Ajunta-me setenta homens dos anciãos de Israel, que sabes serem anciãos do povo e seus oficiais; e os trarás à porta da tenda da congregação, e ali estejam contigo.
¹⁷ Então eu descerei e ali falarei contigo, e tirarei do espírito que está sobre ti, e o porei sobre eles; e levarão contigo a carga do povo, para que tu não a leves sozinho.
¹⁸ E dirás ao povo: Santificai-vos para amanhã, e comereis carne; porquanto chorastes aos ouvidos do SENHOR, dizendo: Quem nos dará carne a comer? Pois bem nos ia no Egito; pelo que o SENHOR vos dará carne, e comereis.
¹⁹ Não comereis um dia, nem dois dias, nem cinco dias, nem dez dias, nem vinte dias;
²⁰ mas um mês inteiro, até vos sair pelas narinas, até que vos enfastieis dela; porquanto rejeitastes ao SENHOR, que está no meio de vós, e chorastes diante dele, dizendo: Por que saímos do Egito?
²¹ E disse Moisés: Seiscentos mil homens de pé é este povo no meio do qual estou; e tu dizes: Dar-lhes-ei carne, e comerão um mês inteiro.
²² Matar-se-ão para eles ovelhas e vacas que lhes bastem? Ou ajuntar-se-ão para eles todos os peixes do mar que lhes bastem?
²³ Porém o SENHOR disse a Moisés: Ter-se-ia encurtado a mão do SENHOR? Agora verás se a minha palavra se há de cumprir ou não.
²⁴ E saiu Moisés, e relatou as palavras do SENHOR ao povo, e ajuntou setenta homens dos anciãos do povo e os pôs ao redor da tenda.
²⁵ Então o SENHOR desceu na nuvem, e lhe falou; e, tirando do espírito, que estava sobre ele, o pôs sobre aqueles setenta anciãos; e aconteceu que, quando o espírito repousou sobre eles, profetizaram; mas depois nunca mais.
²⁶ Porém no arraial ficaram dois homens; chamava-se um Eldade, e o outro Medade; e repousou sobre eles o espírito (porquanto estavam entre os inscritos, ainda que não saíram à tenda), e profetizavam no arraial.
²⁷ Então correu um moço e o anunciou a Moisés, e disse: Eldade e Medade profetizam no arraial.
²⁸ E Josué, filho de Num, servidor de Moisés, um dos seus jovens escolhidos, respondeu e disse: Senhor meu, Moisés, proíbe-lhos.
²⁹ Porém Moisés lhe disse: Tens tu ciúmes por mim? Oxalá que todo o povo do SENHOR fosse profeta, e que o SENHOR pusesse o seu espírito sobre eles!
³⁰ Depois Moisés se recolheu ao arraial, ele e os anciãos de Israel.
³¹ Então soprou um vento do SENHOR e trouxe codornizes do mar, e as espalhou pelo arraial quase caminho de um dia de uma e de outra banda, ao redor do arraial, e quase dois côvados sobre a terra.
³² Então o povo se levantou todo aquele dia e toda aquela noite, e todo o dia seguinte, e colheram as codornizes; o que menos colheu teve dez homeres; e as estenderam para si ao redor do arraial.
³³ Quando a carne estava entre os seus dentes, antes que fosse mastigada, se acendeu a ira do SENHOR contra o povo, e feriu o SENHOR o povo com uma praga muito grande.
³⁴ Pelo que o nome daquele lugar se chamou Quibrote-Hataavá, porquanto ali enterraram o povo que teve o desejo.
³⁵ De Quibrote-Hataavá partiu o povo para Hazerote, e parou em Hazerote.
`,

            // O DESAFIO
            pergunta: {
                texto: "Como se chamou o lugar onde o povo foi enterrado após ser ferido por uma praga enquanto ainda mastigavam a carne das codornizes?",
                opcoes: [
                    { numero: 1, texto: "Taberá", correta: false },
                    { numero: 2, texto: "Quibrote-Hataavá (Sepulturas do Desejo)", correta: true },
                    { numero: 3, texto: "Hazerote", correta: false },
                    { numero: 4, texto: "Parã", correta: false }
                ],
                explicacao: "Números 11:34 - O nome Quibrote-Hataavá significa 'Sepulturas da Cobiça",
                 pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 12 ---
        12: {
            titulo: "A Queixa de Miriã e Arão contra Moisés",
            subtitulo: "O desafio à autoridade de Moisés e a lepra de Miriã",

            texto: `
¹ E falaram Miriã e Arão contra Moisés, por causa da mulher cusita, com quem se casara; porquanto tinha casado com uma mulher cusita.
² E disseram: Porventura falou o SENHOR somente por Moisés? Não falou também por nós? E o SENHOR o ouviu.
³ (E era o homem Moisés mui manso, mais do que todos os homens que havia sobre a terra.)
⁴ E logo o SENHOR disse a Moisés, a Arão e a Miriã: Ouvi vós três; saí à tenda da congregação. E saíram eles três.
⁵ Então o SENHOR desceu na coluna de nuvem, e se pôs à porta da tenda; depois chamou a Arão e a Miriã, e ambos saíram.
⁶ E disse: Ouvi agora as minhas palavras; se entre vós houver profeta, eu, o SENHOR, em visão a ele me farei conhecer, ou em sonhos falarei com ele.
⁷ Não é assim com o meu servo Moisés, que é fiel em toda a minha casa.
⁸ Boca a boca falo com ele, e de vista, e não por figuras; pois, ele vê a semelhança do SENHOR; por que, pois, não tivestes temor de falar contra o meu servo, contra Moisés?
⁹ Assim a ira do SENHOR contra eles se acendeu; e foi-se.
¹⁰ E a nuvem se retirou de sobre a tenda; e eis que Miriã ficou leprosa como a neve; e olhou Arão para Miriã, e eis que estava leprosa.
¹¹ Por isso Arão disse a Moisés: Ah, senhor meu, rogo-te que não ponhas sobre nós este pecado, pois agimos loucamente, e temos pecado.
¹² Ora, não seja ela como um morto, que saindo do ventre de sua mãe, tenha metade da sua carne já consumida.
¹³ Então Moisés clamou ao SENHOR, dizendo: Ó Deus, rogo-te que a cures.
¹⁴ E disse o SENHOR a Moisés: Se seu pai cuspira em seu rosto, não se envergonharia sete dias? Esteja fechada sete dias fora do arraial, e depois se recolherá.
¹⁵ Assim Miriã foi fechada fora do arraial sete dias, e o povo não partiu, até que recolheram a Miriã.
¹⁶ Porém, depois o povo partiu de Hazerote; e acamparam-se no deserto de Parã.
`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com o texto, qual era a principal característica de Moisés que o diferenciava de todos os outros homens sobre a terra?",
                opcoes: [
                    { numero: 1, texto: "Sua força física e habilidade militar", correta: false },
                    { numero: 2, texto: "Sua riqueza acumulada no Egito", correta: false },
                    { numero: 3, texto: "Sua extrema mansidão", correta: true },
                    { numero: 4, texto: "Sua eloquência ao falar com o povo", correta: false }
                ],
                explicacao: "Números 12:3 - O texto bíblico ressalta que Moisés era 'mui manso', uma característica essencial para suportar a carga de liderar o povo de Israel pelo deserto.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 13 ---
        13: {
            titulo: "Os Espias em Canaã",
            subtitulo: "A missão de reconhecimento da Terra Prometida e o relatório dos doze",

            texto: `
¹ E falou o SENHOR a Moisés, dizendo:
² Envia homens que espiem a terra de Canaã, que eu hei de dar aos filhos de Israel; de cada tribo de seus pais enviareis um homem, sendo cada qual príncipe entre eles.
³ E enviou-os Moisés do deserto de Parã, segundo a ordem do SENHOR; todos aqueles homens eram cabeças dos filhos de Israel.
⁴ E estes são os seus nomes: da tribo de Rúben, Samua, filho de Zacur;
... (lista dos nomes dos príncipes) ...
¹⁶ Estes são os nomes dos homens que Moisés enviou a espiar aquela terra; e a Oséias, filho de Num, Moisés chamou Josué.
¹⁷ Enviou-os, pois, Moisés a espiar a terra de Canaã; e disse-lhes: Subi por aqui para o lado do sul, e subi à montanha;
¹⁸ e vede que terra é, e o povo que nela habita; se é forte ou fraco; se pouco ou muito;
¹⁹ e qual é a terra em que habita, se boa ou má; e quais são as cidades em que habita, se em arraiais ou em fortalezas;
²⁰ também qual é a terra, se gorda ou magra; se nela há árvores ou não; e esforçai-vos, e tomai do fruto da terra. E eram os dias das primícias das uvas.
²¹ Assim subiram e espiaram a terra desde o deserto de Zim até Reobe, à entrada de Hamate.
²² E subiram para o lado do sul, e vieram até Hebrom; e estavam ali Aimã, Sesai e Talmai, filhos de Anaque.
²³ Depois vieram até ao vale de Escol, e dali cortaram um ramo de vide com um cacho de uvas, o qual trouxeram dois homens sobre uma vara; como também das romãs e dos figos.
²⁴ Chamou-se aquele lugar o vale de Escol, por causa do cacho que dali cortaram os filhos de Israel.
²⁵ E voltaram de espiar a terra, ao fim de quarenta dias.
²⁶ E caminharam, e vieram a Moisés e a Arão, e a toda a congregação dos filhos de Israel no deserto de Parã, em Cades; e deram-lhes notícias a eles, e a toda a congregação, e mostraram-lhes o fruto da terra.
²⁷ E contaram-lhe, e disseram: Fomos à terra a que nos enviaste; e verdadeiramente mana leite e mel, e este é o seu fruto.
²⁸ O povo, porém, que habita nessa terra é poderoso, e as cidades fortificadas e mui grandes; e também ali vimos os filhos de Anaque.
²⁹ Os amalequitas habitam na terra do sul; e os heteus, e os jebuseus, e os amorreus habitam na montanha; e os cananeus habitam junto do mar, e pela margem do Jordão.
³⁰ Então Calebe fez calar o povo perante Moisés, e disse: Subamos animosamente e possuamo-la em herança; porque bem poderemos prevalecer contra ela.
³¹ Porém os homens que com ele subiram disseram: Não poderemos subir contra aquele povo, porque é mais forte do que nós.
³² E infamaram a terra que tinham espiado, dizendo aos filhos de Israel: A terra pelo meio da qual passamos a espiar é terra que consome os seus moradores; e todo o povo que vimos nela são homens de grande estatura.
³³ Também vimos ali gigantes, filhos de Anaque, descendentes dos gigantes; e éramos aos nossos olhos como gafanhotos, e assim também éramos aos seus olhos.
`,

            // O DESAFIO
            pergunta: {
                texto: "Como os dez espias descreveram a si mesmos em comparação com os gigantes que habitavam na terra de Canaã?",
                opcoes: [
                    { numero: 1, texto: "Como formigas trabalhadoras", correta: false },
                    { numero: 2, texto: "Como pequenos cordeiros", correta: false },
                    { numero: 3, texto: "Como gafanhotos", correta: true },
                    { numero: 4, texto: "Como areia do mar", correta: false }
                ],
                explicacao: "Números 13:33 - Devido ao medo e à falta de fé, os espias sentiram-se insignificantes como gafanhotos diante dos filhos de Anaque, influenciando negativamente o povo.",
                pontosGanhos: 20
            }
        },

        // --- INÍCIO DO CAPÍTULO 14 ---
        14: {
            titulo: "A Rebelião do Povo e o Castigo de Deus",
            subtitulo: "A recusa em entrar na terra e a sentença dos quarenta anos",

            texto: `
¹ Então levantou-se toda a congregação, e alçou a sua voz; e o povo chorou naquela mesma noite.
² E todos os filhos de Israel murmuraram contra Moisés e contra Arão; e toda a congregação lhes disse: Oxalá morrêssemos na terra do Egito! ou oxalá morrêssemos neste deserto!
³ E por que nos traz o SENHOR a esta terra, para cairmos à espada, e para que nossas mulheres e nossas crianças sejam por presa? Não nos seria melhor voltarmos ao Egito?
⁴ E diziam uns aos outros: Constituamos um capitão, e voltemos ao Egito.
⁵ Então Moisés e Arão caíram sobre os seus rostos perante toda a congregação dos filhos de Israel.
⁶ E Josué, filho de Num, e Calebe, filho de Jefoné, dos que espiaram a terra, rasgaram as suas vestes.
⁷ E falaram a toda a congregação dos filhos de Israel, dizendo: A terra pelo meio da qual passamos a espiar é terra muito boa em extremo.
⁸ Se o SENHOR se agradar de nós, então nos porá nesta terra, e no-la dará; terra que mana leite e mel.
⁹ Tão-somente não sejais rebeldes contra o SENHOR, e não temais o povo desta terra, porquanto são eles nosso pão; retirou-se deles o seu amparo, e o SENHOR é conosco; não os temais.
¹⁰ Mas toda a congregação disse que os apedrejassem; porém a glória do SENHOR apareceu na tenda da congregação a todos os filhos de Israel.
¹¹ E disse o SENHOR a Moisés: Até quando me provocará este povo? e até quando não crerão em mim, apesar de todos os sinais que fiz no meio deles?
... (Moisés intercede pelo povo e Deus perdoa, mas estabelece o castigo) ...
²⁸ Dize-lhes: Vivo eu, diz o SENHOR, que, como falastes aos meus ouvidos, assim farei a vós outros.
²⁹ Neste deserto cairão os vossos cadáveres, como também todos os que de vós foram contados segundo o vosso número, de vinte anos para cima, os que contra mim murmurastes;
³⁰ Não entrareis na terra, pela qual levantei a minha mão que vos faria habitar nela, salvo Calebe, filho de Jefoné, e Josué, filho de Num.
³¹ Mas vossas crianças, de que dissestes que seriam por presa, a estas introduzirei nela; e elas conhecerão a terra que vós desprezastes.
³² Porém, quanto a vós, os vossos cadáveres cairão neste deserto.
³³ E vossos filhos pastorearão neste deserto quarenta anos, e levarão sobre si as vossas infidelidades, até que os vossos cadáveres se consumam neste deserto.
³⁴ Segundo o número dos dias em que espiastes a terra, quarenta dias, cada dia representando um ano, levareis sobre vós as vossas iniquidades quarenta anos, e conhecereis o meu afastamento.
³⁵ Eu, o SENHOR, falei; assim farei a toda esta má congregação, que se levantou contra mim; neste deserto se consumirão, e aqui morrerão.
`,

            // O DESAFIO
            pergunta: {
                texto: "Qual foi a punição determinada por Deus para a geração que murmurou contra Ele, e quem foram os únicos adultos (acima de 20 anos) autorizados a entrar na Terra Prometida?",
                opcoes: [
                    { numero: 1, texto: "Vagar por 10 anos; Moisés e Arão", correta: false },
                    { numero: 2, texto: "Vagar por 40 anos; Josué e Calebe", correta: true },
                    { numero: 3, texto: "Vagar por 100 anos; apenas as crianças", correta: false },
                    { numero: 4, texto: "Retornar ao Egito imediatamente; ninguém", correta: false }
                ],
                explicacao: "Números 14:33-34 - Por causa da incredulidade, o povo foi condenado a vagar um ano para cada dia de espionagem da terra. Somente Josué e Calebe, que creram na promessa, puderam entrar.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 15 ---
        15: {
            titulo: "Leis sobre Ofertas e o Incidente do Sábado",
            subtitulo: "Instruções sobre sacrifícios, o pecado por ignorância e a santidade das vestes",

            texto: `
¹ Depois falou o SENHOR a Moisés, dizendo:
² Fala aos filhos de Israel, e dize-lhes: Quando entrardes na terra das vossas habitações, que eu vos hei de dar,
³ e ao SENHOR fizerdes oferta queimada, holocausto, ou sacrifício, para cumprir um voto, ou em oferta voluntária, ou nas vossas solemnidades, para fazer ao SENHOR um cheiro suave de bois ou de ovelhas,
... (detalhes sobre as ofertas de manjares e libações) ...
²² E quando errardes, e não cumprirdes todos estes mandamentos, que o SENHOR falou a Moisés,
... (leis sobre o pecado por ignorância da congregação) ...
³⁰ Mas a alma que fizer alguma coisa à mão levantada (com soberba), quer seja dos naturais quer dos estrangeiros, injuria ao SENHOR; e tal alma será extirpada do meio do seu povo.
³¹ Porquanto desprezou a palavra do SENHOR, e anulou o seu mandamento; totalmente será extirpada aquela alma; a sua iniquidade será sobre ela.
³² Estando, pois, os filhos de Israel no deserto, acharam um homem apanhando lenha no dia de sábado.
³³ E os que o acharam apanhando lenha o trouxeram a Moisés e a Arão, e a toda a congregação.
³⁴ E o puseram em guarda; porquanto ainda não estava declarado o que se lhe devia fazer.
³⁵ Disse, pois, o SENHOR a Moisés: Certamente morrerá o tal homem; toda a congregação o apedrejará fora do arraial.
³⁶ Então toda a congregação o tirou para fora do arraial, e o apedrejaram, e morreu, como o SENHOR ordenara a Moisés.
³⁷ E falou o SENHOR a Moisés, dizendo:
³⁸ Fala aos filhos de Israel, e dize-lhes: Que nas bordas das suas vestes façam franjas pelas suas gerações; e nas franjas das bordas porão um cordão de azul.
³⁹ E as franjas vos serão para que, vendo-as, vos lembreis de todos os mandamentos do SENHOR, e os cumprais; e não sigais após o vosso coração, nem após os vossos olhos, após os quais vós andais adulterando.
⁴⁰ Para que vos lembreis de todos os meus mandamentos, e os cumprais, e santos sejais a vosso Deus.
⁴¹ Eu sou o SENHOR vosso Deus, que vos tirei da terra do Egito, para vos ser por Deus. Eu sou o SENHOR vosso Deus.
`,

            // O DESAFIO
            pergunta: {
                texto: "Qual era o objetivo de colocar franjas com um cordão azul nas bordas das vestes, conforme ordenado ao final deste capítulo?",
                opcoes: [
                    { numero: 1, texto: "Apenas para identificação estética entre as tribos", correta: false },
                    { numero: 2, texto: "Para que, ao vê-las, o povo se lembrasse de todos os mandamentos do SENHOR", correta: true },
                    { numero: 3, texto: "Para distinguir os sacerdotes dos leigos", correta: false },
                    { numero: 4, texto: "Para proteger as vestes de se desfiarem no deserto", correta: false }
                ],
                explicacao: "Números 15:39-40 - As franjas (tzitzit) serviam como um lembrete visual constante da aliança e da necessidade de santidade e obediência à Lei de Deus.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 16 ---
        // --- INÍCIO DO CAPÍTULO 16 ---
        16: {
            titulo: "A Rebelião de Corá, Datã e Abirão",
            subtitulo: "O desafio ao sacerdócio de Arão e o juízo divino sobre os rebeldes",

            texto: `
¹ E Corá, filho de Izar, filho de Coate, filho de Levi, tomou consigo a Datã e a Abirão, filhos de Eliabe, e a Om, filho de Pelete, filhos de Rúben.
² E levantaram-se perante Moisés com duzentos e cinquenta homens dos filhos de Israel, príncipes da congregação, chamados ao ajuntamento, homens de nome.
³ E ajuntaram-se contra Moisés e contra Arão, e disseram-lhes: Demais é para vós, pois toda a congregação é santa, cada um deles é santo, e o SENHOR está no meio deles; por que, pois, vos elevais sobre a congregação do SENHOR?
⁴ Quando Moisés ouviu isso, caiu sobre o seu rosto.
⁵ E falou a Corá e a toda a sua congregação, dizendo: Amanhã pela manhã o SENHOR fará saber quem é seu, e quem é o santo que ele fará chegar a si; e aquele a quem escolher fará chegar a si.
⁶ Fazei isto: Tomai incensários, Corá e toda a sua congregação;
⁷ e ponde neles fogo, e sobre eles ponde incenso perante o SENHOR amanhã; e será que o homem a quem o SENHOR escolher, este será o santo; demais é para vós, filhos de Levi.
⁸ Disse mais Moisés a Corá: Ouvi agora, filhos de Levi:
⁹ Porventura pouco para vós é que o Deus de Israel vos tenha separado da congregação de Israel, para vos fazer chegar a si, a administrar o ministério do tabernáculo do SENHOR e estar perante a congregação para ministrar-lhes?
¹⁰ E te fez chegar, e todos os teus irmãos, os filhos de Levi, contigo; e ainda procurais também o sacerdócio?
¹¹ Pelo que tu e toda a tua congregação estais congregados contra o SENHOR; e Arão, que é ele, para que murmureis contra ele?
¹² E enviou Moisés a chamar a Datã e a Abirão, filhos de Eliabe; porém eles disseram: Não subiremos;
¹³ é pouco porventura que nos fizeste subir de uma terra que mana leite e mel, para nos matares neste deserto, senão que também queres fazer-te senhor sobre nós?
¹⁴ Nem tampouco nos trouxeste a uma terra que mana leite e mel, nem nos deste campo e vinhas em herança; porventura arrancarás os olhos a estes homens? Não subiremos.
¹⁵ Então Moisés irou-se muito, e disse ao SENHOR: Não atentes para a sua oferta; nem um só jumento tomei deles, nem a nenhum deles fiz mal.
¹⁶ Disse mais Moisés a Corá: Tu e toda a tua congregação estai perante o SENHOR, tu e eles, e Arão, amanhã.
¹⁷ E tomai cada um o seu incensário, e neles ponde incenso; e trazei cada um o seu incensário perante o SENHOR, duzentos e cinquenta incensários; também tu e Arão, cada um o seu incensário.
¹⁸ Tomaram, pois, cada um o seu incensário, e neles puseram fogo, e sobre eles deitaram incenso, e puseram-se à porta da tenda da congregação com Moisés e Arão.
¹⁹ E Corá fez ajuntar contra eles toda a congregação à porta da tenda da congregação; então a glória do SENHOR apareceu a toda a congregação.
²⁰ E falou o SENHOR a Moisés e a Arão, dizendo:
²¹ Apartai-vos do meio desta congregação, e os consumirei num momento.
²² Mas eles se prostraram sobre os seus rostos, e disseram: Ó Deus, Deus dos espíritos de toda a carne, pecará um só homem, e indignar-te-ás tu contra toda esta congregação?
²³ E falou o SENHOR a Moisés, dizendo:
²⁴ Fala a toda esta congregação, dizendo: Subi do redor da habitação de Corá, Datã e Abirão.
²⁵ Então Moisés levantou-se, e foi a Datã e a Abirão; e após ele foram os anciãos de Israel.
²⁶ E falou à congregação, dizendo: Desviai-vos, peço-vos, das tendas destes homens ímpios, e não toqueis nada do que é seu para que porventura não pereçais em todos os seus pecados.
²⁷ Subiram, pois, do redor da habitação de Corá, Datã e Abirão. E Datã e Abirão saíram, e se puseram à porta das suas tendas, com as suas mulheres, e seus filhos, e suas crianças.
²⁸ Então disse Moisés: Nisto conhecereis que o SENHOR me enviou a fazer todas estas obras, que de meu próprio coração não as fiz.
²⁹ Se estes morrerem como morrem todos os homens, e se forem visitados como são visitados todos os homens, então o SENHOR não me enviou.
³⁰ Mas, se o SENHOR criar uma coisa nova, e a terra abrir a sua boca e os tragar com tudo o que é seu, e vivos descerem ao abismo, então conhecereis que estes homens irritaram ao SENHOR.
³¹ E aconteceu que, acabando ele de falar todas estas palavras, a terra que estava debaixo deles se fendeu.
³² E a terra abriu a sua boca, e os tragou com as suas casas, como também a todos os homens que pertenciam a Corá, e a todos os seus bens.
³³ E eles e tudo o que era seu desceram vivos ao abismo, e a terra os cobriu, e pereceram do meio da congregação.
³⁴ E todo o Israel, que estava ao redor deles, fugiu ao clamor deles; porque diziam: Para que não nos trague a terra também a nós.
³⁵ Então saiu fogo do SENHOR, e consumiu os duzentos e cinquenta homens que ofereciam o incenso.
³⁶ E falou o SENHOR a Moisés, dizendo:
³⁷ Dize a Eleazar, filho de Arão, o sacerdote, que tome os incensários do meio do incêndio, e espalhe o fogo longe, porque santos são;
³⁸ os incensários daqueles que pecaram contra as suas almas, deles se façam pranchas batidas para cobertura do altar; porquanto os trouxeram perante o SENHOR; pelo que santos são; e serão por sinal aos filhos de Israel.
³⁹ E Eleazar, o sacerdote, tomou os incensários de metal, que os que foram queimados tinham oferecido, e os bateram em pranchas para cobertura do altar,
⁴⁰ por memória para os filhos de Israel, que nenhum estranho, que não for da descendência de Arão, se chegue para acender incenso perante o SENHOR; para que não seja como Corá e a sua congregação, como o SENHOR lhe tinha dito pela mão de Moisés.
⁴¹ Mas no dia seguinte toda a congregação dos filhos de Israel murmurou contra Moisés e contra Arão, dizendo: Vós matastes o povo do SENHOR.
⁴² E aconteceu que, ajuntando-se a congregação contra Moisés e Arão, e virando-se para a tenda da congregação, eis que a nuvem a cobriu, e a glória do SENHOR apareceu.
⁴³ Vieram, pois, Moisés e Arão perante a tenda da congregação.
⁴⁴ Então falou o SENHOR a Moisés, dizendo:
⁴⁵ Levantai-vos do meio desta congregação, e a consumirei num momento; então se prostraram sobre os seus rostos.
⁴⁶ E disse Moisés a Arão: Toma o teu incensário, e põe nele fogo do altar, e deita incenso sobre ele, e vai depressa à congregação, e faze expiação por eles; porque grande indignação saiu de diante do SENHOR; já começou a praga.
⁴⁷ E tomou-o Arão, como Moisés tinha falado, e correu ao meio da congregação; e eis que já a praga havia começado entre o povo; e deitou incenso nele, e fez expiação pelo povo.
⁴⁸ E estava em pé entre os mortos e os vivos; e cessou a praga.
⁴⁹ E os que morreram daquela praga foram catorze mil e setecentos, fora os que morreram por causa de Corá.
⁵⁰ E voltou Arão a Moisés à porta da tenda da congregação; e cessou a praga.
`,

            // O DESAFIO
            pergunta: {
                texto: "De que forma sobrenatural morreram os principais líderes da rebelião (Corá, Datã e Abirão) e suas famílias após o desafio à autoridade de Moisés?",
                opcoes: [
                    { numero: 1, texto: "Foram consumidos por um fogo que desceu do céu", correta: false },
                    { numero: 2, texto: "Foram tragados vivos pela terra que se abriu", correta: true },
                    { numero: 3, texto: "Morreram por uma praga repentina no arraial", correta: false },
                    { numero: 4, texto: "Foram expulsos para o deserto sem água", correta: false }
                ],
                explicacao: "Números 16:31-33 - A terra se fendeu debaixo dos pés dos rebeldes e os tragou vivos, servindo de sinal imediato de que Moisés era o enviado do SENHOR.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 17 ---
        17: {
            titulo: "A Vara de Arão que Floresceu",
            subtitulo: "A confirmação definitiva da escolha divina pelo sacerdócio",

            texto: `
¹ Então falou o SENHOR a Moisés, dizendo:
² Fala aos filhos de Israel, e toma deles uma vara para cada casa paterna de todos os seus príncipes, segundo as casas de seus pais, doze varas; e escreverás o nome de cada um sobre a sua vara.
³ Porém o nome de Arão escreverás sobre a vara de Levi; porque cada cabeça da casa de seus pais terá uma vara.
⁴ E as porás na tenda da congregação, perante o testemunho, onde eu venho a vós.
⁵ E há de ser que a vara do homem que eu escolher florescerá; assim farei cessar as murmurações dos filhos de Israel contra mim, com que murmuram contra vós.
⁶ Falou, pois, Moisés aos filhos de Israel; e todos os seus príncipes lhe deram cada um uma vara, segundo as casas de seus pais, doze varas; e a vara de Arão estava entre as suas varas.
⁷ E Moisés pôs estas varas perante o SENHOR na tenda do testemunho.
⁸ Sucedeu, pois, que no dia seguinte Moisés entrou na tenda do testemunho, e eis que a vara de Arão, pela casa de Levi, florescera; porque produzira flores, e brotara renovos, e dera amêndoas maduras.
⁹ Então Moisés tirou todas as varas de diante do SENHOR a todos os filhos de Israel; e eles o viram, e tomaram cada um a sua vara.
¹⁰ Então o SENHOR disse a Moisés: Torna a por a vara de Arão perante o testemunho, para que se guarde por sinal para os filhos rebeldes; para que faças acabar as suas murmurações contra mim, e não morram.
¹¹ E Moisés fez assim; como lhe ordenara o SENHOR, assim fez.
¹² Então falaram os filhos de Israel a Moisés, dizendo: Eis aqui, expiramos, perecemos, todos nós perecemos.
¹³ Todo aquele que se chegar, sim, todo aquele que se chegar ao tabernáculo do SENHOR, morrerá; seremos porventura todos consumidos?
`,

            // O DESAFIO
            pergunta: {
                texto: "O que aconteceu com a vara de Arão após passar a noite perante o Testemunho, provando que ele era o escolhido de Deus?",
                opcoes: [
                    { numero: 1, texto: "Transformou-se em uma serpente de ouro", correta: false },
                    { numero: 2, texto: "Ficou coberta de fogo que não se apagava", correta: false },
                    { numero: 3, texto: "Floresceu, brotou renovos e deu amêndoas maduras", correta: true },
                    { numero: 4, texto: "Cresceu até tocar o teto do Tabernáculo", correta: false }
                ],
                explicacao: "Números 17:8 - O milagre da vara que produziu vida e frutos em uma única noite foi o sinal definitivo para cessar as murmurações sobre quem deveria exercer o sacerdócio.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 18 ---
        18: {
            titulo: "Os Direitos e Deveres de Sacerdotes e Levitas",
            subtitulo: "A responsabilidade pelo santuário e as leis sobre o dízimo",

            texto: `
¹ Então disse o SENHOR a Arão: Tu, e teus filhos, e a casa de teu pai contigo, levareis a iniquidade do santuário; e tu e teus filhos contigo levareis a iniquidade do vosso sacerdócio.
² E também farás chegar contigo a teus irmãos, a tribo de Levi, a tribo de teu pai, para que se ajuntem a ti, e te sirvam; mas tu e teus filhos contigo estareis perante a tenda do testemunho.
³ E eles guardarão a tua guarda e a guarda de toda a tenda; mas não se chegarão aos utensílios do santuário, nem ao altar, para que não morram, tanto eles como vós.
⁴ Mas se ajuntarão a ti, e guardarão a guarda da tenda da congregação para todo o serviço da tenda; e o estranho não se chegará a vós.
⁵ Vós, pois, guardareis a guarda do santuário e a guarda do altar, para que não haja outra vez indignação sobre os filhos de Israel.
⁶ E eu, eis que tenho tomado vossos irmãos, os levitas, do meio dos filhos de Israel; a vós são dados em presente pelo SENHOR, para servir no ministério da tenda da congregação.
⁷ Mas tu e teus filhos contigo guardareis o vosso sacerdócio em todo o negócio do altar, e no que estiver dentro do véu, isto administrareis; eu vos tenho dado o vosso sacerdócio em dádiva ministerial; e o estranho que se chegar morrerá.
⁸ Falou mais o SENHOR a Arão: Eis que eu te tenho dado a guarda das minhas ofertas alçadas, com todas as coisas santas dos filhos de Israel; por causa da unção as tenho dado a ti e a teus filhos por estatuto perpétuo.
⁹ Isto terás das coisas santíssimas, não queimadas pelo fogo: todas as suas ofertas, com todas as suas ofertas de manjares, e com todas as suas ofertas pelo pecado, e com todas as suas ofertas pela culpa, que me restituírem; coisas santíssimas serão para ti e para teus filhos.
¹⁰ No lugar santíssimo as comerás; todo o homem a comerá; santa será para ti.
¹¹ Também isto será tua: a oferta alçada do seu dom com todas as ofertas de movimento dos filhos de Israel; a ti, a teus filhos, e a tuas filhas contigo, as tenho dado por estatuto perpétuo; todo o que estiver limpo na tua casa as comerá.
¹² Todo o melhor do azeite, e todo o melhor do mosto e do grão, as suas primícias que derem ao SENHOR, as tenho dado a ti.
¹³ Os primeiros frutos de tudo o que houver na terra, que trouxerem ao SENHOR, serão teus; todo o que estiver limpo na tua casa os comerá.
¹⁴ Toda a coisa consagrada em Israel será tua.
¹⁵ Tudo o que abrir a madre, de toda a carne que oferecerem ao SENHOR, tanto de homens como de animais, será teu; porém os primogênitos dos homens resgatarás certamente; também os primogênitos dos animais imundos resgatarás.
¹⁶ E o seu resgate (dos de um mês para cima) farás segundo a tua estimação, por cinco siclos de prata, segundo o siclo do santuário, que é de vinte geras.
¹⁷ Mas o primogênito de vaca, ou primogênito de ovelha, ou primogênito de cabra, não resgatarás, santos são; o seu sangue espargirás sobre o altar, e a sua gordura queimarás em oferta queimada de cheiro suave ao SENHOR.
¹⁸ E a carne deles será tua; assim como o peito da oferta de movimento, e o ombro direito, serão teus.
¹⁹ Todas as ofertas alçadas das coisas santas, que os filhos de Israel oferecerem ao SENHOR, tenho dado a ti, e a teus filhos e a tuas filhas contigo, por estatuto perpétuo; aliança de sal perpétua é perante o SENHOR, para ti e para a tua descendência contigo.
²⁰ Disse também o SENHOR a Arão: Na sua terra herança nenhuma terás, e no meio deles nenhuma parte terás; eu sou a tua parte e a tua herança no meio dos filhos de Israel.
²¹ E eis que aos filhos de Levi tenho dado todos os dízimos em Israel por herança, pelo seu ministério que exercem, o ministério da tenda da congregação.
²² E nunca mais os filhos de Israel se chegarão à tenda da congregação, para que não levem pecado e morram.
²³ Mas os levitas administrarão o ministério da tenda da congregação, e eles levarão a sua iniquidade; estatuto perpétuo será pelas vossas gerações; e no meio dos filhos de Israel nenhuma herança terão.
²⁴ Porque os dízimos dos filhos de Israel, que oferecerem ao SENHOR em oferta alçada, tenho dado por herança aos levitas; porquanto eu lhes disse: No meio dos filhos de Israel nenhuma herança terão.
²⁵ E falou o SENHOR a Moisés, dizendo:
²⁶ Também falarás aos levitas, e dir-lhes-ás: Quando receberdes os dízimos dos filhos de Israel, que eu deles vos tenho dado por vossa herança, deles oferecereis uma oferta alçada ao SENHOR, os dízimos dos dízimos.
²⁷ E contar-se-vos-á a vossa oferta alçada, como grão da eira, e como plenitude do lagar.
²⁸ Assim também oferecereis ao SENHOR uma oferta alçada de todos os vossos dízimos, que receberdes dos filhos de Israel, e deles dareis a oferta alçada do SENHOR a Arão, o sacerdote.
²⁹ De todas as vossas dádivas oferecereis toda a oferta alçada do SENHOR; de tudo o melhor delas, a sua santa parte.
³⁰ Dir-lhes-ás pois: Quando oferecerdes o melhor delas, aos levitas se contará como novidade da eira, e como novidade do lagar.
³¹ E o comereis em todo o lugar, vós e as vossas famílias, porque vosso galardão é pelo vosso ministério na tenda da congregação.
³² E, quando oferecerdes o melhor delas, não levareis sobre vós pecado; e não profanareis as coisas santas dos filhos de Israel, para que não morrais.
`,

            // O DESAFIO
            pergunta: {
                texto: "Qual foi a herança dada por Deus aos filhos de Levi em Israel por causa do ministério que exerciam na Tenda da Congregação?",
                opcoes: [
                    { numero: 1, texto: "Grandes extensões de terra em Canaã", correta: false },
                    { numero: 2, texto: "Todos os dízimos em Israel", correta: true },
                    { numero: 3, texto: "O ouro e a prata capturados nas guerras", correta: false },
                    { numero: 4, texto: "Cidades fortificadas ao redor do Tabernáculo", correta: false }
                ],
                explicacao: "Números 18:21 - Os levitas não receberam terras como herança; em vez disso, o SENHOR determinou que os dízimos do povo seriam o sustento deles pelo serviço sagrado.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 18 ---
        18: {
            titulo: "Os Direitos e Deveres de Sacerdotes e Levitas",
            subtitulo: "A responsabilidade pelo santuário e as leis sobre o dízimo",

            texto: `
¹ Então disse o SENHOR a Arão: Tu, e teus filhos, e a casa de teu pai contigo, levareis a iniquidade do santuário; e tu e teus filhos contigo levareis a iniquidade do vosso sacerdócio.
² E também farás chegar contigo a teus irmãos, a tribo de Levi, a tribo de teu pai, para que se ajuntem a ti, e te sirvam; mas tu e teus filhos contigo estareis perante a tenda do testemunho.
³ E eles guardarão a tua guarda e a guarda de toda a tenda; mas não se chegarão aos utensílios do santuário, nem ao altar, para que não morram, tanto eles como vós.
⁴ Mas se ajuntarão a ti, e guardarão a guarda da tenda da congregação para todo o serviço da tenda; e o estranho não se chegará a vós.
⁵ Vós, pois, guardareis a guarda do santuário e a guarda do altar, para que não haja outra vez indignação sobre os filhos de Israel.
⁶ E eu, eis que tenho tomado vossos irmãos, os levitas, do meio dos filhos de Israel; a vós são dados em presente pelo SENHOR, para servir no ministério da tenda da congregação.
⁷ Mas tu e teus filhos contigo guardareis o vosso sacerdócio em todo o negócio do altar, e no que estiver dentro do véu, isto administrareis; eu vos tenho dado o vosso sacerdócio em dádiva ministerial; e o estranho que se chegar morrerá.
⁸ Falou mais o SENHOR a Arão: Eis que eu te tenho dado a guarda das minhas ofertas alçadas, com todas as coisas santas dos filhos de Israel; por causa da unção as tenho dado a ti e a teus filhos por estatuto perpétuo.
⁹ Isto terás das coisas santíssimas, não queimadas pelo fogo: todas as suas ofertas, com todas as suas ofertas de manjares, e com todas as suas ofertas pelo pecado, e com todas as suas ofertas pela culpa, que me restituírem; coisas santíssimas serão para ti e para teus filhos.
¹⁰ No lugar santíssimo as comerás; todo o homem a comerá; santa será para ti.
¹¹ Também isto será tua: a oferta alçada do seu dom com todas as ofertas de movimento dos filhos de Israel; a ti, a teus filhos, e a tuas filhas contigo, as tenho dado por estatuto perpétuo; todo o que estiver limpo na tua casa as comerá.
¹² Todo o melhor do azeite, e todo o melhor do mosto e do grão, as suas primícias que derem ao SENHOR, as tenho dado a ti.
¹³ Os primeiros frutos de tudo o que houver na terra, que trouxerem ao SENHOR, serão teus; todo o que estiver limpo na tua casa os comerá.
¹⁴ Toda a coisa consagrada em Israel será tua.
¹⁵ Tudo o que abrir a madre, de toda a carne que oferecerem ao SENHOR, tanto de homens como de animais, será teu; porém os primogênitos dos homens resgatarás certamente; também os primogênitos dos animais imundos resgatarás.
¹⁶ E o seu resgate (dos de um mês para cima) farás segundo a tua estimação, por cinco siclos de prata, segundo o siclo do santuário, que é de vinte geras.
¹⁷ Mas o primogênito de vaca, ou primogênito de ovelha, ou primogênito de cabra, não resgatarás, santos são; o seu sangue espargirás sobre o altar, e a sua gordura queimarás em oferta queimada de cheiro suave ao SENHOR.
¹⁸ E a carne deles será tua; assim como o peito da oferta de movimento, e o ombro direito, serão teus.
¹⁹ Todas as ofertas alçadas das coisas santas, que os filhos de Israel oferecerem ao SENHOR, tenho dado a ti, e a teus filhos e a tuas filhas contigo, por estatuto perpétuo; aliança de sal perpétua é perante o SENHOR, para ti e para a tua descendência contigo.
²⁰ Disse também o SENHOR a Arão: Na sua terra herança nenhuma terás, e no meio deles nenhuma parte terás; eu sou a tua parte e a tua herança no meio dos filhos de Israel.
²¹ E eis que aos filhos de Levi tenho dado todos os dízimos em Israel por herança, pelo seu ministério que exercem, o ministério da tenda da congregação.
²² E nunca mais os filhos de Israel se chegarão à tenda da congregação, para que não levem pecado e morram.
²³ Mas os levitas administrarão o ministério da tenda da congregação, e eles levarão a sua iniquidade; estatuto perpétuo será pelas vossas gerações; e no meio dos filhos de Israel nenhuma herança terão.
²⁴ Porque os dízimos dos filhos de Israel, que oferecerem ao SENHOR em oferta alçada, tenho dado por herança aos levitas; porquanto eu lhes disse: No meio dos filhos de Israel nenhuma herança terão.
²⁵ E falou o SENHOR a Moisés, dizendo:
²⁶ Também falarás aos levitas, e dir-lhes-ás: Quando receberdes os dízimos dos filhos de Israel, que eu deles vos tenho dado por vossa herança, deles oferecereis uma oferta alçada ao SENHOR, os dízimos dos dízimos.
²⁷ E contar-se-vos-á a vossa oferta alçada, como grão da eira, e como plenitude do lagar.
²⁸ Assim também oferecereis ao SENHOR uma oferta alçada de todos os vossos dízimos, que receberdes dos filhos de Israel, e deles dareis a oferta alçada do SENHOR a Arão, o sacerdote.
²⁹ De todas as vossas dádivas oferecereis toda a oferta alçada do SENHOR; de tudo o melhor delas, a sua santa parte.
³⁰ Dir-lhes-ás pois: Quando oferecerdes o melhor delas, aos levitas se contará como novidade da eira, e como novidade do lagar.
³¹ E o comereis em todo o lugar, vós e as vossas famílias, porque vosso galardão é pelo vosso ministério na tenda da congregação.
³² E, quando oferecerdes o melhor delas, não levareis sobre vós pecado; e não profanareis as coisas santas dos filhos de Israel, para que não morrais.
`,

            // O DESAFIO
            pergunta: {
                texto: "Qual foi a herança dada por Deus aos filhos de Levi em Israel por causa do ministério que exerciam na Tenda da Congregação?",
                opcoes: [
                    { numero: 1, texto: "Grandes extensões de terra em Canaã", correta: false },
                    { numero: 2, texto: "Todos os dízimos em Israel", correta: true },
                    { numero: 3, texto: "O ouro e a prata capturados nas guerras", correta: false },
                    { numero: 4, texto: "Cidades fortificadas ao redor do Tabernáculo", correta: false }
                ],
                explicacao: "Números 18:21 - Os levitas não receberam terras como herança; em vez disso, o SENHOR determinou que os dízimos do povo seriam o sustento deles pelo serviço sagrado.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 20 ---
        20: {
            titulo: "A Água da Rocha e a Morte de Arão",
            subtitulo: "A falta de fé em Meribá e a transição da liderança sacerdotal",

            texto: `
¹ Chegando os filhos de Israel, toda a congregação, ao deserto de Zim, no mês primeiro, o povo ficou em Cades; e Miriã morreu ali, e ali foi sepultada.
² E não havia água para a congregação; então se ajuntaram contra Moisés e contra Arão.
³ E o povo contendeu com Moisés, dizendo: Antes tivéssemos expirado quando expiraram nossos irmãos perante o SENHOR!
⁴ E por que trouxestes a congregação do SENHOR a este deserto, para que morramos aqui, nós e os nossos animais?
⁵ E por que nos fizestes subir do Egito, para nos trazer a este lugar mau? Lugar não de semente, nem de figos, nem de vides, nem de romãs; nem há água para beber.
⁶ Então Moisés e Arão se foram de diante da congregação à porta da tenda da congregação, e se prostraram sobre os seus rostos; e a glória do SENHOR lhes apareceu.
⁷ E o SENHOR falou a Moisés, dizendo:
⁸ Toma a vara, e ajunta a congregação, tu e Arão, teu irmão, e falai à rocha, perante os seus olhos, e dará a sua água; assim lhes tirarás água da rocha, e darás a beber à congregação e aos seus animais.
⁹ Então Moisés tomou a vara de diante do SENHOR, como lhe tinha ordenado.
¹⁰ E Moisés e Arão ajuntaram a congregação diante da rocha, e Moisés disse-lhes: Ouvi agora, rebeldes, porventura tiraremos água desta rocha para vós?
¹¹ Então Moisés levantou a sua mão, e feriu a rocha duas vezes com a sua vara, e saiu muita água; e bebeu a congregação e os seus animais.
¹² E o SENHOR disse a Moisés e a Arão: Porquanto não crestes em mim, para me santificardes diante dos filhos de Israel, por isso não introduzireis esta congregação na terra que lhes tenho dado.
¹³ Estas são as águas de Meribá, porque os filhos de Israel contenderam com o SENHOR; e ele se santificou neles.
¹⁴ Depois Moisés, de Cades, enviou mensageiros ao rei de Edom, dizendo: Assim diz teu irmão Israel: Tu sabes todo o trabalho que nos sobreveio;
¹⁵ como nossos pais desceram ao Egito, e nós no Egito habitamos muitos dias; e como os egípcios nos maltrataram, a nós e a nossos pais;
¹⁶ e clamamos ao SENHOR, e ele ouviu a nossa voz, e enviou um anjo, e nos tirou do Egito; e eis que estamos em Cades, cidade na extremidade dos teus termos.
¹⁷ Deixa-nos, peço-te, passar pela tua terra; não passaremos pelo campo, nem pelas vinhas, nem beberemos a água dos poços; iremos pela estrada real; não nos desviaremos para a direita nem para a esquerda, até que passemos os teus termos.
¹⁸ Porém Edom lhe disse: Não passarás por mim, para que eu não saia com a espada ao teu encontro.
¹⁹ Então os filhos de Israel lhe disseram: Subiremos pelo caminho mais alto, e se nós e o nosso gado bebermos da tua água, daremos o preço dela; sem fazer outra coisa, deixa-me somente passar a pé.
²⁰ Porém ele disse: Não passarás. E saiu-lhe Edom ao encontro com muito povo, e com mão forte.
²¹ Assim recusou Edom deixar passar a Israel pelo seu termo; pelo que Israel se desviou dele.
²² Então partiram de Cades; e os filhos de Israel, toda a congregação, chegaram ao monte Hor.
²³ E falou o SENHOR a Moisés e a Arão no monte Hor, nos termos da terra de Edom, dizendo:
²⁴ Arão será recolhido a seu povo, porque não entrará na terra que tenho dado aos filhos de Israel, porquanto fostes rebeldes à minha palavra, nas águas de Meribá.
²⁵ Toma a Arão e a Eleazar, seu filho, e faze-os subir ao monte Hor.
²⁶ E despoja a Arão de suas vestes, e veste-as em Eleazar, seu filho; porque Arão será recolhido, e morrerá ali.
²⁷ E fez Moisés como o SENHOR lhe ordenara; porque subiram ao monte Hor perante os olhos de toda a congregação.
²⁸ E Moisés despojou a Arão de suas vestes, e as vestiu em Eleazar, seu filho; e morreu Arão ali no cume do monte; e desceram Moisés e Eleazar do monte.
²⁹ Vendo, pois, toda a congregação que Arão era morto, choraram a Arão trinta dias, toda a casa de Israel.
`,

            // O DESAFIO
            pergunta: {
                texto: "Qual foi o erro cometido por Moisés e Arão nas águas de Meribá que os impediu de introduzir o povo na Terra Prometida?",
                opcoes: [
                    { numero: 1, texto: "Eles se recusaram a orar pelo povo", correta: false },
                    { numero: 2, texto: "Moisés feriu a rocha duas vezes em vez de apenas falar a ela", correta: true },
                    { numero: 3, texto: "Eles tentaram fugir de volta para o Egito", correta: false },
                    { numero: 4, texto: "Eles não permitiram que o povo bebesse a água", correta: false }
                ],
                explicacao: "Números 20:8-12 - Deus ordenou que Moisés falasse à rocha, mas ele a feriu com ira, não santificando o nome do SENHOR perante o povo.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 21 ---
        21: {
            titulo: "A Serpente de Bronze e as Vitórias sobre os Amorreus",
            subtitulo: "A cura pela fé e a conquista de Sião e Ogue",

            texto: `
¹ Ouvindo o cananeu, rei de Arade, que habitava no sul, que Israel vinha pelo caminho de Atarim, pelejou contra Israel, e levou deles alguns prisioneiros.
² Então Israel fez um voto ao SENHOR, dizendo: Se de fato entregares este povo na minha mão, destruirei totalmente as suas cidades.
³ O SENHOR, pois, ouviu a voz de Israel, e lhe entregou os cananeus; e os israelitas destruíram totalmente a eles e a suas cidades; e o nome daquele lugar chamou Horma.
⁴ Então partiram do monte Hor, pelo caminho do Mar Vermelho, a rodear a terra de Edom; porém a alma do povo angustiou-se neste caminho.
⁵ E o povo falou contra Deus e contra Moisés: Por que nos fizestes subir do Egito para morrermos neste deserto? Pois aqui nem pão nem água há; e a nossa alma tem fastio deste pão tão vil.
⁶ Então o SENHOR mandou entre o povo serpentes ardentes, que picaram o povo; e morreu muita gente em Israel.
⁷ Pelo que o povo veio a Moisés, e disse: Peccamos, porquanto temos falado contra o SENHOR e contra ti; ora ao SENHOR que tire de nós estas serpentes. Então Moisés orou pelo povo.
⁸ E disse o SENHOR a Moisés: Faze-te uma serpente ardente, e põe-na sobre uma haste; e será que viverá todo o que, sendo picado, olhar para ela.
⁹ E Moisés fez uma serpente de metal, e pô-la sobre uma haste; e acontecia que, picando alguma serpente a alguém, quando olhava para a serpente de metal, vivia.
¹⁰ Então os filhos de Israel partiram, e acamparam-se em Obote.
¹¹ Depois partiram de Obote e acamparam-se nos outeiros de Ije-Abarim, no deserto que está defronte de Moabe, ao nascente do sol.
¹² Dali partiram e acamparam-se no vale de Zerede.
¹³ Dali partiram e acamparam-se além de Arnom, que está no deserto e sai dos termos dos amorreus; porque Arnom é o termo de Moabe, entre Moabe e os amorreus.
¹⁴ Pelo que se diz no livro das guerras do SENHOR: O que ele fez no Mar Vermelho e nos ribeiros de Arnom,
¹⁵ e à corrente dos ribeiros, que se inclina para a habitação de Ar e se encosta aos termos de Moabe.
¹⁶ E dali partiram para Beer; este é o poço do qual o SENHOR disse a Moisés: Ajunta o povo e lhe darei água.
¹⁷ Então Israel cantou este cântico: Brota, ó poço! Cantai dele:
¹⁸ Tu, poço, que os príncipes cavaram, que os nobres do povo cavaram, com o legislador e com os seus bordões. E do deserto partiram para Matana;
¹⁹ e de Matana para Naaliel, e de Naaliel para Bamote;
²⁰ e de Bamote ao vale que está no campo de Moabe, no cume de Pisga, que olha para o deserto.
²¹ Então Israel enviou mensageiros a Sião, rei dos amorreus, dizendo:
²² Deixa-me passar pela tua terra; não nos desviaremos pelos campos nem pelas vinhas; as águas dos poços não beberemos; iremos pela estrada real até que passemos os teus termos.
²³ Porém Sião não deixou passar a Israel pelos seus termos; antes Sião ajuntou todo o seu povo, e saiu ao encontro de Israel ao deserto, e veio a Jaza, e pelejou contra Israel.
²⁴ Mas Israel o feriu ao fio da espada, e tomou a sua terra em possessão, desde Arnom até Jaboque, até aos filhos de Amom; porquanto o termo dos filhos de Amom era forte.
²⁵ Assim Israel tomou todas estas cidades; e Israel habitou em todas as cidades dos amorreus, em Hesbom e em todas as suas aldeias.
²⁶ Porque Hesbom era cidade de Sião, rei dos amorreus, que tinha pelejado contra o anterior rei de Moabe, e tinha tomado da sua mão toda a sua terra até Arnom.
²⁷ Pelo que dizem os que falam em provérbios: Vinde a Hesbom; edifique-se e estabeleça-se a cidade de Sião.
²⁸ Porque fogo saiu de Hesbom, e uma chama da cidade de Sião; e consumiu a Ar de Moabe e os senhores dos altos de Arnom.
²⁹ Ai de ti, Moabe! pereceste, povo de Quemós! Entregou seus filhos, que iam fugindo, e suas filhas, como cativas a Sião, rei dos amorreus.
³⁰ E nós os derrubamos; Hesbom pereceu até Dibom, e os assolamos até Nofá, que chega a Medeba.
³¹ Assim Israel habitou na terra dos amorreus.
³² Depois enviou Moisés a espiar a Jazer, e tomaram as suas aldeias, e expulsaram os amorreus que estavam ali.
³³ Então voltaram e subiram pelo caminho de Basã; e Ogue, rei de Basã, saiu contra eles, ele e todo o seu povo, à peleja em Edrei.
³⁴ E disse o SENHOR a Moisés: Não o temas, porque eu o tenho entregue na tua mão, a ele, e a todo o seu povo, e a sua terra; e far-lhe-ás como fizeste a Sião, rei dos amorreus, que habitava em Hesbom.
³⁵ E de tal maneira o feriram, a ele e a seus filhos, e a todo o seu povo, que nenhum deles ficou de resto; e tomaram a sua terra em possessão.
`,

            // O DESAFIO
            pergunta: {
                texto: "O que o SENHOR ordenou que Moisés fizesse para curar os israelitas que eram picados pelas serpentes ardentes no deserto?",
                opcoes: [
                    { numero: 1, texto: "Deveriam lavar as feridas na água de Beer", correta: false },
                    { numero: 2, texto: "Deveriam oferecer um sacrifício de pombas", correta: false },
                    { numero: 3, texto: "Moisés deveria fazer uma serpente de metal e colocá-la sobre uma haste", correta: true },
                    { numero: 4, texto: "O povo deveria retornar ao Egito para buscar remédios", correta: false }
                ],
                explicacao: "Números 21:8-9 - Deus providenciou um meio de cura através do olhar de fé; quem olhasse para a serpente de bronze após ser picado, vivia.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 22 ---
        22: {
            titulo: "Balaque e Balaão",
            subtitulo: "O rei de Moabe convoca o profeta e o incidente da jumenta que falou",

            texto: `
¹ Depois partiram os filhos de Israel, e acamparam-se nas campinas de Moabe, além do Jordão, na altura de Jericó.
² Viu, pois, Balaque, filho de Zipor, tudo quanto Israel fizera aos amorreus;
³ e Moabe temeu muito diante deste povo, porque era muito; e Moabe andava angustiado por causa dos filhos de Israel.
⁴ Pelo que Moabe disse aos anciãos de Midiã: Agora lamberá esta congregação tudo quanto houver ao redor de nós, como o boi lambe a erva do campo. Nesse tempo Balaque, filho de Zipor, era rei de Moabe.
⁵ Ele enviou mensageiros a Balaão, filho de Beor, a Petor, que está junto ao rio, na terra dos filhos do seu povo, a chamá-lo, dizendo: Eis que um povo saiu do Egito; eis que cobre a face da terra, e está parado defronte de mim.
⁶ Vem, pois, agora, rogo-te, amaldiçoa-me este povo, pois mais poderoso é do que eu; para ver se porventura o poderei ferir e o lançarei fora da terra; porque eu sei que a quem tu abençoares será abençoado, e a quem tu amaldiçoares será amaldiçoado.
⁷ Então foram-se os anciãos de Moabe e os anciãos de Midiã com o preço dos encantamentos nas suas mãos; e chegaram a Balaão, e disseram-lhe as palavras de Balaque.
⁸ E ele lhes disse: Ficai aqui esta noite, e vos trarei a resposta, como o SENHOR me falar; então os príncipes de Moabe ficaram com Balaão.
⁹ E veio Deus a Balaão, e disse: Quem são estes homens que estão contigo?
¹⁰ E Balaão disse a Deus: Balaque, filho de Zipor, rei de Moabe, os enviou a mim, dizendo:
¹¹ Eis que o povo que saiu do Egito cobriu a face da terra; vem agora, amaldiçoa-o; porventura poderei pelejar contra ele e lançá-lo fora.
¹² Então disse Deus a Balaão: Não irás com eles, nem amaldiçoarás a este povo, porquanto bendito é.
¹³ Então levantou-se Balaão pela manhã, e disse aos príncipes de Balaque: Ide à vossa terra, porque o SENHOR recusa deixar-me ir convosco.
¹⁴ E levantaram-se os príncipes de Moabe, e vieram a Balaque, e disseram: Balaão recusou vir conosco.
¹⁵ Porém Balaque tornou a enviar mais príncipes, e mais honrados do que aqueles.
¹⁶ Os quais vieram a Balaão e lhe disseram: Assim diz Balaque, filho de Zipor: Rogo-te que não te demores em vir a mim.
¹⁷ Porque grandemente te honrarei, e farei tudo o que me disseres; vem, pois, rogo-te, amaldiçoa-me este povo.
¹⁸ Então Balaão respondeu, e disse aos servos de Balaque: Ainda que Balaque me desse a sua casa cheia de prata e de ouro, eu não poderia traspassar o mandado do SENHOR meu Deus, para fazer coisa pequena ou grande.
¹⁹ Agora, pois, rogo-vos que também aqui fiqueis esta noite, para que eu saiba o que o SENHOR me dirá mais.
²⁰ Veio, pois, Deus a Balaão de noite, e disse-lhe: Se aqueles homens vieram chamar-te, levanta-te, vai com eles; todavia, farás o que eu te disser.
²¹ Então levantou-se Balaão pela manhã, e albardou a sua jumenta, e foi-se com os príncipes de Moabe.
²² E a ira de Deus acendeu-se, porque ele se ia; e o anjo do SENHOR pôs-se-lhe no caminho por adversário; e ele ia cavalgando na sua jumenta, e dois de seus moços com ele.
²³ Viu, pois, a jumenta o anjo do SENHOR, que estava no caminho, com a sua espada desembainhada na mão; pelo que desviou-se a jumenta do caminho, e ia pelo campo; então Balaão espancou a jumenta para fazê-la tornar ao caminho.
²⁴ Mas o anjo do SENHOR pôs-se numa vereda de vinhas, onde havia uma parede de um lado e uma parede do outro.
²⁵ Vendo, pois, a jumenta o anjo do SENHOR, apertou-se contra a parede, e apertou contra a parede o pé de Balaão; por isso tornou a espancá-la.
²⁶ Então o anjo do SENHOR passou mais adiante, e pôs-se num lugar estreito, onde não havia caminho para se desviar nem para a direita nem para a esquerda.
²⁷ E, vendo a jumenta o anjo do SENHOR, deitou-se debaixo de Balaão; e a ira de Balaão acendeu-se, e espancou a jumenta com o bordão.
²⁸ Então o SENHOR abriu a boca da jumenta, a qual disse a Balaão: Que te fiz eu, que me espancaste estas três vezes?
²⁹ E Balaão disse à jumenta: Por que zombaste de mim; oxalá tivesse eu uma espada na mão, que agora te mataria.
³⁰ E a jumenta disse a Balaão: Porventura não sou a tua jumenta, em que cavalgaste desde o tempo que eu fui tua até hoje? Costumei eu alguma vez fazer assim contigo? E ele respondeu: Não.
³¹ Então o SENHOR abriu os olhos a Balaão, e ele viu o anjo do SENHOR, que estava no caminho, e a sua espada desembainhada na mão; pelo que inclinou a cabeça, e prostrou-se sobre o seu rosto.
³² Então o anjo do SENHOR lhe disse: Por que espancaste a tua jumenta estas três vezes? Eis que eu saí para ser teu adversário, porquanto o teu caminho é perverso diante de mim;
³³ porém a jumenta me viu, e já três vezes se desviou de diante de mim; se ela se não desviara de diante de mim, na verdade que eu agora te mataria, e a ela deixaria com vida.
³⁴ Então Balaão disse ao anjo do SENHOR: Pequei, porque não sabia que estavas no caminho para te opores a mim; e agora, se parece mal aos teus olhos, voltar-me-ei.
³⁵ E disse o anjo do SENHOR a Balaão: Vai-te com estes homens; mas somente a palavra que eu te disser, esta falarás. Assim Balaão foi-se com os príncipes de Balaque.
³⁶ Ouvindo, pois, Balaque que Balaão vinha, saiu-lhe ao encontro até à cidade de Moabe, que está no termo de Arnom, na extremidade do termo.
³⁷ E Balaque disse a Balaão: Porventura não enviei diligentemente a chamar-te? Por que não vieste a mim? Não posso eu na verdade honrar-te?
³⁸ Então Balaão disse a Balaque: Eis que eu sou vindo a ti; porventura poderei eu agora falar alguma coisa? A palavra que Deus puser na minha boca, essa falarei.
³⁹ E Balaão foi com Balaque, e vieram a Quiriate-Huzote.
⁴⁰ Então Balaque matou bois e ovelhas, e deles enviou a Balaão e aos príncipes que estavam com ele.
⁴¹ E sucedeu que, pela manhã, Balaque tomou a Balaão, e o fez subir aos altos de Baal, e viu ele dali a última parte do povo.
`,

            // O DESAFIO
            pergunta: {
                texto: "O que impediu a jumenta de Balaão de prosseguir pelo caminho e o que aconteceu quando Balaão a espancou pela terceira vez?",
                opcoes: [
                    { numero: 1, texto: "Um leão no caminho; a jumenta fugiu para o deserto", correta: false },
                    { numero: 2, texto: "O anjo do SENHOR com uma espada; o SENHOR abriu a boca da jumenta para que ela falasse", correta: true },
                    { numero: 3, texto: "Uma grande tempestade; a jumenta se recusou a andar", correta: false },
                    { numero: 4, texto: "O próprio rei Balaque; ele proibiu a passagem", correta: false }
                ],
                explicacao: "Números 22:23-28 - O anjo do SENHOR barrou o caminho devido à perversidade da intenção de Balaão, e Deus operou o milagre de fazer a jumenta falar para repreender o profeta.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 23 ---
        23: {
            titulo: "As Primeiras Profecias de Balaão",
            subtitulo: "A impossibilidade de amaldiçoar quem Deus abençoou",

            texto: `
¹ Então Balaão disse a Balaque: Edifica-me aqui sete altares, e prepara-me aqui sete novilhos e sete carneiros.
² Fez, pois, Balaque como Balaão dissera; e Balaque e Balaão ofereceram um novilho e um carneiro em cada altar.
³ Então Balaão disse a Balaque: Fica-te junto do teu holocausto, e eu irei; porventura o SENHOR me sairá ao encontro, e o que me mostrar te notificarei. Então foi a um lugar alto.
⁴ E encontrou-se Deus com Balaão, o qual lhe disse: Preparei sete altares, e ofereci um novilho e um carneiro em cada altar.
⁵ Então o SENHOR pôs a palavra na boca de Balaão, e disse: Torna para Balaque, e assim falarás.
⁶ E, tornando para ele, eis que estava junto do seu holocausto, ele e todos os príncipes de Moabe.
⁷ Então proferiu a sua parábola, e disse: De Arã me fez trazer Balaque, rei de Moabe, dos montes do oriente, dizendo: Vem, amaldiçoa-me a Jacó; e vem, denuncia a Israel.
⁸ Como amaldiçoarei a quem Deus não amaldiçoou? E como denunciarei a quem o SENHOR não denunciou?
⁹ Porque do cume das penhas o vejo, e dos outeiros o contemplo; eis que este povo habitará só, e entre as nações não será contado.
¹⁰ Quem contará o pó de Jacó e o número da quarta parte de Israel? Que a minha alma morra da morte dos justos, e seja o meu fim como o seu!
¹¹ Então disse Balaque a Balaão: Que me fizeste? Chamei-te para amaldiçoar os meus inimigos, mas eis que inteiramente os abençoaste.
¹² E ele respondeu, e disse: Não terei cuidado de falar o que o SENHOR pôs na minha boca?
¹³ Então Balaque lhe disse: Rogo-te que venhas comigo a outro lugar, de onde o verás; verás somente a última parte dele, mas a todo ele não verás; e amaldiçoa-mo dali.
¹⁴ E levou-o ao campo de Zofim, ao cume de Pisga; e edificou sete altares, e ofereceu um novilho e um carneiro em cada altar.
¹⁵ Então disse a Balaque: Fica-te aqui junto do teu holocausto, e eu irei ao encontro do SENHOR ali.
¹⁶ E, encontrando-se o SENHOR com Balaão, pôs uma palavra na sua boca, e disse: Torna para Balaque, e assim falarás.
¹⁷ E, vindo a ele, eis que estava junto do seu holocausto, e os príncipes de Moabe com ele; disse-lhe pois Balaque: Que falou o SENHOR?
¹⁸ Então proferiu a sua parábola, e disse: Levanta-te, Balaque, e ouve; dá ouvidos a mim, filho de Zipor.
¹⁹ Deus não é homem, para que minta; nem filho do homem, para que se arrependa; porventura diria ele, e não o faria? Ou falaria, e não o confirmaria?
²⁰ Eis que recebi mandado de abençoar; pois ele abençoou, e eu não o posso revogar.
²¹ Não viu iniquidade em Jacó, nem contemplou maldade em Israel; o SENHOR seu Deus é com ele, e nele se ouve o alarido de um rei.
²² Deus os tirou do Egito; as suas forças são como as do unicórnio.
²³ Pois contra Jacó não há encantamento, nem adivinhação contra Israel; neste tempo se dirá de Jacó e de Israel: Que coisas Deus tem feito!
²⁴ Eis que o povo se levantará como leoa, e se erguerá como leão; não se deitará até que coma a presa, e beba o sangue dos mortos.
²⁵ Então Balaque disse a Balaão: Nem de todo o amaldiçoarás, nem de todo o abençoarás.
²⁶ Porém Balaão respondeu, e disse a Balaque: Não te falei eu, dizendo: Tudo o que o SENHOR falar, isso farei?
²⁷ Disse mais Balaque a Balaão: Vem agora, levar-te-ei a outro lugar; porventura parecerá bem aos olhos de Deus que dali mo amaldiçoes.
²⁸ Então Balaque levou Balaão ao cume de Peor, que olha para o deserto.
²⁹ E Balaão disse a Balaque: Edifica-me aqui sete altares, e prepara-me sete novilhos e sete carneiros.
³⁰ Fez, pois, Balaque como Balaão dissera; e ofereceu um novilho e um carneiro em cada altar.
`,

            // O DESAFIO
            pergunta: {
                texto: "O que Balaão afirmou sobre a natureza de Deus para explicar por que não poderia mudar a benção dada a Israel?",
                opcoes: [
                    { numero: 1, texto: "Que Deus é como um homem que muda de ideia", correta: false },
                    { numero: 2, texto: "Que Deus não é homem para que minta, nem filho do homem para que se arrependa", correta: true },
                    { numero: 3, texto: "Que Deus só abençoa aqueles que oferecem sacrifícios", correta: false },
                    { numero: 4, texto: "Que Deus teme o poder de Moabe", correta: false }
                ],
                explicacao: "Números 23:19 - Balaão destaca a imutabilidade e a fidelidade de Deus à Sua palavra, contrastando a natureza divina com a inconstância humana.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 24 ---
        24: {
            titulo: "A Terceira e Quarta Profecias de Balaão",
            subtitulo: "A visão da glória de Israel e a estrela que procederia de Jacó",

            texto: `
¹ Vendo Balaão que bem parecia aos olhos do SENHOR que abençoasse a Israel, não se foi, como das outras vezes, ao encontro de encantamentos; mas pôs o seu rosto para o deserto.
² E, levantando Balaão os seus olhos, viu a Israel acampado segundo as suas tribos; e veio sobre ele o Espírito de Deus.
³ E proferiu a sua parábola, e disse: Fala Balaão, filho de Beor, e fala o homem de olhos abertos;
⁴ fala aquele que ouviu as palavras de Deus, o que vê a visão do Todo-Poderoso, caindo em êxtase, e tendo os olhos abertos:
⁵ Quão formosas são as tuas tendas, ó Jacó, as tuas moradas, ó Israel!
⁶ Como ribeiros se estendem, como jardins à beira dos rios; como árvores de sândalo que o SENHOR plantou, como cedros junto às águas.
⁷ De seus baldes manará água, e a sua semente estará em muitas águas; e o seu rei se exaltará mais do que Agague, e o seu reino será exaltado.
⁸ Deus o tirou do Egito; as suas forças são como as do unicórnio; consumirá as nações, seus inimigos, e quebrará seus ossos, e com as suas setas os atravessará.
⁹ Encurvou-se, deitou-se como leão, e como leoa; quem o despertará? Benditos os que te abençoarem, e malditos os que te amaldiçoarem.
¹⁰ Então a ira de Balaque se acendeu contra Balaão, e bateu ele as suas palmas; e Balaque disse a Balaão: Para amaldiçoar os meus inimigos te tenho chamado; mas eis que já estas três vezes inteiramente os abençoaste.
¹¹ Agora, pois, foge para o teu lugar; eu tinha dito que te honraria grandemente; mas eis que o SENHOR te privou desta honra.
¹² Então Balaão disse a Balaque: Não falei eu também aos teus mensageiros, que me enviaste, dizendo:
¹³ Ainda que Balaque me desse a sua casa cheia de prata e de ouro, não poderia traspassar o mandado do SENHOR, fazendo bem ou mal de meu próprio coração; o que o SENHOR falar, isso falarei eu?
¹⁴ Agora, pois, eis que me vou ao meu povo; vem, avisar-te-ei do que este povo há de fazer ao teu povo nos últimos dias.
¹⁵ Então proferiu a sua parábola, e disse: Fala Balaão, filho de Beor, e fala o homem de olhos abertos;
¹⁶ fala aquele que ouviu as palavras de Deus, e o que sabe a ciência do Altíssimo, o que vê a visão do Todo-Poderoso, caindo em êxtase, e tendo os olhos abertos:
¹⁷ Vê-lo-ei, mas não agora; contemplá-lo-ei, mas não de perto; uma estrela procederá de Jacó e um cetro se levantará de Israel, que ferirá os termos de Moabe, e destruirá a todos os filhos de Sete.
¹⁸ E Edom será uma possessão, e Seir, seus inimigos, também será uma possessão; mas Israel fará proezas.
¹⁹ E dominará um de Jacó, e destruirá os sobreviventes das cidades.
²⁰ E, vendo os amalequitas, proferiu a sua parábola, e disse: Amaleque é a primeira das nações; porém o seu fim será a destruição.
²¹ E, vendo os queneus, proferiu a sua parábola, e disse: Forte é a tua habitação, e puseste o teu ninho na penha.
²² Todavia o queneu será consumido, até que Assur te leve cativo.
²³ E, proferindo ainda a sua parábola, disse: Ai, quem viverá, quando Deus fizer isto?
²⁴ E as naus virão das costas de Quitim e afligirão a Assur; também afligirão a Éber; e também ele mesmo será para destruição.
²⁵ Então Balaão levantou-se, e foi-se, e voltou ao seu lugar, e também Balaque se foi pelo seu caminho.
`,

            // O DESAFIO
            pergunta: {
                texto: "Na quarta profecia de Balaão, qual símbolo profético ele usa para descrever o futuro governante que surgiria de Israel e dominaria Moabe?",
                opcoes: [
                    { numero: 1, texto: "Uma nuvem de fogo e um escudo", correta: false },
                    { numero: 2, texto: "Uma estrela e um cetro", correta: true },
                    { numero: 3, texto: "Uma espada e uma coroa", correta: false },
                    { numero: 4, texto: "Um rio e uma montanha", correta: false }
                ],
                explicacao: "Números 24:17 - Balaão profetiza que 'uma estrela procederá de Jacó e um cetro se levantará de Israel', indicando a linhagem messiânica e real de Israel.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 25 ---
        25: {
            titulo: "O Pecado de Baal-Peor",
            subtitulo: "A idolatria com as moabitas e o zelo de Fineias",

            texto: `
¹ E Israel deteve-se em Sitim; e o povo começou a prostituir-se com as filhas de Moabe.
² E elas convidaram o povo aos sacrifícios dos seus deuses; e o povo comeu, e inclinou-se aos seus deuses.
³ Juntando-se, pois, Israel a Baal-Peor, a ira do SENHOR se acendeu contra Israel.
⁴ Disse o SENHOR a Moisés: Toma todos os cabeças do povo, e enforca-os ao SENHOR diante do sol, e o ardor da ira do SENHOR se retirará de Israel.
⁵ Então Moisés disse aos juízes de Israel: Cada um mate os seus homens que se juntaram a Baal-Peor.
⁶ E eis que veio um homem dos filhos de Israel, e trouxe a seus irmãos uma midianita, à vista de Moisés, e à vista de toda a congregação dos filhos de Israel, chorando eles à porta da tenda da congregação.
⁷ Vendo isso Fineias, filho de Eleazar, o filho de Arão, o sacerdote, levantou-se do meio da congregação, e tomou uma lança na sua mão;
⁸ e foi após o homem israelita até à tenda, e os atravessou a ambos, ao homem israelita e à mulher, pelo ventre; assim a praga cessou de sobre os filhos de Israel.
⁹ E os que morreram daquela praga foram vinte e quatro mil.
¹⁰ Então falou o SENHOR a Moisés, dizendo:
¹¹ Fineias, filho de Eleazar, o filho de Arão, o sacerdote, desviou a minha ira de sobre os filhos de Israel, pois foi zeloso com o meu zelo no meio deles; de sorte que no meu zelo não consumi os filhos de Israel.
¹² Portanto dize: Eis que lhe dou a minha aliança de paz;
¹³ e ele, e a sua descendência depois dele, terá a aliança do sacerdócio perpétuo; porquanto teve zelo pelo seu Deus, e fez expiação pelos filhos de Israel.
¹⁴ E o nome do israelita morto, que foi morto com a midianita, era Zinri, filho de Salu, príncipe da casa paterna dos simeonitas.
¹⁵ E o nome da mulher midianita morta era Cozbi, filha de Zur, cabeça do povo entre as casas paternas em Midiã.
¹⁶ Falou mais o SENHOR a Moisés, dizendo:
¹⁷ Afligi os midianitas, e feri-os;
¹⁸ porque eles vos afligiram a vós com as suas ciladas com que vos enganaram no caso de Peor, e no caso de Cozbi, filha do príncipe de Midiã, sua irmã, que foi morta no dia da praga no caso de Peor.
`,

            // O DESAFIO
            pergunta: {
                texto: "Quem foi o neto de Arão que, tomado de zelo, interrompeu a praga em Israel ao executar o casal que desafiava a santidade do acampamento?",
                opcoes: [
                    { numero: 1, texto: "Eleazar", correta: false },
                    { numero: 2, texto: "Fineias", correta: true },
                    { numero: 3, texto: "Josué", correta: false },
                    { numero: 4, texto: "Calebe", correta: false }
                ],
                explicacao: "Números 25:7-13 - O ato de Fineias foi considerado por Deus como um ato de expiação e zelo, garantindo a ele e à sua descendência uma aliança de sacerdócio perpétuo.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 26 ---
        26: {
            titulo: "O Segundo Recenseamento de Israel",
            subtitulo: "A contagem da nova geração nas campinas de Moabe",

            texto: `
¹ E aconteceu, depois daquela praga, que falou o SENHOR a Moisés, e a Eleazar, filho de Arão, o sacerdote, dizendo:
² Tomai a soma de toda a congregação dos filhos de Israel, da idade de vinte anos para cima, segundo as casas de seus pais; todos os que em Israel podem sair à guerra.
³ Falaram-lhes, pois, Moisés e Eleazar, o sacerdote, nas campinas de Moabe, junto ao Jordão, na altura de Jericó, dizendo:
⁴ Contai o povo da idade de vinte anos para cima, como o SENHOR ordenara a Moisés e aos filhos de Israel, que saíram da terra do Egito.
⁵ Rúben, o primogênito de Israel; os filhos de Rúben: de Enoque, a família dos enoquitas; de Palu, a família dos paluítas;
⁶ de Hezrom, a família dos hezronitas; de Carmi, a família dos carmitas.
⁷ Estas são as famílias dos rubenitas; e os que foram deles contados foram quarenta e três mil setecentos e trinta.
⁸ E o filho de Palu: Eliabe.
⁹ E os filhos de Eliabe: Nemuel, Datã e Abirão; estes são aqueles Datã e Abirão, chamados da congregação, que contenderam contra Moisés e contra Arão na congregação de Corá, quando contenderam contra o SENHOR;
¹⁰ e a terra abriu a sua boca, e os tragou com Corá, quando morreu aquela congregação; quando o fogo consumiu duzentos e cinquenta homens, e serviram de sinal.
¹¹ Mas os filhos de Corá não morreram.
¹² Os filhos de Simeão, segundo as suas famílias: de Nemuel, a família dos nemuelitas; de Jamim, a família dos jaminitas; de Jaquim, a família dos jaquinitas;
¹³ de Zerá, a família dos zeraítas; de Saul, a família dos saulitas.
¹⁴ Estas são as famílias dos simeonitas: vinte e dois mil e duzentos.
¹⁵ Os filhos de Gade, segundo as suas famílias: de Zefom, a família dos zefonitas; de Agui, a família dos aguítas; de Suni, a família dos sunitas;
¹⁶ de Ozni, a família dos oznitas; de Eri, a família dos eritas;
¹⁷ de Arodi, a família dos aroditas; de Areli, a família dos arelitas.
¹⁸ Estas são as famílias dos filhos de Gade, segundo os que foram deles contados: quarenta mil e quinhentos.
¹⁹ Os filhos de Judá: Er e Onã; mas Er e Onã morreram na terra de Canaã.
²⁰ Assim os filhos de Judá foram, segundo as suas famílias: de Selá, a família dos selaítas; de Perez, a família dos perezitas; de Zerá, a família dos zeraítas.
²¹ E os filhos de Perez foram: de Hezrom, a família dos hezronitas; de Hamul, a família dos hamulitas.
²² Estas são as famílias de Judá, segundo os que foram deles contados: setenta e seis mil e quinhentos.
²³ Os filhos de Issacar, segundo as suas famílias: de Tola, a família dos tolaítas; de Puva, a família dos puvitas;
²⁴ de Jasube, a família dos jasubitas; de Sinrom, a família dos sinromitas.
²⁵ Estas são as famílias de Issacar, segundo os que foram deles contados: sessenta e quatro mil e trezentos.
²⁶ Os filhos de Zebulom, segundo as suas famílias: de Serede, a família dos sereditas; de Elom, a família dos elonitas; de Jaleel, a família dos jaleelitas.
²⁷ Estas são as famílias dos zebulonitas, segundo os que foram deles contados: sessenta mil e quinhentos.
²⁸ Os filhos de José, segundo as suas famílias: Manassés e Efraim.
²⁹ Os filhos de Manassés: de Maquir, a família dos maquiritas; e Maquir gerou a Gileade; de Gileade, a família dos gileaditas.
³⁰ Estes são os filhos de Gileade: de Iezer, a família dos iezeritas; de Heleque, a família dos helequitas;
³¹ de Asriel, a família dos asrielitas; de Siquém, a família dos siquemitas;
³² de Semida, a família dos semidaitas; de Hefer, a família dos heferitas.
³³ E Zelofeade, filho de Hefer, não tinha filhos, senão filhas; e os nomes das filhas de Zelofeade eram Maala, Noa, Hogla, Milca e Tirza.
³⁴ Estas são as famílias de Manassés; e os que foram deles contados foram cinquenta e dois mil e setecentos.
³⁵ Estes são os filhos de Efraim, segundo as suas famílias: de Sutela, a família dos sutelaítas; de Bequer, a família dos bequeritas; de Taã, a família dos taanitas.
³⁶ E estes são os filhos de Sutela: de Erã, a família dos eranitas.
³⁷ Estas são as famílias dos filhos de Efraim, segundo os que foram deles contados: trinta e dois mil e quinhentos. Estes são os filhos de José, segundo as suas famílias.
³⁸ Os filhos de Benjamim, segundo as suas famílias: de Belá, a família dos belaítas; de Asbel, a família dos asbelitas; de Airã, a família dos airamitas;
³⁹ de Sufã, a família dos sufamitas; de Hufã, a família dos hufamitas.
⁴⁰ E os filhos de Belá foram Arde e Naamã: de Arde, a família dos arditas; de Naamã, a família dos naamitas.
⁴¹ Estes são os filhos de Benjamim, segundo as suas famílias; e os que foram deles contados foram quarenta e cinco mil e seiscentos.
⁴² Estes são os filhos de Dã, segundo as suas famílias: de Suaão, a família dos suaanitas. Estas são as famílias de Dã, segundo as suas famílias.
⁴³ Todas as famílias dos suaanitas, segundo os que foram deles contados, foram sessenta e quatro mil e quatrocentos.
⁴⁴ Os filhos de Aser, segundo as suas famílias: de Imna, a família dos imnaitas; de Isvi, a família dos isvitas; de Berias, a família dos beriaítas.
⁴⁵ Dos filhos de Berias: de Héber, a família dos heberitas; de Malquiel, a família dos malquielitas.
⁴⁶ E o nome da filha de Aser era Sera.
⁴⁷ Estas são as famílias dos filhos de Aser, segundo os que foram deles contados: cinquenta e três mil e quatrocentos.
⁴⁸ Os filhos de Naftali, segundo as suas famílias: de Jazeel, a família dos jazeelitas; de Guni, a família dos gunitas;
⁴⁹ de Jezer, a família dos jezeritas; de Silém, a família dos silemitas.
⁵⁰ Estas são as famílias de Naftali, segundo as suas famílias; e os que foram deles contados foram quarenta e cinco mil e quatrocentos.
⁵¹ Estes são os contados dos filhos de Israel: seiscentos e um mil setecentos e trinta.
⁵² E falou o SENHOR a Moisés, dizendo:
⁵³ A estes se repartirá a terra em herança, segundo o número dos nomes.
⁵⁴ Àqueles que forem muitos, aumentarás a sua herança; e àqueles que forem poucos, diminuirás a sua herança; a cada um se dará a sua herança segundo os que foram dele contados.
⁵⁵ Todavia a terra se repartirá por sortes; segundo os nomes das tribos de seus pais a herdarão.
⁵⁶ Segundo a sorte se repartirá a herança deles, entre os muitos e os poucos.
⁵⁷ E estes são os contados de Levi, segundo as suas famílias: de Gerson, a família dos gersonitas; de Coate, a família dos coatitas; de Merari, a família dos meraritas.
⁵⁸ Estas são as famílias de Levi: a família dos libnitas, a família dos hebronitas, a família dos malitas, a família dos musitas, a família dos coreítas. E Coate gerou a Anrão.
⁵⁹ E o nome da mulher de Anrão era Joquebede, filha de Levi, a qual nasceu a Levi no Egito; e de Anrão ela teve a Arão, e a Moisés, e a Miriã, sua irmã.
⁶⁰ E a Arão nasceram Nadabe e Abiú, Eleazar e Itamar.
⁶¹ Mas Nadabe e Abiú morreram quando ofereceram fogo estranho perante o SENHOR.
⁶² E os contados deles foram vinte e três mil, todos os varões da idade de um mês para cima; porque não foram contados entre os filhos de Israel, porquanto não lhes foi dada herança entre os filhos de Israel.
⁶³ Estes são os que foram contados por Moisés e Eleazar, o sacerdote, que contaram os filhos de Israel nas campinas de Moabe, junto ao Jordão, na altura de Jericó.
⁶⁴ E entre estes nenhum houve dos que foram contados por Moisés e Arão, o sacerdote, quando contaram os filhos de Israel no deserto de Sinai.
⁶⁵ Porque o SENHOR dissera deles: Certamente morrerão no deserto; e nenhum deles ficou, senão Calebe, filho de Jefoné, e Josué, filho de Num.
`,

            // O DESAFIO
            pergunta: {
                texto: "Ao final do segundo recenseamento, quantos homens da contagem original feita no Sinai (exceto Josué e Calebe) ainda restavam vivos?",
                opcoes: [
                    { numero: 1, texto: "Cerca de mil homens", correta: false },
                    { numero: 2, texto: "Apenas os levitas", correta: false },
                    { numero: 3, texto: "Nenhum", correta: true },
                    { numero: 4, texto: "Apenas os príncipes das tribos", correta: false }
                ],
                explicacao: "Números 26:64-65 - Cumprindo a sentença divina devido à incredulidade em Cades-Barneia, toda aquela geração pereceu no deserto, restando apenas os dois espias fiéis.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 27 ---
        27: {
            titulo: "As Filhas de Zelofeade e a Sucessão de Moisés",
            subtitulo: "Leis de herança feminina e a separação de Josué como novo líder",

            texto: `
¹ Então chegaram as filhas de Zelofeade, filho de Hefer, filho de Gileade, filho de Maquir, filho de Manassés, entre as famílias de Manassés, filho de José; e estes são os nomes delas: Maala, Noa, Hogla, Milca e Tirza;
² e apresentaram-se diante de Moisés, e diante de Eleazar, o sacerdote, e diante dos príncipes e de toda a congregação, à porta da tenda da congregação, dizendo:
³ Nosso pai morreu no deserto, e não estava na congregação dos que se ajuntaram contra o SENHOR na congregação de Corá; mas no seu próprio pecado morreu, e não teve filhos.
⁴ Por que se tiraria o nome de nosso pai do meio da sua família, porquanto não teve filhos? Dai-nos possessão entre os irmãos de nosso pai.
⁵ E Moisés levou a sua causa perante o SENHOR.
⁶ E falou o SENHOR a Moisés, dizendo:
⁷ As filhas de Zelofeade falam o que é justo; certamente lhes darás possessão de herança entre os irmãos de seu pai; e farás passar a elas a herança de seu pai.
⁸ E falarás aos filhos de Israel, dizendo: Quando alguém morrer, e não tiver filho, fareis passar a sua herança à sua filha.
⁹ E, se não tiver filha, dareis a sua herança a seus irmãos.
¹⁰ E, se não tiver irmãos, dareis a sua herança aos irmãos de seu pai.
¹¹ E, se também seu pai não tiver irmãos, dareis a sua herança ao seu parente mais chegado da sua família, para que a possua; isto aos filhos de Israel será por estatuto de direito, como o SENHOR ordenou a Moisés.
¹² Depois disse o SENHOR a Moisés: Sobe a este monte Abarim, e vê a terra que tenho dado aos filhos de Israel.
¹³ E, tendo-a visto, serás recolhido ao teu povo, tu também, como foi recolhido teu irmão Arão;
¹⁴ porquanto no deserto de Zim, na contenda da congregação, fostes rebeldes ao meu mandado de me santificardes nas águas diante dos seus olhos; estas são as águas de Meribá de Cades, no deserto de Zim.
¹⁵ Então respondeu Moisés ao SENHOR, dizendo:
¹⁶ O SENHOR, Deus dos espíritos de toda a carne, ponha um homem sobre a congregação,
¹⁷ que saia diante deles, e que entre diante deles, e que os faça sair, e que os faça entrar; para que a congregação do SENHOR não seja como ovelhas que não têm pastor.
¹⁸ Então disse o SENHOR a Moisés: Toma a Josué, filho de Num, homem em quem há o Espírito, e põe a tua mão sobre ele.
¹⁹ E apresenta-o perante Eleazar, o sacerdote, e perante toda a congregação, e dá-lhe as tuas ordens à vista deles.
²⁰ E porás sobre ele da tua glória, para que lhe obedeça toda a congregação dos filhos de Israel.
²¹ E por-se-á perante Eleazar, o sacerdote, o qual por ele consultará, segundo o juízo de Urim, perante o SENHOR; conforme à sua palavra sairão, e conforme à sua palavra entrarão, ele e todos os filhos de Israel com ele, e toda a congregação.
²² E fez Moisés como o SENHOR lhe ordenara; porque tomou a Josué, e apresentou-o perante Eleazar, o sacerdote, e perante toda a congregação;
²³ e sobre ele pôs as suas mãos, e lhe deu as suas ordens, como o SENHOR falara pela mão de Moisés.
`,

            // O DESAFIO
            pergunta: {
                texto: "Quem foi designado por Deus para ser o sucessor de Moisés e conduzir o povo de Israel, sendo descrito como um homem 'em quem há o Espírito'?",
                opcoes: [
                    { numero: 1, texto: "Calebe, filho de Jefoné", correta: false },
                    { numero: 2, texto: "Eleazar, o sacerdote", correta: false },
                    { numero: 3, texto: "Josué, filho de Num", correta: true },
                    { numero: 4, texto: "Fineias, filho de Eleazar", correta: false }
                ],
                explicacao: "Números 27:18-20 - Por ordem divina, Moisés impôs as mãos sobre Josué, transferindo-lhe parte de sua autoridade para que ele liderasse a entrada em Canaã.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 28 ---
        28: {
            titulo: "As Ofertas Diárias e Mensais",
            subtitulo: "Leis sobre os sacrifícios contínuos e as festas solenes",

            texto: `
¹ Falou mais o SENHOR a Moisés, dizendo:
² Dá ordem aos filhos de Israel, e dize-lhes: Da minha oferta, do meu manjar para as minhas ofertas queimadas, de cheiro suave para mim, tereis cuidado, para mas oferecer a seu tempo determinado.
³ E dir-lhes-ás: Esta é a oferta queimada que oferecereis ao SENHOR: dois cordeiros de um ano, sem defeito, cada dia, em contínuo holocausto.
⁴ Um cordeiro oferecerás pela manhã, e o outro cordeiro oferecerás à tarde;
⁵ e a décima parte de um efa de flor de farinha em oferta de manjares, misturada com a quarta parte de um him de azeite batido.
⁶ Este é o holocausto contínuo, instituído no monte Sinai, em cheiro suave, oferta queimada ao SENHOR.
⁷ E a sua libação será a quarta parte de um him para um cordeiro; no santuário oferecerás a libação de bebida forte ao SENHOR.
⁸ E o outro cordeiro oferecerás à tarde; como a oferta de manjares da manhã, e como a sua libação o oferecerás em oferta queimada de cheiro suave ao SENHOR.
⁹ Porém, no dia de sábado, dois cordeiros de um ano, sem defeito, e duas décimas partes de flor de farinha, misturada com azeite, em oferta de manjares, com a sua libação.
¹⁰ Este é o holocausto do sábado em cada sábado, além do holocausto contínuo, e a sua libação.
¹¹ E nos princípios dos vossos meses oferecereis em holocausto ao SENHOR dois novilhos e um carneiro, sete cordeiros de um ano, sem defeito.
¹² E três décimas partes de flor de farinha misturada com azeite em oferta de manjares, para um novilho; e duas décimas partes de flor de farinha misturada com azeite em oferta de manjares, para um carneiro.
¹³ E uma décima parte de flor de farinha misturada com azeite em oferta de manjares para um cordeiro; holocausto é de cheiro suave, oferta queimada ao SENHOR.
¹⁴ E as suas libações serão a metade de um him de vinho para um novilho, e a terça parte de um him para um carneiro, e a quarta parte de um him para um cordeiro; este é o holocausto do mês, em cada mês, por todos os meses do ano.
¹¹⁵ Também um bode para expiação do pecado ao SENHOR, além do holocausto contínuo, com a sua libação.
¹⁶ E no mês primeiro, aos catorze dias do mês, é a páscoa do SENHOR.
¹⁷ E aos quinze dias do mesmo mês haverá festa; sete dias se comerão pães asmos.
¹⁸ No primeiro dia haverá santa convocação; nenhum trabalho servil fareis;
¹⁹ mas oferecereis oferta queimada em holocausto ao SENHOR: dois novilhos e um carneiro, e sete cordeiros de um ano; eles serão sem defeito.
²⁰ E a sua oferta de manjares será de flor de farinha misturada com azeite; três décimas partes oferecereis para cada novilho, e duas décimas partes para cada carneiro.
²¹ Uma décima parte oferecerás para cada um dos sete cordeiros;
²² e um bode para expiação do pecado, para fazer expiação por vós.
²³ Estas coisas oferecereis, além do holocausto da manhã, que é o holocausto contínuo.
²⁴ Segundo este modo oferecereis cada dia, por sete dias, o manjar da oferta queimada em cheiro suave ao SENHOR; além do holocausto contínuo se oferecerá isto com a sua libação.
²⁵ E no sétimo dia tereis santa convocação; nenhum trabalho servil fareis.
²⁶ Semelhantemente, no dia das primícias, quando oferecerdes oferta nova de manjares ao SENHOR, segundo as vossas semanas, tereis santa convocação; nenhum trabalho servil fareis.
²⁷ Então oferecereis por holocausto, em cheiro suave ao SENHOR, dois novilhos, um carneiro e sete cordeiros de um ano.
²⁸ E a sua oferta de manjares de flor de farinha misturada com azeite: três décimas partes para cada novilho, duas décimas partes para um carneiro,
²⁹ e uma décima parte para cada um dos sete cordeiros;
³⁰ e um bode, para fazer expiação por vós.
³¹ Além do holocausto contínuo e a sua oferta de manjares os oferecereis (serão sem defeito), com as suas libações.
`,

            // O DESAFIO
            pergunta: {
                texto: "Quantos cordeiros de um ano, sem defeito, deveriam ser oferecidos diariamente como holocausto contínuo?",
                opcoes: [
                    { numero: 1, texto: "Apenas um, ao meio-dia", correta: false },
                    { numero: 2, texto: "Dois cordeiros (um pela manhã e outro à tarde)", correta: true },
                    { numero: 3, texto: "Sete cordeiros a cada manhã", correta: false },
                    { numero: 4, texto: "Doze cordeiros, representando as tribos", correta: false }
                ],
                explicacao: "Números 28:3-4 - A lei estabelecia o sacrifício diário de dois cordeiros para manter a adoração constante perante o SENHOR.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 29 ---
        29: {
            titulo: "As Ofertas das Festas do Sétimo Mês",
            subtitulo: "Sacrifícios para o Dia do Memorial, o Dia da Expiação e a Festa dos Tabernáculos",

            texto: `
¹ Semelhantemente, no sétimo mês, no primeiro dia do mês, tereis santa convocação; nenhum trabalho servil fareis; será para vós dia de tocar as trombetas.
² Então oferecereis por holocausto, em cheiro suave ao SENHOR, um novilho, um carneiro e sete cordeiros de um ano, sem defeito.
³ E a sua oferta de manjares de flor de farinha misturada com azeite: três décimas partes para o novilho, duas décimas partes para o carneiro,
⁴ e uma décima parte para cada um dos sete cordeiros;
⁵ e um bode para expiação do pecado, para fazer expiação por vós;
⁶ além do holocausto do mês e a sua oferta de manjares, e o holocausto contínuo e a sua oferta de manjares, com as suas libações, segundo o seu estatuto, em cheiro suave, oferta queimada ao SENHOR.
⁷ E no décimo dia deste sétimo mês tereis santa convocação, e afligireis as vossas almas; nenhum trabalho fareis.
⁸ Mas por holocausto, em cheiro suave ao SENHOR, oferecereis um novilho, um carneiro e sete cordeiros de um ano; eles serão sem defeito.
⁹ E a sua oferta de manjares de flor de farinha misturada com azeite: três décimas partes para o novilho, duas décimas partes para o carneiro,
¹⁰ e uma décima parte para cada um dos sete cordeiros;
¹¹ um bode para expiação do pecado, além da oferta de expiação pelos pecados, e do holocausto contínuo, e da sua oferta de manjares, com as suas libações.
¹² Semelhantemente, aos quinze dias deste sétimo mês, tereis santa convocação; nenhum trabalho servil fareis; mas sete dias celebrareis festa ao SENHOR.
¹³ E por holocausto, em oferta queimada de cheiro suave ao SENHOR, oferecereis treze novilhos, dois carneiros e catorze cordeiros de um ano; todos eles serão sem defeito.
¹⁴ E a sua oferta de manjares de flor de farinha misturada com azeite: três décimas partes para cada um dos treze novilhos, duas décimas partes para cada um dos dois carneiros,
¹⁵ e uma décima parte para cada um dos catorze cordeiros;
¹⁶ e um bode para expiação do pecado, além do holocausto contínuo, da sua oferta de manjares e da sua libação.
¹⁷ Depois, no segundo dia, doze novilhos, dois carneiros, catorze cordeiros de um ano, sem defeito;
¹⁸ e a sua oferta de manjares e as suas libações para os novilhos, para os carneiros e para os cordeiros, segundo o seu número, conforme ao estatuto;
¹⁹ e um bode para expiação do pecado, além do holocausto contínuo, da sua oferta de manjares e das suas libações.
²⁰ No terceiro dia, onze novilhos, dois carneiros, catorze cordeiros de um ano, sem defeito;
²¹ e a sua oferta de manjares e as suas libações para os novilhos, para os carneiros e para os cordeiros, segundo o seu número, conforme ao estatuto;
²² e um bode para expiação do pecado, além do holocausto contínuo, da sua oferta de manjares e da sua libação.
²³ No quarto dia, dez novilhos, dois carneiros, catorze cordeiros de um ano, sem defeito;
²⁴ a sua oferta de manjares e as suas libações para os novilhos, para os carneiros e para os cordeiros, segundo o seu número, conforme ao estatuto;
²⁵ e um bode para expiação do pecado, além do holocausto contínuo, da sua oferta de manjares e da sua libação.
²⁶ No quinto dia, nove novilhos, dois carneiros, catorze cordeiros de um ano, sem defeito;
²⁷ a sua oferta de manjares e as suas libações para os novilhos, para os carneiros e para os cordeiros, segundo o seu número, conforme ao estatuto;
²⁸ e um bode para expiação do pecado, além do holocausto contínuo, da sua oferta de manjares e da sua libação.
²⁹ No sexto dia, oito novilhos, dois carneiros, catorze cordeiros de um ano, sem defeito;
³⁰ a sua oferta de manjares e as suas libações para os novilhos, para os carneiros e para os cordeiros, segundo o seu número, conforme ao estatuto;
³¹ e um bode para expiação do pecado, além do holocausto contínuo, da sua oferta de manjares e da sua libação.
³² No sétimo dia, sete novilhos, dois carneiros, catorze cordeiros de um ano, sem defeito;
³³ a sua oferta de manjares e as suas libações para os novilhos, para os carneiros e para os cordeiros, segundo o seu número, conforme ao estatuto;
³⁴ e um bode para expiação do pecado, além do holocausto contínuo, da sua oferta de manjares e da sua libação.
³⁵ No oitavo dia tereis solenidade; nenhum trabalho servil fareis;
³⁶ mas oferecereis por holocausto, em oferta queimada de cheiro suave ao SENHOR, um novilho, um carneiro, sete cordeiros de um ano, sem defeito;
³⁷ a sua oferta de manjares e as suas libações para o novilho, para o carneiro e para os cordeiros, segundo o seu número, conforme ao estatuto;
³⁸ e um bode para expiação do pecado, além do holocausto contínuo, da sua oferta de manjares e da sua libação.
³⁹ Estas coisas oferecereis ao SENHOR nas vossas solenidades, além dos vossos votos, e das vossas ofertas voluntárias, para os vossos holocaustos, e para as vossas ofertas de manjares, e para as vossas libações, e para as vossas ofertas pacíficas.
⁴⁰ E disse Moisés aos filhos de Israel conforme a tudo o que o SENHOR ordenara a Moisés.
`,

            // O DESAFIO
            pergunta: {
                texto: "Durante a festa de sete dias que se iniciava no décimo quinto dia do sétimo mês (Tabernáculos), o que acontecia com o número de novilhos oferecidos em cada dia sucessivo?",
                opcoes: [
                    { numero: 1, texto: "O número aumentava em um a cada dia", correta: false },
                    { numero: 2, texto: "O número permanecia fixo em treze", correta: false },
                    { numero: 3, texto: "O número diminuía em um a cada dia", correta: true },
                    { numero: 4, texto: "Eram oferecidos apenas cordeiros após o terceiro dia", correta: false }
                ],
                explicacao: "Números 29:13-32 - A contagem começava com 13 novilhos no primeiro dia e decrescia progressivamente até chegar a 7 novilhos no sétimo dia da festa.",
                pontosGanhos: 20
            }
        },

        // --- INÍCIO DO CAPÍTULO 30 ---
        30: {
            titulo: "A Lei dos Votos",
            subtitulo: "A validade e a anulação de promessas feitas ao SENHOR",

            texto: `
¹ E falou Moisés aos cabeças das tribos dos filhos de Israel, dizendo: Esta é a palavra que o SENHOR ordenou:
² Quando um homem fizer voto ao SENHOR, ou fizer juramento, ligando a sua alma com obrigação, não violará a sua palavra; segundo tudo o que saiu da sua boca fará.
³ Também quando uma mulher fizer voto ao SENHOR, e com obrigação se ligar em casa de seu pai, na sua mocidade;
⁴ e seu pai ouvir o seu voto e a sua obrigação, com que ligou a sua alma, e seu pai se calar para com ela, todos os seus votos serão válidos, e toda a obrigação com que ligou a sua alma será válida.
⁵ Mas, se seu pai lho proibir no dia em que o ouvir, todos os seus votos e as suas obrigações com que ligou a sua alma não serão válidos; e o SENHOR lho perdoará, porquanto seu pai lho proibiu.
⁶ E, se ela tiver marido, e fizer votos, ou de seus lábios sair alguma coisa temerária com que ligue a sua alma;
⁷ e seu marido o ouvir, e se calar para com ela no dia em que o ouvir, os seus votos serão válidos, e as suas obrigações com que ligou a sua alma serão válidas.
⁸ Mas, se seu marido lho proibir no dia em que o ouvir, anulará o seu voto que estava sobre ela, como também a declaração temerária dos seus lábios, com que ligou a sua alma; e o SENHOR lho perdoará.
⁹ No tocante ao voto da viúva, ou da divorciada, tudo com que ligar a sua alma sobre ela será válido.
¹⁰ Porém, se fez voto em casa de seu marido, ou ligou a sua alma com obrigação por juramento;
¹¹ e seu marido o ouviu, e se calou para com ela, e não lho proibiu, todos os seus votos serão válidos, e toda a obrigação com que ligou a sua alma será válida.
¹² Mas, se seu marido os anulou inteiramente no dia em que os ouviu, tudo quanto saiu dos seus lábios, quer dos seus votos, quer da obrigação da sua alma, não será válido; seu marido os anulou, e o SENHOR lho perdoará.
¹³ Todo o voto, e todo o juramento de obrigação, para afligir a alma, seu marido o pode confirmar, ou seu marido o pode anular.
¹⁴ Porém, se seu marido, de dia em dia, se calar inteiramente para com ela, então confirma todos os seus votos e todas as suas obrigações que estão sobre ela; confirmado lhos tem, porquanto se calou para com ela no dia em que o ouviu.
¹⁵ Mas, se de todo os anular algum tempo depois de os ter ouvido, então ele levará a iniquidade dela.
¹⁶ Estes são os estatutos que o SENHOR ordenou a Moisés entre o marido e sua mulher; entre o pai e sua filha, na sua mocidade, em casa de seu pai.
`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com a lei dos votos, em que condição um voto feito por uma filha (na casa do pai) ou por uma esposa poderia ser anulado?",
                opcoes: [
                    { numero: 1, texto: "Sempre que a mulher se arrependesse do que disse", correta: false },
                    { numero: 2, texto: "Se o pai ou marido o proibisse no dia em que o ouvisse", correta: true },
                    { numero: 3, texto: "Se o voto envolvesse apenas ofertas em dinheiro", correta: false },
                    { numero: 4, texto: "Nunca, pois todo voto era irrevogável para todos", correta: false }
                ],
                explicacao: "Números 30:5, 8 - A autoridade para validar ou anular votos de mulheres dependentes cabia ao pai ou ao marido, desde que se manifestassem no momento em que tomassem conhecimento do voto.",
                pontosGanhos: 20
            }
        },

        // --- INÍCIO DO CAPÍTULO 31 ---
        31: {
            titulo: "A Vingança contra os Midianitas",
            subtitulo: "A guerra santa e a repartição dos despojos",

            texto: `
¹ E falou o SENHOR a Moisés, dizendo:
² Vinga os filhos de Israel dos midianitas; depois recolhido serás ao teu povo.
³ Falou, pois, Moisés ao povo, dizendo: Armem-se alguns de vós para a guerra, e saiam contra os midianitas, para fazerem a vingança do SENHOR nos midianitas.
⁴ Mil de cada tribo, entre todas as tribos de Israel, enviareis à guerra.
⁵ Assim foram dados, dos milhares de Israel, mil de cada tribo: doze mil armados para a guerra.
⁶ E Moisés os enviou à guerra, mil de cada tribo, e com eles Fineias, filho de Eleazar, o sacerdote, à guerra com os vasos do santuário e com as trombetas do alarido na sua mão.
⁷ E pelejaram contra os midianitas, como o SENHOR ordenara a Moisés; e mataram a todos os homens.
⁸ Mataram mais, além dos que já foram mortos, os reis dos midianitas: a Evi, e a Requem, e a Zur, e a Hur, e a Reba, cinco reis dos midianitas; também a Balaão, filho de Beor, mataram à espada.
⁹ Porém os filhos de Israel levaram presas as mulheres dos midianitas e as suas crianças; também levaram todos os seus animais e todo o seu gado, e todos os seus bens.
¹⁰ E queimaram a fogo todas as suas cidades com as suas habitações e todos os seus acampamentos.
¹¹ E tomaram todo o despojo e toda a presa de homens e de animais.
¹² E trouxeram a Moisés e a Eleazar, o sacerdote, e à congregação dos filhos de Israel, os cativos, e a presa, e o despojo, ao arraial, nas campinas de Moabe, que estão junto ao Jordão, na altura de Jericó.
¹³ Porém Moisés e Eleazar, o sacerdote, e todos os príncipes da congregação, saíram a recebê-los fora do arraial.
¹⁴ E indignou-se Moisés sobre os oficiais do exército, capitães dos milhares e capitães das centenas, que vinham do serviço da guerra.
¹⁵ E Moisés disse-lhes: Deixastes viver todas as mulheres?
¹⁶ Eis que estas foram as que, por conselho de Balaão, deram ocasião aos filhos de Israel de transgredir contra o SENHOR no caso de Peor; pelo que houve aquela praga na congregação do SENHOR.
¹⁷ Agora, pois, matai todo o homem entre as crianças, e matai toda a mulher que conheceu algum homem, deitando-se com ele.
¹⁸ Porém, todas as meninas que não conheceram homem, deitando-se com ele, deixai-as viver para vós.
¹⁹ E vós, acampai-vos sete dias fora do arraial; qualquer que tiver matado alguma pessoa, e qualquer que tiver tocado algum morto, ao terceiro dia e ao sétimo dia vos purificareis, vós e os vossos cativos.
²⁰ Também purificareis todo o vestuário, e todo o objeto de peles, e toda a obra de pelos de cabras, e todo o objeto de madeira.
²¹ E disse Eleazar, o sacerdote, aos homens de guerra que tinham ido à peleja: Este é o estatuto da lei que o SENHOR ordenou a Moisés:
²² Contudo o ouro, e a prata, o cobre, o ferro, o estanho, e o chumbo,
²³ toda a coisa que pode resistir ao fogo, fareis passar pelo fogo, para que fique limpa; todavia se purificará com a água da separação; mas tudo o que não pode resistir ao fogo, fareis passar pela água.
²⁴ Também lavareis as vossas vestes ao sétimo dia, para que fiqueis limpos; e depois entrareis no arraial.
²⁵ Falou mais o SENHOR a Moisés, dizendo:
²⁶ Toma a soma da presa que foi tomada, de homens e de animais, tu e Eleazar, o sacerdote, e os cabeças das casas paternas da congregação;
²⁷ e reparte a presa em duas metades, entre os que, armados, saíram à guerra, e toda a congregação.
²⁸ Então para o SENHOR tomarás o tributo dos homens de guerra, que saíram à guerra; de cada quinhentos uma alma, tanto dos homens, como dos bois, como dos jumentos e como das ovelhas.
²⁹ Da sua metade o tomareis, e o dareis a Eleazar, o sacerdote, para a oferta alçada do SENHOR.
³⁰ Mas, da metade dos filhos de Israel, tomarás um de cada cinquenta, tirado dos homens, dos bois, dos jumentos e das ovelhas, de todos os animais; e os darás aos levitas, que têm cuidado da guarda do tabernáculo do SENHOR.
³¹ E fizeram Moisés e Eleazar, o sacerdote, como o SENHOR ordenara a Moisés.
³² Foi, pois, a presa, o restante do despojo que tomaram os homens de guerra: seiscentas e setenta e cinco mil ovelhas;
³³ e setenta e dois mil bois;
³⁴ e sessenta e um mil jumentos;
³⁵ e, quanto aos homens, das mulheres que não conheceram homem, deitando-se com ele, todas as almas foram trinta e duas mil.
³⁶ E a metade, que era a parte dos que saíram à guerra, foi em número de trezentas e trinta e sete mil e quinhentas ovelhas.
³⁷ E do gado miúdo foi o tributo para o SENHOR seiscentas e setenta e cinco.
³⁸ E os bois foram trinta e seis mil; e o seu tributo para o SENHOR setenta e dois.
³⁹ E os jumentos foram trinta mil e quinhentos; e o seu tributo para o SENHOR sessenta e um.
⁴⁰ E as pessoas foram dezesseis mil; e o seu tributo para o SENHOR trinta e duas pessoas.
⁴¹ E deu Moisés a Eleazar, o sacerdote, o tributo da oferta alçada do SENHOR, como o SENHOR ordenara a Moisés.
⁴² E da metade dos filhos de Israel, que Moisés repartira dos homens que pelejaram
⁴³ (a metade, pois, da congregação, do gado miúdo, foi trezentas e trinta e sete mil e quinhentas ovelhas;
⁴⁴ e dos bois, trinta e seis mil;
⁴⁵ e dos jumentos, trinta mil e quinhentos;
⁴⁶ e das pessoas, dezesseis mil);
⁴⁷ desta metade dos filhos de Israel, Moisés tomou um de cada cinquenta, de homens e de animais, e os deu aos levitas, que tinham cuidado da guarda do tabernáculo do SENHOR, como o SENHOR ordenara a Moisés.
⁴⁸ Então chegaram-se a Moisés os oficiais que estavam sobre os milhares do exército, os capitães de milhares e os capitães de centenas;
⁴⁹ e disseram a Moisés: Teus servos tomaram a soma dos homens de guerra que estiveram sob as nossas mãos, e não falta nenhum de nós.
⁵⁰ Por isso trouxemos uma oferta ao SENHOR, cada um o que achou, objetos de ouro, cadeias, braceletes, anéis, arrecadas e colares, para fazer expiação por nossas almas perante o SENHOR.
⁵¹ Assim Moisés e Eleazar, o sacerdote, tomaram deles o ouro, todos os objetos bem trabalhados.
⁵² E foi todo o ouro da oferta alçada, que ofereceram ao SENHOR, dezesseis mil setecentos e cinquenta siclos, dos capitães de milhares e dos capitães de centenas
⁵³ (pois os homens de guerra tinham tomado despojo, cada um para si).
⁵⁴ Tomaram, pois, Moisés e Eleazar, o sacerdote, o ouro dos capitães de milhares e de centenas, e o trouxeram à tenda da congregação, por memorial para os filhos de Israel perante o SENHOR.
`,

            // O DESAFIO
            pergunta: {
                texto: "Quem foi o profeta/adivinho morto à espada pelos israelitas durante a guerra contra os midianitas?",
                opcoes: [
                    { numero: 1, texto: "Corá", correta: false },
                    { numero: 2, texto: "Balaão, filho de Beor", correta: true },
                    { numero: 3, texto: "Balaque, rei de Moabe", correta: false },
                    { numero: 4, texto: "Zinri, o simeonita", correta: false }
                ],
                explicacao: "Números 31:8 - Balaão, que anteriormente tentara amaldiçoar Israel e depois deu o conselho para seduzi-los à idolatria, foi morto junto com os cinco reis de Midiã.",
                pontosGanhos: 20
            }
        },

        // --- INÍCIO DO CAPÍTULO 32 ---
        32: {
            titulo: "As Tribos de Além-Jordão",
            subtitulo: "O pedido de Rúben, Gade e meia tribo de Manassés para habitarem em Gileade",

            texto: `
¹ E os filhos de Rúben e os filhos de Gade tinham gado em grande quantidade, em muita abundância; e viram a terra de Jazer, e a terra de Gileade, e eis que o lugar era lugar de gado.
² Vieram, pois, os filhos de Gade, e os filhos de Rúben, e falaram a Moisés e a Eleazar, o sacerdote, e aos príncipes da congregação, dizendo:
³ Atarote, e Dibom, e Jazer, e Ninra, e Hesbom, e Eleale, e Sebã, e Nebo, e Beom,
⁴ a terra que o SENHOR feriu diante da congregação de Israel, é terra de gado, e os teus servos têm gado.
⁵ Disseram mais: Se achamos graça aos teus olhos, dê-se esta terra aos teus servos em possessão; e não nos faças passar o Jordão.
⁶ Porém Moisés disse aos filhos de Gade e aos filhos de Rúben: Irão vossos irmãos à peleja, e ficareis vós aqui?
⁷ Por que, pois, desanimais o coração dos filhos de Israel, para que não passem à terra que o SENHOR lhes tem dado?
⁸ Assim fizeram vossos pais, quando os enviei de Cades-Barneia a ver esta terra.
⁹ Pois, subindo até ao vale de Escol, e vendo a terra, desanimaram o coração dos filhos de Israel, para que não entrassem na terra que o SENHOR lhes tinha dado.
¹⁰ Então a ira do SENHOR se acendeu naquele mesmo dia, e jurou, dizendo:
¹¹ Que os homens, que subiram do Egito, de vinte anos para cima, não veriam a terra que prometi com juramento a Abraão, a Isaque, e a Jacó! porquanto não perseveraram em seguir-me;
¹² exceto Calebe, filho de Jefoné o quenezeu, e Josué, filho de Num, porquanto perseveraram em seguir ao SENHOR.
¹³ Assim se acendeu a ira do SENHOR contra Israel, e fê-los andar errantes pelo deserto quarenta anos, até que toda aquela geração, que fizera mal aos olhos do SENHOR, se consumiu.
¹⁴ E eis que vós, uma raça de homens pecadores, vos levantastes em lugar de vossos pais, para aumentardes ainda o ardor da ira do SENHOR contra Israel.
¹⁵ Se vós vos desviardes de segui-lo, ele na verdade deixará ainda a este povo no deserto, e destruireis a todo este povo.
¹⁶ Então chegaram-se a ele, e disseram: Edificaremos aqui currais para o nosso gado, e cidades para as nossas crianças;
¹⁷ porém nós mesmos nos armaremos, apressando-nos diante dos filhos de Israel, até que os levemos ao seu lugar; e as nossas crianças ficarão nas cidades fortes por causa dos moradores da terra.
¹⁸ Não voltaremos para nossas casas, até que os filhos de Israel estejam de posse, cada um da sua herança.
¹⁹ Porque não herdaremos com eles além do Jordão, nem mais adiante; porquanto a nossa herança nos caiu aquém do Jordão, ao oriente.
²⁰ Então Moisés lhes disse: Se fizerdes isto, se vos armardes para a guerra diante do SENHOR,
²¹ e cada um de vós, armado, passar o Jordão diante do SENHOR, até que haja lançado fora os seus inimigos de diante dele,
²² e a terra esteja subjugada diante do SENHOR, então voltareis e sereis culpados perante o SENHOR e perante Israel; e esta terra vos será por possessão diante do SENHOR.
²³ E se não fizerdes assim, eis que pecastes contra o SENHOR; e sabei que o vosso pecado vos há de achar.
²⁴ Edificai cidades para as vossas crianças, e currais para o vosso gado; e fazei o que saiu da vossa boca.
²⁵ Então falaram os filhos de Gade e os filhos de Rúben a Moisés, dizendo: Como ordena meu senhor, assim farão teus servos.
²⁶ Nossas crianças, nossas mulheres, nosso gado e todos os nossos animais estarão ali nas cidades de Gileade.
²⁷ Mas os teus servos passarão, cada um armado para a guerra, a pelejar diante do SENHOR, como diz meu senhor.
²⁸ Então Moisés deu ordem a respeito deles a Eleazar, o sacerdote, e a Josué, filho de Num, e aos cabeças das casas paternas das tribos dos filhos de Israel.
²⁹ E disse-lhes Moisés: Se os filhos de Gade e os filhos de Rúben passarem convosco o Jordão, cada um armado para a guerra diante do SENHOR, e a terra for subjugada diante de vós, dar-lhes-eis a terra de Gileade em possessão;
³⁰ porém, se não passarem armados convosco, possuirão herança no meio de vós na terra de Canaã.
³¹ E responderam os filhos de Gade e os filhos de Rúben, dizendo: O que o SENHOR falou a teus servos, isso faremos.
³² Nós passaremos armados diante do SENHOR à terra de Canaã, e teremos a possessão de nossa herança aquém do Jordão.
³³ Assim deu Moisés aos filhos de Gade e aos filhos de Rúben, e à meia tribo de Manassés, filho de José, o reino de Sião, rei dos amorreus, e o reino de Ogue, rei de Basã; a terra com as suas cidades nos seus termos, e as cidades do seu contorno.
³⁴ E os filhos de Gade edificaram a Dibom, e Atarote, e Aroer;
³⁵ e Atrote-Sofã, e Jazer, e Jogbeá;
³⁶ e Bete-Ninra, e Bete-Harã, cidades fortes e currais de ovelhas.
³⁷ E os filhos de Rúben edificaram a Hesbom, e Eleale, e Quiriataim;
³⁸ e Nebo, e Baal-Meom (mudando-lhes os nomes), e Sibma; e deram outros nomes às cidades que edificaram.
³⁹ E os filhos de Maquir, filho de Manassés, foram-se para Gileade, e a tomaram, e expulsaram os amorreus que estavam nela.
⁴⁰ Assim Moisés deu Gileade a Maquir, filho de Manassés, o qual habitou nela.
⁴¹ E foi Jair, filho de Manassés, e tomou as suas aldeias, e chamou-lhes Havote-Jair.
⁴² E foi Nobá, e tomou a Kenate e as suas aldeias; e chamou-lhe Nobá, segundo o seu nome.
`,

            // O DESAFIO
            pergunta: {
                texto: "Sob qual condição Moisés permitiu que as tribos de Rúben, Gade e meia tribo de Manassés herdassem as terras de Gileade e Basã (aquém do Jordão)?",
                opcoes: [
                    { numero: 1, texto: "Eles deveriam pagar um tributo anual em gado", correta: false },
                    { numero: 2, texto: "Eles deveriam cruzar o Jordão armados e lutar até que toda Canaã fosse conquistada", correta: true },
                    { numero: 3, texto: "Eles deveriam construir o Tabernáculo permanentemente ali", correta: false },
                    { numero: 4, texto: "Eles foram proibidos de participar das guerras futuras", correta: false }
                ],
                explicacao: "Números 32:20-22 - Moisés exigiu o compromisso de que os homens dessas tribos lutassem na vanguarda junto aos seus irmãos até a conquista total da terra, para não desanimarem o resto de Israel.",
                pontosGanhos: 20
            }
        },

        // --- INÍCIO DO CAPÍTULO 33 ---
        33: {
            titulo: "As Jornadas de Israel",
            subtitulo: "O registro detalhado das etapas desde o Egito até as campinas de Moabe",

            texto: `
¹ Estas são as jornadas dos filhos de Israel, que saíram da terra do Egito, segundo os seus exércitos, pela mão de Moisés e Arão.
² E escreveu Moisés as suas saídas, segundo as suas jornadas, conforme ao mandado do SENHOR; e estas são as suas jornadas, segundo as suas saídas:
³ Partiram, pois, de Ramessés no primeiro mês, no dia quinze do primeiro mês; no dia seguinte à páscoa saíram os filhos de Israel com mão alta, aos olhos de todos os egípcios,
⁴ enquanto os egípcios enterravam os que o SENHOR tinha ferido entre eles, a todos os primogênitos; e o SENHOR executara juízos também sobre os seus deuses.
⁵ Partiram, pois, os filhos de Israel de Ramessés, e acamparam-se em Sucote.
⁶ E partiram de Sucote, e acamparam-se em Etã, que está na extremidade do deserto.
⁷ E partiram de Etã, e voltaram a Pi-Hairote, que está defronte de Baal-Zefom, e acamparam-se diante de Migdol.
⁸ E partiram de Pi-Hairote, e passaram pelo meio do mar ao deserto, e andaram caminho de três dias no deserto de Etã, e acamparam-se em Mara.
⁹ E partiram de Mara, e vieram a Elim, e em Elim havia doze fontes de águas e setenta palmeiras, e acamparam-se ali.
¹⁰ E partiram de Elim, e acamparam-se junto ao mar Vermelho.
¹¹ E partiram do mar Vermelho, e acamparam-se no deserto de Sim.
¹² E partiram do deserto de Sim, e acamparam-se em Dofca.
¹³ E partiram de Dofca, e acamparam-se em Alus.
¹⁴ E partiram de Alus, e acamparam-se em Refidim; porém não havia ali água, para o povo beber.
¹⁵ E partiram de Refidim, e acamparam-se no deserto de Sinai.
¹⁶ E partiram do deserto de Sinai, e acamparam-se em Quibrote-Hataavá.
¹⁷ E partiram de Quibrote-Hataavá, e acamparam-se em Hazerote.
¹⁸ E partiram de Hazerote, e acamparam-se em Ritma.
¹⁹ E partiram de Ritma, e acamparam-se em Rimom-Perez.
²⁰ E partiram de Rimom-Perez, e acamparam-se em Libna.
²¹ E partiram de Libna, e acamparam-se em Rissa.
²² E partiram de Rissa, e acamparam-se em Queelata.
²³ E partiram de Queelata, e acamparam-se no monte Séfer.
²⁴ E partiram do monte Séfer, e acamparam-se em Harada.
²⁵ E partiram de Harada, e acamparam-se em Maquelote.
²⁶ E partiram de Maquelote, e acamparam-se em Taate.
²⁷ E partiram de Taate, e acamparam-se em Terá.
²⁸ E partiram de Terá, e acamparam-se em Mitca.
²⁹ E partiram de Mitca, e acamparam-se em Hasmona.
³⁰ E partiram de Hasmona, e acamparam-se em Moserote.
³¹ E partiram de Moserote, e acamparam-se em Bene-Jaacã.
³² E partiram de Bene-Jaacã, e acamparam-se em Hor-Hagidgad.
³³ E partiram de Hor-Hagidgad, e acamparam-se em Jotbatá.
³⁴ E partiram de Jotbatá, e acamparam-se em Abrona.
³⁵ E partiram de Abrona, e acamparam-se em Eziom-Geber.
³⁶ E partiram de Eziom-Geber, e acamparam-se no deserto de Zim, que é Cades.
³⁷ E partiram de Cades, e acamparam-se no monte Hor, na extremidade da terra de Edom.
³⁸ Então Arão, o sacerdote, subiu ao monte Hor, conforme ao mandado do SENHOR, e morreu ali, no quadragésimo ano da saída dos filhos de Israel da terra do Egito, no quinto mês, no primeiro dia do mês.
³⁹ E era Arão da idade de cento e vinte e três anos, quando morreu no monte Hor.
⁴⁰ E ouviu o cananeu, rei de Arade, que habitava o sul, na terra de Canaã, que chegavam os filhos de Israel.
⁴¹ E partiram do monte Hor, e acamparam-se em Zalmona.
⁴² E partiram de Zalmona, e acamparam-se em Punom.
⁴³ E partiram de Punom, e acamparam-se em Obote.
⁴⁴ E partiram de Obote, e acamparam-se em Ije-Abarim, no termo de Moabe.
⁴⁵ E partiram de Ije-Abarim, e acamparam-se em Dibom-Gade.
⁴⁶ E partiram de Dibom-Gade, e acamparam-se em Almom-Diblataim.
⁴⁷ E partiram de Almom-Diblataim, e acamparam-se nos montes de Abarim, defronte de Nebo.
⁴⁸ E partiram dos montes de Abarim, e acamparam-se nas campinas de Moabe, junto ao Jordão, na altura de Jericó.
⁴⁹ E acamparam-se junto ao Jordão, desde Bete-Jesimote até Abel-Sitim, nas campinas de Moabe.
⁵⁰ E falou o SENHOR a Moisés, nas campinas de Moabe, junto ao Jordão, na altura de Jericó, dizendo:
⁵¹ Fala aos filhos de Israel, e dize-lhes: Quando houverdes passado o Jordão para a terra de Canaã,
⁵² lançareis fora todos os moradores da terra de diante de vós, e destruireis todas as suas pinturas; também destruireis todas as suas imagens de fundição, e desfareis todos os seus altos;
⁵³ e tomareis a terra em possessão, e nela habitareis; porquanto vos tenho dado esta terra, para possuí-la.
⁵⁴ E herdareis a terra por sortes, segundo as vossas famílias; aos muitos dareis uma herança maior, e aos poucos dareis uma herança menor; onde a sorte cair a alguém, ali a terá; segundo as tribos de vossos pais herdareis.
⁵⁵ Mas, se não lançardes fora os moradores da terra de diante de vós, então os que deixardes ficar ser-vos-ão por espinhos nos vossos olhos, e por aguilhões nas vossas ilhargas, e apertar-vos-ão na terra em que habitardes.
⁵⁶ E será que farei a vós como pensei fazer-lhes a eles.
`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com o registro das jornadas, em que local e em qual data específica ocorreu a morte de Arão, o sacerdote?",
                opcoes: [
                    { numero: 1, texto: "No Monte Sinai, no primeiro dia do primeiro mês", correta: false },
                    { numero: 2, texto: "No Monte Hor, no primeiro dia do quinto mês do quadragésimo ano", correta: true },
                    { numero: 3, texto: "Em Cades-Barneia, após o retorno dos espias", correta: false },
                    { numero: 4, texto: "Nas campinas de Moabe, logo após a derrota de Midiã", correta: false }
                ],
                explicacao: "Números 33:38 - Arão morreu no Monte Hor aos 123 anos de idade, exatamente 40 anos após o Êxodo, conforme a ordem divina.",
                pontosGanhos: 20
            }
        },

        // --- INÍCIO DO CAPÍTULO 34 ---
        34: {
            titulo: "Os Limites da Terra Prometida",
            subtitulo: "A demarcação das fronteiras de Canaã e os príncipes que repartirão a terra",

            texto: `
¹ E falou o SENHOR a Moisés, dizendo:
² Dá ordem aos filhos de Israel, e dize-lhes: Quando entrardes na terra de Canaã, esta é a terra que vos há de cair em herança: a terra de Canaã, segundo os seus termos.
³ O lado do sul vos será desde o deserto de Zim até aos termos de Edom; e o termo do sul vos será desde a extremidade do mar Salgado para o oriente.
⁴ E este termo vos irá rodeando do sul para a subida de Acrabim, e passará até Zim; e as suas saídas serão do sul a Cades-Barneia; e sairá a Hazar-Adar, e passará a Azmom;
⁵ e rodeará este termo de Azmom até ao rio do Egito; e as suas saídas serão para o lado do mar.
⁶ Quanto ao termo do ocidente, o mar Grande vos será por termo; este vos será o termo do ocidente.
⁷ E este vos será o termo do norte: desde o mar Grande marcareis até ao monte Hor.
⁸ Desde o monte Hor marcareis até à entrada de Hamate; e as saídas deste termo serão até Zedade.
⁹ E este termo sairá até Zifrom, e as suas saídas serão em Hazar-Enã; este vos será o termo do norte.
¹⁰ E por termo do oriente marcareis de Hazar-Enã até Sefã.
¹¹ E este termo descerá desde Sefã até Ribla, para o lado do oriente de Aim; depois descerá este termo, e irá ao longo da borda do mar de Quinerete para o oriente.
¹² Descerá também este termo ao longo do Jordão, e as suas saídas serão no mar Salgado; esta vos será a terra, segundo os seus termos em redor.
¹³ E Moisés deu ordem aos filhos de Israel, dizendo: Esta é a terra que herdareis por sorte, a qual o SENHOR mandou dar às nove tribos e à meia tribo.
¹⁴ Porque a tribo dos filhos dos rubenitas, segundo a casa de seus pais, e a tribo dos filhos dos gaditas, segundo a casa de seus pais, já receberam; também a meia tribo de Manassés recebeu a sua herança.
¹⁵ Já duas tribos e meia tribo receberam a sua herança aquém do Jordão, na altura de Jericó, do lado do oriente, ao nascer do sol.
¹⁶ Falou mais o SENHOR a Moisés, dizendo:
¹⁷ Estes são os nomes dos homens que vos repartirão a terra por herança: Eleazar, o sacerdote, e Josué, filho de Num.
¹⁸ Tomareis mais de cada tribo um príncipe, para repartir a terra em herança.
¹⁹ E estes são os nomes dos homens: Da tribo de Judá, Calebe, filho de Jefoné;
²⁰ e da tribo dos filhos de Simeão, Semuel, filho de Amiúde;
²¹ da tribo de Benjamim, Elidade, filho de Quislom;
²² da tribo dos filhos de Dã, o príncipe Buqui, filho de Jogli;
²³ dos filhos de José, da tribo dos filhos de Manassés, o príncipe Haniel, filho de Efode;
²⁴ e da tribo dos filhos de Efraim, o príncipe Quemuel, filho de Siftã;
²⁵ e da tribo dos filhos de Zebulom, o príncipe Elizafã, filho de Parnaque;
²⁶ e da tribo dos filhos de Issacar, o príncipe Paltiel, filho de Azã;
²⁷ e da tribo dos filhos de Aser, o príncipe Aiúde, filho de Selomi;
²⁸ e da tribo dos filhos de Naftali, o príncipe Pedael, filho de Amiúde.
²⁹ Estes são aqueles a quem o SENHOR ordenou que repartissem a herança aos filhos de Israel na terra de Canaã.
`,

            // O DESAFIO
            pergunta: {
                texto: "Quais são os dois líderes principais designados por Deus para coordenar a partilha da terra entre as tribos de Israel?",
                opcoes: [
                    { numero: 1, texto: "Moisés e Arão", correta: false },
                    { numero: 2, texto: "Eleazar, o sacerdote, e Josué, filho de Num", correta: true },
                    { numero: 3, texto: "Calebe e Fineias", correta: false },
                    { numero: 4, texto: "Os doze príncipes das tribos sozinhos", correta: false }
                ],
                explicacao: "Números 34:17 - Deus estabeleceu a liderança espiritual (Eleazar) e a liderança executiva/militar (Josué) para garantir a justiça na divisão do território.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 35 ---
        35: {
            titulo: "As Cidades dos Levitas e as Cidades de Refúgio",
            subtitulo: "A herança da tribo de Levi e a proteção para o homicida involuntário",

            texto: `
¹ E falou o SENHOR a Moisés, nas campinas de Moabe, junto ao Jordão, na altura de Jericó, dizendo:
² Dá ordem aos filhos de Israel que, da herança da sua possessão, deem aos levitas cidades em que habitem; e também aos levitas dareis arrabaldes ao redor dessas cidades.
³ E terão estas cidades para habitar; porém os seus arrabaldes serão para os seus animais, e para o seu gado, e para todos os seus bens.
⁴ E os arrabaldes das cidades, que dareis aos levitas, serão desde o muro da cidade para fora, mil côvados em redor.
⁵ E de fora da cidade medireis do lado do oriente dois mil côvados, e do lado do sul dois mil côvados, e do lado do ocidente dois mil côvados, e do lado do norte dois mil côvados, e a cidade no meio; isto lhes serão os arrabaldes das cidades.
⁶ Das cidades, pois, que dareis aos levitas, haverá seis cidades de refúgio, as quais dareis para que o homicida ali se acolha; e, além destas, lhes dareis quarenta e duas cidades.
⁷ Todas as cidades que dareis aos levitas serão quarenta e oito cidades, estas com os seus arrabaldes.
⁸ E as cidades que derdes da possessão dos filhos de Israel, do que tiver muito tomareis muito, e do que tiver pouco tomareis pouco; cada um dará das suas cidades aos levitas, segundo a herança que herdar.
⁹ Falou mais o SENHOR a Moisés, dizendo:
¹⁰ Fala aos filhos de Israel, e dize-lhes: Quando passardes o Jordão para a terra de Canaã,
¹¹ escolhei para vós cidades que vos sirvam de cidades de refúgio, para que ali se acolha o homicida que ferir a alguma pessoa por erro.
¹² E estas cidades vos serão por refúgio do vingador do sangue; para que o homicida não morra, antes que esteja perante a congregação no juízo.
¹³ E das cidades que derdes haverá seis cidades de refúgio para vós.
¹⁴ Três destas cidades dareis aquém do Jordão, e três destas cidades dareis na terra de Canaã; cidades de refúgio serão.
¹⁵ Estas seis cidades serão por refúgio para os filhos de Israel, e para o estrangeiro, e para o que habitar no meio deles, para que ali se acolha aquele que ferir a alguma pessoa por erro.
¹⁶ Porém, se a ferir com instrumento de ferro, e morrer, homicida é; certamente o homicida morrerá.
¹⁷ Ou se a ferir com pedra à mão, de que possa morrer, e morrer, homicida é; certamente o homicida morrerá.
¹⁸ Ou se a ferir com instrumento de madeira à mão, de que possa morrer, e morrer, homicida é; certamente o homicida morrerá.
¹⁹ O vingador do sangue matará o homicida; encontrando-o, matá-lo-á.
²⁰ Se também a empurrar com ódio, ou lançar contra ela alguma coisa por desígnio, e morrer;
²¹ ou por inimizade a ferir com a sua mão, e morrer, certamente morrerá o que feriu; homicida é; o vingador do sangue, encontrando o homicida, o matará.
²² Porém, se a empurrar subitamente, sem inimizade, ou contra ela lançar algum instrumento sem desígnio;
²³ ou sobre ela fizer cair alguma pedra sem o ver, de que possa morrer, e ela morrer, não sendo seu inimigo nem procurando o seu mal;
²⁴ então a congregação julgará entre o feridor e o vingador do sangue, segundo estes juízos.
²⁵ E a congregação livrará o homicida da mão do vingador do sangue, e a congregação o fará voltar à cidade do seu refúgio, onde se tinha acolhido; e ali ficará até à morte do sumo sacerdote, a quem ungiram com o santo óleo.
²⁶ Porém, se de alguma maneira o homicida sair dos termos da cidade do seu refúgio, onde se tinha acolhido,
²⁷ e o vingador do sangue o achar fora dos termos da cidade do seu refúgio, e o vingador do sangue matar o homicida, não será culpado do sangue.
²⁸ Pois deve ficar na cidade do seu refúgio, até à morte do sumo sacerdote; mas, depois da morte do sumo sacerdote, o homicida voltará à terra da sua possessão.
²⁹ E estas coisas vos serão por estatuto de direito nas vossas gerações, em todas as vossas habitações.
³⁰ Todo aquele que ferir a alguma pessoa, conforme o dito das testemunhas, matarão o homicida; mas uma só testemunha não testemunhará contra alguém, para que morra.
³¹ E não tomareis resgate pela vida do homicida que é culpado de morte; pois certamente morrerá.
³² Nem tomareis resgate por aquele que se acolher à cidade do seu refúgio, para tornar a habitar na terra, antes da morte do sacerdote.
³³ Assim não profanareis a terra em que estais; porque o sangue profana a terra; e nenhuma expiação se fará pela terra por causa do sangue que nela se derramar, senão com o sangue daquele que o derramou.
³⁴ Não contaminareis, pois, a terra em que vós habitais, no meio da qual eu habito; pois eu, o SENHOR, habito no meio dos filhos de Israel.
`,

            // O DESAFIO
            pergunta: {
                texto: "Até quando o homicida involuntário deveria permanecer na cidade de refúgio para garantir sua segurança contra o vingador do sangue?",
                opcoes: [
                    { numero: 1, texto: "Por um período fixo de sete anos", correta: false },
                    { numero: 2, texto: "Até que pagasse uma multa à família da vítima", correta: false },
                    { numero: 3, texto: "Até a morte do sumo sacerdote que estivesse ungido na época", correta: true },
                    { numero: 4, texto: "Até que a próxima geração de Israel assumisse a terra", correta: false }
                ],
                explicacao: "Números 35:25, 28 - A morte do sumo sacerdote marcava o fim do período de confinamento do homicida involuntário, permitindo que ele retornasse à sua própria terra sem medo de retribuição.",
                pontosGanhos: 20
            }
        },

        // --- INÍCIO DO CAPÍTULO 36 ---
        36: {
            titulo: "O Casamento das Filhas de Zelofeade",
            subtitulo: "A preservação da herança das tribos e a conclusão do livro de Números",

            texto: `
¹ E chegaram os cabeças das casas paternas da família dos filhos de Gileade, filho de Maquir, filho de Manassés, das famílias dos filhos de José, e falaram diante de Moisés, e diante dos príncipes, cabeças das casas paternas dos filhos de Israel.
² E disseram: O SENHOR ordenou a meu senhor que desse a terra por sorte em herança aos filhos de Israel; e a meu senhor foi ordenado pelo SENHOR que a herança do nosso irmão Zelofeade se desse a suas filhas.
³ E, casando-se elas com alguns dos filhos das outras tribos dos filhos de Israel, então a sua herança seria tirada da herança de nossos pais, e acrescentada à herança da tribo a que viessem a pertencer; assim se tiraria da sorte da nossa herança.
⁴ Vindo também o jubileu dos filhos de Israel, a sua herança se acrescentaria à herança da tribo a que viessem a pertencer; assim a sua herança seria tirada da herança da tribo de nossos pais.
⁵ Então Moisés deu ordem aos filhos de Israel, conforme o mandado do SENHOR, dizendo: A tribo dos filhos de José fala o que é justo.
⁶ Isto é o que o SENHOR ordenou acerca das filhas de Zelofeade, dizendo: Casem-se com quem bem lhes parecer aos seus olhos, contanto que se casem na família da tribo de seu pai.
⁷ Assim a herança dos filhos de Israel não passará de tribo em tribo; pois os filhos de Israel se chegarão cada um à herança da tribo de seus pais.
⁸ E qualquer filha que herdar alguma herança das tribos dos filhos de Israel se casará com algum da família da tribo de seu pai; para que os filhos de Israel possuam cada um a herança de seus pais.
⁹ Assim a herança não passará de uma tribo a outra; pois as tribos dos filhos de Israel se chegarão cada uma à sua herança.
¹⁰ Como o SENHOR ordenara a Moisés, assim fizeram as filhas de Zelofeade.
¹¹ Pois Maala, Tirza, Hogla, Milca e Noa, filhas de Zelofeade, se casaram com os filhos de seus tios paternos.
¹² Casaram-se nas famílias dos filhos de Manassés, filho de José, e a sua herança ficou na tribo da família de seu pai.
¹³ Estes são os mandamentos e os juízos que ordenou o SENHOR pela mão de Moisés aos filhos de Israel nas campinas de Moabe, junto ao Jordão, na altura de Jericó.
`,

            // O DESAFIO
            pergunta: {
                texto: "Qual regra foi estabelecida para as filhas que herdassem terras, a fim de evitar que a herança passasse de uma tribo para outra?",
                opcoes: [
                    { numero: 1, texto: "Elas deveriam vender as terras antes de casar", correta: false },
                    { numero: 2, texto: "Elas deveriam casar-se obrigatoriamente com levitas", correta: false },
                    { numero: 3, texto: "Elas deveriam casar-se apenas dentro da família da tribo de seu pai", correta: true },
                    { numero: 4, texto: "Elas não poderiam se casar se fossem herdeiras", correta: false }
                ],
                explicacao: "Números 36:6-7 - Para manter a integridade territorial das tribos definida por sorte, determinou-se que herdeiras do sexo feminino deveriam casar-se dentro de sua própria tribo.",
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