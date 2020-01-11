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
        } else {
            let currentNode = this.root;

            while(currentNode) {
                if(currentNode.value === value) {
                    return `${value} already exists in this list!`;
                } else if(currentNode.next) {
                    currentNode = currentNode.next; 
                } else {
                    currentNode.next = new LinkedListNode(value);
                    break;
                }
            }
        }

        return `${value} was successfully added to the list!`;
    }

    search(value) {
        let currentNode = this.root;

        while(currentNode) {
            if(currentNode.value === value) {
                return currentNode;
            } else {
                currentNode = currentNode.next;
            }
        }

        return `${value} was not found in this list!`;
    }

    returnList() {
        let result = [];
        let currentNode = this.root;

        while(currentNode) {
            result.push([currentNode.value, currentNode.weight]);
            currentNode = currentNode.next;
        }

        return currentNode;
    }
}

const  DEFAULT_TABLE_SIZE = 32;

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
        const key = hash(value);

        if(this.hashTable[key] === null) {
            this.hashTable[key] = new LinkedList();
        }

        return this.hashTable[key].insert(value);
    }

    search(value) {
        const key = hash(value);

        if(this.hashTable[key] === null) {
            return `${value} does not appear in this hash table!`;
        }

        return this.hashTable[key].search(value);
    }
}