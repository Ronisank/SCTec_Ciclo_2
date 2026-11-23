// header.ts - CABEÇALHO do site (core/layout).
// Semana 6: menu responsivo e <mat-toolbar>.
// Semana 7 · Aula 1: o header LÊ A STORE para mostrar quantas inscrições o aluno tem.
// Repare: o header e a página de cursos NÃO se conhecem. Os dois falam só com a Store.
import { Component, inject, signal } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { cursosFeature } from '@core/state/cursos.feature';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private store = inject(Store);

  protected readonly titulo = 'Portal do Aluno';
  protected readonly curso = 'Desenvolvedor Front-End [Angular] - SCTEC';

  protected readonly menuAberto = signal(false);

  // TODO 6 - parte B: o contador do menu deve vir da STORE (estado global). Troque a linha abaixo por:
  //   protected readonly totalInscritos = this.store.selectSignal(cursosFeature.selectTotalInscritos);
  protected readonly totalInscritos = signal(0);

  alternarMenu(): void {
    this.menuAberto.update((aberto) => !aberto);
  }

  fecharMenu(): void {
    this.menuAberto.set(false);
  }
}
