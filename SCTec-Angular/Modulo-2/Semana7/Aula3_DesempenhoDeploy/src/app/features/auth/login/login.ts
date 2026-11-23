// login.ts - PÁGINA DE LOGIN (rota /login). Criada com: ng g c features/auth/login
// Reactive Forms (Semana 5) + Material (Semana 6) + AuthService (hoje).
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@core/auth/auth-service';
import { SharedModule } from '@shared';

interface UsuarioTeste {
  perfil: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [SharedModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private fb = inject(NonNullableFormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private snackBar = inject(MatSnackBar);

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  carregando = signal(false);
  erro = signal('');
  mostrarSenha = signal(false);

  // Usuários de TESTE da API DummyJSON (https://dummyjson.com/users)
  readonly usuariosTeste: UsuarioTeste[] = [
    { perfil: 'Administrador', username: 'emilys', password: 'emilyspass' },
    { perfil: 'Aluno', username: 'averyp', password: 'averyppass' },
  ];

  preencher(usuario: UsuarioTeste): void {
    this.form.setValue({ username: usuario.username, password: usuario.password });
  }

  entrar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.carregando.set(true);
    this.erro.set('');

    this.auth.login(this.form.getRawValue()).subscribe({
      next: (usuario) => {
        this.carregando.set(false);
        this.snackBar.open(`Bem-vindo(a), ${usuario.nome}!`, 'OK', { duration: 3000 });
        // Volta para a página que a pessoa tentou abrir (o guard guardou em ?returnUrl=)
        const destino = this.route.snapshot.queryParamMap.get('returnUrl') ?? '/inscricoes';
        this.router.navigateByUrl(destino);
      },
      error: (erro: HttpErrorResponse) => {
        this.carregando.set(false);
        this.erro.set(mensagemDeErro(erro.status));
      },
    });
  }
}

// Cada status HTTP conta uma história diferente:
function mensagemDeErro(status: number): string {
  if (status === 400) return 'Usuário ou senha inválidos.'; // a API recusou as credenciais
  if (status === 401) return 'Não autorizado (401): o token não chegou à API.'; // faltou o Authorization
  return 'Não foi possível entrar. Verifique a internet.'; // status 0 = sem resposta
}
