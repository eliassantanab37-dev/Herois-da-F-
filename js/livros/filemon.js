// js/livros/filemon.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const filemon = {
    nome: "Filemon",
    icone: "🤝", // Ícone sugerindo reconciliação e perdão
    autor: "Paulo",
    //background: "./imagens/filemon_bg.jpg",

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "Apelo por Onésimo",
            texto: ` ¹ Paulo, prisioneiro de Jesus Cristo, e o irmão Timóteo, ao amado Filemom, nosso cooperador,
² E à nossa amada Áfia, e a Arquipo, nosso camarada, e à igreja que está em tua casa:
³ Graça a vós e paz da parte de Deus nosso Pai, e do Senhor Jesus Cristo.
⁴ Graças dou ao meu Deus, lembrando-me sempre de ti nas minhas orações;
⁵ Ouvindo do teu amor e da fé que tens para com o Senhor Jesus, e para com todos os santos;
⁶ Para que a comunicação da tua fé seja eficaz no conhecimento de todo o bem que em vós há por Cristo Jesus.
⁷ Porque temos grande gozo e consolação do teu amor, porque por ti, ó irmão, as entranhas dos santos foram recreadas.
⁸ Por isso, ainda que tenha em Cristo grande confiança para te mandar o que te convém,
⁹ Todavia peço-te antes por amor, sendo eu tal como sou, Paulo o velho, e também agora prisioneiro de Jesus Cristo.
¹⁰ Peço-te por meu filho Onésimo, que gerei nas minhas prisões;
¹¹ O qual noutro tempo te foi inútil, mas agora a ti e a mim muito útil; eu to tornei a enviar.
¹² E tu torna a recebê-lo como às minhas entranhas.
¹³ Eu bem o quisera conservar comigo, para que por ti me servisse nas prisões do evangelho;
¹⁴ Mas nada quis fazer sem o teu parecer, para que o teu benefício não fosse como por força, mas, voluntário.
¹⁵ Porque bem pode ser que ele se tenha separado de ti por algum tempo, para que o retivesses para sempre,
¹⁶ Não já como servo, antes, mais do que servo, como irmão amado, particularmente de mim, e quanto mais de ti, assim na carne como no Senhor?
¹⁷ Assim, pois, se me tens por companheiro, recebe-o como a mim mesmo.
¹⁸ E, se te fez algum dano, ou te deve alguma coisa, põe isso à minha conta.
¹⁹ Eu, Paulo, de minha própria mão o escrevi; eu o pagarei, para te não dizer que ainda mesmo a ti próprio a mim te deves.
²⁰ Sim, irmão, eu me regozijarei de ti no Senhor; recreia as minhas entranhas no Senhor.
²¹ Escrevi-te confiado na tua obediência, sabendo que ainda farás mais do que digo.
²² E juntamente prepara-me também pousada, porque espero que pelas vossas orações vos hei de ser concedido.
²³ Saúdam-te Epafras, meu companheiro de prisão por Cristo Jesus,
²⁴ Marcos, Aristarco, Demas e Lucas, meus cooperadores.
²⁵ A graça de nosso Senhor Jesus Cristo seja com o vosso espírito. Amém. 

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Quem era Onésimo para Paulo, segundo o versículo 10?",
                        opcoes: [
                            { numero: 1, texto: "Seu filho na fé, gerado nas prisões", correta: true },
                            { numero: 2, texto: "Um soldado romano que o vigiava", correta: false },
                            { numero: 3, texto: "Um parente de sangue de Paulo", correta: false },
                            { numero: 4, texto: "O dono da casa onde Paulo estava", correta: false }
                        ],
                        explicacao: "Filemon 1:10 - Peço-te pelo meu filho Onésimo, que gerei nas minhas prisões.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como Paulo pede que Filemon receba Onésimo de volta?",
                        opcoes: [
                            { numero: 1, texto: "Como um criminoso castigado", correta: false },
                            { numero: 2, texto: "Não mais como escravo, mas como irmão caríssimo", correta: true },
                            { numero: 3, texto: "Apenas como um funcionário pago", correta: false },
                            { numero: 4, texto: "Como um estranho", correta: false }
                        ],
                        explicacao: "Filemon 1:16 - Não já como escravo, antes, mais do que escravo, como irmão caríssimo...",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que Paulo diz que faria se Onésimo devesse algo a Filemon?",
                        opcoes: [
                            { numero: 1, texto: "Que Paulo mesmo pagaria (põe isso na minha conta)", correta: true },
                            { numero: 2, texto: "Que Onésimo deveria trabalhar em dobro", correta: false },
                            { numero: 3, texto: "Que a dívida deveria ser perdoada sem nada em troca", correta: false },
                            { numero: 4, texto: "Que Filemon não deveria cobrar ninguém", correta: false }
                        ],
                        explicacao: "Filemon 1:18 - E, se te fez algum dano, ou te deve alguma coisa, põe isso na minha conta.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};