export class Pessoa {
    nome;
    #idade; //=> Encapsulamento: é conceito no qual cada objeto pode controlar seus métodos e atributos sem que estes sofram alterações indevidas de meios externos


    constructor(nome, idade) {
        this.nome = nome;
        this.#idade = idade;
    }
    saudacao() {
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.#idade} anos`)
    }
    getIdade() {
        return this.#idade;
    }
    setIdade(valor) {
        this.#idade = valor;
    }
}
export class CarrinhoDeCompras {
    #itens = [];

    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }//set de itens
    adicionarItem(nome, preco) {
        this.#itens.push({ nome, preco })

    }// get de itens
    listarItens() {
        return this.#itens;
    }
    calcularTotal() {
        let soma = 0;
        for (const item of this.#itens) {
            soma += item.preco;
        }
        return soma;
    }
}