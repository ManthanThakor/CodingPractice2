
function factorialOfOddNumbers(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    if (i % 2 != 0) {
      console.log((result = result * i));
    } else {
      result = result * i;
    }
  }
  return result;
}
factorialOfOddNumbers(5);