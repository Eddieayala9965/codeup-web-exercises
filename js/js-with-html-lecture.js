let isLoggedIn = true;
let isAdmin = false

let shapes = ['circle', 'rectangle', 'square', 'oval', 'triangle', 'hexagon', 'octagon'];
let shape = shapes[Math.floor(Math.random()*shapes.length)];

let favorite = 'octagon'; //

if (shape === 'circle') {
    console.log("Circle is round")
}
else if (shape === 'rectangle') {
    console.log("long square")
}
else if (shape === 'square') {
    console.log("shaped like a box")
}
else if (shape === 'triangle') {
    console.log("pyramid")
}
else if (shape === 'octagon') {
    console.log("UFC")
}
else {
    console.log("idk what shape that is")
}

(shape === favorite) ? console.log(shape + " is my fav shape") : console.log(" is not my fav shape")

