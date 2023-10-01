const url = "http://localhost:5297/api/Paciente";
let pacientes = [];

window.addEventListener("DOMContentLoaded", () => {
    getPacientes();
});

const getPacientes = () =>{
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data => {
        pacientes = data;
        console.log(pacientes);
        mostrarPacientes(pacientes);
    })
    .catch(error => {
        alert("error", "Ha ocurrido un problema");
    });
};

const contenedorPacientes = document.getElementById("");

const mostrarPacientes = (pacientes) =>{
    let listar = "";
    pacientes.foreach(paciente =>{
        listar += `
        <tr>
            <th scope="row">${paciente.Id}</th>
            <td>${paciente.Nombre}</td>
            <td>${paciente.Telefono}</td>
            <td>${paciente.IdDireccionFk}</td>
            <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEditar" onclick="editarMedicamento(${paciente.Id})>EDITAR</button></td>
            <td><button class="btn btn-danger" onclick="eliminarrMedicamento(${paciente.Id})>ELIMINAR</button></td>
        </tr>
        `
    }); 
    contenedorPacientes.innerHTML = listar;
};

const crearPaciente = () => {
    const formulario = document.getElementById("agregaPacienteReally");
    if (!formulario.getElementById('inputNaame').lenght || formulario.getElementById('inputTelefono').lenght || formulario.getElementById('inputDireccion').lenght)
    {
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    };


const paciente = {
    Nombre: formulario.getElementById("inputNaame"),
    Telefono: formulario.getElementById("inputTelefono"),
    IdDireccionFk: formulario.getElementById("inputDireccion")
};
console.log(paciente);

    fetch(url,{
        method: "POST",
        body: JSON.stringify(paciente),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(respuesta => respuesta.json())
    .then(respuestaa => {
        alert("success", respuestaa,mensaje);
        getProvee();
    })
    .catch(error =>{
        alert("error", error);
        document.getElementById("contenedor").reset();
    });
};

const editarPacient = (id) =>{
    let pacient = {};
    pacientes.filter(pacientt => {
        if(pacientt.Id == id){
            pacient = pacientt;
        };
    });

    document.getElementById("editaNaame").value = pacient.Nombre;
    document.getElementById("editaTele").value = pacient.Telefono;
    document.getElementById("editaDireccionn").value = pacient.IdDireccionFk;

    console.log(pacient)
    modalEdit();
};

const subirPacient = () =>{
    const paciente = {
        Nombre: document.getElementById("inputNaame").value,
        Telefono: document.getElementById("inputTelefono").value,
        IdDireccionFk: document.getElementById("inputDireccion").value
    };

    if (!paciente.Nombre || paciente.Telefono || paciente.IdDireccionFk){
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    };
    document.getElementById("").innerHTML = "";

    fetch(url,{
        method: "PUT",
        body: JSON.stringify(paciente),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(respuesta => respuesta.json())
    .then(respuestaa => {
        alert("success", respuestaa,mensaje);
        getPacientes();
    })
    .catch(error =>{
        alert("error", error);
    });
    document.getElementById("").reset();
};

const eliminarProveedor = (id) =>{
    fetch(`${url}/${id}`,{
        method : "DELETE"
    })

    .then(respuesta => respuesta.json())
    .then(respuestaa =>{
        alert("success", respuestaa.mensaje);
        getPacientes();
    })
    .catch(error =>{
        alert("error", error);
    });
};