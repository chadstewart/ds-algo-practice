function bfs(root) {
    let queue = [root];
    let result = [];
    let currentNode;

    while(queue.length !== 0) {
        currentNode = queue.shift();

        if(currentNode.left) {
            queue.push(currentNode.left);
        }

        if(currentNode.right) {
            queue.push(currentNode.right);
        }

        result.push(currentNode.value);
    }

    return result;
}

function dfs(root, searchType = 'inOrder') {
    let result = [];
    
    let inOrder = node => {
        if(node) {
            inOrder(node.left);
            result.push(node.value);
            inOrder(node.right);
        }
    }

    let preOrder = node => {
        if(node) {
            result.push(node.value);
            preOrder(node.left);
            preOrder(node.right);
        }
    }

    let postOrder = node => {
        if(node) {
            postOrder(node.left);
            postOrder(node.right);
            result.push(node.value);
        }
    }

    switch(searchType) {
        case 'inOrder':
            inOrder(root);
            break;

        case 'preOrder':
            preOrder(root);
            break;

        case 'postOrder':
            postOrder(root);
            break;
    }

    return result;
}