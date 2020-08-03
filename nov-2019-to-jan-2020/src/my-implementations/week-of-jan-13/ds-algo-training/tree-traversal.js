function bfs(src) {
    let queue = [src];
    let result = [];

    while(queue.length) {
        let currentNode = queue.shift();

        if(currentNode.left) {
            queue.push(currentNode.left);
        }

        if(currentNode.right) {
            queue.push(currentNode.right);
        }

        result.push(currentNode);
    }

    return result;
}

function dfs(src, searchType = 'inOrder') {
    let result = [];

    let inOrder = node => {
        if(node) {
            inOrder(node.left);
            result.push(node.value);
            inOrder(node.right);
        }
    };

    let preOrder = node => {
        if(node) {
            result.push(node.value);
            preOrder(node.left);
            preOrder(node.right);
        }
    };

    let postOrder = node => {
        if(node) {
            postOrder(node.left);
            postOrder(node.right);
            result.push(node.value);
        }
    };

    switch(searchType) {
        case 'inOrder':
            inOrder(src);
            break;

        case 'preOrder':
            preOrder(src);
            break;

        case 'postOrder':
            postOrder(src);
            break;
    }

    return result;
}