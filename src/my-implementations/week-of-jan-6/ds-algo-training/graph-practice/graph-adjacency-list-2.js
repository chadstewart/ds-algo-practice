class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.weight = 1;
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
                if(currentNode.value === value) {
                    return `${value} already exists in this list!`;
                } else if(currentNode.next) {
                    currentNode = currentNode.next; 
                } else {
                    currentNode.next = new LinkedListNode(value, weight);
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

class Graph {
    constructor(isDirected = false) {
        this.adjacencyList = new Map();
        this.isDirected = isDirected;
    }

    addVertex(vertex) {
        if(typeof this.adjacencyList.get(vertex) === 'undefined') {
            return `${vertex} already exists in this graph`;
        }

        this.adjacencyList.set(vertex, new LinkedList());
    }

    addEdge(src, dest, weight = 1) {
        let result = [];
        this.addVertex(src);
        this.addVertex(dest);

        result.push(this.adjacencyList.get(src).insert(dest));

        if(!isDirected) {
            result.push(this.adjacencyList.get(dest).insert(dest));
        }

        return result;
    }

    getNeighbors(vertex) {
        return this.adjacencyList.get(vertex).returnList();
    }

    getAllVertices() {
        let result = [];

        for(let keys of this.adjacencyList.keys()) {
            result.push(key);
        }

        return result;
    }
}