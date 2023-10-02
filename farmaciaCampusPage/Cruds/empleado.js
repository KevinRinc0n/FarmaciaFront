const urlEmple = "http://localhost:5297/api/Empleado";
let empleados = [];

window.addEventListener("DOMContentLoaded", () => {
    getEmpleado();
});

const getEmpleado = () => {
    fetch(urlEmple)
        .then(respuesta => respuesta.json())
        .then(data => {
            empleados = data;
            console.log(empleados);
            mostrarEmpleados(empleados);
        })
        .catch(error => {
            alert("Error: Ha ocurrido un problema");
        });
};

const contenedorEmpleados = document.getElementById("aggEmpleadoBody");

const mostrarEmpleados = (empleados) => {
    let listar = "";
    empleados.forEach(empleado => {
        listar += `
        <tr>
            <th scope="row">${empleado.Id}</th>
            <td>${empleado.Nombre}</td>
            <td>${empleado.Cargo}</td>
            <td>${empleado.FechaContratacion}</td>
            <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEditar" onclick="editarEmpleado(${empleado.Id})">EDITAR</button></td>
            <td><button class="btn btn-danger" onclick="eliminarEmpleado(${empleado.Id})">ELIMINAR</button></td>
        </tr>
        `;
    });
    contenedorEmpleados.innerHTML = listar;
};

const crearEmpleado = () => {
    const formulario = document.getElementById("agregaEmpleado");
    if (!formulario.elements['inputNombre'].value || !formulario.elements['inputCargo'].value || !formulario.elements['inputFechaContratacion'].value) {
        alert("Error: DEBES LLENAR TODOS LOS CAMPOS");
        return;
    }

    const empleado = {
        Nombre: formulario.elements["inputNombre"].value,
        Cargo: formulario.elements["inputCargo"].value,
        FechaContratacion: formulario.elements["inputFechaContratacion"].value,
    };

    fetch(urlEmple, {
        method: "POST",
        body: JSON.stringify(empleado),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        alert("Success: " + respuesta.mensaje);
        getEmpleado();
    })
    .catch(error => {
        alert("Error: " + error);
        document.getElementById("agregaEmpleado").reset();
    });
};

const editarEmpleado = (id) => {
    let empleado = empleados.find(emp => emp.Id === id);

    document.getElementById("editarNombre").value = empleado.Nombre;
    document.getElementById("editarCargo").value = empleado.Cargo;
    document.getElementById("editarFechaContratacion").value = empleado.FechaContratacion;

    document.getElementById("modalEditar").addEventListener("submit", function(event) {
        event.preventDefault();
        subirEmpleado(id);
    });
};

const subirEmpleado = (id) => {
    const empleado = {
        Id: id,
        Nombre: document.getElementById("editarNombre").value,
        Cargo: document.getElementById("editarCargo").value,
        FechaContratacion: document.getElementById("editarFechaContratacion").value
    };

    if (!empleado.Nombre || !empleado.Cargo || !empleado.FechaContratacion) {
        alert("Error: DEBES LLENAR TODOS LOS CAMPOS");
        return;
    }

    fetch(urlEmple + `/${empleado.Id}`, {
        method: "PUT",
        body: JSON.stringify(empleado),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        alert("Success: " + respuesta.mensaje);
        getEmpleado();
    })
    .catch(error => {
        alert("Error: " + error);
    });
};

const eliminarEmpleado = (id) => {
    fetch(`${urlEmple}/${id}`, {
        method: "DELETE"
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        alert("Success: " + respuesta.mensaje);
        getEmpleado();
    })
    .catch(error => {
        alert("Error: " + error);
    });
};