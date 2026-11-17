// cursos.routes.ts - ROTAS DA FEATURE "cursos" (nova na Semana 6).
import { Routes } from '@angular/router';
import { ListaCursos } from './lista-cursos/lista-cursos';

export const CURSOS_ROUTES: Routes = [
  { path: '', component: ListaCursos, title: 'Cursos | Projeto SCTEC' },
];
