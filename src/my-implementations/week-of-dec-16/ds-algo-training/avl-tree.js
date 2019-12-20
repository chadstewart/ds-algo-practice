class TreeNode {
    constructor(value) {
        this.value = value;
        this.parent = null;
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
            return -1;
        } else {
            height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
        }

        return height;
    }

    getBalanceFactor(currentNode) {
        return this.getHeight(currentNode.left) - this.getHeight(currentNode.right);
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
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    }

    rotationRL(node) {
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node);
    }

    balanceSubTree(currentNode) {
        if(this.getBalanceFactor(currentNode) > 1) {
            if(this.getBalanceFactor(currentNode.left) > 0) {
                currentNode = rotationLL(currentNode);
            } else if(this.getBalanceFactor(currentNode.left) < 0){
                currentNode = rotationLR(currentNode);
            }
        } else if(this.getBalanceFactor(currentNode) < -1) {
            if(this.getBalanceFactor(currentNode.right) < 0){
                currentNode = rotationRR(currentNode);
            } else if(this.getBalanceFactor(currentNode.right) > 0) {
                currentNode = rotationRL(currentNode);
            }
        }
    }

    insert(value) {
        if(this.root === null) {
            this.root = new TreeNode(value);
        } else {
            let currentNode = this.root;

            while(currentNode) {
                if(value < currentNode.value) {
                    if(currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = new TreeNode(value);
                        currentNode.left.parent = currentNode;
                        break;
                    }
                } else if(value > currentNode.value) {
                    if(currentNode.right) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode.right = new TreeNode(value);
                        currentNode.right.parent = currentNode;
                        break;
                    }
                } else {
                    return `${value} already exists in this tree!`;
                }
            }
            
            while(currentNode) {
                this.balanceSubTree(currentNode);
                currentNode = currentNode.parent;
            }

            return `${value} was successfully inserted into the tree!`;
        }
    }

    search(value) {
        let currentNode = this.root;

        while(currentNode) {
            if(value === currentNode.value) {
                return currentNode;
            } else if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else if(value > currentNode.value) {
                currentNode = currentNode.right;
            }
        }

        return `${value} does not exist in this tree!`;
    }
}