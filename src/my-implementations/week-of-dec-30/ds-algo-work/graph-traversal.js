function bfs(graph, src) {
    let queue = [src];
    let visited = [];
    let result = []

    const getUnvisited = node => {
        return graph.adjacencyList
                    .get(node)
                    .returnList()
                    .filter(n => {!visited.includes(n)});
    };

    while(queue.length !== 0) {
        let currentNode = queue.shift();
        queue.concat(getUnvisited(currentNode));
        visited.push(currentNode);
        result.push(currentNode.value);
    }

    return result;
}

function dfs(graph, src) {
    let stack = [src];
    let visited = [];
    let result = [];

    const getUnvisited = node => {
        return graph.adjacencyList
                    .get(node)
                    .returnList()
                    .filter(n => {!visited.includes(n)});
    };

    while(stack.length !== 0) {
        let currentNode = stack.pop();
        stack.concat(getUnvisited(currentNode));
        visited.push(currentNode);
        result.push(currentNode.value);
    }

    return result;
}