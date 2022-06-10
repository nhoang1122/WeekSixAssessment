const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('Does shuffleArray return an ARRAY', () => {
        expect(Array.isArray(shuffleArray([1,2,3,4,5]))).toBeTruthy()
    })
    test('Is returning Array same length as argument?', () => {
        expect(shuffleArray([1,2,3]).length).toBe(3)
    })
})