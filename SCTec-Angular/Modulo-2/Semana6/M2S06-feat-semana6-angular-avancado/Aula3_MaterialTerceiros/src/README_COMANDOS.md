# Comandos do Angular · projeto-angular-sctec (atualizado na Semana 6)

Rode no terminal do VS Code (`Ctrl + '`) **dentro da pasta do projeto**.
Atalhos da CLI: `generate` = `g`, `component` = `c`, `service` = `s`, `module` = `m`, `pipe` = `p`.

---

## 1. Rodar, compilar e testar

| Comando | O que faz |
|---|---|
| `ng serve -o` | Sobe o projeto em http://localhost:4200 e abre o navegador |
| `Ctrl + C` | Para o servidor (faça isso **sempre** que mudar `angular.json` ou `tsconfig.json`) |
| `ng build` | Build de produção. Mostra **Initial chunk files** (baixados logo) e **Lazy chunk files** (sob demanda) |
| `ng build --named-chunks` | Mesmo build, com nomes legíveis nos arquivos `chunk-*.js` |
| `ng test --watch=false` | Roda os testes uma vez |

## 2. Gerar arquivos (Semana 6)

| O que | Comando | Cria |
|---|---|---|
| Componente de layout (core) | `ng g c core/layout/header` | `header.ts`, `.html`, `.css/.scss`, `.spec.ts` |
| Componente compartilhado (shared) | `ng g c shared/components/page-header` | idem |
| Página de uma feature | `ng g c features/cursos/lista-cursos` | idem |
| Service de uma feature | `ng g s features/cursos/curso-service` | `curso-service.ts` (`@Service()`) |
| **Módulo** (NgModule) | `ng g m shared` | `shared/shared-module.ts` (`@NgModule`) |
| Simular antes de criar | `ng g c features/teste --dry-run` | nada (só mostra) |

## 3. Organização (Aula 1)

**Aliases** no `tsconfig.json` (dentro de `compilerOptions`):
```json
"paths": {
  "@core/*": ["./src/app/core/*"],
  "@shared": ["./src/app/shared/index.ts"],
  "@shared/*": ["./src/app/shared/*"],
  "@features/*": ["./src/app/features/*"]
}
```
Depois: `import { SharedModule } from '@shared';` em vez de `'../../../shared/shared-module'`.

**Lazy loading** no `app.routes.ts`:
```ts
{ path: 'cursos', loadChildren: () => import('@features/cursos/cursos.routes').then((m) => m.CURSOS_ROUTES) },
{ path: 'contato', loadComponent: () => import('@features/contato/contato').then((m) => m.Contato) },
```

## 4. SCSS (Aula 2)

| Comando / configuração | O que faz |
|---|---|
| `ng new meu-app --style=scss` | Projeto **novo** já com SCSS |
| `ng config schematics.@schematics/angular:component.style scss` | Projeto **existente**: os próximos `ng g c` criam `.scss` |
| `angular.json` → `"styles": ["src/styles.scss"]` | Arquivo global de estilos |
| `angular.json` → `"inlineStyleLanguage": "scss"` | SCSS também em `styles: [...]` dentro do `@Component` |
| `angular.json` → `"stylePreprocessorOptions": { "includePaths": ["src/styles"] }` | Permite `@use 'mixins' as *;` em qualquer componente |

> O pacote `sass` já vem com o `@angular/build`: **não precisa instalar nada**.

## 5. Bibliotecas (Aula 3)

| Comando | O que faz |
|---|---|
| `npm view @angular/material version peerDependencies` | Confere a versão e com quais versões do Angular a biblioteca é compatível |
| `ng add @angular/material` | Instala **e configura** (tema, fontes Roboto e Material Symbols no `index.html`) |
| `npm install ngx-mask` | Só instala (a configuração é manual: `provideNgxMask()` no `app.config.ts`) |
| `npm uninstall nome-do-pacote` | Remove uma biblioteca |
| `npm outdated` | Lista pacotes com versões mais novas |
| `ng update` | Mostra/atualiza o Angular e bibliotecas compatíveis |

## 6. Git (fim de cada aula)

```bash
git add .
git commit -m "feat(organizacao): core, shared, features e lazy loading"   # Aula 1
git commit -m "feat(estilo): scss, mixins e layout responsivo"             # Aula 2
git commit -m "feat(ui): angular material e ngx-mask"                      # Aula 3
git push
```

## 7. Atalhos úteis

| Atalho | O que faz |
|---|---|
| `Ctrl + Shift + F` | Buscar `TODO 1`, `TODO 2`... em todos os arquivos |
| `Ctrl + P` | Abrir arquivo pelo nome |
| `F12` → `Ctrl + Shift + M` | DevTools no **modo dispositivo** (testar celular/tablet) |
| `F12` → Network → filtro **JS** | Ver os chunks do lazy loading baixando ao trocar de página |
