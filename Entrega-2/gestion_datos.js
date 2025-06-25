const productos = {
    1: { id: 1, nombre: "Laptop", precio: 1500},
    2: { id: 2, nombre: "Mouse", precio: 25},
    3: { id: 3, nombre: "Teclado", precio: 50}
};

const setProductos = new Set(Object.values(productos).map(producto => producto.nombre))

const mapProductos = new Map([
    ["Electronica","Laptop"],
    ["Accesorios","Mouse"],
    ["Accesorios","Teclado"]
]);

console.log("Map de productos y categorias:", mapProductos)

mapProductos.forEach((producto, categoria) => {
    console.log(`Categoria: ${categoria}, Producto: ${producto}`)
})

console.log("Pruebas completas de gestion de datos:");
console.log("Lista de productos (Objeto):", productos);
console.log("Lista de productos unicos (Set):", setProductos);
console.log("Categorias y productos (Map):", mapProductos);

console.log("Objeto productos:")
for (const id in productos){
    console.log(`Producto ID: ${id}, Detalles:`, productos[id]);
}

console.log("Set de productos unicos:")
for (const producto of setProductos){
    console.log("Producto unico:", producto);
}

console.log("Map de productos y categorias")

mapProductos.forEach((producto, categoria) => {
    // De encontrar un array recorro el array
    if (Array.isArray(producto)) {
        producto.forEach(p => {
            console.log(`Categoria: ${categoria}, Producto: ${p}`);
        });
    } else {
        console.log(`Categoria: ${categoria}, Producto: ${producto}`);
    }
});
