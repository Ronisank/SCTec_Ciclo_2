class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    mostrarDetalhes() {
        console.log(`Produto:${this.nome}, e seu preço é: R$ ${this.preco}`)
    }
}

class Eletronico extends Produto {
    constructor(nome, preco, garantia) {
        super(nome, preco)
        this.garantia = garantia;
    }
    mostrarDetalhes() {
        console.log(`Produto: ${this.nome}, e seu preço é: R$ ${this.preco}, a garantia do produto é de: ${this.garantia}`)

    }
}
const produto1 = new Produto("Tablet", 1890)
const produto2 = new Eletronico("Notebook", 3500, "12 meses")

function carregarProduto(id) {
    // Simulando a busca de um produto por ID
    return new Promise((resolve, reject) => {
        console.log("Carregando produto...")
        setTimeout(() => {
            if (id === 1) {
                resolve(new Produto("Smartphone", 1250.99))
            }
            {
                reject("Id não encontrado")
            }
        }, 2000)

    })
}
// carregarProduto(1).then((produto)=>{
//     console.log("Produto carregado com sucesso!")
// })
// .catch((erro) =>{
//     console.error("Erro!")
// });
const produto3 = async () => {
    try {
        const produto = await carregarProduto(1);
        const produtoJson = JSON.stringify(produto);
        console.log(produtoJson) // exibe em formato json
        console.log(produto) // exibe o objeto produto
    } catch (erro) {
        console.error("Erro ao carregar produto:", erro)
    }
}
produto3();
