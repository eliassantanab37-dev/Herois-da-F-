// js/livros/segunda_joao.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const segunda_joao = {
    nome: "2 João",
    icone: "✉️",
    autor: "João",
   // background: "./imagens/2joao_bg.jpg", 

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "Andar na Verdade e no Amor",
            texto: ` ¹ O presbítero à senhora eleita, e a seus filhos, aos quais amo na verdade, e não somente eu, mas também todos os que têm conhecido a verdade,
² Por amor da verdade que está em nós, e para sempre estará conosco:
³ Graça seja convosco, misericórdia e paz, da parte de Deus Pai e da do Senhor Jesus Cristo, o Filho do Pai, em verdade e amor.
⁴ Muito me alegro por achar que alguns de teus filhos andam na verdade, assim como temos recebido o mandamento do Pai.
⁵ E agora, senhora, rogo-te, não como se escrevesse um novo mandamento, mas aquele mesmo que desde o princípio tivemos: Que nos amemos uns aos outros.
⁶ E o amor é este: Que andemos segundo os seus mandamentos. Este é o mandamento, como já desde o princípio ouvistes, que andeis nele.
⁷ Porque já muitos enganadores entraram no mundo, os quais não confessam que Jesus Cristo veio em carne. Este tal é o enganador e o anticristo.
⁸ Olhai por vós mesmos, para que não percamos o que temos ganho, antes recebamos o inteiro galardão.
⁹ Todo aquele que prevarica, e não persevera na doutrina de Cristo, não tem a Deus. Quem persevera na doutrina de Cristo, esse tem tanto ao Pai como ao Filho.
¹⁰ Se alguém vem ter convosco, e não traz esta doutrina, não o recebais em casa, nem tampouco o saudeis.
¹¹ Porque quem o saúda tem parte nas suas más obras.
¹² Tendo muito que escrever-vos, não quis fazê-lo com papel e tinta; mas espero ir ter convosco e falar face a face, para que o nosso gozo seja cumprido.

`,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é o mandamento que temos desde o princípio, segundo o versículo 5?",
                        opcoes: [
                            { numero: 1, texto: "Que devemos jejuar todos os dias", correta: false },
                            { numero: 2, texto: "Que nos amemos uns aos outros", correta: true },
                            { numero: 3, texto: "Que devemos morar no deserto", correta: false },
                            { numero: 4, texto: "Que não podemos falar com estranhos", correta: false }
                        ],
                        explicacao: "2 João 1:5 - ...não como escrevendo-te um novo mandamento, mas aquele que desde o princípio tivemos: que nos amemos uns aos outros.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Como João define o amor no versículo 6?",
                        opcoes: [
                            { numero: 1, texto: "Um sentimento passageiro", correta: false },
                            { numero: 2, texto: "Apenas palavras bonitas", correta: false },
                            { numero: 3, texto: "Andar conforme os mandamentos de Deus", correta: true },
                            { numero: 4, texto: "Fazer tudo o que o coração pede", correta: false }
                        ],
                        explicacao: "2 João 1:6 - E o amor é este: que andemos segundo os seus mandamentos.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que não devemos fazer com aquele que não traz a doutrina de Cristo?",
                        opcoes: [
                            { numero: 1, texto: "Devemos dar presentes a ele", correta: false },
                            { numero: 2, texto: "Devemos aceitar tudo o que ele diz", correta: false },
                            { numero: 3, texto: "Devemos segui-lo por onde ele for", correta: false },
                            { numero: 4, texto: "Não o recebais em casa, nem tampouco o saudeis", correta: true }
                        ],
                        explicacao: "2 João 1:10 - Se alguém vem ter convosco, e não traz esta doutrina, não o recebais em casa, nem tampouco o saudeis.",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};