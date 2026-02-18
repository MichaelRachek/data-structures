class LinkedList {
    private head: {value: any, next: any};
    private tail: {value: any, next: any};
    private length: number;
    constructor(value) {
        this.head = {
            value,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {value, next: null};
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = {value, next: this.head};
        this.head = newNode;
        this.length++;

        return this;
    }

}

const linkedList = new LinkedList(5);
linkedList.append(10);
linkedList.append(15);
linkedList.append(20);
linkedList.append(25);
linkedList.prepend(1);

console.log(linkedList);
