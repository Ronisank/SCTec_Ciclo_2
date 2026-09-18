const cardContainer = document.querySelector('.container');

const buscarUsuario = async () => {
    try {
        // 1. Consome a API do Random User
        const resposta = await fetch('https://randomuser.me/api/');
        const dados = await resposta.json();

        // 2. Extrai os dados específicos do primeiro usuário retornado
        const usuario = dados.results[0];

        const foto = usuario.picture.large;
        const nomeCompleto = `${usuario.name.first} ${usuario.name.last}`;
        const email = usuario.email;
        const celular = usuario.cell;

        // 3. Cria a estrutura HTML do card injetando os dados coletados
        cardContainer.innerHTML = `
            <div class="user-card">
                <img src="${foto}" alt="Foto de ${nomeCompleto}" class="user-avatar" />
                <h2 class="user-name">${nomeCompleto}</h2>
                <p class="user-email">✉️ ${email}</p>
                <p class="user-phone">📱 ${celular}</p>
            </div>
        `;

    } catch (erro) {
        console.error("Erro ao buscar o usuário:", erro);
        cardContainer.innerHTML = `<p class="error-msg">Não foi possível carregar o usuário.</p>`;
    }
};

// Executa a função ao carregar a página
buscarUsuario();