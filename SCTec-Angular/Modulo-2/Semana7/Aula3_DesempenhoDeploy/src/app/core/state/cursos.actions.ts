// cursos.actions.ts - ACTIONS: os "eventos" que podem acontecer com o estado de cursos.
// Uma action é só um objeto: { type: '[Cursos] Inscrever', cursoId: 3 }.
// Ela NÃO muda nada sozinha: é DESPACHADA (dispatch) e o REDUCER decide o novo estado.
// createActionGroup gera as funções com nomes em camelCase:
//   'Carregar Sucesso'   -> CursosActions.carregarSucesso({ cursos })
//   'Cancelar Inscricao' -> CursosActions.cancelarInscricao({ cursoId })
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Curso } from '@shared/models/curso';

export const CursosActions = createActionGroup({
  source: 'Cursos', // aparece no Redux DevTools como [Cursos] ...
  events: {
    // Fluxo ASSÍNCRONO (passa pelo effect): pedir -> deu certo | deu errado
    'Carregar': emptyProps(),
    'Carregar Sucesso': props<{ cursos: Curso[] }>(),
    'Carregar Falha': props<{ erro: string }>(),

    // Fluxo SÍNCRONO (só o reducer)
    'Inscrever': props<{ cursoId: number }>(),
    'Cancelar Inscricao': props<{ cursoId: number }>(),

    // Aula 2: só o ADMIN dispara (painel protegido por perfilGuard)
    'Adicionar Curso': props<{ curso: Curso }>(),
  },
});
