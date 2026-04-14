// js/livros/primeira_pedro.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const primeira_pedro = {
    nome: "1 Pedro",   
    icone: "📜",         // Emoji ou Ícone que aparece no card
    autor: "Pedro",
   //background: "./imagens/1pedro_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "Uma Esperança Viva",
            texto: ` ¹ Pedro, apóstolo de Jesus Cristo, aos estrangeiros dispersos no Ponto, Galácia, Capadócia, Ásia e Bitínia;
² Eleitos segundo a presciência de Deus Pai, em santificação do Espírito, para a obediência e aspersão do sangue de Jesus Cristo: Graça e paz vos sejam multiplicadas.
³ Bendito seja o Deus e Pai de nosso Senhor Jesus Cristo que, segundo a sua grande misericórdia, nos gerou de novo para uma viva esperança, pela ressurreição de Jesus Cristo dentre os mortos,
⁴ Para uma herança incorruptível, incontaminável, e que não se pode murchar, guardada nos céus para vós,
⁵ Que mediante a fé estais guardados no poder de Deus para a salvação, já prestes para se revelar no último tempo,
⁶ Em que vós grandemente vos alegrais, ainda que agora importa, sendo necessário, que estejais por um pouco contristados com várias tentações,
⁷ Para que a prova da vossa fé, muito mais preciosa do que o ouro que perece e é provado pelo fogo, se ache em louvor, e honra, e glória, na revelação de Jesus Cristo;
⁸ Ao qual, não o havendo visto, amais; no qual, não o vendo agora, mas crendo, vos alegrais com gozo indescritível e glorioso;
⁹ Alcançando o fim da vossa fé, a salvação das vossas almas.
¹⁰ Da qual salvação inquiriram e trataram diligentemente os profetas que profetizaram da graça que vos foi dada,
¹¹ Indagando que tempo ou que ocasião de tempo o Espírito de Cristo, que estava neles, indicava, anteriormente testificando os sofrimentos que a Cristo haviam de vir, e a glória que se lhes havia de seguir.
¹² Aos quais foi revelado que, não para si mesmos, mas para nós, eles ministravam estas coisas que agora vos foram anunciadas por aqueles que, pelo Espírito Santo enviado do céu, vos pregaram o evangelho; para as quais coisas os anjos desejam bem atentar.
¹³ Portanto, cingindo os lombos do vosso entendimento, sede sóbrios, e esperai inteiramente na graça que se vos ofereceu na revelação de Jesus Cristo;
¹⁴ Como filhos obedientes, não vos conformando com as concupiscências que antes havia em vossa ignorância;
¹⁵ Mas, como é santo aquele que vos chamou, sede vós também santos em toda a vossa maneira de viver;
¹⁶ Porquanto está escrito: Sede santos, porque eu sou santo.
¹⁷ E, se invocais por Pai aquele que, sem acepção de pessoas, julga segundo a obra de cada um, andai em temor, durante o tempo da vossa peregrinação,
¹⁸ Sabendo que não foi com coisas corruptíveis, como prata ou ouro, que fostes resgatados da vossa vã maneira de viver que por tradição recebestes dos vossos pais,
¹⁹ Mas com o precioso sangue de Cristo, como de um cordeiro imaculado e incontaminado,
²⁰ O qual, na verdade, em outro tempo foi conhecido, ainda antes da fundação do mundo, mas manifestado nestes últimos tempos por amor de vós;
²¹ E por ele credes em Deus, que o ressuscitou dentre os mortos, e lhe deu glória, para que a vossa fé e esperança estivessem em Deus;
²² Purificando as vossas almas pelo Espírito na obediência à verdade, para o amor fraternal, não fingido; amai-vos ardentemente uns aos outros com um coração puro;
²³ Sendo de novo gerados, não de semente corruptível, mas da incorruptível, pela palavra de Deus, viva, e que permanece para sempre.
²⁴ Porque toda a carne é como a erva, e toda a glória do homem como a flor da erva. Secou-se a erva, e caiu a sua flor;
²⁵ Mas a palavra do Senhor permanece para sempre. E esta é a palavra que entre vós foi evangelizada. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Segundo o versículo 7, para que serve a prova da vossa fé?",
                        opcoes: [
                            { numero: 1, texto: "Para ser achada em louvor, honra e glória na revelação de Jesus Cristo", correta: true },
                            { numero: 2, texto: "Para nos tornar pessoas mais ricas na terra", correta: false },
                            { numero: 3, texto: "Para que Deus saiba se somos bons", correta: false },
                            { numero: 4, texto: "Para nos fazer desistir do caminho", correta: false }
                        ],
                        explicacao: "1 Pedro 1:7 - Para que a prova da vossa fé, muito mais preciosa do que o ouro que perece... se ache em louvor, honra e glória...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é a ordem de Deus sobre a santidade citada no capítulo 1?",
                        opcoes: [
                            { numero: 1, texto: "Sede santos, porque eu sou santo", correta: true },
                            { numero: 2, texto: "Sede perfeitos apenas quando outros virem", correta: false },
                            { numero: 3, texto: "Não há necessidade de santidade", correta: false },
                            { numero: 4, texto: "A santidade é impossível para o homem", correta: false }
                        ],
                        explicacao: "1 Pedro 1:16 - Porquanto escrito está: Sede santos, porque eu sou santo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Com o que fomos resgatados da nossa vã maneira de viver?",
                        opcoes: [
                            { numero: 1, texto: "Com o precioso sangue de Cristo, como de um cordeiro imaculado", correta: true },
                            { numero: 2, texto: "Com prata e ouro", correta: false },
                            { numero: 3, texto: "Através de boas obras humanas", correta: false },
                            { numero: 4, texto: "Por meio de rituais antigos", correta: false }
                        ],
                        explicacao: "1 Pedro 1:18-19 - Sabendo que não foi com coisas corruptíveis... mas com o precioso sangue de Cristo...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "Pedras Vivas e Povo Escolhido",
            texto: ` ¹ Deixando, pois, toda a malícia, e todo o engano, e fingimentos, e invejas, e todas as murmurações,
² Desejai afetuosamente, como meninos novamente nascidos, o leite racional, não falsificado, para que por ele vades crescendo;
³ Se é que já provastes que o Senhor é benigno;
⁴ E, chegando-vos para ele, pedra viva, reprovada, na verdade, pelos homens, mas para com Deus eleita e preciosa,
⁵ Vós também, como pedras vivas, sois edificados casa espiritual e sacerdócio santo, para oferecer sacrifícios espirituais agradáveis a Deus por Jesus Cristo.
⁶ Por isso também na Escritura se contém: Eis que ponho em Sião a pedra principal da esquina, eleita e preciosa; e quem nela crer não será confundido.
⁷ E assim para vós, os que credes, é preciosa, mas, para os rebeldes, a pedra que os edificadores reprovaram, essa foi a principal da esquina,
⁸ E uma pedra de tropeço e rocha de escândalo, para aqueles que tropeçam na palavra, sendo desobedientes; para o que também foram destinados.
⁹ Mas vós sois a geração eleita, o sacerdócio real, a nação santa, o povo adquirido, para que anuncieis as virtudes daquele que vos chamou das trevas para a sua maravilhosa luz;
¹⁰ Vós, que em outro tempo não éreis povo, mas agora sois povo de Deus; que não tínheis alcançado misericórdia, mas agora alcançastes misericórdia.
¹¹ Amados, peço-vos, como a peregrinos e forasteiros, que vos abstenhais das concupiscências carnais, que combatem contra a alma;
¹² Tendo o vosso viver honesto entre os gentios; para que, naquilo em que falam mal de vós, como de malfeitores, glorifiquem a Deus no dia da visitação, pelas boas obras que em vós observem.
¹³ Sujeitai-vos, pois, a toda a ordenação humana por amor do Senhor; quer ao rei, como superior;
¹⁴ Quer aos governadores, como por ele enviados para castigo dos malfeitores, e para louvor dos que fazem o bem.
¹⁵ Porque assim é a vontade de Deus, que, fazendo bem, tapeis a boca à ignorância dos homens insensatos;
¹⁶ Como livres, e não tendo a liberdade por cobertura da malícia, mas como servos de Deus.
¹⁷ Honrai a todos. Amai a fraternidade. Temei a Deus. Honrai ao rei.
¹⁸ Vós, servos, sujeitai-vos com todo o temor aos senhores, não somente aos bons e humanos, mas também aos maus.
¹⁹ Porque é coisa agradável, que alguém, por causa da consciência para com Deus, sofra agravos, padecendo injustamente.
²⁰ Porque, que glória será essa, se, pecando, sois esbofeteados e sofreis? Mas se, fazendo o bem, sois afligidos e o sofreis, isso é agradável a Deus.
²¹ Porque para isto sois chamados; pois também Cristo padeceu por nós, deixando-nos o exemplo, para que sigais as suas pisadas.
²² O qual não cometeu pecado, nem na sua boca se achou engano.
²³ O qual, quando o injuriavam, não injuriava, e quando padecia não ameaçava, mas entregava-se àquele que julga justamente;
²⁴ Levando ele mesmo em seu corpo os nossos pecados sobre o madeiro, para que, mortos para os pecados, pudéssemos viver para a justiça; e pelas suas feridas fostes sarados.
²⁵ Porque éreis como ovelhas desgarradas; mas agora tendes voltado ao Pastor e Bispo das vossas almas. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Pedro descreve os cristãos no versículo 9?",
                        opcoes: [
                            { numero: 1, texto: "Geração eleita, sacerdócio real, nação santa, povo adquirido", correta: true },
                            { numero: 2, texto: "Um grupo de pessoas sem importância", correta: false },
                            { numero: 3, texto: "Apenas seguidores de uma filosofia", correta: false },
                            { numero: 4, texto: "Soldados do império romano", correta: false }
                        ],
                        explicacao: "1 Pedro 2:9 - Mas vós sois a geração eleita, o sacerdócio real, a nação santa, o povo adquirido...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Cristo levou em seu corpo sobre o madeiro?",
                        opcoes: [
                            { numero: 1, texto: "Os nossos pecados", correta: true },
                            { numero: 2, texto: "Apenas o peso da madeira", correta: false },
                            { numero: 3, texto: "Uma mensagem política", correta: false },
                            { numero: 4, texto: "Riquezas para o mundo", correta: false }
                        ],
                        explicacao: "1 Pedro 2:24 - Levando ele mesmo em seu corpo os nossos pecados sobre o madeiro...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como devemos nos portar diante das autoridades humanas, segundo Pedro?",
                        opcoes: [
                            { numero: 1, texto: "Sujeitai-vos a toda a ordenação humana por amor do Senhor", correta: true },
                            { numero: 2, texto: "Ignorar todas as leis civis", correta: false },
                            { numero: 3, texto: "Lutar contra todo governo", correta: false },
                            { numero: 4, texto: "Apenas se o governo for cristão", correta: false }
                        ],
                        explicacao: "1 Pedro 2:13 - Sujeitai-vos, pois, a toda a ordenação humana por amor do Senhor...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "Deveres Conjugais e Sofrimento",
            texto: ` ¹ Semelhantemente, vós, mulheres, sede sujeitas aos vossos próprios maridos; para que também, se alguns não obedecem à palavra, pelo porte de suas mulheres sejam ganhos sem palavra;
² Considerando a vossa vida casta, em temor.
³ O enfeite delas não seja o exterior, no frisado dos cabelos, no uso de joias de ouro, na compostura dos vestidos;
⁴ Mas o homem encoberto no coração; no incorruptível traje de um espírito manso e quieto, que é precioso diante de Deus.
⁵ Porque assim se adornavam também antigamente as santas mulheres que esperavam em Deus, e estavam sujeitas aos seus próprios maridos;
⁶ Como Sara obedecia a Abraão, chamando-lhe senhor; da qual vós sois filhas, fazendo o bem, e não temendo nenhum espanto.
⁷ Igualmente vós, maridos, coabitai com elas com entendimento, dando honra à mulher, como vaso mais fraco; como sendo vós os seus co-herdeiros da graça da vida; para que não sejam impedidas as vossas orações.
⁸ E, finalmente, sede todos de um mesmo sentimento, compassivos, amando os irmãos, entranhavelmente misericordiosos e afáveis.
⁹ Não tornando mal por mal, ou injúria por injúria; antes, pelo contrário, bendizendo; sabendo que para isto fostes chamados, para que por herança alcanceis a bênção.
¹⁰ Porque quem quer amar a vida, e ver os dias bons, refreie a sua língua do mal, e os seus lábios não falem engano.
¹¹ Aparte-se do mal, e faça o bem; busque a paz, e siga-a.
¹² Porque os olhos do Senhor estão sobre os justos, e os seus ouvidos atentos às suas orações; mas o rosto do Senhor é contra os que fazem o mal.
¹³ E qual é aquele que vos fará mal, se fordes seguidores do bem?
¹⁴ Mas também, se padecerdes por amor da justiça, sois bem-aventurados. E não temais com medo deles, nem vos turbeis;
¹⁵ Antes, santificai ao Senhor Deus em vossos corações; e estai sempre preparados para responder com mansidão e temor a qualquer que vos pedir a razão da esperança que há em vós,
¹⁶ Tendo uma boa consciência, para que, naquilo em que falam mal de vós, como de malfeitores, fiquem confundidos os que blasfemam da vossa boa conduta em Cristo.
¹⁷ Porque melhor é que padeçais fazendo bem (se a vontade de Deus assim o quer), do que fazendo mal.
¹⁸ Porque também Cristo padeceu uma vez pelos pecados, o justo pelos injustos, para levar-nos a Deus; mortificado, na verdade, na carne, mas vivificado pelo Espírito;
¹⁹ No qual também foi, e pregou aos espíritos em prisão;
²⁰ Os quais noutro tempo foram rebeldes, quando a longanimidade de Deus esperava nos dias de Noé, enquanto se preparava a arca; na qual poucas (isto é, oito) almas se salvaram pela água;
²¹ Que também, como uma verdadeira figura, agora vos salva, o batismo, não do despojamento da imundícia da carne, mas da indagação de uma boa consciência para com Deus, pela ressurreição de Jesus Cristo;
²² O qual está à destra de Deus, tendo subido ao céu, havendo-se-lhe sujeitado os anjos, e as autoridades, e as potências. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o marido deve coabitar com a sua mulher?",
                        opcoes: [
                            { numero: 1, texto: "Com entendimento, dando honra à mulher como vaso mais frágil", correta: true },
                            { numero: 2, texto: "Com autoritarismo e dureza", correta: false },
                            { numero: 3, texto: "De forma indiferente", correta: false },
                            { numero: 4, texto: "Apenas por interesse próprio", correta: false }
                        ],
                        explicacao: "1 Pedro 3:7 - Igualmente vós, maridos, coabitai com elas com entendimento, dando honra à mulher...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que devemos estar sempre preparados para fazer, segundo o versículo 15?",
                        opcoes: [
                            { numero: 1, texto: "Responder a qualquer que pedir a razão da esperança que há em vós", correta: true },
                            { numero: 2, texto: "Fugir de qualquer debate", correta: false },
                            { numero: 3, texto: "Viajar para outros países", correta: false },
                            { numero: 4, texto: "Acumular provisões", correta: false }
                        ],
                        explicacao: "1 Pedro 3:15 - ...e estai sempre preparados para responder com mansidão e temor a qualquer que vos pedir a razão da esperança...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Para que Cristo padeceu uma vez pelos pecados, o justo pelos injustos?",
                        opcoes: [
                            { numero: 1, texto: "Para levar-nos a Deus", correta: true },
                            { numero: 2, texto: "Para tornar-se famoso", correta: false },
                            { numero: 3, texto: "Para condenar o mundo", correta: false },
                            { numero: 4, texto: "Para acabar com a política", correta: false }
                        ],
                        explicacao: "1 Pedro 3:18 - Porque também Cristo padeceu uma vez pelos pecados, o justo pelos injustos, para levar-nos a Deus...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "Bom Mordomo da Graça",
            texto: ` ¹ Ora, pois, já que Cristo padeceu por nós na carne, armai-vos também vós com este mesmo pensamento, que aquele que padeceu na carne já cessou do pecado;
² Para que, no tempo que vos resta na carne, não vivais mais segundo as concupiscências dos homens, mas segundo a vontade de Deus.
³ Porque nos basta que no tempo passado da vida fizéssemos a vontade dos gentios, andando em dissoluções, concupiscências, embriaguezes, glutonarias, bebedices e abomináveis idolatrias;
⁴ E acham estranho não correrdes com eles no mesmo desenfreamento de dissolução, blasfemando de vós.
⁵ Os quais hão de dar conta ao que está preparado para julgar os vivos e os mortos.
⁶ Porque por isto foi pregado o evangelho também aos mortos, para que, na verdade, fossem julgados segundo os homens na carne, mas vivessem segundo Deus em espírito;
⁷ E já está próximo o fim de todas as coisas; portanto sede sóbrios e vigiai em oração.
⁸ Mas, sobretudo, tende ardente amor uns para com os outros; porque o amor cobrirá a multidão de pecados.
⁹ Sendo hospitaleiros uns para com os outros, sem murmurações,
¹⁰ Cada um administre aos outros o dom como o recebeu, como bons mordomos da multiforme graça de Deus.
¹¹ Se alguém falar, fale segundo as palavras de Deus; se alguém administrar, administre segundo o poder que Deus dá; para que em tudo Deus seja glorificado por Jesus Cristo, a quem pertence a glória e poder para todo o sempre. Amém.
¹² Amados, não estranheis a ardente prova que vem sobre vós para vos tentar, como se coisa estranha vos acontecesse;
¹³ Mas alegrai-vos no fato de serdes participantes das aflições de Cristo, para que também na revelação da sua glória vos regozijeis e alegreis.
¹⁴ Se pelo nome de Cristo sois vituperados, bem-aventurados sois, porque sobre vós repousa o Espírito da glória e de Deus; quanto a eles, é ele, sim, blasfemado, mas quanto a vós, é glorificado.
¹⁵ Que nenhum de vós padeça como homicida, ou ladrão, ou malfeitor, ou como o que se entremete em negócios alheios;
¹⁶ Mas, se padece como cristão, não se envergonhe, antes glorifique a Deus nesta parte.
¹⁷ Porque já é tempo que comece o julgamento pela casa de Deus; e, se primeiro começa por nós, qual será o fim daqueles que são desobedientes ao evangelho de Deus?
¹⁸ E, se o justo apenas se salva, onde aparecerá o ímpio e o pecador?
¹⁹ Portanto também os que padecem segundo a vontade de Deus encomendem-lhe as suas almas, como ao fiel Criador, fazendo o bem. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que devemos ter uns para com os outros, que cobre uma multidão de pecados?",
                        opcoes: [
                            { numero: 1, texto: "Ardente amor", correta: true },
                            { numero: 2, texto: "Apenas educação formal", correta: false },
                            { numero: 3, texto: "Muitas críticas construtivas", correta: false },
                            { numero: 4, texto: "Distância social", correta: false }
                        ],
                        explicacao: "1 Pedro 4:8 - Mas, sobretudo, tende ardente amor uns para com os outros; porque o amor cobrirá a multidão de pecados.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como devemos nos sentir se padecermos como cristãos?",
                        opcoes: [
                            { numero: 1, texto: "Não nos envergonhemos, mas glorifiquemos a Deus nesta parte", correta: true },
                            { numero: 2, texto: "Devemos ficar revoltados", correta: false },
                            { numero: 3, texto: "Devemos esconder nossa fé", correta: false },
                            { numero: 4, texto: "Devemos sentir pena de nós mesmos", correta: false }
                        ],
                        explicacao: "1 Pedro 4:16 - Mas, se padece como cristão, não se envergonhe, antes glorifique a Deus nesta parte.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o autor diz sobre o fim de todas as coisas?",
                        opcoes: [
                            { numero: 1, texto: "Está próximo; sede, pois, sóbrios e vigiai em oração", correta: true },
                            { numero: 2, texto: "Ainda vai demorar milhões de anos", correta: false },
                            { numero: 3, texto: "Ninguém deve se preocupar", correta: false },
                            { numero: 4, texto: "O fim é apenas uma lenda", correta: false }
                        ],
                        explicacao: "1 Pedro 4:7 - E já está próximo o fim de todas as coisas; sede, pois, sóbrios e vigiai em oração.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "O Cuidado de Deus e a Vigilância",
            texto: `¹ Aos presbíteros, que estão entre vós, admoesto eu, que sou também presbítero com eles, e testemunha das aflições de Cristo, e participante da glória que se há de revelar:
² Apascentai o rebanho de Deus, que está entre vós, tendo cuidado dele, não por força, mas voluntariamente; nem por torpe ganância, mas de ânimo pronto;
³ Nem como tendo domínio sobre a herança de Deus, mas servindo de exemplo ao rebanho.
⁴ E, quando aparecer o Sumo Pastor, alcançareis a incorruptível coroa da glória.
⁵ Semelhantemente vós jovens, sede sujeitos aos anciãos; e sede todos sujeitos uns aos outros, e revesti-vos de humildade, porque Deus resiste aos soberbos, mas dá graça aos humildes.
⁶ Humilhai-vos, pois, debaixo da potente mão de Deus, para que a seu tempo vos exalte;
⁷ Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.
⁸ Sede sóbrios; vigiai; porque o diabo, vosso adversário, anda em derredor, como leão bramando, buscando a quem possa tragar;
⁹ Ao qual resisti firmes na fé, sabendo que as mesmas aflições se cumprem entre os vossos irmãos no mundo.
¹⁰ E o Deus de toda a graça, que em Cristo Jesus nos chamou à sua eterna glória, depois de havermos padecido um pouco, ele mesmo vos aperfeiçoe, confirme, fortifique e estabeleça.
¹¹ A ele seja a glória e o poderio para todo o sempre. Amém.
¹² Por Silvano, vosso fiel irmão, como cuido, escrevi brevemente, exortando e testificando que esta é a verdadeira graça de Deus, na qual estais firmes.
¹³ A vossa coeleita em Babilônia vos saúda, e meu filho Marcos.
¹⁴ Saudai-vos uns aos outros com ósculo de amor. Paz seja com todos vós que estais em Cristo Jesus. Amém. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que devemos fazer com toda a nossa ansiedade?",
                        opcoes: [
                            { numero: 1, texto: "Lançar sobre Ele, porque Ele tem cuidado de vós", correta: true },
                            { numero: 2, texto: "Guardar apenas para nós mesmos", correta: false },
                            { numero: 3, texto: "Tentar resolvê-la com medicação apenas", correta: false },
                            { numero: 4, texto: "Ignorar que ela existe", correta: false }
                        ],
                        explicacao: "1 Pedro 5:7 - Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como Pedro descreve o adversário, o diabo?",
                        opcoes: [
                            { numero: 1, texto: "Como leão que ruge, procurando a quem possa devorar", correta: true },
                            { numero: 2, texto: "Como um ser inofensivo", correta: false },
                            { numero: 3, texto: "Como um amigo disfarçado", correta: false },
                            { numero: 4, texto: "Como uma sombra sem poder", correta: false }
                        ],
                        explicacao: "1 Pedro 5:8 - Sede sóbrios; vigiai; porque o diabo, vosso adversário, anda em redor, bramando como leão...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como os presbíteros (líderes) devem apascentar o rebanho de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Não por força, mas voluntariamente; nem por torpe ganância", correta: true },
                            { numero: 2, texto: "Com o objetivo de ficarem ricos", correta: false },
                            { numero: 3, texto: "Mandando em todos com autoridade absoluta", correta: false },
                            { numero: 4, texto: "Apenas quando tiverem vontade", correta: false }
                        ],
                        explicacao: "1 Pedro 5:2 - Apascentai o rebanho de Deus... não por força, mas voluntariamente; nem por torpe ganância...",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};