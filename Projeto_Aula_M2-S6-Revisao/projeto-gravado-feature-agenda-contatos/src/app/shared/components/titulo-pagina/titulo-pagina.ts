// titulo-pagina.ts - COMPONENTE DE APRESENTAÇÃO reutilizável (exemplo pronto de INPUT).
// Criado com: ng generate component shared/components/titulo-pagina
// Ele não busca dados: só RECEBE pelo input() e MOSTRA.
// Uso:  <app-titulo-pagina titulo="Contatos" subtitulo="Lista completa"> botões aqui </app-titulo-pagina>
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-titulo-pagina',
  imports: [],
  templateUrl: './titulo-pagina.html',
  styleUrl: './titulo-pagina.scss',
})
export class TituloPagina {
  readonly titulo = input.required<string>(); // obrigatório: o pai TEM que mandar
  readonly subtitulo = input(''); // opcional: valor padrão ''
}
