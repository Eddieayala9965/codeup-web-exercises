

    // /**
    //  * TODO: Done
    //  * Create an array of 4 people's names and store it in a variable called
    //  * 'names'.
    //  */
    // /**
    //  * TODO: Done
    //  * Create a log statement that will log the number of elements in the names
    //  * array.

    //  */
    // /**
    //  * TODO: Done
    //  * Create log statements that will print each of the names individually by
    //  * accessing each element's index.


    // /**
    //  * TODO:
    //  * Write some code that uses a for loop to log every item in the names
    //  * array.
    //  */
    const name = ["eddie", "skylor", "brandon", "aiden"]
    const nameNmr = name.length
    const namePosition = name[0]
    console.log(nameNmr)
    for (let i = 0; i < name.length; i++) {
        const words = name[i];
        console.log(words)
    }
    console.log(name[0], name[1], name[2], name[3])
// console log down vs straight
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
name.forEach((names, i) => {
   for (i = 0; i < name.length ; i++) {
       console.log(name[0], name[1], name[2], name[3])
      return name

   }

 })


    // /**
    //  // * TODO:
    //  // * Create the following three functions, each will accept an array and
    //  // * return an an element from it
    //  // * - first: returns the first item in the array
    //  // * - second: returns the second item in the array
    //  // * - last: returns the last item in the array
    //  // *
    //  // * Example:
    //  // *  > first([1, 2, 3, 4, 5]) // returns 1
    //  // *  > second([1, 2, 3, 4, 5]) // returns 2
    //  // *  > last([1, 2, 3, 4, 5]) // return 5
    //  // */
const colors = ["blue", "yellow", "green"]
const drinks = ["water", "soda", "juice"]
const moods = ["happy", "sad", "angry"]


const firstElement = (array) => {
      let result = array[0]
    return result
}

const secondElement = (array) => {
    let result = array[1]
    return result
}

const lastElement = (array) => {
    let arrayLength = array.lemgth
    let result = [arraylemth -1]
}   return result