// 1

let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Medellin"
};

// 2

console.log(persona["nombre"]);

// 3

let libro = {
    nombre: "Biblia",
    paginas: 30,
    autor: "Ximena Guerrero Villa"
};

libro.nombre="Pedro";

console.log(libro["nombre"]);

// 4

let carro = {
    marca: "Toyota",
    color: "Rojo",
    autor: "Ximena Guerrero Villa"
};

carro.estatica ="Genial";

console.log(carro["estatica"]);

// 5

let estudiante = {
    nombre: "Ximena Guerrero",
    edad: 23,
    promedio: 85
};

for (let indice in estudiante){
    console.log(indice+" : "+estudiante[indice])
}