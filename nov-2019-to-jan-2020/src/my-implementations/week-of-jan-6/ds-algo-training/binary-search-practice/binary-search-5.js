function binarySearch(sortedArray, target) {
    let start = 0;
    let end = sortedArray.length;

    while(start < end) {
        let middle = start + Math.round((end - start) / 2) - 1;

        if(sortedArray[middle] === target) {
            return middle;
        } else if(target < sortedArray[middle]) {
            end = middle - 1;
        } else if(target > sortedArray[middle]) {
            start = middle + 1;
        }
    }
    
    return `${target} was not found in this array!`;
}