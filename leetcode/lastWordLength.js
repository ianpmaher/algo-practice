// Length of Last Word
// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// example
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Constraints:
// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

var lengthOfLastWord = function (s) {
    let result = "";
    let trimmed = s.trim();
    let arrString = trimmed.split(" ");
    // console.log(arrString.length)
    let last = arrString[arrString.length - 1];
    return (result = last.length);
};
