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
// 0, 4, 18, 48, 100, 180, 294, 448, 648
//! ===============================

let num = 10;

let seq = [];

for (let i = 1; i < num; i++) {
  let cal = i ** 3 - i ** 2;
  seq.push(cal);
}

// console.log(seq);
// [0, 4, 18, 48, 100, 180, 294, 448, 648];

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
