// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// I got this one all by myself but very inefficient
var searchInsert = function (nums, target) {
    // must write algo with O(log n) runtime complexity aka one loop
    let answer;
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(target) >= 0) {
            answer = nums.indexOf(target);
        } else {
            nums.push(target);
            let sortedNums = nums.sort((a, b) => a - b);
            answer = sortedNums.indexOf(target);
            console.log(answer);
        }
    }
    return answer;
};

function searchInsert(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
}

function binarySearch(array, target, start, end) {
    // basically allows 0 to be the start parameter and end is the length of the array - 1
    // If the target is less then the very last item then insert it at that item index
    // because anything index less then that has already been confirmed to be less then the target.
    // Otherwise insert it at that item index + 1
    // because any index greater then that has already been confirmed to be greater then the target
    if (start > end) return start;

    const midPoint = Math.floor((start + end) / 2);

    // found target
    if (array[midPoint] === target) return midPoint;

    // search the left side
    if (array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);
    // search the right side
    if (array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
}
