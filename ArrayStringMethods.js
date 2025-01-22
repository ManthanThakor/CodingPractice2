// 1. push() – Adds an element to the end of the array
let arr1 = [1, 2, 3];
arr1.push(4);
console.log('push():', arr1); // Output: [1, 2, 3, 4]

// 2. pop() – Removes the last element of the array
let arr2 = [1, 2, 3, 4];
let lastElement = arr2.pop();
console.log('pop():', arr2); // Output: [1, 2, 3]
console.log('Last element:', lastElement); // Output: 4

// 3. shift() – Removes the first element of the array
let arr3 = [1, 2, 3];
let firstElement = arr3.shift();
console.log('shift():', arr3); // Output: [2, 3]
console.log('First element:', firstElement); // Output: 1

// 4. unshift() – Adds one or more elements to the beginning of the array
let arr4 = [2, 3];
arr4.unshift(1);
console.log('unshift():', arr4); // Output: [1, 2, 3]

// 5. splice() – Adds/removes elements at a specific index
let arr5 = [1, 2, 3, 4, 5];
arr5.splice(2, 1, "a", "b");
console.log('splice():', arr5); // Output: [1, 2, 'a', 'b', 4, 5]

// 6. slice() – Returns a shallow copy of a portion of an array
let arr6 = [1, 2, 3, 4, 5];
let newArr = arr6.slice(1, 4);
console.log('slice():', newArr); // Output: [2, 3, 4]

// 7. forEach() – Executes a function once for each element
let arr7 = [1, 2, 3];
arr7.forEach((item, index) => {
    console.log(`Item at index ${index}: ${item}`);
});
// Output:
// Item at index 0: 1
// Item at index 1: 2
// Item at index 2: 3

// 8. map() – Creates a new array with the results of calling a function on every element
let arr8 = [1, 2, 3];
let doubledArr = arr8.map(item => item * 2);
console.log('map():', doubledArr); // Output: [2, 4, 6]

// 9. filter() – Creates a new array with all elements that pass a test
let arr9 = [1, 2, 3, 4, 5];
let evenNumbers = arr9.filter(item => item % 2 === 0);
console.log('filter():', evenNumbers); // Output: [2, 4]

// 10. reduce() – Applies a function to each element to reduce the array to a single value
let arr10 = [1, 2, 3, 4];
let sum = arr10.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('reduce():', sum); // Output: 10

// 11. reduceRight() – Similar to reduce(), but processes the array from right to left
let arr11 = [1, 2, 3, 4];
let product = arr11.reduceRight((accumulator, currentValue) => accumulator * currentValue, 1);
console.log('reduceRight():', product); // Output: 24

// 12. find() – Returns the first element that satisfies the provided testing function
let arr12 = [5, 10, 15, 20];
let found = arr12.find(item => item > 10);
console.log('find():', found); // Output: 15

// 13. findIndex() – Returns the index of the first element that satisfies the provided testing function
let arr13 = [5, 10, 15, 20];
let index = arr13.findIndex(item => item > 10);
console.log('findIndex():', index); // Output: 2

// 14. some() – Checks if at least one element in the array satisfies the provided testing function
let arr14 = [1, 2, 3, 4];
let hasEven = arr14.some(item => item % 2 === 0);
console.log('some():', hasEven); // Output: true

// 15. every() – Checks if all elements in the array satisfy the provided testing function
let arr15 = [2, 4, 6, 8];
let allEven = arr15.every(item => item % 2 === 0);
console.log('every():', allEven); // Output: true

// 16. concat() – Merges two or more arrays into one
let arr16 = [1, 2, 3];
let arr17 = [4, 5, 6];
let mergedArr = arr16.concat(arr17);
console.log('concat():', mergedArr); // Output: [1, 2, 3, 4, 5, 6]

// 17. join() – Joins all elements of the array into a single string
let arr18 = ["Hello", "world"];
let str = arr18.join(" ");
console.log('join():', str); // Output: "Hello world"

// 18. includes() – Checks if an array contains a specific element
let arr19 = [1, 2, 3, 4];
let containsThree = arr19.includes(3);
console.log('includes():', containsThree); // Output: true

// 19. indexOf() – Returns the index of the first occurrence of an element
let arr20 = [1, 2, 3, 4];
let indexOfThree = arr20.indexOf(3);
console.log('indexOf():', indexOfThree); // Output: 2

// 20. sort() – Sorts the elements of the array in place
let arr21 = [4, 1, 3, 2];
arr21.sort((a, b) => a - b); // Sorting in ascending order
console.log('sort():', arr21); // Output: [1, 2, 3, 4]
