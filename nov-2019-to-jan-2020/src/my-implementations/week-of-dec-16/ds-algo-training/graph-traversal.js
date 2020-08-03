function dfsAdjacency(graph, src) {
    let currentNode;
    let visited = [];
    let stack = [src];

    let getListMinusVisited = node => {
        graph.adjacencyList.get(node).returnList().filter(n => {!visited.includes(n)});
    }

    while(stack.length !== 0) {
        currentNode = stack.pop();
        stack.concat(getListMinusVisited(currentNode));
        visited.push(currentNode);
    }
}

function bfsAdjacency(graph, src) {
    let currentNode;
    let visited = [];
    let queue = [src];

    let getListMinusVisited = node => {
        graph.adjacencyList.get(node).returnList().filter(n => {!visited.includes(n)});
    }

    while(queue.length !== 0) {
        currentNode = queue.shift();
        queue.concat(getListMinusVisited(currentNode));
        visited.push(currentNode);
    }
}