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