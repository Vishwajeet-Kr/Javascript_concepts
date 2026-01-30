//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);           // This will print INNER: 10
    
}


// console.log(a);                  // This will print OUTER: 300
// console.log(b);                  // This will give error as b is not defined in this scope 
// console.log(c);                  // This will give error as c is not defined in this scope


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);            // This will give error as website is not defined in this scope        

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);        // This will print hitesh youtube
    }
    // console.log(website);                       // This will give error as website is not defined in this scope
}

// console.log(username);                          // This will give error as username is not defined in this scope


// ---------------------- Interesting ------------------------


console.log(addone(5))                  // This will work because of hoisting           
function addone(num){
    return num + 1
}


console.log(addTwo(5))                   // This will give error because function is not hoisted(called before declaration) 
const addTwo = function(num){            // expression function mein hoisting nahi hoti
    return num + 2
}
// console.log(addTwo(5))