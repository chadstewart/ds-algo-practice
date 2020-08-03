function dfsIterative(root, searchType = 'inOrder') {
    let result = [];
    let currentNode;
    let stack = [root];
    let visited = [];

    let stackPeek = () => {
        let result;

        result = stack.pop();
        stack.push(result);

        return result;
    }

    let inOrder = () => {

        while(stack.length !== 0) {
            currentNode = stackPeek();

            if(visited.includes(currentNode)) {
                stack.pop();
            } else {

                if(currentNode.left && !visited.includes(currentNode.left)) {
                    stack.push(currentNode.left);
                    continue;
                }

                result.push(currentNode.value);
                
                if(currentNode.right && !visited.includes(currentNode.right)) {
                    stack.push(currentNode.right);
                    continue;
                }

                visited.push(currentNode);
                stack.pop();
            }
        }
    }

    let preOrder = () => {
        currentNode = stackPeek();

        if(visited.includes(currentNode)) {
            stack.pop();
        } else {
            result.push(currentNode.value);
            
            if(currentNode.left && !visited.includes(currentNode.left)) {
                stack.push(currentNode.left);
                continue;
            }

            if(currentNode.right && !visited.includes(currentNode.right)) {
                stack.push(currentNode.right);
                continue;
            }

            visited.push(currentNode);
            stack.pop();
        }
    }

    let postOrder = () => {
        currentNode = stackPeek();

        if(visited.includes(currentNode)) {
            stack.pop();
        } else {

            if(currentNode.left && !visited.includes(currentNode.left)) {
                stack.push(currentNode.left);
                continue;
            }

            if(currentNode.right && !visited.includes(currentNode.right)) {
                stack.push(currentNode.right);
                continue;
            }

            result.push(currentNode.value);
            visited.push(currentNode);
            stack.pop();
        }
    }

    switch(searchType) {
        case 'inOrder':
            inOrder();
            break;

        case 'preOrder':
            preOrder();
            break;

        case 'postOrder':
            postOrder();
            break;
    }

    return result;
}