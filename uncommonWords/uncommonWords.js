// https://leetcode.com/problems/uncommon-words-from-two-sentences/

// Directions

// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

// chatGPT answer: 
function uncommonFromSentences(s1, s2) {
  // code goes here
    const words1 = s1.split(' ');
    const words2 = s2.split(' ');

    const wordCount = {};

    for (const word of words1) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    for (const word of words2) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    const uncommonWords = [];

    for (const [word, count] of Object.entries(wordCount)) {
        if (count === 1) {
            uncommonWords.push(word);
        }
    }

    return uncommonWords;
}

// const s1 = "this is a test";
// const s2 = "this is another test";
// const result = uncommonWords(s1, s2);
// console.log(result);  // Output: ['a', 'another']


console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour')); // ['sweet', 'sour']

console.log(uncommonFromSentences('apple apple', 'banana')); // ['banana']

// my very bad attempt
// function uncommonFromSentences(s1, s2) {
// I guess start with defining the alphabet? 
// const alphabetString = "abcdefghijklmnopqrstuvwxyz"
// const alphabetArray = alphabetString.split("")
// // turn sentences into lowercase, separated by one space
// const sentence1 = s1.toLowerCase()
// const arrSentenceOne = sentence1.split(" ")
// const sentence2 = s2.toLowerCase()
// const arrSentenceTwo= s2.split(" ")
// const combinedArrays = arrSentenceOne.concat(arrSentenceTwo)
// // define an uncommon word...
// // if a series of letters (indices of the alphabet array) is unique?
// // initialize empty array for output 
// let outputArray = []
// // variable for the charCodeAt thing
// let outputSentenceOne = []
// // test if word is unique in sentence 1
// for (let i=0; i<combinedArrays.length; i++) {
//   // make the word of sentence be evaluated on charcode
//   combinedArrays.forEach
// }
// return outputSentenceOne
// }


// this is python version of ChatGPT
// def uncommon_words(s1, s2):
//     words1 = s1.split()
//     words2 = s2.split()

//     word_count = {}

//     for word in words1:
//         word_count[word] = word_count.get(word, 0) + 1

//     for word in words2:
//         word_count[word] = word_count.get(word, 0) + 1

//     uncommon_words = []

//     for word, count in word_count.items():
//         if count == 1:
//             uncommon_words.append(word)

//     return uncommon_words

// # Example usage
// s1 = "this is a test"
// s2 = "this is another test"
// result = uncommon_words(s1, s2)
// print(result)  # Output: ['a', 'another']
