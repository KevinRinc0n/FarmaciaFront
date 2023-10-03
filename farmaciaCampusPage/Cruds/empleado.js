const urlEmpleado = "http://localhost:5297/api/Empleado";
let empleados = [];

window.addEventListener("DOMContentLoaded", () => {
    getEmplado();
});

const getEmplado = () =>{
    fetch(urlEmpleado)
    .then(respuesta => respuesta.json())
    .then(data => {
        empleados = data;
        console.log(empleados);
        mostrarEmpleados(empleados);
    })
    .catch(error => {
        alertManager("error", "Ha ocurrido un problema");
    });
};

const contenedorEmpleados = document.getElementById("aggEmpleadoBody");

const mostrarEmpleados = (empleados) =>{
    let listar = "";
    empleados.foreach(empleado =>{
        listar += `
        <tr>
            <th scope="row">${empleado.Id}</th>
            <td>${empleado.Nombre}</td>
            <td>${empleado.Cargo}</td>
            <td>${empleado.FechaContratacion}</td>
            <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEditar" onclick="editarMedicamento(${empleado.Id})>EDITAR</button></td>
            <td><button class="btn btn-danger" onclick="eliminarrMedicamento(${empleado.Id})>ELIMINAR</button></td>
        </tr>
        `
    }); 
    contenedorEmpleados.innerHTML = listar;
};

const crearEmpleado = () => {
    const formulario = document.getElementById("agregaEmpleado");
    if (!formulario.getElementById('inputNombre').lenght || formulario.getElementById('inputCargo').lenght || formulario.getElementById('inputFechaContratacion').lenght)
    {
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    };


const empleado = {
    Nombre: formulario.getElementById("inputNombre"),
    Cargo: formulario.getElementById("inputCargo"),
    FechaContratacion: formulario.getElementById("inputFechaContratacion")
};
console.log(empleado);

    fetch(urlEmpleado,{
        method: "POST",
        body: JSON.stringify(empleado),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(respuesta => respuesta.json())
    .then(respuestaa => {
        alertManager("success", respuestaa,mensaje);
        getEmplado();
    })
    .catch(error =>{
        alertManager("error", error);
        document.getElementById("contenedor").reset();
    });
};

const editarEmpleado = (id) =>{
    let emplead = {};
    empleados.filter(emplee => {
        if(emplee.Id == id){
            emplead = emplee;
        };
    });

    document.getElementById("editarNombree").value = emplead.Nombre;
    document.getElementById("editarCargo").value = emplead.Cargo;
    document.getElementById("editarFechaContratacion").value = emplead.FechaContratacion;

    console.log(emplead)
    modalEdit();
};

const subirEmpleado = () =>{
    const empleado = {
        Nombre: document.getElementById("inputNombre").value,
        Cargo: document.getElementById("inputCargo").value,
        FechaContratacion: document.getElementById("inputFechaContratacion").value
    };

    if (!empleado.Nombre || empleado.Cargo || empleado.FechaContratacion){
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    };
    document.getElementById("").innerHTML = "";

    fetch(urlEmpleado,{
        method: "PUT",
        body: JSON.stringify(empleado),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(respuesta => respuesta.json())
    .then(respuestaa => {
        alert("success", respuestaa,mensaje);
        getEmplado();
    })
    .catch(error =>{
        alert("error", error);
    });
    document.getElementById("").reset();
};

const eliminarEmpleado = (id) =>{
    fetch(`${urlEmpleado}/${id}`,{
        method : "DELETE"
    })

    .then(respuesta => respuesta.json())
    .then(respuestaa =>{
        alert("success", respuestaa.mensaje);
        getEmplado();
    })
    .catch(error =>{
        alert("error", error);
    });
};