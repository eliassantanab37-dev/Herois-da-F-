const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const ageu = {
    nome: "Ageu",
    icone: "",
    autor: "Ageu",
    //background: "./imagens/ageu_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "Exortação para Edificar o Templo",
            texto: `¹ No segundo ano do rei Dario, no sexto mês, no primeiro dia do mês, veio a palavra do Senhor, por intermédio do profeta Ageu, a Zorobabel, filho de Sealtiel, governador de Judá, e a Josué, filho de Jozadaque, o sumo sacerdote, dizendo:
² Assim fala o Senhor dos Exércitos, dizendo: Este povo diz: Não veio ainda o tempo, o tempo em que a casa do Senhor deve ser edificada.
³ Veio, pois, a palavra do Senhor, por intermédio do profeta Ageu, dizendo:
⁴ Porventura é para vós tempo de habitardes nas vossas casas forradas, enquanto esta casa fica deserta?
⁵ Ora, pois, assim diz o Senhor dos Exércitos: Considerai os vossos caminhos.
⁶ Semeais muito, e recolheis pouco; comeis, porém não vos fartais; bebeis, porém não vos saciais; vestis-vos, porém ninguém se aquece; e o que recebe salário, recebe-o num saco furado.
⁷ Assim diz o Senhor dos Exércitos: Considerai os vossos caminhos.
⁸ Subi ao monte, e trazei madeira, e edificai a casa; e dela me agradarei, e serei glorificado, diz o Senhor.
⁹ Esperastes o muito, mas eis que veio a ser pouco; e esse pouco, quando o trouxestes para casa, eu dissipei com um sopro. Por que causa? Disse o Senhor dos Exércitos. Por causa da minha casa, que está deserta, enquanto cada um de vós corre à sua própria casa.
¹⁰ Por isso retém os céus sobre vós o orvalho, e a terra detém os seus frutos.
¹¹ E mandei vir a seca sobre a terra, e sobre os montes, e sobre o trigo, e sobre o mosto, e sobre o azeite, e sobre o que a terra produz; como também sobre os homens, e sobre o gado, e sobre todo o trabalho das mãos.
¹² Então Zorobabel, filho de Sealtiel, e Josué, filho de Jozadaque, sumo sacerdote, e todo o restante do povo obedeceram à voz do Senhor seu Deus, e às palavras do profeta Ageu, assim como o Senhor seu Deus o enviara; e temeu o povo diante do Senhor.
¹³ Então Ageu, o mensageiro do Senhor, falou ao povo conforme a mensagem do Senhor, dizendo: Eu sou convosco, diz o Senhor.
¹⁴ E o Senhor suscitou o espírito de Zorobabel, filho de Sealtiel, governador de Judá, e o espírito de Josué, filho de Jozadaque, sumo sacerdote, e o espírito de todo o restante do povo, e eles vieram, e fizeram a obra na casa do Senhor dos Exércitos, seu Deus,
¹⁵ Ao vigésimo quarto dia do sexto mês, no segundo ano do rei Dario.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o povo dizia sobre o tempo de edificar a casa do Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Que o tempo era chegado", correta: false },
                            { numero: 2, texto: "Ainda não veio o tempo", correta: true },
                            { numero: 3, texto: "Que não deveriam edificar", correta: false },
                            { numero: 4, texto: "Que o templo já estava pronto", correta: false }
                        ],
                        explicacao: "Ageu 1:2 - ...Este povo diz: Não veio ainda o tempo, o tempo em que a casa do Senhor deve ser edificada.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontecia com o salário de quem trabalhava, segundo a mensagem de Ageu?",
                        opcoes: [
                            { numero: 1, texto: "Era guardado em cofres", correta: false },
                            { numero: 2, texto: "Era multiplicado por Deus", correta: false },
                            { numero: 3, texto: "Metia-se num saquitel furado", correta: true },
                            { numero: 4, texto: "Era usado para comprar ouro", correta: false }
                        ],
                        explicacao: "Ageu 1:6 - ...e o que recebe salário, recebe-o para o meter num saquitel furado.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Onde o povo deveria ir para buscar madeira para a casa do Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Ao Líbano", correta: false },
                            { numero: 2, texto: "Ao Egito", correta: false },
                            { numero: 3, texto: "Ao deserto", correta: false },
                            { numero: 4, texto: "Ao monte", correta: true }
                        ],
                        explicacao: "Ageu 1:8 - Subi ao monte, e trazei madeira, e edificai a casa...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "A Glória da Segunda Casa",
            texto: ` ¹ No sétimo mês, ao vigésimo primeiro dia do mês, veio a palavra do Senhor por intermédio do profeta Ageu, dizendo:
² Fala agora a Zorobabel, filho de Sealtiel, governador de Judá, e a Josué, filho de Jozadaque, sumo sacerdote, e ao restante do povo, dizendo:
³ Quem há entre vós que, tendo ficado, viu esta casa na sua primeira glória? E como a vedes agora? Não é esta como nada diante dos vossos olhos, comparada com aquela?
⁴ Ora, pois, esforça-te, Zorobabel, diz o Senhor, e esforça-te, Josué, filho de Jozadaque, sumo sacerdote, e esforça-te, todo o povo da terra, diz o Senhor, e trabalhai; porque eu sou convosco, diz o Senhor dos Exércitos.
⁵ Segundo a palavra da aliança que fiz convosco, quando saístes do Egito, o meu Espírito permanece no meio de vós; não temais.
⁶ Porque assim diz o Senhor dos Exércitos: Ainda uma vez, daqui a pouco, farei tremer os céus e a terra, o mar e a terra seca;
⁷ E farei tremer todas as nações, e virão coisas preciosas de todas as nações, e encherei esta casa de glória, diz o Senhor dos Exércitos.
⁸ Minha é a prata, e meu é o ouro, disse o Senhor dos Exércitos.
⁹ A glória desta última casa será maior do que a da primeira, diz o Senhor dos Exércitos, e neste lugar darei a paz, diz o Senhor dos Exércitos.
¹⁰ Ao vigésimo quarto dia do mês nono, no segundo ano de Dario, veio a palavra do Senhor por intermédio do profeta Ageu, dizendo:
¹¹ Assim diz o Senhor dos Exércitos: Pergunta agora aos sacerdotes, acerca da lei, dizendo:
¹² Se alguém leva carne santa na orla das suas vestes, e com ela tocar no pão, ou no guisado, ou no vinho, ou no azeite, ou em outro qualquer mantimento, porventura ficará isto santificado? E os sacerdotes responderam: Não.
¹³ E disse Ageu: Se alguém que for contaminado pelo contato com o corpo morto, tocar nalguma destas coisas, ficará ela imunda? E os sacerdotes responderam, dizendo: Ficará imunda.
¹⁴ Então respondeu Ageu, dizendo: Assim é este povo, e assim é esta nação diante de mim, diz o Senhor; e assim é toda a obra das suas mãos; e tudo o que ali oferecem imundo é.
¹⁵ Agora, pois, eu vos rogo, considerai isto, desde este dia em diante, antes que se lançasse pedra sobre pedra no templo do Senhor,
¹⁶ Antes que sucedessem estas coisas, vinha alguém a um montão de grão, de vinte medidas, e havia somente dez; quando vinha ao lagar para tirar cinquenta, havia somente vinte.
¹⁷ Feri-vos com queimadura, e com ferrugem, e com saraiva, em toda a obra das vossas mãos, e não houve entre vós quem voltasse para mim, diz o Senhor.
¹⁸ Considerai, pois, vos rogo, desde este dia em diante; desde o vigésimo quarto dia do mês nono, desde o dia em que se fundou o templo do Senhor, considerai essas coisas.
¹⁹ Porventura há ainda semente no celeiro? Além disso a videira, a figueira, a romeira, a oliveira, não têm dado os seus frutos; mas desde este dia vos abençoarei.
²⁰ E veio a palavra do Senhor segunda vez a Ageu, aos vinte e quatro dias do mês, dizendo:
²¹ Fala a Zorobabel, governador de Judá, dizendo: Farei tremer os céus e a terra;
²² E transtornarei o trono dos reinos, e destruirei a força dos reinos dos gentios; e transtornarei os carros e os que neles andam; e os cavalos e os seus cavaleiros cairão, cada um pela espada do seu irmão.
²³ Naquele dia, diz o Senhor dos Exércitos, tomar-te-ei, ó Zorobabel, servo meu, filho de Sealtiel, diz o Senhor, e far-te-ei como um anel de selar; porque te escolhi, diz o Senhor dos Exércitos.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como seria a glória desta última casa em relação à primeira?",
                        opcoes: [
                            { numero: 1, texto: "Seria menor", correta: false },
                            { numero: 2, texto: "Seria igual", correta: false },
                            { numero: 3, texto: "A glória desta última casa será maior do que a da primeira", correta: true },
                            { numero: 4, texto: "Não teria glória alguma", correta: false }
                        ],
                        explicacao: "Ageu 2:9 - A glória desta última casa será maior do que a da primeira, diz o Senhor dos Exércitos...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor faria com os céus, a terra, o mar e a terra seca?",
                        opcoes: [
                            { numero: 1, texto: "Ainda uma vez, daqui a pouco, farei tremer", correta: true },
                            { numero: 2, texto: "Iria destruir tudo", correta: false },
                            { numero: 3, texto: "Iria acalmar as ondas", correta: false },
                            { numero: 4, texto: "Iria esconder do povo", correta: false }
                        ],
                        explicacao: "Ageu 2:6 - ...Ainda uma vez, daqui a pouco, farei tremer os céus e a terra, o mar e a terra seca;",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como o Senhor descreve Zorobabel no final do capítulo?",
                        opcoes: [
                            { numero: 1, texto: "Como um servo inútil", correta: false },
                            { numero: 2, texto: "Como um anel de selar", correta: true },
                            { numero: 3, texto: "Como um muro de ferro", correta: false },
                            { numero: 4, texto: "Como um capitão de navio", correta: false }
                        ],
                        explicacao: "Ageu 2:23 - ...e te porei como um anel de selar; porque te escolhi, diz o Senhor dos Exércitos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};