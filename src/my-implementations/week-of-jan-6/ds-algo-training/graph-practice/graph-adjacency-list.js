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

        return result;
    }
}

class Graph {
    constructor(isDirected = false) {
        this.adjacenyList = new Map();
        this.isDirected = isDirected;
    }

    addVertex(vertex) {
        return this.adjacenyList.set(vertex, new LinkedList());
    }

    addEdges(src, dest, weight = 1) {
        if(!this.adjacenyList.get(src)) {
            this.addVertex(src);
        }

        if(!this.adjacenyList.get(dest)) {
            this.addVertex(dest);
        }

        this.adjacenyList.get(src).insert(dest, weight);

        if(!isDirected) {
            this.adjacenyList.get(dest).insert(src, weight);
        }

        return `Edge ${src}, ${dest} has been successfully added to this graph!`;
    }

    getNeighbors(vertex) {
        return this.adjacenyList.get(vertex).returnList();
    }

    getAllVertices() {
        let result = [];

        for(let keys of this.adjacenyList.keys()) {
            result.push(keys);
        }

        return result;
    }

    returnGraph() {
        let result = {};
        let vertices = this.getAllVertices();

        for(let i = 0; i < vertices.length; i++) {
            result[vertices[i]] = this.getNeighbors(vertices[i]);
        }

        return result;
    }
}