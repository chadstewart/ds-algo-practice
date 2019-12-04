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
                if(currentNode.next === null) {
                    currentNode.next = new LinkedListNode(value);

                    return `${value} was inserted into the list successfully!`;
                }

                currentNode = currentNode.next;
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

        return `${value} was not in the list!`;
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

    addEdges(src, dest) {
        this.adjacencyList.get(src).insert(dest);

        if(!this.isDirected){
            this.adjacencyList.get(dest).insert(src);
        }
    }

    getAllVertices() {
        let result = [];
        let getKeys = this.adjacencyList.keys();

        for(let i of getKeys) {
            result.push(i);
        }

        return result;
    }

    printGraph() {
        let getKeys = this.adjacencyList.keys();

        for(let i of getKeys) {
            console.log(`${i}: ${this.adjacencyList.get(i).returnList()}`)
        }
    }
}