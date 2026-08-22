const produtos = [
    { nome: "Mouse", estoque: 10 },
    { nome: "Teclado", estoque: 0 },
    { nome: "Monitor", estoque: 5 },
    { nome: "Webcam", estoque: 0 }
];
const disponiveis = produtos.filter(function (produto) {
    return produto.estoque > 0;
});
console.log(disponiveis);


const palavra = "JavaScript";
let indice = 0;
let resultado = "";
while (indice < palavra.length) {
    if (indice % 2 === 0) {
        resultado += palavra[indice].toUpperCase();
    } else {
        resultado += palavra[indice];
    }
    indice++;
}
console.log(resultado);