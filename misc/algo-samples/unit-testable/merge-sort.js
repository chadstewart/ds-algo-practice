function mergeSort(array = null) {
    if(array === null) return null;

    let { length } = array;

    if (length > 1) {
        let middle = Math.floor(length / 2);
        let left = mergeSort(array.slice(0, middle));
        let right = mergeSort(array.slice(middle));
        array = merge(left, right);
    }

    return array;
}

function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
        left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift());
    }

    return result.concat(left.concat(right));
}

module.exports = {
    mergeSort,
    merge
}