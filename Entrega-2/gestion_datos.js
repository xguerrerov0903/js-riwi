const productos = {
    1: { id: 1, nombre: "Laptop", precio: 1500},
    2: { id: 2, nombre: "Mouse", precio: 25},
    3: { id: 3, nombre: "Teclado", precio: 50}
};

console.log("Objeto productos:", productos);

const setProductos = new Set(Object.values(productos).map(producto => producto.nombre))
console.log("Set de productos unicos:", setProductos)

const mapProductos = new Map([
    ["Electronica","Laptop"],
    ["Accesorios","Mouse"],
    ["Accesorios","Teclado"]
]);

console.log("Map de productos y categorias:", mapProductos)

for (const id in productos){
    console.log(`Producto ID: ${id}, Detalles:`, productos[id]);
}

for (const producto of setProductos){
    console.log("Producto unico:", producto);
}

mapProductos.forEach((producto, categoria) => {
    console.log(`Categoria: ${categoria}, Producto: ${producto}`)
})

console.log("Pruebas completas de gestion de datos:");
console.log("Lista de productos (Objeto):", productos);
console.log("Lista de productos unicos (Set):", setProductos);
console.log("Categorias y productos (Map):", mapProductos);