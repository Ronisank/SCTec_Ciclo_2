// rodape.ts - COMPONENTE DE LAYOUT simples (exemplo de INTERPOLAÇÃO).
// Criado com: ng generate component core/layout/rodape
import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  imports: [],
  templateUrl: './rodape.html',
  styleUrl: './rodape.scss',
})
export class Rodape {
  readonly ano = new Date().getFullYear();
  readonly curso = 'Desenvolvedor Front-End Angular';
}
