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

    describe('Partition Function', () => {

        describe('Whole array as partition', () => {
            test('Given an array and two integars, should move all numbers lesser than the last element to the left and move it to it\'s sorted position', () => {
                quickSortTesting.swap(testArray, 2, 7);
                quickSortTesting.partition(testArray, 0, 7);
                expect(testArray).toEqual([3,2,4,9,5,18,8,19]);
            });
    
            test('Given an array and two integars, should place second index into sorted position and report it\'s location', () => {
                quickSortTesting.swap(testArray, 2, 7);
                expect(quickSortTesting.partition(testArray, 0, 7)).toBe(2);
            });
        });

        describe('Segment of array as partition', () => {
            test('Given an array and two integars, should move all numbers lesser than the last element to the left and move it to it\'s sorted position', () => {
                quickSortTesting.swap(testArray, 2, 7);
                quickSortTesting.partition(testArray, 0, 7);
                quickSortTesting.swap(testArray, 6, 7);
                quickSortTesting.partition(testArray, 3, 7);
                expect(testArray).toEqual([3,2,4,5,8,18,19,9]);
            });
    
            test('Given an array and two integars, should place second index into sorted position and report it\'s location', () => {
                quickSortTesting.swap(testArray, 2, 7);
                quickSortTesting.partition(testArray, 0, 7);
                quickSortTesting.swap(testArray, 6, 7);
                expect(quickSortTesting.partition(testArray, 0, 7)).toBe(4);
            });
        });
    });

    describe('Swap Function', () => {
        test('When given an array and two indexes, it should swap two elements at the two indexes', () => {
            quickSortTesting.swap(sortedArray, 0, 4);
            expect(sortedArray).toEqual([5,2,3,4,1,6]);
        });
    });

});