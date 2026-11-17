// aluno.ts - MODELO (interface): o "formato" de um aluno.
// Semana 6: mudou de models/ para shared/models/ porque é usado por mais de uma feature.
export interface Aluno {
  nome: string;
  email: string;
  telefone: string;
  curso: string;
  cep: string;
  cadastradoEm: Date;
}
