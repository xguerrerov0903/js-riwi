let mascotas = [];

// Aqui creamos la función para pedirle los datos al usuario de su mascota,
// para ingresarla en la database

function agregarMascota() {
  let nombre = prompt("🐰 Ingresa el nombre de tu mascota");
  let especie = prompt("🐈‍⬛ Ingresa la especie de tu mascota");
  let edad = parseInt(prompt("🦔 Ingresa la edad de tu mascota"));
  let vacunadoTexto = prompt(
    "🤨 ¿Tu mascota está vacunada? (si / No) "
  ).toLowerCase();
  let vacunado;
  if (vacunadoTexto === "si" || vacunadoTexto === "sí") {
    vacunado = true;
  } else if (vacunadoTexto === "no") {
    vacunado = false;
  } else {
    alert("❌ Respuesta no válida. Se asumirá que NO está vacunado.");
    vacunado = false;
  }

  // Posteriormente creamos el array (DataBase) de la veterinaria.
  // Esta database está conectada a las variables que definimos anteriormente.
  let mascota = {
    nombre: nombre,
    edad: edad,
    especie: especie,
    vacunado: vacunado,
  };

  // Aqui usamos la función de push para meter la mascota a la database (En mi readme tengo una explicación de como funciona esta funcion de push)

  mascotas.push(mascota);
  alert("¡Tu mascota fue agregada con éxito! 🪄🦁");
}

// Aqui estamos creando una nueva funcion que haga el filtro de encontrar la mascota por el nombre ingresado en el interfaz.

function buscarMascotas() {
  let nombreBuscado = prompt("Ingresa el nombre de tu mascota 🐕");
  let encontrado = mascotas.find(
    (m) => m.nombre.toLowerCase() === nombreBuscado.toLowerCase()
  );

  if (encontrado) {
    alert(
      "Mascota encontrada:\nNombre: " +
        encontrado.nombre +
        "\nEspecie: " +
        encontrado.especie +
        "\nEdad: " +
        encontrado.edad +
        "\nVacunado: " +
        (encontrado.vacunado ? "Sí" : "No")
    );
  } else {
    alert("No se encontró ninguna mascota con ese nombre. 😭");
  }
}

// Aqui estamos creando un nuevo filtro de solo mostrar las mascotas que esten vacunadas.

function mascotasVacunadas() {
  let vacunadas = mascotas.filter((m) => m.vacunado);

  if (vacunadas.length === 0) {
    alert("❌ No hay mascotas vacunadas en la veterinaria");
  } else {
    let texto = "Mascotas vacunadas:\n";
    vacunadas.forEach((m) => {
      texto += "- " + m.nombre + " (" + m.especie + ")\n";
    });
    alert(texto);
  }
}

// Luego creamos una funcion donde calculemos la edad promedios de nuestros pacientes

function edadPromedio() {
  if (mascotas.length === 0) {
    alert(" ❌ No hay mascotas registradas.");
    return;
  }
  let suma = 0;
  // Aqui usamos la la operación += para asignarle la suma total de las edades de las mascotas a la variable de suma para posteriormente realizar el promedio con la cantidad de mascotas ingresadas.

  mascotas.forEach((m) => (suma += m.edad));

  let promedio = suma / mascotas.length;
  alert("Edad promedio de pacientes: " + promedio.toFixed(1) + " años. 🐱");
}

// Ahora vamos a crear una funcion por orden de edades, donde mostraremos las edades de menor a mayor edad.

function ordenarPorEdad() {
  if (mascotas.length === 0) {
    alert("❌ No hay mascotas registradas.");
    return;
  }

  let ordenadas = [...mascotas];

  ordenadas.sort((a, b) => a.edad - b.edad);

  let texto = "Mascotas ordenadas por edad:\n";

  ordenadas.forEach((m) => {
    texto += "- " + m.nombre + " (" + m.edad + " años)\n";
  });

  alert(texto);
}

// Aqui vamos a crear el menú para el usuario seleccione la opción por la cual desea hacer la consulta.

function menu() {
  let opcion = "";

  do {
    opcion = prompt(
      "🐾 GESTOR DE MASCOTAS 🐾\n\n" +
        "1️⃣ 🐶 Agregar mascota\n" +
        "2️⃣ 🔍 Buscar mascota\n" +
        "3️⃣ 💉 Ver mascotas vacunadas\n" +
        "4️⃣ 📊 Calcular promedio de edad\n" +
        "5️⃣ 📋 Ordenar mascotas por edad\n" +
        "6️⃣ 🚪 Salir\n\n" +
        "Elige una opción (1-6):"
    );

    switch (opcion) {
      case "1":
        agregarMascota();
        break;
      case "2":
        buscarMascotas();
        break;
      case "3":
        mascotasVacunadas();
        break;
      case "4":
        edadPromedio();
        break;
      case "5":
        ordenarPorEdad();
        break;
      case "6":
        alert("👋 ¡Hasta luego! Cuida a tus mascotas 🐕🐈");
        break;
      default:
        alert("⚠️ Opción inválida. Intenta de nuevo.");
    }
  } while (opcion !== "6");
}

menu(); // Inicia el programa