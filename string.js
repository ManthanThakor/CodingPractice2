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
// take input a character  and determine  its an lowercase alphabet , upper alphabet  or  digit or other character
//! ===============================

// lowercase letter : a to z (ASCII codes 97 to 122)
// uppercase letter : A to Z (ASCII codes 65 to 90)
// Number : 0 to 9 (ASCII codes 48 to 57)

const inputChar = "A";

function determineCharacterType(char) {
  let character = char.charCodeAt(0);
  if (character >= 97 && character <= 122) {
    return "Lowercase Alphabet";
  } else if (character >= 65 && character <= 90) {
    return "Uppercase Alphabet";
  } else if (character >= 48 && character <= 57) {
    return "Digit";
  } else {
    return "Other Character";
  }
}
const result1 = determineCharacterType(inputChar);
// console.log(`The character '${inputChar}' is: ${result1}`);
// The character 'A' is: Uppercase Alphabet

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
// check the character is Counting Vowels or Consonants
//! ===============================

let ch = "U";

if (
  ch === "a" ||
  ch === "A" ||
  ch === "e" ||
  ch === "E" ||
  ch === "i" ||
  ch === "I" ||
  ch === "o" ||
  ch === "O" ||
  ch === "u" ||
  ch === "U"
) {
  // console.log(`The character ${ch} is a vowel.`);
} else {
  // console.log(`The character ${ch} is a consonant.`);
}

//! ===============================
// Counting Vowels and Consonants
//! ===============================

let strVowel = "Hello World";
function countVowelsAndConsonants(str) {
  let vowelsCount = 0;
  let consonantCount = 0;
  const vowel = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charCode = char.charCodeAt(0); // Get the ASCII code

    // lowercase letter : a to z (ASCII codes 97 to 122)
    // uppercase letter : A to Z (ASCII codes 65 to 90)
    if (
      (charCode >= 97 && charCode <= 122) ||
      (charCode >= 65 && charCode <= 90)
    ) {
      if (vowel.includes(char)) {
        vowelsCount++;
      } else {
        consonantCount++;
      }
    }
  }
  return { vowelsCount, consonantCount };
}

// console.log(countVowelsAndConsonants(strVowel)); // Output: { vowelsCount: 3, consonantsCount: 7 }

//! ===============================
// Counting Vowels and Consonants and give the which character are vowel and consonants
//! ===============================

let strVowel3 = "Hello World";

function countVowelsAndConsonants3(str) {
  let vowelsCount = 0;
  let consonantCount = 0;
  const vowel = "aeiouAEIOU";
  const vowels = []; // Array to store vowel characters
  const consonants = []; // Array to store consonant characters

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charCode = char.charCodeAt(0); // Get the ASCII code

    // Check if the character is a letter
    if (
      (charCode >= 97 && charCode <= 122) || // lowercase letters
      (charCode >= 65 && charCode <= 90) // uppercase letters
    ) {
      if (vowel.includes(char)) {
        vowelsCount++;
        vowels.push(char); // Add to vowels array
      } else {
        consonantCount++;
        consonants.push(char); // Add to consonants array
      }
    }
  }

  return { vowelsCount, consonantCount, vowels, consonants };
}

// Example usage
const result3 = countVowelsAndConsonants3(strVowel3);
// console.log(`Vowels Count: ${result3.vowelsCount}`); // Output: Vowels Count: 3
// console.log(`Consonants Count: ${result3.consonantCount}`); // Output: Consonants Count: 7
// console.log(`Vowels: ${result3.vowels}`); // Output: Vowels: e, o, o
// console.log(`Consonants: ${result3.consonants}`); // Output: Consonants: H, l, l, W, r, l, d

//! ===============================
// String Compression :
// finding duplicates works by comparing each character with all subsequent characters in the string.
//! ===============================

let compressStr = "aaabbbbcccaaa";

function compressString(str) {
  let count = 1;
  let compressed = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      count++;
    } else {
      // Append the character
      compressed += str[i];
      // Append the count only if it's greater than 1
      if (count > 1) {
        compressed += " " + count + " ";
      }
      count = 1; // Reset count
    }
  }
  return compressed;
}

// console.log(compressString(compressStr));
// a 3 b 4 c 3 a 3

//! ===============================
// Substrings of a String
//! ===============================

function generateSubstrings(str) {
  let substrings = [];
  for (let i = 0; i < str.length; i++) {
    let temp = "";
    for (let j = i; j < str.length; j++) {
      temp += str[j];
      substrings.push(temp);
    }
  }
  return substrings;
}

// Input
// console.log(generateSubstrings("abc"));
// Output: ["a", "ab", "abc", "b", "bc", "c"]

//! ===============================
// take two string and check the one string is a substring of another string
//! ===============================

//! ============== method 1 =================

const string11 = "Hello, world!";
const string22 = "world";
function isSubstring1(str1, str2) {
  if (str1.includes(str2)) {
    return true;
  } else {
    return false;
  }
}
// console.log(isSubstring1(string11, string22));
// true

//! ============== method 2 =================

function isSubstring(str1, str2) {
  if (str2.length > str1.length) return false;

  for (let i = 0; i < str1.length - str2.length; i++) {
    let matchFound = true;

    for (let j = 0; j < str2.length; j++) {
      if (str1[i + j] !== str2[j]) {
        matchFound = false;
        break;
      }
    }

    if (matchFound) {
      return true;
    }
  }
  return false;
}

// Example usage:
const string1 = "Hello, world!";
const string2 = "world";
// console.log(isSubstring(string1, string2)); // Output: true

//! ===============================
// swapCase in  string
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
// console.log(swapCase("Hello World!")); // Output: "hELLO wORLD!"

//! ===============================
// characterFrequencyCount
//! ===============================

function characterFrequencyCount(str) {
  const frequency = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (frequency[char]) {
      frequency[char] += 1;
    } else {
      frequency[char] = 1;
    }
  }

  return frequency;
}

// Example usage
const inputString = "hello world";
const result = characterFrequencyCount(inputString);
// console.log(result);
// { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

//! ===============================
// find largest character from string and its length also
//! ===============================

let strLargest = "the dog is the danger then the cat";

function strLargest(str) {
  let largestWord = "";
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > largestWord.length) {
      largestWord = arr[i];
    }
  }
  const lengthOfLargestWord = largestWord.length;
  return { largestWord, lengthOfLargestWord };
}

// console.log(strLargest(strLargest));
// { largestWord: 'danger', lengthOfLargestWord: 6 }

//! ===============================
//  compare two string
//! ===============================

// ======== Method 1 =========

const compstring = "Hello";
const compstring2 = "Hello";

if (compstring === compstring2) {
  // console.log("The strings are equal.");
} else {
  // console.log("The strings are not equal.");
}
// ======== Method 2 =========

if (compstring.includes(compstring2)) {
  // console.log(`The string "${compstring}" contains "${compstring2}".`);
} else {
  // console.log(`The string "${compstring}" does not contain "${compstring2}".`);
}

// ======== Method 3 =========

if (compstring.length === compstring2.length) {
  // console.log("The strings have the same length.");
} else {
  // console.log("The strings do not have the same length.");
}

//! ===============================
// slice and concatenate strings without using methods
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
