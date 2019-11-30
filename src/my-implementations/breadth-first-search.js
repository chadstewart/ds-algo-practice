function BFSGraph (graph, startVertex) {
    let queue = [];
    let visited = new Set();
    let currentNode;

    queue.push(startVertex);

    while(queue.length !== 0) {
        currentNode = queue.shift();
        let temp = graph.adjacencyList.get(currentNode).returnList().filter(n => !visited.has(n));
        queue = queue.concat(temp);
        visited.add(currentNode);
    }
}