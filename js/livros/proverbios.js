// js/livros/proverbios.js

const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const proverbios = {
    nome: "Provérbios",
    icone: "📜",
    autor: "Salomão",
 //   background: "./imagens/proverbios_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
        titulo: "O Início da Sabedoria",
        texto: `¹ Provérbios de Salomão, filho de Davi, rei de Israel;
² Para se conhecer a sabedoria e a instrução; para se entenderem, as palavras da prudência.
³ Para se receber a instrução do entendimento, a justiça, o juízo e a equidade;
⁴ Para dar aos simples, prudência, e aos moços, conhecimento e discernimento;
⁵ O sábio ouvirá e crescerá em conhecimento, e o entendido adquirirá sábios conselhos;
⁶ Para entender os provérbios e sua interpretação; as palavras dos sábios e as suas proposições.
⁷ O temor do Senhor é o princípio do conhecimento; os loucos desprezam a sabedoria e a instrução.
⁸ Filho meu, ouve a instrução de teu pai, e não deixes o ensinamento de tua mãe,
⁹ Porque serão como diadema gracioso em tua cabeça, e colares ao teu pescoço.
¹⁰ Filho meu, se os pecadores procuram te atrair com agrados, não aceites.
¹¹ Se disserem: Vem conosco a tocaias de sangue; embosquemos o inocente sem motivo;
¹² Traguemo-los vivos, como a sepultura; e inteiros, como os que descem à cova;
¹³ Acharemos toda sorte de bens preciosos; encheremos as nossas casas de despojos;
¹⁴ Lança a tua sorte conosco; teremos todos uma só bolsa!
¹⁵ Filho meu, não te ponhas a caminho com eles; desvia o teu pé das suas veredas;
¹⁶ Porque os seus pés correm para o mal, e se apressam a derramar sangue.
¹⁷ Na verdade é inútil estender-se a rede ante os olhos de qualquer ave.
¹⁸ No entanto estes armam ciladas contra o seu próprio sangue; e espreitam suas próprias vidas.
¹⁹ São assim as veredas de todo aquele que usa de cobiça: ela põe a perder a alma dos que a possuem.
²⁰ A sabedoria clama lá fora; pelas ruas levanta a sua voz.
²¹ Nas esquinas movimentadas ela brada; nas entradas das portas e nas cidades profere as suas palavras:
²² Até quando, ó simples, amareis a simplicidade? E vós escarnecedores, desejareis o escárnio? E vós insensatos, odiareis o conhecimento?
²³ Atentai para a minha repreensão; pois eis que vos derramarei abundantemente do meu espírito e vos farei saber as minhas palavras.
²⁴ Entretanto, porque eu clamei e recusastes; e estendi a minha mão e não houve quem desse atenção,
²⁵ Antes rejeitastes todo o meu conselho, e não quisestes a minha repreensão,
²⁶ Também de minha parte eu me rirei na vossa perdição e zombarei, em vindo o vosso temor.
²⁷ Vindo o vosso temor como a assolação, e vindo a vossa perdição como uma tormenta, sobrevirá a vós aperto e angústia.
²⁸ Então clamarão a mim, mas eu não responderei; de madrugada me buscarão, porém não me acharão.
²⁹ Porquanto odiaram o conhecimento; e não preferiram o temor do Senhor:
³⁰ Não aceitaram o meu conselho, e desprezaram toda a minha repreensão.
³¹ Portanto comerão do fruto do seu caminho, e fartar-se-ão dos seus próprios conselhos.
³² Porque o erro dos simples os matará, e o desvario dos insensatos os destruirá.
³³ Mas o que me der ouvidos habitará em segurança, e estará livre do temor do mal.

     `,
        get pergunta() {
            return sortear([
                {
                    texto: "Segundo Provérbios 1, o que os loucos desprezam?",
                    opcoes: [
                        { numero: 1, texto: "A riqueza e o ouro", correta: false },
                        { numero: 2, texto: "A sabedoria e a instrução", correta: true },
                        { numero: 3, texto: "A fama e o poder", correta: false },
                        { numero: 4, texto: "Os prazeres da vida", correta: false }
                    ],
                    explicacao: "Provérbios 1:7 - O temor do Senhor é o princípio do saber; os loucos desprezam a sabedoria e a instrução.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que acontece se aceitarmos o convite dos pecadores para derramar sangue inocente?",
                    opcoes: [
                        { numero: 1, texto: "Ficaremos ricos para sempre", correta: false },
                        { numero: 2, texto: "Seremos protegidos pelo grupo", correta: false },
                        { numero: 3, texto: "Eles armam ciladas contra o seu próprio sangue", correta: true },
                        { numero: 4, texto: "Alcançaremos autoridade", correta: false }
                    ],
                    explicacao: "Provérbios 1:18 - Mas estes armam ciladas contra o seu próprio sangue; e as suas próprias vidas espreitam.",
                    pontosGanhos: 20
                },
                {
                    texto: "Onde a sabedoria clama e levanta a sua voz?",
                    opcoes: [
                        { numero: 1, texto: "Nas praças e no topo das muralhas", correta: true },
                        { numero: 2, texto: "Apenas dentro do templo", correta: false },
                        { numero: 3, texto: "Somente nos palácios reais", correta: false },
                        { numero: 4, texto: "No fundo dos desertos", correta: false }
                    ],
                    explicacao: "Provérbios 1:20-21 - A suprema sabedoria altissonante clama nas ruas; nas praças levanta a sua voz.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    2: {
        titulo: "Excelência da Sabedoria",
        texto: `¹ Filho meu, se aceitares as minhas palavras, e esconderes contigo os meus mandamentos,
² Para fazeres o teu ouvido atento à sabedoria; e inclinares o teu coração ao entendimento;
³ Se clamares por conhecimento, e por inteligência alçares a tua voz,
⁴ Se como a prata a buscares e como a tesouros escondidos a procurares,
⁵ Então entenderás o temor do Senhor, e acharás o conhecimento de Deus.
⁶ Porque o Senhor dá a sabedoria; da sua boca é que vem o conhecimento e o entendimento.
⁷ Ele reserva a verdadeira sabedoria para os retos. Escudo é para os que caminham na sinceridade,
⁸ Para que guardem as veredas do juízo. Ele preservará o caminho dos seus santos.
⁹ Então entenderás a justiça, o juízo, a equidade e todas as boas veredas.
¹⁰ Pois quando a sabedoria entrar no teu coração, e o conhecimento for agradável à tua alma,
¹¹ O discernimento te guardará e a inteligência te conservará;
¹² Para te afastar do mau caminho, e do homem que fala coisas perversas;
¹³ Dos que deixam as veredas da retidão, para andarem pelos caminhos escusos;
¹⁴ Que se alegram de fazer mal, e folgam com as perversidades dos maus,
¹⁵ Cujas veredas são tortuosas e que se desviam nos seus caminhos;
¹⁶ Para te afastar da mulher estranha, sim da estranha que lisonjeia com suas palavras;
¹⁷ Que deixa o guia da sua mocidade e se esquece da aliança do seu Deus;
¹⁸ Porque a sua casa se inclina para a morte, e as suas veredas para os mortos.
¹⁹ Todos os que se dirigem a ela não voltarão e não atinarão com as veredas da vida.
²⁰ Para andares pelos caminhos dos bons, e te conservares nas veredas dos justos.
²¹ Porque os retos habitarão a terra, e os íntegros permanecerão nela.
²² Mas os ímpios serão arrancados da terra, e os transgressores serão dela exterminados.

 `,
        get pergunta() {
            return sortear([
                {
                    texto: "Se buscares a sabedoria como a prata e como tesouros escondidos, o que entenderás?",
                    opcoes: [
                        { numero: 1, texto: "A arte da guerra", correta: false },
                        { numero: 2, texto: "Como ganhar dinheiro", correta: false },
                        { numero: 3, texto: "O temor do Senhor e o conhecimento de Deus", correta: true },
                        { numero: 4, texto: "Os segredos das estrelas", correta: false }
                    ],
                    explicacao: "Provérbios 2:4-5 - Se a buscares como a prata e a procurares como a tesouros escondidos, então entenderás o temor do Senhor.",
                    pontosGanhos: 20
                },
                {
                    texto: "O Senhor é um escudo para quem?",
                    opcoes: [
                        { numero: 1, texto: "Para os que caminham na sinceridade (íntegros)", correta: true },
                        { numero: 2, texto: "Para os que têm muitos cavalos", correta: false },
                        { numero: 3, texto: "Para os mais fortes da cidade", correta: false },
                        { numero: 4, texto: "Para os que moram em fortalezas", correta: false }
                    ],
                    explicacao: "Provérbios 2:7 - Ele reserva a verdadeira sabedoria para os retos. É escudo para os que caminham na sinceridade.",
                    pontosGanhos: 20
                },
                {
                    texto: "Do que a sabedoria te livrará, segundo o capítulo 2?",
                    opcoes: [
                        { numero: 1, texto: "Das dívidas financeiras", correta: false },
                        { numero: 2, texto: "Do mau caminho e do homem que fala coisas perversas", correta: true },
                        { numero: 3, texto: "Do cansaço físico", correta: false },
                        { numero: 4, texto: "Da chuva e da tempestade", correta: false }
                    ],
                    explicacao: "Provérbios 2:12 - Para te livrar do mau caminho, e do homem que fala coisas perversas.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    3: {
        titulo: "Exortação à Obediência",
        texto: ` ¹ Filho meu, não te esqueças da minha lei, e o teu coração guarde os meus mandamentos.
² Porque eles aumentarão os teus dias e te acrescentarão anos de vida e paz.
³ Não te desamparem a benignidade e a fidelidade; ata-as ao teu pescoço; escreve-as na tábua do teu coração.
⁴ E acharás graça e bom entendimento aos olhos de Deus e do homem.
⁵ Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento.
⁶ Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.
⁷ Não sejas sábio a teus próprios olhos; teme ao Senhor e aparta-te do mal.
⁸ Isto será saúde para o teu âmago, e medula para os teus ossos.
⁹ Honra ao Senhor com os teus bens, e com a primeira parte de todos os teus ganhos;
¹⁰ E se encherão os teus celeiros, e transbordarão de vinho os teus lagares.
¹¹ Filho meu, não rejeites a correção do Senhor, nem te enojes da sua repreensão.
¹² Porque o Senhor repreende aquele a quem ama, assim como o pai ao filho a quem quer bem.
¹³ Bem-aventurado o homem que acha sabedoria, e o homem que adquire conhecimento;
¹⁴ Porque é melhor a sua mercadoria do que artigos de prata, e maior o seu lucro que o ouro mais fino.
¹⁵ Mais preciosa é do que os rubis, e tudo o que mais possas desejar não se pode comparar a ela.
¹⁶ Vida longa de dias está na sua mão direita; e na esquerda, riquezas e honra.
¹⁷ Os seus caminhos são caminhos de delícias, e todas as suas veredas de paz.
¹⁸ É árvore de vida para os que dela tomam, e são bem-aventurados todos os que a retêm.
¹⁹ O Senhor, com sabedoria fundou a terra; com entendimento preparou os céus.
²⁰ Pelo seu conhecimento se fenderam os abismos, e as nuvens destilam o orvalho.
²¹ Filho meu, não se apartem estas coisas dos teus olhos: guarda a verdadeira sabedoria e o discernimento;
²² Porque serão vida para a tua alma, e adorno ao teu pescoço.
²³ Então andarás confiante pelo teu caminho, e o teu pé não tropeçará.
²⁴ Quando te deitares, não temerás; ao contrário, o teu sono será suave ao te deitares.
²⁵ Não temas o pavor repentino, nem a investida dos perversos quando vier.
²⁶ Porque o Senhor será a tua esperança; guardará os teus pés de serem capturados.
²⁷ Não deixes de fazer bem a quem o merece, estando em tuas mãos a capacidade de fazê-lo.
²⁸ Não digas ao teu próximo: Vai, e volta amanhã que to darei, se já o tens contigo.
²⁹ Não maquines o mal contra o teu próximo, pois que habita contigo confiadamente.
³⁰ Não contendas com alguém sem causa, se não te fez nenhum mal.
³¹ Não tenhas inveja do homem violento, nem escolhas nenhum dos seus caminhos.
³² Porque o perverso é abominável ao Senhor, mas com os sinceros ele tem intimidade.
³³ A maldição do Senhor habita na casa do ímpio, mas a habitação dos justos abençoará.
³⁴ Certamente ele escarnecerá dos escarnecedores, mas dará graça aos mansos.
³⁵ Os sábios herdarão honra, mas os loucos tomam sobre si vergonha.
`,
        get pergunta() {
            return sortear([
                {
                    texto: "O que não devemos fazer em relação ao nosso próprio entendimento?",
                    opcoes: [
                        { numero: 1, texto: "Devemos usá-lo acima de tudo", correta: false },
                        { numero: 2, texto: "Devemos ignorá-lo completamente", correta: false },
                        { numero: 3, texto: "Não te estribes (não te apoies) no teu próprio entendimento", correta: true },
                        { numero: 4, texto: "Devemos ensiná-lo a todos", correta: false }
                    ],
                    explicacao: "Provérbios 3:5 - Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que o Senhor faz com aquele a quem Ele ama?",
                    opcoes: [
                        { numero: 1, texto: "O repreende, assim como o pai ao filho", correta: true },
                        { numero: 2, texto: "Dá-lhe apenas riquezas", correta: false },
                        { numero: 3, texto: "Nunca permite que ele sofra", correta: false },
                        { numero: 4, texto: "O torna o homem mais famoso", correta: false }
                    ],
                    explicacao: "Provérbios 3:12 - Porque o Senhor repreende aquele a quem ama, assim como o pai ao filho a quem quer bem.",
                    pontosGanhos: 20
                },
                {
                    texto: "A sabedoria é descrita como qual tipo de árvore para quem a alcança?",
                    opcoes: [
                        { numero: 1, texto: "Árvore de espinhos", correta: false },
                        { numero: 2, texto: "Árvore de carvalho", correta: false },
                        { numero: 3, texto: "Árvore de cedro", correta: false },
                        { numero: 4, texto: "Árvore de vida", correta: true }
                    ],
                    explicacao: "Provérbios 3:18 - É árvore de vida para os que dela lançam mão, e bem-aventurados são todos os que a retêm.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    4: {
        titulo: "O Caminho do Sábio",
        texto: ` ¹ Ouvi, filhos, a instrução do pai, e estai atentos para conhecerdes a prudência.
² Pois dou-vos boa doutrina; não deixeis a minha lei.
³ Porque eu era filho tenro na companhia de meu pai, e único diante de minha mãe.
⁴ E ele me ensinava e me dizia: Retenha o teu coração as minhas palavras; guarda os meus mandamentos, e vive.
⁵ Adquire sabedoria, adquire inteligência, e não te esqueças nem te apartes das palavras da minha boca.
⁶ Não a abandones e ela te guardará; ama-a, e ela te protegerá.
⁷ A sabedoria é a coisa principal; adquire pois a sabedoria, emprega tudo o que possuis na aquisição de entendimento.
⁸ Exalta-a, e ela te exaltará; e, abraçando-a tu, ela te honrará.
⁹ Dará à tua cabeça um diadema de graça e uma coroa de glória te entregará.
¹⁰ Ouve, filho meu, e aceita as minhas palavras, e se multiplicarão os anos da tua vida.
¹¹ No caminho da sabedoria te ensinei, e por veredas de retidão te fiz andar.
¹² Por elas andando, não se embaraçarão os teus passos; e se correres não tropeçarás.
¹³ Apega-te à instrução e não a largues; guarda-a, porque ela é a tua vida.
¹⁴ Não entres pela vereda dos ímpios, nem andes no caminho dos maus.
¹⁵ Evita-o; não passes por ele; desvia-te dele e passa de largo.
¹⁶ Pois não dormem, se não fizerem mal, e foge deles o sono se não fizerem alguém tropeçar.
¹⁷ Porque comem o pão da impiedade, e bebem o vinho da violência.
¹⁸ Mas a vereda dos justos é como a luz da aurora, que vai brilhando mais e mais até ser dia perfeito.
¹⁹ O caminho dos ímpios é como a escuridão; nem sabem em que tropeçam.
²⁰ Filho meu, atenta para as minhas palavras; às minhas razões inclina o teu ouvido.
²¹ Não as deixes apartar-se dos teus olhos; guarda-as no íntimo do teu coração.
²² Porque são vida para os que as acham, e saúde para todo o seu corpo.
²³ Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida.
²⁴ Desvia de ti a falsidade da boca, e afasta de ti a perversidade dos lábios.
²⁵ Os teus olhos olhem para a frente, e as tuas pálpebras olhem direto diante de ti.
²⁶ Pondera a vereda de teus pés, e todos os teus caminhos sejam bem ordenados!
²⁷ Não declines nem para a direita nem para a esquerda; retira o teu pé do mal.
`,
        get pergunta() {
            return sortear([
                {
                    texto: "Qual é a principal coisa que devemos adquirir, segundo o capítulo 4?",
                    opcoes: [
                        { numero: 1, texto: "A sabedoria", correta: true },
                        { numero: 2, texto: "Terras e propriedades", correta: false },
                        { numero: 3, texto: "Amigos influentes", correta: false },
                        { numero: 4, texto: "Armas de guerra", correta: false }
                    ],
                    explicacao: "Provérbios 4:7 - A sabedoria é a coisa principal; adquire, pois, a sabedoria.",
                    pontosGanhos: 20
                },
                {
                    texto: "Como é a vereda (caminho) dos justos?",
                    opcoes: [
                        { numero: 1, texto: "Como um abismo escuro", correta: false },
                        { numero: 2, texto: "Como a luz da aurora, que vai brilhando mais e mais", correta: true },
                        { numero: 3, texto: "Como uma estrada cheia de pedras", correta: false },
                        { numero: 4, texto: "Como a neblina que logo passa", correta: false }
                    ],
                    explicacao: "Provérbios 4:18 - Mas a vereda dos justos é como a luz da aurora, que vai brilhando mais e mais até ser dia perfeito.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que o salmista diz sobre não desviar nem para a direita nem para a esquerda?",
                    opcoes: [
                        { numero: 1, texto: "Não vires nem para a direita nem para a esquerda; retira o teu pé do mal", correta: true },
                        { numero: 2, texto: "Sempre escolha o caminho da direita", correta: false },
                        { numero: 3, texto: "Mude de direção sempre que quiser", correta: false },
                        { numero: 4, texto: "Corra sem olhar para os lados", correta: false }
                    ],
                    explicacao: "Provérbios 4:27 - Não declines nem para a direita nem para a esquerda; retira o teu pé do mal.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    5: {
        titulo: "Aviso contra a Imoralidade",
        texto: ` ¹ Filho meu, atende à minha sabedoria; à minha inteligência inclina o teu ouvido;
² Para que guardes os meus conselhos e os teus lábios observem o conhecimento.
³ Porque os lábios da mulher estranha destilam favos de mel, e o seu paladar é mais suave do que o azeite.
⁴ Mas o seu fim é amargoso como o absinto, agudo como a espada de dois gumes.
⁵ Os seus pés descem para a morte; os seus passos estão impregnados do inferno.
⁶ Para que não ponderes os caminhos da vida, as suas andanças são errantes: jamais os conhecerás.
⁷ Agora, pois, filhos, dai-me ouvidos, e não vos desvieis das palavras da minha boca.
⁸ Longe dela seja o teu caminho, e não te chegues à porta da sua casa;
⁹ Para que não dês a outros a tua honra, e não entregues a cruéis os teus anos de vida;
¹⁰ Para que não farte a estranhos o teu esforço, e todo o fruto do teu trabalho vá parar em casa alheia;
¹¹ E no fim venhas a gemer, no consumir-se da tua carne e do teu corpo.
¹² E então digas: Como odiei a correção! E o meu coração desprezou a repreensão!
¹³ E não escutei a voz dos que me ensinavam, nem aos meus mestres inclinei o meu ouvido!
¹⁴ No meio da congregação e da assembleia foi que eu me achei em quase todo o mal.
¹⁵ Bebe água da tua fonte, e das correntes do teu poço.
¹⁶ Derramar-se-iam as tuas fontes por fora, e pelas ruas os ribeiros de águas?
¹⁷ Sejam para ti só, e não para os estranhos contigo.
¹⁸ Seja bendito o teu manancial, e alegra-te com a mulher da tua mocidade.
¹⁹ Como cerva amorosa, e gazela graciosa, os seus seios te saciem todo o tempo; e pelo seu amor sejas atraído perpetuamente.
²⁰ E por que, filho meu, te deixarias atrair por outra mulher, e te abraçarias ao peito de uma estranha?
²¹ Eis que os caminhos do homem estão perante os olhos do Senhor, e ele pesa todas as suas veredas.
²² Quanto ao ímpio, as suas iniquidades o prenderão, e com as cordas do seu pecado será detido.
²³ Ele morrerá, porque desavisadamente andou, e pelo excesso da sua loucura se perderá.

`,
        get pergunta() {
            return sortear([
                {
                    texto: "Embora os lábios da mulher estranha destilem favos de mel, como é o seu fim?",
                    opcoes: [
                        { numero: 1, texto: "Amargoso como o absinto e agudo como a espada de dois gumes", correta: true },
                        { numero: 2, texto: "Doce como o açúcar", correta: false },
                        { numero: 3, texto: "Suave como a seda", correta: false },
                        { numero: 4, texto: "Firme como a rocha", correta: false }
                    ],
                    explicacao: "Provérbios 5:4 - Mas o seu fim é amargoso como o absinto, agudo como a espada de dois gumes.",
                    pontosGanhos: 20
                },
                {
                    texto: "Onde estão os caminhos do homem, perante quem?",
                    opcoes: [
                        { numero: 1, texto: "Perante os olhos do Senhor", correta: true },
                        { numero: 2, texto: "Perante os olhos do rei", correta: false },
                        { numero: 3, texto: "Perante os seus vizinhos", correta: false },
                        { numero: 4, texto: "Perante a sua própria consciência apenas", correta: false }
                    ],
                    explicacao: "Provérbios 5:21 - Porque os caminhos do homem estão perante os olhos do Senhor, e ele pondera todas as suas veredas.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que prende o ímpio, segundo o capítulo 5?",
                    opcoes: [
                        { numero: 1, texto: "As correntes de ferro", correta: false },
                        { numero: 2, texto: "As redes dos caçadores", correta: false },
                        { numero: 3, texto: "As cordas do seu pecado", correta: true },
                        { numero: 4, texto: "As ordens do juiz", correta: false }
                    ],
                    explicacao: "Provérbios 5:22 - Quanto ao ímpio, as suas próprias iniquidades o prenderão, e com as cordas do seu pecado será detido.",
                    pontosGanhos: 20
                }
            ]);
        }
      },  // js/livros/proverbios.js (Capítulos 6-10)

    6: {
        titulo: "Advertências Contra a Preguiça e a Maldade",
        texto: ` ¹ Filho meu, se ficaste por fiador do teu companheiro, se deste a tua mão ao estranho,
² E te deixaste enredar pelas próprias palavras; e te prendeste nas palavras da tua boca;
³ Faze pois isto agora, filho meu, e livra-te, já que caíste nas mãos do teu companheiro: vai, humilha-te, e importuna o teu companheiro.
⁴ Não dês sono aos teus olhos, nem deixes adormecer as tuas pálpebras.
⁵ Livra-te, como a gazela da mão do caçador, e como a ave da mão do passarinheiro.
⁶ Vai ter com a formiga, ó preguiçoso; olha para os seus caminhos, e sê sábio.
⁷ Pois ela, não tendo chefe, nem guarda, nem dominador,
⁸ Prepara no verão o seu pão; na sega ajunta o seu mantimento.
⁹ Ó preguiçoso, até quando ficarás deitado? Quando te levantarás do teu sono?
¹⁰ Um pouco a dormir, um pouco a tosquenejar; um pouco a repousar de braços cruzados;
¹¹ Assim sobrevirá a tua pobreza como o meliante, e a tua necessidade como um homem armado.
¹² O homem mau, o homem iníquo tem a boca pervertida.
¹³ Acena com os olhos, fala com os pés e faz sinais com os dedos.
¹⁴ Há no seu coração perversidade, todo o tempo maquina mal; anda semeando contendas.
¹⁵ Por isso a sua destruição virá repentinamente; subitamente será quebrantado, sem que haja cura.
¹⁶ Estas seis coisas o Senhor odeia, e a sétima a sua alma abomina:
¹⁷ Olhos altivos, língua mentirosa, mãos que derramam sangue inocente,
¹⁸ O coração que maquina pensamentos perversos, pés que se apressam a correr para o mal,
¹⁹ A testemunha falsa que profere mentiras, e o que semeia contendas entre irmãos.
²⁰ Filho meu, guarda o mandamento de teu pai, e não deixes a lei da tua mãe;
²¹ Ata-os perpetuamente ao teu coração, e pendura-os ao teu pescoço.
²² Quando caminhares, te guiará; quando te deitares, te guardará; quando acordares, falará contigo.
²³ Porque o mandamento é lâmpada, e a lei é luz; e as repreensões da correção são o caminho da vida,
²⁴ Para te guardarem da mulher vil, e das lisonjas da estranha.
²⁵ Não cobices no teu coração a sua formosura, nem te prendas aos seus olhos.
²⁶ Porque por causa de uma prostituta se chega a pedir um bocado de pão; e a adúltera anda à caça da alma preciosa.
²⁷ Porventura tomará alguém fogo no seu seio, sem que suas vestes se queimem?
²⁸ Ou andará alguém sobre brasas, sem que se queimem os seus pés?
²⁹ Assim ficará o que entrar à mulher do seu próximo; não será inocente todo aquele que a tocar.
³⁰ Não se injuria o ladrão, quando furta para saciar-se, tendo fome;
³¹ E se for achado pagará o tanto sete vezes; terá de dar todos os bens da sua casa.
³² Assim, o que adultera com uma mulher é falto de entendimento; aquele que faz isso destrói a sua alma.
³³ Achará castigo e vilipêndio, e o seu opróbrio nunca se apagará.
³⁴ Porque os ciúmes enfurecerão o marido; de maneira nenhuma perdoará no dia da vingança.
³⁵ Não aceitará nenhum resgate, nem se conformará por mais que aumentes os presentes.

`,
        get pergunta() {
            return sortear([
                {
                    texto: "Para qual animal o preguiçoso deve olhar para aprender a ser sábio?",
                    opcoes: [
                        { numero: 1, texto: "O leão", correta: false },
                        { numero: 2, texto: "A formiga", correta: true },
                        { numero: 3, texto: "A abelha", correta: false },
                        { numero: 4, texto: "O boi", correta: false }
                    ],
                    explicacao: "Provérbios 6:6 - Vai ter com a formiga, ó preguiçoso; olha para os seus caminhos, e sê sábio.",
                    pontosGanhos: 20
                },
                {
                    texto: "Quantas coisas o Senhor aborrece (odeia) e são abominação para Ele?",
                    opcoes: [
                        { numero: 1, texto: "Dez coisas", correta: false },
                        { numero: 2, texto: "Três coisas", correta: false },
                        { numero: 3, texto: "Seis coisas... e a sétima a sua alma abomina", correta: true },
                        { numero: 4, texto: "Doze coisas", correta: false }
                    ],
                    explicacao: "Provérbios 6:16 - Estas seis coisas o Senhor odeia, e a sétima a sua alma abomina.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que o mandamento e a lei são para o homem, segundo o capítulo 6?",
                    opcoes: [
                        { numero: 1, texto: "Um peso e uma obrigação", correta: false },
                        { numero: 2, texto: "Um mistério profundo", correta: false },
                        { numero: 3, texto: "Um labirinto sem saída", correta: false },
                        { numero: 4, texto: "Lâmpada e luz", correta: true }
                    ],
                    explicacao: "Provérbios 6:23 - Porque o mandamento é lâmpada, e a lei é luz; e as repreensões da instrução são o caminho da vida.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    7: {
        titulo: "As Ciladas da Sedução",
        texto: `¹ Filho meu, guarda as minhas palavras, e esconde dentro de ti os meus mandamentos.
² Guarda os meus mandamentos e vive; e a minha lei, como a menina dos teus olhos.
³ Ata-os aos teus dedos, escreve-os na tábua do teu coração.
⁴ Dize à sabedoria: Tu és minha irmã; e à prudência chama de tua parenta,
⁵ Para que elas te guardem da mulher alheia, da estranha que lisonjeia com as suas palavras.
⁶ Porque da janela da minha casa, olhando eu por minhas frestas,
⁷ Vi entre os simples, descobri entre os moços, um moço falto de juízo,
⁸ Que passava pela rua junto à sua esquina, e seguia o caminho da sua casa;
⁹ No crepúsculo, à tarde do dia, na tenebrosa noite e na escuridão.
¹⁰ E eis que uma mulher lhe saiu ao encontro com enfeites de prostituta, e astúcia de coração.
¹¹ Estava alvoroçada e irrequieta; não paravam em sua casa os seus pés.
¹² Foi para fora, depois pelas ruas, e ia espreitando por todos os cantos;
¹³ E chegou-se para ele e o beijou. Com face impudente lhe disse:
¹⁴ Sacrifícios pacíficos tenho comigo; hoje paguei os meus votos.
¹⁵ Por isto saí ao teu encontro a buscar diligentemente a tua face, e te achei.
¹⁶ Já cobri a minha cama com cobertas de tapeçaria, com obras lavradas, com linho fino do Egito.
¹⁷ Já perfumei o meu leito com mirra, aloés e canela.
¹⁸ Vem, saciemo-nos de amores até à manhã; alegremo-nos com amores.
¹⁹ Porque o marido não está em casa; foi fazer uma longa viagem;
²⁰ Levou na sua mão um saquitel de dinheiro; voltará para casa só no dia marcado.
²¹ Assim, o seduziu com palavras muito suaves e o persuadiu com as lisonjas dos seus lábios.
²² E ele logo a segue, como o boi que vai para o matadouro, e como vai o insensato para o castigo das prisões;
²³ Até que a flecha lhe atravesse o fígado; ou como a ave que se apressa para o laço, e não sabe que está armado contra a sua vida.
²⁴ Agora pois, filhos, dai-me ouvidos, e estai atentos às palavras da minha boca.
²⁵ Não se desvie para os caminhos dela o teu coração, e não te deixes perder nas suas veredas.
²⁶ Porque a muitos feridos derrubou; e são muitíssimos os que por causa dela foram mortos.
²⁷ A sua casa é caminho do inferno que desce para as câmaras da morte.

 `,
        get pergunta() {
            return sortear([
                {
                    texto: "Como o filho deve guardar os mandamentos de seu pai para viver?",
                    opcoes: [
                        { numero: 1, texto: "Como a menina dos teus olhos", correta: true },
                        { numero: 2, texto: "Apenas em dias de festa", correta: false },
                        { numero: 3, texto: "Escritos em pedras grandes", correta: false },
                        { numero: 4, texto: "Escondidos dos amigos", correta: false }
                    ],
                    explicacao: "Provérbios 7:2 - Guarda os meus mandamentos e vive; e a minha lei, como a menina dos teus olhos.",
                    pontosGanhos: 20
                },
                {
                    texto: "Onde o filho deve escrever os mandamentos da sabedoria?",
                    opcoes: [
                        { numero: 1, texto: "Na porta da cidade", correta: false },
                        { numero: 2, texto: "Na tábua do seu coração", correta: true },
                        { numero: 3, texto: "Nas palmas das mãos", correta: false },
                        { numero: 4, texto: "No chão de areia", correta: false }
                    ],
                    explicacao: "Provérbios 7:3 - Ata-os aos teus dedos, escreve-os na tábua do teu coração.",
                    pontosGanhos: 20
                },
                {
                    texto: "O jovem sem juízo seguiu a mulher sedutora como qual animal vai ao matadouro?",
                    opcoes: [
                        { numero: 1, texto: "Como um cordeiro", correta: false },
                        { numero: 2, texto: "Como um lobo", correta: false },
                        { numero: 3, texto: "Como um cão", correta: false },
                        { numero: 4, texto: "Como o boi", correta: true }
                    ],
                    explicacao: "Provérbios 7:22 - E ele logo a segue, como o boi que vai ao matadouro.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    8: {
        titulo: "A Eternidade da Sabedoria",
        texto: ` ¹ Não clama porventura a sabedoria, e a inteligência não faz ouvir a sua voz?
² No cume das alturas, junto ao caminho, nas encruzilhadas das veredas se posta.
³ Do lado das portas da cidade, à entrada da cidade, e à entrada das portas está gritando:
⁴ A vós, ó homens, clamo; e a minha voz se dirige aos filhos dos homens.
⁵ Entendei, ó simples, a prudência; e vós, insensatos, entendei de coração.
⁶ Ouvi, porque falarei coisas excelentes; os meus lábios se abrirão para a equidade.
⁷ Porque a minha boca proferirá a verdade, e os meus lábios abominam a impiedade.
⁸ São justas todas as palavras da minha boca: não há nelas nenhuma coisa tortuosa nem pervertida.
⁹ Todas elas são retas para aquele que as entende bem, e justas para os que acham o conhecimento.
¹⁰ Aceitai a minha correção, e não a prata; e o conhecimento, mais do que o ouro fino escolhido.
¹¹ Porque melhor é a sabedoria do que os rubis; e tudo o que mais se deseja não se pode comparar com ela.
¹² Eu, a sabedoria, habito com a prudência, e acho o conhecimento dos conselhos.
¹³ O temor do Senhor é odiar o mal; a soberba e a arrogância, o mau caminho e a boca perversa, eu odeio.
¹⁴ Meu é o conselho e a verdadeira sabedoria; eu sou o entendimento; minha é a fortaleza.
¹⁵ Por mim reinam os reis e os príncipes decretam justiça.
¹⁶ Por mim governam príncipes e nobres; sim, todos os juízes da terra.
¹⁷ Eu amo aos que me amam, e os que cedo me buscarem, me acharão.
¹⁸ Riquezas e honra estão comigo; assim como os bens duráveis e a justiça.
¹⁹ Melhor é o meu fruto do que o ouro, do que o ouro refinado, e os meus ganhos mais do que a prata escolhida.
²⁰ Faço andar pelo caminho da justiça, no meio das veredas do juízo.
²¹ Para que faça herdar bens permanentes aos que me amam, e eu encha os seus tesouros.
²² O Senhor me possuiu no princípio de seus caminhos, desde então, e antes de suas obras.
²³ Desde a eternidade fui ungida, desde o princípio, antes do começo da terra.
²⁴ Quando ainda não havia abismos, fui gerada, quando ainda não havia fontes carregadas de águas.
²⁵ Antes que os montes se houvessem assentado, antes dos outeiros, eu fui gerada.
²⁶ Ainda ele não tinha feito a terra, nem os campos, nem o princípio do pó do mundo.
²⁷ Quando ele preparava os céus, aí estava eu, quando traçava o horizonte sobre a face do abismo;
²⁸ Quando firmava as nuvens acima, quando fortificava as fontes do abismo,
²⁹ Quando fixava ao mar o seu termo, para que as águas não traspassassem o seu mando, quando compunha os fundamentos da terra.
³⁰ Então eu estava com ele, e era seu arquiteto; era cada dia as suas delícias, alegrando-me perante ele em todo o tempo;
³¹ Regozijando-me no seu mundo habitável e enchendo-me de prazer com os filhos dos homens.
³² Agora, pois, filhos, ouvi-me, porque bem-aventurados serão os que guardarem os meus caminhos.
³³ Ouvi a instrução, e sede sábios, não a rejeiteis.
³⁴ Bem-aventurado o homem que me dá ouvidos, velando às minhas portas cada dia, esperando às ombreiras da minha entrada.
³⁵ Porque o que me achar, achará a vida, e alcançará o favor do Senhor.
³⁶ Mas o que pecar contra mim violentará a sua própria alma; todos os que me odeiam amam a morte.

`,
        get pergunta() {
            return sortear([
                {
                    texto: "O que a Sabedoria afirma sobre o temor do Senhor?",
                    opcoes: [
                        { numero: 1, texto: "O temor do Senhor é odiar o mal", correta: true },
                        { numero: 2, texto: "O temor do Senhor é ter medo de Deus", correta: false },
                        { numero: 3, texto: "O temor do Senhor é apenas para os velhos", correta: false },
                        { numero: 4, texto: "O temor do Senhor é buscar riquezas", correta: false }
                    ],
                    explicacao: "Provérbios 8:13 - O temor do Senhor é odiar o mal; a soberba e a arrogância, o mau caminho e a boca perversa, eu odeio.",
                    pontosGanhos: 20
                },
                {
                    texto: "Desde quando a Sabedoria foi estabelecida por Deus?",
                    opcoes: [
                        { numero: 1, texto: "Desde que Salomão nasceu", correta: false },
                        { numero: 2, texto: "Desde o tempo de Moisés", correta: false },
                        { numero: 3, texto: "Desde a eternidade, antes de haver terra", correta: true },
                        { numero: 4, texto: "Apenas depois do dilúvio", correta: false }
                    ],
                    explicacao: "Provérbios 8:23 - Desde a eternidade fui estabelecida, desde o princípio, antes de haver terra.",
                    pontosGanhos: 20
                },
                {
                    texto: "Quem é bem-aventurado, segundo o final do capítulo 8?",
                    opcoes: [
                        { numero: 1, texto: "O homem que ouve a sabedoria, velando às suas portas", correta: true },
                        { numero: 2, texto: "O homem que ganha muitas batalhas", correta: false },
                        { numero: 3, texto: "O homem que viaja pelo mundo", correta: false },
                        { numero: 4, texto: "O homem que dorme muito", correta: false }
                    ],
                    explicacao: "Provérbios 8:34 - Bem-aventurado o homem que me dá ouvidos, velando às minhas portas cada dia.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    9: {
        titulo: "O Banquete da Sabedoria vs. A Loucura",
        texto: ` ¹ A sabedoria já edificou a sua casa, já lavrou as suas sete colunas.
² Já abateu os seus animais e misturou o seu vinho, e já preparou a sua mesa.
³ Já ordenou às suas criadas, e está convidando desde as alturas da cidade, dizendo:
⁴ Quem é simples, volte-se para cá. Aos faltos de senso diz:
⁵ Vinde, comei do meu pão, e bebei do vinho que tenho misturado.
⁶ Deixai os insensatos e vivei; e andai pelo caminho do entendimento.
⁷ O que repreende o escarnecedor, toma afronta para si; e o que censura o ímpio recebe a sua mancha.
⁸ Não repreendas o escarnecedor, para que não te odeie; repreende o sábio, e ele te amará.
⁹ Dá instrução ao sábio, e ele se fará mais sábio; ensina o justo e ele aumentará em doutrina.
¹⁰ O temor do Senhor é o princípio da sabedoria, e o conhecimento do Santo a prudência.
¹¹ Porque por meu intermédio se multiplicam os teus dias, e anos de vida se te aumentarão.
¹² Se fores sábio, para ti serás sábio; e, se fores escarnecedor, só tu o suportarás.
¹³ A mulher louca é alvoroçadora; é simples e nada sabe.
¹⁴ Assenta-se à porta da sua casa numa cadeira, nas alturas da cidade,
¹⁵ E põe-se a chamar aos que vão pelo caminho, e que passam reto pelas veredas, dizendo:
¹⁶ Quem é simples, volte-se para cá. E aos faltos de entendimento ela diz:
¹⁷ As águas roubadas são doces, e o pão tomado às escondidas é agradável.
¹⁸ Mas não sabem que ali estão os mortos; os seus convidados estão nas profundezas do inferno.`,
        get pergunta() {
            return sortear([
                {
                    texto: "Quem não deves repreender para que ele não te odeie?",
                    opcoes: [
                        { numero: 1, texto: "O sábio", correta: false },
                        { numero: 2, texto: "O escarnecedor", correta: true },
                        { numero: 3, texto: "O teu pai", correta: false },
                        { numero: 4, texto: "O rei", correta: false }
                    ],
                    explicacao: "Provérbios 9:8 - Não repreendas o escarnecedor, para que não te odeie; repreende o sábio, e amar-te-á.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que acontece se você der instrução ao sábio?",
                    opcoes: [
                        { numero: 1, texto: "Ele se tornará ainda mais sábio", correta: true },
                        { numero: 2, texto: "Ele ficará ofendido", correta: false },
                        { numero: 3, texto: "Ele não aprenderá nada novo", correta: false },
                        { numero: 4, texto: "Ele se tornará orgulhoso", correta: false }
                    ],
                    explicacao: "Provérbios 9:9 - Dá instrução ao sábio, e ele se fará mais sábio; ensina o justo e ele crescerá em entendimento.",
                    pontosGanhos: 20
                },
                {
                    texto: "Como a mulher louca (a loucura) descreve as águas roubadas?",
                    opcoes: [
                        { numero: 1, texto: "Como águas amargas", correta: false },
                        { numero: 2, texto: "Como águas perigosas", correta: false },
                        { numero: 3, texto: "Como águas doces", correta: true },
                        { numero: 4, texto: "Como águas quentes", correta: false }
                    ],
                    explicacao: "Provérbios 9:17 - As águas roubadas são doces, e o pão comido às ocultas é suave.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    10: {
        titulo: "Provérbios de Salomão: Justos e Ímpios",
        texto: ` ¹ Provérbios de Salomão: O filho sábio alegra a seu pai, mas o filho insensato é a tristeza de sua mãe.
² Os tesouros da impiedade de nada aproveitam; mas a justiça livra da morte.
³ O Senhor não deixa o justo passar fome, mas rechaça a aspiração dos perversos.
⁴ O que trabalha com mão displicente empobrece, mas a mão dos diligentes enriquece.
⁵ O que ajunta no verão é filho ajuizado, mas o que dorme na sega é filho que envergonha.
⁶ Bênçãos há sobre a cabeça do justo, mas a violência cobre a boca dos perversos.
⁷ A memória do justo é abençoada, mas o nome dos perversos apodrecerá.
⁸ O sábio de coração aceita os mandamentos, mas o insensato de lábios ficará transtornado.
⁹ Quem anda em sinceridade, anda seguro; mas o que perverte os seus caminhos ficará conhecido.
¹⁰ O que acena com os olhos causa dores, e o tolo de lábios ficará transtornado.
¹¹ A boca do justo é fonte de vida, mas a violência cobre a boca dos perversos.
¹² O ódio excita contendas, mas o amor cobre todos os pecados.
¹³ Nos lábios do entendido se acha a sabedoria, mas a vara é para as costas do falto de doutrina.
¹⁴ Os sábios entesouram a sabedoria; mas a boca do tolo o aproxima da ruína.
¹⁵ Os bens do rico são a sua cidade forte, a pobreza dos pobres a sua ruína.
¹⁶ A obra do justo conduz à vida, o fruto do perverso, ao pecado.
¹⁷ O caminho para a vida é daquele que guarda a instrução, mas o que deixa a repreensão comete erro.
¹⁸ O que encobre o ódio tem lábios falsos, e o que divulga má fama é um insensato.
¹⁹ Na multidão de palavras não falta pecado, mas o que modera os seus lábios é sábio.
²⁰ Prata escolhida é a língua do justo; o coração dos perversos é de nenhum valor.
²¹ Os lábios do justo apascentam a muitos, mas os tolos morrem por falta de entendimento.
²² A bênção do Senhor é que enriquece; e não traz consigo dores.
²³ Para o tolo, o cometer desordem é divertimento; mas para o homem entendido é o ter sabedoria.
²⁴ Aquilo que o perverso teme sobrevirá a ele, mas o desejo dos justos será concedido.
²⁵ Como passa a tempestade, assim desaparece o perverso, mas o justo tem fundamento perpétuo.
²⁶ Como vinagre para os dentes, como fumaça para os olhos, assim é o preguiçoso para aqueles que o mandam.
²⁷ O temor do Senhor aumenta os dias, mas os perversos terão os anos da vida abreviados.
²⁸ A esperança dos justos é alegria, mas a expectação dos perversos perecerá.
²⁹ O caminho do Senhor é fortaleza para os retos, mas ruína para os que praticam a iniquidade.
³⁰ O justo nunca jamais será abalado, mas os perversos não habitarão a terra.
³¹ A boca do justo jorra sabedoria, mas a língua da perversidade será cortada.
³² Os lábios do justo sabem o que agrada, mas a boca dos perversos, só perversidades.

`,
        get pergunta() {
            return sortear([
                {
                    texto: "O que o Senhor não deixa o justo passar, apesar de rejeitar a cobiça dos ímpios?",
                    opcoes: [
                        { numero: 1, texto: "Trabalho", correta: false },
                        { numero: 2, texto: "Fome", correta: true },
                        { numero: 3, texto: "Sono", correta: false },
                        { numero: 4, texto: "Calor", correta: false }
                    ],
                    explicacao: "Provérbios 10:3 - O Senhor não deixa ter fome a alma do justo, mas rechaça a aspiração dos ímpios.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que acontece com a mão negligente (preguiçosa), em contraste com a mão dos diligentes?",
                    opcoes: [
                        { numero: 1, texto: "A mão negligente empobrece", correta: true },
                        { numero: 2, texto: "A mão negligente fica forte", correta: false },
                        { numero: 3, texto: "A mão negligente governa o mundo", correta: false },
                        { numero: 4, texto: "Não há diferença entre elas", correta: false }
                    ],
                    explicacao: "Provérbios 10:4 - O que trabalha com mão negligente empobrece, mas a mão dos diligentes enriquece.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que o ódio excita, e o que o amor faz com as transgressões?",
                    opcoes: [
                        { numero: 1, texto: "O ódio excita contendas, mas o amor cobre todas as transgressões", correta: true },
                        { numero: 2, texto: "O ódio traz paz, mas o amor traz brigas", correta: false },
                        { numero: 3, texto: "O ódio é bom, mas o amor é perigoso", correta: false },
                        { numero: 4, texto: "Nada acontece", correta: false }
                    ],
                    explicacao: "Provérbios 10:12 - O ódio excita contendas, mas o amor cobre todas as transgressões.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    // js/livros/proverbios.js (Capítulos 11-15)

    11: {
        titulo: "Integridade e Justiça",
        texto: `¹ Balança enganosa é abominação para o Senhor, mas o peso justo é o seu prazer.
² Em vindo a soberba, virá também a afronta; mas com os humildes está a sabedoria.
³ A sinceridade dos íntegros os guiará, mas a perversidade dos transgressores os destruirá.
⁴ De nada aproveitam as riquezas no dia da ira, mas a justiça livra da morte.
⁵ A justiça do sincero endireitará o seu caminho, mas o perverso pela sua falsidade cairá.
⁶ A justiça dos virtuosos os livrará, mas na sua perversidade serão apanhados os iníquos.
⁷ Morrendo o homem perverso perece sua esperança, e acaba-se a expectação de riquezas.
⁸ O justo é libertado da angústia, e vem o ímpio para o seu lugar.
⁹ O hipócrita com a boca destrói o seu próximo, mas os justos se libertam pelo conhecimento.
¹⁰ No bem dos justos exulta a cidade; e perecendo os ímpios, há júbilo.
¹¹ Pela bênção dos homens de bem a cidade se exalta, mas pela boca dos perversos é derrubada.
¹² O que despreza o seu próximo carece de entendimento, mas o homem entendido se mantém calado.
¹³ O mexeriqueiro revela o segredo, mas o fiel de espírito mantém o assunto em oculto.
¹⁴ Não havendo sábios conselhos, o povo cai, mas na multidão de conselhos há segurança.
¹⁵ Decerto sofrerá severamente aquele que fica por fiador do estranho, mas o que evita a fiança estará seguro.
¹⁶ A mulher graciosa guarda a honra como os violentos guardam as riquezas.
¹⁷ O homem misericordioso faz o bem à sua alma, mas o cruel prejudica o seu corpo.
¹⁸ O ímpio faz obra falsa, mas para o que semeia justiça haverá galardão fiel.
¹⁹ Como a justiça encaminha para a vida, assim o que segue o mal vai para a sua morte.
²⁰ Abominação ao Senhor são os perversos de coração, mas os de caminho sincero são o seu deleite.
²¹ Ainda que junte as mãos, o mau não ficará impune, mas a semente dos justos será liberada.
²² Como joia de ouro no focinho de uma porca, assim é a mulher formosa que não tem discrição.
²³ O desejo dos justos é tão somente para o bem, mas a esperança dos ímpios é criar contrariedades.
²⁴ Ao que distribui mais se lhe acrescenta, e ao que retém mais do que é justo, é para a sua perda.
²⁵ A alma generosa prosperará e aquele que atende também será atendido.
²⁶ Ao que retém o trigo o povo amaldiçoa, mas bênção haverá sobre a cabeça do que o vende.
²⁷ O que cedo busca o bem, busca favor, mas o que procura o mal, esse lhe sobrevirá.
²⁸ Aquele que confia nas suas riquezas cairá, mas os justos reverdecerão como a folhagem.
²⁹ O que perturba a sua casa herdará o vento, e o tolo será servo do sábio de coração.
³⁰ O fruto do justo é árvore de vida, e o que ganha almas é sábio.
³¹ Eis que o justo recebe na terra a retribuição; quanto mais o ímpio e o pecador!

 `,
        get pergunta() {
            return sortear([
                {
                    texto: "O que o Senhor abomina no comércio, segundo o capítulo 11?",
                    opcoes: [
                        { numero: 1, texto: "A balança enganosa", correta: true },
                        { numero: 2, texto: "O lucro justo", correta: false },
                        { numero: 3, texto: "O pagamento em ouro", correta: false },
                        { numero: 4, texto: "A troca de mercadorias", correta: false }
                    ],
                    explicacao: "Provérbios 11:1 - Balança enganosa é abominação para o Senhor, mas o peso justo é o seu prazer.",
                    pontosGanhos: 20
                },
                {
                    texto: "Onde há segurança, segundo a instrução sobre conselhos?",
                    opcoes: [
                        { numero: 1, texto: "Na força das armas", correta: false },
                        { numero: 2, texto: "No isolamento absoluto", correta: false },
                        { numero: 3, texto: "Na multidão de conselheiros", correta: true },
                        { numero: 4, texto: "Apenas na própria opinião", correta: false }
                    ],
                    explicacao: "Provérbios 11:14 - Não havendo sábios conselhos, o povo cai, mas na multidão de conselheiros há segurança.",
                    pontosGanhos: 20
                },
                {
                    texto: "A que é comparada a mulher formosa que se aparta da discrição?",
                    opcoes: [
                        { numero: 1, texto: "A uma flor murcha", correta: false },
                        { numero: 2, texto: "A uma nuvem sem água", correta: false },
                        { numero: 3, texto: "A uma pedra preciosa no lixo", correta: false },
                        { numero: 4, texto: "A uma joia de ouro no focinho de uma porca", correta: true }
                    ],
                    explicacao: "Provérbios 11:22 - Como joia de ouro no focinho de uma porca, assim é a mulher formosa que se aparta da discrição.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    12: {
        titulo: "O Proveito da Instrução",
        texto: ` ¹ O que ama a instrução ama o conhecimento, mas o que odeia a repreensão é estúpido.
² O homem de bem alcançará o favor do Senhor, mas ao homem de intenções perversas ele condenará.
³ O homem não se estabelecerá pela impiedade, mas a raiz dos justos não será removida.
⁴ A mulher virtuosa é a coroa do seu marido, mas a que o envergonha é como podridão nos seus ossos.
⁵ Os pensamentos dos justos são retos, mas os conselhos dos ímpios, engano.
⁶ As palavras dos ímpios são ciladas para derramar sangue, mas a boca dos retos os livrará.
⁷ Os ímpios serão transtornados e não subsistirão, mas a casa dos justos permanecerá.
⁸ Cada qual será louvado segundo o seu entendimento, mas o perverso de coração estará em desprezo.
⁹ Melhor é o que se estima em pouco, e tem servos, do que o que se vangloria e tem falta de pão.
¹⁰ O justo tem consideração pela vida dos seus animais, mas as afeições dos ímpios são cruéis.
¹¹ O que lavra a sua terra se fartará de pão; mas o que segue os ociosos é falto de juízo.
¹² O ímpio deseja a rede dos maus, mas a raiz dos justos produz o seu fruto.
¹³ O ímpio se enlaça na transgressão dos lábios, mas o justo sairá da angústia.
¹⁴ O homem será saciado de bem pelo fruto da sua boca, e da obra das suas mãos o homem receberá a recompensa.
¹⁵ O caminho do insensato é reto aos seus próprios olhos, mas o que dá ouvidos ao conselho é sábio.
¹⁶ A ira do insensato se conhece no mesmo dia, mas o prudente encobre a afronta.
¹⁷ O que diz a verdade manifesta a justiça, mas a falsa testemunha diz engano.
¹⁸ Há alguns que falam como que espada penetrante, mas a língua dos sábios é saúde.
¹⁹ O lábio da verdade permanece para sempre, mas a língua da falsidade, dura por um só momento.
²⁰ No coração dos que maquinam o mal há engano, mas os que aconselham a paz têm alegria.
²¹ Nenhum agravo sobrevirá ao justo, mas os ímpios ficam cheios de mal.
²² Os lábios mentirosos são abomináveis ao Senhor, mas os que agem fielmente são o seu deleite.
²³ O homem prudente encobre o conhecimento, mas o coração dos tolos proclama a estultícia.
²⁴ A mão dos diligentes dominará, mas os negligentes serão tributários.
²⁵ A ansiedade no coração deixa o homem abatido, mas uma boa palavra o alegra.
²⁶ O justo é mais excelente do que o seu próximo, mas o caminho dos ímpios faz errar.
²⁷ O preguiçoso deixa de assar a sua caça, mas ser diligente é o precioso bem do homem.
²⁸ Na vereda da justiça está a vida, e no caminho da sua carreira não há morte.`,
        get pergunta() {
            return sortear([
                {
                    texto: "Quem o capítulo 12 diz que é estúpido (ou bruto)?",
                    opcoes: [
                        { numero: 1, texto: "O que não sabe ler", correta: false },
                        { numero: 2, texto: "O que odeia a repreensão", correta: true },
                        { numero: 3, texto: "O que é pobre", correta: false },
                        { numero: 4, texto: "O que viaja pouco", correta: false }
                    ],
                    explicacao: "Provérbios 12:1 - O que ama a instrução ama o conhecimento, mas o que odeia a repreensão é estúpido.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que são para o Senhor os lábios mentirosos?",
                    opcoes: [
                        { numero: 1, texto: "Algo sem importância", correta: false },
                        { numero: 2, texto: "Uma falha comum", correta: false },
                        { numero: 3, texto: "Abominação", correta: true },
                        { numero: 4, texto: "Uma ferramenta útil", correta: false }
                    ],
                    explicacao: "Provérbios 12:22 - Os lábios mentirosos são abomináveis ao Senhor, mas os que agem fielmente são o seu deleite.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que acontece com o coração do homem quando há ansiedade (solicitude), e o que o alegra?",
                    opcoes: [
                        { numero: 1, texto: "A ansiedade o alegra, a música o abate", correta: false },
                        { numero: 2, texto: "A ansiedade o abate, mas uma boa palavra o alegra", correta: true },
                        { numero: 3, texto: "A ansiedade o fortalece", correta: false },
                        { numero: 4, texto: "Nada pode alegrar um coração ansioso", correta: false }
                    ],
                    explicacao: "Provérbios 12:25 - A solicitude no coração do homem o abate, mas uma boa palavra o alegra.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    13: {
        titulo: "Frutos da Sabedoria e da Prudência",
        texto: ` ¹ O filho sábio atende à instrução do pai; mas o escarnecedor não ouve a repreensão.
² Do fruto da boca cada um comerá o bem, mas a alma dos prevaricadores comerá a violência.
³ O que guarda a sua boca conserva a sua alma, mas o que abre muito os seus lábios se destrói.
⁴ A alma do preguiçoso deseja, e coisa nenhuma alcança, mas a alma dos diligentes se farta.
⁵ O justo odeia a palavra de mentira, mas o ímpio faz vergonha e se confunde.
⁶ A justiça guarda ao que é de caminho certo, mas a impiedade transtornará o pecador.
⁷ Há alguns que se fazem de ricos, e não têm coisa nenhuma, e outros que se fazem de pobres e têm muitas riquezas.
⁸ O resgate da vida de cada um são as suas riquezas, mas o pobre não ouve ameaças.
⁹ A luz dos justos alegra, mas a candeia dos ímpios se apagará.
¹⁰ Da soberba só provém a contenda, mas com os que se aconselham se acha a sabedoria.
¹¹ A riqueza de procedência vã diminuirá, mas quem a ajunta com o próprio trabalho a aumentará.
¹² A esperança adiada desfalece o coração, mas o desejo atendido é árvore de vida.
¹³ O que despreza a palavra perecerá, mas o que teme o mandamento será galardoado.
¹⁴ A doutrina do sábio é uma fonte de vida para se desviar dos laços da morte.
¹⁵ O bom entendimento favorece, mas o caminho dos prevaricadores é áspero.
¹⁶ Todo prudente procede com conhecimento, mas o insensato espraia a sua loucura.
¹⁷ O que prega a maldade cai no mal, mas o embaixador fiel é saúde.
¹⁸ Pobreza e afronta virão ao que rejeita a instrução, mas o que guarda a repreensão será honrado.
¹⁹ O desejo que se alcança deleita a alma, mas apartar-se do mal é abominável para os insensatos.
²⁰ O que anda com os sábios ficará sábio, mas o companheiro dos tolos será destruído.
²¹ O mal perseguirá os pecadores, mas os justos serão galardoados com o bem.
²² O homem de bem deixa uma herança aos filhos de seus filhos, mas a riqueza do pecador é depositada para o justo.
²³ O pobre, do sulco da terra, tira mantimento em abundância; mas há os que se consomem por falta de juízo.
²⁴ O que não faz uso da vara odeia seu filho, mas o que o ama, desde cedo o castiga.
²⁵ O justo come até saciar sua alma, mas o ventre dos ímpios passará necessidade.

`,
        get pergunta() {
            return sortear([
                {
                    texto: "O que acontece com aquele que guarda a sua boca?",
                    opcoes: [
                        { numero: 1, texto: "Fica em silêncio eterno", correta: false },
                        { numero: 2, texto: "Perde grandes oportunidades", correta: false },
                        { numero: 3, texto: "Guarda a sua alma", correta: true },
                        { numero: 4, texto: "Torna-se um homem triste", correta: false }
                    ],
                    explicacao: "Provérbios 13:3 - O que guarda a sua boca conserva a sua alma, mas o que muito abre os seus lábios tem destruição.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que acontece com a esperança que se adia?",
                    opcoes: [
                        { numero: 1, texto: "Fortalece os músculos", correta: false },
                        { numero: 2, texto: "Faz adoecer o coração", correta: true },
                        { numero: 3, texto: "Traz muita alegria", correta: false },
                        { numero: 4, texto: "Nunca se realiza", correta: false }
                    ],
                    explicacao: "Provérbios 13:12 - A esperança adiada faz adoecer o coração, mas o desejo cumprido é árvore de vida.",
                    pontosGanhos: 20
                },
                {
                    texto: "Com quem devemos andar para nos tornarmos sábios?",
                    opcoes: [
                        { numero: 1, texto: "Com os que têm muito dinheiro", correta: false },
                        { numero: 2, texto: "Com os heróis de guerra", correta: false },
                        { numero: 3, texto: "Com os reis da terra", correta: false },
                        { numero: 4, texto: "Com os sábios", correta: true }
                    ],
                    explicacao: "Provérbios 13:20 - O que anda com os sábios ficará sábio, mas o companheiro dos tolos será destruído.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    14: {
        titulo: "A Sabedoria Constrói a Casa",
        texto: ` ¹ Toda mulher sábia edifica a sua casa; mas a tola a derruba com as próprias mãos.
² O que anda na retidão teme ao Senhor, mas o que se desvia de seus caminhos o despreza.
³ Na boca do tolo está a punição da soberba, mas os sábios se conservam pelos próprios lábios.
⁴ Não havendo bois o estábulo fica limpo, mas pela força do boi há abundância de colheita.
⁵ A verdadeira testemunha não mentirá, mas a testemunha falsa se desboca em mentiras.
⁶ O escarnecedor busca sabedoria e não acha nenhuma, para o prudente, porém, o conhecimento é fácil.
⁷ Vai-te de diante do homem insensato, porque nele não acharás lábios de conhecimento.
⁸ A sabedoria do prudente é entender o seu caminho, mas a estultícia dos insensatos é engano.
⁹ Os insensatos zombam do pecado, mas entre os retos há benevolência.
¹⁰ O coração conhece a sua própria amargura, e o estranho não participará no íntimo da sua alegria.
¹¹ A casa dos ímpios se desfará, mas a tenda dos retos florescerá.
¹² Há um caminho que ao homem parece direito, mas o fim dele são os caminhos da morte.
¹³ Até no riso o coração sente dor e o fim da alegria é tristeza.
¹⁴ O que no seu coração comete deslize, se enfada dos seus caminhos, mas o homem bom fica satisfeito com o seu proceder.
¹⁵ O simples dá crédito a cada palavra, mas o prudente atenta para os seus passos.
¹⁶ O sábio teme, e desvia-se do mal, mas o tolo se encoleriza, e dá-se por seguro.
¹⁷ O que se indigna à toa fará doidices, e o homem de maus intentos será odiado.
¹⁸ Os simples herdarão a estultícia, mas os prudentes serão coroados de conhecimento.
¹⁹ Os maus inclinam-se diante dos bons, e os ímpios diante das portas dos justos.
²⁰ O pobre é odiado até pelo seu próximo, porém os amigos dos ricos são muitos.
²¹ O que despreza ao seu próximo peca, mas o que se compadece dos humildes é bem-aventurado.
²² Porventura não erram os que praticam o mal? Mas beneficência e fidelidade haverá para os que praticam o bem.
²³ Em todo trabalho há proveito, mas ficar só em palavras leva à pobreza.
²⁴ A coroa dos sábios é a sua riqueza, a estultícia dos tolos é só estultícia.
²⁵ A testemunha verdadeira livra as almas, mas o que se desboca em mentiras é enganador.
²⁶ No temor do Senhor há firme confiança e ele será um refúgio para seus filhos.
²⁷ O temor do Senhor é fonte de vida, para desviar dos laços da morte.
²⁸ Na multidão do povo está a glória do rei, mas na falta de povo a ruína do príncipe.
²⁹ O que tarda em irar-se é grande em entendimento, mas o que é de espírito impaciente mostra a sua loucura.
³⁰ O sentimento sadio é vida para o corpo, mas a inveja é podridão para os ossos.
³¹ O que oprime o pobre insulta àquele que o criou, mas o que se compadece do necessitado o honra.
³² Pela sua própria malícia é lançado fora o perverso, mas o justo até na morte se mantém confiante.
³³ No coração do prudente a sabedoria permanece, mas o que está no interior dos tolos se faz conhecido.
³⁴ A justiça exalta os povos, mas o pecado é a vergonha das nações.
³⁵ O rei se alegra no servo prudente, mas sobre o que o envergonha cairá o seu furor.

`,
        get pergunta() {
            return sortear([
                {
                    texto: "O que a mulher sábia faz com a sua casa, em contraste com a insensata?",
                    opcoes: [
                        { numero: 1, texto: "A sábia a edifica, a insensata a derruba com as próprias mãos", correta: true },
                        { numero: 2, texto: "A sábia a vende, a insensata a aluga", correta: false },
                        { numero: 3, texto: "Ambas fazem a mesma coisa", correta: false },
                        { numero: 4, texto: "A sábia a decora, a insensata a limpa", correta: false }
                    ],
                    explicacao: "Provérbios 14:1 - Toda mulher sábia edifica a sua casa; mas a insensata a derruba com as suas mãos.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que há no final de um caminho que ao homem parece direito?",
                    opcoes: [
                        { numero: 1, texto: "Um tesouro escondido", correta: false },
                        { numero: 2, texto: "A glória eterna", correta: false },
                        { numero: 3, texto: "Caminhos de morte", correta: true },
                        { numero: 4, texto: "Uma grande festa", correta: false }
                    ],
                    explicacao: "Provérbios 14:12 - Há um caminho que ao homem parece direito, mas o fim dele são os caminhos da morte.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que a justiça faz com uma nação?",
                    opcoes: [
                        { numero: 1, texto: "A torna perigosa", correta: false },
                        { numero: 2, texto: "A exalta", correta: true },
                        { numero: 3, texto: "A empobrece", correta: false },
                        { numero: 4, texto: "A divide", correta: false }
                    ],
                    explicacao: "Provérbios 14:34 - A justiça exalta as nações, mas o pecado é a vergonha dos povos.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    15: {
        titulo: "A Resposta Branda",
        texto: `¹ A resposta branda desvia o furor, mas a palavra dura suscita a ira.
² A língua dos sábios adorna a sabedoria, mas a boca dos tolos derrama a estultícia.
³ Os olhos do Senhor estão em todo lugar, contemplando os maus e os bons.
⁴ A língua benigna é árvore de vida, mas a perversidade nela deprime o espírito.
⁵ O tolo despreza a instrução de seu pai, mas o que observa a repreensão se haverá prudentemente.
⁶ Na casa do justo há um grande tesouro, mas nos ganhos do ímpio há perturbação.
⁷ Os lábios dos sábios derramam o conhecimento, mas o coração dos tolos não faz assim.
⁸ O sacrifício dos ímpios é abominável ao Senhor, mas a oração dos retos é o seu contentamento.
⁹ O caminho do ímpio é abominável ao Senhor, mas ao que segue a justiça ele ama.
¹⁰ Correção severa há para o que deixa a vereda, e o que odeia a repreensão morrerá.
¹¹ O inferno e a perdição estão perante o Senhor; quanto mais os corações dos filhos dos homens?
¹² O escarnecedor não ama aquele que o repreende, nem se chegará aos sábios.
¹³ O coração alegre aformoseia o rosto, mas pela dor do coração o espírito se abate.
¹⁴ O coração entendido buscará o conhecimento, mas a boca dos tolos se apascentará de estultícia.
¹⁵ Todos os dias do oprimido são maus, mas o coração alegre é um banquete contínuo.
¹⁶ Melhor é o pouco com o temor do Senhor, do que um grande tesouro onde há inquietação.
¹⁷ Melhor é a comida de hortaliça, onde há amor, do que o boi cevado, e com ele o ódio.
¹⁸ O homem iracundo suscita contendas, mas o que tarda em irar-se apaziguará a luta.
¹⁹ O caminho do preguiçoso é cercado de espinhos, mas a vereda dos retos é bem aplanada.
²⁰ O filho sábio alegra seu pai, mas o homem insensato despreza a sua mãe.
²¹ A estultícia é alegria para o que carece de entendimento, mas o homem entendido anda retamente.
²² Quando não há conselhos os planos se dispersam, mas havendo muitos conselheiros eles se firmam.
²³ O homem se alegra em responder bem, e quão boa é a palavra dita a seu tempo!
²⁴ Para o entendido, o caminho da vida leva para cima, para que se desvie do inferno em baixo.
²⁵ O Senhor desarraiga a casa dos soberbos, mas estabelece o termo da viúva.
²⁶ Abomináveis são para o Senhor os pensamentos do mau, mas as palavras dos puros são aprazíveis.
²⁷ O que agir com avareza perturba a sua casa, mas o que odeia presentes viverá.
²⁸ O coração do justo medita no que há de responder, mas a boca dos ímpios jorra coisas más.
²⁹ O Senhor está longe dos ímpios, mas a oração dos justos escutará.
³⁰ A luz dos olhos alegra o coração, a boa notícia fortalece os ossos.
³¹ Os ouvidos que atendem à repreensão da vida farão a sua morada no meio dos sábios.
³² O que rejeita a instrução menospreza a própria alma, mas o que escuta a repreensão adquire entendimento.
³³ O temor do Senhor é a instrução da sabedoria, e precedendo a honra vai a humildade.

 `,
        get pergunta() {
            return sortear([
                {
                    texto: "O que a resposta branda faz com o furor?",
                    opcoes: [
                        { numero: 1, texto: "Aumenta o furor", correta: false },
                        { numero: 2, texto: "Não tem efeito", correta: false },
                        { numero: 3, texto: "Desvia o furor", correta: true },
                        { numero: 4, texto: "Cria mais brigas", correta: false }
                    ],
                    explicacao: "Provérbios 15:1 - A resposta branda desvia o furor, mas a palavra dura suscita a ira.",
                    pontosGanhos: 20
                },
                {
                    texto: "Onde estão os olhos do Senhor?",
                    opcoes: [
                        { numero: 1, texto: "Apenas no céu", correta: false },
                        { numero: 2, texto: "Apenas dentro do templo", correta: false },
                        { numero: 3, texto: "Em todo lugar, contemplando os maus e os bons", correta: true },
                        { numero: 4, texto: "Somente sobre os justos", correta: false }
                    ],
                    explicacao: "Provérbios 15:3 - Os olhos do Senhor estão em todo lugar, contemplando os maus e os bons.",
                    pontosGanhos: 20
                },
                {
                    texto: "Como é o caminho do preguiçoso, em comparação ao do justo?",
                    opcoes: [
                        { numero: 1, texto: "É como uma estrada de asfalto", correta: false },
                        { numero: 2, texto: "É como uma sebe de espinhos", correta: true },
                        { numero: 3, texto: "É uma planície suave", correta: false },
                        { numero: 4, texto: "É um rio calmo", correta: false }
                    ],
                    explicacao: "Provérbios 15:19 - O caminho do preguiçoso é como a sebe de espinhos, mas a vereda dos retos é bem aplanada.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    // js/livros/proverbios.js (Capítulos 16-20)

    16: {
        titulo: "A Soberania e o Plano de Deus",
        texto: ` ¹ Do homem são as preparações do coração, mas do Senhor a resposta da língua.
² Todos os caminhos do homem são puros aos seus olhos, mas o Senhor pesa o espírito.
³ Confia ao Senhor as tuas obras, e teus pensamentos serão estabelecidos.
⁴ O Senhor fez todas as coisas para atender aos seus próprios desígnios, até o ímpio para o dia do mal.
⁵ Abominação é ao Senhor todo o altivo de coração; não ficará impune mesmo de mãos postas.
⁶ Pela misericórdia e verdade a iniquidade é perdoada, e pelo temor do Senhor os homens se desviam do pecado.
⁷ Sendo os caminhos do homem agradáveis ao Senhor, até a seus inimigos faz que tenham paz com ele.
⁸ Melhor é o pouco com justiça, do que a abundância de bens com injustiça.
⁹ O coração do homem planeja o seu caminho, mas o Senhor lhe dirige os passos.
¹⁰ Nos lábios do rei se acha a sentença divina; a sua boca não transgride quando julga.
¹¹ O peso e a balança justos são do Senhor; obra sua são os pesos da bolsa.
¹² Abominação é aos reis praticarem impiedade, porque com justiça é que se estabelece o trono.
¹³ Os lábios de justiça são o contentamento dos reis; eles amarão o que fala coisas retas.
¹⁴ O furor do rei é mensageiro da morte, mas o homem sábio o apaziguará.
¹⁵ No semblante iluminado do rei está a vida, e a sua benevolência é como a nuvem da chuva serôdia.
¹⁶ Quão melhor é adquirir a sabedoria do que o ouro! E quão mais excelente é adquirir a prudência do que a prata!
¹⁷ Os retos fazem o seu caminho desviar-se do mal; o que guarda o seu caminho preserva a sua alma.
¹⁸ A soberba precede a ruína, e a altivez do espírito precede a queda.
¹⁹ Melhor é ser humilde de espírito com os mansos, do que repartir o despojo com os soberbos.
²⁰ O que atenta prudentemente para o assunto achará o bem, e o que confia no Senhor será bem-aventurado.
²¹ O sábio de coração será chamado prudente, e a doçura dos lábios aumentará o ensino.
²² O entendimento para aqueles que o possuem, é uma fonte de vida, mas a instrução dos tolos é a sua estultícia.
²³ O coração do sábio instrui a sua boca, e aumenta o ensino dos seus lábios.
²⁴ As palavras suaves são favos de mel, doces para a alma, e saúde para os ossos.
²⁵ Há um caminho que parece direito ao homem, mas o seu fim são os caminhos da morte.
²⁶ A alma daquele que trabalha, trabalha para si mesmo, porque a sua boca o incita.
²⁷ O homem ímpio cava o mal, e nos seus lábios há como que uma fogueira.
²⁸ O homem perverso instiga a contenda, e o intrigante separa os maiores amigos.
²⁹ O homem violento coage o seu próximo, e o faz deslizar por caminhos nada bons.
³⁰ O que fecha os olhos para imaginar coisas ruins, ao cerrar os lábios pratica o mal.
³¹ Coroa de honra são os cabelos brancos, quando eles estão no caminho da justiça.
³² Melhor é o que tarda em irar-se do que o poderoso, e o que controla o seu ânimo do que aquele que toma uma cidade.
³³ A sorte se lança no regaço, mas do Senhor procede toda a determinação.

`,
        get pergunta() {
            return sortear([
                {
                    texto: "O que precede a ruína e a queda, segundo o capítulo 16?",
                    opcoes: [
                        { numero: 1, texto: "A pobreza e a fome", correta: false },
                        { numero: 2, texto: "A soberba e a altivez de espírito", correta: true },
                        { numero: 3, texto: "A falta de amigos", correta: false },
                        { numero: 4, texto: "O excesso de trabalho", correta: false }
                    ],
                    explicacao: "Provérbios 16:18 - A soberba precede a destruição, e a altivez do espírito precede a queda.",
                    pontosGanhos: 20
                },
                {
                    texto: "A quem pertence a última resposta da língua, embora o homem faça planos?",
                    opcoes: [
                        { numero: 1, texto: "Ao próprio homem", correta: false },
                        { numero: 2, texto: "Aos seus conselheiros", correta: false },
                        { numero: 3, texto: "Ao Senhor", correta: true },
                        { numero: 4, texto: "Ao destino", correta: false }
                    ],
                    explicacao: "Provérbios 16:1 - Do homem são as preparações do coração, mas do Senhor a resposta da língua.",
                    pontosGanhos: 20
                },
                {
                    texto: "Como são descritas as palavras suaves no capítulo 16?",
                    opcoes: [
                        { numero: 1, texto: "Como vento que passa", correta: false },
                        { numero: 2, texto: "Como um fardo pesado", correta: false },
                        { numero: 3, texto: "Como fumaça nos olhos", correta: false },
                        { numero: 4, texto: "Como favos de mel, doces para a alma e saúde para os ossos", correta: true }
                    ],
                    explicacao: "Provérbios 16:24 - As palavras suaves são favos de mel, doces para a alma, e saúde para os ossos.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    17: {
        titulo: "Provas e Relacionamentos",
        texto: ` ¹ É melhor um bocado seco, e com ele a tranquilidade, do que a casa cheia de iguarias e com desavença.
² O servo prudente dominará sobre o filho que faz envergonhar; e repartirá a herança entre os irmãos.
³ O crisol é para a prata, e o forno para o ouro; mas o Senhor é quem prova os corações.
⁴ O ímpio atenta para o lábio iníquo, o mentiroso inclina os ouvidos à língua maligna.
⁵ O que escarnece do pobre insulta ao seu Criador, o que se alegra da calamidade não ficará impune.
⁶ A coroa dos velhos são os filhos dos filhos; e a glória dos filhos são seus pais.
⁷ Não convém ao tolo a fala excelente; quanto menos ao príncipe, o lábio mentiroso.
⁸ O presente é, aos olhos dos que o recebem, como pedra preciosa; para onde quer que se volte servirá de proveito.
⁹ Aquele que encobre a transgressão busca a amizade, mas o que revolve o assunto separa os maiores amigos.
¹⁰ A repreensão penetra mais profundamente no prudente do que cem açoites no tolo.
¹¹ Na verdade o rebelde não busca senão o mal; afinal, um mensageiro cruel será enviado contra ele.
¹² Encontre-se o homem com a ursa roubada dos filhos, mas não com o louco na sua estultícia.
¹³ Quanto àquele que paga o bem com o mal, não se apartará o mal da sua casa.
¹⁴ Como o soltar das águas é o início da contenda, assim, antes que sejas envolvido afasta-te da questão.
¹⁵ O que justifica o ímpio, e o que condena o justo, tanto um como o outro são abomináveis ao Senhor.
¹⁶ De que serviria o preço na mão do tolo para comprar sabedoria, visto que não tem entendimento?
¹⁷ Em todo o tempo ama o amigo e para a hora da angústia nasce o irmão.
¹⁸ O homem falto de entendimento compromete-se, ficando por fiador na presença do seu amigo.
¹⁹ O que ama a transgressão ama a contenda; o que exalta a sua porta busca a ruína.
²⁰ O perverso de coração jamais achará o bem; e o que tem a língua dobre vem a cair no mal.
²¹ O que gera um tolo para a sua tristeza o faz; e o pai do insensato não tem alegria.
²² O coração alegre é como o bom remédio, mas o espírito abatido seca até os ossos.
²³ O ímpio toma presentes em secreto para perverter as veredas da justiça.
²⁴ No rosto do entendido se vê a sabedoria, mas os olhos do tolo vagam pelas extremidades da terra.
²⁵ O filho insensato é tristeza para seu pai, e amargura para aquela que o deu à luz.
²⁶ Também não é bom punir o justo, nem tampouco ferir aos príncipes por equidade.
²⁷ O que possui o conhecimento guarda as suas palavras, e o homem de entendimento é de precioso espírito.
²⁸ Até o tolo, quando se cala, é reputado por sábio; e o que cerra os seus lábios é tido por entendido.
`,
        get pergunta() {
            return sortear([
                {
                    texto: "O que o amigo faz em todo o tempo, segundo Provérbios 17?",
                    opcoes: [
                        { numero: 1, texto: "Em todo o tempo ama o amigo", correta: true },
                        { numero: 2, texto: "Pede favores constantes", correta: false },
                        { numero: 3, texto: "Dá conselhos apenas quando solicitado", correta: false },
                        { numero: 4, texto: "Aparece apenas nas festas", correta: false }
                    ],
                    explicacao: "Provérbios 17:17 - Em todo o tempo ama o amigo e para a hora da angústia nasce o irmão.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que o coração alegre faz ao corpo, em contraste com o espírito abatido?",
                    opcoes: [
                        { numero: 1, texto: "O coração alegre traz cansaço", correta: false },
                        { numero: 2, texto: "O coração alegre serve de bom remédio, mas o espírito abatido seca os ossos", correta: true },
                        { numero: 3, texto: "O coração alegre não faz diferença", correta: false },
                        { numero: 4, texto: "O coração alegre enfraquece a mente", correta: false }
                    ],
                    explicacao: "Provérbios 17:22 - O coração alegre serve de bom remédio, mas o espírito abatido seca os ossos.",
                    pontosGanhos: 20
                },
                {
                    texto: "Até o tolo pode ser passado por sábio se fizer o quê?",
                    opcoes: [
                        { numero: 1, texto: "Se usar roupas bonitas", correta: false },
                        { numero: 2, texto: "Se tiver muito dinheiro", correta: false },
                        { numero: 3, texto: "Se se calar", correta: true },
                        { numero: 4, texto: "Se viajar para longe", correta: false }
                    ],
                    explicacao: "Provérbios 17:28 - Até o tolo, quando se cala, é reputado por sábio; e o que cerra os seus lábios é tido por entendido.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    18: {
        titulo: "Palavras e Sabedoria",
        texto: ` ¹ Busca satisfazer seu próprio desejo aquele que se isola; ele se insurge contra toda sabedoria.
² O tolo não tem prazer na sabedoria, mas só em que se manifeste aquilo que agrada o seu coração.
³ Vindo o ímpio, vem também o desprezo, e com a ignomínia a vergonha.
⁴ Águas profundas são as palavras da boca do homem, e ribeiro transbordante é a fonte da sabedoria.
⁵ Não é bom favorecer o ímpio, e com isso, fazer o justo perder a questão.
⁶ Os lábios do tolo entram na contenda, e a sua boca brada por açoites.
⁷ A boca do tolo é a sua própria destruição, e os seus lábios um laço para a sua alma.
⁸ As palavras do intrigante são como feridas; elas descem ao íntimo do ventre.
⁹ O que é negligente na sua obra é também irmão de um grande desperdiçador.
¹⁰ Torre forte é o nome do Senhor; a ela correrá o justo, e estará em alto refúgio.
¹¹ Os bens do rico são a sua cidade forte, e como uma alta muralha na sua imaginação.
¹² O coração do homem se exalta antes de ser abatido e diante da honra vai a humildade.
¹³ O que responde antes de ouvir comete estultícia que é para vergonha sua.
¹⁴ O espírito do homem susterá a sua enfermidade, mas ao espírito abatido, quem o suportará?
¹⁵ O coração do entendido adquire o conhecimento, e o ouvido dos sábios busca a sabedoria.
¹⁶ Com presentes o homem alarga o seu caminho e o leva diante dos grandes.
¹⁷ O que pleiteia por algo, a princípio parece justo, porém vem o seu próximo e o examina.
¹⁸ A sorte faz cessar os pleitos, e faz separação entre os poderosos.
¹⁹ O irmão ofendido é mais difícil de conquistar do que uma cidade forte; e as contendas são como os ferrolhos de um palácio.
²⁰ Do fruto da boca de cada um se fartará o seu ventre; dos renovos dos seus lábios ficará satisfeito.
²¹ A morte e a vida estão no poder da língua; e aquele que a ama comerá do seu fruto.
²² Aquele que encontra uma esposa, acha o bem, e alcança a benevolência do Senhor.
²³ O pobre fala com rogos, mas o rico responde com dureza.
²⁴ O homem de muitos amigos deve mostrar-se amigável, mas há um amigo mais chegado do que um irmão.

`,
        get pergunta() {
            return sortear([
                {
                    texto: "O que está no poder da língua, podendo trazer vida ou morte?",
                    opcoes: [
                        { numero: 1, texto: "A morte e a vida", correta: true },
                        { numero: 2, texto: "O sabor dos alimentos", correta: false },
                        { numero: 3, texto: "A força física", correta: false },
                        { numero: 4, texto: "Apenas o som", correta: false }
                    ],
                    explicacao: "Provérbios 18:21 - A morte e a vida estão no poder da língua; e aquele que a ama comerá do seu fruto.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que o homem que quer amigos deve fazer?",
                    opcoes: [
                        { numero: 1, texto: "Deve dar muitos presentes", correta: false },
                        { numero: 2, texto: "Deve mostrar-se amigável", correta: true },
                        { numero: 3, texto: "Deve morar sozinho", correta: false },
                        { numero: 4, texto: "Deve ser muito sério", correta: false }
                    ],
                    explicacao: "Provérbios 18:24 - O homem de muitos amigos deve mostrar-se amigável, mas há um amigo mais chegado do que um irmão.",
                    pontosGanhos: 20
                },
                {
                    texto: "A que é comparado o nome do Senhor no capítulo 18?",
                    opcoes: [
                        { numero: 1, texto: "A um jardim secreto", correta: false },
                        { numero: 2, texto: "A um mar calmo", correta: false },
                        { numero: 3, texto: "A uma torre forte", correta: true },
                        { numero: 4, texto: "A uma nuvem passageira", correta: false }
                    ],
                    explicacao: "Provérbios 18:10 - Torre forte é o nome do Senhor; a ela correrá o justo, e estará em alto refúgio.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    19: {
        titulo: "Instrução e Prudência",
        texto: ` ¹ Melhor é o pobre que anda na sua integridade do que o perverso de lábios e tolo.
² Assim como não é bom ficar a alma sem conhecimento, peca aquele que se apressa com seus pés.
³ A estultícia do homem perverterá o seu caminho, e o seu coração se irará contra o Senhor.
⁴ As riquezas granjeiam muitos amigos, mas ao pobre, o seu próprio amigo o deixa.
⁵ A falsa testemunha não ficará impune e o que respira mentiras não escapará.
⁶ Muitos se deixam acomodar pelos favores do príncipe, e cada um é amigo daquele que dá presentes.
⁷ Todos os irmãos do pobre o odeiam; quanto mais se afastarão dele os seus amigos! Corre após eles com palavras, que não servem de nada.
⁸ O que adquire entendimento ama a sua alma; o que cultiva a inteligência achará o bem.
⁹ A falsa testemunha não ficará impune; e o que profere mentiras perecerá.
¹⁰ Ao tolo não é certo gozar de deleites; quanto menos ao servo dominar sobre os príncipes!
¹¹ A prudência do homem faz reter a sua ira, e é glória sua o passar por cima da transgressão.
¹² Como o rugido do leão jovem é a indignação do rei, mas como o orvalho sobre a relva é a sua benevolência.
¹³ O filho insensato é uma desgraça para o pai, e um gotejar contínuo as contendas da mulher.
¹⁴ A casa e os bens são herança dos pais; porém do Senhor vem a esposa prudente.
¹⁵ A preguiça faz cair em profundo sono, e a alma indolente padecerá fome.
¹⁶ O que guardar o mandamento guardará a sua alma; porém o que desprezar os seus caminhos morrerá.
¹⁷ Ao Senhor empresta o que se compadece do pobre, ele lhe pagará o seu benefício.
¹⁸ Castiga o teu filho enquanto há esperança, mas não deixes que o teu ânimo se exalte até o matar.
¹⁹ O homem de grande indignação deve sofrer o dano; porque se tu o livrares ainda terás de tornar a fazê-lo.
²⁰ Ouve o conselho, e recebe a correção, para que no fim sejas sábio.
²¹ Muitos propósitos há no coração do homem, porém o conselho do Senhor permanecerá.
²² O que o homem mais deseja é o que lhe faz bem; porém é melhor ser pobre do que mentiroso.
²³ O temor do Senhor encaminha para a vida; aquele que o tem ficará satisfeito, e não o visitará mal nenhum.
²⁴ O preguiçoso esconde a sua mão ao seio; e não tem disposição nem de torná-la à sua boca.
²⁵ Açoita o escarnecedor, e o simples tomará aviso; repreende ao entendido, e aprenderá conhecimento.
²⁶ O que aflige o seu pai, ou manda embora sua mãe, é filho que traz vergonha e desonra.
²⁷ Filho meu, ouvindo a instrução, cessa de te desviares das palavras do conhecimento.
²⁸ A testemunha ímpia escarnece do juízo, e a boca dos perversos devora a iniquidade.
²⁹ Preparados estão os juízos para os escarnecedores, e os açoites para as costas dos tolos.
`,
        get pergunta() {
            return sortear([
                {
                    texto: "O que acontece com aquele que se compadece do pobre?",
                    opcoes: [
                        { numero: 1, texto: "Perde o seu dinheiro", correta: false },
                        { numero: 2, texto: "Empresta ao Senhor, que lhe pagará o seu benefício", correta: true },
                        { numero: 3, texto: "Fica pobre também", correta: false },
                        { numero: 4, texto: "É ignorado por Deus", correta: false }
                    ],
                    explicacao: "Provérbios 19:17 - Ao Senhor empresta o que se compadece do pobre, e ele lhe pagará o seu benefício.",
                    pontosGanhos: 20
                },
                {
                    texto: "De quem vem a mulher prudente, embora a casa e os bens venham dos pais?",
                    opcoes: [
                        { numero: 1, texto: "Vem do próprio esforço do homem", correta: false },
                        { numero: 2, texto: "Vem da sorte", correta: false },
                        { numero: 3, texto: "Vem do Senhor", correta: true },
                        { numero: 4, texto: "Vem de outros reinos", correta: false }
                    ],
                    explicacao: "Provérbios 19:14 - A casa e os bens são herança dos pais; mas do Senhor vem a mulher prudente.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que a preguiça faz cair sobre o homem?",
                    opcoes: [
                        { numero: 1, texto: "Faz cair em profundo sono e a alma negligente padecerá fome", correta: true },
                        { numero: 2, texto: "Faz cair muita chuva", correta: false },
                        { numero: 3, texto: "Traz descanso para os ossos", correta: false },
                        { numero: 4, texto: "Traz visões do futuro", correta: false }
                    ],
                    explicacao: "Provérbios 19:15 - A preguiça faz cair em profundo sono, e a alma negligente padecerá fome.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    20: {
        titulo: "A Conduta Justa",
        texto: `¹ O vinho é escarnecedor, a bebida forte alvoroçadora; e todo aquele que neles errar nunca será sábio.
² Como o rugido do leão é o terror do rei; o que o provoca à ira peca contra a sua própria alma.
³ Honroso é para o homem desviar-se de questões, mas todo tolo é intrometido.
⁴ O preguiçoso não lavrará por causa do inverno, pelo que mendigará na sega, mas nada receberá.
⁵ Como as águas profundas é o conselho no coração do homem; mas o homem de inteligência o trará para fora.
⁶ A multidão dos homens apregoa a sua própria bondade, porém o homem fidedigno quem o achará?
⁷ O justo anda na sua sinceridade; bem-aventurados serão os seus filhos depois dele.
⁸ Assentando-se o rei no trono do juízo, com os seus olhos dissipa todo o mal.
⁹ Quem poderá dizer: Purifiquei o meu coração, limpo estou de meu pecado?
¹⁰ Dois pesos diferentes e duas espécies de medida são abominação ao Senhor, tanto um como outro.
¹¹ Até a criança se dará a conhecer pelas suas ações, se a sua obra é pura e reta.
¹² O ouvido que ouve, e o olho que vê, o Senhor os fez a ambos.
¹³ Não ames o sono, para que não empobreças; abre os teus olhos, e te fartarás de pão.
¹⁴ Nada vale, nada vale, dirá o comprador, mas, indo-se, então se gabará.
¹⁵ Há ouro e abundância de rubis, mas os lábios do conhecimento são joia preciosa.
¹⁶ Ficando alguém por fiador de um estranho, tome-se-lhe a roupa; e por penhor àquele que se obriga pela mulher estranha.
¹⁷ Suave é ao homem o pão da mentira, mas depois a sua boca se encherá de cascalho.
¹⁸ Cada pensamento se confirma com conselho e com bons conselhos se faz a guerra.
¹⁹ O que anda tagarelando revela o segredo; não te intrometas com o que lisonjeia com os seus lábios.
²⁰ O que amaldiçoa seu pai ou sua mãe, apagar-se-á a sua lâmpada em negras trevas.
²¹ A herança que no princípio é adquirida às pressas, no fim não será abençoada.
²² Não digas: Vingar-me-ei do mal; espera pelo Senhor, e ele te livrará.
²³ Pesos diferentes são abomináveis ao Senhor, e balança enganosa não é boa.
²⁴ Os passos do homem são dirigidos pelo Senhor; como, pois, entenderá o homem o seu caminho?
²⁵ Laço é para o homem apropriar-se do que é santo, e só refletir depois de feitos os votos.
²⁶ O rei sábio dispersa os ímpios e faz passar sobre eles a roda.
²⁷ O espírito do homem é a lâmpada do Senhor, que esquadrinha todo o interior até o mais íntimo do ventre.
²⁸ Benignidade e verdade guardam ao rei, e com benignidade sustém ele o seu trono.
²⁹ A glória do jovem é a sua força; e a beleza dos velhos são os cabelos brancos.
³⁰ Os vergões das feridas são a purificação dos maus, como também as pancadas que penetram até o mais íntimo do ventre.

 `,
        get pergunta() {
            return sortear([
                {
                    texto: "Como é descrito o vinho e a bebida forte no início do capítulo 20?",
                    opcoes: [
                        { numero: 1, texto: "O vinho é escarnecedor, a bebida forte alvoroçadora; e todo aquele que neles errar não e sábio", correta: true },
                        { numero: 2, texto: "São essenciais para a alegria", correta: false },
                        { numero: 3, texto: "São proibidos apenas aos domingos", correta: false },
                        { numero: 4, texto: "São remédios para o corpo", correta: false }
                    ],
                    explicacao: "Provérbios 20:1 - O vinho é escarnecedor, a bebida forte alvoroçadora; e todo aquele que neles errar não e sábio.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que o preguiçoso não faz por causa do inverno (frio)?",
                    opcoes: [
                        { numero: 1, texto: "Não viaja", correta: false },
                        { numero: 2, texto: "Não dorme", correta: false },
                        { numero: 3, texto: "Não lavra (não planta)", correta: true },
                        { numero: 4, texto: "Não toma banho", correta: false }
                    ],
                    explicacao: "Provérbios 20:4 - O preguiçoso não lavra por causa do inverno; pelo que mendigará na sega, e nada receberá.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que é a lâmpada do Senhor, que esquadrinha todo o interior do coração?",
                    opcoes: [
                        { numero: 1, texto: "O espírito do homem", correta: true },
                        { numero: 2, texto: "A luz do sol", correta: false },
                        { numero: 3, texto: "As leis escritas", correta: false },
                        { numero: 4, texto: "O ouro puro", correta: false }
                    ],
                    explicacao: "Provérbios 20:27 - A lâmpada do Senhor é o espírito do homem, que esquadrinha todo o interior do coração.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    // js/livros/proverbios.js (Capítulos 21-25)

    21: {
        titulo: "A Justiça e o Coração",
        texto: ` ¹ Como ribeiros de águas assim é o coração do rei na mão do Senhor, que o inclina a todo o seu querer.
² Todo caminho do homem é reto aos seus olhos, mas o Senhor sonda os corações.
³ Fazer justiça e juízo é mais aceitável ao Senhor do que sacrifício.
⁴ Os olhos altivos, o coração orgulhoso e a lavoura dos ímpios é pecado.
⁵ Os pensamentos do diligente tendem só para a abundância, porém os de todo apressado, tão somente para a pobreza.
⁶ Trabalhar com língua falsa para ajuntar tesouros é vaidade que conduz aqueles que buscam a morte.
⁷ As rapinas dos ímpios os destruirão, porquanto se recusam a fazer justiça.
⁸ O caminho do homem é todo perverso e estranho, porém a obra do homem puro é reta.
⁹ É melhor morar num canto de telhado do que ter como companheira em casa ampla uma mulher briguenta.
¹⁰ A alma do ímpio deseja o mal; o seu próximo não agrada aos seus olhos.
¹¹ Quando o escarnecedor é castigado, o simples torna-se sábio; e o sábio quando é instruído recebe o conhecimento.
¹² O justo considera com prudência a casa do ímpio; mas Deus destrói os ímpios por causa dos seus males.
¹³ O que tapa o seu ouvido ao clamor do pobre, ele mesmo também clamará e não será ouvido.
¹⁴ O presente dado em segredo aplaca a ira, e a dádiva no regaço põe fim à maior indignação.
¹⁵ O fazer justiça é alegria para o justo, mas destruição para os que praticam a iniquidade.
¹⁶ O homem que anda desviado do caminho do entendimento, na congregação dos mortos repousará.
¹⁷ O que ama os prazeres padecerá necessidade; o que ama o vinho e o azeite nunca enriquecerá.
¹⁸ O resgate do justo é o ímpio; o do honrado é o perverso.
¹⁹ É melhor morar numa terra deserta do que com a mulher rixosa e irritadiça.
²⁰ Tesouro desejável e azeite há na casa do sábio, mas o homem insensato os esgota.
²¹ O que segue a justiça e a beneficência achará a vida, a justiça e a honra.
²² O sábio escala a cidade do poderoso e derruba a força da sua confiança.
²³ O que guarda a sua boca e a sua língua guarda a sua alma das angústias.
²⁴ O soberbo e presumido, zombador é o seu nome, trata com indignação e soberba.
²⁵ O desejo do preguiçoso o mata, porque as suas mãos recusam trabalhar.
²⁶ O cobiçoso cobiça o dia todo, mas o justo dá, e nada retém.
²⁷ O sacrifício dos ímpios já é abominação; quanto mais oferecendo-o com má intenção!
²⁸ A falsa testemunha perecerá, porém o homem que dá ouvidos falará sempre.
²⁹ O homem ímpio endurece o seu rosto; mas o reto considera o seu caminho.
³⁰ Não há sabedoria, nem inteligência, nem conselho contra o Senhor.
³¹ Prepara-se o cavalo para o dia da batalha, porém do Senhor vem a vitória.

`,
        get pergunta() {
            return sortear([
                {
                    texto: "Como é o coração do rei nas mãos do Senhor?",
                    opcoes: [
                        { numero: 1, texto: "Como uma rocha inabalável", correta: false },
                        { numero: 2, texto: "Como ribeiros de águas, que Ele inclina para onde quer", correta: true },
                        { numero: 3, texto: "Como o sol que brilha para todos", correta: false },
                        { numero: 4, texto: "Como um livro aberto", correta: false }
                    ],
                    explicacao: "Provérbios 21:1 - Como ribeiros de águas assim é o coração do rei na mão do Senhor; a tudo quanto quer o inclina.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que o Senhor prefere mais do que os sacrifícios?",
                    opcoes: [
                        { numero: 1, texto: "Fazer justiça e juízo", correta: true },
                        { numero: 2, texto: "Construir templos altos", correta: false },
                        { numero: 3, texto: "Cantar hinos de vitória", correta: false },
                        { numero: 4, texto: "Jejuar por muitos dias", correta: false }
                    ],
                    explicacao: "Provérbios 21:3 - Fazer justiça e juízo é mais aceitável ao Senhor do que sacrifício.",
                    pontosGanhos: 20
                },
                {
                    texto: "Melhor é morar num canto do eirado (telhado) do que com quem?",
                    opcoes: [
                        { numero: 1, texto: "Com um exército inimigo", correta: false },
                        { numero: 2, texto: "Em uma cidade deserta", correta: false },
                        { numero: 3, texto: "Com uma mulher rixosa em casa ampla", correta: true },
                        { numero: 4, texto: "Em um calabouço escuro", correta: false }
                    ],
                    explicacao: "Provérbios 21:9 - Melhor é morar num canto do eirado, do que com a mulher rixosa em casa ampla.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    22: {
        titulo: "O Bom Nome e a Instrução",
        texto: ` ¹ Vale mais ter um bom nome do que muitas riquezas; e o ser estimado é melhor do que a riqueza e o ouro.
² O rico e o pobre se encontram; a todos o Senhor os fez.
³ O prudente prevê o mal, e esconde-se; mas os simples passam e acabam pagando.
⁴ O galardão da humildade e o temor do Senhor são riquezas, honra e vida.
⁵ Espinhos e laços há no caminho do perverso; o que guarda a sua alma retira-se para longe dele.
⁶ Educa a criança no caminho em que deve andar; e até quando envelhecer não se desviará dele.
⁷ O rico domina sobre os pobres e o que toma emprestado é servo do que empresta.
⁸ O que semear a perversidade segará males; e com a vara da sua própria indignação será extinto.
⁹ O que vê com bons olhos será abençoado, porque dá do seu pão ao pobre.
¹⁰ Lança fora o escarnecedor, e se irá a contenda; e acabará a questão e a vergonha.
¹¹ O que ama a pureza de coração, e é amável de lábios, será amigo do rei.
¹² Os olhos do Senhor conservam o conhecimento, mas as palavras do iníquo ele transtornará.
¹³ Diz o preguiçoso: Um leão está lá fora; serei morto no meio das ruas.
¹⁴ Cova profunda é a boca das mulheres estranhas; aquele contra quem o Senhor se irar, cairá nela.
¹⁵ A estultícia está ligada ao coração da criança, mas a vara da correção a afugentará dela.
¹⁶ O que oprime ao pobre para se engrandecer a si mesmo, ou o que dá ao rico, certamente empobrecerá.
¹⁷ Inclina o teu ouvido e ouve as palavras dos sábios, e aplica o teu coração ao meu conhecimento.
¹⁸ Porque te será agradável se as guardares no teu íntimo, se aplicares todas elas aos teus lábios.
¹⁹ Para que a tua confiança esteja no Senhor, faço-te sabê-las hoje, a ti mesmo.
²⁰ Porventura não te escrevi excelentes coisas, acerca de todo conselho e conhecimento,
²¹ Para fazer-te saber a certeza das palavras da verdade, e assim possas responder palavras de verdade aos que te consultarem?
²² Não roubes ao pobre, porque é pobre, nem atropeles na porta o aflito;
²³ Porque o Senhor defenderá a sua causa em juízo, e aos que os roubam ele lhes tirará a vida.
²⁴ Não sejas companheiro do homem briguento nem andes com o colérico,
²⁵ Para que não aprendas as suas veredas, e tomes um laço para a tua alma.
²⁶ Não estejas entre os que se comprometem, e entre os que ficam por fiadores de dívidas,
²⁷ Pois se não tens com que pagar, deixarias que te tirassem até a tua cama de debaixo de ti?
²⁸ Não removas os antigos limites que teus pais fizeram.
²⁹ Viste o homem diligente na sua obra? Perante reis será posto; não permanecerá entre os de posição inferior.

`,
        get pergunta() {
            return sortear([
                {
                    texto: "O que deve ser mais escolhido do que as muitas riquezas?",
                    opcoes: [
                        { numero: 1, texto: "O bom nome", correta: true },
                        { numero: 2, texto: "A força física", correta: false },
                        { numero: 3, texto: "O poder político", correta: false },
                        { numero: 4, texto: "A inteligência lógica", correta: false }
                    ],
                    explicacao: "Provérbios 22:1 - Vale mais ter um bom nome do que muitas riquezas; e o ser estimado é melhor do que a prata e o ouro.",
                    pontosGanhos: 20
                },
                {
                    texto: "Qual é a famosa promessa sobre instruir a criança no caminho em que deve andar?",
                    opcoes: [
                        { numero: 1, texto: "Ela será rica no futuro", correta: false },
                        { numero: 2, texto: "Ela nunca terá problemas", correta: false },
                        { numero: 3, texto: "Até quando envelhecer não se desviará dele", correta: true },
                        { numero: 4, texto: "Ela será amada por todos", correta: false }
                    ],
                    explicacao: "Provérbios 22:6 - Instrua a criança no caminho em que deve andar, e até quando envelhecer não se desviará dele.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que o homem diligente na sua obra terá como recompensa?",
                    opcoes: [
                        { numero: 1, texto: "Poderá dormir o dia todo", correta: false },
                        { numero: 2, texto: "Estará perante os reis", correta: true },
                        { numero: 3, texto: "Não precisará mais trabalhar", correta: false },
                        { numero: 4, texto: "Fará apenas o que deseja", correta: false }
                    ],
                    explicacao: "Provérbios 22:29 - Viste o homem diligente na sua obra? Perante reis será posto; não será posto perante os de baixa sorte.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    23: {
        titulo: "Preceitos de Sabedoria",
        texto: ` ¹ Quando te assentares a comer com um governador, atenta bem para o que é posto diante de ti,
² E se és homem de grande apetite, põe uma faca à tua garganta.
³ Não cobices as suas iguarias porque são comidas enganosas.
⁴ Não te fatigues para enriqueceres; e não apliques nisso a tua sabedoria.
⁵ Porventura fixarás os teus olhos naquilo que não é nada? Porque certamente criará asas e voará ao céu como a águia.
⁶ Não comas o pão daquele que tem o olhar maligno, nem cobices as suas iguarias gostosas.
⁷ Porque, como imaginou no seu coração, assim é ele. Come e bebe, te disse ele; porém o seu coração não está contigo.
⁸ Vomitarás o bocado que comeste, e perderás as tuas suaves palavras.
⁹ Não fales ao ouvido do tolo, porque desprezará a sabedoria das tuas palavras.
¹⁰ Não removas os limites antigos nem entres nos campos dos órfãos,
¹¹ Porque o seu redentor é poderoso; e pleiteará a causa deles contra ti.
¹² Aplica o teu coração à instrução e os teus ouvidos às palavras do conhecimento.
¹³ Não retires a disciplina da criança; pois se a fustigares com a vara, nem por isso morrerá.
¹⁴ Tu a fustigarás com a vara, e livrarás a sua alma do inferno.
¹⁵ Filho meu, se o teu coração for sábio, alegrar-se-á o meu coração, sim, o meu próprio.
¹⁶ E exultarão as minhas entranhas, quando os teus lábios falarem coisas retas.
¹⁷ O teu coração não inveje os pecadores; antes permanece no temor do Senhor todo dia.
¹⁸ Porque certamente acabará bem; não será malograda a tua esperança.
¹⁹ Ouve tu, filho meu, e sê sábio, e dirige no caminho o teu coração.
²⁰ Não estejas entre os beberrões de vinho, nem entre os comilões de carne.
²¹ Porque o beberrão e o comilão acabarão na pobreza; e a sonolência os faz vestir-se de trapos.
²² Ouve teu pai, que te gerou, e não desprezes tua mãe, quando vier a envelhecer.
²³ Compra a verdade, e não a vendas; e também a sabedoria, a instrução e o entendimento.
²⁴ Grandemente se regozijará o pai do justo, e o que gerar um sábio, se alegrará nele.
²⁵ Alegrem-se teu pai e tua mãe, e regozije-se a que te gerou.
²⁶ Dá-me, filho meu, o teu coração, e os teus olhos observem os meus caminhos.
²⁷ Porque cova profunda é a prostituta, e poço estreito a estranha.
²⁸ Pois ela, como um salteador, se põe à espreita, e multiplica entre os homens os iníquos.
²⁹ Para quem são os ais? Para quem os pesares? Para quem as pelejas? Para quem as queixas? Para quem as feridas sem causa? E para quem os olhos vermelhos?
³⁰ Para os que se demoram perto do vinho, para os que andam buscando vinho misturado.
³¹ Não olhes para o vinho quando se mostra vermelho, quando resplandece no copo e se escoa suavemente.
³² No fim, picará como a cobra, e como a víbora morderá.
³³ Os teus olhos olharão para as mulheres estranhas, e o teu coração falará perversidades.
³⁴ E serás como o que se deita no meio do mar, e como o que jaz no topo do mastro.
³⁵ E dirás: Espancaram-me e não me doeu; bateram-me e nem senti; quando despertarei? Aí então beberei outra vez.

`,
        get pergunta() {
            return sortear([
                {
                    texto: "Por que não devemos nos afadigar (cansar excessivamente) para enriquecer?",
                    opcoes: [
                        { numero: 1, texto: "Porque as riquezas criam asas e voam para o céu como a águia", correta: true },
                        { numero: 2, texto: "Porque o dinheiro é ruim", correta: false },
                        { numero: 3, texto: "Porque é proibido ser rico", correta: false },
                        { numero: 4, texto: "Porque trabalhar cansa o corpo", correta: false }
                    ],
                    explicacao: "Provérbios 23:4-5 - Não te afadigues para enriquecer... porque certamente as riquezas criam asas e voam para o céu como a águia.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que o pai do justo sentirá, segundo o capítulo 23?",
                    opcoes: [
                        { numero: 1, texto: "Grande júbilo", correta: true },
                        { numero: 2, texto: "Muita preocupação", correta: false },
                        { numero: 3, texto: "Inveja", correta: false },
                        { numero: 4, texto: "Indiferença", correta: false }
                    ],
                    explicacao: "Provérbios 23:24 - Grande júbilo terá o pai do justo, e o que gerar um sábio, se alegrará nele.",
                    pontosGanhos: 20
                },
                {
                    texto: "A quem se refere a pergunta: 'Para quem são os ais? Para quem as feridas sem causa?'",
                    opcoes: [
                        { numero: 1, texto: "Para os que se demoram perto do vinho", correta: true },
                        { numero: 2, texto: "Para os soldados em guerra", correta: false },
                        { numero: 3, texto: "Para os que trabalham no campo", correta: false },
                        { numero: 4, texto: "Para os que viajam por mar", correta: false }
                    ],
                    explicacao: "Provérbios 23:29-30 - Para quem são os ais? ... Para os que se demoram perto do vinho, para os que vão buscando bebida misturada.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    24: {
        titulo: "A Força da Sabedoria",
        texto: ` ¹ Não tenhas inveja dos homens malignos, nem desejes estar com eles.
² Porque o seu coração medita a rapina, e os seus lábios falam a malícia.
³ Com a sabedoria se edifica a casa, e com o entendimento ela se estabelece;
⁴ E pelo conhecimento se encherão as câmaras com todos os bens preciosos e agradáveis.
⁵ O homem sábio é forte, e o homem de conhecimento consolida a força.
⁶ Com conselhos prudentes tu farás a guerra; e há vitória na multidão dos conselheiros.
⁷ A sabedoria é demasiadamente alta para o tolo, na porta não abrirá a sua boca.
⁸ Àquele que cuida em fazer mal, chamá-lo-ão de pessoa danosa.
⁹ O pensamento do tolo é pecado, e abominável aos homens é o escarnecedor.
¹⁰ Se te mostrares fraco no dia da angústia, é que a tua força é pequena.
¹¹ Se tu deixares de livrar os que estão sendo levados para a morte, e aos que estão sendo levados para a matança;
¹² Se disseres: Eis que não o sabemos; porventura não o considerará aquele que pondera os corações? Não o saberá aquele que atenta para a tua alma? Não dará ele ao homem conforme a sua obra?
¹³ Come mel, meu filho, porque é bom; o favo de mel é doce ao teu paladar.
¹⁴ Assim será para a tua alma o conhecimento da sabedoria; se a achares, haverá galardão para ti e não será cortada a tua esperança.
¹⁵ Não armes ciladas contra a habitação do justo, ó ímpio, nem assoles o seu lugar de repouso,
¹⁶ Porque sete vezes cairá o justo, e se levantará; mas os ímpios tropeçarão no mal.
¹⁷ Quando cair o teu inimigo, não te alegres, nem se regozije o teu coração quando ele tropeçar;
¹⁸ Para que, vendo-o o Senhor, seja isso mau aos seus olhos, e desvie dele a sua ira.
¹⁹ Não te indignes por causa dos malfeitores, nem tenhas inveja dos ímpios,
²⁰ Porque o homem maligno não terá galardão, e a lâmpada dos ímpios se apagará.
²¹ Teme ao Senhor, filho meu, e ao rei, e não te ponhas com os que buscam mudanças,
²² Porque de repente se levantará a sua destruição, e a ruína de ambos, quem o sabe?
²³ Também estes são provérbios dos sábios: Ter respeito a pessoas no julgamento não é bom.
²⁴ O que disser ao ímpio: Justo és, os povos o amaldiçoarão, as nações o detestarão.
²⁵ Mas para os que o repreenderem haverá delícias, e sobre eles virá a bênção do bem.
²⁶ Beijados serão os lábios do que responde com palavras retas.
²⁷ Prepara de fora a tua obra, e prepara-a no campo, e então edifica a tua casa.
²⁸ Não sejas testemunha sem causa contra o teu próximo; e não enganes com os teus lábios.
²⁹ Não digas: Como ele me fez a mim, assim o farei eu a ele; pagarei a cada um segundo a sua obra.
³⁰ Passei pelo campo do preguiçoso, e junto à vinha do homem falto de entendimento,
³¹ Eis que estava toda cheia de cardos, e a sua superfície coberta de urtiga, e o seu muro de pedras estava derrubado.
³² O que eu tenho visto, o guardarei no coração, e vendo-o recebi instrução.
³³ Um pouco a dormir, um pouco a cochilar; outro pouco deitado de mãos cruzadas, para dormir,
³⁴ Assim te sobrevirá a tua pobreza como um vagabundo, e a tua necessidade como um homem armado.
`,
        get pergunta() {
            return sortear([
                {
                    texto: "O que acontece se você desfalecer no dia da angústia?",
                    opcoes: [
                        { numero: 1, texto: "A tua força é pequena", correta: true },
                        { numero: 2, texto: "Receberás ajuda imediata", correta: false },
                        { numero: 3, texto: "Deus te dará ouro", correta: false },
                        { numero: 4, texto: "O dia passará rápido", correta: false }
                    ],
                    explicacao: "Provérbios 24:10 - Se te mostrares frouxo no dia da angústia, a tua força é pequena.",
                    pontosGanhos: 20
                },
                {
                    texto: "Quantas vezes o justo cai e se levanta?",
                    opcoes: [
                        { numero: 1, texto: "Cai uma vez e nunca mais", correta: false },
                        { numero: 2, texto: "Cai sete vezes e se levanta", correta: true },
                        { numero: 3, texto: "Nunca cai", correta: false },
                        { numero: 4, texto: "Cai apenas quando é velho", correta: false }
                    ],
                    explicacao: "Provérbios 24:16 - Porque sete vezes cairá o justo, e se levantará; mas os ímpios tropeçarão no mal.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que o salmista viu no campo do preguiçoso e na vinha do homem sem juízo?",
                    opcoes: [
                        { numero: 1, texto: "Estava tudo cheio de espinhos e urtigas", correta: true },
                        { numero: 2, texto: "Estava pronto para a colheita", correta: false },
                        { numero: 3, texto: "Havia muitos trabalhadores", correta: false },
                        { numero: 4, texto: "Havia um grande tesouro", correta: false }
                    ],
                    explicacao: "Provérbios 24:30-31 - Passei pelo campo do preguiçoso... e eis que tudo estava cheio de espinhos, e as urtigas tinham coberto a sua face.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    25: {
        titulo: "Provérbios Transcritos por Ezequias",
        texto: `¹ Também estes são provérbios de Salomão, os quais transcreveram os homens de Ezequias, rei de Judá.
² A glória de Deus está nas coisas encobertas; mas a honra dos reis, está em descobri-las.
³ Os céus, pela altura, e a terra, pela profundidade, assim o coração dos reis é insondável.
⁴ Tira da prata as escórias, e sairá vaso para o fundidor;
⁵ Tira o ímpio da presença do rei, e o seu trono se firmará na justiça.
⁶ Não te glories na presença do rei, nem te ponhas no lugar dos grandes;
⁷ Porque melhor é que te digam: Sobe aqui; do que seres humilhado diante do príncipe que os teus olhos já viram.
⁸ Não te precipites em litigar, para que depois, ao fim, fiques sem ação, quando teu próximo te puser em apuros.
⁹ Pleiteia a tua causa com o teu próximo, e não reveles o segredo a outro,
¹⁰ Para que não te desonre o que o ouvir, e a tua infâmia não se aparte de ti.
¹¹ Como maçãs de ouro em salvas de prata, assim é a palavra dita a seu tempo.
¹² Como pendentes de ouro e gargantilhas de ouro fino, assim é o sábio repreensor para o ouvido atento.
¹³ Como o frio da neve no tempo da sega, assim é o mensageiro fiel para com os que o enviam; porque refresca a alma dos seus senhores.
¹⁴ Como nuvens e ventos que não trazem chuva, assim é o homem que se gaba falsamente de dádivas.
¹⁵ Pela longanimidade se persuade o príncipe, e a língua branda amolece até os ossos.
¹⁶ Achaste mel? Come só o que te basta; para que porventura não te fartes dele, e o venhas a vomitar.
¹⁷ Não ponhas muito os pés na casa do teu próximo; para que se não enfade de ti, e passe a te odiar.
¹⁸ Martelo, espada e flecha aguda é o homem que profere falso testemunho contra o seu próximo.
¹⁹ Como dente quebrado, e pé desconjuntado, é a confiança no desleal, no tempo da angústia.
²⁰ O que canta canções para o coração aflito é como aquele que despe a roupa num dia de frio, ou como o vinagre sobre salitre.
²¹ Se o teu inimigo tiver fome, dá-lhe pão para comer; e se tiver sede, dá-lhe água para beber;
²² Porque assim lhe amontoarás brasas sobre a cabeça; e o Senhor to retribuirá.
²³ O vento norte afugenta a chuva, e a face irada, a língua fingida.
²⁴ Melhor é morar só num canto de telhado do que com a mulher briguenta numa casa ampla.
²⁵ Como água fresca para a alma cansada, tais são as boas novas vindas da terra distante.
²⁶ Como fonte turvada, e manancial poluído, assim é o justo que cede diante do ímpio.
²⁷ Comer mel demais não é bom; assim, a busca da própria glória não é glória.
²⁸ Como a cidade derrubada, sem muro, assim é o homem que não pode conter o seu espírito.

 `,
        get pergunta() {
            return sortear([
                {
                    texto: "O que acontece se o teu inimigo tiver fome ou sede?",
                    opcoes: [
                        { numero: 1, texto: "Deves dar-lhe pão e água", correta: true },
                        { numero: 2, texto: "Deves ignorá-lo", correta: false },
                        { numero: 3, texto: "Deves alegrar-te com isso", correta: false },
                        { numero: 4, texto: "Deves pedir que ele se vá", correta: false }
                    ],
                    explicacao: "Provérbios 25:21 - Se o teu inimigo tiver fome, dá-lhe pão para comer; e se tiver sede, dá-lhe água para beber.",
                    pontosGanhos: 20
                },
                {
                    texto: "Como são as boas novas vindas de terra remota?",
                    opcoes: [
                        { numero: 1, texto: "Como água fria para a alma cansada", correta: true },
                        { numero: 2, texto: "Como um fardo pesado", correta: false },
                        { numero: 3, texto: "Como o sol do meio-dia", correta: false },
                        { numero: 4, texto: "Como o som de trovão", correta: false }
                    ],
                    explicacao: "Provérbios 25:25 - Como água fria para uma alma cansada, tais são as boas novas de terra remota.",
                    pontosGanhos: 20
                },
                {
                    texto: "A que é comparado o homem que não pode conter o seu espírito (sem autocontrole)?",
                    opcoes: [
                        { numero: 1, texto: "Como uma cidade fendida e sem muros", correta: true },
                        { numero: 2, texto: "Como um navio sem velas", correta: false },
                        { numero: 3, texto: "Como um cavalo sem freio", correta: false },
                        { numero: 4, texto: "Como uma floresta em chamas", correta: false }
                    ],
                    explicacao: "Provérbios 25:28 - Como a cidade fendida, que não tem muros, assim é o homem que não pode conter o seu espírito.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    // js/livros/proverbios.js (Capítulos 26-31)

    26: {
        titulo: "Observações sobre o Tolo e o Preguiçoso",
        texto: ` ¹ Como a neve no verão, e como a chuva na sega, assim não fica bem para o tolo a honra.
² Como ao pássaro o vaguear, como à andorinha o voar, assim a maldição sem causa não virá.
³ O açoite é para o cavalo, o freio é para o jumento, e a vara é para as costas dos tolos.
⁴ Não respondas ao tolo segundo a sua estultícia; para que também não te faças semelhante a ele.
⁵ Responde ao tolo segundo a sua estultícia, para que não seja sábio aos seus próprios olhos.
⁶ Os pés corta, e o dano sorve, aquele que manda mensagem pela mão de um tolo.
⁷ Como as pernas do coxo, que pendem flácidas, assim é o provérbio na boca dos tolos.
⁸ Como o que arma a funda com pedra preciosa, assim é aquele que concede honra ao tolo.
⁹ Como o espinho que entra na mão do bêbado, assim é o provérbio na boca dos tolos.
¹⁰ O Poderoso, que formou todas as coisas, paga ao tolo, e recompensa ao transgressor.
¹¹ Como o cão torna ao seu vômito, assim o tolo repete a sua estultícia.
¹² Tens visto o homem que é sábio a seus próprios olhos? Pode-se esperar mais do tolo do que dele.
¹³ Diz o preguiçoso: Um leão está no caminho; um leão está nas ruas.
¹⁴ Como a porta gira nos seus gonzos, assim o preguiçoso na sua cama.
¹⁵ O preguiçoso esconde a sua mão ao seio; e cansa-se até de torná-la à sua boca.
¹⁶ Mais sábio é o preguiçoso a seus próprios olhos do que sete homens que respondem bem.
¹⁷ O que, passando, se põe em questão alheia, é como aquele que pega um cão pelas orelhas.
¹⁸ Como o louco que solta faíscas, flechas, e mortandades,
¹⁹ Assim é o homem que engana o seu próximo, e diz: Fiz isso por brincadeira.
²⁰ Sem lenha, o fogo se apagará; e não havendo intrigante, cessará a contenda.
²¹ Como o carvão para as brasas, e a lenha para o fogo, assim é o homem contencioso para acender rixas.
²² As palavras do intrigante são como feridas; elas descem ao mais íntimo do ventre.
²³ Como o caco de vaso coberto de escórias de prata, assim são os lábios ardentes com o coração maligno.
²⁴ Aquele que odeia dissimula com seus lábios, mas no seu íntimo encobre o engano;
²⁵ Quando te suplicar com voz suave não te fies nele, porque abriga sete abominações no seu coração,
²⁶ Cujo ódio se encobre com engano, a sua maldade será exposta perante a congregação.
²⁷ O que cava uma cova cairá nela; e o que revolve a pedra, esta voltará sobre ele.
²⁸ A língua falsa odeia aos que ela fere, e a boca lisonjeira provoca a ruína.

`,
        get pergunta() {
            return sortear([
                {
                    texto: "A que é comparado o tolo que reitera (repete) a sua estultícia?",
                    opcoes: [
                        { numero: 1, texto: "A um pássaro que perde o ninho", correta: false },
                        { numero: 2, texto: "Ao cão que torna ao seu vômito", correta: true },
                        { numero: 3, texto: "A uma nuvem sem chuva", correta: false },
                        { numero: 4, texto: "A um deserto sem fim", correta: false }
                    ],
                    explicacao: "Provérbios 26:11 - Como o cão torna ao seu vômito, assim o tolo reitera a sua estultícia.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que o preguiçoso diz que está no caminho para não sair de casa?",
                    opcoes: [
                        { numero: 1, texto: "Um grande abismo", correta: false },
                        { numero: 2, texto: "Uma tempestade de areia", correta: false },
                        { numero: 3, texto: "Um leão está no caminho", correta: true },
                        { numero: 4, texto: "Um exército inimigo", correta: false }
                    ],
                    explicacao: "Provérbios 26:13 - Diz o preguiçoso: Um leão está no caminho; um leão está nas ruas.",
                    pontosGanhos: 20
                },
                {
                    texto: "Sem o quê o fogo se apaga e a contenda cessa?",
                    opcoes: [
                        { numero: 1, texto: "Sem lenha e sem o mexeriqueiro (intriguista)", correta: true },
                        { numero: 2, texto: "Sem água e sem vento", correta: false },
                        { numero: 3, texto: "Sem o sol e sem a lua", correta: false },
                        { numero: 4, texto: "Sem o capitão e sem o soldado", correta: false }
                    ],
                    explicacao: "Provérbios 26:20 - Sem lenha, o fogo se apagará; e não havendo mexeriqueiro, cessará a contenda.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    27: {
        titulo: "A Natureza Humana e a Amizade",
        texto: ` ¹ Não presumas do dia de amanhã, porque não sabes o que o dia trará.
² Que um outro te louve, e não a tua própria boca; o estranho, e não os teus lábios.
³ A pedra é pesada, e a areia é espessa; porém a ira do insensato é mais pesada que ambas.
⁴ O furor é cruel e a ira impetuosa, mas quem poderá enfrentar a inveja?
⁵ Melhor é a repreensão franca do que o amor encoberto.
⁶ Leais são as feridas feitas pelo amigo, mas os beijos do inimigo são enganosos.
⁷ A alma farta pisa o favo de mel, mas para a alma faminta todo amargo é doce.
⁸ Qual a ave que vagueia longe do seu ninho, tal é o homem que anda vagueando longe da sua morada.
⁹ O óleo e o perfume alegram o coração; assim o faz a doçura do amigo pelo conselho cordial.
¹⁰ Não deixes o teu amigo, nem o amigo de teu pai; nem entres na casa de teu irmão no dia da tua adversidade; melhor é o vizinho perto do que o irmão longe.
¹¹ Sê sábio, filho meu, e alegra o meu coração, para que tenha alguma coisa que responder àquele que me desprezar.
¹² O avisado vê o mal e esconde-se; mas os simples passam e sofrem a pena.
¹³ Quando alguém fica por fiador do estranho, toma-lhe até a sua roupa, e por penhor àquele que se obriga pela mulher estranha.
¹⁴ O que, pela manhã de madrugada, abençoa o seu amigo em alta voz, lho será imputado por maldição.
¹⁵ O gotejar contínuo em dia de grande chuva, e a mulher contenciosa, uma e outra são semelhantes;
¹⁶ Tentar moderá-la será como deter o vento, ou como conter o óleo dentro da sua mão direita.
¹⁷ Como o ferro com ferro se aguça, assim o homem afia o rosto do seu amigo.
¹⁸ O que cuida da figueira comerá do seu fruto; e o que atenta para o seu senhor será honrado.
¹⁹ Como na água o rosto corresponde ao rosto, assim o coração do homem ao homem.
²⁰ Como o inferno e a perdição nunca se fartam, assim os olhos do homem nunca se satisfazem.
²¹ Como o crisol é para a prata, e o forno para o ouro, assim o homem é provado pelos louvores.
²² Ainda que repreendas o tolo como quem bate o trigo com a mão de gral entre grãos pilados, não se apartará dele a sua estultícia.
²³ Procura conhecer o estado das tuas ovelhas; põe o teu coração sobre os teus rebanhos,
²⁴ Porque o tesouro não dura para sempre; e durará a coroa de geração em geração?
²⁵ Quando brotar a erva, e aparecerem os renovos, e se juntarem as ervas dos montes,
²⁶ Então os cordeiros serão para te vestires, e os bodes para o preço do campo;
²⁷ E a abastança do leite das cabras para o teu sustento, para sustento da tua casa e para sustento das tuas servas.

`,
        get pergunta() {
            return sortear([
                {
                    texto: "Por que não devemos nos gloriar do dia de amanhã?",
                    opcoes: [
                        { numero: 1, texto: "Porque o amanhã é dos jovens", correta: false },
                        { numero: 2, texto: "Porque o sol pode não nascer", correta: false },
                        { numero: 3, texto: "Porque não sabes o que trará o dia de hoje", correta: true },
                        { numero: 4, texto: "Porque o tempo passa devagar", correta: false }
                    ],
                    explicacao: "Provérbios 27:1 - Não te glories do dia de amanhã, porque não sabes o que trará o dia de hoje.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que o ferro faz com o ferro, e o homem com o seu amigo?",
                    opcoes: [
                        { numero: 1, texto: "O ferro quebra o ferro, o homem fere o amigo", correta: false },
                        { numero: 2, texto: "O ferro afia o ferro; assim o homem afia o rosto do seu amigo", correta: true },
                        { numero: 3, texto: "O ferro derrete o ferro", correta: false },
                        { numero: 4, texto: "O ferro se une ao ferro", correta: false }
                    ],
                    explicacao: "Provérbios 27:17 - Como o ferro com o ferro se afia, assim o homem afia o rosto do seu amigo.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que são as feridas feitas pelo que ama, em contraste com os beijos do que odeia?",
                    opcoes: [
                        { numero: 1, texto: "São sinais de traição", correta: false },
                        { numero: 2, texto: "São piores que a morte", correta: false },
                        { numero: 3, texto: "São feridas inúteis", correta: false },
                        { numero: 4, texto: "São fiéis as feridas feitas pelo que ama, mas os beijos do que odeia são enganosos", correta: true }
                    ],
                    explicacao: "Provérbios 27:6 - Fiéis são as feridas feitas pelo que ama, mas os beijos do que odeia são enganosos.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    28: {
        titulo: "Comparações de Justiça",
        texto: ` ¹ Os ímpios fogem sem que haja ninguém a persegui-los; mas os justos são ousados como um leão.
² Pela transgressão da terra muitos são os seus príncipes, mas por homem prudente e entendido a sua continuidade será prolongada.
³ O homem pobre que oprime os pobres é como a chuva impetuosa, que causa a falta de alimento.
⁴ Os que deixam a lei louvam o ímpio; porém os que guardam a lei contendem com eles.
⁵ Os homens maus não entendem o juízo, mas os que buscam ao Senhor entendem tudo.
⁶ Melhor é o pobre que anda na sua integridade do que o de caminhos perversos ainda que seja rico.
⁷ O que guarda a lei é filho sábio, mas o companheiro dos desregrados envergonha a seu pai.
⁸ O que aumenta os seus bens com usura e ganância ajunta-os para o que se compadece do pobre.
⁹ O que desvia os seus ouvidos de ouvir a lei, até a sua oração será abominável.
¹⁰ O que faz com que os retos errem por mau caminho, ele mesmo cairá na sua cova; mas os bons herdarão o bem.
¹¹ O homem rico é sábio aos seus próprios olhos, mas o pobre que é entendido, o examina.
¹² Quando os justos exultam, grande é a glória; mas quando os ímpios sobem, os homens se escondem.
¹³ O que encobre as suas transgressões nunca prosperará, mas o que as confessa e deixa, alcançará misericórdia.
¹⁴ Bem-aventurado o homem que continuamente teme; mas o que endurece o seu coração cairá no mal.
¹⁵ Como leão rugidor, e urso faminto, assim é o ímpio que domina sobre um povo pobre.
¹⁶ O príncipe falto de entendimento é também um grande opressor, mas o que odeia a avareza prolongará seus dias.
¹⁷ O homem carregado do sangue de qualquer pessoa fugirá até à cova; ninguém o detenha.
¹⁸ O que anda sinceramente salvar-se-á, mas o perverso em seus caminhos cairá logo.
¹⁹ O que lavrar a sua terra virá a fartar-se de pão, mas o que segue a ociosos se fartará de pobreza.
²⁰ O homem fiel será coberto de bênçãos, mas o que se apressa a enriquecer não ficará impune.
²¹ Dar importância à aparência das pessoas não é bom, porque até por um bocado de pão um homem prevaricará.
²² O que quer enriquecer depressa é homem de olho maligno, porém não sabe que a pobreza há de vir sobre ele.
²³ O que repreende o homem gozará depois mais amizade do que aquele que lisonjeia com a língua.
²⁴ O que rouba a seu próprio pai, ou a sua mãe, e diz: Não é transgressão, companheiro é do homem destruidor.
²⁵ O orgulhoso de coração levanta contendas, mas o que confia no Senhor prosperará.
²⁶ O que confia no seu próprio coração é insensato, mas o que anda em sabedoria, será salvo.
²⁷ O que dá ao pobre não terá necessidade, mas o que esconde os seus olhos terá muitas maldições.
²⁸ Quando os ímpios se elevam, os homens andam se escondendo, mas quando perecem, os justos se multiplicam.

`,
        get pergunta() {
            return sortear([
                {
                    texto: "O que acontece com o ímpio e com o justo em relação à coragem?",
                    opcoes: [
                        { numero: 1, texto: "O ímpio foge sem que ninguém o persiga, mas o justo é ousado como um leão", correta: true },
                        { numero: 2, texto: "Ambos fogem quando há perigo", correta: false },
                        { numero: 3, texto: "O justo foge, mas o ímpio ataca", correta: false },
                        { numero: 4, texto: "O ímpio é mais forte que o justo", correta: false }
                    ],
                    explicacao: "Provérbios 28:1 - Fogem os ímpios, sem que ninguém os persiga; mas qualquer justo está confiado como o filho do leão.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que acontece com quem encobre as suas transgressões?",
                    opcoes: [
                        { numero: 1, texto: "Terá muita sorte", correta: false },
                        { numero: 2, texto: "Nunca prosperará", correta: true },
                        { numero: 3, texto: "Será amado por todos", correta: false },
                        { numero: 4, texto: "Alcançará misericórdia logo de início", correta: false }
                    ],
                    explicacao: "Provérbios 28:13 - O que encobre as suas transgressões nunca prosperará, mas o que as confessa e deixa, alcançará misericórdia.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que acontece com aquele que confia no seu próprio coração?",
                    opcoes: [
                        { numero: 1, texto: "É um homem muito sábio", correta: false },
                        { numero: 2, texto: "É um tolo", correta: true },
                        { numero: 3, texto: "Vencerá todos os desafios", correta: false },
                        { numero: 4, texto: "Encontrará o tesouro", correta: false }
                    ],
                    explicacao: "Provérbios 28:26 - O que confia no seu próprio coração é tolo, mas o que anda sabiamente, será livre.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    29: {
        titulo: "O Governo e a Disciplina",
        texto: `¹ O homem que muitas vezes repreendido endurece a cerviz, de repente será destruído sem que haja remédio.
² Quando os justos se engrandecem, o povo se alegra, mas quando o ímpio domina, o povo geme.
³ O homem que ama a sabedoria alegra a seu pai, mas o companheiro de prostitutas desperdiça os bens.
⁴ O rei com juízo sustém a terra, mas o amigo de peitas a transtorna.
⁵ O homem que lisonjeia o seu próximo arma uma rede aos seus passos.
⁶ Na transgressão do homem mau há laço, mas o justo jubila e se alegra.
⁷ O justo se informa da causa dos pobres, mas o ímpio nem sequer toma conhecimento.
⁸ Os homens escarnecedores alvoroçam a cidade, mas os sábios desviam a ira.
⁹ O homem sábio que pleiteia com o tolo, quer se zangue, quer se ria, não terá descanso.
¹⁰ Os homens sanguinários odeiam ao sincero, mas os justos procuram o seu bem.
¹¹ O tolo revela todo o seu pensamento, mas o sábio o guarda até o fim.
¹² O governador que dá atenção às palavras mentirosas, achará que todos os seus servos são ímpios.
¹³ O pobre e o usurário se encontram; o Senhor ilumina os olhos de ambos.
¹⁴ O rei que julga os pobres conforme a verdade firmará o seu trono para sempre.
¹⁵ A vara e a repreensão dão sabedoria, mas a criança entregue a si mesma, envergonha a sua mãe.
¹⁶ Quando os ímpios se multiplicam, multiplicam-se as transgressões, mas os justos verão a sua queda.
¹⁷ Castiga o teu filho, e te dará descanso; e dará delícias à tua alma.
¹⁸ Não havendo profecia, o povo perece; porém o que guarda a lei, esse é bem-aventurado.
¹⁹ O servo não se emendará com palavras, porque, ainda que entenda, todavia não atenderá.
²⁰ Tens visto um homem precipitado no falar? Maior esperança há para um tolo do que para ele.
²¹ Quando alguém cria o seu servo com mimos desde a meninice, por fim ele tornar-se-á seu filho.
²² O homem iracundo levanta contendas; e o furioso multiplica as transgressões.
²³ A soberba do homem o abaterá, mas a honra sustentará o humilde de espírito.
²⁴ O que tem parte com o ladrão odeia a sua própria alma; ouve maldições, e não o denuncia.
²⁵ O temor do homem armará laços, mas o que confia no Senhor será posto em alto retiro.
²⁶ Muitos buscam o favor do poderoso, mas o juízo de cada um vem do Senhor.
²⁷ Abominação é, para os justos, o homem iníquo; mas abominação é, para o iníquo, o de retos caminhos.

 `,
        get pergunta() {
            return sortear([
                {
                    texto: "O que acontece com o povo quando os justos se engrandecem?",
                    opcoes: [
                        { numero: 1, texto: "O povo se alegra", correta: true },
                        { numero: 2, texto: "O povo fica com medo", correta: false },
                        { numero: 3, texto: "O povo empobrece", correta: false },
                        { numero: 4, texto: "O povo foge da cidade", correta: false }
                    ],
                    explicacao: "Provérbios 29:2 - Quando os justos se engrandecem, o povo se alegra, mas quando o ímpio domina, o povo suspira.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que a vara e a repreensão dão à criança?",
                    opcoes: [
                        { numero: 1, texto: "Tristeza profunda", correta: false },
                        { numero: 2, texto: "Dão sabedoria", correta: true },
                        { numero: 3, texto: "Não dão nada", correta: false },
                        { numero: 4, texto: "Dão raiva", correta: false }
                    ],
                    explicacao: "Provérbios 29:15 - A vara e a repreensão dão sabedoria, mas a criança entregue a si mesma, envergonha a sua mãe.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que acontece quando não há profecia (visão)?",
                    opcoes: [
                        { numero: 1, texto: "O povo se corrompe (se descontrai)", correta: true },
                        { numero: 2, texto: "O povo fica mais rico", correta: false },
                        { numero: 3, texto: "O povo descansa", correta: false },
                        { numero: 4, texto: "O povo inventa novas leis", correta: false }
                    ],
                    explicacao: "Provérbios 29:18 - Não havendo profecia, o povo se corrompe; mas o que guarda a lei é bem-aventurado.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    30: {
        titulo: "As Palavras de Agur",
        texto: ` ¹ Palavras de Agur, filho de Jaque, o masaíta, que proferiu este homem a Itiel, a Itiel e a Ucal:
² Na verdade eu sou o mais bruto dos homens, nem mesmo tenho o conhecimento de homem.
³ Nem aprendi a sabedoria, nem tenho o conhecimento do santo.
⁴ Quem subiu ao céu e desceu? Quem encerrou os ventos nos seus punhos? Quem amarrou as águas numa roupa? Quem estabeleceu todas as extremidades da terra? Qual é o seu nome? E qual é o nome de seu filho, se é que o sabes?
⁵ Toda a Palavra de Deus é pura; escudo é para os que confiam nele.
⁶ Nada acrescentes às suas palavras, para que não te repreenda e sejas achado mentiroso.
⁷ Duas coisas te pedi; não mas negues, antes que morra:
⁸ Afasta de mim a vaidade e a palavra mentirosa; não me dês nem a pobreza nem a riqueza; mantém-me do pão da minha porção de costume;
⁹ Para que, porventura, estando farto não te negue, e venha a dizer: Quem é o Senhor? Ou que, empobrecendo, não venha a furtar, e tome o nome de Deus em vão.
¹⁰ Não acuses o servo diante de seu senhor, para que não te amaldiçoe e tu fiques o culpado.
¹¹ Há uma geração que amaldiçoa a seu pai, e que não bendiz a sua mãe.
¹² Há uma geração que é pura aos seus próprios olhos, mas que nunca foi lavada da sua imundícia.
¹³ Há uma geração cujos olhos são altivos, e as suas pálpebras são sempre levantadas.
¹⁴ Há uma geração cujos dentes são espadas, e cujas queixadas são facas, para consumirem da terra os aflitos, e os necessitados dentre os homens.
¹⁵ A sanguessuga tem duas filhas: Dá e Dá. Estas três coisas nunca se fartam; e com a quarta, nunca dizem: Basta!
¹⁶ A sepultura; a madre estéril; a terra que não se farta de água; e o fogo; nunca dizem: Basta!
¹⁷ Os olhos que zombam do pai, ou desprezam a obediência à mãe, corvos do ribeiro os arrancarão e os filhotes da águia os comerão.
¹⁸ Estas três coisas me maravilham; e quatro há que não conheço:
¹⁹ O caminho da águia no ar; o caminho da cobra na penha; o caminho do navio no meio do mar; e o caminho do homem com uma virgem.
²⁰ O caminho da mulher adúltera é assim: ela come, depois limpa a sua boca e diz: Não fiz nada de mal!
²¹ Por três coisas se alvoroça a terra; e por quatro que não pode suportar:
²² Pelo servo, quando reina; e pelo tolo, quando vive na fartura;
²³ Pela mulher odiosa, quando é casada; e pela serva, quando fica herdeira da sua senhora.
²⁴ Estas quatro coisas são das menores da terra, porém bem providas de sabedoria:
²⁵ As formigas não são um povo forte; todavia no verão preparam a sua comida;
²⁶ Os coelhos são um povo débil; e contudo, põem a sua casa na rocha;
²⁷ Os gafanhotos não têm rei; e contudo todos saem, e em bandos se repartem;
²⁸ A aranha se pendura com as mãos, e está nos palácios dos reis.
²⁹ Estes três têm um bom andar, e quatro passeiam airosamente;
³⁰ O leão, o mais forte entre os animais, que não foge de nada;
³¹ O galgo; o bode também; e o rei a quem não se pode resistir.
³² Se procedeste loucamente, exaltando-te, e se planejaste o mal, leva a mão à boca;
³³ Porque o mexer do leite produz manteiga, o espremer do nariz produz sangue; assim o forçar da ira produz contenda.

`,
        get pergunta() {
            return sortear([
                {
                    texto: "Toda a palavra de Deus é pura; o que Ele é para os que confiam nele?",
                    opcoes: [
                        { numero: 1, texto: "Um castelo de areia", correta: false },
                        { numero: 2, texto: "Um escudo", correta: true },
                        { numero: 3, texto: "Uma nuvem", correta: false },
                        { numero: 4, texto: "Um fogo consumidor apenas", correta: false }
                    ],
                    explicacao: "Provérbios 30:5 - Toda a Palavra de Deus é pura; escudo é para os que confiam nele.",
                    pontosGanhos: 20
                },
                {
                    texto: "Quais são as duas coisas que Agur pediu a Deus antes de morrer?",
                    opcoes: [
                        { numero: 1, texto: "Ouro e prata", correta: false },
                        { numero: 2, texto: "Fama e poder", correta: false },
                        { numero: 3, texto: "Remove de mim a vaidade e a mentira; não me dês nem a pobreza nem a riqueza", correta: true },
                        { numero: 4, texto: "Vitória na guerra e muitos filhos", correta: false }
                    ],
                    explicacao: "Provérbios 30:7-8 - Duas coisas te pedi... Afasta de mim a vaidade e a palavra mentirosa; não me dês nem a pobreza nem a riqueza.",
                    pontosGanhos: 20
                },
                {
                    texto: "Quais são as quatro coisas que Agur diz serem pequenas na terra, mas muito sábias?",
                    opcoes: [
                        { numero: 1, texto: "Leões, tigres, ursos e lobos", correta: false },
                        { numero: 2, texto: "As formigas, os coelhos (querogrilos), os gafanhotos e a aranha (lagartixa)", correta: true },
                        { numero: 3, texto: "Águias, falcões, pombas e corvos", correta: false },
                        { numero: 4, texto: "Peixes, baleias, tubarões e golfinhos", correta: false }
                    ],
                    explicacao: "Provérbios 30:24-28 - Estas quatro coisas são das mais pequenas da terra, mas sábias... as formigas... os querogrilos... os gafanhotos... a aranha.",
                    pontosGanhos: 20
                }
            ]);
        }
    },
    31: {
        titulo: "As Palavras do Rei Lemuel e a Mulher Virtuosa",
        texto: `¹ Palavras do rei Lemuel, a profecia que lhe ensinou a sua mãe.
² Como, filho meu? E como, filho do meu ventre? E como, filho dos meus votos?
³ Não dês às mulheres a tua força, nem os teus caminhos ao que destrói os reis.
⁴ Não é próprio dos reis, ó Lemuel, não é próprio dos reis beber vinho, nem dos príncipes o desejar bebida forte;
⁵ Para que bebendo, se esqueçam da lei, e pervertam o direito de todos os aflitos.
⁶ Dai bebida forte ao que está prestes a perecer, e o vinho aos amargurados de espírito.
⁷ Que beba, e esqueça da sua pobreza, e da sua miséria não se lembre mais.
⁸ Abre a tua boca a favor do mudo, pela causa de todos que são designados à destruição.
⁹ Abre a tua boca; julga retamente; e faze justiça aos pobres e aos necessitados.
¹⁰ Mulher virtuosa quem a achará? O seu valor muito excede ao de rubis.
¹¹ O coração do seu marido está nela confiado; assim ele não necessitará de despojo.
¹² Ela só lhe faz bem, e não mal, todos os dias da sua vida.
¹³ Busca lã e linho, e trabalha de boa vontade com suas mãos.
¹⁴ Como o navio mercante, ela traz de longe o seu pão.
¹⁵ Levanta-se, mesmo à noite, para dar de comer aos da casa, e distribuir a tarefa das servas.
¹⁶ Examina uma propriedade e adquire-a; planta uma vinha com o fruto de suas mãos.
¹⁷ Cinge os seus lombos de força, e fortalece os seus braços.
¹⁸ Vê que é boa a sua mercadoria; e a sua lâmpada não se apaga de noite.
¹⁹ Estende as suas mãos ao fuso, e suas mãos pegam na roca.
²⁰ Abre a sua mão ao pobre, e estende as suas mãos ao necessitado.
²¹ Não teme a neve na sua casa, porque toda a sua família está vestida de escarlata.
²² Faz para si cobertas de tapeçaria; seu vestido é de seda e de púrpura.
²³ Seu marido é conhecido nas portas, e assenta-se entre os anciãos da terra.
²⁴ Faz panos de linho fino e vende-os, e entrega cintos aos mercadores.
²⁵ A força e a honra são seu vestido, e se alegrará com o dia futuro.
²⁶ Abre a sua boca com sabedoria, e a lei da beneficência está na sua língua.
²⁷ Está atenta ao andamento da casa, e não come o pão da preguiça.
²⁸ Levantam-se seus filhos e chamam-na bem-aventurada; seu marido também, e ele a louva.
²⁹ Muitas filhas têm procedido virtuosamente, mas tu és, de todas, a mais excelente!
³⁰ Enganosa é a beleza e vã a formosura, mas a mulher que teme ao Senhor, essa sim será louvada.
³¹ Dai-lhe do fruto das suas mãos, e deixe o seu próprio trabalho louvá-la nas portas.

 `,
        get pergunta() {
            return sortear([
                {
                    texto: "O que o Rei Lemuel diz sobre a beleza e a graça (favor)?",
                    opcoes: [
                        { numero: 1, texto: "A graça é enganosa e a beleza vã, mas a mulher que teme ao Senhor, essa será louvada", correta: true },
                        { numero: 2, texto: "A beleza é o mais importante", correta: false },
                        { numero: 3, texto: "A graça dura para sempre", correta: false },
                        { numero: 4, texto: "A beleza nunca acaba", correta: false }
                    ],
                    explicacao: "Provérbios 31:30 - Enganosa é a beleza e vã a formosura, mas a mulher que teme ao Senhor, essa será louvada.",
                    pontosGanhos: 20
                },
                {
                    texto: "O que a mulher virtuosa faz em relação ao necessitado e ao pobre?",
                    opcoes: [
                        { numero: 1, texto: "Fecha as portas para eles", correta: false },
                        { numero: 2, texto: "Abre a sua mão ao pobre, e estende as suas mãos ao necessitado", correta: true },
                        { numero: 3, texto: "Pede que eles trabalhem primeiro", correta: false },
                        { numero: 4, texto: "Ignora a dor deles", correta: false }
                    ],
                    explicacao: "Provérbios 31:20 - Abre a sua mão ao pobre, e estende as suas mãos ao necessitado.",
                    pontosGanhos: 20
                },
                {
                    texto: "Como é o valor da mulher virtuosa, segundo o capítulo 31?",
                    opcoes: [
                        { numero: 1, texto: "Igual ao ouro fino", correta: false },
                        { numero: 2, texto: "O seu valor muito excede ao de rubis", correta: true },
                        { numero: 3, texto: "Igual ao preço do pão", correta: false },
                        { numero: 4, texto: "Menor que o valor das pérolas", correta: false }
                    ],
                    explicacao: "Provérbios 31:10 - Mulher virtuosa quem a achará? O seu valor muito excede ao de rubis.",
                    pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};