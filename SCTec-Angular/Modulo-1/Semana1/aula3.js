const prompt = require('prompt-sync')();

let alt = Number(prompt("Digite a altura"));
let larg = Number(prompt("Digite a largura"));

let area = alt*larg
console.log("A area tem um valor de " + area);