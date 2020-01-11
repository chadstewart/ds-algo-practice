class Graph {
    constructor(numOfNodes, isDirected = false) {
        this.adjacencyMatrix = new Array(numOfNodes).fill(new Array(numOfNodes).fill(0));
        this.numOfNodes = numOfNodes;
        this.isDirected = isDirected;
    }

    addEdge(src, dest, weight = 1) {
        if(src >= this.numOfNodes || dest >= this.numOfNodes) {
            return `${src} or ${dest} is out of this graph's range!`;
        }

        this.adjacencyMatrix[src][dest] = weight;

        if(!isDirected) {
            this.adjacencyMatrix[dest][src] = weight;
        }

        return `Edge ${src}, ${dest} has been successfully added to the graph!`;
    }

    getNeighbors(vertex) {
        let result = [];
        let list = this.adjacencyMatrix[vertex];

        for(let i = 0; i < list; i++) {
            list[i] > 0 && result.push([i, list[i]]);
        }

        return result;
    }
}