// Counting Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets
// (both uppercase and lowercase) and numeric digits.

// Chat GPT
function countDuplicateAlphanumeric(inputString) {
  //...
  // initialize counter variable
  const charCount = {};
  const inputStringLower = inputString.toLowerCase(); // Convert the input string to lowercase

  for (const char of inputStringLower) {
    if (char.match(/[a-z0-9]/i)) {
      // Check if the character is alphanumeric
      if (char in charCount) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  }

  let duplicateCount = 0;
  for (const count of Object.values(charCount)) {
    if (count > 1) {
      duplicateCount++;
    }
  }

  return duplicateCount;
}

// Example usage
const inputStr = "aA123bcdAA";
const result = countDuplicateAlphanumeric(inputStr);
console.log(result); // Output should be 3 (A, a, and 2)

// others on CodeWars
// function duplicateCount(text){
//   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }

// function duplicateCount(text){
//   return text.toLowerCase().split('').filter(function(val, i, arr){
//     return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//   }).length;
// }

// function duplicateCount(text){
//   let lower = text.toLowerCase();
//   let count = 0;
//   let used = [];
  
//   lower.split('').forEach(function(letter) {
//     if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
//       count++;
//       used.push(letter);
//     }
//   });
  
//   return count;
// }

// function duplicateCount(text){
//  let count = 0,
//  buffer = '',
//  sortedStr = text.toLowerCase().split('').sort().join('');

//  for(let i = 0; i < sortedStr.length; i++) {
//    if (sortedStr[i] == sortedStr[i+1]  && sortedStr[i] != buffer) {
//      buffer = sortedStr[i];
//      count++;
//      i++;
//    }
//  }
//  return count;
// }