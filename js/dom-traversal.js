/* DOM Traversal */
/* NODE METHODS FOR TRAVERSAL
 * - querySelector: crawl down the DOM tree, returns first match
 * - querySelectorAll: crawl down the DOM tree, returns all matches
 * - closest: crawl up the DOM tree, returns first match
 * - nextElementSibling: crawl sideways the DOM tree, returns following element
 * - previousElementSibling: crawl sideways the DOM tree, returns previous element
 * - parentElement: crawl up the DOM tree, returns parent element
 * - children: crawl down the DOM tree, returns all children elements
 * - firstElementChild: crawl down the DOM tree, returns first child element
 * - lastElementChild: crawl down the DOM tree, returns last child element
 */
// MAIN
(() => {
    const slideNextBtn = document.querySelectorAll("[data-next]")
    const slidePrevBtn = document.querySelectorAll("[data-prev]")
for (let slider of slideNextBtn) {
    slider.addEventListener("click", (e) => {
        const sliderId = slideNextBtn.getAttribute("data-next")
        const slider = document.querySelector(`[data-slider="${sliderId}"]`)
        const current = slider.querySelector("[data-slider].active")
        const next = current.nextElementSibling;
        if (next) {
            current.classList.remove("active");
            next.classList.add("active");
        } else {
            const first = slider.querySelector("[data-slider]:first-child");
            first.classList.add("active");
            current.classList.remove("active");
        }


})

    const highLightBtn = document.querySelector("#highlightNext")
    const highLightBtnPrev = document.querySelector("#highlightPrev")
    highLightBtn.addEventListener("click", (e) =>{
        const current = document.querySelector(".box.active")
        const next = current.nextElementSibling;
        current.classList.remove("active");
        if (next) {
            current.classList.remove("active");
            next.classList.add("active");
        } else {
            const first = current.closest(".row").querySelector(".box");
            first.classList.add("active");
            current.classList.remove("active");
        }

    })
    highLightBtnPrev.addEventListener("click", (e) =>{
        const current = document.querySelector(".box.active")
        const prev = current.previousElementSibling
        current.classList.remove("active");
        if (prev) {
            current.classList.remove("active");
            prev.classList.add("active");
        } else {
            const last = current.closest(".row").querySelector(".box:last-child");
            current.classList.remove("active");
            last.classList.add("active");
        }

    })

}()();}