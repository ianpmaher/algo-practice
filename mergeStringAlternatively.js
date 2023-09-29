// Direections

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

function mergeAlternatively(word1, word2) {
  // Code Goes Here...
  
  // need length of both words for logic 
  const bothWords = word1.concat(word2)
  // initialize mergedString to return 
  let mergedString = ""
  // the bothWords.length is goofy but it allows 
  // "if string longer than other, append..."
  for (let i = 0; i < bothWords.length; i++) {
    // starting with first word, select the "ith"
    // character of the first word
    // if still letters left
    if (i < word1.length) {
      mergedString += word1.charAt(i);
    }
    // get "ith" character of second word 
    // if still letters left
    if (i < word2.length) {
      mergedString += word2.charAt(i);
    }
  }
  return mergedString;
}

console.log(mergeAlternatively('abc', 'pqr'));
console.log(mergeAlternatively('ab', 'pqrs'));
console.log(mergeAlternatively('abcd', 'pq'));
console.log(mergeAlternatively('binx', 'baxter'));


// sam
// array = word1.split("")
// if(array[i] != undefined {
  // mergedArray.push(array1[i])
// })