// 989 Add to Array-Form of Integer
// The array-form of an integer num is an array representing its digits in left to right order.
// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

// Example 1:
// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234

// Example 2:
// Input: num = [2,7,4], k = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {

  // convert array to number
  // needed to switch from parseInt to BigInt (another object) because edge case of massive number
  const numSum = BigInt(num.join(''));
  const kBig = BigInt(k)
  const kSum = numSum + kBig;  // convert number to array

  const output = kSum.toString().split("").map(Number);
  return output;

  // take array num and concat https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
  // const numIterator = num.values();
  // let numSum = 0;
  // for (const value of numIterator) {
    // console.log(value)
    // EDGE CASE: if value is 0, then multiply by 10 to shift the number to the left by 1
    // if (value === 0) {
    //   numSum = numSum * 10;
    // }
    // add value to numSum
    // numSum = numSum + value;
  // }
  // const kSum = numSum + k;
  // number to array
  // .map(Number) uses the Number constructor function
};

console.log(addToArrayForm([1, 2, 0, 0], 34)); // [1,2,3,4]


// Approach	Time Complexity	Space Complexity
// String-Based	O(n)	O(n)
// Digit-by-Digit	O(n + \log_{10} k)	O(n + \log_{10} k)

// so the digit-by-digit approach is better than the string-based approach because it has a smaller space complexity.