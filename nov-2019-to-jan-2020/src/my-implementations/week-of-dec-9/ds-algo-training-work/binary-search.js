/*
 *@param {number[]} sortedArray
 *@return {number}
 * 
 */

function binarySearch (array, target) {
    let start = 0;
    let end = array.length - 1;

    while(start <= end) {
        let middle = start + Math.floor((start - end) / 2);

        if(array[middle] === target) {
            return middle;
        } else if (target > array[middle]) {
            start = middle + 1;
        } else if (target < array[middle]) {
            end = middle - 1; 
        }
    }

    return `${target} does not exist in this array!`;
}