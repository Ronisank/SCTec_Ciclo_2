// curso-service.ts - ACESSO À API de cursos (Semana 7 · Aula 1).
// Mudou de features/cursos/ para core/services/: agora o catálogo é ESTADO GLOBAL
// (usado pelo header, pela lista de cursos e pela página de inscrições).
// O service só BUSCA os dados. Quem GUARDA os dados agora é a Store do NgRx.
import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '@shared/models/curso';

@Service()
export class CursoService {
  private http = inject(HttpClient);
  // Arquivo servido pela pasta public/ (public/api/cursos.json). Funciona como uma API de verdade.
  private readonly url = 'api/cursos.json';

  listar(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.url);
  }
}
