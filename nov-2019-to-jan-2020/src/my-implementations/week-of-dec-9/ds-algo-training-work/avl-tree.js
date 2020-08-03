class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    getHeight(root = this.root) {
        let height = 0;
        if(root === null) {
            height = -1;
        } else {
            height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
        }

        return height;
    }

    getBalanceFactor(root) {
        return this.getHeight(root.left) - this.getHeight(root.right);
    }

    rotationLL(node) {
        let temp = node.left;
        node.left = temp.right;
        temp.right = node;
        return temp;
    }

    rotationRR(node) {
        let temp = node.right;
        node.right = temp.left;
        temp.left = node;
        return temp;
    }

    rotationLR(node) {
        node.left = rotationRR(node.left);
        return rotationLL(node);
    }

    rotationRL(node) {
        node.right = rotationLL(node.right);
        return rotationRR(node);
    }

    insert(value) {
        if(this.root === null) {
            this.root = new TreeNode(value);
        } else {
            let currentNode = this.root;

            while(currentNode) {
                if(value === currentNode.value) {
                    return `${value} already exists in the tree!`;
                } else if(value < currentNode.value) {
                    if(currentNode.left === null) {
                        currentNode.left = new TreeNode(value);

                        if(this.getBalanceFactor(currentNode) > 1) {
                            if(value > currentNode.value) {
                                currentNode = rotationLL(currentNode);
                            } else {
                                currentNode = rotationLR(currentNode);
                            }
                        }

                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else {
                    if(currentNode.right === null) {
                        currentNode.right = new TreeNode(value);

                        if(this.getBalanceFactor(currentNode) > 1) {
                            if(value > currentNode.value) {
                                currentNode = rotationRR(currentNode);
                            } else {
                                currentNode = rotationRL(currentNode);
                            }
                        }

                        break;
                    } else {
                        currentNode = currentNode.right;
                    }                    
                }
            }

            return currentNode;
        }
    }

    search(value) {
        let currentNode = this.root;

        while(currentNode) {
            if(value === currentNode.value) {
                return currentNode;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return `${value} does not exist in this tree!`;
    }
}