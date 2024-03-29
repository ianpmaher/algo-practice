// Given an array of integers and a positive integer k, determine the number of (i, j) pairs where
// i < j and ar[i] + ar[j] is divisible by k.

// Example
// ar = [1, 2, 3, 4, 5, 6]
// k = 5
// Three pairs meet the criteria: [1, 4], [2, 3] and [4, 6].

// Function Description
// Complete the divisibleSumPairs function in the editor below.
// divisibleSumPairs has the following parameter(s):
// int n: the length of array ar
// int ar[n]: an array of integers
// int k: the integer divisor
// Returns
// int: the number of pairs

// Input Format
// The first line contains 2 space-separated integers, n and k.
// The second line contains n space-separated integers, each a value of ar[i].

function divisibleSumPairs(ar, k) {
    // Write your code here
    // n = length of array ar
    // ar[n] = array of integers
    // k = integer divisor
    // % modulo determines if divisible by k

    let result = 0;
    // loop over array
    for (let i = 0; i < ar.length; i++) {
        // loop over array again
        // start at i + 1 to avoid duplicates
        for (let j = i + 1; j < ar.length; j++) {
            // if i < j
            // if ar[i] + ar[j] % k === 0
            if ((ar[i] + ar[j]) % k === 0) {
                // increment result
                result++;
            }
        }
    }
    return result;
}

console.log(divisibleSumPairs([1, 2, 3, 4, 5, 6], 5)); // 3
