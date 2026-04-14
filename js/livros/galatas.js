// js/livros/galatas.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const galatas = {
    nome: "Gálatas",
    icone: "📜",
    autor: "Paulo",
    //background: "./imagens/galatas_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "Não há outro Evangelho",
            texto: ` ¹ Paulo, apóstolo (não da parte dos homens, nem por homem algum, mas por Jesus Cristo, e por Deus Pai, que o ressuscitou dentre os mortos),
² E todos os irmãos que estão comigo, às igrejas da Galácia:
³ Graça a vós e paz da parte de Deus Pai e do nosso Senhor Jesus Cristo,
⁴ O qual se deu a si mesmo por nossos pecados, para nos livrar do presente século mau, segundo a vontade de Deus nosso Pai,
⁵ Ao qual seja dada glória para todo o sempre. Amém.
⁶ Maravilho-me de que tão depressa passásseis daquele que vos chamou à graça de Cristo para outro evangelho;
⁷ O qual não é outro, mas há alguns que vos inquietam e querem transtornar o evangelho de Cristo.
⁸ Mas, ainda que nós mesmos ou um anjo do céu vos anuncie outro evangelho além do que já vos tenho anunciado, seja anátema.
⁹ Assim, como já vo-lo dissemos, agora de novo também vo-lo digo. Se alguém vos anunciar outro evangelho além do que já recebestes, seja anátema.
¹⁰ Porque, persuado eu agora a homens ou a Deus? Ou procuro agradar a homens? Porque se estivesse ainda agradando aos homens, não seria servo de Cristo.
¹¹ Mas faço-vos saber, irmãos, que o evangelho que por mim foi anunciado não é segundo os homens.
¹² Porque não o recebi, nem aprendi de homem algum, mas pela revelação de Jesus Cristo.
¹³ Porque já ouvistes qual foi antigamente a minha conduta no judaísmo, como sobremaneira perseguia a igreja de Deus e a assolava.
¹⁴ E na minha nação excedia em judaísmo a muitos da minha idade, sendo extremamente zeloso das tradições de meus pais.
¹⁵ Mas, quando aprouve a Deus, que desde o ventre de minha mãe me separou, e me chamou pela sua graça,
¹⁶ Revelar seu Filho em mim, para que o pregasse entre os gentios, imediatamente, não consultei a carne nem o sangue,
¹⁷ Nem tornei a Jerusalém, a ter com os que já antes de mim eram apóstolos, mas parti para a Arábia, e voltei outra vez a Damasco.
¹⁸ Depois, passados três anos, fui a Jerusalém para ver a Pedro, e fiquei com ele quinze dias.
¹⁹ E não vi a nenhum outro dos apóstolos, senão a Tiago, irmão do Senhor.
²⁰ Ora, acerca do que vos escrevo, eis que diante de Deus testifico que não minto.
²¹ Depois fui para as partes da Síria e da Cilícia.
²² E não era conhecido de vista das igrejas da Judeia, que estavam em Cristo;
²³ Mas somente tinham ouvido dizer: Aquele que já nos perseguiu anuncia agora a fé que antes destruía.
²⁴ E glorificavam a Deus a respeito de mim. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Paulo diz que deve acontecer se alguém (ou um anjo) anunciar outro evangelho além do que já foi pregado?",
                        opcoes: [
                            { numero: 1, texto: "Deve ser ignorado apenas", correta: false },
                            { numero: 2, texto: "Seja anátema (maldito)", correta: true },
                            { numero: 3, texto: "Deve ser convidado para debater", correta: false },
                            { numero: 4, texto: "Deve ser perdoado imediatamente", correta: false }
                        ],
                        explicacao: "Gálatas 1:8 - Mas, ainda que nós mesmos ou um anjo do céu vos anuncie outro evangelho... seja anátema.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "De quem Paulo afirma ter recebido o evangelho que pregava?",
                        opcoes: [
                            { numero: 1, texto: "De Pedro e Tiago", correta: false },
                            { numero: 2, texto: "Pela revelação de Jesus Cristo", correta: true },
                            { numero: 3, texto: "Através de livros antigos", correta: false },
                            { numero: 4, texto: "Em uma escola de fariseus", correta: false }
                        ],
                        explicacao: "Gálatas 1:12 - Porque não o recebi, nem aprendi de homem algum, mas pela revelação de Jesus Cristo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A quem Paulo procurava agradar em seu ministério?",
                        opcoes: [
                            { numero: 1, texto: "Aos homens para ser famoso", correta: false },
                            { numero: 2, texto: "A Deus, pois se agradasse a homens não seria servo de Cristo", correta: true },
                            { numero: 3, texto: "Aos governadores de Roma", correta: false },
                            { numero: 4, texto: "Aos seus familiares", correta: false }
                        ],
                        explicacao: "Gálatas 1:10 - ...se eu ainda agradasse aos homens, não seria servo de Cristo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "A Justificação pela Fé",
            texto: ` ¹ Depois, passados catorze anos, subi outra vez a Jerusalém com Barnabé, levando também comigo Tito.
² E subi por uma revelação, e lhes expus o evangelho, que prego entre os gentios, e particularmente aos que estavam em estima; para que de maneira alguma não corresse ou não tivesse corrido em vão.
³ Mas nem ainda Tito, que estava comigo, sendo grego, foi constrangido a circuncidar-se;
⁴ E isto por causa dos falsos irmãos que se intrometeram, e secretamente entraram a espiar a nossa liberdade, que temos em Cristo Jesus, para nos porem em servidão;
⁵ Aos quais nem ainda por uma hora cedemos com sujeição, para que a verdade do evangelho permanecesse entre vós.
⁶ E, quanto àqueles que pareciam ser alguma coisa (quais tenham sido noutro tempo, não se me dá; Deus não aceita a aparência do homem), esses, digo, que pareciam ser alguma coisa, nada me comunicaram;
⁷ Antes, pelo contrário, quando viram que o evangelho da incircuncisão me estava confiado, como a Pedro o da circuncisão
⁸ (Porque aquele que operou eficazmente em Pedro para o apostolado da circuncisão, esse operou também em mim com eficácia para com os gentios),
⁹ E conhecendo Tiago, Cefas e João, que eram considerados como as colunas, a graça que me havia sido dada, deram-nos as destras, em comunhão comigo e com Barnabé, para que nós fôssemos aos gentios, e eles à circuncisão;
¹⁰ Recomendando-nos somente que nos lembrássemos dos pobres, o que também procurei fazer com diligência.
¹¹ E, chegando Pedro à Antioquia, lhe resisti na cara, porque era repreensível.
¹² Porque, antes que alguns tivessem chegado da parte de Tiago, comia com os gentios; mas, depois que chegaram, se foi retirando, e se apartou deles, temendo os que eram da circuncisão.
¹³ E os outros judeus também dissimulavam com ele, de maneira que até Barnabé se deixou levar pela sua dissimulação.
¹⁴ Mas, quando vi que não andavam bem e direitamente conforme a verdade do evangelho, disse a Pedro na presença de todos: Se tu, sendo judeu, vives como os gentios, e não como judeu, por que obrigas os gentios a viverem como judeus?
¹⁵ Nós somos judeus por natureza, e não pecadores dentre os gentios.
¹⁶ Sabendo que o homem não é justificado pelas obras da lei, mas pela fé em Jesus Cristo, temos também crido em Cristo Jesus, para sermos justificados pela fé em Cristo, e não pelas obras da lei; porquanto pelas obras da lei nenhuma carne será justificada.
¹⁷ Pois, se nós, que procuramos ser justificados em Cristo, nós mesmos também somos achados pecadores, é porventura Cristo ministro do pecado? De maneira nenhuma.
¹⁸ Porque, se torno a edificar aquilo que destruí, constituo-me a mim mesmo transgressor.
¹⁹ Porque eu, pela lei, estou morto para a lei, para viver para Deus.
²⁰ Já estou crucificado com Cristo; e vivo, não mais eu, mas Cristo vive em mim; e a vida que agora vivo na carne, vivo-a pela fé do Filho de Deus, o qual me amou, e se entregou a si mesmo por mim.
²¹ Não aniquilo a graça de Deus; porque, se a justiça provém da lei, segue-se que Cristo morreu em vão. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que Paulo diz que resistiu a Pedro (Cefas) na face, em Antioquia?",
                        opcoes: [
                            { numero: 1, texto: "Porque Pedro era repreensível por se separar dos gentios para comer", correta: true },
                            { numero: 2, texto: "Porque eles discordavam sobre o batismo", correta: false },
                            { numero: 3, texto: "Porque Pedro queria ser o único líder", correta: false },
                            { numero: 4, texto: "Porque Pedro se recusou a viajar", correta: false }
                        ],
                        explicacao: "Gálatas 2:11-12 - ...resisti-lhe na cara, porque era repreensível. Porque, antes que alguns tivessem chegado... comia com os gentios.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como o homem é justificado, segundo Gálatas 2:16?",
                        opcoes: [
                            { numero: 1, texto: "Pelas obras da lei", correta: false },
                            { numero: 2, texto: "Pela fé em Jesus Cristo", correta: true },
                            { numero: 3, texto: "Por sacrifícios anuais", correta: false },
                            { numero: 4, texto: "Pelo cumprimento de tradições", correta: false }
                        ],
                        explicacao: "Gálatas 2:16 - Sabendo que o homem não é justificado pelas obras da lei, mas pela fé em Jesus Cristo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Paulo diz sobre sua vida atual: 'Já estou crucificado com Cristo e...'",
                        opcoes: [
                            { numero: 1, texto: "...agora tento ser perfeito", correta: false },
                            { numero: 2, texto: "...vivo eu, não mais eu, mas Cristo vive em mim", correta: true },
                            { numero: 3, texto: "...estou cansado de pregar", correta: false },
                            { numero: 4, texto: "...esperando o fim do mundo", correta: false }
                        ],
                        explicacao: "Gálatas 2:20 - Já estou crucificado com Cristo; e vivo, não mais eu, mas Cristo vive em mim.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "A Lei e a Promessa",
            texto: ` ¹ Ó insensatos gálatas! Quem vos fascinou para não obedecerdes à verdade, a vós, perante os olhos de quem Jesus Cristo foi evidenciado, crucificado, entre vós?
² Só quisera saber isto de vós: recebestes o Espírito pelas obras da lei ou pela pregação da fé?
³ Sois vós tão insensatos que, tendo começado pelo Espírito, acabeis agora pela carne?
⁴ Será em vão que tenhais padecido tanto? Se é que isso também foi em vão.
⁵ Aquele, pois, que vos dá o Espírito, e que opera maravilhas entre vós, o faz pelas obras da lei, ou pela pregação da fé?
⁶ Assim como Abraão creu em Deus, e isso lhe foi imputado como justiça.
⁷ Sabei, pois, que os que são da fé são filhos de Abraão.
⁸ Ora, tendo a Escritura previsto que Deus havia de justificar pela fé os gentios, anunciou primeiro o evangelho a Abraão, dizendo: Todas as nações serão benditas em ti.
⁹ De sorte que os que são da fé são benditos com o crente Abraão.
¹⁰ Todos aqueles, pois, que são das obras da lei estão debaixo da maldição; porque está escrito: Maldito todo aquele que não permanecer em todas as coisas que estão escritas no livro da lei, para fazê-las.
¹¹ E é evidente que pela lei ninguém será justificado diante de Deus, porque o justo viverá pela fé.
¹² Ora, a lei não é da fé; mas o homem, que fizer estas coisas, por elas viverá.
¹³ Cristo nos resgatou da maldição da lei, fazendo-se maldição por nós; porque está escrito: Maldito todo aquele que for pendurado no madeiro;
¹⁴ Para que a bênção de Abraão chegasse aos gentios por Jesus Cristo, e para que pela fé nós recebamos a promessa do Espírito.
¹⁵ Irmãos, como homem falo; se a aliança de um homem for confirmada, ninguém a anula nem a acrescenta.
¹⁶ Ora, as promessas foram feitas a Abraão e à sua descendência. Não diz: E às descendências, como falando de muitas, mas como de uma só: E à tua descendência, que é Cristo.
¹⁷ Mas digo isto: Que tendo sido a aliança anteriormente confirmada por Deus em Cristo, a lei, que veio quatrocentos e trinta anos depois, não a invalida, de forma a abolir a promessa.
¹⁸ Porque, se a herança provém da lei, já não provém da promessa; mas Deus pela promessa a deu gratuitamente a Abraão.
¹⁹ Logo, para que é a lei? Foi ordenada por causa das transgressões, até que viesse a posteridade a quem a promessa tinha sido feita; e foi posta pelos anjos na mão de um mediador.
²⁰ Ora, o mediador não o é de um só, mas Deus é um.
²¹ Logo, a lei é contra as promessas de Deus? De nenhuma sorte; porque, se fosse dada uma lei que pudesse vivificar, a justiça, na verdade, teria sido pela lei.
²² Mas a Escritura encerrou tudo debaixo do pecado, para que a promessa pela fé em Jesus Cristo fosse dada aos crentes.
²³ Mas, antes que a fé viesse, estávamos guardados debaixo da lei, e encerrados para aquela fé que se havia de manifestar.
²⁴ De maneira que a lei nos serviu de tutor, para nos conduzir a Cristo, para que pela fé fôssemos justificados.
²⁵ Mas, depois que veio a fé, já não estamos debaixo de tutor.
²⁶ Porque todos sois filhos de Deus pela fé em Cristo Jesus.
²⁷ Porque todos quantos fostes batizados em Cristo já vos revestistes de Cristo.
²⁸ Nisto não há judeu nem grego; não há servo nem livre; não há macho nem fêmea; porque todos vós sois um em Cristo Jesus.
²⁹ E, se sois de Cristo, então sois descendência de Abraão, e herdeiros conforme a promessa. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem são os verdadeiros filhos de Abraão?",
                        opcoes: [
                            { numero: 1, texto: "Apenas os que nasceram em Israel", correta: false },
                            { numero: 2, texto: "Os que são da fé", correta: true },
                            { numero: 3, texto: "Os que guardam o sábado", correta: false },
                            { numero: 4, texto: "Apenas os reis", correta: false }
                        ],
                        explicacao: "Gálatas 3:7 - Sabei, pois, que os que são da fé estes são filhos de Abraão.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual foi a função da lei até que Cristo viesse?",
                        opcoes: [
                            { numero: 1, texto: "Nosso aio (tutor/guia) para nos levar a Cristo", correta: true },
                            { numero: 2, texto: "Um peso para nos destruir", correta: false },
                            { numero: 3, texto: "Apenas um livro de curiosidades", correta: false },
                            { numero: 4, texto: "A única forma de salvação eterna", correta: false }
                        ],
                        explicacao: "Gálatas 3:24 - De sorte que a lei nos serviu de aio, para nos levar a Cristo, para que pela fé fôssemos justificados.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Em Cristo Jesus, há diferença entre judeu e grego, servo e livre?",
                        opcoes: [
                            { numero: 1, texto: "Sim, os judeus são maiores", correta: false },
                            { numero: 2, texto: "Não, todos sois um em Cristo Jesus", correta: true },
                            { numero: 3, texto: "Apenas para os que moram em Roma", correta: false },
                            { numero: 4, texto: "Sim, os homens são superiores", correta: false }
                        ],
                        explicacao: "Gálatas 3:28 - Nisto não há judeu nem grego; não há servo nem livre... porque todos vós sois um em Cristo Jesus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "Filhos e não Escravos",
            texto: ` ¹ Digo, pois, que todo o tempo que o herdeiro é menino em nada difere do servo, ainda que seja senhor de tudo;
² Mas está debaixo de tutores e curadores até ao tempo determinado pelo pai.
³ Assim também nós, quando éramos meninos, estávamos reduzidos à servidão debaixo dos primeiros rudimentos do mundo.
⁴ Mas, vindo a plenitude dos tempos, Deus enviou seu Filho, nascido de mulher, nascido sob a lei,
⁵ Para remir os que estavam debaixo da lei, a fim de recebermos a adoção de filhos.
⁶ E, porque sois filhos, Deus enviou aos vossos corações o Espírito de seu Filho, que clama: Aba, Pai.
⁷ Assim que já não és mais servo, mas filho; e, se és filho, és também herdeiro de Deus por Cristo.
⁸ Mas, quando não conhecíeis a Deus, servíeis aos que por natureza não são deuses.
⁹ Mas agora, conhecendo a Deus, ou, antes, sendo conhecidos por Deus, como tornais outra vez a esses rudimentos fracos e pobres, aos quais de novo quereis servir?
¹⁰ Guardais dias, e meses, e tempos, e anos.
¹¹ Receio de vós, que não haja trabalhado em vão para convosco.
¹² Irmãos, rogo-vos que sejais como eu, porque também eu sou como vós; nenhum mal me fizestes.
¹³ E vós sabeis que primeiro vos anunciei o evangelho estando em enfermidade da carne;
¹⁴ E não rejeitastes, nem desprezastes isso que era uma tentação na minha carne, antes me recebestes como um anjo de Deus, como Jesus Cristo mesmo.
¹⁵ Qual é, logo, a vossa bem-aventurança? Porque vos dou testemunho de que, se possível fora, arrancaríeis os vossos olhos, e mos daríeis.
¹⁶ Fiz-me acaso vosso inimigo, dizendo a verdade?
¹⁷ Eles têm zelo por vós, não como convém; mas querem excluir-vos, para que vós tenhais zelo por eles.
¹⁸ É bom ser zeloso, mas sempre do bem, e não somente quando estou presente convosco.
¹⁹ Meus filhinhos, por quem de novo sinto as dores de parto, até que Cristo seja formado em vós;
²⁰ Eu bem quisera agora estar presente convosco, e mudar a minha voz; porque estou perplexo a vosso respeito.
²¹ Dizei-me, os que quereis estar debaixo da lei, não ouvis vós a lei?
²² Porque está escrito que Abraão teve dois filhos, um da escrava, e outro da livre.
²³ Todavia, o que era da escrava nasceu segundo a carne, mas, o que era da livre, por promessa.
²⁴ O que se entende por alegoria; porque estas são as duas alianças; uma, do monte Sinai, gerando filhos para a servidão, que é Agar.
²⁵ Ora, esta Agar é Sinai, um monte da Arábia, que corresponde à Jerusalém que agora existe, pois é escrava com seus filhos.
²⁶ Mas a Jerusalém que é de cima é livre; a qual é mãe de todos nós.
²⁷ Porque está escrito: Alegra-te, estéril, que não dás à luz; esforça-te e clama, tu que não estás de parto; porque os filhos da solitária são mais do que os da que tem marido.
²⁸ Mas nós, irmãos, somos filhos da promessa como Isaque.
²⁹ Mas, como então aquele que era gerado segundo a carne perseguia o que o era segundo o Espírito, assim é também agora.
³⁰ Mas que diz a Escritura? Lança fora a escrava e seu filho, porque de modo algum o filho da escrava herdará com o filho da livre.
³¹ De maneira que, irmãos, somos filhos, não da escrava, mas da livre. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Deus enviou aos nossos corações para que clamássemos 'Aba, Pai'?",
                        opcoes: [
                            { numero: 1, texto: "O Espírito de seu Filho", correta: true },
                            { numero: 2, texto: "Um anjo mensageiro", correta: false },
                            { numero: 3, texto: "Uma lista de mandamentos", correta: false },
                            { numero: 4, texto: "Uma grande riqueza", correta: false }
                        ],
                        explicacao: "Gálatas 4:6 - E, porque sois filhos, Deus enviou aos vossos corações o Espírito de seu Filho, que clama: Aba, Pai.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quais são as duas mulheres citadas por Paulo para ilustrar as duas alianças?",
                        opcoes: [
                            { numero: 1, texto: "Agar e Sara", correta: true },
                            { numero: 2, texto: "Eva e Maria", correta: false },
                            { numero: 3, texto: "Rute e Noemi", correta: false },
                            { numero: 4, texto: "Marta e Maria", correta: false }
                        ],
                        explicacao: "Gálatas 4:22-24 - ...um da escrava (Agar), e outro da livre (Sara)... Estas coisas são alegóricas; porque estas são as duas alianças.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Paulo diz que os gálatas estavam dispostos a fazer um grande sacrifício por ele no início. Qual era?",
                        opcoes: [
                            { numero: 1, texto: "Dar-lhe todo o seu ouro", correta: false },
                            { numero: 2, texto: "Arrancar os próprios olhos e dar-lhos", correta: true },
                            { numero: 3, texto: "Caminhar mil milhas", correta: false },
                            { numero: 4, texto: "Morrer em seu lugar", correta: false }
                        ],
                        explicacao: "Gálatas 4:15 - ...se possível fora, arrancaríeis os vossos olhos para mo dardes.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "A Liberdade e o Fruto do Espírito",
            texto: `¹ Estai, pois, firmes na liberdade com que Cristo nos libertou, e não torneis a colocar-vos debaixo do jugo da servidão.
² Eis que eu, Paulo, vos digo que, se vos deixardes circuncidar, Cristo de nada vos aproveitará.
³ E de novo protesto a todo o homem, que se deixa circuncidar, que está obrigado a guardar toda a lei.
⁴ Separados estais de Cristo, vós os que vos justificais pela lei; da graça tendes caído.
⁵ Porque nós pelo Espírito da fé aguardamos a esperança da justiça.
⁶ Porque em Jesus Cristo nem a circuncisão nem a incircuncisão tem valor algum; mas sim a fé que opera pelo amor.
⁷ Corríeis bem; quem vos impediu, para que não obedeçais à verdade?
⁸ Esta persuasão não vem daquele que vos chamou.
⁹ Um pouco de fermento leveda toda a massa.
¹⁰ Confio de vós, no Senhor, que nenhuma outra coisa sentireis; mas aquele que vos inquieta, seja ele quem for, sofrerá a condenação.
¹¹ Eu, porém, irmãos, se prego ainda a circuncisão, por que sou, pois, perseguido? Logo o escândalo da cruz está aniquilado.
¹² Eu quereria que fossem cortados aqueles que vos andam inquietando.
¹³ Porque vós, irmãos, fostes chamados à liberdade. Não useis então da liberdade para dar ocasião à carne, mas servi-vos uns aos outros pelo amor.
¹⁴ Porque toda a lei se cumpre numa só palavra, nesta: Amarás ao teu próximo como a ti mesmo.
¹⁵ Se vós, porém, vos mordeis e devorais uns aos outros, vede não vos consumais também uns aos outros.
¹⁶ Digo, porém: Andai em Espírito, e não cumprireis a concupiscência da carne.
¹⁷ Porque a carne cobiça contra o Espírito, e o Espírito contra a carne; e estes opõem-se um ao outro, para que não façais as coisas que quereis.
¹⁸ Mas, se sois guiados pelo Espírito, não estais debaixo da lei.
¹⁹ Porque as obras da carne são manifestas, as quais são: adultério, fornicação, impureza, lascívia,
²⁰ Idolatria, feitiçaria, inimizades, contendas, ciúmes, iras, pelejas, dissensões, heresias,
²¹ Invejas, homicídios, bebedices, glutonarias, e coisas semelhantes a estas, acerca das quais de antemão vos declaro, como também já antes vos disse, que os que cometem tais coisas não herdarão o reino de Deus.
²² Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança.
²³ Contra estas coisas não há lei.
²⁴ E os que são de Cristo crucificaram a carne com as suas paixões e concupiscências.
²⁵ Se vivemos em Espírito, andemos também em Espírito.
²⁶ Não sejamos cobiçosos de vanglórias, irritando-nos uns aos outros, invejando-nos uns aos outros 
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é o fruto do Espírito, segundo Gálatas 5:22?",
                        opcoes: [
                            { numero: 1, texto: "Riqueza, fama e poder", correta: false },
                            { numero: 2, texto: "Amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança", correta: true },
                            { numero: 3, texto: "Inteligência e força física", correta: false },
                            { numero: 4, texto: "Apenas falar em línguas", correta: false }
                        ],
                        explicacao: "Gálatas 5:22 - Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontece se andarmos em Espírito?",
                        opcoes: [
                            { numero: 1, texto: "Não cumprireis a concupiscência da carne", correta: true },
                            { numero: 2, texto: "Ficaremos ricos rapidamente", correta: false },
                            { numero: 3, texto: "Não teremos mais problemas", correta: false },
                            { numero: 4, texto: "Seremos levados ao céu imediatamente", correta: false }
                        ],
                        explicacao: "Gálatas 5:16 - Digo, porém: Andai em Espírito, e não cumprireis a concupiscência da carne.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como devemos servir uns aos outros?",
                        opcoes: [
                            { numero: 1, texto: "Por obrigação", correta: false },
                            { numero: 2, texto: "Pelo amor", correta: true },
                            { numero: 3, texto: "Por dinheiro", correta: false },
                            { numero: 4, texto: "Apenas se formos pagos", correta: false }
                        ],
                        explicacao: "Gálatas 5:13 - ...servi-vos uns aos outros pelo amor.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "Semeadura e Colheita",
            texto: ` ¹ Irmãos, se algum homem chegar a ser surpreendido nalguma ofensa, vós, que sois espirituais, encaminhai o tal com espírito de mansidão; olhando por ti mesmo, para que não sejas também tentado.
² Levai as cargas uns dos outros, e assim cumprireis a lei de Cristo.
³ Porque, se alguém cuida ser alguma coisa, não sendo nada, engana-se a si mesmo.
⁴ Mas prove cada um a sua própria obra, e terá glória só em si mesmo, e não noutro.
⁵ Porque cada qual levará a sua própria carga.
⁶ E o que é instruído na palavra reparta de todos os seus bens com aquele que o instrui.
⁷ Não erreis: Deus não se deixa escarnecer; porque tudo o que o homem semear, isso também ceifará.
⁸ Porque o que semeia na sua carne, da carne ceifará a corrupção; mas o que semeia no Espírito, do Espírito ceifará a vida eterna.
⁹ E não nos cansemos de fazer bem, porque a seu tempo ceifaremos, se não houvermos desfalecido.
¹⁰ Então, enquanto temos tempo, façamos bem a todos, mas principalmente aos domésticos da fé.
¹¹ Vede com que grandes letras vos escrevi por minha mão.
¹² Todos os que querem mostrar boa aparência na carne, esses vos obrigam a circuncidar-vos, somente para não serem perseguidos por causa da cruz de Cristo.
¹³ Porque nem ainda esses mesmos que se circuncidam guardam a lei, mas querem que vos circuncideis, para se gloriarem na vossa carne.
¹⁴ Mas longe esteja de mim gloriar-me, a não ser na cruz de nosso Senhor Jesus Cristo, pelo qual o mundo está crucificado para mim e eu para o mundo.
¹⁵ Porque em Cristo Jesus nem a circuncisão, nem a incircuncisão tem virtude alguma, mas o ser nova criatura.
¹⁶ E a todos quantos andarem conforme esta regra, paz e misericórdia sobre eles e sobre o Israel de Deus.
¹⁷ Desde agora ninguém me inquiete; porque trago no meu corpo as marcas do Senhor Jesus.
¹⁸ A graça de nosso Senhor Jesus Cristo seja, irmãos, com o vosso espírito! Amém. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que acontece com tudo o que o homem semear?",
                        opcoes: [
                            { numero: 1, texto: "Deus mudará a colheita", correta: false },
                            { numero: 2, texto: "Isso também ceifará", correta: true },
                            { numero: 3, texto: "O vento levará", correta: false },
                            { numero: 4, texto: "Não importa o que se semeia", correta: false }
                        ],
                        explicacao: "Gálatas 6:7 - Não erreis: Deus não se deixa escarnecer; porque tudo o que o homem semear, isso também ceifará.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que não devemos fazer enquanto fazemos o bem?",
                        opcoes: [
                            { numero: 1, texto: "Não nos cansemos de fazer bem", correta: true },
                            { numero: 2, texto: "Não devemos contar a ninguém", correta: false },
                            { numero: 3, texto: "Não devemos esperar colher", correta: false },
                            { numero: 4, texto: "Não devemos orar", correta: false }
                        ],
                        explicacao: "Gálatas 6:9 - E não nos cansemos de fazer bem, porque a seu tempo ceifaremos, se não houvermos desfalecido.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Em que Paulo diz que se gloriaria?",
                        opcoes: [
                            { numero: 1, texto: "Na sua sabedoria farisaica", correta: false },
                            { numero: 2, texto: "Na cruz de nosso Senhor Jesus Cristo", correta: true },
                            { numero: 3, texto: "Na sua cidadania romana", correta: false },
                            { numero: 4, texto: "No número de igrejas que fundou", correta: false }
                        ],
                        explicacao: "Gálatas 6:14 - Mas longe esteja de mim gloriar-me, senão na cruz de nosso Senhor Jesus Cristo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};