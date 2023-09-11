// /*
// * Complete the 'timeConversion' function below.
// *
// * The function is expected to return a STRING.
// * The function accepts STRING s as parameter.
// */

// given a STRING of format hh:mm:ssAM or hh:mm:ssPM, 
// convert and return a STRING with military/24 hour time
// e.g. if s = "12:01:00PM" => return "12:01:00"
// e,g, if s = "07:45:00PM" => return "19:45:00"

function timeConversion(s) {
  // Write your code here
  // input format is STRING of hh:mm:ssAM or hh:mm:ssPM
  // check if AM or PM
  const ampm = s.slice(-2);
  const hours = Number(s.slice(0, 2));
  let time = s.slice(0, -2);
  if (ampm === "AM") {
    if (hours === 12) {
      // 12am edge-case
      return time.replace(s.slice(0, 2), "00");
    }
    return time;
  } else if (ampm === "PM") {
    if (hours !== 12) {
      return time.replace(s.slice(0, 2), String(hours + 12));
    }
    return time; // 12pm edge-case
  }
  return "Error: AM/PM format is not valid";
}
