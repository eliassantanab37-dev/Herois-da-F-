// js/livros/primeira_timoteo.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const primeira_timoteo = {
    nome: "1 Timóteo",
    icone: "👨‍🏫", // Ícone sugerindo mentoria/ensino
    autor: "Paulo",
    //background: "./imagens/1timoteo_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "Fiel é a Palavra",
            texto: ` ¹ Paulo, apóstolo de Jesus Cristo, segundo o mandado de Deus, nosso Salvador, e do Senhor Jesus Cristo, esperança nossa,
² A Timóteo meu verdadeiro filho na fé: Graça, misericórdia e paz da parte de Deus nosso Pai, e da de Cristo Jesus, nosso Senhor.
³ Como te roguei, quando parti para a Macedônia, que ficasses em Éfeso, para advertires a alguns, que não ensinem outra doutrina,
⁴ Nem se deem a fábulas ou a genealogias intermináveis, que mais produzem questões do que edificação de Deus, que consiste na fé; assim o faço agora.
⁵ Ora, o fim do mandamento é o amor de um coração puro, e de uma boa consciência, e de uma fé não fingida.
⁶ Do que, desviando-se alguns, se entregaram a vãs contendas;
⁷ Querendo ser mestres da lei, e não entendendo nem o que dizem nem o que afirmam.
⁸ Sabemos, porém, que a lei é boa, se alguém dela usa legitimamente;
⁹ Sabendo isto, que a lei não é feita para o justo, mas para os injustos e obstinados, para os ímpios e pecadores, para os profanos e irreligiosos, para os parricidas e matricidas, para os homicidas,
¹⁰ Para os fornicadores, para os sodomitas, para os roubadores de homens, para os mentirosos, para os perjuros, e para o que for contrário à sã doutrina,
¹¹ Conforme o evangelho da glória de Deus bem-aventurado, que me foi confiado.
¹² E dou graças ao que me tem confortado, a Cristo Jesus Senhor nosso, porque me teve por fiel, pondo-me no ministério;
¹³ A mim, que dantes fui blasfemo, e perseguidor, e injurioso; mas alcancei misericórdia, porque o fiz ignorantemente, na incredulidade.
¹⁴ E a graça de nosso Senhor superabundou com a fé e amor que há em Jesus Cristo.
¹⁵ Esta é uma palavra fiel, e digna de toda a aceitação, que Cristo Jesus veio ao mundo, para salvar os pecadores, dos quais eu sou o principal.
¹⁶ Mas por isso alcancei misericórdia, para que em mim, que sou o principal, Jesus Cristo mostrasse toda a sua longanimidade, para exemplo dos que haviam de crer nele para a vida eterna.
¹⁷ Ora, ao Rei dos séculos, imortal, invisível, ao Deus único, sábio, seja honra e glória para todo o sempre. Amém.
¹⁸ Este mandamento te dou, meu filho Timóteo, que, segundo as profecias que houve acerca de ti, milites por elas boa milícia;
¹⁹ Conservando a fé, e a boa consciência, a qual alguns, rejeitando, fizeram naufrágio na fé.
²⁰ E entre esses foram Himeneu e Alexandre, os quais entreguei a Satanás, para que aprendam a não blasfemar. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é a fiel palavra que Paulo diz ser digna de toda aceitação?",
                        opcoes: [
                            { numero: 1, texto: "Que Cristo Jesus veio ao mundo para salvar os pecadores", correta: true },
                            { numero: 2, texto: "Que a lei é o único caminho para a paz", correta: false },
                            { numero: 3, texto: "Que Timóteo deveria ser o maior rei", correta: false },
                            { numero: 4, texto: "Que o sofrimento é eterno", correta: false }
                        ],
                        explicacao: "1 Timóteo 1:15 - Esta é uma palavra fiel, e digna de toda a aceitação, que Cristo Jesus veio ao mundo, para salvar os pecadores, dos quais eu sou o principal.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "Oração e o Único Mediador",
            texto: ` ¹ admoesto-te, pois, antes de tudo, que se façam súplicas, orações, intercessões, e ações de graças, por todos os homens;
² Pelos reis, e por todos os que estão em eminência, para que tenhamos uma vida quieta e sossegada, em toda a piedade e honestidade;
³ Porque isto é bom e agradável diante de Deus nosso Salvador,
⁴ Que quer que todos os homens sejam salvos, e venham ao conhecimento da verdade.
⁵ Porque há um só Deus, e um só Mediador entre Deus e os homens, Jesus Cristo homem.
⁶ O qual se deu a si mesmo em preço de redenção por todos, para servir de testemunho a seu tempo.
⁷ Para o que fui constituído pregador, e apóstolo, (digo a verdade em Cristo, não minto) e doutor dos gentios na fé e na verdade.
⁸ Quero, pois, que os homens orem em todo o lugar, levantando mãos santas, sem ira nem contenda.
⁹ Que do mesmo modo as mulheres se ataviem em traje honesto, com pudor e modéstia, não com tranças, ou com ouro, ou pérolas, ou vestidos preciosos,
¹⁰ Mas (como convém a mulheres que fazem profissão de servir a Deus) com boas obras.
¹¹ A mulher aprenda em silêncio, com toda a sujeição.
¹² Não permito, porém, que a mulher ensine, nem use de autoridade sobre o marido, mas que esteja em silêncio.
¹³ Porque primeiro foi formado Adão, depois Eva.
¹⁴ E Adão não foi enganado, mas a mulher, sendo enganada, caiu em transgressão.
¹⁵ Salvar-se-á, porém, dando à luz filhos, se permanecerem com sobriedade na fé, no amor e na santificação. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quantos mediadores existem entre Deus e os homens, segundo Paulo?",
                        opcoes: [
                            { numero: 1, texto: "Um só, Jesus Cristo homem", correta: true },
                            { numero: 2, texto: "Vários anjos", correta: false },
                            { numero: 3, texto: "Os líderes da igreja apenas", correta: false },
                            { numero: 4, texto: "Um para cada nação", correta: false }
                        ],
                        explicacao: "1 Timóteo 2:5 - Porque há um só Deus, e um só Mediador entre Deus e os homens, Jesus Cristo homem.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "Bispos e Diáconos",
            texto: ` ¹ Esta é uma palavra fiel: se alguém deseja o episcopado, excelente obra deseja.
² É necessário, pois, que o bispo seja irrepreensível, marido de uma mulher, vigilante, sóbrio, honesto, hospitaleiro, apto para ensinar;
³ Não dado ao vinho, não espancador, não cobiçoso de torpe ganância, mas moderado, não contencioso, não avarento;
⁴ Que governe bem a sua própria casa, tendo seus filhos em sujeição, com toda a modéstia
⁵ (Porque, se alguém não sabe governar a sua própria casa, como terá cuidado da igreja de Deus?);
⁶ Não neófito, para que, ensoberbecendo-se, não caia na condenação do diabo.
⁷ É necessário também que tenha bom testemunho dos que estão de fora, para que não caia em afronta, e no laço do diabo.
⁸ Da mesma sorte os diáconos sejam honestos, não de língua dobre, não dados a muito vinho, não cobiçosos de torpe ganância;
⁹ Guardando o mistério da fé numa consciência pura.
¹⁰ E também estes sejam primeiro provados, depois sirvam, se forem irrepreensíveis.
¹¹ Da mesma sorte as esposas sejam honestas, não maldizentes, sóbrias e fiéis em tudo.
¹² Os diáconos sejam maridos de uma só mulher, e governem bem a seus filhos e suas próprias casas.
¹³ Porque os que servirem bem como diáconos, adquirirão para si uma boa posição e muita confiança na fé que há em Cristo Jesus.
¹⁴ Escrevo-te estas coisas, esperando ir ver-te bem depressa;
¹⁵ Mas, se tardar, para que saibas como convém andar na casa de Deus, que é a igreja do Deus vivo, a coluna e firmeza da verdade.
¹⁶ E, sem dúvida alguma, grande é o mistério da piedade: Deus se manifestou em carne, foi justificado no Espírito, visto dos anjos, pregado aos gentios, crido no mundo, recebido acima na glória. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Segundo o capítulo 3, como deve ser o bispo (líder)?",
                        opcoes: [
                            { numero: 1, texto: "Irrepreensível, marido de uma só mulher, temperante", correta: true },
                            { numero: 2, texto: "Ganancioso e autoritário", correta: false },
                            { numero: 3, texto: "Famoso e rico entre os gentios", correta: false },
                            { numero: 4, texto: "Um novo convertido sem experiência", correta: false }
                        ],
                        explicacao: "1 Timóteo 3:2 - Convém, pois, que o bispo seja irrepreensível, marido de uma só mulher, vigilante, sóbrio...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "O Bom Ministro",
            texto: ` ¹ Mas o Espírito expressamente diz que nos últimos tempos apostatarão alguns da fé, dando ouvidos a espíritos enganadores, e a doutrinas de demônios;
² Pela hipocrisia de homens que falam mentiras, tendo cauterizada a sua própria consciência;
³ Proibindo o casamento, e ordenando a abstinência dos alimentos que Deus criou para os fiéis, e para os que conhecem a verdade, a fim de usarem deles com ações de graças;
⁴ Porque toda a criatura de Deus é boa, e não há nada que rejeitar, sendo recebido com ações de graças.
⁵ Porque pela palavra de Deus e pela oração é santificada.
⁶ Propondo estas coisas aos irmãos, serás bom ministro de Jesus Cristo, criado com as palavras da fé e da boa doutrina que tens seguido.
⁷ Mas rejeita as fábulas profanas e de velhas, e exercita-te a ti mesmo em piedade;
⁸ Porque o exercício corporal para pouco aproveita, mas a piedade para tudo é proveitosa, tendo a promessa da vida presente e da que há de vir.
⁹ Esta palavra é fiel e digna de toda a aceitação;
¹⁰ Porque para isto trabalhamos e somos injuriados, pois esperamos no Deus vivo, que é o Salvador de todos os homens, principalmente dos fiéis.
¹¹ Manda estas coisas e ensina-as.
¹² Ninguém despreze a tua mocidade; mas sê o exemplo dos fiéis, na palavra, no trato, no amor, no espírito, na fé, na pureza.
¹³ Persiste em ler, exortar e ensinar, até que eu vá.
¹⁴ Não desprezes o dom que há em ti, o qual te foi dado por profecia, com a imposição das mãos do presbitério.
¹⁵ Medita estas coisas; ocupa-te nelas, para que o teu aproveitamento seja manifesto a todos.
¹⁶ Tem cuidado de ti mesmo e da doutrina. Persevera nestas coisas; porque, fazendo isto, te salvarás, tanto a ti mesmo como aos que te ouvem. `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Paulo diz para Timóteo não deixar que ninguém despreze?",
                        opcoes: [
                            { numero: 1, texto: "A sua mocidade (juventude)", correta: true },
                            { numero: 2, texto: "A sua cidadania", correta: false },
                            { numero: 3, texto: "Os seus bens materiais", correta: false },
                            { numero: 4, texto: "As suas roupas", correta: false }
                        ],
                        explicacao: "1 Timóteo 4:12 - Ninguém despreze a tua mocidade; mas sê o exemplo dos fiéis, na palavra, no trato, no amor...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "Deveres para com os Outros",
            texto: `
¹ Não repreendas asperamente o ancião, mas admoesta-o como a pai; aos moços como a irmãos;
² As mulheres idosas, como a mães, às moças, como a irmãs, em toda a pureza.
³ Honra as viúvas que verdadeiramente são viúvas.
⁴ Mas, se alguma viúva tiver filhos, ou netos, aprendam primeiro a exercer piedade para com a sua própria família, e a recompensar seus pais; porque isto é bom e agradável diante de Deus.
⁵ Ora, a que é verdadeiramente viúva e desamparada espera em Deus, e persevera de noite e de dia em rogos e orações;
⁶ Mas a que vive em deleites, vivendo está morta.
⁷ Manda, pois, estas coisas, para que elas sejam irrepreensíveis.
⁸ Mas, se alguém não tem cuidado dos seus, e principalmente dos da sua família, negou a fé, e é pior do que o infiel.
⁹ Nunca seja inscrita viúva com menos de sessenta anos, e só a que tenha sido mulher de um só marido;
¹⁰ Tendo testemunho de boas obras: Se criou os filhos, se exercitou hospitalidade, se lavou os pés aos santos, se socorreu os aflitos, se praticou toda a boa obra.
¹¹ Mas não admitas as viúvas mais novas, porque, quando se tornam levianas contra Cristo, querem casar-se;
¹² Tendo já a sua condenação por haverem aniquilado a primeira fé.
¹³ E, além disto, aprendem também a andar ociosas de casa em casa; e não só ociosas, mas também tagarelas e curiosas, falando o que não convém.
¹⁴ Quero, pois, que as que são moças se casem, gerem filhos, governem a casa, e não deem ocasião ao adversário de maldizer;
¹⁵ Porque já algumas se desviaram, indo após Satanás.
¹⁶ Se algum crente ou alguma crente tem viúvas, socorra-as, e não se sobrecarregue a igreja, para que possa sustentar as que deveras são viúvas.
¹⁷ Os presbíteros que governam bem sejam estimados por dignos de duplicada honra, principalmente os que trabalham na palavra e na doutrina;
¹⁸ Porque diz a Escritura: Não ligarás a boca ao boi que debulha. E: Digno é o obreiro do seu salário.
¹⁹ Não aceites acusação contra o presbítero, senão com duas ou três testemunhas.
²⁰ Aos que pecarem, repreende-os na presença de todos, para que também os outros tenham temor.
²¹ Conjuro-te diante de Deus, e do Senhor Jesus Cristo, e dos anjos eleitos, que sem prevenção guardes estas coisas, nada fazendo por parcialidade.
²² A ninguém imponhas precipitadamente as mãos, nem participes dos pecados alheios; conserva-te a ti mesmo puro.
²³ Não bebas mais água só, mas usa de um pouco de vinho, por causa do teu estômago e das tuas frequentes enfermidades.
²⁴ Os pecados de alguns homens são manifestos, precedendo o juízo; e em alguns manifestam-se depois.
²⁵ Assim mesmo também as boas obras são manifestas, e as que são de outra maneira não podem ocultar-se.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Paulo diz sobre aquele que não cuida dos seus e principalmente dos da sua família?",
                        opcoes: [
                            { numero: 1, texto: "Negou a fé e é pior do que o infiel", correta: true },
                            { numero: 2, texto: "Está apenas um pouco enganado", correta: false },
                            { numero: 3, texto: "Será abençoado de outra forma", correta: false },
                            { numero: 4, texto: "É um excelente missionário", correta: false }
                        ],
                        explicacao: "1 Timóteo 5:8 - Mas, se alguém não tem cuidado dos seus, e principalmente dos da sua família, negou a fé, e é pior do que o infiel.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "O Combate da Fé",
            texto: `
¹ Todos os servos que estão debaixo do jugo estimem a seus senhores dignos de toda honra, para que o nome de Deus e a doutrina não sejam blasfemados.
² E os que têm senhores crentes não os desprezem, por serem irmãos; antes os sirvam melhor, porque eles, que participam do benefício, são crentes e amados. Isto ensina e exorta.
³ Se alguém ensina alguma outra doutrina, e se não conforma com as sãs palavras de nosso Senhor Jesus Cristo, e com a doutrina que é segundo a piedade,
⁴ É soberbo, e nada sabe, mas delira acerca de questões e contendas de palavras, das quais nascem invejas, contendas, blasfêmias, ruins suspeitas,
⁵ Perversas contendas de homens corruptos de entendimento, e privados da verdade, cuidando que ganho seja piedade; aparta-te dos tais.
⁶ Mas é grande ganho a piedade com contentamento.
⁷ Porque nada trouxemos para este mundo, e manifesto é que nada podemos levar dele.
⁸ Tendo, porém, sustento, e com que nos cobrirmos, estejamos com isso contentes.
⁹ Mas os que querem ser ricos caem em tentação, e em laço, e em muitas concupiscências loucas e nocivas, que submergem os homens na perdição e ruína.
¹⁰ Porque o amor ao dinheiro é a raiz de todos os males; e nessa cobiça alguns se desviaram da fé, e se traspassaram a si mesmos com muitas dores.
¹¹ Mas tu, ó homem de Deus, foge destas coisas, e segue a justiça, a piedade, a fé, o amor, a paciência, a mansidão.
¹² Milita a boa milícia da fé, toma posse da vida eterna, para a qual também foste chamado, tendo já feito boa confissão diante de muitas testemunhas.
¹³ Mando-te diante de Deus, que todas as coisas vivifica, e de Cristo Jesus, que diante de Pôncio Pilatos deu o testemunho de boa confissão,
¹⁴ Que guardes este mandamento sem mácula e repreensão, até à aparição de nosso Senhor Jesus Cristo;
¹⁵ A qual a seu tempo mostrará o bem-aventurado, e único poderoso Senhor, Rei dos reis e Senhor dos senhores;
¹⁶ Aquele que tem, ele só, a imortalidade, e habita na luz inacessível; a quem nenhum dos homens viu nem pode ver, ao qual seja honra e poder sempiterno. Amém.
¹⁷ Manda aos ricos deste mundo que não sejam altivos, nem ponham a esperança na incerteza das riquezas, mas no Deus vivo, que abundantemente nos dá todas as coisas para delas gozarmos;
¹⁸ Que façam bem, enriqueçam em boas obras, repartam de boa mente, e sejam comunicáveis;
¹⁹ Que entesourem para si mesmos um bom fundamento para o futuro, para que possam se apoderar da vida eterna.
²⁰ Ó Timóteo, guarda o depósito que te foi confiado, tendo horror aos clamores vãos e profanos e às oposições da falsamente chamada ciência,
²¹ A qual, professando-a alguns, se desviaram da fé. A graça seja contigo. Amém.


 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Paulo afirma ser a raiz de todos os males?",
                        opcoes: [
                            { numero: 1, texto: "O amor ao dinheiro", correta: true },
                            { numero: 2, texto: "A falta de conhecimento", correta: false },
                            { numero: 3, texto: "A política de Roma", correta: false },
                            { numero: 4, texto: "O trabalho braçal", correta: false }
                        ],
                        explicacao: "1 Timóteo 6:10 - Porque o amor ao dinheiro é a raiz de toda a espécie de males.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que trouxemos para este mundo e o que podemos levar dele?",
                        opcoes: [
                            { numero: 1, texto: "Nada trouxemos e nada podemos levar", correta: true },
                            { numero: 2, texto: "Trouxemos bens e levaremos lembranças", correta: false },
                            { numero: 3, texto: "Trouxemos pecados e levaremos ouro", correta: false },
                            { numero: 4, texto: "Viemos ricos e partiremos pobres", correta: false }
                        ],
                        explicacao: "1 Timóteo 6:7 - Porque nada trouxemos para este mundo, e manifesto é que nada podemos levar dele.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};