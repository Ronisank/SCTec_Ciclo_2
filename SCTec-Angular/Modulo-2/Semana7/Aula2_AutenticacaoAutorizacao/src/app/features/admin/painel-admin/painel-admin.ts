// painel-admin.ts - ÁREA RESTRITA (rota /admin), só para o perfil 'admin'.
// Criada com: ng g c features/admin/painel-admin
// Protegida por perfilGuard('admin') no app.routes.ts. O admin cadastra cursos NA STORE (Aula 1):
// o curso novo aparece na hora em /cursos, sem nenhuma ligação direta entre as páginas.
import { Component, OnInit, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { AuthService } from '@core/auth/auth-service';
import { CursosActions } from '@core/state/cursos.actions';
import { cursosFeature } from '@core/state/cursos.feature';
import { NivelCurso, SharedModule } from '@shared';

@Component({
  selector: 'app-painel-admin',
  imports: [SharedModule],
  templateUrl: './painel-admin.html',
  styleUrl: './painel-admin.scss',
})
export class PainelAdmin implements OnInit {
  private store = inject(Store);
  private fb = inject(NonNullableFormBuilder);
  private snackBar = inject(MatSnackBar);
  protected readonly auth = inject(AuthService);

  protected readonly cursos = this.store.selectSignal(cursosFeature.selectLista);
  protected readonly totalInscritos = this.store.selectSignal(cursosFeature.selectTotalInscritos);

  readonly areas = ['Front-End', 'Back-End', 'Dados', 'Design', 'Mobile'];
  readonly niveis: NivelCurso[] = ['Iniciante', 'Intermediário', 'Avançado'];

  form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(5)]],
    area: ['Front-End', Validators.required],
    nivel: ['Iniciante' as NivelCurso, Validators.required],
    cargaHoraria: [40, [Validators.required, Validators.min(1)]],
    descricao: ['', Validators.required],
  });

  ngOnInit(): void {
    if (this.cursos().length === 0) {
      this.store.dispatch(CursosActions.carregar());
    }
  }

  adicionar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const id = Date.now(); // id provisório (num back-end real, quem gera é o banco)
    const curso = { id, ...this.form.getRawValue(), imagem: `https://picsum.photos/seed/${id}/800/450` };
    this.store.dispatch(CursosActions.adicionarCurso({ curso }));
    this.snackBar.open(`Curso "${curso.nome}" adicionado ao catálogo.`, 'OK', { duration: 3000 });
    this.form.reset();
  }
}
