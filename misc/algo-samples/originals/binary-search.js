function binarySearch(sortedArray, target) {
    let start = 0;
    let end = sortedArray.length;

    while(start < end) {
        let middle = start + Math.floor((end - start) / 2);

        if(target === sortedArray[middle]) {
            return middle;
        } else if(target < sortedArray[middle]) {
            end = middle;
        } else {
            start = middle;
        }
    }

    return -1;
}