import { Component, inject, computed } from '@angular/core';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.html',
})
export class Resumo {
  //! ====injeção de dependência=====
  protected readonly service = inject(TarefaService);

  //!===== service signal - cálculo do percentual =====
  protected readonly percentual = computed(() => {
    const total = this.service.total();
    const concluidas = this.service.concluidas();

    if (total === 0) {
      return 0;
    }
    return Math.round((concluidas / total) * 100);
  });
};
