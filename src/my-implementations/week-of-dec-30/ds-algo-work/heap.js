class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParent(node) {
        return node === 0 ? null : Math.floor((node  - 1) / 2);
    }

    getLeftChild(node) {
        let result = (2 * node) + 1;

        return result > this.heap.length - 1 ? null : result;
    }

    getRightChild(node) {
        let result = (2 * node) + 2;

        return result > this.heap.length - 1 ? null : result;
    }

    getChildren(node) {
        return [getLeftChild(node), getRightChild(node)];
    }

    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    heapifyUp() {
        let currentNode = this.heap.length - 1;
        let parent = this.getParent(currentNode);

        while(parent !== null && this.heap[parent] > this.heap[currentNode]) {
            this.swap(parent, currentNode);
            currentNode = parent;
            parent = this.getParent(currentNode);
        }

        return `Heapified!!`;
    }

    heapifyDown() {
        let currentNode = 0;
        let children = this.getChildren(currentNode);

        while(children[0]) {
            if(children[1] === null || children[0] <= children[1]) {
                this.swap(children[0], currentNode);
                currentNode = children[0];
                children = this.getChildren(currentNode);
            } else {
                this.swap(children[1], currentNode);
                currentNode = children[1];
                children = this.getChildren(currentNode);
            }
        }

        return `Heapified!!`;
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