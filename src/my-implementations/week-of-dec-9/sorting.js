const mergeSort = (array) => {
    const merge = (leftArray, rightArray) => {
        let result = [];

        while(leftArray.length > 0 && rightArray.length > 0) {
            if(leftArray[0] <= rightArray[0]) {
                result.push(leftArray.shift());
            } else {
                result.push(rightArray.shift());
            }
        }

        result = result.concat(leftArray, rightArray);

        return result;
    };

    const sort = (array) => {
        if (array.length > 1) {
            const { length } = array;
            const middle = Math.floor(length / 2);
            const mergeLeft = sort(array.slice(0, middle));
            const mergeRight = sort(array.slice(middle, length));
            return merge(mergeLeft, mergeRight);
        }
    };

    return sort(array);

};

const quickSort = (array) => {
    const swap = (index1, index2) => {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    };

    const partition = (start, end) => {
        let pivot = array[end];
        let i = (start - 1);

        for(let j = start; j <= end - 1; j++){
            if(array[j] < pivot) {
                i++;
                swap(i, j);
            }
        }

        swap(i + 1, end);
        return (i + 1);
    };

    const randomPartition = (start, end) => {
        let randomNum = Math.floor(Math.random() * (start - end + 1) + end);
        swap(randomNum, end);
        return partition(start, end);
    };

    const sort = (start = 0, end = array.length - 1) => {
        if(start < end) {
            let partition = randomPartition(start, end);
            sort(start, partition - 1);
            sort(partition + 1, end);
        }
    };
};