// "Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice."
// YOu can return the answer in any order.

const twoSum = (nums, target) => {
    // create an empty object to store numbers and their indices
    const numsMap = {};
    // loop through the array
    for (i=0; i<nums.length; i++) {
        // calculate the difference needed to sum target from the current num
        // we loop through the nums array, and for each num, 
        // we calculate the COMPLEMENT ==> the difference needed to reach the target
        const complement = target - nums[i];
        // we check if the comlement exists in the numsMap // hashmap
        // if it does, we've found a pair of numbers that sum to the target
        // we can return their indices
        if (complement in numsMap) {
            // if it exists, return the indices of the complement and the current num
            return [numsMap[complement], i];
        }
        // if the complement DOESNT exist in the hashmap, we add the current num to the hashmap with its index
        numsMap[nums[i]] = i;
    }
    // if we loop through the entire array and never find a complement, return an empty array
    return [];
    
}