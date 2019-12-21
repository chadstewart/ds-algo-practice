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
        let currentNode = this.root;

        if(this.root === null) {
            this.root = new LinkedListNode(value);
        } else {

            while(currentNode) {
                if (currentNode.value === value) {
                    return `${value} already exists in this list!`;
                } else if(currentNode.next === null) {
                    currentNode.next = new LinkedListNode(value);
                    return `${value} has been successfully inserted into list!`;
                }

                currentNode = currentNode.next;
            }
        }
    }

    search(value) {
        let currentNode = this.root;

        while(currentNode) {
            if(currentNode.value === value) {
                return currentNode
            } else {
                currentNode = currentNode.value;
            }
        }

        return `${value} does not exist in this list!`;
    }
}

DEFAULT_TABLE_SIZE = 32;

class HashTable {
    constructor(tableSize = DEFAULT_TABLE_SIZE) {
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
        let key = hash(value);

        if(this.hashTable[key] === null) {
            this.hashTable[key] = new LinkedList();
        }
        
        return this.hashTable[key].insert(value);
    }

    search(value) {
        let key = hash(value);

        if(this.hashTable === null) {
            return `${value} does not exist in this table!`;
        }

        return this.hashTable[key].search(value);
    }

}