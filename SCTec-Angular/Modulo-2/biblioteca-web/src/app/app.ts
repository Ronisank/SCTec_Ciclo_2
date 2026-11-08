// import { Component, inject, OnInit, OnDestroy } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { interval, Subscription } from 'rxjs';
// import { CardLivro } from './card-livro/card-livro';
// import { LivroService } from './services/livro-service';

// @Component({
//   imports: [FormsModule],
//   selector: 'app-root',
//   styleUrl: './app.css',
//   templateUrl: './app.html',
// })
// export class App {
//   valorBusca = '';


  // livrosFiltrados = this.livrosCadastrados;

  // buscarLivro() {
  //   if (this.valorBusca) {
  //     this.livrosFiltrados = this.livrosCadastrados.filter((livro) =>
  //       livro.titulo.toUpperCase().includes(this.valorBusca.toUpperCase()));
  //   } else {
  //     this.livrosFiltrados = this.livrosCadastrados;
  //   }
  // }
  
  // private http = inject(HttpClient);
  
  // imagemUrl = '';
  // private timerSubscription?: Subscription;

  // ngOnInit() {
  //   this.buscarCachorro(); // Busca a primeira foto

  //   // Atualiza a foto a cada 5 segundos
  //   // this.timerSubscription = interval(15000).subscribe(() => {
  //   //   this.buscarCachorro();
  //   // });
  // }

  // ngOnDestroy() {
  //   if (this.timerSubscription) {
  //     this.timerSubscription.unsubscribe();
  //   }
  // }

  // buscarCachorro() {
  //   this.http.get<{message: string, status: string}>('https://dog.ceo/api/breeds/image/random')
  //     .subscribe({
  //       next: (resposta) => {
  //         this.imagemUrl = resposta.message;
  //       },
  //       error: (erro) => console.error('Falha ao buscar:', erro)
  //     });
  // }
// };
// app.ts - agora o componente só cuida da TELA. Dados e regras vieram do LivroService.
import { Component, inject } from '@angular/core';   // inject = função que pede uma dependência ao Angular
import { CardLivro } from './card-livro/card-livro';
import { LivroService } from './services/livro-service';

@Component({
  selector: 'app-root',
  imports: [CardLivro],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'Listagem de livros';

  // inject(LivroService): o Angular procura o provider, cria (ou reaproveita) a instância e entrega aqui.
  // Repare: NÃO usamos "new LivroService()". Quem controla a criação é o Angular (Inversão de Controle).
  private livroService = inject(LivroService);

  // Guardamos a referência do SIGNAL; o template o lê com livros().
  livros = this.livroService.livros;

  // O componente apenas DELEGA a ação para o service (sem regra de negócio aqui).
  emprestar(id: number): void {
    this.livroService.emprestar(id);
  }

  devolver(id: number): void {
    this.livroService.devolver(id);
  }
}
