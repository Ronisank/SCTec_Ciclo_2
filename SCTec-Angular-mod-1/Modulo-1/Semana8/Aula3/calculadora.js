// const botao = document.getElementById('Curtir');
// const card = document.querySelector('h2')
// const texto = document.querySelector('p')
// const cartao = document.getElementById('curticao')


// botao.onclick = function(){
//     botao.style.backgroundColor='#66f308'
//     botao.textContent='Curtido'
//     card.textContent='Cartão Curtido!!!!'
//     texto.textContent='Obrigado Pela Curtida'
//     cartao.style.backgroundColor = '#30899993'
//     botao.classList.toggle('Curtir')

// }
// const areaTexto = document.querySelector('textarea');
// const span = document.querySelector('span')

// areaTexto.onkeyup = function(){
//     let textoUser = areaTexto.value;
//     span.innerText = `Caracteres digitados: ${textoUser.length}`
//  }
const btns = document.querySelectorAll('.numero')
const btnOp = document.querySelectorAll('.operador')
const display = document.querySelector('span')
const btnLimpar = document.querySelector('.limpar')

let num1 = '';
let operador = '';
let num2 = '';

btns.forEach(btn => {
    btn.addEventListener('click', (evt) => {
        let numBtn = evt.target
        
        if (numBtn.innerText !== 'C') {

            if (operador === '') {
                num1 += numBtn.innerText;
                display.innerText = num1;
            } else {
                num2 += numBtn.innerText;
                display.innerText = num2;
            }
        }
    })
})

btnOp.forEach(btn => {
    btn.addEventListener('click', (evt) => {
        let btnOpe = evt.target
        operador = btnOpe.innerText;
        display.innerText = operador
    })
})

function calcular() {
    const n1 = Number(num1)
    const n2 = Number(num2)
    let result = 0;
    if (operador === '+') {
        result = n1 + n2;
        display.innerText = Number.isInteger(result) ? result : result.toFixed(2)
        console.log(result.toFixed(2))
    } else if (operador === '-') {
        result = n1 - n2;
        display.innerText = Number.isInteger(result) ? result : result.toFixed(2)
        console.log(result.toFixed(0))
    } else if (operador === 'x') {
        result = n1 * n2;
        display.innerText = Number.isInteger(result) ? result : result.toFixed(2)
        console.log(result.toFixed(0))
    } else if (operador === '/') {
        if (n2 === 0) {
            display.innerText = 'Não é possivel dividir por ZERO'
        } else {
            result = n1 / n2
            display.innerText = Number.isInteger(result) ? result : result.toFixed(2)
            console.log(result.toFixed(0))
        }
    }
}
function limpar() {
    num1 = '';
    num2 = '';
    operador = '';
    display.innerText = '';
}