class minHeap {
    constructor() {
        this.heap = [];
    }

    getParent(index) {
        return Math.floor(index / 2);
    }

    getLeftChild(index) {
        let leftChild = (index * 2) + 1;
        return leftChild <= (this.heap.length - 1) ? leftChild : null;
    }

    getRightChild(index) {
        let rightChild = (index * 2) + 2;
        return rightChild <= (this.heap.length - 1) ? rightChild : null;
    }

    getChildren(index) {
        let children = [];
        children[0] = this.getLeftChild(index);
        children[1] = this.getRightChild(index);
        return children;
    }

    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;        
    }

    getLastIndex() {
        return (this.heap.length - 1);
    }

    heapifyUp() {
        let currentNode = getLastIndex();
        let parent = getParent(currentNode);

        while(this.heap[currentNode] < this.heap[parent]) {
            this.swap(currentNode, parent);
            currentNode = parent;
            parent = getParent(currentNode);
        }
    }

    heapifyDown() {
        let currentNode = 0;
        let children = this.getChildren(currentNode);

        while(children[0] != null) {

            if(this.heap[children[0]] <= this.heap[children[1]]) {
                this.swap(currentNode, children[0]);
            } else {
                this.swap(currentNode, children[1]);
            }

            currentNode++;
            children = this.getChildren(currentNode);
        }
    }

    insert(value) {
        this.heap.push(value);
        heapifyUp();
    }

    search(value) {
        for(let i = 0; i < this.heap.length; i++) {
            if(value === this.heap[i]) {
                return i;
            }
        }

        return null;
    }

    remove(value) {
        let removeIndex = this.search(value);

        if(removeIndex !== null) {
            this.swap(removeIndex, this.getLastIndex());
            this.heap.pop();
            this.heapifyDown();
        }
    }
}