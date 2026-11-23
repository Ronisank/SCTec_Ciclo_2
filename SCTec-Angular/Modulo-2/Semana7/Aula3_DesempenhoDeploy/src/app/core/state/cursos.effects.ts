// cursos.effects.ts - EFFECTS: onde moram os EFEITOS COLATERAIS (API, avisos, localStorage...).
// O reducer é PURO e não pode chamar API. O effect "escuta" as actions, faz o trabalho
// assíncrono e DESPACHA uma nova action com o resultado:
//   [Cursos] Carregar  ->  effect chama a API  ->  [Cursos] Carregar Sucesso  (ou Carregar Falha)
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { CursoService } from '@core/services/curso-service';
import { CursosActions } from './cursos.actions';

// Effect que DESPACHA outra action (o caso mais comum)
export const carregarCursos = createEffect(
  (actions$ = inject(Actions), cursoService = inject(CursoService)) =>
    actions$.pipe(
      ofType(CursosActions.carregar), // 1) só reage a [Cursos] Carregar
      exhaustMap(() =>
        // 2) chama a API (exhaustMap ignora novos pedidos enquanto o atual não termina)
        cursoService.listar().pipe(
          map((cursos) => CursosActions.carregarSucesso({ cursos })), // 3a) deu certo
          catchError(() => of(CursosActions.carregarFalha({ erro: 'Não foi possível carregar os cursos.' }))), // 3b) deu errado
        ),
      ),
    ),
  { functional: true },
);

// Effect que NÃO despacha nada (dispatch: false): só mostra um aviso na tela
export const avisarInscricao = createEffect(
  (actions$ = inject(Actions), snackBar = inject(MatSnackBar)) =>
    actions$.pipe(
      ofType(CursosActions.inscrever),
      tap(() => snackBar.open('Inscrição realizada! Veja em "Inscrições".', 'OK', { duration: 3000 })),
    ),
  { functional: true, dispatch: false },
);
