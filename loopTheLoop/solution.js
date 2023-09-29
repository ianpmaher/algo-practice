//Loop the Loop: 2D Array Addition
//Make a function that returns the greatest sum of a row, column or diagonal from a two dimensional array

const arr = [
  [10, 20, 30],
  [40, 50, 60],
  [70, -80, 90]
];

function loopTheLoop(array){
//your code here!

  let row = 0
  let column = 0
  let diagonalOne = 0
  let diagonalTwo = 0

  for (let i = 0; i < array.length; i++) {

      let rowSum = 0
      let columnSum = 0
      
      // getting the diagonals
      diagonalOne += array[i][i]
      diagonalTwo += array[i][array[i].length - 1 - i]

      // getting row and column one by one.
      for (let j = 0; j < array[i].length; j++) {

          rowSum += array[i][j]
          columnSum += array[j][i]
      }
      
      // update the biggest the column and row if necessary
      if (rowSum > row) row = rowSum
      if (columnSum > column) column = columnSum
      
  }

  return Math.max(column, row, diagonalOne, diagonalTwo)
}

console.log(loopTheLoop(arr))

//## Part 2: Bonus - Row, Column or Diagonal?
//Test your function on this data set and let me know if it was a row, column or diagonal that had the greatest sum!

const bigArray = [
  [887, -541, -430, -590, 117, 172, -319, -18],
  [-269, 964, 209, 840, -456, 156, 365, -568],
  [289, -41, 488, 198, 240, 124, -427, 214],
  [452, 894, 968, -149, 683, 977, 741, -805],
  [181, -714, -950, 107, 800, 751, -143, 380],
  [152, 493, 707, 914, 37, 356, -625, 608],
  [-345, 906, 83, 676, 723, 381, 557, -183],
  [199, -943, -710, 565, 193, 315, 281, 245]
];


function greatestSum(array){
//your code here!

  let row = 0
  let column = 0
  let diagonalOne = 0
  let diagonalTwo = 0

  for (let i = 0; i < array.length; i++) {

      let rowSum = 0
      let columnSum = 0
      
      // getting the diagonals
      diagonalOne += array[i][i]
      diagonalTwo += array[i][array[i].length - 1 - i]

      // getting row and column one by one.
      for (let j = 0; j < array[i].length; j++) {

          rowSum += array[i][j]
          columnSum += array[j][i]
      }
      
      // update the biggest the column and row if necessary
      if (rowSum > row) row = rowSum
      if (columnSum > column) column = columnSum
      
  }

  if (row > column){
      if (row > diagonalOne && row > diagonalTwo){
         // row is big
         return `row: ${row}`
      }    
      else if (diagonalOne > diagonalTwo){    
          return `diagonalOne: ${diagonalOne}`
      }else{
          return `diagonalTwo: ${diagonalTwo}`
      }
  }
  else{
      if (column > diagonalOne && column > diagonalTwo){
         return `column: ${column}`
      }   
      else if (diagonalOne > diagonalTwo){
          return `diagonalOne: ${diagonalOne}`
      }else{
          return `diagonalTwo: ${diagonalTwo}`
      }
  }
}

console.log(greatestSum(bigArray))

// const greatesSum = (array) => Math.max(
//     Math.max(...array.map(arr => arr.reduce((acc, curr) => acc + curr))),
//     Math.max(...array.reduce((acc, curr) => acc.map((num, index) => num + curr[index]))),
//     array.reduce((acc, curr, index) => acc + curr[index], 0),
//     array.reduce((acc, curr, index) => acc + curr[curr.length - index - 1], 0))


// console.log(greatesSum(arr))
// console.log(greatesSum(bigArray))


//## Part 4: Super Bonus - Generate 2D Arrays

//Part A
// Create a function that takes one argument, an integer, that makes a 2D array of random integers between 0  and 1000 where the length of the rows and columns is determined by the argument.

function generateArray(num){
  //your code here!
  const newArray = Array(num).fill('')
  const result = newArray.map((elem)=>{

      elem = []
      for (let i = 0; i < num; i++){
          let randomNum = Math.floor(Math.random() * 1000)

          elem.push(randomNum)    
      }
      return elem
  })

  return result
}

console.table(generateArray(4))


//Part B
// Add a 30% chance that the integer will become negative.

function generateArrayWithChance(num){
  const newArray = Array(num).fill('')
  const result = newArray.map((elem)=>{
      elem = []
      for (let i = 0; i < num; i++){
          let randomNum = Math.floor(Math.random() * 1000)
          let chanceToBeNegative = Math.floor(Math.random() * 11)
          console.log(chanceToBeNegative)
          if (chanceToBeNegative <= 3) {
              randomNum *= -1
          }
          elem.push(randomNum)    
      }
      return elem
  })
  return result
}

console.table(generateArrayWithChance(4))