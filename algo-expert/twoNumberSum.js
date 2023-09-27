// Write a function that takes in a non-empty array of distinct integers and an integer representing a TARGET SUM.
// If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order.
// If no two numbers sum up to the target sum, the function should return an empty array.
// Note that the target sum has to be obtained by summing two different integers in the array; you 
// can't add a single integer to itself in order to obtain the target sum.
// You can assume that there will be at most one pair of numbers summing up to the target sum.

function twoNumberSum(array, targetSum) {
  // Write your code here.
  // array loop
  // hash map
  const numbers = {};
  for (let item of array) {
    let potentialNum = targetSum - item;
    if (potentialNum in numbers) {
      return [potentialNum, item];
    } else {
      numbers[item] = true;
    }
  }
  return [];
}

// Create an object to track the numbers 
// check for potential number if it is already present in object then return it otherwise update the object accordingly .

// Hint: For every number X in the input array, you are essentially trying to find a corresponding 
// Number Y such that X + Y = targetSum
// with two variables in this equation known to you, solve for Y
// Hint Try storing every number in a hash table, solving the equation mentioned in prev hint for every Number,
// and checking if the Y that you find is stored in the hash table

// test case 
// input {
// "array": [5, 6, 1],
// "targetSum": 5
// }
// output from my code:
// [4, 1]

// so the above code works by taking each item in array
// variable "potentialNum" is targetSum - item
// if the "potentialNum" is in hashmap {numbers}