
const number = 12345;

function reverseNumber(number) {
  let reverse = 0;
  while (parseInt(number) !== 0) {
    let remainder = number % 10;
    reverse = reverse * 10 + remainder;
    number = parseInt(number / 10);
  }
  return reverse;
}
console.log(reverseNumber(number)); // Outputs: 54321