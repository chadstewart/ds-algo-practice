class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParent(index) {
        if(index === 0) {
            return null;
        } else {
            return Math.round((index - 1)/ 2);
        }
    }

    getLeftChild(index) {
        let result = (2 * index) + 1;
        
        if(result > this.heap.length - 1) {
            return null;
        }
        
        return result;
    }

    getRightChild(index) {
        let result = (2 * index) + 2;
        
        if(result > this.heap.length - 1) {
            return null;
        }

        return result;
    }

    getChildren(index) {
        return [getLeftChild(index), getRightChild(index)];
    }

    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    heapifyUp() {
        let currentNode = this.heap.length - 1;
        let parent = this.getParent(currentNode);
        
        while(parent !== null) {
            if(this.heap[currentNode] < this.heap[parent]) {
                this.swap(currentNode, parent);
            }

            currentNode = parent;
            parent = this.getParent(currentNode);
        }

        return `Heapified!!`;
    }

    heapifyDown() {
        let currentNode = this.heap.length - 1;
        let children = this.getChildren(currentNode);

        while(children[0] !== null) {
            if(this.heap[currentNode] > this.heap[children[0]] &&
                this.heap[currentNode] > this.heap[children[1]]) {
                if(this.heap[children[0]] <= this.heap[children[1]]) {
                    this.swap(currentNode, children[0]);
                    currentNode = children[0];
                    children = this.getChildren(currentNode);
                } else {
                    this.swap(currentNode, children[1]);
                    currentNode = children[1];
                    children = this.getChildren(currentNode);
                }
            } else if(this.heap[currentNode] > this.heap[children[0]]) {
                this.swap(currentNode, children[0]);
                currentNode = children[0];
                children = this.getChildren(currentNode);
            } else if(this.heap[currentNode] > this.heap[children[1]]) {
                this.swap(currentNode, children[1]);
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
        let result;
        this.swap(0, this.heap.length - 1);
        result = this.heap.pop();
        this.heapifyDown();
        return result;
    }
}