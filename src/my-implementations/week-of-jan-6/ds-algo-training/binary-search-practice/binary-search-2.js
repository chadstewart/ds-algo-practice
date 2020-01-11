function binarySearch(sortedArray, target) {
    let start = 0;
    let end = sortedArray.length - 1;

    while(start <= end) {
        let middle = start + Math.round((end - start) / 2);

        if(sortedArray[middle] === target) {
            return middle;
        } else if (target < sortedArray[middle]) {
            end = middle - 1;
        } else if (target > sortedArray[middle]) {
            start = middle + 1;
        }
    }

    return `${target} was not in this array!`;
}