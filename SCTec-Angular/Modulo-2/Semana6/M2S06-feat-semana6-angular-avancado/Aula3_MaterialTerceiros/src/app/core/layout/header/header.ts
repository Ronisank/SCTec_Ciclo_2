// header.ts - CABEÇALHO do site (core/layout).
// Aula 2: menu responsivo. Aula 3: vai virar uma <mat-toolbar> do Angular Material.
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// TODO 3 (TOOLBAR) - parte A: o header está em core/ e importa SÓ o que usa (sem o SharedModule).
//   1) importe:
//      import { MatButtonModule } from '@angular/material/button';
//      import { MatIconModule } from '@angular/material/icon';
//      import { MatToolbarModule } from '@angular/material/toolbar';
//   2) acrescente MatToolbarModule, MatButtonModule e MatIconModule no array imports.

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly titulo = 'Portal do Aluno';
  protected readonly curso = 'Desenvolvedor Front-End [Angular] - SCTEC';

  protected readonly menuAberto = signal(false);

  alternarMenu(): void {
    this.menuAberto.update((aberto) => !aberto);
  }

  fecharMenu(): void {
    this.menuAberto.set(false);
  }
}
