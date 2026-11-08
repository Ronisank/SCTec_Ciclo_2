import { Component, model } from '@angular/core';
// 👉 TODO 5-IMPORTS: acrescente `model` no import de cima

@Component({
  selector: 'app-campo-busca',
  templateUrl: './campo-busca.html',
})
export class CampoBusca {
  readonly texto = model('');
  //    `model` = input + output no mesmo membro → permite two-way binding  [( )]  no pai
}
