// app.ts - COMPONENTE RAIZ: agora só MONTA o layout (header + página + footer).
// Semana 6: o cabeçalho e o rodapé viraram componentes próprios em core/layout.
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// TODO 2 (LAYOUT EM CORE) - parte A: importe os dois componentes de layout usando o ALIAS @core:
//   import { Footer } from '@core/layout/footer/footer';
//   import { Header } from '@core/layout/header/header';
// e acrescente Header e Footer no array "imports" abaixo: [RouterOutlet, Header, Footer]

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
