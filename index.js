// //! ===============================
// // leap year or not
// //! ===============================

// function leapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return year + " is a leap year";
//   } else {
//     return year + " is not a leap year";
//   }
// }

// // console.log(leapYear(2000)); // "2000 is a leap year"
// // console.log(leapYear(1900)); // "1900 is not a leap year"

// //! ===============================
// // a,b,c  no of this three greater than
// //! ===============================

// const numA = 10;
// const numB = 20;
// const numC = 5;

// function GreaterNum(a, b, c) {
//   if (a >= b && a >= c) {
//     console.log(` ${a} is the Greatest number`);
//   } else if (b >= c) {
//     console.log(` ${b} is the Greatest number`);
//   } else {
//     console.log(` ${c} is the Greatest number`);
//   }
// }
// // console.log(GreaterNum(numA, numB, numC)); // 20 is the Greatest number

// //! ===============================
// // find temp in c pass in f and then check given temp is cold normal or hot
// //! ===============================

// const temperature = 30;
// const temperature2 = 60;
// const temperature3 = 80;

// function temp(fahrenheit) {
//   const celsius = (fahrenheit - 32) * (5 / 9);
//   if (celsius < 15) {
//     console.log(`${celsius.toFixed(2)}°C - Cold`);
//   } else if (celsius >= 15 && celsius <= 25) {
//     console.log(`${celsius.toFixed(2)}°C - normal`);
//   } else {
//     console.log(`${celsius.toFixed(2)}°C - hot`);
//   }
// }
// // temp(temperature); //-1.11°C - Cold
// // temp(temperature2); //15.56°C - normal
// // temp(temperature3); //26.67°C - hot

// //! ===============================
// // Table of any Number
// //! ===============================

// const tableNum = 10;

// function multiply(num, range = 10) {
//   console.log(`Table of Number ${num} :`);
//   for (let i = 1; i <= range; i++) {
//     const result = num * i;
//     console.log(`${num} * ${i} = ${result}`);
//   }
// }
// // console.log(multiply(tableNum));
// // Table of Number 10 :
// // 10 * 1 = 10
// // 10 * 2 = 20
// // 10 * 3 = 30
// // 10 * 4 = 40
// // 10 * 5 = 50
// // 10 * 6 = 60
// // 10 * 7 = 70
// // 10 * 8 = 80
// // 10 * 9 = 90
// // 10 * 10 = 100

// //! ===============================
// // Prime Number OR NOT
// //! ===============================

// const primeNum = 17;
// function prime(num) {
//   if (num <= 1) {
//     return false;
//   }

//   for (let i = 2; i <= num / 2; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// if (prime(primeNum)) {
//   // console.log(`${primeNum} is a prime number.`);
// } else {
//   // console.log(`${primeNum} is not a prime number.`);
// }
// //17 is a prime number.

// //! ===============================
// // factorial
// //! ===============================

// const factNum = 5;

// function fact(numb) {
//   if (numb === 0 || numb === 1) {
//     return 1;
//   }
//   return numb * fact(numb - 1);
// }
// // console.log(fact(factNum)); // 120

// function factorialSeries(n) {
//   if (n < 0) {
//     console.log("Factorial is not defined for negative numbers.");
//     return;
//   }

//   let result = 1; // Initialize the factorial result
//   console.log("Factorial Series:");
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//     console.log(`${i}! = ${result}`);
//   }
// }

// // Example: Print factorial series for numbers from 1 to 5
// // factorialSeries(5);

// // ----------------ODD FACTORIAL------------------------

// function factorialSeriesOdd(n) {
//   if (n < 0) {
//     console.log("Factorial is not defined for negative numbers.");
//     return;
//   }

//   let result = 1; // Initialize the factorial result
//   console.log("Factorial Series for Odd Numbers:");
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0) {
//       // Check if the number is odd
//       result *= i;
//       console.log(`${i}! = ${result}`);
//     }
//   }
// }

// // Example: Print factorial series for odd numbers from 1 to 5
// factorialSeriesOdd(5);

// /*
// Output:
// Factorial Series for Odd Numbers:
// 1! = 1
// 3! = 3
// 5! = 15
// */

// //! ===============================
// // Even or odd
// //! ===============================

// const numbb1 = 19;

// function oddEven(num) {
//   if (num % 2 === 0) {
//     console.log(`The given Number ${num} is even number`);
//   } else {
//     console.log(`The given Number ${num} is odd number`);
//   }
// }
// // console.log(oddEven(numbb1)); //The given Number 19 is odd number

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

// //! ===============================
// // Reverse the Number
// //! ===============================

// const number = 12345;

// function reverseNumber(number) {
//   let reverse = 0;
//   while (parseInt(number) !== 0) {
//     let remainder = number % 10;
//     reverse = reverse * 10 + remainder;
//     number = parseInt(number / 10);
//   }
//   return reverse;
// }
// console.log(reverseNumber(number)); // Outputs: 54321

// //! ===============================
// // Armstrong  Number
// //! ===============================

// const num13 = 153;
// function ArmstrongNum(num) {
//   let sum = 0;
//   temp = num;

//   while (temp > 0) {
//     let remainder = temp % 10;
//     sum = sum + remainder * remainder * remainder;
//     temp = parseInt(temp / 10);
//   }
//   if (sum === num) {
//     console.log("It is an Armstrong Number");
//   } else {
//     console.log("It is not an  Armstrong Number");
//   }
// }
// // console.log(ArmstrongNum(num13)); // It is an Armstrong Number

// //! ===============================
// // Fibonacci Sequence
// //! ===============================

// function Fibonacci(num) {
//   if (num === 0) {
//     return 0;
//   }
//   if (num === 1) {
//     return 1;
//   }
//   return Fibonacci(num - 1) + Fibonacci(num - 2);
// }
// //! If We Want direct output At 10
// const numFor = 10;
// // console.log(Fibonacci(10));
// // Outputs: 55

// //! If We Want Sequence
// for (let i = 0; i <= numFor; i++) {
//   // console.log(Fibonacci(i));
// }
// // 0
// // 1
// // 1
// // 2
// // 3
// // 5
// // 8
// // 13
// // 21
// // 34
// // 55

// //! ===============================
// // Add two number without multiplication symbol
// //! ===============================

// const nu1 = 5;
// const nu2 = 4;

// function multi(a, b) {
//   let result = 0;
//   for (let i = 1; i <= b; i++) {
//     result = result + a;
//   }
//   return result;
// }
// // console.log(`multiply num= ${nu1} * ${nu2} = ${multi(nu1, nu2)}`); // multiply num= 5 * 4 = 20

// //! ===============================
// // power calculations in JavaScript without using built-in methods
// //! ==============================

// //! =========== Method -1 ===================

// function power(base, exponent) {
//   let result = 1;
//   for (let i = 0; i < exponent; i++) {
//     result *= base;
//   }
//   return result;
// }

// // console.log(power(2, 3)); // Output: 8 (2^3)
// // console.log(power(5, 0)); // Output: 1 (5^0)

// //! =========== Method -2  ===================

// function power(base, exponent) {
//   if (exponent === 0) {
//     return 1;
//   }
//   return base * power(base, exponent - 1); // Recursive case
// }

// // console.log(power(2, 3)); // Output: 8 (2^3)
// // console.log(power(5, 0)); // Output: 1 (5^0)

//! ===============================
// Find Duplicate Number in Array
//! ===============================

let arr = [1, 2, 3, 4, 2, 3, 5, 6, 1];

function findDuplicates(arr) {
  let duplicates = [];
  let index = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        duplicates[index] = arr[i];
        index++;
      }
    }
  }
  return duplicates;
}

// console.log("Duplicate elements are: ", findDuplicates(arr));
// Output: Duplicate elements are: [1, 2, 3]

//! ===============================
// Find Duplicate Character in String
//! ===============================

let strDup = "manthan";

function findDuplicatesStr(str) {
  let duplicates = "";
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        duplicates += str[i];
      }
    }
  }
  return duplicates;
}
// console.log("Duplicate elements in string are: ", findDuplicatesStr(strDup));
// Output: Duplicate elements in string are:  an

//! ===============================
// Remove Duplicate number from array
//! ===============================

let arr21 = [1, 2, 3, 4, 2, 3, 5, 6, 1];
function removeDuplicate(arr) {
  let withoutDuplicate = [];
  // let index = 0;
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false; // this is the flag for exit loop
    for (let j = 0; j < withoutDuplicate.length; j++) {
      if (arr[i] == withoutDuplicate[j]) {
        isDuplicate = true;
      }
    }
    if (!isDuplicate) {
      withoutDuplicate.push(arr[i]);
      // // or
      // withoutDuplicate[index] = arr[i];
      // index++;
    }
  }
  return withoutDuplicate;
}

// console.log("Array without duplicates: ", removeDuplicate(arr21));

//========== method - 2 =============

let arrdupli = [1, 2, 3, 4, 2, 3, 5, 6, 1];

function dupliarr2(arr) {
  let withoutDuplicateArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (!withoutDuplicateArr.includes(arr[i])) {
      withoutDuplicateArr.push(arr[i]);
    }
  }
  return withoutDuplicateArr;
}
// console.log(dupliarr2(arrdupli));
// [ 1, 2, 3, 4, 5, 6 ]

//! ===============================
// Remove Duplicate character from string
//! ===============================

let strRemoveDuplicate = "manthan";
function strRemoveDuplicateFun(str) {
  let withoutDuplicateString = "";
  for (let i = 0; i < str.length; i++) {
    let duplicate = false;
    for (let j = 0; j < withoutDuplicateString.length; j++) {
      if (str[i] == withoutDuplicateString[j]) {
        duplicate = true;
      }
    }
    if (!duplicate) {
      withoutDuplicateString += str[i];
    }
  }
  return withoutDuplicateString;
}

// console.log(
//   "Array without duplicates: ",
//   strRemoveDuplicateFun(strRemoveDuplicate)
// );

// output:  Array without duplicates: manth

//! ===============================
// sort array with bubble sort
//! ===============================

const sortArr = [10, 2, 23, 13, 42, 11, 45, 22, 12];
function bubble(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // using destructuring
      }
    }
  }
  return arr;
}
// console.log(bubble(sortArr));
// [2, 10, 11, 12, 13, 22, 23, 42, 45]

//! ===============================
// reverse the arr
//! ===============================

const arr32 = [1, 2, 3, 4, 5];

function revArr(arr) {
  let arr2 = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    arr2.push(arr[i]);
  }
  return arr2;
}
// console.log(revArr(arr32));
// [ 5, 4, 3, 2, 1 ]

//! ===============================
// remove duplicate from Array and then sort array with bubble sort
//! ===============================

const dupliarr = [
  1, 2, 3, 4, 2, 2, 10, 2, 3, 4, 5, 6, 7, 8, 33, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3,
  3, 3, 3, 2, 90, 2, 2, 2, 2, 2,
];

function removeDup(arr) {
  let pureArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!pureArr.includes(arr[i])) {
      pureArr.push(arr[i]);
    }
  }
  // console.log(`without Duplicate Array : ${pureArr}`);
  // without Duplicate Array [1, 2, 3, 4, 10, 5, 6, 7, 8, 33, 90];

  sorttArr(pureArr);

  return pureArr;
}

function sorttArr(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
// console.log(`without Duplicate + sorted Array ${removeDup(dupliarr)}`);
// without Duplicate + sorted Array 1,2,3,4,5,6,7,8,10,33,90

//! ===============================
// flat the Array
//! ===============================

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
// console.log(flattenArray(nestedArray));
// Output: [1, 2, 3, 4, 5]
