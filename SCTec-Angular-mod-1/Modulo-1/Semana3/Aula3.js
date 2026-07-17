let dataEntrada = '2026-07-16';

let arrayData = dataEntrada.split('-');
console.log(arrayData)

console.log('Data Formatada: ' +arrayData[2] +'/'+ arrayData[1] + '/' + arrayData[0]);

for (let valor of arrayData) {
    console.log(valor);
}