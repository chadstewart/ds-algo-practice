class LinkedListNode {
    constructor(value = NULL) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = NULL;
    }

    insert(value) {
        if (this.head = NULL) {
            this.head = new LinkedListNode(value);
        } else {
            let currentNode = this.head;
            
            while(currentNode){
                if(currentNode.next === NULL) {
                    currentNode.next = new LinkedListNode(value);
                    return `${value} was successfully added to list!`;
                }
                if(currentNode.value === value) {
                    return `${value} is already in the list!`;
                }
                currentNode = currentNode.next;
            }
        }
    }

    search(value) {
        let currentNode = this.head;

        while(currentNode){
            if(currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return `${value} was not in the list!`;
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

}

class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.adjacencyList = new Map();
    }

    addVertex(vertex){
        this.adjacencyList.set(vertex, new LinkedList());
    }

    addEdge(src, dest){
        this.adjacencyList.get(src).insert(dest);

        if(!this.isDirected) {
            this.adjacencyList.get(dest).insert(src);
        }
    }

    allVertices() {
        let result = [];
        let getKeys = this.adjacencyList.keys();

        for (let i of getKeys){
            result.push(getKeys.next().value[0]);
        }

        return result;

    }

    printGraph() {
        let getKeys = this.adjacencyList.keys();

        for (let i of getKeys){
            let getValues = this.adjacencyList.get(i);
            let conc = "";

            for (var j of getValues) {
                conc += j + " ";
            }
  
            console.log(i + " -> " + conc); 
        }
    }

}