const urlEmple = "http://localhost:5297/api/Empleado";
let eempleados = [];

window.addEventListener("DOMContentLoaded", () => {
    getEmpleado();
});

const getEmpleado = () => {
    fetch(urlEmple)
        .then(respuesta => respuesta.json())
        .then(data => {
            eempleados = data;
            console.log(eempleados);
            mostrarEmpleados(eempleados);
        })
        .catch(error => {
            console.log("Error: Ha ocurrido un problema");
        });
};

const contenedorEmpleados = document.getElementById("aggEmpleadoBody");

const mostrarEmpleados = (eempleados) => {
    let listar = "";
    eempleados.forEach(empleado => {
        listar += `
        <tr>
            <th scope="row">${empleado.id}</th>
            <td>${empleado.nombre}</td>
            <td>${empleado.cargo}</td>
            <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEditarEmple"  onclick="editarEmpleado(${empleado.id})">EDITAR</button></td>
            <td><button class="btn btn-danger" onClick="eliminarEmpleado(${empleado.id})">ELIMINAR</button></td>
        </tr>
        `;
    });
    contenedorEmpleados.innerHTML = listar;
};

async function crearEmpleado (){
    const inputNombre = document.getElementById("inputNombre").value;
    const inputCargo = document.getElementById("inputCargo").value;
    if (!inputNombre || !inputCargo) {
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    }

    const empleado = {
        Nombre: inputNombre,
        Cargo: inputCargo
    };

    console.log(empleado);

    try {
        const respuesta = await fetch(urlEmple,{
            method: "POST",
            body: JSON.stringify(empleado),
            headers: {"Content-Type": "application/json"}
        });

        getEmpleado();
    } catch(error){
        alert("error", error);
        document.getElementById("agregaEmpleado").reset();
    };
};

const editarEmpleado = (id) => {
    let emplee = eempleados.find(emplee => emplee.id == id);

    document.getElementById("editarNombree").value = emplee.nombre;
    document.getElementById("editarCargo").value = emplee.cargo;

    document.getElementById("modalEditarEmple").setAttribute("data-id", id);
};

async function subirEmpleado() {
    const editarNombre = document.getElementById("editarNombree").value;
    const editarCargo = document.getElementById("editarCargo").value;

    if (!editarNombre || !editarCargo) {
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    }

    const id = document.getElementById("modalEditarEmple").getAttribute("data-id"); 

    const empleado = {
        Nombre: editarNombre,
        Cargo: editarCargo
    };

    try {
        const respuesta = await fetch(`${urlEmple}/${id}`,{
            method: "PUT",
            body: JSON.stringify(empleado),
            headers: {"Content-Type": "application/json"}
        });

        const data = await respuesta.json();
        alert("success", data.mensaje);
        getEmpleado();

    } catch(error){
        alert("error", error);
        // document.getElementById("modalEditarEmple").reset();
    };

};

async function eliminarEmpleado(id) {
    try {
        await fetch(`${urlEmple}/${id}`, {
            method: "DELETE"
        });

        alert("success", 'Empleado eliminado correctamente');

        getEmpleado(); 

    } catch(error) {
        alert("error", error);
    }
}