// telefone-pipe.ts - PIPE PERSONALIZADO: transforma um valor SÓ NA HORA DE MOSTRAR.
// Criado com: ng generate pipe shared/pipes/telefone
// Uso no HTML:  {{ '48991234567' | telefone }}  ->  (48) 99123-4567
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone',
})
export class TelefonePipe implements PipeTransform {
  transform(valor: string | null | undefined): string {
    const numeros = (valor ?? '').replace(/\D/g, ''); // tira tudo que não é número

    if (numeros.length === 11) {
      // celular: (48) 99123-4567
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
    }
    if (numeros.length === 10) {
      // fixo: (47) 3322-1100
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`;
    }
    return valor ?? ''; // formato desconhecido: mostra como veio
  }
}
