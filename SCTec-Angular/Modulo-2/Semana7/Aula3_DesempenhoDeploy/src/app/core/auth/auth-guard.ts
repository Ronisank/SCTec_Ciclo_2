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

  if (auth.estaLogado()) {
    return true;
  }
  // Guarda para onde a pessoa queria ir: depois do login, ela volta para lá
  return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
};

// AUTORIZAÇÃO: "você tem o PERFIL certo?"
// É uma FÁBRICA: perfilGuard('admin') devolve um guard configurado para 'admin'.
// CanMatch: se não combinar, o Router nem baixa o código (chunk) da página.
export function perfilGuard(perfil: Perfil): CanMatchFn {
  return (_route, segments) => {
    const auth = inject(AuthService);
    const router = inject(Router);

    if (!auth.estaLogado()) {
      const url = '/' + segments.map((s) => s.path).join('/');
      return router.createUrlTree(['/login'], { queryParams: { returnUrl: url } });
    }
    if (auth.usuario()?.perfil === perfil) {
      return true;
    }
    return router.createUrlTree(['/acesso-negado']); // logado, mas SEM permissão (403)
  };
}
