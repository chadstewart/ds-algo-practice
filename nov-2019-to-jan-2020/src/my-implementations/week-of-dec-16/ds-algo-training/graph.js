class LinkedListNode {
    constructor(value, weight = 1) {
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
                } else if(currenNode.value === value) {
                    return `${value} already exists in this list!`;
                } else {
                    currentNode = currentNode.next;
                }
            }

        }

        return `${value} has been inserted into the list`;
    }

    search(value) {
        let currenNode = this.root;

        while(currenNode){
            if(currenNode.value === value) {
                return currenNode;
            } else {
                currenNode = currenNode.next;
            }
        }

        return null;
    }

    returnList() {
        let result = [];
        let currenNode = this.root;

        while(currenNode) {
            result.push(currenNode);
            currentNode = currenNode.next;
        }

        return result;
    }
}

class Graph {
    constructor(isDirected = false) {
        this.adjacencyList = new Map();
        this.isDirected = isDirected;
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, new LinkedListNode());
    }

    addEdges(src, dest, weight = 1) {
        this.adjacencyList.get(src).insert(dest, weight);

        if(this.isDirected) {
            if(this.adjacencyList.get(src) === undefined) {
                this.addVertex(src);
            } else if(this.adjacencyList.get(dest) === undefined) {
                this.addVertex(dest);
            }

            this.adjacencyList.get(dest).insert(src, weight);
        }
    }

    getNeighbors(vertex) {
        return this.adjacencyList.get(vertex).returnList();
    }

    getAllVertices(){
        let result = [];
        
        for(let keys of this.adjacencyList.keys()) {
            result.push(keys);
        }

        return result;
    }
}