// endereco.ts - INTERFACE (TypeScript): descreve o "formato" do objeto que o viaCEP devolve.
// Interface não vira JavaScript: serve só para o editor e o compilador checarem os tipos.
export interface Endereco {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string; // cidade
  uf: string;
  numero?: string; // "?" = OPCIONAL (não vem do viaCEP, o usuário digita)
  erro?: boolean | string; // o viaCEP devolve { "erro": "true" } quando o CEP não existe
}
