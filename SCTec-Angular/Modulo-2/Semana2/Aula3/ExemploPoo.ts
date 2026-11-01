interface Pessoa {
  nome: string;
  saudacao(): void;
}

class Usuario implements Pessoa {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  saudacao(): void {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
}

class Matematica {
  // Método estático
  public static somar(a: number, b: number): number {
    return a + b;
  }
}

// Chamando diretamente na classe, sem 'new Matematica()'
const resultado = Matematica.somar(5, 3);
console.log(resultado); // 8


class Professor extends Usuario {
    materia: string;
    constructor(nome: string, materia: string) {
      super(nome);
        this.materia = materia;
    }
    saudacao(): void {
      console.log(`Olá, ${this.nome}`)
    }
}