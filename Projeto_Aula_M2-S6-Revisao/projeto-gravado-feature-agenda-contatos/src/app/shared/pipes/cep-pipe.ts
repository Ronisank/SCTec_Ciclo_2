// cep-pipe.ts - PIPE PERSONALIZADO para CEP.
// Criado com: ng generate pipe shared/pipes/cep
// Uso no HTML:  {{ '88010000' | cep }}  ->  88010-000
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep',
})
export class CepPipe implements PipeTransform {
  // TODO 13 - TRANSFORM DO PIPE
  // (Use o telefone-pipe.ts, que está pronto, como modelo.)
  // a) const numeros = (valor ?? '').replace(/\D/g, '');     -> tira tudo que não é número
  // b) se numeros.length for diferente de 8, devolva o valor original (valor ?? '')
  // c) senão devolva `${numeros.slice(0, 5)}-${numeros.slice(5)}`
  // Teste: abra /contatos/1 e veja o CEP da Ana formatado.
  transform(valor: string | null | undefined): string {
    return valor ?? ''; // provisório: devolve sem formatar
  }
}
