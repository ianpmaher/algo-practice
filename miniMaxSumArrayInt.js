// Given five positive integers, find the minimum and maximum values that can be calculated by
// summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// parameter => array of 5 integers
// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.
// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated
// by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)
function miniMaxSum(arr) {
    // Write your code here
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Calculate the minimum sum
    const minSum = arr.slice(0, 4).reduce((acc, curr) => acc + curr, 0);

    // Calculate the maximum sum
    const maxSum = arr.slice(1).reduce((acc, curr) => acc + curr, 0);

    console.log(minSum, maxSum);
}
