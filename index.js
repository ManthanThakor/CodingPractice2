//! ===============================
// leap year or not
//! ===============================

const leap = 2000;

function leapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log(year + " is a leap year");
      } else {
        console.log(year + " is not a leap year");
      }
    } else {
      console.log(year + " is a leap year");
    }
  } else {
    console.log(year + " is not a leap year");
  }
}

// leapYear(leap); // 2000 is a leap year

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
// console.log(GreaterNum(numA, numB, numC)); // 20 is the Greatest number

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
// temp(temperature); //-1.11°C - Cold
// temp(temperature2); //15.56°C - normal
// temp(temperature3); //26.67°C - hot

//! ===============================
// Table of any Number
//! ===============================

const tableNum = 10;

function multiply(num, range = 10) {
  console.log(`Table of Number ${num} :`);
  for (let i = 1; i <= range; i++) {
    const result = num * i;
    console.log(`${num} * ${i} = ${result}`);
  }
}
// console.log(multiply(tableNum));
// Table of Number 10 :
// 10 * 1 = 10
// 10 * 2 = 20
// 10 * 3 = 30
// 10 * 4 = 40
// 10 * 5 = 50
// 10 * 6 = 60
// 10 * 7 = 70
// 10 * 8 = 80
// 10 * 9 = 90
// 10 * 10 = 100

//! ===============================
// Prime Number OR NOT
//! ===============================

const primeNum = 17;
function prime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

if (prime(primeNum)) {
  // console.log(`${primeNum} is a prime number.`);
} else {
  // console.log(`${primeNum} is not a prime number.`);
}
//17 is a prime number.

//! ===============================
// Factorial
//! ===============================

const factNum = 5;

function fact(numb) {
  if (numb === 0 || numb === 1) {
    return 1;
  }
  return numb * fact(numb - 1);
}
// console.log(fact(factNum)); // 120

//! ===============================
// Even or odd
//! ===============================

const numbb1 = 19;

function oddEven(num) {
  if (num % 2 === 0) {
    console.log(`The given Number ${num} is even number`);
  } else {
    console.log(`The given Number ${num} is odd number`);
  }
}
// console.log(oddEven(numbb1)); //The given Number 19 is odd number

//! ===============================
// Sum of array
//! ===============================

const numberSumArr = [10, 20, 30, 40, 50];

function numberSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(`Sum of Array : ${numberSum(numberSumArr)}`); //Sum of Array : 150

//! ===============================
// reverse the string
//! ===============================

const str = "Hi, How are You?";
function revStr(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}
// console.log(`Reversed Str = ${revStr(str)}`); // Reversed Str = ?uoY era woH ,iH

//! ===============================
// Find The Maximum Of ARRAY
//! ===============================
const maxNumArray = [10, 28, 42, 11, 23];

function maxNum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// console.log(`max numb in array ${maxNum(maxNumArray)}`);// max numb in array 42

//! ===============================
// Count Vowels in String
//! ===============================

const Str2 = "ManthanRocks";

function Vowels(Str2) {
  let VowelsCount = 0;
  let Vowels = "aeiouAEIOU";
  for (let i = 0; i < Str2.length; i++) {
    if (Vowels.includes(Str2[i])) {
      VowelsCount++;
    }
  }
  return VowelsCount;
}
// console.log(`Total VowelCount of string is : ${Vowels(Str2)}`); //Total VowelCount of string is : 3

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
// console.log(`Sum of All even Number in Array ${SumEvenNum(Arr12)}`); // Sum of All even Number in Array 12

//! ===============================
// Find Duplicate Number in Array
//! ===============================

const numbers = [1, 2, 3, 4, 5, 3, 2, 6, 1];

function findDuplicates(arr) {
  const duplicates = [];
  const checked = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (checked[num]) {
      if (!duplicates.includes(num)) {
        duplicates.push(num);
      }
    } else {
      checked[num] = true;
    }
  }
  return duplicates;
}

// console.log(findDuplicates(numbers)); // Outputs: [ 3, 2, 1 ]

//! ===============================
//
//! ===============================
//! ===============================
//
//! ===============================

//! ===============================
//
//! ===============================
//! ===============================
//
//! ===============================
//! ===============================
//
//! ===============================

//! ===============================
//
//! ===============================
//! ===============================
//
//! ===============================
//! ===============================
//
//! ===============================

//! ===============================
//
//! ===============================
//! ===============================
//
//! ===============================
//! ===============================
//
//! ===============================

//! ===============================
//
//! ===============================
//! ===============================
//
//! ===============================
//! ===============================
//
//! ===============================
//! ===============================
// *
// **
// ***
// ****
// *****
//! ===============================

const numSec = 5;

function printStar(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
// console.log(printStar(numSec));
// *
// **
// ***
// ****
// *****
