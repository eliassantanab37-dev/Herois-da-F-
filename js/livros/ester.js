// js/livros/ester.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const ester = {
    nome: "Ester",
    icone: "👑", 
    autor: "Desconhecido",
    //background: "./imagens/ester_bg.jpg", 

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "O Banquete do Rei e a Queda de Vasti",
            texto: ` ¹ E sucedeu nos dias de Assuero, o Assuero que reinou desde a Índia até a Etiópia, sobre cento e vinte e sete províncias,
² Que, naqueles dias, assentando-se o rei Assuero no trono do seu reino, que estava na fortaleza de Susã,
³ No terceiro ano do seu reinado, fez um banquete a todos os seus príncipes e seus servos, estando assim perante ele o poder da Pérsia e Média e os nobres e príncipes das províncias,
⁴ Para mostrar as riquezas da glória do seu reino, e o esplendor da sua excelente grandeza, por muitos dias, a saber: cento e oitenta dias.
⁵ E, acabados aqueles dias, fez o rei um banquete a todo o povo que se achava na fortaleza de Susã, desde o maior até ao menor, por sete dias, no pátio do jardim do palácio real.
⁶ As tapeçarias eram de pano branco, verde, e azul celeste, pendentes de cordões de linho fino e púrpura, e argolas de prata, e colunas de mármore; os leitos de ouro e de prata, sobre um pavimento de mármore vermelho, e azul, e branco, e preto.
⁷ E dava-se de beber em copos de ouro, e os copos eram diferentes uns dos outros; e havia muito vinho real, segundo a generosidade do rei.
⁸ E o beber era por lei, sem constrangimento; porque assim tinha ordenado o rei expressamente a todos os oficiais da sua casa, que fizessem conforme a vontade de cada um.
⁹ Também a rainha Vasti deu um banquete às mulheres, na casa real do rei Assuero.
¹⁰ E ao sétimo dia, estando já o coração do rei alegre do vinho, mandou a Meumã, Bizta, Harbona, Bigtá, Abagta, Zetar e Carcas, os sete camareiros que serviam na presença do rei Assuero,
¹¹ Que introduzissem na presença do rei a rainha Vasti, com a coroa real, para mostrar aos povos e aos príncipes a sua beleza, porque era formosa à vista.
¹² Porém a rainha Vasti recusou vir conforme a palavra do rei, por meio dos camareiros; assim o rei muito se enfureceu, e acendeu nele a sua ira.
¹³ Então perguntou o rei aos sábios que entendiam dos tempos (porque assim se tratavam os negócios do rei na presença de todos os que sabiam a lei e o direito;
¹⁴ E os mais chegados a ele eram: Carsena, Setar, Admata, Társis, Meres, Marsena, e Memucã, os sete príncipes dos persas e dos medos, que viam a face do rei, e se assentavam como principais no reino),
¹⁵ O que, segundo a lei, se devia fazer à rainha Vasti, por não ter obedecido ao mandado do rei Assuero, por meio dos camareiros.
¹⁶ Então disse Memucã na presença do rei e dos príncipes: Não somente contra o rei pecou a rainha Vasti, porém também contra todos os príncipes, e contra todos os povos que há em todas as províncias do rei Assuero.
¹⁷ Porque a notícia do que fez a rainha chegará a todas as mulheres, de modo que aos seus olhos desprezarão a seus maridos quando ouvirem dizer: Mandou o rei Assuero que introduzissem à sua presença a rainha Vasti, porém ela não veio.
¹⁸ E neste mesmo dia as senhoras da Pérsia e da Média, ouvindo o que fez a rainha, dirão o mesmo a todos os príncipes do rei; e assim haverá muito desprezo e indignação.
¹⁹ Se bem parecer ao rei, saia da sua parte um edito real, e escreva-se nas leis dos persas e dos medos, e não se revogue, a saber: que Vasti não entre mais na presença do rei Assuero, e o rei dê o reino dela a outra que seja melhor do que ela.
²⁰ E, ouvindo-se o mandado, que o rei decretará em todo o seu reino (porque é grande), todas as mulheres darão honra a seus maridos, desde a maior até à menor.
²¹ E pareceram bem estas palavras aos olhos do rei e dos príncipes; e fez o rei conforme a palavra de Memucã.
²² Então enviou cartas a todas as províncias do rei, a cada província segundo a sua escrita, e a cada povo segundo a sua língua; que cada homem fosse senhor em sua casa, e que se falasse conforme a língua do seu povo.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que a rainha Vasti foi destituída do seu cargo pelo rei Assuero?",
                        opcoes: [
                            { numero: 1, texto: "Porque ela tentou roubar o trono", correta: false },
                            { numero: 2, texto: "Porque recusou apresentar-se perante o rei e seus convidados quando solicitado", correta: true },
                            { numero: 3, texto: "Porque ela era de outro país", correta: false },
                            { numero: 4, texto: "Porque ela gastou todo o tesouro real", correta: false }
                        ],
                        explicacao: "Ester 1:12 - Porém a rainha Vasti recusou vir conforme a palavra do rei... pelo que o rei muito se enfureceu.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "Ester é Escolhida Rainha",
            texto: ` ¹ Passadas estas coisas, e apaziguado já o furor do rei Assuero, lembrou-se de Vasti, e do que fizera, e do que se tinha decretado a seu respeito.
² Então disseram os servos do rei, que lhe serviam: Busquem-se para o rei moças virgens e formosas.
³ E ponha o rei oficiais em todas as províncias do seu reino, que ajuntem a todas as moças virgens e formosas, na fortaleza de Susã, na casa das mulheres, aos cuidados de Hegai, camareiro do rei, guarda das mulheres, e deem-se-lhes os seus enfeites.
⁴ E a moça que parecer bem aos olhos do rei, reine em lugar de Vasti. E isto pareceu bem aos olhos do rei, e ele assim fez.
⁵ Havia então um homem judeu na fortaleza de Susã, cujo nome era Mardoqueu, filho de Jair, filho de Simei, filho de Quis, homem benjamita,
⁶ Que fora transportado de Jerusalém, com os cativos que foram levados com Jeconias, rei de Judá, o qual transportara Nabucodonosor, rei de Babilônia.
⁷ Este criara a Hadassa (que é Ester, filha de seu tio), porque não tinha pai nem mãe; e era jovem bela de presença e formosa; e, morrendo seu pai e sua mãe, Mardoqueu a tomara por sua filha.
⁸ Sucedeu que, divulgando-se o mandado do rei e a sua lei, e ajuntando-se muitas moças na fortaleza de Susã, aos cuidados de Hegai, também levaram Ester à casa do rei, sob a custódia de Hegai, guarda das mulheres.
⁹ E a moça pareceu formosa aos seus olhos, e alcançou graça perante ele; por isso se apressou a dar-lhe os seus enfeites, e os seus quinhões, como também em lhe dar sete moças de respeito da casa do rei; e a fez passar com as suas moças ao melhor lugar da casa das mulheres.
¹⁰ Ester, porém, não declarou o seu povo e a sua parentela, porque Mardoqueu lhe tinha ordenado que o não declarasse.
¹¹ E passeava Mardoqueu cada dia diante do pátio da casa das mulheres, para se informar de como Ester passava, e do que lhe sucederia.
¹² E, chegando a vez de cada moça, para vir ao rei Assuero, depois que fora feito a ela segundo a lei das mulheres, por doze meses (porque assim se cumpriam os dias das suas purificações, seis meses com óleo de mirra, e seis meses com especiarias, e com as coisas para a purificação das mulheres),
¹³ Desta maneira, pois, vinha a moça ao rei; dava-se-lhe tudo quanto ela desejava, para levar consigo da casa das mulheres à casa do rei;
¹⁴ À tarde entrava, e pela manhã tornava à segunda casa das mulheres, sob os cuidados de Saasgaz, camareiro do rei, guarda das concubinas; não tornava mais ao rei, salvo se o rei a desejasse, e fosse chamada pelo nome.
¹⁵ Chegando, pois, a vez de Ester, filha de Abiail, tio de Mardoqueu (que a tomara por sua filha), para ir ao rei, coisa nenhuma pediu, senão o que disse Hegai, camareiro do rei, guarda das mulheres; e alcançava Ester graça aos olhos de todos quantos a viam.
¹⁶ Assim foi levada Ester ao rei Assuero, à sua casa real, no décimo mês, que é o mês de tebete, no sétimo ano do seu reinado.
¹⁷ E o rei amou a Ester mais do que a todas as mulheres, e alcançou perante ele graça e benevolência mais do que todas as virgens; e pôs a coroa real na sua cabeça, e a fez rainha em lugar de Vasti.
¹⁸ Então o rei deu um grande banquete a todos os seus príncipes e aos seus servos; era o banquete de Ester; e deu alívio às províncias, e fez presentes segundo a generosidade do rei.
¹⁹ E reunindo-se segunda vez as virgens, Mardoqueu estava assentado à porta do rei.
²⁰ Ester, porém, não declarava a sua parentela e o seu povo, como Mardoqueu lhe ordenara; porque Ester cumpria o mandado de Mardoqueu, como quando a criara.
²¹ Naqueles dias, assentando-se Mardoqueu à porta do rei, dois camareiros do rei, dos guardas da porta, Bigtã e Teres, grandemente se indignaram, e procuraram atentar contra o rei Assuero.
²² E veio isto ao conhecimento de Mardoqueu, e ele o fez saber à rainha Ester; e Ester o disse ao rei, em nome de Mardoqueu.
²³ E inquiriu-se o negócio, e se descobriu, e ambos foram pendurados numa forca; e isso foi escrito no livro das crônicas perante o rei.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era a relação de parentesco entre Mardoqueu e Ester?",
                        opcoes: [
                            { numero: 1, texto: "Eles eram irmãos", correta: false },
                            { numero: 2, texto: "Mardoqueu era pai de Ester", correta: false },
                            { numero: 3, texto: "Ester era sua prima, e ele a criara como filha", correta: true },
                            { numero: 4, texto: "Eles não tinham parentesco", correta: false }
                        ],
                        explicacao: "Ester 2:7 - Este criara a Hadassa (que é Ester, filha de seu tio), porque não tinha pai nem mãe...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Que segredo Mardoqueu ordenou que Ester não revelasse a ninguém no palácio?",
                        opcoes: [
                            { numero: 1, texto: "Sua idade", correta: false },
                            { numero: 2, texto: "Sua nacionalidade e o seu povo (que era judia)", correta: true },
                            { numero: 3, texto: "Que sabia ler", correta: false },
                            { numero: 4, texto: "Que tinha muito ouro escondido", correta: false }
                        ],
                        explicacao: "Ester 2:10 - Ester não declarou o seu povo e a sua parentela, porque Mardoqueu lhe tinha ordenado que não o declarasse.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "O Plano Maligno de Hamã",
            texto: `¹ Depois destas coisas o rei Assuero engrandeceu a Hamã, filho de Hamedata, agagita, e o exaltou, e pôs o seu assento acima de todos os príncipes que estavam com ele.
² E todos os servos do rei, que estavam à porta do rei, se inclinavam e se prostravam perante Hamã; porque assim tinha ordenado o rei acerca dele; porém Mardoqueu não se inclinava nem se prostrava.
³ Então os servos do rei, que estavam à porta do rei, disseram a Mardoqueu: Por que transgrides o mandado do rei?
⁴ Sucedeu, pois, que, dizendo-lhe eles isto, dia após dia, e não lhes dando ele ouvidos, o fizeram saber a Hamã, para verem se as palavras de Mardoqueu se sustentariam, porque ele lhes tinha declarado que era judeu.
⁵ Vendo, pois, Hamã que Mardoqueu não se inclinava nem se prostrava diante dele, Hamã se encheu de furor.
⁶ Porém teve como pouco, nos seus propósitos, o pôr as mãos só em Mardoqueu (porque lhe haviam declarado de que povo era Mardoqueu); Hamã, pois, procurou destruir a todos os judeus, o povo de Mardoqueu, que havia em todo o reino de Assuero.
⁷ No primeiro mês (que é o mês de Nisã), no ano duodécimo do rei Assuero, se lançou Pur, isto é, a sorte, perante Hamã, para cada dia, e para cada mês, até ao duodécimo mês, que é o mês de Adar.
⁸ E Hamã disse ao rei Assuero: Existe espalhado e dividido entre os povos em todas as províncias do teu reino um povo, cujas leis são diferentes das leis de todos os povos, e que não cumpre as leis do rei; por isso não convém ao rei deixá-lo ficar.
⁹ Se bem parecer ao rei, decrete-se que os matem; e eu porei nas mãos dos que fizerem a obra dez mil talentos de prata, para que entrem nos tesouros do rei.
¹⁰ Então tirou o rei o anel da sua mão, e o deu a Hamã, filho de Hamedata, agagita, adversário dos judeus.
¹¹ E disse o rei a Hamã: Essa prata te é dada como também esse povo, para fazeres dele o que bem parecer aos teus olhos.
¹² Então chamaram os escrivães do rei no primeiro mês, no dia treze do mesmo e, conforme a tudo quanto Hamã mandou, se escreveu aos príncipes do rei, e aos governadores que havia sobre cada província, e aos líderes, de cada povo; a cada província segundo a sua escrita, e a cada povo segundo a sua língua; em nome do rei Assuero se escreveu, e com o anel do rei se selou.
¹³ E enviaram-se as cartas por intermédio dos correios a todas as províncias do rei, para que destruíssem, matassem, e fizessem perecer a todos os judeus, desde o jovem até ao velho, crianças e mulheres, em um mesmo dia, a treze do duodécimo mês (que é o mês de Adar), e que saqueassem os seus bens.
¹⁴ Uma cópia do despacho que determinou a divulgação da lei em cada província, foi enviada a todos os povos, para que estivessem preparados para aquele dia.
¹⁵ Os correios, pois, impelidos pela palavra do rei, saíram, e a lei se proclamou na fortaleza de Susã. E o rei e Hamã se assentaram a beber, porém a cidade de Susã estava confusa.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que Hamã ficou furioso com Mardoqueu?",
                        opcoes: [
                            { numero: 1, texto: "Porque Mardoqueu roubou seu cavalo", correta: false },
                            { numero: 2, texto: "Porque Mardoqueu não se inclinava nem se prostrava diante dele", correta: true },
                            { numero: 3, texto: "Porque Mardoqueu era mais rico que ele", correta: false },
                            { numero: 4, texto: "Porque o rei gostava mais de Mardoqueu", correta: false }
                        ],
                        explicacao: "Ester 3:5 - Vendo, pois, Hamã que Mardoqueu não se inclinava nem se prostrava diante dele, Hamã se encheu de furor.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "A Coragem de Ester",
            texto: ` ¹ Quando Mardoqueu soube tudo quanto havia sido feito, Mardoqueu rasgou as suas vestes, e vestiu-se de saco e de cinza, e saiu pelo meio da cidade, e clamou com grande e amargo clamor;
² E chegou até diante da porta do rei, porque ninguém vestido de saco podia entrar pelas portas do rei.
³ E em todas as províncias aonde a palavra do rei e a sua lei chegava, havia entre os judeus grande luto, com jejum, e choro, e lamentação; e muitos estavam deitados em saco e em cinza.
⁴ Então vieram as servas de Ester, e os seus camareiros, e fizeram-na saber, do que a rainha muito se doeu; e mandou roupas para vestir a Mardoqueu, e tirar-lhe o pano de saco; porém ele não as aceitou.
⁵ Então Ester chamou a Hatá (um dos camareiros do rei, que este tinha posto para servi-la), e deu-lhe ordem para ir a Mardoqueu, para saber que era aquilo, e porquê.
⁶ E, saindo Hatá a Mardoqueu, à praça da cidade, que estava diante da porta do rei,
⁷ Mardoqueu lhe fez saber tudo quanto lhe tinha sucedido; como também a soma exata do dinheiro, que Hamã dissera que daria para os tesouros do rei, pelos judeus, para destruí-los.
⁸ Também lhe deu a cópia da lei escrita, que se publicara em Susã, para os destruir, para que a mostrasse a Ester, e a fizesse saber; e para lhe ordenar que fosse ter com o rei, e lhe pedisse e suplicasse na sua presença pelo seu povo.
⁹ Veio, pois, Hatá, e fez saber a Ester as palavras de Mardoqueu.
¹⁰ Então falou Ester a Hatá, mandando-o dizer a Mardoqueu:
¹¹ Todos os servos do rei, e o povo das províncias do rei, bem sabem que todo o homem ou mulher que chegar ao rei no pátio interior, sem ser chamado, não há senão uma sentença, a de morte, salvo se o rei estender para ele o cetro de ouro, para que viva; e eu nestes trinta dias não tenho sido chamada para ir ao rei.
¹² E fizeram saber a Mardoqueu as palavras de Ester.
¹³ Então Mardoqueu mandou que respondessem a Ester: Não imagines no teu íntimo que, por estares na casa do rei, escaparás só tu entre todos os judeus.
¹⁴ Porque, se de todo te calares neste tempo, socorro e livramento de outra parte sairá para os judeus, mas tu e a casa de teu pai perecereis; e quem sabe se para tal tempo como este chegaste a este reino?
¹⁵ Então disse Ester que tornassem a dizer a Mardoqueu:
¹⁶ Vai, ajunta a todos os judeus que se acharem em Susã, e jejuai por mim, e não comais nem bebais por três dias, nem de dia nem de noite, e eu e as minhas servas também assim jejuaremos. E assim irei ter com o rei, ainda que não seja segundo a lei; e se perecer, pereci.
¹⁷ Então Mardoqueu foi, e fez conforme a tudo quanto Ester lhe ordenou.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual foi a resposta famosa de Ester após Mardoqueu pedir que ela intercedesse pelo povo?",
                        opcoes: [
                            { numero: 1, texto: "Vou pensar no assunto", correta: false },
                            { numero: 2, texto: "Se perecer, pereci", correta: true },
                            { numero: 3, texto: "Não posso ajudar, tenho medo", correta: false },
                            { numero: 4, texto: "O rei fará o que eu quiser", correta: false }
                        ],
                        explicacao: "Ester 4:16 - ...jejuai por mim... e assim irei ter com o rei, ainda que não é segundo a lei; e se perecer, pereci.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "O Primeiro Banquete",
            texto: `¹ Sucedeu, pois, que ao terceiro dia Ester se vestiu com trajes reais, e se pôs no pátio interior da casa do rei, defronte do aposento do rei; e o rei estava assentado sobre o seu trono real, na casa real, defronte da porta do aposento.
² E sucedeu que, vendo o rei a rainha Ester, que estava no pátio, ela alcançou graça aos seus olhos; e o rei estendeu para Ester o cetro de ouro, que tinha na sua mão, e Ester chegou, e tocou a ponta do cetro.
³ Então o rei lhe disse: Que é que queres, rainha Ester, ou qual é a tua petição? Até metade do reino se te dará.
⁴ E disse Ester: Se parecer bem ao rei, venha o rei hoje com Hamã ao banquete que lhe tenho preparado.
⁵ Então disse o rei: Fazei apressar a Hamã, para que se atenda ao desejo de Ester. Vindo, pois, o rei e Hamã ao banquete, que Ester tinha preparado,
⁶ Disse o rei a Ester, no banquete do vinho: Qual é a tua petição? E ser-te-á concedida, e qual é o teu desejo? E se fará, ainda até metade do reino.
⁷ Então respondeu Ester, e disse: Minha petição e desejo é:
⁸ Se achei graça aos olhos do rei, e se bem parecer ao rei conceder-me a minha petição, e cumprir o meu desejo, venha o rei com Hamã ao banquete que lhes hei de preparar, e amanhã farei conforme a palavra do rei.
⁹ Então saiu Hamã naquele dia alegre e de bom ânimo; porém, vendo Mardoqueu à porta do rei, e que ele não se levantara nem se movera diante dele, então Hamã se encheu de furor contra Mardoqueu.
¹⁰ Hamã, porém, se refreou, e foi para sua casa; e enviou, e mandou vir os seus amigos, e Zeres, sua mulher.
¹¹ E contou-lhes Hamã a glória das suas riquezas, a multidão de seus filhos, e tudo em que o rei o tinha engrandecido, e como o tinha exaltado sobre os príncipes e servos do rei.
¹² Disse mais Hamã: Tampouco a rainha Ester a ninguém fez vir com o rei ao banquete que tinha preparado, senão a mim; e também para amanhã estou convidado por ela juntamente com o rei.
¹³ Porém tudo isto não me satisfaz, enquanto eu vir o judeu Mardoqueu assentado à porta do rei.
¹⁴ Então lhe disseram Zeres, sua mulher, e todos os seus amigos: Faça-se uma forca de cinquenta côvados de altura, e amanhã dize ao rei que nela seja enforcado Mardoqueu; e então entra alegre com o rei ao banquete. E este conselho bem pareceu a Hamã, que mandou fazer a forca.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o rei Assuero estendeu para Ester quando ela apareceu no pátio interior, permitindo que ela vivesse?",
                        opcoes: [
                            { numero: 1, texto: "Uma capa real", correta: false },
                            { numero: 2, texto: "O cetro de ouro", correta: true },
                            { numero: 3, texto: "Uma espada de prata", correta: false },
                            { numero: 4, texto: "Sua mão direita", correta: false }
                        ],
                        explicacao: "Ester 5:2 - ...o rei estendeu para Ester o cetro de ouro, que tinha na sua mão...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "A Honra de Mardoqueu",
            texto: ` ¹ Naquela mesma noite fugiu o sono do rei; então mandou trazer o livro de registro das crônicas, as quais se leram diante do rei.
² E achou-se escrito que Mardoqueu tinha denunciado Bigtã e Teres, dois dos camareiros do rei, da guarda da porta, que tinham procurado lançar mão do rei Assuero.
³ Então disse o rei: Que honra e distinção se deu por isso a Mardoqueu? E os servos do rei, que ministravam junto a ele, disseram: Coisa nenhuma se lhe fez.
⁴ Então disse o rei: Quem está no pátio? E Hamã tinha entrado no pátio exterior da casa do rei, para dizer ao rei que enforcassem a Mardoqueu na forca que lhe tinha preparado.
⁵ E os servos do rei lhe disseram: Eis que Hamã está no pátio. E disse o rei que entrasse.
⁶ E, entrando Hamã, o rei lhe disse: Que se fará ao homem de cuja honra o rei se agrada? Então Hamã disse no seu coração: De quem se agradaria o rei para lhe fazer honra mais do que a mim?
⁷ Assim disse Hamã ao rei: Para o homem, de cuja honra o rei se agrada,
⁸ Tragam a veste real que o rei costuma vestir, como também o cavalo em que o rei costuma andar montado, e ponha-se-lhe a coroa real na sua cabeça.
⁹ E entregue-se a veste e o cavalo à mão de um dos príncipes mais nobres do rei, e vistam delas aquele homem a quem o rei deseja honrar; e levem-no a cavalo pelas ruas da cidade, e apregoe-se diante dele: Assim se fará ao homem a quem o rei deseja honrar!
¹⁰ Então disse o rei a Hamã: Apressa-te, toma a veste e o cavalo, como disseste, e faze assim para com o judeu Mardoqueu, que está assentado à porta do rei; e coisa nenhuma omitas de tudo quanto disseste.
¹¹ E Hamã tomou a veste e o cavalo, e vestiu a Mardoqueu, e o levou a cavalo pelas ruas da cidade, e apregoou diante dele: Assim se fará ao homem a quem o rei deseja honrar!
¹² Depois disto Mardoqueu voltou para a porta do rei; porém Hamã se retirou correndo à sua casa, triste, e de cabeça coberta.
¹³ E contou Hamã a Zeres, sua mulher, e a todos os seus amigos, tudo quanto lhe tinha sucedido. Então os seus sábios e Zeres, sua mulher, lhe disseram: Se Mardoqueu, diante de quem já começaste a cair, é da descendência dos judeus, não prevalecerás contra ele, antes certamente cairás diante dele.
¹⁴ E estando eles ainda falando com ele, chegaram os camareiros do rei, e se apressaram a levar Hamã ao banquete que Ester preparara.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o rei Assuero pediu que lhe lessem na noite em que não conseguiu dormir?",
                        opcoes: [
                            { numero: 1, texto: "Poemas de amor", correta: false },
                            { numero: 2, texto: "O livro das crônicas (os registros do reino)", correta: true },
                            { numero: 3, texto: "A lei dos medos e persas", correta: false },
                            { numero: 4, texto: "As profecias de Daniel", correta: false }
                        ],
                        explicacao: "Ester 6:1 - Naquela mesma noite fugiu o sono do rei; por isso mandou trazer o livro das memórias das crônicas...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem teve de conduzir Mardoqueu montado no cavalo do rei pelas ruas da cidade, apregoando a sua honra?",
                        opcoes: [
                            { numero: 1, texto: "A rainha Ester", correta: false },
                            { numero: 2, texto: "Hamã", correta: true },
                            { numero: 3, texto: "O guarda da porta", correta: false },
                            { numero: 4, texto: "O próprio rei", correta: false }
                        ],
                        explicacao: "Ester 6:11 - Então Hamã tomou a veste e o cavalo, e vestiu a Mardoqueu, e o levou a cavalo pelas ruas da cidade...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        7: {
            titulo: "A Queda de Hamã",
            texto: ` ¹ Vindo, pois, o rei com Hamã, para beber com a rainha Ester,
² Disse outra vez o rei a Ester, no segundo dia, no banquete do vinho: Qual é a tua petição, rainha Ester? E se te dará. E qual é o teu desejo? Até metade do reino, se te dará.
³ Então respondeu a rainha Ester, e disse: Se, ó rei, achei graça aos teus olhos, e se bem parecer ao rei, dê-se-me a minha vida como minha petição, e o meu povo como meu desejo.
⁴ Porque fomos vendidos, eu e o meu povo, para nos destruírem, matarem, e aniquilarem de vez; se ainda por servos e por servas nos vendessem, calar-me-ia; ainda que o opressor não poderia ter compensado a perda do rei.
⁵ Então falou o rei Assuero, e disse à rainha Ester: Quem é esse e onde está esse, cujo coração o instigou a assim fazer?
⁶ E disse Ester: O homem, o opressor, e o inimigo, é este mau Hamã. Então Hamã se perturbou perante o rei e a rainha.
⁷ E o rei no seu furor se levantou do banquete do vinho e passou para o jardim do palácio; e Hamã se pôs em pé, para rogar à rainha Ester pela sua vida; porque viu que já o mal lhe estava determinado pelo rei.
⁸ Tornando, pois, o rei do jardim do palácio à casa do banquete do vinho, Hamã tinha caído prostrado sobre o leito em que estava Ester. Então disse o rei: Porventura quereria ele também forçar a rainha perante mim nesta casa? Saindo esta palavra da boca do rei, cobriram o rosto de Hamã.
⁹ Então disse Harbona, um dos camareiros que serviam diante do rei: Eis que também a forca de cinquenta côvados de altura que Hamã fizera para Mardoqueu, que falara em defesa do rei, está junto à casa de Hamã. Então disse o rei: Enforcai-o nela.
¹⁰ Enforcaram, pois, a Hamã na forca, que ele tinha preparado para Mardoqueu. Então o furor do rei se aplacou.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde Hamã foi enforcado após Ester revelar o seu plano maligno ao rei?",
                        opcoes: [
                            { numero: 1, texto: "Na muralha de Susã", correta: false },
                            { numero: 2, texto: "Na própria forca que ele tinha preparado para Mardoqueu", correta: true },
                            { numero: 3, texto: "No deserto", correta: false },
                            { numero: 4, texto: "Dentro do templo", correta: false }
                        ],
                        explicacao: "Ester 7:10 - Enforcaram, pois, a Hamã na forca que ele tinha preparado para Mardoqueu.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        8: {
            titulo: "O Novo Decreto Real",
            texto: ` ¹ Naquele mesmo dia deu o rei Assuero à rainha Ester a casa de Hamã, inimigo dos judeus; e Mardoqueu veio perante o rei, porque Ester tinha declarado quem ele era.
² E tirou o rei o seu anel, que tinha tomado de Hamã, e o deu a Mardoqueu. E Ester encarregou Mardoqueu da casa de Hamã.
³ Falou mais Ester perante o rei, e se lhe lançou aos seus pés; e chorou, e lhe suplicou que revogasse a maldade de Hamã, o agagita, e o intento que tinha projetado contra os judeus.
⁴ E estendeu o rei para Ester o cetro de ouro. Então Ester se levantou, e pôs-se em pé perante o rei,
⁵ E disse: Se bem parecer ao rei, e se eu achei graça perante ele, e se este negócio é reto diante do rei, e se eu lhe agrado aos seus olhos, escreva-se que se revoguem as cartas concebidas por Hamã filho de Hamedata, o agagita, as quais ele escreveu para aniquilar os judeus, que estão em todas as províncias do rei.
⁶ Pois como poderei ver o mal que sobrevirá ao meu povo? E como poderei ver a destruição da minha parentela?
⁷ Então disse o rei Assuero à rainha Ester e ao judeu Mardoqueu: Eis que dei a Ester a casa de Hamã, e a ele penduraram numa forca, porquanto estendera as mãos contra os judeus.
⁸ Escrevei, pois, aos judeus, como parecer bem aos vossos olhos, em nome do rei, e selai-o com o anel do rei; porque o documento que se escreve em nome do rei, e que se sela com o anel do rei, não se pode revogar.
⁹ Então foram chamados os escrivães do rei, naquele mesmo tempo, no terceiro mês (que é o mês de Sivã), aos vinte e três dias; e se escreveu conforme a tudo quanto ordenou Mardoqueu aos judeus, como também aos sátrapas, e aos governadores, e aos líderes das províncias, que se estendem da Índia até Etiópia, cento e vinte e sete províncias, a cada província segundo o seu modo de escrever, e a cada povo conforme a sua língua; como também aos judeus segundo o seu modo de escrever, e conforme a sua língua.
¹⁰ E escreveu-se em nome do rei Assuero e, selando-as com o anel do rei, enviaram as cartas pela mão de correios a cavalo, que cavalgavam sobre ginetes, que eram das cavalariças do rei.
¹¹ Nelas o rei concedia aos judeus, que havia em cada cidade, que se reunissem, e se dispusessem para defenderem as suas vidas, e para destruírem, matarem e aniquilarem todas as forças do povo e da província que viessem contra eles, crianças e mulheres, e que se saqueassem os seus bens,
¹² Num mesmo dia, em todas as províncias do rei Assuero, no dia treze do duodécimo mês, que é o mês de Adar;
¹³ E uma cópia da carta seria divulgada como decreto em todas as províncias, e publicada entre todos os povos, para que os judeus estivessem preparados para aquele dia, para se vingarem dos seus inimigos.
¹⁴ Os correios, sobre ginetes velozes, saíram apressadamente, impelidos pela palavra do rei; e esta ordem foi publicada na fortaleza de Susã.
¹⁵ Então Mardoqueu saiu da presença do rei com veste real azul-celeste e branca, como também com uma grande coroa de ouro, e com uma capa de linho fino e púrpura, e a cidade de Susã exultou e se alegrou.
¹⁶ E para os judeus houve luz, e alegria, e gozo, e honra.
¹⁷ Também em toda a província, e em toda a cidade, aonde chegava a palavra do rei e a sua ordem, havia entre os judeus alegria e gozo, banquetes e dias de folguedo; e muitos, dos povos da terra, se fizeram judeus, porque o temor dos judeus tinha caído sobre eles.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o rei permitiu que os judeus se defendessem do decreto anterior que não podia ser revogado?",
                        opcoes: [
                            { numero: 1, texto: "Dando-lhes permissão para se reunirem e defenderem a sua vida contra qualquer ataque", correta: true },
                            { numero: 2, texto: "Mandando-os fugir para Israel", correta: false },
                            { numero: 3, texto: "Escondendo todos no palácio", correta: false },
                            { numero: 4, texto: "Dando-lhes escudos mágicos", correta: false }
                        ],
                        explicacao: "Ester 8:11 - O rei concedia aos judeus... que se ajuntassem, e se dispusessem para defenderem as suas vidas...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        9: {
            titulo: "A Festa de Purim",
            texto: ` ¹ E, no duodécimo mês, que é o mês de Adar, no dia treze do mesmo mês em que chegou a palavra do rei e a sua ordem para se executar, no dia em que os inimigos dos judeus esperavam assenhorear-se deles, sucedeu o contrário, porque os judeus foram os que se assenhorearam dos que os odiavam.
² Porque os judeus nas suas cidades, em todas as províncias do rei Assuero, se ajuntaram para pôr as mãos naqueles que procuravam o seu mal; e ninguém podia resistir-lhes, porque o medo deles caíra sobre todos aqueles povos.
³ E todos os líderes das províncias, e os sátrapas, e os governadores, e os que faziam a obra do rei, auxiliavam os judeus; porque tinha caído sobre eles o temor de Mardoqueu.
⁴ Porque Mardoqueu era grande na casa do rei, e a sua fama crescia por todas as províncias, porque o homem Mardoqueu ia sendo engrandecido.
⁵ Feriram, pois, os judeus a todos os seus inimigos, a golpes de espada, com matança e com destruição; e fizeram dos seus inimigos o que quiseram.
⁶ E na fortaleza de Susã os judeus mataram e destruíram quinhentos homens;
⁷ Como também a Parsandata, e a Dalfom e a Aspata,
⁸ E a Porata, e a Adalia, e a Aridata,
⁹ E a Farmasta, e a Arisai, e a Aridai, e a Vaisata;
¹⁰ Os dez filhos de Hamã, filho de Hamedata, o inimigo dos judeus, mataram, porém ao despojo não estenderam a sua mão.
¹¹ No mesmo dia foi comunicado ao rei o número dos mortos na fortaleza de Susã.
¹² E disse o rei à rainha Ester: Na fortaleza de Susã os judeus mataram e destruíram quinhentos homens, e os dez filhos de Hamã; nas mais províncias do rei que teriam feito? Qual é, pois, a tua petição? E dar-se-te-á. Ou qual é ainda o teu requerimento? E far-se-á.
¹³ Então disse Ester: Se bem parecer ao rei, conceda-se aos judeus que se acham em Susã que também façam amanhã conforme ao mandado de hoje; e pendurem numa forca os dez filhos de Hamã.
¹⁴ Então disse o rei que assim se fizesse; e publicou-se um edito em Susã, e enforcaram os dez filhos de Hamã.
¹⁵ E reuniram-se os judeus que se achavam em Susã também no dia catorze do mês de Adar, e mataram em Susã trezentos homens; porém ao despojo não estenderam a sua mão.
¹⁶ Também os demais judeus que se achavam nas províncias do rei se reuniram e se dispuseram em defesa das suas vidas, e tiveram descanso dos seus inimigos; e mataram dos seus inimigos setenta e cinco mil; porém ao despojo não estenderam a sua mão.
¹⁷ Sucedeu isto no dia treze do mês de Adar; e descansaram no dia catorze, e fizeram, daquele dia, dia de banquetes e de alegria.
¹⁸ Também os judeus, que se achavam em Susã se ajuntaram nos dias treze e catorze do mesmo; e descansaram no dia quinze, e fizeram, daquele dia, dia de banquetes e de alegria.
¹⁹ Os judeus, porém, das aldeias, que habitavam nas vilas sem muro, fizeram do dia catorze do mês de Adar dia de alegria e de banquetes, e dia de folguedo, e de mandarem presentes uns aos outros.
²⁰ E Mardoqueu escreveu estas coisas, e enviou cartas a todos os judeus que se achavam em todas as províncias do rei Assuero, aos de perto, e aos de longe,
²¹ Ordenando-lhes que guardassem o dia catorze do mês de Adar, e o dia quinze do mesmo, todos os anos,
²² Como os dias em que os judeus tiveram repouso dos seus inimigos, e o mês que se lhes mudou de tristeza em alegria, e de luto em dia de festa, para que os fizessem dias de banquetes e de alegria, e de mandarem presentes uns aos outros, e dádivas aos pobres.
²³ E os judeus encarregaram-se de fazer o que já tinham começado, como também o que Mardoqueu lhes tinha escrito.
²⁴ Porque Hamã, filho de Hamedata, o agagita, inimigo de todos os judeus, tinha intentado destruir os judeus, e tinha lançado Pur, isto é, a sorte, para os assolar e destruir.
²⁵ Mas, vindo isto perante o rei, mandou ele por cartas que o mau intento que Hamã formara contra os judeus, se tornasse sobre a sua cabeça; pelo que penduraram a ele e a seus filhos numa forca.
²⁶ Por isso àqueles dias chamam Purim, do nome Pur; assim também por causa de todas as palavras daquela carta, e do que viram sobre isso, e do que lhes tinha sucedido,
²⁷ Confirmaram os judeus, e tomaram sobre si, e sobre a sua descendência, e sobre todos os que se achegassem a eles, que não se deixaria de guardar estes dois dias conforme ao que se escrevera deles, e segundo o seu tempo determinado, todos os anos.
²⁸ E que estes dias seriam lembrados e guardados em cada geração, família, província e cidade, e que esses dias de Purim não fossem revogados entre os judeus, e que a memória deles nunca teria fim entre os de sua descendência.
²⁹ Então a rainha Ester, filha de Abiail, e Mardoqueu, o judeu, escreveram com toda autoridade uma segunda vez, para confirmar a carta a respeito de Purim.
³⁰ E mandaram cartas a todos os judeus, às cento e vinte e sete províncias do reino de Assuero, com palavras de paz e verdade.
³¹ Para confirmarem estes dias de Purim nos seus tempos determinados, como Mardoqueu, o judeu, e a rainha Ester lhes tinham estabelecido, e como eles mesmos já o tinham estabelecido sobre si e sobre a sua descendência, acerca do jejum e do seu clamor.
³² E o mandado de Ester estabeleceu os sucessos daquele Purim; e escreveu-se no livro.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual o nome da festa instituída para celebrar a volta da tristeza em alegria e do luto em dia de festa para os judeus?",
                        opcoes: [
                            { numero: 1, texto: "Páscoa", correta: false },
                            { numero: 2, texto: "Pentecostes", correta: false },
                            { numero: 3, texto: "Purim", correta: true },
                            { numero: 4, texto: "Tabernáculos", correta: false }
                        ],
                        explicacao: "Ester 9:26 - Por isso àqueles dias chamaram Purim... conforme a todas as palavras daquela carta.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        10: {
            titulo: "A Grandeza de Mardoqueu",
            texto: ` ¹ Depois disto impôs o rei Assuero tributo sobre a terra, e sobre as ilhas do mar.
² E todos os atos do seu poder e do seu valor, e o relato da grandeza de Mardoqueu, a quem o rei exaltou, porventura não estão escritos no livro das crônicas dos reis da Média e da Pérsia?
³ Porque o judeu Mardoqueu foi o segundo depois do rei Assuero, e grande entre os judeus, e estimado pela multidão de seus irmãos, procurando o bem do seu povo, e proclamando a prosperidade de toda a sua descendência.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Mardoqueu passou a ser considerado no reino após esses eventos?",
                        opcoes: [
                            { numero: 1, texto: "O segundo depois do rei Assuero e grande entre os judeus", correta: true },
                            { numero: 2, texto: "Um prisioneiro comum", correta: false },
                            { numero: 3, texto: "O novo rei da Pérsia", correta: false },
                            { numero: 4, texto: "Um simples escriba", correta: false }
                        ],
                        explicacao: "Ester 10:3 - Porque o judeu Mardoqueu foi o segundo depois do rei Assuero, e grande entre os judeus...",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};