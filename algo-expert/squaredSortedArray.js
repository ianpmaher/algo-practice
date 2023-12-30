// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length
// with the squares of the original integers also sorted in ascending order.

// Sample Input
// array = [1, 2, 3, 5, 6, 8, 9]
// Sample Output
// [1, 4, 9, 25, 36, 64, 81]

function sortedSquaredArray(array) {
    // loop through the array
    // square each number
    // sort the array
    // return the array
    let squaredArray = [];

    for (let i = 0; i < array.length; i++) {
        // squaredArray.push(Math.pow(array[i], 2)); is another way to square the number
        squaredArray.push(array[i] * array[i]);
    }
    // use two pointers to keep track of the smallest and largest values in the array
    return squaredArray.sort((a, b) => a - b);
}

let arrayInput = [1, 2, 3, 5, 6, 8, 9];
console.log(sortedSquaredArray(arrayInput));

// Big O complexity
// O(n) time |||| O(n) complexity where n is the length of the input array