// js/livros/mateus.js
// ═══════════════════════════════════════════════════════════════════════════════
// LIVRO: MATEUS (28 Capítulos) - ESTRUTURA COMPLETA
// ═══════════════════════════════════════════════════════════════════════════════

export const mateus = {
    nome: "Mateus",
    icone: "📖",
    background: "./imagens/mateus_bg.jpg",
    autor: "Mateus (Levi)",
    totalCapitulos: 28,
    
    capitulos: {
        1: {
            titulo: "A Genealogia e o Nascimento de Jesus",
            texto: `
¹ Livro da geração de Jesus Cristo, Filho de Davi, Filho de Abraão.
² Abraão gerou a Isaque, e Isaque gerou a Jacó, e Jacó gerou a Judá e a seus irmãos,
³ e Judá gerou de Tamar a Perez e a Zerá, e Perez gerou a Esrom, e Esrom gerou a Arão.
⁴ Arão gerou a Aminadabe, e Aminadabe gerou a Naassom, e Naassom gerou a Salmom,
⁵ e Salmom gerou de Raabe a Boaz, e Boaz gerou de Rute a Obede, e Obede gerou a Jessé.
⁶ Jessé gerou ao rei Davi, e o rei Davi gerou a Salomão da que foi mulher de Urias.
⁷ Salomão gerou a Roboão, e Roboão gerou a Abias, e Abias gerou a Asa,
⁸ e Asa gerou a Josafá, e Josafá gerou a Jorão, e Jorão gerou a Uzias,
⁹ e Uzias gerou a Jotão, e Jotão gerou a Acaz, e Acaz gerou a Ezequias.
¹⁰ Ezequias gerou a Manassés, e Manassés gerou a Amom, e Amom gerou a Josias,
¹¹ e Josias gerou a Jeconias e a seus irmãos na deportação para a Babilônia.
¹² E, depois da deportação para a Babilônia, Jeconias gerou a Salatiel, e Salatiel gerou a Zorobabel,
¹³ e Zorobabel gerou a Abiúde, e Abiúde gerou a Eliaquim, e Eliaquim gerou a Azor,
¹⁴ e Azor gerou a Sadoque, e Sadoque gerou a Aquim, e Aquim gerou a Eliúde,
¹⁵ e Eliúde gerou a Eleazar, e Eleazar gerou a Matã, e Matã gerou a Jacó,
¹⁶ e Jacó gerou a José, marido de Maria, da qual nasceu Jesus, que se chama o Cristo.
¹⁷ De sorte que todas as gerações, desde Abraão até Davi, são catorze gerações; e, desde Davi até a deportação para a Babilônia, catorze gerações; e, desde a deportação para a Babilônia até Cristo, catorze gerações.
   O nascimento de Jesus Cristo
¹⁸ Ora, o nascimento de Jesus Cristo foi assim: Estando Maria, sua mãe, desposada com José, antes de se ajuntarem, achou-se ter concebido do Espírito Santo.
¹⁹ Então, José, seu marido, como era justo e a não queria infamar, intentou deixá-la secretamente.
²⁰ E, projetando ele isso, eis que, em sonho, lhe apareceu um anjo do Senhor, dizendo: José, filho de Davi, não temas receber a Maria, tua mulher, porque o que nela está gerado é do Espírito Santo.
²¹ E ela dará à luz um filho, e lhe porás o nome de Jesus, porque ele salvará o seu povo dos seus pecados.
²² Tudo isso aconteceu para que se cumprisse o que foi dito da parte do Senhor pelo profeta, que diz:
²³ Eis que a virgem conceberá e dará à luz um filho, e ele será chamado pelo nome de Emanuel. (Emanuel traduzido é: Deus conosco).
²⁴ E José, despertando do sonho, fez como o anjo do Senhor lhe ordenara, e recebeu a sua mulher,
²⁵ e não a conheceu até que deu à luz seu filho, o primogênito; e pôs-lhe o nome de Jesus 

`,
            pergunta: {
                texto: "O que significa o nome Emanuel?",
                opcoes: [
                    { numero: 1, texto: "Deus connosco", correta: true },
                    { numero: 2, texto: "Deus é amor", correta: false },
                    { numero: 3, texto: "O Salvador", correta: false },
                    { numero: 4, texto: "Rei dos Reis", correta: false }
                ],
                explicacao: "Emanuel é um título messiânico que significa que Deus está presente entre o Seu povo.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 1:23"
            }
        },
        2: {
            titulo: "A Visita dos Magos e a Fuga para o Egipto",
            texto: `
¹ E, tendo nascido Jesus em Belém da Judeia, no tempo do rei Herodes, eis que uns magos vieram do Oriente a Jerusalém,
² e perguntaram: Onde está aquele que é nascido rei dos judeus? Porque vimos a sua estrela no Oriente e viemos a adorá-lo.
³ E o rei Herodes, ouvindo isso, perturbou-se, e toda a Jerusalém, com ele.
⁴ E, congregados todos os príncipes dos sacerdotes e os escribas do povo, perguntou-lhes onde havia de nascer o Cristo.
⁵ E eles lhe disseram: Em Belém da Judeia, porque assim está escrito pelo profeta:
⁶ E tu, Belém, terra de Judá, de modo nenhum és a menor entre as capitais de Judá, porque de ti sairá o Guia que há de apascentar o meu povo de Israel.
⁷ Então, Herodes, chamando secretamente os magos, inquiriu exatamente deles acerca do tempo em que a estrela lhes aparecera.
⁸ E, enviando-os a Belém, disse: Ide, e perguntai diligentemente pelo menino, e, quando o achardes, participai-mo, para que também eu vá e o adore.
⁹ E, tendo eles ouvido o rei, partiram; e eis que a estrela que tinham visto no Oriente ia adiante deles, até que, chegando, se deteve sobre o lugar onde estava o menino.
¹⁰ E, vendo eles a estrela, alegraram-se muito com grande júbilo.
¹¹ E, entrando na casa, acharam o menino com Maria, sua mãe, e, prostrando-se, o adoraram; e, abrindo os seus tesouros, lhe ofertaram dádivas: ouro, incenso e mirra.
¹² E, sendo por divina revelação avisados em sonhos para que não voltassem para junto de Herodes, partiram para a sua terra por outro caminho.
 A fuga para o Egito. A matança dos inocentes
¹³ E, tendo-se eles retirado, eis que o anjo do Senhor apareceu a José em sonhos, dizendo: Levanta-te, e toma o menino e sua mãe, e foge para o Egito, e demora-te lá até que eu te diga, porque Herodes há de procurar o menino para o matar.
¹⁴ E, levantando-se ele, tomou o menino e sua mãe, de noite, e foi para o Egito.
¹⁵ E esteve lá até à morte de Herodes, para que se cumprisse o que foi dito da parte do Senhor pelo profeta, que diz: Do Egito chamei o meu Filho.
¹⁶ Então, Herodes, vendo que tinha sido iludido pelos magos, irritou-se muito e mandou matar todos os meninos que havia em Belém e em todos os seus contornos, de dois anos para baixo, segundo o tempo que diligentemente inquirira dos magos.
¹⁷ Então, se cumpriu o que foi dito pelo profeta Jeremias, que diz:
¹⁸ Em Ramá se ouviu uma voz, lamentação, choro e grande pranto; era Raquel chorando os seus filhos e não querendo ser consolada, porque já não existiam.
  A volta do Egito
¹⁹ Morto, porém, Herodes, eis que o anjo do Senhor apareceu, num sonho, a José, no Egito,
²⁰ dizendo: Levanta-te, e toma o menino e sua mãe, e vai para a terra de Israel, porque já estão mortos os que procuravam a morte do menino.
²¹ Então, ele se levantou, e tomou o menino e sua mãe, e foi para a terra de Israel.
²² E, ouvindo que Arquelau reinava na Judeia em lugar de Herodes, seu pai, receou ir para lá; mas, avisado em sonhos por divina revelação, foi para as regiões da Galileia.
²³ E chegou e habitou numa cidade chamada Nazaré, para que se cumprisse o que fora dito pelos profetas: Ele será chamado Nazareno 

`,
            pergunta: {
                texto: "Quais foram os presentes oferecidos pelos magos a Jesus?",
                opcoes: [
                    { numero: 1, texto: "Ouro, incenso e mirra", correta: true },
                    { numero: 2, texto: "Ouro, prata e pedras preciosas", correta: false },
                    { numero: 3, texto: "Trigo, vinho e azeite", correta: false },
                    { numero: 4, texto: "Roupas, sapatos e comida", correta: false }
                ],
                explicacao: "Estes presentes simbolizavam a realeza, a divindade e o sacrifício de Cristo.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 2:11"
            }
        },
        3: {
            titulo: "O Ministério de João Baptista",
            texto: `
¹ E, naqueles dias, apareceu João Batista pregando no deserto da Judeia
² e dizendo: Arrependei-vos, porque é chegado o Reino dos céus.
³ Porque este é o anunciado pelo profeta Isaías, que disse: Voz do que clama no deserto: Preparai o caminho do Senhor, endireitai as suas veredas.
⁴ E este João tinha a sua veste de pelos de camelo e um cinto de couro em torno de seus lombos e alimentava-se de gafanhotos e de mel silvestre.
⁵ Então, ia ter com ele Jerusalém, e toda a Judeia, e toda a província adjacente ao Jordão;
⁶ e eram por ele batizados no rio Jordão, confessando os seus pecados.
⁷ E, vendo ele muitos dos fariseus e dos saduceus que vinham ao seu batismo, dizia-lhes: Raça de víboras, quem vos ensinou a fugir da ira futura?
⁸ Produzi, pois, frutos dignos de arrependimento
⁹ e não presumais de vós mesmos, dizendo: Temos por pai a Abraão; porque eu vos digo que mesmo destas pedras Deus pode suscitar filhos a Abraão.
¹⁰ E também, agora, está posto o machado à raiz das árvores; toda árvore, pois, que não produz bom fruto é cortada e lançada no fogo.
¹¹ E eu, em verdade, vos batizo com água, para o arrependimento; mas aquele que vem após mim é mais poderoso do que eu; não sou digno de levar as suas sandálias; ele vos batizará com o Espírito Santo e com fogo.
¹² Em sua mão tem a pá, e limpará a sua eira, e recolherá no celeiro o seu trigo, e queimará a palha com fogo que nunca se apagará.
O batismo de Jesus
¹³ Então, veio Jesus da Galileia ter com João junto do Jordão, para ser batizado por ele.
¹⁴ Mas João opunha-se-lhe, dizendo: Eu careço de ser batizado por ti, e vens tu a mim?
¹⁵ Jesus, porém, respondendo, disse-lhe: Deixa por agora, porque assim nos convém cumprir toda a justiça. Então, ele o permitiu.
¹⁶ E, sendo Jesus batizado, saiu logo da água, e eis que se lhe abriram os céus, e viu o Espírito de Deus descendo como pomba e vindo sobre ele.
¹⁷ E eis que uma voz dos céus dizia: Este é o meu Filho amado, em quem me comprazo 

`,
            pergunta: {
                texto: "O que aconteceu imediatamente após o baptismo de Jesus?",
                opcoes: [
                    { numero: 1, texto: "O Espírito de Deus desceu como uma pomba e ouviu-se uma voz do céu", correta: true },
                    { numero: 2, texto: "Houve um grande terramoto", correta: false },
                    { numero: 3, texto: "Jesus começou a pregar no templo", correta: false },
                    { numero: 4, texto: "Os discípulos foram escolhidos", correta: false }
                ],
                explicacao: "Deus Pai afirmou: 'Este é o meu Filho amado, em quem me comprazo'.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 3:16-17"
            }
        },
        4: {
            titulo: "A Tentação de Jesus e o Início do Ministério",
            texto: `
¹ Então, foi conduzido Jesus pelo Espírito ao deserto, para ser tentado pelo diabo.
² E, tendo jejuado quarenta dias e quarenta noites, depois teve fome;
³ E, chegando-se a ele o tentador, disse: Se tu és o Filho de Deus, manda que estas pedras se tornem em pães.
⁴ Ele, porém, respondendo, disse: Está escrito:Nem só de pão viverá o homem, mas de toda a palavra que sai da boca de Deus.
⁵ Então o diabo o transportou à Cidade Santa, e colocou-o sobre o pináculo do templo,
⁶ e disse-lhe: Se tu és o Filho de Deus, lança-te daqui abaixo; porque está escrito: Aos seus anjos dará ordens a teu respeito, e tomar-te-ão nas mãos, para que nunca tropeces em alguma pedra.
⁷ Disse-lhe Jesus: Também está escrito:Não tentarás o Senhor, teu Deus.
⁸ Novamente, o transportou o diabo a um monte muito alto; e mostrou-lhe todos os reinos do mundo e a glória deles.
⁹ E disse-lhe: Tudo isto te darei se, prostrado, me adorares.
¹⁰ Então, disse-lhe Jesus: Vai-te, Satanás, porque está escrito: Ao Senhor, teu Deus, adorarás e só a ele servirás.
¹¹ Então, o diabo o deixou; e, eis que chegaram os anjos e o serviram.
  Jesus na Galileia. Os primeiros discípulos
¹² Jesus, porém, ouvindo que João estava preso, voltou para a Galileia.
¹³ E, deixando Nazaré, foi habitar em Cafarnaum, cidade marítima, nos confins de Zebulom e Naftali,
¹⁴ para que se cumprisse o que foi dito pelo profeta Isaías, que diz:
¹⁵ A terra de Zebulom e a terra de Naftali, junto ao caminho do mar, além do Jordão, a Galileia das nações,
¹⁶ o povo que estava assentado em trevas viu uma grande luz; e aos que estavam assentados na região e sombra da morte a luz raiou.
¹⁷ Desde então, começou Jesus a pregar e a dizer: Arrependei-vos, porque é chegado o Reino dos céus.
¹⁸ E Jesus, andando junto ao mar da Galileia, viu dois irmãos, Simão, chamado Pedro, e André, os quais lançavam as redes ao mar, porque eram pescadores.
¹⁹ E disse-lhes: Vinde após mim, e eu vos farei pescadores de homens.
²⁰ Então, eles, deixando logo as redes, seguiram-no.
²¹ E, adiantando-se dali, viu outros dois irmãos: Tiago, filho de Zebedeu, e João, seu irmão, num barco com Zebedeu, seu pai, consertando as redes; e chamou-os.
²² Eles, deixando imediatamente o barco e seu pai, seguiram-no.
²³ E percorria Jesus toda a Galileia, ensinando nas suas sinagogas, e pregando o evangelho do Reino, e curando todas as enfermidades e moléstias entre o povo.
²⁴ E a sua fama correu por toda a Síria; e traziam-lhe todos os que padeciam acometidos de várias enfermidades e tormentos, os endemoninhados, os lunáticos e os paralíticos, e ele os curava.
²⁵ E seguia-o uma grande multidão da Galileia, de Decápolis, de Jerusalém, da Judeia e dalém do Jordão 

`,
            pergunta: {
                texto: "Quantos dias Jesus jejuou no deserto antes de ser tentado?",
                opcoes: [
                    { numero: 1, texto: "40 dias e 40 noites", correta: true },
                    { numero: 2, texto: "7 dias", correta: false },
                    { numero: 3, texto: "12 dias", correta: false },
                    { numero: 4, texto: "40 dias, mas comeu à noite", correta: false }
                ],
                explicacao: "Após este longo jejum, Jesus venceu o Diabo usando a Palavra de Escritura.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 4:2"
            }
        },
        5: {
            titulo: "O Sermão do Monte: As Bem-aventuranças",
            texto: `
¹ Jesus, vendo a multidão, subiu a um monte, e, assentando-se, aproximaram-se dele os seus discípulos;
² e, abrindo a boca, os ensinava, dizendo:
³ Bem-aventurados os pobres de espírito,porque deles é o Reino dos céus;
⁴ bem-aventurados os que choram,porque eles serão consolados;
⁵ bem-aventurados os mansos,porque eles herdarão a terra;
⁶ bem-aventurados os que têm fome e sede de justiça,porque eles serão fartos;
⁷ bem-aventurados os misericordiosos,porque eles alcançarão misericórdia;
⁸ bem-aventurados os limpos de coração,porque eles verão a Deus;
⁹ bem-aventurados os pacificadores, porque eles serão chamados filhos de Deus;
¹⁰ bem-aventurados os que sofrem perseguição por causa da justiça,porque deles é o Reino dos céus;
¹¹ bem-aventurados sois vósquando vos injuriarem, e perseguirem, e, mentindo, disserem todo o mal contra vós, por minha causa.
¹² Exultai e alegrai-vos,porque é grande o vosso galardão nos céus; porque assim perseguiram os profetas que foram antes de vós.
  Os discípulos são o sal da terra e a luz do mundo
¹³ Vós sois o sal da terra;e, se o sal for insípido, com que se há de salgar? Para nada mais presta, senão para se lançar fora e ser pisado pelos homens.
¹⁴ Vós sois a luz do mundo; nãose pode esconder uma cidade edificada sobre um monte;
¹⁵ nem se acende a candeiae se coloca debaixo do alqueire, mas, no velador, e dá luz a todos que estão na casa.
¹⁶ Assim resplandeça a vossa luz diante dos homens,para que vejam as vossas boas obras e glorifiquem o vosso Pai, que está nos céus.
  O cumprimento da lei e dos profetas
¹⁷ Não cuideisque vim destruir a lei ou os profetas; não vim ab-rogar, mas cumprir.
¹⁸ Porque em verdade vos digo que,até que o céu e a terra passem, nem um jota ou um til se omitirá da lei sem que tudo seja cumprido.
¹⁹ Qualquer,pois, que violar um destes menores mandamentos e assim ensinar aos homens será chamado o menor no Reino dos céus; aquele, porém, que os cumprir e ensinar será chamado grande no Reino dos céus.
²⁰ Porque vos digo que, se a vossa justiça não exceder a dos escribas e fariseus,de modo nenhum entrareis no Reino dos céus.
²¹ Ouvistes que foi dito aos antigos:Não matarás; mas qualquer que matar seráréu de juízo.
²² Eu, porém, vos digo quequalquer que, sem motivo, se encolerizar contra seu irmão será réu de juízo, e qualquer que chamar a seu irmão de racaserá réu do Sinédrio; e qualquer que lhe chamar de louco seráréu do fogo do inferno.
²³ Portanto,se trouxeres a tua oferta ao altar e aí te lembrares de que teu irmão tem alguma coisa contra ti,
²⁴ deixa ali diante do altar a tua oferta,e vai reconciliar-te primeiro com teu irmão, e depois vem, e apresenta a tua oferta.
²⁵ Concilia-te depressa com o teu adversário,enquanto estás no caminho com ele, para que não aconteça que o adversário te entregue ao juiz, e o juiz te entregue aooficial, e te encerrem na prisão.
²⁶ Em verdade te digo que, de maneira nenhuma, sairás dali, enquanto não pagares o último ceitil.
²⁷ Ouvistes que foi dito aos antigos:Não cometerás adultério.
²⁸ Eu porém, vos digo quequalquer que atentar numa mulher para a cobiçar já em seu coração cometeu adultério com ela.
²⁹ Portanto, se o teu olho direito te escandalizar,arranca-o e atira-o para longe de ti, pois te é melhor que se perca um dos teus membros do que todo o teu corpo seja lançado no inferno.
³⁰ E, se a tua mão direita te escandalizar, corta-a e atira-a para longe de ti, porque te é melhor que um dos teus membros se perca do que todo o teu corpo seja lançado no inferno.
³¹ Também foi dito:Qualquer que deixar sua mulher, que lhe dê carta de desquite.
³² Eu,porém, vos digo que qualquer que repudiar sua mulher, a não ser por causa de prostituição, faz que ela cometa adultério; e qualquer que casar com a repudiada comete adultério.
³³ Outrossim, ouvistes que foi dito aos antigos:Não perjurarás, mas cumprirás teus juramentos ao Senhor.
³⁴ Eu, porém, vos digoque, de maneira nenhuma, jureis nem pelo céu, porque é o trono de Deus,
³⁵ nem pela terra, porque é o escabelo de seus pés, nem por Jerusalém,porque é a cidade do grande Rei,
³⁶ nem jurarás pela tua cabeça, porque não podes tornar um cabelo branco ou preto.
³⁷ Seja, porém, o vosso falar:Sim, sim; não, não, porque o que passa disso é de procedência maligna.
³⁸ Ouvistes que foi dito:Olho por olho e dente por dente.
³⁹ Eu, porém, vos digoque não resistais ao mal; mas, se qualquer te bater na face direita, oferece-lhe também a outra;
⁴⁰ e ao que quiser pleitear contigo e tirar-te a vestimenta, larga-lhe também a capa;
⁴¹ e, se qualquer te obrigar a caminhar uma milha,vai com ele duas.
⁴² Dá a quem te pedire não te desvies daquele que quiser que lhe emprestes.
⁴³ Ouvistes que foi dito:Amarás o teu próximo e aborrecerás o teu inimigo.
⁴⁴ Eu, porém, vos digo:Amai a vossos inimigos, bendizei os que vos maldizem, fazei bem aos que vos odeiam e orai pelos que vos maltratam e vos perseguem,
⁴⁵ para que sejais filhos do Pai que está nos céus;porque faz que o seu sol se levante sobre maus e bons e a chuva desça sobre justos e injustos.
⁴⁶ Pois, se amardes os que vos amam,que galardão tereis? Não fazem os publicanos também o mesmo?
⁴⁷ E, se saudardes unicamente os vossos irmãos, que fazeis de mais? Não fazem os publicanos também assim?
⁴⁸ Sede vós, pois, perfeitos,como é perfeito o vosso Pai, que está nos  

`,
            pergunta: {
                texto: "Como Jesus chamou os Seus seguidores neste sermão?",
                opcoes: [
                    { numero: 1, texto: "Sal da terra e luz do mundo", correta: true },
                    { numero: 2, texto: "Pastores de ovelhas", correta: false },
                    { numero: 3, texto: "Guerreiros da fé", correta: false },
                    { numero: 4, texto: "Príncipes de Israel", correta: false }
                ],
                explicacao: "Jesus ensinou sobre a influência e o testemunho dos cristãos na sociedade.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 5:13-14"
            }
        },
        6: {
            titulo: "A Oração do Pai Nosso",
            texto: `
¹ Guardai-vos de fazer a vossa esmola diante dos homens, para serdes vistos por eles; aliás, não tereis galardão junto de vosso Pai, que está nos céus.
² Quando, pois, deres esmola, nãofaças tocar trombeta diante de ti, como fazem os hipócritas nas sinagogas e nas ruas, para serem glorificados pelos homens. Em verdade vos digo que já receberam o seu galardão.
³ Mas, quando tu deres esmola, não saiba a tua mão esquerda o que faz a tua direita,
⁴ para que a tua esmola seja dada ocultamente, e teu Pai, que vê em secreto,te recompensará publicamente.
⁵ E, quando orares, não sejas como os hipócritas, pois se comprazem em orar em pé nas sinagogas e às esquinas das ruas, para serem vistos pelos homens. Em verdade vos digo que já receberam o seu galardão.
⁶ Mas tu, quando orares,entra no teu aposento e, fechando a tua porta, ora a teu Pai, que vê o que está oculto; e teu Pai, que vê o que está oculto, te recompensará.
⁷ E, orando,não useis de vãs repetições, como os gentios, que pensam que, por muitofalarem, serão ouvidos.
⁸ Não vos assemelheis, pois, a eles, porque vosso Pai sabe o que vos é necessário antes de vós lho pedirdes.
⁹ Portanto, vós orareis assim:Pai nosso, que estás nos céus, santificado seja o teu nome.
¹⁰ Venha o teu Reino.Seja feita a tua vontade, tanto na terracomo no céu.
¹¹ O pão nosso de cadadia dá-nos hoje.
¹² Perdoa-nos as nossas dívidas,assim como nós perdoamos aos nossos devedores.
¹³ E não nos induzasà tentação, mas livra-nos do mal; porque teu é o Reino, e o poder, e a glória, para sempre. Amém!
¹⁴ Porque, se perdoardes aos homens as suas ofensas,também vosso Pai celestial vos perdoará a vós.
¹⁵ Se, porém,não perdoardes aos homens as suas ofensas, também vosso Pai vos não perdoará as vossas ofensas.
¹⁶ E,quando jejuardes, não vos mostreis contristados como os hipócritas, porque desfiguram o rosto, para que aos homens pareça que jejuam. Em verdade vos digo que já receberam o seu galardão.
¹⁷ Porém tu, quando jejuares, ungea cabeça e lava o rosto,
¹⁸ para não pareceres aos homens que jejuas, mas sim a teu Pai, que está oculto; e teu Pai, que vê o que está oculto, te recompensará.
  O tesouro no céu. O olho puro. Os dois senhores. A ansiosa solicitude pela nossa vida
¹⁹ Não ajunteis tesouros na terra,onde a traça e a ferrugem tudo consomem, e onde os ladrões minam e roubam.
²⁰ Mas ajuntai tesouros no céu,onde nem a traça nem a ferrugem consomem, e onde os ladrões não minam, nem roubam.
²¹ Porque onde estiver o vosso tesouro, aí estará também o vosso coração.
²² A candeia do corpo são osolhos; de sorte que, se os teus olhos forem bons, todo o teu corpo terá luz.
²³ Se, porém, os teus olhos forem maus, o teu corpo será tenebroso. Se, portanto, a luz que em ti há são trevas, quão grandes serão tais trevas!
²⁴ Ninguém pode servir adois senhores, porque ou há de odiar um e amar o outro ou se dedicará a um e desprezará o outro.Não podeis servir a Deus e aMamom.
²⁵ Por isso, vos digo:não andeis cuidadosos quanto à vossa vida, pelo que haveis de comer ou pelo que haveis de beber; nem quanto ao vosso corpo, pelo que haveis de vestir. Não é a vida mais do que o mantimento, e o corpo, mais do que a vestimenta?
²⁶ Olhai para as aves do céu,que não semeiam, nem segam, nem ajuntam em celeiros; e vosso Pai celestial as alimenta. Não tendes vós muito mais valor do que elas?
²⁷ E qual de vós poderá, com todos os seus cuidados, acrescentar um côvado à sua estatura?
²⁸ E, quanto ao vestuário, porque andais solícitos? Olhai para os lírios do campo, como eles crescem; não trabalham, nem fiam.
²⁹ E eu vos digo que nem mesmo Salomão, em toda a sua glória, se vestiu como qualquer deles.
³⁰ Pois, se Deus assim veste a erva do campo, que hoje existe e amanhã é lançada no forno, não vos vestirá muito mais a vós, homens de pequena fé?
³¹ Não andeis, pois, inquietos, dizendo: Que comeremos ou que beberemos ou com que nos vestiremos?
³² (Porque todas essas coisas os gentios procuram.) Decerto, vosso Pai celestial bem sabe que necessitais de todas essas coisas;
³³ Mas buscai primeiro o Reino de Deus,e a sua justiça, e todas essas coisas vos serão acrescentadas.
³⁴ Não vos inquieteis, pois, pelo dia de amanhã, porque o dia de amanhã cuidará de si mesmo. Basta a cada dia o seu mal 
`,
            pergunta: {
                texto: "Sobre o que Jesus nos ensinou a não andar ansiosos?",
                opcoes: [
                    { numero: 1, texto: "Sobre o que comer, beber ou vestir", correta: true },
                    { numero: 2, texto: "Sobre o trabalho", correta: false },
                    { numero: 3, texto: "Sobre o governo", correta: false },
                    { numero: 4, texto: "Sobre o passado", correta: false }
                ],
                explicacao: "Jesus ensina a confiar na provisão diária do Pai Celestial.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 6:31-33"
            }
        },
        7: {
            titulo: "O Julgamento e a Regra de Ouro",
            texto: `
¹ Não julgueis,para que não sejais julgados,
² porque com o juízo com que julgardes sereis julgados,e com a medida com que tiverdes medido vos hão de medir a vós.
³ E por que reparas tu no argueiro queestá no olho do teu irmão e não vês a trave que está no teu olho?
⁴ Ou como dirás a teu irmão: Deixa-me tirar o argueiro do teu olho, estando uma trave no teu?
⁵ Hipócrita, tira primeiro a trave do teu olho e, então, cuidarás em tirar o argueiro do olho do teu irmão.
⁶ Não deis aos cães as coisas santas,nem deiteis aos porcos as vossas pérolas; para que não as pisem e, voltando-se, vos despedacem.
  A bondade de Deus
⁷ Pedi,e dar-se-vos-á; buscai e encontrareis; batei, e abrir-se-vos-á.
⁸ Porqueaquele que pede recebe; e o que busca encontra; e, ao que bate, se abre.
⁹ E qual dentre vós é o homem que,pedindo-lhe pão o seu filho, lhe dará uma pedra?
¹⁰ E, pedindo-lhe peixe, lhe dará uma serpente?
¹¹ Se, vós, pois, sendo maus,sabeis darboas coisas aos vossos filhos, quanto mais vosso Pai, que está nos céus, dará bens aos que lhe pedirem?
¹² Portanto,tudo o que vós quereis que os homens vos façam, fazei-lho também vós, porque esta é a lei e os profetas.
  Os dois caminhos
¹³ Entrai pela portaestreita, porque larga é a porta, e espaçoso, o caminho que conduz à perdição, e muitos são os que entram por ela;
¹⁴ E porque estreita é a porta, e apertado, o caminho que leva à vida, e poucos há que a encontrem.
 Os falsos profetas
¹⁵ Acautelai-vos, porém, dos falsos profetas,que vêm até vós vestidos como ovelhas, mas interiormente são lobos devoradores.
¹⁶ Por seus frutosos conhecereis. Porventura, colhem-se uvas dos espinheiros ou figos dos abrolhos?
¹⁷ Assim,toda árvore boa produz bons frutos, e toda árvore má produz frutos maus.
¹⁸ Não pode a árvore boa dar maus frutos, nem a árvore má dar frutos bons.
¹⁹ Toda árvoreque não dá bom fruto corta-se e lança-se no fogo.
²⁰ Portanto, pelos seus frutos os conhecereis.
 Quem entra no Reino dos céus
²¹ Nem todo o que me diz:Senhor, Senhor! entrará no Reino dos céus, mas aquele que faz a vontade de meu Pai, que está nos céus.
²² Muitos me dirão naquele Dia: Senhor, Senhor, nãoprofetizamos nós em teu nome? E, em teu nome, não expulsamos demônios? E, em teu nome, não fizemos muitas maravilhas?
²³ E, então, lhes direi abertamente:Nunca vos conheci; apartai-vos de mim, vós que praticais a iniquidade.
 Os dois alicerces
²⁴ Todo aquele,pois, que escuta estas minhas palavras e as pratica, assemelhá-lo-ei ao homem prudente, que edificou a sua casa sobre a rocha.
²⁵ E desceu a chuva, e correram rios, e assopraram ventos, e combateram aquela casa, e não caiu, porque estava edificada sobre a rocha.
²⁶ E aquele que ouve estas minhas palavras e as não cumpre, compará-lo-ei ao homem insensato, que edificou a sua casa sobre a areia.
²⁷ E desceu a chuva, e correram rios, e assopraram ventos, e combateram aquela casa, e caiu, e foi grande a sua queda.
  A autoridade de Jesus
²⁸ E aconteceu que, concluindo Jesus este discurso, a multidão se admirou da sua doutrina,
²⁹ porquanto os ensinava com autoridade e não como os escribas. 

`,
            pergunta: {
                texto: "Sobre o que Jesus comparou o homem que ouve as Suas palavras e as pratica?",
                opcoes: [
                    { numero: 1, texto: "Um homem prudente que edificou a sua casa sobre a rocha", correta: true },
                    { numero: 2, texto: "Um pescador de homens", correta: false },
                    { numero: 3, texto: "Um semeador", correta: false },
                    { numero: 4, texto: "Uma árvore sem frutos", correta: false }
                ],
                explicacao: "A casa sobre a rocha permanece firme contra as tempestades da vida.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 7:24"
            }
        },
        8: {
            titulo: "Milagres de Cura e a Tempestade",
            texto: `  purificado
¹ E, descendo ele do monte, seguiu-o uma grande multidão.
² E eis que veio um leproso e o adorou, dizendo: Senhor, se quiseres, podes tornar-me limpo.
³ E Jesus, estendendo a mão, tocou-o, dizendo: Quero; sê limpo. E logo ficou purificado da lepra.
⁴ Disse-lhe, então, Jesus: Olha, não o digas a alguém, mas vai, mostra-te ao sacerdote e apresenta a oferta que Moisés determinou,para lhes servir de testemunho.
  O centurião de Cafarnaum
⁵ E, entrando Jesus em Cafarnaum, chegou junto dele um centurião, rogando-lhe
⁶ e dizendo: Senhor, o meu criado jaz em casa paralítico e violentamente atormentado.
⁷ E Jesus lhe disse: Eu irei e lhe darei saúde.
⁸ E o centurião, respondendo, disse: Senhor, não sou digno de que entres debaixo do meu telhado, mas dize somente uma palavra, e o meu criado sarará,
⁹ pois também eu sou homem sob autoridade e tenho soldados às minhas ordens; e digo a este: vai, e ele vai; e a outro: vem, e ele vem; e ao meu criado: faze isto, e ele o faz.
¹⁰ E maravilhou-se Jesus, ouvindo isso, e disse aos que o seguiam: Em verdade vos digo que nem mesmo em Israel encontrei tanta fé.
¹¹ Mas eu vos digo que muitos virão do Orientee do Ocidente e assentar-se-ão à mesa com Abraão, e Isaque, e Jacó, no Reino dos céus;
¹² E os filhos do Reinoserão lançados nas trevas exteriores; ali, haverá pranto e ranger de dentes.
¹³ Então, disse Jesus ao centurião: Vai, e como creste te seja feito. E, naquela mesma hora, o seu criado sarou.
A sogra de Pedro
¹⁴ E Jesus, entrando na casa de Pedro, viu a sogra deste jazendo com febre.
¹⁵ E tocou-lhe na mão, e a febre a deixou; e levantou-se e serviu-os.
¹⁶ E, chegada a tarde, trouxeram-lhe muitos endemoninhados, e ele, com a sua palavra, expulsou deles os espíritos e curou todos os que estavam enfermos,
¹⁷ para que se cumprisse o que fora dito pelo profeta Isaías, que diz: Ele tomou sobre si as nossas enfermidades e levou as nossas doenças.
  Como devemos seguir a Jesus
¹⁸ E Jesus, vendo em torno de si uma grande multidão, ordenou que passassem para a outra margem.
¹⁹ E, aproximando-se dele um escriba, disse: Mestre, aonde quer que fores, eu te seguirei.
²⁰ E disse Jesus: As raposas têm covis, e as aves do céu têm ninhos, mas o Filho do Homem não tem onde reclinar a cabeça.
²¹ E outro de seus discípulos lhe disse: Senhor, permite-me que, primeiramente, vá sepultar meu pai.
²² Jesus, porém, disse-lhe: Segue-me e deixa aos mortos sepultar os seus mortos.
 Jesus apazigua a tempestade
²³ E, entrando ele no barco, seus discípulos o seguiram.
²⁴ E eis que, no mar, se levantou uma tempestade tão grande, que o barco era coberto pelas ondas; ele, porém, estava dormindo.
²⁵ E os seus discípulos, aproximando-se, o despertaram, dizendo: Senhor, salva-nos, que perecemos.
²⁶ E ele disse-lhes: Por que temeis, homens de pequena fé? Então, levantando-se, repreendeu os ventos e o mar, e seguiu-se uma grande bonança.
²⁷ E aqueles homens se maravilharam, dizendo: Que homem é este, que até os ventos e o mar lhe obedecem?
  Os endemoninhados gadarenos
²⁸ E, tendo chegado à outra margem, à província dos gadarenos, saíram-lhe ao encontro dois endemoninhados, vindos dos sepulcros; tão ferozes eram, que ninguém podia passar por aquele caminho.
²⁹ E eis que clamaram, dizendo: Que temos nós contigo, Jesus, Filho de Deus? Vieste aqui atormentar-nos antes do tempo?
³⁰ E andava pastando distante deles uma manada de muitos porcos.
³¹ E os demônios rogaram-lhe, dizendo: Se nos expulsas, permite-nos que entremos naquela manada de porcos 

`,
            pergunta: {
                texto: "O que Jesus disse aos ventos e ao mar para que se fizesse bonança?",
                opcoes: [
                    { numero: 1, texto: "Repreendeu os ventos e o mar", correta: true },
                    { numero: 2, texto: "Pediu ajuda aos discípulos", correta: false },
                    { numero: 3, texto: "Atirou um cajado à água", correta: false },
                    { numero: 4, texto: "Começou a nadar", correta: false }
                ],
                explicacao: "Os discípulos maravilharam-se que até os ventos e o mar Lhe obedeciam.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 8:26-27"
            }
        },
        9: {
            titulo: "O Chamado de Mateus",
            texto: `
1 E, entrando no barco, passou para a outra margem, e chegou à sua cidade. E eis que lhe trouxeram um paralítico deitado numa cama.
2 E Jesus, vendo a fé deles, disse ao paralítico: Filho, tem bom ânimo; perdoados te são os teus pecados.
3 E eis que alguns dos escribas diziam entre si: Ele blasfema.
4 Mas Jesus, conhecendo os seus pensamentos, disse: Por que pensais mal em vosso coração?
5 Pois o que é mais fácil? Dizer ao paralítico: Perdoados te são os teus pecados, ou: Levanta-te e anda?
6 Ora, para que saibais que o Filho do Homem tem na terra autoridade para perdoar pecados — disse então ao paralítico: Levanta-te, toma a tua cama e vai para tua casa.
7 E, levantando-se, foi para sua casa.
8 E a multidão, vendo isso, maravilhou-se e glorificou a Deus, que dera tal poder aos homens.

A vocação de Mateus
9 E Jesus, passando adiante dali, viu assentado na alfândega um homem chamado Mateus e disse-lhe: Segue-me. E ele, levantando-se, o seguiu.

10 E aconteceu que, estando ele em casa sentado à mesa, chegaram muitos publicanos e pecadores e sentaram-se juntamente com Jesus e seus discípulos.
11 E os fariseus, vendo isso, disseram aos seus discípulos: Por que come o vosso Mestre com os publicanos e pecadores?
12 Jesus, porém, ouvindo, disse-lhes: Não necessitam de médico os sãos, mas sim, os doentes.
13 Ide, porém, e aprendei o que significa: Misericórdia quero e não sacrifício. Porque eu não vim para chamar os justos, mas os pecadores, ao arrependimento.

O jejum
14 Então, chegaram ao pé dele os discípulos de João, dizendo: Por que jejuamos nós, e os fariseus, muitas vezes, e os teus discípulos não jejuam?
15 E disse-lhes Jesus: Podem, porventura, andar tristes os filhos das bodas, enquanto o esposo está com eles? Dias, porém, virão em que lhes será tirado o esposo, e então jejuarão.
16 Ninguém deita remendo de pano novo em veste velha, porque semelhante remendo rompe a veste, e faz-se maior a rotura.
17 Nem se deita vinho novo em odres velhos; aliás, rompem-se os odres, e entorna-se o vinho, e os odres estragam-se; mas deita-se vinho novo em odres novos, e assim ambos se conservam.

A cura da mulher que tinha um fluxo de sangue
18 Dizendo-lhes ele essas coisas, eis que chegou um chefe e o adorou, dizendo: Minha filha faleceu agora mesmo; mas vem, impõe-lhe a tua mão, e ela viverá.

19 E Jesus, levantando-se, seguiu-o, e os seus discípulos também.
20 E eis que uma mulher que havia já doze anos padecia de um fluxo de sangue, chegando por detrás dele, tocou a orla da sua veste,
21 porque dizia consigo: Se eu tão somente tocar a sua veste, ficarei sã.
22 E Jesus, voltando-se e vendo-a, disse: Tem ânimo, filha, a tua fé te salvou. E imediatamente a mulher ficou sã.

23 E Jesus, chegando à casa daquele chefe, e vendo os instrumentistas e o povo em alvoroço,
24 disse-lhes: Retirai-vos, que a menina não está morta, mas dorme. E riram-se dele.
25 E, logo que o povo foi posto fora, entrou Jesus e pegou-lhe na mão, e a menina levantou-se.
26 E espalhou-se aquela notícia por todo aquele país.

A cura de dois cegos e um mudo
27 E, partindo Jesus dali, seguiram-no dois cegos, clamando e dizendo: Tem compaixão de nós, Filho de Davi.
28 E, quando chegou à casa, os cegos se aproximaram dele; e Jesus disse-lhes: Credes vós que eu possa fazer isto? Disseram-lhe eles: Sim, Senhor.
29 Tocou, então, os olhos deles, dizendo: Seja-vos feito segundo a vossa fé.
30 E os olhos se lhes abriram. E Jesus ameaçou-os, dizendo: Olhai que ninguém o saiba.
31 Mas, tendo ele saído, divulgaram a sua fama por toda aquela terra.

32 E, havendo-se eles retirado, trouxeram-lhe um homem mudo e endemoninhado.
33 E, expulso o demônio, falou o mudo; e a multidão se maravilhou, dizendo: Nunca tal se viu em Israel.
34 Mas os fariseus diziam: Ele expulsa os demônios pelo príncipe dos demônios.

A seara e os ceifeiros
35 E percorria Jesus todas as cidades e aldeias, ensinando nas sinagogas deles, e pregando o evangelho do Reino, e curando todas as enfermidades e moléstias entre o povo.
36 E, vendo a multidão, teve grande compaixão deles, porque andavam desgarrados e errantes como ovelhas que não têm pastor.
37 Então, disse aos seus discípulos: A seara é realmente grande, mas poucos são os ceifeiros.
38 Rogai, pois, ao Senhor da seara que mande ceifeiros para a sua seara.`,
            pergunta: {
                texto: "Qual era a profissão de Mateus (Levi) antes de seguir Jesus?",
                opcoes: [
                    { numero: 1, texto: "Publicano (Cobrador de impostos)", correta: true },
                    { numero: 2, texto: "Pescador", correta: false },
                    { numero: 3, texto: "Carpinteiro", correta: false },
                    { numero: 4, texto: "Fariseu", correta: false }
                ],
                explicacao: "Jesus chamou Mateus enquanto ele estava sentado na recebedoria.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 9:9"
            }
        },
        10: {
            titulo: "A Missão dos Doze Apóstolos",
            texto: `
1 E, chamando os seus doze discípulos, deu-lhes poder sobre os espíritos imundos, para os expulsarem e para curarem toda enfermidade e todo mal.
2 Ora, os nomes dos doze apóstolos são estes: O primeiro, Simão, chamado Pedro, e André, seu irmão; Tiago, filho de Zebedeu, e João, seu irmão;
3 Filipe e Bartolomeu; Tomé e Mateus, o publicano; Tiago, filho de Alfeu, e Lebeu, apelidado Tadeu;
4 Simão, o Zelote, e Judas Iscariotes, aquele que o traiu.

5 Jesus enviou estes doze e lhes ordenou, dizendo: Não ireis pelo caminho das gentes, nem entrareis em cidade de samaritanos;
6 mas ide, antes, às ovelhas perdidas da casa de Israel;
7 e, indo, pregai, dizendo: É chegado o Reino dos céus.
8 Curai os enfermos, limpai os leprosos, ressuscitai os mortos, expulsai os demônios; de graça recebestes, de graça dai.
9 Não possuais ouro, nem prata, nem cobre, em vossos cintos;
10 nem alforjes para o caminho, nem duas túnicas, nem sandálias, nem bordão, porque digno é o operário do seu alimento.
11 E, em qualquer cidade ou aldeia em que entrardes, procurai saber quem nela seja digno e hospedai-vos aí até que vos retireis.
12 E, quando entrardes nalguma casa, saudai-a;
13 e, se a casa for digna, desça sobre ela a vossa paz; mas, se não for digna, torne para vós a vossa paz.
14 E, se ninguém vos receber, nem escutar as vossas palavras, saindo daquela casa ou cidade, sacudi o pó dos vossos pés.
15 Em verdade vos digo que, no Dia do Juízo, haverá menos rigor para o país de Sodoma e Gomorra do que para aquela cidade.

16 Eis que vos envio como ovelhas ao meio de lobos; portanto, sede prudentes como as serpentes e símplices como as pombas.
17 Acautelai-vos, porém, dos homens, porque eles vos entregarão aos sinédrios e vos açoitarão nas suas sinagogas;
18 e sereis até conduzidos à presença dos governadores e dos reis, por causa de mim, para lhes servir de testemunho, a eles e aos gentios.
19 Mas, quando vos entregarem, não vos dê cuidado como ou o que haveis de falar, porque, naquela mesma hora, vos será ministrado o que haveis de dizer.
20 Porque não sois vós quem falará, mas o Espírito de vosso Pai é que fala em vós.
21 E o irmão entregará à morte o irmão, e o pai, o filho; e os filhos se levantarão contra os pais e os matarão.
22 E odiados de todos sereis por causa do meu nome; mas aquele que perseverar até ao fim será salvo.
23 Quando, pois, vos perseguirem nesta cidade, fugi para outra; porque em verdade vos digo que não acabareis de percorrer as cidades de Israel sem que venha o Filho do Homem.

24 Não é o discípulo mais do que o mestre, nem é o servo mais do que o seu senhor.
25 Basta ao discípulo ser como seu mestre, e ao servo ser como seu senhor. Se chamaram Belzebu ao pai de família, quanto mais aos seus domésticos?
26 Portanto, não os temais, porque nada há encoberto que não haja de revelar-se, nem oculto que não haja de saber-se.
27 O que vos digo em trevas, dizei-o em luz; e o que escutais ao ouvido, pregai-o sobre os telhados.
28 E não temais os que matam o corpo e não podem matar a alma; temei, antes, aquele que pode fazer perecer no inferno a alma e o corpo.
29 Não se vendem dois passarinhos por um ceitil? E nenhum deles cairá em terra sem a vontade de vosso Pai.
30 E até mesmo os cabelos da vossa cabeça estão todos contados.
31 Não temais, pois; mais valeis vós do que muitos passarinhos.
32 Portanto, qualquer que me confessar diante dos homens, eu o confessarei diante de meu Pai, que está nos céus.
33 Mas qualquer que me negar diante dos homens, eu o negarei também diante de meu Pai, que está nos céus.

34 Não cuideis que vim trazer a paz à terra; não vim trazer paz, mas espada;
35 porque eu vim pôr em dissensão o homem contra seu pai, e a filha contra sua mãe, e a nora contra sua sogra.
36 E, assim, os inimigos do homem serão os seus familiares.
37 Quem ama o pai ou a mãe mais do que a mim não é digno de mim; e quem ama o filho ou a filha mais do que a mim não é digno de mim.
38 E quem não toma a sua cruz e não segue após mim não é digno de mim.
39 Quem achar a sua vida perdê-la-á; e quem perder a sua vida por amor de mim achá-la-á.

40 Quem vos recebe a mim me recebe; e quem me recebe a mim, recebe aquele que me enviou.
41 Quem recebe um profeta na qualidade de profeta receberá galardão de profeta; e quem recebe um justo na qualidade de justo, receberá galardão de justo.
42 E qualquer que tiver dado só que seja um copo de água fria a um destes pequenos, em nome de discípulo, em verdade vos digo que de modo algum perderá o seu galardão.`,
            pergunta: {
                texto: "O que Jesus disse para não temerem?",
                opcoes: [
                    { numero: 1, texto: "Os que matam o corpo, mas não podem matar a alma", correta: true },
                    { numero: 2, texto: "A fome", correta: false },
                    { numero: 3, texto: "Os animais selvagens", correta: false },
                    { numero: 4, texto: "O mar", correta: false }
                ],
                explicacao: "Jesus encorajou os discípulos perante a perseguição vindoura.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 10:28"
            }
        },
        11: {
            titulo: "O Testemunho sobre João Baptista",
            texto: `1 E aconteceu que, acabando Jesus de dar instruções aos seus doze discípulos, partiu dali a ensinar e a pregar nas cidades deles.

2 E João, ouvindo no cárcere falar das obras de Cristo, enviou dois dos seus discípulos

3 a dizer-lhe: És tu aquele que havia de vir ou esperamos outro?

4 E Jesus, respondendo, disse-lhes: Ide e contai a João as coisas que ouvis e vedes:

5 Os cegos veem, e os coxos andam; os leprosos são limpos, e os surdos ouvem; os mortos são ressuscitados, e aos pobres é anunciado o evangelho.

6 E bem-aventurado é aquele que se não escandalizar em mim.

7 E, partindo eles, começou Jesus a dizer à multidão, a respeito de João: Que fostes ver no deserto? Uma cana agitada pelo vento?

8 Mas que fostes ver? Um homem trajado de vestes delicadas? Eis que os que trajam roupas delicadas estão nas casas dos reis.

9 Mas que fostes ver? Um profeta? Sim, vos digo eu, e muito mais do que profeta;

10 porque este é de quem está escrito: Eis que diante da tua face envio o meu anjo, que preparará diante de ti o teu caminho.

11 Em verdade vos digo que, entre os que de mulher têm nascido, não apareceu alguém maior do que João Batista; mas aquele que é o menor no Reino dos céus é maior do que ele.

12 E, desde os dias de João Batista até agora, se faz violência ao Reino dos céus, e pela força se apoderam dele.

13 Porque todos os profetas e a lei profetizaram até João.

14 E, se quereis dar crédito, é este o Elias que havia de vir.

15 Quem tem ouvidos para ouvir, ouça.

16 Mas a quem assemelharei esta geração? É semelhante aos meninos que se assentam nas praças, e clamam aos seus companheiros,

17 e dizem: Tocamos-vos flauta, e não dançastes; cantamos-vos lamentações, e não chorastes.

18 Porquanto veio João, não comendo nem bebendo, e dizem: Tem demônio.

19 Veio o Filho do Homem, comendo e bebendo, e dizem: Eis aqui um homem comilão e beberrão, amigo de publicanos e pecadores. Mas a sabedoria é justificada por seus filhos.

20 Então, começou ele a lançar em rosto às cidades onde se operara a maior parte dos seus prodígios o não se haverem arrependido, dizendo:

21 Ai de ti, Corazim! Ai de ti, Betsaida! Porque, se em Tiro e em Sidom se fizessem os prodígios que em vós se fizeram, há muito que se teriam arrependido com pano de saco e cinza.

22 Por isso, eu vos digo que haverá menos rigor para Tiro e Sidom, no Dia do Juízo, do que para vós.

23 E tu, Cafarnaum, que te ergues até ao céu, serás abatida até ao inferno; porque, se na cidade de Sodoma se tivessem feito os prodígios que em ti se operaram, teria ela permanecido até hoje.

24 Eu vos digo, porém, que haverá menos rigor para a terra de Sodoma, no Dia do Juízo, do que para ti.

25 Naquele tempo, respondendo Jesus, disse: Graças te dou, ó Pai, Senhor do céu e da terra, que ocultaste estas coisas aos sábios e entendidos e as revelaste aos pequeninos.

26 Sim, ó Pai, porque assim aprouve aos teus olhos.

27 Todas as coisas me foram entregues por meu Pai; e ninguém conhece o Filho, senão o Pai; e ninguém conhece o Pai, senão o Filho e aquele a quem o Filho o quiser revelar.

28 Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.

29 Tomai sobre vós o meu jugo, e aprendei de mim, que sou manso e humilde de coração, e encontrareis descanso para a vossa alma.

30 Porque o meu jugo é suave, e o meu fardo é leve.`,
            pergunta: {
                texto: "A quem Jesus convida dizendo: 'Vinde a mim todos os que estais cansados e oprimidos'?",
                opcoes: [
                    { numero: 1, texto: "A todos os que sofrem", correta: true },
                    { numero: 2, texto: "Apenas aos ricos", correta: false },
                    { numero: 3, texto: "Aos fariseus", correta: false },
                    { numero: 4, texto: "Aos anjos", correta: false }
                ],
                explicacao: "Jesus promete alívio e descanso para a alma daqueles que O seguem.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 11:28"
            }
        },
        12: {
            titulo: "O Senhor do Sábado",
            texto: `1 Naquele tempo, passou Jesus pelas searas, em um sábado; e os seus discípulos, tendo fome, começaram a colher espigas e a comer.
2 E os fariseus, vendo isso, disseram-lhe: Eis que os teus discípulos fazem o que não é lícito fazer num sábado.
3 Ele, porém, lhes disse: Não lestes o que fez Davi, quando teve fome, ele e os que com ele estavam?
4 Como entrou na Casa de Deus e comeu os pães da proposição, que não lhe era lícito comer, nem aos que com ele estavam, mas só aos sacerdotes?
5 Ou não lestes na lei que, aos sábados, os sacerdotes no templo violam o sábado e ficam sem culpa?
6 Pois eu vos digo que está aqui quem é maior do que o templo.
7 Mas, se vós soubésseis o que significa: Misericórdia quero e não sacrifício, não condenaríeis os inocentes.
8 Porque o Filho do Homem até do sábado é Senhor.
9 E, partindo dali, chegou à sinagoga deles.
10 E eis que estava ali um homem que tinha uma das mãos mirrada; e eles, para o acusarem, o interrogaram, dizendo: É lícito curar nos sábados?
11 E ele lhes disse: Qual de vós será o homem que, tendo uma ovelha, se ela num sábado cair numa cova, não lançará mão dela e a levantará?
12 Pois quanto mais vale um homem do que uma ovelha? É, por consequência, lícito fazer bem nos sábados.
13 Então, disse àquele homem: Estende a tua mão. E ele a estendeu, e ficou sã como a outra.
14 E os fariseus, tendo saído, formaram conselho contra ele, para o matarem.
15 Jesus, sabendo isso, retirou-se dali, e acompanhou-o uma grande multidão de povo, e ele curou a todos.
16 E recomendava-lhes rigorosamente que o não descobrissem,
17 para que se cumprisse o que fora dito pelo profeta Isaías, que diz:
18 Eis aqui o meu servo que escolhi, o meu amado, em quem a minha alma se agrada; porei sobre ele o meu Espírito, e anunciará aos gentios o juízo.
19 Não contenderá, nem clamará, nem alguém ouvirá nas ruas a sua voz;
20 não esmagará a cana quebrada, nem apagará o pavio que fumega, até que converta o juízo em vitória.
21 E, no seu nome, os gentios esperarão.
22 Trouxeram-lhe, então, um endemoninhado cego e mudo; e de tal modo o curou, que o cego e mudo falava e via.
23 E toda a multidão se admirava e dizia: Não é este o Filho de Davi?
24 Mas os fariseus, ouvindo isso, diziam: Este não expulsa os demônios senão por Belzebu, príncipe dos demônios.
25 Jesus, porém, conhecendo os seus pensamentos, disse-lhes: Todo reino dividido contra si mesmo é devastado; e toda cidade ou casa dividida contra si mesma não subsistirá.
26 E, se Satanás expulsa a Satanás, está dividido contra si mesmo; como subsistirá, pois, o seu reino?
27 E, se eu expulso os demônios por Belzebu, por quem os expulsam, então, os vossos filhos? Portanto, eles mesmos serão os vossos juízes.
28 Mas, se eu expulso os demônios pelo Espírito de Deus, é conseguintemente chegado a vós o Reino de Deus.
29 Ou como pode alguém entrar na casa do homem forte e roubar os seus bens, se primeiro não manietar o homem forte, saqueando, então, a sua casa?
30 Quem não é comigo é contra mim; e quem comigo não ajunta espalha.
31 Portanto, eu vos digo: todo pecado e blasfêmia se perdoará aos homens, mas a blasfêmia contra o Espírito não será perdoada aos homens.
32 E, se qualquer disser alguma palavra contra o Filho do Homem, ser-lhe-á perdoado, mas, se alguém falar contra o Espírito Santo, não lhe será perdoado, nem neste século nem no futuro.
33 Ou fazei a árvore boa e o seu fruto bom, ou fazei a árvore má e o seu fruto mau; porque pelo fruto se conhece a árvore.
34 Raça de víboras, como podeis vós dizer boas coisas, sendo maus? Pois do que há em abundância no coração, disso fala a boca.
35 O homem bom tira boas coisas do bom tesouro do seu coração, e o homem mau do mau tesouro tira coisas más.
36 Mas eu vos digo que de toda palavra ociosa que os homens disserem hão de dar conta no Dia do Juízo.
37 Porque por tuas palavras serás justificado e por tuas palavras serás condenado.
38 Então, alguns dos escribas e dos fariseus responderam, dizendo: Mestre, quiséramos ver da tua parte algum sinal.
39 Mas ele lhes respondeu e disse: Uma geração má e adúltera pede um sinal, porém não se lhe dará outro sinal, senão o do profeta Jonas,
40 pois, como Jonas esteve três dias e três noites no ventre da baleia, assim estará o Filho do Homem três dias e três noites no seio da terra.
41 Os varões ninivitas se levantarão no Juízo com esta geração e a condenarão, porque se arrependeram com a pregação de Jonas. E eis que está aqui quem é maior do que Jonas.
42 A Rainha do Sul se levantará no Dia do Juízo com esta geração e a condenará, porque veio dos confins da terra para ouvir a sabedoria de Salomão. E eis que está aqui quem é maior do que Salomão.
43 E, quando o espírito imundo tem saído do homem, anda por lugares áridos, buscando repouso, e não o encontra.
44 Então, diz: Voltarei para a minha casa, donde saí. E, voltando, acha-a desocupada, varrida e adornada.
45 Então, vai e leva consigo outros sete espíritos piores do que ele, e, entrando, habitam ali; e são os últimos momentos daquele homem piores do que os primeiros. Assim acontecerá também a esta geração má.
46 E, falando ele ainda à multidão, eis que estavam fora sua mãe e seus irmãos, pretendendo falar-lhe.
47 E disse-lhe alguém: Eis que estão ali fora tua mãe e teus irmãos, que querem falar-te.
48 Porém ele, respondendo, disse ao que lhe falara: Quem é minha mãe? E quem são meus irmãos?
49 E, estendendo a mão para os seus discípulos, disse: Eis aqui minha mãe e meus irmãos;
50 porque qualquer que fizer a vontade de meu Pai, que está nos céus, este é meu irmão, e irmã, e mãe.`,
            pergunta: {
                texto: "Quem Jesus disse ser a Sua mãe e os Seus irmãos?",
                opcoes: [
                    { numero: 1, texto: "Qualquer que fizer a vontade de Seu Pai", correta: true },
                    { numero: 2, texto: "Apenas Maria e José", correta: false },
                    { numero: 3, texto: "Os habitantes de Nazaré", correta: false },
                    { numero: 4, texto: "Os sacerdotes", correta: false }
                ],
                explicacao: "Jesus estabeleceu uma prioridade espiritual sobre os laços de sangue.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 12:50"
            }
        },
        13: {
            titulo: "Parábolas do Reino",
            texto: `1 Tendo Jesus saído de casa naquele dia, estava assentado junto ao mar;
2 e ajuntou-se muita gente ao pé dele, de sorte que, entrando num barco, se assentou; e toda a multidão estava em pé na praia.
3 E falou-lhe de muitas coisas por parábolas, dizendo: Eis que o semeador saiu a semear.
4 E, quando semeava, uma parte da semente caiu ao pé do caminho, e vieram as aves e comeram-na;
5 e outra parte caiu em pedregais, onde não havia muita terra, e logo nasceu, porque não tinha terra profunda;
6 mas, vindo o sol, queimou-se e secou-se, porque não tinha raiz.
7 E outra caiu entre espinhos, e os espinhos cresceram e sufocaram-na.
8 E outra caiu em boa terra e deu fruto: um a cem, outro a sessenta e outro a trinta.
9 Quem tem ouvidos para ouvir, ouça.
10 E, acercando-se dele os discípulos, disseram-lhe: Por que lhes falas por parábolas?
11 Ele, respondendo, disse-lhes: Porque a vós é dado conhecer os mistérios do Reino dos céus, mas a eles não lhes é dado;
12 porque àquele que tem, se dará, e terá em abundância; mas àquele que não tem, até o que tem lhe será tirado.
13 Por isso, lhes falo por parábolas, porque eles, vendo, não veem; e, ouvindo, não ouvem, nem compreendem.
14 E neles se cumpre a profecia de Isaías, que diz: Ouvindo, ouvireis, mas não compreendereis; e, vendo, vereis, mas não percebereis.
15 Porque o coração deste povo está endurecido, e ouviram de mau grado com seus ouvidos e fecharam seus olhos, para que não vejam com os olhos, e ouçam com os ouvidos, e compreendam com o coração, e se convertam, e eu os cure.
16 Mas bem-aventurados os vossos olhos, porque veem, e os vossos ouvidos, porque ouvem.
17 Porque em verdade vos digo que muitos profetas e justos desejaram ver o que vós vedes e não o viram, e ouvir o que vós ouvis e não o ouviram.
18 Escutai vós, pois, a parábola do semeador.
19 Ouvindo alguém a palavra do Reino e não a entendendo, vem o maligno e arrebata o que foi semeado no seu coração; este é o que foi semeado ao pé do caminho.
20 O que foi semeado em pedregais é o que ouve a palavra e logo a recebe com gozo;
21 mas não tem raiz em si mesmo; antes, é de pouca duração; e, chegada a angústia e a perseguição por causa da palavra, logo se escandaliza;
22 e o que foi semeado entre espinhos é o que ouve a palavra, mas os cuidados deste mundo e a sedução das riquezas sufocam a palavra, e fica infrutífera;
23 mas o que foi semeado em boa terra é o que ouve e compreende a palavra; e dá fruto, e um produz cem, outro, sessenta, e outro, trinta.
24 Propôs-lhes outra parábola, dizendo: O Reino dos céus é semelhante ao homem que semeia boa semente no seu campo;
25 mas, dormindo os homens, veio o seu inimigo, e semeou o joio no meio do trigo, e retirou-se.
26 E, quando a erva cresceu e frutificou, apareceu também o joio.
27 E os servos do pai de família, indo ter com ele, disseram-lhe: Senhor, não semeaste tu no teu campo boa semente? Por que tem, então, joio?
28 E ele lhes disse: Um inimigo fez isso. E os servos lhe disseram: Queres, pois, que vamos colhê-lo?
29 Porém ele disse: Não; para que, ao colher o joio, não arranqueis também o trigo com ele.
30 Deixai crescer ambos juntos até à ceifa; e, por ocasião da ceifa, direi aos ceifeiros: Colhei primeiro o joio e atai-o em molhos para o queimar; mas o trigo, recolhei-o no meu celeiro.
31 Outra parábola lhes propôs, dizendo: O Reino dos céus é semelhante ao grão de mostarda que um homem tomou e semeou no seu campo;
32 o qual é, realmente, a menor de todas as sementes; mas, crescido, é a maior das plantas e faz-se uma árvore, de sorte que vêm as aves do céu e se aninham nos seus ramos.
33 Outra parábola lhes disse: O Reino dos céus é semelhante ao fermento que uma mulher toma e esconde em três medidas de farinha, até que tudo esteja levedado.
34 Tudo isso disse Jesus por parábolas à multidão e nada lhes falava sem parábolas,
35 para que se cumprisse o que fora dito pelo profeta, que disse: Abrirei em parábolas a minha boca; publicarei coisas ocultas desde a criação do mundo.
36 Então, despedindo a multidão, foi Jesus para casa. E chegaram-se a ele os seus discípulos, dizendo: Explica-nos a parábola do joio do campo.
37 E ele, respondendo, disse-lhes: O que semeia a boa semente é o Filho do Homem;
38 o campo é o mundo; a boa semente são os filhos do Reino; e o joio são os filhos do maligno.
39 O inimigo que o semeou é o diabo; e a ceifa é o fim do mundo; e os ceifeiros são os anjos.
40 Pois assim como o joio é colhido e queimado no fogo, assim será no fim deste mundo.
41 Mandará o Filho do Homem os seus anjos, e eles colherão do seu Reino tudo o que causa escândalo e os que cometem iniquidade.
42 E lançá-los-ão na fornalha de fogo; ali haverá choro e ranger de dentes.
43 Então, os justos resplandecerão como o sol, no Reino de seu Pai. Quem tem ouvidos para ouvir, ouça.
44 Também o Reino dos céus é semelhante a um tesouro escondido num campo que um homem achou e escondeu; e, pelo gozo dele, vai, vende tudo quanto tem e compra aquele campo.
45 Outrossim, o Reino dos céus é semelhante ao homem negociante que busca boas pérolas;
46 e, encontrando uma pérola de grande valor, foi, vendeu tudo quanto tinha e comprou-a.
47 Igualmente, o Reino dos céus é semelhante a uma rede lançada ao mar e que apanha toda qualidade de peixes.
48 E, estando cheia, a puxam para a praia e, assentando-se, apanham para os cestos os bons; os ruins, porém, lançam fora.
49 Assim será no fim do mundo: sairão os anjos, e separarão os maus dentre os justos,
50 e lançá-los-ão na fornalha de fogo; ali haverá choro e ranger de dentes.
51 E disse-lhes Jesus: Entendestes todas estas coisas? Disseram-lhe eles: Sim, Senhor.
52 E ele disse-lhes: Por isso, todo escriba instruído acerca do Reino dos céus é semelhante a um pai de família que tira do seu tesouro coisas novas e velhas.
53 E aconteceu que Jesus, concluindo estas parábolas, se retirou dali.
54 E, chegando à sua pátria, ensinava-os na sinagoga deles, de sorte que se maravilhavam e diziam: Donde veio a este esta sabedoria e estas maravilhas?
55 Não é este o filho do carpinteiro? E não se chama sua mãe Maria, e seus irmãos, Tiago, e José, e Simão, e Judas?
56 E não estão entre nós todas as suas irmãs? Donde lhe veio, pois, tudo isso?
57 E escandalizavam-se nele. Mas Jesus lhes disse: Não há profeta sem honra, senão na sua pátria e na sua casa.
58 E não fez ali muitas maravilhas, por causa da incredulidade deles.`,
            pergunta: {
                texto: "Na parábola do semeador, o que representa a semente?",
                opcoes: [
                    { numero: 1, texto: "A palavra do Reino", correta: true },
                    { numero: 2, texto: "O dinheiro", correta: false },
                    { numero: 3, texto: "As boas obras", correta: false },
                    { numero: 4, texto: "A chuva", correta: false }
                ],
                explicacao: "A eficácia da semente depende do tipo de coração (solo) que a recebe.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 13:19"
            }
        },
        14: {
            titulo: "A Morte de João Baptista e a Multiplicação",
            texto: `
¹ Naquele tempo, ouviu Herodes, o tetrarca, a fama de Jesus.
² E disse aos seus criados: Este é João Batista; ressuscitou dos mortos, e, por isso, estas maravilhas operam nele.
³ Porque Herodes tinha prendido João e tinha-o manietado e encerrado no cárcere por causa de Herodias, mulher de seu irmão Filipe;
⁴ porque João lhe dissera: Não te é lícito possuí-la.
⁵ E, querendo matá-lo, temia o povo, porque o tinham como profeta.
⁶ Festejando-se, porém, o dia natalício de Herodes, dançou a filha de Herodias diante dele e agradou a Herodes,
⁷ pelo que prometeu, com juramento, dar-lhe tudo o que pedisse.
⁸ E ela, instruída previamente por sua mãe, disse: Dá-me aqui num prato a cabeça de João Batista.
⁹ E o rei afligiu-se, mas, por causa do juramento e dos que estavam à mesa com ele, ordenou que se lhe desse.
¹⁰ E mandou degolar João no cárcere,
¹¹ e a sua cabeça foi trazida num prato e dada à jovem, e ela a levou a sua mãe.
¹² E chegaram os seus discípulos, e levaram o corpo, e o sepultaram, e foram anunciá-lo a Jesus.
  A primeira multiplicação dos pães e peixes
¹³ E Jesus, ouvindo isso, retirou-se dali num barco, para um lugar deserto, apartado; e, sabendo-o o povo, seguiu-o a pé desde as cidades.
¹⁴ E Jesus, saindo, viu uma grande multidão e, possuído de íntima compaixão para com ela, curou os seus enfermos.
¹⁵ E, sendo chegada a tarde, os seus discípulos aproximaram-se dele, dizendo: O lugar é deserto, e a hora é já avançada; despede a multidão, para que vão pelas aldeias e comprem comida para si.
¹⁶ Jesus, porém, lhes disse: Não é mister que vão; dai-lhes vós de comer.
¹⁷ Então, eles lhe disseram: Não temos aqui senão cinco pães e dois peixes.
¹⁸ E ele disse: Trazei-mos aqui.
¹⁹ Tendo mandado que a multidão se assentasse sobre a erva, tomou os cinco pães e os dois peixes, e, erguendo os olhos ao céu, os abençoou, e, partindo os pães, deu-os aos discípulos, e os discípulos, à multidão.
²⁰ E comeram todos e saciaram-se, e levantaram dos pedaços que sobejaram doze cestos cheios.
²¹ E os que comeram foram quase cinco mil homens, além das mulheres e crianças.
  Jesus anda por cima do mar
²² E logo ordenou Jesus que os seus discípulos entrassem no barco e fossem adiante, para a outra banda, enquanto despedia a multidão.
²³ E, despedida a multidão, subiu ao monte para orar à parte. E, chegada já a tarde, estava ali só.
²⁴ E o barco estava já no meio do mar, açoitado pelas ondas, porque o vento era contrário.
²⁵ Mas, à quarta vigília da noite, dirigiu-se Jesus para eles, caminhando por cima do mar.
²⁶ E os discípulos, vendo-o caminhar sobre o mar, assustaram-se, dizendo: É um fantasma. E gritaram, com medo.
²⁷ Jesus, porém, lhes falou logo, dizendo: Tende bom ânimo, sou eu; não temais.
²⁸ E respondeu-lhe Pedro e disse: Senhor, se és tu, manda-me ir ter contigo por cima das águas.
²⁹ E ele disse: Vem. E Pedro, descendo do barco, andou sobre as águas para ir ter com Jesus.
³⁰ Mas, sentindo o vento forte, teve medo; e, começando a ir para o fundo, clamou, dizendo: Senhor, salva-me.
³¹ E logo Jesus, estendendo a mão, segurou-o e disse-lhe: Homem de pequena fé, por que duvidaste?
³² E, quando subiram para o barco, acalmou o vento.
³³ Então, aproximaram-se os que estavam no barco e adoraram-no, dizendo: És verdadeiramente o Filho de Deus.
³⁴ E, tendo passado para a outra banda, chegaram à terra de Genesaré.
³⁵ E, quando os homens daquele lugar o conheceram, mandaram por todas aquelas terras em redor e trouxeram-lhe todos os que estavam enfermos.
³⁶ E rogavam-lhe que, ao menos, eles pudessem tocar a orla da sua veste; e todos os que a tocavam ficavam  

`,
            pergunta: {
                texto: "Quantos pães e peixes Jesus usou para alimentar os cinco mil?",
                opcoes: [
                    { numero: 1, texto: "Cinco pães e dois peixes", correta: true },
                    { numero: 2, texto: "Sete pães e três peixes", correta: false },
                    { numero: 3, texto: "Dez pães", correta: false },
                    { numero: 4, texto: "Um cesto de comida", correta: false }
                ],
                explicacao: "Além dos cinco mil homens, havia mulheres e crianças, e sobraram 12 cestos.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 14:17-21"
            }
        },
        15: {
            titulo: "Tradições e a Fé da Cananeia",
            texto: `
¹ Então, chegaram ao pé de Jesus uns escribas e fariseus de Jerusalém, dizendo:
² Por que transgridem os teus discípulos a tradição dos anciãos? Pois não lavam as mãos quando comem pão.
³ Ele, porém, respondendo, disse-lhes: Por que transgredis vós também o mandamento de Deus pela vossa tradição?
⁴ Porque Deus ordenou,dizendo: Honra a teu pai e a tua mãe; e: Quem maldisser ao pai ou à mãe, que morra de morte.
⁵ Mas vós dizeis: Qualquer que disser ao pai ou à mãe:É oferta ao Senhor o que poderias aproveitar de mim, esse não precisa honrar nem a seu pai nem a sua mãe,
⁶ E assim invalidastes, pela vossa tradição, o mandamento de Deus.
⁷ Hipócritas,bem profetizou Isaías a vosso respeito, dizendo:
⁸ Este povo honra-me com os seus lábios,mas o seu coração está longe de mim.
⁹ Mas em vão me adoram,ensinando doutrinas que são preceitos dos homens.
¹⁰ E, chamando a si a multidão, disse-lhes: Ouvi e entendei:
¹¹ o que contamina o homemnão é o que entra na boca, mas o que sai da boca, isso é o que contamina o homem.
¹² Então, acercando-se dele os seus discípulos, disseram-lhe: Sabes que os fariseus, ouvindo essas palavras, se escandalizaram?
¹³ Ele, porém, respondendo, disse: Toda plantaque meu Pai celestial não plantou será arrancada.
¹⁴ Deixai-os;são condutores cegos; ora, se um cego guiar outro cego, ambos cairão na cova.
¹⁵ E Pedro, tomando a palavra, disse-lhe: Explica-nos essa parábola.
¹⁶ Jesus, porém, disse: Até vós mesmos estais ainda sem entender?
¹⁷ Ainda não compreendeis que tudo o que entra pela bocadesce para o ventre e é lançado fora?
¹⁸ Mas o que sai da bocaprocede do coração, e isso contamina o homem.
¹⁹ Porque do coração procedem os maus pensamentos,mortes, adultérios, prostituição, furtos, falsos testemunhos e blasfêmias.
²⁰ São essas coisas que contaminam o homem; mas comer sem lavar as mãos, isso não contamina o homem.
  A mulher cananeia
²¹ E, partindo Jesus dali, foi para as partes de Tiro e de Sidom.
²² E eis que uma mulher cananeia, que saíra daquelas cercanias, clamou, dizendo: Senhor, Filho de Davi, tem misericórdia de mim, que minha filha está miseravelmente endemoninhada.
²³ Mas ele não lhe respondeu palavra. E os seus discípulos, chegando ao pé dele, rogaram-lhe, dizendo: Despede-a, que vem gritando atrás de nós.
²⁴ E ele, respondendo, disse: Eu não fui enviado senão às ovelhas perdidas da casa de Israel.
²⁵ Então, chegou ela e adorou-o, dizendo: Senhor, socorre-me.
²⁶ Ele, porém, respondendo, disse: Não é bom pegar o pão dos filhos e deitá-lo aoscachorrinhos.
²⁷ E ela disse: Sim, Senhor, mas também os cachorrinhos comem das migalhas que caem da mesa dos seus senhores.
²⁸ Então, respondeu Jesus e disse-lhe: Ó mulher, grande é a tua fé. Seja isso feito para contigo, como tu desejas. E, desde aquela hora, a sua filha ficou sã.
  A segunda multiplicação dos pães e peixes
²⁹ Partindo Jesus dali, chegou ao pé do mar da Galileia e, subindo a um monte, assentou-se lá.
³⁰ E veio ter com ele muito povo, que trazia coxos, cegos, mudos, aleijados e outros muitos; e os puseram aos pés de Jesus, e ele os sarou,
³¹ de tal sorte que a multidão se maravilhou vendo os mudos a falar, os aleijados sãos, os coxos a andar, e os cegos a ver; e glorificava o Deus de Israel.
³² E Jesus, chamando os seus discípulos, disse: Tenho compaixão da multidão, porque já está comigo há três dias e não tem o que comer, e não quero despedi-la em jejum, para que não desfaleça no caminho.
³³ E os seus discípulos disseram-lhe: Donde nos viriam num deserto tantos pães, para saciar tal multidão?
³⁴ E Jesus disse-lhes: Quantos pães tendes? E eles disseram: Sete e uns poucos peixinhos.
³⁵ Então, mandou à multidão que se assentasse no chão.
³⁶ E, tomando os sete pães e os peixes e dando graças, partiu-os e deu-os aos seus discípulos, e os discípulos, à multidão.
³⁷ E todos comeram e se saciaram, e levantaram, do que sobejou, sete cestos cheios de pedaços.
³⁸ Ora, os que tinham comido eram quatro mil homens, além de mulheres e crianças.
³⁹ E, tendo despedido a multidão, entrou no barco e dirigiu-se ao território de Magdala 

`,
            pergunta: {
                texto: "Segundo Jesus, o que contamina o homem?",
                opcoes: [
                    { numero: 1, texto: "O que sai da boca (do coração)", correta: true },
                    { numero: 2, texto: "Comer sem lavar as mãos", correta: false },
                    { numero: 3, texto: "Comer carne de porco", correta: false },
                    { numero: 4, texto: "Trabalhar no sábado", correta: false }
                ],
                explicacao: "O pecado começa no interior, nos maus pensamentos e intenções.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 15:18"
            }
        },
        16: {
            titulo: "A Confissão de Pedro",
            texto: `
¹ E, chegando-se os fariseus e os saduceus para o tentarem, pediram-lhe que lhes mostrasse algum sinal do céu.
² Mas ele, respondendo, disse-lhes: Quando é chegada a tarde, dizeis: Haverá bom tempo, porque o céu está rubro.
³ E pela manhã: Hoje haverá tempestade, porque o céu está de um vermelho sombrio. Hipócritas, sabeis diferençar a face do céu e não conheceis os sinais dos tempos?
⁴ Uma geração má e adúltera pede um sinal,e nenhum sinal lhe será dado, senão o sinal do profeta Jonas. E, deixando-os, retirou-se.
⁵ E, passando seus discípulos para a outra banda, tinham-se esquecido de fornecer-se de pão.
⁶ E Jesus disse-lhes: Adverti e acautelai-vos do fermento dos fariseus e saduceus.
⁷ E eles arrazoavam entre si, dizendo: É porque não nos fornecemos de pão.
⁸ E Jesus, percebendo isso, disse: Por que arrazoais entre vós, homens de pequena fé, sobre o não vos terdes fornecido de pão?
⁹ Não compreendeisainda, nem vos lembrais dos cinco pães para cinco mil homens e de quantos cestos levantastes?
¹⁰ Nem dos sete pães para quatro mile de quantos cestos levantastes?
¹¹ Como não compreendestes que não vos falei a respeito do pão, mas que vos guardásseis do fermento dos fariseus e saduceus?
¹² Então, compreenderam que não dissera que se guardassem do fermento do pão, mas da doutrina dos fariseus.
 A confissão de Pedro
¹³ E, chegando Jesus às partes de Cesareia de Filipe, interrogou os seus discípulos, dizendo: Quem dizem os homens ser o Filho do Homem?
¹⁴ E eles disseram: Uns, João Batista; outros, Elias, e outros, Jeremias ou um dos profetas.
¹⁵ Disse-lhes ele: E vós, quem dizeis que eu sou?
¹⁶ E Simão Pedro, respondendo, disse: Tu és o Cristo, o Filho do Deus vivo.
¹⁷ E Jesus, respondendo, disse-lhe: Bem-aventurado és tu, Simão Barjonas,porque não foi carne e sangue quem to revelou, mas meu Pai, que está nos céus.
¹⁸ Pois também eu te digo que tu ésPedroe sobre esta pedra edificarei a minha igreja,e as portas do inferno não prevalecerão contra ela.
¹⁹ E eu te darei as chaves do Reino dos céus,e tudo o que ligares na terra será ligado nos céus, e tudo o que desligares na terra será desligado nos céus.
²⁰ Então, mandou aos seus discípulos que a ninguém dissessem que ele era o Cristo.
²¹ Desde então, começou Jesus a mostrar aos seus discípulos que convinha ir a Jerusalém, e padecer muito dos anciãos, e dos principais dos sacerdotes, e dos escribas, e ser morto, e ressuscitar ao terceiro dia.
²² E Pedro, tomando-o de parte, começou a repreendê-lo, dizendo: Senhor, tem compaixão de ti; de modo nenhum te acontecerá isso.
²³ Ele, porém, voltando-se, disse a Pedro: Para trás de mim, Satanás, que me serves de escândalo; porque não compreendes as coisas que são de Deus,mas só as que são dos homens.
 O discípulo de Jesus deve levar a sua cruz
²⁴ Então, disse Jesus aos seus discípulos: Se alguém quiser vir após mim, renuncie-se a si mesmo, tome sobre si a sua cruz e siga-me;
²⁵ porque aquele que quiser salvar a suavidaperdê-la-á, e quem perder a sua vida por amor de mim achá-la-á.
²⁶ Pois que aproveita ao homem ganhar o mundo inteiro, se perder a suaalma?Ou que dará o homem em recompensa da sua alma?
²⁷ Porque o Filho do Homem virá na glória de seu Pai,com os seus anjos; e, então, dará a cada um segundo as suas obras.
²⁸ Em verdade vos digo que alguns há,dos que aqui estão, que não provarão a morte até que vejam vir o Filho do Homem no seu Reino 

`,
            pergunta: {
                texto: "Qual foi a resposta de Pedro quando Jesus perguntou: 'Quem dizeis que eu sou?'",
                opcoes: [
                    { numero: 1, texto: "Tu és o Cristo, o Filho do Deus vivo", correta: true },
                    { numero: 2, texto: "Tu és um profeta", correta: false },
                    { numero: 3, texto: "Tu és Elias", correta: false },
                    { numero: 4, texto: "Tu és o Rei", correta: false }
                ],
                explicacao: "Jesus declarou que esta revelação veio do Pai que está nos céus.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 16:16"
            }
        },
        17: {
            titulo: "A Transfiguração",
            texto: `
¹ Seis dias depois, tomou Jesus consigo a Pedro, e a Tiago, e a João, seu irmão, e os conduziu em particular a um alto monte.
² E transfigurou-se diante deles; e o seu rosto resplandeceu como o sol, e as suas vestes se tornaram brancas como a luz.
³ E eis que lhes apareceram Moisés e Elias, falando com ele.
⁴ E Pedro, tomando a palavra, disse a Jesus: Senhor, bom é estarmos aqui; se queres, façamos aqui três tabernáculos, um para ti, um para Moisés e um para Elias.
⁵ E, estando ele ainda a falar, eis que uma nuvem luminosa os cobriu. E da nuvem saiu uma voz que dizia: Este é o meu Filho amado, em quem me comprazo; escutai-o.
⁶ E os discípulos, ouvindo isso, caíram sobre seu rosto e tiveram grande medo.
⁷ E, aproximando-se Jesus, tocou-lhes e disse: Levantai-vos e não tenhais medo.
⁸ E, erguendo eles os olhos, ninguém viram, senão a Jesus.
⁹ E, descendo eles do monte, Jesus lhes ordenou, dizendo: A ninguém conteis a visão até que o Filho do Homem seja ressuscitado dos mortos.
¹⁰ E os seus discípulos o interrogaram, dizendo: Por que dizem, então, os escribas que é mister que Elias venha primeiro?
¹¹ E Jesus, respondendo, disse-lhes: Em verdade Elias virá primeiroe restaurará todas as coisas.
¹² Mas digo-vos que Elias já veio, e não o conheceram,mas fizeram-lhe tudo o que quiseram. Assim farão eles também padecer o Filho do Homem.
¹³ Então, entenderam os discípulos que lhes falara de João Batista.
  A cura de um lunático
¹⁴ E, quando chegaram à multidão, aproximou-se-lhe um homem, pondo-se de joelhos diante dele e dizendo:
¹⁵ Senhor, tem misericórdia de meu filho, que é lunático e sofre muito; pois muitas vezes cai no fogo e, muitas vezes, na água;
¹⁶ e trouxe-o aos teus discípulos e não puderam curá-lo.
¹⁷ E Jesus, respondendo, disse: Ó geração incrédula e perversa! Até quando estarei eu convosco e até quando vos sofrerei? Trazei-mo aqui.
¹⁸ E repreendeu Jesus o demônio, que saiu dele; e, desde aquela hora, o menino sarou.
¹⁹ Então, os discípulos, aproximando-se de Jesus em particular, disseram: Porque não pudemos nós expulsá-lo?
²⁰ E Jesus lhes disse: Por causa da vossa pequena fé;porque em verdade vos digo que, se tiverdes fé como um grão de mostarda, direis a este monte: Passa daqui para acolá — e há de passar; e nada vos será impossível.
²¹ Mas esta casta de demônios não se expulsa senão pela oração e pelo jejum.
²² Ora, achando-se eles na Galileia, disse-lhes Jesus: O Filho do Homem será entregue nas mãos dos homens,
²³ e matá-lo-ão,e, ao terceiro dia, ressuscitará. E eles se entristeceram muito.
  Jesus paga o tributo
²⁴ E, chegando eles a Cafarnaum, aproximaram-se de Pedro os que cobravam as didracmas e disseram: O vosso mestre não paga as didracmas?
²⁵ Disse ele: Sim. E, entrando em casa, Jesus se lhe antecipou, dizendo: Que te parece, Simão? De quem cobram os reis da terra os tributos ou os impostos? Dos seus filhos ou dos alheios?
²⁶ Disse-lhe Pedro: Dos alheios. Disse-lhe Jesus: Logo, estão livres os filhos.
²⁷ Mas, para que os não escandalizemos, vai ao mar, lança o anzol, tira o primeiro peixe que subir e, abrindo-lhe a boca, encontrarás um estáter; toma-o e dá-o por mim e por  

`,
            pergunta: {
                texto: "Quem apareceu a falar com Jesus no monte?",
                opcoes: [
                    { numero: 1, texto: "Moisés e Elias", correta: true },
                    { numero: 2, texto: "Abraão e Isaac", correta: false },
                    { numero: 3, texto: "João Baptista e Samuel", correta: false },
                    { numero: 4, texto: "Anjos Gabriel e Miguel", correta: false }
                ],
                explicacao: "Moisés representava a Lei e Elias representava os Profetas.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 17:3"
            }
        },
        18: {
            titulo: "O Maior no Reino e o Perdão",
            texto: `
¹ Naquela mesma hora, chegaram os discípulos ao pé de Jesus, dizendo: Quem é o maior no Reino dos céus?
² E Jesus, chamando uma criança, a pôs no meio deles
³ e disse: Em verdade vos digo que,se não vos converterdes e não vos fizerdes como crianças, de modo algum entrareis no Reino dos céus.
⁴ Portanto,aquele que se tornar humilde como esta criança, esse é o maior no Reino dos céus.
⁵ E qualquer que receber em meu nomeuma criança tal como esta a mim me recebe.
⁶ Mas qualquer que escandalizar um destes pequeninosque creem em mim, melhor lhe fora que se lhe pendurasse ao pescoço uma mó de azenha, e se submergisse na profundeza do mar.
⁷ Ai do mundo, por causa dos escândalos.Porque é mister que venham escândalos,mas ai daquele homem por quem o escândalo vem!
⁸ Portanto,se a tua mão ou o teu pé te escandalizar, corta-o e atira-o para longe de ti; melhor te é entrar na vida coxo ou aleijado do que, tendo duas mãos ou dois pés, seres lançado no fogo eterno.
⁹ E, se o teu olho te escandalizar, arranca-o, e atira-o para longe de ti. Melhor te é entrar na vida com um só olho do que, tendo dois olhos, seres lançado no fogo do inferno.
¹⁰ Vede, não desprezeis algum destes pequeninos,porque eu vos digo que os seus anjos nos céus sempre veem a face de meu Pai que está nos céus.
¹¹ Porqueo Filho do Homem veio salvar o que se tinha perdido.
¹² Que vos parece?Se algum homem tiver cem ovelhas, e uma delas se desgarrar, não irá pelos montes, deixando as noventa e nove, em busca da que se desgarrou?
¹³ E, se, porventura, a acha, em verdade vos digo que maior prazer tem por aquela do que pelas noventa e nove que se não desgarraram.
¹⁴ Assim também não é vontade de vosso Pai, que está nos céus, que um destes pequeninos se perca.
  O perdão do pecado de um irmão
¹⁵ Ora,se teu irmão pecar contra ti, vai e repreende-o entre ti e ele só; se te ouvir,ganhaste a teu irmão.
¹⁶ Mas, se não te ouvir, leva ainda contigoum ou dois, para que, pela boca de duas ou três testemunhas, toda palavra seja confirmada.
¹⁷ E, se não as escutar, dize-o à igreja; e, se também não escutar a igreja,considera-o como um gentio e publicano.
¹⁸ Em verdade vos digoque tudo o que ligardes na terra será ligado no céu, e tudo o que desligardes na terra será desligado no céu.
¹⁹ Também vos digoque, se dois de vós concordarem na terra acerca de qualquer coisa que pedirem,isso lhes será feito por meu Pai, que está nos céus.
²⁰ Porque onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles.
²¹ Então, Pedro, aproximando-se dele, disse: Senhor, até quantas vezes pecará meu irmão contra mim, e eu lhe perdoarei? Até sete?
²² Jesus lhe disse: Não te digo que até sete,mas até setenta vezes sete.
  A parábola do credor incompassivo
²³ Por isso, o Reino dos céus pode comparar-se a um certo rei que quis fazer contas com os seus servos;
²⁴ e, começando a fazer contas, foi-lhe apresentado um que lhe devia dez mil talentos.
²⁵ E, não tendo ele com que pagar, o seu senhor mandou que ele,e sua mulher, e seus filhos fossem vendidos, com tudo quanto tinha, para que a dívida se lhe pagasse.
²⁶ Então, aquele servo, prostrando-se, o reverenciava, dizendo: Senhor, sê generoso para comigo, e tudo te pagarei.
²⁷ Então, o senhor daquele servo, movido de íntima compaixão, soltou-o e perdoou-lhe a dívida.
²⁸ Saindo, porém, aquele servo, encontrou um dos seus conservos que lhe devia cemdinheiros e, lançando mão dele, sufocava-o, dizendo: Paga-me o que me deves.
²⁹ Então, o seu companheiro, prostrando-se a seus pés, rogava-lhe, dizendo: Sê generoso para comigo, e tudo te pagarei.
³⁰ Ele, porém, não quis; antes, foi encerrá-lo na prisão, até que pagasse a dívida.
³¹ Vendo, pois, os seus conservos o que acontecia, contristaram-se muito e foram declarar ao seu senhor tudo o que se passara.
³² Então, o seu senhor, chamando-o à sua presença, disse-lhe: Servo malvado, perdoei-te toda aquela dívida, porque me suplicaste.
³³ Não devias tu, igualmente, ter compaixão do teu companheiro, como eu também tive misericórdia de ti?
³⁴ E, indignado, o seu senhor o entregou aos atormentadores, até que pagasse tudo o que devia.
³⁵ Assim vos fará também meu Pai celestial,se do coração não perdoardes, cada um a seu irmão,  

`,
            pergunta: {
                texto: "Quantas vezes Pedro perguntou se devia perdoar o seu irmão?",
                opcoes: [
                    { numero: 1, texto: "Até sete?", correta: true },
                    { numero: 2, texto: "Três vezes?", correta: false },
                    { numero: 3, texto: "Uma vez?", correta: false },
                    { numero: 4, texto: "Dez vezes?", correta: false }
                ],
                explicacao: "Jesus respondeu que se deve perdoar até setenta vezes sete.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 18:21-22"
            }
        },
        19: {
            titulo: "Ensino sobre o Divórcio e o Jovem Rico",
            texto: `
¹ E aconteceu que, concluindo Jesus esses discursos, saiu da Galileia e dirigiu-se aos confins da Judeia, além do Jordão.
² E seguiram-no muitas gentes e curou-as ali.
³ Então, chegaram ao pé dele os fariseus, tentando-o e dizendo-lhe: É lícito ao homem repudiar sua mulher por qualquer motivo?
⁴ Ele, porém, respondendo, disse-lhes: Não tendes lido que, no princípio, o Criador os fezmacho e fêmea
⁵ e disse: Portanto, deixará o homem pai e mãee se unirá à sua mulher,e serão dois numa só carne?
⁶ Assim não são mais dois, mas uma só carne. Portanto, o que Deus ajuntou não separe o homem.
⁷ Disseram-lhe eles: Então, por que mandou Moisés dar-lhe carta de divórcio e repudiá-la?
⁸ Disse-lhes ele: Moisés, por causa da dureza do vosso coração, vos permitiu repudiar vossa mulher; mas, ao princípio, não foi assim.
⁹ Eu vos digo,porém, que qualquer que repudiar sua mulher, não sendo por causa de prostituição, e casar com outra, comete adultério; e o que casar com a repudiada também comete adultério.
¹⁰ Disseram-lhe seus discípulos: Se assim é a condição do homem relativamente à mulher, não convém casar.
¹¹ Ele, porém, lhes disse: Nem todos podem receber esta palavra, massó aqueles a quem foi concedido.
¹² Porque há eunucos que assim nasceram do ventre da mãe;e há eunucos que foram castrados pelos homens; e há eunucos que se castraram a si mesmos por causa do Reino dos céus. Quem pode receber isso, que o receba.
  Jesus abençoa as crianças
¹³ Trouxeram-lhe, então, algumas crianças, para que lhes impusesse as mãos e orasse; mas os discípulos os repreendiam.
¹⁴ Jesus, porém, disse: Deixai os pequeninos e não os estorveis de vir a mim,porque dos tais é o Reino dos céus.
¹⁵ E, tendo-lhes imposto as mãos, partiu dali.
  O jovem rico
¹⁶ E eis que, aproximando-se dele um jovem, disse-lhe: Bom Mestre, que bem farei, para conseguir a vida eterna?
¹⁷ E ele disse-lhe: Por que me chamas bom? Não há bom, senão um só que é Deus. Se queres, porém, entrar na vida, guarda os mandamentos.
¹⁸ Disse-lhe ele: Quais? E Jesus disse: Não matarás, não cometerás adultério, não furtarás, não dirás falso testemunho;
¹⁹ honra teu pai e tua mãe, eamarás o teu próximo como a ti mesmo.
²⁰ Disse-lhe o jovem: Tudo isso tenho guardado desde a minha mocidade; que me falta ainda?
²¹ Disse-lhe Jesus: Se queres ser perfeito,vai, vende tudo o que tens, dá-o aos pobres e terás um tesouro no céu; e vem e segue-me.
²² E o jovem, ouvindo essa palavra, retirou-se triste, porque possuía muitas propriedades.
²³ Disse, então, Jesus aos seus discípulos: Em verdade vos digoque é difícil entrar um rico no Reino dos céus.
²⁴ E outra vez vos digo que é mais fácil passar um camelo pelo fundo de uma agulha do que entrar um rico no Reino de Deus.
²⁵ Os seus discípulos, ouvindo isso, admiraram-se muito, dizendo: Quem poderá, pois, salvar-se?
²⁶ E Jesus, olhando para eles, disse-lhes: Aos homens é isso impossível,mas a Deus tudo é possível.
²⁷ Então, Pedro, tomando a palavra, disse-lhe: Eis que nós deixamos tudo e te seguimos; que receberemos?
²⁸ E Jesus disse-lhes: Em verdade vos digo que vós, que me seguistes, quando, na regeneração, o Filho do Homem se assentar no trono da suaglória, também vos assentareis sobre doze tronos, para julgar as doze tribos de Israel.
²⁹ E todo aquele que tiver deixadocasas, ou irmãos, ou irmãs, ou pai, ou mãe, ou mulher, ou filhos, ou terras, por amor do meu nome, receberá cem vezes tanto e herdará a vida eterna.
³⁰ Porémmuitos primeiros serão derradeiros, e muitos derradeiros serão primeiros 
`,
            pergunta: {
                texto: "O que Jesus disse ser mais difícil do que um camelo passar pelo fundo de uma agulha?",
                opcoes: [
                    { numero: 1, texto: "Um rico entrar no reino de Deus", correta: true },
                    { numero: 2, texto: "Um pecador pedir perdão", correta: false },
                    { numero: 3, texto: "O sol parar", correta: false },
                    { numero: 4, texto: "Um mentiroso ser salvo", correta: false }
                ],
                explicacao: "Referia-se à dificuldade daqueles que confiam nas riquezas.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 19:24"
            }
        },
        20: {
            titulo: "Trabalhadores da Vinha",
            texto: `
¹ Porque o Reino dos céus é semelhante a um homem, pai de família, que saiu de madrugada a assalariar trabalhadores para a sua vinha.
² E, ajustando com os trabalhadores a umdinheiro por dia, mandou-os para a sua vinha.
³ E, saindo perto da hora terceira, viu outros que estavam ociosos na praça.
⁴ E disse-lhes: Ide vós também para a vinha, e dar-vos-ei o que for justo. E eles foram.
⁵ Saindo outra vez, perto da hora sexta e nona, fez o mesmo.
⁶ E, saindo perto da hora undécima, encontrou outros que estavam ociosos e perguntou-lhes: Por que estais ociosos todo o dia?
⁷ Disseram-lhe eles: Porque ninguém nos assalariou. Diz-lhes ele: Ide vós também para a vinha e recebereis o que for justo.
⁸ E, aproximando-se a noite, diz o senhor da vinha ao seu mordomo: Chama os trabalhadores, e paga-lhes o salário, começando pelos derradeiros até aos primeiros.
⁹ E, chegando os que tinham ido perto da hora undécima, receberam um dinheiro cada um;
¹⁰ vindo, porém, os primeiros, cuidaram que haviam de receber mais; mas, do mesmo modo, receberam um dinheiro cada um.
¹¹ E, recebendo-o, murmuravam contra o pai de família,
¹² dizendo: Estes derradeiros trabalharam só uma hora, e tu os igualaste conosco, que suportamos a fadiga e a calma do dia.
¹³ Mas ele, respondendo, disse a um deles: Amigo, não te faço injustiça; não ajustaste tu comigo um dinheiro?
¹⁴ Toma o que é teu e retira-te; eu quero dar a este derradeiro tanto como a ti.
¹⁵ Ou não me é lícito fazer o que quiser do que é meu?Ou é mau o teu olho porque eu sou bom?
¹⁶ Assim,os derradeiros serão primeiros, e os primeiros, derradeiros, porque muitos são chamados, mas poucos, escolhidos.
 O pedido dos filhos de Zebedeu
¹⁷ E, subindo Jesus a Jerusalém, chamou à parte os seus doze discípulos e, no caminho, disse-lhes:
¹⁸ Eis que vamos para Jerusalém,e o Filho do Homem será entregue aos príncipes dos sacerdotes e aos escribas, e condená-lo-ão à morte.
¹⁹ E o entregarão aos gentiospara que dele escarneçam, e o açoitem, e crucifiquem, e ao terceiro dia ressuscitará.
²⁰ Então, se aproximou dele a mãe dos filhos de Zebedeu, com seus filhos, adorando-o e fazendo-lhe um pedido.
²¹ E ele diz-lhe: Que queres? Ela respondeu: Dize que estes meus dois filhos se assentem um à tua direita e outro à tua esquerda, no teu Reino.
²² Jesus, porém, respondendo, disse: Não sabeis o que pedis;podeis vós beber o cálice que eu hei de beber e ser batizados com o batismo com que eu sou batizado? Dizem-lhe eles: Podemos.
²³ E diz-lhes ele: Na verdade bebereiso meu cálice, mas o assentar-se à minha direita ou à minha esquerda não me pertence dá-lo, mas é para aqueles para quem meu Pai o tem preparado.
²⁴ E, quando os dez ouviram isso, indignaram-se contra os dois irmãos.
²⁵ Então, Jesus, chamando-os para junto de si, disse: Bem sabeis que pelos príncipesdos gentios são estes dominados e que os grandes exercem autoridade sobre eles.
²⁶ Não será assim entre vós;mas todo aquele que quiser, entre vós, fazer-se grande, que seja vossoserviçal;
²⁷ e qualquer que, entre vós, quiser ser o primeiro, queseja vossoservo,
²⁸ bem como o Filho do Homem não veio para ser servido,mas para servir e para dar a sua vida em resgate de muitos.
 Os dois cegos de Jericó
²⁹ E, saindo eles de Jericó, seguiu-o grande multidão.
³⁰ E eis que dois cegos, assentados junto do caminho, ouvindo que Jesus passava, clamaram, dizendo: Senhor, Filho de Davi, tem misericórdia de nós.
³¹ E a multidão os repreendia, para que se calassem; eles, porém, cada vez clamavam mais, dizendo: Senhor, Filho de Davi, tem misericórdia de nós.
³² E Jesus, parando, chamou-os e disse: Que quereis que vos faça?
³³ Disseram-lhe eles: Senhor, que os nossos olhos sejam abertos.
³⁴ Então, Jesus, movido de íntima compaixão, tocou-lhes nos olhos, e logo viram; e eles o  

`,
            pergunta: {
                texto: "Quem Jesus disse que veio para servir e dar a vida em resgate de muitos?",
                opcoes: [
                    { numero: 1, texto: "O Filho do Homem", correta: true },
                    { numero: 2, texto: "Os profetas", correta: false },
                    { numero: 3, texto: "Os reis", correta: false },
                    { numero: 4, texto: "Os anjos", correta: false }
                ],
                explicacao: "Jesus é o exemplo supremo de serviço e sacrifício.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 20:28"
            }
        },
        21: {
            titulo: "Entrada Triunfal em Jerusalém",
            texto: `
¹ E, quando se aproximaram de Jerusalém e chegaram a Betfagé, ao monte das Oliveiras, enviou, então, Jesus dois discípulos, dizendo-lhes:
² Ide à aldeia que está defronte de vós e logo encontrareis uma jumenta presa e um jumentinho com ela; desprendei-a e trazei-mos.
³ E, se alguém vos disser alguma coisa, direis que o Senhor precisa deles; e logo os enviará.
⁴ Ora, tudo isso aconteceu para que se cumprisse o que foi dito pelo profeta, que diz:
⁵ Dizei à filha de Sião: Eis que o teu Rei aí te vem, humilde e assentado sobre uma jumenta e sobre um jumentinho, filho de animal de carga.
⁶ E, indo os discípulos e fazendo como Jesus lhes ordenara,
⁷ trouxeram a jumenta e o jumentinho, e sobre eles puseram as suas vestes, e fizeram-no assentar em cima.
⁸ E muitíssima gente estendia as suas vestes pelo caminho, e outros cortavam ramos de árvores e os espalhavam pelo caminho.
⁹ E as multidões, tanto as que iam adiante como as que o seguiam, clamavam, dizendo: Hosana ao Filho de Davi! Bendito o que vem em nome do Senhor! Hosana nas alturas!
¹⁰ E, entrando ele em Jerusalém, toda a cidade se alvoroçou, dizendo: Quem é este?
¹¹ E a multidão dizia: Este é Jesus, o Profeta de Nazaré da Galileia.
  A purificação do templo
¹² E entrou Jesus no templo de Deus, e expulsou todos os que vendiam e compravam no templo, e derribou as mesas dos cambistas e as cadeiras dos que vendiam pombas.
¹³ E disse-lhes: Está escrito:A minha casa será chamada casa de oração. Mas vós a tendes convertido em covil de ladrões.
¹⁴ E foram ter com ele ao templo cegos e coxos, e curou-os.
¹⁵ Vendo, então, os principais dos sacerdotes e os escribas as maravilhas que fazia e os meninos clamando no templo: Hosana ao Filho de Davi, indignaram-se
¹⁶ e disseram-lhe: Ouves o que estes dizem? E Jesus lhes disse: Sim; nunca lestes:Pela boca dos meninos e das criancinhas de peito tiraste o perfeito louvor?
¹⁷ E, deixando-os, saiu da cidade para Betânia e ali passou a noite.
 A figueira seca
¹⁸ E, de manhã, voltando para a cidade, teve fome.
¹⁹ E, avistando uma figueira perto do caminho, dirigiu-se a ela e não achou nela senão folhas. E disse-lhe: Nunca mais nasça fruto de ti. E a figueira secou imediatamente.
²⁰ E os discípulos, vendo isso, maravilharam-se, dizendo: Como secou imediatamente a figueira?
²¹ Jesus, porém, respondendo, disse-lhes: Em verdade vos digo que,se tiverdes fé e não duvidardes,não só fareis o que foi feito à figueira, mas até, se a este monte disserdes: Ergue-te e precipita-te no mar, assim será feito.
²² E tudo o que pedirdes na oração, crendo,o recebereis.
  O batismo de João
²³ E, chegando ao templo, acercaram-se dele, estando já ensinando, os príncipes dos sacerdotes e os anciãos do povo, dizendo: Com que autoridade fazes isso? E quem te deu tal autoridade?
²⁴ E Jesus, respondendo, disse-lhes: Eu também vos perguntarei uma coisa; se ma disserdes, também eu vos direi com que autoridade faço isso.
²⁵ O batismo de João donde era? Do céu ou dos homens? E pensavam entre si, dizendo: Se dissermos: do céu, ele nos dirá: Então, por que não o crestes?
²⁶ E, se dissermos: dos homens, tememos o povo, porque todos consideram João como profeta.
²⁷ E, respondendo a Jesus, disseram: Não sabemos. Ele disse-lhes: Nem eu vos digo com que autoridade faço isso.
  A parábola dos dois filhos
²⁸ Mas que vos parece? Um homem tinha dois filhos e, dirigindo-se ao primeiro, disse: Filho, vai trabalhar hoje na minha vinha.
²⁹ Ele, porém, respondendo, disse: Não quero. Mas, depois, arrependendo-se, foi.
³⁰ E, dirigindo-se ao segundo, falou-lhe de igual modo; e, respondendo ele, disse: Eu vou, senhor; e não foi.
³¹ Qual dos dois fez a vontade do pai? Disseram-lhe eles: O primeiro. Disse-lhes Jesus: Em verdade vos digo que os publicanos e as meretrizes entram adiante de vós no Reino de Deus.
³² Porque João veio a vós no caminho de justiça,e não o crestes, mas os publicanos e as meretrizes o creram; vós, porém, vendo isso, nem depois vos arrependestes para o crer.
  A parábola dos lavradores maus
³³ Ouvi, ainda, outra parábola: Houve um homem, pai de família, que plantouuma vinha, e circundou-a de um valado, e construiu nela um lagar, e edificou uma torre, e arrendou-a a uns lavradores, e ausentou-se para longe.
³⁴ E, chegando o tempo dos frutos, enviou os seus servos aos lavradores,para receber os seus frutos.
³⁵ E os lavradores, apoderando-se dos servos,feriram um, mataram outro e apedrejaram outro.
³⁶ Depois, enviou outros servos, em maior número do que os primeiros; e eles fizeram-lhes o mesmo.
³⁷ E, por último, enviou-lhes seu filho, dizendo: Terão respeito a meu filho.
³⁸ Mas os lavradores, vendo o filho, disseram entre si:Este é o herdeiro; vinde, matemo-lo e apoderemo-nos da sua herança.
³⁹ E, lançando mão dele,o arrastaram para fora da vinha e o mataram.
⁴⁰ Quando, pois, vier o Senhor da vinha, que fará àqueles lavradores?
⁴¹ Dizem-lhe eles: Dará afrontosa morte aos maus e arrendará a vinha a outros lavradores, que, a seu tempo, lhe deem os frutos.
⁴² Diz-lhes Jesus: Nunca lestes nas Escrituras: A pedra que os edificadores rejeitaram, essa foi posta por cabeça do ângulo; pelo Senhor foi feito isso e é maravilhoso aos nossos olhos?
⁴³ Portanto, eu vos digo que o Reino de Deus vos será tiradoe será dado a uma nação que dê os seus frutos.
⁴⁴ E quem cair sobre esta pedra despedaçar-se-á;e aquele sobre quem ela cair ficará reduzido a pó.
⁴⁵ E os príncipes dos sacerdotes e os fariseus, ouvindo essas palavras, entenderam que falava deles;
⁴⁶ e, pretendendo prendê-lo, recearam o povo, porquanto o tinham  

`,
            pergunta: {
                texto: "Em que animal Jesus montou para entrar em Jerusalém?",
                opcoes: [
                    { numero: 1, texto: "Numa jumenta e num jumentinho", correta: true },
                    { numero: 2, texto: "Num cavalo branco", correta: false },
                    { numero: 3, texto: "Num camelo", correta: false },
                    { numero: 4, texto: "Num boi", correta: false }
                ],
                explicacao: "Isto aconteceu para cumprir o que foi dito pelo profeta Zacarias.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 21:2-5"
            }
        },
        22: {
            titulo: "O Grande Mandamento",
            texto: `
¹ Então, Jesus, tomando a palavra, tornou a falar-lhes em parábolas, dizendo:
² O Reino dos céus é semelhante a um certo rei que celebrou as bodas de seu filho.
³ E enviou os seus servos a chamar os convidados para as bodas; e estes não quiseram vir.
⁴ Depois, enviou outros servos, dizendo: Dizei aos convidados: Eis que tenho o meu jantar preparado,os meus bois e cevados já mortos, e tudo já pronto; vinde às bodas.
⁵ Porém eles, não fazendo caso, foram, um para o seu campo, e outro para o seu negócio;
⁶ e, os outros, apoderando-se dos servos, os ultrajaram e mataram.
⁷ E o rei, tendo notícias disso, encolerizou-se,e, enviando os seus exércitos, destruiu aqueles homicidas, e incendiou a sua cidade.
⁸ Então, disse aos servos: As bodas, na verdade, estão preparadas,mas os convidados não eram dignos.
⁹ Ide, pois, às saídas dos caminhos e convidai para as bodas a todos os que encontrardes.
¹⁰ E os servos, saindo pelos caminhos,ajuntaram todos quantos encontraram, tanto maus como bons; e a festa nupcial ficou cheia de convidados.
¹¹ E o rei, entrando para ver os convidados, viu ali um homemque não estava trajado com veste nupcial.
¹² E disse-lhe: Amigo, como entraste aqui, não tendo veste nupcial? E ele emudeceu.
¹³ Disse, então, o rei aos servos: Amarrai-o de pés e mãos, levai-oe lançai-o nas trevas exteriores; ali, haverá pranto e ranger de dentes.
¹⁴ Porque muitos são chamados, mas poucos, escolhidos.
  A questão do tributo
¹⁵ Então, retirando-se os fariseus, consultaram entre si como o surpreenderiam em alguma palavra.
¹⁶ E enviaram-lhe os seus discípulos, com os herodianos, dizendo: Mestre, bem sabemos que és verdadeiro e ensinas o caminho de Deus, segundo a verdade, sem te importares com quem quer que seja, porque não olhas à aparência dos homens.
¹⁷ Dize-nos, pois, que te parece: é lícito pagar o tributo a César ou não?
¹⁸ Jesus, porém, conhecendo a sua malícia, disse: Por que me experimentais, hipócritas?
¹⁹ Mostrai-me a moeda do tributo. E eles lhe apresentaram um dinheiro.
²⁰ E ele disse-lhes: De quem é esta efígie e esta inscrição?
²¹ Disseram-lhe eles: De César. Então, ele lhes disse: Dai, pois, a César o que é de César e a Deus, o que é de Deus.
²² E eles, ouvindo isso, maravilharam-se e, deixando-o, se retiraram.
²³ No mesmo dia, chegaram junto dele os saduceus, que dizem não haver ressurreição, e o interrogaram,
²⁴ dizendo: Mestre, Moisés disse: Se morrer alguém, não tendo filhos, casará o seu irmão com a mulher dele e suscitará descendência a seu irmão.
²⁵ Ora, houve entre nós sete irmãos; o primeiro, tendo casado, morreu e, não tendo descendência, deixou sua mulher a seu irmão.
²⁶ Da mesma sorte, o segundo, e o terceiro, até ao sétimo;
²⁷ por fim, depois de todos, morreu também a mulher.
²⁸ Portanto, na ressurreição, de qual dos sete será a mulher, visto que todos a possuíram?
²⁹ Jesus, porém, respondendo, disse-lhes: Errais, não conhecendo as Escrituras, nem o poder de Deus.
³⁰ Porque, na ressurreição, nem casam, nem são dados em casamento;mas serão como os anjos no céu.
³¹ E, acerca da ressurreição dos mortos, não tendes lido o que Deus vos declarou, dizendo:
³² Eu sou o Deus de Abraão,o Deus de Isaque e o Deus de Jacó? Ora, Deus não é Deus dos mortos, mas dos vivos.
³³ E, as turbas, ouvindo isso, ficaram maravilhadas da sua doutrina.
  O grande mandamento
³⁴ E os fariseus, ouvindo que ele fizera emudecer os saduceus, reuniram-se no mesmo lugar.
³⁵ E um deles, doutor da lei, interrogou-o para o experimentar, dizendo:
³⁶ Mestre, qual é o grande mandamento da lei?
³⁷ E Jesus disse-lhe: Amarás o Senhor, teu Deus, de todo o teu coração, e de toda a tua alma, e de todo o teu pensamento.
³⁸ Este é o primeiro e grande mandamento.
³⁹ E o segundo, semelhante a este, é:Amarás o teu próximo como a ti mesmo.
⁴⁰ Desses dois mandamentos dependem toda a lei e os profetas.
  Cristo, o Filho de Davi
⁴¹ E, estando reunidos os fariseus, interrogou-os Jesus,
⁴² dizendo: Que pensais vós do Cristo? De quem é filho? Eles disseram-lhe: De Davi.
⁴³ Disse-lhes ele: Como é, então, que Davi, em espírito, lhe chama Senhor, dizendo:
⁴⁴ Disse o Senhor ao meu Senhor:Assenta-te à minha direita, até que eu ponha os teus inimigos por escabelo de teus pés.
⁴⁵ Se Davi, pois, lhe chama Senhor, como é seu filho?
⁴⁶ E ninguém podia responder-lhe uma palavra, nem, desde aquele dia, ousou mais alguém  
`,
            pergunta: {
                texto: "Qual é o primeiro e grande mandamento?",
                opcoes: [
                    { numero: 1, texto: "Amarás o Senhor teu Deus de todo o teu coração", correta: true },
                    { numero: 2, texto: "Não matarás", correta: false },
                    { numero: 3, texto: "Honrarás pai e mãe", correta: false },
                    { numero: 4, texto: "Não dirás falso testemunho", correta: false }
                ],
                explicacao: "Jesus resumiu toda a Lei neste mandamento e no amor ao próximo.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 22:37-38"
            }
        },
        23: {
            titulo: "Ais contra os Escribas e Fariseus",
            texto: `
¹ Então, falou Jesus à multidão e aos seus discípulos,
² dizendo: Na cadeira de Moisés, estão assentados os escribas e fariseus.
³ Observai, pois, e praticai tudo o que vos disserem; mas não procedais em conformidade com as suas obras,porque dizem e não praticam.
⁴ Pois atam fardos pesados e difíceis de suportar,e os põem sobre os ombros dos homens; eles, porém, nem com o dedo querem movê-los.
⁵ E fazem todas as obrasa fim de serem vistos pelos homens, pois trazem largos filactérios, e alargam as franjasdas suas vestes,
⁶ e amam os primeiros lugares nas ceias,e as primeiras cadeiras nas sinagogas,
⁷ e as saudações nas praças, e o serem chamados pelos homens: — Rabi, Rabi.
⁸ Vós, porém, não queirais ser chamados Rabi,porque um só é o vosso Mestre, a saber, o Cristo, e todos vós sois irmãos.
⁹ E a ninguém na terra chameis vosso pai,porque um só é o vosso Pai, o qual está nos céus.
¹⁰ Nem vos chameis mestres, porque um só é o vosso Mestre, que é o Cristo.
¹¹ Porémo maior dentre vós será vosso servo.
¹² E o que a si mesmo se exaltarserá humilhado; e o que a si mesmo se humilhar será exaltado.
¹³ Mas ai de vós, escribas e fariseus, hipócritas!Pois que fechais aos homens o Reino dos céus; e nem vós entrais, nem deixais entrar aos que estão entrando.
¹⁴ Ai de vós, escribas e fariseus,hipócritas! Pois que devorais as casas das viúvas, sob pretexto de prolongadas orações; por isso, sofrereis mais rigoroso juízo.
¹⁵ Ai de vós, escribas e fariseus, hipócritas! Pois que percorreis o mar e a terra para fazer um prosélito; e, depois de o terdes feito, o fazeis filho do inferno duas vezes mais do que vós.
¹⁶ Ai de vós, condutores cegos!Pois que dizeis: Qualquer que jurar pelo templo, isso nada é; mas o que jurar pelo ouro do templo, esse é devedor.
¹⁷ Insensatos e cegos! Pois qual é maior: o ouroou o templo, que santifica o ouro?
¹⁸ E aquele que jurar pelo altar, isso nada é; mas aquele que jurar pela oferta que está sobre o altar, esse é devedor.
¹⁹ Insensatos e cegos! Pois qual é maior: a ofertaou o altar, que santifica a oferta?
²⁰ Portanto, o que jurar pelo altar jura por ele e por tudo o que sobre ele está.
²¹ E o que jurar pelo templo jura por elee por aquele que nele habita.
²² E o que jurar pelo céu jura pelo trono de Deuse por aquele que está assentado nele.
²³ Ai de vós, escribas e fariseus, hipócritas!Pois que dais o dízimo da hortelã, do endro e do cominho e desprezais o mais importante da lei, o juízo, a misericórdia e a fé; deveis, porém, fazer essas coisas e não omitir aquelas.
²⁴ Condutores cegos! Coais um mosquito e engolis um camelo.
²⁵ Ai de vós, escribas e fariseus, hipócritas!Pois que limpais o exterior do copo e do prato, mas o interior está cheio de rapina e de iniquidade.
²⁶ Fariseu cego! Limpa primeiro o interior do copo e do prato, para que também o exterior fique limpo.
²⁷ Ai de vós, escribas e fariseus, hipócritas!Pois que sois semelhantes aos sepulcros caiados, que por fora realmente parecem formosos, mas interiormente estão cheios de ossos de mortos e de toda imundícia.
²⁸ Assim, também vós exteriormente pareceis justos aos homens, mas interiormente estais cheios de hipocrisia e de iniquidade.
²⁹ Ai de vós,escribas e fariseus, hipócritas! Pois que edificais os sepulcros dos profetas e adornais os monumentos dos justos
³⁰ e dizeis: Se existíssemos no tempo de nossos pais, nunca nos associaríamos com eles para derramar o sangue dos profetas.
³¹ Assim,vós mesmos testificais que sois filhos dos que mataram os profetas.
³² Encheivós, pois, a medida de vossos pais.
³³ Serpentes,raça de víboras! Como escapareis da condenação do inferno?
³⁴ Portanto, eis queeu vos envio profetas, sábios e escribas; e a uns deles matareis e crucificareis; e a outros deles açoitareis nas vossas sinagogas e os perseguireis de cidade em cidade,
³⁵ para que sobre vós caia todo o sangue justo,que foi derramado sobre a terra, desde o sangue de Abel, o justo, até ao sangue de Zacarias, filho de Baraquias, que matastes entre o santuário e o altar.
³⁶ Em verdade vos digo que todas essas coisas hão de vir sobre esta geração.
³⁷ Jerusalém, Jerusalém,que matas os profetas e apedrejas os que te são enviados! Quantas vezes quis eu ajuntar os teus filhos, como a galinha ajunta os seus pintos debaixo das asas, e tu não quiseste!
³⁸ Eis que a vossa casa vos ficará deserta.
³⁹ Porque eu vos digo que, desde agora, me não vereis mais, até que digais:Bendito o que vem em nome do Senhor 

`,
            pergunta: {
                texto: "Como Jesus chamou os escribas e fariseus por causa da sua aparência externa?",
                opcoes: [
                    { numero: 1, texto: "Sepulcros caiados", correta: true },
                    { numero: 2, texto: "Luzes do mundo", correta: false },
                    { numero: 3, texto: "Pedras vivas", correta: false },
                    { numero: 4, texto: "Justos", correta: false }
                ],
                explicacao: "Por fora pareciam belos, mas por dentro estavam cheios de hipocrisia.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 23:27"
            }
        },
        24: {
            titulo: "O Sermão Profético",
            texto: `
¹ E, quando Jesus ia saindo do templo, aproximaram-se dele os seus discípulos para lhe mostrarem a estrutura do templo.
² Jesus, porém, lhes disse: Não vedes tudo isto? Em verdade vos digoque não ficará aqui pedra sobre pedra que não seja derribada.
³ E, estando assentado no monte das Oliveiras, chegaram-se a ele os seus discípulos, em particular, dizendo: Dize-nos quando serão essas coisas e que sinal haverá da tua vinda e do fim do mundo?
⁴ E Jesus, respondendo, disse-lhes: Acautelai-vos, que ninguém vos engane,
⁵ porquemuitos virão em meu nome, dizendo: Eu sou o Cristo; e enganarão a muitos.
⁶ E ouvireis de guerras e de rumores de guerras; olhai, não vos assusteis, porque é mister que isso tudo aconteça, mas ainda não é o fim.
⁷ Porquanto se levantará nação contra nação, e reino contra reino,e haverá fomes, e pestes, e terremotos, em vários lugares.
⁸ Mas todas essas coisas são o princípio das dores.
⁹ Então, vos hão de entregar para serdes atormentadose matar-vos-ão; e sereis odiados de todas as gentes por causa do meu nome.
¹⁰ Nesse tempo, muitos serão escandalizados,e trair-se-ão uns aos outros, e uns aos outros se aborrecerão.
¹¹ E surgirão muitos falsos profetase enganarão a muitos.
¹² E, por se multiplicar a iniquidade, o amor de muitos se esfriará.
¹³ Mas aquele que perseverar até ao fimserá salvo.
¹⁴ E este evangelho do Reino será pregado em todo o mundo,em testemunho a todas as gentes, e então virá o fim.
  O sermão continua. A grande tribulação
¹⁵ Quando, pois, virdes que a abominação da desolação,de que falou o profeta Daniel, está no lugar santo (quem lê, que entenda),
¹⁶ então, os que estiverem na Judeia, que fujam para os montes;
¹⁷ e quem estiver sobre o telhado não desça a tirar alguma coisa de sua casa;
¹⁸ e quem estiver no campo não volte atrás a buscar as suas vestes.
¹⁹ Mas ai das grávidase das que amamentarem naqueles dias!
²⁰ E orai para que a vossa fuga não aconteça no inverno nem no sábado,
²¹ porquehaverá, então, grande aflição, como nunca houve desde o princípio do mundo até agora, nem tampouco haverá jamais.
²² E, se aqueles dias não fossem abreviados, nenhuma carne se salvaria;mas, por causa dos escolhidos, serão abreviados aqueles dias.
²³ Então, se alguém vos disser: Eis queo Cristo está aqui ou ali, não lhe deis crédito,
²⁴ porquesurgirão falsos cristos e falsos profetas e farão tão grandes sinais e prodígios, que, se possível fora, enganariam até os escolhidos.
²⁵ Eis que eu vo-lo tenho predito.
²⁶ Portanto, se vos disserem: Eis que ele está no deserto, não saiais; ou: Eis que ele está no interior da casa, não acrediteis.
²⁷ Porque, assim como o relâmpagosai do oriente e se mostra até ao ocidente, assim será também a vinda do Filho do Homem.
²⁸ Pois onde estiver o cadáver,aí se ajuntarão as águias.
  O sermão continua. A vinda do Filho do Homem
²⁹ E, logo depois da aflição daqueles dias,o sol escurecerá, e a lua não dará a sua luz, e as estrelas cairão do céu, e as potências dos céus serão abaladas.
³⁰ Então, aparecerá no céuo sinal do Filho do Homem; e todas as tribos da terra se lamentarão e verão o Filho do Homem vindo sobre as nuvens do céu, com poder e grande glória.
³¹ E ele enviará os seus anjos com rijo clamor de trombeta,os quais ajuntarão os seus escolhidos desde os quatro ventos, de uma à outra extremidade dos céus.
³² Aprendei, pois, esta parábola da figueira:quando já os seus ramos se tornam tenros e brotam folhas, sabeis que está próximo o verão.
³³ Igualmente, quando virdes todas essas coisas,sabei que ele está próximo, às portas.
³⁴ Em verdade vos digo que não passará esta geraçãosem que todas essas coisas aconteçam.
³⁵ O céu e a terra passarão, masas minhas palavras não hão de passar.
 O sermão continua. Exortação à vigilância
³⁶ Porém daquele Dia e hora ninguém sabe,nem os anjos dos céus, nem o Filho, mas unicamente meu Pai.
³⁷ E, como foi nos dias de Noé, assim será também a vinda do Filho do Homem.
³⁸ Porquanto, assim como,nos dias anteriores ao dilúvio, comiam, bebiam, casavam e davam-se em casamento, até ao dia em que Noé entrou na arca,
³⁹ e não o perceberam, até que veio o dilúvio, e os levou a todos, assim será também a vinda do Filho do Homem.
⁴⁰ Então,estando dois no campo, será levado um, e deixado o outro;
⁴¹ Estando duas moendo no moinho, será levada uma, e deixada outra.
⁴² Vigiai, pois,porque não sabeis a que hora há de vir o vosso Senhor.
⁴³ Mas considerai isto:se o pai de família soubesse a que vigília da noite havia de vir o ladrão, vigiaria e não deixaria que fosse arrombada a sua casa.
⁴⁴ Por isso,estai vós apercebidos também, porque o Filho do Homem há de vir à hora em que não penseis.
 O sermão continua. A parábola dos dois servos
⁴⁵ Quem é, pois, o servo fiel e prudente,que o Senhor constituiu sobre a sua casa, para dar o sustento a seu tempo?
⁴⁶ Bem-aventurado aquele servo que o Senhor,quando vier, achar servindo assim.
⁴⁷ Em verdade vos digoque o porá sobre todos os seus bens.
⁴⁸ Porém, se aquele mau servo disser consigo: O meu senhor tarde virá,
⁴⁹ e começar a espancar os seus conservos, e a comer, e a beber com os bêbados,
⁵⁰ virá o senhor daquele servo num dia em que o não espera e à hora em que ele não sabe,
⁵¹ e separá-lo-á, e destinará a sua parte com os hipócritas;ali haverá pranto e ranger de  

`,
            pergunta: {
                texto: "O que Jesus disse sobre o dia e a hora da Sua vinda?",
                opcoes: [
                    { numero: 1, texto: "Ninguém sabe, nem os anjos, senão só o Pai", correta: true },
                    { numero: 2, texto: "Será no próximo ano", correta: false },
                    { numero: 3, texto: "Será de dia", correta: false },
                    { numero: 4, texto: "Todos saberão a data exata", correta: false }
                ],
                explicacao: "Jesus exorta à vigilância constante porque a Sua vinda será inesperada.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 24:36"
            }
        },
        25: {
            titulo: "Parábola das Dez Virgens e Talentos",
            texto: `
¹ Então, o Reino dos céus será semelhante a dez virgens que, tomandoas suas lâmpadas, saíram ao encontro doesposo.
² E cinco delas eram prudentes,e cinco, loucas.
³ As loucas, tomando as suas lâmpadas, não levaram azeite consigo.
⁴ Mas as prudentes levaram azeite em suas vasilhas, com as suas lâmpadas.
⁵ E, tardando o esposo, tosquenejaram todase adormeceram.
⁶ Mas, à meia-noite, ouviu-se um clamor:Aí vem o esposo! Saí-lhe ao encontro!
⁷ Então, todas aquelas virgens se levantarame prepararam as suas lâmpadas.
⁸ E as loucas disseram às prudentes: Dai-nos do vosso azeite, porque as nossas lâmpadas se apagam.
⁹ Mas as prudentes responderam, dizendo: Não seja caso que nos falte a nós e a vós; ide, antes, aos que o vendem e comprai-o para vós.
¹⁰ E, tendo elas ido comprá-lo, chegou o esposo, e as que estavam preparadas entraram com ele para as bodas,e fechou-se a porta.
¹¹ E, depois, chegaram também as outras virgens, dizendo:Senhor, senhor, abre-nos a porta!
¹² E ele, respondendo, disse: Em verdade vos digoque vos não conheço.
¹³ Vigiai, pois,porque não sabeis o Dia nem a hora em que o Filho do Homem há de vir.
  O sermão continua. A parábola dos dez talentos
¹⁴ Porque isto é também como um homem que, partindo para fora da terra, chamou os seus servos, e entregou-lhes os seus bens,
¹⁵ e a um deu cinco talentos, e a outro, dois, e a outro, um, a cada um segundo a sua capacidade,e ausentou-se logo para longe.
¹⁶ E, tendo ele partido, o que recebera cinco talentos negociou com eles e granjeou outros cinco talentos.
¹⁷ Da mesma sorte, o que recebera dois granjeou também outros dois.
¹⁸ Mas o que recebera um foi, e cavou na terra, e escondeu o dinheiro do seu senhor.
¹⁹ E, muito tempo depois, veio o senhor daqueles servos e ajustou contas com eles.
²⁰ Então, aproximou-se o que recebera cinco talentos e trouxe-lhe outros cinco talentos, dizendo: Senhor, entregaste-me cinco talentos; eis aqui outros cinco talentos que ganhei com eles.
²¹ E o seu senhor lhe disse: Bem está, servo bom e fiel.Sobre o pouco foste fiel, sobre muito te colocarei;entra no gozo do teu senhor.
²² E, chegando também o que tinha recebido dois talentos, disse: Senhor, entregaste-me dois talentos; eis que com eles ganhei outros dois talentos.
²³ Disse-lhe o seu senhor:Bem está, bom e fiel servo. Sobre o pouco foste fiel, sobre muito te colocarei; entra no gozo do teu senhor.
²⁴ Mas, chegando também o que recebera um talento disse: Senhor, eu conhecia-te, que és um homem duro, que ceifas onde não semeaste e ajuntas onde não espalhaste;
²⁵ e, atemorizado, escondi na terra o teu talento; aqui tens o que é teu.
²⁶ Respondendo, porém, o seu senhor, disse-lhe: Mau e negligente servo; sabes que ceifo onde não semeei e ajunto onde não espalhei;
²⁷ devias, então, ter dado o meu dinheiro aos banqueiros, e, quando eu viesse, receberia o que é meu com os juros.
²⁸ Tirai-lhe, pois, o talento e dai-o ao que tem os dez talentos.
²⁹ Porque a qualquer que tiver será dado,e terá em abundância; mas ao que não tiver, até o que tem ser-lhe-á tirado.
³⁰ Lançai, pois, o servo inútil nas trevas exteriores; ali, haverá pranto eranger de dentes.
  O fim do sermão profético. A vida eterna e o castigo eterno
³¹ E, quando o Filho do Homem vier em sua glória,e todos os santos anjos, com ele, então, se assentará no trono da sua glória;
³² e todas as nações serão reunidas diante dele, e apartará uns dos outros,como o pastor aparta dos bodes as ovelhas.
³³ E porá as ovelhas à sua direita, mas os bodes à esquerda.
³⁴ Então, dirá o Rei aos que estiverem à sua direita:Vinde, benditos de meu Pai, possuí por herança o Reino que vos está preparado desde a fundação do mundo;
³⁵ porque tive fome,e destes-me de comer; tive sede, e destes-me de beber; era estrangeiro, e hospedastes-me;
³⁶ estava nu,e vestistes-me; adoeci, e visitastes-me; estive na prisão, e fostes ver-me.
³⁷ Então, os justos lhe responderão, dizendo: Senhor, quando te vimos com fome e te demos de comer? Ou com sede e te demos de beber?
³⁸ E, quando te vimos estrangeiro e te hospedamos? Ou nu e te vestimos?
³⁹ E, quando te vimos enfermo ou na prisão e fomos ver-te?
⁴⁰ E, respondendo o Rei, lhes dirá: Em verdade vos digoque, quando o fizestes a um destes meus pequeninos irmãos, a mim o fizestes.
⁴¹ Então, dirá também aos que estiverem à sua esquerda:Apartai-vos de mim, malditos, para o fogo eterno, preparado para o diabo e seus anjos;
⁴² porque tive fome, e não me destes de comer; tive sede, e não me destes de beber;
⁴³ sendo estrangeiro, não me recolhestes; estando nu, não me vestistes; e estando enfermo e na prisão, não me visitastes.
⁴⁴ Então, eles também lhe responderão, dizendo: Senhor, quando te vimos com fome, ou com sede, ou estrangeiro, ou nu, ou enfermo, ou na prisão e não te servimos?
⁴⁵ Então, lhes responderá, dizendo: Em verdade vos digo que, quandoa um destes pequeninos o não fizestes, não o fizestes a mim.
⁴⁶ E irão estespara o tormento eterno, mas os justos, para a vida eterna 

`,
            pergunta: {
                texto: "Qual foi o erro das cinco virgens loucas?",
                opcoes: [
                    { numero: 1, texto: "Não levaram azeite reserva", correta: true },
                    { numero: 2, texto: "Adormeceram", correta: false },
                    { numero: 3, texto: "Perderam as lâmpadas", correta: false },
                    { numero: 4, texto: "Foram ao mercado", correta: false }
                ],
                explicacao: "A falta de preparação impediu-as de entrar nas bodas com o noivo.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 25:3"
            }
        },
        26: {
            titulo: "A Última Ceia e a Prisão",
            texto: `  
¹ E aconteceu que, quando Jesus concluiu todos esses discursos, disse aos seus discípulos:
² Bem sabeis que, daqui a dois dias, éa Páscoa, e o Filho do Homem será entregue para ser crucificado.
³ Depois, os príncipes dos sacerdotes, e os escribas, e os anciãos do povo reuniram-se na sala do sumo sacerdote, o qual se chamava Caifás,
⁴ e consultaram-se mutuamente para prenderem Jesus com dolo e o matarem.
⁵ Mas diziam: Não durante a festa, para que não haja alvoroço entre o povo.
  O jantar em Betânia
⁶ E, estando Jesus em Betânia, em casa de Simão, o leproso,
⁷ aproximou-se dele uma mulher com um vaso de alabastro, com unguento de grande valor, e derramou-lho sobre a cabeça, quando ele estava assentado à mesa.
⁸ E os seus discípulos, vendo isso, indignaram-se, dizendo: Por que este desperdício?
⁹ Pois este unguento podia vender-se por grande preço e dar-se o dinheiro aos pobres.
¹⁰ Jesus, porém, conhecendo isso, disse-lhes: Por que afligis esta mulher? Pois praticou uma boa ação para comigo.
¹¹ Porquantosempre tendes convosco os pobres, mas a mim não me haveis de ter sempre.
¹² Ora, derramando ela este unguento sobre o meu corpo, fê-lo preparando-me para o meu sepultamento.
¹³ Em verdade vos digo que, onde quer que este evangelho for pregado, em todo o mundo, também será referido o que ela fez para memória sua.
 O preço da traição
¹⁴ Então, um dos doze, chamado Judas Iscariotes, foi ter com os príncipes dos sacerdotes
¹⁵ e disse: Que me quereis dar, e eu vo-lo entregarei? E eles lhe pesaram trinta moedas de prata.
¹⁶ E, desde então, buscava oportunidade para o entregar.
  A última Páscoa e a Santa Ceia
¹⁷ E, no primeiro dia da Festa dos Pães Asmos, chegaram os discípulos junto de Jesus, dizendo: Onde queres que preparemos a comida da Páscoa?
¹⁸ E ele disse: Ide à cidade a um certo homem e dizei-lhe: O Mestre diz: O meu tempo está próximo; em tua casa celebrarei a Páscoa com os meus discípulos.
¹⁹ E os discípulos fizeram como Jesus lhes ordenara e prepararam a Páscoa.
²⁰ E, chegada a tarde, assentou-se à mesa com os doze.
²¹ E, enquanto eles comiam, disse: Em verdade vos digo que um de vós me há de trair.
²² E eles, entristecendo-se muito, começaram um por um a dizer-lhe: Porventura, sou eu, Senhor?
²³ E ele, respondendo, disse: O que mete comigo a mão no prato, esse me há de trair.
²⁴ Em verdade o Filho do Homem vai, como acercadele está escrito, mas ai daquele homem por quem o Filho do Homem é traído! Bom seria para esse homem se não houvera nascido.
²⁵ E, respondendo Judas, o que o traía, disse: Porventura, sou eu, Rabi? Ele disse: Tu o disseste.
²⁶ Enquanto comiam, Jesus tomou o pão, e, abençoando-o, o partiu, e o deu aos discípulos, e disse: Tomai, comei, isto é o meu corpo.
²⁷ E, tomando o cálice e dando graças, deu-lho, dizendo: Bebei dele todos.
²⁸ Porque isto é o meu sangue,o sangue doNovo Testamento, que é derramado por muitos, para remissão dos pecados.
²⁹ E digo-vos que, desde agora, não bebereideste fruto da vide até àquele Dia em que o beba de novo convosco no Reino de meu Pai.
³⁰ E, tendo cantado um hino, saíram para o monte das Oliveiras.
  Pedro é avisado
³¹ Então, Jesus lhes disse: Todos vós esta noite vos escandalizareis em mim,porque está escrito: Ferirei o pastor, e as ovelhas do rebanho se dispersarão.
³² Mas, depois de eu ressuscitar,irei adiante de vós para a Galileia.
³³ Mas Pedro, respondendo, disse-lhe: Ainda que todos se escandalizem em ti, eu nunca me escandalizarei.
³⁴ Disse-lhe Jesus: Em verdade te digo que, nesta mesma noite, antes que o galo cante, três vezes me negarás.
³⁵ Disse-lhe Pedro: Ainda que me seja necessário morrer contigo, não te negarei. E todos os discípulos disseram o mesmo.
  Jesus no Getsêmani
³⁶ Então, chegou Jesus com eles a um lugar chamado Getsêmani e disse a seus discípulos: Assentai-vos aqui, enquanto vou além orar.
³⁷ E, levando consigo Pedro e os dois filhos de Zebedeu, começou a entristecer-se e a angustiar-se muito.
³⁸ Então, lhes disse: A minha alma está cheia de tristeza até à morte; ficai aqui e vigiai comigo.
³⁹ E, indo um pouco adiante, prostrou-se sobre o seu rosto, orando e dizendo: Meu Pai,se é possível, passa de mim este cálice; todavia, não seja como eu quero, mas como tu queres.
⁴⁰ E, voltando para os seus discípulos, achou-os adormecidos; e disse a Pedro: Então, nem uma hora pudeste vigiar comigo?
⁴¹ Vigiai e orai,para que não entreis em tentação; na verdade, o espírito está pronto, mas a carne é fraca.
⁴² E, indo segunda vez, orou, dizendo: Meu Pai, se este cálice não pode passar de mim sem eu o beber, faça-se a tua vontade.
⁴³ E, voltando, achou-os outra vez adormecidos, porque os seus olhos estavam carregados.
⁴⁴ E, deixando-os de novo, foi orar pela terceira vez, dizendo as mesmas palavras.
⁴⁵ Então, chegou junto dos seus discípulos e disse-lhes: Dormi, agora, e repousai; eis que é chegada a hora, e o Filho do Homem será entregue nas mãos dos pecadores.
⁴⁶ Levantai-vos, partamos; eis que é chegado o que me trai.
  Jesus é preso
⁴⁷ E, estando ele ainda a falar, eis que chegou Judas, um dos doze, e com ele, grande multidão com espadas e porretes, vinda da parte dos príncipes dos sacerdotes e dos anciãos do povo.
⁴⁸ E o traidor tinha-lhes dado um sinal, dizendo: O que eu beijar é esse; prendei-o.
⁴⁹ E logo, aproximando-se de Jesus, disse: Eu te saúdo, Rabi. E beijou-o.
⁵⁰ Jesus, porém, lhe disse: Amigo, a que vieste? Então, aproximando-se eles, lançaram mão de Jesus e o prenderam.
⁵¹ E eis que um dos que estavam com Jesus, estendendo a mão, puxou da espada e, ferindo o servo do sumo sacerdote, cortou-lhe uma orelha.
⁵² Então, Jesus disse-lhe: Mete no seu lugar a tua espada, porquetodos os que lançarem mão da espada à espada morrerão.
⁵³ Ou pensas tu que eu não poderia, agora, orar a meu Pai e que ele não me daria mais de dozelegiões de anjos?
⁵⁴ Como, pois, se cumpririam as Escrituras,que dizem que assim convém que aconteça?
⁵⁵ Então, disse Jesus à multidão: Saístes, como para um salteador, com espadas e porretes, para me prender? Todos os dias me assentava junto de vós, ensinando no templo, e não me prendestes.
⁵⁶ Mas tudo isso aconteceu para que se cumpram as Escrituras dos profetas. Então, todos os discípulos, deixando-o, fugiram.
  Jesus perante o Sinédrio
⁵⁷ E os que prenderam Jesus o conduziram à casa do sumo sacerdote Caifás, onde os escribas e os anciãos estavam reunidos.
⁵⁸ E Pedro o seguiu de longe até ao pátio do sumo sacerdote e, entrando, assentou-se entre os criados, para ver o fim.
⁵⁹ Ora, os príncipes dos sacerdotes, e os anciãos, e todo o conselho buscavam falso testemunho contra Jesus, para poderem dar-lhe a morte,
⁶⁰ e não o achavam, apesar de se apresentarem muitas testemunhas falsas, mas, por fim, chegaram duas
⁶¹ e disseram: Este disse: Eu posso derribar o templo de Deus e reedificá-lo em três dias.
⁶² E, levantando-se o sumo sacerdote, disse-lhe: Não respondes coisa alguma ao que estes depõem contra ti?
⁶³ E Jesus, porém, guardava silêncio. E, insistindo o sumo sacerdote, disse-lhe: Conjuro-te pelo Deus vivo que nos digas se tu és o Cristo, o Filho de Deus.
⁶⁴ Disse-lhes Jesus: Tu o disseste; digo-vos, porém, que vereisem breve o Filho do Homem assentado à direita do Todo-Poderoso e vindo sobre as nuvens do céu.
⁶⁵ Então, o sumo sacerdote rasgou as suas vestes, dizendo: Blasfemou; para que precisamos ainda de testemunhas? Eis que bem ouvistes, agora, a sua blasfêmia.
⁶⁶ Que vos parece? E eles, respondendo, disseram: É réu de morte.
⁶⁷ Então, cuspiram-lhe no rosto e lhe davam murros, e outros o esbofeteavam,
⁶⁸ dizendo: Profetiza-nos, Cristo, quem é o que te bateu?
  Pedro nega a Jesus
⁶⁹ Ora, Pedro estava assentado fora, no pátio; e, aproximando-se dele uma criada, disse: Tu também estavas com Jesus, o galileu.
⁷⁰ Mas ele negou diante de todos, dizendo: Não sei o que dizes.
⁷¹ E, saindo para o vestíbulo, outra criada o viu e disse aos que ali estavam: Este também estava com Jesus, o Nazareno.
⁷² E ele negou outra vez, com juramento: Não conheço tal homem.
⁷³ E, logo depois, aproximando-se os que ali estavam, disseram a Pedro: Verdadeiramente, também tu és deles, pois a tua fala te denuncia.
⁷⁴ Então, começou ele a praguejar e a jurar, dizendo: Não conheço esse homem. E imediatamente o galo cantou.
⁷⁵ E lembrou-se Pedro das palavras de Jesus, que lhe dissera: Antes que o galo cante, três vezes me negarás. E, saindo dali, chorou  
`,
            pergunta: {
                texto: "Quem traiu Jesus por trinta moedas de prata?",
                opcoes: [
                    { numero: 1, texto: "Judas Iscariotes", correta: true },
                    { numero: 2, texto: "Pedro", correta: false },
                    { numero: 3, texto: "Tomé", correta: false },
                    { numero: 4, texto: "João", correta: false }
                ],
                explicacao: "Judas indicou Jesus com um beijo no jardim do Getsémani.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 26:14-15"
            }
        },
        27: {
            titulo: "A Crucificação e Morte",
            texto: `
¹ E, chegando a manhã, todos os príncipes dos sacerdotes e os anciãos do povo formavam juntamente conselho contra Jesus, para o matarem.
² E, manietando-o, o levaram e o entregaram ao governador Pôncio Pilatos.
³ Então, Judas, o que o traíra, vendo que fora condenado, trouxe, arrependido, as trinta moedas de prata aos príncipes dos sacerdotes e aos anciãos,
⁴ dizendo: Pequei, traindo sangue inocente. Eles, porém, disseram: Que nos importa? Isso é contigo.
⁵ E ele, atirando para o templo as moedas de prata, retirou-se e foi-se enforcar.
⁶ E os príncipes dos sacerdotes, tomando as moedas de prata, disseram: Não é lícito metê-las no cofre das ofertas, porque são preço de sangue.
⁷ E, tendo deliberado em conselho, compraram com elas o campo de um oleiro, para sepultura dos estrangeiros.
⁸ Por isso, foi chamado aquele campo, até ao dia de hoje, Campo de Sangue.
⁹ Então, se realizou o que vaticinara o profeta Jeremias: Tomaram as trinta moedas de prata, preço do que foi avaliado, que certos filhos de Israel avaliaram.
¹⁰ E deram-nas pelo campo do oleiro, segundo o que o Senhor determinou.
  Jesus perante Pilatos
¹¹ E foi Jesus apresentado ao governador, e o governador o interrogou, dizendo: És tu o Rei dos judeus? E disse-lhe Jesus: Tu o dizes.
¹² E, sendo acusado pelos príncipes dos sacerdotes e pelos anciãos, nada respondeu.
¹³ Disse-lhe, então, Pilatos: Não ouves quanto testificam contra ti?
¹⁴ E nem uma palavra lhe respondeu, de sorte que o governador estava muito maravilhado.
¹⁵ Ora, por ocasião da festa, costumava o governador soltar um preso, escolhendo o povo aquele que quisesse.
¹⁶ E tinham, então, um preso bem-conhecido, chamado Barrabás.
¹⁷ Portanto, estando eles reunidos, disse-lhes Pilatos: Qual quereis que vos solte? Barrabás ou Jesus, chamado Cristo?
¹⁸ Porque sabia que por inveja o haviam entregado.
¹⁹ E, estando ele assentado no tribunal, sua mulher mandou-lhe dizer: Não entres na questão desse justo, porque num sonho muito sofri por causa dele.
²⁰ Mas os príncipes dos sacerdotes e os anciãos persuadiram à multidão que pedisse Barrabás e matasse Jesus.
²¹ E, respondendo o governador, disse-lhes: Qual desses dois quereis vós que eu solte? E eles disseram: Barrabás.
²² Disse-lhes Pilatos: Que farei, então, de Jesus, chamado Cristo? Disseram-lhe todos: Seja crucificado!
²³ O governador, porém, disse: Mas que mal fez ele? E eles mais clamavam, dizendo: Seja crucificado!
²⁴ Então, Pilatos, vendo que nada aproveitava, antes o tumulto crescia, tomando água, lavou as mãos diante da multidão, dizendo: Estou inocente do sangue deste justo; considerai isso.
²⁵ E, respondendo todo o povo, disse: O seu sangue caia sobre nós e sobre nossos filhos.
²⁶ Então, soltou-lhes Barrabás e, tendo mandado açoitar a Jesus, entregou-o para ser crucificado.
²⁷ E logo os soldados do governador, conduzindo Jesus à audiência, reuniram junto dele toda a coorte.
²⁸ E, despindo-o, o cobriram com uma capa escarlate.
²⁹ E, tecendo uma coroa de espinhos, puseram-lha na cabeça e, em sua mão direita, uma cana; e, ajoelhando diante dele, o escarneciam, dizendo: Salve, Rei dos judeus!
³⁰ E, cuspindo nele, tiraram-lhe a cana e batiam-lhe com ela na cabeça.
³¹ E, depois de o haverem escarnecido, tiraram-lhe a capa, vestiram-lhe as suas vestes e o levaram para ser crucificado.
  A crucificação
³² E, quando saíam, encontraram um homem cireneu, chamado Simão, a quem constrangeram a levar a sua cruz.
³³ E, chegando ao lugar chamado Gólgota, que significa Lugar da Caveira,
³⁴ deram-lhe a beber vinho misturado com fel; mas ele, provando-o, não quis beber.
³⁵ E, havendo-o crucificado, repartiram as suas vestes, lançando sortes, para que se cumprisse o que foi dito pelo profeta: Repartiram entre si as minhas vestes, e sobre a minha túnica lançaram sortes.
³⁶ E, assentados, o guardavam ali.
³⁷ E, por cima da sua cabeça, puseram escrita a sua acusação: Este é Jesus, O Rei dos Judeus.
³⁸ E foram crucificados com ele dois salteadores, um, à direita, e outro, à esquerda.
³⁹ E os que passavam blasfemavam dele, meneando a cabeça
⁴⁰ e dizendo: Tu, que destróis o templo e, em três dias, o reedificas, salva-te a ti mesmo; se és o Filho de Deus, desce da cruz.
⁴¹ E da mesma maneira também os príncipes dos sacerdotes, com os escribas, e anciãos, e fariseus, escarnecendo, diziam:
⁴² Salvou os outros e a si mesmo não pode salvar-se. Se é o Rei de Israel, desça, agora, da cruz, e creremos nele;
⁴³ confiou em Deus; livre-o agora, se o ama; porque disse: Sou Filho de Deus.
⁴⁴ E o mesmo lhe lançaram também em rosto os salteadores que com ele estavam crucificados.
⁴⁵ E, desde a hora sexta, houve trevas sobre toda a terra, até à hora nona.
⁴⁶ E, perto da hora nona, exclamou Jesus em alta voz, dizendo: Eli, Eli, lemá sabactâni, isto é, Deus meu, Deus meu, por que me desamparaste?
⁴⁷ E alguns dos que ali estavam, ouvindo isso, diziam: Este chama por Elias.
⁴⁸ E logo um deles, correndo, tomou uma esponja, e embebeu-a em vinagre, e, pondo-a numa cana, dava-lhe de beber.
⁴⁹ Os outros, porém, diziam: Deixa, vejamos se Elias vem livrá-lo.
⁵⁰ E Jesus, clamando outra vez com grande voz, entregou o espírito.
⁵¹ E eis que o véu do templo se rasgou em dois, de alto a baixo; e tremeu a terra, e fenderam-se as pedras.
⁵² E abriram-se os sepulcros, e muitos corpos de santos que dormiam foram ressuscitados;
⁵³ E, saindo dos sepulcros, depois da ressurreição dele, entraram na Cidade Santa e apareceram a muitos.
⁵⁴ E o centurião e os que com ele guardavam a Jesus, vendo o terremoto e as coisas que haviam sucedido, tiveram grande temor e disseram: Verdadeiramente, este era o Filho de Deus.
⁵⁵ E estavam ali, olhando de longe, muitas mulheres que tinham seguido Jesus desde a Galileia, para o servir,
⁵⁶ entre as quais estavam Maria Madalena, e Maria, mãe de Tiago e de José, e a mãe dos filhos de Zebedeu.
  A sepultura de Jesus
⁵⁷ E, vinda já a tarde, chegou um homem rico de Arimateia, por nome José, que também era discípulo de Jesus.
⁵⁸ Este foi ter com Pilatos e pediu-lhe o corpo de Jesus. Então, Pilatos mandou que o corpo lhe fosse dado.
⁵⁹ E José, tomando o corpo, envolveu-o num fino e limpo lençol,
⁶⁰ e o pôs no seu sepulcro novo, que havia aberto em rocha, e, rolando uma grande pedra para a porta do sepulcro, foi-se.
⁶¹ E estavam ali Maria Madalena e a outra Maria, assentadas defronte do sepulcro.
⁶² E, no dia seguinte, que é o dia depois da Preparação, reuniram-se os príncipes dos sacerdotes e os fariseus em casa de Pilatos,
⁶³ dizendo: Senhor, lembramo-nos de que aquele enganador, vivendo ainda, disse: Depois de três dias, ressuscitarei.
⁶⁴ Manda, pois, que o sepulcro seja guardado com segurança até ao terceiro dia; não se dê o caso que os seus discípulos vão de noite, e o furtem, e digam ao povo: Ressuscitou dos mortos; e assim o último erro será pior do que o primeiro.
⁶⁵ E disse-lhes Pilatos: Tendes a guarda; ide, guardai-o como entenderdes.
⁶⁶ E, indo eles, seguraram o sepulcro com a guarda,  
`,
            pergunta: {
                texto: "Quem era o governador romano que condenou Jesus?",
                opcoes: [
                    { numero: 1, texto: "Pôncio Pilatos", correta: true },
                    { numero: 2, texto: "Herodes", correta: false },
                    { numero: 3, texto: "César", correta: false },
                    { numero: 4, texto: "Félix", correta: false }
                ],
                explicacao: "Pilatos lavou as mãos, tentando eximir-se da responsabilidade.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 27:24"
            }
        },
        28: {
            titulo: "A Ressurreição e a Grande Comissão",
            texto: `
¹ E, no fim do sábado, quando já despontava o primeiro dia da semana, Maria Madalena e a outra Maria foram ver o sepulcro.
² E eis que houvera um grande terremoto, porque um anjo do Senhor, descendo do céu, chegou, removendo a pedra, e sentou-se sobre ela.
³ E o seu aspecto era como um relâmpago, e a sua veste branca como a neve.
⁴ E os guardas, com medo dele, ficaram muito assombrados e como mortos.
⁵ Mas o anjo, respondendo, disse às mulheres: Não tenhais medo; pois eu sei que buscai a Jesus, que foi crucificado.
⁶ Ele não está aqui, porque já ressuscitou, como tinha dito. Vinde e vede o lugar onde o Senhor jazia.
⁷ Ide, pois, imediatamente, e dizei aos seus discípulos que já ressuscitou dos mortos. E eis que ele vai adiante de vós para a Galileia; ali o vereis. Eis que eu vo-lo tenho dito.
⁸ E, saindo elas pressurosamente do sepulcro, com temor e grande alegria, correram a anunciá-lo aos seus discípulos.
⁹ E, indo elas, eis que Jesus lhes sai ao encontro, dizendo: Eu vos saúdo. E elas, chegando, abraçaram os seus pés e o adoraram.
¹⁰ Então, Jesus disse-lhes: Não temais; ide dizer ameus irmãos que vão a Galileia e lá me verão.
 A mentira dos judeus
¹¹ E, quando iam, eis que alguns da guarda, chegando à cidade, anunciaram aos príncipes dos sacerdotes todas as coisas que haviam acontecido.
¹² E, congregados eles com os anciãos e tomando conselho entre si, deram muito dinheiro aos soldados, ordenando:
¹³ Dizei: Vieram de noite os seus discípulos e, dormindo nós, o furtaram.
¹⁴ E, se isso chegar a ser ouvido pelo governador, nós o persuadiremos e vos poremos em segurança.
¹⁵ E eles, recebendo o dinheiro, fizeram como estavam instruídos. E foi divulgado esse dito entre os judeus, até ao dia de hoje.
  Jesus aparece aos seus discípulos na Galileia
¹⁶ E os onze discípulos partiram para a Galileia, para o monte que Jesus lhes tinha designado.
¹⁷ E, quando o viram, o adoraram; mas alguns duvidaram.
¹⁸ E, chegando-se Jesus, falou-lhes, dizendo: É-me dado todo o poder no céu e na terra.
¹⁹ Portanto,ide,ensinai todas as nações, batizando-as em nome do Pai, e do Filho, e do Espírito Santo;
²⁰ ensinando-asa guardar todas as coisas que eu vos tenho mandado; e eis que eu estou convosco todos os dias, até à consumação dos séculos. Amém 

`,
            pergunta: {
                texto: "Qual é a promessa final de Jesus no Evangelho de Mateus?",
                opcoes: [
                    { numero: 1, texto: "Eis que eu estou convosco todos os dias, até à consumação do século", correta: true },
                    { numero: 2, texto: "Virei depressa", correta: false },
                    { numero: 3, texto: "Não tenham medo", correta: false },
                    { numero: 4, texto: "Orem sempre", correta: false }
                ],
                explicacao: "Jesus garantiu a Sua presença contínua com a Igreja na missão de fazer discípulos.",
                pontosGanhos: 20,
                versiculoReferencia: "Mateus 28:20"
            }
        }
    }
};

console.log('✅ Evangelho de Mateus carregado!');