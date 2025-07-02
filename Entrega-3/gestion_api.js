// Objengo todos los productos y los imprimo
fetch(`http://localhost:3000/productos`)
    // Por defaut mi solicitud sera GET, caso que sucede aqui
    // La data que optendra (response) sera traducida de su formato .json para js
    .then(response => response.json())
    .then(data => console.log("Productos disponibles:", data))
    .catch(error => console.error("Error al obtener los productos", error))

const nuevoProducto = {"id": 4, "nombre": "Monitor", "precio": 200};

if (validarProducto(nuevoProducto)){
// Agrega un nuevo objeto 
fetch(`http://localhost:3000/productos`,{
    method: `POST`,
    headers: {"Content-Type":`application/json`},
    body: JSON.stringify(nuevoProducto)
})
    .then(response => response.json())
    .then(data => console.log("Productos agregado:", data))
    .catch(error => console.error("Error al agregar producto:", error))
}

const producotActualizado = {"nombre": "Laptop", "precio": 1400};

if (validarProducto(producotActualizado)){
// Modifico un objeto existente
fetch(`http://localhost:3000/productos/1`,{
    method: `PUT`,
    headers: {"Content-Type":`application/json`},
    // Transforma mi objeto productoActualizado en un JSON 
    body: JSON.stringify(producotActualizado)
})
    .then(response => response.json())
    .then(data => console.log("Productos actualizado:", data))
    .catch(error => console.error("Error al actualizar producto:", error))
} 

// Elimina el objeto que corresponda al id 3
fetch(`http://localhost:3000/productos/3`,{
    method: `DELETE`,})
    .then(()=> console.log("Producto eliminado"))
    .catch(error => console.error("Error al eliminar producto:", error))

// Valida que haya una entrada en nombre y que precio sea un valor numerico, de no serlo retorna false
function validarProducto(producto){
    if (!producto.nombre || typeof producto.precio !== "number"){
        console.error("Datos del producto no validos");
        return false;
    }
    return true;
}

