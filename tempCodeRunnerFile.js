
function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return year + " is a leap year"; // Case for being divisible by 4 but not 100
  } else if (year % 400 === 0) {
    return year + " is a leap year"; // Case for being divisible by 400
  } else {
    return year + " is not a leap year"; // If it doesn't satisfy either of the above conditions
  }
}

console.log(leapYear(2000)); // "2000 is a leap year"
console.log(leapYear(1900)); // "1900 is not a leap year"
console.log(leapYear(2024)); // "2000 is a leap year"
console.log(leapYear(2025)); // "1900 is not a leap year"