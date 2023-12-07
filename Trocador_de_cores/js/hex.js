// Variável contendo todos os elementos do sistema hexadecimal que configura as cores

const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

// Capturando os elementos do html e assimilando-os em variáveis

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Adicionando uma ação ao evento 'click' do botão

btn.addEventListener('click', function() {
    document.body.style.backgroundColor = numeroAleatorio()
    color.textContent = numeroAleatorio()
})

// Essa função percorre os elementos do array 'hex', através de um loop e de forma randomizada, e retorna 6 elementos em uma variável
// Variável essa que corresponde a cor de fundo do documento

function numeroAleatorio() {
    let hexColor = '';
    for(let i= 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hex.length)
        hexColor += hex[random];
    }
    return `#${hexColor}`;
}