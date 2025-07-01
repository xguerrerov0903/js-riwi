
let form_task = document.getElementById(`form-task`);

form_task.addEventListener(`submit`, function (event){
    event.preventDefault();
    const title = document.getElementById("tittle").value;
    const description = document.getElementById("description").value;
    const completed = document.querySelector('input[name="completed"]:checked').value;

    const task= {
        title: title,
        description: description,
        completed: completed === "True"  // convierte a boolean
    };

    console.log(task);

    let task_container = document.getElementById('task-list-ul')

    task_container.innerHTML+=`<li>Task: ${title}, Description: ${description}, complete: ${completed}</li>`

})


