function exibirCursos() {
    return listarCursos(usuarioSession)
        .then((dados) => {
            // Limpa o container antes de renderizar para não duplicar se a função rodar de novo
            cursos.innerHTML = ""; 

            dados.forEach(curso => {
                const dataInicioFormatada = moment(curso.dataInicio).format('DD/MM/YYYY');
                const dataFimFormatada = moment(curso.dataFim).format('DD/MM/YYYY');

                // Adiciona o card com a estrutura de ícone (usando a primeira letra ou ícone estático)
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
            });

            // Total de cursos movido para fora do loop (roda apenas 1 vez)
            totalCursos.innerHTML = `
                <div class="cursosTotal">
                    <h2 class="cursosH2">Total de cursos</h2>
                    <h3 class="cursosH3">${dados.length}</h3>
                </div>`;
        })
        .catch((erro) => {
            erroCursos.innerHTML = `<div class="erroCursos"><p class="hidden">${erro}</p></div>`;
            console.error(`Erro: ${erro}`);
        });
}
