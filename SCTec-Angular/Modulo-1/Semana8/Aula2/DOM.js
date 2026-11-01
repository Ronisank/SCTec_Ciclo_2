//Tipos de Seleção de elementos

//Exemplo getElementsByTagName
document.getElementsByTagName('h1');
document.getElementsByTagName('h1')[0];

//Exemplo getElementsByClassName
document.getElementsByClassName('teste-classe');

//Exemplo getElementById
document.getElementById('teste-id');

//Exemplo querySelector
document.querySelector('h1'); //Seleção pela primera tag h1 encontrada

document.querySelector('.teste-classe'); //Seleção pela classe
document.querySelector('teste-classe'); //Seleção incorreta de classe (faltando o . )

document.querySelector('#teste-id'); //Seleção pelo ID
document.querySelector('h2.teste-classe'); //Combinação de seleção de tag + classe
document.querySelector('h2#teste-id'); //Combinação de seleção de tag + id

//Exemplo querySelectorAll
document.querySelectorAll('h1');  //Seleção de todas as tags h1 encontradas
document.querySelectorAll('h2');  //Seleção de todas as tags h2 encontradas

//----------------------------------------------------------------------------------------

//Selecionando um elemento
let tituloPrincipal = document.querySelector('h1');

//getAttribute recupera o valor de um atributo
tituloPrincipal.getAttribute('class');

//setAttribute altera o valor do atributo escolhido
tituloPrincipal.setAttribute('class', 'teste-set-attr');

//removeAttribute remove o atributo do elemento
tituloPrincipal.removeAttribute('class');

//hasAttribute verifica se o elemento possui um atributo
tituloPrincipal.hasAttribute('class'); //retorna false pois o atributo classe foi excluído na linha 39

tituloPrincipal.setAttribute('class', 'titulo'); //Caso o atributo não exista, o setAttribute adiciona o atributo
tituloPrincipal.hasAttribute('class'); //retorna true pois o atributo classe foi incluído na linha anterior

//----------------------------------------------------------------------------------------

tituloPrincipal.textContent; //exibe o valor do atributo textContent
tituloPrincipal.innerHTML; //exibe o valor do atributo innerHTML
tituloPrincipal.value; //exibe o valor do atributo value

//----------------------------------------------------------------------------------------

let exemploClasse = document.querySelector('h2.teste-classe');

// exemploClasse.classList.add('teste-classe-tres');
// exemploClasse.classList.remove('teste-classe');
// exemploClasse.classList.toggle('open');
// exemploClasse.classList.toggle('open');
// exemploClasse.classList.contains('teste-classe-tres');
// exemploClasse.classList.contains('teste-classe-quatro');
// exemploClasse.classList.replace('teste-classe-tres', 'teste-classe-quatro');

//----------------------------------------------------------------------------------------

// exemploClasse.textContent = 'Teste DOM';
// exemploClasse.textContent = 'Teste ABC';
// exemploClasse.textContent = 'Teste Classe';
// exemploClasse.style.color = '#000000';
// exemploClasse.style.color = '#ffffff';
// exemploClasse.style.color = '#000000';
// exemploClasse.style.fontSize = '30px';

const tituloH1 = prompt('Digite um titulo para a pagina: ')



// document.querySelector('.titulo').innerHTML =`DOM - Document Object Model`
document.querySelector('.titulo').innerHTML = tituloH1

const titulo = document.querySelector('.titulo');


titulo.style.backgroundColor = '#Faaa';
titulo.style.color = '#555fff';
titulo.style.fontFamily = 'cursive'

const img = document.createElement('img');
img.src = prompt('Digite a URL de uma imagem');
img.alt = 'Imagem Aleatoria';
img.style.width = '200px';

document.body.appendChild(img);
document.querySelector('img').innerHTML = img

const section = document.createElement('section')
let usuariodigitou = prompt('Digite um titulo para section:')
const novoElemento = document.querySelector('img');
document.body.insertBefore(section, novoElemento)
document.querySelector('section').innerText = usuariodigitou

