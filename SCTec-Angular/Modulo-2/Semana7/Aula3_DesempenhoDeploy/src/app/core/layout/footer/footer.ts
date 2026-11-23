// footer.ts - RODAPÉ do site (core/layout). Criado com: ng g c core/layout/footer
import { Component } from '@angular/core';
// TODO 4 - parte C: descomente depois de criar o alias @env no tsconfig.json (parte B):
// import { environment } from '@env/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly ano = new Date().getFullYear();
  // Semana 7 · Aula 3: mostra em qual AMBIENTE o app está rodando (desenvolvimento ou produção)
  protected readonly ambiente = '?'; // TODO 4 - parte C: troque '?' por environment.nome
}
