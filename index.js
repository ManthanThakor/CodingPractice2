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

const Str29 = "ManthanRocks";

//? ---------
//? Method-2
//? ---------

function Vowels2(Str2) {
  let VowelsCount = 0;
  for (let i = 0; i < Str2.length; i++) {
    let char = Str2[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      VowelsCount++;
    }
  }
  return VowelsCount;
}

// console.log(`Total VowelCount of string is : ${Vowels2(Str29)}`); //Total VowelCount of string is : 3

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

//! ===============================
// Check Palindrome or Not
//! ===============================

const testString = "RaceCar";
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
// take input a character  and determine  its an lowercase alphabet , upper alphabet  or  digit or other character
//! ===============================

// lowercase letter : a to z (ASCII codes 97 to 122)
// uppercase letter : A to Z (ASCII codes 65 to 90)
// Number : 0 to 9 (ASCII codes 48 to 57)

const inputChar = "A";

function determineCharacterType(char) {
  char = char.charCodeAt(0);
  if (char >= 97 && char <= 122) {
    return "Lowercase Alphabet";
  } else if (char >= 65 && char <= 90) {
    return "Uppercase Alphabet";
  } else if (char >= 48 && char <= 57) {
    return "Digit";
  } else {
    return "Other Character";
  }
}
const result1 = determineCharacterType(inputChar);
// console.log(`The character '${inputChar}' is: ${result1}`);

//! ===============================
//  convert a string to upper and lower case without using built-in methods in JavaScript
//! ===============================

const inputStr = "Hello World!";

function toUpperCase(str) {
  let upperStr = "";
  for (let i = 0; i < str.length; i++) {
    let character = str.charCodeAt(i);
    // Convert to uppercase if it's a lowercase letter

    if (character >= 97 && character <= 122) {
      character -= 32; // Convert to uppercase
    }
    upperStr += String.fromCharCode(character);
  }
  return upperStr;
}

function toLowerCase(str) {
  let lowerStr = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    // Convert to lowercase if it's an uppercase letter
    if (charCode >= 65 && charCode <= 90) {
      charCode += 32; // Convert to lowercase
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
    }
    lowerStr += String.fromCharCode(charCode);
  }
  return lowerStr;
}

const upperStr = toUpperCase(inputStr);
const lowerStr = toLowerCase(inputStr);

// console.log("Original:", inputStr); // Original: Hello World!
// console.log("Uppercase:", upperStr); // Uppercase: HELLO WORLD!
// console.log("Lowercase:", lowerStr); // Lowercase: hello world!

//! =========== Method 2 ===================

// function toUpperCase(str) {
//   let upperStr = "";

//   // Loop through each character in the string
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     // Convert lowercase letters to uppercase
//     // Directly map from lowercase to uppercase using ASCII values
//     if (char === "a") upperStr += "A";
//     else if (char === "b") upperStr += "B";
//     else if (char === "c") upperStr += "C";
//     else if (char === "d") upperStr += "D";
//     else if (char === "e") upperStr += "E";
//     else if (char === "f") upperStr += "F";
//     else if (char === "g") upperStr += "G";
//     else if (char === "h") upperStr += "H";
//     else if (char === "i") upperStr += "I";
//     else if (char === "j") upperStr += "J";
//     else if (char === "k") upperStr += "K";
//     else if (char === "l") upperStr += "L";
//     else if (char === "m") upperStr += "M";
//     else if (char === "n") upperStr += "N";
//     else if (char === "o") upperStr += "O";
//     else if (char === "p") upperStr += "P";
//     else if (char === "q") upperStr += "Q";
//     else if (char === "r") upperStr += "R";
//     else if (char === "s") upperStr += "S";
//     else if (char === "t") upperStr += "T";
//     else if (char === "u") upperStr += "U";
//     else if (char === "v") upperStr += "V";
//     else if (char === "w") upperStr += "W";
//     else if (char === "x") upperStr += "X";
//     else if (char === "y") upperStr += "Y";
//     else if (char === "z") upperStr += "Z";
//     else upperStr += char; // Non-lowercase letters are added as is
//   }

//   return upperStr;
// }

//! ===============================
// Counting Vowels and Consonants
//! ===============================

function countVowelsAndConsonants(str) {
  let vowelsCount = 0;
  let consonant = 0;
}

console.log(countVowelsAndConsonants("Hello World")); // Output: { vowelsCount: 3, consonantsCount: 7 }

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
// Add two number without multiplication symbol
//! ===============================

const nu1 = 5;
const nu2 = 4;

function multi(a, b) {
  let result = 0;
  for (let i = 1; i <= b; i++) {
    result = result + a;
  }
  return result;
}
// console.log(`multiply num= ${nu1} * ${nu2} = ${multi(nu1, nu2)}`); // multiply num= 5 * 4 = 20

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
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false; // this is the flag for exit loop
    for (let j = 0; j < withoutDuplicate.length; j++) {
      if (arr[i] == withoutDuplicate[j]) {
        isDuplicate = true;
      }
    }
    if (!isDuplicate) {
      // withoutDuplicate.push(arr[i]);
      // or
      withoutDuplicate[index] = arr[i];
      index++;
    }
  }
  return withoutDuplicate;
}

// console.log("Array without duplicates: ", removeDuplicate(arr21));

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
