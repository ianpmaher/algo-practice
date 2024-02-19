// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every closing bracket must close its corresponding opening bracket.

// Example 1:
// Input: s = "()"
// Output: true

// could have a bank of correct brackets? or a bank of those rules?
// for loop to iterate over the string
// per neetcode, I will be using a stack to use it
// so if stack, then I can take string and turn into substrings or array

// seems pretty strict if "open brackets must be closed in correct order"

// attempt with stack // need to keep track order with the stack dynamic array
// attempt to solve by including a peek() sort of function

function isValid(s) {
    const stack = [];
    const closeToOpen = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (closeToOpen[char]) {
            stack.push(char);
        } else {
            const lastOpen = stack.pop();
            if (closeToOpen[lastOpen] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
