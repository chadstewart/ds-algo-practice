function binarySearch(sortedArray, target) {
    if(!isMaxMinSorted(sortedArray) || !isMinMaxSorted(sortedArray)){
        return 'Array is not sorted!';
    }
    
    let start = 0;
    let end = sortedArray.length - 1;

    while(start <= end) {
        let middle = Math.round(end / 2);

        if(sortedArray[middle] === target){
            return `${target} is located at index ${middle}`;
        } else if(sortedArray[middle] > target) {
            end = middle - 1;
        } else if(sortedArray[middle] < target) {
            start = middle + 1;
        }
    }

    return `${target} is not located in this list!`;
}

function isMinMaxSorted(array) {
    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] > array[i + 1]) {
            return false;
        }
    }

    return true;
}

function isMaxMinSorted(array) {
    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] < array[i + 1]) {
            return false;
        }
    }

    return true;
}