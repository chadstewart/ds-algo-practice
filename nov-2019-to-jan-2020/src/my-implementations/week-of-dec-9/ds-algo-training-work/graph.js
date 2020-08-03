class LinkedListNode {
    constructor(value, weight) {
        this.value = value;
        this.weight = weight;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
    }

    insert(value, weight = 1) {
        if(this.root === null) {
            this.root = new LinkedListNode(value, weight);
        } else {
            let currentNode = this.root;

            while(currentNode) {
                if(currentNode.next === null) {
                    currentNode.next = new LinkedListNode(value, weight);
                    currentNode = null;
                } else if (this.root.value === value) {
                    return `${value} already exists in the list!`;
                }

                currentNode = currentNode.next;
            }

            return `${value} was successfully inserted into the list!`;
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

        return `${value} does not exist in this array!`;
    }

    returnList() {
        let result = [];
        let currentNode = this.root;

        while(currentNode) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return result;
    }
}

class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, new LinkedList());
    }

    addEdge(src, dest) {
        if(this.adjacencyList.get(src) === undefined) {
            return `${src} is not a vertex in this graph!`;
        }
        
        if(this.adjacencyList.get(dest) === undefined) {
            return `${dest} is not a vertex in this graph!`;
        }

        this.adjacencyList.get(src).insert(dest);

        if(!isDirected) {
            this.adjacencyList.get(dest).insert(src);
        }
    }

    getNeighbors(vertex) {
        return this.adjacencyList.get(vertex).returnList();
    }

    getAllVertices() {
        let result = [];
        let keys = this.adjacencyList.keys();

        for(let key of keys) {
            result.push(key);
        }

        return result;
    }
}