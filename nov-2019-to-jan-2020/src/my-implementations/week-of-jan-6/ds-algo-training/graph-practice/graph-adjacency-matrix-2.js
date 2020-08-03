class Graph {
    constructor(numOfNodes, isDirected = false) {
        this.adjacencyMatrix = new Array(numofNodes).fill(new Array(numOfNodes).fill(0));
        this.numOfNodes = numOfNodes;
        this.isDirected = isDirected;
    }

    addEdge(src, dest, weight = 1) {
        if(src >= numOfNodes || dest >= numOfNodes) {
            return `${src} and ${dest} are outside the range of the graph!`;
        }

        this.adjacencyMatrix[src][dest] = weight;

        if(!isDirected) {
            this.adjacencyMatrix[dest][src] = weight;
        }
    }

    getNeighbors(vertex) {
        return this.adjacencyMatrix[vertex];
    }

    returnGraph() {
        return this.adjacencyMatrix;
    }
}