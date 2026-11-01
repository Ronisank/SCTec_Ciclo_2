const prompt = require("prompt-sync")();

function criarSistemaCurtidas() {
  let curtidas = 0;

  return function (acao) {
    switch (acao) {
      case "curtir":
        curtidas++;
        console.log(`❤️ Curtidas: ${curtidas}`);
        break;

      case "descurtir":
        if (curtidas > 0) {
          curtidas--;
          console.log(`❤️ Curtidas: ${curtidas}`);
        } else {
          console.log("Não existem curtidas para remover.");
        }
        break;

      case "consultar":
        console.log(`Total de curtidas: ${curtidas} ❤️`);
        break;

      case "reiniciar":
        curtidas = 0;
        console.log("❤️ Curtidas reiniciadas!");
        break;

      default:
        console.log("Ação inválida.");
    }
  };
}

//Ou

const sistemaCurtidas = criarSistemaCurtidas();

let opcao = 0;

while (opcao !== 5) {
  console.log("\n========== POST ==========");
  console.log("1 - Curtir 👍");
  console.log("2 - Descurtir 👎");
  console.log("3 - Exibir Curtidas ❤️");
  console.log("4 - Reiniciar Curtidas 🔄");
  console.log("5 - Sair");

  opcao = Number(prompt("Escolha uma opção: "));

  switch (opcao) {
    case 1:
      sistemaCurtidas("curtir");
      break;

    case 2:
      sistemaCurtidas("descurtir");
      break;

    case 3:
      sistemaCurtidas("consultar");
      break;

    case 4:
      sistemaCurtidas("reiniciar");
      break;

    case 5:
      console.log("Programa encerrado.");
      break;

    default:
      console.log("Opção inválida.");
  }
}

//========================================================
function esperar10Segundos() {
    return new Promise((resolve) => {
        setTimeout(resolve("Dados encontrados"), 10000);
    });
}

async function carregarUsuario() {
    console.log("1 - Início");

    const dados = await esperar10Segundos();
    console.log(dados);
    console.log("2 - Usuário carregado");
}

console.log("A");

carregarUsuario();

console.log("B");
console.log("C");

const teste = () => {
    console.log("Executando");
};

teste();
//========================================
function esperar2Segundos() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
}

async function carregarUsuario() {
    console.log("1 - Início");

    await esperar2Segundos();

    console.log("2 - Usuário carregado");
}

console.log("A");

carregarUsuario();

console.log("B");