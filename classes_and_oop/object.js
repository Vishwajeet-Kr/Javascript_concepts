// Js is a prototype based language.
// In js, everything is an object. Even functions are objects in js.

// In js, we can create objects using object literals, constructor functions, or classes (introduced in ES6).

function multipleBy5(num) {
    return num * 5;
}

multipleBy5.power = 2; // Adding a property to the function object

// console.log(multipleBy5(10)); 
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function() {
    this.score++;
    console.log(`Score is ${this.score} `);
    
}

createUser.prototype.printMe = function() {
    console.log(`price is ${this.score}`);
}

const Adii = new createUser('Adii', 15);

Adii.printMe();  // Score is 15
Adii.increment(); // Score is 16
Adii.printMe();  // Score is 16

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/