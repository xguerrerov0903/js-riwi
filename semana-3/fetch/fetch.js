fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log("GET:", data))
  .catch(error => console.error("Error en GET:", error));


  fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Nuevo Post",
    body: "Este es el contenido del post",
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log("POST:", data))
.catch(error => console.error("Error en POST:", error));

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    title: "Post actualizado",
    body: "Contenido actualizado",
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log("PUT:", data))
.catch(error => console.error("Error en PUT:", error));

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
.then(response => {
  if (response.ok) {
    console.log("DELETE: recurso eliminado correctamente");
  } else {
    console.error("Error al eliminar");
  }
})
.catch(error => console.error("Error en DELETE:", error));