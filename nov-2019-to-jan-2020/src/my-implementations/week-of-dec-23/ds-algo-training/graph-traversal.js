function dfs(graph, src) {
    let stack = [src];
    let visited = [];
    let result = [];
    let currentNode;

    let getUnvisited = node => {
        return graph.adjacencyList.get(node).returnList().filter(n => {!visited.includes(n)});
    }

    while(stack.length !== 0) {
        currentNode = stack.pop();
        stack.concat(getUnvisited(currentNode));
        visited.push(currentNode);
        result.push(currentNode.value);
    }

    return result;
}

function bfs(graph, src) {
    let queue = [src];
    let visited = [];
    let result = [];
    let currentNode;

    let getUnvisited = node => {
        return graph.adjacencyList.get(node).returnList().filter(n => {!visited.includes(n)});
    }

    while(queue.length !== 0) {
        currentNode = queue.shift();
        stack.concat(getUnvisited(currentNode));
        visited.push(currentNode);
        result.push(currentNode.value);
    }

    return result;
}