console.log();
console.log('+'.repeat(15) + ' EXEMPLO CLASSES ' + '+'.repeat(15));
console.log();

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    saudacao() {
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}

const aluno = new Pessoa('John Doe');

aluno.saudacao()


console.log();
console.log('+'.repeat(15) + ' Atividade 1 ' + '+'.repeat(15));
console.log();

class CarrinhoDeCompras {
    itens = [];
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    adicionarItem(nome, preco) {
        this.itens.push({ nome, preco })

    }
    listarItens() {
        return this.itens;
    }
    calcularTotal() {
        let soma = 0;
        for (const item of this.itens) {
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

console.log();
console.log('+'.repeat(15) + ' EXEMPLO HERANÇA ' + '+'.repeat(15));
console.log();

class Professor extends Pessoa {
    materia;
    constructor(nome, idade, materia) {
        super(nome, idade);
        this.materia = materia;

    }

}

let profe = new Professor('Girafales', 55, 'Frontend');
profe.saudacao()

console.log();
console.log('+'.repeat(15) + ' Atividade 2 ' + '+'.repeat(15));
console.log();


class CarrinhoVip extends CarrinhoDeCompras{
    desconto = 0.9;
    constructor(nome, preco,desconto){
        super(nome,preco)
        this.desconto;
    }
    calcularTotalComDesconto(){
        return this.calcularTotal() * this.desconto;
        
    }
}
let produtoVip = new CarrinhoVip();

produtoVip.adicionarItem('Teclado', 100);
produtoVip.adicionarItem('Monitor', 500)

console.log(produtoVip.listarItens());
console.log(produtoVip.calcularTotal())
console.log(produtoVip.calcularTotalComDesconto())