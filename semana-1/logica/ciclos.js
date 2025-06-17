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

