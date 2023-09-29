// Directions

// Given an integer array nums, return the most frequent even element.

// If there is a tie, return the smallest one. If there is no such element, return -1.

function mostFrequentEven(nums) {
  // define variable as empty object
  const hash = {};

  // iterate over array
  // hash = { '0': 1, '2': 1, '4': 1 }
  // hash = { '0': 1, '2': 2, '4': 2 }
  for (const num of nums) {
    // if num is modulo 2 then create key value pair
    if (num % 2 === 0) {
      hash[num] = hash[num] + 1 || 1;
    }
  }

  console.log("hash values", hash);

  // convert object into array and sort values in descending order
  // arr = ['2', '4', '0]
  // arr is this way because value of keys 2 and 4 are 2
  // whereas the value of key 0 is 1
  const arr = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);

  console.log("array values", arr);

  // if arr length equals 0 return -1 otherwise return the first element in the array
  return arr.length === 0 ? -1 : arr[0];
}

// function mostFrequentEven(nums) {
//   // Code Goes Here
//   const count = (arr, select) => {
//     return arr.filter((iterator) => iterator === select).length
//   }
//   const entries = []
//   for (const num of nums){
//     if(entries.indexOf(num) === -1) {
//       entries.push(num)
//     }
//   }
//   entries.sort((a,b) => {if(parseInt(a) < parseInt(b)){return -1}})
//   let highest = 0
//   for (const num of entries) {
//     const val = count(nums,num)
//     if (num% 2 === 0){
//       if (val > highest) {
//         return
//       }
//     }
//   }
// }

console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1])); // 2
console.log(mostFrequentEven([4, 4, 4, 9, 2, 4])); // 4
console.log(mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7])); // -1
