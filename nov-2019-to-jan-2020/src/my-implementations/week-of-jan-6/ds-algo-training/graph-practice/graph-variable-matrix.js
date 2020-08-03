class Graph {
    constructor(isDirected = false) {
        this.adjacenyMatrix = [];
        this.matrixSize = 0;
        this.isDirected = isDirected;
    }

    addVertex() {
        this.adjacencyMatrix[matrixSize] = new Array(matrixSize + 1).fill(0);
        matrixSize++;

        for(let i = 0; i < this.matrixSize - 1; i++) {
            this.adjacencyMatrix[i].push(0);
        }
    }

    addEdge(src, dest, weight = 1) {
        if(src > this.matrixSize - 1 || dest > this.matrixSize - 1) {
            return `This edge is out of scope of this graph`;
        }
        
        this.adjacencyMatrix[src][dest] = weight;

        if(this.isDirected) {
            this.adjacencyMatrix[dest][src] = weight;
        }

        return `this edge has been successfully added`;
    }

    removeEdge(src, dest) {
        if(src > this.matrixSize - 1 || dest > this.matrixSize - 1) {
            return `This edge is out of scope of this graph`;
        }
        
        this.adjacencyMatrix[src][dest] = 0;

        if(this.isDirected) {
            this.adjacencyMatrix[dest][src] = 0;
        }

        return `this edge has been successfully removed`;
    }

    getNeighbors(vertex) {
        return this.adjacencyMatrix[vertex];
    }

    returnGraph() {
        return this.adjacencyMatrix;
    }
}