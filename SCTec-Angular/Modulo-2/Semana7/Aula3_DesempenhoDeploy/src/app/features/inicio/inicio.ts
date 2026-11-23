// inicio.ts - PÁGINA INICIAL.
// Semana 7 · Aula 3: a linha do tempo virou o componente LinhaDoTempo e é carregada com @defer
// (só quando aparece na tela). O Início fica mais leve e abre mais rápido.
import { Component } from '@angular/core';
import { SharedModule } from '@shared';
import { LinhaDoTempo } from './linha-do-tempo/linha-do-tempo';

@Component({
  selector: 'app-inicio',
  imports: [SharedModule, LinhaDoTempo],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {}
