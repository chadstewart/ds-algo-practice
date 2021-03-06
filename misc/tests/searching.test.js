const { binarySearchTesting } = require('../../utils/current-test-config');

let testArray;

describe('Binary Search Algorithm Testing', () => {

    test('Should return null if no value is passed', () => {
        expect(binarySearchTesting.binarySearch()).toBeNull();
    });

    test('Should return null if no target is passed', () => {
        testArray = [2,3,4,8,9,11,13];

        expect(binarySearchTesting.binarySearch(testArray)).toBeNull();
    });

    test('Should find value in a sorted array', () => {
        testArray = [2,3,4,8,9,11,13];

        expect(binarySearchTesting.binarySearch(testArray, 3)).toBe(1);
    });

    test('Should return -1 if value is not found', () => {
        testArray = [2,3,4,8,9,11,13];

        expect(binarySearchTesting.binarySearch(testArray, 6)).toBe(-1);
    });

    test('Should find value in a sorted array containing even number of elements', () => {
        testArray = [2,3,4,8,9,11];

        expect(binarySearchTesting.binarySearch(testArray, 9)).toBe(4);
    });

    test('Should find value in a sorted array containing odd number of elements', () => {
        testArray = [3,9,15,17,20,25,26];

        expect(binarySearchTesting.binarySearch(testArray, 9)).toBe(1);
    });
    
    test('Should find value in a sorted array in which the value is found when start, end and middle are the same number', () => {
        testArray = [2,5,8,9,13,18];

        expect(binarySearchTesting.binarySearch(testArray, 9)).toBe(3);
    });
    
    test('Should find value in a sorted array in which the value is found is in the middle of an array of even number of elements', () => {
        testArray = [2,5,6,9];

        expect(binarySearchTesting.binarySearch(testArray, 6)).toBe(2);
    });
    
    test('Should find value in a sorted array in which the value is found is in the middle of an array of odd number of elements', () => {
        testArray = [2,5,8,9,13,18,27];

        expect(binarySearchTesting.binarySearch(testArray, 9)).toBe(3);
    });

    test('Should find value in a sorted array containing negative numbers, including a negative target', () => {
        testArray = [-5,-1,0,2,3,4,8,9,11];

        expect(binarySearchTesting.binarySearch(testArray, 9)).toBe(7);
        expect(binarySearchTesting.binarySearch(testArray, -1)).toBe(1);
    });

    test('Should return -1 if value is not found in a sorted array containing negative numbers', () => {
        testArray = [-5,-1,0,2,3,4,8,9,11];

        expect(binarySearchTesting.binarySearch(testArray, 200)).toBe(-1);
    });
});