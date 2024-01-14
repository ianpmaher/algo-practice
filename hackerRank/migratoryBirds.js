// https://www.hackerrank.com/challenges/migratory-birds/problem
// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type.
// If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
// Example
// arr = [1, 1, 2, 2, 3]
// There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.
// Function Description
// Complete the migratoryBirds function in the editor below.
// migratoryBirds has the following parameter(s):
// int arr[n]: the types of birds sighted
// Returns
// int: the lowest type id of the most frequently sighted birds

function migratoryBirds(arr) {
    // Write your code here
    // return the id (int) that appears most often
    // if more than one id are mode, then choose the lower of the two
    // hashmap! using the Map() object
    let map1 = new Map()
    for (const bird of arr) {
        if (map1.has(bird)) {
            map1.set(bird, map1.get(bird) + 1)
        } else {
            map1.set(bird, 1)
        }
    }
    // console.log(map1)    
    let result = "";
    let max = 0;
    // iterate through the map for most frequent element
    for (const [key, value] of map1.entries()) {
        if (value > max || (value === max && key < result)) {
            max = value;
            result = key;
        }

        // if (value > max) {
        //     max = value;
                // below line is just returning the id (key) where the count (value) is the highest 
        //     result = key;
        // } else if (value === max) {
            // below line is for scenario where there are multiple modes and we need to return the lowest mode
        //     if (key < result) {
        //         result = key;
        //     }
        // }
    }
    return result;
}

console.log(migratoryBirds([1, 1, 2, 2, 3])); // 1