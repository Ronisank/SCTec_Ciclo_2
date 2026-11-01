const corpoPagina = document.querySelector('body');
corpoPagina.getAttribute('class')
corpoPagina.setAttribute('class', 'main')
corpoPagina.style.color = '#555fff';
corpoPagina.style.fontFamily = 'cursive'

const h1 = document.createElement('h1')
const tituloH1 = prompt('Digite um titulo para a pagina: ')
h1.textContent = tituloH1
document.body.appendChild(h1);

const titulo = document.querySelector('h1');


for (let index = 1; index <= 3; index++) {
    const element = document.createElement('p');
    const textoUsuario = prompt(`Digite o ${[index]}°, paragrafo`)

    element.textContent = textoUsuario;
    document.body.appendChild(element);

}
h1.style.backgroundColor = '#0aaa';