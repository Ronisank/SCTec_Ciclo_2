// inicio.ts - PÁGINA INICIAL: mostra como o projeto está crescendo semana a semana.
import { Component } from '@angular/core';
import { SharedModule } from '@shared';

interface Etapa {
  semana: string;
  titulo: string;
  itens: string[];
  atual?: boolean;
}

@Component({
  selector: 'app-inicio',
  imports: [SharedModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {
  protected readonly etapas: Etapa[] = [
    {
      semana: 'Semana 5',
      titulo: 'Formulários, rotas, pipes e API',
      itens: ['Rotas /contato e /cadastro', 'Template-Driven e Reactive Forms', 'Pipes uppercase, date e cep', 'API viaCEP'],
    },
    {
      semana: 'Semana 6 · Aula 1',
      titulo: 'Módulos e organização',
      itens: ['Pastas core / shared / features', 'SharedModule e barrel (index.ts)', 'Aliases @core, @shared, @features', 'Lazy loading por feature', 'Nova feature: Cursos'],
    },
    {
      semana: 'Semana 6 · Aula 2',
      titulo: 'SASS e responsividade',
      itens: ['Migração para SCSS', 'Variáveis, mapas, mixins e partials', 'Menu responsivo (mobile-first)', 'Grid, max-width e object-fit'],
      atual: true,
    },
    {
      semana: 'Semana 6 · Aula 3',
      titulo: 'Angular Material e terceiros',
      itens: ['ng add @angular/material', 'Toolbar, cards, form fields, snackbar', 'Máscaras com ngx-mask'],
    },
  ];
}
