// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array.
// For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4].
// Note that a single number in an array and the array itself are both valid subsequences of the array.
// sample input: array = [5, 1, 22, 25, 6, -1, 8, 10]
// sequence = [1, 6, -1, 10]
// sample output: true

function isValidSubsequence(array, sequence) {
    let arrayIndex = 0;
    let sequenceIndex = 0;

    for (let i=0; i<array.length; i++) {
    // while (arrayIndex < array.length && sequenceIndex < sequence.length) {
        if (array[arrayIndex] === sequence[sequenceIndex]) {
            sequenceIndex++;
        }
        arrayIndex++;
    }
    return sequenceIndex === sequence.length;

}

let arrayInput = [3, 4, 6, 9, 10, 11];

console.log(isValidSubsequence(arrayInput, [3]));
