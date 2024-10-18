//! ====================================================
// calculate mathematical expression using recursion function.
//! ====================================================

const num1 = 2;
const num2 = 3;

function pow(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * pow(base, exponent - 1);
}

// console.log(`The pow of ${num1} raised to ${num2} is ${pow(num1, num2)}`);
// Output: The pow of 2 raised to 3 is 8

//! ====================================================
// factorial using Recursion function
//! ====================================================

const number = 5;

function factorial(num) {
  if (num < 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// console.log(` the factorial of number ${number} is ${factorial(number)}`);
// the factorial of number 5 is 120

//! ====================================================
// fibonacci sequence
//! ====================================================

let number1 = 10;

function fibonacci(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}
// console.log(`Fibonacci Seq of given number ${number1}: ${fibonacci(number1)}`);
// Fibonacci Seq of given number 10: 55

for (let i = 0; i <= number1; i++) {
  //   console.log(fibonacci(i));
}
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55

//! ====================================================
// Linear Sum
//! ====================================================

const number2 = 10;

function sum(num) {
  if (num === 0) {
    return 0;
  }
  return num + sum(num - 1);
}

// console.log(sum(number2));// 55

let linearSum = [];
for (let i = 0; i < number2; i++) {
  linearSum.push(sum(i));
}
// console.log(linearSum);
// [
//     0,  1,  3,  6, 10,
//    15, 21, 28, 36, 45
//  ]

//! ====================================================
// Linear Sum of even number
//! ====================================================

const number3 = 10;

function LinearSumOfEvenNum(num) {
  if (num <= 0) {
    return 0;
  } else if (num % 2 === 0) {
    return num + LinearSumOfEvenNum(num - 2);
  } else {
    return LinearSumOfEvenNum(num - 1);
  }
}

// console.log(LinearSumOfEvenNum(number3)); // Output: 30

let linearEvenSum = [];
for (let i = 0; i <= number3; i++) {
  linearEvenSum.push(LinearSumOfEvenNum(i));
}
// console.log(linearEvenSum);
// [0, 0, 2, 2, 6, 6, 12, 12, 20, 20, 30]

//! ====================================================
// Count number of digits
//! ====================================================

const Number4 = 12345;

function countNumDigit(num) {
  if (parseInt(num) < 1) {
    return 0;
  }
  return 1 + countNumDigit(parseInt(num) / 10);
}
// console.log(`Total Number of digits in  the given  number ${Number4} is : ${countNumDigit(Number4)}`);
// Total Number of digits in  the given  number 12345 is : 5

//! ====================================================
// Find Gcd And Lcm
//! ====================================================

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

const num5 = 48;
const num6 = 18;

// console.log(`GCD of ${num1} and ${num2} is: ${gcd(num1, num2)}`);
// GCD of 2 and 3 is: 1
// console.log(`LCM of ${num1} and ${num2} is: ${lcm(num1, num2)}`);
// LCM of 2 and 3 is: 6

//! ====================================================
// Check if a String is a Palindrome
//! ====================================================

let str1 = "HELEH";

function isPalindrome(str, start, end) {
  if (start >= end) {
    return true;
  }
  if (str[start] !== str[end]) {
    return false;
  }
  return isPalindrome(str, start + 1, end - 1);
}
console.log(isPalindrome(str1, 0, str1.length - 1));
// true
