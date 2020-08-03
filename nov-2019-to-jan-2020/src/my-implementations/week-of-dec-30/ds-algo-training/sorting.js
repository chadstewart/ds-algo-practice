function mergeSort(array) {
    let merge = (left, right) => {
        let result = [];

        while(left.length !== 0 && right.length !== 0) {
            if(left[0] <= right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift())
            }
        }

        result.concat(left, right);

        return result;
    };

    let sort = (arr, start = 0, end = array.length - 1) => {
        if(start < end) {
            let middle = Math.floor(start + (start - end) / 2);
            let left = sort(arr, start, middle);
            let right = sort(arr, middle + 1, end);
            return merge(left, right);
        }
    };

    return sort(array);
}

function quickSort(array) {
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
        let randomNum = Math.floor(Math.random() * (start - end + 1));
        swap(randomNum, end);
        return partition(start, end);
    };

    let sort = (start = 0, end = array.length - 1) => {
        if(start < end) {
            let partition = randomPartition(start, end);
            sort(start, partition - 1);
            sort(partition + 1, end);
        }
    };

    sort();
}