const prompt = require('prompt-sync')();

console.log()
console.log('-------------Atividade 1--FILA (FIFO)-------------------')
console.log()

// let carrinho = [];
// let continua;

// do {
//     const fruta = prompt('Digite uma fruta: ');

//     carrinho.unshift(fruta);

//     if (carrinho.length > 5) {
//         carrinho.pop()
//     }
//     console.log(carrinho)
//     continua = prompt('Deseja continuar? ')

// } while (continua.toLocaleUpperCase() != 'SAIR');

// console.log(carrinho)

console.log()
console.log('-------------Atividade 2----PILHA (LIFO)-------------------')
console.log()

let carrinho = ['uva','pera','banana'];
let continua;

// do {
//     const fruta = prompt('Digite uma fruta: ');
    
//         carrinho.push(fruta);

//     if (carrinho.length > 5) {
//         carrinho.pop()
//     }
//     console.log(carrinho)
//     continua = prompt('Deseja continuar? ')

// } while (continua.toLocaleUpperCase() != 'SAIR');

// console.log(carrinho)
// const fruta = prompt('Digite uma fruta: ');

// do {
    
//     if(carrinho.find(item => item == fruta)){
//         console.log('Fruta já está no carrinho')
//     }else {
//         carrinho.push(fruta);
//     }

// } while (condition);
// console.log(carrinho)

console.log()
console.log('-------------Atividade 3----Arrays Ex.: MAP-------------------')
console.log()

// const precos = [12.5, 30, 99.99, 5];

// const arrayMap = precos.map((item)=>{
//     return 'R$ '+ item.toFixed(2)
// })

// console.log(arrayMap)

console.log()
console.log('-------------Atividade 4-------------------')
console.log()

const filmes = [
    {
        titulo: "Interestelar",
        genero: "Ficção",
        nota: 9.5,
        disponivel: true
    },
    {
        titulo: "Toy Story",
        genero: "Animação",
        nota: 8.7,
        disponivel: true
    },
    {
        titulo: "Velozes e Furiosos",
        genero: "Ação",
        nota: 7.2,
        disponivel: false
    },
    {
        titulo: "O Poderoso Chefão",
        genero: "Drama",
        nota: 9.8,
        disponivel: true
    },
    {
        titulo: "Divertida Mente",
        genero: "Animação",
        nota: 8.9,
        disponivel: false
    }
];

const filmesDispon = filmes.filter(item => item.disponivel === true);
const filmesMelhorAvaliados = filmes.filter(item => item.nota >= 9);
const filmesAcao = filmes.filter(item => item.genero === 'Ação')

console.log('--------Filmes Disponíveis----------')
console.log(filmesDispon)
console.log('-------Filmes Melhores Avaliados ------')
console.log(filmesMelhorAvaliados)
console.log('-----------Filmes de Ação---------------')
console.log(filmesAcao)
