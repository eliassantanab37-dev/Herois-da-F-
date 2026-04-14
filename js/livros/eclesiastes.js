// js/livros/eclesiastes.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const eclesiastes = {
    nome: "Eclesiastes",
    icone: "⏳",
    autor: "Salomão (O Pregador)",
 //   background: "./imagens/eclesiastes_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "Tudo é Vaidade",
            texto: ` ¹ Palavras do pregador, filho de Davi, rei em Jerusalém.
² Vaidade de vaidades, diz o pregador, vaidade de vaidades! Tudo é vaidade.
³ Que proveito tem o homem, de todo o seu trabalho, que faz debaixo do sol?
⁴ Uma geração vai, e outra geração vem; mas a terra para sempre permanece.
⁵ Nasce o sol, e o sol se põe, e apressa-se e volta ao seu lugar de onde nasceu.
⁶ O vento vai para o sul, e faz o seu giro para o norte; continuamente vai girando o vento, e volta fazendo os seus circuitos.
⁷ Todos os rios vão para o mar, e contudo o mar não se enche; ao lugar para onde os rios vão, para ali tornam eles a correr.
⁸ Todas as coisas são trabalhosas; o homem não o pode exprimir; os olhos não se fartam de ver, nem os ouvidos se enchem de ouvir.
⁹ O que foi, isso é o que há de ser; e o que se fez, isso se fará; de modo que nada há de novo debaixo do sol.
¹⁰ Há alguma coisa de que se possa dizer: Vê, isto é novo? Já foi nos séculos passados, que foram antes de nós.
¹¹ Já não há lembrança das coisas que precederam, e das coisas que hão de ser também delas não haverá lembrança, entre os que hão de vir depois.
¹² Eu, o pregador, fui rei sobre Israel em Jerusalém.
¹³ E apliquei o meu coração a esquadrinhar, e a informar-me com sabedoria de tudo quanto sucede debaixo do céu; esta enfadonha ocupação deu Deus aos filhos dos homens, para nela os exercitar.
¹⁴ Atentei para todas as obras que se fazem debaixo do sol, e eis que tudo era vaidade e aflição de espírito.
¹⁵ Aquilo que é torto não se pode endireitar; aquilo que falta não se pode calcular.
¹⁶ Falei eu com o meu coração, dizendo: Eis que eu me engrandeci, e sobrepujei em sabedoria a todos os que houve antes de mim em Jerusalém; e o meu coração contemplou abundantemente a sabedoria e o conhecimento.
¹⁷ E apliquei o meu coração a conhecer a sabedoria e a conhecer os desvarios e as loucuras, e vim a saber que também isto era aflição de espírito.
¹⁸ Porque na muita sabedoria há muito enfado; e o que aumenta em conhecimento, aumenta em dor.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Pregador conclui sobre todas as obras que se fazem debaixo do sol?",
                        opcoes: [
                            { numero: 1, texto: "São eternas e imutáveis", correta: false },
                            { numero: 2, texto: "São todas vaidade e aflição de espírito", correta: true },
                            { numero: 3, texto: "Trazem felicidade plena", correta: false },
                            { numero: 4, texto: "São o único propósito humano", correta: false }
                        ],
                        explicacao: "Eclesiastes 1:14 - Vi todas as obras que se fazem debaixo do sol, e eis que tudo era vaidade e aflição de espírito.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Segundo o capítulo 1, o que acontece com a terra enquanto as gerações passam?",
                        opcoes: [
                            { numero: 1, texto: "Ela se renova totalmente", correta: false },
                            { numero: 2, texto: "Ela desaparece com o tempo", correta: false },
                            { numero: 3, texto: "Ela será destruída pelo sol", correta: false },
                            { numero: 4, texto: "A terra permanece para sempre", correta: true }
                        ],
                        explicacao: "Eclesiastes 1:4 - Uma geração vai, e outra geração vem; mas a terra para sempre permanece.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Pregador diz sobre o que foi e o que se fez?",
                        opcoes: [
                            { numero: 1, texto: "O que foi, isso é o que há de ser", correta: true },
                            { numero: 2, texto: "O passado nunca se repete", correta: false },
                            { numero: 3, texto: "Tudo será novo amanhã", correta: false },
                            { numero: 4, texto: "A história é linear e única", correta: false }
                        ],
                        explicacao: "Eclesiastes 1:9 - O que foi, isso é o que há de ser; e o que se fez, isso se fará; de modo que nada há de novo debaixo do sol.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "A Ilusão do Prazer e da Riqueza",
            texto: ` ¹ Disse eu no meu coração: Ora vem, eu te provarei com alegria; portanto goza o prazer; mas eis que também isso era vaidade.
² Ao riso disse: Está doido; e da alegria: De que serve esta?
³ Busquei no meu coração como estimular com vinho a minha carne (regendo porém o meu coração com sabedoria), e entregar-me à loucura, até ver o que seria melhor que os filhos dos homens fizessem debaixo do céu durante o número dos dias de sua vida.
⁴ Fiz para mim obras magníficas; edifiquei para mim casas; plantei para mim vinhas.
⁵ Fiz para mim hortas e jardins, e plantei neles árvores de toda a espécie de fruto.
⁶ Fiz para mim tanques de águas, para regar com eles o bosque em que reverdeciam as árvores.
⁷ Adquiri servos e servas, e tive servos nascidos em casa; também tive grandes possessões de gados e ovelhas, mais do que todos os que houve antes de mim em Jerusalém.
⁸ Amontoei também para mim prata e ouro, e tesouros dos reis e das províncias; provi-me de cantores e cantoras, e das delícias dos filhos dos homens; e de instrumentos de música de toda a espécie.
⁹ E fui engrandecido, e aumentei mais do que todos os que houve antes de mim em Jerusalém; perseverou também comigo a minha sabedoria.
¹⁰ E tudo quanto desejaram os meus olhos não lhes neguei, nem privei o meu coração de alegria alguma; mas o meu coração se alegrou por todo o meu trabalho, e esta foi a minha porção de todo o meu trabalho.
¹¹ E olhei eu para todas as obras que fizeram as minhas mãos, como também para o trabalho que eu, trabalhando, tinha feito, e eis que tudo era vaidade e aflição de espírito, e que proveito nenhum havia debaixo do sol.
¹² Então passei a contemplar a sabedoria, e a loucura e a estultícia. Pois que fará o homem que seguir ao rei? O mesmo que outros já fizeram.
¹³ Então vi eu que a sabedoria é mais excelente do que a estultícia, quanto a luz é mais excelente do que as trevas.
¹⁴ Os olhos do homem sábio estão na sua cabeça, mas o louco anda em trevas; então também entendi eu que o mesmo lhes sucede a ambos.
¹⁵ Assim eu disse no meu coração: Como acontece ao tolo, assim me sucederá a mim; por que então busquei eu mais a sabedoria? Então disse no meu coração que também isto era vaidade.
¹⁶ Porque nunca haverá mais lembrança do sábio do que do tolo; porquanto de tudo, nos dias futuros, total esquecimento haverá. E como morre o sábio, assim morre o tolo!
¹⁷ Por isso odiei esta vida, porque a obra que se faz debaixo do sol me era penosa; sim, tudo é vaidade e aflição de espírito.
¹⁸ Também eu odiei todo o meu trabalho, que realizei debaixo do sol, visto que eu havia de deixá-lo ao homem que viesse depois de mim.
¹⁹ E quem sabe se será sábio ou tolo? Todavia, se assenhoreará de todo o meu trabalho que realizei e em que me houve sabiamente debaixo do sol; também isto é vaidade.
²⁰ Então eu me volvi e entreguei o meu coração ao desespero no tocante ao trabalho, o qual realizei debaixo do sol.
²¹ Porque há homem cujo trabalho é feito com sabedoria, conhecimento, e destreza; contudo deixará o seu trabalho como porção de quem nele não trabalhou; também isto é vaidade e grande mal.
²² Porque, que mais tem o homem de todo o seu trabalho, e da aflição do seu coração, em que ele anda trabalhando debaixo do sol?
²³ Porque todos os seus dias são dores, e a sua ocupação é aflição; até de noite não descansa o seu coração; também isto é vaidade.
²⁴ Não há nada melhor para o homem do que comer e beber, e fazer com que sua alma goze do bem do seu trabalho. Também vi que isto vem da mão de Deus.
²⁵ Pois quem pode comer, ou quem pode gozar melhor do que eu?
²⁶ Porque ao homem que é bom diante dele, dá Deus sabedoria e conhecimento e alegria; mas ao pecador dá trabalho, para que ele ajunte, e amontoe, para dá-lo ao que é bom perante Deus. Também isto é vaidade e aflição de espírito.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual foi a conclusão do sábio sobre a sabedoria em relação à estultícia (tolice)?",
                        opcoes: [
                            { numero: 1, texto: "Não há diferença entre as duas", correta: false },
                            { numero: 2, texto: "A sabedoria é inferior", correta: false },
                            { numero: 3, texto: "A sabedoria é superior, como a luz em relação às trevas", correta: true },
                            { numero: 4, texto: "O tolo vive melhor que o sábio", correta: false }
                        ],
                        explicacao: "Eclesiastes 2:13 - Então vi eu que a sabedoria é mais excelente do que a estultícia, quanto a luz é mais excelente do que as trevas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontece com o sábio e o tolo no final da vida?",
                        opcoes: [
                            { numero: 1, texto: "O sábio é poupado da morte", correta: false },
                            { numero: 2, texto: "O tolo morre antes", correta: false },
                            { numero: 3, texto: "O sábio vive na memória de todos", correta: false },
                            { numero: 4, texto: "O mesmo sucesso (a morte) sucede a ambos", correta: true }
                        ],
                        explicacao: "Eclesiastes 2:14 - Os olhos do sábio estão na sua cabeça, mas o louco anda em trevas; contudo percebi que o mesmo lhes sucede a ambos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o homem deve fazer como dom de Deus, segundo Eclesiastes 2:24?",
                        opcoes: [
                            { numero: 1, texto: "Que coma, beba e goze do bem do seu trabalho", correta: true },
                            { numero: 2, texto: "Que apenas ore o dia todo", correta: false },
                            { numero: 3, texto: "Que busque acumular ouro", correta: false },
                            { numero: 4, texto: "Que evite todo tipo de alegria", correta: false }
                        ],
                        explicacao: "Eclesiastes 2:24 - Não é, pois, bom para o homem que coma e beba, e que faça gozar a sua alma do bem do seu trabalho?",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "O Tempo para Todas as Coisas",
            texto: `¹ Tudo tem o seu tempo determinado, e há tempo para todo o propósito debaixo do céu.
² Há tempo de nascer, e tempo de morrer; tempo de plantar, e tempo de arrancar o que se plantou;
³ Tempo de matar, e tempo de curar; tempo de derrubar, e tempo de edificar;
⁴ Tempo de chorar, e tempo de rir; tempo de prantear, e tempo de dançar;
⁵ Tempo de espalhar pedras, e tempo de ajuntar pedras; tempo de abraçar, e tempo de afastar-se de abraçar;
⁶ Tempo de buscar, e tempo de perder; tempo de guardar, e tempo de lançar fora;
⁷ Tempo de rasgar, e tempo de coser; tempo de estar calado, e tempo de falar;
⁸ Tempo de amar, e tempo de odiar; tempo de guerra, e tempo de paz.
⁹ Que proveito tem o trabalhador naquilo em que trabalha?
¹⁰ Tenho visto o trabalho que Deus deu aos filhos dos homens, para com ele os exercitar.
¹¹ Tudo fez formoso em seu tempo; também pôs o mundo no coração do homem, sem que este possa descobrir a obra que Deus fez desde o princípio até ao fim.
¹² Já tenho entendido que não há coisa melhor para eles do que alegrar-se e fazer bem na sua vida;
¹³ E também que todo o homem coma e beba, e goze do bem de todo o seu trabalho; isto é um dom de Deus.
¹⁴ Eu sei que tudo quanto Deus faz durará eternamente; nada se lhe deve acrescentar, e nada se lhe deve tirar; e isto faz Deus para que haja temor diante dele.
¹⁵ O que é, já foi; e o que há de ser, também já foi; e Deus pede conta do que passou.
¹⁶ Vi mais debaixo do sol que no lugar do juízo havia impiedade, e no lugar da justiça havia iniquidade.
¹⁷ Eu disse no meu coração: Deus julgará o justo e o ímpio; porque há um tempo para todo o propósito e para toda a obra.
¹⁸ Disse eu no meu coração, quanto a condição dos filhos dos homens, que Deus os provaria, para que assim pudessem ver que são em si mesmos como os animais.
¹⁹ Porque o que sucede aos filhos dos homens, isso mesmo também sucede aos animais, e lhes sucede a mesma coisa; como morre um, assim morre o outro; e todos têm o mesmo fôlego, e a vantagem dos homens sobre os animais não é nenhuma, porque todos são vaidade.
²⁰ Todos vão para um lugar; todos foram feitos do pó, e todos voltarão ao pó.
²¹ Quem sabe que o fôlego do homem vai para cima, e que o fôlego dos animais vai para baixo da terra?
²² Assim que tenho visto que não há coisa melhor do que alegrar-se o homem nas suas obras, porque essa é a sua porção; pois quem o fará voltar para ver o que será depois dele?
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Complete: Tudo tem o seu tempo determinado, e há tempo para todo o propósito...",
                        opcoes: [
                            { numero: 1, texto: "...dentro do templo", correta: false },
                            { numero: 2, texto: "...nas montanhas", correta: false },
                            { numero: 3, texto: "...debaixo do céu", correta: true },
                            { numero: 4, texto: "...além das nuvens", correta: false }
                        ],
                        explicacao: "Eclesiastes 3:1 - Tudo tem o seu tempo determinado, e há tempo para todo o propósito debaixo do céu.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Deus pôs no coração do homem, segundo Eclesiastes 3:11?",
                        opcoes: [
                            { numero: 1, texto: "O desejo de guerra", correta: false },
                            { numero: 2, texto: "A eternidade", correta: true },
                            { numero: 3, texto: "A ganância pura", correta: false },
                            { numero: 4, texto: "O medo do futuro", correta: false }
                        ],
                        explicacao: "Eclesiastes 3:11 - Tudo fez formoso em seu tempo; também pôs a eternidade no coração deles.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "De onde veio o homem e para onde ele voltará?",
                        opcoes: [
                            { numero: 1, texto: "Veio das águas e voltará ao mar", correta: false },
                            { numero: 2, texto: "Veio do nada e para o nada irá", correta: false },
                            { numero: 3, texto: "Veio do pó e ao pó voltará", correta: true },
                            { numero: 4, texto: "Veio das estrelas e para lá voltará", correta: false }
                        ],
                        explicacao: "Eclesiastes 3:20 - Todos vão para um lugar; todos foram feitos do pó, e todos voltarão ao pó.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "A Vaidade do Esforço Solitário",
            texto: ` ¹ Depois voltei-me, e atentei para todas as opressões que se fazem debaixo do sol; e eis que vi as lágrimas dos que foram oprimidos e dos que não têm consolador, e a força estava do lado dos seus opressores; mas eles não tinham consolador.
² Por isso eu louvei os que já morreram, mais do que os que vivem ainda.
³ E melhor que uns e outros é aquele que ainda não é; que não viu as más obras que se fazem debaixo do sol.
⁴ Também vi eu que todo o trabalho, e toda a destreza em obras, traz ao homem a inveja do seu próximo. Também isto é vaidade e aflição de espírito.
⁵ O tolo cruza as suas mãos, e come a sua própria carne.
⁶ Melhor é a mão cheia com descanso do que ambas as mãos cheias com trabalho, e aflição de espírito.
⁷ Outra vez me voltei, e vi vaidade debaixo do sol.
⁸ Há um que é só, e não tem ninguém, nem tampouco filho nem irmão; e contudo não cessa do seu trabalho, e também seus olhos não se satisfazem com riqueza; nem diz: Para quem trabalho eu, privando a minha alma do bem? Também isto é vaidade e enfadonha ocupação.
⁹ Melhor é serem dois do que um, porque têm melhor paga do seu trabalho.
¹⁰ Porque se um cair, o outro levanta o seu companheiro; mas ai do que estiver só; pois, caindo, não haverá outro que o levante.
¹¹ Também, se dois dormirem juntos, eles se aquentarão; mas um só, como se aquentará?
¹² E, se alguém prevalecer contra um, os dois lhe resistirão; e o cordão de três dobras não se quebra tão depressa.
¹³ Melhor é a criança pobre e sábia do que o rei velho e insensato, que não se deixa mais admoestar.
¹⁴ Porque um sai do cárcere para reinar; enquanto outro, que nasceu em seu reino, torna-se pobre.
¹⁵ Vi a todos os viventes andarem debaixo do sol com a criança, a sucessora, que ficará no seu lugar.
¹⁶ Não tem fim todo o povo que foi antes dele; tampouco os que lhe sucederem se alegrarão dele. Na verdade que também isto é vaidade e aflição de espírito.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que acontece se dois caírem, em comparação a quem está só?",
                        opcoes: [
                            { numero: 1, texto: "Ambos ficarão no chão", correta: false },
                            { numero: 2, texto: "Eles brigarão entre si", correta: false },
                            { numero: 3, texto: "Um levantará o seu companheiro", correta: true },
                            { numero: 4, texto: "Chamarão por um terceiro", correta: false }
                        ],
                        explicacao: "Eclesiastes 4:10 - Porque se um cair, o outro levanta o seu companheiro; mas ai do que estiver só.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como é descrito o cordão de três dobras?",
                        opcoes: [
                            { numero: 1, texto: "É fácil de arrebentar", correta: false },
                            { numero: 2, texto: "Não se quebra tão depressa", correta: true },
                            { numero: 3, texto: "É pesado demais", correta: false },
                            { numero: 4, texto: "É feito de linho fino", correta: false }
                        ],
                        explicacao: "Eclesiastes 4:12 - E o cordão de três dobras não se quebra tão depressa.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Melhor é a criança pobre e sábia do que quem?",
                        opcoes: [
                            { numero: 1, texto: "O guerreiro sem armas", correta: false },
                            { numero: 2, texto: "O camponês que trabalha muito", correta: false },
                            { numero: 3, texto: "O comerciante desonesto", correta: false },
                            { numero: 4, texto: "O rei velho e insensato que não se deixa admoestar", correta: true }
                        ],
                        explicacao: "Eclesiastes 4:13 - Melhor é a criança pobre e sábia do que o rei velho e insensato, que não se deixa mais admoestar.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "Atitude perante Deus e a Riqueza",
            texto: `¹ Guarda o teu pé, quando entrares na casa de Deus; porque chegar-se para ouvir é melhor do que oferecer sacrifícios de tolos, pois não sabem que fazem mal.
² Não te precipites com a tua boca, nem o teu coração se apresse a pronunciar palavra alguma diante de Deus; porque Deus está nos céus, e tu estás sobre a terra; assim sejam poucas as tuas palavras.
³ Porque, da muita ocupação vêm os sonhos, e a voz do tolo da multidão das palavras.
⁴ Quando a Deus fizeres algum voto, não tardes em cumpri-lo; porque não se agrada de tolos; o que votares, paga-o.
⁵ Melhor é que não votes do que votares e não cumprires.
⁶ Não consintas que a tua boca faça pecar a tua carne, nem digas diante do anjo que foi erro; por que razão se iraria Deus contra a tua voz, e destruiria a obra das tuas mãos?
⁷ Porque, como na multidão dos sonhos há vaidades, assim também nas muitas palavras; mas tu teme a Deus.
⁸ Se vires em alguma província opressão do pobre, e violência do direito e da justiça, não te admires de tal procedimento; pois quem está altamente colocado tem superior que o vigia; e há mais altos do que eles.
⁹ O proveito da terra é para todos; até o rei se serve do campo.
¹⁰ Quem amar o dinheiro jamais dele se fartará; e quem amar a abundância nunca se fartará da renda; também isto é vaidade.
¹¹ Onde os bens se multiplicam, ali se multiplicam também os que deles comem; que mais proveito, pois, têm os seus donos do que os ver com os seus olhos?
¹² Doce é o sono do trabalhador, quer coma pouco quer muito; mas a fartura do rico não o deixa dormir.
¹³ Há um grave mal que vi debaixo do sol, e atrai enfermidades: as riquezas que os seus donos guardam para o seu próprio dano;
¹⁴ Porque as mesmas riquezas se perdem por qualquer má ventura, e havendo algum filho nada lhe fica na sua mão.
¹⁵ Como saiu do ventre de sua mãe, assim nu tornará, indo-se como veio; e nada tomará do seu trabalho, que possa levar na sua mão.
¹⁶ Assim que também isto é um grave mal que, justamente como veio, assim há de ir; e que proveito lhe vem de trabalhar para o vento,
¹⁷ E de haver comido todos os seus dias nas trevas, e de haver padecido muito enfado, e enfermidade, e furor?
¹⁸ Eis aqui o que eu vi, uma boa e bela coisa: comer e beber, e gozar cada um do bem de todo o seu trabalho, em que trabalhou debaixo do sol, todos os dias de vida que Deus lhe deu, porque esta é a sua porção.
¹⁹ E a todo o homem, a quem Deus deu riquezas e bens, e lhe deu poder para delas comer e tomar a sua porção, e gozar do seu trabalho, isto é dom de Deus.
²⁰ Porque não se lembrará muito dos dias da sua vida; porquanto Deus lhe enche de alegria o seu coração. `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que devemos fazer ao entrar na casa de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Gritar bem alto para ser ouvido", correta: false },
                            { numero: 2, texto: "Guardar o pé e estar pronto para ouvir", correta: true },
                            { numero: 3, texto: "Levar muito ouro", correta: false },
                            { numero: 4, texto: "Contar os nossos pecados aos outros", correta: false }
                        ],
                        explicacao: "Eclesiastes 5:1 - Guarda o teu pé, quando entrares na casa de Deus; e aproxima-te mais para ouvir.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontece com quem ama o dinheiro?",
                        opcoes: [
                            { numero: 1, texto: "Nunca se fartará de dinheiro", correta: true },
                            { numero: 2, texto: "Será o mais sábio da terra", correta: false },
                            { numero: 3, texto: "Dormirá tranquilo", correta: false },
                            { numero: 4, texto: "Terá paz eterna", correta: false }
                        ],
                        explicacao: "Eclesiastes 5:10 - Quem amar o dinheiro jamais deles se fartará; e quem amar a abundância nunca terá ganho.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como é descrito o sono do trabalhador?",
                        opcoes: [
                            { numero: 1, texto: "Muito agitado", correta: false },
                            { numero: 2, texto: "Cheio de pesadelos", correta: false },
                            { numero: 3, texto: "Não existe", correta: false },
                            { numero: 4, texto: "É um sono doce, quer coma pouco ou muito", correta: true }
                        ],
                        explicacao: "Eclesiastes 5:12 - Doce é o sono do trabalhador, quer coma pouco quer muito.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "A Vaidade das Riquezas sem Fruição",
            texto: `¹ Há um mal que tenho visto debaixo do sol, e é mui frequente entre os homens:
² Um homem a quem Deus deu riquezas, bens e honra, e nada lhe falta de tudo quanto a sua alma deseja, e Deus não lhe dá poder para daí comer, antes o estranho lho come; também isto é vaidade e má enfermidade.
³ Se o homem gerar cem filhos, e viver muitos anos, e os dias dos seus anos forem muitos, e se a sua alma não se fartar do bem, e além disso não tiver sepultura, digo que um aborto é melhor do que ele.
⁴ Porquanto em vão veio, e em trevas se vai, e de trevas se cobre o seu nome.
⁵ E ainda que nunca viu o sol, nem conheceu nada, mais descanso tem este do que aquele.
⁶ E, ainda que vivesse duas vezes mil anos e não gozasse o bem, não vão todos para um mesmo lugar?
⁷ Todo o trabalho do homem é para a sua boca, e contudo nunca se satisfaz o seu apetite.
⁸ Porque, que mais tem o sábio do que o tolo? E que mais tem o pobre que sabe andar perante os vivos?
⁹ Melhor é a vista dos olhos do que o vaguear da cobiça; também isto é vaidade e aflição de espírito.
¹⁰ Seja qualquer o que for, já o seu nome foi nomeado, e sabe-se que é homem, e que não pode contender com o que é mais forte do que ele.
¹¹ Na verdade que há muitas coisas que multiplicam a vaidade; que mais tem o homem de melhor?
¹² Pois, quem sabe o que é bom nesta vida para o homem, por todos os dias da sua vida de vaidade, os quais gasta como sombra? Quem declarará ao homem o que será depois dele debaixo do sol?
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que acontece com o homem a quem Deus deu riquezas, mas não lhe deu poder para delas comer?",
                        opcoes: [
                            { numero: 1, texto: "Ele as guarda para os seus filhos", correta: false },
                            { numero: 2, texto: "Ele se torna o mais sábio", correta: false },
                            { numero: 3, texto: "Um estranho as come; isto é vaidade e mau mal", correta: true },
                            { numero: 4, texto: "Ele vive mil anos de alegria", correta: false }
                        ],
                        explicacao: "Eclesiastes 6:2 - O homem a quem Deus deu riquezas... mas Deus não lhe dá poder para delas comer, antes o estranho as come; isto é vaidade e má enfermidade.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Segundo o capítulo 6, para onde vai todo o trabalho do homem?",
                        opcoes: [
                            { numero: 1, texto: "Para a sua boca (seu sustento)", correta: true },
                            { numero: 2, texto: "Para o tesouro do rei", correta: false },
                            { numero: 3, texto: "Para a construção de templos", correta: false },
                            { numero: 4, texto: "Para o benefício dos vizinhos", correta: false }
                        ],
                        explicacao: "Eclesiastes 6:7 - Todo o trabalho do homem é para a sua boca, e contudo nunca se enche a sua alma.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Pregador diz sobre o homem que vive muitos anos, mas não se farta do bem?",
                        opcoes: [
                            { numero: 1, texto: "Diz que ele é um exemplo de sucesso", correta: false },
                            { numero: 2, texto: "Diz que ele é mais forte que todos", correta: false },
                            { numero: 3, texto: "Diz que ele terá paz no final", correta: false },
                            { numero: 4, texto: "Diz que um aborto é melhor do que ele", correta: true }
                        ],
                        explicacao: "Eclesiastes 6:3 - Se o homem gerar cem filhos... e a sua alma não se fartar do bem... digo que um aborto é melhor do que ele.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        7: {
            titulo: "Contrastes da Sabedoria",
            texto: `¹ Melhor é a boa fama do que o melhor unguento, e o dia da morte do que o dia do nascimento de alguém.
² Melhor é ir à casa onde há luto do que ir à casa onde há banquete, porque naquela está o fim de todos os homens, e os vivos o aplicam ao seu coração.
³ Melhor é a mágoa do que o riso, porque com a tristeza do rosto se faz melhor o coração.
⁴ O coração dos sábios está na casa do luto, mas o coração dos tolos na casa da alegria.
⁵ Melhor é ouvir a repreensão do sábio, do que ouvir alguém a canção do tolo.
⁶ Porque qual o crepitar dos espinhos debaixo de uma panela, tal é o riso do tolo; também isto é vaidade.
⁷ Verdadeiramente que a opressão faria endoidecer até ao sábio, e o suborno corrompe o coração.
⁸ Melhor é o fim das coisas do que o princípio delas; melhor é o paciente de espírito do que o altivo de espírito.
⁹ Não te apresses no teu espírito a irar-te, porque a ira repousa no íntimo dos tolos.
¹⁰ Nunca digas: Por que foram os dias passados melhores do que estes? Porque não provém da sabedoria esta pergunta.
¹¹ Tão boa é a sabedoria como a herança, e dela tiram proveito os que veem o sol.
¹² Porque a sabedoria serve de defesa, como de defesa serve o dinheiro; mas a excelência do conhecimento é que a sabedoria dá vida ao seu possuidor.
¹³ Atenta para a obra de Deus; porque quem poderá endireitar o que ele fez torto?
¹⁴ No dia da prosperidade goza do bem, mas no dia da adversidade considera; porque também Deus fez a este em oposição àquele, para que o homem nada descubra do que há de vir depois dele.
¹⁵ Tudo isto vi nos dias da minha vaidade: há justo que perece na sua justiça, e há ímpio que prolonga os seus dias na sua maldade.
¹⁶ Não sejas demasiadamente justo, nem demasiadamente sábio; por que te destruirias a ti mesmo?
¹⁷ Não sejas demasiadamente ímpio, nem sejas louco; por que morrerias fora de teu tempo?
¹⁸ Bom é que retenhas isto, e também daquilo não retires a tua mão; porque quem teme a Deus escapa de tudo isso.
¹⁹ A sabedoria fortalece ao sábio, mais do que dez poderosos que haja na cidade.
²⁰ Na verdade que não há homem justo sobre a terra, que faça o bem, e nunca peque.
²¹ Tampouco apliques o teu coração a todas as palavras que se disserem, para que não venhas a ouvir o teu servo amaldiçoar-te.
²² Porque o teu coração também já confessou que muitas vezes tu amaldiçoaste a outros.
²³ Tudo isto provei-o pela sabedoria; eu disse: Sabedoria adquirirei; mas ela ainda estava longe de mim.
²⁴ O que já sucedeu é remoto e profundíssimo; quem o achará?
²⁵ Eu apliquei o meu coração para saber, e inquirir, e buscar a sabedoria e a razão das coisas, e para conhecer que a impiedade é insensatez e que a estultícia é loucura.
²⁶ E eu achei uma coisa mais amarga do que a morte, a mulher cujo coração são redes e laços, e cujas mãos são ataduras; quem for bom diante de Deus escapará dela, mas o pecador virá a ser preso por ela.
²⁷ Vedes aqui, isto achei, diz o pregador, conferindo uma coisa com a outra para achar a razão delas;
²⁸ A qual ainda busca a minha alma, porém ainda não a achei; um homem entre mil achei eu, mas uma mulher entre todas estas não achei.
²⁹ Eis aqui, o que tão somente achei: Que Deus fez ao homem reto, porém eles buscaram muitas astúcias.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que é melhor do que o unguento precioso, segundo o capítulo 7?",
                        opcoes: [
                            { numero: 1, texto: "A prata fina", correta: false },
                            { numero: 2, texto: "O bom nome", correta: true },
                            { numero: 3, texto: "O vinho novo", correta: false },
                            { numero: 4, texto: "A roupa de linho", correta: false }
                        ],
                        explicacao: "Eclesiastes 7:1 - Melhor é o bom nome do que o melhor unguento.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Para onde é melhor ir, segundo o Pregador?",
                        opcoes: [
                            { numero: 1, texto: "À casa do banquete", correta: false },
                            { numero: 2, texto: "Ao palácio real", correta: false },
                            { numero: 3, texto: "À casa do luto", correta: true },
                            { numero: 4, texto: "Ao mercado da cidade", correta: false }
                        ],
                        explicacao: "Eclesiastes 7:2 - Melhor é ir à casa do luto do que ir à casa do banquete, porque naquela está o fim de todos os homens.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que a sabedoria faz ao rosto do homem sábio?",
                        opcoes: [
                            { numero: 1, texto: "Faz o seu rosto brilhar", correta: true },
                            { numero: 2, texto: "O torna assustador", correta: false },
                            { numero: 3, texto: "O torna triste", correta: false },
                            { numero: 4, texto: "Não causa alteração", correta: false }
                        ],
                        explicacao: "Eclesiastes 8:1 - A sabedoria do homem faz brilhar o seu rosto, e a dureza do seu rosto se muda. (Introdução ao tema)",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        8: {
            titulo: "As Injustiças da Vida",
            texto: `¹ Quem é como o sábio? E quem sabe a interpretação das coisas? A sabedoria do homem faz brilhar o seu rosto, e a dureza do seu rosto se muda.
² Eu digo: Observa o mandamento do rei, e isso em consideração ao juramento que fizeste a Deus.
³ Não te apresses a sair da presença dele, nem persistas em alguma coisa má, porque ele faz tudo o que quer.
⁴ Porque a palavra do rei tem poder; e quem lhe dirá: Que fazes?
⁵ Quem guardar o mandamento não experimentará nenhum mal; e o coração do sábio discernirá o tempo e o juízo.
⁶ Porque para todo o propósito há seu tempo e juízo; porquanto a miséria do homem pesa sobre ele.
⁷ Porque não sabe o que há de suceder, e quando há de ser, quem lho dará a entender?
⁸ Nenhum homem há que tenha domínio sobre o espírito, para reter o espírito; nem tampouco tem ele poder sobre o dia da morte; como também não há licença nesta peleja; nem tampouco a impiedade livrará aos ímpios.
⁹ Tudo isto vi quando apliquei o meu coração a toda a obra que se faz debaixo do sol; tempo há em que um homem tem domínio sobre outro homem, para desgraça sua.
¹⁰ Assim também vi os ímpios, quando os sepultavam; e eles entravam, e saíam do lugar santo; e foram esquecidos na cidade, em que assim fizeram; também isso é vaidade.
¹¹ Porquanto não se executa logo o juízo sobre a má obra, por isso o coração dos filhos dos homens está inteiramente disposto para fazer o mal.
¹² Ainda que o pecador faça o mal cem vezes, e os dias se lhe prolonguem, contudo eu sei com certeza que bem sucede aos que temem a Deus, aos que temem diante dele.
¹³ Porém o ímpio não irá bem, e ele não prolongará os seus dias, que são como a sombra; porque ele não teme diante de Deus.
¹⁴ Ainda há outra vaidade que se faz sobre a terra: que há justos a quem sucede segundo as obras dos ímpios, e há ímpios a quem sucede segundo as obras dos justos. Digo que também isto é vaidade.
¹⁵ Então louvei eu a alegria, porquanto para o homem nada há melhor debaixo do sol do que comer, beber e alegrar-se; porque isso o acompanhará no seu trabalho nos dias da sua vida que Deus lhe dá debaixo do sol.
¹⁶ Aplicando eu o meu coração a conhecer a sabedoria, e a ver o trabalho que há sobre a terra (pois há quem nem de dia nem de noite vê o sono nos seus olhos);
¹⁷ Então vi toda a obra de Deus, que o homem não pode perceber, a obra que se faz debaixo do sol; por mais que trabalhe o homem para a descobrir, não a achará; e, ainda que diga o sábio que a conhece, nem por isso a poderá compreender.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que o coração dos filhos dos homens está cheio para fazer o mal?",
                        opcoes: [
                            { numero: 1, texto: "Porque não há leis escritas", correta: false },
                            { numero: 2, texto: "Porque a sentença contra a má obra não se executa logo", correta: true },
                            { numero: 3, texto: "Porque eles são todos ignorantes", correta: false },
                            { numero: 4, texto: "Porque o diabo os obriga", correta: false }
                        ],
                        explicacao: "Eclesiastes 8:11 - Porquanto não se executa logo o juízo sobre a má obra, por isso o coração dos filhos dos homens está inteiramente disposto para fazer o mal.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o homem não pode descobrir, ainda que trabalhe para isso?",
                        opcoes: [
                            { numero: 1, texto: "Como fazer fogo", correta: false },
                            { numero: 2, texto: "A obra que se faz debaixo do sol (os planos de Deus)", correta: true },
                            { numero: 3, texto: "Onde o ouro está escondido", correta: false },
                            { numero: 4, texto: "A distância entre as estrelas", correta: false }
                        ],
                        explicacao: "Eclesiastes 8:17 - Então vi toda a obra de Deus, que o homem não pode alcançar a obra que se faz debaixo do sol.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é a recomendação do Pregador diante da incapacidade de entender tudo?",
                        opcoes: [
                            { numero: 1, texto: "Dormir o tempo todo", correta: false },
                            { numero: 2, texto: "Abandonar a fé", correta: false },
                            { numero: 3, texto: "Que o homem louve a alegria", correta: true },
                            { numero: 4, texto: "Reclamar da vida", correta: false }
                        ],
                        explicacao: "Eclesiastes 8:15 - Por isso louvei eu a alegria, porquanto o homem nenhuma coisa melhor tem debaixo do sol do que comer, beber e alegrar-se.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        9: {
            titulo: "Um Mesmo Sucesso para Todos",
            texto: ` ¹ Deveras todas estas coisas considerei no meu coração, para declarar tudo isto: que os justos, e os sábios, e as suas obras, estão nas mãos de Deus, e também o homem não conhece nem o amor nem o ódio; tudo passa perante ele.
² Tudo sucede igualmente a todos; o mesmo sucede ao justo e ao ímpio, ao bom e ao puro, como ao impuro; assim ao que sacrifica como ao que não sacrifica; assim ao bom como ao pecador; ao que jura como ao que teme o juramento.
³ Este é o mal que há entre tudo quanto se faz debaixo do sol; a todos sucede o mesmo; e que também o coração dos filhos dos homens está cheio de maldade, e que há desvarios no seu coração enquanto vivem, e depois se vão aos mortos.
⁴ Ora, para aquele que está entre os vivos há esperança (porque melhor é o cão vivo do que o leão morto).
⁵ Porque os vivos sabem que hão de morrer, mas os mortos não sabem coisa nenhuma, nem tampouco terão eles recompensa, mas a sua memória fica entregue ao esquecimento.
⁶ Também o seu amor, o seu ódio, e a sua inveja já pereceram, e já não têm parte alguma para sempre, em coisa alguma do que se faz debaixo do sol.
⁷ Vai, pois, come com alegria o teu pão e bebe com coração contente o teu vinho, pois já Deus se agrada das tuas obras.
⁸ Em todo o tempo sejam alvas as tuas roupas, e nunca falte o óleo sobre a tua cabeça.
⁹ Goza a vida com a mulher que amas, todos os dias da tua vida vã, os quais Deus te deu debaixo do sol, todos os dias da tua vaidade; porque esta é a tua porção nesta vida, e no teu trabalho, que tu fizeste debaixo do sol.
¹⁰ Tudo quanto te vier à mão para fazer, faze-o conforme as tuas forças, porque na sepultura, para onde tu vais, não há obra nem projeto, nem conhecimento, nem sabedoria alguma.
¹¹ Voltei-me, e vi debaixo do sol que não é dos ligeiros a carreira, nem dos fortes a batalha, nem tampouco dos sábios o pão, nem tampouco dos prudentes as riquezas, nem tampouco dos entendidos o favor, mas que o tempo e a oportunidade ocorrem a todos.
¹² Que também o homem não sabe o seu tempo; assim como os peixes que se pescam com a rede maligna, e como os passarinhos que se prendem com o laço, assim se enlaçam também os filhos dos homens no mau tempo, quando cai de repente sobre eles.
¹³ Também vi esta sabedoria debaixo do sol, que para mim foi grande:
¹⁴ Houve uma pequena cidade em que havia poucos homens, e veio contra ela um grande rei, e a cercou e levantou contra ela grandes baluartes;
¹⁵ E encontrou-se nela um sábio pobre, que livrou aquela cidade pela sua sabedoria, e ninguém se lembrava daquele pobre homem.
¹⁶ Então disse eu: Melhor é a sabedoria do que a força, ainda que a sabedoria do pobre foi desprezada, e as suas palavras não foram ouvidas.
¹⁷ As palavras dos sábios devem em silêncio ser ouvidas, mais do que o clamor do que domina entre os tolos.
¹⁸ Melhor é a sabedoria do que as armas de guerra, porém um só pecador destrói muitos bens.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que é melhor do que um leão morto?",
                        opcoes: [
                            { numero: 1, texto: "Um elefante forte", correta: false },
                            { numero: 2, texto: "Um cão vivo", correta: true },
                            { numero: 3, texto: "Uma águia veloz", correta: false },
                            { numero: 4, texto: "Um rei poderoso", correta: false }
                        ],
                        explicacao: "Eclesiastes 9:4 - Para aquele que está entre os vivos há esperança; porque melhor é o cão vivo do que o leão morto.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como deve o homem realizar o seu trabalho/obra?",
                        opcoes: [
                            { numero: 1, texto: "Tudo quanto te vier à mão para fazer, faze-o conforme as tuas forças", correta: true },
                            { numero: 2, texto: "Faze o mínimo possível", correta: false },
                            { numero: 3, texto: "Espera que os outros façam por ti", correta: false },
                            { numero: 4, texto: "Faze apenas se te pagarem muito", correta: false }
                        ],
                        explicacao: "Eclesiastes 9:10 - Tudo quanto te vier à mão para fazer, faze-o conforme as tuas forças.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Pregador observou sobre a corrida e a batalha?",
                        opcoes: [
                            { numero: 1, texto: "O mais rápido sempre vence", correta: false },
                            { numero: 2, texto: "O mais forte nunca perde", correta: false },
                            { numero: 3, texto: "Que a carreira não é dos ligeiros nem a batalha dos fortes, mas o tempo e a sorte a todos ocorrem", correta: true },
                            { numero: 4, texto: "Que a vitória depende apenas do treinamento", correta: false }
                        ],
                        explicacao: "Eclesiastes 9:11 - Vi ainda debaixo do sol que não é dos ligeiros a carreira, nem dos fortes a batalha... mas que o tempo e a oportunidade ocorrem a todos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        10: {
            titulo: "A Estultícia e a Sabedoria",
            texto: `¹ Assim como as moscas mortas fazem exalar mau cheiro e inutilizar o unguento do perfumador, assim é, para o famoso em sabedoria e em honra, um pouco de estultícia.
² O coração do sábio está à sua direita, mas o coração do tolo está à sua esquerda.
³ E, até quando o tolo vai pelo caminho, falta-lhe o seu entendimento e diz a todos que é tolo.
⁴ Levantando-se contra ti o espírito do governador, não deixes o teu lugar, porque a submissão é um remédio que aplaca grandes ofensas.
⁵ Ainda há um mal que vi debaixo do sol, como o erro que procede do governador.
⁶ A estultícia está posta em grandes alturas, mas os ricos estão assentados em lugar baixo.
⁷ Vi os servos a cavalo, e os príncipes andando sobre a terra como servos.
⁸ Quem abrir uma cova, nela cairá, e quem romper um muro, uma cobra o morderá.
⁹ Aquele que transporta pedras, será maltratado por elas, e o que racha lenha expõe-se ao perigo.
¹⁰ Se estiver embotado o ferro, e não se afiar o corte, então se deve redobrar a força; mas a sabedoria é excelente para dirigir.
¹¹ Seguramente a serpente morderá antes de estar encantada, e o falador não é melhor.
¹² Nas palavras da boca do sábio há favor, porém os lábios do tolo o devoram.
¹³ O princípio das palavras da sua boca é a estultícia, e o fim do seu falar um desvario péssimo.
¹⁴ O tolo multiplica as palavras, porém, o homem não sabe o que será; e quem lhe fará saber o que será depois dele?
¹⁵ O trabalho dos tolos a cada um deles fatiga, porque não sabem como ir à cidade.
¹⁶ Ai de ti, ó terra, quando teu rei é uma criança, e cujos príncipes comem de manhã.
¹⁷ Bem-aventurada tu, ó terra, quando teu rei é filho dos nobres, e teus príncipes comem a tempo, para se fortalecerem, e não para bebedice.
¹⁸ Por muita preguiça se enfraquece o teto, e pela frouxidão das mãos a casa goteja.
¹⁹ Para rir se fazem banquetes, e o vinho produz alegria, e por tudo o dinheiro responde.
²⁰ Nem ainda no teu pensamento amaldiçoes ao rei, nem tampouco no mais interior da tua recâmara amaldiçoes ao rico; porque as aves dos céus levariam a voz, e os que têm asas dariam notícia do assunto.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que as moscas mortas fazem ao unguento do perfumista?",
                        opcoes: [
                            { numero: 1, texto: "Melhoram o cheiro", correta: false },
                            { numero: 2, texto: "Fazem-no exalar mau cheiro", correta: true },
                            { numero: 3, texto: "Aumentam o seu volume", correta: false },
                            { numero: 4, texto: "Tornam-no mais caro", correta: false }
                        ],
                        explicacao: "Eclesiastes 10:1 - Assim como as moscas mortas fazem exalar mau cheiro e corromper o unguento do perfumista, assim é um pouco de estultícia.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Onde está o coração do sábio e onde está o coração do tolo?",
                        opcoes: [
                            { numero: 1, texto: "Ambos estão no centro", correta: false },
                            { numero: 2, texto: "O do sábio na esquerda, o do tolo na direita", correta: false },
                            { numero: 3, texto: "O do sábio à sua direita, mas o coração do tolo à sua esquerda", correta: true },
                            { numero: 4, texto: "Eles não têm coração", correta: false }
                        ],
                        explicacao: "Eclesiastes 10:2 - O coração do sábio está à sua direita, mas o coração do tolo está à sua esquerda.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontece se o ferro estiver embotado (cego) e não se afiar o gume?",
                        opcoes: [
                            { numero: 1, texto: "Deve-se usar mais força", correta: true },
                            { numero: 2, texto: "Ele cortará melhor", correta: false },
                            { numero: 3, texto: "O trabalho fica mais fácil", correta: false },
                            { numero: 4, texto: "Ele se torna ouro", correta: false }
                        ],
                        explicacao: "Eclesiastes 10:10 - Se estiver embotado o ferro, e não se afiar o gume, então se deve pôr mais força; mas a sabedoria é excelente para dirigir.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        11: {
            titulo: "Incertezas e Investimentos",
            texto: ` ¹ Lança o teu pão sobre as águas, porque depois de muitos dias o acharás.
² Reparte com sete, e ainda até com oito, porque não sabes que mal haverá sobre a terra.
³ Estando as nuvens cheias, derramam a chuva sobre a terra, e caindo a árvore para o sul, ou para o norte, no lugar em que a árvore cair ali ficará.
⁴ Quem observa o vento, nunca semeará, e o que olha para as nuvens nunca segará.
⁵ Assim como tu não sabes qual o caminho do vento, nem como se formam os ossos no ventre da mulher grávida, assim também não sabes as obras de Deus, que faz todas as coisas.
⁶ Pela manhã semeia a tua semente, e à tarde não retires a tua mão, porque tu não sabes qual prosperará, se esta, se aquela, ou se ambas serão igualmente boas.
⁷ Certamente suave é a luz, e agradável é aos olhos ver o sol.
⁸ Porém, se o homem viver muitos anos, e em todos eles se alegrar, também se deve lembrar dos dias das trevas, porque hão de ser muitos. Tudo quanto sucede é vaidade.
⁹ Alegra-te, jovem, na tua mocidade, e recreie-se o teu coração nos dias da tua mocidade, e anda pelos caminhos do teu coração, e pela vista dos teus olhos; sabe, porém, que por todas estas coisas te trará Deus a juízo.
¹⁰ Afasta, pois, a ira do teu coração, e remove da tua carne o mal, porque a adolescência e a juventude são vaidade.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Pregador aconselha a fazer com o teu pão, garantindo que o acharás depois de muitos dias?",
                        opcoes: [
                            { numero: 1, texto: "Guarda-o em um celeiro trancado", correta: false },
                            { numero: 2, texto: "Lança o teu pão sobre as águas", correta: true },
                            { numero: 3, texto: "Esconde-o debaixo da terra", correta: false },
                            { numero: 4, texto: "Troca-o por sementes de uva", correta: false }
                        ],
                        explicacao: "Eclesiastes 11:1 - Lança o teu pão sobre as águas, porque depois de muitos dias o acharás.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontece com aquele que fica apenas observando o vento e as nuvens?",
                        opcoes: [
                            { numero: 1, texto: "Tornar-se-á um grande profeta", correta: false },
                            { numero: 2, texto: "Saberá o momento exato da chuva", correta: false },
                            { numero: 3, texto: "Aprenderá os segredos da natureza", correta: false },
                            { numero: 4, texto: "Quem observa o vento, nunca semeará; e o que olha para as nuvens nunca segará", correta: true }
                        ],
                        explicacao: "Eclesiastes 11:4 - Quem observa o vento, nunca semeará; e o que olha para as nuvens nunca segará.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é o conselho para o jovem em relação à sua juventude?",
                        opcoes: [
                            { numero: 1, texto: "Que evite toda e qualquer diversão", correta: false },
                            { numero: 2, texto: "Que trabalhe dia e noite sem parar", correta: false },
                            { numero: 3, texto: "Alegra-te na tua juventude, mas sabe que Deus te trará a juízo", correta: true },
                            { numero: 4, texto: "Que ignore as consequências de seus atos", correta: false }
                        ],
                        explicacao: "Eclesiastes 11:9 - Alegra-te, jovem, na tua mocidade... mas sabe que por todas estas coisas te trará Deus a juízo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        12: {
            titulo: "O Dever de Todo Homem",
            texto: ` ¹ Lembra-te também do teu Criador nos dias da tua mocidade, antes que venham os maus dias, e cheguem os anos dos quais venhas a dizer: Não tenho neles contentamento;
² Antes que se escureçam o sol, e a luz, e a lua, e as estrelas, e tornem a vir as nuvens depois da chuva;
³ No dia em que tremerem os guardas da casa, e se encurvarem os homens fortes, e cessarem os moedores, por já serem poucos, e se escurecerem os que olham pelas janelas;
⁴ E as portas da rua se fecharem por causa do baixo ruído da moedura, e se levantar à voz das aves, e todas as filhas da música se abaterem.
⁵ Como também quando temerem o que é alto, e houver espantos no caminho, e florescer a amendoeira, e o gafanhoto for um peso, e perecer o apetite; porque o homem se vai à sua casa eterna, e os pranteadores andarão rodeando pela praça;
⁶ Antes que se rompa o cordão de prata, e se quebre o copo de ouro, e se despedace o cântaro junto à fonte, e se quebre a roda junto ao poço,
⁷ E o pó volte à terra, como o era, e o espírito volte a Deus, que o deu.
⁸ Vaidade de vaidades, diz o pregador, tudo é vaidade.
⁹ E, quanto mais sábio foi o pregador, tanto mais ensinou ao povo sabedoria; e atentando, e esquadrinhando, compôs muitos provérbios.
¹⁰ Procurou o pregador achar palavras agradáveis; e escreveu-as com retidão, palavras de verdade.
¹¹ As palavras dos sábios são como aguilhões, e como pregos, bem fixados pelos mestres das assembleias, que nos foram dadas pelo único Pastor.
¹² E, demais disto, filho meu, atenta: não há limite para fazer muitos livros, e muito estudo é enfado da carne.
¹³ De tudo o que se tem ouvido, o fim é: Teme a Deus, e guarda os seus mandamentos; porque isto é o dever de todo o homem.
¹⁴ Porque Deus há de trazer a juízo toda a obra, e até tudo o que está encoberto, quer seja bom, quer seja mau.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quando devemos nos lembrar do nosso Criador?",
                        opcoes: [
                            { numero: 1, texto: "Apenas quando ficarmos velhos", correta: false },
                            { numero: 2, texto: "Nos dias da tua mocidade (juventude)", correta: true },
                            { numero: 3, texto: "Somente no dia da morte", correta: false },
                            { numero: 4, texto: "Quando tivermos muitas riquezas", correta: false }
                        ],
                        explicacao: "Eclesiastes 12:1 - Lembra-te também do teu Criador nos dias da tua mocidade, antes que venham os maus dias.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontece com o pó e com o espírito após a morte?",
                        opcoes: [
                            { numero: 1, texto: "Ambos desaparecem no universo", correta: false },
                            { numero: 2, texto: "O espírito torna-se pó também", correta: false },
                            { numero: 3, texto: "O pó volta à terra e o espírito volta a Deus, que o deu", correta: true },
                            { numero: 4, texto: "O pó vira ouro e o espírito vira luz", correta: false }
                        ],
                        explicacao: "Eclesiastes 12:7 - E o pó volte à terra, como o era, e o espírito volte a Deus, que o deu.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é a conclusão final de todo o discurso em Eclesiastes?",
                        opcoes: [
                            { numero: 1, texto: "Trabalhar para ser o mais rico de todos", correta: false },
                            { numero: 2, texto: "Estudar todos os livros do mundo", correta: false },
                            { numero: 3, texto: "Viver sem regras, pois tudo é vaidade", correta: false },
                            { numero: 4, texto: "Teme a Deus, e guarda os seus mandamentos; porque isto é o dever de todo o homem", correta: true }
                        ],
                        explicacao: "Eclesiastes 12:13 - De tudo o que se tem ouvido, o fim é: Teme a Deus, e guarda os seus mandamentos; porque isto é o dever de todo o homem.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    } // Fecha o objeto 'capitulos'
}; // Fecha o objeto principal 'eclesiastes'