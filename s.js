// function printAlternatingSeries(n) {
//   let series = ""; // Initialize the series string

//   let sign = 1; // Start with a positive sign (1)

//   for (let i = 1; i <= n; i++) {
//     series += sign * i; // Multiply by sign to alternate the result

//     sign = -sign; // Alternate the sign: 1 to -1, -1 to 1
//   }

//   console.log(series); // Print the final series
// }

// // Call the function with the desired value of n
// let n = 7;
// printAlternatingSeries(n);

// // Function to calculate sin(x) using Taylor series expansion
// function sinTaylorSeries(x, terms = 10) {
//   let result = 0;
//   let sign = 1; // Alternates between positive and negative terms
//   let power = x; // Starts from x^1
//   let factorial = 1; // Starts from 1! for the first term
//   let temp = 1; // Used to increment factorial for each term

//   for (let i = 1; i <= terms; i++) {
//     // Add the current term to the result
//     result += (sign * power) / factorial;

//     // Prepare for next term
//     power *= x * x; // Update power (x^3, x^5, x^7, ...)

//     temp += 2;
//     factorial *= temp * (temp - 1);

//     sign *= -1; // Alternate the sign for the next term
//   }

//   return result;
// }

// // Example usage
// const x = Math.PI / 4; // 45 degrees in radians
// const terms = 10; // Number of terms in the Taylor series
// console.log(`sin(${x}) ≈ ${sinTaylorSeries(x, terms)}`);


// #include <stdio.h>

// int main() {
//     int a =12, b=23, c=32;

//     if (a >= b) {
//         if (a >= c) {
//             printf("%d\n", a);
//         } else {
//             printf("%d\n", c);
//         }
//     } else {
//         if (b >= c) {
//             printf("%d\n", b);
//         } else {
//             printf("%d\n", c);
//         }
//     }

//     return 0;
// }

// #include <stdio.h>

// int main() {
//     int a = 10, b = 20, c = 30;

//     if (a >= b) {
//         printf("%d\n", a);
//     }else if (a >= c){
//         printf("%d\n", a);
//     }else if (b >= c) {
//         printf("%d\n", b);
//     } else {
//         printf("%d\n", c);
//     }

//     return 0;
// }

// #include <stdio.h>

// int main() {
//     int a = 12, b = 23, c = 32;
//     if (a >= b) {
//         if (a >= c) {
//             printf("%d\n", a);
//         } else {
//             printf("%d\n", c);
//         }
//     } else if (b >= c) {
//         printf("%d\n", b);
//     } else {
//         printf("%d\n", c);
//     }

//     return 0;
// }

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false; 
//     }
//   }
//   return true; 
// }

// function printPrimesInRange(start, end) {
//   for (let num = start; num <= end; num++) {
//     if (isPrime(num)) {
//       console.log(num);
//     }
//   }
// }
// printPrimesInRange(1, 10);

// #include <stdio.h>

// int main() {
//     int marks;
//     marks = 60;
//     char grade;
//     if (marks > 90) {
//         grade = 'A';
//     } else if (marks > 70) {
//         grade = 'B';
//     } else if (marks > 50) {
//         grade = 'c';
//     } else {
//         grade = 'D'; 
// }
//     printf("Marks: %d, Grade: %c\n", marks, grade);
//     return 0;
// }