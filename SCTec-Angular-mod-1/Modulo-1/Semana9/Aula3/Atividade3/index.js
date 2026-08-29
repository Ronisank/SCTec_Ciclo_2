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

function cadastrarProduto() {
    // Captura os elementos do formulário
    const nome = document.getElementById('nome').value.trim();
    const categoria = document.getElementById('categoria').value;
    const preco = document.getElementById('preco').value;
    const estoque = document.getElementById('estoque').value;

    // Validação: verifica se algum campo está vazio
    if (!nome || !categoria || !preco || !estoque) {
        alert('Por favor, preencha todos os campos antes de cadastrar!');
        return;
    }

    // Se passar na validação
    alert('Dados salvos com sucesso!');
    limparFormulario();
}

function limparFormulario() {
    // Reseta todos os campos do formulário para o estado inicial
    document.getElementById('produtoForm').reset();
}