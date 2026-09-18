const titulo = document.querySelector('input');
const corpo = document.querySelector('textarea');
// const btnSalvar = document.querySelector('button');

async function salvar() {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                titulo: titulo.value,
                corpo: corpo.value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`)
        }
        const dados = await resposta.json();
        alert(`Dados salvos com sucesso: ${dados.titulo} --- ${dados.corpo}`)
    } catch (error) {
        console.error(error, ' Deu B.O')
    }
}