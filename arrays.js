// 1. Define two arrays:
//  - evens filled with even numbers
//  - odds filled odd numbers
let odds = [1, 3, 5, 7, 9, 11];
let evens = [2, 4, 6, 8, 10, 12];
console.log(odds);
console.log(evens);

// 2. In the function body, using the spread operator:
//  - return a new array numbers that contains the elements of arr1 and arr2
function combineArrays(arr1, arr2) {
  let newArray = [...arr1, ...arr2];
  return newArray;
  }

  // 3. Uncomment the code below to test the function.
console.log(combineArrays(evens, odds));