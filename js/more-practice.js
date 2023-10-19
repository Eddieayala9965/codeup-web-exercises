// Certainly! Here are some beginner-level exercises for conditionals, objects, and arrays:
//
//     ### Conditionals:
//
//     1. **Even or Odd:** Write a program that checks if a given number is even or odd and displays the result.

// const isEven = (input) => {
//     if(input % 2 === 0){
//     return true
//     }
//     return false
// }



// 2. **Age Verification:** Create a program that asks the user's age and checks if they are a minor (age < 18) or an adult (age >= 18).

// const ageVer = (age) => {
//     if (age < 18) {
//         return false
//     } else {
//         return true
//     }
// }



// 3. **Traffic Light:** Simulate a simple traffic light system using conditionals. The program should print the color of the traffic light based on the user's input (e.g., "red," "yellow," or "green").


// const traffic = (input) => {
//     if (input === green) {
//         return true
//     } else if (input !== yellow) {
//         return true
//     } else {
//         return false
//     }
// }
//

// ### Objects:
//
//     4. **Person Object:** Define an object representing a person with properties like `name`, `age`, and `email`. Display these properties in a sentence.

//
// const person = {
//     name: 'Eddie',
//     age: 24,
//     email:'happy@hotmail.com'
// }
// console.log(`my name is ${person.name}, my age is ${person.age} and my email is ${person.email}`)


// 5. **Movie Object:** Create an object that represents a movie with properties like `title`, `director`, and `year`. Display information about the movie.


// const movie = {
//     title: 'one piece',
//     director: 'oda',
//     year: 1999
// }
// 6. **Student Object:** Define an object representing a student with properties like `name`, `age`, and `grades`. Calculate and display the average grade.

// const student = {
//     name:'Eddie',
//     age: 24,
//     grades
// }

// ### Arrays:
//
//     7. **Number List:** Create an array of numbers and find the sum of all the numbers in the array.

// const numbers = [1, 2 , 3, 4, 5 ]
// const sum = numbers.reduce ((accumulator, currentValue) => {
//     return accumulator + currentValue
// })
//
// console.log(sum)
// 8. **To-Do List:** Build a simple to-do list. Users should be able to add, remove, and list tasks.
//
// 9. **Shopping Cart:** Implement a shopping cart using an array. Users should be able to add and remove items, and the program should calculate the total cost of the items in the cart.
//
//     These beginner exercises will help you practice conditionals, objects, and arrays in a straightforward manner. As you work through them, you'll gain more confidence in using these fundamental programming concepts. If you have any questions or need further assistance, please feel free to ask.

const fizzBuzz = (start, end) => {
    for (let i = start; i <= end ;i++)
    if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log("the number itself")
        console.log(i)
    }







}
(fizzBuzz(1, 100))