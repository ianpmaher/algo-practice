// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
// Lily decides to share a contiguous segment of the bar selected such that:
// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// You must determine how many ways she can divide the chocolate.
// Consider the chocolate bar as an array of squares, s = [2, 2, 1, 3, 2]. She wants to find segments summing to Ron's birth day, d = 4 with a length equalling his birth month, m = 2. In this case, there are two segments meeting her criteria: [2, 2] and [1, 3].
// Function Description
// Complete the birthday function in the editor below. It should return an integer denoting the number of ways Lily can divide the chocolate bar.
// birthday has the following parameter(s):
// s: an array of integers, the numbers on each of the squares of chocolate
// d: an integer, Ron's birth day
// m: an integer, Ron's birth month
// Input Format
// The first line contains an integer n, the number of squares in the chocolate bar.
// The second line contains n space-separated integers s[i], the numbers on the chocolate squares where 0 <= i < n.
// The third line contains two space-separated integers, d and m, Ron's birth day and his birth month.
// Output Format
// Print an integer denoting the total number of ways that Lily can portion her chocolate bar to share with Ron.
// Sample Input 0
// 5
// 1 2 1 3 2
// 3 2
// Sample Output 0
// 2
// Explanation 0

function birthday(s, d, m) {
    // Write your code here
    // s.length = number of squares in chocolate bar
    // s = array of integers, each is the integer that is on each square
    // d = birth day
    // m = birth month
    // need to find combinations of chocolate bar where integers sum to = d
    // and "length" of chocolate bar = m
    // basically, I guess it is the number of pairs of chocolate bars?
    // loop through each integer in array
    let result = 0;
    // let tempArr = [];
    // for (let i = 0; i < s.length; i++) { // old code
    for (let i = 0; i <= s.length - m; i++) {
        let sum = 0;
        for (let j = i; j < i + m; j++) { // inner loop to sum up the integers in the array that are m apart
            // add the integers to sum 
            sum += s[j];
        }
        // 
        if (sum === d) {
            result++;
        }
    }
    // result = tempArr.length;
    return result;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2)); // 2