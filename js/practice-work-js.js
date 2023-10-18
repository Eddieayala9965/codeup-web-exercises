// const isTrulyString = (input) => {
//     return typeof input === "string"
// }

// 2. **isFalsyString:**
// Checks if the input is an empty string or a falsy value.

// const isFalsyString = (input) => {
//     return typeof input !== "string"
// }


//
// 3. **isInRange:**
// Checks if the input is within a specified range of numbers.

// const isInRange = (input) => {
//     return input == 3
// }
// console.log(isInRange())

// 4. **isVowel:**
// Determines if the input is a vowel (a, e, i, o, u) or not.
//

// const isVowel = (input) => {
//     return input === "e" || input === ""
// }

// 5. **isConsonant:**
// Determines if the input is a consonant (non-vowel alphabetic character) or not.
//
// 6. **isArrayEmpty:**
// Checks if the input (assumed to be an array) is empty.
//
// 7. **isObjectEmpty:**
// Checks if the input (assumed to be an object) has no properties.
//
// 8. **hasProperty:**
// Checks if the input (assumed to be an object) has a specified property.
//
// 9. **isPalindrome:**
// Determines if the input (assumed to be a string) is a palindrome.
//
// 10. **isPrime:**
// Determines if the input (assumed to be a positive integer) is a prime number.


// 1. Function Declaration: Create a function named add that takes two numbers as parameters and returns their sum.

// const add = (numberOne, numberTwo) => {
//   let result = parseFloat(numberOne) + parseFloat(numberTwo)
// return result
// }
// console.log(add("4","4"));


// const add = (numberOne, numberTwo) => {
//     const result = (typeof numberOne === 'string' && typeof numberTwo === 'string') ?
//         parseFloat(numberOne) + parseFloat(numberTwo) :
//         "Please provide valid numbers as strings.";
//     return result;
// };
//
// console.log(add("4", "4"));
// 2. Function Expression: Write a function expression named multiply that takes two numbers as parameters and returns their product.

// const mulitply = (numberOne, numberTwo) => {
// if (typeof numberOne === "string" && numberTwo === "string") {
//
// } else if ()
// }



// 3. Function with Default Parameter: Define a function called greet that takes a name as a parameter and returns a greeting message. If no name is provided, it should default to "Guest."

// const greet = (name) => {
//     if (typeof name === "string"){
//         console.log("Greetings and Salutations")
//     } else {
//         console.log("Guest")
//     }
// }
// console.log(greet("response"))

// 4. Function with a Callback: Create a function performOperation that takes two numbers and a callback function as parameters. The callback function should be used to perform an operation on the two numbers.




// 5. Function with Recursion: Write a recursive function factorial that takes a positive integer as input and returns its factorial.
//
// 6. Function with an Array Parameter: Define a function findMax that takes an array of numbers as a parameter and returns the maximum value in the array.
//
// 7. Higher-Order Function: Create a higher-order function called filterArray that takes an array and a callback function as parameters. It should return a new array containing only the elements for which the callback function returns true.
//
// 8. Function with Rest Parameter: Write a function average that takes any number of arguments and returns the average of those numbers.
//
// 9. Arrow Function: Create an arrow function named square that takes a number as a parameter and returns its square.
//
// 10. Function Composition: Define two functions, double and addTen, and a third function compose that takes these two functions and returns a new function that first doubles a number and then adds ten to it.



// Execute the following statement in the Chrome JavaScript console and then follow the directions below.
//
//     let sample = "Hello Codeup";


// Use .length to find the number of characters in the string.

// let wordLength = sample.length
// console.log(wordLength);


//     Try to make the sample string all upper or all lower case.

// sample = sample.toUpperCase()
// console.log(sample)

// Update the variable sample via concatenation so that it contains "Hello Codeup Students".

// sample = sample + " Students"
// console.log(sample);

//     Replace "Students" with "Class".

// sample = sample.replace(" Students", " Class");
// console.log(sample);

//     Find the index of "c" using .indexOf(). What do you observe?

// sample = sample.indexOf("c")
// console.log(sample)


//     Find the index of "C" using .indexOf().
// sample = sample.indexOf("C");
// console.log(sample);

//     Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
// sample = sample.substring(6, 12);
// console.log(sample);
// sample = sample.includes("Codeup");
// console.log(sample)


// Write some JavaScript code, that is, variables and operators, to describe the following scenarios.
//     Do not worry about the real operations to get the values, the goal of these exercises is to
// understand how real world conditions can be represented with code.
//
//     You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day,
//     you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

// let mermaidTotal = 3 * 3
// let brotherBearTotal = 3 * 5
// let herculesTotal = 3
// let result = mermaidTotal + brotherBearTotal + herculesTotal
// console.log(result)


//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.' +
// ' Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? ' +
// 'You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.


// let googleTotal = 400 * 6
// let amazonTotal = 380 * 4
// let facebookTotal = 350 * 10
// let resultTwo = googleTotal + amazonTotal + facebookTotal
// console.log(resultTwo)

// let username = 'codeup';
// let password = 'notastrongpassword';


// Create a variable that holds a boolean value for each of the following conditions:
//
//     the password must be at least 5 characters
// username = username.length;
// console.log(username);
// false has 6

// the password must not include the username
// password = password.includes(username);
// console.log(password);

// the username must be no more than 20 characters
// password = password.length;
// console.log(password);
// true
// neither the username or password can start or end with whitespace
// username = username.trim();
// password = password.trim();
// console.log(password);
// console.log(username);
// Use the alert function to show a message that says 'Welcome to my Website!'.
//
//     Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
// alert("Welcome to my website")
// const color = () => {
//     const favColor = prompt("Whats Your favorite color?")
//     if (favColor === "red") {
//         console.log("red is the color of the rose")
//     } else if(favColor === "blue" ) {
//         console.log("blue is the color of the sea")
//     } else if (alert("no color recognized")) {
//
//     }
// }
// let result = color()
// console.log(result)

const movieNight = () => {
    const movieChoice = prompt("What movie would you like to rent today")
    if (movieChoice === "littleMermaid" + 3) {
    console
    }
}


// const addTwo = (x) => {
//     console.log(x+2)
//     // return x + 2;
// }
//
// const multiplyByFive = (x) => {
//     console.log(x*5);
//     return x * 5;
// }
//
// multiplyByFive(addTwo(3))
//
// const tragetNumber = Math.floor(Math.random() * 100) + 1;
//
// let attempts = 0
// const checkGuess = () => {
//     const userGuess = parseInt(prompt("Guess a number between 1 and 100"));
//     if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
//
//      } else if (){
//         console.log("that's correct");
//     }
// }
// let result = checkGuess();
// console.log(result);



// Absolutely! Here's another set of function ideas for you to work on:
//
// isBoolean:
//     Define a function that checks if the input is a boolean value or not.
// const isBoolean = (input) => {
//     return typeof input === "boolean"
// }

//
//     isEven:
// Create a function that determines if the input is an even number.

// const isEven = (input) => {
//     return input === 4 % 2
// }
//

//     isOdd:
// Build a function that determines if the input is an odd number.

// const isOdd = (input) => {
//     return input === 2 % 1
// }

//     isMultipleOf:
// Write a function that checks if the input is a multiple of a specified factor.

// const isMultipleOf = () => {
//     return input === 4 % 2
// }

//     isTruthy:
// Define a function that determines if the input is a truthy value.

// const isTruthy = (input) => {
//     return input === true
// }

//     isFalsy:
// Create a function that determines if the input is a falsy value.
// const isFalsy = (input) => {
//     return input === false
// }

//     isSpecialCharacter:
// Build a function that checks if the input is a special character (not a letter or a number).

// const isSpecialCharacter = (input) => {
//     return input === "@"
// }

// isUpperCase:
//     Define a function that determines if the input is in uppercase.
// const isUpperCase = (input) => {
//     return input === input.toUpperCase()
// }

//     isLowerCase:
// Create a function that determines if the input is in lowercase.

// const isLowerCase = (input) => {
//     return input === input.toLowerCase()
// }

//     isPerfectSquare:
// Write a function that checks if the input

// const findLargestNumber = (arr) => {
//     let largest = arr[0]
// for (i = 0 ;i < arr.length ;i++) {
// if (largest < arr) {
//     return true
// }
// }
//
// }
// const numbers = [42, 17, 8, 94, 23, 61, 12, 51, 6]
// const result = findLargestNumber(numbers)
// console.log(result)



// Certainly! Loops are fundamental constructs in programming that allow you to execute a block of code repeatedly. Here are some common loop exercises in JavaScript to help you practice:
//
//     Print Numbers Using a for Loop:
// Write a program that prints numbers from 1 to 10 using a for loop.
//
//                                                                  javascript
//     Copy code
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// Print Even Numbers Using a for Loop:
// Write a program that prints even numbers from 1 to 20 using a for loop.
//
//                                                                       javascript
//     Copy code
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }
// Print Numbers in Reverse Using a while Loop:
// Write a program that prints numbers from 10 to 1 in reverse order using a while loop.
//
//     javascript
//     Copy code
// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }
// Sum of Numbers Using a do-while Loop:
// Write a program that calculates the sum of numbers from 1 to 10 using a do-while loop.
//
//     javascript
// Copy code
// let sum = 0;
// let i = 1;
//
// do {
//     sum += i;
//     i++;
// } while (i <= 10);
//
// console.log('Sum:', sum);
// Looping Over an Array:
//     Write a program that loops over an array and prints each element.
//
//     javascript
// Copy code
// const arr = [10, 20, 30, 40, 50];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log('Element at index', i, 'is', arr[i]);
// }
// Looping Over Object Properties:
//     Write a program that loops over an object and prints each key-value pair.
//
//     javascript
// Copy code
// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };
//
// for (const key in person) {
//     console.log(key + ':', person[key]);
// }
// Feel free to modify and experiment with these exercises to deepen your understanding of loops in JavaScript.

// "use strict";
//
// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */

// const sayHello = (name) => {
//     return `hello ${name}`
// }
// console.log(sayHello("codeup"))

// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work

// let helloMessage = sayHello("Eddie")
// console.log(helloMessage);


//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */

// let myName = "Eddie";
// console.log(sayHello(myName));

// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// const random = Math.floor((Math.random() * 3) + 1);


//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.

// const isTwo = (number) => {
//     return number !== 2
// }
// console.log(isTwo())

//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */

// const isTwo = () => {
//     return random
// }
// console.log(isTwo());


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

// const calculateTip = (tipPercentage, totalBill) => {
//     tipPercentage = .12;
//     totalBill = 150;
//     let result = parseFloat(tipPercentage * totalBill);
//     return result
// }
// let result = calculateTip()
// console.log(result)

// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */

// const calculateTip = (totalBill, tipPercentage) => {
//     totalBill = 100
//     tipPercentage = 12
//    let promptBill = parseFloat(prompt("Your total bill is $100, what would you like to tip?"))
// if (promptBill === tipPercentage) {
//     alert("ahhh ok $12")
// } else if (promptBill === totalBill) {
//     alert("OK.....not tip then...just the bill")
//
// } else {
//     alert("say that one more time ?")
// }
//
//
// }
// console.log(calculateTip())

// /**
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.

// const applyDiscount = (discount, price) => {
//     price = 100
//     discount = .2
//   let result = parseFloat(price * discount)
//     let finalSum = result.toLocaleString("en-US", {style:"currency", currency:"USD"});
//     let finalAlert = alert(`${finalSum} is your discount total`)
//     return finalAlert;
// }
// console.log(applyDiscount())


//  * Example:
//  * > let originalPrice = 100;
//  * > let discountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, discountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */

// "use strict";
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message which relates to the
//  * color stated in the argument of the function. For colors you do not have
//  * responses written for, return a string stating so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"


// const analyzeColor = (colors) => {
//     colors = 'red'
//     if (colors === 'red') {
//         console.log("red is the color of the roses")
//     } else if (colors === 'blue'){
//         console.log("blue is the color of the ocean")
//     } else if (colors === 'cyan') {
//         console.log("i dont know anything about cyan")
//     }
// }
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
// /**

// const analyzeColor = (color) => {
//     if (color === 'red') {
//         return "red is the color of the roses"
//     } else if (color !== 'blue'){
//         return "blue is the color of the ocean"
//     } else if (color !=='orange') {
//         return "i dont know anything about orange"
//     }
// }
//
// console.log(analyzeColor(randomColor))




//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement


// let narutoCharacters = prompt("who is your favorite naruto charcter")
//
// switch(narutoCharacters) {
//     case "Naruto":
//         alert("Naruto wow! me too")
//         break;
//     case "Sasuke":
//         alert("hes alright")
//         break;
//     case "Itatchi":
//         alert("def the best")
//     default:
// }
//
// console.log(narutoCharacters)



//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.


// const analyzeColor = (color) => {
//     let colorP = prompt("what is your favorite color")
//     if (colorP === 'red') {
//         return alert("red is the color of the roses")
//     } else if (colorP === 'blue'){
//         return alert("blue is the color of the ocean")
//     } else if (colorP ==='orange') {
//         return alert("i dont know anything about orange")
//     }
// }
//
// console.log(analyzeColor())


//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * everything for free!.
//  *
//  * Write a function named `calculateTotal` which accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.

const calculateTotal = (luckyNumber, totalAmount) => {
   totalAmount = 100
    if (luckyNumber === 1) {
        return totalAmount * .10
    } else if (luckyNumber === 2) {
        return  totalAmount * .25
    } else if (luckyNumber === 3) {
        return totalAmount * .35
    } else if (luckyNumber === 4) {
        return totalAmount * .50
    } else if (luckyNumber === 5){

    }
}
console.log(calculateTotal("your lucky number", "total amount"))


//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
// // const luckyNumber = Math.floor(Math.random() * 6);
//
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */


// Function to calculate the average grade of the students
const calculateAverageGrade = (studentList) => {
    let classAverage;
for (i = 0 ; i < studentList.length ; i++);


    return classAverage;
};

// Function to find the student with the highest grade
const findTopStudent = (studentList) => {
    let topStudent;

    // Your code here

    return topStudent;
};

//IIFE / Main
(() => {
    // Array of student objects
    const students = [
        { id: 1, name: "Alice", grade: 90 },
        { id: 2, name: "Bob", grade: 85 },
        { id: 3, name: "Charlie", grade: 78 },
        { id: 4, name: "David", grade: 92 },
        { id: 5, name: "Eva", grade: 88 },
    ];
    // Display the average grade and the top student
    const averageGrade = calculateAverageGrade(students);
    const topStudent = findTopStudent(students);

    console.log(`Average Grade: ${averageGrade}`);
    console.log(`Top Student: ${topStudent.name} (Grade: ${topStudent.grade})`);
})();