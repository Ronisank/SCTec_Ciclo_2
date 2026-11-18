// app.ts - COMPONENTE RAIZ: agora só MONTA o layout (header + página + footer).
// Semana 6: o cabeçalho e o rodapé viraram componentes próprios em core/layout.
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '@core/layout/footer/footer';
import { Header } from '@core/layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
