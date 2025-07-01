
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

    fetch(`http://localhost:3000/task`, {
        method: `POST`,
        headers: {"Content-Type": `application/json`},
        body: JSON.stringify(task)
    })

})

fetch(`http://localhost:3000/task`)
    .then(response => response.json())
    .then(data => {
        console.log("Datos obtenidos:", data);
        print_tasks(data); // Asumiendo que la respuesta tiene un campo 'tasks'
    })

function print_tasks(tasks) {
    let task_container = document.getElementById('task-list-ul');
    task_container.innerHTML = ''; // Limpiar la lista antes de agregar nuevas tareas

    tasks.forEach(task => {
        task_container.innerHTML += `<li>Task: ${task.title}, Description: ${task.description}, complete: ${task.completed}</li>`;
    });
}







