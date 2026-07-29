import { Pessoa } from './Aula2.mjs';

class Professor extends Pessoa {
    #materias = [];

    constructor(nome, idade) {
        super(nome, idade);

    }
    adicionarMaterias() {
        this.#materias.push()
    }
    retornarMaterias() {
        return this.#materias;
    }

}
let profe = new Professor('girafales', 35)

profe.saudacao();