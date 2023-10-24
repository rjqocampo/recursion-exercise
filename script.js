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

    console.log(obj[key]);
    if (obj[key] === value) {
      return true;
    }

    return false;
  }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo2"); // false
console.log(hasIt, doesntHaveIt);

/*

- return will bubble up the result
- base is how the recursion will end
- the parameter defines what your recursive base will revolve around

*/
