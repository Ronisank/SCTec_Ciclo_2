// contato.ts - FORMULÁRIO TEMPLATE-DRIVEN (Semana 5). Semana 6: mudou para features/contato.
// FormsModule agora chega pelo SharedModule.
import { Component, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MensagemContato, SharedModule } from '@shared';

@Component({
  selector: 'app-contato',
  imports: [SharedModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  contato: MensagemContato = { nome: '', email: '', mensagem: '' };
  enviada = signal<MensagemContato | null>(null);

  enviar(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    this.enviada.set({ ...this.contato });
    form.resetForm({ nome: '', email: '', mensagem: '' });
  }
}
