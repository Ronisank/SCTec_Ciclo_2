console.log()
console.log('-------------Atividade 1---------------------')
console.log()

let dataEntrada = '2026-07-16';

let arrayData = dataEntrada.split('-');
console.log(arrayData)

console.log('Data Formatada: ' + arrayData[2] + '/' + arrayData[1] + '/' + arrayData[0]);

for (let valor of arrayData) {
    console.log(valor);
}
console.log()
console.log('-------------Atividade 2---------------------')
console.log()

const dados = [123, 'texto', true, 'palavra', 99, 'JS'];

for (const index of dados) {
    if (typeof(index) == 'string') {
        console.log(index)
    }
}

console.log()
console.log('-------------Atividade 3---------------------')
console.log()

const emails = ["joao@email.com", "ana@email.com", "lucas@email.com"];

emails.forEach((email) => {
    console.log('Enviando e-mail para ' + email)
});

console.log()
console.log('-------------Atividade Objeto---------------------')
console.log()

let livro = {
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes"
};

console.log(typeof (livro));
console.log(livro);

livro.anoPublicao = 1960;

console.log(livro);

console.log(livro.autor);

livro.anoPublicao = 1605;

console.log(livro);

console.log()
console.log('-------------Atividade filter---------------------')
console.log()

