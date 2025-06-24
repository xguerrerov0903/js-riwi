let colores= ["Amarillo","Azul","Rojo"];
let container = document.getElementById('container')

colores.forEach(color =>{
    container.innerHTML+=`<h2>El color ${color} es muy bonito</h2>`
});


let frases= ["Hola cielito","Buenos dias","La luna te sonrie"]

let frases_p = []

frases.forEach(frase =>{
    frases_p+=`<p>${frase}</p>`
});

console.log(frases_p)

let array = [0,1,2,3];
let numeros_container = document.getElementById('numero_con')

numeros_container.innerHTML= `<ul>`
array.forEach(numero =>{
    numeros_container.innerHTML+=`<li>${numero}</li>`
})

numeros_container.innerHTML+= `</ul>`;