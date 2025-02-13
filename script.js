document.getElementById("addButton").addEventListener("click", function() {
    // Create new input field and button
    const taskInputsContainer = document.getElementById("taskInputsContainer");

    const inputWrapper = document.createElement("div");
    inputWrapper.classList.add("input-wrapper");

    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.placeholder = "Add a new task";

    const newButton = document.createElement("button");
    newButton.textContent = "Add ";

    // Add event listener to the new button to add a task to the list
    newButton.addEventListener("click", function() {
        const taskText = newInput.value.trim();
        
        if (taskText !== "") {
            const li = document.createElement("li");
            li.textContent = taskText;
            document.getElementById("tasklist").appendChild(li);
            newInput.value = ""; // Clear the input field after adding the task
        }
    });

    // Append the new input and button to the container
    inputWrapper.appendChild(newInput);
    inputWrapper.appendChild(newButton);
    taskInputsContainer.appendChild(inputWrapper);
});

//Toggle Dark Mode
document.getElementById("toggleMode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

document.querySelector('.fab').addEventListener('click', function() {
    // Show task input field and button (could animate in)
});

function markAsCompleted(taskElement) {
    taskElement.classList.toggle('completed');
}

function markAsUrgent(taskElement) {
    taskElement.classList.toggle('urgent');
}