class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }

}

const user1 = new User("john_doe", "john@example.com", "123")

console.log(user1.encryptPassword())
console.log(user1.changeUsername())

// behind the scenes, the above code is transpiled to something like this:

// function User(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function() {
//     return `${this.password}abc`
// }

// User.prototype.changeUsername = function() {
//     return `${this.username.toUpperCase()}`
// }   

// const user2 = new User("jane_doe", "jane@example.com", "456")

// console.log(user2.encryptPassword())
// console.log(user2.changeUsername())