let produtos = [
  { nome: "Notebook", preco: 3500, disponivel: true },
  { nome: "Mouse", preco: 80, disponivel: false },
  { nome: "Teclado", preco: 150, disponivel: true },
  { nome: "Monitor", preco: 1200, disponivel: true },
  { nome: "Headset", preco: 250, disponivel: false },
];

// interface Produto {
//   nome: string;
//   preco: number;
//   disponivel: boolean;
// }

// function filtrarDisponiveis(lista: Produto[]): Produto[] {
//   return lista.filter(produto => produto.disponivel);
// };

// const produtosDisponiveis = filtrarDisponiveis(produtos);
// // console.log(produtosDisponiveis);

// function filtrarValorProdutos(lista: Produto[],valor:number){
//   return lista.filter(item => item.preco <= valor)
  
// }
// console.log(filtrarValorProdutos(produtos,149))