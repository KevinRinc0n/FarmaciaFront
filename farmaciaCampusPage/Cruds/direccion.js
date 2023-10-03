const urlDirec = "http://localhost:5297/api/Direccion";
let ddirecciones = [];

window.addEventListener("DOMContentLoaded", () => {
    getDireccion();
});

const mostrarMensaje = (mensaje, tipo) => {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.textContent = mensaje;
    mensajeDiv.className = tipo;
};

const getDireccion = () => {
    fetch(urlDirec)
        .then(respuesta => respuesta.json())
        .then(data => {
            ddirecciones = data;
            console.log(ddirecciones);
            mostrarDireccion(ddirecciones);
            const direccionSelect = document.getElementById("inputCiudad");
            direccionSelect.innerHTML = "";
            ddirecciones.forEach((ciudad) => {
                const opcion = document.createElement("option");
                opcion.value = ciudad.id;
                opcion.text = ciudad.idCiudadFk;
                direccionSelect.appendChild(opcion);
            });
        })
        .catch(error => {
            console.log("Ha ocurrido un problema: ", error);
        });
};

const contenedorDirecciones = document.getElementById("aggDireccBody");

const mostrarDireccion = (ddirecciones) => {
    let listar = "";
    ddirecciones.forEach(direccion => {
        listar += `
        <tr>
            <th scope="row">${direccion.id}</th>
            <td>${direccion.tipoViaPrincipal}</td>
            <td>${direccion.numeroViaPrincipal}</td>
            <td>${direccion.numeroViaSecundaria}</td>
            <td>${direccion.barrio}</td>
            <td>${direccion.complemento}</td>
            <td>${direccion.idCiudadFk}</td>
            <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEditarDirecc" onClick="editarDireccion(${direccion.id})">EDITAR</button></td>
            <td><button class="btn btn-danger" onClick="eliminarDireccion(${direccion.id})">ELIMINAR</button></td>
        </tr>
        `;
    });
    contenedorDirecciones.innerHTML = listar;
};

const crearDireccion = () => {
    const formulario = document.getElementById("agregaPaciente");

    const direccion = {
        TipoViaPrincipal: formulario.inputTipoVia.value,
        NumeroViaPrincipal: formulario.inputNumeroVia.value,
        NumeroViaSecundaria: formulario.inputNumeroViaSecunda.value,
        Barrio: formulario.inputBarrio.value,
        Complemento: formulario.inputComplemento.value,
        IdCiudadFk: formulario.inputCiudad.value
    };

    if (!direccion.TipoViaPrincipal || !direccion.NumeroViaPrincipal || !direccion.NumeroViaSecundaria || !direccion.Barrio || !direccion.Complemento || !direccion.IdCiudadFk) {
        mostrarMensaje("DEBES LLENAR TODOS LOS CAMPOS", "error");
        return;
    }

    fetch(urlDirec, {
        method: "POST",
        body: JSON.stringify(direccion),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(respuesta => respuesta.json())
        .then(respuestaa => {
            mostrarMensaje(respuestaa.mensaje, "success");
            getDireccion();
        })
        .catch(error => {
            mostrarMensaje("Error al crear la dirección.", "error");
            console.log("Error:", error);
        });
};

const editarDireccion = (id) => {
    let direccion = ddirecciones.find(direction => direction.Id === id);

    const direccionSelect = document.getElementById("dieccCiudadEditar");
    direccionSelect.innerHTML = "";
    ddirecciones.forEach((ciudad) => {
        const opcion = document.createElement("option");
        opcion.value = ciudad.Id;
        opcion.text = ciudad.IdCiudadFk;
        direccionSelect.appendChild(opcion);
    });

    document.getElementById("editarVia").value = direccion.TipoViaPrincipal;
    document.getElementById("editarNumeroVia").value = direccion.NumeroViaPrincipal;
    document.getElementById("editarNumeroViaSecundario").value = direccion.NumeroViaSecundaria;
    document.getElementById("editarBarrio").value = direccion.Barrio;
    document.getElementById("editarComplemento").value = direccion.Complemento;
    document.getElementById("dieccCiudadEditar").value = direccion.IdCiudadFk;
};

const subirDireccion = (id) => {
    const formulario = document.getElementById("tuFormulario"); 

    const direccion = {
        TipoViaPrincipal: formulario.editarVia.value,
        NumeroViaPrincipal: formulario.editarNumeroVia.value,
        NumeroViaSecundaria: formulario.editarNumeroViaSecundario.value,
        Barrio: formulario.editarBarrio.value,
        Complemento: formulario.editarComplemento.value,
        IdCiudadFk: formulario.dieccCiudadEditar.value
    };

    if (!direccion.TipoViaPrincipal || !direccion.NumeroViaPrincipal || !direccion.NumeroViaSecundaria || !direccion.Barrio || !direccion.Complemento || !direccion.IdCiudadFk) {
        mostrarMensaje("DEBES LLENAR TODOS LOS CAMPOS", "error");
        return;
    }
    
    fetch(`${urlDirec}/${id}`, {
        method: "PUT",
        body: JSON.stringify(direccion),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(respuesta => respuesta.json())
        .then(respuestaa => {
            mostrarMensaje(respuestaa.mensaje, "success");
            getDireccion();
        })
        .catch(error => {
            mostrarMensaje("Error al editar la dirección.", "error");
            console.log("Error:", error);
        });
};

const eliminarDireccion = (id) => {
    fetch(`${urlDirec}/${id}`, {
        method: "DELETE"
    })
        .then(respuesta => respuesta.json())
        .then(respuestaa => {
            mostrarMensaje(respuestaa.mensaje, "success");
            getDireccion();
        })
        .catch(error => {
            mostrarMensaje("Error al eliminar la dirección.", "error");
            console.log("Error:", error);
        });
};