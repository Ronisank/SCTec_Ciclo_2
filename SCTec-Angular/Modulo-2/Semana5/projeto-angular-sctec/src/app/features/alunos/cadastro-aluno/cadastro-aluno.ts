// cadastro-aluno.ts - FORMULÁRIO REATIVO (Semana 5). Semana 6: mudou para features/alunos.
// ReactiveFormsModule e os pipes (uppercase, date, cep) agora chegam pelo SharedModule.
import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
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

  readonly cursos = ['Angular', 'React', 'Java', 'Python', 'Banco de Dados'];

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

  invalido(campo: string): boolean {
    const controle = this.form.get(campo);
    return !!controle && controle.invalid && controle.touched;
  }

  enviar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const dados = this.form.getRawValue();
    this.alunoSalvo.set({ ...dados, cadastradoEm: new Date() });
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
