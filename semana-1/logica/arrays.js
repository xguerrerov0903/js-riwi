// Ejercicio 1. Eliminar primer elemento

let frutas = ["Manzana", "Banana", "Mora"];

console.log(frutas);

frutas.shift();

console.log(frutas);

// Ejercicio 2. Agregar un nuevo elemento final

let numeros = [1,2,3,4]

console.log(numeros);

numeros.push(5);

console.log(numeros);

// Ejercicio 3. Agregar un nuevo elemento inicio

let palabras= ["Hola","Mundo","Coder"];

console.log(palabras);

palabras.unshift("Inicio");

console.log(palabras);

// Ejercicio 4. Eliminar ultimo elemento

let colores= ["Amarillo","Azul","Rojo"];

console.log(colores);

colores.pop();

console.log(colores);

// Ejercicio 5. Copiar seccion array

console.log(palabras);

let palabras2= palabras.slice(postMessage,2)

console.log(palabras2)

// Ejercicio 6. Cambiar elemento con el indice

let numeros2= [1,2,3,4,5];

console.log(numeros2);

// Indice a cambiar, cuantos, el nuevo elemento
numeros2.splice(2, 1, 0);

console.log(numeros2);

// Ejercicio 7. Unir los elementos array con espacios

console.log(palabras);

let palabras3 = palabras.join(" ");

console.log(palabras3);

// Ejercicio 8. Organizar elementos array

let nombres = ["Juan", "María", "Pedro", "Ana", "Carlos"];

console.log(nombres);

nombres.sort();

console.log(nombres);

// Ejercicio 9. Invertir el orden del array

let numeros3 = [7,6,5,4,3,2,1];

console.log(numeros3);

numeros3.reverse();

console.log(numeros3);

// Ejercicio 10. Verificar existencia valor

let frutas2 = ["Fresa","Manzana", "Banana", "Mora"];

console.log(frutas2);

let existe = frutas2.includes("Banana");

if (existe){
    console.log("Banana existe en el array");
} else {
    console.log("Banana no existe en el array");
}

let existe2 = frutas2.includes("Mango");

if (existe2){
    console.log("Mango existe en el array");
} else {
    console.log("Mango no existe en el array");
}

