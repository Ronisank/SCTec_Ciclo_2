const prompt = require('prompt-sync')();

//numero++; <- Incremento de 1 unidade
//numero += 1; <- igual a: numero = numero + 1
//numero--; <- Subtração de 1 unidade
//numero -= 1; <- igual a: numero = numero - 1
//numero *= 2; <- igual a: numero = numero * 2

// console.log('--------------Atividade EX. FOR----------------')

// let num = Number(prompt('Digite um número: '))

// for (let contador = 1; contador<=10; contador++){
//     console.log(`${num} x ${contador} = ${num * contador}`);
// }

// console.log('--------------Atividade 1---------------')
// console.log()
// let soma = 0;
// for (let index = 0; index <= 100; index+=2) {
//     soma = soma + index
// }
// console.log(`A soma dos números pares até 100 é: ${soma}`)

// console.log()
// console.log('--------------Atividade 2---------------')
// console.log()

// let num = Number(prompt('Digite o número: '));
// let result = 1;

// for (let index = result; index <= num; index++) {
//     result *= index;
// }
// console.log(`O fatorial de ${num} é: ${result}`)

// console.log()
// console.log('--------------Exemplo While--------------')
// console.log()

// let num = prompt('Digite um número: ');
// let soma = 0;
// let cont = 1;

// while (soma < num) {
//     soma = soma + cont;
//     cont++;
// }
// console.log(`Contador: ${cont} | Soma: ${soma}`)

console.log()
console.log('--------------Atividade 2--------------')
console.log()

let aleatorio = Math.round(Math.random() * 100);

console.log(aleatorio)

let num = Number(prompt('Digite um número: '));

let tentativas = 0;

while (num != aleatorio) {
    num > aleatorio ? console.log('O palpite é maior que o numero') : console.log('O palpite é menor que o numero ')
    tentativas++;
    num = prompt('Digite um numero: ')

}
console.log(`Parabéns você acertou!!!!!`)
console.log(`Você precisou de ${tentativas} tentativas para acertar`)


