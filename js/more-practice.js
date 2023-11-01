"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// const analyzeColor = (color) => {
//     if (color === "red") {
//         return "red like roses"
//     } else if (color === "blue") {
//         return "blue like the sky"
//     } else {
//         return false
//     }
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// let color = analyzeColor(randomColor)
// console.log(color)
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// const color = prompt("what is your fav color ?")
// switch(color) {
//     case "red":
//         alert("red is the color of roses")
//         break;
//     case"blue":
//         alert("blue os the color of the sky")
//         break;
//     case "cyan":
//         alert("cyan is alright")
//         break;
//     default:
//         alert("not a color")
// }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */




/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
//
// const calculateTotal = (luckyNumber, totalAmount) => {
//     luckyNumber = parseFloat(luckyNumber);
//     totalAmount = parseFloat(totalAmount);
//     let discount = 0;
//
//     alert(`Hey, your lucky number is ${luckyNumber}`);
//
//     if (luckyNumber === 0) {
//         alert(`Awe, too bad! You didn't get a discount, but your total is $${totalAmount}`);
//     } else if (luckyNumber === 1) {
//         discount = totalAmount * 0.10;
//     } else if (luckyNumber === 2) {
//         discount = totalAmount * 0.25;
//     } else if (luckyNumber === 3) {
//         discount = totalAmount * 0.35;
//     } else if (luckyNumber === 4) {
//         discount = totalAmount * 0.50;
//     } else if (luckyNumber === 5) {
//         alert("Everything is for free!");
//     }
//
//     if (discount > 0) {
//         let finalTotal = totalAmount - discount;
//         let realFinalTotal = finalTotal.toLocaleString("en-US", {style:"currency", currency:"USD"})
//         // let parse = parseFloat(realFinalTotal)
//         alert(`Nice! You got a discount of $${discount}, your final total is $${finalTotal}`);
//     }
// }

// Generate a random lucky number between 0 and 5
// const luckyNumber = Math.floor(Math.random() * 6);
// const totalAmount = 1535; // You can change this to any total amount you want to test
//
// calculateTotal(luckyNumber, totalAmount);


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// i am going to use the code above aand add alerts and prompts to it, i want to prompt the user i could say. "hey youre lucky number is ${}"
    // then alert them the discount and price
// Generate a random number between 0 and 6



/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// const scriptOfJ = () => {
//     confirm("Would you like to enter a number");
//     let needAnswer = prompt("Choose a number");
//     let finalAnswer = parseFloat(needAnswer);
//
//     if (!isNaN(finalAnswer)) {
//         if (finalAnswer % 2 === 0) {
//             alert("You chose an even number");
//         } else if (finalAnswer < 0) {
//             alert("You picked a negative number");
//         } else if (finalAnswer > 0) {
//             alert("You picked a positive number");
//         } else {
//             alert("Incorrect data type");
//         }
//
//         const numberPlus100 = finalAnswer + 100;
//         alert(`The number plus 100 is: ${numberPlus100}`);
//     } else {
//         alert("Incorrect data type");
//     }
// }
//
// scriptOfJ();


// const showMultiplicationTable = () => {
//     for (let i = 1 ; i <= 10; i++) {
//         const result = 7 * i;
//         console.log(`7 * ${i} = ${result}`)
//     }
// }
// console.log(showMultiplicationTable())

// for (let i = 0; i < 10; i++) {
//     let randomNumber = Math.random() * (200 - 20 + 1) + 20;
//     let properNmr =  parseInt(randomNumber)
//     const isEven = properNmr % 2 === 0
//     if (isEven) {
//         console.log(`random number is ${properNmr}  and is even`)
//     } else {
//         console.log(`random number is ${properNmr} and is odd`)
//     }
// }
// for (let i = 1; i <= 9; i++) {
//     console.log(String(i).repeat(i));
// }
//
// for (let i = 100 ; i >= 1; i -= 5) {
//     console.log(i)
// }
// let skipNmr = 27;
//
// for (let i = 1; i <= 50; i += 2) {
//     if (i === skipNmr) {
//         console.log(`Yikes! Skipping number: ${skipNmr}`);
//         continue; // Skip the current iteration and continue with the next one
//     }
//
//     console.log(`Here is an odd number: ${i}`);
// }
// let i = 2;
//
// do {
// console.log(i)
//     i * 2
// } while (i <= 65536);
// console.log(i)
// (function(){
//     "use strict";
//
//     /**
//      * TODO:
//      * Create an array of 4 people's names and store it in a variable called
//      * 'names'.
//      */
//     const names = ['eddie', 'yesenia', 'skylor', 'brandon']
//
//     /**
//      * TODO:
//      * Create a log statement that will log the number of elements in the names
//      * array.
//      */
// const nmrOfNames = names.length
//     console.log(names.length)
//
//     /**
//      * TODO:
//      * Create log statements that will print each of the names individually by
//      * accessing each element's index.
//      */
//     console.log(names[0])
//     console.log(names[1])
//     console.log(names[2])
//     console.log(names[3])
//
//     /**
//      * TODO:
//      * Write some code that uses a for loop to log every item in the names
//      * array.
//      */
//
//     for (let i = 0; i <= nmrOfNames ;i++) {
//         console.log(i)
//     }
//
//
//     /**
//      * TODO:
//      * Refactor your above code to use a `forEach` loop
//      */
//
//     names.forEach((name, i) => {
//         console.log(`Name #${i + 1} is ${name}`)
//     })
//
//     /**
//      * TODO:
//      * Create the following three functions, each will accept an array and
//      * return an an element from it
//      * - first: returns the first item in the array
//      * - second: returns the second item in the array
//      * - last: returns the last item in the array
//      *
//      * Example:
//      *  > first([1, 2, 3, 4, 5]) // returns 1
//      *  > second([1, 2, 3, 4, 5]) // returns 2
//      *  > last([1, 2, 3, 4, 5]) // return 5
//      */
//
//     const first = (array) => {
//         let result = array[1]
//         return result
//     }
//
//     const second = (array) => {
//         let result = array[2]
//         return result
//     }
//     const third = (array) => {
//         let result = array[3]
//         return result
//     }
//     console.log(first(names))
//     console.log(second(names))
//     console.log(third(names))
//
// })();

// Of course! Here are some exercises related to arrays and loops for you to practice. Try to solve each exercise on your own, and then check your solutions:
//
//     **Exercise 1: Array Sum**
// Write a function that takes an array of numbers and returns the sum of all the elements.
//
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
//
// numbers.forEach((number) => {
//     sum += number
// })
//
// console.log(sum)
// // **Exercise 2: Even Numbers**
// // Write a function that takes an array of numbers and returns a new array containing only the even numbers from the original array.
//
// const isEven = [1, 2, 3, 4, 5, 6];
//
//    const even = (array) => {
//     let result = array[1]
//    }
// console.log()

// **Exercise 3: Maximum Value**
// Write a function that takes an array of numbers and returns the maximum value in the array.



// **Exercise 4: Array Reversal**
// Write a function that takes an array and returns a new array with the elements in reverse order.



// **Exercise 5: Average of Array Elements**
// Write a function that takes an array of numbers and returns the average (mean) of the elements.

//
// let number = [1, 2, 3, 4 , 5, 6]
//
// const aveArray = (arr) => {
//     let sum = arr.reduce((acc, currentValue) => acc + currentValue, 0)
//     return sum / arr.length
//
// }
//
// console.log(aveArray(number))

// **Exercise 6: Find Index of Element**
// Write a function that takes an array and an element to find. It should return the index of the first occurrence of the element in the array or -1 if the element is not found.

// let number = ["ed", "edd", "eddie"]
//
// const indexArray = (arr) => {
//     let index = arr.indexOf("eddie")
//     return index
// }
// let result = indexArray(number)
// console.log(result)

// **Exercise 7: Remove Duplicates**
// Write a function that takes an array and removes any duplicate elements, returning a new array with unique values.

// let number = ["ed", "edd", "eddie", "eddie"]
// const dupArray = (arr) => {
//     let dup = arr.splice(3, "eddie")
//     return dup
// }
// console.log(dupArray(number))

// **Exercise 8: FizzBuzz**
// Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz." For multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz."

// const fizzBuzz = (num, num2) => {
//     for ()
//     if (num && num2 % 3 === 0) {
//         return "Fizz"
//     } else if ( num && num2 % 5 === 0) {
//         return "Buzz"
//     }
// }
// console.log(fizzBuzz(1, 100))




// **Exercise 9: Array Rotation**
// Write a function that takes an array and a number, and rotates the array to the right by that number of positions.
//
// **Exercise 10: Palindrome Check**
// Write a function that takes a string and checks if it's a palindrome (reads the same forwards and backward).
//
// These exercises cover a range of array and loop concepts and should help you become more proficient in working with arrays and loops in JavaScript. Enjoy practicing!

// let number = [5, 8, 9, 4, 2,]

// function digitialRoot(n) {
//     if (typeof parseFloat(n !== "number")){
//
//     }
//
//
//     let numArr = n.toString().split("")
//     let result;
//     while (numArray.length > 1) {
//         result = 0
//         for (let number of numArr) {
//             result+=parseFloat(number)
//         }
//         // loop through num
//             // add the iteration to result
// numArr = result.toString().split("")
//
//     }
//     result = parseFloat(numArray.join(""));
//     return result
// }
// console.log(digitialRoot())

// let count = 0;
// let max = 10;
// let interval = 1000; // interval time in milliseconds
//
// const intervalId = setInterval( () => {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         console.log('Repeating this line ' + count);
//     }
// }, interval);

// const delay = 5000; // delay time in milliseconds
//
// const timeoutId = setTimeout(() => alert('Here is a delayed hello!'), delay);
//
// // to cancel the timeout, you can call
// clearTimeout(timeoutId);
// // prior to the delay expiring


