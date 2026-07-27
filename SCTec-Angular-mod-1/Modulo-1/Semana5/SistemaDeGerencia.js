const prompt = require('prompt-sync')();
const { listarLivros, buscarLivro, gerarEstatisticas, livros, listarDisponiveis, livroComMaisPaginas } = require('../Semana5/Funcoes')

// Programa Principal

let listar;
let continuar;

console.log('---- Olá, Bem vindo ao Sistema de Gerenciamento de Biblioteca ---');

const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function carregar() {
    process.stdout.write("\nCarregando");

    for (let i = 0; i < 3; i++) {
        await esperar(1000);
        process.stdout.write(".");
    }
    process.stdout.write("\n\n++++++MENU PRINCIPAL++++++\n");
    do {
        console.log("\n[1] - Listar todos os livros");
        console.log("[2] - Buscar livro");
        console.log("[3] - Listar livros disponíveis");
        console.log("[4] - Calcular estatísticas");
        console.log("[5] - Localizar o maior livro");
        console.log("[6] - Sair");

        listar = prompt(`Sua opção: `);
        switch (listar) {
            case '1':
                listarLivros(livros);
                break;
            case '2':
                let buscar = prompt('Pesquisa: ');
                buscarLivro(livros, buscar);
                break;
            case '3':
                listarDisponiveis(livros);
                break;
            case '4':
                gerarEstatisticas(livros);
                break;
            case '5':
                livroComMaisPaginas(livros);
                break;

            default:
                break;
        }

        continuar = listar;
        // console.log(typeof(listar),listar)
    } while (continuar !== '6');
    console.log("\nSistema encerrado. Até logo!");
}
carregar();


