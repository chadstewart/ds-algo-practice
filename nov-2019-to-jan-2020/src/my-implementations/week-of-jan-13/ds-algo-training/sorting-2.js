function mergeSort(array) {
    let merge = (left, right) => {
        let result = [];

        while(left.length && right.length) {
            left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift());
        }

        return result.concat(left.concat(right));
    };

    let sort = array => {
        let {length} = array;

        if(length  > 1) {
            let middle = Math.floor(length / 2);
            let left = array.slice(0, middle);
            let right = array.slice(middle);
            array = merge(left, right)
        }

        return array;
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
        let i = start - 1;

        for(let j = 0; j <= end; j++) {
            if(array[j] < pivot) {
                i++;
                swap(i, j);
            }
        }

        swap(i + 1, end);
        return 1 + 1;
    };

    let randomPartition = (start, end) => {
        let randomNum = Math.floor(Math.random() * (end - start) + start);
        swap(randomNum, end);
        return partition(start, end);
    };

    let sort = (start = 0, end = array.length - 1) => {
        if(start < end) {
            let chosenPartition = randomPartition(start, end);
            sort(0, chosenPartition - 1);
            sort(chosenPartition + 1, end);
        }
    };

    sort();
}