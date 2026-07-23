// console.log('------------Atividade 1---------');

// function quadrado(num) {
//     if (typeof (num) === Number) {
//         return 'Parametro Incorreto';
//     }
//     else {
//         return num * num;
//     }
// }

// console.log(quadrado("8"));
// console.log(quadrado(0));
// console.log(quadrado(5));

console.log();
console.log('------------Atividade 2---------');
console.log();

// let listaNomes = ['roni', 'ana', 'bia']

// function agenda() {
//     const arrayRetorno = [];
//     for (let index = 0; index < listaNomes.length; index++) {
//         let listaObj = {
//             id: index + 1,
//             nome: listaNomes[index].toLocaleUpperCase()
//         };
// arrayRetorno.push(listaObj)

//     }
//     return arrayRetorno;
// }
// console.log(agenda(listaNomes));

/*---------------Exemplo de função com MAP----------------*/

// function transformarEmObjetos(arrayDeNomes) {
//     return arrayDeNomes.map((nome, index) => {
//         return {
//             id: index + 1,
//             nome: nome
//         };
//     });
// }

// const listaNomes = ['Nome 1', 'Nome 2', 'Ana', 'Carlos'];
// const resultado = transformarEmObjetos(listaNomes);
// console.log(resultado);

console.log();
console.log('-----------------Atividade 3--------------------------');
console.log();

const alunos = [
    {
        nome: "ANA Souza",
        nota1: 8.5,
        nota2: 7.0
    },
    {
        nome: "Bruno Oliveira   ",
        nota1: 6.0,
        nota2: 5.5
    },
    {
        nome: "Carlos SANTOS",
        nota1: 9.0,
        nota2: 8.5
    },
    {
        nome: "DAnIela COstA",
        nota1: 4.0,
        nota2: 5.0
    },
    {
        nome: "Eduardo Lima",
        nota1: 7.5,
        nota2: 6.5
    },
    {
        nome: "  Fernanda AlvES  ",
        nota1: 10.0,
        nota2: 9.5
    },
    {
        nome: " GabrIEl MArtins",
        nota1: 3.5,
        nota2: 4.0
    },
    {
        nome: "HELENA Rodrigues",
        nota1: 6.5,
        nota2: 7.0
    },
    {
        nome: " Igor Almeida  ",
        nota1: 8.0,
        nota2: 8.5
    },
    {
        nome: " Juliana FERREIRA",
        nota1: 5.0,
        nota2: 4.5
    }
];
/**Com base no array ao lado:

Crie uma função para formatar o nome:
Remova espaços extras no início e no final (Dica: utilize trim()).
Converta o nome para letras maiúsculas.
Retorne o nome formatado.
 */

function formataNome() {
    const nomeFormatado = [];
    for (let index = 0; index < alunos.length; index++) {
        let obj = alunos[index].nome.trim().toLocaleUpperCase();

        nomeFormatado.push(obj);
    }
    return nomeFormatado;
};
//console.log(formataNome(alunos));

/**Função para calcular a média:
Crie uma função chamada calcularMedia() que receba duas notas e retorne a média do aluno
 */

function calcularMedia() {
    const resultado = [];
    for (let index = 0; index < alunos.length; index++) {
        let obj = (alunos[index].nota1 + alunos[index].nota2) / 2;

        resultado.push(obj);
    }
    return resultado;
}
// console.log(calcularMedia());

/**Função para verificar a situação:
Crie uma função chamada verificarSituacao() que receba a média do aluno e retorne sua situação
 */

function verificarSituacao() {
    let situacao = [];
    for (let index = 0; index < alunos.length; index++) {
        let media = (alunos[index].nota1 + alunos[index].nota2) / 2
        if (media >= 6) {
            media = 'APROVADO'

        } else media = 'REPROVADO'

        situacao.push(media)
    }
    return situacao;
};
// console.log(verificarSituacao())

/**Função para analisar os alunos:
Formatar o nome.
Calcular a média.
Verificar a situação.
Exibir os dados do aluno. Ex.:
ALUNO: ANA SOUZA
NOTA 1: 8.50
NOTA 2: 7.00
MÉDIA: 7.75
SITUAÇÃO: APROVADO
 */

function analiseAlunos() {
    const exibir = [];
    for (let index = 0; index < alunos.length; index++) {
        let obj = {
            ALUNO: formataNome()[index],
            NOTA1: alunos[index].nota1.toFixed(2),
            NOTA2: alunos[index].nota2.toFixed(2),
            MEDIA: calcularMedia()[index].toFixed(2),
            SITUACAO: verificarSituacao()[index]
        }

        exibir.push(obj)
    }
    console.log(exibir)
}
analiseAlunos();