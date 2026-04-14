const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const sofonias = {
    nome: "Sofonias",
    icone: "🎺",
    autor: "Sofonias",
   // background: "./imagens/sofonias_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "O Grande Dia do Senhor",
            texto: ` ¹ Palavra do Senhor, que veio a Sofonias, filho de Cusi, filho de Gedalias, filho de Amarias, filho de Ezequias, nos dias de Josias, filho de Amom, rei de Judá.
² Hei de consumir por completo tudo de sobre a terra, diz o Senhor.
³ Consumirei os homens e os animais, consumirei as aves do céu, e os peixes do mar, e os tropeços juntamente com os ímpios; e exterminarei os homens de sobre a terra, diz o Senhor.
⁴ E estenderei a minha mão contra Judá, e contra todos os habitantes de Jerusalém, e exterminarei deste lugar o restante de Baal, e o nome dos sacerdotes dos ídolos, juntamente com os sacerdotes;
⁵ E os que sobre os telhados adoram o exército do céu; e os que se inclinam jurando ao Senhor, e juram por Milcom;
⁶ E os que deixam de andar em seguimento do Senhor, e os que não buscam ao Senhor, nem perguntam por ele.
⁷ Cala-te diante do Senhor Deus, porque o dia do Senhor está perto; porque o Senhor preparou o sacrifício, e santificou os seus convidados.
⁸ Acontecerá que, no dia do sacrifício do Senhor, castigarei os príncipes, e os filhos do rei, e todos os que se vestem de trajes estrangeiros.
⁹ Castigarei naquele dia todo aquele que salta sobre o limiar, que enche de violência e engano a casa dos seus senhores.
¹⁰ E naquele dia, diz o Senhor, far-se-á ouvir uma voz de clamor desde a porta do peixe, e um uivo desde a segunda parte, e grande quebrantamento desde os outeiros.
¹¹ Uivai vós, moradores de Mactes, porque todo o povo que mercadejava está arruinado, todos os que estavam carregados de dinheiro foram destruídos.
¹² E há de ser que, naquele tempo, esquadrinharei a Jerusalém com lanternas, e castigarei os homens que se espessam como a borra do vinho, que dizem no seu coração: O Senhor não faz o bem nem faz o mal.
¹³ Por isso serão saqueados os seus bens, e assoladas as suas casas; e edificarão casas, mas não habitarão nelas, e plantarão vinhas, mas não lhes beberão o seu vinho.
¹⁴ O grande dia do Senhor está perto, sim, está perto, e se apressa muito; amarga é a voz do dia do Senhor; clamará ali o poderoso.
¹⁵ Aquele dia será um dia de indignação, dia de tribulação e de angústia, dia de alvoroço e de assolação, dia de trevas e de escuridão, dia de nuvens e de densas trevas,
¹⁶ Dia de trombeta e de alarido contra as cidades fortificadas e contra as torres altas.
¹⁷ E angustiarei os homens, que andarão como cegos, porque pecaram contra o Senhor; e o seu sangue se derramará como pó, e a sua carne será como esterco.
¹⁸ Nem a sua prata nem o seu ouro os poderá livrar no dia da indignação do Senhor, mas pelo fogo do seu zelo toda esta terra será consumida, porque certamente fará de todos os moradores da terra uma destruição total e apressada.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o Senhor diz que consumirá inteiramente de sobre a face da terra?",
                        opcoes: [
                            { numero: 1, texto: "Apenas as plantações", correta: false },
                            { numero: 2, texto: "Todas as coisas", correta: true },
                            { numero: 3, texto: "Somente os muros das cidades", correta: false },
                            { numero: 4, texto: "Os navios no mar", correta: false }
                        ],
                        explicacao: "Sofonias 1:2 - Consumirei inteiramente tudo de sobre a face da terra, diz o Senhor.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como é descrito o dia do Senhor no versículo 15?",
                        opcoes: [
                            { numero: 1, texto: "Dia de festa e alegria", correta: false },
                            { numero: 2, texto: "Dia de indignação, angústia e alvoroço", correta: true },
                            { numero: 3, texto: "Dia de colheita farta", correta: false },
                            { numero: 4, texto: "Dia de silêncio absoluto", correta: false }
                        ],
                        explicacao: "Sofonias 1:15 - Aquele dia é um dia de indignação, dia de angústia e de pressa...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por que os homens andariam como cegos?",
                        opcoes: [
                            { numero: 1, texto: "Por causa do sol forte", correta: false },
                            { numero: 2, texto: "Porque perderam o caminho de casa", correta: false },
                            { numero: 3, texto: "Porque pecaram contra o Senhor", correta: true },
                            { numero: 4, texto: "Por causa da poeira do deserto", correta: false }
                        ],
                        explicacao: "Sofonias 1:17 - E angustiarei os homens, e eles andarão como cegos, porque pecaram contra o Senhor...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "Apelo ao Arrependimento e Juízo das Nações",
            texto: `¹ Congregai-vos, sim, congregai-vos, ó nação não desejável;
² Antes que o decreto produza o seu efeito, e o dia passe como a pragana; antes que venha sobre vós o furor da ira do Senhor, antes que venha sobre vós o dia da ira do Senhor.
³ Buscai ao Senhor, vós todos os mansos da terra, que tendes posto por obra o seu juízo; buscai a justiça, buscai a mansidão; pode ser que sejais escondidos no dia da ira do Senhor.
⁴ Porque Gaza será desamparada, e Ascalom assolada; Asdode ao meio-dia será expelida, e Ecrom será desarraigada.
⁵ Ai dos habitantes da costa do mar, a nação dos quereteus! A palavra do Senhor será contra vós, ó Canaã, terra dos filisteus; e eu vos destruirei, até que não haja morador.
⁶ E a costa do mar será de pastos e cabanas para os pastores, e currais para os rebanhos.
⁷ E será a costa para o restante da casa de Judá; ali apascentarão os seus rebanhos; de tarde se deitarão nas casas de Ascalom; porque o Senhor seu Deus os visitará, e os fará tornar do seu cativeiro.
⁸ Eu ouvi o escárnio de Moabe, e as injuriosas palavras dos filhos de Amom, com que escarneceram do meu povo, e se engrandeceram contra o seu termo.
⁹ Portanto, tão certo como eu vivo, diz o Senhor dos Exércitos, o Deus de Israel, Moabe será como Sodoma, e os filhos de Amom como Gomorra, campo de urtigas e poços de sal, e desolação perpétua; o restante do meu povo os saqueará, e o restante do meu povo os possuirá.
¹⁰ Isso terão em recompensa da sua soberba, porque escarneceram, e se engrandeceram contra o povo do Senhor dos Exércitos.
¹¹ O Senhor será terrível para eles, porque emagrecerá todos os deuses da terra; e todos virão adorá-lo, cada um desde o seu lugar, de todas as ilhas dos gentios.
¹² Também vós, ó etíopes, sereis mortos com a minha espada.
¹³ Estenderá também a sua mão contra o norte, e destruirá a Assíria; e fará de Nínive uma desolação, terra seca como o deserto.
¹⁴ E no meio dela repousarão os rebanhos, todos os animais das nações; e alojar-se-ão nos seus capitéis assim o pelicano como o ouriço; o canto das aves se ouvirá nas janelas; e haverá desolação nos limiares, quando tiver descoberto a sua obra de cedro.
¹⁵ Esta é a cidade alegre, que habita despreocupadamente, que diz no seu coração: Eu sou, e não há outra além de mim; como se tornou em desolação, em pousada de animais! Todo o que passar por ela assobiará, e meneará a sua mão.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que os mansos da terra devem buscar, além do Senhor?",
                        opcoes: [
                            { numero: 1, texto: "Ouro e prata", correta: false },
                            { numero: 2, texto: "A justiça e a mansidão", correta: true },
                            { numero: 3, texto: "Alianças com outros reis", correta: false },
                            { numero: 4, texto: "O descanso nos montes", correta: false }
                        ],
                        explicacao: "Sofonias 2:3 - Buscai ao Senhor... buscai a justiça, buscai a mansidão...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual cidade se tornaria em assolação e seca como um deserto?",
                        opcoes: [
                            { numero: 1, texto: "Jerusalém", correta: false },
                            { numero: 2, texto: "Babilônia", correta: false },
                            { numero: 3, texto: "Nínive", correta: true },
                            { numero: 4, texto: "Tiro", correta: false }
                        ],
                        explicacao: "Sofonias 2:13 - ...e fará de Nínive uma assolação, uma terra seca como o deserto.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Moabe e os filhos de Amom se tornariam, como Sodoma e Gomorra?",
                        opcoes: [
                            { numero: 1, texto: "Campos de urtigas e poços de sal", correta: true },
                            { numero: 2, texto: "Grandes impérios", correta: false },
                            { numero: 3, texto: "Florestas densas", correta: false },
                            { numero: 4, texto: "Cidades de refúgio", correta: false }
                        ],
                        explicacao: "Sofonias 2:9 - ...Moabe será como Sodoma... campo de urtigas e poços de sal...",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "Restauração e Alegria de Israel",
            texto: ` ¹ Ai da rebelde e contaminada, da cidade opressora!
² Não obedeceu à sua voz, não aceitou o castigo; não confiou no Senhor; nem se aproximou do seu Deus.
³ Os seus príncipes são leões rugidores no meio dela; os seus juízes são lobos da tarde, que não deixam os ossos para a manhã.
⁴ Os seus profetas são levianos, homens aleivosos; os seus sacerdotes profanaram o santuário, e fizeram violência à lei.
⁵ O Senhor é justo no meio dela; ele não comete iniquidade; cada manhã traz o seu juízo à luz; nunca falta; mas o perverso não conhece a vergonha.
⁶ Exterminei as nações, as suas torres estão assoladas; fiz desertas as suas praças, a ponto de não ficar quem passe por elas; as suas cidades foram destruídas, até não ficar ninguém, até não haver quem as habite.
⁷ Eu dizia: Certamente me temerás, e aceitarás a correção, e assim a sua morada não seria destruída, conforme tudo aquilo porque a castiguei; mas eles se levantaram de madrugada, corromperam todas as suas obras.
⁸ Portanto esperai-me, diz o Senhor, no dia em que eu me levantar para o despojo; porque o meu decreto é ajuntar as nações e congregar os reinos, para sobre eles derramar a minha indignação, e todo o ardor da minha ira; porque toda esta terra será consumida pelo fogo do meu zelo.
⁹ Porque então darei uma linguagem pura aos povos, para que todos invoquem o nome do Senhor, para que o sirvam com um mesmo consenso.
¹⁰ Dalém dos rios da Etiópia, meus zelosos adoradores, que constituem a filha dos meus dispersos, me trarão sacrifício.
¹¹ Naquele dia não te envergonharás de nenhuma das tuas obras, com as quais te rebelaste contra mim; porque então tirarei do meio de ti os que exultam na tua soberba, e tu nunca mais te ensoberbecerás no meu monte santo.
¹² Mas deixarei no meio de ti um povo humilde e pobre; e eles confiarão no nome do Senhor.
¹³ O remanescente de Israel não cometerá iniquidade, nem proferirá mentira, e na sua boca não se achará língua enganosa; mas serão apascentados, e deitar-se-ão, e não haverá quem os espante.
¹⁴ Canta alegremente, ó filha de Sião; rejubila, ó Israel; regozija-te, e exulta de todo o coração, ó filha de Jerusalém.
¹⁵ O Senhor afastou os teus juízos, exterminou o teu inimigo; o Senhor, o rei de Israel, está no meio de ti; tu não verás mais mal algum.
¹⁶ Naquele dia se dirá a Jerusalém: Não temas, ó Sião, não se enfraqueçam as tuas mãos.
¹⁷ O Senhor teu Deus, o poderoso, está no meio de ti, ele salvará; ele se deleitará em ti com alegria; calar-se-á por seu amor, regozijar-se-á em ti com júbilo.
¹⁸ Os entristecidos por causa da reunião solene, congregarei; esses que são de ti e para os quais o opróbrio dela era um peso.
¹⁹ Eis que naquele tempo procederei contra todos os que te afligem, e salvarei a que coxeia, e recolherei a que foi expulsa; e deles farei um louvor e um nome em toda a terra em que foram envergonhados.
²⁰ Naquele tempo vos farei voltar, naquele tempo vos recolherei; certamente farei de vós um nome e um louvor entre todos os povos da terra, quando fizer voltar os vossos cativos diante dos vossos olhos, diz o Senhor.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como o Senhor Deus está no meio de Sião, segundo o versículo 17?",
                        opcoes: [
                            { numero: 1, texto: "Como um juiz distante", correta: false },
                            { numero: 2, texto: "Como um observador", correta: false },
                            { numero: 3, texto: "Poderoso para salvar", correta: true },
                            { numero: 4, texto: "Em silêncio absoluto", correta: false }
                        ],
                        explicacao: "Sofonias 3:17 - O Senhor teu Deus está no meio de ti, poderoso para salvar...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor dará aos povos para que todos invoquem o seu nome?",
                        opcoes: [
                            { numero: 1, texto: "Uma linguagem pura", correta: true },
                            { numero: 2, texto: "Muitas riquezas", correta: false },
                            { numero: 3, texto: "Novas terras", correta: false },
                            { numero: 4, texto: "Exércitos valentes", correta: false }
                        ],
                        explicacao: "Sofonias 3:9 - Porque então darei uma linguagem pura aos povos, para que todos invoquem o nome do Senhor...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o Senhor fará com o cativeiro do seu povo diante dos seus olhos?",
                        opcoes: [
                            { numero: 1, texto: "O manterá para sempre", correta: false },
                            { numero: 2, texto: "O fará esquecer", correta: false },
                            { numero: 3, texto: "O enviará para longe", correta: false },
                            { numero: 4, texto: "O tornará (restaurará)", correta: true }
                        ],
                        explicacao: "Sofonias 3:20 - ...quando eu tornar o vosso cativeiro diante dos vossos olhos, diz o Senhor.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};