function depthFirstSearchGraph(graph, startVertex) {
    let stack = [];
    let visited = new Set();
    let currentNode;
    let result = [];

    stack.push(startVertex);

    while(stack.length !== 0) {
        currentNode = stack.pop();
        let temp = graph.adjacencyList.get(currentNode).returnList().filter(n => !visited.has(n));
        stack = stack.concat(temp);
        visited.add(currentNode);
        result.push(currentNode);
    }

    return result;

}

function breathFirstSearchGraph(graph, startVertex) {
    let queue = [];
    let visited = new Set();
    let currentNode;
    let result = [];

    queue.push(startVertex);

    while(queue.length !== 0) {
        currentNode = queue.shift();
        let temp = graph.adjacencyList.get(currentNode).returnList().filter(n => !visited.has(n));
        queue = queue.concat(temp);
        visited.add(currentNode)
        result.push(currentNode);
    }

    return result;
    
}