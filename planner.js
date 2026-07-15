let tasks = [];

function addTask(){

    let input = document.getElementById("taskInput");

    if(input.value === ""){
        return;
    }

    tasks.push(input.value);

    let li = document.createElement("li");

    li.innerHTML =
    input.value +
    ' <button onclick="completeTask(this)">Done</button>' +
    ' <button onclick="deleteTask(this)">Delete</button>';

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function completeTask(button){
    button.parentElement.style.textDecoration = "line-through";
}

function deleteTask(button){
    button.parentElement.remove();
}