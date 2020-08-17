const { quickSortTesting, mergeSortTesting } = require('../../utils/current-test-config');
const { checkIfSorted } = require('../../utils/test-utilities');

let testArray, sortedArray;

function basicSortTesting(sortingFunction) {
    
    describe('Basic Sorting Testing', () => {

        test('Should return null if no value is passed', () => {
            expect(sortingFunction()).toBeNull();
        });

        test('Should return an empty array if one is passed', () => {
            testArray = [];

            expect(sortingFunction(testArray)).toEqual([]);
        });

        test('Should return array if it only holds one element', () => {
            testArray = [3];

            expect(sortingFunction(testArray)).toEqual([3]);
        });

        test('Should sort array with containing even number of elements', () => {
            testArray = [5,6,1,9];

            const isSorted = checkIfSorted(sortingFunction(testArray));

            expect(isSorted).toBeTruthy();
        });

        test('Should sort array containing odd number of elements', () => {
            testArray = [7,2,3,5,11];

            const isSorted = checkIfSorted(sortingFunction(testArray));

            expect(isSorted).toBeTruthy();
        });

        test('Should sort array properly when given value', () => {
            testArray = [5,8,4,9,3,18,2,19];

            const isSorted = checkIfSorted(sortingFunction(testArray));

            expect(isSorted).toBeTruthy();
        });

        test('Should sort array containing negative numbers', () => {
            testArray = [4,3,-1,18,5,-6,8];

            const isSorted = checkIfSorted(sortingFunction(testArray));

            expect(isSorted).toBeTruthy();
        });

    });
};




describe('Merge Sort Algorithm Testing', () => {

    basicSortTesting(mergeSortTesting.mergeSort);

    describe('Merge Function', () => {

        test('Given two sorted arrays, merge should return a sorted array', () => {
            const isSorted = mergeSortTesting.merge([1,5,8], [2,7]);

            expect(checkIfSorted(isSorted)).toBeTruthy();
        });

        test('If merge does not get two arrays as arguments, it should return null', () => {
            let left = [1,3,5];
            let right = [2,4,6];

            expect(mergeSortTesting.merge(left, 0)).toBeNull();
            expect(mergeSortTesting.merge(0, right)).toBeNull();
            expect(mergeSortTesting.merge(0, 0)).toBeNull();
            expect(mergeSortTesting.merge()).toBeNull();
        });

    });

});

describe('Quick Sort Algorithm Testing', () => {

    basicSortTesting(quickSortTesting.quickSort);

    describe('Partition Function', () => {

        describe('Whole array as partition', () => {
            test('Given an array and two integars, should move all numbers lesser than the last element to the left and move it to it\'s sorted position', () => {
                testArray = [5,8,4,9,3,18,2,19];
                
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
                testArray = [3,2,4,9,5,18,8,19];

                quickSortTesting.swap(testArray, 6, 7);
                quickSortTesting.partition(testArray, 3, 7);
                
                expect(testArray).toEqual([3,2,4,5,8,18,19,9]);
            });
    
            test('Given an array and two integars, should place second index into sorted position and report it\'s location', () => {
                testArray = [3,2,4,9,5,18,8,19];

                quickSortTesting.swap(testArray, 6, 7);

                expect(quickSortTesting.partition(testArray, 0, 7)).toBe(4);
            });
        });
    });

    describe('Swap Function', () => {
        test('When given an array and two indexes, it should swap two elements at the two indexes', () => {
            sortedArray = [1,2,3,4,5,6];
            
            quickSortTesting.swap(sortedArray, 0, 4);

            expect(sortedArray).toEqual([5,2,3,4,1,6]);
        });
    });

});