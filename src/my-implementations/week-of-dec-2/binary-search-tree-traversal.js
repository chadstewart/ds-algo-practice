function breathFirstSearchBST(bst) {
    let queue = [];
    let currentNode;
    let result = [];

    queue.push(bst.root);

    while(queue.length !== 0) {
        currentNode = queue.shift();
        currentNode.left !== null && queue.push(currentNode.left);
        currentNode.right !== null && queue.push(currentNode.right);
        result.push(currentNode);
    }

    return result;

}

function depthFirstSearchBSTRecursive(bst, order = 'in') {
    let result = [];
    let currentNode = bst.root;

    let preOrder = node => {
        node && result.push(node);
        preOrder(node.left);
        preOrder(node.right)
    }

    let inOrder = node => {
        inOrder(node.left);
        node && result.push(node);
        inOrder(node.right);
    }

    let postOrder = node => {
        postOrder(node.left);
        postOrder(node.right);
        node && result.push(node);
    }

    switch(order) {
        case 'pre':
            preOrder(currentNode);
            break;
            
        case 'in':
            inOrder(currentNode);
            break;
                
        case 'post':
            postOrder(currentNode);
            break;
    }

    return result;

}