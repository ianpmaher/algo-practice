// Sam's house has an apple tree and an orange tree that yield an abundance of fruit.
// Using the information given below, determine the number of apples and oranges that land on Sam's house.
// In the diagram below:
// The red region denotes the house, where s is the start point, and t is the endpoint.
// The apple tree is to the left of the house, and its farthest apple falls at point a.
// The orange tree is to the right of the house, and its farthest orange falls at point b.
// Assume the trees are located on a single point, where the apple tree is at point a, and the orange tree is at point b.
// When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis.
// *A negative value of d means the fruit fell d units to the tree's left,
// and a positive value of d means it falls d units to the tree's right. *

/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let house = []
    // where house range is inclusive
    house.push(s,t)
    let appleDistance = []
    let orangeDistance = []
    let resultApple = []
    let resultOrange = []
    
    // figure out apples 
    for (let i=0; i<apples.length; i++) {
        appleDistance.push(a + apples[i])
        // console.log(appleDistance)
    }
    // figure out oranges
    for (let i=0; i<oranges.length; i++) {
        orangeDistance.push(b + oranges[i])
    }
    
    // now to see if where they fell is in range of house
    for (let i=0; i<appleDistance.length; i++) {
        if (appleDistance[i] >= s && appleDistance[i] <= t) {
            resultApple.push(appleDistance[i])
        }  
    }
    // oranges 
    for (let i=0; i<orangeDistance.length; i++) {
        if (orangeDistance[i] >= s && orangeDistance[i] <= t) { 
            resultOrange.push(orangeDistance[i])
        }
    }
    console.log(resultApple.length + "\n" + resultOrange.length)
}