/**
 * DEQUE é uma espécie de FILA com inserção e remoção
 * de elementos no início e no final da Fila (DEQUE)
 * 
 * Primeiro vamos  declarar a classe Deque e seu construtor
 * */ 
class Deque { // início da classe
    // método construtor com 3 propriedades (variáveis)
    constructor() {
        this.count = 0; // para contar os elementos do Deque
        this.lowestCount = 0; // identificar o primeiro elemento
        this.items= {}; // elementos do Deque
    }

    // adiciona um novo elemento na frente do Deque
    addFront(element) {
        // primeiro cenário verifica se o Deque está vazio
        if (this.isEmpty()){
            // neste caso chamamos o 
            // método addBack (no final do Deque)
            this.addBack(element); 
        } else if (this.lowestCount > 0) {
            // o elemento é inserido da frente do Deque
            this.lowestCount--;
            this.items[this.lowestCount] = element;
               } else {
                    /**
                     * se lowestCount é igual a zero e para
                     * adicionar um novo elemento na primeira
                     * posição, devemos mover para a próxima
                     * posição e deixar o primeiro index livre
                     */
                     for (let i = this.count; i > 0; i--){
                        this.items[i] = this.items[i - 1];
                     }
                     this.count++;
                     this.lowestCount = 0;
                     this.items[0] = element;
               }       
    }
    // adiciona um novo elemento no fim do Deque
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    }
    // remove o primeiro elemento do Deque
    removeFront(){
        // verifica primeiro se o Degue está vazio
        if (this.isEmpty()){
            return undefined;
        }
        // armazenando em uma variável auxiliar
        // o valor da frente da fila que será removido
        const result = this.items[this.lowestCount];
        // agora iremos remover o elemento da frente do Deque
        delete this.items[this.lowestCount];
        // será necessário atualizar a propriedade lowestCount
        this.lowestCount++;
        return result;
    }
    // remove o último elemento do Deque
    removeBack(){
        // primeiro verificando se o Deque está vazio
        if (this.isEmpty()){
            return undefined;
        }
        // primeiro incrementando para encontrar o endereço
        // do final (tail) do Deque
        this.count--;;
        // guardando o elemento que será removido 
        // em uma variável auxiliar
        const result = this.items[this.count];
        // removendo efetivamente o elemento da cauda do Deque
        delete this.items[this.count];
        // devolvendo o elemento que foi removido
        return result;
    }
    // devolve o primeiro (head-cabeça) elemento do Deque
    peekFront(){
        // verificando primeiramente se o Deque está vazio
        if (this.isEmpty()){
            return undefined;
        }
        // devolve o elemento da cabeça (head) do Deque
        return this.items[this.lowestCount]; 
    }
    // devolve o último (tail-cauda) elemento do Deque
    peekBack(){
        return this.items[this.items.length - 1];
    }
    // para retornar o tamanho(qtde elementos) do Deque
    size(){
        // a diferença entre o endereço do último - primeiro 
        return this.count - this.lowestCount;
    }
    // verifica se o Deque está vazio
    isEmpty(){
        return this.size() === 0;
    }
    // apresenta (imprime) o conteúdo do Deque na console
    toString(){
        // primeiro verifica se o Deque está vazio
        if (this.isEmpty()){
           return `O deque ${this.items} está vazio!`;
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; 
             i < this.count; 
             i++){
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
} // final da classe

/**
 * Agora iremos instanciar um novo objeto e testar todos
 * os métodos implementados da classe Deque.
 * 
 * */
const deque = new Deque();

//verificando se o deque está vazio
console.log(`O Deque está vazio? ${deque.isEmpty()}`);
// adicionando elementos no final do Deque
deque.addBack('Fábio');
deque.addBack('Rodrigo');
deque.addBack('Mariana');
console.log(`O tamanho do Deque: ${deque.size()} elementos.`);

// imprimindo o Deque com os elementos adicionados
console.log(deque.toString()); // Fábio, Rodrigo, Mariana

// adicionando elemento no final do Deque
deque.addFront('Camila');
console.log(deque.toString()); // Fábio, Rodrigo, Mariana, Camila

//verificando novamente se o deque está vazio
console.log(`O Deque está vazio? ${deque.isEmpty()}`);

// removendo um elemento do final (Back) do Deque
deque.removeBack();
console.log(deque.toString()); // Camila, Fábio, Rodrigo

// removendo um elemento da frente do Deque
deque.removeFront();
console.log(deque.toString()); // Fábio, Rodrigo

// adicionando novamente na frente (início) do Deque
deque.addFront("Pedro");
console.log(deque.toString()); // Pedro, Fábio, Rodrigo

// adicionando novamente no final (back) do Deque (Fila)
deque.addBack("João");
console.log(deque.toString()); // Pedro, Fábio, Rodrigo, João

// mostrando novamente o tamanho do Deque (Fila de duas pontas)
console.log(`O tamanho do Deque: ${deque.size()} elementos.`);