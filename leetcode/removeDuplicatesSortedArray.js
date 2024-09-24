// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

var removeDuplicates = function (nums) {
  // return # of unique elems in nums => k
  // remove duplicates from sorted array IN-PLACE // no shallow copy
  // relative order of elems should be kept same
  // change array [nums], return k elems in same order

  // IN ORDER TO PEFORM IN-PLACE OPERATIONS,
  // WE USE THE TWO INDEXES APPROACH

  // first index updates value in our input array
  // second index will read the input array and pass all
  // the distinct elements to the first index
  // both indexes start at 1

  // first index => insertIndex
  // second index = i
  let insertIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    // we skip to next index if we see a dupe elem
    if (nums[i - 1] != nums[i]) {
      // store unique elem at insertIndex index and increment insertIndex by 1
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }
  return insertIndex;
};

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. It does not matter what you leave beyond the returned k (hence they are underscores).

const nums = [1, 1, 2];
console.log(removeDuplicates(nums)); // 2
