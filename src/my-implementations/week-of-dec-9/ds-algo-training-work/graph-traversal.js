function dfs(graph, src) {
    let stack = [];
    let visited = [];

    stack.push(src);

    while(stack.length !== 0) {
        let currentNode = stack.pop();
        let unvisitedNeighbors = graph.adjacencyList.get(currentNode).returnList().filter(n => {!visited.includes(n)});
        stack.concat(unvisitedNeighbors);
        visited.push[currentNode];
    }
}

function bfs(graph, src) {
    let queue = [];
    let visited = [];

    queue.push(src);

    while(queue.length !== 0) {
        let currentNode = queue.shift();
        let unvisitedNeighbors = graph.adjacencyList.get(currentNode).returnList().filter(n => {!visited.includes(n)});
        queue.concat(unvisitedNeighbors);
        visited.push(currentNode);
    }
}