# Roteiro da aula gravada: Revisão geral de Angular (do zero ao app completo)

**Duração:** 60 minutos
**Projeto:** *Agenda SENAI*, uma agenda de contatos com busca reativa, cadastro com viaCEP, rotas com lazy loading, Angular Material e layout responsivo.
**Versões testadas:** Node 22.23 · npm 10.9 · Angular CLI 22.2 · Angular Material 22.3
**Pasta do repositório:** `C:\Users\DESKTOP\Desktop\SENAI\ANGULAR\projeto-gravado\projeto-gravado`
**Pasta do gabarito:** `C:\Users\DESKTOP\Desktop\SENAI\ANGULAR\Gabarito_Aula_Gravada_Revisao_Geral`

> **Como usar este roteiro**
> - **Parte 1 (0:00 → 0:20):** tudo é feito **pelo terminal**: criar, configurar e estruturar o projeto.
> - **Parte 2 (0:20 → 0:55):** você copia a pasta `1-codigo-com-todos/src` para dentro do projeto e resolve os **22 TODOs** junto com a turma.
> - **Parte 3 (0:55 → 1:00):** build, Git (GitFlow) e encerramento.
> - O projeto **compila e roda** logo depois da cópia, e continua rodando a cada TODO resolvido. Deixe o `ng serve` aberto e mostre o navegador atualizando sozinho.
> - Se algo travar durante a gravação, copie o arquivo correspondente de `2-projeto-completo/src` (mesmo caminho).
> - Os blocos `> 🎙️ Fala:` são sugestões do que dizer.

---

## Mapa: tópico do curso → onde aparece no projeto

| Semana | Tópico | Onde aparece |
|---|---|---|
| Inicial | Introdução, primeiros passos e ambiente | Parte 1, passos 1.1 e 1.3 |
| Inicial | Arquitetura, estrutura e build | Passos 1.3 e 1.5, e `ng build` na Parte 3 |
| Inicial | Depuração e debug | TODO 9 (`console.log`, `debugger`, DevTools, Angular DevTools) |
| Inicial | TypeScript para Angular | TODO 1 (union type), interfaces, `Omit`, tipos genéricos `Observable<T>` |
| Inicial | Componentes | Todos os `ng generate component` e TODOs 7 a 12 |
| Inicial | Template syntax (interpolação, estruturais, atributo) | TODOs 8, 10, 12 e 16 (`{{ }}`, `@if`, `@for`, `@switch`, `[class.x]`) |
| Inicial | Binding de dados e eventos | TODO 10 (`[src]`, `(click)`, `[(ngModel)]`) e TODO 21 (`(blur)`) |
| Intermediário | Services e Dependency Injection | TODOs 2, 3, 4, 7 (`@Service()`, `inject()`) |
| Intermediário | Componentes reativos | TODOs 7/8 (cabeçalho com `total$ \| async`) e 15/16 (lista) |
| Intermediário | Observables e RxJS | TODOs 2, 15 e 18 (`BehaviorSubject`, `map`, `debounceTime`, `combineLatest`, `switchMap`) |
| Intermediário | GitHub colaborativo (plugins e GitFlow) | Passos 1.2 e 3.2 |
| Avançado | Formulários template-driven e reativos | TODO 22 (Fale conosco) e TODOs 19 a 21 (Novo contato) |
| Avançado | Roteamento | TODOs 5, 6 e 18 (lazy loading, rotas filhas, `:id`, `**`) |
| Avançado | Pipes e diretivas personalizadas | TODOs 13 e 14 |
| Avançado | Consumindo APIs (viaCEP, RapidAPI) | TODOs 4, 20 e 21, mais o exemplo de RapidAPI comentado no `cep-service.ts` |
| Org./Estilo | Módulos no Angular | `ContatosModule` + `ContatosRoutingModule` (TODO 6) |
| Org./Estilo | Organização e módulos compartilhados | Pastas `core/shared/features`, `SharedModule` e `MaterialModule` |
| Org./Estilo | Estilização avançada com CLI e SASS | Passo 1.4, `_variaveis.scss`, `_mixins.scss` e nesting com `&` |
| Org./Estilo | Responsividade (media queries, grid, object-fit, max-width) | TODO 17 e `.container` no `styles.scss` |
| Org./Estilo | Bibliotecas externas: Angular Material | Passo 1.4 (`ng add`) e `MaterialModule` |

## Linha do tempo

| Tempo | Bloco | O que acontece |
|---|---|---|
| 0:00 – 0:02 | Abertura | Apresentar o app final e o que vamos revisar |
| 0:02 – 0:05 | 1.1 Ambiente | Node, npm, Angular CLI, VS Code e extensões |
| 0:05 – 0:07 | 1.2 GitFlow | Branches `develop` e `feature/agenda-contatos` |
| 0:07 – 0:11 | 1.3 Criar o projeto | `ng new`, estrutura de pastas, `ng serve` |
| 0:11 – 0:14 | 1.4 SCSS e Material | `ng add`, `ng config`, partials SASS |
| 0:14 – 0:18 | 1.5 Arquitetura | `ng generate` de módulos, componentes, services, pipes, diretiva |
| 0:18 – 0:20 | 1.6 Commit e gabarito | Commit da estrutura e cópia do código com TODOs |
| 0:20 – 0:26 | Bloco A | TypeScript, services, DI, RxJS e API (TODOs 1 a 4) |
| 0:26 – 0:31 | Bloco B | Rotas, módulos e cabeçalho reativo (TODOs 5 a 8) |
| 0:31 – 0:38 | Bloco C | Componentes, bindings, debug, input e output (TODOs 9 a 12) |
| 0:38 – 0:41 | Bloco D | Pipe e diretiva personalizados (TODOs 13 e 14) |
| 0:41 – 0:46 | Bloco E | Lista reativa, grid e object-fit (TODOs 15 a 17) |
| 0:46 – 0:55 | Bloco F | Rota com parâmetro, formulários e viaCEP (TODOs 18 a 22) |
| 0:55 – 0:58 | Parte 3 | `ng build` (lazy chunks) e Git: commit, push, PR, merge |
| 0:58 – 1:00 | Encerramento | Recapitular o mapa de tópicos |

---

# PARTE 1: Criar e estruturar o projeto pelo terminal (0:00 → 0:20)

## 0. Abertura (0:00 – 0:02)

> 🎙️ Fala: "Hoje vamos revisar **tudo** que vimos de Angular em um projeto só, começando do zero. Primeiro criamos e organizamos o projeto inteiro pelo terminal. Depois vamos escrever o código juntos, TODO por TODO. No final ele vai estar no GitHub seguindo o GitFlow."

Se quiser, mostre o app pronto rodando a partir de `2-projeto-completo` (com `npm install` e `ng serve --open` feitos **antes** de gravar).

## 1.1 Ambiente (0:02 – 0:05)

Abra o VS Code na pasta do repositório e o terminal integrado (**Terminal → Novo Terminal**). Todos os comandos abaixo são para o **PowerShell**, que é o terminal padrão do VS Code no Windows.

```powershell
Set-Location C:\Users\DESKTOP\Desktop\SENAI\ANGULAR\projeto-gravado\projeto-gravado
node --version
npm --version
ng version
```

> 🎙️ Fala: "O Angular precisa do **Node.js**, que roda o JavaScript fora do navegador, e do **npm**, que instala as bibliotecas. O comando `ng` é a **Angular CLI**."

Se a CLI não estiver instalada na máquina do aluno:

```powershell
npm install --global @angular/cli
```

**Extensões do VS Code** (mostre rapidamente a aba de extensões):

| Extensão | Para quê |
|---|---|
| Angular Language Service | Autocompletar e erros dentro do HTML dos componentes |
| GitLens | Mostra quem alterou cada linha (*blame*) e o histórico de commits |
| Git Graph | Desenha o gráfico das branches, útil para enxergar o GitFlow |
| Prettier | Formata o código automaticamente |

Na **Chrome Web Store**, mostre também a extensão **Angular DevTools**. Ela será usada no TODO 9.

## 1.2 GitFlow: preparar as branches (0:05 – 0:07)

```powershell
git status
git branch --all
git switch --create develop
git push --set-upstream origin develop
git switch --create feature/agenda-contatos
```

> 🎙️ Fala: "No **GitFlow**: a `main` guarda só o que está pronto para produção. A `develop` junta as funcionalidades. Cada funcionalidade nova nasce numa branch `feature/...` criada a partir da `develop`. Quando a feature termina, abrimos um **Pull Request** para a `develop`."

```
main      ●────────────────────────────────────●  (release)
develop    └──●───────────────────────●───────┘
feature        └──● estrutura ──● código ──┘   (Pull Request)
```

## 1.3 Criar o projeto (0:07 – 0:11)

O `ng new` não aceita criar o projeto em uma pasta que já tenha um `README.md`. Como o repositório veio do GitHub com um README, apague-o primeiro (o Angular cria um novo):

```powershell
Remove-Item -Path README.md
```

Agora crie o projeto **dentro da pasta atual**:

```powershell
ng new projeto-gravado --directory=. --style=scss --routing=true --ssr=false --zoneless=true --ai-config=none --skip-tests=true --skip-git=true
```

| Opção | Por quê |
|---|---|
| `--directory=.` | Cria na pasta atual (o repositório já existe) |
| `--style=scss` | Usa **SASS/SCSS** em todos os componentes |
| `--routing=true` | Já cria o `app.routes.ts` |
| `--ssr=false` | Sem renderização no servidor (não usamos no curso) |
| `--zoneless=true` | Padrão do Angular moderno: a tela atualiza por **signals**, eventos e `async` pipe |
| `--ai-config=none` | Não cria arquivos de configuração para ferramentas de IA |
| `--skip-tests=true` | Não gera os arquivos `.spec.ts` (deixa a árvore de pastas mais limpa para a aula) |
| `--skip-git=true` | Não roda `git init` (o repositório já existe) |

> 🎙️ Fala, explicando a **arquitetura** com o explorador de arquivos aberto:
> - `package.json`: dependências e scripts (`npm start` = `ng serve`).
> - `angular.json`: configuração do **build** (estilos globais, *budgets*, opções do SASS).
> - `tsconfig.json`: regras do **TypeScript** (modo `strict` ligado).
> - `public/`: arquivos estáticos (favicon, imagens).
> - `src/main.ts`: ponto de entrada. Ele chama `bootstrapApplication(App, appConfig)`.
> - `src/app/app.config.ts`: os *providers* globais (rotas, HttpClient...).
> - `src/app/app.ts` + `app.html` + `app.scss`: o **componente raiz**.
> - Cada componente tem **3 arquivos**: `.ts` (lógica), `.html` (template) e `.scss` (estilo).

```powershell
ng serve --open
```

Mostre a página padrão do Angular e pare o servidor com **Ctrl + C**.

## 1.4 SCSS avançado e Angular Material (0:11 – 0:14)

**Biblioteca externa (Angular Material):**

```powershell
npm view @angular/material version
ng add @angular/material --skip-confirmation
```

Quando o `ng add` perguntar, escolha o tema **Azure/Blue** e confirme a tipografia. Ele **instala e configura** o pacote: adiciona o tema no `styles.scss` e as fontes Roboto e Material Symbols no `index.html`. Mostre essas duas mudanças com o `git diff`:

```powershell
git diff -- src/styles.scss src/index.html
```

**Pasta de partials SASS** (variáveis e mixins reutilizáveis):

```powershell
New-Item -ItemType Directory -Path src/styles
New-Item -ItemType File -Path src/styles/_variaveis.scss
New-Item -ItemType File -Path src/styles/_mixins.scss
```

**Ensinar ao SASS onde procurar os partials.** Assim qualquer componente pode escrever `@use 'mixins' as *;` sem caminho `../../..`:

```powershell
ng config projects.projeto-gravado.architect.build.options.stylePreprocessorOptions.includePaths '[\"src/styles\"]'
```

**Ajustar o budget do build.** O Angular Material deixa o pacote inicial maior que o limite padrão de 500 kB:

```powershell
ng config "projects.projeto-gravado.architect.build.configurations.production.budgets[0].maximumWarning" 1MB
ng config "projects.projeto-gravado.architect.build.configurations.production.budgets[0].maximumError" 2MB
```

> 🎙️ Fala: "O `ng config` edita o `angular.json` por nós." Abra o `angular.json` e mostre `stylePreprocessorOptions` e `budgets`. "**Budget** é o limite de tamanho do build: o Angular avisa quando o app fica pesado demais."

## 1.5 Arquitetura de pastas com a CLI (0:14 – 0:18)

> 🎙️ Fala: "Vamos organizar em três áreas:
> - **core/**: coisas únicas do app, como o layout (cabeçalho e rodapé) e os services globais.
> - **shared/**: o que é reutilizado (componentes, pipes, diretivas, models, módulos compartilhados).
> - **features/**: as páginas, separadas por funcionalidade."

Rode um por um, comentando o que cada comando cria:

```powershell
# ===== SHARED: models (interfaces TypeScript)
ng generate interface shared/models/contato
ng generate interface shared/models/endereco

# ===== SHARED: módulos compartilhados (NgModule)
ng generate module shared
ng generate module shared/material

# ===== SHARED: componentes, pipes e diretiva reutilizáveis
ng generate component shared/components/card-contato
ng generate component shared/components/titulo-pagina
ng generate pipe shared/pipes/cep
ng generate pipe shared/pipes/telefone
ng generate directive shared/directives/destaque

# ===== CORE: services globais e layout
ng generate service core/services/contato-service
ng generate service core/services/cep-service
ng generate component core/layout/cabecalho
ng generate component core/layout/rodape

# ===== FEATURES: páginas avulsas
ng generate component features/inicio
ng generate component features/fale-conosco
ng generate component features/nao-encontrada

# ===== FEATURES: módulo de funcionalidade COM rotas próprias (lazy loading)
ng generate module features/contatos --routing
ng generate component features/contatos/lista-contatos
ng generate component features/contatos/detalhe-contato
ng generate component features/contatos/form-contato
```

> Dica: antes de gerar, mostre a simulação com `ng generate component features/teste --dry-run`. Ela lista o que **seria** criado sem criar nada.

A estrutura final fica assim (mostre no explorador do VS Code):

```
src/
├── styles/                 _variaveis.scss  _mixins.scss
├── styles.scss             (global)
└── app/
    ├── app.ts / app.html / app.scss / app.config.ts / app.routes.ts
    ├── core/
    │   ├── layout/         cabecalho/  rodape/
    │   └── services/       contato-service.ts  cep-service.ts
    ├── shared/
    │   ├── shared-module.ts
    │   ├── material/       material-module.ts
    │   ├── components/     card-contato/  titulo-pagina/
    │   ├── directives/     destaque.ts
    │   ├── pipes/          cep-pipe.ts  telefone-pipe.ts
    │   └── models/         contato.ts  endereco.ts
    └── features/
        ├── inicio/  fale-conosco/  nao-encontrada/
        └── contatos/
            ├── contatos-module.ts  contatos-routing-module.ts
            └── lista-contatos/  detalhe-contato/  form-contato/
```

> 🎙️ Fala: "Repare em dois tipos de arquivo novos:
> - `@NgModule` (**módulos**): o `shared-module`, o `material-module` e o `contatos-module`. O `contatos-module` ganhou um arquivo de **rotas próprio** por causa do `--routing`.
> - `@Service()`: os **services**. O Angular cria uma única instância de cada um e a entrega por **injeção de dependência**."

## 1.6 Commit da estrutura e cópia do gabarito (0:18 – 0:20)

```powershell
git add --all
git commit --message "chore: cria projeto angular com scss, material e estrutura core/shared/features"
```

**Copiar o código com TODOs para dentro do projeto**, substituindo os arquivos gerados:

```powershell
Copy-Item -Path ..\..\Gabarito_Aula_Gravada_Revisao_Geral\1-codigo-com-todos\src\* -Destination .\src -Recurse -Force
ng serve --open
```

> 🎙️ Fala: "Agora entra o código. Os arquivos estão no lugar e o app **já roda**, mas várias partes estão marcadas com `TODO`. Vamos resolver uma a uma." Abra a aba **TODO** do VS Code, ou procure `TODO` com **Ctrl + Shift + F**, para mostrar a lista.

Nesse momento o app mostra o cabeçalho, a página inicial com valores fixos e a lista de tópicos.

---

# PARTE 2: Código guiado pelos TODOs (0:20 → 0:55)

> Em cada TODO: (1) leia o comentário do arquivo com a turma, (2) escreva o código, (3) salve e mostre o efeito no navegador.

## Bloco A: TypeScript, services, DI, RxJS e API (0:20 – 0:26)

### TODO 1: union type (TypeScript)
**Arquivo:** `src/app/shared/models/contato.ts`

```ts
export type Categoria = 'familia' | 'trabalho' | 'amigos';
```

**Demonstração:** no `contato-service.ts`, troque uma categoria para `'familha'`. O VS Code sublinha o erro em vermelho e o terminal do `ng serve` também acusa. Desfaça a troca.

> 🎙️ Fala: "Interface e type **não viram JavaScript**. Eles existem para o TypeScript nos proteger **antes** de rodar. Vejam também o `NovoContato = Omit<Contato, ...>`: é um *utility type* que reaproveita a interface sem três campos."

### TODO 2: Observables públicos do service (RxJS)
**Arquivo:** `src/app/core/services/contato-service.ts`

Troque as três linhas provisórias por:

```ts
readonly contatos$: Observable<Contato[]> = this.contatosSubject.asObservable();

readonly total$: Observable<number> = this.contatos$.pipe(map((lista) => lista.length));

readonly totalFavoritos$: Observable<number> = this.contatos$.pipe(
  map((lista) => lista.filter((contato) => contato.favorito).length),
);
```

Remova o `of` do import do `rxjs` (o VS Code avisa que ele não é mais usado).

> 🎙️ Fala: "**Observable** é um fluxo de valores no tempo. O **BehaviorSubject** guarda o valor atual e avisa quem estiver inscrito sempre que ele muda. Ele é `private` para só o service poder alterar a lista. Para fora, expomos a versão **somente leitura** com `asObservable()`. O `pipe(map(...))` transforma cada valor que passa pelo fluxo."

### TODO 3: alterar o estado com imutabilidade
**Mesmo arquivo.**

```ts
adicionar(dados: NovoContato): void {
  const novo: Contato = {
    ...dados,
    id: Date.now(),
    favorito: false,
    criadoEm: new Date(),
  };
  this.contatosSubject.next([...this.contatosSubject.value, novo]);
}

alternarFavorito(id: number): void {
  const listaAtualizada = this.contatosSubject.value.map((contato) =>
    contato.id === id ? { ...contato, favorito: !contato.favorito } : contato,
  );
  this.contatosSubject.next(listaAtualizada);
}

remover(id: number): void {
  this.contatosSubject.next(this.contatosSubject.value.filter((contato) => contato.id !== id));
}
```

> 🎙️ Fala: "Nunca usamos `push` ou `splice`. Sempre criamos um **novo array** e chamamos `.next()`. Assim todos os inscritos são avisados."

### TODO 4: consumir API com HttpClient
**Parte 1. Arquivo:** `src/app/core/services/cep-service.ts`

```ts
import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../../shared/models/endereco';

@Service()
export class CepService {
  private readonly http = inject(HttpClient);
  private readonly urlBase = 'https://viacep.com.br/ws';

  buscar(cep: string): Observable<Endereco> {
    const somenteNumeros = cep.replace(/\D/g, '');
    return this.http.get<Endereco>(`${this.urlBase}/${somenteNumeros}/json/`);
  }
  // (mantenha o exemplo de RapidAPI comentado logo abaixo)
}
```

**Parte 2. Arquivo:** `src/app/app.config.ts`

```ts
import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
};
```

> 🎙️ Fala: "`inject(HttpClient)` é **injeção de dependência**: o service **pede** o HttpClient em vez de criá-lo. O `provideHttpClient()` é quem registra o HttpClient no app. Sem ele, aparece o erro *No provider for HttpClient*. O `get` devolve um Observable, e a requisição **só acontece quando alguém der `subscribe`**. Para APIs com chave, como as da **RapidAPI**, a chave vai nos `headers`. Mostrem o exemplo comentado no fim do arquivo."

Abra `https://viacep.com.br/ws/88010000/json/` numa aba do navegador para mostrar o JSON que a API devolve.

## Bloco B: rotas, módulos e cabeçalho reativo (0:26 – 0:31)

### TODO 5: rotas com lazy loading
**Arquivo:** `src/app/app.routes.ts`

```ts
export const routes: Routes = [
  { path: '', component: Inicio, title: 'Início | Agenda SENAI' },
  {
    path: 'contatos',
    loadChildren: () =>
      import('./features/contatos/contatos-module').then((m) => m.ContatosModule),
  },
  {
    path: 'fale-conosco',
    loadComponent: () =>
      import('./features/fale-conosco/fale-conosco').then((m) => m.FaleConosco),
    title: 'Fale conosco | Agenda SENAI',
  },
  { path: '**', component: NaoEncontrada, title: 'Página não encontrada | Agenda SENAI' },
];
```

**Teste:** acesse `http://localhost:4200/qualquer-coisa` para ver a página 404.

### TODO 6: rotas filhas dentro do módulo
**Arquivo:** `src/app/features/contatos/contatos-routing-module.ts`

```ts
const routes: Routes = [
  { path: '', component: ListaContatos, title: 'Contatos | Agenda SENAI' },
  { path: 'novo', component: FormContato, title: 'Novo contato | Agenda SENAI' },
  { path: ':id', component: DetalheContato, title: 'Detalhe do contato | Agenda SENAI' },
];
```

> 🎙️ Fala, com `contatos-module.ts` aberto: "Este é um **módulo de funcionalidade**. Ele importa o `ContatosRoutingModule`, que usa `RouterModule.forChild(routes)`. O app principal carrega o módulo com `loadChildren`: isso é **lazy loading**. O código dos contatos só é baixado quando o usuário entra em `/contatos`." Abra também o `shared-module.ts` e o `material-module.ts`: "Esses são os **módulos compartilhados**. Tudo que está em `exports` chega a quem importar o módulo. Por isso as páginas só precisam de `imports: [SharedModule]`."

Mostre no navegador: **F12 → Network → JS**, depois clique em *Contatos*. Um arquivo `chunk-...js` novo é baixado nesse momento.

### TODO 7: injeção de dependência e estado do menu
**Arquivo:** `src/app/core/layout/cabecalho/cabecalho.ts` (dentro da classe, depois de `links`)

```ts
private readonly contatoService = inject(ContatoService);
readonly total$ = this.contatoService.total$;

readonly menuAberto = signal(false);

alternarMenu(): void {
  this.menuAberto.update((aberto) => !aberto);
}

fecharMenu(): void {
  this.menuAberto.set(false);
}
```

### TODO 8: event binding, class binding, @for, routerLinkActive e async pipe
**Arquivo:** `src/app/core/layout/cabecalho/cabecalho.html`. Substitua tudo depois de `<span class="espaco"></span>` por:

```html
<button mat-icon-button type="button" class="botao-menu" (click)="alternarMenu()" aria-label="Abrir menu">
  <mat-icon>{{ menuAberto() ? 'close' : 'menu' }}</mat-icon>
</button>

<nav class="menu" [class.aberto]="menuAberto()">
  @for (link of links; track link.rota) {
    <a
      mat-button
      [routerLink]="link.rota"
      routerLinkActive="ativo"
      [routerLinkActiveOptions]="{ exact: true }"
      (click)="fecharMenu()"
    >
      <mat-icon>{{ link.icone }}</mat-icon>
      {{ link.texto }}
    </a>
  }

  <span class="total" matTooltip="Total de contatos">
    <mat-icon [matBadge]="total$ | async" matBadgeSize="small" aria-hidden="false">people</mat-icon>
  </span>
</nav>
</mat-toolbar>
```

> 🎙️ Fala: "Este é um **componente reativo**. Ele não pergunta quantos contatos existem: ele se **inscreve** no `total$` usando o `async` pipe, que faz o `subscribe` e o `unsubscribe` sozinho. Quando a lista mudar em qualquer página, o número do cabeçalho muda junto." Para mostrar o menu "hambúrguer", aperte **F12 → Ctrl + Shift + M** e escolha uma tela de celular. O CSS desse menu está pronto em `cabecalho.scss` e usa uma media query "na mão".

## Bloco C: componentes, bindings, debug, input e output (0:31 – 0:38)

### TODO 9: service, signal, computed e debug
**Arquivo:** `src/app/features/inicio/inicio.ts` (dentro da classe)

```ts
private readonly contatoService = inject(ContatoService);
readonly total$ = this.contatoService.total$;
readonly totalFavoritos$ = this.contatoService.totalFavoritos$;

readonly curtidas = signal(0);
readonly mensagemCurtidas = computed(() =>
  this.curtidas() === 0 ? 'Seja o primeiro a curtir!' : `${this.curtidas()} curtida(s)`,
);

curtir(): void {
  this.curtidas.update((valorAtual) => valorAtual + 1);
  console.log('[Inicio] curtidas =', this.curtidas());
  debugger;
}
```

### TODO 10: interpolação, property binding, two-way binding, event binding e @if
**Arquivo:** `src/app/features/inicio/inicio.html`. Substitua as seções `.capa` e `.painel` por:

```html
<section class="capa">
  <img [src]="imagemCapa" alt="Mesa de trabalho com notebook" />
  <div class="capa-texto">
    <h2>Olá, {{ nomeVisitante || 'visitante' }}!</h2>
    <p>
      Sua agenda tem <strong>{{ total$ | async }}</strong> contatos e
      <strong>{{ totalFavoritos$ | async }}</strong> favoritos.
    </p>
  </div>
</section>

<section class="painel">
  <mat-form-field appearance="outline">
    <mat-label>Seu nome</mat-label>
    <input matInput [(ngModel)]="nomeVisitante" placeholder="Digite seu nome" />
  </mat-form-field>

  <button mat-flat-button type="button" (click)="curtir()">
    <mat-icon>thumb_up</mat-icon> Curtir
  </button>

  <span class="curtidas" [class.muitas]="curtidas() >= 5">{{ mensagemCurtidas() }}</span>

  @if (curtidas() >= 5) {
    <span class="festa">🎉 A turma curtiu!</span>
  }
</section>
```

> 🎙️ Fala: os quatro tipos de binding.
> - `{{ }}` **interpolação**: TS → tela, como texto.
> - `[src]` **property binding**: TS → propriedade do elemento.
> - `(click)` **event binding**: tela → TS.
> - `[(ngModel)]` **two-way binding**: os dois sentidos ao mesmo tempo. Digite o nome e veja o "Olá" mudar.
>
> Depois as duas famílias de diretiva:
> - **Estruturais** (`@if`, `@for`, `@switch`) **criam ou removem** elementos.
> - **De atributo** (`[class.muitas]`, `ngModel`, `appDestaque`) **mudam** um elemento que já existe.

**🐞 Depuração (2 min):**
1. **F12 → Console:** clique em *Curtir* e veja o `console.log`.
2. Com o F12 aberto, clique de novo. O `debugger;` **pausa** o código. Passe o mouse sobre `this.curtidas` e use **F10** para avançar linha a linha. Depois **comente** o `debugger;`.
3. **F12 → Sources → Ctrl + P → `inicio.ts`:** clique no número de uma linha para criar um *breakpoint* sem mexer no código.
4. **Angular DevTools → aba Angular → Components:** selecione `app-inicio` e veja o signal `curtidas` mudar a cada clique.
5. Mostre um erro de propósito: escreva `{{ curtidas }}` (sem os parênteses) e leia a mensagem no terminal do `ng serve`. Desfaça.

### TODO 11: input e output (componente filho)
**Arquivo:** `src/app/shared/components/card-contato/card-contato.ts`

Imports no topo do arquivo:

```ts
import { TitleCasePipe } from '@angular/common';
import { TelefonePipe } from '../../pipes/telefone-pipe';
import { Destaque } from '../../directives/destaque';
```

No `@Component`:

```ts
imports: [MaterialModule, RouterLink, TitleCasePipe, TelefonePipe, Destaque],
```

Na classe:

```ts
readonly contato = input.required<Contato>();
readonly favoritar = output<number>();
readonly remover = output<number>();

readonly foto = computed(
  () => this.contato().foto || `https://i.pravatar.cc/300?u=${this.contato().email}`,
);
```

> 🎙️ Fala: "**Input**: o dado **desce** do pai para o filho. **Output**: o evento **sobe** do filho para o pai. O card **não conhece** o service. Ele só mostra os dados e avisa o que aconteceu. Em projetos mais antigos vocês vão ver a mesma ideia escrita com `@Input()` e `@Output() ... = new EventEmitter()`."

### TODO 12: template do card
**Arquivo:** `src/app/shared/components/card-contato/card-contato.html`. Substitua tudo por:

```html
<mat-card class="card" [class.favorito]="contato().favorito" appDestaque="#e91e63">
  <img mat-card-image [src]="foto()" [alt]="'Foto de ' + contato().nome" />

  <mat-card-header>
    <mat-card-title>{{ contato().nome }}</mat-card-title>
    <mat-card-subtitle class="categoria">
      @switch (contato().categoria) {
        @case ('familia') {
          <mat-icon>family_restroom</mat-icon>
        }
        @case ('trabalho') {
          <mat-icon>work</mat-icon>
        }
        @default {
          <mat-icon>diversity_3</mat-icon>
        }
      }
      {{ contato().categoria | titlecase }}
    </mat-card-subtitle>
  </mat-card-header>

  <mat-card-content>
    <p><mat-icon>call</mat-icon> {{ contato().telefone | telefone }}</p>
    <p><mat-icon>mail</mat-icon> {{ contato().email }}</p>
  </mat-card-content>

  <mat-card-actions>
    <button
      mat-icon-button
      type="button"
      (click)="favoritar.emit(contato().id)"
      [matTooltip]="contato().favorito ? 'Desfavoritar' : 'Favoritar'"
    >
      <mat-icon>{{ contato().favorito ? 'star' : 'star_border' }}</mat-icon>
    </button>

    <a mat-button [routerLink]="['/contatos', contato().id]">Detalhes</a>

    <button mat-icon-button type="button" (click)="remover.emit(contato().id)" matTooltip="Remover">
      <mat-icon>delete</mat-icon>
    </button>
  </mat-card-actions>
</mat-card>
```

> Os cards ainda **não aparecem**: a lista vai usá-los no TODO 16.

## Bloco D: pipe e diretiva personalizados (0:38 – 0:41)

### TODO 13: pipe personalizado
**Arquivo:** `src/app/shared/pipes/cep-pipe.ts`. Mostre antes o `telefone-pipe.ts`, que está pronto, como modelo.

```ts
transform(valor: string | null | undefined): string {
  const numeros = (valor ?? '').replace(/\D/g, '');
  if (numeros.length !== 8) {
    return valor ?? '';
  }
  return `${numeros.slice(0, 5)}-${numeros.slice(5)}`;
}
```

> 🎙️ Fala: "O pipe muda **só a forma de mostrar** o valor. O dado guardado continua `88010000`." Ele vai aparecer na página de detalhe (TODO 18).

### TODO 14: diretiva de atributo com @HostListener
**Arquivo:** `src/app/shared/directives/destaque.ts` (dentro da classe, depois do `constructor`)

```ts
@HostListener('mouseenter')
aoEntrar(): void {
  const cor = this.appDestaque() || '#1565c0';
  this.elemento.nativeElement.style.transform = 'translateY(-4px)';
  this.elemento.nativeElement.style.boxShadow = `0 10px 20px ${cor}55`;
}

@HostListener('mouseleave')
aoSair(): void {
  this.elemento.nativeElement.style.transform = '';
  this.elemento.nativeElement.style.boxShadow = '';
}
```

**Teste:** passe o mouse sobre os tópicos da página inicial. Eles usam `<li appDestaque>`.

## Bloco E: lista reativa, grid e object-fit (0:41 – 0:46)

### TODO 15: busca reativa com RxJS e métodos dos outputs
**Arquivo:** `src/app/features/contatos/lista-contatos/lista-contatos.ts`. Troque a linha provisória do `contatosFiltrados$` por:

```ts
private readonly termo$ = this.busca.valueChanges.pipe(
  debounceTime(300),
  startWith(''),
  map((texto) => texto.trim().toLowerCase()),
  distinctUntilChanged(),
);

readonly contatosFiltrados$ = combineLatest([this.contatoService.contatos$, this.termo$]).pipe(
  map(([lista, termo]) =>
    lista.filter(
      (contato) =>
        contato.nome.toLowerCase().includes(termo) || contato.email.toLowerCase().includes(termo),
    ),
  ),
);

aoFavoritar(id: number): void {
  this.contatoService.alternarFavorito(id);
}

aoRemover(id: number): void {
  this.contatoService.remover(id);
  this.snackBar.open('Contato removido.', 'OK', { duration: 2500 });
}
```

> 🎙️ Fala: "`valueChanges` emite a cada tecla. O `debounceTime` espera a pessoa parar de digitar, o `distinctUntilChanged` ignora termos repetidos e o `combineLatest` junta **dois** fluxos: sempre que a lista **ou** o termo mudar, o filtro roda de novo."

### TODO 16: async pipe, @for/@empty, input e output
**Arquivo:** `src/app/features/contatos/lista-contatos/lista-contatos.html`. Substitua o comentário do TODO por:

```html
@if (contatosFiltrados$ | async; as contatos) {
  <p class="resumo">{{ contatos.length }} contato(s) encontrado(s)</p>

  <section class="grade">
    @for (contato of contatos; track contato.id) {
      <app-card-contato
        [contato]="contato"
        (favoritar)="aoFavoritar($event)"
        (remover)="aoRemover($event)"
      />
    } @empty {
      <p class="vazio">Nenhum contato encontrado.</p>
    }
  </section>
}
```

**Teste ao vivo:**
- Clique na ⭐ de um card: o número de favoritos muda na página inicial.
- Remova um contato: o *badge* do cabeçalho diminui. Isso é o **componente reativo** funcionando.
- Digite "ana" na busca.
- Passe o mouse num card: é a diretiva `appDestaque` com a cor rosa.

### TODO 17: grid responsivo e object-fit
**Parte 1. Arquivo:** `src/app/features/contatos/lista-contatos/lista-contatos.scss`

```scss
.grade {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: $espaco * 1.5;

  @include responsivo(celular) {
    grid-template-columns: 1fr;
    gap: $espaco;
  }
}
```

**Parte 2. Arquivo:** `src/app/shared/components/card-contato/card-contato.scss`. Mostre antes as fotos **distorcidas** e depois adicione dentro de `img { }`:

```scss
object-fit: cover;
object-position: center top;
```

> 🎙️ Fala, com `src/styles/_mixins.scss` e `_variaveis.scss` abertos:
> - "O **mixin** `responsivo` é uma media query reutilizável. O `@content` recebe o CSS que escrevemos entre as chaves do `@include`."
> - "O mapa `$breakpoints` concentra os tamanhos de tela num lugar só."
> - "No `styles.scss`, a classe `.container` usa **max-width**: em telas grandes o conteúdo não passa de 1100px."
>
> Teste com **F12 → Ctrl + Shift + M**, mudando a largura da tela: 3 colunas, depois 2, depois 1.

## Bloco F: rota com parâmetro, formulários e API (0:46 – 0:55)

### TODO 18: ler o :id da URL
**Arquivo:** `src/app/features/contatos/detalhe-contato/detalhe-contato.ts` (dentro da classe)

```ts
private readonly rota = inject(ActivatedRoute);
private readonly contatoService = inject(ContatoService);

readonly contato$: Observable<Contato | undefined> = this.rota.paramMap.pipe(
  map((parametros) => Number(parametros.get('id'))),
  switchMap((id) => this.contatoService.buscarPorId(id)),
);
```

Remova o `of` do import do `rxjs`.

**Teste:** clique em *Detalhes* no card da **Ana**. O CEP aparece como `88010-000` (pipe do TODO 13) e a data aparece em português (`LOCALE_ID` do TODO 4). Depois digite `/contatos/999` na barra de endereço.

> 🎙️ Fala: "O `paramMap` é um Observable, porque o id pode mudar sem sair da página. O `switchMap` **troca** o fluxo do id pelo fluxo do contato."

### TODO 19: formulário reativo com validators
**Arquivo:** `src/app/features/contatos/form-contato/form-contato.ts`. Substitua o `form` por:

```ts
readonly form = this.formBuilder.group({
  nome: ['', [Validators.required, Validators.minLength(3)]],
  email: ['', [Validators.required, Validators.email]],
  telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
  categoria: this.formBuilder.control<Categoria>('amigos', Validators.required),
  foto: [''],
  endereco: this.formBuilder.group({
    cep: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
    logradouro: ['', Validators.required],
    numero: [''],
    bairro: [''],
    localidade: ['', Validators.required],
    uf: ['', Validators.required],
  }),
});
```

> 🎙️ Fala: "No formulário **reativo**, a estrutura e as regras ficam no **TypeScript**. O HTML só se liga a elas com `[formGroup]`, `formControlName` e `formGroupName`. Para o grupo `endereco`, olhem o `formGroupName="endereco"` no HTML."

### TODO 20: consumir a API e salvar
**Mesmo arquivo.**

```ts
buscarCep(): void {
  const cep = this.form.controls.endereco.controls.cep.value.replace(/\D/g, '');
  this.erroCep.set('');
  if (cep.length !== 8) {
    return;
  }

  this.buscandoCep.set(true);
  this.cepService.buscar(cep).subscribe({
    next: (endereco) => {
      this.buscandoCep.set(false);
      if (endereco.erro) {
        this.erroCep.set('CEP não encontrado.');
        return;
      }
      this.form.controls.endereco.patchValue({
        logradouro: endereco.logradouro,
        bairro: endereco.bairro,
        localidade: endereco.localidade,
        uf: endereco.uf,
      });
    },
    error: () => {
      this.buscandoCep.set(false);
      this.erroCep.set('Não foi possível consultar o viaCEP. Verifique a internet.');
    },
  });
}

salvar(): void {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }
  const dados = this.form.getRawValue();
  this.contatoService.adicionar({ ...dados, foto: dados.foto || undefined });
  this.snackBar.open(`${dados.nome} cadastrado com sucesso!`, 'OK', { duration: 3000 });
  this.router.navigate(['/contatos']);
}
```

### TODO 21: campo CEP com (blur), spinner e erro
**Arquivo:** `src/app/features/contatos/form-contato/form-contato.html`. Substitua o `mat-form-field` do CEP por:

```html
<mat-form-field appearance="outline">
  <mat-label>CEP (só números)</mat-label>
  <mat-icon matPrefix>location_on</mat-icon>
  <input matInput formControlName="cep" maxlength="8" (blur)="buscarCep()" />
  @if (buscandoCep()) {
    <mat-spinner matSuffix diameter="20" />
  }
  <mat-hint>Ao sair do campo, buscamos o endereço no viaCEP</mat-hint>
  <mat-error>Digite os 8 números do CEP.</mat-error>
</mat-form-field>
@if (erroCep()) {
  <p class="erro-cep">{{ erroCep() }}</p>
}
```

**Teste completo:**
1. Clique em *Salvar* com tudo vazio. Os erros aparecem por causa do `markAllAsTouched`.
2. Preencha nome, e-mail e telefone `48999990000`. Veja a **prévia** formatada pelo pipe no `mat-hint`.
3. CEP `88010000`, depois saia do campo: o endereço é preenchido pela **API**. Mostre a requisição em **F12 → Network → Fetch/XHR**.
4. CEP `99999999`: aparece "CEP não encontrado".
5. Salve. O app mostra o *snackbar*, **navega** para `/contatos` e o novo card aparece. O *badge* do cabeçalho sobe.

### TODO 22: formulário template-driven
**Arquivo:** `src/app/features/fale-conosco/fale-conosco.html`

**Parte 1.** No lugar do comentário do e-mail:

```html
<mat-form-field appearance="outline">
  <mat-label>E-mail</mat-label>
  <input matInput type="email" name="email" [(ngModel)]="mensagem.email" #email="ngModel" required email />
  @if (email.hasError('required')) {
    <mat-error>O e-mail é obrigatório.</mat-error>
  } @else if (email.hasError('email')) {
    <mat-error>Digite um e-mail válido.</mat-error>
  }
</mat-form-field>
```

**Parte 2.** No botão:

```html
<button mat-flat-button type="submit" [disabled]="formulario.invalid">
```

**Parte 3.** No lugar do último comentário:

```html
@if (enviada(); as ultima) {
  <aside class="resumo">
    <h3>Última mensagem enviada</h3>
    <p><strong>{{ ultima.nome }}</strong> ({{ ultima.email }})</p>
    <p>{{ ultima.assunto | uppercase }}</p>
    <p>"{{ ultima.texto }}"</p>
  </aside>
}
```

> 🎙️ Fala, comparando os dois formulários lado a lado:
>
> | Template-driven (Fale conosco) | Reativo (Novo contato) |
> |---|---|
> | `FormsModule` | `ReactiveFormsModule` |
> | Regras no **HTML** (`required`, `email`) | Regras no **TS** (`Validators`) |
> | `[(ngModel)]` + `name` | `[formGroup]` + `formControlName` |
> | `#form="ngForm"` | `this.form` |
> | Bom para formulários simples | Bom para formulários grandes, dinâmicos e testáveis |

---

# PARTE 3: Build e Git (0:55 → 1:00)

## 3.1 Build de produção (0:55 – 0:56)

Pare o servidor (**Ctrl + C**) e rode:

```powershell
ng build
```

> 🎙️ Fala: "Repare em duas listas na saída:
> - **Initial chunk files**: o que o navegador baixa logo ao abrir o app.
> - **Lazy chunk files**: `contatos-module` e `fale-conosco`, baixados só quando o usuário entra nessas rotas. Esse é o resultado do `loadChildren` e do `loadComponent`.
>
> O build final fica em `dist/projeto-gravado/browser`."

## 3.2 Commit, push, Pull Request e merge (0:56 – 0:58)

```powershell
git status
git add --all
git commit --message "feat(agenda): componentes, services, rxjs, rotas, formularios, viacep, pipes, diretiva e material"
git push --set-upstream origin feature/agenda-contatos
```

**Pull Request** no GitHub: abra o repositório no navegador e clique em **Compare & pull request**. Configure **base: `develop`** ← **compare: `feature/agenda-contatos`**, escreva uma descrição e peça revisão a um colega. Esse é o fluxo **colaborativo**: ninguém envia código direto para a `develop` sem revisão.

Depois do merge pelo GitHub, atualize a máquina e apague a branch local:

```powershell
git switch develop
git pull
git branch --delete feature/agenda-contatos
```

**Release** (opcional, mostre se der tempo): levar a `develop` para a `main` com uma versão.

```powershell
git switch main
git merge --no-ff develop --message "release: v1.0.0"
git tag --annotate v1.0.0 --message "Agenda SENAI v1.0.0"
git push origin main --follow-tags
```

Abra o **Git Graph** no VS Code para mostrar o desenho das branches.

## 3.3 Encerramento (0:58 – 1:00)

Volte ao **mapa de tópicos** do início deste roteiro e passe rapidamente por cada linha, apontando no app onde aquilo aparece.

> 🎙️ Fala: "Num projeto só, usamos componentes, input e output, bindings, diretivas, services, injeção de dependência, Observables, rotas com lazy loading, formulários dos dois tipos, API, pipes e diretivas personalizados, módulos, SASS, responsividade e Angular Material. Tudo isso ficou versionado com GitFlow. O código completo está no repositório."

---

## Apêndice A: problemas comuns durante a gravação

| Sintoma | Causa | Solução |
|---|---|---|
| `ng new` diz *A merge conflicted on path "/README.md"* | O README do GitHub ainda está na pasta | `Remove-Item -Path README.md` e rode o `ng new` de novo |
| `Can't find stylesheet to import` em `@use 'variaveis'` | Faltou o `includePaths` | Rode o `ng config ... includePaths` do passo 1.4 e **reinicie** o `ng serve` |
| `ng config ... includePaths` dá erro de JSON | Aluno usando PowerShell 7 (`pwsh`) em vez do Windows PowerShell 5.1 | No PowerShell 7, use as aspas sem barra: `'["src/styles"]'` |
| `NullInjectorError: No provider for HttpClient` | Faltou o `provideHttpClient()` | TODO 4, parte 2 (`app.config.ts`) |
| `'app-card-contato' is not a known element` | O card não está no `SharedModule` ou a página não importa o `SharedModule` | Confira o `imports: [SharedModule]` |
| `Can't bind to 'contato'` | O TODO 11 não foi feito | Crie o `input.required<Contato>()` |
| Ícones aparecem como texto (`home`, `star`) | Sem internet: a fonte Material Symbols vem do Google Fonts | Verifique a conexão |
| `/contatos/novo` abre o **detalhe** | A rota `':id'` está antes de `'novo'` | Inverta a ordem (TODO 6) |
| Erro `NG0` no console | Abra a mensagem: ela traz um link para a documentação do erro | Use isso como exemplo de debug |
| Aviso *bundle initial exceeded maximum budget* | Faltou ajustar o budget | Rode os dois `ng config ... budgets` do passo 1.4 |

## Apêndice B: comandos usados (todos por extenso)

| Comando | Para quê |
|---|---|
| `node --version` / `npm --version` / `ng version` | Conferir o ambiente |
| `npm install --global @angular/cli` | Instalar a Angular CLI |
| `ng new nome --directory=. --style=scss ...` | Criar o projeto na pasta atual |
| `ng serve --open` | Servidor de desenvolvimento + abrir o navegador |
| `ng build` | Build de produção (mostra initial e lazy chunks) |
| `ng add @angular/material --skip-confirmation` | Instalar **e configurar** uma biblioteca |
| `npm view @angular/material version` | Ver a versão publicada de um pacote |
| `ng config caminho.no.angular.json valor` | Editar o `angular.json` pelo terminal |
| `ng generate component caminho/nome` | Componente (`.ts`, `.html`, `.scss`) |
| `ng generate service caminho/nome` | Service (`@Service()`) |
| `ng generate module caminho/nome --routing` | NgModule + módulo de rotas |
| `ng generate pipe caminho/nome` | Pipe personalizado |
| `ng generate directive caminho/nome` | Diretiva personalizada |
| `ng generate interface caminho/nome` | Interface TypeScript |
| `ng generate component caminho/nome --dry-run` | Simular sem criar arquivos |
| `git switch --create nome` | Criar uma branch e entrar nela |
| `git push --set-upstream origin nome` | Primeiro push de uma branch |
| `git add --all` / `git commit --message "..."` | Versionar |
| `git merge --no-ff branch` | Merge preservando o histórico da branch (GitFlow) |
| `git tag --annotate v1.0.0 --message "..."` | Marcar uma versão |
| `git branch --delete nome` | Apagar uma branch local já integrada |
