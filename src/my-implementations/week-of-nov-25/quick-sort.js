function quickSort (array, low = 0, high = array.length - 1) {
    let pivot;
    if(low < high) {
        pivot = partition(array, low, high);
        quickSort(array, low, pivot);
        quickSort(array, pivot + 1, high);
    }
}

function partition(array, low, high) {
    let pivot = array[low];
    let leftwall = low;

    for (let i = low + 1; i <= high; i++) {
        if (array[i] < pivot) {
            swap(array, i, leftwall);
            leftwall = leftwall + 1;
        }
    }

    swap(array, pivot, leftwall);
    return leftwall;
}

function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}