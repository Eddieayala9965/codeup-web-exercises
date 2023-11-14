const renderAddToDo = (e) => {
    // 1. Create a new element
    const createTodo = document.createElement("li");
    // 2. doneBtnLength is the number of done buttons on the page "how many buttons that are going to be on the page will be infinite"
    const doneBtnLength = document.querySelectorAll(".btn-danger").length;
    // this todoInput is the value of the input field "text box"
    const todoInput = document.querySelector("#to-do").value;
    // 3. Add classes to the new element
    createTodo.classList.add (
        "to-do-item",
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
    )

    // 4. Add the html in the dummy element
    // inside we input the value of the text box and the doneBtnLength is the number of buttons that are on the page
    createTodo.innerHTML = `
    <p class="m-0">${todoInput}</p>
    <button class="btn btn-danger" id="done${doneBtnLength}">Done</button>
   `
    // 5. Append the new element to the parent without using a variable, only using it once
    document.querySelector("#to-do-list").append(createTodo);
    // 6. Create a variable for the done button
    const doneBtn = document.querySelector(`#done${doneBtnLength}`);
    // 7. Create a function for the remove button
    const removeListHandler = (event) => {
        doneBtn.parentElement.remove();
    };
// 8. Add an event listener to the done button
    doneBtn.addEventListener("click", removeListHandler);


};

const todoInput = document.querySelector("#to-do");

todoInput.addEventListener("keyup", (e) => {



//Main
(()=>{
    const addTodoBtn = document.querySelector("#addToDo");
    addTodoBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        renderAddToDo();
    });


})();})



