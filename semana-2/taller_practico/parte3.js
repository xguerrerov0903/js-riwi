let usuarios = [
  {
    nombre: "Juan Pérez",
    correo: "juan.perez@example.com"
  },
  {
    nombre: "María Gómez",
    correo: "maria.gomez@example.com"
  },
  {
    nombre: "Carlos Rodríguez",
    correo: "carlos.rodriguez@example.com"
  }
];
let tarjetas_div = []
for (user of usuarios){
  tarjetas_div += `<div class="tarjeta><h2>Nombre: ${user.nombre} </h2><br><h3>Correo: ${user.correo}</h3></div>`
}

let libros = [
  {
    titulo: "El Señor de los Anillos",
    autor: "J.R.R. Tolkien",
    año: 1954
  },
  {
    titulo: "El Código Da Vinci",
    autor: "Dan Brown",
    año: 2003
  },
  {
    titulo: "El Nombre del Viento",
    autor: "Patrick Rothfuss",
    año: 2007
  }

];
let libros_con = document.getElementById('libros')
libros_con.innerHTML= `<ul>`
for (libro of libros){
  libros_con.innerHTML+=`<li>${libro.titulo} (${libro.año}) - ${libro.autor}</li>`
}
libros_con.innerHTML+= `</ul>`;

let tareas = [
  {
    descripcion: "Comprar leche",
    completada: true
  },
  {
    descripcion: "Hacer la tarea",
    completada: false
  },
  {
    descripcion: "Llamar a la mamá",
    completada: true
  }
];
let tareas_con = document.getElementById('tareas')
for (tarea of tareas){
  tareas_con.innerHTML+=`<p>${tarea.descripcion}: ${tarea.completada ? "✅" : "❌"}</p>`
}

