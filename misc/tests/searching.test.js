const { search } = require('./utils/currently-testing');

describe('Search Algorithm Testing', () => {
    const sortedArray = [2,3,4,8,9,11,13];
    const unsortedArray = [5,4,9,2,1,18,10]


    test('Should return null if no value', () => {
        expect(search()).toBeNull();
    });

    test('Should return return \'Array not sorted\' if array is not sorted', () => {
        expect(search(unsortedArray)).toBe('Array not sorted');
    });

    test('Should find value in a sorted array', () => {
        expect(search(sortedArray, 3)).toBeTruthy();
    });
})