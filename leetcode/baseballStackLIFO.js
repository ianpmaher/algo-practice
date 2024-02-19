// 682 baseball game
// You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.
// At the beginning of the game, you start with an empty record.
// You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:
// An integer x - Record a new score of x.
// "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
// "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
// "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
// Return the sum of all the scores on the record.
// Example 1:
// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.

// this is a stack problem
// this is the solution from a top-voted answer
var calPoints = function (operations) {
    // per neetcode, I will be using a Stack data structure to solve this problem
    return operations
        .reduce((score, op, index) => {
            if (op === "C") score.pop();
            else if (op === "D") score.push(score[score.length - 1] * 2);
            else if (op === "+") score.push(score[score.length - 1] + score[score.length - 2]);
            else score.push(+op);
            return score;
        }, [])
        .reduce((sum, num) => (sum += num), 0);
};

// this is a solution from chatGPT
function calcPoints(operations) {
    const stack = []; // Stack to keep track of scores

    operations.forEach((op) => {
        switch (op) {
            case "+":
                // Add the sum of the last two scores to the stack
                const top = stack.pop();
                const newTop = top + (stack.length > 0 ? stack[stack.length - 1] : 0);
                stack.push(top, newTop);
                break;
            case "D":
                // Double the last score and add it to the stack
                stack.push(stack.length > 0 ? 2 * stack[stack.length - 1] : 0);
                break;
            case "C":
                // Remove the last score
                stack.pop();
                break;
            default:
                // It's an integer, so parse it and add it to the stack
                stack.push(parseInt(op, 10));
        }
    });

    // Sum all the scores in the stack
    return stack.reduce((a, b) => a + b, 0);
}

// Example usage
const operations = ["5", "2", "C", "D", "+"];
console.log(calcPoints(operations)); // Output: 30

// both solutions employ the use of a stack data structure to solve the problem
// both use a reduce function to iterate through the array of operations

// the second one uses a switch statement and also various ternary operators to check for the length of the stack, so
// a bit more complex to read

// here is the same but with if else statements
function calcPoints(operations) {
    const stack = []; // Stack to keep track of scores

    operations.forEach((op) => {
        if (op === "+") {
            // Add the sum of the last two scores to the stack
            const top = stack.pop();
            const newTop = top + (stack.length > 0 ? stack[stack.length - 1] : 0);
            stack.push(top, newTop);
        } else if (op === "D") {
            // Double the last score and add it to the stack
            stack.push(stack.length > 0 ? 2 * stack[stack.length - 1] : 0);
        } else if (op === "C") {
            // Remove the last score
            stack.pop();
        } else {
            // It's an integer, so parse it and add it to the stack
            stack.push(parseInt(op, 10));
        }
    });

    // Sum all the scores in the stack
    return stack.reduce((a, b) => a + b, 0);
}

// Example usage
// const operations = ["5", "2", "C", "D", "+"];
// console.log(calcPoints(operations)); // Output: 30
