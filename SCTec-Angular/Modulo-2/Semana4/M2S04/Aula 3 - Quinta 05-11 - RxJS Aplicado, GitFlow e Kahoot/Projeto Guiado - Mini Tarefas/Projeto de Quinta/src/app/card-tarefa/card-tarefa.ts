import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { Tarefa } from '../models/tarefa';

@Component({
  selector: 'app-card-tarefa',
  templateUrl: './card-tarefa.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTarefa {
  //? input() = pai envia, filho recebe.
  //? output() = filho emite, pai recebe.

  //!======= Input obrigatório ==========
  readonly tarefa = input.required<Tarefa>();

  //! =========== Outputs =============
  readonly alternar = output<number>();

  readonly remover = output<number>();
}
