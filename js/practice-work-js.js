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

// const favColor = (favRed, favBlue) => {
//     prompt("Whats your favorite color?")
//     if (favRed === "red") {
//
//     } else if ()
// }

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