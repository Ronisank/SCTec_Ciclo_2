// lista-cursos.ts - PÁGINA da feature cursos (rota /cursos). Criado com: ng g c features/cursos/lista-cursos
import { Component, signal } from '@angular/core';
import { Curso, SharedModule } from '@shared';

@Component({
  selector: 'app-lista-cursos',
  imports: [SharedModule], // SharedModule traz o PageHeader (e o resto que é compartilhado)
  templateUrl: './lista-cursos.html',
  styleUrl: './lista-cursos.css',
})
export class ListaCursos {
  // TODO 5 (NOVA FEATURE CURSOS) - parte B: os dados JÁ ESTÃO no service ../curso-service.ts.
  // 1) importe:  import { inject } from '@angular/core';  e  import { CursoService } from '../curso-service';
  // 2) troque a linha abaixo por:
  //      private cursoService = inject(CursoService);
  //      protected readonly cursos = this.cursoService.cursos;
  // (o HTML já usa cursos() com @for)
  protected readonly cursos = signal<Curso[]>([]);
}
