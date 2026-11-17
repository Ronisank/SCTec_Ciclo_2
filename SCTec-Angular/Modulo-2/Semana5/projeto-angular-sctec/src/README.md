# Aula 1 (16/11) · Módulos e organização do projeto

> Pasta para usar **no seu `projeto-angular-sctec`**. Material de apoio da semana em `Docs-Semana-6/` (Ponte S5→S6, Fluxograma e Ferramentas).
> Comandos do Angular: `README_COMANDOS.md`.

## Resumo do que fazer
1. **Salve a Semana 5:** `git add .` e `git commit -m "semana 5 concluida"`.
2. **Gere pela CLI** (para ver os arquivos nascendo):
   `ng g c core/layout/header` · `ng g c core/layout/footer` · `ng g c shared/components/page-header` ·
   `ng g m shared` · `ng g c features/cursos/lista-cursos` · `ng g s features/cursos/curso-service`
3. **Apague a pasta `src/app`** do seu projeto e **cole** a pasta `src` desta aula por cima da sua `src`
   (aceite substituir). O seu código da Semana 5 já está dentro dela, reorganizado.
4. Faça os TODOs na ordem (`Ctrl + Shift + F` → `TODO 1`, `TODO 2`...).

| TODO | Onde | O que |
|---|---|---|
| 1 | `tsconfig.json` (raiz do projeto) | Aliases `@core/*`, `@shared`, `@shared/*`, `@features/*` |
| 2 | `app.ts` e `app.html` | Montar o layout com `<app-header />` e `<app-footer />` |
| 3 | `shared/shared-module.ts` | Completar o **SharedModule** (imports/exports) |
| 4 | `app.routes.ts` | Trocar as rotas por **lazy loading** (`loadComponent` / `loadChildren`) |
| 5 | `features/cursos/*` e `app.routes.ts` | Nova feature **Cursos**: rotas, service e lista |

**Depois de colar, o terminal mostra erros.** É esperado: os TODOs 1 a 3 "religam" o projeto.

## Como saber se deu certo
- O menu (Início, Cursos, Cadastro de aluno, Contato) aparece e navega.
- `/cursos` mostra 6 cursos (as imagens ficam desalinhadas: amanhã o SASS resolve).
- `ng build` mostra **Lazy chunk files**: `inicio`, `contato`, `alunos-routes`, `cursos-routes`.
- `git commit -m "feat(organizacao): core, shared, features e lazy loading"`.
