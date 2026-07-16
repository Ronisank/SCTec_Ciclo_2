const prompt = require('prompt-sync')();

let produto = '';
let categoria = '';
let preco;

let continuar;

let estoque = 0;
let soma = 0;
let nomeProdutoMaisCaro;
let precoProdutoMaisCaro = 0;
let qtdEletronicos = 0;

do {
    produto = prompt("Digite o nome do produto: ")
    categoria = prompt("Digite a categoria do produto: ")
    preco = prompt("Digite o valor do produto: ");

    console.log('Nome do produto: ' + produto.toUpperCase());


    switch (categoria.toLocaleUpperCase()) {
        case 'E':
            console.log('Categoria: Eletronicos');
            qtdEletronicos += 1;
            break;
        case 'V':
            console.log('Categoria: Vestuario')
            break;
        case 'A':
            console.log('Categoria: Alimentos')
            break;

        default:
            console.log('Categoria Inválida')
            break;
    }
    if (preco <= 50) {
        console.log('produto barato')
    } else if (preco <= 200) {
        console.log('Produto Médio Valor')
    } else {
        console.log('Produto caro')
    }
    estoque += 1;
    soma += +preco;

    if (preco > precoProdutoMaisCaro){
        precoProdutoMaisCaro = preco;
        nomeProdutoMaisCaro = produto;
    }
    
    continuar = prompt('Cadastrar outro produto? (S/N)');



} while (continuar.toUpperCase() != 'N');

console.log('Quantidade de produtos cadastrados: ' + estoque);
console.log('Soma total dos produtos: ' + soma);
console.log('Média dos preços dos produtos cadastrados: ', (soma / estoque).toFixed(2));
console.log('Quantidade de eletronicos cadastrados: ' + qtdEletronicos)
