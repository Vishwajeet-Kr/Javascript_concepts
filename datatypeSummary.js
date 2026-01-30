//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  // array is a type of object
let myObj = {                       // datatype is object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){      // datatype is function
    // console.log("Hello world");
}

// console.log(typeof myFunction);



// ----------------------------------------------------------------------------------------------------------------------------------------------


//  Stack(primitive) -> call by value, original value will not be changed, copy of original value is created for any operation
//  Heap(reference) -> call by reference, original value will be changed, address of original value is passed for any operation

let myNum = 8;          // primitive
let anotherNum = myNum;
anotherNum++;          // original value will not be changed
// console.log(myNum);  // 8
// console.log(anotherNum); // 9


let userOne = {        // reference
    name: "hitesh",
    age: 22,
}   
let userTwo = userOne;
userTwo.age = 23;      // original value will be changed
// console.log(userOne); // {name: 'hitesh', age: 23}
// console.log(userTwo); // {name: 'hitesh', age: 23}   