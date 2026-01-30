// ---------------singleton------------------
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Bishwjit",
    "full name": "Bishwjit Kumar",          // key with space must be in quotes
    [mySym]: "mykey1",                      // key as a symbol
    age: 18,
    location: "Jaipur",
    email: "bishwjit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]        // array as a value
}

// console.log(JsUser.email)
// console.log(JsUser["email"])                 // another way to access the value of a key                     
// console.log(JsUser["full name"])             // accessing key with space, using bracket notation
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)                        // freezes the object, no further changes can be made to the object                       
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){                   // method of the object, function as a value of a key
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full name"]}`);     // using this keyword to access other keys of the object
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());




// ------------------ Some useful singleton methods ------------------

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {                                 // nested objects       
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);            // accessing nested objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }                              
// const obj3 = Object.assign({}, obj1, obj2, obj4)         // merges multiple objects into one object 

const obj3 = {...obj1, ...obj2, ...obj4}                    // spread operator, merges multiple objects into one object
// console.log(obj3);


const users = [                                              // array of objects
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));            // returns an array of keys of the object
// console.log(Object.values(tinderUser));          // returns an array of values of the object
// console.log(Object.entries(tinderUser));         // converts the object into array of arrays, each array contains key and value pair of the object

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));           // checks if the key is present in the object or not, returns boolean value


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course           // object destructuring and renaming the variable, here courseInstructor is renamed to instructor

// console.log(courseInstructor);
console.log(instructor);

// {                                               // JSON - JavaScript Object Notation
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
