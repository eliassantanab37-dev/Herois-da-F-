// js/livros/marcos.js
// ═══════════════════════════════════════════════════════════════════════════════
// LIVRO: MARCOS - O EVANGELHO DO SERVO
// ═══════════════════════════════════════════════════════════════════════════════

const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const marcos = {
    nome: "Marcos",
    icone: "📖",
    autor: "Marcos",
    background: "./imagens/marcos_bg.jpg", 

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "O Início do Ministério",
            texto: `
¹ Princípio do evangelho de Jesus Cristo, Filho de Deus.
² Como está escrito no profeta Isaías: Eis que eu envio o meu anjo ante a tua face, o qual preparará o teu caminho diante de ti.
³ Voz do que clama no deserto: Preparai o caminho do Senhor, endireitai as suas veredas.
⁴ Apareceu João batizando no deserto e pregando o batismo de arrependimento, para remissão de pecados.
⁵ E toda a província da Judeia e todos os habitantes de Jerusalém iam ter com ele; e todos eram batizados por ele no rio Jordão, confessando os seus pecados.
⁶ E João andava vestido de pelos de camelo e com um cinto de couro em redor de seus lombos, e comia gafanhotos e mel silvestre,
⁷ e pregava, dizendo: Após mim vem aquele que é mais forte do que eu, do qual não sou digno de, abaixando-me, desatar a correia das sandálias.
⁸ Eu, em verdade, tenho-vos batizado com água; ele, porém, vos batizará com o Espírito Santo.
⁹ E aconteceu, naqueles dias, que Jesus, tendo ido de Nazaré, da Galileia, foi batizado por João, no rio Jordão.
¹⁰ E, logo que saiu da água, viu os céus abertos e o Espírito, que, como pomba, descia sobre ele.
¹¹ E ouviu-se uma voz dos céus, que dizia: Tu és o meu Filho amado, em quem me comprazo.
¹² E logo o Espírito o impeliu para o deserto.
¹³ E ali esteve no deserto quarenta dias, tentado por Satanás. E vivia entre as feras, e os anjos o serviam.
¹⁴ E, depois que João foi entregue à prisão, veio Jesus para a Galileia, pregando o evangelho do Reino de Deus
¹⁵ e dizendo: O tempo está cumprido, e o Reino de Deus está próximo. Arrependei-vose crede no evangelho.
¹⁶ E, andando junto ao mar da Galileia, viu Simão e André, seu irmão, que lançavam a rede ao mar, pois eram pescadores.
¹⁷ E Jesus lhes disse: Vinde após mim, e eu farei que sejais pescadores de homens.
¹⁸ E, deixando logo as suas redes, o seguiram.
¹⁹ E, passando dali um pouco mais adiante, viu Tiago, filho de Zebedeu, e João, seu irmão, que estavam no barco consertando as redes,
²⁰ e logo os chamou. E eles, deixando o seu pai Zebedeu no barco com os empregados, foram após ele.
²¹ Entraram em Cafarnaum, e, logo no sábado, indo ele à sinagoga, ali ensinava.
²² E maravilharam-se da sua doutrina, porque os ensinava como tendo autoridade e não como os escribas.
²³ E estava na sinagoga deles um homem com um espírito imundo, o qual exclamou, dizendo:
²⁴ Ah! Que temos contigo, Jesus Nazareno? Vieste destruir-nos? Bem sei quem és: o Santo de Deus.
²⁵ E repreendeu-o Jesus, dizendo: Cala-te e sai dele.
²⁶ Então, o espírito imundo, agitando-o e clamando com grande voz, saiu dele.
²⁷ E todos se admiraram, a ponto de perguntarem entre si, dizendo: Que é isto? Que nova doutrina é esta? Pois com autoridade ordena aos espíritos imundos, e eles lhe obedecem!
²⁸ E logo correu a sua fama por toda a província da Galileia.
²⁹ E logo, saindo da sinagoga, foram à casa de Simão e de André, com Tiago e João.
³⁰ E a sogra de Simão estava deitada, com febre; e logo lhe falaram dela.
³¹ Então, chegando-se a ela, tomou-a pela mão e levantou-a; e a febre a deixou, e servia-os.
³² E, tendo chegado a tarde, quando já estava se pondo o sol, trouxeram-lhe todos os que se achavam enfermos e os endemoninhados.
³³ E toda a cidade se ajuntou à porta.
³⁴ E curou muitos que se achavam enfermos de diversas enfermidades e expulsou muitos demônios, porém não deixava falar os demônios, porque o conheciam.
³⁵ E, levantando-se de manhã muito cedo, estando ainda escuro, saiu, e foi para um lugar deserto, e ali orava.
³⁶ E seguiram-no Simão e os que com ele estavam.
³⁷ E, achando-o, lhe disseram: Todos te buscam.
³⁸ E ele lhes disse: Vamos às aldeias vizinhas, para que eu ali também pregue, porque paraisso vim.
³⁹ E pregava nas sinagogas deles, por toda a Galileia, e expulsava os demônios.
⁴⁰ E aproximou-se dele um leproso, que, rogando-lhe e pondo-se de joelhos diante dele, lhe dizia: Se queres, bem podes limpar-me.
⁴¹ E Jesus, movido de grande compaixão, estendeu a mão, e tocou-o, e disse-lhe: Quero, sê limpo!
⁴² E, tendo ele dito isso, logo a lepra desapareceu, e ficou limpo.
⁴³ E, advertindo-o severamente, logo o despediu.
⁴⁴ E disse-lhe: Olha, não digas nada a ninguém; porém vai, mostra-te ao sacerdote e oferece pela tua purificação o queMoisés determinou, para lhes servir de testemunho.
⁴⁵ Mas, tendo ele saído, começou a apregoar muitas coisas e a divulgar o que acontecera 

 `, 
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem foi o mensageiro que preparou o caminho do Senhor no deserto?",
                        opcoes: [
                            { numero: 1, texto: "Elias", correta: false },
                            { numero: 2, texto: "João Batista", correta: true },
                            { numero: 3, texto: "Isaías", correta: false },
                            { numero: 4, texto: "Pedro", correta: false }
                        ],
                        explicacao: "Marcos 1:4 - João Batista apareceu batizando no deserto e pregando o arrependimento.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu logo após o batismo de Jesus por João?",
                        opcoes: [
                            { numero: 1, texto: "O Espírito desceu como pomba sobre Ele", correta: true },
                            { numero: 2, texto: "Jesus transformou água em vinho", correta: false },
                            { numero: 3, texto: "O povo o coroou rei", correta: false },
                            { numero: 4, texto: "Ele subiu imediatamente aos céus", correta: false }
                        ],
                        explicacao: "Marcos 1:10 - Ao sair da água, viu os céus abertos e o Espírito descer sobre Ele.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual foi a primeira mensagem pregada por Jesus na Galileia?",
                        opcoes: [
                            { numero: 1, texto: "O tempo é chegado e o reino de Deus está próximo", correta: true },
                            { numero: 2, texto: "Não pequeis mais", correta: false },
                            { numero: 3, texto: "Amai os vossos inimigos", correta: false },
                            { numero: 4, texto: "Vinde a mim todos os cansados", correta: false }
                        ],
                        explicacao: "Marcos 1:15 - Jesus anunciava que o tempo estava cumprido e o Reino estava próximo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },

        2: {
            titulo: "O Paralítico e o Chamado de Levi",
            texto: `¹ E, alguns dias depois, entrou outra vez em Cafarnaum, e soube-se que estava em casa.
² E logo se ajuntaram tantos, que nem ainda nos lugares junto à porta eles cabiam; e anunciava-lhes a palavra.
³ E vieram ter com ele, conduzindo um paralítico, trazido por quatro.
⁴ E, não podendo aproximar-se dele, por causa da multidão, descobriram o telhado onde estava e, fazendo um buraco, baixaram o leito em que jazia o paralítico.
⁵ E Jesus, vendo-lhes a fé, disse ao paralítico: Filho, perdoados estão os teus pecados.
⁶ E estavam ali assentados alguns dos escribas, que arrazoavam em seu coração, dizendo:
⁷ Por que diz este assim blasfêmias? Quem pode perdoar pecados, senão Deus?
⁸ E Jesus, conhecendo logo em seu espírito que assim arrazoavam entre si, lhes disse: Por que arrazoais sobre estas coisas em vosso coração?
⁹ Qual é mais fácil?Dizer ao paralítico:Estão perdoados os teus pecados, ou dizer-lhe: Levanta-te, e toma o teu leito, e anda?
¹⁰ Ora, para que saibais que o Filho do Homem tem na terra poder para perdoar pecados (disse ao paralítico),
¹¹ a ti te digo: Levanta-te, e toma o teu leito, e vai para tua casa.
¹² E levantou-se e, tomando logo o leito, saiu em presença de todos, de sorte que todos se admiraram e glorificaram a Deus, dizendo: Nunca tal vimos.
¹³ E tornou a sair para o mar, e toda a multidão ia ter com ele, e ele os ensinava.
¹⁴ E, passando, viu Levi, filho de Alfeu, sentado na alfândega e disse-lhe: Segue-me. E, levantando-se, o seguiu.
¹⁵ E aconteceu que, estando sentado à mesa em casa deste, também estavam sentados à mesa com Jesus e com seus discípulos muitos publicanos e pecadores, porque eram muitos e o tinham seguido.
¹⁶ E os escribas e fariseus, vendo-o comer com os publicanos e pecadores, disseram aos seus discípulos: Por que come e bebe ele com os publicanos e pecadores?
¹⁷ E Jesus, tendo ouvido isso, disse-lhes: Os sãos não necessitam de médico, mas sim os que estão doentes; eu não vim chamar os justos, mas sim os pecadores.
¹⁸ Ora, os discípulos de João e os fariseus jejuavam; e foram e disseram-lhe: Por que jejuam os discípulos de João e os dos fariseus, e não jejuam os teus discípulos?
¹⁹ E Jesus disse-lhes: Podem, porventura, os filhosdas bodas jejuar, enquanto está com eles o esposo? Enquanto têm consigo o esposo, não podem jejuar.
²⁰ Mas dias virão em que lhes será tirado o esposo, e então jejuarão naqueles dias.
²¹ Ninguém costura remendo de pano novo em veste velha; porque o mesmo remendo novo rompe o velho, e a rotura fica maior.
²² E ninguém põe vinho novo em odres velhos; do contrário, o vinho novo rompe os odres, e entorna-se o vinho, e os odres estragam-se; o vinho novo deve ser posto em odres novos.
²³ E aconteceu que, passando ele num sábado pelas searas, os seus discípulos, caminhando, começaram a colher espigas.
²⁴ E os fariseus lhe disseram: Vês? Por que fazem no sábado o que não é lícito?
²⁵ Mas ele disse-lhes: Nunca lestes o que fez Davi, quando estava em necessidade e teve fome, ele e os que com ele estavam?
²⁶ Como entrou na Casa de Deus, no tempo de Abiatar, sumo sacerdote, e comeuos pães da proposição, dos quais não era lícito comer senão aos sacerdotes, dando também aos que com ele estavam?
²⁷ E disse-lhes: O sábado foi feito por causa do homem, e não o homem,  
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o paralítico foi levado até Jesus em Cafarnaum?",
                        opcoes: [
                            { numero: 1, texto: "Pela porta principal", correta: false },
                            { numero: 2, texto: "Pelo telhado, após fazerem uma abertura", correta: true },
                            { numero: 3, texto: "Através de uma janela", correta: false },
                            { numero: 4, texto: "Ele foi andando sozinho", correta: false }
                        ],
                        explicacao: "Marcos 2:4 - Devido à multidão, desceram o leito pelo telhado.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual era a profissão de Levi (Mateus) quando Jesus o chamou?",
                        opcoes: [
                            { numero: 1, texto: "Pescador", correta: false },
                            { numero: 2, texto: "Carpinteiro", correta: false },
                            { numero: 3, texto: "Publicano (Cobrador de impostos)", correta: true },
                            { numero: 4, texto: "Fariseu", correta: false }
                        ],
                        explicacao: "Marcos 2:14 - Jesus viu Levi sentado na alfândega e disse: Segue-me.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus disse sobre o Sábado?",
                        opcoes: [
                            { numero: 1, texto: "O sábado foi feito por causa do homem, e não o homem por causa do sábado", correta: true },
                            { numero: 2, texto: "O sábado não deve mais ser guardado", correta: false },
                            { numero: 3, texto: "O sábado é o dia mais importante da lei", correta: false },
                            { numero: 4, texto: "Ninguém pode comer no sábado", correta: false }
                        ],
                        explicacao: "Marcos 2:27 - Jesus ensina a finalidade correta do dia de descanso.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },

        3: {
            titulo: "Os Doze Apóstolos",
            texto: `¹ E outra vez entrou na sinagoga, e estava ali um homem que tinha uma das mãos mirrada.
² E estavam observando-o se curaria no sábado, para o acusarem.
³ E disse ao homem que tinha a mão mirrada: Levanta-te e vem para o meio.
⁴ E perguntou-lhes: É lícito no sábado fazer bem ou fazer mal? Salvar a vida ou matar? E eles calaram-se.
⁵ E, olhando para eles em redor com indignação, condoendo-se da dureza do seu coração, disse ao homem: Estende a mão. E ele a estendeu, e foi-lhe restituída a mão, sã como a outra.
⁶ E, tendo saído os fariseus, tomaram logo conselho com os herodianos contra ele, procurando ver como o matariam.
⁷ E retirou-se Jesus com os seus discípulos para o mar, e seguia-o uma grande multidão da Galileia, e da Judeia,
⁸ e de Jerusalém, e da Idumeia, e dalém do Jordão, e de perto de Tiro, e de Sidom; uma grande multidão que, ouvindo quão grandes coisas fazia, vinha ter com ele.
⁹ E ele disse aos seus discípulos que lhe tivessem sempre pronto um barquinho junto dele, por causa da multidão, para que o não comprimisse,
¹⁰ porque tinha curado a muitos, de tal maneira que todos quantos tinham algum mal se arrojavam sobre ele, para lhe tocarem.
¹¹ E os espíritos imundos, vendo-o, prostravam-se diante dele e clamavam, dizendo: Tu és o Filho de Deus.
¹² E ele os ameaçava muito, para que não o manifestassem.
¹³ E subiu ao monte e chamou para si os que ele quis; e vieram a ele.
¹⁴ E nomeou doze para que estivessem com ele e os mandasse a pregar
¹⁵ e para que tivessem o poder de curar as enfermidades e expulsar os demônios:
¹⁶ Simão, a quem pôs o nome de Pedro;
¹⁷ Tiago, filho de Zebedeu, e João, irmão de Tiago, aos quais pôs o nome de Boanerges, que significa: Filhos do trovão;
¹⁸ André, e Filipe, e Bartolomeu, e Mateus, e Tomé, e Tiago, filho de Alfeu, e Tadeu, e Simão, o Zelote,
¹⁹ e Judas Iscariotes, o que o traiu.
²⁰ E foram para uma casa. E afluiu outra vez a multidão, de tal maneira que nem sequer podiam comer pão.
²¹ E, quando os seus parentes ouviram isso, saíram para o prender, porque diziam: Está fora de si.
²² E os escribas, que tinham descido de Jerusalém, diziam: Tem Belzebu e pelo príncipe dos demônios expulsa os demônios.
²³ E, chamando-os a si, disse-lhes por parábolas: Como pode Satanás expulsar Satanás?
²⁴ Se um reino se dividir contra si mesmo, tal reino não pode subsistir;
²⁵ e se uma casa se dividir contra si mesma, tal casa não pode subsistir.
²⁶ Se Satanás se levantar contra si mesmo, e for dividido, não pode subsistir; antes, tem fim.
²⁷ Ninguémpode roubar os bens do valente, entrando-lhe em sua casa, se primeiro não manietar o valente; e, então, roubará a sua casa.
²⁸ Na verdade vos digo quetodos os pecados serão perdoados aos filhos dos homens, e toda sorte de blasfêmias, com que blasfemarem.
²⁹ Qualquer, porém, que blasfemar contra o Espírito Santo, nunca obterá perdão,mas será réu do eterno juízo.
³⁰ (Porque diziam: Tem espírito imundo.)
³¹ Chegaram, então, seus irmãos e sua mãe; e, estando de fora, mandaram-no chamar.
³² E a multidão estava assentada ao redor dele, e disseram-lhe: Eis que tua mãe e teus irmãos te procuram e estão lá fora.
³³ E ele lhes respondeu, dizendo: Quem é minha mãe e meus irmãos?
³⁴ E, olhando em redor para os que estavam assentados junto dele disse: Eis aqui minha mãe e meus irmãos. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual apelido Jesus deu aos irmãos Tiago e João?",
                        opcoes: [
                            { numero: 1, texto: "Filhos do Trovão (Boanerges)", correta: true },
                            { numero: 2, texto: "Pedras Vivas", correta: false },
                            { numero: 3, texto: "Zelotes", correta: false },
                            { numero: 4, texto: "Pastores de Ovelhas", correta: false }
                        ],
                        explicacao: "Marcos 3:17 - Jesus os chamou de Boanerges, que significa Filhos do Trovão.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que os escribas diziam sobre o poder de Jesus para expulsar demônios?",
                        opcoes: [
                            { numero: 1, texto: "Que era o poder de Deus", correta: false },
                            { numero: 2, texto: "Que Ele tinha Belzebu e expulsava pelo príncipe dos demônios", correta: true },
                            { numero: 3, texto: "Que era um truque de mágica", correta: false },
                            { numero: 4, texto: "Que os demônios saíam por medo", correta: false }
                        ],
                        explicacao: "Marcos 3:22 - Eles acusavam Jesus de estar possuído por Belzebu.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Segundo Jesus, quem são sua mãe e seus irmãos?",
                        opcoes: [
                            { numero: 1, texto: "Apenas aqueles de sangue", correta: false },
                            { numero: 2, texto: "Qualquer um que fizer a vontade de Deus", correta: true },
                            { numero: 3, texto: "Os discípulos mais velhos", correta: false },
                            { numero: 4, texto: "Os que vivem em Jerusalém", correta: false }
                        ],
                        explicacao: "Marcos 3:35 - 'Portanto, qualquer que fizer a vontade de Deus, esse é meu irmão, e minha irmã, e minha mãe'.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },

        4: {
            titulo: "Parábolas e a Tempestade",
            texto: `¹ E outra vez começou a ensinar junto ao mar, e ajuntou-se a ele grande multidão; de sorte que ele entrou e assentou-se num barco, sobre o mar; e toda a multidão estava em terra junto ao mar.
² E ensinava-lhes muitas coisas por parábolas e lhes dizia na sua doutrina:
³ Ouvi: Eis que saiu o semeador a semear.
⁴ E aconteceu que, semeando ele, uma parte da semente caiu junto ao caminho, e vieram as aves do céu e a comeram.
⁵ E outra caiu sobre pedregais, onde não havia muita terra, e nasceu logo, porque não tinha terra profunda.
⁶ Mas, saindo o sol, queimou-se e, porque não tinha raiz, secou-se.
⁷ E outra caiu entre espinhos, e, crescendo os espinhos, a sufocaram, e não deu fruto.
⁸ E outra caiu em boaterra e deu fruto, que vingou e cresceu; e um produziu trinta, outro, sessenta, e outro, cem.
⁹ E disse-lhes: Quem tem ouvidos para ouvir, que ouça.
¹⁰ E, quando se achou só, os que estavam junto dele com os doze interrogaram-no acerca da parábola.
¹¹ E ele disse-lhes: A vós vos é dado saber os mistérios do Reino de Deus, mas aos que estão de foratodas essas coisas se dizem por parábolas,
¹² para que, vendo,vejam e não percebam; e, ouvindo, ouçam e não entendam, para que se não convertam, e lhes sejam perdoados os pecados.
¹³ E disse-lhes: Não percebeis esta parábola? Como, pois, entendereis todas as parábolas?
¹⁴ O que semeiasemeia a palavra;
¹⁵ e os que estão junto ao caminho são aqueles em quem a palavra é semeada; mas, tendo eles a ouvido, vem logo Satanás e tira a palavra que foi semeada no coração deles.
¹⁶ E da mesma sorte os que recebem a semente sobre pedregais, que, ouvindo a palavra, logo com prazer a recebem;
¹⁷ mas não têm raiz em si mesmos; antes, são temporãos; depois, sobrevindo tribulação ou perseguição por causa da palavra, logo se escandalizam.
¹⁸ E os outros são os que recebem a semente entre espinhos, os quais ouvem a palavra;
¹⁹ mas os cuidados deste mundo, e os enganos dasriquezas, e as ambições de outras coisas, entrando, sufocam a palavra, e fica infrutífera.
²⁰ E os que recebem a semente em boa terra são os que ouvem a palavra, e a recebem, e dão fruto, um, a trinta, outro, a sessenta, e outro, a cem, por um.
²¹ E disse-lhes: Vem, porventura, a candeia para ser posta debaixo do cesto ou debaixo da cama? Não vem, antes, para se colocar no velador?
²² Porque nada háencoberto que não haja de ser manifesto; e nada se faz para ficar oculto, mas para ser descoberto.
²³ Se alguém tem ouvidospara ouvir, que ouça.
²⁴ E disse-lhes: Atendei ao que ides ouvir.Com a medida com que medirdes vos medirão a vós, e ser-vos-á ainda acrescentada.
²⁵ Porque ao quetem, ser-lhe-á dado; e, ao que não tem, até o que tem lhe será tirado.
²⁶ E dizia: O Reino de Deus é assim como se um homem lançasse semente à terra,
²⁷ e dormisse, e se levantasse de noite ou de dia, e a semente brotasse e crescesse, não sabendo ele como.
²⁸ Porque a terra por si mesma frutifica; primeiro, a erva, depois, a espiga, e, por último, o grão cheio na espiga.
²⁹ E, quando já o fruto se mostra, mete-lhe logo afoice, porque está chegada a ceifa.
³⁰ E dizia: A que assemelharemos o Reino de Deus? Ou com que parábola o representaremos?
³¹ É como um grão de mostarda, que, quando se semeia na terra, é a menor de todas as sementes que há na terra;
³² mas, tendo sido semeado, cresce, e faz-se a maior de todas as hortaliças, e cria grandes ramos, de tal maneira que as aves do céu podem aninhar-se debaixo da sua sombra.
³³ E com muitas parábolas tais lhes dirigia a palavra, segundo o que podiam compreender.
³⁴ E sem parábolas nunca lhes falava, porém tudo declarava em particular aos seus discípulos.
³⁵ E, naquele dia, sendo já tarde, disse-lhes: Passemos para a outra margem.
³⁶ E eles, deixando a multidão, o levaram consigo, assim como estava, no barco; e havia também com ele outros barquinhos.
³⁷ E levantou-se grande temporal de vento, e subiam as ondas por cima do barco, de maneira que já se enchia de água.
³⁸ E ele estava na popa dormindo sobre uma almofada; e despertaram-no, dizendo-lhe: Mestre, não te importa que pereçamos?
³⁹ E ele, despertando, repreendeu o vento e disse ao mar: Cala-te, aquieta-te. E o vento se aquietou, e houve grande bonança.
⁴⁰ E disse-lhes: Por que sois tão tímidos? Ainda não tendes fé?
⁴¹ E sentiram um  

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Na parábola do Semeador, o que representam os espinhos?",
                        opcoes: [
                            { numero: 1, texto: "A perseguição por causa da palavra", correta: false },
                            { numero: 2, texto: "Os cuidados do mundo e o engano das riquezas", correta: true },
                            { numero: 3, texto: "O diabo que tira a semente", correta: false },
                            { numero: 4, texto: "A falta de raízes", correta: false }
                        ],
                        explicacao: "Marcos 4:19 - As preocupações deste mundo sufocam a palavra e ela fica infrutífera.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Com o que Jesus comparou o Reino de Deus em relação ao seu crescimento?",
                        opcoes: [
                            { numero: 1, texto: "Com um grão de mostarda", correta: true },
                            { numero: 2, texto: "Com uma grande rocha", correta: false },
                            { numero: 3, texto: "Com um exército marchando", correta: false },
                            { numero: 4, texto: "Com uma rede de pesca", correta: false }
                        ],
                        explicacao: "Marcos 4:31 - É como o grão de mostarda, a menor das sementes, mas que cresce muito.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus disse ao mar para que a tempestade cessasse?",
                        opcoes: [
                            { numero: 1, texto: "Cala-te, emudece", correta: true },
                            { numero: 2, texto: "Parai agora", correta: false },
                            { numero: 3, texto: "Eu sou o Senhor", correta: false },
                            { numero: 4, texto: "Onde está a vossa fé?", correta: false }
                        ],
                        explicacao: "Marcos 4:39 - Ele repreendeu o vento e disse ao mar: Cala-te, emudece.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },

        5: {
            titulo: "O Gadareno e a Filha de Jairo",
            texto: ` ¹ E chegaram à outra margem do mar, à província dos gadarenos.
² E, saindo ele do barco, lhe saiu logo ao seu encontro, dos sepulcros, um homem com espírito imundo,
³ o qual tinha a sua morada nos sepulcros, e nem ainda com cadeias o podia alguém prender.
⁴ Porque, tendo sido muitas vezes preso com grilhões e cadeias, as cadeias foram por ele feitas em pedaços, e os grilhões, em migalhas, e ninguém o podia amansar.
⁵ E andava sempre, de dia e de noite, clamando pelos montes e pelos sepulcros e ferindo-se com pedras.
⁶ E, quando viu Jesus ao longe, correu e adorou-o.
⁷ E, clamando com grande voz, disse: Que tenho eu contigo, Jesus, Filho do Deus Altíssimo? Conjuro-te por Deus que não me atormentes.
⁸ (Porque lhe dizia: Sai deste homem, espírito imundo.)
⁹ E perguntou-lhe: Qual é o teu nome? E lhe respondeu, dizendo: Legião é o meu nome, porque somos muitos.
¹⁰ E rogava-lhe muito que os não enviasse para fora daquela província.
¹¹ E andava ali pastando no monte uma grande manada de porcos.
¹² E todos aqueles demônios lhe rogaram, dizendo: Manda-nos para aqueles porcos, para que entremos neles.
¹³ E Jesus logo lho permitiu. E, saindo aqueles espíritos imundos, entraram nos porcos; e a manada se precipitou por um despenhadeiro no mar (eram quase dois mil) e afogou-se no mar.
¹⁴ E os que apascentavam os porcos fugiram e o anunciaram na cidade e nos campos; e saíram muitos a ver o que era aquilo que tinha acontecido.
¹⁵ E foram ter com Jesus, e viram o endemoninhado, o que tivera a legião, assentado, vestido e em perfeito juízo, e temeram.
¹⁶ E os que aquilo tinham visto contaram-lhes o que acontecera ao endemoninhado e acerca dos porcos.
¹⁷ E começaram a rogar-lhe que saísse do seu território.
¹⁸ E, entrando ele no barco, rogava-lhe o que fora endemoninhado que o deixasse estar com ele.
¹⁹ Jesus, porém, não lho permitiu, mas disse-lhe: Vai para tua casa, para os teus, e anuncia-lhes quão grandes coisas o Senhor te fez e como teve misericórdia de ti.
²⁰ E ele foi e começou a anunciar em Decápolis quão grandes coisas Jesus lhe fizera; e todos se maravilhavam.
²¹ E, passando Jesus outra vez num barco para o outro lado, ajuntou-se a ele uma grande multidão; e ele estava junto do mar.
²² E eis que chegou um dos principais da sinagoga, por nome Jairo, e, vendo-o, prostrou-se aos seus pés
²³ e rogava-lhe muito, dizendo: Minha filha está moribunda; rogo-te que venhas e lhe imponhas as mãos para que sare e viva.
²⁴ E foi com ele, e seguia-o uma grande multidão, que o apertava.
²⁵ E certa mulher, que havia doze anos tinha um fluxo de sangue,
²⁶ e que havia padecido muito com muitos médicos, e despendido tudo quanto tinha, nada lhe aproveitando isso, antes indo a pior,
²⁷ ouvindo falar de Jesus, veio por detrás, entre a multidão, e tocou na sua vestimenta.
²⁸ Porque dizia: Se tão somente tocar nas suas vestes, sararei.
²⁹ E logo se lhe secou a fonte do seu sangue, e sentiu no seu corpo estar já curada daquele mal.
³⁰ E logo Jesus, conhecendo que a virtude de si mesmo saíra, voltou-se para a multidão e disse: Quem tocou nas minhas vestes?
³¹ E disseram-lhe os seus discípulos: Vês que a multidão te aperta, e dizes: Quem me tocou?
³² E ele olhava em redor, para ver a que isso fizera.
³³ Então, a mulher, que sabia o que lhe tinha acontecido, temendo e tremendo, aproximou-se, e prostrou-se diante dele, e disse-lhe toda a verdade.
³⁴ E ele lhe disse: Filha, a tua fé te salvou; vai em paz e sê curada deste teu mal.
³⁵ Estando ele ainda falando, chegaram alguns do principal da sinagoga, a quem disseram: A tua filha está morta; para que enfadas mais o Mestre?
³⁶ E Jesus, tendo ouvido essas palavras, disse ao principal da sinagoga: Não temas, crê somente.
³⁷ E não permitiu que alguém o seguisse, a não ser Pedro, e Tiago, e João, irmão de Tiago.
³⁸ E, tendo chegado à casa do principal da sinagoga, viu o alvoroço e os que choravam muito e pranteavam.
³⁹ E, entrando, disse-lhes: Por que vos alvoroçais e chorais? A menina não está morta,mas dorme.
⁴⁰ E riam-se dele; porém ele, tendo-os feito sair, tomou consigo o pai e a mãe da menina e os que com ele estavam e entrou onde a menina estava deitada.
⁴¹ E, tomando a mão da menina, disse-lhe: Talitá cumi, que, traduzido, é: Menina, a ti te digo: levanta-te.
⁴² E logo a menina se levantou e andava, pois já tinha doze anos; e assombraram-se com grande espanto.  

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era o nome do espírito imundo que habitava no homem de Gadara?",
                        opcoes: [
                            { numero: 1, texto: "Legião, porque somos muitos", correta: true },
                            { numero: 2, texto: "Belzebu", correta: false },
                            { numero: 3, texto: "Destruidor", correta: false },
                            { numero: 4, texto: "Satanás", correta: false }
                        ],
                        explicacao: "Marcos 5:9 - O homem respondeu que seu nome era Legião.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu quando a mulher com fluxo de sangue tocou nas vestes de Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Jesus ficou bravo com ela", correta: false },
                            { numero: 2, texto: "Logo se lhe estancou a fonte do sangue", correta: true },
                            { numero: 3, texto: "Nada aconteceu no momento", correta: false },
                            { numero: 4, texto: "As vestes de Jesus brilharam", correta: false }
                        ],
                        explicacao: "Marcos 5:29 - No mesmo instante ela sentiu que estava curada do seu mal.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus disse à filha de Jairo para que ela revivesse?",
                        opcoes: [
                            { numero: 1, texto: "Menina, eu te mando, levanta-te", correta: false },
                            { numero: 2, texto: "Talita cumi", correta: true },
                            { numero: 3, texto: "Acorda, jovem", correta: false },
                            { numero: 4, texto: "A paz seja contigo", correta: false }
                        ],
                        explicacao: "Marcos 5:41 - Talita cumi significa: Menina, a ti te digo, levanta-te.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },

        6: {
            titulo: "Missão dos Doze e a Morte de João",
            texto: `¹ E, partindo dali, chegou à sua terra, e os seus discípulos o seguiram.
² E, chegando o sábado, começou a ensinar na sinagoga; e muitos, ouvindo-o, se admiravam, dizendo: De onde lhe vêm essas coisas? E que sabedoria é esta que lhe foi dada? E como se fazem tais maravilhas por suas mãos?
³ Não é este o carpinteiro, filho de Maria e irmão de Tiago, e de José, e de Judas, e de Simão? E não estão aqui conosco suas irmãs? E escandalizavam-se nele.
⁴ E Jesus lhes dizia: Não há profeta sem honra, senão na sua terra, entre os seus parentes e na sua casa.
⁵ E não podia fazer ali obras maravilhosas; somente curou alguns poucos enfermos, impondo-lhes as mãos.
⁶ E estava admirado da incredulidade deles. E percorreu as aldeias vizinhas, ensinando.
⁷ Chamou a si os doze, e começou a enviá-los de dois a dois, e deu-lhes poder sobre os espíritos imundos,
⁸ e ordenou-lhes que nada tomassem para o caminho, senão um bordão; nem alforje, nem pão, nem dinheiro no cinto;
⁹ mas que calçassem sandálias e que não vestissem duas túnicas.
¹⁰ E dizia-lhes: Na casaem que entrardes, ficai nela até partirdes dali.
¹¹ E, quandoalguns vos não receberem, nem vos ouvirem, saindo dali, sacudi o pó que estiver debaixo dosvossos pés, em testemunho contra eles. Em verdade vos digo que haverá mais tolerância no Dia do Juízo para Sodoma e Gomorra do que para os daquela cidade.
¹² E, saindo eles, pregavam ao povo que se arrependesse.
¹³ E expulsavam muitos demônios, e ungiam muitos enfermos com óleo, e os curavam.
¹⁴ E ouviu isso o rei Herodes (porque o nome de Jesus se tornara notório) e disse: João, o que batizava, ressuscitou dos mortos, e por isso estas maravilhas operam nele.
¹⁵ Outros diziam: É Elias. E diziam outros: É um profeta ou como um dos profetas.
¹⁶ Herodes, porém, ouvindo isso, disse: Este é João, que mandei degolar; ressuscitou dos mortos.
¹⁷ Porquanto o mesmo Herodes mandara prender a João e encerrá-lo manietado no cárcere, por causa de Herodias, mulher de Filipe, seu irmão, porquanto tinha casado com ela.
¹⁸ Pois João dizia a Herodes: Não te é lícito possuir a mulher de teu irmão.
¹⁹ E Herodias o espiava e queria matá-lo, mas não podia;
²⁰ porque Herodes temia a João, sabendo que era varão justo e santo; e guardava-o com segurança e fazia muitas coisas, atendendo-o, e de boa vontade o ouvia.
²¹ E, chegando uma ocasião favorável em que Herodes, no dia do seu aniversário, dava uma ceia aos grandes, e tribunos, e príncipes da Galileia,
²² entrou a filha da mesma Herodias, e dançou, e agradou a Herodes e aos que estavam com ele à mesa. Disse, então, o rei à jovem: Pede-me o que quiseres, e eu to darei.
²³ E jurou-lhe, dizendo: Tudo o que me pedires te darei, até metade do meu reino.
²⁴ E, saindo ela, perguntou à sua mãe: Que pedirei? E ela disse: A cabeça de João Batista.
²⁵ E, entrando apressadamente, pediu ao rei, dizendo: Quero que, imediatamente, me dês num prato a cabeça de João Batista.
²⁶ E o rei entristeceu-se muito; todavia, por causa do juramento e dos que estavam com ele à mesa, não lha quis negar.
²⁷ E, enviando logo o rei o executor, mandou que lhe trouxessem ali a cabeça de João. E ele foi e degolou-o na prisão.
²⁸ E trouxe a cabeça num prato e deu-a à jovem, e esta a deu à sua mãe.
²⁹ E os seus discípulos, tendo ouvido isso, foram, tomaram o seu corpo e o puseram num sepulcro.
³⁰ E os apóstolos ajuntaram-se a Jesus e contaram-lhe tudo, tanto o que tinham feito como o que tinham ensinado.
³¹ E ele disse-lhes: Vinde vós, aqui à parte, a um lugar deserto, e repousai um pouco. Porque havia muitos que iam, e vinham, e não tinham tempo para comer.
³² E foram sós num barco para um lugar deserto.
³³ E a multidão viu-os partir, e muitos os conheceram, e correram para lá, a pé, de todas as cidades, e ali chegaram primeiro do que eles, e aproximavam-se deles.
³⁴ E Jesus, saindo, viu uma grande multidão, e teve compaixão deles, porque eram como ovelhas que não têm pastor; e começou a ensinar-lhes muitas coisas.
³⁵ E, como o dia fosse já muito adiantado, os seus discípulos se aproximaram dele e lhe disseram: O lugar é deserto, e o dia está já muito adiantado;
³⁶ despede-os, para que vão aos campos e aldeias circunvizinhas e comprem pão para si, porque não têm o que comer.
³⁷ Ele, porém, respondendo, lhes disse: Dai-lhes vós de comer. E eles disseram-lhe: Iremos nós e compraremos duzentos dinheiros de pão para lhes darmos de comer?
³⁸ E ele disse-lhes: Quantos pães tendes? Ide ver. E, sabendo-o eles, disseram: Cinco pães e dois peixes.
³⁹ E ordenou-lhes que fizessem assentar a todos, em grupos, sobre a erva verde.
⁴⁰ E assentaram-se repartidos de cem em cem e de cinquenta em cinquenta.
⁴¹ E, tomando ele os cinco pães e os dois peixes, levantou os olhos ao céu, e abençoou, e partiu os pães, e deu-os aos seus discípulos para que os pusessem diante deles. E repartiu os dois peixes por todos.
⁴² E todos comeram e ficaram fartos,
⁴³ e levantaram doze cestos cheios de pedaços de pão e de peixe.
⁴⁴ E os que comeram os pães eram quase cinco mil homens.
⁴⁵ E logo obrigou os seus discípulos a subir para o barco, e passar adiante, para o outro lado, a Betsaida, enquanto ele despedia a multidão.
⁴⁶ E, tendo-os despedido, foi ao monte para orar.
⁴⁷ E, sobrevindo a tarde, estava o barco no meio do mar, e ele, sozinho em terra.
⁴⁸ E, vendo que se fatigavam a remar, porque o vento lhes era contrário, perto da quarta vigília da noite, aproximou-se deles, andando sobre o mar, e queria passar adiante deles,
⁴⁹ mas, quando eles o viram andar sobre o mar, pensaram que era um fantasma e deram grandes gritos.
⁵⁰ Porque todos o viram e perturbaram-se; mas logo falou com eles e disse-lhes: Tende bom ânimo, sou eu; não temais.
⁵¹ E subiu para o barco para estar com eles, e o vento se aquietou; e, entre si, ficaram muito assombrados e maravilhados,
⁵² pois não tinham compreendido o milagre dos pães; antes, o seu coração estava endurecido.
⁵³ E, quando já estavam no outro lado, dirigiram-se à terra de Genesaré e ali atracaram.
⁵⁴ E, saindo eles do barco, logo o reconheceram;
⁵⁵ e, percorrendo toda a terra em redor, começaram a trazer em leitos, onde quer que sabiam que ele estava, os que se achavam enfermos.
⁵⁶ E, onde quer que entrava, ou em cidade, ou em aldeias, ou no campo, apresentavam os enfermos  

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Jesus enviou os doze discípulos para pregar?",
                        opcoes: [
                            { numero: 1, texto: "Individualmente", correta: false },
                            { numero: 2, texto: "De dois em dois", correta: true },
                            { numero: 3, texto: "Todos em um único grupo", correta: false },
                            { numero: 4, texto: "Apenas os três mais próximos", correta: false }
                        ],
                        explicacao: "Marcos 6:7 - Chamou os doze e começou a enviá-los de dois em dois.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem ordenou a decapitação de João Batista?",
                        opcoes: [
                            { numero: 1, texto: "Pilatos", correta: false },
                            { numero: 2, texto: "Herodes, por causa de um juramento", correta: true },
                            { numero: 3, texto: "César", correta: false },
                            { numero: 4, texto: "Caifás", correta: false }
                        ],
                        explicacao: "Marcos 6:26-27 - O rei Herodes, entristecido mas fiel ao juramento, mandou degolá-lo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quantos pães e peixes Jesus usou para alimentar os cinco mil?",
                        opcoes: [
                            { numero: 1, texto: "Cinco pães e dois peixes", correta: true },
                            { numero: 2, texto: "Dois pães e cinco peixes", correta: false },
                            { numero: 3, texto: "Sete pães e alguns peixinhos", correta: false },
                            { numero: 4, texto: "Doze pães", correta: false }
                        ],
                        explicacao: "Marcos 6:38 - Eles tinham cinco pães e dois peixes.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },

        7: {
            titulo: "Tradições e a Fé da Siro-fenícia",
            texto: `¹ E reuniram-se em volta dele os fariseus e alguns dos escribas que tinham vindo de Jerusalém.
² E, vendo que alguns dos seus discípulos comiam pão com as mãos impuras, isto é, por lavar, os repreendiam.
³ Porque os fariseus e todos os judeus, conservando a tradição dos antigos, não comem sem lavar as mãos muitas vezes;
⁴ e, quando voltam do mercado, se não se lavarem, não comem. E muitas outras coisas há que receberam para observar, como lavar os copos, e os jarros, e os vasos de metal, e as camas.
⁵ Depois, perguntaram-lhe os fariseus e os escribas: Por que não andam os teus discípulos conforme a tradição dos antigos, mas comem com as mãos por lavar?
⁶ E ele, respondendo, disse-lhes: Bem profetizou Isaías acerca de vós, hipócritas, como está escrito:Este povo honra-me com os lábios, mas o seu coração está longe de mim.
⁷ Em vão, porém,me honram, ensinando doutrinas que são mandamentos de homens.
⁸ Porque, deixando o mandamento de Deus, retendes a tradição dos homens, como o lavar dos jarros e dos copos, e fazeis muitas outras coisas semelhantes a estas.
⁹ E dizia-lhes: Bem invalidais o mandamento de Deus para guardardes a vossa tradição.
¹⁰ Porque Moisés disse: Honraa teu pai e a tua mãe e: Quem maldisser ou o pai ou a mãe deve ser punido com a morte.
¹¹ Porém vós dizeis: Se um homem disser ao pai ou à mãe: Aquilo que poderias aproveitar de mim é Corbã,isto é, oferta ao Senhor,
¹² nada mais lhe deixais fazer por seu pai ou por sua mãe,
¹³ invalidando, assim, a palavra de Deus pela vossa tradição, que vós ordenastes. E muitas coisas fazeis semelhantes a estas.
¹⁴ E, chamando outra vez a multidão, disse-lhes: Ouvi-me, vós todos, e compreendei.
¹⁵ Nada há, fora do homem, que, entrando nele, o possa contaminar; mas o que sai dele, isso é que contamina o homem.
¹⁶ Se alguémtem ouvidos para ouvir, que ouça.
¹⁷ Depois, quando deixou a multidão e entrou em casa, os seus discípulos o interrogavam acerca desta parábola.
¹⁸ E ele disse-lhes: Assim também vós estais sem entendimento? Não compreendeis que tudo o que de fora entra no homem não o pode contaminar,
¹⁹ porque não entra no seu coração, mas no ventre e é lançado fora, ficando puras todas as comidas?
²⁰ E dizia: O que sai do homem, isso é que contamina o homem.
²¹ Porquedo interior do coração dos homens saem os maus pensamentos, os adultérios, as prostituições, os homicídios,
²² os furtos, a avareza, as maldades, o engano, a dissolução, a inveja, a blasfêmia, a soberba, a loucura.
²³ Todos estes males procedem de dentro e contaminam o homem.
²⁴ E, levantando-se dali, foi para os territórios de Tiro e de Sidom. E, entrando numa casa, queria que ninguém o soubesse, mas não pôde esconder-se,
²⁵ porque uma mulher cuja filha tinha um espírito imundo, ouvindo falar dele, foi e lançou-se aos seus pés.
²⁶ E a mulher era grega, siro-fenícia de nação, e rogava-lhe que expulsasse de sua filha o demônio.
²⁷ Mas Jesus disse-lhe: Deixa primeiro saciar os filhos, porque não convém tomar o pão dos filhos e lançá-lo aos cachorrinhos.
²⁸ Ela, porém, respondeu e disse-lhe: Sim, Senhor; mas também os cachorrinhos comem, debaixo da mesa, as migalhas dos filhos.
²⁹ Então, ele disse-lhe: Por essa palavra, vai; o demônio já saiu de tua filha.
³⁰ E, indo ela para sua casa, achou a filha deitada sobre a cama, pois o demônio já tinha saído.
³¹ E ele, tornando a sair dos territórios de Tiro e de Sidom, foi até ao mar da Galileia, pelos confins de Decápolis.
³² E trouxeram-lhe um surdo, que falava dificilmente, e rogaram-lhe que impusesse as mãos sobre ele.
³³ E, tirando-o à parte de entre a multidão, pôs-lhe os dedos nos ouvidos e, cuspindo, tocou-lhe na língua.
³⁴ E, levantando os olhos ao céu, suspirou e disse: Efatá, isto é, abre-te.
³⁵ E logo se lhe abriram os ouvidos, e a prisão da língua se desfez, e falava perfeitamente.
³⁶ E ordenou-lhes que a ninguém o dissessem; mas, quanto mais lho proibia, tanto mais o divulgavam.
³⁷ E, admirando-se sobremaneira 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Segundo Jesus, o que realmente contamina o homem?",
                        opcoes: [
                            { numero: 1, texto: "Comer sem lavar as mãos", correta: false },
                            { numero: 2, texto: "O que sai de dentro do coração", correta: true },
                            { numero: 3, texto: "Comer carne de porco", correta: false },
                            { numero: 4, texto: "Falar com estrangeiros", correta: false }
                        ],
                        explicacao: "Marcos 7:21 - Do interior do coração dos homens saem os maus pensamentos que contaminam.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A qual povo pertencia a mulher que pediu a cura de sua filha?",
                        opcoes: [
                            { numero: 1, texto: "Samaritana", correta: false },
                            { numero: 2, texto: "Grega, de nação siro-fenícia", correta: true },
                            { numero: 3, texto: "Romana", correta: false },
                            { numero: 4, texto: "Egípcia", correta: false }
                        ],
                        explicacao: "Marcos 7:26 - A mulher era grega, de origem siro-fenícia.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual palavra Jesus usou para abrir os ouvidos do surdo e gago?",
                        opcoes: [
                            { numero: 1, texto: "Abra-te", correta: false },
                            { numero: 2, texto: "Effatà", correta: true },
                            { numero: 3, texto: "Escuta", correta: false },
                            { numero: 4, texto: "Talita", correta: false }
                        ],
                        explicacao: "Marcos 7:34 - Jesus olhou para o céu e disse: Effatà, que quer dizer: Abre-te.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },

        8: {
            titulo: "A Confissão de Pedro",
            texto: ` ¹ Naqueles dias, havendo mui grande multidão e não tendo o que comer, Jesus chamou a si os seus discípulos e disse-lhes:
² Tenho compaixão da multidão, porque há já três dias que estão comigo  

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quantos cestos de pedaços sobraram após a alimentação dos quatro mil?",
                        opcoes: [
                            { numero: 1, texto: "Doze cestos", correta: false },
                            { numero: 2, texto: "Sete cestos", correta: true },
                            { numero: 3, texto: "Três cestos", correta: false },
                            { numero: 4, texto: "Nenhum", correta: false }
                        ],
                        explicacao: "Marcos 8:8 - Comeram e saciaram-se; e dos pedaços que sobraram levantaram sete cestos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual foi a resposta de Pedro à pergunta: 'E vós, quem dizeis que eu sou?'",
                        opcoes: [
                            { numero: 1, texto: "Tu és um profeta", correta: false },
                            { numero: 2, texto: "Tu és o Cristo", correta: true },
                            { numero: 3, texto: "Tu és João Batista", correta: false },
                            { numero: 4, texto: "Tu és o Filho de Davi", correta: false }
                        ],
                        explicacao: "Marcos 8:29 - Pedro, respondendo, lhe disse: Tu és o Cristo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o homem deve fazer se quiser seguir a Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Negue-se a si mesmo, tome a sua cruz e siga-me", correta: true },
                            { numero: 2, texto: "Abandone sua família para sempre", correta: false },
                            { numero: 3, texto: "Torne-se um mestre da lei", correta: false },
                            { numero: 4, texto: "Vá morar no deserto", correta: false }
                        ],
                        explicacao: "Marcos 8:34 - O chamado para o discipulado exige autonegação e carregar a cruz.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },

        9: {
            titulo: "A Transfiguração",
            texto: `¹ Dizia-lhes também: Em verdade vos digo que, dos que aqui estão, alguns há que não provarão a morte sem que vejam chegadoo Reino de Deus com poder.
² E, seis dias depois, Jesus tomou consigo a Pedro, a Tiago e a João, e os levou sós, em particular, a um alto monte, e transfigurou-se diante deles.
³ E as suas vestes tornaram-se resplandecentes, em extremo brancas como a neve, tais como nenhum lavadeiro sobre a terra as poderia branquear.
⁴ E apareceram-lhes Elias e Moisés e falavam com Jesus.
⁵ E Pedro, tomando a palavra, disse a Jesus: Mestre, bom é que nós estejamos aqui e façamos três cabanas, uma para ti, outra para Moisés e outra para Elias.
⁶ Pois não sabia o que dizia, porque estavam assombrados.
⁷ E desceu uma nuvem que os cobriu com a sua sombra, e saiu da nuvem uma voz, que dizia: Este é o meu Filho amado; a ele ouvi.
⁸ E, tendo olhado ao redor, ninguém mais viram, senão Jesus com eles.
⁹ E, descendo eles do monte, ordenou-lhes que a ninguém contassem o que tinham visto, até que o Filho do Homem ressuscitasse dos mortos.
¹⁰ E eles retiveram o caso entre si, perguntando uns aos outros que seria aquilo, ressuscitar dos mortos.
¹¹ E interrogaram-no, dizendo: Por que dizem os escribas que é necessário que Elias venha primeiro?
¹² E, respondendo ele, disse-lhes: Em verdade Elias virá primeiro e todas as coisas restaurará;e, como está escrito do Filho do Homem, que ele deva padecer muito e ser aviltado.
¹³ Digo-vos, porém,que Elias já veio, e fizeram-lhe tudo o que quiseram, como dele está escrito.
¹⁴ E, quando se aproximou dos discípulos, viu ao redor deles grande multidão e alguns escribas que disputavam com eles.
¹⁵ E logo toda a multidão, vendo-o, ficou espantada, e, correndo para ele, o saudaram.
¹⁶ E perguntou aos escribas: Que é que discutis com eles?
¹⁷ E um da multidão, respondendo, disse: Mestre, trouxe-te o meu filho, que tem um espírito mudo;
¹⁸ e este, onde quer que o apanha, despedaça-o, e ele espuma, e range os dentes, e vai-se secando; e eu disse aos teus discípulos que o expulsassem, e não puderam.
¹⁹ E ele, respondendo-lhes, disse: Ó geração incrédula! Até quando estarei convosco? Até quando vos sofrerei ainda? Trazei-mo.
²⁰ E trouxeram-lho; e, quando ele o viu, logo o espírito o agitou com violência; e, caindo o endemoninhado por terra, revolvia-se, espumando.
²¹ E perguntou ao pai dele: Quanto tempo há que lhe sucede isto? E ele disse-lhe: Desde a infância.
²² E muitas vezes o tem lançado no fogo e na água, para o destruir; mas, se tu podes fazer alguma coisa, tem compaixão de nós e ajuda-nos.
²³ E Jesus disse-lhe: Se tu podes crer; tudo é possível ao que crê.
²⁴ E logo o pai do menino, clamando, com lágrimas, disse: Eu creio, Senhor! Ajuda a minha incredulidade.
²⁵ E Jesus, vendo que a multidão concorria, repreendeu o espírito imundo, dizendo-lhe: Espírito mudo e surdo, eu te ordeno: sai dele e não entres mais nele.
²⁶ E ele, clamando e agitando-o com violência, saiu; e ficou o menino como morto, de tal maneira que muitos diziam que estava morto.
²⁷ Mas Jesus, tomando-o pela mão, o ergueu, e ele se levantou.
²⁸ E, quando entrou em casa, os seus discípulos lhe perguntaram à parte: Por que o não pudemos nós expulsar?
²⁹ E disse-lhes: Esta casta não pode sair com coisa alguma, a não ser com oração e jejum.
³⁰ E, tendo partido dali, caminharam pela Galileia, e não queria que alguém o soubesse,
³¹ porque ensinava os seus discípulos e lhes dizia: O Filho do Homem será entregue nas mãos dos homens e matá-lo-ão; e, morto, ele ressuscitará ao terceiro dia.
³² Mas eles não entendiam esta palavra e receavam interrogá-lo.
³³ E chegou a Cafarnaum e, entrando em casa, perguntou-lhes: Que estáveis vós discutindo pelo caminho?
³⁴ Mas eles calaram-se, porque, pelo caminho, tinham disputado entre si qual era o maior.
³⁵ E ele, assentando-se, chamou os doze e disse-lhes: Se alguém quiser ser o primeiro, será o derradeiro de todos e o servo de todos.
³⁶ E, lançando mão de uma criança, pô-la no meio deles e, tomando-a nos seus braços, disse-lhes:
³⁷ Qualquer que receber uma destas crianças em meu nomea mim me recebe; e qualquer que a mim me receber recebe não a mim, mas ao que me enviou.
³⁸ E João lhe respondeu, dizendo: Mestre, vimos um que, em teu nome, expulsava demônios, o qual não nos segue; e nós lho proibimos, porque não nos segue.
³⁹ Jesus, porém, disse: Não lho proibais, porque ninguém háque faça milagre em meu nome e possa logo falar mal de mim.
⁴⁰ Porque quem não écontra nós é por nós.
⁴¹ Porquanto qualquer que vos dera beber um copo de água em meu nome, porque sois discípulos de Cristo, em verdade vos digo que não perderá o seu galardão.
⁴² E qualquer queescandalizar um destes pequeninos que creem em mim, melhor lhe fora que lhe pusessem ao pescoço uma grande pedra de moinho e que fosse lançado no mar.
⁴³ E, se a tua mão teescandalizar, corta-a; melhor é para ti entrares na vida aleijado do que, tendo duas mãos, ires para o inferno, para o fogo que nunca se apaga,
⁴⁴ onde o seu bichonão morre, e o fogo nunca se apaga.
⁴⁵ E, se o teu pé te escandalizar, corta-o; melhor é para ti entrares coxo na vida do que, tendo dois pés, seres lançado no inferno, no fogo que nunca se apaga,
⁴⁶ onde o seu bicho não morre, e o fogo nunca se apaga.
⁴⁷ E, se o teu olho te escandalizar, lança-o fora; melhor é para ti entrares no Reino de Deus com um só olho do que, tendo dois olhos, ser lançado no fogo do inferno,
⁴⁸ onde o seu bicho não morre, e o fogo nunca se apaga.
⁴⁹ Porque cada um serásalgado com fogo, e cada sacrifício será salgado com sal.
⁵⁰ Bom é o sal,mas, se o sal se  

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quais profetas apareceram ao lado de Jesus na Transfiguração?",
                        opcoes: [
                            { numero: 1, texto: "Moisés e Elias", correta: true },
                            { numero: 2, texto: "Abraão e Isaque", correta: false },
                            { numero: 3, texto: "Davi e Salomão", correta: false },
                            { numero: 4, texto: "Isaías e Jeremias", correta: false }
                        ],
                        explicacao: "Marcos 9:4 - Apareceu-lhes Elias com Moisés, e falavam com Jesus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual foi a súplica do pai do menino possuído por um espírito mudo?",
                        opcoes: [
                            { numero: 1, texto: "Eu creio, Senhor! ajuda a minha incredulidade", correta: true },
                            { numero: 2, texto: "Cura-o se fores capaz", correta: false },
                            { numero: 3, texto: "Ele é meu único filho", correta: false },
                            { numero: 4, texto: "Mestre, tem piedade de nós", correta: false }
                        ],
                        explicacao: "Marcos 9:24 - O pai exclamou com lágrimas que cria, mas precisava de ajuda em sua fé.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem é considerado o maior no Reino de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Aquele que for o último e servo de todos", correta: true },
                            { numero: 2, texto: "Aquele que tiver mais conhecimento", correta: false },
                            { numero: 3, texto: "O que orar mais tempo", correta: false },
                            { numero: 4, texto: "O mais velho do grupo", correta: false }
                        ],
                        explicacao: "Marcos 9:35 - 'Se alguém quiser ser o primeiro, será o derradeiro de todos e o servo de todos'.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },

        10: {
            titulo: "O Jovem Rico e o Cego Bartimeu",
            texto: ` ¹ E, levantando-se dali, foi para o território da Judeia, além do Jordão, e a multidão se reuniu em torno dele; e tornou a ensiná-los, como tinha por costume.
² E, aproximando-se dele os fariseus, perguntaram-lhe, tentando-o: É lícito ao homem repudiar sua mulher?
³ Mas ele, respondendo, disse-lhes: Que vos mandou Moisés?
⁴ E eles disseram: Moisés permitiu escrever carta de divórcio e repudiar.
⁵ E Jesus, respondendo, disse-lhes: Pela dureza do vosso coração vos deixou ele escrito esse mandamento;
⁶ porém, desde o princípio da criação, Deus os fezmacho e fêmea.
⁷ Por isso,deixará o homem a seu pai e a sua mãe e unir-se-á a sua mulher.
⁸ E serão os dois uma só carne e, assim, já não serão dois, mas uma só carne.
⁹ Portanto, o que Deus ajuntou, não o separe o homem.
¹⁰ E em casa tornaram os discípulos a interrogá-lo acerca disso mesmo.
¹¹ E ele lhes disse: Qualquer que deixar a sua mulher e casar com outra adultera contra ela.
¹² E, se a mulher deixar a seu marido e casar com outro, adultera.
¹³ E traziam-lhe crianças para que lhes tocasse, mas os discípulos repreendiam aos que lhas traziam.
¹⁴ Jesus, porém, vendo isso, indignou-se e disse-lhes: Deixai vir os pequeninos a mim e não os impeçais, porque dostais é o Reino de Deus.
¹⁵ Em verdade vos digo que qualquer que não recebero Reino de Deus como uma criança de maneira nenhuma entrará nele.
¹⁶ E, tomando-as nos seus braços e impondo-lhes as mãos, as abençoou.
¹⁷ E, pondo-se a caminho, correu para ele um homem, o qual se ajoelhou diante dele e lhe perguntou: Bom Mestre, que farei para herdar a vida eterna?
¹⁸ E Jesus lhe disse: Por que me chamas bom? Ninguém há bom senão um, que é Deus.
¹⁹ Tu sabes os mandamentos: Nãoadulterarás; não matarás; não furtarás; não dirás falsos testemunhos; não defraudarás alguém; honra a teu pai e a tua mãe.
²⁰ Ele, porém, respondendo, lhe disse: Mestre, tudo isso guardei desde a minha mocidade.
²¹ E Jesus, olhando para ele, o amou e lhe disse: Falta-te uma coisa: vai, e vende tudo quanto tens, e dá-o aos pobres,e terás um tesouro no céu; e vem e segue-me.
²² Mas ele, contrariado com essa palavra, retirou-se triste, porque possuía muitas propriedades.
²³ Então, Jesus, olhando ao redor, disse aos seus discípulos: Quão dificilmente entrarão no Reino de Deus os que têm riquezas!
²⁴ E os discípulos se admiraram destas suas palavras; mas Jesus, tornando a falar, disse-lhes: Filhos, quão difícil é, para os que confiam nas riquezas, entrar no Reino de Deus!
²⁵ É mais fácil passar um camelo pelo fundo de uma agulha do que entrar um rico no Reino de Deus.
²⁶ E eles se admiravam ainda mais, dizendo entre si: Quem poderá, pois, salvar-se?
²⁷ Jesus, porém, olhando para eles, disse: Para os homens é impossível, mas não para Deus, porque para Deustodas as coisas são possíveis.
²⁸ E Pedro começou a dizer-lhe: Eis que nós tudo deixamos e te seguimos.
²⁹ E Jesus, respondendo, disse: Em verdade vos digo que ninguém há, que tenha deixado casa, ou irmãos, ou irmãs, ou pai, ou mãe, ou mulher, ou filhos, ou campos, por amor de mim e do evangelho,
³⁰ quenão receba cem vezes tanto, já neste tempo, em casas, e irmãos, e irmãs, e mães, e filhos, e campos, com perseguições, e, no século futuro, a vida eterna.
³¹ Porémmuitos primeiros serão derradeiros, e muitos derradeiros serão primeiros.
³² E iam no caminho, subindo para Jerusalém; e Jesus ia adiante deles. E eles maravilhavam-se e seguiam-no atemorizados. E, tornando a tomar consigo os doze, começou a dizer-lhes as coisas que lhe deviam sobrevir,
³³ dizendo:Eis que nós subimos a Jerusalém, e o Filho do Homem será entregue aos príncipes dos sacerdotes e aos escribas, e o condenarão à morte, e o entregarão aos gentios,
³⁴ e o escarnecerão, e açoitarão, e cuspirão nele, e o matarão; mas, ao terceiro dia, ressuscitará.
³⁵ E aproximaram-se dele Tiago e João, filhos de Zebedeu, dizendo: Mestre, queremos que nos faças o que pedirmos.
³⁶ E ele lhes disse: Que quereis que vos faça?
³⁷ E eles lhe disseram: Concede-nos que, na tua glória, nos assentemos, um à tua direita, e outro à tua esquerda.
³⁸ Mas Jesus lhes disse: Não sabeis o que pedis; podeis vós beber o cálice que eu bebo e ser batizados com o batismo com que eu sou batizado?
³⁹ E eles lhe disseram: Podemos. Jesus, porém, disse-lhes: Em verdade vós bebereis o cálice que eu beber e sereis batizados com o batismo com que eu sou batizado,
⁴⁰ mas o assentar-se à minha direita ou à minha esquerda não me pertence a mim concedê-lo, mas isso é para aqueles a quem está reservado.
⁴¹ E os dez, tendo ouvido isso, começaram a indignar-se contra Tiago e João.
⁴² Mas Jesus, chamando-os a si, disse-lhes: Sabeis que os que julgam ser príncipes das gentes delas se assenhoreiam, e os seus grandes usam de autoridade sobre elas;
⁴³ masentre vós não será assim; antes, qualquer que, entre vós, quiser ser grande será vossoserviçal.
⁴⁴ E qualquer que, dentre vós, quiser ser o primeiro seráservo de todos.
⁴⁵ Porque oFilho do Homem também não veio para ser servido, mas para servir e dara sua vida em resgate de muitos.
⁴⁶ Depois, foram para Jericó. E, saindo ele de Jericó com seus discípulos e uma grande multidão, Bartimeu, o cego, filho de Timeu, estava assentado junto ao caminho, mendigando.
⁴⁷ E, ouvindo que era Jesus de Nazaré, começou a clamar e a dizer: Jesus, Filho de Davi, tem misericórdia de mim!
⁴⁸ E muitos o repreendiam, para que se calasse; mas ele clamava cada vez mais: Filho de Davi, tem misericórdia de mim!
⁴⁹ E Jesus, parando, disse que o chamassem; e chamaram o cego, dizendo-lhe: Tem bom ânimo; levanta-te, que ele te chama.
⁵⁰ E ele, lançando de si a sua capa, levantou-se e foi ter com Jesus.
⁵¹ E Jesus, falando, disse-lhe: Que queres que te faça? E o cego lhe disse: Mestre, que eu tenha vista.
⁵² E Jesus lhe disse:  


`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Jesus disse ser mais fácil do que um rico entrar no Reino de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Um camelo passar pelo fundo de uma agulha", correta: true },
                            { numero: 2, texto: "Um peixe viver fora d'água", correta: false },
                            { numero: 3, texto: "Uma montanha se mover", correta: false },
                            { numero: 4, texto: "O sol parar de brilhar", correta: false }
                        ],
                        explicacao: "Marcos 10:25 - É uma metáfora sobre a dificuldade do desapego às riquezas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual era o pedido de Bartimeu a Jesus na beira do caminho?",
                        opcoes: [
                            { numero: 1, texto: "Jesus, Filho de Davi, tem misericórdia de mim!", correta: true },
                            { numero: 2, texto: "Dá-me uma esmola, Senhor", correta: false },
                            { numero: 3, texto: "Faz-me um dos teus discípulos", correta: false },
                            { numero: 4, texto: "Leva-me para Jerusalém", correta: false }
                        ],
                        explicacao: "Marcos 10:47 - Ele clamava reconhecendo a linhagem messiânica de Jesus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus veio fazer, segundo Suas próprias palavras?",
                        opcoes: [
                            { numero: 1, texto: "Para ser servido pelos homens", correta: false },
                            { numero: 2, texto: "Para servir e dar a sua vida em resgate de muitos", correta: true },
                            { numero: 3, texto: "Para condenar o mundo", correta: false },
                            { numero: 4, texto: "Para restaurar o reino terrestre de Israel", correta: false }
                        ],
                        explicacao: "Marcos 10:45 - Este é o versículo chave do Evangelho de Marcos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },

        11: {
            titulo: "A Entrada Triunfal e o Templo",
            texto: `¹ E, logo que se aproximaram de Jerusalém, de Betfagé e de Betânia, junto ao monte das Oliveiras, enviou dois dos seus discípulos
² e disse-lhes: Ide à aldeia que está defronte de vós; e, logo que ali entrardes, encontrareis preso um jumentinho, sobre o qual ainda não montou homem algum; soltai-o e trazei-mo.
³ E, se alguém vos disser: Por que fazeis isso?, dizei-lhe que o Senhor precisa dele, e logo o deixará trazer para aqui.
⁴ E foram, e encontraram o jumentinho preso fora da porta, entre dois caminhos, e o soltaram.
⁵ E alguns dos que ali estavam lhes disseram: Que fazeis, soltando o jumentinho?
⁶ Eles, porém, disseram-lhes como Jesus lhes tinha mandado; e os deixaram ir.
⁷ E levaram o jumentinho a Jesus e lançaram sobre ele as suas vestes, e assentou-se sobre ele.
⁸ E muitos estendiam as suas vestes pelo caminho, e outros cortavam ramos das árvores e os espalhavam pelo caminho.
⁹ E aqueles que iam adiante e os que seguiam clamavam, dizendo: Hosana! Bendito o que vem em nome do Senhor!
¹⁰ Bendito o Reino do nosso pai Davi, que vem em nome do Senhor! Hosana nas alturas!
¹¹ E Jesus entrou em Jerusalém, no templo, e, tendo visto tudo ao redor, como fosse já tarde, saiu para Betânia, com os doze.
¹² E, no dia seguinte, quando saíram de Betânia, teve fome.
¹³ Vendo de longe uma figueira que tinha folhas, foi ver se nela acharia alguma coisa; e, chegando a ela, não achou senão folhas, porque não era tempo de figos.
¹⁴ E Jesus, falando, disse à figueira: Nunca mais coma alguém fruto de ti. E os seus discípulos ouviram isso.
¹⁵ E vieram a Jerusalém; e Jesus, entrando no templo, começou a expulsar os que vendiam e compravam no templo; e derribou as mesas dos cambistas e as cadeiras dos que vendiam pombas.
¹⁶ E não consentia que ninguém levasse algum vaso pelo templo.
¹⁷ E os ensinava, dizendo: Não está escrito: A minha casa será chamada por todas as nações casa de oração?Mas vós a tendes feito covilde ladrões.
¹⁸ E os escribas e príncipes dos sacerdotes, tendo ouvido isso, buscavam ocasião para o matar; pois eles o temiam porque toda a multidão estava admirada acerca da sua doutrina.
¹⁹ E, sendo já tarde, saiu para fora da cidade.
²⁰ E eles, passando pela manhã, viram que a figueira se tinha secado desde as raízes.
²¹ E Pedro, lembrando-se, disse-lhe: Mestre, eis que a figueira que tu amaldiçoaste se secou.
²² E Jesus, respondendo, disse-lhes: Tende fé em Deus,
²³ porque em verdade vos digo quequalquer que disser a este monte: Ergue-te e lança-te no mar, e não duvidar em seu coração, mas crer que se fará aquilo que diz, tudo o que disser lhe será feito.
²⁴ Por isso, vos digo que tudo o que pedirdes,orando, crede que o recebereis e tê-lo-eis.
²⁵ E, quando estiverdes orando, perdoai, se tendes alguma coisa contra alguém,para que vosso Pai, que está nos céus, vos perdoe as vossas ofensas.
²⁶ Mas, se vósnão perdoardes, também vosso Pai, que está nos céus, vos não perdoará as vossas ofensas.
²⁷ E tornaram a Jerusalém; e, andando ele pelo templo, os principais dos sacerdotes, e os escribas, e os anciãos se aproximaram dele
²⁸ e lhe disseram: Com que autoridade fazes tu estas coisas? Ou quem te deu tal autoridade para fazer estas coisas?
²⁹ Mas Jesus, respondendo, disse-lhes: Também eu vos perguntarei uma coisa, e respondei-me; e, então, vos direi com que autoridade faço estas coisas.
³⁰ O batismo de João era do céu ou dos homens? Respondei-me.
³¹ E eles arrazoavam entre si, dizendo: Se dissermos: Do céu, ele nos dirá: Então, por que o não crestes?
³² Se, porém, dissermos: Dos homens, tememos o povo, porque todos sustentavam que João, verdadeiramente, era profeta.
³³ E, respondendo, disseram a  

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Em qual animal Jesus montou para entrar em Jerusalém?",
                        opcoes: [
                            { numero: 1, texto: "Um cavalo branco", correta: false },
                            { numero: 2, texto: "Um jumentinho no qual ninguém ainda havia montado", correta: true },
                            { numero: 3, texto: "Um camelo", correta: false },
                            { numero: 4, texto: "Ele entrou a pé", correta: false }
                        ],
                        explicacao: "Marcos 11:2 - Jesus enviou discípulos para buscar um jumentinho amarrado.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por que Jesus expulsou os que vendiam e compravam no templo?",
                        opcoes: [
                            { numero: 1, texto: "Porque faziam da casa de oração um covil de ladrões", correta: true },
                            { numero: 2, texto: "Porque eles não pagavam impostos", correta: false },
                            { numero: 3, texto: "Porque o barulho o incomodava", correta: false },
                            { numero: 4, texto: "Porque vendiam animais impuros", correta: false }
                        ],
                        explicacao: "Marcos 11:17 - 'A minha casa será chamada casa de oração para todas as nações'.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus disse que aconteceria se tivéssemos fé e não duvidássemos?",
                        opcoes: [
                            { numero: 1, texto: "Poderíamos dizer a um monte: Ergue-te e lança-te no mar", correta: true },
                            { numero: 2, texto: "Ficaríamos ricos", correta: false },
                            { numero: 3, texto: "Nunca mais teríamos problemas", correta: false },
                            { numero: 4, texto: "Veríamos anjos todos os dias", correta: false }
                        ],
                        explicacao: "Marcos 11:23 - Jesus ensina sobre o poder da fé sem vacilação.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },

        12: {
            titulo: "O Grande Mandamento",
            texto: `¹ E começou a falar-lhes por parábolas: Um homem plantou uma vinha, e cercou-a de um valado, e fundou nela um lagar, e edificou uma torre, e arrendou-a a uns lavradores, e partiu para fora da terra.
² E, chegado o tempo, mandou um servo aos lavradores para que recebesse, dos lavradores, do fruto da vinha.
³ Mas estes, apoderando-se dele, o feriram e o mandaram embora vazio.
⁴ E tornou a enviar-lhes outro servo; e eles, apedrejando-o, o feriram na cabeça e o mandaram embora, tendo-o afrontado.
⁵ E tornou a enviar-lhes outro, e a este mataram; e a outros muitos, dos quais a uns feriram e a outros mataram.
⁶ Tendo ele, pois, ainda um, seu filho amado, enviou-o também a estes por derradeiro, dizendo: Ao menos terão respeito ao meu filho.
⁷ Mas aqueles lavradores disseram entre si: Este é o herdeiro; vamos, matemo-lo, e a herança será nossa.
⁸ E, agarrando-o, o mataram e o lançaram fora da vinha.
⁹ Que fará, pois, o Senhor da vinha? Virá, e destruirá os lavradores, e dará a vinha a outros.
¹⁰ Ainda não lestes esta Escritura:A pedra que os edificadores rejeitaram, esta foi posta por cabeça da esquina;
¹¹ isso foi feito pelo Senhor e é coisa maravilhosa aos nossos olhos?
¹² E buscavam prendê-lo, mas temiam a multidão, porque entendiam que contra eles dizia esta parábola; e, deixando-o, foram-se.
¹³ E enviaram-lhe alguns dos fariseus e dos herodianos, para que o apanhassem em alguma palavra.
¹⁴ E, chegando eles, disseram-lhe: Mestre, sabemos que és homem de verdade e não te importas com quem quer que seja, porque não olhas a aparência dos homens, antes, com verdade, ensinas o caminho de Deus. É lícito pagar tributo a César ou não? Pagaremos ou não pagaremos?
¹⁵ Então, ele, conhecendo a sua hipocrisia, disse-lhes: Por que me tentais? Trazei-me uma moeda, para que a veja.
¹⁶ E eles lha trouxeram. E disse-lhes: De quem é esta imagem e inscrição? E eles lhe disseram: De César.
¹⁷ E Jesus, respondendo, disse-lhes: Dai, pois, a César o que é de César e a Deus, o que é de Deus. E maravilharam-se dele.
¹⁸ Então, os saduceus, que dizem que não há ressurreição, aproximaram-se dele e perguntaram-lhe, dizendo:
¹⁹ Mestre, Moisés nos escreveu que, se morresse o irmão de alguém, e deixasse mulher, e não deixasse filhos, seu irmão tomasse a mulher dele e suscitasse descendência a seu irmão.
²⁰ Ora, havia sete irmãos, e o primeiro tomou mulher e morreu sem deixar descendência;
²¹ e o segundo também a tomou, e morreu, e nem este deixou descendência; e o terceiro, da mesma maneira.
²² E tomaram-na os sete, sem, contudo, terem deixado descendência. Finalmente, depois de todos, morreu também a mulher.
²³ Na ressurreição, pois, quando ressuscitarem, de qual destes será a mulher? Porque os sete a tiveram por mulher.
²⁴ E Jesus, respondendo, disse-lhes: Porventura, não errais vós em razão de não saberdes as Escrituras nem o poder de Deus?
²⁵ Porquanto, quando ressuscitarem dos mortos, nem casarão, nem se darão em casamento, mas serão comoos anjos nos céus.
²⁶ E, acerca dos mortos que houverem de ressuscitar, não tendes lido no livro de Moisés como Deus lhe falou na sarça, dizendo: Eu souo Deus de Abraão, e o Deus de Isaque, e o Deus de Jacó?
²⁷ Ora, Deus não é de mortos, mas sim é Deus de vivos. Por isso, vós errais muito.
²⁸ Aproximou-se dele um dos escribas que os tinha ouvido disputar e, sabendo que lhes tinha respondido bem, perguntou-lhe: Qual é o primeiro de todos os mandamentos?
²⁹ E Jesus respondeu-lhe: O primeiro de todos os mandamentos é: Ouve,Israel, o Senhor, nosso Deus, é o único Senhor.
³⁰ Amarás, pois, ao Senhor, teu Deus, de todo o teu coração, e de toda a tua alma, e de todo o teu entendimento, e de todas as tuas forças; este é o primeiro mandamento.
³¹ E o segundo, semelhante a este, é:Amarás o teu próximo como a ti mesmo. Não há outro mandamento maior do que estes.
³² E o escriba lhe disse: Muito bem, Mestre, e com verdade disseste que há um só Deus e que não há outro além dele;
³³ e que amá-lo de todo o coração, e de todo o entendimento, e de toda a alma, e de todas as forças e amar o próximo como a si mesmo é mais do que todos os holocaustos e sacrifícios.
³⁴ E Jesus, vendo que havia respondido sabiamente, disse-lhe: Não estás longe do Reino de Deus. E já ninguém ousava perguntar-lhe mais nada.
³⁵ E, falando Jesus, dizia, ensinando no templo: Como dizem os escribas que o Cristo é Filho de Davi?
³⁶ O próprio Davi disse pelo Espírito Santo:O Senhor disse ao meu Senhor: Assenta-te à minha direita, até que eu ponha os teus inimigos por escabelo dos teus pés.
³⁷ Pois, se Davi mesmo lhe chama Senhor, como é logo seu filho? E a grande multidão o ouvia de boa vontade.
³⁸ E, ensinando-os, dizia-lhes: Guardai-vos dos escribas, que gostam de andar com vestes compridas, e das saudações nas praças,
³⁹ e das primeiras cadeiras nas sinagogas, e dos primeiros assentos nas ceias;
⁴⁰ que devoramas casas das viúvas e isso, com pretexto de largas orações. Estes receberão mais grave condenação.
⁴¹ E, estando Jesus assentado defronte da arca do tesouro, observava a maneira como a multidão lançava o dinheiro na arca do tesouro; e muitos ricos depositavam muito.
⁴² Vindo, porém, uma pobre viúva, depositou duas pequenas moedas, que valiam cinco réis.
⁴³ E, chamando os seus discípulos, disse-lhes: Em verdade vos digo que esta pobreviúva depositou mais do  

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é o primeiro e maior de todos os mandamentos?",
                        opcoes: [
                            { numero: 1, texto: "Não matarás", correta: false },
                            { numero: 2, texto: "Amarás ao Senhor teu Deus de todo o teu coração", correta: true },
                            { numero: 3, texto: "Honra a teu pai e a tua mãe", correta: false },
                            { numero: 4, texto: "Não darás falso testemunho", correta: false }
                        ],
                        explicacao: "Marcos 12:30 - Amar a Deus sobre todas as coisas é o principal mandamento.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus disse sobre o imposto a César?",
                        opcoes: [
                            { numero: 1, texto: "Dai a César o que é de César, e a Deus o que é de Deus", correta: true },
                            { numero: 2, texto: "Não pagueis nada aos romanos", correta: false },
                            { numero: 3, texto: "César é o dono de tudo", correta: false },
                            { numero: 4, texto: "O dinheiro é algo impuro", correta: false }
                        ],
                        explicacao: "Marcos 12:17 - Jesus separa as obrigações civis das obrigações espirituais.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por que Jesus elogiou a oferta da viúva pobre?",
                        opcoes: [
                            { numero: 1, texto: "Porque ela deu mais dinheiro que os ricos", correta: false },
                            { numero: 2, texto: "Porque deu tudo o que possuía, todo o seu sustento", correta: true },
                            { numero: 3, texto: "Porque a moeda era de ouro", correta: false },
                            { numero: 4, texto: "Porque ela entregou na mão de Jesus", correta: false }
                        ],
                        explicacao: "Marcos 12:44 - Os outros deram do que sobrava, mas ela deu da sua pobreza.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },

        13: {
            titulo: "O Sermão Profético",
            texto: `¹ E, saindo ele do templo, disse-lhe um dos seus discípulos: Mestre, olha que pedras e que edifícios!
² E, respondendo Jesus, disse-lhe: Vês estes grandes edifícios? Não ficará pedra sobre pedraque não seja derribada.
³ E, assentando-se ele no monte das Oliveiras, defronte do templo, Pedro, e Tiago, e João, e André lhe perguntaram em particular:
⁴ Dize-nos quando serão essas coisas e que sinal haverá quando todas elas estiverem para se cumprir.
⁵ E Jesus, respondendo-lhes, começou a dizer: Olhai que ninguémvos engane,
⁶ porque muitos virão em meu nome, dizendo: Eu sou o Cristo; e enganarão a muitos.
⁷ E, quando ouvirdes de guerras e de rumores de guerras, não vos perturbeis, porque assim deve acontecer; mas ainda não será o fim.
⁸ Porque se levantará nação contra nação, e reino, contra reino, e haverá terremotos em diversos lugares, e haverá fomes. Isso será o princípiode dores.
⁹ Mas olhai por vós mesmos,porque vos entregarão aos concílios e às sinagogas; sereis açoitados e sereis apresentados ante governadores e reis, por amor de mim, para lhes servir de testemunho.
¹⁰ Mas importa que oevangelho seja primeiramente pregado entre todas as nações:
¹¹ Quando, pois, vos conduzirem para vos entregarem, nãoestejais solícitos de antemão pelo que haveis de dizer; mas o que vos for dado naquela hora, isso falai; porque não sois vós os que falais, mas o Espírito Santo.
¹² E o irmãoentregará à morte o irmão, e o pai, o filho; e levantar-se-ão os filhos contra os pais e os farão morrer.
¹³ E sereis aborrecidospor todos por amor do meu nome; mas quem perseverar até ao fim, esse será salvo.
¹⁴ Ora, quando vós virdesa abominação do assolamento, que foi predito, estar onde não deve estar (quem lê, que entenda), então, os que estiverem na Judeia, quefujam para os montes;
¹⁵ e o que estiver sobre o telhado, que não desça para casa, nem entre a tomar coisa alguma de sua casa;
¹⁶ e o que estiver no campo, que não volte atrás, para tomar a sua veste.
¹⁷ Mas ai dasgrávidas e das que criarem naqueles dias!
¹⁸ Orai, pois, para que a vossa fuga não suceda no inverno,
¹⁹ porque, naqueles dias,haverá uma aflição tal, qual nunca houve desde o princípio da criação, que Deus criou, até agora, nem jamais haverá.
²⁰ E, se o Senhor não abreviasse aqueles dias, nenhuma carne se salvaria; mas, por causa dos escolhidos que escolheu, abreviou aqueles dias.
²¹ E, então, se alguém vos disser: Eis aquio Cristo, ou: Ei-lo ali, não acrediteis.
²² Porque se levantarão falsos cristos e falsos profetas e farão sinais e prodígios, para enganarem, se for possível, até os escolhidos.
²³ Mas vós vede;eis que de antemão vos tenho dito tudo.
²⁴ Ora,naqueles dias, depois daquela aflição, o sol se escurecerá, e a lua não dará a sua luz.
²⁵ E as estrelas cairão do céu, e as forças que estão nos céus serão abaladas.
²⁶ E, então, verãovir o Filho do Homem nas nuvens, com grande poder e glória.
²⁷ E ele enviará os seus anjos e ajuntará os seus escolhidos, desde os quatro ventos, da extremidade da terra até a extremidade do céu.
²⁸ Aprendei, pois, a parábolada figueira: quando já o seu ramo se torna tenro, e brotam folhas, bem sabeis que já está próximo o verão.
²⁹ Assim também vós, quando virdes sucederem essas coisas, sabei que já está perto, às portas.
³⁰ Na verdade vos digo que não passará esta geração sem que todas essas coisas aconteçam.
³¹ Passará o céu e a terra,mas as minhas palavras não passarão.
³² Mas, daquele Dia e hora, ninguém sabe, nem os anjos que estão no céu, nem o Filho, senão o Pai.
³³ Olhai, vigiaie orai, porque não sabeis quando chegará o tempo.
³⁴ É como se um homem,partindo para fora da terra, deixasse a sua casa, e desse autoridade aos seus servos, e a cada um, a sua obra, e mandasse ao porteiro que vigiasse.
³⁵ Vigiai,pois, porque não sabeis quando virá o senhor da casa; se à tarde, se à meia-noite,  

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Jesus disse sobre a destruição do templo?",
                        opcoes: [
                            { numero: 1, texto: "Não ficará pedra sobre pedra que não seja derrubada", correta: true },
                            { numero: 2, texto: "Ele durará para sempre", correta: false },
                            { numero: 3, texto: "Os discípulos deveriam protegê-lo", correta: false },
                            { numero: 4, texto: "Será reconstruído em ouro", correta: false }
                        ],
                        explicacao: "Marcos 13:2 - Jesus profetiza a queda completa da estrutura do templo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem sabe o dia e a hora da vinda do Filho do Homem?",
                        opcoes: [
                            { numero: 1, texto: "Apenas os anjos", correta: false },
                            { numero: 2, texto: "Ninguém, senão o Pai", correta: true },
                            { numero: 3, texto: "Os profetas", correta: false },
                            { numero: 4, texto: "O próprio Jesus sabia na hora", correta: false }
                        ],
                        explicacao: "Marcos 13:32 - Jesus ressalta que o momento exato pertence ao conhecimento do Pai.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é o aviso final de Jesus no capítulo 13?",
                        opcoes: [
                            { numero: 1, texto: "Vigiai", correta: true },
                            { numero: 2, texto: "Fugi para as montanhas", correta: false },
                            { numero: 3, texto: "Armai-vos", correta: false },
                            { numero: 4, texto: "Dormi em paz", correta: false }
                        ],
                        explicacao: "Marcos 13:37 - 'O que vos digo, digo-o a todos: Vigiai'.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },

        14: {
            titulo: "A Última Ceia e a Traição",
            texto: `¹ E, dali a dois dias, era a Páscoa e a Festa dos Pães Asmos; e os principais dos sacerdotes e os escribas buscavam como o prenderiam com dolo e o matariam.
² Mas eles diziam: Não na festa, para que, porventura, se não faça alvoroço entre o povo.
³ E, estando ele em Betânia assentado à mesa, em casa de Simão, o leproso, veio uma mulher que trazia um vaso de alabastro, com unguento de nardo puro, de muito preço, e, quebrando o vaso, lho derramou sobre a cabeça.
⁴ E alguns houve que em si mesmos se indignaram e disseram: Para que se fez este desperdício de unguento?
⁵ Porque podia vender-se por mais de trezentos dinheiros e dá-lo aos pobres. E bramavam contra ela.
⁶ Jesus, porém, disse: Deixai-a, para que a molestais? Ela fez-me boa obra.
⁷ Porque sempre tendes ospobres convosco e podeis fazer-lhes bem, quando quiserdes; mas a mim nem sempre me tendes.
⁸ Esta fez o que podia; antecipou-se a ungir o meu corpo para a sepultura.
⁹ Em verdade vos digo que, em todas as partes do mundo onde este evangelho for pregado, também o que ela fez será contado para sua memória.
¹⁰ E Judas Iscariotes, um dos doze, foi ter com os principais dos sacerdotes para lho entregar.
¹¹ E eles, ouvindo-o, alegraram-se e prometeram dar-lhe dinheiro; e buscava como o entregaria em ocasião oportuna.
¹² E, no primeiro dia da Festa dos Pães Asmos, quando sacrificavam a Páscoa, disseram-lhe os discípulos: Aonde queres que vamos fazer os preparativos para comer a Páscoa?
¹³ E enviou dois dos seus discípulos e disse-lhes: Ide à cidade, e um homem que leva um cântaro de água vos encontrará; segui-o.
¹⁴ E, onde quer que entrar, dizei ao senhor da casa: O Mestre diz: Onde está o aposento em que hei de comer a Páscoa com os meus discípulos?
¹⁵ E ele vos mostrará um grande cenáculo mobilado e preparado; preparai-a ali.
¹⁶ E, saindo os seus discípulos, foram à cidade, e acharam como lhes tinha dito, e prepararam a Páscoa.
¹⁷ E, chegada a tarde, foi com os doze.
¹⁸ E, quando estavam assentados a comer, disse Jesus: Em verdade vos digo que um de vós, que comigo come, há de trair-me.
¹⁹ E eles começaram a entristecer-se e a dizer-lhe um após outro: Porventura, sou eu, Senhor? E outro: Porventura, sou eu, Senhor?
²⁰ Mas ele, respondendo, disse-lhes: É um dos doze, que mete comigo a mão no prato.
²¹ Na verdade oFilho do Homem vai, como dele está escrito, mas ai daquele homem por quem o Filho do Homem é traído! Bom seria para o tal homem não haver nascido.
²² E, comendo eles, tomou Jesus pão, e, abençoando-o, o partiu, e deu-lho, e disse: Tomai, comei, isto é o meu corpo.
²³ E, tomando o cálice e dando graças, deu-lho; e todos beberam dele.
²⁴ E disse-lhes: Isto é o meu sangue, o sangue do Novo Testamento, que por muitos é derramado.
²⁵ Em verdade vos digo que não beberei mais do fruto da vide, até àquele Dia em que o beber novo, no Reino de Deus.
²⁶ E, tendo cantado o hino, saíram para o monte das Oliveiras.
²⁷ E disse-lhes Jesus: Todos vós esta noite vos escandalizareis em mim, porque escritoestá: Ferirei o pastor, e as ovelhas se dispersarão.
²⁸ Mas, depois que euhouver ressuscitado, irei adiante de vós para a Galileia.
²⁹ E disse-lhe Pedro: Ainda que todos se escandalizem, nunca, porém, eu.
³⁰ E disse-lhe Jesus: Em verdade te digo que hoje, nesta noite, antes que o galo cante duas vezes, três vezes me negarás.
³¹ Mas ele disse com mais veemência: Ainda que me seja necessário morrer contigo, de modo nenhum te negarei. E da mesma maneira diziam todos também.
³² E foram a um lugar chamado Getsêmani, e disse aos seus discípulos: Assentai-vos aqui, enquanto eu oro.
³³ E tomou consigo a Pedro, e a Tiago, e a João e começou a ter pavor e a angustiar-se.
³⁴ E disse-lhes: A minha alma está profundamente triste até a morte; ficai aqui e vigiai.
³⁵ E, tendo ido um pouco mais adiante, prostrou-se em terra; e orou para que, se fosse possível, passasse dele aquela hora.
³⁶ E disse: Aba, Pai, todas as coisas te são possíveis; afasta de mim este cálice; não seja, porém, o que eu quero, mas o que tu queres.
³⁷ E, chegando, achou-os dormindo e disse a Pedro: Simão, dormes? Não podes vigiar uma hora?
³⁸ Vigiai e orai, para que não entreis em tentação; oespírito, na verdade, está pronto, mas a carne é fraca.
³⁹ E foi outra vez e orou, dizendo as mesmas palavras.
⁴⁰ E, voltando, achou-os outra vez dormindo, porque os seus olhos estavam carregados, e não sabiam o que responder-lhe.
⁴¹ E voltou terceira vez e disse-lhes: Dormi agora e descansai. Basta; é chegada a hora.Eis que o Filho do Homem vai ser entregue nas mãos dos pecadores.
⁴² Levantai-vos,vamos; eis que está perto o que me trai.
⁴³ E logo, falando ele ainda, veio Judas, que era um dos doze, da parte dos principais dos sacerdotes, e dos escribas, e dos anciãos, e, com ele, uma grande multidão com espadas e porretes.
⁴⁴ Ora, o que o traía tinha-lhes dado um sinal, dizendo: Aquele que eu beijar, esse é; prendei-o e levai-o com segurança.
⁴⁵ E, logo que chegou, aproximou-se dele e disse-lhe: Rabi, Rabi. E beijou-o.
⁴⁶ E lançaram-lhe as mãos e o prenderam.
⁴⁷ E um dos que ali estavam presentes, puxando da espada, feriu o servo do sumo sacerdote e cortou-lhe uma orelha.
⁴⁸ E, respondendo Jesus, disse-lhes: Saístes com espadas e porretes a prender-me, como a um salteador?
⁴⁹ Todos os dias estava convosco ensinando no templo, e não me prendestes; mas isto é paraque as Escrituras se cumpram.
⁵⁰ Então, deixando-o, todos fugiram.
⁵¹ E um jovem o seguia, envolto em um lençol sobre o corpo nu. E lançaram-lhe as mãos,
⁵² mas ele, largando o lençol, fugiu nu.
⁵³ E levaram Jesus ao sumo sacerdote, e ajuntaram-se todos os principais dos sacerdotes, e os anciãos, e os escribas.
⁵⁴ E Pedro o seguiu de longe até dentro do pátio do sumo sacerdote e estava assentado com os servidores, aquentando-se ao lume.
⁵⁵ E os principais dos sacerdotes e todo o concílio buscavam algum testemunho contra Jesus, para o matar, e não o achavam.
⁵⁶ Porque muitos testificavam falsamente contra ele, mas os testemunhos não eram coerentes.
⁵⁷ E, levantando-se alguns, testificavam falsamente contra ele, dizendo:
⁵⁸ Nós ouvimos-lhe dizer: Eu derribarei este templo, construído por mãos de homens, e em três dias edificarei outro, não feito por mãos de homens.
⁵⁹ E nem assim o testemunho deles era coerente.
⁶⁰ E, levantando-se o sumo sacerdote no Sinédrio, perguntou a Jesus, dizendo: Nada respondes? Que testificam estes contra ti?
⁶¹ Mas ele calou-se e nada respondeu. O sumo sacerdote lhe tornou a perguntar e disse-lhe: És tu o Cristo, Filho do Deus Bendito?
⁶² E Jesus disse-lhe: Eu o sou, e vereiso Filho do Homem assentado à direita do Todo-Poderoso e vindo sobre as nuvens do céu.
⁶³ E o sumo sacerdote, rasgando as suas vestes, disse: Para que necessitamos de mais testemunhas?
⁶⁴ Vós ouvistes a blasfêmia; que vos parece? E todos o consideraram culpado de morte.
⁶⁵ E alguns começaram a cuspir nele, e a cobrir-lhe o rosto, e a dar-lhe punhadas, e a dizer-lhe: Profetiza. E os servidores davam-lhe bofetadas.
⁶⁶ E, estando Pedro embaixo, no átrio, chegou uma das criadas do sumo sacerdote;
⁶⁷ e, vendo a Pedro, que estava se aquentando, olhou para ele e disse: Tu também estavas com Jesus, o Nazareno.
⁶⁸ Mas ele negou-o, dizendo: Não o conheço, nem sei o que dizes. E saiu fora ao alpendre, e o galo cantou.
⁶⁹ E a criada, vendo-o outra vez, começou a dizer aos que ali estavam: Este é um dos tais.
⁷⁰ Mas ele o negou outra vez. E, pouco depois, os que ali estavam disseram outra vez a Pedro: Verdadeiramente, tu és um deles, porque és também galileu.
⁷¹ E ele começou a imprecar e a jurar: Não conheço esse homem de quem falais 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde Jesus foi orar antes de ser preso?",
                        opcoes: [
                            { numero: 1, texto: "No monte Sinai", correta: false },
                            { numero: 2, texto: "No Getsêmani", correta: true },
                            { numero: 3, texto: "No deserto", correta: false },
                            { numero: 4, texto: "Dentro do templo", correta: false }
                        ],
                        explicacao: "Marcos 14:32 - Jesus foi ao lugar chamado Getsêmani para orar em agonia.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual sinal Judas deu aos guardas para identificar Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Um aperto de mão", correta: false },
                            { numero: 2, texto: "Um beijo", correta: true },
                            { numero: 3, texto: "Apontou com o dedo", correta: false },
                            { numero: 4, texto: "Entregou-lhe uma capa", correta: false }
                        ],
                        explicacao: "Marcos 14:44 - O traidor havia dado o sinal: 'Aquele que eu beijar, esse é'.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quantas vezes o galo cantou antes de Pedro negar Jesus três vezes?",
                        opcoes: [
                            { numero: 1, texto: "Uma vez", correta: false },
                            { numero: 2, texto: "Duas vezes", correta: true },
                            { numero: 3, texto: "Três vezes", correta: false },
                            { numero: 4, texto: "Nenhuma", correta: false }
                        ],
                        explicacao: "Marcos 14:72 - E o galo cantou a segunda vez. E Pedro lembrou-se da palavra de Jesus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },

        15: {
            titulo: "A Crucificação",
            texto: ` ¹ E, logo ao amanhecer, os principais dos sacerdotes, e os anciãos, e os escribas, e todo o Sinédrio tiveram conselho; e, amarrando Jesus, o levaram e entregaram a Pilatos.
² E Pilatos lhe perguntou: Tu és o Rei dos judeus? E ele, respondendo, disse-lhe: Tu o dizes.
³ E os principais dos sacerdotes o acusavam de muitas coisas, porém ele nada respondia.
⁴ E Pilatos o interrogou outra vez, dizendo: Nada respondes? Vê quantas coisas testificam contra ti.
⁵ Mas Jesus nada mais respondeu, de maneira que Pilatos se maravilhava.
⁶ Ora, no dia da festa costumava soltar-lhes um preso qualquer que eles pedissem.
⁷ E havia um chamado Barrabás, que, preso com outros amotinadores, tinha num motim cometido uma morte.
⁸ E a multidão, dando gritos, começou a pedir que fizesse como sempre lhes tinha feito.
⁹ E Pilatos lhes respondeu, dizendo: Quereis que vos solte o Rei dos judeus?
¹⁰ Porque ele bem sabia que, por inveja, os principais dos sacerdotes o tinham entregado.
¹¹ Mas os principais dos sacerdotes incitaram a multidão para que fosse solto antes Barrabás.
¹² E Pilatos, respondendo, lhes disse outra vez: Que quereis, pois, que faça daquele a quem chamais Rei dos judeus?
¹³ E eles tornaram a clamar: Crucifica-o.
¹⁴ Mas Pilatos lhes disse: Mas que mal fez? E eles cada vez clamavam mais: Crucifica-o.
¹⁵ Então, Pilatos, querendo satisfazer a multidão, soltou-lhes Barrabás, e, açoitado Jesus, o entregou para que fosse crucificado.
¹⁶ E os soldados o levaram para dentro do palácio, à sala da audiência, e convocaram toda a coorte.
¹⁷ E vestiram-no de púrpura e, tecendo uma coroa de espinhos, lha puseram na cabeça.
¹⁸ E começaram a saudá-lo, dizendo: Salve, Rei dos judeus!
¹⁹ E feriram-no na cabeça com uma cana, e cuspiram nele, e, postos de joelhos, o adoravam.
²⁰ E, havendo-o escarnecido, despiram-lhe a púrpura, e o vestiram com as suas próprias vestes, e o levaram para fora, a fim de o crucificarem.
²¹ E constrangeram um certo Simão Cireneu, pai de Alexandre e de Rufo, que por ali passava, vindo do campo, a que levasse a cruz.
²² E levaram-no ao lugar do Gólgota, que se traduz por lugar da Caveira.
²³ E deram-lhe a beber vinho com mirra, mas ele não o tomou.
²⁴ E, havendo-o crucificado, repartiram as suas vestes, lançando sobre eles sortes, para saber o que cada um levaria.
²⁵ E era a hora terceira, e o crucificaram.
²⁶ E, por cima dele, estava escrita a sua acusação: O Rei dos Judeus.
²⁷ E crucificaram com ele dois salteadores, um à sua direita, e outro à esquerda.
²⁸ E cumpriu-se a Escritura que diz: E com os malfeitores foi contado.
²⁹ E os que passavam blasfemavam dele, meneando a cabeça e dizendo: Ah! Tu que derribas o templo e, em três dias, o edificas!
³⁰ Salva-te a ti mesmo e desce da cruz.
³¹ E da mesma maneira também os principais dos sacerdotes, com os escribas, diziam uns para os outros, zombando: Salvou os outros e não pode salvar-se a si mesmo.
³² O Cristo, o Rei de Israel, desça agora da cruz, para que o vejamos e acreditemos.
  Também os que com ele foram crucificados o injuriavam.
³³ E, chegada a hora sexta, houve trevas sobre toda a terra até à hora nona.
³⁴ E, à hora nona, Jesus exclamou com grande voz, dizendo: Eloí, Eloí, lemá sabactâni? Isso, traduzido, é: Deus meu, Deus meu, por que me desamparaste?
³⁵ E alguns dos que ali estavam, ouvindo isso, diziam: Eis que chama por Elias.
³⁶ E um deles correu a embeber uma esponja em vinagre e, pondo-a numa cana, deu-lho a beber, dizendo: Deixai, vejamos se virá Elias tirá-lo.
³⁷ E Jesus, dando um grande brado, expirou.
³⁸ E o véu do templo se rasgou em dois, de alto a baixo.
³⁹ E o centurião que estava defronte dele, vendo que assim clamando expirara, disse: Verdadeiramente, este homem era o Filho de Deus.
⁴⁰ E também ali estavam algumas mulheres, olhando de longe, entre as quais também Maria Madalena, e Maria, mãe de Tiago, o menor, e de José, e Salomé,
⁴¹ as quais também o seguiam e o serviam, quando estava na Galileia; e muitas outras que tinham subido com ele a Jerusalém.
⁴² E, chegada a tarde, porquanto era o Dia da Preparação, isto é, a véspera do sábado,
⁴³ chegou José de Arimateia, senador honrado, que também esperava o Reino de Deus, e ousadamente foi a Pilatos, e pediu o corpo de Jesus.
⁴⁴ E Pilatos se admirou de que já estivesse morto. E, chamando o centurião, perguntou-lhe se já havia muito que tinha morrido.
⁴⁵ E, tendo-se certificado pelo centurião, deu o corpo a José,
⁴⁶ o qual comprara um lençol fino, e, tirando-o da cruz, o envolveu nele, e o depositou num sepulcro lavrado numa rocha, e revolveu uma pedra para a porta do sepulcro.
⁴⁷ E Maria Madalena e Maria 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem foi constrangido a carregar a cruz de Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Simão Cireneu", correta: true },
                            { numero: 2, texto: "Pedro", correta: false },
                            { numero: 3, texto: "João", correta: false },
                            { numero: 4, texto: "Barrabás", correta: false }
                        ],
                        explicacao: "Marcos 15:21 - Simão de Cirene, que vinha do campo, foi obrigado a levar a cruz.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu com o véu do templo no momento da morte de Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Desapareceu", correta: false },
                            { numero: 2, texto: "Rasgou-se em dois, de alto a baixo", correta: true },
                            { numero: 3, texto: "Tornou-se negro", correta: false },
                            { numero: 4, texto: "Caiu sobre os sacerdotes", correta: false }
                        ],
                        explicacao: "Marcos 15:38 - O véu rasgado simboliza o livre acesso a Deus através de Cristo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual oficial romano declarou: 'Verdadeiramente este homem era o Filho de Deus'?",
                        opcoes: [
                            { numero: 1, texto: "Pilatos", correta: false },
                            { numero: 2, texto: "O centurião que estava defronte dele", correta: true },
                            { numero: 3, texto: "Herodes", correta: false },
                            { numero: 4, texto: "César Augusto", correta: false }
                        ],
                        explicacao: "Marcos 15:39 - O centurião, vendo como Jesus expirara, fez essa confissão.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },

        16: {
            titulo: "A Ressurreição",
            texto: ` ¹ E, passado o sábado, Maria Madalena, Salomé e Maria, mãe de Tiago, compraram aromas para irem ungi-lo.
² E, no primeiro dia da semana, foram ao sepulcro, de manhã cedo, ao nascer do sol,
³ e diziam umas às outras: Quem nos revolverá a pedra da porta do sepulcro?
⁴ E, olhando, viram que já a pedra estava revolvida; e era ela muito grande.
⁵ E, entrando no sepulcro, viram um jovem assentado à direita, vestido de uma roupa comprida e branca; e ficaram espantadas.
⁶ Porém ele disse-lhes: Não vos assusteis; buscais a Jesus, o Nazareno, que foi crucificado; já ressuscitou, não está aqui; eis aqui o lugar onde o puseram.
⁷ Mas ide, dizei a seus discípulos e a Pedro que ele vai adiante de vós para a Galileia; ali o vereis, como ele vos disse.
⁸ E, saindo elas apressadamente, fugiram do sepulcro, porque estavam possuídas de temor e assombro; e nada diziam a ninguém, porque temiam.
⁹ E Jesus, tendo ressuscitado na manhã do primeiro dia da semana, apareceu primeiramente a Maria Madalena, da qual tinha expulsado sete demônios.
¹⁰ E, partindo ela, anunciou-o àqueles que tinham estado com ele, os quais estavam tristes e chorando.
¹¹ E, ouvindo eles que Jesus vivia e que tinha sido visto por ela, não o creram.
¹² E, depois, manifestou-se em outra forma a dois deles que iam de caminho para o campo.
¹³ E, indo estes, anunciaram-no aos outros, mas nem ainda estes creram.
¹⁴ Finalmente apareceu aos onze, estando eles assentados juntamente, e lançou-lhes em rosto a sua incredulidade e dureza de coração, por não haverem crido nos que o tinham visto já ressuscitado.
¹⁵ E disse-lhes: Ide por todo o mundo, pregai o evangelho a toda criatura.
¹⁶ Quemcrer e for batizado será salvo; mas quem não crer será condenado.
¹⁷ E estes sinais seguirão aos que crerem:em meu nome, expulsarão demônios; falarão novas línguas;
¹⁸ pegarão nasserpentes; e, se beberem alguma coisa mortífera, não lhes fará dano algum; e imporão as mãos sobre os enfermos e os curarão.
¹⁹ Ora, o Senhor, depois de lhes ter falado, foi recebido no céu e assentou-se à direita de Deus.
²⁰ E eles, tendo partido, pregaram por todas as partes, cooperando com eles o Senhor e confirmando a palavra  

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Para quem Jesus apareceu primeiro após ressuscitar?",
                        opcoes: [
                            { numero: 1, texto: "Pedro", correta: false },
                            { numero: 2, texto: "Maria Madalena", correta: true },
                            { numero: 3, texto: "Sua mãe, Maria", correta: false },
                            { numero: 4, texto: "João", correta: false }
                        ],
                        explicacao: "Marcos 16:9 - Ressuscitado na manhã do primeiro dia, apareceu primeiro a Maria Madalena.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual foi a 'Grande Comissão' dada por Jesus aos discípulos?",
                        opcoes: [
                            { numero: 1, texto: "Ide por todo o mundo, pregai o evangelho a toda criatura", correta: true },
                            { numero: 2, texto: "Ficai em Jerusalém até que do alto sejais revestidos", correta: false },
                            { numero: 3, texto: "Curai apenas os judeus", correta: false },
                            { numero: 4, texto: "Escrevei tudo o que vistes", correta: false }
                        ],
                        explicacao: "Marcos 16:15 - Jesus envia Seus seguidores para a missão universal.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu com Jesus após falar com os discípulos?",
                        opcoes: [
                            { numero: 1, texto: "Ele se retirou para o deserto", correta: false },
                            { numero: 2, texto: "Foi recebido no céu e assentou-se à direita de Deus", correta: true },
                            { numero: 3, texto: "Ele permaneceu visível na terra para sempre", correta: false },
                            { numero: 4, texto: "Ele desapareceu em uma nuvem de fumaça", correta: false }
                        ],
                        explicacao: "Marcos 16:19 - Concluindo Suas palavras, o Senhor foi elevado ao céu.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};