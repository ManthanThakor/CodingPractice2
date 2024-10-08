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
// Check Palindrome or Not
//! ===============================
const testString = "Racecar";
function isPalindrome(str) {
  let lowerStr = "";
  for (let i = 0; i < str.length; i++) {
    lowerStr = lowerStr + str[i].toLowerCase();
  }
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (lowerStr[start] !== lowerStr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
// console.log(isPalindrome(testString)); // Outputs: true

//! ===============================
// Reverse the Number
//! ===============================

const number = 12345;

function reverseNumber(number) {
  let reverse = 0;
  while (number !== 0) {
    let remainder = number % 10;
    reverse = reverse * 10 + remainder;
    number = Math.floor(number / 10);
  }
  return reverse;
}
// console.log(reverseNumber(number)); // Outputs: 54321

//! ===============================
// Armstrong  Number
//! ===============================

const num13 = 153;
function ArmstrongNum(num) {
  let sum = 0;
  temp = num;

  while (temp > 0) {
    let remainder = temp % 10;
    sum = sum + remainder * remainder * remainder;
    temp = parseInt(temp / 10);
  }
  if (sum === num) {
    console.log("It is an Armstrong Number");
  } else {
    console.log("It is not an  Armstrong Number");
  }
}
// console.log(ArmstrongNum(num13)); // It is an Armstrong Number

//! ===============================
// Fibonacci Sequence
//! ===============================

function Fibonacci(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return Fibonacci(num - 1) + Fibonacci(num - 2);
}
//! If We Want direct output At 10
const numFor = 10;
// console.log(Fibonacci(10));
// Outputs: 55

//! If We Want Sequence
for (let i = 0; i <= numFor; i++) {
  // console.log(Fibonacci(i));
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

//! ===============================
// 1,8,27,64,125,......,N
//! ===============================

const numPart11 = 10;
function SeriesPart1(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i ** 3);
  }
}

// console.log(SeriesPart1(numPart11));
// 1
// 8
// 27
// 64
// 125
// 216
// 343
// 512
// 729
// 1000

const numPart112 = 10;
function SeriesPart2(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    let cal = i ** 3;
    result.push(cal);
  }
  console.log(result);
}

// console.log(SeriesPart2(numPart112));
// [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000];

//! ===============================
// 2, 12 ,36,80,.....,N
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

//! ===============================
// 1, -2,3,-4,5,-6,7,-8......n
//! ===============================

const numPart114 = 10;
function SeriesPart4(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(`-${i}`);
    } else {
      console.log(`${i}`);
    }
  }
}
// console.log(SeriesPart4(numPart114));
// 1
// -2
// 3
// -4
// 5
// -6
// 7
// -8
// 9
// -10

const numPart115 = 10;
function SeriesPart5(num) {
  let result = [];
  let temp;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      temp = `-${i}`;
      result.push(temp);
    } else {
      temp = `${i}`;
      result.push(temp);
    }
  }
  return result;
}
// console.log(SeriesPart5(numPart115));
// ["1", "-2", "3", "-4", "5", "-6", "7", "-8", "9", "-10"];

//! ===============================
// 3, 6,12,24,.....n
//! ===============================

const numPart116 = 10;
function SeriesPart6(num) {
  let Arr = [];
  let fNumb = 3;
  for (let i = 1; i <= num; i++) {
    Arr.push(fNumb);
    fNumb = fNumb * 2;
  }
  return Arr;
}
// console.log(SeriesPart6(numPart116));
// [3, 6,  12,  24, 48,   96, 192, 384,  768, 1536 ]

//! ===============================
// 11
// 121
// 1231
// 12341...n
//! ===============================

const numPart117 = 10;

function SeriesPart7(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + j;
    }
    row = row + 1;

    console.log(row);
  }
}
// console.log(SeriesPart7(numPart117));
// 11
// 121
// 1231
// 12341
// 123451
// 1234561
// 12345671
// 123456781
// 1234567891
// 123456789101

//! ===============================
// 1! 2! 3! 4! 5! 6! ......n
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

//! ===============================
// *
// **
// ***
// ****
// ***
// **
// *
//! ===============================

const num111 = 4;

function StarSeq(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
  for (let i = num - 1; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}
// console.log(StarSeq(num111));
// *
// **
// ***
// ****
// ***
// **
// *

//! ===============================
//    *
//   ***
//  *****
// *******
//! ===============================

const num222 = 4;
function StarSeq2(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}
// console.log(StarSeq2(num222));
//    *
//   ***
//  *****
// *******

//! ===============================
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//! ===============================

const num2223 = 4;

function StarSeq5(num) {
  for (let i = 1; i <= num; i++) {
    let row = "";

    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row = row + "*";
    }
    console.log(row);
  }

  for (let i = num - 1; i > 0; i--) {
    let row = "";

    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}
// console.log(StarSeq5(num2223));
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *

//! ===============================
//  12345
//  1234
//  123
//  12
//  1
//! ===============================

const numSec21 = 5;

function PrintNum(num) {
  // Outer loop to handle the number of lines
  for (let i = num; i >= 1; i--) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += j;
    }
    console.log(result);
  }
}

// PrintNum(numSec21);
// 12345
// 1234
// 123
// 12
// 1

//! ===============================
// 55555
// 4444
// 333
// 22
// 1
//! ===============================

const numSec22 = 5;

function PrintNum2(num) {
  // Outer loop to handle the number of lines
  for (let i = num; i >= 1; i--) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += i;
    }
    console.log(result);
  }
}

// PrintNum2(numSec22);
// 55555
// 4444
// 333
// 22
// 1

//! ===============================
// *****
//  ****
//   ***
//    **
//     *
//! ===============================

const numSec212 = 5;

function StarSeq3(num) {
  for (let i = num; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= i; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}

// console.log(StarSeq3(numSec212));
// *****
//  ****
//   ***
//    **
//     *

//! ===============================
// *****
// ****
// ***
// **
// *
//! ===============================
const numSec213 = 5;

function StarSeq4(num) {
  for (let i = num; i > 0; i--) {
    let row = "";

    for (let k = 1; k <= i; k++) {
      row = row + "*";
    }
    console.log(row);
  }
}

// console.log(StarSeq4(numSec213));
// *****
// ****
// ***
// **
// *
