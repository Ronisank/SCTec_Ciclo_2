// acesso-negado.ts - PÁGINA 403 (rota /acesso-negado).
// Aparece quando a pessoa ESTÁ logada (autenticada), mas NÃO tem o perfil exigido (autorização).
import { Component, inject } from '@angular/core';
import { AuthService } from '@core/auth/auth-service';
import { SharedModule } from '@shared';

@Component({
  selector: 'app-acesso-negado',
  imports: [SharedModule],
  templateUrl: './acesso-negado.html',
  styleUrl: './acesso-negado.scss',
})
export class AcessoNegado {
  protected readonly auth = inject(AuthService);
}
