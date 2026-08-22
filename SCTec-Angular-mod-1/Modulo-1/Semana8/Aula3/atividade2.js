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
const btns = [...document.querySelectorAll('.primeira')]
const btnOp = [...document.querySelectorAll('.operador')]
const display = document.querySelector('span')

function chamaOperador() {

    return btnOp.forEach((el) => {
        el.addEventListener("click", (evt) => {
            const el = evt.target
            console.log(el.innerHTML)
            display.innerHTML = el.innerHTML
        })
    })
}
let arrayNum = [];

function chamaNumeros() {

    return btns.forEach((el) => {
        el.addEventListener("click", (evt) => {
            const el = evt.target
            const valorEl = el.innerHTML
            arrayNum.push(valorEl)
            display.innerHTML = arrayNum
            console.log(arrayNum)
        })
    })
}
chamaNumeros();
chamaOperador();

