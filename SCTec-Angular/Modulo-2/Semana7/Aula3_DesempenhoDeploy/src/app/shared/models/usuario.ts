// usuario.ts - NOVO na Semana 7 · Aula 2: os formatos usados na AUTENTICAÇÃO.

// PERFIL decide o que o usuário PODE fazer (autorização).
export type Perfil = 'admin' | 'aluno';

// O usuário LOGADO, do jeito que o nosso app usa (só o necessário: nada de senha!)
export interface Usuario {
  id: number;
  nome: string;
  email: string;
  foto: string;
  perfil: Perfil;
}

// O que o formulário de login envia
export interface Credenciais {
  username: string;
  password: string;
}

// O que a API devolve no POST /auth/login (resumido)
export interface RespostaLogin {
  accessToken: string; // o JWT: o "crachá" que vai em cada requisição
  refreshToken: string;
  id: number;
  username: string;
}
