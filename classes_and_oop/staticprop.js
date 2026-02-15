class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);      
    }

    static createId() {         // Static method, can be called without creating an instance of the class and is not accessible through instances of the class.
        return `123`
    }
}

const hitesh = new User("Hitesh");

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone13", "i@phone.com")
console.log(iphone.logMe());        
console.log(User.createId());      