function getFrequency(arr) {
  let freq = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (freq[num] === undefined) {
      freq[num] = 1;
    } else {
      freq[num] += 1;
    }
  }

  return freq;
}

let arr = [3, 2, 3, 1, 2, 2];
console.log(getFrequency(arr));
// Output: { '3': 2, '2': 3, '1': 1 }

// ======================

function sortByFrequencyDescending(arr) {
  let freq = {};
  let maxFreq = 0;

  // Count frequency of each number
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (freq[num] === undefined) {
      freq[num] = 1;
    } else {
      freq[num]++;
    }
    maxFreq = Math.max(maxFreq, freq[num]); // Track the highest frequency
  }

  let result = [];

  // Reconstruct output in descending order
  while (result.length < arr.length) {
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      if (freq[num] === maxFreq && freq[num] > 0) {
        for (let j = 0; j < freq[num]; j++) {
          result.push(num); // Add elements at the end (descending order)
        }
        freq[num] = 0; // Mark as used
      }
    }
    maxFreq--; // Move to the next lower frequency
  }

  return result;
}

let arr2 = [3, 2, 3, 1, 2, 2];
console.log(sortByFrequencyDescending(arr2));

// Output: [2, 2, 2, 3, 3, 1]
