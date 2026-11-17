# M2S06 - Semana 6 (Angular)

**Angular Avançado com Organização e Estilização:** módulos no Angular · organização de projeto e módulos compartilhados ·
estilização avançada com Angular CLI e SASS · responsividade (media queries, Grid, object-fit, max-width) ·
integração com bibliotecas externas (Angular Material e componentes de terceiros).

Aulas: **16/11** (seg), **17/11** (ter) e **19/11** (qui) de 2026 · 19:00 às 22:00 · Padrão **Angular 22**.

> Todo o trabalho prático acontece no **seu `projeto-angular-sctec`** (criado na aula de 12/11).
> Cada aula traz uma pasta `src` com **TODOs**: você cola por cima da sua `src` e completa os TODOs.
> O projeto cresce a cada aula: a Aula 2 parte do fim da Aula 1, e a Aula 3 do fim da Aula 2.

## Estrutura

| Pasta / arquivo | O que é |
|---|---|
| `Aula1_ModulosOrganizacao/src` | **Segunda 16/11:** core/shared/features, SharedModule, barrel, aliases, lazy loading e a feature **Cursos** (5 TODOs) |
| `Aula2_SassResponsividade/src` | **Terça 17/11:** projeto em SCSS (partials, mapas, mixins) e layout responsivo (6 TODOs) |
| `Aula3_MaterialTerceiros/src` | **Quinta 19/11:** Angular Material (tema M3, toolbar, card, form field, snackbar) e ngx-mask (6 TODOs) |
| `Docs-Semana-6/` | **Ponte S5→S6** (o que você já sabe e o que a semana acrescenta), **Fluxograma** da semana (cola visual) e **Ferramentas de Apoio** (extensões, documentação e videoaulas no YouTube), em HTML e PDF |

Cada `src` tem um `README.md` (resumo, tabela de TODOs e "como saber se deu certo") e o `README_COMANDOS.md`
(todos os comandos da CLI usados na semana).

## Como usar (toda aula)

1. Salve o estado atual: `git add .` e `git commit -m "..."`.
2. Rode os comandos da CLI indicados no README da aula.
3. **Apague `src/app`** do seu projeto e **cole a `src` da aula** por cima da sua `src` (aceite substituir).
4. `ng serve -o` e faça os TODOs na ordem (`Ctrl + Shift + F` → `TODO 1`, `TODO 2`...).
5. `ng build` sem erros, `git commit` e `git push`.

Cada TODO está comentado no próprio arquivo, com o código esperado. Na dúvida, siga o live coding da aula.

## Bibliotecas usadas (compatíveis com Angular 22)

| Pacote | Versão validada | Como instalar |
|---|---|---|
| `@angular/material` + `@angular/cdk` | 22.2.x | `ng add @angular/material` |
| `ngx-mask` | 22.2.x | `npm install ngx-mask` |
