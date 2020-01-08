class TreeNode {
    constructor(value, parent = null) {
        this.value = value;
        this.left = this.right = null;
        this.parent = parent;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    getHeight(node) {
        let height = 0;

        if(node === null || typeof node === 'undefined') {
            height = -1;
        } else {
            height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
        }

        return height;
    }

    getBalanceFactor(node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    rotationLL(node) {
        let temp = node.left;
        node.left = temp.right;
        temp.right = node;
    }

    rotationRR(node) {
        let temp = node.right;
        node.right = temp.left;
        temp.left = node;
    }

    rotationLR(node) {
        node.left = rotationRR(node.left);
        this.rotationLL(node);
    }

    rotationRL(node) {
        node.right = rotationLL(node.right);
        this.rotationRR(node);
    }

    balanceSubTree(node, balanceFactor, value) {
        if(balanceFactor > 1 && value < node.left.value) {
            this.rotationLL(node);
        } else if(balanceFactor < -1 && value < node.right.value) {
            this.rotationRR(node);
        } else if(balanceFactor > 1 && value > node.left.value) {
            this.rotationLR(node);
        } else if(balanceFactor < -1 && value < node.right.value) {
            this.rotationRL(node);
        }
    }

    insert(value) {
        if(this.root === null) {
            this.root = new TreeNode(value);
        } else {
            let currentNode = this.root;

            while(currentNode) {
                if(value === currentNode.value) {
                    return `${value} already exists in this tree!`;
                } else if(value < currentNode.value) {
                    if(currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = new TreeNode(value, currentNode);
                        break;
                    }
                } else if(value > currentNode.value) {
                    if(currentNode.right) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode.right = new TreeNode(value, currentNode);
                        break;
                    }
                }
            }

            while(currentNode.parent) {
                let balanceFactor = this.getBalanceFactor(currentNode);

                if(balanceFactor > 1 || balanceFactor < -1) {
                    this.balanceSubTree(currentNode, balanceFactor, value);
                }

                currentNode = currentNode.parent;
            }
        }

        return `${value} was successfully inserted into this tree!`;
    }

    search(value) {
        let currentNode = this.root;

        while(currentNode) {
            if(currentNode.value === value) {
                return currentNode;
            } else if(value < currentNode.value) {
                currentNode = currentNode.left;
            } else if(value > currentNode.value) {
                currentNode = currentNode.right;
            }
        }

        return `${value} was not found in this tree!`;
    }
}