// You're choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump 
// in the positive direction(i.e, toward positive infinity).  
// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location as part of the show.
// Complete the function kangaroo which takes starting location and speed of both kangaroos as input, and return Yes or No appropriately.
// example:
// x1 = 2
// v1 = 1
// x2 = 1
// v2 = 2
// After one jump, they are both at x = 3, (x1 + v1 = 2 + 1, x2 + v2 = 1 + 2), so the answer is YES.
// function description:
// Complete the function kangaroo in the editor below. It should return YES if they reach the same position at the same time, or NO if they don't.
// kangaroo has the following parameter(s):
// x1, v1: integers, starting position and jump distance for kangaroo 1
// x2, v2: integers, starting position and jump distance for kangaroo 2
// Input Format:
// A single line of four space-separated integers denoting the respective values of x1, v1, x2, and v2.

// sample input:
// 0 3 4 2
// sample output:
// YES

function kangaroo(x1, v1, x2, v2) {
    // declare a variable to hold the first kangaroo's position
    let kangaroo1 = x1;
    // declare a variable to hold the second kangaroo's position
    let kangaroo2 = x2;
    // declare a variable to hold the first kangaroo's jump distance
    let jump1 = v1;
    // declare a variable to hold the second kangaroo's jump distance
    let jump2 = v2;
    // declare a variable to hold the number of jumps
    let jumps = 0;
    // declare a variable to hold the result
    let result = '';
    // declare a variable to hold the difference between the two kangaroos
    let difference = Math.abs(kangaroo1 - kangaroo2);
    // declare a variable to hold the difference between the two jumps
    let jumpDifference = Math.abs(jump1 - jump2);
    // if the difference between the two kangaroos is less than the difference between the two jumps
    if (difference < jumpDifference) {
        // return NO
        return 'NO';
    }
    // while the result is not equal to YES
    while (result !== 'YES') {
        // increment the number of jumps
        jumps++;
        // add the jump distance to the first kangaroo's position
        kangaroo1 += jump1;
        // add the jump distance to the second kangaroo's position
        kangaroo2 += jump2;
        // if the two kangaroos are at the same position
        if (kangaroo1 === kangaroo2) {
            // set the result to YES
            result = 'YES';
        }
        // if the number of jumps is greater than 10000
        if (jumps > 10000) {
            // set the result to NO
            result = 'NO';
        }
    }
    // return the result
    return result;
}

let input = [0, 3, 4, 2];
let output = kangaroo(...input);
console.log(output)
// let input2 = [0, 2, 5, 3];
// let output2 = kangaroo(...input2);
// console.log(output2)

// from github copilot:
function numberLineJumps(x1, v1, x2, v2) {
    // Check if the kangaroo starting behind jumps farther
    if ((x1 < x2 && v1 > v2) || (x2 < x1 && v2 > v1)) {
        // Check if the difference in start positions is divisible by the difference in jump distances
        if (Math.abs(x1 - x2) % Math.abs(v1 - v2) === 0) {
            return 'YES';
        }
    }
    return 'NO';
}

console.log(numberLineJumps(0, 3, 4, 2));
console.log(numberLineJumps(0, 2, 5, 3));