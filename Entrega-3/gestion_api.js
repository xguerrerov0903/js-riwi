fetch(`http://localhost:3000/productos`)
    .then(response => response.json())
    .then(data => console.log("Productos disponibles:", data))
    .catch(error => console.error("Error al obtener los productos", error))

const nuevoProducto = {"id": 4, "nombre": "Monitor", "precio": 200};

// No deja de ejecutarse esta agregando infinitamente elproducto si no lo paro

fetch(`http://localhost:3000/productos`,{
    method: `POST`,
    headers: {"Content-Type":`application/json`},
    body: JSON.stringify(nuevoProducto)
})
    .then(response => response.json())
    .then(data => console.log("Productos agregado:", data))
    .catch(error => console.error("Error al agregar producto:", error))

const producotActualizado = {"nombre": "Laptop", "precio": 1400};

fetch(`http://localhost:3000/productos/1`,{
    method: `PUT`,
    headers: {"Content-Type":`application/json`},
    body: JSON.stringify(producotActualizado)
})
    .then(response => response.json())
    .then(data => console.log("Productos actualizado:", data))
    .catch(error => console.error("Error al actualizar producto:", error))

fetch(`http://localhost:3000/productos/3`,{
    method: `DELETE`,})
    .then(()=> console.log("Porducto eliminado", data))
    .catch(error => console.error("Error al eliminar producto:", error))

function validarProducto(producto){
    if (!producto.nombre || typeof producto.precio !== "number"){
        console.error("Datos del producto no validos");
        return false;
    }
    return true;
}

