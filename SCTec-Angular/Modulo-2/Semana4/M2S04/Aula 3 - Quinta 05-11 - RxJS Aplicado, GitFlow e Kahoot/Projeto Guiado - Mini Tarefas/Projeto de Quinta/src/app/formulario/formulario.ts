import { Component, signal, inject } from '@angular/core';
import { Categoria } from '../models/tarefa';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.html',
})
export class Formulario {
  private readonly service = inject(TarefaService);

  protected readonly categorias: Categoria[] = ['Estudos', 'Casa', 'Trabalho'];

  protected readonly titulo = signal('');

  protected readonly categoria = signal<Categoria>('Estudos');

  protected salvar(evento: Event): void {
    evento.preventDefault();
const texto = this.titulo().trim();
if (!texto) {
  return;
}
this.service.adicionar(texto, this.categoria());
this.titulo.set('');

  }
}
