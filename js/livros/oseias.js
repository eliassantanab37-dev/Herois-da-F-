const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const oseias = {
    nome: "Oseias",
    icone: "🕊️",
    autor: "Oseias",
    //background: "./imagens/oseias_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "A Esposa e os Filhos de Oseias",
            texto: ` 1 Palavra do Senhor, que foi dirigida a Oseias, filho de Beeri, nos dias de Uzias, Jotão, Acaz, Ezequias, reis de Judá, e nos dias de Jeroboão, filho de Joás, rei de Israel.
2 O princípio da palavra do Senhor por meio de Oseias. Disse, pois, o Senhor a Oseias: Vai, toma uma mulher de prostituições, e filhos de prostituição; porque a terra certamente se prostitui, desviando-se do Senhor.
3 Foi, pois, e tomou a Gômer, filha de Diblaim, e ela concebeu, e lhe deu um filho.
4 E disse-lhe o Senhor: Põe-lhe o nome de Jizreel; porque daqui a pouco visitarei o sangue de Jizreel sobre a casa de Jeú, e farei cessar o reino da casa de Israel.
5 E naquele dia quebrarei o arco de Israel no vale de Jizreel.
6 E tornou ela a conceber, e deu à luz uma filha. E Deus disse: Põe-lhe o nome de Lo-Ruama; porque eu não tornarei mais a compadecer-me da casa de Israel, mas tudo lhe tirarei.
7 Mas da casa de Judá me compadecerei, e os salvarei pelo Senhor seu Deus, pois não os salvarei pelo arco, nem pela espada, nem pela guerra, nem pelos cavalos, nem pelos cavaleiros.
8 E, depois de haver desmamado a Lo-Ruama, concebeu e deu à luz um filho.
9 E Deus disse: Põe-lhe o nome de Lo-Ami; porque vós não sois meu povo, nem eu serei vosso Deus.
10 Todavia o número dos filhos de Israel será como a areia do mar, que não pode medir-se nem contar-se; e acontecerá que no lugar onde se lhes dizia: Vós não sois meu povo, se lhes dirá: Vós sois filhos do Deus vivo.
11 E os filhos de Judá e os filhos de Israel juntos se congregarão, e constituirão sobre si uma só cabeça, e subirão da terra; porque grande será o dia de Jizreel.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Com quem o Senhor ordenou que Oseias se casasse para simbolizar a infidelidade de Israel?",
                        opcoes: [
                            { numero: 1, texto: "Uma mulher de prostituições", correta: true },
                            { numero: 2, texto: "Uma rainha estrangeira", correta: false },
                            { numero: 3, texto: "Uma viúva de Judá", correta: false },
                            { numero: 4, texto: "Uma serva do templo", correta: false }
                        ],
                        explicacao: "Oseias 1:2 - ...Disse o Senhor a Oseias: Vai, toma uma mulher de prostituições...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual o nome do primeiro filho de Oseias, que significa 'Deus semeia'?",
                        opcoes: [
                            { numero: 1, texto: "Lo-Ruama", correta: false },
                            { numero: 2, texto: "Lo-Ami", correta: false },
                            { numero: 3, texto: "Jezreel", correta: true },
                            { numero: 4, texto: "Efraim", correta: false }
                        ],
                        explicacao: "Oseias 1:4 - E disse-lhe o Senhor: Põe-lhe o nome de Jezreel...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que significa o nome do filho 'Lo-Ami'?",
                        opcoes: [
                            { numero: 1, texto: "Vós sois meu povo", correta: false },
                            { numero: 2, texto: "Amados por Deus", correta: false },
                            { numero: 3, texto: "Filho da promessa", correta: false },
                            { numero: 4, texto: "Vós não sois meu povo", correta: true }
                        ],
                        explicacao: "Oseias 1:9 - ...porque vós não sois meu povo, nem eu serei vosso Deus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "O Castigo e a Restauração de Israel",
            texto: `¹ Dizei a vossos irmãos: Ami; e a vossas irmãs: Ruama.
² Contendei com vossa mãe, contendei, porque ela não é minha mulher, e eu não sou seu marido; e desvie ela as suas prostituições da sua vista e os seus adultérios de entre os seus seios.
³ Para que eu não a despoje, ficando ela nua, e a ponha como no dia em que nasceu, e a faça como um deserto, e a torne como uma terra seca, e a mate à sede;
⁴ E não me compadeça de seus filhos, porque são filhos de prostituições.
⁵ Porque sua mãe se prostituiu; aquela que os concebeu houve-se torpemente, porque diz: Irei atrás de meus amantes, que me dão o meu pão e a minha água, a minha lã e o meu linho, o meu óleo e as minhas bebidas.
⁶ Portanto, eis que cercarei o teu caminho com espinhos; e levantarei um muro de sebe, para que ela não ache as suas veredas.
⁷ Ela irá atrás de seus amantes, mas não os alcançará; e buscá-los-á, mas não os achará; então dirá: Ir-me-ei, e tornar-me-ei a meu primeiro marido, porque melhor me ia então do que agora.
⁸ Ela, pois, não reconhece que eu lhe dei o grão, e o mosto, e o azeite, e que lhe multipliquei a prata e o ouro, que eles usaram para Baal.
⁹ Portanto tornarei a tirar o meu grão a seu tempo e o meu mosto no seu tempo determinado; e arrebatarei a minha lã e o meu linho, com que cobriam a sua nudez.
¹⁰ E agora descobrirei a sua vileza diante dos olhos dos seus amantes, e ninguém a livrará da minha mão.
¹¹ E farei cessar todo o seu gozo, as suas festas, as suas luas novas, e os seus sábados, e todas as suas festividades.
¹² E devastarei a sua vide e a sua figueira, de que ela diz: É esta a minha paga que me deram os meus amantes; eu, pois, farei delas um bosque, e as feras do campo as devorarão.
¹³ Castigá-la-ei pelos dias dos baalins, nos quais lhes queimou incenso, e se adornou dos seus pendentes e das suas joias, e andou atrás de seus amantes, mas de mim se esqueceu, diz o Senhor.
¹⁴ Portanto, eis que eu a atrairei, e a levarei para o deserto, e lhe falarei ao coração.
¹⁵ E lhe darei as suas vinhas dali, e o vale de Acor, por porta de esperança; e ali cantará, como nos dias de sua mocidade, e como no dia em que subiu da terra do Egito.
¹⁶ E naquele dia, diz o Senhor, tu me chamarás: Meu marido; e não mais me chamarás: Meu Baal.
¹⁷ E da sua boca tirarei os nomes dos baalins, e não mais se lembrará desses nomes.
¹⁸ E naquele dia farei por eles aliança com as feras do campo, e com as aves do céu, e com os répteis da terra; e da terra quebrarei o arco, e a espada, e a guerra, e os farei deitar em segurança.
¹⁹ E desposar-te-ei comigo para sempre; desposar-te-ei comigo em justiça, e em juízo, e em benignidade, e em misericórdias.
²⁰ E desposar-te-ei comigo em fidelidade, e conhecerás ao Senhor.
²¹ E acontecerá naquele dia que eu atenderei, diz o Senhor; eu atenderei aos céus, e estes atenderão à terra.
²² E a terra atenderá ao trigo, e ao mosto, e ao azeite, e estes atenderão a Jizreel.
²³ E semeá-la-ei para mim na terra, e compadecer-me-ei dela que não obteve misericórdia; e eu direi àquele que não era meu povo: Tu és meu povo; e ele dirá: Tu és meu Deus!
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Para onde o Senhor levará Israel para lhe falar ao coração?",
                        opcoes: [
                            { numero: 1, texto: "Para o palácio", correta: false },
                            { numero: 2, texto: "Para o deserto", correta: true },
                            { numero: 3, texto: "Para o alto do monte", correta: false },
                            { numero: 4, texto: "Para o mar", correta: false }
                        ],
                        explicacao: "Oseias 2:14 - Portanto, eis que eu a atrairei, e a levarei para o deserto, e lhe falarei ao coração.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como Israel chamará ao Senhor no dia da sua restauração?",
                        opcoes: [
                            { numero: 1, texto: "Meu senhor (Baali)", correta: false },
                            { numero: 2, texto: "Meu rei", correta: false },
                            { numero: 3, texto: "Meu marido (Ishi)", correta: true },
                            { numero: 4, texto: "Meu juiz", correta: false }
                        ],
                        explicacao: "Oseias 2:16 - E acontecerá naquele dia, diz o Senhor, que me chamarás: Meu marido; e não me chamarás mais: Meu senhor.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Deus prometeu semear para si na terra?",
                        opcoes: [
                            { numero: 1, texto: "Trigo e cevada", correta: false },
                            { numero: 2, texto: "Ouro e prata", correta: false },
                            { numero: 3, texto: "Vinha e oliveira", correta: false },
                            { numero: 4, texto: "Israel (aquela que não obteve misericórdia)", correta: true }
                        ],
                        explicacao: "Oseias 2:23 - E semeá-la-ei para mim na terra, e compadecer-me-ei dela que não obteve misericórdia...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "O Resgate da Esposa Adúltera",
            texto: ` ¹ E o Senhor me disse: Vai outra vez, ama uma mulher, amada de seu amigo, contudo adúltera, como o Senhor ama os filhos de Israel, embora eles olhem para outros deuses, e amem os bolos de uvas.
² E comprei-a para mim por quinze peças de prata, e um ômer, e meio ômer de cevada;
³ E ele lhe disse: Tu ficarás comigo muitos dias; não te prostituirás, nem serás de outro homem; assim também eu esperarei por ti.
⁴ Porque os filhos de Israel ficarão por muitos dias sem rei, e sem príncipe, e sem sacrifício, e sem estátua, e sem éfode ou terafim.
⁵ Depois tornarão os filhos de Israel, e buscarão ao Senhor seu Deus, e a Davi, seu rei; e temerão ao Senhor, e à sua bondade, no fim dos dias.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por quanto Oseias comprou a mulher para si novamente?",
                        opcoes: [
                            { numero: 1, texto: "Quinze peças de prata e um ômer e meio de cevada", correta: true },
                            { numero: 2, texto: "Trinta moedas de ouro", correta: false },
                            { numero: 3, texto: "Cem ovelhas brancas", correta: false },
                            { numero: 4, texto: "Dez talentos de bronze", correta: false }
                        ],
                        explicacao: "Oseias 3:2 - E comprei-a para mim por quinze peças de prata, e um ômer de cevada, e meio ômer de cevada.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Depois de muitos dias sem rei, quem os filhos de Israel buscarão?",
                        opcoes: [
                            { numero: 1, texto: "Os deuses de Canaã", correta: false },
                            { numero: 2, texto: "Ao Senhor seu Deus, e a Davi, seu rei", correta: true },
                            { numero: 3, texto: "O auxílio do Egito", correta: false },
                            { numero: 4, texto: "A sabedoria dos caldeus", correta: false }
                        ],
                        explicacao: "Oseias 3:5 - Depois tornarão os filhos de Israel, e buscarão ao Senhor seu Deus, e a Davi, seu rei...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Em que período o povo tremerá diante do Senhor e da sua bondade?",
                        opcoes: [
                            { numero: 1, texto: "No princípio do ano", correta: false },
                            { numero: 2, texto: "Durante o cativeiro", correta: false },
                            { numero: 3, texto: "Nos últimos dias", correta: true },
                            { numero: 4, texto: "Na hora da colheita", correta: false }
                        ],
                        explicacao: "Oseias 3:5 - ...e temerão ao Senhor, e à sua bondade, nos últimos dias.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "A Contenda do Senhor com Israel",
            texto: `¹ Ouvi a palavra do Senhor, vós filhos de Israel, porque o Senhor tem uma contenda com os habitantes da terra; porque na terra não há verdade, nem benignidade, nem conhecimento de Deus.
² Só permanecem o perjurar, o mentir, o matar, o furtar e o adulterar; fazem violência, um ato sanguinário segue imediatamente a outro.
³ Por isso a terra se lamentará, e qualquer que morar nela desfalecerá, com os animais do campo e com as aves do céu; e até os peixes do mar serão tirados.
⁴ Todavia ninguém contenda, ninguém repreenda, porque o teu povo é como os que contendem com o sacerdote.
⁵ Por isso tropeçarás de dia, e o profeta contigo tropeçará de noite; e destruirei a tua mãe.
⁶ O meu povo foi destruído, porque lhe faltou o conhecimento; porque tu rejeitaste o conhecimento, também eu te rejeitarei, para que não sejas sacerdote diante de mim; e, visto que te esqueceste da lei do teu Deus, também eu me esquecerei de teus filhos.
⁷ Como eles se multiplicaram, assim pecaram contra mim; eu mudarei a sua honra em vergonha.
⁸ Comem da oferta pelo pecado do meu povo, e pela transgressão dele têm desejo ardente.
⁹ Por isso, como é o povo, assim será o sacerdote; e castigá-lo-ei segundo os seus caminhos, e dar-lhe-ei a recompensa das suas obras.
¹⁰ Comerão, mas não se fartarão; entregar-se-ão à luxúria, mas não se multiplicarão; porque deixaram de atentar ao Senhor.
¹¹ A luxúria, e o vinho, e o mosto tiram o coração.
¹² O meu povo consulta a sua madeira, e a sua vara lhe responde, porque o espírito da luxúria os engana, e prostituem-se, apartando-se da sujeição do seu Deus.
¹³ Sacrificam sobre os cumes dos montes, e queimam incenso sobre os outeiros, debaixo do carvalho, e do álamo, e do olmeiro, porque é boa a sua sombra; por isso vossas filhas se prostituem, e as vossas noras adulteram.
¹⁴ Eu não castigarei vossas filhas, quando se prostituem, nem vossas noras, quando adulteram; porque eles mesmos com as prostitutas se desviam, e com as meretrizes sacrificam; pois o povo que não tem entendimento será transtornado.
¹⁵ Ainda que tu, ó Israel, queiras prostituir-te, contudo não se faça culpado Judá; não venhais a Gilgal, e não subais a Bete-Áven, e não jureis, dizendo: Vive o Senhor.
¹⁶ Porque como uma novilha obstinada se rebelou Israel; agora o Senhor os apascentará como a um cordeiro num lugar espaçoso.
¹⁷ Efraim está entregue aos ídolos; deixa-o.
¹⁸ A sua bebida se foi; lançaram-se à luxúria continuamente; certamente os seus governadores amam a vergonha.
¹⁹ Um vento os envolveu nas suas asas, e envergonhar-se-ão por causa dos seus sacrifícios.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que o povo de Deus foi destruído, segundo o versículo 6?",
                        opcoes: [
                            { numero: 1, texto: "Porque lhes faltou o conhecimento", correta: true },
                            { numero: 2, texto: "Porque eram poucos em número", correta: false },
                            { numero: 3, texto: "Porque não tinham armas de guerra", correta: false },
                            { numero: 4, texto: "Porque veio uma grande fome", correta: false }
                        ],
                        explicacao: "Oseias 4:6 - O meu povo foi destruído, porque lhe faltou o conhecimento...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor fará com os sacerdotes que esqueceram a Sua lei?",
                        opcoes: [
                            { numero: 1, texto: "Dará a eles novos templos", correta: false },
                            { numero: 2, texto: "Enviará mais ofertas", correta: false },
                            { numero: 3, texto: "Também se esquecerá dos seus filhos", correta: true },
                            { numero: 4, texto: "Dará a eles autoridade sobre Judá", correta: false }
                        ],
                        explicacao: "Oseias 4:6 - ...visto que tu esqueceste a lei do teu Deus, também eu me esquecerei de teus filhos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual vício tirou o entendimento do povo de Israel?",
                        opcoes: [
                            { numero: 1, texto: "A preguiça", correta: false },
                            { numero: 2, texto: "A futilidade", correta: false },
                            { numero: 3, texto: "A avareza", correta: false },
                            { numero: 4, texto: "A luxúria, o vinho e o mosto", correta: true }
                        ],
                        explicacao: "Oseias 4:11 - A luxúria, e o vinho, e o mosto tiram o entendimento.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "O Juízo sobre os Sacerdotes e o Povo",
            texto: ` ¹ Ouvi isto, ó sacerdotes, e escutai, ó casa de Israel, e daí ouvidos, ó casa do rei, porque contra vós se dirige este juízo, visto que fostes um laço para Mizpá, e rede estendida sobre o Tabor.
² Os revoltos se aprofundaram na matança; mas eu castigarei a todos eles.
³ Eu conheço a Efraim, e Israel não se esconde de mim; porque agora te tens prostituído, ó Efraim, e Israel se contaminou.
⁴ Não querem ordenar as suas ações a fim de voltarem para o seu Deus, porque o espírito das prostituições está no meio deles, e não conhecem ao Senhor.
⁵ A soberba de Israel testificará no seu rosto; e Israel e Efraim cairão pela sua injustiça, e Judá cairá juntamente com eles.
⁶ Então irão com os seus rebanhos, e com o seu gado, para buscarem ao Senhor, mas não o acharão; ele se retirou deles.
⁷ Aleivosamente se houveram contra o Senhor, porque geraram filhos estranhos; agora em um só mês os consumirá com as suas porções.
⁸ Tocai a corneta em Gibeá, a trombeta em Ramá; gritai altamente em Bete-Áven; depois de ti, ó Benjamim.
⁹ Efraim será para assolação no dia do castigo; entre as tribos de Israel manifestei o que está certo.
¹⁰ Os príncipes de Judá são como os que mudam os limites; derramarei, pois, o meu furor sobre eles como água.
¹¹ Efraim está oprimido e quebrantado no juízo, porque quis andar após o mandamento dos homens.
¹² Portanto a Efraim serei como a traça, e para a casa de Judá como a podridão.
¹³ Quando Efraim viu a sua enfermidade, e Judá a sua chaga, subiu Efraim à Assíria e enviou ao rei Jarebe; mas ele não poderá sarar-vos, nem curar a vossa chaga.
¹⁴ Porque para Efraim serei como um leão, e como um leãozinho à casa de Judá: eu, eu o despedaçarei, e ir-me-ei embora; arrebatarei, e não haverá quem livre.
¹⁵ Irei e voltarei ao meu lugar, até que se reconheçam culpados e busquem a minha face; estando eles angustiados, de madrugada me buscarão.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o Senhor descreve Efraim por causa da sua soberba?",
                        opcoes: [
                            { numero: 1, texto: "Uma árvore frutífera", correta: false },
                            { numero: 2, texto: "Como uma traça", correta: true },
                            { numero: 3, texto: "Um leão forte", correta: false },
                            { numero: 4, texto: "Uma torre alta", correta: false }
                        ],
                        explicacao: "Oseias 5:12 - Portanto para Efraim serei como a traça, e para a casa de Judá como a podridão.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor fará até que o povo se reconheça culpado e busque a Sua face?",
                        opcoes: [
                            { numero: 1, texto: "Irá e voltará para o Seu lugar", correta: true },
                            { numero: 2, texto: "Destruirá a terra com água", correta: false },
                            { numero: 3, texto: "Dará mais riquezas ao rei", correta: false },
                            { numero: 4, texto: "Ficará em silêncio para sempre", correta: false }
                        ],
                        explicacao: "Oseias 5:15 - Irei, e voltarei para o meu lugar, até que se reconheçam culpados e busquem a minha face...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quando é que o povo buscaria ao Senhor com diligência?",
                        opcoes: [
                            { numero: 1, texto: "Na sua angústia", correta: true },
                            { numero: 2, texto: "No dia da festa", correta: false },
                            { numero: 3, texto: "Durante a paz", correta: false },
                            { numero: 4, texto: "Ao amanhecer", correta: false }
                        ],
                        explicacao: "Oseias 5:15 - ...estando eles angustiados, de madrugada me buscarão.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "Apelo ao Arrependimento",
            texto: ` ¹ Vinde, e tornemos ao Senhor, porque ele despedaçou, e nos sarará; feriu, e nos atará a ferida.
² Depois de dois dias nos dará a vida; ao terceiro dia nos ressuscitará, e viveremos diante dele.
³ Então conheçamos, e prossigamos em conhecer ao Senhor; a sua saída, como a alva, é certa; e ele a nós virá como a chuva, como chuva serôdia que rega a terra.
⁴ Que te farei, ó Efraim? Que te farei, ó Judá? Porque a vossa benignidade é como a nuvem da manhã e como o orvalho da madrugada, que cedo passa.
⁵ Por isso os abati pelos profetas; pelas palavras da minha boca os matei; e os teus juízos sairão como a luz,
⁶ Porque eu quero a misericórdia, e não o sacrifício; e o conhecimento de Deus, mais do que os holocaustos.
⁷ Mas eles transgrediram a aliança, como Adão; eles se portaram aleivosamente contra mim.
⁸ Gileade é a cidade dos que praticam iniquidade, manchada de sangue.
⁹ Como as hordas de salteadores que esperam alguns, assim é a companhia dos sacerdotes que matam no caminho num mesmo consenso; sim, eles cometem abominações.
¹⁰ Vejo uma coisa horrenda na casa de Israel, ali está a prostituição de Efraim; Israel está contaminado.
¹¹ Também para ti, ó Judá, está assinada uma sega, quando eu trouxer o cativeiro do meu povo.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor deseja mais do que sacrifícios?",
                        opcoes: [
                            { numero: 1, texto: "Ouro e ofertas", correta: false },
                            { numero: 2, texto: "Misericórdia", correta: true },
                            { numero: 3, texto: "Cânticos de louvor", correta: false },
                            { numero: 4, texto: "Longas viagens", correta: false }
                        ],
                        explicacao: "Oseias 6:6 - Porque eu quero a misericórdia, e não o sacrifício...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como é descrita a benignidade de Efraim e Judá?",
                        opcoes: [
                            { numero: 1, texto: "Como uma rocha firme", correta: false },
                            { numero: 2, texto: "Como um fogo ardente", correta: false },
                            { numero: 3, texto: "Como uma fonte eterna", correta: false },
                            { numero: 4, texto: "Como a nuvem da manhã e o orvalho que cedo passa", correta: true }
                        ],
                        explicacao: "Oseias 6:4 - ...porque a vossa benignidade é como a nuvem da manhã, e como o orvalho que cedo passa.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor promete fazer conosco se o conhecermos e prosseguirmos em conhecê-lo?",
                        opcoes: [
                            { numero: 1, texto: "Virá a nós como a chuva", correta: true },
                            { numero: 2, texto: "Nos dará reinos", correta: false },
                            { numero: 3, texto: "Nos levará ao mar", correta: false },
                            { numero: 4, texto: "Esconderá Sua face", correta: false }
                        ],
                        explicacao: "Oseias 6:3 - ...e ele a nós virá como a chuva, como chuva serôdia que rega a terra.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        7: {
            titulo: "A Maldade Interna de Israel",
            texto: ` ¹ Sarando eu a Israel, se descobriu a iniquidade de Efraim, como também as maldades de Samaria, porque praticaram a falsidade; e o ladrão entra, e a horda dos salteadores despoja por fora.
² E não dizem no seu coração que eu me lembro de toda a sua maldade; agora, pois, os cercam as suas obras; diante da minha face estão.
³ Com a sua malícia alegram ao rei, e com as suas mentiras aos príncipes.
⁴ Todos eles são adúlteros; são semelhantes ao forno aceso pelo padeiro, que cessa de mexer nas brasas, depois que amassou a massa, até que seja levedada.
⁵ E no dia do nosso rei os príncipes se tornaram doentes com frascos de vinho; ele estendeu a sua mão com os escarnecedores.
⁶ Porque, prepararam o coração como um forno, na sua emboscada; toda a noite dorme o seu padeiro, pela manhã arde como fogo de chama.
⁷ Todos eles estão quentes como um forno, e consomem os seus juízes; todos os seus reis caem, ninguém entre eles há que me invoque.
⁸ Efraim se mistura com os povos; Efraim é um bolo que não foi virado.
⁹ Estrangeiros lhe comeram a força, e ele não o sabe; também os cabelos brancos se espalharam sobre ele, e não o sabe.
¹⁰ E a soberba de Israel testificará diante dele; todavia não voltarão para o Senhor seu Deus, nem o buscarão em tudo isto.
¹¹ Porque Efraim é como uma pomba ingênua, sem entendimento; invocam o Egito, vão para a Assíria.
¹² Quando forem, sobre eles estenderei a minha rede, e como aves do céu os farei descer; castigá-los-ei, conforme o que eles têm ouvido na sua congregação.
¹³ Ai deles, porque fugiram de mim; destruição sobre eles, porque se rebelaram contra mim; eu os remi, mas disseram mentiras contra mim.
¹⁴ E não clamaram a mim com seu coração, mas davam uivos nas suas camas; para o trigo e para o vinho se ajuntam, mas contra mim se rebelam.
¹⁵ Eu os corrigi, e lhes esforcei os braços, mas pensam mal contra mim.
¹⁶ Eles voltaram, mas não para o Altíssimo. Fizeram-se como um arco enganador; caem à espada os seus príncipes, por causa do furor da sua língua; este será o seu escárnio na terra do Egito.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Com o que o coração dos israelitas é comparado enquanto eles tramam suas maldades?",
                        opcoes: [
                            { numero: 1, texto: "Um poço fundo", correta: false },
                            { numero: 2, texto: "Um campo de trigo", correta: false },
                            { numero: 3, texto: "Um forno aceso", correta: true },
                            { numero: 4, texto: "Um deserto seco", correta: false }
                        ],
                        explicacao: "Oseias 7:6 - Porque aplicaram o seu coração como um forno, enquanto andam de emboscada...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como Efraim é descrito por se misturar com os povos e não ter firmeza?",
                        opcoes: [
                            { numero: 1, texto: "Um pão que não foi virado", correta: true },
                            { numero: 2, texto: "Uma árvore sem raiz", correta: false },
                            { numero: 3, texto: "Um pássaro sem asas", correta: false },
                            { numero: 4, texto: "Um vaso quebrado", correta: false }
                        ],
                        explicacao: "Oseias 7:8 - ...Efraim é um pão que não foi virado.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Efraim é comparado a qual animal por ser enganado e não ter entendimento?",
                        opcoes: [
                            { numero: 1, texto: "Uma águia", correta: false },
                            { numero: 2, texto: "Uma pomba enganada", correta: true },
                            { numero: 3, texto: "Um leão velho", correta: false },
                            { numero: 4, texto: "Uma ovelha perdida", correta: false }
                        ],
                        explicacao: "Oseias 7:11 - Porque Efraim é como uma pomba enganada, sem entendimento...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        8: {
            titulo: "O Castigo pela Idolatria",
            texto: ` ¹ Põe a trombeta à tua boca. Ele virá como a águia contra a casa do Senhor, porque transgrediram a minha aliança, e se rebelaram contra a minha lei.
² E a mim clamarão: Deus meu! Nós, Israel, te conhecemos.
³ Israel rejeitou o bem; o inimigo persegui-lo-á.
⁴ Eles fizeram reis, mas não por mim; constituíram príncipes, mas eu não o soube; da sua prata e do seu ouro fizeram ídolos para si, para serem destruídos.
⁵ O teu bezerro, ó Samaria, te rejeitou; a minha ira se acendeu contra eles; até quando serão eles incapazes de alcançar pureza?
⁶ Porque isso vem de Israel, um artífice o fez, e não é Deus; mas em pedaços será desfeito o bezerro de Samaria.
⁷ Porque semearam vento, e segarão tormenta, não haverá seara, a erva não dará farinha; se a der, tragá-la-ão os estrangeiros.
⁸ Israel foi devorado; agora está entre os gentios como um vaso em que ninguém tem prazer.
⁹ Porque subiram à Assíria, como um jumento montês, por si só; Efraim mercou amores.
¹⁰ Todavia, ainda que eles merquem entre as nações, eu os congregarei; e serão um pouco afligidos por causa da carga do rei dos príncipes.
¹¹ Porquanto Efraim multiplicou os altares para pecar; teve altares para pecar.
¹² Escrevi-lhe as grandezas da minha lei, porém essas são estimadas como coisa estranha.
¹³ Quanto aos sacrifícios das minhas ofertas, sacrificam carne, e a comem, mas o Senhor não as aceita; agora se lembrará da sua iniquidade, e punirá os seus pecados; eles voltarão para o Egito.
¹⁴ Porque Israel se esqueceu do seu Criador, e edificou templos, e Judá multiplicou cidades fortificadas. Mas eu enviarei um fogo contra as suas cidades, que consumirá os seus palácios.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que colherão aqueles que semeiam o vento?",
                        opcoes: [
                            { numero: 1, texto: "O deserto", correta: false },
                            { numero: 2, texto: "A tempestade", correta: true },
                            { numero: 3, texto: "O vazio", correta: false },
                            { numero: 4, texto: "A chuva", correta: false }
                        ],
                        explicacao: "Oseias 8:7 - Porque semearam o vento, e segarão a tempestade...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor faria com o bezerro de Samaria?",
                        opcoes: [
                            { numero: 1, texto: "Seria transformado em pó", correta: false },
                            { numero: 2, texto: "Seria levado ao Egito", correta: false },
                            { numero: 3, texto: "Seria feito em pedaços", correta: true },
                            { numero: 4, texto: "Seria escondido no templo", correta: false }
                        ],
                        explicacao: "Oseias 8:6 - ...será feito em pedaços o bezerro de Samaria.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Israel se esqueceu do seu Criador e edificou o quê?",
                        opcoes: [
                            { numero: 1, texto: "Templos de ouro", correta: false },
                            { numero: 2, texto: "Muralhas altas", correta: false },
                            { numero: 3, texto: "Palácios", correta: true },
                            { numero: 4, texto: "Ídolos de madeira", correta: false }
                        ],
                        explicacao: "Oseias 8:14 - Porque Israel se esqueceu do seu Criador, e edificou palácios...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        9: {
            titulo: "O Cativeiro é Anunciado",
            texto: ` ¹ Não te alegres, ó Israel, não exultes, como os povos; porque ao prostituir-te abandonaste o teu Deus; amaste a paga de meretriz sobre todas as eiras de trigo.
² A eira e o lagar não os manterão; e o mosto lhes faltará.
³ Na terra do Senhor não permanecerão; mas Efraim tornará ao Egito, e na Assíria comerão comida imunda.
⁴ Não derramarão libações de vinho ao Senhor, nem lhe agradarão as suas ofertas. Os seus sacrifícios lhes serão como pão de pranteadores; todos os que dele comerem serão imundos, porque o seu pão será somente para si mesmos; não entrará na casa do Senhor.
⁵ Que fareis vós no dia da solenidade, e no dia da festa do Senhor?
⁶ Porque, eis que eles se foram por causa da destruição, mas o Egito os recolherá, Mênfis os sepultará; o desejável da sua prata as urtigas o possuirão por herança, espinhos crescerão nas suas tendas.
⁷ Chegarão os dias da punição, chegarão os dias da retribuição; Israel o saberá; o profeta é um insensato, o homem de espírito é um louco; por causa da abundância da tua iniquidade também haverá grande ódio.
⁸ Efraim era o vigia com o meu Deus, mas o profeta é como um laço de caçador de aves em todos os seus caminhos, e ódio na casa do seu Deus.
⁹ Muito profundamente se corromperam, como nos dias de Gibeá; ele lembrar-se-á das suas injustiças, visitará os pecados deles.
¹⁰ Achei a Israel como uvas no deserto, vi a vossos pais como a fruta temporã da figueira no seu princípio; mas eles foram para Baal-Peor, e se consagraram a essa vergonha, e se tornaram abomináveis como aquilo que amaram.
¹¹ Quanto a Efraim, a sua glória como ave voará, não haverá nascimento, não haverá gestação nem concepção.
¹² Ainda que venham a criar seus filhos, contudo os privarei deles para que não fique nenhum homem. Ai deles, quando deles eu me apartar!
¹³ Efraim, assim como vi a Tiro, está plantado num lugar aprazível; mas Efraim levará os seus filhos ao matador.
¹⁴ Dá-lhes, ó Senhor; mas que lhes darás? Dá-lhes uma madre que aborte e seios secos.
¹⁵ Toda a sua malícia se acha em Gilgal, porque ali os odiei; por causa da maldade das suas obras lançá-los-ei para fora de minha casa. Não os amarei mais; todos os seus príncipes são rebeldes.
¹⁶ Efraim foi ferido, secou-se a sua raiz; não darão fruto; sim, ainda que gerem, matarei os frutos desejáveis do seu ventre.
¹⁷ O meu Deus os rejeitará, porque não o ouviram, e errantes andarão entre as nações.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Para onde Israel não voltaria, mas para onde seriam levados como cativos?",
                        opcoes: [
                            { numero: 1, texto: "Não voltariam ao Egito, mas a Assíria seria seu rei", correta: true },
                            { numero: 2, texto: "Não voltariam a Babilônia", correta: false },
                            { numero: 3, texto: "Não voltariam ao deserto", correta: false },
                            { numero: 4, texto: "Não voltariam para Moabe", correta: false }
                        ],
                        explicacao: "Oseias 9:3 - Não ficarão na terra do Senhor; mas Efraim voltará para o Egito, e na Assíria comerão coisas imundas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontecerá com os tesouros de prata de Israel no dia do castigo?",
                        opcoes: [
                            { numero: 1, texto: "As ortigas os possuirão", correta: true },
                            { numero: 2, texto: "Serão levados pelos sacerdotes", correta: false },
                            { numero: 3, texto: "Ficarão enterrados", correta: false },
                            { numero: 4, texto: "Serão derretidos", correta: false }
                        ],
                        explicacao: "Oseias 9:6 - ...o desejável da sua prata as ortigas o possuirão; espinhos haverá nas suas tendas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por que o Deus de Oseias os rejeitaria?",
                        opcoes: [
                            { numero: 1, texto: "Porque não tinham sacrifícios", correta: false },
                            { numero: 2, texto: "Porque eram pobres", correta: false },
                            { numero: 3, texto: "Porque não o ouviam", correta: true },
                            { numero: 4, texto: "Porque fugiram para as montanhas", correta: false }
                        ],
                        explicacao: "Oseias 9:17 - O meu Deus os rejeitará, porque não o ouviam...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        10: {
            titulo: "A Destruição dos Altares",
            texto: `¹ Israel é uma vide estéril que dá fruto para si mesmo; conforme a abundância do seu fruto, multiplicou também os altares; conforme a bondade da sua terra, assim fizeram boas as estátuas.
² O seu coração está dividido, por isso serão culpados; o Senhor demolirá os seus altares, e destruirá as suas estátuas.
³ Certamente agora dirão: Não temos rei, porque não tememos ao Senhor; e o rei, que faria por nós?
⁴ Falaram palavras, jurando falsamente, fazendo uma aliança; por isso florescerá o juízo como erva peçonhenta nos sulcos dos campos.
⁵ Os moradores de Samaria serão atemorizados pelo bezerro de Bete-Áven; porque o seu povo se lamentará por causa dele, como também os seus sacerdotes idólatras que nele se regozijavam, por causa da sua glória, que se apartou dela.
⁶ Também será levada para a Assíria como um presente ao rei Jarebe; Efraim ficará confuso, e Israel se envergonhará por causa do seu próprio conselho.
⁷ O rei de Samaria será desfeito como a espuma sobre a face da água.
⁸ E os altos de Áven, pecado de Israel, serão destruídos; espinhos e cardos crescerão sobre os seus altares; e dirão aos montes: Cobri-nos! E aos outeiros: Caí sobre nós!
⁹ Desde os dias de Gibeá pecaste, ó Israel; ali permaneceram; a peleja em Gibeá, contra os filhos da perversidade, não os alcançará.
¹⁰ Eu os castigarei na medida do meu desejo; e congregar-se-ão contra eles os povos, quando eu os atar pela sua dupla transgressão.
¹¹ Porque Efraim é uma bezerra domada, que gosta de trilhar; e eu poupava a formosura do seu pescoço; mas farei cavalgar Efraim. Judá lavrará, Jacó lhe desfará os torrões.
¹² Semeai para vós em justiça, ceifai segundo a misericórdia; lavrai o campo de lavoura; porque é tempo de buscar ao Senhor, até que venha e chova a justiça sobre vós.
¹³ Lavrastes a impiedade, segastes a iniquidade, e comestes o fruto da mentira; porque confiaste no teu caminho, na multidão dos teus poderosos.
¹⁴ Portanto, entre o teu povo se levantará um grande tumulto, e todas as tuas fortalezas serão destruídas, como Salmã destruiu a Bete-Arbel no dia da guerra; a mãe ali foi despedaçada com os filhos.
¹⁵ Assim vos fará Betel por causa da vossa grande malícia; de madrugada o rei de Israel será totalmente destruído.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Israel é descrito em relação à sua produtividade egoísta?",
                        opcoes: [
                            { numero: 1, texto: "Uma figueira seca", correta: false },
                            { numero: 2, texto: "Uma vide estéril", correta: false },
                            { numero: 3, texto: "Uma vide exuberante", correta: true },
                            { numero: 4, texto: "Um olival farto", correta: false }
                        ],
                        explicacao: "Oseias 10:1 - Israel é uma vide exuberante, dá fruto para si mesmo...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o povo dirá aos montes e aos outeiros no tempo da destruição?",
                        opcoes: [
                            { numero: 1, texto: "Socorrei-nos", correta: false },
                            { numero: 2, texto: "Cobri-nos e caí sobre nós", correta: true },
                            { numero: 3, texto: "Abri caminhos", correta: false },
                            { numero: 4, texto: "Dai-nos água", correta: false }
                        ],
                        explicacao: "Oseias 10:8 - ...e dirão aos montes: Cobri-nos; e aos outeiros: Caí sobre nós.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o povo deve semear para segundar segundo a misericórdia?",
                        opcoes: [
                            { numero: 1, texto: "Semeai para vós em justiça", correta: true },
                            { numero: 2, texto: "Semeai trigo puro", correta: false },
                            { numero: 3, texto: "Semeai amor ao próximo", correta: false },
                            { numero: 4, texto: "Semeai paciência", correta: false }
                        ],
                        explicacao: "Oseias 10:12 - Semeai para vós em justiça, segai segundo a misericórdia...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
11: {
            titulo: "O Amor de Deus por Israel",
            texto: ` ¹ Quando Israel era menino, eu o amei; e do Egito chamei a meu filho.
² Mas, como os chamavam, assim se iam da sua face; sacrificavam a baalins, e queimavam incenso às imagens de escultura.
³ Todavia, eu ensinei a andar a Efraim; tomando-os pelos seus braços, mas não entenderam que eu os curava.
⁴ Atraí-os com cordas humanas, com laços de amor, e fui para eles como os que tiram o jugo de sobre as suas queixadas, e lhes dei mantimento.
⁵ Não voltará para a terra do Egito, mas a Assíria será seu rei; porque recusam converter-se.
⁶ E cairá a espada sobre as suas cidades, e consumirá os seus ramos, e os devorará, por causa dos seus próprios conselhos.
⁷ Porque o meu povo é inclinado a desviar-se de mim; ainda que chamam ao Altíssimo, nenhum deles o exalta.
⁸ Como te deixaria, ó Efraim? Como te entregaria, ó Israel? Como te faria como Admá? Te poria como Zeboim? Está comovido em mim o meu coração, as minhas compaixões à uma se acendem.
⁹ Não executarei o furor da minha ira; não voltarei para destruir a Efraim, porque eu sou Deus e não homem, o Santo no meio de ti; eu não entrarei na cidade.
¹⁰ Andarão após o Senhor; ele rugirá como leão; rugindo, pois, ele, os filhos do ocidente tremerão.
¹¹ Tremendo virão como um passarinho, os do Egito, e como uma pomba, os da terra da Assíria, e os farei habitar em suas casas, diz o Senhor.
¹² Efraim me cercou com mentira, e a casa de Israel com engano; mas Judá ainda domina com Deus, e com os santos está fiel.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o Senhor descreve o Seu cuidado com Israel quando este era menino?",
                        opcoes: [
                            { numero: 1, texto: "Eu o amei, e do Egito chamei a meu filho", correta: true },
                            { numero: 2, texto: "Eu o deixei no deserto para prová-lo", correta: false },
                            { numero: 3, texto: "Eu o entreguei aos seus próprios caminhos", correta: false },
                            { numero: 4, texto: "Eu o fiz rei sobre as nações", correta: false }
                        ],
                        explicacao: "Oseias 11:1 - Quando Israel era menino, eu o amei; e do Egito chamei a meu filho.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor sentiu ao pensar em entregar Israel ao castigo?",
                        opcoes: [
                            { numero: 1, texto: "Alegria pela justiça feita", correta: false },
                            { numero: 2, texto: "Indiferença total", correta: false },
                            { numero: 3, texto: "O meu coração está comovido dentro de mim", correta: true },
                            { numero: 4, texto: "Desejo de destruição imediata", correta: false }
                        ],
                        explicacao: "Oseias 11:8 - ...o meu coração está comovido dentro de mim, as minhas compaixões à uma se acendem.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Para onde o povo voltaria por se recusar a converter-se?",
                        opcoes: [
                            { numero: 1, texto: "Para as montanhas de Judá", correta: false },
                            { numero: 2, texto: "Para as ilhas do mar", correta: false },
                            { numero: 3, texto: "Para o deserto do Sinai", correta: false },
                            { numero: 4, texto: "Para a terra do Egito (ou a Assíria seria seu rei)", correta: true }
                        ],
                        explicacao: "Oseias 11:5 - Não voltará para a terra do Egito, mas a Assíria será seu rei, porque recusaram converter-se.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        12: {
            titulo: "Efraim é Repreendido",
            texto: `¹ Efraim se apascenta de vento, e segue o vento leste; todo o dia multiplica a mentira e a destruição; e fazem aliança com a Assíria, e o azeite se leva ao Egito.
² O Senhor também com Judá tem contenda, e castigará Jacó segundo os seus caminhos; segundo as suas obras o recompensará.
³ No ventre pegou do calcanhar de seu irmão, e na sua força lutou com Deus.
⁴ Lutou com o anjo, e prevaleceu; chorou, e lhe suplicou; em Betel o achou, e ali falou conosco,
⁵ Sim, o Senhor, o Deus dos Exércitos; o Senhor é o seu memorial.
⁶ Tu, pois, converte-te a teu Deus; guarda a benevolência e o juízo, e em teu Deus espera sempre.
⁷ É um mercador; tem nas mãos uma balança enganosa; ama a opressão.
⁸ E diz Efraim: Contudo me tenho enriquecido, e tenho adquirido para mim grandes bens; em todo o meu trabalho não acharão em mim iniquidade alguma que seja pecado.
⁹ Mas eu sou o Senhor teu Deus desde a terra do Egito; eu ainda te farei habitar em tendas, como nos dias da festa solene.
¹⁰ Falei aos profetas, e multipliquei a visão; e pelo ministério dos profetas propus símiles.
¹¹ Não é Gileade iniquidade? Pura vaidade são eles; em Gilgal sacrificam bois; os seus altares são como montões de pedras nos sulcos dos campos.
¹² Jacó fugiu para o campo da Síria, e Israel serviu por uma mulher, e por uma mulher guardou o gado.
¹³ Mas o Senhor por meio de um profeta fez subir a Israel do Egito, e por um profeta foi ele guardado.
¹⁴ Efraim mui amargosamente provocou a sua ira; portanto deixará ficar sobre ele o seu sangue, e o seu Senhor o recompensará pelo seu opróbrio.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Com quem Jacó lutou no ventre e depois com o anjo?",
                        opcoes: [
                            { numero: 1, texto: "Com seu irmão Esaú", correta: false },
                            { numero: 2, texto: "Com Deus (o anjo)", correta: true },
                            { numero: 3, texto: "Com um soldado filisteu", correta: false },
                            { numero: 4, texto: "Com um rei estrangeiro", correta: false }
                        ],
                        explicacao: "Oseias 12:3-4 - No ventre pegou do calcanhar de seu irmão, e pela sua força lutou com Deus. Lutou com o anjo, e prevaleceu...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Efraim dizia sobre as suas riquezas apesar da sua iniquidade?",
                        opcoes: [
                            { numero: 1, texto: "Contudo me tenho enriquecido, tenho achado para mim bens", correta: true },
                            { numero: 2, texto: "Vou dar tudo aos pobres", correta: false },
                            { numero: 3, texto: "Minhas riquezas são de Deus", correta: false },
                            { numero: 4, texto: "Perdi tudo no deserto", correta: false }
                        ],
                        explicacao: "Oseias 12:8 - E diz Efraim: Contudo me tenho enriquecido, tenho achado para mim bens...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por meio de quem o Senhor tirou Israel do Egito e o preservou?",
                        opcoes: [
                            { numero: 1, texto: "Por meio de um anjo", correta: false },
                            { numero: 2, texto: "Por meio de um exército", correta: false },
                            { numero: 3, texto: "Por meio de um profeta", correta: true },
                            { numero: 4, texto: "Por meio de um rei", correta: false }
                        ],
                        explicacao: "Oseias 12:13 - Mas o Senhor por meio de um profeta fez subir a Israel do Egito, e por um profeta foi ele preservado.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        13: {
            titulo: "A Destruição de Efraim",
            texto: ` ¹ Quando Efraim falava, tremia-se; foi exaltado em Israel; mas ele se fez culpado em Baal, e morreu.
² E agora multiplicaram pecados, e da sua prata fizeram uma imagem de fundição, ídolos segundo o seu entendimento, todos obra de artífices, dos quais dizem: Os homens que sacrificam beijem os bezerros.
³ Por isso serão como a nuvem da manhã, e como o orvalho da madrugada, que cedo passa; como folhelho que a tempestade lança da eira, e como a fumaça da chaminé.
⁴ Todavia, eu sou o Senhor teu Deus desde a terra do Egito; portanto não reconhecerás outro deus além de mim, porque não há Salvador senão eu.
⁵ Eu te conheci no deserto, na terra muito seca.
⁶ Depois eles se fartaram em proporção do seu pasto; estando fartos, ensoberbeceu-se o seu coração, por isso se esqueceram de mim.
⁷ Serei, pois, para eles como leão; como leopardo espiarei no caminho.
⁸ Como ursa roubada dos seus filhos, os encontrarei, e lhes romperei as teias do seu coração, e como leão ali os devorarei; as feras do campo os despedaçarão.
⁹ Para a tua perda, ó Israel, te rebelaste contra mim, a saber, contra o teu ajudador.
¹⁰ Onde está agora o teu rei, para que te guarde em todas as tuas cidades, e os teus juízes, dos quais disseste: Dá-me rei e príncipes?
¹¹ Dei-te um rei na minha ira, e tirei-o no meu furor.
¹² A iniquidade de Efraim está atada, o seu pecado está armazenado.
¹³ Dores de mulher de parto lhe sobrevirão; ele é um filho insensato; porque é tempo e não está no lugar em que deve vir à luz.
¹⁴ Eu os remirei da mão do inferno, e os resgatarei da morte. Onde estão, ó morte, as tuas pragas? Onde está, ó inferno, a tua perdição? O arrependimento está escondido de meus olhos.
¹⁵ Ainda que ele dê fruto entre os irmãos, virá o vento leste, vento do Senhor, subindo do deserto, e secar-se-á a sua nascente, e secar-se-á a sua fonte; ele saqueará o tesouro de todos os vasos desejáveis.
¹⁶ Samaria virá a ser deserta, porque se rebelou contra o seu Deus; cairão à espada, seus filhos serão despedaçados, e as suas grávidas serão fendidas pelo meio.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "A que é comparada a efêmera existência de Israel por causa do pecado?",
                        opcoes: [
                            { numero: 1, texto: "Uma rocha no mar", correta: false },
                            { numero: 2, texto: "A nuvem da manhã e o orvalho que cedo passa", correta: true },
                            { numero: 3, texto: "Uma árvore plantada junto às águas", correta: false },
                            { numero: 4, texto: "Um muro de pedra", correta: false }
                        ],
                        explicacao: "Oseias 13:3 - Por isso serão como a nuvem da manhã, e como o orvalho que cedo passa...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor diz que seria para Efraim, agindo como um animal feroz?",
                        opcoes: [
                            { numero: 1, texto: "Como um leão e como um leopardo no caminho", correta: true },
                            { numero: 2, texto: "Como uma águia protetora", correta: false },
                            { numero: 3, texto: "Como um cordeiro manso", correta: false },
                            { numero: 4, texto: "Como uma pomba no céu", correta: false }
                        ],
                        explicacao: "Oseias 13:7 - Ser-lhes-ei, pois, como leão; como leopardo no caminho os espreitarei.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Onde estava a ajuda de Israel quando eles se perderam?",
                        opcoes: [
                            { numero: 1, texto: "No rei da Assíria", correta: false },
                            { numero: 2, texto: "Nos seus muitos ídolos", correta: false },
                            { numero: 3, texto: "Somente no Senhor", correta: true },
                            { numero: 4, texto: "Nos exércitos vizinhos", correta: false }
                        ],
                        explicacao: "Oseias 13:9 - Para tua perda, ó Israel, te rebelaste contra mim, a saber, contra a tua ajuda.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        14: {
            titulo: "Súplica para a Conversão e Promessa de Bênção",
            texto: `¹ Converte-te, ó Israel, ao Senhor teu Deus; porque pelos teus pecados tens caído.
² Tomai convosco palavras, e convertei-vos ao Senhor; dizei-lhe: Tira toda a iniquidade, e aceita o que é bom; e ofereceremos como novilhos os sacrifícios dos nossos lábios.
³ Não nos salvará a Assíria, não iremos montados em cavalos, e à obra das nossas mãos já não diremos mais: Tu és o nosso deus; porque por ti o órfão alcança misericórdia.
⁴ Eu sararei a sua infidelidade, eu voluntariamente os amarei; porque a minha ira se apartou deles.
⁵ Eu serei para Israel como o orvalho. Ele florescerá como o lírio e lançará as suas raízes como o Líbano.
⁶ Estender-se-ão os seus galhos, e a sua glória será como a da oliveira, e sua fragrância como a do Líbano.
⁷ Voltarão os que habitam debaixo da sua sombra; serão vivificados como o trigo, e florescerão como a vide; a sua memória será como o vinho do Líbano.
⁸ Efraim dirá: Que mais tenho eu com os ídolos? Eu o tenho ouvido, e cuidarei dele; eu sou como a faia verde; de mim é achado o teu fruto.
⁹ Quem é sábio, para que entenda estas coisas? Quem é prudente, para que as saiba? Porque os caminhos do Senhor são retos, e os justos andarão neles, mas os transgressores neles cairão.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Israel deve levar consigo ao converter-se ao Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Ouro e prata", correta: false },
                            { numero: 2, texto: "Sacrifícios de animais", correta: false },
                            { numero: 3, texto: "Palavras", correta: true },
                            { numero: 4, texto: "Armas de guerra", correta: false }
                        ],
                        explicacao: "Oseias 14:2 - Tomai convosco palavras, e convertei-vos ao Senhor...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como o Senhor promete ser para Israel para que ele floresça?",
                        opcoes: [
                            { numero: 1, texto: "Como o orvalho", correta: true },
                            { numero: 2, texto: "Como o sol forte", correta: false },
                            { numero: 3, texto: "Como o vento norte", correta: false },
                            { numero: 4, texto: "Como uma tempestade", correta: false }
                        ],
                        explicacao: "Oseias 14:5 - Eu serei para Israel como o orvalho; ele florescerá como o lírio...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como são descritos os caminhos do Senhor no último verso?",
                        opcoes: [
                            { numero: 1, texto: "Sombrios e difíceis", correta: false },
                            { numero: 2, texto: "Retos, e os justos andarão neles", correta: true },
                            { numero: 3, texto: "Tortuosos para os homens", correta: false },
                            { numero: 4, texto: "Escondidos dos olhos humanos", correta: false }
                        ],
                        explicacao: "Oseias 14:9 - ...porque os caminhos do Senhor são retos, e os justos andarão neles...",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};