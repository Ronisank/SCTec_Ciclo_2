# Comandos do Angular · projeto-angular-sctec (atualizado na Semana 7)

Rode no terminal do VS Code (`Ctrl + '`) **dentro da pasta do projeto** (onde está o `angular.json`).

---

## 1. Rodar, compilar e analisar

| Comando | O que faz |
|---|---|
| `ng serve -o` | Sobe o projeto em http://localhost:4200 (usa o `environment.development.ts`) |
| `Ctrl + C` | Para o servidor (faça isso **sempre** que mudar `angular.json` ou `tsconfig.json`) |
| `ng build` | Build de produção em `dist/projeto-angular-sctec/browser` (usa o `environment.ts`) |
| `ng build --stats-json` | Gera `dist/projeto-angular-sctec/browser-stats.json` (abra em esbuild.github.io/analyze) |
| `npx http-server dist/projeto-angular-sctec/browser -p 8080` | Testa o build localmente (sem rewrite: F5 em rotas dá 404) |

## 2. Aula 1 · NgRx

| Comando | O que faz |
|---|---|
| `npm view @ngrx/store version peerDependencies` | Confere a versão e a compatibilidade com o Angular |
| `npm install @ngrx/store @ngrx/effects @ngrx/store-devtools` | Instala a Store, os effects e o DevTools |
| `ng add @ngrx/store` | (Alternativa) instala e já registra `provideStore()` no `app.config.ts` |
| `ng g c features/inscricoes/minhas-inscricoes` | Nova página de inscrições |

```ts
// app.config.ts
provideStore(),
provideState(cursosFeature),
provideEffects(cursosEffects),
provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),

// em um componente
cursos = this.store.selectSignal(cursosFeature.selectLista);   // LER
this.store.dispatch(CursosActions.inscrever({ cursoId }));      // AVISAR
```

## 3. Aula 2 · Autenticação e autorização

| Comando | Cria |
|---|---|
| `ng g s core/auth/auth-service` | `auth-service.ts` com `@Service()` |
| `ng g interceptor core/auth/auth` | `auth-interceptor.ts` (`HttpInterceptorFn`) |
| `ng g guard core/auth/auth --implements CanActivate` | `auth-guard.ts` (`CanActivateFn`) |
| `ng g c features/auth/login` · `ng g c features/auth/acesso-negado` · `ng g c features/admin/painel-admin` | páginas |

```ts
provideHttpClient(withInterceptors([authInterceptor])),                // app.config.ts
{ path: 'inscricoes', canActivate: [authGuard], loadComponent: ... },  // app.routes.ts
{ path: 'admin', canMatch: [perfilGuard('admin')], loadComponent: ... },
```

Usuários de teste (DummyJSON): **admin** `emilys` / `emilyspass` · **aluno** `averyp` / `averyppass`.

## 4. Aula 3 · Desempenho e deploy

| Comando | O que faz |
|---|---|
| `ng g environments` | Cria `src/environments/` e o `fileReplacements` no `angular.json` |
| `npm install -g firebase-tools` | CLI do Firebase (sem permissão? use `npx firebase-tools ...`) |
| `firebase login` | Entra com a conta Google |
| `firebase init hosting` | public: `dist/projeto-angular-sctec/browser` · SPA: **Yes** · GitHub: **No** · overwrite index.html: **No** |
| `firebase deploy` | Publica e mostra a **Hosting URL** |
| Netlify Drop | app.netlify.com/drop → arraste a pasta `browser` (com o `_redirects`) |

```html
@defer (on viewport) { <app-linha-do-tempo /> } @placeholder { ... }
<img [ngSrc]="curso.imagem" width="800" height="450" [priority]="$first" />
```
