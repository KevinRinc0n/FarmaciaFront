const urlPacie = "http://localhost:5297/api/Paciente";
let pacientes = [];

window.addEventListener("DOMContentLoaded", () => {
    getPacientes();
});

const getPacientes = () => {
    fetch(urlPacie)
        .then(respuesta => respuesta.json())
        .then(data => {
            pacientes = data;
            console.log(pacientes);
            mostrarPacientes(pacientes);

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
            console.error(error);
        });
};

const contenedorPacientes = document.getElementById("aggPacientBody");

const mostrarPacientes = (pacientes) => {
    let listar = "";
    pacientes.forEach(paciente => {
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
    if (!formulario.elements.inputNaame.value || !formulario.elements.inputTelefono.value || !formulario.elements.inputDireccion.value) {
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    }

    const paciente = {
        Nombre: formulario.elements.inputNaame.value,
        Telefono: formulario.elements.inputTelefono.value,
        IdDireccionFk: formulario.elements.inputDireccion.value
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
            console.error(error);
        });
};

const editarPaciente = (id) => {
    let paciente = pacientes.find(p => p.Id === id);

    document.getElementById("editaNaame").value = paciente.Nombre;
    document.getElementById("editaTele").value = paciente.Telefono;
    document.getElementById("editaDireccionn").value = paciente.IdDireccionFk;

    modalEdit();
};

const subirPaciente = () => {
    const paciente = {
        Nombre: document.getElementById("editaNaame").value,
        Telefono: document.getElementById("editaTele").value,
        IdDireccionFk: document.getElementById("editaDireccionn").value
    };

    if (!paciente.Nombre || !paciente.Telefono || !paciente.IdDireccionFk) {
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    }

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
            console.error(error);
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
            console.error(error);
        });
};
