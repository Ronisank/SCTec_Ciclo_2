const livros = [
    {
        titulo: "JavaScript para Iniciantes",
        autor: "Ana Souza",
        categoria: "Programação",
        paginas: 280,
        disponivel: true
    },
    {
        titulo: "CSS Moderno",
        autor: "Carlos Lima",
        categoria: "Web Design",
        paginas: 190,
        disponivel: false
    },
    {
        titulo: "HTML Essencial",
        autor: "Fernanda Rocha",
        categoria: "Programação",
        paginas: 250,
        disponivel: true
    },
    {
        titulo: "Lógica de Programação",
        autor: "Marcos Silva",
        categoria: "Programação",
        paginas: 320,
        disponivel: true
    },
    {
        titulo: "Banco de Dados",
        autor: "Juliana Costa",
        categoria: "Banco de Dados",
        paginas: 410,
        disponivel: false
    },
    {
        titulo: "Git e GitHub",
        autor: "Lucas Pereira",
        categoria: "Ferramentas",
        paginas: 170,
        disponivel: true
    },
    {
        titulo: "Node.js na Prática",
        autor: "Eduardo Martins",
        categoria: "Programação",
        paginas: 360,
        disponivel: true
    },
    {
        titulo: "UX Design",
        autor: "Patrícia Alves",
        categoria: "Design",
        paginas: 220,
        disponivel: false
    },
    {
        titulo: "Angular Completo",
        autor: "Roberto Santos",
        categoria: "Programação",
        paginas: 430,
        disponivel: true
    },
    {
        titulo: "React para Web",
        autor: "Camila Ferreira",
        categoria: "Programação",
        paginas: 390,
        disponivel: true
    }
];

// function listarLivros(livros) {
//     for (const livro of livros) {
//         console.log(livro)
//     }

// }
// listarLivros(livros);

// function listarLivros(livros) {
//     console.table(livros); // Não precisa nem de loop!
// }
// listarLivros(livros)

function listarLivros(livros) {
    livros.forEach(livro => console.log(livro));
}
// listarLivros(livros)


function buscarLivro(pesquisaLivro, titulo) {
    const livroBusca = titulo.trim().toLowerCase();
    const livroEncontrado = pesquisaLivro.filter(item => item.titulo.toLowerCase().includes(livroBusca));

    if (livroEncontrado.length > 0) {
        return console.log(livroEncontrado);
    } else {
        return console.log('Livro não encontrado')
    }

}
// buscarLivro(livros, 'css')

function listarDisponiveis(listaDeLivros) {
    const livrosDisponiveis = listaDeLivros.filter(item => item.disponivel)
    return console.log(livrosDisponiveis)

}
// listarDisponiveis(livros);

function gerarEstatisticas(livros) {
    const totalLivros = livros.length
    const livrosDisponiveis = livros.filter(item => item.disponivel).length
    const livrosIndisponiveis = totalLivros - livrosDisponiveis
    const totalDePaginas = livros.reduce((total, item) => total + item.paginas, 0);
    const mediaPaginasPorLivros = totalDePaginas / totalLivros

    return console.log({
        'Total de Livros': totalLivros,
        'Livros Disponíveis': livrosDisponiveis,
        'Livros Indisponíveis': livrosIndisponiveis,
        'Total de Páginas': totalDePaginas,
        'Média de Páginas Por Livros': mediaPaginasPorLivros,
    });

}
// console.log(gerarEstatisticas(livros))

function livroComMaisPaginas(livro) {
    const maiorNumPaginas = livro.reduce((maior, atual) => atual.paginas > maior.paginas ? atual : maior);

    console.log([
        {
            'Titulo': maiorNumPaginas.titulo,
            'Páginas': maiorNumPaginas.paginas
        }
    ]);
};

// livroComMaisPaginas(livros);

let progresso = 0;

const intervalo = setInterval(() => {
    progresso += 10;

    // \r joga o cursor para o começo da linha e reescreve o texto
    process.stdout.write(`\rCarregando: ${progresso}%`);

    if (progresso >= 100) {
        clearInterval(intervalo);
        process.stdout.write("\nConcluído!\n"); // Pula a linha no final
    }
}, 200);


module.exports =
    { buscarLivro, gerarEstatisticas, listarDisponiveis, listarLivros, livroComMaisPaginas, livros };
