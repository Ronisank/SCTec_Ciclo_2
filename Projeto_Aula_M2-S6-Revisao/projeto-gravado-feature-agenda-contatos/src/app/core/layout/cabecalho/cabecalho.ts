// cabecalho.ts - COMPONENTE DE LAYOUT (core = aparece em todas as páginas).
// Criado com: ng generate component core/layout/cabecalho
//
// COMPONENTE REATIVO: ele não "pergunta" quantos contatos existem.
// Ele se INSCREVE no total$ do service e se atualiza sozinho quando a lista muda.
import { Component, inject, signal } from '@angular/core';
import { ContatoService } from '../../services/contato-service';
import { SharedModule } from '../../../shared/shared-module';

interface LinkMenu {
  rota: string;
  texto: string;
  icone: string;
}

@Component({
  selector: 'app-cabecalho',
  imports: [SharedModule],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.scss',
})
export class Cabecalho {
  readonly tituloApp = 'Agenda SENAI';

  readonly links: LinkMenu[] = [
    { rota: '/', texto: 'Início', icone: 'home' },
    { rota: '/contatos', texto: 'Contatos', icone: 'contacts' },
    { rota: '/contatos/novo', texto: 'Novo', icone: 'person_add' },
    { rota: '/fale-conosco', texto: 'Fale conosco', icone: 'mail' },
  ];

  // TODO 7 - INJEÇÃO DE DEPENDÊNCIA + ESTADO DO MENU
  // a) private readonly contatoService = inject(ContatoService);
  // b) readonly total$ = this.contatoService.total$;     (Observable com o total de contatos)
  // c) readonly menuAberto = signal(false);              (o menu do celular começa fechado)
  // d) alternarMenu(): inverte o valor -> this.menuAberto.update((aberto) => !aberto)
  // e) fecharMenu():   this.menuAberto.set(false)
}
