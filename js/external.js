// console.log("Hello from external Javascript");
// alert('Welcome to the website');
// let favColor = prompt("What is your favorite color?");
// console.log(`fav color: ${favColor}`);
// alert("Nice! blue is my favorite color too");

// You have rented some movies for your kids:
// The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?
// (need to add math to it)

alert("Welcome!")
let action = prompt("What movies are you looking for?");
console.log(`This is the response you will get: ${action}`);
alert("Yes we do, our rental fee is $3 per day per movie");
let lilMermaidDay = prompt("how many days will you be renting the little mermaid?");
let lilMermaidNum = parseInt(lilMermaidDay);
console.log(`Days Renting: ${lilMermaidNum}`);
let brotherBearDay = prompt("how many days will you be renting brother bear");
let brotherBearNun = parseInt(brotherBearDay);
console.log(`Days Renting: ${brotherBearNun}`);
let hercDay = prompt("how many days will you be renting hercules");
let hercNum = parseInt(hercDay);
console.log(`Days Renting: ${hercNum}`);
prompt ("will that be all?");
alert("ok no worries, ill be getting your total now");
const payPerMovie = (pricePerDayA, pricePerDayB, pricePerDayC) => {

     let lilMDayRent  = 3;
     let brotherBDayRent = 5;
     let hercBDayRent = 1;
     let finalPayM = lilMDayRent * (3);
     let finalPayB = brotherBDayRent * (3);
     let finalPayH = hercBDayRent * (3);
     let finalIncomeMovie = finalPayM + finalPayB + finalPayH;
     let formattedIncomeUs = finalIncomeMovie.toLocaleString("en-US", {
         style: "currency",
         currency: "USD",
     });
     return "Your total for all the rentals are " + formattedIncomeUs;

 }
 payPerMovie(3,3,3)
 alert(payPerMovie(3, 3, 3));



//Suppose you're working as a contractor for 3 companies:
// Google, Amazon and Facebook, they pay you a different rate per hour.
// Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
// (need to add math to it)

alert("Time to log in your hours for Google this week");
let googleHours = prompt("Hours Worked: ");
let googleLog = parseInt(googleHours);
console.log(`Hours ${googleLog}`);
alert("Time to log in your hours for Amazon this week");
let amazonHours = prompt("Hours Worked: ");
let amazonLog = parseInt(amazonHours);
console.log(`Hours ${amazonLog}`);
alert("Time to log in your hours for Facebook");
let facebookHours = prompt("Hours Worked: ");
let facebookLog = parseInt(facebookHours);
console.log(`Hours ${facebookLog}`);
alert("Wow total hours for this week is 20!! now lets see how much you made at each job!");
let googleMoney = prompt("Google pays $400 per hour and you worked 6 hours. Whats your total?");
let googlePay = parseInt(googleMoney);
console.log(`Pay ${googlePay}`);
let amazonMoney = prompt("Amazon pays $380 per hour and you worked 4 hours. Whats your total?");
let amazonPay = parseInt(amazonMoney);
console.log(`Pay ${amazonPay}`);
let facebookMoney = prompt("Facebook pays $350 per hour and you worked 10 hours. Whats your total");
let facebookPay = parseInt(facebookMoney);
console.log(`Pay ${facebookPay}`);
const overallPay = (hoursA, hoursB, hoursC) => {

    let googlePayPerHour = 400;
    let amazonPayPerHour = 380;
    let facebookPayPerHour = 350;
    let finalPayG = googlePayPerHour * (6);
    let finalPayA = amazonPayPerHour * (4);
    let finalPayC = facebookPayPerHour * (10);
    let finalIncome = finalPayG+ finalPayA + finalPayC;
    let formattedIncome = finalIncome.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
    return "Your final pay is: " + formattedIncome;

}
overallPay(6,4,10)
alert(overallPay(12, 12, 12));