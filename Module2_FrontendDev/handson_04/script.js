document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Event listener tracking the append click pipeline action
    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        
        // Prevent injecting empty tasks into interface structures
        if (taskText === "") {
            alert("Please provide a descriptive assignment item title.");
            return;
        }

        // Initialize wrapper list item structure
        const li = document.createElement("li");
        li.className = "task-item";

        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div class="task-actions">
                <button type="button" class="action-btn complete-btn">Complete</button>
                <button type="button" class="action-btn delete-btn">Delete</button>
            </div>
        `;

        // Interactive callback for the local complete button component
        const completeBtn = li.querySelector(".complete-btn");
        completeBtn.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        // Interactive callback for the local delete button action parameter
        const deleteBtn = li.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        // Add the assembled task item into our list tree
        taskList.appendChild(li);
        
        // Clean input focus window fields
        taskInput.value = "";
        taskInput.focus();
    });

    // Support hitting enter to confirm submit action behavior metrics
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTaskBtn.click();
        }
    });
});