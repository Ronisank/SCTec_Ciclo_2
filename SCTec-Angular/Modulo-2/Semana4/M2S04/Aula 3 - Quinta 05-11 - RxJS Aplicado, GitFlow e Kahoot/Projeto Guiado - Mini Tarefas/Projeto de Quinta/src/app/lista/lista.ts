import { TarefaService } from './../services/tarefa.service';
import { AsyncPipe } from '@angular/common';
import { CampoBusca } from '../campo-busca/campo-busca';
import { CardTarefa } from '../card-tarefa/card-tarefa';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
} from 'rxjs';

@Component({
  selector: 'app-lista',
  imports: [AsyncPipe, CampoBusca, CardTarefa],
  templateUrl: './lista.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lista {
  //! 👉 TODO 6B (DI): injete o TarefaService

  private readonly service = inject(TarefaService);
  protected readonly categorias = ['Todas', 'Estudos', 'Casa', 'Trabalho'];

  // ! Fontes dos filtros → signal de texto, começa com ''

  protected readonly busca = signal('');

  //!  → BehaviorSubject<string>, começa com 'Todas'

  private readonly categoria$ = new BehaviorSubject<string>('Todas');

  //! ====== Combinação dos filtros =========
  
  protected readonly tarefasFiltradas$ = combineLatest([
    toObservable(this.service.tarefas),

    toObservable(this.busca).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map((t) => t.trim().toLowerCase()),
      startWith(''),
    ),

    this.categoria$,
  ]).pipe(
    map(([tarefas, texto, categoria]) =>
      tarefas.filter(
        (t) =>
          (categoria === 'Todas' || t.categoria === categoria) &&
          t.titulo.toLowerCase().includes(texto),
      ),
    ),
  );

  protected escolherCategoria(valor: string): void {
    this.categoria$.next(valor);
  }

  protected alternar(id: number): void {
    this.service.alternar(id);
  }

  protected remover(id: number): void {
    this.service.remover(id);
  }
}
