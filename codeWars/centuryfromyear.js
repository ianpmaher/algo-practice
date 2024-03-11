// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

function century(year) {
    // code goes here
    // need to assume that year input is a number
    // if
    // initialize output variable 
    return Math.ceil(year / 100)

    // this works because if you can divide the year by 100 exactly, then that number (quotient?) is the century
    // e.g. if 2000, 2000/100 = 20
    // but the Math.ceil works with JavaScript because it will basically add a 1 to any number with a remainder
    // so any number that doesn't divide evenly will have one added to it automatically because of the Math.ceil
    // so Math.ceil(year / 2023) = 21
}

console.log(century(99))
console.log(century(100))
console.log(century(101))