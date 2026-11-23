# Aula 1 (23/11) · Estado global com NgRx

> Pasta para usar **no seu `projeto-angular-sctec`** (com a Semana 6 concluída). Apoio: `Docs-Semana-7/` (Passo a Passo, Ponte S6→S7, Fluxograma e Ferramentas). Comandos: `README_COMANDOS.md`.

## Resumo do que fazer
1. **Salve a Semana 6:** `git add .` e `git commit -m "feat(ui): semana 6 concluida"`.
2. **Instale o NgRx** (servidor parado): `npm install @ngrx/store @ngrx/effects @ngrx/store-devtools`.
3. **Apague** a pasta `src/app` e **cole** a pasta `src` desta aula por cima da sua `src`.
4. **Cole também** a pasta `public` desta aula na raiz do projeto (traz `public/api/cursos.json`, a nossa "API").
5. Instale a extensão **Redux DevTools** no Chrome.
6. **Ajuste o budget** (se ainda não fez na Semana 6): no `angular.json`, em `budgets` do tipo `initial`, troque `"maximumWarning": "500kB"` por `"700kB"`. Com Material + NgRx o bundle inicial fica perto de 650 kB; sem o ajuste o `ng build` mostra o aviso *bundle initial exceeded maximum budget* (é só aviso, não erro).
7. `ng serve -o` e faça os TODOs na ordem (`Ctrl + Shift + F` → `TODO 1`...). **O TODO 1 religa o projeto** (antes dele a tela fica em branco com `NG0201: No provider found for "Store"`).

| TODO | Onde | O que |
|---|---|---|
| 1 | `app.config.ts` | `provideStore`, `provideState`, `provideEffects`, `provideStoreDevtools` |
| 2 | `core/state/cursos.feature.ts` | Reducer: `on(carregarSucesso)` e `on(carregarFalha)` |
| 3 | `core/state/cursos.effects.ts` | Effect `carregarCursos` (`exhaustMap` + `map` + `catchError`) |
| 4 | `core/state/cursos.feature.ts` | Reducer: `on(inscrever)` e `on(cancelarInscricao)`, **sem push** |
| 5 | `core/state/cursos.feature.ts` | Selectors: cursos inscritos, total e carga horária |
| 6 | `features/cursos/lista-cursos/lista-cursos.ts` e `core/layout/header/header.ts` | `dispatch` na lista e `selectSignal` no badge do menu |

## O que mudou na estrutura
- `CursoService` saiu de `features/cursos/` e foi para `core/services/`: agora ele só **busca** na API; quem **guarda** é a Store.
- Nova pasta `core/state/` (actions, feature, effects) e nova página `features/inscricoes/minhas-inscricoes` (rota `/inscricoes`).

## Como saber se deu certo
- Depois do TODO 1: spinner "Carregando cursos..." · depois do TODO 2: mensagem "TODO 3..." · depois do TODO 3: 6 cursos.
- Inscrever/cancelar muda o cartão (borda verde) e o número no menu **Inscrições**.
- `/inscricoes` mostra os cursos, o total e a carga horária.
- No F12 → aba **Redux**: as actions `[Cursos] ...` e o estado `cursos`.
- `ng build` sem erros · `git commit -m "feat(estado): ngrx store, effects e inscricoes"`.
