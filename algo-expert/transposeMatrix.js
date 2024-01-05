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

    for (let i = 0; i < matrix.length; i++) {
        // how many rows we have
        for (let j = 0; j < matrix[i].length; j++) {
            if (outputArr[j] === undefined) outputArr.push([]);
            outputArr[j].push(matrix[i][j]);
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
