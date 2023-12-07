// Essas são as variáveis que contém as imagens do jogo que serão inseridas
const x_verde =
  "<img class='w-100 text-center' src='../ASSETS/x-verde.png' alt='X verde'>";
const circulo_amarelo =
  "<img class='w-100 text-center' src='../ASSETS/o-amarelo.png' alt='Círculo amarelo'>";

// Variáveis que armazenam a frase que indicam o resultado da partida
let divStyle = `<div class='hidden container text-center py-4 my-2 text-dark fs-3 fw-bold'>Fim de jogo! `;
let vencedor_verde = divStyle;
let vencedor_amarelo = divStyle;
let drawMessage = divStyle + `Ocorreu um <span class= 'text-primary fs-3 fw-bold'>EMPATE</span></div>`;

// --------------

let empate = [];
let gameOver = false;

// Variável que randomiza a vez de determinado jogador. O valor 0 é para o player1 e o valor 1 para o player2

let playerTime = Math.round(Math.random());

// Aqui as imagens do jogo foram colocadas em um array para uma função posterior

const simbolos = [x_verde, circulo_amarelo];

// Essas duas variáveis armazenam o 'id' dos quadrados que são clicados. Sendo verde para o 'X' e amarelo para 'O';

let verde = [];
let amarelo = [];

// As duas variáveis acima foram colocadas nesse array para uma função posterior

let jogo = [verde, amarelo];

// Aqui estão todas as variáveis que possuem a combinação do resultado vitorioso no jogo

let combinacao1 = [1, 2, 3];
let combinacao2 = [1, 5, 9];
let combinacao3 = [1, 4, 7];
let combinacao4 = [2, 5, 8];
let combinacao5 = [3, 5, 7];
let combinacao6 = [3, 6, 9];
let combinacao7 = [4, 5, 6];
let combinacao8 = [7, 8, 9];

// Todas elas foram colocadas em um array para uma função posterior

let combinacoes = [
  combinacao1,
  combinacao2,
  combinacao3,
  combinacao4,
  combinacao5,
  combinacao6,
  combinacao7,
  combinacao8,
];
