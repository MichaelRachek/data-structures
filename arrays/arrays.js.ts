class MyArray {
    private length: number;
    private data: Object;
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;

        return lastItem;
    }

    public delete(index) {
        const lastItem = this.data[index];
        this.shiftItems(index);
        return lastItem;
    }

    public shiftItems(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
    }

    get(index) {
        return this.data[index];
    }

    getData() {
        return this.data;
    }
}

const myArray = new MyArray();
myArray.push('hi11');
myArray.push('h1');
myArray.push('h2');
myArray.push('h3');
myArray.push('h4');
myArray.push('h5');
myArray.push('h6');
myArray.delete(5);
// myArray.pop();
console.log(myArray);
