// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Pseudocode goes here
// define counter variable 
// define vowel array
// maybe define split string variable 
//iterate through string
// return counter

function vowels(str) {
  // Code goes here
  let lowerCase = str.toLowerCase()
  let vowelsDef = "aeiou"
  // initialize count variable at 0
  let count = 0;
  // splits string to array of letters
  let splitString = lowerCase.split("");
  for (let i=0; i<str.length; i++) {
    // if any indexed elements of splitString matches those of vowelsDef --> will have index of 0 or positive
    if (vowelsDef.indexOf(splitString[i]) !== -1) {
      count++;
    }
  }
  return count
}


console.log(vowels('banana')); // 3
console.log(vowels('wine')); // 2
console.log(vowels('sdfg')); // 0