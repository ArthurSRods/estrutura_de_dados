class Set {
    constructor(){
        this.items = {}
    }


    has(element){
        return element in this.items;
    }

    hasOther(element){
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    add(element){
        if (!this.has(element)){
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element){
        if (this.has(element)){
            delete this.items[element];
            return true;
        }
        return false;
    }
}

const conjunto = new Set();

conjunto.add(1);
conjunto.add(2);
conjunto.add(3);
conjunto.add(4);
conjunto.add(5);
conjunto.add(6);

console.log(conjunto);

conjunto.delete(4);

console.log(conjunto);

conjunto.delete(1);

console.log(conjunto);
