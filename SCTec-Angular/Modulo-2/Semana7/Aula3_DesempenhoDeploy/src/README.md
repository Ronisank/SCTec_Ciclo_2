# Aula 3 (26/11) · Desempenho e deploy

> Pasta para usar **no seu `projeto-angular-sctec`** (com a Aula 2 concluída). Precisa de internet e de uma conta Google (Firebase) ou GitHub/e-mail (Netlify). Comandos: `README_COMANDOS.md`.

## Resumo do que fazer
1. **Salve a Aula 2:** `git add .` e `git commit -m "feat(auth): aula 2"`.
2. `ng g environments` (cria os arquivos e ajusta o `angular.json`).
3. `ng build` e anote os chunks (não existe `linha-do-tempo`).
4. **Apague** `src/app` e **cole** a `src` desta aula; cole também a pasta `public` (traz `_redirects` e `robots.txt`).
5. `ng serve -o` e faça os TODOs na ordem. Depois, o deploy.

| TODO | Onde | O que |
|---|---|---|
| 1 | `features/inicio/inicio.html` | `@defer (on viewport)` na linha do tempo |
| 2 | `shared/shared-module.ts`, `lista-cursos.html`, `index.html` | `NgOptimizedImage`: `[ngSrc]`, `width/height`, `priority`, `preconnect` |
| 3 | `lista-cursos.ts`, `lista-cursos.html`, `app.config.ts` | `computed()` no lugar do método + `withPreloading` |
| 4 | `environment.development.ts`, `tsconfig.json`, services, footer, `app.config.ts` | environments + alias `@env` |

## Deploy (Etapas D e E)
1. `ng build` → pasta `dist/projeto-angular-sctec/browser`.
2. **Firebase:** `npm install -g firebase-tools` · `firebase login` · `firebase init hosting` (public `dist/projeto-angular-sctec/browser`, SPA **Yes**, GitHub **No**, overwrite index.html **No**) · `firebase deploy`. Modelo de `firebase.json` em `deploy/firebase.json`.
3. **Plano B · Netlify:** app.netlify.com/drop → arraste a pasta `browser`.

## Como saber se deu certo
- `ng build` lista o Lazy chunk **linha-do-tempo**; no celular o aviso `NG0913` some.
- O console não mostra mais `estaInscrito() chamado`.
- Rodapé: **ambiente: desenvolvimento** no `ng serve` e **ambiente: produção** no site publicado.
- Site publicado: `/cursos` direto na barra e F5 em `/inscricoes` funcionam; login funciona.
- URL no `README.md` do seu projeto · `git commit -m "feat(deploy): desempenho e publicacao"` · `git push`.
