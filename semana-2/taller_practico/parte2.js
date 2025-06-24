let persona = {
  nombre: "Ana",
  edad: 28,
  ocupacion: "Doctora"
};
let tarjeta= `<h2>${persona.nombre}</h2><br><h3>Ocupacion: ${persona.ocupacion}</h3><br><h3>Edad: ${persona.edad}</h3>`


let cancion = {
  titulo: "Los pollitos dicen",
  autor: "Pepita",
  duracion: "2:30"
};
let container = document.getElementById('container')

container.innerHTML+=`<h2>La cancion se llama ${cancion.titulo}, fue escrita por ${cancion.autor} y dura ${cancion.duracion}</h2>`


let productos = {
    nombre: "Papa",
    precio: 2000,
    stock: 13
}
let producto_con = document.getElementById('producto')
producto_con.innerHTML= `<ul>`
for (atributo in productos){
    producto_con.innerHTML+=`<li>${atributo} : ${productos[atributo]}</li>`
}
producto_con.innerHTML+= `</ul>`;

