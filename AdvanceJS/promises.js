const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function() {
            console.log('Async task is complete.');
            resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log('Promise Consumed');  
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log('Task 2 consumed');
})




const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({user: "Bishwjit", email: "bishwjit12@gmai.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Bishu", password: "123"})
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
            let error = false
            if(!error){
                resolve({username: 'javascript', password: '123'})
            } else {
                reject('ERROR: JS went wrong.')
            }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()




// async function getAllUsers() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch{
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

// ---------------- Doing the same work using .then--------------------

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))