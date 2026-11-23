// cadastro-aluno.ts - FORMULÁRIO REATIVO (Semana 5).
// Semana 6 · Aula 3: campos do Angular Material (mat-form-field), máscaras do ngx-mask e
// aviso de sucesso com MatSnackBar (um SERVICE do Material, pedido com inject()).
import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CepService } from '@core/services/cep-service';
import { Aluno, Endereco, SharedModule } from '@shared';

@Component({
  selector: 'app-cadastro-aluno',
  imports: [SharedModule],
  templateUrl: './cadastro-aluno.html',
  styleUrl: './cadastro-aluno.scss',
})
export class CadastroAluno {
  private fb = inject(NonNullableFormBuilder);
  private cepService = inject(CepService);
  private snackBar = inject(MatSnackBar);

  readonly cursos = ['Angular', 'React', 'Java', 'Python', 'Banco de Dados'];

  // As validações NÃO mudaram: o ngx-mask entrega ao form só os NÚMEROS (sem "(", ")" e "-").
  form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
    curso: ['', Validators.required],
    cep: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
  });

  alunoSalvo = signal<Aluno | null>(null);
  endereco = signal<Endereco | null>(null);
  carregando = signal(false);
  erroCep = signal('');

  enviar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snackBar.open('Confira os campos destacados em vermelho.', 'OK', { duration: 3000 });
      return;
    }
    const dados = this.form.getRawValue();
    this.alunoSalvo.set({ ...dados, cadastradoEm: new Date() });
    this.snackBar.open(`Aluno ${dados.nome} cadastrado com sucesso!`, 'Fechar', { duration: 4000 });
  }

  limpar(): void {
    this.form.reset();
    this.alunoSalvo.set(null);
    this.endereco.set(null);
    this.erroCep.set('');
  }

  buscarCep(): void {
    const cep = String(this.form.controls.cep.value ?? '').replace(/\D/g, '');
    this.endereco.set(null);
    this.erroCep.set('');

    if (cep.length !== 8) {
      this.erroCep.set('Digite um CEP com 8 números.');
      return;
    }

    this.carregando.set(true);
    this.cepService.buscar(cep).subscribe({
      next: (resposta) => {
        this.carregando.set(false);
        if (resposta.erro) {
          this.erroCep.set('CEP não encontrado.');
          return;
        }
        this.endereco.set(resposta);
      },
      error: () => {
        this.carregando.set(false);
        this.erroCep.set('Não foi possível consultar o CEP. Verifique a internet.');
      },
    });
  }
}
