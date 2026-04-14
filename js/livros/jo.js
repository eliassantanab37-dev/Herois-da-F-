// js/livros/jo.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const jo = {
    nome: "Jó",
    icone: "⚖️", 
    autor: "Desconhecido",
    //ackground: "./imagens/jo_bg.jpg", 

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "A Integridade de Jó e o Primeiro Teste",
            texto: `¹ Havia um homem na terra de Uz, cujo nome era Jó; e era este homem íntegro, reto e temente a Deus e desviava-se do mal.
² E nasceram-lhe sete filhos e três filhas.
³ E o seu gado era de sete mil ovelhas, três mil camelos, quinhentas juntas de bois e quinhentas jumentas; eram também muitíssimos os servos a seu serviço, de maneira que este homem era maior do que todos os do oriente.
⁴ E iam seus filhos à casa uns dos outros e faziam banquetes cada um por sua vez; e mandavam convidar as suas três irmãs a comerem e beberem com eles.
⁵ Sucedia, pois, que, decorrido o turno de dias de seus banquetes, enviava Jó, e os santificava, e se levantava de madrugada, e oferecia holocaustos segundo o número de todos eles; porque dizia Jó: Porventura pecaram meus filhos, e amaldiçoaram a Deus no seu coração. Assim fazia Jó continuamente.
⁶ E num dia em que os filhos de Deus vieram apresentar-se perante o Senhor, veio também Satanás entre eles.
⁷ Então o Senhor disse a Satanás: Donde vens? E Satanás respondeu ao Senhor, e disse: De rodear a terra, e passear por ela.
⁸ E disse o Senhor a Satanás: Observaste tu a meu servo Jó? Porque ninguém há na terra semelhante a ele, homem íntegro e reto, temente a Deus, e que se desvia do mal.
⁹ Então respondeu Satanás ao Senhor, e disse: Porventura teme Jó a Deus em vão?
¹⁰ Porventura tu não cercaste de sebe, a ele, e a sua casa, e a tudo quanto tem? A obra de suas mãos abençoaste e o seu gado se tem aumentado na terra.
¹¹ Mas estende a tua mão, e toca-lhe em tudo quanto tem, e verás se não blasfema contra ti na tua face.
¹² E disse o Senhor a Satanás: Eis que tudo quanto ele tem está na tua mão; somente contra ele não estendas a tua mão. E Satanás saiu da presença do Senhor.
¹³ E sucedeu um dia, em que seus filhos e suas filhas comiam, e bebiam vinho, na casa de seu irmão primogênito,
¹⁴ Que veio um mensageiro a Jó, e lhe disse: Os bois lavravam, e as jumentas pastavam junto a eles;
¹⁵ E deram sobre eles os sabeus, e os tomaram, e aos servos feriram ao fio da espada; e só eu escapei para trazer-te a nova.
¹⁶ Estando este ainda falando, veio outro e disse: Fogo de Deus caiu do céu, e queimou as ovelhas e os servos, e os consumiu, e só eu escapei para trazer-te a nova.
¹⁷ Estando ainda este falando, veio outro, e disse: Ordenando os caldeus três tropas, deram sobre os camelos, e os tomaram, e aos servos feriram ao fio da espada; e só eu escapei para trazer-te a nova.
¹⁸ Estando ainda este falando, veio outro, e disse: Estando teus filhos e tuas filhas comendo e bebendo vinho, em casa de seu irmão primogênito,
¹⁹ Eis que um grande vento sobreveio dalém do deserto, e deu nos quatro cantos da casa, que caiu sobre os jovens, e morreram; e só eu escapei para trazer-te a nova.
²⁰ Então Jó se levantou, e rasgou o seu manto, e rapou a sua cabeça, e se lançou em terra, e adorou.
²¹ E disse: Nu saí do ventre de minha mãe e nu tornarei para lá; o Senhor o deu, e o Senhor o tomou: bendito seja o nome do Senhor.
²² Em tudo isto Jó não pecou, nem atribuiu a Deus falta alguma.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como a Bíblia descreve o caráter de Jó no início do livro?",
                        opcoes: [
                            { numero: 1, texto: "Um homem rico e orgulhoso", correta: false },
                            { numero: 2, texto: "Íntegro, reto, temente a Deus e que se desviava do mal", correta: true },
                            { numero: 3, texto: "Um profeta de Jerusalém", correta: false },
                            { numero: 4, texto: "Um guerreiro valente", correta: false }
                        ],
                        explicacao: "Jó 1:1 - ...e era este homem íntegro, reto e temente a Deus, e desviava-se do mal.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jó disse após perder os seus filhos e todos os seus bens?",
                        opcoes: [
                            { numero: 1, texto: "Deus me abandonou", correta: false },
                            { numero: 2, texto: "O Senhor o deu, e o Senhor o tomou; bendito seja o nome do Senhor", correta: true },
                            { numero: 3, texto: "Vou reconstruir tudo sozinho", correta: false },
                            { numero: 4, texto: "A culpa é dos meus servos", correta: false }
                        ],
                        explicacao: "Jó 1:21 - ...o Senhor o deu, e o Senhor o tomou: bendito seja o nome do Senhor.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "O Segundo Teste e a Visita dos Amigos",
            texto: `¹ E, vindo outro dia, em que os filhos de Deus vieram apresentar-se perante o Senhor, veio também Satanás entre eles, apresentar-se perante o Senhor.
² Então o Senhor disse a Satanás: Donde vens? E respondeu Satanás ao Senhor, e disse: De rodear a terra, e passear por ela.
³ E disse o Senhor a Satanás: Observaste o meu servo Jó? Porque ninguém há na terra semelhante a ele, homem íntegro e reto, temente a Deus e que se desvia do mal, e que ainda retém a sua sinceridade, havendo-me tu incitado contra ele, para o consumir sem causa.
⁴ Então Satanás respondeu ao Senhor, e disse: Pele por pele, e tudo quanto o homem tem dará pela sua vida.
⁵ Porém estende a tua mão, e toca-lhe nos ossos, e na carne, e verás se não blasfema contra ti na tua face!
⁶ E disse o Senhor a Satanás: Eis que ele está na tua mão; porém guarda a sua vida.
⁷ Então saiu Satanás da presença do Senhor, e feriu a Jó de úlceras malignas, desde a planta do pé até ao alto da cabeça.
⁸ E Jó tomou um caco para se raspar com ele; e estava assentado no meio da cinza.
⁹ Então sua mulher lhe disse: Ainda reténs a tua sinceridade? Amaldiçoa a Deus, e morre.
¹⁰ Porém ele lhe disse: Como fala qualquer doida, falas tu; receberemos o bem de Deus, e não receberíamos o mal? Em tudo isto não pecou Jó com os seus lábios.
¹¹ Ouvindo, pois, três amigos de Jó todo este mal que tinha vindo sobre ele, vieram cada um do seu lugar: Elifaz o temanita, e Bildade o suíta, e Zofar o naamatita; e combinaram condoer-se dele, para o consolarem.
¹² E, levantando de longe os seus olhos, não o conheceram; e levantaram a sua voz e choraram, e rasgaram cada um o seu manto, e sobre as suas cabeças lançaram pó ao ar.
¹³ E assentaram-se com ele na terra, sete dias e sete noites; e nenhum lhe dizia palavra alguma, porque viam que a dor era muito grande.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Com o que Jó foi ferido no seu corpo no segundo teste permitido por Deus?",
                        opcoes: [
                            { numero: 1, texto: "Cegueira", correta: false },
                            { numero: 2, texto: "Chagas malignas (úlceras), desde a planta do pé até ao alto da cabeça", correta: true },
                            { numero: 3, texto: "Paralisia nas pernas", correta: false },
                            { numero: 4, texto: "Febre contínua", correta: false }
                        ],
                        explicacao: "Jó 2:7 - ...e feriu a Jó de chagas malignas, desde a planta do pé até ao alto da cabeça.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jó respondeu à sua mulher quando ela lhe disse para amaldiçoar a Deus e morrer?",
                        opcoes: [
                            { numero: 1, texto: "Tens razão", correta: false },
                            { numero: 2, texto: "Como fala qualquer doida, falas tu; receberemos o bem de Deus, e não receberíamos o mal?", correta: true },
                            { numero: 3, texto: "Sai de perto de mim", correta: false },
                            { numero: 4, texto: "Estou muito cansado para falar", correta: false }
                        ],
                        explicacao: "Jó 2:10 - ...Como fala qualquer doida, falas tu; receberemos o bem de Deus, e não receberíamos o mal? Em tudo isto não pecou Jó com os seus lábios.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "O Lamento de Jó",
            texto: `¹ Depois disto abriu Jó a sua boca, e amaldiçoou o seu dia.
² E Jó, falando, disse:
³ Pereça o dia em que nasci, e a noite em que se disse: Foi concebido um homem!
⁴ Converta-se aquele dia em trevas; e Deus, lá de cima, não tenha cuidado dele, nem resplandeça sobre ele a luz.
⁵ Contaminem-no as trevas e a sombra da morte; habitem sobre ele nuvens; a escuridão do dia o espante!
⁶ Quanto àquela noite, dela se apodere a escuridão; e não se regozije ela entre os dias do ano; e não entre no número dos meses!
⁷ Ah! Que solitária seja aquela noite, e nela não entre voz de júbilo!
⁸ Amaldiçoem-na aqueles que amaldiçoam o dia, que estão prontos para suscitar o seu pranto.
⁹ Escureçam-se as estrelas do seu crepúsculo; que espere a luz, e não venha; e não veja as pálpebras da alva;
¹⁰ Porque não fechou as portas do ventre; nem escondeu dos meus olhos a canseira.
¹¹ Por que não morri eu desde a madre? E em saindo do ventre, não expirei?
¹² Por que me receberam os joelhos? E por que os peitos, para que mamasse?
¹³ Porque já agora jazeria e repousaria; dormiria, e então haveria repouso para mim.
¹⁴ Com os reis e conselheiros da terra, que para si edificam casas nos lugares assolados,
¹⁵ Ou com os príncipes que possuem ouro, que enchem as suas casas de prata,
¹⁶ Ou como aborto oculto, não existiria; como as crianças que não viram a luz.
¹⁷ Ali os maus cessam de perturbar; e ali repousam os cansados.
¹⁸ Ali os presos juntamente repousam, e não ouvem a voz do exator.
¹⁹ Ali está o pequeno e o grande, e o servo livre de seu senhor.
²⁰ Por que se dá luz ao miserável, e vida aos amargurados de ânimo?
²¹ Que esperam a morte, e ela não vem; e cavam em procura dela mais do que de tesouros ocultos;
²² Que de alegria saltam, e exultam, achando a sepultura?
²³ Por que se dá luz ao homem, cujo caminho é oculto, e a quem Deus o encobriu?
²⁴ Porque antes do meu pão vem o meu suspiro; e os meus gemidos se derramam como água.
²⁵ Porque aquilo que temia me sobreveio; e o que receava me aconteceu.
²⁶ Nunca estive tranquilo, nem sosseguei, nem repousei, mas veio sobre mim a perturbação. `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Após sete dias de silêncio com os seus amigos, o que Jó amaldiçoou?",
                        opcoes: [
                            { numero: 1, texto: "O nome de Deus", correta: false },
                            { numero: 2, texto: "O dia do seu nascimento", correta: true },
                            { numero: 3, texto: "A terra onde vivia", correta: false },
                            { numero: 4, texto: "Os seus amigos", correta: false }
                        ],
                        explicacao: "Jó 3:1 - Depois disto abriu Jó a sua boca, e amaldiçoou o seu dia.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "Elifaz Argumenta",
            texto: ` ¹ Então respondeu Elifaz o temanita, e disse:
² Se intentarmos falar-te, enfadar-te-ás? Mas quem poderia conter as palavras?
³ Eis que ensinaste a muitos, e tens fortalecido as mãos fracas.
⁴ As tuas palavras firmaram os que tropeçavam e os joelhos desfalecentes tens fortalecido.
⁵ Mas agora, que se trata de ti, te enfadas; e tocando-te a ti, te perturbas.
⁶ Porventura não é o teu temor de Deus a tua confiança, e a tua esperança a integridade dos teus caminhos?
⁷ Lembra-te agora qual é o inocente que jamais pereceu? E onde foram os sinceros destruídos?
⁸ Segundo eu tenho visto, os que lavram iniquidade, e semeiam mal, segam o mesmo.
⁹ Com o hálito de Deus perecem; e com o sopro da sua ira se consomem.
¹⁰ O rugido do leão, e a voz do leão feroz, e os dentes dos leõezinhos se quebram.
¹¹ Perece o leão velho, porque não tem presa; e os filhos da leoa andam dispersos.
¹² Uma coisa me foi trazida em segredo; e os meus ouvidos perceberam um sussurro dela.
¹³ Entre pensamentos vindos de visões da noite, quando cai sobre os homens o sono profundo,
¹⁴ Sobrevieram-me o espanto e o tremor, e todos os meus ossos estremeceram.
¹⁵ Então um espírito passou por diante de mim; fez-me arrepiar os cabelos da minha carne.
¹⁶ Parou ele, porém não conheci a sua feição; um vulto estava diante dos meus olhos; houve silêncio, e ouvi uma voz que dizia:
¹⁷ Seria porventura o homem mais justo do que Deus? Seria porventura o homem mais puro do que o seu Criador?
¹⁸ Eis que ele não confia nos seus servos e aos seus anjos atribui loucura;
¹⁹ Quanto menos àqueles que habitam em casas de lodo, cujo fundamento está no pó, e são esmagados como a traça!
²⁰ Desde a manhã até à tarde são despedaçados; e eternamente perecem sem que disso se faça caso.
²¹ Porventura não passa com eles a sua excelência? Morrem, mas sem sabedoria.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era a ideia principal de Elifaz, o temanita, no seu primeiro discurso?",
                        opcoes: [
                            { numero: 1, texto: "Que Deus é injusto", correta: false },
                            { numero: 2, texto: "Que o inocente nunca perece e que Jó devia ter algum pecado escondido", correta: true },
                            { numero: 3, texto: "Que Jó devia fugir", correta: false },
                            { numero: 4, texto: "Que a vida é um sonho", correta: false }
                        ],
                        explicacao: "Jó 4:7 - Lembra-te agora disto: qual era o inocente que jamais perecesse? E onde foram os retos destruídos?",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "O Conselho de Elifaz",
            texto: `¹ Chama agora; há alguém que te responda? E para qual dos santos te virarás?
² Porque a ira destrói o louco; e o zelo mata o tolo.
³ Bem vi eu o louco lançar raízes; porém logo amaldiçoei a sua habitação.
⁴ Seus filhos estão longe da salvação; e são despedaçados às portas, e não há quem os livre.
⁵ A sua messe, o faminto a devora, e até dentre os espinhos a tira; e o salteador traga a sua fazenda.
⁶ Porque do pó não procede a aflição, nem da terra brota o trabalho.
⁷ Mas o homem nasce para a tribulação, como as faíscas se levantam para voar.
⁸ Porém eu buscaria a Deus; e a ele entregaria a minha causa.
⁹ Ele faz coisas grandes e inescrutáveis, e maravilhas sem número.
¹⁰ Ele dá a chuva sobre a terra, e envia águas sobre os campos.
¹¹ Para pôr aos abatidos num lugar alto; e para que os enlutados se exaltem na salvação.
¹² Ele aniquila as imaginações dos astutos, para que as suas mãos não possam levar coisa alguma a efeito.
¹³ Ele apanha os sábios na sua própria astúcia; e o conselho dos perversos se precipita.
¹⁴ Eles de dia encontram as trevas; e ao meio-dia andam às apalpadelas como de noite.
¹⁵ Porém ao necessitado livra da espada, e da boca deles, e da mão do forte.
¹⁶ Assim há esperança para o pobre; e a iniquidade tapa a sua boca.
¹⁷ Eis que bem-aventurado é o homem a quem Deus repreende; não desprezes, pois, a correção do Todo-Poderoso.
¹⁸ Porque ele faz a chaga, e ele mesmo a liga; ele fere, e as suas mãos curam.
¹⁹ Em seis angústias te livrará; e na sétima o mal não te tocará.
²⁰ Na fome te livrará da morte; e na guerra, da violência da espada.
²¹ Do açoite da língua estarás encoberto; e não temerás a assolação, quando vier.
²² Da assolação e da fome te rirás, e os animais da terra não temerás.
²³ Porque até com as pedras do campo terás o teu acordo, e as feras do campo serão pacíficas contigo.
²⁴ E saberás que a tua tenda está em paz; e visitarás a tua habitação, e não pecarás.
²⁵ Também saberás que se multiplicará a tua descendência e a tua posteridade como a erva da terra,
²⁶ Na velhice irás à sepultura, como se recolhe o feixe de trigo a seu tempo.
²⁷ Eis que isto já o havemos inquirido, e assim é; ouve-o, e medita nisso para teu bem.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Segundo Elifaz, como o homem deve reagir à correção do Todo-Poderoso?",
                        opcoes: [
                            { numero: 1, texto: "Não deve desprezá-la, pois Deus faz a ferida, mas ele mesmo a liga", correta: true },
                            { numero: 2, texto: "Deve revoltar-se", correta: false },
                            { numero: 3, texto: "Deve ignorar", correta: false },
                            { numero: 4, texto: "Deve pedir a morte", correta: false }
                        ],
                        explicacao: "Jó 5:17-18 - Eis que bem-aventurado é o homem a quem Deus castiga; não desprezes pois o castigo do Todo-Poderoso. Porque ele faz a ferida, e ele mesmo a liga...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "A Resposta de Jó a Elifaz",
            texto: ` ¹ Então Jó respondeu, dizendo:
² Oh! Se a minha mágoa retamente se pesasse, e a minha miséria juntamente se pusesse numa balança!
³ Porque, na verdade, mais pesada seria, do que a areia dos mares; por isso é que as minhas palavras têm sido engolidas.
⁴ Porque as flechas do Todo-Poderoso estão em mim, cujo ardente veneno suga o meu espírito; os terrores de Deus se armam contra mim.
⁵ Porventura zurrará o jumento montês junto à relva? Ou mugirá o boi junto ao seu pasto?
⁶ Ou comer-se-á sem sal o que é insípido? Ou haverá gosto na clara do ovo?
⁷ A minha alma recusa tocá-las, pois são para mim como comida repugnante.
⁸ Quem dera que se cumprisse o meu desejo, e que Deus me desse o que espero!
⁹ E que Deus quisesse quebrantar-me, e soltasse a sua mão, e me acabasse!
¹⁰ Isto ainda seria a minha consolação, e me refrigeraria no meu tormento, não me poupando ele; porque não ocultei as palavras do Santo.
¹¹ Qual é a minha força, para que eu espere? Ou qual é o meu fim, para que tenha ainda paciência?
¹² É porventura a minha força a força da pedra? Ou é de cobre a minha carne?
¹³ Está em mim a minha ajuda? Ou desamparou-me a verdadeira sabedoria?
¹⁴ Ao que está aflito devia o amigo mostrar compaixão, ainda ao que deixasse o temor do Todo-Poderoso.
¹⁵ Meus irmãos aleivosamente me trataram, como um ribeiro, como a torrente dos ribeiros que passam,
¹⁶ Que estão encobertos com a geada, e neles se esconde a neve,
¹⁷ No tempo em que se derretem com o calor, se desfazem, e em se aquentando, desaparecem do seu lugar.
¹⁸ Desviam-se as veredas dos seus caminhos; sobem ao vácuo, e perecem.
¹⁹ Os caminhantes de Tema os veem; os passageiros de Sabá esperam por eles.
²⁰ Ficam envergonhados, por terem confiado e, chegando ali, se confundem.
²¹ Agora sois semelhantes a eles; vistes o terror, e temestes.
²² Acaso disse eu: Dai-me ou oferecei-me presentes de vossos bens?
²³ Ou livrai-me das mãos do opressor? Ou redimi-me das mãos dos tiranos?
²⁴ Ensinai-me, e eu me calarei; e fazei-me entender em que errei.
²⁵ Oh! Quão fortes são as palavras da boa razão! Mas que é o que censura a vossa repreensão?
²⁶ Porventura buscareis palavras para me repreenderdes, visto que as razões do desesperado são como vento?
²⁷ Mas antes lançais sortes sobre o órfão; e cavais uma cova para o amigo.
²⁸ Agora, pois, se sois servidos, olhai para mim; e vede se minto em vossa presença.
²⁹ Voltai, pois, não haja iniquidade; tornai-vos, digo, que ainda a minha justiça aparecerá nisso.
³⁰ Há porventura iniquidade na minha língua? Ou não poderia o meu paladar distinguir coisas iníquas?

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Jó descreveu as palavras de seus amigos diante do seu sofrimento?",
                        opcoes: [
                            { numero: 1, texto: "Como mel para a sua alma", correta: false },
                            { numero: 2, texto: "Como palavras de vento e consolo enfadonho", correta: true },
                            { numero: 3, texto: "Como ordens reais", correta: false },
                            { numero: 4, texto: "Como música suave", correta: false }
                        ],
                        explicacao: "Jó 6:26 - Acaso pensais que as vossas palavras são argumentos? Mas as palavras de um desesperado são como o vento.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        7: {
            titulo: "O Desabafo sobre a Brevidade da Vida",
            texto: ` ¹ Porventura não tem o homem guerra sobre a terra? E não são os seus dias como os dias do assalariado?
² Como o servo que suspira pela sombra, e como o assalariado que espera pela sua paga,
³ Assim me deram por herança meses de vaidade; e noites de trabalho me prepararam.
⁴ Deitando-me a dormir, então digo: Quando me levantarei? Mas comprida é a noite, e farto-me de me revolver na cama até à alva.
⁵ A minha carne se tem vestido de vermes e de torrões de pó; a minha pele está gretada, e se fez abominável.
⁶ Os meus dias são mais velozes do que a lançadeira do tecelão, e acabam-se, sem esperança.
⁷ Lembra-te de que a minha vida é como o vento; os meus olhos não tornarão a ver o bem.
⁸ Os olhos dos que agora me veem não me verão mais; os teus olhos estarão sobre mim, porém não serei mais.
⁹ Assim como a nuvem se desfaz e passa, assim aquele que desce à sepultura nunca tornará a subir.
¹⁰ Nunca mais tornará à sua casa, nem o seu lugar jamais o conhecerá.
¹¹ Por isso não reprimirei a minha boca; falarei na angústia do meu espírito; queixar-me-ei na amargura da minha alma.
¹² Sou eu porventura o mar, ou a baleia, para que me ponhas uma guarda?
¹³ Dizendo eu: Consolar-me-á a minha cama; meu leito aliviará a minha ânsia;
¹⁴ Então me espantas com sonhos, e com visões me assombras;
¹⁵ Assim a minha alma escolheria antes a estrangulação; e antes a morte do que a vida.
¹⁶ A minha vida abomino, pois não viveria para sempre; retira-te de mim; pois vaidade são os meus dias.
¹⁷ Que é o homem, para que tanto o engrandeças, e ponhas nele o teu coração,
¹⁸ E cada manhã o visites, e cada momento o proves?
¹⁹ Até quando não apartarás de mim, nem me largarás, até que engula a minha saliva?
²⁰ Se pequei, que te farei, ó Guarda dos homens? Por que fizeste de mim um alvo para ti, para que a mim mesmo me seja pesado?
²¹ E por que não perdoas a minha transgressão, e não tiras a minha iniquidade? Porque agora me deitarei no pó, e de madrugada me buscarás, e não existirei mais.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "A que Jó compara a sua vida para descrever quão rápido o seu tempo está a passar?",
                        opcoes: [
                            { numero: 1, texto: "A uma pedra firme", correta: false },
                            { numero: 2, texto: "A uma lançadeira de tecelão e a um sopro", correta: true },
                            { numero: 3, texto: "A uma montanha alta", correta: false },
                            { numero: 4, texto: "A um poço profundo", correta: false }
                        ],
                        explicacao: "Jó 7:6-7 - Os meus dias são mais velozes do que a lançadeira do tecelão... lembra-te de que a minha vida é um sopro.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        8: {
            titulo: "Bildade e a Justiça de Deus",
            texto: ` ¹ Então respondendo Bildade o suíta, disse:
² Até quando falarás tais coisas, e as palavras da tua boca serão como um vento impetuoso?
³ Porventura perverteria Deus o direito? E perverteria o Todo-Poderoso a justiça?
⁴ Se teus filhos pecaram contra ele, também ele os lançou na mão da sua transgressão.
⁵ Mas, se tu de madrugada buscares a Deus, e ao Todo-Poderoso pedires misericórdia;
⁶ Se fores puro e reto, certamente logo despertará por ti, e restaurará a morada da tua justiça.
⁷ O teu princípio, na verdade, terá sido pequeno, porém o teu último estado crescerá em extremo.
⁸ Pois, eu te peço, pergunta agora às gerações passadas; e prepara-te para a inquirição de seus pais.
⁹ Porque nós somos de ontem, e nada sabemos; porquanto nossos dias sobre a terra são como a sombra.
¹⁰ Porventura não te ensinarão eles, e não te falarão, e do seu coração não tirarão palavras?
¹¹ Porventura cresce o junco sem lodo? Ou cresce a espadana sem água?
¹² Estando ainda no seu verdor, ainda que não cortada, todavia antes de qualquer outra erva se seca.
¹³ Assim são as veredas de todos quantos se esquecem de Deus; e a esperança do hipócrita perecerá.
¹⁴ Cuja esperança fica frustrada; e a sua confiança será como a teia de aranha.
¹⁵ Encostar-se-á à sua casa, mas ela não subsistirá; apegar-se-á a ela, mas não ficará em pé.
¹⁶ Ele é viçoso perante o sol, e os seus renovos saem sobre o seu jardim;
¹⁷ As suas raízes se entrelaçam, junto à fonte; para o pedregal atenta.
¹⁸ Se Deus o consumir do seu lugar, negá-lo-á este, dizendo: Nunca te vi!
¹⁹ Eis que este é a alegria do seu caminho, e outros brotarão do pó.
²⁰ Eis que Deus não rejeitará ao reto; nem toma pela mão aos malfeitores;
²¹ Até que de riso te encha a boca, e os teus lábios de júbilo.
²² Os que te odeiam se vestirão de confusão, e a tenda dos ímpios não existirá mais.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual foi o argumento central de Bildade, o suíta, sobre o sofrimento dos filhos de Jó?",
                        opcoes: [
                            { numero: 1, texto: "Que eles foram levados para um lugar melhor", correta: false },
                            { numero: 2, texto: "Que se eles morreram, foi por causa das suas próprias transgressões", correta: true },
                            { numero: 3, texto: "Que Deus se enganou", correta: false },
                            { numero: 4, texto: "Que a culpa foi do vento", correta: false }
                        ],
                        explicacao: "Jó 8:4 - Se teus filhos pecaram contra ele, ele os entregou ao poder da sua transgressão.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        9: {
            titulo: "A Magnitude de Deus",
            texto: ` ¹ Então Jó respondeu, dizendo:
² Na verdade sei que assim é; porque, como se justificaria o homem para com Deus?
³ Se quiser contender com ele, nem a uma de mil coisas lhe poderá responder.
⁴ Ele é sábio de coração, e forte em poder; quem se endureceu contra ele, e teve paz?
⁵ Ele é o que remove os montes, sem que o saibam, e o que os transtorna no seu furor.
⁶ O que sacode a terra do seu lugar, e as suas colunas estremecem.
⁷ O que fala ao sol, e ele não nasce, e sela as estrelas.
⁸ O que sozinho estende os céus, e anda sobre os altos do mar.
⁹ O que fez a Ursa, o Órion, e o Sete-Estrelo, e as recâmaras do sul.
¹⁰ O que faz coisas grandes e inescrutáveis; e maravilhas sem número.
¹¹ Eis que ele passa por diante de mim, e não o vejo; e torna a passar perante mim, e não o sinto.
¹² Eis que arrebata a presa; quem lha fará restituir? Quem lhe dirá: Que é o que fazes?
¹³ Deus não revogará a sua ira; debaixo dele se encurvam os auxiliadores soberbos.
¹⁴ Quanto menos lhe responderia eu, ou escolheria diante dele as minhas palavras!
¹⁵ Porque, ainda que eu fosse justo, não lhe responderia; antes ao meu Juiz pediria misericórdia.
¹⁶ Ainda que chamasse, e ele me respondesse, nem por isso creria que desse ouvidos à minha voz.
¹⁷ Porque me quebranta com uma tempestade, e multiplica as minhas chagas sem causa.
¹⁸ Não me permite respirar, antes me farta de amarguras.
¹⁹ Quanto às forças, eis que ele é o forte; e, quanto ao juízo, quem me citará com ele?
²⁰ Se eu me justificar, a minha boca me condenará; se for perfeito, então ela me declarará perverso.
²¹ Se for perfeito, não estimo a minha alma; desprezo a minha vida.
²² A coisa é esta; por isso eu digo que ele consome ao perfeito e ao ímpio.
²³ Quando o açoite mata de repente, então ele zomba da prova dos inocentes.
²⁴ A terra é entregue nas mãos do ímpio; ele cobre o rosto dos juízes; se não é ele, quem é, logo?
²⁵ E os meus dias são mais velozes do que um correio; fugiram, e não viram o bem.
²⁶ Passam como navios veleiros; como águia que se lança à comida.
²⁷ Se eu disser: Eu me esquecerei da minha queixa, e mudarei o meu aspecto e tomarei alento,
²⁸ Receio todas as minhas dores, porque bem sei que não me terás por inocente.
²⁹ E, sendo eu ímpio, por que trabalharei em vão?
³⁰ Ainda que me lave com água de neve, e purifique as minhas mãos com sabão,
³¹ Ainda me submergirás no fosso, e as minhas próprias vestes me abominarão.
³² Porque ele não é homem, como eu, a quem eu responda, vindo juntamente a juízo.
³³ Não há entre nós árbitro que ponha a mão sobre nós ambos.
³⁴ Tire ele a sua vara de cima de mim, e não me amedronte o seu terror.
³⁵ Então falarei, e não o temerei; porque não sou assim em mim mesmo.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Jó descreve a dificuldade de um homem pleitear a sua causa contra Deus?",
                        opcoes: [
                            { numero: 1, texto: "Que é fácil, pois Deus é homem", correta: false },
                            { numero: 2, texto: "Que Deus é tão sábio e poderoso que o homem não pode responder a uma pergunta entre mil", correta: true },
                            { numero: 3, texto: "Que basta gritar bem alto", correta: false },
                            { numero: 4, texto: "Que os anjos ajudam no processo", correta: false }
                        ],
                        explicacao: "Jó 9:3 - Se quiser pleitear com ele, nem a uma entre mil coisas lhe poderá responder.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        10: {
            titulo: "A Amargura e o Questionamento de Jó",
            texto: `¹ A minha alma tem tédio da minha vida; darei livre curso à minha queixa, falarei na amargura da minha alma.
² Direi a Deus: Não me condenes; faze-me saber por que contendes comigo.
³ Parece-te bem que me oprimas, que rejeites o trabalho das tuas mãos e resplandeças sobre o conselho dos ímpios?
⁴ Tens tu porventura olhos de carne? Vês tu como vê o homem?
⁵ São os teus dias como os dias do homem? Ou são os teus anos como os anos de um homem,
⁶ Para te informares da minha iniquidade, e averiguares o meu pecado?
⁷ Bem sabes tu que eu não sou iníquo; todavia ninguém há que me livre da tua mão.
⁸ As tuas mãos me fizeram e me formaram completamente; contudo me consomes.
⁹ Peço-te que te lembres de que como barro me formaste e me farás voltar ao pó.
¹⁰ Porventura não me vazaste como leite, e como queijo não me coalhaste?
¹¹ De pele e carne me vestiste, e de ossos e nervos me teceste.
¹² Vida e misericórdia me concedeste; e o teu cuidado guardou o meu espírito.
¹³ Porém estas coisas as ocultaste no teu coração; bem sei eu que isto esteve contigo.
¹⁴ Se eu pecar, tu me observas; e da minha iniquidade não me escusarás.
¹⁵ Se for ímpio, ai de mim! E se for justo, não levantarei a minha cabeça; farto estou da minha ignomínia; e vê qual é a minha aflição,
¹⁶ Porque se vai crescendo; tu me caças como a um leão feroz; tornas a fazer maravilhas para comigo.
¹⁷ Tu renovas contra mim as tuas testemunhas, e multiplicas contra mim a tua ira; reveses e combate estão comigo.
¹⁸ Por que, pois, me tiraste da madre? Ah! Se então tivera expirado, e olho nenhum me visse!
¹⁹ Então eu teria sido como se nunca fora; e desde o ventre seria levado à sepultura!
²⁰ Porventura não são poucos os meus dias? Cessa, pois, e deixa-me, para que por um pouco eu tome alento.
²¹ Antes que eu vá para o lugar de que não voltarei, à terra da escuridão e da sombra da morte;
²² Terra escuríssima, como a própria escuridão, terra da sombra da morte e sem ordem alguma, e onde a luz é como a escuridão. `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Jó pede a Deus no meio da sua amargura?",
                        opcoes: [
                            { numero: 1, texto: "Mais riquezas", correta: false },
                            { numero: 2, texto: "Não me condenes; faz-me saber por que contendes comigo", correta: true },
                            { numero: 3, texto: "Que destrua os seus amigos", correta: false },
                            { numero: 4, texto: "Que o transforme em um gigante", correta: false }
                        ],
                        explicacao: "Jó 10:2 - Direi a Deus: Não me condenes; faz-me saber por que contendes comigo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/jo.js (Parte 3: Capítulos 11-15)

        11: {
            titulo: "Zofar Acusa Jó",
            texto: ` ¹ Então respondeu Zofar, o naamatita, e disse:
² Porventura não se dará resposta à multidão de palavras? E o homem falador será justificado?
³ Às tuas mentiras se hão de calar os homens? E zombarás tu sem que ninguém te envergonhe?
⁴ Pois dizes: A minha doutrina é pura, e limpo sou aos teus olhos.
⁵ Mas na verdade, quem dera que Deus falasse e abrisse os seus lábios contra ti!
⁶ E te fizesse saber os segredos da sabedoria, que é multíplice em eficácia; sabe, pois, que Deus exige de ti menos do que merece a tua iniquidade.
⁷ Porventura alcançarás os caminhos de Deus, ou chegarás à perfeição do Todo-Poderoso?
⁸ Como as alturas dos céus é a sua sabedoria; que poderás tu fazer? É mais profunda do que o inferno, que poderás tu saber?
⁹ Mais comprida é a sua medida do que a terra, e mais larga do que o mar.
¹⁰ Se ele passar, aprisionar, ou chamar a juízo, quem o impedirá?
¹¹ Porque ele conhece aos homens vãos, e vê o vício; e não o terá em consideração?
¹² Mas o homem vão é falto de entendimento; sim, o homem nasce como a cria do jumento montês.
¹³ Se tu preparares o teu coração, e estenderes as tuas mãos para ele;
¹⁴ Se há iniquidade na tua mão, lança-a para longe de ti e não deixes habitar a injustiça nas tuas tendas.
¹⁵ Porque então o teu rosto levantarás sem mácula; e estarás firme, e não temerás.
¹⁶ Porque te esquecerás do cansaço, e lembrar-te-ás dele como das águas que já passaram.
¹⁷ E a tua vida mais clara se levantará do que o meio-dia; ainda que haja trevas, será como a manhã.
¹⁸ E terás confiança, porque haverá esperança; olharás em volta e repousarás seguro.
¹⁹ E deitar-te-ás, e ninguém te espantará; muitos suplicarão o teu favor.
²⁰ Porém os olhos dos ímpios desfalecerão, e perecerá o seu refúgio; e a sua esperança será o expirar da alma.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Zofar afirmou sobre o castigo que Jó estava a receber de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Que Deus estava a ser injusto", correta: false },
                            { numero: 2, texto: "Que Deus estava a castigar Jó menos do que a sua iniquidade merecia", correta: true },
                            { numero: 3, texto: "Que Jó era o homem mais santo da terra", correta: false },
                            { numero: 4, texto: "Que tudo passaria no dia seguinte", correta: false }
                        ],
                        explicacao: "Jó 11:6 - ...Sabe, pois, que Deus exige de ti menos do que merece a tua iniquidade.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        12: {
            titulo: "A Sabedoria de Deus",
            texto: `¹ Então Jó respondeu, dizendo:
² Na verdade, vós sois o povo, e convosco morrerá a sabedoria.
³ Também eu tenho entendimento como vós, e não vos sou inferior; e quem não sabe tais coisas como essas?
⁴ Eu sou motivo de riso para os meus amigos; eu, que invoco a Deus, e ele me responde; o justo e perfeito serve de zombaria.
⁵ Tocha desprezível é, na opinião do que está descansado, aquele que está pronto a vacilar com os pés.
⁶ As tendas dos assoladores têm descanso, e os que provocam a Deus estão seguros; nas suas mãos Deus lhes põe tudo.
⁷ Mas, pergunta agora aos animais, e cada um deles te ensinará; e às aves dos céus, e elas te farão saber;
⁸ Ou fala com a terra, e ela te ensinará; até os peixes do mar te contarão.
⁹ Quem não entende, por todas estas coisas, que a mão do Senhor fez isto?
¹⁰ Na sua mão está a alma de tudo quanto vive, e o espírito de toda a carne humana.
¹¹ Porventura o ouvido não provará as palavras, como o paladar prova as comidas?
¹² Com os idosos está a sabedoria, e na longevidade o entendimento.
¹³ Com ele está a sabedoria e a força; conselho e entendimento tem.
¹⁴ Eis que ele derruba, e ninguém há que edifique; prende um homem, e ninguém há que o solte.
¹⁵ Eis que ele retém as águas, e elas secam; e solta-as, e elas transtornam a terra.
¹⁶ Com ele está a força e a sabedoria; seu é o que erra e o que faz errar.
¹⁷ Aos conselheiros leva despojados, e aos juízes faz desvairar.
¹⁸ Solta a autoridade dos reis, e ata o cinto aos seus lombos.
¹⁹ Aos sacerdotes leva despojados, aos poderosos transtorna.
²⁰ Aos acreditados tira a fala, e tira o entendimento aos anciãos.
²¹ Derrama desprezo sobre os príncipes, e afrouxa o cinto dos fortes.
²² Das trevas descobre coisas profundas, e traz à luz a sombra da morte.
²³ Multiplica as nações e as faz perecer; dispersa as nações, e de novo as reconduz.
²⁴ Tira o entendimento aos chefes dos povos da terra, e os faz vaguear pelos desertos, sem caminho.
²⁵ Nas trevas andam às apalpadelas, sem terem luz, e os faz cambalear como ébrios.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Jó rebateu a suposta superioridade intelectual dos seus amigos?",
                        opcoes: [
                            { numero: 1, texto: "Dizendo que eles eram deuses", correta: false },
                            { numero: 2, texto: "Dizendo: 'Vós sois o povo, e convosco morrerá a sabedoria', mas que ele também tinha entendimento", correta: true },
                            { numero: 3, texto: "Pedindo que eles escrevessem um livro", correta: false },
                            { numero: 4, texto: "Ficando em silêncio", correta: false }
                        ],
                        explicacao: "Jó 12:2-3 - Na verdade, vós sois o povo, e convosco morrerá a sabedoria. Mas também eu tenho entendimento como vós...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Segundo Jó, onde se encontra a alma de tudo o que vive e o espírito de toda a carne humana?",
                        opcoes: [
                            { numero: 1, texto: "Nas estrelas", correta: false },
                            { numero: 2, texto: "Na mão de Deus", correta: true },
                            { numero: 3, texto: "No coração do homem", correta: false },
                            { numero: 4, texto: "No sopro do vento", correta: false }
                        ],
                        explicacao: "Jó 12:10 - Na sua mão está a alma de tudo quanto vive, e o espírito de toda a carne humana.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        13: {
            titulo: "A Defesa de Jó perante Deus",
            texto: ` ¹ Eis que tudo isto viram os meus olhos, e os meus ouvidos o ouviram e entenderam.
² Como vós o sabeis, também eu o sei; não vos sou inferior.
³ Mas eu falarei ao Todo-Poderoso, e quero defender-me perante Deus.
⁴ Vós, porém, sois inventores de mentiras, e vós todos médicos que não valem nada.
⁵ Quem dera que vos calásseis de todo, pois isso seria a vossa sabedoria.
⁶ Ouvi agora a minha defesa, e escutai os argumentos dos meus lábios.
⁷ Porventura por Deus falareis perversidade e por ele falareis mentiras?
⁸ Fareis acepção da sua pessoa? Contendereis por Deus?
⁹ Ser-vos-ia bom, se ele vos esquadrinhasse? Ou zombareis dele, como se zomba de algum homem?
¹⁰ Certamente vos repreenderá, se em oculto fizerdes acepção de pessoas.
¹¹ Porventura não vos espantará a sua alteza, e não cairá sobre vós o seu terror?
¹² As vossas memórias são como provérbios de cinza; as vossas defesas como defesas de lodo.
¹³ Calai-vos perante mim, e falarei eu, e venha sobre mim o que vier.
¹⁴ Por que razão tomarei eu a minha carne com os meus dentes, e porei a minha vida na minha mão?
¹⁵ Ainda que ele me mate, nele esperarei; contudo os meus caminhos defenderei diante dele.
¹⁶ Também ele será a minha salvação; porém o hipócrita não virá perante ele.
¹⁷ Ouvi com atenção as minhas palavras, e com os vossos ouvidos a minha declaração.
¹⁸ Eis que já tenho ordenado a minha causa, e sei que serei achado justo.
¹⁹ Quem é o que contenderá comigo? Se eu agora me calasse, renderia o espírito.
²⁰ Duas coisas somente não faças para comigo; então não me esconderei do teu rosto:
²¹ Desvia a tua mão para longe, de mim, e não me espante o teu terror.
²² Chama, pois, e eu responderei; ou eu falarei, e tu me responderás.
²³ Quantas culpas e pecados tenho eu? Notifica-me a minha transgressão e o meu pecado.
²⁴ Por que escondes o teu rosto, e me tens por teu inimigo?
²⁵ Porventura acossarás uma folha arrebatada pelo vento? E perseguirás o restolho seco?
²⁶ Por que escreves contra mim coisas amargas e me fazes herdar as culpas da minha mocidade?
²⁷ Também pões os meus pés no tronco, e observas todos os meus caminhos, e marcas os sinais dos meus pés.
²⁸ E ele me consome como a podridão, e como a roupa, à qual rói a traça.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Apesar de todo o sofrimento, que frase de extrema confiança Jó pronunciou?",
                        opcoes: [
                            { numero: 1, texto: "Vou desistir de tudo", correta: false },
                            { numero: 2, texto: "Ainda que ele me mate, nele esperarei", correta: true },
                            { numero: 3, texto: "Eu sou mais forte que a dor", correta: false },
                            { numero: 4, texto: "Deus não me vê", correta: false }
                        ],
                        explicacao: "Jó 13:15 - Ainda que ele me mate, nele esperarei; contudo os meus caminhos defenderei diante dele.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        14: {
            titulo: "A Fragilidade Humana",
            texto: ` ¹ O homem, nascido da mulher, é de poucos dias e farto de inquietação.
² Sai como a flor, e murcha; foge também como a sombra, e não permanece.
³ E sobre este tal abres os teus olhos, e a mim me fazes entrar no juízo contigo.
⁴ Quem do imundo tirará o puro? Ninguém.
⁵ Visto que os seus dias estão determinados, contigo está o número dos seus meses; e tu lhe puseste limites, e não passará além deles.
⁶ Desvia-te dele, para que tenha repouso, até que, como o assalariado, tenha contentamento no seu dia.
⁷ Porque há esperança para a árvore que, se for cortada, ainda se renovará, e não cessarão os seus renovos.
⁸ Se envelhecer na terra a sua raiz, e o seu tronco morrer no pó,
⁹ Ao cheiro das águas brotará, e dará ramos como uma planta.
¹⁰ Porém, morto o homem, é consumido; sim, rendendo o homem o espírito, então onde está ele?
¹¹ Como as águas se retiram do mar, e o rio se esgota, e fica seco,
¹² Assim o homem se deita, e não se levanta; até que não haja mais céus, não acordará nem despertará de seu sono.
¹³ Quem dera que me escondesses na sepultura, e me ocultasses até que a tua ira se fosse; e me pusesses um limite, e te lembrasses de mim!
¹⁴ Morrendo o homem, porventura tornará a viver? Todos os dias de meu combate esperaria, até que viesse a minha mudança.
¹⁵ Chamar-me-ias, e eu te responderia, e terias afeto à obra de tuas mãos.
¹⁶ Mas agora contas os meus passos; porventura não vigias sobre o meu pecado?
¹⁷ A minha transgressão está selada num saco, e amontoas as minhas iniquidades.
¹⁸ E, na verdade, caindo a montanha, desfaz-se; e a rocha se remove do seu lugar.
¹⁹ As águas gastam as pedras, as cheias afogam o pó da terra; e tu fazes perecer a esperança do homem;
²⁰ Tu para sempre prevaleces contra ele, e ele passa; mudas o seu rosto, e o despedes.
²¹ Os seus filhos recebem honra, sem que ele o saiba; são humilhados, sem que ele o perceba;
²² Mas a sua carne nele tem dores, e a sua alma nele lamenta.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Jó descreve o homem nascido de mulher?",
                        opcoes: [
                            { numero: 1, texto: "Como um ser eterno", correta: false },
                            { numero: 2, texto: "De poucos dias e farto de inquietação", correta: true },
                            { numero: 3, texto: "Como um deus na terra", correta: false },
                            { numero: 4, texto: "Como o sol que nunca se põe", correta: false }
                        ],
                        explicacao: "Jó 14:1 - O homem, nascido da mulher, é de poucos dias e farto de inquietação.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        15: {
            titulo: "Segundo Discurso de Elifaz",
            texto: ` ¹ Então respondeu Elifaz o temanita, e disse:
² Porventura proferirá o sábio vã sabedoria? E encherá do vento oriental o seu ventre,
³ Arguindo com palavras que de nada servem, e com razões, de que nada aproveita?
⁴ E tu tens feito vão o temor, e diminuis os rogos diante de Deus.
⁵ Porque a tua boca declara a tua iniquidade; e tu escolhes a língua dos astutos.
⁶ A tua boca te condena, e não eu, e os teus lábios testificam contra ti.
⁷ És tu porventura o primeiro homem que nasceu? Ou foste formado antes dos outeiros?
⁸ Ou ouviste o secreto conselho de Deus e a ti só limitaste a sabedoria?
⁹ Que sabes tu, que nós não saibamos? Que entendes, que não haja em nós?
¹⁰ Também há entre nós encanecidos e idosos, muito mais idosos do que teu pai.
¹¹ Porventura fazes pouco caso das consolações de Deus, e da suave palavra que te dirigimos?
¹² Por que te arrebata o teu coração, e por que piscam os teus olhos?
¹³ Para virares contra Deus o teu espírito, e deixares sair tais palavras da tua boca?
¹⁴ Que é o homem, para que seja puro? E o que nasce da mulher, para ser justo?
¹⁵ Eis que ele não confia nos seus santos, e nem os céus são puros aos seus olhos.
¹⁶ Quanto mais abominável e corrupto é o homem que bebe a iniquidade como a água?
¹⁷ Escuta-me, mostrar-te-ei; e o que tenho visto te contarei
¹⁸ (O que os sábios anunciaram, ouvindo-o de seus pais, e o não ocultaram;
¹⁹ Aos quais somente se dera a terra, e nenhum estranho passou por entre eles):
²⁰ Todos os dias o ímpio é atormentado, e se reserva, para o tirano, um certo número de anos.
²¹ O sonido dos horrores está nos seus ouvidos; até na paz lhe sobrevém o assolador.
²² Não crê que tornará das trevas, mas que o espera a espada.
²³ Anda vagueando por pão, dizendo: Onde está? Bem sabe que já o dia das trevas lhe está preparado, à mão.
²⁴ Assombram-no a angústia e a tribulação; prevalecem contra ele, como o rei preparado para a peleja;
²⁵ Porque estendeu a sua mão contra Deus, e contra o Todo-Poderoso se embraveceu.
²⁶ Arremete contra ele com a dura cerviz, e contra os pontos grossos dos seus escudos.
²⁷ Porquanto cobriu o seu rosto com a sua gordura, e criou gordura nos lombos.
²⁸ E habitou em cidades assoladas, em casas em que ninguém morava, que estavam a ponto de fazer-se montões de ruínas.
²⁹ Não se enriquecerá, nem subsistirá a sua fazenda, nem se estenderão pela terra as suas possessões.
³⁰ Não escapará das trevas; a chama do fogo secará os seus renovos, e ao sopro da sua boca desaparecerá.
³¹ Não confie, pois, na vaidade, enganando-se a si mesmo, porque a vaidade será a sua recompensa.
³² Antes do seu dia ela se consumará; e o seu ramo não reverdecerá.
³³ Sacudirá as suas uvas verdes, como as da vide, e deixará cair a sua flor como a oliveira,
³⁴ Porque a congregação dos hipócritas se fará estéril, e o fogo consumirá as tendas do suborno.
³⁵ Concebem a malícia, e dão à luz a iniquidade, e o seu ventre prepara enganos.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Elifaz criticou na atitude de Jó neste segundo discurso?",
                        opcoes: [
                            { numero: 1, texto: "Que Jó estava a usar palavras inúteis e a anular o temor a Deus", correta: true },
                            { numero: 2, texto: "Que Jó estava a rir muito", correta: false },
                            { numero: 3, texto: "Que Jó estava a comer demais", correta: false },
                            { numero: 4, texto: "Que Jó era muito jovem", correta: false }
                        ],
                        explicacao: "Jó 15:3-4 - Arrazoará com palavras que de nada servem...? E tu anulas o temor, e reprimes a oração diante de Deus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },// js/livros/jo.js (Parte 4: Capítulos 16-20)

        16: {
            titulo: "Consoladores Enfadonhos",
            texto: ` ¹ Então respondeu Jó, dizendo:
² Tenho ouvido muitas coisas como estas; todos vós sois consoladores molestos.
³ Porventura não terão fim essas palavras de vento? Ou o que te irrita, para assim responderes?
⁴ Falaria eu também como vós falais, se a vossa alma estivesse em lugar da minha alma, ou amontoaria palavras contra vós, e menearia contra vós a minha cabeça?
⁵ Antes vos fortaleceria com a minha boca, e a consolação dos meus lábios abrandaria a vossa dor.
⁶ Se eu falar, a minha dor não cessa, e, calando-me eu, qual é o meu alívio?
⁷ Na verdade, agora ele me tem feito fatigado; tu assolaste toda a minha companhia,
⁸ Testemunha disto é que já me fizeste enrugado, e a minha magreza já se levanta contra mim, e no meu rosto testifica contra mim.
⁹ Na sua ira me despedaçou, e ele me perseguiu; rangeu os seus dentes contra mim; aguça o meu adversário os seus olhos contra mim.
¹⁰ Abrem a sua boca contra mim; com desprezo me feriram nos queixos, e contra mim se ajuntam todos.
¹¹ Entrega-me Deus ao perverso, e nas mãos dos ímpios me faz cair.
¹² Descansado estava eu, porém ele me quebrantou; e pegou-me pela cerviz, e me despedaçou; também me pôs por seu alvo.
¹³ Cercam-me os seus flecheiros; atravessa-me os rins, e não me poupa, e o meu fel derrama sobre a terra,
¹⁴ Fere-me com ferimento sobre ferimento; arremete contra mim como um valente.
¹⁵ Cosi sobre a minha pele o cilício, e revolvi a minha cabeça no pó.
¹⁶ O meu rosto está todo avermelhado de chorar, e sobre as minhas pálpebras está a sombra da morte:
¹⁷ Apesar de não haver violência nas minhas mãos, e de ser pura a minha oração.
¹⁸ Ah! terra, não cubras o meu sangue e não haja lugar para ocultar o meu clamor!
¹⁹ Eis que também agora a minha testemunha está no céu, e nas alturas o meu testemunho está.
²⁰ Os meus amigos são os que zombam de mim; os meus olhos se desfazem em lágrimas diante de Deus.
²¹ Ah! se alguém pudesse contender com Deus pelo homem, como o homem pelo seu próximo!
²² Porque decorridos poucos anos, eu seguirei o caminho por onde não tornarei.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Jó chamou os seus amigos devido à insistência deles em culpá-lo pelo seu sofrimento?",
                        opcoes: [
                            { numero: 1, texto: "Sábios conselheiros", correta: false },
                            { numero: 2, texto: "Consoladores enfadonhos", correta: true },
                            { numero: 3, texto: "Irmãos amados", correta: false },
                            { numero: 4, texto: "Juízes da terra", correta: false }
                        ],
                        explicacao: "Jó 16:2 - Tenho ouvido muitas coisas como estas; todos vós sois consoladores enfadonhos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        17: {
            titulo: "A Esperança no Meio da Escuridão",
            texto: `¹ O meu espírito se vai consumindo, os meus dias se vão apagando, e só tenho perante mim a sepultura.
² Deveras estou cercado de zombadores, e os meus olhos contemplam as suas provocações.
³ Promete agora, e dá-me um fiador para contigo; quem há que me dê a mão?
⁴ Porque aos seus corações encobriste o entendimento, por isso não os exaltarás.
⁵ O que denuncia os seus amigos, a fim de serem despojados, também os olhos de seus filhos desfalecerão.
⁶ Porém a mim me pôs por um provérbio dos povos, de modo que me tornei uma abominação para eles.
⁷ Pelo que já se escureceram de mágoa os meus olhos, e já todos os meus membros são como a sombra.
⁸ Os retos pasmarão disto, e o inocente se levantará contra o hipócrita.
⁹ E o justo seguirá o seu caminho firmemente, e o puro de mãos irá crescendo em força.
¹⁰ Mas, na verdade, tornai todos vós e vinde; porque sábio nenhum acharei entre vós.
¹¹ Os meus dias passaram, e malograram os meus propósitos, as aspirações do meu coração.
¹² Trocaram a noite em dia; a luz está perto do fim, por causa das trevas.
¹³ Se eu esperar, a sepultura será a minha casa; nas trevas estenderei a minha cama.
¹⁴ À corrupção clamo: Tu és meu pai; e aos vermes: Vós sois minha mãe e minha irmã.
¹⁵ Onde, pois, estaria agora a minha esperança? Sim, a minha esperança, quem a poderá ver?
¹⁶ As barras da sepultura descerão quando juntamente no pó teremos descanso.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde Jó dizia que estava a sua esperança e o seu repouso, diante do seu estado terminal?",
                        opcoes: [
                            { numero: 1, texto: "Nas barras do Seol (na sepultura)", correta: true },
                            { numero: 2, texto: "No seu palácio", correta: false },
                            { numero: 3, texto: "Na sua descendência", correta: false },
                            { numero: 4, texto: "Na cura física imediata", correta: false }
                        ],
                        explicacao: "Jó 17:16 - As barras do Seol descerão, quando juntamente no pó teremos repouso.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        18: {
            titulo: "O Segundo Discurso de Bildade",
            texto: `¹ Então respondeu Bildade, o suíta, e disse:
² Até quando poreis fim às palavras? Considerai bem, e então falaremos.
³ Por que somos tratados como animais, e como imundos aos vossos olhos?
⁴ Oh tu, que despedaças a tua alma na tua ira, será a terra deixada por tua causa? Remover-se-ão as rochas do seu lugar?
⁵ Na verdade, a luz dos ímpios se apagará, e a chama do seu fogo não resplandecerá.
⁶ A luz se escurecerá nas suas tendas, e a sua lâmpada sobre ele se apagará.
⁷ Os seus passos firmes se estreitarão, e o seu próprio conselho o derrubará.
⁸ Porque por seus próprios pés é lançado na rede, e andará nos fios enredados.
⁹ O laço o apanhará pelo calcanhar, e a armadilha o prenderá.
¹⁰ Está escondida debaixo da terra uma corda, e uma armadilha na vereda.
¹¹ Os assombros o espantarão de todos os lados, e o perseguirão a cada passo.
¹² Será faminto o seu vigor, e a destruição está pronta ao seu lado.
¹³ Serão devorados os membros do seu corpo; sim, o primogênito da morte devorará os seus membros.
¹⁴ A sua confiança será arrancada da sua tenda, e isto o fará caminhar para o rei dos terrores.
¹⁵ Morará na sua mesma tenda, o que não lhe pertence; espalhar-se-á enxofre sobre a sua habitação.
¹⁶ Por baixo se secarão as suas raízes e por cima serão cortados os seus ramos.
¹⁷ A sua memória perecerá da terra, e pelas praças não terá nome.
¹⁸ Da luz o lançarão nas trevas, e afugentá-lo-ão do mundo.
¹⁹ Não terá filho nem neto entre o seu povo, e nem quem lhe suceda nas suas moradas.
²⁰ Do seu dia se espantarão os do ocidente, assim como se espantam os do oriente.
²¹ Tais são, na verdade, as moradas do perverso, e este é o lugar do que não conhece a Deus.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Bildade descreve que acontece com a 'luz dos ímpios'?",
                        opcoes: [
                            { numero: 1, texto: "Ela brilha para sempre", correta: false },
                            { numero: 2, texto: "Ela se apagará, e a chama do seu fogo não resplandecerá", correta: true },
                            { numero: 3, texto: "Ela ilumina o caminho dos outros", correta: false },
                            { numero: 4, texto: "Ela se torna o sol", correta: false }
                        ],
                        explicacao: "Jó 18:5 - Na verdade, a luz dos ímpios se apagará, e a chama do seu fogo não resplandecerá.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        19: {
            titulo: "Eu Sei que o meu Redentor Vive",
            texto: `¹ Respondeu, porém, Jó, dizendo:
² Até quando afligireis a minha alma, e me quebrantareis com palavras?
³ Já dez vezes me vituperastes; não tendes vergonha de injuriar-me.
⁴ Embora haja eu, na verdade, errado, comigo ficará o meu erro.
⁵ Se deveras vos quereis engrandecer contra mim, e repreender-me pelo meu opróbrio,
⁶ Sabei agora que Deus é o que me transtornou, e com a sua rede me cercou.
⁷ Eis que clamo: Violência! Porém não sou ouvido. Grito: Socorro! Porém não há justiça.
⁸ O meu caminho ele entrincheirou, e já não posso passar, e nas minhas veredas pôs trevas.
⁹ Da minha honra me despojou; e tirou-me a coroa da minha cabeça.
¹⁰ Quebrou-me de todos os lados, e eu me vou; e arrancou a minha esperança, como a uma árvore.
¹¹ E fez inflamar contra mim a sua ira, e me reputou para consigo, como a seus inimigos.
¹² Juntas vieram as suas tropas, e prepararam contra mim o seu caminho, e se acamparam ao redor da minha tenda.
¹³ Pôs longe de mim a meus irmãos, e os que me conhecem, como estranhos se apartaram de mim.
¹⁴ Os meus parentes me deixaram, e os meus conhecidos se esqueceram de mim.
¹⁵ Os meus domésticos e as minhas servas me reputaram como um estranho, e vim a ser um estrangeiro aos seus olhos.
¹⁶ Chamei a meu criado, e ele não me respondeu; cheguei a suplicar-lhe com a minha própria boca.
¹⁷ O meu hálito se fez estranho à minha mulher; tanto que supliquei o interesse dos filhos do meu corpo.
¹⁸ Até os pequeninos me desprezam, e, levantando-me eu, falam contra mim.
¹⁹ Todos os homens da minha confidência me abominam, e até os que eu amava se tornaram contra mim.
²⁰ Os meus ossos se apegaram à minha pele e à minha carne, e escapei só com a pele dos meus dentes.
²¹ Compadecei-vos de mim, amigos meus, compadecei-vos de mim, porque a mão de Deus me tocou.
²² Por que me perseguis assim como Deus, e da minha carne não vos fartais?
²³ Quem me dera agora, que as minhas palavras fossem escritas! Quem me dera, fossem gravadas num livro!
²⁴ E que, com pena de ferro, e com chumbo, para sempre fossem esculpidas na rocha.
²⁵ Porque eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra.
²⁶ E depois de consumida a minha pele, contudo ainda em minha carne verei a Deus,
²⁷ Vê-lo-ei, por mim mesmo, e os meus olhos, e não outros o contemplarão; e por isso as minhas entranhas se consomem no meu interior.
²⁸ Na verdade, que devíeis dizer: Por que o perseguimos? Pois a raiz da acusação se acha em mim.
²⁹ Temei vós mesmos a espada; porque o furor traz os castigos da espada, para saberdes que há um juízo.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é a famosa declaração de fé que Jó faz no capítulo 19, mesmo com o corpo destruído?",
                        opcoes: [
                            { numero: 1, texto: "Eu sei que serei curado hoje", correta: false },
                            { numero: 2, texto: "Eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra", correta: true },
                            { numero: 3, texto: "Eu sei que meus amigos têm razão", correta: false },
                            { numero: 4, texto: "Eu sei que a vida acaba aqui", correta: false }
                        ],
                        explicacao: "Jó 19:25 - Porque eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jó afirma que acontecerá mesmo depois de a sua pele ser consumida?",
                        opcoes: [
                            { numero: 1, texto: "Desapareceria para sempre", correta: false },
                            { numero: 2, texto: "Ainda em minha carne verei a Deus", correta: true },
                            { numero: 3, texto: "Tornar-se-ia um espírito errante", correta: false },
                            { numero: 4, texto: "Seria esquecido por todos", correta: false }
                        ],
                        explicacao: "Jó 19:26 - E depois de consumida a minha pele, contudo ainda em minha carne verei a Deus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        20: {
            titulo: "Zofar Fala da Brevidade do Ímpio",
            texto: ` ¹ Então respondeu Zofar, o naamatita, e disse:
² Visto que os meus pensamentos me fazem responder, eu me apresso.
³ Eu ouvi a repreensão, que me envergonha, mas o espírito do meu entendimento responderá por mim.
⁴ Porventura não sabes tu que desde a antiguidade, desde que o homem foi posto sobre a terra,
⁵ O júbilo dos ímpios é breve, e a alegria dos hipócritas momentânea?
⁶ Ainda que a sua altivez suba até ao céu, e a sua cabeça chegue até às nuvens.
⁷ Contudo, como o seu próprio esterco, perecerá para sempre; e os que o viam dirão: Onde está?
⁸ Como um sonho voará, e não será achado, e será afugentado como uma visão da noite.
⁹ O olho, que já o viu, jamais o verá, nem o seu lugar o verá mais.
¹⁰ Os seus filhos procurarão agradar aos pobres, e as suas mãos restituirão os seus bens.
¹¹ Os seus ossos estão cheios do vigor da sua mocidade, mas este se deitará com ele no pó.
¹² Ainda que o mal lhe seja doce na boca, e ele o esconda debaixo da sua língua,
¹³ E o guarde, e não o deixe, antes o retenha no seu paladar,
¹⁴ Contudo a sua comida se mudará nas suas entranhas; fel de áspides será interiormente.
¹⁵ Engoliu riquezas, porém vomitá-las-á; do seu ventre Deus as lançará.
¹⁶ Veneno de áspides sorverá; língua de víbora o matará.
¹⁷ Não verá as correntes, os rios e os ribeiros de mel e manteiga.
¹⁸ Restituirá o seu trabalho, e não o engolirá; conforme ao poder de sua mudança, e não saltará de gozo.
¹⁹ Porquanto oprimiu e desamparou os pobres, e roubou a casa que não edificou.
²⁰ Porquanto não sentiu sossego no seu ventre; nada salvará das coisas por ele desejadas.
²¹ Nada lhe sobejará do que coma; por isso as suas riquezas não durarão.
²² Sendo plena a sua abastança, estará angustiado; toda a força da miséria virá sobre ele.
²³ Mesmo estando ele a encher a sua barriga, Deus mandará sobre ele o ardor da sua ira, e a fará chover sobre ele quando for comer.
²⁴ Ainda que fuja das armas de ferro, o arco de bronze o atravessará.
²⁵ Desembainhará a espada que sairá do seu corpo, e resplandecendo virá do seu fel; e haverá sobre ele assombros.
²⁶ Toda a escuridão se ocultará nos seus esconderijos; um fogo não assoprado o consumirá, irá mal com o que ficar na sua tenda.
²⁷ Os céus manifestarão a sua iniquidade; e a terra se levantará contra ele.
²⁸ As riquezas de sua casa serão transportadas; no dia da sua ira todas se derramarão.
²⁹ Esta, da parte de Deus, é a porção do homem ímpio; esta é a herança que Deus lhe decretou.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Segundo Zofar, quanto tempo dura o júbilo dos ímpios?",
                        opcoes: [
                            { numero: 1, texto: "É eterno", correta: false },
                            { numero: 2, texto: "É breve, e a alegria dos hipócritas é apenas por um momento", correta: true },
                            { numero: 3, texto: "Dura cem anos", correta: false },
                            { numero: 4, texto: "Dura até a velhice", correta: false }
                        ],
                        explicacao: "Jó 20:5 - Que o júbilo dos ímpios é breve, e a alegria dos hipócritas apenas por um momento?",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/jo.js (Parte 5: Capítulos 21-25)

        21: {
            titulo: "A Prosperidade dos Ímpios",
            texto: ` ¹ Respondeu, porém, Jó, dizendo:
² Ouvi atentamente as minhas razões; e isto vos sirva de consolação.
³ Sofrei-me, e eu falarei; e havendo eu falado, zombai.
⁴ Porventura eu me queixo de algum homem? Porém, ainda que assim fosse, por que não se angustiaria o meu espírito?
⁵ Olhai para mim, e pasmai; e ponde a mão sobre a boca.
⁶ Porque, quando me lembro disto me perturbo, e a minha carne é sobressaltada de horror.
⁷ Por que razão vivem os ímpios, envelhecem, e ainda se robustecem em poder?
⁸ A sua descendência se estabelece com eles perante a sua face; e os seus renovos perante os seus olhos.
⁹ As suas casas têm paz, sem temor; e a vara de Deus não está sobre eles.
¹⁰ O seu touro gera, e não falha; pare a sua vaca, e não aborta.
¹¹ Fazem sair as suas crianças, como a um rebanho, e seus filhos andam saltando.
¹² Levantam a voz, ao som do tamboril e da harpa, e alegram-se ao som do órgão.
¹³ Na prosperidade gastam os seus dias, e num momento descem à sepultura.
¹⁴ E, todavia, dizem a Deus: Retira-te de nós; porque não desejamos ter conhecimento dos teus caminhos.
¹⁵ Quem é o Todo-Poderoso, para que nós o sirvamos? E que nos aproveitará que lhe façamos orações?
¹⁶ Vede, porém, que a prosperidade não está nas mãos deles; esteja longe de mim o conselho dos ímpios!
¹⁷ Quantas vezes sucede que se apaga a lâmpada dos ímpios, e lhes sobrevém a sua destruição? E Deus na sua ira lhes reparte dores!
¹⁸ Porque são como a palha diante do vento, e como a pragana, que arrebata o redemoinho.
¹⁹ Deus guarda a sua violência para seus filhos, e dá-lhe o pago, para que o conheça.
²⁰ Seus olhos verão a sua ruína, e ele beberá do furor do Todo-Poderoso.
²¹ Por que, que prazer teria na sua casa, depois de morto, cortando-se-lhe o número dos seus meses?
²² Porventura a Deus se ensinaria conhecimento, a ele que julga os excelsos?
²³ Um morre na força da sua plenitude, estando inteiramente sossegado e tranquilo.
²⁴ Com seus baldes cheios de leite, e a medula dos seus ossos umedecida.
²⁵ E outro, ao contrário, morre na amargura do seu coração, não havendo provado do bem.
²⁶ Juntamente jazem no pó, e os vermes os cobrem.
²⁷ Eis que conheço bem os vossos pensamentos; e os maus intentos com que injustamente me fazeis violência.
²⁸ Porque direis: Onde está a casa do príncipe, e onde a tenda em que moravam os ímpios?
²⁹ Porventura não perguntastes aos que passam pelo caminho, e não conheceis os seus sinais,
³⁰ Que o mau é preservado para o dia da destruição; e arrebatado no dia do furor?
³¹ Quem acusará diante dele o seu caminho, e quem lhe dará o pago do que faz?
³² Finalmente é levado à sepultura, e vigiam-lhe o túmulo.
³³ Os torrões do vale lhe são doces, e o seguirão todos os homens; e adiante dele foram inumeráveis.
³⁴ Como, pois, me consolais com vaidade? Pois nas vossas respostas ainda resta a transgressão.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Jó observa sobre a vida de muitos ímpios que contraria o argumento dos seus amigos?",
                        opcoes: [
                            { numero: 1, texto: "Que eles morrem logo que pecam", correta: false },
                            { numero: 2, texto: "Que eles vivem, envelhecem e ainda se tornam poderosos em riquezas", correta: true },
                            { numero: 3, texto: "Que eles pedem perdão todos os dias", correta: false },
                            { numero: 4, texto: "Que eles não têm filhos", correta: false }
                        ],
                        explicacao: "Jó 21:7 - Por que vivem os ímpios, envelhecem, e ainda se robustecem em poder?",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        22: {
            titulo: "Elifaz Acusa Jó de Crimes Específicos",
            texto: `¹ Então respondeu Elifaz, o temanita, dizendo:
² Porventura será o homem de algum proveito a Deus? Antes a si mesmo o prudente será proveitoso.
³ Ou tem o Todo-Poderoso prazer em que tu sejas justo, ou algum lucro em que tu faças perfeitos os teus caminhos?
⁴ Ou te repreende, pelo temor que tem de ti, ou entra contigo em juízo?
⁵ Porventura não é grande a tua malícia, e sem termo as tuas iniquidades?
⁶ Porque sem causa penhoraste a teus irmãos, e aos nus despojaste as vestes.
⁷ Não deste ao cansado água a beber, e ao faminto retiveste o pão.
⁸ Mas para o poderoso era a terra, e o homem tido em respeito habitava nela.
⁹ As viúvas despediste vazias, e os braços dos órfãos foram quebrados.
¹⁰ Por isso é que estás cercado de laços, e te perturba um pavor repentino,
¹¹ Ou trevas em que nada vês, e a abundância de águas que te cobre.
¹² Porventura Deus não está na altura dos céus? Olha para a altura das estrelas; quão elevadas estão.
¹³ Se dizes: Que sabe Deus? Porventura julgará ele através da escuridão?
¹⁴ As nuvens são esconderijo para ele, para que não veja; e passeia pelo circuito dos céus.
¹⁵ Porventura queres guardar a vereda antiga, que pisaram os homens iníquos?
¹⁶ Eles foram arrebatados antes do seu tempo; sobre o seu fundamento um dilúvio se derramou.
¹⁷ Diziam a Deus: Retira-te de nós. E: Que foi que o Todo-Poderoso nos fez?
¹⁸ Contudo ele encheu de bens as suas casas; mas o conselho dos ímpios esteja longe de mim.
¹⁹ Os justos o veem, e se alegram, e o inocente escarnece deles.
²⁰ Porquanto o nosso adversário não foi destruído, mas o fogo consumiu o que restou deles.
²¹ Apega-te, pois, a ele, e tem paz, e assim te sobrevirá o bem.
²² Aceita, peço-te, a lei da sua boca, e põe as suas palavras no teu coração.
²³ Se te voltares ao Todo-Poderoso, serás edificado; se afastares a iniquidade da tua tenda,
²⁴ E deitares o teu tesouro no pó, e o ouro de Ofir nas pedras dos ribeiros,
²⁵ Então o Todo-Poderoso será o teu tesouro, e a tua prata acumulada.
²⁶ Porque então te deleitarás no Todo-Poderoso, e levantarás o teu rosto para Deus.
²⁷ Orarás a ele, e ele te ouvirá, e pagarás os teus votos.
²⁸ Determinarás tu algum negócio, e ser-te-á firme, e a luz brilhará em teus caminhos.
²⁹ Quando te abaterem, então tu dirás: Haja exaltação! E Deus salvará ao humilde.
³⁰ E livrará até ao que não é inocente; porque será libertado pela pureza de tuas mãos.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Neste terceiro discurso, de quais pecados Elifaz acusa Jó sem ter provas?",
                        opcoes: [
                            { numero: 1, texto: "De roubar o templo", correta: false },
                            { numero: 2, texto: "De oprimir viúvas, órfãos e não dar água ao cansado", correta: true },
                            { numero: 3, texto: "De ser um falso profeta", correta: false },
                            { numero: 4, texto: "De fugir da guerra", correta: false }
                        ],
                        explicacao: "Jó 22:6-9 - Porque sem causa penhoraste a teus irmãos... às viúvas despediste vazias, e os braços dos órfãos foram quebrados.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        23: {
            titulo: "O Desejo de Encontrar a Deus",
            texto: ` ¹ Respondeu, porém, Jó, dizendo:
² Ainda hoje a minha queixa está em amargura; a minha mão pesa sobre meu gemido.
³ Ah, se eu soubesse onde o poderia achar! Então me chegaria ao seu tribunal.
⁴ Exporia ante ele a minha causa, e a minha boca encheria de argumentos.
⁵ Saberia as palavras com que ele me responderia, e entenderia o que me dissesse.
⁶ Porventura segundo a grandeza de seu poder contenderia comigo? Não: ele antes me atenderia.
⁷ Ali o reto pleitearia com ele, e eu me livraria para sempre do meu Juiz.
⁸ Eis que se me adianto, ali não está; se torno para trás, não o percebo.
⁹ Se opera à esquerda, não o vejo; se se encobre à direita, não o diviso.
¹⁰ Porém ele sabe o meu caminho; provando-me ele, sairei como o ouro.
¹¹ Nas suas pisadas os meus pés se afirmaram; guardei o seu caminho, e não me desviei dele.
¹² Do preceito de seus lábios nunca me apartei, e as palavras da sua boca guardei mais do que a minha porção.
¹³ Mas, se ele resolveu alguma coisa, quem então o desviará? O que a sua alma quiser, isso fará.
¹⁴ Porque cumprirá o que está ordenado a meu respeito, e muitas coisas como estas ainda tem consigo.
¹⁵ Por isso me perturbo perante ele, e quando isto considero, temo-me dele.
¹⁶ Porque Deus macerou o meu coração, e o Todo-Poderoso me perturbou.
¹⁷ Porquanto não fui desarraigado por causa das trevas, e nem encobriu o meu rosto com a escuridão.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Jó diz sobre o seu desejo de encontrar o tribunal de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Que tem medo de se aproximar", correta: false },
                            { numero: 2, texto: "Ah, se eu soubesse onde o poderia achar! Então me chegaria ao seu tribunal", correta: true },
                            { numero: 3, texto: "Que Deus está escondido para sempre", correta: false },
                            { numero: 4, texto: "Que não precisa mais de Deus", correta: false }
                        ],
                        explicacao: "Jó 23:3 - Ah, se eu soubesse onde o poderia achar! Então me chegaria ao seu tribunal.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como Jó descreve a sua fidelidade às palavras da boca de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Que as esqueceu", correta: false },
                            { numero: 2, texto: "Que as guardou mais do que a sua porção necessária de alimento", correta: true },
                            { numero: 3, texto: "Que são difíceis de entender", correta: false },
                            { numero: 4, texto: "Que apenas os sacerdotes as conhecem", correta: false }
                        ],
                        explicacao: "Jó 23:12 - Do mandamento de seus lábios nunca me apartei, e as palavras da sua boca guardei mais do que a minha porção.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        24: {
            titulo: "A Violência no Mundo",
            texto: `¹ Visto que do Todo-Poderoso não se encobriram os tempos, por que, os que o conhecem, não veem os seus dias?
² Até os limites removem; roubam os rebanhos, e os apascentam.
³ Do órfão levam o jumento; tomam em penhor o boi da viúva.
⁴ Desviam do caminho os necessitados; e os pobres da terra juntos se escondem.
⁵ Eis que, como jumentos monteses no deserto, saem à sua obra, madrugando para a presa; a campina dá mantimento a eles e aos seus filhos.
⁶ No campo segam o seu pasto, e vindimam a vinha do ímpio.
⁷ Ao nu fazem passar a noite sem roupa, não tendo ele coberta contra o frio.
⁸ Pelas chuvas das montanhas são molhados e, não tendo refúgio, abraçam-se com as rochas.
⁹ Ao orfãozinho arrancam dos peitos, e tomam o penhor do pobre.
¹⁰ Fazem com que os nus vão sem roupa e aos famintos tiram as espigas.
¹¹ Dentro das suas paredes espremem o azeite; pisam os lagares, e ainda têm sede.
¹² Desde as cidades gemem os homens, e a alma dos feridos exclama, e contudo Deus lho não imputa como loucura.
¹³ Eles estão entre os que se opõem à luz; não conhecem os seus caminhos, e não permanecem nas suas veredas.
¹⁴ De madrugada se levanta o homicida, mata o pobre e necessitado, e de noite é como o ladrão.
¹⁵ Assim como o olho do adúltero aguarda o crepúsculo, dizendo: Não me verá olho nenhum; e oculta o rosto,
¹⁶ Nas trevas minam as casas, que de dia se marcaram; não conhecem a luz.
¹⁷ Porque a manhã para todos eles é como sombra de morte; pois, sendo conhecidos, sentem os pavores da sombra da morte.
¹⁸ É ligeiro sobre a superfície das águas; maldita é a sua parte sobre a terra; não volta pelo caminho das vinhas.
¹⁹ A secura e o calor desfazem as águas da neve; assim desfará a sepultura aos que pecaram.
²⁰ A madre se esquecerá dele, os vermes o comerão gostosamente; nunca mais haverá lembrança dele; e a iniquidade se quebrará como uma árvore.
²¹ Aflige à estéril que não dá à luz, e à viúva não faz bem.
²² Até aos poderosos arrasta com a sua força; se ele se levanta, não há vida segura.
²³ Se Deus lhes dá descanso, estribam-se nisso; seus olhos porém estão nos caminhos deles.
²⁴ Por um pouco se exaltam, e logo desaparecem; são abatidos, encerrados como todos os demais; e cortados como as cabeças das espigas.
²⁵ Se agora não é assim, quem me desmentirá e desfará as minhas razões?

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Jó descreve sobre as injustiças que ocorrem no mundo (como remover marcos e roubar rebanhos)?",
                        opcoes: [
                            { numero: 1, texto: "Que Deus castiga os culpados na mesma hora", correta: false },
                            { numero: 2, texto: "Que, embora os homens clamem, parece que Deus não lhes imputa pecado imediatamente", correta: true },
                            { numero: 3, texto: "Que o mundo é perfeito", correta: false },
                            { numero: 4, texto: "Que não existem pessoas más", correta: false }
                        ],
                        explicacao: "Jó 24:12 - Desde as cidades gemem os homens... contudo Deus não lhes imputa loucura (ou pecado aparente imediato).",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        25: {
            titulo: "O Último (e Curto) Discurso de Bildade",
            texto: `¹ Então respondeu Bildade, o suíta, e disse:
² Com ele estão domínio e temor; ele faz paz nas suas alturas.
³ Porventura têm número as suas tropas? E sobre quem não se levanta a sua luz?
⁴ Como, pois, seria justo o homem para com Deus, e como seria puro aquele que nasce de mulher?
⁵ Eis que até a lua não resplandece, e as estrelas não são puras aos seus olhos.
⁶ E quanto menos o homem, que é um verme, e o filho do homem, que é um vermezinho!

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Bildade descreve a insignificância do homem perante a pureza de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Como um gigante", correta: false },
                            { numero: 2, texto: "Como um bicho e um verme", correta: true },
                            { numero: 3, texto: "Como um anjo caído", correta: false },
                            { numero: 4, texto: "Como o senhor da terra", correta: false }
                        ],
                        explicacao: "Jó 25:6 - E quanto menos o homem, que é um bicho, e o filho do homem, que é um verme!",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/jo.js (Parte 6: Capítulos 26-31)

        26: {
            titulo: "A Soberania de Deus na Criação",
            texto: ` ¹ Jó, porém, respondeu, dizendo:
² Como ajudaste aquele que não tinha força, e sustentaste o braço que não tinha vigor?
³ Como aconselhaste aquele que não tinha sabedoria, e plenamente fizeste saber a causa, assim como era?
⁴ A quem proferiste palavras, e de quem é o espírito que saiu de ti?
⁵ Os mortos tremem debaixo das águas, com os seus moradores.
⁶ O inferno está nu perante ele, e não há coberta para a perdição.
⁷ O norte estende sobre o vazio; e suspende a terra sobre o nada.
⁸ Prende as águas nas suas nuvens, todavia a nuvem não se rasga debaixo delas.
⁹ Encobre a face do seu trono, e sobre ele estende a sua nuvem.
¹⁰ Marcou um limite sobre a superfície das águas em redor, até aos confins da luz e das trevas.
¹¹ As colunas do céu tremem, e se espantam da sua ameaça.
¹² Com a sua força fende o mar, e com o seu entendimento abate a soberba.
¹³ Pelo seu Espírito ornou os céus; a sua mão formou a serpente enroscadiça.
¹⁴ Eis que isto são apenas as orlas dos seus caminhos; e quão pouco é o que temos ouvido dele! Quem, pois, entenderia o trovão do seu poder?

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Jó descreve a forma como Deus sustenta a terra no espaço?",
                        opcoes: [
                            { numero: 1, texto: "Sobre grandes colunas de pedra", correta: false },
                            { numero: 2, texto: "Ele suspende a terra sobre o nada", correta: true },
                            { numero: 3, texto: "Sobre os ombros de gigantes", correta: false },
                            { numero: 4, texto: "No centro de um grande oceano", correta: false }
                        ],
                        explicacao: "Jó 26:7 - Ele estende o norte sobre o vazio; e suspende a terra sobre o nada.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        27: {
            titulo: "A Resolução de Jó",
            texto: `¹ E prosseguindo Jó em seu discurso, disse:
² Vive Deus, que desviou a minha causa, e o Todo-Poderoso, que amargurou a minha alma.
³ Que, enquanto em mim houver alento, e o sopro de Deus nas minhas narinas,
⁴ Não falarão os meus lábios iniquidade, nem a minha língua pronunciará engano.
⁵ Longe de mim que eu vos justifique; até que eu expire, nunca apartarei de mim a minha integridade.
⁶ À minha justiça me apegarei e não a largarei; não me reprovará o meu coração em toda a minha vida.
⁷ Seja como o ímpio o meu inimigo, e como o perverso o que se levantar contra mim.
⁸ Porque qual será a esperança do hipócrita, havendo sido avaro, quando Deus lhe arrancar a sua alma?
⁹ Porventura Deus ouvirá o seu clamor, sobrevindo-lhe a tribulação?
¹⁰ Deleitar-se-á no Todo-Poderoso, ou invocará a Deus em todo o tempo?
¹¹ Ensinar-vos-ei acerca da mão de Deus, e não vos encobrirei o que está com o Todo-Poderoso.
¹² Eis que todos vós já o vistes; por que, pois, vos desvaneceis na vossa vaidade?
¹³ Esta, pois, é a porção do homem ímpio da parte de Deus, e a herança, que os tiranos receberão do Todo-Poderoso.
¹⁴ Se os seus filhos se multiplicarem, será para a espada, e a sua prole não se fartará de pão.
¹⁵ Os que ficarem dele na morte serão enterrados, e as suas viúvas não chorarão.
¹⁶ Se amontoar prata como pó, e aparelhar roupas como lodo,
¹⁷ Ele as aparelhará, porém o justo as vestirá, e o inocente repartirá a prata.
¹⁸ E edificará a sua casa como a traça, e como o guarda que faz a cabana.
¹⁹ Rico se deita, e não será recolhido; abre os seus olhos, e nada terá.
²⁰ Pavores se apoderam dele como águas; de noite o arrebata a tempestade.
²¹ O vento oriental leva-o, e ele se vai, e varre-o com ímpeto do seu lugar.
²² E Deus lançará isto sobre ele, e não lhe poupará; irá fugindo da sua mão.
²³ Cada um baterá palmas contra ele e assobiará tirando-o do seu lugar.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Até quando Jó afirmou que manteria a sua integridade e não deixaria de se defender?",
                        opcoes: [
                            { numero: 1, texto: "Até que os seus amigos pedissem desculpa", correta: false },
                            { numero: 2, texto: "Até que eu expire (morra), nunca afastarei de mim a minha integridade", correta: true },
                            { numero: 3, texto: "Até que ficasse rico novamente", correta: false },
                            { numero: 4, texto: "Apenas por mais uma semana", correta: false }
                        ],
                        explicacao: "Jó 27:5 - Longe de mim que eu vos justifique; até que eu expire, nunca afastarei de mim a minha integridade.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        28: {
            titulo: "Onde se acha a Sabedoria?",
            texto: ` ¹ Na verdade, há veios de onde se extrai a prata, e lugar onde se refina o ouro.
² O ferro tira-se da terra, e da pedra se funde o cobre.
³ Ele põe fim às trevas, e toda a extremidade ele esquadrinha, a pedra da escuridão e a da sombra da morte.
⁴ Abre um poço de mina longe dos homens, em lugares esquecidos do pé; ficando pendentes longe dos homens, oscilam de um lado para outro.
⁵ Da terra procede o pão, mas por baixo é revolvida como por fogo.
⁶ As suas pedras são o lugar da safira, e tem pó de ouro.
⁷ Essa vereda a ave de rapina a ignora, e não a viram os olhos da gralha.
⁸ Nunca a pisaram filhos de animais altivos, nem o feroz leão passou por ela.
⁹ Ele estende a sua mão contra o rochedo, e revolve os montes desde as suas raízes.
¹⁰ Dos rochedos faz sair rios, e o seu olho vê tudo o que há de precioso.
¹¹ Os rios tapa, e nem uma gota sai deles, e tira à luz o que estava escondido.
¹² Porém onde se achará a sabedoria, e onde está o lugar da inteligência?
¹³ O homem não conhece o seu valor, e nem ela se acha na terra dos viventes.
¹⁴ O abismo diz: Não está em mim; e o mar diz: Ela não está comigo.
¹⁵ Não se dará por ela ouro fino, nem se pesará prata em troca dela.
¹⁶ Nem se pode comprar por ouro fino de Ofir, nem pelo precioso ônix, nem pela safira.
¹⁷ Com ela não se pode comparar o ouro nem o cristal; nem se trocará por joia de ouro fino.
¹⁸ Não se fará menção de coral nem de pérolas; porque o valor da sabedoria é melhor que o dos rubis.
¹⁹ Não se lhe igualará o topázio da Etiópia, nem se pode avaliar por ouro puro.
²⁰ Donde, pois, vem a sabedoria, e onde está o lugar da inteligência?
²¹ Pois está encoberta aos olhos de todo o vivente, e oculta às aves do céu.
²² A perdição e a morte dizem: Ouvimos com os nossos ouvidos a sua fama.
²³ Deus entende o seu caminho, e ele sabe o seu lugar.
²⁴ Porque ele vê as extremidades da terra; e vê tudo o que há debaixo dos céus.
²⁵ Quando deu peso ao vento, e tomou a medida das águas;
²⁶ Quando prescreveu leis para a chuva e caminho para o relâmpago dos trovões;
²⁷ Então a viu e relatou; estabeleceu-a, e também a esquadrinhou.
²⁸ E disse ao homem: Eis que o temor do Senhor é a sabedoria, e apartar-se do mal é a inteligência.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Neste capítulo poético, Jó afirma que o homem sabe minerar ouro e prata, mas onde se encontra a verdadeira sabedoria?",
                        opcoes: [
                            { numero: 1, texto: "No fundo do mar", correta: false },
                            { numero: 2, texto: "O temor do Senhor é a sabedoria, e apartar-se do mal é o entendimento", correta: true },
                            { numero: 3, texto: "Nos livros dos escribas", correta: false },
                            { numero: 4, texto: "No brilho das estrelas", correta: false }
                        ],
                        explicacao: "Jó 28:28 - Mas disse ao homem: Eis que o temor do Senhor é a sabedoria, e apartar-se do mal é o entendimento.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        29: {
            titulo: "Lembranças da Antiga Felicidade",
            texto: ` ¹ E prosseguiu Jó no seu discurso, dizendo:
² Ah! Quem me dera ser como eu fui nos meses passados, como nos dias em que Deus me guardava!
³ Quando fazia resplandecer a sua lâmpada sobre a minha cabeça e quando eu pela sua luz caminhava pelas trevas.
⁴ Como fui nos dias da minha mocidade, quando o segredo de Deus estava sobre a minha tenda;
⁵ Quando o Todo-Poderoso ainda estava comigo, e os meus filhos em redor de mim.
⁶ Quando lavava os meus passos na manteiga, e da rocha me corriam ribeiros de azeite;
⁷ Quando eu saía para a porta da cidade, e na rua fazia preparar a minha cadeira,
⁸ Os moços me viam, e se escondiam, e até os idosos se levantavam e se punham em pé;
⁹ Os príncipes continham as suas palavras, e punham a mão sobre a sua boca;
¹⁰ A voz dos nobres se calava, e a sua língua apegava-se ao seu paladar.
¹¹ Ouvindo-me algum ouvido, me tinha por bem-aventurado; vendo-me algum olho, dava testemunho de mim;
¹² Porque eu livrava o miserável, que clamava, como também o órfão que não tinha quem o socorresse.
¹³ A bênção do que ia perecendo vinha sobre mim, e eu fazia que rejubilasse o coração da viúva.
¹⁴ Vestia-me da justiça, e ela me servia de vestimenta; como manto e diadema era a minha justiça.
¹⁵ Eu me fazia de olhos para o cego, e de pés para o coxo.
¹⁶ Dos necessitados era pai, e as causas de que eu não tinha conhecimento inquiria com diligência.
¹⁷ E quebrava os queixos do perverso, e dos seus dentes tirava a presa.
¹⁸ E dizia: No meu ninho expirarei, e multiplicarei os meus dias como a areia.
¹⁹ A minha raiz se estendia junto às águas, e o orvalho permanecia sobre os meus ramos;
²⁰ A minha honra se renovava em mim, e o meu arco se reforçava na minha mão.
²¹ Ouviam-me e esperavam, e em silêncio atendiam ao meu conselho.
²² Havendo eu falado, não replicavam, e minhas razões destilavam sobre eles;
²³ Porque me esperavam, como à chuva; e abriam a sua boca, como à chuva tardia.
²⁴ Se eu ria para eles, não o criam, e a luz do meu rosto não faziam abater;
²⁵ Eu escolhia o seu caminho, assentava-me como chefe, e habitava como rei entre as suas tropas; como aquele que consola os que pranteiam.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Jó era visto pela comunidade e pelos necessitados nos dias da sua prosperidade?",
                        opcoes: [
                            { numero: 1, texto: "Como um homem temido e cruel", correta: false },
                            { numero: 2, texto: "Como alguém que socorria o pobre, o órfão e fazia o coração da viúva cantar de alegria", correta: true },
                            { numero: 3, texto: "Como um estranho que ninguém conhecia", correta: false },
                            { numero: 4, texto: "Como um simples mercador", correta: false }
                        ],
                        explicacao: "Jó 29:12-13 - Porque eu livrava o pobre que clamava... e fazia que o coração da viúva cantasse de alegria.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        30: {
            titulo: "O Contraste do Sofrimento Atual",
            texto: ` ¹ Agora, porém, se riem de mim os de menos idade do que eu, cujos pais eu teria desdenhado de pôr com os cães do meu rebanho.
² De que também me serviria a força das mãos daqueles, cujo vigor se tinha esgotado?
³ De míngua e fome se debilitaram; e recolhiam-se para os lugares secos, tenebrosos, assolados e desertos.
⁴ Apanhavam malvas junto aos arbustos, e o seu mantimento eram as raízes dos zimbros.
⁵ Do meio dos homens eram expulsos, e gritavam contra eles, como contra o ladrão;
⁶ Para habitarem nos barrancos dos vales, e nas cavernas da terra e das rochas.
⁷ Bramavam entre os arbustos, e ajuntavam-se debaixo das urtigas.
⁸ Eram filhos de doidos, e filhos de gente sem nome, e da terra foram expulsos.
⁹ Agora, porém, sou a sua canção, e lhes sirvo de provérbio.
¹⁰ Abominam-me, e fogem para longe de mim, e no meu rosto não se privam de cuspir.
¹¹ Porque Deus desatou a sua corda, e me oprimiu, por isso sacudiram de si o freio perante o meu rosto.
¹² À direita se levantam os moços; empurram os meus pés, e preparam contra mim os seus caminhos de destruição.
¹³ Desbaratam-me o caminho; promovem a minha miséria; contra eles não há ajudador.
¹⁴ Vêm contra mim como por uma grande brecha, e revolvem-se entre a assolação.
¹⁵ Sobrevieram-me pavores; como vento perseguem a minha honra, e como nuvem passou a minha felicidade.
¹⁶ E agora derrama-se em mim a minha alma; os dias da aflição se apoderaram de mim.
¹⁷ De noite se me traspassam os meus ossos, e os meus nervos não descansam.
¹⁸ Pela grandeza do meu mal está desfigurada a minha veste, que, como a gola da minha túnica, me cinge.
¹⁹ Lançou-me na lama, e fiquei semelhante ao pó e à cinza.
²⁰ Clamo a ti, porém, tu não me respondes; estou em pé, porém, para mim não atentas.
²¹ Tornaste-te cruel contra mim; com a força da tua mão resistes violentamente.
²² Levantas-me sobre o vento, fazes-me cavalgar sobre ele, e derretes-me o ser.
²³ Porque eu sei que me levarás à morte e à casa do ajuntamento determinada a todos os viventes.
²⁴ Porém não estenderá a mão para o túmulo, ainda que eles clamem na sua destruição.
²⁵ Porventura não chorei sobre aquele que estava aflito, ou não se angustiou a minha alma pelo necessitado?
²⁶ Todavia aguardando eu o bem, então me veio o mal, esperando eu a luz, veio a escuridão.
²⁷ As minhas entranhas fervem e não estão quietas; os dias da aflição me surpreendem.
²⁸ Denegrido ando, porém não do sol; levantando-me na congregação, clamo por socorro.
²⁹ Irmão me fiz dos chacais, e companheiro dos avestruzes.
³⁰ Enegreceu-se a minha pele sobre mim, e os meus ossos estão queimados do calor.
³¹ A minha harpa se tornou em luto, e o meu órgão em voz dos que choram.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Jó descreve a mudança de tratamento que recebe das pessoas agora que está na miséria?",
                        opcoes: [
                            { numero: 1, texto: "Todos continuam a respeitá-lo", correta: false },
                            { numero: 2, texto: "Até os jovens zombam dele, e ele se tornou o seu provérbio", correta: true },
                            { numero: 3, texto: "Ele foi eleito juiz da cidade", correta: false },
                            { numero: 4, texto: "Ninguém repara que ele está doente", correta: false }
                        ],
                        explicacao: "Jó 30:1,9 - Mas agora se riem de mim os de menos idade do que eu... E agora sou a sua canção, e lhes sirvo de provérbio.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        31: {
            titulo: "O Juramento de Inocência",
            texto: ` ¹ Fiz aliança com os meus olhos; como, pois, os fixaria numa virgem?
² Que porção teria eu do Deus lá de cima, ou que herança do Todo-Poderoso desde as alturas?
³ Porventura não é a perdição para o perverso, o desastre para os que praticam iniquidade?
⁴ Ou não vê ele os meus caminhos, e não conta todos os meus passos?
⁵ Se andei com falsidade, e se o meu pé se apressou para o engano
⁶ (Pese-me em balanças fiéis, e saberá Deus a minha sinceridade),
⁷ Se os meus passos se desviaram do caminho, e se o meu coração segue os meus olhos, e se às minhas mãos se apegou qualquer coisa,
⁸ Então semeie eu e outro coma, e seja a minha descendência arrancada até à raiz.
⁹ Se o meu coração se deixou seduzir por uma mulher, ou se eu armei traições à porta do meu próximo,
¹⁰ Então moa minha mulher para outro, e outros se encurvem sobre ela,
¹¹ Porque é uma infâmia, e é delito pertencente aos juízes.
¹² Porque é fogo que consome até à perdição, e desarraigaria toda a minha renda.
¹³ Se desprezei o direito do meu servo ou da minha serva, quando eles contendiam comigo;
¹⁴ Então que faria eu quando Deus se levantasse? E, inquirindo a causa, que lhe responderia?
¹⁵ Aquele que me formou no ventre não o fez também a ele? Ou não nos formou do mesmo modo na madre?
¹⁶ Se retive o que os pobres desejavam, ou fiz desfalecer os olhos da viúva,
¹⁷ Ou se, sozinho comi o meu bocado, e o órfão não comeu dele
¹⁸ (Porque desde a minha mocidade cresceu comigo como com seu pai, e fui o guia da viúva desde o ventre de minha mãe),
¹⁹ Se alguém vi perecer por falta de roupa, e ao necessitado por não ter coberta,
²⁰ Se os seus lombos não me abençoaram, se ele não se aquentava com as peles dos meus cordeiros,
²¹ Se eu levantei a minha mão contra o órfão, porquanto na porta via a minha ajuda,
²² Então caia do ombro a minha espádua, e separe-se o meu braço do osso.
²³ Porque o castigo de Deus era para mim um assombro, e eu não podia suportar a sua grandeza.
²⁴ Se no ouro pus a minha esperança, ou disse ao ouro fino: Tu és a minha confiança;
²⁵ Se me alegrei de que era muita a minha riqueza, e de que a minha mão tinha alcançado muito;
²⁶ Se olhei para o sol, quando resplandecia, ou para a lua, caminhando gloriosa,
²⁷ E o meu coração se deixou enganar em oculto, e a minha boca beijou a minha mão,
²⁸ Também isto seria delito à punição de juízes; pois assim negaria a Deus que está lá em cima.
²⁹ Se me alegrei da desgraça do que me tem ódio, e se exultei quando o mal o atingiu
³⁰ (Também não deixei pecar a minha boca, desejando a sua morte com maldição);
³¹ Se a gente da minha tenda não disse: Ah! Quem nos dará da sua carne? Nunca nos fartaríamos dela.
³² O estrangeiro não passava a noite na rua; as minhas portas abria ao viandante.
³³ Se, como Adão, encobri as minhas transgressões, ocultando o meu delito no meu seio;
³⁴ Porque eu temia a grande multidão, e o desprezo das famílias me apavorava, e eu me calei, e não saí da porta;
³⁵ Ah! Quem me dera um que me ouvisse! Eis que o meu desejo é que o Todo-Poderoso me responda, e que o meu adversário escreva um livro.
³⁶ Por certo que o levaria sobre o meu ombro, sobre mim o ataria por coroa.
³⁷ O número dos meus passos lhe mostraria; como príncipe me chegaria a ele.
³⁸ Se a minha terra clamar contra mim, e se os seus sulcos juntamente chorarem,
³⁹ Se comi os seus frutos sem dinheiro, e sufoquei a alma dos seus donos,
⁴⁰ Por trigo me produza cardos, e por cevada joio. Acabaram-se as palavras de Jó.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Que compromisso Jó diz ter feito com os seus olhos para manter a sua pureza?",
                        opcoes: [
                            { numero: 1, texto: "De nunca olhar para o sol", correta: false },
                            { numero: 2, texto: "Fiz aliança com os meus olhos; como pois os fixaria numa virgem?", correta: true },
                            { numero: 3, texto: "De manter os olhos sempre fechados", correta: false },
                            { numero: 4, texto: "De olhar apenas para as suas riquezas", correta: false }
                        ],
                        explicacao: "Jó 31:1 - Fiz aliança com os meus olhos; como pois os fixaria numa virgem?",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/jo.js (Parte 7: Capítulos 32-37)

        32: {
            titulo: "A Intervenção de Eliú",
            texto: `¹ Então aqueles três homens cessaram de responder a Jó; porque era justo aos seus próprios olhos.
² E acendeu-se a ira de Eliú, filho de Baraquel, o buzita, da família de Rão; contra Jó se acendeu a sua ira, porque se justificava a si mesmo, mais do que a Deus.
³ Também a sua ira se acendeu contra os seus três amigos, porque, não achando que responder, todavia condenavam a Jó.
⁴ Eliú, porém, esperou para falar a Jó, porquanto tinham mais idade do que ele.
⁵ Vendo, pois, Eliú que já não havia resposta na boca daqueles três homens, a sua ira se acendeu.
⁶ E respondeu Eliú, filho de Baraquel, o buzita, dizendo: Eu sou de menos idade, e vós sois idosos; receei-me e temi de vos declarar a minha opinião.
⁷ Dizia eu: Falem os dias, e a multidão dos anos ensine a sabedoria.
⁸ Na verdade, há um espírito no homem, e a inspiração do Todo-Poderoso o faz entendido.
⁹ Os grandes não são os sábios, nem os velhos entendem o que é direito.
¹⁰ Assim digo: Dai-me ouvidos, e também eu declararei a minha opinião.
¹¹ Eis que aguardei as vossas palavras, e dei ouvidos às vossas considerações, até que buscásseis razões.
¹² Atentando, pois, para vós, eis que nenhum de vós há que possa convencer a Jó, nem que responda às suas razões;
¹³ Para que não digais: Achamos a sabedoria; Deus o derrubou, e não homem algum.
¹⁴ Ora ele não dirigiu contra mim palavra alguma, nem lhe responderei com as vossas palavras.
¹⁵ Estão pasmados, não respondem mais, faltam-lhes as palavras.
¹⁶ Esperei, pois, mas não falam; porque já pararam, e não respondem mais.
¹⁷ Também eu responderei pela minha parte; também eu declararei a minha opinião.
¹⁸ Porque estou cheio de palavras; o meu espírito me constrange.
¹⁹ Eis que dentro de mim sou como o mosto, sem respiradouro, prestes a arrebentar, como odres novos.
²⁰ Falarei, para que ache alívio; abrirei os meus lábios, e responderei.
²¹ Que não faça eu acepção de pessoas, nem use de palavras lisonjeiras com o homem!
²² Porque não sei usar de lisonjas; em breve me levaria o meu Criador.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que o jovem Eliú esperou até que os três amigos de Jó parassem de falar para começar o seu discurso?",
                        opcoes: [
                            { numero: 1, texto: "Porque ele estava dormindo", correta: false },
                            { numero: 2, texto: "Porque ele era mais jovem e esperou que os mais velhos falassem primeiro", correta: true },
                            { numero: 3, texto: "Porque ele não conhecia a história", correta: false },
                            { numero: 4, texto: "Porque ele tinha medo de Jó", correta: false }
                        ],
                        explicacao: "Jó 32:4 - Eliú, porém, esperou para falar a Jó, porquanto eles eram mais idosos do que ele.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        33: {
            titulo: "Deus Fala de Várias Maneiras",
            texto: ` ¹ Assim, na verdade, ó Jó, ouve as minhas razões, e dá ouvidos a todas as minhas palavras.
² Eis que já abri a minha boca; já falou a minha língua debaixo do meu paladar.
³ As minhas razões provam a sinceridade do meu coração, e os meus lábios proferem o puro saber.
⁴ O Espírito de Deus me fez; e a inspiração do Todo-Poderoso me deu vida.
⁵ Se podes, responde-me, põe em ordem as tuas razões diante de mim, e apresenta-te.
⁶ Eis que vim de Deus, como tu; do barro também eu fui formado.
⁷ Eis que não te perturbará o meu terror, nem será pesada sobre ti a minha mão.
⁸ Na verdade tu falaste aos meus ouvidos; e eu ouvi a voz das tuas palavras. Dizias:
⁹ Limpo estou, sem transgressão; puro sou, e não tenho iniquidade.
¹⁰ Eis que procura pretexto contra mim, e me considera como seu inimigo.
¹¹ Põe no tronco os meus pés, e observa todas as minhas veredas.
¹² Eis que nisso não tens razão; eu te respondo; porque maior é Deus do que o homem.
¹³ Por que razão contendes com ele, sendo que não responde acerca de todos os seus feitos?
¹⁴ Antes Deus fala uma e duas vezes; porém ninguém atenta para isso.
¹⁵ Em sonho ou em visão noturna, quando cai sono profundo sobre os homens, e adormecem na cama.
¹⁶ Então o revela ao ouvido dos homens, e lhes sela a sua instrução,
¹⁷ Para apartar o homem daquilo que faz, e esconder do homem a soberba.
¹⁸ Para desviar a sua alma da cova, e a sua vida de passar pela espada.
¹⁹ Também na sua cama é castigado com dores; e com incessante contenda nos seus ossos;
²⁰ De modo que a sua vida abomina até o pão, e a sua alma a comida apetitosa.
²¹ Desaparece a sua carne a olhos vistos, e os seus ossos, que não se viam, agora aparecem.
²² E a sua alma se vai chegando à cova, e a sua vida aos que trazem a morte.
²³ Se com ele, pois, houver um mensageiro, um intérprete, um entre milhares, para declarar ao homem a sua retidão,
²⁴ Então terá misericórdia dele, e lhe dirá: Livra-o, para que não desça à cova; já achei resgate.
²⁵ Sua carne se reverdecerá mais do que era na mocidade, e tornará aos dias da sua juventude.
²⁶ Deveras orará a Deus, o qual se agradará dele, e verá a sua face com júbilo, e restituirá ao homem a sua justiça.
²⁷ Olhará para os homens, e se algum disser: Pequei, e perverti o direito, o que de nada me aproveitou.
²⁸ Porém Deus livrou a minha alma de ir para a cova, e a minha vida verá a luz.
²⁹ Eis que tudo isto é obra de Deus, duas e três vezes para com o homem,
³⁰ Para desviar a sua alma da perdição, e o iluminar com a luz dos viventes.
³¹ Escuta, pois, ó Jó, ouve-me; cala-te, e eu falarei.
³² Se tens alguma coisa que dizer, responde-me; fala, porque desejo justificar-te.
³³ Se não, escuta-me tu; cala-te, e ensinar-te-ei a sabedoria.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Segundo Eliú, de quais formas Deus fala ao homem para o desviar do seu mau propósito?",
                        opcoes: [
                            { numero: 1, texto: "Apenas por meio de trovões", correta: false },
                            { numero: 2, texto: "Pelo sonho, pela visão noturna e também pela dor no leito", correta: true },
                            { numero: 3, texto: "Deus não fala com os homens", correta: false },
                            { numero: 4, texto: "Apenas através de cartas reais", correta: false }
                        ],
                        explicacao: "Jó 33:14-19 - Pelo contrário, Deus fala uma e duas vezes... em sonho ou em visão noturna... também no seu leito é castigado com dores...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        34: {
            titulo: "Eliú Defende a Justiça de Deus",
            texto: ` ¹ Respondeu mais Eliú, dizendo:
² Ouvi, vós, sábios, as minhas razões; e vós, entendidos, inclinai os ouvidos para mim.
³ Porque o ouvido prova as palavras, como o paladar experimenta a comida.
⁴ O que é direito escolhamos para nós; e conheçamos entre nós o que é bom.
⁵ Porque Jó disse: Sou justo, e Deus tirou o meu direito.
⁶ Apesar do meu direito sou considerado mentiroso; a minha ferida é incurável, embora eu esteja sem transgressão.
⁷ Que homem há como Jó, que bebe a zombaria como água?
⁸ E caminha em companhia dos que praticam a iniquidade, e anda com homens ímpios?
⁹ Porque disse: De nada aproveita ao homem o comprazer-se em Deus.
¹⁰ Portanto vós, homens de entendimento, escutai-me: Longe de Deus esteja o praticar a maldade e do Todo-Poderoso o cometer a perversidade!
¹¹ Porque, segundo a obra do homem, ele lhe paga; e faz a cada um segundo o seu caminho.
¹² Também, na verdade, Deus não procede impiamente; nem o Todo-Poderoso perverte o juízo.
¹³ Quem lhe entregou o governo da terra? E quem fez todo o mundo?
¹⁴ Se ele pusesse o seu coração contra o homem, e recolhesse para si o seu espírito e o seu fôlego,
¹⁵ Toda a carne juntamente expiraria, e o homem voltaria para o pó.
¹⁶ Se, pois, há em ti entendimento, ouve isto; inclina os ouvidos ao som da minha palavra.
¹⁷ Porventura o que odiasse o direito se firmaria? E tu condenarias aquele que é justo e poderoso?
¹⁸ Ou dir-se-á a um rei: Oh! Vil? Ou aos príncipes: Oh! Ímpios?
¹⁹ Quanto menos àquele, que não faz acepção das pessoas de príncipes, nem estima o rico mais do que o pobre; porque todos são obras de suas mãos.
²⁰ Eles num momento morrem; e até à meia-noite os povos são perturbados, e passam, e os poderosos serão tomados não por mão humana.
²¹ Porque os seus olhos estão sobre os caminhos de cada um, e ele vê todos os seus passos.
²² Não há trevas nem sombra de morte, onde se escondam os que praticam a iniquidade.
²³ Porque Deus não sobrecarrega o homem mais do que é justo, para o fazer ir a juízo diante dele.
²⁴ Quebranta aos fortes, sem que se possa inquirir, e põe outros em seu lugar.
²⁵ Ele conhece, pois, as suas obras; de noite os transtorna, e ficam moídos.
²⁶ Ele os bate como ímpios que são, à vista dos espectadores;
²⁷ Porquanto se desviaram dele, e não compreenderam nenhum de seus caminhos,
²⁸ De sorte que o clamor do pobre subisse até ele, e que ouvisse o clamor dos aflitos.
²⁹ Se ele aquietar, quem então inquietará? Se encobrir o rosto, quem então o poderá contemplar? Seja isto para com um povo, seja para com um homem só,
³⁰ Para que o homem hipócrita nunca mais reine, e não haja laços no povo.
³¹ Na verdade, quem a Deus disse: Suportei castigo, não ofenderei mais.
³² O que não vejo, ensina-me tu; se fiz alguma maldade, nunca mais a hei de fazer?
³³ Virá de ti como há de ser a recompensa, para que tu a rejeites? Faze tu, pois, e não eu, a escolha; fala logo o que sabes.
³⁴ Os homens de entendimento dirão comigo, e o homem sábio que me ouvir:
³⁵ Jó falou sem conhecimento; e às suas palavras falta prudência.
³⁶ Pai meu! Meu desejo é que Jó seja provado até ao fim, pelas suas respostas a homens malignos.
³⁷ Porque ao seu pecado acrescenta a transgressão; entre nós bate palmas, e multiplica contra Deus as suas palavras.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Eliú afirma que é impossível para o Todo-Poderoso cometer qual ato?",
                        opcoes: [
                            { numero: 1, texto: "Esquecer o nome de alguém", correta: false },
                            { numero: 2, texto: "Praticar a maldade ou perverter o juízo", correta: true },
                            { numero: 3, texto: "Criar novos animais", correta: false },
                            { numero: 4, texto: "Mudar as estações", correta: false }
                        ],
                        explicacao: "Jó 34:12 - Também, na verdade, Deus não procede impiamente; nem o Todo-Poderoso perverte o juízo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        35: {
            titulo: "A Transcendência de Deus",
            texto: ` ¹ Respondeu mais Eliú, dizendo:
² Tens por direito dizeres: Maior é a minha justiça do que a de Deus?
³ Porque disseste: De que te serviria? Que proveito tiraria mais do que do meu pecado?
⁴ Eu te darei resposta, a ti e aos teus amigos contigo.
⁵ Atenta para os céus, e vê; e contempla as mais altas nuvens, que são mais altas do que tu.
⁶ Se pecares, que efetuarás contra ele? Se as tuas transgressões se multiplicarem, que lhe farás?
⁷ Se fores justo, que lhe darás, ou que receberá ele da tua mão?
⁸ A tua impiedade faria mal a outro tal como tu; e a tua justiça aproveitaria ao filho do homem.
⁹ Por causa das muitas opressões os homens clamam por causa do braço dos grandes.
¹⁰ Porém ninguém diz: Onde está Deus que me criou, que dá salmos durante a noite;
¹¹ Que nos ensina mais do que aos animais da terra e nos faz mais sábios do que as aves dos céus?
¹² Clamam, porém ele não responde, por causa da arrogância dos maus.
¹³ Certo é que Deus não ouvirá a vaidade, nem atentará para ela o Todo-Poderoso.
¹⁴ E quanto ao que disseste, que o não verás, juízo há perante ele; por isso espera nele.
¹⁵ Mas agora, porque a sua ira ainda não se exerce, nem grandemente considera a arrogância,
¹⁶ Logo Jó em vão abre a sua boca, e sem conhecimento multiplica palavras.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual argumento Eliú usa para mostrar que o pecado ou a justiça do homem não 'afetam' a essência de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Que Deus está longe demais para ver", correta: false },
                            { numero: 2, texto: "Se pecares, que lhe farás? Se fores justo, que lhe darás?", correta: true },
                            { numero: 3, texto: "Que Deus não se importa com a moral", correta: false },
                            { numero: 4, texto: "Que os anjos escondem os pecados de Deus", correta: false }
                        ],
                        explicacao: "Jó 35:6-7 - Se pecares, que lhe farás...? Se fores justo, que lhe darás, ou que receberá ele da tua mão?",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        36: {
            titulo: "A Pedagogia do Sofrimento",
            texto: ` ¹ Prosseguiu ainda Eliú, e disse:
² Espera-me um pouco, e mostrar-te-ei que ainda há razões a favor de Deus.
³ De longe trarei o meu conhecimento; e ao meu Criador atribuirei a justiça.
⁴ Porque na verdade, as minhas palavras não serão falsas; contigo está um que tem perfeito conhecimento.
⁵ Eis que Deus é mui grande, contudo a ninguém despreza; grande é em força e sabedoria.
⁶ Ele não preserva a vida do ímpio, e faz justiça aos aflitos.
⁷ Do justo não tira os seus olhos; antes estão com os reis no trono; ali os assenta para sempre, e assim são exaltados.
⁸ E se estão presos em grilhões, amarrados com cordas de aflição,
⁹ Então lhes faz saber a obra deles, e as suas transgressões, porquanto prevaleceram nelas.
¹⁰ Abre-lhes também os seus ouvidos, para sua disciplina, e ordena-lhes que se convertam da maldade.
¹¹ Se o ouvirem, e o servirem, acabarão seus dias em bem, e os seus anos em delícias.
¹² Porém se não o ouvirem, à espada serão passados, e expirarão sem conhecimento.
¹³ E os hipócritas de coração amontoam para si a ira; e amarrando-os ele, não clamam por socorro.
¹⁴ A sua alma morre na mocidade, e a sua vida perece entre os impuros.
¹⁵ Ao aflito livra da sua aflição, e na opressão se revela aos seus ouvidos.
¹⁶ Assim também te desviará da boca da angústia para um lugar espaçoso, em que não há aperto, e as iguarias da tua mesa serão cheias de gordura.
¹⁷ Mas tu estás cheio do juízo do ímpio; o juízo e a justiça te sustentam.
¹⁸ Porquanto há furor, guarda-te de que não sejas atingido pelo castigo violento, pois nem com resgate algum te livrarias dele.
¹⁹ Estimaria ele tanto tuas riquezas? Não, nem ouro, nem todas as forças do poder.
²⁰ Não suspires pela noite, em que os povos sejam tomados do seu lugar.
²¹ Guarda-te, e não declines para a iniquidade; porquanto isso escolheste antes que a aflição.
²² Eis que Deus é excelso em seu poder; quem ensina como ele?
²³ Quem lhe prescreveu o seu caminho? Ou, quem lhe dirá: Tu cometeste maldade?
²⁴ Lembra-te de engrandecer a sua obra, que os homens contemplam.
²⁵ Todos os homens a veem, e o homem a enxerga de longe.
²⁶ Eis que Deus é grande, e nós não o compreendemos, e o número dos seus anos não se pode esquadrinhar.
²⁷ Porque faz miúdas as gotas das águas que, do seu vapor, derramam a chuva,
²⁸ A qual as nuvens destilam e gotejam sobre o homem abundantemente.
²⁹ Porventura pode alguém entender as extensões das nuvens, e os estalos da sua tenda?
³⁰ Eis que estende sobre elas a sua luz, e encobre as profundezas do mar.
³¹ Porque por estas coisas julga os povos e lhes dá mantimento em abundância.
³² Com as nuvens encobre a luz, e ordena não brilhar, interpondo a nuvem.
³³ O que nos dá a entender o seu pensamento, como também ao gado, acerca do temporal que sobe.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Segundo Eliú, o que Deus faz com os que estão presos em grilhões e amarrados com cordas de aflição?",
                        opcoes: [
                            { numero: 1, texto: "Deixa-os lá para sempre", correta: false },
                            { numero: 2, texto: "Faz-lhes saber a sua obra e abre-lhes os ouvidos para a disciplina", correta: true },
                            { numero: 3, texto: "Esquece-se deles", correta: false },
                            { numero: 4, texto: "Aumenta as suas correntes", correta: false }
                        ],
                        explicacao: "Jó 36:8-10 - E, se estão presos em grilhões... faz-lhes saber a sua obra... e abre-lhes também o ouvido para a disciplina.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        37: {
            titulo: "Deus na Tempestade",
            texto: `¹ Sobre isto também treme o meu coração, e salta do seu lugar.
² Atentamente ouvi a indignação da sua voz, e o sonido que sai da sua boca.
³ Ele o envia por debaixo de todos os céus, e a sua luz até aos confins da terra.
⁴ Depois disto ruge uma voz; ele troveja com a sua voz majestosa; e ele não os detém quando a sua voz é ouvida.
⁵ Com a sua voz troveja Deus maravilhosamente; faz grandes coisas, que nós não podemos compreender.
⁶ Porque à neve diz: Cai sobre a terra; como também à garoa e à sua forte chuva.
⁷ Ele sela as mãos de todo o homem, para que conheçam todos os homens a sua obra.
⁸ E as feras entram nos seus esconderijos e ficam nas suas cavernas.
⁹ Da recâmara do sul sai o tufão, e do norte o frio.
¹⁰ Pelo sopro de Deus se dá a geada, e as largas águas se congelam.
¹¹ Também de umidade carrega as grossas nuvens, e espalha as nuvens com a sua luz.
¹² Então elas, segundo o seu prudente conselho, se espalham em redor, para que façam tudo quanto lhes ordena sobre a superfície do mundo na terra.
¹³ Seja que por vara, ou para a sua terra, ou por misericórdia as faz vir.
¹⁴ A isto, ó Jó, inclina os teus ouvidos; para, e considera as maravilhas de Deus.
¹⁵ Porventura sabes tu como Deus as opera, e faz resplandecer a luz da sua nuvem?
¹⁶ Tens tu notícia do equilíbrio das grossas nuvens e das maravilhas daquele que é perfeito nos conhecimentos?
¹⁷ Ou de como as tuas roupas aquecem, quando do sul há calma sobre a terra?
¹⁸ Ou estendeste com ele os céus, que estão firmes como espelho fundido?
¹⁹ Ensina-nos o que lhe diremos: porque nós nada poderemos pôr em boa ordem, por causa das trevas.
²⁰ Contar-lhe-ia alguém o que tenho falado? Ou desejaria um homem que ele fosse devorado?
²¹ E agora não se pode olhar para o sol, que resplandece nas nuvens, quando o vento, tendo passado, o deixa limpo.
²² O esplendor de ouro vem do norte; pois, em Deus há uma tremenda majestade.
²³ Ao Todo-Poderoso não podemos alcançar; grande é em poder; porém a ninguém oprime em juízo e grandeza de justiça.
²⁴ Por isso o temem os homens; ele não respeita os que se julgam sábios de coração.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Eliú encerra o seu discurso pedindo que Jó considere as 'maravilhas de Deus'. A que fenômeno da natureza ele dá destaque neste capítulo?",
                        opcoes: [
                            { numero: 1, texto: "Às areias do deserto", correta: false },
                            { numero: 2, texto: "Ao trovão, ao relâmpago, à neve e à tempestade que mostram o poder de Deus", correta: true },
                            { numero: 3, texto: "Ao crescimento das árvores", correta: false },
                            { numero: 4, texto: "Ao movimento dos peixes", correta: false }
                        ],
                        explicacao: "Jó 37 descreve Deus dando ordens à neve, à chuva e fazendo o coração dos homens parar diante do Seu estrondo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/jo.js (Parte Final: Capítulos 38-42)

        38: {
            titulo: "Deus Responde a Jó",
            texto: ` ¹ Depois disto o Senhor respondeu a Jó de um redemoinho, dizendo:
² Quem é este que escurece o conselho com palavras sem conhecimento?
³ Agora cinge os teus lombos, como homem; e perguntar-te-ei, e tu me ensinarás.
⁴ Onde estavas tu, quando eu fundava a terra? Faze-mo saber, se tens inteligência.
⁵ Quem lhe pôs as medidas, se é que o sabes? Ou quem estendeu sobre ela o cordel?
⁶ Sobre que estão fundadas as suas bases, ou quem assentou a sua pedra de esquina,
⁷ Quando as estrelas da alva juntas alegremente cantavam, e todos os filhos de Deus jubilavam?
⁸ Ou quem encerrou o mar com portas, quando este rompeu e saiu da madre;
⁹ Quando eu pus as nuvens por sua vestidura, e a escuridão por faixa?
¹⁰ Quando eu lhe tracei limites, e lhe pus portas e ferrolhos,
¹¹ E disse: Até aqui virás, e não mais adiante, e aqui se parará o orgulho das tuas ondas?
¹² Ou desde os teus dias deste ordem à madrugada, ou mostraste à alva o seu lugar;
¹³ Para que pegasse nas extremidades da terra, e os ímpios fossem sacudidos dela;
¹⁴ E se transformasse como o barro sob o selo, e se pusessem como vestidos;
¹⁵ E dos ímpios se desvie a sua luz, e o braço altivo se quebrante;
¹⁶ Ou entraste tu até às origens do mar, ou passeaste no mais profundo do abismo?
¹⁷ Ou descobriram-se-te as portas da morte, ou viste as portas da sombra da morte?
¹⁸ Ou com o teu entendimento chegaste às larguras da terra? Faze-mo saber, se sabes tudo isto.
¹⁹ Onde está o caminho onde mora a luz? E, quanto às trevas, onde está o seu lugar;
²⁰ Para que as tragas aos seus limites, e para que saibas as veredas da sua casa?
²¹ Decerto tu o sabes, porque já então eras nascido, e por ser grande o número dos teus dias!
²² Ou entraste tu até aos tesouros da neve, e viste os tesouros da saraiva,
²³ Que eu retenho até ao tempo da angústia, até ao dia da peleja e da guerra?
²⁴ Onde está o caminho em que se reparte a luz, e se espalha o vento oriental sobre a terra?
²⁵ Quem abriu para a inundação um leito, e um caminho para os relâmpagos dos trovões,
²⁶ Para chover sobre a terra, onde não há ninguém, e no deserto, em que não há homem;
²⁷ Para fartar a terra deserta e assolada, e para fazer crescer os renovos da erva?
²⁸ A chuva porventura tem pai? Ou quem gerou as gotas do orvalho?
²⁹ De que ventre procedeu o gelo? E quem gerou a geada do céu?
³⁰ Como debaixo de pedra as águas se endurecem, e a superfície do abismo se congela.
³¹ Ou poderás tu ajuntar as delícias do Sete-Estrelo ou soltar os cordéis do Órion?
³² Ou produzir as constelações a seu tempo, e guiar a Ursa com seus filhos?
³³ Sabes tu as ordenanças dos céus, ou podes estabelecer o domínio deles sobre a terra?
³⁴ Ou podes levantar a tua voz até às nuvens, para que a abundância das águas te cubra?
³⁵ Ou mandarás aos raios para que saiam, e te digam: Eis-nos aqui?
³⁶ Quem pôs a sabedoria no íntimo, ou quem deu à mente o entendimento?
³⁷ Quem numerará as nuvens com sabedoria? Ou os odres dos céus, quem os esvaziará,
³⁸ Quando se funde o pó numa massa, e se apegam os torrões uns aos outros?
³⁹ Porventura caçarás tu presa para a leoa, ou saciarás a fome dos filhos dos leões,
⁴⁰ Quando se agacham nos covis, e estão à espreita nas covas?
⁴¹ Quem prepara aos corvos o seu alimento, quando os seus filhotes gritam a Deus e andam vagueando, por não terem o que comer?

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "De onde o Senhor respondeu a Jó quando finalmente começou a falar?",
                        opcoes: [
                            { numero: 1, texto: "De uma sarça ardente", correta: false },
                            { numero: 2, texto: "Do meio de um redemoinho", correta: true },
                            { numero: 3, texto: "Através de um anjo", correta: false },
                            { numero: 4, texto: "Por um sussurro suave", correta: false }
                        ],
                        explicacao: "Jó 38:1 - Depois disto o Senhor respondeu a Jó de um redemoinho, e disse...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Que pergunta Deus faz a Jó para mostrar que o homem não estava presente na criação?",
                        opcoes: [
                            { numero: 1, texto: "Onde estavas tu, quando eu fundava a terra?", correta: true },
                            { numero: 2, texto: "Por que choras tanto?", correta: false },
                            { numero: 3, texto: "Quem são os teus amigos?", correta: false },
                            { numero: 4, texto: "Onde guardaste o teu ouro?", correta: false }
                        ],
                        explicacao: "Jó 38:4 - Onde estavas tu, quando eu fundava a terra? Faze-mo saber, se tens inteligência.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        39: {
            titulo: "O Cuidado de Deus com a Natureza",
            texto: ` ¹ Sabes tu o tempo em que as cabras montesas têm filhos, ou observastes as cervas quando dão suas crias?
² Contarás os meses que cumprem, ou sabes o tempo do seu parto?
³ Quando se encurvam, produzem seus filhos, e lançam de si as suas dores.
⁴ Seus filhos enrijam, crescem com o trigo; saem, e nunca mais tornam para elas.
⁵ Quem despediu livre o jumento montês, e quem soltou as prisões ao jumento bravo,
⁶ Ao qual dei o ermo por casa, e a terra salgada por morada?
⁷ Ri-se do ruído da cidade; não ouve os muitos gritos do condutor.
⁸ A região montanhosa é o seu pasto, e anda buscando tudo que está verde.
⁹ Ou, querer-te-á servir o boi selvagem? Ou ficará no teu curral?
¹⁰ Ou com corda amarrarás, no arado, ao boi selvagem? Ou escavará ele os vales após ti?
¹¹ Ou confiarás nele, por ser grande a sua força, ou deixarás a seu cargo o teu trabalho?
¹² Ou fiarás dele que te torne o que semeaste e o recolha na tua eira?
¹³ A avestruz bate alegremente as suas asas, porém, são benignas as suas asas e penas?
¹⁴ Ela deixa os seus ovos na terra, e os aquenta no pó,
¹⁵ E se esquece de que algum pé os pode pisar, ou que os animais do campo os podem calcar.
¹⁶ Endurece-se para com seus filhos, como se não fossem seus; em vão é seu trabalho, mas ela está sem temor,
¹⁷ Porque Deus a privou de sabedoria, e não lhe deu entendimento.
¹⁸ A seu tempo se levanta ao alto; ri-se do cavalo, e do que vai montado nele.
¹⁹ Ou darás tu força ao cavalo, ou revestirás o seu pescoço com crinas?
²⁰ Ou espantá-lo-ás, como ao gafanhoto? Terrível é o fogoso respirar das suas ventas.
²¹ Escarva a terra, e folga na sua força, e sai ao encontro dos armados.
²² Ri-se do temor, e não se espanta, e não torna atrás por causa da espada.
²³ Contra ele rangem a aljava, o ferro flamante da lança e do dardo.
²⁴ Agitando-se e indignando-se, serve a terra, e não faz caso do som da trombeta.
²⁵ Ao soar das trombetas diz: Eia! E cheira de longe a guerra, e o trovão dos capitães, e o alarido.
²⁶ Ou voa o gavião pela tua inteligência, e estende as suas asas para o sul?
²⁷ Ou se remonta a águia ao teu mandado, e põe no alto o seu ninho?
²⁸ Nas penhas mora e habita; no cume das penhas, e nos lugares seguros.
²⁹ Dali descobre a presa; seus olhos a avistam de longe.
³⁰ E seus filhos chupam o sangue, e onde há mortos, ali está ela.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quais são alguns dos animais que Deus cita para mostrar a Jó que Ele cuida de criaturas que o homem não controla?",
                        opcoes: [
                            { numero: 1, texto: "Cães e gatos", correta: false },
                            { numero: 2, texto: "As cabras monteses, o unicórnio (boi selvagem), a avestruz e o cavalo", correta: true },
                            { numero: 3, texto: "Apenas as formigas", correta: false },
                            { numero: 4, texto: "Animais domésticos", correta: false }
                        ],
                        explicacao: "Jó 39 detalha instintos de animais selvagens que funcionam perfeitamente sob o comando divino, sem intervenção humana.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        40: {
            titulo: "O Beemote",
            texto: ` ¹ Respondeu mais o Senhor a Jó, dizendo:
² Porventura o contender contra o Todo-Poderoso é sabedoria? Quem repreende assim a Deus, responda por isso.
³ Então Jó respondeu ao Senhor, dizendo:
⁴ Eis que sou vil; que te responderia eu? A minha mão ponho à boca.
⁵ Uma vez tenho falado, e não replicarei; ou ainda duas vezes, porém não prosseguirei.
⁶ Então o Senhor respondeu a Jó de um redemoinho, dizendo:
⁷ Cinge agora os teus lombos como homem; eu te perguntarei, e tu me explicarás.
⁸ Porventura também tornarás tu vão o meu juízo, ou tu me condenarás, para te justificares?
⁹ Ou tens braço como Deus, ou podes trovejar com voz como ele o faz?
¹⁰ Orna-te, pois, de excelência e alteza; e veste-te de majestade e de glória.
¹¹ Derrama os furores da tua ira, e atenta para todo o soberbo, e abate-o.
¹² Olha para todo o soberbo, e humilha-o, e atropela os ímpios no seu lugar.
¹³ Esconde-os juntamente no pó; ata-lhes os rostos em oculto.
¹⁴ Então também eu a ti confessarei que a tua mão direita te poderá salvar.
¹⁵ Contemplas agora o beemote, que eu fiz contigo, que come a erva como o boi.
¹⁶ Eis que a sua força está nos seus lombos, e o seu poder nos músculos do seu ventre.
¹⁷ Quando quer, move a sua cauda como cedro; os nervos das suas coxas estão entretecidos.
¹⁸ Os seus ossos são como tubos de bronze; a sua ossada é como barras de ferro.
¹⁹ Ele é obra-prima dos caminhos de Deus; o que o fez o proveu da sua espada.
²⁰ Em verdade os montes lhe produzem pastos, onde todos os animais do campo folgam.
²¹ Deita-se debaixo das árvores sombrias, no esconderijo das canas e da lama.
²² As árvores sombrias o cobrem, com sua sombra; os salgueiros do ribeiro o cercam.
²³ Eis que um rio transborda, e ele não se apressa, confiando ainda que o Jordão se levante até à sua boca.
²⁴ Podê-lo-iam porventura caçar à vista de seus olhos, ou com laços lhe furar o nariz?

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Que criatura poderosa Deus descreve a Jó, cujos ossos são como tubos de bronze e a cauda como cedro?",
                        opcoes: [
                            { numero: 1, texto: "Um pequeno peixe", correta: false },
                            { numero: 2, texto: "O Beemote", correta: true },
                            { numero: 3, texto: "Uma águia", correta: false },
                            { numero: 4, texto: "Um gafanhoto", correta: false }
                        ],
                        explicacao: "Jó 40:15,18 - Contempla agora o beemote... Os seus ossos são como tubos de bronze...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        41: {
            titulo: "O Leviatã",
            texto: `¹ Poderás tirar com anzol o leviatã, ou ligarás a sua língua com uma corda?
² Podes pôr um anzol no seu nariz, ou com um gancho furar a sua queixada?
³ Porventura multiplicará as súplicas para contigo, ou brandamente falará?
⁴ Fará ele aliança contigo, ou o tomarás tu por servo para sempre?
⁵ Brincarás com ele, como se fora um passarinho, ou o prenderás para tuas meninas?
⁶ Os teus companheiros farão dele um banquete, ou o repartirão entre os negociantes?
⁷ Encherás a sua pele de ganchos, ou a sua cabeça com arpões de pescadores?
⁸ Põe a tua mão sobre ele, lembra-te da peleja, e nunca mais tal intentarás.
⁹ Eis que é vã a esperança de apanhá-lo; pois não será o homem derrubado só ao vê-lo?
¹⁰ Ninguém há tão atrevido, que a despertá-lo se atreva; quem, pois, é aquele que ousa erguer-se diante de mim?
¹¹ Quem primeiro me deu, para que eu haja de retribuir-lhe? Pois o que está debaixo de todos os céus é meu.
¹² Não me calarei a respeito dos seus membros, nem da sua grande força, nem a graça da sua compostura.
¹³ Quem descobrirá a face da sua roupa? Quem entrará na sua couraça dobrada?
¹⁴ Quem abrirá as portas do seu rosto? Pois ao redor dos seus dentes está o terror.
¹⁵ As suas fortes escamas são o seu orgulho, cada uma fechada como com selo apertado.
¹⁶ Uma à outra se chega tão perto, que nem o ar passa por entre elas.
¹⁷ Umas às outras se ligam; tanto aderem entre si, que não se podem separar.
¹⁸ Cada um dos seus espirros faz resplandecer a luz, e os seus olhos são como as pálpebras da alva.
¹⁹ Da sua boca saem tochas; faíscas de fogo saltam dela.
²⁰ Das suas narinas procede fumaça, como de uma panela fervente, ou de uma grande caldeira.
²¹ O seu hálito faz incender os carvões; e da sua boca sai chama.
²² No seu pescoço reside a força; diante dele até a tristeza salta de prazer.
²³ Os músculos da sua carne estão pegados entre si; cada um está firme nele, e nenhum se move.
²⁴ O seu coração é firme como uma pedra e firme como a mó de baixo.
²⁵ Levantando-se ele, tremem os valentes; em razão dos seus abalos se purificam.
²⁶ Se alguém lhe tocar com a espada, essa não poderá penetrar, nem lança, dardo ou flecha.
²⁷ Ele considera o ferro como palha, e o cobre como pau podre.
²⁸ A seta o não fará fugir; as pedras das fundas se lhe tornam em restolho.
²⁹ As pedras atiradas são para ele como arestas, e ri-se do brandir da lança;
³⁰ Debaixo de si tem conchas pontiagudas; estende-se sobre coisas pontiagudas como na lama.
³¹ As profundezas faz ferver, como uma panela; torna o mar como uma vasilha de unguento.
³² Após si deixa uma vereda luminosa; parece o abismo tornado em brancura de cabelos.
³³ Na terra não há coisa que se lhe possa comparar, pois foi feito para estar sem pavor.
³⁴ Ele vê tudo que é alto; é rei sobre todos os filhos da soberba.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Deus descreve o Leviatã para mostrar a Jó que há forças na natureza que só o Criador domina?",
                        opcoes: [
                            { numero: 1, texto: "Como um animal manso", correta: false },
                            { numero: 2, texto: "Como uma criatura de escamas impenetráveis, cujo hálito acende brasas", correta: true },
                            { numero: 3, texto: "Como uma planta marinha", correta: false },
                            { numero: 4, texto: "Como uma nuvem passageira", correta: false }
                        ],
                        explicacao: "Jó 41 descreve o Leviatã como o rei sobre todos os filhos da soberba, impossível de ser pescado ou domado pelo homem.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        42: {
            titulo: "A Confissão e Restauração de Jó",
            texto: ` ¹ Então respondeu Jó ao Senhor, dizendo:
² Bem sei eu que tudo podes, e que nenhum dos teus propósitos pode ser impedido.
³ Quem é este, que sem conhecimento encobre o conselho? Por isso relatei o que não entendia; coisas que para mim eram inescrutáveis, e que eu não entendia.
⁴ Escuta-me, pois, e eu falarei; eu te perguntarei, e tu me ensinarás.
⁵ Com o ouvir dos meus ouvidos ouvi, mas agora te veem os meus olhos.
⁶ Por isso me abomino e me arrependo no pó e na cinza.
⁷ Sucedeu que, acabando o Senhor de falar a Jó aquelas palavras, o Senhor disse a Elifaz, o temanita: A minha ira se acendeu contra ti, e contra os teus dois amigos, porque não falastes de mim o que era reto, como o meu servo Jó.
⁸ Tomai, pois, sete bezerros e sete carneiros, e ide ao meu servo Jó, e oferecei holocaustos por vós, e o meu servo Jó orará por vós; porque deveras a ele aceitarei, para que eu não vos trate conforme a vossa loucura; porque vós não falastes de mim o que era reto como o meu servo Jó.
⁹ Então foram Elifaz, o temanita, e Bildade, o suíta, e Zofar, o naamatita, e fizeram como o Senhor lhes dissera; e o Senhor aceitou a face de Jó.
¹⁰ E o Senhor virou o cativeiro de Jó, quando orava pelos seus amigos; e o Senhor acrescentou, em dobro, a tudo quanto Jó antes possuía.
¹¹ Então vieram a ele todos os seus irmãos, e todas as suas irmãs, e todos quantos dantes o conheceram, e comeram com ele pão em sua casa, e se condoeram dele, e o consolaram acerca de todo o mal que o Senhor lhe havia enviado; e cada um deles lhe deu uma peça de dinheiro, e um pendente de ouro.
¹² E assim abençoou o Senhor o último estado de Jó, mais do que o primeiro; pois teve catorze mil ovelhas, e seis mil camelos, e mil juntas de bois, e mil jumentas.
¹³ Também teve sete filhos e três filhas.
¹⁴ E chamou o nome da primeira Jemima, e o nome da segunda Quezia, e o nome da terceira Quéren-Hapuque.
¹⁵ E em toda a terra não se acharam mulheres tão formosas como as filhas de Jó; e seu pai lhes deu herança entre seus irmãos.
¹⁶ E depois disto viveu Jó cento e quarenta anos; e viu a seus filhos, e aos filhos de seus filhos, até à quarta geração.
¹⁷ Então morreu Jó, velho e farto de dias.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Jó disse após ouvir a voz de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Eu quero mais riquezas", correta: false },
                            { numero: 2, texto: "Antes eu te conhecia só de ouvir, mas agora os meus olhos te veem", correta: true },
                            { numero: 3, texto: "Ainda estou zangado", correta: false },
                            { numero: 4, texto: "Vou escrever um livro", correta: false }
                        ],
                        explicacao: "Jó 42:5 - Com o ouvir dos meus ouvidos ouvi, mas agora te veem os meus olhos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu com os bens de Jó no final da sua história?",
                        opcoes: [
                            { numero: 1, texto: "Ele continuou pobre", correta: false },
                            { numero: 2, texto: "O Senhor deu a Jó o dobro de tudo o que antes possuíra", correta: true },
                            { numero: 3, texto: "Ele dividiu o pouco que tinha", correta: false },
                            { numero: 4, texto: "Ele encontrou um tesouro enterrado", correta: false }
                        ],
                        explicacao: "Jó 42:10 - ...e o Senhor deu a Jó o dobro de tudo quanto antes possuíra.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};