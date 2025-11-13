// Classe que representa um nó da lista
class Node {
  constructor(nome, nota, status) {
    this.nome = nome;
    this.nota = nota;
    this.status = status; // "ativa" ou "cancelada"
    this.next = null;
  }
}

// Classe LinkedList
class ListaDeChamada {
  constructor() {
    this.head = null;
    this.tamanho = 0;
    this.LIMITE = 40;
  }

  // Método para incluir aluno
  incluirAluno(nome, nota, status) {
    if (this.tamanho >= this.LIMITE) {
      console.log("Limite máximo de 40 alunos atingido!");
      return;
    }

    const novoAluno = new Node(nome, nota, status);

    if (!this.head) {
      this.head = novoAluno;
    } else {
      let atual = this.head;
      while (atual.next) {
        atual = atual.next;
      }
      atual.next = novoAluno;
    }

    this.tamanho++;
  }

  // Método para excluir aluno pelo nome
  excluirAluno(nome) {
    if (!this.head) {
      console.log("A lista está vazia!");
      return;
    }

    // Caso o primeiro seja o removido
    if (this.head.nome === nome) {
      this.head = this.head.next;
      this.tamanho--;
      console.log(`Aluno ${nome} removido.`);
      return;
    }

    let atual = this.head;
    let anterior = null;

    while (atual && atual.nome !== nome) {
      anterior = atual;
      atual = atual.next;
    }

    if (!atual) {
      console.log(`Aluno ${nome} não encontrado.`);
      return;
    }

    anterior.next = atual.next;
    this.tamanho--;
    console.log(`Aluno ${nome} removido.`);
  }

  // Método para ordenar por nota decrescente (Bubble Sort adaptado)
  ordenarPorNotaDecrescente() {
    if (!this.head || !this.head.next) return;

    let trocou;
    do {
      trocou = false;
      let atual = this.head;
      while (atual.next) {
        if (atual.nota < atual.next.nota) {
          // Troca os dados (não os nós)
          [atual.nome, atual.next.nome] = [atual.next.nome, atual.nome];
          [atual.nota, atual.next.nota] = [atual.next.nota, atual.nota];
          [atual.status, atual.next.status] = [atual.next.status, atual.status];
          trocou = true;
        }
        atual = atual.next;
      }
    } while (trocou);
  }

  // Método para apresentar todos os alunos
  listarTodos() {
    if (!this.head) {
      console.log("Lista vazia.");
      return;
    }

    console.log("=== Lista de Chamada ===");
    let atual = this.head;
    while (atual) {
      console.log(
        `Nome: ${atual.nome} | Nota: ${atual.nota} | Matrícula: ${atual.status}`
      );
      atual = atual.next;
    }
  }

  // Método para apresentar apenas alunos com matrícula ativa
  listarAtivos() {
    if (!this.head) {
      console.log("Lista vazia.");
      return;
    }

    console.log("=== Alunos com matrícula ativa ===");
    let atual = this.head;
    while (atual) {
      if (atual.status === "ativa") {
        console.log(
          `Nome: ${atual.nome} | Nota: ${atual.nota} | Matrícula: ${atual.status}`
        );
      }
      atual = atual.next;
    }
  }

  // Contadores
  totalAlunos() {
    console.log(`Total de alunos: ${this.tamanho}`);
  }

  totalAtivos() {
    let atual = this.head;
    let count = 0;
    while (atual) {
      if (atual.status === "ativa") count++;
      atual = atual.next;
    }
    console.log(`Total de alunos com matrícula ativa: ${count}`);
  }
}

// -------------------------
// Demonstração de uso
// -------------------------
const lista = new ListaDeChamada();

lista.incluirAluno("Ana", 8.5, "ativa");
lista.incluirAluno("Bruno", 7.2, "cancelada");
lista.incluirAluno("Carlos", 9.1, "ativa");
lista.incluirAluno("Daniela", 6.8, "ativa");

console.log("\n--- Lista original ---");
lista.listarTodos();

console.log("\n--- Ordenando por nota decrescente ---");
lista.ordenarPorNotaDecrescente();
lista.listarTodos();

console.log("\n--- Removendo aluno Bruno ---");
lista.excluirAluno("Bruno");
lista.listarTodos();

console.log("\n--- Relação total e ativos ---");
lista.totalAlunos();
lista.totalAtivos();

console.log("\n--- Listando apenas alunos ativos ---");
lista.listarAtivos();
