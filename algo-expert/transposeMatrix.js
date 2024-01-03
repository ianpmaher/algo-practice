// you're given a 2d array of integers | matrix |
// Write a function that returns the transpose of the matrix
// the transpose of a matrix is a flipped version of the original matrix across its main diagional (which runs from top-left to bottom-right).
// I.e. the transpose => switches the row and column indices of the original matrix
// You can assume the input matrix always has at least 1 value; however its width and height are not necessarily the same

// sample input
// matrix = [
//    [1,2],
// ]
// sample output
// [
//    [1],
//    [2]
// ]

//

function transposeMatrix(matrix) {
    let outputArr = [];

    let inputLength = matrix.length;
    let elemLength = matrix[0].length;

    for (const element of matrix) {
        if (element) {
            for (let i = 0; i < 1; i++) {
                outputArr.push(matrix[0].flat());
            }
        }
    }
    return outputArr;
}

const arrInput = [
    [1, 2],
    [3, 4],
    [5, 6],
]; // length = 3

console.log(transposeMatrix(arrInput));
