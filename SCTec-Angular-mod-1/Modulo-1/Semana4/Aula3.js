console.log()
console.log('----------Atividade 1---------------')
console.log()

const alunos = [
    {
        nome: 'JOÃO SILVA',
        turma: 'ANGULAR',
        nota: 9
    }, {
        nome: 'MARIA SANTOS',
        turma: 'JAVA',
        nota: 7
    },
    {
        nome: 'EVA DOE',
        turma: 'JAVASCRIPT',
        nota: 5.5
    },
    {
        nome: 'DANIEL VIEIRA',
        turma: 'NODE',
        nota: 5.9
    },
    {
        nome: 'BIA SILVA',
        turma: 'TYPESCRIPT',
        nota: 8.5
    },
]
// ------------------Exemplo feito com FOR-----------------

// for (let index = 0; index < alunos.length; index++) {
//     alunos[index].nota >= 6 ? alunos[index].aprovado = true : alunos[index].aprovado = false;
// }
// console.log(alunos)


// ------------------Exemplo feito com forEach-----------------


// alunos.forEach((aluno) => {
//     if (aluno.nota >= 6) {
//         aluno.aprovado = true;
//     } else {
//         aluno.aprovado = false;
//     }
// });

// console.log(alunos);

//------------------------Exemplo feito com FOR OF ------------

// for (const aluno of alunos) {
//     aluno.aprovado = aluno.nota >= 6
// }
// console.log(alunos)

console.log()
console.log('----------Atividade 2---------------')
console.log()

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2026,
    descricao: function () {
        console.log("Carro: ",this.marca, "-",this.modelo, "-",this.ano);
    }
};
// carro.descricao();


