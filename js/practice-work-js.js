
// const findLongestWord = (sentence) => {
//  let strSplit = sentence.split(" ");
//     let longestWord = "";
//     for (i = 0; i < strSplit.length; i++){
//         if (strSplit[i].length > longestWord.length){
//
//         }
//     }
//
// }
//
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")

// Certainly! Here are the same exercises with slight variations to challenge your understanding of loops:
//
//     **Exercise 1: Counting Numbers**
// Write a loop that prints the numbers from 1 to 15.



// **Exercise 2: Even Numbers**
// Write a loop that prints the even numbers from 2 to 12 (2, 4, 6, 8, 10, 12).

// for (let i = 2 ; i <= 12  ;i+=2 ){
//     console.log(i)
// }

// **Exercise 3: Odd Numbers**
// Write a loop that prints the odd numbers from 1 to 11 (1, 3, 5, 7, 9, 11).

// for (let i = 1 ; i <= 11 ;i += 2){
//     console.log(i)
// }

// **Exercise 4: Multiplication Table**
// Write a loop to print the multiplication table for the number 4 from 1 to 8 (e.g., 4 x 1 = 4, 4 x 2 = 8, ...).
//

// for (i = 4 ;i<=10 ;i++){
//    console.log(`4 x ${i} = ${i * 4}`)
// }

// **Exercise 5: Sum of Numbers**
// Write a loop to calculate the sum of all numbers from 1 to 50.

// let sum = 0;
// for (let i = 1;i <=50 ;i++) {
//     sum += i
//     console.log(sum)
// }


// **Exercise 6: Reverse Counting**
// Write a loop to count backward from 15 to 5.

// for (i = 15; i >= 5; i--)
//     console.log(i)

// **Exercise 7: Custom Greeting**
// Write a loop that asks the user for their name and prints a personalized greeting 3 times.

// for (let i = 0 ;i <  3; i++){
//     let name = prompt("what is your name")
// console.log(`hello, ${name}`)
// }


// **Exercise 8: Square Numbers**
// Write a loop to print the squares of the numbers from 1 to 6 (1, 4, 9, 16, 25, 36).
//
// for (let i= 0; i<=6 ;i++){
//     let square = i * i
//     console.log(square)
// }

//     Feel free to tackle these exercises to further practice your loop skills. They offer variations and challenges to help solidify your understanding.

// Certainly! Here are some basic array-related questions and tasks for you to practice:
//
//     **Question 1: Array Sum**
// Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
// const array = (arr) => {
//     let numbers = [1, 2, 3, 4, 5, 6, 6, 7, 7]
//     arr = numbers
//     let sum = arr.reduce((acc, current) => acc + current, 0)
//     return sum
//
// }
// console.log(array())


// }
// const nmrArray = [1, 2, 3, 4 ,5]
// let sum = sumArray(nmrArray)
// console.log(sum)

// **Question 2: Find Maximum Value**
// Write a function that finds and returns the maximum value in an array of numbers.

// const maxArray = (arr) => {
//     return Math.max(...arr);
// }
// const nmrArray = [1, 2, 3, 4, 5];
// let max = maxArray(nmrArray)
// console.log(max)

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let max = Math.max(...number)
// console.log(max)
//

// Question 1: Array Average
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const AveA = (arr) => {
//     // let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
//     // arr = numbers
//     let ave = arr.reduce((acc, currentValue) => acc + currentValue, 0)
//     let average = ave / arr.length
//     console.log(average)
// }
// console.log(AveA(numbers))


// console.log(parse)
//     Question 2: Find Minimum Value
// Write a function that finds and returns the minimum value in an array of numbers.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
// const minArray = (arr) => {
//     return Math.min(...arr)
// }
// let min = minArray(numbers)
// console.log(min)

//     These modified questions still involve working with arrays and require you to perform slightly different operations. Feel free to tackle these new challenges!



// **Question 3: Find Minimum Value**
// Write a function that finds and returns the minimum value in an array of numbers.




// **Question 4: Reverse an Array**
// Write a function that takes an array and returns a new array with its elements in reverse order.


// let names = ["Eddie", "Yesenia", "Aiden", "Skylor"];
//
// const revArray = (arr) => {
//     return arr.reverse().join(" ,");
// }
//
// console.log(revArray(names));



// **Question 5: Remove Duplicates**
// Write a function that takes an array and removes any duplicate elements, returning a new array with unique values.

//
// let names = ["Eddie", "Yesenia", "Aiden", "Skylor", "Eddie"];
// const removeArray = (arr) => {
//     let slice = arr.splice()
//     let result = slice.toString()
//     return result
// }
// console.log(removeArray(names))
//

// **Question 6: Count Occurrences**
// Write a function that takes an array and a value and counts how many times that value appears in the array.




// **Question 7: Merge Arrays**
// Write a function that takes two arrays and merges them into a single array.




// **Question 8: Find Index of Element**
// Write a function that takes an array and an element to find. It should return the index of the first occurrence of the element in the array or -1 if the element is not found.
//
// **Question 9: Even Numbers**
// Write a function that takes an array of numbers and returns a new array containing only the even numbers from the original array.
//
// **Question 10: Odd Numbers**
// Write a function that takes an array of numbers and returns a new array containing only the odd numbers from the original array.
//
//     These questions cover a range of fundamental array operations in JavaScript and should provide you with a good opportunity to practice working with arrays.

// const createPairs = (arr) => {
//     let len = arr.length
//     let array = []
//     for (let i = 0; i < arr.length; i += 2) {
//         let pairs = []
//         pairs.push(arr[i])
//         pairs.push(arr[i +1])
//         array.push(pairs)
//     }
//     console.log(arr)
// }
//
// const students = ["Amanda",
//     "Bianca",
//     "Cameron",
//     "Chris",
//     "Dany",
//     "David",
//     "Diana",
//     "Drew",
//     "Evan",
//     "Hassan",
//     "Jack",
//     "Jason",
//     "John",
//     "Jonathan",
//     "Jordan",
//     "Joshua",
//     "Katie",
//     "Luis"]
//
