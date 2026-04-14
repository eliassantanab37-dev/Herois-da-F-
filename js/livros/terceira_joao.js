// js/livros/terceira_joao.js
const sortear = (lista) => lista[Math.floor(Math.random() * lista.length)];

export const terceira_joao = {
    nome: "3 João",
    icone: "🤝", // Ícone sugerindo hospitalidade e cooperação
    autor: "João",
    //background: "./imagens/3joao_bg.jpg", 

    tocarSomVitoria: function () {
        try {
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => console.warn('Som aguardando interação.'));
        } catch (e) { console.error('Erro ao tocar som:', e); }
    },

    capitulos: {
        1: {
            titulo: "Hospitalidade e Testemunho",
            texto: `1 O presbítero ao amado Gaio, a quem em verdade eu amo.
2 Amado, desejo que te vá bem em todas as coisas, e que tenhas saúde, assim como bem vai a tua alma.
3 Porque muito me alegrei quando os irmãos vieram, e testificaram da tua verdade, como tu andas na verdade.
4 Não tenho maior gozo do que este, o de ouvir que os meus filhos andam na verdade.
5 Amado, procedes fielmente em tudo o que fazes para com os irmãos, e para com os estranhos,
6 Os quais em presença da igreja testificaram do teu amor; aos quais, se conduzires como é digno para com Deus, bem farás;
7 Porque pelo seu Nome saíram, nada tomando dos gentios.
8 Portanto, aos tais devemos receber, para que sejamos cooperadores da verdade.
9 Tenho escrito à igreja; mas Diótrefes, que procura ter entre eles o primado, não nos recebe.
10 Por isso, se eu for, trarei à memória as obras que ele faz, proferindo contra nós palavras maliciosas; e, não contente com isto, não recebe os irmãos, e impede os que querem recebê-los, e os lança fora da igreja.
11 Amado, não sigas o que é mal, mas o que é bom. Quem faz o bem é de Deus; mas quem faz o mal não tem visto a Deus.
12 Todos dão testemunho de Demétrio, até a mesma verdade; e também nós testemunhamos; e vós bem sabeis que o nosso testemunho é verdadeiro.
13 Tinha muito que escrever, mas não quero escrever-te com tinta e pena.
14 Espero, porém, ver-te brevemente, e falaremos face a face.
15 Paz seja contigo. Os amigos te saúdam. Saúda os amigos por nome.

 `,
            get pergunta() {
                return sortear([
                    {
                        texto: "Qual é o maior gozo (alegria) do autor, segundo o versículo 4?",
                        opcoes: [
                            { numero: 1, texto: "Receber ofertas valiosas", correta: false },
                            { numero: 2, texto: "Ouvir que os seus filhos andam na verdade", correta: true },
                            { numero: 3, texto: "Viajar para terras distantes", correta: false },
                            { numero: 4, texto: "Ter muitos seguidores", correta: false }
                        ],
                        explicacao: "3 João 1:4 - Não tenho maior gozo do que este, o de ouvir que os meus filhos andam na verdade.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "Quem é mencionado como alguém que gosta de ter a primazia e não recebe os irmãos?",
                        opcoes: [
                            { numero: 1, texto: "Gaios", correta: false },
                            { numero: 2, texto: "Demétrio", correta: false },
                            { numero: 3, texto: "Diótrefes", correta: true },
                            { numero: 4, texto: "Timóteo", correta: false }
                        ],
                        explicacao: "3 João 1:9 - Tenho escrito à igreja; mas Diótrefes, que procura ter entre eles a primazia, não nos recebe.",
                        pontosGanhos: 20
                    },
                    {
                        texto: "O que João diz sobre aquele que faz o bem?",
                        opcoes: [
                            { numero: 1, texto: "É apenas uma pessoa educada", correta: false },
                            { numero: 2, texto: "Faz isso para ser visto", correta: false },
                            { numero: 3, texto: "Ainda não conhece a luz", correta: false },
                            { numero: 4, texto: "É de Deus", correta: true }
                        ],
                        explicacao: "3 João 1:11 - Amado, não sigas o mal, mas o bem. Quem faz o bem é de Deus...",
                        pontosGanhos: 20
                    }
                ]);
            }
        }
    }
};