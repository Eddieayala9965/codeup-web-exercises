// "use strict";

// /**
//  *
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.

//  * Example
// sayHello("codeup") // returns "Hello, codeup!"

const sayHello = (name) => {
    return `hello ${name}`;
}
const JavaYawn = sayHello("Eddie");
console.log(JavaYawn);


    //
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *

sayHello("eddie")
const helloMessage = sayHello("Eddie")
console.log(helloMessage)

//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.

const myName = "Eddie"
sayHello(myName)
console.log(sayHello(myName))




// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random

const random = Math.floor((Math.random() * 3) + 1);


//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.

const isTwo = (number) => {
    let result = number === 2;
    return result
}

const myVar23 = isTwo(2)



//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.

isTwo(random)
console.log(isTwo(random))


//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */
//
// /**
//  * :
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip

const calculateTip = (percentage, bill) => {
     return (100 * percentage) / bill;

 };


//
// const finalForm = calculateTip(0.20)
// calculateTip(random)
// console.log(calculateTip(random))


//  * Examples:
//  * > calculateTip(0.20, 20) // returns 4
//  * > calculateTip(0.25, 25.50) // returns 6.375
//  * > calculateTip(0.15, 33.42) // returns 5.013
//  */
//
// /**
//  *
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip

let firstBill = prompt("Time to Pay for the bill!");
let tipBill = prompt("how much would you like to tip");
let totalTip = calculateTip(parseFloat(tipBill), parseFloat(firstBill));
alert(`wow thanks for tip! ${totalTip}`)








//  *
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
const applyDiscount = (price, discount) => {
    let mathDiscount = (100 * .2);
    let discountAdded = (price - discount);
    let finalAmount = mathDiscount - discountAdded;
    return finalAmount(applyDiscount(100, .2));
};




//  * Example:
//  * > let originalPrice = 100;
//  * > let discountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, discountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
