// There will be two arrays of integers. Determnie all integers that satisfy the following two conditions:
// 1. The elements of the first array are all factors of the integer being considered
// 2. The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

// Example
// a = [2, 6]
// b = [24, 36]
// There are two numbers between the arrays: 6 and 12.
// 6 % 2 = 0, 6 % 6 = 0, 24 % 6 = 0, 36 % 6 = 0 for the first value.
// 12 % 2 = 0, 12 % 6 = 0, 24 % 12 = 0, 36 % 12 = 0 for the second value. Return 2.

// Function Description
// Complete the getTotalX function in the editor below.
// getTotalX has the following parameter(s):
// int a[n]: an array of integers
// int b[m]: an array of integers

// Returns
// int: the number of integers that are between the sets

// Input Format
// The first line contains two space-separated integers, n and m, the number of elements in arrays a and b.
// The second line contains n distinct space-separated integers a[i] where 0 <= i < n.
// The third line contains m distinct space-separated integers b[j] where 0 <= j < m.

// sample input
// 2 3
// 2 4
// 16 32 96

// sample output
// 3

function getTotalX(a,b) {
    // Write your code here
    let result = 0;
    // find the max of a and min of b
    // this is because the number must be between the two arrays and the number must be 
    // a factor of the min of b
    // and a factor of the max of a
    let max = Math.max(...a);
    let min = Math.min(...b);
    let count = 0;
    // loop through the max and min
    for(let i = max; i <= min; i += max) {
        // check if the number is a factor of the min of b
        if(a.every(num => i % num === 0)) {
            // check if the number is a factor of the max of a
            if(b.every(num => num % i === 0)) {
                // increment the count
                count++;
            }
        }
    }
    return count;
}

console.log(getTotalX([2,4],[16,32,96]));

// from the most voted discussion post
// O(n log(n)) solution
// 1. find the LCM of all the integers of array A.
// 2. find the GCD of all the integers of array B.
// 3. Count the number of multiples of LCM that evenly divides the GCD.