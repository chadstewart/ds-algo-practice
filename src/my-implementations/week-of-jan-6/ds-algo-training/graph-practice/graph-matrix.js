class Graph {
    constructor(matrixSize, isDirected = false) {
        this.adjacenyMatrix = new Array(matrixSize).fill(new Array(matrixSize).fill(0));
        this.matrixSize = matrixSize;
        this.isDirected = isDirected;
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