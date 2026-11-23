// app.ts - COMPONENTE RAIZ (o primeiro a ser carregado, pelo main.ts).
// Ele só monta o "esqueleto" da página: cabeçalho + área das rotas + rodapé.
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from './core/layout/cabecalho/cabecalho';
import { Rodape } from './core/layout/rodape/rodape';

@Component({
  imports: [RouterOutlet, Cabecalho, Rodape],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
