(()=>{

// const changeImg = document.querySelector("#profile-pic")
// setTimeout(()=>{
//     changeImg.setAttribute("src", "./img/german.webp")
// },2000);
// const changeName = document.querySelector("#profile-name")
// setTimeout(()=> {
//     changeName.innerHTML = "Eddie Ayala"
// }, 4000);
// const profileDisc = document.querySelector("#profile-desc")
// setTimeout(()=>{
//     profileDisc.style.fontFamily = "Impact,Charcoal,sans-serif"
//     profileDisc.style.color = "blue"
// }, 6000)
// const cardProfile = document.querySelector("#profile-card")
// setInterval(()=>{
//     cardProfile.style.backgroundColor = "grey"
// }, 2000)

})();


const changeImg = document.querySelector("#profile-pic")
const changeName = document.querySelector("#profile-name")
const profileDisc = document.querySelector("#profile-desc")
setTimeout(()=>{

    changeImg.setAttribute("src", "./img/german.webp")
    changeName.innerText = "Eddie Ayala"
    profileDisc.style.fontFamily = "Impact,Charcoal,sans-serif"
    profileDisc.style.color = "blue"



}, 6000)

setTimeout(()=>{
    let newName = prompt("do you want to change your name?")
    changeName.innerText = `${newName}`
},6500)


const color = ["blue", "red", "orange", "grey", "yellow", "purple"]
const cardProfile = document.querySelector("#profile-card")
setInterval(()=>{
    cardProfile.style.backgroundColor = color[Math.floor(Math.random()*color.length)];

}, 2000)







