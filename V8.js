// Topic: Arrow Functions in JavaScript

// Arrow Functions are a more concise way of writing function expressions - they are written as function expressions without the function keyword, the return keyword, and the curly brackets.

// 1. Syntax
const sayHello = () => {
    console.log('Hello World.');
};

// sayHello();

const add =  (a, b) => {        // Paranthesis rahega toh return karna padega.
    return a + b;
}

// console.log(add(10, 20));

const sum =  (a, b) => a + b;   // Use Only when 1 line of code is there inside the function.
// console.log(sum(10, 2));


// 2. Arguments available nahi hain arrow functions mein.

// How to use arguments in arrow functions?

const addNumbers = (...nums) => {
    // console.log(nums);
};
addNumbers(1, 2, 3, 4, 5, 10);



// 3. Hoisting in Arrow Functions - Arrow functions do not have hoisting.(Hoisting matlab function ko pehle call karna fhir define karna)


// sayHey(); // Error aayega kyuki arrow functions mein hoisting nahi hota.
const sayHey = () => {
    // console.log('Heyyy');
};
// sayHey();


// 4. This Keyword
const obj = {
    value: 10,
    myFunction: function() {
        console.log(this);
    },
};

obj.myFunction(); // obj ko point karega.