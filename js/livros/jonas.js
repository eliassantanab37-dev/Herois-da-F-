const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const jonas = {
    nome: "Jonas",
    icone: "🐳",
    autor: "Jonas",
  //  background: "./imagens/jonas_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "A Fuga de Jonas",
            texto: ` 1 E veio a palavra do Senhor a Jonas, filho de Amitai, dizendo:
2 Levanta-te, vai à grande cidade de Nínive, e clama contra ela, porque a sua malícia subiu até à minha presença.
3 Porém, Jonas se levantou para fugir da presença do Senhor para Társis. E descendo a Jope, achou um navio que ia para Társis; pagou, pois, a sua passagem, e desceu para dentro dele, para ir com eles para Társis, para longe da presença do Senhor.
4 Mas o Senhor mandou ao mar um grande vento, e fez-se no mar uma forte tempestade, e o navio estava a ponto de quebrar-se.
5 Então temeram os marinheiros, e clamavam cada um ao seu deus, e lançaram ao mar as cargas, que estavam no navio, para o aliviarem do seu peso; Jonas, porém, desceu ao porão do navio, e, tendo-se deitado, dormia um profundo sono.
6 E o mestre do navio chegou-se a ele, e disse-lhe: Que tens, dorminhoco? Levanta-te, clama ao teu Deus; talvez assim esse Deus se lembre de nós para que não pereçamos.
7 E diziam cada um ao seu companheiro: Vinde, e lancemos sortes, para que saibamos por que causa nos sobreveio este mal. E lançaram sortes, e a sorte caiu sobre Jonas.
8 Então lhe disseram: Declara-nos tu agora, por causa de quem nos sobreveio este mal. Que ocupação é a tua? Donde vens? Qual é a tua terra? E de que povo és tu?
9 E ele lhes disse: Eu sou hebreu, e temo ao Senhor, o Deus do céu, que fez o mar e a terra seca.
10 Então estes homens se encheram de grande temor, e disseram-lhe: Por que fizeste tu isto? Pois sabiam os homens que fugia da presença do Senhor, porque ele lho tinha declarado.
11 E disseram-lhe: Que te faremos nós, para que o mar se nos acalme? Porque o mar ia se tornando cada vez mais tempestuoso.
12 E ele lhes disse: Levantai-me, e lançai-me ao mar, e o mar se vos aquietará; porque eu sei que por minha causa vos sobreveio esta grande tempestade.
13 Entretanto, os homens remavam, para fazer voltar o navio à terra, mas não podiam, porquanto o mar se ia embravecendo cada vez mais contra eles.
14 Então clamaram ao Senhor, e disseram: Ah, Senhor! Nós te rogamos, que não pereçamos por causa da alma deste homem, e que não ponhas sobre nós o sangue inocente; porque tu, Senhor, fizeste como te aprouve.
15 E levantaram a Jonas, e o lançaram ao mar, e cessou o mar da sua fúria.
16 Temeram, pois, estes homens ao Senhor com grande temor; e ofereceram sacrifício ao Senhor, e fizeram votos.
17 Preparou, pois, o Senhor um grande peixe, para que tragasse a Jonas; e esteve Jonas três dias e três noites nas entranhas do peixe.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Para qual cidade o Senhor ordenou que Jonas fosse pregar?",
                        opcoes: [
                            { numero: 1, texto: "Tarsis", correta: false },
                            { numero: 2, texto: "Nínive", correta: true },
                            { numero: 3, texto: "Jope", correta: false },
                            { numero: 4, texto: "Sidom", correta: false }
                        ],
                        explicacao: "Jonas 1:2 - Levanta-te, vai à grande cidade de Nínive, e clama contra ela...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jonas estava fazendo no navio enquanto a tempestade crescia?",
                        opcoes: [
                            { numero: 1, texto: "Ajudando os marinheiros", correta: false },
                            { numero: 2, texto: "Orando ao Senhor", correta: false },
                            { numero: 3, texto: "Dormindo um profundo sono", correta: true },
                            { numero: 4, texto: "Jogando carga ao mar", correta: false }
                        ],
                        explicacao: "Jonas 1:5 - ...Jonas, porém, descera ao porão do navio, e se deitara, e dormia um profundo sono.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu para que o mar se aquietasse da sua fúria?",
                        opcoes: [
                            { numero: 1, texto: "Os marinheiros jogaram Jonas ao mar", correta: true },
                            { numero: 2, texto: "Jonas começou a orar", correta: false },
                            { numero: 3, texto: "O navio chegou ao porto", correta: false },
                            { numero: 4, texto: "O sol apareceu de repente", correta: false }
                        ],
                        explicacao: "Jonas 1:15 - E levantaram a Jonas, e o lançaram ao mar, e cessou o mar da sua fúria.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "A Oração de Jonas",
            texto: `¹ E orou Jonas ao Senhor, seu Deus, das entranhas do peixe.
² E disse: Na minha angústia clamei ao Senhor, e ele me respondeu; do ventre da sepultura gritei, e tu ouviste a minha voz.
³ Porque tu me lançaste no profundo, no coração dos mares, e a corrente das águas me cercou; todas as tuas ondas e as tuas vagas têm passado por cima de mim.
⁴ E eu disse: Lançado estou de diante dos teus olhos; todavia tornarei a ver o teu santo templo.
⁵ As águas me cercaram até à alma, o abismo me rodeou, e as algas se enrolaram na minha cabeça.
⁶ Eu desci até aos fundamentos dos montes; a terra me encerrou para sempre com os seus ferrolhos; mas tu fizeste subir a minha vida da perdição, ó Senhor meu Deus.
⁷ Quando desfalecia em mim a minha alma, lembrei-me do Senhor; e entrou a ti a minha oração, no teu santo templo.
⁸ Os que observam as falsas vaidades deixam a sua misericórdia.
⁹ Mas eu te oferecerei sacrifício com a voz do agradecimento; o que votei pagarei. Do Senhor vem a salvação.
¹⁰ Falou, pois, o Senhor ao peixe, e este vomitou a Jonas na terra seca.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quanto tempo Jonas ficou no ventre do grande peixe?",
                        opcoes: [
                            { numero: 1, texto: "Sete dias e sete noites", correta: false },
                            { numero: 2, texto: "Um dia inteiro", correta: false },
                            { numero: 3, texto: "Quarenta dias", correta: false },
                            { numero: 4, texto: "Três dias e três noites", correta: true }
                        ],
                        explicacao: "Jonas 1:17 - ...e esteve Jonas três dias e três noites nas entranhas do peixe.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "De onde Jonas orou ao Senhor seu Deus?",
                        opcoes: [
                            { numero: 1, texto: "Das entranhas do peixe", correta: true },
                            { numero: 2, texto: "Do alto de um monte", correta: false },
                            { numero: 3, texto: "Das praias de Nínive", correta: false },
                            { numero: 4, texto: "Do porão do navio", correta: false }
                        ],
                        explicacao: "Jonas 2:1 - E orou Jonas ao Senhor, seu Deus, das entranhas do peixe.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o peixe fez após a oração de Jonas e a ordem do Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Mergulhou no abismo", correta: false },
                            { numero: 2, texto: "Vomitou a Jonas na terra seca", correta: true },
                            { numero: 3, texto: "Levou Jonas até Tarsis", correta: false },
                            { numero: 4, texto: "Morreu na praia", correta: false }
                        ],
                        explicacao: "Jonas 2:10 - Falou, pois, o Senhor ao peixe, e este vomitou a Jonas na terra seca.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "A Pregação em Nínive",
            texto: `¹ E veio a palavra do Senhor segunda vez a Jonas, dizendo:
² Levanta-te, e vai à grande cidade de Nínive, e prega contra ela a mensagem que eu te digo.
³ E levantou-se Jonas, e foi a Nínive, segundo a palavra do Senhor. Ora, Nínive era uma cidade muito grande, de três dias de caminho.
⁴ E começou Jonas a entrar pela cidade caminho de um dia, e pregava, dizendo: Ainda quarenta dias, e Nínive será subvertida.
⁵ E os homens de Nínive creram em Deus; e proclamaram um jejum, e vestiram-se de saco, desde o maior até ao menor.
⁶ Esta palavra chegou também ao rei de Nínive; e ele levantou-se do seu trono, e tirou de si as suas vestes, e cobriu-se de saco, e sentou-se sobre a cinza.
⁷ E fez uma proclamação que se divulgou em Nínive, pelo decreto do rei e dos seus grandes, dizendo: Nem homens, nem animais, nem bois, nem ovelhas provem coisa alguma, nem se lhes dê alimentos, nem bebam água;
⁸ Mas os homens e os animais sejam cobertos de sacos, e clamem fortemente a Deus, e convertam-se, cada um do seu mau caminho, e da violência que há nas suas mãos.
⁹ Quem sabe se se voltará Deus, e se arrependerá, e se apartará do furor da sua ira, de sorte que não pereçamos?
¹⁰ E Deus viu as obras deles, como se converteram do seu mau caminho; e Deus se arrependeu do mal que tinha anunciado lhes faria, e não o fez.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era a mensagem que Jonas pregava pelas ruas de Nínive?",
                        opcoes: [
                            { numero: 1, texto: "Ainda quarenta dias, e Nínive será subvertida", correta: true },
                            { numero: 2, texto: "Arrependei-vos e mudai para Judá", correta: false },
                            { numero: 3, texto: "O Senhor enviará chuva sobre vós", correta: false },
                            { numero: 4, texto: "Vinde e adorai no templo", correta: false }
                        ],
                        explicacao: "Jonas 3:4 - ...Ainda quarenta dias, e Nínive será subvertida.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual foi a reação do povo de Nínive à pregação de Jonas?",
                        opcoes: [
                            { numero: 1, texto: "Eles zombaram de Jonas", correta: false },
                            { numero: 2, texto: "Creram em Deus e proclamaram um jejum", correta: true },
                            { numero: 3, texto: "Prenderam Jonas na prisão", correta: false },
                            { numero: 4, texto: "Fugiram para o deserto", correta: false }
                        ],
                        explicacao: "Jonas 3:5 - E os homens de Nínive creram em Deus; e proclamaram um jejum, e vestiram-se de saco...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o rei de Nínive fez ao ouvir a notícia?",
                        opcoes: [
                            { numero: 1, texto: "Mandou matar os profetas", correta: false },
                            { numero: 2, texto: "Fugiu do seu palácio", correta: false },
                            { numero: 3, texto: "Levantou-se do seu trono, tirou as vestes e sentou-se sobre cinza", correta: true },
                            { numero: 4, texto: "Convocou o seu exército", correta: false }
                        ],
                        explicacao: "Jonas 3:6 - ...levantou-se do seu trono, e tirou de si as suas vestes, e cobriu-se de saco, e sentou-se sobre a cinza.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "O Desagrado de Jonas e a Planta",
            texto: ` ¹ Mas isso desagradou extremamente a Jonas, e ele ficou irado.
² E orou ao Senhor, e disse: Ah! Senhor! Não foi esta minha palavra, estando ainda na minha terra? Por isso é que me preveni, fugindo para Társis, pois sabia que és Deus compassivo e misericordioso, longânimo e grande em benignidade, e que te arrependes do mal.
³ Peço-te, pois, ó Senhor, tira-me a vida, porque melhor me é morrer do que viver.
⁴ E disse o Senhor: Fazes bem que assim te ires?
⁵ Então Jonas saiu da cidade, e sentou-se ao oriente desta cidade; e ali fez uma cabana, e sentou-se debaixo dela, à sombra, até ver o que aconteceria à cidade.
⁶ E fez o Senhor Deus nascer uma aboboreira, e ela subiu por cima de Jonas, para que fizesse sombra sobre a sua cabeça, a fim de o livrar do seu enfado; e Jonas se alegrou em extremo por causa da aboboreira.
⁷ Mas Deus enviou um verme, no dia seguinte ao subir da alva, o qual feriu a aboboreira, e esta se secou.
⁸ E aconteceu que, aparecendo o sol, Deus mandou um vento calmoso oriental, e o sol feriu a cabeça de Jonas; e ele desmaiou, e desejou com toda a sua alma morrer, dizendo: Melhor me é morrer do que viver.
⁹ Então disse Deus a Jonas: Fazes bem que assim te ires por causa da aboboreira? E ele disse: Faço bem que me revolte até à morte.
¹⁰ E disse o Senhor: Tiveste tu compaixão da aboboreira, na qual não trabalhaste, nem a fizeste crescer, que numa noite nasceu, e numa noite pereceu;
¹¹ E não hei de eu ter compaixão da grande cidade de Nínive, em que estão mais de cento e vinte mil pessoas que não sabem discernir entre a sua mão direita e a sua mão esquerda, e também muitos animais?
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que Jonas ficou muito desgostoso e acendeu-se nele a ira?",
                        opcoes: [
                            { numero: 1, texto: "Porque Deus teve misericórdia de Nínive", correta: true },
                            { numero: 2, texto: "Porque o peixe o deixou longe de Nínive", correta: false },
                            { numero: 3, texto: "Porque o povo não acreditou nele", correta: false },
                            { numero: 4, texto: "Porque ele perdeu o seu caminho", correta: false }
                        ],
                        explicacao: "Jonas 4:1-2 - Mas isso desagradou extremamente a Jonas, e ele se irou... pois sabia que és Deus piedoso e misericordioso...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Deus fez nascer para fazer sombra sobre a cabeça de Jonas?",
                        opcoes: [
                            { numero: 1, texto: "Uma palmeira", correta: false },
                            { numero: 2, texto: "Uma videira", correta: false },
                            { numero: 3, texto: "Uma aboboreira (ou rícino)", correta: true },
                            { numero: 4, texto: "Uma oliveira", correta: false }
                        ],
                        explicacao: "Jonas 4:6 - E fez o Senhor Deus nascer uma aboboreira, que subiu por cima de Jonas, para que fizesse sombra sobre a sua cabeça...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quantas pessoas havia em Nínive que não sabiam discernir entre a mão direita e a esquerda?",
                        opcoes: [
                            { numero: 1, texto: "Mais de cento e vinte mil pessoas", correta: true },
                            { numero: 2, texto: "Cinquenta mil pessoas", correta: false },
                            { numero: 3, texto: "Dez mil pessoas", correta: false },
                            { numero: 4, texto: "Um milhão de pessoas", correta: false }
                        ],
                        explicacao: "Jonas 4:11 - E não hei de eu ter compaixão da grande cidade de Nínive, em que estão mais de cento e vinte mil homens que não sabem discernir entre a sua mão direita e a sua mão esquerda...",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};