# Aula 2 (17/11) · Estilização avançada com SASS e responsividade

> Pasta para usar **no seu `projeto-angular-sctec`** (com a Aula 1 concluída). Apoio: `Docs-Semana-6/` (Ponte S5→S6, Fluxograma e Ferramentas). Comandos: `README_COMANDOS.md`.

## Resumo do que fazer
1. **Salve a Aula 1:** `git add .` e `git commit -m "feat(organizacao): aula 1"`.
2. **TODO 1 (CLI):** `ng config schematics.@schematics/angular:component.style scss` e, no `angular.json`
   (em `build > options`): `"styles": ["src/styles.scss"]`, `"inlineStyleLanguage": "scss"` e
   `"stylePreprocessorOptions": { "includePaths": ["src/styles"] }`.
3. **Apague** a pasta `src/app` e o arquivo `src/styles.css` do seu projeto.
4. **Cole** a pasta `src` desta aula por cima da sua `src` (aceite substituir). Pare e rode de novo o `ng serve`.
5. Faça os TODOs 2 a 6 (`Ctrl + Shift + F` → `TODO 2`...).

| TODO | Onde | O que |
|---|---|---|
| 1 | `angular.json` + terminal | Projeto passa a usar **SCSS** e acha a pasta `src/styles` |
| 2 | `styles/_tokens.scss` | `@each` no mapa `$cores` gera as variáveis CSS |
| 3 | `styles/_mixins.scss` | Mixin `a-partir-de($bp)` com `@media (min-width)` |
| 4 | `core/layout/header/*` | Menu responsivo (botão ☰ no celular) |
| 5 | `features/cursos/lista-cursos/lista-cursos.scss` | Grid `auto-fill/minmax` + `object-fit: cover` |
| 6 | `features/alunos/cadastro-aluno/cadastro-aluno.scss` | `grid-template-areas` + campos em 2 colunas |

## Como saber se deu certo
- DevTools (`F12`) → **Toggle device toolbar** (`Ctrl + Shift + M`): em 375px aparece o ☰; em 1280px o menu fica em linha.
- `/cursos`: 1 coluna no celular, 2 no tablet, 3 no desktop; todas as capas com a mesma altura.
- `/alunos/cadastro`: depois de salvar, o resumo fica **ao lado** do formulário no notebook.
- `git commit -m "feat(estilo): scss, mixins e layout responsivo"`.
