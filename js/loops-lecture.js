//                                              Traditional For Loop
// console.log("loops")
// // syntax first
// // for (initialization ; condtion ; incriment){
// // }
for (let i = 0 ; i < 10 ; i++
) {
    /* code that will repeat */
    console.log(`the code ran ${i}`);
}

// for loop is the safest one.

//                                                  While Loop

// let index = 0
// while (index < 10) {
//     console.log(`code ran ${index}`)
//     index++;
// }
//
// let favP = prompt("fav pizza?");
// while(favP !== "pepperoni"){
//     favP = prompt("wrong");
// }
// alert("you got it!")

// you can

//                                                 Do While Loop
// do {
//     //body
// } while(/*condition*/);
// let Nmr = 0;
// do{
//     console.log(Nmr)
//     Nmr++;
// } while (Nmr <= 10)
//                                              **end of types of loops**

const buildRow = (num) => {
    let result = ""
    for (let i =0; 1 < num; i++) {
        result += "*";
    }
    result += "\n";
    return result;
};

const buildPyramid = (rows) => {
    let result = ""

for (i = 1 ; i <= rows ;i++) {
    result += buildRow(i);

}




    return result;
}
let pyramid = buildPyramid(5)
console.log(pyramid)




