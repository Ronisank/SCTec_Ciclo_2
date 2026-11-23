// shared-module.ts - MÓDULO COMPARTILHADO (NgModule).
// Criado com: ng generate module shared
//
// Ideia: juntar em UM lugar tudo o que várias páginas usam e EXPORTAR.
// A página coloca "imports: [SharedModule]" e recebe TUDO o que está em "exports".
//
// Angular moderno: componentes, pipes e diretivas são STANDALONE,
// então eles NÃO vão em "declarations": entram em "imports" e "exports".
import { NgModule } from '@angular/core';
import { AsyncPipe, DatePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MaterialModule } from './material/material-module';
import { CardContato } from './components/card-contato/card-contato';
import { TituloPagina } from './components/titulo-pagina/titulo-pagina';
import { CepPipe } from './pipes/cep-pipe';
import { TelefonePipe } from './pipes/telefone-pipe';
import { Destaque } from './directives/destaque';

const COMPARTILHADOS = [
  // Do próprio Angular
  AsyncPipe,
  DatePipe,
  TitleCasePipe,
  UpperCasePipe,
  FormsModule, // formulários TEMPLATE-DRIVEN (ngModel)
  ReactiveFormsModule, // formulários REATIVOS (formGroup, formControlName)
  RouterLink,
  RouterLinkActive,
  // Biblioteca externa (outro módulo dentro deste módulo)
  MaterialModule,
  // Criados por nós
  CardContato,
  TituloPagina,
  CepPipe,
  TelefonePipe,
  Destaque,
];

@NgModule({
  imports: [...COMPARTILHADOS],
  exports: [...COMPARTILHADOS],
})
export class SharedModule {}
