// let limite = 4;

// for(i=1;i<=4;i++){
//     console.log(i)
// }
// let idade = 16;
// let mensagem = idade >= 18 ? "Mensagem A" : "Mensagem B";

// console.log(mensagem);

// let limite = 4;
// let contador = 1;
// let total = 0;

// while (contador <= limite) {
//     total = total + contador;
//     contador++;
// }

// console.log(total);

// let turno = "TaRdE";
// let periodo = turno.toUpperCase();

// switch (periodo) {
//     case "tarde":
//         console.log("Início às 12:00");
//         break;

//     case "Tarde":
//         console.log("Início às 12:30");
//         break;

//     case "TARDE":
//         console.log("Início às 13:00");
//         break;

//     default:
//         console.log("Turno inválido");
// }

let limite = 5;
let contador = 1;
let total = 0;

do {
    total += contador * 2;
    contador += 2;
} while (contador < limite);

console.log(total);