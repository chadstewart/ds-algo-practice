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
}