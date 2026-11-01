const tarefa = document.getElementById('inpuTarefa');
const listaTarefa = document.querySelector('ul');

let lista = [];

const tarefasSalvas = localStorage.getItem('listaTarefas');

if (tarefasSalvas !== null) {
    lista = JSON.parse(tarefasSalvas);
}

function salvar() {
    localStorage.setItem('listaTarefas', JSON.stringify(lista));
}

function adicionar() {
    const texto = tarefa.value.trim();

    if (texto === "") {
        alert('preencha o campo de tarefa');
        return;
    }
    lista.push({ texto: texto, concluida: false });

    salvar();

    tarefa.value = '';
    exibir()
}

function alternarConclusao(index) {
    lista[index].concluida = !lista[index].concluida;
    salvar();
    exibir();
}

function exibir() {
    listaTarefa.textContent = '';

    if (lista.length === 0) {
        listaTarefa.textContent = 'Sem tarefas cadastradas';
        return;
    }

    lista.forEach((el, index) => {
        const tarefaBtn = document.createElement('button')
        const elementoLista = document.createElement('li');
        const spanTarefa = document.createElement('span')

        elementoLista.textContent = el.texto
        spanTarefa.classList.add('linhaAcao');

        if (el.concluida) {
            elementoLista.classList.add('concluido');
        }
        tarefaBtn.textContent = el.concluida ? 'Concluído' : 'Concluir';

        tarefaBtn.textContent = 'Concluir'
        tarefaBtn.addEventListener('click', () => alternarConclusao(index))

        spanTarefa.classList.add('linhaAcao');

        spanTarefa.appendChild(tarefaBtn);
        elementoLista.appendChild(spanTarefa);
        listaTarefa.appendChild(elementoLista);

        tarefaBtn.setAttribute('class', 'btn-tarefa');

        listaTarefa.appendChild(elementoLista);

        elementoLista.querySelector('.linhaAcao').appendChild(tarefaBtn);
    })

};

function limpar() {
    localStorage.removeItem('listaTarefas');
    lista = [];
    exibir();
};

tarefa.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') adicionar();
});

exibir();
