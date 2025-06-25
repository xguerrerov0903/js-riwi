let array = [0,1,2,3];
let numeros_container = document.getElementById('numero_con')

numeros_container.innerHTML= `<ul>`
array.forEach(numero =>{
    numeros_container.innerHTML+=`<li>${numero}</li>`
})

numeros_container.innerHTML+= `</ul>`;