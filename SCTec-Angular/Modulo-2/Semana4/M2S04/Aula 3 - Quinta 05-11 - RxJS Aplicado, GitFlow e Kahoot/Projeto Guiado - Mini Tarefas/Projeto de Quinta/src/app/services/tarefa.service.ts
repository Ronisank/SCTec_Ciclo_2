import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Service, signal } from '@angular/core';
import { catchError, delay, EMPTY, finalize, retry } from 'rxjs';
import { Categoria, Tarefa } from '../models/tarefa';
import { NotificacaoService } from './notificacao-service';

const CHAVE = 'mini-tarefas'; // nome da "gaveta" do localStorage

//! ── BLOCO A · Decorator ─────────────────────────────────────────────────
@Service()

export class TarefaService {

  //! ── BLOCO B · Injeção de dependência

  private readonly http = inject(HttpClient);
  private readonly notificacao = inject(NotificacaoService);

  //! ── BLOCO C · Estado com signals ──────────────────────────────────────
  // ✅ PRONTO. signal = caixinha de valor que AVISA a tela quando muda.
  
  readonly tarefas = signal<Tarefa[]>([]);
  readonly carregando = signal(false);
  readonly erro = signal('');

  //! ── BLOCO D · Valores derivados com computed ──────────────────────────
  
  readonly total = computed(() => this.tarefas().length);
  readonly concluidas = computed(() => this.tarefas().filter((t) => t.concluida).length);
  readonly pendentes = computed(() => this.total() - this.concluidas());

  //! ── BLOCO E · constructor: carrega dados + effect ─────────────────────

  constructor() {
 
    const salvo = localStorage.getItem(CHAVE);
    if (salvo) {
      this.tarefas.set(JSON.parse(salvo) as Tarefa[]);
    } else {
      this.carregar();
    }

    effect(() => {
      localStorage.setItem(CHAVE, JSON.stringify(this.tarefas()));
    });
  }

  //! ── BLOCO F · HttpClient + Observable ─────────────────────────────────

  carregar(): void {
    this.carregando.set(true);
    this.erro.set('');

    this.http
      .get<Tarefa[]>('tarefas.json') // ✅ PRONTO: pede o arquivo public/tarefas.json
      .pipe(
        delay(800), // ✅ PRONTO: atraso de mentira só para ver o
        retry(2),
        catchError(() => {
            this.erro.set('Não foi possível carregar as tarefas.');
            return EMPTY;
        }),
        finalize(()=> this.carregando.set(false)),
        // "Carregando..."

      )
      .subscribe((lista) => this.tarefas.set(lista)); //* ✅ PRONTO: guarda o resultado no signal
  }

  //! ------------------     Ações (sempre IMUTÁVEIS) ───────────────────────────────
  //? Regra de ouro: nunca altere o array direto (nada de push). Crie um array NOVO
  //? com  update(lista => novaLista).  Só assim a tela percebe a mudança.
  //! --------------------------------------------------------------------------------

  adicionar(titulo: string, categoria: Categoria): void {

    const nova: Tarefa = { id: Date.now(), titulo, categoria, concluida: false };
    this.tarefas.update((lista) => [...lista, nova]);
    this.notificacao.avisar(`Tarefa "${titulo}" adicionada!`);
  }

  alternar(id: number): void {
    this.tarefas.update((lista) =>lista.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t)),);
  }

  remover(id: number): void {
    this.tarefas.update((lista) => lista.filter((t) => t.id !== id));
    this.notificacao.avisar('Tarefa removida.');
  }
}
