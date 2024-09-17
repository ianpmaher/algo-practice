// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Pseudocode
// Initialize minPrice to the first element of prices
// Initialize maxProfit to 0

// For each price in prices starting from the second element:
//     If current price < minPrice:
//         Update minPrice to current price
//     Else:
//         Calculate profit = current price - minPrice
//         If profit > maxProfit:
//             Update maxProfit to profit

// Return maxProfit

//
// Input: An array prices where prices[i] represents the stock price on the i-th day.
// Goal: Find the maximum profit achievable by buying on one day and selling on a later day.
// Constraints:
// The length of prices is between 1 and 10^5.
// Each price is between 0 and 10^4.
// Edge Cases:
// If the array has only one price, no transaction can occur, so profit is 0.
// If the prices are in descending order, no profit is possible, so return 0.

//To achieve an efficient solution, we’ll traverse the array once, keeping track of:
// 1.	Minimum Price So Far (minPrice): The lowest price encountered up to the current day.
// 2.	Maximum Profit (maxProfit): The highest profit achievable by selling on the current day after buying at minPrice.

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  // Edge case: If there's less than 2 prices, no transaction can be made.
  if (prices.length < 2) return 0;

  // Initialize minPrice to the first price and maxProfit to 0.
  let minPrice = prices[0];
  let maxProfit = 0;

  // Iterate through the prices starting from the second day.
  for (let i = 1; i < prices.length; i++) {
      const currentPrice = prices[i];

      // If current price is less than minPrice, update minPrice.
      if (currentPrice < minPrice) {
          minPrice = currentPrice;
      } else {
          // Calculate profit if we sell at currentPrice.
          const profit = currentPrice - minPrice;

          // If this profit is greater than maxProfit, update maxProfit.
          if (profit > maxProfit) {
              maxProfit = profit;
          }
      }
  }

  return maxProfit;
}

// Example Usage:
const prices1 = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5 (Buy at 1, sell at 6)

const prices2 = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // Output: 0 (No profit possible)

const prices3 = [1, 2, 3, 4, 5];
console.log(maxProfit(prices3)); // Output: 4 (Buy at 1, sell at 5)


// 	•	Time Complexity: O(n), where n is the number of days (length of the prices array). We traverse the array once.
//•	Space Complexity: O(1), as we use only a constant amount of extra space regardless of the input size.
