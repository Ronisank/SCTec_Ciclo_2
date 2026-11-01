import { Produto, produtos } from "./atv2.ts";
/*
1. Crie uma função chamada cadastrarProduto que receba um produto e o adicione ao array de produtos.
A função deverá verificar se o preço é maior que zero. Caso contrário, deverá informar que o produto possui um preço inválido.

2. Crie uma função chamada exibirResumoProdutos que receba um array de produtos e utilize uma estrutura de repetição para exibir o nome, o preço, a categoria e a disponibilidade de cada item.

*/

function cadastrarProduto(produto: Produto) {
  if (produto.preco > 0) {
    produtos.push(novoProduto);
    console.table(produtos);
  } else {
    console.log("Este produto não possui preço válido.");
  }
}

function exibirResumoProdutos(produto: Produto[]) {
  console.log(
    produtos.map((produto) => {
      return {
        nome: produto.nome,
        preco: produto.preco,
        categoria: produto.categoria,
        disponivel: produto.disponivel === true ? "SIM" : "NÃO",
      };
    }),
  );
}
const novoProduto: Produto = {
  id: 104,
  nome: "Caixa de Som BlueTooth",
  preco: 300,
  disponivel: false,
  categoria: "Eletrônicos",
};

cadastrarProduto(novoProduto);
exibirResumoProdutos(produtos);
