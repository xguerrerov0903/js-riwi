// Evento para guardar datos en el Local Storage
let data_array = JSON.parse(localStorage.getItem('data-array')) || [];

document.getElementById(`saveButton`).addEventListener('click', () => {
    const nameInput = document.getElementById(`name`);
    const ageInput = document.getElementById(`age`);

    if (!nameInput || !ageInput) {
        console.error(`Los elementos del formulario no existen.`);
        return;
    }

    const name = nameInput.value.trim();
    const age= parseInt(ageInput.value);

    if (name && !isNaN(age)) {
        const infoIngreso = {
            userName : name,
            userAge : age
        }
        let array_info = JSON.parse(localStorage.getItem('data-array')) || [];
        array_info.push(infoIngreso)
        localStorage.setItem(`data-array`,  JSON.stringify(array_info))
        displayData();
    } else {
        alert(`Por favor, ingresa un nombre valido y una edad numerica.`)
    }
});

// Funcion para mostrar los datos almacenados
function displayData() {
    const data = JSON.parse(localStorage.getItem(`data-array`));
    const outputDiv = document.getElementById(`output`);

    if (data && data.length > 0) {
        let outputText = '';

        data.forEach(item => {
            outputText += `Nombre: ${item.userName}, Edad: ${item.userAge}<br>`;
        });

        outputDiv.innerHTML = outputText; // ✅ CAMBIADO de textContent a innerHTML
    } else {
        outputDiv.textContent = `No hay datos almacenados.`;
    }
}


// Al cargar la pagina, mostrar los datos almacenados

window.onload = displayData;

// Inicializar contaodr de interacciones en Session Storage

if (!sessionStorage.getItem(`interactionCount`)){
    sessionStorage.setItem(`interactionCount`,0);
}

// Actualizar contador de interacciones
function updateInteractionCount (){
    let count = parseInt(sessionStorage.getItem(`interactionCount`));
    count++;
    sessionStorage.setItem(`interactionCount`, count);
    console.log(`Interacciones en esta sesion: ${count}`);
}

// Asignar eventos al contador
document.getElementById(`saveButton`).addEventListener(`click`, updateInteractionCount);
document.getElementById(`clearButton`).addEventListener(`click`, updateInteractionCount);

// Evento para limpiar los datos del Local Storage
document.getElementById(`clearButton`).addEventListener(`click`, () =>{
    localStorage.clear();
    displayData();
})