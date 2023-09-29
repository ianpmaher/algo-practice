// CAESAR CYPHER - from scratch no lookup

// define alphabet this way because RegEx is scary
const alphabet = "abcdefghijklmnopqrstuvwxyz"
// will assign each letter an index number because it's an array
const alphabetArr = alphabet.split("")
// initializing variable for the ciphered word-- array
let cipheredArr = []
let cipheredWord = ""

const caesarCypher = (str) => {
  // splitting that wordToBeDeciphered into an array of each letter
  let arrLetters = str.split("")
  // maybe taking num and make it shift
  // logic to replace index of each letter as we iterate over it
  for (let i of arrLetters) {
    // need to incorporate the alphabet definition/array
    for (let j=0; j<arrLetters.length; j++) {
      if (arrLetters[i] === alphabetArr[j]) {
        cipheredArr.push(alphabetArr[j])
      }
    } 
  } 
  cipheredWord = cipheredArr.join("")

  return cipheredWord
}

console.log(caesarCypher("kitten"))

// CHAT GPT
// function caesarCipher(inputString, shift) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   const inputLower = inputString.toLowerCase();
//   let result = '';

//   for (let i = 0; i < inputLower.length; i++) {
//       const char = inputLower[i];
//       if (alphabet.indexOf(char) === -1) {
//           result += char;
//       } else {
//           const index = (alphabet.indexOf(char) + shift) % 26;
//           result += inputString[i] === char ? alphabet[index] : alphabet[index].toUpperCase();
//       }
//   }

//   return result;
// }

// // Example usage
// const originalString = "Hello, World!";
// const shiftedString = caesarCipher(originalString, 3);
// console.log(shiftedString);  // Output: "Khoor, Zruog!"
