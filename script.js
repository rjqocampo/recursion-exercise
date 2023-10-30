// Question 1: Sum all numbers
function sumRange(n) {
  if (n === 1) return 1;
  else {
    return n + sumRange(n - 1);
  }
}
// console.log(sumRange(3));

// Question 2: Power function
function power(base, exponent) {
  if (exponent === 0) return 1;
  else {
    return base * power(base, exponent - 1);
  }
}
// console.log(power(2, 4));

// Question 3: Calculate factorial
function factorial(n) {
  if (n === 1) return 1;
  else {
    return n * factorial(n - 1);
  }
}
// console.log(factorial(5));

// Question 4: Check all values in an array
function all(arr, callback) {
  let copy = arr.slice();
  if (copy.length === 0) return true;

  if (!callback(copy[0])) {
    return false;
  }
  copy.shift();
  return all(copy, callback);
}

var allAreLessThanSeven = all([1, 2, 3], function (num) {
  return num < 7;
});

// console.log(allAreLessThanSeven);

// Question 5: Product of an array
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  else {
    return arr.shift() * productOfArray(arr);
  }
}

var six = productOfArray([1, 2, 3]); // 6
var sixty = productOfArray([1, 2, 3, 10]); // 60

// console.log(six, sixty);

// Question 6: Search JS object
var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};
function contains(obj, value) {
  for (key in obj) {
    if (typeof obj[key] === "object") {
      return contains(obj[key], value);
    }

    if (obj[key] === value) {
      return true;
    }
  }
  return false;
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo2"); // false
// console.log(hasIt, doesntHaveIt);

// Question 7: Parse a multi-dimensional array

function totalIntegers(arr) {
  if (arr.length === 0) return 0;

  let total = 0;
  let index = arr.shift();
  if (Array.isArray(index)) {
    total += totalIntegers(index);
  }

  if (Number.isInteger(index)) {
    total += 1;
  }

  return total + totalIntegers(arr);
}

var seven = totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, 5, [5, 6]]]); // 7
// console.log(seven);

// Question 8: Write a function that sums squares of numbers in list that may contain more lists

function sumSquares(arr) {
  let total = 0;
  if (arr.length === 0) return total;

  let index = arr.shift();

  if (Array.isArray(index)) {
    total += sumSquares(index);
  }

  if (Number.isInteger(index)) {
    total += index * index;
    total += sumSquares(arr);
  }

  return total + sumSquares(arr);
}

let l = [1, 2, 3];
// console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[1, 2], 3];
// console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
// console.log(sumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
// console.log(sumSquares(l)); // 100 + 100 + 100 + 100 = 400

// Question 9:
// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
function replicate(a, b) {
  let arr = [];

  function recursive(a, b) {
    if (a === 0) return;
    else if (a < 0) return (arr = []);
    else {
      arr[a - 1] = b;
      return recursive(a - 1, b);
    }
  }

  recursive(a, b);

  return arr;
}
// i can use array index to add an item to the array

// console.log(replicate(3, 5)); // [5, 5, 5]
// console.log(replicate(1, 69)); // [69]
// console.log(replicate(-2, 6)); // []

function fibs(n) {
  const arr = [0];

  if (n === 0) return [];

  for (let i = 1; i < n; i++) {
    let a = arr[arr.length - 2] || 0;
    let b = arr[arr.length - 1] || 1;
    console.log(a, b);
    arr.push(a + b);
  }

  return arr;
}

// console.log(fibs(8)) // [0, 1, 1, 2, 3, 5, 8, 13]

function fibsRec(n, arr) {
  let array = arr || [0];

  if (n === 0) return [];
  if (n <= 1) return array;

  let a = array[array.length - 2] || 0;
  let b = array[array.length - 1] || 1;

  array.push(a + b);

  return fibsRec(n - 1, array);
}

console.log(fibsRec(10));

/*

- the data structure will give you options on your logic
- the parameter defines what your recursive base logic will revolve around
- when working with recursive structures, figure out how to traverse it first
- return will bubble up the result to the caller, which may be a nested function caller with its own context
- base is how the recursion will end

*/
