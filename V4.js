// ----------- Conditional Statements and Switch case in JavaScript ------------

// 1. If-Else

//const age = 17;
// if (age >= 70) {
    // console.log("You are an elderly person.");
// }
//  else if (age >= 18) { 
//   console.log("You are eligible to vote.");
// }
//  else {    
//   console.log("You are not eligible to vote.");
// }


//   2.Terinary Operator (Agr exactly 2 condition hain toh)

// condition ? true : false;
    //  let result = age >= 18 ? "You can vote." : "You can't vote.";
    //  console.log(result);


//  3.Switch Case

         const option = 2;
         switch(option) {
             case 1:
                 console.log("You selected option 1");
                 break;
             case 2:
                 console.log("You selected option 2");
                 break;
             case 3:
                 console.log("You selected option 3");
                 break;
             default:
                 console.log("Invalid option selected");
         }