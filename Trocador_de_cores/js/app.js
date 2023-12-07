// Variável contendo algumas das principais cores a serem utilizadas

const colors = ['green', 'red', 'blue', 'yellow', 'brown', 'orange', 'purple', 'pink', 'black'];

// Capturando os elementos do html e assimilando-os em variáveis

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Adicionando uma ação ao evento 'click' do botão
// A ação consiste em randomizar as cores assinaladas na variável e apresentá-las na tela após o clique

btn.addEventListener('click', function() {
    const numeroAleatorio = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[numeroAleatorio];
    color.textContent = colors[numeroAleatorio];
})