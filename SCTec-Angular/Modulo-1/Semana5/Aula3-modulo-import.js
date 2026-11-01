import promptSync from 'prompt-sync'; // como está setado para type: modules, no console quebrava por causa do require.
import { Pessoa } from './Aula3-modulo.js';
const prompt = promptSync();

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
let profe = new Professor('Girafales', 35)

profe.saudacao();

console.log('\n', "+".repeat(20), 'Import carrinho de compras', '+'.repeat(20), '\n')

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
    getDesconto() {
        let porcentagem = 100 - (this.#desconto * 100)
        return porcentagem;
    }
}
let produtoVip = new CarrinhoVip();

produtoVip.adicionarItem('Teclado', 100);
produtoVip.adicionarItem('Monitor', 500)

console.table(produtoVip.listarItens());

console.log('O valor total do carrinho: R$', produtoVip.calcularTotal());

console.log('O valor total do carrinho com desconto de ', produtoVip.getDesconto(), '%: R$', produtoVip.calcularTotalComDesconto());

produtoVip.setDesconto(0.8);

console.log('O valor total do carrinho com desconto de ', produtoVip.getDesconto(), '%: R$', produtoVip.calcularTotalComDesconto());

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

console.table(produtoPremium.listarItens());

console.log('O valor total do carrinho Premium com desconto: R$', produtoPremium.calcularTotal());
