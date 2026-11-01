function verificarSituação(listaAlunos: {nome:string; nota:number}[]) {
  listaAlunos.forEach((element) => {
    if (element.nota >= 7) {
      console.log(element.nome, "APROVADO");
    } else if (element.nota >= 5 && element.nota <= 6.9) {
      console.log(element.nome, "RECUPERAÇÃO");
    }else{
        console.log(element.nome, 'REPROVADO')
    }
  });
}

const alunos = [
  { nome: "Ana Silva", nota: 8.5 },
  { nome: "Bruno Costa", nota: 4.9 },
  { nome: "Carlos Oliveira", nota: 9.2 },
  { nome: "Diana Souza", nota: 6.9 },
  { nome: "Eduardo Lima", nota: 8.0 },
];

verificarSituação(alunos);
