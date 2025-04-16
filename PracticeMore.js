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

//! ============= Rectangle ==============

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
// The radius of a circle is the distance from its center to any point on its edge. It is denoted as r and is used to calculate the area and circumference of the circle.
// Area: π * radius * radius or π * radius^2
// Perimeter (Circumference): 2 * π * radius

function circle(radius) {
  const area = Math.PI * radius * radius; // π × r²
  const perimeter = 2 * Math.PI * radius; // 2 × π × r
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
checkNum(StartingRange, EndingRage, InputValue);
// The value 3 falls within the specified range.

//? ----------------------------------------------

const checkNum2 = (StartingRange, EndingRage, InputValue) => {
  if (InputValue > StartingRange) {
    if (InputValue < EndingRage) {
      console.log(`The value ${InputValue} falls within the specified range.`);
      return;
    }
  }
  console.log(
    `The value ${InputValue} does not fall within the specified range.`
  );
};

checkNum2(2, 5, 3);
// The value 3 falls within the specified range.

//? ----------------------------------------------

const checkNum3 = (StartingRange, EndingRage, InputValue) => {
  if (InputValue > StartingRange) {
    if (InputValue < EndingRage) {
      console.log(`The value ${InputValue} falls within the specified range.`);
    } else {
      console.log(
        `The value ${InputValue} does not fall within the specified range.`
      );
    }
  } else {
    console.log(
      `The value ${InputValue} does not fall within the specified range.`
    );
  }
};

checkNum3(2, 5, 3);
// The value 3 falls within the specified range.

checkNum3(2, 5, 1);
// The value 1 does not fall within the specified range.

checkNum3(2, 5, 6);
// The value 6 does not fall within the specified range.

//! ================================================================================================
//! ================================================================================================

//! -----------------------
//! Get the value between two number
//! -----------------------

const ValueBetweenTwoNum = (num1, num2) => {
  for (let i = num1 + 1; i < num2; i++) {
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
console.log(calculateExponential(2, 4));
// 2 raised to the power of 4 is : 16

//! ================================================================================================
//! ================================================================================================

//? ----------------------------------------------
//! // Odd or even
//? ----------------------------------------------

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(num + " is Even");
  } else {
    console.log(num + " is Odd");
  }
}
checkEvenOdd(7);
checkEvenOdd(10);

//! ================================================================================================
//! ================================================================================================

//? ----------------------------------------------
//! // Find the largest of two numbers
//? ----------------------------------------------

function findLargest(a, b) {
  if (a > b) {
    console.log(a + " is larger");
  } else if (b > a) {
    console.log(b + " is larger");
  } else {
    console.log("Both are equal");
  }
}
findLargest(5, 10);
findLargest(20, 10);
findLargest(7, 7);

//! ================================================================================================
//! ================================================================================================

//? ----------------------------------------------
//! // Check if a number is positive, negative, or zero
//? ----------------------------------------------

function checkNumber(num) {
  if (num > 0) {
    console.log(num + " is Positive");
  } else if (num < 0) {
    console.log(num + " is Negative");
  } else {
    console.log(num + " is Zero");
  }
}
checkNumber(5);
checkNumber(-8);
checkNumber(0);

//! ================================================================================================
//! ================================================================================================

//? ----------------------------------------------
//! Grade Checker
//? ----------------------------------------------

function assignGrade(marks) {
  if (marks >= 90) {
    console.log("Grade: A");
  } else if (marks >= 75) {
    console.log("Grade: B");
  } else if (marks >= 50) {
    console.log("Grade: C");
  } else {
    console.log("Fail");
  }
}

// Example usage
assignGrade(85); // Output: Grade: B

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
console.log(leapYear(2024)); // "2024 is a leap year"
console.log(leapYear(2025)); // "2025 is not a leap year"

//? ----------------------------------------------
//? ----------------------------------------------

function leapYear(year) {
  if (year % 400 === 0) {
    console.log(year + " is a leap year");
  } else if (year % 100 === 0) {
    console.log(year + " is not a leap year");
  } else if (year % 4 === 0) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

leapYear(2000); // "2000 is a leap year"
leapYear(1900); // "1900 is not a leap year"
leapYear(2024); // "2024 is a leap year"
leapYear(2025); // "2025 is not a leap year"

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

//?  -----------------------------------

function GreaterNum(a, b, c) {
  if (a >= b) {
    if (a >= c) {
      console.log(`${a} is the Greatest number`);
    } else {
      console.log(`${c} is the Greatest number`);
    }
  } else if (b >= c) {
    console.log(`${b} is the Greatest number`);
  } else {
    console.log(`${c} is the Greatest number`);
  }
}

GreaterNum(10, 20, 5); // Output: 20 is the Greatest number

//! ================================================================================================
//! ================================================================================================

//! ===============================
//? find temp in c pass in f and then check given temp is cold normal or hot
//! ===============================

const temperature = 30;
const temperature2 = 60;
const temperature3 = 80;

function temp(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);

  if (celsius < 15) {
    console.log(`${celsius.toFixed(2)}°C - Cold`);
  } else if (celsius <= 25) {
    // No need to check celsius >= 15 because the first condition already ensures this.
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
//? find the greatest number among four numbers:
//! ===============================

function GreaterNum(a, b, c, d) {
  if (a >= b && a >= c && a >= d) {
    console.log(`${a} is the Greatest number`);
  } else if (b >= c && b >= d) {
    console.log(`${b} is the Greatest number`);
  } else if (c >= d) {
    console.log(`${c} is the Greatest number`);
  } else {
    console.log(`${d} is the Greatest number`);
  }
}

GreaterNum(10, 20, 5, 30); // Output: 30 is the Greatest number
GreaterNum(50, 40, 60, 30); // Output: 60 is the Greatest number

//?  -----------------------------------

function GreaterNum(a, b, c, d) {
  if (a >= b) {
    if (a >= c) {
      if (a >= d) {
        console.log(`${a} is the Greatest number`);
      } else {
        console.log(`${d} is the Greatest number`);
      }
    } else if (c >= d) {
      console.log(`${c} is the Greatest number`);
    } else {
      console.log(`${d} is the Greatest number`);
    }
  } else if (b >= c) {
    if (b >= d) {
      console.log(`${b} is the Greatest number`);
    } else {
      console.log(`${d} is the Greatest number`);
    }
  } else if (c >= d) {
    console.log(`${c} is the Greatest number`);
  } else {
    console.log(`${d} is the Greatest number`);
  }
}

GreaterNum(10, 20, 5, 30); // Output: 30 is the Greatest number
GreaterNum(50, 40, 60, 30); // Output: 60 is the Greatest number

//?  -----------------------------------

function GreaterNum(a, b, c, d) {
  // Compare all the numbers and find the greatest
  let largest = a;

  if (b > largest) {
    largest = b;
  }
  if (c > largest) {
    largest = c;
  }
  if (d > largest) {
    largest = d;
  }

  console.log(largest + " is the greatest number");
}

GreaterNum(10, 20, 5, 30); // Output: 30 is the greatest number

//! ================================================================================================
//! ================================================================================================

//! ===============================
//? Check if a person is eligible to vote
//! ===============================

function canVote(age) {
  if (age >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible to vote");
  }
}
canVote(20);
canVote(15);

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

//  raised to the power of two" and "raised to the power of three ( logic )
const numPart113 = 10;
function SeriesPart3(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i ** 2 + i ** 3);
  }
}
console.log(SeriesPart3(numPart113));
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

//?  -----------------------------------

function SeriesPart3(num) {
  for (let i = 1; i <= num; i++) {
    let sq = i * i; // Square calculation
    let cb = i * i * i; // Cube calculation
    console.log(sq + cb);
  }
}

SeriesPart3(10);

//?  -----------------------------------

// Function to calculate square
function square(n) {
  return n * n;
}

// Function to calculate cube
function cube(n) {
  return n * n * n;
}

// Function to generate the series
function SeriesPart3(num) {
  for (let i = 1; i <= num; i++) {
    console.log(square(i) + cube(i));
  }
}

SeriesPart3(10);

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
  let a = 0,
    b = 1;
  let next; // Declaring next outside the loop
  let result = "";

  for (let i = 1; i <= num; i++) {
    next = a + b; // Updating the existing variable
    a = b;
    b = next;
    result += a + " "; // Concatenating the result
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
    result = result * i; // first multiply
    console.log(result); // then log
  }
}

const factNum2 = 5;
factorial2(factNum2);
// Output:
// 1
// 2
// 6
// 24
// 120

// IN SHORT LAST RESULT * CURRENT ITERATION MEANS  5! = 5 * 4!(24)

//! The expression result = result * i multiplies the current value of result by i in each iteration of the loop.
//? Initially: result = 1 (since we start with 1).
//? First iteration (i = 1): result =  (result)1 * (i)1 → result = 1.
//? Second iteration (i = 2): result = (result)1 * (i)2 → result = 2.
//? Third iteration (i = 3): result = (result)2 * (i)3 → result = 6.
// And so on, until i reaches the number num.

//! ============ FOR PRINT SERIES OF FACTORIAL with  helper loop===================

function factorial2(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

const factNum234 = 5;

// Call the function for each step
for (let i = 1; i <= factNum234; i++) {
  console.log(factorial2(i));
}
// 1
// 2
// 6
// 24
// 120

//! ================================================================================================
//! ================================================================================================

//! ===============================
//? 1! 3! 5! 7! .....n (1 ,6, 120...n) (factorial)
//! ===============================

function factorialOfOddNumbers(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    if (i % 2 != 0) {
      result = result * i;
      console.log(result);
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
      result = result * i;
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

//? ---------------
//? above Code is good but alternative way
//? ---------------

function oddFactorials(n) {
  for (let i = 1; i <= n; i += 2) {
    // Loop through odd numbers only
    let fact = 1;

    // Calculate factorial using a second for loop
    for (let j = 1; j <= i; j++) {
      fact = fact * j;
    }

    console.log(i + "! =", fact); // Print the factorial of each odd number
  }
}

// Call the function
oddFactorials(7);

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

//? ---------------

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const printPrimeSeries = (n) => {
  console.log(`Prime numbers up to ${n}:`);
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
};

// Call function
printPrimeSeries(20);
// 2
// 3
// 5
// 7
// 11
// 13
// 17
// 19

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
//?  countDigits
//! ===============================

function countDigits(number) {
  if (number === 0) {
    return 1;
  }

  number = Math.abs(number);

  let count = 0;
  while (number != 0) {
    number = Math.floor(number / 10);
    count++;
  }
  return count;
}

console.log(countDigits(12345)); // Output: 5
console.log(countDigits(-678)); // Output: 3
console.log(countDigits(0)); // Output: 1

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
  for (let i = 0; i < numStr.length; i++) {
    sum = sum + Number(numStr[i]) ** numStr.length;
  }
  if (sum === num) {
    return `${num} is an Armstrong number`;
  } else {
    return `${num} is not an Armstrong number`;
  }
};

//! =======================================

function customPower(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
}

const isArmstrongNumber2 = (num) => {
  let numStr = num.toString();
  let sum = 0;

  for (let i = 0; i < numStr.length; i++) {
    sum += customPower(Number(numStr[i]), numStr.length);
  }

  if (sum === num) {
    return `${num} is an Armstrong number`;
  } else {
    return `${num} is not an Armstrong number`;
  }
};

console.log(isArmstrongNumber2(153)); // "153 is an Armstrong number"
console.log(isArmstrongNumber(9474)); // "9474 is an Armstrong number"
console.log(isArmstrongNumber(123)); // "123 is not an Armstrong number"

//! =======================================

function isArmstrong(num) {
  let originalNum = num;
  let temp = num;
  let count = 0;
  let sum = 0;

  // Count the number of digits
  while (temp > 0) {
    temp = Math.floor(temp / 10);
    count++;
  }

  temp = num;

  while (temp > 0) {
    let digit = temp % 10;
    let power = 1;

    for (let i = 0; i < count; i++) {
      power *= digit;
    }
    sum += power;

    temp = Math.floor(temp / 10);
  }
  return sum === originalNum;
}

// Input from the user
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

// const ReverseNum2 = (num) => {
//   let reversed = 0;
//   const isNegative = num < 0; // Check if the number is negative
//   num = Math.abs(num); // Work with the absolute value of the number

//   while (num > 0) {
//     const lastDigit = num % 10;
//     reversed = reversed * 10 + lastDigit;
//     num = Math.floor(num / 10);
//   }

//   return isNegative ? -reversed : reversed;
// };

// const number2 = -12345;
// console.log(ReverseNum2(number)); // Output: -54321

//! ================================================================================================
//! ================================================================================================

//! ===============================
//  7
//  7 5
//  7 5 2
//  7 5 2 3  || take n = 3257
//! ===============================

function printReversePattern(n) {
  let numStr = n.toString();
  let length = numStr.length;

  for (let i = 0; i < length; i++) {
    let row = "";

    for (let j = length - 1; j >= length - 1 - i; j--) {
      row = row + numStr[j];
    }

    console.log(row);
  }
}

printReversePattern(3257);
//  7
//  7 5
//  7 5 2
//  7 5 2 3

//! ================================================================================================
//! ================================================================================================

// -----------------------------------------------------

// swap two value Without Using a Temporary Variable (Using Arithmetic)

let aSwap = 5;
let bSwap = 10;
console.log(`Before swapping: a = ${aSwap}, b = ${bSwap}`);

aSwap = aSwap + bSwap;
bSwap = aSwap - bSwap;
aSwap = aSwap - bSwap;

console.log(`After swapping: a = ${aSwap}, b = ${bSwap}`);

// -----------------------------------------------------

let a = 5,
  b = 10;
console.log(`Before swapping: a = ${a}, b = ${b}`);

let temp = a;
a = b;
b = temp;

console.log(`After swapping: a = ${a}, b = ${b}`);

// -----------------------------------------------------

console.log(`Before swapping: a = ${a}, b = ${b}`);

[a, b] = [b, a]; // Swapping using destructuring

console.log(`After swapping: a = ${a}, b = ${b}`);

// -----------------------------------------------------

//! ================================================================================================
//! ================================================================================================

let Aw = 20;
let Bw = ++Aw;
console.log(Aw); // 21
console.log(Bw); // 21

let Aww = 20;
let Bww = Aww++;
console.log(Aww); // 21
console.log(Bww); // 20

//! ================================================================================================
//! ================================================================================================
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

//! ===============================
// Find the Maximum and Minimum Element in an Array
//! ===============================

function findMinMax(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]; // Update min if a smaller value is found
    }
    if (arr[i] > max) {
      max = arr[i]; // Update max if a larger value is found
    }
  }

  return { min, max };
}

let arrMinMax = [3, 1, 8, 2, 7, 5];
console.log(findMinMax(arrMinMax)); // { min: 1, max: 8 }

//! ================================================================================================
//! ================================================================================================

//! ===============================
// Find the Second Largest and Second Smallest Elements
//! ===============================

function findSecondLargestSmallest(arr) {
  if (arr.length < 2) return "Array must have at least two elements";

  let largest = arr[0];

  // Find the largest element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  let secondLargest = arr[0];

  // Find the second largest element
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }

  //? ===================================================

  let smallest = arr[0];

  // Find the smallest element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  let secondSmallest = arr[0];

  // Find the second smallest element
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < secondSmallest && arr[i] > smallest) {
      secondSmallest = arr[i];
    }
  }

  if (secondSmallest === largest || secondLargest === smallest) {
    return "No second largest or second smallest element";
  }

  return { secondSmallest, secondLargest };
}

let arrSecondLargestAndSmallest = [3, 1, 8, 2, 7, 5];
console.log(findSecondLargestSmallest(arrSecondLargestAndSmallest));
// { secondSmallest: 2, secondLargest: 7 }

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! reverseArray
//! ===============================

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap arr[left] and arr[right]
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    // Move pointers
    left++;
    right--;
  }

  return arr;
}

let reverseArray = [3, 1, 8, 2, 7, 5];
console.log(reverseArray(reverseArray)); // [5, 7, 2, 8, 1, 3]

//! --------------------- Method -2 ----------------------------------------

function reverseArray22(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

let reverseArray2 = [3, 1, 8, 2, 7, 5];
console.log(reverseArray22(reverseArray2)); // Output: [5, 7, 2, 8, 1, 3]

//! --------------------- Method -3 ----------------------------------------

function reverseArray33(arr) {
  let reversed = [];
  let index = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed[index] = arr[i];
    index++;
  }

  return reversed;
}

console.log(reverseArray33(reverseArray2)); // Output: [5, 7, 2, 8, 1, 3]

//! ================================================================================================
//! ================================================================================================

//! ===============================
// Check if an Array is Sorted
//! ===============================

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 3, 2, 4, 5])); // false

//! ===============================
//! reverseString
//! ===============================

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello")); // Output: "olleh"

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Find the Sum of All Elements in an Array
//! ===============================

function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Example Usage
console.log(sumOfArray([1, 2, 3, 4, 5])); // 15
console.log(sumOfArray([10, 20, 30])); // 60

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Find the Occurrence of an Element in an Array
//! ===============================

function countOccurrences(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences([1, 2, 3, 2, 4, 2, 5], 2)); // 3
console.log(countOccurrences([10, 20, 10, 10, 30], 10)); // 3

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Find the Occurrence Frequency of an  each Element in an Array
//! ===============================

function countFrequency(arr) {
  let frequency = {}; // Object to store frequency

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i]; // Get the current element
    if (frequency[key] === undefined) {
      frequency[key] = 1; // If not found, initialize to 1
    } else {
      frequency[key]++; // Increment count
    }
  }

  return frequency;
}

console.log(countFrequency([10, 20, 10, 30, 20, 30, 30]));
// Output: { '10': 2, '20': 2, '30': 3 }

let frequencyObject = countFrequency([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]);

console.log(frequencyObject); // Output: { '1': 1, '2': 2, '3': 3, '4': 4 }
console.log(frequencyObject[2]); // Output: 2 (count of number 2)
console.log(frequencyObject[3]); // Output: 3 (count of number 3)
console.log(frequencyObject); // Output: 3 (count of number 3)

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Find the Occurrence Frequency of an  each Element in an String
//! ===============================

function countCharFrequency(str) {
  let frequency = {}; // Object to store character frequency

  for (let i = 0; i < str.length; i++) {
    let char = str[i]; // Get the current character
    if (frequency[char] === undefined) {
      frequency[char] = 1; // If not found, initialize to 1
    } else {
      frequency[char]++; // Increment count
    }
  }

  return frequency;
}

console.log(countCharFrequency("programming"));
// Output: { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Find the duplicate Element in an String
//! ===============================

function findDuplicateChars(str) {
  let frequency = {}; // Object to store character frequency
  let duplicates = []; // Array to store duplicate characters

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (frequency[char] === undefined) {
      frequency[char] = 1; // If not found, initialize to 1
    } else {
      frequency[char]++; // Increment count
    }
  }

  // Find characters with frequency > 1
  for (let char in frequency) {
    console.log(frequency[char]);
    if (frequency[char] > 1) {
      duplicates.push(char);
    }
  }

  return duplicates;
}

console.log(findDuplicateChars("programming"));
// Output: ['r', 'g', 'm']

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Find the duplicate Element in an array
//! ===============================

function findDuplicateElements(arr) {
  let frequency = {}; // Object to store element frequency
  let duplicates = []; // Array to store duplicate elements

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (frequency[element] === undefined) {
      frequency[element] = 1; // If not found, initialize to 1
    } else {
      frequency[element]++; // Increment count
    }
  }
  // Find elements with frequency > 1
  for (let key in frequency) {
    if (frequency[key] > 1) {
      duplicates.push(Number(key)); // Convert key back to number (optional for numbers)
    }
  }

  return duplicates;
}

console.log(findDuplicateElements([1, 2, 3, 4, 3, 2, 1, 5]));
// Output: [1, 2, 3]

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! sortArray (bubble sort)
//! ===============================

function sortArray(arr) {
  // Simple Bubble Sort (to sort the array manually)
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(sortArray([1, 3, 4, 5, 2]));
// [ 1, 2, 3, 4, 5 ]

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! removeDuplicates from sorted array
//! ===============================

function removeDuplicates(arr) {
  arr = sortArray(arr); // First, sort the array (First we have to  sort array)
  let result = [];

  if (arr.length === 0) return result;

  result.push(arr[0]); // First element is always unique

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      result.push(arr[i]); // Push unique elements
    }
  }

  return result;
}

let arrRemoveDuplicate = [1, 1, 2, 3, 4, 5, 2, 2];
console.log(removeDuplicates(arrRemoveDuplicate));
// Output: [1, 2, 3, 4, 5]

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! removeDuplicates from array
//! ===============================

function removeDuplicateChars(arr) {
  let result = []; // Store unique characters

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      // Check if character is already in result
      result.push(arr[i]); // Add unique character
    }
  }

  return result;
}

// Example Usage:
console.log(removeDuplicateChars([1, 2, 3, 2, 2, 2, 3, 4, 5, 6]));
// [ 1, 2, 3, 4, 5, 6 ]

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! removeDuplicates from string
//! ===============================

function removeDuplicateChars(str) {
  let result = ""; // Store unique characters

  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      // Check if character is already in result
      result += str[i]; // Add unique character
    }
  }

  return result;
}

// Example Usage:
console.log(removeDuplicateChars("programming")); // Output: "progamin"
console.log(removeDuplicateChars("hello")); // Output: "helo"

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Merge two sorted arrays.
//! ===============================

function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  // Compare elements from both arrays and push the smaller one
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Push remaining elements from arr1 (if any)
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // Push remaining elements from arr2 (if any)
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6, 7, 8];
const resultMerged = mergeSortedArrays(arr1, arr2);
console.log(resultMerged); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

/*
Iteration explanation:

Initial arrays:
arr1 = [1, 3, 5]
arr2 = [2, 4, 6, 7, 8]

Step 1: Compare 1 and 2 -> 1 is smaller, push 1 -> mergedArray = [1]
Step 2: Compare 3 and 2 -> 2 is smaller, push 2 -> mergedArray = [1, 2]
Step 3: Compare 3 and 4 -> 3 is smaller, push 3 -> mergedArray = [1, 2, 3]
Step 4: Compare 5 and 4 -> 4 is smaller, push 4 -> mergedArray = [1, 2, 3, 4]
Step 5: Compare 5 and 6 -> 5 is smaller, push 5 -> mergedArray = [1, 2, 3, 4, 5]

Now arr1 is fully traversed.

Step 6: Push remaining arr2 elements: 6 -> mergedArray = [1, 2, 3, 4, 5, 6]
Step 7: Push remaining arr2 elements: 7 -> mergedArray = [1, 2, 3, 4, 5, 6, 7]
Step 8: Push remaining arr2 elements: 8 -> mergedArray = [1, 2, 3, 4, 5, 6, 7, 8]

Final merged array:
[1, 2, 3, 4, 5, 6, 7, 8]
*/

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Check if two arrays are equal or not.
//! ===============================

function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1])); // false

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Move all zeros to the end of the array.
//! ===============================

function moveZerosToEnd(arr) {
  let result = [];
  let zeroCount = 0;

  // Push non-zero elements to result
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result.push(arr[i]);
    } else {
      zeroCount++;
    }
  }

  // Push zeros at the end
  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }

  return result;
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]

//! ================================================================================================
//! ================================================================================================

//! ===============================
// Iterate over an 2D array
//! ===============================

let Arr2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function Arr2D(arr) {
  let result = []; // Use an array to collect the rows
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result.push(arr[i][j]); // Push elements into the row array
    }
  }
  return result; // Return the result array
}

console.log(Arr2D(Arr2d));
// [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9
// ]

//?  ----------------------- Print in string -----------------------------------

function Arr2D(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result += arr[i][j] + " "; // Add a space between elements
    }
    result += "\n"; // Add a line break after each row
  }
  return result;
}

console.log(Arr2D(Arr2d));
// 1 2 3
// 4 5 6
// 7 8 9

//! ================================================================================================
//! ================================================================================================

//! ===============================
// iterate over an 3D array
//! ===============================

let arr3d = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

function arr3D(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        result = result + arr[i][j][k];
      }
      result = result + "\n";
    }
  }
  return result;
}

console.log(arr3D(arr3d));
// 123
// 456
// 789
// 101112

//! ================================================================================================
//! ================================================================================================

//! ===============================
// addition of array
//! =============================

let arr122 = [1, 2, 3];
let arr222 = [4, 5, 6];

function addArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return "Arrays must be of the same length";
  }

  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] + arr2[i]);
  }

  return result;
}

console.log(addArrays(arr122, arr222)); // Output: [5, 7, 9]

//! ================================================================================================
//! ================================================================================================

//! ===============================
// addition of 2d array
//! =============================

let arr11 = [
  [1, 2, 3],
  [4, 5, 6],
];

let arr22 = [
  [7, 8, 9],
  [10, 11, 12],
];

function add2DArrays(arr1, arr2) {
  if (arr1.length !== arr2.length || arr1[0].length !== arr2[0].length) {
    return "Arrays must have the same dimensions";
  }

  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let row = [];
    for (let j = 0; j < arr1[i].length; j++) {
      row.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(row);
  }
  return result;
}

console.log(add2DArrays(arr11, arr22));
// Output:
// [
//   [8, 10, 12],
//   [14, 16, 18]
// ]

//! ================================================================================================
//! ================================================================================================

//! ===============================
// addition of 3d array
//! =============================

let arr1111 = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

let arr2222 = [
  [
    [1, 1, 1],
    [2, 2, 2],
  ],
  [
    [3, 3, 3],
    [4, 4, 4],
  ],
];

function add3DArrays(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return "Arrays must have the same dimensions";

  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let twoDResult = [];
    for (let j = 0; j < arr1[i].length; j++) {
      let oneDResult = [];
      for (let k = 0; k < arr1[i][j].length; k++) {
        oneDResult.push(arr1[i][j][k] + arr2[i][j][k]);
      }
      twoDResult.push(oneDResult);
    }
    result.push(twoDResult);
  }

  return result;
}
console.log(add3DArrays(arr1111, arr2222));
// [
//   [
//     [2, 3, 4],
//     [6, 7, 8],
//   ],
//   [
//     [10, 11, 12],
//     [14, 15, 16],
//   ],
// ];

//! ================================================================================================
//! ================================================================================================

//! ===============================
// multiplyMatrices
//! =============================

function multiplyMatrices(A, B) {
  // Get matrix dimensions
  const m = A.length; // Number of rows in A
  const n = A[0].length; // Number of columns in A (and rows in B)
  const p = B[0].length; // Number of columns in B

  // Validate matrix multiplication condition: A's columns must match B's rows
  if (n !== B.length) {
    throw new Error("Number of columns in A must equal number of rows in B.");
  }

  const result = []; // Initialize the result matrix

  // Loop over each row of matrix A
  for (let i = 0; i < m; i++) {
    const row = []; // Start a new row for the result matrix

    // Loop over each column of matrix B
    for (let j = 0; j < p; j++) {
      let sum = 0; // Temporary sum for the current cell [i][j]

      // Perform dot product between A's row and B's column
      for (let k = 0; k < n; k++) {
        sum += A[i][k] * B[k][j]; // Multiply and accumulate
      }

      row.push(sum); // Add the computed value to the current row
    }

    result.push(row); // Add the completed row to the result matrix
  }

  return result; // Return the resulting matrix
}

// Example matrices
const A = [
  [1, 2, 3],
  [4, 5, 6],
];

const B = [
  [7, 8],
  [9, 10],
  [11, 12],
];

const resultS = multiplyMatrices(A, B);
console.log(resultS);
// [
//   [58, 64],
//   [139, 154],
// ];

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Matrix Diagonal Traversal (3D)
//! Traverse all diagonals in a 3D matrix (if applicable).Matrix Diagonal Traversal (3D)
//! ===============================

// ✅ In 3D, diagonal means:
// Elements where all indices are the same: matrix[x][x][x] (main diagonal).
// We can also think of "cross-section diagonals" if needed.
// For simplicity, let’s do main diagonal (easy to understand and implement).

function traverseMainDiagonal(matrix) {
  const n = matrix.length;
  const diagonal = [];

  for (let i = 0; i < n; i++) {
    diagonal.push(matrix[i][i][i]);
  }

  return diagonal;
}
const matrix = [
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
  ],
  [
    [19, 20, 21],
    [22, 23, 24],
    [25, 26, 27],
  ],
];

console.log(traverseMainDiagonal(matrix)); // Output: [1, 14, 27]

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Find the Maximum Element in a 3D Array
//! ===============================

const matrix2 = [
  [
    [1, 5, 3],
    [4, 2, 6],
  ],
  [
    [7, 0, 9],
    [3, 8, 2],
  ],
];

function findMaxIn3D(matrix) {
  let max = -Infinity;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      for (let k = 0; k < matrix[i][j].length; k++) {
        if (matrix[i][j][k] > max) {
          max = matrix[i][j][k];
        }
      }
    }
  }

  return max;
}

console.log(findMaxIn3D(matrix2)); // Output: 9

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! flattenArray
//! ===============================

// ------------------------- METHOD 1 -----------------------------------------

let arr = [1, [2, [3, [4]], 5]];
let flatArr = arr.flat(3);
console.log(flatArr); // [1, 2, 3, 4, 5]

// -------------------------- METHOD 2 ----------------------------------------

function flattenArray(arr) {
  let stack = [...arr]; // Initial stack: [1, [2, [3, [4]], 5]]
  let result = []; // Initial result: []

  while (stack.length > 0) {
    let value = stack.pop(); // Pop value from stack

    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        stack.push(value[i]);
      }
    } else {
      // If value is not array, push to result
      result.push(value);
    }
  }
  return result.reverse(); // Reverse to get correct order
}

console.log(flattenArray([1, [2, [3, [4]], 5]]));
// Output: [1, 2, 3, 4, 5]

// Example logs:
// Iteration 1:
// Popped: [2, [3, [4]], 5]
// stack: [1, 2, [3, [4]], 5]
// result: []

// Iteration 2:
// Popped: 5
// stack: [1, 2, [3, [4]]]
// result: [5]

// Iteration 3:
// Popped: [3, [4]]
// stack: [1, 2, 3, [4]]
// result: [5]

// Iteration 4:
// Popped: [4]
// stack: [1, 2, 3, 4]
// result: [5]

// Iteration 5:
// Popped: 4
// stack: [1, 2, 3]
// result: [5, 4]

// Iteration 6:
// Popped: 3
// stack: [1, 2]
// result: [5, 4, 3]

// Iteration 7:
// Popped: 2
// stack: [1]
// result: [5, 4, 3, 2]

// Iteration 8:
// Popped: 1
// stack: []
// result: [5, 4, 3, 2, 1]

// Final step: reverse the result array
// Before reverse: [5, 4, 3, 2, 1]
// After reverse: [1, 2, 3, 4, 5]

// -------------------------- METHOD 3 ----------------------------------------

function flattenArray(arr) {
  let flatArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray = flatArray.concat(flattenArray(arr[i]));
    } else {
      flatArray.push(arr[i]);
    }
  }
  return flatArray;
}

const nestedArray = [1, [2, [3, 4]], 5];
console.log(flattenArray(nestedArray));
// Output: [1, 2, 3, 4, 5]

//! ================================================================================================
//! ================================================================================================

//! ===============================
// Sum of All even Number in Array
//! ===============================

const Arr12 = [1, 2, 3, 4, 5, 6];

function SumEvenNum(Arr12) {
  let sum = 0;
  for (let i = 0; i < Arr12.length; i++) {
    if (Arr12[i] % 2 === 0) {
      sum = sum + Arr12[i];
    }
  }
  return sum;
}
// console.log(`Sum of All even Number in Array ${SumEvenNum(Arr12)}`);
// Sum of All even Number in Array 12

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Check if a String is a Palindrome
//! ===============================

function isPalindrome(str) {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Count Vowels and Consonants in a String
//! ===============================

function countVowelsAndConsonants(str) {
  let vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }

  return { vowels: vowelCount, consonants: consonantCount };
}

// Example usage:
let result = countVowelsAndConsonants("Hello World");
console.log(result); // Output: { vowels: 3, consonants: 7 }

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Count Vowels and Consonants in a String (Track Characters + Count)
//! ===============================

function countVowelsAndConsonants2(str) {
  let vowelsList = "aeiouAEIOU";
  let vowelCount = 0;
  let consonantCount = 0;
  let vowelsFound = [];
  let consonantsFound = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      if (vowelsList.includes(char)) {
        vowelCount++;
        vowelsFound.push(char);
      } else {
        consonantCount++;
        consonantsFound.push(char);
      }
    }
  }

  return {
    vowels: vowelCount,
    consonants: consonantCount,
    vowelChars: vowelsFound,
    consonantChars: consonantsFound,
  };
}
// Example usage:
let result23 = countVowelsAndConsonants2("Hello World");
console.log(result23);
/*
{
  vowels: 3,
  consonants: 7,
  vowelChars: ['e', 'o', 'o'],
  consonantChars: ['H', 'l', 'l', 'W', 'r', 'l', 'd']
}
*/

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Find the length of the string (without using .length)
//! ===============================

function getStringLength(str) {
  let count = 0;
  for (let char of str) {
    count++;
  }
  return count;
}

let str = "Hello, world!";
console.log(getStringLength(str)); // Output: 13

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Check if two strings are anagrams.
//! ===============================

// To check if two strings are anagrams, you need to see whether both strings have:
// The same characters
// With same frequency
// But possibly in different order

//? Input:  "listen", "silent"
// Output: true  // They are anagrams

//? Input: "hello", "world"
// Output: false

function characterFrequencyCount(str) {
  const frequency = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (frequency[char] === undefined) {
      frequency[char] = 1; // first time
    } else {
      frequency[char] += 1; // already exists
    }
  }

  return frequency;
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freq1 = characterFrequencyCount(str1);
  const freq2 = characterFrequencyCount(str2);

  for (let key in freq1) {
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }

  return true;
}
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! find largest character from string and its length also
//! ===============================

let strLargest = "the dog is the danger then the cat";

function strLargest2(str) {
  let largestWord = "";
  let arr = str.split(" ");
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > largestWord.length) {
      console.log(arr[i].length);
      largestWord = arr[i];
    }
  }
  const lengthOfLargestWord = largestWord.length;
  return { largestWord, lengthOfLargestWord };
}

console.log(strLargest2(strLargest));
// { largestWord: 'danger', lengthOfLargestWord: 6 }

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! swapCase in  string
//! ===============================

function swapCase(str) {
  let swapped = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === char.toUpperCase()) {
      swapped += char.toLowerCase();
    } else {
      swapped += char.toUpperCase();
    }
  }
  return swapped;
}

// Input
console.log(swapCase("Hello World!")); // Output: "hELLO wORLD!"

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! slice and concatenate strings without using methods
//! ===============================

// ======== Method 1 =========

let str1 = "Hello, ";
let str2 = "World!";

// Slicing the strings using indexing
let slicedStr1 = str1[0] + str1[1] + str1[2] + str1[3] + str1[4]; // Slices "Hello"
let slicedStr2 = str2[1] + str2[2] + str2[3] + str2[4]; // Slices "orld"

// Concatenating the sliced strings
let result12 = slicedStr1 + slicedStr2;

// console.log(result12);
// Output: "Helloorld"

// ======== Method 2 =========

let str31 = "Hello, ";
let str32 = "World!";

function sliceString(str, start, end) {
  let sliced = "";
  for (let i = start; i < end; i++) {
    sliced += str[i];
  }
  return sliced;
}

// Slicing the strings using the function
let slicedStr13 = sliceString(str31, 0, 5); // Slices "Hello"
let slicedStr23 = sliceString(str32, 1, 5); // Slices "orld"

// Concatenating the sliced strings
let result33 = slicedStr13 + slicedStr23;

// console.log(result33);
// Output: "Helloorld"

//! ================================================================================================
//! ================================================================================================

//! ===============================
//!  compare two string
//! ===============================

// ======== Method 1 =========

const compString = "Hello";
const compString2 = "Hello";

if (compString === compString2) {
  console.log("The strings are equal.");
} else {
  console.log("The strings are not equal.");
}
// ======== Method 2 =========

if (compString.includes(compString2)) {
  console.log(`The string "${compString}" contains "${compString2}".`);
} else {
  console.log(`The string "${compString}" does not contain "${compString2}".`);
}

// ======== Method 3 =========

if (compString.length === compString2.length) {
  console.log("The strings have the same length.");
} else {
  console.log("The strings do not have the same length.");
}

//! ================================================================================================
//! ================================================================================================

//! ===============================
//!  Check if one string is a subsequence of another.
//! ===============================

function isSubsequence(str1, str2) {
  let i = 0,
    j = 0;

  // Traverse both strings
  while (i < str1.length && j < str2.length) {
    // If characters match, move to the next character in str2
    if (str1[i] === str2[j]) {
      j++;
    }
    i++;
  }

  // If j reaches the end of str2, it means all characters in str2 were found in order in str1
  return j === str2.length;
}

// Test cases
console.log(isSubsequence("abcde", "ace")); // true
// Iterations:
// i = 0, j = 0 → 'a' === 'a' → j++, i++
// i = 1, j = 1 → 'b' !== 'c' → i++
// i = 2, j = 1 → 'c' === 'c' → j++, i++
// i = 3, j = 2 → 'd' !== 'e' → i++
// i = 4, j = 2 → 'e' === 'e' → j++, i++
// j === str2.length → return true

console.log(isSubsequence("abcde", "aec")); // false
// Iterations:
// i = 0, j = 0 → 'a' === 'a' → j++, i++
// i = 1, j = 1 → 'b' !== 'e' → i++
// i = 2, j = 1 → 'c' !== 'e' → i++
// i = 3, j = 1 → 'd' !== 'e' → i++
// i = 4, j = 1 → 'e' === 'e' → j++, i++
// i = 5, j = 2 → loop ends, j !== str2.length → return false

//! ============== method 2 =================

const string11 = "Hello, world!";
const string22 = "world";
function isSubstring1(str1, str2) {
  if (str1.includes(str2)) {
    return true;
  } else {
    return false;
  }
}
console.log(isSubstring1(string11, string22));
// true
console.log(isSubstring1("abcde", "abc"));
// true

//! ================================================================================================
//! ================================================================================================

//! ===============================
//!  convert a string to upper and lower case without using built-in methods in JavaScript
//! ===============================

function toUpperCaseManual(str) {
  let result = "";
  let lowerA = "a".charCodeAt(0); // 97
  let lowerZ = "z".charCodeAt(0); // 122

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= lowerA && code <= lowerZ) {
      result += String.fromCharCode(code - 32); // or: code - ('a' - 'A')
    } else {
      result += str[i];
    }
  }
  return result;
}

function toLowerCaseManual(str) {
  let result = "";
  let upperA = "A".charCodeAt(0); // 65
  let upperZ = "Z".charCodeAt(0); // 90

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= upperA && code <= upperZ) {
      result += String.fromCharCode(code + 32);
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(toUpperCaseManual("Hello World!")); // "HELLO WORLD!"
console.log(toLowerCaseManual("Hello World!")); // "hello world!"

//       Relationship Between Lowercase and Uppercase:
// For each lowercase letter, its ASCII value is exactly 32 greater than the corresponding uppercase letter. For example:
// a (97) - A (65) = 32
// b (98) - B (66) = 32
// c (99) - C (67) = 32
// This pattern continues for all lowercase and uppercase letters.
// Conversion:

// When you have a lowercase letter (e.g., c with ASCII 99), subtracting 32 gives you:
// charCode = 99 (for c)
// charCode -= 32; results in charCode = 67 (for C).
// This way, you convert the character from lowercase to uppercase.

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Convert the first letter of each word to uppercase. (Title Case)
//! ===============================

function toTitleCase(str) {
  const words = str.split(" ");
  let titleCased = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      let capital = word.charAt(0).toUpperCase();
      let rest = word.slice(1).toLowerCase();
      titleCased.push(capital + rest);
    } else {
      titleCased.push(""); // Handle multiple spaces
    }
  }

  return titleCased.join(" ");
}

// Example:
console.log(toTitleCase("hello   world from   manthan"));
// Output: "Hello   World From   Manthan"

//! ================================================================================================
//! ================================================================================================

//! ===============================
//! Check if a string contains only digits.
//! ===============================

function isOnlyDigits(str) {
  if (!isNaN(str) && Number.isInteger(Number(str))) {
    return true;
  }

  return false;
}

// ---------------------------------------

function isOnlyDigits(str) {
  if (str.length === 0) return false;
  for (let char of str) {
    if (char < "0" || char > "9") return false;
  }
  return true;
}

console.log(isOnlyDigits("4567")); // true
console.log(isOnlyDigits("45.67")); // false (this is a float, not an integer)
console.log(isOnlyDigits("45abc")); // false

//! ================================================================================================
//! ================================================================================================
