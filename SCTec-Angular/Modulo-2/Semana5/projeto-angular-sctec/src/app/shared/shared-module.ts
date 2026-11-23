// shared-module.ts - MÓDULO COMPARTILHADO (NgModule).
// Aula 1: reuniu PageHeader, pipes, formulários e RouterLink.
// Aula 3: passou a reexportar também os módulos do Angular Material e a diretiva do ngx-mask.
// Semana 7: + MatProgressSpinnerModule (indicador de carregamento).
// Repare: MatButtonModule, MatCardModule... TAMBÉM são NgModules. A ideia da Aula 1 aparece de novo!
import { NgModule } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';
import { PageHeader } from './components/page-header/page-header';
import { CepPipe } from './pipes/cep-pipe';

// Componentes do Angular Material usados em mais de uma feature.
const MATERIAL = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule, // Semana 7: <mat-spinner> enquanto a Store carrega
  MatSelectModule,
  MatTooltipModule,
];

const COMPARTILHADOS = [
  PageHeader,
  CepPipe,
  UpperCasePipe,
  DatePipe,
  FormsModule,
  ReactiveFormsModule,
  RouterLink,
  NgxMaskDirective, // biblioteca de terceiros: atributo mask="..."
  ...MATERIAL,
];

@NgModule({
  imports: [...COMPARTILHADOS],
  exports: [...COMPARTILHADOS],
})
export class SharedModule {}
