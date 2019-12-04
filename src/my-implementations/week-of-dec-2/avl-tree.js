class TreeNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
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

    insert(value, root = this.root) {
        if(value === null) {
            return 'Please enter a value';
        } else if(root === null) {
            this.root = new TreeNode(value);
        } else if (root.value === value) {
            return `${value} already exists in this tree!`;
        } else if(value < root.value) {
            root.left = this.insert(value, root.left);

            if(root.left !== null && this.getBalanceFactor(root) > 1) {
                if (value > root.left.data) {
                   root = rotationLL(root);
                } else {
                   root = rotationLR(root);
                }
             }
        } else if (value > root.value) {
            root.right = this.insert(value, root.right);

            if(root.right !== null && this.getBalanceFactor(root) > -1) {
                if (value > root.right.data) {
                   root = rotationRR(root);
                } else {
                   root = rotationRL(root);
                }
             }
        }

        return root;
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

    search(value) {
        let currentNode = {
            parent: null,
            root: this.root()
        };

        while(currentNode.root) {
            if(currentNode.root.value === value) {
                return currentNode;
            } else {
                if(currentNode.root.value > value) {
                    currentNode.parent = currentNode.root;
                    currentNode.root = currentNode.left;
                } else {
                    currentNode.parent = currentNode.root;
                    currentNode.root = currentNode.right;
                }
            }
        }

        return `${value} does not exist in this tree!`
    }
}