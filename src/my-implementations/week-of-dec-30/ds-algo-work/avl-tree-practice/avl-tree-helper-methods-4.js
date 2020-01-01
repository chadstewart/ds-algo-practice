class AVLTreeHelpers {
    constructor() {

    }

    getHeight(node) {
        let height = 0;

        if(node === null) {
            height = -1;
        } else {
            height = Math.max(this.getHeight(node.right), this.getHeight(node.left)) + 1;
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

    rotationRL(node) {
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node);
    }

    rotationLR(node) {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    }
}