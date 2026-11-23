// nao-encontrada.ts - PÁGINA 404: aparece para qualquer URL que não existe (rota '**').
// Criado com: ng generate component features/nao-encontrada
import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-nao-encontrada',
  imports: [SharedModule],
  templateUrl: './nao-encontrada.html',
  styleUrl: './nao-encontrada.scss',
})
export class NaoEncontrada {}
