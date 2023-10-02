const urlProvee = "http://localhost:5297/api/Proveedor";
let proveedores = [];

window.addEventListener("DOMContentLoaded", () => {
    getProveedores();
});

const getProveedores = () => {
    fetch(urlProvee)
    .then(respuesta => respuesta.json())
    .then(data => {
        proveedores = data;
        console.log(proveedores);
        mostrarProveedores(proveedores);

        const direccionSelect = document.getElementById("inputDirec");

        direccionSelect.innerHTML = "";
        proveedores.forEach((direccion) => {
            const opcion = document.createElement("option");
            opcion.value = direccion.Id;
            opcion.textContent = direccion.Nombre; 
            direccionSelect.appendChild(opcion);
        });
    })
    .catch(error => {
        alert("error", "Ha ocurrido un problema");
    });
};

const contenedorProveedores = document.getElementById("aggProveeBody");

const mostrarProveedores = (proveedores) => {
    let listar = "";
    proveedores.forEach(proveedor => {
        listar += `
        <tr>
            <th scope="row">${proveedor.Id}</th>
            <td>${proveedor.Nombre}</td>
            <td>${proveedor.Contacto}</td>
            <td>${proveedor.IdDireccionFk}</td>
            <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEditar" onclick="editarProveedor(${proveedor.Id})">EDITAR</button></td>
            <td><button class="btn btn-danger" onclick="eliminarProveedor(${proveedor.Id})">ELIMINAR</button></td>
        </tr>
        `;
    });
    contenedorProveedores.innerHTML = listar;
};

const crearProveedor = () => {
    const formulario = document.getElementById("agregaProvee");
    if (!formulario.getElementById('inputName').value || !formulario.getElementById('inputContact').value || !formulario.getElementById('inputDirec').value) {
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    }

    const empleado = {
        Nombre: formulario.getElementById("inputName").value,
        Contacto: formulario.getElementById("inputContact").value,
        IdDireccionFk: formulario.getElementById("inputDirec").value
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
        alert("error", error);
        document.getElementById("contenedor").reset();
    });
};

const editarProveedor = (id) => {
    let prov = {};
    proveedores.forEach(provv => {
        if (provv.Id == id) {
            prov = provv;
        }
    });

    const direccionSelect = document.getElementById("editaDireccion");

    direccionSelect.innerHTML = "";
    proveedores.forEach((direccion) => {
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
        Nombre: document.getElementById("inputName").value,
        Contacto: document.getElementById("inputContact").value,
        IdDireccionFk: document.getElementById("inputDirec").value
    };

    if (!empleado.Nombre || !empleado.Contacto || !empleado.IdDireccionFk) {
        alert("DEBES LLENAR TODOS LOS CAMPOS");
        return;
    }
    document.getElementById("agregaProvee").reset();

    fetch(urlProvee, {
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
        alert("error", error);
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
        alert("error", error);
    });
};