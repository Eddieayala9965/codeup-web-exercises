//                                                      Question 1
// const showMultiplicationTable = (number) => {
//     for(let i = 1; i <= 10; i++){
//         console.log(`${number} x ${i} = ${number * i}`)
//     }
// }
// let multiply = showMultiplicationTable(2);
// console.log(multiply)

//                                                      Question 2
// const diffNmr = () => {
//
// for (let i = 0; i <= 10;i++ ) {
//     // console.log(`number ${i}`)
//     const luckyNumber = Math.floor(Math.random() * 6);
//     if (luckyNumber % 2 === 0) {
//         console.log(luckyNumber)
//         console.log("is even")
//     } else  {
//         console.log(luckyNumber)
//         console.log(`is odd`)
//     }
// } }
//    let random = diffNmr()
// console.log(random)
//                                                      Question 3

    // for (let i = 100 ; i >= 5 ; i = i - 5 ) {
    //     console.log(i)
    // }
//                                                      Question 4
// const nmrRepeat = (number) => {
//     for (let i = 1; i <= number ; i++) {
//         console.log(`${i}`.repeat(i))
//     }
// }
// let letMeSee = nmrRepeat(9)
// console.log(letMeSee)
//                                                      Question 5
//     let Nmr = 2
// do {
//     console.log(`${Nmr * 2}`)
//     Nmr++;
// } while (Nmr <= 65536 )
//                                                      Question 6
// for (let i = 0; i <= 49; i++) {
//     if (i === 27) {
//         console.log(`skip number 27`);
//     } else {
//         console.log(`The current index is ${i}`);
//     } }
//                                                      Question 7: need help with this one
//     let i = 0
// do {
//     i += 1 + i;
//     i++;
//     console.log(i)
// }
// while (i < 65536);
//                                                     Question 8

// let allCones = Math.floor(Math.random() * 50) + 50;
//
// console.log(`Initial number of cones to sell: ${allCones}`);
//
// do {
//     const conesToSell = Math.floor(Math.random() * 5) + 1;
//
//     if (conesToSell <= allCones) {
//         console.log(`${conesToSell} cone(s) sold...`);
//         allCones -= conesToSell; // Update the remaining number of cones
//     } else {
//         console.log(`Cannot sell you ${conesToSell} cones. I only have ${allCones}...`);
//     }
//
// } while (allCones > 0);
//
// console.log('Yay! I sold them all!');






