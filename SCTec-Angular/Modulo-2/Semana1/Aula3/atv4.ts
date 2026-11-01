import {
    clientes,
    Pedido,
    produtos,
    RegistroAuditoria,
    StatusPedido,
} from "./atv2";

export const auditoria: RegistroAuditoria[] = [];

export function atualizarStatusPedido(pedidos: Pedido, novoStatus: StatusPedido) {
  if (pedidos.status === novoStatus) {
    const tuplAuditoria: RegistroAuditoria = [
      pedidos.id,
      "Falha na Troca de status pedido",
      false,
    ];
    auditoria.push(tuplAuditoria);
  } else {
    pedidos.status = novoStatus;
    const tuplAuditoria: RegistroAuditoria = [
      pedidos.id,
      "Troca de status pedido",
      true,
    ];
    auditoria.push(tuplAuditoria);
    // console.log(`Pedido ${novoStatus}.`);
  }
}

export const novoPedido: Pedido = {
  id: 1004,
  cliente: clientes[0],
  produtos: [produtos[0]],
  status: StatusPedido.ENTREGUE,
  valorTotal: 4650.0,
};
export const novoPedido2: Pedido = {
  id: 1005,
  cliente: clientes[0],
  produtos: [produtos[1]],
  status: StatusPedido.PENDENTE,
  valorTotal: 4650.0,
};
export const novoPedido3: Pedido = {
  id: 1006,
  cliente: clientes[0],
  produtos: [produtos[2]],
  status: StatusPedido.ENVIADO,
  valorTotal: 4650.0,
};
atualizarStatusPedido(novoPedido, StatusPedido.ENVIADO);
atualizarStatusPedido(novoPedido2, StatusPedido.ENTREGUE);
atualizarStatusPedido(novoPedido3, StatusPedido.ENVIADO);
// console.log(novoPedido);
// console.log("Array da auditoria: ", auditoria);
