// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.


// Directions

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Pseudocode - 
// define empty object variable
// iterate over nums
// increment count of existing key value pair
// OR create new key value pair
// iterate over hash table
// if value of key equals 1 return that key

function singleNumber(nums) {
  // define empty object variable
  let hash = {};

  // iterate over nums
  for (const num of nums) {
    // increment count of existing key value pair
    // OR create new key value pair
    hash[num] = hash[num] + 1 || 1;
  }

  console.log('this is fully cooked hash object', hash);

  // iterate over hash table
  for (const tot in hash) {
    // if value of key equals 1 return that key
    if (hash[tot] === 1) {
      return tot;
    }
  }
}


console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1

// function singleNumber(nums) {
//   // Code Goes Here
//   for (let i=0; i<nums.length; i++) {
//     let count = 0
//     for (let j=0; j<nums.length; i++) {
//         if (nums[i] === nums[j]) {
//           count++
//         }
//       if (count === 1) {
//         return nums[i]
//       }
//     }
//   }
// }
// console.log(singleNumber([2, 2, 1])); // 1
// console.log(singleNumber([4, 1, 2, 1, 2])); // 4
// console.log(singleNumber([1])); // 1

// function singleNumber(nums) {
//   const numOfInt = {}
//   for (const num of nums) {
//     numOfInt[num] = numOfInt[num] + 1 || 1
//   }
//   let array = Object.keys(numOfInt).sort**b, a) => numOfInt[b]
// }

