// header.ts - CABEÇALHO do site (core/layout).
// Semana 6 · Aula 2: ganha MENU RESPONSIVO (botão "hambúrguer" no celular).
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly titulo = 'Portal do Aluno';
  protected readonly curso = 'Desenvolvedor Front-End [Angular] - SCTEC';

  // Estado do menu no celular (signal: a tela atualiza sozinha).
  protected readonly menuAberto = signal(false);

  // TODO 4 (MENU RESPONSIVO) - parte A: crie os dois métodos:
  //   alternarMenu(): void { this.menuAberto.update((aberto) => !aberto); }
  //   fecharMenu(): void { this.menuAberto.set(false); }
}
