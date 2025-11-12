class Stack {

    constructor() {
        // onde os elementos da pilha serão armazenados
        this.items = [];
    }

    empilha(elemento) {
        // adiciona um elemento no topo da pilha
        this.items.push(elemento);
    }

    remove() {
        // remove um elemento do topo da pilha
        return this.items.pop();
    }

    devolveElementoTopo() {
        // devolve o elemento do topo da pilha
        return this.items[this.items.length - 1];
    }

    pilhaEstaVazia() {
        // informa se a pilha está vazia
        return this.items.length === 0;
    }

    limpaPilha() {
        // método para limpar a pilha
        this.items = [];
    }

    tamanhoPilha() {
        // devolve o tamanho (qtd de elementos) da pilha
        return this.items.length; 
    }

    print() {
        // imprime os elementos da pilha
        console.log(this.items);
    }
}

// Exemplo de uso
const pilha = new Stack();

console.log(pilha.pilhaEstaVazia()); // true

pilha.empilha(1);
pilha.empilha(2);
pilha.empilha(3);
pilha.empilha(4);
pilha.empilha(5);

pilha.print(); // [1, 2, 3, 4, 5]

console.log(pilha.devolveElementoTopo()); // 5
console.log(pilha.remove()); // 5
pilha.print(); // [1, 2, 3, 4]
