// lista-cursos.ts - PÁGINA da feature cursos (rota /cursos).
// Semana 7 · Aula 1: os dados NÃO vêm mais do service direto. A página:
//   LÊ da Store com selectSignal(selector)   -> devolve um signal (igual aos da Semana 4)
//   AVISA a Store com dispatch(action)        -> o reducer/effect fazem o resto
import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CursosActions } from '@core/state/cursos.actions';
import { cursosFeature } from '@core/state/cursos.feature';
import { SharedModule } from '@shared';

@Component({
  selector: 'app-lista-cursos',
  imports: [SharedModule],
  templateUrl: './lista-cursos.html',
  styleUrl: './lista-cursos.scss',
})
export class ListaCursos implements OnInit {
  private store = inject(Store);

  // LEITURA: cada selector vira um signal
  protected readonly cursos = this.store.selectSignal(cursosFeature.selectLista);
  protected readonly carregando = this.store.selectSignal(cursosFeature.selectCarregando);
  protected readonly erro = this.store.selectSignal(cursosFeature.selectErro);
  protected readonly inscritos = this.store.selectSignal(cursosFeature.selectInscritos);

  ngOnInit(): void {
    // Só busca na API se a lista ainda estiver vazia (a Store funciona como um cache)
    if (this.cursos().length === 0) {
      this.store.dispatch(CursosActions.carregar());
    }
  }

  // ESCRITA: a página só AVISA o que aconteceu
  inscrever(cursoId: number): void {
    this.store.dispatch(CursosActions.inscrever({ cursoId }));
  }

  cancelar(cursoId: number): void {
    this.store.dispatch(CursosActions.cancelarInscricao({ cursoId }));
  }

  estaInscrito(cursoId: number): boolean {
    return this.inscritos().includes(cursoId);
  }

  tentarNovamente(): void {
    this.store.dispatch(CursosActions.carregar());
  }
}
