const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const malaquias = {
    nome: "Malaquias",
    icone: "📜",
    autor: "Malaquias",
 //   background: "./imagens/malaquias_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "O Amor de Deus e a Imundícia dos Sacerdotes",
            texto: ` ¹ Peso da palavra do Senhor contra Israel, por intermédio de Malaquias.
² Eu vos tenho amado, diz o Senhor. Mas vós dizeis: Em que nos tens amado? Não era Esaú irmão de Jacó? Disse o Senhor; todavia amei a Jacó,
³ E odiei a Esaú; e fiz dos seus montes uma desolação, e dei a sua herança aos chacais do deserto.
⁴ Ainda que Edom diga: Empobrecidos estamos, porém tornaremos a edificar os lugares desolados; assim diz o Senhor dos Exércitos: Eles edificarão, e eu destruirei; e lhes chamarão: Termo de impiedade, e povo contra quem o Senhor está irado para sempre.
⁵ E os vossos olhos o verão, e direis: O Senhor seja engrandecido além dos termos de Israel.
⁶ O filho honra o pai, e o servo o seu senhor; se eu sou pai, onde está a minha honra? E, se eu sou senhor, onde está o meu temor? Diz o Senhor dos Exércitos a vós, ó sacerdotes, que desprezais o meu nome. E vós dizeis: Em que nós temos desprezado o teu nome?
⁷ Ofereceis sobre o meu altar pão imundo, e dizeis: Em que te havemos profanado? Nisto que dizeis: A mesa do Senhor é desprezível.
⁸ Porque, quando ofereceis animal cego para o sacrifício, isso não é mau? E quando ofereceis o coxo ou enfermo, isso não é mau? Ora apresenta-o ao teu governador; porventura terá ele agrado em ti? Ou aceitará ele a tua pessoa? Diz o Senhor dos Exércitos.
⁹ Agora, pois, eu suplico, pedi a Deus, que ele seja misericordioso conosco; isto veio das vossas mãos; aceitará ele a vossa pessoa? Diz o Senhor dos Exércitos.
¹⁰ Quem há também entre vós que feche as portas por nada, e não acenda em vão o fogo do meu altar? Eu não tenho prazer em vós, diz o Senhor dos Exércitos, nem aceitarei oferta da vossa mão.
¹¹ Mas desde o nascente do sol até ao poente é grande entre os gentios o meu nome; e em todo o lugar se oferecerá ao meu nome incenso, e uma oferta pura; porque o meu nome é grande entre os gentios, diz o Senhor dos Exércitos.
¹² Mas vós o profanais, quando dizeis: A mesa do Senhor é impura, e o seu produto, isto é, a sua comida é desprezível.
¹³ E dizeis ainda: Eis aqui, que canseira! E o lançastes ao desprezo, diz o Senhor dos Exércitos; vós ofereceis o que foi roubado, e o coxo e o enfermo; assim trazeis a oferta. Aceitaria eu isso de vossa mão? Diz o Senhor.
¹⁴ Pois seja maldito o enganador que, tendo macho no seu rebanho, promete e oferece ao Senhor o que tem mácula; porque eu sou grande Rei, diz o Senhor dos Exércitos, o meu nome é temível entre os gentios.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Deus demonstrou a diferença entre Jacó e Esaú no início do capítulo?",
                        opcoes: [
                            { numero: 1, texto: "Deu a ambos a mesma herança", correta: false },
                            { numero: 2, texto: "Amei a Jacó, e odiei a Esaú", correta: true },
                            { numero: 3, texto: "Levou ambos para o Egito", correta: false },
                            { numero: 4, texto: "Engrandecera Esaú sobre as nações", correta: false }
                        ],
                        explicacao: "Malaquias 1:2-3 - ...Eu amei a Jacó, e odiei a Esaú...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que os sacerdotes estavam oferecendo sobre o altar do Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Pão imundo e animais cegos e coxos", correta: true },
                            { numero: 2, texto: "Ouro e incenso puro", correta: false },
                            { numero: 3, texto: "Primícias da colheita de trigo", correta: false },
                            { numero: 4, texto: "Azeite das oliveiras de Judá", correta: false }
                        ],
                        explicacao: "Malaquias 1:7-8 - Ofereceis sobre o meu altar pão imundo... quando ofereceis animal cego para o sacrifício, isso não é mau?",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Desde onde até onde o nome do Senhor será grande entre as nações?",
                        opcoes: [
                            { numero: 1, texto: "Desde o nascente do sol até ao poente", correta: true },
                            { numero: 2, texto: "Apenas dentro dos muros de Jerusalém", correta: false },
                            { numero: 3, texto: "Somente na terra de Canaã", correta: false },
                            { numero: 4, texto: "Do norte ao sul de Israel", correta: false }
                        ],
                        explicacao: "Malaquias 1:11 - Mas desde o nascente do sol até ao poente será grande entre as nações o meu nome...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "Advertência aos Sacerdotes e contra a Infidelidade",
            texto: ` ¹ Agora, ó sacerdotes, este mandamento é para vós.
² Se não ouvirdes e se não propuserdes, no vosso coração, dar honra ao meu nome, diz o Senhor dos Exércitos, enviarei a maldição contra vós, e amaldiçoarei as vossas bênçãos; e também já as tenho amaldiçoado, porque não aplicais a isso o coração.
³ Eis que reprovarei a vossa semente, e espalharei esterco sobre os vossos rostos, o esterco das vossas festas solenes; e para junto deste sereis levados.
⁴ Então sabereis que eu vos enviei este mandamento, para que a minha aliança fosse com Levi, diz o Senhor dos Exércitos.
⁵ Minha aliança com ele foi de vida e de paz, e eu lhas dei para que temesse; então temeu-me, e assombrou-se por causa do meu nome.
⁶ A lei da verdade esteve na sua boca, e a iniquidade não se achou nos seus lábios; andou comigo em paz e em retidão, e da iniquidade converteu a muitos.
⁷ Porque os lábios do sacerdote devem guardar o conhecimento, e da sua boca devem os homens buscar a lei porque ele é o mensageiro do Senhor dos Exércitos.
⁸ Mas vós vos desviastes do caminho; a muitos fizestes tropeçar na lei; corrompestes a aliança de Levi, diz o Senhor dos Exércitos.
⁹ Por isso também eu vos fiz desprezíveis, e indignos diante de todo o povo, visto que não guardastes os meus caminhos, mas fizestes acepção de pessoas na lei.
¹⁰ Não temos nós todos um mesmo Pai? Não nos criou um mesmo Deus? Por que agimos aleivosamente cada um contra seu irmão, profanando a aliança de nossos pais?
¹¹ Judá tem sido desleal, e abominação se cometeu em Israel e em Jerusalém; porque Judá profanou o santuário do Senhor, o qual ele ama, e se casou com a filha de deus estranho.
¹² O Senhor destruirá das tendas de Jacó o homem que fizer isto, o que vela, e o que responde, e o que apresenta uma oferta ao Senhor dos Exércitos.
¹³ Ainda fazeis isto outra vez, cobrindo o altar do Senhor de lágrimas, com choro e com gemidos; de sorte que ele não olha mais para a oferta, nem a aceitará com prazer da vossa mão.
¹⁴ E dizeis: Por quê? Porque o Senhor foi testemunha entre ti e a mulher da tua mocidade, com a qual tu foste desleal, sendo ela a tua companheira, e a mulher da tua aliança.
¹⁵ E não fez ele somente um, ainda que lhe sobrava o espírito? E por que somente um? Ele buscava uma descendência para Deus. Portanto guardai-vos em vosso espírito, e ninguém seja infiel para com a mulher da sua mocidade.
¹⁶ Porque o Senhor, o Deus de Israel diz que odeia o repúdio, e aquele que encobre a violência com a sua roupa, diz o Senhor dos Exércitos; portanto guardai-vos em vosso espírito, e não sejais desleais.
¹⁷ Enfadais ao Senhor com vossas palavras; e ainda dizeis: Em que o enfadamos? Nisto que dizeis: Qualquer que faz o mal passa por bom aos olhos do Senhor, e desses é que ele se agrada, ou, onde está o Deus do juízo?
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor lançaria sobre o rosto dos sacerdotes se eles não ouvissem?",
                        opcoes: [
                            { numero: 1, texto: "Água pura", correta: false },
                            { numero: 2, texto: "O esterco das suas festas", correta: true },
                            { numero: 3, texto: "Cinzas do altar", correta: false },
                            { numero: 4, texto: "Um véu de escuridão", correta: false }
                        ],
                        explicacao: "Malaquias 2:3 - ...espalharei esterco sobre os vossos rostos, o esterco das vossas festas...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que deve ser guardado nos lábios do sacerdote?",
                        opcoes: [
                            { numero: 1, texto: "O conhecimento", correta: true },
                            { numero: 2, texto: "O silêncio", correta: false },
                            { numero: 3, texto: "A canção de louvor", correta: false },
                            { numero: 4, texto: "O vinho do sacrifício", correta: false }
                        ],
                        explicacao: "Malaquias 2:7 - Porque os lábios do sacerdote devem guardar o conhecimento...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é o sentimento do Senhor em relação ao divórcio (repúdio)?",
                        opcoes: [
                            { numero: 1, texto: "Ele o permite sem restrições", correta: false },
                            { numero: 2, texto: "Ele não se importa com isso", correta: false },
                            { numero: 3, texto: "Ele o odeia", correta: true },
                            { numero: 4, texto: "Ele o incentiva em tempos de crise", correta: false }
                        ],
                        explicacao: "Malaquias 2:16 - Porque o Senhor, Deus de Israel diz que odeia o repúdio...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "O Mensageiro do Senhor e os Dízimos",
            texto: ` ¹ Eis que eu envio o meu mensageiro, que preparará o caminho diante de mim; e de repente virá ao seu templo o Senhor, a quem vós buscais; e o mensageiro da aliança, a quem vós desejais, eis que ele vem, diz o Senhor dos Exércitos.
² Mas quem suportará o dia da sua vinda? E quem subsistirá, quando ele aparecer? Porque ele será como o fogo do ourives e como o sabão dos lavandeiros.
³ E assentar-se-á como fundidor e purificador de prata; e purificará os filhos de Levi, e os refinará como ouro e como prata; então ao Senhor trarão oferta em justiça.
⁴ E a oferta de Judá e de Jerusalém será agradável ao Senhor, como nos dias antigos, e como nos primeiros anos.
⁵ E chegar-me-ei a vós para juízo; e serei uma testemunha veloz contra os feiticeiros, contra os adúlteros, contra os que juram falsamente, contra os que defraudam o diarista em seu salário, e a viúva, e o órfão, e que pervertem o direito do estrangeiro, e não me temem, diz o Senhor dos Exércitos.
⁶ Porque eu, o Senhor, não mudo; por isso vós, ó filhos de Jacó, não sois consumidos.
⁷ Desde os dias de vossos pais vos desviastes dos meus estatutos, e não os guardastes; tornai-vos para mim, e eu me tornarei para vós, diz o Senhor dos Exércitos; mas vós dizeis: Em que havemos de tornar?
⁸ Roubará o homem a Deus? Todavia vós me roubais, e dizeis: Em que te roubamos? Nos dízimos e nas ofertas.
⁹ Com maldição sois amaldiçoados, porque a mim me roubais, sim, toda esta nação.
¹⁰ Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha casa, e depois fazei prova de mim nisto, diz o Senhor dos Exércitos, se eu não vos abrir as janelas do céu, e não derramar sobre vós uma bênção tal até que não haja lugar suficiente para a recolherdes.
¹¹ E por causa de vós repreenderei o devorador, e ele não destruirá os frutos da vossa terra; e a vossa vide no campo não será estéril, diz o Senhor dos Exércitos.
¹² E todas as nações vos chamarão bem-aventurados; porque vós sereis uma terra deleitosa, diz o Senhor dos Exércitos.
¹³ As vossas palavras foram agressivas para mim, diz o Senhor; mas vós dizeis: Que temos falado contra ti?
¹⁴ Vós tendes dito: Inútil é servir a Deus; que nos aproveita termos cuidado em guardar os seus preceitos, e em andar de luto diante do Senhor dos Exércitos?
¹⁵ Ora, pois, nós reputamos por bem-aventurados os soberbos; também os que cometem impiedade são edificados; sim, eles tentam a Deus, e escapam.
¹⁶ Então aqueles que temeram ao Senhor falaram frequentemente um ao outro; e o Senhor atentou e ouviu; e um memorial foi escrito diante dele, para os que temeram o Senhor, e para os que se lembraram do seu nome.
¹⁷ E eles serão meus, diz o Senhor dos Exércitos; naquele dia serão para mim joias; poupá-los-ei, como um homem poupa a seu filho, que o serve.
¹⁸ Então voltareis e vereis a diferença entre o justo e o ímpio; entre o que serve a Deus, e o que não o serve.`,
            get pergunta() {
                return sortear([
                 
                    {
                        texto: "Segundo o contexto geral de Malaquias, quem estava roubando a Deus?",
                        opcoes: [
                            { numero: 1, texto: "Os dizimistas", correta: false },
                            { numero: 2, texto: "As viúvas", correta: false },
                            { numero: 3, texto: "Os líderes religiosos", correta: true },
                            { numero: 4, texto: "Os ofertantes", correta: false }
                        ],
                        explicacao: "No contexto de todo o livro de Malaquias, Deus repreende o povo de Israel por negligenciar os dízimos e ofertas, destacando a corrupção dos líderes religiosos. ",
                        pontosGanhos: 20
                    },
                 
                ]);
            }
        },
        4: {
            titulo: "O Dia do Senhor e o Advento de Elias",
            texto: ` `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como arderá o dia que vem, segundo o versículo 1?",
                        opcoes: [
                            { numero: 1, texto: "Como um forno", correta: true },
                            { numero: 2, texto: "Como uma lâmpada", correta: false },
                            { numero: 3, texto: "Como o sol do meio-dia", correta: false },
                            { numero: 4, texto: "Como um pequeno pavio", correta: false }
                        ],
                        explicacao: "Malaquias 4:1 - Porque eis que aquele dia vem ardendo como um forno...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Para os que temem o nome do Senhor, o que nascerá?",
                        opcoes: [
                            { numero: 1, texto: "Uma tempestade de areia", correta: false },
                            { numero: 2, texto: "A lua cheia", correta: false },
                            { numero: 3, texto: "O sol da justiça", correta: true },
                            { numero: 4, texto: "Uma nova estrela", correta: false }
                        ],
                        explicacao: "Malaquias 4:2 - Mas para vós, os que temeis o meu nome, nascerá o sol da justiça...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem o Senhor prometeu enviar antes que venha o grande e terrível dia?",
                        opcoes: [
                            { numero: 1, texto: "O profeta Moisés", correta: false },
                            { numero: 2, texto: "O profeta Elias", correta: true },
                            { numero: 3, texto: "O rei Josias", correta: false },
                            { numero: 4, texto: "O anjo Gabriel", correta: false }
                        ],
                        explicacao: "Malaquias 4:5 - Eis que eu vos enviarei o profeta Elias, antes que venha o grande e terrível dia do Senhor.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};