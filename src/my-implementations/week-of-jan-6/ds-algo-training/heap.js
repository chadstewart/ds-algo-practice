class Heap {
    constructor() {
        this.heap = [];
    }

    getParent(node) {
        return node === 0 ?  null : Math.floor(node / 2);
    }

    getLeftChild(node) {
        return node > this.heap.length - 1 ? null : (2 * node) + 1; 
    }

    getRightChild(node) {
        return node > this.heap.length - 1 ? null : (2 * node) + 2;
    }

    getChildren(node) {
        return [this.getLeftChild(node), this.getRightChildP(node)];
    }

    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    heapifyUp() {
        let currentNode = this.heap.length - 1;
        let parent = this.getParent(currentNode);

        while(parent) {
            if(this.heap[currentNode] < this.heap[parent]) {
                this.swap(currentNode, parent);
            }

            currentNode = parent;
            parent = this.getParent(currentNode);
        }

        return `Heapified!`;
    }

    heapifyDown() {
        let currentNode = 0;
        let children = this.getChildren(currentNode);

        while(children[0]) {
            if(children[1]) {
                if(this.heap[currentNode] > this.heap[children[0]] ||
                this.heap[currentNode] > this.heap[children[1]]) {
                    if(this.heap[children[0]] <= this.heap[children[1]]) {
                        this.swap(currentNode, children[0])
                    } else {
                        this.swap(currentNode, children[1]);
                    }
                } else {
                    break;
                }
            } else {
                if(this.heap[currentNode] > this.heap[children[0]]) {
                    this.swap(currentNode, children[0]);
                } else {
                    break;
                }
            }
        }

        return `Heapified!`;
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    getMin() {
        this.swap(0, this.heap.length - 1);
        let result = this.heap.pop();
        this.heapifyDown();
        return result;
    }
}