let Nmr = 2
do {
    console.log(`${Nmr * 2}`);
    Nmr++;
} while (Nmr <= 65536 );



let i = 1
do {
    i = 2 * i;

    console.log(i);
}
while (i < 65536);


let allCones = Math.floor(Math.random() * 50) + 50;
console.log(`Initial number of cones to sell: ${allCones}`);
do {
    const conesToSell = Math.floor(Math.random() * 5) + 1;

    if (conesToSell <= allCones) {
        console.log(`${conesToSell} cones sold.`);
        allCones -= conesToSell;
    } else {
        console.log(`Cannot sell you ${conesToSell} cones. I only have ${allCones}`);
    }

} while (allCones > 0);

console.log('Yay! I sold them all!');
