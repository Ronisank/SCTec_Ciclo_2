import {
  Cliente,
  clientes,
  Pedido,
  pedidos,
  Produto,
  produtos,
  StatusPedido,
} from "./atv2";
import { auditoria } from "./atv4";
// Crie uma função chamada gerarRelatorioLoja que receba os arrays de produtos, clientes e pedidos. A função deverá:

// Exibir a quantidade total de produtos cadastrados. OK
// Utilizar filter() para contar quantos produtos estão disponíveis. OK
// Utilizar filter() para identificar quantos clientes estão ativos. OK
// Utilizar estruturas de repetição e condicionais para contar os pedidos de cada estado do enum StatusPedido. OK
// Exibir o valor total dos pedidos que estejam com status Entregue. OK
// Exibir os registros armazenados no array de auditoria. OK

function gerarRelatorioLoja(
  produtos: Produto[],
  clientes: Cliente[],
  pedidos: Pedido[],
) {
  let contagemProdutos = produtos.length;
  let produtosDisponiveis = produtos.filter((item) => item.disponivel);
  let clientesAtivos = clientes.filter((item) => item.ativo);
  console.log(
    `\nTotal de produtos: ${contagemProdutos}\n\nProdutos Disponíveis: ${produtosDisponiveis.length}\n`,
  );
  console.log(`Clientes ativos: ${clientesAtivos.length}\n`);
  let statusPendente = 0;
  let statusEnviado = 0;
  let statusEntregue = 0;
  
  pedidos.forEach((item) => {
      if (item.status === StatusPedido.PENDENTE) {
          statusPendente++;
        } else if (item.status === StatusPedido.ENVIADO) {
            statusEnviado++;
        } else if (item.status === StatusPedido.ENTREGUE) {
          statusEntregue++;
        }
    });
    let somaValorTotal = pedidos
      .filter((item) => item.status === StatusPedido.ENTREGUE)
      .reduce((acc, valorAtual) => acc + valorAtual.valorTotal, 0);

    console.log(
        "Entregue:",
        statusEntregue,
        "Enviado:",
        statusEnviado,
        "Pendente:",
        statusPendente,
    '\n');
    console.log("O valor total de pedidos entregues é: R$", somaValorTotal.toFixed(2),'\n');
    console.log("Array da auditoria: ", auditoria);
}

gerarRelatorioLoja(produtos, clientes, pedidos);
