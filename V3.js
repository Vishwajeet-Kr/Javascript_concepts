// -------------- Data Types in JavaScript --------------

// 1. Number
let num1 = 10;
let num2 = 3;
console.log(num1 + num2);

// 2. String
const str1 = "Hello";
const str2 = ' World!!';
console.log(str1 + str2);

// 3. Boolean
let isLoggedIn = true;
let isNotLoggedIn = false;
console.log(isLoggedIn);
console.log(isNotLoggedIn);

// 4. Null
let lastLoginDate = null;
// lastLoginDate = "2021-09-01";
console.log(lastLoginDate);

// 5. Undefined
let name = undefined;
console.log(name);

// 6. Object
const user = {
    firstname: "John",
    lastName: "Doe",
    age: 30,
    isLoggedIn: true,
};
console.log(user);
console.log(user.age);
console.log(user.firstname);


// -------------- Operators in JavaScript --------------

console.log(num1 + num2);
console.log(num1 - num2 + 10);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);    // Modulus or Remainder
console.log(num1 ** num2);  // Exponentiation or Power

console.log(isLoggedIn + 10);
console.log(isNotLoggedIn + 10);

console.log ('11' + 10); // In JS it will concatenate the string and output is String.
console.log ('11' * 10); // In JS it will convert string to number and then multiply and output is Number.

// Typeof Operator
console.log(typeof '11');
console.log(typeof lastLoginDate);
console.log(typeof isLoggedIn);