// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps, for every step it was noted if it was an uphill, U, or a downhill, D step.
// Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:
// - A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// - A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.
// Example
// steps = 8 path = [DDUUUUDD]
// The hiker first enters a valley 2 units deep. Then they climb out and up onto a mountain 2 units high. Finally, the hiker returns to sea level and ends the hike.
// Function Description
// Complete the countingValleys function in the editor below.
// countingValleys has the following parameter(s):
// - int steps: the number of steps on the hike
// - string path: a string describing the path
// Returns
// - int: the number of valleys traversed

// need to count # "valleys" entered
// if path is U, it is 1 unit above sea level, and D is 1 unit below
// path will always end at sea level
// steps = int
// path = string
// initialize altitude?

function countingValleys(steps, path) {
    let altitude = 0;
    let valleys = 0;
    for (let i = 0; i < steps; i++) {
        if (path[i] === "U") {
            altitude++;
            // if altitude is 0, we are at sea level
            // if we are at sea level and we go up, we are entering a mountain
            // increment valleys
            if (altitude === 0) {
                // we are at sea level
                // we just came up from a valley
                // ============================= //
                valleys++;
            }
            console.log("altitude", altitude);
        } else {
            // if we are at sea level and we go down, we are entering a valley
            altitude--;
            console.log("altitude", altitude);
        }
    }
    return valleys;
}

console.log(countingValleys(8, "UDDDUDUU")); // 1
console.log(countingValleys(12, "DDUUDDUDUUUD")); // 2
