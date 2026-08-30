// const cadastro = document.getElementById('cadastro');
// const nome = document.querySelectorAll('input')

const cadastrado = [];

// cadastro.addEventListener('click',()=>{
//     nome.forEach((item) =>{
//         const obj = item
//         cadastrado.push(item)
//     })
//     window.alert('Cadastro efetuado com sucesso: '+ cadastrado)
// })
function cadastrarUsuario() {
    // Captura os elementos do formulário
    const usuario = document.getElementById('nome').value.trim();
    const emailUsuario = document.getElementById('email').value;
    const telefone = document.getElementById('celular').value;

    // Validação: verifica se algum campo está vazio
    if (!nome || !emailUsuario || !telefone) {
        alert('Por favor, preencha todos os campos antes de cadastrar!');
        return;
    } else {

        cadastrado.push({
            nome: usuario,
            email: emailUsuario,
            telefone: telefone,
        })
    }
    console.log(cadastrado)
    // Se passar na validação
    // window.alert(`Cadastro efetuado com sucesso: Nome: ${cadastrado.nome},  E-mail: ${cadastrado.emailUsuario},  Celular: ${cadastrado.telefone} `)
}
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    window.alert(`Usuário: ${nome.value}; E-mail: ${email.value}; Celular: ${celular.value}`);
});