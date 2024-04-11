const form = document.getElementById("kanban-form");
const input = document.getElementById("kanban-input");
const toDoLane = document.getElementById("todo-row");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;

    if (!value) return;

    const newTask = document.createElement("p");
    newTask.classList.add("task");
    newTask.setAttribute("draggable", "true");
    newTask.innerText = value;

    newTask.addEventListener("dragstart", () => {
        newTask.classList.add("is-dragging");
    });

        newTask.addEventListener("dragend", () => {
            newTask.classList.remove("is-dragging");
        });

        toDoLane.appendChild(newTask);

        input.value = "";
});