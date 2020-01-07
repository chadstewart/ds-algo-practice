function dfs(src, graph) {
    let result = [];
    let stack = [src];
    let visited = [];

    let getUnvisited = node => {
        return graph.adjacencyList.get(node).returnList().filter(n => !visited.includes(n));
    }

    while(stack.length !== 0) {
        let currentNode = stack.pop();
        stack.concat(getUnvisited(currentNode));
        visited.push(currentNode);
        result.push(currentNode);
    }

    return result;
}

function bfs(src, graph) {
    let result = [];
    let queue = [src];
    let visited = [];

    let getUnvisited = node => {
        return graph.adjacencyList.get(node).returnList().filter(n => !visited.includes(n));
    }

    while(queue.length !== 0) {
        let currentNode = queue.shift();
        stack.concat(getUnvisited(currentNode));
        visited.push(currentNode);
        result.push(currentNode);
    }

    return result;
}