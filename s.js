function printAlternatingSeries(n) {
  let series = ""; // Initialize the series string

  let sign = 1; // Start with a positive sign (1)

  for (let i = 1; i <= n; i++) {
    series += sign * i; // Multiply by sign to alternate the result

    sign = -sign; // Alternate the sign: 1 to -1, -1 to 1
  }

  console.log(series); // Print the final series
}

// Call the function with the desired value of n
let n = 7;
printAlternatingSeries(n);
