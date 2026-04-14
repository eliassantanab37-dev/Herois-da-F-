// js/livros/filipenses.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const filipenses = {
    nome: "filipenses",
    icone: "📜", // Ícone sugerindo a supremacia de Cristo sobre tudo
    autor: "Paulo",
    //background: "./filipenses_bg.jpg",

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
            texto: ` ¹ Paulo e Timóteo, servos de Jesus Cristo, a todos os santos em Cristo Jesus, que estão em Filipos, com os bispos e diáconos:
² Graça a vós, e paz da parte de Deus nosso Pai e da do Senhor Jesus Cristo.
³ Dou graças ao meu Deus todas as vezes que me lembro de vós,
⁴ Fazendo sempre com alegria oração por vós em todas as minhas súplicas,
⁵ Pela vossa cooperação no evangelho desde o primeiro dia até agora.
⁶ Tendo por certo isto mesmo, que aquele que em vós começou a boa obra a aperfeiçoará até ao dia de Jesus Cristo;
⁷ Como tenho por justo sentir isto de vós todos, porque vos retenho em meu coração, pois todos vós fostes participantes da minha graça, tanto nas minhas prisões como na defesa e confirmação do evangelho.
⁸ Porque Deus me é testemunha das saudades que de todos vós tenho, em entranhável afeição de Jesus Cristo.
⁹ E peço isto: que o vosso amor cresça ainda mais e mais em ciência e em todo o conhecimento,
¹⁰ Para que aproveis as coisas excelentes, para que sejais sinceros, e sem escândalo algum até ao dia de Cristo;
¹¹ Cheios dos frutos de justiça, que são por Jesus Cristo, para glória e louvor de Deus.
¹² E quero, irmãos, que saibais que as coisas que me aconteceram contribuíram para maior proveito do evangelho;
¹³ De maneira que as minhas prisões em Cristo foram manifestas por toda a guarda pretoriana, e por todos os demais lugares;
¹⁴ E muitos dos irmãos no Senhor, tomando ânimo com as minhas prisões, ousam falar a palavra mais confiadamente, sem temor.
¹⁵ Verdade é que também alguns pregam a Cristo por inveja e contenda, mas outros de boa vontade;
¹⁶ Uns, na verdade, anunciam a Cristo por contenção, não puramente, julgando acrescentar aflição às minhas prisões.
¹⁷ Mas outros, por amor, sabendo que fui posto para defesa do evangelho.
¹⁸ Mas que importa? Contanto que Cristo seja anunciado de toda a maneira, ou com fingimento ou em verdade, nisto me regozijo, e me regozijarei ainda.
¹⁹ Porque sei que disto me resultará salvação, pela vossa oração e pelo socorro do Espírito de Jesus Cristo,
²⁰ Segundo a minha intensa expectação e esperança, de que em nada serei confundido; antes, com toda a confiança, Cristo será, tanto agora como sempre, engrandecido no meu corpo, seja pela vida, seja pela morte.
²¹ Porque para mim o viver é Cristo, e o morrer é ganho.
²² Mas, se o viver na carne me der fruto da minha obra, não sei então o que deva escolher.
²³ Mas de ambos os lados estou em aperto, tendo desejo de partir, e estar com Cristo, porque isto é ainda muito melhor.
²⁴ Mas julgo mais necessário, por amor de vós, ficar na carne.
²⁵ E, tendo esta confiança, sei que ficarei, e permanecerei com todos vós para proveito vosso e gozo da fé,
²⁶ Para que a vossa glória cresça por mim em Cristo Jesus, pela minha nova ida a vós.
²⁷ Somente deveis portar-vos dignamente conforme o evangelho de Cristo, para que, quer vá e vos veja, quer esteja ausente, ouça acerca de vós que estais num mesmo espírito, combatendo juntamente com o mesmo ânimo pela fé do evangelho.
²⁸ E em nada vos espanteis dos que resistem, o que para eles, na verdade, é indício de perdição, mas para vós de salvação, e isto de Deus.
²⁹ Porque a vós vos foi concedido, em relação a Cristo, não somente crer nele, como também padecer por ele,
³⁰ Tendo o mesmo combate que já em mim tendes visto e agora ouvis estar em mim. 

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
            texto: ` ¹ Portanto, se há algum conforto em Cristo, se alguma consolação de amor, se alguma comunhão no Espírito, se alguns entranháveis afetos e compaixões,
² Completai o meu gozo, para que sintais o mesmo, tendo o mesmo amor, o mesmo ânimo, sentindo uma mesma coisa.
³ Nada façais por contenda ou por vanglória, mas por humildade; cada um considere os outros superiores a si mesmo.
⁴ Não atente cada um para o que é propriamente seu, mas cada qual também para o que é dos outros.
⁵ De sorte que haja em vós o mesmo sentimento que houve também em Cristo Jesus,
⁶ Que, sendo em forma de Deus, não teve por usurpação ser igual a Deus,
⁷ Mas fez a si mesmo de nenhuma reputação, tomando a forma de servo, fazendo-se semelhante aos homens;
⁸ E, achado na forma de homem, humilhou-se a si mesmo, sendo obediente até à morte, e morte de cruz.
⁹ Por isso, também Deus o exaltou soberanamente, e lhe deu um nome que é sobre todo o nome;
¹⁰ Para que ao nome de Jesus se dobre todo o joelho dos que estão nos céus, e na terra, e debaixo da terra,
¹¹ E toda a língua confesse que Jesus Cristo é o Senhor, para glória de Deus Pai.
¹² De sorte que, meus amados, assim como sempre obedecestes, não só na minha presença, mas muito mais agora na minha ausência, assim também operai a vossa salvação com temor e tremor;
¹³ Porque Deus é o que opera em vós tanto o querer como o efetuar, segundo a sua boa vontade.
¹⁴ Fazei todas as coisas sem murmurações nem contendas;
¹⁵ Para que sejais irrepreensíveis e sinceros, filhos de Deus inculpáveis, no meio de uma geração corrompida e perversa, entre a qual resplandeceis como astros no mundo;
¹⁶ Retendo a palavra da vida, para que no dia de Cristo possa gloriar-me de não ter corrido em vão nem trabalhado em vão.
¹⁷ E, ainda que seja oferecido por libação sobre o sacrifício e serviço da vossa fé, folgo e me regozijo com todos vós.
¹⁸ E vós também regozijai-vos e alegrai-vos comigo por isto mesmo.
¹⁹ E espero no Senhor Jesus que em breve vos mandarei Timóteo, para que também eu esteja de bom ânimo, sabendo dos vossos negócios.
²⁰ Porque a ninguém tenho de igual sentimento, que sinceramente cuide do vosso estado;
²¹ Porque todos buscam o que é seu, e não o que é de Cristo Jesus.
²² Mas bem sabeis qual a sua experiência, e que serviu comigo no evangelho, como filho ao pai.
²³ De sorte que espero vo-lo enviar logo que tenha provido a meus negócios.
²⁴ Mas confio no Senhor, que também eu mesmo em breve irei ter convosco.
²⁵ Julguei, contudo, necessário mandar-vos Epafrodito, meu irmão e cooperador, e companheiro nos combates, e vosso enviado para prover às minhas necessidades.
²⁶ Porquanto tinha muitas saudades de vós todos, e estava muito angustiado de que tivésseis ouvido que ele estivera doente.
²⁷ E de fato esteve doente, e quase à morte; mas Deus se apiedou dele, e não somente dele, mas também de mim, para que eu não tivesse tristeza sobre tristeza.
²⁸ Por isso vo-lo enviei mais depressa, para que, vendo-o outra vez, vos regozijeis, e eu tenha menos tristeza.
²⁹ Recebei-o, pois, no Senhor com todo o gozo, e tende-o em honra;
³⁰ Porque pela obra de Cristo chegou até bem próximo da morte, não fazendo caso da vida para suprir para comigo a falta do vosso serviço. 

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
            texto: ` ¹ Finalmente, irmãos meus, regozijai-vos no Senhor. Não me aborreço de escrever-vos as mesmas coisas, e é segurança para vós.
² Guardai-vos dos cães, guardai-vos dos maus obreiros, guardai-vos da cortadura;
³ Porque a circuncisão somos nós, que servimos a Deus em espírito, e nos gloriamos em Jesus Cristo, e não confiamos na carne.
⁴ Ainda que também podia confiar na carne; se algum outro cuida que pode confiar na carne, ainda mais eu:
⁵ Circuncidado ao oitavo dia, da linhagem de Israel, da tribo de Benjamim, hebreu de hebreus; segundo a lei, fui fariseu;
⁶ Segundo o zelo, perseguidor da igreja, segundo a justiça que há na lei, irrepreensível.
⁷ Mas o que para mim era ganho reputei-o perda por Cristo.
⁸ E, na verdade, tenho também por perda todas as coisas, pela excelência do conhecimento de Cristo Jesus, meu Senhor; pelo qual sofri a perda de todas estas coisas, e as considero como escória, para que possa ganhar a Cristo,
⁹ E seja achado nele, não tendo a minha justiça que vem da lei, mas a que vem pela fé em Cristo, a saber, a justiça que vem de Deus pela fé;
¹⁰ Para conhecê-lo, e o poder da sua ressurreição, e à comunicação de suas aflições, sendo feito conforme à sua morte;
¹¹ Para ver se de alguma maneira eu possa chegar à ressurreição dentre os mortos.
¹² Não que já a tenha alcançado, ou que já seja perfeito; mas prossigo para alcançar aquilo para o que fui também preso por Cristo Jesus.
¹³ Irmãos, quanto a mim, não julgo que o haja alcançado; mas uma coisa faço, e é que, esquecendo-me das coisas que atrás ficam, e avançando para as que estão diante de mim,
¹⁴ Prossigo para o alvo, pelo prêmio da soberana vocação de Deus em Cristo Jesus.
¹⁵ Por isso todos quantos já somos perfeitos, sintamos isto mesmo; e, se sentis alguma coisa de outra maneira, também Deus vo-lo revelará.
¹⁶ Mas, naquilo a que já chegamos, andemos segundo a mesma regra, e sintamos o mesmo.
¹⁷ Sede também meus imitadores, irmãos, e tende cuidado, segundo o exemplo que tendes em nós, pelos que assim andam.
¹⁸ Porque muitos há, dos quais muitas vezes vos disse, e agora também digo, chorando, que são inimigos da cruz de Cristo,
¹⁹ Cujo fim é a perdição; cujo Deus é o ventre, e cuja glória é para confusão deles, que só pensam nas coisas terrenas.
²⁰ Mas a nossa cidade está nos céus, de onde também esperamos o Salvador, o Senhor Jesus Cristo,
²¹ Que transformará o nosso corpo abatido, para ser conforme o seu corpo glorioso, segundo o seu eficaz poder de sujeitar também a si todas as coisas. 

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
            texto: ` ¹ Portanto, meus amados e mui queridos irmãos, minha alegria e coroa, estai assim firmes no Senhor, amados.
² Rogo a Evódia, e rogo a Síntique, que sintam o mesmo no Senhor.
³ E peço-te também a ti, meu verdadeiro companheiro, que ajudes essas mulheres que trabalharam comigo no evangelho, e com Clemente, e com os meus outros cooperadores, cujos nomes estão no livro da vida.
⁴ Regozijai-vos sempre no Senhor; outra vez digo, regozijai-vos.
⁵ Seja a vossa equidade notória a todos os homens. Perto está o Senhor.
⁶ Não estejais inquietos por coisa alguma; antes as vossas petições sejam em tudo conhecidas diante de Deus pela oração e súplica, com ação de graças.
⁷ E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos pensamentos em Cristo Jesus.
⁸ Quanto ao mais, irmãos, tudo o que é verdadeiro, tudo o que é honesto, tudo o que é justo, tudo o que é puro, tudo o que é amável, tudo o que é de boa fama, se há alguma virtude, e se há algum louvor, nisso pensai.
⁹ O que também aprendestes, e recebestes, e ouvistes, e vistes em mim, isso fazei; e o Deus de paz será convosco.
¹⁰ Ora, muito me regozijei no Senhor por finalmente reviver a vossa lembrança de mim; pois já vos tínheis lembrado, mas não tínheis tido oportunidade.
¹¹ Não digo isto como por necessidade, porque já aprendi a contentar-me com o que tenho.
¹² Sei estar abatido, e sei também ter abundância; em toda a maneira, e em todas as coisas estou instruído, tanto a ter fartura, como a ter fome; tanto a ter abundância, como a padecer necessidade.
¹³ Posso todas as coisas em Cristo que me fortalece.
¹⁴ Todavia fizestes bem em tomar parte na minha aflição.
¹⁵ E bem sabeis também, ó filipenses, que, no princípio do evangelho, quando parti da Macedônia, nenhuma igreja comunicou comigo com respeito a dar e a receber, senão vós somente;
¹⁶ Porque também uma e outra vez me mandastes o necessário a Tessalônica.
¹⁷ Não que procure dádivas, mas procuro o fruto que cresça para a vossa conta.
¹⁸ Mas bastante tenho recebido, e tenho abundância. Cheio estou, depois que recebi de Epafrodito o que da vossa parte me foi enviado, como cheiro de suavidade e sacrifício agradável e aprazível a Deus.
¹⁹ O meu Deus, porém, segundo as suas riquezas, suprirá todas as vossas necessidades em glória, por Cristo Jesus.
²⁰ Ora, a nosso Deus e Pai seja dada glória para todo o sempre. Amém.
²¹ Saudai a todos os santos em Cristo Jesus. Os irmãos que estão comigo vos saúdam.
²² Todos os santos vos saúdam, mas principalmente os que são da casa de César.
²³ A graça de nosso Senhor Jesus Cristo seja com vós todos. Amém. 

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