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

// TODO 3 (MÓDULO COMPARTILHADO) - parte A: importe as duas peças NOSSAS que estão em shared/:
//   import { PageHeader } from './components/page-header/page-header';
//   import { CepPipe } from './pipes/cep-pipe';

// Uma lista só, usada em imports e exports (assim ninguém esquece um dos dois).
const COMPARTILHADOS = [
  // TODO 3 - parte B: acrescente PageHeader e CepPipe no INÍCIO desta lista.
  UpperCasePipe,
  DatePipe,
  FormsModule,
  ReactiveFormsModule,
  RouterLink,
];

// TODO 3 - parte C: complete o @NgModule com as duas propriedades:
//   imports: [...COMPARTILHADOS],   -> o módulo CONHECE essas peças
//   exports: [...COMPARTILHADOS],   -> o módulo REPASSA essas peças a quem importar SharedModule
// Enquanto o TODO 3 não estiver pronto, o terminal mostra erros como
// "'app-page-header' is not a known element" e "No pipe found with name 'cep'". É esperado!
@NgModule({})
export class SharedModule {}
