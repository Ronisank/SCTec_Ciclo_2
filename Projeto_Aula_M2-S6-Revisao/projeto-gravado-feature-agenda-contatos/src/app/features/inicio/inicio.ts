// inicio.ts - PÁGINA INICIAL: vitrine de TEMPLATE SYNTAX, BINDINGS, SIGNALS e DEBUG.
// Criado com: ng generate component features/inicio
import { Component, computed, inject, signal } from '@angular/core';
import { ContatoService } from '../../core/services/contato-service';
import { SharedModule } from '../../shared/shared-module';

// Interface local (TypeScript): só esta página usa.
interface Topico {
  titulo: string;
  icone: string;
}

@Component({
  selector: 'app-inicio',
  imports: [SharedModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {
  readonly turma = 'Desenvolvedor Front-End Angular';
  readonly imagemCapa = 'https://picsum.photos/id/180/1200/500';

  // Usado com [(ngModel)] (two-way binding): digitou no input -> muda aqui -> muda na tela.
  nomeVisitante = '';

  readonly topicos: Topico[] = [
    { titulo: 'Componentes, Input e Output', icone: 'widgets' },
    { titulo: 'Template Syntax e Bindings', icone: 'code' },
    { titulo: 'Services e Injeção de Dependência', icone: 'hub' },
    { titulo: 'Observables e RxJS', icone: 'stream' },
    { titulo: 'Formulários Template-Driven e Reativos', icone: 'edit_note' },
    { titulo: 'Rotas e Lazy Loading', icone: 'route' },
    { titulo: 'Pipes e Diretivas personalizadas', icone: 'auto_fix_high' },
    { titulo: 'API viaCEP com HttpClient', icone: 'cloud_download' },
    { titulo: 'Módulos e SharedModule', icone: 'inventory_2' },
    { titulo: 'SASS, Responsividade e Angular Material', icone: 'palette' },
  ];

  // TODO 9 - SERVICE + SIGNAL + COMPUTED + DEBUG
  // a) private readonly contatoService = inject(ContatoService);
  // b) readonly total$ = this.contatoService.total$;
  //    readonly totalFavoritos$ = this.contatoService.totalFavoritos$;
  // c) readonly curtidas = signal(0);
  // d) readonly mensagemCurtidas = computed(() =>
  //      this.curtidas() === 0 ? 'Seja o primeiro a curtir!' : `${this.curtidas()} curtida(s)`);
  // e) método curtir():
  //      this.curtidas.update((valorAtual) => valorAtual + 1);
  //      console.log('[Inicio] curtidas =', this.curtidas());   <- DEBUG no Console (F12)
  //      debugger;                                               <- PAUSA o código no F12 (depois comente)
}
