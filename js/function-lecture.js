// // function declaration
// function sayHello(usersFullName) {
//     console.log(`hello${usersFullName}`);
// }
//
// sayHello(" Eddie");
//
//
//
//
// // Annonymous function
//  const sayHello = function (usersFullName) {
//     console.log(`hello${usersFullName}`);
// }
//
// sayHello("eddie")

// Arrow Function 🔥
// const sayHello = (usersFullName) => {
//     console.log(`Hello ${usersFullName}`);
// }
//
// sayHello("Eddie");


// Return Keyword

// const sayHello = (usersFullName) => {
//     console.log("here")
//     return `Hello ${usersFullName}`;
//  };
// const greeting = sayHello("Eddie");
//
// console.log(greeting);
//



//create a function named is coding that log "i love coding!"
// argument needs to be your name + eddie loves coding
const isCoding = (greeting, usersFullName) => {  // This is a parameter (can be anything)
    return `${greeting} ${usersFullName} love's coding!`;
}

const love = isCoding("you", "Eddie")

console.log(love)