// form-contato.ts - FORMULÁRIO REATIVO (a estrutura e as validações ficam no TypeScript)
// + CONSUMO DE API (viaCEP) + navegação por código (Router).
// Criado com: ng generate component features/contatos/form-contato
import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CepService } from '../../../core/services/cep-service';
import { ContatoService } from '../../../core/services/contato-service';
import { Categoria } from '../../../shared/models/contato';
import { SharedModule } from '../../../shared/shared-module';

@Component({
  selector: 'app-form-contato',
  imports: [SharedModule],
  templateUrl: './form-contato.html',
  styleUrl: './form-contato.scss',
})
export class FormContato {
  // Vários services injetados: cada um com UMA responsabilidade.
  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly contatoService = inject(ContatoService);
  private readonly cepService = inject(CepService);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);

  readonly categorias: { valor: Categoria; texto: string }[] = [
    { valor: 'familia', texto: 'Família' },
    { valor: 'trabalho', texto: 'Trabalho' },
    { valor: 'amigos', texto: 'Amigos' },
  ];

  readonly buscandoCep = signal(false);
  readonly erroCep = signal('');

  // TODO 19 - VALIDATORS DO FORMULÁRIO REATIVO
  // Hoje o formulário NÃO valida nada (dá para salvar tudo vazio). Formato: campo: [valorInicial, [validadores]]
  //   nome       -> [Validators.required, Validators.minLength(3)]
  //   email      -> [Validators.required, Validators.email]
  //   telefone   -> [Validators.required, Validators.pattern(/^\d{10,11}$/)]   (10 ou 11 números)
  //   categoria  -> this.formBuilder.control<Categoria>('amigos', Validators.required)
  //   cep        -> [Validators.required, Validators.pattern(/^\d{8}$/)]       (8 números)
  //   logradouro, localidade, uf -> Validators.required
  readonly form = this.formBuilder.group({
    nome: [''],
    email: [''],
    telefone: [''],
    categoria: this.formBuilder.control<Categoria>('amigos'),
    foto: [''],
    // Grupo DENTRO do grupo: o endereço vira um objeto separado.
    endereco: this.formBuilder.group({
      cep: [''],
      logradouro: [''],
      numero: [''],
      bairro: [''],
      localidade: [''],
      uf: [''],
    }),
  });

  // Atalho para o HTML: o campo está inválido E o usuário já mexeu nele? (pronto)
  invalido(caminho: string): boolean {
    const campo = this.form.get(caminho);
    return !!campo && campo.invalid && campo.touched;
  }

  // TODO 20 (parte 1) - CONSUMIR A API viaCEP
  // a) const cep = this.form.controls.endereco.controls.cep.value.replace(/\D/g, '');
  // b) this.erroCep.set('');  e  se cep.length !== 8, return;
  // c) this.buscandoCep.set(true);
  // d) this.cepService.buscar(cep).subscribe({
  //      next: (endereco) => {
  //        this.buscandoCep.set(false);
  //        if (endereco.erro) { this.erroCep.set('CEP não encontrado.'); return; }
  //        this.form.controls.endereco.patchValue({ logradouro: endereco.logradouro,
  //          bairro: endereco.bairro, localidade: endereco.localidade, uf: endereco.uf });
  //      },
  //      error: () => { this.buscandoCep.set(false); this.erroCep.set('Não foi possível consultar o viaCEP.'); },
  //    });
  buscarCep(): void {}

  // TODO 20 (parte 2) - SALVAR E NAVEGAR
  // a) se this.form.invalid -> this.form.markAllAsTouched(); return;   (mostra os erros de todos os campos)
  // b) const dados = this.form.getRawValue();
  // c) this.contatoService.adicionar({ ...dados, foto: dados.foto || undefined });
  // d) this.snackBar.open(`${dados.nome} cadastrado com sucesso!`, 'OK', { duration: 3000 });
  // e) this.router.navigate(['/contatos']);       -> navegação POR CÓDIGO
  salvar(): void {}

  limpar(): void {
    this.form.reset();
    this.erroCep.set('');
  }
}
