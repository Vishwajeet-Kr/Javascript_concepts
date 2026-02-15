function SetUsername(username) {
    this.username = username;
}

function createUser(username, email, password) {
    SetUsername.call(this, username);           // this ko use kar ke SetUsername function ko call kar rahe hain, aur usme current object (this) pass kar rahe hain
    this.email = email;
    this.password = password;
}

const user1 = new createUser('john_doe', 'john@example.com', "123456");
console.log(user1);