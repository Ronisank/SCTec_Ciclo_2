export type Produto = {
  id: number;
  nome: string;
  preco: number;
  disponivel: boolean;
  categoria: "Eletrônicos" | "Acessórios" | "Informática";
};

export interface Cliente {
  id: number;
  nome: string;
  email?: string;
  ativo: boolean;
}

export enum StatusPedido {
  PENDENTE = 'Pendente',
  ENVIADO = 'Enviado',
  ENTREGUE = 'Entregue',
}

type ProdutoIdentificado = Produto & { codigoInterno: string };

export interface Pedido {
  readonly id: number;
  cliente: Cliente;
  produtos: Produto[];
  status: StatusPedido;
  valorTotal: number;
}

export type RegistroAuditoria = [number, string, boolean];

export const clientes: Cliente[] = [
  { id: 1, nome: "Ana Silva", email: "ana@email.com", ativo: true },
  { id: 2, nome: "Carlos Souza", ativo: false },
  { id: 3, nome: "Beatriz Costa", email: "beatriz@email.com", ativo: true },
];

export const produtos: Produto[] = [
  {
    id: 101,
    nome: "Notebook",
    preco: 4500.0,
    disponivel: true,
    categoria: "Informática",
  },
  {
    id: 102,
    nome: "Mouse Sem Fio",
    preco: 150.0,
    disponivel: true,
    categoria: "Acessórios",
  },
  {
    id: 103,
    nome: "Monitor 4K",
    preco: 2200.0,
    disponivel: false,
    categoria: "Eletrônicos",
  },
];

export const pedidos: Pedido[] = [
  {
    id: 1001,
    cliente: clientes[0],
    produtos: [produtos[0]],
    status: StatusPedido.ENTREGUE,
    valorTotal: 4650.0,
  },
  {
    id: 1005,
    cliente: clientes[0],
    produtos: [produtos[1]],
    status: StatusPedido.ENTREGUE,
    valorTotal: 350.0,
  },
  {
    id: 1002,
    cliente: clientes[1], // Beatriz Costa
    produtos: [produtos[1]], // Mouse Sem Fio
    status: StatusPedido.ENVIADO,
    valorTotal: 150.0,
  },
  {
    id: 1003,
    cliente: clientes[2], // Beatriz Costa
    produtos: [produtos[2]], // Mouse Sem Fio
    status: StatusPedido.ENVIADO,
    valorTotal: 150.0,
  },
];


// pedidos.map((pedido) => {
//   console.log({
//     idPedido: pedido.id,
//     cliente: pedido.cliente.nome,
//     produtos: pedido.produtos.map((produto) => produto.nome),
//     status: pedido.status,
//     valorTotal:pedido.valorTotal
//   });
// });