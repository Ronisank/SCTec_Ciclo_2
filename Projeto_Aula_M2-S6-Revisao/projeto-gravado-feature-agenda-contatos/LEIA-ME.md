# Gabarito: aula gravada de revisão geral de Angular

## O que tem nesta pasta

| Item | Para quê |
|---|---|
| `ROTEIRO_AULA_GRAVADA.md` | O roteiro da aula de 1 hora: todos os comandos, falas sugeridas e as respostas dos 22 TODOs |
| `1-codigo-com-todos/src/` | O código que você **copia para dentro do projeto** depois de criar e estruturar tudo pelo terminal (passo 1.6 do roteiro). Ele compila e roda, mas tem trechos incompletos marcados com `TODO 1` a `TODO 22` |
| `2-projeto-completo/` | O projeto **inteiro e resolvido**: todos os TODOs prontos, `package.json`, `angular.json` (já com `includePaths` e `budgets`) e o restante da configuração. Use como consulta ou plano B durante a gravação |

## Como usar

1. Siga a **Parte 1** do roteiro no repositório `projeto-gravado\projeto-gravado`, criando tudo pelo terminal.
2. No passo 1.6, copie o código com TODOs para dentro do projeto:
   ```powershell
   Copy-Item -Path ..\..\Gabarito_Aula_Gravada_Revisao_Geral\1-codigo-com-todos\src\* -Destination .\src -Recurse -Force
   ```
3. Resolva os TODOs na ordem (1 → 22), com o `ng serve --open` rodando.
4. Se precisar da resposta de um arquivo, ela está no mesmo caminho dentro de `2-projeto-completo/src`. Lá, cada trecho resolvido está marcado com `TODO n ✅`.

## Rodar o projeto completo (para mostrar o resultado final ou conferir)

```powershell
Set-Location C:\Users\DESKTOP\Desktop\SENAI\ANGULAR\Gabarito_Aula_Gravada_Revisao_Geral\2-projeto-completo
npm install
ng serve --open
```

> A pasta `node_modules` não foi incluída (é grande e o `npm install` recria). O app precisa de internet para as fotos, as fontes de ícones e a API viaCEP.

## Testado em

Node 22.23 · npm 10.9 · Angular CLI 22.2.7 · Angular 22.2 · Angular Material 22.3.
O código completo e a versão com TODOs foram compilados com `ng build`, e todas as rotas foram abertas num navegador sem erros no console.
