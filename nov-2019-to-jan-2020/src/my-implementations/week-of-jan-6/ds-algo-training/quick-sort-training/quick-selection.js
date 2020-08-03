function quickSelection(array, target) {
    let result = null;

    let swap = (index1, index2) => {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    };

    let partition = (start, end) => {
        let pivot = array[end];
        let i = start - 1;

        for(let j = start; j <= end; j++) {
            if(array[j] < pivot) {
                i++;
                swap(i, j);
            }
        }

        swap(i + 1, end);
        return i + 1;
    };

    let randomPartition = (start, end) => {
        let randomNum = Math.floor(Math.random() * (end - start) + start);
        swap(randomNum, end);
        return partition(start, end);
    };

    let sort = (start = 0, end = array.length - 1) => {
        if(start < end && !result) {
            let partition = randomPartition(start, end);

            if(array[partition] === target) {
                result = partition;
                return;
            }

            sort(start, partition - 1);
            sort(partition + 1, end);
        }
    };

    sort();
    return result;
}