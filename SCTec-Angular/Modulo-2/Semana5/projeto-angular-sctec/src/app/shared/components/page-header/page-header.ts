// page-header.ts - COMPONENTE COMPARTILHADO (shared): o "cabeçalho de página" que se repetia em todas as telas.
// Criado com: ng g c shared/components/page-header
// É um componente de APRESENTAÇÃO: não busca dados, só recebe por input() e mostra.
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss',
})
export class PageHeader {
  titulo = input.required<string>(); // obrigatório: <app-page-header titulo="Contato" />
  subtitulo = input(''); // opcional
  tag = input(''); // opcional: etiqueta no canto
}
