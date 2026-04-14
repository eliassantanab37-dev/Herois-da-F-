// js/livros/efesios.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const efesios = {
    nome: "Efésios",
    icone: "🛡️",
    autor: "Paulo",
    background: "./imagens/efesios_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "Bênçãos Espirituais em Cristo",
            texto: ` 1 Paulo, apóstolo de Jesus Cristo, pela vontade de Deus, aos santos que estão em Éfeso, e fiéis em Cristo Jesus:
2 A vós graça, e paz da parte de Deus nosso Pai e do Senhor Jesus Cristo!
3 Bendito o Deus e Pai de nosso Senhor Jesus Cristo, o qual nos abençoou com todas as bênçãos espirituais nos lugares celestiais em Cristo;
4 Como também nos elegeu nele antes da fundação do mundo, para que fôssemos santos e irrepreensíveis diante dele em amor;
5 E nos predestinou para filhos de adoção por Jesus Cristo, para si mesmo, segundo o beneplácito de sua vontade,
6 Para louvor da glória de sua graça, pela qual nos fez agradáveis a si no Amado,
7 Em quem temos a redenção pelo seu sangue, a remissão das ofensas, segundo as riquezas da sua graça,
8 Que ele fez abundar para conosco em toda a sabedoria e prudência;
9 Descobrindo-nos o mistério da sua vontade, segundo o seu beneplácito, que propusera em si mesmo,
10 De tornar a congregar em Cristo todas as coisas, na dispensação da plenitude dos tempos, tanto as que estão nos céus como as que estão na terra;
11 Nele, digo, em quem também fomos feitos herança, havendo sido predestinados, conforme o propósito daquele que faz todas as coisas, segundo o conselho da sua vontade;
12 Com o fim de sermos para louvor da sua glória, nós os que primeiro esperamos em Cristo;
13 Em quem também vós estais, depois que ouvistes a palavra da verdade, o evangelho da vossa salvação; e, tendo nele também crido, fostes selados com o Espírito Santo da promessa;
14 O qual é o penhor da nossa herança, para redenção da possessão adquirida, para louvor da sua glória.
15 Por isso, ouvindo eu também a fé que entre vós há no Senhor Jesus, e o vosso amor para com todos os santos,
16 Não cesso de dar graças a Deus por vós, lembrando-me de vós nas minhas orações:
17 Para que o Deus de nosso Senhor Jesus Cristo, o Pai da glória, vos dê em seu conhecimento o espírito de sabedoria e de revelação;
18 Tendo iluminados os olhos do vosso entendimento, para que saibais qual seja a esperança da sua vocação, e quais as riquezas da glória da sua herança nos santos;
19 E qual a sobre-excelente grandeza do seu poder sobre nós, os que cremos, segundo a operação da força do seu poder,
20 Que manifestou em Cristo, ressuscitando-o dentre os mortos, e pondo-o à sua direita nos céus,
21 Acima de todo o principado, e poder, e potestade, e domínio, e de todo o nome que se nomeia, não só neste século, mas também no vindouro;
22 E sujeitou todas as coisas a seus pés, e sobre todas as coisas o constituiu como cabeça da igreja,
23 Que é o seu corpo, a plenitude daquele que cumpre tudo em todos.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Segundo o capítulo 1, quando Deus nos elegeu em Cristo?",
                        opcoes: [
                            { numero: 1, texto: "Depois que cumprimos a lei", correta: false },
                            { numero: 2, texto: "Antes da fundação do mundo", correta: true },
                            { numero: 3, texto: "Quando fomos batizados", correta: false },
                            { numero: 4, texto: "No dia em que Paulo chegou a Éfeso", correta: false }
                        ],
                        explicacao: "Efésios 1:4 - Como também nos elegeu nele antes da fundação do mundo, para que fôssemos santos e irrepreensíveis diante dele em amor.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que temos em Cristo pelo Seu sangue, segundo o versículo 7?",
                        opcoes: [
                            { numero: 1, texto: "A redenção e a remissão das ofensas", correta: true },
                            { numero: 2, texto: "Apenas uma boa filosofia", correta: false },
                            { numero: 3, texto: "Riquezas materiais imediatas", correta: false },
                            { numero: 4, texto: "Poder político sobre Roma", correta: false }
                        ],
                        explicacao: "Efésios 1:7 - Em quem temos a redenção pelo seu sangue, a remissão das ofensas, segundo as riquezas da sua graça.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "Salvos pela Graça",
            texto: ` ¹ E vos vivificou, estando vós mortos em ofensas e pecados,
² Em que noutro tempo andastes segundo o curso deste mundo, segundo o príncipe das potestades do ar, do espírito que agora opera nos filhos da desobediência;
³ Entre os quais todos nós também antes andávamos nos desejos da nossa carne, fazendo a vontade da carne e dos pensamentos; e éramos por natureza filhos da ira, como os outros também.
⁴ Mas Deus, que é riquíssimo em misericórdia, pelo seu muito amor com que nos amou,
⁵ Estando nós ainda mortos em nossas ofensas, nos vivificou juntamente com Cristo (pela graça sois salvos),
⁶ E nos ressuscitou juntamente com ele e nos fez assentar nos lugares celestiais, em Cristo Jesus;
⁷ Para mostrar nos séculos vindouros as abundantes riquezas da sua graça pela sua benignidade para conosco em Cristo Jesus.
⁸ Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus.
⁹ Não vem das obras, para que ninguém se glorie;
¹⁰ Porque somos feitura sua, criados em Cristo Jesus para as boas obras, as quais Deus preparou para que andássemos nelas.
¹¹ Portanto, lembrai-vos de que vós noutro tempo éreis gentios na carne, e chamados incircuncisão pelos que na carne se chamam circuncisão feita pela mão dos homens;
¹² Que naquele tempo estáveis sem Cristo, separados da comunidade de Israel, e estranhos às alianças da promessa, não tendo esperança, e sem Deus no mundo.
¹³ Mas agora em Cristo Jesus, vós, que antes estáveis longe, já pelo sangue de Cristo chegastes perto.
¹⁴ Porque ele é a nossa paz, o qual de ambos os povos fez um; e, derrubando a parede de separação que estava no meio,
¹⁵ Na sua carne desfez a inimizade, isto é, a lei dos mandamentos, que consistia em ordenanças, para criar em si mesmo dos dois um novo homem, fazendo a paz,
¹⁶ E pela cruz reconciliar ambos com Deus em um corpo, matando com ela as inimizades.
¹⁷ E, vindo, ele evangelizou a paz, a vós que estáveis longe, e aos que estavam perto;
¹⁸ Porque por ele ambos temos acesso ao Pai em um mesmo Espírito.
¹⁹ Assim que já não sois estrangeiros, nem forasteiros, mas concidadãos dos santos, e da família de Deus;
²⁰ Edificados sobre o fundamento dos apóstolos e dos profetas, de que Jesus Cristo é a principal pedra da esquina;
²¹ No qual todo o edifício, bem ajustado, cresce para templo santo no Senhor.
²² No qual também vós juntamente sois edificados para morada de Deus em Espírito. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Pela graça sois salvos, por meio da fé; e isto não vem de vós, é:",
                        opcoes: [
                            { numero: 1, texto: "Resultado do esforço humano", correta: false },
                            { numero: 2, texto: "Dom de Deus", correta: true },
                            { numero: 3, texto: "Uma recompensa por boas obras", correta: false },
                            { numero: 4, texto: "Salário pelo trabalho na igreja", correta: false }
                        ],
                        explicacao: "Efésios 2:8 - Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Cristo fez com a 'parede de separação' que havia entre judeus e gentios?",
                        opcoes: [
                            { numero: 1, texto: "Aumentou a sua altura", correta: false },
                            { numero: 2, texto: "A derribou, fazendo de ambos um só", correta: true },
                            { numero: 3, texto: "Deixou como estava", correta: false },
                            { numero: 4, texto: "Pediu aos romanos para guardarem", correta: false }
                        ],
                        explicacao: "Efésios 2:14 - Porque ele é a nossa paz, o qual de ambos os povos fez um; e, derrubando a parede de separação que estava no meio.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "O Mistério de Cristo",
            texto: ` ¹ Por esta causa eu, Paulo, sou o prisioneiro de Jesus Cristo por vós, os gentios;
² Se é que tendes ouvido a dispensação da graça de Deus, que para convosco me foi dada;
³ Como me foi este mistério manifestado pela revelação, como antes um pouco vos escrevi;
⁴ Por isso, quando ledes, podeis perceber a minha compreensão do mistério de Cristo,
⁵ O qual noutros séculos não foi manifestado aos filhos dos homens, como agora tem sido revelado pelo Espírito aos seus santos apóstolos e profetas;
⁶ A saber, que os gentios são co-herdeiros, e de um mesmo corpo, e participantes da promessa em Cristo pelo evangelho;
⁷ Do qual fui feito ministro, pelo dom da graça de Deus, que me foi dado segundo a operação do seu poder.
⁸ A mim, o mínimo de todos os santos, me foi dada esta graça de anunciar entre os gentios, por meio do evangelho, as riquezas incompreensíveis de Cristo,
⁹ E demonstrar a todos qual seja a comunhão do mistério, que desde os séculos esteve oculto em Deus, que tudo criou por meio de Jesus Cristo;
¹⁰ Para que agora, pela igreja, a multiforme sabedoria de Deus seja conhecida dos principados e potestades nos céus,
¹¹ Segundo o eterno propósito que fez em Cristo Jesus nosso Senhor,
¹² No qual temos ousadia e acesso com confiança, pela nossa fé nele.
¹³ Portanto, vos peço que não desfaleçais nas minhas tribulações por vós, que é a vossa glória.
¹⁴ Por causa disto me ponho de joelhos perante o Pai de nosso Senhor Jesus Cristo,
¹⁵ Do qual toda a família nos céus e na terra toma o nome,
¹⁶ Para que, segundo as riquezas da sua glória, vos conceda que sejais fortalecidos com poder pelo seu Espírito no homem interior;
¹⁷ Para que Cristo habite pela fé nos vossos corações; a fim de, estando enraizados e fundados em amor,
¹⁸ Poderdes perfeitamente compreender, com todos os santos, qual seja a largura, e o comprimento, e a altura, e a profundidade,
¹⁹ E conhecer o amor de Cristo, que excede todo o entendimento, para que sejais cheios de toda a plenitude de Deus.
²⁰ Ora, àquele que é poderoso para fazer tudo muito mais abundantemente além daquilo que pedimos ou pensamos, segundo o poder que em nós opera,
²¹ A esse glória na igreja, por Jesus Cristo, em todas as gerações, para todo o sempre. Amém. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é o mistério que foi revelado a Paulo sobre os gentios?",
                        opcoes: [
                            { numero: 1, texto: "Que os gentios deveriam servir aos judeus", correta: false },
                            { numero: 2, texto: "Que os gentios são co-herdeiros e participantes da promessa em Cristo", correta: true },
                            { numero: 3, texto: "Que os gentios nunca seriam salvos", correta: false },
                            { numero: 4, texto: "Que os gentios deveriam morar em Israel", correta: false }
                        ],
                        explicacao: "Efésios 3:6 - A saber, que os gentios são co-herdeiros, e de um mesmo corpo, e participantes da promessa em Cristo pelo evangelho.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Deus é capaz de fazer, segundo Efésios 3:20?",
                        opcoes: [
                            { numero: 1, texto: "Apenas o que pedimos", correta: false },
                            { numero: 2, texto: "Muito mais abundantemente além daquilo que pedimos ou pensamos", correta: true },
                            { numero: 3, texto: "Somente o que está escrito na lei", correta: false },
                            { numero: 4, texto: "Nada sem a nossa permissão", correta: false }
                        ],
                        explicacao: "Efésios 3:20 - Ora, àquele que é poderoso para fazer tudo muito mais abundantemente além daquilo que pedimos ou pensamos...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "A Unidade do Corpo",
            texto: ` ¹ Rogo-vos, pois, eu, o preso do Senhor, que andeis como é digno da vocação com que fostes chamados,
² Com toda a humildade e mansidão, com longanimidade, suportando-vos uns aos outros em amor,
³ Procurando guardar a unidade do Espírito pelo vínculo da paz.
⁴ Há um só corpo e um só Espírito, como também fostes chamados em uma só esperança da vossa vocação;
⁵ Um só Senhor, uma só fé, um só batismo;
⁶ Um só Deus e Pai de todos, o qual é sobre todos, e por todos e em todos vós.
⁷ Mas a graça foi dada a cada um de nós segundo a medida do dom de Cristo.
⁸ Por isso diz: Subindo ao alto, levou cativo o cativeiro, e deu dons aos homens.
⁹ Ora, isto ele subiu que é, senão que também antes tinha descido às partes mais baixas da terra?
¹⁰ Aquele que desceu é também o mesmo que subiu acima de todos os céus, para cumprir todas as coisas.
¹¹ E ele mesmo deu uns para apóstolos, e outros para profetas, e outros para evangelistas, e outros para pastores e doutores,
¹² Querendo o aperfeiçoamento dos santos, para a obra do ministério, para edificação do corpo de Cristo;
¹³ Até que todos cheguemos à unidade da fé, e ao conhecimento do Filho de Deus, a homem perfeito, à medida da estatura completa de Cristo,
¹⁴ Para que não sejamos mais meninos inconstantes, levados em roda por todo o vento de doutrina, pelo engano dos homens que com astúcia enganam fraudulosamente.
¹⁵ Antes, seguindo a verdade em amor, cresçamos em tudo naquele que é a cabeça, Cristo,
¹⁶ Do qual todo o corpo, bem ajustado, e ligado pelo auxílio de todas as juntas, segundo a justa operação de cada parte, faz o aumento do corpo, para sua edificação em amor.
¹⁷ E digo isto, e testifico no Senhor, para que não andeis mais como andam também os outros gentios, na vaidade da sua mente.
¹⁸ Entenebrecidos no entendimento, separados da vida de Deus pela ignorância que há neles, pela dureza do seu coração;
¹⁹ Os quais, havendo perdido todo o sentimento, se entregaram à dissolução, para com avidez cometerem toda a impureza.
²⁰ Mas vós não aprendestes assim a Cristo,
²¹ Se é que o tendes ouvido, e nele fostes ensinados, como está a verdade em Jesus;
²² Que, quanto ao trato passado, vos despojeis do velho homem, que se corrompe pelas concupiscências do engano;
²³ E vos renoveis no espírito da vossa mente;
²⁴ E vos revistais do novo homem, que segundo Deus é criado em verdadeira justiça e santidade.
²⁵ Por isso deixai a mentira, e falai a verdade cada um com o seu próximo; porque somos membros uns dos outros.
²⁶ Irai-vos, e não pequeis; não se ponha o sol sobre a vossa ira.
²⁷ Não deis lugar ao diabo.
²⁸ Aquele que furtava, não furte mais; antes trabalhe, fazendo com as mãos o que é bom, para que tenha o que repartir com o que tiver necessidade.
²⁹ Não saia da vossa boca nenhuma palavra torpe, mas só a que for boa para promover a edificação, para que dê graça aos que a ouvem.
³⁰ E não entristeçais o Espírito Santo de Deus, no qual estais selados para o dia da redenção.
³¹ Toda a amargura, e ira, e cólera, e gritaria, e blasfêmia e toda a malícia sejam tiradas dentre vós,
³² Antes sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quantos 'Senhores', 'Fés' e 'Batismos' existem, segundo o capítulo 4?",
                        opcoes: [
                            { numero: 1, texto: "Muitos, dependendo da cultura", correta: false },
                            { numero: 2, texto: "Um só Senhor, uma só fé, um só batismo", correta: true },
                            { numero: 3, texto: "Dois de cada", correta: false },
                            { numero: 4, texto: "Três de cada", correta: false }
                        ],
                        explicacao: "Efésios 4:5 - Um só Senhor, uma só fé, um só batismo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que não deve sair da nossa boca, segundo o versículo 29?",
                        opcoes: [
                            { numero: 1, texto: "Nenhuma palavra torpe", correta: true },
                            { numero: 2, texto: "Nenhuma canção", correta: false },
                            { numero: 3, texto: "Palavras de alegria", correta: false },
                            { numero: 4, texto: "A língua grega", correta: false }
                        ],
                        explicacao: "Efésios 4:29 - Não saia da vossa boca nenhuma palavra torpe, mas só a que for boa para promovente edificação.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "Andai em Amor e Luz",
            texto: `¹ Sede, pois, imitadores de Deus, como filhos amados;
² E andai em amor, como também Cristo nos amou, e se entregou a si mesmo por nós, em oferta e sacrifício a Deus, em cheiro suave.
³ Mas a fornicação, e toda a impureza ou avareza, nem ainda se nomeie entre vós, como convém a santos;
⁴ Nem torpezas, nem tolices, nem zombarias, que não convêm; mas antes, ações de graças.
⁵ Porque bem sabeis isto: que nenhum fornicador, ou impuro, ou avarento, o qual é idólatra, tem herança no reino de Cristo e de Deus.
⁶ Ninguém vos engane com palavras vãs; porque por estas coisas vem a ira de Deus sobre os filhos da desobediência.
⁷ Portanto, não sejais seus companheiros.
⁸ Porque noutro tempo éreis trevas, mas agora sois luz no Senhor; andai como filhos da luz
⁹ (Porque o fruto do Espírito está em toda a bondade, e justiça e verdade);
¹⁰ Aprovando o que é agradável ao Senhor.
¹¹ E não comuniqueis com as obras infrutuosas das trevas, mas antes condenai-as.
¹² Porque o que eles fazem em oculto até dizê-lo é torpe.
¹³ Mas todas estas coisas se manifestam, sendo condenadas pela luz, porque a luz tudo manifesta.
¹⁴ Por isso diz: Desperta, tu que dormes, e levanta-te dentre os mortos, e Cristo te esclarecerá.
¹⁵ Portanto, vede prudentemente como andais, não como néscios, mas como sábios,
¹⁶ Remindo o tempo; porquanto os dias são maus.
¹⁷ Por isso não sejais insensatos, mas entendei qual seja a vontade do Senhor.
¹⁸ E não vos embriagueis com vinho, em que há dissolução, mas enchei-vos do Espírito;
¹⁹ Falando entre vós em salmos, e hinos, e cânticos espirituais; cantando e salmodiando ao Senhor no vosso coração;
²⁰ Dando sempre graças por tudo a nosso Deus e Pai, em nome de nosso Senhor Jesus Cristo;
²¹ Sujeitando-vos uns aos outros no temor de Deus.
²² Vós, mulheres, sujeitai-vos a vossos maridos, como ao Senhor;
²³ Porque o marido é a cabeça da mulher, como também Cristo é a cabeça da igreja, sendo ele próprio o salvador do corpo.
²⁴ De sorte que, assim como a igreja está sujeita a Cristo, assim também as mulheres sejam em tudo sujeitas a seus maridos.
²⁵ Vós, maridos, amai vossas mulheres, como também Cristo amou a igreja, e a si mesmo se entregou por ela,
²⁶ Para a santificar, purificando-a com a lavagem da água, pela palavra,
²⁷ Para a apresentar a si mesmo igreja gloriosa, sem mácula, nem ruga, nem coisa semelhante, mas santa e irrepreensível.
²⁸ Assim devem os maridos amar as suas próprias mulheres, como a seus próprios corpos. Quem ama a sua mulher, ama-se a si mesmo.
²⁹ Porque nunca ninguém odiou a sua própria carne; antes a alimenta e sustenta, como também o Senhor à igreja;
³⁰ Porque somos membros do seu corpo, da sua carne, e dos seus ossos.
³¹ Por isso deixará o homem seu pai e sua mãe, e se unirá a sua mulher; e serão dois numa carne.
³² Grande é este mistério; digo-o, porém, a respeito de Cristo e da igreja.
³³ Assim também vós, cada um em particular, ame a sua própria mulher como a si mesmo, e a mulher reverencie o marido. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Com o que não devemos nos embriagar, e do que devemos nos encher?",
                        opcoes: [
                            { numero: 1, texto: "Não vos embriagueis com vinho... mas enchei-vos do Espírito", correta: true },
                            { numero: 2, texto: "Não vos embriagueis com água... mas enchei-vos de comida", correta: false },
                            { numero: 3, texto: "Não vos embriagueis com orgulho... mas enchei-vos de ouro", correta: false },
                            { numero: 4, texto: "Não importa a bebida, desde que ore", correta: false }
                        ],
                        explicacao: "Efésios 5:18 - E não vos embriagueis com vinho, em que há contenda, mas enchei-vos do Espírito.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é a recomendação aos maridos em relação às suas esposas?",
                        opcoes: [
                            { numero: 1, texto: "Que as ignorem", correta: false },
                            { numero: 2, texto: "Amai vossas mulheres, como também Cristo amou a igreja", correta: true },
                            { numero: 3, texto: "Que as tratem como servas", correta: false },
                            { numero: 4, texto: "Que sejam amados primeiro", correta: false }
                        ],
                        explicacao: "Efésios 5:25 - Vós, maridos, amai vossas mulheres, como também Cristo amou a igreja, e a si mesmo se entregou por ela.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "A Armadura de Deus",
            texto: ` 1 Vós, filhos, sede obedientes a vossos pais no Senhor, porque isto é justo.
2 Honra a teu pai e a tua mãe, que é o primeiro mandamento com promessa;
3 Para que te vá bem, e vivas muito tempo sobre a terra.
4 E vós, pais, não provoqueis à ira a vossos filhos, mas criai-os na doutrina e admoestação do Senhor.
5 Vós, servos, obedecei a vossos senhores segundo a carne, com temor e tremor, na sinceridade de vosso coração, como a Cristo;
6 Não servindo à vista, como para agradar aos homens, mas como servos de Cristo, fazendo de coração a vontade de Deus;
7 Servindo de boa vontade como ao Senhor, e não como aos homens.
8 Sabendo que cada um receberá do Senhor todo o bem que fizer, seja servo, seja livre.
9 E vós, senhores, fazei o mesmo para com eles, deixando as ameaças, sabendo também que o vosso Senhor está no céu, e que para com ele não há acepção de pessoas.
10 No demais, irmãos meus, fortalecei-vos no Senhor e na força do seu poder.
11 Revesti-vos de toda a armadura de Deus, para que possais estar firmes contra as astutas ciladas do diabo.
12 Porque não temos que lutar contra a carne e o sangue, mas, sim, contra os principados, contra as potestades, contra os príncipes das trevas deste século, contra as hostes espirituais da maldade, nos lugares celestiais.
13 Portanto, tomai toda a armadura de Deus, para que possais resistir no dia mau e, havendo feito tudo, ficar firmes.
14 Estai, pois, firmes, tendo cingidos os vossos lombos com a verdade, e vestida a couraça da justiça;
15 E calçados os pés na preparação do evangelho da paz;
16 Tomando sobretudo o escudo da fé, com o qual podereis apagar todos os dardos inflamados do maligno.
17 Tomai também o capacete da salvação, e a espada do Espírito, que é a palavra de Deus;
18 Orando em todo o tempo com toda a oração e súplica no Espírito, e vigiando nisto com toda a perseverança e súplica por todos os santos,
19 E por mim; para que me seja dada, no abrir da minha boca, a palavra com confiança, para fazer notório o mistério do evangelho,
20 Pelo qual sou embaixador em cadeias; para que possa falar dele livremente, como me convém falar.
21 Ora, para que vós também possais saber dos meus negócios, e o que eu faço, Tíquico, irmão amado, e fiel ministro do Senhor, vos informará de tudo.
22 O qual vos enviei para o mesmo fim, para que saibais do nosso estado, e ele console os vossos corações.
23 Paz seja com os irmãos, e amor com fé da parte de Deus Pai e da do Senhor Jesus Cristo.
24 A graça seja com todos os que amam a nosso Senhor Jesus Cristo em sinceridade. Amém.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Contra quem é a nossa luta (milícia), segundo Paulo?",
                        opcoes: [
                            { numero: 1, texto: "Contra a carne e o sangue (pessoas físicas)", correta: false },
                            { numero: 2, texto: "Contra principados, potestades e as hostes espirituais da maldade", correta: true },
                            { numero: 3, texto: "Contra o império romano", correta: false },
                            { numero: 4, texto: "Contra os outros apóstolos", correta: false }
                        ],
                        explicacao: "Efésios 6:12 - Porque não temos que lutar contra a carne e o sangue, mas, sim, contra os principados...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é a 'espada do Espírito' citada na armadura?",
                        opcoes: [
                            { numero: 1, texto: "A oração constante", correta: false },
                            { numero: 2, texto: "A palavra de Deus", correta: true },
                            { numero: 3, texto: "O escudo da fé", correta: false },
                            { numero: 4, texto: "Uma espada de ferro real", correta: false }
                        ],
                        explicacao: "Efésios 6:17 - Tomai também o capacete da salvação, e a espada do Espírito, que é a palavra de Deus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};