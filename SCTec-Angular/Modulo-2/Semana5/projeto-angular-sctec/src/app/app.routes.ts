// app.routes.ts - MAPA DE ROTAS com LAZY LOADING (carregamento sob demanda).
// Cada feature só é baixada pelo navegador quando o usuário entra nela.
//   loadComponent -> carrega UM componente (página simples)
//   loadChildren  -> carrega o ARQUIVO DE ROTAS de uma feature (várias páginas)
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/inicio/inicio').then((m) => m.Inicio),
    title: 'Início | Projeto SCTEC',
  },
  {
    path: 'cursos',
    loadChildren: () => import('@features/cursos/cursos.routes').then((m) => m.CURSOS_ROUTES),
  },
  {
    path: 'alunos',
    loadChildren: () => import('@features/alunos/alunos.routes').then((m) => m.ALUNOS_ROUTES),
  },
  {
    path: 'contato',
    loadComponent: () => import('@features/contato/contato').then((m) => m.Contato),
    title: 'Contato | Projeto SCTEC',
  },
  // A URL antiga (Semana 5) continua funcionando:
  { path: 'cadastro', redirectTo: 'alunos/cadastro' },
  { path: '**', redirectTo: '' },
];
