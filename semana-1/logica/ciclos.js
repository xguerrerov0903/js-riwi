// 1. Imprimir los caracteres de una palabra

let palabra= "Doctor";

console.log(palabra);

for (letra of palabra){
    console.log(letra);
}

// 2. Contar del 1 al 5 usando for clásico

for (let x= 1; x<6; x++){
    console.log(x);
}

// 3. Mostrar la posición de cada letra en una palabra usando for...in

let palabra2 = "Abogado";

for (let indice in palabra2){
    console.log(indice+" : "+palabra2[indice]);
}

// 4. Recorrer una lista de nombres usando for...of

let nombres = ["Juan", "María", "Pedro", "Ana", "Carlos"];

for (nombre of nombres){
    console.log("Hola, "+nombre);
}

// 5. Imprimir índices de una lista usando for...in

let colores= ["Amarillo","Azul","Rojo"];

for (let indice in colores){
    console.log(indice+" : "+colores[indice]);
}

// 6. Imprimir índice y valor de cada número en un array

let numeros = [7,6,5,4,3,2,1];

for (let indice in numeros){
    console.log(indice+" : "+numeros[indice]);
}