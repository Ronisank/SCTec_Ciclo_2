// 1. Criação da função que retorna a Promise
function esperarTresSegundos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Concluído após 3 segundos');
        }, 3000);
    });
}

// 2. Função assíncrona para tratar o retorno com async/await
const executarVerificacao = async () => {
    console.log("Iniciando a espera...");

    // O await pausa a execução aqui até a Promise ser resolvida (após 3s)
    const resultado = await esperarTresSegundos();

    // Exibe a mensagem de sucesso no console
    console.log(resultado);

    console.log("Processo finalizado.");
}

// 3. Executa a função
executarVerificacao();

console.log('Executando...1');
console.log('Executando...2');
console.log('Executando...3');

