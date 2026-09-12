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

// window.addEventListener('keydown', (e) => {
//     let tecla = e.key
//     console.log(tecla)
//     if (tecla === 'Delete') {
//         console.log('else do C - limpar')
//         limpar();
//     }
// });

window.addEventListener('keydown', (e) => {
    let tecla = e.key
    console.log(tecla)
    if (tecla >= '0' && tecla <= '9' || tecla === '.') {
        if (operador === '') {
            num1 += tecla;
            display.innerText = num1;
        } else {
            num2 += tecla;
            display.innerText = num2;
        }
    } else if (tecla == '-' || tecla == '+' || tecla == '*' || tecla == '/') {
        operador = tecla;
        display.innerText = operador;
    } else if (tecla === 'Enter') {
        calcular();
    }
})

function calcular() {
    const n1 = Number(num1)
    const n2 = Number(num2)
    let result = 0;
    if (operador === '+') {
        result = n1 + n2;

    } else if (operador === '-') {
        result = n1 - n2;

    } else if (operador === 'x' || '*') {
        result = n1 * n2;

    } else if (operador === '/') {
        if (n2 === 0) {
            display.innerText = 'Não é possivel dividir por ZERO';
            // return;
        }
        result = n1 / n2

    }
    display.innerText = Number.isInteger(result) ? result : result.toFixed(2)
    console.log(result.toFixed(0))
}
function limpar() {
    num1 = '';
    num2 = '';
    operador = '';
    display.innerText = '';
}