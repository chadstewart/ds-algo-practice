const { binarySearch } = require('../../utils/current-test-config');

const sortedArray = [2,3,4,8,9,11,13];
const unsortedArray = [5,4,9,2,1,18,10]

describe('Binary Search Testing', () => {

    test('Should return null if no value', () => {
        expect(binarySearch()).toBeNull();
    });

    test('Should return return \'Array not sorted\' if array is not sorted', () => {
        expect(binarySearch(unsortedArray)).toBe('Array not sorted');
    });

    test('Should find value in a sorted array', () => {
        expect(binarySearch(sortedArray, 3)).toBeTruthy();
    });
});