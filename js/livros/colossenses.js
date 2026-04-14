// js/livros/colossenses.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const colossenses = {
    nome: "Colossenses",
    icone: "📜", // Ícone sugerindo a supremacia de Cristo sobre tudo
    autor: "Paulo",
    //background: "./imagens/colossenses_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "A Supremacia de Cristo",
            texto: ` ¹ Paulo, apóstolo de Jesus Cristo, pela vontade de Deus, e o irmão Timóteo,
² Aos santos e irmãos fiéis em Cristo, que estão em Colossos: Graça a vós, e paz da parte de Deus nosso Pai e do Senhor Jesus Cristo.
³ Graças damos ao Deus e Pai de nosso Senhor Jesus Cristo, orando sempre por vós,
⁴ Porquanto ouvimos da vossa fé em Cristo Jesus, e do amor que tendes para com todos os santos;
⁵ Por causa da esperança que vos está reservada nos céus, da qual já antes ouvistes pela palavra da verdade do evangelho,
⁶ Que já chegou a vós, como também está em todo o mundo; e já vai frutificando, como também entre vós, desde o dia em que ouvistes e conhecestes a graça de Deus em verdade;
⁷ Como aprendestes de Epafras, nosso amado conservo, que para vós é um fiel ministro de Cristo,
⁸ O qual nos declarou também o vosso amor no Espírito.
⁹ Por esta razão, nós também, desde o dia em que o ouvimos, não cessamos de orar por vós, e de pedir que sejais cheios do conhecimento da sua vontade, em toda a sabedoria e inteligência espiritual;
¹⁰ Para que possais andar dignamente diante do Senhor, agradando-lhe em tudo, frutificando em toda a boa obra, e crescendo no conhecimento de Deus;
¹¹ Fortalecidos em todo o poder, segundo a força da sua glória, em toda a paciência, e longanimidade com gozo;
¹² Dando graças ao Pai que nos fez idôneos para participar da herança dos santos na luz;
¹³ O qual nos tirou da potestade das trevas, e nos transportou para o reino do Filho do seu amor;
¹⁴ Em quem temos a redenção pelo seu sangue, a saber, a remissão dos pecados;
¹⁵ O qual é imagem do Deus invisível, o primogênito de toda a criação;
¹⁶ Porque nele foram criadas todas as coisas que há nos céus e na terra, visíveis e invisíveis, sejam tronos, sejam dominações, sejam principados, sejam potestades. Tudo foi criado por ele e para ele.
¹⁷ E ele é antes de todas as coisas, e todas as coisas subsistem por ele.
¹⁸ E ele é a cabeça do corpo, da igreja; é o princípio e o primogênito dentre os mortos, para que em tudo tenha a preeminência.
¹⁹ Porque foi do agrado do Pai que toda a plenitude nele habitasse,
²⁰ E que, havendo por ele feito a paz pelo sangue da sua cruz, por meio dele reconciliasse consigo mesmo todas as coisas, tanto as que estão na terra, como as que estão nos céus.
²¹ A vós também, que noutro tempo éreis estranhos, e inimigos no entendimento pelas vossas obras más, agora contudo vos reconciliou
²² No corpo da sua carne, pela morte, para perante ele vos apresentar santos, e irrepreensíveis, e inculpáveis,
²³ Se, na verdade, permanecerdes fundados e firmes na fé, e não vos moverdes da esperança do evangelho que tendes ouvido, o qual foi pregado a toda criatura que há debaixo do céu, e do qual eu, Paulo, estou feito ministro.
²⁴ Regozijo-me agora no que padeço por vós, e na minha carne cumpro o resto das aflições de Cristo, pelo seu corpo, que é a igreja;
²⁵ Da qual eu estou feito ministro segundo a dispensação de Deus, que me foi concedida para convosco, para cumprir a palavra de Deus;
²⁶ O mistério que esteve oculto desde todos os séculos, e em todas as gerações, e que agora foi manifesto aos seus santos;
²⁷ Aos quais Deus quis fazer conhecer quais são as riquezas da glória deste mistério entre os gentios, que é Cristo em vós, esperança da glória;
²⁸ A quem anunciamos, admoestando a todo o homem, e ensinando a todo o homem em toda a sabedoria; para que apresentemos todo o homem perfeito em Cristo Jesus;
²⁹ E para isto também trabalho, combatendo segundo a sua eficácia, que opera em mim poderosamente. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Paulo descreve a relação de Cristo com a criação no capítulo 1?",
                        opcoes: [
                            { numero: 1, texto: "Ele é a imagem do Deus invisível, o primogênito de toda a criação", correta: true },
                            { numero: 2, texto: "Ele foi criado depois dos anjos", correta: false },
                            { numero: 3, texto: "Ele não tem relação com o mundo físico", correta: false },
                            { numero: 4, texto: "Ele é apenas um profeta importante", correta: false }
                        ],
                        explicacao: "Colossenses 1:15 - O qual é imagem do Deus invisível, o primogênito de toda a criação.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Paulo diz sobre a reconciliação através de Cristo no versículo 20?",
                        opcoes: [
                            { numero: 1, texto: "Que ela depende dos sacrifícios de animais", correta: false },
                            { numero: 2, texto: "Que por ele reconciliasse consigo todas as coisas, havendo feito a paz pelo sangue da sua cruz", correta: true },
                            { numero: 3, texto: "Que a paz é impossível", correta: false },
                            { numero: 4, texto: "Que só os judeus foram reconciliados", correta: false }
                        ],
                        explicacao: "Colossenses 1:20 - E que, havendo por ele feito a paz pelo sangue da sua cruz, por meio dele reconciliasse consigo todas as coisas.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "Cuidado com as Falsas Filosofias",
            texto: ` ¹ Porque quero que saibais quão grande combate tenho por vós, e pelos que estão em Laodiceia, e por quantos não viram o meu rosto em carne;
² Para que os seus corações sejam consolados, e estejam unidos em amor, e em todas as riquezas da plena certeza da inteligência, para conhecimento do mistério de Deus e Pai, e de Cristo,
³ Em quem estão escondidos todos os tesouros da sabedoria e do conhecimento.
⁴ E digo isto, para que ninguém vos engane com palavras persuasivas.
⁵ Porque, ainda que esteja ausente quanto ao corpo, contudo, em espírito estou convosco, regozijando-me e vendo a vossa ordem e a firmeza da vossa fé em Cristo.
⁶ Como, pois, recebestes o Senhor Jesus Cristo, assim também andai nele,
⁷ Enraizados e edificados nele, e confirmados na fé, assim como fostes ensinados, nela abundando em ação de graças.
⁸ Tende cuidado, para que ninguém vos faça presa sua, por meio de filosofias e vãs sutilezas, segundo a tradição dos homens, segundo os rudimentos do mundo, e não segundo Cristo;
⁹ Porque nele habita corporalmente toda a plenitude da divindade;
¹⁰ E estais perfeitos nele, que é a cabeça de todo o principado e potestade;
¹¹ No qual também estais circuncidados com a circuncisão não feita por mão no despojo do corpo dos pecados da carne, pela circuncisão de Cristo;
¹² Sepultados com ele no batismo, nele também ressuscitastes pela fé no poder de Deus, que o ressuscitou dentre os mortos.
¹³ E, quando vós estáveis mortos nos pecados, e na incircuncisão da vossa carne, vos vivificou juntamente com ele, perdoando-vos todas as ofensas,
¹⁴ Havendo riscado a cédula que era contra nós nas suas ordenanças, a qual de alguma maneira nos era contrária, e a tirou do meio de nós, cravando-a na cruz.
¹⁵ E, despojando os principados e potestades, os expôs publicamente e deles triunfou em si mesmo.
¹⁶ Portanto, ninguém vos julgue pelo comer, ou pelo beber, ou por causa dos dias de festa, ou da lua nova, ou dos sábados,
¹⁷ Que são sombras das coisas futuras, mas o corpo é de Cristo.
¹⁸ Ninguém vos domine a seu arbítrio com pretexto de humildade e culto dos anjos, envolvendo-se em coisas que não viu; estando em vão inchado na sua carnal compreensão,
¹⁹ E não ligado à cabeça, da qual todo o corpo, provido e organizado pelas juntas e ligaduras, vai crescendo em aumento de Deus.
²⁰ Se, pois, estais mortos com Cristo quanto aos rudimentos do mundo, por que vos carregam ainda de ordenanças, como se vivêsseis no mundo, tais como:
²¹ Não toques, não proves, não manuseies?
²² As quais coisas todas perecem pelo uso, segundo os preceitos e doutrinas dos homens;
²³ As quais têm, na verdade, alguma aparência de sabedoria, em devoção voluntária, humildade, e em disciplina do corpo, mas não são de valor algum senão para a satisfação da carne. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Paulo diz sobre o que habita em Cristo corporalmente?",
                        opcoes: [
                            { numero: 1, texto: "Toda a plenitude da divindade", correta: true },
                            { numero: 2, texto: "Apenas uma parte do poder de Deus", correta: false },
                            { numero: 3, texto: "Um espírito humano comum", correta: false },
                            { numero: 4, texto: "Uma grande sabedoria grega", correta: false }
                        ],
                        explicacao: "Colossenses 2:9 - Porque nele habita corporalmente toda a plenitude da divindade.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Cristo fez com a 'cédula que era contra nós nas suas ordenanças'?",
                        opcoes: [
                            { numero: 1, texto: "Guardou-a em um cofre", correta: false },
                            { numero: 2, texto: "Riscou-a e a tirou do meio de nós, cravando-a na cruz", correta: true },
                            { numero: 3, texto: "Entregou-a aos romanos", correta: false },
                            { numero: 4, texto: "Aumentou o seu valor", correta: false }
                        ],
                        explicacao: "Colossenses 2:14 - Havendo riscado a cédula que era contra nós nas suas ordenanças... e a tirou do meio de nós, cravando-a na cruz.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "A Vida em Cristo e a Família",
            texto: ` ¹ Portanto, se já ressuscitastes com Cristo, buscai as coisas que são de cima, onde Cristo está assentado à destra de Deus.
² Pensai nas coisas que são de cima, e não nas que são da terra;
³ Porque já estais mortos, e a vossa vida está escondida com Cristo em Deus.
⁴ Quando Cristo, que é a nossa vida, se manifestar, então também vós vos manifestareis com ele em glória.
⁵ Mortificai, pois, os vossos membros, que estão sobre a terra: a fornicação, a impureza, a afeição desordenada, a vil concupiscência, e a avareza, que é idolatria;
⁶ Pelas quais coisas vem a ira de Deus sobre os filhos da desobediência;
⁷ Nas quais, também, em outro tempo andastes, quando vivíeis nelas.
⁸ Mas agora, despojai-vos também de tudo: da ira, da cólera, da malícia, da maledicência, das palavras torpes da vossa boca.
⁹ Não mintais uns aos outros, pois que já vos despistes do velho homem com os seus feitos,
¹⁰ E vos vestistes do novo, que se renova para o conhecimento, segundo a imagem daquele que o criou;
¹¹ Onde não há grego, nem judeu, circuncisão, nem incircuncisão, bárbaro, cita, servo ou livre; mas Cristo é tudo, e em todos.
¹² Revesti-vos, pois, como eleitos de Deus, santos e amados, de entranhas de misericórdia, de benignidade, humildade, mansidão, longanimidade;
¹³ Suportando-vos uns aos outros, e perdoando-vos uns aos outros, se alguém tiver queixa contra outro; assim como Cristo vos perdoou, assim fazei vós também.
¹⁴ E, sobre tudo isto, revesti-vos de amor, que é o vínculo da perfeição.
¹⁵ E a paz de Deus, para a qual também fostes chamados em um corpo, domine em vossos corações; e sede agradecidos.
¹⁶ A palavra de Cristo habite em vós abundantemente, em toda a sabedoria, ensinando-vos e admoestando-vos uns aos outros, com salmos, hinos e cânticos espirituais, cantando ao Senhor com graça em vosso coração.
¹⁷ E, quanto fizerdes por palavras ou por obras, fazei tudo em nome do Senhor Jesus, dando por ele graças a Deus Pai.
¹⁸ Vós, mulheres, estai sujeitas a vossos próprios maridos, como convém no Senhor.
¹⁹ Vós, maridos, amai a vossas esposas, e não vos irriteis contra elas.
²⁰ Vós, filhos, obedecei em tudo a vossos pais, porque isto é agradável ao Senhor.
²¹ Vós, pais, não irriteis a vossos filhos, para que não percam o ânimo.
²² Vós, servos, obedecei em tudo a vossos senhores segundo a carne, não servindo só na aparência, como para agradar aos homens, mas em simplicidade de coração, temendo a Deus.
²³ E tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor, e não aos homens,
²⁴ Sabendo que recebereis do Senhor o galardão da herança, porque a Cristo, o Senhor, servis.
²⁵ Mas quem fizer agravo receberá o agravo que fizer; pois não há acepção de pessoas. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Se já ressuscitastes com Cristo, o que deveis buscar?",
                        opcoes: [
                            { numero: 1, texto: "As coisas que são de baixo", correta: false },
                            { numero: 2, texto: "As coisas que são de cima, onde Cristo está assentado", correta: true },
                            { numero: 3, texto: "Apenas prazeres terrenos", correta: false },
                            { numero: 4, texto: "Riquezas e fama", correta: false }
                        ],
                        explicacao: "Colossenses 3:1 - Portanto, se já ressuscitastes com Cristo, buscai as coisas que são de cima, onde Cristo está assentado à destra de Deus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como tudo o que fizerdes, por palavras ou por obras, deve ser feito?",
                        opcoes: [
                            { numero: 1, texto: "Em nome do Senhor Jesus, dando por ele graças a Deus Pai", correta: true },
                            { numero: 2, texto: "Para ser elogiado pelos homens", correta: false },
                            { numero: 3, texto: "De má vontade", correta: false },
                            { numero: 4, texto: "Apenas se houver lucro", correta: false }
                        ],
                        explicacao: "Colossenses 3:17 - E, quanto fizerdes por palavras ou por obras, fazei tudo em nome do Senhor Jesus, dando por ele graças a Deus Pai.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "Perseverança e Saudações",
            texto: ` ¹ Vós, senhores, fazei o que for de justiça e equidade a vossos servos, sabendo que também tendes um Senhor nos céus.
² Perseverai em oração, velando nela com ação de graças;
³ Orando também juntamente por nós, para que Deus nos abra a porta da palavra, a fim de falarmos do mistério de Cristo, pelo qual estou também preso;
⁴ Para que o manifeste, como me convém falar.
⁵ Andai com sabedoria para com os que estão de fora, remindo o tempo.
⁶ A vossa palavra seja sempre agradável, temperada com sal, para que saibais como vos convém responder a cada um.
⁷ Tíquico, irmão amado e fiel ministro, e conservo no Senhor, vos fará saber o meu estado;
⁸ O qual vos enviei para o mesmo fim, para que saiba do vosso estado e console os vossos corações;
⁹ Juntamente com Onésimo, amado e fiel irmão, que é dos vossos; eles vos farão saber tudo o que por aqui se passa.
¹⁰ Aristarco, que está preso comigo, vos saúda, e Marcos, o sobrinho de Barnabé, acerca do qual já recebestes mandamentos; se ele for ter convosco, recebei-o;
¹¹ E Jesus, chamado Justo; os quais são da circuncisão; são estes unicamente os meus cooperadores no reino de Deus; e para mim têm sido consolação.
¹² Saúda-vos Epafras, que é dos vossos, servo de Cristo, combatendo sempre por vós em orações, para que vos conserveis firmes, perfeitos e consumados em toda a vontade de Deus.
¹³ Pois eu lhe dou testemunho de que tem grande zelo por vós, e pelos que estão em Laodiceia, e pelos que estão em Hierápolis.
¹⁴ Saúda-vos Lucas, o médico amado, e Demas.
¹⁵ Saudai aos irmãos que estão em Laodiceia e a Ninfa e à igreja que está em sua casa.
¹⁶ E, quando esta epístola tiver sido lida entre vós, fazei que também seja lida na igreja dos laodicenses, e a que veio de Laodiceia lede-a vós também.
¹⁷ E dizei a Arquipo: Atenta para o ministério que recebeste no Senhor, para que o cumpras.
¹⁸ Saudação de minha mão, de Paulo. Lembrai-vos das minhas prisões. A graça seja convosco. Amém. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como deve ser a nossa palavra, segundo Colossenses 4:6?",
                        opcoes: [
                            { numero: 1, texto: "Sempre agradável, temperada com sal", correta: true },
                            { numero: 2, texto: "Dura e julgadora", correta: false },
                            { numero: 3, texto: "Rápida e sem pensar", correta: false },
                            { numero: 4, texto: "Sempre em segredo", correta: false }
                        ],
                        explicacao: "Colossenses 4:6 - A vossa palavra seja sempre agradável, temperada com sal, para que saibais como vos convém responder a cada um.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Paulo pede para que façam em relação à sua prisão?",
                        opcoes: [
                            { numero: 1, texto: "Que chorem por ele", correta: false },
                            { numero: 2, texto: "Lembrai-vos das minhas prisões (cadeias)", correta: true },
                            { numero: 3, texto: "Que tentem soltá-lo à força", correta: false },
                            { numero: 4, texto: "Que não contem a ninguém", correta: false }
                        ],
                        explicacao: "Colossenses 4:18 - ...Lembrai-vos das minhas prisões. A graça seja convosco. Amém.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};