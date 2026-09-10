const tarefa = document.getElementById('inpuTarefa');
const btnAdd = document.getElementById('adicionar');
const btnLimpar = document.querySelector('.btn-limpar');
const listaTarefa = document.querySelector('ul');

let storageLista = [];
let lista = [];

const tarefasSalvas = localStorage.getItem('listaTarefas');

if (tarefasSalvas !== null) {
    lista = JSON.parse(tarefasSalvas);
}

function adicionar() {
    if (tarefa.value === ""){
        alert('preencha o campo de tarefa')
    }else{

        let listaDeTarefas = tarefa.value
        
        lista.push(listaDeTarefas)
        
        localStorage.setItem('listaTarefas', JSON.stringify(lista));
        
        tarefa.value='';
        
    }
    exibir()
}
function exibir() {
    listaTarefa.innerHTML = '';

    storageLista = localStorage.getItem('listaTarefas');

    if (storageLista !== null) {

        let exibirLista = JSON.parse(storageLista);

        exibirLista.forEach(element => {
            const tarefaBtn = document.createElement('button')
            const elementoLista = document.createElement('li');

            elementoLista.innerHTML = `${element}<span class="linhaAcao"></span> </li>`;

            tarefaBtn.textContent = 'Concluir'
            tarefaBtn.addEventListener('click', () => {
                elementoLista.classList.toggle('concluido')
                tarefaBtn.textContent = tarefaBtn.textContent === 'Concluir' ? 'Concluído' : 'Concluir'

            })
            tarefaBtn.setAttribute('class', 'btn-tarefa');

            listaTarefa.appendChild(elementoLista);

            elementoLista.querySelector('.linhaAcao').appendChild(tarefaBtn);

        });

    } else {
        listaTarefa.innerHTML = 'Sem tarefas cadastradas'

    }
}

function limpar() {
    localStorage.removeItem('listaTarefas');
    lista = [];
    listaTarefa.innerHTML = ''
    exibir();
}
exibir()