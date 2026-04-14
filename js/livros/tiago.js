// js/livros/tiago.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const tiago = {
    nome: "Tiago",
    icone: "🌱", // Ícone sugerindo o fruto da fé prática
    autor: "Tiago",
    //background: "./imagens/tiago_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "Fé e Sabedoria",
            texto: `¹ Tiago, servo de Deus, e do Senhor Jesus Cristo, às doze tribos que andam dispersas, saúde.
² Meus irmãos, tende grande alegria quando enfrentardes várias tentações;
³ Sabendo que a prova da vossa fé opera a paciência.
⁴ Tenha, porém, a paciência a sua obra perfeita, para que sejais perfeitos e completos, sem faltar em coisa alguma.
⁵ E, se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente, e o não lança em rosto, e ser-lhe-á dada.
⁶ Peça-a, porém, com fé, em nada duvidando; porque o que duvida é semelhante à onda do mar, que é levada pelo vento, e lançada de uma para outra parte.
⁷ Não pense tal homem que receberá do Senhor alguma coisa.
⁸ O homem de ânimo dobre é inconstante em todos os seus caminhos.
⁹ Mas glorie-se o irmão abatido na sua exaltação,
¹⁰ E o rico em seu abatimento; porque ele passará como a flor da erva.
¹¹ Porque sai o sol com ardor, e a erva seca, e a sua flor cai, e a formosa aparência do seu aspecto perece; assim se murchará também o rico em seus caminhos.
¹² Bem-aventurado o homem que suporta a tentação; porque, quando for provado, receberá a coroa da vida, a qual o Senhor tem prometido aos que o amam.
¹³ Ninguém, sendo tentado, diga: De Deus sou tentado; porque Deus não pode ser tentado pelo mal, e a ninguém tenta.
¹⁴ Mas cada um é tentado, quando atraído e engodado pela sua própria concupiscência.
¹⁵ Depois, havendo a concupiscência concebido, dá à luz o pecado; e o pecado, sendo consumado, gera a morte.
¹⁶ Não erreis, meus amados irmãos.
¹⁷ Toda a boa dádiva e todo o dom perfeito vem do alto, descendo do Pai das luzes, em quem não há mudança nem sombra de variação.
¹⁸ Segundo a sua vontade, ele nos gerou pela palavra da verdade, para que fôssemos como primícias das suas criaturas.
¹⁹ Portanto, meus amados irmãos, todo o homem seja pronto para ouvir, tardio para falar, tardio para se irar.
²⁰ Porque a ira do homem não opera a justiça de Deus.
²¹ Por isso, rejeitando toda a imundícia e superfluidade de malícia, recebei com mansidão a palavra em vós enxertada, a qual pode salvar as vossas almas.
²² E sede cumpridores da palavra, e não somente ouvintes, enganando-vos a vós mesmos.
²³ Porque, se alguém é ouvinte da palavra, e não cumpridor, é semelhante ao homem que contempla ao espelho o seu rosto natural;
²⁴ Porque se contempla a si mesmo, e vai-se, e logo se esquece de como era.
²⁵ Aquele, porém, que atenta bem para a lei perfeita da liberdade, e nisso persevera, não sendo ouvinte esquecidiço, mas fazedor da obra, este tal será bem-aventurado no seu feito.
²⁶ Se alguém entre vós cuida ser religioso, e não refreia a sua língua, antes engana o seu coração, a religião desse é vã.
²⁷ A religião pura e imaculada para com Deus e Pai, é esta: Visitar os órfãos e as viúvas nas suas tribulações, e guardar-se incontaminado do mundo. 
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que devemos fazer se tivermos falta de sabedoria?",
                        opcoes: [
                            { numero: 1, texto: "Pedir a Deus, que a todos dá liberalmente", correta: true },
                            { numero: 2, texto: "Estudar apenas livros humanos", correta: false },
                            { numero: 3, texto: "Desistir de entender", correta: false },
                            { numero: 4, texto: "Esperar que ela venha com a idade", correta: false }
                        ],
                        explicacao: "Tiago 1:5 - E, se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá liberalmente...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como devemos ser em relação à Palavra de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Apenas ouvintes", correta: false },
                            { numero: 2, texto: "Praticantes da palavra, e não somente ouvintes", correta: true },
                            { numero: 3, texto: "Críticos da palavra", correta: false },
                            { numero: 4, texto: "Esquecidos da palavra", correta: false }
                        ],
                        explicacao: "Tiago 1:22 - E sede cumpridores da palavra, e não somente ouvintes, enganando-vos a vós mesmos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "A Fé e as Obras",
            texto: `¹ Meus irmãos, não tenhais a fé de nosso Senhor Jesus Cristo, Senhor da glória, em acepção de pessoas.
² Porque, se no vosso ajuntamento entrar algum homem com anel de ouro no dedo, com trajes preciosos, e entrar também algum pobre com sórdido traje,
³ E atentardes para o que traz o traje precioso, e lhe disserdes: Assenta-te tu aqui num lugar de honra, e disserdes ao pobre: Tu, fica aí em pé, ou assenta-te abaixo do meu estrado,
⁴ Porventura não fizestes distinção entre vós mesmos, e não vos fizestes juízes de maus pensamentos?
⁵ Ouvi, meus amados irmãos: Porventura não escolheu Deus aos pobres deste mundo para serem ricos na fé, e herdeiros do reino que prometeu aos que o amam?
⁶ Mas vós desonrastes o pobre. Porventura não vos oprimem os ricos, e não vos arrastam aos tribunais?
⁷ Porventura não blasfemam eles o bom nome que sobre vós foi invocado?
⁸ Todavia, se cumprirdes, conforme a Escritura, a lei real: Amarás a teu próximo como a ti mesmo, bem fazeis.
⁹ Mas, se fazeis acepção de pessoas, cometeis pecado, e sois condenados pela lei como transgressores.
¹⁰ Porque qualquer que guardar toda a lei, e tropeçar em um só ponto, tornou-se culpado de todos.
¹¹ Porque aquele que disse: Não cometerás adultério, também disse: Não matarás. Se tu pois não cometeres adultério, mas matares, estás feito transgressor da lei.
¹² Assim falai, e assim procedei, como devendo ser julgados pela lei da liberdade.
¹³ Porque o juízo será sem misericórdia sobre aquele que não fez misericórdia; e a misericórdia triunfa do juízo.
¹⁴ Meus irmãos, que aproveita se alguém disser que tem fé, e não tiver as obras? Porventura a fé pode salvá-lo?
¹⁵ E, se o irmão ou a irmã estiverem nus, e tiverem falta de mantimento cotidiano,
¹⁶ E algum de vós lhes disser: Ide em paz, aquentai-vos, e fartai-vos; e não lhes derdes as coisas necessárias para o corpo, que proveito virá daí?
¹⁷ Assim também a fé, se não tiver as obras, é morta em si mesma.
¹⁸ Mas dirá alguém: Tu tens a fé, e eu tenho as obras; mostra-me a tua fé sem as tuas obras, e eu te mostrarei a minha fé pelas minhas obras.
¹⁹ Tu crês que há um só Deus; fazes bem. Também os demônios o creem, e estremecem.
²⁰ Mas, ó homem vão, queres tu saber que a fé sem as obras é morta?
²¹ Porventura o nosso pai Abraão não foi justificado pelas obras, quando ofereceu sobre o altar o seu filho Isaque?
²² Bem vês que a fé cooperou com as suas obras, e que pelas obras a fé foi aperfeiçoada.
²³ E cumpriu-se a Escritura, que diz: E creu Abraão em Deus, e foi-lhe isso imputado como justiça, e foi chamado o amigo de Deus.
²⁴ Vedes então que o homem é justificado pelas obras, e não somente pela fé.
²⁵ E de igual modo Raabe, a meretriz, não foi também justificada pelas obras, quando recolheu os emissários, e os despediu por outro caminho?
²⁶ Porque, assim como o corpo sem o espírito está morto, assim também a fé sem obras é morta. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Tiago diz sobre a fé que não tem obras?",
                        opcoes: [
                            { numero: 1, texto: "É morta em si mesma", correta: true },
                            { numero: 2, texto: "É uma fé secreta", correta: false },
                            { numero: 3, texto: "É suficiente para a salvação", correta: false },
                            { numero: 4, texto: "É a melhor forma de fé", correta: false }
                        ],
                        explicacao: "Tiago 2:17 - Assim também a fé, se não tiver as obras, é morta em si mesma.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é o 'mandamento real' segundo a Escritura?",
                        opcoes: [
                            { numero: 1, texto: "Amarás o teu próximo como a ti mesmo", correta: true },
                            { numero: 2, texto: "Apenas orar sem cessar", correta: false },
                            { numero: 3, texto: "Construir templos grandes", correta: false },
                            { numero: 4, texto: "Acumular conhecimentos", correta: false }
                        ],
                        explicacao: "Tiago 2:8 - Todavia, se cumprirdes, conforme a Escritura, a lei real: Amarás a teu próximo como a ti mesmo, fazeis bem.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "O Uso da Língua",
            texto: `¹ Meus irmãos, muitos de vós não sejam mestres, sabendo que receberemos mais duro juízo.
² Porque todos tropeçamos em muitas coisas. Se alguém não tropeça em palavra, o tal é perfeito, e poderoso para também refrear todo o corpo.
³ Ora, nós pomos freio nas bocas dos cavalos, para que nos obedeçam; e conseguimos dirigir todo o seu corpo.
⁴ Vede também as naus que, sendo tão grandes, e levadas de impetuosos ventos, se viram com um bem pequeno leme para onde quer a vontade daquele que as governa.
⁵ Assim também a língua é um pequeno membro, e gloria-se de grandes coisas. Vede quão grande bosque um pequeno fogo incendeia.
⁶ A língua também é um fogo; como mundo de iniquidade, a língua está posta entre os nossos membros, e contamina todo o corpo, e inflama o curso da natureza, e é inflamada pelo inferno.
⁷ Porque toda a natureza, tanto de bestas feras como de aves, tanto de répteis como de animais do mar, se amansa e foi domada pela natureza humana;
⁸ Mas nenhum homem pode domar a língua. É um mal que não se pode refrear; está cheia de peçonha mortal.
⁹ Com ela bendizemos a Deus e Pai, e com ela amaldiçoamos os homens, feitos à semelhança de Deus.
¹⁰ De uma mesma boca procede bênção e maldição. Meus irmãos, não convém que isto se faça assim.
¹¹ Porventura deita alguma fonte de um mesmo manancial água doce e água amargosa?
¹² Meus irmãos, pode também a figueira produzir azeitonas, ou a videira figos? Assim tampouco pode uma fonte dar água salgada e doce.
¹³ Quem dentre vós é sábio e entendido? Mostre pelo seu bom trato as suas obras em mansidão de sabedoria.
¹⁴ Mas, se tendes amarga inveja, e sentimento contencioso em vosso coração, não vos glorieis, nem mintais contra a verdade.
¹⁵ Essa não é a sabedoria que vem do alto, mas é terrena, animal e diabólica.
¹⁶ Porque onde há inveja e espírito contencioso aí há perturbação e toda a obra perversa.
¹⁷ Mas a sabedoria que do alto vem é, primeiramente pura, depois pacífica, moderada, tratável, cheia de misericórdia e de bons frutos, sem parcialidade, e sem hipocrisia.
¹⁸ Ora, o fruto da justiça semeia-se na paz, para os que exercitam a paz. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "A que Tiago compara a língua no capítulo 3?",
                        opcoes: [
                            { numero: 1, texto: "A um pequeno fogo que incendeia uma grande selva", correta: true },
                            { numero: 2, texto: "A um rio de águas calmas", correta: false },
                            { numero: 3, texto: "A um escudo protetor", correta: false },
                            { numero: 4, texto: "A uma pena de escrever", correta: false }
                        ],
                        explicacao: "Tiago 3:5 - Assim também a língua é um pequeno membro... Vede quão grande bosque um pequeno fogo incendeia.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como é a sabedoria que vem do alto?",
                        opcoes: [
                            { numero: 1, texto: "Primeiramente pura, depois pacífica, moderada, tratável", correta: true },
                            { numero: 2, texto: "Orgulhosa e autoritária", correta: false },
                            { numero: 3, texto: "Confusa e misteriosa", correta: false },
                            { numero: 4, texto: "Terrena, animal e diabólica", correta: false }
                        ],
                        explicacao: "Tiago 3:17 - Mas a sabedoria que do alto vem é, primeiramente pura, depois pacífica, moderada, tratável...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "Sujeição a Deus",
            texto: `¹ De onde vêm as guerras e pelejas entre vós? Porventura não vêm disto, a saber, dos vossos deleites, que nos vossos membros guerreiam?
² Cobiçais, e nada tendes; matais, e sois invejosos, e nada podeis alcançar; combateis e guerreais, e nada tendes, porque não pedis.
³ Pedis, e não recebeis, porque pedis mal, para o gastardes em vossos deleites.
⁴ Adúlteros e adúlteras, não sabeis vós que a amizade do mundo é inimizade contra Deus? Portanto, qualquer que quiser ser amigo do mundo constitui-se inimigo de Deus.
⁵ Ou cuidais vós que em vão diz a Escritura: O Espírito que em nós habita tem ciúmes?
⁶ Antes, ele dá maior graça. Portanto diz: Deus resiste aos soberbos, mas dá graça aos humildes.
⁷ Sujeitai-vos, pois, a Deus, resisti ao diabo, e ele fugirá de vós.
⁸ Chegai-vos a Deus, e ele se chegará a vós. Limpai as mãos, pecadores; e, vós de duplo ânimo, purificai os corações.
⁹ Senti as vossas misérias, e lamentai e chorai; converta-se o vosso riso em pranto, e o vosso gozo em tristeza.
¹⁰ Humilhai-vos perante o Senhor, e ele vos exaltará.
¹¹ Irmãos, não faleis mal uns dos outros. Quem fala mal de um irmão, e julga a seu irmão, fala mal da lei, e julga a lei; e, se tu julgas a lei, já não és observador da lei, mas juiz.
¹² Há só um legislador que pode salvar e destruir. Tu, porém, quem és, que julgas a outro?
¹³ Eia agora vós, que dizeis: Hoje, ou amanhã, iremos a tal cidade, e lá passaremos um ano, e contrataremos, e ganharemos;
¹⁴ Digo-vos que não sabeis o que acontecerá amanhã. Porque, que é a vossa vida? É um vapor que aparece por um pouco, e depois se desvanece.
¹⁵ Em lugar do que devíeis dizer: Se o Senhor quiser, e se vivermos, faremos isto ou aquilo.
¹⁶ Mas agora vos gloriais em vossas presunções; toda a glória tal como esta é maligna.
¹⁷ Aquele, pois, que sabe fazer o bem e não o faz, comete pecado. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que devemos fazer para que o diabo fuja de nós?",
                        opcoes: [
                            { numero: 1, texto: "Sujeitai-vos a Deus, resisti ao diabo", correta: true },
                            { numero: 2, texto: "Apenas ter medo", correta: false },
                            { numero: 3, texto: "Discutir com ele", correta: false },
                            { numero: 4, texto: "Fugir das pessoas", correta: false }
                        ],
                        explicacao: "Tiago 4:7 - Sujeitai-vos, pois, a Deus, resisti ao diabo, e ele fugirá de vós.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que é a nossa vida, segundo Tiago 4:14?",
                        opcoes: [
                            { numero: 1, texto: "Um vapor que aparece por um pouco e depois se desvanece", correta: true },
                            { numero: 2, texto: "Uma rocha eterna", correta: false },
                            { numero: 3, texto: "Algo que dura para sempre na terra", correta: false },
                            { numero: 4, texto: "Uma linha infinita", correta: false }
                        ],
                        explicacao: "Tiago 4:14 - Porque, que é a vossa vida? É um vapor que aparece por um pouco, e depois se desvanece.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "Paciência e Oração",
            texto: ` ¹ Eia, pois, agora vós, ricos, chorai e pranteai, por vossas misérias, que sobre vós hão de vir.
² As vossas riquezas estão apodrecidas, e as vossas vestes estão comidas de traça.
³ O vosso ouro e a vossa prata se enferrujaram; e a sua ferrugem dará testemunho contra vós, e comerá como fogo a vossa carne. Entesourastes para os últimos dias.
⁴ Eis que o salário dos trabalhadores que ceifaram as vossas terras, e que por vós foi diminuído, clama; e os clamores dos que ceifaram entraram nos ouvidos do Senhor dos exércitos.
⁵ Deliciosamente vivestes sobre a terra, e vos deleitastes; cevastes os vossos corações, como num dia de matança.
⁶ Condenastes e matastes o justo; ele não vos resistiu.
⁷ Sede pois, irmãos, pacientes até à vinda do Senhor. Eis que o lavrador espera o precioso fruto da terra, aguardando-o com paciência, até que receba a chuva temporã e serôdia.
⁸ Sede vós também pacientes, fortalecei os vossos corações; porque já a vinda do Senhor está próxima.
⁹ Irmãos, não vos queixeis uns contra os outros, para que não sejais condenados. Eis que o juiz está à porta.
¹⁰ Meus irmãos, tomai por exemplo de aflição e paciência os profetas que falaram em nome do Senhor.
¹¹ Eis que temos por bem-aventurados os que sofreram. Ouvistes qual foi a paciência de Jó, e vistes o fim que o Senhor lhe deu; porque o Senhor é muito misericordioso e piedoso.
¹² Mas, sobretudo, meus irmãos, não jureis, nem pelo céu, nem pela terra, nem façais qualquer outro juramento; mas que a vossa palavra seja sim, sim, e não, não; para que não caiais em condenação.
¹³ Está alguém entre vós aflito? Ore. Está alguém contente? Cante louvores.
¹⁴ Está alguém entre vós doente? Chame os presbíteros da igreja, e orem sobre ele, ungindo-o com azeite em nome do Senhor;
¹⁵ E a oração da fé salvará o doente, e o Senhor o levantará; e, se houver cometido pecados, ser-lhe-ão perdoados.
¹⁶ Confessai as vossas culpas uns aos outros, e orai uns pelos outros, para que sareis. A oração do justo pode muito em seus efeitos.
¹⁷ Elias era homem sujeito às mesmas paixões que nós e, orando, pediu que não chovesse e, por três anos e seis meses, não choveu sobre a terra.
¹⁸ E orou outra vez, e o céu deu chuva, e a terra produziu o seu fruto.
¹⁹ Irmãos, se algum dentre vós se tem desviado da verdade, e alguém o converter,
²⁰ Saiba que aquele que converter um pecador do erro do seu caminho, salvará da morte uma alma, e cobrirá uma multidão de pecados. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem é citado como exemplo de paciência e sofrimento?",
                        opcoes: [
                            { numero: 1, texto: "Os profetas e Job (Jó)", correta: true },
                            { numero: 2, texto: "Os reis de Judá", correta: false },
                            { numero: 3, texto: "Os escribas", correta: false },
                            { numero: 4, texto: "Os mercadores", correta: false }
                        ],
                        explicacao: "Tiago 5:10-11 - Meus irmãos, tomai por exemplo de aflição e paciência os profetas... Ouvistes a paciência de Job.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que a oração feita por um justo pode fazer?",
                        opcoes: [
                            { numero: 1, texto: "Pode muito em seus efeitos", correta: true },
                            { numero: 2, texto: "Não tem valor prático", correta: false },
                            { numero: 3, texto: "Serve apenas para tranquilizar a mente", correta: false },
                            { numero: 4, texto: "Só funciona se for em público", correta: false }
                        ],
                        explicacao: "Tiago 5:16 - ...A oração feita por um justo pode muito em seus efeitos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};