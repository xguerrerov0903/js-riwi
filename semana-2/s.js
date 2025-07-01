let array = [0,1,2,3];
let container = document.getElementById('container')

container.innerHTML= `<ul>`
array.forEach(numero =>{
    container.innerHTML+=`<li>${numero}</li>`
})

container.innerHTML+= `</ul>`;

let formularioTareas = document.getElementById(`formulario-tarea`);
const tareas = [{nombre: `tarea1`, completada: true}];
formularioTareas.addEventListener(`submit`, function (event){
    event.preventDefault();
    // let datas = document.getElementById(`descripcion`).value
    const datos = new FormData (formularioTareas);
    const tarea = {nombre: datos.get(`tarea`), completada: false} ;
    tareas.push(tarea);
    console.log(tareas)
    listarTareas()
})
