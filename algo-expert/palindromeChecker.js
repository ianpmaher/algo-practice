// Palindrome Check
// Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.
// A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

function isPalindrome(string) {
    // Write your code here.
    // arrays are iterable, so .split("") by letter
    // const str = string.split("")
    // const reversed = str.reverse()
    // compare reversed string to input str
    // iteration
    let left = 0; // left pointer 
    let right = string.length - 1; // right pointer
    while (left < right) { // while loop is essentially a for loop that runs until this condition is met
        // while loop stops when left pointer is greater than right pointer
        if (string[left] != string[right]) { // if the letters at the left and right pointers are not equal
            // since left and right pointers are numbers, we can use them to access the letters in the string
            return false;
        }
        left++; // move left pointer to the right by incrementing by 1
        right--; // move right pointer to the left by decrementing by 1
    }
    return true; // if the while loop completes, then the string is a palindrome because all the letters were equal
}

// NESTED LOOPS BAD BIG O(N^2)

// Time Complexity: O(n) where n is the length of the input string // O(n/2) is O(n)
// in worst case, we have to iterate through the entire string
// Space Complexity: O(1) no extra space used, only pointers

function isPalindromeRecursive(string, i = 0) {
    // Write your code here.
    const j = string.length - 1 - i; // calculate the right pointer
    // base case
    // if the left pointer is greater than or equal to the right pointer
    // then we have checked all the letters in the string

    return i >= j ? true : string[i] === string[j] && isPalindromeRecursive(string, i + 1);
    // above line is equivalent to:
    // if (i >= j) {
    //     return true;
    // } else {
    //     return string[i] === string[j] && isPalindromeRecursive(string, i + 1);
    // }

    // if the letters at the left and right pointers are equal
    // then we recursively call the function with the left pointer incremented by 1
    // if the letters are not equal, then the function will return false
    // if the left pointer is greater than or equal to the right pointer, then we have checked all the letters in the string
    // and the function will return true
}

// Time Complexity: O(n) where n is the length of the input string
// in worst case, we have to iterate through the entire string
// Space Complexity: O(n) because of the recursive call stack