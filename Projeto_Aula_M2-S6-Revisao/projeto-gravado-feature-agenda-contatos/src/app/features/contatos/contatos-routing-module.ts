// contatos-routing-module.ts - ROTAS FILHAS do módulo de contatos.
// Criado junto com o módulo pelo "--routing".
// forChild: rotas de um módulo filho (o forRoot/provideRouter fica só no app principal).
//
// O caminho final é "pai + filho":  'contatos' + 'novo'  =  /contatos/novo
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaContatos } from './lista-contatos/lista-contatos';
import { FormContato } from './form-contato/form-contato';
import { DetalheContato } from './detalhe-contato/detalhe-contato';

// TODO 6 - ROTAS FILHAS (dentro do módulo)
// Cadastre 3 rotas (cada uma com component e title):
//   ''      -> ListaContatos     ( /contatos )
//   'novo'  -> FormContato       ( /contatos/novo )
//   ':id'   -> DetalheContato    ( /contatos/1 )  ":id" = PARÂMETRO de rota
// ⚠ 'novo' tem que vir ANTES de ':id', senão o Angular acha que "novo" é um id!
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContatosRoutingModule {}
