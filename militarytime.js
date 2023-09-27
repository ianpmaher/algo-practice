// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example
// string = '12:01:00PM'
// Return '12:01:00'
// string = '12:01:00AM'
// Return '00:01:00'

function timeConversion(s) {
  // Write your code here
// Split the time string into components
  let timeString = s
  let timeComponents = timeString.split(':');
  let hour = parseInt(timeComponents[0]);
  let minutes = timeComponents[1];
  let seconds = timeComponents[2].slice(0, 2); // Remove "AM" or "PM"

  // Check if it's AM or PM
  let isPM = timeString.includes('PM');

  // Convert to military time
  if (isPM && hour !== 12) {
    // Add 12 to the hour if it's PM and not 12 PM
    hour += 12;
  } else if (!isPM && hour === 12) {
    // Change 12 AM to 00
    hour = 0;
  }

  // Pad single-digit hour with a leading 0
  const militaryHour = hour.toString().padStart(2, '0');

  // Return the military time format
  return `${militaryHour}:${minutes}:${seconds}`;
}