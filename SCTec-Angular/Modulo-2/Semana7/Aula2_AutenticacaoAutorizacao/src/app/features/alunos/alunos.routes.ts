// alunos.routes.ts - ROTAS DA FEATURE "alunos". Ficam DENTRO da pasta da feature.
// O app.routes.ts só aponta para cá com loadChildren (as URLs ficam /alunos/...).
import { Routes } from '@angular/router';
import { CadastroAluno } from './cadastro-aluno/cadastro-aluno';

export const ALUNOS_ROUTES: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
  { path: 'cadastro', component: CadastroAluno, title: 'Cadastro de aluno | Projeto SCTEC' },
];
