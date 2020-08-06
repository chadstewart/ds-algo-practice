const { quickSortTesting, mergeSortTesting } = require('../../utils/current-test-config');

describe('Merge Sort Testing', () => {
    const testArray = [5,6,1,8,3];


    test('Should return null if no value', () => {
        expect(mergeSortTesting.mergeSort()).toBeNull();
    });

    test('Should sort array properly when given value', () => {
        expect(mergeSortTesting.mergeSort(testArray)).toEqual([1,3,5,6,8]);
    });
});

describe('Quick Sort Testing', () => {
    const testArray = [5,6,1,8,3];


    test('Should return null if no value', () => {
        expect(quickSortTesting.quickSort()).toBeNull();
    });

    test('Should sort array properly when given value', () => {
        expect(quickSortTesting.quickSort(testArray)).toEqual([1,3,5,6,8]);
    });
});