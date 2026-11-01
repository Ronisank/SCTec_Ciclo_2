import { cursos } from "./listagem-cursos.js";



const usuarioString = ({
    
        nome: "Ana Carolina Silva",
        email: "ana.silva@edutech.com"
    });
console.log(usuarioString)
// const usuarioSession = JSON.parse(usuarioString);

let cursosUsuario;

export function listarCursos(usuario) {
    return new Promise((resolve, reject) => {

        const cursoEncontrado = cursos.filter((item) => {

            return item.emailProfessor === usuario.email;
        });
        if (cursoEncontrado.length > 0) {
            cursosUsuario = cursoEncontrado.map((index) => {
                return ({
                    nomeCurso: index.nomeCurso,
                    dataInicio: index.dataInicio,
                    dataFim: index.dataFim
                });
            })

            resolve(cursosUsuario)
        } else {

            reject("Não há cursos cadastrados para esse usuário.");
        }
    }
    )
};