const urlProvee = "http://localhost:5297/api/Proveedor";
let pproveedores = [];

window.addEventListener("DOMContentLoaded", () => {
    getProveedores();
});

const getProveedores = () => {
    fetch(urlProvee)
    .then(respuesta => respuesta.json())
    .then(data => {
        pproveedores = data;
        console.log(pproveedores);
        mostrarProveedores(pproveedores);

        const direccionSelect = document.getElementById("inputDirec");

        direccionSelect.innerHTML = "";
        pproveedores.forEach((direccion) => {
            const opcion = document.createElement("option");
            opcion.value = direccion.id;
            opcion.textContent = direccion.nombre; 
            direccionSelect.appendChild(opcion);
        });
    })
    .catch(error => {
        console.log("Ha ocurrido un problema:", error);
    });
};

const contenedorProveedores = document.getElementById("aggProveeBody");

const mostrarProveedores = (pproveedores) => {
    let listar = "";
    pproveedores.forEach(proveedor => {
        listar += `
        <tr>
            <th scope="row">${proveedor.id}</th>
            <td>${proveedor.nombre}</td>
            <td>${proveedor.contacto}</td>
            <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEditarProvee" onClick="editarProveedor(${proveedor.id})">EDITAR</button></td>
            <td><button class="btn btn-danger" onClick="eliminarProveedor(${proveedor.id})">ELIMINAR</button></td>
        </tr>
        `;
    });
    contenedorProveedores.innerHTML = listar;
};

const crearProveedor = () => {
    const formulario = document.getElementById("agregaProvee");
    if (!formulario.querySelector('#inputName').value || !formulario.querySelector('#inputContact').value || !formulario.querySelector('#inputDirec').value) {
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    }

    const empleado = {
        Nombre: formulario.querySelector("#inputName").value,
        Contacto: formulario.querySelector("#inputContact").value,
        IdDireccionFk: formulario.querySelector("#inputDirec").value
    };
    console.log(empleado);

    fetch(urlProvee, {
        method: "POST",
        body: JSON.stringify(empleado),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        alert("success", respuesta.mensaje);
        getProveedores();
    })
    .catch(error => {
        console.alert("Ha ocurrido un error:", error);
        formulario.reset();
    });
};

const editarProveedor = (id) => {
    let prov = {};
    pproveedores.forEach(provv => {
        if (provv.Id == id) {
            prov = provv;
        }
    });

    const direccionSelect = document.getElementById("editaDireccion");

    direccionSelect.innerHTML = "";
    pproveedores.forEach((direccion) => {
        const opcion = document.createElement("option");
        opcion.value = direccion.Id;
        opcion.textContent = direccion.Nombre; 
        direccionSelect.appendChild(opcion);
    });

    document.getElementById("editaName").value = prov.Nombre;
    document.getElementById("editaContacto").value = prov.Contacto;
    document.getElementById("editaDireccion").value = prov.IdDireccionFk;

    console.log(prov);
};

const subirProveedor = () => {
    const empleado = {
        Nombre: document.getElementById("editaName").value,
        Contacto: document.getElementById("editaContacto").value,
        IdDireccionFk: document.getElementById("editaDireccion").value
    };

    if (!empleado.Nombre || !empleado.Contacto || !empleado.IdDireccionFk) {
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    }

    fetch(`${urlProvee}/${empleado.Id}`, {
        method: "PUT",
        body: JSON.stringify(empleado),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        alert("success", respuesta.mensaje);
        getProveedores();
    })
    .catch(error => {
        console.alert("Ha ocurrido un error:", error);
    });
};

const eliminarProveedor = (id) => {
    fetch(`${urlProvee}/${id}`, {
        method: "DELETE"
    })
    .then(respuesta => respuesta.json())
    .then(respuesta => {
        alert("success", respuesta.mensaje);
        getProveedores();
    })
    .catch(error => {
        console.alert("Ha ocurrido un error:", error);
    });
};