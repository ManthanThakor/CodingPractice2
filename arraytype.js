//! ===============================
// iterate over an array
//! ===============================

let arr123 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr123.length; i++) {
  // console.log(arr123[i]);
}
// 1
// 2
// 3
// 4
// 5

//! ===============================
// iterate over an 2D array
//! ===============================

let Arr2d = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function Arr2D(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result = result + arr[i][j];
    }
    result = result + "\n";
  }
  return result;
}

// console.log(Arr2D(Arr2d));
// 123
// 456
// 789

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

// console.log(arr3D(arr3d));
// 123
// 456
// 789
// 101112

//! ===============================
// addition of array
//! =============================

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

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

// console.log(addArrays(arr1, arr2)); // Output: [5, 7, 9]

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

// console.log(add2DArrays(arr11, arr22));
// Output:
// [
//   [8, 10, 12],
//   [14, 16, 18]
// ]

//! ===============================
// addition of 3d array
//! =============================

let arr111 = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

let arr222 = [
  [
    [1, 1, 1],
    [2, 2, 2],
  ],
  [
    [3, 3, 3],
    [4, 4, 4],
  ],
];
//! ============= way -1 ================

// function add3DArrays(arr1, arr2) {
//   if (arr1.length !== arr2.length)
//     return "Arrays must have the same dimensions";

//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     let twoDResult = [];
//     for (let j = 0; j < arr1[i].length; j++) {
//       let oneDResult = [];
//       for (let k = 0; k < arr1[i][j].length; k++) {
//         oneDResult.push(arr1[i][j][k] + arr2[i][j][k]);
//       }
//       twoDResult.push(oneDResult);
//     }
//     result.push(twoDResult);
//   }

//   return result;
// }

//! ============= way -2 ================

// function add3DArrays(arr1, arr2) {
//   if (arr1.length !== arr2.length)
//     return "Arrays must have the same dimensions";

//   let result = [];

//   for (let i = 0; i < arr1.length; i++) {
//     result[i] = []; // Initialize the current 2D array
//     for (let j = 0; j < arr1[i].length; j++) {
//       result[i][j] = [];
//       for (let k = 0; k < arr1[i][j].length; k++) {
//         result[i][j][k] = arr1[i][j][k] + arr2[i][j][k]; // Directly add values
//       }
//     }
//   }

//   return result;
// }

// console.log(add3DArrays(arr111, arr222));
// Output:
// [
//   [
//     [2, 3, 4],
//     [6, 7, 8]
//   ],
//   [
//     [10, 11, 12],
//     [14, 15, 16]
//   ]
// ]

//! ============= way -3 ================

function add3DArrays(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return "Arrays must have the same dimensions";

  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      for (let k = 0; k < arr1[i][j].length; k++) {
        result += arr1[i][j][k] + arr2[i][j][k] + " ";
      }
      result += "\n";
    }
    result += "\n";
  }

  return result;
}

console.log(add3DArrays(arr111, arr222));
// 2 3 4
// 6 7 8

// 10 11 12
// 14 15 16

//! ===============================
// multiplyMatrices
//! =============================

function multiplyMatrices(A, B) {
  // Get the dimensions of the matrices
  const m = A.length; // Rows in A
  const n = A[0].length; // Columns in A
  const p = B[0].length; // Columns in B

  // Check if multiplication is possible
  if (n !== B.length) {
    throw new Error("Number of columns in A must equal number of rows in B.");
  }

  const result = [];

  // Perform matrix multiplication
  for (let i = 0; i < m; i++) {
    result[i] = [];
    for (let j = 0; j < p; j++) {
      result[i][j] = 0;
      for (let k = 0; k < n; k++) {
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return result;
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

const result = multiplyMatrices(A, B);
// console.log(result);
// Output: [
//   [58, 64],
//   [139, 154]
// ]
