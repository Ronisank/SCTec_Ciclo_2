const botaoEntrar = document.getElementById('btnEntrar');
const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');
const verSenha = document.getElementById('btn-senha')

botaoEntrar.addEventListener('click', () => {
    window.alert('Entrar');
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

usuario.oninput = validaCampos;
senha.oninput= validaCampos;

function validaCampos() {
    if (usuario.value && senha.value) { //Validação dos valores dos inputs
        botaoEntrar.disabled = false;
    } else {
        botaoEntrar.disabled = true;
    }
}