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
let word;

while (word !== "stop") {
  console.log("word");
  prompt("Type a word");
}
