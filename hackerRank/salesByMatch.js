// There is a large pile of socks that must be paired by color. 
// Given an array of integers representing the color of each sock, 
// determine how many pairs of socks with matching colors there are.
// Example
// n = 7
// ar = [1,2,1,2,1,3,2]
// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.
// sockMerchant has the following parameter(s):
// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns
// int: the number of pairs

function sockMerchant(n, ar) {
    // HASHMAP TIME WOOOO (but not Map())
    // empty object to store the frequency of each element
    const frequencyMap = {};

    // looping through the array and count frequency
    for (let i=0; i<ar.length; i++) {
        const element = ar[i]
        // I keep forgetting this part
        // for each element of array...
        // if the value already exists for a DIF key, 
        // then this counts the multiples
        if (frequencyMap[element]) {
            // add key:value pair to {} 
            frequencyMap[element]++;
        } else {
            // 
            frequencyMap[element] = 1;
        }
    }

    // now need to determine how many PAIRS there are
    // will likely need to employ % 2 modulo for even, 
    // bc maybe there will be three of a sock color

    // initialize numPairs 
    let numPairs = 0
    
    for (const key in frequencyMap) {
        // so this is basically just getting the values back again
        const frequency = frequencyMap[key] 
        // now adding HALF of the frequency to the numPairs counter
        numPairs += Math.floor(frequency / 2);
    }
    return numPairs


}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
