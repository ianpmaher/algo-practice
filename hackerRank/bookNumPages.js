// A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book.
// They always turn pages one at a time. When they open the book, page 1 is always on the right side:
// When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides.
// The last page may only be printed on the front, given the length of the book.
// If the book is n pages long, and a student wants to turn to page p, what is the minimum number of pages to turn?
// They can start at the beginning or the end of the book.
// Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.
// Function Description
// Complete the pageCount function in the editor below. It should return the minimum number of pages to turn.
// pageCount has the following parameter(s):
// n: the number of pages in the book
// p: the page number to turn to
// Input Format
// The first line contains an integer n, the number of pages in the book.
// The second line contains an integer, p, the page to turn to.
// Constraints
// 1 <= n <= 10^5
// 1 <= p <= n
// Output Format // Print an integer denoting the minimum number of pages that must be turned to get to page p.
// Sample Input 0
// 6
// 2
// Sample Output 0
// 1
// Explanation 0

// MY SOLUTION WAS TOO COMPLICATED, SOLUTION IS WAY SIMPLER 
// function pageCount(n, p) {
//     // Write your code here
//     // two loops, one for front to back (i++), one for back to front (i--)
//     // n = number of pages // p = page to turn to
//     // return num ==> minimum # pages to turn
//     // start by creating array to define range?
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
//     // The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.
//     const book = [...Array(n).keys()];
//     // console.log(book)
//     let countForwards = 0;
//     let countBackwards = 0;
//     for (let i = 0; i < p - 1; i++) {
//         // p - 1 because of counting 0 as "page 1"
//         countForwards++;
//     }
//     for (let j = book.length; j > p + 1; j--) {
//         countBackwards++;
//     }
//     let minPages = 0;
//     if (countBackwards < countForwards) {
//         minPages = countBackwards;
//     } else if (countBackwards > countForwards) {
//         minPages = countForwards;
//     }
//     return minPages;
//     // need to figure out how to make it so first page (n=0)
//     // and then account for how pg 2-3 are open at same time
// }

function pageCount(n, p) {
    // Calculate how many pages from the front
    const fromFront = Math.floor(p / 2);
    // Calculate how many pages from the back
    const fromBack = Math.floor(n / 2) - fromFront;
    // Return the minimum number of pages
    // Math.min() will return the smallest value of the two
    return Math.min(fromFront, fromBack);
}


console.log(pageCount(6, 2)); // 1
console.log(pageCount(7,3)); 