// js/livros/segundo_samuel.js
// ═══════════════════════════════════════════════════════════════════════════════
// LIVRO: 2 SAMUEL (24 Capítulos) - ESTRUTURA COMPLETA
// ═══════════════════════════════════════════════════════════════════════════════

export const segundo_samuel = {
    nome: "2 Samuel",
    icone: "⚔️",
    background: "./imagens/segundo_samuel_bg.jpg",
    autor: "Gade e Natã",
    totalCapitulos: 24,
    
    capitulos: {
        1: {
            titulo: "A notícia da morte de Saul",
            texto: `
¹ E, depois da morte de Saul, voltando Davi da derrota dos amalequitas e ficando Davi dois dias em Ziclague,
² sucedeu, ao terceiro dia, que um homem veio do arraial de Saul com as vestes rotas e com terra sobre a cabeça; e sucedeu que, chegando ele a Davi, se lançou no chão e se inclinou.
³ E Davi lhe disse: De onde vens? E ele lhe disse: Escapei do exército de Israel.
⁴ E disse-lhe Davi: Como foi lá isso? Peço-te, dize-me. E ele lhe respondeu: O povo fugiu da batalha, e muitos do povo caíram e morreram, assim como também Saul e Jônatas, seu filho, foram mortos.
⁵ E disse Davi ao jovem que lhe trazia as novas: Como sabes tu que Saul e Jônatas, seu filho, são mortos?
⁶ Então, disse o jovem que lhe dava a notícia: Cheguei por acaso à montanha de Gilboa, e eis que Saul estava encostado sobre a sua lança, e eis que os carros e capitães de cavalaria apertavam com ele.
⁷ E, olhando ele para trás de si, viu-me a mim e chamou-me; e eu disse: Eis-me aqui.
⁸ E ele me disse: Quem és tu? E eu lhe disse: Sou amalequita.
⁹ Então, ele me disse: Peço-te, arremessa-te sobre mim e mata-me, porque angústias me têm cercado, pois toda a minha vida está ainda em mim.
¹⁰ Arremessei-me, pois, sobre ele, e o matei, porque bem sabia eu que não viveria depois da sua queda, e tomei a coroa que tinha na cabeça e a manilha que trazia no braço, e as trouxe aqui a meu senhor.
¹¹ Então, apanhou Davi as suas vestes e as rasgou, como também todos os homens que estavam com ele.
¹² E prantearam, e choraram, e jejuaram até à tarde por Saul, e por Jônatas, seu filho, e pelo povo do Senhor, e pela casa de Israel, porque tinham caído à espada.
¹³ Disse, então, Davi ao jovem que lhe trouxera a nova: De onde és tu? E disse ele: Sou filho de um homem estrangeiro, amalequita.
¹⁴ E Davi lhe disse: Como não temeste tu estender a mão para matares o ungido do Senhor?
¹⁵ Então, chamou Davi a um dos jovens e disse: Chega e lança-te sobre ele. E ele o feriu, e morreu.
¹⁶ E disse-lhe Davi: O teu sangue seja sobre a tua cabeça, porque a tua própria boca testificou contra ti, dizendo: Eu matei o ungido do Senhor.
  O pranto de Davi por Saul e Jônatas
¹⁷ E lamentou Davi a Saul e a Jônatas, seu filho, com esta lamentação,
¹⁸ dizendo ele que ensinassem aos filhos de Judá o uso do arco. Eis que está escrito no livro do Reto:
¹⁹ Ah! Ornamento de Israel! Nos teus altos, fui ferido; como caíram os valentes!
²⁰ Não o noticieis em Gate, não o publiqueis nas ruas de Asquelom, para que não se alegrem as filhas dos filisteus, para que não saltem de contentamento as filhas dos incircuncisos.
²¹ Vós, montes de Gilboa, nem orvalho, nem chuva caia sobre vós nem sobre vós, campos de ofertas alçadas, pois aí desprezivelmente foi arrojado o escudo dos valentes, o escudo de Saul, como se não fora ungido com óleo.
²² Do sangue dos feridos, da gordura dos valentes, nunca se retirou para trás o arco de Jônatas, nem voltou vazia a espada de Saul.
²³ Saul e Jônatas, tão amados e queridos na sua vida, também na sua morte se não separaram! Eram mais ligeiros do que as águias, mais fortes do que os leões.
²⁴ Vós, filhas de Israel, chorai por Saul, que vos vestia de escarlata em delícias, que vos fazia trazer ornamentos de ouro sobre as vossas vestes.
²⁵ Como caíram os valentes no meio da peleja! Jônatas nos teus altos foi ferido!
²⁶ Angustiado estou por ti, meu irmão Jônatas; quão amabilíssimo me eras! Mais maravilhoso me era o teu amor do que o amor das mulheres.
²⁷ Como caíram os valentes, e pereceram as armas de guerra! 

`,
            pergunta: {
                texto: "O que Davi fez ao saber da morte de Saul e Jônatas?",
                opcoes: [
                    { numero: 1, texto: "Chorou, jejuou e lamentou", correta: true },
                    { numero: 2, texto: "Fez uma grande festa", correta: false },
                    { numero: 3, texto: "Atacou os filisteus imediatamente", correta: false },
                    { numero: 4, texto: "Proclamou-se rei em Jerusalém", correta: false }
                ],
                explicacao: "Davi pranteou profundamente a morte do 'ungido do Senhor' e de seu amigo Jônatas.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 1:11-12"
            }
        },
        2: {
            titulo: "Davi ungido rei de Judá",
            texto: `
¹ E sucedeu, depois disso, que Davi consultou ao Senhor, dizendo: Subirei a alguma das cidades de Judá? E disse-lhe o Senhor: Sobe. E disse Davi: Para onde subirei? E disse: Para Hebrom.
² E subiu Davi para lá, e também as suas duas mulheres, Ainoã, a jezreelita, e Abigail, a mulher de Nabal, o carmelita.
³ Fez também Davi subir os homens que estavam com ele, cada um com a sua família; e habitaram nas cidades de Hebrom.
⁴ Então, vieram os homens de Judá e ungiram ali a Davi rei sobre a casa de Judá. E deram avisos a Davi, dizendo: Os homens de Jabes-Gileade são os que sepultaram Saul.
⁵ Então, enviou Davi mensageiros aos homens de Jabes-Gileade e disse-lhes: Benditos sejais vós do Senhor, que fizestes tal beneficência a vosso senhor, a Saul, e o sepultastes!
⁶ Agora, pois, o Senhor use convosco de beneficência e fidelidade; e também eu vos farei esse bem, porquanto fizestes isso.
⁷ Esforcem-se, pois, agora as vossas mãos, e sede homens valentes, pois Saul, vosso senhor, é morto, mas também os da casa de Judá já me ungiram a mim rei sobre si.
 Abner faz Isbosete rei de Israel
⁸ Porém Abner, filho de Ner, capitão do exército de Saul, tomou a Isbosete, filho de Saul, e o fez passar a Maanaim.
⁹ E o constituiu rei sobre Gileade, e sobre os assuritas, e sobre Jezreel, e sobre Efraim, e sobre Benjamim, e sobre todo o Israel.
¹⁰ Da idade de quarenta anos era Isbosete, filho de Saul, quando começou a reinar sobre Israel, e reinou dois anos; mas os da casa de Judá seguiam a Davi.
¹¹ E foi o número dos dias que Davi reinou em Hebrom, sobre a casa de Judá, sete anos e seis meses.
  Vitória de Davi sobre Isbosete
¹² Então, saiu Abner, filho de Ner, com os servos de Isbosete, filho de Saul, de Maanaim a Gibeão.
¹³ Saíram também Joabe, filho de Zeruia, e os servos de Davi, e se encontraram uns com os outros perto do tanque de Gibeão, e pararam estes desta banda do tanque e os outros daquela banda do tanque.
¹⁴ E disse Abner a Joabe: Deixa levantar os jovens, e joguem diante de nós. E disse Joabe: Levantem-se.
¹⁵ Então, se levantaram e passaram, por conta, doze de Benjamim, da parte de Isbosete, filho de Saul, e doze dos servos de Davi.
¹⁶ E cada um lançou mão da cabeça do outro, meteu-lhe a espada pelo lado, e caíram juntamente; de onde se chamou àquele lugar Helcate-Hazurim, que está junto a Gibeão.
¹⁷ E seguiu-se, naquele dia, uma crua peleja; porém Abner e os homens de Israel foram feridos diante dos servos de Davi.
¹⁸ E estavam ali os três filhos de Zeruia, Joabe, Abisai e Asael; e Asael era ligeiro de pés, como uma das cabras monteses que há no campo.
¹⁹ E Asael seguiu após Abner e não declinou de detrás de Abner, nem para a direita nem para a esquerda.
²⁰ E Abner, olhando para trás, disse: És tu Asael? E disse ele: Eu sou.
²¹ Então, lhe disse Abner: Desvia-te para a direita ou para a esquerda, e lança mão de um dos jovens, e toma os seus despojos. Porém Asael não quis desviar-se de detrás dele.
²² Então, Abner tornou a dizer a Asael: Desvia-te de detrás de mim; por que hei de eu ferir-te e dar contigo em terra? E como levantaria eu o meu rosto diante de Joabe, teu irmão?
²³ Porém, não se querendo ele desviar, Abner o feriu com o conto da lança pela quinta costela, e a lança lhe saiu por detrás, e caiu ali e morreu naquele mesmo lugar; e sucedeu que todos os que chegavam ao lugar onde Asael caiu e morreu paravam.
²⁴ Porém Joabe e Abisai seguiram após Abner; e pôs-se o sol, chegando eles ao outeiro de Amá, que está diante de Giá, junto ao caminho do deserto de Gibeão.
²⁵ E os filhos de Benjamim se ajuntaram detrás de Abner, e fizeram um batalhão, e puseram-se no cume de um outeiro.
²⁶ Então, Abner gritou a Joabe e disse: Consumirá a espada para sempre? Não sabes tu que por fim haverá amargura? E até quando não hás de dizer ao povo que deixe de seguir a seus irmãos?
²⁷ E disse Joabe: Vive Deus, que, se não tivesses falado já desde pela manhã, o povo teria cessado cada um de seguir a seu irmão.
²⁸ Então, Joabe tocou a buzina, e todo o povo parou, e não perseguiram mais a Israel e tampouco pelejaram mais.
²⁹ E caminharam Abner e os seus homens toda aquela noite pela planície; e, passando o Jordão, caminharam por todo o Bitrom, e vieram a Maanaim.
³⁰ Também Joabe se tornou de seguir a Abner e ajuntou todo o povo, e dos servos de Davi faltaram dezenove homens além de Asael.
³¹ Porém os servos de Davi feriram dentre os de Benjamim e dentre os homens de Abner a trezentos e sessenta homens, que ali ficaram mortos.
³² E levantaram a Asael e sepultaram-no na sepultura de seu pai, que estava em Belém; e Joabe e seus homens caminharam toda aquela noite, e amanheceu-lhes o dia em Hebrom 
`,
            pergunta: {
                texto: "Em qual cidade Davi foi ungido rei sobre a casa de Judá?",
                opcoes: [
                    { numero: 1, texto: "Hebrom", correta: true },
                    { numero: 2, texto: "Belém", correta: false },
                    { numero: 3, texto: "Gibeá", correta: false },
                    { numero: 4, texto: "Silo", correta: false }
                ],
                explicacao: "Davi reinou em Hebrom sobre Judá por sete anos e seis meses.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 2:4"
            }
        },
        3: {
            titulo: "Abner une-se a Davi",
            texto: `
¹ E houve uma longa guerra entre a casa de Saul e a casa de Davi; porém Davi se ia fortalecendo, mas os da casa de Saul se iam enfraquecendo.
² E a Davi nasceram filhos em Hebrom; foi o seu primogênito Amom, de Ainoã, a jezreelita;
³ e seu segundo, Quileabe, de Abigail, mulher de Nabal, o carmelita; e o terceiro, Absalão, filho de Maaca, filha de Talmai, rei de Gesur;
⁴ e o quarto, Adonias, filho de Hagite; e o quinto, Sefatias, filho de Abital;
⁵ e o sexto, Itreão, de Eglá, também mulher de Davi; estes nasceram a Davi em Hebrom.
⁶ E, havendo guerra entre a casa de Saul e a casa de Davi, sucedeu que Abner se esforçava na casa de Saul.
  Abner faz aliança com Davi
⁷ E tinha tido Saul uma concubina, cujo nome era Rispa, filha de Aiá; e disse Isbosete a Abner: Por que entraste à concubina de meu pai?
⁸ Então, se irou muito Abner pelas palavras de Isbosete e disse: Sou eu cabeça de cão, que pertença a Judá? Ainda hoje faço beneficência à casa de Saul, teu pai, a seus irmãos e a seus amigos e te não entreguei nas mãos de Davi; e tu hoje buscas motivo para me arguires por causa da maldade de uma mulher.
⁹ Assim faça Deus a Abner e outro tanto, que, como o Senhor jurou a Davi, assim lhe hei de fazer,
¹⁰ transferindo o reino da casa de Saul e levantando o trono de Davi sobre Israel e sobre Judá, desde Dã até Berseba.
¹¹ E nem ainda uma palavra podia responder a Abner, porque o temia.
¹² Então, ordenou Abner da sua parte mensageiros a Davi, dizendo: De quem é a terra? E disse: Comigo faze a tua aliança, e eis que a minha mão será contigo, para tornar a ti todo o Israel.
¹³ E disse Davi: Bem, eu farei contigo aliança, porém uma coisa te peço, que é: não verás a minha face se primeiro me não trouxeres a Mical, filha de Saul, quando vieres ver a minha face.
¹⁴ Também enviou Davi mensageiros a Isbosete, filho de Saul, dizendo: Dá-me minha mulher Mical, que eu desposei por cem prepúcios de filisteus.
¹⁵ E enviou Isbosete e a tirou a seu marido, a Paltiel, filho de Laís.
¹⁶ E ia com ela seu marido, caminhando, e chorando detrás dela, até Baurim. Então, lhe disse Abner: Vai-te, agora, volta. E ele voltou.
¹⁷ E praticava Abner com os anciãos de Israel, dizendo: Muito tempo há que procuráveis que Davi reinasse sobre vós.
¹⁸ Fazei-o, pois, agora, porque o Senhor falou a Davi, dizendo: Pela mão de Davi, meu servo, livrarei o meu povo das mãos dos filisteus e das mãos de todos os seus inimigos.
¹⁹ E falou também Abner o mesmo aos ouvidos de Benjamim; e foi também Abner dizer aos ouvidos de Davi, em Hebrom, tudo o que era bom aos olhos de Israel e aos olhos de toda a casa de Benjamim.
²⁰ E veio Abner a Davi, a Hebrom, e vinte homens com ele; e Davi fez um banquete a Abner e aos homens que com ele vinham.
²¹ Então, disse Abner a Davi: Eu me levantarei, e irei, e ajuntarei ao rei, meu senhor, todo o Israel, para fazerem aliança contigo; e tu reinarás sobre tudo o que desejar a tua alma. Assim, despediu Davi a Abner, e foi-se ele em paz.
 Joabe mata Abner à traição
²² E eis que os servos de Davi e Joabe vieram de uma sortida e traziam consigo grande despojo; e já Abner não estava com Davi em Hebrom, porque este o tinha despedido, e se tinha ido em paz.
²³ Chegando, pois, Joabe e todo o exército que vinha com ele, deram aviso a Joabe, dizendo: Abner, filho de Ner, veio ao rei; e o despediu, e foi-se em paz.
²⁴ Então, Joabe entrou ao rei e disse: Que fizeste? Eis que Abner veio ter contigo; por que, pois, o despediste de maneira que se fosse assim livremente?
²⁵ Bem conheces a Abner, filho de Ner, que te veio enganar, e saber a tua saída e a tua entrada, e entender tudo quanto fazes.
²⁶ E Joabe, retirando-se de Davi, enviou mensageiros atrás de Abner, e o fizeram voltar desde o poço de Sira, sem que Davi o soubesse.
²⁷ Tornando, pois, Abner a Hebrom, Joabe o tomou à parte, à entrada da porta, para lhe falar em segredo, e feriu-o ali pela quinta costela, e morreu por causa do sangue de Asael, seu irmão.
²⁸ O que Davi, depois, ouvindo, disse: Inocentes somos eu e o meu reino, para com o Senhor, para sempre, do sangue de Abner, filho de Ner.
²⁹ Fique-se sobre a cabeça de Joabe e sobre toda a casa de seu pai, e nunca da casa de Joabe falte quem tenha fluxo, nem quem seja leproso, nem quem se atenha a bordão, nem quem caia à espada, nem quem necessite de pão.
³⁰ Joabe, pois, e Abisai, seu irmão, mataram a Abner, por ter morto a Asael, seu irmão, na peleja em Gibeão.
 Davi lamenta a morte de Abner
³¹ Disse, pois, Davi a Joabe e a todo o povo que com ele estava: Rasgai as vossas vestes; e cingi-vos de panos de saco e ide pranteando diante de Abner. E o rei Davi ia seguindo o féretro.
³² E, sepultando a Abner em Hebrom, o rei levantou a sua voz e chorou junto da sepultura de Abner; e chorou todo o povo.
³³ E o rei, pranteando a Abner, disse: Não morreu Abner como morre o vilão?
³⁴ As tuas mãos não estavam atadas, nem os teus pés carregados de grilhões de bronze, mas caíste como os que caem diante dos filhos da maldade! Então, todo o povo chorou muito mais por ele.
³⁵ Então, todo o povo veio fazer que Davi comesse pão, sendo ainda dia, porém Davi jurou, dizendo: Assim Deus me faça e outro tanto, se, antes que o sol se ponha, eu provar pão ou alguma coisa.
³⁶ O que todo o povo entendendo, pareceu bem aos seus olhos, assim como tudo quanto o rei fez pareceu bem aos olhos de todo o povo.
³⁷ E todo o povo e todo o Israel entenderam, naquele mesmo dia, que não procedera do rei que matassem a Abner, filho de Ner.
³⁸ Então, disse o rei aos seus servos: Não sabeis que, hoje, caiu em Israel um príncipe e um grande?
³⁹ Eu, hoje, estou fraco, ainda que seja ungido rei; estes homens, filhos de Zeruia, são mais duros do que eu; o Senhor pagará ao malfeitor, conforme a sua  

`,
            pergunta: {
                texto: "Quem matou Abner à traição?",
                opcoes: [
                    { numero: 1, texto: "Joabe", correta: true },
                    { numero: 2, texto: "Saul", correta: false },
                    { numero: 3, texto: "Davi", correta: false },
                    { numero: 4, texto: "Isbosete", correta: false }
                ],
                explicacao: "Joabe matou Abner para vingar a morte de seu irmão Asael.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 3:27"
            }
        },
        4: {
            titulo: "A morte de Isbosete",
            texto: `
¹ Ouvindo, pois, o filho de Saul que Abner morrera em Hebrom, as mãos se lhe afrouxaram, e todo o Israel pasmou.
² E tinha o filho de Saul dois homens capitães de tropas; e era o nome de um Baaná, e o nome do outro, Recabe, filhos de Rimom, o beerotita, dos filhos de Benjamim, porque também Beerote se reputava de Benjamim.
³ E tinham fugido os beerotitas para Gitaim e ali têm peregrinado até ao dia de hoje.
⁴ E Jônatas, filho de Saul, tinha um filho aleijado de ambos os pés. Era da idade de cinco anos quando as novas de Saul e Jônatas vieram de Jezreel; e sua ama o tomou e fugiu; e sucedeu que, apressando-se ela a fugir, ele caiu e ficou coxo; o seu nome era Mefibosete.
⁵ E foram os filhos de Rimom, o beerotita, Recabe e Baaná, e entraram em casa de Isbosete, no maior calor do dia, estando ele deitado a dormir, ao meio-dia.
⁶ E ali entraram até o meio da casa, como que vindo tomar trigo, e o feriram na quinta costela; e Recabe e Baaná, seu irmão, escaparam.
⁷ Porque entraram na sua casa, estando ele na cama deitado na sua recâmara, e o feriram, e o mataram, e lhe cortaram a cabeça; e, tomando a sua cabeça, andaram toda a noite caminhando pela planície.
⁸ E trouxeram a cabeça de Isbosete a Davi, a Hebrom, e disseram ao rei: Eis aqui a cabeça de Isbosete, filho de Saul, teu inimigo, que te procurava a morte; assim, o Senhor vingou hoje ao rei, meu senhor, de Saul e da sua semente.
⁹ Porém Davi, respondendo a Recabe e a Baaná, seu irmão, filhos de Rimom, o beerotita, disse-lhes: Vive o Senhor que remiu a minha alma de toda a angústia,
¹⁰ pois se, àquele que me trouxe novas, dizendo: Eis que Saul morto é, parecendo-lhe, porém, aos seus olhos que era como quem trazia boas-novas, eu logo lancei mão dele e o matei em Ziclague, cuidando ele que eu, por isso, lhe desse alvíssaras,
¹¹ quanto mais a ímpios homens, que mataram um homem justo em sua casa, sobre a sua cama; agora, pois, não requereria eu o seu sangue de vossas mãos e não vos exterminaria da terra?
¹² E deu Davi ordem aos seus jovens que os matassem; e cortaram-lhes os pés e as mãos e os penduraram sobre o tanque de Hebrom; tomaram, porém, a cabeça de Isbosete e a sepultaram na sepultura de Abner, em Hebrom. 
`,
            pergunta: {
                texto: "O que aconteceu com Isbosete, filho de Saul?",
                opcoes: [
                    { numero: 1, texto: "Foi morto por dois de seus capitães enquanto dormia", correta: true },
                    { numero: 2, texto: "Tornou-se o braço direito de Davi", correta: false },
                    { numero: 3, texto: "Morreu em batalha contra os filisteus", correta: false },
                    { numero: 4, texto: "Fugiu para o Egito", correta: false }
                ],
                explicacao: "Recabe e Baaná mataram Isbosete, mas Davi os puniu por matarem um homem justo.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 4:7-12"
            }
        },
        5: {
            titulo: "Davi rei de todo o Israel",
            texto: `
¹ Então, todas as tribos de Israel vieram a Davi, a Hebrom, e falaram, dizendo: Eis-nos aqui, teus ossos e tua carne somos.
² E também dantes, sendo Saul ainda rei sobre nós, eras tu o que saías e entravas com Israel; e também o Senhor te disse: Tu apascentarás o meu povo de Israel e tu serás chefe sobre Israel.
³ Assim, pois, todos os anciãos de Israel vieram ao rei, a Hebrom; e o rei Davi fez com eles aliança em Hebrom, perante o Senhor; e ungiram Davi rei sobre Israel.
⁴ Da idade de trinta anos era Davi quando começou a reinar; quarenta anos reinou.
⁵ Em Hebrom reinou sobre Judá sete anos e seis meses; e em Jerusalém reinou trinta e três anos sobre todo o Israel e Judá.
⁶ E partiu o rei com os seus homens para Jerusalém, contra os jebuseus que habitavam naquela terra e que falaram a Davi, dizendo: Não entrarás aqui, a menos que lances fora os cegos e os coxos; querendo dizer: Não entrará Davi aqui.
⁷ Porém Davi tomou a fortaleza de Sião; esta é a Cidade de Davi.
⁸ Porque Davi disse naquele dia: Qualquer que ferir os jebuseus e chegar ao canal, e aos coxos, e aos cegos, que a alma de Davi aborrece, será cabeça e capitão. Por isso, se diz: Nem cego nem coxo entrará nesta casa.
⁹ Assim, habitou Davi na fortaleza e lhe chamou a Cidade de Davi; e Davi foi edificando em redor, desde Milo até dentro.
¹⁰ E Davi se ia cada vez mais aumentando e crescendo, porque o Senhor, Deus dos Exércitos, era com ele.
¹¹ E Hirão, rei de Tiro, enviou mensageiros a Davi, e madeira de cedro, e carpinteiros, e pedreiros, que edificaram a Davi uma casa.
¹² E entendeu Davi que o Senhor o confirmava rei sobre Israel e que exaltara o seu reino por amor do seu povo.
  Os filhos de Davi que nasceram em Jerusalém
¹³ E tomou Davi mais concubinas e mulheres de Jerusalém, depois que viera de Hebrom; e nasceram a Davi mais filhos e filhas.
¹⁴ E estes são os nomes dos que lhe nasceram em Jerusalém: Samua, e Sobabe, e Natã, e Salomão,
¹⁵ e Ibar, e Elisua, e Nefegue, e Jafia,
¹⁶ e Elisama, e Eliada, e Elifelete.
¹⁷ Ouvindo, pois, os filisteus que haviam ungido Davi rei sobre Israel, todos os filisteus subiram em busca de Davi; o que ouvindo Davi, desceu à fortaleza.
¹⁸ E os filisteus vieram e se estenderam pelo vale dos Refains.
¹⁹ E Davi consultou o Senhor, dizendo: Subirei contra os filisteus? Entregar-mos-ás nas minhas mãos? E disse o Senhor a Davi: Sobe, porque certamente entregarei os filisteus nas tuas mãos.
²⁰ Então, veio Davi a Baal-Perazim, e feriu-os ali Davi, e disse: Rompeu o Senhor a meus inimigos diante de mim, como quem rompe águas. Por isso, chamou o nome daquele lugar Baal-Perazim.
²¹ E deixaram ali os seus ídolos; e Davi e os seus homens os tomaram.
²² E os filisteus tornaram a subir e se estenderam pelo vale dos Refains.
²³ E Davi consultou o Senhor, o qual disse: Não subirás; mas rodeia por detrás deles e virás a eles por defronte das amoreiras.
²⁴ E há de ser que, ouvindo tu um estrondo de marcha pelas copas das amoreiras, então, te apressarás; porque o Senhor saiu, então, diante de ti, a ferir o arraial dos filisteus.
²⁵ E fez Davi assim como o Senhor lhe tinha ordenado; e feriu os filisteus desde Geba até chegar a Gezer 

`,
            pergunta: {
                texto: "Qual fortaleza Davi conquistou dos jebuseus e chamou de Cidade de Davi?",
                opcoes: [
                    { numero: 1, texto: "Sião (Jerusalém)", correta: true },
                    { numero: 2, texto: "Jericó", correta: false },
                    { numero: 3, texto: "Gaza", correta: false },
                    { numero: 4, texto: "Hazor", correta: false }
                ],
                explicacao: "Davi conquistou a fortaleza de Sião, que se tornou a capital do reino.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 5:7"
            }
        },
        6: {
            titulo: "A Arca vem para Jerusalém",
            texto: `
¹ E tornou Davi a ajuntar todos os escolhidos de Israel, em número de trinta mil.
² E levantou-se Davi e partiu com todo o povo que tinha consigo de Baalá de Judá, para levarem dali para cima a arca de Deus, sobre a qual se invoca o Nome, o nome do Senhor dos Exércitos, que se assenta entre os querubins.
³ E puseram a arca de Deus em um carro novo e a levaram da casa de Abinadabe, que está em Geba; e Uzá e Aiô, filhos de Abinadabe, guiavam o carro novo.
⁴ E, levando-o da casa de Abinadabe, que está em Geba, com a arca de Deus, Aiô ia adiante da arca.
⁵ E Davi e toda a casa de Israel alegravam-se perante o Senhor, com toda sorte de instrumentos de madeira de faia, com harpas, e com saltérios, e com tamboris, e com pandeiros, e com címbalos.
⁶ E, chegando à eira de Nacom, estendeu Uzá a mão à arca de Deus e segurou-a, porque os bois a deixavam pender.
⁷ Então, a ira do Senhor se acendeu contra Uzá, e Deus o feriu ali por esta imprudência; e morreu ali junto à arca de Deus.
⁸ E Davi se contristou, porque o Senhor abrira rotura em Uzá; e chamou aquele lugar Perez-Uzá, até ao dia de hoje.
⁹ E temeu Davi ao Senhor naquele dia e disse: Como virá a mim a arca do Senhor?
¹⁰ E não quis Davi retirar para si a arca do Senhor, para a Cidade de Davi; mas Davi a fez levar à casa de Obede-Edom, o geteu.
¹¹ E ficou a arca do Senhor em casa de Obede-Edom, o geteu, três meses; e abençoou o Senhor a Obede-Edom e a toda a sua casa.
¹² Então, avisaram a Davi, dizendo: Abençoou o Senhor a casa de Obede-Edom e tudo quanto tem, por amor da arca de Deus; foi, pois, Davi e trouxe a arca de Deus para cima, da casa de Obede-Edom, à Cidade de Davi, com alegria.
¹³ E sucedeu que, quando os que levavam a arca do Senhor tinham dado seis passos, sacrificava ele bois e carneiros cevados.
¹⁴ E Davi saltava com todas as suas forças diante do Senhor; e estava Davi cingido de um éfode de linho.
¹⁵ Assim subindo, levavam Davi e todo o Israel a arca do Senhor, com júbilo e ao som das trombetas.
¹⁶ E sucedeu que, entrando a arca do Senhor na Cidade de Davi, Mical, filha de Saul, estava olhando pela janela e, vendo o rei Davi, que ia bailando e saltando diante do Senhor, o desprezou no seu coração.
¹⁷ E, introduzindo a arca do Senhor, a puseram no seu lugar, na tenda que Davi lhe armara; e ofereceu Davi holocaustos e ofertas pacíficas perante o Senhor.
¹⁸ E, acabando Davi de oferecer os holocaustos e ofertas pacíficas, abençoou o povo em nome do Senhor dos Exércitos.
¹⁹ E repartiu a todo o povo e a toda a multidão de Israel, desde os homens até às mulheres, a cada um, um bolo de pão, e um bom pedaço de carne, e um frasco de vinho; então, foi-se todo o povo, cada um para sua casa.
²⁰ E, voltando Davi para abençoar a sua casa, Mical, filha de Saul, saiu a encontrar-se com Davi e disse: Quão honrado foi o rei de Israel, descobrindo-se hoje aos olhos das servas de seus servos, como sem vergonha se descobre qualquer dos vadios.
²¹ Disse, porém, Davi a Mical: Perante o Senhor que me escolheu a mim antes do que a teu pai e a toda a sua casa, mandando-me que fosse chefe sobre o povo do Senhor, sobre Israel, perante o Senhor me tenho alegrado.
²² E ainda mais do que isto me envilecerei e me humilharei aos meus olhos; e das servas, de quem falaste, delas serei honrado.
²³ E Mical, filha de Saul, não teve filhos, até ao dia da sua morte 

`,
            pergunta: {
                texto: "Quem morreu ao tocar na Arca de Deus para a segurar?",
                opcoes: [
                    { numero: 1, texto: "Uzá", correta: true },
                    { numero: 2, texto: "Obede-Edom", correta: false },
                    { numero: 3, texto: "Abinadabe", correta: false },
                    { numero: 4, texto: "Natã", correta: false }
                ],
                explicacao: "Uzá estendeu a mão à Arca porque os bois tropeçavam, e Deus o feriu ali.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 6:6-7"
            }
        },
        7: {
            titulo: "A aliança de Deus com Davi",
            texto: `
¹ E sucedeu que, estando o rei Davi em sua casa, e que o Senhor lhe tinha dado descanso de todos os seus inimigos em redor,
² disse o rei ao profeta Natã: Ora, olha, eu moro em casa de cedros e a arca de Deus mora dentro de cortinas.
³ E disse Natã ao rei: Vai e faze tudo quanto está no teu coração, porque o Senhoré contigo.
⁴ Porém sucedeu, naquela mesma noite, que a palavra do Senhor veio a Natã, dizendo:
⁵ Vai e dize a meu servo, a Davi: Assim diz o Senhor: Edificar-me-ias tu casa para minha habitação?
⁶ Porque em casa nenhuma habitei desde o dia em que fiz subir os filhos de Israel do Egito até ao dia de hoje; mas andei em tenda e em tabernáculo.
⁷ E, em todo lugar em que andei com todos os filhos de Israel, falei porventura alguma palavra com qualquer das tribos de Israel, a quem mandei apascentar o meu povo de Israel, dizendo: Por que me não edificais uma casa de cedros?
⁸ Agora, pois, assim dirás ao meu servo, a Davi: Assim diz o Senhor dos Exércitos: Eu te tomei da malhada, de detrás das ovelhas, para que fosses o chefe sobre o meu povo, sobre Israel.
⁹ E fui contigo, por onde quer que foste, e destruí teus inimigos diante de ti, e fiz para ti um grande nome, como o nome dos grandes que há na terra.
¹⁰ E preparei lugar para o meu povo, para Israel, e o plantarei, para que habite no seu lugar e não mais seja movido, e nunca mais os filhos da perversidade o aflijam como dantes,
¹¹ desde o dia em que mandei que houvesse juízes sobre o meu povo Israel. A ti, porém, te dei descanso de todos os teus inimigos; também o Senhor te faz saber que o Senhor te fará casa.
¹² Quando teus dias forem completos, e vieres a dormir com teus pais, então, farei levantar depois de ti a tua semente, que procederá de ti, e estabelecerei o seu reino.
¹³ Este edificará uma casa ao meu nome, e confirmarei o trono do seu reino para sempre.
¹⁴ Eu lhe serei por pai, e ele me será por filho; e, se vier a transgredir, castigá-lo-ei com vara de homens e com açoites de filhos de homens.
¹⁵ Mas a minha benignidade se não apartará dele, como a tirei de Saul, a quem tirei de diante de ti.
¹⁶ Porém a tua casa e o teu reino serão firmados para sempre diante de ti; teu trono será firme para sempre.
¹⁷ Conforme todas estas palavras e conforme toda esta visão, assim falou Natã a Davi.
¹⁸ Então, entrou o rei Davi, e ficou perante o Senhor, e disse: Quem sou eu, Senhor Jeová, e qual é a minha casa, que me trouxeste até aqui?
¹⁹ E ainda foi isso pouco aos teus olhos, Senhor Jeová, senão que também falaste da casa de teu servo para tempos distantes; é isso o costume dos homens, ó Senhor Jeová?
²⁰ E que mais te falará ainda Davi? Pois tu conheces bem a teu servo, ó Senhor Jeová.
²¹ Por causa da tua palavra e segundo o teu coração, fizeste toda esta grandeza, fazendo-a saber a teu servo.
²² Portanto, grandioso és, ó Senhor Jeová, porque não há semelhante a ti, e não há outro Deus, senão tu só, segundo tudo o que temos ouvido com os nossos ouvidos.
²³ E quem há como o teu povo, como Israel, gente única na terra, a quem Deus foi resgatar para seu povo? E a fazer-se um nome e a fazer-vos estas grandes e terríveis coisas, para a tua terra, diante do teu povo, que tu resgataste do Egito, desterrando as nações e a seus deuses?
²⁴ E confirmaste a teu povo Israel por teu povo para sempre e tu, Senhor, te fizeste o seu Deus.
²⁵ Agora, pois, ó Senhor Jeová, esta palavra que falaste acerca de teu servo e acerca da sua casa, confirma-a para sempre e faze como tens falado.
²⁶ E engrandeça-se o teu nome para sempre, para que se diga: O Senhor dos Exércitos é Deus sobre Israel; e a casa de teu servo será confirmada diante de ti.
²⁷ Pois tu, Senhor dos Exércitos, Deus de Israel, revelaste aos ouvidos de teu servo, dizendo: Edificar-te-ei casa. Portanto, o teu servo achou no seu coração o fazer-te esta oração.
²⁸ Agora, pois, Senhor Jeová, tu és o mesmo Deus, e as tuas palavras são verdade, e tens falado a teu servo este bem.
²⁹ Sê, pois, agora servido de abençoar a casa de teu servo, para permanecer para sempre diante de ti, pois tu, ó Senhor Jeová, o disseste; e com a tua bênção será sempre bendita a casa de teu servo 

`,
            pergunta: {
                texto: "O que Davi queria construir para Deus?",
                opcoes: [
                    { numero: 1, texto: "Uma casa (Templo) de cedro", correta: true },
                    { numero: 2, texto: "Um novo tabernáculo", correta: false },
                    { numero: 3, texto: "Um altar de ouro", correta: false },
                    { numero: 4, texto: "Uma estátua", correta: false }
                ],
                explicacao: "Davi sentiu desconforto por morar em cedro enquanto a Arca estava em cortinas.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 7:2"
            }
        },
        8: {
            titulo: "As vitórias de Davi",
            texto: `
¹ E sucedeu, depois disso, que Davi feriu os filisteus e os sujeitou; e Davi tomou a Metegue-Amá das mãos dos filisteus.
² Também feriu os moabitas, e os mediu com cordel, fazendo-os deitar por terra, e os mediu com dois cordéis para os matar, e com um cordel inteiro para os deixar em vida; ficaram, assim, os moabitas por servos de Davi, trazendo presentes.
³ Feriu também Davi a Hadadezer, filho de Reobe, rei de Zobá, indo ele a virar a sua mão para o rio Eufrates.
⁴ E tomou-lhe Davi mil e seiscentos cavaleiros e vinte mil homens de pé; e Davi jarretou todos os cavalos dos carros e reservou deles cem carros.
⁵ E vieram os siros de Damasco a socorrer a Hadadezer, rei de Zobá; porém Davi feriu dos siros vinte e dois mil homens.
⁶ E Davi pôs guarnições na Síria de Damasco, e os siros ficaram por servos de Davi, trazendo presentes; e o Senhor guardou a Davi por onde quer que ia.
⁷ E Davi tomou os escudos de ouro que havia com os servos de Hadadezer e os trouxe a Jerusalém.
⁸ Tomou mais o rei Davi uma quantidade mui grande de bronze de Betá e de Berotai, cidades de Hadadezer.
⁹ Ouvindo, então, Toí, rei de Hamate, que Davi ferira a todo o exército de Hadadezer,
¹⁰ mandou Toí seu filho Jorão ao rei Davi, para lhe perguntar como estava e para lhe dar os parabéns por haver pelejado contra Hadadezer e por o haver ferido (porque Hadadezer de contínuo fazia guerra a Toí); e na sua mão trazia vasos de prata, e vasos de ouro, e vasos de bronze,
¹¹ os quais também o rei Davi consagrou ao Senhor, juntamente com a prata e ouro que já havia consagrado de todas as nações que sujeitara:
¹² da Síria, e de Moabe, e dos filhos de Amom, e dos filisteus, e de Amaleque, e dos despojos de Hadadezer, filho de Reobe, rei de Zobá.
¹³ Também Davi ganhou nome, voltando ele de ferir os siros no vale do Sal, a saber, a dezoito mil.
¹⁴ E pôs guarnições em Edom, em todo o Edom pôs guarnições, e todos os edomitas ficaram por servos de Davi; e o Senhor ajudava a Davi por onde quer que ia.
¹⁵ Reinou, pois, Davi sobre todo o Israel; e Davi julgava e fazia justiça a todo o seu povo.
¹⁶ E Joabe, filho de Zeruia, era sobre o exército; e Josafá, filho de Ailude, era cronista.
¹⁷ E Zadoque, filho de Aitube, e Aimeleque, filho de Abiatar, eram sacerdotes, e Seraías, escrivão.
¹⁸ Também Benaia filho de Joiada, estava com os quereteus e peleteus; porém os filhos de Davi eram príncipes 

`,
            pergunta: {
                texto: "Quem era o general do exército de Davi?",
                opcoes: [
                    { numero: 1, texto: "Joabe", correta: true },
                    { numero: 2, texto: "Zadoque", correta: false },
                    { numero: 3, texto: "Benaia", correta: false },
                    { numero: 4, texto: "Abiatar", correta: false }
                ],
                explicacao: "Joabe, filho de Zeruia, comandava o exército.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 8:16"
            }
        },
        9: {
            titulo: "Davi e Mefibosete",
            texto: `
¹ E disse Davi: Há ainda alguém que ficasse da casa de Saul, para que lhe faça bem por amor de Jônatas?
² E havia um servo na casa de Saul cujo nome era Ziba; e o chamaram que viesse a Davi, e disse-lhe o rei: És tu Ziba? E ele disse: Servo teu.
³ E disse o rei: Não há ainda algum da casa de Saul para que use com ele de beneficência de Deus? Então, disse Ziba ao rei: Ainda há um filho de Jônatas, aleijado de ambos os pés.
⁴ E disse-lhe o rei: Onde está? E disse Ziba ao rei: Eis que está em casa de Maquir, filho de Amiel, em Lo-Debar.
⁵ Então, mandou o rei Davi e o tomou da casa de Maquir, filho de Amiel, de Lo-Debar.
⁶ E, vindo Mefibosete, filho de Jônatas, filho de Saul, a Davi, se prostrou com o rosto por terra e se inclinou; e disse Davi: Mefibosete! E ele disse: Eis aqui teu servo.
⁷ E disse-lhe Davi: Não temas, porque decerto usarei contigo de beneficência por amor de Jônatas, teu pai, e te restituirei todas as terras de Saul, teu pai, e tu de contínuo comerás pão à minha mesa.
⁸ Então, se inclinou e disse: Quem é teu servo, para tu teres olhado para um cão morto tal como eu?
⁹ Então, chamou Davi a Ziba, moço de Saul, e disse-lhe: Tudo o que pertencia a Saul e de toda a sua casa tenho dado ao filho de teu senhor.
¹⁰ Trabalhar-lhe-ás, pois, a terra, tu, e teus filhos, e teus servos, e recolherás os frutos, para que o filho de teu senhor tenha pão que coma; e Mefibosete, filho de teu senhor, de contínuo comerá pão à minha mesa. E tinha Ziba quinze filhos e vinte servos.
¹¹ E disse Ziba ao rei: Conforme tudo quanto meu senhor, o rei, manda a seu servo, assim fará teu servo; porém Mefibosete comerá à minha mesa como um dos filhos do rei.
¹² E tinha Mefibosete um filho pequeno, cujo nome era Mica; e todos quantos moravam em casa de Ziba eram servos de Mefibosete.
¹³ Morava, pois, Mefibosete em Jerusalém, porquanto de contínuo comia à mesa do rei; e era coxo de ambos os pés 

`,
            pergunta: {
                texto: "Quem era Mefibosete?",
                opcoes: [
                    { numero: 1, texto: "Filho de Jônatas, que era coxo de ambos os pés", correta: true },
                    { numero: 2, texto: "Um general filisteu", correta: false },
                    { numero: 3, texto: "O irmão mais velho de Davi", correta: false },
                    { numero: 4, texto: "O servo de Saul", correta: false }
                ],
                explicacao: "Davi o acolheu em sua mesa por amor a Jônatas.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 9:3-6"
            }
        },
        10: {
            titulo: "Guerra contra os amonitas",
            texto: `
¹ E aconteceu, depois disso, que morreu o rei dos filhos de Amom, e seu filho Hanum reinou em seu lugar.
² Então, disse Davi: Usarei de beneficência com Hanum, filho de Naás, como seu pai usou de beneficência comigo. E enviou Davi a consolá-lo, pelo ministério de seus servos, acerca de seu pai; e vieram os servos de Davi à terra dos filhos de Amom.
³ Então, disseram os príncipes dos filhos de Amom a seu senhor, Hanum: Porventura, honra Davi a teu pai aos teus olhos, porque te enviou consoladores? Porventura, não te enviou Davi os seus servos para reconhecerem esta cidade, e para espiá-la, e para transtorná-la?
⁴ Então, tomou Hanum os servos de Davi, e lhes rapou metade da barba, e lhes cortou metade das vestes, até às nádegas, e os despediu.
⁵ O que fazendo saber a Davi, este enviou a encontrá-los, porque estavam estes homens sobremaneira envergonhados; e disse o rei: Deixai-vos estar em Jericó, até que vos torne a crescer a barba; e então vinde.
⁶ Vendo, pois, os filhos de Amom que se tinham feito abomináveis para Davi, enviaram os filhos de Amom e alugaram dos siros de Bete-Reobe e dos siros de Zobá vinte mil homens de pé, e do rei de Maaca, mil homens, e dos homens de Tobe, doze mil homens.
⁷ O que ouvindo Davi, enviou contra eles a Joabe com todo o exército dos valentes.
⁸ E saíram os filhos de Amom e ordenaram a batalha à entrada da porta, mas os siros de Zobá e Reobe e os homens de Tobe e Maaca estavam à parte no campo.
⁹ Vendo, pois, Joabe que estava preparada contra ele a frente da batalha, por diante e por detrás, escolheu dentre todos os escolhidos de Israel e formou-os em linha contra os siros.
¹⁰ E o resto do povo entregou na mão de Abisai, seu irmão, o qual o formou em linha contra os filhos de Amom.
¹¹ E disse: Se os siros forem mais fortes do que eu, tu me virás em socorro; e, se os filhos de Amom forem mais fortes que tu, irei a socorrer-te.
¹² Esforça-te, pois, e esforcemo-nos pelo nosso povo e pelas cidades de nosso Deus; e faça o Senhor, então, o que bem parecer aos seus olhos.
¹³ Então, se achegou Joabe e o povo que estava com ele à peleja contra os siros; e estes fugiram de diante dele.
¹⁴ E, vendo os filhos de Amom que os siros fugiam, também eles fugiram de diante de Abisai e entraram na cidade; e voltou Joabe dos filhos de Amom e veio para Jerusalém.
¹⁵ Vendo, pois, os siros que tinham sido feridos diante de Israel, tornaram a refazer-se.
¹⁶ E enviou Hadadezer e fez sair os siros que estavam da outra banda do rio, e vieram a Helã; e Sobaque, chefe do exército de Hadadezer, marchava diante deles.
¹⁷ Do que informado Davi, ajuntou a todo o Israel, e passou o Jordão, e veio a Helã; e os siros se puseram em ordem contra Davi e pelejaram contra ele.
¹⁸ Porém os siros fugiram de diante de Israel, e Davi feriu dentre os siros aos homens de setecentos carros e quarenta mil homens de cavalo; também ao mesmo Sobaque, general do exército, feriu, e morreu ali.
¹⁹ Vendo, pois, todos os reis, servos de Hadadezer, que haviam ficado mal diante de Israel, fizeram paz com Israel e o serviram; e temeram os siros de socorrer mais aos filhos de Amom 

`,
            pergunta: {
                texto: "O que o rei dos amonitas fez aos servos de Davi para os humilhar?",
                opcoes: [
                    { numero: 1, texto: "Cortou-lhes metade da barba e das vestes", correta: true },
                    { numero: 2, texto: "Prendeu-os em masmorras", correta: false },
                    { numero: 3, texto: "Tirou-lhes os olhos", correta: false },
                    { numero: 4, texto: "Expulsou-os sem comida", correta: false }
                ],
                explicacao: "Este insulto deu início a uma grande guerra.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 10:4"
            }
        },
        11: {
            titulo: "Davi e Bate-Seba",
            texto: `
¹ E aconteceu que, tendo decorrido um ano, no tempo em que os reis saem para a guerra, enviou Davi a Joabe, e a seus servos com ele, e a todo o Israel, para que destruíssem os filhos de Amom e cercassem Rabá; porém Davi ficou em Jerusalém.
² E aconteceu, à hora da tarde, que Davi se levantou do seu leito, e andava passeando no terraço da casa real, e viu do terraço a uma mulher que se estava lavando; e era esta mulher mui formosa à vista.
³ E enviou Davi e perguntou por aquela mulher; e disseram: Porventura, não é esta Bate-Seba, filha de Eliã e mulher de Urias, o heteu?
⁴ Então, enviou Davi mensageiros e a mandou trazer; e, entrando ela a ele, se deitou com ela (e já ela se tinha purificado da sua imundície); então, voltou ela para sua casa.
⁵ E a mulher concebeu, e enviou, e fê-lo saber a Davi, e disse: Pejada estou.
⁶ Então, enviou Davi a Joabe, dizendo: Envia-me Urias, o heteu. E Joabe enviou Urias a Davi.
⁷ Vindo, pois, Urias a ele, perguntou Davi como ficava Joabe, e como ficava o povo, e como ia a guerra.
⁸ Depois, disse Davi a Urias: Desce à tua casa e lava os teus pés. E, saindo Urias da casa real, logo saiu atrás dele iguaria do rei.
⁹ Porém Urias se deitou à porta da casa real, com todos os servos do seu senhor, e não desceu à sua casa.
¹⁰ E o fizeram saber a Davi, dizendo: Urias não desceu à sua casa. Então, disse Davi a Urias: Não vens tu de uma jornada? Por que não desceste à tua casa?
¹¹ E disse Urias a Davi: A arca, e Israel, e Judá ficam em tendas; e Joabe, meu senhor, e os servos de meu senhor estão acampados no campo; e hei de eu entrar na minha casa, para comer e beber e para me deitar com minha mulher? Pela tua vida e pela vida da tua alma, não farei tal coisa.
¹² Então, disse Davi a Urias: Fica cá ainda hoje, e amanhã te despedirei. Urias, pois, ficou em Jerusalém aquele dia e o seguinte.
¹³ E Davi o convidou, e comeu e bebeu diante dele, e o embebedou; e, à tarde, saiu a deitar-se na sua cama, como os servos de seu senhor; porém não desceu à sua casa.
¹⁴ E sucedeu que, pela manhã, Davi escreveu uma carta a Joabe e mandou-lha por mão de Urias.
¹⁵ Escreveu na carta, dizendo: Ponde Urias na frente da maior força da peleja; e retirai-vos de detrás dele, para que seja ferido e morra.
¹⁶ Aconteceu, pois, que, tendo Joabe observado bem a cidade, pôs a Urias no lugar onde sabia que havia homens valentes.
¹⁷ E, saindo os homens da cidade e pelejando com Joabe, caíram alguns do povo, dos servos de Davi; e morreu também Urias, o heteu.
¹⁸ Então, enviou Joabe e fez saber a Davi todo o sucesso daquela peleja.
¹⁹ E deu ordem ao mensageiro, dizendo: Acabando tu de contar ao rei todo o sucesso desta peleja,
²⁰ e, sucedendo que o rei se encolerize e te diga: Por que vos chegastes tão perto da cidade a pelejar? Não sabíeis vós que haviam de atirar do muro?
²¹ Quem feriu a Abimeleque, filho de Jerubesete? Não lançou uma mulher sobre ele, do muro, um pedaço de uma mó corredora, de que morreu em Tebes? Por que vos chegastes ao muro? Então, dirás: Também morreu teu servo Urias, o heteu.
²² E foi o mensageiro, e entrou, e fez saber a Davi tudo para que Joabe o enviara.
²³ E disse o mensageiro a Davi: Na verdade, que mais poderosos foram aqueles homens do que nós e saíram a nós ao campo; porém nós fomos contra eles, até à entrada da porta.
²⁴ Então, os flecheiros atiraram contra os teus servos desde o alto do muro, e morreram alguns dos servos do rei; e também morreu o teu servo Urias, o heteu.
²⁵ E disse Davi ao mensageiro: Assim dirás a Joabe: Não te pareça isso mal aos teus olhos; pois a espada tanto consome este como aquele; esforça a tua peleja contra a cidade e a derrota; esforça-o tu assim.
²⁶ Ouvindo, pois, a mulher de Urias que Urias, seu marido, era morto, lamentou a seu senhor.
²⁷ E, passado o luto, enviou Davi e a recolheu em sua casa; e lhe foi por mulher e ela lhe deu um filho. Porém essa coisa que Davi fez pareceu mal aos olhos do Senhor 
`,
            pergunta: {
                texto: "Quem era o marido de Bate-Seba que Davi mandou matar na guerra?",
                opcoes: [
                    { numero: 1, texto: "Urias, o heteu", correta: true },
                    { numero: 2, texto: "Aitofel", correta: false },
                    { numero: 3, texto: "Abisai", correta: false },
                    { numero: 4, texto: "Itai", correta: false }
                ],
                explicacao: "Davi colocou Urias na frente da batalha mais renhida para ser morto.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 11:15"
            }
        },
        12: {
            titulo: "Natã repreende Davi",
            texto: `
¹ E o Senhor enviou Natã a Davi; e, entrando ele a Davi, disse-lhe: Havia numa cidade dois homens, um rico e outro pobre.
² O rico tinha muitíssimas ovelhas e vacas;
³ mas o pobre não tinha coisa nenhuma, senão uma pequena cordeira que comprara e criara; e ela havia crescido com ele e com seus filhos igualmente; do seu bocado comia, e do seu copo bebia, e dormia em seu regaço, e a tinha como filha.
⁴ E, vindo um viajante ao homem rico, deixou este de tomar das suas ovelhas e das suas vacas para guisar para o viajante que viera a ele; e tomou a cordeira do homem pobre e a preparou para o homem que viera a ele.
⁵ Então, o furor de Davi se acendeu em grande maneira contra aquele homem, e disse a Natã: Vive o Senhor, que digno de morte é o homem que fez isso.
⁶ E pela cordeira tornará a dar o quadruplicado, porque fez tal coisa e porque não se compadeceu.
⁷ Então, disse Natã a Davi: Tu és este homem. Assim diz o Senhor, Deus de Israel: Eu te ungi rei sobre Israel e eu te livrei das mãos de Saul;
⁸ e te dei a casa de teu senhor e as mulheres de teu senhor em teu seio e também te dei a casa de Israel e de Judá; e, se isto é pouco, mais te acrescentaria tais e tais coisas.
⁹ Por que, pois, desprezaste a palavra do Senhor, fazendo o mal diante de seus olhos? A Urias, o heteu, feriste à espada, e a sua mulher tomaste por tua mulher; e a ele mataste com a espada dos filhos de Amom.
¹⁰ Agora, pois, não se apartará a espada jamais da tua casa, porquanto me desprezaste e tomaste a mulher de Urias, o heteu, para que te seja por mulher.
¹¹ Assim diz o Senhor: Eis que suscitarei da tua mesma casa o mal sobre ti, e tomarei tuas mulheres perante os teus olhos, e as darei a teu próximo, o qual se deitará com tuas mulheres perante este sol.
¹² Porque tu o fizeste em oculto, mas eu farei este negócio perante todo o Israel e perante o sol.
¹³ Então, disse Davi a Natã: Pequei contra o Senhor. E disse Natã a Davi: Também o Senhor traspassou o teu pecado; não morrerás.
¹⁴ Todavia, porquanto com este feito deste lugar sobremaneira a que os inimigos do Senhor blasfemem, também o filho que te nasceu certamente morrerá.
¹⁵ Então, Natã foi para sua casa.
  E o Senhor feriu a criança que a mulher de Urias dera a Davi; e a criança adoeceu gravemente.
¹⁶ E buscou Davi a Deus pela criança; e jejuou Davi, e entrou, e passou a noite prostrado sobre a terra.
¹⁷ Então os anciãos da sua casa se levantaram e foram a ele, para o levantar da terra; porém ele não quis, e não comeu pão com eles.
¹⁸ E sucedeu que, ao sétimo dia, morreu a criança; e temiam os servos de Davi dizer-lhe que a criança era morta, porque diziam: Eis que, sendo a criança ainda viva, lhe falávamos, porém não dava ouvidos à nossa voz; como, pois, lhe diremos que a criança é morta? Porque mais mal lhe faria.
¹⁹ Viu, porém, Davi que seus servos falavam baixo e entendeu Davi que a criança era morta, pelo que disse Davi a seus servos: É morta a criança? E eles disseram: É morta.
²⁰ Então, Davi se levantou da terra, e se lavou, e se ungiu, e mudou de vestes, e entrou na Casa do Senhor, e adorou; então, veio a sua casa e pediu pão; e lhe puseram pão, e comeu.
²¹ E disseram-lhe seus servos: Que é isso que fizeste? Pela criança viva jejuaste e choraste; porém, depois que morreu a criança, te levantaste e comeste pão.
²² E disse ele: Vivendo ainda a criança, jejuei e chorei, porque dizia: Quem sabe se o Senhor se compadecerá de mim, e viva a criança?
²³ Porém, agora que é morta, por que jejuaria eu agora? Poderei eu fazê-la mais voltar? Eu irei a ela, porém ela não voltará para mim.
²⁴ Então, consolou Davi a Bate-Seba, sua mulher, e entrou a ela, e se deitou com ela; e teve ela um filho, e chamou o seu nome Salomão; e o Senhor o amou.
²⁵ E o enviou pela mão do profeta Natã, e este chamou o seu nome Jedidias, por amor do Senhor.
 Davi conquista Rabá
²⁶ Entretanto, pelejou Joabe contra Rabá, dos filhos de Amom, e tomou a cidade real.
²⁷ Então, mandou Joabe mensageiros a Davi e disse: Pelejei contra Rabá e também tomei a cidade das águas.
²⁸ Ajunta, pois, agora o resto do povo, e cerca a cidade, e toma-a, para que, tomando eu a cidade, não se aclame sobre ela o meu nome.
²⁹ Então, ajuntou Davi a todo o povo, e marchou para Rabá, e pelejou contra ela, e a tomou.
³⁰ E tirou a coroa da cabeça do seu rei, cujo peso era de um talento de ouro, e havia nela pedras preciosas, e foi posta sobre a cabeça de Davi; e da cidade levou mui grande despojo.
³¹ E, trazendo o povo que havia nela, o pôs às serras, e às talhadeiras de ferro, e aos machados de ferro, e os fez passar por forno de tijolos; e assim fez a todas as cidades dos filhos de Amom. E voltou Davi e todo o povo para Jerusalém 

`,
            pergunta: {
                texto: "Qual parábola Natã usou para confrontar Davi?",
                opcoes: [
                    { numero: 1, texto: "A do homem rico que roubou a cordeirinha do pobre", correta: true },
                    { numero: 2, texto: "A do filho pródigo", correta: false },
                    { numero: 3, texto: "A do semeador", correta: false },
                    { numero: 4, texto: "A da vinha", correta: false }
                ],
                explicacao: "Natã disse a Davi: 'Tu és este homem'.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 12:7"
            }
        },
        13: {
            titulo: "Amnom e Tamar",
            texto: `
¹ E aconteceu, depois disso, que, tendo Absalão, filho de Davi, uma irmã formosa, cujo nome era Tamar, Amnom, filho de Davi, amou-a.
² E angustiou-se Amnom, até adoecer, por Tamar, sua irmã, porque era virgem; e parecia, aos olhos de Amnom, dificultoso fazer-lhe coisa alguma.
³ Tinha, porém, Amnom um amigo, cujo nome era Jonadabe, filho de Simeia, irmão de Davi. E era Jonadabe homem mui sagaz.
⁴ E ele lhe disse: Por que tu de manhã em manhã tanto emagreces, sendo filho do rei? Não mo farás saber a mim? Então, lhe disse Amnom: Amo a Tamar, irmã de Absalão, meu irmão.
⁵ E Jonadabe lhe disse: Deita-te na tua cama, e finge-te doente; e, quando teu pai te vier visitar, dize-lhe: Peço-te que minha irmã Tamar venha, e me dê de comer pão, e prepare a comida diante dos meus olhos, para que eu a veja e coma da sua mão.
⁶ Deitou-se, pois, Amnom e fingiu-se doente; e, vindo o rei visitá-lo, disse Amnom ao rei: Peço-te que minha irmã Tamar venha e prepare dois bolos diante dos meus olhos, para que eu coma de sua mão.
⁷ Mandou, então, Davi a casa, a Tamar, dizendo: Vai a casa de Amnom, teu irmão, e faze-lhe alguma comida.
⁸ E foi Tamar a casa de Amnom, seu irmão (ele, porém, estava deitado), e tomou massa, e a amassou, e fez bolos diante dos seus olhos, e cozeu os bolos.
⁹ E tomou a assadeira e os tirou diante dele; porém ele recusou comer. E disse Amnom: Fazei retirar a todos da minha presença. E todos se retiraram dele.
¹⁰ Então, disse Amnom a Tamar: Traze a comida à câmara e comerei da tua mão. E tomou Tamar os bolos que fizera e os trouxe a Amnom, seu irmão, à câmara.
¹¹ E, chegando-lhos, para que comesse, pegou dela e disse-lhe: Vem, deita-te comigo, irmã minha.
¹² Porém ela lhe disse: Não, irmão meu, não me forces, porque não se faz assim em Israel; não faças tal loucura.
¹³ Porque, aonde iria eu com a minha vergonha? E tu serias como um dos loucos de Israel. Agora, pois, peço-te que fales ao rei, porque não me negará a ti.
¹⁴ Porém ele não quis dar ouvidos à sua voz; antes, sendo mais forte do que ela, a forçou e se deitou com ela.
¹⁵ Depois, Amnom a aborreceu com grandíssimo aborrecimento, porque maior era o aborrecimento com que a aborrecia do que o amor com que a amara. E disse-lhe Amnom: Levanta-te e vai-te.
¹⁶ Então, ela lhe disse: Não há razão de me despedires assim; maior seria este mal do que o outro que já me tens feito. Porém não lhe quis dar ouvidos.
¹⁷ E chamou a seu moço que o servia e disse: Deita a esta fora e fecha a porta após ela.
¹⁸ E trazia ela uma roupa de muitas cores (porque assim se vestiam as filhas virgens dos reis, com capas), e seu criado a deitou fora e fechou a porta após ela.
¹⁹ Então, Tamar tomou cinza sobre a sua cabeça, e a roupa de muitas cores que trazia rasgou, e pôs as mãos sobre a cabeça, e foi-se andando e clamando.
²⁰ E Absalão, seu irmão, lhe disse: Esteve Amnom, teu irmão, contigo? Ora, pois, irmã minha, cala-te; é teu irmão. Não se angustie o teu coração por isso. Assim ficou Tamar e esteve solitária em casa de Absalão, seu irmão.
²¹ E, ouvindo o rei Davi todas essas coisas, muito se acendeu em ira.
²² Porém Absalão não falou com Amnom, nem mal nem bem; porque Absalão aborrecia a Amnom, por ter forçado a Tamar, sua irmã.
 Absalão mata Amnom
²³ E aconteceu que, passados dois anos inteiros, Absalão tinha tosquiadores em Baal-Hazor, que está junto a Efraim, e convidou Absalão a todos os filhos do rei.
²⁴ E veio Absalão ao rei e disse: Eis que teu servo tem tosquiadores; peço que o rei e os seus servos venham com o teu servo.
²⁵ O rei, porém, disse a Absalão: Não, filho meu, não vamos todos juntos, para não te sermos pesados. E instou com ele; porém ele não quis ir, mas o abençoou.
²⁶ Então, disse Absalão: Quando não, deixa ir conosco Amnom, meu irmão. Porém o rei lhe disse: Para que iria contigo?
²⁷ E, instando Absalão com ele, deixou ir com ele a Amnom e a todos os filhos do rei.
²⁸ E Absalão deu ordem aos seus moços, dizendo: Tomai sentido; quando o coração de Amnom estiver alegre do vinho, e eu vos disser: Feri a Amnom! Então, o matareis; não temais; porventura, não sou eu quem vo-lo ordenou? Esforçai-vos e sede valentes.
²⁹ E os moços de Absalão fizeram a Amnom como Absalão lho havia ordenado. Então, todos os filhos do rei se levantaram, e montaram cada um no seu mulo, e fugiram.
³⁰ E aconteceu que, estando eles ainda no caminho, veio a nova a Davi, de que se dizia: Absalão feriu todos os filhos do rei, e nenhum deles ficou.
³¹ Então, o rei se levantou, e rasgou as suas vestes, e se lançou por terra; da mesma maneira todos os seus servos estavam com vestes rotas.
³² Mas Jonadabe, filho de Simeia, irmão de Davi, respondeu e disse: Não diga o meu senhor que mataram a todos os jovens filhos do rei, porque só morreu Amnom; porque assim o tinha resolvido fazer Absalão, desde o dia em que ele forçou a Tamar, sua irmã.
³³ Não se lhe meta, pois, agora no coração do rei, meu senhor, tal coisa, dizendo: Morreram todos os filhos do rei; porque só morreu Amnom.
³⁴ E Absalão fugiu. E o jovem que estava de guarda levantou os seus olhos e olhou; e eis que muito povo vinha pelo caminho por detrás dele, pela banda do monte.
³⁵ Então, disse Jonadabe ao rei: Eis aqui vêm os filhos do rei; conforme a palavra de teu servo, assim sucedeu.
³⁶ E aconteceu que, quando acabou de falar, os filhos do rei vieram, e levantaram a sua voz, e choraram; e também o rei e todos os seus servos choraram com mui grande choro.
  Absalão foge para Talmai e, depois, volta para Jerusalém
³⁷ Assim, Absalão fugiu e se foi a Talmai, filho de Amiúde, rei de Gesur. E Davi trouxe dó por seu filho todos aqueles dias.
³⁸ Assim, Absalão fugiu e foi para Gesur; esteve ali três anos.
³⁹ Então, tinha o rei Davi saudades de Absalão, porque já se tinha consolado acerca de Amnom, que  
`,
            pergunta: {
                texto: "Quem matou Amnom para vingar Tamar?",
                opcoes: [
                    { numero: 1, texto: "Absalão", correta: true },
                    { numero: 2, texto: "Salomão", correta: false },
                    { numero: 3, texto: "Adonias", correta: false },
                    { numero: 4, texto: "Davi", correta: false }
                ],
                explicacao: "Absalão esperou dois anos para vingar a sua irmã Tamar.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 13:28-29"
            }
        },
        14: {
            titulo: "O retorno de Absalão",
            texto: `
¹ Conhecendo, pois, Joabe, filho de Zeruia, que o coração do rei era inclinado para Absalão,
² enviou Joabe a Tecoa, e tomou de lá uma mulher sábia, e disse-lhe: Ora, finge que estás de luto; veste vestes de luto, e não te unjas com óleo, e sejas como uma mulher que há já muitos dias está de luto por algum morto.
³ E entra ao rei e fala-lhe conforme esta palavra. E Joabe lhe pôs as palavras na boca.
⁴ E a mulher tecoíta falou ao rei, e, deitando-se com o rosto em terra, se prostrou, e disse: Salva-me, ó rei.
⁵ E disse-lhe o rei: Que tens? E disse ela: Na verdade que sou uma mulher viúva, e morreu meu marido.
⁶ Tinha, pois, a tua serva dois filhos, e ambos estes brigaram no campo, e não houve quem os apartasse; assim, um feriu ao outro e o matou.
⁷ E eis que toda a linhagem se levantou contra a tua serva, e disseram: Dá-nos aquele que feriu a seu irmão para que o matemos, por causa da vida de seu irmão, a quem matou, e para que destruamos também ao herdeiro. Assim, apagarão a brasa que me ficou, de sorte que não deixam a meu marido nome, nem resto sobre a terra.
⁸ E disse o rei à mulher: Vai para tua casa, e eu mandarei ordem acerca de ti.
⁹ E disse a mulher tecoíta ao rei: A injustiça, ó rei, meu senhor, venha sobre mim e sobre a casa de meu pai; e o rei e o seu trono fiquem inculpáveis.
¹⁰ E disse o rei: Quem falar contra ti, traze-mo a mim; e nunca mais te tocará.
¹¹ E disse ela: Ora, lembre-se o rei do Senhor, teu Deus, para que os vingadores do sangue se não multipliquem a deitar-nos a perder e não destruam meu filho. Então, disse ele: Vive o Senhor, que não há de cair no chão nem um dos cabelos de teu filho.
¹² Então, disse a mulher: Peço-te que a tua serva fale uma palavra ao rei, meu senhor. E disse ele: Fala.
¹³ E disse a mulher: Por que, pois, pensaste tu uma tal coisa contra o povo de Deus? Porque, falando o rei tal palavra, fica como culpado; visto que o rei não torna a trazer o seu desterrado.
¹⁴ Porque certamente morreremos e seremos como águas derramadas na terra, que não se ajuntam mais. Deus, pois, lhe não tirará a vida, mas ideará pensamentos, para que se não desterre dele o seu desterrado.
¹⁵ E, se eu agora vim falar esta palavra ao rei, meu senhor, é porque o povo me atemorizou; dizia, pois, a tua serva: Falarei, pois, ao rei; porventura, fará o rei segundo a palavra da sua serva.
¹⁶ Porque o rei ouvirá, para livrar a sua serva da mão do homem que intenta destruir juntamente a mim e a meu filho da herança de Deus.
¹⁷ Dizia mais a tua serva: Seja agora a palavra do rei, meu senhor, para descanso; porque, como um anjo de Deus, assim é o rei, meu senhor, para ouvir o bem e o mal; e o Senhor, teu Deus, será contigo.
¹⁸ Então, respondeu o rei e disse à mulher: Peço-te que não me encubras o que eu te perguntar. E disse a mulher: Ora, fale o rei, meu senhor.
¹⁹ E disse o rei: Não é verdade que a mão de Joabe anda contigo em tudo isso? E respondeu a mulher e disse: Vive a tua alma, ó rei, meu senhor, que ninguém se poderá desviar, nem para a direita nem para a esquerda, de tudo quanto o rei, meu senhor, tem dito; porque Joabe, teu servo, é quem me deu ordem e foi ele que pôs na boca da tua serva todas estas palavras.
²⁰ Para que eu virasse a forma deste negócio, Joabe, teu servo, fez isso; porém sábio é meu senhor, conforme a sabedoria de um anjo de Deus, para entender tudo o que há na terra.
²¹ Então, o rei disse a Joabe: Eis que fiz isto. Vai, pois, e torna a trazer o jovem Absalão.
²² Então, Joabe se prostrou sobre o seu rosto em terra, e se inclinou, e o agradeceu ao rei, e disse: Hoje, conheceu o teu servo que achei graça aos teus olhos, ó rei, meu senhor, porque o rei fez segundo a palavra do teu servo.
²³ Levantou-se, pois, Joabe, e foi a Gesur, e trouxe Absalão a Jerusalém.
²⁴ E disse o rei: Torne para a sua casa e não veja a minha face. Tornou, pois, Absalão para a sua casa e não viu a face do rei.
²⁵ Não havia, porém, em todo o Israel homem tão belo e tão aprazível como Absalão; desde a planta do pé até à cabeça, não havia nele defeito algum.
²⁶ E, quando tosquiava a sua cabeça (e sucedia que no fim de cada ano a tosquiava, porquanto muito lhe pesava, e por isso a tosquiava), pesava o cabelo da sua cabeça duzentos siclos, segundo o peso real.
²⁷ Também nasceram a Absalão três filhos e uma filha, cujo nome era Tamar; e esta era mulher formosa à vista.
²⁸ Assim, ficou Absalão dois anos inteiros em Jerusalém e não viu a face do rei.
²⁹ Mandou, pois, Absalão chamar a Joabe, para o enviar ao rei; porém não quis vir a ele; e enviou ainda segunda vez, e, contudo, não quis vir.
³⁰ Então, disse aos seus servos: Vedes ali o pedaço de campo de Joabe pegado ao meu, e tem cevada nele; ide e ponde-lhe fogo. E os servos de Absalão puseram fogo ao pedaço de campo.
³¹ Então, Joabe se levantou, e veio a Absalão, em casa, e disse-lhe: Por que puseram os teus servos fogo ao pedaço de campo que é meu?
³² E disse Absalão a Joabe: Eis que enviei a ti, dizendo: Vem cá, para que te envie ao rei, a dizer-lhe: Para que vim de Gesur? Melhor me fora estar ainda lá. Agora, pois, veja eu a face do rei; e, se há ainda em mim alguma culpa, que me mate.
³³ Então, entrou Joabe ao rei e assim lho disse. Então, chamou a Absalão, e ele entrou ao rei e se inclinou sobre o seu rosto em terra diante do rei; e o rei beijou a  

`,
            pergunta: {
                texto: "O que era notável na aparência de Absalão?",
                opcoes: [
                    { numero: 1, texto: "A sua beleza e o peso do seu cabelo", correta: true },
                    { numero: 2, texto: "A sua baixa estatura", correta: false },
                    { numero: 3, texto: "Uma cicatriz no rosto", correta: false },
                    { numero: 4, texto: "A sua força física", correta: false }
                ],
                explicacao: "Não havia em todo o Israel homem tão louvado por sua beleza como Absalão.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 14:25-26"
            }
        },
        15: {
            titulo: "A revolta de Absalão",
            texto: `
¹ E aconteceu, depois disso, que Absalão fez aparelhar carros, e cavalos, e cinquenta homens que corressem adiante dele.
² Também Absalão se levantou pela manhã e parava a uma banda do caminho da porta. E sucedia que a todo o homem que tinha alguma demanda para vir ao rei a juízo, o chamava Absalão a si e lhe dizia: De que cidade és tu? E dizendo ele: De uma das tribos de Israel é teu servo;
³ então, Absalão lhe dizia: Olha, os teus negócios são bons e retos, porém não tens quem te ouça da parte do rei.
⁴ Dizia mais Absalão: Ah! Quem me dera ser juiz na terra, para que viesse a mim todo o homem que tivesse demanda ou questão, para que lhe fizesse justiça!
⁵ Sucedia também que, quando alguém se chegava a ele para se inclinar diante dele, ele estendia a sua mão, e pegava dele, e o beijava.
⁶ E desta maneira fazia Absalão a todo o Israel que vinha ao rei para juízo; assim, furtava Absalão o coração dos homens de Israel.
⁷ E aconteceu, pois, ao cabo de quarenta anos, que Absalão disse ao rei: Deixa-me ir pagar em Hebrom o meu voto que votei ao Senhor.
⁸ Porque morando eu em Gesur, na Síria, votou o teu servo um voto, dizendo: Se o Senhor outra vez me fizer tornar a Jerusalém, servirei ao Senhor.
⁹ Então, lhe disse o rei: Vai em paz. Levantou-se, pois, e foi para Hebrom.
¹⁰ E enviou Absalão espias por todas as tribos de Israel, dizendo: Quando ouvirdes o som das trombetas, direis: Absalão reina em Hebrom.
¹¹ E de Jerusalém foram com Absalão duzentos homens convidados, porém iam na sua simplicidade, porque nada sabiam daquele negócio.
¹² Também Absalão mandou vir Aitofel, o gilonita, do conselho de Davi, à sua cidade de Gilo, estando ele sacrificando os seus sacrifícios; e a conjuração se fortificava, e vinha o povo e se aumentava com Absalão.
¹³ Então, veio um mensageiro a Davi, dizendo: O coração de cada um em Israel segue a Absalão.
¹⁴ Disse, pois, Davi a todos os seus servos que estavam com ele em Jerusalém: Levantai-vos, e fujamos, porque não poderíamos escapar diante de Absalão. Dai-vos pressa a caminhar, para que porventura não se apresse ele, e nos alcance, e lance sobre nós algum mal, e fira a cidade a fio de espada.
¹⁵ Então, os servos do rei disseram ao rei: Eis aqui os teus servos, para tudo quanto determinar o rei, nosso senhor.
¹⁶ E saiu o rei, com toda a sua casa, a pé; deixou, porém, o rei dez mulheres concubinas, para guardarem a casa.
¹⁷ Tendo, pois, saído o rei com todo o povo a pé, pararam num lugar distante.
¹⁸ E todos os seus servos iam a seu lado, como também todos os quereteus e todos os peleteus; e todos os geteus, seiscentos homens que vieram de Gate a pé, caminhavam diante do rei.
¹⁹ Disse, pois, o rei a Itai, o geteu: Por que irias tu também conosco? Volta, e fica-te com o rei, porque estranho és, e também te tornarás a teu lugar.
²⁰ Ontem, vieste, e te levaria eu hoje conosco a caminhar? Pois força me é ir aonde quer que puder ir; volta, pois, e torna a levar teus irmãos contigo, com beneficência e fidelidade.
²¹ Respondeu, porém, Itai ao rei e disse: Vive o Senhor, e vive o rei, meu senhor, que no lugar em que estiver o rei, meu senhor, seja para morte seja para vida, aí certamente estará também o teu servidor.
²² Então, Davi disse a Itai: Vem, pois, e passa adiante. Assim, passou Itai, o geteu, e todos os seus homens, e todas as crianças que havia com ele.
²³ E toda a terra chorava a grandes vozes, passando todo o povo; também o rei passou o ribeiro de Cedrom, e passou todo o povo na direção do caminho do deserto.
²⁴ Eis que também Zadoque ali estava, e com ele todos os levitas que levavam a arca do concerto de Deus; e puseram ali a arca de Deus; e subiu Abiatar, até que todo o povo acabou de sair da cidade.
²⁵ Então disse o rei a Zadoque: Torna a levar a arca de Deus à cidade; se achar eu graça aos olhos do Senhor, ele me tornará a trazer para lá e me deixará ver a ela e a sua habitação.
²⁶ Se, porém, disser assim: Não tenho prazer em ti; eis-me aqui, faça de mim como parecer bem aos seus olhos.
²⁷ Disse mais o rei a Zadoque, o sacerdote: Não és tu, porventura, o vidente? Torna, pois, em paz para a cidade, e convosco também vossos dois filhos, Aimaás, teu filho, e Jônatas, filho de Abiatar.
²⁸ Olhai que me demorarei nas campinas do deserto até que tenha novas vossas.
²⁹ Zadoque, pois, e Abiatar tornaram a levar para Jerusalém a arca de Deus; e ficaram ali.
³⁰ E subiu Davi pela subida das Oliveiras, subindo e chorando, e com a cabeça coberta; e caminhava com os pés descalços; e todo o povo que ia com ele cobria cada um a sua cabeça, e subiam chorando sem cessar.
³¹ Então, fizeram saber a Davi, dizendo: Também Aitofel está entre os que se conjuraram com Absalão. Pelo que disse Davi: Ó Senhor, transtorna o conselho de Aitofel.
³² E aconteceu que, chegando Davi ao cume, para adorar ali a Deus, eis que Husai, o arquita, veio encontrar-se com ele, com a veste rasgada e terra sobre a cabeça.
³³ E disse-lhe Davi: Se passares comigo, ser-me-ás pesado.
³⁴ Porém, se voltares para a cidade e disseres a Absalão: Eu serei, ó rei, teu servo, como fui dantes servo de teu pai, assim agora serei teu servo, dissipar-me-ás, então, o conselho de Aitofel.
³⁵ E não estão ali contigo Zadoque e Abiatar, sacerdotes? E será que todas as coisas que ouvires da casa do rei farás saber a Zadoque e a Abiatar, sacerdotes.
³⁶ Eis que estão também ali com eles seus dois filhos, Aimaás, filho de Zadoque, e Jônatas, filho de Abiatar; pela mão deles aviso me mandareis de todas as coisas que ouvirdes.
³⁷ Husai, pois, amigo de Davi, veio para a cidade; e Absalão entrou em Jerusalém 

`,
            pergunta: {
                texto: "Como Absalão conquistou o coração dos homens de Israel?",
                opcoes: [
                    { numero: 1, texto: "Pondo-se à porta da cidade e ouvindo as causas do povo", correta: true },
                    { numero: 2, texto: "Dando-lhes dinheiro", correta: false },
                    { numero: 3, texto: "Através de ameaças", correta: false },
                    { numero: 4, texto: "Fazendo milagres", correta: false }
                ],
                explicacao: "Ele fingia justiça para roubar a lealdade do povo a Davi.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 15:2-6"
            }
        },
        16: {
            titulo: "Davi foge de Jerusalém",
            texto: `
¹ E, passando Davi um pouco mais adiante do cume, eis que Ziba, o moço de Mefibosete, veio encontrar-se com ele, com um par de jumentos albardados, e sobre eles duzentos pães, com cem cachos de passas, e cem de frutas de verão, e um odre de vinho.
² E disse o rei a Ziba: Que pretendes com isto? E disse Ziba: Os jumentos são para a casa do rei, para se montarem neles; e o pão e as frutas de verão, para os moços comerem; e o vinho, para beberem os cansados no deserto.
³ Então, disse o rei: Onde está, pois, o filho de teu senhor? E disse Ziba ao rei: Eis que ficou em Jerusalém; porque disse: Hoje, me restaurará a casa de Israel o reino de meu pai.
⁴ Então, disse o rei a Ziba: Eis que teu é tudo quanto tem Mefibosete. E disse Ziba: Eu me inclino e que eu ache graça aos teus olhos, ó rei, meu senhor.
⁵ E, chegando o rei Davi a Baurim, eis que dali saiu um homem da linhagem da casa de Saul, cujo nome era Simei, filho de Gera; e, saindo, ia amaldiçoando.
⁶ E apedrejava com pedras a Davi e a todos os servos do rei Davi, ainda que todo o povo e todos os valentes iam à sua direita e à sua esquerda.
⁷ E, amaldiçoando-o Simei, assim dizia: Sai, sai, homem de sangue e homem de Belial!
⁸ O Senhor te deu agora a paga de todo o sangue da casa de Saul, em cujo lugar tens reinado; já deu o Senhor o reino na mão de Absalão, teu filho; e eis-te agora na tua desgraça, porque és um homem de sangue.
⁹ Então, disse Abisai, filho de Zeruia, ao rei: Por que amaldiçoaria este cão morto ao rei, meu senhor? Deixa-me passar, e lhe tirarei a cabeça.
¹⁰ Disse, porém, o rei: Que tenho eu convosco, filhos de Zeruia? Ora, deixai-o amaldiçoar, pois, se o Senhor lhe disse: Amaldiçoa a Davi, quem, pois, diria: Por que assim fizeste?
¹¹ Disse mais Davi a Abisai e a todos os seus servos: Eis que meu filho, que descendeu de mim, procura a minha morte, quanto mais ainda este filho de Benjamim? Deixai-o; que amaldiçoe, porque o Senhor lho disse.
¹² Porventura, o Senhor olhará para a minha miséria e o Senhor me pagará com bem a sua maldição deste dia.
¹³ Prosseguiam, pois, o seu caminho, Davi e os seus homens; e também Simei ia ao longo do monte, defronte dele, caminhando e amaldiçoando, e atirava pedras contra ele, e levantava poeira.
¹⁴ E o rei e todo o povo que ia com ele chegaram cansados e refrescaram-se ali.
  Os conselhos que Aitofel e Husai dão a Absalão
¹⁵ Absalão, pois, e todo o povo, os homens de Israel, vieram a Jerusalém; e Aitofel, com ele.
¹⁶ E sucedeu que, chegando Husai, o arquita, amigo de Davi, a Absalão, disse Husai a Absalão: Viva o rei, viva o rei!
¹⁷ Porém Absalão disse a Husai: É esta a tua beneficência para com o teu amigo? Por que não foste com o teu amigo?
¹⁸ E disse Husai a Absalão: Não, senão daquele que eleger o Senhor, e todo este povo, e todos os homens de Israel, dele serei e com ele ficarei.
¹⁹ E, demais disso, a quem serviria eu? Porventura, não seria diante de seu filho? Como servi diante de teu pai, assim serei diante de ti.
²⁰ Então, disse Absalão a Aitofel: Dai conselho entre vós sobre o que devemos fazer.
²¹ E disse Aitofel a Absalão: Entra às concubinas de teu pai, que deixou para guardarem a casa; e, assim, todo o Israel ouvirá que te fizeste aborrecível para com teu pai, e se fortalecerão as mãos de todos os que estão contigo.
²² Estenderam, pois, para Absalão uma tenda no terrado, e entrou Absalão às concubinas de seu pai perante os olhos de todo o Israel.
²³ E era o conselho de Aitofel, que aconselhava naqueles dias, como se a palavra de Deus se consultara: tal era todo o conselho de Aitofel, assim para com Davi como para com Absalão 

`,
            pergunta: {
                texto: "Quem amaldiçoou e atirou pedras em Davi durante a fuga?",
                opcoes: [
                    { numero: 1, texto: "Simei", correta: true },
                    { numero: 2, texto: "Ziba", correta: false },
                    { numero: 3, texto: "Aitofel", correta: false },
                    { numero: 4, texto: "Abisai", correta: false }
                ],
                explicacao: "Simei, da família de Saul, insultou Davi em Baurim.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 16:5-6"
            }
        },
        17: {
            titulo: "O conselho de Aitofel e Husai",
            texto: `
¹ Disse mais Aitofel a Absalão: Deixa-me escolher doze mil homens, e me levantarei e seguirei após Davi esta noite.
² E irei sobre ele, pois está cansado e fraco das mãos; e o espantarei, e fugirá todo o povo que está com ele; e, então, ferirei o rei só.
³ E farei tornar a ti todo o povo, pois o homem a quem tu buscas é como se tornassem todos; assim, todo o povo estará em paz.
⁴ E esta palavra pareceu boa aos olhos de Absalão, e aos olhos de todos os anciãos de Israel.
⁵ Disse, porém, Absalão: Chamai agora também a Husai, o arquita, e ouçamos também o que ele dirá.
⁶ E, chegando Husai a Absalão, lhe falou Absalão, dizendo: Desta maneira falou Aitofel: Faremos conforme à sua palavra? Se não, fala tu.
⁷ Então, disse Husai a Absalão: O conselho que Aitofel esta vez aconselhou não é bom.
⁸ Disse mais Husai: Bem conheces tu a teu pai e a seus homens, que são valorosos e que estão com o espírito amargurado, como a ursa no campo, roubada dos cachorros; também teu pai é homem de guerra, e não passará a noite com o povo.
⁹ Eis que agora estará escondido nalguma cova, ou em qualquer outro lugar; e será que, caindo no princípio alguns dentre eles, cada um que ouvir então dirá: Houve derrota no povo que segue Absalão.
¹⁰ Então, até o homem valente, cujo coração é como o coração de leão, sem dúvida desmaiará; porque todo o Israel sabe que teu pai é valoroso, e homens valentes, os que estão com ele.
¹¹ Eu, porém, aconselho que, com toda a pressa, se ajunte a ti todo o Israel, desde Dã até Berseba, em multidão como a areia do mar, e que tu em pessoa vás à peleja.
¹² Então, iremos a ele, em qualquer lugar que se achar, e facilmente viremos sobre ele, como o orvalho cai sobre a terra; e não ficará dele e de todos os homens que estão com ele nem ainda um só.
¹³ E, se ele se retirar para alguma cidade, todo o Israel trará cordas àquela cidade: e arrastá-la-emos até ao ribeiro, até que não se ache ali nem uma só pedrinha.
¹⁴ Então, disse Absalão e todos os homens de Israel: Melhor é o conselho de Husai, o arquita, do que o conselho de Aitofel (porém assim o Senhor o ordenara, para aniquilar o bom conselho de Aitofel, para que o Senhor trouxesse o mal sobre Absalão).
¹⁵ E disse Husai a Zadoque e a Abiatar, sacerdotes: Assim e assim aconselhou Aitofel a Absalão e aos anciãos de Israel; porém assim e assim aconselhei eu.
¹⁶ Agora, pois, enviai apressadamente, e avisai a Davi, dizendo: Não passes esta noite nas campinas do deserto, mas passa depressa à outra banda, para que o rei e todo o povo que com ele está não seja devorado.
¹⁷ Estavam, pois, Jônatas e Aimaás junto à fonte de Rogel, e foi uma criada, e lho disse, e eles foram, e disseram ao rei Davi, porque não podiam ser vistos entrar na cidade.
¹⁸ Mas viu-os, todavia, um moço, e avisou a Absalão; porém ambos logo partiram apressadamente, e entraram em casa de um homem, em Baurim, o qual tinha um poço no seu pátio, e para ali desceram.
¹⁹ E tomou a mulher a tampa, e a estendeu sobre a boca do poço, e espalhou grão descascado sobre ela; assim, nada se soube.
²⁰ Chegando, pois, os servos de Absalão à mulher, àquela casa, disseram: Onde estão Aimaás e Jônatas? E a mulher lhes disse: Já passaram o vau das águas. E, havendo-os buscado, e não os achando, voltaram para Jerusalém.
²¹ E sucedeu que, depois que partiram, saíram do poço, e foram, e anunciaram a Davi; e disseram a Davi: Levantai-vos, e passai depressa as águas, porque assim aconselhou contra vós Aitofel.
²² Então, Davi e todo o povo que com ele estava se levantou, e passaram o Jordão: e já pela luz da manhã nem ainda faltava um só que não passasse o Jordão.
²³ Vendo, pois, Aitofel que se não tinha seguido o seu conselho, albardou o jumento e levantou-se, e foi para sua casa e para a sua cidade, e pôs em ordem a sua casa, e se enforcou: e morreu, e foi sepultado na sepultura de seu pai.
²⁴ E Davi veio a Maanaim; e Absalão passou o Jordão, ele e todo o homem de Israel com ele.
²⁵ E Absalão constituiu a Amasa em lugar de Joabe sobre o arraial: e era Amasa filho de um homem cujo nome era Itra, o israelita, o qual entrara a Abigail, filha de Naás, irmã de Zeruia, mãe de Joabe.
²⁶ Israel, pois, e Absalão acamparam na terra de Gileade.
  A vitória do exército de Davi sobre o de Absalão
²⁷ E sucedeu que, chegando Davi a Maanaim, Sobi, filho de Naás, de Rabá, dos filhos de Amom, e Maquir, filho de Amiel, de Lo-Debar, e Barzilai, o gileadita, de Rogelim,
²⁸ tomaram camas, e bacias, e vasilhas de barro, e trigo, e cevada, e farinha, e grão torrado, e favas, e lentilhas, também torradas,
²⁹ e mel, e manteiga, e ovelhas, e queijos de vacas, e os trouxeram a Davi e ao povo que com ele estava, para comerem, porque disseram: Este povo no deserto está faminto, e cansado, e sedento. 

`,
            pergunta: {
                texto: "O que Aitofel fez ao ver que o seu conselho não foi seguido?",
                opcoes: [
                    { numero: 1, texto: "Enforcou-se", correta: true },
                    { numero: 2, texto: "Fugiu para o Egito", correta: false },
                    { numero: 3, texto: "Pediu perdão a Davi", correta: false },
                    { numero: 4, texto: "Tornou-se um eremita", correta: false }
                ],
                explicacao: "Ele percebeu que a causa de Absalão estaria perdida.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 17:23"
            }
        },
        18: {
            titulo: "A morte de Absalão",
            texto: `
¹E Davi contou o povo que tinha consigo e pôs sobre eles capitães de cem.
² E Davi enviou o povo, um terço debaixo da mão de Joabe, e outro terço debaixo da mão de Abisai, filho de Zeruia e irmão de Joabe, e outro terço debaixo da mão de Itai, o geteu; e disse o rei ao povo: Eu também juntamente sairei convosco.
³ Porém o povo disse: Não sairás, porque, se formos obrigados a fugir, não porão o coração em nós; e, ainda que metade de nós morra, não porão o coração em nós, porque ainda, tais como nós somos, ajuntarás dez mil; melhor será, pois, que da cidade nos sirvas de socorro.
⁴ Então, Davi lhes disse: O que bem parecer aos vossos olhos, isso farei. E o rei se pôs da banda da porta, e todo o povo saiu em centenas e em milhares.
⁵ E o rei deu ordem a Joabe, e a Abisai, e a Itai, dizendo: Brandamente tratai por amor de mim ao jovem, a Absalão. E todo o povo ouviu quando o rei deu ordem a todos os capitães acerca de Absalão.
⁶ Saiu, pois, o povo ao campo, a encontrar-se com Israel, e deu-se a batalha no bosque de Efraim.
⁷ E ali foi ferido o povo de Israel, diante dos servos de Davi; e, naquele mesmo dia, houve ali uma grande derrota de vinte mil.
⁸ Porque ali se estendeu a batalha sobre a face de toda aquela terra; e foram mais os do povo que consumiu o bosque do que os que a espada consumiu, naquele dia.
  Absalão fica suspenso numa árvore, e Joabe mata-o
⁹ E Absalão se encontrou com os servos de Davi; e Absalão ia montado num mulo; e, entrando o mulo debaixo da espessura dos ramos de um grande carvalho, pegou-se-lhe a cabeça no carvalho, e ficou pendurado entre o céu e a terra; e o mulo, que estava debaixo dele, passou adiante.
¹⁰ O que vendo um homem, o fez saber a Joabe e disse: Eis que vi Absalão pendurado num carvalho.
¹¹ Então, disse Joabe ao homem que lho fizera saber: Pois que o viste, por que o não feriste logo ali em terra? E forçoso seria eu dar-lhe dez moedas de prata e um cinto.
¹² Disse, porém, aquele homem a Joabe: Ainda que eu pudesse pesar nas minhas mãos mil moedas de prata, não estenderia a minha mão contra o filho do rei, pois bem ouvimos que o rei te deu ordem a ti, e a Abisai, e a Itai, dizendo: Guardai-vos, cada um, de tocar no jovem, em Absalão.
¹³ Ainda que proferisse mentira com risco da minha vida, nem por isso coisa nenhuma se esconderia ao rei; e tu mesmo te oporias.
¹⁴ Então, disse Joabe: Não me demorarei assim contigo aqui. E tomou três dardos e traspassou com eles o coração de Absalão, estando ele ainda vivo no meio do carvalho.
¹⁵ E o cercaram dez jovens que levavam as armas de Joabe. E feriram a Absalão e o mataram.
¹⁶ Então, tocou Joabe a buzina, e voltou o povo de perseguir a Israel, porque Joabe deteve o povo.
¹⁷ E tomaram Absalão, e o lançaram no bosque, numa grande cova, e levantaram sobre ele um mui grande montão de pedras; e todo o Israel fugiu, cada um para a sua tenda.
¹⁸ Ora, Absalão, quando ainda vivia, tinha tomado e levantado para si uma coluna, que está no vale do Rei, porque dizia: Filho nenhum tenho para conservar a memória do meu nome. E chamou aquela coluna pelo seu próprio nome; pelo que até ao dia de hoje se chama o Pilar de Absalão.
  Davi, sabendo da morte de Absalão, chora amargamente
¹⁹ Então, disse Aimaás, filho de Zadoque: Deixa-me correr, e anunciarei ao rei que já o Senhor o vingou da mão de seus inimigos.
²⁰ Mas Joabe lhe disse: Tu não serás hoje o portador das novas, porém outro dia as levarás; mas hoje não darás a nova, porque é morto o filho do rei.
²¹ E disse Joabe a um cuxita: Vai tu e dize ao rei o que viste. E o cuxita se inclinou a Joabe e correu.
²² E prosseguiu Aimaás, filho de Zadoque, e disse a Joabe: Seja o que for, deixa-me também correr após o cuxita. E disse Joabe: Para que agora correrias tu, meu filho, pois não tens mensagem conveniente?
²³ Seja o que for, disse Aimaás, correrei. E Joabe lhe disse: Corre. E Aimaás correu pelo caminho da planície e passou ao cuxita.
²⁴ E Davi estava assentado entre as duas portas; e a sentinela subiu ao terraço da porta junto ao muro, e levantou os olhos, e olhou, e eis que um homem corria só.
²⁵ Gritou, pois, a sentinela e o disse ao rei: Se vem só, há novas em sua boca. E vinha andando e chegando.
²⁶ Então, viu a sentinela outro homem que corria, e a sentinela gritou ao porteiro, e disse: Eis que lá vem outro homem correndo só. Então, disse o rei: Também este traz novas.
²⁷ Disse mais a sentinela: Vejo o correr do primeiro, que parece ser o correr de Aimaás, filho de Zadoque. Então, disse o rei: Este é homem de bem e virá com boas novas.
²⁸ Gritou, pois, Aimaás e disse ao rei: Paz. E inclinou-se ao rei com o rosto em terra e disse: Bendito seja o Senhor, que entregou os homens que levantaram a mão contra o rei, meu senhor.
²⁹ Então, disse o rei: Vai bem com o jovem, com Absalão? E disse Aimaás: Vi um grande alvoroço, quando Joabe mandou o servo do rei, e a mim, teu servo; porém não sei o que era.
³⁰ E disse o rei: Vira-te e põe-te aqui. E virou-se e parou.
³¹ E eis que vinha o cuxita e disse: Anunciar-se-á ao rei, meu senhor, que hoje o Senhor te vingou da mão de todos os que se levantaram contra ti.
³² Então, disse o rei ao cuxita: Vai bem com o jovem, com Absalão? E disse o cuxita: Sejam como aquele jovem os inimigos do rei, meu senhor, e todos os que se levantaram contra ti para mal.
³³ Então, o rei se perturbou, e subiu à sala que estava por cima da porta, e chorou; e, andando, dizia assim: Meu filho Absalão, meu filho, meu filho Absalão! Quem me dera que eu morrera por ti, Absalão, meu filho, meu filho! 

`,
            pergunta: {
                texto: "Como Absalão ficou preso antes de ser morto?",
                opcoes: [
                    { numero: 1, texto: "O seu cabelo prendeu-se nos ramos de um carvalho", correta: true },
                    { numero: 2, texto: "Caiu num poço", correta: false },
                    { numero: 3, texto: "Ficou com o pé preso numa armadilha", correta: false },
                    { numero: 4, texto: "O seu cavalo o derrubou", correta: false }
                ],
                explicacao: "Enquanto cavalgava, a sua cabeça prendeu-se na árvore e ele ficou suspenso.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 18:9"
            }
        },
        19: {
            titulo: "Davi retorna a Jerusalém",
            texto: `
¹ E disseram a Joabe: Eis que o rei anda chorando e lastima-se por Absalão.
² Então, a vitória se tornou, naquele mesmo dia, em tristeza para todo o povo; porque, naquele mesmo dia, o povo ouvira dizer: Mui triste está o rei por causa de seu filho.
³ E, naquele mesmo dia, o povo entrou às furtadelas na cidade, como o povo de vergonha se escoa quando foge da peleja.
⁴ Estava, pois, o rei com o rosto coberto; e o rei gritava a alta voz: Meu filho Absalão, Absalão, meu filho, meu filho!
⁵ Então, entrou Joabe ao rei, em casa, e disse: Hoje, envergonhaste a face de todos os teus servos, que livraram hoje a tua vida, e a vida de teus filhos, e de tuas filhas, e a vida de tuas mulheres, e a vida de tuas concubinas,
⁶ amando tu aos que te aborrecem e aborrecendo aos que te amam; porque, hoje, dás a entender que nada valem para contigo capitães e servos; porque entendo, hoje, que, se Absalão vivesse, e todos nós, hoje, fôssemos mortos, então, bem te parecera aos teus olhos.
⁷ Levanta-te, pois, agora; sai e fala conforme o coração de teus servos; porque, pelo Senhor, te juro que, se não saíres, nem um só homem ficará contigo esta noite; e maior mal te será isso do que todo o mal que tem vindo sobre ti desde a tua mocidade até agora.
⁸ Então, o rei se levantou e se assentou à porta, e fizeram saber a todo o povo, dizendo: Eis que o rei está assentado à porta. Então, todo o povo veio apresentar-se diante do rei; porém Israel fugiu cada um para as suas tendas.
⁹ E todo o povo, em todas as tribos de Israel, andava altercando entre si, dizendo: O rei nos tirou das mãos de nossos inimigos, e ele nos livrou das mãos dos filisteus; e agora fugiu da terra por causa de Absalão.
¹⁰ E Absalão, a quem ungimos sobre nós, já morreu na peleja; agora, pois, por que vos calais e não fazeis voltar o rei?
  Davi volta para Jerusalém
¹¹ Então, o rei Davi enviou a Zadoque e a Abiatar, sacerdotes, dizendo: Falai aos anciãos de Judá, dizendo: Por que seríeis vós os últimos em tornar a trazer o rei para a sua casa? (Porque as palavras de todo o Israel chegaram ao rei, até à sua casa.)
¹² Vós sois meus irmãos, meus ossos e minha carne sois vós; por que, pois, seríeis os últimos em tornar a trazer o rei?
¹³ E a Amasa direis: Porventura, não és tu meu osso e minha carne? Assim me faça Deus, e outro tanto, se não fores chefe do arraial diante de mim para sempre, em lugar de Joabe.
¹⁴ Assim, moveu o coração de todos os homens de Judá, como o de um só homem; e enviaram ao rei, dizendo: Volta tu com todos os teus servos.
¹⁵ Então, o rei voltou e chegou até ao Jordão; e Judá veio a Gilgal, para ir encontrar-se com o rei, à outra banda do Jordão.
¹⁶ E apressou-se Simei, filho de Gera, filho de Benjamim, que era de Baurim; e desceu com os homens de Judá a encontrar-se com o rei Davi.
¹⁷ E com ele mil varões de Benjamim, como também Ziba, servo da casa de Saul, e seus quinze filhos, e seus vinte servos com ele; e prontamente passaram o Jordão adiante do rei.
¹⁸ E, passando a barca, para fazer passar a casa do rei e para fazer o que bem parecesse aos seus olhos, então, Simei, filho de Gera, se prostrou diante do rei, passando ele o Jordão.
¹⁹ E disse ao rei: Não me impute meu senhor a minha culpa, e não te lembres do que tão perversamente fez teu servo, no dia em que o rei, meu senhor, saiu de Jerusalém; não conserve o rei isso no coração.
²⁰ Porque teu servo deveras confessa que eu pequei; porém eis que eu sou o primeiro que de toda a casa de José desci a encontrar-me com o rei, meu senhor.
²¹ Então, respondeu Abisai, filho de Zeruia, e disse: Não morreria, pois, Simei por isso, havendo amaldiçoado ao ungido do Senhor?
²² Porém Davi disse: Que tenho eu convosco, filhos de Zeruia, para que hoje me sejais adversários? Morreria alguém hoje em Israel? Por que, porventura, não sei que hoje fui feito rei sobre Israel?
²³ E disse o rei a Simei: Não morrerás. E o rei lho jurou.
  Mefibosete encontra-se com Davi
²⁴ Também Mefibosete, filho de Saul, desceu a encontrar-se com o rei e não tinha lavado os pés, nem tinha feito a barba, nem tinha lavado as suas vestes desde o dia em que o rei tinha saído até ao dia em que voltou em paz.
²⁵ E sucedeu que, vindo ele a Jerusalém a encontrar-se com o rei, disse-lhe o rei: Por que não foste comigo, Mefibosete?
²⁶ E disse ele: Ó rei, meu senhor, o meu servo me enganou; porque o teu servo dizia: Albardarei um jumento, e nele montarei, e irei com o rei; pois o teu servo é coxo.
²⁷ De mais disso, falsamente acusou o teu servo diante do rei, meu senhor; porém o rei, meu senhor, é como um anjo de Deus; faze, pois, o que parecer bem aos teus olhos.
²⁸ Porque toda a casa de meu pai não era senão de homens dignos de morte diante do rei meu senhor; e, contudo, puseste a teu servo entre os que comem à tua mesa; e que mais direito tenho eu de clamar ao rei?
²⁹ E disse-lhe o rei: Por que ainda falas mais de teus negócios? Já disse eu: Tu e Ziba, reparti as terras.
³⁰ E disse Mefibosete ao rei: Tome ele também tudo, pois já veio o rei, meu senhor, em paz à sua casa.
 Barzilai encontra-se com Davi
³¹ Também Barzilai, o gileadita, desceu de Rogelim e passou com o rei o Jordão, para o acompanhar à outra banda do Jordão.
³² E era Barzilai mui velho, da idade de oitenta anos; e ele tinha sustentado o rei, quando tinha a sua morada em Maanaim, porque era homem mui grande.
³³ E disse o rei a Barzilai: Passa tu comigo, e sustentar-te-ei comigo em Jerusalém.
³⁴ Porém Barzilai disse ao rei: Quantos serão os dias dos anos da minha vida, para que suba com o rei a Jerusalém?
³⁵ Da idade de oitenta anos sou eu hoje; poderia eu discernir entre bom e mau? Poderia o teu servo ter gosto no que comer e beber? Poderia eu mais ouvir a voz dos cantores e cantoras? E por que será o teu servo ainda pesado ao rei, meu senhor?
³⁶ Com o rei passará teu servo ainda um pouco mais além do Jordão; e por que me recompensará o rei com tal recompensa?
³⁷ Deixa voltar o teu servo, e morrerei na minha cidade junto à sepultura de meu pai e de minha mãe; mas eis aí está o teu servo Quimã; que passe com o rei, meu senhor, e faze-lhe o que bem parecer aos teus olhos.
³⁸ Então, disse o rei: Quimã passará comigo, e eu lhe farei como bem parecer aos teus olhos, e tudo quanto me pedires te farei.
³⁹ Havendo, pois, todo o povo passado o Jordão, e, passando também o rei, beijou o rei a Barzilai e o abençoou; e ele voltou para o seu lugar.
⁴⁰ E dali passou o rei a Gilgal, e Quimã passou com ele; e todo o povo de Judá conduziu o rei, como também a metade do povo de Israel.
⁴¹ E eis que todos os homens de Israel vieram ao rei e disseram ao rei: Por que te furtaram nossos irmãos, os homens de Judá, e conduziram o rei e a sua casa por sobre o Jordão e todos os homens de Davi com eles?
⁴² Então, responderam todos os homens de Judá aos homens de Israel: Porquanto o rei é nosso parente; e por que vos irais por isso? Porventura, comemos à custa do rei ou nos apresentou algum presente?
⁴³ E responderam os homens de Israel aos homens de Judá e disseram: Dez partes temos no rei e até em Davi mais temos nós do que vós; porque, pois, fizestes pouca conta de nós, para que a nossa palavra não fosse a primeira, para tornar a trazer o nosso rei? Porém a palavra dos homens de Judá foi mais forte do que a palavra dos homens de Israel. 

`,
            pergunta: {
                texto: "Quem foi o idoso que sustentou Davi em Maanaim?",
                opcoes: [
                    { numero: 1, texto: "Barzilai, o gileadita", correta: true },
                    { numero: 2, texto: "Simei", correta: false },
                    { numero: 3, texto: "Hanzum", correta: false },
                    { numero: 4, texto: "Amasa", correta: false }
                ],
                explicacao: "Barzilai era muito velho e rico, e providenciou mantimentos para o rei.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 19:32"
            }
        },
        20: {
            titulo: "A revolta de Seba",
            texto: `
¹ Então, se achou ali, por acaso, um homem de Belial, cujo nome era Seba, filho de Bicri, homem de Benjamim, o qual tocou a buzina e disse: Não temos parte em Davi, nem herança no filho de Jessé; cada um às suas tendas, ó Israel.
² Então, todos os homens de Israel deixaram de seguir Davi e seguiram Seba, filho de Bicri; porém os homens de Judá se uniram ao seu rei, desde o Jordão até Jerusalém.
³ Vindo, pois, Davi para sua casa, a Jerusalém, tomou o rei as dez mulheres, suas concubinas, que deixara para guardarem a casa, e as pôs numa casa em guarda, e as sustentava; porém não entrou a elas; e estiveram encerradas até ao dia da sua morte, vivendo como viúvas.
⁴ Disse mais o rei a Amasa: Convoca-me os homens de Judá para o terceiro dia e tu, então, apresenta-te aqui.
⁵ E foi Amasa para convocar a Judá; porém demorou-se além do tempo que lhe tinha designado.
⁶ Então, disse Davi a Abisai: Mais mal agora nos fará Seba, o filho de Bicri, do que Absalão; pelo que toma tu os servos de teu senhor e persegue-o, para que, porventura, não ache para si cidades fortes e escape dos nossos olhos.
⁷ Então, saíram atrás dele os homens de Joabe, e os quereteus, e os peleteus, e todos os valentes; estes saíram de Jerusalém para irem atrás de Seba, filho de Bicri.
⁸ Chegando eles, pois, à pedra grande que está junto a Gibeão, Amasa veio perante eles; e estava Joabe cingido da sua roupa que vestiu e sobre ela um cinto com a espada, em seus lombos, na sua bainha; e, adiantando-se ele, lhe caiu.
⁹ E disse Joabe a Amasa: Vai contigo bem, meu irmão? E Joabe, com a mão direita, pegou da barba de Amasa, para o beijar.
¹⁰ E Amasa não se resguardou da espada que estava na mão de Joabe, de sorte que este o feriu com ela na quinta costela e lhe derramou por terra as entranhas; e não o feriu segunda vez, e morreu; então, Joabe e Abisai, seu irmão, foram atrás de Seba, filho de Bicri.
¹¹ Mas um dentre os moços de Joabe parou junto a ele e disse: Quem há que bem queira a Joabe e quem seja por Davi, siga a Joabe.
¹² E Amasa estava envolto no seu sangue no meio do caminho; e, vendo aquele homem que todo o povo parava, desviou a Amasa do caminho para o campo e lançou sobre ele um manto; porque via que todo aquele que chegava a ele parava.
¹³ E, como estava apartado do caminho, todos os homens seguiram a Joabe, para perseguirem a Seba, filho de Bicri.
¹⁴ E passou por todas as tribos de Israel até Abel-Bete-Maaca e a todos os beritas; e ajuntaram-se todos e também o seguiram.
¹⁵ E vieram, e o cercaram em Abel-Bete-Maaca, e levantaram uma tranqueira contra a cidade, assim que já estava em frente do antemuro; e todo o povo que estava com Joabe batia no muro, para o derribar.
¹⁶ Então, uma mulher sábia gritou de dentro da cidade: Ouvi, ouvi, peço-vos que digais a Joabe: Chega-te cá, para que eu te fale.
¹⁷ Chegou-se a ela, e disse a mulher: Tu és Joabe? E disse ele: Eu sou. E ela lhe disse: Ouve as palavras de tua serva. E disse ele: Ouço.
¹⁸ Então, falou ela, dizendo: Antigamente, costumava-se falar, dizendo: Certamente, pediram conselho a Abel; e assim o cumpriam.
¹⁹ Eu sou uma das pacíficas e das fiéis em Israel; e tu procuras matar uma cidade que é mãe em Israel; por que, pois, devorarias a herança do Senhor?
²⁰ Então, respondeu Joabe e disse: Longe, longe de mim que eu tal faça, que eu devore ou arruíne!
²¹ A coisa não é assim; porém um só homem do monte de Efraim, cujo nome é Seba, filho de Bicri, levantou a mão contra o rei, contra Davi; entregai-me só este, e retirar-me-ei da cidade. Então, disse a mulher a Joabe: Eis que te será lançada a sua cabeça pelo muro.
²² E a mulher, na sua sabedoria, entrou a todo o povo, e cortaram a cabeça de Seba, filho de Bicri, e a lançaram a Joabe; então, tocou este a buzina, e se retiraram da cidade, cada um para as suas tendas. E Joabe voltou a Jerusalém, ao rei.
²³ E Joabe estava sobre todo o exército de Israel; e Benaia, filho de Joiada, sobre os quereteus e sobre os peleteus;
²⁴ e Adorão, sobre os tributos; e Josafá, filho de Ailude, era o chanceler;
²⁵ e Seva, o escrivão; e Zadoque e Abiatar, os sacerdotes;
²⁶ e também Ira, o jairita, era o oficial-mor de  

`,
            pergunta: {
                texto: "Quem matou Amasa à traição?",
                opcoes: [
                    { numero: 1, texto: "Joabe", correta: true },
                    { numero: 2, texto: "Seba", correta: false },
                    { numero: 3, texto: "Abisai", correta: false },
                    { numero: 4, texto: "Benaia", correta: false }
                ],
                explicacao: "Joabe fingiu cumprimentá-lo e feriu-o com a espada.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 20:9-10"
            }
        },
        21: {
            titulo: "Fome e os Gibeonitas",
            texto: `
¹ E houve, em dias de Davi, uma fome de três anos, de ano em ano; e Davi consultou ao Senhor, e o Senhor lhe disse: É por causa de Saul e da sua casa sanguinária, porque matou os gibeonitas.
² Então, chamou o rei os gibeonitas e lhes falou (ora os gibeonitas não eram dos filhos de Israel, mas do resto dos amorreus, e os filhos de Israel lhes tinham jurado, porém Saul procurou feri-los no seu zelo pelos filhos de Israel e de Judá).
³ Disse, pois, Davi aos gibeonitas: Que quereis que eu vos faça? E que satisfação vos darei, para que abençoeis a herança do Senhor?
⁴ Então, os gibeonitas lhe disseram: Não é por prata nem ouro que temos questão com Saul e com sua casa; nem tampouco pretendemos matar pessoa alguma em Israel. E disse ele: Que é, pois, que quereis que vos faça?
⁵ E disseram ao rei: Quanto ao homem que nos destruiu e procurou que fôssemos assolados, sem que pudéssemos subsistir em termo algum de Israel,
⁶ de seus filhos se nos deem sete homens, para que os enforquemos ao Senhor, em Gibeá de Saul, o eleito do Senhor. E disse o rei: Eu os darei.
⁷ Porém o rei poupou a Mefibosete, filho de Jônatas, filho de Saul, por causa do juramento do Senhor, que entre eles houvera, entre Davi e Jônatas, filho de Saul.
⁸ Porém tomou o rei os dois filhos de Rispa, filha de Aiá, que tinha tido de Saul, a saber, a Armoni e a Mefibosete, como também os cinco filhos da irmã de Mical, filha de Saul, que tivera de Adriel, filho de Barzilai, meolatita.
⁹ E os entregou na mão dos gibeonitas, os quais os enforcaram no monte, perante o Senhor; e caíram estes sete juntamente; e foram mortos nos dias da sega, nos dias primeiros, no princípio da sega das cevadas.
¹⁰ Então, Rispa, filha de Aiá, tomou um pano de cilício, e estendeu-lho sobre uma penha, desde o princípio da sega, até que destilou a água sobre eles do céu, e não deixou que as aves do céu se aproximassem deles de dia, nem os animais do campo de noite.
¹¹ E foi dito a Davi o que fizera Rispa, filha de Aiá, concubina de Saul.
¹² Então, foi Davi e tomou os ossos de Saul, e os ossos de Jônatas, seu filho, dos moradores de Jabes-Gileade, os quais os furtaram da rua de Bete-Seã, onde os filisteus os tinham pendurado, quando os filisteus feriram a Saul em Gilboa.
¹³ E fez subir dali os ossos de Saul e os ossos de Jônatas, seu filho; e ajuntaram também os ossos dos enforcados.
¹⁴ Enterraram os ossos de Saul e de Jônatas, seu filho, na terra de Benjamim, em Zela, na sepultura de Quis, seu pai, e fizeram tudo o que o rei ordenara; e, depois disso, Deus se aplacou para com a terra.
 Quatro guerras contra os filisteus
¹⁵ Tiveram mais os filisteus uma peleja contra Israel; e desceu Davi, e com ele os seus servos, e tanto pelejaram contra os filisteus, que Davi se cansou.
¹⁶ E Isbi-Benobe, que era dos filhos dos gigantes, e o peso de cuja lança tinha trezentos siclos de cobre, e que cingia uma espada nova, este intentou ferir Davi.
¹⁷ Porém Abisai, filho de Zeruia, o socorreu, e feriu o filisteu, e o matou; então, os homens de Davi lhe juraram, dizendo: Nunca mais sairás conosco à peleja, para que não apagues a lâmpada de Israel.
¹⁸ E aconteceu, depois disso, que houve em Gobe ainda outra peleja contra os filisteus; então, Sibecai, o husatita, feriu a Safe, que era dos filhos dos gigantes.
¹⁹ Houve mais outra peleja contra os filisteus em Gobe; e Elanã, filho de Jaaré-Oregim, o belemita, feriu Golias, o geteu, de cuja lança era a haste como eixo de tecelão.
²⁰ Houve ainda também outra peleja em Gate, onde estava um homem de alta estatura, que tinha em cada mão seis dedos e em cada pé outros seis, vinte e quatro por todos, e também este nascera dos gigantes.
²¹ E injuriava a Israel; porém Jônatas, filho de Simeia, irmão de Davi, o feriu.
²² Estes quatro nasceram dos gigantes em Gate; e caíram pela mão de Davi e pela mão de seus servos 

`,
            pergunta: {
                texto: "Por que houve fome em Israel por três anos?",
                opcoes: [
                    { numero: 1, texto: "Por causa de Saul e da sua casa sanguinária contra os gibeonitas", correta: true },
                    { numero: 2, texto: "Falta de chuva natural", correta: false },
                    { numero: 3, texto: "Praga de gafanhotos", correta: false },
                    { numero: 4, texto: "Davi pecou ao contar o povo", correta: false }
                ],
                explicacao: "Saul tinha quebrado a aliança que Josué fizera com os gibeonitas.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 21:1"
            }
        },
        22: {
            titulo: "O cântico de libertação de Davi",
            texto: `
¹ E falou Davi ao Senhor as palavras deste cântico, no dia em que o Senhor o livrou das mãos de todos os seus inimigos e das mãos de Saul.
² Disse, pois: O Senhoré o meu rochedo, e o meu lugar forte, e o meu libertador.
³ Deus é o meu rochedo, e nele confiarei; o meu escudo, e a força de minha salvação, e o meu alto retiro, e o meu refúgio. Ó meu Salvador, de violência me salvaste.
⁴ O Senhor, digno de louvor, invoquei e de meus inimigos fiquei livre.
⁵ Porque me cercaram as ondas de morte, as torrentes de Belial me assombraram.
⁶ Cordas do inferno me cingiram, e encontraram-me laços de morte.
⁷ Estando em angústia, invoquei ao Senhor e a meu Deus clamei; do seu templo ouviu ele a minha voz, e o meu clamor chegou aos seus ouvidos.
⁸ Então, se abalou e tremeu a terra, os fundamentos dos céus se moveram e abalaram, porque ele se irou.
⁹ Subiu a fumaça de seus narizes, e, da sua boca, um fogo devorador; carvões se incenderam dele.
¹⁰ E abaixou os céus, e desceu, e uma escuridão havia debaixo de seus pés.
¹¹ E subiu um querubim, e voou; e foi visto sobre as asas do vento.
¹² E por tendas pôs as trevas ao redor de si, ajuntamento de águas, nuvens dos céus.
¹³ Pelo resplendor da sua presença, brasas de fogo se acendem.
¹⁴ Trovejou desde os céus o Senhor e o Altíssimo fez soar a sua voz.
¹⁵ E disparou flechas e os dissipou; raios, e os perturbou.
¹⁶ E apareceram as profundezas do mar, os fundamentos do mundo se descobriram, pela repreensão do Senhor, pelo sopro do vento dos seus narizes.
¹⁷ Desde o alto enviou e me tomou; tirou-me das muitas águas.
¹⁸ Livrou-me do meu possante inimigo e daqueles que me tinham ódio, porque eram mais fortes do que eu.
¹⁹ Encontraram-me no dia da minha calamidade; porém o Senhor se fez o meu esteio.
²⁰ E tirou-me para o largo e arrebatou-me dali, porque tinha prazer em mim.
²¹ Recompensou-me o Senhor conforme a minha justiça, conforme a pureza de minhas mãos me retribuiu.
²² Porque guardei os caminhos do Senhor e não me apartei impiamente do meu Deus.
²³ Porque todos os seus juízes estavam diante de mim, e de seus estatutos me não desviei.
²⁴ Porém fui sincero perante ele e guardei-me da minha iniquidade.
²⁵ E me retribuiu o Senhor conforme a minha justiça, conforme a minha pureza diante dos seus olhos.
²⁶ Com o benigno te mostras benigno, com o varão sincero te mostras sincero.
²⁷ Com o puro te mostras puro, mas com o perverso te mostras avesso.
²⁸ E o povo aflito livras, mas teus olhos são contra os altivos, e tu os abaterás.
²⁹ Porque tu, Senhor, és a minha candeia; e o Senhor clareia as minhas trevas.
³⁰ Porque contigo passo pelo meio de um esquadrão, pelo meu Deus salto um muro.
³¹ O caminho de Deus é perfeito, e a palavra do Senhor, refinada; ele é o escudo de todos os que nele confiam.
³² Porque, quem é Deus, senão o Senhor? E quem é rochedo, senão o nosso Deus?
³³ Deus é a minha fortaleza e a minha força, e ele perfeitamente desembaraça o meu caminho.
³⁴ Faz ele os meus pés como os das cervas e me põe sobre as minhas alturas.
³⁵ Instrui as minhas mãos para a peleja, de maneira que um arco de cobre se quebra pelos meus braços.
³⁶ Também me deste o escudo da tua salvação e, pela tua brandura, me vieste a engrandecer.
³⁷ Alargaste os meus passos debaixo de mim, e não vacilaram os meus artelhos.
³⁸ Persegui os meus inimigos, e os derrotei, e nunca me tornei até que os consumisse.
³⁹ E os consumi e os atravessei, de modo que nunca mais se levantaram, mas caíram debaixo dos meus pés.
⁴⁰ Porque me cingiste de força para a peleja, fizeste abater debaixo de mim os que se levantaram contra mim.
⁴¹ E deste-me o pescoço de meus inimigos, daqueles que me tinham ódio, e os destruí.
⁴² Olharam, porém, não houve libertador, sim, para o Senhor, porém não lhes respondeu.
⁴³ Então, os moí como o pó da terra; como a lama das ruas os trilhei e dissipei.
⁴⁴ Também me livraste das contendas do meu povo; guardaste-me para cabeça das nações; o povo que não conhecia me servirá.
⁴⁵ Os filhos de estranhos se me sujeitaram; ouvindo a minha voz, me obedeceram.
⁴⁶ Os filhos de estranhos descaíram; e, cingindo-se, saíram dos seus encerramentos.
⁴⁷ Vive o Senhor, e bendito seja o meu rochedo; e exaltado seja Deus, a rocha da minha salvação,
⁴⁸ o Deus que me dá inteira vingança e sujeita os povos debaixo de mim,
⁴⁹ e o que me tira dentre os meus inimigos; e tu me exaltas sobre os que contra mim se levantam; do homem violento me livras.
⁵⁰ Por isso, ó Senhor, te louvarei entre as nações, e entoarei louvores ao teu nome.
⁵¹ Ele é a torre das salvações do seu rei e usa de benignidade com o seu ungido, com Davi e com a sua semente, para sempre 

`,
            pergunta: {
                texto: "Como Davi descreve o Senhor no início do seu cântico?",
                opcoes: [
                    { numero: 1, texto: "O meu rochedo, o meu lugar forte e o meu libertador", correta: true },
                    { numero: 2, texto: "O criador do céu e da terra", correta: false },
                    { numero: 3, texto: "Um Deus vingador", correta: false },
                    { numero: 4, texto: "O rei de Jerusalém", correta: false }
                ],
                explicacao: "Davi compôs este hino após ser livre de Saul e de todos os seus inimigos.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 22:2"
            }
        },
        23: {
            titulo: "As últimas palavras de Davi",
            texto: `  Davi
¹ E estas são as últimas palavras de Davi. Diz Davi, filho de Jessé, e diz o homem que foi levantado em altura, o ungido do Deus de Jacó, e o suave em salmos de Israel:
² O Espírito do Senhor falou por mim, e a sua palavra esteve em minha boca.
³ Disse o Deus de Israel, a Rocha de Israel a mim me falou: Haverá um justo que domine sobre os homens, que domine no temor de Deus.
⁴ E será como a luz da manhã, quando sai o sol, da manhã sem nuvens, quando, pelo seu resplendor e pela chuva, a erva brota da terra.
⁵ Ainda que a minha casa não seja tal para com Deus, contudo estabeleceu comigo um concerto eterno, que em tudo será ordenado e guardado. Pois toda a minha salvação e todo o meu prazer estão nele, apesar de que ainda não o faz brotar.
⁶ Porém os filhos de Belial serão todos como os espinhos que se lançam fora, porque se lhes não pode pegar com a mão.
⁷ Mas qualquer que os tocar se armará de ferro e da haste de uma lança; e a fogo serão totalmente queimados no mesmo lugar.
  Os trinta e sete valentes que Davi teve
⁸ Estes são os nomes dos valentes que Davi teve: Josebe-Bassebete, filho de Taquemoni, o principal dos capitães; este era Adino, o eznita, que se opusera a oitocentos e os feriu de uma vez.
⁹ E, depois dele, Eleazar, filho de Dodô, filho de Aoí, entre os três valentes que estavam com Davi, quando provocaram os filisteus que ali se ajuntaram à peleja e quando de Israel os homens subiram,
¹⁰ este se levantou e feriu os filisteus, até lhe cansar a mão e ficar a mão pegada à espada; e, naquele dia, o Senhor operou um grande livramento; e o povo voltou atrás dele somente a tomar o despojo.
¹¹ E, depois dele, Sama, filho de Agé, o hararita, quando os filisteus se ajuntaram numa multidão, onde havia um pedaço de terra cheio de lentilhas, e o povo fugira de diante dos filisteus.
¹² Este, pois, se pôs no meio daquele pedaço de terra, e o defendeu, e feriu os filisteus; e o Senhor operou um grande livramento.
¹³ Também três dos trinta cabeças desceram e vieram no tempo da sega a Davi, à caverna de Adulão; e a multidão dos filisteus acampara no vale dos Refains.
¹⁴ Davi estava, então, num lugar forte, e a guarnição dos filisteus estava, então, em Belém.
¹⁵ E teve Davi desejo e disse: Quem me dera beber da água da cisterna de Belém que está junto à porta!
¹⁶ Então, aqueles três valentes romperam pelo arraial dos filisteus, e tiraram água da cisterna de Belém que está junto à porta, e a tomaram, e a trouxeram a Davi; porém ele não a quis beber, mas derramou-a perante o Senhor.
¹⁷ E disse: Guarda-me, ó Senhor, de que tal faça; beberia eu o sangue dos homens que foram a risco da sua vida? De maneira que não a quis beber. Isso fizeram aqueles três valentes.
¹⁸ Também Abisai, irmão de Joabe, filho de Zeruia, era cabeça de três; e este alçou a sua lança contra trezentos, e os feriu, e tinha nome entre os três.
¹⁹ Porventura, este não era o mais nobre dentre estes três? Pois era o primeiro deles; porém aos primeiros três não chegou.
²⁰ Também Benaia, filho de Joiada, filho de um homem valoroso de Cabzeel, grande em obras, este feriu dois fortes leões de Moabe; e desceu ele e feriu um leão no meio de uma cova, no tempo da neve.
²¹ Também este feriu um homem egípcio, homem de respeito; e na mão do egípcio havia uma lança, porém Benaia desceu a ele com um cajado, e arrancou a lança da mão do egípcio, e o matou com a sua própria lança.
²² Estas coisas fez Benaia, filho de Joiada, pelo que teve nome entre os três valentes.
²³ Dentre os trinta, ele era o mais nobre, porém aos três primeiros não chegou; e Davi o pôs sobre os seus guardas.
²⁴ Asael, irmão de Joabe, estava entre os trinta, que eram: Elanã, filho de Dodô, de Belém;
²⁵ Sama, harodita; Elica, harodita;
²⁶ Heles, paltita; Ira, filho de Iques, tecoíta;
²⁷ Abiezer, anatotita; Mebunai, husatita;
²⁸ Zalmom, aoíta; Maarai, netofatita;
²⁹ Helebe, filho de Baaná, netofatita; Itai, filho de Ribai, de Gibeá, dos filhos de Benjamim;
³⁰ Benaia, piratonita; Hidai, do ribeiro de Gaás;
³¹ Abi-Albom, arbatita; Azmavete, barumita;
³² Eliaba, saalbonita; os filhos de Jasém; e Jônatas;
³³ Sama, hararita; Aião, filho de Sarar, ararita;
³⁴ Elifelete, filho de Aasbai, filho de um maacatita; Eliã, filho de Aitofel, gilonita;
³⁵ Hezrai, carmelita; Paarai, arbita;
³⁶ Igal, filho de Natã, de Zobá; Bani, gadita;
³⁷ Zeleque, amonita; Naarai, beerotita, o que trazia as armas de Joabe, filho de Zeruia;
³⁸ Ira, jetrita; Garebe, jetrita;
³⁹ Urias, heteu; trinta e sete por todos 

`,
            pergunta: {
                texto: "Quem eram os três principais valentes de Davi?",
                opcoes: [
                    { numero: 1, texto: "Josebe-Bassebete, Eleazar e Samá", correta: true },
                    { numero: 2, texto: "Joabe, Abisai e Asael", correta: false },
                    { numero: 3, texto: "Natã, Zadoque e Gad", correta: false },
                    { numero: 4, texto: "Urias, Itai e Benaia", correta: false }
                ],
                explicacao: "Estes realizaram feitos extraordinários, como enfrentar exércitos sozinhos.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 23:8-11"
            }
        },
        24: {
            titulo: "O censo e o castigo",
            texto: `
¹ E a ira do Senhor se tornou a acender contra Israel, e ele incitou a Davi contra eles, dizendo: Vai, numera a Israel e a Judá.
² Disse, pois, o rei a Joabe, chefe do exército, o qual tinha consigo: Agora, rodeia por todas as tribos de Israel, desde Dã até Berseba, e numera o povo, para que eu saiba o número do povo.
³ Então, disse Joabe ao rei: Ora, multiplique o Senhor, teu Deus, a este povo cem vezes tanto quanto agora é, e os olhos do rei, meu senhor, o vejam; mas por que deseja o rei, meu senhor, este negócio?
⁴ Porém a palavra do rei prevaleceu contra Joabe e contra os chefes do exército. Joabe, pois, saiu com os chefes do exército diante da face do rei, a numerar o povo de Israel.
⁵ E passaram o Jordão e puseram-se em campo junto a Aroer, à direita da cidade que está no meio do ribeiro de Gade, e junto a Jazer.
⁶ E vieram a Gileade e à terra baixa de Cades; também vieram até Dã-Jaã e ao redor de Sidom.
⁷ E vieram à fortaleza de Tiro, e a todas as cidades dos heveus e dos cananeus, e saíram para a banda do sul de Judá, a Berseba.
⁸ Assim, rodearam por toda a terra e, ao cabo de nove meses e vinte dias, voltaram a Jerusalém.
⁹ E Joabe deu ao rei a soma do número do povo contado: havia em Israel oitocentos mil homens de guerra, que arrancavam espada; e os homens de Judá eram quinhentos mil homens.
¹⁰ E o coração doeu a Davi, depois de haver numerado o povo, e disse Davi ao Senhor: Muito pequei no que fiz; porém agora, ó Senhor, peço-te que traspasses a iniquidade do teu servo; porque tenho procedido mui loucamente.
¹¹ Levantando-se, pois, Davi pela manhã, veio a palavra do Senhor ao profeta Gade, vidente de Davi, dizendo:
¹² Vai e dize a Davi: Assim diz o Senhor: três coisas te ofereço; escolhe uma delas, para que ta faça.
¹³ Veio, pois, Gade a Davi e fez-lho saber; e disse-lhe: Queres que sete anos de fome te venham à tua terra; ou que por três meses fujas diante de teus inimigos, e eles te persigam; ou que por três dias haja peste na tua terra? Delibera, agora, e vê que resposta hei de dar ao que me enviou.
¹⁴ Então, disse Davi a Gade: Estou em grande angústia; porém caiamos nas mãos do Senhor, porque muitas são as suas misericórdias; mas nas mãos dos homens não caia eu.
¹⁵ Então, enviou o Senhor a peste a Israel, desde pela manhã até ao tempo determinado; e, desde Dã até Berseba, morreram setenta mil homens do povo.
¹⁶ Estendendo, pois, o Anjo a sua mão sobre Jerusalém, para a destruir, o Senhor se arrependeu daquele mal; e disse ao Anjo que fazia a destruição entre o povo: Basta, agora retira a tua mão. E o Anjo do Senhor estava junto à eira de Araúna, o jebuseu.
¹⁷ E, vendo Davi ao Anjo que feria o povo, falou ao Senhor e disse: Eis que eu sou o que pequei e eu o que iniquamente procedi; porém estas ovelhas que fizeram? Seja, pois, a tua mão contra mim e contra a casa de meu pai.
¹⁸ E Gade veio, naquele mesmo dia, a Davi e disse-lhe: Sobe, levanta ao Senhor um altar na eira de Araúna, o jebuseu.
¹⁹ Davi subiu conforme a palavra de Gade, como o Senhor lhe tinha ordenado.
²⁰ E olhou Araúna e viu que vinham para ele o rei e os seus servos; saiu, pois, Araúna, e inclinou-se diante do rei com o rosto em terra.
²¹ E disse Araúna: Por que vem o rei, meu senhor, ao seu servo? E disse Davi: Para comprar de ti esta eira, a fim de edificar nela um altar ao Senhor, para que este castigo cesse de sobre o povo.
²² Então, disse Araúna a Davi: Tome e ofereça o rei, meu senhor, o que bem parecer aos seus olhos; eis aí bois para o holocausto, e os trilhos, e o aparelho dos bois para a lenha.
²³ Tudo isso deu Araúna ao rei; disse mais Araúna ao rei: O Senhor, teu Deus, tome prazer em ti.
²⁴ Porém o rei disse a Araúna: Não, porém por certo preço to comprarei, porque não oferecerei ao Senhor, meu Deus, holocaustos que me não custem nada. Assim, Davi comprou a eira e os bois por cinquenta siclos de prata.
²⁵ E edificou ali Davi ao Senhor um altar e ofereceu holocaustos e ofertas pacíficas. Assim, o Senhor se aplacou para com a terra e cessou aquele castigo de sobre Israel 

`,
            pergunta: {
                texto: "Qual castigo Davi escolheu após o pecado do censo?",
                opcoes: [
                    { numero: 1, texto: "Três dias de peste na terra", correta: true },
                    { numero: 2, texto: "Sete anos de fome", correta: false },
                    { numero: 3, texto: "Três meses de fuga perante os inimigos", correta: false },
                    { numero: 4, texto: "A perda do seu trono", correta: false }
                ],
                explicacao: "Davi preferiu cair nas mãos do Senhor, pois as suas misericórdias são grandes.",
                pontosGanhos: 20,
                versiculoReferencia: "2 Samuel 24:13-14"
            }
        }
    }
};

console.log('✅ Livro de 2 Samuel carregado!');