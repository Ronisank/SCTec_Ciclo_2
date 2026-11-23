// minhas-inscricoes.ts - NOVA PÁGINA (rota /inscricoes). Criada com:
//   ng g c features/inscricoes/minhas-inscricoes
// Ela não conversa com a lista de cursos: as duas leem a MESMA Store. É isso que é estado GLOBAL.
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CursosActions } from '@core/state/cursos.actions';
import { cursosFeature } from '@core/state/cursos.feature';
import { SharedModule } from '@shared';

@Component({
  selector: 'app-minhas-inscricoes',
  imports: [SharedModule],
  templateUrl: './minhas-inscricoes.html',
  styleUrl: './minhas-inscricoes.scss',
})
export class MinhasInscricoes {
  private store = inject(Store);

  // Selectors DERIVADOS (extraSelectors do cursos.feature.ts)
  protected readonly cursos = this.store.selectSignal(cursosFeature.selectCursosInscritos);
  protected readonly total = this.store.selectSignal(cursosFeature.selectTotalInscritos);
  protected readonly cargaHoraria = this.store.selectSignal(cursosFeature.selectCargaHorariaTotal);

  cancelar(cursoId: number): void {
    this.store.dispatch(CursosActions.cancelarInscricao({ cursoId }));
  }
}
