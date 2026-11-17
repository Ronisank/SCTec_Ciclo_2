// header.ts - CABEÇALHO do site (core/layout). Antes ficava dentro do app.html.
// Criado com: ng g c core/layout/header
// core = peças usadas UMA vez no app inteiro (layout, serviços globais).
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly titulo = 'Portal do Aluno';
  protected readonly curso = 'Desenvolvedor Front-End [Angular] - SCTEC';
}
