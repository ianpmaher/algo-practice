// Link: https://www.algoexpert.io/questions/Tournament%20Winner
// OPTIMAL SOLUTION: O(n) time | O(k) space - where n is the number of competitions and k is the number of teams

// There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible.
// Teams compete in a round robin, where each team faces off against all other teams. Only two teams compete against each other at a time, and
// for each competition, one team is designated the home team, while the other team is the away team.
// In each competition there's always one winner and one loser; there are no ties.
// ==================== //
// A team receives 3 points if it wins and 0 points if it loses.
// The winner of the tournament is the team that receives the most amount of points.

// ==================== //
// Given an array of pairs representing the teams that have competed against each other
// and an array containing the results of each competition,
// write a function that returns the winner of the tournament.

// The input arrays are named *** competitions *** and *** results ***, respectively.
// The competitions array has elements in the form of
// [homeTeam, awayTeam],
// where each team is a string of at most 30 characters representing the name of the team.
// The results array contains info about the winner of each corresponding competition in the competitions array.

// Specifically, results[i] denotes the winner of competitions[i],
// where a 1 in the results array means that the home team in the corresponding competition won
// and a 0 means that the away team won.

// It's guaranteed that exactly one team will win the tournament and that
//  each team will compete against all other teams exactly once.

// It's also guaranteed that the tournament will always have at least two teams.

// ==================== //
// Sample Input
// competitions = [
//     ["HTML", "C#"],
//     ["C#", "Python"],
//     ["Python", "HTML"],
//   ]
//   results = [0, 0, 1]
// Sample Output
//   "Python"
// // C# beats HTML, Python Beats C#, and Python Beats HTML.
// // HTML - 0 points
// // C# -  3 points
// // Python -  6 points

// ==================== //
// THOUGHT PROCESS //
// need to track each team by string...
// assign points for winning => if win, then corresponding variable +3 pts
// algorithm => if team(str) is in array, then
// // if in home position, compare to results array
// // if 0, then +3 pts, if 1, then 0 points
// // or just +3 points to winner based on results array

// USE A HASH TABLE
// hash table to store the total points collected by each team,
// with team names as KEYS in the hash table
// once determine # points to each team, then greatest num points = winner

function tournamentWinner(competitions, results) {
    let hashTable = new Map();

    for (let j = 0; j < competitions.length; j++) {
        const homeTeam = competitions[j][0];
        const awayTeam = competitions[j][1];
        const winner = results[j] === 1 ? homeTeam : awayTeam;

        const currentScore = hashTable.get(winner) || 0;
        hashTable.set(winner, currentScore + 3);
    }

    let winner = "";
    let maxPoints = 0;
    
    console.log(hashTable);

    for (let [team, points] of hashTable.entries()) {
        if (points > maxPoints) {
            maxPoints = points;
            winner = team;
        }
    }

    return winner;
}

let compInput = [
    ["ian", "erica"],
    ["ian", "fenway"],
    ["erica", "fenway"],
    ["erica", "ian"],
];
let resultInput = [1, 0, 0, 1];

const winner = tournamentWinner(compInput, resultInput);
console.log(winner);
// function tournamentWinner(competitions, results) {
//     let hashTable = new Map();

//     for (let j = 0; j < competitions.length; j++) {
//         let score = hashTable.get(competitions[j][1]) || 0;
//         hashTable.set(competitions[j][1], results[j] === 0 ? score + 3 : score);
//     }

//     let keyWithHighestNum = [...hashTable.entries()].reduce((a, e) => e[1] > a[1] ? e : a)[0];

//     printScore("erica");
//     printScore("ian");
//     printScore("fenway");

//     function printScore(key) {
//         console.log(hashTable.get(key));
//     }

//     return keyWithHighestNum;
// }

// let compInput = [["ian", "erica"], ["ian", "fenway"], ["erica", "fenway"]];
// let resultInput = [1, 0, 1];

// tournamentWinner(compInput, resultInput);
//

// let score = hashTable.get(competitions[j][1]) || 0 // if score is undefined, then set to 0
//         // hashTable.set(competitions[j][0], results[j] === 0 ? score + 3 : score) // if results[j] === 0, then score + 3, else score

//         if (results[j] > 0) {
//             console.log("home team won")
//             hashTable.set(competitions[j][0], score = score + 3)
//             hashTable.set(competitions[j][0], score = score)
//         } else {
//             console.log("away team won")
//             hashTable.set(competitions[j][1], score = score + 3)
//             hashTable.set(competitions[j][1], score = score)
//         }
//         // hashTable.set(competitions[j], results[j])
//     }
//     let keyWithHighestNum = [...hashTable.entries()].reduce((a, e) => e[1] > a[1] ? e : a)[0];

//     function printScore(key) {
//         console.log(hashTable.get(key))
//     }

//     printScore("erica")
//     printScore("ian")
//     printScore("fenway")

//     console.log(keyWithHighestNum)

// }
