function bfs(graph, src) {
    let queue = [src];
    let visited = [];

    let getUnvisited = node => {
        return graph.adjacenyList.get(node).returnList().filter(n => !visited.includes(n));
    };

    while(queue.length) {
        let currentNode = queue.shift();
        queue = queue.concat(getUnvisited(currentNode));
        visited.push(currentNode);
    }

    return visited;
}

function dfs(graph, src) {
    let stack = [src];
    let visited = [];

    let getUnvisited = node => {
        return graph.adjacenyList.get(node).returnList().filter(n => !visited.includes(n));
    };

    while(stack.length) {
        let currentNode = stack.pop();
        stack = stack.concat(getUnvisited(currentNode));
        visited.push(currentNode);
    }

    return visited;
}