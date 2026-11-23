// linha-do-tempo.ts - NOVO na Semana 7 · Aula 3. Criado com: ng g c features/inicio/linha-do-tempo
// Saiu de dentro do Início para virar um componente próprio. Motivo: DESEMPENHO.
// Só um COMPONENTE pode ir para um @defer e virar um arquivo separado (chunk) no build.
import { Component } from '@angular/core';

interface Etapa {
  semana: string;
  titulo: string;
  itens: string[];
  atual?: boolean;
}

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.html',
  styleUrl: './linha-do-tempo.scss',
})
export class LinhaDoTempo {
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
    },
    {
      semana: 'Semana 7 · Aula 3',
      titulo: 'Desempenho e deploy',
      itens: ['@defer e NgOptimizedImage', 'computed() e preloading', 'Environments (dev × produção)', 'Site publicado na internet'],
      atual: true,
    },
  ];
}
