// Summary : In this code, we have two classes: `User` and `Teacher`. 
// The `Teacher` class inherits from the `User` class using the `extends` keyword. 
// The `Teacher` class has its own constructor that calls the parent class's constructor using `super()`, and it also has an additional method called `addCourse()`. 
// We create an instance of the `Teacher` class and call both the inherited method (`logMe()`) and the new method (`addCourse()`). 
// We also create an instance of the `User` class and call its method. 
// Finally, we check if the `chai` instance is an instance of both `Teacher` and `User`.


class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);        // Call the parent class constructor
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@example.com", "123")

chai.logMe()
chai.addCourse()
const masalaChai = new User("masala chai")

masalaChai.logMe()

console.log(chai instanceof Teacher) // true
console.log(chai instanceof User);