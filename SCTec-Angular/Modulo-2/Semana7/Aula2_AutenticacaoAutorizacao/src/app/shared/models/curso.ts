// curso.ts - NOVO na Semana 6: formato de um curso do catálogo SCTEC (feature "cursos").
export type NivelCurso = 'Iniciante' | 'Intermediário' | 'Avançado';

export interface Curso {
  id: number;
  nome: string;
  area: string;
  nivel: NivelCurso;
  cargaHoraria: number; // em horas
  imagem: string; // URL da imagem de capa
  descricao: string;
}
