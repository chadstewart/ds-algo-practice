function DFSGraph(graph, startVertex) {
    let stack = [];
    let visited = new Set();
    let currentNode;

    stack.push(startVertex);

    while(stack.length !== 0) {
        currentNode = stack.pop();
        let temp = graph.adjacencyList.get(currentNode).returnList().filter(n => !visited.has(n));
        stack = stack.concat(temp);
        visited.add(currentNode);
    } 

    
}