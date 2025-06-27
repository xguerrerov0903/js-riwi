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


function listarTareas(){
    let listarTareasDiv = document.getElementById(`lista-tareas`)
    listarTareasDiv.innerHTML = ``
    let html = `<table>
    <tr>
    <th>Tarea</th>
    <th>Estado</th>
    <th>completar</th>
    <th>Eliminar</th>
    </tr>`
    for (let tarea of tareas){
        if (tarea.completada === false){
            html += `<tr style="background-color:gray;">
            <td>${tarea[`nombre`]}</td>
            <td>Sin completar</td>
            <td><button class="completar-btn" type="button" data-nombre="${tarea.nombre}">Completar</button></td>
            <td><button class="eliminar-btn"  type="button" data-nombre="${tarea.nombre}">Eliminar</button></td>
            </tr>`
        }
        else if (tarea.completada === true){
            html += `<tr style="background-color:green;">
            <td>${tarea[`nombre`]}</td>
            <td>completada</td>
            <td><button class="completar-btn" type="button" data-nombre="${tarea.nombre}" disabled>Completar</button></td>
            <td><button class="eliminar-btn" type="button" data-nombre="${tarea.nombre}">Eliminar</button></td>
            </tr>`
        }
    }
    html += `</table>`
    listarTareasDiv.innerHTML = html

    document.querySelectorAll(`.completar-btn`).forEach(btn =>{
        btn.addEventListener(`click`, function(){
            const nombre = this.dataset.nombre;
            tareas.forEach(tarea =>{
                if (tarea.nombre == nombre){
                    tarea.completada = true
                    }
            })
            listarTareas()

        })
    })

    document.querySelectorAll(`.eliminar-btn`).forEach(btn =>{
        
        btn.addEventListener(`click`, function(){
            const nombre = this.dataset.nombre;
            const index = tareas.findIndex(tarea => tarea.nombre === nombre)
                if (index!= -1){
                    tareas.splice(index, 1)
                }
            
            listarTareas()
        })
        
    })

}

listarTareas()

