// Breaking the Records
// 
// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
// She tabulates the number of times she breaks her season record for most points and least points in a game. 
// Points scored in the first game establish her record for the season, and she begins counting from there.\
// For example, assume her scores for the season are represented in the array scores = [12, 24, 10, 24].
// Scores are in the same order as the games played. She would tabulate her results as follows:
//                                  Count
// Game  Score  Minimum  Maximum   Min Max
//  0      12     12       12       0   0
//  1      24     12       24       0   1
//  2      10     10       24       1   1
//  3      24     10       24       1   1
//
// Given Maria's scores for a season, find and print the number of times she breaks her records for most and least points scored during the season.
// Function Description
// Complete the breakingRecords function in the editor below. It must return an integer array containing the numbers of times she broke her records.
// Index 0 is for breaking most points records, and index 1 is for breaking least points records.
//
// breakingRecords has the following parameter(s):
// scores: an array of integers
// Input Format
// The first line contains an integer n, the number of games.
// The second line contains n space-separated integers describing the respective values of score0, score1, ..., scoreN-1.
// Output Format
// Print two space-seperated integers describing the respective numbers of times her best (highest) score increased and her worst (lowest) score decreased.
//
// Sample Input 0
//
// 9
// 10 5 20 20 4 5 2 25 1
//
// Sample Output 0
//
// 2 4
//
// Explanation 0
// The diagram below depicts the number of times Maria broke her best and worst records throughout the season:

function breakingRecords(scores) {
    let minScore = scores[0];
    let maxScore = scores[0];
    let minCount = 0;
    let maxCount = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < minScore) {
            minScore = scores[i];
            minCount++;
        } else if (scores[i] > maxScore) {
            maxScore = scores[i];
            maxCount++;
        }
    }
    return [maxCount, minCount];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])); // [2, 4]