// destaque.ts - DIRETIVA DE ATRIBUTO PERSONALIZADA.
// Criada com: ng generate directive shared/directives/destaque
// Diretiva não tem HTML próprio: ela MUDA o comportamento/visual do elemento onde é colocada.
// Uso:  <mat-card appDestaque="#e91e63">   ou   <li appDestaque>  (cor padrão)
import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appDestaque]',
})
export class Destaque {
  // O input tem o MESMO nome do seletor: assim o valor vem direto em appDestaque="cor".
  readonly appDestaque = input('');

  // ElementRef = acesso ao elemento HTML real onde a diretiva foi colocada.
  private readonly elemento = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    this.elemento.nativeElement.style.transition = 'transform 0.2s, box-shadow 0.2s';
  }

  // TODO 14 - @HostListener: "escutar" eventos do elemento onde a diretiva está
  // a) @HostListener('mouseenter') aoEntrar():
  //      const cor = this.appDestaque() || '#1565c0';
  //      this.elemento.nativeElement.style.transform = 'translateY(-4px)';
  //      this.elemento.nativeElement.style.boxShadow = `0 10px 20px ${cor}55`;
  // b) @HostListener('mouseleave') aoSair():
  //      volte transform e boxShadow para '' (vazio)
  // Teste: passe o mouse nos tópicos da página inicial e nos cards de contato.
}
