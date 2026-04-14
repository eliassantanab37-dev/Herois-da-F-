// js/livros/segunda_pedro.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const segunda_pedro = {
    nome: "2 Pedro",
    icone: "📜",         // Emoji ou Ícone que aparece no card
    autor: "Pedro",
    //background: "./imagens/2pedro_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "A Vocação e Eleição",
            texto: `¹ Simão Pedro, servo e apóstolo de Jesus Cristo, aos que conosco alcançaram fé igualmente preciosa pela justiça do nosso Deus e Salvador Jesus Cristo:
² Graça e paz vos sejam multiplicadas, pelo conhecimento de Deus, e de Jesus nosso Senhor;
³ Visto como o seu divino poder nos deu tudo o que diz respeito à vida e piedade, pelo conhecimento daquele que nos chamou pela sua glória e virtude;
⁴ Pelas quais ele nos tem dado grandíssimas e preciosas promessas, para que por elas fiqueis participantes da natureza divina, havendo escapado da corrupção, que pela concupiscência há no mundo.
⁵ E vós também, pondo nisto mesmo toda a diligência, acrescentai à vossa fé a virtude, e à virtude o conhecimento,
⁶ E ao conhecimento a temperança, e à temperança a paciência, e à paciência a piedade,
⁷ E à piedade o amor fraternal, e ao amor fraternal o amor.
⁸ Porque, se em vós houver e abundarem estas coisas, não vos deixarão ociosos nem estéreis no conhecimento de nosso Senhor Jesus Cristo.
⁹ Pois aquele em quem não há estas coisas é cego, nada vendo ao longe, havendo-se esquecido da purificação dos seus antigos pecados.
¹⁰ Portanto, irmãos, procurai fazer cada vez mais firme a vossa vocação e eleição; porque, fazendo isto, nunca jamais tropeçareis.
¹¹ Porque assim vos será amplamente concedida a entrada no reino eterno de nosso Senhor e Salvador Jesus Cristo.
¹² Por isso não deixarei de exortar-vos sempre acerca destas coisas, ainda que bem as saibais, e estejais confirmados na presente verdade.
¹³ E tenho por justo, enquanto estiver neste tabernáculo, despertar-vos com admoestações,
¹⁴ Sabendo que brevemente hei de deixar este meu tabernáculo, como também nosso Senhor Jesus Cristo já me tem revelado.
¹⁵ Mas também eu procurarei em toda a ocasião que depois da minha morte tenhais lembrança destas coisas.
¹⁶ Porque não vos fizemos saber o poder e a vinda de nosso Senhor Jesus Cristo, seguindo fábulas astuciosamente compostas; mas nós mesmos vimos a sua majestade.
¹⁷ Porquanto ele recebeu de Deus Pai honra e glória, quando da magnífica glória lhe foi dirigida a seguinte voz: Este é o meu Filho amado, em quem me tenho comprazido.
¹⁸ E ouvimos esta voz dirigida do céu, estando nós com ele no monte santo;
¹⁹ E temos, mui firme, a palavra dos profetas, à qual bem fazeis em estar atentos, como a uma luz que ilumina em lugar escuro, até que o dia amanheça, e a estrela da alva apareça em vossos corações.
²⁰ Sabendo primeiramente isto: Que nenhuma profecia da Escritura é de particular interpretação.
²¹ Porque a profecia nunca foi produzida por vontade de homem algum, mas os homens santos de Deus falaram inspirados pelo Espírito Santo. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que nos foi dado pelo divino poder de Deus?",
                        opcoes: [
                            { numero: 1, texto: "O domínio político sobre as nações", correta: false },
                            { numero: 2, texto: "Riquezas materiais ilimitadas", correta: false },
                            { numero: 3, texto: "Apenas um livro de regras", correta: false },
                            { numero: 4, texto: "Tudo o que diz respeito à vida e à piedade", correta: true },
                        ],
                        explicacao: "2 Pedro 1:3 - Visto como o seu divino poder nos deu tudo o que diz respeito à vida e à piedade...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Pedro diz que nunca foi trazida por vontade humana?",
                        opcoes: [
                            { numero: 1, texto: "A profecia da Escritura", correta: true },
                            { numero: 2, texto: "A lei de Moisés", correta: false },
                            { numero: 3, texto: "A filosofia grega", correta: false },
                            { numero: 4, texto: "As guerras santas", correta: false }
                        ],
                        explicacao: "2 Pedro 1:21 - Porque a profecia nunca foi trazida por vontade de homem algum, mas os homens santos de Deus falaram inspirados pelo Espírito Santo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que os fiéis devem acrescentar à sua fé, segundo a lista de virtudes?",
                        opcoes: [
                            { numero: 1, texto: "A virtude, a ciência, a temperança, a paciência e a piedade", correta: true },
                            { numero: 2, texto: "Apenas a vontade de vencer", correta: false },
                            { numero: 3, texto: "Bens materiais e status", correta: false },
                            { numero: 4, texto: "Dúvidas e questionamentos", correta: false }
                        ],
                        explicacao: "2 Pedro 1:5-6 - ...acrescentai à vossa fé a virtude, e à virtude a ciência, e à ciência a temperança...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "Os Falsos Mestres",
            texto: ` ¹ E também houve entre o povo falsos profetas, como entre vós haverá também falsos doutores, que introduzirão encobertamente heresias de perdição, e negarão o Senhor que os resgatou, trazendo sobre si mesmos repentina perdição.
² E muitos seguirão as suas dissoluções, pelos quais será blasfemado o caminho da verdade.
³ E por avareza farão de vós negócio com palavras fingidas; sobre os quais já de largo tempo não será tardia a sentença, e a sua perdição não dormita.
⁴ Porque, se Deus não poupou aos anjos que pecaram, mas, havendo-os lançado no inferno, os entregou às cadeias da escuridão, ficando reservados para o juízo;
⁵ E não perdoou ao mundo antigo, mas guardou a Noé, a oitava pessoa, o pregador da justiça, ao trazer o dilúvio sobre o mundo dos ímpios;
⁶ E condenou à destruição as cidades de Sodoma e Gomorra, reduzindo-as a cinza, e pondo-as para exemplo aos que vivessem impiamente;
⁷ E livrou o justo Ló, enfadado da vida dissoluta dos homens abomináveis
⁸ (Porque este justo, habitando entre eles, afligia todos os dias a sua alma justa, vendo e ouvindo sobre as suas obras injustas);
⁹ Assim, sabe o Senhor livrar da tentação os piedosos, e reservar os injustos para o dia do juízo, para serem castigados;
¹⁰ Mas principalmente aqueles que segundo a carne andam em concupiscências de imundícia, e desprezam as autoridades; atrevidos, obstinados, não receando blasfemar das dignidades;
¹¹ Enquanto os anjos, sendo maiores em força e poder, não pronunciam contra eles juízo blasfemo diante do Senhor.
¹² Mas estes, como animais irracionais, que seguem a natureza, feitos para serem presos e mortos, blasfemando do que não entendem, perecerão na sua corrupção,
¹³ Recebendo o galardão da injustiça; pois que tais homens têm prazer nos deleites cotidianos; manchas são eles e máculas, deleitando-se em seus enganos, quando se banqueteiam convosco;
¹⁴ Tendo os olhos cheios de adultério, e não cessando de pecar, engodando as almas inconstantes, tendo o coração exercitado na avareza, filhos de maldição;
¹⁵ Os quais, deixando o caminho direito, erraram seguindo o caminho de Balaão, filho de Beor, que amou o prêmio da injustiça;
¹⁶ Mas teve a repreensão da sua transgressão; o mudo jumento, falando com voz humana, impediu a loucura do profeta.
¹⁷ Estes são fontes sem água, nuvens levadas pela força do vento, para os quais a escuridão das trevas eternamente se reserva.
¹⁸ Porque, falando coisas mui arrogantes de vaidades, engodam com as concupiscências da carne, e com dissoluções, aqueles que se estavam afastando dos que andam em erro,
¹⁹ Prometendo-lhes liberdade, sendo eles mesmos servos da corrupção. Porque de quem alguém é vencido, do tal faz-se também servo.
²⁰ Porquanto se, depois de terem escapado das corrupções do mundo, pelo conhecimento do Senhor e Salvador Jesus Cristo, forem outra vez envolvidos nelas e vencidos, tornou-se-lhes o último estado pior do que o primeiro.
²¹ Porque melhor lhes fora não conhecerem o caminho da justiça, do que, conhecendo-o, desviarem-se do santo mandamento que lhes fora dado;
²² Deste modo sobreveio-lhes o que por um verdadeiro provérbio se diz: O cão voltou ao seu próprio vômito, e a porca lavada ao espojadouro de lama. 
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Pedro diz que os falsos mestres introduzirão encobertamente?",
                        opcoes: [
                            { numero: 1, texto: "Heresias de perdição", correta: true },
                            { numero: 2, texto: "Novas línguas", correta: false },
                            { numero: 3, texto: "Dinheiro para os pobres", correta: false },
                            { numero: 4, texto: "Ajudas ao governo", correta: false }
                        ],
                        explicacao: "2 Pedro 2:1 - ...haverá entre vós falsos mestres, que introduzirão encobertamente heresias de perdição...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu com os anjos que pecaram, segundo o capítulo 2?",
                        opcoes: [
                            { numero: 1, texto: "Deus os lançou no inferno, entregando-os às cadeias da escuridão", correta: true },
                            { numero: 2, texto: "Foram perdoados imediatamente", correta: false },
                            { numero: 3, texto: "Tornaram-se governantes da terra", correta: false },
                            { numero: 4, texto: "Foram aniquilados e deixaram de existir", correta: false }
                        ],
                        explicacao: "2 Pedro 2:4 - Porque, se Deus não poupou aos anjos que pecaram, mas, havendo-os lançado no inferno, os entregou às cadeias da escuridão...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como é descrito o estado final daqueles que, após conhecerem o caminho, voltam ao pecado?",
                        opcoes: [
                            { numero: 1, texto: "O seu último estado torna-se pior do que o primeiro", correta: true },
                            { numero: 2, texto: "Eles continuam salvos sem problemas", correta: false },
                            { numero: 3, texto: "Eles esquecem que pecaram", correta: false },
                            { numero: 4, texto: "Eles tornam-se pessoas melhores", correta: false }
                        ],
                        explicacao: "2 Pedro 2:20 - ...se, depois de terem escapado das corrupções do mundo... tornam-se a envolver nelas... tornou-se-lhes o último estado pior do que o primeiro.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "O Dia do Senhor",
            texto: ` ¹ Amados, escrevo-vos agora esta segunda carta, em ambas as quais desperto com exortação o vosso ânimo sincero;
² Para que vos lembreis das palavras que primeiramente foram ditas pelos santos profetas, e do nosso mandamento, os apóstolos do Senhor e Salvador.
³ Sabendo primeiro isto, que nos últimos dias virão escarnecedores, andando segundo as suas próprias concupiscências,
⁴ E dizendo: Onde está a promessa da sua vinda? Porque desde que os pais dormiram, todas as coisas permanecem como desde o princípio da criação.
⁵ Eles voluntariamente ignoram isto, que pela palavra de Deus já desde a antiguidade existiram os céus, e a terra, que foi tirada da água e no meio da água subsiste.
⁶ Pelas quais coisas pereceu o mundo de então, coberto com as águas do dilúvio,
⁷ Mas os céus e a terra que agora existem pela mesma palavra se reservam como tesouro, e se guardam para o fogo, até o dia do juízo, e da perdição dos homens ímpios.
⁸ Mas, amados, não ignoreis uma coisa, que um dia para o Senhor é como mil anos, e mil anos como um dia.
⁹ O Senhor não retarda a sua promessa, ainda que alguns a têm por tardia; mas é longânimo para conosco, não querendo que alguns se percam, senão que todos venham a arrepender-se.
¹⁰ Mas o dia do Senhor virá como o ladrão de noite; no qual os céus passarão com grande estrondo, e os elementos, ardendo, se desfarão, e a terra, e as obras que nela há, se queimarão.
¹¹ Havendo, pois, de perecer todas estas coisas, que pessoas vos convém ser em santo trato, e piedade,
¹² Aguardando, e apressando-vos para a vinda do dia de Deus, em que os céus, em fogo se desfarão, e os elementos, ardendo, se fundirão?
¹³ Mas nós, segundo a sua promessa, aguardamos novos céus e nova terra, em que habita a justiça.
¹⁴ Por isso, amados, aguardando estas coisas, procurai que dele sejais achados imaculados e irrepreensíveis em paz.
¹⁵ E tende por salvação a longanimidade de nosso Senhor; como também o nosso amado irmão Paulo vos escreveu, segundo a sabedoria que lhe foi dada;
¹⁶ Falando disto, como em todas as suas epístolas, entre as quais há pontos difíceis de entender, que os indoutos e inconstantes torcem, e igualmente as outras Escrituras, para sua própria perdição.
¹⁷ Vós, portanto, amados, sabendo isto de antemão, guardai-vos de que, pelo engano dos homens abomináveis, sejais juntamente arrebatados, e descaiais da vossa firmeza;
¹⁸ Antes crescei na graça e conhecimento de nosso Senhor e Salvador, Jesus Cristo. A ele seja a glória, assim agora, como no dia da eternidade. Amém. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Um dia para o Senhor é como quantos anos para os homens?",
                        opcoes: [
                            { numero: 1, texto: "Como mil anos", correta: true },
                            { numero: 2, texto: "Como cem anos", correta: false },
                            { numero: 3, texto: "Como uma eternidade", correta: false },
                            { numero: 4, texto: "Como um segundo", correta: false }
                        ],
                        explicacao: "2 Pedro 3:8 - Mas, amados, não ignoreis uma coisa, que um dia para o Senhor é como mil anos, e mil anos como um dia.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como virá o Dia do Senhor, segundo Pedro?",
                        opcoes: [
                            { numero: 1, texto: "Como o ladrão de noite", correta: true },
                            { numero: 2, texto: "Com aviso em todos os jornais", correta: false },
                            { numero: 3, texto: "De forma lenta e previsível", correta: false },
                            { numero: 4, texto: "Nunca virá", correta: false }
                        ],
                        explicacao: "2 Pedro 3:10 - Mas o dia do Senhor virá como o ladrão de noite; no qual os céus passarão com grande estrondo...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que devemos aguardar segundo a promessa de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Novos céus e uma nova terra, em que habita a justiça", correta: true },
                            { numero: 2, texto: "A reconstrução de Roma", correta: false },
                            { numero: 3, texto: "O domínio dos falsos mestres", correta: false },
                            { numero: 4, texto: "O fim de toda a esperança", correta: false }
                        ],
                        explicacao: "2 Pedro 3:13 - Mas nós, segundo a sua promessa, aguardamos novos céus e uma nova terra, em que habita a justiça.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};