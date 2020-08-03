function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;

    while(start < end) {
        let middle = start + Math.floor(start - end) / 2;

        if(array[middle] === target) {
            return middle;
        } else if(array[middle] < target) {
            end = middle;
        } else if(array[middle] > target) {
            start = middle;
        }
    }

    return `${target} is not in this array!`;

}