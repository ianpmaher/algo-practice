// Directions

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// PSEUDOCODE HERE
// iterate through digits array starting from the last number
// check to see if value on current index is less than 9
// check to see if you need to carry a 1 over
// if number is less than 9 add 1 to current index value 
// return digits and stop running for loop
// add 0 value to end of array 
// add 1 to beginning of array
// return digits 

// function plusOne(digits) {
//   // YOUR CODE GOES HERE
//   // 
//   let index = digits.length -1;
//   // while the index is greater than or equal to zero and = 9...
//   // set it as 0
//   for (i = digits.length; i > digits.length; i--) {
//     if (index >= 0 && digits[index] === 9) {
//       digits[index--] = 0
//     } else if (index<0) {
//       // if index is less than 0 (if array digits = 9)
//       // insert 1 at the beginning of the vector
//       digits.unshift(1)
//     } else {
//       digits[index]++
//     }
//     return digits
//   }
// }

console.log(plusOne([1, 2, 3])); // [ 1, 2, 4 ]
console.log(plusOne([4, 3, 2, 1])); // [ 4, 3, 2, 2 ]
console.log(plusOne([9])); // [ 1, 0 ]

// Rei's solution
// function plusOne(digits) {
//   let num = digits.join("")
//   num=parseInt(num)
//   num+= 1;
//   num = num.toString()
//   num=num.split("")
//   return num
// }

// Gore
function plusOne(digits) {
  // iterate through digits array starting from the last number
  for (let i = digits.length - 1; i >= 0; i--) {
    // check to see if value on current index is less than 9
    // checks to see if you need to carry over 1
    if (digits[i] < 9) {
      // if less than 9 then add 1 to current index value
      digits[i]++;
      // return digits
      return digits;
    } else {
      // set value of digits to 0
      digits[i] = 0;
    }
  }
  // add 1 to beginning of array
  // unshift adds 1 or more values
  // to beginning of an array
  digits.unshift(1);
  // return digits
  return digits;
}
