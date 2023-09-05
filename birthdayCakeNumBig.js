// You are in charge of the cake for a child's birthday. 
// You have decided the cake will have one candle for each year of their total age. 
// They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// input format: You are in charge of the cake for a child's birthday. 
// The input format is The first line contains a single integer,  n, the size of candles.
// The second line contains n space-separated integers, where each integer i describes the height of candles[i] .

function birthdayCakeCandles(candles) {
  // Write your code here
  // find max height of candle
  let bigCandle = Math.max(...candles)
  // count how many candles are that height
  const tallestCandles = candles.filter(height => height === bigCandle)
  
  return tallestCandles.length

}