const produtos = [
    {
        nome: "Notebook",
        categoria: "Informática",
        preco: 3500,
        estoque: 8
    },
    {
        nome: "Mouse",
        categoria: "Acessórios",
        preco: 80,
        estoque: 15
    },
    {
        nome: "Teclado",
        categoria: "Acessórios",
        preco: 150,
        estoque: 0
    },
    {
        nome: "Monitor",
        categoria: "Informática",
        preco: 450,
        estoque: 5
    },
    {
        nome: "Pen-Drive",
        categoria: "Acessórios",
        preco: 60,
        estoque: 0
    }
];

const corpoTabela = document.getElementById('corpo-tabela');

produtos.forEach(produto => {
    const linha = document.createElement('tr');
    const situacaoText = produto.estoque > 0 ? 'Disponivel' : 'Esgotado';

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>R$ ${produto.preco.toFixed(2)}</td>
        <td>${produto.estoque} un</td>
        <td>${situacaoText}</td>
    `;
    corpoTabela.appendChild(linha);
})

// Aguarda o HTML ser totalmente carregado antes de executar o código
// document.addEventListener('DOMContentLoaded', () => {

//     // Seleciona o corpo da tabela onde os botões estão inseridos
//     const tabelaCorpo = document.querySelector('tbody');

//     // Usa delegação de eventos para escutar cliques em qualquer botão de excluir
//     tabelaCorpo.addEventListener('click', (evento) => {

//         // Verifica se o elemento clicado possui a classe do botão de exclusão
//         if (evento.target.classList.contains('btn-excluir')) {

//             // Encontra a linha (<tr>) correspondente ao botão clicado
//             const linha = evento.target.closest('tr');

//             // Pega o nome do usuário (primeira célula da linha) para personalizar a mensagem
//             const nomeUsuario = linha.querySelector('td').textContent;

//             // Exibe um alerta de confirmação antes de apagar
//             const confirmarExclusao = confirm(`Tem certeza que deseja excluir o usuário "${nomeUsuario}"?`);

//             if (confirmarExclusao) {
//                 // Adiciona um efeito visual de desaparecimento antes de remover do HTML
//                 linha.style.transition = 'opacity 0.3s ease';
//                 linha.style.opacity = '0';

//                 // Remove a linha do documento após o término do efeito visual
//                 setTimeout(() => {
//                     linha.remove();
//                 }, 300);
//             }
//         }
//     });
// });
