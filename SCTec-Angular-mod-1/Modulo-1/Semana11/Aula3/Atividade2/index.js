const botaoEntrar = document.getElementById('btnEntrar');
const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');
const verSenha = document.getElementById('btn-senha')
const btnCadastrar = document.getElementById('cadastro')


let localStorageUsuario = JSON.parse(localStorage.getItem('usuario'));

botaoEntrar.addEventListener('click', () => {
    if (usuario.value === localStorageUsuario.email) {
        window.alert('Acesso realizado com sucesso');
    } else {
        console.log('Deu Ruim');
        window.alert('Verifica que deu erro');
    }
});
verSenha.innerHTML = '🙈';

verSenha.addEventListener('click', () => {
    if (senha.type === 'password') {
        senha.type = 'text';
        verSenha.innerHTML = '👁️'; // Mostra o olho aberto se a senha está visível
    } else {
        senha.type = 'password';
        verSenha.innerHTML = '🙈'; // Mostra o macaco se a senha escondeu
    }

})

usuario.onchange = validaCampos;
senha.onchange = validaCampos;

function validaCampos() {
    if (usuario.value && senha.value) { //Validação dos valores dos inputs
        botaoEntrar.disabled = false;
    } else {
        botaoEntrar.disabled = true;
    }
}
btnCadastrar.addEventListener('click', () => {
    console.log('clicando')
    window.location.href = '../Atividade1/atividade1.html';
});