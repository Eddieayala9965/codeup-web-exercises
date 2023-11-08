//MAIN



const handlePeriodKey = (e) => {
    if ("h" === e.key) {
        alert("You messed up")
        document.body.removeEventListener("keydown", handlePeriodKey)
    }

}



(()=>{
//     const dropdownParent = document.querySelector('.dropdown-parent')
//     const dropdownToggle = document.querySelector('.dropdown-toggle')
//     const dropdownMenu = document.querySelector('.dropdown-menu')
//     const dropdownArrow = document.querySelector('img')
//
//     dropdownToggle.addEventListener('click',(event)=>{
//         dropdownParent.classList.toggle("open");
//     } )




const sayHelloBtns = document.querySelectorAll(".hello");
for (let sayHelloBtn of sayHelloBtns) {
    sayHelloBtn.addEventListener("click", (event) => {
        const name = event.target.getAttribute("data-name");
        alert(`hello ${name}`)
    })

}



document.body.addEventListener('keydown', (handlePeriodKey)=>{





});

})();