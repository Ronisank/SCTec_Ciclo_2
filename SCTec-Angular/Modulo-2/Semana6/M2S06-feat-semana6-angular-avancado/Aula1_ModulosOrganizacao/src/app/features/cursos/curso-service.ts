// curso-service.ts - SERVICE da feature "cursos". Criado com: ng g s features/cursos/curso-service
// Mora DENTRO da feature porque só ela usa. (O CepService é global, por isso está em core/.)
// Os dados ficam em um signal: quem ler cursos() recebe a lista e a tela reage a mudanças.
import { Service, signal } from '@angular/core';
import { Curso } from '@shared/models/curso';

@Service()
export class CursoService {
  // As imagens têm TAMANHOS diferentes de propósito: na Aula 2 o object-fit vai padronizar todas.
  private readonly lista = signal<Curso[]>([
    {
      id: 1,
      nome: 'Desenvolvimento Front-End com Angular',
      area: 'Front-End',
      nivel: 'Intermediário',
      cargaHoraria: 120,
      imagem: 'https://picsum.photos/seed/sctec-angular/800/450',
      descricao: 'Componentes, rotas, formulários, APIs e bibliotecas de UI em projetos reais.',
    },
    {
      id: 2,
      nome: 'Interfaces Modernas com React',
      area: 'Front-End',
      nivel: 'Intermediário',
      cargaHoraria: 100,
      imagem: 'https://picsum.photos/seed/sctec-react/600/800',
      descricao: 'Hooks, estado, roteamento e consumo de APIs com React.',
    },
    {
      id: 3,
      nome: 'Back-End com Java e Spring',
      area: 'Back-End',
      nivel: 'Avançado',
      cargaHoraria: 160,
      imagem: 'https://picsum.photos/seed/sctec-java/1200/400',
      descricao: 'APIs REST, persistência de dados e segurança com Spring Boot.',
    },
    {
      id: 4,
      nome: 'Python para Análise de Dados',
      area: 'Dados',
      nivel: 'Iniciante',
      cargaHoraria: 80,
      imagem: 'https://picsum.photos/seed/sctec-python/500/500',
      descricao: 'Pandas, visualização e automação de tarefas com Python.',
    },
    {
      id: 5,
      nome: 'Banco de Dados Relacional',
      area: 'Dados',
      nivel: 'Iniciante',
      cargaHoraria: 60,
      imagem: 'https://picsum.photos/seed/sctec-sql/900/600',
      descricao: 'Modelagem, SQL e boas práticas de integridade de dados.',
    },
    {
      id: 6,
      nome: 'UX/UI Design para Desenvolvedores',
      area: 'Design',
      nivel: 'Iniciante',
      cargaHoraria: 40,
      imagem: 'https://picsum.photos/seed/sctec-ux/400/700',
      descricao: 'Pesquisa com usuários, protótipos e design responsivo.',
    },
  ]);

  // Só LEITURA para fora do service (asReadonly): ninguém altera a lista sem passar pelo service.
  readonly cursos = this.lista.asReadonly();
}
