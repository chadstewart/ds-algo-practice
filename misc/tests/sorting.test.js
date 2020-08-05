const { quickSort } = require('../../utils/currently-testing');

describe('Merge Sort Testing', () => {
    const testArray = [5,6,1,8,3];


    test('Should return null if no value', () => {
        expect(quickSort()).toBeNull();
    });

    test('Should sort array properly when given value', () => {
        expect(quickSort(testArray)).toEqual([1,2,3]);
    });
});

describe('Quick Sort Testing', () => {
    const testArray = [5,6,1,8,3];


    test('Should return null if no value', () => {
        expect(quickSort()).toBeNull();
    });

    test('Should sort array properly when given value', () => {
        expect(quickSort(testArray)).toEqual([1,2,3]);
    });
});