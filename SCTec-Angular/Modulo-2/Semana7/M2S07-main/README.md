# M2S07 - Semana 7 (Angular)

**Angular Profissional:** estado global com NgRx · autenticação e autorização · otimizações de desempenho e técnicas avançadas · deploy de um projeto Angular (Firebase / Netlify).

Aulas: **23/11** (seg), **24/11** (ter) e **26/11** (qui) de 2026 · 19:00 às 22:00 · Padrão **Angular 22** + **NgRx 22**.

> Todo o trabalho prático acontece no **seu `projeto-angular-sctec`** (o mesmo das Semanas 5 e 6).
> Cada aula traz uma pasta `src` com **TODOs**: você cola por cima da sua `src` e completa os TODOs.
> O projeto cresce a cada aula: a Aula 2 parte do fim da Aula 1, e a Aula 3 do fim da Aula 2.

## Estrutura

| Pasta / arquivo | O que é |
|---|---|
| `Aula1_EstadoGlobalNgRx/src` + `public` | **Segunda 23/11:** Store, actions, reducer, selectors, effects, inscrições e contador no menu (6 TODOs) |
| `Aula2_AutenticacaoAutorizacao/src` | **Terça 24/11:** login com JWT (DummyJSON), AuthService com signals, interceptor, guards e área admin (6 TODOs) |
| `Aula3_DesempenhoDeploy/src` + `public` + `deploy` | **Quinta 26/11:** @defer, NgOptimizedImage, computed, preloading, environments e deploy (4 TODOs + deploy) |
| `Docs-Semana-7/` | **Passo a Passo** de cada aula, **Ponte S6→S7**, **Fluxograma** da semana e **Ferramentas de Apoio** (HTML e PDF) |

Cada `src` tem um `README.md` (resumo, tabela de TODOs e "como saber se deu certo") e o `README_COMANDOS.md` (todos os comandos da semana).

## Como usar (toda aula)

1. Salve o estado atual: `git add .` e `git commit -m "..."`.
2. Rode os comandos da CLI indicados no README da aula.
3. **Apague `src/app`** do seu projeto e **cole a `src` da aula** por cima da sua `src` (e a `public`, quando houver).
4. `ng serve -o` e faça os TODOs na ordem (`Ctrl + Shift + F` → `TODO 1`, `TODO 2`...).
5. `ng build` sem erros, `git commit` e `git push`.

## Bibliotecas e serviços (validados com Angular 22)

| Pacote / serviço | Versão / observação | Como usar |
|---|---|---|
| `@ngrx/store`, `@ngrx/effects`, `@ngrx/store-devtools` | 22.0.x | `npm install @ngrx/store @ngrx/effects @ngrx/store-devtools` |
| Redux DevTools | extensão do Chrome | F12 → aba Redux |
| DummyJSON | API pública de testes (JWT) | usuários `emilys` (admin) e `averyp` (aluno) |
| `firebase-tools` | 15.x | `npm install -g firebase-tools` ou `npx firebase-tools` |
| Netlify Drop | sem instalação | app.netlify.com/drop |
