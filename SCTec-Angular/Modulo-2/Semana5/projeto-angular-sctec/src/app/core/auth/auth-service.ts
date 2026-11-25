// auth-service.ts - AUTENTICAÇÃO (Semana 7 · Aula 2). Mora em core/: existe UMA sessão para o app inteiro.
// Estado global SIMPLES com signals (a outra solução de estado da semana, ao lado do NgRx).
//
// Fluxo do login (API pública DummyJSON):
//   1) POST /auth/login  { username, password }  -> devolve o accessToken (JWT)
//   2) GET  /auth/me     (o INTERCEPTOR coloca  Authorization: Bearer <token>)  -> devolve o usuário e o perfil
//   3) guarda token + usuário no localStorage (para sobreviver ao F5)
import { HttpClient } from '@angular/common/http';
import { Service, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, switchMap, tap } from 'rxjs';
import { Credenciais, RespostaLogin, Usuario } from '@shared/models/usuario';

export const API_AUTH = 'https://dummyjson.com/auth';
const CHAVE_TOKEN = 'sctec.token';
const CHAVE_USUARIO = 'sctec.usuario';

// Formato (resumido) que o GET /auth/me devolve
interface UsuarioApi {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  role: string; // 'admin' | 'moderator' | 'user'
}

@Service()
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  // ESTADO (privado, só o service altera)
  private readonly _token = signal<string | null>(null);
  private readonly _usuario = signal<Usuario | null>(null);

  // LEITURA (pública): signals somente leitura e valores DERIVADOS com computed()
  readonly token = this._token.asReadonly();
  readonly usuario = this._usuario.asReadonly();
  readonly estaLogado = computed(() => this._usuario() !== null);
  readonly ehAdmin = computed(() => this._usuario()?.perfil === 'admin');

  constructor() {
    this.restaurarSessao();
  }

  // login(credenciais: Credenciais): Observable<Usuario> {
    // TODO 1 (LOGIN NO SERVICE): apague o "throw" e escreva o fluxo do login em 3 passos:
    //   return this.http.post<RespostaLogin>(`${API_AUTH}/login`, { ...credenciais, expiresInMins: 60 }).pipe(
    //     tap((resposta) => this._token.set(resposta.accessToken)),        // 1) guarda o token
    //     switchMap(() => this.http.get<UsuarioApi>(`${API_AUTH}/me`)),    // 2) pede o usuário (com o token)
    //     map(paraUsuario),                                                // converte para o NOSSO formato
    //     tap({
    //       next: (usuario) => {
    //         this._usuario.set(usuario);
    //         this.salvarSessao();                                         // 3) persiste
    //       },
    //       error: () => this.limparSessao(),
    //     }),
    //   );
    // throw new Error('TODO 1: o login ainda não foi implementado no AuthService.');
    login(credenciais: Credenciais): Observable<Usuario> {
  return this.http.post<RespostaLogin>(`${API_AUTH}/login`, { ...credenciais, expiresInMins: 60 }).pipe(
    tap((resposta) => this._token.set(resposta.accessToken)),          // 1) guarda o token
    switchMap(() => this.http.get<UsuarioApi>(`${API_AUTH}/me`)),      // 2) pede o usuário (com o token)
    map(paraUsuario),                                                  // converte para o NOSSO formato
    tap({
      next: (usuario) => {
        this._usuario.set(usuario);
        this.salvarSessao();                                           // 3) persiste (F5 não desloga)
      },
      error: () => this.limparSessao(),
    }),
  );
}

  logout(): void {
    this.limparSessao();
    this.router.navigateByUrl('/login');
  }

  private salvarSessao(): void {
    localStorage.setItem(CHAVE_TOKEN, this._token() ?? '');
    localStorage.setItem(CHAVE_USUARIO, JSON.stringify(this._usuario()));
  }

  private limparSessao(): void {
    this._token.set(null);
    this._usuario.set(null);
    localStorage.removeItem(CHAVE_TOKEN);
    localStorage.removeItem(CHAVE_USUARIO);
  }

  // Ao abrir o app (ou F5): recupera a sessão, se o token ainda for válido
  private restaurarSessao(): void {
    const token = localStorage.getItem(CHAVE_TOKEN);
    const usuario = localStorage.getItem(CHAVE_USUARIO);
    if (token && usuario && !tokenExpirado(token)) {
      this._token.set(token);
      this._usuario.set(JSON.parse(usuario) as Usuario);
    } else {
      this.limparSessao();
    }
  }
}

function paraUsuario(api: UsuarioApi): Usuario {
  return {
    id: api.id,
    nome: `${api.firstName} ${api.lastName}`,
    email: api.email,
    foto: api.image,
    perfil: api.role === 'admin' ? 'admin' : 'aluno',
  };
}

// O JWT tem 3 partes separadas por ponto: HEADER.PAYLOAD.ASSINATURA
// O PAYLOAD é só Base64 (qualquer um lê!). Nele vem "exp": a data de expiração em segundos.
export function tokenExpirado(token: string): boolean {
  try {
    const payloadBase64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    const payload = JSON.parse(atob(payloadBase64)) as { exp?: number };
    return !payload.exp || payload.exp * 1000 < Date.now();
  } catch {
    return true; // token malformado = expirado
  }
}
