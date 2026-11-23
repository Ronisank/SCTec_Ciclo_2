// contato-service.ts - SERVICE: guarda e altera a lista de contatos (regra de negócio + estado).
// Criado com: ng generate service core/services/contato-service
//
// @Service() = o Angular cria UMA instância só (singleton) e entrega para quem pedir com inject().
// Isso é DEPENDENCY INJECTION: o componente não faz "new ContatoService()", ele PEDE.
import { Service } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { Contato, NovoContato } from '../../shared/models/contato';

// Dados iniciais (simulam um banco de dados).
const CONTATOS_INICIAIS: Contato[] = [
  {
    id: 1,
    nome: 'Ana Souza',
    email: 'ana.souza@email.com',
    telefone: '48991234567',
    categoria: 'familia',
    favorito: true,
    foto: 'https://i.pravatar.cc/300?img=47',
    endereco: {
      cep: '88010000',
      logradouro: 'Rua Felipe Schmidt',
      numero: '100',
      bairro: 'Centro',
      localidade: 'Florianópolis',
      uf: 'SC',
    },
    criadoEm: new Date(2026, 0, 10, 9, 30),
  },
  {
    id: 2,
    nome: 'Bruno Lima',
    email: 'bruno.lima@empresa.com',
    telefone: '4733221100',
    categoria: 'trabalho',
    favorito: false,
    foto: 'https://i.pravatar.cc/300?img=12',
    criadoEm: new Date(2026, 2, 5, 14, 0),
  },
  {
    id: 3,
    nome: 'Carla Mendes',
    email: 'carla@email.com',
    telefone: '11987654321',
    categoria: 'amigos',
    favorito: false,
    foto: 'https://i.pravatar.cc/300?img=32',
    criadoEm: new Date(2026, 5, 20, 18, 45),
  },
  {
    id: 4,
    nome: 'Diego Ramos',
    email: 'diego.ramos@empresa.com',
    telefone: '48998887766',
    categoria: 'trabalho',
    favorito: true,
    foto: 'https://i.pravatar.cc/300?img=15',
    criadoEm: new Date(2026, 8, 1, 8, 15),
  },
];

@Service()
export class ContatoService {
  // BehaviorSubject: um Observable que GUARDA o último valor e avisa todo mundo quando muda.
  // "private": só o service pode chamar .next() (ninguém de fora bagunça a lista).
  private readonly contatosSubject = new BehaviorSubject<Contato[]>(CONTATOS_INICIAIS);

  // TODO 2 - OBSERVABLES PÚBLICOS (RxJS)
  // As 3 linhas abaixo são PROVISÓRIAS (of(...) cria um Observable "fixo" só para compilar).
  // Troque:
  //   a) contatos$       -> this.contatosSubject.asObservable()   (versão somente leitura do Subject)
  //   b) total$          -> this.contatos$.pipe(map((lista) => lista.length))
  //   c) totalFavoritos$ -> this.contatos$.pipe(map((lista) => lista.filter((contato) => contato.favorito).length))
  // Convenção: o "$" no fim do nome indica "isto é um Observable".
  readonly contatos$: Observable<Contato[]> = of([]);
  readonly total$: Observable<number> = of(0);
  readonly totalFavoritos$: Observable<number> = of(0);

  // Devolve UM contato (ou undefined) e continua avisando se ele mudar. (pronto)
  buscarPorId(id: number): Observable<Contato | undefined> {
    return this.contatos$.pipe(map((lista) => lista.find((contato) => contato.id === id)));
  }

  // TODO 3 - ALTERAR O ESTADO (imutabilidade + .next())
  // Regra de ouro: NUNCA altere o array atual (push/splice). Crie um NOVO array e chame .next(novoArray).
  // O valor atual fica em: this.contatosSubject.value
  adicionar(dados: NovoContato): void {
    // 1. monte "novo: Contato" com ...dados (spread) + id: Date.now() + favorito: false + criadoEm: new Date()
    // 2. this.contatosSubject.next([...lista atual, novo])
  }

  alternarFavorito(id: number): void {
    // use .map(): no contato com o id recebido, devolva { ...contato, favorito: !contato.favorito }
  }

  remover(id: number): void {
    // use .filter(): fique com todos os contatos cujo id é DIFERENTE do recebido
  }
}
