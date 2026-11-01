import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  valorBusca = '';

  livrosCadastrados = [
    {
      id: 1,
      imagem: 'https://picsum.photos/200',
      titulo: 'JavaScript para Iniciantes',
      autor: 'Ana Souza',
      categoria: 'Programação',
      paginas: 280,
      disponivel: true,
    },
    {
      id: 2,
      imagem: 'https://picsum.photos/200',
      titulo: 'CSS Moderno',
      autor: 'Carlos Lima',
      categoria: 'Web Design',
      paginas: 190,
      disponivel: false,
    },
    {
      id: 3,
      imagem: 'https://picsum.photos/200',
      titulo: 'HTML Essencial',
      autor: 'Fernanda Rocha',
      categoria: 'Programação',
      paginas: 250,
      disponivel: true,
    },
    {
      id: 4,
      imagem: 'https://picsum.photos/200',
      titulo: 'Lógica de Programação',
      autor: 'Marcos Silva',
      categoria: 'Programação',
      paginas: 320,
      disponivel: true,
    },
    {
      id: 5,
      imagem: 'https://picsum.photos/200',
      titulo: 'Banco de Dados',
      autor: 'Juliana Costa',
      categoria: 'Banco de Dados',
      paginas: 410,
      disponivel: false,
    },
    {
      id: 6,
      imagem: 'https://picsum.photos/200',
      titulo: 'Git e GitHub',
      autor: 'Lucas Pereira',
      categoria: 'Ferramentas',
      paginas: 170,
      disponivel: true,
    },
    {
      id: 7,
      imagem: 'https://picsum.photos/200',
      titulo: 'Node.js na Prática',
      autor: 'Eduardo Martins',
      categoria: 'Programação',
      paginas: 360,
      disponivel: true,
    },
    {
      id: 8,
      imagem: 'https://picsum.photos/200',
      titulo: 'UX Design',
      autor: 'Patrícia Alves',
      categoria: 'Design',
      paginas: 220,
      disponivel: false,
    },
    {
      id: 9,
      imagem: 'https://picsum.photos/200',
      titulo: 'Angular Completo',
      autor: 'Roberto Santos',
      categoria: 'Programação',
      paginas: 430,
      disponivel: true,
    },
    {
      id: 10,
      imagem: 'https://picsum.photos/200',
      titulo: 'React para Web',
      autor: 'Camila Ferreira',
      categoria: 'Programação',
      paginas: 390,
      disponivel: true,
    },
  ];
  livrosFiltrados = this.livrosCadastrados;

  buscarLivro() {
    if (this.valorBusca) {
      this.livrosFiltrados = this.livrosCadastrados.filter((livro) =>
        livro.titulo.toUpperCase().includes(this.valorBusca.toUpperCase()));
    } else {
      this.livrosFiltrados = this.livrosCadastrados;
    }
  }
};
