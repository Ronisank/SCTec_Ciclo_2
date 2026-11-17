// cep-service.ts - SERVICE de acesso à API viaCEP (Semana 5).
// Semana 6: mudou para core/services/ -> serviço GLOBAL do app (uma instância só, criada pelo @Service()).
import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '@shared/models/endereco';

@Service()
export class CepService {
  private http = inject(HttpClient);
  private readonly urlBase = 'https://viacep.com.br/ws';

  buscar(cep: string): Observable<Endereco> {
    return this.http.get<Endereco>(`${this.urlBase}/${cep}/json/`);
  }
}
