// js/livros/genesis.js
// ═══════════════════════════════════════════════════════════════════════════════
// LIVRO: GÊNESIS - O LIVRO DAS ORIGENS
// ═══════════════════════════════════════════════════════════════════════════════

export const genesis = {
    // ───────────────────────────────────────────────────────────────────────────
    // 1. CONFIGURAÇÕES GERAIS (Aparecem no Card da Biblioteca)
    // ───────────────────────────────────────────────────────────────────────────
    nome: "Gênesis",     // Nome que aparece no título
    icone: "📜",         // Emoji ou Ícone que aparece no card
    autor: "Moisés",      // Nome do autor que aparece abaixo do título
    
    // CAMINHO DA IMAGEM: Esta imagem fica no fundo quando o capítulo abre
    background: "./imagens/genesis_bg.jpg", 

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
        
        // --- INÍCIO DO CAPÍTULO 1 ---
        1: {
            titulo: "A Criação", // Nome do Capítulo
            subtitulo: "Deus cria o céu, a terra e tudo que nela existe", // Frase de efeito
            
            // TEXTO BÍBLICO: Use ` (crase) para poder quebrar linhas à vontade
            texto: `¹ No princípio, criou Deus os céus e a terra.
² E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espírito de Deus se movia sobre a face das águas.
³ E disse Deus: Haja luz. E houve luz.
⁴ E viu Deus que era boa a luz; e fez Deus separação entre a luz e as trevas.
⁵ E Deus chamou à luz Dia; e às trevas chamou Noite. E foi a tarde e a manhã: o dia primeiro.
⁶ E disse Deus: Haja uma expansão no meio das águas, e haja separação entre águas e águas.
⁷ E fez Deus a expansão e fez separação entre as águas que estavam debaixo da expansão e as águas que estavam sobre a expansão. E assim foi.
⁸ E chamou Deus à expansão Céus; e foi a tarde e a manhã: o dia segundo.
⁹ E disse Deus: Ajuntem-se as águas debaixo dos céus num lugar; e apareça a porção seca. E assim foi.
¹⁰ E chamou Deus à porção seca Terra; e ao ajuntamento das águas chamou Mares. E viu Deus que era bom.
¹¹ E disse Deus: Produza a terra erva verde, erva que dê semente, árvore frutífera que dê fruto segundo a sua espécie, cuja semente esteja nela sobre a terra. E assim foi.
¹² E a terra produziu erva, erva dando semente conforme a sua espécie e árvore frutífera, cuja semente está nela conforme a sua espécie. E viu Deus que era bom.
¹³ E foi a tarde e a manhã: o dia terceiro.
¹⁴ E disse Deus: Haja luminares na expansão dos céus, para haver separação entre o dia e a noite; e sejam eles para sinais e para tempos determinados e para dias e anos.
¹⁵ E sejam para luminares na expansão dos céus, para alumiar a terra. E assim foi.
¹⁶ E fez Deus os dois grandes luminares: o luminar maior para governar o dia, e o luminar menor para governar a noite; e fez as estrelas.
¹⁷ E Deus os pôs na expansão dos céus para alumiar a terra,
¹⁸ e para governar o dia e a noite, e para fazer separação entre a luz e as trevas. E viu Deus que era bom.
¹⁹ E foi a tarde e a manhã: o dia quarto.
²⁰ E disse Deus: Produzam as águas abundantemente répteis de alma vivente; e voem as aves sobre a face da expansão dos céus.
²¹ E Deus criou as grandes baleias, e todo réptil de alma vivente que as águas abundantemente produziram conforme as suas espécies, e toda ave de asas conforme a sua espécie. E viu Deus que era bom.
²² E Deus os abençoou, dizendo: Frutificai, e multiplicai-vos, e enchei as águas nos mares; e as aves se multipliquem na terra.
²³ E foi a tarde e a manhã: o dia quinto
²³ .
 A criação dos seres viventes
²⁴ E disse Deus: Produza a terra alma vivente conforme a sua espécie; gado, e répteis, e bestas-feras da terra conforme a sua espécie. E assim foi.
²⁵ E fez Deus as bestas-feras da terra conforme a sua espécie, e o gado conforme a sua espécie, e todo o réptil da terra conforme a sua espécie. E viu Deus que era bom.
²⁶ E disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança; e domine sobre os peixes do mar, e sobre as aves dos céus, e sobre o gado, e sobre toda a terra, e sobre todo réptil que se move sobre a terra.
²⁷ E criou Deus o homem à sua imagem; à imagem de Deus o criou; macho e fêmea os criou.
²⁸ E Deus os abençoou e Deus lhes disse: Frutificai, e multiplicai-vos, e enchei a terra, e sujeitai-a; e dominai sobre os peixes do mar, e sobre as aves dos céus, e sobre todo o animal que se move sobre a terra.
²⁹ E disse Deus: Eis que vos tenho dado toda erva que dá semente e que está sobre a face de toda a terra e toda árvore em que há fruto de árvore que dá semente; ser-vos-ão para mantimento.
³⁰ E a todo animal da terra, e a toda ave dos céus, e a todo réptil da terra, em que há alma vivente, toda a erva verde lhes será para mantimento. E assim foi.
³¹ E viu Deus tudo quanto tinha feito, e eis que era muito bom; e foi a tarde e a manhã: o dia sexto`,
            
            // O DESAFIO: O que o usuário precisa responder para ganhar pontos
            pergunta: {
                texto: "O que Deus criou no primeiro dia quando disse 'Haja Luz'?", // Pergunta na tela
                opcoes: [
                    { numero: 1, texto: "A Luz", correta: true }, // Resposta CERTA (correta: true)
                    { numero: 2, texto: "O Sol e a Lua", correta: false },
                    { numero: 3, texto: "Os Animais", correta: false },
                    { numero: 4, texto: "O Homem", correta: false }
                ],
                explicacao: "Gênesis 1:3 - Deus trouxe a luz ao mundo antes de criar os luminares do céu.",
                pontosGanhos: 20 // Quantidade de pontos que vai para o Ranking
            }
        },

        // --- INÍCIO DO CAPÍTULO 2 ---
        2: {
            titulo: "Descanso de Deus",
            subtitulo: "Descanso de Deus",
            texto: `¹ Assim, os céus, e a terra, e todo o seu exército foram acabados.
² E, havendo Deus acabado no dia sétimo a sua obra, que tinha feito, descansou no sétimo dia de toda a sua obra, que tinha feito.
³ E abençoou Deus o dia sétimo e o santificou; porque nele descansou de toda a sua obra, que Deus criara e fizera.
  A formação do jardim do Éden
⁴ Estas são as origens dos céus e da terra, quando foram criados; no dia em que o Senhor Deus fez a terra e os céus.
⁵ Toda planta do campo ainda não estava na terra, e toda erva do campo ainda não brotava; porque ainda o Senhor Deus não tinha feito chover sobre a terra, e não havia homem para lavrar a terra.
⁶ Um vapor, porém, subia da terra e regava toda a face da terra.
⁷ E formou o Senhor Deus o homem do pó da terra e soprou em seus narizes o fôlego da vida; e o homem foi feito alma vivente.
⁸ E plantou o Senhor Deus um jardim no Éden, da banda do Oriente, e pôs ali o homem que tinha formado.
⁹ E o Senhor Deus fez brotar da terra toda árvore agradável à vista e boa para comida, e a árvore da vida no meio do jardim, e a árvore da ciência do bem e do mal.
¹⁰ E saía um rio do Éden para regar o jardim; e dali se dividia e se tornava em quatro braços.
¹¹ O nome do primeiro é Pisom; este é o que rodeia toda a terra de Havilá, onde há ouro.
¹² E o ouro dessa terra é bom; ali há o bdélio e a pedra sardônica.
¹³ E o nome do segundo rio é Giom; este é o que rodeia toda a terra de Cuxe.
¹⁴ E o nome do terceiro rio é Hidéquel; este é o que vai para a banda do oriente da Assíria; e o quarto rio é o Eufrates.
¹⁵ E tomou o Senhor Deus o homem e o pôs no jardim do Éden para o lavrar e o guardar.
¹⁶ E ordenou o Senhor Deus ao homem, dizendo: De toda árvore do jardim comerás livremente,
¹⁷ mas da árvore da ciência do bem e do mal, dela não comerás; porque, no dia em que dela comeres, certamente morrerás.
   Como Deus criou a mulher
¹⁸ E disse o Senhor Deus: Não é bom que o homem esteja só; far-lhe-ei uma adjutora que esteja como diante dele.
¹⁹ Havendo, pois, o Senhor Deus formado da terra todo animal do campo e toda ave dos céus, os trouxe a Adão, para este ver como lhes chamaria; e tudo o que Adão chamou a toda a alma vivente, isso foi o seu nome.
²⁰ E Adão pôs os nomes a todo o gado, e às aves dos céus, e a todo animal do campo; mas para o homem não se achava adjutora que estivesse como diante dele.
²¹ Então, o Senhor Deus fez cair um sono pesado sobre Adão, e este adormeceu; e tomou uma das suas costelas e cerrou a carne em seu lugar.
²² E da costela que o Senhor Deus tomou do homem formou uma mulher; e trouxe-a a Adão.
²³ E disse Adão: Esta é agora osso dos meus ossos e carne da minha carne; esta será chamada varoa, porquanto do varão foi tomada.
²⁴ Portanto, deixará o varão o seu pai e a sua mãe e apegar-se-á à sua mulher, e serão ambos uma carne.
²⁵ E ambos estavam nus, o homem e a sua mulher; e não se envergonhavam.`,
            
        pergunta: {
                texto: "De acordo com o texto, como o homem se tornou uma 'alma vivente'?",
                opcoes: [
                    { numero: 1, texto: "Ao comer do fruto da árvore da vida", correta: false },
                    { numero: 2, texto: "Quando Deus soprou em seus narizes o fôlego da vida", correta: true },
                    { numero: 3, texto: "Assim que foi formado do pó da terra", correta: false },
                    { numero: 4, texto: "Depois que Deus criou o Jardim do Éden", correta: false }
                ],
                explicacao: "Gênesis 2:7 - O homem só se tornou alma vivente após receber o fôlego da vida diretamente de Deus.",
                pontosGanhos: 20
            }
        },

        // --- INÍCIO DO CAPÍTULO 3 ---
        3: {
            titulo: "A Tentação e a Queda",
            subtitulo: "A desobediência e a expulsão do jardim",
            texto: `A tentação de Eva e a queda do homem.
¹ Ora, a serpente era mais astuta que todas as alimárias do campo que o Senhor Deus tinha feito. E esta disse à mulher: É assim que Deus disse: Não comereis de toda árvore do jardim?
² E disse a mulher à serpente: Do fruto das árvores do jardim comeremos,
³ mas, do fruto da árvore que está no meio do jardim, disse Deus: Não comereis dele, nem nele tocareis, para que não morrais.
⁴ Então, a serpente disse à mulher: Certamente não morrereis.
⁵ Porque Deus sabe que, no dia em que dele comerdes, se abrirão os vossos olhos, e sereis como Deus, sabendo o bem e o mal.
⁶ E, vendo a mulher que aquela árvore era boa para se comer, e agradável aos olhos, e árvore desejável para dar entendimento, tomou do seu fruto, e comeu, e deu também a seu marido, e ele comeu com ela.
⁷ Então, foram abertos os olhos de ambos, e conheceram que estavam nus; e coseram folhas de figueira, e fizeram para si aventais.
⁸ E ouviram a voz do Senhor Deus, que passeava no jardim pela viração do dia; e escondeu-se Adão e sua mulher da presença do Senhor Deus, entre as árvores do jardim.
⁹ E chamou o Senhor Deus a Adão e disse-lhe: Onde estás?
¹⁰ E ele disse: Ouvi a tua voz soar no jardim, e temi, porque estava nu, e escondi-me.
¹¹ E Deus disse: Quem te mostrou que estavas nu? Comeste tu da árvore de que te ordenei que não comesses?
¹² Então, disse Adão: A mulher que me deste por companheira, ela me deu da árvore, e comi.
¹³ E disse o Senhor Deus à mulher: Por que fizeste isso? E disse a mulher: A serpente me enganou, e eu comi.
¹⁴ Então, o Senhor Deus disse à serpente: Porquanto fizeste isso, maldita serás mais que toda besta e mais que todos os animais do campo; sobre o teu ventre andarás e pó comerás todos os dias da tua vida.
¹⁵ E porei inimizade entre ti e a mulher e entre a tua semente e a sua semente; esta te ferirá a cabeça, e tu lhe ferirás o calcanhar.
¹⁶ E à mulher disse: Multiplicarei grandemente a tua dor e a tua conceição; com dor terás filhos; e o teu desejo será para o teu marido, e ele te dominará.
¹⁷ E a Adão disse: Porquanto deste ouvidos à voz de tua mulher e comeste da árvore de que te ordenei, dizendo: Não comerás dela, maldita é a terra por causa de ti; com dor comerás dela todos os dias da tua vida.
¹⁸ Espinhos e cardos também te produzirá; e comerás a erva do campo.
¹⁹ No suor do teu rosto, comerás o teu pão, até que te tornes à terra; porque dela foste tomado, porquanto és pó e em pó te tornarás.
²⁰ E chamou Adão o nome de sua mulher Eva, porquanto ela era a mãe de todos os viventes.
²¹ E fez o Senhor Deus a Adão e a sua mulher túnicas de peles e os vestiu.
²² Então, disse o Senhor Deus: Eis que o homem é como um de nós, sabendo o bem e o mal; ora, pois, para que não estenda a sua mão, e tome também da árvore da vida, e coma, e viva eternamente,
²³ o Senhor Deus, pois, o lançou fora do jardim do Éden, para lavrar a terra, de que fora tomado.
²⁴ E, havendo lançado fora o homem, pôs querubins ao oriente do jardim do Éden e uma espada inflamada que andava ao redor, para guardar o caminho da árvore da vida.`,
            
    pergunta: {
                texto: "Qual foi o argumento que a serpente usou para convencer Eva a comer do fruto proibido?",
                opcoes: [
                    { numero: 1, texto: "Que o fruto era o mais saboroso de todo o jardim", correta: false },
                    { numero: 2, texto: "Que Deus havia esquecido daquela ordem", correta: false },
                    { numero: 3, texto: "Que certamente não morreriam e seriam como Deus, sabendo o bem e o mal", correta: true },
                    { numero: 4, texto: "Que todos os animais já haviam comido do fruto", correta: false }
                ],
                explicacao: "Gênesis 3:4-5 - A serpente contradisse a palavra de Deus, prometendo que eles teriam conhecimento igual ao do Criador.",
                pontosGanhos: 20
            }
        },

        // --- INÍCIO DO CAPÍTULO 4 ---
        4: {
            titulo: "Caim e Abel",
            subtitulo: "A história dos primeiros irmãos",
            texto: `¹ E conheceu Adão a Eva, sua mulher, e ela concebeu, e teve a Caim, e disse: Alcancei do Senhor um varão.
² E teve mais a seu irmão Abel; e Abel foi pastor de ovelhas, e Caim foi lavrador da terra.
³ E aconteceu, ao cabo de dias, que Caim trouxe do fruto da terra uma oferta ao Senhor.
⁴ E Abel também trouxe dos primogênitos das suas ovelhas e da sua gordura; e atentou o Senhor para Abel e para a sua oferta.
⁵ Mas para Caim e para a sua oferta não atentou. E irou-se Caim fortemente, e descaiu-lhe o seu semblante.
⁶ E o Senhor disse a Caim: Por que te iraste? E por que descaiu o teu semblante?
⁷ Se bem fizeres, não haverá aceitação para ti? E, se não fizeres bem, o pecado jaz à porta, e para ti será o seu desejo, e sobre ele dominarás.
  O primeiro homicídio
⁸ E falou Caim com o seu irmão Abel; e sucedeu que, estando eles no campo, se levantou Caim contra o seu irmão Abel e o matou.
⁹ E disse o Senhor a Caim: Onde está Abel, teu irmão? E ele disse: Não sei; sou eu guardador do meu irmão?
¹⁰ E disse Deus: Que fizeste? A voz do sangue do teu irmão clama a mim desde a terra.
¹¹ E agora maldito és tu desde a terra, que abriu a sua boca para receber da tua mão o sangue do teu irmão.
¹² Quando lavrares a terra, não te dará mais a sua força; fugitivo e errante serás na terra.
¹³ Então, disse Caim ao Senhor: É maior a minha maldade que a que possa ser perdoada.
¹⁴ Eis que hoje me lanças da face da terra, e da tua face me esconderei; e serei fugitivo e errante na terra, e será que todo aquele que me achar me matará.
¹⁵ O Senhor, porém, disse-lhe: Portanto, qualquer que matar a Caim sete vezes será castigado. E pôs o Senhor um sinal em Caim, para que não o ferisse qualquer que o achasse.
¹⁶ E saiu Caim de diante da face do Senhor e habitou na terra de Node, da banda do oriente do Éden.
¹⁷ E conheceu Caim a sua mulher, e ela concebeu e teve a Enoque; e ele edificou uma cidade e chamou o nome da cidade pelo nome de seu filho Enoque.
¹⁸ E a Enoque nasceu Irade, e Irade gerou a Meujael, e Meujael gerou a Metusael, e Metusael gerou a Lameque.
¹⁹ E tomou Lameque para si duas mulheres; o nome de uma era Ada, e o nome da outra, Zilá.
²⁰ E Ada teve a Jabal; este foi o pai dos que habitam em tendas e têm gado.
²¹ E o nome do seu irmão era Jubal; este foi o pai de todos os que tocam harpa e órgão.
²² E Zilá também teve a Tubalcaim, mestre de toda obra de cobre e de ferro; e a irmã de Tubalcaim foi Naamá.
²³ E disse Lameque a suas mulheres: Ada e Zilá, ouvi a minha voz; vós, mulheres de Lameque, escutai o meu dito: porque eu matei um varão, por me ferir, e um jovem, por me pisar.
²⁴ Porque sete vezes Caim será vingado; mas Lameque, setenta vezes sete.
²⁵ E tornou Adão a conhecer a sua mulher; e ela teve um filho e chamou o seu nome Sete; porque, disse ela, Deus me deu outra semente em lugar de Abel; porquanto Caim o matou.
²⁶ E a Sete mesmo também nasceu um filho; e chamou o seu nome Enos; então, se começou a invocar o nome do Senhor`,
            
       pergunta: {
                texto: "Quais eram as profissões de Abel e Caim,?",
                opcoes: [
                    { numero: 1, texto: "Abel era pescador e Caim era caçador", correta: false },
                    { numero: 2, texto: "Abel era pastor de ovelhas e Caim era lavrador da terra", correta: true },
                    { numero: 3, texto: "Abel era carpinteiro e Caim era construtor", correta: false },
                    { numero: 4, texto: "Ambos eram lavradores da terra", correta: false }
                ],
                explicacao: "Gênesis 4:2 - O texto descreve que Abel cuidava de rebanhos (pastor) e Caim trabalhava com a agricultura (lavrador).",
                pontosGanhos: 20
            }
        },
   
        // --- INÍCIO DO CAPÍTULO 5 ---
        5: {
            titulo: "As Gerações de Adão",
            subtitulo: "A linhagem de Adão até Noé e o mistério de Enoque",
            
            // TEXTO BÍBLICO (Baseado no seu envio)
            texto: `  
¹ Este é o livro das gerações de Adão. No dia em que Deus criou o homem, à semelhança de Deus o fez.
² Macho e fêmea os criou, e os abençoou, e chamou o seu nome Adão, no dia em que foram criados.
³ E Adão viveu cento e trinta anos, e gerou um filho à sua semelhança, conforme a sua imagem, e chamou o seu nome Sete.
⁴ E foram os dias de Adão, depois que gerou a Sete, oitocentos anos, e gerou filhos e filhas.
⁵ E foram todos os dias que Adão viveu novecentos e trinta anos; e morreu.
⁶ E viveu Sete cento e cinco anos e gerou a Enos.
⁷ E viveu Sete, depois que gerou a Enos, oitocentos e sete anos e gerou filhos e filhas.
⁸ E foram todos os dias de Sete novecentos e doze anos; e morreu.
⁹ E viveu Enos noventa anos; e gerou a Cainã.
¹⁰ E viveu Enos, depois que gerou a Cainã, oitocentos e quinze anos e gerou filhos e filhas.
¹¹ E foram todos os dias de Enos novecentos e cinco anos; e morreu.
¹² E viveu Cainã setenta anos e gerou a Maalalel.
¹³ E viveu Cainã, depois que gerou a Maalalel, oitocentos e quarenta anos e gerou filhos e filhas.
¹⁴ E foram todos os dias de Cainã novecentos e dez anos; e morreu.
¹⁵ E viveu Maalalel sessenta e cinco anos e gerou a Jarede.
¹⁶ E viveu Maalalel, depois que gerou a Jarede, oitocentos e trinta anos e gerou filhos e filhas.
¹⁷ E foram todos os dias de Maalalel oitocentos e noventa e cinco anos; e morreu.
¹⁸ E viveu Jarede cento e sessenta e dois anos e gerou a Enoque.
¹⁹ E viveu Jarede, depois que gerou a Enoque, oitocentos anos e gerou filhos e filhas.
²⁰ E foram todos os dias de Jarede novecentos e sessenta e dois anos; e morreu.
²¹ E viveu Enoque sessenta e cinco anos e gerou a Metusalém.
²² E andou Enoque com Deus, depois que gerou a Metusalém, trezentos anos e gerou filhos e filhas.
²³ E foram todos os dias de Enoque trezentos e sessenta e cinco anos.
²⁴ E andou Enoque com Deus; e não se viu mais, porquanto Deus para si o tomou.
²⁵ E viveu Metusalém cento e oitenta e sete anos e gerou a Lameque.
²⁶ E viveu Metusalém, depois que gerou a Lameque, setecentos e oitenta e dois anos e gerou filhos e filhas.
²⁷ E foram todos os dias de Metusalém novecentos e sessenta e nove anos; e morreu.
²⁸ E viveu Lameque cento e oitenta e dois anos e gerou um filho.
²⁹ E chamou o seu nome Noé, dizendo: Este nos consolará acerca de nossas obras e do trabalho de nossas mãos, por causa da terra que o Senhor amaldiçoou.
³⁰ E viveu Lameque, depois que gerou a Noé, quinhentos e noventa e cinco anos e gerou filhos e filhas.
³¹ E foram todos os dias de Lameque setecentos e setenta e sete anos; e morreu.
³² E era Noé da idade de quinhentos anos e gerou Noé a Sem, Cam e Jafé`,
            
            // O DESAFIO
            pergunta: {
                texto: "O que aconteceu de especial com Enoque, segundo o texto bíblico?",
                opcoes: [
                    { numero: 1, texto: "Ele foi o homem que viveu por mais tempo na terra", correta: false },
                    { numero: 2, texto: "Ele construiu a primeira cidade mencionada no capítulo", correta: false },
                    { numero: 3, texto: "Ele andou com Deus e não se viu mais, pois Deus o tomou para si", correta: true },
                    { numero: 4, texto: "Ele foi o pai de Noé e o consolador da terra", correta: false }
                ],
                explicacao: "Gênesis 5:24 - Diferente dos outros, o texto não diz que Enoque morreu, mas que Deus o tomou para si após ele andar com Deus.",
                pontosGanhos: 20
            }
        },
        6: {
            titulo: "A Arca de Noé",
            subtitulo: "A corrupção da terra e as instruções para a Arca",
            
            // TEXTO BÍBLICO (Baseado no seu envio)
            texto: `
¹ E aconteceu que, como os homens começaram a multiplicar-se sobre a face da terra, e lhes nasceram filhas,
² viram os filhos de Deus que as filhas dos homens eram formosas; e tomaram para si mulheres de todas as que escolheram.
³ Então, disse o Senhor: Não contenderá o meu Espírito para sempre com o homem, porque ele também é carne; porém os seus dias serão cento e vinte anos.
⁴ Havia, naqueles dias, gigantes na terra; e também depois, quando os filhos de Deus entraram às filhas dos homens e delas geraram filhos; estes eram os valentes que houve na antiguidade, os varões de fama.
⁵ E viu o Senhor que a maldade do homem se multiplicara sobre a terra e que toda imaginação dos pensamentos de seu coração era só má continuamente.
⁶ Então, arrependeu-se o Senhor de haver feito o homem sobre a terra, e pesou-lhe em seu coração.
⁷ E disse o Senhor: Destruirei, de sobre a face da terra, o homem que criei, desde o homem até ao animal, até ao réptil e até à ave dos céus; porque me arrependo de os haver feito.
⁸ Noé, porém, achou graça aos olhos do Senhor.
⁹ Estas são as gerações de Noé: Noé era varão justo e reto em suas gerações; Noé andava com Deus.
¹⁰ E gerou Noé três filhos: Sem, Cam e Jafé.
¹¹ A terra, porém, estava corrompida diante da face de Deus; e encheu-se a terra de violência.
¹² E viu Deus a terra, e eis que estava corrompida; porque toda carne havia corrompido o seu caminho sobre a terra.
   Deus anuncia o dilúvio a Noé
¹³ Então, disse Deus a Noé: O fim de toda carne é vindo perante a minha face; porque a terra está cheia de violência; e eis que os desfarei com a terra.
¹⁴ Faze para ti uma arca da madeira de gofer; farás compartimentos na arca e a betumarás por dentro e por fora com betume.
¹⁵ E desta maneira farás: de trezentos côvados o comprimento da arca, e de cinquenta côvados a sua largura, e de trinta côvados a sua altura.
¹⁶ Farás na arca uma janela e de um côvado a acabarás em cima; e a porta da arca porás ao seu lado; far-lhe-ás andares baixos, segundos e terceiros.
¹⁷ Porque eis que eu trago um dilúvio de águas sobre a terra, para desfazer toda carne em que há espírito de vida debaixo dos céus: tudo o que há na terra expirará.
¹⁸ Mas contigo estabelecerei o meu pacto; e entrarás na arca, tu e os teus filhos, e a tua mulher, e as mulheres de teus filhos contigo.
¹⁹ E de tudo o que vive, de toda carne, dois de cada espécie meterás na arca, para os conservares vivos contigo; macho e fêmea serão.
²⁰ Das aves conforme a sua espécie, dos animais conforme a sua espécie, de todo réptil da terra conforme a sua espécie, dois de cada espécie virão a ti, para os conservares em vida.
²¹ E tu toma para ti de toda comida que se come e ajunta-a para ti; e te será para mantimento, para ti e para eles.
²² Assim fez Noé; conforme tudo o que Deus lhe mandou, assim o fez.`,
            
            // O DESAFIO
            pergunta: {
                texto: "De que material Deus ordenou que Noé construísse a Arca?",
                opcoes: [
                    { numero: 1, texto: "Madeira de Cedro e Ferro", correta: false },
                    { numero: 2, texto: "Pedras talhadas e Argila", correta: false },
                    { numero: 3, texto: "Madeira de Gofer e Betume", correta: true },
                    { numero: 4, texto: "Carvalho e Couro de animais", correta: false }
                ],
                explicacao: "Gênesis 6:14 - Deus deu instruções específicas para usar madeira de gofer e betume para garantir que a arca fosse impermeável.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 7 ---
        7: {
            titulo: "O Início do Dilúvio",
            subtitulo: "Noé entra na arca e as águas cobrem a terra",
            
            // TEXTO BÍBLICO (Baseado no seu envio)
            texto: `¹ Depois, disse o Senhor a Noé: Entra tu e toda a tua casa na arca, porque te hei visto justo diante de mim nesta geração.
² De todo animal limpo tomarás para ti sete e sete: o macho e sua fêmea; mas dos animais que não são limpos, dois: o macho e sua fêmea.
³ Também das aves dos céus sete e sete: macho e fêmea, para se conservar em vida a semente sobre a face de toda a terra.
⁴ Porque, passados ainda sete dias, farei chover sobre a terra quarenta dias e quarenta noites; e desfarei de sobre a face da terra toda substância que fiz.
⁵ E fez Noé conforme tudo o que o Senhor lhe ordenara.
⁶ E era Noé da idade de seiscentos anos, quando o dilúvio das águas veio sobre a terra.
⁷ E entrou Noé, e seus filhos, e sua mulher, e as mulheres de seus filhos com ele na arca, por causa das águas do dilúvio.
⁸ Dos animais limpos, e dos animais que não são limpos, e das aves, e de todo o réptil sobre a terra,
⁹ entraram de dois em dois para Noé na arca, macho e fêmea, como Deus ordenara a Noé.
¹⁰ E aconteceu que, passados sete dias, vieram sobre a terra as águas do dilúvio.
¹¹ No ano seiscentos da vida de Noé, no mês segundo, aos dezessete dias do mês, naquele mesmo dia, se romperam todas as fontes do grande abismo, e as janelas dos céus se abriram,
¹² e houve chuva sobre a terra quarenta dias e quarenta noites.
¹³ E, no mesmo dia, entrou Noé, e Sem, e Cam, e Jafé, os filhos de Noé, como também a mulher de Noé, e as três mulheres de seus filhos, com ele na arca;
¹⁴ eles, e todo animal conforme a sua espécie, e todo gado conforme a sua espécie, e todo réptil que se roja sobre a terra conforme a sua espécie, e toda ave conforme a sua espécie, todo pássaro de toda qualidade.
¹⁵ E de toda carne, em que havia espírito de vida, entraram de dois em dois para Noé na arca.
¹⁶ E os que entraram, macho e fêmea de toda carne entraram, como Deus lhe tinha ordenado; e o Senhor a fechou por fora.
  O dilúvio
¹⁷ E esteve o dilúvio quarenta dias sobre a terra; e cresceram as águas e levantaram a arca, e ela se elevou sobre a terra.
¹⁸ E prevaleceram as águas e cresceram grandemente sobre a terra; e a arca andava sobre as águas.
¹⁹ E as águas prevaleceram excessivamente sobre a terra; e todos os altos montes que havia debaixo de todo o céu foram cobertos.
²⁰ Quinze côvados acima prevaleceram as águas; e os montes foram cobertos.
²¹ E expirou toda carne que se movia sobre a terra, tanto de ave como de gado, e de feras, e de todo o réptil que se roja sobre a terra, e de todo homem.
²² Tudo o que tinha fôlego de espírito de vida em seus narizes, tudo o que havia no seco, morreu.
²³ Assim, foi desfeita toda substância que havia sobre a face da terra, desde o homem até ao animal, até ao réptil e até à ave dos céus; e foram extintos da terra; e ficou somente Noé e os que com ele estavam na arca.
²⁴ E prevaleceram as águas sobre a terra cento e cinquenta dias.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Segundo o texto, quem fechou a porta da arca por fora após todos terem entrado?",
                opcoes: [
                    { numero: 1, texto: "O próprio Noé", correta: false },
                    { numero: 2, texto: "Os filhos de Noé (Sem, Cam e Jafé)", correta: false },
                    { numero: 3, texto: "O Senhor Deus", correta: true },
                    { numero: 4, texto: "Um anjo enviado do céu", correta: false }
                ],
                explicacao: "Gênesis 7:16 - O texto destaca que, após todos entrarem como Deus ordenara, o próprio Senhor fechou a porta por fora.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 8 ---
        8: {
            titulo: "A Terra Seca",
            subtitulo: "O fim do dilúvio, a pomba e a saída da arca",
            
            // TEXTO BÍBLICO
            texto: `¹ E lembrou-se Deus de Noé, e de todo animal, e de toda rês que com ele estava na arca; e Deus fez passar um vento sobre a terra, e aquietaram-se as águas.
² Cerraram-se também as fontes do abismo e as janelas dos céus, e a chuva dos céus deteve-se.
³ E as águas tornaram de sobre a terra continuamente e, ao cabo de cento e cinquenta dias, as águas minguaram.
⁴ E a arca repousou, no sétimo mês, no dia dezessete do mês, sobre os montes de Ararate.
⁵ E foram as águas indo e minguando até ao décimo mês; no décimo mês, no primeiro dia do mês, apareceram os cumes dos montes.
⁶ E aconteceu que, ao cabo de quarenta dias, abriu Noé a janela da arca que tinha feito.
  Noé solta um corvo e depois uma pomba
⁷ E soltou um corvo, que saiu, indo e voltando, até que as águas se secaram de sobre a terra.
⁸ Depois, soltou uma pomba, a ver se as águas tinham minguado de sobre a face da terra.
⁹ A pomba, porém, não achou repouso para a planta de seu pé e voltou a ele para a arca; porque as águas estavam sobre a face de toda a terra; e ele estendeu a sua mão, e tomou-a, e meteu-a consigo na arca.
¹⁰ E esperou ainda outros sete dias e tornou a enviar a pomba fora da arca.
¹¹ E a pomba voltou a ele sobre a tarde; e eis, arrancada, uma folha de oliveira no seu bico; e conheceu Noé que as águas tinham minguado sobre a terra.
¹² Então, esperou ainda outros sete dias e enviou fora a pomba; mas não tornou mais a ele.
¹³ E aconteceu que, no ano seiscentos e um, no mês primeiro, no primeiro dia do mês, as águas se secaram de sobre a terra. Então, Noé tirou a cobertura da arca e olhou, e eis que a face da terra estava enxuta.
¹⁴ E, no segundo mês, aos vinte e sete dias do mês, a terra estava seca.
  Noé e sua família saem da arca
¹⁵ Então, falou Deus a Noé, dizendo:
¹⁶ Sai da arca tu, e tua mulher, e teus filhos, e as mulheres de teus filhos contigo.
¹⁷ Todo animal que está contigo, de toda carne, de ave, e de gado, e de todo réptil que se roja sobre a terra, traze fora contigo; e povoem abundantemente a terra, e frutifiquem, e se multipliquem sobre a terra.
¹⁸ Então, saiu Noé, e seus filhos, e sua mulher, e as mulheres de seus filhos com ele;
¹⁹ todo animal, todo réptil, toda ave, tudo o que se move sobre a terra, conforme as suas famílias, saiu para fora da arca.
²⁰ E edificou Noé um altar ao Senhor; e tomou de todo animal limpo e de toda ave limpa e ofereceu holocaustos sobre o altar.
²¹ E o Senhor cheirou o suave cheiro e disse o Senhor em seu coração: Não tornarei mais a amaldiçoar a terra por causa do homem, porque a imaginação do coração do homem é má desde a sua meninice; nem tornarei mais a ferir todo vivente, como fiz.
²² Enquanto a terra durar, sementeira e sega, e frio e calor, e verão e inverno, e dia e noite não cessarão.`,
            
            // O DESAFIO
            pergunta: {
                texto: "O que a pomba trouxe no bico para mostrar a Noé que a terra estava secando?",
                opcoes: [
                    { numero: 1, texto: "Um pedaço de madeira de gofer", correta: false },
                    { numero: 2, texto: "Uma folha de oliveira verde", correta: true },
                    { numero: 3, texto: "Uma espiga de trigo", correta: false },
                    { numero: 4, texto: "Um punhado de terra seca", correta: false }
                ],
                explicacao: "Gênesis 8:11 - A folha de oliveira no bico da pomba foi o sinal de que a vegetação já estava a brotar novamente.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 9 ---
        9: {
            titulo: "A Aliança do Arco-Íris",
            subtitulo: "A promessa de Deus e o recomeço da humanidade",
            
            // TEXTO BÍBLICO (Baseado no seu envio)
            texto: `¹ E abençoou Deus a Noé e a seus filhos e disse-lhes: frutificai, e multiplicai-vos, e enchei a terra.
² E será o vosso temor e o vosso pavor sobre todo animal da terra e sobre toda ave dos céus; tudo o que se move sobre a terra e todos os peixes do mar na vossa mão são entregues.
³ Tudo quanto se move, que é vivente, será para vosso mantimento; tudo vos tenho dado, como a erva verde.
⁴ A carne, porém, com sua vida, isto é, com seu sangue, não comereis.
⁵ E certamente requererei o vosso sangue, o sangue da vossa vida; da mão de todo animal o requererei, como também da mão do homem e da mão do irmão de cada um requererei a vida do homem.
⁶ Quem derramar o sangue do homem, pelo homem o seu sangue será derramado; porque Deus fez o homem conforme a sua imagem.
⁷ Mas vós, frutificai e multiplicai-vos; povoai abundantemente a terra e multiplicai-vos nela.
⁸ E falou Deus a Noé e a seus filhos com ele, dizendo:
⁹ E eu, eis que estabeleço o meu concerto convosco, e com a vossa semente depois de vós,
¹⁰ e com toda alma vivente, que convosco está, de aves, de reses, e de todo animal da terra convosco; desde todos que saíram da arca, até todo animal da terra.
¹¹ E eu convosco estabeleço o meu concerto, que não será mais destruída toda carne pelas águas do dilúvio e que não haverá mais dilúvio para destruir a terra.
¹² E disse Deus: Este é o sinal do concerto que ponho entre mim e vós e entre toda alma vivente, que está convosco, por gerações eternas.
¹³ O meu arco tenho posto na nuvem; este será por sinal do concerto entre mim e a terra.
¹⁴ E acontecerá que, quando eu trouxer nuvens sobre a terra, aparecerá o arco nas nuvens.
¹⁵ Então, me lembrarei do meu concerto, que está entre mim e vós e ainda toda alma vivente de toda carne; e as águas não se tornarão mais em dilúvio, para destruir toda carne.
¹⁶ E estará o arco nas nuvens, e eu o verei, para me lembrar do concerto eterno entre Deus e toda alma vivente de toda carne, que está sobre a terra.
¹⁷ E disse Deus a Noé: Este é o sinal do concerto que tenho estabelecido entre mim e toda a carne que está sobre a terra.
¹⁸ E os filhos de Noé, que da arca saíram, foram Sem, e Cam, e Jafé; e Cam é o pai de Canaã.
¹⁹ Estes três foram os filhos de Noé; e destes se povoou toda a terra.
  Noé planta uma vinha
²⁰ E começou Noé a ser lavrador da terra e plantou uma vinha.
²¹ E bebeu do vinho e embebedou-se; e descobriu-se no meio de sua tenda.
²² E viu Cam, o pai de Canaã, a nudez de seu pai e fê-lo saber a ambos seus irmãos, fora.
²³ Então, tomaram Sem e Jafé uma capa, puseram-na sobre ambos os seus ombros e, indo virados para trás, cobriram a nudez do seu pai; e os seus rostos eram virados, de maneira que não viram a nudez do seu pai.
²⁴ E despertou Noé do seu vinho e soube o que seu filho menor lhe fizera.
²⁵ E disse: Maldito seja Canaã; servo dos servos seja aos seus irmãos.
²⁶ E disse: Bendito seja o Senhor, Deus de Sem; e seja-lhe Canaã por servo.
²⁷ Alargue Deus a Jafé, e habite nas tendas de Sem; e seja-lhe Canaã por servo.
²⁸ E viveu Noé, depois do dilúvio, trezentos e cinquenta anos.
²⁹ E foram todos os dias de Noé novecentos e cinquenta anos, e morreu`,
            
            // O DESAFIO
            pergunta: {
                texto: "Qual foi o sinal que Deus colocou nas nuvens como símbolo da Sua aliança com a terra?",
                opcoes: [
                    { numero: 1, texto: "Uma pomba branca", correta: false },
                    { numero: 2, texto: "Um arco-íris", correta: true },
                    { numero: 3, texto: "Uma estrela brilhante", correta: false },
                    { numero: 4, texto: "Uma nuvem de fogo", correta: false }
                ],
                explicacao: "Gênesis 9:13 - O arco nas nuvens (arco-íris) é o sinal visível da promessa de Deus de nunca mais enviar um dilúvio sobre toda a terra.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 10 ---
        10: {
            titulo: "A Decendência de Noé",
            subtitulo: "A descendência de Noé e o início dos reinos na terra",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `¹ Estas, pois, são as gerações dos filhos de Noé: Sem, Cam e Jafé; e nasceram-lhes filhos depois do dilúvio.
² Os filhos de Jafé são: Gomer, e Magogue, e Madai, e Javã, e Tubal, e Meseque, e Tiras.
³ E os filhos de Gomer são: Asquenaz, e Rifate, e Togarma.
⁴ E os filhos de Javã são: Elisá, e Társis, e Quitim, e Dodanim.
⁵ Por estes, foram repartidas as ilhas das nações nas suas terras, cada qual segundo a sua língua, segundo as suas famílias, entre as suas nações.
⁶ E os filhos de Cam são: Cuxe, e Mizraim, e Pute, e Canaã.
⁷ E os filhos de Cuxe são: Sebá, e Havilá, e Sabtá, e Raamá, e Sabtecá; e os filhos de Raamá são: Sabá e Dedã.
⁸ E Cuxe gerou a Ninrode; este começou a ser poderoso na terra.
⁹ E este foi poderoso caçador diante da face do Senhor; pelo que se diz: Como Ninrode, poderoso caçador diante do Senhor.
¹⁰ E o princípio do seu reino foi Babel, e Ereque, e Acade, e Calné, na terra de Sinar.
¹¹ Desta mesma terra saiu ele à Assíria e edificou a Nínive, e Reobote-Ir, e Calá,
¹² e Resém, entre Nínive e Calá (esta é a grande cidade).
¹³ E Mizraim gerou a Ludim, e a Anamim, e a Leabim, e a Naftuim,
¹⁴ e a Patrusim, e a Casluim (donde saíram os filisteus), e a Caftorim.
¹⁵ E Canaã gerou a Sidom, seu primogênito, e a Hete,
¹⁶ e ao jebuseu, e ao amorreu, e ao girgaseu,
¹⁷ e ao heveu, e ao arqueu, e ao sineu,
¹⁸ e ao arvadeu, e ao zemareu, e ao hamateu, e depois se espalharam as famílias dos cananeus.
¹⁹ E foi o termo dos cananeus desde Sidom, indo para Gerar, até Gaza; indo para Sodoma, e Gomorra, e Admá, e Zeboim, até Lasa.
²⁰ Estes são os filhos de Cam, segundo as suas famílias, segundo as suas línguas, em suas terras, em suas nações.
²¹ E a Sem nasceram filhos, e ele é o pai de todos os filhos de Éber e o irmão mais velho de Jafé.
²² Os filhos de Sem são: Elão, e Assur, e Arfaxade, e Lude, e Arã.
²³ E os filhos de Arã são: Uz, e Hul, e Geter, e Más.
²⁴ E Arfaxade gerou a Salá; e Salá gerou a Éber.
²⁵ E a Éber nasceram dois filhos: o nome de um foi Pelegue, porquanto em seus dias se repartiu a terra; e o nome do seu irmão foi Joctã.
²⁶ E Joctã gerou a Almodá, e a Selefe, e a Hazar-Mavé, e a Jerá,
²⁷ e a Hadorão, e a Uzal, e a Dicla,
²⁸ e a Obal, e a Abimael, e a Sabá,
²⁹ e a Ofir, e a Havilá, e a Jobabe; todos estes foram filhos de Joctã.
³⁰ E foi a sua habitação desde Messa, indo para Sefar, montanha do Oriente.
³¹ Estes são os filhos de Sem, segundo as suas famílias, segundo as suas línguas, em suas terras, em suas nações.
³² Estas são as famílias dos filhos de Noé, segundo as suas gerações, em suas nações; e destes foram divididas as nações na terra, depois do dilúvio`,
            
            // O DESAFIO
            pergunta: {
                texto: "Quem foi o descendente de Cuxe descrito como um 'poderoso caçador diante do Senhor' e fundador de reinos como Babel?",
                opcoes: [
                    { numero: 1, texto: "Ninrode", correta: true },
                    { numero: 2, texto: "Pelegue", correta: false },
                    { numero: 3, texto: "Joctã", correta: false },
                    { numero: 4, texto: "Sidom", correta: false }
                ],
                explicacao: "Gênesis 10:8-10 - Ninrode foi o primeiro a ser poderoso na terra e o seu reino começou em Babel e outras cidades na terra de Sinar.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 11 ---
        11: {
            titulo: "A Torre de Babel",
            subtitulo: "A confusão das línguas e a dispersão dos povos",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `¹ E era toda a terra de uma mesma língua e de uma mesma fala.
² E aconteceu que, partindo eles do Oriente, acharam um vale na terra de Sinar; e habitaram ali.
³ E disseram uns aos outros: Eia, façamos tijolos e queimemo-los bem. E foi-lhes o tijolo por pedra, e o betume, por cal.
⁴ E disseram: Eia, edifiquemos nós uma cidade e uma torre cujo cume toque nos céus e façamo-nos um nome, para que não sejamos espalhados sobre a face de toda a terra.
⁵ Então, desceu o Senhor para ver a cidade e a torre que os filhos dos homens edificavam;
⁶ e o Senhor disse: Eis que o povo é um, e todos têm uma mesma língua; e isto é o que começam a fazer; e, agora, não haverá restrição para tudo o que eles intentarem fazer.
  A confusão das línguas
⁷ Eia, desçamos e confundamos ali a sua língua, para que não entenda um a língua do outro.
⁸ Assim, o Senhor os espalhou dali sobre a face de toda a terra; e cessaram de edificar a cidade.
⁹ Por isso, se chamou o seu nome Babel, porquanto ali confundiu o Senhor a língua de toda a terra e dali os espalhou o Senhor sobre a face de toda a terra.
¹⁰ Estas são as gerações de Sem: Sem era da idade de cem anos e gerou a Arfaxade, dois anos depois do dilúvio.
¹¹ E viveu Sem, depois que gerou a Arfaxade, quinhentos anos; e gerou filhos e filhas.
¹² E viveu Arfaxade trinta e cinco anos e gerou a Salá.
¹³ E viveu Arfaxade, depois que gerou a Salá, quatrocentos e três anos; e gerou filhos e filhas.
¹⁴ E viveu Salá trinta anos e gerou a Éber.
¹⁵ E viveu Salá, depois que gerou a Éber, quatrocentos e três anos; e gerou filhos e filhas.
¹⁶ E viveu Éber trinta e quatro anos e gerou a Pelegue.
¹⁷ E viveu Éber, depois que gerou a Pelegue, quatrocentos e trinta anos; e gerou filhos e filhas.
¹⁸ E viveu Pelegue trinta anos e gerou a Reú.
¹⁹ E viveu Pelegue, depois que gerou a Reú, duzentos e nove anos; e gerou filhos e filhas.
²⁰ E viveu Reú trinta e dois anos e gerou a Serugue.
²¹ E viveu Reú, depois que gerou a Serugue, duzentos e sete anos; e gerou filhos e filhas.
²² E viveu Serugue trinta anos e gerou a Naor.
²³ E viveu Serugue, depois que gerou a Naor, duzentos anos; e gerou filhos e filhas.
²⁴ E viveu Naor vinte e nove anos e gerou a Tera.
²⁵ E viveu Naor, depois que gerou a Tera, cento e dezenove anos; e gerou filhos e filhas.
²⁶ E viveu Tera setenta anos e gerou a Abrão, a Naor e a Harã.
²⁷ E estas são as gerações de Tera: Tera gerou a Abrão, a Naor e a Harã; e Harã gerou a Ló ²⁷ Ló.
²⁸ E morreu Harã, estando seu pai Tera ainda vivo, na terra do seu nascimento, em Ur dos caldeus.
²⁹ E tomaram Abrão e Naor mulheres para si; o nome da mulher de Abrão era Sarai, e o nome da mulher de Naor era Milca, filha de Harã, pai de Milca e pai de Iscá.
³⁰ E Sarai foi estéril e não tinha filhos.
³¹ E tomou Tera a Abrão, seu filho, e a Ló, filho de Harã, filho de seu filho, e a Sarai, sua nora, mulher de seu filho Abrão, e saiu com eles de Ur dos caldeus, para ir à terra de Canaã; e vieram até Harã e habitaram ali.
³² E foram os dias de Tera duzentos e cinco anos; e morreu Tera em Harã`,
            
            // O DESAFIO
            pergunta: {
                texto: "Por que o lugar onde a torre estava sendo construída passou a se chamar 'Babel'?",
                opcoes: [
                    { numero: 1, texto: "Porque era a cidade mais alta do mundo", correta: false },
                    { numero: 2, texto: "Porque ali o Senhor confundiu a língua de toda a terra", correta: true },
                    { numero: 3, texto: "Em homenagem a Ninrode, o fundador", correta: false },
                    { numero: 4, texto: "Porque significa 'cidade de tijolos'", correta: false }
                ],
                explicacao: "Gênesis 11:9 - O nome Babel está ligado ao fato de o Senhor ter confundido a fala dos homens para que não terminassem a torre.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 12 ---
        12: {
            titulo: "O Chamado de Abrão",
            subtitulo: "A promessa de Deus e a partida para Canaã",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `¹ Ora, o SENHOR disse a Abrão: Sai-te da tua terra, e da tua parentela, e da casa de teu pai, para a terra que eu te mostrarei.
² E far-te-ei uma grande nação, e abençoar-te-ei, e engrandecerei o teu nome, e tu serás uma bênção.
³ E abençoarei os que te abençoarem e amaldiçoarei os que te amaldiçoarem; e em ti serão benditas todas as famílias da terra.
⁴ Assim, partiu Abrão, como o SENHOR lhe tinha dito, e foi Ló com ele; e era Abrão da idade de setenta e cinco anos, quando saiu de Harã.
⁵ E tomou Abrão a Sarai, sua mulher, e a Ló, filho de seu irmão, e toda a sua fazenda, que haviam adquirido, e as almas que lhes acresceram em Harã; e saíram para irem à terra de Canaã; e vieram à terra de Canaã.
⁶ E passou Abrão por aquela terra até ao lugar de Siquém, até ao carvalho de Moré; e estavam, então, os cananeus na terra.
⁷ E apareceu o SENHOR a Abrão e disse: À tua semente darei esta terra. E edificou ali um altar ao SENHOR, que lhe aparecera.
⁸ E moveu-se dali para a montanha à banda do oriente de Betel e armou a sua tenda, tendo Betel ao ocidente e Ai ao oriente; e edificou ali um altar ao SENHOR e invocou o nome do SENHOR.
⁹ Depois, caminhou Abrão dali, seguindo ainda para a banda do Sul.
¹⁰ E havia fome naquela terra; e desceu Abrão ao Egito, para peregrinar ali, porquanto a fome era grande na terra.
¹¹ E aconteceu que, chegando ele para entrar no Egito, disse a Sarai, sua mulher: Ora, bem sei que és mulher formosa à vista;
¹² e será que, quando os egípcios te virem, dirão: Esta é a sua mulher. E matar-me-ão a mim e a ti te guardarão em vida.
¹³ Dize, peço-te, que és minha irmã, para que me vá bem por tua causa, e que viva a minha alma por amor de ti.
¹⁴ E aconteceu que, entrando Abrão no Egito, viram os egípcios a mulher, que era mui formosa.
¹⁵ E viram-na os príncipes de Faraó e gabaram-na diante de Faraó; e foi a mulher levada à casa de Faraó.
¹⁶ E fez bem a Abrão por amor dela; e ele teve ovelhas, e vacas, e jumentos, e servos, e servas, e jumentas, e camelos.
¹⁷ Feriu, porém, o SENHOR a Faraó e a sua casa com grandes pragas, por causa de Sarai, mulher de Abrão.
¹⁸ Então, chamou Faraó a Abrão e disse: Que é isto que me fizeste? Por que não me disseste que ela era tua mulher?
¹⁹ Por que disseste: É minha irmã? De maneira que a tomei por minha mulher; agora, pois, eis aqui tua mulher; toma-a e vai-te.
²⁰ E Faraó deu ordens aos seus varões a seu respeito; e acompanharam-no, a ele, e a sua mulher, e a tudo o que tinha.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Qual foi a promessa central que Deus fez a Abrão ao chamá-lo para sair de sua terra?",
                opcoes: [
                    { numero: 1, texto: "Que ele encontraria um tesouro escondido no Egito", correta: false },
                    { numero: 2, texto: "Que ele seria uma bênção e dele faria uma grande nação", correta: true },
                    { numero: 3, texto: "Que ele deveria construir uma nova torre em Siquém", correta: false },
                    { numero: 4, texto: "Que ele voltaria para a casa de seu pai em poucos dias", correta: false }
                ],
                explicacao: "Gênesis 12:2-3 - Deus prometeu abençoar Abrão, engrandecer seu nome e fazer dele a origem de uma grande nação que abençoaria todas as famílias da terra.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 13 ---
        13: {
            titulo: "A Separação de Abrão e Ló",
            subtitulo: "A escolha das terras e a renovação da promessa",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Subiu, pois, Abrão do Egito para a banda do Sul, ele, e sua mulher, e tudo o que tinha, e Ló com ele.
² E era Abrão muito rico em gado, em prata e em ouro.
³ E fez as suas jornadas do Sul até Betel, até ao lugar onde, ao princípio, estivera a sua tenda, entre Betel e Ai;
⁴ até ao lugar do altar que, dantes, ali tinha feito; e Abrão invocou ali o nome do SENHOR.
⁵ E também Ló, que ia com Abrão, tinha ovelhas, e vacas, e tendas.
⁶ E não tinha capacidade a terra para poderem habitar juntos, porque a sua fazenda era muita; de maneira que não podiam habitar juntos.
⁷ E houve contenda entre os pastores do gado de Abrão e os pastores do gado de Ló; e os cananeus e os ferezeus habitavam, então, na terra.
⁸ E disse Abrão a Ló: Ora, não haja contenda entre mim e ti e entre os meus pastores e os teus pastores, porque irmãos somos.
⁹ Não está toda a terra diante de ti? Eia, pois, aparta-te de mim; se escolheres a esquerda, irei para a direita; e, se a direita escolheres, eu irei para a esquerda.
¹⁰ E levantou Ló os seus olhos e viu toda a campina do Jordão, que era toda bem regada, antes de o SENHOR ter destruído Sodoma e Gomorra, e era como o jardim do SENHOR, como a terra do Egito, quando se entra em Zoar.
¹¹ Então, Ló escolheu para si toda a campina do Jordão e partiu Ló para o Oriente; e apartaram-se um do outro.
¹² Habitou Abrão na terra de Canaã, e Ló habitou nas cidades da campina e armou as suas tendas até Sodoma.
¹³ Ora, eram maus os varões de Sodoma e grandes pecadores contra o SENHOR.
¹⁴ E disse o SENHOR a Abrão, depois que Ló se apartou dele: Levanta, agora, os teus olhos e olha desde o lugar onde estás, para a banda do Norte, e do Sul, e do Oriente, e do Ocidente;
¹⁵ porque toda esta terra que vês te hei de dar a ti e à tua semente, para sempre.
¹⁶ E farei a tua semente como o pó da terra; de maneira que, se alguém puder contar o pó da terra, também a tua semente será contada.
¹⁷ Levanta-te, percorre esta terra, no seu comprimento e na sua largura; porque a ti a darei.
¹⁸ E Abrão armou as suas tendas, e veio, e habitou nos carvalhais de Manre, que estão junto a Hebrom; e edificou ali um altar ao SENHOR.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Para onde Ló decidiu ir quando Abrão lhe deu o direito de escolher primeiro para onde seguir?",
                opcoes: [
                    { numero: 1, texto: "Para os carvalhais de Manre, em Hebrom", correta: false },
                    { numero: 2, texto: "Para o deserto do Sul, próximo ao Egito", correta: false },
                    { numero: 3, texto: "Para a campina do Jordão, em direção a Sodoma", correta: true },
                    { numero: 4, texto: "Para as montanhas entre Betel e Ai", correta: false }
                ],
                explicacao: "Gênesis 13:10-12 - Ló escolheu a campina do Jordão por ser bem regada, armando suas tendas até Sodoma, enquanto Abrão ficou na terra de Canaã.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 14 ---
        14: {
            titulo: "A Guerra dos Reis",
            subtitulo: "O resgate de Ló e o encontro com Melquisedeque",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E aconteceu, nos dias de Anrafel, rei de Sinar, de Arioque, rei de Elasar, de Quedorlaomer, rei de Elão, e de Tidal, rei de Goim,
² que estes fizeram guerra a Bera, rei de Sodoma, a Birsa, rei de Gomorra, a Sinabe, rei de Admá, e a Semeber, rei de Zeboim, e ao rei de Belá (esta é Zoar).
³ Todos estes se ajuntaram no vale de Sidim (que é o mar Salgado).
⁴ Doze anos haviam servido a Quedorlaomer, mas, ao décimo terceiro ano, rebelaram-se.
⁵ E, ao décimo quarto ano, veio Quedorlaomer e os reis que estavam com ele e feriram os refains em Asterote-Carnaim, e os zuzins em Ham, e os emins em Savé-Quiriataim,
⁶ e os horeus no seu monte Seir, até El-Parã, que está junto ao deserto.
⁷ Depois, voltaram e vieram a En-Mispate (que é Cades) e feriram toda a terra dos amalequitas e também os amorreus, que habitavam em Hazazom-Tamar.
⁸ Então, saiu o rei de Sodoma, e o rei de Gomorra, e o rei de Admá, e o rei de Zeboim, e o rei de Belá (esta é Zoar) e ordenaram batalha contra eles no vale de Sidim,
⁹ contra Quedorlaomer, rei de Elão, e Tidal, rei de Goim, e Anrafel, rei de Sinar, e Arioque, rei de Elasar; quatro reis contra cinco.
¹⁰ E o vale de Sidim estava cheio de poços de betume; e fugiram os reis de Sodoma e de Gomorra e caíram ali; e os restantes fugiram para um monte.
¹¹ E tomaram toda a fazenda de Sodoma e de Gomorra e todo o seu mantimento e foram-se.
¹² Também tomaram a Ló, que habitava em Sodoma, filho do irmão de Abrão, e a sua fazenda e foram-se.
¹³ Então, veio um que escapara e o contou a Abrão, o hebreu; ele habitava nos carvalhais de Manre, o amorreu, irmão de Escol e irmão de Aner; estes eram confederados de Abrão.
¹⁴ Ouvindo, pois, Abrão que o seu irmão estava preso, armou os seus criados, nascidos em sua casa, trezentos e dezoito, e os perseguiu até Dã.
¹⁵ E repartiu-se contra eles de noite, ele e os seus criados, e os feriu, e os perseguiu até Hobá, que está à esquerda de Damasco.
¹⁶ E tornou a trazer toda a fazenda e tornou a trazer também a Ló, seu irmão, e a sua fazenda, e também as mulheres, e o povo.
¹⁷ E o rei de Sodoma saiu-lhe ao encontro (depois que voltou de ferir a Quedorlaomer e aos reis que estavam com ele) no vale de Savé, que é o vale do Rei.
¹⁸ E Melquisedeque, rei de Salém, trouxe pão e vinho; e este era sacerdote do Deus Altíssimo.
¹⁹ E abençoou-o e disse: Bendito seja Abrão pelo Deus Altíssimo, o Possuidor dos céus e da terra;
²⁰ e bendito seja o Deus Altíssimo, que entregou os teus inimigos nas tuas mãos. E deu-lhe o dízimo de tudo.
²¹ E o rei de Sodoma disse a Abrão: Dá-me a mim as almas e a fazenda toma para ti.
²² Abrão, porém, disse ao rei de Sodoma: Levantei minha mão ao SENHOR, o Deus Altíssimo, o Possuidor dos céus e da terra,
²³ e juro que, desde um fio até à correia dum sapato, não tomarei coisa alguma de tudo o que é teu; para que não digas: Eu enriqueci a Abrão;
²⁴ salvo tão-somente o que os jovens comeram e a parte que toca aos varões que comigo foram, Aner, Escol e Manre; estes que tomem a sua parte.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Quem era Melquisedeque, que trouxe pão e vinho e abençoou Abrão após a vitória?",
                opcoes: [
                    { numero: 1, texto: "O Rei de Sodoma", correta: false },
                    { numero: 2, texto: "O Rei de Salém e Sacerdote do Deus Altíssimo", correta: true },
                    { numero: 3, texto: "Um general do exército de Abrão", correta: false },
                    { numero: 4, texto: "O pai de Ló", correta: false }
                ],
                explicacao: "Gênesis 14:18-20 - Melquisedeque, rei de Salém, era sacerdote de Deus e recebeu os dízimos de Abrão em sinal de honra.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 15 ---
        15: {
            titulo: "A Aliança de Deus com Abrão",
            subtitulo: "A promessa do herdeiro e a visão das estrelas",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Depois destas coisas veio a palavra do SENHOR a Abrão em visão, dizendo: Não temas, Abrão, eu sou o teu escudo, o teu grandíssimo galardão.
² Então, disse Abrão: Senhor Jeová, que me hás de dar? Pois ando sem filhos, e o mordomo da minha casa é o damasceno Eliézer.
³ Disse mais Abrão: Eis que me não tens dado semente, e eis que um nascido na minha casa será o meu herdeiro.
⁴ E eis que veio a palavra do SENHOR a ele, dizendo: Este não será o teu herdeiro; mas aquele que de ti sair, esse será o teu herdeiro.
⁵ Então, o levou fora e disse: Olha, agora, para os céus e conta as estrelas, se as podes contar. E disse-lhe: Assim será a tua semente.
⁶ E creu ele no SENHOR, e imputou-lhe isto por justiça.
⁷ Disse-lhe mais: Eu sou o SENHOR, que te tirei de Ur dos caldeus, para dar-te a ti esta terra, para a herdares.
⁸ E disse ele: Senhor Jeová, como saberei que hei de herdá-la?
⁹ E disse-lhe: Toma-me uma bezerra de três anos, e uma cabra de um ano e três meses, e um carneiro de três anos, e uma rola, e um pombinho.
¹⁰ E trouxe-lhe todos estes, e partiu-os pelo meio, e pôs cada parte deles em frente da outra; mas as aves não partiu.
¹¹ E as aves desciam sobre os cadáveres; Abrão, porém, as enxotava.
¹² E, pondo-se o sol, um profundo sono caiu sobre Abrão; e eis que grande pavor e trevas caíram sobre ele.
¹³ Então, disse a Abrão: Saiba, muito por certo, que a tua semente será peregrina em terra alheia, e servirá a eles, e afligi-los-ão quatrocentos anos.
¹⁴ Mas também eu julgarei a nação à qual servirem, e depois sairão com grande fazenda.
¹⁵ E tu irás a teus pais em paz; em boa velhice serás sepultado.
¹⁶ E a quarta geração tornará para cá; porque a medida da injustiça dos amorreus não está ainda cheia.
¹⁷ E sucedeu que, posto o sol, houve escuridão; e eis um forno de fumaça e uma tocha de fogo que passou por entre aquelas metades.
¹⁸ Naquele mesmo dia, fez o SENHOR um concerto com Abrão, dizendo: À tua semente tenho dado esta terra, desde o rio do Egito até ao grande rio Eufrates;
¹⁹ e o queneu, e o quenezeu, e o cadmoneu,
²⁰ e o heteu, e o ferezeu, e os refains,
²¹ e o amorreu, e o cananeu, e o girgaseu, e o jebuseu.`,
            
            // O DESAFIO
            pergunta: {
                texto: "O que Deus pediu para Abrão contar para ilustrar como seria a sua descendência?",
                opcoes: [
                    { numero: 1, texto: "Os grãos de areia da praia", correta: false },
                    { numero: 2, texto: "As pedras do caminho para o Egito", correta: false },
                    { numero: 3, texto: "As estrelas dos céus", correta: true },
                    { numero: 4, texto: "As ovelhas do seu rebanho", correta: false }
                ],
                explicacao: "Gênesis 15:5 - Deus levou Abrão para fora e disse: 'Olha agora para os céus e conta as estrelas, se as podes contar. Assim será a tua semente'.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 16 ---
        16: {
            titulo: "Hagar e o nascimento de Ismael",
            subtitulo: "A aflição no deserto e o Deus que tudo vê",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Ora, Sarai, mulher de Abrão, não lhe dava filhos, e ele tinha uma serva egípcia, cujo nome era Agar.
² E disse Sarai a Abrão: Eis que o SENHOR me tem impedido de parir; entra, pois, à minha serva; porventura, terei filhos dela. E ouviu Abrão a voz de Sarai.
³ Assim, tomou Sarai, mulher de Abrão, a Agar, egípcia, sua serva (ao cabo de dez anos que Abrão habitara na terra de Canaã), e deu-a por mulher a Abrão, seu marido.
⁴ E ele entrou a Agar, e ela concebeu; e, vendo ela que concebera, foi sua senhora desprezada aos seus olhos.
⁵ Então, disse Sarai a Abrão: Meu agravo seja sobre ti. Eu pus a minha serva em teu seio; vendo ela, agora, que concebeu, sou desprezada aos seus olhos. O SENHOR julgue entre mim e ti.
⁶ E disse Abrão a Sarai: Eis que tua serva está na tua mão; faze-lhe o que bom é aos teus olhos. E afligiu-a Sarai, e ela fugiu de sua face.
⁷ E o Anjo do SENHOR a achou junto a uma fonte de água no deserto, junto à fonte no caminho de Sur.
⁸ E disse: Agar, serva de Sarai, donde vens e para onde vais? E ela disse: Venho fugida da face de Sarai, minha senhora.
⁹ Então, lhe disse o Anjo do SENHOR: Torna-te para tua senhora e humilha-te debaixo de suas mãos.
¹⁰ Disse-lhe mais o Anjo do SENHOR: Multiplicarei sobremaneira a tua semente, que não será contada, por numerosa que será.
¹¹ Disse-lhe também o Anjo do SENHOR: Eis que concebeste, e terás um filho, e chamarás o seu nome Ismael, porquanto o SENHOR ouviu a tua aflição.
¹² E ele será homem bravo; e a sua mão será contra todos, e a mão de todos, contra ele; e habitará diante da face de todos os seus irmãos.
¹³ E ela chamou o nome do SENHOR, que com ela falava: Tu és o Deus da vista, porque disse: Não olhei eu também para aquele que me vê?
¹⁴ Por isso, se chamou aquele poço Beer-Laai-Roi; eis que está entre Cades e Berede.
¹⁵ E Agar deu à luz um filho a Abrão; e Abrão chamou o nome do seu filho que Agar tivera, Ismael.
¹⁶ E era Abrão da idade de oitenta e seis anos, quando Agar deu à luz Ismael a Abrão.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Qual o nome que o Anjo do Senhor ordenou que fosse dado ao filho de Hagar?",
                opcoes: [
                    { numero: 1, texto: "Eliézer", correta: false },
                    { numero: 2, texto: "Ismael", correta: true },
                    { numero: 3, texto: "Isaque", correta: false },
                    { numero: 4, texto: "Enoque", correta: false }
                ],
                explicacao: "Gênesis 16:11 - O Anjo disse que o nome seria Ismael, que significa 'Deus ouve', pois o Senhor ouviu a sua aflição.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 17 ---
        17: {
            titulo: "A Aliança Confirmada",
            subtitulo: "A mudança dos nomes e a promessa de Isaque",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `¹ Sendo, pois, Abrão da idade de noventa e nove anos, apareceu o SENHOR a Abrão e disse-lhe: Eu sou o Deus Todo-Poderoso; anda em minha presença e sê perfeito.
² E porei o meu concerto entre mim e ti e te multiplicarei grandissimamente.
³ Então, caiu Abrão sobre o seu rosto, e falou Deus com ele, dizendo:
⁴ Quanto a mim, eis o meu concerto contigo é, e serás o pai de uma multidão de nações.
⁵ E não se chamará mais o teu nome Abrão, mas Abraão será o teu nome; porque por pai de uma multidão de nações te tenho posto.
⁶ E te farei frutificar grandissimamente e de ti farei nações, e reis sairão de ti.
⁷ E estabelecerei o meu concerto entre mim e ti e a tua semente depois de ti em suas gerações, por concerto eterno, para te ser a ti por Deus e à tua semente depois de ti.
⁸ E te darei a ti e à tua semente depois de ti a terra de tuas peregrinações, toda a terra de Canaã em perpétua possessão, e ser-lhes-ei o seu Deus.
⁹ Disse mais Deus a Abraão: Tu, porém, guardarás o meu concerto, tu e a tua semente depois de ti, nas suas gerações.
¹⁰ Este é o meu concerto, que guardareis entre mim e vós e a tua semente depois de ti: Que todo macho será circuncidado.
¹¹ E circuncidareis a carne do vosso prepúcio; e isto será por sinal do concerto entre mim e vós.
¹² O filho de oito dias, pois, será circuncidado; todo macho nas vossas gerações, o nascido na casa e o comprado por dinheiro a qualquer estrangeiro, que não for da tua semente.
¹³ Com efeito, será circuncidado o nascido em tua casa e o comprado por teu dinheiro; e estará o meu concerto na vossa carne por concerto perpétuo.
¹⁴ E o macho com prepúcio, cuja carne do prepúcio não for circuncidada, aquela alma será extirpada do seu povo; quebrou o meu concerto.
¹⁵ Disse Deus mais a Abraão: A Sarai, tua mulher, não chamarás mais pelo nome de Sarai, mas Sara será o seu nome.
¹⁶ Porque eu a abençoarei e também te darei dela um filho; e a abençoarei, e será mãe das nações; reis de povos sairão dela.
¹⁷ Então, caiu Abraão sobre o seu rosto, e rindo-se, e disse no seu coração: A um homem de cem anos há de nascer um filho? E parirá Sara, de noventa anos?
¹⁸ E disse Abraão a Deus: Tomara que viva Ismael diante de teu rosto!
¹⁹ E disse Deus: Na verdade, Sara, tua mulher, te dará um filho, e chamarás o seu nome Isaque; e com ele estabelecerei o meu concerto, por concerto eterno para a sua semente depois dele.
²⁰ E, quanto a Ismael, também te tenho ouvido: eis aqui o tenho abençoado, e fá-lo-ei frutificar, e multiplicá-lo-ei grandissimamente; doze príncipes gerará, e dele farei uma grande nação.
²¹ O meu concerto, porém, estabelecerei com Isaque, o qual Sara te dará neste tempo determinado, no ano seguinte.
²² E acabou de falar com ele e subiu Deus de Abraão.
²³ Então, tomou Abraão a seu filho Ismael, e a todos os nascidos na sua casa, e a todos os comprados por seu dinheiro, todo macho entre os varões da casa de Abraão, e circuncidou a carne do seu prepúcio, naquele mesmo dia, como Deus falara com ele.
²⁴ E era Abraão da idade de noventa e nove anos, quando lhe foi circuncidada a carne do seu prepúcio.
²⁵ E Ismael, seu filho, era da idade de treze anos, quando lhe foi circuncidada a carne do seu prepúcio.
²⁶ Naquele mesmo dia, foi circuncidado Abraão e Ismael, seu filho.
²⁷ E todos os varões da sua casa, o nascido em casa e o comprado por dinheiro ao estrangeiro, foram circuncidados com ele.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Quais os novos nomes que Deus deu a Abrão e Sarai como sinal de que seriam pais de nações?",
                opcoes: [
                    { numero: 1, texto: "Adão e Eva", correta: false },
                    { numero: 2, texto: "Israel e Raquel", correta: false },
                    { numero: 3, texto: "Abraão e Sara", correta: true },
                    { numero: 4, texto: "Isaque e Rebeca", correta: false }
                ],
                explicacao: "Gênesis 17:5,15 - Deus mudou o nome de Abrão para Abraão (pai de multidão) e de Sarai para Sara (princesa), confirmando a promessa.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 18 ---
        18: {
            titulo: "A Visita dos Três Varões",
            subtitulo: "A promessa a Sara e a intercessão por Sodoma",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Depois, apareceu-lhe o SENHOR nos carvalhais de Manre, estando ele assentado à porta da tenda, quando tinha aquecido o dia.
² E levantou os olhos e olhou, e eis três varões estavam em pé junto a ele. E, vendo-os, correu da porta da tenda ao seu encontro, e inclinou-se à terra,
³ e disse: Meu Senhor, se agora tenho achado graça aos teus olhos, rogo-te que não passes de teu servo.
⁴ Traga-se, ora, um pouco de água; e lavai os vossos pés e recostai-vos debaixo desta árvore;
⁵ e trarei um bocado de pão, para que esforceis o vosso coração; depois, passareis adiante, porquanto por isso chegastes até vosso servo. E disseram: Faz assim como disseste.
⁶ E Abraão apressou-se a ir ter com Sara à tenda e disse-lhe: Amassa depressa três medidas de flor de farinha e faze bolos sob a cinza.
⁷ E correu Abraão ao gado, e tomou um vitelo terno e bom, e deu-o ao moço, que se apressou em prepará-lo.
⁸ E tomou manteiga e leite e o vitelo que tinha preparado e pôs tudo diante deles; e ele estava em pé junto a eles debaixo da árvore; e comeram.
⁹ E disseram-lhe: Onde está Sara, tua mulher? E ele disse: Ei-la ali na tenda.
¹⁰ E disse: Certamente tornarei a ti por este tempo da vida; e eis que Sara, tua mulher, terá um filho. E ouviu-o Sara à porta da tenda, que estava atrás dele.
¹¹ E eram Abraão e Sara já velhos e adiantados em idade; já a Sara havia cessado o costume das mulheres.
¹² Assim, pois, riu-se Sara consigo, dizendo: Terei ainda deleite depois de haver envelhecido, sendo também o meu senhor já velho?
¹³ E disse o SENHOR a Abraão: Por que se riu Sara, dizendo: Na verdade, parirei eu ainda, havendo já envelhecido?
¹⁴ Haveria coisa alguma difícil ao SENHOR? Ao tempo determinado, tornarei a ti por este tempo da vida, e Sara terá um filho.
¹⁵ E Sara negou, dizendo: Não me ri; porque temeu. E ele disse: Não digas isso, porque te riste.
¹⁶ E levantaram-se aqueles varões dali e olharam para a banda de Sodoma; e Abraão ia com eles, acompanhando-os.
¹⁷ E disse o SENHOR: Ocultarei eu a Abraão o que faço,
¹⁸ visto que Abraão certamente virá a ser uma grande e poderosa nação, e nele serão benditas todas as nações da terra?
¹⁹ Porque eu o tenho conhecido, que ele há de ordenar a seus filhos e a sua casa depois dele, para que guardem o caminho do SENHOR, para operarem justiça e juízo; para que o SENHOR faça vir sobre Abraão o que acerca dele tem falado.
²⁰ Disse mais o SENHOR: Porquanto o clamor de Sodoma e Gomorra se multiplicou, e porquanto o seu pecado se tem agravado muito,
²¹ descerei agora e verei se, com efeito, têm praticado segundo este clamor que é vindo até mim; e, se não, sabê-lo-ei.
²² Então, viraram aqueles varões o rosto dali e foram-se para Sodoma; mas Abraão ficou ainda em pé diante da face do SENHOR.
²³ E chegou-se Abraão e disse: Destruirás também o justo com o ímpio?
²⁴ Se, porventura, houver cinquenta justos na cidade, destruirás também e não pouparás o lugar por causa dos cinquenta justos que estão dentro dela?
²⁵ Longe de ti que faças tal coisa, que mates o justo com o ímpio; que o justo seja como o ímpio, longe de ti. Não faria justiça o Juiz de toda a terra?
²⁶ Então, disse o SENHOR: Se eu em Sodoma achar cinquenta justos dentro da cidade, pouparei todo o lugar por amor deles.
²⁷ E respondeu Abraão e disse: Eis que, agora, me atrevi a falar ao Senhor, ainda que sou pó e cinza.
²⁸ Se, porventura, de cinquenta justos faltarem cinco, destruirás por aqueles cinco toda a cidade? E disse: Não a destruirei, se eu achar ali quarenta e cinco.
²⁹ E continuou ainda a falar-lhe e disse: Se, porventura, se acharem ali quarenta? E disse: Não o farei por amor dos quarenta.
³⁰ Disse mais: Ora, não se ire o Senhor, se eu falar: Se, porventura, se acharem ali trinta? E disse: Não o farei se achar ali trinta.
³¹ E disse: Eis que, agora, me atrevi a falar ao Senhor: Se, porventura, se acharem ali vinte? E disse: Não a destruirei por amor dos vinte.
³² Disse mais: Ora, não se ire o Senhor, que ainda só esta vez falo: Se, porventura, se acharem ali dez? E disse: Não a destruirei por amor dos dez.
³³ E foi-se o SENHOR, logo que acabou de falar a Abraão; e Abraão tornou-se ao seu lugar.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Até que número mínimo de justos Abraão negociou com o Senhor para que Sodoma não fosse destruída?",
                opcoes: [
                    { numero: 1, texto: "Cinquenta justos", correta: false },
                    { numero: 2, texto: "Trinta justos", correta: false },
                    { numero: 3, texto: "Dez justos", correta: true },
                    { numero: 4, texto: "Apenas um justo", correta: false }
                ],
                explicacao: "Gênesis 18:32 - Abraão intercedeu persistentemente, e o Senhor prometeu que não destruiria a cidade se encontrasse ali pelo menos dez justos.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 19 ---
        19: {
            titulo: "A Destruição de Sodoma e Gomorra",
            subtitulo: "O livramento de Ló e o juízo sobre as cidades da campina",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E vieram os dois anjos a Sodoma à tarde, e estava Ló assentado à porta de Sodoma; e, vendo-os Ló, levantou-se ao seu encontro e inclinou-se com o rosto à terra.
² E disse: Eis agora, meus senhores, vinde, peço-vos, à casa de vosso servo, e pernoitai, e lavai os vossos pés; e de madrugada vos levantareis e ireis vosso caminho. E eles disseram: Não! Antes, na rua pernoitaremos.
³ E porfiou com eles muito, e vieram com ele e entraram em sua casa; e fez-lhes banquete e cozeu bolos sem levedo, e comeram.
⁴ E, antes que se deitassem, cercaram a casa os varões daquela cidade, os varões de Sodoma, desde o moço até ao velho; todo o povo de todos os lados.
⁵ E chamaram a Ló e disseram-lhe: Onde estão os varões que a ti vieram nesta noite? Traze-os fora a nós, para que os conheçamos.
⁶ Então, saiu Ló a eles à porta, e fechou a porta atrás de si,
⁷ e disse: Meus irmãos, rogo-vos que não façais mal;
⁸ eis aqui, tenho duas filhas que ainda não conheceram varão; fora vo-las trarei, e fazei delas como bom for aos vossos olhos; somente nada façais a estes varões, porque por isso vieram à sombra do meu telhado.
⁹ Eles, porém, disseram: Sai daí. Disseram mais: Como estrangeiro este veio habitar e quereria ser juiz em tudo? Agora, te faremos mais mal a ti do que a eles. E arremeteram-se sobre o varão, sobre Ló, e ajuntaram-se para arrombar a porta.
¹⁰ Aqueles varões, porém, estenderam a sua mão e fizeram entrar a Ló consigo na casa e fecharam a porta;
¹¹ e feriram de cegueira os varões que estavam à porta da casa, desde o menor até ao maior, de maneira que se cansaram para achar a porta.
¹² Então, disseram aqueles varões a Ló: Tens aqui alguém mais? Teu genro, e teus filhos, e tuas filhas, e todos quantos tens nesta cidade, tira-os fora deste lugar;
¹³ porque nós vamos destruir este lugar, porque o seu clamor se tem aumentado diante da face do SENHOR, e o SENHOR nos enviou a destruí-lo.
¹⁴ Então, saiu Ló, e falou a seus genros, aos que haviam de tomar as suas filhas, e disse: Levantai-vos; saí deste lugar, porque o SENHOR há de destruir a cidade. Foi, porém, tido por zombador aos olhos de seus genros.
¹⁵ E, ao amanhecer, os anjos apertaram com Ló, dizendo: Levanta-te, toma tua mulher e tuas duas filhas que aqui se acham, para que não pereças na injustiça desta cidade.
¹⁶ Ele, porém, demorava-se, e aqueles varões lhe pegaram pela mão, e pela mão de sua mulher, e pela mão de suas duas filhas, sendo-lhe o SENHOR misericordioso, e tiraram-no, e puseram-no fora da cidade.
¹⁷ E aconteceu que, tirando-os fora, disse: Escapa-te por tua vida; não olhes para trás de ti e não pares em toda esta campina; escapa lá para o monte, para que não pereças.
¹⁸ E Ló disse-lhes: Ora, não, meu Senhor!
¹⁹ Eis que, agora, o teu servo tem achado graça aos teus olhos, e engrandeceste a tua misericórdia que a mim me fizeste, para guardar a minha alma em vida; mas eu não posso escapar no monte, para que, porventura, este mal me não alcance, e eu morra.
²⁰ Eis que, agora, aquela cidade está perto, para fugir para lá, e é pequena; permita que eu escape para lá (não é pequena?), para que minha alma viva.
²¹ E disse-lhe: Eis aqui, tenho-te aceitado também neste negócio, para não destruir esta cidade de que falaste.
²² Apressa-te, escapa-te para ali; porque nada poderei fazer enquanto não tiveres ali chegado. Por isso, se chamou o nome da cidade Zoar.
²³ Saiu o sol sobre a terra, quando Ló entrou em Zoar.
²⁴ Então, o SENHOR fez chover enxofre e fogo, do SENHOR desde os céus, sobre Sodoma e Gomorra;
²⁵ e destruiu aquelas cidades, e toda aquela campina, e todos os moradores daquelas cidades, e o que nascia na terra.
²⁶ E a mulher de Ló olhou para trás e ficou convertida numa estátua de sal.
²⁷ E Abraão levantou-se de madrugada e foi ao lugar onde estivera em pé diante do SENHOR.
²⁸ E olhou para Sodoma e Gomorra e para toda a terra da campina; e viu, e eis que o fumo da terra subia, como o fumo duma fornalha.
²⁹ E aconteceu que, destruindo Deus as cidades da campina, Deus se lembrou de Abraão e tirou Ló do meio da destruição, derrubando aquelas cidades em que Ló habitara.
³⁰ E subiu Ló de Zoar e habitou no monte, e as suas duas filhas com ele; porque temia habitar em Zoar; e habitou numa caverna, ele e as suas duas filhas.
³¹ Então, a primogênita disse à menor: Nosso pai é já velho, e não há varão na terra que entre a nós, segundo o costume de toda a terra.
³² Vem, demos de beber vinho a nosso pai e deitemo-nos com ele, para que conservemos semente de nosso pai.
³³ E deram de beber vinho a seu pai naquela noite; e veio a primogênita e deitou-se com seu pai, e não sentiu ele quando ela se deitou, nem quando se levantou.
³⁴ E sucedeu, no dia seguinte, que a primogênita disse à menor: Eis que já ontem à noite me deitei com meu pai; demos-lhe de beber vinho também esta noite, e entra tu, deita-te com ele, para que conservemos semente de nosso pai.
³⁵ E deram de beber vinho a seu pai também naquela noite; e levantou-se a menor e deitou-se com ele; e não sentiu ele quando ela se deitou, nem quando se levantou.
³⁶ E conceberam as duas filhas de Ló de seu pai.
³⁷ E a primogênita deu à luz um filho e chamou o seu nome Moabe; este é o pai dos moabitas até ao dia de hoje.
³⁸ E a menor também deu à luz um filho e chamou o seu nome Ben-Ami; este é o pai dos filhos de Amom até ao dia de hoje.`,
            
            // O DESAFIO
            pergunta: {
                texto: "O que aconteceu com a mulher de Ló quando ela desobedeceu à ordem dos anjos e olhou para trás durante a fuga?",
                opcoes: [
                    { numero: 1, texto: "Ela se perdeu no deserto e voltou para a cidade", correta: false },
                    { numero: 2, texto: "Ela foi atingida por uma rocha que caiu do monte", correta: false },
                    { numero: 3, texto: "Ela ficou convertida numa estátua de sal", correta: true },
                    { numero: 4, texto: "Ela subiu aos céus junto com os anjos", correta: false }
                ],
                explicacao: "Gênesis 19:26 - Ao olhar para trás, para a destruição de Sodoma, a mulher de Ló tornou-se uma estátua de sal, servindo de aviso sobre a falta de desprendimento do passado.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 20 ---
        20: {
            titulo: "Abraão e Abimeleque",
            subtitulo: "A proteção de Sara em Gerar e a integridade de Abimeleque",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E partiu Abraão dali para a terra do Sul e habitou entre Cades e Sur; e peregrinou em Gerar.
² E disse Abraão de Sara, sua mulher: É minha irmã; e enviou Abimeleque, rei de Gerar, e tomou a Sara.
³ Deus, porém, veio a Abimeleque em sonhos de noite e disse-lhe: Eis que morto serás por causa da mulher que tomaste; porque ela está casada com marido.
⁴ Mas Abimeleque ainda não se tinha chegado a ela; por isso, disse: Senhor, matarás também uma nação justa?
⁵ Não me disse ele mesmo: É minha irmã? E ela também disse: É meu irmão. Na sinceridade do meu coração e na limpeza das minhas mãos, fiz isto.
⁶ E disse-lhe Deus em sonhos: Bem sei eu que na sinceridade do teu coração fizeste isto; e também eu te tenho detido de pecar contra mim; por isso, não te permiti tocá-la.
⁷ Agora, pois, restitui a mulher ao seu marido, porque profeta é e rogará por ti, para que vivas; porém, se não a restituíres, sabe que certamente morrerás, tu e tudo o que é teu.
⁸ E levantou-se Abimeleque de madrugada, e chamou todos os seus servos, e falou todas estas palavras em seus ouvidos; e temeram muito estes varões.
⁹ Então, chamou Abimeleque a Abraão e disse-lhe: Que nos fizeste? E em que pequei contra ti, para trazeres sobre mim e sobre o meu reino tamanho pecado? Tu fizeste-me o que não se deve fazer.
¹⁰ Disse mais Abimeleque a Abraão: Que tens visto, para fazeres tal coisa?
¹¹ E disse Abraão: Porque eu dizia comigo: Certamente não há temor de Deus neste lugar, e eles me matarão por causa da minha mulher.
¹² E, na verdade, é ela também minha irmã, filha de meu pai, mas não filha da minha mãe; e veio a ser minha mulher.
¹³ E aconteceu que, fazendo-me Deus sair errante da casa de meu pai, eu lhe disse: Esta é a graça que me farás: em todo o lugar onde chegarmos, dize de mim: É meu irmão.
¹⁴ Então, tomou Abimeleque ovelhas, e vacas, e servos, e servas e os deu a Abraão; e restituiu-lhe Sara, sua mulher.
¹⁵ E disse Abimeleque: Eis que a minha terra está diante da tua face; habita onde bom for aos teus olhos.
¹⁶ E a Sara disse: Eis que tenho dado ao teu irmão mil peças de prata; eis que ele te é por cobertura de olhos para com todos os que estão contigo e perante todos estás justificada.
¹⁷ E orou Abraão a Deus, e sarou Deus a Abimeleque, e a sua mulher, e as suas servas, de maneira que tiveram filhos;
¹⁸ porque o SENHOR havia fechado totalmente todas as madres da casa de Abimeleque, por causa de Sara, mulher de Abraão.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Como Deus impediu que o rei Abimeleque pecasse contra Sara no seu sonho?",
                opcoes: [
                    { numero: 1, texto: "Enviando um anjo para retirá-la do palácio", correta: false },
                    { numero: 2, texto: "Advertindo-o de que ela era casada e que ele morreria se não a restituísse", correta: true },
                    { numero: 3, texto: "Destruindo a cidade de Gerar com fogo", correta: false },
                    { numero: 4, texto: "Transformando Sara em uma estátua para protegê-la", correta: false }
                ],
                explicacao: "Gênesis 20:3-7 - Deus apareceu a Abimeleque em sonho, revelando que Sara era mulher de Abraão e ordenando sua restituição para que o rei não morresse.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 21 ---
        21: {
            titulo: "O Nascimento de Isaque",
            subtitulo: "O cumprimento da promessa e a aliança em Berseba",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E o SENHOR visitou a Sara, como tinha dito; e fez o SENHOR a Sara como tinha falado.
² E concebeu Sara e deu a Abraão um filho na sua velhice, ao tempo determinado, que Deus lhe tinha dito.
³ E chamou Abraão o nome de seu filho que lhe nascera, que Sara lhe dera, Isaque.
⁴ E Abraão circuncidou o seu filho Isaque, quando era da idade de oito dias, como Deus lhe tinha ordenado.
⁵ E era Abraão da idade de cem anos, quando lhe nasceu Isaque, seu filho.
⁶ E disse Sara: Deus me tem feito riso; todo aquele que o ouvir se rirá comigo.
⁷ Disse mais: Quem diria a Abraão que Sara amamentaria filhos, pois lhe dei um filho na sua velhice?
⁸ E cresceu o menino e foi desmamado; então, Abraão fez um grande banquete no dia em que Isaque foi desmamado.
⁹ E viu Sara que o filho de Agar, a egípcia, o qual ela dera a Abraão, zombava.
¹⁰ E disse a Abraão: Ponha fora esta serva e o seu filho; porque o filho desta serva não herdará com Isaque, meu filho.
¹¹ E pareceu esta palavra muito má aos olhos de Abraão, por causa de seu filho.
¹² Porém Deus disse a Abraão: Não te pareça mal aos teus olhos acerca do moço e acerca da tua serva; em tudo o que Sara te diz, ouve a sua voz; porque em Isaque será chamada a tua semente.
¹³ Mas também do filho desta serva farei uma nação, porquanto é tua semente.
¹⁴ Então, se levantou Abraão de madrugada, e tomou pão e um odre de água, e os deu a Agar, pondo-os sobre o seu ombro; também lhe deu o menino e despediu-a; e ela foi-se, andando errante no deserto de Berseba.
¹⁵ E consumida a água do odre, lançou o menino debaixo de uma das árvores.
¹⁶ E foi-se e assentou-se em frente, afastando-se a distância de um tiro de arco; porque dizia: Que não veja eu morrer o menino. E assentou-se em frente, e levantou a sua voz, e chorou.
¹⁷ E ouviu Deus a voz do menino, e bradou o Anjo de Deus a Agar desde os céus e disse-lhe: Que tens, Agar? Não temas, porque Deus ouviu a voz do rapaz desde o lugar onde está.
¹⁸ Ergue-te, levanta o moço e pega-lhe pela mão, porque dele farei uma grande nação.
¹⁹ E abriu-lhe Deus os olhos; e viu um poço de água, e foi-se, e encheu o odre de água, e deu de beber ao moço.
²⁰ E era Deus com o moço, que cresceu, e habitou no deserto, e foi flecheiro.
²¹ E habitou no deserto de Parã; e sua mãe tomou-lhe mulher da terra do Egito.
²² E aconteceu, naquele mesmo tempo, que Abimeleque, com Ficol, príncipe do seu exército, falou com Abraão, dizendo: Deus é contigo em tudo o que fazes;
²³ agora, pois, jura-me aqui por Deus que me não mentirás a mim, nem a meu filho, nem a meu neto; segundo a beneficência que te fiz, me farás a mim e à terra onde peregrinaste.
²⁴ E disse Abraão: Eu jurarei.
²⁵ Abraão, porém, repreendeu Abimeleque por causa de um poço de água que os servos de Abimeleque haviam tomado por força.
²⁶ Então, disse Abimeleque: Não sei quem fez isto; e também tu mo não fizeste saber, nem eu o ouvi senão hoje.
²⁷ E tomou Abraão ovelhas e vacas e deu-as a Abimeleque; e fizeram ambos um concerto.
²⁸ Pôs Abraão, porém, sete cordeiras do rebanho à parte.
²²⁹ E disse Abimeleque a Abraão: Para que estão aqui estas sete cordeiras que puseste à parte?
³⁰ E disse: Tomarás estas sete cordeiras de minha mão, para que isto me seja por testemunho de que eu cavei este poço.
³¹ Por isso, se chamou aquele lugar Berseba, porquanto ambos juraram ali.
³² Assim, fizeram concerto em Berseba. Depois, se levantou Abimeleque com Ficol, príncipe do seu exército, e tornaram para a terra dos filisteus.
³³ E plantou um bosque em Berseba e invocou ali o nome do SENHOR, o Deus Eterno.
³⁴ E peregrinou Abraão na terra dos filisteus muitos dias.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Quantos anos tinha Abraão quando o seu filho Isaque nasceu?",
                opcoes: [
                    { numero: 1, texto: "Setenta e cinco anos", correta: false },
                    { numero: 2, texto: "Oitenta e seis anos", correta: false },
                    { numero: 3, texto: "Cem anos", correta: true },
                    { numero: 4, texto: "Noventa e nove anos", correta: false }
                ],
                explicacao: "Gênesis 21:5 - O texto afirma claramente que Abraão tinha cem anos quando Isaque lhe nasceu, destacando o milagre de Deus na velhice do patriarca.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 22 ---
        22: {
            titulo: "A Prova de Abraão",
            subtitulo: "O sacrifício no Monte Moriá e a provisão de Deus",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E aconteceu, depois destas coisas, que tentou Deus a Abraão e disse-lhe: Abraão! E ele disse: Eis-me aqui.
² E disse: Toma agora o teu filho, o teu único filho, Isaque, a quem amas, e vai-te à terra de Moriá; e oferece-o ali em holocausto sobre uma das montanhas, que eu te direi.
³ Então, se levantou Abraão de madrugada, e albardou o seu jumento, e tomou consigo dois de seus moços e a Isaque, seu filho; e fendeu lenha para o holocausto, e levantou-se, e foi ao lugar que Deus lhe dissera.
⁴ Ao terceiro dia, levantou Abraão os seus olhos e viu o lugar de longe.
⁵ E disse Abraão a seus moços: Ficai-vos aqui com o jumento, e eu e o moço iremos até ali; e, havendo adorado, tornaremos a vós.
⁶ E tomou Abraão a lenha do holocausto e pô-la sobre Isaque, seu filho; e ele tomou o fogo e o cutelo na sua mão. E foram ambos juntos.
⁷ Então, falou Isaque a Abraão, seu pai, e disse: Meu pai! E ele disse: Eis-me aqui, meu filho. E ele disse: Eis aqui o fogo e a lenha, mas onde está o cordeiro para o holocausto?
⁸ E disse Abraão: Deus proverá para si o cordeiro para o holocausto, meu filho. Assim, iam ambos juntos.
⁹ E vieram ao lugar que Deus lhe dissera, e edificou Abraão ali um altar, e pôs em ordem a lenha, e amarrou a Isaque, seu filho, e deitou-o sobre o altar em cima da lenha.
¹⁰ E estendeu Abraão a sua mão e tomou o cutelo para imolar o seu filho.
¹¹ Mas o Anjo do SENHOR lhe bradou desde os céus e disse: Abraão, Abraão! E ele disse: Eis-me aqui.
¹² Então, disse: Não estendas a tua mão sobre o moço e não lhe faças nada; porquanto agora sei que temes a Deus e não me negaste o teu filho, o teu único.
¹³ Então, levantou Abraão os seus olhos e olhou, e eis um carneiro detrás dele, travado pelos seus chifres num mato; e foi Abraão, e tomou o carneiro, e ofereceu-o em holocausto, em lugar de seu filho.
¹⁴ E chamou Abraão o nome daquele lugar o SENHOR Proverá; donde se diz até ao dia de hoje: No monte do SENHOR se proverá.
¹⁵ Então, o Anjo do SENHOR bradou a Abraão pela segunda vez desde os céus
¹⁶ e disse: Por mim mesmo jurei, diz o SENHOR, porquanto fizeste esta ação e não me negaste o teu filho, o teu único,
¹⁷ que deveras te abençoarei e grandissimamente multiplicarei a tua semente como as estrelas dos céus e como a areia que está na praia do mar; e a tua semente possuirá a porta dos seus inimigos.
¹⁸ E em tua semente serão benditas todas as nações da terra, porquanto obedeceste à minha voz.
¹⁹ Então, Abraão tornou aos seus moços, e levantaram-se, e foram juntos a Berseba; e Abraão habitou em Berseba.
²⁰ E sucedeu, depois destas coisas, que anunciaram a Abraão, dizendo: Eis que também Milca deu filhos a Naor, teu irmão:
²¹ Uz, o seu primogênito, e Buz, seu irmão, e Quemuel, pai de Arã,
²² e Quesede, e Hazo, e Pildas, e Jidlafe, e Betuel.
²³ E Betuel gerou a Rebeca. Estes oito deu Milca a Naor, irmão de Abraão.
²⁴ E a sua concubina, cujo nome era Reumá, ela também deu à luz a Teba, e a Gaã, e a Taás, e a Maaca.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Que animal Deus proveu para ser oferecido em holocausto no lugar de Isaque?",
                opcoes: [
                    { numero: 1, texto: "Um cordeiro terno", correta: false },
                    { numero: 2, texto: "Um carneiro preso num mato", correta: true },
                    { numero: 3, texto: "Um vitelo gordo", correta: false },
                    { numero: 4, texto: "Uma rola e um pombinho", correta: false }
                ],
                explicacao: "Gênesis 22:13 - Ao levantar os olhos, Abraão viu um carneiro travado pelos chifres num mato e o ofereceu em lugar de seu filho.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 23 ---
        23: {
            titulo: "A Morte de Sara",
            subtitulo: "O luto de Abraão e a compra do campo de Macpela",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E foi a vida de Sara cento e vinte e sete anos; estes foram os anos da vida de Sara.
² E morreu Sara em Quiriate-Arba (que é Hebrom), na terra de Canaã; e veio Abraão lamentar Sara e chorar por ela.
³ Depois, se levantou Abraão de diante do seu morto e falou aos filhos de Hete, dizendo:
⁴ Estrangeiro e peregrino sou entre vós; dai-me possessão de sepultura convosco, para que eu sepulte o meu morto de diante da minha face.
⁵ E responderam os filhos de Hete a Abraão, dizendo-lhe:
⁶ Ouve-nos, meu senhor: príncipe de Deus és no meio de nós; enterra o teu morto no melhor dos nossos sepulcros; nenhum de nós te vedará o seu sepulcro, para enterrar o teu morto.
⁷ Então, se levantou Abraão e inclinou-se diante do povo da terra, diante dos filhos de Hete.
⁸ E falou com eles, dizendo: Se é da vossa vontade que eu sepulte o meu morto de diante de minha face, ouvi-me e intercedei por mim com Efrom, filho de Zoar,
⁹ para que ele me dê a cova de Macpela, que ele tem no fim do seu campo; que ma dê pelo seu devido preço em posse de sepulcro no meio de vós.
¹⁰ Ora, Efrom habitava no meio dos filhos de Hete; e respondeu Efrom, o heteu, a Abraão, ouvindo-o os filhos de Hete, a saber, todos os que entravam pela porta da sua cidade, dizendo:
¹¹ Não, meu senhor; ouve-me: o campo te dou, também te dou a cova que nele está; diante dos olhos dos filhos do meu povo ta dou; sepulta o teu morto.
¹² Então, Abraão se inclinou diante do povo da terra.
¹³ E falou a Efrom, ouvindo-o o povo da terra, dizendo: Mas, se tu estás por isso, rogo-te que me ouças: darei o preço do campo; toma-o de mim, e sepultarei ali o meu morto.
¹⁴ E respondeu Efrom a Abraão, dizendo-lhe:
¹⁵ Meu senhor, ouve-me: a terra é de quatrocentos siclos de prata; que é isto entre mim e ti? Sepulta o teu morto.
¹⁶ E Abraão ouviu a Efrom; e Abraão pesou a Efrom a prata de que este tinha falado, ouvindo-o os filhos de Hete, a saber, quatrocentos siclos de prata, corrente entre mercadores.
¹⁷ Assim, o campo de Efrom, que estava em Macpela, frente a Manre, o campo e a cova que nele estava, e todo o arvoredo que no campo havia, em todo o seu contorno ao redor,
¹⁸ se confirmou a Abraão em possessão diante dos olhos dos filhos de Hete, de todos os que entravam pela porta da sua cidade.
¹⁹ E, depois disto, sepultou Abraão a Sara, sua mulher, na cova do campo de Macpela, frente a Manre (que é Hebrom), na terra de Canaã.
²⁰ Assim, o campo e a cova que nele estava se confirmaram a Abraão, pelos filhos de Hete, em possessão de sepulcro.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Qual foi o valor pago por Abraão a Efrom, o heteu, para adquirir o campo e a cova de Macpela?",
                opcoes: [
                    { numero: 1, texto: "Cem peças de ouro", correta: false },
                    { numero: 2, texto: "Quatrocentos siclos de prata", correta: true },
                    { numero: 3, texto: "Cinquenta ovelhas e dez vacas", correta: false },
                    { numero: 4, texto: "Mil siclos de bronze", correta: false }
                ],
                explicacao: "Gênesis 23:16 - Abraão pesou a prata corrente entre mercadores, totalizando quatrocentos siclos, para garantir a posse perpétua da sepultura.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 24 ---
        24: {
            titulo: "Uma Esposa para Isaque",
            subtitulo: "A jornada do servo e o encontro com Rebeca",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E era Abraão já velho e adiantado em idade, e o SENHOR havia abençoado a Abraão em tudo.
² E disse Abraão ao seu servo, o mais velho da sua casa, que tinha o governo sobre tudo o que possuía: Põe agora a tua mão debaixo da minha coxa,
³ para que eu te faça jurar pelo SENHOR, Deus dos céus e Deus da terra, que não tomarás mulher para meu filho das filhas dos cananeus, no meio dos quais habito.
⁴ Mas que irás à minha terra e à minha parentela e daí tomarás mulher para meu filho Isaque.
⁵ E disse-lhe o servo: Porventura não quererá seguir-me a mulher a esta terra. Reduzirei, pois, o teu filho à terra donde saíste?
⁶ E Abraão lhe disse: Guarda-te, que não faças lá tornar o meu filho.
⁷ O SENHOR, Deus dos céus, que me tomou da casa de meu pai e da terra da minha parentela, e que me falou, e que me jurou, dizendo: À tua semente darei esta terra, ele enviará o seu Anjo diante da tua face, para que tomes mulher de lá para meu filho.
⁸ Caso que a mulher não queira seguir-te, serás livre deste meu juramento; somente não faças lá tornar o meu filho.
⁹ Então, pôs o servo a sua mão debaixo da coxa de Abraão, seu senhor, e jurou-lhe sobre este negócio.
¹⁰ E o servo tomou dez camelos, dos camelos do seu senhor, e partiu, pois que toda a fazenda do seu senhor estava em sua mão; e levantou-se e partiu para a Mesopotâmia, para a cidade de Naor.
¹¹ E fez ajoelhar os camelos fora da cidade, junto a um poço de água, à hora da tarde, à hora em que as moças saíam a tirar água.
¹² E disse: Ó SENHOR, Deus de meu senhor Abraão, dá-me, hoje, bom encontro e faze beneficência a meu senhor Abraão!
¹³ Eis que eu estou junto à fonte de água, e as filhas dos varões desta cidade saem a tirar água;
¹⁴ seja, pois, que a moça a quem eu disser: Abaixa o teu cântaro para que eu beba; e ela disser: Bebe, e também darei de beber aos teus camelos; esta seja a que designaste para o teu servo Isaque; e que eu conheça nisso que fizeste beneficência a meu senhor.
¹⁵ E sucedeu que, antes que ele acabasse de falar, eis que Rebeca, que havia nascido a Betuel, filho de Milca, mulher de Naor, irmão de Abraão, saía com o seu cântaro sobre o seu ombro.
¹⁶ E a moça era mui formosa à vista, virgem, a quem varão não havia conhecido; e desceu à fonte, e encheu o seu cântaro, e subiu.
¹⁷ Então, o servo correu-lhe ao encontro e disse: Ora, deixa-me beber um pouco de água do teu cântaro.
¹⁸ E ela disse: Bebe, meu senhor. E apressou-se, e abaixou o seu cântaro sobre a sua mão, e deu-lhe de beber.
¹⁹ E, acabando ela de lhe dar de beber, disse: Tirarei também água para os teus camelos, até que acabem de beber.
²⁰ E apressou-se, e despejou o seu cântaro no bebedouro, e correu outra vez ao poço para tirar água, e tirou para todos os seus camelos.
²¹ E o varão estava admirado de vê-la, calando-se, para saber se o SENHOR havia prosperado a sua jornada ou não.
²² E aconteceu que, acabando os camelos de beber, tomou o varão um pendente de ouro de meio siclo de peso e duas pulseiras para as suas mãos, do peso de dez siclos de ouro,
²³ e disse: De quem és filha? Faze-mo saber, peço-te. Há também em casa de teu pai lugar para nós pernoitarmos?
²⁴ E ela lhe disse: Eu sou a filha de Betuel, filho de Milca, que ela deu a Naor.
²⁵ Disse-lhe mais: Também temos palha e muito pasto e lugar para pernoitar.
²⁶ Então, inclinou-se aquele varão e adorou ao SENHOR.
²⁷ E disse: Bendito seja o SENHOR, Deus de meu senhor Abraão, que não retirou a sua benevolência e a sua verdade de meu senhor; quanto a mim, o SENHOR me guiou no caminho à casa dos irmãos de meu senhor.
²⁸ E a moça correu e fez saber estas coisas na casa de sua mãe.
²⁹ E Rebeca tinha um irmão cujo nome era Labão; e Labão correu ao encontro daquele varão à fonte.
³⁰ E aconteceu que, quando ele viu o pendente e as pulseiras sobre as mãos de sua irmã e quando ouviu as palavras de sua irmã Rebeca, que dizia: Assim me falou aquele varão, veio ao varão; e eis que ele estava junto aos camelos à fonte.
³¹ E disse: Entra, bendito do SENHOR! Por que estás fora? Pois eu já preparei a casa e o lugar para os camelos.
³² Então, veio o varão à casa e desatou os camelos; e deu palha e pasto aos camelos e água para lavar os pés dele e os pés dos varões que estavam com ele.
³³ Depois, puseram de comer diante dele. Ele, porém, disse: Não comerei, até que tenha dito as minhas palavras. E ele disse: Fala.
³⁴ Então, disse: Eu sou o servo de Abraão.
³⁵ E o SENHOR abençoou muito o meu senhor, e ele engrandeceu-se; e deu-lhe ovelhas e vacas, e prata e ouro, e servos e servas, e camelos e jumentos.
³⁶ E Sara, a mulher do meu senhor, deu à luz um filho a meu senhor depois da sua velhice; e ele deu-lhe tudo quanto tem.
³⁷ E meu senhor me fez jurar, dizendo: Não tomarás mulher para meu filho das filhas dos cananeus, em cuja terra habito;
³⁸ irás, porém, à casa de meu pai e à minha família e tomarás mulher para meu filho.
³⁹ E disse eu ao meu senhor: Porventura não me seguirá a mulher.
⁴⁰ E ele me disse: O SENHOR, em cuja presença tenho andado, enviará o seu Anjo contigo e prosperará o teu caminho, para que tomes mulher para meu filho da minha família e da casa de meu pai.
⁴¹ Então, serás livre do meu juramento, quando fores à minha família; e, se não ta derem, livre serás do meu juramento.
⁴² E hoje cheguei à fonte e disse: Ó SENHOR, Deus de meu senhor Abraão, se tu agora prosperas o meu caminho, no qual eu ando,
⁴³ eis que estou junto à fonte de água; seja, pois, que a moça que sair para tirar água e a quem eu disser: Dá-me, peço-te, de beber um pouco de água do teu cântaro;
⁴⁴ e ela me disser: Bebe tu também, e também tirarei água para os teus camelos; esta seja a mulher que o SENHOR designou ao filho do meu senhor.
⁴⁵ E, antes que eu acabasse de falar no meu coração, eis que Rebeca saía com o seu cântaro sobre o seu ombro, e desceu à fonte, e tirou água; e eu lhe disse: Dá-me de beber, peço-te.
⁴⁶ E ela se apressou, e abaixou o seu cântaro de sobre si, e disse: Bebe, e também darei de beber aos teus camelos. E bebi, e ela deu também de beber aos camelos.
⁴⁷ Então, lhe perguntei e disse: De quem és filha? E ela disse: Filha de Betuel, filho de Naor, que Milca lhe deu. Então, eu pus o pendente no seu rosto e as pulseiras sobre as suas mãos.
⁴⁸ E, inclinando-me, adorei ao SENHOR e bendisse ao SENHOR, Deus do meu senhor Abraão, que me havia guiado pelo caminho direito, para tomar a filha do irmão de meu senhor para seu filho.
⁴⁹ Agora, pois, se vós haveis de fazer beneficência e verdade a meu senhor, fazei-mo saber; e, se não, fazei-mo saber também, para que eu olhe para a direita ou para a esquerda.
⁵⁰ Então, responderam Labão e Betuel e disseram: Do SENHOR procedeu este negócio; não podemos falar-te mal ou bem.
⁵¹ Eis que Rebeca está diante da tua face; toma-a e vai-te; seja ela a mulher do filho de teu senhor, como tem falado o SENHOR.
⁵² E aconteceu que, o servo de Abraão ouvindo as suas palavras, inclinou-se à terra diante do SENHOR.
⁵³ E tirou o servo vasos de prata, e vasos de ouro, e vestidos e deu-os a Rebeca; também deu coisas preciosas a seu irmão e a sua mãe.
⁵⁴ Então, comeram, e beberam, ele e os varões que com ele estavam, e pernoitaram. E levantaram-se pela manhã, e disse ele: Deixai-me ir a meu senhor.
⁵⁵ Então, disseram seu irmão e sua mãe: Fique a moça conosco alguns dias, ao menos dez dias; e depois irá.
⁵⁶ Ele, porém, lhes disse: Não me detenhais, pois o SENHOR prosperou o meu caminho; deixai-me partir, para que eu vá a meu senhor.
⁵⁷ E disseram: Chamaremos a moça e perguntaremos à sua boca.
⁵⁸ E chamaram a Rebeca e disseram-lhe: Irás tu com este varão? Ela respondeu: Irei.
⁵⁹ Então, despediram a Rebeca, sua irmã, e a sua ama, e ao servo de Abraão, e aos seus varões.
⁶⁰ E abençoaram a Rebeca e disseram-lhe: És nossa irmã; sê tu em milhares de milhões, e que a tua semente possua a porta de seus aborrecedores!
⁶¹ E Rebeca se levantou com as suas moças, e subiram sobre os camelos, e seguiram o varão; e tomou o servo a Rebeca e partiu.
⁶² Ora, Isaque vinha do caminho de Beer-Laai-Roi, porque habitava na terra do Sul.
⁶³ E Isaque saíra a orar no campo, à tarde; e levantou os seus olhos, e olhou, e eis que os camelos vinham.
⁶⁴ Rebeca também levantou os seus olhos, e viu a Isaque, e lançou-se do camelo,
⁶⁵ e disse ao servo: Quem é aquele varão que vem pelo campo ao nosso encontro? E o servo disse: É meu senhor. Então, tomou ela o véu e cobriu-se.
⁶⁶ E o servo contou a Isaque todas as coisas que fizera.
⁶⁷ E Isaque trouxe-a para a tenda de sua mãe, Sara, e tomou a Rebeca, e foi-lhe por mulher, e amou-a. Assim, Isaque foi consolado depois da morte de sua mãe.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Qual foi o sinal específico que o servo de Abraão pediu a Deus para identificar a mulher escolhida para Isaque?",
                opcoes: [
                    { numero: 1, texto: "Que ela usasse um vestido de cores vibrantes", correta: false },
                    { numero: 2, texto: "Que ela lhe desse de beber e também oferecesse água aos seus camelos", correta: true },
                    { numero: 3, texto: "Que ela trouxesse um presente de ouro para ele", correta: false },
                    { numero: 4, texto: "Que ela o convidasse imediatamente para a casa de seu pai", correta: false }
                ],
                explicacao: "Gênesis 24:14 - O servo pediu um sinal de serviço e bondade: que a moça não apenas lhe desse água, mas se oferecesse para dar de beber aos seus dez camelos, uma tarefa que exigia grande esforço.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 25 ---
        25: {
            titulo: "O Legado de Abraão e os Gêmeos",
            subtitulo: "A morte do patriarca e a venda da primogenitura",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E Abraão tomou outra mulher; e o seu nome era Quetura.
² E deu-lhe à luz a Zinrã, e a Jocsã, e a Medã, e a Midiã, e a Jisbaque, e a Sua.
³ E Jocsã gerou a Sabá e a Dedã; e os filhos de Dedã foram Assurim, e Letusim, e Leumim.
⁴ E os filhos de Midiã foram Efá, e Efer, e Enoque, e Abida, e Elda; todos estes foram filhos de Quetura.
⁵ Porém Abraão deu tudo o que tinha a Isaque.
⁶ Mas aos filhos das concubinas que Abraão tinha, deu Abraão dádivas e, vivendo ele ainda, despediu-os do seu filho Isaque para a banda do oriente, para a terra oriental.
⁷ Estes, pois, são os dias dos anos da vida de Abraão, que viveu cento e setenta e cinco anos.
⁸ E Abraão expirou e morreu em boa velhice, velho e farto de dias; e foi congregado ao seu povo.
⁹ E Isaque e Ismael, seus filhos, sepultaram-no na cova de Macpela, no campo de Efrom, filho de Zoar, o heteu, que estava em frente de Manre,
¹⁰ o campo que Abraão comprara aos filhos de Hete. Ali foi sepultado Abraão e Sara, sua mulher.
¹¹ E aconteceu, depois da morte de Abraão, que Deus abençoou a Isaque, seu filho; e habitava Isaque junto ao poço de Beer-Laai-Roi.
¹² Estas, porém, são as gerações de Ismael, filho de Abraão, que a serva de Sara, Agar, egípcia, deu a Abraão.
¹³ E estes são os nomes dos filhos de Ismael, pelos seus nomes, segundo as suas gerações: o primogênito de Ismael era Nebaiote, depois Quedar, e Adbeel, e Mibsão,
¹⁴ e Misma, e Dumá, e Massá,
¹⁵ e Hadade, e Tema, e Jetur, e Nafis, e Quedemá.
¹⁶ Estes são os filhos de Ismael, e estes são os seus nomes pelas suas vilas e pelos seus castelos: doze príncipes segundo as suas nações.
¹⁷ E estes são os anos da vida de Ismael, que viveu cento e trinta e sete anos; e expirou e, morrendo, foi congregado ao seu povo.
¹⁸ E habitaram desde Havilá até Sur, que está em frente do Egito, indo para a Assíria; e Ismael estabeleceu-se diante da face de todos os seus irmãos.
¹⁹ E estas são as gerações de Isaque, filho de Abraão: Abraão gerou a Isaque.
²⁰ E era Isaque da idade de quarenta anos, quando tomou a Rebeca, filha de Betuel, arameu de Padã-Arã, irmã de Labão, arameu, por sua mulher.
²¹ E Isaque orou instantemente ao SENHOR por sua mulher, porquanto era estéril; e o SENHOR ouviu as suas orações, e Rebeca, sua mulher, concebeu.
²² E os filhos lutavam dentro dela; então, disse: Se assim é, por que sou eu assim? E foi consultar ao SENHOR.
²³ E o SENHOR lhe disse: Duas nações há no teu ventre, e dois povos se dividirão das tuas entranhas; um povo será mais forte do que o outro povo, e o maior servirá ao menor.
²⁴ E cumprindo-se os seus dias para dar à luz, eis gêmeos no seu ventre.
²⁵ E saiu o primeiro, ruivo e todo como uma veste de pelo; por isso, chamaram o seu nome Esaú.
²⁶ E, depois, saiu o seu irmão, agarrada sua mão ao calcanhar de Esaú; por isso, se chamou o seu nome Jacó. E era Isaque da idade de sessenta anos quando os gerou.
²⁷ E cresceram os meninos. E Esaú foi varão perito na caça, varão do campo; mas Jacó era varão simples, habitando em tendas.
²⁸ E amava Isaque a Esaú, porque a caça era de seu gosto; mas Rebeca amava a Jacó.
²⁹ E cozera Jacó um guisado; e veio Esaú do campo e estava ele cansado.
³⁰ E disse Esaú a Jacó: Deixa-me, peço-te, comer desse guisado vermelho, pois estou cansado. Por isso, se chamou o seu nome Edom.
³¹ Então, disse Jacó: Vende-me, hoje, a tua primogenitura.
³² E disse Esaú: Eis que estou a ponto de morrer; para que me servirá, logo, a primogenitura?
³³ Então, disse Jacó: Jura-me hoje. E jurou-lhe e vendeu a sua primogenitura a Jacó.
³⁴ E Jacó deu pão a Esaú e o guisado de lentilhas; e ele comeu, e bebeu, e levantou-se, e foi-se. Assim, desprezou Esaú a sua primogenitura.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Por que preço Esaú decidiu vender o seu direito de primogenitura para o seu irmão Jacó?",
                opcoes: [
                    { numero: 1, texto: "Por trinta moedas de prata", correta: false },
                    { numero: 2, texto: "Por um guisado de lentilhas e pão", correta: true },
                    { numero: 3, texto: "Por dez camelos e dez servos", correta: false },
                    { numero: 4, texto: "Pela benção final de seu pai Isaque", correta: false }
                ],
                explicacao: "Gênesis 25:34 - Exausto e com fome, Esaú desprezou o seu direito de filho mais velho em troca de uma refeição imediata de pão e guisado de lentilhas.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 26 ---
        26: {
            titulo: "Isaque em Gerar",
            subtitulo: "A prosperidade de Isaque e a disputa pelos poços",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E havia fome na terra, além da primeira fome que foi nos dias de Abraão; por isso, foi Isaque a Abimeleque, rei dos filisteus, em Gerar.
² E apareceu-lhe o SENHOR e disse: Não desças ao Egito; habita na terra que eu te disser;
³ peregrina nesta terra, e serei contigo e abençoar-te-ei; porque a ti e à tua semente darei todas estas terras e confirmarei o juramento que tenho jurado a Abraão, teu pai.
⁴ E multiplicarei a tua semente como as estrelas dos céus e darei à tua semente todas estas terras. E em tua semente serão benditas todas as nações da terra,
⁵ porquanto Abraão obedeceu à minha voz e guardou o meu mandado, os meus preceitos, os meus estatutos e as minhas leis.
⁶ Assim, habitou Isaque em Gerar.
⁷ E perguntando-lhe os varões daquele lugar acerca de sua mulher, disse: É minha irmã; porque temia dizer: É minha mulher; para que, porventura, disse ele, os varões daquele lugar me não matem por amor de Rebeca, porque era formosa à vista.
⁸ E aconteceu que, como ele estivesse ali muito tempo, Abimeleque, rei dos filisteus, olhou por uma janela e viu, e eis que Isaque estava brincando com Rebeca, sua mulher.
⁹ Então, chamou Abimeleque a Isaque e disse: Eis que, na verdade, é tua mulher; como, pois, disseste: É minha irmã? E disse-lhe Isaque: Porque eu dizia: Para que eu, porventura, não morra por amor dela.
¹⁰ E disse Abimeleque: Que é isto que nos fizeste? Facilmente se teria deitado alguém deste povo com a tua mulher, e tu terias trazido sobre nós um pecado.
¹¹ E mandou Abimeleque a todo o povo, dizendo: Qualquer que tocar neste varão ou em sua mulher certamente morrerá.
¹² E semeou Isaque naquela mesma terra e colheu, naquele mesmo ano, cem medidas, porque o SENHOR o abençoava.
¹³ E engrandeceu-se o varão e ia-se enriquecendo, até que se tornou mui grande.
¹⁴ E tinha possessão de ovelhas, e possessão de vacas, e muita gente de serviço; de maneira que os filisteus lhe tinham inveja.
¹⁵ E todos os poços que os servos de seu pai haviam cavado nos dias de Abraão, seu pai, os filisteus entulharam e encheram de terra.
¹⁶ Disse também Abimeleque a Isaque: Aparta-te de nós, porque muito mais poderoso te tens feito do que nós.
¹⁷ Então, Isaque partiu dali, e acampou no vale de Gerar, e habitou ali.
¹⁸ E tornou Isaque e cavou os poços de água que cavaram nos dias de Abraão, seu pai, e que os filisteus entulharam depois da morte de Abraão, e chamou-os pelos nomes que os chamara seu pai.
¹⁹ Cavaram, pois, os servos de Isaque naquele vale e acharam ali um poço de águas vivas.
²⁰ E os pastores de Gerar porfiaram com os pastores de Isaque, dizendo: Esta água é nossa. Por isso, chamou o nome do poço Eseque, porque contenderam com ele.
²¹ Então, cavaram outro poço e também porfiaram sobre ele. Por isso, chamou o seu nome Sitna.
²² E partiu dali e cavou outro poço; e não porfiaram sobre ele. Por isso, chamou o seu nome Reobote e disse: Porque agora nos alargou o SENHOR, e crescemos nesta terra.
²³ Depois, subiu dali a Berseba.
²⁴ E apareceu-lhe o SENHOR naquela mesma noite e disse: Eu sou o Deus de Abraão, teu pai. Não temas, porque eu sou contigo, e abençoar-te-ei, e multiplicarei a tua semente por amor de Abraão, meu servo.
²⁵ Então, edificou ali um altar, e invocou o nome do SENHOR, e armou ali a sua tenda; e os servos de Isaque cavaram ali um poço.
²⁶ E Abimeleque veio a ele de Gerar, com Ausate, seu amigo, e Ficol, príncipe do seu exército.
²⁷ E disse-lhes Isaque: Por que viestes a mim, pois que vós me aborreceis e me despedistes de vós?
²⁸ E eles disseram: Havemos visto na verdade que o SENHOR é contigo; por isso, dissemos: Haja agora juramento entre nós, entre nós e ti; e façamos concerto contigo.
²⁹ Que nos não faças mal, como nós te não temos tocado, e como te fizemos somente bem, e te despedimos em paz. Agora, tu és o bendito do SENHOR.
³⁰ Então, fez-lhes um banquete, e comeram e beberam.
³¹ E levantaram-se de madrugada e juraram um ao outro; depois, despediu-os Isaque, e foram-se dele em paz.
³² E aconteceu que, naquele mesmo dia, vieram os servos de Isaque e anunciaram-lhe acerca do negócio do poço que tinham cavado; e disseram-lhe: Temos achado água.
³³ E chamou-o Seba; por isso, é o nome daquela cidade Berseba até ao dia de hoje.
³⁴ Ora, sendo Esaú da idade de quarenta anos, tomou por mulher a Judite, filha de Beeri, heteu, e a Basemate, filha de Elom, heteu.
³⁵ E estas foram para Isaque e Rebeca uma amargura de espírito.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Qual foi o nome dado por Isaque ao poço que finalmente não gerou contenda, significando 'largueza'?",
                opcoes: [
                    { numero: 1, texto: "Eseque", correta: false },
                    { numero: 2, texto: "Sitna", correta: false },
                    { numero: 3, texto: "Reobote", correta: true },
                    { numero: 4, texto: "Seba", correta: false }
                ],
                explicacao: "Gênesis 26:22 - Isaque chamou o poço de Reobote, dizendo: 'Porque agora nos alargou o Senhor, e crescemos nesta terra', após os pastores de Gerar pararem de disputar a água.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 27 ---
        27: {
            titulo: "A Bênção de Jacó",
            subtitulo: "O estratagema de Rebeca e a fuga para Harã",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E aconteceu que, como Isaque envelheceu, e os seus olhos se escureceram, de sorte que não podia ver, chamou a Esaú, seu filho mais velho, e disse-lhe: Meu filho! E ele lhe disse: Eis-me aqui.
² E ele disse: Eis que já agora estou velho e não sei o dia da minha morte.
³ Agora, pois, toma as tuas armas, a tua aljava e o teu arco, e sai ao campo, e apanha para mim alguma caça.
⁴ E faze-me um guisado saboroso, como eu gosto, e traze-mo, para que eu coma; para que minha alma te abençoe, antes que morra.
⁵ E Rebeca escutou quando Isaque falava a Esaú, seu filho. E foi Esaú ao campo para apanhar caça que havia de trazer.
⁶ Então, falou Rebeca a Jacó, seu filho, dizendo: Eis que tenho ouvido o teu pai que falava com Esaú, teu irmão, dizendo:
⁷ Traze-me caça e faze-me um guisado saboroso, para que eu coma e te abençoe diante da face do SENHOR, antes da minha morte.
⁸ Agora, pois, filho meu, ouve a minha voz naquilo que eu te mando.
⁹ Vai-te agora ao rebanho e traze-me dali dois bons cabritos, e eu farei deles um guisado saboroso para teu pai, como ele gosta;
¹⁰ e levá-lo-ás a teu pai, para que o coma; para que te abençoe antes da sua morte.
¹¹ Então, disse Jacó a Rebeca, sua mãe: Eis que Esaú, meu irmão, é varão peludo, e eu, varão liso.
¹² Porventura, me apalpará o meu pai, e serei a seus olhos enganador; assim, trarei sobre mim maldição e não bênção.
¹³ E disse-lhe sua mãe: Meu filho, sobre mim seja a tua maldição; somente ouve a minha voz, e vai, e traze-mos.
¹⁴ E foi, e tomou-os, e trouxe-os a sua mãe; e sua mãe fez um guisado saboroso, como seu pai gostava.
¹⁵ Depois, tomou Rebeca os vestidos de gala de Esaú, seu filho mais velho, que tinha consigo em casa, e vestiu a Jacó, seu filho menor.
¹⁶ E com as peles dos cabritos cobriu as suas mãos e a lisura do seu pescoço.
¹⁷ E deu o guisado saboroso e o pão que tinha preparado na mão de Jacó, seu filho.
¹⁸ E veio ele a seu pai e disse: Meu pai! E ele disse: Eis-me aqui; quem és tu, meu filho?
¹⁹ E Jacó disse a seu pai: Eu sou Esaú, teu primogênito. Tenho feito como me disseste; levanta-te agora, assenta-te e come da minha caça, para que a tua alma me abençoe.
²⁰ Então, disse Isaque a seu filho: Como é isto que o achaste tão depressa, meu filho? E ele disse: Porque o SENHOR, teu Deus, o enviou ao meu encontro.
²¹ E disse Isaque a Jacó: Chega-te agora, para que te apalpe, meu filho, se és meu filho Esaú mesmo ou não.
²² Então, se chegou Jacó a Isaque, seu pai, que o apalpou e disse: A voz é a voz de Jacó, porém as mãos são as mãos de Esaú.
²³ E não o conheceu, porquanto as suas mãos estavam peludas, como as mãos de Esaú, seu irmão. E abençoou-o.
²⁴ E disse: És tu meu filho Esaú mesmo? E ele disse: Eu sou.
²⁵ Então, disse: Faze chegar isso a mim, para que coma da caça de meu filho; para que a minha alma te abençoe. E chegou-lho, e comeu; trouxe-lhe também vinho, e bebeu.
²⁶ E disse-lhe Isaque, seu pai: Chega-te agora e beija-me, meu filho.
²⁷ E chegou-se e beijou-o. Então, cheirou o cheiro dos seus vestidos, e abençoou-o, e disse: Eis que o cheiro do meu filho é como o cheiro do campo, que o SENHOR abençoou.
²⁸ Assim, pois, te dê Deus do orvalho dos céus, e das gorduras da terra, e abundância de trigo e de mosto.
²⁹ Sirvam-te povos, e nações se encurvem a ti; sê senhor de teus irmãos, e os filhos de tua mãe se encurvem a ti; malditos sejam os que te amaldiçoarem, e benditos sejam os que te abençoarem.
³⁰ E aconteceu que, acabando Isaque de abençoar a Jacó, apenas Jacó acabava de sair da presença de Isaque, seu pai, veio Esaú, seu irmão, da sua caça.
³¹ E fez também ele um guisado saboroso, e trouxe-o a seu pai, e disse-lhe: Levanta-te, meu pai, e come da caça de teu filho, para que me abençoe a tua alma.
³² E disse-lhe Isaque, seu pai: Quem és tu? E ele disse: Eu sou o teu filho, o teu primogênito, Esaú.
³³ Então, estremeceu Isaque de um estremecimento muito grande e disse: Quem, pois, é aquele que apanhou a caça e ma trouxe? Eu comi de tudo, antes que tu viesses, e abençoei-o; também será bendito.
³⁴ Esaú, ouvindo as palavras de seu pai, bradou com um mui grande e amargo brado e disse a seu pai: Abençoa-me também a mim, meu pai.
³⁵ E ele disse: Veio o teu irmão com sutileza e tomou a tua bênção.
³⁶ Então, disse ele: Não foi o seu nome justamente chamado Jacó, porquanto já duas vezes me enganou? A minha primogenitura me tomou e eis que agora tomou a minha bênção. E disse mais: Não reservaste, pois, para mim bênção alguma?
³⁷ Então, respondeu Isaque e disse a Esaú: Eis que o tenho posto por senhor sobre ti, e todos os seus irmãos lhe dei por servos; e de trigo e de mosto o fortaleci; que te farei, pois, agora a ti, meu filho?
³⁸ E disse Esaú a seu pai: Tens somente uma bênção, meu pai? Abençoa-me também a mim, meu pai. E levantou Esaú a sua voz e chorou.
³⁹ Então, respondeu Isaque, seu pai, e disse-lhe: Eis que a tua habitação será nas gorduras da terra e no orvalho dos céus, lá de cima.
⁴⁰ E pela tua espada viverás e a teu irmão servirás. Acontecerá, porém, que, quando te assenhoreares, sacudirás o seu jugo do teu pescoço.
⁴¹ E Esaú aborreceu a Jacó por causa daquela bênção com que seu pai o tinha abençoado; e Esaú disse no seu coração: Chegar-se-ão os dias de luto de meu pai; e matarei a Jacó, meu irmão.
⁴² E foram anunciadas a Rebeca estas palavras de Esaú, seu filho mais velho; e ela enviou, e chamou a Jacó, seu filho menor, e disse-lhe: Eis que Esaú, teu irmão, se consola a teu respeito, querendo matar-te.
⁴³ Agora, pois, meu filho, ouve a minha voz: levanta-te, acolhe-te a Labão, meu irmão, em Harã.
⁴⁴ E mora com ele alguns dias, até que se passe o furor de teu irmão;
⁴⁵ até que se desvie de ti a ira de teu irmão, e se esqueça do que lhe fizeste; enviarei, então, e te farei vir dali; por que seria eu despojada de vós ambos num só dia?
⁴⁶ E disse Rebeca a Isaque: Enfada-me a minha vida, por causa das filhas de Hete; se Jacó tomar mulher das filhas de Hete, como estas são das filhas desta terra, para que me servirá a vida?`,
            
            // O DESAFIO
            pergunta: {
                texto: "Como Jacó conseguiu enganar o sentido do tato de seu pai, Isaque, que já estava cego?",
                opcoes: [
                    { numero: 1, texto: "Usando uma máscara de madeira", correta: false },
                    { numero: 2, texto: "Cobrindo as mãos e o pescoço com peles de cabritos", correta: true },
                    { numero: 3, texto: "Ficando em silêncio durante toda a visita", correta: false },
                    { numero: 4, texto: "Pedindo a Rebeca que falasse por ele", correta: false }
                ],
                explicacao: "Gênesis 27:16 - Para simular a pele peluda de Esaú, Rebeca cobriu as mãos e a lisura do pescoço de Jacó com peles de cabritos, enganando o toque de Isaque.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 28 ---
        28: {
            titulo: "A Escada de Jacó",
            subtitulo: "O sonho em Betel e a renovação da promessa",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E Isaque chamou a Jacó, e abençoou-o, e ordenou-lhe, e disse-lhe: Não tomes mulher das filhas de Canaã.
² Levanta-te, vai a Padã-Arã, à casa de Betuel, pai de tua mãe, e toma de lá mulher das filhas de Labão, irmão de tua mãe.
³ E Deus Todo-Poderoso te abençoe, e te faça frutificar, e te multiplique, para que sejas uma multidão de povos;
⁴ e te dê a bênção de Abraão, a ti e à tua semente contigo, para que em herança possuas a terra de tuas peregrinações, que Deus deu a Abraão.
⁵ Assim, despediu Isaque a Jacó, o qual se foi a Padã-Arã, a Labão, filho de Betuel, arameu, irmão de Rebeca, mãe de Jacó e de Esaú.
⁶ Vendo, pois, Esaú que Isaque abençoara a Jacó e o enviara a Padã-Arã, para tomar de lá mulher para si, e que, abençoando-o, lhe ordenara, dizendo: Não tomes mulher das filhas de Canaã;
⁷ e que Jacó, obedecendo a seu pai e a sua mãe, se fora a Padã-Arã;
⁸ viu também Esaú que as filhas de Canaã eram más aos olhos de Isaque, seu pai.
⁹ E foi-se Esaú a Ismael e tomou para si por mulher a Maalate, filha de Ismael, filho de Abraão, irmã de Nebaiote, além de suas mulheres.
¹⁰ Partiu, pois, Jacó de Berseba e foi-se a Harã.
¹¹ E chegou a um lugar onde pernoitou, porque o sol já se havia posto; e tomou uma das pedras daquele lugar, e a pôs por seu travesseiro, e deitou-se naquele lugar.
¹² E sonhou: e eis uma escada posta na terra, cujo topo tocava nos céus; e eis que os anjos de Deus subiam e desciam por ela.
¹³ E eis que o SENHOR estava em cima dela e disse: Eu sou o SENHOR, o Deus de Abraão, teu pai, e o Deus de Isaque; esta terra em que estás deitado ta darei a ti e à tua semente.
¹⁴ E a tua semente será como o pó da terra; e estender-se-á ao ocidente, e ao oriente, e ao norte, e ao sul; e em ti e na tua semente serão benditas todas as famílias da terra.
¹⁵ E eis que estou contigo, e te guardarei por onde quer que fores, e te farei tornar a esta terra; porque não te deixarei, até que haja feito o que te tenho falado.
¹⁶ Acordado, pois, Jacó do seu sono, disse: Na verdade o SENHOR está neste lugar, e eu não o sabia.
¹⁷ E temeu e disse: Quão terrível é este lugar! Este não é outro lugar senão a Casa de Deus; e esta é a porta dos céus.
¹⁸ Então, levantou-se Jacó de madrugada, e tomou a pedra que tinha posto por seu travesseiro, e a pôs por coluna, e derramou azeite em cima dela.
¹⁹ E chamou o nome daquele lugar Betel; o nome, porém, daquela cidade, dantes, era Luz.
²⁰ E Jacó fez um voto, dizendo: Se Deus for comigo, e me guardar neste caminho que vou, e me der pão para comer e vestes para vestir,
²¹ e eu em paz tornar à casa de meu pai, o SENHOR será o meu Deus;
²² e esta pedra, que tenho posto por coluna, será Casa de Deus; e de tudo quanto me deres, certamente te darei o dízimo.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Após ter o sonho com a escada que tocava os céus, que nome Jacó deu ao lugar, que significa 'Casa de Deus'?",
                opcoes: [
                    { numero: 1, texto: "Luz", correta: false },
                    { numero: 2, texto: "Berseba", correta: false },
                    { numero: 3, texto: "Betel", correta: true },
                    { numero: 4, texto: "Padã-Arã", correta: false }
                ],
                explicacao: "Gênesis 28:19 - Jacó mudou o nome da cidade de Luz para Betel, declarando que aquele lugar era a porta dos céus e a casa de Deus.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 29 ---
        29: {
            titulo: "Jacó em Harã",
            subtitulo: "O encontro com Raquel e os quatorze anos de serviço",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Então, pôs-se Jacó a caminho e foi-se à terra dos filhos do Oriente.
² E olhou, e eis um poço no campo, e eis três rebanhos de ovelhas que estavam deitados junto a ele; porque daquele poço davam de beber aos rebanhos; e havia uma grande pedra sobre a boca do poço.
³ E ajuntavam-se ali todos os rebanhos, e revolviam a pedra de sobre a boca do poço, e davam de beber às ovelhas, e tornavam a pôr a pedra sobre a boca do poço, no seu lugar.
⁴ E disse-lhes Jacó: Meus irmãos, donde sois? E disseram: De Harã somos.
⁵ E ele lhes disse: Conheceis a Labão, filho de Naor? E disseram: Conhecemos.
⁶ Disse-lhes mais: Está ele bem? E disseram: Está bem, e eis aqui Raquel, sua filha, que vem com as ovelhas.
⁷ E ele disse: Eis que ainda é dia grande, não é tempo de ajuntar o gado; dai de beber às ovelhas e ide apascentá-las.
⁸ E disseram: Não podemos, até que todos os rebanhos se ajuntem e revolvam a pedra de sobre a boca do poço, para que demos de beber às ovelhas.
⁹ Estando ele ainda falando com eles, veio Raquel com as ovelhas de seu pai; porque ela era pastora.
¹⁰ E aconteceu que, vendo Jacó a Raquel, filha de Labão, irmão de sua mãe, e as ovelhas de Labão, irmão de sua mãe, chegou Jacó, e revolveu a pedra de sobre a boca do poço, e deu de beber às ovelhas de Labão, irmão de sua mãe.
¹¹ E Jacó beijou a Raquel, e levantou a sua voz, e chorou.
¹² E Jacó anunciou a Raquel que era irmão de seu pai e que era filho de Rebeca. Então, ela correu e o anunciou a seu pai.
¹³ E aconteceu que, ouvindo Labão as novas de Jacó, filho de sua irmã, correu-lhe ao encontro, e abraçou-o, e beijou-o, e levou-o à sua casa; e ele contou a Labão todas estas coisas.
¹⁴ Então, Labão disse-lhe: Verdadeiramente és tu o meu osso e a minha carne. E habitou com ele um mês inteiro.
¹⁵ Depois, disse Labão a Jacó: Porque tu és meu irmão, servir-me-ás de graça? Declara-me qual será o teu salário.
¹⁶ E Labão tinha duas filhas; o nome da mais velha era Lia, e o nome da menor, Raquel.
¹⁷ Lia, porém, tinha olhos tenros, mas Raquel era de formoso semblante e formosa à vista.
¹⁸ E Jacó amava a Raquel e disse: Sete anos te servirei por Raquel, tua filha menor.
¹⁹ Então, disse Labão: Melhor é que eu a dê a ti do que a outro varão; fica comigo.
²⁰ Assim, serviu Jacó sete anos por Raquel; e estes lhe pareceram como poucos dias, pelo muito que a amava.
²¹ E disse Jacó a Labão: Dá-me minha mulher, porque meus dias são cumpridos, para que eu entre a ela.
²² Então, ajuntou Labão todos os varões daquele lugar e fez um banquete.
²³ E aconteceu, à tarde, que tomou a Lia, sua filha, e lha trouxe; e entrou a ela.
²⁴ E Labão deu sua serva Zilpa para serva de Lia, sua filha.
²⁵ E aconteceu que, pela manhã, eis que era Lia; pelo que disse a Labão: Que é isto que me fizeste? Não te tenho servido por Raquel? Por que, pois, me enganaste?
²⁶ E disse Labão: Não se faz assim no nosso lugar, que a menor se dê antes da primogênita.
²⁷ Cumpre a semana desta; então, te daremos também a outra, pelo serviço que ainda sete anos servires comigo.
²⁸ E Jacó fez assim e cumpriu a semana desta; então, lhe deu sua filha Raquel por mulher.
²⁹ E Labão deu sua serva Bila para serva de Raquel, sua filha.
³⁰ E entrou também a Raquel e amou também a Raquel mais do que a Lia; e serviu com ele ainda outros sete anos.
³¹ Vendo, pois, o SENHOR que Lia era desprezada, abriu a sua madre; porém Raquel era estéril.
³² E concebeu Lia e deu à luz um filho, e chamou o seu nome Rúben; pois disse: Porque o SENHOR atendeu à minha aflição, por isso agora me amará o meu marido.
³³ E concebeu outra vez e deu à luz um filho, e disse: Porquanto o SENHOR ouviu que eu era desprezada, deu-me também este. E chamou o seu nome Simeão.
³⁴ E concebeu outra vez e deu à luz um filho, e disse: Agora, esta vez se ajuntará meu marido comigo, porque três filhos lhe tenho dado. Por isso, chamou o seu nome Levi.
³⁵ E concebeu outra vez e deu à luz um filho, e disse: Esta vez louvarei ao SENHOR. Por isso, chamou o seu nome Judá; e cessou de parir.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Quantos anos, ao todo, Jacó serviu a Labão para ter o direito de se casar com Raquel?",
                opcoes: [
                    { numero: 1, texto: "Sete anos", correta: false },
                    { numero: 2, texto: "Dez anos", correta: false },
                    { numero: 3, texto: "Quatorze anos", correta: true },
                    { numero: 4, texto: "Vinte anos", correta: false }
                ],
                explicacao: "Gênesis 29:18, 30 - Jacó serviu inicialmente sete anos por Raquel, mas foi enganado com Lia. Para ter Raquel também, ele serviu outros sete anos adicionais.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 29 ---
        29: {
            titulo: "Jacó em Harã",
            subtitulo: "O encontro com Raquel e os quatorze anos de serviço",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Então, pôs-se Jacó a caminho e foi-se à terra dos filhos do Oriente.
² E olhou, e eis um poço no campo, e eis três rebanhos de ovelhas que estavam deitados junto a ele; porque daquele poço davam de beber aos rebanhos; e havia uma grande pedra sobre a boca do poço.
³ E ajuntavam-se ali todos os rebanhos, e revolviam a pedra de sobre a boca do poço, e davam de beber às ovelhas, e tornavam a pôr a pedra sobre a boca do poço, no seu lugar.
⁴ E disse-lhes Jacó: Meus irmãos, donde sois? E disseram: De Harã somos.
⁵ E ele lhes disse: Conheceis a Labão, filho de Naor? E disseram: Conhecemos.
⁶ Disse-lhes mais: Está ele bem? E disseram: Está bem, e eis aqui Raquel, sua filha, que vem com as ovelhas.
⁷ E ele disse: Eis que ainda é dia grande, não é tempo de ajuntar o gado; dai de beber às ovelhas e ide apascentá-las.
⁸ E disseram: Não podemos, até que todos os rebanhos se ajuntem e revolvam a pedra de sobre a boca do poço, para que demos de beber às ovelhas.
⁹ Estando ele ainda falando com eles, veio Raquel com as ovelhas de seu pai; porque ela era pastora.
¹⁰ E aconteceu que, vendo Jacó a Raquel, filha de Labão, irmão de sua mãe, e as ovelhas de Labão, irmão de sua mãe, chegou Jacó, e revolveu a pedra de sobre a boca do poço, e deu de beber às ovelhas de Labão, irmão de sua mãe.
¹¹ E Jacó beijou a Raquel, e levantou a sua voz, e chorou.
¹² E Jacó anunciou a Raquel que era irmão de seu pai e que era filho de Rebeca. Então, ela correu e o anunciou a seu pai.
¹³ E aconteceu que, ouvindo Labão as novas de Jacó, filho de sua irmã, correu-lhe ao encontro, e abraçou-o, e beijou-o, e levou-o à sua casa; e ele contou a Labão todas estas coisas.
¹⁴ Então, Labão disse-lhe: Verdadeiramente és tu o meu osso e a minha carne. E habitou com ele um mês inteiro.
¹⁵ Depois, disse Labão a Jacó: Porque tu és meu irmão, servir-me-ás de graça? Declara-me qual será o teu salário.
¹⁶ E Labão tinha duas filhas; o nome da mais velha era Lia, e o nome da menor, Raquel.
¹⁷ Lia, porém, tinha olhos tenros, mas Raquel era de formoso semblante e formosa à vista.
¹⁸ E Jacó amava a Raquel e disse: Sete anos te servirei por Raquel, tua filha menor.
¹⁹ Então, disse Labão: Melhor é que eu a dê a ti do que a outro varão; fica comigo.
²⁰ Assim, serviu Jacó sete anos por Raquel; e estes lhe pareceram como poucos dias, pelo muito que a amava.
²¹ E disse Jacó a Labão: Dá-me minha mulher, porque meus dias são cumpridos, para que eu entre a ela.
²² Então, ajuntou Labão todos os varões daquele lugar e fez um banquete.
²³ E aconteceu, à tarde, que tomou a Lia, sua filha, e lha trouxe; e entrou a ela.
²⁴ E Labão deu sua serva Zilpa para serva de Lia, sua filha.
²⁵ E aconteceu que, pela manhã, eis que era Lia; pelo que disse a Labão: Que é isto que me fizeste? Não te tenho servido por Raquel? Por que, pois, me enganaste?
²⁶ E disse Labão: Não se faz assim no nosso lugar, que a menor se dê antes da primogênita.
²⁷ Cumpre a semana desta; então, te daremos também a outra, pelo serviço que ainda sete anos servires comigo.
²⁸ E Jacó fez assim e cumpriu a semana desta; então, lhe deu sua filha Raquel por mulher.
²⁹ E Labão deu sua serva Bila para serva de Raquel, sua filha.
³⁰ E entrou também a Raquel e amou também a Raquel mais do que a Lia; e serviu com ele ainda outros sete anos.
³¹ Vendo, pois, o SENHOR que Lia era desprezada, abriu a sua madre; porém Raquel era estéril.
³² E concebeu Lia e deu à luz um filho, e chamou o seu nome Rúben; pois disse: Porque o SENHOR atendeu à minha aflição, por isso agora me amará o meu marido.
³³ E concebeu outra vez e deu à luz um filho, e disse: Porquanto o SENHOR ouviu que eu era desprezada, deu-me também este. E chamou o seu nome Simeão.
³⁴ E concebeu outra vez e deu à luz um filho, e disse: Agora, esta vez se ajuntará meu marido comigo, porque três filhos lhe tenho dado. Por isso, chamou o seu nome Levi.
³⁵ E concebeu outra vez e deu à luz um filho, e disse: Esta vez louvarei ao SENHOR. Por isso, chamou o seu nome Judá; e cessou de parir.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Quantos anos, ao todo, Jacó serviu a Labão para ter o direito de se casar com Raquel?",
                opcoes: [
                    { numero: 1, texto: "Sete anos", correta: false },
                    { numero: 2, texto: "Dez anos", correta: false },
                    { numero: 3, texto: "Quatorze anos", correta: true },
                    { numero: 4, texto: "Vinte anos", correta: false }
                ],
                explicacao: "Gênesis 29:18, 30 - Jacó serviu inicialmente sete anos por Raquel, mas foi enganado com Lia. Para ter Raquel também, ele serviu outros sete anos adicionais.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 30 ---
        30: {
            titulo: "A Família e a Prosperidade de Jacó",
            subtitulo: "O nascimento dos filhos e a estratégia dos rebanhos",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Vendo Raquel que não dava filhos a Jacó, teve Raquel inveja de sua irmã e disse a Jacó: Dá-me filhos, senão morro.
² Então, se acendeu a ira de Jacó contra Raquel e disse: Estou eu no lugar de Deus, que te impediu o fruto do ventre?
³ E ela disse: Eis aqui minha serva Bila; entra a ela, para que tenha filhos sobre os meus joelhos, e eu assim tenha filhos por ela.
⁴ Assim, lhe deu a Bila, sua serva, por mulher; e Jacó entrou a ela.
⁵ E concebeu Bila e deu a Jacó um filho.
⁶ Então, disse Raquel: Julgou-me Deus, e também ouviu a minha voz, e me deu um filho; por isso, chamou o seu nome Dã.
⁷ E concebeu outra vez Bila, serva de Raquel, e deu a Jacó o segundo filho.
⁸ Então, disse Raquel: Com grandes lutas tenho lutado com minha irmã e também venci; e chamou o seu nome Naftali.
⁹ Vendo, pois, Lia que cessara de parir, tomou também a Zilpa, sua serva, e deu-a a Jacó por mulher.
¹⁰ E deu Zilpa, serva de Lia, um filho a Jacó.
¹¹ Então, disse Lia: Afortunada! E chamou o seu nome Gade.
¹² Depois, deu Zilpa, serva de Lia, o segundo filho a Jacó.
¹³ Então, disse Lia: Para minha dita; porque as filhas me terão por bem-aventurada; e chamou o seu nome Aser.
¹⁴ E foi Rúben nos dias da ceifa do trigo e achou mandrágoras no campo. E trouxe-as a Lia, sua mãe. Então, disse Raquel a Lia: Dá-me, peço-te, das mandrágoras de teu filho.
¹⁵ E ela lhe disse: É já pouco que hajas tomado o meu marido, senão que tomarias também as mandrágoras de meu filho? E disse Raquel: Por isso, ele se deitará contigo esta noite pelas mandrágoras de teu filho.
¹⁶ Vindo, pois, Jacó do campo à tarde, saiu-lhe Lia ao encontro e disse: A mim hás de entrar, porque certamente te aluguei com as mandrágoras de meu filho. E deitou-se com ela aquela noite.
¹⁷ E ouviu Deus a Lia, e concebeu e deu a Jacó o quinto filho.
¹⁸ Então, disse Lia: Deus me tem dado o meu galardão, pois tenho dado a minha serva ao meu marido. E chamou o seu nome Issacar.
¹⁹ E Lia concebeu outra vez e deu a Jacó o sexto filho.
²⁰ E disse Lia: Deus me deu a mim uma boa dádiva; desta vez morará o meu marido comigo, porque lhe tenho dado seis filhos. E chamou o seu nome Zebulom.
²¹ E, depois, deu à luz uma filha e chamou o seu nome Diná.
²² E lembrou-se Deus de Raquel; e Deus a ouviu e abriu a sua madre.
²³ E ela concebeu, e deu à luz um filho, e disse: Tirou-me Deus a minha vergonha.
²⁴ E chamou o seu nome José, dizendo: O SENHOR me acrescente outro filho.
²⁵ E aconteceu que, como Raquel deu à luz a José, disse Jacó a Labão: Despede-me, para que vá ao meu lugar e à minha terra.
²⁶ Dá-me as minhas mulheres e os meus filhos, pelos quais te tenho servido, e ir-me-ei; pois tu sabes o meu serviço, que te tenho feito.
²⁷ Então, lhe disse Labão: Se agora tenho achado graça em teus olhos, fica comigo. Tenho experimentado que o SENHOR me abençoou por amor de ti.
²⁸ E disse mais: Nomeia-me o teu salário, que eu to darei.
²⁹ Então, lhe disse: Tu sabes como te tenho servido e como passou o teu gado comigo.
³⁰ Porque o pouco que tinhas antes de mim se tem aumentado em multidão; e o SENHOR te tem abençoado por meu trabalho; e agora, quando hei de trabalhar também por minha casa?
³¹ E disse ele: Que te darei? Então, disse Jacó: Nada me darás; se me fizeres isto, tornarei a apascentar e a guardar o teu rebanho:
³² Passarei por todo o teu rebanho hoje, separando dele todos os salpicados e malhados, e todos os morenos entre os cordeiros, e o malhado e salpicado entre as cabras; e isto será o meu salário.
³³ Assim, testificará por mim a minha justiça no dia de amanhã, quando vier o meu salário diante da tua face: tudo o que não for salpicado e malhado entre as cabras e moreno entre os cordeiros ser-me-á por furto.
³⁴ Então, disse Labão: Oxalá seja conforme a tua palavra.
³⁵ E separou naquele mesmo dia os bodes listrados e malhados e todas as cabras salpicadas e malhadas, tudo em que havia brancura, e todos os morenos entre os cordeiros; e deu-os nas mãos dos seus filhos.
³⁶ E pôs três dias de caminho entre si e Jacó; e Jacó apascentava o resto dos rebanhos de Labão.
³⁷ Então, tomou Jacó varas verdes de álamo, e de aveleira, e de castanheiro, e descascou nelas riscas brancas, descobrindo a brancura que nas varas havia.
³⁸ E pôs as varas, que tinha descascado, em frente dos rebanhos, nas calhas dos bebedouros de água, onde os rebanhos vinham beber, para que concebessem quando vinham beber.
³⁹ E concebiam os rebanhos diante das varas, e os rebanhos produziam listrados, salpicados e malhados.
⁴⁰ Então, separou Jacó os cordeiros e pôs o rosto do rebanho para os listrados e para todos os morenos no rebanho de Labão; e pôs o seu rebanho à parte e não o pôs com o rebanho de Labão.
⁴¹ E acontecia que, cada vez que concebiam as ovelhas fortes, punha Jacó as varas diante dos olhos do rebanho nas calhas, para que concebessem diante das varas.
⁴² Mas, quando era fraco o rebanho, não as punha. Assim, as fracas eram de Labão, e as fortes, de Jacó.
⁴³ E enriqueceu o varão sobremaneira, e teve muitos rebanhos, e servas, e servos, e camelos, e jumentos.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Qual foi o nome do primeiro filho de Raquel, cujo nascimento ela celebrou dizendo que Deus tirou a sua vergonha?",
                opcoes: [
                    { numero: 1, texto: "Dã", correta: false },
                    { numero: 2, texto: "Naftali", correta: false },
                    { numero: 3, texto: "José", correta: true },
                    { numero: 4, texto: "Benjamim", correta: false }
                ],
                explicacao: "Gênesis 30:23-24 - Após anos de esterilidade, Raquel deu à luz e chamou o seu nome José, expressando o desejo de que o Senhor lhe acrescentasse outro filho.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 31 ---
        31: {
            titulo: "A Fuga de Jacó e o Acordo com Labão",
            subtitulo: "A saída de Padã-Arã e a aliança em Galeade",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Então, ouvia Jacó as palavras dos filhos de Labão, que diziam: Jacó tem tomado tudo o que era de nosso pai e do que era de nosso pai fez ele toda esta glória.
² Viu também Jacó o rosto de Labão, e eis que não era para com ele como dantes.
³ E disse o SENHOR a Jacó: Torna à terra de teus pais e à tua parentela, e eu serei contigo.
⁴ Então, enviou Jacó e chamou a Raquel e a Lia ao campo, ao seu rebanho,
⁵ e disse-lhes: Vejo que o rosto de vosso pai não é para comigo como dantes; mas o Deus de meu pai tem estado comigo.
⁶ E vós mesmas sabeis que, com todo o meu poder, tenho servido a vosso pai;
⁷ mas vosso pai me enganou e mudou o meu salário dez vezes; porém Deus não lhe permitiu que me fizesse mal.
⁸ Quando ele dizia assim: Os salpicados serão o teu salário; então, todos os rebanhos produziam salpicados. E, quando ele dizia assim: Os listrados serão o teu salário; então, todos os rebanhos produziam listrados.
⁹ Assim, Deus tirou o gado de vosso pai e deu-mo a mim.
¹⁰ E sucedeu que, no tempo em que o rebanho concebia, eu levantei os meus olhos e vi em sonhos que os bodes que cobriam as ovelhas eram listrados, salpicados e malhados.
¹¹ E disse-me o Anjo de Deus em sonhos: Jacó! E eu disse: Eis-me aqui.
¹² E disse ele: Levanta, agora, os teus olhos e vê que todos os bodes que cobrem o rebanho são listrados, salpicados e malhados; porque tenho visto tudo o que Labão te fez.
¹³ Eu sou o Deus de Betel, onde ungiste uma coluna, onde me fizeste um voto; levanta-te agora, sai desta terra e torna-te à terra da tua parentela.
¹⁴ Então, responderam Raquel e Lia e disseram-lhe: Há ainda para nós parte ou herança na casa de nosso pai?
¹⁵ Não somos nós tidas por ele como estranhas? Pois vendeu-nos e comeu também inteiramente o nosso dinheiro.
¹⁶ Porque toda a riqueza que Deus tirou de nosso pai é nossa e de nossos filhos; agora, pois, faze tudo quanto Deus te tem dito.
¹¹⁷ Então, se levantou Jacó, pondo os seus filhos e as suas mulheres sobre os camelos,
¹⁸ e levou todo o seu gado e toda a sua fazenda que havia adquirido, o gado que possuía, que alcançara em Padã-Arã, para ir a Isaque, seu pai, à terra de Canaã.
¹⁹ E, tendo Labão ido a tosquiar as suas ovelhas, furtou Raquel os ídolos que seu pai tinha.
²⁰ E Jacó logrou a Labão, o arameu, porque não lhe fez saber que fugia.
²¹ E fugiu ele com tudo o que tinha; e levantou-se, e passou o rio, e pôs o seu rosto para a montanha de Gileade.
²² E, ao terceiro dia, foi avisado Labão que Jacó havia fugido.
²³ Então, tomou consigo os seus irmãos e atrás dele seguiu o seu caminho por sete dias; e alcançou-o na montanha de Gileade.
²⁴ Veio, porém, Deus a Labão, o arameu, em sonhos, de noite, e disse-lhe: Guarda-te, que não fales com Jacó nem bem nem mal.
²⁵ Alcançou, pois, Labão a Jacó; e armara Jacó a sua tenda na montanha; e armou também Labão com os seus irmãos a sua na montanha de Gileade.
²⁶ Então, disse Labão a Jacó: Que fizeste, que me lograste e levaste as minhas filhas como cativas pela espada?
²⁷ Por que fugiste ocultamente, e lograste-me, e não me fizeste saber, para que eu te despedisse com alegria, e com cânticos, e com tamboril, e com harpa?
²⁸ Também não me permitiste beijar os meus filhos e as minhas filhas. Loucamente fizeste, agora, procedendo assim.
²⁹ Poder havia em minha mão para vos fazer mal, mas o Deus de vosso pai me falou ontem à noite, dizendo: Guarda-te, que não fales com Jacó nem bem nem mal.
³⁰ E, agora, se queres ir-te, porquanto tens saudades da casa de teu pai, por que furtaste os meus deuses?
³¹ Então, respondeu Jacó e disse a Labão: Porque temia; pois dizia comigo: Porventura, me arrebatarás as tuas filhas.
³² Com quem achares os teus deuses, esse não viva; reconhece diante de nossos irmãos o que é teu do que está comigo e toma-o para ti. Pois Jacó não sabia que Raquel os tivesse furtado.
³³ Então, entrou Labão na tenda de Jacó, e na tenda de Lia, e na tenda de ambas as servas e não os achou; e, saindo da tenda de Lia, entrou na tenda de Raquel.
³⁴ Mas tinha tomado Raquel os ídolos, e os tinha posto na albarda de um camelo, e assentara-se sobre eles; e apalpou Labão toda a tenda e não os achou.
³⁵ E ela disse a seu pai: Não se acenda a ira nos olhos de meu senhor, que não posso levantar-me diante da tua face, porquanto tenho o costume das mulheres. E ele buscou, mas não achou os ídolos.
³⁶ Então, irou-se Jacó e contendeu com Labão. E respondeu Jacó e disse a Labão: Qual é a minha transgressão? Qual é o meu pecado, que tão furiosamente me tens perseguido?
³⁷ Havendo apalpado todos os meus móveis, que achaste de todos os móveis da tua casa? Põe-no aqui diante de meus irmãos e de teus irmãos, e que julguem entre nós ambos.
³⁸ Estes vinte anos estive contigo; as tuas ovelhas e as tuas cabras nunca abortaram, e não comi os carneiros do teu rebanho.
³⁹ Não te trouxe o despedaçado; eu pagava o dano; da minha mão o requerias, fosse furtado de dia ou furtado de noite.
⁴⁰ Estava eu de sorte que de dia me consumia o calor, e de noite, a geada; e o meu sono fugia dos meus olhos.
⁴¹ Tenho estado agora vinte anos na tua casa; catorze anos te servi por tuas duas filhas e seis anos por teu rebanho; mas o meu salário mudaste dez vezes.
⁴² Se o Deus de meu pai, o Deus de Abraão e o Temor de Isaque, não fora comigo, por certo me despedirias agora vazio. Deus viu a minha aflição e o trabalho das minhas mãos e repreendeu-te ontem à noite.
⁴³ Então, respondeu Labão e disse a Jacó: Estas filhas são minhas filhas, e estes filhos são meus filhos, e este rebanho é o meu rebanho, e tudo o que vês é meu; e que farei hoje a estas minhas filhas ou aos filhos que tiveram?
⁴⁴ Vem, pois, agora, e façamos um concerto, eu e tu, que sirva de testemunho entre mim e ti.
⁴⁵ Então, tomou Jacó uma pedra e erigiu-a por coluna.
⁴⁶ E disse Jacó a seus irmãos: Ajuntai pedras. E tomaram pedras, e fizeram um montão, e comeram ali sobre aquele montão.
⁴⁷ E chamou-o Labão Jegar-Saaduta; porém Jacó chamou-o Galeade.
⁴⁸ Então, disse Labão: Este montão seja hoje testemunha entre mim e ti. Por isso, se chamou o seu nome Galeade
⁴⁹ e Mizpá, porquanto disse: Atente o SENHOR entre mim e ti, quando estivermos apartados um do outro.
⁵⁰ Se afligires as minhas filhas e se tomares mulheres além das minhas filhas, ninguém está conosco; olha, Deus é testemunha entre mim e ti.
⁵¹ Disse mais Labão a Jacó: Eis aqui este montão e eis aqui esta coluna que levantei entre mim e ti.
⁵² Este montão seja testemunha, e esta coluna seja testemunha de que eu não passarei este montão para ti e que tu não passarás este montão e esta coluna para mim, para mal.
⁵³ O Deus de Abraão e o Deus de Naor, o Deus de seu pai, julgue entre nós. E jurou Jacó pelo Temor de seu pai Isaque.
⁵⁴ E Jacó ofereceu um sacrifício na montanha e chamou seus irmãos para comerem pão; e comeram pão e passaram a noite na montanha.
⁵⁵ E levantou-se Labão pela manhã, de madrugada, e beijou seus filhos e suas filhas, e abençoou-os; e partiu e voltou Labão ao seu lugar.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Durante o confronto com Labão, quantos anos ao todo Jacó afirmou ter servido na casa de seu sogro?",
                opcoes: [
                    { numero: 1, texto: "Sete anos", correta: false },
                    { numero: 2, texto: "Quatorze anos", correta: false },
                    { numero: 3, texto: "Vinte anos", correta: true },
                    { numero: 4, texto: "Trinta anos", correta: false }
                ],
                explicacao: "Gênesis 31:41 - Jacó declara que serviu 14 anos pelas filhas de Labão e 6 anos pelo rebanho, totalizando 20 anos de trabalho sob condições difíceis.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 32 ---
        32: {
            titulo: "O Encontro em Peniel",
            subtitulo: "A preparação para ver Esaú e a luta com o Anjo",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Jacó também seguiu o seu caminho, e encontraram-no os anjos de Deus.
² E Jacó disse, quando os viu: Este é o exército de Deus. E chamou o nome daquele lugar Maanaim.
³ E enviou Jacó mensageiros diante de sua face a Esaú, seu irmão, à terra de Seir, território de Edom.
⁴ E ordenou-lhes, dizendo: Assim direis a meu senhor Esaú: Assim diz Jacó, teu servo: Como peregrino morei com Labão e me detive lá até agora;
⁵ e tenho bois, e jumentos, e ovelhas, e servos, e servas; e enviei a avisar a meu senhor, para que ache graça em teus olhos.
⁶ E os mensageiros voltaram a Jacó, dizendo: Fomos a teu irmão Esaú; e também ele vem ao teu encontro, e quatrocentos varões com ele.
⁷ Então, Jacó temeu muito e angustiou-se; e repartiu o povo que com ele estava, e as ovelhas, e as vacas, e os camelos em dois bandos.
⁸ Porque dizia: Se Esaú vier a um bando e o ferir, o outro bando escapará.
⁹ Disse mais Jacó: Deus de meu pai Abraão e Deus de meu pai Isaque, o SENHOR, que me disseste: Torna-te à tua terra e à tua parentela, e far-te-ei bem;
¹⁰ menor sou eu que todas as misericórdias e que toda a verdade que fizeste a teu servo; porque com o meu cajado passei este Jordão e agora me tornei em dois bandos.
¹¹ Livra-me, peço-te, da mão de meu irmão, da mão de Esaú, porque o temo, para que não venha e me fira, e a mãe com os filhos.
¹² E tu disseste: Certamente te farei bem e farei a tua semente como a areia do mar, que pela multidão não se pode contar.
¹³ E passou ali aquela noite; e tomou do que lhe veio à mão um presente para seu irmão Esaú:
¹⁴ duzentas cabras e vinte bodes; duzentas ovelhas e vinte carneiros;
¹⁵ trinta camelos de leite com suas crias, quarenta vacas e dez touros; vinte jumentas e dez jumentinhos.
¹⁶ E deu-os na mão dos seus servos, cada rebanho à parte, e disse a seus servos: Passai adiante de minha face e ponde espaço entre rebanho e rebanho.
¹⁷ E ordenou ao primeiro, dizendo: Quando Esaú, meu irmão, te encontrar e te perguntar, dizendo: De quem és, e para onde vais, e de quem são estes diante de tua face?
¹⁸ Então, dirás: São de teu servo Jacó, presente que envia a meu senhor Esaú; e eis que ele mesmo vem também atrás de nós.
¹⁹ E ordenou também ao segundo, e ao terceiro, e a todos os que vinham atrás dos rebanhos, dizendo: Conforme esta palavra falareis a Esaú, quando o achardes.
²⁰ E direis também: Eis que o teu servo Jacó vem atrás de nós. Porque dizia: Aplacarei a sua face com o presente que vai diante de mim e, depois, verei a sua face; porventura, me aceitará.
²¹ Assim, passou o presente diante de sua face; porém ele passou aquela noite no arraial.
²² E levantou-se aquela mesma noite, e tomou as suas duas mulheres, e as suas duas servas, e os seus onze filhos, e passou o vau de Jaboque.
²³ E tomou-os e fê-los passar o ribeiro; e fez passar tudo o que tinha.
²⁴ Jacó, porém, ficou só; e lutou com ele um varão, até que a alva subia.
²⁵ E, vendo que não prevalecia contra ele, tocou a juntura de sua coxa; e deslocou-se a juntura da coxa de Jacó, lutando com ele.
²⁶ E disse: Deixa-me ir, porque já a alva subiu. Porém ele disse: Não te deixarei ir, se me não abençoares.
²⁷ E disse-lhe: Qual é o teu nome? E ele disse: Jacó.
²⁸ Então, disse: Não se chamará mais o teu nome Jacó, mas Israel, pois, como príncipe, lutaste com Deus e com os homens e prevaleceste.
²⁹ E Jacó lhe perguntou e disse: Dá-me, peço-te, a saber o teu nome. E disse: Por que perguntas pelo meu nome? E abençoou-o ali.
³⁰ E chamou Jacó o nome daquele lugar Peniel, porque dizia: Tenho visto a Deus face a face, e a minha alma foi salva.
³¹ E nasceu-lhe o sol, quando passava de Peniel; e manquejava da sua coxa.
³² Por isso, os filhos de Israel não comem o nervo encolhido, que está sobre a juntura da coxa, até ao dia de hoje, porquanto tocara a juntura da coxa de Jacó no nervo encolhido.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Qual foi o novo nome dado a Jacó após ele lutar com um varão até o amanhecer e prevalecer?",
                opcoes: [
                    { numero: 1, texto: "Peniel", correta: false },
                    { numero: 2, texto: "Israel", correta: true },
                    { numero: 3, texto: "Edom", correta: false },
                    { numero: 4, texto: "Maanaim", correta: false }
                ],
                explicacao: "Gênesis 32:28 - O seu nome foi mudado para Israel, pois, como príncipe, ele lutou com Deus e com os homens e prevaleceu.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 33 ---
        33: {
            titulo: "O Reencontro de Jacó e Esaú",
            subtitulo: "A reconciliação dos irmãos e a chegada a Siquém",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E levantou Jacó os seus olhos e olhou, e eis que vinha Esaú, e quatrocentos varões com ele. Então, repartiu os filhos entre Lia, e Raquel, e as duas servas.
² E pôs as servas e seus filhos na frente, e a Lia e seus filhos atrás, e a Raquel e José os últimos.
³ E ele mesmo passou adiante deles e inclinou-se à terra sete vezes, até que chegou a seu irmão.
⁴ Então, Esaú correu-lhe ao encontro, e abraçou-o, e lançou-se sobre o seu pescoço, e beijou-o; e choraram.
⁵ Depois, levantou os seus olhos, e viu as mulheres e os meninos, e disse: Quem são estes contigo? E ele disse: Os filhos que Deus graciosamente tem dado a teu servo.
⁶ Então, chegaram as servas, elas e os seus filhos, e inclinaram-se.
⁷ E chegou também Lia com seus filhos, e inclinaram-se; e, depois, chegou José e Raquel e inclinaram-se.
⁸ E disse Esaú: Que queres tu com todo este bando que tenho encontrado? E ele disse: Para achar graça aos olhos de meu senhor.
⁹ Mas Esaú disse: Eu tenho muito, meu irmão; seja teu o que tens.
¹⁰ Então, disse Jacó: Não! Mas, se agora tenho achado graça em teus olhos, peço-te que tomes o meu presente da minha mão; porquanto tenho visto o teu rosto, como se tivesse visto o rosto de Deus, e tu te agradaste de mim.
¹¹ Toma, peço-te, a minha bênção, que te foi trazida; porque Deus graciosamente ma tem dado e porque tenho de tudo. E instou com ele, e ele a tomou.
¹² E disse: Caminhemos e vamos; e eu irei adiante de ti.
¹³ Porém ele lhe disse: Meu senhor sabe que estes filhos são ternos e que tenho comigo ovelhas e vacas de leite; se as afadigarem um só dia, todo o rebanho morrerá.
¹⁴ Passe, ora, meu senhor diante da face de seu servo; e eu irei como o passo do gado que está diante de minha face e como o passo dos meninos, até que chegue a meu senhor, em Seir.
¹⁵ E Esaú disse: Deixarei, logo, contigo alguns do povo que está comigo. E ele disse: Para que é isso? Basta que eu ache graça aos olhos de meu senhor.
¹⁶ Assim, voltou Esaú aquele dia pelo seu caminho a Seir.
¹⁷ Jacó, porém, partiu para Sucote, e edificou para si uma casa, e fez cabanas para o seu gado; por isso, chamou o nome daquele lugar Sucote.
¹⁸ E veio Jacó salvo à cidade de Siquém, que está na terra de Canaã, quando vinha de Padã-Arã; e acampou diante da cidade.
¹⁹ E comprou uma parte do campo, em que estendera a sua tenda, da mão dos filhos de Hamor, pai de Siquém, por cem peças de dinheiro.
²⁰ E levantou ali um altar e chamou-lhe: Deus, o Deus de Israel.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Como foi a reação de Esaú ao encontrar Jacó, após tantos anos de separação e mágoa?",
                opcoes: [
                    { numero: 1, texto: "Ele o atacou com os seus quatrocentos homens", correta: false },
                    { numero: 2, texto: "Ele correu ao seu encontro, abraçou-o e o beijou", correta: true },
                    { numero: 3, texto: "Ele se recusou a falar com Jacó e voltou para Seir", correta: false },
                    { numero: 4, texto: "Ele exigiu que Jacó devolvesse a primogenitura", correta: false }
                ],
                explicacao: "Gênesis 33:4 - Contrariando o medo de Jacó, Esaú demonstrou um coração transformado, correndo para abraçar e beijar seu irmão, e ambos choraram.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 34 ---
        34: {
            titulo: "O Incidente em Siquém",
            subtitulo: "A desonra de Diná e a vingança de Simeão e Levi",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E saiu Diná, filha de Lia, que esta dera a Jacó, para ver as filhas daquela terra.
² E viu-a Siquém, filho de Hamor, o heveu, príncipe daquela terra, e tomou-a, e deitou-se com ela, e humilhou-a.
³ E apegou-se a sua alma com Diná, filha de Jacó, e amou a moça e falou afeituosamente à moça.
⁴ Falou também Siquém a Hamor, seu pai, dizendo: Toma-me esta moça por mulher.
⁵ E ouviu Jacó que Siquém havia humilhado a Diná, sua filha; porém, estando os seus filhos no campo com o seu gado, calou-se Jacó até que viessem.
⁶ E Hamor, pai de Siquém, saiu a Jacó, para falar com ele.
⁷ E vieram os filhos de Jacó do campo, logo que o ouviram, e entristeceram-se os varões e iraram-se muito, porquanto Siquém fizera doidice em Israel, deitando-se com a filha de Jacó, o que não se devia fazer.
⁸ Então, falou Hamor com eles, dizendo: A alma de meu filho Siquém está mui apegada com a vossa filha; dai-lha, peço-vos, por mulher.
⁹ E aparentai-vos conosco: dai-nos as vossas filhas e tomai as nossas filhas para vós.
¹⁰ E habitareis conosco; e a terra estará diante de vós; habitai, e negociai nela, e possuí nela.
¹¹ E disse Siquém a seu pai e a seus irmãos: Ache eu graça em vossos olhos e darei o que me disserdes.
¹² Aumentai muito sobre mim o dote e a dádiva, e darei o que me disserdes; dai-me somente a moça por mulher.
¹³ Então, responderam os filhos de Jacó a Siquém e a Hamor, seu pai, enganosamente e falaram, porquanto havia humilhado a Diná, sua irmã.
¹⁴ E disseram-lhes: Não podemos fazer isto, dar a nossa irmã a um varão que tem prepúcio; porque isso seria uma vergonha para nós.
¹⁵ Nisto, porém, consentiremos convosco: se fordes como nós, que se circuncide todo macho entre vós;
¹⁶ então, daremos as nossas filhas a vós e tomaremos as vossas filhas para nós; e habitaremos convosco e seremos um só povo.
¹⁷ Mas, se não nos ouvirdes e não vos circuncidardes, tomaremos a nossa filha e ir-nos-emos.
¹⁸ E suas palavras foram boas aos olhos de Hamor e aos olhos de Siquém, filho de Hamor.
¹⁹ E não tardou o jovem em fazer isto, porque se agradava da filha de Jacó; e ele era o mais honrado de toda a casa de seu pai.
²⁰ Vieram, pois, Hamor e Siquém, seu filho, à porta da sua cidade e falaram aos varões da sua cidade, dizendo:
²¹ Estes varões são pacíficos conosco; portanto, habitem na terra e negociem nela; eis que a terra é larga de espaço diante de sua face; tomemos as suas filhas por mulheres e demos-lhes as nossas filhas.
²² Nisto, porém, consentirão aqueles varões em habitar conosco, para que sejamos um só povo: se todo macho entre nós se circuncidar, como eles são circuncidados.
²³ O seu gado, e as suas possessões, e todos os seus animais não serão nossos? Consintamos somente com eles, e habitarão conosco.
²⁴ E deram ouvidos a Hamor e a Siquém, seu filho, todos os que saíam da porta da sua cidade; e circuncidou-se todo macho, de todos os que saíam pela porta da sua cidade.
²⁵ E aconteceu que, ao terceiro dia, quando estavam na dor, os dois filhos de Jacó, Simeão e Levi, irmãos de Diná, tomaram cada um a sua espada, e entraram na cidade confiadamente, e mataram todos os machos.
²⁶ Mataram também a fio de espada a Hamor e a seu filho Siquém; e tomaram a Diná da casa de Siquém e saíram.
²⁷ Vieram os filhos de Jacó aos mortos e saquearam a cidade, porquanto haviam humilhado a sua irmã.
²⁸ As suas ovelhas, e as suas vacas, e os seus jumentos, e o que na cidade e o que no campo havia tomaram.
²⁹ E toda a sua fazenda, e todos os seus meninos, e as suas mulheres levaram presos e saquearam tudo o que havia em casa.
³⁰ Então, disse Jacó a Simeão e a Levi: Tendes-me turbado, fazendo-me cheirar mal entre os moradores desta terra, entre os cananeus e ferezeus; sendo eu pouco povo, ajuntar-se-ão contra mim, e ferir-me-ão, e serei destruído, eu e a minha casa.
³¹ E eles disseram: Havia ele de tratar a nossa irmã como a uma meretriz?`,
            
            // O DESAFIO
            pergunta: {
                texto: "Quais foram os dois filhos de Jacó que lideraram o ataque à cidade de Siquém para vingar a honra de sua irmã Diná?",
                opcoes: [
                    { numero: 1, texto: "Rúben e Judá", correta: false },
                    { numero: 2, texto: "Simeão e Levi", correta: true },
                    { numero: 3, texto: "José e Benjamim", correta: false },
                    { numero: 4, texto: "Dã e Naftali", correta: false }
                ],
                explicacao: "Gênesis 34:25 - Simeão e Levi, irmãos de Diná, tomaram cada um a sua espada e entraram na cidade enquanto os homens estavam fragilizados, matando todos os machos.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 35 ---
        35: {
            titulo: "O Retorno a Betel e as Doze Tribos",
            subtitulo: "A purificação da família, a morte de Raquel e o legado de Isaque",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Depois, disse Deus a Jacó: Levanta-te, sobe a Betel e habita ali; e faze ali um altar ao Deus que te apareceu quando fugias da face de Esaú, teu irmão.
² Então, disse Jacó à sua família e a todos os que com ele estavam: Tirai os deuses estranhos que há no meio de vós, e purificai-vos, e mudai os vossos vestidos.
³ E levantemo-nos e subamos a Betel; e ali farei um altar ao Deus que me respondeu no dia da minha angústia e que foi comigo no caminho que tenho andado.
⁴ Então, deram a Jacó todos os deuses estranhos que tinham em suas mãos e as arrecadas que estavam em suas orelhas; e Jacó os escondeu debaixo do carvalho que está junto a Siquém.
⁵ E partiram; e o terror de Deus foi sobre as cidades que estavam ao redor deles, e não perseguiram os filhos de Jacó.
⁶ Assim, chegou Jacó a Luz, que está na terra de Canaã (esta é Betel), ele e todo o povo que com ele estava.
⁷ E edificou ali um altar e chamou aquele lugar El-Betel; porquanto ali Deus se lhe tinha revelado quando fugia da face de seu irmão.
⁸ E morreu Débora, a ama de Rebeca, e foi sepultada ao pé de Betel, debaixo do carvalho cujo nome chamou Alom-Bacute.
⁹ E apareceu Deus outra vez a Jacó, vindo de Padã-Arã, e abençoou-o.
¹⁰ E disse-lhe Deus: O teu nome é Jacó; não se chamará mais o teu nome Jacó, mas Israel será o teu nome. E chamou o seu nome Israel.
¹¹ Disse-lhe mais Deus: Eu sou o Deus Todo-Poderoso; frutifica e multiplica-te; uma nação e multidão de nações sairão de ti, e reis sairão dos teus lombos.
¹² E te darei a terra que tenho dado a Abraão e a Isaque e à tua semente depois de ti darei a terra.
¹³ E Deus subiu dele, do lugar onde falara com ele.
¹⁴ E Jacó pôs uma coluna no lugar onde falara com ele, uma coluna de pedra; e derramou sobre ela uma libação e deitou sobre ela azeite.
¹⁵ E chamou Jacó o nome daquele lugar, onde Deus falara com ele, Betel.
¹⁶ E partiram de Betel; e havia ainda um pequeno espaço de terra para chegar a Efrata, e deu à luz Raquel e teve trabalho em seu parto.
¹⁷ E aconteceu que, tendo ela trabalho em seu parto, lhe disse a parteira: Não temas, pois também este filho terás.
¹⁸ E aconteceu que, saindo-lhe a alma (porque morreu), chamou o seu nome Benoni; mas seu pai chamou-o Benjamim.
¹⁹ Assim, morreu Raquel e foi sepultada no caminho de Efrata (esta é Belém).
²⁰ E Jacó pôs uma coluna sobre a sua sepultura; esta é a coluna da sepultura de Raquel até hoje.
²¹ Então, partiu Israel e estendeu a sua tenda além da torre de Éder.
²² E aconteceu que, habitando Israel naquela terra, foi Rúben e deitou-se com Bila, concubina de seu pai; e Israel o soube. E eram doze os filhos de Jacó:
²³ os filhos de Lia: Rúben, o primogênito de Jacó, depois Simeão e Levi, Judá, Issacar e Zebulom;
²⁴ os filhos de Raquel: José e Benjamim;
²⁵ os filhos de Bila, serva de Raquel: Dã e Naftali;
²⁶ os filhos de Zilpa, serva de Lia: Gade e Aser. Estes são os filhos de Jacó, que lhe nasceram em Padã-Arã.
²⁷ E veio Jacó a Isaque, seu pai, a Manre, a Quiriate-Arba (esta é Hebrom), onde peregrinaram Abraão e Isaque.
²⁸ E foram os dias de Isaque cento e oitenta anos.
²⁹ E Isaque expirou, e morreu, e foi congregado ao seu povo, velho e farto de dias; e Esaú e Jacó, seus filhos, o sepultaram.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Como se chamou o último filho de Jacó, que nasceu durante a viagem para Efrata e cuja mãe, Raquel, morreu no parto?",
                opcoes: [
                    { numero: 1, texto: "José", correta: false },
                    { numero: 2, texto: "Rúben", correta: false },
                    { numero: 3, texto: "Benjamim", correta: true },
                    { numero: 4, texto: "Levi", correta: false }
                ],
                explicacao: "Gênesis 35:18 - Raquel, antes de morrer, chamou-o Benoni (filho da minha dor), mas Jacó chamou-o Benjamim (filho da mão direita).",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 36 ---
        36: {
            titulo: "As Gerações de Esaú",
            subtitulo: "A linhagem de Edom e a ocupação da montanha de Seir",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E estas são as gerações de Esaú (que é Edom).
² Esaú tomou suas mulheres das filhas de Canaã: Ada, filha de Elom, heteu, e Oolibama, filha de Aná, filha de Zibeão, heveu,
³ e Basemate, filha de Ismael, irmã de Nebaiote.
⁴ E Ada deu a Esaú a Elifaz; e Basemate deu a Reuel;
⁵ e Oolibama deu a Jeús, e Jalão, e Corá. Estes são os filhos de Esaú, que lhe nasceram na terra de Canaã.
⁶ E tomou Esaú suas mulheres, e seus filhos, e suas filhas, e todas as almas de sua casa, e seu gado, e todos os seus animais, e toda a sua fazenda, que havia adquirido na terra de Canaã; e foi-se a outra terra, de diante da face de Jacó, seu irmão.
⁷ Porque a fazenda deles era muita para habitarem juntos; e a terra de suas peregrinações não os podia sustentar por causa do seu gado.
⁸ Portanto, Esaú habitou na montanha de Seir; Esaú é Edom.
⁹ Estas, pois, são as gerações de Esaú, pai dos edomitas, na montanha de Seir.
¹⁰ Estes são os nomes dos filhos de Esaú: Elifaz, filho de Ada, mulher de Esaú; Reuel, filho de Basemate, mulher de Esaú.
¹¹ E os filhos de Elifaz foram: Temã, Omar, Zefô, Gataã e Quenaz.
¹² E Timna era concubina de Elifaz, filho de Esaú, e deu a Elifaz a Amaleque. Estes são os filhos de Ada, mulher de Esaú.
¹³ E estes foram os filhos de Reuel: Naate, Zerá, Samá e Mizá; estes foram os filhos de Basemate, mulher de Esaú.
¹⁴ E estes foram os filhos de Oolibama, mulher de Esaú, filha de Aná, filha de Zibeão: ela deu a Esaú Jeús, Jalão e Corá.
¹⁵ Estes são os príncipes dos filhos de Esaú: os filhos de Elifaz, o primogênito de Esaú: o príncipe Temã, o príncipe Omar, o príncipe Zefô, o príncipe Quenaz,
¹⁶ o príncipe Corá, o príncipe Gataã, o príncipe Amaleque. Estes são os príncipes de Elifaz na terra de Edom; estes são os filhos de Ada.
¹⁷ E estes são os filhos de Reuel, filho de Esaú: o príncipe Naate, o príncipe Zerá, o príncipe Samá, o príncipe Mizá. Estes são os príncipes de Reuel na terra de Edom; estes são os filhos de Basemate, mulher de Esaú.
¹⁸ E estes são os filhos de Oolibama, mulher de Esaú: o príncipe Jeús, o príncipe Jalão, o príncipe Corá. Estes são os príncipes de Oolibama, filha de Aná, mulher de Esaú.
¹⁹ Estes são os filhos de Esaú, e estes são os seus príncipes; ele é Edom.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Para qual região geográfica Esaú se mudou com toda a sua família e rebanhos, estabelecendo ali a nação de Edom?",
                opcoes: [
                    { numero: 1, texto: "Montanha de Seir", correta: true },
                    { numero: 2, texto: "Terra de Canaã", correta: false },
                    { numero: 3, texto: "Egito", correta: false },
                    { numero: 4, texto: "Planície de Sodoma", correta: false }
                ],
                explicacao: "Gênesis 36:8-9 - Esaú habitou na montanha de Seir, tornando-se o pai dos edomitas, após separar-se de Jacó por causa da grande quantidade de gado que ambos possuíam.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 37 ---
        37: {
            titulo: "José é Vendido por seus Irmãos",
            subtitulo: "Os sonhos de José e a conspiração em Dotã",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E Jacó habitou na terra das peregrinações de seu pai, na terra de Canaã.
² Estas são as gerações de Jacó: Sendo José de dezessete anos, apascentava as ovelhas com seus irmãos; e estava este jovem com os filhos de Bila e com os filhos de Zilpa, mulheres de seu pai; e José trazia as más notícias deles a seu pai.
³ E Israel amava a José mais do que a todos os seus filhos, porque era filho da sua velhice; e fez-lhe uma túnica de várias cores.
⁴ Vendo, pois, seus irmãos que seu pai o amava mais do que a todos os seus irmãos, aborreceram-no e não podiam falar com ele pacificamente.
⁵ Sonhou também José um sonho, que contou a seus irmãos; por isso, o aborreceram ainda mais.
⁶ Pois disse-lhes: Ouvi, peço-vos, este sonho que tenho sonhado:
⁷ Eis que estávamos atando molhos no meio do campo, e eis que o meu molho se levantava e ficava em pé; e eis que os vossos molhos o rodeavam e se inclinavam ao meu molho.
⁸ Então, lhe disseram seus irmãos: Tu, pois, deveras reinarás sobre nós? Tu deveras terás domínio sobre nós? Por isso, ainda mais o aborreciam por seus sonhos e por suas palavras.
⁹ E sonhou ainda outro sonho, e o contou a seus irmãos, e disse: Eis que sonhei ainda outro sonho; e eis que o sol, e a lua, e onze estrelas se inclinavam a mim.
¹⁰ E, contando-o a seu pai e a seus irmãos, repreendeu-o seu pai e disse-lhe: Que sonho é este que sonhaste? Porventura viremos, eu, e tua mãe, e teus irmãos, a inclinar-nos perante ti em terra?
¹¹ Seus irmãos, pois, o invejavam; seu pai, porém, guardava este negócio no seu coração.
¹² E seus irmãos foram apascentar o rebanho de seu pai, junto de Siquém.
¹³ Disse, pois, Israel a José: Não apascentam os teus irmãos junto de Siquém? Vem, e enviar-te-ei a eles. E ele respondeu: Eis-me aqui.
¹⁴ E ele lhe disse: Vai, peço-te, vê se vão bem teus irmãos e se vai bem o rebanho, e traze-me resposta. Assim, o enviou do vale de Hebrom, e veio a Siquém.
¹⁵ E achou-o um varão, porque ele andava errante pelo campo, e perguntou-lhe o varão, dizendo: Que buscas?
¹⁶ E ele disse: Busco meus irmãos; dize-me, peço-te, onde apascentam eles.
¹¹⁷ E disse o varão: Foram-se daqui, porque ouvi-lhes dizer: Vamos a Dotã. José, pois, seguiu os seus irmãos e achou-os em Dotã.
¹⁸ E viram-no de longe e, antes que chegasse a eles, conspiraram contra ele, para o matarem.
¹⁹ E disseram um ao outro: Eis que lá vem o sonhador!
²⁰ Vinde, pois, agora, e matemo-lo, e lancemo-lo numa destas covas, e diremos: Uma besta-fera o comeu; e veremos que será dos seus sonhos.
²¹ E ouvindo-o Rúben, livrou-o das suas mãos e disse: Não lhe tiremos a vida.
²² Também lhes disse Rúben: Não derrameis sangue; lançai-o nesta cova que está no deserto e não ponhais mãos nele; isto disse para livrá-lo das suas mãos, a fim de o fazer tornar a seu pai.
²³ E aconteceu que, chegando José a seus irmãos, tiraram a José a sua túnica, a túnica de várias cores que trazia.
²⁴ E tomaram-no e lançaram-no na cova; porém a cova estava vazia, não havia água nela.
²⁵ Depois, assentaram-se a comer pão, e levantaram os olhos, e olharam, e eis que uma companhia de ismaelitas vinha de Gileade; e seus camelos traziam especiarias, e bálsamo, e mirra; e iam levar isso ao Egito.
²⁶ Então, disse Judá a seus irmãos: Que proveito haverá em que matemos a nosso irmão e escondamos o seu sangue?
²⁷ Vinde, e vendamo-lo a estes ismaelitas; e não seja nossa mão sobre ele, porque ele é nosso irmão, nossa carne. E seus irmãos obedeceram.
²⁸ Passando, pois, os mercadores midianitas, tiraram, e alçaram a José da cova, e venderam José por vinte moedas de prata aos ismaelitas; e estes levaram José ao Egito.
²⁹ Voltando, pois, Rúben à cova, eis que José não estava na cova; então, rasgou os seus vestidos,
³⁰ e voltou a seus irmãos, e disse: O moço não aparece; e eu, para onde irei?
³¹ Então, tomaram a túnica de José, e mataram um cabrito, e tingiram a túnica no sangue.
³² E enviaram a túnica de várias cores, e fizeram que a levassem a seu pai, e disseram: Temos achado esta túnica; conhece agora se esta é ou não a túnica de teu filho.
³³ E conheceu-a e disse: É a túnica de meu filho; uma besta-fera o comeu; certamente José foi despedaçado.
³⁴ Então, Jacó rasgou os seus vestidos, e pôs saco sobre os seus lombos, e lamentou a seu filho muitos dias.
³⁵ E levantaram-se todos os seus filhos e todas as suas filhas, para o consolarem; porém recusou ser consolado e disse: Porquanto com choro hei de descer ao meu filho até à sepultura. Assim o chorou seu pai.
³⁶ E os midianitas venderam-no no Egito a Potifar, eunuco de Faraó, capitão da guarda.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Por qual valor os irmãos de José o venderam aos mercadores ismaelitas que seguiam para o Egito?",
                opcoes: [
                    { numero: 1, texto: "Dez moedas de ouro", correta: false },
                    { numero: 2, texto: "Trinta moedas de prata", correta: false },
                    { numero: 3, texto: "Vinte moedas de prata", correta: true },
                    { numero: 4, texto: "Cinquenta peças de ouro", correta: false }
                ],
                explicacao: "Gênesis 37:28 - Por sugestão de Judá, os irmãos retiraram José da cova e o venderam por vinte moedas de prata aos ismaelitas.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 38 ---
        38: {
            titulo: "Judá e Tamar",
            subtitulo: "A quebra da promessa e a descendência de Perez",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E aconteceu, naquele mesmo tempo, que Judá desceu de seus irmãos e entrou a um varão de Adulame, cujo nome era Hira.
² E viu ali Judá a filha de um varão cananeu, cujo nome era Sua; e tomou-a e entrou a ela.
³ E ela concebeu e deu à luz um filho; e chamou o seu nome Er.
⁴ E concebeu outra vez e deu à luz um filho; e chamou o seu nome Onã.
⁵ E continuou ainda e deu à luz um filho; e chamou o seu nome Selá; e estava em Quezibe quando ela o deu à luz.
⁶ Judá, pois, tomou uma mulher para Er, o seu primogênito; e o seu nome era Tamar.
⁷ Er, porém, o primogênito de Judá, era mau aos olhos do SENHOR, pelo que o SENHOR o matou.
⁸ Então, disse Judá a Onã: Entra à mulher de teu irmão, e casa-te com ela, e suscita semente a teu irmão.
⁹ Onã, porém, soube que a semente não havia de ser para ele; e aconteceu que, quando entrava à mulher de seu irmão, derramava-a na terra, para não dar semente a seu irmão.
¹⁰ E o que fazia era mau aos olhos do SENHOR, pelo que também o matou.
¹¹ Então, disse Judá a Tamar, sua nora: Fica viúva na casa de teu pai, até que Selá, meu filho, cresça. Porque disse: Para que, porventura, não morra também este, como seus irmãos. Assim, foi-se Tamar e habitou na casa de seu pai.
¹² Passando, pois, muito tempo, morreu a filha de Sua, mulher de Judá; e, depois que Judá se consolou, subiu aos tosquiadores das suas ovelhas, em Timna, ele e Hira, seu amigo, o adulamita.
¹³ E deram aviso a Tamar, dizendo: Eis que o teu sogro sobe a Timna, a tosquiar as suas ovelhas.
¹⁴ Então, ela tirou de sobre si os vestidos da sua viuvez, e cobriu-se com o véu, e envolveu-se, e assentou-se à entrada das duas fontes que estão no caminho de Timna, porque via que Selá já era grande, e ela lhe não fora dada por mulher.
¹⁵ E, vendo-a Judá, teve-a por uma meretriz, porque ela havia coberto o rosto.
¹⁶ E desviou-se para ela no caminho e disse: Ora, deixa-me entrar a ti. Porquanto não sabia que era sua nora. E ela disse: Que me darás, para entrares a mim?
¹⁷ E ele disse: Eu te enviarei um cabrito do rebanho. E ela disse: Dar-me-ás um penhor até que o envies?
¹⁸ Então, ele disse: Que penhor é que te darei? E ela disse: O teu selo, e o teu cordão, e o cajado que está em tua mão. E deu-lhos, e entrou a ela, e ela concebeu dele.
¹⁹ E levantou-se, e foi-se, e tirou de sobre si o seu véu, e vestiu os vestidos da sua viuvez.
²⁰ E enviou Judá o cabrito por mão do seu amigo, o adulamita, para tomar o penhor da mão da mulher; porém não a achou.
²¹ E perguntou aos varões daquele lugar, dizendo: Onde está a meretriz que estava no caminho junto às duas fontes? E disseram: Aqui não houve meretriz alguma.
²² E voltou a Judá e disse: Não a achei; e também disseram os varões daquele lugar: Aqui não houve meretriz.
²³ Então, disse Judá: Tome ela para si, para que não caiamos em desprezo; eis que enviei este cabrito, mas tu não a achaste.
²⁴ E aconteceu que, quase passados três meses, deram aviso a Judá, dizendo: Tamar, tua nora, adulterou e eis que está pejada do adultério. Então, disse Judá: Tirai-a fora para que seja queimada.
²⁵ Tirando-a fora, enviou ela a dizer a seu sogro: Do varão de quem são estas coisas eu concebi. E disse mais: Conhece, peço-te, de quem são este selo, e estes cordões, e este cajado.
²⁶ E conheceu-os Judá e disse: Mais justa é ela do que eu, porquanto não a tenho dado a Selá, meu filho. E nunca mais a conheceu.
²⁷ E aconteceu que, ao tempo de dar à luz, eis que havia gêmeos em seu ventre.
²⁸ E aconteceu que, dando ela à luz, um pôs fora a mão, e a parteira tomou-a e atou em sua mão um fio de escarlata, dizendo: Este saiu primeiro.
²⁹ Mas aconteceu que, recolhendo ele a sua mão, eis que saiu o seu irmão; e ela disse: Como rompeste? Sobre ti seja a ruptura. E chamaram o seu nome Perez.
³⁰ E, depois, saiu o seu irmão, em cuja mão estava o fio de escarlata; e chamaram o seu nome Zerá.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Quais objetos Judá deixou com Tamar como penhor, que mais tarde serviram para provar que ele era o pai da criança?",
                opcoes: [
                    { numero: 1, texto: "Uma túnica, um anel e um colar", correta: false },
                    { numero: 2, texto: "Um selo, um cordão e um cajado", correta: true },
                    { numero: 3, texto: "Vinte moedas de prata e um cabrito", correta: false },
                    { numero: 4, texto: "Uma espada, um escudo e uma sandália", correta: false }
                ],
                explicacao: "Gênesis 38:18 - Tamar pediu o selo, o cordão e o cajado de Judá como garantia. Quando ele a acusou meses depois, ela apresentou esses objetos para mostrar a verdade.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 39 ---
        39: {
            titulo: "José na Casa de Potifar",
            subtitulo: "A ascensão, a tentação e a prisão injusta",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E José foi levado ao Egito, e Potifar, eunuco de Faraó, capitão da guarda, varão egípcio, comprou-o da mão dos ismaelitas que o tinham levado lá.
² E o SENHOR estava com José, e foi varão próspero; e estava na casa de seu senhor egípcio.
³ Vendo, pois, o seu senhor que o SENHOR estava com ele e que tudo o que ele fazia o SENHOR prosperava em sua mão,
⁴ José achou graça em seus olhos e servia-o; e ele o pôs sobre a sua casa e entregou na sua mão tudo o que tinha.
⁵ E aconteceu que, desde que o pusera sobre a sua casa e sobre tudo o que tinha, o SENHOR abençoou a casa do egípcio por amor de José; e a bênção do SENHOR foi sobre tudo o que tinha, na casa e no campo.
⁶ E deixou tudo o que tinha na mão de José, de sorte que de nada sabia, senão do pão que comia. E era José formoso de semblante e formoso à vista.
⁷ E aconteceu, depois destas coisas, que a mulher de seu senhor pôs os seus olhos em José e disse: Deita-te comigo.
⁸ Porém ele recusou e disse à mulher de seu senhor: Eis que o meu senhor não sabe do que está comigo na casa e entregou em minha mão tudo o que tem.
⁹ Ninguém há maior do que eu nesta casa, e nenhuma coisa me vedou, senão a ti, porquanto tu és sua mulher; como, pois, faria eu este tamanho mal e pecaria contra Deus?
¹⁰ E aconteceu que, falando ela cada dia a José, e não ouvindo-a ele para se deitar com ela e estar com ela,
¹¹ sucedeu, num certo dia, que entrou em casa para fazer o seu serviço; e nenhum dos da casa estava ali dentro.
¹² E ela lhe pegou pela sua veste, dizendo: Deita-te comigo. E ele deixou a sua veste na mão dela, e fugiu, e saiu para fora.
¹³ E aconteceu que, vendo ela que deixara a sua veste em sua mão e fugira para fora,
¹⁴ chamou os homens de sua casa e falou-lhes, dizendo: Vede, trouxe-nos o varão hebreu para escarnecer de nós; veio a mim para deitar-se comigo, e eu gritei com grande voz;
¹⁵ e aconteceu que, ouvindo ele que eu levantava a minha voz e gritava, deixou a sua veste comigo, e fugiu, e saiu para fora.
¹⁶ E ela pôs a sua veste junto de si, até que o seu senhor veio à sua casa.
¹⁷ Então, falou-lhe conforme as mesmas palavras, dizendo: Veio a mim o servo hebreu, que nos trouxte, para escarnecer de mim;
¹⁸ e aconteceu que, levantando eu a minha voz e gritando, deixou a sua veste comigo e fugiu para fora.
¹⁹ E aconteceu que, ouvindo o seu senhor as palavras de sua mulher, que lhe falava, dizendo: Conforme estas mesmas palavras me fez teu servo, a sua ira se acendeu.
²⁰ E o senhor de José o tomou e o entregou na casa do cárcere, no lugar onde os presos do rei estavam presos; assim, esteve ali na casa do cárcere.
²¹ O SENHOR, porém, estava com José, e estendeu sobre ele a sua benignidade, e deu-lhe graça aos olhos do carcereiro-mor.
²² E o carcereiro-mor entregou na mão de José todos os presos que estavam na casa do cárcere; e ele fazia tudo o que se fazia ali.
²³ E o carcereiro-mor não via coisa alguma que estava na mão dele, porquanto o SENHOR estava com ele; e tudo o que ele fazia, o SENHOR o prosperava.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Qual foi o principal argumento de José ao recusar as investidas da mulher de Potifar?",
                opcoes: [
                    { numero: 1, texto: "Ele tinha medo de ser morto por Potifar", correta: false },
                    { numero: 2, texto: "Ele não achava a mulher atraente", correta: false },
                    { numero: 3, texto: "Ele não queria pecar contra Deus e trair a confiança de seu senhor", correta: true },
                    { numero: 4, texto: "Ele planejava fugir do Egito naquela noite", correta: false }
                ],
                explicacao: "Gênesis 39:9 - José demonstrou temor a Deus e lealdade ao seu senhor, questionando como poderia cometer tamanha maldade e pecar contra o Senhor.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 40 ---
        40: {
            titulo: "José Interpreta Sonhos na Prisão",
            subtitulo: "O destino do copeiro e do padeiro de Faraó",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E aconteceu, depois destas coisas, que pecaram o copeiro do rei do Egito e o padeiro contra o seu senhor, o rei do Egito.
² E indignou-se Faraó muito contra os seus dois eunucos, contra o copeiro-mor e contra o padeiro-mor.
³ E entregou-os à prisão, na casa do capitão da guarda, na casa do cárcere, no lugar onde José estava preso.
⁴ E o capitão da guarda fê-los cargo de José, para que os servisse; e estiveram muitos dias na prisão.
⁵ E ambos sonharam um sonho, cada um seu sonho na mesma noite; cada um conforme a interpretação do seu sonho, o copeiro e o padeiro do rei do Egito, que estavam presos na casa do cárcere.
⁶ E veio José a eles pela manhã e viu-os, e eis que estavam turbados.
⁷ Então, perguntou aos eunucos de Faraó, que com ele estavam na prisão da casa de seu senhor, dizendo: Por que estão, hoje, maltratados os vossos rostos?
⁸ E eles lhe disseram: Temos sonhado um sonho, e ninguém há que o interprete. E José disse-lhes: Não são de Deus as interpretações? Contai-mo, peço-vos.
⁹ Então, contou o copeiro-mor o seu sonho a José e disse-lhe: Eis que em meu sonho havia uma vide diante de minha face.
¹⁰ E, na vide, três sarmentos; e ela estava como que brotando; a sua flor saía, e os seus cachos amadureciam em uvas.
¹¹ E o copo de Faraó estava em minha mão; e eu tomava as uvas, e as espremia no copo de Faraó, e dava o copo na mão de Faraó.
¹² Então, disse-lhe José: Esta é a sua interpretação: os três sarmentos são três dias;
¹³ dentro de ainda três dias, Faraó levantará a tua cabeça e te restaurará ao teu estado; e darás o copo de Faraó na sua mão, conforme o costume antigo, quando eras seu copeiro.
¹⁴ Porém lembra-te de mim, quando te for bem; e rogo-te que uses comigo de compaixão, e faças menção de mim a Faraó, e tires-me desta casa;
¹⁵ porque, de fato, fui roubado da terra dos hebreus; e aqui também nada tenho feito para que me pusessem nesta masmorra.
¹⁶ Vendo, então, o padeiro-mor que havia interpretado bem, disse a José: Eu também sonhei, e eis que três cestos brancos estavam sobre a minha cabeça;
¹⁷ e, no cesto mais alto, havia de todos os manjares de Faraó, obra de padeiro; e as aves os comiam no cesto sobre a minha cabeça.
¹⁸ Então, respondeu José e disse: Esta é a sua interpretação: os três cestos são três dias;
¹⁹ dentro de ainda três dias, Faraó levantará a tua cabeça sobre ti e te pendurará num madeiro, e as aves comerão a tua carne de sobre ti.
²⁰ E aconteceu, ao terceiro dia, o dia do nascimento de Faraó, que fez um banquete a todos os seus servos; e levantou a cabeça do copeiro-mor e a cabeça do padeiro-mor, no meio dos seus servos.
²¹ E restaurou o copeiro-mor ao seu ofício de copeiro, e este deu o copo na mão de Faraó;
²² mas ao padeiro-mor enforcou, como José havia interpretado.
²³ O copeiro-mor, porém, não se lembrou de José; antes, se esqueceu dele.`,
            
            // O DESAFIO
            pergunta: {
                texto: "O que aconteceu com o copeiro-mor três dias após José ter interpretado o seu sonho?",
                opcoes: [
                    { numero: 1, texto: "Ele foi executado conforme o sonho do padeiro", correta: false },
                    { numero: 2, texto: "Ele foi restaurado ao seu cargo diante de Faraó", correta: true },
                    { numero: 3, texto: "Ele fugiu da prisão com a ajuda de José", correta: false },
                    { numero: 4, texto: "Ele permaneceu preso por mais dez anos", correta: false }
                ],
                explicacao: "Gênesis 40:21 - Exatamente como José interpretara, o copeiro-mor foi restituído ao seu ofício de servir o copo na mão de Faraó.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 41 ---
        41: {
            titulo: "A Ascensão de José ao Governo",
            subtitulo: "Os sonhos de Faraó e o plano para salvar o Egito",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E aconteceu que, ao fim de dois anos inteiros, Faraó sonhou, e eis que estava em pé junto ao rio.
² E eis que subiam do rio sete vacas, formosas à vista e gordas de carne, e pastavam no prado.
³ E eis que outras sete vacas subiam após estas do rio, feias à vista e magras de carne; e pararam junto às outras vacas na praia do rio.
⁴ E as vacas feias à vista e magras de carne devoraram as sete vacas formosas à vista e gordas. Então, acordou Faraó.
⁵ Depois dormiu e sonhou outra vez; e eis que brotavam de um mesmo pé sete espigas cheias e boas.
⁶ E eis que sete espigas miúdas e queimadas do vento oriental brotavam após elas.
⁷ E as sete espigas miúdas devoravam as sete espigas grandes e cheias. Então, acordou Faraó, e eis que era sonho.
⁸ E aconteceu que, pela manhã, o seu espírito se perturbou; e mandou chamar todos os magos do Egito e todos os seus sábios; e Faraó contou-lhes os seus sonhos, mas ninguém havia que lhos interpretasse.
⁹ Então, falou o copeiro-mor a Faraó, dizendo: Das minhas ofensas me lembro hoje:
¹⁰ Estando Faraó muito indignado contra os seus servos, e pondo-me sob guarda na casa do capitão da guarda, a mim e ao padeiro-mor,
¹¹ então, tivemos um sonho na mesma noite, eu e ele; sonhamos, cada um conforme a interpretação do seu sonho.
¹² E estava ali conosco um jovem hebreu, servo do capitão da guarda; e contamos-lhos, e ele interpretou os nossos sonhos a cada um conforme o seu sonho interpretou.
¹³ E como ele nos interpretou, assim aconteceu; a mim me foi restituído o meu cargo, mas ele foi enforcado.
¹⁴ Então, enviou Faraó e chamou a José, e o fizeram sair logo da masmorra; e barbeou-se, e mudou as suas vestes, e veio a Faraó.
¹⁵ E Faraó disse a José: Eu tive um sonho, e ninguém há que o interprete; mas de ti tenho ouvido dizer que, quando ouves um sonho, o interpretas.
¹⁶ E respondeu José a Faraó, dizendo: Isso não está em mim; Deus dará resposta de paz a Faraó.
¹⁷ Então, disse Faraó a José: Eis que em meu sonho estava eu em pé na praia do rio,
¹⁸ e eis que subiam do rio sete vacas gordas de carne e formosas à vista e pastavam no prado.
¹⁹ E eis que outras sete vacas subiam após estas, fracas, e muito feias à vista, e magras de carne; nunca vi outras tais, quanto à fealdade, em toda a terra do Egito.
²⁰ E as vacas magras e feias devoraram as primeiras sete vacas gordas;
²¹ e entraram no seu ventre, mas não se conhecia que houvessem entrado no seu ventre; porque o seu parecer era feio como no princípio. Então, acordei.
²² Depois vi em meu sonho, e eis que de um mesmo pé subiam sete espigas cheias e boas;
²³ e eis que sete espigas secas, miúdas e queimadas do vento oriental brotavam após elas.
²⁴ E as espigas miúdas devoravam as sete espigas boas; e disse-o aos magos, mas ninguém houve que mo interpretasse.
²⁵ Então, disse José a Faraó: O sonho de Faraó é um só; o que Deus há de fazer, notificou-o a Faraó.
²⁶ As sete vacas boas são sete anos; as sete espigas boas são também sete anos; o sonho é um só.
²⁷ E as sete vacas magras e feias, que subiam após elas, são sete anos; e as sete espigas miúdas e queimadas do vento oriental serão sete anos de fome.
²⁸ Esta é a palavra que tenho dito a Faraó: o que Deus há de fazer, mostrou-o a Faraó.
²⁹ Eis que vêm sete anos, e haverá grande fartura em toda a terra do Egito.
³⁰ E levantar-se-ão após eles sete anos de fome, e toda aquela fartura será esquecida na terra do Egito; e a fome consumirá a terra.
³¹ E não será conhecida a abundância na terra, por causa daquela fome que haverá depois; porquanto será gravíssima.
³² E o sonho de Faraó duplicou-se, porquanto esta coisa é determinada por Deus, e Deus se apressa a fazê-la.
³³ Portanto, proveja-se agora Faraó de um homem entendido e sábio, e o ponha sobre a terra do Egito.
³⁴ Faça isso Faraó, e ponha governadores sobre a terra, e tome a quinta parte da terra do Egito nos sete anos de fartura,
³⁵ e ajuntem toda a comida destes bons anos que vêm, e amontoem trigo debaixo da mão de Faraó, para mantimento nas cidades, e o guardem.
³⁶ Assim, será o mantimento para provimento da terra, para os sete anos de fome, que haverá na terra do Egito; para que a terra não pereça de fome.
³⁷ E esta palavra foi boa aos olhos de Faraó e aos olhos de todos os seus servos.
³⁸ E disse Faraó a seus servos: Acharíamos um homem como este, em quem haja o Espírito de Deus?
³⁹ Depois disse Faraó a José: Pois que Deus te fez saber tudo isto, ninguém há tão entendido e sábio como tu.
⁴⁰ Tu estarás sobre a minha casa, e por tua boca se governará todo o meu povo; somente no trono eu serei maior que tu.
⁴¹ Disse mais Faraó a José: Vês aqui te tenho posto sobre toda a terra do Egito.
⁴² E tirou Faraó o seu anel da sua mão e o pôs na mão de José, e o fez vestir de roupas de linho fino, e pôs um colar de ouro no seu pescoço.
⁴³ E o fez subir no segundo carro que tinha, e clamavam diante dele: Ajoelhai-vos. Assim, o pôs sobre toda a terra do Egito.
⁴⁴ Disse mais Faraó a José: Eu sou Faraó; porém, sem ti ninguém levantará a sua mão ou o seu pé em toda a terra do Egito.
⁴⁵ E chamou Faraó o nome de José Zafenate-Paneia e deu-lhe por mulher a Azenate, filha de Potífera, sacerdote de Om; e saiu José por toda a terra do Egito.
⁴⁶ E José era da idade de trinta anos quando se apresentou diante de Faraó, rei do Egito; e saiu José da presença de Faraó e passou por toda a terra do Egito.
⁴⁷ E a terra produziu nos sete anos de fartura a mãos cheias.
⁴⁸ E ajuntou toda a comida dos sete anos, que houve na terra do Egito, e guardou-a nas cidades; o mantimento do campo que estava ao redor de cada cidade, guardou-o dentro dela.
⁴⁹ Assim, ajuntou José muitíssimo trigo, como a areia do mar, até cessar de contar, porquanto não havia número.
⁵⁰ E nasceram a José dois filhos, antes que viesse o ano da fome, que lhe deu Azenate, filha de Potífera, sacerdote de Om.
⁵¹ E chamou José o nome do primogênito Manassés; porque disse: Deus me fez esquecer de todo o meu trabalho e de toda a casa de meu pai.
⁵² E o nome do segundo chamou Efraim; porque disse: Deus me fez crescer na terra da minha aflição.
⁵³ Então, acabaram-se os sete anos de fartura que havia na terra do Egito,
⁵⁴ e começaram a vir os sete anos de fome, como José tinha dito; e havia fome em todas as terras, mas em toda a terra do Egito havia pão.
⁵⁵ E toda a terra do Egito teve fome, e o povo clamou a Faraó por pão; e Faraó disse a todos os egípcios: Ide a José; o que ele vos disser fazei.
⁵⁶ Havendo, pois, fome sobre toda a terra, abriu José tudo em que havia mantimento e vendia aos egípcios; porque a fome prevaleceu na terra do Egito.
⁵⁷ E de todas as terras vinham ao Egito, para comprar de José; porquanto a fome prevaleceu em todas as terras.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Qual foi a estratégia proposta por José a Faraó para que o Egito sobrevivesse aos sete anos de fome que viriam?",
                opcoes: [
                    { numero: 1, texto: "Comprar trigo de outras nações vizinhas", correta: false },
                    { numero: 2, texto: "Armazenar a quinta parte da colheita durante os sete anos de fartura", correta: true },
                    { numero: 3, texto: "Orar nos templos egípcios para que a fome não viesse", correta: false },
                    { numero: 4, texto: "Construir novos canais de irrigação no Rio Nilo", correta: false }
                ],
                explicacao: "Gênesis 41:34 - José sugeriu que Faraó recolhesse a quinta parte (20%) da produção da terra durante os anos de abundância para servir de reserva para os anos de escassez.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 42 ---
        42: {
            titulo: "O Primeiro Reencontro no Egito",
            subtitulo: "A viagem dos irmãos de José e o teste da retidão",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Vendo, pois, Jacó que havia mantimento no Egito, disse Jacó a seus filhos: Por que estais olhando uns para os outros?
² Disse mais: Eis que tenho ouvido que há mantimento no Egito; descei para lá e comprai-nos dali, para que vivamos e não morramos.
³ Então, desceram dez dos irmãos de José, para comprarem trigo no Egito.
⁴ A Benjamim, porém, irmão de José, não enviou Jacó com seus irmãos, porque dizia: Para que lhe não suceda algum desastre.
⁵ Assim, vieram os filhos de Israel para comprar, entre os que vinham lá; porque havia fome na terra de Canaã.
⁶ José, pois, era o governador daquela terra; ele vendia a todo o povo da terra; e os irmãos de José vieram e inclinaram-se a ele com a face na terra.
⁷ José, vendo seus irmãos, conheceu-os; porém fez-se estranho para com eles, e falou-lhes asperamente, e disse-lhes: Donde vindes? E eles disseram: Da terra de Canaã, para comprarmos mantimento.
⁸ José, pois, conheceu seus irmãos; mas eles não o conheceram.
⁹ Então, José lembrou-se dos sonhos que havia tido deles e disse-lhes: Vós sois espias e viestes para ver a nudez da terra.
¹⁰ E eles lhe disseram: Não, senhor meu; mas teus servos vieram comprar mantimento.
¹¹ Todos nós somos filhos de um homem; somos homens de retidão; teus servos não são espias.
¹² E ele lhes disse: Não; antes viestes para ver a nudez da terra.
¹³ E eles disseram: Nós, teus servos, somos doze irmãos, filhos de um homem na terra de Canaã; e eis que o mais novo está hoje com nosso pai, e o outro já não existe.
¹⁴ Então, lhes disse José: Isso é o que vos tenho dito, dizendo que sois espias;
¹⁵ nisto sereis provados: pela vida de Faraó, não saireis daqui, senão quando vosso irmão mais novo vier aqui.
¹⁶ Enviai um dentre vós, que traga vosso irmão; mas vós ficareis presos, para que sejam provadas as vossas palavras, se há verdade convosco; e, se não, pela vida de Faraó, sois espias.
¹⁷ E pô-los juntos em prisão três dias.
¹⁸ E, ao terceiro dia, disse-lhes José: Fazei isso e vivereis; porque eu temo a Deus.
¹⁹ Se sois homens de retidão, fique preso um de vossos irmãos na casa da vossa prisão; mas ide vós, levai mantimento para a fome de vossa casa
²⁰ e trazei-me o vosso irmão mais novo, e serão verificadas vossas palavras, e não morrereis. E eles assim fizeram.
²¹ Então, disseram uns aos outros: Na verdade, somos culpados acerca de nosso irmão, pois vimos a angústia de sua alma, quando nos rogava, e não o ouvimos; por isso vem sobre nós esta angústia.
²² E respondeu-lhes Rúben, dizendo: Não vos dizia eu: Não pequeis contra o menino? E não ouvistes; por isso, eis que também o seu sangue é requerido.
²³ E eles não sabiam que José os entendia, porque havia intérprete entre eles.
²⁴ Então, retirou-se deles e chorou; depois tornou a eles, e falou-lhes, e tomou a Simeão dentre eles, e amarrou-o perante os seus olhos.
²⁵ E ordenou José que enchessem os seus sacos de trigo, e que lhes restituíssem o dinheiro a cada um no seu saco, e lhes dessem comida para o caminho; e fizeram-lhes assim.
²⁶ E carregaram o seu trigo sobre os seus jumentos e partiram dali.
²⁷ E, abrindo um deles o seu saco para dar pasto ao seu jumento na estalagem, viu o seu dinheiro; porque eis que estava na boca do seu saco.
²⁸ E disse a seus irmãos: O meu dinheiro se me devolveu; e ei-lo aqui no meu saco. Então, desfaleceu-lhes o coração, e estremeceram, dizendo uns aos outros: Que é isto que Deus nos tem feito?
²⁹ E vieram a Jacó, seu pai, à terra de Canaã, e contaram-lhe tudo o que lhes acontecera, dizendo:
³⁰ O homem, o senhor da terra, falou conosco asperamente e tratou-nos como espias da terra;
³¹ mas dissemos-lhe: Somos homens de retidão; não somos espias;
³² somos doze irmãos, filhos de nosso pai; um já não existe, e o mais novo está hoje com nosso pai, na terra de Canaã.
³³ E o homem, o senhor da terra, disse-nos: Nisto conhecerei que sois homens de retidão: deixai comigo um de vossos irmãos, e tomai para a fome de vossa casa, e parti,
³⁴ e trazei-me o vosso irmão mais novo; assim saberei que não sois espias, mas homens de retidão; então, vos darei o vosso irmão, e negociareis na terra.
³⁵ E aconteceu que, esvaziando eles os seus sacos, eis que cada um tinha a sua trouxa de dinheiro no seu saco; e viram as trouxas do seu dinheiro, eles e seu pai, e temeram.
³⁶ Então, Jacó, seu pai, lhes disse: Tendes-me desfilhado; José já não existe, e Simeão não está aqui, e a Benjamim quereis levar; todas estas coisas vieram sobre mim.
³⁷ Mas Rúben falou a seu pai, dizendo: Mata os meus dois filhos, se to não tornar; entrega-mo nas minhas mãos, e eu to tornarei.
³⁸ Ele, porém, disse: Não descerá meu filho convosco; porquanto seu irmão é morto, e só ele ficou; se lhe acontecer algum desastre no caminho por onde fordes, fareis descer minhas cãs com dor à sepultura.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Qual dos irmãos de José ficou retido como prisioneiro no Egito enquanto os outros voltavam para buscar Benjamim?",
                opcoes: [
                    { numero: 1, texto: "Rúben", correta: false },
                    { numero: 2, texto: "Simeão", correta: true },
                    { numero: 3, texto: "Levi", correta: false },
                    { numero: 4, texto: "Judá", correta: false }
                ],
                explicacao: "Gênesis 42:24 - José escolheu Simeão e o amarrou diante dos olhos dos irmãos como garantia de que eles retornariam com o irmão mais novo, Benjamim.",
                pontosGanhos: 20
            }
        },

        // --- INÍCIO DO CAPÍTULO 43 ---
        43: {
            titulo: "O Retorno ao Egito com Benjamim",
            subtitulo: "O banquete na casa de José e a porção de Benjamim",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `¹ E a fome era gravíssima na terra.
² E aconteceu que, como acabaram de comer o mantimento que trouxeram do Egito, disse-lhes seu pai: Voltai, comprai-nos um pouco de mantimento.
³ Mas Judá respondeu-lhe, dizendo: Fortemente nos protestou aquele varão, dizendo: Não vereis a minha face, se o vosso irmão não estiver convosco.
⁴ Se enviares conosco o nosso irmão, desceremos e te compraremos mantimento;
⁵ mas, se não o enviares, não desceremos, porquanto aquele varão nos disse: Não vereis a minha face, se o vosso irmão não estiver convosco.
⁶ E disse Israel: Por que me fizestes tal mal, contando àquele varão que tínheis ainda outro irmão?
⁷ E eles disseram: Particularmente perguntou aquele varão por nós e pela nossa parentela, dizendo: Vive ainda vosso pai? Tendes outro irmão? E respondemos-lhe conforme o teor destas palavras. Podíamos nós saber que diria: Trazei vosso irmão?
⁸ Então, disse Judá a Israel, seu pai: Envia o jovem comigo, e levantar-nos-emos e iremos, para que vivamos e não morramos, nem nós, nem tu, nem os nossos filhos.
⁹ Eu serei fiador dele, da minha mão o requererás; se eu o não trouxer e o não puser diante da tua face, serei réu de crime para contigo para sempre.
¹⁰ E, se não nos tivéssemos demorado, certamente já estaríamos de volta segunda vez.
¹¹ Então, disse-lhes Israel, seu pai: Pois que assim é, fazei isto: tomai do mais precioso desta terra em vossos vasos e levai àquele varão um presente: um pouco de bálsamo, um pouco de mel, especiarias, mirra, nozes e amêndoas.
¹² E levai em vossas mãos dinheiro dobrado; e o dinheiro que tornou na boca dos vossos sacos tornai a levar em vossas mãos; bem pode ser que fosse erro.
¹³ Tomai também a vosso irmão, e levantai-vos, e voltai àquele varão.
¹⁴ E Deus Todo-Poderoso vos dê misericórdia diante do varão, para que deixe vir convosco vosso outro irmão e Benjamim; e eu, se for desfilhado, desfilhado ficarei.
¹⁵ E os varões tomaram aquele presente e tomaram dinheiro dobrado em suas mãos e a Benjamim; e levantaram-se, e desceram ao Egito, e apresentaram-se diante da face de José.
¹⁶ E, vendo José a Benjamim com eles, disse ao que estava sobre a sua casa: Leva estes varões à casa, e mata rês, e prepara tudo; pois estes varões comerão comigo ao meio-dia.
¹⁷ E o varão fez como José dissera; e o varão levou aqueles varões à casa de José.
¹⁸ Então, os varões temeram, porquanto foram levados à casa de José e diziam: Por causa do dinheiro que dantes tornou nos nossos sacos, fomos trazidos aqui, para nos sobrevir e cair sobre nós, para que nos tome por servos e a nossos jumentos.
¹⁹ Portanto, chegaram-se ao varão que estava sobre a casa de José, e falaram-lhe à porta da casa,
²⁰ e disseram: Ai! Senhor meu, certamente descemos dantes a comprar mantimento;
²¹ e aconteceu que, chegando nós à estalagem e abrindo os nossos sacos, eis que o dinheiro de cada varão estava na boca do seu saco, nosso dinheiro por seu peso; e tornamos a trazê-lo em nossas mãos.
²² E trouxemos outro dinheiro em nossas mãos, para comprar mantimento; não sabemos quem tenha posto o nosso dinheiro nos nossos sacos.
²³ E ele disse: Paz seja convosco, não temais; o vosso Deus e o Deus de vosso pai vos deu um tesouro nos vossos sacos; o vosso dinheiro me chegou a mim. E trouxe-lhes fora a Simeão.
²⁴ Depois, levou o varão aqueles varões à casa de José e deu-lhes água, e lavaram os seus pés; também deu ração aos seus jumentos.
²⁵ E prepararam o presente, para quando José viesse ao meio-dia; porque ouviram que ali haviam de comer pão.
²⁶ Vindo, pois, José a casa, trouxeram-lhe ali o presente que estava em suas mãos; e inclinaram-se a ele até à terra.
²⁷ E ele lhes perguntou como estavam e disse: Vosso pai, o ancião de quem falastes, vai bem? Vive ainda?
²⁸ E eles disseram: Bem vai o teu servo, nosso pai vive ainda. E abaixaram a cabeça e inclinaram-se.
²⁹ E ele levantou os olhos, e viu a Benjamim, seu irmão, filho de sua mãe, e disse: Este é o vosso irmão menor de quem me falastes? Depois, ele disse: Deus te dê a sua graça, meu filho.
³⁰ E José apressou-se, porque as suas entranhas se comoveram para com seu irmão; e procurou onde chorar, e entrou na câmara, e chorou ali.
³¹ Depois, lavou o seu rosto e saiu; e conteve-se e disse: Ponde pão.
³² E puseram-lhe a ele à parte, e a eles à parte, e aos egípcios que comiam com ele à parte; porque os egípcios não podem comer pão com os hebreus, porquanto é abominação para os egípcios.
³³ E assentaram-se diante dele, o primogênito conforme a sua primogenitura e o menor conforme a sua menoridade; do que os varões se maravilhavam entre si.
³⁴ E apresentou-lhes as porções que estavam diante dele; mas a porção de Benjamim era cinco vezes maior do que a de qualquer deles. E beberam e se regalaram com ele.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Durante o banquete na casa de José, qual foi o detalhe especial na refeição de Benjamim que o diferenciava de seus irmãos?",
                opcoes: [
                    { numero: 1, texto: "Ele comeu à mesa com os egípcios", correta: false },
                    { numero: 2, texto: "Sua porção era cinco vezes maior do que a dos outros", correta: true },
                    { numero: 3, texto: "Ele recebeu uma túnica de cores como presente", correta: false },
                    { numero: 4, texto: "Ele foi o único que não precisou lavar os pés", correta: false }
                ],
                explicacao: "Gênesis 43:34 - José demonstrou seu favoritismo por seu irmão de sangue, Benjamim, enviando-lhe porções cinco vezes maiores do que as dos demais.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 44 ---
        44: {
            titulo: "O Teste da Taça de Prata",
            subtitulo: "A acusação contra Benjamim e o sacrifício de Judá",
            
            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E deu ordem ao que estava sobre a sua casa, dizendo: Enche os sacos destes varões de mantimento, quanto puderem levar, e põe o dinheiro de cada um na boca do seu saco.
² E a minha taça, a taça de prata, porás na boca do saco do menor, com o dinheiro do seu trigo. E fez conforme a palavra que José tinha dito.
³ Vinda a manhã, despediram-se os varões, eles com os seus jumentos.
⁴ Saindo eles da cidade, e não se tendo ainda afastado, disse José ao que estava sobre a sua casa: Levanta-te e segue os varões; e, alcançando-os, dize-lhes: Por que pagastes mal por bem?
⁵ Não é esta a taça por que bebe meu senhor e pela qual ele bem adivinha? Procedestes mal no que fizestes.
⁶ E alcançou-os e falou-lhes tais palavras.
⁷ E eles disseram-lhe: Por que diz meu senhor tais palavras? Longe estejam teus servos de fazerem tal coisa.
⁸ Eis que o dinheiro que achamos na boca dos nossos sacos te tornamos a trazer desde a terra de Canaã; como, pois, furtaríamos da casa do teu senhor prata ou ouro?
⁹ Aquele com quem de teus servos for achada, morra; e ainda nós seremos escravos do meu senhor.
¹⁰ E ele disse: Ora, seja também conforme as vossas palavras; aquele com quem se achar será meu escravo, mas vós sereis inocentes.
¹¹ E eles se apressaram e cada um pôs em terra o seu saco, e cada um abriu o seu saco.
¹² E buscou, começando pelo maior e acabando no menor; e achou-se a taça no saco de Benjamim.
¹³ Então, rasgaram as suas vestes, e carregou cada um o seu jumento, e tornaram à cidade.
¹⁴ E veio Judá com os seus irmãos à casa de José, porque ele ainda estava ali; e prostraram-se diante dele em terra.
¹⁵ E disse-lhes José: Que obra é esta que fizestes? Não sabeis vós que um homem como eu bem adivinha?
¹⁶ Então, disse Judá: Que diremos a meu senhor? Que falaremos? E como nos justificaremos? Achou Deus a iniquidade de teus servos; eis que somos escravos de meu senhor, tanto nós como aquele em cuja mão se achou a taça.
¹⁷ Mas ele disse: Longe de mim que eu tal faça; o varão em cuja mão a taça foi achada será meu servo; e vós, subi em paz para vosso pai.
¹⁸ Então, Judá se chegou a ele e disse: Ai! Senhor meu, deixa, peço-te, dizer o teu servo uma palavra aos ouvidos de meu senhor, e não se acenda a tua ira contra o teu servo; porque tu és como Faraó.
¹⁹ Meu senhor perguntou a seus servos, dizendo: Tendes vós pai ou irmão?
²⁰ E dissemos a meu senhor: Temos um pai velho e um filho da sua velhice, o menor, cujo irmão é morto; e só ele ficou de sua mãe, e seu pai o ama.
²¹ Então, tu disseste a teus servos: Trazei-mo a mim, para que eu ponha os meus olhos sobre ele.
²² E nós dissemos a meu senhor: O jovem não pode deixar a seu pai; se deixar a seu pai, este morrerá.
²³ Então, tu disseste a teus servos: Se vosso irmão menor não descer convosco, nunca mais vereis a minha face.
²⁴ E aconteceu que, subindo nós a teu servo, meu pai, e contando-lhe as palavras de meu senhor,
²⁵ disse nosso pai: Voltai, comprai-nos um pouco de mantimento.
²⁶ E nós dissemos: Não poderemos descer; mas, se nosso irmão menor for conosco, desceremos; pois não poderemos ver a face do varão, se este nosso irmão menor não estiver conosco.
²⁷ Então, disse-nos teu servo, meu pai: Vós sabeis que minha mulher me deu dois filhos;
²⁸ e um saiu de mim, e eu disse: Certamente foi despedaçado, e não o tenho visto até agora;
²⁹ se agora também tirardes a este da minha face, e lhe acontecer algum desastre, fareis descer as minhas cãs com dor à sepultura.
³⁰ Agora, pois, indo eu a teu servo, meu pai, e o jovem não indo conosco, como a sua alma está ligada com a alma dele,
³¹ acontecerá que, vendo ele que o jovem ali não está, morrerá; e teus servos farão descer as cãs de teu servo, nosso pai, com tristeza à sepultura.
³² Porque teu servo se deu por fiador pelo jovem para com meu pai, dizendo: Se eu o não trouxer a ti, serei réu de crime para com meu pai todos os dias.
³³ Agora, pois, fique teu servo em lugar deste jovem por escravo de meu senhor, e suba o jovem com os seus irmãos.
³⁴ Porque, como subirei eu a meu pai, se o jovem não for comigo? Para que não veja eu o mal que sobrevirá a meu pai.`,
            
            // O DESAFIO
            pergunta: {
                texto: "Ao final do capítulo, qual foi a proposta feita por Judá a José para evitar que Benjamim ficasse como escravo no Egito?",
                opcoes: [
                    { numero: 1, texto: "Que todos os irmãos morressem juntos", correta: false },
                    { numero: 2, texto: "Que ele (Judá) ficasse como escravo no lugar de Benjamim", correta: true },
                    { numero: 3, texto: "Que pagassem o triplo do valor da taça em ouro", correta: false },
                    { numero: 4, texto: "Que José lhes desse mais três dias para provar a inocência", correta: false }
                ],
                explicacao: "Gênesis 44:33 - Num gesto de redenção, Judá oferece-se para ser escravo no lugar de Benjamim, para poupar a vida e a alma de seu pai, Jacó.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 44 ---
        44: {
            titulo: "O Teste da Taça de Prata",
            subtitulo: "A acusação contra Benjamim e o sacrifício de Judá",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `¹ E deu ordem ao que estava sobre a sua casa, dizendo: Enche os sacos destes varões de mantimento, quanto puderem levar, e põe o dinheiro de cada um na boca do seu saco.
² E a minha taça, a taça de prata, porás na boca do saco do menor, com o dinheiro do seu trigo. E fez conforme a palavra que José tinha dito.
³ Vinda a manhã, despediram-se os varões, eles com os seus jumentos.
⁴ Saindo eles da cidade, e não se tendo ainda afastado, disse José ao que estava sobre a sua casa: Levanta-te e segue os varões; e, alcançando-os, dize-lhes: Por que pagastes mal por bem?
⁵ Não é esta a taça por que bebe meu senhor e pela qual ele bem adivinha? Procedestes mal no que fizestes.
⁶ E alcançou-os e falou-lhes tais palavras.
⁷ E eles disseram-lhe: Por que diz meu senhor tais palavras? Longe estejam teus servos de fazerem tal coisa.
⁸ Eis que o dinheiro que achamos na boca dos nossos sacos te tornamos a trazer desde a terra de Canaã; como, pois, furtaríamos da casa do teu senhor prata ou ouro?
⁹ Aquele com quem de teus servos for achada, morra; e ainda nós seremos escravos do meu senhor.
¹⁰ E ele disse: Ora, seja também conforme as vossas palavras; aquele com quem se achar será meu escravo, mas vós sereis inocentes.
¹¹ E eles se apressaram e cada um pôs em terra o seu saco, e cada um abriu o seu saco.
¹² E buscou, começando pelo maior e acabando no menor; e achou-se a taça no saco de Benjamim.
¹³ Então, rasgaram as suas vestes, e carregou cada um o seu jumento, e tornaram à cidade.
¹⁴ E veio Judá com os seus irmãos à casa de José, porque ele ainda estava ali; e prostraram-se diante dele em terra.
¹⁵ E disse-lhes José: Que obra é esta que fizestes? Não sabeis vós que um homem como eu bem adivinha?
¹⁶ Então, disse Judá: Que diremos a meu senhor? Que falaremos? E como nos justificaremos? Achou Deus a iniquidade de teus servos; eis que somos escravos de meu senhor, tanto nós como aquele em cuja mão se achou a taça.
¹⁷ Mas ele disse: Longe de mim que eu tal faça; o varão em cuja mão a taça foi achada será meu servo; e vós, subi em paz para vosso pai.
¹⁸ Então, Judá se chegou a ele e disse: Ai! Senhor meu, deixa, peço-te, dizer o teu servo uma palavra aos ouvidos de meu senhor, e não se acenda a tua ira contra o teu servo; porque tu és como Faraó.
¹⁹ Meu senhor perguntou a seus servos, dizendo: Tendes vós pai ou irmão?
²⁰ E dissemos a meu senhor: Temos um pai velho e um filho da sua velhice, o menor, cujo irmão é morto; e só ele ficou de sua mãe, e seu pai o ama.
²¹ Então, tu disseste a teus servos: Trazei-mo a mim, para que eu ponha os meus olhos sobre ele.
²² E nós dissemos a meu senhor: O jovem não pode deixar a seu pai; se deixar a seu pai, este morrerá.
²³ Então, tu disseste a teus servos: Se vosso irmão menor não descer convosco, nunca mais vereis a minha face.
²⁴ E aconteceu que, subindo nós a teu servo, meu pai, e contando-lhe as palavras de meu senhor,
²⁵ disse nosso pai: Voltai, comprai-nos um pouco de mantimento.
²⁶ E nós dissemos: Não poderemos descer; mas, se nosso irmão menor for conosco, desceremos; pois não poderemos ver a face do varão, se este nosso irmão menor não estiver conosco.
²⁷ Então, disse-nos teu servo, meu pai: Vós sabeis que minha mulher me deu dois filhos;
²⁸ e um saiu de mim, e eu disse: Certamente foi despedaçado, e não o tenho visto até agora;
²⁹ se agora também tirardes a este da minha face, e lhe acontecer algum desastre, fareis descer as minhas cãs com dor à sepultura.
³⁰ Agora, pois, indo eu a teu servo, meu pai, e o jovem não indo conosco, como a sua alma está ligada com a alma dele,
³¹ acontecerá que, vendo ele que o jovem ali não está, morrerá; e teus servos farão descer as cãs de teu servo, nosso pai, com tristeza à sepultura.
³² Porque teu servo se deu por fiador pelo jovem para com meu pai, dizendo: Se eu o não trouxer a ti, serei réu de crime para com meu pai todos os dias.
³³ Agora, pois, fique teu servo em lugar deste jovem por escravo de meu senhor, e suba o jovem com os seus irmãos.
³⁴ Porque, como subirei eu a meu pai, se o jovem não for comigo? Para que não veja eu o mal que sobrevirá a meu pai.`,

            // O DESAFIO
            pergunta: {
                texto: "Ao final do capítulo, qual foi a proposta feita por Judá a José para evitar que Benjamim ficasse como escravo no Egito?",
                opcoes: [
                    { numero: 1, texto: "Que todos os irmãos morressem juntos", correta: false },
                    { numero: 2, texto: "Que ele (Judá) ficasse como escravo no lugar de Benjamim", correta: true },
                    { numero: 3, texto: "Que pagassem o triplo do valor da taça em ouro", correta: false },
                    { numero: 4, texto: "Que José lhes desse mais três dias para provar a inocência", correta: false }
                ],
                explicacao: "Gênesis 44:33 - Num gesto de redenção, Judá oferece-se para ser escravo no lugar de Benjamim, para poupar a vida e a alma de seu pai, Jacó.",
                pontosGanhos: 20
            }
        },// --- INÍCIO DO CAPÍTULO 45 ---
        45: {
            titulo: "José se Revela aos seus Irmãos",
            subtitulo: "O reencontro emocionante e o convite de Faraó",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Então, José não se podia conter diante de todos os que estavam com ele; e clamou: Fazei sair daqui a todo o varão; e ninguém ficou com ele, quando José se deu a conhecer a seus irmãos.
² E levantou a sua voz com choro, de maneira que os egípcios o ouviam, e a casa de Faraó o ouviu.
³ E disse José a seus irmãos: Eu sou José; vive ainda meu pai? E seus irmãos não lhe puderam responder, porque estavam pasmados diante da sua face.
⁴ E disse José a seus irmãos: Chegai-vos a mim. E chegaram-se; então, disse ele: Eu sou José, vosso irmão, a quem vendestes para o Egito.
⁵ Agora, pois, não vos entristeçais, nem vos pese aos vossos olhos por me haverdes vendido para aqui; porque para conservação da vida, Deus me enviou adiante de vós.
⁶ Porque já houve dois anos de fome no meio da terra, e ainda restam cinco anos em que não haverá lavoura nem sega.
⁷ Pelo que Deus me enviou adiante de vós, para conservar vossa sucessão na terra e para guardar-vos em vida por um grande livramento.
⁸ Assim, não fostes vós que me enviastes para cá, senão Deus, que me tem posto por pai de Faraó, e por senhor de toda a sua casa, e como regente em toda a terra do Egito.
⁹ Apressai-vos, e subi a meu pai, e dizei-lhe: Assim diz teu filho José: Deus me tem posto por senhor em toda a terra do Egito; desce a mim e não te demores.
¹⁰ E habitarás na terra de Gósen e estarás perto de mim, tu e os teus filhos, e os filhos dos teus filhos, e as tuas ovelhas, e as tuas vacas, e tudo o que tens.
¹¹ E ali te sustentarei, porque ainda haverá cinco anos de fome, para que não pereças de pobreza, tu e tua casa, e tudo o que tens.
¹² E eis que vossos olhos o veem, e os olhos de meu irmão Benjamim, que é a minha boca que vos fala.
¹³ E fazei saber a meu pai toda a minha glória no Egito e tudo o que tendes visto; e apressai-vos a fazer descer meu pai para cá.
¹⁴ E lançou-se ao pescoço de Benjamim, seu irmão, e chorou; e Benjamim chorou também ao seu pescoço.
¹⁵ E beijou a todos os seus irmãos e chorou sobre eles; e, depois, seus irmãos falaram com ele.
¹⁶ E a fama se ouviu na casa de Faraó, dizendo: Os irmãos de José vieram; e pareceu bem aos olhos de Faraó e aos olhos de seus servos.
¹⁷ E disse Faraó a José: Dize a teus irmãos: Fazei isto: carregai os vossos animais, e ide, e voltai à terra de Canaã,
¹⁸ e tomai a vosso pai e a vossas famílias e vinde a mim; e eu vos darei o melhor da terra do Egito, e comereis a fartura da terra.
¹⁹ Tu, pois, tens ordem; fazei isto: tomai vós da terra do Egito carros para vossos meninos e para vossas mulheres; e trazei vosso pai e vinde.
²⁰ E não vos doa a vossa mobília; porque o melhor de toda a terra do Egito será vosso.
²¹ E os filhos de Israel fizeram assim; e José deu-lhes carros, conforme o mandado de Faraó; também lhes deu comida para o caminho.
²² A todos eles deu, a cada um, mudas de vestes; mas a Benjamim deu trezentas peças de prata e cinco mudas de vestes.
²³ E a seu pai enviou outro tanto, a saber: dez jumentos carregados do melhor do Egito, e dez jumentas carregadas de trigo, e pão, e comida para seu pai, para o caminho.
²⁴ E despediu os seus irmãos, e partiram; e disse-lhes: Não contendais pelo caminho.
²⁵ E subiram do Egito, e vieram à terra de Canaã, a Jacó, seu pai.
²⁶ Então, lhe anunciaram, dizendo: José vive ainda e é regente em toda a terra do Egito. E o seu coração desmaiou, porque não os acreditava.
²⁷ Porém, contando-lhe eles todas as palavras de José, que ele lhes falara, e vendo ele os carros que José enviara para levá-lo, reviveu o espírito de Jacó, seu pai.
²⁸ E disse Israel: Basta; o meu filho José ainda vive; eu irei e o verei antes que morra.`,

            // O DESAFIO
            pergunta: {
                texto: "Segundo as palavras de José aos seus irmãos, por que Deus o enviou adiante deles para o Egito?",
                opcoes: [
                    { numero: 1, texto: "Para que ele pudesse se tornar um homem rico", correta: false },
                    { numero: 2, texto: "Para castigar os irmãos pelo que fizeram no passado", correta: false },
                    { numero: 3, texto: "Para conservar a sucessão na terra e guardar a vida deles", correta: true },
                    { numero: 4, texto: "Para construir novos monumentos para Faraó", correta: false }
                ],
                explicacao: "Gênesis 45:7 - José explica que, embora os irmãos tivessem intenções ruins, Deus usou a situação para preservar a vida da família e garantir a sua descendência durante a fome.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 46 ---
        46: {
            titulo: "A Descida de Israel ao Egito",
            subtitulo: "A promessa em Berseba e o reencontro em Gósen",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E partiu Israel com tudo quanto tinha, e veio a Berseba, e ofereceu sacrifícios ao Deus de seu pai Isaque.
² E falou Deus a Israel em visões, de noite, e disse: Jacó! Jacó! E ele disse: Eis-me aqui.
³ E disse: Eu sou Deus, o Deus de teu pai; não temas descer ao Egito, porque eu te farei ali uma grande nação.
⁴ Descerei contigo ao Egito e certamente te farei tornar a subir; e José porá a sua mão sobre os teus olhos.
⁵ Então, Jacó levantou-se de Berseba; e os filhos de Israel levaram a Jacó, seu pai, e seus meninos, e suas mulheres, nos carros que Faraó enviara para o levar.
⁶ E tomaram o seu gado e a sua fazenda que tinham adquirido na terra de Canaã e vieram ao Egito, Jacó e toda a sua semente com ele.
⁷ Os seus filhos, e os filhos de seus filhos com ele, as suas filhas, e as filhas de seus filhos, e toda a sua semente levou consigo ao Egito.
⁸ E estes são os nomes dos filhos de Israel, que vieram ao Egito: Jacó e seus filhos. O primogênito de Jacó: Rúben.
⁹ E os filhos de Rúben: Enoque, e Palu, e Hezrom, e Carmi.
¹⁰ E os filhos de Simeão: Jemuel, e Jamim, e Oade, e Jaquim, e Zoar, e Saul, filho de uma mulher cananeia.
¹¹ E os filhos de Levi: Gérson, Coate e Merari.
¹² E os filhos de Judá: Er, e Onã, e Selá, e Perez, e Zerá; Er e Onã, porém, morreram na terra de Canaã; e os filhos de Perez foram Hezrom e Hamul.
¹³ E os filhos de Issacar: Tola, e Puva, e Jobe, e Sinrom.
¹⁴ E os filhos de Zebulom: Serede, e Elom, e Jaleel.
¹⁵ Estes são os filhos de Lia, que ela deu a Jacó em Padã-Arã, além de Diná, sua filha; todas as almas de seus filhos e de suas filhas foram trinta e três.
¹⁶ E os filhos de Gade: Zifiom, e Agui, e Suni, e Ezbom, e Eri, e Arodi, e Areli.
¹⁷ E os filhos de Aser: Imná, e Isvá, e Isvi, e Berias, e Sera, a irmã deles; e os filhos de Berias: Héber e Malquiel.
¹⁸ Estes são os filhos de Zilpa, a qual Labão deu à sua filha Lia; e estes deu ela a Jacó, a saber, dezesseis almas.
¹⁹ Os filhos de Raquel, mulher de Jacó: José e Benjamim.
²⁰ E nasceram a José na terra do Egito Efraim e Manassés, que lhe deu Asenate, filha de Potífera, sacerdote de Om.
²¹ E os filhos de Benjamim: Belá, e Bequer, e Asbel, e Gera, e Naamã, e Eí, e Ros, e Mupim, e Hupim, e Arde.
²² Estes são os filhos de Raquel, que nasceram a Jacó, ao todo quatorze almas.
²³ E o filho de Dã: Husim.
²⁴ E os filhos de Naftali: Jazeel, e Guni, e Jezer, e Silém.
²⁵ Estes são os filhos de Bila, a qual Labão deu à sua filha Raquel; e estes deu ela a Jacó, ao todo sete almas.
²⁶ Todas as almas que vieram com Jacó ao Egito, que saíram da sua coxa, fora as mulheres dos filhos de Jacó, todas as almas foram sessenta e seis.
²⁷ E os filhos de José, que lhe nasceram no Egito, eram duas almas. Todas as almas da casa de Jacó, que vieram ao Egito, foram setenta.
²⁸ E Jacó enviou Judá diante de si a José, para o guiar a Gósen; e chegaram à terra de Gósen.
²⁹ Então, José aprontou o seu carro e subiu ao encontro de Israel, seu pai, a Gósen; e, apresentando-se-lhe, lançou-se ao seu pescoço e chorou sobre o seu pescoço longo tempo.
³⁰ E Israel disse a José: Morra eu agora, pois já tenho visto o teu rosto, que ainda vives.
³¹ Depois, disse José a seus irmãos e à casa de seu pai: Subirei, e anunciarei a Faraó, e dir-lhe-ei: Meus irmãos e a casa de meu pai, que estavam na terra de Canaã, vieram a mim.
³² E os varões são pastores de ovelhas, porque são homens de gado; e trouxeram consigo as suas ovelhas, e as suas vacas, e tudo o que têm.
³³ Quando, pois, acontecer que Faraó vos chamar e disser: Qual é o vosso exercício?
³⁴ Direis: Teus servos foram homens de gado desde a nossa mocidade até agora, tanto nós como nossos pais; para que habiteis na terra de Gósen, porque todo pastor de ovelhas é abominação para os egípcios.`,

            // O DESAFIO
            pergunta: {
                texto: "Quantas pessoas da casa de Jacó, ao todo, entraram no Egito para se estabelecerem na terra de Gósen?",
                opcoes: [
                    { numero: 1, texto: "Sessenta e seis pessoas", correta: false },
                    { numero: 2, texto: "Setenta pessoas", correta: true },
                    { numero: 3, texto: "Cem pessoas", correta: false },
                    { numero: 4, texto: "Doze pessoas", correta: false }
                ],
                explicacao: "Gênesis 46:27 - O texto bíblico especifica que todas as almas da casa de Jacó que vieram ao Egito totalizaram setenta pessoas, incluindo José e seus filhos que já estavam lá.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 47 ---
        47: {
            titulo: "Israel no Egito e a Gestão de José",
            subtitulo: "A reforma agrária egípcia e o juramento de Jacó",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Então, veio José e anunciou a Faraó e disse: Meu pai e meus irmãos, e as suas ovelhas, e as suas vacas, com tudo o que têm, vieram da terra de Canaã; e eis que estão na terra de Gósen.
² E tomou uma parte de seus irmãos, a saber, cinco varões, e os apresentou a Faraó.
³ Então, disse Faraó a seus irmãos: Qual é o vosso exercício? E eles disseram a Faraó: Teus servos são pastores de ovelhas, tanto nós como nossos pais.
⁴ Disseram mais a Faraó: Viemos para peregrinar nesta terra; porque não há pasto para as ovelhas de teus servos, porquanto a fome é grave na terra de Canaã; agora, pois, rogamos-te que teus servos habitem na terra de Gósen.
⁵ Então, falou Faraó a José, dizendo: Teu pai e teus irmãos vieram a ti.
⁶ A terra do Egito está diante da tua face; no melhor da terra faze habitar teu pai e teus irmãos; habitem na terra de Gósen; e, se sabes que entre eles há homens valentes, põe-nos por maiorais do gado sobre o que eu tenho.
⁷ E trouxe José a Jacó, seu pai, e o apresentou a Faraó; e Jacó abençoou a Faraó.
⁸ E Faraó disse a Jacó: Quantos são os dias dos anos da tua vida?
⁹ E Jacó disse a Faraó: Os dias dos anos das minhas peregrinações são cento e trinta anos; poucos e maus foram os dias dos anos da minha vida e não chegaram aos dias dos anos da vida de meus pais, nos dias das suas peregrinações.
¹⁰ E Jacó abençoou a Faraó e saiu de diante da face de Faraó.
¹¹ E José estabeleceu a seu pai e a seus irmãos e deu-lhes possessão na terra do Egito, no melhor da terra, na terra de Ramessés, como Faraó ordenara.
¹² E José sustentou de pão a seu pai, e a seus irmãos, e a toda a casa de seu pai, segundo as suas famílias.
¹³ E não havia pão em toda a terra, porque a fome era mui grave; de sorte que a terra do Egito e a terra de Canaã desfaleciam por causa da fome.
¹⁴ Então, José recolheu todo o dinheiro que se achou na terra do Egito e na terra de Canaã, pelo trigo que compravam; e José trouxe o dinheiro à casa de Faraó.
¹⁵ Acabando-se, pois, o dinheiro na terra do Egito e na terra de Canaã, vieram todos os egípcios a José, dizendo: Dá-nos pão; por que morreremos em tua presença? Porquanto o dinheiro nos falta.
¹⁶ E José disse: Dai o vosso gado, e eu vo-lo darei por vosso gado, se falta o dinheiro.
¹⁷ Então, trouxeram o seu gado a José; e José lhes deu pão por cavalos, e pelo gado das ovelhas, e pelo gado das vacas, e por jumentos; e os sustentou de pão aquele ano por todo o seu gado.
¹⁸ E, acabado aquele ano, vieram a ele no segundo ano e disseram-lhe: Não ocultaremos a meu senhor que o dinheiro se acabou; e o gado pertence a meu senhor; nada mais nos resta diante de meu senhor, senão o nosso corpo e a nossa terra.
¹⁹ Por que morreremos diante dos teus olhos, tanto nós como a nossa terra? Compra-nos a nós e a nossa terra por pão, e nós e a nossa terra seremos servos de Faraó; e dá-nos semente, para que vivamos e não morramos, e a terra não se desole.
²⁰ Assim, José comprou toda a terra do Egito para Faraó, porque os egípcios venderam cada um o seu campo, porquanto a fome prevalecia sobre eles; e a terra ficou sendo de Faraó.
²¹ E, quanto ao povo, fê-lo passar às cidades, desde uma extremidade da terra do Egito até à outra extremidade.
²² Somente a terra dos sacerdotes não a comprou, porquanto os sacerdotes tinham porção de Faraó e comiam a sua porção que Faraó lhes dera; por isso, não venderam a sua terra.
²³ Então, disse José ao povo: Eis que hoje vos tenho comprado a vós e a vossa terra para Faraó; eis aí tendes semente para vós, para que semeeis a terra.
²⁴ E há de ser que, nas colheitas, dareis o quinto a Faraó, e as quatro partes serão vossas, para semente do campo, e para o vosso mantimento, e dos que estão em vossas casas, e para que comam vossos meninos.
²⁵ E disseram: A vida nos deste; achemos graça aos olhos de meu senhor e seremos servos de Faraó.
²⁶ E José pôs isto por estatuto, até ao dia de hoje, sobre a terra do Egito, que Faraó tirasse o quinto; só a terra dos sacerdotes não ficou sendo de Faraó.
²⁷ Assim, habitou Israel na terra do Egito, na terra de Gósen; e nela tomaram possessão, e frutificaram, e multiplicaram-se muito.
²⁸ E Jacó viveu na terra do Egito dezessete anos; e os dias de Jacó, os anos da sua vida, foram cento e quarenta e sete anos.
²⁹ Chegando-se, pois, o tempo da morte de Israel, chamou a José, seu filho, e disse-lhe: Se agora achei graça aos teus olhos, rogo-te que ponhas a tua mão debaixo da minha coxa, e uses comigo de beneficência e verdade; rogo-te que me não enterres no Egito,
³⁰ mas que eu jaza com os meus pais; por isso, me levarás do Egito e me enterrarás na sepultura deles. E ele disse: Farei conforme a tua palavra.
³¹ E disse ele: Jura-me. E ele jurou-lhe; e Israel inclinou-se sobre a cabeceira da cama.`,

            // O DESAFIO
            pergunta: {
                texto: "quanto da colheita José estabeleceu no novo estatuto para o faraó?",
                opcoes: [
                    { numero: 1, texto: "1 parte", correta: false },
                    { numero: 2, texto: "1 terço", correta: false },
                    { numero: 3, texto: "1 quinto", correta: true },
                    { numero: 4, texto: "1 quarto", correta: false }
                ],
                explicacao: "Gênesis 47:24 e 26 - José estabeleceu como lei que o quinto (20%) de toda a colheita pertenceria a Faraó, enquanto as outras quatro partes ficariam com o povo para sustento e semeadura.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 48 ---
        48: {
            titulo: "Jacó Abençoa Efraim e Manassés",
            subtitulo: "A adoção dos filhos de José e a inversão da primogenitura",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ E aconteceu, depois destas coisas, que disseram a José: Eis que teu pai está enfermo. Então, tomou consigo os seus dois filhos, Manassés e Efraim.
² E alguém anunciou a Jacó e disse: Eis que José, teu filho, vem a ti. E esforçou-se Israel e assentou-se sobre a cama.
³ E disse Jacó a José: O Deus Todo-Poderoso me apareceu em Luz, na terra de Canaã, e me abençoou,
⁴ e me disse: Eis que te farei frutificar, e te multiplicarei, e te porei por multidão de povos, e darei esta terra à tua semente depois de ti, em possessão perpétua.
⁵ Agora, pois, os teus dois filhos, que te nasceram na terra do Egito, antes que eu viesse a ti no Egito, são meus; Efraim e Manassés serão meus, como Rúben e Simeão.
⁶ Mas a tua geração, que geraste depois deles, será tua; segundo o nome de seus irmãos serão chamados na sua herança.
⁷ Vindo, pois, eu de Padã, morreu-me Raquel na terra de Canaã, no caminho, quando ainda havia um pequeno espaço de terra para chegar a Efrata; e a sepultei ali, no caminho de Efrata (que é Belém).
⁸ E Israel viu os filhos de José e disse: Quem são estes?
⁹ E José disse a seu pai: Eles são meus filhos, que Deus me tem dado aqui. E ele disse: Traze-mos aqui, peço-te, para que os abençoe.
¹⁰ Os olhos, porém, de Israel eram carregados de velhice, já não podia ver; e fê-los chegar a ele, e beijou-os, e abraçou-os.
¹¹ E Israel disse a José: Eu não cuidara ver o teu rosto; e eis que Deus me fez ver também a tua semente.
¹² Então, José os tirou de entre os seus joelhos e inclinou-se à terra diante da sua face.
¹³ E tomou José a ambos, a Efraim na sua mão direita, à esquerda de Israel, e a Manassés na sua mão esquerda, à direita de Israel, e fê-los chegar a ele.
¹⁴ Mas Israel estendeu a sua mão direita e a pôs sobre a cabeça de Efraim, que era o menor, e a sua esquerda sobre a cabeça de Manassés, fazendo passar as suas mãos avisadamente, porquanto Manassés era o primogênito.
¹⁵ E abençoou a José e disse: O Deus, em cuja presença andaram os meus pais Abraão e Isaque, o Deus que me sustentou, desde que eu nasci até este dia,
¹⁶ o Anjo que me livrou de todo o mal, abençoe estes rapazes; e seja chamado neles o meu nome e o nome de meus pais Abraão e Isaque; e multipliquem-se como peixes, em multidão, no meio da terra.
¹⁷ Vendo, pois, José que seu pai punha a sua mão direita sobre a cabeça de Efraim, foi mau aos seus olhos; e tomou a mão de seu pai, para a transladar de sobre a cabeça de Efraim para a cabeça de Manassés.
¹⁸ E José disse a seu pai: Não assim, meu pai, porque este é o primogênito; põe a tua mão direita sobre a sua cabeça.
¹⁹ Mas seu pai o recusou e disse: Eu o sei, meu filho, eu o sei; também ele será um povo e também ele será grande; contudo, o seu irmão menor será maior do que ele, e a sua semente será uma multidão de nações.
²⁰ Assim, os abençoou naquele dia, dizendo: Em ti abençoará Israel, dizendo: Deus te ponha como a Efraim e como a Manassés. E pôs a Efraim diante de Manassés.
²¹ Depois, disse Israel a José: Eis que eu morro, mas Deus será convosco e vos fará tornar à terra de vossos pais.
²² E eu te tenho dado a ti um quinhão sobre teus irmãos, o qual tomei da mão dos amorreus com a minha espada e com o meu arco.`,

            // O DESAFIO
            pergunta: {
                texto: "Ao abençoar os filhos de José, o que Jacó fez com as mãos que causou estranheza em José?",
                opcoes: [
                    { numero: 1, texto: "Recusou-se a tocar nos rapazes", correta: false },
                    { numero: 2, texto: "Cruzou as mãos, pondo a direita sobre o mais novo (Efraim)", correta: true },
                    { numero: 3, texto: "Pôs as mãos sobre a cabeça de José em vez dos netos", correta: false },
                    { numero: 4, texto: "Lavou as mãos com vinho antes da bênção", correta: false }
                ],
                explicacao: "Gênesis 48:14 - Jacó cruzou as mãos propositalmente ('avisadamente') para colocar a mão direita, símbolo da bênção principal, sobre Efraim, o menor, mesmo Manassés sendo o primogênito.",
                pontosGanhos: 20
            }
        },

        // --- INÍCIO DO CAPÍTULO 49 ---
        49: {
            titulo: "As Profecias de Jacó sobre seus Filhos",
            subtitulo: "O destino das doze tribos e a morte do patriarca",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `
¹ Depois, chamou Jacó a seus filhos e disse: Ajuntai-vos, e anunciar-vos-ei o que vos há de acontecer nos derradeiros dias;
² ajuntai-vos e ouvi, filhos de Jacó; e ouvi a Israel, vosso pai.
³ Rúben, tu és meu primogênito, minha força e o princípio do meu vigor, o mais excelente em alteza e o mais excelente em poder.
⁴ Instável como a água, não serás o mais excelente, porquanto subiste ao leito de teu pai; então, o contaminaste; subiu à minha cama.
⁵ Simeão e Levi são irmãos; as suas espadas são instrumentos de violência.
⁶ No seu conselho, não entre minha alma; com a sua congregação não se ajunte a minha glória; porque no seu furor mataram varões e, na sua vontade, arrebataram bois.
⁷ Maldito seja o seu furor, porque era forte, e a sua ira, porque era dura; eu os dividirei em Jacó e os espalharei em Israel.
⁸ Judá, a ti te louvarão teus irmãos; a tua mão estará sobre o pescoço de teus inimigos; os filhos de teu pai se inclinarão a ti.
⁹ Judá é um leãozinho; da presa subiste, filho meu. Encurva-se e deita-se como leão e como leoa; quem o despertará?
¹⁰ O cetro não se arredará de Judá, nem o legislador dentre seus pés, até que venha Siló; e a ele se congregarão os povos.
¹¹ Ele amarrará o seu jumentinho à vide e o filho da sua jumenta à cepa mais excelente; lavará a sua roupa no vinho e a sua capa em sangue de uvas.
¹² Os olhos serão vermelhos de vinho, e os dentes, brancos de leite.
¹³ Zebulom habitará no litoral dos mares e será porto de navios, e o seu termo será até Sidom.
¹⁴ Issacar é jumento de fortes ossos, deitado entre dois fardos.
¹⁵ E viu que o descanso era bom e que a terra era agradável; inclinou o seu ombro para levar a carga e serviu debaixo de tributo.
¹⁶ Dã julgará o seu povo, como uma das tribos de Israel.
¹⁷ Dã será serpente junto ao caminho, uma víbora junto à vereda, que morde os calcanhares do cavalo, e faz cair o seu cavaleiro por detrás.
¹⁸ A tua salvação espero, ó SENHOR!
¹⁹ Quanto a Gade, uma tropa o acometerá; mas ele a acometerá por fim.
²⁰ Aser, o seu pão será gordo, e ele dará delícias reais.
²¹ Naftali é uma gazela solta; ele dá palavras formosas.
²² José é um ramo frutífero, ramo frutífero junto à fonte; seus ramos correm sobre o muro.
²³ Os flecheiros lhe deram amargura, e o flecharam, e o aborreceram.
²⁴ O seu arco, porém, susteve-se firme, e os braços de suas mãos foram fortalecidos pelas mãos do Valente de Jacó (donde é o Pastor e a Pedra de Israel),
²⁵ pelo Deus de teu pai, o qual te ajudará, e pelo Todo-Poderoso, o qual te abençoará com bênçãos dos céus de cima, com bênçãos do abismo que está embaixo, com bênçãos dos peitos e da madre.
²⁶ As bênçãos de teu pai excederão as bênçãos de meus pais até ao cume dos montes eternos; estarão sobre a cabeça de José e sobre o alto da cabeça do que foi separado de seus irmãos.
²⁷ Benjamim é lobo que despedaça; pela manhã comerá a presa, e à tarde repartirá o despojo.
²⁸ Todas estas são as doze tribos de Israel; e isto é o que lhes falou seu pai quando os abençoou; a cada um deles abençoou segundo a sua bênção.
²⁹ Depois, ordenou-lhes e disse-lhes: Eu me ajunto ao meu povo; sepultai-me com meus pais, na cova que está no campo de Efrom, o heteu,
³⁰ na cova que está no campo de Macpela, que está diante de Manre, na terra de Canaã, a qual Abraão comprou com o campo de Efrom, o heteu, por possessão de sepultura.
³¹ Ali sepultaram a Abraão e a Sara, sua mulher; ali sepultaram a Isaque e a Rebeca, sua mulher; e ali sepultei a Lia.
³² O campo e a cova que está nele foram comprados aos filhos de Hete.
³³ Acabando, pois, Jacó de dar mandamentos a seus filhos, encolheu os pés na cama e expirou, e foi congregado ao seu povo.`,

            // O DESAFIO
            pergunta: {
                texto: "Na profecia de Jacó, qual filho é comparado a um 'leãozinho' e recebe a promessa de que o cetro (o governo) não se arredará de sua linhagem?",
                opcoes: [
                    { numero: 1, texto: "Rúben", correta: false },
                    { numero: 2, texto: "José", correta: false },
                    { numero: 3, texto: "Judá", correta: true },
                    { numero: 4, texto: "Benjamim", correta: false }
                ],
                explicacao: "Gênesis 49:9-10 - Jacó profetiza que Judá seria como um leão e que dele viriam os reis e legisladores ('o cetro'), apontando para a futura monarquia de Davi e, futuramente, para o Messias.",
                pontosGanhos: 20
            }
        },
        // --- INÍCIO DO CAPÍTULO 50 ---
        50: {
            titulo: "O Luto e a Esperança Final",
            subtitulo: "O sepultamento de Jacó e os últimos dias de José",

            // TEXTO BÍBLICO (Vazio conforme solicitado)
            texto: `¹ Então, José se lançou sobre o rosto de seu pai, e chorou sobre ele, e o beijou.
² E ordenou José a seus servos, aos médicos, que embalsamassem a seu pai; e os médicos embalsamaram a Israel.
³ E cumpriram-se-lhe quarenta dias; porque assim se cumprem os dias dos embalsamados; e os egípcios o choraram setenta dias.
⁴ E, passados os dias de seu choro, falou José à casa de Faraó, dizendo: Se agora achei graça aos vossos olhos, peço-vos que faleis aos ouvidos de Faraó, dizendo:
⁵ Meu pai me fez jurar, dizendo: Eis que eu morro; na minha sepultura, que cavei para mim na terra de Canaã, ali me sepultarás. Agora, pois, subirei, peço-te, e sepultarei a meu pai; então, voltarei.
⁶ E Faraó disse: Sobe e sepulta a teu pai, como ele te fez jurar.
⁷ E José subiu para sepultar a seu pai; e subiram com ele todos os servos de Faraó, os anciãos da sua casa e todos os anciãos da terra do Egito,
⁸ como também toda a casa de José, e seus irmãos, e a casa de seu pai; somente deixaram na terra de Gósen as suas crianças, e as suas ovelhas, e as suas vacas.
⁹ E subiram também com ele tanto carros como gente a cavalo; e o cortejo foi grandíssimo.
¹⁰ Chegando eles à eira de Atade, que está além do Jordão, fizeram ali grande e gravíssimo pranto; e fez a seu pai uma lamentação por sete dias.
¹¹ E, vendo os moradores da terra, os cananeus, o pranto na eira de Atade, disseram: Este é grande pranto dos egípcios. Por isso, chamou-se o seu nome Abel-Mizraim, que está além do Jordão.
¹² E fizeram-lhe os seus filhos assim como ele lhes ordenara.
¹³ Pois os seus filhos o levaram à terra de Canaã e o sepultaram na cova do campo de Macpela, que Abraão comprara com o campo, em possessão de sepultura, a Efrom, o heteu, em frente de Manre.
¹⁴ Depois, voltou José ao Egito, ele, e seus irmãos, e todos os que com ele subiram a sepultar a seu pai.
¹⁵ Vendo, então, os irmãos de José que seu pai já estava morto, disseram: Porventura, nos odiará José e certamente nos retribuirá todo o mal que lhe fizemos.
¹⁶ Portanto, mandaram dizer a José: Teu pai ordenou, antes da sua morte, dizendo:
¹⁷ Assim direis a José: Perdoa, rogo-te, a transgressão de teus irmãos e o seu pecado, porque te fizeram mal; agora, pois, rogamos-te que perdoes a transgressão dos servos do Deus de teu pai. E José chorou quando eles lhe falavam.
¹⁸ Depois, vieram também seus irmãos, e prostraram-se diante dele, e disseram: Eis-nos aqui por teus servos.
¹⁹ E José lhes disse: Não temais; porque, porventura, estou eu em lugar de Deus?
²⁰ Vós bem intentastes mal contra mim; porém Deus o tornou em bem, para fazer como se vê neste dia, para conservar em vida a um povo grande.
²¹ Agora, pois, não temais; eu vos sustentarei a vós e a vossos filhos. Assim, os consolou e falou segundo o coração deles.
²² E José habitou no Egito, ele e a casa de seu pai; e viveu José cento e dez anos.
²³ E viu José os filhos de Efraim da terceira geração; também os filhos de Maquir, filho de Manassés, nasceram sobre os joelhos de José.
²⁴ E disse José a seus irmãos: Eu morro; mas Deus certamente vos visitará e vos fará subir desta terra para a terra que jurou a Abraão, a Isaque e a Jacó.
²⁵ E José fez jurar os filhos de Israel, dizendo: Certamente Deus vos visitará; e fareis transportar os meus ossos daqui.
²⁶ E morreu José da idade de cento e dez anos; e o embalsamaram e o puseram num caixão no Egito.`,

            // O DESAFIO
            pergunta: {
                texto: "Ao consolar seus irmãos após a morte de Jacó, como José resumiu a ação de Deus em relação ao mal que lhe haviam feito no passado?",
                opcoes: [
                    { numero: 1, texto: "Que Deus ignorou o pecado deles para não gerar briga", correta: false },
                    { numero: 2, texto: "Que os irmãos deveriam pagar por cada sofrimento causado", correta: false },
                    { numero: 3, texto: "Que eles intentaram o mal, mas Deus o tornou em bem para salvar vidas", correta: true },
                    { numero: 4, texto: "Que ele agora estava em lugar de Deus para julgá-los", correta: false }
                ],
                explicacao: "Gênesis 50:20 - José expressa uma das verdades centrais do livro: a soberania divina é capaz de transformar tragédias humanas em propósitos de vida e preservação.",
                pontosGanhos: 20
            }
        },
        


        // 💡 DICA: Para adicionar o Capítulo 5, 6, 7... 
        // Basta copiar um bloco desses (do { até o },) e mudar o número e os textos.
        // Lembre-se de manter a vírgula entre eles!

    } // Fim dos capítulos
};

console.log('✅ Livro de Gênesis (Módulo Completo) pronto para uso!');