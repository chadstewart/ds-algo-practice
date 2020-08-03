class Graph {
    constructor(numofNodes, isDirected = false) {
        this.adjacenyMatrix = new Array(numofNodes).fill(new Array(numofNodes).fill(0));
        this.numofNodes = numOfNodes;
        this.isDirected = isDirected;
    }

    addEdge(src, dest, weight = 1) {
        if(src > this.numOfNodes - 1 || dest > this.numofNodes - 1) {
            return `${src} or ${dest} is out of scope of this graph containing ${this.numofNodes} nodes`;
        }

        this.adjacenyMatrix[src][dest] = weight;

        if(!isDirected) {
            this.adjacenyMatrix[dest][src];
        }

        return `Edge has been successfully added to graph!`;
    }

    getNeighbors(vertex) {
        return this.adjacenyMatrix[vertex];
    }

    getGraph() {
        return this.adjacenyMatrix;
    }
}