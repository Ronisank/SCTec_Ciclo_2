// contatos-module.ts - MÓDULO DE FUNCIONALIDADE (feature module).
// Criado com: ng generate module features/contatos --routing
//
// Ele agrupa a "área de contatos" (lista, detalhe e formulário) e as rotas dela.
// O app.routes.ts carrega este módulo com loadChildren -> LAZY LOADING:
// o navegador só baixa este pedaço do código quando o usuário entra em /contatos.
// (Veja no "ng build": aparece um "Lazy chunk file" só para ele.)
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing-module';

@NgModule({
  declarations: [], // vazio: nossos componentes são standalone (cada um importa o que usa)
  imports: [CommonModule, ContatosRoutingModule],
})
export class ContatosModule {}
