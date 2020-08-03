function mergeSort(array) {
    let merge = (leftArray, rightArray) => {
        let result = []

        while(leftArray.length !== 0 || rightArray.length !== 0) {
            if(leftArray[0] <= rightArray[0]) {
                result.push(leftArray.shift());
            } else {
                result.push(rightArray.shift());
            }
        }

        result = result.concat(leftArray, rightArray);
        return result;
    };

    let sort = (array, start = 0, end = array.length - 1) => {
        if(start < end) {
            let middle = start + Math.floor((start - end) / 2);
            let leftArray = sort(array, start, middle);
            let rightArray = sort(array, middle + 1, end);
            return merge(leftArray, rightArray);
        }
    };

    return sort(array);
}

function quickSort(array/*, Quick Selection target value */) {
    let swap = (index1, index2) => {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    };

    let partition = (start, end) => {
        let pivot = array[end];
        let i = (start - 1);

        for(let j = start; j <= end; j++) {
            if(array[j] < pivot) {
                i++;
                swap(i, j);
            }
        }

        swap(i + 1, end);
        return (i + 1);
    };

    let randomPartition = (start, end) => {
        let randomNum = Math.floor(Math.random() * (start - end) + 1);
        swap(randomNum, end);
        return partition(start, end);
    };

    let sort = (start = 0, end = array.length - 1) => {
        if(start < end) {
            let partition = randomPartition(start, end);
            /* Quick Selection

            if(array[partition] === target) {
                return partition;
            }
            */
            sort(start, partition - 1);
            sort(partition + 1, end);
        }
    };
}