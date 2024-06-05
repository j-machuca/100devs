// *Variables*
// Create a variable and console log the value

let userName = "wildrunner";
console.log(userName);

// Create a variable, add 10 to it, and alert the value

let count = 0;
count += 10;
alert(count);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtract(numOne, numTwo, numThree, numFour) {
  return numOne - numTwo - numThree - numFour;
}

// Create a function that divides one number by another and returns the remainder

function remainder(x, y) {
  return x % y;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function overUnder(x, y) {
  x + y > 50 ? alert("Jumanji") : null;
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function zebraAlert(x, y, z) {
  (x * y * z) % 3 === 0 ? alert("ZEBRA") : null;
}
