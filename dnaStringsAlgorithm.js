// DNA STRINGS

// write funciton DNA transform, that takes in a DNA string and returns a string that represents its compliment

//   DNA Strings
//   In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". Write a function called dnaTransform that takes in a DNA string and returns a string that represents it's compliment.

//   Input: "ATTGC"
//   Output: "TAACG"

// DNA STRING COMPLEMENTS
// 'T' is complement of 'A'
// 'A' is complement of 'T'
// 'C' is complement of 'G'
// 'G' is complement of 'C'

// YOUR PSEUDOCODE GOES HERE
// define empty output string
// iterate over input string
// check current symbol and return compliment
// return output string

// let dnaString = "ATTGC";

// let dnaObject = {
//     T: "A",
//     A: "T",
//     C: "G",
//     G: "C",
// };

// const switchPair = () => {
//     if ((individualNucleotides = dnaObject["T"])) {
//         return "A";
//     } else if ((individualNucleotides = dnaObject["A"])) {
//         return "T";
//     } else if ((individualNucleotides = dnaObject["C"])) {
//         return "G";
//     } else if ((individualNucleotides = dnaObject["G"])) {
//         return "C";
//     } else {
//         return "error";
//     }
// };

// const dnaTransform = (string) => {
//     // YOUR CODE GOES HERE
//     const backwardsDNA = string.split("");
//     let newDNA = [];
//     for (let i = 0; i < string.length; i++) {
//         if (letter === "T") {
//             newDNA[i] = "A";
//             newDNA;
//         } else if (letter === "A") {
//             newDNA[i] = "T";
//         } else if (letter === "G") {
//             newDNA[i] = "C";
//         } else if (letter === "C") {
//             newDNA[i] = "G";
//         }
//     }
// };

// console.log(dnaTransform(dnaString)); // TAACG

//   DNA Strings
//   In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". Write a function called dnaTransform that takes in a DNA string and returns a string that represents it's compliment.

//   Input: "ATTGC"
//   Output: "TAACG"

// DNA STRING COMPLEMENTS
// 'T' is complement of 'A'
// 'A' is complement of 'T'
// 'C' is complement of 'G'
// 'G' is complement of 'C'

// YOUR PSEUDOCODE GOES HERE
// define empty output string
// iterate over input string
// add complement of current symbol
// to output string
// return output string

let dnaString = "ATTGC";

// const dnaTransform = (string) => {
//   // define empty output string
//   let output = '';

//   // iterate over input string
//   for (const el of string) {

//     // add complement of current symbol
//     // to output string
//     if (el === 'A') {
//       output += 'T'
//     } else if (el === 'T') {
//       output += 'A'
//     } else if (el === 'C') {
//       output += 'G'
//     } else if (el === 'G') {
//       output += 'C'
//     }
//   }
//   // return output string
//   return output;
// }

// console.log("this is dnaTransform", dnaTransform(dnaString));

// YOUR PSEUDOCODE GOES HERE
// define empty output string
// create obj with complement keys
// iterate over input string
// add complement to output string
// return output

// let dnaString = 'ATTGC';

// ['A','T','T','G','C']

const dnaTransform = (string) => {
    let output = "";

    const complements = {
        A: "T",
        T: "A",
        C: "G",
        G: "C",
    };

    const split = string.split("");
    console.log("split", split);

    for (const el of split) {
        // console.log('el of string', el);
        if (el === "A") {
            output += complements[el];
        }
        if (el === "T") {
            output += complements[el];
        }
        if (el === "C") {
            output += complements[el];
        }
        if (el === "G") {
            output += complements[el];
        }
    }

    return output;
};

console.log(dnaTransform(dnaString)); // TAACG

// let dnaString = 'ATTGC';

// const dnaTransform = (string) => {
//   // BASE CASE - when to stop the function from running
//   if (string === '') { return '' }
//   const dnaObj = { A: "T", T: "A", C: "G", G: "C" }

//   console.log('string 0', string[0]);
//   console.log('string.substr(1)', string.substr(1));
//   console.log('dnaObj[string[0]]', dnaObj[string[0]]);
//   // RECURSIVE CASE - when the function calls itself
//   return dnaObj[string[0]] + dnaTransform(string.substr(1))
// }

// console.log("this is dnaTransform", dnaTransform(dnaString));

// function dnaTransform(dnaString) {
//   let sequence = {
//     "A": "T",
//     "T": "A",
//     "G": "C",
//     "C": "G"
//   }
//   return dnaString.replace(/A|T|G|C/g, function(matched) {
//     console.log(sequence[matched])
//     return sequence[matched];
//   });
// }

// console.log("this is dnaTransform", dnaTransform(dnaString));
