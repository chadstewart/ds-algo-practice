function partition (start, end) {
    let pivot = array[end];
    let i = (start - 1);

    for(let j = start; j <= end; j++) {
        if(array[j] < pivot) {
            i++;
            swap(i, j);
        }
    }

    swap(i + 1, end);
    return i + 1;
}

function randomPartition (start, end) {
    let randomNum = Math.floor(Math.random() * (start - end + 1));
    swap(randomNum, end);
    return partition(start, end);
}