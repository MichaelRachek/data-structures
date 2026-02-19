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

    insert(position, value) {
        if (position >= this.length) {
            return this.append(value);
        } else if (!this.length) {
            this.append(value);
        }

        const newNode = {value, next: null};
        const leader = this.traverseToIndex(position - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;

    }

    traverseToIndex(index) {
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    printList() {
        const arr = [];
        let current = this.head;
        while (current !== null) {
            arr.push(current.value);
            current = current.next;
        }

        return arr;
    }


    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const deletedNode = leader.next;
        leader.next = deletedNode.next;
        this.length--;
    }

}

const linkedList = new LinkedList(5);
linkedList.append(10);
linkedList.append(15);
linkedList.append(20);
linkedList.append(25);
linkedList.prepend(1);
linkedList.remove(2);
// linkedList.insert(1, 99);
// linkedList.insert(3, 100);
// linkedList.insert(5, 101);

console.log(linkedList.printList());
