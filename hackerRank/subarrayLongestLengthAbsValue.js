//  Given an array of integers, find the length of the longest sub-array with absolute diff less than or equal to 1.
//  Example:
//  a = [1, 1, 2, 2, 4, 4, 5, 5, 5]
//  There are two sub-arrays meeting the criterion: [1, 1, 2, 2] and [4, 4, 5, 5, 5]. The maximum length sub-array has 5 elements.
// Function Description
// Complete the pickingNumbers function in the editor below.
// pickingNumbers has the following parameter(s):
// int a[n]: an array of integers
// Returns
// int: the length of the longest sub-array that meets the criterion
// Input Format
// The first line contains a single integer n, the size of the array a.
// The second line contains n space-separated integers, each an a[i].
// Constraints
// 2 <= n <= 100
// 0 < a[i] < 100
// The answer will be >= 2.
// Sample Input 0
// 6
// 4 6 5 3 3 1
// Sample Output 0
// 3
// Explanation 0
// We choose the following multiset of integers from the array: {4, 3, 3}. Each pair in the multiset has an absolute difference <= 1 (i.e., |4 - 3| = 1 and |3 - 3| = 0), so we print the number of chosen integers, 3, as our answer.

function pickingNumbers(a) {
    let maxNum = 0;
    let count = 0;
    // I was on the right track with sorted the array with this sort callback function!
    let sorted = a.sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
        // second loop increases the time complexity to O(n^2) but need to compare each element to every other element in the array
        // research on geeksforgeeks calls this a brute force approach, and more efficient solutions are available
        // such as using a hash table to store the frequency of each element in the array or heap sort?
        for (let j = i; j < sorted.length; j++) {
            if (Math.abs(sorted[i] - sorted[j]) <= 1) {
                count++;
            }
        }
        if (count > maxNum) {
            maxNum = count;
        }
        count = 0;
    }
    return maxNum;
}
