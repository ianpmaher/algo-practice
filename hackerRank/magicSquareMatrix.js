// We define a magic square to be an n x n matrix of distinct positive integers from 1 to n^2 where the sum of any row, column, or diagonal of length n is always equal to the same number: the magic constant.
// You will be given a 3 x 3 matrix s of integers in the inclusive range [1, 9]. We can convert any digit a to any other digit b in the range [1, 9] at cost of |a - b|. Given s, convert it into a magic square at minimal cost. Print this cost on a new line.
// Note: The resulting magic square must contain distinct integers in the inclusive range [1, 9].
// For example, we start with the following matrix s:
// 5 3 4
// 1 5 8
// 6 4 2
// We can convert it to the following magic square:
// 8 3 4
// 1 5 9
// 6 7 2
// This took three replacements at a cost of |5-8| + |8-9| + |4-7| = 7.
// Function Description
// Complete the formingMagicSquare function in the editor below. It should return an integer that represents the minimal total cost of converting the input square to a magic square.
// formingMagicSquare has the following parameter(s):
// s: a 3 x 3 array of integers
// Input Format
// Each of the lines contains three space-separated integers of row s[i].
// Output Format
// Print an integer denoting the minimum cost of turning matrix s into a magic square.
// Sample Input 0
// 4 9 2
// 3 5 7
// 8 1 5
// Sample Output 0
// 1
// Explanation 0
// If we change the bottom right value, s[2][2], from 5 to 6 at a cost of |6-5| = 1, s will become a magic square at the minimum possible cost.

function formingMagicSquare(s) {
    // Write your code here
    let magicSquares = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
    ];
    let minCost = 81;
    for (let i = 0; i < 8; i++) {
        let cost = 0;
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                cost += Math.abs(s[j][k] - magicSquares[i][j][k]);
            }
        }
        if (cost < minCost) {
            minCost = cost;
        }
    }
    return minCost;
}
// Time Complexity: O(1)
// Space Complexity: O(1)

console.log(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]])); // 1

// explanation from site: 
// All of the posted solutions require pre-computing all eight magic squares. I wanted to offer a few suggestions on how to generate them -- or at least show what I did.

// We can start with two observations: a) the "middle" of any 3x3 magic square must be 5, and b) the "magic sum" must be 15.

// Here's a way to think about the "magic sum". The sum of numbers 1-9 is 45. The three horizontal rows will include all 9 numbers (and thus sum to 45). And since there are three rows, each row will sum to 45/3 = 15.

// It takes a bit of pen and paper to see that the middle must be 5 (or at least, it took me some trial and error). But once we know these two things, we can think in terms of the 4 "pairs" that can go on opposite sides of the 5:

// 1 and 9
// 2 and 8
// 3 and 7
// 4 and 6
// So for example, if 4 goes Top/Left, we know that 6 must go Bottom/Right (since the "magic sum" must be 15, and 5 is in the middle)

// A bit more on pen/paper will show that only two of these pairs fit in the "corners":

// 2 and 8
// 4 and 6
// The other two pairs must be "wedged" inside the corner paris (e.g., top middle, bottom middle). And once we set our four corners, there is only 1 way to place the rest of the numbers.

// This is enough to show that there are 8 magic matrices. There are 4 possible ways to place the 4 and 6 pair (the 4 could go in Top/Left, Top/Right, Bottom/Right, Bottom/Left). Then once we place the 4 and 6, there are two different ways we could place the 2 and 8.

// To acutally generate these matrices, I started with one "seed" (which happend to be the first magic matrix I found):

// [4 3 8]
// [9 5 1]
// [2 7 6]
// From ths seed, we can rotate it clockwise 4 times (so the 4 appears in each corner). And then from each rotation, we can place the remaining digits either clockwise, or counterclockwise around the 5 (going counterclockwise is equivalent to getting the "mirror" of the matrix along a diagonal).

// These two matrix manipulations are also great helper functions to have handy on other problems.

// explanation: 
// To solve this problem in JavaScript, we need to follow these steps:

// Identify All Possible Magic Squares: Since the matrix is 3x3, there are a limited number of magic squares. We can hardcode these.

// Calculate the Cost to Convert a Given Matrix to a Magic Square: For a given matrix and a magic square, we need to calculate the cost to convert the matrix into that magic square. The cost is the sum of the absolute differences between the corresponding elements of the matrix and the magic square.

// Find the Minimum Cost: Compare the costs for converting the given matrix to each of the possible magic squares, and find the minimum cost.