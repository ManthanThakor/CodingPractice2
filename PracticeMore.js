//! ===============================
// Area and perimeter
//! ===============================

//? What is Area?
//* Definition: The space inside a shape.
//! Example: How much floor space a room has or how much land a garden covers.
// Units: Square units (e.g., m², cm²).

//? What is Perimeter?
//* Definition: The total distance around a shape.
//! Example: The length of a fence needed to surround a yard or the distance around a running track.
// Units: Regular units (e.g., meters, centimeters).

//! ============= Rectangle ==================
// Rectangle:
// Area: length * width
// Perimeter: 2 * (length + width)

function Rectangle(length, width) {
  let Area = length * width;
  let perimeter = 2 * length + 2 * width;
  console.log(`Rectangle - Area: ${Area}, Perimeter: ${perimeter}`);
}
Rectangle(12, 10);
// Rectangle - Area: 120, Perimeter: 44

//! ============= Square ==================
// Square:
// Area: side * side
// Perimeter: 4 * side

function Square(side) {
  let Area = side * side;
  let perimeter = 4 * side;
  console.log(`Square - Area: ${Area}, Perimeter: ${perimeter}`);
}
Square(10);
// Square - Area: 100, Perimeter: 40

//! ============= Circle ==================
// Circle:
// Area: π * radius * radius or π * radius^2
// Perimeter (Circumference): 2 * π * radius

function circle(radius) {
  const area = Math.PI * radius * radius;
  const perimeter = 2 * Math.PI * radius;
  console.log(`Circle - Area: ${area}, Circumference: ${perimeter}`);
}
circle(7); // Circle - Area: 153.93804002589985, Circumference: 43.982297150257104

//! ============= Triangle ==================
// Triangle (assuming base and height):
// Area: 0.5 * base * height
// Perimeter: Sum of all three sides

function triangle(base, height, side1, side2) {
  const area = 0.5 * base * height;
  const perimeter = base + side1 + side2; // Sum of all sides
  console.log(`Triangle - Area: ${area}, Perimeter: ${perimeter}`);
}
triangle(5, 6, 3, 4); // Triangle - Area: 15, Perimeter: 12

//! ================================================================================================
//! ================================================================================================
//! ================================================================================================
//! ================================================================================================

//? ----------------------------------------------
//! check the value is in between range of Two number or not
//? ----------------------------------------------

const checkNum = (StartingRange, EndingRage, InputValue) => {
  if (InputValue > StartingRange && InputValue < EndingRage) {
    console.log(`The value ${InputValue} falls within the specified range.`);
  } else {
    console.log(
      `The value ${InputValue} not falls within the specified range.`
    );
  }
};

const StartingRange = 2;
const EndingRage = 5;
const InputValue = 3;
checkNum(2, 5, 3);
// The value 3 falls within the specified range.

//! ================================================================================================
//! ================================================================================================

//! -----------------------
//! Get the value between two number
//! -----------------------

const ValueBetweenTwoNum = (val1, val2) => {
  for (let i = val1 + 1; i < val2; i++) {
    console.log(i);
  }
};

ValueBetweenTwoNum(2, 6);
// 3
// 4
// 5

//! ================================================================================================
//! ================================================================================================

//? ----------------------------------------------
//! Sum of 2 number
//? ----------------------------------------------

const SumOfTwoNumber = (num1, num2) => {
  const result = num1 + num2;
  return result;
};

console.log(SumOfTwoNumber(1, 2));
// 3

//! ================================================================================================
//! ================================================================================================

//? ----------------------------------------------
//! Multiply 2 number with operator and without operator
//? ----------------------------------------------

const multiplesNum = (num1, num2) => {
  const result = num1 * num2;
  return result;
};
console.log(multiplesNum(2, 3));
// 6

//? without operator

const multiplesNum2 = (num1, num2) => {
  let result = 0;
  for (let i = 1; i <= num2; i++) {
    result = result + num1;
  }
  return result;
};
console.log(multiplesNum2(3, 10));
// 30

//! ================================================================================================
//! ================================================================================================

//? ----------------------------------------------
//! // Function to calculate base raised to the power of exponent
//? ----------------------------------------------

const calculateExponential = (base, exponent) => {
  let result = 1;
  for (let i = 1; i <= exponent; i++) {
    result = result * base;
  }
  return `${base} raised to the power of ${exponent} is : ${result}`;
};
console.log(calculateExponential(3, 10));
// 2 raised to the power of 4 is : 16

//! ================================================================================================
//! ================================================================================================

//! -----------------------
//! Print 1,2,3,4,5,6,7,8,...n
//! -----------------------

function series1(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}

series1(5);
// 1
// 2
// 3
// 4
// 5

//! ================================================================================================
//! ================================================================================================

//! -----------------------
//! Print 1,-2,3,-4,5,-6,7,-8,...n
//! -----------------------

function series2(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      console.log(`-${i}`);
    } else {
      console.log(`${i}`);
    }
  }
}
series2(5);
// 1
// -2
// 3
// -4
// 5

//! -------------------- OR ----------------------

function series22(num) {
  let sign = 1;
  for (let i = 1; i <= num; i++) {
    console.log(`${i * sign}`);
    sign = -sign;
  }
}
series22(5);
// 1
// -2
// 3
// -4
// 5

//! ================================================================================================
//! ================================================================================================

//! ===============================
// 1,4,9,16,25,......,N
//! ===============================

function series3(num) {
  for (let i = 1; i <= num; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
  }
}
series3(5);
// 1 * 1 = 1
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// 5 * 5 = 25

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! 1,8,27,64,125,......,N
//! ===============================

function series4(num) {
  for (let i = 1; i <= num; i++) {
    console.log(`${i} * ${i} * ${i} = ${i * i * i}`);
  }
}
series4(5);
// 1 * 1 * 1 = 1
// 2 * 2 * 2 = 8
// 3 * 3 * 3 = 27
// 4 * 4 * 4 = 64
// 5 * 5 * 5 = 125

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! 2, 12 ,36,80,.....,N
//! ===============================

const numPart113 = 10;
function SeriesPart3(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i ** 2 + i ** 3);
  }
}
// console.log(SeriesPart3(numPart113));
// 2
// 12
// 36
// 80
// 150
// 252
// 392
// 576
// 810
// 1100

//! ================================================================================================
//! ================================================================================================

//! ===============================
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ... (Fibonacci series)
//! ===============================

// * The Fibonacci series is a special sequence of numbers where:
// * It starts with 0 and 1.
// * Every number after that is the sum of the two numbers before it.
//? Example:
// Start with: 0, 1.
// Add the last two numbers to get the next one:
// 0 + 1 = 1, so the sequence becomes: 0, 1, 1.
// 1 + 1 = 2, so the sequence becomes: 0, 1, 1, 2.
// 1 + 2 = 3, so the sequence becomes: 0, 1, 1, 2, 3.
// 2 + 3 = 5, so the sequence becomes: 0, 1, 1, 2, 3, 5.

function Fibonacci(num) {
  let a = 0;
  let b = 1;
  let result = "";
  for (let i = 1; i <= num; i++) {
    let next = a + b;
    a = b;
    b = next;
    result = result + a + " ";
  }
  return result;
}
console.log(Fibonacci(10));
// 1 1 2 3 5 8 13 21 34 55

//! ================================================================================================
//! ================================================================================================

//! ===============================
// 1! 2! 3! 4! 5! 6! .....n (1 ,2,6,24,...n) (factorial)
//! ===============================

// Factorial is a mathematical operation represented by the symbol !.
// It involves multiplying a number by all the whole numbers less than it down to 1.

// Formula:
// For any positive integer n, the factorial of n (denoted as n!) is:

// n! = n × (n - 1) × (n - 2) × ... × 1
// Example:
// 5! = 5 × 4 × 3 × 2 × 1 = 120
// 4! = 4 × 3 × 2 × 1 = 24
// 3! = 3 × 2 × 1 = 6
// 2! = 2 × 1 = 2
// 1! = 1
// Special Case:
// 0! = 1 (By definition, the factorial of zero is defined as 1).

//! ============ FOR FIND Single FACTORIAL AND GET ITS VALUE ===================

function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i + " ";
  }
  return result;
}
const factNum = 10;
console.log(`The factorial of ${factNum} is: ${factorial(factNum)}`);
// The factorial of 10 is: 3628800

//! ============ FOR PRINT SERIES OF FACTORIAL ===================

function factorial2(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    console.log((result = result * i + " "));
  }
}
const factNum2 = 5;
factorial2(factNum2);
// 1
// 2
// 6
// 24
// 120

// IN SHORT LAST RESULT * CURRENT ITERATION MEANS  5! = 5 * 4!(24)

//! The expression result = result * i multiplies the current value of result by i in each iteration of the loop.
// Initially: result = 1 (since we start with 1).
// First iteration (i = 1): result =  (result)1 * (i)1 → result = 1.
// Second iteration (i = 2): result = (result)1 * (i)2 → result = 2.
// Third iteration (i = 3): result = (result)2 * (i)3 → result = 6.
// And so on, until i reaches the number num.

//! ================================================================================================
//! ================================================================================================

//! ===============================
// 1! 3! 5! 7! .....n (1 ,6, 120...n) (factorial)
//! ===============================

function factorialOfOddNumbers(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    if (i % 2 != 0) {
      console.log((result = result * i));
    } else {
      result = result * i;
    }
  }
  return result;
}
factorialOfOddNumbers(5);
// 1
// 6
// 120

//? ---------------
//? above Code is good but alternative way
//? ---------------

function factorialOfOddNumbers2(num) {
  let result = 1;
  for (let i = 1; i <= num; i += 2) {
    if (i === 1) {
      result = result * i * 1;
    } else {
      result = result * i * (i - 1);
    }
    console.log(`The factorial of odd number ${i} is: ${result}`);
  }
  return result;
}
factorialOfOddNumbers2(5);
// The factorial of odd number 1 is: 1
// The factorial of odd number 3 is: 6
// The factorial of odd number 5 is: 120

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Different Between '==' and '==='
//! ===============================

var x = 7;
var y = "7";
// console.log(x == y); // true
// console.log(x === y); //  false

//! ================================================================================================
//! ================================================================================================

//! ===============================
//!  find a even or odd number
//! ===============================

const OddOrEven = (num) => {
  if (num % 2 == 0) {
    console.log(`The given Number: ${num} is even Number`);
  } else {
    console.log(`The given Number: ${num} is odd Number`);
  }
};

OddOrEven(4); // The given Number: 4 is even Number
OddOrEven(7); // The given Number: 7 is odd Number

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Prime Number or Not
//! ===============================

// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. In other words, a prime number is only divisible by 1 and itself.

const PrimeOrNot = (num) => {
  if (num <= 1) {
    return `The Number: ${num} is not a prime number`;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return `The Number: ${num} is not a prime number`;
    }
  }

  return `The Number: ${num} is a prime number`;
};

console.log(PrimeOrNot(5)); // The Number: 5 is a prime number

// For num = 7, the loop checks if 7 is divisible by 2, finds that it’s not, and ends the process as 7 is a prime number.
// For num = 10, it finds that 10 is divisible by 2 and immediately concludes that it’s not a prime number.

//! ================================================================================================
//! ================================================================================================

//! ===============================
//!  Table of any Number
//! ===============================

const TablePrint = (num, range = 10) => {
  console.log(`Table of Number ${num} :`);

  let result = "";
  for (let i = 1; i <= range; i++) {
    result = num * i;
    console.log(`${num} * ${i} = ${result}`);
  }
};
TablePrint(12);
// Table of Number 12 :
// 12 * 1 = 12
// 12 * 2 = 24
// 12 * 3 = 36
// 12 * 4 = 48
// 12 * 5 = 60
// 12 * 6 = 72
// 12 * 7 = 84
// 12 * 8 = 96
// 12 * 9 = 108
// 12 * 10 = 120

//! ================================================================================================
//! ================================================================================================

//! ===============================
// leap year or not
//! ===============================

// The code you provided checks whether a given year is a leap year or not. Here's a detailed explanation:

// Leap Year Rule:
// A leap year is a year that:
// Is divisible by 4, but not divisible by 100, unless it is also divisible by 400.

// This means:
// Years like 2000 and 1600 are leap years because they are divisible by 400.
// Years like 1900 and 2100 are not leap years because they are divisible by 100 but not by 400.
// Years like 2020 and 2024 are leap years because they are divisible by 4 but not divisible by 100.

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

//! ================================================================================================
//! ================================================================================================

//! ===============================
// a,b,c  no of this three greater than
//! ===============================

const numA = 10;
const numB = 20;
const numC = 5;

function GreaterNum(a, b, c) {
  if (a >= b && a >= c) {
    console.log(` ${a} is the Greatest number`);
  } else if (b >= c) {
    console.log(` ${b} is the Greatest number`);
  } else {
    console.log(` ${c} is the Greatest number`);
  }
}
GreaterNum(numA, numB, numC); // 20 is the Greatest number

//! ================================================================================================
//! ================================================================================================

//! ===============================
// find temp in c pass in f and then check given temp is cold normal or hot
//! ===============================

const temperature = 30;
const temperature2 = 60;
const temperature3 = 80;

function temp(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  if (celsius < 15) {
    console.log(`${celsius.toFixed(2)}°C - Cold`);
  } else if (celsius >= 15 && celsius <= 25) {
    console.log(`${celsius.toFixed(2)}°C - normal`);
  } else {
    console.log(`${celsius.toFixed(2)}°C - hot`);
  }
}
temp(temperature); //-1.11°C - Cold
temp(temperature2); //15.56°C - normal
temp(temperature3); //26.67°C - hot

//! ================================================================================================
//! ================================================================================================

//! ===============================
//!  Armstrong  Number
//! ===============================

//? An Armstrong number (also known as a Narcissistic number) for a given number of digits is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
//* For example:
// 153 is an Armstrong number because:
// 1^3 +5^3 +3^3 =153
// The formula for an Armstrong number is: abcd = a4 + b4 + c4 + d4.

const isArmstrongNumber = (num) => {
  let numStr = num.toString();
  let sum = 0;
  for (let i = 0; i <= numStr.length; i++) {
    sum = sum + Number(numStr[i]) ** numStr.length;
  }
  if (sum === num) {
    return `${num} is an Armstrong number`;
  } else {
    return `${num} is not an Armstrong number`;
  }
};

console.log(isArmstrongNumber(153)); // "153 is an Armstrong number"
console.log(isArmstrongNumber(9474)); // "9474 is an Armstrong number"
console.log(isArmstrongNumber(123)); // "123 is not an Armstrong number"

//! =======================================

function isArmstrong(num) {
  let originalNum = num;
  let n = 0;
  let result = 0;

  // Count the number of digits
  while (originalNum > 0) {
    originalNum = Math.floor(originalNum / 10);
    n++;
  }

  originalNum = num;

  // Calculate the sum of each digit raised to the power of n
  while (originalNum > 0) {
    let remainder = originalNum % 10;

    // Compute the power of remainder^n manually
    let power = 1;
    for (let i = 0; i < n; i++) {
      power *= remainder;
    }

    result += power;
    originalNum = Math.floor(originalNum / 10);
  }

  return result === num;
}

const num = parseInt(prompt("Enter a number: "), 10);

if (isArmstrong(num)) {
  console.log(`${num} is an Armstrong number.`);
} else {
  console.log(`${num} is not an Armstrong number.`);
}

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Reverse the Number
//! ===============================

const ReverseNum = (num) => {
  let reversed = 0;
  while (num > 0) {
    const lastDigit = num % 10; // Get the last digit
    reversed = reversed * 10 + lastDigit; // Add to reversed number
    num = Math.floor(num / 10); // Remove the last digit
  }
  return reversed;
};
const number = 12345;
console.log(ReverseNum(number)); // Output: 54321

//?=============================================
//?=============================================

const ReverseNum2 = (num) => {
  let reversed = 0;
  const isNegative = num < 0; // Check if the number is negative
  num = Math.abs(num); // Work with the absolute value of the number

  while (num > 0) {
    const lastDigit = num % 10;
    reversed = reversed * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return isNegative ? -reversed : reversed;
};

const number2 = -12345;
console.log(ReverseNum2(number)); // Output: -54321

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! iterate over an array
//! ===============================

let arr123 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr123.length; i++) {
  console.log(arr123[i]);
}
// 1
// 2
// 3
// 4
// 5

//! ================================================================================================
//! ================================================================================================
