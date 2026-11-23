// detalhe-contato.ts - ROTA COM PARÂMETRO (/contatos/:id).
// Criado com: ng generate component features/contatos/detalhe-contato
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, of, switchMap } from 'rxjs';
import { ContatoService } from '../../../core/services/contato-service';
import { Contato } from '../../../shared/models/contato';
import { SharedModule } from '../../../shared/shared-module';

@Component({
  selector: 'app-detalhe-contato',
  imports: [SharedModule],
  templateUrl: './detalhe-contato.html',
  styleUrl: './detalhe-contato.scss',
})
export class DetalheContato {
  // TODO 18 - LER O PARÂMETRO :id DA URL
  // a) private readonly rota = inject(ActivatedRoute);         -> informações da rota atual
  // b) private readonly contatoService = inject(ContatoService);
  // c) troque o of(undefined) provisório por:
  //      this.rota.paramMap.pipe(
  //        map((parametros) => Number(parametros.get('id'))),        -> texto da URL vira número
  //        switchMap((id) => this.contatoService.buscarPorId(id)),   -> troca o id pelo contato
  //      );
  // Teste: clique em "Detalhes" em um card, e depois digite /contatos/999 na barra de endereço.
  readonly contato$: Observable<Contato | undefined> = of(undefined);
}
