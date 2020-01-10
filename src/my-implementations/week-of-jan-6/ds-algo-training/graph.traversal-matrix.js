function bfs(graph, src) {
    let queue = [src];
    let visited = [];

    while(queue.length > 0) {
        let currentNode = [queue.shift()];
        let neighbors = graph.getNeighbors(currentNode);

        for(let i = 0; i < neighbors; i++) {
            neighbors[i] > 0 && !visited.includes(i) && queue.push(i);
        }

        visited.push(currentNode);        
    }

    return visited;
}

function dfs(graph, src) {
    let stack = [src];
    let visited = [];

    while(queue.length > 0) {
        let currentNode = [stack.pop()];
        let neighbors = graph.getNeighbors(currentNode);

        for(let i = 0; i < neighbors; i++) {
            neighbors[i] > 0 && !visited.includes(i) && stack.push(i);
        }

        visited.push(currentNode);        
    }

    return visited;
}