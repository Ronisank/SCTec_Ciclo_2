const cadastro = document.getElementById('cadastro');
const nome = document.querySelectorAll('input')

const cadastrado = [];

cadastro.addEventListener('click',()=>{
    nome.forEach((item) =>{
        const obj = item
        cadastrado.push(item)
    })
    window.alert('Cadastro efetuado com sucesso: '+ cadastrado)
})