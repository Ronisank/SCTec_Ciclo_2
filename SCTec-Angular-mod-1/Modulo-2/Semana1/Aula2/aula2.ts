let pessoaA: [string, number, boolean] = ['Roni', 42, true];
let pessoaB: [string, number, boolean] = ['Arthur', 10, true];
let pessoaC: [string, number, boolean] = ['Mattheo', 0.4, false];

let pessoas: [string, number, boolean][]=[pessoaA,pessoaB,pessoaC]

pessoas.forEach(pessoa=>{
console.log('Pessoa: ', pessoa[0]);
console.log('Idade: ', pessoa[1]);
console.log(pessoa[2] ? 'Pessoa possui acesso ao sistema:\n ': 'Pessoa bloqueada\n');
});