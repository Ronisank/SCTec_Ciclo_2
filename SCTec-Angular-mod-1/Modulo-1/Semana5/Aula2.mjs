console.log("+".repeat(15), 'EXEMPLO ENCAPSULAMENTO', '+'.repeat(15))

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

const pessoa1 = new Pessoa('Mike Myers', 35)

console.log(pessoa1.idade);
pessoa1.saudacao()
console.log('Antes do setIdade ', pessoa1.getIdade());
pessoa1.setIdade(40);
console.log('Depois do setIdade ', pessoa1.getIdade());

console.log()
console.log("+".repeat(15), ' ATIVIDADE EXEMPLO ', '+'.repeat(15))
console.log()

class Professor extends Pessoa {
    #materias = [];

    constructor(nome, idade, materia) {
        super(nome, idade);
        this.#materias = materias;

    }
    adicionarMaterias() {
        this.#materias.push()
    }
    retornarMaterias() {
        return this.#materias;
    }

}
// let profe = new Professor('Seu Madruga', 54)




console.log()
console.log("+".repeat(15), ' ATIVIDADE 1 ', '+'.repeat(15))
console.log()

class CarrinhoDeCompras {
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

let produto = new CarrinhoDeCompras();

produto.adicionarItem('Celular', 300);
produto.adicionarItem('Tablet', 400);
produto.adicionarItem('Mouse', 40);

console.log(produto.listarItens());
console.log(produto.calcularTotal());

class CarrinhoVip extends CarrinhoDeCompras {
    #desconto = 0.9;

    constructor(nome, preco, desconto) {
        super(nome, preco)
        this.#desconto;
    }
    calcularTotalComDesconto() {
        return this.calcularTotal() * this.#desconto;

    }
    setDesconto(valor) {
        this.#desconto = valor;
    }
}
let produtoVip = new CarrinhoVip();

produtoVip.adicionarItem('Teclado', 100);
produtoVip.adicionarItem('Monitor', 500)

console.log(produtoVip.listarItens());
console.log(produtoVip.calcularTotal())
console.log(produtoVip.calcularTotalComDesconto())
produtoVip.setDesconto(0.8);
console.log(produtoVip.calcularTotalComDesconto())

console.log()
console.log("+".repeat(15), ' EXEMPLO POLIMORFISMO ', '+'.repeat(15))
console.log()



console.log()
console.log("+".repeat(15), ' ATIVIDADE 2 ', '+'.repeat(15))
console.log()

class CarrinhoPremium extends CarrinhoDeCompras {


    calcularTotal() {
        let soma = 0;
        let desconto = 0.65
        const itens = this.listarItens();
        for (const item of itens) {
            soma += item.preco;

        }
        return soma * desconto;
    }
}

let produtoPremium = new CarrinhoPremium();
produtoPremium.adicionarItem('Fone', 150);
produtoPremium.adicionarItem('Smarthwatch', 320);
console.log(produtoPremium.listarItens())
console.log(produtoPremium.calcularTotal());
