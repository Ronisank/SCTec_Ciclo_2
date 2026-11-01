const boletim = [
    {
        disciplina: "Matemática",
        bim1: 8.5,
        bim2: 7.0,
        media: 7.8,
        frequencia: 0.95,
        situacao: "Aprovado"
    },
    {
        disciplina: "Português",
        bim1: 9.0,
        bim2: 8.0,
        media: 8.5,
        frequencia: 0.98,
        situacao: "Aprovado"
    },
    {
        disciplina: "História",
        bim1: 7.5,
        bim2: 6.5,
        media: 7.0,
        frequencia: 0.92,
        situacao: "Aprovado"
    },
    {
        disciplina: "Geografia",
        bim1: 6.0,
        bim2: 5.5,
        media: 5.8,
        frequencia: 0.89,
        situacao: "Recuperação"

    },
    {
        disciplina: "Ciências",
        bim1: 8.0,
        bim2: 9.0,
        media: 8.5,
        frequencia: 0.97,
        situacao: "Aprovado"
    }
];

const tbody = document.querySelector("tbody");

boletim.forEach((item) => {
    tbody.innerHTML += `
        <tr>
            <td>${item.disciplina}</td>
            <td>${item.bim1}</td>
            <td>${item.bim2}</td>
            <td>${item.media}</td>
            <td>${item.frequencia}</td>
            <td class="${item.situacao === 'Aprovado' ? 'aprovado' : 'recuperacao'}">${item.situacao}</td>
        </tr>
        
    `;
});

