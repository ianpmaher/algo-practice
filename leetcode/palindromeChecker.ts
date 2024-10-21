// 125. valid palindrome 
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true // Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
// Input: s = "race a car"
// Output: false // Explanation: "raceacar" is not a palindrome.

function isPalindrome(s: string): boolean {
  // regex to remove non letter characters
  let lowercaseNormalized = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  // string to array, reverse method, then join ==> .join("") = new string
  const reversed = lowercaseNormalized.split("").reverse().join("");
  if (lowercaseNormalized == reversed) {
      return true
  } else {
      return false
  }
};

console.log(isPalindrome("racecar")) // true