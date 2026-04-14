// js/livros/salmos.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const salmos = {
    nome: "Salmos",
    icone: "🎻", 
    autor: "Davi e outros",
    //background: "./imagens/salmos_bg.jpg", 

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "O Justo e o Ímpio",
            texto: ` ¹ Bem-aventurado o homem que não anda segundo o conselho dos ímpios, nem se detém no caminho dos pecadores, nem se assenta na roda dos escarnecedores.
² Antes tem o seu prazer na lei do Senhor, e na sua lei medita de dia e de noite.
³ Pois será como a árvore plantada junto a ribeiros de águas, a qual dá o seu fruto no seu tempo; as suas folhas não cairão, e tudo quanto fizer prosperará.
⁴ Não são assim os ímpios; mas são como a moinha que o vento espalha.
⁵ Por isso os ímpios não subsistirão no juízo, nem os pecadores na congregação dos justos.
⁶ Porque o Senhor conhece o caminho dos justos; porém o caminho dos ímpios perecerá.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "A que é comparado o homem que tem o seu prazer na lei do Senhor e nela medita dia e noite?",
                        opcoes: [
                            { numero: 1, texto: "A uma nuvem passageira", correta: false },
                            { numero: 2, texto: "A uma árvore plantada junto a ribeiros de águas", correta: true },
                            { numero: 3, texto: "A uma rocha no deserto", correta: false },
                            { numero: 4, texto: "A um pássaro livre", correta: false }
                        ],
                        explicacao: "Salmos 1:3 - Pois será como a árvore plantada junto a ribeiros de águas, a qual dá o seu fruto no seu tempo...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "O Messias, Rei das Nações",
            texto: ` ¹ Por que se amotinam os gentios, e os povos imaginam coisas vãs?
² Os reis da terra se levantam e os governos consultam juntamente contra o Senhor e contra o seu ungido, dizendo:
³ Rompamos as suas ataduras, e sacudamos de nós as suas cordas.
⁴ Aquele que habita nos céus se rirá; o Senhor zombará deles.
⁵ Então lhes falará na sua ira, e no seu furor os turbará.
⁶ Eu, porém, ungi o meu Rei sobre o meu santo monte de Sião.
⁷ Proclamarei o decreto: O Senhor me disse: Tu és meu Filho, eu hoje te gerei.
⁸ Pede-me, e eu te darei os gentios por herança, e os fins da terra por tua possessão.
⁹ Tu os esmigalharás com uma vara de ferro; tu os despedaçarás como a um vaso de oleiro.
¹⁰ Agora, pois, ó reis, sede prudentes; deixai-vos instruir, juízes da terra.
¹¹ Servi ao Senhor com temor, e alegrai-vos com tremor.
¹² Beijai o Filho, para que se não ire, e pereçais no caminho, quando em breve se acender a sua ira; bem-aventurados todos aqueles que nele confiam.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Salmo 2 diz que as nações e os povos fazem contra o Senhor e o Seu Ungido?",
                        opcoes: [
                            { numero: 1, texto: "Eles se alegram", correta: false },
                            { numero: 2, texto: "Eles se amotinam e maquinam coisas vãs", correta: true },
                            { numero: 3, texto: "Eles pedem perdão", correta: false },
                            { numero: 4, texto: "Eles fogem para o mar", correta: false }
                        ],
                        explicacao: "Salmos 2:1 - Por que se amotinam os gentios, e os povos imaginam coisas vãs?",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/salmos.js (Recuperação: Salmos 3-7)

        3: {
            titulo: "Confiança no Meio do Perigo",
            texto: `1 Senhor, como se têm multiplicado os meus adversários! São muitos os que se levantam contra mim.
2 Muitos dizem da minha alma: Não há salvação para ele em Deus. (Selá.)
3 Porém tu, Senhor, és um escudo para mim, a minha glória, e o que exalta a minha cabeça.
4 Com a minha voz clamei ao Senhor, e ouviu-me desde o seu santo monte. (Selá.)
5 Eu me deitei e dormi; acordei, porque o Senhor me sustentou.
6 Não temerei dez milhares de pessoas que se puseram contra mim e me cercam.
7 Levanta-te, Senhor; salva-me, Deus meu; pois feriste a todos os meus inimigos nos queixos; quebraste os dentes aos ímpios.
8 A salvação vem do Senhor; sobre o teu povo seja a tua bênção. (Selá.)
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista diz que faz, mesmo estando cercado de inimigos, porque o Senhor o sustenta?",
                        opcoes: [
                            { numero: 1, texto: "Eu me deitei e dormi; acordei, porque o Senhor me sustentou", correta: true },
                            { numero: 2, texto: "Eu fugi para as montanhas", correta: false },
                            { numero: 3, texto: "Eu não consegui descansar", correta: false },
                            { numero: 4, texto: "Eu clamei por socorro aos vizinhos", correta: false }
                        ],
                        explicacao: "Salmos 3:5 - Eu me deitei e dormi; acordei, porque o Senhor me sustentou.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "Alegria e Paz no Senhor",
            texto: ` ¹ Ouve-me quando eu clamo, ó Deus da minha justiça, na angústia me deste largueza; tem misericórdia de mim e ouve a minha oração.
² Filhos dos homens, até quando convertereis a minha glória em infâmia? Até quando amareis a vaidade e buscareis a mentira? (Selá.)
³ Sabei, pois, que o Senhor separou para si aquele que é piedoso; o Senhor ouvirá quando eu clamar a ele.
⁴ Perturbai-vos e não pequeis; falai com o vosso coração sobre a vossa cama, e calai-vos. (Selá.)
⁵ Oferecei sacrifícios de justiça, e confiai no Senhor.
⁶ Muitos dizem: Quem nos mostrará o bem? Senhor, exalta sobre nós a luz do teu rosto.
⁷ Puseste alegria no meu coração, mais do que no tempo em que se lhes multiplicaram o trigo e o vinho.
⁸ Em paz também me deitarei e dormirei, porque só tu, Senhor, me fazes habitar em segurança.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor colocou no coração do salmista, que é maior do que a alegria dos que têm fartura de trigo e vinho?",
                        opcoes: [
                            { numero: 1, texto: "Ouro e prata", correta: false },
                            { numero: 2, texto: "Alegria", correta: true },
                            { numero: 3, texto: "Desejo de vingança", correta: false },
                            { numero: 4, texto: "Preocupação", correta: false }
                        ],
                        explicacao: "Salmos 4:7 - Puseste alegria no meu coração, mais do que no tempo em que se multiplicaram o seu trigo e o seu vinho.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "Oração da Manhã",
            texto: ` ¹ dá ouvidos às minhas palavras, ó Senhor, atende à minha meditação.
² Atende à voz do meu clamor, Rei meu e Deus meu, pois a ti orarei.
³ Pela manhã ouvirás a minha voz, ó Senhor; pela manhã apresentarei a ti a minha oração, e vigiarei.
⁴ Porque tu não és um Deus que tenha prazer na iniquidade, nem contigo habitará o mal.
⁵ Os loucos não pararão à tua vista; odeias a todos os que praticam a maldade.
⁶ Destruirás aqueles que falam a mentira; o Senhor aborrecerá o homem sanguinário e fraudulento.
⁷ Porém eu entrarei em tua casa pela grandeza da tua benignidade; e em teu temor me inclinarei para o teu santo templo.
⁸ Senhor, guia-me na tua justiça, por causa dos meus inimigos; endireita diante de mim o teu caminho.
⁹ Porque não há retidão na boca deles; as suas entranhas são verdadeiras maldades, a sua garganta é um sepulcro aberto; lisonjeiam com a sua língua.
¹⁰ Declara-os culpados, ó Deus; caiam por seus próprios conselhos; lança-os fora por causa da multidão de suas transgressões, pois se rebelaram contra ti.
¹¹ Porém alegrem-se todos os que confiam em ti; exultem eternamente, porquanto tu os defendes; e em ti se gloriem os que amam o teu nome.
¹² Pois tu, Senhor, abençoarás ao justo; circundá-lo-ás da tua benevolência como de um escudo.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Em qual período do dia o salmista diz que o Senhor ouvirá a sua voz?",
                        opcoes: [
                            { numero: 1, texto: "Pela manhã", correta: true },
                            { numero: 2, texto: "Apenas ao meio-dia", correta: false },
                            { numero: 3, texto: "Somente ao deitar", correta: false },
                            { numero: 4, texto: "Uma vez por semana", correta: false }
                        ],
                        explicacao: "Salmos 5:3 - Pela manhã ouvirás a minha voz, ó Senhor; pela manhã apresentarei a ti a minha oração, e vigiarei.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "Oração de um Penitente",
            texto: ` ¹ Senhor, não me repreendas na tua ira, nem me castigues no teu furor.
² Tem misericórdia de mim, Senhor, porque sou fraco; sara-me, Senhor, porque os meus ossos estão perturbados.
³ Até a minha alma está perturbada; mas tu, Senhor, até quando?
⁴ Volta-te, Senhor, livra a minha alma; salva-me por tua benignidade.
⁵ Porque na morte não há lembrança de ti; no sepulcro quem te louvará?
⁶ Já estou cansado do meu gemido, toda a noite faço nadar a minha cama; molho o meu leito com as minhas lágrimas,
⁷ Já os meus olhos estão consumidos pela mágoa, e têm-se envelhecido por causa de todos os meus inimigos.
⁸ Apartai-vos de mim todos os que praticais a iniquidade; porque o Senhor já ouviu a voz do meu pranto.
⁹ O Senhor já ouviu a minha súplica; o Senhor aceitará a minha oração.
¹⁰ Envergonhem-se e perturbem-se todos os meus inimigos; tornem atrás e envergonhem-se num momento.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista pede que o Senhor não faça durante a Sua ira?",
                        opcoes: [
                            { numero: 1, texto: "Que não o repreenda nem o castigue no Seu furor", correta: true },
                            { numero: 2, texto: "Que não o deixe ficar rico", correta: false },
                            { numero: 3, texto: "Que não o leve para a guerra", correta: false },
                            { numero: 4, texto: "Que não mude o tempo", correta: false }
                        ],
                        explicacao: "Salmos 6:1 - Senhor, não me repreendas na tua ira, nem me castigues no teu furor.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        7: {
            titulo: "O Senhor é o Justo Juiz",
            texto: ` ¹ Senhor meu Deus, em ti confio; salva-me de todos os que me perseguem, e livra-me;
² Para que ele não arrebate a minha alma, como leão, despedaçando-a, sem que haja quem a livre.
³ Senhor meu Deus, se eu fiz isto, se há perversidade nas minhas mãos,
⁴ Se paguei com o mal àquele que tinha paz comigo (antes, livrei ao que me oprimia sem causa),
⁵ Persiga o inimigo a minha alma e alcance-a; calque aos pés a minha vida sobre a terra, e reduza a pó a minha glória. (Selá.)
⁶ Levanta-te, Senhor, na tua ira; exalta-te por causa do furor dos meus opressores; e desperta por mim para o juízo que ordenaste.
⁷ Assim te rodeará o ajuntamento de povos; por causa deles, pois, volta-te para as alturas.
⁸ O Senhor julgará os povos; julga-me, Senhor, conforme a minha justiça, e conforme a integridade que há em mim.
⁹ Tenha já fim a malícia dos ímpios; mas estabeleça-se o justo; pois tu, ó justo Deus, provas os corações e as entranhas.
¹⁰ O meu escudo é de Deus, que salva os retos de coração.
¹¹ Deus julga o justo, e se ira com o ímpio todos os dias.
¹² Se o homem não se converter, Deus afiará a sua espada; já tem armado o seu arco, e está aparelhado.
¹³ E já para ele preparou armas mortais; e porá em ação as suas setas inflamadas contra os perseguidores.
¹⁴ Eis que ele está com dores de perversidade; concebeu trabalhos, e produziu mentiras.
¹⁵ Cavou um poço e o fez fundo, e caiu na cova que fez.
¹⁶ A sua obra cairá sobre a sua cabeça; e a sua violência descerá sobre a sua própria cabeça.
¹⁷ Eu louvarei ao Senhor segundo a sua justiça, e cantarei louvores ao nome do Senhor altíssimo.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde o salmista diz que está o seu escudo?",
                        opcoes: [
                            { numero: 1, texto: "Em Deus, que salva os retos de coração", correta: true },
                            { numero: 2, texto: "Guardado no palácio", correta: false },
                            { numero: 3, texto: "Em suas próprias mãos", correta: false },
                            { numero: 4, texto: "Nas estrelas", correta: false }
                        ],
                        explicacao: "Salmos 7:10 - O meu escudo está em Deus, que salva os retos de coração.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        8: {
            titulo: "A Glória de Deus e a Dignidade do Homem",
            texto: ` ¹ Ó Senhor, Senhor nosso, quão admirável é o teu nome em toda a terra, pois puseste a tua glória sobre os céus!
² Tu ordenaste força da boca das crianças e dos que mamam, por causa dos teus inimigos, para fazer calar ao inimigo e ao vingador.
³ Quando vejo os teus céus, obra dos teus dedos, a lua e as estrelas que preparaste;
⁴ Que é o homem mortal para que te lembres dele? E o filho do homem, para que o visites?
⁵ Pois pouco menor o fizeste do que os anjos, e de glória e de honra o coroaste.
⁶ Fazes com que ele tenha domínio sobre as obras das tuas mãos; tudo puseste debaixo de seus pés:
⁷ Todas as ovelhas e bois, assim como os animais do campo,
⁸ As aves dos céus, e os peixes do mar, e tudo o que passa pelas veredas dos mares.
⁹ Ó Senhor, Senhor nosso, quão admirável é o teu nome sobre toda a terra!

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o salmista descreve a posição do homem na criação em relação aos anjos?",
                        opcoes: [
                            { numero: 1, texto: "Igual aos anjos", correta: false },
                            { numero: 2, texto: "Um pouco menor do que os anjos, mas coroado de glória e de honra", correta: true },
                            { numero: 3, texto: "Muito maior que os anjos", correta: false },
                            { numero: 4, texto: "Um ser sem importância", correta: false }
                        ],
                        explicacao: "Salmos 8:5 - Pois pouco menor o fizeste do que os anjos, e de glória e de honra o coroaste.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        9: {
            titulo: "Louvor pela Justiça de Deus",
            texto: `¹ Eu te louvarei, Senhor, com todo o meu coração; contarei todas as tuas maravilhas.
² Em ti me alegrarei e saltarei de prazer; cantarei louvores ao teu nome, ó Altíssimo.
³ Porquanto os meus inimigos voltaram atrás, caíram e pereceram diante da tua face.
⁴ Pois tu tens sustentado o meu direito e a minha causa; tu te assentaste no tribunal, julgando justamente;
⁵ Repreendeste as nações, destruíste os ímpios; apagaste o seu nome para sempre e eternamente.
⁶ Oh! Inimigo! Acabaram-se para sempre as assolações; e tu arrasaste as cidades, e a sua memória pereceu com elas.
⁷ Mas o Senhor está assentado perpetuamente; já preparou o seu tribunal para julgar.
⁸ Ele mesmo julgará o mundo com justiça; exercerá juízo sobre povos com retidão.
⁹ O Senhor será também um alto refúgio para o oprimido; um alto refúgio em tempos de angústia.
¹⁰ Em ti confiarão os que conhecem o teu nome; porque tu, Senhor, nunca desamparaste os que te buscam.
¹¹ Cantai louvores ao Senhor, que habita em Sião; anunciai entre os povos os seus feitos.
¹² Pois quando inquire do derramamento de sangue, lembra-se deles: não se esquece do clamor dos aflitos.
¹³ Tem misericórdia de mim, Senhor, olha para a minha aflição, causada por aqueles que me odeiam; tu que me levantas das portas da morte;
¹⁴ Para que eu conte todos os teus louvores nas portas da filha de Sião, e me alegre na tua salvação.
¹⁵ Os gentios enterraram-se na cova que fizeram; na rede que ocultaram ficou preso o seu pé.
¹⁶ O Senhor é conhecido pelo juízo que fez; enlaçado foi o ímpio nas obras de suas mãos. (Higaiom; Selá.)
¹⁷ Os ímpios serão lançados no inferno, e todas as nações que se esquecem de Deus.
¹⁸ Porque o necessitado não será esquecido para sempre, nem a expectação dos pobres perecerá perpetuamente.
¹⁹ Levanta-te, Senhor; não prevaleça o homem; sejam julgados os gentios diante da tua face.
²⁰ Põe-os em medo, Senhor, para que saibam as nações que são formadas por meros homens. (Selá.)
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Salmo 9 diz que o Senhor será para o oprimido?",
                        opcoes: [
                            { numero: 1, texto: "Um juiz severo", correta: false },
                            { numero: 2, texto: "Um alto refúgio em tempos de angústia", correta: true },
                            { numero: 3, texto: "Um caminho de pedras", correta: false },
                            { numero: 4, texto: "Um silêncio eterno", correta: false }
                        ],
                        explicacao: "Salmos 9:9 - Será também o Senhor um alto refúgio para o oprimido; um alto refúgio em tempos de angústia.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },

        10: {
            titulo: "O Clamor contra a Injustiça",
            texto: ` ¹ Por que estás ao longe, Senhor? Por que te escondes nos tempos de angústia?
² Os ímpios na sua arrogância perseguem furiosamente o pobre; sejam apanhados nas ciladas que maquinaram.
³ Porque o ímpio gloria-se do desejo da sua alma; bendiz ao avarento, e renuncia ao Senhor.
⁴ Pela altivez do seu rosto o ímpio não busca a Deus; todas as suas cogitações são que não há Deus.
⁵ Os seus caminhos atormentam sempre; os teus juízos estão longe da vista dele, em grande altura, e despreza aos seus inimigos.
⁶ Diz em seu coração: Não serei abalado, porque nunca me verei na adversidade.
⁷ A sua boca está cheia de maldições, de enganos e de astúcia; debaixo da sua língua há malícia e maldade.
⁸ Põe-se de emboscada nas aldeias; nos lugares ocultos mata o inocente; os seus olhos estão ocultamente fixos sobre o pobre.
⁹ Arma ciladas no esconderijo, como o leão no seu covil; arma ciladas para roubar o pobre; rouba o pobre, prendendo-o na sua rede.
¹⁰ Encolhe-se, abaixa-se, para que os pobres caiam em suas fortes garras.
¹¹ Diz em seu coração: Deus esqueceu-se, cobriu o seu rosto, e nunca isto verá.
¹² Levanta-te, Senhor. Ó Deus, levanta a tua mão; não te esqueças dos humildes.
¹³ Por que blasfema o ímpio de Deus? Dizendo no seu coração: Tu não o esquadrinharás?
¹⁴ Tu o viste, porque atentas para o trabalho e enfado, para o retribuir com tuas mãos; a ti o pobre se encomenda; tu és o auxílio do órfão.
¹⁵ Quebra o braço do ímpio e malvado; busca a sua impiedade, até que nenhuma encontres.
¹⁶ O Senhor é Rei eterno; da sua terra perecerão os gentios.
¹⁷ Senhor, tu ouviste os desejos dos mansos; confortarás os seus corações; os teus ouvidos estarão abertos para eles;
¹⁸ Para fazer justiça ao órfão e ao oprimido, a fim de que o homem da terra não prossiga mais em usar da violência.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o ímpio diz no seu coração sobre Deus, segundo o Salmo 10?",
                        opcoes: [
                            { numero: 1, texto: "Que Deus é amor", correta: false },
                            { numero: 2, texto: "Deus se esqueceu, cobriu o seu rosto, nunca o verá", correta: true },
                            { numero: 3, texto: "Que Deus punirá o mal imediatamente", correta: false },
                            { numero: 4, texto: "Que deve oferecer sacrifícios", correta: false }
                        ],
                        explicacao: "Salmos 10:11 - Diz em seu coração: Deus esqueceu-se, cobriu o seu rosto, nunca o verá.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        11: {
            titulo: "O Refúgio no Senhor",
            texto: ` ¹ No Senhor confio; como dizeis à minha alma: Fugi para a vossa montanha como pássaro?
² Pois eis que os ímpios armam o arco, põem as flechas na corda, para com elas atirarem, às escuras, aos retos de coração.
³ Se forem destruídos os fundamentos, que poderá fazer o justo?
⁴ O Senhor está no seu santo templo, o trono do Senhor está nos céus; os seus olhos estão atentos, e as suas pálpebras provam os filhos dos homens.
⁵ O Senhor prova o justo; porém ao ímpio e ao que ama a violência odeia a sua alma.
⁶ Sobre os ímpios fará chover laços, fogo, enxofre e vento tempestuoso; isto será a porção do seu copo.
⁷ Porque o Senhor é justo, e ama a justiça; o seu rosto olha para os retos.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é a resposta do salmista para aqueles que dizem para sua alma fugir como um pássaro para o monte?",
                        opcoes: [
                            { numero: 1, texto: "No Senhor confio", correta: true },
                            { numero: 2, texto: "Vou preparar minhas flechas", correta: false },
                            { numero: 3, texto: "O monte é mais seguro", correta: false },
                            { numero: 4, texto: "Não há esperança", correta: false }
                        ],
                        explicacao: "Salmos 11:1 - No Senhor confio; como dizeis, pois, à minha alma: Fugi para o vosso monte, como pássaro?",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        12: {
            titulo: "A Pureza das Palavras do Senhor",
            texto: ` ¹ Salva-nos, Senhor, porque faltam os homens bons; porque são poucos os fiéis entre os filhos dos homens.
² Cada um fala com falsidade ao seu próximo; falam com lábios lisonjeiros e coração dobrado.
³ O Senhor cortará todos os lábios lisonjeiros e a língua que fala soberbamente.
⁴ Pois dizem: Com a nossa língua prevaleceremos; são nossos os lábios; quem é senhor sobre nós?
⁵ Pela opressão dos pobres, pelo gemido dos necessitados me levantarei agora, diz o Senhor; porei a salvo aquele para quem eles assopram.
⁶ As palavras do Senhor são palavras puras, como prata refinada em fornalha de barro, purificada sete vezes.
⁷ Tu os guardarás, Senhor; desta geração os preservarás para sempre.
⁸ Os ímpios andam por toda parte, quando os mais vis dos filhos dos homens são exaltados.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o Salmo 12 descreve a pureza das palavras do Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Como mel doce", correta: false },
                            { numero: 2, texto: "Como prata refinada em forno de barro, purificada sete vezes", correta: true },
                            { numero: 3, texto: "Como o brilho do sol", correta: false },
                            { numero: 4, texto: "Como o vento da manhã", correta: false }
                        ],
                        explicacao: "Salmos 12:6 - As palavras do Senhor são palavras puras, como prata refinada em forno de barro, purificada sete vezes.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        13: {
            titulo: "A Oração na Angústia",
            texto: `¹ Até quando te esquecerás de mim, Senhor? Para sempre? Até quando esconderás de mim o teu rosto?
² Até quando consultarei com a minha alma, tendo tristeza no meu coração cada dia? Até quando se exaltará sobre mim o meu inimigo?
³ Atende-me, ouve-me, ó Senhor meu Deus; ilumina os meus olhos para que eu não adormeça na morte;
⁴ Para que o meu inimigo não diga: Prevaleci contra ele; e os meus adversários não se alegrem, vindo eu a vacilar.
⁵ Mas eu confio na tua benignidade; na tua salvação se alegrará o meu coração.
⁶ Cantarei ao Senhor, porquanto me tem feito muito bem.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual pergunta aflita o salmista repete quatro vezes no início deste Salmo?",
                        opcoes: [
                            { numero: 1, texto: "Onde estais?", correta: false },
                            { numero: 2, texto: "Até quando, Senhor?", correta: true },
                            { numero: 3, texto: "Por que eu?", correta: false },
                            { numero: 4, texto: "Quem me salvará?", correta: false }
                        ],
                        explicacao: "Salmos 13:1-2 - Até quando se esquecerá de mim, Senhor? Para sempre? Até quando esconderá de mim o seu rosto?",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        14: {
            titulo: "A Estultícia dos Homens",
            texto: ` ¹ Disse o néscio no seu coração: Não há Deus. Têm-se corrompido, fazem-se abomináveis em suas obras, não há ninguém que faça o bem.
² O Senhor olhou desde os céus para os filhos dos homens, para ver se havia algum que tivesse entendimento e buscasse a Deus.
³ Desviaram-se todos e juntamente se fizeram imundos: não há quem faça o bem, não há sequer um.
⁴ Não terão conhecimento os que praticam a iniquidade, os quais comem o meu povo, como se comessem pão, e não invocam ao Senhor?
⁵ Ali se acharam em grande pavor, porque Deus está na geração dos justos.
⁶ Vós envergonhais o conselho dos pobres, porquanto o Senhor é o seu refúgio.
⁷ Oh, se de Sião tivera já vindo a redenção de Israel! Quando o Senhor fizer voltar os cativos do seu povo, se regozijará Jacó e se alegrará Israel.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que diz o néscio (tolo) no seu coração?",
                        opcoes: [
                            { numero: 1, texto: "Deus é muito rigoroso", correta: false },
                            { numero: 2, texto: "Não há Deus", correta: true },
                            { numero: 3, texto: "O mundo vai acabar", correta: false },
                            { numero: 4, texto: "Eu sou o rei", correta: false }
                        ],
                        explicacao: "Salmos 14:1 - Disse o néscio no seu coração: Não há Deus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        15: {
            titulo: "Quem Habitará no Teu Tabernáculo?",
            texto: ` ¹ Senhor, quem habitará no teu tabernáculo? Quem morará no teu santo monte?
² Aquele que anda sinceramente, e pratica a justiça, e fala a verdade no seu coração.
³ Aquele que não difama com a sua língua, nem faz mal ao seu próximo, nem aceita nenhum opróbrio contra o seu próximo;
⁴ A cujos olhos o réprobo é desprezado; mas honra os que temem ao Senhor; aquele que jura com dano seu, e contudo não muda.
⁵ Aquele que não dá o seu dinheiro com usura, nem recebe peitas contra o inocente. Quem faz isto nunca será abalado.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Segundo o Salmo 15, quem habitará no santo monte do Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Aquele que fala com eloquência", correta: false },
                            { numero: 2, texto: "Aquele que vive com integridade, pratica a justiça e fala a verdade no coração", correta: true },
                            { numero: 3, texto: "Somente os sacerdotes", correta: false },
                            { numero: 4, texto: "Quem oferece mais ouro", correta: false }
                        ],
                        explicacao: "Salmos 15:1-2 - Senhor, quem habitará no teu tabernáculo? ... Aquele que anda em sinceridade, e pratica a justiça, e fala a verdade no seu coração.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/salmos.js (Continuação: Salmos 16-25)

        16: {
            titulo: "A Herança do Justo",
            texto: `¹ Guarda-me, ó Deus, porque em ti confio.
² A minha alma disse ao Senhor: Tu és o meu Senhor, a minha bondade não chega à tua presença,
³ Mas aos santos que estão na terra, e aos ilustres em quem está todo o meu prazer.
⁴ As dores se multiplicarão àqueles que se apressam a fazer oferendas a outro deus; eu não oferecerei as suas libações de sangue, nem tomarei os seus nomes nos meus lábios.
⁵ O Senhor é a porção da minha herança e do meu cálice; tu sustentas a minha sorte.
⁶ As linhas caem-me em lugares deliciosos: sim, coube-me uma formosa herança.
⁷ Louvarei ao Senhor que me aconselhou; até as minhas entranhas me ensinam de noite.
⁸ Tenho posto o Senhor continuamente diante de mim; por isso que ele está à minha mão direita, nunca vacilarei.
⁹ Portanto está alegre o meu coração e se regozija a minha glória; também a minha carne repousará segura.
¹⁰ Pois não deixarás a minha alma no inferno, nem permitirás que o teu Santo veja corrupção.
¹¹ Far-me-ás ver a vereda da vida; na tua presença há fartura de alegrias; à tua mão direita há delícias perpetuamente.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista diz sobre a sua herança e o seu cálice?",
                        opcoes: [
                            { numero: 1, texto: "São feitos de ouro", correta: false },
                            { numero: 2, texto: "O Senhor é a porção da minha herança e do meu cálice", correta: true },
                            { numero: 3, texto: "Foram tirados pelos inimigos", correta: false },
                            { numero: 4, texto: "São segredos guardados", correta: false }
                        ],
                        explicacao: "Salmos 16:5 - O Senhor é a porção da minha herança e do meu cálice; tu sustentas a minha sorte.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        17: {
            titulo: "Oração de Proteção",
            texto: ` ¹ Ouve, Senhor, a justiça; atende ao meu clamor; dá ouvidos à minha oração, que não é feita com lábios enganosos.
² Saia a minha sentença de diante do teu rosto; atendam os teus olhos à razão.
³ Provaste o meu coração; visitaste-me de noite; examinaste-me, e nada achaste; propus que a minha boca não transgredirá.
⁴ Quanto ao trato dos homens, pela palavra dos teus lábios me guardei das veredas do destruidor.
⁵ Dirige os meus passos nos teus caminhos, para que as minhas pegadas não vacilem.
⁶ Eu te invoquei, ó Deus, pois me queres ouvir; inclina para mim os teus ouvidos, e escuta as minhas palavras.
⁷ Faze maravilhosas as tuas beneficências, ó tu que livras aqueles que em ti confiam dos que se levantam contra a tua destra.
⁸ Guarda-me como à menina do olho; esconde-me debaixo da sombra das tuas asas,
⁹ Dos ímpios que me oprimem, dos meus inimigos mortais que me andam cercando.
¹⁰ Na sua gordura se encerram, com a boca falam soberbamente.
¹¹ Têm-nos cercado agora nossos passos; e baixaram os seus olhos para a terra;
¹² Parecem-se com o leão que deseja arrebatar a sua presa, e com o leãozinho que se põe em esconderijos.
¹³ Levanta-te, Senhor, detém-no, derriba-o, livra a minha alma do ímpio, com a tua espada;
¹⁴ Dos homens com a tua mão, Senhor, dos homens do mundo, cuja porção está nesta vida, e cujo ventre enches do teu tesouro oculto. Estão fartos de filhos e dão os seus sobejos às suas crianças.
¹⁵ Quanto a mim, contemplarei a tua face na justiça; eu me satisfarei da tua semelhança quando acordar.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Davi pede que Deus o guarde dos perversos?",
                        opcoes: [
                            { numero: 1, texto: "Como um leão na selva", correta: false },
                            { numero: 2, texto: "Como a menina do olho; à sombra das tuas asas", correta: true },
                            { numero: 3, texto: "Como uma torre de pedra", correta: false },
                            { numero: 4, texto: "Como o vento que sopra", correta: false }
                        ],
                        explicacao: "Salmos 17:8 - Guarda-me como à menina do olho; esconde-me à sombra das tuas asas.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        18: {
            titulo: "Ação de Graças pela Vitória",
            texto: ` ¹ Eu te amarei, ó Senhor, fortaleza minha.
² O Senhor é o meu rochedo, e o meu lugar forte, e o meu libertador; o meu Deus, a minha fortaleza, em quem confio; o meu escudo, a força da minha salvação, e o meu alto refúgio.
³ Invocarei o nome do Senhor, que é digno de louvor, e ficarei livre dos meus inimigos.
⁴ Tristezas de morte me cercaram, e torrentes de impiedade me assombraram.
⁵ Tristezas do inferno me cingiram, laços de morte me surpreenderam.
⁶ Na angústia invoquei ao Senhor, e clamei ao meu Deus; desde o seu templo ouviu a minha voz, aos seus ouvidos chegou o meu clamor perante a sua face.
⁷ Então a terra se abalou e tremeu; e os fundamentos dos montes também se moveram e se abalaram, porquanto se indignou.
⁸ Das suas narinas subiu fumaça, e da sua boca saiu fogo que consumia; carvões se acenderam dele.
⁹ Abaixou os céus, e desceu, e a escuridão estava debaixo de seus pés.
¹⁰ E montou num querubim, e voou; sim, voou sobre as asas do vento.
¹¹ Fez das trevas o seu lugar oculto; o pavilhão que o cercava era a escuridão das águas e as nuvens dos céus.
¹² Ao resplendor da sua presença as nuvens se espalharam, e a saraiva e as brasas de fogo.
¹³ E o Senhor trovejou nos céus, o Altíssimo levantou a sua voz; e houve saraiva e brasas de fogo.
¹⁴ Mandou as suas setas, e as espalhou; multiplicou raios, e os desbaratou.
¹⁵ Então foram vistas as profundezas das águas, e foram descobertos os fundamentos do mundo, pela tua repreensão, Senhor, ao sopro das tuas narinas.
¹⁶ Enviou desde o alto, e me tomou; tirou-me das muitas águas.
¹⁷ Livrou-me do meu inimigo forte e dos que me odiavam, pois eram mais poderosos do que eu.
¹⁸ Surpreenderam-me no dia da minha calamidade; mas o Senhor foi o meu amparo.
¹⁹ Trouxe-me para um lugar espaçoso; livrou-me, porque tinha prazer em mim.
²⁰ Recompensou-me o Senhor conforme a minha justiça, retribuiu-me conforme a pureza das minhas mãos.
²¹ Porque guardei os caminhos do Senhor, e não me apartei impiamente do meu Deus.
²² Porque todos os seus juízos estavam diante de mim, e não rejeitei os seus estatutos.
²³ Também fui sincero perante ele, e me guardei da minha iniquidade.
²⁴ Assim que retribuiu-me o Senhor conforme a minha justiça, conforme a pureza de minhas mãos perante os seus olhos.
²⁵ Com o benigno te mostrarás benigno; e com o homem sincero te mostrarás sincero;
²⁶ Com o puro te mostrarás puro; e com o perverso te mostrarás indomável.
²⁷ Porque tu livrarás o povo aflito, e abaterás os olhos altivos.
²⁸ Porque tu acenderás a minha candeia; o Senhor meu Deus iluminará as minhas trevas.
²⁹ Porque contigo entrei pelo meio de uma tropa, com o meu Deus saltei uma muralha.
³⁰ O caminho de Deus é perfeito; a palavra do Senhor é provada; é um escudo para todos os que nele confiam.
³¹ Porque quem é Deus senão o Senhor? E quem é rochedo senão o nosso Deus?
³² Deus é o que me cinge de força e aperfeiçoa o meu caminho.
³³ Faz os meus pés como os das cervas, e põe-me nas minhas alturas.
³⁴ Ensina as minhas mãos para a guerra, de sorte que os meus braços quebraram um arco de cobre.
³⁵ Também me deste o escudo da tua salvação; a tua mão direita me susteve, e a tua mansidão me engrandeceu.
³⁶ Alargaste os meus passos debaixo de mim, de maneira que os meus pés não vacilaram.
³⁷ Persegui os meus inimigos, e os alcancei; não voltei senão depois de os ter consumido.
³⁸ Atravessei-os de sorte que não se puderam levantar; caíram debaixo dos meus pés.
³⁹ Pois me cingiste de força para a peleja; fizeste abater debaixo de mim aqueles que contra mim se levantaram.
⁴⁰ Deste-me também o pescoço dos meus inimigos para que eu pudesse destruir os que me odeiam.
⁴¹ Clamaram, mas não houve quem os livrasse; até ao Senhor, mas ele não lhes respondeu.
⁴² Então os esmiucei como o pó diante do vento; deitei-os fora como a lama das ruas.
⁴³ Livraste-me das contendas do povo, e me fizeste cabeça dos gentios; um povo que não conheci me servirá.
⁴⁴ Em ouvindo a minha voz, me obedecerão; os estranhos se submeterão a mim.
⁴⁵ Os estranhos descairão, e terão medo nos seus esconderijos.
⁴⁶ O Senhor vive; e bendito seja o meu rochedo, e exaltado seja o Deus da minha salvação.
⁴⁷ É Deus que me vinga inteiramente, e sujeita os povos debaixo de mim;
⁴⁸ O que me livra de meus inimigos; sim, tu me exaltas sobre os que se levantam contra mim, tu me livras do homem violento.
⁴⁹ Assim que, ó Senhor, te louvarei entre os gentios, e cantarei louvores ao teu nome,
⁵⁰ Pois engrandece a salvação do seu rei, e usa de benignidade com o seu ungido, com Davi, e com a sua semente para sempre.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "No Salmo 18, como Davi chama o Senhor após ser livre de seus inimigos?",
                        opcoes: [
                            { numero: 1, texto: "Meu rochedo, minha fortaleza e meu libertador", correta: true },
                            { numero: 2, texto: "Meu mestre de justiça", correta: false },
                            { numero: 3, texto: "Dono do meu palácio", correta: false },
                            { numero: 4, texto: "Juiz das nações", correta: false }
                        ],
                        explicacao: "Salmos 18:2 - O Senhor é o meu rochedo, a minha fortaleza e o meu libertador; o meu Deus, a minha eficácia, em quem confio...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        19: {
            titulo: "A Revelação de Deus",
            texto: `¹ Os céus declaram a glória de Deus e o firmamento anuncia a obra das suas mãos.
² Um dia faz declaração a outro dia, e uma noite mostra sabedoria a outra noite.
³ Não há linguagem nem fala onde não se ouça a sua voz.
⁴ A sua linha se estende por toda a terra, e as suas palavras até ao fim do mundo. Neles pôs uma tenda para o sol,
⁵ O qual é como um noivo que sai do seu tálamo, e se alegra como um herói, a correr o seu caminho.
⁶ A sua saída é desde uma extremidade dos céus, e o seu curso até à outra extremidade, e nada se esconde ao seu calor.
⁷ A lei do Senhor é perfeita, e refrigera a alma; o testemunho do Senhor é fiel, e dá sabedoria aos símplices.
⁸ Os preceitos do Senhor são retos e alegram o coração; o mandamento do Senhor é puro, e ilumina os olhos.
⁹ O temor do Senhor é limpo, e permanece eternamente; os juízos do Senhor são verdadeiros e justos juntamente.
¹⁰ Mais desejáveis são do que o ouro, sim, do que muito ouro fino; e mais doces do que o mel e o licor dos favos.
¹¹ Também por eles é admoestado o teu servo; e em os guardar há grande recompensa.
¹² Quem pode entender os seus erros? Purifica-me tu dos que me são ocultos.
¹³ Também da soberba guarda o teu servo, para que se não assenhoreie de mim. Então serei sincero, e ficarei limpo de grande transgressão.
¹⁴ Sejam agradáveis as palavras da minha boca e a meditação do meu coração perante a tua face, Senhor, Rocha minha e Redentor meu!
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que os céus e o firmamento proclamam?",
                        opcoes: [
                            { numero: 1, texto: "O fim dos tempos", correta: false },
                            { numero: 2, texto: "A glória de Deus e as obras de suas mãos", correta: true },
                            { numero: 3, texto: "A história dos reis", correta: false },
                            { numero: 4, texto: "O brilho das estrelas apenas", correta: false }
                        ],
                        explicacao: "Salmos 19:1 - Os céus declaram a glória de Deus e o firmamento anuncia a obra das suas mãos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        20: {
            titulo: "Oração pela Vitória do Rei",
            texto: ` ¹ O Senhor te ouça no dia da angústia, o nome do Deus de Jacó te proteja.
² Envie-te socorro desde o seu santuário, e te sustenha desde Sião.
³ Lembre-se de todas as tuas ofertas, e aceite os teus holocaustos. (Selá.)
⁴ Conceda-te conforme ao teu coração, e cumpra todo o teu plano.
⁵ Nós nos alegraremos pela tua salvação, e em nome do nosso Deus arvoraremos pendões; cumpra o Senhor todas as tuas petições.
⁶ Agora sei que o Senhor salva o seu ungido; ele o ouvirá desde o seu santo céu, com a força salvadora da sua mão direita.
⁷ Uns confiam em carros e outros em cavalos, mas nós faremos menção do nome do Senhor nosso Deus.
⁸ Uns encurvam-se e caem, mas nós nos levantamos e estamos de pé.
⁹ Salva-nos, Senhor; ouça-nos o rei quando clamarmos.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Em que uns confiam em carros e outros em cavalos, em que confiam os servos de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Em suas próprias espadas", correta: false },
                            { numero: 2, texto: "No nome do Senhor nosso Deus", correta: true },
                            { numero: 3, texto: "Na força das muralhas", correta: false },
                            { numero: 4, texto: "No número de soldados", correta: false }
                        ],
                        explicacao: "Salmos 20:7 - Uns confiam em carros e outros em cavalos, mas nós faremos menção do nome do Senhor nosso Deus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        21: {
            titulo: "Alegria na Salvação",
            texto: ` ¹ O rei se alegra em tua força, Senhor; e na tua salvação grandemente se regozija.
² Cumpriste-lhe o desejo do seu coração, e não negaste as súplicas dos seus lábios. (Selá.)
³ Pois vais ao seu encontro com as bênçãos de bondade; pões na sua cabeça uma coroa de ouro fino.
⁴ Vida te pediu, e lha deste, mesmo longura de dias para sempre e eternamente.
⁵ Grande é a sua glória pela tua salvação; glória e majestade puseste sobre ele.
⁶ Pois o abençoaste para sempre; tu o enches de gozo com a tua face.
⁷ Porque o rei confia no Senhor, e pela misericórdia do Altíssimo nunca vacilará.
⁸ A tua mão alcançará todos os teus inimigos, a tua mão direita alcançará aqueles que te odeiam.
⁹ Tu os farás como um forno de fogo no tempo da tua ira; o Senhor os devorará na sua indignação, e o fogo os consumirá.
¹⁰ Seu fruto destruirás da terra, e a sua semente dentre os filhos dos homens.
¹¹ Porque intentaram o mal contra ti; maquinaram um ardil, mas não prevalecerão.
¹² Assim que tu lhes farás voltar as costas; e com tuas flechas postas nas cordas lhes apontarás ao rosto.
¹³ Exalta-te, Senhor, na tua força; então cantaremos e louvaremos o teu poder.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que foi colocado sobre a cabeça do rei, segundo o Salmo 21?",
                        opcoes: [
                            { numero: 1, texto: "Um elmo de bronze", correta: false },
                            { numero: 2, texto: "Uma coroa de ouro fino", correta: true },
                            { numero: 3, texto: "Uma guirlanda de flores", correta: false },
                            { numero: 4, texto: "Um manto real", correta: false }
                        ],
                        explicacao: "Salmos 21:3 - ...puseste na sua cabeça uma coroa de ouro fino.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        22: {
            titulo: "O Grito de Angústia e Profecia",
            texto: `¹ Deus meu, Deus meu, por que me desamparaste? Por que te alongas do meu auxílio e das palavras do meu bramido?
² Deus meu, eu clamo de dia, e tu não me ouves; de noite, e não tenho sossego.
³ Porém tu és santo, tu que habitas entre os louvores de Israel.
⁴ Em ti confiaram nossos pais; confiaram, e tu os livraste.
⁵ A ti clamaram e escaparam; em ti confiaram, e não foram confundidos.
⁶ Mas eu sou verme, e não homem, opróbrio dos homens e desprezado do povo.
⁷ Todos os que me veem zombam de mim, estendem os lábios e meneiam a cabeça, dizendo:
⁸ Confiou no Senhor, que o livre; livre-o, pois nele tem prazer.
⁹ Mas tu és o que me tiraste do ventre; fizeste-me confiar, estando aos seios de minha mãe.
¹⁰ Sobre ti fui lançado desde a madre; tu és o meu Deus desde o ventre de minha mãe.
¹¹ Não te alongues de mim, pois a angústia está perto, e não há quem ajude.
¹² Muitos touros me cercaram; fortes touros de Basã me rodearam.
¹³ Abriram contra mim suas bocas, como um leão que despedaça e que ruge.
¹⁴ Como água me derramei, e todos os meus ossos se desconjuntaram; o meu coração é como cera, derreteu-se no meio das minhas entranhas.
¹⁵ A minha força se secou como um caco, e a língua se me pega ao paladar; e me puseste no pó da morte.
¹⁶ Pois me rodearam cães; o ajuntamento de malfeitores me cercou, traspassaram-me as mãos e os pés.
¹⁷ Poderia contar todos os meus ossos; eles veem e me contemplam.
¹⁸ Repartem entre si as minhas vestes, e lançam sortes sobre a minha roupa.
¹⁹ Mas tu, Senhor, não te alongues de mim. Força minha, apressa-te em socorrer-me.
²⁰ Livra a minha alma da espada, e a minha predileta da força do cão.
²¹ Salva-me da boca do leão; sim, ouviste-me, das pontas dos bois selvagens.
²² Então declararei o teu nome aos meus irmãos; louvar-te-ei no meio da congregação.
²³ Vós, que temeis ao Senhor, louvai-o; todos vós, semente de Jacó, glorificai-o; e temei-o todos vós, semente de Israel.
²⁴ Porque não desprezou nem abominou a aflição do aflito, nem escondeu dele o seu rosto; antes, quando ele clamou, o ouviu.
²⁵ O meu louvor será de ti na grande congregação; pagarei os meus votos perante os que o temem.
²⁶ Os mansos comerão e se fartarão; louvarão ao Senhor os que o buscam; o vosso coração viverá eternamente.
²⁷ Todos os limites da terra se lembrarão, e se converterão ao Senhor; e todas as famílias das nações adorarão perante a tua face.
²⁸ Porque o reino é do Senhor, e ele domina entre as nações.
²⁹ Todos os que na terra são gordos comerão e adorarão, e todos os que descem ao pó se prostrarão perante ele; e nenhum poderá reter viva a sua alma.
³⁰ Uma semente o servirá; será declarada ao Senhor a cada geração.
³¹ Chegarão e anunciarão a sua justiça ao povo que nascer, porquanto ele o fez.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual profecia sobre as vestes do Messias aparece no Salmo 22?",
                        opcoes: [
                            { numero: 1, texto: "Que seriam queimadas", correta: false },
                            { numero: 2, texto: "Repartem entre si as minhas vestes, e lançam sortes sobre a minha túnica", correta: true },
                            { numero: 3, texto: "Que seriam guardadas no templo", correta: false },
                            { numero: 4, texto: "Que seriam dadas aos pobres", correta: false }
                        ],
                        explicacao: "Salmos 22:18 - Repartem entre si as minhas vestes, e lançam sortes sobre a minha túnica.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        23: {
            titulo: "O Bom Pastor",
            texto: ` ¹ O Senhor é o meu pastor, nada me faltará.
² Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas.
³ Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome.
⁴ Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.
⁵ Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda.
⁶ Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do Senhor por longos dias.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde o Senhor faz o seu rebanho repousar e para onde o guia?",
                        opcoes: [
                            { numero: 1, texto: "Em montanhas altas e caminhos perigosos", correta: false },
                            { numero: 2, texto: "Em pastos verdejantes e águas tranquilas", correta: true },
                            { numero: 3, texto: "Em cidades muradas e portos seguros", correta: false },
                            { numero: 4, texto: "Em desertos e cavernas", correta: false }
                        ],
                        explicacao: "Salmos 23:2 - Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        24: {
            titulo: "O Rei da Glória Entra",
            texto: ` ¹ Do Senhor é a terra e a sua plenitude, o mundo e aqueles que nele habitam.
² Porque ele a fundou sobre os mares, e a firmou sobre os rios.
³ Quem subirá ao monte do Senhor, ou quem estará no seu lugar santo?
⁴ Aquele que é limpo de mãos e puro de coração, que não entrega a sua alma à vaidade, nem jura enganosamente.
⁵ Este receberá a bênção do Senhor e a justiça do Deus da sua salvação.
⁶ Esta é a geração daqueles que buscam, daqueles que buscam a tua face, ó Deus de Jacó. (Selá.)
⁷ Levantai, ó portas, as vossas cabeças; levantai-vos, ó entradas eternas, e entrará o Rei da Glória.
⁸ Quem é este Rei da Glória? O Senhor forte e poderoso, o Senhor poderoso na guerra.
⁹ Levantai, ó portas, as vossas cabeças, levantai-vos, ó entradas eternas, e entrará o Rei da Glória.
¹⁰ Quem é este Rei da Glória? O Senhor dos Exércitos, ele é o Rei da Glória. (Selá.)

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "De quem é a terra e a sua plenitude, o mundo e os que nele habitam?",
                        opcoes: [
                            { numero: 1, texto: "Dos reis da terra", correta: false },
                            { numero: 2, texto: "Do Senhor", correta: true },
                            { numero: 3, texto: "De quem a conquistar", correta: false },
                            { numero: 4, texto: "De ninguém", correta: false }
                        ],
                        explicacao: "Salmos 24:1 - Do Senhor é a terra e a sua plenitude, o mundo e aqueles que nele habitam.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        25: {
            titulo: "Oração por Guia e Perdão",
            texto: ` ¹ A ti, Senhor, levanto a minha alma.
² Deus meu, em ti confio, não me deixes confundido, nem que os meus inimigos triunfem sobre mim.
³ Na verdade, não serão confundidos os que esperam em ti; confundidos serão os que transgridem sem causa.
⁴ Faze-me saber os teus caminhos, Senhor; ensina-me as tuas veredas.
⁵ Guia-me na tua verdade, e ensina-me, pois tu és o Deus da minha salvação; por ti estou esperando todo o dia.
⁶ Lembra-te, Senhor, das tuas misericórdias e das tuas benignidades, porque são desde a eternidade.
⁷ Não te lembres dos pecados da minha mocidade, nem das minhas transgressões; mas segundo a tua misericórdia, lembra-te de mim, por tua bondade, Senhor.
⁸ Bom e reto é o Senhor; por isso ensinará o caminho aos pecadores.
⁹ Guiará os mansos em justiça e aos mansos ensinará o seu caminho.
¹⁰ Todas as veredas do Senhor são misericórdia e verdade para aqueles que guardam a sua aliança e os seus testemunhos.
¹¹ Por amor do teu nome, Senhor, perdoa a minha iniquidade, pois é grande.
¹² Qual é o homem que teme ao Senhor? Ele o ensinará no caminho que deve escolher.
¹³ A sua alma pousará no bem, e a sua semente herdará a terra.
¹⁴ O segredo do Senhor é com aqueles que o temem; e ele lhes mostrará a sua aliança.
¹⁵ Os meus olhos estão continuamente no Senhor, pois ele tirará os meus pés da rede.
¹⁶ Olha para mim, e tem piedade de mim, porque estou solitário e aflito.
¹⁷ As ânsias do meu coração se têm multiplicado; tira-me dos meus apertos.
¹⁸ Olha para a minha aflição e para a minha dor, e perdoa todos os meus pecados.
¹⁹ Olha para os meus inimigos, pois se vão multiplicando e me odeiam com ódio cruel.
²⁰ Guarda a minha alma, e livra-me; não me deixes confundido, porquanto confio em ti.
²¹ Guardem-me a sinceridade e a retidão, porquanto espero em ti.
²² Redime, ó Deus, a Israel de todas as suas angústias.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "A quem o Senhor revelará o seu segredo e a sua aliança?",
                        opcoes: [
                            { numero: 1, texto: "Aos que têm muito conhecimento", correta: false },
                            { numero: 2, texto: "Aos que o temem", correta: true },
                            { numero: 3, texto: "Aos que vivem em palácios", correta: false },
                            { numero: 4, texto: "A todos os homens sem distinção", correta: false }
                        ],
                        explicacao: "Salmos 25:14 - O segredo do Senhor é com aqueles que o temem; e ele lhes mostrará a sua aliança.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/salmos.js (Continuação: Salmos 26-35)

        26: {
            titulo: "A Oração do Homem Íntegro",
            texto: `1 Julga-me, Senhor, pois tenho andado em minha sinceridade; tenho confiado também no Senhor; não vacilarei.
2 Examina-me, Senhor, e prova-me; esquadrinha as minhas entranhas e o meu coração.
3 Porque a tua benignidade está diante dos meus olhos; e tenho andado na tua verdade.
4 Não me tenho assentado com homens vãos, nem converso com os homens dissimulados.
5 Tenho odiado a congregação de malfeitores; nem me ajunto com os ímpios.
6 Lavo as minhas mãos na inocência; e assim andarei, Senhor, ao redor do teu altar.
7 Para publicar com voz de louvor, e contar todas as tuas maravilhas.
8 Senhor, eu tenho amado a habitação da tua casa e o lugar onde permanece a tua glória.
9 Não apanhes a minha alma com os pecadores, nem a minha vida com os homens sanguinolentos,
10 Em cujas mãos há malefício, e cuja mão direita está cheia de subornos.
11 Mas eu ando na minha sinceridade; livra-me e tem piedade de mim.
12 O meu pé está posto em caminho plano; nas congregações louvarei ao Senhor. `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista diz amar em relação à casa do Senhor?",
                        opcoes: [
                            { numero: 1, texto: "As colunas de ouro", correta: false },
                            { numero: 2, texto: "A habitação da tua casa e o lugar onde permanece a tua glória", correta: true },
                            { numero: 3, texto: "O silêncio do pátio", correta: false },
                            { numero: 4, texto: "A música dos levitas", correta: false }
                        ],
                        explicacao: "Salmos 26:8 - Senhor, eu tenho amado a habitação da tua casa e o lugar onde permanece a tua glória.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        27: {
            titulo: "Confiança e Coragem",
            texto: ` ¹ O Senhor é a minha luz e a minha salvação; a quem temerei? O Senhor é a força da minha vida; de quem me recearei?
² Quando os malvados, meus adversários e meus inimigos, se chegaram contra mim, para comerem as minhas carnes, tropeçaram e caíram.
³ Ainda que um exército me cercasse, o meu coração não temeria; ainda que a guerra se levantasse contra mim, nisto confiaria.
⁴ Uma coisa pedi ao Senhor, e a buscarei: que possa morar na casa do Senhor todos os dias da minha vida, para contemplar a formosura do Senhor, e inquirir no seu templo.
⁵ Porque no dia da adversidade me esconderá no seu pavilhão; no oculto do seu tabernáculo me esconderá; pôr-me-á sobre uma rocha.
⁶ Também agora a minha cabeça será exaltada sobre os meus inimigos que estão em redor de mim; por isso oferecerei sacrifício de júbilo no seu tabernáculo; cantarei, sim, cantarei louvores ao Senhor.
⁷ Ouve, Senhor, a minha voz quando clamo; tem também piedade de mim, e responde-me.
⁸ Quando tu disseste: Buscai o meu rosto; o meu coração disse a ti: O teu rosto, Senhor, buscarei.
⁹ Não escondas de mim a tua face, não rejeites ao teu servo com ira; tu foste a minha ajuda, não me deixes nem me desampares, ó Deus da minha salvação.
¹⁰ Porque, quando meu pai e minha mãe me desampararem, o Senhor me recolherá.
¹¹ Ensina-me, Senhor, o teu caminho, e guia-me pela vereda direita, por causa dos meus inimigos.
¹² Não me entregues à vontade dos meus adversários; pois se levantaram falsas testemunhas contra mim, e os que respiram crueldade.
¹³ Pereceria sem dúvida, se não cresse que veria a bondade do Senhor na terra dos viventes.
¹⁴ Espera no Senhor, anima-te, e ele fortalecerá o teu coração; espera, pois, no Senhor.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é a única coisa que o salmista pediu ao Senhor e a buscará?",
                        opcoes: [
                            { numero: 1, texto: "Riquezas e terras", correta: false },
                            { numero: 2, texto: "Que possa morar na casa do Senhor todos os dias da sua vida", correta: true },
                            { numero: 3, texto: "A derrota de todos os seus irmãos", correta: false },
                            { numero: 4, texto: "Vida longa e sem dores", correta: false }
                        ],
                        explicacao: "Salmos 27:4 - Uma coisa pedi ao Senhor, e a buscarei: que possa morar na casa do Senhor todos os dias da minha vida...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        28: {
            titulo: "O Senhor é a Força do Seu Povo",
            texto: `¹ A ti clamarei, ó Senhor, Rocha minha; não emudeças para comigo; não aconteça, calando-te tu para comigo, que eu fique semelhante aos que descem ao abismo.
² Ouve a voz das minhas súplicas, quando a ti clamar, quando levantar as minhas mãos para o teu santo oráculo.
³ Não me arrastes com os ímpios e com os que praticam a iniquidade; que falam de paz ao seu próximo, mas têm mal nos seus corações.
⁴ Dá-lhes segundo as suas obras e segundo a malícia dos seus esforços; dá-lhes conforme a obra das suas mãos; torna-lhes a sua recompensa.
⁵ Porquanto não atentam às obras do Senhor, nem à obra das suas mãos; pois que ele os derrubará e não os reedificará.
⁶ Bendito seja o Senhor, porque ouviu a voz das minhas súplicas.
⁷ O Senhor é a minha força e o meu escudo; nele confiou o meu coração, e fui socorrido; assim o meu coração salta de prazer, e com o meu canto o louvarei.
⁸ O Senhor é a força do seu povo; também é a força salvadora do seu ungido.
⁹ Salva o teu povo, e abençoa a tua herança; e apascenta-os e exalta-os para sempre.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o salmista descreve o Senhor neste Salmo de súplica?",
                        opcoes: [
                            { numero: 1, texto: "Minha força e o meu escudo", correta: true },
                            { numero: 2, texto: "Uma nuvem passageira", correta: false },
                            { numero: 3, texto: "O fogo que consome", correta: false },
                            { numero: 4, texto: "Um rei distante", correta: false }
                        ],
                        explicacao: "Salmos 28:7 - O Senhor é a minha força e o meu escudo; nele confiou o meu coração, e fui socorrido...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        29: {
            titulo: "A Voz do Senhor na Tempestade",
            texto: ` ¹ Dai ao Senhor, ó filhos dos poderosos, dai ao Senhor glória e força.
² Dai ao Senhor a glória devida ao seu nome, adorai o Senhor na beleza da santidade.
³ A voz do Senhor ouve-se sobre as suas águas; o Deus da glória troveja; o Senhor está sobre as muitas águas.
⁴ A voz do Senhor é poderosa; a voz do Senhor é cheia de majestade.
⁵ A voz do Senhor quebra os cedros; sim, o Senhor quebra os cedros do Líbano.
⁶ Ele os faz saltar como um bezerro; ao Líbano e Siriom, como filhotes de bois selvagens.
⁷ A voz do Senhor separa as labaredas do fogo.
⁸ A voz do Senhor faz tremer o deserto; o Senhor faz tremer o deserto de Cades.
⁹ A voz do Senhor faz parir as cervas, e descobre as florestas; e no seu templo cada um fala da sua glória.
¹⁰ O Senhor se assentou sobre o dilúvio; o Senhor se assenta como Rei, perpetuamente.
¹¹ O Senhor dará força ao seu povo; o Senhor abençoará o seu povo com paz.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que a voz do Senhor faz com os cedros do Líbano?",
                        opcoes: [
                            { numero: 1, texto: "Faz os cedros crescerem", correta: false },
                            { numero: 2, texto: "A voz do Senhor quebra os cedros", correta: true },
                            { numero: 3, texto: "Faz os cedros florescerem", correta: false },
                            { numero: 4, texto: "Protege os cedros", correta: false }
                        ],
                        explicacao: "Salmos 29:5 - A voz do Senhor quebra os cedros; sim, o Senhor quebra os cedros do Líbano.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        30: {
            titulo: "A Alegria vem pela Manhã",
            texto: `¹ Exaltar-te-ei, ó Senhor, porque tu me exaltaste; e não fizeste com que meus inimigos se alegrassem sobre mim.
² Senhor meu Deus, clamei a ti, e tu me saraste.
³ Senhor, fizeste subir a minha alma da sepultura; conservaste-me a vida para que não descesse ao abismo.
⁴ Cantai ao Senhor, vós que sois seus santos, e celebrai a memória da sua santidade.
⁵ Porque a sua ira dura só um momento; no seu favor está a vida. O choro pode durar uma noite, mas a alegria vem pela manhã.
⁶ Eu dizia na minha prosperidade: Não vacilarei jamais.
⁷ Tu, Senhor, pelo teu favor fizeste forte a minha montanha; tu encobriste o teu rosto, e fiquei perturbado.
⁸ A ti, Senhor, clamei, e ao Senhor supliquei.
⁹ Que proveito há no meu sangue, quando desço à cova? Porventura te louvará o pó? Anunciará ele a tua verdade?
¹⁰ Ouve, Senhor, e tem piedade de mim, Senhor; sê o meu auxílio.
¹¹ Tornaste o meu pranto em folguedo; desataste o meu pano de saco, e me cingiste de alegria,
¹² Para que a minha glória a ti cante louvores, e não se cale. Senhor, meu Deus, eu te louvarei para sempre.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quanto tempo dura a ira de Deus e quanto tempo dura o Seu favor?",
                        opcoes: [
                            { numero: 1, texto: "A ira dura um ano e o favor um dia", correta: false },
                            { numero: 2, texto: "A sua ira dura só um momento; no seu favor está a vida", correta: true },
                            { numero: 3, texto: "Ambos duram para sempre", correta: false },
                            { numero: 4, texto: "A ira é eterna", correta: false }
                        ],
                        explicacao: "Salmos 30:5 - Porque a sua ira dura só um momento; no seu favor está a vida. O choro pode durar uma noite, mas a alegria vem pela manhã.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        31: {
            titulo: "Nas Tuas Mãos Entrego o meu Espírito",
            texto: `¹ Em ti, Senhor, confio; nunca me deixes confundido. Livra-me pela tua justiça.
² Inclina para mim os teus ouvidos, livra-me depressa; sê a minha firme rocha, uma casa fortíssima que me salve.
³ Porque tu és a minha rocha e a minha fortaleza; assim, por amor do teu nome, guia-me e encaminha-me.
⁴ Tira-me da rede que para mim esconderam, pois tu és a minha força.
⁵ Nas tuas mãos encomendo o meu espírito; tu me redimiste, Senhor Deus da verdade.
⁶ Odeio aqueles que se entregam a vaidades enganosas; eu, porém, confio no Senhor.
⁷ Eu me alegrarei e regozijarei na tua benignidade, pois consideraste a minha aflição; conheceste a minha alma nas angústias.
⁸ E não me entregaste nas mãos do inimigo; puseste os meus pés num lugar espaçoso.
⁹ Tem misericórdia de mim, ó Senhor, porque estou angustiado. Consumidos estão de tristeza os meus olhos, a minha alma e o meu ventre.
¹⁰ Porque a minha vida está gasta de tristeza, e os meus anos de suspiros; a minha força descai por causa da minha iniquidade, e os meus ossos se consomem.
¹¹ Fui opróbrio entre todos os meus inimigos, até entre os meus vizinhos, e horror para os meus conhecidos; os que me viam na rua fugiam de mim.
¹² Estou esquecido no coração deles, como um morto; sou como um vaso quebrado.
¹³ Pois ouvi a murmuração de muitos, temor havia ao redor; enquanto juntamente consultavam contra mim, intentaram tirar-me a vida.
¹⁴ Mas eu confiei em ti, Senhor; e disse: Tu és o meu Deus.
¹⁵ Os meus tempos estão nas tuas mãos; livra-me das mãos dos meus inimigos e dos que me perseguem.
¹⁶ Faze resplandecer o teu rosto sobre o teu servo; salva-me por tuas misericórdias.
¹⁷ Não me deixes confundido, Senhor, porque te tenho invocado. Deixa confundidos os ímpios, e emudeçam na sepultura.
¹⁸ Emudeçam os lábios mentirosos que falam coisas más com soberba e desprezo contra o justo.
¹⁹ Oh! Quão grande é a tua bondade, que guardaste para os que te temem, a qual operaste para aqueles que em ti confiam na presença dos filhos dos homens!
²⁰ Tu os esconderás, no secreto da tua presença, dos desaforos dos homens; encobri-los-ás em um pavilhão, da contenda das línguas.
²¹ Bendito seja o Senhor, pois fez maravilhosa a sua misericórdia para comigo em cidade segura.
²² Pois eu dizia na minha pressa: Estou cortado de diante dos teus olhos; não obstante, tu ouviste a voz das minhas súplicas, quando eu a ti clamei.
²³ Amai ao Senhor, vós todos que sois seus santos; porque o Senhor guarda os fiéis e retribui com abundância ao que usa de soberba.
²⁴ Esforçai-vos, e ele fortalecerá o vosso coração, vós todos que esperais no Senhor.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual frase do Salmo 31 foi proferida por Jesus na cruz?",
                        opcoes: [
                            { numero: 1, texto: "Senhor, perdoa-lhes", correta: false },
                            { numero: 2, texto: "Nas tuas mãos encomendo o meu espírito", correta: true },
                            { numero: 3, texto: "Tenho sede", correta: false },
                            { numero: 4, texto: "Tudo está acabado", correta: false }
                        ],
                        explicacao: "Salmos 31:5 - Nas tuas mãos encomendo o meu espírito; tu me remiste, Senhor Deus da verdade.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        32: {
            titulo: "Ocultar ou Confessar o Pecado",
            texto: `1 Bem-aventurado aquele cuja transgressão é perdoada, e cujo pecado é coberto.
2 Bem-aventurado o homem a quem o Senhor não imputa maldade, e em cujo espírito não há engano.
3 Quando eu guardei silêncio, envelheceram os meus ossos pelo meu bramido em todo o dia.
4 Porque de dia e de noite a tua mão pesava sobre mim; o meu humor se tornou em sequidão de estio. (Selá.)
5 Confessei-te o meu pecado, e a minha maldade não encobri. Dizia eu: Confessarei ao Senhor as minhas transgressões; e tu perdoaste a maldade do meu pecado. (Selá.)
6 Por isso, todo aquele que é santo orará a ti, a tempo de te poder achar; até no transbordar de muitas águas, estas não lhe chegarão.
7 Tu és o lugar em que me escondo; tu me preservas da angústia; tu me cinges de alegres cantos de livramento. (Selá.)
8 Instruir-te-ei, e ensinar-te-ei o caminho que deves seguir; guiar-te-ei com os meus olhos.
9 Não sejais como o cavalo, nem como a mula, que não têm entendimento, cuja boca precisa de cabresto e freio para que não se cheguem a ti.
10 O ímpio tem muitas dores, mas àquele que confia no Senhor a misericórdia o cercará.
11 Alegrai-vos no Senhor, e regozijai-vos, vós os justos; e cantai alegremente, todos vós que sois retos de coração.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que aconteceu com o salmista enquanto ele calava o seu pecado?",
                        opcoes: [
                            { numero: 1, texto: "Ele sentiu-se em paz", correta: false },
                            { numero: 2, texto: "Envelheceram os seus ossos pelo seu bramido todo o dia", correta: true },
                            { numero: 3, texto: "Ele ficou mais forte", correta: false },
                            { numero: 4, texto: "Ele esqueceu o erro", correta: false }
                        ],
                        explicacao: "Salmos 32:3 - Enquanto eu me calei, envelheceram os meus ossos pelo meu bramido em todo o dia.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        33: {
            titulo: "O Poder da Palavra do Senhor",
            texto: `¹ Regozijai-vos no Senhor, vós justos, pois aos retos convém o louvor.
² Louvai ao Senhor com harpa, cantai a ele com o saltério e um instrumento de dez cordas.
³ Cantai-lhe um cântico novo; tocai bem e com júbilo.
⁴ Porque a palavra do Senhor é reta, e todas as suas obras são fiéis.
⁵ Ele ama a justiça e o juízo; a terra está cheia da bondade do Senhor.
⁶ Pela palavra do Senhor foram feitos os céus, e todo o exército deles pelo espírito da sua boca.
⁷ Ele ajunta as águas do mar como num montão; põe os abismos em depósitos.
⁸ Tema toda a terra ao Senhor; temam-no todos os moradores do mundo.
⁹ Porque falou, e foi feito; mandou, e logo apareceu.
¹⁰ O Senhor desfaz o conselho dos gentios, quebranta os intentos dos povos.
¹¹ O conselho do Senhor permanece para sempre; os intentos do seu coração de geração em geração.
¹² Bem-aventurada é a nação cujo Deus é o Senhor, e o povo ao qual escolheu para sua herança.
¹³ O Senhor olha desde os céus e está vendo a todos os filhos dos homens.
¹⁴ Do lugar da sua habitação contempla todos os moradores da terra.
¹⁵ Ele é que forma o coração de todos eles, que contempla todas as suas obras.
¹⁶ Não há rei que se salve com a grandeza de um exército, nem o homem valente se livra pela muita força.
¹⁷ O cavalo é vão para a segurança; não livra ninguém com a sua grande força.
¹⁸ Eis que os olhos do Senhor estão sobre os que o temem, sobre os que esperam na sua misericórdia;
¹⁹ Para lhes livrar as almas da morte, e para os conservar vivos na fome.
²⁰ A nossa alma espera no Senhor; ele é o nosso auxílio e o nosso escudo.
²¹ Pois nele se alegra o nosso coração; porquanto temos confiado no seu santo nome.
²² Seja a tua misericórdia, Senhor, sobre nós, como em ti esperamos.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como foram feitos os céus, segundo o Salmo 33?",
                        opcoes: [
                            { numero: 1, texto: "Pela força do vento", correta: false },
                            { numero: 2, texto: "Pela palavra do Senhor", correta: true },
                            { numero: 3, texto: "Pelo trabalho dos anjos", correta: false },
                            { numero: 4, texto: "Eles sempre existiram", correta: false }
                        ],
                        explicacao: "Salmos 33:6 - Pela palavra do Senhor foram feitos os céus, e todo o exército deles pelo espírito da sua boca.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        34: {
            titulo: "Provai e Vede",
            texto: ` ¹ Louvarei ao Senhor em todo o tempo; o seu louvor estará continuamente na minha boca.
² A minha alma se gloriará no Senhor; os mansos o ouvirão e se alegrarão.
³ Engrandecei ao Senhor comigo; e juntos exaltemos o seu nome.
⁴ Busquei ao Senhor, e ele me respondeu; livrou-me de todos os meus temores.
⁵ Olharam para ele, e foram iluminados; e os seus rostos não ficaram confundidos.
⁶ Clamou este pobre, e o Senhor o ouviu, e o salvou de todas as suas angústias.
⁷ O anjo do Senhor acampa-se ao redor dos que o temem, e os livra.
⁸ Provai, e vede que o Senhor é bom; bem-aventurado o homem que nele confia.
⁹ Temei ao Senhor, vós, os seus santos, pois nada falta aos que o temem.
¹⁰ Os filhos dos leões necessitam e sofrem fome, mas àqueles que buscam ao Senhor bem nenhum faltará.
¹¹ Vinde, meninos, ouvi-me; eu vos ensinarei o temor do Senhor.
¹² Quem é o homem que deseja a vida, que quer largos dias para ver o bem?
¹³ Guarda a tua língua do mal, e os teus lábios de falarem o engano.
¹⁴ Aparta-te do mal, e faze o bem; procura a paz, e segue-a.
¹⁵ Os olhos do Senhor estão sobre os justos, e os seus ouvidos atentos ao seu clamor.
¹⁶ A face do Senhor está contra os que fazem o mal, para desarraigar da terra a memória deles.
¹⁷ Os justos clamam, e o Senhor os ouve, e os livra de todas as suas angústias.
¹⁸ Perto está o Senhor dos que têm o coração quebrantado, e salva os contritos de espírito.
¹⁹ Muitas são as aflições do justo, mas o Senhor o livra de todas.
²⁰ Ele lhe guarda todos os seus ossos; nem sequer um deles se quebra.
²¹ A malícia matará o ímpio, e os que odeiam o justo serão punidos.
²² O Senhor resgata a alma dos seus servos, e nenhum dos que nele confiam será punido.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista diz sobre o estado de quem busca ao Senhor em relação aos bens?",
                        opcoes: [
                            { numero: 1, texto: "Ficará rico depressa", correta: false },
                            { numero: 2, texto: "Aos que buscam ao Senhor, bem nenhum faltará", correta: true },
                            { numero: 3, texto: "Terá de lutar sozinho", correta: false },
                            { numero: 4, texto: "Sempre terá fome", correta: false }
                        ],
                        explicacao: "Salmos 34:10 - Os leõezinhos sofrem necessidade e sentem fome, mas aos que buscam ao Senhor bem nenhum faltará.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        35: {
            titulo: "Pleiteia, Senhor",
            texto: `¹ Pleiteia, Senhor, com aqueles que pleiteiam comigo; peleja contra os que pelejam contra mim.
² Pega do escudo e da rodela, e levanta-te em minha ajuda.
³ Tira da lança e obstrui o caminho aos que me perseguem; dize à minha alma: Eu sou a tua salvação.
⁴ Sejam confundidos e envergonhados os que buscam a minha vida; voltem atrás e envergonhem-se os que contra mim tentam mal.
⁵ Sejam como a moinha perante o vento; o anjo do Senhor os faça fugir.
⁶ Seja o seu caminho tenebroso e escorregadio, e o anjo do Senhor os persiga.
⁷ Porque sem causa encobriram de mim a rede na cova, a qual sem razão cavaram para a minha alma.
⁸ Sobrevenha-lhe destruição sem o saber, e prenda-o a rede que ocultou; caia ele nessa mesma destruição.
⁹ E a minha alma se alegrará no Senhor; alegrar-se-á na sua salvação.
¹⁰ Todos os meus ossos dirão: Senhor, quem é como tu, que livras o pobre daquele que é mais forte do que ele? Sim, o pobre e o necessitado daquele que o rouba.
¹¹ Falsas testemunhas se levantaram; depuseram contra mim coisas que eu não sabia.
¹² Tornaram-me o mal pelo bem, roubando a minha alma.
¹³ Mas, quanto a mim, quando estavam enfermos, as minhas vestes eram o saco; humilhava a minha alma com o jejum, e a minha oração voltava para o meu seio.
¹⁴ Portava-me como se ele fora meu irmão ou amigo; andava lamentando e muito encurvado, como quem chora por sua mãe.
¹⁵ Mas eles com a minha adversidade se alegravam e se congregavam; os abjetos se congregavam contra mim, e eu não o sabia; rasgavam-me, e não cessavam.
¹⁶ Com hipócritas zombadores nas festas, rangiam os dentes contra mim.
¹⁷ Senhor, até quando verás isto? Resgata a minha alma das suas assolações, e a minha predileta dos leões.
¹⁸ Louvar-te-ei na grande congregação; entre muitíssimo povo te celebrarei.
¹⁹ Não se alegrem os meus inimigos de mim sem razão, nem acenem com os olhos aqueles que me odeiam sem causa.
²⁰ Pois não falam de paz; antes projetam enganar os quietos da terra.
²¹ Abrem a boca de par em par contra mim, e dizem: Ah! Ah! Os nossos olhos o viram.
²² Tu, Senhor, o tens visto, não te cales; Senhor, não te alongues de mim:
²³ Desperta e acorda para o meu julgamento, para a minha causa, Deus meu e Senhor meu.
²⁴ Julga-me segundo a tua justiça, Senhor Deus meu, e não deixes que se alegrem de mim.
²⁵ Não digam em seus corações: Ah! Alma nossa! Não digam: Nós o havemos devorado.
²⁶ Envergonhem-se e confundam-se à uma os que se alegram com o meu mal; vistam-se de vergonha e de confusão os que se engrandecem contra mim.
²⁷ Cantem e alegrem-se os que amam a minha justiça, e digam continuamente: O Senhor seja engrandecido, o qual ama a prosperidade do seu servo.
²⁸ E assim a minha língua falará da tua justiça e do teu louvor todo o dia.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista pede que o Senhor faça contra aqueles que o combatem?",
                        opcoes: [
                            { numero: 1, texto: "Pleiteia, Senhor, com os que pleiteiam comigo; combate contra os que me combatem", correta: true },
                            { numero: 2, texto: "Dá-lhes ricas ofertas", correta: false },
                            { numero: 3, texto: "Não interfiras na briga", correta: false },
                            { numero: 4, texto: "Muda o coração deles para o ouro", correta: false }
                        ],
                        explicacao: "Salmos 35:1 - Pleiteia, Senhor, com os que pleiteiam comigo; combate contra os que me combatem.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/salmos.js (Continuação: Salmos 36-45)

        36: {
            titulo: "A Misericórdia Divina",
            texto: `¹ A transgressão do ímpio diz no íntimo do meu coração: Não há temor de Deus perante os seus olhos.
² Porque em seus olhos se lisonjeia, até que a sua iniquidade se descubra ser detestável.
³ As palavras da sua boca são malícia e engano; deixou de entender e de fazer o bem.
⁴ Projeta a malícia na sua cama; põe-se no caminho que não é bom; não aborrece o mal.
⁵ A tua misericórdia, Senhor, está nos céus, e a tua fidelidade chega até às mais excelsas nuvens.
⁶ A tua justiça é como as grandes montanhas; os teus juízos são um grande abismo. Senhor, tu conservas os homens e os animais.
⁷ Quão preciosa é, ó Deus, a tua benignidade, pelo que os filhos dos homens se abrigam à sombra das tuas asas.
⁸ Eles se fartarão da gordura da tua casa, e os farás beber da corrente das tuas delícias;
⁹ Porque em ti está o manancial da vida; na tua luz veremos a luz.
¹⁰ Estende a tua benignidade sobre os que te conhecem, e a tua justiça sobre os retos de coração.
¹¹ Não venha sobre mim o pé dos soberbos, e não me mova a mão dos ímpios.
¹² Ali caem os que praticam a iniquidade; cairão, e não se poderão levantar.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Até onde chega a misericórdia do Senhor, segundo o Salmo 36?",
                        opcoes: [
                            { numero: 1, texto: "Até aos confins da terra", correta: false },
                            { numero: 2, texto: "Até aos céus", correta: true },
                            { numero: 3, texto: "Até ao fundo do mar", correta: false },
                            { numero: 4, texto: "Até às nuvens apenas", correta: false }
                        ],
                        explicacao: "Salmos 36:5 - A tua misericórdia, Senhor, está nos céus, e a tua fidelidade chega até às nuvens.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        37: {
            titulo: "Confia no Senhor",
            texto: ` ¹ Não te indignes por causa dos malfeitores, nem tenhas inveja dos que praticam a iniquidade.
² Porque cedo serão ceifados como a erva, e murcharão como a verdura.
³ Confia no Senhor e faze o bem; habitarás na terra, e verdadeiramente serás alimentado.
⁴ Deleita-te também no Senhor, e te concederá os desejos do teu coração.
⁵ Entrega o teu caminho ao Senhor; confia nele, e ele o fará.
⁶ E ele fará sobressair a tua justiça como a luz, e o teu juízo como o meio-dia.
⁷ Descansa no Senhor, e espera nele; não te indignes por causa daquele que prospera em seu caminho, por causa do homem que executa astutos intentos.
⁸ Deixa a ira, e abandona o furor; não te indignes de forma alguma para fazer o mal.
⁹ Porque os malfeitores serão desarraigados; mas aqueles que esperam no Senhor herdarão a terra.
¹⁰ Pois ainda um pouco, e o ímpio não existirá; olharás para o seu lugar, e não aparecerá.
¹¹ Mas os mansos herdarão a terra, e se deleitarão na abundância de paz.
¹² O ímpio maquina contra o justo, e contra ele range os dentes.
¹³ O Senhor se rirá dele, pois vê que vem chegando o seu dia.
¹⁴ Os ímpios puxaram da espada e armaram o arco, para derrubarem o pobre e necessitado, e para matarem os de reta conduta.
¹⁵ Porém a sua espada lhes entrará no coração, e os seus arcos se quebrarão.
¹⁶ Vale mais o pouco que tem o justo, do que as riquezas de muitos ímpios.
¹⁷ Pois os braços dos ímpios se quebrarão, mas o Senhor sustém os justos.
¹⁸ O Senhor conhece os dias dos retos, e a sua herança permanecerá para sempre.
¹⁹ Não serão envergonhados nos dias maus, e nos dias de fome se fartarão.
²⁰ Mas os ímpios perecerão, e os inimigos do Senhor serão como a gordura dos cordeiros; desaparecerão, e em fumaça se desfarão.
²¹ O ímpio toma emprestado, e não paga; mas o justo se compadece e dá.
²² Porque aqueles que ele abençoa herdarão a terra, e aqueles que forem por ele amaldiçoados serão desarraigados.
²³ Os passos de um homem bom são confirmados pelo Senhor, e deleita-se no seu caminho.
²⁴ Ainda que caia, não ficará prostrado, pois o Senhor o sustém com a sua mão.
²⁵ Fui moço, e agora sou velho; mas nunca vi desamparado o justo, nem a sua semente a mendigar o pão.
²⁶ Compadece-se sempre, e empresta, e a sua semente é abençoada.
²⁷ Aparta-te do mal e faze o bem; e terás morada para sempre.
²⁸ Porque o Senhor ama o juízo e não desampara os seus santos; eles são preservados para sempre; mas a semente dos ímpios será desarraigada.
²⁹ Os justos herdarão a terra e habitarão nela para sempre.
³⁰ A boca do justo fala a sabedoria; a sua língua fala do juízo.
³¹ A lei do seu Deus está em seu coração; os seus passos não resvalarão.
³² O ímpio espreita ao justo, e procura matá-lo.
³³ O Senhor não o deixará em suas mãos, nem o condenará quando for julgado.
³⁴ Espera no Senhor, e guarda o seu caminho, e te exaltará para herdares a terra; tu o verás quando os ímpios forem desarraigados.
³⁵ Vi o ímpio com grande poder espalhar-se como a árvore verde na terra natal.
³⁶ Mas passou e já não aparece; procurei-o, mas não se pôde encontrar.
³⁷ Nota o homem sincero, e considera o reto, porque o fim desse homem é a paz.
³⁸ Quanto aos transgressores, serão à uma destruídos, e as relíquias dos ímpios serão destruídas.
³⁹ Mas a salvação dos justos vem do Senhor; ele é a sua fortaleza no tempo da angústia.
⁴⁰ E o Senhor os ajudará e os livrará; ele os livrará dos ímpios e os salvará, porquanto confiam nele.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista aconselha fazer para que os desejos do coração sejam satisfeitos?",
                        opcoes: [
                            { numero: 1, texto: "Trabalhar sem parar", correta: false },
                            { numero: 2, texto: "Deleita-te também no Senhor", correta: true },
                            { numero: 3, texto: "Pedir ajuda aos amigos", correta: false },
                            { numero: 4, texto: "Reclamar da sorte", correta: false }
                        ],
                        explicacao: "Salmos 37:4 - Deleita-te também no Senhor, e te concederá os desejos do teu coração.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        38: {
            titulo: "O Clamor do Penitente",
            texto: ` ¹ Ó Senhor, não me repreendas na tua ira, nem me castigues no teu furor.
² Porque as tuas flechas se cravaram em mim, e a tua mão sobre mim desceu.
³ Não há coisa sã na minha carne, por causa da tua cólera; nem há paz em meus ossos, por causa do meu pecado.
⁴ Pois já as minhas iniquidades ultrapassam a minha cabeça; como carga pesada são demais para as minhas forças.
⁵ As minhas chagas cheiram mal e estão corruptas, por causa da minha loucura.
⁶ Estou encurvado, estou muito abatido, ando lamentando todo o dia.
⁷ Porque os meus lombos estão cheios de ardor, e não há coisa sã na minha carne.
⁸ Estou fraco e mui quebrantado; tenho rugido pela inquietação do meu coração.
⁹ Senhor, diante de ti está todo o meu desejo, e o meu gemido não te é oculto.
¹⁰ O meu coração dá voltas, a minha força me falta; quanto à luz dos meus olhos, ela me deixou.
¹¹ Os meus amigos e os meus companheiros estão ao longe da minha chaga; e os meus parentes se põem à distância.
¹² Também os que buscam a minha vida me armam laços e os que procuram o meu mal falam coisas que danificam, e imaginam astúcias todo o dia.
¹³ Mas eu, como surdo, não ouvia, e era como mudo, que não abre a boca.
¹⁴ Assim eu sou como homem que não ouve, e em cuja boca não há reprovação.
¹⁵ Porque em ti, Senhor, espero; tu, Senhor meu Deus, me ouvirás.
¹⁶ Porque dizia eu: Ouve-me, para que não se alegrem de mim. Quando escorrega o meu pé, eles se engrandecem contra mim.
¹⁷ Porque estou prestes a coxear; a minha dor está constantemente perante mim.
¹⁸ Porque eu declararei a minha iniquidade; afligir-me-ei por causa do meu pecado.
¹⁹ Mas os meus inimigos estão vivos e são fortes, e os que sem causa me odeiam se multiplicam.
²⁰ Os que dão mal pelo bem são meus adversários, porquanto eu sigo o que é bom.
²¹ Não me desampares, Senhor, meu Deus, não te alongues de mim.
²² Apressa-te em meu auxílio, Senhor, minha salvação.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que o salmista diz que não há saúde na sua carne nem paz nos seus ossos?",
                        opcoes: [
                            { numero: 1, texto: "Por causa da velhice", correta: false },
                            { numero: 2, texto: "Por causa do seu pecado", correta: true },
                            { numero: 3, texto: "Por causa do frio", correta: false },
                            { numero: 4, texto: "Por causa da guerra", correta: false }
                        ],
                        explicacao: "Salmos 38:3 - Não há coisa sã na minha carne, por causa da tua cólera; nem há paz em meus ossos, por causa do meu pecado.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        39: {
            titulo: "A Brevidade da Vida",
            texto: ` ¹ Eu disse: Guardarei os meus caminhos para não pecar com a minha língua; guardarei a boca com um freio, enquanto o ímpio estiver diante de mim.
² Com o silêncio fiquei mudo; calava-me mesmo acerca do bem, e a minha dor se agravou.
³ Esquentou-se-me o coração dentro de mim; enquanto eu meditava se acendeu um fogo; então falei com a minha língua:
⁴ Faze-me conhecer, Senhor, o meu fim, e a medida dos meus dias qual é, para que eu sinta quanto sou frágil.
⁵ Eis que fizeste os meus dias como a palmos; o tempo da minha vida é como nada diante de ti; na verdade, todo homem, por mais firme que esteja, é totalmente vaidade. (Selá.)
⁶ Na verdade, todo homem anda numa vã aparência; na verdade, em vão se inquietam; amontoam riquezas, e não sabem quem as levará.
⁷ Agora, pois, Senhor, que espero eu? A minha esperança está em ti.
⁸ Livra-me de todas as minhas transgressões; não me faças o opróbrio dos loucos.
⁹ Emudeci; não abro a minha boca, porquanto tu o fizeste.
¹⁰ Tira de sobre mim a tua praga; estou desfalecido pelo golpe da tua mão.
¹¹ Quando castigas o homem, com repreensões por causa da iniquidade, fazes com que a sua beleza se consuma como a traça; assim todo homem é vaidade. (Selá.)
¹² Ouve, Senhor, a minha oração, e inclina os teus ouvidos ao meu clamor; não te cales perante as minhas lágrimas, porque sou um estrangeiro contigo e peregrino, como todos os meus pais.
¹³ Poupa-me, até que tome alento, antes que me vá, e não seja mais.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "A que o salmista compara a medida dos seus dias?",
                        opcoes: [
                            { numero: 1, texto: "A uma longa jornada", correta: false },
                            { numero: 2, texto: "À largura de alguns palmos", correta: true },
                            { numero: 3, texto: "A um século de glória", correta: false },
                            { numero: 4, texto: "Ao curso de um rio", correta: false }
                        ],
                        explicacao: "Salmos 39:5 - Eis que fizeste os meus dias como a largura de alguns palmos; o tempo da minha vida é nada diante de ti...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        40: {
            titulo: "O Cântico Novo",
            texto: ` ¹ Esperei com paciência no Senhor, e ele se inclinou para mim, e ouviu o meu clamor.
² Tirou-me de um lago horrível, de um charco de lodo, pôs os meus pés sobre uma rocha, firmou os meus passos.
³ E pôs um novo cântico na minha boca, um hino ao nosso Deus; muitos o verão, e temerão, e confiarão no Senhor.
⁴ Bem-aventurado o homem que põe no Senhor a sua confiança, e que não respeita os soberbos nem os que se desviam para a mentira.
⁵ Muitas são, Senhor meu Deus, as maravilhas que tens operado para conosco, e os teus pensamentos não se podem contar diante de ti; se eu os quisera anunciar, e deles falar, são mais do que se podem contar.
⁶ Sacrifício e oferta não quiseste; os meus ouvidos abriste; holocausto e expiação pelo pecado não reclamaste.
⁷ Então disse: Eis aqui venho; no rolo do livro de mim está escrito.
⁸ Deleito-me em fazer a tua vontade, ó Deus meu; sim, a tua lei está dentro do meu coração.
⁹ Preguei a justiça na grande congregação; eis que não retive os meus lábios, Senhor, tu o sabes.
¹⁰ Não escondi a tua justiça dentro do meu coração; apregoei a tua fidelidade e a tua salvação. Não escondi da grande congregação a tua benignidade e a tua verdade.
¹¹ Não retires de mim, Senhor, as tuas misericórdias; guardem-me continuamente a tua benignidade e a tua verdade.
¹² Porque males sem número me têm rodeado; as minhas iniquidades me prenderam de modo que não posso olhar para cima. São mais numerosas do que os cabelos da minha cabeça; assim desfalece o meu coração.
¹³ Digna-te, Senhor, livrar-me: Senhor, apressa-te em meu auxílio.
¹⁴ Sejam à uma confundidos e envergonhados os que buscam a minha vida para destruí-la; tornem atrás e confundam-se os que me querem mal.
¹⁵ Desolados sejam em pago da sua afronta os que me dizem: Ah! Ah!
¹⁶ Folguem e alegrem-se em ti os que te buscam; digam constantemente os que amam a tua salvação: Magnificado seja o Senhor.
¹⁷ Mas eu sou pobre e necessitado; contudo o Senhor cuida de mim. Tu és o meu auxílio e o meu libertador; não te detenhas, ó meu Deus.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor pôs na boca do salmista após tirá-lo de um lago horrível?",
                        opcoes: [
                            { numero: 1, texto: "Um grito de guerra", correta: false },
                            { numero: 2, texto: "Um novo cântico, um hino ao nosso Deus", correta: true },
                            { numero: 3, texto: "Palavras de silêncio", correta: false },
                            { numero: 4, texto: "Uma profecia de destruição", correta: false }
                        ],
                        explicacao: "Salmos 40:3 - E pôs um novo cântico na minha boca, um hino ao nosso Deus; muitos o verão, e temerão, e confiarão no Senhor.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        41: {
            titulo: "O Cuidado com o Pobre",
            texto: `¹ Bem-aventurado é aquele que atende ao pobre; o Senhor o livrará no dia do mal.
² O Senhor o livrará, e o conservará em vida; será abençoado na terra, e tu não o entregarás à vontade de seus inimigos.
³ O Senhor o sustentará no leito da enfermidade; tu o restaurarás da sua cama de doença.
⁴ Dizia eu: Senhor, tem piedade de mim; sara a minha alma, porque pequei contra ti.
⁵ Os meus inimigos falam mal de mim, dizendo: Quando morrerá ele, e perecerá o seu nome?
⁶ E, se algum deles vem me ver, fala coisas vãs; no seu coração amontoa a maldade; saindo para fora, é disso que fala.
⁷ Todos os que me odeiam murmuram à uma contra mim; contra mim imaginam o mal, dizendo:
⁸ Uma doença má se lhe tem apegado; e agora que está deitado, não se levantará mais.
⁹ Até o meu próprio amigo íntimo, em quem eu tanto confiava, que comia do meu pão, levantou contra mim o seu calcanhar.
¹⁰ Porém tu, Senhor, tem piedade de mim, e levanta-me, para que eu lhes dê o pago.
¹¹ Por isto conheço eu que tu me favoreces: que o meu inimigo não triunfa de mim.
¹² Quanto a mim, tu me sustentas na minha sinceridade, e me puseste diante da tua face para sempre.
¹³ Bendito seja o Senhor Deus de Israel de século em século. Amém e Amém.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem é considerado bem-aventurado no Salmo 41?",
                        opcoes: [
                            { numero: 1, texto: "Aquele que conquista terras", correta: false },
                            { numero: 2, texto: "Aquele que atende ao pobre", correta: true },
                            { numero: 3, texto: "Aquele que vive sozinho", correta: false },
                            { numero: 4, texto: "Aquele que nunca fica doente", correta: false }
                        ],
                        explicacao: "Salmos 41:1 - Bem-aventurado é aquele que atende ao pobre; o Senhor o livrará no dia do mal.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        42: {
            titulo: "Sede de Deus",
            texto: `¹ Assim como o cervo brama pelas correntes das águas, assim suspira a minha alma por ti, ó Deus!
² A minha alma tem sede de Deus, do Deus vivo; quando entrarei e me apresentarei ante a face de Deus?
³ As minhas lágrimas servem-me de mantimento de dia e de noite, enquanto me dizem constantemente: Onde está o teu Deus?
⁴ Quando me lembro disto, dentro de mim derramo a minha alma; pois eu havia ido com a multidão. Fui com eles à casa de Deus, com voz de alegria e louvor, com a multidão que festejava.
⁵ Por que estás abatida, ó minha alma, e por que te perturbas em mim? Espera em Deus, pois ainda o louvarei pela salvação da sua face.
⁶ Ó meu Deus, dentro de mim a minha alma está abatida; por isso lembro-me de ti desde a terra do Jordão, e desde os hermonitas, desde o pequeno monte.
⁷ Um abismo chama outro abismo, ao ruído das tuas cachoeiras; todas as tuas ondas e as tuas vagas têm passado sobre mim.
⁸ Contudo o Senhor mandará a sua misericórdia de dia, e de noite a sua canção estará comigo, uma oração ao Deus da minha vida.
⁹ Direi a Deus, minha rocha: Por que te esqueceste de mim? Por que ando lamentando por causa da opressão do inimigo?
¹⁰ Com ferida mortal em meus ossos me afrontam os meus adversários, quando todo dia me dizem: Onde está o teu Deus?
¹¹ Por que estás abatida, ó minha alma, e por que te perturbas dentro de mim? Espera em Deus, pois ainda o louvarei, o qual é a salvação da minha face, e o meu Deus.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como a alma do salmista suspira por Deus no início do Livro II?",
                        opcoes: [
                            { numero: 1, texto: "Como um leão pela presa", correta: false },
                            { numero: 2, texto: "Como o cervo brama pelas correntes das águas", correta: true },
                            { numero: 3, texto: "Como a terra seca pela chuva", correta: false },
                            { numero: 4, texto: "Como o vigia pela manhã", correta: false }
                        ],
                        explicacao: "Salmos 42:1 - Assim como o cervo brama pelas correntes das águas, assim suspira a minha alma por ti, ó Deus!",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        43: {
            titulo: "Luz e Verdade",
            texto: `¹ Faze-me justiça, ó Deus, e pleiteia a minha causa contra a nação ímpia. Livra-me do homem fraudulento e injusto.
² Pois tu és o Deus da minha fortaleza; por que me rejeitas? Por que ando lamentando por causa da opressão do inimigo?
³ Envia a tua luz e a tua verdade, para que me guiem e me levem ao teu santo monte, e aos teus tabernáculos.
⁴ Então irei ao altar de Deus, a Deus, que é a minha grande alegria, e com harpa te louvarei, ó Deus, Deus meu.
⁵ Por que estás abatida, ó minha alma? E por que te perturbas dentro de mim? Espera em Deus, pois ainda o louvarei, o qual é a salvação da minha face e Deus meu
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista pede que Deus envie para o guiar ao Seu santo monte?",
                        opcoes: [
                            { numero: 1, texto: "Anjos e arcanjos", correta: false },
                            { numero: 2, texto: "A tua luz e a tua verdade", correta: true },
                            { numero: 3, texto: "Sinais no céu", correta: false },
                            { numero: 4, texto: "Uma coluna de fogo", correta: false }
                        ],
                        explicacao: "Salmos 43:3 - Envia a tua luz e a tua verdade, para que me guiem e me levem ao teu santo monte, e aos teus tabernáculos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        44: {
            titulo: "Clamor por Socorro Nacional",
            texto: ` ¹ Ó Deus, nós ouvimos com os nossos ouvidos, e nossos pais nos têm contado a obra que fizeste em seus dias, nos tempos da antiguidade.
² Como expulsaste os gentios com a tua mão e os plantaste a eles; como afligiste os povos e os derrubaste.
³ Pois não conquistaram a terra pela sua espada, nem o seu braço os salvou, mas a tua destra e o teu braço, e a luz da tua face, porquanto te agradaste deles.
⁴ Tu és o meu Rei, ó Deus; ordena salvações para Jacó.
⁵ Por ti venceremos os nossos inimigos; pelo teu nome pisaremos os que se levantam contra nós.
⁶ Pois eu não confiarei no meu arco, nem a minha espada me salvará.
⁷ Mas tu nos salvaste dos nossos inimigos, e confundiste os que nos odiavam.
⁸ Em Deus nos gloriamos todo o dia, e louvamos o teu nome eternamente. (Selá.)
⁹ Mas agora tu nos rejeitaste e nos confundiste, e não sais com os nossos exércitos.
¹⁰ Tu nos fazes retirar do inimigo, e aqueles que nos odeiam nos saqueiam para si.
¹¹ Tu nos entregaste como ovelhas para comer, e nos espalhaste entre os gentios.
¹² Tu vendes por nada o teu povo, e não aumentas a tua riqueza com o seu preço.
¹³ Tu nos pões por opróbrio aos nossos vizinhos, por escárnio e zombaria daqueles que estão à roda de nós.
¹⁴ Tu nos pões por provérbio entre os gentios, por movimento de cabeça entre os povos.
¹⁵ A minha confusão está constantemente diante de mim, e a vergonha do meu rosto me cobre,
¹⁶ À voz daquele que afronta e blasfema, por causa do inimigo e do vingador.
¹⁷ Tudo isto nos sobreveio; contudo não nos esquecemos de ti, nem nos houvemos falsamente contra a tua aliança.
¹⁸ O nosso coração não voltou atrás, nem os nossos passos se desviaram das tuas veredas;
¹⁹ Ainda que nos quebrantaste num lugar de dragões, e nos cobriste com a sombra da morte.
²⁰ Se nós esquecemos o nome do nosso Deus, e estendemos as nossas mãos para um deus estranho,
²¹ Porventura não esquadrinhará Deus isso? Pois ele sabe os segredos do coração.
²² Sim, por amor de ti, somos mortos todo o dia; somos reputados como ovelhas para o matadouro.
²³ Desperta, por que dormes, Senhor? Acorda, não nos rejeites para sempre.
²⁴ Por que escondes a tua face, e te esqueces da nossa miséria e da nossa opressão?
²⁵ Pois a nossa alma está abatida até ao pó; o nosso ventre se apega à terra.
²⁶ Levanta-te em nosso auxílio, e resgata-nos por amor das tuas misericórdias.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por amor de quem o povo diz que é entregue à morte todo o dia?",
                        opcoes: [
                            { numero: 1, texto: "Por amor de si mesmos", correta: false },
                            { numero: 2, texto: "Por amor de ti (Senhor)", correta: true },
                            { numero: 3, texto: "Por amor das riquezas", correta: false },
                            { numero: 4, texto: "Por amor da glória", correta: false }
                        ],
                        explicacao: "Salmos 44:22 - Sim, por amor de ti, somos entregues à morte todo o dia; somos reputados como ovelhas para o matadouro.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        45: {
            titulo: "O Cântico Real",
            texto: ` ¹ O meu coração ferve com palavras boas, falo do que tenho feito no tocante ao Rei. A minha língua é a pena de um destro escritor.
² Tu és mais formoso do que os filhos dos homens; a graça se derramou em teus lábios; por isso Deus te abençoou para sempre.
³ Cinge a tua espada à coxa, ó valente, com a tua glória e a tua majestade.
⁴ E neste teu esplendor cavalga prosperamente, por causa da verdade, da mansidão e da justiça; e a tua destra te ensinará coisas terríveis.
⁵ As tuas flechas são agudas no coração dos inimigos do rei, e por elas os povos caíram debaixo de ti.
⁶ O teu trono, ó Deus, é eterno e perpétuo; o cetro do teu reino é um cetro de equidade.
⁷ Tu amas a justiça e odeias a impiedade; por isso Deus, o teu Deus, te ungiu com óleo de alegria mais do que a teus companheiros.
⁸ Todas as tuas vestes cheiram a mirra e aloés e cássia, desde os palácios de marfim de onde te alegram.
⁹ As filhas dos reis estavam entre as tuas ilustres mulheres; à tua direita estava a rainha ornada de finíssimo ouro de Ofir.
¹⁰ Ouve, filha, e olha, e inclina os teus ouvidos; esquece-te do teu povo e da casa do teu pai.
¹¹ Então o rei se afeiçoará da tua formosura, pois ele é teu Senhor; adora-o.
¹² E a filha de Tiro estará ali com presentes; os ricos do povo suplicarão o teu favor.
¹³ A filha do rei é toda ilustre lá dentro; o seu vestido é entretecido de ouro.
¹⁴ Levá-la-ão ao rei com vestidos bordados; as virgens que a acompanham a trarão a ti.
¹⁵ Com alegria e regozijo as trarão; elas entrarão no palácio do rei.
¹⁶ Em lugar de teus pais estarão teus filhos; deles farás príncipes sobre toda a terra.
¹⁷ Farei lembrado o teu nome de geração em geração; por isso os povos te louvarão eternamente.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o salmista descreve o cetro do reino de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Um cetro de ferro", correta: false },
                            { numero: 2, texto: "Um cetro de equidade (justiça)", correta: true },
                            { numero: 3, texto: "Um cetro de madeira", correta: false },
                            { numero: 4, texto: "Um cetro de luz", correta: false }
                        ],
                        explicacao: "Salmos 45:6 - O teu trono, ó Deus, é eterno e perpétuo; o cetro do teu reino é um cetro de equidade.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/salmos.js (Continuação: Salmos 46-55)

        46: {
            titulo: "Deus é o nosso Refúgio",
            texto: ` ¹ Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.
² Portanto não temeremos, ainda que a terra se mude, e ainda que os montes se transportem para o meio dos mares.
³ Ainda que as águas rujam e se perturbem, ainda que os montes se abalem pela sua braveza. (Selá.)
⁴ Há um rio cujas correntes alegram a cidade de Deus, o santuário das moradas do Altíssimo.
⁵ Deus está no meio dela; não se abalará. Deus a ajudará, já ao romper da manhã.
⁶ Os gentios se embraveceram; os reinos se moveram; ele levantou a sua voz e a terra se derreteu.
⁷ O Senhor dos Exércitos está conosco; o Deus de Jacó é o nosso refúgio. (Selá.)
⁸ Vinde, contemplai as obras do Senhor; que desolações tem feito na terra!
⁹ Ele faz cessar as guerras até ao fim da terra; quebra o arco e corta a lança; queima os carros no fogo.
¹⁰ Aquietai-vos, e sabei que eu sou Deus; serei exaltado entre os gentios; serei exaltado sobre a terra.
¹¹ O Senhor dos Exércitos está conosco; o Deus de Jacó é o nosso refúgio. (Selá.)

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Deus é para nós, segundo o Salmo 46, especialmente em tempos de angústia?",
                        opcoes: [
                            { numero: 1, texto: "Um juiz distante", correta: false },
                            { numero: 2, texto: "Nosso refúgio e fortaleza, socorro bem presente", correta: true },
                            { numero: 3, texto: "Uma nuvem passageira", correta: false },
                            { numero: 4, texto: "Um segredo escondido", correta: false }
                        ],
                        explicacao: "Salmos 46:1 - Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        47: {
            titulo: "O Rei de toda a Terra",
            texto: ` 1 Batei palmas, todos os povos; aclamai a Deus com voz de triunfo.
2 Porque o Senhor Altíssimo é tremendo, e Rei grande sobre toda a terra.
3 Ele nos subjugará os povos e as nações debaixo dos nossos pés.
4 Escolherá para nós a nossa herança, a glória de Jacó, a quem amou. (Selá.)
5 Deus subiu com júbilo, o Senhor subiu ao som de trombeta.
6 Cantai louvores a Deus, cantai louvores; cantai louvores ao nosso Rei, cantai louvores.
7 Pois Deus é o Rei de toda a terra, cantai louvores com inteligência.
8 Deus reina sobre os gentios; Deus se assenta sobre o trono da sua santidade.
9 Os príncipes do povo se ajuntam, o povo do Deus de Abraão; porque os escudos da terra são de Deus. Ele está muito elevado!
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o salmista convida os povos a celebrar a Deus neste Salmo?",
                        opcoes: [
                            { numero: 1, texto: "Com choro e lamento", correta: false },
                            { numero: 2, texto: "Batei palmas, todos os povos; celebrai a Deus com vozes de júbilo", correta: true },
                            { numero: 3, texto: "Em silêncio absoluto", correta: false },
                            { numero: 4, texto: "Apenas com orações mentais", correta: false }
                        ],
                        explicacao: "Salmos 47:1 - Batei palmas, todos os povos; celebrai a Deus com vozes de júbilo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        48: {
            titulo: "A Beleza de Sião",
            texto: ` 1 Grande é o Senhor e mui digno de louvor, na cidade do nosso Deus, no seu monte santo.
2 Formoso de sítio, e alegria de toda a terra é o monte Sião sobre os lados do norte, a cidade do grande Rei.
3 Deus é conhecido nos seus palácios por um alto refúgio.
4 Porque eis que os reis se ajuntaram; eles passaram juntos.
5 Viram-no e ficaram maravilhados; ficaram assombrados e se apressaram em fugir.
6 Tremor ali os tomou, e dores como de mulher de parto.
7 Tu quebras as naus de Társis com um vento oriental.
8 Como o ouvimos, assim o vimos na cidade do Senhor dos Exércitos, na cidade do nosso Deus. Deus a confirmará para sempre. (Selá.)
9 Lembramo-nos, ó Deus, da tua benignidade, no meio do teu templo.
10 Segundo é o teu nome, ó Deus, assim é o teu louvor, até aos fins da terra; a tua mão direita está cheia de justiça.
11 Alegre-se o monte de Sião; alegrem-se as filhas de Judá por causa dos teus juízos.
12 Rodeai Sião, e cercai-a, contai as suas torres.
13 Marcai bem os seus antemuros, considerai os seus palácios, para que o conteis à geração seguinte.
14 Porque este Deus é o nosso Deus para sempre; ele será nosso guia até à morte.
    `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como é descrita a cidade do grande Rei, o monte Sião?",
                        opcoes: [
                            { numero: 1, texto: "Um lugar de tristeza", correta: false },
                            { numero: 2, texto: "Formoso de sítio, e alegria de toda a terra", correta: true },
                            { numero: 3, texto: "Uma fortaleza abandonada", correta: false },
                            { numero: 4, texto: "Um vale profundo", correta: false }
                        ],
                        explicacao: "Salmos 48:2 - Formoso de sítio, e alegria de toda a terra é o monte Sião...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        49: {
            titulo: "A Vaidade das Riquezas",
            texto: ` 1 Ouvi isto, vós todos os povos; inclinai os ouvidos, todos os moradores do mundo,
2 Tanto baixos como altos, tanto ricos como pobres.
3 A minha boca falará de sabedoria, e a meditação do meu coração será de entendimento.
4 Inclinarei os meus ouvidos a uma parábola; declararei o meu enigma na harpa.
5 Por que temerei eu nos dias maus, quando me cercar a iniquidade dos que me armam ciladas?
6 Aqueles que confiam na sua fazenda, e se gloriam na multidão das suas riquezas,
7 Nenhum deles de modo algum pode remir a seu irmão, ou dar a Deus o resgate dele
8 (Pois a redenção da sua alma é caríssima, e cessará para sempre),
9 Para que viva para sempre, e não veja corrupção.
10 Porque ele vê que os sábios morrem; perecem igualmente tanto o louco como o brutal, e deixam a outros os seus bens.
11 O seu pensamento interior é que as suas casas serão perpétuas e as suas habitações de geração em geração; dão às suas terras os seus próprios nomes.
12 Todavia o homem que está em honra não permanece; antes é como os animais, que perecem.
13 Este caminho deles é a sua loucura; contudo a sua posteridade aprova as suas palavras. (Selá.)
14 Como ovelhas são postos na sepultura; a morte se alimentará deles e os retos terão domínio sobre eles na manhã, e a sua formosura se consumirá na sepultura, a habitação deles.
15 Mas Deus remirá a minha alma do poder da sepultura, pois me receberá. (Selá.)
16 Não temas, quando alguém se enriquece, quando a glória da sua casa se engrandece.
17 Porque, quando morrer, nada levará consigo, nem a sua glória o acompanhará.
18 Ainda que na sua vida ele bendisse a sua alma; e os homens te louvarão, quando fizeres bem a ti mesmo,
19 Irá para a geração de seus pais; eles nunca verão a luz.
20 O homem que está em honra, e não tem entendimento, é semelhante aos animais, que perecem.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Salmo 49 afirma sobre o homem que está em honra, mas não tem entendimento?",
                        opcoes: [
                            { numero: 1, texto: "Que ele viverá para sempre", correta: false },
                            { numero: 2, texto: "É comparável aos animais, que perecem", correta: true },
                            { numero: 3, texto: "Que ele é dono do mundo", correta: false },
                            { numero: 4, texto: "Que ele será lembrado por todos", correta: false }
                        ],
                        explicacao: "Salmos 49:20 - O homem que está em honra, e não tem entendimento, é semelhante aos animais, que perecem.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        50: {
            titulo: "Deus, o Juiz Supremo",
            texto: ` 1 O Deus poderoso, o Senhor, falou e chamou a terra desde o nascimento do sol até ao seu ocaso.
2 Desde Sião, a perfeição da formosura, resplandeceu Deus.
3 Virá o nosso Deus, e não se calará; um fogo se irá consumindo diante dele, e haverá grande tormenta ao redor dele.
4 Chamará os céus lá do alto, e a terra, para julgar o seu povo.
5 Ajuntai-me os meus santos, aqueles que fizeram comigo uma aliança com sacrifícios.
6 E os céus anunciarão a sua justiça; pois Deus mesmo é o Juiz. (Selá.)
7 Ouve, povo meu, e eu falarei; ó Israel, e eu protestarei contra ti: Sou Deus, sou o teu Deus.
8 Não te repreenderei pelos teus sacrifícios, ou holocaustos, que estão continuamente perante mim.
9 Da tua casa não tirarei bezerro, nem bodes dos teus currais.
10 Porque meu é todo animal da selva, e o gado sobre milhares de montanhas.
11 Conheço todas as aves dos montes; e minhas são todas as feras do campo.
12 Se eu tivesse fome, não to diria, pois meu é o mundo e toda a sua plenitude.
13 Comerei eu carne de touros? Ou beberei sangue de bodes?
14 Oferece a Deus sacrifício de louvor, e paga ao Altíssimo os teus votos.
15 E invoca-me no dia da angústia; eu te livrarei, e tu me glorificarás.
16 Mas ao ímpio diz Deus: Que fazes tu em recitar os meus estatutos, e em tomar a minha aliança na tua boca?
17 Visto que odeias a correção, e lanças as minhas palavras para detrás de ti.
18 Quando vês o ladrão, consentes com ele, e tens a tua parte com adúlteros.
19 Soltas a tua boca para o mal, e a tua língua compõe o engano.
20 Assentas-te a falar contra teu irmão; falas mal contra o filho de tua mãe.
21 Estas coisas tens feito, e eu me calei; pensavas que era tal como tu, mas eu te repreenderei, e as porei por ordem diante dos teus olhos:
22 Ouvi pois isto, vós que vos esqueceis de Deus; para que eu vos não faça em pedaços, sem haver quem vos livre.
23 Aquele que oferece o sacrifício de louvor me glorificará; e àquele que bem ordena o seu caminho eu mostrarei a salvação de Deus.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "De quem são todos os animais da selva e o gado sobre milhares de montanhas?",
                        opcoes: [
                            { numero: 1, texto: "Dos pastores", correta: false },
                            { numero: 2, texto: "De Deus", correta: true },
                            { numero: 3, texto: "Dos reis da terra", correta: false },
                            { numero: 4, texto: "Da própria natureza", correta: false }
                        ],
                        explicacao: "Salmos 50:10 - Porque meu é todo animal da selva, e o gado sobre milhares de montanhas.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        51: {
            titulo: "Misericórdia e Purificação",
            texto: ` ¹ Tem misericórdia de mim, ó Deus, segundo a tua benignidade; apaga as minhas transgressões, segundo a multidão das tuas misericórdias.
² Lava-me completamente da minha iniquidade, e purifica-me do meu pecado.
³ Porque eu conheço as minhas transgressões, e o meu pecado está sempre diante de mim.
⁴ Contra ti, contra ti somente pequei, e fiz o que é mal à tua vista, para que sejas justificado quando falares, e puro quando julgares.
⁵ Eis que em iniquidade fui formado, e em pecado me concebeu minha mãe.
⁶ Eis que amas a verdade no íntimo, e no oculto me fazes conhecer a sabedoria.
⁷ Purifica-me com hissopo, e ficarei puro; lava-me, e ficarei mais branco do que a neve.
⁸ Faze-me ouvir júbilo e alegria, para que gozem os ossos que tu quebraste.
⁹ Esconde a tua face dos meus pecados, e apaga todas as minhas iniquidades.
¹⁰ Cria em mim, ó Deus, um coração puro, e renova em mim um espírito reto.
¹¹ Não me lances fora da tua presença, e não retires de mim o teu Espírito Santo.
¹² Torna a dar-me a alegria da tua salvação, e sustém-me com um espírito voluntário.
¹³ Então ensinarei aos transgressores os teus caminhos, e os pecadores a ti se converterão.
¹⁴ Livra-me dos crimes de sangue, ó Deus, Deus da minha salvação, e a minha língua louvará altamente a tua justiça.
¹⁵ Abre, Senhor, os meus lábios, e a minha boca entoará o teu louvor.
¹⁶ Pois não desejas sacrifícios, senão eu os daria; tu não te deleitas em holocaustos.
¹⁷ Os sacrifícios para Deus são o espírito quebrantado; a um coração quebrantado e contrito não desprezarás, ó Deus.
¹⁸ Faze o bem a Sião, segundo a tua boa vontade; edifica os muros de Jerusalém.
¹⁹ Então te agradarás dos sacrifícios de justiça, dos holocaustos e das ofertas queimadas; então se oferecerão novilhos sobre o teu altar.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é o sacrifício que Deus não desprezará, segundo o Salmo 51?",
                        opcoes: [
                            { numero: 1, texto: "Grandes ofertas de ouro", correta: false },
                            { numero: 2, texto: "Um coração quebrantado e contrito", correta: true },
                            { numero: 3, texto: "Milhares de carneiros", correta: false },
                            { numero: 4, texto: "Cânticos barulhentos", correta: false }
                        ],
                        explicacao: "Salmos 51:17 - Os sacrifícios para Deus são o espírito quebrantado; a um coração quebrantado e contrito não desprezarás, ó Deus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        52: {
            titulo: "O Julgamento do Malvado",
            texto: ` ¹ Por que te glorias na malícia, ó homem poderoso? Pois a bondade de Deus permanece continuamente.
² A tua língua intenta o mal, como uma navalha amolada, traçando enganos.
³ Tu amas mais o mal do que o bem, e a mentira mais do que o falar a retidão. (Selá.)
⁴ Amas todas as palavras devoradoras, ó língua fraudulenta.
⁵ Também Deus te destruirá para sempre; arrebatar-te-á e arrancar-te-á da tua habitação, e desarraigar-te-á da terra dos viventes. (Selá.)
⁶ E os justos o verão, e temerão: e se rirão dele, dizendo:
⁷ Eis aqui o homem que não pôs em Deus a sua fortaleza, antes confiou na abundância das suas riquezas, e se fortaleceu na sua maldade.
⁸ Mas eu sou como a oliveira verde na casa de Deus; confio na misericórdia de Deus para sempre, eternamente.
⁹ Para sempre te louvarei, porque tu o fizeste, e esperarei no teu nome, porque é bom diante de teus santos.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "A que o salmista se compara, em contraste com o ímpio que confia na sua riqueza?",
                        opcoes: [
                            { numero: 1, texto: "A um cedro quebrado", correta: false },
                            { numero: 2, texto: "A uma oliveira verde na casa de Deus", correta: true },
                            { numero: 3, texto: "A uma videira seca", correta: false },
                            { numero: 4, texto: "A uma pedra no caminho", correta: false }
                        ],
                        explicacao: "Salmos 52:8 - Mas eu sou como a oliveira verde na casa de Deus; confio na misericórdia de Deus para sempre.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        53: {
            titulo: "A Insensatez do Ímpio",
            texto: ` ¹ Disse o néscio no seu coração: Não há Deus. Têm-se corrompido, e cometido abominável iniquidade; não há ninguém que faça o bem.
² Deus olhou desde os céus para os filhos dos homens, para ver se havia algum que tivesse entendimento e buscasse a Deus.
³ Desviaram-se todos, e juntamente se fizeram imundos; não há quem faça o bem, não, nem sequer um.
⁴ Acaso não têm conhecimento os que praticam a iniquidade, os quais comem o meu povo como se comessem pão? Eles não invocaram a Deus.
⁵ Ali se acharam em grande temor, onde não havia temor, pois Deus espalhou os ossos daquele que te cercava; tu os confundiste, porque Deus os rejeitou.
⁶ Oh! Se já de Sião viesse a salvação de Israel! Quando Deus fizer voltar os cativos do seu povo, então se regozijará Jacó e se alegrará Israel.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Este salmo é quase idêntico a qual outro salmo anterior?",
                        opcoes: [
                            { numero: 1, texto: "Salmo 1", correta: false },
                            { numero: 2, texto: "Salmo 14", correta: true },
                            { numero: 3, texto: "Salmo 23", correta: false },
                            { numero: 4, texto: "Salmo 50", correta: false }
                        ],
                        explicacao: "O Salmo 53 é uma repetição (com pequenas variações) do Salmo 14, enfatizando a corrupção da humanidade.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        54: {
            titulo: "Oração por Livramento",
            texto: ` ¹ Salva-me, ó Deus, pelo teu nome, e faze-me justiça pelo teu poder.
² Ó Deus, ouve a minha oração, inclina os teus ouvidos às palavras da minha boca.
³ Porque os estranhos se levantam contra mim, e tiranos procuram a minha vida; não têm posto Deus perante os seus olhos. (Selá.)
⁴ Eis que Deus é o meu ajudador, o Senhor está com aqueles que sustêm a minha alma.
⁵ Ele recompensará com o mal os meus inimigos. Destrói-os na tua verdade.
⁶ Eu te oferecerei voluntariamente sacrifícios; louvarei o teu nome, ó Senhor, porque é bom,
⁷ Pois me tem livrado de toda a angústia; e os meus olhos viram o meu desejo sobre os meus inimigos.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem é aquele que ajuda o salmista e sustenta a sua alma?",
                        opcoes: [
                            { numero: 1, texto: "O seu exército", correta: false },
                            { numero: 2, texto: "Deus", correta: true },
                            { numero: 3, texto: "Os seus vizinhos", correta: false },
                            { numero: 4, texto: "O rei de Judá", correta: false }
                        ],
                        explicacao: "Salmos 54:4 - Eis que Deus é o meu ajudador, o Senhor está com aqueles que sustêm a minha alma.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        55: {
            titulo: "Lança o teu Cuidado sobre o Senhor",
            texto: ` ¹ Inclina, ó Deus, os teus ouvidos à minha oração, e não te escondas da minha súplica.
² Atende-me, e ouve-me; lamento na minha queixa, e faço ruído,
³ Pelo clamor do inimigo e por causa da opressão do ímpio; pois lançam sobre mim a iniquidade, e com furor me odeiam.
⁴ O meu coração está dolorido dentro de mim, e terrores da morte caíram sobre mim.
⁵ Temor e tremor vieram sobre mim; e o horror me cobriu.
⁶ Assim eu disse: Oh! Quem me dera asas como de pomba! Então voaria, e estaria em descanso.
⁷ Eis que fugiria para longe, e pernoitaria no deserto. (Selá.)
⁸ Apressar-me-ia a escapar da fúria do vento e da tempestade.
⁹ Despedaça, Senhor, e divide as suas línguas, pois tenho visto violência e contenda na cidade.
¹⁰ De dia e de noite a cercam sobre os seus muros; iniquidade e malícia estão no meio dela.
¹¹ Maldade há dentro dela; astúcia e engano não se apartam das suas ruas.
¹² Pois não era um inimigo que me afrontava; então eu o teria suportado; nem era o que me odiava que se engrandecia contra mim, porque dele me teria escondido.
¹³ Mas eras tu, homem meu igual, meu guia e meu íntimo amigo.
¹⁴ Consultávamos juntos suavemente, e andávamos em companhia na casa de Deus.
¹⁵ A morte os assalte, e vivos desçam ao inferno; porque há maldade nas suas habitações e no meio deles.
¹⁶ Eu, porém, invocarei a Deus, e o Senhor me salvará.
¹⁷ De tarde e de manhã e ao meio-dia orarei; e clamarei, e ele ouvirá a minha voz.
¹⁸ Livrou em paz a minha alma da peleja que havia contra mim; pois havia muitos comigo.
¹⁹ Deus ouvirá, e os afligirá. Aquele que preside desde a antiguidade (Selá), porque não há neles nenhuma mudança, e portanto não temem a Deus.
²⁰ Tal homem pôs as suas mãos naqueles que têm paz com ele; quebrou a sua aliança.
²¹ As palavras da sua boca eram mais macias do que a manteiga, mas havia guerra no seu coração: as suas palavras eram mais brandas do que o azeite; contudo, eram espadas desembainhadas.
²² Lança o teu cuidado sobre o Senhor, e ele te susterá; não permitirá jamais que o justo seja abalado.
²³ Mas tu, ó Deus, os farás descer ao poço da perdição; homens de sangue e de fraude não viverão metade dos seus dias; mas eu em ti confiarei.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista aconselha fazer com as nossas preocupações e fardos?",
                        opcoes: [
                            { numero: 1, texto: "Guardá-los para si", correta: false },
                            { numero: 2, texto: "Lança o teu cuidado sobre o Senhor, e ele te susterá", correta: true },
                            { numero: 3, texto: "Contá-los a todos na rua", correta: false },
                            { numero: 4, texto: "Desistir de lutar", correta: false }
                        ],
                        explicacao: "Salmos 55:22 - Lança o teu cuidado sobre o Senhor, e ele te susterá; não permitirá jamais que o justo seja abalado.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/salmos.js (Continuação: Salmos 56-65)

        56: {
            titulo: "Confiança em Deus no Medo",
            texto: `¹ Tem misericórdia de mim, ó Deus, porque o homem procura devorar-me; pelejando todo dia, me oprime.
² Os meus inimigos procuram devorar-me todo dia; pois são muitos os que pelejam contra mim, ó Altíssimo.
³ Em qualquer tempo em que eu temer, confiarei em ti.
⁴ Em Deus louvarei a sua palavra, em Deus pus a minha confiança; não temerei o que me possa fazer a carne.
⁵ Todos os dias torcem as minhas palavras; todos os seus pensamentos são contra mim para o mal.
⁶ Ajuntam-se, escondem-se, marcam os meus passos, como aguardando a minha alma.
⁷ Porventura escaparão eles por meio da sua iniquidade? Ó Deus, derruba os povos na tua ira!
⁸ Tu contas as minhas vagueações; põe as minhas lágrimas no teu odre. Não estão elas no teu livro?
⁹ Quando eu a ti clamar, então voltarão para trás os meus inimigos: isto sei eu, porque Deus é por mim.
¹⁰ Em Deus louvarei a sua palavra; no Senhor louvarei a sua palavra.
¹¹ Em Deus tenho posto a minha confiança; não temerei o que me possa fazer o homem.
¹² Os teus votos estão sobre mim, ó Deus; eu te renderei ações de graças;
¹³ Pois tu livraste a minha alma da morte; não livrarás os meus pés da queda, para andar diante de Deus na luz dos viventes?

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista diz que fará no dia em que temer?",
                        opcoes: [
                            { numero: 1, texto: "Em ti confiarei", correta: true },
                            { numero: 2, texto: "Fugirei para longe", correta: false },
                            { numero: 3, texto: "Lutarei sozinho", correta: false },
                            { numero: 4, texto: "Buscarei ajuda humana", correta: false }
                        ],
                        explicacao: "Salmos 56:3 - No dia em que eu temer, hei de confiar em ti.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        57: {
            titulo: "À Sombra das Tuas Asas",
            texto: ` 1 Tem misericórdia de mim, ó Deus, tem misericórdia de mim, porque a minha alma confia em ti; e à sombra das tuas asas me abrigo, até que passem as calamidades.
2 Clamarei ao Deus altíssimo, ao Deus que por mim tudo executa.
3 Ele enviará desde os céus, e me salvará do desprezo daquele que procurava devorar-me. (Selá.) Deus enviará a sua misericórdia e a sua verdade.
4 A minha alma está entre leões, e eu estou entre aqueles que estão abrasados, filhos dos homens, cujos dentes são lanças e flechas, e a sua língua espada afiada.
5 Sê exaltado, ó Deus, sobre os céus; seja a tua glória sobre toda a terra.
6 Armaram uma rede aos meus passos; a minha alma está abatida. Cavaram uma cova diante de mim, porém eles mesmos caíram no meio dela. (Selá.)
7 Preparado está o meu coração, ó Deus, preparado está o meu coração; cantarei, e darei louvores.
8 Desperta, glória minha; despertai, saltério e harpa; eu mesmo despertarei ao romper da alva.
9 Louvar-te-ei, Senhor, entre os povos; eu te cantarei entre as nações.
10 Pois a tua misericórdia é grande até aos céus, e a tua verdade até às nuvens.
11 Sê exaltado, ó Deus, sobre os céus; e seja a tua glória sobre toda a terra.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Até quando o salmista diz que se refugiará à sombra das asas de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Até que as calamidades passem", correta: true },
                            { numero: 2, texto: "Até o amanhecer", correta: false },
                            { numero: 3, texto: "Enquanto houver sol", correta: false },
                            { numero: 4, texto: "Para sempre", correta: false }
                        ],
                        explicacao: "Salmos 57:1 - ...à sombra das tuas asas me abrigo, até que passem as calamidades.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        58: {
            titulo: "O Juiz da Terra",
            texto: ` ¹ Acaso falais vós, deveras, ó congregação, a justiça? Julgais retamente, ó filhos dos homens?
² Antes no coração forjais iniquidades; sobre a terra pesais a violência das vossas mãos.
³ Alienam-se os ímpios desde a madre; andam errados desde que nasceram, falando mentiras.
⁴ O seu veneno é semelhante ao veneno da serpente; são como a víbora surda, que tapa os ouvidos,
⁵ Para não ouvir a voz dos encantadores, do encantador sábio em encantamentos.
⁶ Ó Deus, quebra-lhes os dentes nas suas bocas; arranca, Senhor, os queixais aos filhos dos leões.
⁷ Escorram como águas que correm constantemente. Quando ele armar as suas flechas, fiquem feitas em pedaços.
⁸ Como a lesma se derrete, assim se vá cada um deles; como o aborto de uma mulher, que nunca viu o sol.
⁹ Antes que as vossas panelas sintam o calor dos espinhos, como por um redemoinho os arrebatará ele, vivo e em indignação.
¹⁰ O justo se alegrará quando vir a vingança; lavará os seus pés no sangue do ímpio.
¹¹ Então dirá o homem: Deveras há uma recompensa para o justo; deveras há um Deus que julga na terra.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o homem dirá ao ver a justiça de Deus sendo feita, segundo o Salmo 58?",
                        opcoes: [
                            { numero: 1, texto: "Deveras há uma recompensa para o justo; deveras há um Deus que julga na terra", correta: true },
                            { numero: 2, texto: "Tudo foi por acaso", correta: false },
                            { numero: 3, texto: "Os ímpios são mais fortes", correta: false },
                            { numero: 4, texto: "A terra não tem juiz", correta: false }
                        ],
                        explicacao: "Salmos 58:11 - Então dirá o homem: Deveras há uma recompensa para o justo; deveras há um Deus que julga na terra.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        59: {
            titulo: "Deus, minha Alta Torre",
            texto: `1 Livra-me, meu Deus, dos meus inimigos, defende-me daqueles que se levantam contra mim.
2 Livra-me dos que praticam a iniquidade, e salva-me dos homens sanguinários.
3 Pois eis que põem ciladas à minha alma; os fortes se ajuntam contra mim, não por transgressão minha ou por pecado meu, ó Senhor.
4 Eles correm, e se preparam, sem culpa minha; desperta para me ajudares, e olha.
5 Tu, pois, ó Senhor, Deus dos Exércitos, Deus de Israel, desperta para visitares todos os gentios; não tenhas misericórdia de nenhum dos pérfidos que praticam a iniquidade. (Selá.)
6 Voltam à tarde; dão ganidos como cães, e rodeiam a cidade.
7 Eis que eles dão gritos com as suas bocas; espadas estão nos seus lábios, porque, dizem eles: Quem ouve?
8 Mas tu, Senhor, te rirás deles; zombarás de todos os gentios;
9 Por causa da sua força eu te aguardarei; pois Deus é a minha alta defesa.
10 O Deus da minha misericórdia virá ao meu encontro; Deus me fará ver o meu desejo sobre os meus inimigos.
11 Não os mates, para que o meu povo não se esqueça; espalha-os pelo teu poder, e abate-os, ó Senhor, nosso escudo.
12 Pelo pecado da sua boca e pelas palavras dos seus lábios, fiquem presos na sua soberba, e pelas maldições e pelas mentiras que falam.
13 Consome-os na tua indignação, consome-os, para que não existam, e para que saibam que Deus reina em Jacó até aos fins da terra. (Selá.)
14 E tornem a vir à tarde, e deem ganidos como cães, e cerquem a cidade.
15 Vagueiem para cima e para baixo por mantimento, e passem a noite sem se saciarem.
16 Eu, porém, cantarei a tua força; pela manhã louvarei com alegria a tua misericórdia; porquanto tu foste o meu alto refúgio, e proteção no dia da minha angústia.
17 A ti, ó fortaleza minha, cantarei salmos; porque Deus é a minha defesa e o Deus da minha misericórdia. `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o salmista descreve Deus enquanto seus inimigos o cercam como cães?",
                        opcoes: [
                            { numero: 1, texto: "Deus é a minha alta torre e o Deus da minha misericórdia", correta: true },
                            { numero: 2, texto: "Deus é o silêncio", correta: false },
                            { numero: 3, texto: "Deus é o trovão", correta: false },
                            { numero: 4, texto: "Deus é o mestre", correta: false }
                        ],
                        explicacao: "Salmos 59:17 - A ti, força minha, cantarei louvores; porque Deus é a minha alta torre e o Deus da minha misericórdia.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        60: {
            titulo: "O Socorro na Angústia",
            texto: ` ¹ Ó Deus, tu nos rejeitaste, tu nos espalhaste, tu te indignaste; oh, volta-te para nós.
² Abalaste a terra, e a fendeste; sara as suas fendas, pois ela treme.
³ Fizeste ver ao teu povo coisas árduas; fizeste-nos beber o vinho do atordoamento.
⁴ Deste um estandarte aos que te temem, para o arvorarem no alto, por causa da verdade. (Selá.)
⁵ Para que os teus amados sejam livres, salva-nos com a tua destra, e ouve-nos;
⁶ Deus falou na sua santidade; eu me regozijarei, repartirei a Siquém e medirei o vale de Sucote.
⁷ Meu é Gileade, e meu é Manassés; Efraim é a força da minha cabeça; Judá é o meu legislador.
⁸ Moabe é a minha bacia de lavar; sobre Edom lançarei o meu sapato; alegra-te, ó Filístia, por minha causa.
⁹ Quem me conduzirá à cidade forte? Quem me guiará até Edom?
¹⁰ Não serás tu, ó Deus, que nos tinhas rejeitado? Tu, ó Deus, que não saíste com os nossos exércitos?
¹¹ Dá-nos auxílio na angústia, porque vão é o socorro do homem.
¹² Em Deus faremos proezas; porque ele é que pisará os nossos inimigos.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista pede a Deus em relação ao auxílio humano?",
                        opcoes: [
                            { numero: 1, texto: "Dá-nos auxílio na angústia, porque vão é o socorro do homem", correta: true },
                            { numero: 2, texto: "Traz mais soldados", correta: false },
                            { numero: 3, texto: "Faz-me o homem mais rico", correta: false },
                            { numero: 4, texto: "Aumenta o meu poder", correta: false }
                        ],
                        explicacao: "Salmos 60:11 - Dá-nos auxílio na angústia, porque vão é o socorro do homem.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        61: {
            titulo: "A Rocha mais Alta",
            texto: ` ¹ Ouve, ó Deus, o meu clamor; atende à minha oração.
² Desde o fim da terra clamarei a ti, quando o meu coração estiver desmaiado; leva-me para a rocha que é mais alta do que eu.
³ Pois tens sido um refúgio para mim, e uma torre forte contra o inimigo.
⁴ Habitarei no teu tabernáculo para sempre; abrigar-me-ei no esconderijo das tuas asas. (Selá.)
⁵ Pois tu, ó Deus, ouviste os meus votos; deste-me a herança dos que temem o teu nome.
⁶ Prolongarás os dias do rei; e os seus anos serão como muitas gerações.
⁷ Ele permanecerá diante de Deus para sempre; prepara-lhe misericórdia e verdade que o preservem.
⁸ Assim cantarei louvores ao teu nome perpetuamente, para pagar os meus votos de dia em dia.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quando o coração do salmista desmaia, para onde ele pede que Deus o leve?",
                        opcoes: [
                            { numero: 1, texto: "Para a rocha que é mais alta do que eu", correta: true },
                            { numero: 2, texto: "Para o fundo do vale", correta: false },
                            { numero: 3, texto: "Para o seu palácio", correta: false },
                            { numero: 4, texto: "Para o deserto", correta: false }
                        ],
                        explicacao: "Salmos 61:2 - ...leva-me para a rocha que é mais alta do que eu.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        62: {
            titulo: "A Alma em Silêncio",
            texto: ` ¹ A minha alma espera somente em Deus; dele vem a minha salvação.
² Só ele é a minha rocha e a minha salvação; é a minha defesa; não serei grandemente abalado.
³ Até quando maquinareis o mal contra um homem? Sereis mortos todos vós, sereis como uma parede encurvada e uma sebe prestes a cair.
⁴ Eles somente consultam como o hão de derrubar da sua excelência; deleitam-se em mentiras; com a boca bendizem, mas nas suas entranhas maldizem. (Selá.)
⁵ Ó minha alma, espera somente em Deus, porque dele vem a minha esperança.
⁶ Só ele é a minha rocha e a minha salvação; é a minha defesa; não serei abalado.
⁷ Em Deus está a minha salvação e a minha glória; a rocha da minha fortaleza, e o meu refúgio estão em Deus.
⁸ Confiai nele, ó povo, em todos os tempos; derramai perante ele o vosso coração. Deus é o nosso refúgio. (Selá.)
⁹ Certamente que os homens de classe baixa são vaidade, e os homens de ordem elevada são mentira; pesados em balanças, eles juntos são mais leves do que a vaidade.
¹⁰ Não confieis na opressão, nem vos ensoberbeçais na rapina; se as vossas riquezas aumentam, não ponhais nelas o coração.
¹¹ Deus falou uma vez; duas vezes ouvi isto: que o poder pertence a Deus.
¹² A ti também, Senhor, pertence a misericórdia; pois retribuirás a cada um segundo a sua obra.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Aonde somente a alma do salmista descansa em silêncio?",
                        opcoes: [
                            { numero: 1, texto: "Em Deus", correta: true },
                            { numero: 2, texto: "No sono profundo", correta: false },
                            { numero: 3, texto: "Na música", correta: false },
                            { numero: 4, texto: "Na solidão", correta: false }
                        ],
                        explicacao: "Salmos 62:1 - A minha alma descansa somente em Deus; dele vem a minha salvação.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        63: {
            titulo: "Sede de Ti",
            texto: ` ¹ Ó Deus, tu és o meu Deus, de madrugada te buscarei; a minha alma tem sede de ti; a minha carne te deseja muito em uma terra seca e cansada, onde não há água;
² Para ver a tua força e a tua glória, como te vi no santuário.
³ Porque a tua benignidade é melhor do que a vida, os meus lábios te louvarão.
⁴ Assim eu te bendirei enquanto viver; em teu nome levantarei as minhas mãos.
⁵ A minha alma se fartará, como de tutano e de gordura; e a minha boca te louvará com alegres lábios,
⁶ Quando me lembrar de ti na minha cama, e meditar em ti nas vigílias da noite.
⁷ Porque tu tens sido o meu auxílio; então, à sombra das tuas asas me regozijarei.
⁸ A minha alma te segue de perto; a tua destra me sustenta.
⁹ Mas aqueles que procuram a minha alma para a destruir, irão para as profundezas da terra.
¹⁰ Cairão à espada; serão uma ração para as raposas.
¹¹ Mas o rei se regozijará em Deus; qualquer que por ele jurar se gloriará; porque se taparão as bocas dos que falam a mentira.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista afirma sobre a misericórdia de Deus em relação à própria vida?",
                        opcoes: [
                            { numero: 1, texto: "A tua misericórdia é melhor do que a vida", correta: true },
                            { numero: 2, texto: "A vida é mais importante", correta: false },
                            { numero: 3, texto: "São a mesma coisa", correta: false },
                            { numero: 4, texto: "A misericórdia é passageira", correta: false }
                        ],
                        explicacao: "Salmos 63:3 - Porque a tua misericórdia é melhor do que a vida, os meus lábios te louvarão.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        64: {
            titulo: "Proteção contra Inimigos Ocultos",
            texto: `¹ Ouve, ó Deus, a minha voz na minha oração; guarda a minha vida do temor do inimigo.
² Esconde-me do secreto conselho dos maus, e do tumulto dos que praticam a iniquidade.
³ Que afiaram as suas línguas como espadas; e armaram por suas flechas palavras amargas,
⁴ A fim de atirarem em lugar oculto ao que é íntegro; disparam sobre ele repentinamente, e não temem.
⁵ Firmam-se em mau intento; falam de armar laços secretamente, e dizem: Quem os verá?
⁶ Andam inquirindo malícias, inquirem tudo o que se pode inquirir; e ambos, o íntimo pensamento de cada um deles, e o coração, são profundos.
⁷ Mas Deus atirará sobre eles uma seta, e de repente ficarão feridos.
⁸ Assim eles farão com que as suas línguas tropecem contra si mesmos; todos aqueles que os virem, fugirão.
⁹ E todos os homens temerão, e anunciarão a obra de Deus; e considerarão prudentemente os feitos dele.
¹⁰ O justo se alegrará no Senhor, e confiará nele, e todos os retos de coração se gloriarão. `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que os ímpios afiam como espadas e armam como flechas para ferir o íntegro?",
                        opcoes: [
                            { numero: 1, texto: "As suas línguas e palavras amargas", correta: true },
                            { numero: 2, texto: "Suas espadas de ferro", correta: false },
                            { numero: 3, texto: "Arqueiros de elite", correta: false },
                            { numero: 4, texto: "Redes de pesca", correta: false }
                        ],
                        explicacao: "Salmos 64:3 - Que afiaram as suas línguas como espadas; e armaram por suas flechas palavras amargas.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        65: {
            titulo: "A Abundância da Terra",
            texto: `¹ A ti, ó Deus, espera o louvor em Sião, e a ti se pagará o voto.
² Ó tu que ouves as orações, a ti virá toda a carne.
³ Prevalecem as iniquidades contra mim; porém tu limpas as nossas transgressões.
⁴ Bem-aventurado aquele a quem tu escolhes, e fazes chegar a ti, para que habite em teus átrios; nós seremos fartos da bondade da tua casa e do teu santo templo.
⁵ Com coisas tremendas em justiça nos responderás, ó Deus da nossa salvação; tu és a esperança de todas as extremidades da terra, e daqueles que estão longe sobre o mar.
⁶ O que pela sua força consolida os montes, cingido de fortaleza;
⁷ O que aplaca o ruído dos mares, o ruído das suas ondas, e o tumulto dos povos.
⁸ E os que habitam nos fins da terra temem os teus sinais; tu fazes alegres as saídas da manhã e da tarde.
⁹ Tu visitas a terra, e a refrescas; tu a enriqueces grandemente com o rio de Deus, que está cheio de água; tu lhe preparas o trigo, quando assim a tens preparada.
¹⁰ Enches de água os seus sulcos; tu lhe aplanas as leivas; tu a amoleces com a muita chuva; abençoas as suas novidades.
¹¹ Coroas o ano com a tua bondade, e as tuas veredas destilam gordura.
¹² Destilam sobre os pastos do deserto, e os outeiros os cingem de alegria.
¹³ Os campos se vestem de rebanhos, e os vales se cobrem de trigo; eles se regozijam e cantam.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o salmista descreve o efeito da visita de Deus à terra?",
                        opcoes: [
                            { numero: 1, texto: "Tu visitas a terra, e a enriqueces copiosamente", correta: true },
                            { numero: 2, texto: "Tu trazes o calor", correta: false },
                            { numero: 3, texto: "Tu mudas o curso dos rios", correta: false },
                            { numero: 4, texto: "Tu dás ordem aos animais", correta: false }
                        ],
                        explicacao: "Salmos 65:9 - Tu visitas a terra, e a enriqueces copiosamente; enriqueces a terra com o rio de Deus...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/salmos.js (Continuação: Salmos 66-75)

        66: {
            titulo: "Louvor pelas Obras de Deus",
            texto: ` ¹ Celebrai com júbilo a Deus, todas as terras.
² Cantai a glória do seu nome; dai glória ao seu louvor.
³ Dizei a Deus: Quão tremendo és tu nas tuas obras! Pela grandeza do teu poder se submeterão a ti os teus inimigos.
⁴ Todos os moradores da terra te adorarão e te cantarão; cantarão o teu nome. (Selá.)
⁵ Vinde, e vede as obras de Deus: é tremendo nos seus feitos para com os filhos dos homens.
⁶ Converteu o mar em terra seca; passaram o rio a pé; ali nos alegramos nele.
⁷ Ele domina eternamente pelo seu poder; os seus olhos estão sobre as nações; não se exaltem os rebeldes. (Selá.)
⁸ Bendizei, povos, ao nosso Deus, e fazei ouvir a voz do seu louvor,
⁹ Ao que sustenta com vida a nossa alma, e não consente que sejam abalados os nossos pés.
¹⁰ Pois tu, ó Deus, nos provaste; tu nos afinaste como se afina a prata.
¹¹ Tu nos puseste na rede; afligiste os nossos lombos,
¹² Fizeste com que os homens cavalgassem sobre as nossas cabeças; passamos pelo fogo e pela água; mas nos trouxeste a um lugar espaçoso.
¹³ Entrarei em tua casa com holocaustos; pagar-te-ei os meus votos,
¹⁴ Os quais pronunciaram os meus lábios, e falou a minha boca, quando estava na angústia.
¹⁵ Oferecer-te-ei holocaustos gordurosos com incenso de carneiros; oferecerei novilhos com cabritos. (Selá.)
¹⁶ Vinde, e ouvi, todos os que temeis a Deus, e eu contarei o que ele tem feito à minha alma.
¹⁷ A ele clamei com a minha boca, e ele foi exaltado pela minha língua.
¹⁸ Se eu atender à iniquidade no meu coração, o Senhor não me ouvirá;
¹⁹ Mas, na verdade, Deus me ouviu; atendeu à voz da minha oração.
²⁰ Bendito seja Deus, que não rejeitou a minha oração, nem desviou de mim a sua misericórdia.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista convida todos os que temem a Deus a fazer?",
                        opcoes: [
                            { numero: 1, texto: "Apenas oferecer sacrifícios", correta: false },
                            { numero: 2, texto: "Vinde, e ouvi... e eu contarei o que ele tem feito à minha alma", correta: true },
                            { numero: 3, texto: "A ficar em silêncio", correta: false },
                            { numero: 4, texto: "A fugir dos inimigos", correta: false }
                        ],
                        explicacao: "Salmos 66:16 - Vinde, e ouvi, todos os que temeis a Deus, e eu contarei o que ele tem feito à minha alma.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        67: {
            titulo: "Oração pelas Nações",
            texto: `¹ Deus tenha misericórdia de nós e nos abençoe; e faça resplandecer o seu rosto sobre nós (Selá.)
² Para que se conheça na terra o teu caminho, e entre todas as nações a tua salvação.
³ Louvem-te a ti, ó Deus, os povos; louvem-te os povos todos.
⁴ Alegrem-se e regozijem-se as nações, pois julgarás os povos com equidade, e governarás as nações sobre a terra. (Selá.)
⁵ Louvem-te a ti, ó Deus, os povos; louvem-te os povos todos.
⁶ Então a terra dará o seu fruto; e Deus, o nosso Deus, nos abençoará.
⁷ Deus nos abençoará, e todas as extremidades da terra o temerão.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é o objetivo de o salmista pedir a bênção e o rosto resplandecente de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Para ser o mais rico", correta: false },
                            { numero: 2, texto: "Para que se conheça na terra o teu caminho, e em todas as nações a tua salvação", correta: true },
                            { numero: 3, texto: "Para que os inimigos morram", correta: false },
                            { numero: 4, texto: "Para que chova sempre", correta: false }
                        ],
                        explicacao: "Salmos 67:2 - Para que se conheça na terra o teu caminho, e em todas as nações a tua salvação.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        68: {
            titulo: "A Majestade de Deus",
            texto: ` ¹ Levante-se Deus, e sejam dissipados os seus inimigos; fugirão de diante dele os que o odeiam.
² Como se impele a fumaça, assim tu os impeles; assim como a cera se derrete diante do fogo, assim pereçam os ímpios diante de Deus.
³ Mas alegrem-se os justos, e se regozijem na presença de Deus, e folguem de alegria.
⁴ Cantai a Deus, cantai louvores ao seu nome; louvai aquele que vai montado sobre os céus, pois o seu nome é Senhor, e exultai diante dele.
⁵ Pai de órfãos e juiz de viúvas é Deus, no seu lugar santo.
⁶ Deus faz que o solitário viva em família; liberta aqueles que estão presos em grilhões; mas os rebeldes habitam em terra seca.
⁷ Ó Deus, quando saías diante do teu povo, quando caminhavas pelo deserto, (Selá.)
⁸ A terra abalava-se, e os céus destilavam perante a face de Deus; até o próprio Sinai foi comovido na presença de Deus, do Deus de Israel.
⁹ Tu, ó Deus, mandaste a chuva em abundância, confortaste a tua herança, quando estava cansada.
¹⁰ Nela habitava o teu rebanho; tu, ó Deus, fizeste provisão da tua bondade para o pobre.
¹¹ O Senhor deu a palavra; grande era o exército dos que anunciavam as boas novas.
¹² Reis de exércitos fugiram à pressa; e aquela que ficava em casa repartia os despojos.
¹³ Ainda que vos tenhais deitado entre redis, contudo sereis como as asas de uma pomba, cobertas de prata, e as suas penas, de ouro amarelo.
¹⁴ Quando o Onipotente ali espalhou os reis, foi como a neve em Salmon.
¹⁵ O monte de Deus é como o monte de Basã, um monte elevado como o monte de Basã.
¹⁶ Por que saltais, ó montes elevados? Este é o monte que Deus desejou para a sua habitação, e o Senhor habitará nele eternamente.
¹⁷ Os carros de Deus são vinte milhares, milhares de milhares. O Senhor está entre eles, como em Sinai, no lugar santo.
¹⁸ Tu subiste ao alto, levaste cativo o cativeiro, recebeste dons para os homens, e até para os rebeldes, para que o Senhor Deus habitasse entre eles.
¹⁹ Bendito seja o Senhor, que de dia em dia nos carrega de benefícios; o Deus que é a nossa salvação. (Selá.)
²⁰ O nosso Deus é o Deus da salvação; e a Deus, o Senhor, pertencem os livramentos da morte.
²¹ Mas Deus ferirá gravemente a cabeça de seus inimigos e o crânio cabeludo do que anda em suas culpas.
²² Disse o Senhor: Eu os farei voltar de Basã, farei voltar o meu povo das profundezas do mar;
²³ Para que o teu pé mergulhe no sangue de teus inimigos, e no mesmo a língua dos teus cães.
²⁴ Ó Deus, eles têm visto os teus caminhos; os caminhos do meu Deus, meu Rei, no santuário.
²⁵ Os cantores iam adiante, os tocadores de instrumentos atrás; entre eles as donzelas tocando adufes.
²⁶ Celebrai a Deus nas congregações; ao Senhor, desde a fonte de Israel.
²⁷ Ali está o pequeno Benjamim, que domina sobre eles, os príncipes de Judá com o seu ajuntamento, os príncipes de Zebulom e os príncipes de Naftali.
²⁸ O teu Deus ordenou a tua força; fortalece, ó Deus, o que já fizeste para nós.
²⁹ Por amor do teu templo em Jerusalém, os reis te trarão presentes.
³⁰ Repreende asperamente as feras dos canaviais, a multidão dos touros, com os novilhos dos povos, até que cada um se submeta com peças de prata; dissipa os povos que desejam a guerra.
³¹ Príncipes virão do Egito; a Etiópia cedo estenderá para Deus as suas mãos.
³² Reinos da terra, cantai a Deus, cantai louvores ao Senhor. (Selá.)
³³ Àquele que vai montado sobre os céus dos céus, que existiam desde a antiguidade; eis que envia a sua voz, dá um brado veemente.
³⁴ Atribuí a Deus fortaleza; a sua excelência está sobre Israel e a sua fortaleza nas mais altas nuvens.
³⁵ Ó Deus, tu és tremendo desde os teus santuários; o Deus de Israel é o que dá força e poder ao seu povo. Bendito seja Deus!
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o Salmo 68 descreve o cuidado de Deus para com os órfãos e as viúvas?",
                        opcoes: [
                            { numero: 1, texto: "Ele é Pai dos órfãos e juiz das viúvas", correta: true },
                            { numero: 2, texto: "Ele os observa de longe", correta: false },
                            { numero: 3, texto: "Ele lhes dá apenas ouro", correta: false },
                            { numero: 4, texto: "Ele não os menciona", correta: false }
                        ],
                        explicacao: "Salmos 68:5 - Pai de órfãos e juiz de viúvas é Deus, no seu lugar santo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        69: {
            titulo: "O Clamor na Aflição",
            texto: ` ¹ Livra-me, ó Deus, pois as águas entraram até à minha alma.
² Atolei-me em profundo lamaçal, onde se não pode estar em pé; entrei na profundeza das águas, onde a corrente me leva.
³ Estou cansado de clamar; a minha garganta se secou; os meus olhos desfalecem esperando o meu Deus.
⁴ Aqueles que me odeiam sem causa são mais do que os cabelos da minha cabeça; aqueles que procuram destruir-me, sendo injustamente meus inimigos, são poderosos; então restituí o que não furtei.
⁵ Tu, ó Deus, bem conheces a minha estultice; e os meus pecados não te são encobertos.
⁶ Não sejam envergonhados por minha causa aqueles que esperam em ti, ó Senhor, Deus dos Exércitos; não sejam confundidos por minha causa aqueles que te buscam, ó Deus de Israel.
⁷ Porque por amor de ti tenho suportado afrontas; a confusão cobriu o meu rosto.
⁸ Tenho-me tornado um estranho para com meus irmãos, e um desconhecido para com os filhos de minha mãe.
⁹ Pois o zelo da tua casa me devorou, e as afrontas dos que te afrontam caíram sobre mim.
¹⁰ Quando chorei, e castiguei com jejum a minha alma, isto se me tornou em afrontas.
¹¹ Pus por vestido um saco, e me fiz um provérbio para eles.
¹² Aqueles que se assentam à porta falam contra mim; e fui o cântico dos bebedores de bebida forte.
¹³ Eu, porém, faço a minha oração a ti, Senhor, num tempo aceitável; ó Deus, ouve-me segundo a grandeza da tua misericórdia, segundo a verdade da tua salvação.
¹⁴ Tira-me do lamaçal, e não me deixes atolar; seja eu livre dos que me odeiam, e das profundezas das águas.
¹⁵ Não me leve a corrente das águas, e não me absorva ao profundo, nem o poço feche a sua boca sobre mim.
¹⁶ Ouve-me, Senhor, pois boa é a tua misericórdia. Olha para mim segundo a tua muitíssima piedade.
¹⁷ E não escondas o teu rosto do teu servo, porque estou angustiado; ouve-me depressa.
¹⁸ Aproxima-te da minha alma, e resgata-a; livra-me por causa dos meus inimigos.
¹⁹ Bem tens conhecido a minha afronta, e a minha vergonha, e a minha confusão; diante de ti estão todos os meus adversários.
²⁰ Afrontas me quebrantaram o coração, e estou fraquíssimo; esperei por alguém que tivesse compaixão, mas não houve nenhum; e por consoladores, mas não os achei.
²¹ Deram-me fel por mantimento, e na minha sede me deram a beber vinagre.
²² Torne-se-lhes a sua mesa diante deles em laço, e a prosperidade em armadilha.
²³ Escureçam-se-lhes os seus olhos, para que não vejam, e faze com que os seus lombos tremam constantemente.
²⁴ Derrama sobre eles a tua indignação, e prenda-os o ardor da tua ira.
²⁵ Fique desolado o seu palácio; e não haja quem habite nas suas tendas.
²⁶ Pois perseguem àquele a quem feriste, e conversam sobre a dor daqueles a quem chagaste.
²⁷ Acrescenta iniquidade à iniquidade deles, e não entrem na tua justiça.
²⁸ Sejam riscados do livro dos vivos, e não sejam inscritos com os justos.
²⁹ Eu, porém, sou pobre e estou triste; ponha-me a tua salvação, ó Deus, num alto retiro.
³⁰ Louvarei o nome de Deus com um cântico, e engrandecê-lo-ei com ação de graças.
³¹ Isto será mais agradável ao Senhor do que boi, ou bezerro que tem chifres e unhas.
³² Os mansos verão isto, e se agradarão; o vosso coração viverá, pois que buscais a Deus.
³³ Porque o Senhor ouve os necessitados, e não despreza os seus cativos.
³⁴ Louvem-no os céus e a terra, os mares e tudo quanto neles se move.
³⁵ Porque Deus salvará a Sião, e edificará as cidades de Judá; para que habitem ali e a possuam.
³⁶ E herdá-la-á a semente de seus servos, e os que amam o seu nome habitarão nela.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Que ato de crueldade dos inimigos neste Salmo é visto como uma profecia da crucificação de Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Deram-me fel por mantimento, e na minha sede me deram a beber vinagre", correta: true },
                            { numero: 2, texto: "Levaram minhas ovelhas", correta: false },
                            { numero: 3, texto: "Queimaram minha tenda", correta: false },
                            { numero: 4, texto: "Cortaram minhas cordas", correta: false }
                        ],
                        explicacao: "Salmos 69:21 - Deram-me fel por mantimento, e na minha sede me deram a beber vinagre.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/salmos.js (Recuperação: Salmo 70)

        70: {
            titulo: "Pedido de Socorro Urgente",
            texto: `¹ Apressa-te, ó Deus, em me livrar; Senhor, apressa-te em ajudar-me.
² Fiquem envergonhados e confundidos os que procuram a minha alma; voltem para trás e confundam-se os que me desejam mal.
³ Virem as costas como recompensa da sua vergonha os que dizem: Ah! Ah!
⁴ Folguem e alegrem-se em ti todos os que te buscam; e aqueles que amam a tua salvação digam continuamente: Engrandecido seja Deus.
⁵ Eu, porém, estou aflito e necessitado; apressa-te por mim, ó Deus. Tu és o meu auxílio e o meu libertador; Senhor, não te detenhas.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista pede que Deus faça, devido à sua urgência e necessidade?",
                        opcoes: [
                            { numero: 1, texto: "Apressa-te, ó Deus, em me livrar; Senhor, apressa-te em ajudar-me", correta: true },
                            { numero: 2, texto: "Espera até o amanhecer", correta: false },
                            { numero: 3, texto: "Manda um mensageiro amanhã", correta: false },
                            { numero: 4, texto: "Ouve a minha oração algum dia", correta: false }
                        ],
                        explicacao: "Salmos 70:1 - Apressa-te, ó Deus, em me livrar; Senhor, apressa-te em ajudar-me.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        71: {
            titulo: "Confiança na Velhice",
            texto: ` ¹ Em ti, Senhor, confio; nunca seja eu confundido.
² Livra-me na tua justiça, e faze-me escapar; inclina os teus ouvidos para mim, e salva-me.
³ Sê tu a minha habitação forte, à qual possa recorrer continuamente. Deste um mandamento que me salva, pois tu és a minha rocha e a minha fortaleza.
⁴ Livra-me, meu Deus, das mãos do ímpio, das mãos do homem injusto e cruel.
⁵ Pois tu és a minha esperança, Senhor Deus; tu és a minha confiança desde a minha mocidade.
⁶ Por ti tenho sido sustentado desde o ventre; tu és aquele que me tiraste das entranhas de minha mãe; o meu louvor será para ti constantemente.
⁷ Sou como um prodígio para muitos, mas tu és o meu refúgio forte.
⁸ Encha-se a minha boca do teu louvor e da tua glória todo o dia.
⁹ Não me rejeites no tempo da velhice; não me desampares, quando se for acabando a minha força.
¹⁰ Porque os meus inimigos falam contra mim, e os que espiam a minha alma consultam juntos,
¹¹ Dizendo: Deus o desamparou; persegui-o e tomai-o, pois não há quem o livre.
¹² Ó Deus, não te alongues de mim; meu Deus, apressa-te em ajudar-me.
¹³ Sejam confundidos e consumidos os que são adversários da minha alma; cubram-se de opróbrio e de confusão aqueles que procuram o meu mal.
¹⁴ Mas eu esperarei continuamente, e te louvarei cada vez mais.
¹⁵ A minha boca manifestará a tua justiça e a tua salvação todo o dia, pois não conheço o número delas.
¹⁶ Sairei na força do Senhor Deus, farei menção da tua justiça, e só dela.
¹⁷ Ensinaste-me, ó Deus, desde a minha mocidade; e até aqui tenho anunciado as tuas maravilhas.
¹⁸ Agora também, quando estou velho e de cabelos brancos, não me desampares, ó Deus, até que tenha anunciado a tua força a esta geração, e o teu poder a todos os vindouros.
¹⁹ Também a tua justiça, ó Deus, está muito alta, pois fizeste grandes coisas. Ó Deus, quem é semelhante a ti?
²⁰ Tu, que me tens feito ver muitos males e angústias, me darás ainda a vida, e me tirarás dos abismos da terra.
²¹ Aumentarás a minha grandeza, e de novo me consolarás.
²² Também eu te louvarei com o saltério, bem como à tua verdade, ó meu Deus; cantarei com harpa a ti, ó Santo de Israel.
²³ Os meus lábios exultarão quando eu te cantar, assim como a minha alma, que tu remiste.
²⁴ A minha língua falará da tua justiça todo o dia; pois estão confundidos e envergonhados aqueles que procuram o meu mal.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é o pedido do salmista a Deus para o tempo da sua velhice?",
                        opcoes: [
                            { numero: 1, texto: "Não me rejeites no tempo da velhice; não me desampares quando se esgotarem as minhas forças", correta: true },
                            { numero: 2, texto: "Faz-me jovem de novo", correta: false },
                            { numero: 3, texto: "Dá-me muitos escravos", correta: false },
                            { numero: 4, texto: "Leva-me logo deste mundo", correta: false }
                        ],
                        explicacao: "Salmos 71:9 - Não me rejeites no tempo da velhice; não me desampares agora, quando se esgotam as minhas forças.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        72: {
            titulo: "O Reino do Messias",
            texto: `¹ Ó Deus, dá ao rei os teus juízos, e a tua justiça ao filho do rei.
² Ele julgará ao teu povo com justiça, e aos teus pobres com juízo.
³ Os montes trarão paz ao povo, e os outeiros, justiça.
⁴ Julgará os aflitos do povo, salvará os filhos do necessitado, e quebrantará o opressor.
⁵ Temer-te-ão enquanto durarem o sol e a lua, de geração em geração.
⁶ Ele descerá como chuva sobre a erva ceifada, como os chuveiros que umedecem a terra.
⁷ Nos seus dias florescerá o justo, e abundância de paz haverá enquanto durar a lua.
⁸ Dominará de mar a mar, e desde o rio até às extremidades da terra.
⁹ Aqueles que habitam no deserto se inclinarão ante ele, e os seus inimigos lamberão o pó.
¹⁰ Os reis de Társis e das ilhas trarão presentes; os reis de Sabá e de Seba oferecerão dons.
¹¹ E todos os reis se prostrarão perante ele; todas as nações o servirão.
¹² Porque ele livrará ao necessitado quando clamar, como também ao aflito e ao que não tem quem o ajude.
¹³ Compadecer-se-á do pobre e do aflito, e salvará as almas dos necessitados.
¹⁴ Libertará as suas almas do engano e da violência, e precioso será o seu sangue aos olhos dele.
¹⁵ E viverá, e se lhe dará do ouro de Sabá; e continuamente se fará por ele oração; e todos os dias o bendirão.
¹⁶ Haverá um punhado de trigo na terra sobre as cabeças dos montes; o seu fruto se moverá como o Líbano, e os da cidade florescerão como a erva da terra.
¹⁷ O seu nome permanecerá eternamente; o seu nome se irá propagando de pais a filhos enquanto o sol durar, e os homens serão abençoados nele; todas as nações lhe chamarão bem-aventurado.
¹⁸ Bendito seja o Senhor Deus, o Deus de Israel, que só ele faz maravilhas.
¹⁹ E bendito seja para sempre o seu nome glorioso; e encha-se toda a terra da sua glória. Amém e Amém.
²⁰ Aqui acabam as orações de Davi, filho de Jessé.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como será a duração do reino descrito neste Salmo dedicado a Salomão?",
                        opcoes: [
                            { numero: 1, texto: "Apenas por quarenta anos", correta: false },
                            { numero: 2, texto: "Enquanto durarem o sol e a lua, de geração em geração", correta: true },
                            { numero: 3, texto: "Até que um novo rei surja", correta: false },
                            { numero: 4, texto: "Apenas durante o verão", correta: false }
                        ],
                        explicacao: "Salmos 72:5 - Temer-te-ão enquanto durarem o sol e a lua, de geração em geração.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        73: {
            titulo: "O Dilema de Asafe",
            texto: ` ¹ Verdadeiramente bom é Deus para com Israel, para com os limpos de coração.
² Quanto a mim, os meus pés quase que se desviaram; pouco faltou para que escorregassem os meus passos.
³ Pois eu tinha inveja dos néscios, quando via a prosperidade dos ímpios.
⁴ Porque não há apertos na sua morte, mas firme está a sua força.
⁵ Não se acham em trabalhos como outros homens, nem são afligidos como outros homens.
⁶ Por isso a soberba os cerca como um colar; vestem-se de violência como de adorno.
⁷ Os olhos deles estão inchados de gordura; eles têm mais do que o coração podia desejar.
⁸ São corrompidos e tratam maliciosamente de opressão; falam arrogantemente.
⁹ Põem as suas bocas contra os céus, e as suas línguas andam pela terra.
¹⁰ Por isso o povo dele volta aqui, e águas de copo cheio se lhes espremem.
¹¹ E eles dizem: Como o sabe Deus? Há conhecimento no Altíssimo?
¹² Eis que estes são ímpios, e prosperam no mundo; aumentam em riquezas.
¹³ Na verdade que em vão tenho purificado o meu coração; e lavei as minhas mãos na inocência.
¹⁴ Pois todo o dia tenho sido afligido, e castigado cada manhã.
¹⁵ Se eu dissesse: Falarei assim; eis que ofenderia a geração de teus filhos.
¹⁶ Quando pensava em entender isto, foi para mim muito doloroso;
¹⁷ Até que entrei no santuário de Deus; então entendi eu o fim deles.
¹⁸ Certamente tu os puseste em lugares escorregadios; tu os lanças em destruição.
¹⁹ Como caem na desolação, quase num momento! Ficam totalmente consumidos de terrores.
²⁰ Como um sonho, quando se acorda, assim, ó Senhor, quando acordares, desprezarás a aparência deles.
²¹ Assim o meu coração se azedou, e sinto picadas nas minhas entranhas.
²² Assim me embruteci, e nada sabia; fiquei como um animal perante ti.
²³ Todavia estou de contínuo contigo; tu me sustentaste pela minha mão direita.
²⁴ Guiar-me-ás com o teu conselho, e depois me receberás na glória.
²⁵ Quem tenho eu no céu senão a ti? E na terra não há quem eu deseje além de ti.
²⁶ A minha carne e o meu coração desfalecem; mas Deus é a fortaleza do meu coração, e a minha porção para sempre.
²⁷ Pois eis que os que se alongam de ti, perecerão; tu tens destruído todos aqueles que se desviam de ti.
²⁸ Mas para mim, bom é aproximar-me de Deus; pus a minha confiança no Senhor Deus, para anunciar todas as tuas obras.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que quase fez os pés de Asafe vacilarem ao olhar para o mundo?",
                        opcoes: [
                            { numero: 1, texto: "O tamanho das montanhas", correta: false },
                            { numero: 2, texto: "A inveja que sentiu ao ver a prosperidade dos ímpios", correta: true },
                            { numero: 3, texto: "O medo da morte", correta: false },
                            { numero: 4, texto: "O cansaço da viagem", correta: false }
                        ],
                        explicacao: "Salmos 73:2-3 - Quanto a mim, os meus pés quase que se desviaram... Pois eu tinha inveja dos soberbos, ao ver a prosperidade dos ímpios.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        74: {
            titulo: "O Lamento pelo Santuário",
            texto: ` ¹ Ó Deus, por que nos rejeitaste para sempre? Por que se acende a tua ira contra as ovelhas do teu pasto?
² Lembra-te da tua congregação, que compraste desde a antiguidade; da vara da tua herança, que remiste; deste monte Sião, em que habitaste.
³ Levanta os teus pés para as perpétuas assolações, para tudo o que o inimigo tem feito de mal no santuário.
⁴ Os teus inimigos bramam no meio dos teus lugares santos; põem neles as suas insígnias por sinais.
⁵ Um homem se tornava famoso, conforme houvesse levantado machados, contra a espessura do arvoredo.
⁶ Mas agora toda obra entalhada de uma vez quebram com machados e martelos.
⁷ Lançaram fogo no teu santuário; profanaram, derrubando-a até ao chão, a morada do teu nome.
⁸ Disseram nos seus corações: Despojemo-los de uma vez. Queimaram todos os lugares santos de Deus na terra.
⁹ Já não vemos os nossos sinais, já não há profeta, nem há entre nós alguém que saiba até quando isto durará.
¹⁰ Até quando, ó Deus, nos afrontará o adversário? Blasfemará o inimigo o teu nome para sempre?
¹¹ Por que retiras a tua mão, a saber, a tua destra? Tira-a de dentro do teu seio.
¹² Todavia Deus é o meu Rei desde a antiguidade, operando a salvação no meio da terra.
¹³ Tu dividiste o mar pela tua força; quebrantaste as cabeças das baleias nas águas.
¹⁴ Fizeste em pedaços as cabeças do leviatã, e o deste por mantimento aos habitantes do deserto.
¹⁵ Fendeste a fonte e o ribeiro; secaste os rios impetuosos.
¹⁶ Teu é o dia e tua é a noite; preparaste a luz e o sol.
¹⁷ Estabeleceste todos os limites da terra; verão e inverno tu os formaste.
¹⁸ Lembra-te disto: que o inimigo afrontou ao Senhor e que um povo louco blasfemou o teu nome.
¹⁹ Não entregues às feras a alma da tua rola; não te esqueças para sempre da vida dos teus aflitos.
²⁰ Atende a tua aliança; pois os lugares tenebrosos da terra estão cheios de moradas de crueldade.
²¹ Oh, não volte envergonhado o oprimido; louvem o teu nome o aflito e o necessitado.
²² Levanta-te, ó Deus, pleiteia a tua própria causa; lembra-te da afronta que o louco te faz cada dia.
²³ Não te esqueças dos gritos dos teus inimigos; o tumulto daqueles que se levantam contra ti aumenta continuamente.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que os inimigos fizeram no lugar das assembleias santas?",
                        opcoes: [
                            { numero: 1, texto: "Puseram fogo no santuário e derribaram a habitação do nome de Deus", correta: true },
                            { numero: 2, texto: "Limparam as paredes", correta: false },
                            { numero: 3, texto: "Mudaram os móveis de lugar", correta: false },
                            { numero: 4, texto: "Trouxeram flores", correta: false }
                        ],
                        explicacao: "Salmos 74:7 - Lançaram fogo no teu santuário; profanaram, derrubando-a até ao chão, a habitação do teu nome.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        75: {
            titulo: "Deus é o Juiz",
            texto: `¹ A ti, ó Deus, glorificamos, a ti damos louvor, pois o teu nome está perto, as tuas maravilhas o declaram.
² Quando eu ocupar o lugar determinado, julgarei retamente.
³ A terra e todos os seus moradores estão dissolvidos, mas eu fortaleci as suas colunas. (Selá.)
⁴ Disse eu aos loucos: Não enlouqueçais, e aos ímpios: Não levanteis a fronte;
⁵ Não levanteis a vossa fronte altiva, nem faleis com cerviz dura.
⁶ Porque nem do oriente, nem do ocidente, nem do deserto vem a exaltação.
⁷ Mas Deus é o Juiz: a um abate, e a outro exalta.
⁸ Porque na mão do Senhor há um cálice cujo vinho é tinto; está cheio de mistura; e dá a beber dele; mas as escórias dele todos os ímpios da terra as sorverão e beberão.
⁹ E eu o declararei para sempre; cantarei louvores ao Deus de Jacó.
¹⁰ E quebrarei todas as forças dos ímpios, mas as forças dos justos serão exaltadas.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "De onde não vem a exaltação, segundo o Salmo 75?",
                        opcoes: [
                            { numero: 1, texto: "Nem do oriente, nem do ocidente, nem do deserto", correta: true },
                            { numero: 2, texto: "Dos livros antigos", correta: false },
                            { numero: 3, texto: "Das mãos dos homens", correta: false },
                            { numero: 4, texto: "Do fundo do mar", correta: false }
                        ],
                        explicacao: "Salmos 75:6 - Porque nem do oriente, nem do ocidente, nem do deserto vem a exaltação.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/salmos.js (Continuação: Salmos 76-85)

        76: {
            titulo: "Deus, o Terrível Vingador",
            texto: `¹ Conhecido é Deus em Judá; grande é o seu nome em Israel.
² E em Salém está o seu tabernáculo, e a sua morada em Sião.
³ Ali quebrou as flechas do arco; o escudo, e a espada, e a guerra. (Selá.)
⁴ Tu és mais ilustre e glorioso do que os montes de caça.
⁵ Os que são ousados de coração são despojados; dormiram o seu sono; e nenhum dos homens de força achou as próprias mãos.
⁶ À tua repreensão, ó Deus de Jacó, carros e cavalos são lançados num sono profundo.
⁷ Tu, tu és temível; e quem subsistirá à tua vista, uma vez que te irares?
⁸ Desde os céus fizeste ouvir o teu juízo; a terra tremeu e se aquietou,
⁹ Quando Deus se levantou para fazer juízo, para livrar a todos os mansos da terra. (Selá.)
¹⁰ Certamente a cólera do homem redundará em teu louvor; o restante da cólera tu o restringirás.
¹¹ Fazei votos, e pagai ao Senhor vosso Deus; tragam presentes, os que estão em redor dele, àquele que é temível.
¹² Ele ceifará o espírito dos príncipes; é tremendo para com os reis da terra.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Segundo o Salmo 76, quando Deus se levanta para julgar, qual é a reação da terra?",
                        opcoes: [
                            { numero: 1, texto: "A terra começa a tremer e a cantar", correta: false },
                            { numero: 2, texto: "Desde o céu fizeste ouvir o teu juízo; a terra tremeu e se aquietou", correta: true },
                            { numero: 3, texto: "A terra se abre em chamas", correta: false },
                            { numero: 4, texto: "Nada acontece na natureza", correta: false }
                        ],
                        explicacao: "Salmos 76:8 - Desde o céu fizeste ouvir o teu juízo; a terra tremeu e se aquietou.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        77: {
            titulo: "Consolo na Recordação",
            texto: `¹ Clamei a Deus com a minha voz, a Deus levantei a minha voz, e ele inclinou para mim os ouvidos.
² No dia da minha angústia busquei ao Senhor; a minha mão se estendeu de noite, e não cessava; a minha alma recusava ser consolada.
³ Lembrava-me de Deus, e me perturbei; queixava-me, e o meu espírito desfalecia. (Selá.)
⁴ Sustentaste os meus olhos acordados; estou tão perturbado que não posso falar.
⁵ Considerava os dias da antiguidade, os anos dos tempos antigos.
⁶ De noite chamei à lembrança o meu cântico; meditei em meu coração, e o meu espírito esquadrinhou.
⁷ Rejeitará o Senhor para sempre e não tornará a ser favorável?
⁸ Cessou para sempre a sua benignidade? Acabou-se já a promessa de geração em geração?
⁹ Esqueceu-se Deus de ter misericórdia? Ou encerrou ele as suas misericórdias na sua ira? (Selá.)
¹⁰ E eu disse: Isto é enfermidade minha; mas eu me lembrarei dos anos da destra do Altíssimo.
¹¹ Eu me lembrarei das obras do Senhor; certamente que eu me lembrarei das tuas maravilhas da antiguidade.
¹² Meditarei também em todas as tuas obras, e falarei dos teus feitos.
¹³ O teu caminho, ó Deus, está no santuário. Quem é Deus tão grande como o nosso Deus?
¹⁴ Tu és o Deus que fazes maravilhas; tu fizeste notória a tua força entre os povos.
¹⁵ Com o teu braço remiste o teu povo, os filhos de Jacó e de José. (Selá.)
¹⁶ As águas te viram, ó Deus, as águas te viram, e tremeram; os abismos também se abalaram.
¹⁷ As nuvens lançaram água, os céus deram um som; as tuas flechas correram de uma para outra parte.
¹⁸ A voz do teu trovão estava no céu; os relâmpagos iluminaram o mundo; a terra se abalou e tremeu.
¹⁹ O teu caminho é no mar, e as tuas veredas nas águas grandes, e os teus passos não são conhecidos.
²⁰ Guiaste o teu povo, como a um rebanho, pela mão de Moisés e de Arão.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista decide fazer para vencer a angústia de se sentir esquecido por Deus?",
                        opcoes: [
                            { numero: 1, texto: "Decide dormir para esquecer", correta: false },
                            { numero: 2, texto: "Recordar-me-ei das obras do Senhor; certamente me lembrarei das tuas maravilhas antigas", correta: true },
                            { numero: 3, texto: "Decide abandonar a sua fé", correta: false },
                            { numero: 4, texto: "Pede ajuda aos reis vizinhos", correta: false }
                        ],
                        explicacao: "Salmos 77:11 - Recordar-me-ei das obras do Senhor; certamente me lembrarei das tuas maravilhas da antiguidade.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        78: {
            titulo: "Instrução através da História",
            texto: `¹ Escutai a minha lei, povo meu; inclinai os vossos ouvidos às palavras da minha boca.
² Abrirei a minha boca numa parábola; falarei enigmas da antiguidade.
³ Os quais temos ouvido e sabido, e nossos pais no-los têm contado.
⁴ Não os encobriremos aos seus filhos, mostrando à geração futura os louvores do Senhor, assim como a sua força e as maravilhas que fez.
⁵ Porque ele estabeleceu um testemunho em Jacó, e pôs uma lei em Israel, a qual deu aos nossos pais para que a fizessem conhecer a seus filhos;
⁶ Para que a geração vindoura a soubesse, os filhos que nascessem, os quais se levantassem e a contassem a seus filhos;
⁷ Para que pusessem em Deus a sua esperança, e se não esquecessem das obras de Deus, mas guardassem os seus mandamentos.
⁸ E não fossem como seus pais, geração obstinada e rebelde, geração que não regeu o seu coração, e cujo espírito não foi fiel a Deus.
⁹ Os filhos de Efraim, armados e trazendo arcos, viraram as costas no dia da peleja.
¹⁰ Não guardaram a aliança de Deus, e recusaram andar na sua lei;
¹¹ E esqueceram-se das suas obras e das maravilhas que lhes fizera ver.
¹² Maravilhas que ele fez à vista de seus pais na terra do Egito, no campo de Zoã.
¹³ Dividiu o mar, e os fez passar por ele; fez com que as águas parassem como num montão.
¹⁴ De dia os guiou por uma nuvem, e toda a noite por uma luz de fogo.
¹⁵ Fendeu as penhas no deserto; e deu-lhes de beber como de grandes abismos.
¹⁶ Fez sair fontes da rocha, e fez correr as águas como rios.
¹⁷ E ainda prosseguiram em pecar contra ele, provocando ao Altíssimo na solidão.
¹⁸ E tentaram a Deus nos seus corações, pedindo carne para o seu apetite.
¹⁹ E falaram contra Deus, e disseram: Acaso pode Deus preparar-nos uma mesa no deserto?
²⁰ Eis que feriu a penha, e águas correram dela: rebentaram ribeiros em abundância. Poderá também dar-nos pão, ou preparar carne para o seu povo?
²¹ Portanto o Senhor os ouviu, e se indignou; e acendeu um fogo contra Jacó, e furor também subiu contra Israel;
²² Porquanto não creram em Deus, nem confiaram na sua salvação;
²³ Ainda que mandara às altas nuvens, e abriu as portas dos céus,
²⁴ E chovera sobre eles o maná para comerem, e lhes dera do trigo do céu.
²⁵ O homem comeu o pão dos anjos; ele lhes mandou comida a fartar.
²⁶ Fez soprar o vento do oriente nos céus, e o trouxe do sul com a sua força.
²⁷ E choveu sobre eles carne como pó, e aves de asas como a areia do mar.
²⁸ E as fez cair no meio do seu arraial, ao redor de suas habitações.
²⁹ Então comeram e se fartaram bem; pois lhes cumpriu o seu desejo.
³⁰ Não refrearam o seu apetite. Ainda lhes estava a comida na boca,
³¹ Quando a ira de Deus desceu sobre eles, e matou os mais robustos deles, e feriu os escolhidos de Israel.
³² Com tudo isto ainda pecaram, e não deram crédito às suas maravilhas.
³³ Por isso consumiu os seus dias na vaidade e os seus anos na angústia.
³⁴ Quando os matava, então o procuravam; e voltavam, e de madrugada buscavam a Deus.
³⁵ E se lembravam de que Deus era a sua rocha, e o Deus Altíssimo o seu Redentor.
³⁶ Todavia lisonjeavam-no com a boca, e com a língua lhe mentiam.
³⁷ Porque o seu coração não era reto para com ele, nem foram fiéis na sua aliança.
³⁸ Ele, porém, que é misericordioso, perdoou a sua iniquidade; e não os destruiu, antes muitas vezes desviou deles o seu furor, e não despertou toda a sua ira.
³⁹ Porque se lembrou de que eram de carne, vento que passa e não volta.
⁴⁰ Quantas vezes o provocaram no deserto, e o entristeceram na solidão!
⁴¹ Voltaram atrás, e tentaram a Deus, e limitaram o Santo de Israel.
⁴² Não se lembraram da sua mão, nem do dia em que os livrou do adversário;
⁴³ Como operou os seus sinais no Egito, e as suas maravilhas no campo de Zoã;
⁴⁴ E converteu os seus rios em sangue, e as suas correntes, para que não pudessem beber.
⁴⁵ Enviou entre eles enxames de moscas que os consumiram, e rãs que os destruíram.
⁴⁶ Deu também ao pulgão a sua novidade, e o seu trabalho aos gafanhotos.
⁴⁷ Destruiu as suas vinhas com saraiva, e os seus sicômoros com pedrisco.
⁴⁸ Também entregou o seu gado à saraiva, e os seus rebanhos aos coriscos.
⁴⁹ Lançou sobre eles o ardor da sua ira, furor, indignação, e angústia, mandando maus anjos contra eles.
⁵⁰ Preparou caminho à sua ira; não poupou as suas almas da morte, mas entregou à pestilência as suas vidas.
⁵¹ E feriu a todo primogênito no Egito, primícias da sua força nas tendas de Cão.
⁵² Mas fez com que o seu povo saísse como ovelhas, e os guiou pelo deserto como um rebanho.
⁵³ E os guiou com segurança, que não temeram; mas o mar cobriu os seus inimigos.
⁵⁴ E os trouxe até ao termo do seu santuário, até este monte que a sua destra adquiriu.
⁵⁵ E expulsou os gentios de diante deles, e lhes dividiu uma herança por linha, e fez habitar em suas tendas as tribos de Israel.
⁵⁶ Contudo tentaram e provocaram o Deus Altíssimo, e não guardaram os seus testemunhos.
⁵⁷ Mas retiraram-se para trás, e portaram-se infielmente como seus pais; viraram-se como um arco enganoso.
⁵⁸ Pois o provocaram à ira com os seus altos, e moveram o seu zelo com as suas imagens de escultura.
⁵⁹ Deus ouviu isto e se indignou; e aborreceu a Israel sobremodo.
⁶⁰ Por isso desamparou o tabernáculo em Siló, a tenda que estabeleceu entre os homens.
⁶¹ E deu a sua força ao cativeiro, e a sua glória à mão do inimigo.
⁶² E entregou o seu povo à espada, e se enfureceu contra a sua herança.
⁶³ O fogo consumiu os seus jovens, e as suas moças não foram dadas em casamento.
⁶⁴ Os seus sacerdotes caíram à espada, e as suas viúvas não fizeram lamentação.
⁶⁵ Então o Senhor despertou, como quem acaba de dormir, como um valente que se alegra com o vinho.
⁶⁶ E feriu os seus adversários por detrás, e pô-los em perpétuo desprezo.
⁶⁷ Além disto, recusou o tabernáculo de José, e não elegeu a tribo de Efraim.
⁶⁸ Antes elegeu a tribo de Judá; o monte Sião, que ele amava.
⁶⁹ E edificou o seu santuário como altos palácios, como a terra, que fundou para sempre.
⁷⁰ Também elegeu a Davi seu servo, e o tirou dos apriscos das ovelhas;
⁷¹ E o tirou do cuidado das que se acharam prenhes; para apascentar a Jacó, seu povo, e a Israel, sua herança.
⁷² Assim os apascentou, segundo a integridade do seu coração, e os guiou pela perícia de suas mãos.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que os pais deveriam contar as maravilhas de Deus aos seus filhos, segundo este Salmo?",
                        opcoes: [
                            { numero: 1, texto: "Para que pusessem em Deus a sua esperança e não se esquecessem das Suas obras", correta: true },
                            { numero: 2, texto: "Para que fossem melhores guerreiros", correta: false },
                            { numero: 3, texto: "Apenas por tradição cultural", correta: false },
                            { numero: 4, texto: "Para que soubessem geografia", correta: false }
                        ],
                        explicacao: "Salmos 78:7 - Para que pusessem em Deus a sua esperança, e se não esquecessem das obras de Deus, e guardassem os seus mandamentos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        79: {
            titulo: "Lamento por Jerusalém",
            texto: ` ¹ Ó Deus, os gentios vieram à tua herança; contaminaram o teu santo templo; reduziram Jerusalém a montões de pedras.
² Deram os corpos mortos dos teus servos por comida às aves dos céus, e a carne dos teus santos às feras da terra.
³ Derramaram o sangue deles como a água ao redor de Jerusalém, e não houve quem os enterrasse.
⁴ Somos feitos opróbrio para nossos vizinhos, escárnio e zombaria para os que estão à roda de nós.
⁵ Até quando, Senhor? Acaso te indignarás para sempre? Arderá o teu zelo como fogo?
⁶ Derrama o teu furor sobre os gentios que não te conhecem, e sobre os reinos que não invocam o teu nome.
⁷ Porque devoraram a Jacó, e assolaram as suas moradas.
⁸ Não te lembres das nossas iniquidades passadas; venham ao nosso encontro depressa as tuas misericórdias, pois já estamos muito abatidos.
⁹ Ajuda-nos, ó Deus da nossa salvação, pela glória do teu nome; e livra-nos, e perdoa os nossos pecados por amor do teu nome.
¹⁰ Por que diriam os gentios: Onde está o seu Deus? Seja ele conhecido entre os gentios, à nossa vista, pela vingança do sangue dos teus servos, que foi derramado.
¹¹ Venha perante a tua face o gemido dos presos; segundo a grandeza do teu braço preserva aqueles que estão sentenciados à morte.
¹² E torna aos nossos vizinhos, no seu regaço, sete vezes tanto da sua injúria com a qual te injuriaram, Senhor.
¹³ Assim nós, teu povo e ovelhas de teu pasto, te louvaremos eternamente; de geração em geração cantaremos os teus louvores.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que as nações fizeram com o templo e com Jerusalém, segundo o Salmo 79?",
                        opcoes: [
                            { numero: 1, texto: "Profanaram o templo e reduziram Jerusalém a montões de pedras", correta: true },
                            { numero: 2, texto: "Pintaram as paredes de ouro", correta: false },
                            { numero: 3, texto: "Construíram novas torres", correta: false },
                            { numero: 4, texto: "Abandonaram a cidade vazia", correta: false }
                        ],
                        explicacao: "Salmos 79:1 - Ó Deus, as nações vieram à tua herança; profanaram o teu santo templo; reduziram Jerusalém a montões de pedras.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        80: {
            titulo: "Oração pela Restauração",
            texto: ` ¹ Tu, que és pastor de Israel, dá ouvidos; tu, que guias a José como a um rebanho; tu, que te assentas entre os querubins, resplandece.
² Perante Efraim, Benjamim e Manassés, desperta o teu poder, e vem salvar-nos.
³ Faze-nos voltar, ó Deus, e faze resplandecer o teu rosto, e seremos salvos.
⁴ Ó Senhor Deus dos Exércitos, até quando te indignarás contra a oração do teu povo?
⁵ Tu os sustentas com pão de lágrimas, e lhes dás a beber lágrimas com abundância.
⁶ Tu nos pões em contendas com os nossos vizinhos, e os nossos inimigos zombam de nós entre si.
⁷ Faze-nos voltar, ó Deus dos Exércitos, e faze resplandecer o teu rosto, e seremos salvos.
⁸ Trouxeste uma vinha do Egito; lançaste fora os gentios, e a plantaste.
⁹ Preparaste-lhe lugar, e fizeste com que ela deitasse raízes, e encheu a terra.
¹⁰ Os montes foram cobertos da sua sombra, e os seus ramos se fizeram como os cedros de Deus.
¹¹ Ela estendeu a sua ramagem até ao mar, e os seus ramos até ao rio.
¹² Por que quebraste então os seus valados, de modo que todos os que passam por ela a vindimam?
¹³ O javali da selva a devasta, e as feras do campo a devoram.
¹⁴ Oh! Deus dos Exércitos, volta-te, nós te rogamos, atende dos céus, e vê, e visita esta vide;
¹⁵ E a videira que a tua destra plantou, e o ramo que fortificaste para ti.
¹⁶ Está queimada pelo fogo, está cortada; pereceu pela repreensão da tua face.
¹⁷ Seja a tua mão sobre o homem da tua destra, sobre o filho do homem, que fortificaste para ti.
¹⁸ Assim nós não te viraremos as costas; guarda-nos em vida, e invocaremos o teu nome.
¹⁹ Faze-nos voltar, Senhor Deus dos Exércitos; faze resplandecer o teu rosto, e seremos salvos.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é o refrão que se repete no Salmo 80, pedindo a salvação de Israel?",
                        opcoes: [
                            { numero: 1, texto: "Dá-nos mais chuvas, Senhor", correta: false },
                            { numero: 2, texto: "Faze-nos voltar, ó Deus, e faze resplandecer o teu rosto, e seremos salvos", correta: true },
                            { numero: 3, texto: "Destrói todos os nossos inimigos hoje", correta: false },
                            { numero: 4, texto: "Leva-nos de volta ao Egito", correta: false }
                        ],
                        explicacao: "Salmos 80:3, 7 e 19 - Faze-nos voltar, ó Deus, e faze resplandecer o teu rosto, e seremos salvos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        81: {
            titulo: "Um Convite à Obediência",
            texto: ` ¹ Exultai a Deus, nossa fortaleza; jubilai ao Deus de Jacó.
² Tomai um salmo, e trazei junto o tamborim, a harpa suave e o saltério.
³ Tocai a trombeta na lua nova, no tempo apontado da nossa solenidade.
⁴ Porque isto era um estatuto para Israel, e uma lei do Deus de Jacó.
⁵ Ordenou-o em José por testemunho, quando saíra pela terra do Egito, onde ouvi uma língua que não entendia.
⁶ Tirei de seus ombros a carga; as suas mãos foram livres dos cestos.
⁷ Clamaste na angústia, e te livrei; respondi-te no lugar oculto dos trovões; provei-te nas águas de Meribá. (Selá.)
⁸ Ouve-me, povo meu, e eu te atestarei: Ah, Israel, se me ouvires!
⁹ Não haverá entre ti deus alheio, nem te prostrarás ante um deus estranho.
¹⁰ Eu sou o Senhor teu Deus, que te tirei da terra do Egito; abre bem a tua boca, e ta encherei.
¹¹ Mas o meu povo não quis ouvir a minha voz, e Israel não me quis.
¹² Portanto eu os entreguei aos desejos dos seus corações, e andaram nos seus próprios conselhos.
¹³ Oh! Se o meu povo me tivesse ouvido! Se Israel andasse nos meus caminhos!
¹⁴ Em breve abateria os seus inimigos, e viraria a minha mão contra os seus adversários.
¹⁵ Os que odeiam ao Senhor ter-se-lhe-iam sujeitado, e o seu tempo seria eterno.
¹⁶ E o sustentaria com o trigo mais fino, e o fartaria com o mel saído da rocha.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Deus promete fazer se o Seu povo O ouvisse e andasse nos Seus caminhos?",
                        opcoes: [
                            { numero: 1, texto: "Daria a eles todo o ouro do mundo", correta: false },
                            { numero: 2, texto: "Em breve abateria os seus inimigos", correta: true },
                            { numero: 3, texto: "Mudar-lhes-ia os nomes", correta: false },
                            { numero: 4, texto: "Faria deles anjos", correta: false }
                        ],
                        explicacao: "Salmos 81:13-14 - Ah! se o meu povo me tivesse ouvido! se Israel andasse nos meus caminhos! Em breve abateria os seus inimigos...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        82: {
            titulo: "Deus no Tribunal",
            texto: ` ¹ Deus está na congregação dos poderosos; julga no meio dos deuses.
² Até quando julgareis injustamente, e aceitareis as pessoas dos ímpios? (Selá.)
³ Fazei justiça ao pobre e ao órfão; justificai o aflito e o necessitado.
⁴ Livrai o pobre e o necessitado; tirai-os das mãos dos ímpios.
⁵ Eles não conhecem, nem entendem; andam em trevas; todos os fundamentos da terra vacilam.
⁶ Eu disse: Vós sois deuses, e todos vós filhos do Altíssimo.
⁷ Todavia morrereis como homens, e caireis como qualquer dos príncipes.
⁸ Levanta-te, ó Deus, julga a terra, pois tu possuis todas as nações.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é a ordem de Deus aos juízes da terra neste Salmo?",
                        opcoes: [
                            { numero: 1, texto: "Acumulai riquezas", correta: false },
                            { numero: 2, texto: "Fazei justiça ao pobre e ao órfão; justificai o aflito e o necessitado", correta: true },
                            { numero: 3, texto: "Julgai apenas os vossos amigos", correta: false },
                            { numero: 4, texto: "Não interfirais nos problemas do povo", correta: false }
                        ],
                        explicacao: "Salmos 82:3 - Fazei justiça ao pobre e ao órfão; justificai o aflito e o necessitado.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        83: {
            titulo: "Oração contra os Inimigos de Israel",
            texto: ` ¹ Ó Deus, não estejas em silêncio; não te cales, nem te aquietes, ó Deus,
² Porque eis que teus inimigos fazem tumulto, e os que te odeiam levantaram a cabeça.
³ Tomaram astuto conselho contra o teu povo, e consultaram contra os teus escondidos.
⁴ Disseram: Vinde, e desarraiguemo-los para que não sejam nação, nem haja mais memória do nome de Israel.
⁵ Porque consultaram juntos e unânimes; eles se unem contra ti:
⁶ As tendas de Edom, e dos ismaelitas, de Moabe, e dos agarenos,
⁷ De Gebal, e de Amom, e de Amaleque, a Filístia, com os moradores de Tiro;
⁸ Também a Assíria se ajuntou com eles; foram ajudar aos filhos de Ló. (Selá.)
⁹ Faze-lhes como aos midianitas; como a Sísera, como a Jabim na ribeira de Quisom;
¹⁰ Os quais pereceram em Endor; tornaram-se como estrume para a terra.
¹¹ Faze aos seus nobres como a Orebe, e como a Zeebe; e a todos os seus príncipes, como a Zebá e como a Zalmuna,
¹² Que disseram: Tomemos para nós as casas de Deus em possessão.
¹³ Deus meu, faze-os como um tufão, como a aresta diante do vento.
¹⁴ Como o fogo que queima um bosque, e como a chama que incendeia as montanhas,
¹⁵ Assim os persegue com a tua tempestade, e os assombra com o teu redemoinho.
¹⁶ Encham-se de vergonha as suas faces, para que busquem o teu nome, Senhor.
¹⁷ Confundam-se e assombrem-se perpetuamente; envergonhem-se, e pereçam,
¹⁸ Para que saibam que tu, cujo nome é Senhor, és o Altíssimo sobre toda a terra.`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é o objetivo da conspiração das nações inimigas mencionada neste Salmo?",
                        opcoes: [
                            { numero: 1, texto: "Apenas cobrar impostos", correta: false },
                            { numero: 2, texto: "Riscá-los de entre as nações, para que não haja mais memória do nome de Israel", correta: true },
                            { numero: 3, texto: "Mudar-se para a terra de Israel", correta: false },
                            { numero: 4, texto: "Aprender a religião de Israel", correta: false }
                        ],
                        explicacao: "Salmos 83:4 - Disseram: Vinde, e risquemo-los de entre as nações, para que não haja mais memória do nome de Israel.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        84: {
            titulo: "O Prazer de Estar na Casa de Deus",
            texto: `¹ Quão amáveis são os teus tabernáculos, Senhor dos Exércitos!
² A minha alma está desejosa, e desfalece pelos átrios do Senhor; o meu coração e a minha carne clamam pelo Deus vivo.
³ Até o pardal encontrou casa, e a andorinha ninho para si, onde ponha seus filhos, até mesmo nos teus altares, Senhor dos Exércitos, Rei meu e Deus meu.
⁴ Bem-aventurados os que habitam em tua casa; louvar-te-ão continuamente. (Selá.)
⁵ Bem-aventurado o homem cuja força está em ti, em cujo coração estão os caminhos aplanados.
⁶ Que, passando pelo vale de Baca, faz dele uma fonte; a chuva também enche os tanques.
⁷ Vão indo de força em força; cada um deles em Sião aparece perante Deus.
⁸ Senhor Deus dos Exércitos, escuta a minha oração; inclina os ouvidos, ó Deus de Jacó! (Selá.)
⁹ Olha, ó Deus, escudo nosso, e contempla o rosto do teu ungido.
¹⁰ Porque vale mais um dia nos teus átrios do que mil. Preferiria estar à porta da casa do meu Deus, a habitar nas tendas dos ímpios.
¹¹ Porque o Senhor Deus é um sol e escudo; o Senhor dará graça e glória; não retirará bem algum aos que andam na retidão.
¹² Senhor dos Exércitos, bem-aventurado o homem que em ti põe a sua confiança.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista prefere ser na casa de Deus a viver nas tendas da impiedade?",
                        opcoes: [
                            { numero: 1, texto: "Um grande general", correta: false },
                            { numero: 2, texto: "Porteiro", correta: true },
                            { numero: 3, texto: "Cantor", correta: false },
                            { numero: 4, texto: "Sacerdote", correta: false }
                        ],
                        explicacao: "Salmos 84:10 - ...preferiria estar à porta (ou ser porteiro) da casa do meu Deus, a habitar nas tendas da impiedade.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        85: {
            titulo: "Misericórdia e Verdade",
            texto: ` ¹ Abençoaste, Senhor, a tua terra; fizeste voltar o cativeiro de Jacó.
² Perdoaste a iniquidade do teu povo; cobriste todos os seus pecados. (Selá.)
³ Fizeste cessar toda a tua indignação; desviaste-te do ardor da tua ira.
⁴ Torna-nos a trazer, ó Deus da nossa salvação, e faze cessar a tua ira de sobre nós.
⁵ Acaso estarás sempre irado contra nós? Estenderás a tua ira a todas as gerações?
⁶ Não tornarás a vivificar-nos, para que o teu povo se alegre em ti?
⁷ Mostra-nos, Senhor, a tua misericórdia, e concede-nos a tua salvação.
⁸ Escutarei o que Deus, o Senhor, falar; porque falará de paz ao seu povo, e aos santos, para que não voltem à loucura.
⁹ Certamente que a salvação está perto daqueles que o temem, para que a glória habite na nossa terra.
¹⁰ A misericórdia e a verdade se encontraram; a justiça e a paz se beijaram.
¹¹ A verdade brotará da terra, e a justiça olhará desde os céus.
¹² Também o Senhor dará o que é bom, e a nossa terra dará o seu fruto.
¹³ A justiça irá adiante dele, e nos porá no caminho das suas pisadas.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que acontece quando a misericórdia e a verdade se encontram, segundo o Salmo 85?",
                        opcoes: [
                            { numero: 1, texto: "A terra para de girar", correta: false },
                            { numero: 2, texto: "A justiça e a paz se beijaram", correta: true },
                            { numero: 3, texto: "O céu fica escuro", correta: false },
                            { numero: 4, texto: "Os homens ficam com medo", correta: false }
                        ],
                        explicacao: "Salmos 85:10 - A misericórdia e a verdade se encontraram; a justiça e a paz se beijaram.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/salmos.js (Continuação: Salmos 86-95)

        86: {
            titulo: "Oração de Davi por Misericórdia",
            texto: `1 Inclina, Senhor, os teus ouvidos, e ouve-me, porque estou necessitado e aflito.
2 Guarda a minha alma, pois sou santo: ó Deus meu, salva o teu servo, que em ti confia.
3 Tem misericórdia de mim, ó Senhor, pois a ti clamo todo o dia.
4 Alegra a alma do teu servo, pois a ti, Senhor, levanto a minha alma.
5 Pois tu, Senhor, és bom, e pronto a perdoar, e abundante em benignidade para todos os que te invocam.
6 Dá ouvidos, Senhor, à minha oração e atende à voz das minhas súplicas.
7 No dia da minha angústia clamo a ti, porquanto me respondes.
8 Entre os deuses não há semelhante a ti, Senhor, nem há obras como as tuas.
9 Todas as nações que fizeste virão e se prostrarão perante a tua face, Senhor, e glorificarão o teu nome.
10 Porque tu és grande e fazes maravilhas; só tu és Deus.
11 Ensina-me, Senhor, o teu caminho, e andarei na tua verdade; une o meu coração ao temor do teu nome.
12 Louvar-te-ei, Senhor Deus meu, com todo o meu coração, e glorificarei o teu nome para sempre.
13 Pois grande é a tua misericórdia para comigo; e livraste a minha alma do inferno mais profundo.
14 Ó Deus, os soberbos se levantaram contra mim, e as assembleias dos tiranos procuraram a minha alma, e não te puseram perante os seus olhos.
15 Porém tu, Senhor, és um Deus cheio de compaixão, e piedoso, sofredor, e grande em benignidade e em verdade.
16 Volta-te para mim, e tem misericórdia de mim; dá a tua fortaleza ao teu servo, e salva ao filho da tua serva.
17 Mostra-me um sinal para bem, para que o vejam aqueles que me odeiam, e se confundam; porque tu, Senhor, me ajudaste e me consolaste.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o salmista descreve o Senhor neste Salmo de súplica?",
                        opcoes: [
                            { numero: 1, texto: "Bom, pronto a perdoar e abundante em benignidade", correta: true },
                            { numero: 2, texto: "Distante e silencioso", correta: false },
                            { numero: 3, texto: "Um rei que não ouve", correta: false },
                            { numero: 4, texto: "Feroz e vingativo", correta: false }
                        ],
                        explicacao: "Salmos 86:5 - Pois tu, Senhor, és bom, e pronto a perdoar, e abundante em benignidade para com todos os que te invocam.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        87: {
            titulo: "A Glória de Sião",
            texto: ` ¹ O seu fundamento está nos montes santos.
² O Senhor ama as portas de Sião, mais do que todas as habitações de Jacó.
³ Coisas gloriosas se dizem de ti, ó cidade de Deus. (Selá.)
⁴ Farei menção de Raabe e de Babilônia àqueles que me conhecem; eis que da Filístia, e de Tiro, e da Etiópia, se dirá: Este homem nasceu ali.
⁵ E de Sião se dirá: Este e aquele homem nasceram ali; e o mesmo Altíssimo a estabelecerá.
⁶ O Senhor contará na descrição dos povos que este homem nasceu ali. (Selá.)
⁷ Assim os cantores como os tocadores de instrumentos estarão lá; todas as minhas fontes estão em ti.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor ama mais do que todas as habitações de Jacó?",
                        opcoes: [
                            { numero: 1, texto: "As portas de Sião", correta: true },
                            { numero: 2, texto: "Os campos de trigo", correta: false },
                            { numero: 3, texto: "O deserto do Sinai", correta: false },
                            { numero: 4, texto: "As tendas dos generais", correta: false }
                        ],
                        explicacao: "Salmos 87:2 - O Senhor ama as portas de Sião mais do que todas as habitações de Jacó.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        88: {
            titulo: "Um Clamor de Tristeza Profunda",
            texto: `¹ Senhor Deus da minha salvação, diante de ti tenho clamado de dia e de noite.
² Chegue a minha oração perante a tua face, inclina os teus ouvidos ao meu clamor;
³ Porque a minha alma está cheia de angústia, e a minha vida se aproxima da sepultura.
⁴ Estou contado com aqueles que descem ao abismo; estou como homem sem forças,
⁵ Livre entre os mortos, como os feridos de morte que jazem na sepultura, dos quais te não lembras mais, e estão cortados da tua mão.
⁶ Puseste-me no abismo mais profundo, em trevas e nas profundezas.
⁷ Sobre mim pesa o teu furor; tu me afligiste com todas as tuas ondas. (Selá.)
⁸ Alongaste de mim os meus conhecidos, puseste-me em extrema abominação para com eles. Estou fechado, e não posso sair.
⁹ A minha vista desmaia por causa da aflição. Senhor, tenho clamado a ti todo o dia, tenho estendido para ti as minhas mãos.
¹⁰ Mostrarás, tu, maravilhas aos mortos, ou os mortos se levantarão e te louvarão? (Selá.)
¹¹ Será anunciada a tua benignidade na sepultura, ou a tua fidelidade na perdição?
¹² Saber-se-ão as tuas maravilhas nas trevas, e a tua justiça na terra do esquecimento?
¹³ Eu, porém, Senhor, tenho clamado a ti, e de madrugada te esperará a minha oração.
¹⁴ Senhor, por que rejeitas a minha alma? Por que escondes de mim a tua face?
¹⁵ Estou aflito, e prestes tenho estado a morrer desde a minha mocidade; enquanto sofro os teus terrores, estou perturbado.
¹⁶ A tua ardente indignação sobre mim vai passando; os teus terrores me têm retalhado.
¹⁷ Eles me rodeiam todo o dia como água; eles juntos me sitiam.
¹⁸ Desviaste para longe de mim amigos e companheiros, e os meus conhecidos estão em trevas.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Este salmo é conhecido por ser um dos mais tristes. Como o autor descreve a sua vida?",
                        opcoes: [
                            { numero: 1, texto: "Cheia de riquezas", correta: false },
                            { numero: 2, texto: "A minha alma está cheia de males, e a minha vida se aproxima da sepultura", correta: true },
                            { numero: 3, texto: "Como um dia ensolarado", correta: false },
                            { numero: 4, texto: "Como uma festa constante", correta: false }
                        ],
                        explicacao: "Salmos 88:3 - Porque a minha alma está cheia de males, e a minha vida se aproxima da sepultura.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        89: {
            titulo: "A Aliança com Davi",
            texto: ` ¹ As benignidades do Senhor cantarei perpetuamente; com a minha boca manifestarei a tua fidelidade de geração em geração.
² Pois disse eu: A tua benignidade será edificada para sempre; tu confirmarás a tua fidelidade até nos céus, dizendo:
³ Fiz uma aliança com o meu escolhido, e jurei ao meu servo Davi, dizendo:
⁴ A tua semente estabelecerei para sempre, e edificarei o teu trono de geração em geração. (Selá.)
⁵ E os céus louvarão as tuas maravilhas, ó Senhor, a tua fidelidade também na congregação dos santos.
⁶ Pois quem no céu se pode igualar ao Senhor? Quem entre os filhos dos poderosos pode ser semelhante ao Senhor?
⁷ Deus é muito formidável na assembleia dos santos, e para ser reverenciado por todos os que o cercam.
⁸ Ó Senhor Deus dos Exércitos, quem é poderoso como tu, Senhor, com a tua fidelidade ao redor de ti?
⁹ Tu dominas o ímpeto do mar; quando as suas ondas se levantam, tu as fazes aquietar.
¹⁰ Tu quebraste a Raabe como se fora ferida de morte; espalhaste os teus inimigos com o teu braço forte.
¹¹ Teus são os céus, e tua é a terra; o mundo e a sua plenitude tu os fundaste.
¹² O norte e o sul tu os criaste; Tabor e Hermom jubilam em teu nome.
¹³ Tu tens um braço poderoso; forte é a tua mão, e alta está a tua destra.
¹⁴ Justiça e juízo são a base do teu trono; misericórdia e verdade irão adiante do teu rosto.
¹⁵ Bem-aventurado o povo que conhece o som alegre; andará, ó Senhor, na luz da tua face.
¹⁶ Em teu nome se alegrará todo o dia, e na tua justiça se exaltará.
¹⁷ Pois tu és a glória da sua força; e no teu favor será exaltado o nosso poder.
¹⁸ Porque o Senhor é a nossa defesa, e o Santo de Israel o nosso Rei.
¹⁹ Então falaste em visão ao teu santo, e disseste: Pus o socorro sobre um que é poderoso; exaltei a um eleito do povo.
²⁰ Achei a Davi, meu servo; com santo óleo o ungi,
²¹ Com o qual a minha mão ficará firme, e o meu braço o fortalecerá.
²² O inimigo não o importunará, nem o filho da perversidade o afligirá.
²³ E eu derrubarei os seus inimigos perante a sua face, e ferirei aos que o odeiam.
²⁴ E a minha fidelidade e a minha benignidade estarão com ele; e em meu nome será exaltado o seu poder.
²⁵ Porei também a sua mão no mar, e a sua direita nos rios.
²⁶ Ele me chamará, dizendo: Tu és meu pai, meu Deus, e a rocha da minha salvação.
²⁷ Também o farei meu primogênito mais elevado do que os reis da terra.
²⁸ A minha benignidade lhe conservarei eu para sempre, e a minha aliança lhe será firme,
²⁹ E conservarei para sempre a sua semente, e o seu trono como os dias do céu.
³⁰ Se os seus filhos deixarem a minha lei, e não andarem nos meus juízos,
³¹ Se profanarem os meus preceitos, e não guardarem os meus mandamentos,
³² Então visitarei a sua transgressão com a vara, e a sua iniquidade com açoites.
³³ Mas não retirarei totalmente dele a minha benignidade, nem faltarei à minha fidelidade.
³⁴ Não quebrarei a minha aliança, não alterarei o que saiu dos meus lábios.
³⁵ Uma vez jurei pela minha santidade que não mentirei a Davi.
³⁶ A sua semente durará para sempre, e o seu trono, como o sol diante de mim.
³⁷ Será estabelecido para sempre como a lua e como uma testemunha fiel no céu. (Selá.)
³⁸ Mas tu rejeitaste e aborreceste; tu te indignaste contra o teu ungido.
³⁹ Abominaste a aliança do teu servo; profanaste a sua coroa, lançando-a por terra.
⁴⁰ Derrubaste todos os seus muros; arruinaste as suas fortificações.
⁴¹ Todos os que passam pelo caminho o despojam; é um opróbrio para os seus vizinhos.
⁴² Exaltaste a destra dos seus adversários; fizeste com que todos os seus inimigos se regozijassem.
⁴³ Também embotaste o fio da sua espada, e não o sustentaste na peleja.
⁴⁴ Fizeste cessar a sua glória, e deitaste por terra o seu trono.
⁴⁵ Abreviaste os dias da sua mocidade; cobriste-o de vergonha. (Selá.)
⁴⁶ Até quando, Senhor? Acaso te esconderás para sempre? Arderá a tua ira como fogo?
⁴⁷ Lembra-te de quão breves são os meus dias; por que criarias em vão todos os filhos dos homens?
⁴⁸ Que homem há, que viva, e não veja a morte? Livrará ele a sua alma do poder da sepultura? (Selá.)
⁴⁹ Senhor, onde estão as tuas antigas benignidades que juraste a Davi pela tua verdade?
⁵⁰ Lembra-te, Senhor, do opróbrio dos teus servos; como eu trago no meu peito o opróbrio de todos os povos poderosos,
⁵¹ Com o qual, Senhor, os teus inimigos têm difamado, com o qual têm difamado as pisadas do teu ungido.
⁵² Bendito seja o Senhor para sempre. Amém, e Amém.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor diz sobre a sua aliança com Davi?",
                        opcoes: [
                            { numero: 1, texto: "Fiz uma aliança com o meu escolhido; jurei ao meu servo Davi", correta: true },
                            { numero: 2, texto: "A aliança acabou", correta: false },
                            { numero: 3, texto: "A aliança depende da força de Davi", correta: false },
                            { numero: 4, texto: "Não houve juramento", correta: false }
                        ],
                        explicacao: "Salmos 89:3 - Fiz uma aliança com o meu escolhido; jurei ao meu servo Davi: A tua semente estabelecerei para sempre...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        90: {
            titulo: "A Eternidade de Deus (Moisés)",
            texto: ` ¹ Senhor, tu tens sido o nosso refúgio, de geração em geração.
² Antes que os montes nascessem, ou que tu formasses a terra e o mundo, mesmo de eternidade a eternidade, tu és Deus.
³ Tu reduzes o homem à destruição; e dizes: Tornai-vos, filhos dos homens.
⁴ Porque mil anos são aos teus olhos como o dia de ontem que passou, e como a vigília da noite.
⁵ Tu os levas como uma corrente de água; são como um sono; de manhã são como a erva que cresce.
⁶ De madrugada floresce e cresce; à tarde corta-se e seca.
⁷ Pois somos consumidos pela tua ira, e pelo teu furor somos angustiados.
⁸ Diante de ti puseste as nossas iniquidades, os nossos pecados ocultos, à luz do teu rosto.
⁹ Pois todos os nossos dias vão passando na tua indignação; passamos os nossos anos como um conto que se conta.
¹⁰ Os dias da nossa vida chegam a setenta anos, e se alguns, pela sua robustez, chegam a oitenta anos, o orgulho deles é canseira e enfado, pois cedo se corta e vamos voando.
¹¹ Quem conhece o poder da tua ira? Segundo és tremendo, assim é o teu furor.
¹² Ensina-nos a contar os nossos dias, de tal maneira que alcancemos corações sábios.
¹³ Volta-te para nós, Senhor; até quando? Aplaca-te para com os teus servos.
¹⁴ Farta-nos de madrugada com a tua benignidade, para que nos regozijemos, e nos alegremos todos os nossos dias.
¹⁵ Alegra-nos pelos dias em que nos afligiste, e pelos anos em que vimos o mal.
¹⁶ Apareça a tua obra aos teus servos, e a tua glória sobre seus filhos.
¹⁷ E seja sobre nós a formosura do Senhor nosso Deus, e confirma sobre nós a obra das nossas mãos; sim, confirma a obra das nossas mãos.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o autor pede que Deus nos ensine a fazer para alcançarmos corações sábios?",
                        opcoes: [
                            { numero: 1, texto: "A contar os nossos dias", correta: true },
                            { numero: 2, texto: "A contar o nosso dinheiro", correta: false },
                            { numero: 3, texto: "A esquecer o passado", correta: false },
                            { numero: 4, texto: "A prever o futuro", correta: false }
                        ],
                        explicacao: "Salmos 90:12 - Ensina-nos a contar os nossos dias, de tal maneira que alcancemos corações sábios.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        91: {
            titulo: "O Refúgio e a Fortaleza",
            texto: `¹ Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.
² Direi do Senhor: Ele é o meu Deus, o meu refúgio, a minha fortaleza, e nele confiarei.
³ Porque ele te livrará do laço do passarinheiro, e da peste perniciosa.
⁴ Ele te cobrirá com as suas penas, e debaixo das suas asas te confiarás; a sua verdade será o teu escudo e broquel.
⁵ Não terás medo do terror de noite nem da seta que voa de dia,
⁶ Nem da peste que anda na escuridão, nem da mortandade que assola ao meio-dia.
⁷ Mil cairão ao teu lado, e dez mil à tua direita, mas não chegará a ti.
⁸ Somente com os teus olhos contemplarás, e verás a recompensa dos ímpios.
⁹ Porque tu, ó Senhor, és o meu refúgio. No Altíssimo fizeste a tua habitação.
¹⁰ Nenhum mal te sucederá, nem praga alguma chegará à tua tenda.
¹¹ Porque aos seus anjos dará ordem a teu respeito, para te guardarem em todos os teus caminhos.
¹² Eles te sustentarão nas suas mãos, para que não tropeces com o teu pé em pedra alguma.
¹³ Pisarás sobre o leão e a cobra; calcarás aos pés o leão jovem e a serpente.
¹⁴ Porquanto tão encarecidamente me amou, também eu o livrarei; pô-lo-ei em retiro alto, porque conheceu o meu nome.
¹⁵ Ele me invocará, e eu lhe responderei; estarei com ele na angústia; dela o retirarei, e o glorificarei.
¹⁶ Fartá-lo-ei com longura de dias, e lhe mostrarei a minha salvação.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde habita aquele que está seguro contra o terror da noite e a seta que voa de dia?",
                        opcoes: [
                            { numero: 1, texto: "No esconderijo do Altíssimo", correta: true },
                            { numero: 2, texto: "Dentro de uma caverna", correta: false },
                            { numero: 3, texto: "Em um navio forte", correta: false },
                            { numero: 4, texto: "Em uma ilha deserta", correta: false }
                        ],
                        explicacao: "Salmos 91:1 - Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Deus dará aos Seus anjos a teu respeito?",
                        opcoes: [
                            { numero: 1, texto: "Ordem para te observarem", correta: false },
                            { numero: 2, texto: "Ordem para que te guardem em todos os teus caminhos", correta: true },
                            { numero: 3, texto: "Espadas novas", correta: false },
                            { numero: 4, texto: "Asas de ouro", correta: false }
                        ],
                        explicacao: "Salmos 91:11 - Porque aos seus anjos dará ordem a teu respeito, para te guardarem em todos os teus caminhos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        92: {
            titulo: "Louvor pela Bondade de Deus",
            texto: `¹ Bom é louvar ao Senhor, e cantar louvores ao teu nome, ó Altíssimo;
² Para de manhã anunciar a tua benignidade, e todas as noites a tua fidelidade;
³ Sobre um instrumento de dez cordas, e sobre o saltério; sobre a harpa com som solene.
⁴ Pois tu, Senhor, me alegraste pelos teus feitos; exultarei nas obras das tuas mãos.
⁵ Quão grandes são, Senhor, as tuas obras! Mui profundos são os teus pensamentos.
⁶ O homem brutal não conhece, nem o louco entende isto.
⁷ Quando o ímpio crescer como a erva, e quando florescerem todos os que praticam a iniquidade, é que serão destruídos perpetuamente.
⁸ Mas tu, Senhor, és o Altíssimo para sempre.
⁹ Pois eis que os teus inimigos, Senhor, eis que os teus inimigos perecerão; serão dispersos todos os que praticam a iniquidade.
¹⁰ Porém tu exaltarás o meu poder, como o do boi selvagem. Serei ungido com óleo fresco.
¹¹ Os meus olhos verão o meu desejo sobre os meus inimigos, e os meus ouvidos ouvirão o meu desejo acerca dos malfeitores que se levantam contra mim.
¹² O justo florescerá como a palmeira; crescerá como o cedro no Líbano.
¹³ Os que estão plantados na casa do Senhor florescerão nos átrios do nosso Deus.
¹⁴ Na velhice ainda darão frutos; serão viçosos e vigorosos,
¹⁵ Para anunciar que o Senhor é reto. Ele é a minha rocha e nele não há injustiça.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "A que o salmista compara o justo, dizendo que ele florescerá?",
                        opcoes: [
                            { numero: 1, texto: "À palmeira e ao cedro no Líbano", correta: true },
                            { numero: 2, texto: "À grama do campo", correta: false },
                            { numero: 3, texto: "A uma roseira", correta: false },
                            { numero: 4, texto: "A um espinheiro", correta: false }
                        ],
                        explicacao: "Salmos 92:12 - O justo florescerá como a palmeira; crescerá como o cedro no Líbano.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        93: {
            titulo: "A Majestade do Senhor",
            texto: ` ¹ O Senhor reina; está vestido de majestade. O Senhor se revestiu e cingiu de poder; o mundo também está firmado, e não poderá vacilar.
² O teu trono está firme desde então; tu és desde a eternidade.
³ Os rios levantam, ó Senhor, os rios levantam o seu ruído, os rios levantam as suas ondas.
⁴ Mas o Senhor nas alturas é mais poderoso do que o ruído das grandes águas e do que as grandes ondas do mar.
⁵ Mui fiéis são os teus testemunhos; a santidade convém à tua casa, Senhor, para sempre.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor é mais do que o ruído das grandes águas e as vagas do mar?",
                        opcoes: [
                            { numero: 1, texto: "Mais poderoso", correta: true },
                            { numero: 2, texto: "Mais silencioso", correta: false },
                            { numero: 3, texto: "Mais perigoso", correta: false },
                            { numero: 4, texto: "Mais frio", correta: false }
                        ],
                        explicacao: "Salmos 93:4 - Mas o Senhor nas alturas é mais poderoso do que o ruído das grandes águas e do que as grandes ondas do mar.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        94: {
            titulo: "Deus, o Juiz da Terra",
            texto: `¹ Ó Senhor Deus, a quem a vingança pertence, ó Deus, a quem a vingança pertence, mostra-te resplandecente.
² Exalta-te, tu, que és juiz da terra; dá a paga aos soberbos.
³ Até quando os ímpios, Senhor, até quando os ímpios saltarão de prazer?
⁴ Até quando proferirão, e falarão coisas duras, e se gloriarão todos os que praticam a iniquidade?
⁵ Reduzem a pedaços o teu povo, ó Senhor, e afligem a tua herança.
⁶ Matam a viúva e o estrangeiro, e ao órfão tiram a vida.
⁷ Contudo dizem: O Senhor não o verá; nem para isso atenderá o Deus de Jacó.
⁸ Atendei, ó brutais dentre o povo; e vós, loucos, quando sereis sábios?
⁹ Aquele que fez o ouvido não ouvirá? E o que formou o olho, não verá?
¹⁰ Aquele que repreende os gentios não castigará? E o que ensina ao homem o conhecimento, não saberá?
¹¹ O Senhor conhece os pensamentos do homem, que são vaidade.
¹² Bem-aventurado é o homem a quem tu castigas, ó Senhor, e a quem ensinas a tua lei;
¹³ Para lhe dares descanso dos dias maus, até que se abra a cova para o ímpio.
¹⁴ Pois o Senhor não rejeitará o seu povo, nem desamparará a sua herança.
¹⁵ Mas o juízo voltará à retidão, e segui-lo-ão todos os retos de coração.
¹⁶ Quem será por mim contra os malfeitores? Quem se porá por mim contra os que praticam a iniquidade?
¹⁷ Se o Senhor não tivera ido em meu auxílio, a minha alma quase que teria ficado no silêncio.
¹⁸ Quando eu disse: O meu pé vacila; a tua benignidade, Senhor, me susteve.
¹⁹ Na multidão dos meus pensamentos dentro de mim, as tuas consolações recrearam a minha alma.
²⁰ Porventura o trono de iniquidade te acompanha, o qual forja o mal por uma lei?
²¹ Eles se ajuntam contra a alma do justo, e condenam o sangue inocente.
²² Mas o Senhor é a minha defesa; e o meu Deus é a rocha do meu refúgio.
²³ E trará sobre eles a sua própria iniquidade; e os destruirá na sua própria malícia; o Senhor nosso Deus os destruirá.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que acontece quando o salmista diz: 'O meu pé vacila'?",
                        opcoes: [
                            { numero: 1, texto: "A tua benignidade, Senhor, me sustenta", correta: true },
                            { numero: 2, texto: "Ele cai no chão", correta: false },
                            { numero: 3, texto: "Ele volta para trás", correta: false },
                            { numero: 4, texto: "Ninguém o ajuda", correta: false }
                        ],
                        explicacao: "Salmos 94:18 - Quando eu dizia: O meu pé vacila; a tua benignidade, Senhor, me sustinha.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        95: {
            titulo: "Um Convite à Adoração",
            texto: `¹ Vinde, cantemos ao Senhor; jubilemos à rocha da nossa salvação.
² Apresentemo-nos ante a sua face com louvores, e celebremo-lo com salmos.
³ Porque o Senhor é Deus grande, e Rei grande sobre todos os deuses.
⁴ Nas suas mãos estão as profundezas da terra, e as alturas dos montes são suas.
⁵ Seu é o mar, e ele o fez, e as suas mãos formaram a terra seca.
⁶ Ó, vinde, adoremos e prostremo-nos; ajoelhemos diante do Senhor que nos criou.
⁷ Porque ele é o nosso Deus, e nós povo do seu pasto e ovelhas da sua mão. Se hoje ouvirdes a sua voz,
⁸ Não endureçais os vossos corações, assim como na provocação e como no dia da tentação no deserto;
⁹ Quando vossos pais me tentaram, me provaram, e viram a minha obra.
¹⁰ Quarenta anos estive desgostado com esta geração, e disse: É um povo que erra de coração, e não tem conhecido os meus caminhos.
¹¹ A quem jurei na minha ira que não entrarão no meu repouso.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Salmo 95 nos exorta a não fazer hoje, se ouvirmos a voz de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Não endureçais os vossos corações", correta: true },
                            { numero: 2, texto: "Não faleis com ninguém", correta: false },
                            { numero: 3, texto: "Não saiais de casa", correta: false },
                            { numero: 4, texto: "Não olheis para o céu", correta: false }
                        ],
                        explicacao: "Salmos 95:7-8 - ...Se hoje ouvirdes a sua voz, não endureçais os vossos corações...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/salmos.js (Continuação: Salmos 96-105)

        96: {
            titulo: "A Grandeza do Senhor",
            texto: `1 Cantai ao Senhor um cântico novo, cantai ao Senhor toda a terra.
2 Cantai ao Senhor, bendizei o seu nome; anunciai a sua salvação de dia em dia.
3 Anunciai entre as nações a sua glória; entre todos os povos as suas maravilhas.
4 Porque grande é o Senhor, e mui digno de louvor, mais temível do que todos os deuses.
5 Porque todos os deuses dos povos são ídolos, mas o Senhor fez os céus.
6 Glória e majestade estão ante a sua face, força e formosura no seu santuário.
7 Dai ao Senhor, ó famílias dos povos, dai ao Senhor glória e força.
8 Dai ao Senhor a glória devida ao seu nome; trazei oferenda, e entrai nos seus átrios.
9 Adorai ao Senhor na beleza da santidade; tremei diante dele toda a terra.
10 Dizei entre os gentios que o Senhor reina. O mundo também se firmará para que se não abale; julgará os povos com retidão.
11 Alegrem-se os céus, e regozije-se a terra; brame o mar e a sua plenitude.
12 Alegre-se o campo com tudo o que há nele; então se regozijarão todas as árvores do bosque,
13 Ante a face do Senhor, porque vem, porque vem a julgar a terra; julgará o mundo com justiça e os povos com a sua verdade. `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Salmo 96 convida toda a terra a cantar ao Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Um cântico antigo", correta: false },
                            { numero: 2, texto: "Um cântico novo", correta: true },
                            { numero: 3, texto: "Um lamento de dor", correta: false },
                            { numero: 4, texto: "Uma canção de ninar", correta: false }
                        ],
                        explicacao: "Salmos 96:1 - Cantai ao Senhor um cântico novo; cantai ao Senhor todas as terras.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        97: {
            titulo: "O Domínio do Senhor",
            texto: `¹ O Senhor reina; regozije-se a terra; alegrem-se as muitas ilhas.
² Nuvens e escuridão estão ao redor dele; justiça e juízo são a base do seu trono.
³ Um fogo vai adiante dele, e abrasa os seus inimigos em redor.
⁴ Os seus relâmpagos iluminam o mundo; a terra viu e tremeu.
⁵ Os montes derretem como cera na presença do Senhor, na presença do Senhor de toda a terra.
⁶ Os céus anunciam a sua justiça, e todos os povos veem a sua glória.
⁷ Confundidos sejam todos os que servem imagens de escultura, que se gloriam de ídolos; prostrai-vos diante dele todos os deuses.
⁸ Sião ouviu e se alegrou; e as filhas de Judá se alegraram por causa da tua justiça, ó Senhor.
⁹ Pois tu, Senhor, és o mais alto sobre toda a terra; tu és muito mais exaltado do que todos os deuses.
¹⁰ Vós, que amais ao Senhor, odiai o mal. Ele guarda as almas dos seus santos; ele os livra das mãos dos ímpios.
¹¹ A luz semeia-se para o justo, e a alegria para os retos de coração.
¹² Alegrai-vos, ó justos, no Senhor, e dai louvores à memória da sua santidade.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Salmo 97 diz que está semeada para o justo?",
                        opcoes: [
                            { numero: 1, texto: "Riqueza", correta: false },
                            { numero: 2, texto: "A luz", correta: true },
                            { numero: 3, texto: "A dúvida", correta: false },
                            { numero: 4, texto: "A discórdia", correta: false }
                        ],
                        explicacao: "Salmos 97:11 - A luz está semeada para o justo, e a alegria para os retos de coração.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        98: {
            titulo: "O Juiz que Vem",
            texto: `1 Cantai ao Senhor um cântico novo, porque fez maravilhas; a sua destra e o seu braço santo lhe alcançaram a salvação.
2 O Senhor fez notória a sua salvação, manifestou a sua justiça perante os olhos dos gentios.
3 Lembrou-se da sua benignidade e da sua verdade para com a casa de Israel; todas as extremidades da terra viram a salvação do nosso Deus.
4 Exultai no Senhor toda a terra; exclamai e alegrai-vos de prazer, e cantai louvores.
5 Cantai louvores ao Senhor com a harpa; com a harpa e a voz do canto.
6 Com trombetas e som de cornetas, exultai perante a face do Senhor, do Rei.
7 Brame o mar e a sua plenitude; o mundo, e os que nele habitam.
8 Os rios batam as palmas; regozijem-se também as montanhas,
9 Perante a face do Senhor, porque vem a julgar a terra; com justiça julgará o mundo, e o povo com equidade. `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como a natureza deve reagir à vinda do Senhor para julgar a terra?",
                        opcoes: [
                            { numero: 1, texto: "Os rios batam palmas e os montes cantem de júbilo", correta: true },
                            { numero: 2, texto: "As árvores devem secar", correta: false },
                            { numero: 3, texto: "O mar deve silenciar", correta: false },
                            { numero: 4, texto: "As estrelas devem cair", correta: false }
                        ],
                        explicacao: "Salmos 98:8-9 - Os rios batam palmas; regozijem-se também juntos os montes, perante a face do Senhor...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        99: {
            titulo: "O Senhor é Santo",
            texto: `¹ O Senhor reina; tremam os povos. Ele está assentado entre os querubins; comova-se a terra.
² O Senhor é grande em Sião, e mais alto do que todos os povos.
³ Louvem o teu nome, grande e tremendo, pois é santo.
⁴ Também o poder do Rei ama o juízo; tu firmas a equidade, fazes juízo e justiça em Jacó.
⁵ Exaltai ao Senhor nosso Deus, e prostrai-vos diante do escabelo de seus pés, pois é santo.
⁶ Moisés e Arão, entre os seus sacerdotes, e Samuel entre os que invocam o seu nome, clamavam ao Senhor, e Ele lhes respondia.
⁷ Na coluna de nuvem lhes falava; eles guardaram os seus testemunhos, e os estatutos que lhes dera.
⁸ Tu os escutaste, Senhor nosso Deus: tu foste um Deus que lhes perdoaste, ainda que tomaste vingança dos seus feitos.
⁹ Exaltai ao Senhor nosso Deus e adorai-o no seu monte santo, pois o Senhor nosso Deus é santo.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde o Senhor reina e está sentado, segundo o Salmo 99?",
                        opcoes: [
                            { numero: 1, texto: "Entre os querubins", correta: true },
                            { numero: 2, texto: "No fundo do oceano", correta: false },
                            { numero: 3, texto: "Apenas no coração dos homens", correta: false },
                            { numero: 4, texto: "Atrás das nuvens", correta: false }
                        ],
                        explicacao: "Salmos 99:1 - O Senhor reina; tremam os povos. Ele está assentado entre os querubins; comova-se a terra.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        100: {
            titulo: "Hino de Gratidão",
            texto: `¹ Celebrai com júbilo ao Senhor, todas as terras.
² Servi ao Senhor com alegria; e entrai diante dele com canto.
³ Sabei que o Senhor é Deus; foi ele que nos fez, e não nós a nós mesmos; somos povo seu e ovelhas do seu pasto.
⁴ Entrai pelas portas dele com gratidão, e em seus átrios com louvor; louvai-o, e bendizei o seu nome.
⁵ Porque o Senhor é bom, e eterna a sua misericórdia; e a sua verdade dura de geração em geração.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como devemos entrar pelas portas e pelos átrios do Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Com pressa e barulho", correta: false },
                            { numero: 2, texto: "Com ação de graças e com louvor", correta: true },
                            { numero: 3, texto: "Em silêncio e tristeza", correta: false },
                            { numero: 4, texto: "Com as mãos vazias", correta: false }
                        ],
                        explicacao: "Salmos 100:4 - Entrai pelas portas dele com gratidão, e em seus átrios com louvor...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        101: {
            titulo: "O Propósito do Íntegro",
            texto: ` ¹ Cantarei a misericórdia e o juízo; a ti, Senhor, cantarei.
² Portar-me-ei com inteligência no caminho reto. Quando virás a mim? Andarei em minha casa com um coração sincero.
³ Não porei coisa má diante dos meus olhos. Odeio a obra daqueles que se desviam; não se me pegará a mim.
⁴ Um coração perverso se apartará de mim; não conhecerei o homem mau.
⁵ Aquele que murmura do seu próximo às escondidas, eu o destruirei; aquele que tem olhar altivo e coração soberbo, não suportarei.
⁶ Os meus olhos estarão sobre os fiéis da terra, para que se assentem comigo; o que anda num caminho reto, esse me servirá.
⁷ O que usa de engano não ficará dentro da minha casa; o que fala mentiras não estará firme perante os meus olhos.
⁸ Pela manhã destruirei todos os ímpios da terra, para desarraigar da cidade do Senhor todos os que praticam a iniquidade.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista diz que não poria diante dos seus olhos?",
                        opcoes: [
                            { numero: 1, texto: "Coisa má (ou vil)", correta: true },
                            { numero: 2, texto: "Livros de história", correta: false },
                            { numero: 3, texto: "Imagens de reis", correta: false },
                            { numero: 4, texto: "A luz do sol", correta: false }
                        ],
                        explicacao: "Salmos 101:3 - Não porei coisa má diante dos meus olhos; odeio a obra daqueles que se desviam...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        102: {
            titulo: "A Oração do Aflito",
            texto: ` ¹ Senhor, ouve a minha oração, e chegue a ti o meu clamor.
² Não escondas de mim o teu rosto no dia da minha angústia, inclina para mim os teus ouvidos; no dia em que eu clamar, ouve-me depressa.
³ Porque os meus dias se consomem como a fumaça, e os meus ossos ardem como lenha.
⁴ O meu coração está ferido e seco como a erva, por isso me esqueço de comer o meu pão.
⁵ Por causa da voz do meu gemido os meus ossos se apegam à minha pele.
⁶ Sou semelhante ao pelicano no deserto; sou como um mocho nas solidões.
⁷ Vigio, sou como o pardal solitário no telhado.
⁸ Os meus inimigos me afrontam todo o dia; os que se enfurecem contra mim têm jurado contra mim.
⁹ Pois tenho comido cinza como pão, e misturado com lágrimas a minha bebida,
¹⁰ Por causa da tua ira e da tua indignação, pois tu me levantaste e me arremessaste.
¹¹ Os meus dias são como a sombra que declina, e como a erva me vou secando.
¹² Mas tu, Senhor, permanecerás para sempre, a tua memória de geração em geração.
¹³ Tu te levantarás e terás piedade de Sião; pois o tempo de te compadeceres dela, o tempo determinado, já chegou.
¹⁴ Porque os teus servos têm prazer nas suas pedras, e se compadecem do seu pó.
¹⁵ Então os gentios temerão o nome do Senhor, e todos os reis da terra a tua glória.
¹⁶ Quando o Senhor edificar a Sião, aparecerá na sua glória.
¹⁷ Ele atenderá à oração do desamparado, e não desprezará a sua oração.
¹⁸ Isto se escreverá para a geração futura; e o povo que se criar louvará ao Senhor.
¹⁹ Pois olhou desde o alto do seu santuário, desde os céus o Senhor contemplou a terra,
²⁰ Para ouvir o gemido dos presos, para soltar os sentenciados à morte;
²¹ Para anunciarem o nome do Senhor em Sião, e o seu louvor em Jerusalém,
²² Quando os povos se ajuntarem, e os reinos, para servirem ao Senhor.
²³ Abateu a minha força no caminho; abreviou os meus dias.
²⁴ Dizia eu: Meu Deus, não me leves no meio dos meus dias, os teus anos são por todas as gerações.
²⁵ Desde a antiguidade fundaste a terra, e os céus são obra das tuas mãos.
²⁶ Eles perecerão, mas tu permanecerás; todos eles se envelhecerão como um vestido; como roupa os mudarás, e ficarão mudados.
²⁷ Porém tu és o mesmo, e os teus anos nunca terão fim.
²⁸ Os filhos dos teus servos continuarão, e a sua semente ficará firmada perante ti.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Em contraste com o homem que passa como sombra, como é descrito o Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Tu, porém, Senhor, permanecerás para sempre", correta: true },
                            { numero: 2, texto: "Tu mudas com o tempo", correta: false },
                            { numero: 3, texto: "Tu és como a erva", correta: false },
                            { numero: 4, texto: "Tu és uma sombra maior", correta: false }
                        ],
                        explicacao: "Salmos 102:12 - Mas tu, Senhor, permanecerás para sempre, e a tua memória de geração em geração.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        103: {
            titulo: "Bendi ao Senhor, ó minha Alma",
            texto: `¹ Bendize, ó minha alma, ao Senhor, e tudo o que há em mim bendiga o seu santo nome.
² Bendize, ó minha alma, ao Senhor, e não te esqueças de nenhum de seus benefícios.
³ Ele é o que perdoa todas as tuas iniquidades, que sara todas as tuas enfermidades,
⁴ Que redime a tua vida da perdição; que te coroa de benignidade e de misericórdia,
⁵ Que farta a tua boca de bens, de sorte que a tua mocidade se renova como a da águia.
⁶ O Senhor faz justiça e juízo a todos os oprimidos.
⁷ Fez conhecidos os seus caminhos a Moisés, e os seus feitos aos filhos de Israel.
⁸ Misericordioso e piedoso é o Senhor; longânimo e grande em benignidade.
⁹ Não reprovará perpetuamente, nem para sempre reterá a sua ira.
¹⁰ Não nos tratou segundo os nossos pecados, nem nos recompensou segundo as nossas iniquidades.
¹¹ Pois assim como o céu está elevado acima da terra, assim é grande a sua misericórdia para com os que o temem.
¹² Assim como está longe o oriente do ocidente, assim afasta de nós as nossas transgressões.
¹³ Assim como um pai se compadece de seus filhos, assim o Senhor se compadece daqueles que o temem.
¹⁴ Pois ele conhece a nossa estrutura; lembra-se de que somos pó.
¹⁵ Quanto ao homem, os seus dias são como a erva, como a flor do campo assim floresce.
¹⁶ Passando por ela o vento, logo se vai, e o seu lugar não será mais conhecido.
¹⁷ Mas a misericórdia do Senhor é desde a eternidade e até a eternidade sobre aqueles que o temem, e a sua justiça sobre os filhos dos filhos;
¹⁸ Sobre aqueles que guardam a sua aliança, e sobre os que se lembram dos seus mandamentos para os cumprir.
¹⁹ O Senhor tem estabelecido o seu trono nos céus, e o seu reino domina sobre tudo.
²⁰ Bendizei ao Senhor, todos os seus anjos, vós que excedeis em força, que guardais os seus mandamentos, obedecendo à voz da sua palavra.
²¹ Bendizei ao Senhor, todos os seus exércitos, vós ministros seus, que executais a sua vontade.
²² Bendizei ao Senhor, todas as suas obras, em todos os lugares do seu domínio; bendize, ó minha alma, ao Senhor.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "De que forma o Senhor afasta de nós as nossas transgressões?",
                        opcoes: [
                            { numero: 1, texto: "Quanto o oriente está longe do ocidente", correta: true },
                            { numero: 2, texto: "Apenas um pouco", correta: false },
                            { numero: 3, texto: "Como a areia do mar", correta: false },
                            { numero: 4, texto: "Elas continuam conosco", correta: false }
                        ],
                        explicacao: "Salmos 103:12 - Quanto está longe o oriente do ocidente, tanto afasta de nós as nossas transgressões.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        104: {
            titulo: "O Deus da Criação",
            texto: ` ¹ Bendize, ó minha alma, ao Senhor! Senhor Deus meu, tu és magnificentíssimo; estás vestido de glória e de majestade.
² Ele se cobre de luz como de um vestido, estende os céus como uma cortina.
³ Põe nas águas as vigas das suas câmaras; faz das nuvens o seu carro, anda sobre as asas do vento.
⁴ Faz dos seus anjos espíritos, dos seus ministros um fogo abrasador.
⁵ Lançou os fundamentos da terra; ela não vacilará em tempo algum.
⁶ Tu a cobriste com o abismo, como com um vestido; as águas estavam sobre os montes.
⁷ À tua repreensão fugiram; à voz do teu trovão se apressaram.
⁸ Subiram aos montes, desceram aos vales, até ao lugar que para elas fundaste.
⁹ Termo lhes puseste, que não ultrapassarão, para que não tornem mais a cobrir a terra.
¹⁰ Tu, que fazes sair as fontes nos vales, as quais correm entre os montes.
¹¹ Dão de beber a todo o animal do campo; os jumentos monteses matam a sua sede.
¹² Junto delas as aves do céu terão a sua habitação, cantando entre os ramos.
¹³ Ele rega os montes desde as suas câmaras; a terra farta-se do fruto das suas obras.
¹⁴ Faz crescer a erva para o gado, e a verdura para o serviço do homem, para fazer sair da terra o pão,
¹⁵ E o vinho que alegra o coração do homem, e o azeite que faz reluzir o seu rosto, e o pão que fortalece o coração do homem.
¹⁶ As árvores do Senhor fartam-se de seiva, os cedros do Líbano que ele plantou,
¹⁷ Onde as aves se aninham; quanto à cegonha, a sua casa é nas faias.
¹⁸ Os altos montes são para as cabras monteses, e os rochedos são refúgio para os coelhos.
¹⁹ Designou a lua para as estações; o sol conhece o seu ocaso.
²⁰ Ordenas a escuridão, e faz-se noite, na qual saem todos os animais da selva.
²¹ Os leõezinhos bramam pela presa, e de Deus buscam o seu sustento.
²² Nasce o sol e logo se acolhem, e se deitam nos seus covis.
²³ Então sai o homem à sua obra e ao seu trabalho, até à tarde.
²⁴ Ó Senhor, quão variadas são as tuas obras! Todas as coisas fizeste com sabedoria; cheia está a terra das tuas riquezas.
²⁵ Assim é este mar grande e muito espaçoso, onde há seres sem número, animais pequenos e grandes.
²⁶ Ali andam os navios; e o leviatã que formaste para nele folgar.
²⁷ Todos esperam de ti, que lhes dês o seu sustento em tempo oportuno.
²⁸ Dando-lho tu, eles o recolhem; abres a tua mão, e se enchem de bens.
²⁹ Escondes o teu rosto, e ficam perturbados; se lhes tiras o fôlego, morrem, e voltam para o seu pó.
³⁰ Envias o teu Espírito, e são criados, e assim renovas a face da terra.
³¹ A glória do Senhor durará para sempre; o Senhor se alegrará nas suas obras.
³² Olhando ele para a terra, ela treme; tocando nos montes, logo fumegam.
³³ Cantarei ao Senhor enquanto eu viver; cantarei louvores ao meu Deus, enquanto eu tiver existência.
³⁴ A minha meditação acerca dele será suave; eu me alegrarei no Senhor.
³⁵ Desapareçam da terra os pecadores, e os ímpios não sejam mais. Bendize, ó minha alma, ao Senhor. Louvai ao Senhor.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que acontece aos seres vivos quando Deus esconde o Seu rosto ou lhes tira o fôlego?",
                        opcoes: [
                            { numero: 1, texto: "Ficam perturbados, morrem e tornam-se em pó", correta: true },
                            { numero: 2, texto: "Eles viajam para longe", correta: false },
                            { numero: 3, texto: "Eles dormem por um ano", correta: false },
                            { numero: 4, texto: "Eles mudam de cor", correta: false }
                        ],
                        explicacao: "Salmos 104:29 - Escondes o teu rosto, e ficam perturbados; se lhes tiras o fôlego, morrem, e voltam para o seu pó.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        105: {
            titulo: "A Fidelidade Histórica",
            texto: ` ¹ Louvai ao Senhor, e invocai o seu nome; fazei conhecidas as suas obras entre os povos.
² Cantai-lhe, cantai-lhe salmos; falai de todas as suas maravilhas.
³ Gloriai-vos no seu santo nome; alegre-se o coração daqueles que buscam ao Senhor.
⁴ Buscai ao Senhor e a sua força; buscai a sua face continuamente.
⁵ Lembrai-vos das maravilhas que fez, dos seus prodígios e dos juízos da sua boca;
⁶ Vós, semente de Abraão, seu servo, vós, filhos de Jacó, seus escolhidos.
⁷ Ele é o Senhor nosso Deus; os seus juízos estão em toda a terra.
⁸ Lembrou-se da sua aliança para sempre, da palavra que mandou a milhares de gerações.
⁹ A qual aliança fez com Abraão, e o seu juramento a Isaque.
¹⁰ E confirmou o mesmo a Jacó por lei, e a Israel por aliança eterna,
¹¹ Dizendo: A ti darei a terra de Canaã, a região da vossa herança.
¹² Quando eram poucos homens em número, sim, mui poucos, e estrangeiros nela;
¹³ Quando andavam de nação em nação e de um reino para outro povo;
¹⁴ Não permitiu a ninguém que os oprimisse, e por amor deles repreendeu a reis, dizendo:
¹⁵ Não toqueis os meus ungidos, e não maltrateis os meus profetas.
¹⁶ Chamou a fome sobre a terra, quebrantou todo o sustento do pão.
¹⁷ Mandou perante eles um homem, José, que foi vendido por escravo;
¹⁸ Cujos pés apertaram com grilhões; foi posto em ferros;
¹⁹ Até ao tempo em que chegou a sua palavra; a palavra do Senhor o provou.
²⁰ Mandou o rei, e o fez soltar; o governador dos povos, e o soltou.
²¹ Fê-lo senhor da sua casa, e governador de toda a sua fazenda;
²² Para sujeitar os seus príncipes a seu gosto, e instruir os seus anciãos.
²³ Então Israel entrou no Egito, e Jacó peregrinou na terra de Cão.
²⁴ E aumentou o seu povo em grande maneira, e o fez mais poderoso do que os seus inimigos.
²⁵ Virou o coração deles para que odiassem o seu povo, para que tratassem astutamente aos seus servos.
²⁶ Enviou Moisés, seu servo, e Arão, a quem escolhera.
²⁷ Mostraram entre eles os seus sinais e prodígios, na terra de Cão.
²⁸ Mandou trevas, e a fez escurecer; e não foram rebeldes à sua palavra.
²⁹ Converteu as suas águas em sangue, e matou os seus peixes.
³⁰ A sua terra produziu rãs em abundância, até nas câmaras dos seus reis.
³¹ Falou ele, e vieram enxames de moscas e piolhos em todo o seu termo.
³² Converteu as suas chuvas em saraiva, e fogo abrasador na sua terra.
³³ Feriu as suas vinhas e os seus figueirais, e quebrou as árvores dos seus termos.
³⁴ Falou ele e vieram gafanhotos e pulgão sem número.
³⁵ E comeram toda a erva da sua terra, e devoraram o fruto dos seus campos.
³⁶ Feriu também a todos os primogênitos da sua terra, as primícias de todas as suas forças.
³⁷ E tirou-os para fora com prata e ouro, e entre as suas tribos não houve um só fraco.
³⁸ O Egito se alegrou quando eles saíram, porque o seu temor caíra sobre eles.
³⁹ Estendeu uma nuvem por coberta, e um fogo para iluminar de noite.
⁴⁰ Oraram, e ele fez vir codornizes, e os fartou de pão do céu.
⁴¹ Abriu a penha, e dela correram águas; correram pelos lugares secos, como um rio.
⁴² Porque se lembrou da sua santa palavra, e de Abraão, seu servo.
⁴³ E tirou dali o seu povo com alegria, e os seus escolhidos com regozijo.
⁴⁴ E deu-lhes as terras dos gentios; e herdaram o trabalho dos povos;
⁴⁵ Para que guardassem os seus preceitos, e observassem as suas leis. Louvai ao Senhor.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "De qual aliança eterna o Salmo 105 faz memória?",
                        opcoes: [
                            { numero: 1, texto: "A aliança feita com Abraão, Isaque e Jacó", correta: true },
                            { numero: 2, texto: "A aliança com os reis da Pérsia", correta: false },
                            { numero: 3, texto: "A aliança com os vizinhos", correta: false },
                            { numero: 4, texto: "Uma aliança secreta", correta: false }
                        ],
                        explicacao: "Salmos 105:8-10 - Lembrou-se da sua aliança para sempre... a qual aliança fez com Abraão, e o seu juramento a Isaque...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/salmos.js (Continuação: Salmos 106-115)

        106: {
            titulo: "A História da Rebeldia e Misericórdia",
            texto: ` ¹ Louvai ao Senhor. Louvai ao Senhor, porque ele é bom, porque a sua misericórdia dura para sempre.
² Quem pode contar as obras poderosas do Senhor? Quem anunciará os seus louvores?
³ Bem-aventurados os que guardam o juízo, o que pratica justiça em todos os tempos.
⁴ Lembra-te de mim, Senhor, segundo a tua boa vontade para com o teu povo; visita-me com a tua salvação.
⁵ Para que eu veja os bens de teus escolhidos, para que eu me alegre com a alegria da tua nação, para que me glorie com a tua herança.
⁶ Nós pecamos como os nossos pais, cometemos a iniquidade, andamos perversamente.
⁷ Nossos pais não entenderam as tuas maravilhas no Egito; não se lembraram da multidão das tuas misericórdias; antes o provocaram no mar, sim no Mar Vermelho.
⁸ Não obstante, ele os salvou por amor do seu nome, para fazer conhecido o seu poder.
⁹ Repreendeu, também, o Mar Vermelho, e este se secou, e os fez caminhar pelos abismos como pelo deserto.
¹⁰ E os livrou da mão daquele que os odiava, e os remiu da mão do inimigo.
¹¹ E as águas cobriram os seus adversários; nem um só deles ficou.
¹² Então creram nas suas palavras, e cantaram os seus louvores.
¹³ Porém cedo se esqueceram das suas obras; não esperaram o seu conselho.
¹⁴ Mas deixaram-se levar à cobiça no deserto, e tentaram a Deus na solidão.
¹⁵ E ele lhes cumpriu o seu desejo, mas enviou magreza às suas almas.
¹⁶ E invejaram a Moisés no campo, e a Arão, o santo do Senhor.
¹⁷ Abriu-se a terra, e engoliu a Datã, e cobriu o grupo de Abirão.
¹⁸ E um fogo se acendeu no seu grupo; a chama abrasou os ímpios.
¹⁹ Fizeram um bezerro em Horebe e adoraram a imagem fundida.
²⁰ E converteram a sua glória na figura de um boi que come erva.
²¹ Esqueceram-se de Deus, seu Salvador, que fizera grandezas no Egito,
²² Maravilhas na terra de Cão, coisas tremendas no Mar Vermelho.
²³ Por isso disse que os destruiria, não houvesse Moisés, seu escolhido, ficado perante ele na brecha, para desviar a sua indignação, a fim de não os destruir.
²⁴ Também desprezaram a terra aprazível; não creram na sua palavra.
²⁵ Antes murmuraram nas suas tendas, e não deram ouvidos à voz do Senhor.
²⁶ Por isso levantou a sua mão contra eles, para os derrubar no deserto;
²⁷ Para derrubar também a sua semente entre as nações, e espalhá-los pelas terras.
²⁸ Também se juntaram com Baal-Peor, e comeram os sacrifícios dos mortos.
²⁹ Assim o provocaram à ira com as suas invenções; e a peste rebentou entre eles.
³⁰ Então se levantou Fineias, e fez juízo, e cessou aquela peste.
³¹ E isto lhe foi contado como justiça, de geração em geração, para sempre.
³² Indignaram-no também junto às águas da contenda, de sorte que sucedeu mal a Moisés, por causa deles;
³³ Porque irritaram o seu espírito, de modo que falou imprudentemente com seus lábios.
³⁴ Não destruíram os povos, como o Senhor lhes dissera.
³⁵ Antes se misturaram com os gentios, e aprenderam as suas obras.
³⁶ E serviram aos seus ídolos, que vieram a ser-lhes um laço.
³⁷ Demais disto, sacrificaram seus filhos e suas filhas aos demônios,
³⁸ E derramaram sangue inocente, o sangue de seus filhos e de suas filhas que sacrificaram aos ídolos de Canaã; e a terra foi manchada com sangue.
³⁹ Assim se contaminaram com as suas obras, e se corromperam com os seus feitos.
⁴⁰ Então se acendeu a ira do Senhor contra o seu povo, de modo que abominou a sua herança.
⁴¹ E os entregou nas mãos dos gentios; e aqueles que os odiavam se assenhorearam deles.
⁴² E os seus inimigos os oprimiram, e foram humilhados debaixo das suas mãos.
⁴³ Muitas vezes os livrou, mas o provocaram com o seu conselho, e foram abatidos pela sua iniquidade.
⁴⁴ Contudo, atendeu à sua aflição, ouvindo o seu clamor.
⁴⁵ E se lembrou da sua aliança, e se arrependeu segundo a multidão das suas misericórdias.
⁴⁶ Assim, também fez com que deles tivessem misericórdia os que os levaram cativos.
⁴⁷ Salva-nos, Senhor nosso Deus, e congrega-nos dentre os gentios, para que louvemos o teu nome santo, e nos gloriemos no teu louvor.
⁴⁸ Bendito seja o Senhor Deus de Israel, de eternidade em eternidade, e todo o povo diga: Amém. Louvai ao Senhor.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o povo fez no Horebe, esquecendo-se de Deus, seu Salvador?",
                        opcoes: [
                            { numero: 1, texto: "Construíram uma torre", correta: false },
                            { numero: 2, texto: "Fizeram um bezerro e adoraram uma imagem fundida", correta: true },
                            { numero: 3, texto: "Plantaram um jardim", correta: false },
                            { numero: 4, texto: "Voltaram para o Egito sozinhos", correta: false }
                        ],
                        explicacao: "Salmos 106:19 - Fizeram um bezerro em Horebe, e adoraram uma imagem fundida.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        107: {
            titulo: "Deus Livra os Atribulados",
            texto: ` ¹ Louvai ao Senhor, porque ele é bom, porque a sua benignidade dura para sempre.
² Digam-no os remidos do Senhor, os que remiu da mão do inimigo,
³ E os que congregou das terras do oriente e do ocidente, do norte e do sul.
⁴ Andaram desgarrados pelo deserto, por caminhos solitários; não acharam cidade para habitarem.
⁵ Famintos e sedentos, a sua alma neles desfalecia.
⁶ E clamaram ao Senhor na sua angústia, e os livrou das suas dificuldades.
⁷ E os levou por caminho direito, para irem a uma cidade de habitação.
⁸ Louvem ao Senhor pela sua bondade, e pelas suas maravilhas para com os filhos dos homens.
⁹ Pois fartou a alma sedenta, e encheu de bens a alma faminta.
¹⁰ Tal como a que se assenta nas trevas e sombra da morte, presa em aflição e em ferro;
¹¹ Porquanto se rebelaram contra as palavras de Deus, e desprezaram o conselho do Altíssimo.
¹² Portanto, lhes abateu o coração com trabalho; tropeçaram, e não houve quem os ajudasse.
¹³ Então clamaram ao Senhor na sua angústia, e os livrou das suas dificuldades.
¹⁴ Tirou-os das trevas e sombra da morte; e quebrou as suas prisões.
¹⁵ Louvem ao Senhor pela sua bondade, e pelas suas maravilhas para com os filhos dos homens.
¹⁶ Pois quebrou as portas de bronze, e despedaçou os ferrolhos de ferro.
¹⁷ Os loucos, por causa da sua transgressão, e por causa das suas iniquidades, são aflitos.
¹⁸ A sua alma aborreceu toda a comida, e chegaram até às portas da morte.
¹⁹ Então clamaram ao Senhor na sua angústia, e ele os livrou das suas dificuldades.
²⁰ Enviou a sua palavra, e os sarou; e os livrou da sua destruição.
²¹ Louvem ao Senhor pela sua bondade, e pelas suas maravilhas para com os filhos dos homens.
²² E ofereçam os sacrifícios de louvor, e relatem as suas obras com regozijo.
²³ Os que descem ao mar em navios, mercando nas grandes águas,
²⁴ Esses veem as obras do Senhor, e as suas maravilhas no profundo.
²⁵ Pois ele manda, e se levanta o vento tempestuoso que eleva as suas ondas.
²⁶ Sobem aos céus; descem aos abismos, e a sua alma se derrete em angústias.
²⁷ Andam e cambaleiam como ébrios, e perderam todo o tino.
²⁸ Então clamam ao Senhor na sua angústia; e ele os livra das suas dificuldades.
²⁹ Faz cessar a tormenta, e acalmam-se as suas ondas.
³⁰ Então se alegram, porque se aquietaram; assim os leva ao seu porto desejado.
³¹ Louvem ao Senhor pela sua bondade, e pelas suas maravilhas para com os filhos dos homens.
³² Exaltem-no na congregação do povo, e glorifiquem-no na assembleia dos anciãos.
³³ Ele converte os rios em um deserto, e as fontes em terra sedenta;
³⁴ A terra frutífera em estéril, pela maldade dos que nela habitam.
³⁵ Converte o deserto em lagoa, e a terra seca em fontes.
³⁶ E faz habitar ali os famintos, para que edifiquem cidade para habitação;
³⁷ E semeiam os campos e plantam vinhas, que produzem fruto abundante.
³⁸ Também os abençoa, de modo que se multiplicam muito; e o seu gado não diminui.
³⁹ Depois se diminuem e se abatem, pela opressão, e aflição e tristeza.
⁴⁰ Derrama o desprezo sobre os príncipes, e os faz andar desgarrados pelo deserto, onde não há caminho.
⁴¹ Porém livra ao necessitado da opressão, em um lugar alto, e multiplica as famílias como rebanhos.
⁴² Os retos o verão, e se alegrarão, e toda a iniquidade tapará a boca.
⁴³ Quem é sábio observará estas coisas, e eles compreenderão as benignidades do Senhor.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem são aqueles que devem dizer que o Senhor é bom e a Sua misericórdia dura para sempre?",
                        opcoes: [
                            { numero: 1, texto: "Digam-no os remidos do Senhor", correta: true },
                            { numero: 2, texto: "Digam-no os anjos apenas", correta: false },
                            { numero: 3, texto: "Digam-no os reis da terra", correta: false },
                            { numero: 4, texto: "Digam-no os sábios", correta: false }
                        ],
                        explicacao: "Salmos 107:2 - Digam-no os remidos do Senhor, os que ele remiu da mão do inimigo.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        108: {
            titulo: "Louvem a Deus entre as Nações",
            texto: `¹ Preparado está o meu coração, ó Deus; cantarei e darei louvores até com a minha glória.
² Despertai, saltério e harpa; eu mesmo despertarei ao romper da alva.
³ Louvar-te-ei entre os povos, Senhor, e a ti cantarei louvores entre as nações.
⁴ Porque a tua benignidade se estende até aos céus, e a tua verdade chega até às mais altas nuvens.
⁵ Exalta-te sobre os céus, ó Deus, e a tua glória sobre toda a terra.
⁶ Para que sejam livres os teus amados, salva-nos com a tua destra, e ouve-nos.
⁷ Deus falou na sua santidade; eu me regozijarei; repartirei a Siquém, e medirei o vale de Sucote.
⁸ Meu é Gileade, meu é Manassés; e Efraim a força da minha cabeça, Judá o meu legislador.
⁹ Moabe a minha bacia de lavar; sobre Edom lançarei o meu sapato, sobre a Filístia jubilarei.
¹⁰ Quem me levará à cidade forte? Quem me guiará até Edom?
¹¹ Porventura não serás tu, ó Deus, que nos rejeitaste? E não sairás, ó Deus, com os nossos exércitos?
¹² Dá-nos auxílio para sair da angústia, porque vão é o socorro da parte do homem.
¹³ Em Deus faremos proezas, pois ele calcará aos pés os nossos inimigos.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é o desejo do salmista ao preparar o seu coração para cantar louvores?",
                        opcoes: [
                            { numero: 1, texto: "Ser exaltado acima dos céus", correta: false },
                            { numero: 2, texto: "Sê exaltado, ó Deus, sobre os céus; e a tua glória sobre toda a terra", correta: true },
                            { numero: 3, texto: "Ter paz no palácio", correta: false },
                            { numero: 4, texto: "Ficar rico com a música", correta: false }
                        ],
                        explicacao: "Salmos 108:5 - Sê exaltado, ó Deus, sobre os céus; e a tua glória sobre toda a terra.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        109: {
            titulo: "Oração contra o Acusador",
            texto: `¹ Ó Deus do meu louvor, não te cales,
² Pois a boca do ímpio e a boca do enganador estão abertas contra mim. Têm falado contra mim com uma língua mentirosa.
³ Eles me cercaram com palavras odiosas, e pelejaram contra mim sem causa.
⁴ Em recompensa do meu amor são meus adversários; mas eu faço oração.
⁵ E me deram mal pelo bem, e ódio pelo meu amor.
⁶ Põe sobre ele um ímpio, e Satanás esteja à sua direita.
⁷ Quando for julgado, saia condenado; e a sua oração se lhe torne em pecado.
⁸ Sejam poucos os seus dias, e outro tome o seu ofício.
⁹ Sejam órfãos os seus filhos, e viúva sua mulher.
¹⁰ Sejam vagabundos e pedintes os seus filhos, e busquem pão fora dos seus lugares desolados.
¹¹ Lance o credor mão de tudo quanto tenha, e despojem os estranhos o seu trabalho.
¹² Não haja ninguém que se compadeça dele, nem haja quem favoreça os seus órfãos.
¹³ Desapareça a sua posteridade, o seu nome seja apagado na seguinte geração.
¹⁴ Esteja na memória do Senhor a iniquidade de seus pais, e não se apague o pecado de sua mãe.
¹⁵ Antes estejam sempre perante o Senhor, para que faça desaparecer a sua memória da terra.
¹⁶ Porquanto não se lembrou de fazer misericórdia; antes perseguiu ao homem aflito e ao necessitado, para que pudesse até matar o quebrantado de coração.
¹⁷ Visto que amou a maldição, ela lhe sobrevenha, e assim como não desejou a bênção, ela se afaste dele.
¹⁸ Assim como se vestiu de maldição, como sua roupa, assim penetre ela nas suas entranhas, como água, e em seus ossos como azeite.
¹⁹ Seja para ele como a roupa que o cobre, e como cinto que o cinja sempre.
²⁰ Seja este o galardão dos meus contrários, da parte do Senhor, e dos que falam mal contra a minha alma.
²¹ Mas tu, ó Deus o Senhor, trata comigo por amor do teu nome, porque a tua misericórdia é boa, livra-me,
²² Pois estou aflito e necessitado, e o meu coração está ferido dentro de mim.
²³ Vou-me como a sombra que declina; sou sacudido como o gafanhoto.
²⁴ De jejuar estão enfraquecidos os meus joelhos, e a minha carne emagrece.
²⁵ E ainda lhes sou opróbrio; quando me contemplam, movem as cabeças.
²⁶ Ajuda-me, ó Senhor meu Deus, salva-me segundo a tua misericórdia.
²⁷ Para que saibam que esta é a tua mão, e que tu, Senhor, o fizeste.
²⁸ Amaldiçoem eles, mas abençoa tu; quando se levantarem fiquem confundidos; e alegre-se o teu servo.
²⁹ Vistam-se os meus adversários de vergonha, e cubram-se com a sua própria confusão como com uma capa.
³⁰ Louvarei grandemente ao Senhor com a minha boca; louvá-lo-ei entre a multidão.
³¹ Pois se porá à direita do pobre, para o livrar dos que condenam a sua alma.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista deu em troca do ódio e das acusações que recebeu?",
                        opcoes: [
                            { numero: 1, texto: "Ele deu a sua oração", correta: true },
                            { numero: 2, texto: "Ele deu mais ódio", correta: false },
                            { numero: 3, texto: "Ele deu ouro", correta: false },
                            { numero: 4, texto: "Ele deu o silêncio", correta: false }
                        ],
                        explicacao: "Salmos 109:4 - Em recompensa do meu amor, são meus adversários; mas eu entrego-me à oração.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        110: {
            titulo: "O Sacerdócio do Messias",
            texto: `¹ Disse o Senhor ao meu Senhor: Assenta-te à minha mão direita, até que ponha os teus inimigos por escabelo dos teus pés.
² O Senhor enviará o cetro da tua fortaleza desde Sião, dizendo: Domina no meio dos teus inimigos.
³ O teu povo será mui voluntário no dia do teu poder; nos ornamentos de santidade, desde a madre da alva, tu tens o orvalho da tua mocidade.
⁴ Jurou o Senhor, e não se arrependerá: tu és um sacerdote eterno, segundo a ordem de Melquisedeque.
⁵ O Senhor, à tua direita, ferirá os reis no dia da sua ira.
⁶ Julgará entre os gentios; tudo encherá de corpos mortos; ferirá os cabeças de muitos países.
⁷ Beberá do ribeiro no caminho, por isso exaltará a cabeça.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Segundo o Salmo 110, qual é a ordem do sacerdócio do Messias?",
                        opcoes: [
                            { numero: 1, texto: "A ordem de Arão", correta: false },
                            { numero: 2, texto: "A ordem de Melquisedeque", correta: true },
                            { numero: 3, texto: "A ordem de Davi", correta: false },
                            { numero: 4, texto: "A ordem dos levitas", correta: false }
                        ],
                        explicacao: "Salmos 110:4 - Jurou o Senhor, e não se arrependerá: Tu és um sacerdote eterno, segundo a ordem de Melquisedeque.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        111: {
            titulo: "As Obras do Senhor",
            texto: `¹ Louvai ao Senhor. Louvarei ao Senhor de todo o meu coração, na assembleia dos justos e na congregação.
² Grandes são as obras do Senhor, procuradas por todos os que nelas tomam prazer.
³ A sua obra tem glória e majestade, e a sua justiça permanece para sempre.
⁴ Fez com que as suas maravilhas fossem lembradas; piedoso e misericordioso é o Senhor.
⁵ Deu mantimento aos que o temem; lembrar-se-á sempre da sua aliança.
⁶ Anunciou ao seu povo o poder das suas obras, para lhe dar a herança dos gentios.
⁷ As obras das suas mãos são verdade e juízo, seguros todos os seus mandamentos.
⁸ Permanecem firmes para todo o sempre; e são feitos em verdade e retidão.
⁹ Redenção enviou ao seu povo; ordenou a sua aliança para sempre; santo e tremendo é o seu nome.
¹⁰ O temor do Senhor é o princípio da sabedoria; bom entendimento têm todos os que cumprem os seus mandamentos; o seu louvor permanece para sempre.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que é o princípio da sabedoria, segundo o Salmo 111?",
                        opcoes: [
                            { numero: 1, texto: "O estudo das leis", correta: false },
                            { numero: 2, texto: "O temor do Senhor", correta: true },
                            { numero: 3, texto: "A idade avançada", correta: false },
                            { numero: 4, texto: "A leitura dos livros", correta: false }
                        ],
                        explicacao: "Salmos 111:10 - O temor do Senhor é o princípio da sabedoria; bom entendimento têm todos os que cumprem os seus mandamentos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        112: {
            titulo: "A Felicidade do Justo",
            texto: `¹ Louvai ao Senhor. Bem-aventurado o homem que teme ao Senhor, que em seus mandamentos tem grande prazer.
² A sua semente será poderosa na terra; a geração dos retos será abençoada.
³ Prosperidade e riquezas haverá na sua casa, e a sua justiça permanece para sempre.
⁴ Aos justos nasce luz nas trevas; ele é piedoso, misericordioso e justo.
⁵ O homem bom se compadece, e empresta; disporá as suas coisas com juízo;
⁶ Porque nunca será abalado; o justo estará em memória eterna.
⁷ Não temerá maus rumores; o seu coração está firme, confiando no Senhor.
⁸ O seu coração está bem confirmado, ele não temerá, até que veja o seu desejo sobre os seus inimigos.
⁹ Ele espalhou, deu aos necessitados; a sua justiça permanece para sempre, e a sua força se exaltará em glória.
¹⁰ O ímpio o verá, e se entristecerá; rangerá os dentes, e se consumirá; o desejo dos ímpios perecerá.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como é o coração do homem que teme ao Senhor diante de más notícias?",
                        opcoes: [
                            { numero: 1, texto: "Fica desesperado", correta: false },
                            { numero: 2, texto: "Não temerá maus rumores; o seu coração está firme, confiando no Senhor", correta: true },
                            { numero: 3, texto: "Esconde-se de medo", correta: false },
                            { numero: 4, texto: "Fica com raiva", correta: false }
                        ],
                        explicacao: "Salmos 112:7 - Não temerá maus rumores; o seu coração está firme, confiando no Senhor.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        113: {
            titulo: "Deus Exalta o Humilde",
            texto: `¹ Louvai ao Senhor. Louvai, servos do Senhor, louvai o nome do Senhor.
² Seja bendito o nome do Senhor, desde agora para sempre.
³ Desde o nascimento do sol até ao ocaso, seja louvado o nome do Senhor.
⁴ Exaltado está o Senhor acima de todas as nações, e a sua glória sobre os céus.
⁵ Quem é como o Senhor nosso Deus, que habita nas alturas?
⁶ O qual se inclina, para ver o que está nos céus e na terra!
⁷ Levanta o pobre do pó, e do monturo levanta o necessitado,
⁸ Para o fazer assentar com os príncipes, mesmo com os príncipes do seu povo.
⁹ Faz com que a mulher estéril habite em casa, e seja alegre mãe de filhos. Louvai ao Senhor.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "De onde Deus levanta o pobre e o necessitado?",
                        opcoes: [
                            { numero: 1, texto: "Do pó e do monturo (lixo)", correta: true },
                            { numero: 2, texto: "Das nuvens", correta: false },
                            { numero: 3, texto: "Das montanhas", correta: false },
                            { numero: 4, texto: "Do meio do mar", correta: false }
                        ],
                        explicacao: "Salmos 113:7 - Levanta o pobre do pó, e do monturo ergue o necessitado.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        114: {
            titulo: "O Tremor da Natureza",
            texto: ` Quando Israel saiu do Egito, e a casa de Jacó de um povo de língua estranha,
² Judá foi seu santuário, e Israel seu domínio.
³ O mar viu isto, e fugiu; o Jordão voltou para trás.
⁴ Os montes saltaram como carneiros, e os outeiros como cordeiros.
⁵ Que tiveste tu, ó mar, que fugiste, e tu, ó Jordão, que voltaste para trás?
⁶ Montes, que saltastes como carneiros, e outeiros, como cordeiros?
⁷ Treme, terra, na presença do Senhor, na presença do Deus de Jacó.
⁸ O qual converteu o rochedo em lago de águas, e o seixo em fonte de água.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o mar e o Jordão fizeram perante a presença de Deus ao sair Israel do Egito?",
                        opcoes: [
                            { numero: 1, texto: "O mar viu isso, e fugiu; o Jordão tornou atrás", correta: true },
                            { numero: 2, texto: "Eles secaram para sempre", correta: false },
                            { numero: 3, texto: "Eles transbordaram", correta: false },
                            { numero: 4, texto: "Nada fizeram", correta: false }
                        ],
                        explicacao: "Salmos 114:3 - O mar viu isso, e fugiu; o Jordão tornou atrás.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        115: {
            titulo: "Só ao Senhor a Glória",
            texto: ` ¹ Não a nós, Senhor, não a nós, mas ao teu nome dá glória, por amor da tua benignidade e da tua verdade.
² Por que dirão os gentios: Onde está o seu Deus?
³ Mas o nosso Deus está nos céus; fez tudo o que lhe agradou.
⁴ Os ídolos deles são prata e ouro, obra das mãos dos homens.
⁵ Têm boca, mas não falam; olhos têm, mas não veem.
⁶ Têm ouvidos, mas não ouvem; narizes têm, mas não cheiram.
⁷ Têm mãos, mas não apalpam; pés têm, mas não andam; nem som algum sai da sua garganta.
⁸ A eles se tornem semelhantes os que os fazem, assim como todos os que neles confiam.
⁹ Israel, confia no Senhor; ele é o seu auxílio e o seu escudo.
¹⁰ Casa de Arão, confia no Senhor; ele é o seu auxílio e o seu escudo.
¹¹ Vós, os que temeis ao Senhor, confiai no Senhor; ele é o seu auxílio e o seu escudo.
¹² O Senhor se lembrou de nós; ele nos abençoará; abençoará a casa de Israel; abençoará a casa de Arão.
¹³ Abençoará os que temem ao Senhor, tanto pequenos como grandes.
¹⁴ O Senhor vos aumentará cada vez mais, a vós e a vossos filhos.
¹⁵ Sois benditos do Senhor, que fez os céus e a terra.
¹⁶ Os céus são os céus do Senhor; mas a terra a deu aos filhos dos homens.
¹⁷ Os mortos não louvam ao Senhor, nem os que descem ao silêncio.
¹⁸ Mas nós bendiremos ao Senhor, desde agora e para sempre. Louvai ao Senhor.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como são descritos os ídolos das nações e aqueles que os fazem?",
                        opcoes: [
                            { numero: 1, texto: "São prata e ouro... tornam-se semelhantes a eles todos os que os fazem", correta: true },
                            { numero: 2, texto: "São poderosos e vivos", correta: false },
                            { numero: 3, texto: "São invisíveis", correta: false },
                            { numero: 4, texto: "São amigos dos homens", correta: false }
                        ],
                        explicacao: "Salmos 115:4, 8 - Os ídolos deles são prata e ouro... Tornem-se semelhantes a eles os que os fazem...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/salmos.js (Continuação: Salmos 116-119 Parte A)

        116: {
            titulo: "Gratidão pelo Livramento",
            texto: ` ¹ Amo ao Senhor, porque ele ouviu a minha voz e a minha súplica.
² Porque inclinou a mim os seus ouvidos; portanto, o invocarei enquanto viver.
³ Os cordéis da morte me cercaram, e angústias do inferno se apoderaram de mim; encontrei aperto e tristeza.
⁴ Então invoquei o nome do Senhor, dizendo: Ó Senhor, livra a minha alma.
⁵ Piedoso é o Senhor e justo; o nosso Deus tem misericórdia.
⁶ O Senhor guarda aos símplices; fui abatido, mas ele me livrou.
⁷ Volta, minha alma, para o teu repouso, pois o Senhor te fez bem.
⁸ Porque tu livraste a minha alma da morte, os meus olhos das lágrimas, e os meus pés da queda.
⁹ Andarei perante a face do Senhor na terra dos viventes.
¹⁰ Cri, por isso falei. Estive muito aflito.
¹¹ Dizia na minha pressa: Todos os homens são mentirosos.
¹² Que darei eu ao Senhor, por todos os benefícios que me tem feito?
¹³ Tomarei o cálice da salvação, e invocarei o nome do Senhor.
¹⁴ Pagarei os meus votos ao Senhor, agora, na presença de todo o seu povo.
¹⁵ Preciosa é à vista do Senhor a morte dos seus santos.
¹⁶ Ó Senhor, deveras sou teu servo; sou teu servo, filho da tua serva; soltaste as minhas ataduras.
¹⁷ Oferecer-te-ei sacrifícios de louvor, e invocarei o nome do Senhor.
¹⁸ Pagarei os meus votos ao Senhor, na presença de todo o seu povo,
¹⁹ Nos átrios da casa do Senhor, no meio de ti, ó Jerusalém. Louvai ao Senhor.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista diz que oferecerá ao Senhor por todos os benefícios recebidos?",
                        opcoes: [
                            { numero: 1, texto: "Tomarei o cálice da salvação, e invocarei o nome do Senhor", correta: true },
                            { numero: 2, texto: "Darei metade dos meus bens", correta: false },
                            { numero: 3, texto: "Construirei um novo altar de pedra", correta: false },
                            { numero: 4, texto: "Ficarei em silêncio por sete dias", correta: false }
                        ],
                        explicacao: "Salmos 116:13 - Tomarei o cálice da salvação, e invocarei o nome do Senhor.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        117: {
            titulo: "Louvem ao Senhor todas as Nações",
            texto: `¹ Louvai ao Senhor todas as nações, louvai-o todos os povos.
² Porque a sua benignidade é grande para conosco, e a verdade do Senhor dura para sempre. Louvai ao Senhor.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O Salmo 117 é o capítulo mais curto da Bíblia. Quantos versículos ele possui?",
                        opcoes: [
                            { numero: 1, texto: "5 versículos", correta: false },
                            { numero: 2, texto: "2 versículos", correta: true },
                            { numero: 3, texto: "1 versículo", correta: false },
                            { numero: 4, texto: "10 versículos", correta: false }
                        ],
                        explicacao: "O Salmo 117 possui apenas 2 versículos, convocando todas as nações a louvarem ao Senhor.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        118: {
            titulo: "A Pedra Angular",
            texto: ` ¹ Louvai ao Senhor, porque ele é bom, porque a sua benignidade dura para sempre.
² Diga agora Israel que a sua benignidade dura para sempre.
³ Diga agora a casa de Arão que a sua benignidade dura para sempre.
⁴ Digam agora os que temem ao Senhor que a sua benignidade dura para sempre.
⁵ Invoquei o Senhor na angústia; o Senhor me ouviu, e me tirou para um lugar largo.
⁶ O Senhor está comigo; não temerei o que me pode fazer o homem.
⁷ O Senhor está comigo entre aqueles que me ajudam; por isso verei cumprido o meu desejo sobre os que me odeiam.
⁸ É melhor confiar no Senhor do que confiar no homem.
⁹ É melhor confiar no Senhor do que confiar nos príncipes.
¹⁰ Todas as nações me cercaram, mas no nome do Senhor as despedaçarei.
¹¹ Cercaram-me, e tornaram a cercar-me; mas no nome do Senhor eu as despedaçarei.
¹² Cercaram-me como abelhas; porém apagaram-se como o fogo de espinhos; pois no nome do Senhor as despedaçarei.
¹³ Com força me impeliste para me fazeres cair, porém o Senhor me ajudou.
¹⁴ O Senhor é a minha força e o meu cântico; e se fez a minha salvação.
¹⁵ Nas tendas dos justos há voz de júbilo e de salvação; a destra do Senhor faz proezas.
¹⁶ A destra do Senhor se exalta; a destra do Senhor faz proezas.
¹⁷ Não morrerei, mas viverei; e contarei as obras do Senhor.
¹⁸ O Senhor me castigou muito, mas não me entregou à morte.
¹⁹ Abri-me as portas da justiça; entrarei por elas, e louvarei ao Senhor.
²⁰ Esta é a porta do Senhor, pela qual os justos entrarão.
²¹ Louvar-te-ei, pois me escutaste, e te fizeste a minha salvação.
²² A pedra que os edificadores rejeitaram tornou-se a cabeça da esquina.
²³ Da parte do Senhor se fez isto; maravilhoso é aos nossos olhos.
²⁴ Este é o dia que fez o Senhor; regozijemo-nos, e alegremo-nos nele.
²⁵ Salva-nos, agora, te pedimos, ó Senhor; ó Senhor, te pedimos, prospera-nos.
²⁶ Bendito aquele que vem em nome do Senhor; nós vos bendizemos desde a casa do Senhor.
²⁷ Deus é o Senhor que nos mostrou a luz; atai o sacrifício da festa com cordas, até às pontas do altar.
²⁸ Tu és o meu Deus, e eu te louvarei; tu és o meu Deus, e eu te exaltarei.
²⁹ Louvai ao Senhor, porque ele é bom; porque a sua benignidade dura para sempre.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que aconteceu com a pedra que os edificadores rejeitaram?",
                        opcoes: [
                            { numero: 1, texto: "Foi jogada no mar", correta: false },
                            { numero: 2, texto: "Tornou-se a cabeça da esquina (pedra angular)", correta: true },
                            { numero: 3, texto: "Foi quebrada em pedaços", correta: false },
                            { numero: 4, texto: "Foi escondida no deserto", correta: false }
                        ],
                        explicacao: "Salmos 118:22 - A pedra que os edificadores rejeitaram tornou-se a cabeça da esquina.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        119: {
            titulo: "A Excelência da Lei de Deus",
            texto: `¹ Bem-aventurados os retos em seus caminhos, que andam na lei do Senhor.
² Bem-aventurados os que guardam os seus testemunhos, e que o buscam com todo o coração.
³ E não praticam iniquidade, mas andam nos seus caminhos.
⁴ Tu ordenaste os teus mandamentos, para que diligentemente os observássemos.
⁵ Quem dera que os meus caminhos fossem dirigidos a observar os teus mandamentos.
⁶ Então não ficaria confundido, atentando eu para todos os teus mandamentos.
⁷ Louvar-te-ei com retidão de coração quando tiver aprendido os teus justos juízos.
⁸ Observarei os teus estatutos; não me desampares totalmente.
⁹ Com que purificará o jovem o seu caminho? Observando-o conforme a tua palavra.
¹⁰ Com todo o meu coração te busquei; não me deixes desviar dos teus mandamentos.
¹¹ Escondi a tua palavra no meu coração, para eu não pecar contra ti.
¹² Bendito és tu, ó Senhor; ensina-me os teus estatutos.
¹³ Com os meus lábios declarei todos os juízos da tua boca.
¹⁴ Folguei tanto no caminho dos teus testemunhos, como em todas as riquezas.
¹⁵ Meditarei nos teus preceitos, e terei respeito aos teus caminhos.
¹⁶ Recrear-me-ei nos teus estatutos; não me esquecerei da tua palavra.
¹⁷ Faze bem ao teu servo, para que viva e observe a tua palavra.
¹⁸ Abre tu os meus olhos, para que veja as maravilhas da tua lei.
¹⁹ Sou peregrino na terra; não escondas de mim os teus mandamentos.
²⁰ A minha alma está quebrantada de desejar os teus juízos em todo o tempo.
²¹ Tu repreendeste asperamente os soberbos que são amaldiçoados, que se desviam dos teus mandamentos.
²² Tira de sobre mim o opróbrio e o desprezo, pois guardei os teus testemunhos.
²³ Príncipes também se assentaram, e falaram contra mim, mas o teu servo meditou nos teus estatutos.
²⁴ Também os teus testemunhos são o meu prazer e os meus conselheiros.
²⁵ A minha alma está pegada ao pó; vivifica-me segundo a tua palavra.
²⁶ Eu te contei os meus caminhos, e tu me ouviste; ensina-me os teus estatutos.
²⁷ Faze-me entender o caminho dos teus preceitos; assim falarei das tuas maravilhas.
²⁸ A minha alma consome-se de tristeza; fortalece-me segundo a tua palavra.
²⁹ Desvia de mim o caminho da falsidade, e concede-me piedosamente a tua lei.
³⁰ Escolhi o caminho da verdade; propus-me seguir os teus juízos.
³¹ Apego-me aos teus testemunhos; ó Senhor, não me confundas.
³² Correrei pelo caminho dos teus mandamentos, quando dilatares o meu coração.
³³ Ensina-me, ó Senhor, o caminho dos teus estatutos, e guardá-lo-ei até o fim.
³⁴ Dá-me entendimento, e guardarei a tua lei, e observá-la-ei de todo o meu coração.
³⁵ Faze-me andar na vereda dos teus mandamentos, porque nela tenho prazer.
³⁶ Inclina o meu coração aos teus testemunhos, e não à cobiça.
³⁷ Desvia os meus olhos de contemplarem a vaidade, e vivifica-me no teu caminho.
³⁸ Confirma a tua palavra ao teu servo, que é dedicado ao teu temor.
³⁹ Desvia de mim o opróbrio que temo, pois os teus juízos são bons.
⁴⁰ Eis que tenho desejado os teus preceitos; vivifica-me na tua justiça.
⁴¹ Venham sobre mim também as tuas misericórdias, ó Senhor, e a tua salvação segundo a tua palavra.
⁴² Assim terei o que responder ao que me afronta, pois confio na tua palavra.
⁴³ E não tires totalmente a palavra de verdade da minha boca, pois tenho esperado nos teus juízos.
⁴⁴ Assim observarei de contínuo a tua lei para sempre e eternamente.
⁴⁵ E andarei em liberdade; pois busco os teus preceitos.
⁴⁶ Também falarei dos teus testemunhos perante os reis, e não me envergonharei.
⁴⁷ E recrear-me-ei em teus mandamentos, que tenho amado.
⁴⁸ Também levantarei as minhas mãos para os teus mandamentos, que amei, e meditarei nos teus estatutos.
⁴⁹ Lembra-te da palavra dada ao teu servo, na qual me fizeste esperar.
⁵⁰ Isto é a minha consolação na minha aflição, porque a tua palavra me vivificou.
⁵¹ Os soberbos zombaram grandemente de mim; contudo não me desviei da tua lei.
⁵² Lembrei-me dos teus juízos antiquíssimos, ó Senhor, e assim me consolei.
⁵³ Grande indignação se apoderou de mim por causa dos ímpios que abandonam a tua lei.
⁵⁴ Os teus estatutos têm sido os meus cânticos na casa da minha peregrinação.
⁵⁵ Lembrei-me do teu nome, ó Senhor, de noite, e observei a tua lei.
⁵⁶ Isto fiz eu, porque guardei os teus mandamentos.
⁵⁷ O Senhor é a minha porção; eu disse que observaria as tuas palavras.
⁵⁸ Roguei deveras o teu favor com todo o meu coração; tem piedade de mim, segundo a tua palavra.
⁵⁹ Considerei os meus caminhos, e voltei os meus pés para os teus testemunhos.
⁶⁰ Apressei-me, e não me detive, a observar os teus mandamentos.
⁶¹ Bandos de ímpios me despojaram, mas eu não me esqueci da tua lei.
⁶² À meia-noite me levantarei para te louvar, pelos teus justos juízos.
⁶³ Companheiro sou de todos os que te temem e dos que guardam os teus preceitos.
⁶⁴ A terra, ó Senhor, está cheia da tua benignidade; ensina-me os teus estatutos.
⁶⁵ Fizeste bem ao teu servo, Senhor, segundo a tua palavra.
⁶⁶ Ensina-me bom juízo e conhecimento, pois cri nos teus mandamentos.
⁶⁷ Antes de ser afligido andava errado; mas agora tenho guardado a tua palavra.
⁶⁸ Tu és bom e fazes bem; ensina-me os teus estatutos.
⁶⁹ Os soberbos forjaram mentiras contra mim; mas eu com todo o meu coração guardarei os teus preceitos.
⁷⁰ Engrossa-se-lhes o coração como gordura, mas eu me recreio na tua lei.
⁷¹ Foi-me bom ter sido afligido, para que aprendesse os teus estatutos.
⁷² Melhor é para mim a lei da tua boca do que milhares de ouro ou prata.
⁷³ As tuas mãos me fizeram e me formaram; dá-me inteligência para entender os teus mandamentos.
⁷⁴ Os que te temem alegraram-se quando me viram, porque tenho esperado na tua palavra.
⁷⁵ Bem sei eu, ó Senhor, que os teus juízos são justos, e que segundo a tua fidelidade me afligiste.
⁷⁶ Sirva pois a tua benignidade para me consolar, segundo a palavra que deste ao teu servo.
⁷⁷ Venham sobre mim as tuas misericórdias, para que viva, pois a tua lei é a minha delícia.
⁷⁸ Confundam-se os soberbos, pois me trataram de uma maneira perversa, sem causa; mas eu meditarei nos teus preceitos.
⁷⁹ Voltem-se para mim os que te temem, e aqueles que têm conhecido os teus testemunhos.
⁸⁰ Seja reto o meu coração nos teus estatutos, para que não seja confundido.
⁸¹ Desfalece a minha alma pela tua salvação, mas espero na tua palavra.
⁸² Os meus olhos desfalecem pela tua palavra; entrementes dizia: Quando me consolarás tu?
⁸³ Pois estou como odre na fumaça; contudo não me esqueço dos teus estatutos.
⁸⁴ Quantos serão os dias do teu servo? Quando me farás justiça contra os que me perseguem?
⁸⁵ Os soberbos me cavaram covas, o que não é conforme a tua lei.
⁸⁶ Todos os teus mandamentos são verdade. Com mentiras me perseguem; ajuda-me.
⁸⁷ Quase que me têm consumido sobre a terra, mas eu não deixei os teus preceitos.
⁸⁸ Vivifica-me segundo a tua benignidade; assim guardarei o testemunho da tua boca.
⁸⁹ Para sempre, ó Senhor, a tua palavra permanece no céu.
⁹⁰ A tua fidelidade dura de geração em geração; tu firmaste a terra, e ela permanece firme.
⁹¹ Eles continuam até ao dia de hoje, segundo as tuas ordenações; porque todos são teus servos.
⁹² Se a tua lei não fora toda a minha recreação, há muito que pereceria na minha aflição.
⁹³ Nunca me esquecerei dos teus preceitos; pois por eles me tens vivificado.
⁹⁴ Sou teu, salva-me; pois tenho buscado os teus preceitos.
⁹⁵ Os ímpios me esperam para me destruírem, mas eu considerarei os teus testemunhos.
⁹⁶ Tenho visto fim a toda a perfeição, mas o teu mandamento é amplíssimo.
⁹⁷ Oh! Quanto amo a tua lei! É a minha meditação em todo o dia.
⁹⁸ Tu, pelos teus mandamentos, me fazes mais sábio do que os meus inimigos; pois estão sempre comigo.
⁹⁹ Tenho mais entendimento do que todos os meus mestres, porque os teus testemunhos são a minha meditação.
¹⁰⁰ Entendo mais do que os antigos; porque guardo os teus preceitos.
¹⁰¹ Desviei os meus pés de todo caminho mau, para guardar a tua palavra.
¹⁰² Não me apartei dos teus juízos, pois tu me ensinaste.
¹⁰³ Oh! Quão doces são as tuas palavras ao meu paladar, mais doces do que o mel à minha boca.
¹⁰⁴ Pelos teus mandamentos alcancei entendimento; por isso odeio todo falso caminho.
¹⁰⁵ Lâmpada para os meus pés é tua palavra, e luz para o meu caminho.
¹⁰⁶ Jurei, e o cumprirei, que guardarei os teus justos juízos.
¹⁰⁷ Estou aflitíssimo; vivifica-me, ó Senhor, segundo a tua palavra.
¹⁰⁸ Aceita, eu te rogo, as oferendas voluntárias da minha boca, ó Senhor; ensina-me os teus juízos.
¹⁰⁹ A minha alma está de contínuo nas minhas mãos; todavia não me esqueço da tua lei.
¹¹⁰ Os ímpios me armaram laço; contudo não me desviei dos teus preceitos.
¹¹¹ Os teus testemunhos tenho eu tomado por herança para sempre, pois são o gozo do meu coração.
¹¹² Inclinei o meu coração a guardar os teus estatutos, para sempre, até ao fim.
¹¹³ Odeio os pensamentos vãos, mas amo a tua lei.
¹¹⁴ Tu és o meu refúgio e o meu escudo; espero na tua palavra.
¹¹⁵ Apartai-vos de mim, malfeitores, pois guardarei os mandamentos do meu Deus.
¹¹⁶ Sustenta-me conforme a tua palavra, para que viva, e não me deixes envergonhado da minha esperança.
¹¹⁷ Sustenta-me, e serei salvo, e de contínuo terei respeito aos teus estatutos.
¹¹⁸ Tu tens pisado aos pés todos os que se desviam dos teus estatutos, pois o engano deles é falsidade.
¹¹⁹ Tu tiraste da terra todos os ímpios, como a escória, por isso amo os teus testemunhos.
¹²⁰ O meu corpo se arrepiou com temor de ti, e temi os teus juízos.
¹²¹ Fiz juízo e justiça; não me entregues aos meus opressores.
¹²² Fica por fiador do teu servo para o bem; não deixes que os soberbos me oprimam.
¹²³ Os meus olhos desfaleceram pela tua salvação e pela promessa da tua justiça.
¹²⁴ Usa com o teu servo segundo a tua benignidade, e ensina-me os teus estatutos.
¹²⁵ Sou teu servo; dá-me inteligência, para entender os teus testemunhos.
¹²⁶ Já é tempo de operares, ó Senhor, pois eles têm quebrantado a tua lei.
¹²⁷ Por isso amo os teus mandamentos mais do que o ouro, e ainda mais do que o ouro fino.
¹²⁸ Por isso estimo todos os teus preceitos acerca de tudo, como retos, e odeio toda falsa vereda.
¹²⁹ Maravilhosos são os teus testemunhos; portanto, a minha alma os guarda.
¹³⁰ A entrada das tuas palavras dá luz, dá entendimento aos símplices.
¹³¹ Abri a minha boca, e respirei, pois que desejei os teus mandamentos.
¹³² Olha para mim, e tem piedade de mim, conforme usas com os que amam o teu nome.
¹³³ Ordena os meus passos na tua palavra, e não se apodere de mim iniquidade alguma.
¹³⁴ Livra-me da opressão do homem; assim guardarei os teus preceitos.
¹³⁵ Faze resplandecer o teu rosto sobre o teu servo, e ensina-me os teus estatutos.
¹³⁶ Rios de águas correm dos meus olhos, porque não guardam a tua lei.
¹³⁷ Justo és, ó Senhor, e retos são os teus juízos.
¹³⁸ Os teus testemunhos que ordenaste são retos e muito fiéis.
¹³⁹ O meu zelo me consumiu, porque os meus inimigos se esqueceram da tua palavra.
¹⁴⁰ A tua palavra é muito pura; portanto, o teu servo a ama.
¹⁴¹ Pequeno sou e desprezado, porém não me esqueço dos teus mandamentos.
¹⁴² A tua justiça é uma justiça eterna, e a tua lei é a verdade.
¹⁴³ Aflição e angústia se apoderam de mim; contudo os teus mandamentos são o meu prazer.
¹⁴⁴ A justiça dos teus testemunhos é eterna; dá-me inteligência, e viverei.
¹⁴⁵ Clamei de todo o meu coração; escuta-me, Senhor, e guardarei os teus estatutos.
¹⁴⁶ A ti te invoquei; salva-me, e guardarei os teus testemunhos.
¹⁴⁷ Antecipei o cair da noite, e clamei; esperei na tua palavra.
¹⁴⁸ Os meus olhos anteciparam as vigílias da noite, para meditar na tua palavra.
¹⁴⁹ Ouve a minha voz, segundo a tua benignidade; vivifica-me, ó Senhor, segundo o teu juízo.
¹⁵⁰ Aproximam-se os que se dão a maus-tratos; afastam-se da tua lei.
¹⁵¹ Tu estás perto, ó Senhor, e todos os teus mandamentos são a verdade.
¹⁵² Acerca dos teus testemunhos soube, desde a antiguidade, que tu os fundaste para sempre.
¹⁵³ Olha para a minha aflição, e livra-me, pois não me esqueci da tua lei.
¹⁵⁴ Pleiteia a minha causa, e livra-me; vivifica-me segundo a tua palavra.
¹⁵⁵ A salvação está longe dos ímpios, pois não buscam os teus estatutos.
¹⁵⁶ Muitas são, ó Senhor, as tuas misericórdias; vivifica-me segundo os teus juízos.
¹⁵⁷ Muitos são os meus perseguidores e os meus inimigos; mas não me desvio dos teus testemunhos.
¹⁵⁸ Vi os transgressores, e me afligi, porque não observam a tua palavra.
¹⁵⁹ Considera como amo os teus preceitos; vivifica-me, ó Senhor, segundo a tua benignidade.
¹⁶⁰ A tua palavra é a verdade desde o princípio, e cada um dos juízos da tua justiça dura para sempre.
¹⁶¹ Príncipes me perseguiram sem causa, mas o meu coração temeu a tua palavra.
¹⁶² Folgo com a tua palavra, como aquele que acha um grande despojo.
¹⁶³ Abomino e odeio a mentira; mas amo a tua lei.
¹⁶⁴ Sete vezes no dia te louvo pelos juízos da tua justiça.
¹⁶⁵ Muita paz têm os que amam a tua lei, e para eles não há tropeço.
¹⁶⁶ Senhor, tenho esperado na tua salvação, e tenho cumprido os teus mandamentos.
¹⁶⁷ A minha alma tem observado os teus testemunhos; amo-os excessivamente.
¹⁶⁸ Tenho observado os teus preceitos, e os teus testemunhos, porque todos os meus caminhos estão diante de ti.
¹⁶⁹ Chegue a ti o meu clamor, ó Senhor; dá-me entendimento conforme a tua palavra.
¹⁷⁰ Chegue a minha súplica perante a tua face; livra-me segundo a tua palavra.
¹⁷¹ Os meus lábios proferiram o louvor, quando me ensinaste os teus estatutos.
¹⁷² A minha língua falará da tua palavra, pois todos os teus mandamentos são justiça.
¹⁷³ Venha a tua mão socorrer-me, pois escolhi os teus preceitos.
¹⁷⁴ Tenho desejado a tua salvação, ó Senhor; a tua lei é todo o meu prazer.
¹⁷⁵ Viva a minha alma, e louvar-te-á; ajudem-me os teus juízos.
¹⁷⁶ Desgarrei-me como a ovelha perdida; busca o teu servo, pois não me esqueci dos teus mandamentos.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Com que o jovem poderá purificar o seu caminho, segundo o Salmo 119?",
                        opcoes: [
                            { numero: 1, texto: "Observando-o conforme a tua palavra", correta: true },
                            { numero: 2, texto: "Através de sacrifícios diários", correta: false },
                            { numero: 3, texto: "Sendo mais forte que os outros", correta: false },
                            { numero: 4, texto: "Viajando para lugares santos", correta: false }
                        ],
                        explicacao: "Salmos 119:9 - Com que purificará o jovem o seu caminho? Observando-o conforme a tua palavra.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Onde o salmista diz ter escondido a palavra de Deus para não pecar?",
                        opcoes: [
                            { numero: 1, texto: "Em um livro de ouro", correta: false },
                            { numero: 2, texto: "No seu coração", correta: true },
                            { numero: 3, texto: "Na porta da sua casa", correta: false },
                            { numero: 4, texto: "Nas palmas das suas mãos", correta: false }
                        ],
                        explicacao: "Salmos 119:11 - Escondi a tua palavra no meu coração, para eu não pecar contra ti.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que a palavra de Deus é para os pés e para o caminho do salmista?",
                        opcoes: [
                            { numero: 1, texto: "Um calçado de ferro e um mapa", correta: false },
                            { numero: 2, texto: "Lâmpada para os pés e luz para o caminho", correta: true },
                            { numero: 3, texto: "Uma rede de proteção e um cajado", correta: false },
                            { numero: 4, texto: "Água fresca e sombra", correta: false }
                        ],
                        explicacao: "Salmos 119:105 - Lâmpada para os meus pés é tua palavra, e luz para o meu caminho.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },// js/livros/salmos.js (Continuação: Salmos 120-134)

        120: {
            titulo: "Oração contra a Língua Mentirosa",
            texto: ` ¹ Na minha angústia clamei ao Senhor, e me ouviu.
² Senhor, livra a minha alma dos lábios mentirosos e da língua enganadora.
³ Que te será dado, ou que te será acrescentado, língua enganadora?
⁴ Flechas agudas do poderoso, com brasas vivas de zimbro.
⁵ Ai de mim, que peregrino em Meseque, e habito nas tendas de Quedar.
⁶ A minha alma bastante tempo habitou com os que detestam a paz.
⁷ Pacífico sou, mas quando eu falo já eles procuram a guerra.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Na sua angústia, o que o salmista pediu que o Senhor livrasse da sua alma?",
                        opcoes: [
                            { numero: 1, texto: "Dos lábios mentirosos e da língua enganadora", correta: true },
                            { numero: 2, texto: "Das dívidas e da fome", correta: false },
                            { numero: 3, texto: "Do sol forte do deserto", correta: false },
                            { numero: 4, texto: "Das feras do campo", correta: false }
                        ],
                        explicacao: "Salmos 120:2 - Senhor, livra a minha alma dos lábios mentirosos e da língua enganadora.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        121: {
            titulo: "O Guarda de Israel",
            texto: `¹ Levantarei os meus olhos para os montes, de onde vem o meu socorro.
² O meu socorro vem do Senhor que fez o céu e a terra.
³ Não deixará vacilar o teu pé; aquele que te guarda não tosquenejará.
⁴ Eis que não tosquenejará nem dormirá o guarda de Israel.
⁵ O Senhor é quem te guarda; o Senhor é a tua sombra à tua direita.
⁶ O sol não te molestará de dia nem a lua de noite.
⁷ O Senhor te guardará de todo o mal; guardará a tua alma.
⁸ O Senhor guardará a tua entrada e a tua saída, desde agora e para sempre.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "De onde o salmista diz que vem o seu socorro ao olhar para os montes?",
                        opcoes: [
                            { numero: 1, texto: "Vem dos montes elevados", correta: false },
                            { numero: 2, texto: "O meu socorro vem do Senhor, que fez o céu e a terra", correta: true },
                            { numero: 3, texto: "Vem das cidades vizinhas", correta: false },
                            { numero: 4, texto: "Vem da força dos seus braços", correta: false }
                        ],
                        explicacao: "Salmos 121:2 - O meu socorro vem do Senhor, que fez o céu e a terra.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        122: {
            titulo: "Alegria de Ir à Casa do Senhor",
            texto: ` ¹ Alegrei-me quando me disseram: Vamos à casa do Senhor.
² Os nossos pés estão dentro das tuas portas, ó Jerusalém.
³ Jerusalém está edificada como uma cidade que é compacta.
⁴ Onde sobem as tribos, as tribos do Senhor, até ao testemunho de Israel, para darem graças ao nome do Senhor.
⁵ Pois ali estão os tronos do juízo, os tronos da casa de Davi.
⁶ Orai pela paz de Jerusalém; prosperarão aqueles que te amam.
⁷ Haja paz dentro de teus muros, e prosperidade dentro dos teus palácios.
⁸ Por causa dos meus irmãos e amigos, direi: Paz esteja em ti.
⁹ Por causa da casa do Senhor nosso Deus, buscarei o teu bem.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual foi a reação do salmista quando lhe disseram: 'Vamos à casa do Senhor'?",
                        opcoes: [
                            { numero: 1, texto: "Alegrei-me", correta: true },
                            { numero: 2, texto: "Fiquei preocupado", correta: false },
                            { numero: 3, texto: "Tive medo", correta: false },
                            { numero: 4, texto: "Não dei atenção", correta: false }
                        ],
                        explicacao: "Salmos 122:1 - Alegrei-me quando me disseram: Vamos à casa do Senhor.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/salmos.js (Recuperação: Salmo 123)

        123: {
            titulo: "Olhando para os Céus",
            texto: `¹ A ti levanto os meus olhos, ó tu que habitas nos céus.
² Assim como os olhos dos servos atentam para as mãos dos seus senhores, e os olhos da serva para as mãos de sua senhora, assim os nossos olhos atentam para o Senhor nosso Deus, até que tenha piedade de nós.
³ Tem piedade de nós, ó Senhor, tem piedade de nós, pois estamos sobremodo fartos de desprezo.
⁴ A nossa alma está extremamente farta da zombaria daqueles que estão à sua vontade e do desprezo dos soberbos.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "A que o salmista compara os nossos olhos voltados para o Senhor, aguardando misericórdia?",
                        opcoes: [
                            { numero: 1, texto: "Como os olhos dos servos postos nas mãos dos seus senhores", correta: true },
                            { numero: 2, texto: "Como os olhos de uma águia na tempestade", correta: false },
                            { numero: 3, texto: "Como os olhos de um vigia na torre", correta: false },
                            { numero: 4, texto: "Como os olhos de uma criança que dorme", correta: false }
                        ],
                        explicacao: "Salmos 123:2 - Assim como os olhos dos servos atentam para as mãos dos seus senhores... assim os nossos olhos atentam para o Senhor nosso Deus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        124: {
            titulo: "O Livramento do Senhor",
            texto: `Se não fora o Senhor, que esteve ao nosso lado, ora diga Israel;
² Se não fora o Senhor, que esteve ao nosso lado, quando os homens se levantaram contra nós,
³ Eles então nos teriam engolido vivos, quando a sua ira se acendeu contra nós.
⁴ Então as águas teriam transbordado sobre nós, e a corrente teria passado sobre a nossa alma;
⁵ Então as águas altivas teriam passado sobre a nossa alma;
⁶ Bendito seja o Senhor, que não nos deu por presa aos seus dentes.
⁷ A nossa alma escapou, como um pássaro do laço dos passarinheiros; o laço quebrou-se, e nós escapamos.
⁸ O nosso socorro está no nome do Senhor, que fez o céu e a terra.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "A que o salmista compara a alma que escapou do laço dos passarinheiros?",
                        opcoes: [
                            { numero: 1, texto: "A um leão valente", correta: false },
                            { numero: 2, texto: "Como um pássaro", correta: true },
                            { numero: 3, texto: "A uma gazela", correta: false },
                            { numero: 4, texto: "A um peixe", correta: false }
                        ],
                        explicacao: "Salmos 124:7 - A nossa alma escapou, como um pássaro do laço dos passarinheiros; o laço quebrou-se, e nós escapamos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        125: {
            titulo: "Firmes como o Monte Sião",
            texto: `¹ Os que confiam no Senhor serão como o monte de Sião, que não se abala, mas permanece para sempre.
² Assim como estão os montes à roda de Jerusalém, assim o Senhor está em volta do seu povo desde agora e para sempre.
³ Porque o cetro da impiedade não permanecerá sobre a sorte dos justos, para que o justo não estenda as suas mãos para a iniquidade.
⁴ Faze bem, ó Senhor, aos bons e aos que são retos de coração.
⁵ Quanto àqueles que se desviam para os seus caminhos tortuosos, levá-los-á o Senhor com os que praticam a maldade; paz haverá sobre Israel.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "A que são comparados aqueles que confiam no Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Ao monte Sião, que não se abala, mas permanece para sempre", correta: true },
                            { numero: 2, texto: "À areia que o vento sopra", correta: false },
                            { numero: 3, texto: "Às águas do mar", correta: false },
                            { numero: 4, texto: "A uma tenda passageira", correta: false }
                        ],
                        explicacao: "Salmos 125:1 - Os que confiam no Senhor serão como o monte Sião, que não se abala, mas permanece para sempre.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        126: {
            titulo: "O Retorno do Cativeiro",
            texto: ` ¹ Quando o Senhor trouxe do cativeiro os que voltaram a Sião, estávamos como os que sonham.
² Então a nossa boca se encheu de riso e a nossa língua de cântico; então se dizia entre os gentios: Grandes coisas fez o Senhor a estes.
³ Grandes coisas fez o Senhor por nós, pelas quais estamos alegres.
⁴ Traze-nos outra vez, ó Senhor, do cativeiro, como as correntes das águas no sul.
⁵ Os que semeiam em lágrimas segarão com alegria.
⁶ Aquele que leva a preciosa semente, andando e chorando, voltará, sem dúvida, com alegria, trazendo consigo os seus molhos.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que acontecerá com aqueles que semeiam com lágrimas?",
                        opcoes: [
                            { numero: 1, texto: "Ficarão tristes para sempre", correta: false },
                            { numero: 2, texto: "Com júbilo ceifarão", correta: true },
                            { numero: 3, texto: "Perderão a colheita", correta: false },
                            { numero: 4, texto: "Terão de semear novamente", correta: false }
                        ],
                        explicacao: "Salmos 126:5 - Os que semeiam em lágrimas segarão (ceifarão) com alegria.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        127: {
            titulo: "O Valor do Trabalho e da Família",
            texto: ` ¹ Se o Senhor não edificar a casa, em vão trabalham os que a edificam; se o Senhor não guardar a cidade, em vão vigia a sentinela.
² Inútil vos será levantar de madrugada, repousar tarde, comer o pão de dores, pois assim dá ele aos seus amados o sono.
³ Eis que os filhos são herança do Senhor, e o fruto do ventre o seu galardão.
⁴ Como flechas na mão de um homem poderoso, assim são os filhos da mocidade.
⁵ Bem-aventurado o homem que enche deles a sua aljava; não serão confundidos, mas falarão com os seus inimigos à porta.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Se o Senhor não edificar a casa, o que acontece com os que a edificam?",
                        opcoes: [
                            { numero: 1, texto: "Trabalham em vão", correta: true },
                            { numero: 2, texto: "Ficam ricos rapidamente", correta: false },
                            { numero: 3, texto: "Recebem ajuda dos anjos", correta: false },
                            { numero: 4, texto: "A casa dura para sempre", correta: false }
                        ],
                        explicacao: "Salmos 127:1 - Se o Senhor não edificar a casa, em vão trabalham os que a edificam...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        128: {
            titulo: "A Bênção do Lar",
            texto: `¹ Bem-aventurado aquele que teme ao Senhor e anda nos seus caminhos.
² Pois comerás do trabalho das tuas mãos; feliz serás, e te irá bem.
³ A tua mulher será como a videira frutífera aos lados da tua casa; os teus filhos como plantas de oliveira à roda da tua mesa.
⁴ Eis que assim será abençoado o homem que teme ao Senhor.
⁵ O Senhor te abençoará desde Sião, e tu verás o bem de Jerusalém em todos os dias da tua vida.
⁶ E verás os filhos de teus filhos, e a paz sobre Israel.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "A que são comparados os filhos do homem que teme ao Senhor ao redor da sua mesa?",
                        opcoes: [
                            { numero: 1, texto: "Como plantas de oliveira", correta: true },
                            { numero: 2, texto: "Como espigas de trigo", correta: false },
                            { numero: 3, texto: "Como flechas de ferro", correta: false },
                            { numero: 4, texto: "Como ramos de videira", correta: false }
                        ],
                        explicacao: "Salmos 128:3 - ...teus filhos como plantas de oliveira à roda da tua mesa.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        129: {
            titulo: "A Aflição de Israel",
            texto: ` ¹ Muitas vezes me angustiaram desde a minha mocidade, diga agora Israel;
² Muitas vezes me angustiaram desde a minha mocidade; todavia não prevaleceram contra mim.
³ Os lavradores araram sobre as minhas costas; compridos fizeram os seus sulcos.
⁴ O Senhor é justo; cortou as cordas dos ímpios.
⁵ Sejam confundidos, e voltem para trás todos os que odeiam a Sião.
⁶ Sejam como a erva dos telhados que se seca antes que a arranquem.
⁷ Com a qual o segador não enche a sua mão, nem o que ata os feixes enche o seu braço.
⁸ Nem tampouco os que passam dizem: A bênção do Senhor seja sobre vós; nós vos abençoamos em nome do Senhor.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista diz sobre aqueles que afligiram Israel desde a sua mocidade?",
                        opcoes: [
                            { numero: 1, texto: "Eles venceram no final", correta: false },
                            { numero: 2, texto: "Todavia não prevaleceram contra mim", correta: true },
                            { numero: 3, texto: "Eles tornaram-se amigos", correta: false },
                            { numero: 4, texto: "Israel esqueceu a dor", correta: false }
                        ],
                        explicacao: "Salmos 129:2 - Muitas vezes me angustiaram desde a minha mocidade; todavia não prevaleceram contra mim.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        130: {
            titulo: "Das Profundezas",
            texto: `¹ Das profundezas a ti clamo, ó Senhor.
² Senhor, escuta a minha voz; sejam os teus ouvidos atentos à voz das minhas súplicas.
³ Se tu, Senhor, observares as iniquidades, Senhor, quem subsistirá?
⁴ Mas contigo está o perdão, para que sejas temido.
⁵ Aguardo ao Senhor; a minha alma o aguarda, e espero na sua palavra.
⁶ A minha alma anseia pelo Senhor, mais do que os guardas pela manhã, mais do que aqueles que guardam pela manhã.
⁷ Espere Israel no Senhor, porque no Senhor há misericórdia, e nele há abundante redenção.
⁸ E ele remirá a Israel de todas as suas iniquidades.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "De onde o salmista clama ao Senhor no início deste Salmo?",
                        opcoes: [
                            { numero: 1, texto: "Das profundezas", correta: true },
                            { numero: 2, texto: "Do alto do monte", correta: false },
                            { numero: 3, texto: "De dentro do templo", correta: false },
                            { numero: 4, texto: "Da sua cama", correta: false }
                        ],
                        explicacao: "Salmos 130:1 - Das profundezas a ti clamo, ó Senhor.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        131: {
            titulo: "Humildade e Confiança",
            texto: `¹ Senhor, o meu coração não se elevou nem os meus olhos se levantaram; não me exercito em grandes matérias, nem em coisas muito elevadas para mim.
² Certamente que me tenho portado e sossegado como uma criança desmamada de sua mãe; a minha alma está como uma criança desmamada.
³ Espere Israel no Senhor, desde agora e para sempre.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o salmista descreve a sua alma diante de Deus neste salmo de humildade?",
                        opcoes: [
                            { numero: 1, texto: "Como um soldado pronto para a guerra", correta: false },
                            { numero: 2, texto: "Como uma criança desmamada para com sua mãe", correta: true },
                            { numero: 3, texto: "Como um rei no seu trono", correta: false },
                            { numero: 4, texto: "Como um águia no céu", correta: false }
                        ],
                        explicacao: "Salmos 131:2 - Pelo contrário, fiz calar e sossegar a minha alma; como uma criança desmamada para com sua mãe...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        132: {
            titulo: "A Promessa a Davi",
            texto: ` ¹ Lembra-te, Senhor, de Davi, e de todas as suas aflições.
² Como jurou ao Senhor, e fez votos ao poderoso Deus de Jacó, dizendo:
³ Certamente que não entrarei na tenda de minha casa, nem subirei à minha cama,
⁴ Não darei sono aos meus olhos, nem repouso às minhas pálpebras,
⁵ Enquanto não achar lugar para o Senhor, uma morada para o poderoso Deus de Jacó.
⁶ Eis que ouvimos falar dela em Efrata, e a achamos no campo do bosque.
⁷ Entraremos nos seus tabernáculos; prostrar-nos-emos ante o escabelo de seus pés.
⁸ Levanta-te, Senhor, ao teu repouso, tu e a arca da tua força.
⁹ Vistam-se os teus sacerdotes de justiça, e alegrem-se os teus santos.
¹⁰ Por amor de Davi, teu servo, não faças virar o rosto do teu ungido.
¹¹ O Senhor jurou com verdade a Davi, e não se apartará dela: Do fruto do teu ventre porei sobre o teu trono.
¹² Se os teus filhos guardarem a minha aliança, e os meus testemunhos, que eu lhes hei de ensinar, também os seus filhos se assentarão perpetuamente no teu trono.
¹³ Porque o Senhor escolheu a Sião; desejou-a para a sua habitação, dizendo:
¹⁴ Este é o meu repouso para sempre; aqui habitarei, pois o desejei.
¹⁵ Abençoarei abundantemente o seu mantimento; fartarei de pão os seus necessitados.
¹⁶ Também vestirei os seus sacerdotes de salvação, e os seus santos saltarão de prazer.
¹⁷ Ali farei brotar a força de Davi; preparei uma lâmpada para o meu ungido.
¹⁸ Vestirei os seus inimigos de vergonha; mas sobre ele florescerá a sua coroa.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor jurou a Davi e não se arrependerá?",
                        opcoes: [
                            { numero: 1, texto: "Que ele teria muito ouro", correta: false },
                            { numero: 2, texto: "Do fruto do teu ventre porei sobre o teu trono", correta: true },
                            { numero: 3, texto: "Que ele nunca teria inimigos", correta: false },
                            { numero: 4, texto: "Que ele viveria para sempre na terra", correta: false }
                        ],
                        explicacao: "Salmos 132:11 - O Senhor jurou a Davi com verdade... Do fruto do teu ventre porei sobre o teu trono.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        133: {
            titulo: "A Excelência da União",
            texto: `¹ Oh! Quão bom e quão suave é que os irmãos vivam em união.
² É como o óleo precioso sobre a cabeça, que desce sobre a barba, a barba de Arão, e que desce à orla das suas vestes.
³ Como o orvalho de Hermom, e como o que desce sobre os montes de Sião, porque ali o Senhor ordena a bênção e a vida para sempre.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o salmista descreve a união entre os irmãos?",
                        opcoes: [
                            { numero: 1, texto: "É um dever difícil", correta: false },
                            { numero: 2, texto: "Quão bom e quão suave é que os irmãos vivam em união", correta: true },
                            { numero: 3, texto: "É algo impossível", correta: false },
                            { numero: 4, texto: "É apenas para os sacerdotes", correta: false }
                        ],
                        explicacao: "Salmos 133:1 - Oh! quão bom e quão suave é que os irmãos vivam em união!",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/salmos.js (Recuperação: Salmo 134)

        134: {
            titulo: "Louvem ao Senhor de Noite",
            texto: `¹ Eis aqui, bendizei ao Senhor todos vós, servos do Senhor, que assistis na casa do Senhor todas as noites.
² Levantai as vossas mãos no santuário, e bendizei ao Senhor.
³ O Senhor que fez o céu e a terra te abençoe desde Sião. `,
            get pergunta() {
                return sortear([
                    {
                        texto: "A quem o salmista convida para bendizer ao Senhor durante as noites na casa do Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Aos soldados do rei", correta: false },
                            { numero: 2, texto: "A todos vós, servos do Senhor", correta: true },
                            { numero: 3, texto: "Aos mercadores da cidade", correta: false },
                            { numero: 4, texto: "Aos estrangeiros que passam", correta: false }
                        ],
                        explicacao: "Salmos 134:1 - Eis aqui, bendizei ao Senhor todos vós, servos do Senhor, que assistis na casa do Senhor todas as noites.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },

        // js/livros/salmos.js (Continuação: Salmos 135-145)

        135: {
            titulo: "Louvem o Nome do Senhor",
            texto: ` ¹ Louvai ao Senhor. Louvai o nome do Senhor; louvai-o, servos do Senhor.
² Vós que assistis na casa do Senhor, nos átrios da casa do nosso Deus.
³ Louvai ao Senhor, porque o Senhor é bom; cantai louvores ao seu nome, porque é agradável.
⁴ Porque o Senhor escolheu para si a Jacó, e a Israel para seu próprio tesouro.
⁵ Porque eu conheço que o Senhor é grande e que o nosso Senhor está acima de todos os deuses.
⁶ Tudo o que o Senhor quis, fez, nos céus e na terra, nos mares e em todos os abismos.
⁷ Faz subir os vapores das extremidades da terra; faz os relâmpagos para a chuva; tira os ventos dos seus tesouros.
⁸ O que feriu os primogênitos do Egito, desde os homens até os animais;
⁹ O que enviou sinais e prodígios no meio de ti, ó Egito, contra Faraó e contra os seus servos;
¹⁰ O que feriu muitas nações, e matou poderosos reis:
¹¹ A Siom, rei dos amorreus, e a Ogue, rei de Basã, e a todos os reinos de Canaã;
¹² E deu a sua terra em herança, em herança a Israel, seu povo.
¹³ O teu nome, ó Senhor, dura perpetuamente, e a tua memória, ó Senhor, de geração em geração.
¹⁴ Pois o Senhor julgará o seu povo, e se arrependerá com respeito aos seus servos.
¹⁵ Os ídolos dos gentios são prata e ouro, obra das mãos dos homens.
¹⁶ Têm boca, mas não falam; têm olhos, e não veem,
¹⁷ Têm ouvidos, mas não ouvem, nem há respiro algum nas suas bocas.
¹⁸ Semelhantes a eles se tornem os que os fazem, e todos os que confiam neles.
¹⁹ Casa de Israel, bendizei ao Senhor; casa de Arão, bendizei ao Senhor;
²⁰ Casa de Levi, bendizei ao Senhor; vós os que temeis ao Senhor, bendizei ao Senhor.
²¹ Bendito seja o Senhor desde Sião, que habita em Jerusalém. Louvai ao Senhor.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista afirma sobre a grandeza do Senhor em relação a outros deuses?",
                        opcoes: [
                            { numero: 1, texto: "Que o Senhor é grande e está acima de todos os deuses", correta: true },
                            { numero: 2, texto: "Que todos os deuses são iguais", correta: false },
                            { numero: 3, texto: "Que os deuses das nações são mais fortes", correta: false },
                            { numero: 4, texto: "Que Deus não se importa com outros deuses", correta: false }
                        ],
                        explicacao: "Salmos 135:5 - Porque eu conheço que o Senhor é grande e que o nosso Senhor está acima de todos os deuses.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        136: {
            titulo: "A Misericórdia Eterna",
            texto: ` ¹ Louvai ao Senhor, porque ele é bom; porque a sua benignidade dura para sempre.
² Louvai ao Deus dos deuses; porque a sua benignidade dura para sempre.
³ Louvai ao Senhor dos senhores; porque a sua benignidade dura para sempre.
⁴ Aquele que só faz grandes maravilhas; porque a sua benignidade dura para sempre.
⁵ Aquele que por entendimento fez os céus; porque a sua benignidade dura para sempre.
⁶ Aquele que estendeu a terra sobre as águas; porque a sua benignidade dura para sempre.
⁷ Aquele que fez os grandes luminares; porque a sua benignidade dura para sempre;
⁸ O sol para governar de dia; porque a sua benignidade dura para sempre;
⁹ A lua e as estrelas para presidirem à noite; porque a sua benignidade dura para sempre;
¹⁰ O que feriu o Egito nos seus primogênitos; porque a sua benignidade dura para sempre;
¹¹ E tirou a Israel do meio deles; porque a sua benignidade dura para sempre;
¹² Com mão forte, e com braço estendido; porque a sua benignidade dura para sempre;
¹³ Aquele que dividiu o Mar Vermelho em duas partes; porque a sua benignidade dura para sempre;
¹⁴ E fez passar Israel pelo meio dele; porque a sua benignidade dura para sempre;
¹⁵ Mas derrubou a Faraó com o seu exército no Mar Vermelho; porque a sua benignidade dura para sempre.
¹⁶ Aquele que guiou o seu povo pelo deserto; porque a sua benignidade dura para sempre;
¹⁷ Aquele que feriu os grandes reis; porque a sua benignidade dura para sempre;
¹⁸ E matou reis famosos; porque a sua benignidade dura para sempre;
¹⁹ Siom, rei dos amorreus; porque a sua benignidade dura para sempre;
²⁰ E Ogue, rei de Basã; porque a sua benignidade dura para sempre;
²¹ E deu a terra deles em herança; porque a sua benignidade dura para sempre;
²² E mesmo em herança a Israel, seu servo; porque a sua benignidade dura para sempre;
²³ Que se lembrou da nossa baixeza; porque a sua benignidade dura para sempre;
²⁴ E nos remiu dos nossos inimigos; porque a sua benignidade dura para sempre;
²⁵ O que dá mantimento a toda a carne; porque a sua benignidade dura para sempre.
²⁶ Louvai ao Deus dos céus; porque a sua benignidade dura para sempre.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é a frase que se repete em todos os 26 versículos do Salmo 136?",
                        opcoes: [
                            { numero: 1, texto: "Santo é o Seu nome", correta: false },
                            { numero: 2, texto: "Porque a sua misericórdia dura para sempre", correta: true },
                            { numero: 3, texto: "Louvado seja o Rei", correta: false },
                            { numero: 4, texto: "Grande é o Senhor", correta: false }
                        ],
                        explicacao: "O Salmo 136 é um hino de ladainha onde cada verso termina confirmando: 'porque a sua misericórdia dura para sempre'.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        137: {
            titulo: "Lamento na Babilônia",
            texto: ` ¹ Junto aos rios da Babilônia, ali nos assentamos e choramos, quando nos lembramos de Sião.
² Sobre os salgueiros que há no meio dela, penduramos as nossas harpas.
³ Pois lá aqueles que nos levaram cativos nos pediam uma canção; e os que nos destruíram, que os alegrássemos, dizendo: Cantai-nos uma das canções de Sião.
⁴ Como cantaremos a canção do Senhor em terra estranha?
⁵ Se eu me esquecer de ti, ó Jerusalém, esqueça-se a minha direita da sua destreza.
⁶ Se me não lembrar de ti, apegue-se-me a língua ao meu paladar; se não preferir Jerusalém à minha maior alegria.
⁷ Lembra-te, Senhor, dos filhos de Edom no dia de Jerusalém, que diziam: Descobri-a, descobri-a até aos seus alicerces.
⁸ Ah! Filha de Babilônia, que vais ser assolada; feliz aquele que te retribuir o pago que tu nos pagaste a nós.
⁹ Feliz aquele que pegar em teus filhos e der com eles nas pedras.


`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde os israelitas se sentavam e choravam, lembrando-se de Sião?",
                        opcoes: [
                            { numero: 1, texto: "Nos desertos do Egito", correta: false },
                            { numero: 2, texto: "Junto aos rios da Babilônia", correta: true },
                            { numero: 3, texto: "Nas montanhas de Edom", correta: false },
                            { numero: 4, texto: "Nos portos de Tiro", correta: false }
                        ],
                        explicacao: "Salmos 137:1 - Junto aos rios da Babilônia, ali nos assentamos e choramos, recordando-nos de Sião.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        138: {
            titulo: "Louvor de todo o Coração",
            texto: ` ¹ Eu te louvarei, de todo o meu coração; na presença dos deuses a ti cantarei louvores.
² Inclinar-me-ei para o teu santo templo, e louvarei o teu nome pela tua benignidade, e pela tua verdade; pois engrandeceste a tua palavra acima de todo o teu nome.
³ No dia em que eu clamei, me escutaste; e alentaste com força a minha alma.
⁴ Todos os reis da terra te louvarão, ó Senhor, quando ouvirem as palavras da tua boca;
⁵ E cantarão os caminhos do Senhor; pois grande é a glória do Senhor.
⁶ Ainda que o Senhor é excelso, atenta todavia para o humilde; mas ao soberbo conhece-o de longe.
⁷ Andando eu no meio da angústia, tu me reviverás; estenderás a tua mão contra a ira dos meus inimigos, e a tua destra me salvará.
⁸ O Senhor aperfeiçoará o que me toca; a tua benignidade, ó Senhor, dura para sempre; não desampares as obras das tuas mãos.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Embora o Senhor seja excelso (alto), para quem Ele atenta (olha)?",
                        opcoes: [
                            { numero: 1, texto: "Apenas para os reis", correta: false },
                            { numero: 2, texto: "Para o humilde", correta: true },
                            { numero: 3, texto: "Para os anjos", correta: false },
                            { numero: 4, texto: "Para os ricos", correta: false }
                        ],
                        explicacao: "Salmos 138:6 - Ainda que o Senhor é excelso, atenta todavia para o humilde; mas ao soberbo conhece-o de longe.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        139: {
            titulo: "A Onisciência de Deus",
            texto: ` ¹ Senhor, tu me sondaste, e me conheces.
² Tu sabes o meu assentar e o meu levantar; de longe entendes o meu pensamento.
³ Cercas o meu andar, e o meu deitar; e conheces todos os meus caminhos.
⁴ Não havendo ainda palavra alguma na minha língua, eis que logo, ó Senhor, tudo conheces.
⁵ Tu me cercaste por detrás e por diante, e puseste sobre mim a tua mão.
⁶ Tal conhecimento é para mim maravilhosíssimo; tão alto que não o posso atingir.
⁷ Para onde me irei do teu Espírito, ou para onde fugirei da tua face?
⁸ Se subir ao céu, lá tu estás; se fizer no inferno a minha cama, eis que tu ali estás também.
⁹ Se tomar as asas da alva, se habitar nas extremidades do mar,
¹⁰ Até ali a tua mão me guiará e a tua destra me susterá.
¹¹ Se disser: Decerto que as trevas me encobrirão; então a noite será luz à roda de mim.
¹² Nem ainda as trevas me encobrem de ti; mas a noite resplandece como o dia; as trevas e a luz são para ti a mesma coisa;
¹³ Pois possuíste as minhas entranhas; cobriste-me no ventre de minha mãe.
¹⁴ Eu te louvarei, porque de um modo assombroso, e tão maravilhoso fui feito; maravilhosas são as tuas obras, e a minha alma o sabe muito bem.
¹⁵ Os meus ossos não te foram encobertos, quando no oculto fui feito, e entretecido nas profundezas da terra.
¹⁶ Os teus olhos viram o meu corpo ainda informe; e no teu livro todas estas coisas foram escritas; as quais em continuação foram formadas, quando nem ainda uma delas havia.
¹⁷ E quão preciosos me são, ó Deus, os teus pensamentos! Quão grandes são as somas deles!
¹⁸ Se as contasse, seriam em maior número do que a areia; quando acordo ainda estou contigo.
¹⁹ Ó Deus, tu matarás decerto o ímpio; apartai-vos portanto de mim, homens de sangue.
²⁰ Pois falam malvadamente contra ti; e os teus inimigos tomam o teu nome em vão.
²¹ Não odeio eu, ó Senhor, aqueles que te odeiam, e não me aflijo por causa dos que se levantam contra ti?
²² Odeio-os com ódio perfeito; tenho-os por inimigos.
²³ Sonda-me, ó Deus, e conhece o meu coração; prova-me, e conhece os meus pensamentos.
²⁴ E vê se há em mim algum caminho mau, e guia-me pelo caminho eterno.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde o salmista diz que Deus o viu quando ainda era uma substância informe (embrião)?",
                        opcoes: [
                            { numero: 1, texto: "Os teus olhos viram o meu corpo ainda informe", correta: true },
                            { numero: 2, texto: "Nas estrelas do céu", correta: false },
                            { numero: 3, texto: "No templo de Jerusalém", correta: false },
                            { numero: 4, texto: "Apenas depois do nascimento", correta: false }
                        ],
                        explicacao: "Salmos 139:16 - Os teus olhos viram o meu corpo ainda informe; e no teu livro todas estas coisas foram escritas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Para onde o salmista poderia fugir da presença ou do Espírito de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Para o fundo do mar", correta: false },
                            { numero: 2, texto: "Para o céu", correta: false },
                            { numero: 3, texto: "Para lugar nenhum; Ele está em todo lugar", correta: true },
                            { numero: 4, texto: "Para o deserto", correta: false }
                        ],
                        explicacao: "Salmos 139:7-8 - Para onde me irei do teu espírito, ou para onde fugirei da tua face? Se subir ao céu, lá tu estás; se fizer no inferno a minha cama, eis que tu ali estás também.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/salmos.js (Recuperação: Salmo 140)

        140: {
            titulo: "Oração por Livramento",
            texto: `¹ Livra-me, ó Senhor, do homem mau; guarda-me do homem violento,
² Que pensa o mal no coração; continuamente se ajuntam para a guerra.
³ Aguçaram as línguas como a serpente; o veneno das víboras está debaixo dos seus lábios. (Selá.)
⁴ Guarda-me, ó Senhor, das mãos do ímpio; guarda-me do homem violento; os quais se propuseram transtornar os meus passos.
⁵ Os soberbos armaram-me laços e cordas; estenderam a rede ao lado do caminho; armaram-me laços corrediços. (Selá.)
⁶ Eu disse ao Senhor: Tu és o meu Deus; ouve a voz das minhas súplicas, ó Senhor.
⁷ Ó Deus o Senhor, fortaleza da minha salvação, tu cobriste a minha cabeça no dia da batalha.
⁸ Não concedas, ó Senhor, ao ímpio os seus desejos; não promovas o seu mau propósito, para que não se exalte. (Selá.)
⁹ Quanto à cabeça dos que me cercam, cubra-os a maldade dos seus lábios.
¹⁰ Caiam sobre eles brasas vivas; sejam lançados no fogo, em covas profundas, para que se não tornem a levantar.
¹¹ Não terá firmeza na terra o homem de má língua; o mal perseguirá o homem violento até que seja desterrado.
¹² Sei que o Senhor sustentará a causa do oprimido, e o direito do necessitado.
¹³ Assim os justos louvarão o teu nome; os retos habitarão na tua presença.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o salmista descreve o veneno que os homens maus têm debaixo dos lábios?",
                        opcoes: [
                            { numero: 1, texto: "Veneno de serpentes", correta: false },
                            { numero: 2, texto: "Veneno de áspides", correta: true },
                            { numero: 3, texto: "Veneno de escorpiões", correta: false },
                            { numero: 4, texto: "Fogo ardente", correta: false }
                        ],
                        explicacao: "Salmos 140:3 - Aguçaram as línguas como a serpente; o veneno de áspides está debaixo dos seus lábios.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        141: {
            titulo: "Vigília sobre a Boca",
            texto: ` ¹ Senhor, a ti clamo, apressa-te a mim; inclina os teus ouvidos à minha voz, quando a ti clamar.
² Suba a minha oração perante a tua face como incenso, e as minhas mãos levantadas sejam como o sacrifício da tarde.
³ Põe, ó Senhor, uma guarda à minha boca; guarda a porta dos meus lábios.
⁴ Não inclines o meu coração a coisas más, a praticar obras más, com aqueles que praticam a iniquidade; e não coma das suas delícias.
⁵ Fira-me o justo, será isso uma benignidade; e repreenda-me, será um excelente óleo, que não me quebrará a cabeça; pois a minha oração também ainda continuará nas suas próprias calamidades.
⁶ Quando os seus juízes forem derrubados pelos lados da rocha, ouvirão as minhas palavras, pois são agradáveis.
⁷ Os nossos ossos são espalhados à boca da sepultura como se alguém fendera e partira lenha na terra.
⁸ Mas os meus olhos te contemplam, ó Deus o Senhor; em ti confio; não desnudes a minha alma.
⁹ Guarda-me dos laços que me armaram; e dos laços corrediços dos que praticam a iniquidade.
¹⁰ Caiam os ímpios nas suas próprias redes, até que eu tenha escapado inteiramente.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista pede que o Senhor ponha à sua boca?",
                        opcoes: [
                            { numero: 1, texto: "Uma guarda (sentinela)", correta: true },
                            { numero: 2, texto: "Mel e leite", correta: false },
                            { numero: 3, texto: "Um freio de ferro", correta: false },
                            { numero: 4, texto: "Palavras de ouro", correta: false }
                        ],
                        explicacao: "Salmos 141:3 - Põe, ó Senhor, uma guarda à minha boca; guarda a porta dos meus lábios.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        142: {
            titulo: "Oração na Caverna",
            texto: `¹ Com a minha voz clamei ao Senhor; com a minha voz supliquei ao Senhor.
² Derramei a minha queixa perante a sua face; expus-lhe a minha angústia.
³ Quando o meu espírito estava angustiado em mim, então conheceste a minha vereda. No caminho em que eu andava, esconderam-me um laço.
⁴ Olhei para a minha direita, e vi; mas não havia quem me conhecesse. Refúgio me faltou; ninguém cuidou da minha alma.
⁵ A ti, ó Senhor, clamei; eu disse: Tu és o meu refúgio, e a minha porção na terra dos viventes.
⁶ Atende ao meu clamor; porque estou muito abatido. Livra-me dos meus perseguidores; porque são mais fortes do que eu.
⁷ Tira a minha alma da prisão, para que louve o teu nome; os justos me rodearão, pois me fizeste bem.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quando o espírito do salmista estava desfalecendo, quem conhecia a sua vereda?",
                        opcoes: [
                            { numero: 1, texto: "O seu melhor amigo", correta: false },
                            { numero: 2, texto: "O Senhor", correta: true },
                            { numero: 3, texto: "Os seus perseguidores", correta: false },
                            { numero: 4, texto: "Ele mesmo", correta: false }
                        ],
                        explicacao: "Salmos 142:3 - Quando o meu espírito desfalecia em mim, então tu conhecias a minha vereda.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        143: {
            titulo: "Sede de Deus",
            texto: `¹ Ó Senhor, ouve a minha oração, inclina os ouvidos às minhas súplicas; escuta-me segundo a tua verdade, e segundo a tua justiça.
² E não entres em juízo com o teu servo, porque à tua vista não se achará justo nenhum vivente.
³ Pois o inimigo perseguiu a minha alma; atropelou-me até ao chão; fez-me habitar na escuridão, como aqueles que morreram há muito.
⁴ Pois que o meu espírito se angustia em mim; e o meu coração em mim está desolado.
⁵ Lembro-me dos dias antigos; considero todos os teus feitos; medito na obra das tuas mãos.
⁶ Estendo para ti as minhas mãos; a minha alma tem sede de ti, como terra sedenta. (Selá.)
⁷ Ouve-me depressa, ó Senhor; o meu espírito desmaia. Não escondas de mim a tua face, para que não seja semelhante aos que descem à cova.
⁸ Faze-me ouvir a tua benignidade pela manhã, pois em ti confio; faze-me saber o caminho que devo seguir, porque a ti levanto a minha alma.
⁹ Livra-me, ó Senhor, dos meus inimigos; fujo para ti, para me esconder.
¹⁰ Ensina-me a fazer a tua vontade, pois és o meu Deus. O teu Espírito é bom; guie-me por terra plana.
¹¹ Vivifica-me, ó Senhor, por amor do teu nome; por amor da tua justiça, tira a minha alma da angústia.
¹² E por tua misericórdia desarraiga os meus inimigos, e destrói a todos os que angustiam a minha alma; pois sou teu servo.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "A que o salmista compara a sua alma sedenta por Deus?",
                        opcoes: [
                            { numero: 1, texto: "Como terra sedenta", correta: true },
                            { numero: 2, texto: "Como um poço seco", correta: false },
                            { numero: 3, texto: "Como um viajante cansado", correta: false },
                            { numero: 4, texto: "Como um rio sem peixes", correta: false }
                        ],
                        explicacao: "Salmos 143:6 - Estendo para ti as minhas mãos; a minha alma tem sede de ti, como terra sedenta.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        144: {
            titulo: "O Socorro do Senhor",
            texto: ` ¹ Bendito seja o Senhor, minha rocha, que ensina as minhas mãos para a peleja e os meus dedos para a guerra;
² Benignidade minha e fortaleza minha; alto retiro meu e meu libertador és tu; escudo meu, em quem eu confio, e que me sujeita o meu povo.
³ Senhor, que é o homem, para que o conheças, e o filho do homem, para que o estimes?
⁴ O homem é semelhante à vaidade; os seus dias são como a sombra que passa.
⁵ Abaixa, ó Senhor, os teus céus, e desce; toca os montes, e fumegarão.
⁶ Vibra os teus raios e dissipa-os; envia as tuas flechas, e desbarata-os.
⁷ Estende as tuas mãos desde o alto; livra-me, e arrebata-me das muitas águas e das mãos dos filhos estranhos,
⁸ Cuja boca fala vaidade, e a sua mão direita é a destra de falsidade.
⁹ A ti, ó Deus, cantarei um cântico novo; com o saltério e instrumento de dez cordas te cantarei louvores;
¹⁰ A ti, que dás a salvação aos reis, e que livras a Davi, teu servo, da espada maligna.
¹¹ Livra-me, e tira-me das mãos dos filhos estranhos, cuja boca fala vaidade, e a sua mão direita é a destra de iniquidade,
¹² Para que nossos filhos sejam como plantas crescidas na sua mocidade; para que as nossas filhas sejam como pedras de esquina lavradas à moda de palácio;
¹³ Para que as nossas despensas se encham de todo provimento; para que os nossos rebanhos produzam a milhares e a dezenas de milhares nas nossas ruas.
¹⁴ Para que os nossos bois sejam fortes para o trabalho; para que não haja nem assaltos, nem saídas, nem gritos nas nossas ruas.
¹⁵ Bem-aventurado o povo ao qual assim acontece; bem-aventurado é o povo cujo Deus é o Senhor.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o salmista diz que é o homem para que Deus o conheça?",
                        opcoes: [
                            { numero: 1, texto: "É semelhante à vaidade; os seus dias são como a sombra que passa", correta: true },
                            { numero: 2, texto: "É o dono da criação", correta: false },
                            { numero: 3, texto: "É um ser imortal", correta: false },
                            { numero: 4, texto: "É uma rocha firme", correta: false }
                        ],
                        explicacao: "Salmos 144:4 - O homem é semelhante à vaidade; os seus dias são como a sombra que passa.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        145: {
            titulo: "A Bondade Universal de Deus",
            texto: `¹ Eu te exaltarei, ó Deus, rei meu, e bendirei o teu nome pelos séculos dos séculos e para sempre.
² Cada dia te bendirei, e louvarei o teu nome pelos séculos dos séculos e para sempre.
³ Grande é o Senhor, e muito digno de louvor, e a sua grandeza insondável.
⁴ Uma geração louvará as tuas obras à outra geração, e anunciarão as tuas proezas.
⁵ Falarei da magnificência gloriosa da tua majestade e das tuas obras maravilhosas.
⁶ E se falará da força dos teus feitos terríveis; e contarei a tua grandeza.
⁷ Proferirão abundantemente a memória da tua grande bondade, e cantarão a tua justiça.
⁸ Misericordioso e compassivo é o Senhor, tardio em irar-se e de grande misericórdia.
⁹ O Senhor é bom para todos, e as suas misericórdias são sobre todas as suas obras.
¹⁰ Todas as tuas obras te louvarão, ó Senhor, e os teus santos te bendirão.
¹¹ Falarão da glória do teu reino, e relatarão o teu poder,
¹² Para fazer saber aos filhos dos homens as tuas proezas e a glória da magnificência do teu reino.
¹³ O teu reino é um reino eterno; o teu domínio dura em todas as gerações.
¹⁴ O Senhor sustenta a todos os que caem, e levanta a todos os abatidos.
¹⁵ Os olhos de todos esperam em ti, e lhes dás o seu mantimento a seu tempo.
¹⁶ Abres a tua mão, e fartas os desejos de todos os viventes.
¹⁷ Justo é o Senhor em todos os seus caminhos, e santo em todas as suas obras.
¹⁸ Perto está o Senhor de todos os que o invocam, de todos os que o invocam em verdade.
¹⁹ Ele cumprirá o desejo dos que o temem; ouvirá o seu clamor, e os salvará.
²⁰ O Senhor guarda a todos os que o amam; mas todos os ímpios serão destruídos.
²¹ A minha boca falará o louvor do Senhor, e toda a carne louvará o seu santo nome pelos séculos dos séculos e para sempre.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Perto de quem o Senhor está, segundo este Salmo de louvor?",
                        opcoes: [
                            { numero: 1, texto: "Perto de todos os que o invocam em verdade", correta: true },
                            { numero: 2, texto: "Perto apenas dos que nunca erram", correta: false },
                            { numero: 3, texto: "Perto dos que moram no templo", correta: false },
                            { numero: 4, texto: "Distante de todos os homens", correta: false }
                        ],
                        explicacao: "Salmos 145:18 - Perto está o Senhor de todos os que o invocam, de todos os que o invocam em verdade.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        // js/livros/salmos.js (Finalização: Salmos 146-150)

        146: {
            titulo: "Deus, o Único Auxílio",
            texto: ` ¹ Louvai ao Senhor. Ó minha alma, louva ao Senhor.
² Louvarei ao Senhor durante a minha vida; cantarei louvores ao meu Deus enquanto eu for vivo.
³ Não confieis em príncipes, nem em filho de homem, em quem não há salvação.
⁴ Sai-lhe o espírito, volta para a terra; naquele mesmo dia perecem os seus pensamentos.
⁵ Bem-aventurado aquele que tem o Deus de Jacó por seu auxílio, e cuja esperança está posta no Senhor seu Deus.
⁶ O que fez os céus e a terra, o mar e tudo quanto há neles, e o que guarda a verdade para sempre;
⁷ O que faz justiça aos oprimidos, o que dá pão aos famintos. O Senhor solta os encarcerados.
⁸ O Senhor abre os olhos aos cegos; o Senhor levanta os abatidos; o Senhor ama os justos;
⁹ O Senhor guarda os estrangeiros; sustém o órfão e a viúva, mas transtorna o caminho dos ímpios.
¹⁰ O Senhor reinará eternamente; o teu Deus, ó Sião, de geração em geração. Louvai ao Senhor.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Segundo o Salmo 146, por que não devemos confiar em príncipes ou em filhos de homens?",
                        opcoes: [
                            { numero: 1, texto: "Porque eles são muito ocupados", correta: false },
                            { numero: 2, texto: "Porque neles não há salvação e seus pensamentos perecem", correta: true },
                            { numero: 3, texto: "Porque eles moram longe", correta: false },
                            { numero: 4, texto: "Porque eles pedem muito ouro", correta: false }
                        ],
                        explicacao: "Salmos 146:3-4 - Não confieis em príncipes, nem em filho de homem, em quem não há salvação... no mesmo dia perecem os seus pensamentos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        147: {
            titulo: "O Louvor é Agradável",
            texto: ` ¹ Louvai ao Senhor, porque é bom cantar louvores ao nosso Deus, porque é agradável; decoroso é o louvor.
² O Senhor edifica a Jerusalém, congrega os dispersos de Israel.
³ Sara os quebrantados de coração, e lhes ata as suas feridas.
⁴ Conta o número das estrelas, chama-as a todas pelos seus nomes.
⁵ Grande é o nosso Senhor, e de grande poder; o seu entendimento é infinito.
⁶ O Senhor eleva os humildes, e abate os ímpios até à terra.
⁷ Cantai ao Senhor em ação de graças; cantai louvores ao nosso Deus sobre a harpa.
⁸ Ele é o que cobre o céu de nuvens, o que prepara a chuva para a terra, e o que faz produzir erva sobre os montes;
⁹ O que dá aos animais o seu sustento, e aos filhos dos corvos, quando clamam.
¹⁰ Não se deleita na força do cavalo, nem se compraz nas pernas do homem.
¹¹ O Senhor se agrada dos que o temem e dos que esperam na sua misericórdia.
¹² Louva, ó Jerusalém, ao Senhor; louva, ó Sião, ao teu Deus.
¹³ Porque fortaleceu os ferrolhos das tuas portas; abençoa aos teus filhos dentro de ti.
¹⁴ Ele é o que põe em paz os teus termos, e da flor da farinha te farta.
¹⁵ O que envia o seu mandamento à terra; a sua palavra corre velozmente.
¹⁶ O que dá a neve como lã; espalha a geada como cinza;
¹⁷ O que lança o seu gelo em pedaços; quem pode resistir ao seu frio?
¹⁸ Manda a sua palavra, e os faz derreter; faz soprar o vento, e correm as águas.
¹⁹ Mostra a sua palavra a Jacó, os seus estatutos e os seus juízos a Israel.
²⁰ Não fez assim a nenhuma outra nação; e quanto aos seus juízos, não os conhecem. Louvai ao Senhor.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o Salmo 147 descreve o conhecimento de Deus sobre as estrelas?",
                        opcoes: [
                            { numero: 1, texto: "Conta o número das estrelas, chamando-as a todas pelos seus nomes", correta: true },
                            { numero: 2, texto: "Ele apenas as criou no início", correta: false },
                            { numero: 3, texto: "Ele as observa de longe", correta: false },
                            { numero: 4, texto: "Ele conta apenas as mais brilhantes", correta: false }
                        ],
                        explicacao: "Salmos 147:4 - Conta o número das estrelas, chamando-as a todas pelos seus nomes.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        148: {
            titulo: "O Louvor de Toda a Criação",
            texto: ` ¹ Louvai ao Senhor. Louvai ao Senhor desde os céus, louvai-o nas alturas.
² Louvai-o, todos os seus anjos; louvai-o, todos os seus exércitos.
³ Louvai-o, sol e lua; louvai-o, todas as estrelas luzentes.
⁴ Louvai-o, céus dos céus, e as águas que estão sobre os céus.
⁵ Louvem o nome do Senhor, pois mandou, e logo foram criados.
⁶ E os confirmou eternamente para sempre, e lhes deu um decreto que não ultrapassarão.
⁷ Louvai ao Senhor desde a terra: vós, baleias, e todos os abismos;
⁸ Fogo e saraiva, neve e vapores, e vento tempestuoso que executa a sua palavra;
⁹ Montes e todos os outeiros, árvores frutíferas e todos os cedros;
¹⁰ As feras e todos os gados, répteis e aves voadoras;
¹¹ Reis da terra e todos os povos, príncipes e todos os juízes da terra;
¹² Moços e moças, velhos e crianças.
¹³ Louvem o nome do Senhor, pois só o seu nome é exaltado; a sua glória está sobre a terra e o céu.
¹⁴ Ele também exalta o poder do seu povo, o louvor de todos os seus santos, dos filhos de Israel, um povo que lhe é chegado. Louvai ao Senhor.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem o Salmo 148 convoca para louvar ao Senhor desde os céus?",
                        opcoes: [
                            { numero: 1, texto: "Apenas os anjos", correta: false },
                            { numero: 2, texto: "Anjos, sol, lua, estrelas e todas as águas sobre os céus", correta: true },
                            { numero: 3, texto: "Apenas os pássaros", correta: false },
                            { numero: 4, texto: "Apenas as nuvens", correta: false }
                        ],
                        explicacao: "Salmos 148:1-4 - Louvai-o, todos os seus anjos... louvai-o, sol e lua... estrelas luzentes... e vós, águas que estais sobre os céus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        149: {
            titulo: "O Cântico dos Santos",
            texto: ` ¹ Louvai ao Senhor. Cantai ao Senhor um cântico novo, e o seu louvor na congregação dos santos.
² Alegre-se Israel naquele que o fez, regozijem-se os filhos de Sião no seu Rei.
³ Louvem o seu nome com danças; cantem-lhe o seu louvor com tamborim e harpa.
⁴ Porque o Senhor se agrada do seu povo; ornará os mansos com a salvação.
⁵ Exultem os santos na glória; alegrem-se nas suas camas.
⁶ Estejam na sua garganta os altos louvores de Deus, e espada de dois fios nas suas mãos,
⁷ Para tomarem vingança dos gentios, e darem repreensões aos povos;
⁸ Para prenderem os seus reis com cadeias, e os seus nobres com grilhões de ferro;
⁹ Para fazerem neles o juízo escrito; esta será a honra de todos os seus santos. Louvai ao Senhor.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde os santos devem se alegrar e cantar com júbilo, segundo o Salmo 149?",
                        opcoes: [
                            { numero: 1, texto: "Apenas nas ruas", correta: false },
                            { numero: 2, texto: "Nos seus leitos (camas)", correta: true },
                            { numero: 3, numero: 3, texto: "Dentro das cavernas", correta: false },
                            { numero: 4, texto: "No fundo do mar", correta: false }
                        ],
                        explicacao: "Salmos 149:5 - Alegrem-se os santos na glória; cantem de júbilo nos seus leitos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        150: {
            titulo: "Tudo o que tem Fôlego",
            texto: ` ¹ Louvai ao Senhor. Louvai a Deus no seu santuário; louvai-o no firmamento do seu poder.
² Louvai-o pelos seus atos poderosos; louvai-o conforme a excelência da sua grandeza.
³ Louvai-o com o som de trombeta; louvai-o com o saltério e a harpa.
⁴ Louvai-o com o tamborim e a dança, louvai-o com instrumentos de cordas e com órgãos.
⁵ Louvai-o com os címbalos sonoros; louvai-o com címbalos altissonantes.
⁶ Tudo quanto tem fôlego louve ao Senhor. Louvai ao Senhor.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Com o que o Senhor deve ser louvado, segundo o encerramento do livro de Salmos?",
                        opcoes: [
                            { numero: 1, texto: "Apenas com orações mentais", correta: false },
                            { numero: 2, texto: "Com trombeta, saltério, harpa, adufe, flauta e címbalos", correta: true },
                            { numero: 3, texto: "Apenas com o silêncio", correta: false },
                            { numero: 4, texto: "Com sacrifícios de animais", correta: false }
                        ],
                        explicacao: "Salmos 150:3-5 - Louvai-o com o som de trombeta... saltério e harpa... adufe e flauta... címbalos sonoros.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é o verso final que encerra todo o livro de Salmos?",
                        opcoes: [
                            { numero: 1, texto: "Amém e Amém", correta: false },
                            { numero: 2, texto: "Tudo quanto tem fôlego louve ao Senhor. Louvai ao Senhor!", correta: true },
                            { numero: 3, texto: "Aqui termina a oração de Davi", correta: false },
                            { numero: 4, texto: "Deus é amor para sempre", correta: false }
                        ],
                        explicacao: "Salmos 150:6 - Tudo quanto tem fôlego louve ao Senhor. Louvai ao Senhor!",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
    }
};