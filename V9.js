// Arrays in JavaScript
/*    Arrays are a special type of objects. They are used to store multiple values in a single variable.

    In JS, Ek array mein different data type ke data store kar sakte hain.(Matlab array mein string, number, object, function, array, etc..)
    Array dynamic hota hai. Matlab uska size change ho sakta hai.
    Array mein PUSh method se Array k end mein element add kar sakte hain.
    Array mein POP method se Array k end se element remove kar sakte hain.
    Array mein REVERSE method se Array ko reverse kar sakte hain(index wise).
    forEach method se array ke har element par function apply kar sakte hain.
    .map method se array ke har element par function apply karke ek naya array bana sakte hain.

*/


const students = ['John', "Aman", "Avnish","Jane"];

students.forEach(val => console.log(val + " is a student."));
