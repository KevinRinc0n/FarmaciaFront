const urlPacie = "http://localhost:5297/api/Paciente";
let ppacientes = [];

document.addEventListener("DOMContentLoaded", () => {
    getPacientes();
});

const getPacientes = () => {
    fetch(urlPacie)
        .then(respuesta => respuesta.json())
        .then(data => {
            ppacientes = data;
            console.log(ppacientes);
            mostrarPacientes(ppacientes);

            const direccionSelect = document.getElementById("inputDireccion");
            direccionSelect.innerHTML = "";

            data.forEach((ciudad) => {
                const opcion = document.createElement("option");
                opcion.value = ciudad.Id;
                opcion.text = ciudad.Nombre;
                direccionSelect.appendChild(opcion);
            });
        })
        .catch(error => {
            alert("Ha ocurrido un problema al obtener los pacientes");
            console.alert(error);
        });
};

const contenedorPacientes = document.getElementById("aggPacientBody");

const mostrarPacientes = (ppacientes) => {
    let listar = "";
    ppacientes.forEach(paciente => {
        listar += `
        <tr>
            <th scope="row">${paciente.Id}</th>
            <td>${paciente.Nombre}</td>
            <td>${paciente.Telefono}</td>
            <td>${paciente.IdDireccionFk}</td>
            <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEditar" onclick="editarPaciente(${paciente.Id})">EDITAR</button></td>
            <td><button class="btn btn-danger" onclick="eliminarPaciente(${paciente.Id})">ELIMINAR</button></td>
        </tr>
        `;
    });
    contenedorPacientes.innerHTML = listar;
};

const crearPaciente = () => {
    const formulario = document.getElementById("agregaPacienteReally");
    const nombre = formulario.elements.inputNaame.value;
    const telefono = formulario.elements.inputTelefono.value;
    const direccion = formulario.elements.inputDireccion.value;

    if (!nombre || !telefono || !direccion) {
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    }

    const paciente = {
        Nombre: nombre,
        Telefono: telefono,
        IdDireccionFk: direccion
    };

    fetch(urlPacie, {
        method: "POST",
        body: JSON.stringify(paciente),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            alert("Paciente creado exitosamente");
            getPacientes();
            formulario.reset();
        })
        .catch(error => {
            alert("Ha ocurrido un error al crear el paciente");
            console.alert(error);
        });
};

const editarPaciente = (id) => {
    const paciente = ppacientes.find(p => p.Id === id);

    document.getElementById("editaNaame").value = paciente.Nombre;
    document.getElementById("editaTele").value = paciente.Telefono;
    document.getElementById("editaDireccionn").value = paciente.IdDireccionFk;

    modalEdit();
};

const subirPaciente = () => {
    const id = parseInt(document.getElementById("editaId").value);
    const nombre = document.getElementById("editaNaame").value;
    const telefono = document.getElementById("editaTele").value;
    const direccion = document.getElementById("editaDireccionn").value;

    if (!nombre || !telefono || !direccion) {
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    }

    const paciente = {
        Id: id,
        Nombre: nombre,
        Telefono: telefono,
        IdDireccionFk: direccion
    };

    fetch(`${urlPacie}/${paciente.Id}`, {
        method: "PUT",
        body: JSON.stringify(paciente),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            alert("Paciente actualizado exitosamente");
            getPacientes();
        })
        .catch(error => {
            alert("Ha ocurrido un error al actualizar el paciente");
            console.alert(error);
        });
};

const eliminarPaciente = (id) => {
    fetch(`${urlPacie}/${id}`, {
        method: "DELETE"
    })
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            alert("Paciente eliminado exitosamente");
            getPacientes();
        })
        .catch(error => {
            alert("Ha ocurrido un error al eliminar el paciente");
            console.alert(error);
        });
};