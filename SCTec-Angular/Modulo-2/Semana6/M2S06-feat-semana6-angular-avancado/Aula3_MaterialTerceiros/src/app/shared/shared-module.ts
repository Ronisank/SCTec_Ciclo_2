// shared-module.ts - MÓDULO COMPARTILHADO (NgModule).
// Aula 1: reuniu PageHeader, pipes, formulários e RouterLink.
// Aula 3: vai reexportar também os módulos do Angular Material e a diretiva do ngx-mask.
import { NgModule } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PageHeader } from './components/page-header/page-header';
import { CepPipe } from './pipes/cep-pipe';

// TODO 1 (BIBLIOTECAS NO PROJETO) - parte A: importe os módulos do Angular Material que as features usam
// (cada componente do Material tem o SEU módulo, no SEU caminho):
//   import { MatButtonModule } from '@angular/material/button';
//   import { MatCardModule } from '@angular/material/card';
//   import { MatFormFieldModule } from '@angular/material/form-field';
//   import { MatIconModule } from '@angular/material/icon';
//   import { MatInputModule } from '@angular/material/input';
//   import { MatSelectModule } from '@angular/material/select';
//   import { MatTooltipModule } from '@angular/material/tooltip';
//   import { NgxMaskDirective } from 'ngx-mask';
// e crie a lista:
//   const MATERIAL = [MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule,
//                     MatInputModule, MatSelectModule, MatTooltipModule];
// Repare: MatButtonModule, MatCardModule... são NgModules. A ideia da Aula 1 aparece de novo!

const COMPARTILHADOS = [
  PageHeader,
  CepPipe,
  UpperCasePipe,
  DatePipe,
  FormsModule,
  ReactiveFormsModule,
  RouterLink,
  // TODO 1 - parte B: acrescente aqui  NgxMaskDirective  e  ...MATERIAL
];

@NgModule({
  imports: [...COMPARTILHADOS],
  exports: [...COMPARTILHADOS],
})
export class SharedModule {}
