function bfs(root) {
    let currentNode;
    let queue = [root];
    let result = [];

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
    
    let inOrder = root => {
        if(root){
            inOrder(root.left);
            result.push(root.value);
            inOrder(root.right);
        }
    }

    let preOrder = root => {
        if(root) {
            result.push(root.value);
            preOrder(root.left);
            preOrder(root.right);
        }
    }

    let postOrder = root => {
        if(root) {
            postOrder(root.left);
            postOrder(root.right);
            result.push(root.value);
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