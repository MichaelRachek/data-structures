class HashTable {
    data: Array<any>;
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash;
    }

    set(key, value) {
        const index = this._hash(key);
        if (this.data[index]) {
            console.dir('collision');
            return;
        }
        this.data[index] = [key, value];
    }

    get (key) {
        const index = this._hash(key);
        return this.data[index];
    }

    keys() {
        return Object.keys(this.data);
    }
}

const hashTable = new HashTable(50);
hashTable.set('hello', 100);
hashTable.set('hi', 100);
console.log(hashTable.keys());
