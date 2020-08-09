const { quickSortTesting, mergeSortTesting } = require('../../utils/current-test-config');
const { sorted } = require('../../utils/test-utilities');

let testArray, sortedArray = [];

describe('Merge Sort Testing', () => {

    beforeEach(() => {
        testArray = [5,8,4,9,3,18,2,19];
        sortedArray = [1,2,3,4,5,6];
    });

    describe('Merge Sort Function', () => {

        test('Should return null if no value', () => {
            expect(mergeSortTesting.mergeSort()).toBeNull();
        });

        test('Should sort array properly when given value', () => {
            expect(sorted(mergeSortTesting.mergeSort(testArray))).toBeTruthy();
        });

        test('If given a sorted array, should reproduce the array', () => {
            expect(mergeSortTesting.mergeSort(sortedArray)).toEqual([1,2,3,4,5,6]);
        });

    });

    describe('Merge Function', () => {

        test('Given two sorted arrays, merge should return a sorted array', () => {
            expect(sorted(mergeSortTesting.merge([1,5,8], [2,7]))).toBeTruthy();
        });

    });

});

describe('Quick Sort Testing', () => {

    beforeEach(() => {
        testArray = [5,8,4,9,3,18,2,19];
        sortedArray = [1,2,3,4,5,6];
    });


    describe('Quick Sort Function', () => {

        test('Should return null if no value', () => {
            expect(quickSortTesting.quickSort()).toBeNull();
        });

        test('Should sort array properly when given value', () => {
            expect(sorted(quickSortTesting.quickSort(testArray))).toBeTruthy();
        });

        test('If given a sorted array, should reproduce the array', () => {
            expect(quickSortTesting.quickSort(sortedArray)).toEqual([1,2,3,4,5,6]);
        });

    });

    describe('Random Partition Function', () => {

    });

    describe('Partition Function', () => {

    });

    describe('Swap Function', () => {

    });

});