// contato.ts - MODELO principal do app (TypeScript para Angular).
import { Endereco } from './endereco';

// TODO 1 - UNION TYPE (TypeScript)
// Hoje a categoria aceita QUALQUER texto (string). Isso permite erros como 'familha'.
// Troque "string" por um UNION TYPE que aceite SOMENTE: 'familia' | 'trabalho' | 'amigos'
// Depois teste: no contato-service.ts, mude uma categoria para 'familha' e veja o erro aparecer.
export type Categoria = string;

export interface Contato {
  id: number;
  nome: string;
  email: string;
  telefone: string; // só números com DDD: 11987654321
  categoria: Categoria;
  favorito: boolean;
  foto?: string; // "?" = opcional
  endereco?: Endereco; // opcional (interface dentro de interface)
  criadoEm: Date;
}

// UTILITY TYPE: "Contato SEM id, favorito e criadoEm" -> é o que o formulário envia.
// Quem cria esses três campos é o service.
export type NovoContato = Omit<Contato, 'id' | 'favorito' | 'criadoEm'>;
