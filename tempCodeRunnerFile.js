function printReversePattern(n) {
  let numStr = n.toString();
  let length = numStr.length;

  for (let i = 0; i < length; i++) {
    let line = "";

    for (let j = length - 1; j >= length - 1 - i; j--) {
      line = line + " " + numStr[j];
    }

    console.log(line);
  }
}

// Call with n = 3257
printReversePattern(3257);
