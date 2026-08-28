const usuarios = [
    { nome: "Ana Silva", email: "ana.silva@email.com", perfil: "Admin" },
    { nome: "Bruno Costa", email: "bruno.costa@email.com", perfil: "Gerente" },
    { nome: "Carlos Souza", email: "carlos.souza@email.com", perfil: "Analista" },
    { nome: "Daniela Lima", email: "daniela.lima@email.com", perfil: "Supervisor" },
    { nome: "Eduardo Ribeiro", email: "eduardo.ribeiro@email.com", perfil: "Assistente" },
    { nome: "Fernanda Alves", email: "fernanda.alves@email.com", perfil: "Analista" },
    { nome: "Gabriel Santos", email: "gabriel.santos@email.com", perfil: "Assistente" },
    { nome: "Helena Rodrigues", email: "helena.rodrigues@email.com", perfil: "Supervisor" },
    { nome: "Igor Pereira", email: "igor.pereira@email.com", perfil: "Analista" },
    { nome: "Juliana Mendes", email: "juliana.mendes@email.com", perfil: "Gerente" }
];
let continuar;

do {
    const nome = prompt('Digite o nome');
    const email = prompt('Digite o email');
    const cargo = prompt('Digite o cargo');
    continuar = prompt('Digite "sair" para encerrar')

    usuarios.push({
        nome: nome,
        email: email,
        perfil: cargo
    })
} while (continuar !== 'sair');

const corpoTabela = document.querySelector('tbody');

usuarios.forEach(usuario => {
    const linha = document.createElement('tr');
    const btnExcluir = document.createElement('button')

    let classePerfil = 'perfil ';

    if (usuario.perfil === 'Admin') {
        classePerfil += 'perfil-admin';
    } else if (usuario.perfil === 'Analista') {
        classePerfil += 'perfil-analista'
    } else if (usuario.perfil === 'Supervisor') {
        classePerfil += 'perfil-supervisor'
    } else if (usuario.perfil === 'Gerente') {
        classePerfil += 'perfil-gerente'
    } else {
        classePerfil += 'perfil-assistente'
    }

    linha.innerHTML = `
    <td>${usuario.nome}</td>
        <td>${usuario.email}</td>
        <td><span class="${classePerfil}">${usuario.perfil}</span></td>
        <td class="coluna-acao"></td>`;

    btnExcluir.textContent = 'Excluir'

    btnExcluir.addEventListener('click', () => {
        linha.remove();
    });
    btnExcluir.setAttribute('class', 'btn-excluir')
    linha.querySelector('.coluna-acao').appendChild(btnExcluir);

    corpoTabela.appendChild(linha);
})

// *Aguarda o HTML ser totalmente carregado antes de executar o código

document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o corpo da tabela onde os botões estão inseridos
    const tabelaCorpo = document.querySelector('tbody');


    // Usa delegação de eventos para escutar cliques em qualquer botão de excluir
    tabelaCorpo.addEventListener('click', (evento) => {

        // Verifica se o elemento clicado possui a classe do botão de exclusão
        if (evento.target.classList.contains('btn-excluir')) {

            // Encontra a linha (<tr>) correspondente ao botão clicado
            const linhaExcluir = evento.target.closest('tr');

            // Pega o nome do usuário (primeira célula da linha) para personalizar a mensagem
            const nomeUsuario = linhaExcluir.querySelector('td').textContent;

            // Exibe um alerta de confirmação antes de apagar
            confirm(`Tem certeza que deseja excluir o usuário "${nomeUsuario}" ? `);
        }
    });
});
/*
*
Em um arquivo JavaScript:
*Crie uma iteração que solicite as 3 informações ao usuário via prompt: Nome, E-mail e Perfil.
*Após recebê-las, crie uma nova linha no corpo da tabela mostrando os dados digitados.
*Esta iteração deve continuar até o usuário digitar “sair”.
*Caso o botão Excluir seja clicado, ele deverá remover a linha correspondente.

 */