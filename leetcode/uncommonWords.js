// 883 Uncommon Words from Two Sentences

// A sentence is a string of single-space separated words where each word consists only of lowercase letters.
// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.
// Example 1:
// Input: s1 = "this apple is sweet", s2 = "this apple is sour"
// Output: ["sweet","sour"]
// Example 2:
// Input: s1 = "apple apple", s2 = "banana"
// Output: ["banana"]

/*
psuedocode
empty array for common words, array for uncommon words ?
iterate through both s1 and s2 and compare the sentences
conditional statement:
if (words in both match) {
    continue iterating
} else if (words do not match) {
    push into uncommonWordsArray
}

// just to get working I will do a nested loop but not efficient
// actually what I did was fine! 
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    // HASH MAP
    let count = {};
    // count the occurance of each word, so since each uncommon occurs just once,
    // can return the ones that occur just once
    // turn s1 and s2 from strings to arrays ==> can iterate over arrays
    // in JavaScript, let s1Arr = s1.split(" ") // separate by spaces so whole words
    const s1Arr = s1.split(" ");
    const s2Arr = s2.split(" ");

    // count freq of each word in first sentence
    for (const word of s1Arr) {
        // count per word = count per word plus one or 0 + 1 if the first time
        count[word] = (count[word] || 0) + 1;
    }
    // count freq of each word in second sentence
    for (const word of s2Arr) {
        count[word] = (count[word] || 0) + 1;
    }

    const answer = [];
    // collect words that appear only once and in one sentence
    for (const word in count) {
        if (count[word] === 1) {
            if ((s1Arr.includes(word) && !s2Arr.includes(word)) || (!s1Arr.includes(word) && s2Arr.includes(word))) {
                answer.push(word);
            }
        }
    }
    return answer;
};

const s1_1 = "this apple is sweet";
const s2_1 = "this apple is sour";

console.log(uncommonFromSentences(s1_1, s2_1));
