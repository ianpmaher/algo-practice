// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with 6 places after the decimal.
// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, 
// though answers with absolute error of up to 10^-4 are acceptable.
// OUTPUT FORMAT: Print the following  lines, each to  decimals:
  // proportion of positive values
  // proportion of negative values
  // proportion of zeros

  // * Complete the 'plusMinus' function below.
  // *
  // * The function accepts INTEGER_ARRAY arr as parameter.
  // */
 
 function plusMinus(arr) {
     // Write your code here
     
     let calculateRatios = () => {
         let denominator = arr.length;
         let countPositive = 0;
         let countNegative = 0;
         let countZero = 0;
         for (let i=0; i<denominator; i++) {
             if (arr[i] > 0) {
                 countPositive++
             }
             else if (arr[i] < 0) {
                 countNegative++
             }
             else {
                 countZero++
             }
         }
         let proportionPositive = countPositive / denominator
         let proportionNegative = countNegative / denominator
         let proportionZero = countZero / denominator
         return [proportionPositive, proportionNegative, proportionZero]
     }
     const printRatios = (arr) => {
         const ratios = calculateRatios(arr)
         for (let proportion of ratios) {
             console.log(proportion.toFixed(6))
         }
     }
     calculateRatios()
     printRatios()     
 }

// another one with JavaScript
function plusMinus(arr) {
  let pos = 0, neg = 0 , zero = 0 , length = arr.length
  arr.forEach( n => {
      if( n > 0 )
          pos++
      else if( n < 0 )
          neg++
      else
          zero++
  } )
  console.log( (pos / length).toFixed(6) )
  console.log( (neg / length).toFixed(6) )
  console.log( (zero / length).toFixed(6) )
}