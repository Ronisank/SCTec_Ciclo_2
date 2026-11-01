const inicio = document.getElementById('iniciar');
const cancelar = document.getElementById('cancelar');
const tempo = document.querySelector('.tempo');

let temporizador = 10;

let i = temporizador;
let id;

tempo.innerHTML = temporizador + 's';

inicio.addEventListener('click', () => {
    if (inicio) {
        confirm('Deseja iniciar o periodo de estudo')
        id = window.setInterval(() => {
            tempo.innerHTML = i + 's';
            console.log('execucao:', i);

            if (i == 0) {
                clearInterval(id)
               cancelamento()
            }
            i -= 1;
        }, 1000);

    }
    i = temporizador;
    tempo.innerHTML = temporizador + 's'
})

function cancelamento() {
    clearInterval(id)
    window.setTimeout(() => {
        alert('Periodo de estudo Finalizado')
        tempo.innerHTML = temporizador + 's'
    }, 1000)
}