// app.routes.ts - MAPA DE ROTAS da aplicação.
//   component     -> página carregada junto com o app (eager)
//   loadChildren  -> LAZY LOADING de um MÓDULO inteiro (várias páginas), baixado só quando acessado
//   loadComponent -> LAZY LOADING de UM componente
//   '**'          -> "coringa": qualquer URL que não existe (sempre a ÚLTIMA rota)
import { Routes } from '@angular/router';
import { Inicio } from './features/inicio/inicio';
import { NaoEncontrada } from './features/nao-encontrada/nao-encontrada';

export const routes: Routes = [
  { path: '', component: Inicio, title: 'Início | Agenda SENAI' },

  // TODO 5 - ROTAS COM LAZY LOADING
  // a) 'contatos'     -> loadChildren carregando o ContatosModule
  //      loadChildren: () => import('./features/contatos/contatos-module').then((m) => m.ContatosModule)
  // b) 'fale-conosco' -> loadComponent carregando o componente FaleConosco (+ title)
  //      loadComponent: () => import('./features/fale-conosco/fale-conosco').then((m) => m.FaleConosco)
  // c) '**'           -> component: NaoEncontrada  (SEMPRE por último!)
];
