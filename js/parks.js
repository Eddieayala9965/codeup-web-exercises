// const lastLis = document.querySelectorAll("li");
// const listBtn = document.querySelector(".listBtn");
// for (let lastLi of lastLis) {
//
// const last = lastLi.closest("ul").querySelector("li:last-child");
// listBtn.addEventListener("click", (e) => {
//     last.classList.add("make-yellow");
//
// })}



const handleHighlight = (e) => {
    for (let lastList of lastLists) {
        const last = lastList.lastElementChild
        last.classList.toggle("make-yellow");
    }
}
 const handleBold = (e) => {
     const last = h3.nextElementSibling;
     last.e.target.classList.toggle("make-bold");
 }

 const handleBlue = (e) => {
        const last = list.parentElement.firstElementChild;
        last.e.target.classList.toggle("make-blue");
 }

(()=>{


const lastLists = document.querySelectorAll("ul");
const listBtn = document.querySelector(".list-btn");
listBtn.addEventListener("click", handleHighlight);



const h3s = document.querySelectorAll("h3");
        for (let h3 of h3s) {
        h3.addEventListener("click", handleBold);
    }

const lists = document.querySelectorAll("li");
        for (let list of lists) {
        list.addEventListener("click",handleBlue )
}


})();







