// js/livros/deuteronômio.js
// ═══════════════════════════════════════════════════════════════════════════════
// LIVRO: DEUTERONÔMIO - O LIVRO DA CONFIRMAÇÃO DA LEI
// ═══════════════════════════════════════════════════════════════════════════════

export const deuteronomio = {
    // ───────────────────────────────────────────────────────────────────────────
    // 1. CONFIGURAÇÕES GERAIS (Aparecem no Card da Biblioteca)
    // ───────────────────────────────────────────────────────────────────────────
    nome: "Deuteronômio",     // Nome que aparece no título
    icone: "📜",         // Emoji ou Ícone que aparece no card
    autor: "Moisés",      // Nome do autor que aparece abaixo do título
    
    // CAMINHO DA IMAGEM: Esta imagem fica no fundo quando o capítulo abre
    background: "./imagens/deuteronomio_bg.jpg", 

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
        // --- INÍCIO DO CAPÍTULO 1 DE DEUTERONÔMIO ---
        1: {
            titulo: "As Palavras de Moisés no Jordão",
            subtitulo: "O retrospecto da jornada e a incredulidade em Cades-Barneia",

            texto: `
¹ Estas são as palavras que Moisés falou a todo o Israel além do Jordão, no deserto, na planície defronte do Mar Vermelho, entre Parã e Tofel, e Labã, e Hazerote, e Di-Zaabe.
² Onze dias de jornada há desde Horebe, caminho do monte Seir, até Cades-Barneia.
³ E sucedeu que, no ano quadragésimo, no mês undécimo, no primeiro dia do mês, Moisés falou aos filhos de Israel, conforme a tudo o que o SENHOR lhe mandara acerca deles.
⁴ Depois que feriu a Sião, rei dos amorreus, que habitava em Hesbom, e a Ogue, rei de Basã, que habitava em Astarote, em Edrei.
⁵ Além do Jordão, na terra de Moabe, começou Moisés a declarar esta lei, dizendo:
⁶ O SENHOR nosso Deus nos falou em Horebe, dizendo: Assaz vos tem detido este monte.
⁷ Voltai-vos, e parti, e ide à montanha dos amorreus, e a todos os seus vizinhos, na planície, e na montanha, e no vale, e no sul, e na margem do mar; à terra dos cananeus, e ao Líbano, até ao grande rio, o rio Eufrates.
⁸ Eis que tenho posto esta terra diante de vós; entrai e possuí a terra que o SENHOR jurou a vossos pais, Abraão, Isaque e Jacó, que a daria a eles e à sua descendência depois deles.
⁹ E naquele tempo eu vos falei, dizendo: Eu sozinho não poderei levar-vos.
¹⁰ O SENHOR vosso Deus já vos tem multiplicado; e eis que hoje sois multidão como as estrelas do céu.
¹¹ O SENHOR Deus de vossos pais vos aumente mil vezes mais do que sois; e vos abençoe, como vos tem falado.
¹² Como levaria eu sozinho o vosso peso, e as vossas cargas, e as vossas contendas?
¹³ Tomai-vos homens sábios e entendidos, experientes entre as vossas tribos, para que os ponha por vossos cabeças.
¹⁴ Então vós me respondestes, e dissestes: Bom é fazer o que tens falado.
¹⁵ Tomei, pois, os cabeças de vossas tribos, homens sábios e experientes, e os constituí por cabeças sobre vós, capitães de milhares, e capitães de centenas, e capitães de cinquenta, e capitães de dez, e oficiais sobre as vossas tribos.
¹⁶ E naquele tempo dei ordem a vossos juízes, dizendo: Ouvi a causa entre vossos irmãos, e julgai justamente entre o homem e seu irmão, e entre o estrangeiro que está com ele.
¹⁷ Não respeitareis a pessoas em juízo; ouvireis assim o pequeno como o grande; não temereis a face de ninguém, porque o juízo é de Deus; e a causa que vos for difícil fareis vir a mim, e eu a ouvirei.
¹⁸ Assim naquele tempo vos ordenei todas as coisas que havíeis de fazer.
¹¹⁹ Então partimos de Horebe, e caminhamos por todo aquele grande e terrível deserto que vistes, pelo caminho das montanhas dos amorreus, como o SENHOR nosso Deus nos ordenara; e chegamos a Cades-Barneia.
²⁰ Então eu vos disse: Chegastes à montanha dos amorreus, que o SENHOR nosso Deus nos dá.
²¹ Eis que o SENHOR teu Deus pôs esta terra diante de ti; sobe, possui-a, como te falou o SENHOR Deus de vossos pais; não temas, e não te assustes.
²² Então todos vós vos chegastes a mim, e dissestes: Enviemos homens adiante de nós, para que nos espiem a terra e nos deem resposta por que caminho devemos subir a ela, e a que cidades devemos ir.
²³ Isto me pareceu bem; de sorte que de vós tomei doze homens, de cada tribo um homem.
²⁴ E foram-se, e subiram à montanha, e chegaram até ao vale de Escol, e espiaram a terra.
²⁵ E tomaram do fruto da terra nas suas mãos, e no-lo trouxeram, e nos deram resposta, dizendo: Boa é a terra que nos dá o SENHOR nosso Deus.
²⁶ Porém vós não quisestes subir; mas fostes rebeldes ao mandado do SENHOR vosso Deus.
²⁷ E murmurastes nas vossas tendas, e dissestes: Porquanto o SENHOR nos odeia, nos tirou da terra do Egito para nos entregar nas mãos dos amorreus, para destruir-nos.
²⁸ Para onde subiremos? Nossos irmãos fizeram com que se derretesse o nosso coração, dizendo: Maior e mais alto é este povo do que nós; as cidades são grandes e muradas até ao céu; e também vimos ali filhos dos gigantes.
²⁹ Então eu vos disse: Não vos espanteis, nem tenhais medo deles.
³⁰ O SENHOR vosso Deus que vai adiante de vós, ele pelejará por vós, conforme a tudo o que fez convosco diante dos vossos olhos, no Egito;
³¹ como também no deserto, onde viste que o SENHOR teu Deus te levou, como um homem leva seu filho, por todo o caminho que andastes, até chegardes a este lugar.
³² Mas nem por isso crestes no SENHOR vosso Deus,
³³ que ia adiante de vós por todo o caminho, para vos buscar o lugar onde vos deveríeis acampar; de noite no fogo, para vos mostrar o caminho por onde havíeis de ir, e de dia na nuvem.
³⁴ Ouvindo, pois, o SENHOR a voz das vossas palavras, indignou-se, e jurou, dizendo:
³⁵ Nenhum dos homens desta maligna geração verá esta boa terra que jurei dar a vossos pais.
³⁶ Salvo Calebe, filho de Jefoné; ele a verá, e a terra que pisou darei a ele e a seus filhos; porquanto perseverou em seguir ao SENHOR.
³⁷ Também o SENHOR se indignou contra mim por causa de vós, dizendo: Também tu lá não entrarás.
³⁸ Josué, filho de Num, que está diante de ti, ele ali entrará; anima-o, porque ele a fará herdar a Israel.
³⁹ E vossos meninos, de quem dissestes que seriam por presa, e vossos filhos, que hoje não conhecem nem o bem nem o mal, eles ali entrarão, e a eles a darei, e eles a possuirão.
⁴⁰ Porém vós voltai-vos, e parti para o deserto, pelo caminho do Mar Vermelho.
⁴¹ Então respondestes, e me dissestes: Pecamos contra o SENHOR; nós subiremos e pelejaremos, conforme a tudo o que nos ordenou o SENHOR nosso Deus. E armastes-vos, cada um de vós, das vossas armas de guerra, e estivestes prestes a subir à montanha.
⁴² E disse-me o SENHOR: Dize-lhes: Não subais nem pelejeis, pois não estou no meio de vós; para que não sejais feridos diante de vossos inimigos.
⁴³ E vos falei, e não ouvistes; antes fostes rebeldes ao mandado do SENHOR, e vos ensoberbecestes, e subistes à montanha.
⁴⁴ E os amorreus, que habitavam naquela montanha, vos saíram ao encontro; e perseguiram-vos como fazem as abelhas, e vos derrotaram desde Seir até Horma.
⁴⁵ Voltando, pois, vós, e chorando perante o SENHOR, o SENHOR não ouviu a vossa voz, nem vos deu ouvidos.
⁴⁶ Assim ficastes em Cades muitos dias, segundo os dias que ali ficastes.
`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com o retrospecto de Moisés, quantos dias de jornada normal haveria desde Horebe até Cades-Barneia pelo caminho do monte Seir?",
                opcoes: [
                    { numero: 1, texto: "Quarenta dias", correta: false },
                    { numero: 2, texto: "Onze dias", correta: true },
                    { numero: 3, texto: "Três meses", correta: false },
                    { numero: 4, texto: "Sete dias", correta: false }
                ],
                explicacao: "Deuteronômio 1:2 - Moisés destaca que a distância era curta (onze dias), enfatizando que o atraso de quarenta anos foi resultado da desobediência, não da distância geográfica.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 2 DE DEUTERONÔMIO ---
        2: {
            titulo: "A Passagem por Edom, Moabe e Amom",
            subtitulo: "O respeito aos territórios dos parentes de Israel e a derrota de Siom",

            texto: `
¹ Depois nos voltamos, e partimos para o deserto, pelo caminho do Mar Vermelho, como o SENHOR me tinha dito, e por muitos dias rodeamos o monte Seir.
² E o SENHOR me falou, dizendo:
³ Tendes rodeado bastante este monte; voltai-vos para o norte.
⁴ E dá ordem ao povo, dizendo: Passareis pelos termos de vossos irmãos, os filhos de Esaú, que habitam em Seir; e eles terão medo de vós; portanto guardai-vos bem.
⁵ Não vos entremetais com eles, porque não vos darei da sua terra nem ainda a pisada da planta de um pé; porquanto a Esaú dei o monte Seir por herança.
⁶ Comprareis deles comida por dinheiro, para que comais; e também água comprareis deles por dinheiro, para que bebais.
⁷ Pois o SENHOR teu Deus te abençoou em toda a obra das tuas mãos; ele sabe o teu caminhar por este grande deserto; estes quarenta anos o SENHOR teu Deus esteve contigo, coisa nenhuma te faltou.
⁸ E, passando nós por nossos irmãos, os filhos de Esaú, que habitavam em Seir, pelo caminho da planície de Elate e de Eziom-Geber, nos voltamos e passamos o caminho do deserto de Moabe.
⁹ Então o SENHOR me disse: Não molestes a Moabe, e não contendas com eles em peleja, porque não te darei herança da sua terra; porquanto aos filhos de Ló dei a Ar por herança.
¹⁰ (Os emins dantes habitaram nela; um povo grande e numeroso, e alto como os gigantes;
¹¹ também eles foram contados por gigantes como os anaquins; e os moabitas lhes chamavam emins.
¹² Outrora também os horeus habitaram em Seir; porém os filhos de Esaú os lançaram fora, e os destruíram de diante de si, e habitaram no seu lugar, como Israel fez à terra da sua herança, que o SENHOR lhe tinha dado.)
¹³ Levantai-vos agora, e passai o ribeiro de Zerede; e passamos o ribeiro de Zerede.
¹⁴ E os dias que caminhamos, desde Cades-Barneia até passarmos o ribeiro de Zerede, foram trinta e oito anos, até que toda aquela geração dos homens de guerra se consumiu do meio do arraial, como o SENHOR lhes jurara.
¹⁵ Também a mão do SENHOR foi contra eles, para os destruir do meio do arraial até serem consumidos.
¹⁶ E sucedeu que, sendo já consumidos todos os homens de guerra, por morte, do meio do povo,
¹⁷ o SENHOR me falou, dizendo:
¹⁸ Hoje passarás por Ar, pelos termos de Moabe.
¹⁹ E chegarás defronte dos filhos de Amom; não os molestes, e com eles não contendas; porque da terra dos filhos de Amom não te darei herança, porquanto aos filhos de Ló a dei por herança.
²⁰ (Também esta foi contada por terra de gigantes; outrora habitavam nela gigantes, e os amonitas lhes chamavam zanzumins;
²¹ um povo grande, e numeroso, e alto como os anaquins; e o SENHOR os destruiu de diante deles, e estes os lançaram fora, e habitaram no seu lugar;
²² como fez com os filhos de Esaú, que habitavam em Seir, quando destruiu os horeus de diante deles, e eles os lançaram fora, e habitaram no seu lugar até este dia;
²³ também os aveus, que habitavam em Hazerim até Gaza, os caftoreus, que saíram de Caftor, os destruíram, e habitaram no seu lugar.)
²⁴ Levantai-vos, parti e passai o ribeiro de Arnom; eis que na tua mão tenho dado a Siom, amorreu, rei de Hesbom, e a sua terra; começa a possuí-la, e contende com ele em peleja.
²⁵ Hoje começarei a pôr um terror e um medo de ti diante dos povos que estão debaixo de todo o céu; os que ouvirem a tua fama tremerão e se angustiarão diante de ti.
²⁶ Então enviei mensageiros desde o deserto de Quedemote a Siom, rei de Hesbom, com palavras de paz, dizendo:
²⁷ Deixa-me passar pela tua terra; somente pelo caminho irei; não me desviarei nem para a direita nem para a esquerda.
²⁸ A comida por dinheiro me venderás, para que coma; e a água por dinheiro me darás, para que beba; somente deixa-me passar a pé;
²⁹ como fizeram comigo os filhos de Esaú, que habitam em Seir, e os moabitas que habitam em Ar; até que eu passe o Jordão, à terra que o SENHOR nosso Deus nos dá.
³⁰ Mas Siom, rei de Hesbom, não nos quis deixar passar por sua terra, porquanto o SENHOR teu Deus endurecera o seu espírito, e fizera obstinado o seu coração, para o dar na tua mão, como hoje se vê.
³¹ E disse-me o SENHOR: Eis aqui, comecei a dar-te Siom, e a sua terra diante de ti; começa, pois, a possuí-la, para que herdes a sua terra.
³² E Siom saiu-nos ao encontro, ele e todo o seu povo, à peleja, em Jaza.
³³ E o SENHOR nosso Deus o deu diante de nós, e o ferimos a ele, e a seus filhos, e a todo o seu povo.
³⁴ E naquele tempo tomamos todas as suas cidades, e cada uma destruímos com os seus homens, mulheres e crianças; não deixamos a ninguém.
³⁵ Somente tomamos por presa o gado para nós, e o despojo das cidades que tomamos.
³⁶ Desde Aroer, que está à margem do ribeiro de Arnom, e a cidade que está junto ao ribeiro, até Gileade, nenhuma cidade houve tão alta que de nós se defendesse; tudo o SENHOR nosso Deus nos entregou.
³⁷ Somente à terra dos filhos de Amom não chegastes; nem a toda a margem do ribeiro de Jaboque, nem às cidades da montanha, nem a tudo o que nos proibira o SENHOR nosso Deus.
`,

            // O DESAFIO
            pergunta: {
                texto: "Por que Moisés ordenou que Israel não entrasse em conflito com os edomitas, moabitas e amonitas durante a jornada?",
                opcoes: [
                    { numero: 1, texto: "Porque eles eram aliados militares de Israel", correta: false },
                    { numero: 2, texto: "Porque Deus já havia dado terras a esses povos por herança, devido ao parentesco com Abraão e Ló", correta: true },
                    { numero: 3, texto: "Porque Israel não tinha armas suficientes para vencê-los", correta: false },
                    { numero: 4, texto: "Porque essas terras eram estéreis e sem valor", correta: false }
                ],
                explicacao: "Deuteronômio 2:5, 9, 19 - Deus preservou o território dos descendentes de Esaú e de Ló, proibindo Israel de tomar qualquer parte daquelas terras.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 3 DE DEUTERONÔMIO ---
        3: {
            titulo: "A Vitória sobre Ogue e a Oração de Moisés",
            subtitulo: "A conquista de Basã, a partilha das terras e o impedimento de Moisés entrar em Canaã",

            texto: `
¹ Depois nos voltamos, e subimos o caminho de Basã; e Ogue, rei de Basã, nos saiu ao encontro, ele e todo o seu povo, à peleja em Edrei.
² Então o SENHOR me disse: Não o temas, porque a ele e a todo o seu povo, e a sua terra, dei na tua mão; e far-lhe-ás como fizeste a Siom, rei dos amorreus, que habitava em Hesbom.
³ E também o SENHOR nosso Deus deu em nossa mão a Ogue, rei de Basã, e a todo o seu povo; e o ferimos, até que não lhe ficou restante algum.
⁴ E naquele tempo tomamos todas as suas cidades; nenhuma cidade houve que lhes não tomássemos: sessenta cidades, toda a região de Argobe, o reino de Ogue em Basã.
⁵ Todas estas cidades eram fortificadas com altos muros, portas e ferrolhos; além de outras muitas cidades sem muros.
⁶ E destruímo-las, como fizemos a Siom, rei de Hesbom, destruindo todas as cidades, homens, mulheres e crianças.
⁷ Porém todo o gado, e o despojo das cidades, tomamos para nós por presa.
⁸ Assim naquele tempo tomamos a terra da mão daqueles dois reis dos amorreus, que estavam além do Jordão; desde o ribeiro de Arnom até ao monte Hermom
⁹ (Os sidônios a Hermom chamam Siriom; porém os amorreus lhe chamam Senir);
¹⁰ todas as cidades da planície, e todo o Gileade, e todo o Basã, até Salca e Edrei, cidades do reino de Ogue em Basã.
¹¹ (Porque só Ogue, rei de Basã, restou dos gigantes; eis que o seu leito, um leito de ferro, não está porventura em Rabá dos filhos de Amom? De nove côvados era o seu comprimento, e de quatro côvados a sua largura, segundo o côvado comum de um homem.)
¹² Tomamos, pois, esta terra em possessão naquele tempo; desde Aroer, que está junto ao ribeiro de Arnom, e a metade da montanha de Gileade, com as suas cidades, dei aos rubenitas e gaditas.
¹³ E o restante de Gileade, como também todo o Basã, o reino de Ogue, dei à meia tribo de Manassés; toda a região de Argobe, por todo o Basã, se chamava a terra dos gigantes.
¹⁴ Jair, filho de Manassés, tomou toda a região de Argobe, até ao termo de Gesuri e Maacati; e chamou-as pelo seu nome, Havote-Jair, até este dia.
¹⁵ E a Maquir dei Gileade.
¹⁶ E aos rubenitas e gaditas dei desde Gileade até ao ribeiro de Arnom, o meio do ribeiro e o seu termo; e até ao ribeiro de Jaboque, o termo dos filhos de Amom;
¹⁷ como também a planície, e o Jordão e o seu termo; desde Quinerete até ao mar da planície, o mar Salgado, abaixo de Asdote-Pisga, para o oriente.
¹⁸ E naquele tempo vos dei ordem, dizendo: O SENHOR vosso Deus vos deu esta terra, para possuí-la; passai, pois, armados vós todos os homens valentes, diante de vossos irmãos, os filhos de Israel.
¹⁹ Tão somente vossas mulheres, e vossos meninos, e vosso gado (porque eu sei que tendes muito gado), ficarão nas vossas cidades que vos tenho dado;
²⁰ até que o SENHOR dê descanso a vossos irmãos, como a vós; e eles também possuam a terra que o SENHOR vosso Deus lhes dá além do Jordão; então voltareis cada um à sua possessão que vos tenho dado.
²¹ Também dei ordem a Josué naquele tempo, dizendo: Os teus olhos viram tudo o que o SENHOR vosso Deus tem feito a estes dois reis; assim fará o SENHOR a todos os reinos, por onde tu passarás.
²² Não os temais, porque o SENHOR vosso Deus é o que peleja por vós.
²³ Também eu pedi graça ao SENHOR naquele tempo, dizendo:
²⁴ Senhor DEUS! já começaste a mostrar ao teu servo a tua grandeza e a tua forte mão; pois, que deus há nos céus ou na terra, que possa fazer segundo as tuas obras, e segundo os teus grandes feitos?
²⁵ Rogo-te que me deixes passar, para que veja esta boa terra que está além do Jordão; esta boa montanha, e o Líbano.
²⁶ Porém o SENHOR indignou-se muito contra mim por causa de vós, e não me ouviu; antes o SENHOR me disse: Basta; não me fales mais nisto.
²⁷ Sobe ao cume de Pisga, e levanta os teus olhos para o ocidente, e para o norte, e para o sul, e para o oriente, e vê com os teus olhos; porque não passarás este Jordão.
²⁸ Dá, pois, ordens a Josué, e anima-o, e fortalece-o; porque ele passará adiante deste povo, e ele o fará herdar a terra que verás.
²⁹ Assim ficamos no vale, defronte de Bete-Peor.
`,

            // O DESAFIO
            pergunta: {
                texto: "Qual era a evidência física mencionada no texto sobre a estatura gigantesca de Ogue, rei de Basã?",
                opcoes: [
                    { numero: 1, texto: "Sua armadura de ouro guardada no Tabernáculo", correta: false },
                    { numero: 2, texto: "Seu leito de ferro de nove côvados de comprimento", correta: true },
                    { numero: 3, texto: "Uma estátua erguida em sua homenagem em Hesbom", correta: false },
                    { numero: 4, texto: "O tamanho de sua espada, que dez homens não podiam erguer", correta: false }
                ],
                explicacao: "Deuteronômio 3:11 - O texto cita que o leito de Ogue, remanescente dos gigantes, tinha cerca de 4 metros de comprimento (9 côvados), servindo como prova de sua estatura incomum.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 4 DE DEUTERONÔMIO ---
        4: {
            titulo: "Exortação à Obediência e Contra a Idolatria",
            subtitulo: "A singularidade da Lei de Deus e o aviso contra imagens de escultura",

            texto: `
¹ Agora, pois, ó Israel, ouve os estatutos e os juízos que eu vos ensino, para os cumprirdes; para que vivais, e entreis, e possuais a terra que o SENHOR Deus de vossos pais vos dá.
² Não acrescentareis à palavra que vos mando, nem diminuireis dela, para que guardeis os mandamentos do SENHOR vosso Deus, que eu vos mando.
³ Os vossos olhos viram o que o SENHOR fez por causa de Baal-Peor; pois a todo o homem que seguiu a Baal-Peor o SENHOR teu Deus consumiu do meio de ti.
⁴ Porém vós, que vos apegaldes ao SENHOR vosso Deus, todos estais hoje vivos.
⁵ Vedes aqui, ensinei-vos estatutos e juízos, como me mandou o SENHOR meu Deus; para que assim façais no meio da terra a qual ides a possuir.
⁶ Guardai-os pois, e cumpri-os, porque esta será a vossa sabedoria e o vosso entendimento perante os olhos dos povos, que ouvirão todos estes estatutos, e dirão: Este grande povo é nação sábia e entendida.
⁷ Pois, que nação há tão grande, que tenha deuses tão chegados a si como o SENHOR nosso Deus, todas as vezes que o invocamos?
⁸ E que nação há tão grande, que tenha estatutos e juízos tão justos como toda esta lei que hoje ponho diante de vós?
⁹ Tão somente guarda-te a ti mesmo, e guarda bem a tua alma, que te não esqueças das coisas que os teus olhos viram, e se não apartem do teu coração todos os dias da tua vida; e as farás saber a teus filhos, e aos filhos de teus filhos.
¹⁰ O dia em que estiveste perante o SENHOR teu Deus em Horebe, quando o SENHOR me disse: Ajunta-me este povo, e os farei ouvir as minhas palavras, e aprendê-las-ão, para me temerem todos os dias que viverem na terra, e as ensinarão a seus filhos;
¹¹ e vós vos chegastes, e vos postastes ao pé do monte; e o monte ardia em fogo até ao meio do céu, e havia trevas, nuvens e escuridade.
¹² Então o SENHOR vos falou do meio do fogo; a voz das palavras ouvistes; porém, além da voz, não vistes figura alguma.
¹³ Então vos anunciou ele a sua aliança que vos ordenou cumprir, os dez mandamentos, e os escreveu em duas tábuas de pedra.
¹⁴ Também o SENHOR me ordenou ao mesmo tempo que vos ensinasse estatutos e juízos, para que os cumprísseis na terra a que passais a possuir.
¹⁵ Guardai, pois, com diligência as vossas almas, pois nenhuma figura vistes no dia em que o SENHOR, em Horebe, falou convosco do meio do fogo;
¹⁶ para que não vos corrompais, e vos façais alguma imagem esculpida na forma de qualquer figura, semelhança de homem ou de mulher;
¹¹⁷ semelhança de algum animal que haja na terra; semelhança de alguma ave que voe pelos céus;
¹⁸ semelhança de algum animal que se arraste sobre a terra; semelhança de algum peixe que esteja nas águas debaixo da terra;
¹⁹ que não levantes os teus olhos aos céus e vejas o sol, e a lua, e as estrelas, todo o exército dos céus; e sejas impelido a que te inclines perante eles, e sirvas àquelas coisas que o SENHOR teu Deus repartiu a todos os povos debaixo de todos os céus.
²⁰ Mas o SENHOR vos tomou, e vos tirou da fornalha de ferro do Egito, para que lhe sejais um povo de herança, como neste dia se vê.
²¹ Também o SENHOR se indignou contra mim por causa das vossas palavras, e jurou que eu não passaria o Jordão, e que não entraria na boa terra que o SENHOR teu Deus te dá por herança.
²² Porque eu nesta terra morrerei, não passarei o Jordão; porém vós o passareis, e possuireis aquela boa terra.
²³ Guardai-vos de que vos esqueçais da aliança do SENHOR vosso Deus, que tem feito convosco, e vos façais alguma imagem esculpida, semelhança de alguma coisa que o SENHOR teu Deus te proibiu.
²⁴ Porque o SENHOR teu Deus é um fogo consumidor, um Deus zeloso.
²⁵ Quando, pois, gerardes filhos, e filhos de filhos, e vos envelhecerdes na terra, e vos corromperdes, e fizerdes alguma imagem esculpida, semelhança de alguma coisa, e fizerdes o que é mau aos olhos do SENHOR teu Deus, para o provocar à ira;
²⁶ hoje tomo por testemunhas contra vós o céu e a terra, que prestesmente perecereis da terra, a qual, passado o Jordão, ides possuir; não prolongareis nela os vossos dias, antes sereis de todo destruídos.
²⁷ E o SENHOR vos espalhará entre os povos, e ficareis poucos em número entre as nações para onde o SENHOR vos conduzirá.
²⁸ E ali servireis a deuses que são obra de mãos de homens, madeira e pedra, que não veem, nem ouvem, nem comem, nem cheiram.
²⁹ Então dali buscarás ao SENHOR teu Deus, e o acharás, quando o buscares de todo o teu coração e de toda a tua alma.
³⁰ Quando estiveres em angústia, e todas estas coisas te alcançarem, então nos últimos dias te voltarás para o SENHOR teu Deus, e ouvirás a sua voz.
³¹ Porquanto o SENHOR teu Deus é Deus misericordioso, e não te desamparará, nem te destruirá, nem se esquecerá da aliança de teus pais que lhes tem jurado.
³² Porque, pergunta agora aos tempos passados, que foram antes de ti, desde o dia em que Deus criou o homem sobre a terra, desde uma extremidade do céu até à outra, se se fez jamais coisa tão grande como esta, ou se se ouviu coisa como esta?
³³ Ou se um povo ouviu a voz de Deus falando do meio do fogo, como tu a ouviste, e ficou vivo?
³⁴ Ou se um deus intentou ir tomar para si um povo do meio de outro povo, com provas, com sinais, e com prodígios, e com peleja, e com mão forte, e com braço estendido, e com grandes espantos, conforme a tudo quanto o SENHOR vosso Deus fez convosco no Egito, aos vossos olhos?
³⁵ A ti te foi mostrado para que soubesses que o SENHOR é Deus; nenhum outro há senão ele.
³⁶ Dos céus te fez ouvir a sua voz, para te instruir, e sobre a terra te mostrou o seu grande fogo, e ouviste as suas palavras do meio do fogo.
³⁷ E, porquanto amou teus pais, e escolheu a sua descendência depois deles, te tirou do Egito diante de si, com a sua grande força,
³⁸ para lançar fora de diante de ti nações maiores e mais fortes do que tu, para te introduzir e te dar a sua terra por herança, como neste dia se vê.
³⁹ Por isso hoje saberás, e refletirás no teu coração, que só o SENHOR é Deus em cima no céu, e embaixo na terra; nenhum outro há.
⁴⁰ E guardarás os seus estatutos e os seus mandamentos, que te ordeno hoje; para que te vá bem a ti, e a teus filhos depois de ti, e para que prolongues os dias na terra que o SENHOR teu Deus te dá para todo o sempre.
⁴¹ Então Moisés separou três cidades além do Jordão, do lado do nascimento do sol;
⁴² para que ali se acolhesse o homicida que matasse o seu próximo por erro, e não o tivesse odiado dantes; e se acolhesse a uma destas cidades, e vivesse;
⁴³ a Bezer, no deserto, no planalto, para os rubenitas; e a Ramote, em Gileade, para os gaditas; e a Golã, em Basã, para os manassitas.
⁴⁴ Esta é, pois, a lei que Moisés pôs diante dos filhos de Israel.
⁴⁵ Estes são os testemunhos, e os estatutos, e os juízos, que Moisés falou aos filhos de Israel, quando saíram do Egito;
⁴⁶ além do Jordão, no vale defronte de Bete-Peor, na terra de Siom, rei dos amorreus, que habitava em Hesbom, a quem Moisés e os filhos de Israel feriram, quando saíram do Egito.
⁴⁷ E tomaram a sua terra em possessão, como também a terra de Ogue, rei de Basã, dois reis dos amorreus, que estavam além do Jordão, do lado do nascimento do sol;
⁴⁸ desde Aroer, que está à margem do ribeiro de Arnom, até ao monte Siom, que é Hermom;
⁴⁹ e toda a planície além do Jordão, do lado do oriente, até ao mar da planície, abaixo de Asdote-Pisga.
`,

            // O DESAFIO
            pergunta: {
                texto: "Ao alertar contra a idolatria, qual foi o principal argumento de Moisés para que o povo não fizesse imagens de escultura representando a forma de Deus?",
                opcoes: [
                    { numero: 1, texto: "Porque Deus não permitia artistas no meio do arraial", correta: false },
                    { numero: 2, texto: "Porque no dia em que Deus falou do meio do fogo em Horebe, o povo não viu figura alguma, apenas ouviu a voz", correta: true },
                    { numero: 3, texto: "Porque as imagens de ouro eram pesadas demais para carregar", correta: false },
                    { numero: 4, texto: "Porque a arte era exclusiva dos egípcios e cananeus", correta: false }
                ],
                explicacao: "Deuteronômio 4:12, 15 - Moisés enfatiza que Deus se revelou por palavras e voz, não por uma forma visível, para que Israel não tentasse limitar ou representar a Divindade através de formas físicas.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 5 DE DEUTERONÔMIO ---
        5: {
            titulo: "A Repetição dos Dez Mandamentos",
            subtitulo: "A aliança de Horebe e as bases da moralidade de Israel",

            texto: `
¹ E chamou Moisés a todo o Israel, e disse-lhes: Ouve, ó Israel, os estatutos e juízos que hoje vos falo aos ouvidos; e aprendê-los-eis, e guardá-los-eis, para os cumprirdes.
² O SENHOR nosso Deus fez conosco aliança em Horebe.
³ Não com nossos pais fez o SENHOR esta aliança, mas conosco, todos os que hoje aqui estamos vivos.
⁴ Face a face falou o SENHOR convosco no monte, do meio do fogo
⁵ (Naquele tempo eu estava em pé entre o SENHOR e vós, para vos notificar a palavra do SENHOR; porque temestes o fogo, e não subistes ao monte), dizendo:
⁶ Eu sou o SENHOR teu Deus, que te tirei da terra do Egito, da casa da servidão;
⁷ Não terás outros deuses diante de mim;
⁸ Não farás para ti imagem de escultura, nem semelhança alguma do que há em cima no céu, nem embaixo na terra, nem nas águas debaixo da terra;
⁹ Não te encurvarás a elas, nem as servirás; porque eu, o SENHOR teu Deus, sou Deus zeloso, que visito a iniquidade dos pais nos filhos, até à terceira e quarta geração daqueles que me odeiam.
¹⁰ E faço misericórdia a milhares dos que me amam e guardam os seus mandamentos.
¹¹ Não tomarás o nome do SENHOR teu Deus em vão; porque o SENHOR não terá por inocente aquele que tomar o seu nome em vão.
¹² Guarda o dia de sábado, para o santificar, como te ordenou o SENHOR teu Deus.
¹³ Seis dias trabalharás, e farás toda a tua obra.
¹⁴ Mas o sétimo dia é o sábado do SENHOR teu Deus; não farás nenhuma obra, nem tu, nem teu filho, nem tua filha, nem o teu servo, nem a tua serva, nem o teu boi, nem o teu jumento, nem animal algum teu, nem o estrangeiro que está dentro das tuas portas; para que o teu servo e a tua serva descansem como tu;
¹⁵ porque te lembrarás que foste servo na terra do Egito, e que o SENHOR teu Deus te tirou dali com mão forte e braço estendido; pelo que o SENHOR teu Deus te ordenou que guardasses o dia de sábado.
¹⁶ Honra a teu pai e a tua mãe, como o SENHOR teu Deus te ordenou, para que se prolonguem os teus dias, e para que te vá bem na terra que te dá o SENHOR teu Deus.
¹⁷ Não matarás.
¹⁸ Não adulterarás.
¹⁹ Não furtarás.
²⁰ Não dirás falso testemunho contra o teu próximo.
²¹ Não cobiçarás a mulher do teu próximo; e não desejarás a casa do teu próximo, nem o seu campo, nem o seu servo, nem a sua serva, nem o seu boi, nem o seu jumento, nem coisa alguma do teu próximo.
²² Estas palavras falou o SENHOR a toda a vossa congregação no monte, do meio do fogo, da nuvem e da escuridade, com grande voz, e nada acrescentou; e as escreveu em duas tábuas de pedra, e a mim mo deu.
²³ E sucedeu que, ouvindo vós a voz do meio das trevas, e vendo o monte ardendo em fogo, vos achegastes a mim, todos os cabeças das vossas tribos e vossos anciãos;
²⁴ e dissestes: Eis aqui o SENHOR nosso Deus nos fez ver a sua glória e a sua grandeza, e ouvimos a sua voz do meio do fogo; hoje vimos que Deus fala com o homem, e este permanece vivo.
²⁵ Agora, pois, por que morreríamos? pois este grande fogo nos consumiria; se ainda mais ouvíssemos a voz do SENHOR nosso Deus, morreríamos.
²⁶ Porque, quem há de toda a carne, que ouvisse a voz do Deus vivente falando do meio do fogo, como nós, e ficasse vivo?
²⁷ Chega-te tu, e ouve tudo o que disser o SENHOR nosso Deus; e tu nos dirás tudo o que te disser o SENHOR nosso Deus, e o ouviremos, e o faremos.
²⁸ Ouvindo, pois, o SENHOR a voz das vossas palavras, quando me faláveis, o SENHOR me disse: Ouvi a voz das palavras deste povo, que te falaram; bem disseram em tudo quanto falaram.
²⁹ Quem dera que eles tivessem tal coração que me temessem, e guardassem todos os meus mandamentos todos os dias, para que bem lhes fosse a eles e a seus filhos para sempre!
³⁰ Vai, dize-lhes: Voltai-vos para as vossas tendas.
³¹ Tu, porém, deixa-te estar aqui comigo, para que eu te diga todos os mandamentos, e estatutos, e juízos, que tu lhes hás de ensinar, para que eles os cumpram na terra que eu lhes darei para possuí-la.
³² Olhai, pois, que façais como vos ordenou o SENHOR vosso Deus; não vos desvieis, nem para a direita nem para a esquerda.
³³ Andareis em todo o caminho que vos ordenou o SENHOR vosso Deus, para que vivais e bem vos suceda, e prolongueis os dias na terra que haveis de possuir.
`,

            // O DESAFIO
            pergunta: {
                texto: "Nesta repetição do Decálogo, qual motivo histórico é acrescentado por Moisés como justificativa para a guarda do Sábado, além da criação?",
                opcoes: [
                    { numero: 1, texto: "A vitória sobre os gigantes de Basã", correta: false },
                    { numero: 2, texto: "A lembrança de que foram servos no Egito e libertos por Deus", correta: true },
                    { numero: 3, texto: "A necessidade de descansar após as guerras", correta: false },
                    { numero: 4, texto: "A escassez de maná aos sábados no deserto", correta: false }
                ],
                explicacao: "Deuteronômio 5:15 - Diferente de Êxodo 20 (focado na Criação), aqui o Sábado é reforçado como um memorial da libertação da escravidão egípcia.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 6 DE DEUTERONÔMIO ---
        6: {
            titulo: "O Grande Mandamento e a Exortação à Fidelidade",
            subtitulo: "O 'Shema Israel' e o dever de ensinar a Lei às futuras gerações",

            texto: `
¹ Estes, pois, são os mandamentos, os estatutos e os juízos que mandou o SENHOR vosso Deus que se vos ensinassem, para que os cumprísseis na terra a que passais a possuir;
² para que temas ao SENHOR teu Deus, e guardes todos os seus estatutos e mandamentos, que eu te ordeno, tu, e teu filho, e o filho de teu filho, todos os dias da tua vida, e que teus dias sejam prolongados.
³ Ouve, pois, ó Israel, e cuida em os fazeres, para que bem te suceda, e muito te multipliques, como te falou o SENHOR Deus de teus pais, na terra que mana leite e mel.
⁴ Ouve, Israel, o SENHOR nosso Deus é o único SENHOR.
⁵ Amarás, pois, o SENHOR teu Deus de todo o teu coração, e de toda a tua alma, e de todas as tuas forças.
⁶ E estas palavras, que hoje te ordeno, estarão no teu coração;
⁷ e as ensinarás a teus filhos e delas falarás assentado em tua casa, e andando pelo caminho, e deitando-te e levantando-te.
⁸ Também as atarás por sinal na tua mão, e te serão por frontais entre os teus olhos.
⁹ E as escreverás nos umbrais de tua casa, e nas tuas portas.
¹⁰ Quando, pois, o SENHOR teu Deus te introduzir na terra que jurou a teus pais, Abraão, Isaque e Jacó, te daria, com grandes e boas cidades, que tu não edificaste,
¹¹ e casas cheias de todo o bem, que tu não encheste, e poços cavados, que tu não cavaste, vinhas e olivais, que tu não plantaste, e comeres, e te fartares,
¹² guarda-te, que não te esqueças do SENHOR, que te tirou da terra do Egito, da casa da servidão.
¹³ Ao SENHOR teu Deus temerás e a ele servirás, e pelo seu nome jurarás.
¹⁴ Não seguireis outros deuses, os deuses dos povos que houver ao redor de vós;
¹⁵ porque o SENHOR teu Deus é um Deus zeloso no meio de ti, para que a ira do SENHOR teu Deus se não acenda contra ti e te destrua de sobre a face da terra.
¹⁶ Não tentareis o SENHOR vosso Deus, como o tentastes em Massá.
¹⁷ Diligentemente guardareis os mandamentos do SENHOR vosso Deus, como também os seus testemunhos, e seus estatutos, que te tem ordenado.
¹⁸ E farás o que é reto e bom aos olhos do SENHOR, para que bem te suceda, e entres, e possuas a boa terra, sobre a qual o SENHOR jurou a teus pais;
¹⁹ para que lance fora a todos os teus inimigos de diante de ti, como o SENHOR tem dito.
²⁰ Quando teu filho te perguntar no futuro, dizendo: Que significam estes testemunhos, e estatutos e juízos que o SENHOR nosso Deus vos ordenou?
²¹ Então dirás a teu filho: Éramos servos de Faraó no Egito; porém o SENHOR, com mão forte, nos tirou do Egito;
²² e o SENHOR, aos nossos olhos, fez sinais e prodígios, grandes e terríveis, contra o Egito, contra Faraó e contra toda a sua casa;
²³ e dali nos tirou, para nos introduzir e nos dar a terra que jurara a nossos pais.
²⁴ E o SENHOR nos ordenou que cumpríssemos todos estes estatutos, para temermos ao SENHOR nosso Deus, para o nosso eterno bem, para nos guardar em vida, como no dia de hoje.
²⁵ E será para nós justiça, quando tivermos cuidado de cumprir todos estes mandamentos perante o SENHOR nosso Deus, como ele nos tem ordenado.
`,

            // O DESAFIO
            pergunta: {
                texto: "Qual é a instrução específica dada por Moisés sobre como as palavras da Lei deveriam ser transmitidas aos filhos?",
                opcoes: [
                    { numero: 1, texto: "Apenas em reuniões formais no Tabernáculo", correta: false },
                    { numero: 2, texto: "Falando delas em casa, no caminho, ao deitar e ao levantar", correta: true },
                    { numero: 3, texto: "Contratando escribas para lerem para eles", correta: false },
                    { numero: 4, texto: "Mantendo-as em segredo até que atingissem a maioridade", correta: false }
                ],
                explicacao: "Deuteronômio 6:7 - A educação espiritual em Israel deveria ser constante e integrada à rotina diária da família, permeando todos os momentos da vida.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 7 DE DEUTERONÔMIO ---
        7: {
            titulo: "Um Povo Santo e a Destruição da Idolatria",
            subtitulo: "A ordem de separação das nações de Canaã e as promessas de bênção",

            texto: `
¹ Quando o SENHOR teu Deus te introduzir na terra, a qual passas a possuir, e tiver lançado fora muitas nações de diante de ti, os heteus, e os girgaseus, e os amorreus, e os cananeus, e os ferezeus, e os heveus, e os jebuseus, sete nações mais numerosas e mais poderosas do que tu;
² e o SENHOR teu Deus as tiver dado diante de ti, para as ferires, totalmente as destruirás; não farás com elas aliança, nem terás piedade delas;
³ nem te aparentarás com elas; não darás tua filha a seu filho, e não tomarás sua filha para teu filho;
⁴ pois fariam desviar teus filhos de mim, para que servissem a outros deuses; e a ira do SENHOR se acenderia contra vós, e depressa vos destruiria.
⁵ Porém assim lhes fareis: Derrubareis os seus altares, quebrareis as suas estátuas, e cortareis os seus bosques, e queimareis a fogo as suas imagens de escultura.
⁶ Porque povo santo és ao SENHOR teu Deus; o SENHOR teu Deus te escolheu, para que lhe fosses o seu povo próprio, de todos os povos que há sobre a terra.
⁷ O SENHOR não tomou prazer em vós, nem vos escolheu, porque fôsseis mais numerosos do que todos os outros povos, pois éreis menos em número do que todos os povos;
⁸ mas, porque o SENHOR vos amava, e para guardar o juramento que fizera a vossos pais, o SENHOR vos tirou com mão forte e vos resgatou da casa da servidão, da mão de Faraó, rei do Egito.
⁹ Saberás, pois, que o SENHOR teu Deus, ele é Deus, o Deus fiel, que guarda a aliança e a misericórdia até mil gerações aos que o amam e guardam os seus mandamentos.
¹⁰ E retribui no rosto a qualquer dos que o odeiam, fazendo-o perecer; não será tardio ao que o odeia; em seu rosto lho retribuirá.
¹¹ Guardarás, pois, os mandamentos e os estatutos e os juízos que hoje te mando cumprir.
¹² Será, pois, que, se ouvindo estes juízos, os guardardes e cumprirdes, o SENHOR teu Deus te guardará a aliança e a misericórdia que jurou a teus pais;
¹³ e amar-te-á, e abençoar-te-á, e te fará multiplicar; e abençoará o fruto do teu ventre, e o fruto da tua terra, o teu grão, e o teu mosto, e o teu azeite, e a criação das tuas vacas, e o rebanho das tuas ovelhas, na terra que jurou a teus pais dar-te.
¹⁴ Bendito serás mais do que todos os povos; não haverá estéril entre ti, seja homem, seja mulher, nem entre os teus animais.
¹⁵ E o SENHOR de ti desviará toda a enfermidade; sobre ti não porá nenhuma das más doenças dos egípcios, que bem sabes, antes as porás sobre todos os que te odeiam.
¹⁶ Pois consumirás a todos os povos que te der o SENHOR teu Deus; o teu olho não poupará deles; e não servirás a seus deuses, pois isto te seria por laço.
¹⁷ Se disseres no teu coração: Estas nações são mais numerosas do que eu; como as poderei lançar fora?
¹⁸ Delas não tenhas medo; lembra-te bem do que o SENHOR teu Deus fez a Faraó e a todos os egípcios;
¹⁹ das grandes provas que viram os teus olhos, e dos sinais, e prodígios, e da mão forte, e do braço estendido, com que o SENHOR teu Deus te tirou; assim fará o SENHOR teu Deus com todos os povos, diante dos quais tu temes.
²⁰ E mais, o SENHOR teu Deus mandará entre eles vespões, até que pereçam os que ficarem e se esconderem de diante de ti.
²¹ Não te espantes diante deles, porque o SENHOR teu Deus está no meio de ti, Deus grande e terrível.
²² E o SENHOR teu Deus lançará fora estas nações de diante de ti, pouco a pouco; não poderás destruí-las todas de pronto, para que as feras do campo se não multipliquem contra ti.
²³ Mas o SENHOR teu Deus as dará diante de ti, e as quebrantará com grande destruição, até que sejam consumidas.
²⁴ E entregará os seus reis na tua mão, para que apagues os seus nomes de debaixo do céu; nenhum homem resistirá diante de ti, até que as destruas.
²⁵ As imagens de escultura de seus deuses queimarás a fogo; a prata e o ouro que estão sobre elas não cobiçarás, nem os tomarás para ti, para que te não enlaces neles; pois abominação é ao SENHOR teu Deus.
²⁶ Não introduzirás, pois, abominação em tua casa, para que não sejas anátema, assim como ela; de todo a detestarás, e de todo a abominarás, pois anátema é.
`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com o texto, por que o SENHOR escolheu Israel para ser Seu povo particular, entre todas as nações da terra?",
                opcoes: [
                    { numero: 1, texto: "Porque eles eram a nação mais numerosa e forte", correta: false },
                    { numero: 2, texto: "Porque eles eram mais sábios que os egípcios", correta: false },
                    { numero: 3, texto: "Porque o SENHOR os amava e queria guardar o juramento feito a seus pais", correta: true },
                    { numero: 4, texto: "Porque eles nunca haviam pecado no deserto", correta: false }
                ],
                explicacao: "Deuteronômio 7:7-8 - Moisés deixa claro que a escolha não foi por mérito numérico ou força, mas pelo amor de Deus e Sua fidelidade às promessas feitas aos patriarcas.",
                pontosGanhos: 20
            }
        },

        // --- INÍCIO DO CAPÍTULO 8 DE DEUTERONÔMIO ---
        8: {
            titulo: "Lembrança da Providência no Deserto",
            subtitulo: "O aviso contra o orgulho e o esquecimento de Deus na prosperidade",

            texto: `
¹ Todos os mandamentos que hoje vos ordeno guardareis para os cumprir; para que vivais, e vos multipliqueis, e entreis, e possuais a terra que o SENHOR jurou a vossos pais.
² E te lembrarás de todo o caminho, pelo qual o SENHOR teu Deus te guiou no deserto estes quarenta anos, para te humilhar, e te provar, para saber o que estava no teu coração, se guardarias os seus mandamentos, ou não.
³ E te humilhou, e te deixou ter fome, e te sustentou com o maná, que tu não conhecias, nem teus pais o conheceram; para te dar a entender que o homem não viverá só de pão, mas de tudo o que sai da boca do SENHOR viverá o homem.
⁴ Nunca se envelheceu a tua roupa sobre ti, nem se inchou o teu pé nestes quarenta anos.
⁵ Confessa, pois, no teu coração que, como um homem castiga a seu filho, assim te castiga o SENHOR teu Deus.
⁶ E guarda os mandamentos do SENHOR teu Deus, para andares nos seus caminhos e para o temeres.
⁷ Porque o SENHOR teu Deus te põe numa boa terra, terra de ribeiros de águas, de fontes, e de abismos, que saem dos vales e das montanhas;
⁸ terra de trigo e cevada, e de vides e figueiras, e romeiras; terra de oliveiras, de azeite e mel.
⁹ Terra em que comerás o pão sem escassez, e nada te faltará nela; terra cujas pedras são ferro, e de cujos montes cavarás o cobre.
¹⁰ Quando, pois, tiveres comido, e fores farto, louvarás ao SENHOR teu Deus pela boa terra que te deu.
¹¹ Guarda-te que não te esqueças do SENHOR teu Deus, deixando de guardar os seus mandamentos, e os seus juízos, e os seus estatutos que hoje te ordeno;
¹² para que, porventura, havendo tu comido e estando farto, e havendo edificado boas casas, e habitando-as,
¹³ e se tiverem aumentado os teus bois e as tuas ovelhas, e se acrescentar a prata e o ouro, e se multiplicar tudo quanto tens,
¹⁴ não se eleve o teu coração e te esqueças do SENHOR teu Deus, que te tirou da terra do Egito, da casa da servidão;
¹⁵ que te guiou por aquele grande e terrível deserto de serpentes ardentes, e de escorpiões, e de terra seca, em que não havia água; e tirou água para ti da rocha do pederneira;
¹⁶ que no deserto te sustentou com maná, que teus pais não conheceram; para te humilhar, e para te provar, para no fim te fazer bem;
¹⁷ e digas no teu coração: A minha força, e a fortaleza da minha mão, me adquiriram estas riquezas.
¹⁸ Antes te lembrarás do SENHOR teu Deus, que ele é o que te dá força para adquirires riquezas; para confirmar a sua aliança, que jurou a teus pais, como se vê neste dia.
¹⁹ Será, porém, que, se de qualquer modo te esqueceres do SENHOR teu Deus, e se fores após outros deuses, e os servires, e te inclinares perante eles, hoje eu protesto contra vós que certamente perecereis.
²⁰ Como as nações que o SENHOR destruiu diante de vós, assim vós perecereis; porquanto não quisestes obedecer à voz do SENHOR vosso Deus.
`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com o versículo 3, qual era o propósito espiritual de Deus ao sustentar o povo com o maná no deserto?",
                opcoes: [
                    { numero: 1, texto: "Mostrar que o maná era mais saboroso que o pão do Egito", correta: false },
                    { numero: 2, texto: "Ensinar que o homem não vive só de pão, mas de tudo o que sai da boca do SENHOR", correta: true },
                    { numero: 3, texto: "Provar que eles podiam sobreviver sem cozinhar", correta: false },
                    { numero: 4, texto: "Evitar que eles tivessem que caçar animais selvagens", correta: false }
                ],
                explicacao: "Deuteronômio 8:3 - A dependência diária do maná serviu para ensinar a Israel que a vida depende fundamentalmente da palavra e da vontade de Deus, não apenas de sustento físico.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 9 DE DEUTERONÔMIO ---
        9: {
            titulo: "A Rebeldia de Israel e a Intercessão de Moisés",
            subtitulo: "A advertência contra a justiça própria e a recordação do bezerro de ouro",

            texto: `
¹ Ouve, ó Israel, hoje passarás o Jordão, para entrares a possuir nações maiores e mais fortes do que tu; cidades grandes, e muradas até ao céu;
² um povo grande e alto, filhos dos anaquins, que tu conheces, e de que ouviste dizer: Quem parará diante dos filhos dos anaquins?
³ Sabe, pois, hoje, que o SENHOR teu Deus, que passa diante de ti, é um fogo consumidor, que os destruirá, e os dobrará diante de ti; e tu os lançarás fora, e cedo os destruirás, como o SENHOR te tem dito.
⁴ Quando, pois, o SENHOR teu Deus os lançar fora de diante de ti, não fales no teu coração, dizendo: Por causa da minha justiça é que o SENHOR me introduziu nesta terra para a possuir; porquanto, pela impiedade destas nações, o SENHOR as lança fora de diante de ti.
⁵ Não é por causa da tua justiça, nem pela retidão do teu coração que entras a possuir a sua terra, mas pela impiedade destas nações o SENHOR teu Deus as lança fora de diante de ti; e para confirmar a palavra que o SENHOR jurou a teus pais, Abraão, Isaque e Jacó.
⁶ Sabe, pois, que não é por causa da tua justiça que o SENHOR teu Deus te dá esta boa terra para possuí-la, pois tu és povo de dura cerviz.
⁷ Lembra-te, e não te esqueças, de que muito provocaste à ira o SENHOR teu Deus no deserto; desde o dia em que saístes da terra do Egito, até que chegastes a este lugar, fostes rebeldes contra o SENHOR;
⁸ pois em Horebe tanto provocastes à ira o SENHOR, que o SENHOR se irou contra vós para vos destruir.
⁹ Subindo eu ao monte a receber as tábuas de pedra, as tábuas da aliança que o SENHOR fizera convosco, então fiquei no monte quarenta dias e quarenta noites; pão não comi, nem água bebi;
¹⁰ e o SENHOR me deu as duas tábuas de pedra, escritas com o dedo de Deus; e nelas estava escrito conforme a todas aquelas palavras que o SENHOR tinha falado convosco no monte, do meio do fogo, no dia da congregação.
¹¹ E sucedeu que, ao fim dos quarenta dias e quarenta noites, o SENHOR me deu as duas tábuas de pedra, as tábuas da aliança.
¹² E o SENHOR me disse: Levanta-te, desce depressa daqui, porque o teu povo, que tiraste do Egito, já se corrompeu; depressa se desviaram do caminho que eu lhes tinha ordenado; fizeram para si uma imagem de fundição.
¹³ Falou-me mais o SENHOR, dizendo: Tenho visto este povo, e eis que ele é povo de dura cerviz;
¹⁴ deixa-me que os destrua, e apague o seu nome de debaixo do céu; e te faça a ti nação mais forte e mais numerosa do que esta.
¹⁵ Então me virei, e desci do monte, e o monte ardia em fogo, e as duas tábuas da aliança estavam em ambas as minhas mãos.
¹⁶ E olhei, e eis que havíeis pecado contra o SENHOR vosso Deus; vós havíeis feito um bezerro de fundição; depressa vos havíeis desviado do caminho que o SENHOR vos ordenara.
¹⁷ Então peguei nas duas tábuas, e as lancei de ambas as minhas mãos, e as quebrei diante dos vossos olhos.
¹⁸ E prostrei-me perante o SENHOR, como dantes, quarenta dias, e quarenta noites; pão não comi e água não bebi, por causa de todo o vosso pecado que havíeis pecado, fazendo mal aos olhos do SENHOR, para o provocar à ira.
¹⁹ Porque temi por causa da ira e do furor com que o SENHOR tanto estava irado contra vós, para vos destruir; porém ainda por esta vez o SENHOR me ouviu.
²⁰ Também o SENHOR se irou muito contra Arão para o destruir; mas também orei por Arão ao mesmo tempo.
²¹ Porém eu tomei o vosso pecado, o bezerro que havíeis feito, e o queimei a fogo, e o pisei, moendo-o bem, até que se desfez em pó; e o seu pó lancei no ribeiro que descia do monte.
²² Também em Taberá, e em Massá, e em Quibrote-Hataavá, provocastes muito à ira o SENHOR.
²³ E quando o SENHOR vos enviou de Cades-Barneia, dizendo: Subi, e possuí a terra que vos tenho dado; rebeldes fostes ao mandado do SENHOR vosso Deus, e não o crestes, e não obedecestes à sua voz.
²⁴ Rebeldes fostes contra o SENHOR desde o dia em que vos conheci.
²⁵ Prostrado, pois, estive perante o SENHOR aqueles quarenta dias e quarenta noites, em que me prostrei; porquanto o SENHOR dissera que vos queria destruir.
²⁶ E orei ao SENHOR, dizendo: Senhor DEUS, não destruas o teu povo e a tua herança, que resgataste com a tua grandeza, que tiraste do Egito com mão forte.
²⁷ Lembra-te dos teus servos, Abraão, Isaque e Jacó; não atentes para a dureza deste povo, nem para a sua impiedade, nem para o seu pecado;
²⁸ para que o povo da terra donde nos tiraste não diga: Porquanto o SENHOR não os pôde introduzir na terra de que lhes tinha falado, e porquanto os odiava, os tirou para matá-los no deserto.
²⁹ Todavia eles são o teu povo e a tua herança, que tiraste com a tua grande força e com o teu braço estendido.
`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com o texto, por que Deus estava expulsando as nações de Canaã para dar a terra a Israel?",
                opcoes: [
                    { numero: 1, texto: "Por causa da justiça e retidão do coração de Israel", correta: false },
                    { numero: 2, texto: "Pela impiedade daquelas nações e para confirmar a promessa aos patriarcas", correta: true },
                    { numero: 3, texto: "Porque Israel era o povo mais numeroso do mundo", correta: false },
                    { numero: 4, texto: "Porque as nações de Canaã pediram para sair da terra", correta: false }
                ],
                explicacao: "Deuteronômio 9:4-5 - Moisés adverte o povo para que não sejam arrogantes, pois a conquista se devia ao julgamento divino sobre o pecado dos cananeus e à fidelidade de Deus à Sua aliança, não aos méritos de Israel.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 10 DE DEUTERONÔMIO ---
        10: {
            titulo: "As Novas Tábuas e a Eleição de Levi",
            subtitulo: "A restauração da Aliança e o que o SENHOR pede de Israel",

            texto: `
¹ Naquele mesmo tempo me disse o SENHOR: Alisa duas tábuas de pedra, como as primeiras, e sobe a mim ao monte; e faze-te uma arca de madeira;
² e nessas tábuas escreverei as palavras que estavam nas primeiras tábuas, que quebraste, e as porás na arca.
³ Assim fiz uma arca de madeira de acácia, e alisei duas tábuas de pedra, como as primeiras; e subi ao monte com as duas tábuas na minha mão.
⁴ Então escreveu o SENHOR nas tábuas, conforme à primeira escritura, os dez mandamentos, que o SENHOR vos falara no monte, do meio do fogo, no dia da congregação; e o SENHOR mo deu a mim.
⁵ E virei-me, e desci do monte, e pus as tábuas na arca que fizera; e ali estão, como o SENHOR me ordenou.
⁶ (E partiram os filhos de Israel de Beerote-Bene-Jaacã a Moserá. Ali morreu Arão, e ali foi sepultado. E Eleazar, seu filho, administrou o sacerdócio em seu lugar.
⁷ Dali partiram a Gudgodá, e de Gudgodá a Jotbatá, terra de ribeiros de águas.
⁸ Naquele tempo o SENHOR separou a tribo de Levi, para levar a arca da aliança do SENHOR, para estar diante do SENHOR, para o servir, e para abençoar em seu nome até ao dia de hoje.
⁹ Pelo que Levi não tem parte nem herança com seus irmãos; o SENHOR é a sua herança, como o SENHOR teu Deus lhe tem dito.)
¹⁰ E eu estive no monte, como nos dias primeiros, quarenta dias e quarenta noites; e o SENHOR me ouviu ainda por esta vez; não quis o SENHOR destruir-te.
¹¹ Porém o SENHOR me disse: Levanta-te, põe-te a caminho diante deste povo, para que entrem, e possuam a terra que jurei a seus pais dar-lhes.
¹² Agora, pois, ó Israel, que é o que o SENHOR teu Deus pede de ti, senão que temas o SENHOR teu Deus, que andes em todos os seus caminhos, e o ames, e sirvas ao SENHOR teu Deus com todo o teu coração e com toda a tua alma,
¹³ para guardares os mandamentos do SENHOR, e os seus estatutos, que hoje te ordeno, para o teu bem?
¹⁴ Eis que os céus, e os céus dos céus, são do SENHOR teu Deus; a terra e tudo o que nela há.
¹⁵ Tão somente o SENHOR se agradou de teus pais para os amar; e a vós, descendência deles, escolheu de todos os povos, como hoje se vê.
¹⁶ Circuncidai, pois, o prepúcio do vosso coração, e não mais endureçais a vossa cerviz.
¹⁷ Pois o SENHOR vosso Deus é o Deus dos deuses, e o Senhor dos senhores, o Deus grande, poderoso e terrível, que não faz acepção de pessoas, nem aceita recompensas;
¹⁸ que faz justiça ao órfão e à viúva, e ama o estrangeiro, dando-lhe pão e veste.
¹⁹ Pelo que amareis o estrangeiro, pois fostes estrangeiros na terra do Egito.
²⁰ Ao SENHOR teu Deus temerás; a ele servirás, e a ele te chegarás, e pelo seu nome jurarás.
²¹ Ele é o teu louvor, e ele é o teu Deus, que te fez estas grandes e terríveis coisas que os teus olhos têm visto.
²² Com setenta almas teus pais desceram ao Egito; e agora o SENHOR teu Deus te pôs como as estrelas dos céus em multidão.
`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com os versículos 12 e 13, o que o SENHOR pede essencialmente de Israel para o seu próprio bem?",
                opcoes: [
                    { numero: 1, texto: "Apenas que ofereçam sacrifícios diários no Tabernáculo", correta: false },
                    { numero: 2, texto: "Que conquistem todas as nações do mundo em Seu nome", correta: false },
                    { numero: 3, texto: "Que O temam, andem em Seus caminhos, O amem e O sirvam de todo o coração", correta: true },
                    { numero: 4, texto: "Que construam um templo de pedra em cada cidade conquistada", correta: false }
                ],
                explicacao: "Deuteronômio 10:12-13 - Moisés resume a essência da Lei não como um fardo, mas como uma resposta de amor e reverência a Deus, visando o bem-estar do próprio povo.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 11 DE DEUTERONÔMIO ---
        11: {
            titulo: "A Recompensa da Obediência",
            subtitulo: "A bênção e a maldição: o contraste entre o Egito e a Terra Prometida",

            texto: `
¹ Amarás, pois, o SENHOR teu Deus, e guardarás as suas ordenanças, e os seus estatutos, e os seus juízos, e os seus mandamentos, todos os dias.
² E compreendei hoje (porque não falo com vossos filhos, que o não sabem, e o não viram) a instrução do SENHOR vosso Deus, a sua grandeza, a sua mão forte, e o seu braço estendido;
³ e os seus sinais, e as suas obras, que fez no meio do Egito a Faraó, rei do Egito, e a toda a sua terra;
⁴ e o que fez ao exército dos egípcios, aos seus cavalos e aos seus carros, fazendo passar as águas do Mar Vermelho sobre eles quando vos perseguiam, e como o SENHOR os destruiu até ao dia de hoje;
⁵ e o que vos fez no deserto, até chegardes a este lugar;
⁶ e o que fez a Datã e a Abirão, filhos de Eliabe, filho de Rúben; como a terra abriu a sua boca e os tragou com as suas casas e as suas tendas, e tudo o que subsistia e lhes pertencia, no meio de todo o Israel.
⁷ Porquanto os vossos olhos são os que viram todas as grandes obras que o SENHOR fez.
⁸ Guardai, pois, todos os mandamentos que eu vos ordeno hoje, para que sejais fortes, e entreis, e possuais a terra que passais a possuir;
⁹ e para que prolongueis os dias na terra que o SENHOR jurou a vossos pais dá-la a eles e à sua descendência, terra que mana leite e mel.
¹⁰ Porque a terra que passas a possuir não é como a terra do Egito, de onde saíste, em que semeavas a tua semente, e a regavas com o teu pé, como a uma horta;
¹¹ mas a terra que passais a possuir é terra de montes e de vales; da chuva dos céus beberá as águas;
¹² terra de que o SENHOR teu Deus tem cuidado; os olhos do SENHOR teu Deus estão sobre ela continuamente, desde o princípio até ao fim do ano.
¹³ E será que, se diligentemente obedecerdes a meus mandamentos que hoje vos ordeno, de amar ao SENHOR vosso Deus, e de o servir de todo o vosso coração e de toda a vossa alma,
¹⁴ então darei a chuva da vossa terra a seu tempo, a temporã e a serôdia, para que recolhas o teu grão, e o teu mosto e o teu azeite.
¹⁵ E darei erva no teu campo aos teus animais, e comerás, e fartar-te-ás.
¹⁶ Guardai-vos, que o vosso coração se não engane, e vos desvieis, e sirvais a outros deuses, e vos inclineis perante eles;
¹⁷ e a ira do SENHOR se acenda contra vós, e feche ele os céus, e não haja chuva, e a terra não dê o seu fruto, e cedo pereçais da boa terra que o SENHOR vos dá.
¹⁸ Ponde, pois, estas minhas palavras no vosso coração e na vossa alma, e atai-as por sinal na vossa mão, para que estejam por frontais entre os vossos olhos.
¹⁹ E ensinai-as a vossos filhos, falando delas assentados em vossas casas, e andando pelo caminho, e deitando-vos, e levantando-vos;
²⁰ e escrevei-as nos umbrais de vossas casas, e nas vossas portas;
²¹ para que se multipliquem os vossos dias e os dias de vossos filhos na terra que o SENHOR jurou a vossos pais dar-lhes, como os dias dos céus sobre a terra.
²² Porque se diligentemente guardardes todos estes mandamentos que vos ordeno para os cumprirdes, amando ao SENHOR vosso Deus, andando em todos os seus caminhos, e a ele vos achegardes,
²³ também o SENHOR lançará fora de diante de vós todas estas nações, e possuireis nações maiores e mais fortes do que vós.
²⁴ Todo o lugar que pisar a planta do vosso pé será vosso; desde o deserto, e desde o Líbano, desde o rio, o rio Eufrates, até ao mar ocidental, será o vosso termo.
²⁵ Ninguém resistirá diante de vós; o SENHOR vosso Deus porá o vosso terror e o vosso medo sobre toda a terra que pisardes, como já vos tem dito.
²⁶ Eis que hoje eu ponho diante de vós a bênção e a maldição;
²⁷ a bênção, quando cumprirdes os mandamentos do SENHOR vosso Deus, que hoje vos ordeno;
²⁸ a maldição, se não cumprirdes os mandamentos do SENHOR vosso Deus, e vos desviardes do caminho que hoje vos ordeno, para seguirdes outros deuses que não conhecestes.
²⁹ E será que, quando o SENHOR teu Deus te introduzir na terra, a qual passas a possuir, pronunciarás a bênção sobre o monte Gerizim, e a maldição sobre o monte Ebal.
³⁰ Porventura não estão eles além do Jordão, caminho do pôr do sol, na terra dos cananeus, que habitam na planície defronte de Gilgal, junto aos carvalhais de Moré?
³¹ Porque passareis o Jordão para entrardes a possuir a terra que vos dá o SENHOR vosso Deus; e a possuireis, e nela habitareis.
³² Tende, pois, cuidado em cumprir todos os estatutos e os juízos que hoje eu ponho diante de vós.
`,

            // O DESAFIO
            pergunta: {
                texto: "Segundo o texto, qual é a principal diferença geográfica e agrícola entre a terra do Egito e a Terra Prometida?",
                opcoes: [
                    { numero: 1, texto: "No Egito havia mais chuvas do que em Canaã", correta: false },
                    { numero: 2, texto: "O Egito era regado pelo esforço humano (pé), enquanto Canaã dependia da chuva dos céus cuidada por Deus", correta: true },
                    { numero: 3, texto: "Canaã era totalmente plana como o delta do Nilo", correta: false },
                    { numero: 4, texto: "Não havia diferença, ambas eram desertos secos", correta: false }
                ],
                explicacao: "Deuteronômio 11:10-12 - Moisés contrasta a irrigação artificial do Egito com a dependência direta da providência divina em Canaã, uma terra de montes que bebe a água da chuva.",
                pontosGanhos: 20
            }
        },

        // --- INÍCIO DO CAPÍTULO 12 DE DEUTERONÔMIO ---
        12: {
            titulo: "O Único Lugar de Adoração",
            subtitulo: "A destruição dos altares pagãos e a centralização do culto",

            texto: `
¹ Estes são os estatutos e juízos que cuidareis de cumprir na terra que vos deu o SENHOR Deus de vossos pais, para a possuirdes todos os dias que viverdes sobre a terra.
² Totalmente destruireis todos os lugares, onde as nações que possuireis serviram aos seus deuses, sobre as altas montanhas, e sobre os outeiros, e debaixo de toda a árvore frondosa;
³ e derrubareis os seus altares, e quebrareis as suas estátuas, e os seus bosques queimareis a fogo, e abatereis as imagens esculpidas dos seus deuses, e apagareis o seu nome daquele lugar.
⁴ Assim não fareis ao SENHOR vosso Deus;
⁵ mas buscareis o lugar que o SENHOR vosso Deus escolher de todas as vossas tribos, para ali pôr o seu nome e sua habitação, e ali vireis.
⁶ E ali trareis os vossos holocaustos, e os vossos sacrifícios, e os vossos dízimos, e a oferta alçada da vossa mão, e os vossos votos, e as vossas ofertas voluntárias, e os primogênitos das vossas vacas e das vossas ovelhas.
⁷ E ali comereis perante o SENHOR vosso Deus, e vos alegrareis em tudo em que puserdes a vossa mão, vós e as vossas casas, no que te abençoar o SENHOR teu Deus.
⁸ Não fareis conforme a tudo o que hoje fazemos aqui, cada qual tudo o que bem parece aos seus olhos.
⁹ Porque até agora não lestes chegado ao descanso e à herança que vos dá o SENHOR vosso Deus.
¹⁰ Mas passareis o Jordão, e habitareis na terra que vos fará herdar o SENHOR vosso Deus; e vos dará descanso de todos os vossos inimigos em redor, e habitareis seguros.
¹¹ Então haverá um lugar que escolherá o SENHOR vosso Deus para ali fazer habitar o seu nome; ali trareis tudo o que vos ordeno; os vossos holocaustos, e os vossos sacrifícios, e os vossos dízimos, e a oferta alçada da vossa mão, e toda a escolha dos vossos votos que votardes ao SENHOR.
¹² E vos alegrareis perante o SENHOR vosso Deus, vós, e vossos filhos, e vossas filhas, e os vossos servos, e as vossas servas, e o levita que está dentro das vossas portas; pois ele não tem parte nem herança convosco.
¹³ Guarda-te, que não ofereças os teus holocaustos em todo o lugar que vires;
¹⁴ mas no lugar que o SENHOR escolher numa das tuas tribos ali oferecerás os teus holocaustos, e ali farás tudo o que te ordeno.
¹⁵ Porém, conforme a todo o desejo da tua alma, matarás e comerás carne, dentro de todas as tuas portas, segundo a bênção do SENHOR teu Deus, que te dá; o imundo e o limpo dela comerão, como do corço e do veado;
¹⁶ tão somente o sangue não comereis; sobre a terra o derramareis como água.
¹⁷ Dentro das tuas portas não poderás comer o dízimo do teu grão, nem do teu mosto, nem do teu azeite, nem os primogênitos das tuas vacas, nem das tuas ovelhas; nem nenhum dos teus votos, que houveres votado, nem as tuas ofertas voluntárias, nem a oferta alçada da tua mão.
¹⁸ Mas os comerás perante o SENHOR teu Deus, no lugar que escolher o SENHOR teu Deus, tu, e teu filho, e tua filha, e o teu servo, e a tua serva, e o levita que está dentro das tuas portas; e perante o SENHOR teu Deus te alegrarás em tudo em que puserdes a vossa mão.
¹⁹ Guarda-te, que não desampares o levita todos os teus dias na terra.
²⁰ Quando o SENHOR teu Deus dilatar os teus termos, como te disse, e disseres: Comerei carne; porquanto a tua alma tem desejo de comer carne; conforme a todo o desejo da tua alma comerás carne.
²¹ Se o lugar que o SENHOR teu Deus escolher para ali pôr o seu nome estiver longe de ti, então matarás das tuas vacas e das tuas ovelhas, que o SENHOR te tiver dado, como te tenho ordenado; e comerás dentro das tuas portas, conforme a todo o desejo da tua alma.
²² Porém, como se come o corço e o veado, assim comerás; o imundo e o limpo juntamente comerão delas.
²³ Somente guarda-te de que não comas o sangue; pois o sangue é a alma; pelo que não comerás a alma com a carne;
²⁴ não o comerás; na terra o derramarás como água.
²⁵ Não o comerás; para que bem te suceda a ti, e a teus filhos depois de ti, quando fizeres o que é reto aos olhos do SENHOR.
²⁶ Porém as tuas coisas sagradas que tiveres, e os teus votos, tomarás e virás ao lugar que o SENHOR escolher.
²⁷ E oferecerás os teus holocaustos, a carne e o sangue sobre o altar do SENHOR teu Deus; e o sangue dos teus sacrifícios se derramará sobre o altar do SENHOR teu Deus; porém a carne comerás.
²⁸ Guarda e ouve todas estas palavras que te ordeno, para que bem te suceda a ti e a teus filhos depois de ti para sempre, quando fizeres o que é bom e reto aos olhos do SENHOR teu Deus.
²⁹ Quando o SENHOR teu Deus consumir de diante de ti as nações, a que vais para as possuir, e as possuíres e habitares na sua terra,
³⁰ guarda-te, que não te enlaces seguindo-as, depois que forem destruídas diante de ti; e que não perguntes acerca dos seus deuses, dizendo: Assim como serviram estas nações os seus deuses, do mesmo modo farei eu também.
³¹ Assim não farás ao SENHOR vosso Deus; porque tudo o que é abominação ao SENHOR, e que ele odeia, fizeram eles a seus deuses; pois até seus filhos e suas filhas queimaram no fogo aos seus deuses.
³² Tudo o que eu te ordeno, observarás para o fazer; nada lhe acrescentarás nem diminuirás.
`,

            // O DESAFIO
            pergunta: {
                texto: "Em relação ao consumo de carne na terra prometida, qual era a proibição estrita e repetida que Moisés enfatizou, independentemente de onde a pessoa estivesse?",
                opcoes: [
                    { numero: 1, texto: "Não comer carne de animais domésticos como bois e ovelhas", correta: false },
                    { numero: 2, texto: "Não comer carne de animais selvagens como o corço e o veado", correta: false },
                    { numero: 3, texto: "Não comer o sangue, devendo este ser derramado sobre a terra como água", correta: true },
                    { numero: 4, texto: "Não comer carne durante o período de colheita do trigo", correta: false }
                ],
                explicacao: "Deuteronômio 12:16, 23-24 - Moisés reforça a proibição de ingerir sangue, pois o sangue é identificado com a vida (alma), devendo ser devolvido à terra.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 13 DE DEUTERONÔMIO ---
        13: {
            titulo: "Aviso Contra a Idolatria e Falsos Profetas",
            subtitulo: "A fidelidade exclusiva ao SENHOR e a punição contra a sedução à apostasia",

            texto: `
¹ Quando profeta ou sonhador de sonhos se levantar no meio de ti, e te der um sinal ou prodígio,
² e suceder o tal sinal ou prodígio, de que te houver falado, dizendo: Vamos após outros deuses, que não conhecestes, e sirvamo-los;
³ não ouvirás as palavras daquele profeta, ou daquele sonhador de sonhos; porquanto o SENHOR vosso Deus vos prova, para saber se amais o SENHOR vosso Deus com todo o vosso coração, e com toda a vossa alma.
⁴ Após o SENHOR vosso Deus andareis, e a ele temereis, e os seus mandamentos guardareis, e a sua voz ouvireis, e a ele servireis, e a ele vos achegareis.
⁵ E aquele profeta ou sonhador de sonhos morrerá, pois falou rebeldia contra o SENHOR vosso Deus, que vos tirou da terra do Egito, e vos resgatou da casa da servidão, para te desviar do caminho que te ordenou o SENHOR teu Deus, para andares nele; assim tirarás o mal do meio de ti.
⁶ Quando te incitar teu irmão, filho da tua mãe, ou teu filho, ou tua filha, ou a mulher do teu seio, ou teu amigo, que te é como a tua alma, dizendo-te em segredo: Vamos, e sirvamos a outros deuses que não conhecestes, nem tu nem teus pais;
⁷ dentre os deuses dos povos que estão em redor de vós, perto de ti, ou longe de ti, desde uma extremidade da terra até à outra extremidade da terra;
⁸ não consentirás com ele, nem o ouvirás; nem o teu olho o poupará, nem terás piedade dele, nem o esconderás;
⁹ mas certamente o matarás; a tua mão será a primeira contra ele, para o matar, e depois a mão de todo o povo.
¹⁰ E o apedrejarás com pedras, até que morra, pois te procurou apartar do SENHOR teu Deus, que te tirou da terra do Egito, da casa da servidão.
¹¹ E todo o Israel o ouvirá e temerá, e não se tornará a fazer outra semelhante maldade no meio de ti.
¹² Quando ouvires dizer de alguma das tuas cidades, que o SENHOR teu Deus te dá, para ali habitares:
¹³ Uns homens, filhos de Belial, saíram do meio de ti, e incitaram os moradores da sua cidade, dizendo: Vamos, e sirvamos a outros deuses que não conhecestes;
¹⁴ então inquirirás e informar-te-ás, e com diligência perguntarás; e eis que, sendo verdade, e certo que se fez tal abominação no meio de ti;
¹⁵ certamente ferirás ao fio da espada os moradores daquela cidade, destruindo a ela e a tudo o que nela houver, até os seus animais.
¹⁶ E ajuntarás todo o seu despojo no meio da sua praça; e a cidade e todo o seu despojo queimarás totalmente a fogo, para o SENHOR teu Deus, e será um montão de ruínas para sempre; nunca mais se edificará.
¹⁷ E nada se pegará à tua mão do anátema, para que o SENHOR se aparte do ardor da sua ira, e te faça misericórdia, e tenha piedade de ti, e te multiplique, como jurou a teus pais;
¹⁸ quando ouvires a voz do SENHOR teu Deus, para guardares todos os seus mandamentos que hoje te ordeno, para fazeres o que é reto aos olhos do SENHOR teu Deus.
`,

            // O DESAFIO
            pergunta: {
                texto: "Segundo o texto, o que o povo deveria fazer se um profeta realizasse um sinal ou prodígio real, mas usasse isso para convidá-los a seguir outros deuses?",
                opcoes: [
                    { numero: 1, texto: "Deveriam segui-lo, pois o milagre prova que ele é de Deus", correta: false },
                    { numero: 2, texto: "Deveriam ignorar o milagre e não ouvir o profeta, pois o SENHOR os estaria provando", correta: true },
                    { numero: 3, texto: "Deveriam pedir um segundo sinal para confirmar a mensagem", correta: false },
                    { numero: 4, texto: "Deveriam aceitar os novos deuses como auxiliares do SENHOR", correta: false }
                ],
                explicacao: "Deuteronômio 13:1-3 - Moisés ensina que a fidelidade à Palavra de Deus e à Aliança é superior a qualquer manifestação sobrenatural; prodígios não validam mensagens que contradizem a Lei.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 14 DE DEUTERONÔMIO ---
        14: {
            titulo: "Leis de Santidade e os Dízimos",
            subtitulo: "A distinção entre animais limpos e imundos e a provisão para o necessitado",

            texto: `
¹ Filhos sois do SENHOR vosso Deus; não vos dareis golpes, nem fareis calva entre vossos olhos por causa de algum morto.
² Porque és povo santo ao SENHOR teu Deus; e o SENHOR te escolheu, para lhe seres o seu povo próprio, de todos os povos que há sobre a face da terra.
³ Nenhuma coisa abominável comereis.
⁴ Estes são os animais que comereis: o boi, a ovelha, e a cabra,
⁵ o veado, e o corço, e o búfalo, e a cabra montês, e o antílope, e a vaca montês, e o gamo.
⁶ Todo o animal que tem unhas fendidas, divididas em duas, e que rumina, entre os animais, esse comereis.
⁷ Porém estes não comereis, dos que ruminam, ou dos que têm a unha fendida: o camelo, e a lebre, e o coelho, porque ruminam mas não têm a unha fendida; imundos vos serão.
⁸ Nem o porco, porque tem unha fendida, mas não rumina; imundo vos será; não comereis da carne destes, e não tocareis nos seus cadáveres.
⁹ Isto comereis de tudo o que há nas águas: tudo o que tem barbatanas e escamas comereis.
¹⁰ Mas tudo o que não tem barbatanas nem escamas não o comereis; imundo vos será.
¹¹ Toda a ave limpa comereis.
¹² Porém estas são as que não comereis: a águia, e o quebranto-ossos, e o águia marinha,
¹³ e o milhano, e o falcão, e a garça, segundo a sua espécie;
¹⁴ e todo o corvo, segundo a sua espécie;
¹⁵ e o avestruz, e o mocho, e a gaivota, e o gavião, segundo a sua espécie;
¹⁶ e o bufo, e a coruja, e o cisne,
¹⁷ e o pelicano, e o abutre, e o cormorão,
¹⁸ e a cegonha, e a garça, segundo a sua espécie, e a poupa, e o morcego.
¹⁹ Também todo o inseto que voa vos será imundo; não se comerá.
²⁰ Toda a ave limpa comereis.
²¹ Não comereis nenhum animal morto; ao estrangeiro, que está dentro das tuas portas, o darás a comer, ou o venderás ao estranho, porquanto és povo santo ao SENHOR teu Deus. Não cozerás o cabrito no leite da sua mãe.
²² Certamente darás os dízimos de todo o fruto da tua semente, que cada ano se recolher do campo.
²³ E, perante o SENHOR teu Deus, no lugar que escolher para ali fazer habitar o seu nome, comerás os dízimos do teu grão, do teu mosto e do teu azeite, e os primogênitos das tuas vacas e das tuas ovelhas; para que aprendas a temer ao SENHOR teu Deus todos os dias.
²⁴ E quando o caminho te for tão comprido que os não possas levar, por estar longe de ti o lugar que escolher o SENHOR teu Deus para ali pôr o seu nome, quando o SENHOR teu Deus te tiver abençoado;
²⁵ então vende-os, e ata o dinheiro na tua mão, e vai ao lugar que escolher o SENHOR teu Deus;
²⁶ e aquele dinheiro darás por tudo o que deseja a tua alma, por vacas, e por ovelhas, e por vinho, e por bebida forte, e por tudo o que te pedir a tua alma; come-o ali perante o SENHOR teu Deus, e alegra-te, tu e a tua casa;
²⁷ porém não desampararás o levita que está dentro das tuas portas; pois não tem parte nem herança contigo.
²⁸ Ao fim de três anos tirarás todos os dízimos da tua colheita no mesmo ano, e os recolherás dentro das tuas portas;
²⁹ então virá o levita (pois nem parte nem herança tem contigo), e o estrangeiro, e o órfão, e a viúva, que estão dentro das tuas portas, e comerão, e fartar-se-ão; para que o SENHOR teu Deus te abençoe em toda a obra das tuas mãos, que fizeres.
`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com as leis dietéticas, quais são as duas características físicas obrigatórias para que um animal terrestre fosse considerado limpo e próprio para o consumo?",
                opcoes: [
                    { numero: 1, texto: "Ter quatro patas e ser herbívoro", correta: false },
                    { numero: 2, texto: "Ter unhas fendidas (divididas em duas) e ruminar", correta: true },
                    { numero: 3, texto: "Ser veloz e não ter chifres", correta: false },
                    { numero: 4, texto: "Ter pele lisa e ser domesticável", correta: false }
                ],
                explicacao: "Deuteronômio 14:6 - A Lei exigia simultaneamente a unha fendida e o processo de ruminação para identificar os animais puros para Israel.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 15 DE DEUTERONÔMIO ---
        15: {
            titulo: "O Ano do Remissão e o Cuidado com o Pobre",
            subtitulo: "O perdão das dívidas, a libertação dos escravos e os primogênitos do gado",

            texto: `
¹ Ao fim de sete anos farás remissão.
² Este, pois, é o modo da remissão: todo o credor remitirá o que emprestou ao seu próximo; não o exigirá do seu próximo nem do seu irmão, pois a remissão do SENHOR é proclamada.
³ Do estrangeiro o exigirás; mas o que tiveres em poder de teu irmão, a tua mão o remitirá.
⁴ Para que entre ti não haja pobre; pois o SENHOR abundantemente te abençoará na terra que o SENHOR teu Deus te dá por herança, para a possuíres.
⁵ Somente se diligentemente ouvires a voz do SENHOR teu Deus para cuidares em cumprir todos estes mandamentos que hoje te ordeno.
⁶ Pois o SENHOR teu Deus te abençoará, como te tem dito; assim emprestarás a muitas nações, mas não tomarás empréstimos; e dominarás sobre muitas nações, mas elas não dominarão sobre ti.
⁷ Quando entre ti houver algum pobre de teus irmãos, em alguma das tuas portas, na terra que o SENHOR teu Deus te dá, não endurecerás o teu coração, nem fecharás a tua mão a teu irmão pobre;
⁸ antes lhe abrirás de todo a tua mão, e livremente lhe emprestarás o que lhe falta, quanto baste para a sua necessidade.
⁹ Guarda-te, que não haja palavra de Belial no teu coração, dizendo: Próximo está o sétimo ano, o ano da remissão; e que o teu olho seja maligno para com teu irmão pobre, e não lhe dês nada; e que ele clame contra ti ao SENHOR, e haja em ti pecado.
¹⁰ Livremente lhe darás, e não seja maligno o teu coração quando lhe deres; pois por esta causa te abençoará o SENHOR teu Deus em toda a tua obra, e em tudo o que puseres a tua mão.
¹¹ Pois nunca deixará de haver pobre no meio da terra; pelo que te ordeno, dizendo: Livremente abrirás a tua mão para o teu irmão, para o teu necessitado, e para o teu pobre na tua terra.
¹² Quando teu irmão hebreu ou irmã hebreia se vender a ti, seis anos te servirá, mas no sétimo ano o despedirás forro de ti.
¹³ E, quando o despedires forro de ti, não o despedirás vazio.
¹⁴ Liberalmente o fornecerás do teu rebanho, e da tua eira, e do teu lagar; daquilo com que o SENHOR teu Deus te tiver abençoado lhe darás.
¹⁵ E lembrar-te-ás de que foste servo na terra do Egito, e de que o SENHOR teu Deus te resgatou; portanto hoje te ordeno isso.
¹⁶ Porém se ele te disser: Não sairei de ti; porquanto te ama a ti e a tua casa, por estar bem contigo;
¹⁷ então tomarás uma sovela, e lhe furarás a orelha à porta, e teu servo será para sempre; e também assim farás à tua serva.
¹⁸ Não seja difícil aos teus olhos quando o despedires forro de ti; pois seis anos te serviu por metade do salário do jornaleiro; assim o SENHOR teu Deus te abençoará em tudo o que fizeres.
¹⁹ Todo o primogênito que nascer das tuas vacas e das tuas ovelhas, o macho santificarás ao SENHOR teu Deus; com o primogênito do teu boi não trabalharás, nem tosquiarás o primogênito das tuas ovelhas.
²⁰ Perante o SENHOR teu Deus os comerás cada ano, tu e a tua casa, no lugar que o SENHOR escolher.
²¹ Porém, se nele houver algum defeito, se for coxo, ou cego, ou tiver qualquer defeito mau, não o sacrificarás ao SENHOR teu Deus.
²² Dentro das tuas portas o comerás; o imundo e o limpo juntamente o comerão, como o corço ou o veado.
²³ Somente o seu sangue não comerás; sobre a terra o derramarás como água.
`,

            // O DESAFIO
            pergunta: {
                texto: "O que deveria ser feito com um escravo hebreu que, ao chegar o sétimo ano da libertação, declarasse que amava seu senhor e não desejava sair de sua casa?",
                opcoes: [
                    { numero: 1, texto: "Deveria ser vendido a um estrangeiro", correta: false },
                    { numero: 2, texto: "Deveria ter a orelha furada com uma sovela contra a porta, tornando-se servo perpétuo", correta: true },
                    { numero: 3, texto: "Deveria pagar uma multa para poder permanecer", correta: false },
                    { numero: 4, texto: "Deveria ser expulso obrigatoriamente para cumprir a lei", correta: false }
                ],
                explicacao: "Deuteronômio 15:16-17 - A lei permitia que a servidão se tornasse permanente por escolha voluntária do servo, selada pelo ritual simbólico da orelha furada na porta da casa.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 16 DE DEUTERONÔMIO ---
        16: {
            titulo: "As Três Grandes Festas e a Justiça",
            subtitulo: "A Páscoa, as Semanas, os Tabernáculos e a nomeação de juízes",

            texto: `
¹ Guarda o mês de Abibe, e celebra a páscoa ao SENHOR teu Deus; pois no mês de Abibe o SENHOR teu Deus te tirou do Egito, de noite.
² Então sacrificarás a páscoa ao SENHOR teu Deus, das ovelhas e das vacas, no lugar que o SENHOR escolher para ali fazer habitar o seu nome.
³ Nela não comerás pão levedado; sete dias nela comerás pães asmos, pão de aflição (porquanto apressadamente saíste da terra do Egito), para que te lembres do dia da tua saída da terra do Egito, todos os dias da tua vida.
⁴ E o fermento não aparecerá contigo em todos os teus termos por sete dias; também da carne que sacrificares à tarde, no primeiro dia, nada ficará até à manhã.
⁵ Não poderás sacrificar a páscoa em nenhuma das tuas portas que o SENHOR teu Deus te dá;
⁶ porém no lugar que escolher o SENHOR teu Deus, para fazer habitar o seu nome, ali sacrificarás a páscoa à tarde, ao pôr do sol, ao tempo determinado da tua saída do Egito.
⁷ E a cozerás, e comerás no lugar que escolher o SENHOR teu Deus; depois, pela manhã, voltarás e irás às tuas tendas.
⁸ Seis dias comerás pães asmos, e no sétimo dia é solenidade ao SENHOR teu Deus; nenhuma obra farás.
⁹ Sete semanas contarás para ti; desde que a foice começar na seara, começarás a contar as sete semanas.
¹⁰ Depois celebrarás a festa das semanas ao SENHOR teu Deus; o que deres será oferta voluntária da tua mão, segundo o SENHOR teu Deus te houver abençoado.
¹¹ E te alegrarás perante o SENHOR teu Deus, tu, e teu filho, e tua filha, e o teu servo, e a tua serva, e o levita que está dentro das tuas portas, e o estrangeiro, e o órfão, e a viúva, que estão no meio de ti, no lugar que escolher o SENHOR teu Deus para ali fazer habitar o seu nome.
¹² E lembrar-te-ás de que foste servo no Egito; e guardarás estes estatutos, e os cumprirás.
¹³ A festa dos tabernáculos celebrarás sete dias, quando houveres colhido da tua eira e do teu lagar.
¹⁴ E, na tua festa, alegrar-te-ás, tu, e teu filho, e tua filha, e o teu servo, e a tua serva, e o levita, e o estrangeiro, e o órfão, e a viúva, que estão dentro das tuas portas.
¹⁵ Sete dias celebrarás a festa ao SENHOR teu Deus, no lugar que o SENHOR escolher; porque o SENHOR teu Deus te abençoará em toda a tua colheita, e em todo o trabalho das tuas mãos; por isso certamente te alegrarás.
¹⁶ Três vezes no ano todo o teu varão aparecerá perante o SENHOR teu Deus, no lugar que ele escolher: na festa dos pães asmos, e na festa das semanas, e na festa dos tabernáculos; porém não aparecerá vazio perante o SENHOR;
¹⁷ cada qual conforme ao dom da sua mão, conforme a bênção que o SENHOR teu Deus te tiver dado.
¹⁸ Juízes e oficiais porás em todas as tuas portas que o SENHOR teu Deus te dá entre as tuas tribos, para que julguem o povo com reto juízo.
¹⁹ Não torcerás o juízo, não farás acepção de pessoas, nem tomarás suborno; porquanto o suborno cega os olhos dos sábios, e perverte as palavras dos justos.
²⁰ A justiça, a justiça seguirás; para que vivas, e possuas em herança a terra que te dá o SENHOR teu Deus.
²¹ Não plantarás bosque de árvores nenhumas junto ao altar do SENHOR teu Deus, que fizeres para ti.
²² Nem levantarás estátua, a qual o SENHOR teu Deus odeia.
`,

            // O DESAFIO
            pergunta: {
                texto: "Quais são as três festas anuais em que todo homem de Israel era obrigado a comparecer perante o SENHOR no lugar que Ele escolhesse?",
                opcoes: [
                    { numero: 1, texto: "Páscoa (Pães Asmos), Semanas (Pentecoste) e Tabernáculos", correta: true },
                    { numero: 2, texto: "Sábado, Lua Nova e Dia da Expiação", correta: false },
                    { numero: 3, texto: "Purim, Dedicação e Primícias", correta: false },
                    { numero: 4, texto: "Jubileu, Remissão e Páscoa", correta: false }
                ],
                explicacao: "Deuteronômio 16:16 - Estas eram as três festas de peregrinação nacional que mantinham a unidade espiritual e social de Israel em torno do santuário central.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 17 DE DEUTERONÔMIO ---
        17: {
            titulo: "A Pureza do Culto e a Lei sobre os Reis",
            subtitulo: "O julgamento da idolatria, as causas difíceis e as diretrizes para um futuro rei",

            texto: `
¹ Não sacrificarás ao SENHOR teu Deus boi ou ovelha em que haja defeito ou qualquer coisa má; pois abominação é ao SENHOR teu Deus.
² Quando no meio de ti, em alguma das tuas portas que te dá o SENHOR teu Deus, se achar algum homem ou mulher que fizer mal aos olhos do SENHOR teu Deus, traspassando a sua aliança,
³ que for e servir a outros deuses, e se encurvar a eles, ou ao sol, ou à lua, ou a todo o exército do céu, o que eu não ordenei;
⁴ e te for denunciado, e o ouvires; então bem inquirirás; e eis que, sendo verdade, e certo que se fez tal abominação em Israel,
⁵ então tirarás o homem ou a mulher que fez este mal, às tuas portas, e apedrejarás o tal homem ou mulher, até que morra.
⁶ Por boca de duas ou três testemunhas, morrerá o que houver de morrer; por boca de uma só testemunha não morrerá.
⁷ A mão das testemunhas será a primeira contra ele, para o matar; e depois a mão de todo o povo; assim tirarás o mal do meio de ti.
⁸ Quando te for difícil demais o julgamento de alguma causa, entre sangue e sangue, entre demanda e demanda, ou entre ferida e ferida, em questões de litígio nas tuas portas, então te levantarás, e subirás ao lugar que escolher o SENHOR teu Deus;
⁹ e virás aos sacerdotes levitas, e ao juiz que houver naqueles dias, e inquirirás, e te anunciarão a sentença do juízo.
¹⁰ E farás conforme ao mandado da palavra que te anunciarem do lugar que o SENHOR escolher; e terás cuidado de fazer conforme a tudo o que te ensinarem.
¹¹ Conforme ao mandado da lei que te ensinarem, e conforme ao juízo que te disserem, farás; da palavra que te anunciarem te não desviarás, nem para a direita nem para a esquerda.
¹² O homem, pois, que se houver soberbamente, não ouvindo ao sacerdote, que está ali para servir ao SENHOR teu Deus, nem ao juiz, esse homem morrerá; e tirarás o mal de Israel;
¹³ para que todo o povo o ouça, e tema, e nunca mais se ensoberbeça.
¹⁴ Quando entrares na terra que te dá o SENHOR teu Deus, e a possuíres, e nela habitares, e disseres: Porei sobre mim um rei, como todas as nações que estão em redor de mim;
¹⁵ porás certamente sobre ti como rei aquele que escolher o SENHOR teu Deus; dentre teus irmãos porás rei sobre ti; não poderás pôr homem estranho sobre ti, que não seja de teus irmãos.
¹⁶ Porém ele não multiplicará para si cavalos, nem fará voltar o povo ao Egito para multiplicar cavalos; pois o SENHOR vos tem dito: Nunca mais voltareis por este caminho.
¹⁷ Tampouco para si multiplicará mulheres, para que o seu coração se não desvie; nem prata nem ouro multiplicará muito para si.
¹⁸ Será também que, quando se assentar sobre o trono do seu reino, escreverá para si num livro um traslado desta lei, do original que está diante dos sacerdotes levitas.
¹⁹ E o terá consigo, e nele lerá todos os dias da sua vida, para que aprenda a temer ao SENHOR teu Deus, para guardar todas as palavras desta lei, e estes estatutos, para cumpri-los;
²⁰ para que o seu coração não se eleve sobre os seus irmãos, e não se desvie do mandamento, nem para a direita nem para a esquerda; para que prolongue os seus dias no seu reino, ele e seus filhos no meio de Israel.
`,

            // O DESAFIO
            pergunta: {
                texto: "Quais eram as três principais restrições impostas por Deus ao futuro rei de Israel, para evitar que seu coração se desviasse?",
                opcoes: [
                    { numero: 1, texto: "Não multiplicar cavalos, não multiplicar mulheres e não multiplicar muito ouro e prata", correta: true },
                    { numero: 2, texto: "Não construir palácios, não viajar e não falar com estrangeiros", correta: false },
                    { numero: 3, texto: "Não comer carne, não beber vinho e não cortar o cabelo", correta: false },
                    { numero: 4, texto: "Não liderar o exército, não julgar causas e não entrar no Tabernáculo", correta: false }
                ],
                explicacao: "Deuteronômio 17:16-17 - Estas leis visavam impedir que o rei confiasse no poder militar (cavalos), se perdesse em alianças políticas/luxúria (mulheres) ou se tornasse ganancioso (riquezas), mantendo-o dependente de Deus.",
                pontosGanhos: 20
            }
        },

        // --- INÍCIO DO CAPÍTULO 18 DE DEUTERONÔMIO ---
        18: {
            titulo: "A Herança dos Levitas e o Profeta Prometido",
            subtitulo: "A rejeição das abominações das nações e a promessa de um Profeta como Moisés",

            texto: `
¹ Os sacerdotes levitas, toda a tribo de Levi, não terão parte nem herança com Israel; das ofertas queimadas do SENHOR e da sua herança comerão.
² Portanto não terão herança no meio de seus irmãos; o SENHOR é a sua herança, como lhes tem dito.
³ Este, pois, será o direito dos sacerdotes, a receber do povo, dos que oferecerem sacrifício, seja boi ou ovelha; dar-se-á ao sacerdote a espádua, e as queixadas, e o bucho.
⁴ Dar-lhe-ás as primícias do teu grão, do teu mosto e do teu azeite, e as primícias da tosquia das tuas ovelhas.
⁵ Porque o SENHOR teu Deus o escolheu de todas as tuas tribos, para que esteja diante do SENHOR para servir no nome do SENHOR, ele e seus filhos todos os dias.
⁶ E quando vier um levita de alguma das tuas portas, de todo o Israel, onde ele habitar, e vier com todo o desejo da sua alma ao lugar que o SENHOR escolher;
⁷ e servir no nome do SENHOR seu Deus, como todos os seus irmãos, os levitas, que estão ali perante o SENHOR;
⁸ igual porção comerão, além das vendas do seu patrimônio.
⁹ Quando entrares na terra que o SENHOR teu Deus te dá, não aprenderás a fazer conforme as abominações daquelas nações.
¹⁰ Entre ti não se achará quem faça passar pelo fogo a seu filho ou a sua filha, nem adivinhador, nem prognosticador, nem agoureiro, nem feiticeiro;
¹¹ nem encantador, nem quem consulte a um espírito adivinhador, nem mágico, nem quem consulte os mortos;
¹² pois todo aquele que faz tal coisa é abominação ao SENHOR; e por estas abominações o SENHOR teu Deus os lança fora de diante de ti.
¹³ Perfeito serás, como o SENHOR teu Deus.
¹⁴ Porque estas nações, que hás de possuir, ouvem os prognosticadores e os adivinhadores; porém a ti o SENHOR teu Deus não permitiu tal coisa.
¹⁵ O SENHOR teu Deus te levantará um profeta do meio de ti, de teus irmãos, como eu; a ele ouvireis;
¹⁶ conforme a tudo o que pediste ao SENHOR teu Deus em Horebe, no dia da congregação, dizendo: Não ouvirei mais a voz do SENHOR meu Deus, nem mais verei este grande fogo, para que não morra.
¹⁷ Então o SENHOR me disse: Falaram bem naquilo que disseram.
¹⁸ Eis lhes suscitarei um profeta do meio de seus irmãos, como tu, e porei as minhas palavras na sua boca, e ele lhes falará tudo o que eu lhe ordenar.
¹⁹ E será que qualquer que não ouvir as minhas palavras, que ele falar em meu nome, eu o requererei dele.
²⁰ Porém o profeta que tiver a presunção de falar alguma palavra em meu nome, que eu não lhe tenha mandado falar, ou o que falar em nome de outros deuses, esse profeta morrerá.
²¹ E, se disseres no teu coração: Como conheceremos a palavra que o SENHOR não falou?
²² Quando o profeta falar em nome do SENHOR, e a coisa não suceder, nem se cumprir, essa é palavra que o SENHOR não falou; com soberba a falou o tal profeta; não tenhas temor dele.
`,

            // O DESAFIO
            pergunta: {
                texto: "Qual era o critério estabelecido por Moisés para que o povo pudesse identificar se uma profecia não vinha do SENHOR?",
                opcoes: [
                    { numero: 1, texto: "Se o profeta não fosse da tribo de Levi", correta: false },
                    { numero: 2, texto: "Se o profeta pedisse dinheiro em troca da mensagem", correta: false },
                    { numero: 3, texto: "Se a palavra dita em nome do SENHOR não se cumprisse nem sucedesse", correta: true },
                    { numero: 4, texto: "Se o profeta falasse apenas palavras de julgamento", correta: false }
                ],
                explicacao: "Deuteronômio 18:22 - O cumprimento histórico da predição era o teste prático de validade para distinguir o verdadeiro profeta daquele que falava com presunção.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 19 DE DEUTERONÔMIO ---
        19: {
            titulo: "As Cidades de Refúgio e o Testemunho",
            subtitulo: "A proteção ao homicida involuntário e a lei das duas testemunhas",

            texto: `
¹ Quando o SENHOR teu Deus consumir as nações cuja terra te dará o SENHOR teu Deus, e tu as possuíres, e morares nas suas cidades e nas suas casas,
² três cidades separarás para ti no meio da tua terra que te dá o SENHOR teu Deus para a possuíres.
³ Preparar-te-ás o caminho; e os termos da tua terra, que o SENHOR teu Deus te dará em herança, dividirás em três partes; e isto será para que nelas se acolha todo o homicida.
⁴ E este é o caso do homicida que se acolher ali, para que viva: aquele que ferir o seu próximo sem intenção, e que o não odiava dantes;
⁵ como aquele que entrar com o seu próximo no bosque para cortar lenha, e pondo força na sua mão com o machado para cortar a árvore, o ferro saltar do cabo e ferir o seu próximo e este morrer; o tal se acolherá a uma destas cidades, e viverá;
⁶ para que o vingador do sangue não vá após o homicida, quando se esquentar o seu coração, e o alcance, por ser comprido o caminho, e lhe tire a vida; não sendo ele digno de morte, pois o não odiava dantes.
⁷ Portanto te dou ordem, dizendo: Três cidades separarás para ti.
⁸ E, se o SENHOR teu Deus dilatar os teus termos, como jurou a teus pais, e te der toda a terra que prometeu dar a teus pais
⁹ (quando guardares todos estes mandamentos, que hoje te ordeno, para os cumprir, amando ao SENHOR teu Deus e andando nos seus caminhos todos os dias), então acrescentarás ainda outras três cidades além destas três;
¹⁰ para que o sangue inocente se não derrame no meio da tua terra, que o SENHOR teu Deus te dá por herança, e haja sangue sobre ti.
¹¹ Mas, havendo alguém que odeia a seu próximo, e lhe arma ciladas, e se levanta contra ele, e o fere mortalmente, e ele morra, e se acolha a alguma destas cidades,
¹² então os anciãos da sua cidade mandarão tirá-lo dali, e o entregarão na mão do vingador do sangue, para que morra.
¹³ O teu olho não terá piedade dele; antes tirarás o sangue inocente de Israel, para que bem te suceda.
¹⁴ Não mudarás os marcos do teu próximo, que os antigos fixaram na tua herança, que receberes na terra que te dá o SENHOR teu Deus para a possuíres.
¹⁵ Uma só testemunha contra ninguém se levantará por qualquer iniquidade, ou por qualquer pecado, por qualquer pecado que peque; pela boca de duas testemunhas, ou pela boca de três testemunhas, se estabelecerá o negócio.
¹⁶ Quando se levantar testemunha falsa contra alguém, para testificar contra ele acerca de transgressão,
¹⁷ então aqueles dois homens, que tiverem a demanda, se apresentarão perante o SENHOR, diante dos sacerdotes e dos juízes que houver naqueles dias.
¹⁸ E os juízes bem inquirirão; e eis que, sendo a testemunha falsa, que testificou falsamente contra seu irmão,
¹⁹ far-lhe-eis como ele cuidou fazer a seu irmão; e assim tirarás o mal do meio de ti.
²⁰ Para que os que ficarem o ouçam e temam, e nunca mais tornem a fazer tal mal no meio de ti.
²¹ O teu olho não poupará; vida por vida, olho por olho, dente por dente, mão por mão, pé por pé.
`,

            // O DESAFIO
            pergunta: {
                texto: "Qual deveria ser a punição para uma testemunha que fosse comprovadamente falsa em um julgamento?",
                opcoes: [
                    { numero: 1, texto: "Deveria pagar uma multa em prata ao tribunal", correta: false },
                    { numero: 2, texto: "Deveria ser expulsa da sua tribo permanentemente", correta: false },
                    { numero: 3, texto: "Deveria receber a mesma punição que planejava causar ao seu irmão", correta: true },
                    { numero: 4, texto: "Deveria oferecer um sacrifício de expiação no Tabernáculo", correta: false }
                ],
                explicacao: "Deuteronômio 19:19 - A lei do talião aplicada ao falso testemunho visava desencorajar a mentira jurídica, imputando ao mentiroso o dano que ele pretendia causar ao outro.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 20 DE DEUTERONÔMIO ---
        20: {
            titulo: "As Leis da Guerra",
            subtitulo: "O encorajamento sacerdotal, as isenções militares e o cerco das cidades",

            texto: `
¹ Quando saíres à peleja contra os teus inimigos, e vires cavalos, e carros, e povo mais numeroso do que tu, não os temerás; pois o SENHOR teu Deus, que te tirou da terra do Egito, está contigo.
² E será que, quando vos chegardes à peleja, o sacerdote se chegará, e falará ao povo,
³ e dir-lhe-á: Ouvi, ó Israel, vós chegais hoje à peleja contra os vossos inimigos; não se amoleça o vosso coração: não temais nem tremais, nem vos aterrorizeis diante deles;
⁴ pois o SENHOR vosso Deus é o que vai convosco, a pelejar por vós contra os vossos inimigos, para vos salvar.
⁵ Então os oficiais falarão ao povo, dizendo: Qual é o homem que edificou casa nova e ainda não a consagrou? Vá, e torne-se à sua casa, para que porventura não morra na peleja e outro a consagre.
⁶ E qual é o homem que plantou uma vinha e ainda não colheu fruto dela? Vá, e torne-se à sua casa, para que porventura não morra na peleja e outro a colha.
⁷ E qual é o homem que se desposou com alguma mulher e ainda não a recebeu? Vá, e torne-se à sua casa, para que porventura não morra na peleja e outro homem a receba.
⁸ E continuarão os oficiais a falar ao povo, dizendo: Qual é o homem medroso e de coração tímido? Vá, e torne-se à sua casa, para que o coração de seus irmãos se não derreta como o seu coração.
⁹ E será que, quando os oficiais acabarem de falar ao povo, designarão capitães dos exércitos para a frente do povo.
¹⁰ Quando te chegares a alguma cidade para combatê-la, apregoar-lhe-ás a paz.
¹¹ E será que, se te responder paz, e te abrir as portas, todo o povo que se achar nela te será tributário e te servirá.
¹² Porém, se ela não fizer paz contigo, mas antes te fizer guerra, então a cercarás.
¹³ E o SENHOR teu Deus a dará na tua mão; e tudo o que nela houver, todo o varão, ferirás ao fio da espada.
¹⁴ Porém as mulheres, e os meninos, e o gado, e tudo o que houver na cidade, todo o seu despojo, tomarás para ti; e comerás o despojo dos teus inimigos, que te deu o SENHOR teu Deus.
¹⁵ Assim farás a todas as cidades que estiverem mui longe de ti, que não forem das cidades destas nações.
¹⁶ Porém, das cidades destes povos, que o SENHOR teu Deus te dá em herança, nenhuma coisa que tem fôlego deixarás com vida.
¹⁷ Antes destruí-las-ás totalmente: aos heteus, e aos amorreus, e aos cananeus, e aos ferezeus, e aos heveus, e aos jebuseus, como te ordenou o SENHOR teu Deus;
¹⁸ para que não vos ensinem a fazer conforme a todas as suas abominações, que fizeram a seus deuses, e pequeis contra o SENHOR vosso Deus.
¹⁹ Quando cercares uma cidade por muitos dias, pelejando contra ela para a tomar, não destruirás o seu arvoredo, metendo nele o machado, porque dele poderás comer; pois não o cortarás (porque o arvoredo do campo é mantimento para o homem) para empregá-lo no cerco.
²⁰ Somente as árvores que souberes que não são árvores de mantimento, essas destruirás e cortarás; e contra a cidade que guerrear contra ti edificarás baluartes, até que esta seja derribada.
`,

            // O DESAFIO
            pergunta: {
                texto: "Quais eram os critérios de isenção que permitiam a um soldado israelita voltar para casa antes de uma batalha?",
                opcoes: [
                    { numero: 1, texto: "Ter mais de 50 anos ou ser o filho mais velho da família", correta: false },
                    { numero: 2, texto: "Ter edificado casa nova, plantado vinha sem colher, estar noivo ou ser medroso", correta: true },
                    { numero: 3, texto: "Ser da tribo de Levi ou trabalhar no Tabernáculo", correta: false },
                    { numero: 4, texto: "Estar doente ou possuir muitas terras no deserto", correta: false }
                ],
                explicacao: "Deuteronômio 20:5-8 - A lei priorizava a vida familiar e a estabilidade emocional do exército, permitindo que homens com laços inacabados ou medo paralisante fossem dispensados.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 21 DE DEUTERONÔMIO ---
        21: {
            titulo: "Leis Diversas e a Dignidade Humana",
            subtitulo: "A expiação por homicídio desconhecido, o direito do primogênito e o filho rebelde",

            texto: `
¹ Quando na terra que te dá o SENHOR teu Deus para a possuíres, se achar algum morto caído no campo, e não se souber quem o feriu,
² então sairão os teus anciãos e os teus juízes, e medirão a distância até às cidades que estiverem em redor do morto.
³ E será que a cidade mais próxima do morto, os anciãos da mesma cidade tomarão uma novilha da vacada, que não tenha trabalhado nem tenha puxado com o jugo;
⁴ e os anciãos daquela cidade levarão a novilha a um vale áspero, que não esteja lavrado nem semeado; e ali degolarão a novilha no vale.
⁵ Então se achegarão os sacerdotes, filhos de Levi; pois o SENHOR teu Deus os escolheu para o servirem, e para abençoarem em nome do SENHOR; e por sua palavra se decidirá toda a demanda e toda a ferida;
⁶ e todos os anciãos daquela cidade, mais próxima do morto, lavarão as suas mãos sobre a novilha degolada no vale;
⁷ e protestarão, e dirão: As nossas mãos não derramaram este sangue, e os nossos olhos o não viram.
⁸ Sê propício ao teu povo Israel, que tu, ó SENHOR, resgataste, e não ponhas o sangue inocente no meio do teu povo Israel. E aquele sangue lhes será expiado.
⁹ Assim tirarás o sangue inocente do meio de ti, pois farás o que é reto aos olhos do SENHOR.
¹⁰ Quando saíres à peleja contra os teus inimigos, e o SENHOR teu Deus os entregar nas tuas mãos, e tu deles levares cativos,
¹¹ e vires entre os cativos uma mulher formosa à vista, e a cobiçares, e a tomares por mulher,
¹² então a levarás para dentro da tua casa; e ela raparemos a cabeça e cortará as suas unhas,
¹³ e despirá o vestido do seu cativeiro, e se assentará na tua casa, e chorará a seu pai e a sua mãe um mês inteiro; e depois chegarás a ela, e serás seu marido, e ela tua mulher.
¹⁴ E será que, se te não agradares dela, a deixarás ir à sua vontade; mas de modo nenhum a venderás por dinheiro, nem tratarás dela como escrava, pois a tens humilhado.
¹⁵ Quando um homem tiver duas mulheres, uma a quem ama e outra a quem despreza, e a amada e a desprezada lhe derem filhos, e o filho primogênito for da desprezada,
¹⁶ será que, no dia em que fizer herdar a seus filhos o que tiver, não poderá dar a primogenitura ao filho da amada, preferindo-o ao filho da desprezada, que é o primogênito.
¹⁷ Mas ao filho da desprezada agnoscera por primogênito, dando-lhe dobrada porção de tudo quanto tiver; porquanto ele é o princípio da sua força, o direito da primogenitura é dele.
¹⁸ Se alguém tiver um filho contumaz e rebelde, que não obedecer à voz de seu pai nem à voz de sua mãe, e, castigando-o eles, lhes não der ouvidos,
¹⁹ então seu pai e sua mãe pegarão nele, e o levarão aos anciãos da sua cidade, e à porta do seu lugar;
²⁰ e dirão aos anciãos da cidade: Este nosso filho é rebelde e contumaz, não dá ouvidos à nossa voz; é um comilão e um beberrão.
²¹ Então todos os homens da sua cidade o apedrejarão com pedras, até que morra; e tirarás o mal do meio de ti, para que todo o Israel o ouça e tema.
²² Quando também em alguém houver pecado digno do juízo de morte, e for morto, e o pendurares num madeiro,
²³ o seu cadáver não permanecerá no madeiro, mas certamente o enterrarás no mesmo dia; porquanto o pendurado é maldito de Deus; assim não contaminarás a tua terra, que o SENHOR teu Deus te dá em herança.
`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com as leis sobre herança, como um pai deveria tratar o filho primogênito caso este fosse filho da esposa 'desprezada'?",
                opcoes: [
                    { numero: 1, texto: "Deveria dar a primogenitura ao filho da esposa amada", correta: false },
                    { numero: 2, texto: "Deveria reconhecê-lo como primogênito e dar-lhe porção dobrada de tudo o que tivesse", correta: true },
                    { numero: 3, texto: "Deveria dividir a herança em partes iguais entre todos os filhos", correta: false },
                    { numero: 4, texto: "Deveria permitir que os anciãos da cidade decidissem quem seria o herdeiro", correta: false }
                ],
                explicacao: "Deuteronômio 21:15-17 - A Lei protegia o direito de nascimento do primogênito contra o favoritismo pessoal do pai em relação às suas esposas.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 22 DE DEUTERONÔMIO ---
        22: {
            titulo: "Leis de Fraternidade e Pureza Sexual",
            subtitulo: "A responsabilidade pelo próximo, leis de distinção e a castidade",

            texto: `
¹ Vendo o boi de teu irmão ou a sua ovelha desgarrados, não te desviarás deles; certinho os reconduzirás a teu irmão.
² E, se teu irmão não estiver perto de ti, ou tu o não conheceres, recolhê-los-ás na tua casa, e estarão contigo até que teu irmão os busque, e lhos restituirás.
³ Assim também farás com o seu jumento, e assim farás com a sua roupa; e assim farás com toda a coisa perdida de teu irmão, que se lhe perder e tu a achares; não te poderás desviar.
⁴ Vendo o jumento de teu irmão ou o seu boi caídos no caminho, não te desviarás deles; certamente o ajudarás a levantá-los.
⁵ Não haverá traje de homem na mulher, nem trajará o homem veste de mulher; porque qualquer que faz isto abominação é ao SENHOR teu Deus.
⁶ Quando encontrares pelo caminho um ninho de ave, em alguma árvore ou no chão, com passarinhos ou ovos, e a mãe posta sobre os passarinhos ou sobre os ovos, não tomarás a mãe com os filhos;
⁷ deixando irás livremente a mãe, e os filhos tomarás para ti; para que te vá bem e para que prolongues os teus dias.
⁸ Quando edificares uma casa nova, farás no telhado um parapeito, para que não ponhas sangue na tua casa, se alguém de algum modo cair dela.
⁹ Não semearás a tua vinha com diferentes espécies de semente, para que não se corrompa o fruto da semente que semeares e a novidade da vinha.
¹⁰ Com boi e com jumento não lavrarás juntamente.
¹¹ Não te vestirás de estofo misto, de lã e linho juntamente.
¹² Franjas farás nas quatro bordas da tua manta, com que te cobrires.
¹³ Quando um homem tomar mulher, e, entrando a ela, a desprezar,
¹⁴ e lhe imputar causas de escândalo, e contra ela publicar má fama, dizendo: Tomei esta mulher, e me cheguei a ela, e não a achei virgem;
¹⁵ então o pai da moça e sua mãe tomarão os sinais da virgindade da moça, e os levarão aos anciãos da cidade, à porta;
¹⁶ e o pai da moça dirá aos anciãos: Eu dei minha filha por mulher a este homem, porém ele a despreza;
¹⁷ e eis que lhe imputou causas de escândalo, dizendo: Não achei virgem a tua filha; porém aqui estão os sinais da virgindade de minha filha. E estenderão a roupa diante dos anciãos da cidade.
¹⁸ Então os anciãos daquela cidade tomarão aquele homem, e o castigarão.
¹⁹ E o condenarão em cem siclos de prata, e os darão ao pai da moça; porquanto publicou má fama sobre uma virgem de Israel. E lhe será por mulher, e não a poderá despedir em todos os seus dias.
²⁰ Porém, se este negócio for verdade, que a virgindade se não achou na moça,
²¹ então levarão a moça à porta da casa de seu pai, e os homens da sua cidade a apedrejarão com pedras, até que morra; pois fez loucura em Israel, prostituindo-se na casa de seu pai; assim tirarás o mal do meio de ti.
²² Quando um homem for achado deitado com mulher casada com marido, então ambos morrerão, o homem que se deitou com a mulher, e a mulher; assim tirarás o mal de Israel.
²³ Quando houver moça virgem, desposada com algum homem, e um homem a achar na cidade, e se deitar com ela,
²⁴ então trareis a ambos à porta daquela cidade, e os apedrejareis com pedras, até que morram; a moça, porquanto não gritou na cidade, e o homem, porquanto humilhou a mulher do seu próximo; assim tirarás o mal do meio de ti.
²⁵ E se algum homem no campo achar uma moça desposada, e o homem a forçar, e se deitar com ela, então morrerá só o homem que se deitou com ela;
²⁶ porém à moça não farás nada; a moça não tem pecado digno de morte; porque, como o homem que se levanta contra o seu próximo, e lhe tira a vida, assim é este negócio.
²⁷ Pois a achou no campo; a moça desposada gritou, e não houve quem a livrasse.
²⁸ Quando um homem achar moça virgem, que não for desposada, e pegar nela, e se deitar com ela, e forem achados,
²⁹ então o homem que se deitou com ela dará ao pai da moça cinquenta siclos de prata; e lhe será por mulher, pois a humilhou; não a poderá despedir em todos os seus dias.
³⁰ Nenhum homem tomará a mulher de seu pai, nem descobrirá a ourela do vestido de seu pai.
`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com as leis civis de Deuteronômio 22, o que um israelita deveria fazer ao construir uma casa nova para evitar a culpa de sangue?",
                opcoes: [
                    { numero: 1, texto: "Deveria pintar as portas com o sangue de um cordeiro", correta: false },
                    { numero: 2, texto: "Deveria construir um parapeito (muro baixo) no telhado", correta: true },
                    { numero: 3, texto: "Deveria convidar os levitas para consagrar os alicerces", correta: false },
                    { numero: 4, texto: "Deveria cavar um poço de água no centro da casa", correta: false }
                ],
                explicacao: "Deuteronômio 22:8 - A Lei de Deus incluía normas de segurança residencial, visando prevenir acidentes fatais em telhados que, na época, eram usados como áreas de convivência.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 23 DE DEUTERONÔMIO ---
        23: {
            titulo: "A Pureza da Congregação e Leis Sociais",
            subtitulo: "Quem é excluído da assembleia, a higiene no acampamento e o tratamento de escravos fugidos",

            texto: `
¹ Aquele a quem forem testificados os testículos, ou cortado o membro viril, não entrará na congregação do SENHOR.
² O bastardo não entrará na congregação do SENHOR; até à sua décima geração não entrará na congregação do SENHOR.
³ Os amonitas e os moabitas não entrarão na congregação do SENHOR; até à sua décima geração não entrarão na congregação do SENHOR, eternamente.
⁴ Porquanto não saíram com pão e água a receber-vos no caminho, quando saíeis do Egito; e porquanto alugaram contra ti a Balaão, filho de Beor, de Petor, da Mesopotâmia, para te amaldiçoar.
⁵ Porém o SENHOR teu Deus não quis ouvir a Balaão; antes o SENHOR teu Deus trocou em bênção a maldição; porquanto o SENHOR teu Deus te amava.
⁶ Não procurarás a sua paz nem o seu bem em todos os teus dias, para sempre.
⁷ Não abominarás o edomeu, pois é teu irmão; nem abominarás o egípcio, pois estrangeiro foste na sua terra.
⁸ Os filhos que lhes nascerem na terceira geração entrarão na congregação do SENHOR.
⁹ Quando o exército sair contra os teus inimigos, então te guardarás de toda a coisa má.
¹⁰ Quando entre ti houver alguém que, por algum acidente noturno, não estiver limpo, sairá fora do arraial; não entrará no meio dele.
¹¹ Será, porém, que, ao cair da tarde, se lavará em água; e, posto o sol, entrará no meio do arraial.
¹² Também terás um lugar fora do arraial, aonde saias fora.
¹³ E entre as tuas armas terás uma pá; e será que, quando te assentares fora, cavarás com ela e, voltando-te, cobrirás o que de ti saiu.
¹⁴ Porquanto o SENHOR teu Deus anda no meio do teu arraial, para te livrar, e entregar a teus inimigos diante de ti; pelo que o teu arraial será santo, para que ele não veja coisa feia em ti, e se aparte de ti.
¹⁵ Não entregarás a seu senhor o servo que se acolher a ti de seu senhor;
¹⁶ contigo ficará, no meio de ti, no lugar que escolher em alguma das tuas portas, onde lhe agradar; não o oprimirás.
¹⁷ Não haverá prostituta dentre as filhas de Israel; nem haverá sodomita dentre os filhos de Israel.
¹⁸ Não trarás salário de prostituta nem preço de cão à casa do SENHOR teu Deus por qualquer voto; porque ambos estes são igualmente abominação ao SENHOR teu Deus.
¹⁹ A teu irmão não emprestarás à usura, nem dinheiro, nem comida, nem qualquer coisa que se empreste à usura.
²⁰ Ao estranho emprestarás à usura; porém a teu irmão não emprestarás à usura; para que o SENHOR teu Deus te abençoe em tudo a que puseres a tua mão, na terra a qual passas a possuir.
²¹ Quando fizeres algum voto ao SENHOR teu Deus, não tardarás em pagá-lo; porque o SENHOR teu Deus certamente o requererá de ti, e haveria em ti pecado.
²² Porém, abstendo-te de votar, não haverá pecado em ti.
²³ O que saiu dos teus lábios guardarás, e o farás; bem como votaste voluntariamente ao SENHOR teu Deus, mencionando-o com a tua boca.
²⁴ Quando entrares na vinha do teu próximo, comerás uvas conforme ao teu desejo, até te fartares; porém não as porás no teu cesto.
²⁵ Quando entrares na seara do teu próximo, com a tua mão arrancarás as espigas; porém não meterás a foice na seara do teu próximo.
`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com o texto, qual deveria ser a atitude de um israelita caso um servo (escravo) fugisse de seu senhor e buscasse refúgio com ele?",
                opcoes: [
                    { numero: 1, texto: "Deveria devolvê-lo imediatamente ao seu senhor original", correta: false },
                    { numero: 2, texto: "Deveria entregá-lo aos sacerdotes para ser julgado", correta: false },
                    { numero: 3, texto: "Não deveria entregá-lo; o servo poderia morar onde escolhesse e não deveria ser oprimido", correta: true },
                    { numero: 4, texto: "Deveria cobrar uma taxa do servo para permitir que ficasse", correta: false }
                ],
                explicacao: "Deuteronômio 23:15-16 - A lei de Israel oferecia um asilo humanitário para escravos fugitivos, proibindo sua extradição forçada e garantindo-lhes liberdade de moradia.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 24 DE DEUTERONÔMIO ---
        24: {
            titulo: "Leis de Divórcio e Justiça Social",
            subtitulo: "A proteção à família, ao penhor e aos direitos dos vulneráveis",

            texto: `
¹ Quando um homem tomar uma mulher e se casar com ela, e suceder que ela não ache graça em seus olhos, por nela achar coisa feia, ele lhe escreverá carta de divórcio, e lha dará na sua mão, e a despedirá da sua casa.
² E, saindo ela da sua casa, poderá ir e casar-se com outro homem.
³ Porém, se este último homem a odiar, e lhe escrever carta de divórcio, e lha der na sua mão, e a despedir da sua casa, ou se este último homem, que a tomou para si por mulher, morrer,
⁴ então seu primeiro marido, que a despediu, não poderá tornar a tomá-la para que seja sua mulher, depois que foi contaminada; pois é abominação perante o SENHOR; assim não farás pecar a terra que o SENHOR teu Deus te dá por herança.
⁵ Quando um homem for recém-casado, não sairá à guerra, nem se lhe imporá encargo algum; livre ficará em sua casa um ano, e alegrará a sua mulher, que tomou.
⁶ Não se tomará em penhor as duas mós, nem a mó de cima; pois se penhoraria a vida.
⁷ Quando se achar alguém que houver furtado um de seus irmãos, dos filhos de Israel, e o tratar como escravo, ou o vender, o tal ladrão morrerá, e tirarás o mal do meio de ti.
⁸ Guarda-te da praga da lepra, e tem cuidado diligente de fazer conforme a tudo o que te ensinarem os sacerdotes levitas; como lhes tenho ordenado, terás cuidado de o fazer.
⁹ Lembra-te do que o SENHOR teu Deus fez a Miriã no caminho, quando saíeis do Egito.
¹⁰ Quando emprestares alguma coisa ao teu próximo, não entrarás em sua casa para lhe tomar o penhor.
¹¹ Fora ficarás; e o homem, a quem emprestaste, te trará fora o penhor.
¹² E, se for homem pobre, não te deitarás com o seu penhor.
¹³ Em se pondo o sol, sem falta lhe restituirás o penhor; para que se deite na sua roupa, e te abençoe; e isto te será justiça diante do SENHOR teu Deus.
¹⁴ Não oprimirás o jornaleiro pobre e necessitado de teus irmãos, ou de teus estrangeiros, que estão na tua terra e nas tuas portas.
¹⁵ No seu dia lhe darás o seu salário, e o sol se não porá sobre ele; porquanto pobre é, e sua alma espera por isso; para que não clame contra ti ao SENHOR, e haja em ti pecado.
¹⁶ Os pais não morrerão pelos filhos, nem os filhos morrerão pelos pais; cada qual morrerá pelo seu próprio pecado.
¹⁷ Não perverterás o direito do estrangeiro e do órfão; nem tomarás em penhor a roupa da viúva.
¹⁸ Mas lembrar-te-ás de que foste servo no Egito, e de que o SENHOR teu Deus te resgatou dali; pelo que te ordeno que faças isso.
¹⁹ Quando no teu campo colheres a tua colheita, e esqueceres um molho no campo, não tornarás a tomá-lo; para o estrangeiro, para o órfão, e para a viúva será; para que o SENHOR teu Deus te abençoe em toda a obra das tuas mãos.
²⁰ Quando sacudires a tua oliveira, não voltarás para colher o que ficou nos ramos; para o estrangeiro, para o órfão, e para a viúva será.
²¹ Quando vindimares a tua vinha, não voltarás para colher o que ficou atrás de ti; para o estrangeiro, para o órfão, e para a viúva será.
²² E lembrar-te-ás de que foste servo na terra do Egito; pelo que te ordeno que faças isso.
`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com as leis sobre colheita (espigando), o que o dono da terra deveria fazer se esquecesse um molho de grãos no campo ou se sobrasse algo nos ramos das oliveiras?",
                opcoes: [
                    { numero: 1, texto: "Deveria voltar imediatamente para recolher, pois o desperdício é pecado", correta: false },
                    { numero: 2, texto: "Deveria queimar o que sobrou para limpar a terra", correta: false },
                    { numero: 3, texto: "Não deveria voltar para buscar; deveria deixar para o estrangeiro, o órfão e a viúva", correta: true },
                    { numero: 4, texto: "Deveria dar as sobras como dízimo adicional ao levita", correta: false }
                ],
                explicacao: "Deuteronômio 24:19-21 - A Lei estabelecia um sistema de assistência social direta, onde os necessitados tinham o direito de recolher as sobras das colheitas para seu sustento.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 25 DE DEUTERONÔMIO ---
        25: {
            titulo: "Leis de Justiça, Solidariedade e Memória",
            subtitulo: "A lei dos açoites, o levirato, pesos e medidas, e a sentença contra Amaleque",

            texto: `
¹ Quando houver contenda entre alguns, e vierem a juízo, para que os juízes os julguem, ao justo justificarão, e ao ímpio condenarão.
² E será que, se o ímpio merecer açoites, o juiz o fará deitar e o fará açoitar diante de si, conforme a sua culpa, por certo número.
³ Quarenta açoites lhe fará dar, não passará disso; para que, porventura, se lhe fizer dar mais açoites do que estes, teu irmão não seja envilecido aos teus olhos.
⁴ Não atarás a boca ao boi, quando trilhar.
⁵ Quando alguns irmãos morarem juntos, e um deles morrer, e não tiver filho, a mulher do morto não se casará fora com homem estranho; seu cunhado entrará a ela, e a tomará por mulher, e fará a obrigação de cunhado para com ela.
⁶ E o primogênito que ela der à luz sucederá no nome de seu irmão morto; para que o seu nome se não apague de Israel.
⁷ Porém, se o homem não quiser tomar sua cunhada, subirá sua cunhada à porta aos anciãos, e dirá: Meu cunhado recusa suscitar a seu irmão nome em Israel; não quer cumprir para comigo o dever de cunhado.
⁸ Então os anciãos da sua cidade o chamarão, e falarão com ele; e ele, persistindo, e dizendo: Não quero tomá-la;
⁹ então sua cunhada se chegará a ele na presença dos anciãos, e lhe descalçará o sapato do pé, e lhe cuspirá no rosto, e protestará, e dirá: Assim se fará ao homem que não edificar a casa de seu irmão.
¹⁰ E o seu nome se chamará em Israel: A casa do descalçado.
¹¹ Quando pelejarem dois homens, um contra o outro, e a mulher de um chegar para livrar a seu marido da mão do que o fere, e ela estender a sua mão, e lhe pegar pelas suas vergonhas,
¹² então lhe cortarás a mão; o teu olho não terá piedade dela.
¹³ Na tua bolsa não terás diversos pesos, um grande e um pequeno.
¹⁴ Na tua casa não terás diversas medidas, uma grande e uma pequena.
¹⁵ Peso inteiro e justo terás; também medida inteira e justa terás; para que se prolonguem os teus dias na terra que o SENHOR teu Deus te dá.
¹⁶ Porque abominação é ao SENHOR teu Deus todo aquele que faz tal coisa, todo aquele que faz injustiça.
¹⁷ Lembra-te do que te fez Amaleque no caminho, quando saíeis do Egito;
¹⁸ como te saiu ao encontro no caminho, e te feriu na retaguarda todos os fracos que iam atrás de ti, estando tu cansado e afadigado; e não temeu a Deus.
¹⁹ Será, pois, que, quando o SENHOR teu Deus te der descanso de todos os teus inimigos em redor, na terra que o SENHOR teu Deus te dá por herança, para a possuíres, apagarás a memória de Amaleque de debaixo do céu; não te esqueças.
`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com as leis sobre comércio e honestidade, o que Deus considera uma 'abominação' em relação a pesos e medidas?",
                opcoes: [
                    { numero: 1, texto: "Usar pesos feitos de pedra em vez de metal", correta: false },
                    { numero: 2, texto: "Ter na bolsa ou na casa pesos e medidas diferentes (um grande e um pequeno) para enganar no comércio", correta: true },
                    { numero: 3, texto: "Vender produtos por um preço maior que o custo de produção", correta: false },
                    { numero: 4, texto: "Não pesar os alimentos na presença dos levitas", correta: false }
                ],
                explicacao: "Deuteronômio 25:13-16 - Deus exige integridade absoluta nas transações comerciais. O uso de pesos adulterados ou duplos critérios de medida é condenado como injustiça grave.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 26 DE DEUTERONÔMIO ---
        26: {
            titulo: "As Primícias e os Dízimos",
            subtitulo: "A confissão de fé ao oferecer os primeiros frutos e a aliança selada",

            texto: `
¹ E será que, quando entrares na terra que o SENHOR teu Deus te dá por herança, e a possuíres, e nela habitares,
² então tomarás das primícias de todos os frutos da terra, que trouxeres da tua terra, que te dá o SENHOR teu Deus, e as porás num cesto, e irás ao lugar que escolher o SENHOR teu Deus, para ali fazer habitar o seu nome.
³ E virás ao sacerdote, que houver naqueles dias, e dir-lhe-ás: Hoje declaro ao SENHOR teu Deus que entrei na terra que o SENHOR jurou a nossos pais dar-nos.
⁴ E o sacerdote tomará o cesto da tua mão, e o porá diante do altar do SENHOR teu Deus.
⁵ Então testificarás perante o SENHOR teu Deus, e dirás: Um sírio, prestes a perecer, foi meu pai, e desceu ao Egito, e ali peregrinou com pouca gente; e ali cresceu em nação grande, forte e numerosa.
⁶ Mas os egípcios nos maltrataram e nos afligiram, e sobre nós puseram dura servidão.
⁷ Então clamamos ao SENHOR Deus de nossos pais; e o SENHOR ouviu a nossa voz, e atentou para a nossa aflição, e para o nosso trabalho, e para a nossa opressão.
⁸ E o SENHOR nos tirou do Egito com mão forte, e com braço estendido, e com grande espanto, e com sinais, e com prodígios;
⁹ e nos trouxe a este lugar, e nos deu esta terra, terra que mana leite e mel.
¹⁰ E agora eis que trouxe as primícias dos frutos da terra que tu, ó SENHOR, me deste. Então as porás perante o SENHOR teu Deus, e te inclinarás perante o SENHOR teu Deus.
¹¹ E te alegrarás por todo o bem que o SENHOR teu Deus te tem dado a ti e à tua casa, tu e o levita, e o estrangeiro que está no meio de ti.
¹² Quando acabares de separar todos os dízimos da tua colheita no ano terceiro, que é o ano dos dízimos, então os darás ao levita, ao estrangeiro, ao órfão e à viúva, para que comam dentro das tuas portas, e se fartem;
¹³ e dirás perante o SENHOR teu Deus: Tirei da minha casa as coisas consagradas e as dei também ao levita, e ao estrangeiro, e ao órfão e à viúva, conforme a todos os teus mandamentos que me tens ordenado; não traspassei os teus mandamentos, nem deles me esqueci;
¹⁴ delas não comi na minha aflição, nem delas tirei coisa alguma para imundícia, nem delas dei para os mortos; obedeci à voz do SENHOR meu Deus; conforme a tudo o que me ordenaste, tenho feito.
¹⁵ Olha desde a tua santa habitação, desde o céu, e abençoa o teu povo Israel, e a terra que nos deste, como juraste a nossos pais, terra que mana leite e mel.
¹¹⁶ Neste dia o SENHOR teu Deus te manda cumprir estes estatutos e juízos; guarda-os, pois, e cumpre-os com todo o teu coração e com toda a tua alma.
¹⁷ Hoje declaraste ao SENHOR que ele te será por Deus, e que andarás nos seus caminhos, e guardarás os seus estatutos, e os seus mandamentos, e os seus juízos, e darás ouvidos à sua voz.
¹⁸ E o SENHOR hoje te declarou que lhe serás por povo seu próprio, como te tem dito, e que guardarás todos os seus mandamentos.
¹⁹ Para te exaltar sobre todas as nações que fez, para louvor, e para fama, e para glória, e para que sejas um povo santo ao SENHOR teu Deus, como tem dito.
`,

            // O DESAFIO
            pergunta: {
                texto: "Ao entregar as primícias no cesto, o israelita deveria recitar uma breve história dos seus antepassados. Como ele deveria se referir ao seu patriarca (Jacó) nessa confissão?",
                opcoes: [
                    { numero: 1, texto: "Como um rei poderoso que conquistou nações", correta: false },
                    { numero: 2, texto: "Como um egípcio que se tornou pastor de ovelhas", correta: false },
                    { numero: 3, texto: "Como um sírio, prestes a perecer, que desceu ao Egito com pouca gente", correta: true },
                    { numero: 4, texto: "Como um profeta que dividiu o Mar Vermelho", correta: false }
                ],
                explicacao: "Deuteronômio 26:5 - Esta confissão visava manter viva a memória das origens humildes de Israel e da total dependência da libertação e provisão de Deus.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 27 DE DEUTERONÔMIO ---
        27: {
            titulo: "A Escrita da Lei e as Maldições no Monte Ebal",
            subtitulo: "O monumento de pedras e o altar em Israel como testemunho da Aliança",

            texto: `
¹ E deram ordem Moisés e os anciãos de Israel ao povo, dizendo: Guardai todos estes mandamentos que hoje vos ordeno.
² E será que, no dia em que passardes o Jordão à terra que te dá o SENHOR teu Deus, levantarás para ti pedras grandes, e as caiarás com cal.
³ E, passando-o, escreverás nelas todas as palavras desta lei, para que entres na terra que te dá o SENHOR teu Deus, terra que mana leite e mel, como te disse o SENHOR Deus de vossos pais.
⁴ Será, pois, que, quando passardes o Jordão, levantareis estas pedras, que hoje vos ordeno, no monte Ebal, e as caiarás com cal.
⁵ E ali edificarás um altar ao SENHOR teu Deus, um altar de pedras; não levantarás sobre elas ferro.
⁶ De pedras brutas edificarás o altar do SENHOR teu Deus; e sobre ele oferecerás holocaustos ao SENHOR teu Deus.
⁷ Também sacrificarás ofertas pacíficas, e ali comerás, e te alegrarás perante o SENHOR teu Deus.
⁸ E nessas pedras escreverás muito distintamente todas as palavras desta lei.
⁹ Falou mais Moisés, e os sacerdotes levitas, a todo o Israel, dizendo: Guarda silêncio, e ouve, ó Israel! Hoje te tens tornado povo do SENHOR teu Deus.
¹⁰ Portanto obedecerás à voz do SENHOR teu Deus, e cumprirás os seus mandamentos e os seus estatutos que hoje te ordeno.
¹¹ E Moisés deu ordem ao povo naquele dia, dizendo:
¹² Estes estarão sobre o monte Gerizim, para abençoarem o povo, quando vós houverdes passado o Jordão: Simeão, e Levi, e Judá, e Issacar, e José, e Benjamim.
¹³ E estes estarão sobre o monte Ebal para amaldiçoar: Rúben, Gade, e Aser, e Zebulom, Dã, e Naftali.
¹⁴ E os levitas testificarão, e dirão a todo o homem de Israel em alta voz:
¹⁵ Maldito o homem que fizer imagem de escultura, ou de fundição, abominação ao SENHOR, obra da mão do artífice, e a puser em um lugar escondido. E todo o povo, respondendo, dirá: Amém.
¹⁶ Maldito aquele que desprezar a seu pai ou a sua mãe. E todo o povo dirá: Amém.
¹⁷ Maldito aquele que mudar os marcos do seu próximo. E todo o povo dirá: Amém.
¹⁸ Maldito aquele que fizer que o cego erre o caminho. E todo o povo dirá: Amém.
¹⁹ Maldito aquele que perverter o direito do estrangeiro, do órfão e da viúva. E todo o povo dirá: Amém.
²⁰ Maldito aquele que se deitar com a mulher de seu pai, porquanto descobriu a ourela do vestido de seu pai. E todo o povo dirá: Amém.
²¹ Maldito aquele que se ajuntar com qualquer animal. E todo o povo dirá: Amém.
²² Maldito aquele que se deitar com sua irmã, filha de seu pai, ou filha de sua mãe. E todo o povo dirá: Amém.
²³ Maldito aquele que se deitar com sua sogra. E todo o povo dirá: Amém.
²⁴ Maldito aquele que ferir a seu próximo em oculto. E todo o povo dirá: Amém.
²⁵ Maldito aquele que aceitar suborno para ferir uma alma de sangue inocente. E todo o povo dirá: Amém.
²⁶ Maldito aquele que não confirmar as palavras desta lei, para as cumprir. E todo o povo dirá: Amém.
`,

            // O DESAFIO
            pergunta: {
                texto: "Onde deveriam ser levantadas as grandes pedras caiadas com a Lei escrita e construído o altar de pedras brutas logo após a travessia do Jordão?",
                opcoes: [
                    { numero: 1, texto: "No topo do Monte Sinai", correta: false },
                    { numero: 2, texto: "No centro da cidade de Jericó", correta: false },
                    { numero: 3, texto: "No Monte Gerizim", correta: false },
                    { numero: 4, texto: "No Monte Ebal", correta: true }
                ],
                explicacao: "Deuteronômio 27:4-5 - O Monte Ebal foi o local designado para o monumento da Lei e o altar de sacrifícios, simbolizando que a obediência e a expiação eram necessárias diante das maldições pronunciadas naquele mesmo monte.",
                pontosGanhos: 20
            }
        },

        // --- INÍCIO DO CAPÍTULO 28 DE DEUTERONÔMIO ---
        28: {
            titulo: "As Bênçãos da Obediência e as Maldições da Desobediência",
            subtitulo: "O grande discurso sobre as consequências da fidelidade ou rebeldia à Aliança",

            texto: `
¹ E será que, se ouvires diligentemente a voz do SENHOR teu Deus, tendo cuidado de guardar todos os seus mandamentos que hoje te ordeno, o SENHOR teu Deus te exaltará sobre todas as nações da terra.
² E todas estas bênçãos virão sobre ti e te alcançarão, quando ouvires a voz do SENHOR teu Deus:
³ Bendito serás na cidade, e bendito serás no campo.
⁴ Bendito o fruto do teu ventre, e o fruto da tua terra, e o fruto dos teus animais; e as crias das tuas vacas e das tuas ovelhas.
⁵ Bendito o teu cesto e a tua amassadeira.
⁶ Bendito serás ao entrares, e bendito serás ao saíres.
⁷ O SENHOR entregará, feridos diante de ti, os teus inimigos, que se levantarem contra ti; por um caminho sairão contra ti, mas por sete caminhos fugirão da tua presença.
⁸ O SENHOR mandará que a bênção esteja contigo nos teus celeiros, e em tudo onde puseres a tua mão; e te abençoará na terra que te dá o SENHOR teu Deus.
⁹ O SENHOR te confirmará para si por povo santo, como te tem jurado, quando guardares os mandamentos do SENHOR teu Deus, e andares nos seus caminhos.
¹⁰ E todos os povos da terra verão que é invocado sobre ti o nome do SENHOR, e terão temor de ti.
¹¹ E o SENHOR te dará abundância de bens no fruto do teu ventre, e no fruto dos teus animais, e no fruto da tua terra, na terra que o SENHOR jurou a teus pais te dar.
¹² O SENHOR te abrirá o seu bom tesouro, o céu, para dar chuva à tua terra no seu tempo, e para abençoar toda a obra das tuas mãos; e emprestarás a muitas nações, mas tu não tomarás emprestado.
¹³ E o SENHOR te porá por cabeça, e não por cauda; e só estarás em cima, e não debaixo, se obedeceres aos mandamentos do SENHOR teu Deus, que hoje te ordeno, para os guardar e cumprir.
¹⁴ E não te desviarás de todas as palavras que hoje te ordeno, nem para a direita nem para a esquerda, para andares após outros deuses, para os servires.
¹⁵ Será, porém, que, se não deres ouvidos à voz do SENHOR teu Deus, para não cuidares em cumprir todos os seus mandamentos e os seus estatutos, que hoje te ordeno, então virão sobre ti todas estas maldições, e te alcançarão:
¹⁶ Maldito serás tu na cidade, e maldito serás no campo.
¹⁷ Maldito o teu cesto e a tua amassadeira.
¹⁸ Maldito o fruto do teu ventre, e o fruto da tua terra, e as crias das tuas vacas, e das tuas ovelhas.
¹⁹ Maldito serás ao entrares, e maldito serás ao saíres.
²⁰ O SENHOR enviará sobre ti a maldição; a confusão e a derrota em tudo em que puseres a tua mão para fazer; até que sejas destruído, e até que repentinamente pereças, por causa da maldade das tuas obras, pelas quais me deixaste.
²¹ O SENHOR fará pegar em ti a pestilência, até que te consuma da terra a que passas a possuir.
²² O SENHOR te ferirá com a tísica e com a febre, e com a inflamação, e com o calor ardente, e com a secura, e com crestamento e com ferrugem; e perseguir-te-ão até que pereças.
²³ E os teus céus, que estão sobre a tua cabeça, serão de bronze; e a terra que está debaixo de ti, será de ferro.
²⁴ O SENHOR dará por chuva sobre a tua terra pó e areia; dos céus descerão sobre ti, até que pereças.
²⁵ O SENHOR te fará cair ferido diante dos teus inimigos; por um caminho sairás contra eles, e por sete caminhos fugirás de diante deles, e serás espalhado por todos os reinos da terra.
²⁶ E o teu cadáver servirá de comida a todas as aves do céu, e aos animais da terra; e ninguém os espantará.
²⁷ O SENHOR te ferirá com as úlceras do Egito, com hemorroidas, e com sarna, e com coceira, de que não possas curar-te;
²⁸ O SENHOR te ferirá com loucura, e com cegueira, e com pasmo de coração;
²⁹ E apalparás ao meio-dia, como o cego apalpa nas trevas, e não prosperarás nos teus caminhos; antes serás oprimido e roubado todos os dias, e não haverá quem te salve.
³⁰ Desposar-te-ás com uma mulher, porém outro homem se deitará com ela; edificarás uma casa, porém não morarás nela; plantarás uma vinha, porém não colherás o seu fruto.
³¹ O teu boi será morto diante dos teus olhos, porém dele não comerás; o teu jumento será roubado diante de ti, e não te será restituído; as tuas ovelhas serão dadas aos teus inimigos, e não haverá quem te salve.
³² Teus filhos e tuas filhas serão dados a outro povo, os teus olhos o verão, e desfalecerão por eles todo o dia; porém não haverá poder na tua mão.
³³ O fruto da tua terra e todo o teu trabalho comerá um povo que nunca conheceste; e tu serás oprimido e quebrantado todos os dias.
³⁴ E enlouquecerás pelo que verás com os teus olhos.
³⁵ O SENHOR te ferirá com úlceras más nos joelhos e nas pernas, de que não possas sarar, desde a planta do teu pé até ao alto da cabeça.
³⁶ O SENHOR te levará a ti e a teu rei, que tiveres posto sobre ti, a uma nação que não conheceste, nem tu nem teus pais; e ali servirás a outros deuses, ao pau e à pedra.
³⁷ E serás por pasmo, por provérbio, e por fábula entre todos os povos a que o SENHOR te levar.
³⁸ Lançarás muita semente ao campo; porém colherás pouco, porque o gafanhoto a consumirá.
³⁹ Plantarás vinhas, e cultivarás; porém não beberás vinho, nem colherás as uvas; porque o bicho as colherá.
⁴⁰ Terás oliveiras em todos os teus termos; porém não te ungirás com azeite; porque a tua azeitona cairá.
⁴¹ Filhos e filhas gerarás; porém não serão para ti; porque irão em cativeiro.
⁴² Todo o teu arvoredo e o fruto da tua terra consumirá a lagarta.
⁴³ O estrangeiro, que está no meio de ti, se elevará muito sobre ti, e tu mui baixo descerás;
⁴⁴ Ele te emprestará a ti, porém tu não emprestarás a ele; ele será por cabeça, e tu serás por cauda.
⁴⁵ E todas estas maldições virão sobre ti, e te perseguirão, e te alcançarão, até que sejas destruído; porquanto não ouviste a voz do SENHOR teu Deus, para guardares os seus mandamentos e os seus estatutos, que te ordenou.
⁴⁶ E serão entre ti por sinal e por maravilha, como também entre a tua descendência para sempre.
⁴⁷ Porquanto não serviste ao SENHOR teu Deus com alegria e bondade de coração, pela abundância de tudo.
⁴⁸ Assim servirás aos teus inimigos, que o SENHOR enviará contra ti, com fome e com sede, e com nudez, e com falta de tudo; e sobre o teu pescoço porá um jugo de ferro, até que te tenha destruído.
⁴⁹ O SENHOR levantará contra ti uma nação de longe, da extremidade da terra, que voa como a águia, nação cuja língua não entenderás;
⁵⁰ Nação feroz de rosto, que não respeitará o rosto do velho, nem se apiedará do moço;
⁵¹ E comerá o fruto dos teus animais, e o fruto da tua terra, até que sejas destruído; e não te deixará grão, nem mosto, nem azeite, nem crias das tuas vacas, nem das tuas ovelhas, até que te tenha consumido.
⁵² E te sitiará em todas as tuas portas, até que venham a cair os teus altos e fortes muros, em que confiavas em toda a tua terra; e te sitiará em todas as tuas portas, em toda a tua terra que te deu o SENHOR teu Deus.
⁵³ E comerás o fruto do teu ventre, a carne de teus filhos e de tuas filhas, que te der o SENHOR teu Deus, no cerco e no aperto com que os teus inimigos te apertarão.
⁵⁴ Quanto ao homem mais mimoso e mui delicado entre ti, o seu olho será maligno para com o seu irmão, e para com a mulher do seu seio, e para com o restante de seus filhos que ainda lhe ficarem;
⁵⁵ De sorte que não dará a nenhum deles da carne de seus filhos, que ele comer; porquanto nada lhe ficou de resto no cerco e no aperto com que o teu inimigo te apertará em todas as tuas portas.
⁵⁶ E quanto à mulher mais mimosa e delicada entre ti, que de mimo e delicadeza nunca tentou pôr a planta de seu pé sobre a terra, será maligno o seu olho contra o homem de seu seio, e contra seu filho, e contra sua filha;
⁵⁷ E isto por causa de suas secundinas que saírem dentre os seus pés, e por causa de seus filhos que tiver; porque os comerá às escondidas pela falta de tudo, no cerco e no aperto com que o teu inimigo te apertará nas tuas portas.
⁵⁸ Se não tiveres cuidado de guardar todas as palavras desta lei, que estão escritas neste livro, para temeres este nome glorioso e terrível, o SENHOR TEU DEUS,
⁵⁹ Então o SENHOR fará admiráveis as tuas pragas, e as pragas da tua descendência, grandes e duradouras pragas, e enfermidades más e duradouras;
⁶⁰ E fará tornar sobre ti todos os males do Egito, de que tiveste temor; e se pegarão a ti.
⁶¹ Também o SENHOR fará vir sobre ti toda a enfermidade e toda a praga, que não está escrita no livro desta lei, até que sejas destruído.
⁶² E ficareis poucos em número, em lugar de haverdes sido como as estrelas do céu em multidão; porquanto não obedeceste à voz do SENHOR teu Deus.
⁶³ E será que, como o SENHOR se deleitava em vós, em fazer-vos bem e multiplicar-vos, assim o SENHOR se deleitará em destruir-vos e consumir-vos; e sereis desarraigados da terra a qual passais a possuir.
⁶⁴ E o SENHOR vos espalhará entre todos os povos, desde uma extremidade da terra até à outra extremidade da terra; e ali servirás a outros deuses que não conheceste, nem tu nem teus pais; ao pau e à pedra.
⁶⁵ E nem ainda entre estas nações descansarás, nem a planta de teu pé terá repouso; porquanto o SENHOR ali te dará coração tremente, e desfalecimento de olhos, e desmaio de alma.
⁶⁶ E a tua vida, como em suspenso, estará diante de ti; e temerás de noite e de dia, e não crerás na tua própria vida.
⁶⁷ Pela manhã dirás: Ah! quem me dera ver a noite! E à noite dirás: Ah! quem me dera ver a manhã! pelo pasmo de teu coração, que sentirás, e pelo que verás com os teus olhos.
⁶⁸ E o SENHOR te fará voltar ao Egito em navios, pelo caminho de que te tenho dito: Nunca mais o verás; e ali sereis vendidos por escravos e por escravas aos vossos inimigos; mas não haverá quem vos compre.
`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com o texto, qual é o resultado para o exército de Israel se eles forem obedientes a Deus, e qual o resultado se forem desobedientes, em relação aos seus inimigos?",
                opcoes: [
                    { numero: 1, texto: "Obedientes: vencerão por sorte; Desobedientes: perderão por falta de armas", correta: false },
                    { numero: 2, texto: "Obedientes: o inimigo fugirá por sete caminhos; Desobedientes: Israel fugirá por sete caminhos diante do inimigo", correta: true },
                    { numero: 3, texto: "Obedientes: os inimigos se tornarão amigos; Desobedientes: os inimigos os ignorarão", correta: false },
                    { numero: 4, texto: "Obedientes: Israel conquistará o céu; Desobedientes: Israel perderá o deserto", correta: false }
                ],
                explicacao: "Deuteronômio 28:7 e 28:25 - O texto usa a expressão 'sair por um caminho e fugir por sete' para ilustrar a vitória absoluta ou a derrota total e desorientada, dependendo da fidelidade à Aliança.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 29 DE DEUTERONÔMIO ---
        29: {
            titulo: "A Renovação da Aliança em Moabe",
            subtitulo: "A recordação dos feitos do SENHOR e a advertência contra a apostasia",

            texto: `
¹ Estas são as palavras da aliança que o SENHOR ordenou a Moisés que fizesse com os filhos de Israel, na terra de Moabe, além da aliança que fizera com eles em Horebe.
² E chamou Moisés a todo o Israel, e disse-lhes: Tendes visto tudo quanto o SENHOR fez na terra do Egito, perante vossos olhos, a Faraó, e a todos os seus servos, e a toda a sua terra;
³ as grandes provas que os teus olhos têm visto, os sinais e aqueles grandes prodígios.
⁴ Porém não vos deu o SENHOR um coração para entender, nem olhos para ver, nem ouvidos para ouvir, até ao dia de hoje.
⁵ E quarenta anos vos conduzi pelo deserto; não se envelheceram sobre vós as vossas vestes, e nem se envelheceu o vosso sapato no vosso pé.
⁶ Pão não comestes, e vinho e bebida forte não bebestes; para que soubésseis que eu sou o SENHOR vosso Deus.
⁷ Chegando vós, pois, a este lugar, Seom, rei de Hesbom, e Ogue, rei de Basã, nos saíram ao encontro, à peleja, e nós os ferimos;
⁸ e tomamos a sua terra, e a demos por herança aos rubenitas, e aos gaditas, e à meia tribo dos manassitas.
⁹ Guardai, pois, as palavras desta aliança, e cumpri-las-eis, para que prospereis em tudo quanto fizerdes.
¹⁰ Vós todos estais hoje perante o SENHOR vosso Deus; os vossos cabeças, as vossas tribos, os vossos anciãos, e os vossos oficiais, todos os homens de Israel;
¹¹ os vossos meninos, as vossas mulheres, e o estrangeiro que está no meio do teu arraial; desde o rachador da tua lenha até ao tirador da tua água;
¹² para que entres na aliança do SENHOR teu Deus, e no seu juramento, que o SENHOR teu Deus hoje faz contigo.
¹³ Para que hoje te confirme por seu povo, e ele te seja por Deus, como te tem dito, e como jurou a teus pais, Abraão, Isaque e Jacó.
¹⁴ E não somente convosco faço esta aliança e este juramento;
¹⁵ mas com aquele que hoje está aqui em pé conosco perante o SENHOR nosso Deus, e com aquele que hoje não está aqui conosco.
¹⁶ Porque vós sabeis como habitamos na terra do Egito, e como passamos pelo meio das nações pelas quais passastes;
¹⁷ e vistes as suas abominações, e os seus ídolos, o pau e a pedra, a prata e o ouro que havia entre eles.
¹⁸ Para que entre vós não haja homem, nem mulher, nem família, nem tribo, cujo coração hoje se desvie do SENHOR nosso Deus, para que vá servir aos deuses destas nações; para que entre vós não haja raiz que produza fel e absinto;
¹⁹ e aconteça que, ouvindo as palavras deste juramento, se abençoe no seu coração, dizendo: Terei paz, ainda que ande conforme ao bom prazer do meu coração; para acrescentar a sede à bebedice.
²⁰ O SENHOR não lhe quererá perdoar; mas então fumegará a ira do SENHOR e o seu zelo sobre o tal homem, e toda a maldição escrita neste livro pousará sobre ele; e o SENHOR apagará o seu nome de debaixo do céu.
²¹ E o SENHOR o separará para mal, de todas as tribos de Israel, conforme a todas as maldições da aliança escritas no livro desta lei.
²² E dirá a geração vindoura, os vossos filhos que se levantarem depois de vós, e o estrangeiro que vier de terras remotas, vendo as pragas desta terra, e as suas enfermidades, com que o SENHOR a terá enfermo;
²³ enxofre e sal, e queima em toda a sua terra, de sorte que não será semeada, e nada produzirá, nem nela crescerá erva alguma; como a subversão de Sodoma e de Gomorra, de Admá e de Zeboim, que o SENHOR subverteu na sua ira e no seu furor.
²⁴ E todas as nações dirão: Por que fez o SENHOR assim com esta terra? Qual é o motivo do furor desta grande ira?
²⁵ Então se dirá: Porquanto deixaram a aliança do SENHOR Deus de seus pais, que ele fizera com eles, quando os tirou da terra do Egito;
²⁶ e foram e serviram a outros deuses, e se encurvaram a eles; deuses que não conheceram, e que nada lhes tinha dado.
²⁷ Pelo que a ira do SENHOR se acendeu contra esta terra, para trazer sobre ela toda a maldição que está escrita neste livro.
²⁸ E o SENHOR os arrancou da sua terra com ira, e com furor, e com grande indignação, e os lançou em outra terra, como neste dia se vê.
²⁹ As coisas encobertas pertencem ao SENHOR nosso Deus, mas as reveladas nos pertencem a nós e a nossos filhos para sempre, para que cumpramos todas as palavras desta lei.
`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com o versículo 29, qual é a distinção feita por Moisés entre as 'coisas encobertas' e as 'coisas reveladas'?",
                opcoes: [
                    { numero: 1, texto: "As encobertas são para os profetas e as reveladas para os reis", correta: false },
                    { numero: 2, texto: "As encobertas pertencem ao SENHOR e as reveladas pertencem ao povo para que cumpram a Lei", correta: true },
                    { numero: 3, texto: "As encobertas são mentiras e as reveladas são verdades", correta: false },
                    { numero: 4, texto: "As encobertas são o futuro e as reveladas são o passado", correta: false }
                ],
                explicacao: "Deuteronômio 29:29 - Este versículo estabelece o limite entre o mistério divino e a responsabilidade humana baseada na revelação da Lei.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 29 DE DEUTERONÔMIO ---
        29: {
            titulo: "A Renovação da Aliança em Moabe",
            subtitulo: "A recordação dos feitos do SENHOR e a advertência contra a apostasia",

            texto: `
¹ Estas são as palavras da aliança que o SENHOR ordenou a Moisés que fizesse com os filhos de Israel, na terra de Moabe, além da aliança que fizera com eles em Horebe.
² E chamou Moisés a todo o Israel, e disse-lhes: Tendes visto tudo quanto o SENHOR fez na terra do Egito, perante vossos olhos, a Faraó, e a todos os seus servos, e a toda a sua terra;
³ as grandes provas que os teus olhos têm visto, os sinais e aqueles grandes prodígios.
⁴ Porém não vos deu o SENHOR um coração para entender, nem olhos para ver, nem ouvidos para ouvir, até ao dia de hoje.
⁵ E quarenta anos vos conduzi pelo deserto; não se envelheceram sobre vós as vossas vestes, e nem se envelheceu o vosso sapato no vosso pé.
⁶ Pão não comestes, e vinho e bebida forte não bebestes; para que soubésseis que eu sou o SENHOR vosso Deus.
⁷ Chegando vós, pois, a este lugar, Seom, rei de Hesbom, e Ogue, rei de Basã, nos saíram ao encontro, à peleja, e nós os ferimos;
⁸ e tomamos a sua terra, e a demos por herança aos rubenitas, e aos gaditas, e à meia tribo dos manassitas.
⁹ Guardai, pois, as palavras desta aliança, e cumpri-las-eis, para que prospereis em tudo quanto fizerdes.
¹⁰ Vós todos estais hoje perante o SENHOR vosso Deus; os vossos cabeças, as vossas tribos, os vossos anciãos, e os vossos oficiais, todos os homens de Israel;
¹¹ os vossos meninos, as vossas mulheres, e o estrangeiro que está no meio do teu arraial; desde o rachador da tua lenha até ao tirador da tua água;
¹² para que entres na aliança do SENHOR teu Deus, e no seu juramento, que o SENHOR teu Deus hoje faz contigo.
¹³ Para que hoje te confirme por seu povo, e ele te seja por Deus, como te tem dito, e como jurou a teus pais, Abraão, Isaque e Jacó.
¹⁴ E não somente convosco faço esta aliança e este juramento;
¹⁵ mas com aquele que hoje está aqui em pé conosco perante o SENHOR nosso Deus, e com aquele que hoje não está aqui conosco.
¹⁶ Porque vós sabeis como habitamos na terra do Egito, e como passamos pelo meio das nações pelas quais passastes;
¹⁷ e vistes as suas abominações, e os seus ídolos, o pau e a pedra, a prata e o ouro que havia entre eles.
¹⁸ Para que entre vós não haja homem, nem mulher, nem família, nem tribo, cujo coração hoje se desvie do SENHOR nosso Deus, para que vá servir aos deuses destas nações; para que entre vós não haja raiz que produza fel e absinto;
¹⁹ e aconteça que, ouvindo as palavras deste juramento, se abençoe no seu coração, dizendo: Terei paz, ainda que ande conforme ao bom prazer do meu coração; para acrescentar a sede à bebedice.
²⁰ O SENHOR não lhe quererá perdoar; mas então fumegará a ira do SENHOR e o seu zelo sobre o tal homem, e toda a maldição escrita neste livro pousará sobre ele; e o SENHOR apagará o seu nome de debaixo do céu.
²¹ E o SENHOR o separará para mal, de todas as tribos de Israel, conforme a todas as maldições da aliança escritas no livro desta lei.
²² E dirá a geração vindoura, os vossos filhos que se levantarem depois de vós, e o estrangeiro que vier de terras remotas, vendo as pragas desta terra, e as suas enfermidades, com que o SENHOR a terá enfermo;
²³ enxofre e sal, e queima em toda a sua terra, de sorte que não será semeada, e nada produzirá, nem nela crescerá erva alguma; como a subversão de Sodoma e de Gomorra, de Admá e de Zeboim, que o SENHOR subverteu na sua ira e no seu furor.
²⁴ E todas as nações dirão: Por que fez o SENHOR assim com esta terra? Qual é o motivo do furor desta grande ira?
²⁵ Então se dirá: Porquanto deixaram a aliança do SENHOR Deus de seus pais, que ele fizera com eles, quando os tirou da terra do Egito;
²⁶ e foram e serviram a outros deuses, e se encurvaram a eles; deuses que não conheceram, e que nada lhes tinha dado.
²⁷ Pelo que a ira do SENHOR se acendeu contra esta terra, para trazer sobre ela toda a maldição que está escrita neste livro.
²⁸ E o SENHOR os arrancou da sua terra com ira, e com furor, e com grande indignação, e os lançou em outra terra, como neste dia se vê.
²⁹ As coisas encobertas pertencem ao SENHOR nosso Deus, mas as reveladas nos pertencem a nós e a nossos filhos para sempre, para que cumpramos todas as palavras desta lei.
`,

            // O DESAFIO
            pergunta: {
                texto: "De acordo com o versículo 29, qual é a distinção feita por Moisés entre as 'coisas encobertas' e as 'coisas reveladas'?",
                opcoes: [
                    { numero: 1, texto: "As encobertas são para os profetas e as reveladas para os reis", correta: false },
                    { numero: 2, texto: "As encobertas pertencem ao SENHOR e as reveladas pertencem ao povo para que cumpram a Lei", correta: true },
                    { numero: 3, texto: "As encobertas são mentiras e as reveladas são verdades", correta: false },
                    { numero: 4, texto: "As encobertas são o futuro e as reveladas são o passado", correta: false }
                ],
                explicacao: "Deuteronômio 29:29 - Este versículo estabelece o limite entre o mistério divino e a responsabilidade humana baseada na revelação da Lei.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 31 DE DEUTERONÔMIO ---
        31: {
            titulo: "A Sucessão de Moisés e a Leitura da Lei",
            subtitulo: "A posse de Josué, a entrega do Livro da Lei e a predição da apostasia",

            texto: `
¹ Depois foi Moisés, e falou estas palavras a todo o Israel,
² e disse-lhes: Da idade de cento e vinte anos sou eu hoje; já não poderei mais sair e entrar; além disso o SENHOR me disse: Não passarás este Jordão.
³ O SENHOR teu Deus passará adiante de ti; ele destruirá estas nações de diante de ti, para que as possuas; Josué passará adiante de ti, como o SENHOR tem dito.
⁴ E o SENHOR lhes fará como fez a Seom e a Ogue, reis dos amorreus, e à sua terra, os quais destruiu.
⁵ Quando, pois, o SENHOR vo-los entregar diante de vós, então fareis com eles conforme a todo o mandamento que vos tenho ordenado.
⁶ Esforçai-vos, e animai-vos; não temais, nem vos espanteis diante deles; porque o SENHOR teu Deus é o que vai convosco; não te deixará nem te desamparará.
⁷ E chamou Moisés a Josué, e lhe disse à vista de todo o Israel: Esforça-te e anima-te; porque com este povo entrarás na terra que o SENHOR jurou a seus pais lhes dar; e tu lhos farás herdar.
⁸ O SENHOR, pois, é aquele que vai adiante de ti; ele será contigo, não te deixará, nem te desamparará; não temas, nem te pasmes.
⁹ E Moisés escreveu esta lei, e a deu aos sacerdotes, filhos de Levi, que levavam a arca da aliança do SENHOR, e a todos os anciãos de Israel.
¹⁰ E deu-lhes ordem Moisés, dizendo: Ao fim de cada sete anos, no tempo determinado do ano da remissão, na festa dos tabernáculos,
¹¹ quando todo o Israel vier a aparecer perante o SENHOR teu Deus, no lugar que ele escolher, lerás esta lei diante de todo o Israel aos seus ouvidos.
¹² Ajunta o povo, os homens e as mulheres, e os meninos, e o estrangeiro que está dentro das tuas portas, para que ouçam e aprendam e temam ao SENHOR vosso Deus, e tenham cuidado de cumprir todas as palavras desta lei;
¹³ e que seus filhos, que não a souberem, ouçam e aprendam a temer ao SENHOR vosso Deus, todos os dias que viverdes sobre a terra a que ides, passando o Jordão, para a possuir.
¹⁴ E disse o SENHOR a Moisés: Eis que os teus dias são chegados, para que morras; chama a Josué, e apresentai-vos na tenda da congregação, para que eu lhe dê ordens. Assim foram Moisés e Josué, e se apresentaram na tenda da congregação.
¹⁵ Então o SENHOR apareceu na tenda, na coluna de nuvem; e a coluna de nuvem parou sobre a porta da tenda.
¹⁶ E disse o SENHOR a Moisés: Eis que dormirás com teus pais; e este povo se levantará, e prostituir-se-á indo após os deuses estranhos da terra, para onde vai, no meio dela, e me deixará, e anulará a minha aliança que fiz com ele.
¹⁷ Assim se acenderá a minha ira naquele dia contra ele, e desampará-lo-ei, e esconderei o meu rosto dele, para que seja consumido; e tantos males e angústias o alcançarão, que dirá naquele dia: Não me alcançaram estes males, porque o meu Deus não está no meio de mim?
¹⁸ Esconderei, pois, totalmente o meu rosto naquele dia, por todo o mal que houver feito, por se haver tornado a outros deuses.
¹⁹ Agora, pois, escrevei para vós este cântico, e ensina-o aos filhos de Israel; põe-no na sua boca, para que este cântico me seja por testemunha contra os filhos de Israel.
²⁰ Porque introduzirei o meu povo na terra que jurei a seus pais, que mana leite e mel; e comerá, e se fartará, e se engordará; então se tornará a outros deuses, e os servirá, e me irritará, e anulará a minha aliança.
²¹ E será que, quando o alcançarem muitos males e angústias, então este cântico responderá contra ele por testemunha, pois não cairá no esquecimento da boca de sua descendência; porquanto conheço a sua imaginação, o que ele faz hoje, antes que o introduza na terra que tenho jurado.
²² Assim Moisés escreveu este cântico naquele mesmo dia, e o ensinou aos filhos de Israel.
²³ E ordenou a Josué, filho de Num, e disse: Esforça-te e anima-te; porque tu introduzirás os filhos de Israel na terra que lhes jurei; e eu serei contigo.
²⁴ E aconteceu que, acabando Moisés de escrever as palavras desta lei num livro, até de todo as concluir,
²⁵ deu ordem Moisés aos levitas, que levavam a arca da aliança do SENHOR, dizendo:
²⁶ Tomai este livro da lei, e ponde-o ao lado da arca da aliança do SENHOR vosso Deus, para que ali esteja por testemunha contra ti.
²⁷ Porque conheço a tua rebeldia e a tua dura cerviz; eis que, vivendo eu ainda hoje convosco, rebeldes fostes contra o SENHOR; e quanto mais depois da minha morte?
²⁸ Ajuntai perante mim todos os anciãos das vossas tribos, e vossos oficiais, para que eu fale aos seus ouvidos estas palavras, e contra eles por testemunhas tome os céus e a terra.
²⁹ Porque eu sei que depois da minha morte certamente vos corrompereis, e vos desviareis do caminho que vos ordenei; então este mal vos alcançará nos últimos dias, quando fizerdes mal aos olhos do SENHOR, para o irritar com a obra das vossas mãos.
³⁰ Então Moisés falou as palavras deste cântico aos ouvidos de toda a congregação de Israel, até de todo as concluir.
`,

            // O DESAFIO
            pergunta: {
                texto: "Com que frequência e em qual ocasião específica Moisés ordenou que a Lei fosse lida publicamente perante todo o povo de Israel (homens, mulheres, crianças e estrangeiros)?",
                opcoes: [
                    { numero: 1, texto: "Todos os meses, durante a Lua Nova", correta: false },
                    { numero: 2, texto: "A cada sete anos, no ano da remissão, durante a Festa dos Tabernáculos", correta: true },
                    { numero: 3, texto: "Anualmente, no Dia da Expiação", correta: false },
                    { numero: 4, texto: "Apenas quando um novo rei fosse coroado", correta: false }
                ],
                explicacao: "Deuteronômio 31:10-12 - Esta leitura pública sistemática servia para garantir que cada geração conhecesse a Aliança e temesse ao SENHOR, independentemente do seu status social.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 32 DE DEUTERONÔMIO ---
        32: {
            titulo: "O Cântico de Moisés",
            subtitulo: "O testemunho profético contra a infidelidade de Israel e a grandeza de Deus",

            texto: `
¹ Inclinai os ouvidos, ó céus, e falarei; e ouça a terra as palavras da minha boca.
² Goteje a minha doutrina como a chuva, destile o meu dito como o orvalho, como chuvisco sobre a erva e como gotas de água sobre a relva.
³ Porque apregoarei o nome do SENHOR; dai grandeza a nosso Deus.
⁴ Ele é a Rocha, cuja obra é perfeita, porque todos os seus caminhos juízo são; Deus é a verdade, e não há nele iniquidade; justo e reto é.
⁵ Corromperam-se contra ele; não são seus filhos, mas a sua mancha; geração perversa e tortuosa é.
⁶ Recompensais assim ao SENHOR, povo louco e ignorante? Não é ele teu pai que te adquiriu, te fez e te estabeleceu?
⁷ Lembra-te dos dias da antiguidade, atenta para os anos de muitas gerações; pergunta a teu pai, e ele te informará; aos teus anciãos, e eles te dirão.
⁸ Quando o Altíssimo distribuía as heranças às nações, quando dividia os filhos de Adão uns dos outros, estabeleceu os termos dos povos, conforme o número dos filhos de Israel.
⁹ Porque a porção do SENHOR é o seu povo; Jacó é a parte da sua herança.
¹⁰ Achou-o numa terra deserta, e num ermo solitário e uivante; cercou-o, instruiu-o, e guardou-o como a menina do seu olho.
¹¹ Como a águia desperta a sua ninhada, move-se sobre os seus filhos, estende as suas asas, toma-os, e os leva sobre as suas asas,
¹² assim só o SENHOR o guiou; e não havia com ele deus estranho.
¹³ Ele o fez cavalgar sobre as alturas da terra, e comer as novidades do campo, e o fez chupar mel da rocha e azeite da dura pederneira.
¹⁴ Manteiga de vacas, e leite de ovelhas, com a gordura dos cordeiros e dos carneiros que pastam em Basã, e dos bodes, com o mais escolhido trigo; e bebeste o sangue das uvas, o vinho puro.
¹⁵ E, engordando-se Jesurum, deu couces (engordaste-te, engrossaste-te, e de gordura te cobriste) e deixou a Deus, que o fez, e desprezou a Rocha da sua salvação.
¹⁶ Com deuses estranhos o moveram a zelos; com abominações o irritaram.
¹⁷ Sacrifícios ofereceram aos demônios, não a Deus; a deuses que não conheceram, novos deuses que vieram há pouco, aos quais não temeram vossos pais.
¹⁸ Esqueceste-te da Rocha que te gerou; e te esqueceste do Deus que te formou.
¹⁹ O que vendo o SENHOR, os desprezou, por causa da irritação de seus filhos e de suas filhas;
²⁰ e disse: Esconderei o meu rosto deles, verei qual será o seu fim; porque são geração de perversidades, filhos em quem não há lealdade.
²¹ A zelos me moveram com aquilo que não é Deus; com as suas vaidades me provocaram à ira; portanto eu os moverei a zelos com o que não é povo; com nação louca os despertarei à ira.
²² Porque um fogo se acendeu na minha ira, e arderá até ao mais profundo do inferno, e consumirá a terra com a sua novidade, e abrasará os fundamentos dos montes.
²³ Males amontoarei sobre eles; as minhas setas esgotarei contra eles.
²⁴ Consumidos serão de fome, comidos de brasas ardentes e de peste amarga; e contra eles enviarei dentes de feras, com o veneno de serpentes do pó.
²⁵ Por fora desolará a espada, e por dentro o pavor; ao mancebo, juntamente com a virgem, ao que mama, com o homem de cãs.
²⁶ Eu diria: Por todos os cantos os espalharei; farei cessar a sua memória dentre os homens,
²⁷ se eu não receara a ira do inimigo, para que os seus adversários o não estranhem, e para que não digam: A nossa mão está alta, e o SENHOR não fez tudo isto.
²⁸ Porque são gente falta de conselhos, e neles não há entendimento.
²⁹ Quem dera fossem sábios! que entendessem isto, e atentassem para o seu fim!
³⁰ Como poderia um só perseguir mil, e dois fazerem fugir dez mil, se a sua Rocha lhos não vendera, e o SENHOR lhos não entregara?
³¹ Porque a sua rocha não é como a nossa Rocha, sendo até os nossos inimigos juízes disso.
³² Porque a sua vinha é da vinha de Sodoma e dos campos de Gomorra; as suas uvas são uvas de veneno, cachos amargos têm.
³³ O seu vinho é ardente veneno de serpentes, e peçonha terrível de víboras.
³⁴ Não está isto guardado comigo? Selado nos meus tesouros?
³⁵ Minha é a vingança e a recompensa, ao tempo em que tropeçar o seu pé; porque o dia da sua ruína está próximo, e as coisas que lhes hão de suceder se apressam a chegar.
³⁶ Porque o SENHOR julgará o seu povo, e se arrependerá pelos seus servos; quando vir que o poder deles se foi, e não há preso nem solto.
³⁷ Então dirá: Onde estão os seus deuses? A rocha em que confiavam?
³⁸ De cujos sacrifícios comiam a gordura, e de cujos libações bebiam o vinho? Levantem-se, e vos ajudem, para que haja para vós esconderijo!
³⁹ Vede agora que eu, eu o sou, e mais nenhum deus há comigo; eu mato, e eu faço viver; eu firo, e eu saro, e ninguém há que escape da minha mão.
⁴⁰ Porque levantarei a minha mão aos céus, e direi: Eu vivo para sempre.
⁴¹ Se eu afiar a minha espada reluzente, e a minha mão travar o juízo, retribuirei a vingança aos meus adversários, e recompensarei aos que me odeiam.
⁴² Embriagarei as minhas setas de sangue, e a minha espada comerá carne; do sangue dos mortos e dos cativos, desde a cabeça, com as vinganças do inimigo.
⁴³ Jubilai, ó nações, com o seu povo, porque ele vingará o sangue de seus servos, e sobre os seus adversários retribuirá a vingança, e terá misericórdia da sua terra e do seu povo.
⁴⁴ E veio Moisés, e falou todas as palavras deste cântico aos ouvidos do povo, ele e Oséias, filho de Num.
⁴⁵ E acabando Moisés de falar todas estas palavras a todo o Israel,
⁴⁶ disse-lhes: Aplicai o vosso coração a todas as palavras que hoje vos testifico, para que as ordeneis a vossos filhos, para que tenham cuidado de cumprir todas as palavras desta lei.
⁴⁷ Porque esta palavra não vos é vã, antes é a vossa vida; e por esta mesma palavra prolongareis os dias na terra a que, passando o Jordão, ides para a possuir.
⁴⁸ Depois falou o SENHOR a Moisés, naquele mesmo dia, dizendo:
⁴⁹ Sobe ao monte Abarim, ao monte Nebo, que está na terra de Moabe, defronte de Jericó, e vê a terra de Canaã, que dou aos filhos de Israel por possessão.
⁵⁰ E morre no monte ao qual subirás; e recolhe-te ao teu povo, como Arão teu irmão morreu no monte Hor, e se recolheu ao seu povo.
⁵¹ Porquanto trespassastes contra mim no meio dos filhos de Israel, nas águas de Meribá de Cades, no deserto de Zim; pois me não santificastes no meio dos filhos de Israel.
⁵² Pelo que verás a terra diante de ti, porém não entrarás nela, na terra que dou aos filhos de Israel.
`,

            // O DESAFIO
            pergunta: {
                texto: "No Cântico de Moisés, qual é o título repetido diversas vezes para descrever a fidelidade, estabilidade e proteção de Deus em contraste com a instabilidade de Israel?",
                opcoes: [
                    { numero: 1, texto: "O Pastor", correta: false },
                    { numero: 2, texto: "A Rocha", correta: true },
                    { numero: 3, texto: "O Vento", correta: false },
                    { numero: 4, texto: "A Nuvem", correta: false }
                ],
                explicacao: "Deuteronômio 32:4, 15, 18, 30-31 - A metáfora da 'Rocha' destaca a natureza imutável e confiável de Deus como fundamento da nação.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 33 DE DEUTERONÔMIO ---
        33: {
            titulo: "A Bênção de Moisés às Tribos",
            subtitulo: "As últimas palavras de Moisés e as bênçãos proféticas sobre os filhos de Israel",

            texto: `
¹ Esta é a bênção com que Moisés, homem de Deus, abençoou os filhos de Israel antes da sua morte.
² Disse, pois: O SENHOR veio do Sinai, e lhes subiu de Seir; resplandeceu desde o monte Parã, e veio com dez milhares de santos; à sua direita havia para eles o fogo da lei.
³ Na verdade ama os povos; todos os seus santos estão na sua mão; postos serão aos teus pés, cada um receberá das tuas palavras.
⁴ Moisés nos deu a lei, como herança da congregação de Jacó.
⁵ E foi rei em Jesurum, quando se congregaram os cabeças do povo com as tribos de Israel.
⁶ Viva Rúben, e não morra, e não sejam poucos os seus homens.
⁷ E isto é o que disse de Judá: Ouve, ó SENHOR, a voz de Judá, e introduze-lo no seu povo; as suas mãos lhe bastem, e tu lhe sejas ajuda contra os seus inimigos.
⁸ E de Levi disse: Teu Tumim e teu Urim são para o teu homem santo, que tu provaste em Massá, com quem contendeste nas águas de Meribá;
⁹ aquele que disse a seu pai, e a sua mãe: Nunca os vi; e não conheceu a seus irmãos, e não estimou a seus filhos; pois guardaram a tua palavra e observaram a tua aliança.
¹⁰ Ensinarão os teus juízos a Jacó, e a tua lei a Israel; porão incenso no teu nariz, e o holocausto sobre o teu altar.
¹¹ Abençoa o seu poder, ó SENHOR, e aceita a obra das suas mãos; fere os lombos dos que se levantam contra ele e o odeiam, para que nunca mais se levantem.
¹² E de Benjamim disse: O amado do SENHOR habitará seguro com ele; todo o dia o cobrirá, e morará entre os seus ombros.
¹³ E de José disse: Bendita do SENHOR seja a sua terra, com o mais excelente dos céus, com o orvalho, e com o abismo que jaz abaixo.
¹⁴ E com os mais excelentes frutos do sol, e com as mais excelentes produções das luas,
¹⁵ e com o mais excelente dos montes antigos, e com o mais excelente dos outeiros eternos,
¹⁶ e com o mais excelente da terra, e da sua plenitude, e com a benevolência daquele que habitava na sarça, venha sobre a cabeça de José, e sobre o alto da cabeça daquele que foi separado de seus irmãos.
¹⁷ Ele tem a glória do primogênito do seu touro, e os seus chifres são chifres de unicórnio; com eles acossará os povos juntamente até às extremidades da terra; estes são os dez milhares de Efraim, e estes são os milhares de Manassés.
¹⁸ E de Zebulom disse: Zebulom, alegra-te nas tuas saídas; e tu, Issacar, nas tuas tendas.
¹⁹ Eles chamarão os povos ao monte; ali oferecerão sacrifícios de justiça, porque chuparão a abundância dos mares e os tesouros escondidos da areia.
²⁰ E de Gade disse: Bendito aquele que faz dilatar a Gade; habita como a leoa, e despedaça o braço e o alto da cabeça.
²¹ E se proveu da primeira parte, porquanto ali estava escondida a porção do legislador; e veio com os chefes do povo, executou a justiça do SENHOR e os seus juízos para com Israel.
²² E de Dã disse: Dã é cachorro de leão; saltará de Basã.
²³ E de Naftali disse: Naftali, farto de benevolência, e cheio da bênção do SENHOR, possui o ocidente e o sul.
²⁴ E de Aser disse: Bendito seja Aser com seus filhos; agrade a seus irmãos, e mergulhe o seu pé no azeite.
²⁵ Ferro e metal seja o teu calçado; e a tua força seja como os teus dias.
²⁶ Não há outro, ó Jesurum, semelhante a Deus, que cavalga sobre os céus para a tua ajuda, e com a sua majestade sobre as nuvens.
²⁷ O Deus eterno é a tua habitação, e por baixo de ti estão os braços eternos; e ele lançará o inimigo de diante de ti, e dirá: Destrói-o.
²⁸ Israel, pois, habitará seguro, sozinho, na terra da fonte de Jacó, na terra de grão e de mosto; e os seus céus destilarão orvalho.
²⁹ Bem-aventurado tu, ó Israel! Quem é como tu? Um povo salvo pelo SENHOR, o escudo da tua ajuda, e a espada da tua majestade; pelo que os teus inimigos te serão sujeitos, e tu pisarás sobre as suas alturas.
`,

            // O DESAFIO
            pergunta: {
                texto: "Na bênção proferida sobre a tribo de Levi, quais eram as duas funções principais que Moisés destacou para esses 'homens santos'?",
                opcoes: [
                    { numero: 1, texto: "Liderar o exército em batalha e governar as cidades", correta: false },
                    { numero: 2, texto: "Ensinar a Lei a Israel e oferecer sacrifícios e incenso no altar", correta: true },
                    { numero: 3, texto: "Plantar as vinhas e construir o Tabernáculo", correta: false },
                    { numero: 4, texto: "Navegar pelos mares e coletar tributos das nações", correta: false }
                ],
                explicacao: "Deuteronômio 33:10 - A tribo de Levi foi separada para o ensino espiritual da nação e para a mediação ritual através do sistema de sacrifícios.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 34 DE DEUTERONÔMIO ---
        34: {
            titulo: "A Morte e o Legado de Moisés",
            subtitulo: "A visão da Terra Prometida, a morte no Monte Nebo e a sucessão final",

            texto: `
¹ Então subiu Moisés das campinas de Moabe ao monte Nebo, ao cume de Pisga, que está defronte de Jericó; e o SENHOR mostrou-lhe toda a terra de Gileade até Dã;
² e todo o Naftali, e a terra de Efraim, e Manassés; e toda a terra de Judá, até ao mar ocidental;
³ e o sul, e a campina do vale de Jericó, a cidade das palmeiras, até Zoar.
⁴ E disse-lhe o SENHOR: Esta é a terra que jurei a Abraão, Isaque e Jacó, dizendo: À tua descendência a darei; eu te faço vê-la com os teus olhos, porém para lá não passarás.
⁵ Assim morreu ali Moisés, servo do SENHOR, na terra de Moabe, conforme à palavra do SENHOR.
⁶ E o sepultou num vale, na terra de Moabe, defronte de Bete-Peor; e ninguém soube até hoje o lugar da sua sepultura.
⁷ Era Moisés da idade de cento e vinte anos quando morreu; os seus olhos nunca se escureceram, nem se perdeu o seu vigor.
⁸ E os filhos de Israel prantearam a Moisés trinta dias, nas campinas de Moabe; e os dias do pranto do luto de Moisés se cumpriram.
⁹ E Josué, filho de Num, foi cheio do espírito de sabedoria, porquanto Moisés tinha posto sobre ele as suas mãos; assim os filhos de Israel lhe deram ouvidos, e fizeram como o SENHOR ordenara a Moisés.
¹⁰ E nunca mais se levantou em Israel profeta algum como Moisés, a quem o SENHOR conhecera face a face;
¹¹ nem semelhante em todos os sinais e prodígios, que o SENHOR o enviou para fazer na terra do Egito, a Faraó, e a todos os seus servos, e a toda a sua terra;
¹² e em toda a mão forte, e em todo o grande espanto, que praticou Moisés aos olhos de todo o Israel.
`,

            // O DESAFIO
            pergunta: {
                texto: "O que o texto bíblico destaca sobre a condição física de Moisés no momento da sua morte, aos 120 anos de idade?",
                opcoes: [
                    { numero: 1, texto: "Que ele estava muito doente e quase não conseguia falar", correta: false },
                    { numero: 2, texto: "Que seus olhos nunca se escureceram, nem se perdeu o seu vigor", correta: true },
                    { numero: 3, texto: "Que ele já não enxergava e precisava ser carregado", correta: false },
                    { numero: 4, texto: "Que ele recuperou a juventude milagrosamente após ver a terra", correta: false }
                ],
                explicacao: "Deuteronômio 34:7 - O relato enfatiza que Moisés não morreu por falência natural do corpo, mas por decreto divino, mantendo-se lúcido e forte até o fim de sua missão.",
                pontosGanhos: 20
            }
        }
        // --- FIM DO LIVRO DE DEUTERONÔMIO ---
       

        // 💡 DICA: Para adicionar o Capítulo 5, 6, 7... 
        // Basta copiar um bloco desses (do { até o },) e mudar o número e os textos.
        // Lembre-se de manter a vírgula entre eles!

} // Fim dos capítulos
};

console.log('✅ Livro de Gênesis (Módulo Completo) pronto para uso!');