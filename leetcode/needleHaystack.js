// 28 Find first occurrence in a string
// Given two strings, needle and haystack, return the first index of the needle in the haystack. If the needle is not in the haystack, return -1.
// Example 1:
// Input: needle = "ll", haystack = "hello"
// Output: 2
// Example 2:
// Input: needle = "bba", haystack = "dog cat fish"
// Output: -1

var strStr = function (haystack, needle) {
    let answer = "";
    //   for (let i=0; i<haystack.length; i++) {
    //       if (needle in haystack) {
    //           return haystack[needle]
    //       } else {
    //           return -1
    //       }
    //   }
    // loop over haystack
    // found this on MDN, so no more array but in Python might need to do dif approach:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.includes(needle)) {
            answer = haystack.indexOf(needle);
            return answer;
        } else {
            answer = -1;
            return answer;
        }
    }
    return answer;
};
