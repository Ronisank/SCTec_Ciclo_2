// footer.ts - RODAPÉ do site (core/layout). Criado com: ng g c core/layout/footer
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly ano = new Date().getFullYear();
}
