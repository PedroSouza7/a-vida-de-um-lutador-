const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você ganhou uma proposta para ir para um evento amador",
        alternativas: [
            {
                texto: "Vou aceita a proposta e vai para o campeonato!",
                afirmacao: "Você quer realmente entrar no mundo da luta."
            },
            {
                texto: "Você recusa e volta a treinar casualmente.",
                afirmacao: "Você perdeu essa oportunidade de ingressar no evento."
            }
        ]
    },
    {
        enunciado: "Durante os treinos você decide:",
        alternativas: [
            {
                texto: "Continuar na dieta e manter foco nos treinos.",
                afirmacao: "você vai bater o peso e estar em forma para lutar e vencer."
            },
            {
                texto: "Abandonar a dieta e ir para festas e baladas.",
                afirmacao: "Você não vai conseguir bater o peso e vai perder por W.O."
            }
        ]
    },
    {
        enunciado: "Um amigo que você não vê a muito tempo te chama para sair comer algo. O que você faz?",
        alternativas: [
            {
                texto: "Recusa respeitosamente e explica o porquê!",
                afirmacao: "Ele entende e vocês marca de ir em outro dia depois da luta."
            },
            {
                texto: "Aceita sair com ele.",
                afirmacao: "você ganha uns quilos a mais e precisa treinar mais para a competição."
            }
        ]
    },
    {
        enunciado: "chega o dia da luta e você esta muit nervoso. O que vocẼ faz?",
        alternativas: [
            {
                texto: "Respira e tenta ficar calmo!",
                afirmacao: "você se acalma e fica feliz por estar ali."
            },
            {
                texto: "você desiste por medo e n vai lutar.",
                afirmacao: "seu adversario ganha porque você desistiu e todos ficam mal pela luta que não aconteceu  ."
            }
        ]
    },
    {
        enunciado: "você ganha a luta e vai comprimentar o seu adversário. Qual atitude vc vai tomar?",
        alternativas: [
            {
                texto: "agradeço ele pela luta, dalhe um abraço e um aperto de mão.",
                afirmacao: "ele te comprimenta também, e agradece pela luta."
            },
            {
                texto: "você o provoca e o xinga.",
                afirmacao: "ele fica mal e vc sai com uma má fama."
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre Você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
