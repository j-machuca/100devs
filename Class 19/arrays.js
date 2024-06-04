// Write a program that:

// Musketeers

// Write a program that:

//     Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
const musketeers = ["Athos", "Porthos", "Aramis"];
//     Shows each array element using a for loop.
console.log("Show each array element using a for loop");
for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}
//     Adds the "D'Artagnan" value to the array.
musketeers.push("D'Artagnan");
//     Shows each array element using the forEach() method.
console.log("Show each array element using the forEach method");
musketeers.forEach((elem) => console.log(elem));
//     Remove poor Aramis.
musketeers.pop();
//     Shows each array element using a for-of loop.
console.log("Show each array element using the for of");
for (let musketeer of musketeers) {
  console.log(musketeer);
}

// 2. Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10];

console.log(values.reduce((prev, curr) => prev + curr, 0));

// 3. Write a program that creates the following array, then calculates and shows the array's maximum value.
let max = 0;

for (let i = 0; i < values.length; i++) {
  if (values[i] > max) max = values[i];
}
console.log(max);

// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
// let word;

// while (word !== "stop") {
//   console.log("word");
//   prompt("Type a word");
// }

// Javascript.info tasks

// Translate border-left-width to borderLeftWidth

// https://javascript.info/array-methods#translate-border-left-width-to-borderleftwidth

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// Long version

// function camelize(str) {
//   let newString = str
//     .split("")
//     .map((curr, idx, arr) => {
//       if (arr[idx - 1] === "-") return curr.toUpperCase();
//       return curr;
//     })
//     .filter((curr) => curr !== "-")
//     .join("");

//   return newString;
// }

// Shorter version splitting over the - which would iterate over words instead of each letter

function camelize(str) {
  return str
    .split("-") // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(""); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");

// Filter range

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

// For instance:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)

function filterRange(arr, a, b) {
  return arr.filter((curr) => curr >= a && curr <= b);
}

let arr = [5, 3, 8, 1];

console.log("---- Filter Range result ----");
console.log(filterRange(arr, 1, 4));

// Filter range "in place"

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

// For instance:

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]

function filterRangeInPlace(arr, min, max) {
  // Iterate over array
  for (let i = 0; i < arr.length; i++) {
    // do the check
    if (arr[i] < min || arr[i] > max) {
      // remove item from array
      arr.splice(i, 1);
      // reduce the index since we removed 1 item from the array
      i--;
    }
  }
}

filterRangeInPlace(arr, 1, 4);
console.log("---- Filter range in place ----");
console.log(arr);

// Sort in decreasing order

// let arr = [5, 2, 1, -10, 8];

// // ... your code to sort it in decreasing order

// alert( arr ); // 8, 5, 2, 1, -10

let arrayToSort = [5, 2, 1, -10, 8];

// this will sort in decreasing order
arrayToSort.sort((a, b) => b - a);

// this will sort in ascending order
// arrayToSort.sort((a, b) => a - b);

console.log(arrayToSort);

// Copy and sort array

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

let arrToCopyAndSort = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort();
}

console.log("---- Copy and Sort ----");
console.log(arrToCopyAndSort);
console.log(copySorted(arrToCopyAndSort));

// Create an extendable calculator

// Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.

//     First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

//     Usage example:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10

console.log("---- Calculator Excercise ----");

class Calculator {
  methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  calculate(str) {
    let [num1, operator, num2] = str.split(" ");

    if (!this.methods[operator] || isNaN(num1) || isNaN(num2)) return NaN;

    return this.methods[operator](parseInt(num1), parseInt(num2));
  }

  addMethod(name, func) {
    this.methods[name] = func;
  }
}

let calc = new Calculator();

console.log(calc.calculate("3 + 7")); // 10

// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

//     let powerCalc = new Calculator;
//     powerCalc.addMethod("*", (a, b) => a * b);
//     powerCalc.addMethod("/", (a, b) => a / b);
//     powerCalc.addMethod("**", (a, b) => a ** b);

//     No parentheses or complex expressions in this task.
//     The numbers and the operator are delimited with exactly one space.
//     There may be error handling if you’d like to add it.

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

let result = calc.calculate("2 ** 3"); // 8
console.log(result);

// Map to names

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = /* ... your code */

// alert( names ); // John, Pete, Mary

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((user) => user.name);
console.log("---- Map to names ----");
console.log(names);

// Map to objects

console.log("---- Map to objects ----");

// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

let johnM = { name: "John", surname: "Smith", id: 1 };
let peteM = { name: "Pete", surname: "Hunt", id: 2 };
let maryM = { name: "Mary", surname: "Key", id: 3 };

let usersToMap = [johnM, peteM, maryM];

// let usersMapped = /* ... your code ... */

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith

// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

let mappedUsers = usersToMap.map((user) => ({
  fullname: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log(mappedUsers);

console.log("---- sort users by age ----");

// Sort users by age
// importance: 5

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

let johnS = { name: "John", age: 25 };
let peteS = { name: "Pete", age: 30 };
let maryS = { name: "Mary", age: 28 };

let sortUserByAge = [peteS, johnS, maryS];

function sortByAge(users) {
  return users.sort((a, b) => a.age - b.age);
}

console.log(sortByAge(sortUserByAge));

console.log("---- Shuffle an array ----");

// Shuffle an array
// importance: 3

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...

// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

function shuffle(arr) {
  return arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
}

// Another solution

// function shuffle(arr) {
//   return arr.sort(() => Math.random() - 0.5);
// }

// Fisher-Yates Shuffle might be a better alternative
// Also, performance-wise the Fisher-Yates algorithm is much better, there’s no “sorting” overhead.

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

console.log(shuffle([3, 1, 2]));
console.log(shuffle([3, 1, 2]));
console.log(shuffle([3, 1, 2]));
console.log(shuffle([3, 1, 2]));

console.log("---- Get Average Age ----");

// Get average age

// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function getAverageAge(arr) {
  return arr.reduce((prev, curr) => prev + curr.age, 0) / arr.length;
}

console.log(
  getAverageAge([
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 },
  ])
);

console.log("---- Filter unique array memebers ----");

// Filter unique array members

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// function unique(arr) {
//   /* your code */
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function unique(arr) {
  let results = new Set();

  for (let str of arr) {
    results.add(str);
  }
  return results;
}

console.log(unique(strings));

console.log("---- Create keyed object from array ----");

// Create keyed object from array

// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// For example:

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(users);

// /*
// // after the call we should have:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */

// Such function is really handy when working with server data.

// In this task we assume that id is unique. There may be no two array items with the same id.

// Please use array .reduce method in the solution.

function groupById(users) {
  return users.reduce((prev, curr) => {
    prev[curr.id] = curr;
    return prev;
  }, {});
}

console.log(
  groupById([
    { id: "john", name: "John Smith", age: 20 },
    { id: "ann", name: "Ann Smith", age: 24 },
    { id: "pete", name: "Pete Peterson", age: 31 },
  ])
);
