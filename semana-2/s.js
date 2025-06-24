let array = [0,1,2,3];
let container = document.getElementById('container')

container.innerHTML= `<ul>`
array.forEach(numero =>{
    container.innerHTML+=`<li>${numero}</li>`
})

container.innerHTML+= `</ul>`;