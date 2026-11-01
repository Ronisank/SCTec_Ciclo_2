import { listarCursos } from "./cursos.js";

const dashboard = document.getElementById('dashboard');
const sair = document.getElementById('sair');
const usuario = document.querySelector('.nomeUsuario');
const cursos = document.getElementById('cursos');
const totalCursos = document.getElementById('totalCursos');
const cadastroAlunos = document.getElementById('cadastro');
const erroCursos = document.querySelector('.erroCursos');


const usuarioString = sessionStorage.getItem('usuario');

const usuarioSession = ({

    nome: "Ana Carolina Silva",
    email: "ana.silva@edutech.com"
});;

usuario.textContent = usuarioSession;

dashboard.addEventListener('click', () => window.location.href = '../dashboard/dashboard.html');


cadastroAlunos.addEventListener('click', () => {
    navigation.navigate('../cadastro-alunos/cadastroAluno.html');
})

sair.addEventListener('click', () => {
    sessionStorage.removeItem('usuario');
    navigation.navigate('../login/login.html');

});

function exibirCursos() {
    return listarCursos(usuarioSession)
        .then((dados) => {
            // Limpa o container antes de renderizar para não duplicar se a função rodar de novo
            cursos.innerHTML = "";
            let totalAtivos = 0;
            let cursoUsuario=[];
            dados.forEach(curso => {
                const dataInicioFormatada = moment(curso.dataInicio).format('DD/MM/YYYY');
                const dataFimFormatada = moment(curso.dataFim).format('DD/MM/YYYY');
                moment(curso.dataFim).isAfter(moment(), 'day') ? totalAtivos++ : 0;
                // Adiciona o card com a estrutura de ícone (usando a primeira letra ou ícone estático)
                cursoUsuario.push(curso);

                cursos.innerHTML += `
                <div class="cardCurso">
                    <div class="iconeCurso">${curso.nomeCurso.substring(0, 2).toUpperCase()}</div>
                    <div class="infoCurso">
                        <h3>${curso.nomeCurso}</h3>
                        <p>Início: ${dataInicioFormatada}</p>
                        <p>Fim: ${dataFimFormatada}</p>
                    </div>
                    <div class="setaCurso">→</div>
                </div>`;
                console.log(cursoUsuario)
            });

            // Total de cursos movido para fora do loop (roda apenas 1 vez)

            totalCursos.innerHTML = `
                <div class="cardTotal">
                    <h2>Total de cursos</h2>
                    <span>${dados.length}</span>
                </div>
                <div class="cardTotal">
                    <h2>Cursos ativos</h2>
                    <span>${totalAtivos}</span>
                </div>
                <div class="pesquisaCurso">
                <input placeHolder="Pesquise seu curso"></input>
                </div>
                `;
        })
        .catch((erro) => {
            erroCursos.innerHTML = `<div class="erroCursos"><p class="hidden">${erro}</p></div>`;
            console.error(`Erro: ${erro}`);
        });
}
exibirCursos();