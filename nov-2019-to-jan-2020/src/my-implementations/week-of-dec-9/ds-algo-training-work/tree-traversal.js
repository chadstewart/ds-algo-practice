function bfs(src) {
    let result = [];
    let queue = [];

    queue.push(src);

    while(queue.length !== 0) {
        let currentNode = queue.shift();
        
        if(currentNode.left) {
            queue.push(currentNode.left);
        }

        if (currentNode.right) {
            queue.push(currentNode.right);
        }

        result.push(currentNode.value);
    }

    return result;
}

function dfs(src, order = "in") {
    let result = [];
    
    let inOrder = node => {
        if(node) {
            inOrder(node.left);
            node && result.push(node.value);
            inOrder(node.right);
        }
    }

    let preOrder = node => {
        if(node) {
            node && result.push(node.value);
            preOrder(node.left);
            preOrder(node.right);
        }
    }

    let postOrder = node => {
        if(node) {
            postOrder(node.left);
            postOrder(node.right);
            node & result.push(node.value);
        }
    }

    switch(order){
        case "in":
            inOrder(src);
            break;

        case "pre":
            preOrder(src);
            break;

        case "post":
            postOrder(src);
            break;
    }

    return result;
}