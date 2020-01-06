class AVLTree {
    constructor() {
        this.root = null;
    }

    getHeight(root) {
        let height = 0;

        if(this.root === null) {
            height = -1    
        } else {
            height = Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1
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
        return this.rotationLL(node);
    }

    rotationRL(node) {
        node.right = rotatioLL(node.right);
        return this.rotationRR(node);
    }
}