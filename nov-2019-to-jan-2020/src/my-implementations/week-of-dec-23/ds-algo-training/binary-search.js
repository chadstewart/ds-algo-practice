function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;
    let middle;

    while(start <= end) {
        middle = Math.floor(start + (start - end) / 2);
        if(array[middle] === target) {
            return middle;
        } else if(target < array[middle]) {
            end = middle - 1;
        } else if(target > array[middle]) {
            start = middle + 1;
        }
    }

    return `${value} does not appear in this array!`;
}