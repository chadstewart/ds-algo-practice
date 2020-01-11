function bfs(graph, src) {
    let queue = [src];
    let visited = [];

    while(queue.length) {
        let currentNode = queue.shift();
        let list = graph.adjacenyMatrix[currentNode];

        for(let i = 0; i < list; i++) {
            list[i] > 0 && !visited.includes(i) && queue.push(i);
        }

        visited.push(currentNode);
    }

    return visited;
}

function dfs(graph, src) {
    let stack = [src];
    let visited = [];

    while(stack.length) {
        let currentNode = stack.pop();
        let list = graph.adjacenyMatrix[currentNode];

        for(let i = 0; i < list; i++) {
            list[i] > 0 && !visited.includes(i) && stack.push(i);
        }

        visited.push(currentNode);
    }

    return visited;
}