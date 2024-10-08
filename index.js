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


//! ===============================
// leap year or not
//! ===============================
//! ===============================
// leap year or not
//! ===============================
//! ===============================
// leap year or not
//! ===============================
//! ===============================
// leap year or not
//! ===============================
//! ===============================
// leap year or not
//! ===============================
