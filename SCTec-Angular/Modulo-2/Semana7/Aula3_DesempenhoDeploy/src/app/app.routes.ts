// app.routes.ts - MAPA DE ROTAS com LAZY LOADING (carregamento sob demanda).
// Cada feature só é baixada pelo navegador quando o usuário entra nela.
//   loadComponent -> carrega UM componente (página simples)
//   loadChildren  -> carrega o ARQUIVO DE ROTAS de uma feature (várias páginas)
import { Routes } from '@angular/router';
import { authGuard, perfilGuard } from '@core/auth/auth-guard';

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
  {
    // Semana 7 · Aula 1: página que lê o ESTADO GLOBAL (Store) das inscrições
    path: 'inscricoes',
    canActivate: [authGuard], // Aula 2: só quem está LOGADO
    loadComponent: () =>
      import('@features/inscricoes/minhas-inscricoes/minhas-inscricoes').then((m) => m.MinhasInscricoes),
    title: 'Minhas inscrições | Projeto SCTEC',
  },
  // Semana 7 · Aula 2: autenticação e autorização
  {
    path: 'login',
    loadComponent: () => import('@features/auth/login/login').then((m) => m.Login),
    title: 'Entrar | Projeto SCTEC',
  },
  {
    path: 'acesso-negado',
    loadComponent: () => import('@features/auth/acesso-negado/acesso-negado').then((m) => m.AcessoNegado),
    title: 'Acesso negado | Projeto SCTEC',
  },
  {
    path: 'admin',
    canMatch: [perfilGuard('admin')], // só o perfil admin: os outros nem baixam o código
    loadComponent: () => import('@features/admin/painel-admin/painel-admin').then((m) => m.PainelAdmin),
    title: 'Admin | Projeto SCTEC',
  },
  // A URL antiga (Semana 5) continua funcionando:
  { path: 'cadastro', redirectTo: 'alunos/cadastro' },
  { path: '**', redirectTo: '' },
];
