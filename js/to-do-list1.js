const todoListHandler = (e) => {
    const todo = document.createElement("li");
    const doneBtnLength = document.querySelectorAll(".btn-danger").length;
    const todoInput = document.querySelector("#to-do").value;
    todo.classList.add(
        "to-do-item",
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
    );
    todo.innerHTML = `
        <p class="m-0">${todoInput}</p>
    <button class="btn btn-danger" id="done${doneBtnLength}">Done</button>
    `;
    document.querySelector("#to-do-list").append(todo);
// we at this point.

    const doneBtn = document.querySelector(`#done${doneBtnLength}`);
    const removeListHandler = (event) => {
        doneBtn.parentElement.remove();
    };

    doneBtn.addEventListener("click", removeListHandler);
};
const todoInput = document.querySelector("#to-do");

todoInput.addEventListener("keyup", (e) => {


});
//Main
(() => {
    const addTodoBtn = document.querySelector("#addToDo");
    addTodoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        todoListHandler();
    });
})();