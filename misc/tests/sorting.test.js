const { sort } = require('./utils/currently-testing');

describe('Sort Algorithm Testing', () => {
    const testArray = [5,6,1,8,3];


    test('Should return null if no value', () => {
        expect(sort()).toBeNull();
    });

    test('Should sort array properly when given value', () => {
        expect(sort(testArray)).toEqual([1,2,3]);
    });
})