class LinkedListNode {
    constructor(value = null) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        if(this.head === null) {
            this.head = new LinkedListNode(value);
        } else {
            let currentNode = this.head;

            while(currentNode){
                if(currentNode.next === null) {
                    currentNode.next = new LinkedListNode(value);
                    return `${value} successfully inserted into list!`;
                }

                currentNode = currentNode.next;
            }
        }
    }

    search(value) {
        let currentNode = this.head;

        while(currentNode) {
            if(currentNode === value){
                return currentNode;
            } else {
                currentNode = currentNode.next;
            }
        }

        return `${value} is not in the list!`;
    }

    remove(value) {
        let currentNode = search(value);

        if(typeof currentNode === 'string') {
            return currentNode;
        } else if (this.head === currentNode) {
            this.head = currentNode.next;
        } else {
            let temp = this.head;

            while(temp) {
                if(temp.next === currentNode) {
                    if (currentNode.next === null) {
                        temp.next = null;
                    } else {
                        temp.next = currentNode.next;
                    }

                    return `${value} was removed successfully!`
                }

                temp = temp.next;
            }
        }
    }

    returnList () {
        let list = [];
        let currentNode = this.head;

        while(currentNode){
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return list;
    }

    isEmpty() {
        return this.head === null;
    }
}

const DEFAULT_TABLE_SIZE = 32;

class HashTable {
    constructor(tableSize = DEFAULT_TABLE_SIZE) {
        this.tableSize = tableSize;
        this.hashtable = new Array(this.tableSize).fill(null);
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

    insert(key, value) {
        let hash = hash(key);

        if(this.hashtable[hash] === null) {
            this.hashtable[hash] = new LinkedList();
            this.hashtable[hash].insert(value);
        } else {
            if(typeof this.hashTable[keyHash].search(value) !== 'string') {
                return `${value} already exists in the hash table!`;
            }
            
            this.hashtable[hash].insert(value);
        }
    }

    search(key, value) {
        let hash = hash(key);

        if(this.hashtable[hash] === null) {
            return `${key} does not appear in this hash table!`;
        } else {
            return this.hashtable[hash].search(value);
        }
    }
}