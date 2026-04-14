// js/livros/primeira_tessalonicenses.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const primeiro_tessalonicenses = {
    nome: "1 Tessalonicenses",
    icone: "📜", // Ícone sugerindo a supremacia de Cristo sobre tudo
    autor: "Paulo",
   // background: "./imagens/primeiro_tessalonicenses_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "O Exemplo dos Tessalonicenses",
            texto: ` ¹ Paulo, e Silvano, e Timóteo, à igreja dos tessalonicenses em Deus, o Pai, e no Senhor Jesus Cristo: Graça e paz tenhais de Deus nosso Pai e do Senhor Jesus Cristo.
² Sempre damos graças a Deus por vós todos, fazendo menção de vós em nossas orações,
³ Lembrando-nos sem cessar da obra da vossa fé, do trabalho do amor, e da paciência da esperança em nosso Senhor Jesus Cristo, diante de nosso Deus e Pai,
⁴ Sabendo, amados irmãos, que a vossa eleição é de Deus;
⁵ Porque o nosso evangelho não foi a vós somente em palavras, mas também em poder, e no Espírito Santo, e em muita certeza, como bem sabeis quais fomos entre vós, por amor de vós.
⁶ E vós fostes feitos nossos imitadores, e do Senhor, recebendo a palavra em muita tribulação, com gozo do Espírito Santo.
⁷ De maneira que fostes exemplo para todos os fiéis na Macedônia e Acaia.
⁸ Porque por vós soou a palavra do Senhor, não somente na Macedônia e Acaia, mas também em todos os lugares a vossa fé para com Deus se espalhou, de tal maneira que já dela não temos necessidade de falar coisa alguma;
⁹ Porque eles mesmos anunciam de nós qual a entrada que tivemos para convosco, e como dos ídolos vos convertestes a Deus, para servir o Deus vivo e verdadeiro,
¹⁰ E esperar dos céus o seu Filho, a quem ressuscitou dentre os mortos, a saber, Jesus, que nos livra da ira futura. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Paulo descreve a conversão dos tessalonicenses no capítulo 1?",
                        opcoes: [
                            { numero: 1, texto: "Deixaram os ídolos para servir ao Deus vivo e verdadeiro", correta: true },
                            { numero: 2, texto: "Apenas mudaram de filosofia", correta: false },
                            { numero: 3, texto: "Continuaram com seus deuses antigos", correta: false },
                            { numero: 4, texto: "Seguiram a Paulo por medo", correta: false }
                        ],
                        explicacao: "1 Tessalonicenses 1:9 - ...como dos ídolos vos convertestes a Deus, para servir ao Deus vivo e verdadeiro.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        2: {
            titulo: "O Procedimento de Paulo",
            texto: ` ¹ Porque vós mesmos, irmãos, bem sabeis que a nossa entrada para convosco não foi vã;
² Mas, mesmo depois de termos antes padecido, e sido insultados em Filipos, como sabeis, tornamo-nos ousados em nosso Deus, para vos falar o evangelho de Deus com grande combate.
³ Porque a nossa exortação não foi com engano, nem com imundícia, nem com fraudulência;
⁴ Mas, como fomos aprovados de Deus para que o evangelho nos fosse confiado, assim falamos, não como para agradar aos homens, mas a Deus, que prova os nossos corações.
⁵ Porque, como bem sabeis, nunca usamos de palavras lisonjeiras, nem houve um pretexto de avareza; Deus é testemunha;
⁶ E não buscamos glória dos homens, nem de vós, nem de outros, ainda que podíamos, como apóstolos de Cristo, ser-vos pesados;
⁷ Antes fomos brandos entre vós, como a ama que cria seus filhos.
⁸ Assim nós, sendo-vos tão afeiçoados, de boa vontade quiséramos comunicar-vos, não somente o evangelho de Deus, mas ainda as nossas próprias almas; porquanto nos éreis muito queridos.
⁹ Porque bem vos lembrais, irmãos, do nosso trabalho e fadiga; pois, trabalhando noite e dia, para não sermos pesados a nenhum de vós, vos pregamos o evangelho de Deus.
¹⁰ Vós e Deus sois testemunhas de quão santa, e justa, e irrepreensivelmente nos houvemos para convosco, os que crestes.
¹¹ Assim como bem sabeis de que modo vos exortávamos e consolávamos e testemunhávamos, a cada um de vós, como o pai a seus filhos;
¹² Para que vos conduzísseis dignamente para com Deus, que vos chama para o seu reino e glória.
¹³ Por isso também damos, sem cessar, graças a Deus, pois, havendo recebido de nós a palavra da pregação de Deus, a recebestes, não como palavra de homens, mas (segundo é, na verdade), como palavra de Deus, a qual também opera em vós, os que crestes.
¹⁴ Porque vós, irmãos, haveis sido feitos imitadores das igrejas de Deus que na Judeia estão em Cristo Jesus; porquanto também padecestes de vossos próprios concidadãos o mesmo que os judeus lhes fizeram a eles,
¹⁵ Os quais também mataram o Senhor Jesus e os seus próprios profetas, e nos têm perseguido; e não agradam a Deus, e são contrários a todos os homens,
¹⁶ E nos impedem de pregar aos gentios para que possam ser salvos, a fim de encherem sempre a medida de seus pecados; mas a ira de Deus caiu sobre eles até ao fim.
¹⁷ Nós, porém, irmãos, sendo privados de vós por um momento de tempo, de vista, mas não do coração, tanto mais procuramos com grande desejo ver o vosso rosto;
¹⁸ Por isso bem quisemos uma e outra vez ir ter convosco, pelo menos eu, Paulo, mas Satanás no-lo impediu.
¹⁹ Porque, qual é a nossa esperança, ou gozo, ou coroa de glória? Porventura não o sois vós também diante de nosso Senhor Jesus Cristo em sua vinda?
²⁰ Porque vós sois nossa glória e gozo. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como Paulo e seus companheiros se portaram entre os tessalonicenses?",
                        opcoes: [
                            { numero: 1, texto: "Como quem busca glória dos homens", correta: false },
                            { numero: 2, texto: "Como uma ama que cria seus filhos, com doçura", correta: true },
                            { numero: 3, texto: "Com autoridade política", correta: false },
                            { numero: 4, texto: "Apenas como cobradores de impostos", correta: false }
                        ],
                        explicacao: "1 Tessalonicenses 2:7 - Antes fomos brandos entre vós, como a ama que cria seus filhos.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        3: {
            titulo: "A Missão de Timóteo",
            texto: ` ¹ Por isso, não podendo esperar mais, achamos por bem ficar sozinhos em Atenas;
² E enviamos Timóteo, nosso irmão, e ministro de Deus, e nosso cooperador no evangelho de Cristo, para vos confortar e vos exortar acerca da vossa fé;
³ Para que ninguém se comova por estas tribulações; porque vós mesmos sabeis que para isto fomos ordenados,
⁴ Pois, estando ainda convosco, vos predizíamos que havíamos de ser afligidos, como sucedeu, e vós o sabeis.
⁵ Portanto, não podendo eu também esperar mais, mandei-o saber da vossa fé, temendo que o tentador vos tentasse, e o nosso trabalho viesse a ser inútil.
⁶ Vindo, porém, agora Timóteo de vós para nós, e trazendo-nos boas novas da vossa fé e amor, e de como sempre tendes boa lembrança de nós, desejando muito ver-nos, como nós também a vós;
⁷ Por esta razão, irmãos, ficamos consolados acerca de vós, em toda a nossa aflição e necessidade, pela vossa fé,
⁸ Porque agora vivemos, se estais firmes no Senhor.
⁹ Porque, que ação de graças poderemos dar a Deus por vós, por todo o gozo com que nos regozijamos por vossa causa diante do nosso Deus,
¹⁰ Orando abundantemente dia e noite, para que possamos ver o vosso rosto, e supramos o que falta à vossa fé?
¹¹ Ora, o mesmo nosso Deus e Pai, e nosso Senhor Jesus Cristo, encaminhe a nossa viagem para vós.
¹² E o Senhor vos aumente, e faça crescer em amor uns para com os outros, e para com todos, como também o fazemos para convosco;
¹³ Para confirmar os vossos corações, para que sejais irrepreensíveis em santidade diante de nosso Deus e Pai, na vinda de nosso Senhor Jesus Cristo com todos os seus santos. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Por que Paulo enviou Timóteo aos tessalonicenses?",
                        opcoes: [
                            { numero: 1, texto: "Para cobrar ofertas", correta: false },
                            { numero: 2, texto: "Para os confirmar e exortar acerca da fé", correta: true },
                            { numero: 3, texto: "Para levar notícias de Roma", correta: false },
                            { numero: 4, texto: "Para construir um novo templo", correta: false }
                        ],
                        explicacao: "1 Tessalonicenses 3:2 - E enviamos Timóteo... para vos confirmar e exortar acerca da vossa fé.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        4: {
            titulo: "A Vinda do Senhor",
            texto: `¹ Finalmente, irmãos, vos rogamos e exortamos no Senhor Jesus, que assim como recebestes de nós, de que maneira convém andar e agradar a Deus, assim andai, para que possais progredir cada vez mais.
² Porque vós bem sabeis que mandamentos vos temos dado pelo Senhor Jesus.
³ Porque esta é a vontade de Deus, a vossa santificação; que vos abstenhais da fornicação;
⁴ Que cada um de vós saiba possuir o seu vaso em santificação e honra;
⁵ Não na paixão da concupiscência, como os gentios, que não conhecem a Deus.
⁶ Ninguém oprima ou engane a seu irmão em negócio algum, porque o Senhor é vingador de todas estas coisas, como também antes vo-lo dissemos e testificamos.
⁷ Porque não nos chamou Deus para a imundícia, mas para a santificação.
⁸ Portanto, quem despreza isto não despreza ao homem, mas sim a Deus, que nos deu também o seu Espírito Santo.
⁹ Quanto, porém, ao amor fraternal, não necessitais de que vos escreva, visto que vós mesmos estais instruídos por Deus que vos ameis uns aos outros;
¹⁰ Porque também já assim o fazeis para com todos os irmãos que estão por toda a Macedônia. Exortamo-vos, porém, a que ainda nisto aumenteis cada vez mais.
¹¹ E procureis viver quietos, e tratar dos vossos próprios negócios, e trabalhar com vossas próprias mãos, como já vo-lo temos mandado;
¹² Para que andeis honestamente para com os que estão de fora, e não necessiteis de coisa alguma.
¹³ Não quero, porém, irmãos, que sejais ignorantes acerca dos que já dormem, para que não vos entristeçais, como os demais, que não têm esperança.
¹⁴ Porque, se cremos que Jesus morreu e ressuscitou, assim também aos que em Jesus dormem, Deus os tornará a trazer com ele.
¹⁵ Dizemo-vos, pois, isto, pela palavra do Senhor: Que nós, os que ficarmos vivos para a vinda do Senhor, não precederemos os que dormem.
¹⁶ Porque o mesmo Senhor descerá do céu com alarido, e com voz de arcanjo, e com a trombeta de Deus; e os que morreram em Cristo ressuscitarão primeiro.
¹⁷ Depois nós, os que ficarmos vivos, seremos arrebatados juntamente com eles nas nuvens, a encontrar o Senhor nos ares, e assim estaremos sempre com o Senhor.
¹⁸ Portanto, consolai-vos uns aos outros com estas palavras. 

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "O que acontecerá com os mortos em Cristo quando o Senhor descer do céu?",
                        opcoes: [
                            { numero: 1, texto: "Eles permanecerão na terra", correta: false },
                            { numero: 2, texto: "Ressuscitarão primeiro", correta: true },
                            { numero: 3, texto: "Serão esquecidos", correta: false },
                            { numero: 4, texto: "Não haverá ressurreição", correta: false }
                        ],
                        explicacao: "1 Tessalonicenses 4:16 - Porque o mesmo Senhor descerá do céu com alarido... e os que morreram em Cristo ressuscitarão primeiro.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é a vontade de Deus para o cristão, segundo o versículo 3?",
                        opcoes: [
                            { numero: 1, texto: "A vossa santificação", correta: true },
                            { numero: 2, texto: "Que fiquem ricos", correta: false },
                            { numero: 3, texto: "Que vivam sem regras", correta: false },
                            { numero: 4, texto: "Apenas que viajem", correta: false }
                        ],
                        explicacao: "1 Tessalonicenses 4:3 - Porque esta é a vontade de Deus, a vossa santificação.",
                        pontosGanhos: 20
                    }
                ]);
            }
        },
        5: {
            titulo: "Vigilância e Exortações Finais",
            texto: ` ¹ Mas, irmãos, acerca dos tempos e das estações, não necessitais de que se vos escreva;
² Porque vós mesmos sabeis muito bem que o dia do Senhor virá como o ladrão de noite;
³ Pois que, quando disserem: Há paz e segurança, então lhes sobrevirá repentina destruição, como as dores de parto àquela que está grávida, e de modo nenhum escaparão.
⁴ Mas vós, irmãos, já não estais em trevas, para que aquele dia vos surpreenda como um ladrão;
⁵ Porque todos vós sois filhos da luz e filhos do dia; nós não somos da noite nem das trevas.
⁶ Não durmamos, pois, como os demais, mas vigiemos, e sejamos sóbrios;
⁷ Porque os que dormem, dormem de noite, e os que se embebedam, embebedam-se de noite.
⁸ Mas nós, que somos do dia, sejamos sóbrios, vestindo-nos da couraça da fé e do amor, e tendo por capacete a esperança da salvação;
⁹ Porque Deus não nos destinou para a ira, mas para a aquisição da salvação, por nosso Senhor Jesus Cristo,
¹⁰ Que morreu por nós, para que, quer vigiemos, quer durmamos, vivamos juntamente com ele.
¹¹ Por isso exortai-vos uns aos outros, e edificai-vos uns aos outros, como também o fazeis.
¹² E rogamo-vos, irmãos, que reconheçais os que trabalham entre vós e que presidem sobre vós no Senhor, e vos admoestam;
¹³ E que os tenhais em grande estima e amor, por causa da sua obra. Tende paz entre vós.
¹⁴ Rogamo-vos, também, irmãos, que admoesteis os desordeiros, consoleis os de pouco ânimo, sustenteis os fracos, e sejais pacientes para com todos.
¹⁵ Vede que ninguém dê a outros mal por mal, mas segui sempre o bem, tanto uns para com os outros, como para com todos.
¹⁶ Regozijai-vos sempre.
¹⁷ Orai sem cessar.
¹⁸ Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.
¹⁹ Não extingais o Espírito.
²⁰ Não desprezeis as profecias.
²¹ Examinai tudo. Retende o bem.
²² Abstende-vos de toda a aparência do mal.
²³ E o mesmo Deus de paz vos santifique em tudo; e todo o vosso espírito, e alma, e corpo, sejam plenamente conservados irrepreensíveis para a vinda de nosso Senhor Jesus Cristo.
²⁴ Fiel é o que vos chama, o qual também o fará.
²⁵ Irmãos, orai por nós.
²⁶ Saudai a todos os irmãos com ósculo santo.
²⁷ Pelo Senhor vos conjuro que esta epístola seja lida a todos os santos irmãos.
²⁸ A graça de nosso Senhor Jesus Cristo seja convosco. Amém. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Como virá o dia do Senhor, segundo Paulo?",
                        opcoes: [
                            { numero: 1, texto: "Com aviso prévio de anos", correta: false },
                            { numero: 2, texto: "Como o ladrão de noite", correta: true },
                            { numero: 3, texto: "De forma lenta e visível", correta: false },
                            { numero: 4, texto: "Nunca virá", correta: false }
                        ],
                        explicacao: "1 Tessalonicenses 5:2 - Porque vós mesmos sabeis muito bem que o dia do Senhor virá como o ladrão de noite.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Qual é a recomendação de Paulo sobre a oração?",
                        opcoes: [
                            { numero: 1, texto: "Orai sem cessar", correta: true },
                            { numero: 2, texto: "Orai uma vez por mês", correta: false },
                            { numero: 3, texto: "Não há necessidade de orar", correta: false },
                            { numero: 4, texto: "Orai apenas quando tiver problemas", correta: false }
                        ],
                        explicacao: "1 Tessalonicenses 5:17 - Orai sem cessar.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};