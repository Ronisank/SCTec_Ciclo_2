// shared-module.ts - MÓDULO COMPARTILHADO (NgModule).
// Criado com: ng g m shared
// Ideia: reunir em UM lugar o que várias features usam e EXPORTAR.
// Quem colocar SharedModule no "imports" do componente recebe TUDO o que está em "exports".
//
// Angular moderno: componentes, pipes e diretivas STANDALONE não vão em "declarations".
// Eles entram em "imports" (para o módulo conhecer) e em "exports" (para repassar a quem importar).
import { NgModule } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PageHeader } from './components/page-header/page-header';
import { CepPipe } from './pipes/cep-pipe';

// Uma lista só, usada em imports e exports (assim ninguém esquece um dos dois).
const COMPARTILHADOS = [
  PageHeader,
  CepPipe,
  UpperCasePipe,
  DatePipe,
  FormsModule,
  ReactiveFormsModule,
  RouterLink,
];

@NgModule({
  imports: [...COMPARTILHADOS],
  exports: [...COMPARTILHADOS],
})
export class SharedModule {}
