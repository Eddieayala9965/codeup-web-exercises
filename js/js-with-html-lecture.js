// // console.log("Testing");
// // /* multi-line comment
// // anything that follows will be commented out
// // until it is closed
// //  */
// // let easyMath = 2 + 2;
// // console.log(easyMath);
// //
// // let x = 1;
//
// // short hand operators
// // x = x + 1;
// // // this is the same thing top and bottom code
// // x += 1;
// // x += 2;
// // x*=1;
// // same thing top and bottom
// // x = x / 1
//
// // uniary operators
// // let y = 5;
// //
// // y++;
// // // written out
// // y = y + 5
// // y--;
// // console.log(y);
//
// // let pi = 3.14;
// // let piString = "" + pi; number method
// //  console.log(piString);
// //  let piString = pi.toString();
//
// // let nmrOfStudents = "19"; // this is a js functio
// //  nmrOfStudents = parseInt(nmrOfStudents);
// //  nmrOfStudents = parseFloat(nmrOfStudents);
//
// // let bankAccount = "19.43434"
// // bankAccount =parseFloat(bankAccount)
// //
// // console.log(nmrOfStudents);
//
// let x = "griffen"
// let xNumber = Number(x); // running ops on something thats not a number
// console.log(xNumber)
// let isEqual= xNumber === NaN; // cant do it this way
// console.log(isEqual)
// let isReallyEqual = isNaN (xNumber); // used on assement
// console.log("isNan Funciton =>", isReallyEqual);
//
// /// true y false
// let emptyString = "" == false;
// console.log(emptyString);
// let zero = 0 == false;
// console.log("zero =>", zero);
// let noValue;
// console.log(noValue);
// let noData = null; //absence of data. not there.
// let middleName = "eddie";
//
// if (middleName) {
//     console.log("YUP, its truthy");
// } else {
//     console.log("Nope, its falsy");
// }
// // string methods
//
// let userName = "xVanitas(XIII)";
// let guildName;
//
// let nameLength = userName.length;
// console.log("nameLength", nameLength)
// let guildNameStart = userName.indexOf("(");
// console.log("guildNameStart", guildNameStart)
// let guildNameEnd = nameLength - 1;
// guildName = userName.substring(guildNameStart + 1, guildNameEnd)
// console.log(guildName)
// userName = userName.replace("(" + guildName + ")", "").trim();
// userName = userName.trim()
// console.log(userName)
//
// let channelMessage = "username from the guildName guild has logged in.";
// channelMessage = userName + " from the " + guildName + " guild has logged in.";
// channelMessage = `${userName} from the ${guildName} guild has logged in.`;
// console.log(channelMessage);

// New Lesson
// Confirm function

// let confirmed = confirm('Are you sure you want to do XYZ?');
// console.log(confirmed);

// Alert Function

// alert ('gjgjgjg');

//Prompt Function

// let favcolor = prompt("whats you fav color");
//
// alert(`fav color${favcolor}`);

function sayHello() {
    console.log("hello")
}
sayHello()

function isCoding