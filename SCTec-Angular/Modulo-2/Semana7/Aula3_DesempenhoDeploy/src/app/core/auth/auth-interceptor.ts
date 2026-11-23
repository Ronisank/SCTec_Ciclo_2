// auth-interceptor.ts - INTERCEPTOR HTTP (Semana 7 · Aula 2).
// Toda requisição do HttpClient passa por aqui ANTES de sair e a resposta passa na VOLTA.
// Ele coloca o token no cabeçalho, para nenhum service precisar lembrar disso.
//   Ida:   Authorization: Bearer <token>   (só para a NOSSA API: nunca envie o token para terceiros!)
//   Volta: 401 (não autorizado / token vencido) -> encerra a sessão
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { API_AUTH, AuthService } from './auth-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.token();
  const ehNossaApi = req.url.startsWith(API_AUTH);

  // A requisição é IMUTÁVEL: clone() cria uma cópia com o cabeçalho novo
  const requisicao =
    token && ehNossaApi ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;

  return next(requisicao).pipe(
    catchError((erro: HttpErrorResponse) => {
      if (erro.status === 401 && ehNossaApi) {
        auth.logout(); // token inválido ou vencido: volta para o login
      }
      return throwError(() => erro); // repassa o erro para quem chamou
    }),
  );
};
