// Immediately Invoked Function Expressions (IIFE)
// An IIFE is a function that runs as soon as it is defined, protected from global scope pollution


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Bishwjit')
