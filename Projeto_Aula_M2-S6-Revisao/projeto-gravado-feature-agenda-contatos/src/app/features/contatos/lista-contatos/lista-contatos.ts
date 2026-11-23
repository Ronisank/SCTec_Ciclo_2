// lista-contatos.ts - COMPONENTE PAI (smart): fala com o service e repassa dados para os cards.
// Criado com: ng generate component features/contatos/lista-contatos
import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { combineLatest, debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';
import { ContatoService } from '../../../core/services/contato-service';
import { SharedModule } from '../../../shared/shared-module';

@Component({
  selector: 'app-lista-contatos',
  imports: [SharedModule],
  templateUrl: './lista-contatos.html',
  styleUrl: './lista-contatos.scss',
})
export class ListaContatos {
  private readonly contatoService = inject(ContatoService);
  private readonly snackBar = inject(MatSnackBar);

  // Campo de busca (um FormControl sozinho, sem formulário em volta).
  readonly busca = new FormControl('', { nonNullable: true });

  // TODO 15 (parte 1) - BUSCA REATIVA COM OPERADORES RxJS
  // a) Crie o termo$ a partir de this.busca.valueChanges (Observable que emite a cada letra):
  //      private readonly termo$ = this.busca.valueChanges.pipe(
  //        debounceTime(300),                          -> espera parar de digitar por 300ms
  //        startWith(''),                              -> começa "sem filtro"
  //        map((texto) => texto.trim().toLowerCase()),
  //        distinctUntilChanged(),                     -> ignora se o termo não mudou
  //      );
  // b) Troque a linha provisória abaixo por:
  //      combineLatest([this.contatoService.contatos$, this.termo$]).pipe(
  //        map(([lista, termo]) => lista.filter((contato) =>
  //          contato.nome.toLowerCase().includes(termo) || contato.email.toLowerCase().includes(termo))),
  //      );
  //    combineLatest = sempre que a LISTA ou o TERMO mudar, recalcula.
  readonly contatosFiltrados$ = this.contatoService.contatos$; // provisório: sem filtro

  // TODO 15 (parte 2) - MÉTODOS QUE RESPONDEM AOS OUTPUTS DO CARD
  aoFavoritar(id: number): void {
    // chame this.contatoService.alternarFavorito(id)
  }

  aoRemover(id: number): void {
    // chame this.contatoService.remover(id)
    // e mostre um aviso do Angular Material: this.snackBar.open('Contato removido.', 'OK', { duration: 2500 });
  }
}
