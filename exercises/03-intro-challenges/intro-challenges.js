/**
 * Count the number of digits in an integer
 * @param {number} num an integer
 * @returns {number} number of digits
 *
 * @example
 * countNumberOfDigits(1); // 1
 * countNumberOfDigits(123); // 3
 * countNumberOfDigits(1000); // 4
 */
function countNumberOfDigits(num) {
  return num.toString().length;
}

/**
 * Given a number of seconds, return how long ago something happened.
 * @param {number} seconds
 * @returns {string} a relative time formatted like one of the following:
 * - when less than a minute: "seconds ago"
 * - when less than an hour: "minutes ago"
 * - when less than a day: "hours ago"
 * - equal to or greater than a day: "days ago"
 *
 * @example
 *
 * getRelativeTime(59); // seconds ago
 * getRelativeTime(60); // minutes ago
 */
function getRelativeTime(seconds) {
  let string = "";
  if (seconds < 60){
    string = "seconds ago";
  }
  else if (seconds < 3600){
    string = "minutes ago";
  }
  else if (seconds < 86400){
    string = "hours ago";
  }
  else if (seconds >= 86400){
    string = "days ago";
  }
  return string;
}

/**
 * Round to the nearest 100th decimal point.
 * @param {number} num a float
 * @returns {number} a float with, at most, two decimal points
 *
 * @example
 * roundToNearestHundredth(14.511); // 14.51
 * roundToNearestHundredth(14.499); // 14.5
 */
function roundToNearestHundredth(num) {
  return Math.round(num * 100) / 100;
}

// Ignore this. It is for the tests.
module.exports = {
  countNumberOfDigits,
  getRelativeTime,
  roundToNearestHundredth
};
