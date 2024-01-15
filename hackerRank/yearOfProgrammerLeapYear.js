// Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the 256th day of the year) during a year in the inclusive range from 1700 to 2700.
// From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system.
// The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th.
// This means that in 1918, February 14th was the 32nd day of the year in Russia.
// In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years.
// In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:
// Divisible by 400.
// Divisible by 4 and not divisible by 100.
// Given a year, y, find the date of the 256th day of that year according to the official Russian calendar during that year.
// Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is y.
// For example, the given year = 1984. 1984 is divisible by 4, so it is a leap year. The 256th day of a leap year after 1918 is September 12, so the answer is 12.09.1984.

// Sample Input 0
// 2017
// Sample Output 0
// 13.09.2017
// Explanation 0
// In the year y = 2017, January has 31 days, February has 28 days, March has 31 days, April has 30 days, May has 31 days, June has 30 days, July has 31 days, and August has 31 days.
// When we sum the total number of days in the first eight months, we get 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243.
// Day of the Programmer is the 256th day, so then calculate 256 - 243 = 13 to determine that it falls on day 13 of the 9th month (September).
// We then print the full date in the specified format, which is 13.09.2017.

// Sample Input 1
// 2016
// Sample Output 1
// 12.09.2016

function dayOfProgrammer(year) {
        // Write your code here
    // range is [1700, 2700] inclusive
    // if 1700 - 1917 => Julian calendar -- leap years divisible by 4
    // if 1919 - 2700 => Gregorian calendar -- leap years divisible by 400 || divisible by 4 && not divisible by 100
    // given year, find the date of the 256th day of that year, printed in dd.mm.yyyy
    // maybe array of objects to hold all of the months and stuff?
    // regular non leap year
    let result = ""
    const calendar = [
        { "01": 31 },
        { "02": 28 },
        { "03": 31 },
        { "04": 30 },
        { "05": 31 },
        { "06": 30 },
        { "07": 31 },
        { "08": 31 },
    ]
    if (year >= 1700 && year <= 1917) {
        if (year % 4 === 0) {
            calendar[1]["02"] = 29
            const sum1 = calendar[0]["01"] + calendar[1]["02"] + calendar[2]["03"] + calendar[3]["04"] + calendar[4]["05"] + calendar[5]["06"] + calendar[6]["07"] + calendar[7]["08"]
            let daysTotal = 256 - sum1
            // console.log(daysTotal)
            return `${daysTotal}.09.${year}`
        } else {
            const sum1 = calendar[0]["01"] + calendar[1]["02"] + calendar[2]["03"] + calendar[3]["04"] + calendar[4]["05"] + calendar[5]["06"] + calendar[6]["07"] + calendar[7]["08"]
            let daysTotal = 256 - sum1
            return `${daysTotal}.09.${year}`
        }
    } else if (year >= 1919 && year <= 2700) {
        if (year % 400 === 0) {
            calendar[1]["02"] = 29
            const sum1 = calendar[0]["01"] + calendar[1]["02"] + calendar[2]["03"] + calendar[3]["04"] + calendar[4]["05"] + calendar[5]["06"] + calendar[6]["07"] + calendar[7]["08"]
            let daysTotal = 256 - sum1
            // console.log(daysTotal)
            return `${daysTotal}.09.${year}`

        } else if (year % 4 === 0 && year % 100 != 0) {
            calendar[1]["02"] = 29
            const sum1 = calendar[0]["01"] + calendar[1]["02"] + calendar[2]["03"] + calendar[3]["04"] + calendar[4]["05"] + calendar[5]["06"] + calendar[6]["07"] + calendar[7]["08"]
            let daysTotal = 256 - sum1
            // console.log(daysTotal)
            return `${daysTotal}.09.${year}`
        } else {
            const sum1 = calendar[0]["01"] + calendar[1]["02"] + calendar[2]["03"] + calendar[3]["04"] + calendar[4]["05"] + calendar[5]["06"] + calendar[6]["07"] + calendar[7]["08"]
            let daysTotal = 256 - sum1
            return `${daysTotal}.09.${year}`
        }
    } else if (year === 1918) {
        calendar[1]["02"] = 15
        const sum1 = calendar[0]["01"] + calendar[1]["02"] + calendar[2]["03"] + calendar[3]["04"] + calendar[4]["05"] + calendar[5]["06"] + calendar[6]["07"] + calendar[7]["08"]
        let daysTotal = 256 - sum1
        return `${daysTotal}.09.${year}`
        // 26.09.1918
    }
    return result
}

console.log(dayOfProgrammer(1918))


// from HackerRank discussions board
// function dayOfProgrammer(year) {
//     if (year == 1918) {
//       // Corner case
//       return `26.09.${year}`; 
//     } else if (year > 1918) {
//       // Calculating Leap year in Gregorian Calendar
//       const isLeapYear = (year % 4 == 0) && (year % 100 != 0) || year % 400 == 0;
//       return `${isLeapYear ? 12 : 13}.09.${year}`;
//     } else {
//       // Calculating Leap year in Julian Calendar
//       return `${year % 4 == 0 ? 12 : 13}.09.${year}`;
//     }
//   }
  