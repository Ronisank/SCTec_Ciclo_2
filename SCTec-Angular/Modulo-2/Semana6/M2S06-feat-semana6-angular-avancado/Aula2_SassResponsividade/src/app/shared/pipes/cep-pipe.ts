// cep-pipe.ts - PIPE PERSONALIZADO (Semana 5): "88010000" -> "88010-000" na hora de exibir.
// Semana 6: mudou de pipes/ para shared/pipes/ -> é reutilizável por qualquer feature.
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cep' })
export class CepPipe implements PipeTransform {
  transform(valor: string): string {
    return `${valor.slice(0, 5)}-${valor.slice(5)}`;
  }
}
