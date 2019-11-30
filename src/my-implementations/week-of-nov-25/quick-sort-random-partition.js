function quickSort(array, low = 0, high = array.length - 1) {
    if(low < high){
        let partition = randomPartition(array, low, high);
        quickSort(array, low, partition - 1);
        quickSort(array, partition + 1, high);
    }
}

function partition(array, low, high) {
    let pivot = array[high];
    let i = (low - 1);

    for (let j = low; j <= (high - 1); j++) {
        if(array[j] <= pivot) {
            i++;
            swap(array, i, j);
        }
    }

    swap(array, i + 1, high);
    return i + 1;
}

function randomPartition(array, low, high) {
    let randomNum = Math.floor(Math.random() * (high - low + 1) + low);
    swap(array, randomNum, high);
    return partition(array, low, high);
}

function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}