//? INTERFACES E ENUMS TYPESCRIPT

//!INTERFACES TYPESCRIPT

// Tipo de União: |
// let cnpj: string | number;

// Tipo Literal
// type SituacaoUsuario = 'ativo' | 'inativo' | true | false | 1 | 0;

// let situacao: SituacaoUsuario;

// Tipo de intersecção: &
// type DadosPessoais = {nome: string, idade: number};
// type Endereco = {rua: string, numero: number, cidade: string, estado: string, pais: string};

// type Pessoa = DadosPessoais & Endereco;

// * Interfaces
// interface Animal {
//   readonly id: number,
//   raca: string,
//   tamanho: number
// }
// interface Animal {
//   idade: number
// }

// * ENUMs
// enum Situacao {
//   Inativo, //0
//   Pendente, //1
//   EmProcessamento, //2
//   Completo //3
// }

// enum UsuarioSituacao {
//   Inativo = 0,
//   Pendente = 'PENDENTE',
//   EmProcessamento = 'EMPROCESSAMENTO',
//   Completo = 'COMPLETO'
// }