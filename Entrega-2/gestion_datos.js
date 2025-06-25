// Objeto productos compuesto por id (numeros), claves de objetos literales (detalles)
const productos = {
    1: { id: 1, nombre: "Laptop", precio: 1500},
    2: { id: 2, nombre: "Mouse", precio: 25},
    3: { id: 3, nombre: "Teclado", precio: 50}
};

// Creacion de Set apartir de los nombres de los productos
const setProductos = new Set(Object.values(productos).map(producto => producto.nombre))

// Map de las categorias de los productos
const mapProductos = new Map([
    ["Electronica","Laptop"],
    // Aun que Map acepte cualquier valor como clave no signfica que acepte claves repetidas por eso mismo productos con la misma categoria se le asigna como un array a la categoria
    ["Accesorios",["Mouse","Teclado"]]
]);

console.log("Objeto productos:")
// Usamos for in para recorrer el objeto producto por sus id (claves)
for (const id in productos){
    console.log(`Producto ID: ${id}, Detalles:`, productos[id]);
}

console.log("Set de productos unicos:")
// Usamos for of para recorrer el Set de producots por sus atributos (nombres de los productos)
for (const producto of setProductos){
    console.log("Producto unico:", producto);
}

console.log("Map de productos y categorias")
// Con forEach y una funcion fechaq recorro el Map, consultare asi(valor, clave) = (producto, categoria)
mapProductos.forEach((producto, categoria) => {
    // De encontrar un array recorro el array
    if (Array.isArray(producto)) {
        // forEach se encarga que por cada elemento del array producto imprimir lo necesario
        producto.forEach(p => {
            console.log(`Categoria: ${categoria}, Producto: ${p}`);
        });
    // Si no encuentra un array quiere decir que la categoria solo tiene un producto y lo imprime directamete
    } else {
        console.log(`Categoria: ${categoria}, Producto: ${producto}`);
    }
});
