const urlDirec = "http://localhost:5297/api/Direccion";
let direcciones = [];

window.addEventListener("DOMContentLoaded", () => {
    getDireccion();
});

const getDireccion = () => {
    fetch(urlDirec)
        .then(respuesta => respuesta.json())
        .then(data => {
            direcciones = data;
            console.log(direcciones);
            mostrarDireccion(direcciones);
            const direccionSelect = document.getElementById("inputCiudad");
            direccionSelect.innerHTML = "";
            direcciones.forEach((ciudad) => {
                const opcion = document.createElement("option");
                opcion.value = ciudad.Id;
                opcion.text = ciudad.IdCiudadFk;
                direccionSelect.appendChild(opcion);
            });
        })
        .catch(error => {
            console.error("Ha ocurrido un problema: ", error);
        });
};

const contenedorDirecciones = document.getElementById("aggDireccBody");

const mostrarDireccion = (direcciones) => {
    let listar = "";
    direcciones.forEach(direccion => {
        listar += `
        <tr>
            <th scope="row">${direccion.Id}</th>
            <td>${direccion.TipoViaPrincipal}</td>
            <td>${direccion.NumeroViaPrincipal}</td>
            <td>${direccion.NumeroViaSecundaria}</td>
            <td>${direccion.Barrio}</td>
            <td>${direccion.Complemento}</td>
            <td>${direccion.IdCiudadFk}</td>
            <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEditar" onclick="editarDireccion(${direccion.Id})">EDITAR</button></td>
            <td><button class="btn btn-danger" onclick="eliminarDireccion(${direccion.Id})">ELIMINAR</button></td>
        </tr>
        `;
    });
    contenedorDirecciones.innerHTML = listar;
};

const crearDireccion = () => {
    const formulario = document.getElementById("agregaPaciente");
    if (!formulario.inputTipoVia.value || !formulario.inputNumeroVia.value || !formulario.inputNumeroViaSecunda.value || !formulario.inputBarrio.value || !formulario.inputComplemento.value || !formulario.inputCiudad.value) {
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    }

    const direccion = {
        TipoViaPrincipal: formulario.inputTipoVia.value,
        NumeroViaPrincipal: formulario.inputNumeroVia.value,
        NumeroViaSecundaria: formulario.inputNumeroViaSecunda.value,
        Barrio: formulario.inputBarrio.value,
        Complemento: formulario.inputComplemento.value,
        IdCiudadFk: formulario.inputCiudad.value
    };

    fetch(urlDirec, {
        method: "POST",
        body: JSON.stringify(direccion),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(respuesta => respuesta.json())
        .then(respuestaa => {
            alert("success", respuestaa.mensaje);
            getDireccion();
        })
        .catch(error => {
            alert("error", error);
            formulario.reset();
        });
};

const editarDireccion = (id) => {
    let direccion = direcciones.find(direction => direction.Id === id);

    const direccionSelect = document.getElementById("dieccCiudadEditar");
    direccionSelect.innerHTML = "";
    direcciones.forEach((ciudad) => {
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

    console.log(direccion);
};

const subirDireccion = () => {
    const direccion = {
    };

    if (!direccion.TipoViaPrincipal || !direccion.NumeroViaPrincipal || !direccion.NumeroViaSecundaria || !direccion.Barrio || !direccion.Complemento || !direccion.IdCiudadFk) {
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    }

    fetch(`${urlDirec}/${direccion.Id}`, {
        method: "PUT",
        body: JSON.stringify(direccion),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(respuesta => respuesta.json())
        .then(respuestaa => {
            alert("success", respuestaa.mensaje);
            getDireccion();
        })
        .catch(error => {
            alert("error", error);
        });
};

const eliminarDireccion = (id) => {
    fetch(`${urlDirec}/${id}`, {
        method: "DELETE"
    })
        .then(respuesta => respuesta.json())
        .then(respuestaa => {
            alert("success", respuestaa.mensaje);
            getDireccion();
        })
        .catch(error => {
            alert("error", error);
        });
};
