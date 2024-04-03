// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


// To solve this algorithm problem, we can use dynamic programming due to its overlapping subproblems and optimal substructure properties. Here's how you can approach the problem step by step, illustrated with pseudocode and explanations:

// 1. Understand the Problem
// The problem asks for the number of distinct ways to climb n steps where at each step you can climb either 1 or 2 stairs. This means if n is 2, for example, there are 2 ways: (1 step + 1 step) or (2 steps).

// 2. Identify the Base Cases
// For small values of n, we can directly determine the number of ways:

// If n = 0, there is technically 1 way to do it - don't climb at all.
// If n = 1, there is 1 way to do it - take 1 step.
// If n = 2, there are 2 ways to do it - take two 1 steps or one 2 step.
// 3. Recursive Relationship
// For n > 2, notice that to reach step n, you could have either come from step n-1 by taking a single step or from step n-2 by taking a double step. Thus, the number of ways to reach step n is the sum of the ways to reach step n-1 and the ways to reach step n-2.

// This forms our recurrence relation:
// ways(n) = ways(n-1) + ways(n-2)

// 4. Dynamic Programming Solution
// To avoid recomputing the number of ways to reach the same step multiple times, we can use dynamic programming to store the result at each step.

// Pseudocode:
function climbStairs(n) {
    if (n <= 1) {
      return 1;
    }
  
    // One can reach the i-th step from either 
    // 1) taking a single step from the (i-1)-th step 
    // 2) taking two steps from the (i-2)-th step

    // so the total number of ways to reach the i-th step is the SUM of the ways to reach the (i-1)-th step and the ways to reach the (i-2)-th step.
    // dp[i] denotes the number of ways to reach the i-th step
    // dp[i] = dp[i - 1] + dp[i - 2]

    // Initialize an array to store the number of ways to reach each step
    let dp = new Array(n + 1);
    dp[0] = 1; // base case
    dp[1] = 1; // base case
  
    // Fill dp array with the number of ways to reach each step
    for (let step = 2; step <= n; step++) {
      dp[step] = dp[step - 1] + dp[step - 2];
    }
  
    // The last element of dp array will contain the number of ways to reach the top
    return dp[n];
  }

//   Explanation:
// We start by handling the base cases directly. If n is 0 or 1, we return 1.
// We then initialize an array dp where dp[i] represents the number of distinct ways to reach the ith step.
// Starting from step 2, we calculate the number of ways to reach that step by adding the number of ways to reach the two previous steps. This utilizes our recurrence relation.
// Finally, dp[n] gives us the number of distinct ways to climb to the top of an n step staircase.
// This dynamic programming approach significantly reduces the computation time by storing intermediate results and reusing them, rather than recalculating the number of ways to reach the same step multiple times.


// This is effectively the same as the Fibonacci sequence, which is a classic example of a problem that can be solved using dynamic programming. 
// The Fibonacci sequence is defined as follows:

// F(0) = 0
// F(1) = 1
// F(n) = F(n-1) + F(n-2) for n > 1
// The number of ways to reach step n in the climbStairs problem is the nth Fibonacci number.

// The time complexity of the climbStairs function is O(n) because we iterate through n steps to calculate the number of ways to reach each step. The space complexity is also O(n) because we use an array of size n+1 to store the number of ways to reach each step.

// The Fibonacci sequence can be solved using a bottom-up approach, which is more efficient than the recursive top-down approach. The bottom-up approach avoids the overhead of recursion and the repeated computation of the same subproblems. This is why the climbStairs function uses a bottom-up dynamic programming approach to solve the problem.

// The climbStairs problem is a classic example of a problem that can be solved using dynamic programming. 
// By understanding the problem, identifying the base cases, establishing the recursive relationship, and using dynamic programming to store intermediate results, we can efficiently solve the problem and calculate the number of distinct ways to climb to the top of an n step staircase.

// Base Case: The initial conditions match teh start of the Fibonnaci sequence. For the straircase problem, when n = 0, there is 1 way to climb the stairs (which is to not climb at all). 
// When n = 1, there is 1 way to climb the stairs (which is to take 1 step). When n = 2, there are 2 ways to climb the stairs (which is to take 2 steps or take two 1 steps). 
// These base cases are used to build up the solution for larger values of n. This is analogous to the base cases F(0) = 0 and F(1) = 1 for the Fibonacci sequence.

// Recursive Relationship: The number of ways to reach step n is the sum of the ways to reach step n-1 and the ways to reach step n-2. This forms the recurrence relation: ways(n) = ways(n-1) + ways(n-2). This relationship is used to calculate the number of ways to reach each step in the staircase.
// This is exactly the recurrence relation that defines the Fibonacci sequence:
// F(n) = F(n-1) + F(n-2) for n > 1
// In the context of the staircase problem, this transaltes to:
// ways(n) = ways(n-1) + ways(n-2) for n > 2
// with the understanding that ways(0) = 1 and ways(1) = 1.

// Dynamic Programming Solution: To avoid recomputing the number of ways to reach the same step multiple times, 
// we can use dynamic programming to store the result at each step.