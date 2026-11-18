// lista-cursos.ts - PÁGINA da feature cursos (rota /cursos). Criado com: ng g c features/cursos/lista-cursos
import { Component, inject } from '@angular/core';
import { SharedModule } from '@shared';
import { CursoService } from '../curso-service';

@Component({
  selector: 'app-lista-cursos',
  imports: [SharedModule], // SharedModule traz o PageHeader (e o resto que é compartilhado)
  templateUrl: './lista-cursos.html',
  styleUrl: './lista-cursos.scss',
})
export class ListaCursos {
  private cursoService = inject(CursoService);
  protected readonly cursos = this.cursoService.cursos;
}
