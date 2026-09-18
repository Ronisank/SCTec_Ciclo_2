// Crie uma função chamada verificarCadastro() que receba um nome como parâmetro

// Se o nome recebido não estiver vazio, utilizar resolve() com a mensagem: "Cadastro encontrado!"

// Se o nome estiver vazio, utilizar reject() com a mensagem: "Nome não informado!"

// Realize o tratamento da função para mostrar ambos as possibilidade no console, e após seu retorno, exiba a mensagem: “Verificação finalizada.”

// const promise = new Promise((resolve, reject)=>{
//     resolve('resolve');
//     reject('reject')
// });

function verificarCadastro(nome) {
    return new Promise((resolve, reject) => {
        // Verifica se o nome existe e não está vazio (removendo espaços em branco)
        if (nome && nome.trim() !== "") {
            resolve("Cadastro encontrado!");
        } else {
            reject("Nome não informado!");
        }
    });
}

// --- Testando as duas possibilidades ---

// Caso 1: Sucesso (Nome informado)
verificarCadastro("Ana Silva")
    .then((mensagem) => {
        console.log(`Sucesso: ${mensagem}`);
    })
    .catch((erro) => {
        console.error(`Erro: ${erro}`);
    })
    .finally(() => {
        console.log("Verificação finalizada.");
        console.log("--------------------"); // Linha divisória apenas para organizar o console
    });

// Caso 2: Falha (Nome vazio)
verificarCadastro("")
    .then((mensagem) => {
        console.log(`Sucesso: ${mensagem}`);
    })
    .catch((erro) => {
        console.error(`Erro: ${erro}`);
    })
    .finally(() => {
        console.log("Verificação finalizada.");
    });
