class Fila {
    constructor(){
        this.count = 0;

        this.lowestCount = 0;

        this.items = {};
    }

    enfileirar(elemento){
        this.items[this.count] = elemento;
        this.count++;
    }

    size(){
        return this.count -this.lowestCount;
    }

    filaEstaVazia(){
        return this.size()===0;
    }

    desinfileirar(){
        if (this.filaEstaVazia()){
            return undefined;
        }

        const result = this.items[this.lowestCount];
        
        delete this.items[this.lowestCount];

        this.lowestCount++;

        return result;
    }

    peek(){
        if (this.filaEstaVazia()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    clear(){
        this.items = {}
        this.count = 0;
        this.lowestCount = 0;
    }

    print(){
        if (this.filaEstaVazia()){
            return console.log('A fila está vazia: ');
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount+1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`;
        }
        return objString;
    }
}

const fila = new Fila();
console.log('A fila está vazia? ', fila.filaEstaVazia());

fila.enfileirar('Arthur Rodrigues');
fila.enfileirar('Daniel');
fila.enfileirar('Felipe');
fila.enfileirar('Arthur Amorim');

console.log(`A fila possui as pessoas: ${fila.print()}.`);
console.log(`A fila possui ${fila.size()} pessoas.`);

console.log(`Atendendo a pessoa ${fila.desinfileirar()}.`);
console.log(`Atendendo a pessoa ${fila.desinfileirar()}.`);
console.log(`Atendendo a pessoa ${fila.desinfileirar()}.`);
console.log(`Atendendo a pessoa ${fila.desinfileirar()}.`);

console.log('A fila está vazia? ', fila.filaEstaVazia());
fila.enfileirar('Claudia');
fila.enfileirar('Claudio');
fila.enfileirar('Clebio');
console.log(`A fila possui as pessoas: ${fila.print()}.`);
fila.clear();
console.log('A fila está vazia? ', fila.filaEstaVazia());