
function factorialOfOddNumbers2(num) {
  let result = 1;
  for (let i = 1; i <= num; i += 2) {
    if (i === 1) {
      result = result * i * 1;
    } else {
      result = result * i * (i - 1);
    }
    console.log(`The factorial of odd number ${i} is: ${result}`);
  }
  return result;
}
factorialOfOddNumbers2(5);
// 1
// 6
// 120