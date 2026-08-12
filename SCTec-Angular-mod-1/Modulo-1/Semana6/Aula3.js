console.log('='.repeat(20), 'ATIVIDADE 1 - RECURSIVIDADE', '='.repeat(20))

function somarNumeros(num) {
    if (num == 1) return num;
    return num + somarNumeros(num - 1)
}
const n = 10;

// console.log(`A soma dos números de 1 a ${n}: ${somarNumeros(n)}`)

console.log('='.repeat(20), ' OBJETOS E ARRAYS ', '='.repeat(20))

// ?Cópia por referência x cópia por valor

//? Em JavaScript, arrays e objetos são copiados por referência e não por valor. Atribuir uma variável a outra apenas repete o endereço da memória. Para criar uma cópia real sem alterar o original, usamos cópia rasa (shallow copy) com o operador ... (spread) ou cópia profunda (deep copy) com structuredClone


//!Cópia por referência x cópia por valor

let a = 'teste';
let b = { valor: 'testeB' };
let c = ['testeC1', 'testeC2'];

let d = a;
let e = b; //cópia por referência 
let f = c; //cópia por referência

d = 'novoTeste';
e.valor = 'novoTesteB';
f[0] = 'novoTesteC1';

// console.log('Variavel a:', a); // Output: ?
// console.log('Variavel b:', b); // Output: ?
// console.log('Variavel c:', c); // Output: ?
// console.log('Variavel d:', d); // Output: ?
// console.log('Variavel e:', e); // Output: ?
// console.log('Variavel f:', f); // Output: ?

let objOrin = { valor: 'testeB' }
// let objCopia = objOrin; // copia por referencia

//let objCopia = {...objOrin} //* copia por valor operador spread (...) - copia rasa

//* copia por valor usando structureClone - copia profunda
let objCopia = structuredClone(objOrin)


objCopia.valor = 123;

// console.log('Objeto Original: ', objOrin);

// console.log('Objeto Cópia: ',objCopia);

console.log('='.repeat(20), ' ITERAÇÃO OBJETOS ', '='.repeat(20))

const pessoa = {
    nome: 'Jane',
    idade: 33,
    altura: 179,
    endereco: 'Rua 2B'
}
console.log('===== Exemplo com iteração com FOR...IN ========')

for (const propriedade in pessoa) {
    console.log(propriedade)

}

//?Object.keys()

// console.log('\n====== Object.keys() =======');
// Object.keys(pessoa).forEach(propriedade => {
//     console.log(propriedade);
// });

// for(let valor of pessoa) { //Esta estrutura não funciona para iteração em objetos
//   console.log(valor);
// }

// console.log('\n===== Object.values()======');
// Object.values(pessoa).forEach(propriedade => {
//     console.log(propriedade);
// });


console.log('='.repeat(15), ' ATIVIDADE 2', '='.repeat(15))

/**let animais = ['cachorro', 'gato', 'rato', 'passaro', 'pato'];

//Exemplo includes
console.log('O array animais possui o valor gato?', animais.includes('gato'));
console.log('O array animais possui o valor borboleta?', animais.includes('borboleta'));

//Exemplo indexOf
console.log('Em qual posição do array animais está o valor gato?', animais.indexOf('gato'));
console.log('Em qual posição do array animais está o valor borboleta?', animais.indexOf('borboleta'));

//Exemplo slice
console.log('Recorte do array animais a partir da posicao 3', animais.slice(3));
console.log('Recorte do array animais da posicao 1 até 4', animais.slice(1, 4));

console.log('Array animais', animais); */

const filmes = [
    "Avatar",
    "Vingadores",
    "Interestelar",
    "Barbie",
    "Divertida Mente",
    "Minecraft"
];

console.log('O filme Barbie está no catalogo?');

if (filmes.includes('Barbie')) {
    console.log('O filme está disponivel!')
}else{
    console.log('O filme não está disponivel!')
}
console.log('\nO filme Interestelar está posição ', filmes.indexOf('Interestelar'))

console.log('Meus filmes preferidos: ', filmes.slice(0,3))

//!===================================================

console.log('='.repeat(15), ' ATIVIDADE 3', '='.repeat(15))

const tarefas = [
    "Estudar JavaScript",
    "Fazer exercícios",
    "Ler documentação",
    "Enviar atividade",
    "Revisar conteúdo"
];
/**A função deverá:
Verificar se a tarefa informada existe no array utilizando includes().
Caso a tarefa não exista, exibir a mensagem: “Tarefa não encontrada!”
Caso a tarefa exista:
Descobrir sua posição utilizando indexOf().
Removê-la do array utilizando splice().
Exibir a mensagem: “Tarefa removida com sucesso!”
Ao final da função, exibir a lista atualizada de tarefas.

 */
// function removerTarefa(nomeTarefa) {
//      // Verifica se a tarefa existe no array
//     if (!tarefas.includes(nomeTarefa)) {
//         console.log("Tarefa não encontrada!");
//     } else {
//         // Descobre a posição da tarefa
//         const indice = tarefas.indexOf(nomeTarefa);
        
//         // Remove a tarefa usando o splice
//         tarefas.splice(indice, 1);
        
//         console.log("Tarefa removida com sucesso!");
//     }
    
//     // Exibe a lista atualizada
//     console.log("Lista de tarefas atualizada:", tarefas);
// }

function removerTarefa(nomeTarefa) {
    if(tarefas.includes(nomeTarefa) === true){
        let id = tarefas.indexOf(nomeTarefa)
        tarefas.splice(id,1);
        console.log('A tarefa removida com sucesso')
    }else{
        console.log('Tarefa não encontrada')
    }
    console.table(tarefas)
}

// removerTarefa("Ler documentação"); // Tarefa existente
removerTarefa("Ir ao supermercado"); // Tarefa não existente