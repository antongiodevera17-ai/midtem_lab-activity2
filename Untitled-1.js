// ==========================================
// SECURE DYNAMIC TASK MANAGER
// Laboratory Activity #2
// ==========================================


// ==========================================
// 1. GET HTML ELEMENTS
// ==========================================

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const loadSamplesBtn = document.getElementById("loadSamplesBtn");

const taskList = document.getElementById("taskList");
const taskMessage = document.getElementById("taskMessage");

const totalCount = document.getElementById("totalCount");
const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");


// Unique task counter
let taskCounter = 0;


// ==========================================
// 2. CREATE TASK ELEMENT
// ==========================================

function createTaskElement(taskText, taskId) {

    // Create the main <li>
    const taskItem = document.createElement("li");

    taskItem.classList.add("task-item");

    // Required data attributes
    taskItem.dataset.taskId = taskId;
    taskItem.dataset.state = "pending";


    // Create task text
    const textSpan = document.createElement("span");

    textSpan.classList.add("task-text");

    // SAFE: use textContent
    textSpan.textContent = taskText;


    // Create Complete button
    const completeBtn = document.createElement("button");

    completeBtn.classList.add("complete-btn");

    completeBtn.textContent = "Complete";


    // Create Edit button
    const editBtn = document.createElement("button");

    editBtn.classList.add("edit-btn");

    editBtn.textContent = "Edit";


    // Create Remove button
    const removeBtn = document.createElement("button");

    removeBtn.classList.add("remove-btn");

    removeBtn.textContent = "Remove";


    // Add elements to task item
    taskItem.appendChild(textSpan);
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(removeBtn);


    // Return the task
    return taskItem;
}


// ==========================================
// 3. ADD TASK
// ==========================================

function addTask(taskText) {

    // Remove extra spaces
    const text = taskText.trim();


    // Validate empty task
    if (text === "") {

        taskMessage.textContent = "Task cannot be empty";

        return;
    }


    // Create unique task ID
    taskCounter++;

    const taskId = "task-" + taskCounter;


    // Create task element
    const taskItem = createTaskElement(text, taskId);


    // Add task to the DOM
    taskList.appendChild(taskItem);


    // Clear input
    taskInput.value = "";


    // Clear error message
    taskMessage.textContent = "";


    // Update counters
    updateTaskCounts();
}


// ==========================================
// 4. TOGGLE TASK COMPLETE
// ==========================================

function toggleTaskComplete(taskItem) {

    // Toggle completed class
    taskItem.classList.toggle("completed");


    // Update data-state
    if (taskItem.classList.contains("completed")) {

        taskItem.dataset.state = "completed";

    } else {

        taskItem.dataset.state = "pending";
    }


    // Update counters
    updateTaskCounts();
}


// ==========================================
// 5. BEGIN TASK EDIT
// ==========================================

function beginTaskEdit(taskItem) {
// Find current task text
    const textSpan = taskItem.querySelector(".task-text");

    // Find Edit button
    const editBtn = taskItem.querySelector(".edit-btn");


    // Get current text
    const currentText = textSpan.textContent;


    // Create input
    const editInput = document.createElement("input");

    editInput.type = "text";

   
}

    