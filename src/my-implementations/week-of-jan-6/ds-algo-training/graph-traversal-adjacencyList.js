function dfs(src, graph) {
    let stack = [src];
    let visited = [];

    let getUnvisited = node => {
        return graph.adjacencyList.get(node).returnList().filter(n => !visited.includes(n));
    }

    while(stack.length !== 0) {
        let currentNode = stack.pop();
        stack = stack.concat(getUnvisited(currentNode));
        visited.push(currentNode);
    }

    return visited;
}

function bfs(src, graph) {
    let queue = [src];
    let visited = [];

    let getUnvisited = node => {
        return graph.adjacencyList.get(node).returnList().filter(n => !visited.includes(n));
    }

    while(queue.length !== 0) {
        let currentNode = queue.shift();
        stack = stack.concat(getUnvisited(currentNode));
        visited.push(currentNode);
    }

    return visited;
}