function binarySearch (sortedArray, target) {
    let start = 0;
    let end = sortedArray.length - 1;

    while(start < end) {
        let middle = Math.floor(start + (end - start) / 2);

        if(sortedArray[middle] === target) {
            return middle;
        } else if (sortedArray[middle] < target) {
            end = middle - 1;
        } else if (sortedArray[middle] > target) {
            start = middle + 1;
        }
    }

    return `${target} was not found!`;
}