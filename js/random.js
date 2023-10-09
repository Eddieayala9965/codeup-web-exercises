// Define a function called multiplyFive which accepts a number and returns that number multiplied by 5.
//
const multiplyFive = (number) => {
    let nmrTwo = 1 * (number)
    const nmr = parseFloat(number)
    return ("this is your number " + nmrTwo)

}
console.log(multiplyFive(" 5"));
(multiplyFive(3));
(multiplyFive(5));
(multiplyFive(6));



// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */

const sayHello = (name) => {
return (`Hello ${name}`)
}
console.log(sayHello("codeup"))

// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work
//  */

const helloMessge = sayHello("Eddie")
console.log(`This is the thing you were looking for?: ${helloMessge}`)
// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */

const name = "eddie"
console.log(sayHello(name))


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
const random = Math.floor((Math.random() * 3) + 1);

// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.

const isTwo = (number) => {
    let num = (number <= 2)
    return num
}
console.log(isTwo(random))

 // * Example
 // * > isTwo(1) // returns false
 // * > isTwo(2) // returns true
 // * > isTwo(3) // returns false
 // *
 // * Call the function 'isTwo' passing the variable 'random' as a argument.
 // *
 // * console.log *outside of the function* to check your work (you should see a
 // * different result everytime you refresh the page if you are using the random
 // * number)
 // */

// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
//  *
//  * Examples:
//  * > calculateTip(0.20, 20) // returns 4
//  * > calculateTip(0.25, 25.50) // returns 6.375
//  * > calculateTip(0.15, 33.42) // returns 5.013
//  */

const calculateTip = (tip, bill) => {
    let nmr = tip * bill
    let nmrTwo = parseFloat(nmr)
    let billTotal = alert("you have a total bill total of $100")
    let tipTotal = prompt("would you like to leave a tip, please let me know the amount")
    let tipBill = parseFloat(tipTotal, billTotal)
    let nmrThree = nmrTwo.toLocaleString('en-US', {
        style: 'currency' ,
        currency: 'USD'

    }
    )
    console.log(tipBill)
return nmrThree
}
console.log(calculateTip(.20, 100));


// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip





// /**
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
//  *
//  * Example:
//  * > let originalPrice = 100;
//  * > let discountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, discountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */

const applyDiscount = (price, discount) => {
let ogPrice = price * discount
let appliedDiscount = 100 - ogPrice
let totalCostBill = appliedDiscount.toLocaleString('en-US', {
        style: 'currency' ,
        currency: 'USD'

    }
)
    return totalCostBill
}
console.log(applyDiscount(100, .2))