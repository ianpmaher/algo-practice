// Given an array of positive integers representing the values of coins in your possession,
// write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create.
// The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).
// For example, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is 4.
// If you're given no coins, the minimum amount of change that you can't create is 1.

// Sample Input
// coins = [5, 7, 1, 1, 2, 3, 22]
// Sample Output
// 20

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// Hint 4:
// Create a variable to store the amount of change that you can currently create up to
// Sort all of your coins and loop through them in ascending order
// At every iteration, compare the current coin to the amount of change you can currently create up to
// if coin value > amount change currently create + 1, just return current amount of change + 1
// if coin value <= amount of change can create + 1, add value of coin to amount of change can currently create up to, and continue to iterate through

function nonConstructibleChange(coins) {
    // write code here

    // BIG O Notation
    // O(nlogn) time => sort, fastest like merge sort or quick sort
    // O(1) space --> if can sort array in place  aka mutate

    // n(log(n)) + n time (since n is less than nlogn, then we can drop it)

    // forgot this part also because .sort() is string based
    function compareNumbers(a, b) {
        return a - b;
    }

    let sortedCoins = coins.sort(compareNumbers);
    console.log(sortedCoins);
    let currentChangeCreated = 0;

    for (let coin of coins) {
        if (coin > currentChangeCreated + 1) {
            return currentChangeCreated + 1;
        }
        currentChangeCreated += coin;
    }
    return currentChangeCreated + 1;

    
}

let testArr = [5, 7, 1, 1, 22, 2, 3];

const result = nonConstructibleChange(testArr);

console.log(result)
