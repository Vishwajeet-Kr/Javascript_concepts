const name = "Vishwajeet"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount + 10}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)  //if start > end, it will swap the values. Cannot take negative index.
console.log(newString);

const anotherString = gameName.slice(0, -4) //if start > end, it will not swap the values and return empty string "" and can take negative index also.
console.log(anotherString);

const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('com'))

// console.log(gameName.split('-'));