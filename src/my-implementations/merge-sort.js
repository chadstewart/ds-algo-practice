function mergeSort (array) {
    if(array.length > 1){
        const { length } = array;
        const middle = Math.floor(length / 2);
        const left = mergeSort(array.slice(0, middle))
        const right = mergeSort(array.slice(middle))
        array = merge(left, right);
    }

    return array;
}

function merge(leftArray, rightArray) {
    sortedArray = [];

    while(leftArray.length && rightArray.length) {
        if(leftArray[0] <= rightArray[0]) {
            sortedArray.push(leftArray.shift());
        } else {
            sortedArray.push(rightArray.shift());
        }
    }

    if(leftArray.length){
        sortedArray = sortedArray.concat(leftArray);
    }
    if(rightArray.length){
        sortedArray = sortedArray.concat(rightArray);
    }

    return sortedArray;
}