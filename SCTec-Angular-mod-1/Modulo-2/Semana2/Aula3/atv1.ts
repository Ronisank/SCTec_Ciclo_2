// Crie a interface LivroInterface com as seguintes características:
// Atributos: titulo, autor e anoPublicação: todos textos
// Métodos:
// apresentarInfos(): Apresenta no console as informações de título, autor e anoPublicação;

// Crie a classe Livro e implemente a interface LivroInterface.
// Adicione na classe Livro o atributo disponivel (boolean, privado) e os métodos:
// getDisponibilidade(): que deverá retornar a disponibilidade do livro; e
// setDisponibilidade(disponibilidade): que deverá alterar a disponibilidade do livro

// Crie uma instância atribuindo as informações de titulo, autor, anoPublicacao e disponivel no momento criação do objeto (via construtor) e depois altere a disponibilidade do objeto.
interface LivroInterface {
  titulo: string;
  autor: string;
  anoPublicacao: string;

  apresentarInfos(): void;
}

class Livro implements LivroInterface {
  titulo: string;
  autor: string;
  anoPublicacao: string;
  private disponivel: boolean;

  constructor(
    titulo: string,
    autor: string,
    anoPublicacao: string,
    disponivel: boolean,
  ) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.disponivel = disponivel;
  }

  getDisponibilidade(): boolean {
    return this.disponivel;
  }
  setDisponibilidade(disponivel:boolean): void {
    this.disponivel = disponivel;
  }
  apresentarInfos(): void {
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Ano Publicação: ${this.anoPublicacao}`);
  }
}

const livro = new Livro("Livro 1", "Autor 1", "1999", true);

livro.apresentarInfos();
console.log("Disponibilidade: ", livro.getDisponibilidade());
livro.setDisponibilidade(false);
console.log("Disponibilidade: ", livro.getDisponibilidade());
livro.setDisponibilidade(true);
console.log("Disponibilidade: ", livro.getDisponibilidade());