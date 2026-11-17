// app.routes.ts - MAPA DE ROTAS.
//
// ATENÇÃO - TODO 1 (ALIASES) fica FORA da pasta src: no arquivo tsconfig.json (raiz do projeto).
// Sem ele, os imports '@core/...', '@shared' e '@features/...' dão erro "Cannot find module".
// O passo a passo está no README desta aula e no comentário abaixo:
//   "compilerOptions": {
//     ...,
//     "paths": {
//       "@core/*": ["./src/app/core/*"],
//       "@shared": ["./src/app/shared/index.ts"],
//       "@shared/*": ["./src/app/shared/*"],
//       "@features/*": ["./src/app/features/*"]
//     }
//   }
// Depois de salvar o tsconfig.json, PARE o ng serve (Ctrl + C) e rode de novo.
import { Routes } from '@angular/router';
import { CadastroAluno } from '@features/alunos/cadastro-aluno/cadastro-aluno';
import { Contato } from '@features/contato/contato';
import { Inicio } from '@features/inicio/inicio';

// Hoje as rotas são EAGER (carregamento imediato): tudo vai no arquivo main.js, mesmo que o usuário
// nunca abra a página. Rode "ng build" AGORA e anote o tamanho do main (Initial chunk files).
//
// TODO 4 (LAZY LOADING) - troque as 3 rotas abaixo para carregar SOB DEMANDA:
//   ''        -> loadComponent: () => import('@features/inicio/inicio').then((m) => m.Inicio)
//   'contato' -> loadComponent: () => import('@features/contato/contato').then((m) => m.Contato)
//   'alunos'  -> loadChildren:  () => import('@features/alunos/alunos.routes').then((m) => m.ALUNOS_ROUTES)
//               (a rota 'alunos/cadastro' some daqui: ela já existe em features/alunos/alunos.routes.ts)
// Depois APAGUE os 3 imports de componentes lá em cima (senão o código continua no main.js).
// Rode "ng build" de novo: agora aparecem os "Lazy chunk files" (um por feature).
//
// TODO 5 (NOVA FEATURE CURSOS) - parte C: crie a rota 'cursos' com loadChildren apontando para
//   import('@features/cursos/cursos.routes').then((m) => m.CURSOS_ROUTES)
export const routes: Routes = [
  { path: '', component: Inicio, title: 'Início | Projeto SCTEC' },
  { path: 'contato', component: Contato, title: 'Contato | Projeto SCTEC' },
  { path: 'alunos/cadastro', component: CadastroAluno, title: 'Cadastro de aluno | Projeto SCTEC' },

  // A URL antiga (Semana 5) continua funcionando:
  { path: 'cadastro', redirectTo: 'alunos/cadastro' },
  { path: '**', redirectTo: '' },
];
