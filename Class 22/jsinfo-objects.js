// Tasks

// Hello, object
// importance: 5

// Write the code, one line for each action:

//     1. Create an empty object user.
const user = {};

//     2. Add the property name with the value John.
user.name = "John";
//     3. Add the property surname with the value Smith.
user.surname = "Smith";
//     4. Change the value of the name to Pete.
user.name = "Pete";
//     5. Remove the property name from the object.
delete user.name;

// Check for emptiness

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj) {
  if (Object.entries(obj).length !== 0) return false;

  return true;
}

// Another solution
function isEmpty(obj) {
  for (let key in obj) {
    //  if the loop has started, there is a property
    return false;
  }
  return true;
}

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

// Sum object properties

// We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

let salaryTotal = 0;

// using a for loop
for (let value in salaries) {
  salaryTotal += salaries[value];
}

console.log(salaryTotal);

// another solution

console.log(Object.values(salaries).reduce((prev, curr) => (prev += curr), 0));

// Multiply numeric property values by 2

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  // iterate over object and extract keys and values

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "number") {
      obj[key] = value * 2;
    } else {
      obj[key] = value;
    }
  }
  return obj;
}

menu = multiplyNumeric(menu);

// Expected result
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
console.log(menu);
