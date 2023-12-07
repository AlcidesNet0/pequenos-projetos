const btn_aumentar = document.querySelector('.aumentar');
const btn_reduzir = document.querySelector('.reduzir');
const btn_resetar = document.querySelector('.resetar');
const contador = document.getElementById('value');
let count = 0;

function cor_contador() {
    if(count > 0 && count % 5 == 0) {
        return contador.style.color = 'blue';
    } else if (count > 0) {
        return contador.style.color = 'green';
    } else if (count < 0 && count % 5 == 0) {
        return contador.style.color = 'brown';
    } else if (count < 0) {
        return contador.style.color = 'red';
    } else {
        return contador.style.color = 'black';
    }
}

btn_aumentar.addEventListener('click', function() {
    count++
    contador.textContent = count;
    cor_contador();
})

btn_reduzir.addEventListener('click', function() {
    count--
    contador.textContent = count;
    cor_contador();
})

btn_resetar.addEventListener('click', function() {
    count = 0;
    contador.textContent = count;
    cor_contador();
})


