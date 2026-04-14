// js/livros/judas.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const judas = {
    nome: "Judas",
    icone: "🛡️", // Ícone sugerindo a defesa da fé
    autor: "Judas",
    //background: "./imagens/judas_bg.jpg", 

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "Batalha pela Fé",
            texto: `¹ Judas, servo de Jesus Cristo, e irmão de Tiago, aos chamados, santificados em Deus Pai, e conservados em Jesus Cristo:
² Misericórdia, e paz, e amor vos sejam multiplicados.
³ Amados, procurando eu escrever-vos com toda a diligência acerca da salvação comum, tive por necessidade escrever-vos, e exortar-vos a batalhar pela fé que uma vez foi entregue aos santos.
⁴ Porque se introduziram furtivamente alguns, os quais já antes estavam escritos para este mesmo juízo, homens ímpios, que convertem em dissolução a graça de Deus, e negam a Deus, único dominador e Senhor nosso, Jesus Cristo.
⁵ Mas quero lembrar-vos, como a quem já uma vez soube isto, que, havendo o Senhor salvo um povo, tirando-o da terra do Egito, destruiu depois os que não creram;
⁶ E aos anjos que não guardaram o seu principado, mas deixaram a sua própria habitação, reservou na escuridão e em prisões eternas até ao juízo daquele grande dia;
⁷ Assim como Sodoma e Gomorra, e as cidades circunvizinhas, que, havendo-se entregue à fornicação como aqueles, e ido após outra carne, foram postas por exemplo, sofrendo a pena do fogo eterno.
⁸ E, contudo, também estes, semelhantemente adormecidos, contaminam a sua carne, e rejeitam a dominação, e difamam as dignidades.
⁹ Mas o arcanjo Miguel, quando contendia com o diabo, e disputava a respeito do corpo de Moisés, não ousou pronunciar juízo de maldição contra ele; mas disse: O Senhor te repreenda.
¹⁰ Estes, porém, dizem mal do que não sabem; e, naquilo que naturalmente conhecem, como animais irracionais se corrompem.
¹¹ Ai deles! Porque entraram pelo caminho de Caim, e foram levados pelo engano do prêmio de Balaão, e pereceram na contradição de Coré.
¹² Estes são manchas em vossas festas de amor, banqueteando-se convosco, e apascentando-se a si mesmos sem temor; são nuvens sem água, levadas pelos ventos de uma para outra parte; são como árvores murchas, infrutíferas, duas vezes mortas, desarraigadas;
¹³ Ondas impetuosas do mar, que espumam as suas mesmas abominações; estrelas errantes, para os quais está eternamente reservada a negrura das trevas.
¹⁴ E destes profetizou também Enoque, o sétimo depois de Adão, dizendo: Eis que é vindo o Senhor com milhares de seus santos;
¹⁵ Para fazer juízo contra todos e condenar dentre eles todos os ímpios, por todas as suas obras de impiedade, que impiamente cometeram, e por todas as duras palavras que ímpios pecadores disseram contra ele.
¹⁶ Estes são murmuradores, queixosos da sua sorte, andando segundo as suas concupiscências, e cuja boca diz coisas mui arrogantes, admirando as pessoas por causa do interesse.
¹⁷ Mas vós, amados, lembrai-vos das palavras que vos foram preditas pelos apóstolos de nosso Senhor Jesus Cristo;
¹⁸ Os quais vos diziam que nos últimos tempos haveria escarnecedores que andariam segundo as suas ímpias concupiscências.
¹⁹ Estes são os que a si mesmos se separam, sensuais, que não têm o Espírito.
²⁰ Mas vós, amados, edificando-vos a vós mesmos sobre a vossa santíssima fé, orando no Espírito Santo,
²¹ Conservai-vos a vós mesmos no amor de Deus, esperando a misericórdia de nosso Senhor Jesus Cristo para a vida eterna.
²² E apiedai-vos de alguns, usando de discernimento;
²³ E salvai alguns com temor, arrebatando-os do fogo, odiando até a túnica manchada da carne.
²⁴ Ora, àquele que é poderoso para vos guardar de tropeçar, e apresentar-vos irrepreensíveis, com alegria, perante a sua glória,
²⁵ Ao Deus único, sábio, Salvador nosso, seja glória e majestade, domínio e poder, agora, e para todo o sempre. Amém.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Pelo que Judas exorta os fiéis a batalharem diligentemente?",
                        opcoes: [
                            { numero: 1, texto: "Pelo domínio político da época", correta: false },
                            { numero: 2, texto: "Pela fé que uma vez foi dada aos santos", correta: true },
                            { numero: 3, texto: "Por mais templos em Jerusalém", correta: false },
                            { numero: 4, texto: "Pela liberdade de viajar", correta: false }
                        ],
                        explicacao: "Judas 1:3 - ...tive por necessidade escrever-vos, e exortar-vos a batalhar diligentemente pela fé que uma vez foi dada aos santos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Sobre o que o arcanjo Miguel discutia com o diabo, segundo o versículo 9?",
                        opcoes: [
                            { numero: 1, texto: "Sobre as chaves do céu", correta: false },
                            { numero: 2, texto: "Sobre o trono de Davi", correta: false },
                            { numero: 3, texto: "Sobre o corpo de Moisés", correta: true },
                            { numero: 4, texto: "Sobre o destino das nações", correta: false }
                        ],
                        explicacao: "Judas 1:9 - Mas o arcanjo Miguel, quando contendia com o diabo, e disputava a respeito do corpo de Moisés...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem é poderoso para nos guardar de tropeçar e nos apresentar irrepreensíveis?",
                        opcoes: [
                            { numero: 1, texto: "A nossa própria força de vontade", correta: false },
                            { numero: 2, texto: "Os líderes das igrejas", correta: false },
                            { numero: 3, texto: "A sorte do destino", correta: false },
                            { numero: 4, texto: "Deus, o único sábio, Salvador nosso", correta: true }
                        ],
                        explicacao: "Judas 1:24 - Ora, àquele que é poderoso para vos guardar de tropeçar, e apresentar-vos irrepreensíveis...",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};