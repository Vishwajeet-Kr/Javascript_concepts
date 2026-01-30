// ---------------------------- ARRAYS ----------------------------

// collection of items in a single variable
// ordered collection of items
// can hold multiple data types
// arrays are mutable in JS. (can be changed)

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)        // another way to create an array

// console.log(myArr[1]);                   // accessing an element from the array using index

// ---------------Array methods----------------

// myArr.push(6)             // adds an element at the end of the array
// myArr.push(7)
// myArr.pop()              // removes the last element from the array
// console.log(myArr);


// myArr.unshift(9)             // adds an element at the beginning of the array
// myArr.shift()                // removes the first element from the array
// console.log(myArr);


// console.log(myArr.includes(0));          // returns true if the element is present in the array, else false
// console.log(myArr.indexOf(3));           // returns the index of the element, else returns -1 if not found

const newArr = myArr.join()                 // converts the array into a string, elements are separated by commas by default
const newArr2 = myArr.join(" and ")        // you can specify the separator " and " in this case

// console.log(myAr);
// console.log( newArr);
// console.log( newArr2);
// console.log(typeof newArr);              // string


// ----------------------Slice and Splice------------------------

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3);     // does not change the original array and returns a new array, not inclusive of end index

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)     // changes the original array(myArr) and returns the removed elements, also inclusive of end index
// console.log(myn2);
// console.log("C ", myArr);           // original array is changed, remaining elements will be printed after applying splice





const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)          // adds the entire dc_heros array as a single element at the end of marvel_heros array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)          // merges two arrays and returns a new array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]        // spread operator, also merges two arrays and returns a new array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)         // flattens the array, removes all nested arrays, Infinity is used to flatten all levels of nesting
// console.log(real_another_array);


console.log(Array.isArray(["Hello","world"]))         // checks if the given variable is an array or not, returns true or false
console.log(Array.isArray(new Array("Hitesh")))      
console.log(Array.isArray("Hitesh"))                  // returns false, as "Hitesh" is a string not an array

// console.log(Array.from("Hitesh"))         // converts a string into an array, each character becomes an element of the array
// console.log(Array.from({name: "hitesh"}))    // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of("Highest", score1, score2, score3));          // creates an array from the given arguments regardless of the type and number of arguments
console.log(Array.of("Highest",score1, score2, score3).length);    // length of the created array
console.log(Array.of("Highest",score1, score2, score3)[0]);        // accessing the first element of the created array