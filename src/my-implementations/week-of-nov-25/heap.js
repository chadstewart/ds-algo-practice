class MinHeap {
    constructor() {
        this.heap = [];
    }

    getLeftIndex(index) {
        return (2 * index) + 1;
    }

    getRightIndex(index) {
        return (2 * index) + 2;
    }

    getChildren(index) {
        let children = [];        
        children.push(this.getLeftIndex(index));
        children.push(this.getRightIndex(index));

        return children;
    }

    getParentIndex(index) {
        if(index === 0) {
            return null;
        }

        return Math.floor((index - 1) / 2);
    }

    getLastIndex() {
        return this.heap.length - 1;
    }

    swap(index1, index2) {
        let temp = heap[index1];
        heap[index1] = heap[index2];
        heap[index2] = temp;        
    }

    heapifyUp(index) {
        let parent = this.getParentIndex(index);

        while(parent !== null && (this.heap[index] > this.heap[parent])) {            
            this.swap(index, parent);
            index = parent;
            parent = this.getParentIndex(index);            
        }
    }

    heapifyDown(index) {
        let children = this.getChildren(index);
        let chosenChild;

        while(this.heap[index] < (children[0] || children[1])) {
            if(children[1] === null || children[0] < children[1]) {
                chosenChild = 0;
            } else if (children[0] === null || children[1] < children[0]) {
                chosenChild = 1;
            }
            
            this.swap(index, children[chosenChild]);
            index = children[chosenChild];
            children = this.getChildren(index);
        }
    }

    getMin() {
        return this.heap[0];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.getLastIndex());
    }

    remove(value) {
        let index;
        for(let i = 0; i < this.heap.length; i++) {
            if(value === this.heap[i]) {
                index = i;
                break;
            }
        }
        this.swap(index, this.getLastIndex());
        let result = this.heap.pop();
        this.heapifyUp(getLastIndex());

        return `${result} was removed!`;
    }
}