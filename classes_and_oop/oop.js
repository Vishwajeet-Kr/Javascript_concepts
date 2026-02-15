// ------ Object Literal Syntax ------

const user = {
    username: 'Bishwjit',
    age: 25,
    signedIn: true,

    getUserInfo: function() {
        // console.log('Got user info!');
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserInfo());

// ------ Constructor Function Syntax ------

function User(username, age, signedIn) {
    this.username = username;
    this.age = age;
    this.signedIn = signedIn;

    // return this;
}

const userOne =  new User('Bishwjit', 25, true);
const userTwo =  new User('Abhishek', 12, false);
console.log(userOne);
console.log(userTwo);