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
      semana: 'Semana 6',
      titulo: 'Organização, SCSS e Material',
      itens: ['core / shared / features + lazy loading', 'SCSS com mixins e layout responsivo', 'Angular Material + ngx-mask'],
    },
    {
      semana: 'Semana 7 · Aula 1',
      titulo: 'Estado global com NgRx',
      itens: ['Store, actions e reducer', 'Selectors e dados derivados', 'Effects: API de cursos', 'Inscrições + contador no menu'],
    },
    {
      semana: 'Semana 7 · Aula 2',
      titulo: 'Autenticação e autorização',
      itens: ['Login com JWT (API DummyJSON)', 'Interceptor: token em cada requisição', 'Guards: authGuard e perfilGuard', 'Área admin + acesso negado'],
      atual: true,
    },
  ];
}
