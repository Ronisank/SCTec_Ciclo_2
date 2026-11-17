import { Routes } from '@angular/router';
// (os 3 imports de componentes que estavam aqui foram APAGADOS)

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@features/inicio/inicio').then((m) => m.Inicio),
    title: 'Início | Projeto SCTEC',
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
  {
    path: 'cursos',
    loadChildren: () => import('@features/cursos/cursos.routes').then((m) => m.CURSOS_ROUTES),
  },
  // TODO 5 parte C entra aqui (rota 'cursos')
  { path: 'cadastro', redirectTo: 'alunos/cadastro' },
  { path: '**', redirectTo: '' },
];
