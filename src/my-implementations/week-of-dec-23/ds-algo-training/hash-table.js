class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if(this.root === null) {
            this.root = new LinkedListNode(value);
            return `${value} has been successfully inserted into array!`;
        } else {
            let currentNode = this.root;

            while(currentNode) {
                if(currentNode.value === value) {
                    return `${value} already exists in this list!`;
                } else if(currentNode.next === null) {
                    currentNode.next = new LinkedListNode(value);
                    return `${value} has been successfully inserted into array!`;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }
    }

    search(value) {
        let currentNode = this.root;

        while(currentNode) {
            if(currentNode.value === value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return `${value} is not currently in this list!`;
    }
}

const DEFAULT_TABLE_SIZE = 32;

class HashTable {
    constructor(tableSize = DEFAULT_TABLE_SIZE){
        this.hashTable = new Array(tableSize).fill(null);
        this.tableSize = tableSize;
    }

    hash(key) {
        const H   = 37;
        let total = 0;
    
        for (var i = 0; i < key.length; i++) {
          total += H * total + key.charCodeAt(i);
        }
        total %= this.tableSize;
        if (total < 1) {
          this.tableSize--;
        }
        return parseInt(total);
    }

    insert(value) {
        const KEY = this.hash(value.toString());

        if(this.hashTable[KEY] === null) {
            this.hashTable[KEY] = new LinkedList();
        }

        return this.hashTable[KEY].insert(value);
    }

    search(value) {
        const KEY = this.hash(value.toString());

        if(this.hashTable[KEY] === null) {
            return `${value} does not exist in this table!`;
        }

        return this.hashTable[KEY].search(value);
    }
}