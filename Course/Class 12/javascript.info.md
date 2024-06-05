# Section - Variables

## Tasks

1. Working with variables

```js
let admin;
let name;

name = "John";
admin = name;

alert(admin);
```

2. Giving the right name

```js
let ourPlanetName = "Earth";
let currentUserName;
```

3. Uppercase const?

```js
// Should birthday be constant and uppercased?
// A: yes, its a constant and it's know prior to excecution

const BIRTHDAY = "18.04.1982";

// Should age be uppercase?
// A: it should be a constant because it's value is never going to change
// but it should not be uppercased since its a runtime constant.
const age = someCode(BIRTHDAY);
```

# Section - Function Basics

## Tasks

1. Is "else" required?

   A: No, the `else` is not required.

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}
```

2. Will the function work differently if `else` is removed?

   A: No, the function will work exactly the same.

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}
```

3. Rewrite the function using `?` or `||`

```js
function checkAge(age) {
  // using the ternary operator
  return age > 18 ? true : confirm("Did parents allow you?");

  // using the || (or) operator
  return age > 18 || confirm("Did parents allow you?");
}
```

4. Function min(a,b)

```js
// Write a function min(a,b) which returns the least of two numbers `a` and `b`

function min(a, b) {
  // Using the ternary operator
  return a > b ? b : a;

  // Using if-else statement

  if (a > b) {
    return b;
  } else {
    return a;
  }

  // using only 1 if no else

  if (a > b) return b;

  return a;
}
```

5. Function pow(x,n)

```js
// write a function pow(x,n) that returns x to the power of n.

function pow(x, n) {
  return x ** n;
}
```
