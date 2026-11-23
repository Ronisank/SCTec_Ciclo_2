// header.ts - CABEÇALHO do site (core/layout).
// Semana 6: menu responsivo e <mat-toolbar>.
// Semana 7 · Aula 1: lê a STORE (NgRx) para mostrar o total de inscrições.
// Semana 7 · Aula 2: lê o AuthService (signals) para mostrar Entrar / usuário + Sair / link Admin.
import { Component, inject, signal } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '@core/auth/auth-service';
import { cursosFeature } from '@core/state/cursos.feature';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private store = inject(Store);
  protected readonly auth = inject(AuthService);

  protected readonly titulo = 'Portal do Aluno';
  protected readonly curso = 'Desenvolvedor Front-End [Angular] - SCTEC';

  protected readonly menuAberto = signal(false);

  // Estado GLOBAL: o mesmo número em qualquer página
  protected readonly totalInscritos = this.store.selectSignal(cursosFeature.selectTotalInscritos);

  alternarMenu(): void {
    this.menuAberto.update((aberto) => !aberto);
  }

  fecharMenu(): void {
    this.menuAberto.set(false);
  }

  sair(): void {
    this.auth.logout();
  }
}
