const colors = ["blue", "green", "white"];

// 1.  Using a forEach loop:
//  - Log every color from the colors array to the console.
for (let color of colors) {
  console.log(color);
}

let nums = [35, 482, 201, 98];
// 2. Using a forEach loop:
//  - Find and print the sum of the nums array.
let sum = 0;
for (let number of nums) {
  sum += number;
}
console.log(sum);

const cats = ["siamese", "calico", "persian", "scottish fold"];
// 3. Using a for of loop:
//  - Print the first letter of each cat to the console.
for (let cat of cats) {
  console.log(cat[0]);
}

const primeNums = [2, 3, 5, 7, 11, 13, 17, 19, 23];
// 4. Using a for of loop:
//  - Calculate the square of every element in the primeNums array.
for (let primeNumber of primeNums) {
  let squaredNumber = primeNumber * primeNumber;
  console.log(squaredNumber);
}

// 5. Using a for loop:
//  - Iterate from 0 to 15.
//  - For each iteration, it should check:
//    - If the current number is odd or even,
//    - and print it to the console.
//
//  Sample output:
//    "0 is even"
//    "1 is odd"
//    "2 is even"
for (let i = 0; i < 16; i++) {
  if (i%2 == 0) {
    console.log(i + " is even!");
  } else {
    console.log(i + " is odd!");
  }
}

// 6. Using a for loop:
//  - Iterate the integers from 1 to 15.
//  - For multiples of three, print "Fizz" instead of the number
//  - For multiples of five print "Buzz"
//  - For numbers that are multiples of both three and five print "FizzBuzz".
//
//    Sample output:
//     1
//     2
//     Fizz
//     4
//     Buzz
//     Fizz
//     7
//     8
//     Fizz
//     Buzz
//     11
//     Fizz
//     13
//     14
//     FizzBuzz
//     -----
for (let i = 1; i < 16; i++) {
  if (i%3 == 0 && i%5 == 0) {
    console.log("FizzBuzz!");
  } else if (i%3 == 0) {
    console.log("Fizz!");
  } else if (i%5 == 0) {
    console.log("Buzz!");
  } else {
    console.log(i);
  }
}

// BONUS LOOPS!!
// Write a JavaScript program to construct the following pattern,
//    using a nested for loop.
//
//    Output:
//     *
//     * *
//     * * *
//     * * * *
//     * * * * *
function printTriangle(length) {
  for (let i = 1; i < length + 1; i++) {
    let printString = "";
    for (let j = 0; j < i; j++) {
       printString += "* "
    }
    console.log(printString);
  }
}
printTriangle(5);

// Write a function called doubleValues that takes an array
//    as a parameter. The function should return a new array
//    with all the values in the array doubled
//
//    Examples & Sample Output:
//     doubleValues([1,2,3]) // [2,4,6]
//     doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
//
//    Uncomment the two arrays below to use and test out the function.
const testArr1 = [7, 3, 2, 6, 0];
const testArr2 = [5, 10, 25, 15, 45];
function doubleValues(arrayInput) {
  let doubledArray = [arrayInput.length];
  for (let i = 0; i < arrayInput.length; i++) {
    doubledArray[i] = arrayInput[i] * 2;
  }
  return doubledArray;
}
console.log(doubleValues(testArr1));
console.log(doubleValues(testArr2));