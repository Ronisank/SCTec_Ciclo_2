# Aula 3 (19/11) · Angular Material e bibliotecas de terceiros

> Pasta para usar **no seu `projeto-angular-sctec`** (com as Aulas 1 e 2 concluídas). Apoio: `Docs-Semana-6/` (Ponte S5→S6, Fluxograma e Ferramentas). Comandos: `README_COMANDOS.md`.

## Resumo do que fazer
1. **Salve a Aula 2:** `git add .` e `git commit -m "feat(estilo): aula 2"`.
2. **Instale as bibliotecas** (com internet, dentro da pasta do projeto):
   - `ng add @angular/material` (aceite as opções; ele instala `@angular/material` + `@angular/cdk`, coloca as fontes no `index.html` e um tema no `styles.scss`);
   - `npm install ngx-mask`.
3. **Apague** a pasta `src/app` e **cole** a pasta `src` desta aula por cima da sua `src` (aceite substituir:
   o `styles.scss` colado corrige a ordem dos `@use`).
4. Faça os TODOs na ordem (`Ctrl + Shift + F` → `TODO 1`...). **O TODO 1 religa o projeto** (até ele, o terminal mostra erros).

| TODO | Onde | O que |
|---|---|---|
| 1 | `shared/shared-module.ts` e `app.config.ts` | Material + `NgxMaskDirective` no SharedModule; `provideNgxMask()` |
| 2 | `styles.scss` | Tema Material 3 (`mat.theme`) + personalização com `*-overrides` |
| 3 | `core/layout/header/*` | Cabeçalho vira `mat-toolbar` com `mat-button` e `mat-icon` |
| 4 | `features/cursos/lista-cursos/lista-cursos.html` | Cartões viram `mat-card` |
| 5 | `features/alunos/cadastro-aluno/cadastro-aluno.html` | Campos `mat-form-field` + máscaras `ngx-mask` |
| 6 | `features/alunos/cadastro-aluno/cadastro-aluno.ts` | Aviso de sucesso/erro com `MatSnackBar` |

## Como saber se deu certo
- O cabeçalho é uma `mat-toolbar` azul com ícones; no celular aparece o botão `menu`.
- `/cursos` mostra `mat-card` com imagem, título, carga horária (tooltip) e botão **Inscrever**.
- No cadastro, o telefone aparece como `(48) 99999-8888` e o CEP como `88010-000`, mas o formulário guarda só números.
- Salvar mostra o **snackbar** de sucesso no rodapé da tela.
- `ng build` sem erros. Se aparecer aviso de **budget** (`bundle initial exceeded maximum budget`), ajuste
  `maximumWarning` para `700kB` no `angular.json` (passo a passo explica o porquê).
- `git commit -m "feat(ui): angular material e ngx-mask"`.
