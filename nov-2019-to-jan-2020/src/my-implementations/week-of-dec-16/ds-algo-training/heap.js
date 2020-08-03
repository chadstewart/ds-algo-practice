class minHeap {
    constructor() {
        this.heap = [];
    }

    getParent(position) {
        return position === 0 ? null : Math.round((position - 1) / 2);
    }

    getLeftChild(position) {
        let child = (2 * position) + 1;
        return child >= this.getHeapLength() ? null : child;
    }

    getRightchild(position) {
        let child = (2 * position) + 2;
        return child >= this.getHeapLength() ? null : child;
    }

    getHeapLength() {
        return this.heap.length;
    }

    swap(index1, index2) {
        temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    heapifyUp() {
        let currentNode = getHeapLength() - 1;
        let parent = this.getParent(currentNode);

        while(parent !== null){
            if(this.heap[currentNode] < this.heap[parent]) {
                this.swap(currentNode, parent);
                currentNode = parent;
                parent = this.getParent(currentNode);
            }
        }
    }

    insert(value) {
        this.heap.push(value);
        heapifyUp();
        return `${value} has been inserted into this heap!`;
    }

}