// variables 

const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");


//Event Listener for Add Button

addTask.addEventListener("click", function(){
    let task = document.createElement("div");
    task.classList.add("task");

    let li = document.createElement("li");
    li.innertext =`${inputTask.value}`;
    task.appendChild(li);

    let checkButton = docuement.createElement("button");  
    checkButton.innerHTML ='<i class="fa-solid fa-check "></i>';
    checkButton.classList.add("checkTask");
})