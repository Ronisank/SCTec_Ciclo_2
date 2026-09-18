const cardContainer = document.querySelector('.container');
const pesquisa = document.getElementById('inputPesquisa');
const nomePokemon = document.getElementById('nomePokemon');
const idPokemon = document.getElementById('idPokemon');
const imagemPokemon = document.getElementById('imgPokemon');
const tipoPokemon = document.getElementById('tipo');
const alturaPokemon = document.getElementById('altura');
const pesoPokemon = document.getElementById('peso');
const btnPesquisa = document.querySelector('.btnPesquisa')
const btnProximo = document.querySelector('.btnPro');
const btnAnterior = document.querySelector('.btnAnt');

let idAtualPoke = 1;

function pesquisaPokemon(pokemon) {

    const buscarPokemon = async (endpoint) => {
        try {
            const resposta = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${endpoint}/`
            );

            if (!resposta.ok) {
                throw new Error(
                    `Pokémon não encontrado. Status: ${resposta.status}`
                );
            }

            const dados = await resposta.json();

            atualizarBotaoPesquisar();
            exibirPokemon(dados);
        } catch (erro) {

            console.error("Erro ao buscar o Pokémon:", erro);

            cardContainer.innerHTML = `
            <div class="containerErro">
            <img class="pokeBola" src="images/pokebola.png" alt="Imagem Pokebola"></img>
            <p class="error-msg">
            Não foi possível carregar o Pokémon.
            </p>
            <button class="btnVoltar" onclick="window.location.href='index.html'">Voltar</button>
            </div>
            `;
        }
    };
    buscarPokemon(pokemon);

}

function exibirPokemon(dados) {

    const id = dados.id;
    const nome = dados.name.toUpperCase();
    const imagem = dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    const tipo = dados.types.map(typeInfo => typeInfo.type.name).join(',').toUpperCase();
    const altura = dados.height / 10;
    const peso = dados.weight / 10;

    nomePokemon.textContent = `${nome} (#${id})`;
    imagemPokemon.src = imagem;
    tipoPokemon.textContent = `Tipo: ${tipo}`;
    alturaPokemon.textContent = `Altura: ${altura} Mts.`;
    pesoPokemon.textContent = `Peso: ${peso} Kgs.`;

    idAtualPoke = dados.id;
    atualizarNavegacaoBotoes();
    atualizarBotaoPesquisar();
}

const atualizarBotaoPesquisar = () => {
    btnPesquisa.disabled = !pesquisa.value.trim();
};
btnPesquisa.addEventListener('click', () => {
    const query = pesquisa.value.trim().toLowerCase();
    if (query) {
        pesquisaPokemon(query);
    }
    limparInput();
});

pesquisa.addEventListener('input', atualizarBotaoPesquisar);

pesquisa.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        btnPesquisa.click();
        
    }
});
const atualizarNavegacaoBotoes = () => {
    btnProximo.disabled = (idAtualPoke >= 1025);
    btnAnterior.disabled = (idAtualPoke <= 1); // true | false
};
btnAnterior.addEventListener('click', () => {

    if (idAtualPoke > 1) {
        pesquisaPokemon(idAtualPoke - 1);

    }
});

btnProximo.addEventListener('click', () => {
    if (idAtualPoke <= 1025) {
        pesquisaPokemon(idAtualPoke + 1);
    }
});
function limparInput() {
    pesquisa.value = "";
}
pesquisaPokemon(idAtualPoke);
atualizarBotaoPesquisar();
atualizarNavegacaoBotoes();