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

        if(node === null) {
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
        this.rotationRR(node.left);
        this.rotationLL(node);
    }

    rotationRL(node) {
        this.rotationLL(node.right);
        this.rotationRR(node);
    }

    balanceSubTree(node, balanceFactor, value) {
        if(balanceFactor > 1) {
            if(value < node.left.value) {
                this.rotationLL(node);
            } else if(value > node.left.value) {
                this.rotationLR(node);
            }
        } else if(balanceFactor < -1) {
            if(value < node.right.value) {
                this.rotationRR(node);
            } else if(value > node.right.value) {
                this.rotationRL(node);
            }
        }
    }

    insert(value) {
        if(this.root === null) {
            this.root = new TreeNode(value);
        } else {
            let currentNode = this.root;

            while(currentNode) {
                if(currentNode.value === value) {
                    return `${value} is already in this tree!`;
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
                this.balanceSubTree(currentNode, balanceFactor, value);
                currentNode = currentNode.parent;
            }
        }

        return `${value} was successfully added to the tree!`;
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

        return -1;
    }

    delete(value) {
        let currentNode = this.search(value);

        if(currentNode === -1) {
            return `${value} was not in this tree to be deleted!`;
        }

        let removeRef = (currentNode, temp = null) => {
            if(currentNode.parent.left === currentNode) {
                currentNode.parent.left === temp;
            } else if(currentNode.parent.right === currentNode) {
                currentNode.parent.right === temp;
            }
        }

        while(currentNode) {
            if(!currentNode.left && !currentNode.right) {
                removeRef(currentNode);
                currentNode = currentNode.parent;
                break;
            } else if(currentNode.left && currentNode.right) {
                let temp = currentNode.left;

                while(temp.right) {
                    temp = temp.right;
                }

                currentNode.value = temp.value;
                currentNode = temp;
            } else if(currentNode.left || currentNode.right) {
                let temp = currentNode.left ? currentNode.left : currentNode.right;
                removeRef(currentNode, temp);
                currentNode = currentNode.parent;
                break;
            }
        }

        while(currentNode.parent) {
            let balanceFactor = this.getBalanceFactor(currentNode);
            this.balanceSubTree(currentNode, balanceFactor, value);
            currentNode = currentNode.parent;
        }

        return `${value} was deleted successfully!`;
    }
}