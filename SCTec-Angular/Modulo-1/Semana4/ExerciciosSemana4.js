console.log('+'.repeat(20), 'Exercicio 1' + '+'.repeat(20))

//Considere o seguinte algoritmo:
const precos = [100, 250, 80, 150];
const precosPromocionais = precos.map(function (preco) {
    return preco * 0.9;
});
console.log(precos);             //[100, 250, 80, 150]
console.log(precosPromocionais); //[90, 225, 72, 135]

/**Comando: Como se dará a execução do algoritmo

Questão 1Resposta

a.
Ocorrerá o cálculo do desconto apenas do primeiro elemento do array, pois o método map() interrompe a execução após a primeira transformação

b.
O algoritmo vai substituir automaticamente os valores do array precos pelos valores com desconto, pois o método map() modifica o array original

c.
Irá apresentar um erro de execução, pois o método map() só pode ser utilizado com arrays de strings

d.
Ele irá manter o array precos inalterado e criar um novo array chamado precosPromocionais contendo os valores com 10% de desconto

e.
O algoritmo irá criar um novo array contendo apenas os produtos cujo valor seja inferior a R$ 100,00, pois essa é a finalidade do método map().*/
console.log('+'.repeat(20), 'Exercicio 2' + '+'.repeat(20))

// Considere o seguinte algoritmo:

const participantes = ["Ana", "Bruno", "Carlos"];
participantes.forEach(function (nome) {
    console.log(nome.toUpperCase());
}); 
/** ANA
    BRUNO
    CARLOS
 */

// Comando: Qual será a saída exibida no console:

// Questão 2Resposta

// a.
// Apresentar um erro de execução, pois o método toUpperCase() não pode ser utilizado dentro do forEach().

//     b.
// Converter todos os nomes para letras maiúsculas e armazená - los automaticamente no array original

// c.
// Exibir apenas o primeiro nome do array em letras maiúsculas, pois o forEach() executa apenas a primeira iteração.

//     d.
// Exibir a quantidade de caracteres de cada nome, pois o método toUpperCase() retorna o tamanho da string

// e.
// Exibir todos os nomes do array em letras maiúsculas, um por vez, utilizando o método forEach() para percorrer os elementos
console.log('+'.repeat(20), 'Exercicio 3' + '+'.repeat(20))

//Analise o seguinte algoritmo:
function gerarMensagem(nome) {
return nome.toUpperCase() + " - " + nome.length;
}
const resultado = gerarMensagem("Mariana");
console.log(resultado); //MARIANA - 7

/*: Ao executar o algoritmo apresentado, a saída exibida no console será

Questão 3Resposta

a.
MARIANA - 7

b.
Mariana - 8

c.
undefined

d.
MARIANA - 8

e.
Mariana - 7 */

console.log('+'.repeat(20), 'Exercicio 4' + '+'.repeat(20))

// o seguinte algoritmo:
const calcularDesconto = (valor) => valor - 20;
const precoFinal = calcularDesconto(150);
console.log(precoFinal); //130

/*Comando: Ao executar o algoritmo apresentado, a saída exibida no console será

Questão 4Resposta

a.
undefined

b.
150

c.
130

d.
20

e.
170 */

console.log('+'.repeat(20), 'Exercicio 5' + '+'.repeat(20))

//Uma desenvolvedora implementou o seguinte algoritmo:
const carrinho = [
    {
        produto: "Camiseta",
        valor: 50
    },
    {
        produto: "Calça",
        valor: 120
    },
    {
        produto: "Tênis",
        valor: 200
    }
];
function calcularTotal(itens) {
    let total = 0;
    for (let item of itens) {
        total += item.valor;
    }
    return total;
}
console.log(calcularTotal(carrinho)); //370

/**Comando: Ao executar o algoritmo apresentado, a saída exibida no console será

Questão 5Resposta

a.
50
120
200

b.
undefined

c.
320

d.
Camiseta Calça Tênis

e.
370 */

console.log('+'.repeat(20), 'Exercicio 6' +'+'.repeat(20))

// Analise o seguinte algoritmo:
// const produtos = [
//     { nome: "Monitor", preco: 850 },
//     { nome: "Mouse", preco: 120 },
//     { nome: "Teclado", preco: 180 }
// ];
// let indice = 0;
// while (indice < produtos.length) {
//     console.log(produtos[indice].nome);
//     indice++;
// }

// Comando: Ao executar o algoritmo apresentado, a saída exibida no console será

// Questão 6Resposta

// a.
//     Monitor
// 850
// Mouse
// 120
// Teclado
// 180

// b.
//     Mouse
// Teclado

// c.
//     Monitor
// Mouse
// Teclado

// d.
// 850
// 120
// 180

// e.
//     Monitor

console.log('+'.repeat(20), 'Exercicio 7' + '+'.repeat(20))

// Considere o seguinte algoritmo
// const produtos = [
//     {
//         nome: "Mouse",
//         estoque: 15
//     },
//     {
//         nome: "Teclado",
//         estoque: 0
//     }
// ];
// if (produtos[0].estoque > 0) {
//     console.log(produtos[0].nome + " disponível"); //Mouse disponível
// } else {
//     console.log(produtos[0].nome + " indisponível");
// }

// Comando: Ao executar o algoritmo, qual será a saída exibida no console

// Questão 7Resposta

// a.
// Teclado indisponível

// b.
// Mouse indisponível

// c.
// Teclado disponível

// d.
// undefined disponível

// e.
// Mouse disponível

console.log('+'.repeat(20), 'Exercicio 8' + '+'.repeat(20))

// //Um desenvolvedor implementou o seguinte algoritmo:
// const produto = {
// nome: "Notebook",
// preco: 3500,
// exibirInformacoes() {
// return `${this.nome} - R$ ${this.preco}`;
// }
// };
// console.log(produto.exibirInformacoes()); //Notebook - R$ 3500

/*comando: Ao executar o algoritmo apresentado, a saída exibida no console será

Questão 8Resposta

a.
produto - R$ preco

b.
{ nome: "Notebook", preco: 3500 }

c.
undefined - R$ undefined

d.
Notebook - R$ 3500

e.
Notebook
3500 */

console.log('+'.repeat(20), 'Exercicio 9' + '+'.repeat(20))

/**Durante o desenvolvimento de um sistema de controle de tarefas, um desenvolvedor precisa armazenar as atividades que serão realizadas ao longo do dia. Sempre que uma nova tarefa é cadastrada, ela deve ser adicionada ao final da lista. Caso a última tarefa cadastrada seja cancelada, ela deve ser removida da lista antes da exibição das atividades restantes.

Comando: Para implementar esse comportamento utilizando os recursos próprios dos arrays em JavaScript, a melhor ação é

Questão 9Resposta

a.
Utilizar o método pop() para adicionar a nova tarefa ao final do array e o método push() para remover a última tarefa cadastrada.

b.
Utilizar uma estrutura for para substituir a utilização dos métodos de array, adicionando e removendo manualmente os elementos

c.
Utilizar o método push() para adicionar a nova tarefa ao final do array e o método pop() para remover a última tarefa cadastrada

d.
Utilizar uma estrutura if para adicionar e remover elementos do array, sem utilizar métodos específicos para manipulação da lista

e.
Utilizar o método push() para adicionar a nova tarefa e remover a primeira tarefa da lista utilizando o método pop(). */

console.log('+'.repeat(20), 'Exercicio 10' + '+'.repeat(19))

// Considere o seguinte algoritmo
const notas = [8, 7, 5, 9];
const existeReprovado = notas.some(function (nota) {
    return nota < 6;
});
const todosAprovados = notas.every(function (nota) {
    return nota >= 6;
});
console.log(existeReprovado);
console.log(todosAprovados);

// Comando: Qual será a saída exibida no console

// Questão 10Resposta

// a.
//     true
// false

// b.
//     false
// false

// c.
//     true
// true

// d.
//     false
// true

// e.
// 5
// false