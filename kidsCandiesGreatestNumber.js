// Directions

// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

// Pseudocode Goes Here
// set up function to have for loop, boolean would need to use an array method returning a boolean
// maybe .filter() or .reduce() ? 
// makes sense to have iterator/accumulator structure
// i am guessing .some() first because structured as return boolean

// rei

function kidsWithCandies(candies, extraCandies) {
  // Code Goes Here
  const result = new Array(candies.length).fill(false)

  // ... is spreader operator
  const max = [...candies].sort((a, b) => b - a)[0]

  for (let i=0; i<candies.length; i++) {
    if (candies[i] + extraCandies >= max) result[i] = true;
  }
  return result;
}

// sam's 
// function kidsWithCandies(candies, extraCandies) {

// let booleanArr = []
//   for (let i in candies) {
//     if (candies[i] + extraCandies >= Math.max(...candies)) {
//       booleanArr.push(true)
//     } else {
//       booleanArr.push(false)
//     }
//     return booleanArr
//   } 
// }

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // [true,true,true,false,true]
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true,false,false,false,false]
console.log(kidsWithCandies([12, 1, 12], 10)); // [true,false,true]

// singa
// function kidsWithCandies(candies, extraCandies) {

  // resultsArr = []

  // const greatestCandy = candies.reduce((a,b) => Math.max(a,b), -Infinity)
  // for (const candy of candies) {
  //   const added = candy + extraCandies
  //   if (added >= greatestCandy) {
  //     resultsArr.push(true)
  //   } else {
  //     results.Arr.push(false)
  //   }
  // }
// }


// Gore
// Directions

// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

// function kidsWithCandies(candies, extraCandies) {
//   // define hash map to keep track of candy values
//   // including extra candies
//   const pillowCase = {};

//   // define variable for max candy amount
//   let maxCandy = Math.max(...candies);

//   // iterate over candies array to create key/value pairs
//   for (const [index, candy] of candies.entries()) {
//     const key = `kid ${index + 1}`;
//     pillowCase[key] = candy + extraCandies;
//   }

//   // console.log('pillowCase', pillowCase);

//   // define variable for output
//   const ballerKid = [];

//   // iterate over pillowCase
//   for (const candy in pillowCase) {
//     // if value is greater than maxCandy
//     // push true to ballerKid else
//     // push false to ballerKid
//     ballerKid.push(pillowCase[candy] >= maxCandy);
//   }

//   // return ballerKid
//   return ballerKid;
// }

// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // [true,true,true,false,true]
// console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true,false,false,false,false]
// console.log(kidsWithCandies([12, 1, 12], 10)); // [true,false,true]