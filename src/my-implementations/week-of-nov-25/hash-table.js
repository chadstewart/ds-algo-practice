class LinkedListNode {
    constructor(value = null) {
        this.value = value;
        this.next = NULL;
    }
}

class LinkedList {
    constructor() {
        this.head = NULL;
    }

    insert(value) {
        if(this.head === NULL) {
            this.head = new LinkedListNode(value);
        } else {
            let currentNode = this.head;

            while(currentNode){
                if(currentNode.next === NULL) {
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
            return `${value} does not exist in the list to be removed!`
        } else if (this.head === currentNode) {
            this.head = currentNode.next;
        } else if (currentNode.next === NULL) {
            delete currentNode;
        } else if (currentNode.next !== NULL) {
            let temp = this.head;

            while(temp) {
                if(temp.next === currentNode) {
                    temp.next = currentNode.next;
                }

                temp = temp.next;
            }
        }

        return `${value} was removed successfully!`
    }

    returnList () {
        list = [];
        let currentNode = this.head;

        while(currentNode){
            list.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return list;
    }

    isEmpty() {
        return this.head === NULL;
    }
}

const DEFAULT_TABLE_SIZE = 32;

class HashTable {
    constructor(tableSize = DEFAULT_TABLE_SIZE) {
        this.tableSize = tableSize;
        this.hashTable = Array(this.tableSize).fill(NULL);
        this.fillCapacity = 0;

        this.toStrFn = (item) => {
            if (item === null) {
              return 'NULL';
            } if (item === undefined) {
              return 'UNDEFINED';
            } if (typeof item === 'string' || item instanceof String) {
              return `${item}`;
            }

            return item.toString();
        }

    }

    hash(key) {
        if (typeof key === 'number') {
        return key % this.tableSize;
        }
        const tableKey = this.toStrFn(key);
        let hash = 0;
        for (let i = 0; i < tableKey.length; i++) {
        hash += tableKey.charCodeAt(i);
        }

        return hash % this.tableSize;
    }

    checkForResize() {

        if(Math.round(this.fillCapacity / this.tableSize) * 100 === 70) {
            this.tableSize = (this.tableSize * 4);
            let temp = this.hashTable;
            this.hashTable = Array(this.tableSize).fill(NULL);
            let tempList = [];

            for(let i = 0; i < temp.length; i++){

                if(temp[i] !== NULL) {
                    tempList = temp[i].returnList();
                }

                for(let j = 0; j < tempList.length; j++) {
                    insert(tempList[j].pop());
                }

            }

            delete temp;
        }
    
    }

    insert(value) {
        let keyHash = hash(value);

        if(this.hashTable[keyHash] === NULL) {
            this.hashTable[keyHash] = new LinkedList();
            this.hashTable.insert(value);
            this.fillCapacity++;
        } else {
            if(typeof this.hashTable[keyHash].search(value) !== 'string') {
                return `${value} already exists in the hash table!`;
            }

            this.hashTable[keyHash].insert(value);
            this.fillCapacity++;
        }

        checkForResize();

    }

    search(value) {
        let keyHash = hash(value);

        if(this.hashTable[keyHash] === NULL) {
            return `${value} does not exist in the hash table!`
        } else {
            return this.hashTable[keyHash].search(value);
        }
    }

    remove(value) {
        let keyHash = hash(value);

        if(this.hashTable[keyHash] === NULL) {
            return `${value} does not exist in the hash table!`
        } else {
            let removeCheck = this.hashTable[keyHash].remove(value);

            if(removeCheck === `${value} was removed successfully!` &&
               this.hashTable[keyHash].isEmpty()) {
                this.hashTable[keyHash] = NULL;
            }

            this.fillCapacity--;
        }
    }

}