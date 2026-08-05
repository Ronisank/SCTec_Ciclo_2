console.log('='.repeat(20), 'ATIVIDADE 1 - PARAMETRO PADRÃO ', '='.repeat(20))

//PARAMETRO PADRÃO
function exibirBoasVindas(nome = 'Visitante') {
    return console.log(`Olá! ${nome} Bem Vindo`);
}

exibirBoasVindas('Lucas');
exibirBoasVindas();

console.log('='.repeat(20), 'ATIVIDADE 2 - PARAMETRO REST ', '='.repeat(20))

function calcularMedia(...notas) {
    let somaNotas = 0;
    notas.forEach((nota) => {
        somaNotas += nota;
    });


    return somaNotas / notas.length;
}

let media = calcularMedia(4, 6, 8, 7, 5);

console.log('O valor da média da turma é: ', media);

/* FOR OF
function calcularMedia(...notas){
let soma = 0;
for (let nota of notas){
    soma += nota;
}
let media = soma / notas.length;return media;
}
console.log(calcularMedia(5, 8, 9))
 */

console.log('='.repeat(20), 'FUNÇÕES DE CALLBACK', '='.repeat(20));
/**Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
 */

//? EXEMPLOS - CALLBACK

function greeting(name) {
    console.log("Olá " + name); //alert
}

function processUserInput(callback) {
    var name = 'Roni'; //prompt("Por favor insira seu nome.");
    callback(name);
}

processUserInput(greeting);

console.log('='.repeat(20), 'ATIVIDADE DE CALLBACK', '='.repeat(20));


function paraMaiusculas(texto) {
    return texto.toUpperCase();
}
function paraMinusculas(texto) {
    return texto.toLowerCase();
}
function processarMsg(msg, callback) {
    return callback(msg);
}

console.log(processarMsg('TexTo tesTE', paraMaiusculas));
console.log(processarMsg('TEXTO TESTE', paraMinusculas));
console.log();

console.log('='.repeat(20), 'ATIVIDADE 3 - DE CALLBACK', '='.repeat(20));

function gerarResumo(valor) {
    return `O valor final do pedido é R$ ${valor}`
}

function processarPedido(valor, callback) {
    //Operador Ternário
    valor >= 300 ? valor -= 50 : valor;

    return callback(valor)
}
console.log(processarPedido(250, gerarResumo));
console.log(processarPedido(500, gerarResumo));

console.log('='.repeat(20), 'ATIVIDADE -- FUNÇÕES RECURSIVAS', '='.repeat(20));
/**O primeiro ponto que define recursão é: uma função que chama a si mesma.

O segundo ponto é que, a cada chamada de função, eu devo alterar o estado da minha entrada de dados, de modo que essa alteração de estado deve convergir para o caso base.
 */

// function fatorial(n) {
//     if (n == 1) {
//         return n
//     }
//     return n * fatorial(n - 1);
// }

// console.log(`O fatorial de 3 é: `, fatorial(3));
// console.log(`O fatorial de 4 é: `, fatorial(4));
// console.log(`O fatorial de 5 é: `, fatorial(15));

function contagemRegressiva(num) {
    console.log(num);
    if (num == 0) {
        return;
    }
    contagemRegressiva(num - 1);
}
contagemRegressiva(10);