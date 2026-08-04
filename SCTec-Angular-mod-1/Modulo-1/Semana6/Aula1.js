console.log('='.repeat(20), 'EXEMPLO CLOSURE', '='.repeat(20))

function criarSomatorio(numero_funcao) {
    let somatorio = numero_funcao;

    return function (numero_retorno) {
        return somatorio + numero_retorno;
    }
}

let soma = criarSomatorio(10);

console.log(soma(20));

/**
 Uma closure é a combinação de uma função com as referências ao estado que a circunda (o escopo). Em outras palavras, uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna. Em JavaScript, as closures são criadas toda vez que uma função é criada.
Uma vez que uma função aninhada é uma closure, isto significa que uma função aninhada pode "visualizar" os argumentos e variáveis de sua função de contenção. Ou seja, a função interior contém o escopo da função exterior.
 */

console.log('='.repeat(20), 'ATIVIDADE 1 - CLOSURE', '='.repeat(20))

function adicionaQuadrado(num_a, num_b) {

    function quadrado(num) {
        return num * num;
    }
    return quadrado(num_a) + quadrado(num_b);
}
// let teste = adicionaQuadrado(5, 4);

console.log(adicionaQuadrado(5, 6))

console.log('='.repeat(15), 'EXEMPLO - CLOUSURE-CONTADOR', '='.repeat(15))

function contador() {
    let contador = 0;
    return function () {
        contador++;
        return contador;
    }
}

let count = contador();

console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());

console.log('='.repeat(20), 'ATIVIDADE 2 ', '='.repeat(20

))

function criarMultiplicador(fator) {
    return function (num1) {
        return fator * num1;
    }
}
let dobro = criarMultiplicador(5);

console.log(dobro(1))
console.log(dobro(2))
console.log(dobro(3))
console.log(dobro(4))
console.log(dobro(5))
console.log(dobro(6))

console.log('='.repeat(20), 'EXEMPLO - PARAMETROS - PADRÃO / REST ', '='.repeat(20))

//PARAMETROS - PADRÃO
function multiplicar(a, b = 1) {
    return a * b;
}
console.log(multiplicar());
console.log(multiplicar(5));
console.log(multiplicar(5, 2));
// \x1b[32m ativa a cor verde, \x1b[0m reseta para a cor padrão
console.log("\x1b[32mTexto verde no terminal Node.js\x1b[0m");

console.log('='.repeat(20), 'ATIVIDADE 3 - PARAMETRO PADRÃO ', '='.repeat(20))

function calcularTotalCompra(valor, frete = 20) {
    return valor + frete;
}
logTerminal(calcularTotalCompra(10, 30), 'vermelho');
console.log(calcularTotalCompra(10));
console.log(calcularTotalCompra(30));
console.log(calcularTotalCompra(50));
console.log(calcularTotalCompra());

console.log('='.repeat(20), 'ATIVIDADE - PARAMETRO PADRÃO ', '='.repeat(20))

function exibirBoasVindas(nome = 'Visitante') {
    return console.log(`Olá! ${nome} Bem Vindo`);
}

exibirBoasVindas('Lucas');
exibirBoasVindas();

export function logTerminal(texto, cor = 'azul') {
    const cores = {
        verde: '\x1b[32m',
        vermelho: '\x1b[31m',
        azul: '\x1b[34m',
        amarelo: '\x1b[33m',
        reset: '\x1b[0m'
    };

    const codigoCor = cores[cor] || cores['azul'];
    console.log(`${codigoCor}${texto}${cores.reset}`);
}
console.log('='.repeat(20), 'ATIVIDADE 4 - REST', '='.repeat(20),'\n');

//PARAMETROS - REST
function listarParticipantes(...nomes){
  for (const element of nomes) {
}
console.log(nomes)
console.log(nomes.length)

}
listarParticipantes("Lucas", "Beatriz", "Gabriel", "Camila", "Matheus", "Larissa");

console.log('='.repeat(20), 'ATIVIDADE 4 - REST','='.repeat(20));

