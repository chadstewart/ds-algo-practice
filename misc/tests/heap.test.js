const { heapTesting } = require('../../utils/current-test-config');

let heapTest;

beforeEach(() => {
    heapTest = new heapTesting();
});

describe('Heap Data Structure Testing', () => {    

    describe('Heap Constructor', () => {
        
    });

    describe('Get Parent Function', () => {
        
    });

    describe('Get Left Child Function', () => {
        
    });

    describe('Get Right Child Function', () => {
        
    });

    describe('Get Children Function', () => {
        
    });
    
    describe('Swap Function', () => {
        
        test('When two indexes, it should swap two elements at the two indexes', () => {
            heapTest.heap = [1,2,3];
            
            heapTest.swap(0, 2);

            expect(heapTest.heap).toEqual([3,2,1]);
        });
    });

    describe('Heapify Up Function', () => {
        
    });

    describe('Heapify Down Function', () => {
        
    });

    describe('Insert Function', () => {
        
    });

    describe('Get Min Function', () => {
        
    });
});