class TreeNode {
    constructor(value) {
        this.value = value;
        this.next = null;
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
        node.left = this.rotationLL(node.left);
        return this.rotationRR(node);
    }

    rotationRL(node) {
        node.right = this.rotationRL(node.right);
        return this.rotationLL(node);
    }

    balanceSubTree(currentNode) {
        if(this.getBalanceFactor(currentNode) > 1) {
            if(this.getBalanceFactor(currentNode.left) > 0) {
                currentNode = rotationLL(currentNode);
            } else if(this.getBalanceFactor(currentNode.left) < 0) {
                currentNode = rotationLR(currentNode);
            }
        } else if(this.getBalanceFactor(currentNode) < -1) {
            if(this.getBalanceFactor(currentNode.right) < 0) {
                currentNode = rotationRR(currentNode);
            } else if(this.getBalanceFactor(currentNode.right) > 0) {
                currentNode = rotationRL(currentNode);
            }
        }
    }

    
}