class PriorityQueue {
    constructor() {
        this.priorityQueue = [];
    }

    isEmpty() {
        return this.getQueueSize === 0;
    }

    getQueueSize() {
        return this.priorityQueue.length;
    }

    getParent(index) {
        return index === 0 ? null : Math.floor(index / 2);
    }

    getLeftChild(index) {
        let child = (index * 2) + 1;
        return child >= this.getQueueSize() ? null : child;
    }

    getRightChild(index) {
        let child = (index * 2) + 2;
        return child >= this.getQueueSize() ? null : child;
    }

    getChildren(index) {
        let children = [];
        children[0] = this.getLeftChild(index);
        children[1] = this.getRightChild(index);
        return children;
    }

    swap(index1, index2) {
        let temp = this.priorityQueue[index1];
        this.priorityQueue[index1] = this.priorityQueue[index2];
        this.priorityQueue[index2] = temp;
    }

    heapifyUp() {
        let currentNode = this.getQueueSize() - 1;
        let parentNode = this.getParent(currentNode);

        while(this.priorityQueue[currentNode].distance < this.priorityQueue[parentNode].distance &&
              parentNode !== null) {
            this.swap(currentNode, parentNode);
            currentNode = parentNode;
            parentNode = this.getParent(currentNode);
        }
    }

    heapifyDown() {
        let currentNode = 0;
        let children = this.getChildren(currentNode);

        while(children[0] != null) {
            if(this.priorityQueue[currentNode].distance > this.priorityQueue[children[0]].distance) {
                this.swap(currentNode, children[0]);
                currentNode = children[0];
            } else if(this.priorityQueue[currentNode] > this.priorityQueue[children[1]]) {
                this.swap(currentNode, children[1]);
                currentNode = children[1];
            }
            
            children = this.getChildren(currentNode);
        }
    }

    enqueue(item) {
        this.priorityQueue.push(item);
        heapifyUp();
    }

    dequeue() {
        this.swap(0, this.getQueueSize() - 1);
        let result = this.priorityQueue.pop();
        heapifyDown();
        return result;
    }
}

const dijkstra = (graph, src) => {
    const distances = {};
    const previousVertices = {};
    const visitedVertices = {};
    const queue = new PriorityQueue();

    graph.getAllVertices().foreach(vertex => {
        distances[vertex] = Infinity;
        previousVertices[vertex] = null;
    });

    distances[src] = 0;
    queue.enqueue({key: src, distance: distances[src]});

    while(!queue.isEmpty()) {
        let currentVertex = queue.dequeue();
        let neighbors = graph.getNeighbors(currentNode.key);

        neighbors.foreach(neighbor => {
            if(!visitedVertices[currentNode.key]) {
                //currently cluesless on what to do next!!!
            }
        });

        visitedVertices[currentVertex.key] = currentVertex;
    }

    return {
        distances,
        previousVertices
    };
}