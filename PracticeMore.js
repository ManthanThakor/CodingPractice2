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

//! ============= Circle ==================
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

//? ----------------------------------------------
//! Sum of 2 number
//? ----------------------------------------------

const SumOfTwoNumber = (num1, num2) => {
  const result = num1 + num2;
  return result;
};

console.log(SumOfTwoNumber(1, 2));
// 3

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

//! ===============================
// 1,8,27,64,125,......,N
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
// First iteration (i = 1): result = 1 * 1 → result = 1.
// Second iteration (i = 2): result = 1 * 2 → result = 2.
// Third iteration (i = 3): result = 2 * 3 → result = 6.
// And so on, until i reaches the number num.

//! ===============================
// 1! 3! 5! 7! .....n (1 ,6, 120...n) (factorial)
//! ===============================

function factorialOfOddNumbers(num) {
  let;
}
