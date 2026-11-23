# Aula 2 (24/11) · Autenticação e autorização

> Pasta para usar **no seu `projeto-angular-sctec`** (com a Aula 1 concluída). Precisa de internet: a API de login é a pública **DummyJSON**. Comandos: `README_COMANDOS.md`.

## Usuários de teste
| Perfil | Usuário | Senha |
|---|---|---|
| Administrador | `emilys` | `emilyspass` |
| Aluno | `averyp` | `averyppass` |

## Resumo do que fazer
1. **Salve a Aula 1:** `git add .` e `git commit -m "feat(estado): aula 1"`.
2. (Opcional, para conhecer a CLI) `ng g s core/auth/auth-service`, `ng g interceptor core/auth/auth`, `ng g guard core/auth/auth --implements CanActivate`, `ng g c features/auth/login`.
3. **Apague** a pasta `src/app` e **cole** a pasta `src` desta aula por cima da sua `src`.
4. `ng serve -o` e faça os TODOs na ordem.

| TODO | Onde | O que |
|---|---|---|
| 1 | `core/auth/auth-service.ts` | `login()`: post → token → `/auth/me` → usuário |
| 2 | `features/auth/login/login.ts` | `subscribe`, snackbar e `returnUrl` |
| 3 | `core/auth/auth-interceptor.ts` e `app.config.ts` | `clone` com `Authorization: Bearer` + `withInterceptors` |
| 4 | `core/auth/auth-guard.ts` e `app.routes.ts` | `authGuard` + `canActivate` em `inscricoes` |
| 5 | `core/auth/auth-guard.ts` e `app.routes.ts` | `perfilGuard` + `canMatch` em `admin` |
| 6 | `core/layout/header/header.html` | Admin, usuário, Entrar e Sair com `@if` |

> **O erro que ensina:** depois dos TODOs 1 e 2 o login mostra **"Não autorizado (401): o token não chegou à API."** É esperado: o `/auth/me` foi sem token. O TODO 3 resolve.

## Como saber se deu certo
- Visitante em `/inscricoes` → vai para `/login?returnUrl=%2Finscricoes` e volta depois do login.
- `averyp`: sem link Admin; `/admin` → `/acesso-negado`.
- `emilys`: link Admin; cadastra um curso e ele aparece em `/cursos`.
- F5 mantém a sessão (F12 → Application → Local Storage: `sctec.token`, `sctec.usuario`); **Sair** limpa.
- `ng build` sem erros · `git commit -m "feat(auth): login jwt, interceptor e guards"`.
