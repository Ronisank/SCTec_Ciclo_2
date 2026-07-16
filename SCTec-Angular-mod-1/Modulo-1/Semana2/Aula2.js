const prompt = require('prompt-sync')();
// console.log('-------------Atividade 1---------------')

// let notaA = 6
// let notaB = 7
// let notaC = 9

// let media = (notaA + notaB + notaC) / 3

// console.log('Média das Notas: ', media.toFixed(2));

// console.log('----------------------------')
// // Atividade 1

// let numero = 25

// console.log(Math.round(numero))

// console.log('-------------Atividade 2---------------')

// // Atividade 2

// let raiz = Math.sqrt(numero)

// let expo = Math.pow(notaA, 3)

// console.log("A raíz quadrada de " + numero + " é " + raiz)
// console.log('----------------------------')
// console.log("A potência cúbica de " + notaA + " é " + expo)
// console.log('----------------------------')
// console.log("O número dividido por 3 com 3 casas decimais: " + (numero / 3).toFixed(3))
// console.log()

// //Atividade IF
// console.log('------------Atividade IF----------------')

// let a = 15;

// let b = 15;

// if (a > b) {
//     console.log("a é maior que b")
// } else if (b > a) {
//     console.log("b é maior que a")
// } else {

//     console.log('a é igual a b')
// }

// console.log('-----------------Atividade 3-------------------')
// //Atividade 3

// let frase = "Frase digitada pelo usuário foi JavaScript";
// let palavra = "User";

// if (frase.includes(palavra)) {
//     console.log('Palavra encontrada!')
// } else {
//     console.log('Palavra não encontrada!')
// }

// console.log()
// console.log('-----------------Atividade 4-------------------')
// console.log()

// let num = prompt('Digite um número: ')

//     if (num % 2 === 0) {
//         console.log('O número digitado pelo usuário é : Par')
//     }
//     else {
//         console.log('O número digitado pelo usuário é : Ímpar')

//     }
// console.log('-----------------Atividade 5-------------------');
// console.log();

// let frase = "Frase digitada pelo usuário foi JavaScript";

// let palavra = "user";

// (frase.includes(palavra)) ? console.log('Palavra encontrada!') : console.log('Palavra ' + palavra.toLocaleUpperCase() + ' não encontrada!')

// console.log()

// console.log('-----------------Atividade 6-------------------');
// console.log()

// let num = prompt('Digite um número: ');

// (num % 2 === 0) ? console.log('O número digitado pelo usuário é : Par') : console.log('O número digitado pelo usuário é : Ímpar')

// console.log()
// console.log('----------------Atividade 7----------------')
// console.log()

// let nota = prompt('Digite uma letra entre A e E : ')

// switch (nota) {
//     case 'A':
//         console.log('Excelente')
//         break;
//     case 'B':
//         console.log('Muito Bom')
//         break
//     case 'C':
//         console.log('Bom')
//         break
//     case 'D':
//         console.log('Regular')
//         break
//     case 'E':
//         console.log('Reprovado')
//         break
//         default:
//             console.log('Conceito inválido')
//         break;
// }
console.log('----------------Atividade 8----------------')
console.log()

let letra = prompt('Digite uma letra: ')

switch (letra.toLocaleUpperCase()) {
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log('A letra ' + letra.toLocaleUpperCase() + ' é uma vogal')
        break;

    default:
        console.log('A letra ' + letra.toLocaleUpperCase() + ' é uma consoante')
        break

}