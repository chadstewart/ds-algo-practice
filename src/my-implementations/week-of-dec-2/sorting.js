function quickSortRandomPartition (array) {
    
    const swap = (array, index1, index2) => {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }

    const partition = (array, start, end) => {
        let pivot = array[end];
        let i = (start - 1);
    
        for (let j = low; j <= (end - 1); j++) {
            if(array[j] <= pivot) {
                i++;
                swap(array, i, j);
            }
        }
    
        swap(array, i + 1, end);
        return i + 1;        
    }

    const randomPartition = (array, start, end) => {
        let randomNum = Math.floor(Math.random() * (start - end + 1) + end);
        swap(array, randomNum, end);
        return partition(array, start, end);
    }

    const quickSort = (array, start = 0, end = array.length - 1) => {
        if (start < end) {
            let partition = randomPartition(array, start, end);
            quickSort(array, start, partition - 1);
            quickSort(array, partition + 1, end);
        }
    }

    return quickSort(array);
}

function mergeSort(array) {

    const merge = (leftArray, rightArray) => {
        let sortedArray = [];
    
        while(leftArray.length && rightArray.length) {
            if(leftArray[0] <= rightArray[0]) {
                sortedArray.push(leftArray.shift());
            } else {
                sortedArray.push(rightArray.shift());
            }
        }
    
        if(leftArray.length){
            sortedArray = sortedArray.concat(leftArray);
        }
        if(rightArray.length){
            sortedArray = sortedArray.concat(rightArray);
        }
    
        return sortedArray;
    }

    const sortExec = array => {
        let { length } = array;

        if(length > 1) {
            const middle = Math.floor(length / 2);
            let left = sortExec(array.slice(0, middle));
            let right = sortExec(array.slice(middle));
            array = merge(left, right);
        }

        return array;
    }

    return sortExec(array);

}