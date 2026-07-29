import { Pessoa } from './Aula2.mjs';

console.log()
console.log('+'.repeat(15), 'Exemplo de modulos IMPORT/EXPORT', '+'.repeat(15))
console.log();


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