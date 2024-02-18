// 1859 Sorting the Sentence
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// Each word consists of lowercase and uppercase English letters.
// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.
// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

// ============================================================
// First attempt
// this got 43 / 45 test cases passed.

// var sortSentence = function (s) {
//     let hashmap = new Map();
//     // can split by word with .split(" ") (space)
//     let split = s.split(" ");
//     // identifying the number (last character of each word basically)
//     // array to contain the order nums
//     let indexNumsArr = [];
//     // array to contain the new order
//     let answer = [];

//     function compareNums(a, b) {
//         return a - b;
//     }

//     for (let i = 0; i < split.length; i++) {
//         let word = split[i].split("");
//         let index = word.pop();
//         indexNumsArr.push(index);
//         // probably could use a hash map for data structure
//         // this successfully sets the key value pairs
//         // join the letters back together
//         let joined = word.join("");

//         hashmap.set(joined, index);
//     }

//     // stack overflow to sort the map by values
//     const mapSort = new Map([...hashmap.entries()].sort((a, b) => a[1] - b[1]));

//     for (let key of mapSort.keys()) {
//         answer.push(key);
//     }
//     return answer.join(" ");
// };

// console.log(sortSentence("is2 sentence4 This1 a3"));

// ============================================================
// Second attempt
var sortSentence = function (s) {
    let split = s.split(" ");
    let answer = [];

    for (let i = 0; i < split.length; i++) {
        let word = split[i].split("");
        let index = word.pop(); // this is the last character of the word (index) 
        // I did not need to put into an array
        let joined = word.join(""); // this is the word without the index
        answer[index - 1] = joined; // this is the new order 
        // this works because the index is always 1-9 and the array is 0-8 so it will always be in the right order
        // this is what copilot explained to me about variable assignment
        
        // ex arr[index] = value
        // This is an assignment operation that sets the ** element at the specified index in the array to the given value. ** 
        // If the index is within the bounds of the array, the existing value at that index will be replaced. 
        // If the index is out of bounds, the array will be automatically expanded to accommodate the new element.

    }
    return answer.join(" ");
};

// also this is apparently faster than the first attempt
// /**
//  * @param {string} s
//  * @return {string}
//  */
// var sortSentence = function(s) {
//     let sentenceArray = s.split(' ');
//     let newArray = [];
//     sentenceArray.forEach(word =>{
//         let index = word.slice(-1);
//         newArray[index-1]=word.slice(0,-1);
//     });
//     let sortedSentence = newArray.join(' ');
//     return sortedSentence;

// };
