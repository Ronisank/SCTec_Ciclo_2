// cursos.feature.ts - ESTADO + REDUCER + SELECTORS da fatia "cursos" da Store.
// createFeature junta tudo e GERA sozinho um selector para cada propriedade do estado:
//   cursosFeature.selectLista, selectInscritos, selectCarregando, selectErro
import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { Curso } from '@shared/models/curso';
import { CursosActions } from './cursos.actions';

// 1) O FORMATO do estado: o que a Store guarda sobre cursos
export interface CursosState {
  lista: Curso[]; // catálogo vindo da API
  inscritos: number[]; // ids dos cursos em que o aluno se inscreveu
  carregando: boolean;
  erro: string | null;
}

// 2) O estado INICIAL (antes de qualquer action)
export const estadoInicial: CursosState = {
  lista: [],
  inscritos: [],
  carregando: false,
  erro: null,
};

export const cursosFeature = createFeature({
  name: 'cursos', // nome da fatia: aparece no DevTools como state.cursos

  // 3) O REDUCER: função PURA  (estado atual, action) => NOVO estado.
  //    Regra de ouro: NUNCA altere o state (nada de push). Sempre devolva uma CÓPIA: { ...state }.
  reducer: createReducer(
    estadoInicial,
    on(CursosActions.carregar, (state) => ({ ...state, carregando: true, erro: null })),
    on(CursosActions.carregarSucesso, (state, { cursos }) => ({ ...state, lista: cursos, carregando: false })),
    on(CursosActions.carregarFalha, (state, { erro }) => ({ ...state, carregando: false, erro })),

    on(CursosActions.inscrever, (state, { cursoId }) =>
      state.inscritos.includes(cursoId) ? state : { ...state, inscritos: [...state.inscritos, cursoId] },
    ),
    on(CursosActions.cancelarInscricao, (state, { cursoId }) => ({
      ...state,
      inscritos: state.inscritos.filter((id) => id !== cursoId),
    })),
    // Aula 2: curso novo entra no FINAL de uma NOVA lista (imutável)
    on(CursosActions.adicionarCurso, (state, { curso }) => ({ ...state, lista: [...state.lista, curso] })),
  ),

  // 4) SELECTORS EXTRAS: dados DERIVADOS (calculados a partir do estado, não guardados).
  //    createSelector MEMORIZA: só recalcula quando lista ou inscritos mudam.
  extraSelectors: ({ selectLista, selectInscritos }) => {
    const selectCursosInscritos = createSelector(selectLista, selectInscritos, (lista, inscritos) =>
      lista.filter((curso) => inscritos.includes(curso.id)),
    );
    const selectTotalInscritos = createSelector(selectInscritos, (inscritos) => inscritos.length);
    const selectCargaHorariaTotal = createSelector(selectCursosInscritos, (cursos) =>
      cursos.reduce((total, curso) => total + curso.cargaHoraria, 0),
    );
    return { selectCursosInscritos, selectTotalInscritos, selectCargaHorariaTotal };
  },
});
