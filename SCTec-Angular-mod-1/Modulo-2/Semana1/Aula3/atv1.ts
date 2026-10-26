//* Exemplo de uso de ALIAS "type"

type Usuario = {
  id: number;
  nome: string;
  ativo: boolean;
};

const usuarios: Usuario[] = [
  { id: 1, nome: "Ana Silva", ativo: true },
  { id: 2, nome: "Carlos Souza", ativo: false },
  { id: 3, nome: "Beatriz Costa", ativo: true },
];

function buscarUsusario(listaUsuarios: Usuario[], id: number) {
  const usuario = listaUsuarios.find((index) => index.id === id);
  if (usuario) {
    let status = usuario.ativo ? "Sim" : "Não";
    console.log(`ID: ${usuario.id}\n Nome: ${usuario.nome}\n Ativo: ${status}`);
  } else {
    return console.log("Usuario não encontrado");
  }
}

buscarUsusario(usuarios, 2);
buscarUsusario(usuarios, 1);
buscarUsusario(usuarios, 3);
