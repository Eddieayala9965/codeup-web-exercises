let a = 1;
console.log(a)
let b = a++;
console.log(b)
let c = ++a;
console.log(c)
//needs to be console logged after each variable

let d = "hello";
let e = false;

d++;
e++;

console.log(d)
console.log(e)
// reason for this is false is less then e which in turn gives us 1 but if changed to true it would add to two
// adding e to the string will automtically turn into NaN

// let perplexed = 3;
// preplexed. + 2;
// console.log(perplexed)
// Preplexed was not defined. no value was present and cant just add a variable to a number. would need a function to fix this issue

// let price = 2.7;
// price.toFixed(2);
// console.log(price.toFixed(1))
// the whole point is to show that this is working fine. but when console logging the price will only show the price but
//but when console logging price.toFixed(2) it will turn 2.70 into a string.

// let price = "2.7";
// price.toFixed(2);
// console.log(price)
//this is coming out as an error on the console log. due to that is because toFixed is for numbers not strings.
//hence the error not a function (price.toFixed)

isNaN(0)
console.log(isNaN(0))
// false
isNaN(1)
console.log(isNaN(1))
//false
isNaN("")
console.log(isNaN(""))
//false
isNaN("string")
console.log(isNaN("string"))
//this was true. im assuming it was because it had letter within the strings vs numbers which will normally be false
isNaN("0")
console.log(isNaN(0))
//false
isNaN("1")
console.log(isNaN("1"))
//false
isNaN("3.145")
console.log(isNaN(3.))
isNaN(Number.MAX_VALUE)
console.log(isNaN(Number.MAX_VALUE))

isNaN(Infinity)

isNaN("true")

isNaN(true)

isNaN("false")

isNaN(false)

let sample = "Hello Codeup"
let newSample = sample + " Students"
console.log(newSample)
sampleName = sample.length
console.log(sampleName)
let bigWords = sample.toUpperCase()
console.log(bigWords)
let newIntro = newSample.replace("Students", "Class")
console.log(newIntro)
let introNew = newIntro.indexOf("c")
console.log(introNew)
let quick = newIntro.indexOf("C")
console.log(quick)
let finalForm = sample.substring(introNew, sampleName)
console.log(finalForm)

let littleMermaid = 3
let mermaidCost = littleMermaid * 3
console.log(mermaidCost)
let BrotherBear = 5
let BrotherCost = BrotherBear * 3
console.log(BrotherCost)
let Hercules = 1
let HercCost = Hercules * 3
console.log(HercCost)
let totalCost = mermaidCost + BrotherCost + HercCost
console.log(totalCost)

let google = 400 * 6
console.log(google)
let amazon = 380 * 4
console.log(amazon)
let facebook = 350 * 10
console.log(facebook)
let totalCostTwo = google + amazon + facebook
console.log(totalCostTwo)

let username = 'codeup';
let password = 'notastrongpassword';
let passwordSize = password.length;
console.log(passwordSize);
let shortCharacter = password >= 5;
console.log(shortCharacter);

let usernameSize = username <= 20;
console.log(usernameSize);
let usernameSizes = username.length
console.log(usernameSizes);
let passHasUsername = password.includes(username);
console.log(passHasUsername)
let whiteSpace = username.includes(" ")
console.log(whiteSpace)
let whiteSpaceTwo = password.includes(" ")
console.log(whiteSpaceTwo)






