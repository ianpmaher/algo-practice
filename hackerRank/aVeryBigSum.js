// Complete the 'aVeryBigSum' function below.
//  *
//  * The function is expected to return a LONG_INTEGER.
//  * The function accepts LONG_INTEGER_ARRAY ar as parameter.
//  */
// In this challenge, you are required to calculate and print the sum of the elements in an array, 
// keeping in mind that some of those integers may be quite large.
// Function Description

// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s) -->
// int ar[n]: an array of integers .
// Return --> long: the sum of all array elements

function aVeryBigSum(ar) {
  // Write your code here
  // using .reduce() method
  const initialValue = 0;
  const sumWithInitial = ar.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
  return sumWithInitial

}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])