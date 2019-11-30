function binarySearch(array, search) {
    array.sort();
    let start = 0;
    let end = array.length -1;
    let middle = 0;

    while(start <= end) {
        middle = Math.floor((start + end) / 2);

        if(search < array[middle]){
            end = middle - 1;
        } else if (search > array[middle]){
            start = middle + 1;
        } else if (search === array[middle]){
            return middle;
        }

    }

    return `${value} is not in the array!`;

}