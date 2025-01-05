
function factorial2(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    console.log((result = result * i + " "));
  }
}
const factNum2 = 5;
factorial2(factNum2);