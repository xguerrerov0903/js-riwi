// Recuperar el array de datos desde Local Storage o inicializarlo vacío si no existe
let data_array = JSON.parse(localStorage.getItem("data-array")) || [];

// Evento que se dispara cuando el formulario es enviado
document.getElementById("userForm").addEventListener("submit", () => {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");

  // Verifica si los elementos existen
  if (!nameInput || !ageInput) {
    console.error("Los elementos del formulario no existen.");
    return;
  }

  // Obtiene los valores del formulario
  const name = nameInput.value.trim(); // Elimina espacios al inicio/final
  const age = parseInt(ageInput.value); // Convierte edad a número entero

  // Valida que haya nombre y que la edad sea un número
  if (name && !isNaN(age)) {
    const infoIngreso = {
      userName: name,
      userAge: age,
    };

    // Recupera el array de datos del Local Storage y agrega el nuevo
    let array_info = JSON.parse(localStorage.getItem("data-array")) || [];
    array_info.push(infoIngreso);

    // Guarda el array actualizado en el Local Storage
    localStorage.setItem("data-array", JSON.stringify(array_info));

    // Muestra los datos actualizados en la página
    displayData();
  } else {
    alert("Por favor, ingresa un nombre válido y una edad numérica.");
  }
});

// Función para mostrar los datos almacenados en el div de salida
function displayData() {
  const data = JSON.parse(localStorage.getItem("data-array"));
  const outputDiv = document.getElementById("output");

  if (data && data.length > 0) {
    let outputText = "";

    // Recorre cada elemento y lo muestra con salto de línea
    data.forEach((item) => {
      outputText += `Nombre: ${item.userName}, Edad: ${item.userAge}<br>`;
    });

    // Muestra el contenido usando innerHTML para incluir saltos de línea
    outputDiv.innerHTML = outputText;
  } else {
    outputDiv.textContent = "No hay datos almacenados.";
  }
}

// Al cargar la pagina, mostrar los datos almacenados

window.onload = displayData;

// Inicializar contaodr de interacciones en Session Storage

if (!sessionStorage.getItem(`interactionCount`)) {
  sessionStorage.setItem(`interactionCount`, 0);
}

// Actualizar contador de interacciones
function updateInteractionCount() {
  let count = parseInt(sessionStorage.getItem(`interactionCount`));
  count++;
  sessionStorage.setItem(`interactionCount`, count);
  console.log(`Interacciones en esta sesion: ${count}`);
}

// Asignar eventos al contador
document
  .getElementById(`saveButton`)
  .addEventListener(`click`, updateInteractionCount);
document
  .getElementById(`clearButton`)
  .addEventListener(`click`, updateInteractionCount);

// Evento para limpiar los datos del Local Storage
document.getElementById(`clearButton`).addEventListener(`click`, () => {
  localStorage.clear();
  displayData();
});
