// Topic: Basic Functions in JavaScript

function sayHello() {
  console.log('Hello');
}

// sayHello();

function sum(a,b) {     // Function define karte waqt a,b arguments hain.
    // console.log(a+b);
    return a + b;
}

let y = sum(10,20);             // Function call karte waqt 10,20 parameters hain.
// console.log("Sum is ",y);



function Mul(a,b) {  
    // console.log(a *b );
    return a * b;
}

 let x = Mul(10,20);
//  console.log("Multiplied value is ",x);


// Unlimied arguments accept
function addNumbers() {
    // console.log(arguments);
    let ans = 0 ;
    for(let i = 0; i < arguments.length; i++) {
        ans += arguments[i];
    }
    return ans;
}

let result = addNumbers(1,2,3,4,5,6,7,8,9,10,45);
console.log("Result is ",result);