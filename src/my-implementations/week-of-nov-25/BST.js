class BSTNode {
    constructor(value = NULL, parent = NULL) {
        this.value = value;
        this.parent = parent;
        this.left = NULL;
        this.right = NULL;
    }
}

class BST {
    constructor() {
        this.root = undefined;
    }

    insert(value) {
        if (this.root === undefined) {
            this.root = new BSTNode(value);
        } else {
            let currentNode = this.root;

            while (currentNode) {
                if(value < currentNode.value){
                    if (currentNode.left === NULL) {
                        currentNode.left = new BSTNode(value, currentNode);
                    } else {
                        currentNode = currentNode.left;
                    }
                }

                if(value > currentNode.value){
                    if (currentNode.right === NULL) {
                        currentNode.right = new BSTNode(value, currentNode);
                    } else {
                        currentNode = currentNode.right;
                    }
                }

                if(value === currentNode.value) {
                    return "Value already exists in tree!";
                }
            }
        }
    }

    search(value) {
        if(value === this.root.value) {
            return this.root;
        } else {
            let currentNode = this.root;

            while(currentNode) {
                if(value < currentNode.value) {
                    currentNode = currentNode.left;
                } else if (value > currentNode.value) {
                    currentNode = currentNode.right;
                } 
                
                if (value == currentNode.value) {
                    return currentNode;
                }
            }

            return "This value isn't in the tree!";
        }
    }

    minValue(node = this.root) {
        while(node.left) {
            node = node.left;
        }
        return node;
    }

    remove(value) {
        let removeNode = search(value);
        
        if(typeof removeNode === "string") {
            return removeNode;
        } else {
            if(removeNode.left === NULL && removeNode.right === NULL){
                removeNode = NULL;
            } else if (removeNode.right && removeNode.left === NULL) {
                removeNode = removeNode.right;
            } else if (removeNode.left && removeNode.right === NULL) {
                removeNode = removeNode.left;
            } else if (removeNode.left && removeNode.right) {
                removeNode = this.minValue(removeNode.right)
            }
            return `${value} was removed successfully!`
        }
    }
}