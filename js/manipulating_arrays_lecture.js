(() => {

    const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday'];
// most methods dont transform the value of a variable many array methods do change the value in a var






// push method end of array

    // console.log(daysOfTheWeek)
    daysOfTheWeek.push("Friday");
    // console.log(daysOfTheWeek)

// un-shift method beginning of array. if it was in a var then it will turn it into a number,
   const nm= daysOfTheWeek.unshift("Sunday");
    // console.log(daysOfTheWeek);
    // console.log(nm);

// pop method takes from the end
    const todoList = ['Take out the trash', 'Clean the car', 'Pay the bills'];
    const choreRemoved = todoList.pop();
    // console.log(todoList)
    // console.log(choreRemoved)


// shift method

    const choreRemoved2 = todoList.shift()
    // console.log(todoList)
    console.log(choreRemoved2)


// locating array elements
// index of method

    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red'];
    const greenIndex =  colors.indexOf("green")
    // console.log("find green" , greenIndex)
    // if try to find an array it will come up negative


// he tried to find a color that wasn there then console logged it and got -1 and did a condtional to check. just a simple if else statmmetn
const magentaIndex = colors.indexOf("magenta")
    // console.log(magentaIndex)
if (magentaIndex >= 0) {
    // console.log("found");
} else {
    // console.log("not found");
}

// last index of

    const redIndexLast = colors.lastIndexOf("red");
    // console.log(redIndexLast)

// high level function .filter

    const allRedValues = colors.filter((color) => {
        return color === "red"
    })
    // console.log(allRedValues)

// slicing method will give a new array but again not changing the value of it
//slice method
const lastTwoColors = colors.slice(colors.length - 2);
    // console.log(lastTwoColors);

// Reversing method easy method flips array chnages value but after the fact
    colors.reverse();
    // console.log(colors)

// sort method abc/ numeric order same with reverse
//     console.log(colors);
    colors.sort();
    // console.log(colors);
// split / join
    let namesString = "Joe,Bob,Sally";
    const namesArray = namesString.split(",")
    // console.log(namesArray)
    let backToString = namesArray.join(", ")
// console.log(backToString)

//
    let url = "https://codeup.edu";
    let domain = url.split("/")[2]
    // console.log(domain)
})();