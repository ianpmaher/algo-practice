// Hackerland University has the following grading policy:
// every student receives a *grade* in the inclusive range of 0 - 100
// any grade less than 40 is a failing grade

// Sam is a professor at the university that likes to round each grade according to these rules:
// 1) If the difference between the GRADE and the next multiple of 5 is less than 3, round *grade* up to the next multiple of 5
// 2) If the value of grade is less than 38, no rounding occurs as it will still be a failing grade
// examples:
// * grade = 84 => round to 85 because (85-84) < 3
// * grade = 29 => do not round, still failing
// * grade = 57 => do not round, (60-57) !< 3

// Given an initial value of *grade* for each of Sam's *n* students, write code to automate the rounding process

// Input : first line contains single integer *n*
// Input : each line *i* of the *n* subsequent lines contains a single integer, *grades[i]*
// Constraints: 1 <= n <= 60
// Constraints: 0 <= grades[i] <= 100

// in HackerRank, the function is defined as
// accepts parameter int[n]: the grades before rounding => an array of integers
// returns int[n], the grades after rounding, as appropriate  ==> an array of integers

const gradeRounding = (grades) => {
  // Write your code here
  const roundedGrades = [];

  for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];

    if (grade < 38) {
      // No rounding for failing grades
      roundedGrades.push(grade);
    } else {
      const nextMultipleOf5 = Math.ceil(grade / 5) * 5; // Calculate the next multiple of 5
      if (nextMultipleOf5 - grade < 3) {
        // Round up to the next multiple of 5
        roundedGrades.push(nextMultipleOf5);
      } else {
        // No rounding needed, keep the grade as it is
        roundedGrades.push(grade);
      }
    }
    // return roundedGrades;
  }

  return roundedGrades;
};

console.log(gradeRounding([4, 73, 67, 38, 33]))


// really short ES6 on website: 

// function solve(grades){
//   return grades.map((n) => {
//     let diff = 5 - (n % 5);
//     if(diff < 3 && n >= 38) {
//         n += diff;
//     }
    
//     return n;
// })
// }

