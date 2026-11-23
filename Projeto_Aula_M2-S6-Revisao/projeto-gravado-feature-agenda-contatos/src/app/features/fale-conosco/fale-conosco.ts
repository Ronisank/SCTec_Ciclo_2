// fale-conosco.ts - FORMULÁRIO TEMPLATE-DRIVEN (a lógica fica no HTML, com ngModel).
// Criado com: ng generate component features/fale-conosco
// Carregado com loadComponent (lazy loading de UM componente) no app.routes.ts.
import { Component, inject, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedModule } from '../../shared/shared-module';

interface Mensagem {
  nome: string;
  email: string;
  assunto: string;
  texto: string;
  aceite: boolean;
}

@Component({
  selector: 'app-fale-conosco',
  imports: [SharedModule],
  templateUrl: './fale-conosco.html',
  styleUrl: './fale-conosco.scss',
})
export class FaleConosco {
  private readonly snackBar = inject(MatSnackBar);

  readonly assuntos = ['Dúvida', 'Sugestão', 'Elogio', 'Reclamação'];

  // O objeto que o [(ngModel)] de cada campo lê e escreve.
  mensagem: Mensagem = { nome: '', email: '', assunto: 'Dúvida', texto: '', aceite: false };

  readonly enviada = signal<Mensagem | null>(null);

  enviar(formulario: NgForm): void {
    if (formulario.invalid) {
      formulario.control.markAllAsTouched(); // mostra os erros de todos os campos
      return;
    }
    this.enviada.set({ ...this.mensagem }); // guarda uma CÓPIA
    this.snackBar.open('Mensagem enviada com sucesso!', 'OK', { duration: 3000 });
    formulario.resetForm({ assunto: 'Dúvida', aceite: false });
  }
}
