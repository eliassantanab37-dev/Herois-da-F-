// js/livros/lucas.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const lucas = {
    nome: "Lucas",
    icone: "👨‍⚕️",
    autor: "Lucas",
    background: "./imagens/lucas_bg.jpg", 

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "Anúncio do Nascimento de João e Jesus",
            texto: `¹ Tendo, pois, muitos empreendido pôr em ordem a narração dos fatos que entre nós se cumpriram,
² segundo nos transmitiram os mesmos que os presenciaram desde o princípio e foram ministros da palavra,
³ pareceu-me também a mim conveniente descrevê-los a ti, ó excelentíssimo Teófilo, por sua ordem, havendo-me já informado minuciosamente de tudo desde o princípio,
⁴ para que conheças a certeza das coisas de que já estás informado.
⁵ Existiu, no tempo de Herodes, rei da Judeia, um sacerdote, chamado Zacarias, da ordem de Abias, e cuja mulher era das filhas de Arão; o nome dela era Isabel.
⁶ E eram ambos justos perante Deus, vivendo irrepreensivelmente em todos os mandamentos e preceitos do Senhor.
⁷ E não tinham filhos, porque Isabel era estéril, e ambos eram avançados em idade.
⁸ E aconteceu que, exercendo ele o sacerdócio diante de Deus, na ordem da sua turma,
⁹ segundo o costume sacerdotal, coube-lhe em sorte entrar no templo do Senhor para oferecer o incenso.
¹⁰ E toda a multidão do povo estava fora, orando, à hora do incenso.
¹¹ Então, um anjo do Senhor lhe apareceu, posto em pé, à direita do altar do incenso.
¹² E Zacarias, vendo-o, turbou-se, e caiu temor sobre ele.
¹³ Mas o anjo lhe disse: Zacarias, não temas, porque a tua oração foi ouvida, e Isabel, tua mulher, dará à luz um filho, e lhe porás o nome de João.
¹⁴ E terás prazer e alegria, e muitos se alegrarão no seu nascimento,
¹⁵ porque será grande diante do Senhor, e não beberá vinho, nem bebida forte, e será cheio do Espírito Santo, já desde o ventre de sua mãe.
¹⁶ E converterá muitos dos filhos de Israel ao Senhor, seu Deus,
¹⁷ e irá adiante dele no espírito e virtude de Elias, para converter o coração dos pais aos filhos e os rebeldes, à prudência dos justos, com o fim de preparar ao Senhor um povo bem disposto.
¹⁸ Disse, então, Zacarias ao anjo: Como saberei isso? Pois eu já sou velho, e minha mulher, avançada em idade.
¹⁹ E, respondendo o anjo, disse-lhe: Eu sou Gabriel, que assisto diante de Deus, e fui enviado a falar-te e dar-te estas alegres novas.
²⁰ Todavia ficarás mudo e não poderás falar até ao dia em que estas coisas aconteçam, porquanto não creste nas minhas palavras, que a seu tempo se hão de cumprir.
²¹ E o povo estava esperando a Zacarias e maravilhava-se de que tanto se demorasse no templo.
²² E, saindo ele, não lhes podia falar; e entenderam que tivera alguma visão no templo. E falava por acenos e ficou mudo.
²³ E sucedeu que, terminados os dias de seu ministério, voltou para sua casa.
²⁴ E, depois daqueles dias, Isabel, sua mulher, concebeu e, por cinco meses, se ocultou, dizendo:
²⁵ Assim me fez o Senhor, nos dias em que atentou em mim, para destruir o meu opróbrio entre os homens.
²⁶ E, no sexto mês, foi o anjo Gabriel enviado por Deus a uma cidade da Galileia, chamada Nazaré,
²⁷ a uma virgem desposada com um varão cujo nome era José, da casa de Davi; e o nome da virgem era Maria.
²⁸ E, entrando o anjo onde ela estava, disse: Salve, agraciada; o Senhor é contigo; bendita és tu entre as mulheres.
²⁹ E, vendo-o ela, turbou-se muito com aquelas palavras e considerava que saudação seria esta.
³⁰ Disse-lhe, então, o anjo: Maria, não temas, porque achaste graça diante de Deus,
³¹ E eis que em teu ventre conceberás, e darás à luz um filho, e pôr-lhe-ás o nome de Jesus.
³² Este será grande e será chamado Filho do Altíssimo; e o Senhor Deus lhe dará o trono de Davi, seu pai,
³³ e reinará eternamente na casa de Jacó, e o seu Reino não terá fim.
³⁴ E disse Maria ao anjo: Como se fará isso, visto que não conheço varão?
³⁵ E, respondendo o anjo, disse-lhe: Descerá sobre ti o Espírito Santo, e a virtude do Altíssimo te cobrirá com a sua sombra; pelo que também o Santo, que de ti há de nascer, será chamado Filho de Deus.
³⁶ E eis que também Isabel, tua prima, concebeu um filho em sua velhice; e é este o sexto mês para aquela que era chamada estéril.
³⁷ Porque para Deus nada é impossível.
³⁸ Disse, então, Maria: Eis aqui a serva do Senhor; cumpra-se em mim segundo a tua palavra. E o anjo ausentou-se dela.
³⁹ E, naqueles dias, levantando-se Maria, foi apressada às montanhas, a uma cidade de Judá,
⁴⁰ e entrou em casa de Zacarias, e saudou a Isabel.
⁴¹ E aconteceu que, ao ouvir Isabel a saudação de Maria, a criancinha saltou no seu ventre; e Isabel foi cheia do Espírito Santo,
⁴² e exclamou com grande voz, e disse: Bendita és tu entre as mulheres, e é bendito o fruto do teu ventre!
⁴³ E de onde me provém isso a mim, que venha visitar-me a mãe do meu Senhor?
⁴⁴ Pois eis que, ao chegar aos meus ouvidos a voz da tua saudação, a criancinha saltou de alegria no meu ventre.
⁴⁵ Bem-aventurada a que creu, pois hão de cumprir-se as coisas que da parte do Senhor lhe foram ditas!
⁴⁶ Disse, então, Maria: A minha alma engrandece ao Senhor,
⁴⁷ e o meu espírito se alegra em Deus, meu Salvador,
⁴⁸ porque atentou na humildade de sua serva; pois eis que, desde agora, todas as gerações me chamarão bem-aventurada.
⁴⁹ Porque me fez grandes coisas o Poderoso; e Santo é o seu nome.
⁵⁰ E a sua misericórdia é de geração em geração sobre os que o temem.
⁵¹ Com o seu braço, agiu valorosamente, dissipou os soberbos no pensamento de seu coração,
⁵² depôs dos tronos os poderosos e elevou os humildes;
⁵³ encheu de bens os famintos, despediu vazios os ricos,
⁵⁴ e auxiliou a Israel, seu servo, recordando-se da sua misericórdia
⁵⁵ (como falou a nossos pais) para com Abraão e sua posteridade, para sempre.
⁵⁶ E Maria ficou com ela quase três meses e depois voltou para sua casa.
⁵⁷ E completou-se para Isabel o tempo de dar à luz, e teve um filho.
⁵⁸ E os seus vizinhos e parentes ouviram que tinha Deus usado para com ela de grande misericórdia e alegraram-se com ela.
⁵⁹ E aconteceu que, ao oitavo dia, vieram circuncidar o menino e lhe chamavam Zacarias, o nome de seu pai.
⁶⁰ E, respondendo sua mãe, disse: Não, porém será chamado João.
⁶¹ E disseram-lhe: Ninguém há na tua parentela que se chame por este nome.
⁶² E perguntaram, por acenos, ao pai como queria que lhe chamassem.
⁶³ E, pedindo ele uma tabuinha de escrever, escreveu, dizendo: O seu nome é João. E todos se maravilharam.
⁶⁴ E logo a boca se lhe abriu, e a língua se lhe soltou; e falava, louvando a Deus.
⁶⁵ E veio temor sobre todos os seus vizinhos, e em todas as montanhas da Judeia foram divulgadas todas essas coisas.
⁶⁶ E todos os que as ouviam as conservavam em seu coração, dizendo: Quem será, pois, este menino? E a mão do Senhor estava com ele.
⁶⁷ E Zacarias, seu pai, foi cheio do Espírito Santo e profetizou, dizendo:
⁶⁸ Bendito o Senhor, Deus de Israel, porque visitou e remiu o seu povo!
⁶⁹ E nos levantou uma salvação poderosa na casa de Davi, seu servo,
⁷⁰ como falou pela boca dos seus santos profetas, desde o princípio do mundo,
⁷¹ para nos livrar dos nossos inimigos e das mãos de todos os que nos aborrecem
⁷² e para manifestar misericórdia a nossos pais, e para lembrar-se do seu santo concerto
⁷³ e do juramento que jurou a Abraão, nosso pai,
⁷⁴ de conceder-nos que, libertados das mãos de nossos inimigos, o servíssemos sem temor,
⁷⁵ em santidade e justiça perante ele, todos os dias da nossa vida.
⁷⁶ E tu, ó menino, serás chamado profeta do Altíssimo, porque hás de ir ante a face do Senhor, a preparar os seus caminhos,
⁷⁷ para dar ao seu povo conhecimento da salvação, na remissão dos seus pecados,
⁷⁸ pelas entranhas da misericórdia do nosso Deus, com que o oriente do alto nos visitou,
⁷⁹ para alumiar os que estão assentados em trevas e sombra de morte, a fim de dirigir os nossos pés  

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era a profissão de Zacarias, pai de João Batista?",
                        opcoes: [
                            { numero: 1, texto: "Carpinteiro", correta: false },
                            { numero: 2, texto: "Pescador", correta: false },
                            { numero: 3, texto: "Sacerdote", correta: true },
                            { numero: 4, texto: "Cobrador de impostos", correta: false }
                        ],
                        explicacao: "Lucas 1:5 - Zacarias era sacerdote da ordem de Abias.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual anjo apareceu a Maria para anunciar o nascimento de Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Miguel", correta: false },
                            { numero: 2, texto: "Gabriel", correta: true },
                            { numero: 3, texto: "Rafael", correta: false },
                            { numero: 4, texto: "Uriel", correta: false }
                        ],
                        explicacao: "Lucas 1:26 - O anjo Gabriel foi enviado por Deus a Nazaré.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quanto tempo Maria ficou na casa de Isabel?",
                        opcoes: [
                            { numero: 1, texto: "Um mês", correta: false },
                            { numero: 2, texto: "Sete dias", correta: false },
                            { numero: 3, texto: "Seis meses", correta: false },
                            { numero: 4, texto: "Quase três meses", correta: true }
                        ],
                        explicacao: "Lucas 1:56 - Maria ficou com Isabel cerca de três meses.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "O Nascimento de Jesus em Belém",
            texto: ` ¹ E aconteceu, naqueles dias, que saiu um decreto da parte de César Augusto, para que todo o mundo se alistasse.
² (Este primeiro alistamento foi feito sendo Cirênio governador da Síria.)
³ E todos iam alistar-se, cada um à sua própria cidade.
⁴ E subiu da Galileia também José, da cidade de Nazaré, à Judeia, à cidade de Davi chamada Belém (porque era da casa e família de Davi),
⁵ a fim de alistar-se com Maria, sua mulher, que estava grávida.
⁶ E aconteceu que, estando eles ali, se cumpriram os dias em que ela havia de dar à luz.
⁷ E deu à luz o seu filho primogênito, e envolveu-o em panos, e deitou-o numa manjedoura, porque não havia lugar para eles na estalagem.
⁸ Ora, havia, naquela mesma comarca, pastores que estavam no campo e guardavam durante as vigílias da noite o seu rebanho.
⁹ E eis que um anjo do Senhor veio sobre eles, e a glória do Senhor os cercou de resplendor, e tiveram grande temor.
¹⁰ E o anjo lhes disse: Não temais, porque eis aqui vos trago novas de grande alegria, que será para todo o povo,
¹¹ pois, na cidade de Davi, vos nasceu hoje o Salvador, que é Cristo, o Senhor.
¹² E isto vos será por sinal: achareis o menino envolto em panos e deitado numa manjedoura.
¹³ E, no mesmo instante, apareceu com o anjo uma multidão dos exércitos celestiais, louvando a Deus e dizendo:
¹⁴ Glória a Deus nas alturas, paz na terra, boa vontade para com os homens!
¹⁵ E aconteceu que, ausentando-se deles os anjos para o céu, disseram os pastores uns aos outros: Vamos, pois, até Belém e vejamos isso que aconteceu e que o Senhor nos fez saber.
¹⁶ E foram apressadamente e acharam Maria, e José, e o menino deitado na manjedoura.
¹⁷ E, vendo-o, divulgaram a palavra que acerca do menino lhes fora dita.
¹⁸ E todos os que a ouviram se maravilharam do que os pastores lhes diziam.
¹⁹ Mas Maria guardava todas essas coisas, conferindo-as em seu coração.
²⁰ E voltaram os pastores glorificando e louvando a Deus por tudo o que tinham ouvido e visto, como lhes havia sido dito.
²¹ E, quando os oito dias foram cumpridos para circuncidar o menino, foi-lhe dado o nome de Jesus, que pelo anjo lhe fora posto antes de ser concebido.
²² E, cumprindo-se os dias da purificação, segundo a lei de Moisés, o levaram a Jerusalém, para o apresentarem ao Senhor
²³ (segundo o que está escrito na lei do Senhor: Todo macho primogênito será consagrado ao Senhor)
²⁴ e para darem a oferta segundo o disposto na lei do Senhor: um par de rolas ou dois pombinhos.
²⁵ Havia em Jerusalém um homem cujo nome era Simeão; e este homem era justo e temente a Deus, esperando a consolação de Israel; e o Espírito Santo estava sobre ele.
²⁶ E fora-lhe revelado pelo Espírito Santo que ele não morreria antes de ter visto o Cristo do Senhor.
²⁷ E, pelo Espírito, foi ao templo e, quando os pais trouxeram o menino Jesus, para com ele procederem segundo o uso da lei,
²⁸ ele, então, o tomou em seus braços, e louvou a Deus, e disse:
²⁹ Agora, Senhor, podes despedir em paz o teu servo, segundo a tua palavra,
³⁰ pois já os meus olhos viram a tua salvação,
³¹ a qual tu preparaste perante a face de todos os povos,
³² luz para alumiar as nações e para glória de teu povo Israel.
³³ José e Maria se maravilharam das coisas que dele se diziam.
³⁴ E Simeão os abençoou e disse à Maria, sua mãe: Eis que este é posto para queda e elevação de muitos em Israel e para sinal que é contraditado
³⁵ (e uma espada traspassará também a tua própria alma), para que se manifestem os pensamentos de muitos corações.
³⁶ E estava ali a profetisa Ana, filha de Fanuel, da tribo de Aser. Esta era já avançada em idade, e tinha vivido com o marido sete anos, desde a sua virgindade,
³⁷ e era viúva, de quase oitenta e quatro anos, e não se afastava do templo, servindo a Deus em jejuns e orações, de noite e de dia.
³⁸ E, sobrevindo na mesma hora, ela dava graças a Deus e falava dele a todos os que esperavam a redenção em Jerusalém.
³⁹ E, quando acabaram de cumprir tudo segundo a lei do Senhor, voltaram à Galileia, para a sua cidade de Nazaré.
⁴⁰ E o menino crescia e se fortalecia em espírito, cheio de sabedoria; e a graça de Deus estava sobre ele.
⁴¹ Ora, todos os anos, iam seus pais a Jerusalém, à Festa da Páscoa.
⁴² E, tendo ele já doze anos, subiram a Jerusalém, segundo o costume do dia da festa.
⁴³ E, regressando eles, terminados aqueles dias, ficou o menino Jesus em Jerusalém, e não o souberam seus pais.
⁴⁴ Pensando, porém, eles que viria de companhia pelo caminho, andaram caminho de um dia e procuravam-no entre os parentes e conhecidos.
⁴⁵ E, como o não encontrassem, voltaram a Jerusalém em busca dele.
⁴⁶ E aconteceu que, passados três dias, o acharam no templo, assentado no meio dos doutores, ouvindo-os e interrogando-os.
⁴⁷ E todos os que o ouviam admiravam a sua inteligência e respostas.
⁴⁸ E, quando o viram, maravilharam-se, e disse-lhe sua mãe: Filho, por que fizeste assim para conosco? Eis que teu pai e eu, ansiosos, te procurávamos.
⁴⁹ E ele lhes disse: Por que é que me procuráveis? Não sabeis que me convémtratar dos negócios de meu Pai?
⁵⁰ E eles não compreenderam as palavras que lhes dizia.
⁵¹ E desceu com eles, e foi para Nazaré, e era-lhes sujeito. E sua mãe  

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde Maria deitou o menino Jesus após o nascimento?",
                        opcoes: [
                            { numero: 1, texto: "Em um berço de ouro", correta: false },
                            { numero: 2, texto: "Em uma manjedoura", correta: true },
                            { numero: 3, texto: "Sobre um tapete", correta: false },
                            { numero: 4, texto: "Em um pequeno barco", correta: false }
                        ],
                        explicacao: "Lucas 2:7 - Ela o enfaixou e o deitou numa manjedoura.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem era o homem justo e temente que esperava a consolação de Israel no templo?",
                        opcoes: [
                            { numero: 1, texto: "Herodes", correta: false },
                            { numero: 2, texto: "Caifás", correta: false },
                            { numero: 3, texto: "Simão", correta: true },
                            { numero: 4, texto: "Nicodemos", correta: false }
                        ],
                        explicacao: "Lucas 2:25 - Havia em Jerusalém um homem cujo nome era Simão.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual era a idade de Jesus quando seus pais o perderam em Jerusalém?",
                        opcoes: [
                            { numero: 1, texto: "7 anos", correta: false },
                            { numero: 2, texto: "10 anos", correta: false },
                            { numero: 3, texto: "12 anos", correta: true },
                            { numero: 4, texto: "30 anos", correta: false }
                        ],
                        explicacao: "Lucas 2:42 - E, tendo ele já doze anos, subiram a Jerusalém.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "Pregação de João e Batismo de Jesus",
            texto: `¹ E, no ano quinze do império de Tibério César, sendo Pôncio Pilatos governador da Judeia, e Herodes, tetrarca da Galileia, e seu irmão Filipe, tetrarca da Itureia e da província de Traconites, e Lisânias, tetrarca de Abilene,
² sendo Anás e Caifás sumos sacerdotes, veio no deserto a palavra de Deus a João, filho de Zacarias.
³ E percorreu toda a terra ao redor do Jordão, pregando o batismo de arrependimento, para o perdão dos pecados,
⁴ segundo o que está escrito no livro das palavras do profeta Isaías, que diz: Voz do que clama no deserto: Preparai o caminho do Senhor; endireitai as suas veredas.
⁵ Todo vale se encherá, e se abaixará todo monte e outeiro; e o que é tortuoso se endireitará, e os caminhos escabrosos se aplanarão;
⁶ e toda carne verá a salvação de Deus.
⁷ Dizia, pois, João à multidão que saía para ser batizada por ele: Raça de víboras, quem vos ensinou a fugir da ira que está para vir?
⁸ Produzi, pois, frutos dignos de arrependimento e não comeceis a dizer em vós mesmos: Temos Abraão por pai, porque eu vos digo que até destas pedras pode Deus suscitar filhos a Abraão.
⁹ E também já está posto o machado à raiz das árvores; toda árvore, pois, que não dá bom fruto é cortada e lançada no fogo.
¹⁰ E a multidão o interrogava, dizendo: Que faremos, pois?
¹¹ E, respondendo ele, disse-lhes: Quem tiver duas túnicas, que reparta com o que não tem, e quem tiver alimentos, que faça da mesma maneira.
¹² E chegaram também uns publicanos, para serem batizados, e disseram-lhe: Mestre, que devemos fazer?
¹³ E ele lhes disse: Não peçais mais do que aquilo que vos está ordenado.
¹⁴ E uns soldados o interrogaram também, dizendo: E nós, que faremos? E ele lhes disse: A ninguém trateis mal, nem defraudeis e contentai-vos com o vosso soldo.
¹⁵ E, estando o povo em expectação e pensando todos de João, em seu coração, se, porventura, seria o Cristo,
¹⁶ respondeu João a todos, dizendo: Eu, na verdade, batizo-vos com água, mas eis que vem aquele que é mais poderoso do que eu, a quem eu não sou digno de desatar a correia das sandálias; este vos batizará com o Espírito Santo e com fogo.
¹⁷ Ele tem a pá na sua mão, e limpará a sua eira, e ajuntará o trigo no seu celeiro, mas queimará a palha com fogo que nunca se apaga.
¹⁸ E assim admoestando-os, muitas outras coisas também anunciava ao povo.
¹⁹ Sendo, porém, o tetrarca Herodes repreendido por ele por causa de Herodias, mulher de seu irmão Filipe, e por todas as maldades que Herodes tinha feito,
²⁰ acrescentou a todas as outras ainda esta, a de encerrar João num cárcere.
²¹ E aconteceu que, como todo o povo se batizava, sendo batizado também Jesus, orando ele, o céu se abriu,
²² e o Espírito Santo desceu sobre ele em forma corpórea, como uma pomba; e ouviu-se uma voz do céu, que dizia: Tu és meu Filho amado; em ti me tenho comprazido.
²³ E o mesmo Jesus começava a ser de quase trinta anos, sendo (como se cuidava) filho de José, e José, de Eli,
²⁴ e Eli, de Matate, e Matate, de Levi, e Levi, de Melqui, e Melqui, de Janai, e Janai, de José,
²⁵ e José, de Matatias, e Matatias, de Amós, e Amós, de Naum, e Naum, de Esli, e Esli, de Nagai,
²⁶ e Nagai, de Maate, e Maate, de Matatias, e Matatias, de Semei, e Semei, de José, e José, de Jodá,
²⁷ e Jodá, de Joanã, e Joanã, de Resa, e Resa, de Zorobabel, e Zorobabel, de Salatiel, e Salatiel, de Neri,
²⁸ e Neri, de Melqui, e Melqui, de Adi, e Adi, de Cosã, e Cosã, de Elmadã, e Elmadã, de Er,
²⁹ e Er, de Josué, e Josué, de Eliézer, e Eliézer, de Jorim, e Jorim, de Matate, e Matate, de Levi,
³⁰ e Levi, de Simeão, e Simeão, de Judá, e Judá, de José, e José, de Jonã, e Jonã, de Eliaquim,
³¹ e Eliaquim, de Meleá, e Meleá, de Mená, e Mená, de Matatá, e Matatá, de Natã, e Natã, de Davi,
³² e Davi, de Jessé, e Jessé, de Obede, e Obede, de Boaz, e Boaz, de Salá, e Salá, de Naassom,
³³ e Naassom, de Aminadabe, e Aminadabe, de Admim, e Admim, de Arni, e Arni, de Esrom, e Esrom, de Perez, e Perez, de Judá,
³⁴ e Judá, de Jacó, e Jacó, de Isaque, e Isaque, de Abraão, e Abraão, de Tera, e Tera de Naor,
³⁵ e Naor, de Serugue, e Serugue, de Ragaú, e Ragaú, de Faleque, e Faleque, de Éber, e Éber, de Salá,
³⁶ e Salá, de Cainã, e Cainã, de Arfaxade, e Arfaxade, de Sem, e Sem, de Noé, e Noé, de Lameque,
³⁷ e Lameque, de Metusalém, e Metusalém, de Enoque, e Enoque, de Jarede, e Jarede, de Maalalel, e Maalalel, de Cainã,
³⁸ e Cainã, de Enos, e Enos, de Sete 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que João Batista chamou a multidão que ia se batizar?",
                        opcoes: [
                            { numero: 1, texto: "Amados do Senhor", correta: false },
                            { numero: 2, texto: "Ovelhas perdidas", correta: false },
                            { numero: 3, texto: "Filhos de Abraão", correta: false },
                            { numero: 4, texto: "Raça de víboras", correta: true }
                        ],
                        explicacao: "Lucas 3:7 - Ele dizia à multidão: Raça de víboras, quem vos ensinou a fugir da ira futura?",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem era o imperador romano quando João Batista começou a pregar?",
                        opcoes: [
                            { numero: 1, texto: "Tibério César", correta: true },
                            { numero: 2, texto: "Augusto", correta: false },
                            { numero: 3, texto: "Nero", correta: false },
                            { numero: 4, texto: "Herodes", correta: false }
                        ],
                        explicacao: "Lucas 3:1 - No décimo quinto ano do império de Tibério César.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual foi a resposta de João Batista aos publicanos sobre o que deveriam fazer?",
                        opcoes: [
                            { numero: 1, texto: "Deixem de trabalhar", correta: false },
                            { numero: 2, texto: "Não peçais mais do que o que vos está ordenado", correta: true },
                            { numero: 3, texto: "Deem todo o dinheiro ao templo", correta: false },
                            { numero: 4, texto: "Fujam para o deserto", correta: false }
                        ],
                        explicacao: "Lucas 3:13 - Ele lhes disse: Não peçais mais do que o que vos está ordenado.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "Tentação e Ministério na Galileia",
            texto: `¹ E Jesus, cheio do Espírito Santo, voltou do Jordão e foi levado pelo Espírito ao deserto.
² E quarenta dias foi tentado pelo diabo, e, naqueles dias, não comeu coisa alguma, e, terminados eles, teve fome.
³ E disse-lhe o diabo: Se tu és o Filho de Deus, dize a esta pedra que se transforme em pão.
⁴ E Jesus lhe respondeu, dizendo: Escrito estáque nem só de pão viverá o homem, mas de toda palavra de Deus.
⁵ E o diabo, levando-o a um alto monte, mostrou-lhe, num momento de tempo, todos os reinos do mundo.
⁶ E disse-lhe o diabo: Dar-te-ei a ti todo este poder e a sua glória, porque a mim me foi entregue, e dou-o a quem quero.
⁷ Portanto, se tu me adorares, tudo será teu.
⁸ E Jesus, respondendo, disse-lhe: Vai-te, Satanás, porque está escrito:Adorarás o Senhor, teu Deus, e só a ele servirás.
⁹ Levou-o também a Jerusalém, e pô-lo sobre o pináculo do templo, e disse-lhe: Se tu és o Filho de Deus, lança-te daqui abaixo,
¹⁰ porque está escrito: Mandará aos seus anjos, acerca de ti, que te guardem
¹¹ e que te sustenham nas mãos, para que nunca tropeces com o teu pé em alguma pedra.
¹² E Jesus, respondendo, disse-lhe: Dito está: Não tentarás ao Senhor, teu Deus.
¹³ E, acabando o diabo toda a tentação, ausentou-se dele por algum tempo.
¹⁴ Então, pela virtude do Espírito, voltou Jesus para a Galileia, e a sua fama correu por todas as terras em derredor.
¹⁵ E ensinava nas suas sinagogas e por todos era louvado.
¹⁶ E, chegando a Nazaré, onde fora criado, entrou num dia de sábado, segundo o seu costume, na sinagoga e levantou-se para ler.
¹⁷ E foi-lhe dado o livro do profeta Isaías; e, quando abriu o livro, achou o lugar em que estava escrito:
¹⁸ O Espíritodo Senhor é sobre mim, pois que me ungiu para evangelizar os pobres, enviou-me a curar os quebrantados do coração,
¹⁹ a apregoarliberdade aos cativos, a dar vista aos cegos, a pôr emliberdade os oprimidos, a anunciar o ano aceitável do Senhor.
²⁰ E, cerrando o livro e tornando a dá-lo ao ministro, assentou-se; e os olhos de todos na sinagoga estavam fitos nele.
²¹ Então, começou a dizer-lhes: Hoje se cumpriu esta Escritura em vossos ouvidos.
²² E todos lhe davam testemunho, e se maravilhavam das palavras de graça que saíam da sua boca, e diziam: Não é este o filho de José?
²³ E ele lhes disse: Sem dúvida, me direis este provérbio: Médico, cura-te a ti mesmo; faze também aqui na tua pátria tudo o que ouvimos tersido feito em Cafarnaum.
²⁴ E disse: Em verdade vos digo que nenhum profeta é bem-recebido na sua pátria.
²⁵ Em verdade vos digoque muitas viúvas existiam em Israel nos dias de Elias, quando o céu se cerrou por três anos e seis meses, de sorte que em toda a terra houve grande fome;
²⁶ e a nenhuma delas foi enviado Elias, senão a Sarepta de Sidom, a uma mulher viúva.
²⁷ E muitos leprosos havia emIsrael no tempo do profeta Eliseu, e nenhum deles foi purificado, senão Naamã, o siro.
²⁸ E todos, na sinagoga, ouvindo essas coisas, se encheram de ira.
²⁹ E, levantando-se, o expulsaram da cidade e o levaram até ao cume do monte em que a cidade deles estava edificada, para dali o precipitarem.
³⁰ Ele, porém, passando pelo meio deles, retirou-se.
³¹ E desceu a Cafarnaum, cidade da Galileia, e os ensinava nos sábados.
³² E admiravam-se da sua doutrina, porque a sua palavra era com autoridade.
³³ E estava na sinagoga um homem que tinha um espírito de um demônio imundo, e este exclamou em alta voz,
³⁴ dizendo: Ah! Que temos nós contigo, Jesus Nazareno? Vieste a destruir-nos? Bem sei quem és: o Santo de Deus.
³⁵ E Jesus o repreendeu, dizendo: Cala-te e sai dele. E o demônio, lançando-o por terra no meio do povo, saiu dele, sem lhe fazer mal.
³⁶ E veio espanto sobre todos, e falavam uns e outros, dizendo: Que palavra é esta, que até aos espíritos imundos manda com autoridade e poder, e eles saem?
³⁷ E a sua fama divulgava-se por todos os lugares, em redor daquela comarca.
³⁸ Ora, levantando-se Jesus da sinagoga, entrou em casa de Simão; e a sogra de Simão estava enferma com muita febre; e rogaram-lhe por ela.
³⁹ E, inclinando-se para ela, repreendeu a febre, e esta a deixou. E ela, levantando-se logo, servia-os.
⁴⁰ E, ao pôr do sol, todos os que tinham enfermos de várias doenças lhos traziam; e, impondo as mãos sobre cada um deles, os curava.
⁴¹ E também de muitos saíam demônios, clamando e dizendo: Tu és o Cristo, o Filho de Deus. E ele, repreendendo-os, não os deixava falar, pois sabiam que ele era o Cristo.
⁴² E, sendo já dia, saiu e foi para um lugar deserto; e a multidão o procurava e chegou junto dele; e o detinham, para que não se ausentasse deles.
⁴³ Ele, porém, lhes disse: Também é necessário que eu  
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quanto tempo Jesus foi tentado pelo diabo no deserto?",
                        opcoes: [
                            { numero: 1, texto: "7 dias", correta: false },
                            { numero: 2, texto: "12 dias", correta: false },
                            { numero: 3, texto: "40 dias", correta: true },
                            { numero: 4, texto: "100 dias", correta: false }
                        ],
                        explicacao: "Lucas 4:2 - Durante quarenta dias foi tentado pelo diabo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o povo de Nazaré tentou fazer com Jesus após sua pregação na sinagoga?",
                        opcoes: [
                            { numero: 1, texto: "Coroá-lo rei", correta: false },
                            { numero: 2, texto: "Prendê-lo no templo", correta: false },
                            { numero: 3, texto: "Segui-lo até o mar", correta: false },
                            { numero: 4, texto: "Lançá-lo do despenhadeiro do monte", correta: true }
                        ],
                        explicacao: "Lucas 4:29 - Levaram-no até ao cume do monte para dali o precipitarem.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem Jesus curou na casa de Simão Pedro?",
                        opcoes: [
                            { numero: 1, texto: "A sogra de Pedro", correta: true },
                            { numero: 2, texto: "O filho de Pedro", correta: false },
                            { numero: 3, texto: "Um criado romano", correta: false },
                            { numero: 4, texto: "Um paralítico", correta: false }
                        ],
                        explicacao: "Lucas 4:38 - A sogra de Simão estava enferma com muita febre.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "A Pesca Maravilhosa e o Chamado",
            texto: ` ¹ E aconteceu que, apertando-o a multidão para ouvir a palavra de Deus, estava ele junto ao lago de Genesaré.
² E viu estar dois barcos junto à praia do lago; e os pescadores, havendo descido deles, estavam lavando as redes.
³ E, entrando num dos barcos, que era o de Simão, pediu-lhe que o afastasse um pouco da terra; e, assentando-se, ensinava do barco a multidão.
⁴ E, quando acabou de falar, disse a Simão: faze-te ao mar alto, e lançai as vossas redes para pescar.
⁵ E, respondendo Simão, disse-lhe: Mestre, havendo trabalhado toda a noite, nada apanhamos; mas, porque mandas, lançarei a rede.
⁶ E, fazendo assim, colheram uma grande quantidade de peixes, e rompia-se-lhes a rede.
⁷ E fizeram sinal aos companheiros que estavam no outro barco, para que os fossem ajudar. E foram e encheram ambos os barcos, de maneira tal que quase iam a pique.
⁸ E, vendo isso Simão Pedro, prostrou-se aos pés de Jesus, dizendo: Senhor, ausenta-te de mim, por que sou um homem pecador.
⁹ Pois que o espanto se apoderara dele e de todos os que com ele estavam, por causa da pesca que haviam feito,
¹⁰ e, de igual modo, também de Tiago e João, filhos de Zebedeu, que eram companheiros de Simão. E disse Jesus a Simão: Não temas;de agora em diante, serás pescador de homens.
¹¹ E, levando os barcos para terra, deixaram tudo e o seguiram.
¹² E aconteceu que, quando estava em uma daquelas cidades, eis que um homem cheio de lepra, vendo a Jesus, prostrou-se sobre o rosto e rogou-lhe, dizendo: Senhor, se quiseres, bem podes limpar-me.
¹³ E ele, estendendo a mão, tocou-lhe, dizendo: Quero; sê limpo. E logo a lepra desapareceu dele.
¹⁴ E ordenou-lhe que a ninguém o dissesse. Mas disse-lhe:Vai, mostra-te ao sacerdote e oferece, pela tua purificação, o que Moisés determinou, para que lhes sirva de testemunho.
¹⁵ Porém a sua fama se propagava ainda mais, e ajuntava-se muita gente para o ouvir e para ser por ele curada das suas enfermidades.
¹⁶ Porém ele retirava-se para os desertos e ali orava.
¹⁷ E aconteceu que, em um daqueles dias, estava ensinando, e estavam ali assentados fariseus e doutores da lei que tinham vindo de todas as aldeias da Galileia, e da Judeia, e de Jerusalém. E a virtude do Senhor estava com ele para curar.
¹⁸ E eis que uns homens transportaram numa cama um homem que estava paralítico e procuravam fazê-lo entrar e pô-lo diante dele.
¹⁹ E, não achando por onde o pudessem levar, por causa da multidão, subiram ao telhado e, por entre as telhas, o baixaram com a cama até ao meio, diante de Jesus.
²⁰ E, vendo-lhes a fé, Jesus disse ao paralítico: Homem, os teus pecados te são perdoados.
²¹ E os escribas e os fariseus começaram a arrazoar, dizendo: Quem é este que diz blasfêmias? Quem pode perdoar pecados, senão Deus?
²² Jesus, porém, conhecendo os seus pensamentos, respondeu e disse-lhes: Que arrazoais em vosso coração?
²³ Qual é mais fácil? Dizer: Os teus pecados te são perdoados, ou dizer: Levanta-te e anda?
²⁴ Ora, para que saibais que o Filho do Homem tem sobre a terra poder de perdoar pecados (disse ao paralítico), eu te digo: Levanta-te, toma a tua cama e vai para tua casa.
²⁵ E, levantando-se logo diante deles e tomando a cama em que estava deitado, foi para sua casa glorificando a Deus.
²⁶ E todos ficaram maravilhados, e glorificaram a Deus, e ficaram cheios de temor, dizendo: Hoje, vimos prodígios.
²⁷ E, depois disso, saiu, e viu um publicano, chamado Levi, assentado na recebedoria, e disse-lhe: Segue-me.
²⁸ E ele, deixando tudo, levantou-se e o seguiu.
²⁹ E fez-lhe Levi um grande banquete em sua casa; e havia ali uma multidão de publicanos e outros que estavam com eles à mesa.
³⁰ E os escribas deles e os fariseus murmuravam contra os seus discípulos, dizendo: Por que comeis e bebeis com publicanos e pecadores?
³¹ E Jesus, respondendo, disse-lhes: Não necessitam de médico os que estão sãos, mas sim os que estão enfermos.
³² Eu não vim chamaros justos, mas sim os pecadores, ao arrependimento.
³³ Disseram-lhe, então, eles: Por que jejuam muitas vezes os discípulos de João e fazem orações, como também os dos fariseus, mas os teus comem e bebem?
³⁴ E ele lhes disse: Podeis vós fazer jejuar os convidados das bodas, enquanto o esposo está com eles?
³⁵ Dias virão, porém, em que o esposo lhes será tirado, e, então, naqueles dias, jejuarão.
³⁶ E disse-lhes também uma parábola: Ninguém tira um pedaço de uma veste nova para o coser em veste velha, pois que romperá a nova, e o remendo não condiz com a veste velha.
³⁷ E ninguém põe vinho novo em odres velhos; de outra sorte, o vinho novo romperá os odres e entornar-se-á o vinho, e os odres se estragarão.
³⁸ Mas o vinho novo deve ser posto em odres novos, e ambos juntamente  

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Pedro disse a Jesus após a pesca maravilhosa?",
                        opcoes: [
                            { numero: 1, texto: "Senhor, ensina-me a pescar assim", correta: false },
                            { numero: 2, texto: "Senhor, retira-te de mim, que sou um homem pecador", correta: true },
                            { numero: 3, texto: "Vamos vender estes peixes", correta: false },
                            { numero: 4, texto: "Tu és o Rei de Israel", correta: false }
                        ],
                        explicacao: "Lucas 5:8 - Vendo isso Simão Pedro, prostrou-se aos pés de Jesus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como os amigos do paralítico o levaram até Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Pela porta da frente", correta: false },
                            { numero: 2, texto: "Pela janela", correta: false },
                            { numero: 3, texto: "Pelo telhado, baixando-o em um leito", correta: true },
                            { numero: 4, texto: "Cavando um buraco no chão", correta: false }
                        ],
                        explicacao: "Lucas 5:19 - Subiram ao telhado e, por entre as telhas, o baixaram.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual era o nome do publicano que Jesus chamou no capítulo 5?",
                        opcoes: [
                            { numero: 1, texto: "Zaqueu", correta: false },
                            { numero: 2, texto: "André", correta: false },
                            { numero: 3, texto: "Filipe", correta: false },
                            { numero: 4, texto: "Levi", correta: true }
                        ],
                        explicacao: "Lucas 5:27 - Viu um publicano, chamado Levi, assentado na recebedoria.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        6: {
            titulo: "O Sábado e a Escolha dos Doze",
            texto: `¹ E aconteceu que, num sábado, passou pelas searas, e os seus discípulos iam arrancando espigas e, esfregando-as com as mãos, as comiam.
² E alguns dos fariseus lhes disseram: Por que fazeis o que não é lícito fazer nos sábados?
³ E Jesus, respondendo-lhes, disse: Nunca lestes o que fezDavi quando teve fome, ele e os que com ele estavam?
⁴ Como entrou na Casa de Deus, e tomou os pães da proposição, e os comeu, e deu também aos que estavam com ele,os quais não lhes era lícito comer, senão só aos sacerdotes?
⁵ E dizia-lhes: O Filho do Homem é senhor até do sábado.
⁶ E aconteceu também, em outro sábado, que entrou na sinagoga e estava ensinando; e havia ali um homem que tinha a mão direita mirrada.
⁷ E os escribas e fariseus atentavam nele, se o curaria no sábado, para acharem de que o acusar.
⁸ Mas ele, conhecendo bem os seus pensamentos, disse ao homem que tinha a mão mirrada: Levanta-te e fica em pé no meio. E, levantando-se ele, ficou em pé.
⁹ Então, Jesus lhes disse: Uma coisa vos hei de perguntar: É lícito nos sábados fazer bem ou fazer mal? Salvar a vida ou matar?
¹⁰ E, olhando para todos ao redor, disse ao homem: Estende a mão. E ele assim o fez, e a mão lhe foi restituída sã como a outra.
¹¹ E ficaram cheios de furor, e uns com os outros conferenciavam sobre o que fariam a Jesus.
¹² E aconteceu que, naqueles dias, subiu ao monte a orar e passou a noite em oração a Deus.
¹³ E, quando já era dia, chamou a si os seus discípulos, e escolheu doze deles, a quem também deu o nome de apóstolos:
¹⁴ Simão, ao qual também chamou Pedro, e André, seu irmão; Tiago e João; Filipe e Bartolomeu;
¹⁵ Mateus e Tomé; Tiago, filho de Alfeu, e Simão, chamado Zelote;
¹⁶ Judas, filho de Tiago, e Judas Iscariotes, que foi o traidor.
¹⁷ E, descendo com eles, parou num lugar plano, e também um grande número de seus discípulos, e grande multidão do povo de toda a Judeia, e de Jerusalém, e da costa marítima de Tiro e de Sidom;
¹⁸ os quais tinham vindo para o ouvir e serem curados das suas enfermidades, como também os atormentados dos espíritos imundos. E eram curados.
¹⁹ E toda a multidão procurava tocar-lhe, porque saía dele virtude que curava todos.
²⁰ E, levantando ele os olhos para os seus discípulos, dizia:
  Bem-aventurados vós, os pobres, porque vosso é o Reino de Deus.
²¹ Bem-aventurados vós, que agora tendes fome,porque sereis fartos.
  Bem-aventurados vós, que agora chorais, porque haveis de rir.
²² Bem-aventurados sereisquando os homens vos aborrecerem, e quando vos separarem, e vos injuriarem, e rejeitarem o vosso nome como mau, por causa do Filho do Homem.
²³ Folgai nesse dia,exultai, porque é grande o vosso galardão no céu, pois assim faziam os seus pais aos profetas.
²⁴ Mas ai devós, ricos! Porque já tendes a vossa consolação.
²⁵ Aide vós, os que estais fartos, porque tereis fome!
  Ai de vós, os que agora rides, porque vos lamentareis e chorareis!
²⁶ Ai de vósquando todos os homens falarem bem de vós, porque assim faziam seus pais aos falsos profetas!
²⁷ Mas a vós, que ouvis,digo: Amai a vossos inimigos, fazei bem aos que vos aborrecem,
²⁸ bendizei os que vosmaldizem e orai pelos que vos caluniam.
²⁹ Ao que te ferir numa face,oferece-lhe também a outra; e ao que te houver tirado a capa, nem a túnica recuses.
³⁰ E dá aqualquer que te pedir; e ao que tomar o que é teu, não lho tornes a pedir.
³¹ E como vós quereisque os homens vos façam, da mesma maneira fazei-lhes vós também.
³² E,se amardes aos que vos amam, que recompensa tereis? Também os pecadores amam aos que os amam.
³³ E, se fizerdes bem aos que vos fazem bem, que recompensa tereis? Também os pecadores fazem o mesmo.
³⁴ E, se emprestardesàqueles de quem esperais tornar a receber, que recompensa tereis? Também os pecadores emprestam aos pecadores, para tornarem a receber outro tanto.
³⁵ Amai, pois, a vossos inimigos,e fazei o bem, e emprestai, sem nada esperardes, e será grande o vosso galardão, e sereis filhos do Altíssimo; porque ele é benigno até para com os ingratos e maus.
³⁶ Sede, pois, misericordiosos,como também vosso Pai é misericordioso.
³⁷ Não julgueis,e não sereis julgados; não condeneis, e não sereis condenados; soltai, e soltar-vos-ão.
³⁸ Dai,e ser-vos-á dado; boa medida, recalcada, sacudida e transbordando vos darão; porque com a mesma medida com que medirdes também vos medirão de novo.
³⁹ E disse-lhes uma parábola: Pode, porventura, um cego guiar outro cego? Não cairão ambos na cova?
⁴⁰ Odiscípulo não é superior a seu mestre, mas todo o que for perfeito será como o seu mestre.
⁴¹ E por que atentas tuno argueiro que está no olho do teu irmão e não reparas na trave que está no teu próprio olho?
⁴² Ou como podes dizer a teu irmão: Irmão, deixa-me tirar o argueiro que está no teu olho, não atentando tu mesmo na trave que está no teu olho? Hipócrita,tira primeiro a trave do teu olho e, então, verás bem para tirar o argueiro que está no olho de teu irmão.
⁴³ Porque nãohá boa árvore que dê mau fruto, nem má árvore que dê bom fruto.
⁴⁴ Porque cadaárvore se conhece pelo seu próprio fruto; pois não se colhem figos dos espinheiros, nem se vindimam uvas dos abrolhos.
⁴⁵ Ohomem bom, do bom tesouro do seu coração, tira o bem, e o homem mau, do mau tesouro do seu coração, tira o mal, porque da abundância do seu coração fala a boca.
⁴⁶ E por que me chamaisSenhor, Senhor, e não fazeis o que eu digo?
⁴⁷ Qualquer que vem a mim,e ouve as minhas palavras, e as observa, eu vos mostrarei a quem é semelhante.
⁴⁸ É semelhante ao homem que edificou uma casa, e cavou, e abriu bem fundo, e pôs os alicerces sobre rocha; e, vindo a enchente, bateu com ímpeto a corrente naquela casa e não a pôde abalar, porque estava fundada sobre rocha.
⁴⁹ Mas o que ouve e não pratica é semelhante ao homem que edificou uma casa sobre terra 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que os discípulos faziam no sábado que irritou os fariseus?",
                        opcoes: [
                            { numero: 1, texto: "Colhiam espigas e as comiam, esfregando-as nas mãos", correta: true },
                            { numero: 2, texto: "Limpavam o templo", correta: false },
                            { numero: 3, texto: "Pescavam no mar da Galileia", correta: false },
                            { numero: 4, texto: "Carregavam fardos pesados", correta: false }
                        ],
                        explicacao: "Lucas 6:1 - Os discípulos iam colhendo espigas e, esfregando-as com as mãos, as comiam.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Onde Jesus passou a noite antes de escolher os doze apóstolos?",
                        opcoes: [
                            { numero: 1, texto: "Na casa de Maria e Marta", correta: false },
                            { numero: 2, texto: "No monte, orando a Deus", correta: true },
                            { numero: 3, texto: "No barco de Pedro", correta: false },
                            { numero: 4, texto: "Na sinagoga de Cafarnaum", correta: false }
                        ],
                        explicacao: "Lucas 6:12 - Passou a noite em oração a Deus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Na parábola dos dois fundamentos, sobre o que o homem prudente edificou sua casa?",
                        opcoes: [
                            { numero: 1, texto: "Sobre a areia", correta: false },
                            { numero: 2, texto: "Sobre a terra", correta: false },
                            { numero: 3, texto: "Sobre o barro", correta: false },
                            { numero: 4, texto: "Sobre a rocha", correta: true }
                        ],
                        explicacao: "Lucas 6:48 - É semelhante ao homem que... pôs os alicerces sobre rocha.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        7: {
            titulo: "A Fé do Centurião e a Viúva de Naim",
            texto: ` ¹ E, depois de concluir todos esses discursos perante o povo, entrou em Cafarnaum.
² E o servo de um certo centurião, a quem este muito estimava, estava doente e moribundo.
³ E, quando ouviu falar de Jesus, enviou-lhe uns anciãos dos judeus, rogando-lhe que viesse curar o seu servo.
⁴ E, chegando eles junto de Jesus, rogaram-lhe muito, dizendo: É digno de que lhe concedas isso.
⁵ Porque ama a nossa nação e ele mesmo nos edificou a sinagoga.
⁶ E foi Jesus com eles; mas, quando já estava perto da casa, enviou-lhe o centurião uns amigos, dizendo-lhe: Senhor, não te incomodes, porque não sou digno de que entres debaixo do meu telhado;
⁷ e, por isso, nem ainda me julguei digno de ir ter contigo; dize, porém, uma palavra, e o meu criado sarará.
⁸ Porque também eu sou homem sujeito à autoridade, e tenho soldados sob o meu poder, e digo a este: vai; e ele vai; e a outro: vem; e ele vem; e ao meu servo: faze isto; e ele o faz.
⁹ E, ouvindo isso, Jesus maravilhou-se dele e, voltando-se, disse à multidão que o seguia: Digo-vos que nem ainda em Israel tenho achado tanta fé.
¹⁰ E, voltando para casa os que foram enviados, acharam são o servo enfermo.
¹¹ E aconteceu, pouco depois, ir ele à cidade chamada Naim, e com ele iam muitos dos seus discípulos e uma grande multidão.
¹² E, quando chegou perto da porta da cidade, eis que levavam um defunto, filho único de sua mãe, que era viúva; e com ela ia uma grande multidão da cidade.
¹³ E, vendo-a, o Senhor moveu-se de íntima compaixão por ela e disse-lhe: Não chores.
¹⁴ E, chegando-se, tocou o esquife (e os que o levavam pararam) e disse: Jovem, eu te digo:Levanta-te.
¹⁵ E o defunto assentou-se e começou a falar. E entregou-o à sua mãe.
¹⁶ E de todos se apoderou o temor, e glorificavam a Deus, dizendo: Um grande profeta se levantou entre nós, e Deus visitou o seu povo.
¹⁷ E correu dele esta fama por toda a Judeia e por toda a terra circunvizinha.
¹⁸ E os discípulos de João anunciaram-lhe todas essas coisas.
¹⁹ E João, chamando dois dos seus discípulos, enviou-os a Jesus, dizendo: És tu aquele que havia de vir ou esperamos outro?
²⁰ E, quando aqueles homens chegaram junto dele, disseram: João Batista enviou-nos a perguntar-te: És tu aquele que havia de vir ou esperamos outro?
²¹ E, na mesma hora, curou muitos de enfermidades, e males, e espíritos maus; e deu vista a muitos cegos.
²² Respondendo, então, Jesus, disse-lhes: Ide e anunciai a João o que tendes visto e ouvido:os cegos veem, os coxos andam, os leprosos são purificados, os surdos ouvem, os mortos ressuscitam eaos pobres anuncia-se o evangelho.
²³ E bem-aventurado aquele que em mim se não escandalizar.
²⁴ E, tendo-se retirado os mensageiros de João, começou a dizer à multidão acerca de João: Que saístes a ver no deserto? Uma cana abalada pelo vento?
²⁵ Mas que saístes a ver? Um homem trajado de vestes delicadas? Eis que os que andam com vestes preciosas e em delícias estão nos paços reais.
²⁶ Mas que saístes a ver? Um profeta? Sim, vos digo, e muito mais do que profeta.
²⁷ Este é aquele de quem está escrito:Eis que envio o meu anjo diante da tua face, o qual preparará diante de ti o teu caminho.
²⁸ E eu vos digo que, entre os nascidos de mulheres, não há maior profeta do que João Batista; mas o menor no Reino de Deus é maior do que ele.
²⁹ E todo o povo que o ouviu e os publicanos, tendo sido batizados com o batismo de João, justificaram a Deus.
³⁰ Mas os fariseus e os doutores da lei rejeitaram o conselho de Deus contra si mesmos, não tendo sido batizados por ele.
³¹ E disse o Senhor: A quem, pois, compararei os homens desta geração, e a quem são semelhantes?
³² São semelhantes aos meninos que, assentados nas praças, clamam uns aos outros e dizem: Nós vos tocamos flauta, e não dançastes; cantamos lamentações, e não chorastes.
³³ Porqueveio João Batista, que não comia pão nem bebia vinho, e dizeis: Tem demônio.
³⁴ Veio o Filho do Homem, que come e bebe, e dizeis: Eis aíum homem comilão e bebedor de vinho, amigo dos publicanos e dos pecadores.
³⁵ Mas a sabedoria é justificada por todos os seus filhos.
³⁶ E rogou-lhe um dos fariseus que comesse com ele; e, entrando em casa do fariseu, assentou-se à mesa.
³⁷ E eis que uma mulher da cidade, uma pecadora, sabendo que ele estava à mesa em casa do fariseu, levou um vaso de alabastro com unguento.
³⁸ E, estando por detrás, aos seus pés, chorando, começou a regar-lhe os pés com lágrimas, e enxugava-lhos com os cabelos da sua cabeça e beijava-lhe os pés, e ungia-lhos com o unguento.
³⁹ Quando isso viu o fariseu que o tinha convidado, falava consigo, dizendo: Se este fora profeta, bem saberia quem e qual é a mulher que lhe tocou, pois é uma pecadora.
⁴⁰ E, respondendo, Jesus disse-lhe: Simão, uma coisa tenho a dizer-te. E ele disse: Dize-a, Mestre.
⁴¹ Um certo credor tinha dois devedores; um devia-lhe quinhentos dinheiros, e outro, cinquenta.
⁴² E, não tendo eles com que pagar, perdoou-lhes a ambos. Dize, pois: qual deles o amará mais?
⁴³ E Simão, respondendo, disse: Tenho para mim que é aquele a quem mais perdoou. E ele lhe disse: Julgaste bem.
⁴⁴ E, voltando-se para a mulher, disse a Simão: Vês tu esta mulher? Entrei em tua casa, e não me deste água para os pés; mas esta regou-me os pés com lágrimas e mos enxugou com os seus cabelos.
⁴⁵ Não me deste ósculo, mas esta, desde que entrou, não tem cessado de me beijar os pés.
⁴⁶ Não meungiste a cabeça com óleo, mas esta ungiu-me os pés com unguento.
⁴⁷ Por isso, te digoque os seus muitos pecados lhe são perdoados, porque muito amou; mas aquele a quem pouco é perdoado pouco ama.
⁴⁸ E disse a ela: Os teus pecados te são perdoados.
⁴⁹ E os que estavam à mesa começaram a dizer  

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o centurião romano pediu a Jesus sobre seu criado doente?",
                        opcoes: [
                            { numero: 1, texto: "Que Jesus fosse até sua casa tocar nele", correta: false },
                            { numero: 2, texto: "Apenas que dissesse uma palavra e o criado sararia", correta: true },
                            { numero: 3, texto: "Que desse um remédio para ele", correta: false },
                            { numero: 4, texto: "Que orasse com os sacerdotes", correta: false }
                        ],
                        explicacao: "Lucas 7:7 - Dize uma palavra, e o meu criado sarará.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Em qual cidade Jesus ressuscitou o filho único de uma viúva?",
                        opcoes: [
                            { numero: 1, texto: "Cafarnaum", correta: false },
                            { numero: 2, texto: "Betânia", correta: false },
                            { numero: 3, texto: "Naim", correta: true },
                            { numero: 4, texto: "Jericó", correta: false }
                        ],
                        explicacao: "Lucas 7:11 - E aconteceu, pouco depois, ir ele à cidade chamada Naim.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Na parábola dos dois devedores, quem Jesus disse que amaria mais?",
                        opcoes: [
                            { numero: 1, texto: "Aquele a quem se perdoou menos", correta: false },
                            { numero: 2, texto: "Aquele que nunca deveu nada", correta: false },
                            { numero: 3, texto: "O que pagou a dívida rápido", correta: false },
                            { numero: 4, texto: "Aquele a quem se perdoou mais", correta: true }
                        ],
                        explicacao: "Lucas 7:43 - Respondeu Simão: Tenho para mim que é aquele a quem mais perdoou.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        8: {
            titulo: "Parábolas e o Domínio sobre a Natureza",
            texto: ` ¹ E aconteceu, depois disso, que andava de cidade em cidade e de aldeia em aldeia, pregando e anunciando o evangelho do Reino de Deus; e os doze iam com ele,
² e também algumas mulheres que haviam sido curadas de espíritos malignos e de enfermidades: Maria, chamada Madalena, da qual saíram sete demônios;
³ e Joana, mulher de Cuza, procurador de Herodes, e Suzana, e muitas outras que o serviam com suas fazendas.
⁴ E, ajuntando-se uma grande multidão, e vindo ter com ele gente de todas as cidades, disse por parábolas:
⁵ Um semeador saiu a semear a sua semente, e, quando semeava, caiu alguma junto do caminho e foi pisada, e as aves do céu a comeram.
⁶ E outra caiu sobre pedra e, nascida, secou-se, pois que não tinha umidade.
⁷ E outra caiu entre espinhos, e, crescendo com ela os espinhos, a sufocaram;
⁸ E outra caiu em boa terra e, nascida, produziu fruto, cento por um. Dizendo ele estas coisas, clamava: Quem tem ouvidos para ouvir, que ouça.
⁹ E os seus discípulos o interrogaram, dizendo: Que parábola é esta?
¹⁰ E ele disse: A vós vos é dado conhecer os mistérios do Reino de Deus, mas aos outros, por parábolas,para que, vendo, não vejam e, ouvindo, não entendam.
¹¹ Estaé, pois, a parábola: a semente é a palavra de Deus;
¹² e os que estão junto do caminho, estes são os que ouvem; depois, vem o diabo e tira-lhes do coração a palavra, para que se não salvem, crendo;
¹³ e os que estão sobre pedra, estes são os que, ouvindo a palavra, a recebem com alegria, mas, como não têm raiz, apenas creem por algum tempo e, no tempo da tentação, se desviam;
¹⁴ e a que caiu entre espinhos, esses são os que ouviram, e, indo por diante, são sufocados com os cuidados, e riquezas, e deleites da vida, e não dão fruto com perfeição;
¹⁵ e a que caiu em boa terra, esses são os que, ouvindo a palavra, a conservam num coração honesto e bom e dão frutocom perseverança.
¹⁶ E ninguém,acendendo uma candeia, a cobre com algum vaso ou a põe debaixo da cama; mas põe-na no velador, para que os que entram vejam a luz.
¹⁷ Porque não há coisaoculta que não haja de manifestar-se, nem escondida que não haja de saber-se e vir à luz.
¹⁸ Vede, pois, como ouvis,porque a qualquer que tiver lhe será dado, e a qualquer que não tiver até o que parece ter lhe será tirado.
¹⁹ E foram ter com ele sua mãe e seus irmãos e não podiam aproximar-se dele, por causa da multidão.
²⁰ E foi-lhe dito: Estão lá fora tua mãe e teus irmãos, que querem ver-te.
²¹ Mas, respondendo ele, disse-lhes: Minha mãe e meus irmãos são aqueles que ouvem a palavra de Deus e a executam.
²² E aconteceu que, num daqueles dias, entrou num barco com seus discípulos e disse-lhes: Passemos para a outra banda do lago. E partiram.
²³ E, navegando eles, adormeceu; e sobreveio uma tempestade de vento no lago, e o barco enchia-se de água, estando eles em perigo.
²⁴ E, chegando-se a ele, o despertaram, dizendo: Mestre, Mestre, estamos perecendo. E ele, levantando-se, repreendeu o vento e a fúria da água; e cessaram, e fez-se bonança.
²⁵ E disse-lhes: Onde está a vossa fé? E eles, temendo, maravilharam-se, dizendo uns aos outros: Quem é este, que até aos ventos e à água manda, e lhe obedecem?
²⁶ E navegaram para a terra dos gadarenos, que está defronte da Galileia.
²⁷ E, quando desceu para terra, saiu-lhe ao encontro, vindo da cidade, um homem que, desde muito tempo, estava possesso de demônios e não andava vestido nem habitava em qualquer casa, mas nos sepulcros.
²⁸ E, quando viu a Jesus, prostrou-se diante dele, exclamando e dizendo com alta voz: Que tenho eu contigo Jesus, Filho do Deus Altíssimo? Peço-te que não me atormentes.
²⁹ Porque tinha ordenado ao espírito imundo que saísse daquele homem; pois já havia muito tempo que o arrebatava. E guardavam-no preso com grilhões e cadeias; mas, quebrando as prisões, era impelido pelo demônio para os desertos.
³⁰ E perguntou-lhe Jesus, dizendo: Qual é o teu nome? E ele disse: Legião; porque tinham entrado nele muitos demônios.
³¹ E rogavam-lhe que os não mandasse para o abismo.
³² E andava pastando ali no monte uma manada de muitos porcos; e rogaram-lhe que lhes concedesse entrar neles; e concedeu-lho.
³³ E, tendo saído os demônios do homem, entraram nos porcos, e a manada precipitou-se de um despenhadeiro no lago e afogou-se.
³⁴ E aqueles que os guardavam, vendo o que acontecera, fugiram e foram anunciá-lo na cidade e nos campos.
³⁵ E saíram a ver o que tinha acontecido e vieram ter com Jesus. Acharam, então, o homem de quem haviam saído os demônios, vestido e em seu juízo, assentado aos pés de Jesus; e temeram.
³⁶ E os que tinham visto contaram-lhes também como fora salvo aquele endemoninhado.
³⁷ E toda a multidão da terra dos gadarenos ao redor lhe rogou que se retirasse deles, porque estavam possuídos de grande temor. E, entrando ele no barco, voltou.
³⁸ E aquele homem de quem haviam saído os demônios rogou-lhe que o deixasse estar com ele; mas Jesus o despediu, dizendo:
³⁹ Torna para tua casa e conta quão grandes coisas te fez Deus. E ele foi apregoando por toda a cidade quão grandes coisas Jesus lhe tinha feito.
⁴⁰ E aconteceu que, quando voltou Jesus, a multidão o recebeu, porque todos o estavam esperando.
⁴¹ E eis que chegou um varão de nome Jairo, que era príncipe da sinagoga; e, prostrando-se aos pés de Jesus, rogava-lhe que entrasse em sua casa;
⁴² porque tinha uma filha única, quase de doze anos, que estava à morte.
  E, indo ele, apertava-o a multidão.
⁴³ E uma mulher, que tinha um fluxo de sangue, havia doze anos, e gastara com os médicos todos os seus haveres, e por nenhum pudera ser curada,
⁴⁴ chegando por detrás dele, tocou na orla da sua veste, e logo estancou o fluxo do seu sangue.
⁴⁵ E disse Jesus: Quem é que me tocou? E, negando todos, disse Pedro e os que estavam com ele: Mestre, a multidão te aperta e te oprime, e dizes: Quem é que me tocou?
⁴⁶ E disse Jesus: Alguém me tocou,porque bem conheci que de mim saiu virtude.
⁴⁷ Então, vendo a mulher que não podia ocultar-se, aproximou-se tremendo e, prostrando-se ante ele, declarou-lhe diante de todo o povo a causa por que lhe havia tocado e como logo sarara.
⁴⁸ E ele lhe disse: Tem bom ânimo, filha, a tua fé te salvou; vai em paz.
⁴⁹ Estando ele ainda falando, chegou um da casa do príncipe da sinagoga, dizendo: A tua filha já está morta; não incomodes o Mestre.
⁵⁰ Jesus, porém, ouvindo-o, respondeu-lhe, dizendo: Não temas; crê somente, e será salva.
⁵¹ E, entrando em casa, a ninguém deixou entrar, senão a Pedro, e a Tiago, e a João, e ao pai, e a mãe da menina.
⁵² E todos choravam e a pranteavam; e ele disse: Não choreis; não está morta,mas dorme.
⁵³ E riam-se dele, sabendo que estava morta.
⁵⁴ Mas ele, pegando-lhe na mão, clamou, dizendo: Levanta-te 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Na parábola do semeador, o que representa a semente?",
                        opcoes: [
                            { numero: 1, texto: "O dinheiro", correta: false },
                            { numero: 2, texto: "A palavra de Deus", correta: true },
                            { numero: 3, texto: "O coração do homem", correta: false },
                            { numero: 4, texto: "A igreja", correta: false }
                        ],
                        explicacao: "Lucas 8:11 - A semente é a palavra de Deus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus fez para cessar a tempestade no lago?",
                        opcoes: [
                            { numero: 1, texto: "Começou a remar", correta: false },
                            { numero: 2, texto: "Orou ao Pai silenciosamente", correta: false },
                            { numero: 3, texto: "Repreendeu o vento e a fúria da água", correta: true },
                            { numero: 4, texto: "Jogou óleo nas águas", correta: false }
                        ],
                        explicacao: "Lucas 8:24 - Levantando-se, repreendeu o vento e a fúria da água; e cessaram.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual era o nome do homem de quem saíram muitos demônios em Gadara?",
                        opcoes: [
                            { numero: 1, texto: "Legião", correta: true },
                            { numero: 2, texto: "Belzebu", correta: false },
                            { numero: 3, texto: "Satanás", correta: false },
                            { numero: 4, texto: "Anticristo", correta: false }
                        ],
                        explicacao: "Lucas 8:30 - Respondeu ele: Legião; porque tinham entrado nele muitos demônios.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        9: {
            titulo: "A Missão e a Transfiguração",
            texto: `¹ E, convocando os seus doze discípulos, deu-lhes virtude e poder sobre todos os demônios e para curarem enfermidades;
² e enviou-os a pregar o Reino de Deus e a curar os enfermos.
³ E disse-lhes: Nada leveis convosco para o caminho, nem bordões, nem alforje, nem pão, nem dinheiro, nem tenhais duas vestes.
⁴ E, em qualquer casa em que entrardes,ficai ali e de lá saireis.
⁵ E, se em qualquer cidade vos não receberem,saindo vós dali, sacudi o pó dos vossospés, em testemunho contra eles.
⁶ E, saindo eles, percorreram todas as aldeias, anunciando o evangelho e fazendo curas por toda a parte.
⁷ E o tetrarca Herodes ouvia tudo o que se passava e estava em dúvida, porque diziam alguns que João ressuscitara dos mortos,
⁸ e outros, que Elias tinha aparecido, e outros, que um profeta dos antigos havia ressuscitado.
⁹ E disse Herodes: A João mandei eu degolar; quem é, pois, este de quem ouço dizer tais coisas? E procurava vê-lo.
¹⁰ E, regressando os apóstolos, contaram-lhe tudo o que tinham feito. E, tomando-os consigo, retirou-se para um lugar deserto de uma cidade chamada Betsaida.
¹¹ E, sabendo-o a multidão, o seguiu; e ele os recebeu, e falava-lhes do Reino de Deus, e sarava os que necessitavam de cura.
¹² E já o dia começava a declinar; então, chegando-se a ele os doze, disseram-lhe: Despede a multidão, para que, indo aos campos e aldeias ao redor, se agasalhem e achem o que comer, porque aqui estamos em lugar deserto.
¹³ Mas ele lhes disse: Dai-lhes vós de comer. E eles disseram: Não temos senão cinco pães e dois peixes, salvo se nós próprios formos comprar comida para todo este povo.
¹⁴ Porquanto estavam ali quase cinco mil homens. Disse, então, aos seus discípulos: Fazei-os assentar, em grupos de cinquenta em cinquenta.
¹⁵ E assim o fizeram, fazendo-os assentar a todos.
¹⁶ E, tomando os cinco pães e os dois peixes e olhando para o céu, abençoou-os, e partiu-os, e deu-os aos seus discípulos para os porem diante da multidão.
¹⁷ E comeram todos e saciaram-se; e levantaram, do que lhes sobejou, doze cestos de pedaços.
¹⁸ E aconteceu que, estando ele orando em particular, estavam com ele os discípulos; e perguntou-lhes, dizendo: Quem diz a multidão que eu sou?
¹⁹ E, respondendo eles, disseram: João Batista; outros, Elias, e outros, que um dos antigos profetas ressuscitou.
²⁰ E disse-lhes: E vós quem dizeis que eu sou? E, respondendo Pedro, disse: O Cristo de Deus.
²¹ E, admoestando-os, mandou que a ninguém referissem isso,
²² dizendo: É necessário que o Filho do Homem padeça muitas coisas, e seja rejeitado dos anciãos e dos escribas, e seja morto, e ressuscite ao terceiro dia.
²³ E dizia a todos: Se alguém quer vir após mim, negue-se a si mesmo, e tome cada dia a sua cruz, e siga-me.
²⁴ Porque qualquer que quiser salvar a suavida perdê-la-á; mas qualquer que, por amor de mim, perder a sua vida a salvará.
²⁵ Porqueque aproveita ao homem granjear o mundo todo, perdendo-se ou prejudicando-se a si mesmo?
²⁶ Porquequalquer que de mim e das minhas palavras se envergonhar, dele se envergonhará o Filho do Homem, quando vier na sua glória e na do Pai e dos santos anjos.
²⁷ E em verdadevos digo que, dos que aqui estão, alguns há que não provarão a morte até que vejam o Reino de Deus.
²⁸ E aconteceu que, quase oito dias depois dessas palavras, tomou consigo a Pedro, a João e a Tiago e subiu ao monte a orar.
²⁹ E, estando ele orando, transfigurou-se a aparência do seu rosto, e as suas vestes ficaram brancas e mui resplandecentes.
³⁰ E eis que estavam falando com ele dois varões, que eram Moisés e Elias,
³¹ os quais apareceram com glória e falavam da sua morte, a qual havia de cumprir-se em Jerusalém.
³² E Pedro e os que estavam com ele estavam carregados de sono; e, quando despertaram, viram a sua glória e aqueles dois varões que estavam com ele.
³³ E aconteceu que, quando aqueles se apartaram dele, disse Pedro a Jesus: Mestre, bom é que nós estejamos aqui e façamos três tendas, uma para ti, uma para Moisés e uma para Elias, não sabendo o que dizia.
³⁴ E, dizendo ele isso, veio uma nuvem que os cobriu com a sua sombra; e, entrando eles na nuvem, temeram.
³⁵ E saiu da nuvem uma voz que dizia: Este é o meu Filho amado; a ele ouvi.
³⁶ E, tendo soado aquela voz, Jesus foi achado só; e eles calaram-se e, por aqueles dias, não contaram a ninguém nada do que tinham visto.
³⁷ E aconteceu, no dia seguinte, que, descendo eles do monte, lhes saiu ao encontro uma grande multidão.
³⁸ E eis que um homem da multidão clamou, dizendo, Mestre, peço-te que olhes para meu filho, porque é o único que eu tenho.
³⁹ Eis que um espírito o toma, e de repente clama, e o despedaça até espumar; e só o larga depois de o ter quebrantado.
⁴⁰ E roguei aos teus discípulos que o expulsassem, e não puderam.
⁴¹ E Jesus, respondendo, disse: Ó geração incrédula e perversa! Até quando estarei ainda convosco e vos sofrerei? Traze-me cá o teu filho.
⁴² E, quando vinha chegando, o demônio o derribou e convulsionou; porém Jesus repreendeu o espírito imundo, e curou o menino, e o entregou a seu pai.
⁴³ E todos pasmavam da majestade de Deus.
  E, maravilhando-se todos de todas as coisas que Jesus fazia, disse aos seus discípulos:
⁴⁴ Ponde vósestas palavras em vossos ouvidos, porque o Filho do Homem será entregue nas mãos dos homens.
⁴⁵ Mas eles não entendiam essa palavra, que lhes era encoberta, para que a não compreendessem; e temiam interrogá-lo acerca dessa palavra.
⁴⁶ E suscitou-se entre eles uma discussão sobre qual deles seria o maior.
⁴⁷ Mas Jesus, vendo o pensamento do coração deles, tomou uma criança, pô-la junto a si
⁴⁸ e disse-lhes: Qualquer que receber esta criança em meu nome recebe-me a mim; e qualquer que me recebe a mim recebe o que me enviou;porque aquele que entre vós todos for o menor, esse mesmo é grande.
⁴⁹ E, respondendo João, disse: Mestre, vimos um que em teu nome expulsava os demônios, e lho proibimos, porque não te segue conosco.
⁵⁰ E Jesus lhes disse: Não o proibais,porque quem não é contra nós é por nós.
⁵¹ E aconteceu que, completando-se os dias para a sua assunção, manifestou o firme propósito de ir a Jerusalém.
⁵² E mandou mensageiros diante da sua face; e, indo eles, entraram numa aldeia de samaritanos, para lhe prepararem pousada.
⁵³ Mas não o receberam, porque o seu aspecto era como de quem ia a Jerusalém.
⁵⁴ E os discípulos Tiago e João, vendo isso, disseram: Senhor, queres que digamos que desça fogo do céu e os consuma, como Elias também fez?
⁵⁵ Voltando-se, porém, repreendeu-os e disse: Vós não sabeis de que espírito sois.
⁵⁶ Porqueo Filho do Homem não veio para destruir as almas dos homens, mas para salvá-las. E foram para outra aldeia.
⁵⁷ E aconteceu que, indo eles pelo caminho, lhe disse um: Senhor, seguir-te-ei para onde quer que fores.
⁵⁸ E disse-lhe Jesus: As raposas têm covis, e as aves do céu, ninhos, mas o Filho do Homem não tem onde reclinar a cabeça.
⁵⁹ E disse a outro: Segue-me. Mas ele respondeu: Senhor, deixa que primeiro eu  

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Com quantos pães e peixes Jesus alimentou os cinco mil?",
                        opcoes: [
                            { numero: 1, texto: "Sete pães e três peixes", correta: false },
                            { numero: 2, texto: "Doze pães e um peixe", correta: false },
                            { numero: 3, texto: "Cinco pães e dois peixes", correta: true },
                            { numero: 4, texto: "Três pães e dois peixes", correta: false }
                        ],
                        explicacao: "Lucas 9:13 - Não temos senão cinco pães e dois peixes.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quais discípulos Jesus levou consigo ao monte para a Transfiguração?",
                        opcoes: [
                            { numero: 1, texto: "Pedro, João e Tiago", correta: true },
                            { numero: 2, texto: "André, Filipe e Bartolomeu", correta: false },
                            { numero: 3, texto: "Pedro, André e Tiago", correta: false },
                            { numero: 4, texto: "Os doze apóstolos", correta: false }
                        ],
                        explicacao: "Lucas 9:28 - Tomou consigo a Pedro, a João e a Tiago, e subiu ao monte.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que aconteceu com a aparência do rosto de Jesus na transfiguração?",
                        opcoes: [
                            { numero: 1, texto: "Tornou-se escuro", correta: false },
                            { numero: 2, texto: "Ficou coberto por um véu", correta: false },
                            { numero: 3, texto: "Tornou-se diferente e suas vestes brancas e mui resplandecentes", correta: true },
                            { numero: 4, texto: "Ele ficou invisível", correta: false }
                        ],
                        explicacao: "Lucas 9:29 - A aparência do seu rosto se transfigurou.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        10: {
            titulo: "O Bom Samaritano e Maria e Marta",
            texto: `¹ E, depois disso, designou o Senhor ainda outros setenta e mandou-os adiante da sua face, de dois em dois, a todas as cidades e lugares aonde ele havia de ir.
² E dizia-lhes: Grande é, em verdade, a seara, mas os obreiros são poucos; rogai, pois, ao Senhor da seara que envie obreiros para a sua seara.
³ Ide;eis que vos mando como cordeiros ao meio de lobos.
⁴ E não leveis bolsa,nem alforje, nem sandálias; e a ninguém saudeis pelo caminho.
⁵ E, em qualquercasa onde entrardes, dizei primeiro: Paz seja nesta casa.
⁶ E, se ali houver algum filho de paz, repousará sobreele a vossa paz; e, se não, voltará para vós.
⁷ E ficai na mesma casa,comendo e bebendo do que eles tiverem,pois digno é o obreiro de seu salário.Não andeis de casa em casa.
⁸ E, em qualquer cidade em que entrardes e vos receberem, comei do que vos puserem diante.
⁹ E curaios enfermos que nela houver e dizei-lhes:É chegado a vós o Reino de Deus.
¹⁰ Mas, em qualquer cidade em que entrardes e vos não receberem, saindo por suas ruas, dizei:
¹¹ Até o póque da vossa cidade se nos pegou sacudimos sobre vós. Sabei, contudo, isto: já o Reino de Deus é chegado a vós.
¹² E digo-vosque mais tolerância haverá naquele dia para Sodoma do que para aquela cidade.
¹³ Ai de ti, Corazim,ai de ti, Betsaida!Porque, se em Tiro e em Sidom se fizessem as maravilhas que em vós foram feitas, já há muito, assentadas em saco de pano grosseiro e cinza, se teriam arrependido.
¹⁴ Portanto, para Tiro e Sidom haverá menos rigor no Dia do Juízo do que para vós.
¹⁵ E tu, Cafarnaum,serás levantada até ao céu? Até ao inferno serás abatida.
¹⁶ Quem vos ouve a vósa mim me ouve; e quem vos rejeita a vós a mim me rejeita; e quem a mim me rejeita rejeita aquele que me enviou.
¹⁷ E voltaram os setenta com alegria, dizendo: Senhor, pelo teu nome, até os demônios se nos sujeitam.
¹⁸ E disse-lhes: Eu via Satanás, como raio, cair do céu.
¹⁹ Eis que vosdou poder para pisar serpentes, e escorpiões, e toda a força do Inimigo, e nada vos fará dano algum.
²⁰ Mas não vos alegreis porque se vos sujeitem os espíritos; alegrai-vos, antes, por estaro vosso nome escrito nos céus.
²¹ Naquela mesma hora, se alegrou Jesus no Espírito Santo e disse: Graças te dou, ó Pai, Senhor do céu e da terra, porque escondeste essas coisas aos sábios e inteligentes e as revelaste às criancinhas; assim é, ó Pai, porque assim te aprouve.
²² Tudopor meu Pai me foi entregue; e ninguém conhece quem é o Filho, senão o Pai, nem quem é o Pai, senão o Filho e aquele a quem o Filho o quiser revelar.
²³ E, voltando-se para os discípulos, disse-lhes em particular: Bem-aventurados os olhos que veem o que vós vedes,
²⁴ pois vos digo que muitos profetase reis desejaram ver o que vós vedes e não o viram; e ouvir o que ouvis e não o ouviram.
²⁵ E eis que se levantou um certo doutor da lei, tentando-o e dizendo: Mestre, que farei para herdar a vida eterna?
²⁶ E ele lhe disse: Que está escrito na lei? Como lês?
²⁷ E, respondendo ele, disse: Amarás ao Senhor, teu Deus, de todo o teu coração, e de toda a tua alma, e de todas as tuas forças, e de todo o teu entendimento e ao teu próximo como a ti mesmo.
²⁸ E disse-lhe: Respondeste bem; faze issoe viverás.
²⁹ Ele, porém, querendo justificar-se a si mesmo, disse a Jesus: E quem é o meu próximo?
³⁰ E, respondendo Jesus, disse: Descia um homem de Jerusalém para Jericó, e caiu nas mãos dos salteadores, os quais o despojaram e, espancando-o, se retiraram, deixando-o meio morto.
³¹ E, ocasionalmente, descia pelo mesmo caminho certo sacerdote; e, vendo-o,passou de largo.
³² E, de igual modo, também um levita, chegando àquele lugar e vendo-o, passou de largo.
³³ Mas umsamaritano que ia de viagem chegou ao pé dele e, vendo-o, moveu-se de íntima compaixão.
³⁴ E, aproximando-se, atou-lhe as feridas, aplicando-lhes azeite e vinho; e, pondo-o sobre a sua cavalgadura, levou-o para uma estalagem e cuidou dele;
³⁵ E, partindo aooutro dia, tirou dois dinheiros, e deu-os ao hospedeiro, e disse-lhe: Cuida dele, e tudo o que de mais gastares eu to pagarei, quando voltar.
³⁶ Qual, pois, destes três te parece que foi o próximo daquele que caiu nas mãos dos salteadores?
³⁷ E ele disse: O que usou de misericórdia para com ele. Disse, pois, Jesus: Vai e faze da mesma maneira.
³⁸ E aconteceu que, indo eles de caminho, entrou numa aldeia; e certa mulher, por nome Marta, o recebeu em sua casa.
³⁹ E tinha esta uma irmã, chamada Maria, a qual, assentando-se também aos pés de Jesus, ouvia a sua palavra.
⁴⁰ Marta, porém, andava distraída em muitos serviços e, aproximando-se, disse: Senhor, não te importas que minha irmã me deixe servir só? Dize-lhe, pois, que me ajude.
⁴¹ E, respondendo Jesus, disse-lhe: Marta, Marta, estás ansiosa e afadigada com muitas coisas,
⁴² masuma só  
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quantos outros discípulos Jesus designou para ir adiante dele de dois em dois?",
                        opcoes: [
                            { numero: 1, texto: "Doze", correta: false },
                            { numero: 2, texto: "Quarenta", correta: false },
                            { numero: 3, texto: "Setenta", correta: true },
                            { numero: 4, texto: "Cem", correta: false }
                        ],
                        explicacao: "Lucas 10:1 - Designou o Senhor ainda outros setenta.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Na parábola do bom samaritano, quem foram os dois que passaram e não ajudaram o homem?",
                        opcoes: [
                            { numero: 1, texto: "Um fariseu e um escriba", correta: false },
                            { numero: 2, texto: "Um sacerdote e um levita", correta: true },
                            { numero: 3, texto: "Um soldado e um publicano", correta: false },
                            { numero: 4, texto: "Um pastor e um lavrador", correta: false }
                        ],
                        explicacao: "Lucas 10:31-32 - Descia pelo mesmo caminho certo sacerdote... e de igual modo também um levita.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Marta estava fazendo enquanto Maria ouvia Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Dormindo", correta: false },
                            { numero: 2, texto: "Limpando o jardim", correta: false },
                            { numero: 3, texto: "Ocupada com muito serviço", correta: true },
                            { numero: 4, texto: "Orando no quarto", correta: false }
                        ],
                        explicacao: "Lucas 10:40 - Marta, porém, andava distraída em muitos serviços.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        11: {
            titulo: "O Pai Nosso e o Sinal de Jonas",
            texto: `¹ E aconteceu que, estando ele a orar num certo lugar, quando acabou, lhe disse um dos seus discípulos: Senhor, ensina-nos a orar, como também João ensinou aos seus discípulos.
² E ele lhes disse: Quando orardes, dizei: Pai, santificado seja o teu nome; venha o teu Reino;
³ dá-nos cada dia o nosso pão cotidiano;
⁴ perdoa-nos os nossos pecados, pois também nós perdoamos a qualquer que nos deve; e não nos conduzas em tentação, mas livra-nos do mal.
⁵ Disse-lhes também: Qual de vós terá um amigo e, se for procurá-lo à meia-noite, lhe disser: Amigo, empresta-me três pães,
⁶ pois que um amigo meu chegou a minha casa, vindo de caminho, e não tenho o que apresentar-lhe;
⁷ se ele, respondendo de dentro, disser: Não me importunes; já está a porta fechada, e os meus filhos estão comigo na cama; não posso levantar-me para tos dar.
⁸ Digo-vos que, ainda que se não levante a dar-lhospor ser seu amigo, levantar-se-á, todavia, por causa da sua importunação e lhe dará tudo o que houver mister.
⁹ E eu vos digo a vós:Pedi, e dar-se-vos-á; buscai, e achareis; batei, e abrir-se-vos-á;
¹⁰ porque qualquer que pede recebe; e quem busca acha; e a quem bate, abrir-se-lhe-á.
¹¹ E qual o paidentre vós que, se o filho lhe pedir pão, lhe dará uma pedra? Ou também, se lhe pedir peixe, lhe dará por peixe uma serpente?
¹² Ou também, se lhe pedir um ovo, lhe dará um escorpião?
¹³ Pois, se vós, sendo maus, sabeis dar boas dádivas aos vossos filhos, quanto mais dará o Pai celestial o Espírito Santo àqueles que lho pedirem?
¹⁴ E estava ele expulsando um demônio, o qual era mudo. E aconteceu que, saindo o demônio, o mudo falou; e maravilhou-se a multidão.
¹⁵ Mas alguns deles diziam: Ele expulsa os demônios por Belzebu, príncipe dos demônios.
¹⁶ E outros, tentando-o, pediam-lhe um sinal do céu.
¹⁷ Mas, conhecendo ele os seus pensamentos, disse-lhes: Todo reino dividido contra si mesmo será assolado; e a casa dividida contra si mesma cairá.
¹⁸ E, se também Satanás está dividido contra si mesmo, como subsistirá o seu reino? Pois dizeis que eu expulso os demônios por Belzebu.
¹⁹ E, se eu expulso os demônios por Belzebu,por quem os expulsam vossos filhos? Eles, pois, serão os vossos juízes.
²⁰ Mas, se eu expulso os demônios pelo dedo de Deus, certamente, a vós é chegado o Reino de Deus.
²¹ Quando ovalente guarda, armado, a sua casa, em segurança está tudo quanto tem.
²² Mas, sobrevindooutro mais valente do que ele e vencendo-o, tira-lhe toda a armadura em que confiava e reparte os seus despojos.
²³ Quem não é comigoé contra mim; e quem comigo não ajunta espalha.
²⁴ Quando o espíritoimundo tem saído do homem, anda por lugares secos, buscando repouso; e, não o achando, diz: Tornarei para minha casa, de onde saí.
²⁵ E, chegando, acha-a varrida e adornada.
²⁶ Então, vai e leva consigo outros sete espíritos piores do que ele; e, entrando, habitam ali; e o último estado desse homem épior do que o primeiro.
²⁷ E aconteceu que, dizendo ele essas coisas, uma mulher dentre a multidão, levantando a voz, lhe disse: Bem-aventurado o ventre que te trouxe e os peitos em que mamaste!
²⁸ Mas ele disse: Antes, bem-aventurados os que ouvem a palavra de Deus e a guardam.
²⁹ E, ajuntando-se a multidão, começou a dizer: Maligna é esta geração; ela pede um sinal; e não lhe será dado outro sinal, senão o sinal do profeta Jonas.
³⁰ Porquanto assim comoJonas foi sinal para os ninivitas, assim o Filho do Homem o será também para esta geração.
³¹ A rainha doSul se levantará no Dia do Juízo com os homens desta geração e os condenará; pois até dos confins da terra veio ouvir a sabedoria de Salomão; e eis aqui está quem é maior do que Salomão.
³² Os homens de Nínive se levantarão no Dia do Juízo com esta geração e a condenarão;pois se converteram com a pregação de Jonas; e eis aqui está quem é maior do que Jonas.
³³ E ninguém,acendendo uma candeia, a põe em oculto, nem debaixo do alqueire, mas no velador, para que os que entram vejam a luz.
³⁴ A candeiado corpo é o olho. Sendo, pois, o teu olho simples, também todo o teu corpo será luminoso; mas, se for mau, também o teu corpo será tenebroso.
³⁵ Vê, pois, que a luz que em ti há não sejam trevas.
³⁶ Se, pois, todo o teu corpo é luminoso, não tendo em trevas parte alguma, todo será luminoso, como quando a candeia te alumia com o seu resplendor.
³⁷ E, estando ele ainda falando, rogou-lhe um fariseu que fosse jantar com ele; e, entrando, assentou-se à mesa.
³⁸ Mas o fariseu admirou-se, vendo que se não lavara antes do jantar.
³⁹ E o Senhor lhe disse: Agora, vós, fariseus, limpais o exterior do copo e do prato, mas o vossointerior está cheio de rapina e maldade.
⁴⁰ Loucos! O que fez o exterior não fez também o interior?
⁴¹ Dai,antes, esmola do que tiverdes, e eis que tudo vos será limpo.
⁴² Mas ai de vós,fariseus, que dizimais a hortelã, e a arruda, e toda hortaliça e desprezais o Juízo e o amor de Deus! Importava fazer essas coisas e não deixar as outras.
⁴³ Ai de vós, fariseus,que amais os primeiros assentos nas sinagogas e as saudações nas praças!
⁴⁴ Ai de vós,escribas e fariseus hipócritas, que sois como as sepulturas que não aparecem, e os homens que sobre elas andam não o sabem!
⁴⁵ E, respondendo um dos doutores da lei, disse-lhe: Mestre, quando dizes isso também nos afrontas a nós.
⁴⁶ E ele lhe disse: Ai de vós também, doutores da lei,que carregais os homens com cargas difíceis de transportar, e vós mesmos nem ainda com um dos vossos dedos tocais essas cargas!
⁴⁷ Ai de vósque edificais os sepulcros dos profetas, e vossos pais os mataram!
⁴⁸ Bem testificais, pois, que consentis nas obras de vossos pais; porque eles os mataram, e vós edificais os seus sepulcros.
⁴⁹ Por isso, diz também a sabedoria de Deus:Profetas e apóstolos lhes mandarei; e eles matarão uns e perseguirão outros;
⁵⁰ para que desta geração seja requerido o sangue de todos os profetas que, desde a fundação do mundo, foi derramado;
⁵¹ desde o sanguede Abel até ao sangue de Zacarias, que foi morto entre o altar e o templo; assim, vos digo, será requerido desta geração.
⁵² Ai de vós, doutoresda lei, que tirastes a chave da ciência! Vós mesmos não entrastes e impedistes os que entravam.
⁵³ E, dizendo-lhes ele isso, começaram os  

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual sinal Jesus disse que seria dado àquela geração perversa?",
                        opcoes: [
                            { numero: 1, texto: "O sinal de Moisés", correta: false },
                            { numero: 2, texto: "O sinal de Salomão", correta: false },
                            { numero: 3, texto: "O sinal do profeta Jonas", correta: true },
                            { numero: 4, texto: "O sinal de Elias", correta: false }
                        ],
                        explicacao: "Lucas 11:29 - Não lhe será dado outro sinal, senão o sinal do profeta Jonas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Jesus disse que se o olho for mau, como será o corpo?",
                        opcoes: [
                            { numero: 1, texto: "Luminoso", correta: false },
                            { numero: 2, texto: "Tenebroso (em trevas)", correta: true },
                            { numero: 3, texto: "Forte", correta: false },
                            { numero: 4, texto: "Invisível", correta: false }
                        ],
                        explicacao: "Lucas 11:34 - Se o teu olho for mau, também o teu corpo será tenebroso.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "A quem Jesus comparou os escribas e fariseus por causa da hipocrisia?",
                        opcoes: [
                            { numero: 1, texto: "A sepulcros que não aparecem", correta: true },
                            { numero: 2, texto: "A ovelhas sem pastor", correta: false },
                            { numero: 3, texto: "A montanhas de areia", correta: false },
                            { numero: 4, texto: "A árvores secas", correta: false }
                        ],
                        explicacao: "Lucas 11:44 - Sois como as sepulturas que não aparecem.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        12: {
            titulo: "Confissão e o Rico Insensato",
            texto: `¹ Ajuntando-se, entretanto, muitos milhares de pessoas, de sorte que se atropelavam uns aos outros, começou a dizer aos seus discípulos: Acautelai-vos, primeiramente, do fermento dos fariseus, que é a hipocrisia.
² Mas nadahá encoberto que não haja de ser descoberto; nem oculto, que não haja de ser sabido.
³ Porquanto tudo o que em trevas dissestes à luz será ouvido; e o que falastes ao ouvido no gabinete sobre os telhados será apregoado.
⁴ E digo-vos,amigos meus: não temais os que matam o corpo e depois não têm mais o que fazer.
⁵ Mas eu vos mostrarei a quem deveis temer: temei aquele que, depois de matar, tem poder para lançar no inferno; sim, vos digo, a esse temei.
⁶ Não se vendem cinco passarinhos por dois ceitis? E nenhum deles está esquecido diante de Deus.
⁷ E até os cabelos da vossa cabeça estão todos contados. Não temais, pois; mais valeis vós do que muitos passarinhos.
⁸ E digo-vosque todo aquele que me confessar diante dos homens, também o Filho do Homem o confessará diante dos anjos de Deus.
⁹ Mas quem me negar diante dos homens será negado diante dos anjos de Deus.
¹⁰ E a todoaquele que disser uma palavra contra o Filho do Homem ser-lhe-á perdoada, mas ao que blasfemar contra o Espírito Santo não lhe será perdoado.
¹¹ E, quandovos conduzirem às sinagogas, aos magistrados e potestades, não estejais solícitos de como ou do que haveis de responder, nem do que haveis de dizer.
¹² Porque na mesma hora vos ensinará o Espírito Santo o que vos convenha falar.
¹³ E disse-lhe um da multidão: Mestre, dize a meu irmão que reparta comigo a herança.
¹⁴ Mas ele lhe disse: Homem,quem me pôs a mim por juiz ou repartidor entre vós?
¹⁵ E disse-lhes: Acautelai-vos e guardai-vos da avareza, porque a vida de qualquer não consiste na abundância do que possui.
¹⁶ E propôs-lhes uma parábola, dizendo: a herdade de um homem rico tinha produzido com abundância.
¹⁷ E arrazoava ele entre si, dizendo: Que farei? Não tenho onde recolher os meus frutos.
¹⁸ E disse: Farei isto: derribarei os meus celeiros, e edificarei outros maiores, e ali recolherei todas as minhas novidades e os meus bens;
¹⁹ e direi à minhaalma: alma, tens em depósito muitos bens, para muitos anos; descansa, come, bebe e folga.
²⁰ Mas Deus lhe disse: Louco, esta noite te pedirão atua alma, e o que tens preparado para quem será?
²¹ Assim é aquele que para si ajunta tesouros e nãoé rico para com Deus.
²² E disse aos seus discípulos: Portanto, vos digo: não estejais apreensivos pela vossa vida, sobre o que comereis, nem pelo corpo, sobre o que vestireis.
²³ Mais é a vida do que o sustento, e o corpo, mais do que as vestes.
²⁴ Considerai os corvos, que nem semeiam, nem segam, nem têm despensa nem celeiro, e Deusos alimenta; quanto mais valeis vós do que as aves?
²⁵ E qual de vós, sendo solícito, pode acrescentar um côvado à sua estatura?
²⁶ Pois, se nem ainda podeis as coisas mínimas, por que estais ansiosos pelas outras?
²⁷ Considerai os lírios, como eles crescem; não trabalham, nem fiam; e digo-vos que nem ainda Salomão, em toda a sua glória, se vestiu como um deles.
²⁸ E, se Deus assim veste a erva, que hoje está no campo e amanhã é lançada no forno, quanto mais a vós, homens de pequena fé?
²⁹ Não pergunteis, pois, que haveis de comer ou que haveis de beber, e não andeis inquietos.
³⁰ Porque os gentios do mundo buscam todas essas coisas; mas vosso Pai sabe que necessitais delas.
³¹ Buscai, antes,o Reino de Deus, e todas essas coisas vos serão acrescentadas.
³² Não temas,ó pequeno rebanho, porque a vosso Pai agradou dar-vos o Reino.
³³ Vendei o que tendes, edai esmolas, e fazei para vós bolsas que não se envelheçam, tesouro nos céus que nunca acabe, aonde não chega ladrão, e a traça não rói.
³⁴ Porque onde estiver o vosso tesouro, ali estará também o vosso coração.
³⁵ Estejam cingidos osvossos lombos, e acesas, as vossas candeias.
³⁶ E sede vós semelhantes aos homens que esperam o seu senhor, quando houver de voltar das bodas, para que, quando vier e bater, logo possam abrir-lhe.
³⁷ Bem-aventurados aqueles servos, osquais, quando o Senhor vier, achar vigiando! Em verdade vos digo que se cingirá, e os fará assentar à mesa, e, chegando-se, os servirá.
³⁸ E, se vier na segunda vigília, e se vier na terceira vigília, e os achar assim, bem-aventurados são os tais servos.
³⁹ Sabei, porém, isto:se o pai de família soubesse a que hora havia de vir o ladrão, vigiaria e não deixaria minar a sua casa.
⁴⁰ Portanto, estai vós tambémapercebidos; porque virá o Filho do Homem à hora que não imaginais.
⁴¹ E disse-lhe Pedro: Senhor, dizes essa parábola a nós ou também a todos?
⁴² E disse o Senhor: Qual é, pois, o mordomo fiel e prudente, a quem o senhor pôs sobre os seus servos, para lhes dar a tempo a ração?
⁴³ Bem-aventurado aquele servo a quem o senhor,quando vier, achar fazendo assim.
⁴⁴ Em verdade vos digo que sobre todos os seus bens o porá.
⁴⁵ Mas, se aquele servo disser em seu coração: O meu senhor tarda em vir, e começar a espancar os criados e criadas, e a comer, e a beber, e a embriagar-se,
⁴⁶ virá o Senhor daquele servo no dia em que o não espera e numa hora que ele não sabe, e separá-lo-á, e lhe dará a sua parte com os infiéis.
⁴⁷ E o servoque soube a vontade do seu senhor e não se aprontou, nem fez conforme a sua vontade, será castigado com muitos açoites.
⁴⁸ Mas oque a não soube e fez coisas dignas de açoites com poucos açoites será castigado. E a qualquer que muito for dado, muito se lhe pedirá, e ao que muito se lhe confiou, muito mais se lhe pedirá.
⁴⁹ Vim lançar fogo na terrae que mais quero, se já está aceso?
⁵⁰ Importa, porém, que eu seja batizado com um certo batismo,e como me angustio até que venha a cumprir-se!
⁵¹ Cuidaisvós que vim trazer paz à terra? Não, vos digo, mas, antes, dissensão.
⁵² Porque, daqui emdiante, estarão cinco divididos numa casa: três contra dois, e dois contra três.
⁵³ O pai estará dividido contra o filho, e o filho, contra o pai, a mãe, contra a filha, e a filha, contra a mãe, a sogra, contra sua nora, e a nora, contra sua sogra.
⁵⁴ E dizia também à multidão: Quando vedes a nuvem que vem do ocidente, logo dizeis: Lá vem chuva; e assim sucede.
⁵⁵ E, quando assopra o vento sul, dizeis: Haverá calma; e assim sucede.
⁵⁶ Hipócritas, sabeis discernir a face da terra e do céu; como não sabeis, então, discernir este tempo?
⁵⁷ E por que não julgais também por vós mesmos o que é justo?
⁵⁸ Quando,pois, vais com o teu adversário ao magistrado, procura livrar-te dele no caminho; para que não suceda que te conduza  

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual aviso Jesus deu sobre o fermento dos fariseus?",
                        opcoes: [
                            { numero: 1, texto: "Que ele era muito bom", correta: false },
                            { numero: 2, texto: "Que ele representa a hipocrisia", correta: true },
                            { numero: 3, texto: "Que ele faz o pão crescer", correta: false },
                            { numero: 4, texto: "Que deviam usá-lo sempre", correta: false }
                        ],
                        explicacao: "Lucas 12:1 - Acautelai-vos do fermento dos fariseus, que é a hipocrisia.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Na parábola do rico insensato, o que Deus disse a ele na noite em que ele planejava seus novos celeiros?",
                        opcoes: [
                            { numero: 1, texto: "Parabéns pelo sucesso", correta: false },
                            { numero: 2, texto: "Louco, esta noite te pedirão a tua alma", correta: true },
                            { numero: 3, texto: "Aumente ainda mais os celeiros", correta: false },
                            { numero: 4, texto: "Venda tudo o que tem", correta: false }
                        ],
                        explicacao: "Lucas 12:20 - Mas Deus lhe disse: Louco, esta noite te pedirão a tua alma.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus disse que acontece com os cabelos da nossa cabeça?",
                        opcoes: [
                            { numero: 1, texto: "Eles caem todos os dias", correta: false },
                            { numero: 2, texto: "Ninguém pode contá-los", correta: false },
                            { numero: 3, texto: "Estão todos contados por Deus", correta: true },
                            { numero: 4, texto: "Eles ficam brancos com o tempo", correta: false }
                        ],
                        explicacao: "Lucas 12:7 - E até os cabelos da vossa cabeça estão todos contados.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        13: {
            titulo: "Arrependimento e a Porta Estreita",
            texto: `¹ E, naquele mesmo tempo, estavam presentes ali alguns que lhe falavam dos galileus cujo sangue Pilatos misturara com os seus sacrifícios.
² E, respondendo Jesus, disse-lhes: Cuidais vós que esses galileus foram mais pecadores do que todos os galileus, por terem padecido tais coisas?
³ Não, vos digo; antes, se vos não arrependerdes, todos de igual modo perecereis.
⁴ E aqueles dezoito sobre os quais caiu a torre de Siloé e os matou, cuidais que foram maisculpados do que todos quantos homens habitam em Jerusalém?
⁵ Não, vos digo; antes, se vos não arrependerdes, todos de igual modo perecereis.
⁶ E dizia esta parábola: Umcerto homem tinha uma figueira plantada na sua vinha e foi procurar nela fruto, não o achando.
⁷ E disse ao vinhateiro: Eis que há três anos venho procurar fruto nesta figueira e não o acho; corta-a. Por que ela ocupa ainda a terra inutilmente?
⁸ E, respondendo ele, disse-lhe: Senhor, deixa-a este ano, até que eu a escave e a esterque;
⁹ e, se der fruto, ficará; e, se não, depois a mandarás cortar.
¹⁰ E ensinava no sábado, numa das sinagogas.
¹¹ E eis que estava ali uma mulher que tinha um espírito de enfermidade havia já dezoito anos; e andava curvada e não podia de modo algum endireitar-se.
¹² E, vendo-a Jesus, chamou-a a si, e disse-lhe: Mulher, estás livre da tua enfermidade.
¹³ E impôs as mãos sobre ela, e logo se endireitou e glorificava a Deus.
¹⁴ E, tomando a palavra o príncipe da sinagoga, indignado porque Jesus curava no sábado, disse à multidão: Seis dias há em que é mister trabalhar; nestes, pois, vinde para serdes curados e não no dia de sábado.
¹⁵ Respondeu-lhe, porém, o Senhor e disse: Hipócrita,no sábado não desprende da manjedoura cada um de vós o seu boi ou jumento e não o leva a beber água?
¹⁶ E não convinha soltar desta prisão, no dia de sábado, esta filhade Abraão, a qual há dezoito anos Satanás mantinha presa?
¹⁷ E, dizendo ele isso, todos os seus adversários ficaram envergonhados, e todo o povo se alegrava por todas as coisas gloriosas que eram feitas por ele.
¹⁸ E dizia: A que é semelhante o Reino de Deus, e a que o compararei?
¹⁹ É semelhante ao grão de mostarda que um homem, tomando-o, lançou na sua horta; e cresceu e fez-se grande árvore, e em seus ramos se aninharam as aves do céu.
²⁰ E disse outra vez: A que compararei o Reino de Deus?
²¹ É semelhante ao fermento que uma mulher, tomando-o, escondeu em três medidas de farinha, até que tudo levedou.
²² E percorria as cidades e as aldeias, ensinando e caminhando para Jerusalém.
²³ E disse-lhe um: Senhor, são poucos os que se salvam? E ele lhe respondeu:
²⁴ Porfiai por entrar pela porta estreita,porque eu vos digo que muitos procurarão entrar e não poderão.
²⁵ Quando o pai de família se levantar e cerrar a porta,e começardes a estar de fora e a bater à porta, dizendo: Senhor, Senhor, abre-nos; e, respondendo ele, vos disser: Não sei de onde vós sois,
²⁶ então, começareis a dizer: Temos comido e bebido na tua presença, e tu tens ensinado nas nossas ruas.
²⁷ E ele vos responderá:Digo-vos que não sei de onde vós sois;apartai-vos de mim, vós todos os que praticais a iniquidade.
²⁸ Ali, haverá choro e ranger de dentes,quando virdes Abraão, e Isaque, e Jacó, e todos os profetas no Reino de Deus e vós, lançados fora.
²⁹ E virão do Oriente, e do Ocidente, e do Norte, e do Sul e assentar-se-ão à mesa no Reino de Deus.
³⁰ E eis que derradeiros háque serão os primeiros; e primeiros há que serão os derradeiros.
³¹ Naquele mesmo dia, chegaram uns fariseus, dizendo-lhe: Sai e retira-te daqui, porque Herodes quer matar-te.
³² E lhes respondeu: Ide e dizei àquela raposa: eis que eu expulso demônios, e efetuo curas, hoje e amanhã, e, no terceiro dia, souconsumado.
³³ Importa, porém, caminhar hoje, amanhã e no dia seguinte, para que não suceda que morra um profeta fora de Jerusalém.
³⁴ Jerusalém,Jerusalém, que matas os profetas e apedrejas os que te são enviados! Quantas vezes quis eu ajuntar os teus filhos, como a galinha ajunta os seus pintos debaixo das asas,  

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que aconteceria se o povo não se arrependesse, segundo o exemplo da torre de Siloé?",
                        opcoes: [
                            { numero: 1, texto: "Ficariam ricos", correta: false },
                            { numero: 2, texto: "Seriam levados para o Egito", correta: false },
                            { numero: 3, texto: "Todos igualmente pereceriam", correta: true },
                            { numero: 4, texto: "A torre cairia de novo", correta: false }
                        ],
                        explicacao: "Lucas 13:5 - Se não vos arrependerdes, todos de igual modo perecereis.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Por quantos anos uma mulher esteve encurvada por um espírito de enfermidade antes de ser curada?",
                        opcoes: [
                            { numero: 1, texto: "7 anos", correta: false },
                            { numero: 2, texto: "12 anos", correta: false },
                            { numero: 3, texto: "18 anos", correta: true },
                            { numero: 4, texto: "38 anos", correta: false }
                        ],
                        explicacao: "Lucas 13:11 - E eis que estava ali uma mulher que tinha um espírito de enfermidade havia dezoito anos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como é a porta que Jesus disse que devemos nos esforçar para entrar?",
                        opcoes: [
                            { numero: 1, texto: "Larga", correta: false },
                            { numero: 2, texto: "De ouro", correta: false },
                            { numero: 3, texto: "Invisível", correta: false },
                            { numero: 4, texto: "Estreita", correta: true }
                        ],
                        explicacao: "Lucas 13:24 - Porfiai por entrar pela porta estreita.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        14: {
            titulo: "A Grande Ceia e o Custo do Discipulado",
            texto: `¹ Aconteceu, num sábado, que, entrando ele em casa de um dos principais dos fariseus para comer pão, eles o estavam observando.
² E eis que estava ali diante dele um certo homem hidrópico.
³ E Jesus, tomando a palavra, falou aos doutores da lei e aos fariseus, dizendo: É lícito curar no sábado?
⁴ Eles, porém, calaram-se. E tomando-o, o curou e despediu.
⁵ E disse-lhes: Qual será de vós o que, caindo-lhe num poço, em dia de sábado, o jumento ou o boi, o não tire logo?
⁶ E nada lhe podiam replicar sobre isso.
⁷ E disse aos convidados uma parábola, reparando como escolhiam os primeiros assentos, dizendo-lhes:
⁸ Quando por alguém fores convidado às bodas, não te assentes no primeiro lugar, para que não aconteça que esteja convidado outro mais digno do que tu,
⁹ e, vindo o que te convidou a ti e a ele, te diga: Dá o lugar a este; e então, com vergonha, tenhas de tomar o derradeiro lugar.
¹⁰ Mas, quando foresconvidado, vai e assenta-te no derradeiro lugar, para que, quando vier o que te convidou, te diga: Amigo, assenta-te mais para cima. Então, terás honra diante dos que estiverem contigo à mesa.
¹¹ Porquanto, qualquer que a si mesmo se exaltar será humilhado,e aquele que a si mesmo se humilhar será exaltado.
¹² E dizia também ao que o tinha convidado: Quando deres um jantar ou uma ceia, não chames os teus amigos, nem os teus irmãos, nem os teus parentes, nem vizinhos ricos, para que não suceda que também eles te tornem a convidar, e te seja isso recompensado.
¹³ Mas, quando fizeres convite, chama os pobres,aleijados, mancos e cegos
¹⁴ e serás bem-aventurado; porque eles não têm com que to recompensar; mas recompensado serás na ressurreição dos justos.
¹⁵ E, ouvindo isso um dos que estavam com ele à mesa, disse-lhe: Bem-aventurado o que comer pão no Reino de Deus!
¹⁶ Porém ele lhe disse: Um certo homem fez uma grande ceia e convidou a muitos.
¹⁷ E, à hora da ceia,mandou o seu servo dizer aos convidados: Vinde, que já tudo está preparado.
¹⁸ E todos à uma começaram a escusar-se. Disse-lhe o primeiro: Comprei um campo e preciso ir vê-lo; rogo-te que me hajas por escusado.
¹⁹ E outro disse: Comprei cinco juntas de bois e vou experimentá-los; rogo-te que me hajas por escusado.
²⁰ E outro disse: Casei e, portanto, não posso ir.
²¹ E, voltando aquele servo, anunciou essas coisas ao seu senhor. Então, o pai de família, indignado, disse ao seu servo: Sai depressa pelas ruas e bairros da cidade e traze aqui os pobres, e os aleijados, e os mancos, e os cegos.
²² E disse o servo: Senhor, feito está como mandaste, e ainda há lugar.
²³ E disse o senhor ao servo: Sai pelos caminhos e atalhos e força-os a entrar, para que a minha casa se encha.
²⁴ Porque eu vos digoque nenhum daqueles varões que foram convidados provará a minha ceia.
²⁵ Ora, ia com ele uma grande multidão; e, voltando-se, disse-lhe:
²⁶ Se alguém vier a mime não aborrecer a seu pai, e mãe, e mulher, e filhos, e irmãos, e irmãs, e ainda também a sua própria vida, não pode ser meu discípulo.
²⁷ E qualquer que não levar a sua cruze não vier após mim não pode ser meu discípulo.
²⁸ Pois qual de vós, querendo edificar uma torre,não se assenta primeiro a fazer as contas dos gastos, para ver se tem com que a acabar?
²⁹ Para que não aconteça que, depois de haver posto os alicerces e não a podendo acabar, todos os que a virem comecem a escarnecer dele,
³⁰ dizendo: Este homem começou a edificar e não pôde acabar.
³¹ Ou qual é o rei que, indo à guerra a pelejar contra outro rei, não se assenta primeiro a tomar conselho sobre se com dez mil pode sair ao encontro do que vem contra ele com vinte mil?
³² De outra maneira, estando o outro ainda longe, manda embaixadores e pede condições de paz.
³³ Assim, pois, qualquer de vós que não renuncia a tudo quanto tem não pode ser meu discípulo.
³⁴ Bom é o sal,mas, se ele degenerar, com que se  

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Onde Jesus disse que devemos nos sentar ao sermos convidados para um casamento?",
                        opcoes: [
                            { numero: 1, texto: "No primeiro lugar", correta: false },
                            { numero: 2, texto: "No último lugar", correta: true },
                            { numero: 3, texto: "Perto do noivo", correta: false },
                            { numero: 4, texto: "No meio da sala", correta: false }
                        ],
                        explicacao: "Lucas 14:10 - Quando fores convidado, vai, e assenta-te no derradeiro lugar.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Na parábola da grande ceia, qual foi uma das desculpas para não comparecer?",
                        opcoes: [
                            { numero: 1, texto: "Comprei um campo", correta: true },
                            { numero: 2, texto: "Estou com sono", correta: false },
                            { numero: 3, texto: "Perdi o caminho", correta: false },
                            { numero: 4, texto: "O tempo está ruim", correta: false }
                        ],
                        explicacao: "Lucas 14:18 - Disse-lhe o primeiro: Comprei um campo, e importa ir vê-lo.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que acontece com o sal que se torna insípido (perde o sabor)?",
                        opcoes: [
                            { numero: 1, texto: "Serve para temperar carne", correta: false },
                            { numero: 2, texto: "É guardado no templo", correta: false },
                            { numero: 3, texto: "Para nada mais presta", correta: true },
                            { numero: 4, texto: "Torna-se açúcar", correta: false }
                        ],
                        explicacao: "Lucas 14:34-35 - Se o sal for insípido... nem para a terra nem para o adubo serve.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        15: {
            titulo: "Ovelha Perdida, Dracma e Filho Pródigo",
            texto: `¹ E chegavam-se a ele todos os publicanos e pecadores para o ouvir.
² E os fariseus e os escribas murmuravam, dizendo: Este recebe pecadores e come com eles.
³ E ele lhes propôs esta parábola, dizendo:
⁴ Que homem dentrevós, tendo cem ovelhas e perdendo uma delas, não deixa no deserto as noventa e nove e não vai após a perdida até que venha a achá-la?
⁵ E, achando-a, a põe sobre seus ombros, cheio de júbilo;
⁶ e, chegando à sua casa, convoca os amigos e vizinhos, dizendo-lhes: Alegrai-vos comigo, porque já achei a minha ovelhaperdida.
⁷ Digo-vos que assim haverá alegria no céu por um pecador que se arrepende, maisdo que por noventa e nove justos que não necessitam de arrependimento.
⁸ Ou qual a mulher que, tendo dez dracmas, se perder uma dracma, não acende a candeia, e varre a casa, e busca com diligência até a achar?
⁹ E, achando-a, convoca as amigas e vizinhas, dizendo: Alegrai-vos comigo, porque já achei a dracma perdida.
¹⁰ Assim vos digo que há alegria diante dos anjos de Deus por um pecador que se arrepende.
¹¹ E disse: Um certo homem tinha dois filhos.
¹² E o mais moço deles disse ao pai: Pai, dá-me a parte da fazenda que me pertence. E ele repartiupor eles a fazenda.
¹³ E, poucos dias depois, o filho mais novo, ajuntando tudo, partiu para uma terra longínqua e ali desperdiçou a sua fazenda, vivendo dissolutamente.
¹⁴ E, havendo ele gastado tudo, houve naquela terra uma grande fome, e começou a padecer necessidades.
¹⁵ E foi e chegou-se a um dos cidadãos daquela terra, o qual o mandou para os seus campos a apascentar porcos.
¹⁶ E desejava encher o seu estômago com asbolotas que os porcos comiam, e ninguém lhe dava nada.
¹⁷ E, caindo em si, disse: Quantos trabalhadores de meu pai têm abundância de pão, e eu aqui pereço de fome!
¹⁸ Levantar-me-ei, e irei ter com meu pai, e dir-lhe-ei: Pai, pequei contra o céu e perante ti.
¹⁹ Já não sou digno de ser chamado teu filho; faze-me como um dos teus trabalhadores.
²⁰ E, levantando-se, foi para seu pai; e, quandoainda estava longe, viu-o seu pai, e se moveu de íntima compaixão, e, correndo, lançou-se-lhe ao pescoço, e o beijou.
²¹ E o filho lhe disse: Pai, pequei contra o céue perante ti e já não sou digno de ser chamado teu filho.
²² Mas o pai disse aos seus servos: Trazei depressa a melhor roupa, e vesti-lho, e ponde-lhe um anel na mão e sandálias nos pés,
²³ e trazei o bezerro cevado, e matai-o; e comamos e alegremo-nos,
²⁴ porqueeste meu filho estava morto e reviveu; tinha-se perdido e foi achado. E começaram a alegrar-se.
²⁵ E o seu filho mais velho estava no campo; e, quando veio e chegou perto de casa, ouviu a música e as danças.
²⁶ E, chamando um dos servos, perguntou-lhe que era aquilo.
²⁷ E ele lhe disse: Veio teu irmão; e teu pai matou o bezerro cevado, porque o recebeu são e salvo.
²⁸ Mas ele se indignou e não queria entrar. E, saindo o pai, instava com ele.
²⁹ Mas, respondendo ele, disse ao pai: Eis que te sirvo há tantos anos, sem nunca transgredir o teu mandamento, e nunca me deste um cabrito para alegrar-me com os meus amigos.
³⁰ Vindo, porém, este teu filho, que desperdiçou a tua fazenda com as meretrizes, mataste-lhe o bezerro cevado.
³¹ E ele lhe disse: Filho, tu sempre estás comigo, e todas as minhas coisas são tuas.
³² Mas era justo alegrarmo-nos e regozijarmo-nos, 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que o pai fez quando viu o filho pródigo voltando ainda longe?",
                        opcoes: [
                            { numero: 1, texto: "Fechou a porta", correta: false },
                            { numero: 2, texto: "Mandou um servo ver quem era", correta: false },
                            { numero: 3, texto: "Correu, lançou-se-lhe ao pescoço e o beijou", correta: true },
                            { numero: 4, texto: "Ficou esperando sentado", correta: false }
                        ],
                        explicacao: "Lucas 15:20 - E, correndo, lançou-se-lhe ao pescoço e o beijou.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quantas dracmas a mulher tinha antes de perder uma?",
                        opcoes: [
                            { numero: 1, texto: "Duas", correta: false },
                            { numero: 2, texto: "Cinco", correta: false },
                            { numero: 3, texto: "Dez", correta: true },
                            { numero: 4, texto: "Cem", correta: false }
                        ],
                        explicacao: "Lucas 15:8 - Qual a mulher que, tendo dez dracmas, se perder uma dracma...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que há no céu por um pecador que se arrepende?",
                        opcoes: [
                            { numero: 1, texto: "Silêncio", correta: false },
                            { numero: 2, texto: "Alegria diante dos anjos de Deus", correta: true },
                            { numero: 3, texto: "Tristeza", correta: false },
                            { numero: 4, texto: "Dúvida", correta: false }
                        ],
                        explicacao: "Lucas 15:10 - Há alegria diante dos anjos de Deus por um só pecador que se arrepende.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        16: {
            titulo: "O Mordomo Infiel e o Rico e Lázaro",
            texto: `¹ E dizia também aos seus discípulos: Havia um certo homem rico, o qual tinha um mordomo; e este foi acusado perante ele de dissipar os seus bens.
² E ele, chamando-o, disse-lhe: Que é isso que ouço de ti? Presta contas da tua mordomia, porque já não poderás ser mais meu mordomo.
³ E o mordomo disse consigo: Que farei, pois que o meu senhor me tira a mordomia? Cavar não posso; de mendigar tenho vergonha.
⁴ Eu sei o que hei de fazer, para que, quando for desapossado da mordomia, me recebam em suas casas.
⁵ E, chamando a si cada um dos devedores do seu senhor, disse ao primeiro: Quanto deves ao meu senhor?
⁶ E ele respondeu: Cem medidas de azeite. E disse-lhe: Toma a tua conta e, assentando-te já, escreve cinquenta.
⁷ Disse depois a outro: E tu quanto deves? E ele respondeu: Cem alqueires de trigo. E disse-lhe: Toma a tua conta e escreve oitenta.
⁸ E louvou aquele senhor o injusto mordomo por haver procedido prudentemente, porque os filhos deste mundo são mais prudentes na sua geraçãodo que os filhos da luz.
⁹ E eu vos digo:granjeai amigos com as riquezas da injustiça, para que, quando estas vos faltarem, vos recebam eles nos tabernáculos eternos.
¹⁰ Quemé fiel no mínimo também é fiel no muito; quem é injusto no mínimo também é injusto no muito.
¹¹ Pois, se nas riquezas injustas não fostes fiéis, quem vos confiará as verdadeiras?
¹² E, se no alheio não fostes fiéis, quem vos dará o que é vosso?
¹³ Nenhumservo pode servir a dois senhores, porque ou há de aborrecer a um e amar ao outro ou se há de chegar a um e desprezar ao outro. Não podeis servir a Deus e aMamom.
¹⁴ E os fariseus, que eram avarentos, ouviam todas essas coisas e zombavam dele.
¹⁵ E disse-lhes: Vós sois os que vosjustificais a vós mesmos diante dos homens,mas Deus conhece o vosso coração, porqueo que entre os homens é elevado perante Deus é abominação.
¹⁶ A Leie os Profetas duraram até João; desde então, é anunciado o Reino de Deus, e todo homem emprega força para entrar nele.
¹⁷ Eé mais fácil passar o céu e a terra do que cair um til da Lei.
¹⁸ Qualquerque deixa sua mulher e casa com outra adultera; e aquele que casa com a repudiada pelo marido adultera também.
¹⁹ Ora, havia um homem rico, e vestia-se de púrpura e de linho finíssimo, e vivia todos os dias regalada e esplendidamente.
²⁰ Havia também um certo mendigo, chamado Lázaro, que jazia cheio de chagas à porta daquele.
²¹ E desejava alimentar-se com as migalhas que caíam da mesa do rico; e os próprios cães vinham lamber-lhe as chagas.
²² E aconteceu que o mendigo morreu e foi levado pelos anjos para o seio de Abraão; e morreu também o rico e foi sepultado.
²³ E, no Hades, ergueu os olhos, estando em tormentos, e viu ao longe Abraão e Lázaro, no seu seio.
²⁴ E, clamando, disse: Abraão, meu pai, tem misericórdia de mim e manda a Lázaro que molhe na água a ponta do seu dedo eme refresque a língua, porque estouatormentado nesta chama.
²⁵ Disse, porém, Abraão: Filho, lembra-tede que recebeste os teus bens em tua vida, e Lázaro, somente males; e, agora, este é consolado, e tu, atormentado.
²⁶ E, além disso, está posto um grande abismo entre nós e vós, de sorte que os que quisessem passar daqui para vós não poderiam, nem tampouco os de lá, passar para cá.
²⁷ E disse ele: Rogo-te, pois, ó pai, que o mandes à casa de meu pai,
²⁸ pois tenho cinco irmãos, para que lhes dê testemunho, a fim de que não venham também para este lugar de tormento.
²⁹ Disse-lhe Abraão:Eles têm Moisés e os Profetas; ouçam-nos.
³⁰ E disse ele: Não, Abraão, meu pai; mas, se algum dos mortos fosse ter com eles, arrepender-se-iam.
³¹ Porém Abraão lhe disse: Se não ouvem a  

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual era o nome do mendigo que ficava à porta do rico?",
                        opcoes: [
                            { numero: 1, texto: "Bartimeu", correta: false },
                            { numero: 2, texto: "Lázaro", correta: true },
                            { numero: 3, texto: "Zaqueu", correta: false },
                            { numero: 4, texto: "Estêvão", correta: false }
                        ],
                        explicacao: "Lucas 16:20 - Havia também um mendigo, chamado Lázaro.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Para onde Lázaro foi levado pelos anjos após morrer?",
                        opcoes: [
                            { numero: 1, texto: "Para o Egito", correta: false },
                            { numero: 2, texto: "Para o seio de Abraão", correta: true },
                            { numero: 3, texto: "Para o fundo do mar", correta: false },
                            { numero: 4, texto: "Para a casa do rico", correta: false }
                        ],
                        explicacao: "Lucas 16:22 - O mendigo morreu e foi levado pelos anjos para o seio de Abraão.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o rico pediu que Lázaro fizesse para aliviar sua agonia no fogo?",
                        opcoes: [
                            { numero: 1, texto: "Que trouxesse comida", correta: false },
                            { numero: 2, texto: "Que o tirasse dali", correta: false },
                            { numero: 3, texto: "Que molhasse a ponta do dedo na água e lhe refrescasse a língua", correta: true },
                            { numero: 4, texto: "Que orasse por ele", correta: false }
                        ],
                        explicacao: "Lucas 16:24 - Manda a Lázaro, que molhe na água a ponta do dedo e me refresque a língua.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        17: {
            titulo: "Os Dez Leprosos e a Vinda do Reino",
            texto: `¹ E disse aos discípulos: É impossível que não venham escândalos, mas ai daquele por quem vierem!
² Melhor lhe fora que lhe pusessem ao pescoço uma pedra de moinho, e fosse lançado ao mar, do que fazer tropeçar um destes pequenos.
³ Olhai por vós mesmos.E, se teu irmão pecar contra ti, repreende-o;e, se ele se arrepender, perdoa-lhe;
⁴ e, se pecar contra ti sete vezes no dia e sete vezes no dia vier ter contigo, dizendo: Arrependo-me, perdoa-lhe.
⁵ Disseram, então, os apóstolos ao Senhor: Acrescenta-nos a fé.
⁶ E disse o Senhor: Se tivésseis fé como um grão de mostarda, diríeis a esta amoreira: Desarraiga-te daqui e planta-te no mar, e ela vos obedeceria.
⁷ E qual de vós terá um servo a lavrar ou a apascentar gado, a quem, voltando ele do campo, diga: Chega-te e assenta-te à mesa?
⁸ E não lhe diga antes: Prepara-me a ceia, e cinge-te,e serve-me, até que tenha comido e bebido, e depois comerás e beberás tu?
⁹ Porventura, dá graças ao tal servo, porque fez o que lhe foi mandado? Creio que não.
¹⁰ Assim também vós, quando fizerdes tudo o que vos for mandado, dizei: Somosservos inúteis, porque fizemos somente o que devíamos fazer.
¹¹ E aconteceu que, indo ele a Jerusalém, passou pelo meio de Samaria e da Galileia;
¹² e, entrando numa certa aldeia, saíram-lhe ao encontro dez homens leprosos, os quais pararam de longe.
¹³ E levantaram a voz, dizendo: Jesus, Mestre, tem misericórdia de nós!
¹⁴ E ele, vendo-os, disse-lhes: Ide e mostrai-vos aos sacerdotes. E aconteceu que, indo eles, ficaram limpos.
¹⁵ E um deles, vendo que estava são, voltou glorificando a Deus em alta voz.
¹⁶ E caiu aos seus pés, com o rosto em terra, dando-lhe graças; e este era samaritano.
¹⁷ E, respondendo Jesus, disse: Não foram dez os limpos? E onde estão os nove?
¹⁸ Não houve quem voltasse para dar glória a Deus, senão este estrangeiro?
¹⁹ E disse-lhe: Levanta-te e vai; a tua fé te salvou.
²⁰ E, interrogado pelos fariseus sobre quando havia de vir o Reino de Deus, respondeu-lhes e disse: O Reino de Deus não vem comaparência exterior.
²¹ Nem dirão:Ei-lo aqui! Ou: Ei-lo ali! Porque eis que o Reino de Deus estáentre vós.
²² E disse aos discípulos: Dias virão em que desejareis ver um dos dias do Filho do Homem e não o vereis.
²³ E dir-vos-ão:Ei-lo aqui! Ou: Ei-lo ali! Não vades, nem os sigais,
²⁴ porque,como o relâmpago ilumina desde uma extremidade inferior do céu até à outra extremidade, assim será também o Filho do Homem no seu dia.
²⁵ Masprimeiro convém que ele padeça muito e seja reprovado por esta geração.
²⁶ E,como aconteceu nos dias de Noé, assim será também nos dias do Filho do Homem.
²⁷ Comiam, bebiam, casavam e davam-se em casamento, até ao dia em que Noé entrou na arca, e veio o dilúvio e consumiu a todos.
²⁸ Comotambém da mesma maneira aconteceu nos dias de Ló: comiam, bebiam, compravam, vendiam, plantavam e edificavam.
²⁹ Mas,no dia em que Ló saiu de Sodoma, choveu do céu fogo e enxofre, consumindo a todos.
³⁰ Assim será no dia em que o Filho do Homem se háde manifestar.
³¹ Naquele dia,quem estiver no telhado, tendo os seus utensílios em casa, não desça a tomá-los; e, da mesma sorte, o que estiver no campo não volte para trás.
³² Lembrai-vosda mulher de Ló.
³³ Qualquerque procurar salvar a sua vida perdê-la-á, e qualquer que a perder salvá-la-á.
³⁴ Digo-vosque, naquela noite, estarão dois numa cama; um será tomado, e outro será deixado.
³⁵ Duas estarão juntas, moendo; uma será tomada, e outra será deixada.
³⁶ Dois estarão no campo; um será tomado, e outro será deixado 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quantos leprosos voltaram para agradecer a Jesus após serem curados?",
                        opcoes: [
                            { numero: 1, texto: "Todos os dez", correta: false },
                            { numero: 2, texto: "Cinco", correta: false },
                            { numero: 3, texto: "Apenas um", correta: true },
                            { numero: 4, texto: "Nenhum", correta: false }
                        ],
                        explicacao: "Lucas 17:15 - E um deles, vendo que estava são, voltou glorificando a Deus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual era a nacionalidade do leproso que voltou para agradecer?",
                        opcoes: [
                            { numero: 1, texto: "Judeu", correta: false },
                            { numero: 2, texto: "Samaritano", correta: true },
                            { numero: 3, texto: "Romano", correta: false },
                            { numero: 4, texto: "Egípcio", correta: false }
                        ],
                        explicacao: "Lucas 17:16 - E este era samaritano.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "De quem Jesus disse para nos lembrarmos ao falar sobre a Sua vinda?",
                        opcoes: [
                            { numero: 1, texto: "Da mulher de Ló", correta: true },
                            { numero: 2, texto: "De Moisés", correta: false },
                            { numero: 3, texto: "De Noé", correta: false },
                            { numero: 4, texto: "De Davi", correta: false }
                        ],
                        explicacao: "Lucas 17:32 - Lembrai-vos da mulher de Ló.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        18: {
            titulo: "O Juiz Iníquo e o Cego de Jericó",
            texto: `¹ E contou-lhes também uma parábola sobre o dever de orar sempre e nunca desfalecer,
² dizendo: Havia numa cidade um certo juiz, que nem a Deus temia, nem respeitava homem algum.
³ Havia também naquela mesma cidade uma certa viúva e ia ter com ele, dizendo: Faze-me justiça contra o meu adversário.
⁴ E, por algum tempo, não quis; mas, depois, disse consigo: Ainda que não temo a Deus, nem respeito os homens,
⁵ todavia,como esta viúva me molesta, hei de fazer-lhe justiça, para que enfim não volte e me importune muito.
⁶ E disse o Senhor: Ouvi o que diz o injusto juiz.
⁷ E Deusnão fará justiça aos seus escolhidos, que clamam a ele de dia e de noite, ainda quetardio para com eles?
⁸ Digo-vosque, depressa, lhes fará justiça. Quando, porém, vier o Filho do Homem, porventura, achará fé na terra?
⁹ E disse também esta parábola a uns que confiavam em si mesmos, crendo que eram justos, e desprezavam os outros:
¹⁰ Dois homens subiram ao templo, a orar; um, fariseu, e o outro, publicano.
¹¹ O fariseu,estando em pé, orava consigo desta maneira:Ó Deus, graças te dou, porque não sou como os demais homens, roubadores, injustos e adúlteros; nem ainda como este publicano.
¹² Jejuo duas vezes na semana e dou os dízimos de tudo quanto possuo.
¹³ O publicano, porém, estando em pé, de longe, nem ainda queria levantar os olhos ao céu, mas batia no peito, dizendo: Ó Deus, tem misericórdia de mim, pecador!
¹⁴ Digo-vos que este desceu justificado para sua casa, e não aquele;porque qualquer que a si mesmo se exalta será humilhado, e qualquer que a si mesmo se humilha será exaltado.
¹⁵ E traziam-lhe também crianças, para que ele as tocasse; e os discípulos, vendo isso, repreendiam-nos.
¹⁶ Mas Jesus, chamando-as para si, disse: Deixai vir a mim os pequeninos e não os impeçais,porque dos tais é o Reino de Deus.
¹⁷ Emverdade vos digo que qualquer que não receber o Reino de Deus como uma criança não entrará nele.
¹⁸ E perguntou-lhe um certo príncipe, dizendo: Bom Mestre, que hei de fazer para herdar a vida eterna?
¹⁹ Jesus lhe disse: Por que me chamas bom? Ninguém há bom, senão um, que é Deus.
²⁰ Sabes os mandamentos: Não adulterarás, não matarás,não furtarás, não dirás falso testemunho,honra a teu pai e a tua mãe.
²¹ E disse ele: Todas essas coisas tenho observado desde a minha mocidade.
²² E, quando Jesus ouviu isso, disse-lhe: Ainda te falta uma coisa:vende tudo quanto tens, reparte-o pelos pobres e terás um tesouro no céu; depois, vem e segue-me.
²³ Mas, ouvindo ele isso, ficou muito triste, porque era muito rico.
²⁴ E, vendo Jesus que ele ficara muito triste, disse: Quão dificilmente entrarão no Reino de Deus os que têm riquezas!
²⁵ Porque é mais fácil entrar um camelo pelo fundo de uma agulha do que entrar um rico no Reino de Deus.
²⁶ E os que ouviram isso disseram: Logo, quem pode salvar-se?
²⁷ Mas ele respondeu: As coisas que são impossíveis aos homens são possíveis a Deus.
²⁸ E disse Pedro: Eis que nós deixamos tudo e te seguimos.
²⁹ E ele lhes disse: Na verdade vos digoque ninguém há, que tenha deixado casa, ou pais, ou irmãos, ou mulher, ou filhos pelo Reino de Deus
³⁰ enão haja de receber muito mais neste mundo e, na idade vindoura, a vida eterna.
³¹ E, tomando consigo os doze, disse-lhes: Eis que subimos a Jerusalém, e se cumprirá no Filho do Homem tudo oque pelos profetas foi escrito.
³² Poishá de ser entregue aos gentios e escarnecido, injuriado e cuspido;
³³ e, havendo-o açoitado, o matarão; e, ao terceiro dia, ressuscitará.
³⁴ E eles nada disso entendiam, e esta palavra lhes era encoberta, não percebendo o que se lhes dizia.
³⁵ E aconteceu que, chegando ele perto de Jericó, estava um cego assentado junto do caminho, mendigando.
³⁶ E, ouvindo passar a multidão, perguntou que era aquilo.
³⁷ E disseram-lhe que Jesus, o Nazareno, passava.
³⁸ Então, clamou, dizendo: Jesus, Filho de Davi, tem misericórdia de mim!
³⁹ E os que iam passando repreendiam-no para que se calasse; mas ele clamava ainda mais: Filho de Davi, tem misericórdia de mim!
⁴⁰ Então, Jesus, parando, mandou que lho trouxessem; e, chegando ele, perguntou-lhe,
⁴¹ dizendo: Que queres que te faça? E ele disse: Senhor, que eu veja.
⁴² E Jesus lhe disse: Vê 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Na parábola do fariseu e do publicano, quem saiu justificado para sua casa?",
                        opcoes: [
                            { numero: 1, texto: "O fariseu", correta: false },
                            { numero: 2, texto: "Os dois", correta: false },
                            { numero: 3, texto: "Nenhum deles", correta: false },
                            { numero: 4, texto: "O publicano", correta: true }
                        ],
                        explicacao: "Lucas 18:14 - Digo-vos que este desceu justificado para sua casa.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus disse ser necessário fazer para entrar no Reino de Deus?",
                        opcoes: [
                            { numero: 1, texto: "Recebê-lo como uma criança", correta: true },
                            { numero: 2, texto: "Ser muito rico", correta: false },
                            { numero: 3, texto: "Conhecer toda a lei", correta: false },
                            { numero: 4, texto: "Fazer muitas viagens", correta: false }
                        ],
                        explicacao: "Lucas 18:17 - Qualquer que não receber o reino de Deus como uma criança, não entrará nele.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que o cego de Jericó gritava para Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Mestre, dá-me dinheiro", correta: false },
                            { numero: 2, texto: "Jesus, Filho de Davi, tem misericórdia de mim!", correta: true },
                            { numero: 3, texto: "Cura-me se fores capaz", correta: false },
                            { numero: 4, texto: "Olha para mim, Senhor", correta: false }
                        ],
                        explicacao: "Lucas 18:38 - Jesus, Filho de Davi, tem misericórdia de mim!",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        19: {
            titulo: "Zaqueu e a Entrada em Jerusalém",
            texto: `¹ E, tendo Jesus entrado em Jericó, ia passando.
² E eis que havia ali um homem, chamado Zaqueu; e era este um chefe dos publicanos e era rico.
³ E procurava ver quem era Jesus e não podia, por causa da multidão, pois era de pequena estatura.
⁴ E, correndo adiante, subiu a uma figueira brava para o ver, porque havia de passar por ali.
⁵ E, quando Jesus chegou àquele lugar, olhando para cima, viu-o e disse-lhe: Zaqueu, desce depressa, porque, hoje, me convém pousar em tua casa.
⁶ E, apressando-se, desceu e recebeu-o com júbilo.
⁷ E, vendo todos isso, murmuravam, dizendo que entrara para ser hóspede de um homem pecador.
⁸ E, levantando-se Zaqueu, disse ao Senhor: Senhor, eis que eu dou aos pobres metade dos meus bens; e, se em alguma coisa tenho defraudado alguém, o restituo quadruplicado.
⁹ E disse-lhe Jesus: Hoje, veio a salvação a esta casa,pois também esteé filho de Abraão.
¹⁰ Porqueo Filho do Homem veio buscar e salvar o que se havia perdido.
¹¹ E, ouvindo eles essas coisas, ele prosseguiu e contou uma parábola, porquanto estava perto de Jerusalém, e cuidavam que logo se havia de manifestar o Reino de Deus.
¹² Disse, pois: Certo homem nobre partiu para uma terra remota, a fim de tomar para si um reino e voltar depois.
¹³ E, chamando dez servos seus, deu-lhes dez minas e disse-lhes: Negociai até que eu venha.
¹⁴ Masos seus concidadãos aborreciam-no e mandaram após ele embaixadores, dizendo: Não queremos que este reine sobre nós.
¹⁵ E aconteceu que, voltando ele, depois de ter tomado o reino, disse que lhe chamassem aqueles servos a quem tinha dado o dinheiro, para saber o que cada um tinha ganhado, negociando.
¹⁶ E veio o primeiro dizendo: Senhor, a tua mina rendeu dez minas.
¹⁷ E ele lhe disse: Bem está, servo bom, porque no mínimo foste fiel,sobre dez cidades terás a autoridade.
¹⁸ E veio o segundo, dizendo: Senhor, a tua mina rendeu cinco minas.
¹⁹ E a este disse também: Sê tu também sobre cinco cidades.
²⁰ E veio outro, dizendo: Senhor, aqui está a tua mina, que guardei num lenço,
²¹ porque tivemedo de ti, que és homem rigoroso, que tomas o que não puseste e segas o que não semeaste.
²² Porém ele lhe disse:Mau servo, pela tua boca te julgarei; sabiasque eu sou homem rigoroso, que tomo o que não pus e sego o que não semeei.
²³ Por que não puseste, pois, o meu dinheiro no banco, para que eu, vindo, o exigisse com os juros?
²⁴ E disse aos que estavam com ele: Tirai-lhe a mina e dai-a ao que tem dez minas.
²⁵ E disseram-lhe eles: Senhor, ele tem dez minas.
²⁶ Pois eu vos digoque a qualquer que tiver ser-lhe-á dado, mas ao que não tiver até o que tem lhe será tirado.
²⁷ E, quanto àqueles meus inimigos que não quiseram que eu reinasse sobre eles, trazei-os aqui e matai-os diante de mim.
²⁸ E, dito isso, ia caminhando adiante, subindo para Jerusalém.
²⁹ E aconteceu que, chegando perto de Betfagé e de Betânia, ao monte chamado das Oliveiras, mandou dois dos seus discípulos,
³⁰ dizendo: Ide à aldeia que está defronte e aí, ao entrardes, achareis preso um jumentinho em que nenhum homem ainda montou; soltai-o e trazei-o.
³¹ E, se alguém vos perguntar: Por que o soltais?, assim lhe direis: Porque o Senhor precisa dele.
³² E, indo os que haviam sido mandados, acharam como lhes dissera.
³³ E, quando soltaram o jumentinho, seus donos lhes disseram: Por que soltais o jumentinho?
³⁴ E eles responderam: O Senhor precisa dele.
³⁵ E trouxeram-no a Jesus; e, lançando sobre o jumentinho as suas vestes, puseram Jesus em cima.
³⁶ E, indo ele, estendiam no caminho as suas vestes.
³⁷ E, quando já chegava perto da descida do monte das Oliveiras, toda a multidão dos discípulos, regozijando-se, começou a dar louvores a Deus em alta voz, por todas as maravilhas que tinham visto,
³⁸ dizendo: Bendito o Rei que vem em nome do Senhor! Paz no céu e glória nas alturas!
³⁹ E disseram-lhe dentre a multidão alguns dos fariseus: Mestre, repreende os teus discípulos.
⁴⁰ E, respondendo ele, disse-lhes: Digo-vos que, se estes se calarem,as próprias pedras clamarão.
⁴¹ E, quando ia chegando, vendo a cidade, chorou sobre ela,
⁴² dizendo: Ah! Se tu conhecesses também, ao menos neste teu dia, o que à tua paz pertence! Mas, agora, isso está encoberto aos teus olhos.
⁴³ Porque dias virão sobre ti,em que os teus inimigos te cercarão de trincheiras, e te sitiarão, e te estreitarão de todas as bandas,
⁴⁴ E declarou que a cidade seria totalmente destruída, juntamente com seus habitantes, sem que restasse pedra sobre pedra, porque não reconheceram o tempo da visitação de Deus.

⁴⁵ E, entrando no templo, começou a expulsar todos os que ali vendiam e compravam,

⁴⁶ dizendo-lhes que a casa de Deus deveria ser casa de oração, mas eles a haviam transformado em lugar de corrupção.

⁴⁷ E todos os dias ensinava no templo; porém os principais sacerdotes, os escribas e os líderes do povo procuravam matá-lo,

⁴⁸ mas não encontravam meio de fazê-lo, porque todo o povo estava atento às suas palavras.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que Zaqueu fez para conseguir ver Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Subiu em um muro", correta: false },
                            { numero: 2, texto: "Subiu em uma figueira brava (sicômoro)", correta: true },
                            { numero: 3, texto: "Empurrou a multidão", correta: false },
                            { numero: 4, texto: "Subiu no telhado de sua casa", correta: false }
                        ],
                        explicacao: "Lucas 19:4 - Subiu a uma figueira brava para o ver.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual animal Jesus montou para entrar em Jerusalém?",
                        opcoes: [
                            { numero: 1, texto: "Um cavalo", correta: false },
                            { numero: 2, texto: "Um camelo", correta: false },
                            { numero: 3, texto: "Um jumentinho", correta: true },
                            { numero: 4, texto: "Um cordeiro", correta: false }
                        ],
                        explicacao: "Lucas 19:35 - Lançando as suas vestes sobre o jumentinho, puseram nele a Jesus.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus fez quando viu a cidade de Jerusalém?",
                        opcoes: [
                            { numero: 1, texto: "Sorriu de alegria", correta: false },
                            { numero: 2, texto: "Ficou em silêncio", correta: false },
                            { numero: 3, texto: "Chorou sobre ela", correta: true },
                            { numero: 4, texto: "Começou a cantar", correta: false }
                        ],
                        explicacao: "Lucas 19:41 - E, quando chegou perto, vendo a cidade, chorou sobre ela.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        20: {
            titulo: "Autoridade e a Ressurreição",
            texto: ` ¹ E aconteceu, num daqueles dias, que, estando ele ensinando o povo no templo e anunciando o evangelho, sobrevieram os principais dos sacerdotes e os escribas com os anciãos
² e falaram-lhe, dizendo: Dize-nos: com que autoridade fazes essas coisas? Ou quem é que te deu esta autoridade?
³ E, respondendo ele, disse-lhes: Também eu vos farei uma pergunta: dizei-me, pois:
⁴ o batismo de João era do céu ou dos homens?
⁵ E eles arrazoavam entre si, dizendo: Se dissermos: do céu, ele nos dirá: Então, por que o não crestes?
⁶ E, se dissermos: dos homens, todo o povo nos apedrejará, pois têm por certo que João era profeta.
⁷ E responderam que não sabiam de onde era.
⁸ E Jesus lhes disse: Tampouco vos direi com que autoridade faço isto.
⁹ E começou a dizer ao povo esta parábola: Certo homemplantou uma vinha, e arrendou-a a uns lavradores, e partiu para fora da terra por muito tempo.
¹⁰ E, no devido tempo, mandou um servo aos lavradores, para que lhe dessem dos frutos da vinha; mas os lavradores, espancando-o, mandaram-no vazio.
¹¹ E tornou ainda a mandar outro servo; mas eles, espancando também a este e afrontando-o, mandaram-no vazio.
¹² E tornou ainda a mandar um terceiro; mas eles, ferindo também a este, o expulsaram.
¹³ E disse o senhor da vinha: Que farei? Mandarei o meu filho amado; talvez, vendo-o, o respeitem.
¹⁴ Mas, vendo-o os lavradores, arrazoaram entre si dizendo: Este é o herdeiro; vinde, matemo-lo, para que a herança seja nossa.
¹⁵ E, lançando-o fora da vinha, o mataram. Que lhes fará, pois, o senhor da vinha?
¹⁶ Irá, e destruirá estes lavradores, e dará a outros a vinha. E, ouvindo eles isso, disseram: Não seja assim!
¹⁷ Mas ele, olhando para eles, disse: Que é isto, pois, que está escrito?A pedra que os edificadores reprovaram, essa foi feita cabeça da esquina.
¹⁸ Qualquer que cair sobre aquela pedra ficará em pedaços, e aquelesobre quem ela cair será feito em pó.
¹⁹ E os principais dos sacerdotes e os escribas procuravam lançar mão dele naquela mesma hora; mas temeram o povo, porque entenderam que contra eles dissera esta parábola.
²⁰ E, trazendo-o debaixo de olho, mandaram espias que se fingiam de justos, para o apanharem em alguma palavra e o entregarem à jurisdição e poder do governador.
²¹ E perguntaram-lhe, dizendo: Mestre, nós sabemos que falas e ensinas bem e retamente e que não consideras a aparência da pessoa, mas ensinas com verdade o caminho de Deus.
²² É-nos lícito dar tributo a César ou não?
²³ E, entendendo ele a sua astúcia, disse-lhes: Por que me tentais?
²⁴ Mostrai-me uma moeda. De quem tem a imagem e a inscrição? E, respondendo eles, disseram: De César.
²⁵ Disse-lhes, então: Dai, pois, a César o que é de César e a Deus, o que é de Deus.
²⁶ E não puderam apanhá-lo em palavra alguma diante do povo; e, maravilhados da sua resposta, calaram-se.
²⁷ E, chegando-se alguns dos saduceus, que dizem não haver ressurreição, perguntaram-lhe,
²⁸ dizendo: Mestre, Moisés nos deixou escrito que, se o irmão de alguém falecer, tendo mulher e não deixar filhos, o irmão dele tome a mulher e suscite posteridade a seu irmão.
²⁹ Houve, pois, sete irmãos, e o primeiro tomou mulher e morreu sem filhos;
³⁰ e o segundo
³¹ e o terceiro também a tomaram, e, igualmente, os sete. Todos eles morreram e não deixaram filhos.
³² E, por último, depois de todos, morreu também a mulher.
³³ Portanto, na ressurreição, de qual deles será a mulher, pois que os sete por mulher a tiveram?
³⁴ E, respondendo Jesus, disse-lhes: Os filhos deste mundo casam-se e dão-se em casamento,
³⁵ mas os que forem havidos por dignos de alcançar o mundo vindouro e a ressurreição dos mortos nem hão de casar, nem ser dados em casamento;
³⁶ porque já não podemmais morrer, pois são iguais aos anjos e são filhos de Deus,sendo filhos da ressurreição.
³⁷ E que os mortos hão de ressuscitartambém o mostrou Moisés junto da sarça, quando chama ao Senhor Deus de Abraão, e Deus de Isaque, e Deus de Jacó.
³⁸ Ora, Deus não é Deus de mortos, mas de vivos, porque paraele vivem todos.
³⁹ E, respondendo alguns dos escribas, disseram: Mestre, disseste bem.
⁴⁰ E não ousavam perguntar-lhe mais coisa alguma.
⁴¹ E ele lhes disse: Como dizem que o Cristo é Filho de Davi?
⁴² Visto como o mesmo Davi diz no livro dos Salmos:Disse o Senhor ao meu Senhor: Assenta-te à minha direita,
⁴³ até que eu ponha os teus inimigos por escabelo de teus pés.
⁴⁴ Se Davi lhe chama Senhor, como é ele seu filho?
⁴² ,
⁴³ até que eu ponha os teus inimigos por escabelo de teus pés.
⁴⁴ Se Davi lhe chama Senhor, como é ele seu filho?
⁴⁵ E, ouvindo-o todo o povo, disse Jesus aos seus discípulos:
⁴⁶ Guardai-vos dos escribas, que querem andar com vestes compridas e amam assaudações nas praças, e as principais cadeiras nas sinagogas, e os primeiros lugares nos banquetes;
47 que devoram as casas das viúvas, fazendo, por pretexto, largas orações. estes receberão maior condenação.
`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Na parábola dos lavradores maus, o que eles fizeram com o filho do dono da vinha?",
                        opcoes: [
                            { numero: 1, texto: "Receberam-no com festa", correta: false },
                            { numero: 2, texto: "Lançaram-no fora da vinha e o mataram", correta: true },
                            { numero: 3, texto: "Deram-lhe o dinheiro", correta: false },
                            { numero: 4, texto: "Fugiram dele", correta: false }
                        ],
                        explicacao: "Lucas 20:15 - Lançando-o fora da vinha, o mataram.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual grupo religioso dizia que não havia ressurreição?",
                        opcoes: [
                            { numero: 1, texto: "Fariseus", correta: false },
                            { numero: 2, texto: "Escribas", correta: false },
                            { numero: 3, texto: "Saduceus", correta: true },
                            { numero: 4, texto: "Zelotes", correta: false }
                        ],
                        explicacao: "Lucas 20:27 - Chegando alguns dos saduceus, que dizem não haver ressurreição.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus disse sobre dar a César?",
                        opcoes: [
                            { numero: 1, texto: "Não deem nada a ele", correta: false },
                            { numero: 2, texto: "Deem tudo a ele", correta: false },
                            { numero: 3, texto: "Dai, pois, a César o que é de César, e a Deus o que é de Deus", correta: true },
                            { numero: 4, texto: "César é o nosso Deus", correta: false }
                        ],
                        explicacao: "Lucas 20:25 - Dai, pois, a César o que é de César.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        21: {
            titulo: "A Oferta da Viúva e Sinais do Fim",
            texto: `¹ E, olhando ele, viu os ricos lançarem as suas ofertas na arca do tesouro;
² e viu também uma pobre viúva lançar ali duas pequenas moedas;
³ e disse: Em verdade vosdigo que lançou mais do que todos esta pobre viúva,
⁴ porque todos aqueles deram como ofertas de Deus do que lhes sobeja; mas esta, da sua pobreza, deu todo o sustento que tinha.
⁵ E, dizendo alguns a respeito do templo, que estava ornado de formosas pedras e dádivas, disse:
⁶ Quanto a estas coisas que vedes, dias virão emque se não deixará pedra sobre pedra que não seja derribada.
⁷ E perguntaram-lhe, dizendo: Mestre, quando serão, pois, essas coisas? E que sinal haverá quando isso estiver para acontecer?
⁸ Disse, então, ele: Vede que não vos enganem, porque virão muitos em meu nome, dizendo: Sou eu, e o tempo está próximo; não vades, portanto, após eles.
⁹ E, quando ouvirdes de guerras e sedições, não vos assusteis. Porque é necessário que isso aconteça primeiro, mas o fim não será logo.
¹⁰ Então, lhes disse: Levantar-se-á nação contra nação, e reino, contra reino;
¹¹ e haverá, em vários lugares, grandes terremotos, e fomes, e pestilências; haverá também coisas espantosas e grandes sinais do céu.
¹² Mas,antes de todas essas coisas, lançarão mão de vós e vos perseguirão, entregando-vos às sinagogas eàs prisõese conduzindo-vos à presença de reis e governadores,por amor do meu nome.
¹³ E vos aconteceráisso para testemunho.
¹⁴ Proponde,pois, em vosso coração não premeditar como haveis de responder,
¹⁵ porque eu vos darei boca e sabedoriaa que não poderão resistir, nem contradizer todos quantos se vos opuserem.
¹⁶ E até pelos pais, e irmãos, e parentes, e amigos sereisentregues; e matarãoalguns de vós.
¹⁷ E de todos sereisodiados por causa do meu nome.
¹⁸ Masnão perecerá um único cabelo da vossa cabeça.
¹⁹ Na vossa paciência, possuí a vossa alma.
²⁰ Mas, quando virdes Jerusalém cercada de exércitos, sabei, então, que é chegada a sua desolação.
²¹ Então, os que estiverem na Judeia, que fujam para os montes; os que estiverem no meio da cidade, que saiam; e, os que estiverem nos campos, que não entrem nela.
²² Porque dias de vingança são estes, para quese cumpram todas as coisas que estão escritas.
²³ Mas aidas grávidas e das que criarem naqueles dias! Porque haverá grande aflição na terra e ira sobre este povo.
²⁴ E cairão a fio de espada e para todas as nações serão levados cativos; e Jerusalém será pisada pelos gentios, até que ostempos dos gentios se completem.
²⁵ E haverá sinais no sol, e na lua, e nas estrelas, e, na terra, angústia das nações, em perplexidade pelo bramido do mar e das ondas;
²⁶ homens desmaiando de terror, na expectação das coisas que sobrevirão ao mundo,porquanto os poderes do céu serão abalados.
²⁷ E, então, verão vir o Filho do Homemnuma nuvem, com poder e grande glória.
²⁸ Ora, quando essas coisas começarem a acontecer, olhai para cima e levantai a vossa cabeça,porque a vossa redenção está próxima.
²⁹ E disse-lhes uma parábola: Olhai para a figueira e para todas as árvores.
³⁰ Quando já começam a brotar, vós sabeis por vós mesmos, vendo-as, que perto está já o verão.
³¹ Assim também vós, quando virdes acontecer essas coisas, sabei que o Reino de Deus está perto.
³² Em verdade vos digo que não passará esta geração até que tudo aconteça.
³³ Passará o céu e a terra, mas as minhas palavras não hão de passar.
³⁴ E olhaipor vós, para que não aconteça que o vosso coração se carregue de glutonaria, de embriaguez, e dos cuidados da vida, e venha sobre vós de improviso aquele dia.
³⁵ Porquevirá como um laço sobre todos os que habitam na face de toda a terra.
³⁶ Vigiai,pois,em todo o tempo, orando, para que sejais havidos por dignos de evitar todas essas coisas que hão de acontecer e de estar em pé diante do Filho do Homem. 
³⁶ Jesus orienta que estejam sempre vigilantes e em oração, para que sejam considerados dignos de escapar dos acontecimentos futuros e permanecer firmes diante do Filho do Homem.

³⁷ Durante o dia, Ele ensinava no templo; e, à noite, retirava-se para o monte chamado das Oliveiras.

³⁸ E todo o povo ia de manhã cedo ao templo para ouvi-lo.
 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quantas moedas a viúva pobre deitou na arca do tesouro?",
                        opcoes: [
                            { numero: 1, texto: "Uma moeda de ouro", correta: false },
                            { numero: 2, texto: "Duas pequenas moedas (duas brancas)", correta: true },
                            { numero: 3, texto: "Dez dracmas", correta: false },
                            { numero: 4, texto: "Cinquenta denários", correta: false }
                        ],
                        explicacao: "Lucas 21:2 - Viu também uma pobre viúva lançar ali duas pequenas moedas.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Jesus disse que o céu e a terra passarão, mas o que não passará?",
                        opcoes: [
                            { numero: 1, texto: "O templo de Jerusalém", correta: false },
                            { numero: 2, texto: "As Suas palavras", correta: true },
                            { numero: 3, texto: "O sol e a lua", correta: false },
                            { numero: 4, texto: "As leis romanas", correta: false }
                        ],
                        explicacao: "Lucas 21:33 - Passará o céu e a terra, mas as minhas palavras não hão de passar.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual árvore Jesus usou como exemplo para reconhecer que o verão está próximo?",
                        opcoes: [
                            { numero: 1, texto: "Oliveira", correta: false },
                            { numero: 2, texto: "Carvalho", correta: false },
                            { numero: 3, texto: "Videira", correta: false },
                            { numero: 4, texto: "Figueira", correta: true }
                        ],
                        explicacao: "Lucas 21:29 - Olhai para a figueira, e para todas as árvores.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        22: {
            titulo: "A Última Ceia e a Prisão",
            texto: `¹ Estava, pois, perto a Festa dos Pães Asmos, chamada de Páscoa.
² E os principais dos sacerdotes e os escribas andavam procurando como o matariam, porque temiam o povo.
³ Entrou, porém, Satanás em Judas, que tinha por sobrenome Iscariotes, o qual era do número dos doze.
⁴ E foi e falou com os principais dos sacerdotes e com os capitães de como lho entregaria,
⁵ os quais se alegraram e convieram em lhe dar dinheiro.
⁶ E ele concordou e buscava oportunidade para lho entregar sem alvoroço.
⁷ Chegou, porém, o dia da Festa dos Pães Asmos, em que importava sacrificar a Páscoa.
⁸ E mandou a Pedro e a João, dizendo: Ide, preparai-nos a Páscoa, para que a comamos.
⁹ E eles lhe perguntaram: Onde queres que a preparemos?
¹⁰ E ele lhes disse: Eis que, quando entrardes na cidade, encontrareis um homem levando um cântaro de água; segui-o até à casa em que ele entrar.
¹¹ E direis ao pai de família da casa: O mestre te diz: Onde está o aposento em que hei de comer a Páscoa com os meus discípulos?
¹² Então, ele vos mostrará um grande cenáculo mobilado; aí fazei os preparativos.
¹³ E, indo eles, acharam como lhes havia sido dito; e prepararam a Páscoa.
¹⁴ E, chegada a hora, pôs-se à mesa, e, com ele, os doze apóstolos.
¹⁵ E disse-lhes: Desejei muito comer convosco esta Páscoa, antes que padeça,
¹⁶ porque vos digo que não a comerei maisaté que ela se cumpra no Reino de Deus.
¹⁷ E, tomando o cálice e havendo dado graças, disse: Tomai-o e reparti-o entre vós,
¹⁸ porquevos digo que já não beberei do fruto da vide, até que venha o Reino de Deus.
¹⁹ E, tomando o pão e havendo dado graças, partiu-o e deu-lho, dizendo: Isto é o meu corpo, que por vós é dado;fazei isso em memória de mim.
²⁰ Semelhantemente, tomou o cálice, depois da ceia, dizendo: Este cálice é o NovoTestamento no meu sangue, que é derramado por vós.
²¹ Maseis que a mão do que me trai está comigo à mesa.
²² E, na verdade,o Filho do Homem vaisegundo o que está determinado; mas ai daquele homem por quem é traído!
²³ E começaram a perguntar entre si qual deles seria o que havia de fazer isso.
²⁴ E houve também entre eles contenda sobre qual deles parecia ser o maior.
²⁵ E ele lhes disse: Os reis dos gentios dominam sobre eles, e os que têm autoridade sobre eles são chamados benfeitores.
²⁶ Mas nãosereis vós assim; antes, o maior entre vósseja como o menor; e quem governa, como quem serve.
²⁷ Poisqual é maior: quem está à mesa ou quem serve? Porventura, não é quem está à mesa? Eu,porém, entre vós, sou como aquele que serve.
²⁸ E vós sois os que tendes permanecido comigo nasminhas tentações.
²⁹ Eeu vos destino o Reino, como meu Pai mo destinou,
³⁰ paraque comais e bebais à minha mesa no meu Reino e vos assenteis sobre tronos, julgando as doze tribos de Israel.
³¹ Disse também o Senhor: Simão, Simão, eis que Satanás vos pediupara voscirandar como trigo.
³² Maseu roguei por ti, para que a tua fé não desfaleça; e tu, quando te converteres, confirma teus irmãos.
³³ E ele lhe disse: Senhor, estou pronto a ir contigo até à prisão e à morte.
³⁴ Mas ele disse: Digo-te, Pedro, que não cantará hoje o galo antes que três vezes negues que me conheces.
³⁵ E disse-lhes: Quandovos mandei sem bolsa, alforje ou sandálias, faltou-vos, porventura, alguma coisa? Eles responderam: Nada.
³⁶ Disse-lhes, pois: Mas, agora, aquele que tiver bolsa, tome-a, como também o alforje; e o que não tem espada, venda a sua veste e compre-a;
³⁷ porquanto vos digo que importa que em mim se cumpra aquilo que está escrito:E com os malfeitores foi contado. Porque o que está escrito de mim terá cumprimento.
³⁸ E eles disseram: Senhor, eis aqui duas espadas. E ele lhes disse: Basta.
³⁹ E, saindo, foi, como costumava, para o monte das Oliveiras; e também os seus discípulos o seguiram.
⁴⁰ E, quando chegou àquele lugar, disse-lhes: Orai, para que não entreis em tentação.
⁴¹ E apartou-se deles cerca de um tiro de pedra; e, pondo-se de joelhos, orava,
⁴² dizendo: Pai, se queres, passa de mim este cálice;todavia, não se faça a minha vontade, mas a tua.
⁴³ E apareceu-lhe um anjo do céu, que o confortava.
⁴⁴ E, posto em agonia, orava mais intensamente. E o seu suor tornou-se em grandes gotas de sangue que corriam até ao chão.
⁴⁵ E, levantando-se da oração, foi ter com os seus discípulos e achou-os dormindo de tristeza.
⁴⁶ E disse-lhes: Por que estais dormindo? Levantai-vos,e orai para que não entreis em tentação.
⁴⁷ E, estando ele ainda a falar, surgiu uma multidão; e um dos doze, que se chamava Judas, ia adiante dela e chegou-se a Jesus para o beijar.
⁴⁸ E Jesus lhe disse: Judas, com um beijo trais o Filho do Homem?
⁴⁹ E, vendo os que estavam com ele o que ia suceder, disseram-lhe: Senhor, feriremos à espada?
⁵⁰ E um deles feriu o servo do sumo sacerdote e cortou-lhe a orelha direita.
⁵¹ E, respondendo Jesus, disse: Deixai-os; basta. E, tocando-lhe a orelha, o curou.
⁵² E disse Jesus aos principais dos sacerdotes, e capitães do templo, e anciãos que tinham ido contra ele: Saístes com espadas e porretes, como para deter um salteador?
⁵³ Tenho estado todos os dias convosco no templo e não estendestes as mãos contra mim,mas esta é a vossa hora e o poder das trevas.
⁵⁴ Então, prendendo-o, o levaram e o meteram em casa do sumo sacerdote. E Pedro seguia-o de longe.
⁵⁵ E, havendo-se acendido fogo no meio do pátio, estando todos sentados, assentou-se Pedro entre eles.
⁵⁶ E como certa criada, vendo-o estar assentado ao fogo, pusesse os olhos nele, disse: Este também estava com ele.
⁵⁷ Porém ele negou-o, dizendo: Mulher, não o conheço.
⁵⁸ E, um pouco depois, vendo-o outro, disse: Tu és também deles. Mas Pedro disse: Homem, não sou.
⁵⁹ E, passada quase uma hora, um outro afirmava, dizendo: Também este verdadeiramente estava com ele, pois também é galileu.
⁶⁰ E Pedro disse: Homem, não sei o que dizes. E logo, estando ele ainda a falar, cantou o galo.
⁶¹ E, virando-se o Senhor, olhou para Pedro, e Pedro lembrou-se da palavra do Senhor, como lhe tinha dito: Antes que o galo cante hoje, me negarás três vezes.
⁶² E, saindo Pedro para fora, chorou amargamente.
⁶³ E os homens que detinham Jesus zombavam dele, ferindo-o.
⁶⁴ E, vendando-lhe os olhos, feriam-no no rosto e perguntavam-lhe, dizendo: Profetiza-nos: quem é que te feriu?
⁶⁵ E outras muitas coisas diziam contra ele, blasfemando.
⁶⁶ E logo que foi dia, ajuntaram-se os anciãos do povo, e os principais dos sacerdotes, e os escribas, e o conduziram ao seu concílio,
⁶⁷ e lhe perguntaram: Se tu és o Cristo, dize-nos. Ele replicou: Se vo-lo disser, não o crereis;
⁶⁸ e também, se vos perguntar, não me respondereis, nem me soltareis.
⁶⁹ Desdeagora, o Filho do Homem se assentará à direita do poder de Deus.
⁷⁰ Então todos perguntaram se Ele era o Filho de Deus. Jesus respondeu que eles mesmos estavam dizendo isso.`,

 
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual apóstolo Satanás entrou nele para trair Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Pedro", correta: false },
                            { numero: 2, texto: "Judas Iscariotes", correta: true },
                            { numero: 3, texto: "Tomé", correta: false },
                            { numero: 4, texto: "Tiago", correta: false }
                        ],
                        explicacao: "Lucas 22:3 - Entrou, porém, Satanás em Judas, que tinha por sobrenome Iscariotes.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus disse sobre o cálice na ceia?",
                        opcoes: [
                            { numero: 1, texto: "É o vinho da festa", correta: false },
                            { numero: 2, texto: "Este cálice é o novo testamento no meu sangue", correta: true },
                            { numero: 3, texto: "Não bebam deste cálice", correta: false },
                            { numero: 4, texto: "É o símbolo da união", correta: false }
                        ],
                        explicacao: "Lucas 22:20 - Este cálice é o novo testamento no meu sangue, que é derramado por vós.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus suou enquanto orava no Getsêmani (Monte das Oliveiras)?",
                        opcoes: [
                            { numero: 1, texto: "Água fria", correta: false },
                            { numero: 2, texto: "Lágrimas de fogo", correta: false },
                            { numero: 3, texto: "Grandes gotas de sangue", correta: true },
                            { numero: 4, texto: "Azeite puro", correta: false }
                        ],
                        explicacao: "Lucas 22:44 - E o seu suor tornou-se como grandes gotas de sangue.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        23: {
            titulo: "Julgamento e Crucificação",
            texto: `¹ E, levantando-se toda a multidão deles, o levaram a Pilatos.
² E começaram a acusá-lo, dizendo: Havemos achado este pervertendo a nossa nação, proibindo dar o tributo a César e dizendo que ele mesmo é Cristo, o rei.
³ E Pilatos perguntou-lhe, dizendo: Tu és o Rei dos judeus? E ele, respondendo, disse-lhe: Tu o dizes.
⁴ E disse Pilatos aos principais dos sacerdotes e à multidão: Não acho culpa alguma neste homem.
⁵ Mas eles insistiam cada vez mais, dizendo: Alvoroça o povo ensinando por toda a Judeia, começando desde a Galileia até aqui.
⁶ Então, Pilatos, ouvindo falar da Galileia, perguntou se aquele homem era galileu.
⁷ E, sabendo que era da jurisdição de Herodes, remeteu-o a Herodes, que também, naqueles dias, estava em Jerusalém.
⁸ E Herodes, quando viu a Jesus, alegrou-se muito, porque havia muito que desejava vê-lo, por ter ouvido dele muitas coisas; e esperava que lhe veria fazer algum sinal.
⁹ E interrogava-o com muitas palavras, mas ele nada lhe respondia.
¹⁰ E estavam os principais dos sacerdotes e os escribas acusando-o com grande veemência.
¹¹ E Herodes, com os seus soldados, desprezou-o, e, escarnecendo dele, vestiu-o de uma roupa resplandecente, e tornou a enviá-lo a Pilatos.
¹² E, no mesmo dia, Pilatos e Herodes, entre si, se fizeram amigos; pois, dantes, andavam em inimizade um com o outro.
¹³ E, convocando Pilatos os principais dos sacerdotes, e os magistrados, e o povo, disse-lhes:
¹⁴ Haveis-me apresentado este homem como pervertedor do povo; e eis que, examinando-o na vossa presença, nenhuma culpa, das de que o acusais, acho neste homem.
¹⁵ Nem mesmo Herodes, porque a ele vos remeti, e eis que não tem feito coisa alguma digna de morte.
¹⁶ Castigá-lo-ei, pois, e soltá-lo-ei.
¹⁷ E era-lhe necessário soltar-lhes um detento por ocasião da festa.
¹⁸ Mas toda a multidão clamou à uma, dizendo: Fora daqui com este e solta-nos Barrabás.
¹⁹ Barrabás fora lançado na prisão por causa de uma sedição feita na cidade e de um homicídio.
²⁰ Falou, pois, outra vez Pilatos, querendo soltar a Jesus.
²¹ Mas eles clamavam em contrário, dizendo: Crucifica-o! Crucifica-o!
²² Então, ele, pela terceira vez, lhes disse: Mas que mal fez este? Não acho nele culpa alguma de morte. Castigá-lo-ei, pois, e soltá-lo-ei.
²³ Mas eles instavam com grandes gritos, pedindo que fosse crucificado. E os seus gritos e os dos principais dos sacerdotes redobravam.
²⁴ Então, Pilatos julgou que devia fazer o que eles pediam.
²⁵ E soltou-lhes o que fora lançado na prisão por uma sedição e homicídio, que era o que pediam; mas entregou Jesus à vontade deles.
²⁶ E, quando o iam levando, tomaram um certo Simão, cireneu, que vinha do campo, e puseram-lhe a cruz às costas, para que a levasse após Jesus.
²⁷ E seguia-o grande multidão de povo e de mulheres, as quais batiam nos peitos e o lamentavam.
²⁸ Porém Jesus, voltando-se para elas, disse: Filhas de Jerusalém, não choreis por mim; chorai, antes, por vós mesmas e por vossos filhos.
²⁹ Porqueeis que hão de vir dias em que dirão: Bem-aventuradas as estéreis, e os ventres que não geraram, e os peitos que não amamentaram!
³⁰ Então,começarão a dizer aos montes: Caí sobre nós! E aos outeiros: Cobri-nos!
³¹ Porque,se ao madeiro verde fazem isso, que se fará ao seco?
³² E também conduziram outros dois, que eram malfeitores, para com ele serem mortos.
³³ E, quando chegaram ao lugar chamado a Caveira, ali o crucificaram e aos malfeitores, um, à direita, e outro, à esquerda.
³⁴ E dizia Jesus: Pai,perdoa-lhes, porque não sabem o que fazem. E, repartindo as suas vestes, lançaram sortes.
³⁵ E o povo estava olhando. E também os príncipes zombavam dele, dizendo: Aos outros salvou; salve-se a si mesmo, se este é o Cristo, o escolhido de Deus.
³⁶ E também os soldados escarneciam dele, chegando-se a ele, e apresentando-lhe vinagre,
³⁷ e dizendo: Se tu és o Rei dos judeus, salva-te a ti mesmo.
³⁸ E também, por cima dele, estava um título, escrito em letras gregas, romanas e hebraicas: Este é O Rei dos Judeus.
³⁹ E um dos malfeitores que estavam pendurados blasfemava dele, dizendo: Se tu és o Cristo, salva-te a ti mesmo e a nós.
⁴⁰ Respondendo, porém, o outro, repreendia-o, dizendo: Tu nem ainda temes a Deus, estando na mesma condenação?
⁴¹ E nós, na verdade, com justiça, porque recebemos o que os nossos feitos mereciam; mas este nenhum mal fez.
⁴² E disse a Jesus: Senhor, lembra-te de mim, quando entrares no teu Reino.
⁴³ E disse-lhe Jesus: Em verdade te digo que hoje estarás comigo no Paraíso.
⁴⁴ E era já quase a hora sexta, e houve trevas em toda a terra até à hora nona,
⁴⁵ escurecendo-se o sol; e rasgou-se ao meio o véu do templo.
⁴⁶ E, clamando Jesus com grande voz, disse: Pai, nas tuas mãos entrego o meu espírito. E, havendo dito isso, expirou.
⁴⁷ E o centurião, vendo o que tinha acontecido, deu glória a Deus, dizendo: Na verdade, este homem era justo.
⁴⁸ E toda a multidão que se ajuntara a este espetáculo, vendo o que havia acontecido, voltava batendo nos peitos.
49 E todos os seus conhecidos e as mulheres que juntamente o haviam seguido desde a Galileia estavam de longe vendo essas coisas.
50 E eis que um homem por nome José, senador, homem bem e justo,
51 que não tinha consentido no conselho e no ato dos outros, de Arimateia, cidade dos judeus, e que também esperava o Reino de Deus,
52 esse, chegando a Pilatos, pediu o corpo de Jesus.
53 E, havendo-o tirado, envolveu-o num lençol fino e pô-lo num sepulcro lavrado em rocha, onde ninguém ainda havia sido posto.
54 E era o dia da Preparação, e amanhecia o sábado.
55 E as mulheres que tinham vindo com ele da Galileia seguiram também e viram o sepulcro e como foi posto o seu corpo.
56 E, voltando elas, prepararam especiarias e unguentos e, no sábado, repousaram, conforme o mandamento.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Além de Pilatos, qual outro governante interrogou Jesus?",
                        opcoes: [
                            { numero: 1, texto: "César", correta: false },
                            { numero: 2, texto: "Herodes", correta: true },
                            { numero: 3, texto: "Félix", correta: false },
                            { numero: 4, texto: "Agripa", correta: false }
                        ],
                        explicacao: "Lucas 23:7 - Remeteu-o a Herodes, que também naqueles dias estava em Jerusalém.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Jesus disse ao malfeitor arrependido na cruz?",
                        opcoes: [
                            { numero: 1, texto: "Hoje estarás comigo no paraíso", correta: true },
                            { numero: 2, texto: "Tu serás castigado", correta: false },
                            { numero: 3, texto: "Desce da cruz agora", correta: false },
                            { numero: 4, texto: "Amanhã nos veremos", correta: false }
                        ],
                        explicacao: "Lucas 23:43 - Em verdade te digo que hoje estarás comigo no Paraíso.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem pediu o corpo de Jesus para sepultá-lo?",
                        opcoes: [
                            { numero: 1, texto: "Pedro", correta: false },
                            { numero: 2, texto: "João", correta: false },
                            { numero: 3, texto: "José de Arimateia", correta: true },
                            { numero: 4, texto: "Maria Madalena", correta: false }
                        ],
                        explicacao: "Lucas 23:50-52 - Este (José de Arimateia) foi ter com Pilatos, e pediu o corpo de Jesus.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        24: {
            titulo: "Ressurreição e Ascensão",
            texto: `1 E, no primeiro dia da semana, muito de madrugada, foram elas ao sepulcro, levando as especiarias que tinham preparado, e algumas outras com elas.
2 E acharam a pedra revolvida do sepulcro.
3 E, entrando, não acharam o corpo do Senhor Jesus.
4 E aconteceu que, estando elas perplexas a esse respeito, eis que pararam junto delas dois varões com vestes resplandecentes.
5 E, estando elas atemorizadas e abaixando o rosto para o chão, eles lhes disseram: Por que buscais o vivente entre os mortos?
6 Não está aqui, mas ressuscitou. Lembrai-vos de como vos falou, estando ainda na Galileia,
7 dizendo: Importa que o Filho do Homem seja entregue nas mãos de homens pecadores, e seja crucificado, e, ao terceiro dia, ressuscite.
8 E lembraram-se das suas palavras.
9 E, voltando do sepulcro, anunciaram todas essas coisas aos onze e a todos os demais.
10 E eram Maria Madalena, e Joana, e Maria, mãe de Tiago, e as outras que com elas estavam as que diziam estas coisas aos apóstolos.
11 E as suas palavras lhes pareciam como desvario, e não as creram.
12 Pedro, porém, levantando-se, correu ao sepulcro e, abaixando-se, viu só os lençóis ali postos; e retirou-se admirando consigo aquele caso.
13 E eis que, no mesmo dia, iam dois deles para uma aldeia chamada Emaús, que distava de Jerusalém sessenta estádios.
14 E iam falando entre si de todas aquelas coisas que haviam sucedido.
15 E aconteceu que, indo eles falando entre si e perguntando-se um ao outro, o mesmo Jesus se aproximou e ia com eles.
16 Mas os olhos deles estavam como que fechados, para que o não conhecessem.
17 E ele lhes disse: Que palavras são essas que, caminhando, trocais entre vós e por que estais tristes?
18 E, respondendo um, cujo nome era Cleofas, disse-lhe: És tu só peregrino em Jerusalém e não sabes as coisas que nela têm sucedido nestes dias?
19 E ele lhes perguntou: Quais? E eles lhe disseram: As que dizem respeito a Jesus, o Nazareno, que foi varão profeta, poderoso em obras e palavras diante de Deus e de todo o povo;
20 e como os principais dos sacerdotes e os nossos magistrados o entregaram à condenação de morte e o crucificaram.
21 E nós esperávamos que fosse ele o que remisse Israel; mas, agora, com tudo isso, é já hoje o terceiro dia desde que essas coisas aconteceram.
22 É verdade que também algumas mulheres de entre nós nos maravilharam, as quais de manhã cedo foram ao sepulcro;
23 e, não achando o seu corpo, voltaram, dizendo que também tinham visto uma visão de anjos, os quais dizem que ele vive.
24 E alguns dos que estavam connosco foram ao sepulcro e acharam ser assim como as mulheres haviam dito; porém a ele não o viram.
25 E ele lhes disse: Ó néscios e tardos de coração para crer tudo o que os profetas disseram!
26 Porventura, não convinha que o Cristo padecesse essas coisas e entrasse na sua glória?
27 E, começando por Moisés e por todos os profetas, explicava-lhes o que dele se achava em todas as Escrituras.
28 E chegaram à aldeia para onde iam, e ele fez como quem ia para mais longe.
29 E eles o constrangeram, dizendo: Fica connosco, porque já é tarde, e já declinou o dia. E entrou para ficar com eles.
30 E aconteceu que, estando com eles à mesa, tomando o pão, o abençoou e partiu-o e lho deu.
31 Abriram-se-lhes, então, os olhos, e o conheceram, e ele desapareceu-lhes.
32 E disseram um para o outro: Porventura, não ardia em nós o nosso coração quando, pelo caminho, nos falava e quando nos abria as Escrituras?
33 E, na mesma hora, levantando-se, tornaram para Jerusalém e acharam congregados os onze e os que estavam com eles,
34 os quais diziam: Ressuscitou verdadeiramente o Senhor e já apareceu a Simão.
35 E eles contaram o que lhes acontecera no caminho, e como deles fora conhecido no partir do pão.
36 E, falando eles dessas coisas, o mesmo Jesus se apresentou no meio deles e disse-lhes: Paz seja convosco.
37 E eles, espantados e atemorizados, pensavam que viam algum espírito.
38 E ele lhes disse: Por que estais perturbados, e por que sobem tais pensamentos ao vosso coração?
39 Vede as minhas mãos e os meus pés, que sou eu mesmo; apalpai-me e vede, pois um espírito não tem carne nem ossos, como vedes que eu tenho.
40 E, dizendo isso, mostrou-lhes as mãos e os pés.
41 E, não o crendo eles ainda por causa da alegria e estando maravilhados, disse-lhes: Tendes aqui alguma coisa que comer?
42 Então, apresentaram-lhe parte de um peixe assado e um favo de mel,
43 o que ele tomou e comeu diante deles.
44 E disse-lhes: São estas as palavras que vos disse estando ainda convosco: que convinha que se cumprisse tudo o que de mim estava escrito na Lei de Moisés, e nos Profetas, e nos Salmos.
45 Então, abriu-lhes o entendimento para compreenderem as Escrituras.
46 E disse-lhes: Assim está escrito, e assim convinha que o Cristo padecesse e, ao terceiro dia, ressuscitasse dos mortos;
47 e que, em seu nome, se pregasse o arrependimento e a remissão dos pecados, em todas as nações, começando por Jerusalém.
48 E dessas coisas sois vós testemunhas.
49 E eis que sobre vós envio a promessa de meu Pai; ficai, porém, na cidade de Jerusalém, até que do alto sejais revestidos de poder.
50 E levou-os fora, até Betânia; e, levantando as mãos, os abençoou.
51 E aconteceu que, abençoando-os ele, se apartou deles e foi elevado ao céu.
52 E, adorando-o eles, tornaram com grande júbilo para Jerusalém.
53 E estavam sempre no templo, louvando e bendizendo a Deus. Ámen! `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Para qual aldeia iam os dois discípulos que conversaram com Jesus ressuscitado no caminho?",
                        opcoes: [
                            { numero: 1, texto: "Jericó", correta: false },
                            { numero: 2, texto: "Emaús", correta: true },
                            { numero: 3, texto: "Belém", correta: false },
                            { numero: 4, texto: "Nazaré", correta: false }
                        ],
                        explicacao: "Lucas 24:13 - Dois deles iam para uma aldeia chamada Emaús.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Em que momento os discípulos de Emaús reconheceram Jesus?",
                        opcoes: [
                            { numero: 1, texto: "Ao verem Suas mãos", correta: false },
                            { numero: 2, texto: "Ao ouvirem Sua voz", correta: false },
                            { numero: 3, texto: "Ao partir do pão", correta: true },
                            { numero: 4, texto: "Ao chegar na aldeia", correta: false }
                        ],
                        explicacao: "Lucas 24:35 - Como fora por eles conhecido no partir do pão.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Onde Jesus estava quando foi elevado ao céu?",
                        opcoes: [
                            { numero: 1, texto: "Em Jerusalém", correta: false },
                            { numero: 2, texto: "No mar da Galileia", correta: false },
                            { numero: 3, texto: "No alto do templo", correta: false },
                            { numero: 4, texto: "Em Betânia", correta: true }
                        ],
                        explicacao: "Lucas 24:50 - E levou-os fora, até Betânia... foi elevado ao céu.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};