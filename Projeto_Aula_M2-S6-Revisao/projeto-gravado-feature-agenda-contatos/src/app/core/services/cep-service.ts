// cep-service.ts - SERVICE que CONSOME UMA API externa (viaCEP).
// Criado com: ng generate service core/services/cep-service
import { Service } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Endereco } from '../../shared/models/endereco';

@Service()
export class CepService {
  // TODO 4 (parte 1) - CONSUMIR API com HttpClient
  // a) importe HttpClient de '@angular/common/http' e inject de '@angular/core'
  // b) crie:  private readonly http = inject(HttpClient);
  // c) crie:  private readonly urlBase = 'https://viacep.com.br/ws';
  // d) no buscar(): tire os não-números do cep e devolva
  //      this.http.get<Endereco>(`${this.urlBase}/${somenteNumeros}/json/`)
  // ⚠ Depois faça a parte 2 no app.config.ts (provideHttpClient), senão dá erro "No provider for HttpClient".
  buscar(cep: string): Observable<Endereco> {
    return EMPTY; // provisório: um Observable que não emite nada
  }

  // EXEMPLO (RapidAPI): APIs com chave mandam a chave no CABEÇALHO (headers) da requisição.
  // buscarClima(cidade: string) {
  //   return this.http.get('https://open-weather13.p.rapidapi.com/city', {
  //     params: { city: cidade, lang: 'PT' },
  //     headers: {
  //       'x-rapidapi-key': 'SUA_CHAVE_AQUI',
  //       'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
  //     },
  //   });
  // }
}
