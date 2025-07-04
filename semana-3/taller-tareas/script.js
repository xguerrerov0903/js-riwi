
let form_task = document.getElementById(`form-task`);

// Hear the event submit (button) of the form 
form_task.addEventListener(`submit`, function (event){
    event.preventDefault();
    // Get the values of the inputs
    const title = document.getElementById("tittle").value;
    const description = document.getElementById("description").value;
    // Get the value of the radio button, the buttons have the same name so for that reason we can use querySelector the get the value of the checked one
    //const completed = document.querySelector('input[name="completed"]:checked').value;

    // Create the task object
    const task= {
        title: title,
        description: description,
        completed: false
        //completed: completed === "True"  // Convertir el string a boolean, if the value is "True" then completed will be true, otherwise it will be false
    };

    // Log the task object to the console just to see the values
    console.log(task);

    // POST the task to the API
    fetch(`http://localhost:3000/task`, {
        method: `POST`,
        headers: {"Content-Type": `application/json`},
        // Transform the task object to a JSON string
        body: JSON.stringify(task)
    })

})

// Check the simulation of the API, get the task and print it
fetch(`http://localhost:3000/task`)
    // For defauylt the fetch method is GET, so we don't need to specify it
    .then(response => response.json())
    // The data that is GET will be print
    .then(data => {
        console.log("Get data:", data);
        print_tasks(data); 
    })

// Function to print the tasks in the HTML
function print_tasks(tasks) {
    let task_container = document.getElementById('task-list-ul');
    task_container.innerHTML = ''; // Clear the previous tasks

    tasks.forEach(task => {
        if (task.completed){
            task_container.innerHTML += `<li id="${task.id}">Task: ${task.title}, Description: ${task.description}, complete: ${task.completed}</li>`

        } else {
            task_container.innerHTML += `<li id="${task.id}">Task: ${task.title}, Description: ${task.description}, complete: ${task.completed}    <button type="button" value="complete">Completed</button></li>`
        };
    });
}


let listener_completed = document.getElementById(`task-list-ul`);

// Hear the event submit (button) of the form 
listener_completed.addEventListener(`click`, function (event){

    // tagName return the name un Upper
    if (event.target.tagName === 'BUTTON') {
        /*
        Esto busca el elemento <li> más cercano hacia arriba en el DOM desde el botón clicado.

        ¿Por qué? Porque ese <li> tiene el id de la tarea.

    .   closest('li') sube por los padres del botón hasta encontrar el primer <li>.
        */
        const li = event.target.closest('li')
        // alt
        // const li = event.target.parentNode;
        const id = li.id;

        fetch(`http://localhost:3000/task/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'
            },
            body: JSON.stringify({completed: true})
    })
    }

})


/*Extra info json

The format of the json has to be change

I add the task object that has the task array

*/ 





