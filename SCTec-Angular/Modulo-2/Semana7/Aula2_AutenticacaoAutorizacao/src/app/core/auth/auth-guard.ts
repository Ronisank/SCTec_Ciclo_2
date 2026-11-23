// auth-guard.ts - GUARDS DE ROTA (Semana 7 · Aula 2).
// Um guard é uma função que o Router chama ANTES de abrir uma rota. Ela devolve:
//   true     -> pode entrar
//   UrlTree  -> não pode: vai para outra URL (redirecionamento)
import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { Perfil } from '@shared/models/usuario';
import { AuthService } from './auth-service';

// AUTENTICAÇÃO: "você está logado?"  (porteiro na porta da sala)
export const authGuard: CanActivateFn = (_route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // TODO 4 (AUTH GUARD) - parte A: apague o "return true" provisório e escreva:
  //   if (auth.estaLogado()) {
  //     return true;
  //   }
  //   return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
  return true;
};

// AUTORIZAÇÃO: "você tem o PERFIL certo?"
// É uma FÁBRICA: perfilGuard('admin') devolve um guard configurado para 'admin'.
// CanMatch: se não combinar, o Router nem baixa o código (chunk) da página.
export function perfilGuard(perfil: Perfil): CanMatchFn {
  return (_route, segments) => {
    const auth = inject(AuthService);
    const router = inject(Router);

    // TODO 5 (PERFIL GUARD) - parte A: apague o "return true" provisório e escreva as 3 regras:
    //   if (!auth.estaLogado()) {                                    // 1) não logado -> login
    //     const url = '/' + segments.map((s) => s.path).join('/');
    //     return router.createUrlTree(['/login'], { queryParams: { returnUrl: url } });
    //   }
    //   if (auth.usuario()?.perfil === perfil) {                     // 2) perfil certo -> entra
    //     return true;
    //   }
    //   return router.createUrlTree(['/acesso-negado']);             // 3) perfil errado -> 403
    return true;
  };
}
