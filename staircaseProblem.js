// Write your code here
// Print a staircase made of the # sign,
// with its base and height both equal to n 
// "n" is input, so n=3 is 
//   #
//  ##
// ###

function staircase(n) {
  // Write your code here
  // Print a staircase made of the # sign,
  // with its base and height both equal to n 
  // "n" is input, so n=3 is 
  //   #
  //  ##
  // ###
  let steps = parseInt(n)
  for (let i = 0; i++ < steps; ) {
      
      let line = '';
      let spaces = steps - i;
      
      for (let j = spaces; j--; ) {
          line += ' ';
      }
      
      for (let j = i; j--; ) {
          line += '#';
      }
      
      console.log(line);
  }
}