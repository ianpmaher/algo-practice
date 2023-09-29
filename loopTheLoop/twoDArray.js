// Make a function that returns the greatest sum of a row, column or diagonal from a two dimensional array

// Make a function that takes one argument, a two dimensional array, where all the arrays are the same length, 
// and returns the greatest sum of the numbers by row, column and diagonal.

const greatestSum = (arr) => {
  // probably gonna need this?
  // ROWS
  let rowArr = []
  // for loop, horizontal elements
  // first row
  for (let i=0; i<arr[0].length; i++) {
    // reduce higher-order function to add elements together
    const sumRowOne = arr[0].reduce((a,b) => (a+b))
    // console.log(sumRowOne)
    rowArr.push(sumRowOne)
  }
  // second row
  for (let i=0; i<arr[1].length; i++) {
    const sumRowTwo = arr[1].reduce((a,b) => (a+b))
    rowArr.push(sumRowTwo)
  }
  for (let i=0; i<arr[2].length; i++) {
    const sumRowThree = arr[2].reduce((a,b) => (a+b))
    rowArr.push(sumRowThree)
  }
  // spread operator aka Rei tha JavaScript god
  const biggestRowSum = Math.max(...rowArr)
  // console.log(biggestRowSum)
  // empty array

  // COLUMNS
  let columnArr = []
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  let columnOneArr = Array.from([arr[0][0], arr[1][0], arr[2][0]])
  // more reduce
  const sumColumnOne = columnOneArr.reduce((a,b) => (a+b))
  columnArr.push(sumColumnOne)
  // console.log(sumColumnOne)
  let columnTwoArr = Array.from([arr[0][1], arr[1][1], arr[2][1]])
  const sumColumnTwo = columnTwoArr.reduce((a,b) => (a+b))
  columnArr.push(sumColumnTwo)
  let columnThreeArr = Array.from([arr[0][2], arr[1][2], arr[2][2]])
  const sumColumnThree = columnThreeArr.reduce((a,b) => (a+b))
  columnArr.push(sumColumnThree)
  const biggestColumnSum = Math.max(...columnArr)  
  // console.log(biggestColumnSum)
  // console.log(columnOneArr)
  // console.log(columnTwoArr)
  // console.log(columnThreeArr)
  
  // DIAGONALS
  let diagonalArr = []
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  let diagonalOneArr = Array.from([arr[0][0], arr[1][1], arr[2][2]])
  // more reduce
  const sumDiagonalOne = diagonalOneArr.reduce((a,b) => (a+b))
  diagonalArr.push(sumDiagonalOne)
  // console.log(sumColumnOne)
  let diagonalTwoArr = Array.from([arr[2][0], arr[1][1], arr[0][2]])
  const sumDiagonalTwo = diagonalTwoArr.reduce((a,b) => (a+b))
  diagonalArr.push(sumDiagonalTwo)
  
  const biggestDiagonalSum = Math.max(...diagonalArr)  
  // console.log(biggestDiagonalSum)

  const sumsArr = Array.from([biggestRowSum, biggestColumnSum, biggestDiagonalSum])
  // console.log(sumsArr)
  const greatestSumAnswer = Math.max(...sumsArr)
  
  console.log(greatestSumAnswer)

}

const arr = [ 
  [10, 20, 30],
  [40, 50, 60],
  [70, -80, 90]
];

greatestSum(arr); 
// output: 180  

// the last column (30 + 60 + 90)