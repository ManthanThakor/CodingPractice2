// ---------------------------------------------------
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// ---------------------------------------------------

const num1 = 5;
function pattern1(num) {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + j;
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}
console.log(pattern1(num1));
// 1
// 12
// 123
// 1234
// 12345

// ---------------------------------------------------
// ---------------------------------------------------

// ---------------------------------------------------
// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
// 12345678
// 123456789
// 12345678910
// ---------------------------------------------------

const num2 = 10;
function pattern2(num) {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + j;
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}

// console.log(pattern2(num2));
// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
// 12345678
// 123456789
// 12345678910

// ===================================================
// ===================================================

// ---------------------------------------------------
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// ---------------------------------------------------

const num3 = 4;
function pattern3(num) {
  let pattern = "";
  let number = 1;
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + number;
      number++;
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}
console.log(pattern3(num3));
// 1
// 23
// 456
// 78910

// ===================================================
// ===================================================

// ---------------------------------------------------
//    1
//   232
//  34543
// 4567654
// ---------------------------------------------------

function numberPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let str = "";

    // Print spaces
    for (let j = 1; j <= rows - i; j++) {
      str += " ";
    }

    // Print increasing numbers
    for (let j = i; j <= 2 * i - 1; j++) {
      str += j;
    }

    // Print decreasing numbers
    for (let j = 2 * i - 2; j >= i; j--) {
      str += j;
    }

    console.log(str);
  }
}

numberPattern(4);
//    1
//   232
//  34543
// 4567654

// ===================================================
// ===================================================

// ---------------------------------------------------
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// ---------------------------------------------------

const num4 = 5;
function pattern4(num) {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + i;
    }
    pattern += row + "\n";
  }
  return pattern;
}
// console.log(pattern4(num4));
// 1
// 22
// 333
// 4444
// 55555

// ===================================================
// ===================================================

// ---------------------------------------------------
// 12345
// 1234
// 123
// 12
// 1
// ---------------------------------------------------

const num5 = 5;
function pattern5(num) {
  let pattern = "";
  for (let i = num; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + j;
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}
// console.log(pattern5(num5));
// 12345
// 1234
// 123
// 12
// 1

// ===================================================
// ===================================================

// ---------------------------------------------------
//     1
//    123
//   12345
//  1234567
// 123456789
// ---------------------------------------------------

const num6 = 5;
function pattern6(num) {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row = row + k;
    }
    pattern += row + "\n";
  }
  return pattern;
}
console.log(pattern6(num6));
//     1
//    123
//   12345
//  1234567
// 123456789

// ===================================================
// ===================================================

//     1
//    212
//   32123
//  4321234
// 543212345

const num111 = 5;

function generatePattern111(num) {
  let pattern = "";

  for (let i = 1; i <= num; i++) {
    let row = "";

    // Add leading spaces
    for (let j = 1; j <= num - i; j++) {
      row += " ";
    }

    // Add decreasing numbers
    for (let k = i; k >= 1; k--) {
      row += k;
    }

    // Add increasing numbers
    for (let k = 2; k <= i; k++) {
      row += k;
    }

    // Append the row to the pattern
    pattern += row + "\n";
  }

  return pattern;
}

// console.log(generatePattern111(num111));
//     1
//    212
//   32123
//  4321234
// 543212345

// ===================================================
// ===================================================

// ---------------------------------------------------
//   1
//  121
// 12321
// ---------------------------------------------------

const num121 = 3;

function generatePattern121(num) {
  let pattern = "";

  for (let i = 1; i <= num; i++) {
    let row = "";

    // Add leading spaces
    for (let j = 1; j <= num - i; j++) {
      row += " ";
    }

    // Add increasing numbers
    for (let k = 1; k <= i; k++) {
      row += k;
    }

    // Add decreasing numbers
    for (let k = i - 1; k >= 1; k--) {
      row += k;
    }

    // Append the row to the pattern
    pattern += row + "\n";
  }

  return pattern;
}

console.log(generatePattern121(num121));
//   1
//  121
// 12321

// ===================================================
// ===================================================

// ---------------------------------------------------
//   1
//  234
// 56789
// ---------------------------------------------------

const num7 = 3;
function pattern7(num) {
  let pattern = "";

  let num1 = 1;
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row = row + num1;
      num1++;
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}
// console.log(pattern7(num7));
//   1
//  234
// 56789

// ===================================================
// ===================================================

// ---------------------------------------------------
// 1
// 24
// 357
// 681012
// ---------------------------------------------------

const num998 = 4;
function pattern998(num) {
  let pattern = "";
  let oddNum = 1;
  let evenNum = 2;
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if (i % 2 === 0) {
        row = row + evenNum;
        evenNum += 2;
      } else {
        row = row + oddNum;
        oddNum += 2;
      }
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}
// console.log(pattern998(num998));
// 1
// 24
// 357
// 681012

// ===================================================
// ===================================================

// ---------------------------------------------------
//    1
//   24
//  357
// 681012
// ---------------------------------------------------

const num999 = 4;
function pattern999(num) {
  let pattern = "";
  let oddNum = 1;
  let evenNum = 2;
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let k = 1; k <= num - i; k++) {
      row = row + " ";
    }
    for (let j = 1; j <= i; j++) {
      if (i % 2 === 0) {
        row = row + evenNum;
        evenNum += 2;
      } else {
        row = row + oddNum;
        oddNum += 2;
      }
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}
// console.log(pattern999(num999));
//    1
//   24
//  357
// 681012

// ---------------------------------------------------
// 54321
// 5432
// 543
// 54
// 5
// ---------------------------------------------------

const num13 = 5;

function pattern13(num) {
  let pattern = "";
  for (let i = num; i > 0; i--) {
    let row = "";
    for (let j = num; j > num - i; j--) {
      row += j;
    }
    pattern += row + "\n";
  }

  return pattern;
}

console.log(pattern13(num13));
// 54321
// 5432
// 543
// 54
// 5

// ===================================================
// ===================================================

// ---------------------------------------------------
// 54321
//  4321
//   321
//    21
//     1
// ---------------------------------------------------

const num14 = 5;

function pattern14(num) {
  let pattern = "";
  for (let i = num; i > 0; i--) {
    let row = "";
    for (let k = 1; k <= num - i; k++) {
      row = row + " ";
    }
    for (let j = i; j > 0; j--) {
      row = row + j;
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}

// console.log(pattern14(num14));
// 54321
//  4321
//   321
//    21
//     1

// ===================================================
// ===================================================

// ---------------------------------------------------
// 5
// 54
// 543
// 5432
// 54321
// ---------------------------------------------------

const num15 = 5;

function pattern15(num) {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = num; j > num - i; j--) {
      row = row + j;
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}
// console.log(pattern15(num15));
// 5
// 54
// 543
// 5432
// 54321

// ===================================================
// ===================================================

// ---------------------------------------------------
//     1
//    12
//   123
//  1234
// 12345
// ---------------------------------------------------

const num16 = 5;

function pattern16(num) {
  let pattern = "";

  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= i; k++) {
      row = row + k;
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}
// console.log(pattern16(num16));
//     1
//    12
//   123
//  1234
// 12345

// ===================================================
// ===================================================

// ---------------------------------------------------
// 11111
// 1   1
// 1   1
// 11111
// ---------------------------------------------------

let num1111 = 4;
let num2222 = 5;

function square(num1, num2) {
  let pattern = "";
  for (let i = 1; i <= num1; i++) {
    let row = "";
    for (let j = 1; j <= num2; j++) {
      if (i == 1 || i == num1 || j == 1 || j == num2) {
        row = row + "1";
      } else {
        row = row + " ";
      }
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}

// console.log(square(num1111, num2222));
// 11111
// 1   1
// 1   1
// 11111

// ===================================================
// ===================================================

// ---------------------------------------------------
// *****
// *****
// *****
// *****
// *****
// ---------------------------------------------------

const num8 = 5;
function pattern8(num) {
  for (let i = 1; i <= num; i++) {
    row = "";
    for (let j = 1; j <= num; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}
pattern8(num8);
// *****
// *****
// *****
// *****
// *****

// ===================================================
// ===================================================

// ---------------------------------------------------
// *****
// *   *
// *   *
// *   *
// *****
// ---------------------------------------------------

const num9 = 5;

function pattern9(num2) {
  let pattern = "";
  for (let i = 1; i <= num2; i++) {
    let row = "";
    for (let j = 1; j <= num2; j++) {
      if (i == 1 || i == num2 || j == 1 || j == num2) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}
console.log(pattern9(num9));
// *****
// *   *
// *   *
// *   *
// *****

// ===================================================
// ===================================================

// ---------------------------------------------------
//     *
//    **
//   ***
//  ****
// *****
// ---------------------------------------------------

const num10 = 5;

function pattern10(num) {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= i; k++) {
      row = row + "*";
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}
// console.log(pattern10(num10));
//     *
//    **
//   ***
//  ****
// *****

// ===================================================
// ===================================================

// ---------------------------------------------------
// *
// **
// ***
// ****
// *****
// ---------------------------------------------------
const num11 = 5;

function pattern11(num) {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    row = "";
    for (let j = 1; j <= i; j++) {
      row = row + "*";
    }
    pattern += row + "\n";
  }
  return pattern;
}
// console.log(pattern11(num11));
// *
// **
// ***
// ****
// *****

// ===================================================
// ===================================================

// ---------------------------------------------------
//     *
//    ***
//   *****
//  *******
// *********
// ---------------------------------------------------

const num12 = 5;

function pattern12(num) {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row = row + "*";
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}
// console.log(pattern12(num12));
//     *
//    ***
//   *****
//  *******
// *********
// ===================================================
// ===================================================

// ---------------------------------------------------
// *
// **
// * *
// *  *
// *   *
// ******
// ---------------------------------------------------

const num20 = 6;

function pattern20(num) {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      if (j == 1 || j == i || i == num) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    pattern += row + "\n";
  }
  return pattern;
}
// console.log(pattern20(num20));
// *
// **
// * *
// *  *
// *   *
// ******

// ===================================================
// ===================================================

// ---------------------------------------------------
// *****
// ****
// ***
// **
// *
// ---------------------------------------------------

const num21 = 5;

function pattern21(num) {
  let pattern = "";
  for (let i = num; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + "*";
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}
// console.log(pattern21(num21));
// *****
// ****
// ***
// **
// *

// ===================================================
// ===================================================

// ---------------------------------------------------
// *****
//  ****
//   ***
//    **
//     *
// ---------------------------------------------------

const num23 = 5;

function pattern23(num) {
  let pattern = "";
  for (let i = num; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= i; k++) {
      row = row + "*";
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}
// console.log(pattern23(num23));
// *****
//  ****
//   ***
//    **
//     *

// ===================================================
// ===================================================

// ---------------------------------------------------
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *
// ---------------------------------------------------

const num24 = 5;

function pattern24(num) {
  let pattern = "";

  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= i; k++) {
      row = row + "*";
    }
    pattern = pattern + row + "\n";
  }

  for (let i = num - 1; i > 0; i--) {
    let row = "";

    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= i; k++) {
      row = row + "*";
    }
    pattern = pattern + row + "\n";
  }

  return pattern;
}
// console.log(pattern24(num24));
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *

// ===================================================
// ===================================================

// ---------------------------------------------------
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// ---------------------------------------------------

const num25 = 5;

function pattern25(num) {
  let pattern = "";

  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }
    pattern = pattern + row + "\n";
  }

  for (let i = num - 1; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }
    pattern = pattern + row + "\n";
  }

  return pattern;
}
// console.log(pattern25(num25));
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// ===================================================
// ===================================================

// ---------------------------------------------------
//    *
//   * *
//  *   *
// *******
// ---------------------------------------------------

let num = 4;

function patt(num) {
  let patt = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (i === 1 || i === num || k === 1 || k === 2 * i - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    patt += row + "\n";
  }
  return patt;
}

console.log(patt(num));
//    *
//   * *
//  *   *
// *******

// ===================================================
// ===================================================

// ---------------------------------------------------
//    *
//   * *
//  * * *
// * * * *
//  * * *
//   * *
//    *
// ---------------------------------------------------

const num212 = 4;

function pattern212(num) {
  let pattern = "";

  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i; k++) {
      row += "* ";
    }
    pattern = pattern + row + "\n";
  }

  for (let i = num - 1; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i; k++) {
      row += "* ";
    }
    pattern = pattern + row + "\n";
  }

  return pattern;
}
// console.log(pattern212(num212));
//    *
//   * *
//  * * *
// * * * *
//  * * *
//   * *
//    *

// ===================================================
// ===================================================

// ---------------------------------------------------
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
// ---------------------------------------------------

const num26 = 5;

function pattern26(num) {
  let pattern = "";

  for (let i = 1; i <= num; i++) {
    let row = "";

    for (let k = 1; k <= i; k++) {
      row = row + "*";
    }
    pattern = pattern + row + "\n";
  }

  for (let i = num - 1; i > 0; i--) {
    let row = "";

    for (let k = 1; k <= i; k++) {
      row = row + "*";
    }
    pattern = pattern + row + "\n";
  }

  return pattern;
}
// console.log(pattern26(num26));
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// ===================================================
// ===================================================

// ---------------------------------------------------
// A
// AA
// AAA
// AAAA
// AAAAA
// ---------------------------------------------------

const num27 = 5;

function pattern27(num) {
  let pattern = "";

  for (let i = 1; i <= num; i++) {
    let row = "";

    for (let k = 1; k <= i; k++) {
      row = row + "A";
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}
// console.log(pattern27(num27));
// A
// AA
// AAA
// AAAA
// AAAAA

// ===================================================
// ===================================================

// ---------------------------------------------------
// AAAAA
// AAAA
// AAA
// AA
// A
// ---------------------------------------------------

const num28 = 5;

function pattern28(num) {
  let pattern = "";

  for (let i = num; i > 0; i--) {
    let row = "";

    for (let k = 1; k <= i; k++) {
      row = row + "A";
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}
// console.log(pattern28(num28));
// AAAAA
// AAAA
// AAA
// AA
// A
// ===================================================
// ===================================================

// ---------------------------------------------------
// $
// $$
// $$$
// $$$$
// %%%%%
// %%%%
// %%%
// %%
// %
// ---------------------------------------------------

const num29 = 4;

function pattern29(num) {
  let pattern = "";

  for (let i = 1; i <= num; i++) {
    let row = "";

    for (let k = 1; k <= i; k++) {
      row = row + "$";
    }
    pattern = pattern + row + "\n";
  }

  for (let i = num; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "%";
    }
    pattern = pattern + row + "\n";
  }

  return pattern;
}
// console.log(pattern29(num29));
// $
// $$
// $$$
// $$$$
// %%%%
// %%%
// %%
// %

// ===================================================
// ===================================================
//? ===================================================
//? ===================================================
//! ---------------------------------
//! Difficulty  level insane
//! ---------------------------------
//? ===================================================
//? ===================================================
// ===================================================
// ===================================================

// ---------------------------------
//     A
//    A B A
//   A B C B A
//  A B C D C B A
// A B C D E D C B A
// ---------------------------------

let hardNum = 5;

function HardPattern(num) {
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row += " ";
    }

    // increasing part of the pattern
    for (let k = 0; k < i; k++) {
      row += alphabets[k];
    }
    // decreasing part of the pattern
    for (let m = i - 2; m >= 0; m--) {
      row += alphabets[m];
    }
    pattern += row + "\n";
  }
  return pattern;
}
// console.log(HardPattern(hardNum));
//      A
//     ABA
//    ABCBA
//   ABCDCBA
//  ABCDEDCBA

// ===================================================
// ===================================================

// ---------------------------------
// *******
//  *   *
//   * *
//    *
//   * *
//  *   *
// *******
// ---------------------------------

let hardNum2 = 4;

function HardPattern2(num) {
  let pattern = "";
  for (let i = num; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (i == 1 || i == num || k == 1 || k == 2 * i - 1) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }

    pattern += row + "\n";
  }

  for (let i = 2; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (i == 1 || i == num || k == 1 || k == 2 * i - 1) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    pattern += row + "\n";
  }
  return pattern;
}

// console.log(HardPattern2(hardNum2));
// *******
//  *   *
//   * *
//    *
//   * *
//  *   *
// *******

// ===================================================
// ===================================================

// ---------------------------------
//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *
// ---------------------------------

let hardNum3 = 5;

function HardPattern3(num) {
  let pattern = "";

  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k == 1 || k == 2 * i - 1 || i == 1) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    pattern = pattern + row + "\n";
  }

  for (let i = num - 1; i > 0; i--) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k == 1 || k == 2 * i - 1 || i == 1) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    pattern = pattern + row + "\n";
  }
  return pattern;
}

// console.log(HardPattern3(hardNum3));
//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *
// ===================================================
// ===================================================

// *
//     * *
//   * * *
// * * * *

let hardNum4 = 4;

function HardPattern4(num) {
  let pattern = "";

  for (let i = 1; i <= num; i++) {
    let row = "";

    // Add leading spaces
    for (let j = 1; j <= num - i; j++) {
      if (i == 1) {
        row = row + "";
      } else {
        row = row + "  "; // double space  for proper vision //! we can use single space also
      }
    }

    for (let k = 1; k <= i; k++) {
      row += "* "; //  space after star for proper vision
    }

    pattern += row + "\n";
  }

  return pattern;
}

// console.log(HardPattern4(hardNum4));
// *
//     * *
//   * * *
// * * * *

// ===================================================
// ===================================================

// *         *
// ***     ***
// ***** *****
// ***********

let hardNum5 = 4;

function HardPattern5(num) {
  let pattern = "";
  let space = 9; // Start with 9 spaces between the stars

  for (let i = 1; i <= num; i++) {
    let row = "";
    let starCount;

    // Add starting stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }

    // Add spaces between the stars
    for (let m = 1; m <= space; m++) {
      row += " ";
    }

    // for right side * print
    if (i === num) {
      starCount = 4;
    } else {
      starCount = 2 * i - 1;
    }

    // Add right side  stars
    for (let n = 1; n <= starCount; n++) {
      row += "*";
    }

    pattern += row + "\n";
    space -= 4; // Reduce the spaces by 4 for the next row
  }
  return pattern;
}

console.log(HardPattern5(hardNum5));

// *         *
// ***     ***
// ***** *****
// ***********

// ===================================================
// ===================================================

// *********************
//  *   *  *   *  *   *
//   * *    * *    * *
//    *      *      *
//   * *    * *    * *
//  *   *  *   *  *   *
// *********************
let hardNum6 = 4;

function HardPattern6(num) {
  let pattern = "";
  for (let i = num; i > 0; i--) {
    let row = "";
    // =========== For left main  side upper part : number 1 =============

    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (i == 1 || i == num || k == 1 || k == 2 * i - 1) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    // =========== For right side upper part : number 2 =============
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (i == 1 || i == num || k == 1 || k == 2 * i - 1) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    // =========== For right side upper part : number 3 =============
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (i == 1 || i == num || k == 1 || k == 2 * i - 1) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    pattern += row + "\n";
  }
  // ====================================
  // =========== bottom part ============
  // ====================================

  for (let i = 2; i <= num; i++) {
    let row = "";

    // =========== For left main side bottom part : number 1 =============

    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (i == 1 || i == num || k == 1 || k == 2 * i - 1) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    // =========== For right   side bottom part : number 2 =============
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (i == 1 || i == num || k == 1 || k == 2 * i - 1) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    // =========== For right   side bottom part : number 3 =============
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let j = 1; j <= num - i; j++) {
      row = row + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (i == 1 || i == num || k == 1 || k == 2 * i - 1) {
        row = row + "*";
      } else {
        row = row + " ";
      }
    }
    pattern += row + "\n";
  }

  return pattern;
}

console.log(HardPattern6(hardNum6));
// *********************
//  *   *  *   *  *   *
//   * *    * *    * *
//    *      *      *
//   * *    * *    * *
//  *   *  *   *  *   *
// *********************

// ===================================================
// ===================================================

// **********
// ****  ****
// ***    ***
// **      **
// *        *
// **      **
// ***    ***
// ****  ****
// **********

function printPattern(rows) {
  let pattern = "";

  // Upper part of the pattern
  for (let i = rows; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    for (let j = 1; j <= 2 * (rows - i); j++) {
      pattern += " ";
    }
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  // Lower part of the pattern
  for (let i = 1; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
      pattern += "*";
    }
    for (let j = (rows - i - 1) * 2; j > 0; j--) {
      pattern += " ";
    }
    for (let j = 0; j <= i; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  console.log(pattern);
}

// Call the function with the number of rows for the upper part of the diamond
printPattern(5);
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// **      **
// ***    ***
// ****  ****
// **********
