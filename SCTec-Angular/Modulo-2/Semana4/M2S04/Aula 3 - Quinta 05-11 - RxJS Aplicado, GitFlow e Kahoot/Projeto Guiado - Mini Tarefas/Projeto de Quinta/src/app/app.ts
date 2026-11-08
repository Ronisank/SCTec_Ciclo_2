import { Component, effect, inject } from '@angular/core';
import { Formulario } from './formulario/formulario';
import { Lista } from './lista/lista';
import { Resumo } from './resumo/resumo';
import { Toast } from './toast/toast';
import { TarefaService } from './services/tarefa.service';

@Component({
  selector: 'app-root',
  imports: [Resumo, Formulario, Lista, Toast],
  templateUrl: './app.html',
})
export class App {

  //!======== 👉  TODO 7A: Injeção de dependência =========

  protected readonly service = inject(TarefaService);

  constructor() {

    //! 👉======= TODO 7B (effect): crie um Efeito reativo que roda sempre que as pendentes mudarem e atualiza a ABA do navegador =============

    effect(() => {
      document.title = `(${this.service.pendentes()}) Mini Tarefas`;
    });
  }
}
